import React from 'react';
import { Users } from 'lucide-react';
import LearningModuleLayout from '../LearningModuleLayout';

const ComparisonContent = ({ heading, comparison, keyTakeaways }) => (
  <div className="space-y-6">
    {/* Heading */}
    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{heading}</h3>

    {/* Comparison Grid */}
    <div className="grid sm:grid-cols-2 gap-4">
      {comparison.map((item, i) => (
        <div key={i} className="border border-gray-300 dark:border-gray-700 p-5 rounded-lg bg-white dark:bg-gray-900">
          <h4 className="font-semibold mb-2 text-[#0045EF] dark:text-blue-400">{item.title}</h4>
          <p className="text-slate-700 dark:text-gray-300">{item.description}</p>
        </div>
      ))}
    </div>

    {/* Key Takeaways */}
    <div className="border border-purple-200 dark:border-[#0045EF] p-5 rounded-lg text-center bg-purple-50 dark:bg-blue-950/20">
      {keyTakeaways.map((t, i) => (
        <p key={i} className="font-semibold text-black dark:text-white">{t}</p>
      ))}
    </div>
  </div>
);

const SEOLesson2 = ({ onBackToModules }) => {
  const lessons = [
    {
      id: 1,
      icon: Users,
      title: "Intent vs Attention",
      content: (
        <ComparisonContent
          heading="Intent vs Attention"
          comparison={[
            { title: "SEO = Intent", description: "People are searching because they need something" },
            { title: "Social = Attention", description: "People are scrolling for entertainment" }
          ]}
          keyTakeaways={["SEO captures demand", "Social creates awareness"]}
        />
      )
    },
    {
      id: 2,
      icon: Users,
      title: "Traffic Quality Comparison",
      content: (
        <ComparisonContent
          heading="Traffic Quality Comparison"
          comparison={[
            { title: "SEO Traffic", description: "High intent, ready to buy or take action" },
            { title: "Social Traffic", description: "Discovery mode, needs more nurturing" }
          ]}
          keyTakeaways={["SEO visitors convert faster", "Social builds brand awareness"]}
        />
      )
    },
    {
      id: 3,
      icon: Users,
      title: "Why Businesses Burn Money",
      content: (
        <ComparisonContent
          heading="Why Businesses Burn Money"
          comparison={[
            { title: "Wrong Channel", description: "Spending on social when customers search on Google" },
            { title: "Ignoring Intent", description: "Not matching marketing to customer behaviour" }
          ]}
          keyTakeaways={["Match your marketing to how customers buy", "Local services need SEO, not just social"]}
        />
      )
    },
    {
      id: 4,
      icon: Users,
      title: "How They Work Together",
      content: (
        <ComparisonContent
          heading="How They Work Together"
          comparison={[
            { title: "SEO's Role", description: "Capture people actively looking for your service" },
            { title: "Social's Role", description: "Build awareness and trust over time" }
          ]}
          keyTakeaways={["Use SEO for conversion", "Use social for brand building"]}
        />
      )
    },
    {
      id: 5,
      icon: Users,
      title: "Exercise",
      content: (
        <ComparisonContent
          heading="Practice Exercise"
          comparison={[
            { title: "Audit Your Strategy", description: "Review where you're spending time and money" },
            { title: "Balance Your Mix", description: "Align your efforts with customer intent" }
          ]}
          keyTakeaways={["Focus on SEO for local businesses", "Use social strategically, not exclusively"]}
        />
      )
    }
  ];

  return (
    <LearningModuleLayout
      moduleConfig={{
        id: 'seo-vs-social',
        title: 'SEO vs Social Media',
        subtitle: 'Module 2: Understanding when to use each channel',
        icon: Users,
        color: '#0045EF',
      }}
      items={lessons}
      enableCompletion={true}
      persistProgress={true}
      storageKey="seo-module-2-progress"
      onBackClick={onBackToModules}
    />
  );
};

export default SEOLesson2;
