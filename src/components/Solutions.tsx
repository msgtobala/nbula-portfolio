import React from 'react';
import { Monitor, Users, Code, Brain } from 'lucide-react';
import SolutionCard from './ui/SolutionCard';
import GradientText from './ui/GradientText';

const solutions = [
  {
    icon: Brain,
    title: 'AI-Powered Solutions',
    description: 'Cutting-edge artificial intelligence integration',
  },
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Tailored software solutions for your needs',
  },
  {
    icon: Users,
    title: 'Talent Solutions',
    description: 'Expert recruitment and team building',
  },
  {
    icon: Monitor,
    title: 'Digital Transformation',
    description: 'Complete business digitalization',
  }
];

export default function Solutions() {
  return (
    <div id="solutions" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>Our Solutions</GradientText>
          </h2>
          <p className="text-light-200 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </div>
  );
}