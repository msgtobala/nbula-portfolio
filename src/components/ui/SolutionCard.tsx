import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  className?: string;
  link?: string;
}

export default function SolutionCard({ 
  icon: Icon, 
  title, 
  description, 
  features,
  className = '',
  link
}: SolutionCardProps) {
  return (
    <div className={`bg-dark-700/50 backdrop-blur rounded-xl p-6 hover:bg-dark-700/70 transition-all ${className}`}>
      <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-primary" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-light-100">{title}</h3>
      <p className="text-light-200 mb-4">{description}</p>
      {features && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-light-200">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      )}
      {link && (
        <Link
          to={link}
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mt-4"
        >
          Learn More <ArrowRight size={16} className="ml-1" />
        </Link>
      )}
    </div>
  );
}