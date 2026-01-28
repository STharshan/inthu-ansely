import React from 'react';
import { Zap } from 'lucide-react';
import LearningModuleLayout from '../LearningModuleLayout';

const TechnicalLessonContent = ({ heading, description, listTitle, listItems }) => (
  <div className="space-y-6">
    {/* Main Content */}
    <div>
      <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
        {heading}
      </h3>
      <p className="text-base leading-relaxed text-slate-700 dark:text-gray-300">
        {description}
      </p>
    </div>

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
  </div>
);

const SEOLesson4 = ({ onBackToModules }) => {
  const lessons = [
    {
      id: 1,
      icon: Zap,
      title: "What Technical SEO Means",
      content: (
        <TechnicalLessonContent
          heading="What Technical SEO Really Means"
          description="Technical SEO = how well your website works"
          listTitle="Google wants:"
          listItems={[
            "Fast sites",
            "Mobile-friendly pages",
            "Clean structure",
            "Secure browsing"
          ]}
        />
      )
    },
    {
      id: 2,
      icon: Zap,
      title: "Speed = Rankings + Sales",
      content: (
        <TechnicalLessonContent
          heading="Speed = Rankings + Sales"
          description="A slow website loses visitors and rankings"
          listTitle="Why speed matters:"
          listItems={[
            "53% of mobile users leave if a page takes over 3 seconds",
            "Google uses speed as a ranking factor",
            "Fast sites convert better",
            "Users expect instant results"
          ]}
        />
      )
    },
    {
      id: 3,
      icon: Zap,
      title: "Mobile Is Non-Negotiable",
      content: (
        <TechnicalLessonContent
          heading="Mobile Is Non-Negotiable"
          description="Google ranks based on your mobile site, not desktop"
          listTitle="Mobile essentials:"
          listItems={[
            "Responsive design that adapts to all screens",
            "Tap targets large enough for fingers",
            "Text readable without zooming",
            "No horizontal scrolling"
          ]}
        />
      )
    },
    {
      id: 4,
      icon: Zap,
      title: "Clean Structure Helps Google",
      content: (
        <TechnicalLessonContent
          heading="Clean Structure Helps Google"
          description="Google needs to understand your site to rank it properly"
          listTitle="Structure basics:"
          listItems={[
            "Clear URL structure (example.com/services/plumbing)",
            "Logical navigation",
            "XML sitemap for Google",
            "Internal links between related pages"
          ]}
        />
      )
    },
    {
      id: 5,
      icon: Zap,
      title: "Exercise",
      content: (
        <TechnicalLessonContent
          heading="Practice Exercise"
          description="Test your site and identify improvements"
          listTitle="Check these now:"
          listItems={[
            "Run your site through Google PageSpeed Insights",
            "Test mobile-friendliness on your phone",
            "Check if you have HTTPS (secure)",
            "Review your URL structure for clarity"
          ]}
        />
      )
    }
  ];

  return (
    <LearningModuleLayout
      moduleConfig={{
        id: 'seo-technical',
        title: 'Technical SEO Explained Simply',
        subtitle: 'Module 4: Remove fear around technical SEO',
        icon: Zap,
        color: '#0045EF',
      }}
      items={lessons}
      enableCompletion={true}
      persistProgress={true}
      storageKey="seo-module-4-progress"
      onBackClick={onBackToModules}
    />
  );
};

export default SEOLesson4;