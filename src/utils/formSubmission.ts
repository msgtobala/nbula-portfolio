import { FormData } from '../types/form';
import { API_CONFIG } from '../config/api';

export class FormSubmissionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FormSubmissionError';
  }
}

export async function submitForm(data: FormData): Promise<void> {
  if (!API_CONFIG.GOOGLE_SCRIPT_URL) {
    throw new FormSubmissionError('Form submission URL is not configured');
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

    const response = await fetch(API_CONFIG.GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name.trim(),
        email: data.email.trim(),
        phone: data.phone.trim(),
        message: data.message.trim(),
        timestamp: data.timestamp
      }),
    });

    clearTimeout(timeoutId);

    // Since we're using no-cors, we won't get a proper response
    // We'll consider it successful if we reach this point
    return Promise.resolve();
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new FormSubmissionError('Request timed out. Please try again.');
      }
      throw new FormSubmissionError(error.message);
    }
    throw new FormSubmissionError('An unexpected error occurred. Please try again.');
  }
}