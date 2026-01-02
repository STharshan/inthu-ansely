import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown, Code, Zap, Rocket, Search, Shield, Lock, TriangleAlert, TrendingUp, Users, Globe, ChartColumn, MousePointerClick, CircleCheck, Gauge, DollarSign, Star } from 'lucide-react';
import HomeSection from './React/HomeSection';
import WhatIsReact from './React/WhatIsReact';
import PerformanceSection from './React/PerformanceSection';
import SEOAdvantageSection from './React/SEOAdvantageSection';
import SecuritySection from './React/SecuritySection';
import ScalabilitySection from './React/ScalabilitySection';
import UserExperienceSection from './React/UserExperienceSection';
import SideBySideComparison from './React/SideBySideComparison';
import CostEfficiency from './React/CostEfficiency';
import BottomLine from './React/BottomLine';
const ReactComparisonGuide = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 10;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && currentSection > 0) {
        setCurrentSection(currentSection - 1);
      } else if (e.key === 'ArrowRight' && currentSection < totalSections - 1) {
        setCurrentSection(currentSection + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection]);

  const nextSection = () => {
    if (currentSection < totalSections - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'fill-blue-500 text-blue-500' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const sections = [
    // Section 0: Hero
   <HomeSection />,

    // Section 1: What Is React?
    <WhatIsReact />,

    // Section 2: Performance
    
    <PerformanceSection />,

    // Section 3: SEO
    <SEOAdvantageSection />,

    // Section 4: Security
    <SecuritySection />,

    // Section 5: Scalability
    <ScalabilitySection />,

    // Section 6: User Experience
   <UserExperienceSection />,

    // Section 7: Comparison Table
    <SideBySideComparison />,

    // Section 8: Cost Efficiency
    <CostEfficiency />,

    // Section 9: Bottom Line
    <BottomLine />,
  ];

  return (
    <div className="relative overflow-hidden h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500"
          style={{ width: `${((currentSection + 1) / totalSections) * 100}%` }}
        />
        <div className="absolute top-2 right-4 text-xs text-gray-500 font-medium">
          {currentSection + 1} / {totalSections}
        </div>
      </div>

      {/* Sections Container - Horizontal Sliding */}
      <div 
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentSection * 100}%)` }}
      >
        {sections.map((section, index) => (
          <div key={index} className="min-w-full h-full overflow-y-auto">
            {section}
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center items-center gap-4 z-40 px-4">
        <button
          onClick={prevSection}
          disabled={currentSection === 0}
          className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 border border-blue-600/20 hover:border-blue-600/40 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline">Previous</span>
        </button>
        <div className="text-sm text-gray-500 font-medium px-4 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full border border-blue-600/20">
          {currentSection + 1} / {totalSections}
        </div>
        <button
          onClick={nextSection}
          disabled={currentSection === totalSections - 1}
          className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all font-medium group disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Keyboard Hint */}
      <div className="fixed bottom-20 right-4 text-xs text-gray-400 animate-in fade-in slide-in-from-bottom duration-1000 delay-1000 hidden sm:block">
        Use ← → arrow keys to navigate
      </div>
    </div>
  );
};

export default ReactComparisonGuide;