import React from 'react';
import { JobFilters } from '../../types/job';
import Dropdown from '../ui/Dropdown';
import Checkbox from '../ui/Checkbox';

interface JobFiltersPanelProps {
  filters: JobFilters;
  setFilters: React.Dispatch<React.SetStateAction<JobFilters>>;
}

const departmentOptions = [
  { label: 'All Departments', value: '' },
  { label: 'Engineering', value: 'Engineering' },
  { label: 'Design', value: 'Design' },
  { label: 'Product', value: 'Product' },
  { label: 'Marketing', value: 'Marketing' },
  { label: 'Sales', value: 'Sales' },
  { label: 'Customer Support', value: 'Customer Support' },
  { label: 'Human Resources', value: 'Human Resources' },
  { label: 'Finance', value: 'Finance' },
  { label: 'Operations', value: 'Operations' },
  { label: 'Legal', value: 'Legal' }
];

const interviewTypeOptions = [
  { label: 'All Types', value: '' },
  { label: 'Online', value: 'Online' },
  { label: 'Offline', value: 'Offline' },
  { label: 'Hybrid', value: 'Hybrid' },
];

export default function JobFiltersPanel({ filters, setFilters }: JobFiltersPanelProps) {
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
        <Dropdown
          value={filters.department}
          onChange={(value) => setFilters(prev => ({ ...prev, department: value }))}
          options={departmentOptions}
          placeholder="All Departments"
        />
      </div>

      {/* Interview Type Filter */}
      <div className="mb-6">
        <label className="block text-light-200 text-sm font-medium mb-2">
          Interview Type
        </label>
        <Dropdown
          value={filters.interviewType}
          onChange={(value) => setFilters(prev => ({ ...prev, interviewType: value }))}
          options={interviewTypeOptions}
          placeholder="All Types"
        />
      </div>

      {/* Active/Hiring Status Filters */}
      <div className="mb-6">
        <label className="block text-light-200 text-sm font-medium mb-2">
          Status
        </label>
        <div className="space-y-3">
          <Checkbox
            checked={filters.isActivelyHiring === true}
            onChange={(checked) => setFilters(prev => ({ 
              ...prev, 
              isActivelyHiring: checked ? true : null 
            }))}
            label="Actively Hiring"
          />
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