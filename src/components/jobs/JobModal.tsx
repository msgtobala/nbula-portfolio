import React from 'react';
import { format } from 'date-fns';
import { X, MapPin, Calendar, Building2, Briefcase, DollarSign } from 'lucide-react';
import { Job } from '../../types/job';

interface JobModalProps {
  job: Job;
  onClose: () => void;
}

export default function JobModal({ job, onClose }: JobModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-dark-800 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-dark-800 p-6 border-b border-dark-700 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-light-100">{job.title}</h2>
            <div className="flex flex-wrap gap-4 mt-2 text-light-200">
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Building2 size={16} />
                <span>{job.department.label}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{format(job.datePosted, 'MMM d, yyyy')}</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-light-200 hover:text-light-100 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Key Details */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-dark-700/50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-primary mb-1">
                <Briefcase size={16} />
                <span className="font-medium">Experience</span>
              </div>
              <p className="text-light-100">{job.experience} years</p>
            </div>
            <div className="bg-dark-700/50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-primary mb-1">
                <DollarSign size={16} />
                <span className="font-medium">Salary</span>
              </div>
              <p className="text-light-100">
                ${job.salary.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold text-light-100 mb-3">Required Skills</h3>
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
          <div>
            <h3 className="text-lg font-semibold text-light-100 mb-3">Job Description</h3>
            <div 
              className="text-light-200 prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: job.description }}
            />
          </div>

          {/* Additional Info */}
          <div className="bg-dark-700/30 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-light-100 mb-3">Additional Information</h3>
            <div className="space-y-2 text-light-200">
              <p>Interview Type: {job.interviewType}</p>
              <p>Status: {job.isActivelyHiring ? 'Actively Hiring' : 'Under Review'}</p>
            </div>
          </div>

          {/* Apply Button */}
          <div className="flex justify-center">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}