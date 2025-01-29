import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Rocket } from 'lucide-react';
import GradientText from './ui/GradientText';

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-light-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Rocket className="text-primary" size={24} />
              <GradientText>
                <span className="text-xl font-bold">NbulaInnovation</span>
              </GradientText>
            </div>
            <p className="text-light-200">
              Innovative solutions for your digital success. Building the future, one project at a time.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-light-100">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-light-200 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-light-200 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="text-light-200 hover:text-primary transition-colors">About</a></li>
              <li><a href="#contact" className="text-light-200 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-light-100">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-light-200 hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="text-light-200 hover:text-primary transition-colors">Mobile Solutions</a></li>
              <li><a href="#" className="text-light-200 hover:text-primary transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-light-200 hover:text-primary transition-colors">Cloud Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-light-100">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-light-200 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-light-200 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-light-200 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-light-200 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-light-100/10 mt-12 pt-8 text-center text-light-200">
          <p>&copy; {new Date().getFullYear()} NbulaInnovation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}