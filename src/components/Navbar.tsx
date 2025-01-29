import React from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientText from './ui/GradientText';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-dark-900/80 backdrop-blur-md fixed w-full z-50 border-b border-light-100/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <Rocket className="text-primary" size={24} />
              <GradientText>
                <span className="text-2xl font-bold">NbulaInnovation</span>
              </GradientText>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-light-100 hover:text-primary transition-colors">Home</Link>
            <Link to="/#services" className="text-light-100 hover:text-primary transition-colors">Services</Link>
            <Link to="/#about" className="text-light-100 hover:text-primary transition-colors">About</Link>
            <Link to="/#contact" className="text-light-100 hover:text-primary transition-colors">Contact</Link>
            <Link to="/careers" className="text-light-100 hover:text-primary transition-colors">Careers</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-light-100">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-800/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-light-100 hover:text-primary transition-colors">Home</Link>
            <Link to="/#services" className="block px-3 py-2 text-light-100 hover:text-primary transition-colors">Services</Link>
            <Link to="/#about" className="block px-3 py-2 text-light-100 hover:text-primary transition-colors">About</Link>
            <Link to="/#contact" className="block px-3 py-2 text-light-100 hover:text-primary transition-colors">Contact</Link>
            <Link to="/careers" className="block px-3 py-2 text-light-100 hover:text-primary transition-colors">Careers</Link>
          </div>
        </div>
      )}
    </nav>
  );
}