import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Circle, CheckCircle2, X, Check, Home } from 'lucide-react';

const Lesson3 = ({ onBackToModules, onLessonComplete }) => {
    const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
    const [completedLessons, setCompletedLessons] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const module = {
        id: 3,
        title: "Content That Ranks & Converts",
        lessons: [
            {
                id: 1,
                number: 1,
                title: "Why Most Content Fails",
                content: {
                    heading: "Why Most Content Fails",
                    listType: "negative",
                    listTitle: "Most content:",
                    listItems: [
                        "Talks about the business",
                        "Lacks intent",
                        "Has no structure",
                        "Has no CTA"
                    ],
                    keyTakeaway: "Google ranks helpful content, not long content."
                }
            },
            {
                id: 2,
                number: 2,
                title: "Search Intent Is Everything",
                content: {
                    heading: "Search Intent Is Everything",
                    listType: "positive",
                    listTitle: "Match your content to intent:",
                    listItems: [
                        "Informational: Answer questions clearly",
                        "Navigational: Make your brand easy to find",
                        "Commercial: Help them compare options",
                        "Transactional: Remove friction from buying"
                    ],
                    keyTakeaway: "The best content answers what people are actually searching for"
                }
            },
            {
                id: 3,
                number: 3,
                title: "High-Performing Page Structure",
                content: {
                    heading: "High-Performing Page Structure",
                    listType: "positive",
                    listTitle: "Every page needs:",
                    listItems: [
                        "Clear headline that matches the search",
                        "Quick answer in the first paragraph",
                        "Scannable subheadings",
                        "Strong call-to-action"
                    ],
                    keyTakeaway: "Structure helps both Google and readers understand your content"
                }
            },
            {
                id: 4,
                number: 4,
                title: "Content for Small Businesses",
                content: {
                    heading: "Content for Small Businesses",
                    listType: "positive",
                    listTitle: "Small businesses should focus on:",
                    listItems: [
                        "Service pages with local keywords",
                        "FAQ pages answering common questions",
                        "Case studies or testimonials",
                        "Local area guides"
                    ],
                    keyTakeaway: "Quality local content beats generic blog posts every time"
                }
            },
            {
                id: 5,
                number: 5,
                title: "Exercise",
                content: {
                    heading: "Practice Exercise",
                    listType: "positive",
                    listTitle: "Complete these tasks:",
                    listItems: [
                        "Pick one service you offer",
                        "Write a headline matching search intent",
                        "List 3 questions customers ask",
                        "Draft a clear call-to-action"
                    ],
                    keyTakeaway: "Practice makes perfect - start with one page and refine it"
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
            onLessonComplete?.(module.id, currentLessonIndex);
        }

        if (currentLessonIndex < totalLessons - 1) {
            setCurrentLessonIndex(currentLessonIndex + 1);
        } else {
            onBackToModules?.();
        }
    };

    const isLessonCompleted = (lessonId) => completedLessons.includes(lessonId);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/20 to-slate-50">
            {/* Header */}
            <section className="border-b bg-white/80 backdrop-blur-sm mt-30 z-20 shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between mb-3">
                        <button
                            onClick={onBackToModules}
                            className="inline-flex items-center gap-2 hover:bg-slate-100 h-9 rounded-md px-3 text-sm font-medium text-slate-700"
                        >
                            <Home className="h-4 w-4" />
                            All Modules
                        </button>

                        <span className="text-sm font-medium text-slate-700">
                            {completedCount} / {totalLessons} Complete
                        </span>
                    </div>

                    <div className="w-full bg-slate-200 rounded-full h-1.5">
                        <div
                            className="bg-emerald-600 h-full transition-all duration-500"
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
                        className="lg:hidden w-full flex items-center justify-between p-4 bg-white border border-slate-200 rounded-lg shadow-sm"
                    >
                        <span className="font-semibold text-slate-900">Lessons Menu</span>
                        <ChevronRight className={`h-5 w-5 transition-transform ${sidebarOpen ? 'rotate-90' : ''}`} />
                    </button>

                    {/* Sidebar */}
                    <aside className={`${sidebarOpen ? 'block' : 'hidden'} lg:block lg:sticky lg:top-24`}>
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
                            <h2 className="font-semibold mb-4 text-slate-900">Lessons</h2>
                            <nav className="space-y-1.5">
                                {module.lessons.map((lesson, index) => {
                                    const isActive = currentLessonIndex === index;
                                    const isCompleted = isLessonCompleted(lesson.id);

                                    return (
                                        <button
                                            key={lesson.id}
                                            onClick={() => goToLesson(index)}
                                            className={`w-full flex items-center gap-3 p-2.5 rounded-lg text-left transition-all
                                                ${isActive ? 'bg-emerald-600 text-white' : 'hover:bg-slate-100 text-slate-700'}
                                            `}
                                        >
                                            {isCompleted ? (
                                                <CheckCircle2 className={`h-4 w-4 ${isActive ? 'text-white' : 'text-green-600'}`} />
                                            ) : (
                                                <Circle className={`h-4 w-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                                            )}
                                            <div>
                                                <div className={`text-xs ${isActive ? 'opacity-90' : 'opacity-60'}`}>
                                                    Lesson {lesson.number}
                                                </div>
                                                <div className="text-sm font-medium truncate">{lesson.title}</div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main>
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8">
                            <div className="mb-6">
                                <span className="inline-flex items-center rounded-md bg-emerald-600 text-white px-3 py-1 text-xs font-medium mb-3">
                                    Lesson {currentLesson.number} of {totalLessons}
                                </span>
                                <h2 className="text-3xl font-bold text-slate-900">{currentLesson.title}</h2>
                            </div>

                            <div className="prose max-w-none space-y-6">
                                <h3 className="text-xl font-semibold">{currentLesson.content.heading}</h3>

                                <div
                                    className={`p-5 rounded-lg border ${
                                        currentLesson.content.listType === 'negative'
                                            ? 'bg-rose-50 border-rose-200'
                                            : 'bg-emerald-50 border-emerald-200'
                                    }`}
                                >
                                    <h4 className={`font-semibold mb-3 ${
                                        currentLesson.content.listType === 'negative'
                                            ? 'text-rose-900'
                                            : 'text-emerald-900'
                                    }`}>
                                        {currentLesson.content.listTitle}
                                    </h4>

                                    <ul className="space-y-2">
                                        {currentLesson.content.listItems.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                {currentLesson.content.listType === 'negative' ? (
                                                    <X className="h-5 w-5 text-rose-500 mt-0.5" />
                                                ) : (
                                                    <Check className="h-5 w-5 text-emerald-500 mt-0.5" />
                                                )}
                                                <span className={
                                                    currentLesson.content.listType === 'negative'
                                                        ? 'text-rose-800'
                                                        : 'text-emerald-800'
                                                }>
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-5 rounded-lg text-center">
                                    <p className="text-lg font-semibold text-slate-900">
                                        {currentLesson.content.keyTakeaway}
                                    </p>
                                </div>
                            </div>

                            {/* Navigation Buttons – SAME AS PREVIOUS MODULES */}
                            <div className="flex justify-between mt-8 pt-6 border-t">
                                <button
                                    onClick={goToPrevious}
                                    disabled={currentLessonIndex === 0}
                                    className="inline-flex items-center gap-2 h-10 px-4 border rounded-md text-sm font-medium"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                    Previous
                                </button>

                                <button
                                    onClick={currentLessonIndex === totalLessons - 1 ? onBackToModules : goToNext}
                                    className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium"
                                >
                                    {currentLessonIndex === totalLessons - 1 ? 'Back to All Modules' : 'Next Lesson'}
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        {completedCount === totalLessons && (
                            <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 text-center">
                                <CheckCircle2 className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                <h3 className="text-xl font-bold text-slate-900">Module Complete! 🎉</h3>
                                <p className="text-slate-600 text-sm">You've mastered content creation for SEO!</p>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Lesson3;
