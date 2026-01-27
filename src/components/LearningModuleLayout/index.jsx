import React, { useState, useEffect } from 'react';
import { BookOpen, ChevronRight, ChevronLeft, Check } from 'lucide-react';

const LearningModuleLayout = ({
  moduleConfig,
  items,
  enableCompletion = false,
  persistProgress = false,
  storageKey = 'module-progress',
  enableKeyboard = false,
}) => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [completed, setCompleted] = useState([]);

  // Load progress from localStorage
  useEffect(() => {
    if (enableCompletion && persistProgress && storageKey) {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        try {
          setCompleted(JSON.parse(saved));
        } catch (e) {
          console.error('Failed to load progress:', e);
        }
      }
    }
  }, [enableCompletion, persistProgress, storageKey]);

  // Save progress to localStorage
  useEffect(() => {
    if (enableCompletion && persistProgress && storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(completed));
    }
  }, [completed, enableCompletion, persistProgress, storageKey]);

  // Keyboard navigation
  useEffect(() => {
    if (!enableKeyboard) return;

    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowLeft' && currentLesson > 0) {
        setCurrentLesson(currentLesson - 1);
      } else if (e.key === 'ArrowRight' && currentLesson < items.length - 1) {
        setCurrentLesson(currentLesson + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentLesson, items.length, enableKeyboard]);

  const currentContent = items[currentLesson];
  const progress = ((currentLesson + 1) / items.length) * 100;
  const isCompleted = (id) => completed.includes(id);

  const handleNext = () => {
    if (currentLesson < items.length - 1) {
      if (enableCompletion && !completed.includes(currentContent.id)) {
        setCompleted([...completed, currentContent.id]);
      }
      setCurrentLesson(currentLesson + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-black text-gray-900 dark:text-white mt-20">
      {/* EXACT AI MODULE HEADER - Desktop & Mobile */}
      <div className="border-b border-gray-200 dark:border-gray-800 backdrop-blur-sm sticky top-0 z-10 bg-white/80 dark:bg-black/80 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {moduleConfig.icon && (
              <div className="w-8 h-8 bg-[#0045EF] rounded-lg flex items-center justify-center">
                <moduleConfig.icon className="w-5 h-5 text-white" />
              </div>
            )}
            <div>
              <h1 className="text-xl font-semibold">{moduleConfig.title}</h1>
              {moduleConfig.subtitle && (
                <p className="text-sm text-gray-600 dark:text-gray-300">{moduleConfig.subtitle}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* EXACT PPC MODULE MOBILE TABS - Hidden on desktop, Fixed and Scrollable */}
      <div className="lg:hidden sticky top-[73px] z-40 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="overflow-x-auto">
          <div className="container mx-auto px-4 py-4">
            <div className="flex gap-2 min-w-max">
              {items.map((item, index) => {
                const Icon = item.icon;
                const isActive = currentLesson === index;

                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentLesson(index)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap shadow-sm ${
                      isActive
                        ? 'text-white shadow-md'
                        : 'bg-white dark:bg-black text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 border border-gray-200 dark:border-gray-700'
                    }`}
                    style={isActive ? { backgroundColor: moduleConfig.color || '#0045EF' } : {}}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    {item.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* RESPONSIVE GRID: Desktop (sidebar) + Mobile (full width) */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-8">

          {/* EXACT AI MODULE DESKTOP SIDEBAR - Hidden on mobile */}
          <aside className="hidden lg:block">
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 sticky top-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Progress</span>
                  <span className="text-sm font-semibold">{currentLesson + 1}/{items.length}</span>
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full transition-all duration-500"
                    style={{ width: `${progress}%`, backgroundColor: moduleConfig.color || '#0045EF' }}
                  ></div>
                </div>
              </div>

              <nav className="space-y-1">
                {items.map((lesson, index) => {
                  const Icon = lesson.icon;
                  const isActive = currentLesson === index;
                  const isLessonCompleted = enableCompletion && isCompleted(lesson.id) && !isActive;

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => setCurrentLesson(index)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-300 ${
                        isActive
                          ? 'text-white'
                          : 'hover:bg-gray-200 dark:hover:bg-gray-800'
                      }`}
                      style={isActive ? { backgroundColor: moduleConfig.color || '#0045EF' } : {}}
                    >
                      {Icon && (
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                          isActive
                            ? 'bg-white/20'
                            : 'bg-gray-200 dark:bg-gray-700'
                        }`}>
                          <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-900 dark:text-white'}`} />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className={`text-xs mb-0.5 ${isActive ? 'opacity-90' : 'opacity-70'}`}>
                          Lesson {index + 1}
                        </div>
                        <div className="text-sm font-medium truncate">{lesson.title}</div>
                      </div>
                      {isLessonCompleted && (
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* MAIN CONTENT - Matches AI Module exactly */}
          <main>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-8 md:p-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
              {/* Lesson Header with Icon - EXACT AI MODULE STYLE */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  {currentContent.icon && (
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${moduleConfig.color || '#0045EF'}1A` }}
                    >
                      <currentContent.icon
                        className="w-6 h-6"
                        style={{ color: moduleConfig.color || '#0045EF' }}
                      />
                    </div>
                  )}
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Lesson {currentLesson + 1} of {items.length}
                    </div>
                    <h2 className="text-3xl font-bold">{currentContent.title}</h2>
                  </div>
                </div>
              </div>

              {/* Lesson Content */}
              {currentContent.content}

              {/* EXACT AI MODULE NAVIGATION BUTTONS */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                <button
                  onClick={handlePrevious}
                  disabled={currentLesson === 0}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    currentLesson === 0
                      ? 'opacity-50 cursor-not-allowed border border-gray-300 dark:border-gray-700'
                      : 'border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>

                <button
                  onClick={handleNext}
                  disabled={currentLesson === items.length - 1}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    currentLesson === items.length - 1
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-[#0031B5]'
                  }`}
                  style={{
                    backgroundColor: moduleConfig.color || '#0045EF',
                    color: 'white'
                  }}
                >
                  {currentLesson === items.length - 1 ? 'Complete' : 'Next Lesson'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
};

export default LearningModuleLayout;
