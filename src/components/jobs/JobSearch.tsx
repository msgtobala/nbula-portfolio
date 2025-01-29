import React from 'react';
import { Search } from 'lucide-react';

interface JobSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function JobSearch({ value, onChange }: JobSearchProps) {
  return (
    <div className="relative flex-1">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-light-200" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full bg-dark-700/50 border border-dark-700 rounded-lg pl-10 pr-3 py-2 text-light-100 placeholder-light-200 focus:ring-2 focus:ring-primary focus:border-transparent"
        placeholder="Search jobs by title or skills..."
      />
    </div>
  );
}