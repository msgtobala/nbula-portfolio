import React from 'react';
import { Monitor, Smartphone, Code, Brain, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientText from '../ui/GradientText';

const features = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications built with cutting-edge technologies.'
  },
  {
    icon: Monitor,
    title: 'Web Application Development',
    description: 'Scalable and responsive web applications that deliver exceptional user experiences.'
  },
  {
    icon: Brain,
    title: 'AI-Powered Solutions',
    description: 'Intelligent automation and data-driven insights to transform your business processes.'
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business requirements.'
  }
];

export default function DigitalTransformation() {
  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-light-200 hover:text-primary mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <GradientText>Digital Transformation</GradientText>
        </h1>
        
        <p className="text-xl text-light-200 mb-12 max-w-3xl">
          Accelerate your business growth with our comprehensive digital transformation solutions. 
          We help organizations evolve in the digital age through innovative technologies and strategic implementation.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-dark-700/50 rounded-xl p-6">
                <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-light-100">{feature.title}</h3>
                <p className="text-light-200">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-dark-700/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-light-100">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-primary">1. Assessment</h3>
              <p className="text-light-200">Thorough analysis of your current digital landscape and business goals</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-primary">2. Strategy</h3>
              <p className="text-light-200">Custom roadmap development aligned with your business objectives</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-primary">3. Implementation</h3>
              <p className="text-light-200">Agile execution with continuous monitoring and optimization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}