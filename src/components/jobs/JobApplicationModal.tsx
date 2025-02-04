import React, { useState } from 'react';
import { X, Upload, Loader2 } from 'lucide-react';
import { useToast } from '../../hooks/useToast';
import { uploadResume, submitApplication } from '../../utils/applications';
import type { JobApplication } from '../../types/application';

interface JobApplicationModalProps {
  jobTitle: string;
  jobId: string;
  onClose: () => void;
}

export default function JobApplicationModal({ jobTitle, jobId, onClose }: JobApplicationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    currentCompany: '',
    noticePeriod: '',
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        showToast('Please upload a PDF or Word document', 'error');
        return;
      }
      
      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        showToast('File size should be less than 5MB', 'error');
        return;
      }
      
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!selectedFile) {
      showToast('Please upload your resume', 'error');
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Upload resume to Firebase Storage
      const resumeUrl = await uploadResume(selectedFile, jobTitle);
      
      // Submit application to Firestore with saveForLater defaulting to false
      await submitApplication({
        ...formData,
        resumeUrl,
        jobId,
        jobTitle,
      }, false);
      
      showToast('Application submitted successfully!', 'success');
      onClose();
    } catch (error) {
      if (error instanceof Error) {
        showToast(error.message, 'error');
      } else {
        showToast('Failed to submit application. Please try again.', 'error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-dark-800 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-dark-800 p-6 border-b border-dark-700 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-light-100">Apply for Position</h2>
            <p className="text-light-200 mt-1">{jobTitle}</p>
          </div>
          <button
            onClick={onClose}
            className="text-light-200 hover:text-light-100 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-light-100">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-light-200 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-light-100 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-light-200 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-light-100 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-light-200 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-light-100 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Professional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-light-100">Professional Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-light-200 mb-1">
                  Years of Experience *
                </label>
                <input
                  type="number"
                  id="experience"
                  required
                  min="0"
                  step="0.5"
                  value={formData.experience}
                  onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                  className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-light-100 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="currentCompany" className="block text-sm font-medium text-light-200 mb-1">
                  Current Company
                </label>
                <input
                  type="text"
                  id="currentCompany"
                  value={formData.currentCompany}
                  onChange={(e) => setFormData(prev => ({ ...prev, currentCompany: e.target.value }))}
                  className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-light-100 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label htmlFor="noticePeriod" className="block text-sm font-medium text-light-200 mb-1">
                Notice Period (in days) *
              </label>
              <input
                type="number"
                id="noticePeriod"
                required
                min="0"
                value={formData.noticePeriod}
                onChange={(e) => setFormData(prev => ({ ...prev, noticePeriod: e.target.value }))}
                className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-light-100 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-light-100">Resume</h3>
            <div className="relative">
              <label
                htmlFor="resumeUpload"
                className={`block w-full border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors ${
                  selectedFile 
                    ? 'border-primary bg-primary/10' 
                    : 'border-dark-600 hover:border-primary'
                }`}
              >
                <Upload className="mx-auto h-12 w-12 text-light-200" />
                <span className="mt-2 block text-sm font-medium text-light-200">
                  {selectedFile ? selectedFile.name : 'Click to upload your resume'}
                </span>
                <span className="mt-1 block text-xs text-light-200">
                  PDF, DOC, DOCX up to 5MB
                </span>
              </label>
              <input
                id="resumeUpload"
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={isSubmitting || !selectedFile}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={20} />
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}