import React from 'react';
import { SortOption } from '../../types/job';
import Dropdown from '../ui/Dropdown';

interface JobSortProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const sortOptions = [
  { label: 'Newest First', value: 'datePosted-desc' },
  { label: 'Oldest First', value: 'datePosted-asc' },
  { label: 'Title (A-Z)', value: 'title-asc' },
  { label: 'Title (Z-A)', value: 'title-desc' },
  { label: 'Salary (High-Low)', value: 'salary-desc' },
  { label: 'Salary (Low-High)', value: 'salary-asc' },
  { label: 'Experience (High-Low)', value: 'experience-desc' },
  { label: 'Experience (Low-High)', value: 'experience-asc' },
];

export default function JobSort({ value, onChange }: JobSortProps) {
  return (
    <div className="flex gap-2">
      <Dropdown
        value={`${value.field}-${value.direction}`}
        onChange={(selectedValue) => {
          const [field, direction] = selectedValue.split('-');
          onChange({ 
            field: field as SortOption['field'], 
            direction: direction as 'asc' | 'desc' 
          });
        }}
        options={sortOptions}
        placeholder="Sort by"
        className="w-48"
      />
    </div>
  );
}