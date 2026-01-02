import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

export default function PlatformProcess() {
    const [currentStep, setCurrentStep] = useState(1);

   const steps = [
    {
        id: 1,
        title: "Customers Search Online First",
        description: "93% of buying decisions begin with an online search — if you’re not visible, you’re missing demand.",
        stat: "93",
        statUnit: "%",
        statLabel: "Buying decisions start online",
        image: "",
    },
    {
        id: 2,
        title: "Builds Trust & Credibility",
        description: "75% of users judge a business’s credibility based on its website and online presence.",
        stat: "75",
        statUnit: "%",
        statLabel: "Judged on credibility",
        image: "",
    },
    {
        id: 3,
        title: "Works for You 24/7",
        description: "60%+ of enquiries happen outside standard business hours through websites and online forms.",
        stat: "60",
        statUnit: "%",
        statLabel: "Outside business hours enquiries",
        image: "",
    },
    {
        id: 4,
        title: "Competes With Bigger Brands",
        description: "Small businesses with strong digital presence see up to 3× higher engagement than those relying on offline marketing alone.",
        stat: "3",
        statUnit: "×",
        statLabel: "Higher engagement",
        image: "",
    },
    {
        id: 5,
        title: "Drives More Qualified Leads",
        description: "SEO-driven leads convert 8× better than outbound or cold marketing methods.",
        stat: "8",
        statUnit: "×",
        statLabel: "Better lead conversion",
        image: "",
    },
    {
        id: 6,
        title: "Improves Customer Experience",
        description: "88% of users are less likely to return after a poor digital experience — speed and usability matter.",
        stat: "88",
        statUnit: "%",
        statLabel: "Users less likely to return",
        image: "",
    },
    {
        id: 7,
        title: "Strengthens Brand Identity",
        description: "Consistent branding increases revenue by up to 23% across digital touchpoints.",
        stat: "23",
        statUnit: "%",
        statLabel: "Revenue increase",
        image: "",
    },
    {
        id: 8,
        title: "Provides Measurable Growth",
        description: "Data-led businesses are 5× more likely to make faster, better growth decisions.",
        stat: "5",
        statUnit: "×",
        statLabel: "Faster growth decisions",
        image: "",
    },
    {
        id: 9,
        title: "Future-Proofs the Business",
        description: "70%+ of consumers prefer to engage with businesses that have a strong, modern digital presence.",
        stat: "70",
        statUnit: "%",
        statLabel: "Consumers prefer modern presence",
        image: "",
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
        <div className=" bg-[#1a1b1e] py-5 text-white">
            <div className=" max-w-6xl mx-auto  flex items-center justify-center p-4">
                <div className="w-full grid grid-cols-1 gap-1 md:grid-cols-[380px_1fr_210px]">

                    {/* LEFT - Image */}
                    <div className="bg-black rounded-l-lg overflow-hidden h-[600px]">
                        <img
                            src={currentStepData.image}
                            alt={currentStepData.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* MIDDLE - Content */}
                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between items-center bg-[#2d2e32] p-10 rounded-lg">
                            <span className="text-[18px] text-[#D0D0D0] font-semibold">
                                Importance of Digital Presence
                            </span>
                            <div className="flex items-center gap-2">
                                {steps.map((_, i) => (
                                    <span
                                        key={i}
                                        className={`h-[6px] rounded-full transition-all ${i === currentStep
                                            ? "w-7 bg-[#FF5C1D]"
                                            : "w-2 bg-[#444]"
                                            }`}
                                    ></span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#2d2e32] h-122.5 p-10 rounded-lg">
                            <div>
                                <h2 className="text-4xl font-semibold text-[#b8b9bc] mb-6 leading-tight">
                                    {currentStepData.title}
                                </h2>
                                <p className="text-[#7a7b7f] text-lg leading-relaxed">
                                    {currentStepData.description}
                                </p>
                            </div>

                            <div className="mt-39.5">
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-3xl font-bold text-[#6a6b6f] leading-none">
                                        {currentStepData.stat}
                                    </span>
                                    {currentStepData.statUnit && (
                                        <span className="text-xl text-[#5a5b5f]">{currentStepData.statUnit}</span>
                                    )}
                                </div>
                                <p className="text-[#5a5b5f] text-sm">{currentStepData.statLabel}</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT - Controls Column */}
                    <div className=" flex flex-col">

                        {/* Top Section - Platform Process */}
                        <div className="h-26.5 p-10 bg-[#35363a] rounded-lg">

                            {/* Navigation Arrows */}
                            <div className="flex justify-center gap-8">
                                <button
                                    onClick={prevStep}
                                    className="text-[#FA6F45] hover:text-[#ff7d56] transition-colors"
                                    aria-label="Previous"
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </button>
                                <button
                                    onClick={nextStep}
                                    className="text-[#FA6F45] hover:text-[#ff7d56] transition-colors"
                                    aria-label="Next"
                                >
                                    <ChevronRight className="w-8 h-8" />
                                </button>
                            </div>
                        </div>

                        {/* Bottom - CTA */}
                        <div className="h-122 p-5 mt-1.5 bg-[#35363a] rounded-lg">
                            <button className="w-full bg-[#FA6F45] text-black mt-40 rounded-xl px-6 py-3.5 flex items-center justify-center gap-2 hover:bg-[#ff7d56] transition-colors mb-3">
                                <Calendar className="w-5 h-5" />
                                <span className="text-sm">Book a Demo</span>
                            </button>
                            <p className="text-[#7a7b7f] text-sm text-center leading-relaxed">
                                Book a demo to see<br />this process in action.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}