import React from 'react';
import { Users, Target, Briefcase, Trophy, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientText from '../ui/GradientText';

const services = [
  {
    icon: Users,
    title: 'RPO Services',
    description: 'End-to-end recruitment process outsourcing tailored to your needs.'
  },
  {
    icon: Briefcase,
    title: 'Permanent Hiring',
    description: 'Strategic talent acquisition for long-term organizational success.'
  },
  {
    icon: Trophy,
    title: 'Leadership Hiring',
    description: 'Executive search and placement for key leadership positions.'
  },
  {
    icon: Target,
    title: 'Talent Strategy',
    description: 'Comprehensive talent planning and workforce optimization.'
  }
];

export default function TalentSolutions() {
  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-light-200 hover:text-primary mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <GradientText>Talent Solutions</GradientText>
        </h1>
        
        <p className="text-xl text-light-200 mb-12 max-w-3xl">
          Build high-performing teams with our comprehensive talent solutions. 
          We connect organizations with exceptional talent and provide strategic workforce planning.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-dark-700/50 rounded-xl p-6">
                <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-light-100">{service.title}</h3>
                <p className="text-light-200">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-dark-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-light-100">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-primary">Industry Expertise</h3>
              <p className="text-light-200">Deep understanding of various industry verticals and their talent needs</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-primary">Global Network</h3>
              <p className="text-light-200">Access to a vast network of qualified professionals worldwide</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-primary">Custom Solutions</h3>
              <p className="text-light-200">Tailored recruitment strategies aligned with your organization's goals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}