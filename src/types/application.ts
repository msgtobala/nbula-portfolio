export interface JobApplication {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  currentCompany: string;
  noticePeriod: string;
  resumeUrl: string;
  jobId: string;
  jobTitle: string;
  appliedAt: Date;
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected';
}