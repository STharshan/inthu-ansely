import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export default function PlatformProcess() {
    const [currentStep, setCurrentStep] = useState(1);
    const isDarkMode = useTheme();

    const steps = [
        {
            id: 1,
            title: "Customers Search Online First",
            description: "93% of buying decisions begin with an online search — if you're not visible, you're missing demand.",
            stat: "93",
            statUnit: "%",
            statLabel: "Buying decisions start online",
            image: "logo.png",
        },
        {
            id: 2,
            title: "Builds Trust & Credibility",
            description: "75% of users judge a business's credibility based on its website and online presence.",
            stat: "75",
            statUnit: "%",
            statLabel: "Judged on credibility",
            image: "logo.png",
        },
        {
            id: 3,
            title: "Works for You 24/7",
            description: "60%+ of enquiries happen outside standard business hours through websites and online forms.",
            stat: "60",
            statUnit: "%",
            statLabel: "Outside business hours enquiries",
            image: "logo.png",
        },
        {
            id: 4,
            title: "Competes With Bigger Brands",
            description: "Small businesses with strong digital presence see up to 3× higher engagement than those relying on offline marketing alone.",
            stat: "3",
            statUnit: "×",
            statLabel: "Higher engagement",
            image: "logo.png",
        },
        {
            id: 5,
            title: "Drives More Qualified Leads",
            description: "SEO-driven leads convert 8× better than outbound or cold marketing methods.",
            stat: "8",
            statUnit: "×",
            statLabel: "Better lead conversion",
            image: "logo.png",
        },
        {
            id: 6,
            title: "Improves Customer Experience",
            description: "88% of users are less likely to return after a poor digital experience — speed and usability matter.",
            stat: "88",
            statUnit: "%",
            statLabel: "Users less likely to return",
            image: "logo.png",
        },
        {
            id: 7,
            title: "Strengthens Brand Identity",
            description: "Consistent branding increases revenue by up to 23% across digital touchpoints.",
            stat: "23",
            statUnit: "%",
            statLabel: "Revenue increase",
            image: "logo.png",
        },
        {
            id: 8,
            title: "Provides Measurable Growth",
            description: "Data-led businesses are 5× more likely to make faster, better growth decisions.",
            stat: "5",
            statUnit: "×",
            statLabel: "Faster growth decisions",
            image: "logo.png",
        },
        {
            id: 9,
            title: "Future-Proofs the Business",
            description: "70%+ of consumers prefer to engage with businesses that have a strong, modern digital presence.",
            stat: "70",
            statUnit: "%",
            statLabel: "Consumers prefer modern presence",
            image: "logo.png",
        },
    ];

    const currentStepData = steps[currentStep];

    const nextStep = () => {
        setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    };

    const prevStep = () => {
        setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
    };

    return (
        <div className={`py-5 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
            <div className="max-w-6xl mx-auto flex items-center justify-center p-4">
                <div className="w-full grid grid-cols-1 gap-1 md:grid-cols-[380px_1fr_210px]">

                    {/* LEFT - Image */}
                    <div
                        className={`relative rounded-l-lg overflow-hidden h-[600px] ${isDarkMode ? "bg-gray-900" : "bg-gray-200"
                            }`}
                    >
                        <img
                            src={currentStepData.image}
                            alt={currentStepData.title}
                            className="absolute inset-0 mt-70 w-400 h-20 rotate-270 object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>


                    {/* MIDDLE - Content */}
                    <div className="flex flex-col gap-1">
                        <div className={`flex justify-between items-center p-10 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                            }`}>
                            <span className={`text-[18px] font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                Importance of Digital Presence
                            </span>
                            <div className="flex items-center gap-2">
                                {steps.map((_, i) => (
                                    <span
                                        key={i}
                                        className={`h-[6px] rounded-full transition-all ${i === currentStep
                                            ? "w-7 bg-[var(--brand-blue)]"
                                            : isDarkMode ? "w-2 bg-gray-600" : "w-2 bg-gray-400"
                                            }`}
                                    ></span>
                                ))}
                            </div>
                        </div>

                        <div className={`h-122.5 p-10 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                            }`}>
                            <div>
                                <h2 className={`text-4xl font-semibold mb-6 leading-tight ${isDarkMode ? 'text-gray-200' : 'text-gray-800'
                                    }`}>
                                    {currentStepData.title}
                                </h2>
                                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                    {currentStepData.description}
                                </p>
                            </div>

                            <div className="mt-39.5">
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className={`text-3xl font-bold leading-none ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                        {currentStepData.stat}
                                    </span>
                                    {currentStepData.statUnit && (
                                        <span className={`text-xl ${isDarkMode ? 'text-gray-500' : 'text-gray-500'
                                            }`}>{currentStepData.statUnit}</span>
                                    )}
                                </div>
                                <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'
                                    }`}>{currentStepData.statLabel}</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT - Controls Column */}
                    <div className="flex flex-col">

                        {/* Top Section - Platform Process */}
                        <div className={`h-26.5 p-10 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                            }`}>

                            {/* Navigation Arrows */}
                            <div className="flex justify-center gap-8">
                                <button
                                    onClick={prevStep}
                                    className="text-[var(--brand-blue)] hover:text-[#0039CC] transition-colors"
                                    aria-label="Previous"
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </button>
                                <button
                                    onClick={nextStep}
                                    className="text-[var(--brand-blue)] hover:text-[#0039CC] transition-colors"
                                    aria-label="Next"
                                >
                                    <ChevronRight className="w-8 h-8" />
                                </button>
                            </div>
                        </div>

                        {/* Bottom - CTA */}
                        <div className={`h-122 p-5 mt-1.5 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                            }`}>
                            <button className="w-full bg-[var(--brand-blue)] text-white mt-40 rounded-xl px-6 py-3.5 flex items-center justify-center gap-2 hover:bg-[#0039CC] transition-colors mb-3">
                                <Calendar className="w-5 h-5" />
                                <span className="text-sm">Book a Demo</span>
                            </button>
                            <p className={`text-sm text-center leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                Book a demo to see<br />this process in action.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}