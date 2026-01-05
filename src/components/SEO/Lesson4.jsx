import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Circle, CheckCircle2, Home } from 'lucide-react';

const Lesson4 = ({ onBackToModules }) => {
    const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
    const [completedLessons, setCompletedLessons] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);

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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/20 to-slate-50">
            {/* Header */}
            <section className="border-b bg-white/80 backdrop-blur-sm mt-30 z-20 shadow-sm">
                <div className="container mx-auto px-4 py-3 sm:py-4">
                    <div className="flex items-center justify-between mb-3 gap-4">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                            <button
                                onClick={onBackToModules}
                                className="inline-flex items-center gap-2 hover:bg-slate-100 h-9 rounded-md px-3 text-sm font-medium text-slate-700"
                            >
                                <Home className="h-4 w-4" />
                                <span className="hidden sm:inline">All Modules</span>
                            </button>

                            <div className="h-4 w-px bg-slate-300"></div>

                            <div className="min-w-0">
                                <div className="text-xs text-slate-500">Module 4</div>
                                <h1 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                                    {module.title}
                                </h1>
                            </div>
                        </div>

                        <span className="rounded-md border bg-slate-100 px-3 py-1 text-xs sm:text-sm font-medium text-slate-700">
                            {completedCount} / {totalLessons} Complete
                        </span>
                    </div>

                    <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                        <div
                            className="bg-amber-500 h-full transition-all duration-500"
                            style={{ width: `${progressPercentage}%` }}
                        />
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-6 sm:py-8">
                <div className="grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
                    {/* Sidebar */}
                    <aside className="hidden lg:block sticky top-24">
                        <div className="bg-white rounded-xl border p-4">
                            <h2 className="font-semibold mb-4">Lessons</h2>
                            <nav className="space-y-1.5">
                                {module.lessons.map((lesson, index) => {
                                    const isActive = index === currentLessonIndex;
                                    const isCompleted = isLessonCompleted(lesson.id);

                                    return (
                                        <button
                                            key={lesson.id}
                                            onClick={() => goToLesson(index)}
                                            className={`w-full flex items-center gap-3 p-2.5 rounded-lg text-left
                                            ${isActive ? 'bg-amber-500 text-white' : 'hover:bg-slate-100 text-slate-700'}`}
                                        >
                                            {isCompleted ? (
                                                <CheckCircle2 className="h-4 w-4" />
                                            ) : (
                                                <Circle className="h-4 w-4" />
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
                        <div className="bg-white rounded-xl border p-6 sm:p-8">
                            <span className="inline-block mb-3 px-3 py-1 text-xs font-medium bg-amber-500 text-white rounded-md">
                                Lesson {currentLesson.number} of {totalLessons}
                            </span>

                            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                                {currentLesson.title}
                            </h2>

                            <h3 className="text-xl font-semibold mb-2">
                                {currentLesson.content.heading}
                            </h3>
                            <p className="mb-4 text-slate-700">
                                {currentLesson.content.description}
                            </p>

                            <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg">
                                <h4 className="font-semibold mb-3 text-amber-900">
                                    {currentLesson.content.listTitle}
                                </h4>
                                <ul className="space-y-2">
                                    {currentLesson.content.listItems.map((item, i) => (
                                        <li key={i} className="text-amber-900">• {item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Navigation Buttons (FIXED LIKE PREVIOUS SECTION) */}
                            <div className="flex justify-between mt-8 pt-6 border-t">
                                <button
                                    onClick={goToPrevious}
                                    disabled={currentLessonIndex === 0}
                                    className="inline-flex items-center gap-2 h-10 px-4 rounded-md border text-sm
                                    disabled:opacity-50 disabled:cursor-not-allowed"
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
                                    className="inline-flex items-center gap-2 h-10 px-4 rounded-md text-sm bg-amber-500 text-white hover:bg-amber-600"
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
