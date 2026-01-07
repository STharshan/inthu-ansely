import React, { useState, useEffect } from 'react';
import { Home, ChevronLeft, ChevronRight, Circle, CheckCircle2 } from 'lucide-react';

const SEOLesson1 = ({ onBackToModules, onLessonComplete }) => {
    const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
    const [completedLessons, setCompletedLessons] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = savedTheme === "dark";
        setIsDark(prefersDark);
        document.documentElement.classList.toggle("dark", prefersDark);
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        const next = !isDark;
        setIsDark(next);
        root.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
    };

    const module = {
        id: 1,
        title: "SEO for Local Businesses",
        lessons: [
            {
                id: 1,
                number: 1,
                title: "What Is Local SEO?",
                content: {
                    heading: "What Is Local SEO?",
                    description: "Local SEO helps your business appear when people search for services in a specific area.",
                    examples: [
                        '"MOT garage Leicester"',
                        '"emergency electrician near me"',
                        '"best café in Derby"'
                    ],
                    keyTakeaway: "Local SEO = high intent + fast conversions"
                }
            },
            {
                id: 2,
                number: 2,
                title: "The Google Map Pack",
                content: {
                    heading: "The Google Map Pack",
                    description: "The Map Pack is the box of 3 local businesses that appears at the top of Google search results. Getting into this pack dramatically increases visibility and clicks.",
                    examples: [
                        "Appears for searches with local intent",
                        "Shows business name, rating, and location",
                        "Drives high-quality traffic to your website"
                    ],
                    keyTakeaway: "Ranking in the Map Pack can triple your local visibility"
                }
            },
            {
                id: 3,
                number: 3,
                title: "Google Business Profile",
                content: {
                    heading: "Google Business Profile",
                    description: "Your Google Business Profile is the foundation of local SEO. It's free, powerful, and often the first thing customers see when they search for your business.",
                    examples: [
                        "Complete all profile sections",
                        "Add high-quality photos regularly",
                        "Respond to all reviews promptly"
                    ],
                    keyTakeaway: "A complete, active profile ranks higher and converts better"
                }
            },
            {
                id: 4,
                number: 4,
                title: "Local Content Wins",
                content: {
                    heading: "Local Content Wins",
                    description: "Creating content that mentions your location, local landmarks, and community events helps Google understand where you serve and improves your local rankings.",
                    examples: [
                        "Mention neighborhoods you serve",
                        "Write about local events or news",
                        "Create location-specific service pages"
                    ],
                    keyTakeaway: "Local content signals to Google exactly where you want to rank"
                }
            },
            {
                id: 5,
                number: 5,
                title: "Exercise",
                content: {
                    heading: "Practice Exercise",
                    description: "Time to apply what you've learned! Complete this exercise to reinforce your understanding of local SEO fundamentals.",
                    examples: [
                        "Audit your Google Business Profile",
                        "List 3 local keywords for your business",
                        "Identify 2 local content opportunities"
                    ],
                    keyTakeaway: "Practice makes perfect - implement what you've learned today"
                }
            }
        ]
    };

    const currentLesson = module.lessons[currentLessonIndex];
    const totalLessons = module.lessons.length;
    const completedCount = completedLessons.length;
    const progressPercentage = (completedCount / totalLessons) * 100;

    const goToLesson = (index) => {
        setCurrentLessonIndex(index);
        setSidebarOpen(false);
    };

    const goToPrevious = () => {
        if (currentLessonIndex > 0) {
            setCurrentLessonIndex(currentLessonIndex - 1);
        }
    };

    const goToNext = () => {
        if (!completedLessons.includes(currentLesson.id)) {
            setCompletedLessons([...completedLessons, currentLesson.id]);
            if (onLessonComplete) {
                onLessonComplete(module.id, currentLessonIndex);
            }
        }

        if (currentLessonIndex < totalLessons - 1) {
            setCurrentLessonIndex(currentLessonIndex + 1);
        } else {
            if (onBackToModules) {
                onBackToModules();
            }
        }
    };

    const handleBackToModules = () => {
        if (onBackToModules) {
            onBackToModules();
        }
    };

    const isLessonCompleted = (lessonId) => completedLessons.includes(lessonId);

    return (
        <div className="min-h-screen bg-white dark:bg-black">
            {/* Header */}
            <section className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm mt-30 z-20 shadow-sm dark:border-gray-800">
                <div className="container mx-auto px-4 py-3 sm:py-4">
                    {/* Top Row */}
                    <div className="flex items-center justify-between mb-3 gap-4">
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                            <button 
                                onClick={handleBackToModules}
                                className="inline-flex items-center justify-center hover:bg-slate-100 dark:hover:bg-gray-800 h-8 sm:h-9 rounded-md px-2 sm:px-3 text-sm font-medium text-slate-700 dark:text-gray-300 transition-colors flex-shrink-0"
                            >
                                <Home className="h-4 w-4 sm:mr-2" />
                                <span className="hidden sm:inline">All Modules</span>
                            </button>

                            <div className="h-4 w-px bg-slate-300 dark:bg-gray-700 flex-shrink-0"></div>

                            <div className="min-w-0">
                                <div className="text-xs text-slate-500 dark:text-gray-500">Module 1</div>
                                <h1 className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 dark:text-white truncate">
                                    {module.title}
                                </h1>
                            </div>
                        </div>

                        <span className="inline-flex items-center justify-center rounded-md border border-slate-200 dark:border-gray-700 bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-300 font-medium px-2 sm:px-3 py-1 text-xs sm:text-sm whitespace-nowrap flex-shrink-0">
                            {completedCount} / {totalLessons} Complete
                        </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                        <div
                            className="bg-[#0045EF] h-full transition-all duration-500 ease-out"
                            style={{ width: `${progressPercentage}%` }}
                        />
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-6 sm:py-8">
                <div className="grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
                    {/* Sidebar - Mobile Toggle Button */}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="lg:hidden w-full flex items-center justify-between p-4 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-lg shadow-sm"
                    >
                        <span className="font-semibold text-slate-900 dark:text-white">Lessons Menu</span>
                        <ChevronRight className={`h-5 w-5 transition-transform dark:text-gray-300 ${sidebarOpen ? 'rotate-90' : ''}`} />
                    </button>

                    {/* Sidebar Navigation */}
                    <aside
                        className={`
              ${sidebarOpen ? 'block' : 'hidden'} lg:block
              lg:sticky lg:top-24 lg:self-start
            `}
                    >
                        <div className="bg-white dark:bg-gray-900 rounded-xl border border-slate-200 dark:border-gray-800 shadow-sm p-4">
                            <h2 className="font-semibold mb-4 text-slate-900 dark:text-white">Lessons</h2>
                            <nav className="space-y-1.5">
                                {module.lessons.map((lesson, index) => {
                                    const isActive = currentLessonIndex === index;
                                    const isCompleted = isLessonCompleted(lesson.id);

                                    return (
                                        <button
                                            key={lesson.id}
                                            onClick={() => goToLesson(index)}
                                            className={`
                        w-full flex items-center gap-3 p-2.5 rounded-lg text-left transition-all
                        ${isActive
                                                    ? 'bg-[#0045EF] text-white shadow-sm'
                                                    : 'hover:bg-slate-100 dark:hover:bg-gray-800 text-slate-700 dark:text-gray-300'
                                                }
                      `}
                                        >
                                            {isCompleted ? (
                                                <CheckCircle2 className={`h-4 w-4 flex-shrink-0 ${isActive ? 'text-white' : 'text-green-600 dark:text-green-500'}`} />
                                            ) : (
                                                <Circle className={`h-4 w-4 flex-shrink-0 ${isActive ? 'text-white' : 'text-slate-400 dark:text-gray-600'}`} />
                                            )}
                                            <div className="flex-1 min-w-0">
                                                <div className={`text-xs mb-0.5 ${isActive ? 'opacity-90' : 'opacity-60'}`}>
                                                    Lesson {lesson.number}
                                                </div>
                                                <div className="text-sm font-medium truncate">
                                                    {lesson.title}
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main>
                        <div className="bg-white dark:bg-gray-900 rounded-xl border border-slate-200 dark:border-gray-800 shadow-sm p-6 sm:p-8">
                            {/* Lesson Header */}
                            <div className="mb-6 sm:mb-8">
                                <span className="inline-flex items-center justify-center rounded-md border border-[#0045EF] bg-[#0045EF] text-white px-3 py-1 text-xs font-medium mb-3">
                                    Lesson {currentLesson.number} of {totalLessons}
                                </span>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                                    {currentLesson.title}
                                </h2>
                            </div>

                            {/* Lesson Content */}
                            <div className="prose prose-slate dark:prose-invert max-w-none">
                                <div className="space-y-6">
                                    {/* Main Description */}
                                    <div>
                                        <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                                            {currentLesson.content.heading}
                                        </h3>
                                        <p className="text-base leading-relaxed text-slate-700 dark:text-gray-300">
                                            {currentLesson.content.description}
                                        </p>
                                    </div>

                                    {/* Examples Box */}
                                    <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 p-5 rounded-lg">
                                        <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-300">Examples:</h4>
                                        <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                                            {currentLesson.content.examples.map((example, index) => (
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
                                            {currentLesson.content.keyTakeaway}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-8 pt-6 border-t border-slate-200 dark:border-gray-800">
                                <button
                                    onClick={goToPrevious}
                                    disabled={currentLessonIndex === 0}
                                    className={`
                    inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium 
                    transition-all h-10 px-4 border
                    ${currentLessonIndex === 0
                                            ? 'opacity-50 cursor-not-allowed bg-slate-100 dark:bg-gray-800 border-slate-200 dark:border-gray-700 text-slate-400 dark:text-gray-600'
                                            : 'bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-700 hover:bg-slate-100 dark:hover:bg-gray-700 text-slate-700 dark:text-gray-300 shadow-sm'
                                        }
                  `}
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                    Previous
                                </button>

                                <button
                                    onClick={currentLessonIndex === totalLessons - 1 ? handleBackToModules : goToNext}
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-10 px-4 bg-[#0045EF] hover:bg-blue-700 text-white shadow-sm"
                                >
                                    {currentLessonIndex === totalLessons - 1 ? 'Back to All Modules' : 'Next Lesson'}
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        {/* Completion Badge */}
                        {completedCount === totalLessons && (
                            <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-200 dark:border-green-800 rounded-xl p-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full mb-3">
                                    <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                                    Module Complete! 
                                </h3>
                                <p className="text-slate-600 dark:text-gray-400 text-sm mb-4">
                                    You've finished all lessons in this module.
                                </p>
                                <button
                                    onClick={handleBackToModules}
                                    className="inline-flex items-center justify-center bg-[#0045EF] hover:bg-blue-700 text-white h-10 rounded-md px-6 text-sm font-medium transition-colors shadow-sm"
                                >
                                    Back to All Modules
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default SEOLesson1;