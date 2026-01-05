import React, { useState } from 'react';
import { Zap, Target, TrendingUp, DollarSign, BarChart3, AlertCircle, Lightbulb, CheckCircle, Clock, ArrowRight, Search, Users, Play, MousePointer, FileText, Phone, TriangleAlert, ChevronDown, ChevronUp, X, ArrowDown } from 'lucide-react';
import PaidAdsIntro from '../components/PPCLearningModule/PaidAdsIntro';
import CorePlatforms from '../components/PPCLearningModule/CorePlatforms';
import PPCvsOrganic from '../components/PPCLearningModule/PPCvsOrganic';
import PaidAdsFunnel from '../components/PPCLearningModule/PaidAdsFunnel';
import KeyMetrics from '../components/PPCLearningModule/KeyMetrics';
import PPCMistakes from '../components/PPCLearningModule/PPCMistakes';
import SmartPPCStrategy from '../components/PPCLearningModule/SmartPPCStrategy';
import KnowledgeCheck from '../components/PPCLearningModule/KnowledgeCheck';
const PPCLearningModule = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedPlatform, setExpandedPlatform] = useState(0);
  const [selectedMetric, setSelectedMetric] = useState(0);

  const tabs = [
    { id: 0, icon: Zap, label: 'What is PPC?' },
    { id: 1, icon: Target, label: 'Core Platforms' },
    { id: 2, icon: TrendingUp, label: 'PPC vs Organic' },
    { id: 3, icon: DollarSign, label: 'How It Makes Money' },
    { id: 4, icon: BarChart3, label: 'Key Metrics' },
    { id: 5, icon: AlertCircle, label: 'Common Mistakes' },
    { id: 6, icon: Lightbulb, label: 'Smart Strategy' },
    { id: 7, icon: CheckCircle, label: 'Knowledge Check' }
  ];

  
  

  const renderContent = () => {
    switch(activeTab) {
      case 0: // What is PPC
        return (
         <PaidAdsIntro />
        );

      case 1: // Core Platforms
        return (
          <CorePlatforms />
        );

      case 2: // PPC vs Organic
        return (
         <PPCvsOrganic />
        );

      case 3: // How It Makes Money
        return (
          <PaidAdsFunnel />
        );

      case 4: // Key Metrics
        return (
          <KeyMetrics />
        );

      case 5: // Common Mistakes
        return (
          <PPCMistakes />
        );

      case 6: // Smart Strategy
        return (
        <SmartPPCStrategy/>
        );

      case 7: // Knowledge Check
        return (
          <KnowledgeCheck />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-2xl font-bold">Paid Ads (PPC)</h1>
              <p className="text-sm text-gray-600">Instant Visibility That Scales</p>
            </div>
            <span className="inline-flex items-center justify-center rounded-md border px-3 py-1 font-medium bg-blue-100 text-blue-700 text-sm">
              Module {activeTab + 1} of {tabs.length}
            </span>
          </div>
          <div className="relative w-full overflow-hidden rounded-full h-2 bg-blue-100">
            <div 
              className="bg-blue-600 h-full transition-all duration-300"
              style={{ width: `${((activeTab + 1) / tabs.length) * 100}%` }}
            />
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 bg-gray-100/50">
        <div className="container mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {renderContent()}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
              disabled={activeTab === 0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => setActiveTab(Math.min(tabs.length - 1, activeTab + 1))}
              disabled={activeTab === tabs.length - 1}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Continue
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PPCLearningModule;