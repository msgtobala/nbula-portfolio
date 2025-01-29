import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastProvider } from './hooks/useToast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DigitalTransformation from './components/pages/DigitalTransformation';
import TalentSolutions from './components/pages/TalentSolutions';
import Careers from './components/pages/Careers';

export default function App() {
  return (
    <ToastProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <Solutions />
                <Contact />
              </>
            } />
            <Route path="/digital-transformation" element={<DigitalTransformation />} />
            <Route path="/talent-solutions" element={<TalentSolutions />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ToastProvider>
  );
}