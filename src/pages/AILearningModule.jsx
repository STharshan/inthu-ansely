import React from 'react';
import { BookOpen, Target, Lightbulb, Rocket, Layers, Search, Shield, Users } from 'lucide-react';
import FounderBottleneck from '../components/AILearningModule/FounderBottleneck';
import AIOverview from '../components/AILearningModule/AIOverview';
import AIValueAreas from '../components/AILearningModule/AIValueAreas';
import AISoftwareComparison from '../components/AILearningModule/AISoftwareComparison';
import AIOpportunityChecklist from '../components/AILearningModule/AIOpportunityChecklist';
import AIImplementationChecklist from '../components/AILearningModule/AIImplementationChecklist';
import AIStrengthsAndLimits from '../components/AILearningModule/AIStrengthsAndLimits';
import AINextSteps from '../components/AILearningModule/AINextSteps';
import LearningModuleLayout from '../components/LearningModuleLayout';

const AILearningModule = () => {
  const lessons = [
    { id: 1, icon: Target, title: 'The Founder Bottleneck', content: <FounderBottleneck /> },
    { id: 2, icon: Lightbulb, title: 'What AI Actually Is', content: <AIOverview /> },
    { id: 3, icon: Rocket, title: 'Where AI Creates Impact', content: <AIValueAreas /> },
    { id: 4, icon: Layers, title: 'AI vs Traditional Software', content: <AISoftwareComparison /> },
    { id: 5, icon: Search, title: 'Identifying AI Opportunities', content: <AIOpportunityChecklist /> },
    { id: 6, icon: Shield, title: 'Are You Ready for AI?', content: <AIImplementationChecklist /> },
    { id: 7, icon: Users, title: 'AI as a Team Member', content: <AIStrengthsAndLimits /> },
    { id: 8, icon: BookOpen, title: 'From Learning to Action', content: <AINextSteps /> }
  ];

  return (
    <LearningModuleLayout
      moduleConfig={{
        id: 'ai-learning',
        title: 'AI for Business Growth',
        icon: BookOpen,
        color: '#0045EF',
      }}
      items={lessons}
      enableCompletion={true}
      persistProgress={true}
      storageKey="ai-module-progress"
    />
  );
};

export default AILearningModule;
