import React from 'react';
import { BookOpen, Target, DollarSign, Code, Rocket, Lightbulb } from 'lucide-react';
import CustomSoftwareModule from '../components/Insidecustomsoftwareservice/CustomSoftwareModule';
import FounderMindset from '../components/Insidecustomsoftwareservice/FounderMindset';
import ManualWorkCost from '../components/Insidecustomsoftwareservice/ManualWorkCost';
import CustomSoftwareMeaning from '../components/Insidecustomsoftwareservice/CustomSoftwareMeaning';
import BuildWhatMatters from '../components/Insidecustomsoftwareservice/BuildWhatMatters';
import KeyTakeaway from '../components/Insidecustomsoftwareservice/KeyTakeaway';
import LearningModuleLayout from '../components/LearningModuleLayout';

const Insidecustomsoftwareservice = () => {
  const sections = [
    { id: 1, icon: BookOpen, title: 'Overview', content: <CustomSoftwareModule /> },
    { id: 2, icon: Target, title: 'The Founder Mindset', content: <FounderMindset /> },
    { id: 3, icon: DollarSign, title: 'Real Cost of Manual Work', content: <ManualWorkCost /> },
    { id: 4, icon: Code, title: 'What Custom Software Means', content: <CustomSoftwareMeaning /> },
    { id: 5, icon: Rocket, title: 'Our Approach', content: <BuildWhatMatters /> },
    { id: 6, icon: Lightbulb, title: 'Key Takeaway', content: <KeyTakeaway /> }
  ];

  return (
    <LearningModuleLayout
      moduleConfig={{
        id: 'tech-founder',
        title: 'Think Like a Tech Founder',
        subtitle: 'Transform your business by understanding how custom software creates leverage',
        color: '#2563eb',
      }}
      items={sections}
    />
  );
};

export default Insidecustomsoftwareservice;
