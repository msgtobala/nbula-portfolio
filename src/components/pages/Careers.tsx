import React, { useState, useEffect } from 'react';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { Job, JobFilters, SortOption } from '../../types/job';
import JobCard from '../jobs/JobCard';
import JobFiltersPanel from '../jobs/JobFiltersPanel';
import JobSearch from '../jobs/JobSearch';
import JobSort from '../jobs/JobSort';
import JobModal from '../jobs/JobModal';

export default function Careers() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [filters, setFilters] = useState<JobFilters>({
    search: '',
    location: '',
    department: '',
    skills: [],
    interviewType: '',
    isActive: true,
    isActivelyHiring: null,
  });
  const [sortOption, setSortOption] = useState<SortOption>({
    field: 'datePosted',
    direction: 'desc',
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    applyFiltersAndSort();
  }, [jobs, filters, sortOption]);

  const fetchJobs = async () => {
    try {
      const jobsRef = collection(db, 'jobs');
      const q = query(jobsRef, where('isActive', '==', true), orderBy('datePosted', 'desc'));
      const querySnapshot = await getDocs(q);
      
      const fetchedJobs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        datePosted: doc.data().datePosted.toDate(),
      })) as Job[];
      
      setJobs(fetchedJobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const applyFiltersAndSort = () => {
    let filtered = [...jobs];

    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchLower) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchLower))
      );
    }

    // Apply other filters
    if (filters.location) {
      filtered = filtered.filter(job => 
        job.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.department) {
      filtered = filtered.filter(job => job.department.value === filters.department);
    }

    if (filters.skills.length > 0) {
      filtered = filtered.filter(job => 
        filters.skills.every(skill => 
          job.skills.includes(skill)
        )
      );
    }

    if (filters.interviewType) {
      filtered = filtered.filter(job => job.interviewType === filters.interviewType);
    }

    if (filters.isActive !== null) {
      filtered = filtered.filter(job => job.isActive === filters.isActive);
    }

    if (filters.isActivelyHiring !== null) {
      filtered = filtered.filter(job => job.isActivelyHiring === filters.isActivelyHiring);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      const aValue = a[sortOption.field];
      const bValue = b[sortOption.field];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortOption.direction === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      return sortOption.direction === 'asc'
        ? (aValue as number) - (bValue as number)
        : (bValue as number) - (aValue as number);
    });

    setFilteredJobs(filtered);
  };

  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-light-100 mb-2">Careers</h1>
        <p className="text-light-200 mb-8">Join our team and be part of something extraordinary</p>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filters Panel */}
          <div className="lg:col-span-1">
            <JobFiltersPanel
              filters={filters}
              setFilters={setFilters}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
              <JobSearch
                value={filters.search}
                onChange={(value) => setFilters(prev => ({ ...prev, search: value }))}
              />
              <JobSort
                value={sortOption}
                onChange={setSortOption}
              />
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
                <p className="text-light-200 mt-4">Loading jobs...</p>
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className="text-center py-12 bg-dark-700/50 rounded-lg">
                <p className="text-light-200">No jobs found matching your criteria</p>
              </div>
            ) : (
              <div className="grid gap-6">
                {filteredJobs.map(job => (
                  <JobCard
                    key={job.id}
                    job={job}
                    onClick={() => setSelectedJob(job)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {selectedJob && (
          <JobModal
            job={selectedJob}
            onClose={() => setSelectedJob(null)}
          />
        )}
      </div>
    </div>
  );
}