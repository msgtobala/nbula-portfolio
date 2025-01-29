import React from 'react';
import { format } from 'date-fns';
import { MapPin, Calendar, Building2 } from 'lucide-react';
import { Job } from '../../types/job';

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

export default function JobCard({ job, onClick }: JobCardProps) {
  return (
    <div 
      className="bg-dark-700/50 rounded-lg p-6 hover:bg-dark-700/70 transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-light-100 hover:text-primary transition-colors">
            {job.title}
          </h3>
          <div className="flex items-center gap-4 mt-2 text-light-200">
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Building2 size={16} />
              <span>{job.department}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{format(job.datePosted, 'MMM d, yyyy')}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {job.isActivelyHiring && (
            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-sm rounded">
              Actively Hiring
            </span>
          )}
          {!job.isActive && (
            <span className="px-2 py-1 bg-red-500/20 text-red-400 text-sm rounded">
              Inactive
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {job.skills.slice(0, 4).map((skill, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-primary/20 text-primary text-sm rounded"
          >
            {skill}
          </span>
        ))}
        {job.skills.length > 4 && (
          <span className="px-2 py-1 bg-dark-800 text-light-200 text-sm rounded">
            +{job.skills.length - 4} more
          </span>
        )}
      </div>
    </div>
  );
}