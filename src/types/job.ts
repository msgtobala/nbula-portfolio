export interface Job {
  id: string;
  title: string;
  experience: number;
  location: string;
  description: string;
  datePosted: Date;
  department: string;
  salary: number;
  skills: string[];
  interviewType: 'Online' | 'Offline' | 'Hybrid';
  isActive: boolean;
  isActivelyHiring: boolean;
}

export interface JobFilters {
  search: string;
  location: string;
  department: string;
  skills: string[];
  interviewType: string;
  isActive: boolean | null;
  isActivelyHiring: boolean | null;
}

export interface SortOption {
  field: keyof Job;
  direction: 'asc' | 'desc';
}