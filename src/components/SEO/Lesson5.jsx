import React, { useState } from 'react';
import { Home, ChevronLeft, ChevronRight, Circle, CheckCircle2, X } from 'lucide-react';

const Lesson5 = ({ onBackToModules }) => {
    const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
    const [completedLessons, setCompletedLessons] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);

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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50/20 to-slate-50">
            {/* Header */}
            <section className="border-b bg-white/80 backdrop-blur-sm mt-30 shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={onBackToModules}
                                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-100 text-sm font-medium"
                            >
                                <Home className="h-4 w-4" />
                                <span className="hidden sm:inline">All Modules</span>
                            </button>

                            <div className="h-4 w-px bg-slate-300" />

                            <div>
                                <div className="text-xs text-slate-500">Module 5</div>
                                <h1 className="font-bold text-slate-900">{module.title}</h1>
                            </div>
                        </div>

                        <span className="text-sm font-medium bg-slate-100 border rounded-md px-3 py-1">
                            {completedCount} / {totalLessons} Complete
                        </span>
                    </div>

                    <div className="w-full bg-slate-200 rounded-full h-1.5">
                        <div
                            className="bg-rose-600 h-full rounded-full transition-all"
                            style={{ width: `${progressPercentage}%` }}
                        />
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-8 grid lg:grid-cols-[280px_1fr] gap-8">
                {/* Sidebar */}
                <aside className="hidden lg:block sticky top-24">
                    <div className="bg-white border rounded-xl p-4">
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
                                        ${isActive ? 'bg-rose-600 text-white' : 'hover:bg-slate-100 text-slate-700'}`}
                                    >
                                        {isCompleted ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
                                        <span className="text-sm font-medium truncate">{lesson.title}</span>
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                </aside>

                {/* Main */}
                <main>
                    <div className="bg-white border rounded-xl p-6 sm:p-8">
                        <span className="inline-block mb-3 px-3 py-1 text-xs font-medium bg-rose-600 text-white rounded-md">
                            Lesson {currentLesson.number} of {totalLessons}
                        </span>

                        <h2 className="text-3xl font-bold mb-6">{currentLesson.title}</h2>

                        <h3 className="text-xl font-semibold mb-4">{currentLesson.content.heading}</h3>

                        <div className="bg-rose-50 border border-rose-200 p-5 rounded-lg mb-6">
                            <h4 className="font-semibold mb-3 text-rose-900">
                                {currentLesson.content.listTitle}
                            </h4>
                            <ul className="space-y-2">
                                {currentLesson.content.listItems.map((item, i) => (
                                    <li key={i} className="flex gap-2 items-start">
                                        <X className="h-5 w-5 text-rose-500 mt-0.5" />
                                        <span className="text-rose-800">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gradient-to-r from-rose-50 to-pink-50 border p-5 rounded-lg text-center font-semibold">
                            {currentLesson.content.keyTakeaway}
                        </div>

                        {/* Navigation (FIXED) */}
                        <div className="flex justify-between mt-8 pt-6 border-t">
                            <button
                                onClick={goToPrevious}
                                disabled={currentLessonIndex === 0}
                                className="flex items-center gap-2 h-10 px-4 rounded-md border text-sm
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
                                className="flex items-center gap-2 h-10 px-4 rounded-md text-sm bg-rose-600 text-white hover:bg-rose-700"
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
