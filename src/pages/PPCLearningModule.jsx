import React from 'react';
import { Zap, Target, TrendingUp, DollarSign, BarChart3, AlertCircle, Lightbulb, CheckCircle } from 'lucide-react';
import PaidAdsIntro from '../components/PPCLearningModule/PaidAdsIntro';
import CorePlatforms from '../components/PPCLearningModule/CorePlatforms';
import PPCvsOrganic from '../components/PPCLearningModule/PPCvsOrganic';
import PaidAdsFunnel from '../components/PPCLearningModule/PaidAdsFunnel';
import KeyMetrics from '../components/PPCLearningModule/KeyMetrics';
import PPCMistakes from '../components/PPCLearningModule/PPCMistakes';
import SmartPPCStrategy from '../components/PPCLearningModule/SmartPPCStrategy';
import KnowledgeCheck from '../components/PPCLearningModule/KnowledgeCheck';
import LearningModuleLayout from '../components/LearningModuleLayout';

const PPCLearningModule = () => {
  const modules = [
    { id: 1, icon: Zap, title: 'What is PPC?', content: <PaidAdsIntro /> },
    { id: 2, icon: Target, title: 'Core Platforms', content: <CorePlatforms /> },
    { id: 3, icon: TrendingUp, title: 'PPC vs Organic', content: <PPCvsOrganic /> },
    { id: 4, icon: DollarSign, title: 'How It Makes Money', content: <PaidAdsFunnel /> },
    { id: 5, icon: BarChart3, title: 'Key Metrics', content: <KeyMetrics /> },
    { id: 6, icon: AlertCircle, title: 'Common Mistakes', content: <PPCMistakes /> },
    { id: 7, icon: Lightbulb, title: 'Smart Strategy', content: <SmartPPCStrategy /> },
    { id: 8, icon: CheckCircle, title: 'Knowledge Check', content: <KnowledgeCheck /> }
  ];

  return (
    <LearningModuleLayout
      moduleConfig={{
        id: 'ppc-learning',
        title: 'Paid Ads (PPC)',
        subtitle: 'Instant Visibility That Scales',
        color: '#0045EF',
      }}
      items={modules}
    />
  );
};

export default PPCLearningModule;
