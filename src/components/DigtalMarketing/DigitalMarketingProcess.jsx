import React, { useState } from "react";
import { ChevronDown, ChevronUp, Subtitles } from "lucide-react";

const processData = [
    {
        id: "consultation",
        title: "Consultation",
        Subtitle: "Strategy Development & Creative Concepting",
        description:
            "We begin with deep discovery—understanding your business goals, target audience, competitive landscape, brand history, and market opportunities. Through stakeholder interviews, customer research, and competitive audits, we develop comprehensive insights that inform strategy. We analyze your current digital presence, assess what's working (and what isn't), and identify gaps between where you are and where you want to be. This foundation ensures our recommendations are grounded in your unique reality, not generic best practices.",
        image: "/w1.jpg",
    },
    {
        id: "design",
        title: "DESIGN",
        Subtitle: "Strategy Development & Creative Concepting",
        description:
            "Our strategists and creatives collaborate to develop integrated marketing plans that align brand positioning with tactical execution. We create detailed buyer personas, map customer journeys, develop messaging frameworks, and design content strategies across all relevant channels. You receive a comprehensive marketing playbook including visual identity guidelines, content themes, campaign concepts, channel strategies, budget allocation recommendations, and success metrics. Every element is designed to work together—creating consistent brand experiences that build recognition and trust over time.",
        image: "/w1.jpg",
    },
    {
        id: "execution",
        title: "EXECUTION",
        Subtitle: "Campaign Launch & Content Production",
        description:
            "We bring strategies to life through high-quality content creation, campaign setup, and multi-channel deployment. Our team produces engaging social media content, compelling ad creative, persuasive email campaigns, SEO-optimized blog posts, video content, and landing pages—all aligned with your brand voice and strategic objectives. We manage campaign launches across platforms, monitor initial performance, make rapid adjustments based on early data, and ensure flawless execution during critical launch windows. Quality and speed go hand-in-hand as we deliver professional marketing that meets deadlines without compromising excellence.",
        image: "/w2.jpg",
    },
    {
        id: "communication",
        title: "COMMUNICATION",
        Subtitle: "Optimization, Reporting & Continuous Improvement",
        description:
            "Marketing success requires ongoing monitoring, analysis, and refinement. We provide regular performance reports with clear insights—not just data dumps—explaining what's working, why it matters, and what we're doing about it. Through A/B testing, audience feedback, analytics review, and competitive monitoring, we continuously optimize campaigns for better results. We maintain transparent communication about budget pacing, creative performance, and strategic adjustments. Our commitment extends beyond launch—we stay engaged, proactive, and focused on improving your marketing ROI month after month.",
        image: "/w3.jpg",
    }
];

export default function DigitalMarketingProcess() {
    const [activeId, setActiveId] = useState(processData[0].id);

    const activeItem = processData.find((item) => item.id === activeId);

    return (
        <section className="bg-white dark:bg-black text-black dark:text-white py-16 sm:py-20 lg:py-28 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* LEFT IMAGE */}
                    {/* LEFT IMAGE */}
                    <div className="relative overflow-hidden rounded-2xl">
                        <img
                            key={activeId}
                            src={activeItem.image}
                            alt={activeItem.title}
                            className="
      w-full 
      h-[320px] sm:h-[420px] lg:h-[520px] 
      object-cover
      transition-all
      duration-700
      ease-out
    "
                            style={{
                                animation: "slideFromTop 0.7s ease-out",
                            }}
                        />

                        <style>
                            {`
      @keyframes slideFromTop {
        0% {
          opacity: 0;
          transform: translateY(-40px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
                        </style>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-white/5 mb-6 transition-colors duration-300">
                            <span className="w-2 h-2 rounded-full bg-lime-400"></span>
                            <span className="text-xs uppercase tracking-widest text-gray-700 dark:text-gray-300 transition-colors duration-300">
                                Our Proven Process
                            </span>
                        </div>

                        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl leading-relaxed mb-3 text-black dark:text-white transition-colors duration-300">Get market-ready in four strategic phases</h1>

                        {/* Heading */}
                        <h2 className="font-bold text-xl sm:text-2xl  leading-relaxed mb-10 text-black dark:text-white transition-colors duration-300">
                            We start by understanding your brand essence and market position, then craft distinctive campaigns tailored to your audience and business goals.
                        </h2>

                        {/* Accordion */}
                        <div className="space-y-4">
                            {processData.map((item) => {
                                const isActive = activeId === item.id;

                                return (
                                    <div
                                        key={item.id}
                                        className="border-b border-gray-200 dark:border-white/10 pb-4 transition-colors duration-300"
                                    >
                                        <button
                                            onClick={() => setActiveId(item.id)}
                                            className="w-full flex items-center justify-between text-left"
                                        >
                                            <span className="text-3xl font-semibold text-black dark:text-white transition-colors duration-300">
                                                {item.title}
                                            </span>
                                            {isActive ? (
                                                <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400 transition-colors duration-300" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400 transition-colors duration-300" />
                                            )}
                                        </button>

                                        {isActive && (
                                            <div>
                                                <h3 className="mt-4 text-xl font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">
                                                    {item.Subtitle}
                                                </h3>
                                                <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed transition-colors duration-300">
                                                    {item.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
