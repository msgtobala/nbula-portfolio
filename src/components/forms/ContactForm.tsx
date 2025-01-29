import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { submitForm, FormSubmissionError } from '../../utils/formSubmission';
import { useToast } from '../../hooks/useToast';
import type { FormData } from '../../types/form';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData: FormData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      timestamp: new Date().toISOString(),
    };

    try {
      await submitForm(formData);
      showToast('Message sent successfully!', 'success');
      form.reset();
    } catch (error) {
      const message = error instanceof FormSubmissionError 
        ? error.message 
        : 'Failed to send message. Please try again.';
      showToast(message, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          required
          placeholder="Your Phone Number"
          pattern="[0-9+\-\s()]+"
          title="Please enter a valid phone number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <div>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Your Message"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin mr-2" size={20} />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}