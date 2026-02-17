import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MapPin,
  Users,
  FileText,
  Zap,
  TrendingUp,
  ChevronRight,
  Circle,
} from "lucide-react";

import Module1Lesson from "./Lesson1";
import Module2Lesson from "./Lesson2";
import Module3Lesson from "./Lesson3";
import Module4Lesson from "./Lesson4";
import Module5Lesson from "./Lesson5";
import LearningModuleLayout from "../LearningModuleLayout";

const modules = [
  {
    id: 1,
    title: "SEO for Local Businesses",
    description: "Dominate your local area on Google",
    icon: MapPin,
    slug: "local-businesses",
    LessonComponent: Module1Lesson,
    lessons: [
      "What Is Local SEO?",
      "The Google Map Pack",
      "Google Business Profile",
      "Local Content Wins",
      "Exercise",
    ],
  },
  {
    id: 2,
    title: "SEO vs Social Media",
    description: "Understanding when to use each channel",
    icon: Users,
    slug: "seo-vs-social-media",
    LessonComponent: Module2Lesson,
    lessons: [
      "Intent vs Attention",
      "Traffic Quality Comparison",
      "Why Businesses Burn Money",
      "How They Work Together",
      "Exercise",
    ],
  },
  {
    id: 3,
    title: "Content That Ranks & Converts",
    description: "Create content that Google ranks and customers act on",
    icon: FileText,
    slug: "content-that-ranks",
    LessonComponent: Module3Lesson,
    lessons: [
      "Why Most Content Fails",
      "Search Intent Is Everything",
      "High-Performing Page Structure",
      "Content for Small Businesses",
      "Exercise",
    ],
  },
  {
    id: 4,
    title: "Technical SEO Explained Simply",
    description: "Remove fear around technical SEO",
    icon: Zap,
    slug: "technical-seo",
    LessonComponent: Module4Lesson,
    lessons: [
      "What Technical SEO Means",
      "Speed = Rankings + Sales",
      "Mobile Is Non-Negotiable",
      "Clean Structure Helps Google",
      "Exercise",
    ],
  },
  {
    id: 5,
    title: "Turning SEO Traffic into Sales",
    description: "Turn search traffic into real revenue",
    icon: TrendingUp,
    slug: "traffic-to-sales",
    LessonComponent: Module5Lesson,
    lessons: [
      "Traffic Without Conversion",
      "What Visitors Need",
      "Conversion Essentials",
      "Think Like a Customer",
      "Exercise",
    ],
  },
];

const moduleSlugMap = {
  "local-businesses": 0,
  "seo-vs-social-media": 1,
  "content-that-ranks": 2,
  "technical-seo": 3,
  "traffic-to-sales": 4,
};

/** Module overview content shown inside LearningModuleLayout */
const ModuleOverview = ({ module, onStart }) => (
  <div className="space-y-8">
    <div>
      <p className="text-lg leading-relaxed text-slate-700 dark:text-gray-300">
        {module.description}
      </p>
    </div>

    {/* Lessons list */}
    <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
        What you'll learn
      </h3>
      <div className="space-y-3">
        {module.lessons.map((lesson, index) => (
          <div key={index} className="flex items-center gap-3">
            <Circle className="h-4 w-4 text-[#0045EF] flex-shrink-0" />
            <span className="text-sm text-slate-700 dark:text-gray-300">
              Lesson {index + 1}: {lesson}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Start button */}
    <button
      onClick={onStart}
      className="inline-flex items-center gap-2 bg-[#0045EF] text-white hover:bg-blue-700 px-6 py-3 rounded-lg text-sm font-medium transition-colors"
    >
      Start Module
      <ChevronRight className="h-4 w-4" />
    </button>
  </div>
);

const SEOLearningPlatform = () => {
  const { moduleSlug } = useParams();
  const navigate = useNavigate();

  // If a slug is present, render the individual lesson component
  if (moduleSlug && moduleSlugMap[moduleSlug] !== undefined) {
    const moduleIndex = moduleSlugMap[moduleSlug];
    const module = modules[moduleIndex];
    const LessonComponent = module.LessonComponent;

    return (
      <LessonComponent
        onBackToModules={() => navigate("/learn/seo")}
      />
    );
  }

  // Otherwise, render the "All Modules" page using LearningModuleLayout
  const items = modules.map((module) => ({
    id: module.id,
    icon: module.icon,
    title: module.title,
    content: (
      <ModuleOverview
        module={module}
        onStart={() => navigate(`/learn/seo/${module.slug}`)}
      />
    ),
  }));

  return (
    <LearningModuleLayout
      moduleConfig={{
        id: "seo-learning",
        title: "SEO Learning Platform",
        subtitle: "Master SEO for Your Business Success",
        color: "#0045EF",
      }}
      items={items}
    />
  );
};

export default SEOLearningPlatform;
