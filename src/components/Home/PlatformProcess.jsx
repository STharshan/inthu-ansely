import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

export default function PlatformProcess() {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        {
            id: 1,
            title: "Step 1 — Smart Connect",
            description:
                "Platform's AI analyzes your tech stack and swiftly configures your ideal environment. One connection is all it takes to set everything up following industry best practices",
            stat: "30",
            statUnit: "sec",
            statLabel: "Average connection time",
            image: "https://framerusercontent.com/images/doOWlMqhqwP4x0xbsvKC46CBCo.png",
        },
        {
            id: 2,
            title: "Step 2 — Auto Optimize",
            description:
                "Once connected, our system continuously fine-tunes configurations and resource allocation in real time. The platform adapts to your usage patterns, ensuring peak performance and efficiency without manual tweaking.",
            stat: "55",
            statUnit: "sec",
            statLabel: "Average optimization time",
            image: "https://framerusercontent.com/images/S5XIptHBdqOEMUjcY1ACj1Qig.png",
        },
        {
            id: 3,
            title: "Step 3 — Monitor & Scale",
            description:
                "Our intelligent monitoring system tracks performance metrics and automatically scales resources based on demand.",
            stat: "24/7",
            statUnit: "",
            statLabel: "Continuous monitoring",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=800&fit=crop",
        },
        {
            id: 4,
            title: "Step 4 — Deploy",
            description:
                "Machine learning algorithms analyze historical data to predict future needs and suggest optimizations.",
            stat: "99%",
            statUnit: "",
            statLabel: "Success rate",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop",
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
        <div className="min-h-screen bg-[#1a1b1e] py-5 text-white">
            <div className="h-screen  max-w-6xl mx-auto  flex items-center justify-center p-4">
                <div className="w-full  max-w-[1400px] grid grid-cols-1 gap-1 md:grid-cols-[380px_1fr_210px]">

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
                                Platform Process
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
                        <div className="h-119.5 p-5 mt-1.5 bg-[#35363a] rounded-lg">
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