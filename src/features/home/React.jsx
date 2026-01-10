import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import HomeSection from './HomeSection';
import WhatIsReact from './WhatIsReact';
import PerformanceSection from './PerformanceSection';
import SEOAdvantageSection from './SEOAdvantageSection';
import SecuritySection from './SecuritySection';
import ScalabilitySection from './ScalabilitySection';
import UserExperienceSection from './UserExperienceSection';
import SideBySideComparison from './SideBySideComparison';
import CostEfficiency from './CostEfficiency';
import BottomLine from './BottomLine';

const ReactComparisonGuide = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 10;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && currentSection > 0) setCurrentSection(currentSection - 1);
      else if (e.key === 'ArrowRight' && currentSection < totalSections - 1) setCurrentSection(currentSection + 1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection]);

  const nextSection = () => currentSection < totalSections - 1 && setCurrentSection(currentSection + 1);
  const prevSection = () => currentSection > 0 && setCurrentSection(currentSection - 1);

  const sections = [
    <HomeSection />,
    <WhatIsReact />,
    <PerformanceSection />,
    <SEOAdvantageSection />,
    <SecuritySection />,
    <ScalabilitySection />,
    <UserExperienceSection />,
    <SideBySideComparison />,
    <CostEfficiency />,
    <BottomLine />,
  ];

  return (
    <div className="relative overflow-hidden h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 z-50">
        <div
          className="h-full bg-blue-600 transition-all duration-500"
          style={{ width: `${((currentSection + 1) / totalSections) * 100}%` }}
        />
        <div className="absolute top-2 right-4 text-xs text-gray-500 dark:text-gray-400 font-medium">
          {currentSection + 1} / {totalSections}
        </div>
      </div>

      {/* Sections Container - Horizontal Slide */}
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
          className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 border border-blue-600/20 rounded-lg bg-white/80 dark:bg-black/80 backdrop-blur-sm font-medium transition-colors hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-gray-900 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="text-sm text-gray-500 dark:text-gray-400 font-medium px-4 py-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full border border-blue-600/20">
          {currentSection + 1} / {totalSections}
        </div>

        <button
          onClick={nextSection}
          disabled={currentSection === totalSections - 1}
          className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-blue-600 text-white rounded-lg shadow-lg shadow-blue-500/25 hover:bg-blue-700 hover:shadow-blue-500/50 transition-all font-medium disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
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
