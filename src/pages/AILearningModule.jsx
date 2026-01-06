import React, { useState } from 'react';
import { BookOpen, Target, Lightbulb, Rocket, Layers, Search, Shield, Users, ChevronRight, ChevronLeft, Check, Moon, Sun } from 'lucide-react';
import FounderBottleneck from '../components/AILearningModule/FounderBottleneck';
import AIOverview from '../components/AILearningModule/AIOverview';
import AIValueAreas from '../components/AILearningModule/AIValueAreas';
import AISoftwareComparison from '../components/AILearningModule/AISoftwareComparison';
import AIOpportunityChecklist from '../components/AILearningModule/AIOpportunityChecklist';
import AIImplementationChecklist from '../components/AILearningModule/AIImplementationChecklist';
import AIStrengthsAndLimits from '../components/AILearningModule/AIStrengthsAndLimits';
import AINextSteps from '../components/AILearningModule/AINextSteps';

const AILearningModule = () => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [isDark, setIsDark] = useState(true);

  const lessons = [
    {
      id: 1,
      icon: Target,
      title: 'The Founder Bottleneck',
      content: (
        <FounderBottleneck />
      )
    },
    {
      id: 2,
      icon: Lightbulb,
      title: 'What AI Actually Is',
      content: (
        <AIOverview />
      )
    },
    {
      id: 3,
      icon: Rocket,
      title: 'Where AI Creates Impact',
      content: (
       <AIValueAreas />
      )
    },
    {
      id: 4,
      icon: Layers,
      title: 'AI vs Traditional Software',
      content: (
        <AISoftwareComparison />
      )
    },
    {
      id: 5,
      icon: Search,
      title: 'Identifying AI Opportunities',
      content: (
        <AIOpportunityChecklist />
      )
    },
    {
      id: 6,
      icon: Shield,
      title: 'Are You Ready for AI?',
      content: (
        <AIImplementationChecklist />
      )
    },
    {
      id: 7,
      icon: Users,
      title: 'AI as a Team Member',
      content: (
        <AIStrengthsAndLimits />
      )
    },
    {
      id: 8,
      icon: BookOpen,
      title: 'From Learning to Action',
      content: (
        <AINextSteps />
      )
    }
  ];

  const currentContent = lessons[currentLesson];
  const progress = ((currentLesson + 1) / lessons.length) * 100;

  const theme = {
    bg: isDark ? 'bg-black' : 'bg-white',
    text: isDark ? 'text-white' : 'text-gray-900',
    cardBg: isDark ? 'bg-gray-900' : 'bg-gray-100',
    border: isDark ? 'border-gray-800' : 'border-gray-200',
    hover: isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-200',
    inactive: isDark ? 'bg-gray-800' : 'bg-gray-200',
    progressBg: isDark ? 'bg-gray-800' : 'bg-gray-300',
    textMuted: isDark ? 'text-gray-400' : 'text-gray-600'
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text}`}>
      {/* Header */}
      <header className={`border-b ${theme.border} backdrop-blur-sm sticky top-0 z-10 ${isDark ? 'bg-black/80' : 'bg-white/80'}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-end">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-lg ${theme.hover} transition-colors`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="hidden md:block">
            <div className={`${theme.cardBg} rounded-xl border ${theme.border} p-6 sticky top-24`}>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm ${theme.textMuted}`}>Progress</span>
                  <span className="text-sm font-semibold">{currentLesson + 1}/8</span>
                </div>
                <div className={`${theme.progressBg} rounded-full h-2 overflow-hidden`}>
                  <div 
                    className="bg-[#0045EF] h-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              <nav className="space-y-1">
                {lessons.map((lesson, index) => {
                  const Icon = lesson.icon;
                  const isActive = currentLesson === index;
                  const isCompleted = currentLesson > index;

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => setCurrentLesson(index)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${
                        isActive 
                          ? 'bg-[#0045EF] text-white' 
                          : theme.hover
                      }`}
                    >
                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                        isActive 
                          ? 'bg-white/20' 
                          : theme.inactive
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-xs mb-0.5 ${isActive ? 'opacity-90' : 'opacity-70'}`}>
                          Lesson {lesson.id}
                        </div>
                        <div className="text-sm font-medium truncate">{lesson.title}</div>
                      </div>
                      {isCompleted && !isActive && (
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main>
            <div className={`${theme.cardBg} rounded-xl border ${theme.border} p-8 md:p-12`}>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0045EF]/10 rounded-xl flex items-center justify-center">
                    {React.createElement(currentContent.icon, {
                      className: "w-6 h-6 text-[#0045EF]"
                    })}
                  </div>
                  <div>
                    <div className={`text-sm ${theme.textMuted} mb-1`}>
                      Lesson {currentLesson + 1} of {lessons.length}
                    </div>
                    <h2 className="text-3xl font-bold">{currentContent.title}</h2>
                  </div>
                </div>
              </div>

              {currentContent.content}

              {/* Navigation */}
              <div className={`mt-12 pt-8 border-t ${theme.border} flex items-center justify-between`}>
                <button
                  onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
                  disabled={currentLesson === 0}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    currentLesson === 0
                      ? `opacity-50 cursor-not-allowed border ${theme.border}`
                      : `border ${isDark ? 'border-gray-700' : 'border-gray-300'} ${theme.hover}`
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>

                <button
                  onClick={() => setCurrentLesson(Math.min(lessons.length - 1, currentLesson + 1))}
                  disabled={currentLesson === lessons.length - 1}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    currentLesson === lessons.length - 1
                      ? 'bg-[#0045EF] text-white opacity-50 cursor-not-allowed'
                      : 'bg-[#0045EF] text-white hover:bg-[#0039CC]'
                  }`}
                >
                  Next Lesson
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

export default AILearningModule;