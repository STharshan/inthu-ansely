import React from 'react';
import { MapPin } from 'lucide-react';
import LearningModuleLayout from '../LearningModuleLayout';

const LessonContent = ({ heading, description, examples, keyTakeaway }) => (
  <div className="space-y-6">
    {/* Main Description */}
    <div>
      <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
        {heading}
      </h3>
      <p className="text-base leading-relaxed text-slate-700 dark:text-gray-300">
        {description}
      </p>
    </div>

    {/* Examples Box */}
    <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 p-5 rounded-lg">
      <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-300">Examples:</h4>
      <ul className="space-y-2 text-blue-800 dark:text-blue-200">
        {examples.map((example, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0">•</span>
            <span>{example}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Key Takeaway */}
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-900 p-5 rounded-lg">
      <p className="text-base sm:text-lg font-semibold text-center text-slate-900 dark:text-white">
        {keyTakeaway}
      </p>
    </div>
  </div>
);

const SEOLesson1 = ({ onBackToModules }) => {
  const lessons = [
    {
      id: 1,
      icon: MapPin,
      title: "What Is Local SEO?",
      content: (
        <LessonContent
          heading="What Is Local SEO?"
          description="Local SEO helps your business appear when people search for services in a specific area."
          examples={[
            '"MOT garage Leicester"',
            '"emergency electrician near me"',
            '"best café in Derby"'
          ]}
          keyTakeaway="Local SEO = high intent + fast conversions"
        />
      )
    },
    {
      id: 2,
      icon: MapPin,
      title: "The Google Map Pack",
      content: (
        <LessonContent
          heading="The Google Map Pack"
          description="The Map Pack is the box of 3 local businesses that appears at the top of Google search results. Getting into this pack dramatically increases visibility and clicks."
          examples={[
            "Appears for searches with local intent",
            "Shows business name, rating, and location",
            "Drives high-quality traffic to your website"
          ]}
          keyTakeaway="Ranking in the Map Pack can triple your local visibility"
        />
      )
    },
    {
      id: 3,
      icon: MapPin,
      title: "Google Business Profile",
      content: (
        <LessonContent
          heading="Google Business Profile"
          description="Your Google Business Profile is the foundation of local SEO. It's free, powerful, and often the first thing customers see when they search for your business."
          examples={[
            "Complete all profile sections",
            "Add high-quality photos regularly",
            "Respond to all reviews promptly"
          ]}
          keyTakeaway="A complete, active profile ranks higher and converts better"
        />
      )
    },
    {
      id: 4,
      icon: MapPin,
      title: "Local Content Wins",
      content: (
        <LessonContent
          heading="Local Content Wins"
          description="Creating content that mentions your location, local landmarks, and community events helps Google understand where you serve and improves your local rankings."
          examples={[
            "Mention neighborhoods you serve",
            "Write about local events or news",
            "Create location-specific service pages"
          ]}
          keyTakeaway="Local content signals to Google exactly where you want to rank"
        />
      )
    },
    {
      id: 5,
      icon: MapPin,
      title: "Exercise",
      content: (
        <LessonContent
          heading="Practice Exercise"
          description="Time to apply what you've learned! Complete this exercise to reinforce your understanding of local SEO fundamentals."
          examples={[
            "Audit your Google Business Profile",
            "List 3 local keywords for your business",
            "Identify 2 local content opportunities"
          ]}
          keyTakeaway="Practice makes perfect - implement what you've learned today"
        />
      )
    }
  ];

  return (
    <LearningModuleLayout
      moduleConfig={{
        id: 'seo-local-businesses',
        title: 'SEO for Local Businesses',
        subtitle: 'Module 1: Dominate your local area on Google',
        icon: MapPin,
        color: '#0045EF',
      }}
      items={lessons}
      enableCompletion={true}
      persistProgress={true}
      storageKey="seo-module-1-progress"
      onBackClick={onBackToModules}
    />
  );
};

export default SEOLesson1;
