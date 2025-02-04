import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, doc, query, where, getDocs } from 'firebase/firestore';
import { storage, db } from '../lib/firebase';
import { JobApplication } from '../types/application';

export class ApplicationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ApplicationError';
  }
}

export async function uploadResume(file: File, jobTitle: string): Promise<string> {
  try {
    // Create a reference to the job title folder
    const fileName = `${Date.now()}-${file.name}`;
    const storageRef = ref(storage, `resumes/${jobTitle}/${fileName}`);
    
    // Upload the file
    await uploadBytes(storageRef, file);
    
    // Get the download URL
    const downloadUrl = await getDownloadURL(storageRef);
    return downloadUrl;
  } catch (error) {
    console.error('Error uploading resume:', error);
    throw new ApplicationError('Failed to upload resume. Please try again.');
  }
}

export async function checkExistingApplication(jobId: string, email: string): Promise<boolean> {
  try {
    const applicationsRef = collection(doc(db, 'jobs', jobId), 'applications');
    const q = query(applicationsRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  } catch (error) {
    console.error('Error checking existing application:', error);
    throw new ApplicationError('Failed to verify application status.');
  }
}

export async function submitApplication(
  application: Omit<JobApplication, 'id' | 'status' | 'appliedAt'>, 
  saveForLater: boolean = false
): Promise<void> {
  try {
    // Check for existing application
    const hasExisting = await checkExistingApplication(application.jobId, application.email);
    if (hasExisting) {
      throw new ApplicationError('You have already applied for this position.');
    }

    // Reference to the job's applications sub-collection
    const applicationsRef = collection(doc(db, 'jobs', application.jobId), 'applications');
    
    // Add the application document
    await addDoc(applicationsRef, {
      ...application,
      status: 'pending',
      appliedAt: new Date(),
      saveForLater: saveForLater
    });
  } catch (error) {
    if (error instanceof ApplicationError) {
      throw error;
    }
    console.error('Error submitting application:', error);
    throw new ApplicationError('Failed to submit application. Please try again.');
  }
}