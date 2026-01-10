import React, { useState } from 'react';
import { Zap, Target, TrendingUp, DollarSign, BarChart3, AlertCircle, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';
import PaidAdsIntro from '../features/learning-modules/ppc/PaidAdsIntro';
import CorePlatforms from '../features/learning-modules/ppc/CorePlatforms';
import PPCvsOrganic from '../features/learning-modules/ppc/PPCvsOrganic';
import PaidAdsFunnel from '../features/learning-modules/ppc/PaidAdsFunnel';
import KeyMetrics from '../features/learning-modules/ppc/KeyMetrics';
import PPCMistakes from '../features/learning-modules/ppc/PPCMistakes';
import SmartPPCStrategy from '../features/learning-modules/ppc/SmartPPCStrategy';
import KnowledgeCheck from '../features/learning-modules/ppc/KnowledgeCheck';

const PPCLearningModule = () => {
  const [activeTab, setActiveTab] = useState(0);

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
      case 0: return <PaidAdsIntro />;
      case 1: return <CorePlatforms />;
      case 2: return <PPCvsOrganic />;
      case 3: return <PaidAdsFunnel />;
      case 4: return <KeyMetrics />;
      case 5: return <PPCMistakes />;
      case 6: return <SmartPPCStrategy />;
      case 7: return <KnowledgeCheck />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <div className="mt-30 z-50 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-black/95 backdrop-blur">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 py-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Paid Ads (PPC)</h1>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-1">Instant Visibility That Scales</p>
            </div>
            <span className="inline-flex items-center justify-center rounded-lg border-2 border-[var(--brand-blue)]/30 px-4 py-2 font-semibold bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-sm">
              Module {activeTab + 1} of {tabs.length}
            </span>
          </div>
          <div className="relative w-full overflow-hidden rounded-full h-2.5 bg-[var(--brand-blue)]/10">
            <div 
              className="bg-[var(--brand-blue)] h-full transition-all duration-500 ease-out"
              style={{ width: `${((activeTab + 1) / tabs.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-black sticky top-[89px] z-40">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 py-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap shadow-sm ${
                    activeTab === tab.id
                      ? 'bg-[var(--brand-blue)] text-white shadow-md'
                      : 'bg-white dark:bg-black text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 border border-gray-200 dark:border-gray-700'
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
      <main className="container mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {renderContent()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
              disabled={activeTab === 0}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow"
            >
              Previous
            </button>
            <button
              onClick={() => setActiveTab(Math.min(tabs.length - 1, activeTab + 1))}
              disabled={activeTab === tabs.length - 1}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-[var(--brand-blue)] text-white hover:bg-[#0034cc] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
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
