import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Circle, CheckCircle2, Home } from 'lucide-react';

const Lesson4 = ({ onBackToModules }) => {
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
        id: 4,
        title: "Technical SEO Explained Simply",
        lessons: [
            {
                id: 1,
                number: 1,
                title: "What Technical SEO Means",
                content: {
                    heading: "What Technical SEO Really Means",
                    description: "Technical SEO = how well your website works",
                    listTitle: "Google wants:",
                    listItems: [
                        "Fast sites",
                        "Mobile-friendly pages",
                        "Clean structure",
                        "Secure browsing"
                    ]
                }
            },
            {
                id: 2,
                number: 2,
                title: "Speed = Rankings + Sales",
                content: {
                    heading: "Speed = Rankings + Sales",
                    description: "A slow website loses visitors and rankings",
                    listTitle: "Why speed matters:",
                    listItems: [
                        "53% of mobile users leave if a page takes over 3 seconds",
                        "Google uses speed as a ranking factor",
                        "Fast sites convert better",
                        "Users expect instant results"
                    ]
                }
            },
            {
                id: 3,
                number: 3,
                title: "Mobile Is Non-Negotiable",
                content: {
                    heading: "Mobile Is Non-Negotiable",
                    description: "Google ranks based on your mobile site, not desktop",
                    listTitle: "Mobile essentials:",
                    listItems: [
                        "Responsive design that adapts to all screens",
                        "Tap targets large enough for fingers",
                        "Text readable without zooming",
                        "No horizontal scrolling"
                    ]
                }
            },
            {
                id: 4,
                number: 4,
                title: "Clean Structure Helps Google",
                content: {
                    heading: "Clean Structure Helps Google",
                    description: "Google needs to understand your site to rank it properly",
                    listTitle: "Structure basics:",
                    listItems: [
                        "Clear URL structure (example.com/services/plumbing)",
                        "Logical navigation",
                        "XML sitemap for Google",
                        "Internal links between related pages"
                    ]
                }
            },
            {
                id: 5,
                number: 5,
                title: "Exercise",
                content: {
                    heading: "Practice Exercise",
                    description: "Test your site and identify improvements",
                    listTitle: "Check these now:",
                    listItems: [
                        "Run your site through Google PageSpeed Insights",
                        "Test mobile-friendliness on your phone",
                        "Check if you have HTTPS (secure)",
                        "Review your URL structure for clarity"
                    ]
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
            <section className="border-b bg-white dark:bg-gray-900 backdrop-blur-sm mt-30 z-20 shadow-sm dark:border-gray-800">
                <div className="container mx-auto px-4 py-3 sm:py-4">
                    <div className="flex items-center justify-between mb-3 gap-4">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                            <button
                                onClick={onBackToModules}
                                className="inline-flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-gray-800 h-9 rounded-md px-3 text-sm font-medium text-slate-700 dark:text-gray-300"
                            >
                                <Home className="h-4 w-4" />
                                <span className="hidden sm:inline">All Modules</span>
                            </button>

                            <div className="h-4 w-px bg-slate-300 dark:bg-gray-700"></div>

                            <div className="min-w-0">
                                <div className="text-xs text-slate-500 dark:text-gray-500">Module 4</div>
                                <h1 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                                    {module.title}
                                </h1>
                            </div>
                        </div>

                        <span className="rounded-md border border-slate-200 dark:border-gray-700 bg-slate-100 dark:bg-gray-800 px-3 py-1 text-xs sm:text-sm font-medium text-slate-700 dark:text-gray-300">
                            {completedCount} / {totalLessons} Complete
                        </span>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                        <div
                            className="bg-[var(--brand-blue)] h-full transition-all duration-500"
                            style={{ width: `${progressPercentage}%` }}
                        />
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-6 sm:py-8">
                <div className="grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
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
                        <div className="bg-white dark:bg-gray-900 rounded-xl border border-slate-200 dark:border-gray-800 p-4">
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
                                            <span className="text-sm font-medium truncate">
                                                {lesson.title}
                                            </span>
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>
                    </aside>

                    {/* Main */}
                    <main>
                        <div className="bg-white dark:bg-gray-900 rounded-xl border border-slate-200 dark:border-gray-800 p-6 sm:p-8">
                            <span className="inline-block mb-3 px-3 py-1 text-xs font-medium bg-[var(--brand-blue)] text-white rounded-md">
                                Lesson {currentLesson.number} of {totalLessons}
                            </span>

                            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                                {currentLesson.title}
                            </h2>

                            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                                {currentLesson.content.heading}
                            </h3>
                            <p className="mb-4 text-slate-700 dark:text-gray-300">
                                {currentLesson.content.description}
                            </p>

                            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 p-5 rounded-lg">
                                <h4 className="font-semibold mb-3 text-[var(--brand-blue)] dark:text-blue-300">
                                    {currentLesson.content.listTitle}
                                </h4>
                                <ul className="space-y-2 text-[var(--brand-blue)] dark:text-blue-200">
                                    {currentLesson.content.listItems.map((item, i) => (
                                        <li key={i}>• {item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex justify-between mt-8 pt-6 border-t border-slate-200 dark:border-gray-800">
                                <button
                                    onClick={goToPrevious}
                                    disabled={currentLessonIndex === 0}
                                    className={`inline-flex items-center gap-2 h-10 px-4 rounded-md border text-sm transition-colors
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
                                    className="inline-flex items-center gap-2 h-10 px-4 rounded-md text-sm bg-[var(--brand-blue)] text-white hover:bg-blue-700 transition-colors"
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
        </div>
    );
};

export default Lesson4;