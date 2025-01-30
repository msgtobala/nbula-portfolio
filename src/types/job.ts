export interface Department {
  label: string;
  value: string;
}

export interface InterviewType {
  label: string;
  value: string;
}

export interface Job {
  id: string;
  title: string;
  experience: number;
  location: string;
  description: string;
  datePosted: Date;
  department: Department;
  salary: number;
  skills: string[];
  interviewType: InterviewType;
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