import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Target, Lightbulb, Zap, Users, TrendingUp, CircleCheck } from 'lucide-react';
import CustomSoftwareModule from '../components/Insidecustomsoftwareservice/CustomSoftwareModule';
import FounderMindset from '../components/Insidecustomsoftwareservice/FounderMindset';
import ManualWorkCost from '../components/Insidecustomsoftwareservice/ManualWorkCost';
import CustomSoftwareMeaning from '../components/Insidecustomsoftwareservice/CustomSoftwareMeaning';
import BuildWhatMatters from '../components/Insidecustomsoftwareservice/BuildWhatMatters';
import KeyTakeaway from '../components/Insidecustomsoftwareservice/KeyTakeaway';
const Insidecustomsoftwareservice = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      id: 'overview',
      title: 'Custom Software — Think Like a Tech Founder',
      content: (
        <CustomSoftwareModule />
      )
    },
    {
      id: 'mindset',
      title: 'The Founder Mindset',
      content: (
       <FounderMindset />
      )
    },
    {
      id: 'cost',
      title: 'Real Cost of Manual Work',
      content: (
       <ManualWorkCost />
      )
    },
    {
      id: 'meaning',
      title: 'What Custom Software Means',
      content: (
        <CustomSoftwareMeaning />
      )
    },
    {
      id: 'approach',
      title: 'Our Approach',
      content: (
       <BuildWhatMatters />
      )
    },
    {
      id: 'takeaway',
      title: 'Key Takeaway',
      content: (
        <KeyTakeaway />
      )
    }
  ];

  const progress = ((currentSection + 1) / sections.length) * 100;

  const goToSection = (index) => {
    setCurrentSection(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="relative overflow-hidden bg-gray-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium rounded-full bg-orange-600 text-white">
              Learning Module
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Think Like a Tech Founder
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Transform your business by understanding how custom software creates leverage, eliminates friction, and unlocks scale.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="h-1 bg-gray-200">
          <div 
            className="h-full bg-orange-600 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 py-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">
              Section {currentSection + 1} of {sections.length}
            </span>
            <span className="font-medium">{Math.round(progress)}% Complete</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="border-b border-gray-200 bg-white sticky top-[57px] z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 py-4 overflow-x-auto">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => goToSection(index)}
                className={`inline-flex items-center justify-center text-sm font-medium transition-all whitespace-nowrap h-8 rounded-md px-3 ${
                  currentSection === index
                    ? 'bg-orange-600 text-white hover:bg-orange-700'
                    : 'hover:bg-gray-100'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {sections[currentSection].content}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={() => goToSection(currentSection - 1)}
              disabled={currentSection === 0}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 gap-2 border shadow-sm ${
                currentSection === 0
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-gray-100'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </button>

            <button
              onClick={() => goToSection(currentSection + 1)}
              disabled={currentSection === sections.length - 1}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 gap-2 ${
                currentSection === sections.length - 1
                  ? 'bg-orange-600 text-white opacity-50 cursor-not-allowed'
                  : 'bg-orange-600 text-white hover:bg-orange-700'
              }`}
            >
              {currentSection === sections.length - 1 ? 'Complete' : 'Next Section'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Insidecustomsoftwareservice;