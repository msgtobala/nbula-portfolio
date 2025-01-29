import React from 'react';
import { Monitor, Smartphone } from 'lucide-react';
import SolutionCard from './ui/SolutionCard';
import GradientText from './ui/GradientText';

const services = [
  {
    icon: Monitor,
    title: 'Digital Transformation',
    description: 'Complete business digitalization',
    features: [
      'Mobile App Development',
      'Web Application Development',
      'AI-Powered Solutions'
    ],
    link: '/digital-transformation'
  },
  {
    icon: Smartphone,
    title: 'Talent Solutions',
    description: 'Expert recruitment and team building',
    features: [
      'RPO Services',
      'Permanent Hiring',
      'Leadership Hiring'
    ],
    link: '/talent-solutions'
  }
];

export default function Services() {
  return (
    <div id="services" className="py-12 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>Our Services</GradientText>
          </h2>
          <p className="text-light-200 max-w-2xl mx-auto">
            Comprehensive digital services to accelerate your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <SolutionCard key={index} {...service} className="h-full" />
          ))}
        </div>
      </div>
    </div>
  );
}