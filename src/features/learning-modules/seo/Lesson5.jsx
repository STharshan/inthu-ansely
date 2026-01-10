import React, { useState, useEffect } from 'react';
import { Home, ChevronLeft, ChevronRight, Circle, CheckCircle2, X } from 'lucide-react';

const Lesson5 = ({ onBackToModules }) => {
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
        id: 5,
        title: "Turning SEO Traffic into Sales",
        lessons: [
            {
                id: 1,
                number: 1,
                title: "Traffic Without Conversion",
                content: {
                    heading: "Traffic Without Conversion Is Useless",
                    listTitle: "Many sites get traffic but:",
                    listItems: ["No calls", "No enquiries", "No sales"],
                    keyTakeaway: "SEO must feed sales."
                }
            },
            {
                id: 2,
                number: 2,
                title: "What Visitors Need",
                content: {
                    heading: "What Visitors Need to Convert",
                    listTitle: "To convert, visitors need:",
                    listItems: [
                        "Trust signals (reviews, credentials)",
                        "Clear contact information",
                        "Easy next steps"
                    ],
                    keyTakeaway: "Remove every barrier between traffic and action."
                }
            },
            {
                id: 3,
                number: 3,
                title: "Conversion Essentials",
                content: {
                    heading: "Conversion Essentials",
                    listTitle: "Every page should have:",
                    listItems: [
                        "One clear call-to-action",
                        "Visible phone number or contact form",
                        "Social proof or testimonials",
                        "Answer to 'Why choose us?'"
                    ],
                    keyTakeaway: "Make it obvious what visitors should do next."
                }
            },
            {
                id: 4,
                number: 4,
                title: "Think Like a Customer",
                content: {
                    heading: "Think Like a Customer",
                    listTitle: "Ask yourself:",
                    listItems: [
                        "Would I call this business?",
                        "Is it clear what they do?",
                        "Do I trust them?",
                        "Can I easily get in touch?"
                    ],
                    keyTakeaway: "Your site should answer questions, not create them."
                }
            },
            {
                id: 5,
                number: 5,
                title: "Exercise",
                content: {
                    heading: "Practice Exercise",
                    listTitle: "Audit your website:",
                    listItems: [
                        "Find your most visited page",
                        "Count how many CTAs it has",
                        "Check if your phone number is visible",
                        "Read it as if you're a customer"
                    ],
                    keyTakeaway: "Traffic without conversion is just vanity metrics."
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
        }
        if (currentLessonIndex < totalLessons - 1) {
            setCurrentLessonIndex(currentLessonIndex + 1);
        }
    };

    const isLessonCompleted = (lessonId) => completedLessons.includes(lessonId);

    return (
        <div className="min-h-screen bg-white dark:bg-black">
              {/* Header */}
            <section className="border-b bg-white dark:bg-gray-900 backdrop-blur-sm mt-30 shadow-sm dark:border-gray-800">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={onBackToModules}
                                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-gray-800 text-sm font-medium text-slate-700 dark:text-gray-300"
                            >
                                <Home className="h-4 w-4" />
                                <span className="hidden sm:inline">All Modules</span>
                            </button>

                            <div className="h-4 w-px bg-slate-300 dark:bg-gray-700" />

                            <div>
                                <div className="text-xs text-slate-500 dark:text-gray-500">Module 5</div>
                                <h1 className="font-bold text-slate-900 dark:text-white">{module.title}</h1>
                            </div>
                        </div>

                        <span className="text-sm font-medium bg-slate-100 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-md px-3 py-1 text-slate-700 dark:text-gray-300">
                            {completedCount} / {totalLessons} Complete
                        </span>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-gray-700 rounded-full h-1.5">
                        <div
                            className="bg-[var(--brand-blue)] h-full rounded-full transition-all"
                            style={{ width: `${progressPercentage}%` }}
                        />
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-8 grid lg:grid-cols-[280px_1fr] gap-8">
                {/* Mobile Sidebar Toggle */}
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="lg:hidden w-full flex items-center justify-between p-4 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-lg shadow-sm"
                >
                    <span className="font-semibold text-slate-900 dark:text-white">Lessons Menu</span>
                    <ChevronRight className={`h-5 w-5 dark:text-gray-300 transition-transform ${sidebarOpen ? 'rotate-90' : ''}`} />
                </button>

                {/* Sidebar */}
                <aside className={`${sidebarOpen ? 'block' : 'hidden'} lg:block lg:sticky lg:top-24`}>
                    <div className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-xl p-4">
                        <h2 className="font-semibold mb-4 text-slate-900 dark:text-white">Lessons</h2>
                        <nav className="space-y-1.5">
                            {module.lessons.map((lesson, index) => {
                                const isActive = index === currentLessonIndex;
                                const isCompleted = isLessonCompleted(lesson.id);

                                return (
                                    <button
                                        key={lesson.id}
                                        onClick={() => goToLesson(index)}
                                        className={`w-full flex items-center gap-3 p-2.5 rounded-lg text-left transition-all
                                        ${isActive ? 'bg-[var(--brand-blue)] text-white' : 'hover:bg-slate-100 dark:hover:bg-gray-800 text-slate-700 dark:text-gray-300'}`}
                                    >
                                        {isCompleted ? (
                                            <CheckCircle2 className={`h-4 w-4 ${isActive ? 'text-white' : 'text-green-600 dark:text-green-500'}`} />
                                        ) : (
                                            <Circle className={`h-4 w-4 ${isActive ? 'text-white' : 'text-slate-400 dark:text-gray-600'}`} />
                                        )}
                                        <span className="text-sm font-medium truncate">{lesson.title}</span>
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                </aside>

                {/* Main */}
                <main>
                    <div className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-xl p-6 sm:p-8">
                        <span className="inline-block mb-3 px-3 py-1 text-xs font-medium bg-[var(--brand-blue)] text-white rounded-md">
                            Lesson {currentLesson.number} of {totalLessons}
                        </span>

                        <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">{currentLesson.title}</h2>

                        <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">{currentLesson.content.heading}</h3>

                        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 p-5 rounded-lg mb-6">
                            <h4 className="font-semibold mb-3 text-[var(--brand-blue)] dark:text-blue-300">
                                {currentLesson.content.listTitle}
                            </h4>
                            <ul className="space-y-2">
                                {currentLesson.content.listItems.map((item, i) => (
                                    <li key={i} className="flex gap-2 items-start">
                                        <X className="h-5 w-5 text-[var(--brand-blue)] dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-[var(--brand-blue)] dark:text-blue-200">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-900 p-5 rounded-lg text-center font-semibold text-slate-900 dark:text-white">
                            {currentLesson.content.keyTakeaway}
                        </div>

                        {/* Navigation */}
                        <div className="flex justify-between mt-8 pt-6 border-t border-slate-200 dark:border-gray-800">
                            <button
                                onClick={goToPrevious}
                                disabled={currentLessonIndex === 0}
                                className={`flex items-center gap-2 h-10 px-4 rounded-md border text-sm transition-colors
                                ${currentLessonIndex === 0
                                    ? 'opacity-50 cursor-not-allowed bg-slate-100 dark:bg-gray-800 border-slate-200 dark:border-gray-700 text-slate-400 dark:text-gray-600'
                                    : 'bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-700 hover:bg-slate-100 dark:hover:bg-gray-700 text-slate-700 dark:text-gray-300'
                                }`}
                            >
                                <ChevronLeft className="h-4 w-4" />
                                Previous
                            </button>

                            <button
                                onClick={
                                    currentLessonIndex === totalLessons - 1
                                        ? onBackToModules
                                        : goToNext
                                }
                                className="flex items-center gap-2 h-10 px-4 rounded-md text-sm bg-[var(--brand-blue)] text-white hover:bg-blue-700 transition-colors"
                            >
                                {currentLessonIndex === totalLessons - 1
                                    ? 'Back to All Modules'
                                    : 'Next Lesson'}
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Lesson5;