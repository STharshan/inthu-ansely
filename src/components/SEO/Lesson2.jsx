import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Circle, CheckCircle2, Home } from 'lucide-react';

const SEOLesson2 = ({ onBackToModules, onLessonComplete }) => {
    const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
    const [completedLessons, setCompletedLessons] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const module = {
        id: 2,
        title: "SEO vs Social Media",
        lessons: [
            {
                id: 1,
                number: 1,
                title: "Intent vs Attention",
                content: {
                    heading: "Intent vs Attention",
                    comparison: [
                        {
                            title: "SEO = Intent",
                            description: "People are searching because they need something",
                            bgClass: "bg-purple-50",
                            borderClass: "border-purple-200",
                            textClass: "text-purple-900",
                            descClass: "text-purple-800"
                        },
                        {
                            title: "Social = Attention",
                            description: "People are scrolling for entertainment",
                            bgClass: "bg-pink-50",
                            borderClass: "border-pink-200",
                            textClass: "text-pink-900",
                            descClass: "text-pink-800"
                        }
                    ],
                    keyTakeaways: ["SEO captures demand", "Social creates awareness"]
                }
            },
            {
                id: 2,
                number: 2,
                title: "Traffic Quality Comparison",
                content: {
                    heading: "Traffic Quality Comparison",
                    comparison: [
                        {
                            title: "SEO Traffic",
                            description: "High intent, ready to buy or take action",
                            bgClass: "bg-purple-50",
                            borderClass: "border-purple-200",
                            textClass: "text-purple-900",
                            descClass: "text-purple-800"
                        },
                        {
                            title: "Social Traffic",
                            description: "Discovery mode, needs more nurturing",
                            bgClass: "bg-pink-50",
                            borderClass: "border-pink-200",
                            textClass: "text-pink-900",
                            descClass: "text-pink-800"
                        }
                    ],
                    keyTakeaways: ["SEO visitors convert faster", "Social builds brand awareness"]
                }
            },
            {
                id: 3,
                number: 3,
                title: "Why Businesses Burn Money",
                content: {
                    heading: "Why Businesses Burn Money",
                    comparison: [
                        {
                            title: "Wrong Channel",
                            description: "Spending on social when customers search on Google",
                            bgClass: "bg-purple-50",
                            borderClass: "border-purple-200",
                            textClass: "text-purple-900",
                            descClass: "text-purple-800"
                        },
                        {
                            title: "Ignoring Intent",
                            description: "Not matching marketing to customer behavior",
                            bgClass: "bg-pink-50",
                            borderClass: "border-pink-200",
                            textClass: "text-pink-900",
                            descClass: "text-pink-800"
                        }
                    ],
                    keyTakeaways: ["Match your marketing to how customers buy", "Local services need SEO, not just social"]
                }
            },
            {
                id: 4,
                number: 4,
                title: "How They Work Together",
                content: {
                    heading: "How They Work Together",
                    comparison: [
                        {
                            title: "SEO's Role",
                            description: "Capture people actively looking for your service",
                            bgClass: "bg-purple-50",
                            borderClass: "border-purple-200",
                            textClass: "text-purple-900",
                            descClass: "text-purple-800"
                        },
                        {
                            title: "Social's Role",
                            description: "Build awareness and trust over time",
                            bgClass: "bg-pink-50",
                            borderClass: "border-pink-200",
                            textClass: "text-pink-900",
                            descClass: "text-pink-800"
                        }
                    ],
                    keyTakeaways: ["Use SEO for conversion", "Use social for brand building"]
                }
            },
            {
                id: 5,
                number: 5,
                title: "Exercise",
                content: {
                    heading: "Practice Exercise",
                    comparison: [
                        {
                            title: "Audit Your Strategy",
                            description: "Review where you're spending time and money",
                            bgClass: "bg-purple-50",
                            borderClass: "border-purple-200",
                            textClass: "text-purple-900",
                            descClass: "text-purple-800"
                        },
                        {
                            title: "Balance Your Mix",
                            description: "Align your efforts with customer intent",
                            bgClass: "bg-pink-50",
                            borderClass: "border-pink-200",
                            textClass: "text-pink-900",
                            descClass: "text-pink-800"
                        }
                    ],
                    keyTakeaways: ["Focus on SEO for local businesses", "Use social strategically, not exclusively"]
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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/20 to-slate-50">
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
                            className="bg-purple-600 h-full transition-all duration-500"
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
                                                ${isActive ? 'bg-purple-600 text-white' : 'hover:bg-slate-100 text-slate-700'}
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
                                <span className="inline-flex items-center rounded-md bg-purple-600 text-white px-3 py-1 text-xs font-medium mb-3">
                                    Lesson {currentLesson.number} of {totalLessons}
                                </span>
                                <h2 className="text-3xl font-bold text-slate-900">{currentLesson.title}</h2>
                            </div>

                            <div className="prose max-w-none space-y-6">
                                <h3 className="text-xl font-semibold">{currentLesson.content.heading}</h3>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {currentLesson.content.comparison.map((item, i) => (
                                        <div key={i} className={`${item.bgClass} ${item.borderClass} p-5 rounded-lg border`}>
                                            <h4 className={`font-semibold mb-2 ${item.textClass}`}>{item.title}</h4>
                                            <p className={item.descClass}>{item.description}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 p-5 rounded-lg text-center">
                                    {currentLesson.content.keyTakeaways.map((t, i) => (
                                        <p key={i} className="font-semibold text-slate-900">{t}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation Buttons */}
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
                                    className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium"
                                >
                                    {currentLessonIndex === totalLessons - 1 ? 'Back to All Modules' : 'Next Lesson'}
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

export default SEOLesson2;
