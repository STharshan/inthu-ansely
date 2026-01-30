import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MapPin,
  Users,
  FileText,
  Zap,
  TrendingUp,
  ChevronRight,
  ChevronDown,
  Circle,
  CheckCircle2,
  Home,
} from "lucide-react";

import Module1Lesson from "./Lesson1";
import Module2Lesson from "./Lesson2";
import Module3Lesson from "./Lesson3";
import Module4Lesson from "./Lesson4";
import Module5Lesson from "./Lesson5";

const SEOLearningPlatform = () => {
  const { moduleSlug } = useParams();
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState("modules");
  const [selectedModule, setSelectedModule] = useState(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [expandedModules, setExpandedModules] = useState([0, 1, 4]);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [isDark, setIsDark] = useState(false);

  // Module slug mapping
  const moduleSlugMap = {
    "local-businesses": 0,
    "seo-vs-social-media": 1,
    "content-that-ranks": 2,
    "technical-seo": 3,
    "traffic-to-sales": 4,
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = savedTheme === "dark";
    setIsDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  // Handle URL-based module selection
  useEffect(() => {
    if (moduleSlug && moduleSlugMap[moduleSlug] !== undefined) {
      const moduleIndex = moduleSlugMap[moduleSlug];
      setSelectedModule(moduleIndex);
      setCurrentLessonIndex(0);
      setCurrentView("lesson");
    } else if (!moduleSlug) {
      setCurrentView("modules");
      setSelectedModule(null);
    }
  }, [moduleSlug]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = !isDark;
    setIsDark(next);
    root.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const modules = [
    {
      id: 1,
      title: "SEO for Local Businesses",
      description: "Dominate your local area on Google",
      icon: MapPin,
      color: "bg-[#0045EF]",
      themeColor: "blue",
      LessonComponent: Module1Lesson,
      lessons: [
        { number: 1, title: "What Is Local SEO?" },
        { number: 2, title: "The Google Map Pack" },
        { number: 3, title: "Google Business Profile" },
        { number: 4, title: "Local Content Wins" },
        { number: 5, title: "Exercise" },
      ],
    },
    {
      id: 2,
      title: "SEO vs Social Media",
      description: "Understanding when to use each channel",
      icon: Users,
      color: "bg-[#0045EF]",
      themeColor: "purple",
      LessonComponent: Module2Lesson,
      lessons: [
        { number: 1, title: "Intent vs Attention" },
        { number: 2, title: "Traffic Quality Comparison" },
        { number: 3, title: "Why Businesses Burn Money" },
        { number: 4, title: "How They Work Together" },
        { number: 5, title: "Exercise" },
      ],
    },
    {
      id: 3,
      title: "Content That Ranks & Converts",
      description: "Create content that Google ranks and customers act on",
      icon: FileText,
      color: "bg-[#0045EF]",
      themeColor: "emerald",
      LessonComponent: Module3Lesson,
      lessons: [
        { number: 1, title: "Why Most Content Fails" },
        { number: 2, title: "Search Intent Is Everything" },
        { number: 3, title: "High-Performing Page Structure" },
        { number: 4, title: "Content for Small Businesses" },
        { number: 5, title: "Exercise" },
      ],
    },
    {
      id: 4,
      title: "Technical SEO Explained Simply",
      description: "Remove fear around technical SEO",
      icon: Zap,
      color: "bg-[#0045EF]",
      themeColor: "amber",
      LessonComponent: Module4Lesson,
      lessons: [
        { number: 1, title: "What Technical SEO Means" },
        { number: 2, title: "Speed = Rankings + Sales" },
        { number: 3, title: "Mobile Is Non-Negotiable" },
        { number: 4, title: "Clean Structure Helps Google" },
        { number: 5, title: "Exercise" },
      ],
    },
    {
      id: 5,
      title: "Turning SEO Traffic into Sales",
      description: "Turn search traffic into real revenue",
      icon: TrendingUp,
      color: "bg-[#0045EF]",
      themeColor: "rose",
      LessonComponent: Module5Lesson,
      lessons: [
        { number: 1, title: "Traffic Without Conversion" },
        { number: 2, title: "What Visitors Need" },
        { number: 3, title: "Conversion Essentials" },
        { number: 4, title: "Think Like a Customer" },
        { number: 5, title: "Exercise" },
      ],
    },
  ];

  const totalLessons = modules.reduce(
    (acc, module) => acc + module.lessons.length,
    0,
  );
  const completedCount = completedLessons.length;
  const progressPercentage = (completedCount / totalLessons) * 100;

  const toggleModule = (index) => {
    setExpandedModules((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const getModuleProgress = (moduleId) => {
    const module = modules.find((m) => m.id === moduleId);
    const moduleCompleted = module.lessons.filter((_, idx) =>
      completedLessons.includes(`${moduleId}-${idx}`),
    ).length;
    return {
      completed: moduleCompleted,
      total: module.lessons.length,
      percentage: (moduleCompleted / module.lessons.length) * 100,
    };
  };

  // Reverse slug mapping for navigation
  const moduleIndexToSlug = {
    0: "local-businesses",
    1: "seo-vs-social-media",
    2: "content-that-ranks",
    3: "technical-seo",
    4: "traffic-to-sales",
  };

  const startModule = (moduleIndex) => {
    const slug = moduleIndexToSlug[moduleIndex];
    navigate(`/learn/seo/${slug}`);
  };

  const goToLesson = (moduleIndex, lessonIndex) => {
    const slug = moduleIndexToSlug[moduleIndex];
    navigate(`/learn/seo/${slug}`);
    setCurrentLessonIndex(lessonIndex);
  };

  const backToModules = () => {
    navigate("/learn/seo");
  };

  const handleLessonComplete = (lessonIndex) => {
    const module = modules[selectedModule];
    const lessonId = `${module.id}-${lessonIndex}`;
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const handleNextLesson = () => {
    const module = modules[selectedModule];
    handleLessonComplete(currentLessonIndex);
    if (currentLessonIndex < module.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };

  const handlePreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    }
  };

  const isLessonCompleted = (moduleId, lessonIndex) => {
    return completedLessons.includes(`${moduleId}-${lessonIndex}`);
  };

  if (currentView === "lesson" && selectedModule !== null) {
    const module = modules[selectedModule];

    if (module.LessonComponent) {
      return (
        <module.LessonComponent
          module={module}
          currentLessonIndex={currentLessonIndex}
          completedLessons={completedLessons}
          onBack={backToModules}
          onLessonChange={setCurrentLessonIndex}
          onLessonComplete={handleLessonComplete}
          onNext={handleNextLesson}
          onPrevious={handlePreviousLesson}
          onBackToModules={backToModules}
          isLessonCompleted={(lessonIndex) =>
            isLessonCompleted(module.id, lessonIndex)
          }
        />
      );
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <section className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm mt-30 z-10 shadow-sm dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                SEO Learning Platform
              </h1>
              <p className="text-slate-600 dark:text-gray-400 mt-1 text-sm sm:text-base">
                Master SEO for your business success
              </p>
            </div>
            <span className="inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-gray-700 bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-300 font-medium px-4 py-2 text-sm whitespace-nowrap">
              {completedCount} / {totalLessons} Lessons Complete
            </span>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-slate-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="bg-[#0045EF] h-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid gap-4 sm:gap-6 max-w-5xl mx-auto">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const isExpanded = expandedModules.includes(index);
            const progress = getModuleProgress(module.id);

            return (
              <div
                key={module.id}
                className="bg-white dark:bg-gray-900 rounded-xl border border-slate-200 dark:border-gray-800 shadow-sm hover:shadow-md dark:hover:shadow-gray-800/50 transition-all duration-300 overflow-hidden"
              >
                <div className="p-4 sm:p-6">
                  {/* Module Header */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`${module.color} p-2.5 sm:p-3 rounded-lg text-white flex-shrink-0`}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 sm:gap-4 mb-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">
                            {module.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400">
                            {module.description}
                          </p>
                        </div>
                        <span className="inline-flex items-center justify-center rounded-md border border-slate-300 dark:border-gray-700 px-2 py-0.5 text-xs font-medium text-slate-700 dark:text-gray-300 whitespace-nowrap flex-shrink-0">
                          {progress.completed}/{progress.total}
                        </span>
                      </div>

                      {/* Module Progress Bar */}
                      <div className="w-full bg-slate-200 dark:bg-gray-700 rounded-full h-1.5 mt-3">
                        <div
                          className="bg-[#0045EF] h-full transition-all duration-500 rounded-full"
                          style={{ width: `${progress.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
                    <button
                      onClick={() => startModule(index)}
                      className="inline-flex items-center justify-center bg-[#0045EF] text-white hover:bg-blue-700 h-9 rounded-md px-3 sm:px-4 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                    >
                      Start Module
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                    <button
                      onClick={() => toggleModule(index)}
                      className="inline-flex items-center justify-center hover:bg-slate-100 dark:hover:bg-gray-800 h-9 rounded-md px-3 sm:px-4 text-sm font-medium text-slate-700 dark:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                    >
                      {isExpanded ? "Hide" : "Show"} Lessons
                      <ChevronDown
                        className={`h-4 w-4 ml-1 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>

                  {/* Lessons List */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-gray-800 space-y-1">
                      {module.lessons.map((lesson, lessonIndex) => {
                        const lessonId = `${module.id}-${lessonIndex}`;
                        const isCompleted = completedLessons.includes(lessonId);

                        return (
                          <button
                            key={lessonIndex}
                            onClick={() => goToLesson(index, lessonIndex)}
                            className="w-full flex items-center gap-3 p-2 sm:p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors text-left group"
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-500 flex-shrink-0" />
                            ) : (
                              <Circle className="h-4 w-4 text-slate-400 dark:text-gray-600 group-hover:text-slate-600 dark:group-hover:text-gray-400 flex-shrink-0" />
                            )}
                            <span
                              className={`text-sm ${isCompleted ? "text-slate-500 dark:text-gray-500 line-through" : "text-slate-700 dark:text-gray-300"}`}
                            >
                              Lesson {lesson.number}: {lesson.title}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Completion Message */}
        {completedCount === totalLessons && (
          <div className="mt-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-200 dark:border-green-800 rounded-xl p-6 sm:p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full mb-4">
                <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Congratulations!
              </h2>
              <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base">
                You've completed all {totalLessons} lessons. You're now ready to
                implement SEO strategies for your business!
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default SEOLearningPlatform;
