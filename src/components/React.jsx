import React from 'react';
import { BookOpen, Lightbulb, Zap, Search, Shield, Layers, Users, ArrowLeftRight, DollarSign, CheckCircle } from 'lucide-react';
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
import LearningModuleLayout from './LearningModuleLayout';

const ReactComparisonGuide = () => {
  const sections = [
    { id: 1, icon: BookOpen, title: 'Welcome', content: <HomeSection /> },
    { id: 2, icon: Lightbulb, title: 'What is React?', content: <WhatIsReact /> },
    { id: 3, icon: Zap, title: 'Performance', content: <PerformanceSection /> },
    { id: 4, icon: Search, title: 'SEO Advantage', content: <SEOAdvantageSection /> },
    { id: 5, icon: Shield, title: 'Security', content: <SecuritySection /> },
    { id: 6, icon: Layers, title: 'Scalability', content: <ScalabilitySection /> },
    { id: 7, icon: Users, title: 'User Experience', content: <UserExperienceSection /> },
    { id: 8, icon: ArrowLeftRight, title: 'Side-by-Side Comparison', content: <SideBySideComparison /> },
    { id: 9, icon: DollarSign, title: 'Cost Efficiency', content: <CostEfficiency /> },
    { id: 10, icon: CheckCircle, title: 'The Bottom Line', content: <BottomLine /> }
  ];

  return (
    <LearningModuleLayout
      moduleConfig={{
        id: 'react-comparison',
        title: 'React vs Traditional Website Builders',
        subtitle: 'Modern Web Development Explained',
        color: '#2563eb',
      }}
      items={sections}
      enableKeyboard={true}
    />
  );
};

export default ReactComparisonGuide;
