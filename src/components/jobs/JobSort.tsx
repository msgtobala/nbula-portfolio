import React from 'react';
import { SortOption } from '../../types/job';

interface JobSortProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function JobSort({ value, onChange }: JobSortProps) {
  return (
    <div className="flex gap-2">
      <select
        value={`${value.field}-${value.direction}`}
        onChange={(e) => {
          const [field, direction] = e.target.value.split('-');
          onChange({ 
            field: field as SortOption['field'], 
            direction: direction as 'asc' | 'desc' 
          });
        }}
        className="bg-dark-700/50 border border-dark-700 rounded-lg px-3 py-2 text-light-100 focus:ring-2 focus:ring-primary focus:border-transparent"
      >
        <option value="datePosted-desc">Newest First</option>
        <option value="datePosted-asc">Oldest First</option>
        <option value="title-asc">Title (A-Z)</option>
        <option value="title-desc">Title (Z-A)</option>
        <option value="salary-desc">Salary (High-Low)</option>
        <option value="salary-asc">Salary (Low-High)</option>
        <option value="experience-desc">Experience (High-Low)</option>
        <option value="experience-asc">Experience (Low-High)</option>
      </select>
    </div>
  );
}