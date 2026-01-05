import React, { useState } from 'react';
import { BookOpen, Target, Lightbulb, Rocket, Layers, Search, Shield, Users, ChevronRight, ChevronLeft, Check } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 backdrop-blur-sm sticky top-0 z-10 bg-gray-950/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-semibold">AI for Business Growth</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="hidden md:block">
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 sticky top-24">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Progress</span>
                  <span className="text-sm font-semibold">{currentLesson + 1}/8</span>
                </div>
                <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-orange-600 h-full transition-all duration-500"
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
                          ? 'bg-orange-600 text-white' 
                          : 'hover:bg-gray-800'
                      }`}
                    >
                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                        isActive 
                          ? 'bg-white/20' 
                          : 'bg-gray-800'
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
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main>
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-8 md:p-12">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-600/10 rounded-xl flex items-center justify-center">
                    {React.createElement(currentContent.icon, {
                      className: "w-6 h-6 text-orange-600"
                    })}
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">
                      Lesson {currentLesson + 1} of {lessons.length}
                    </div>
                    <h2 className="text-3xl font-bold">{currentContent.title}</h2>
                  </div>
                </div>
              </div>

              {currentContent.content}

              {/* Navigation */}
              <div className="mt-12 pt-8 border-t border-gray-800 flex items-center justify-between">
                <button
                  onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
                  disabled={currentLesson === 0}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    currentLesson === 0
                      ? 'opacity-50 cursor-not-allowed border border-gray-800'
                      : 'border border-gray-700 hover:bg-gray-800'
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
                      ? 'bg-orange-600 text-white opacity-50 cursor-not-allowed'
                      : 'bg-orange-600 text-white hover:bg-orange-700'
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