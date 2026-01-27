import React from 'react';
import { FileText, X, Check } from 'lucide-react';
import LearningModuleLayout from '../LearningModuleLayout';

const ContentLessonContent = ({ heading, listType, listTitle, listItems, keyTakeaway }) => (
  <div className="space-y-6">
    {/* Heading */}
    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
      {heading}
    </h3>

    {/* List Box */}
    <div
      className={`p-5 rounded-lg border ${
        listType === 'negative'
          ? 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900'
          : 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900'
      }`}
    >
      <h4
        className={`font-semibold mb-3 ${
          listType === 'negative'
            ? 'text-rose-900 dark:text-rose-300'
            : 'text-[#0045EF] dark:text-blue-300'
        }`}
      >
        {listTitle}
      </h4>

      <ul className="space-y-2">
        {listItems.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            {listType === 'negative' ? (
              <X className="h-5 w-5 text-rose-500 dark:text-rose-400 mt-0.5 flex-shrink-0" />
            ) : (
              <Check className="h-5 w-5 text-[#0045EF] dark:text-blue-400 mt-0.5 flex-shrink-0" />
            )}
            <span
              className={
                listType === 'negative'
                  ? 'text-rose-800 dark:text-rose-200'
                  : 'text-[#0045EF] dark:text-blue-200'
              }
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>

    {/* Key Takeaway */}
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-900 p-5 rounded-lg text-center">
      <p className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
        {keyTakeaway}
      </p>
    </div>
  </div>
);

const SEOLesson3 = ({ onBackToModules }) => {
  const lessons = [
    {
      id: 1,
      icon: FileText,
      title: "Why Most Content Fails",
      content: (
        <ContentLessonContent
          heading="Why Most Content Fails"
          listType="negative"
          listTitle="Most content:"
          listItems={[
            "Talks about the business",
            "Lacks intent",
            "Has no structure",
            "Has no CTA"
          ]}
          keyTakeaway="Google ranks helpful content, not long content."
        />
      )
    },
    {
      id: 2,
      icon: FileText,
      title: "Search Intent Is Everything",
      content: (
        <ContentLessonContent
          heading="Search Intent Is Everything"
          listType="positive"
          listTitle="Match your content to intent:"
          listItems={[
            "Informational: Answer questions clearly",
            "Navigational: Make your brand easy to find",
            "Commercial: Help them compare options",
            "Transactional: Remove friction from buying"
          ]}
          keyTakeaway="The best content answers what people are actually searching for"
        />
      )
    },
    {
      id: 3,
      icon: FileText,
      title: "High-Performing Page Structure",
      content: (
        <ContentLessonContent
          heading="High-Performing Page Structure"
          listType="positive"
          listTitle="Every page needs:"
          listItems={[
            "Clear headline that matches the search",
            "Quick answer in the first paragraph",
            "Scannable subheadings",
            "Strong call-to-action"
          ]}
          keyTakeaway="Structure helps both Google and readers understand your content"
        />
      )
    },
    {
      id: 4,
      icon: FileText,
      title: "Content for Small Businesses",
      content: (
        <ContentLessonContent
          heading="Content for Small Businesses"
          listType="positive"
          listTitle="Small businesses should focus on:"
          listItems={[
            "Service pages with local keywords",
            "FAQ pages answering common questions",
            "Case studies or testimonials",
            "Local area guides"
          ]}
          keyTakeaway="Quality local content beats generic blog posts every time"
        />
      )
    },
    {
      id: 5,
      icon: FileText,
      title: "Exercise",
      content: (
        <ContentLessonContent
          heading="Practice Exercise"
          listType="positive"
          listTitle="Complete these tasks:"
          listItems={[
            "Pick one service you offer",
            "Write a headline matching search intent",
            "List 3 questions customers ask",
            "Draft a clear call-to-action"
          ]}
          keyTakeaway="Practice makes perfect - start with one page and refine it"
        />
      )
    }
  ];

  return (
    <LearningModuleLayout
      moduleConfig={{
        id: 'seo-content-ranks',
        title: 'Content That Ranks & Converts',
        subtitle: 'Module 3: Create content that Google ranks and customers act on',
        icon: FileText,
        color: '#0045EF',
      }}
      items={lessons}
      enableCompletion={true}
      persistProgress={true}
      storageKey="seo-module-3-progress"
      onBackClick={onBackToModules}
    />
  );
};

export default SEOLesson3;