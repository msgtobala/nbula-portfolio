import React from 'react';
import { ArrowRight } from 'lucide-react';
import GradientText from './ui/GradientText';

export default function Hero() {
  return (
    <div id="home" className="pt-16 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-secondary/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-light-100">
              <GradientText>Future-Ready</GradientText>{' '}
              Digital Solutions
            </h1>
            <p className="text-xl text-light-200">
              Transforming businesses through AI innovation and expert talent acquisition
            </p>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
                Explore Solutions <ArrowRight size={20} />
              </button>
              <button className="border border-light-200 text-light-100 px-8 py-4 rounded-lg hover:bg-light-200/10 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?auto=format&fit=crop&w=800&q=80"
                alt="Future Technology"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}