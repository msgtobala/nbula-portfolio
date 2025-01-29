import React from 'react';
import { JobFilters } from '../../types/job';

interface JobFiltersPanelProps {
  filters: JobFilters;
  setFilters: React.Dispatch<React.SetStateAction<JobFilters>>;
}

export default function JobFiltersPanel({ filters, setFilters }: JobFiltersPanelProps) {
  const handleSkillChange = (skill: string) => {
    setFilters(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  return (
    <div className="bg-dark-700/50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-light-100 mb-4">Filters</h3>
      
      {/* Location Filter */}
      <div className="mb-6">
        <label className="block text-light-200 text-sm font-medium mb-2">
          Location
        </label>
        <input
          type="text"
          value={filters.location}
          onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
          className="w-full bg-dark-800 border border-dark-700 rounded-lg px-3 py-2 text-light-100 focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Filter by location"
        />
      </div>

      {/* Department Filter */}
      <div className="mb-6">
        <label className="block text-light-200 text-sm font-medium mb-2">
          Department
        </label>
        <select
          value={filters.department}
          onChange={(e) => setFilters(prev => ({ ...prev, department: e.target.value }))}
          className="w-full bg-dark-800 border border-dark-700 rounded-lg px-3 py-2 text-light-100 focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">All Departments</option>
          <option value="Engineering">Engineering</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="HR">HR</option>
        </select>
      </div>

      {/* Interview Type Filter */}
      <div className="mb-6">
        <label className="block text-light-200 text-sm font-medium mb-2">
          Interview Type
        </label>
        <select
          value={filters.interviewType}
          onChange={(e) => setFilters(prev => ({ ...prev, interviewType: e.target.value }))}
          className="w-full bg-dark-800 border border-dark-700 rounded-lg px-3 py-2 text-light-100 focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">All Types</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      {/* Active/Hiring Status Filters */}
      <div className="mb-6">
        <label className="block text-light-200 text-sm font-medium mb-2">
          Status
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.isActive === true}
              onChange={(e) => setFilters(prev => ({ 
                ...prev, 
                isActive: e.target.checked ? true : null 
              }))}
              className="rounded border-dark-700 text-primary focus:ring-primary"
            />
            <span className="ml-2 text-light-200">Active Jobs Only</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.isActivelyHiring === true}
              onChange={(e) => setFilters(prev => ({ 
                ...prev, 
                isActivelyHiring: e.target.checked ? true : null 
              }))}
              className="rounded border-dark-700 text-primary focus:ring-primary"
            />
            <span className="ml-2 text-light-200">Actively Hiring</span>
          </label>
        </div>
      </div>

      {/* Reset Filters */}
      <button
        onClick={() => setFilters({
          search: '',
          location: '',
          department: '',
          skills: [],
          interviewType: '',
          isActive: true,
          isActivelyHiring: null,
        })}
        className="w-full bg-dark-800 text-light-200 px-4 py-2 rounded-lg hover:bg-dark-700 transition-colors"
      >
        Reset Filters
      </button>
    </div>
  );
}