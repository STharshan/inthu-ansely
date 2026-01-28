import React from 'react';
import { TrendingUp } from 'lucide-react';
import LearningModuleLayout from '../LearningModuleLayout';

const ConversionLessonContent = ({ heading, listTitle, listItems, keyTakeaway }) => (
  <div className="space-y-6">
    {/* Heading */}
    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
      {heading}
    </h3>

    {/* List Box */}
    <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 p-5 rounded-lg">
      <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-300">{listTitle}</h4>
      <ul className="space-y-2 text-blue-800 dark:text-blue-200">
        {listItems.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0">•</span>
            <span>{item}</span>
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

const SEOLesson5 = ({ onBackToModules }) => {
  const lessons = [
    {
      id: 1,
      icon: TrendingUp,
      title: "Traffic Without Conversion",
      content: (
        <ConversionLessonContent
          heading="Traffic Without Conversion Is Useless"
          listTitle="Many sites get traffic but:"
          listItems={["No calls", "No enquiries", "No sales"]}
          keyTakeaway="SEO must feed sales."
        />
      )
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "What Visitors Need",
      content: (
        <ConversionLessonContent
          heading="What Visitors Need to Convert"
          listTitle="To convert, visitors need:"
          listItems={[
            "Trust signals (reviews, credentials)",
            "Clear contact information",
            "Easy next steps"
          ]}
          keyTakeaway="Remove every barrier between traffic and action."
        />
      )
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Conversion Essentials",
      content: (
        <ConversionLessonContent
          heading="Conversion Essentials"
          listTitle="Every page should have:"
          listItems={[
            "One clear call-to-action",
            "Visible phone number or contact form",
            "Social proof or testimonials",
            "Answer to 'Why choose us?'"
          ]}
          keyTakeaway="Make it obvious what visitors should do next."
        />
      )
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Think Like a Customer",
      content: (
        <ConversionLessonContent
          heading="Think Like a Customer"
          listTitle="Ask yourself:"
          listItems={[
            "Would I call this business?",
            "Is it clear what they do?",
            "Do I trust them?",
            "Can I easily get in touch?"
          ]}
          keyTakeaway="Your site should answer questions, not create them."
        />
      )
    },
    {
      id: 5,
      icon: TrendingUp,
      title: "Exercise",
      content: (
        <ConversionLessonContent
          heading="Practice Exercise"
          listTitle="Audit your website:"
          listItems={[
            "Find your most visited page",
            "Count how many CTAs it has",
            "Check if your phone number is visible",
            "Read it as if you're a customer"
          ]}
          keyTakeaway="Traffic without conversion is just vanity metrics."
        />
      )
    }
  ];

  return (
    <LearningModuleLayout
      moduleConfig={{
        id: 'seo-traffic-to-sales',
        title: 'Turning SEO Traffic into Sales',
        subtitle: 'Module 5: Turn search traffic into real revenue',
        icon: TrendingUp,
        color: '#0045EF',
      }}
      items={lessons}
      enableCompletion={true}
      persistProgress={true}
      storageKey="seo-module-5-progress"
      onBackClick={onBackToModules}
    />
  );
};

export default SEOLesson5;