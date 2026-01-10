import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Sun, Moon } from 'lucide-react';
import CustomSoftwareModule from '../features/services/custom-software/CustomSoftwareModule';
import FounderMindset from '../features/services/custom-software/FounderMindset';
import ManualWorkCost from '../features/services/custom-software/ManualWorkCost';
import CustomSoftwareMeaning from '../features/services/custom-software/CustomSoftwareMeaning';
import BuildWhatMatters from '../features/services/custom-software/BuildWhatMatters';
import KeyTakeaway from '../features/services/custom-software/KeyTakeaway';

const Insidecustomsoftwareservice = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Sections
  const sections = [
    { id: 'overview', title: 'Overview', content: <CustomSoftwareModule /> },
    { id: 'mindset', title: 'The Founder Mindset', content: <FounderMindset /> },
    { id: 'cost', title: 'Real Cost of Manual Work', content: <ManualWorkCost /> },
    { id: 'meaning', title: 'What Custom Software Means', content: <CustomSoftwareMeaning /> },
    { id: 'approach', title: 'Our Approach', content: <BuildWhatMatters /> },
    { id: 'takeaway', title: 'Key Takeaway', content: <KeyTakeaway /> },
  ];

  const progress = ((currentSection + 1) / sections.length) * 100;

  const goToSection = (index) => {
    if (index >= 0 && index < sections.length) {
      setCurrentSection(index);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Toggle dark/light mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Apply dark class to body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Dark/Light Toggle */}
      <div className="fixed top-5 right-5 z-50">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        >
          {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
        </button>
      </div>

      {/* Header */}
      <section className="relative overflow-hidden bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-16 md:py-48">
        <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 to-transparent"></div>
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold rounded-full bg-blue-600 text-white">
              Learning Module
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Think Like a Tech Founder
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl text-gray-700 dark:text-gray-300">
              Transform your business by understanding how custom software creates leverage, eliminates friction, and unlocks scale.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="h-1 bg-gray-200 dark:bg-gray-700">
          <div
            className="h-full bg-blue-600 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="container mx-auto px-6 md:px-8 lg:px-12 py-3">
          <div className="flex items-center justify-between text-sm text-black dark:text-white">
            <span className="font-medium">
              Section {currentSection + 1} of {sections.length}
            </span>
            <span className="font-semibold text-blue-600">{Math.round(progress)}% Complete</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-black sticky top-[57px] z-40 backdrop-blur-sm">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => goToSection(index)}
                className={`inline-flex items-center justify-center text-sm font-medium transition-all whitespace-nowrap h-9 rounded-lg px-4 ${
                  currentSection === index
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
            {sections[currentSection].content}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => goToSection(currentSection - 1)}
              disabled={currentSection === 0}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all h-11 px-6 py-2 gap-2 border-2 shadow-sm ${
                currentSection === 0
                  ? 'opacity-50 cursor-not-allowed border-gray-400 dark:border-gray-600'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
              }`}
            >
              <ArrowLeft className="w-4 h-4 text-blue-600" />
              Previous
            </button>

            <button
              onClick={() => goToSection(currentSection + 1)}
              disabled={currentSection === sections.length - 1}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all h-11 px-6 py-2 gap-2 shadow-md ${
                currentSection === sections.length - 1
                  ? 'bg-blue-600 text-white opacity-50 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
              }`}
            >
              {currentSection === sections.length - 1 ? 'Complete' : 'Next Section'}
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Insidecustomsoftwareservice;
