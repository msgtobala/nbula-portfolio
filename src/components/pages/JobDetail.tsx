import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { format } from 'date-fns';
import { ArrowLeft, MapPin, Calendar, Building2, Briefcase, IndianRupee, Users, Monitor } from 'lucide-react';
import { db } from '../../lib/firebase';
import { Job } from '../../types/job';
import GradientText from '../ui/GradientText';

const formatIndianRupees = (amount: number) => {
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  });
  return formatter.format(amount);
};

export default function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      if (!id) return;
      
      try {
        const jobDoc = await getDoc(doc(db, 'jobs', id));
        if (jobDoc.exists()) {
          setJob({
            id: jobDoc.id,
            ...jobDoc.data(),
            datePosted: jobDoc.data().datePosted.toDate(),
          } as Job);
        }
      } catch (error) {
        console.error('Error fetching job:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-900 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-dark-700/50 rounded w-1/3"></div>
            <div className="space-y-4">
              <div className="h-6 bg-dark-700/50 rounded w-3/4"></div>
              <div className="h-6 bg-dark-700/50 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-dark-900 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-light-100 mb-4">Job Not Found</h2>
            <p className="text-light-200 mb-8">The job you're looking for doesn't exist or has been removed.</p>
            <Link
              to="/careers"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Careers
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/careers"
          className="inline-flex items-center text-light-200 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Careers
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <GradientText>{job.title}</GradientText>
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex items-center gap-2 text-light-200">
              <MapPin size={18} />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-light-200">
              <Building2 size={18} />
              <span>{job.department.label}</span>
            </div>
            <div className="flex items-center gap-2 text-light-200">
              <Calendar size={18} />
              <span>{format(job.datePosted, 'MMM d, yyyy')}</span>
            </div>
            <div className="flex items-center gap-2 text-light-200">
              <Monitor size={18} />
              <span>{job.interviewType.label}</span>
            </div>
          </div>
        </div>

        {/* Key Details */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-dark-700/50 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-primary mb-1">
              <Briefcase size={18} />
              <span className="font-medium">Experience</span>
            </div>
            <p className="text-light-100">{job.experience} years</p>
          </div>
          <div className="bg-dark-700/50 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-primary mb-1">
              <IndianRupee size={18} />
              <span className="font-medium">Salary</span>
            </div>
            <p className="text-light-100">{formatIndianRupees(job.salary)}</p>
          </div>
          <div className="bg-dark-700/50 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-primary mb-1">
              <Users size={18} />
              <span className="font-medium">Department</span>
            </div>
            <p className="text-light-100">{job.department.label}</p>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-light-100 mb-4">Required Skills</h2>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-light-100 mb-4">Job Description</h2>
          <div 
            className="prose prose-invert max-w-none bg-dark-700/30 rounded-lg p-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2 [&>ul>li>p]:text-light-200 [&>p]:text-light-200 [&>p]:mb-4 [&>ul]:text-light-200 marker:text-light-200"
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
        </div>

        {/* Application Section */}
        <div className="bg-dark-700/50 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-light-100 mb-4">Interested in this position?</h2>
          <p className="text-light-200 mb-6">
            We're looking for passionate individuals to join our team.
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}