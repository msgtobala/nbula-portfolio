import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './forms/ContactForm';

export default function Contact() {
  return (
    <div id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600">Get in touch with us for any inquiries</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600">contact@nbulainnovations.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-600">+91 9417432654</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-gray-600">Harlur Road, Bangalore 560068</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}