import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";

export default function TeamCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const teamMembers = [
        {
            name: "G. Selva",
            title: "Everything Guy (Founder)",
            description:
                "Founder on paper. Team support in practice. With 16 years of experience building businesses online, driving SaaS companies to billion-dollar annual sales milestones and working at the forefront of technology in surgical robotics. I combine visionary leadership, cutting-edge innovation, and unmatched expertise to create extraordinary results.",
            image:
                "https://framerusercontent.com/images/ld1Isq9iOdLryzyA7HZCe7cNgA.jpg",
        },
        {
            name: "D. Copp",
            title: "Everything Sales",
            description:
                "I’m a digital strategist with over a decade of experience helping businesses transition into the digital age. I’ve worked at one of Europe’s largest software companies, where I was rapidly promoted multiple times for performance and impact. My approach blends deep technical expertise with creative, solution-driven thinking to drive growth. I lead a high-performing sales team of five—and when volume ramps up, even the founder gets pulled into sales duty under my direction.",
            image:
                "https://framerusercontent.com/images/m1PGVBKWCMad7sb62mX2oeTx8S8.png",
        },
        {
            name: "C. Wooldrige",
            title: "Everything Marketing ",
            description:
                "Outside of running marathons most weekends, I’m driven by creativity and a passion for optimising SEO to help hidden gems get discovered. I’ve worked in the corporate world helping large companies increase their online visibility and digital performance. That experience allows me to understand what search engines truly reward and how users actually find businesses. I now bring this expertise into everything we build at Ansely. My focus is on turning strong businesses into brands that can’t be ignored online.",
            image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
        },
        {
            name: "S. Bandarai",
            title: "Everything Tech ",
            description:
                "I’m driven by technology and obsessed with turning vision into working, scalable code. Having worked with some of the world’s leading AI businesses, I bring clarity, speed, and execution to ambitious ideas. Currently lead a high-performance team of six leaders delivering real-world impact.",
            image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
        },
    ];

    const prev = () =>
        setCurrentIndex((p) => (p === 0 ? teamMembers.length - 1 : p - 1));
    const next = () =>
        setCurrentIndex((p) => (p === teamMembers.length - 1 ? 0 : p + 1));

    const current = teamMembers[currentIndex];

    return (
        <div className=" bg-[#2b2d31] text-white font-sans">
            <div className="flex items-center max-w-6xl mx-auto justify-center p-4 sm:p-6 lg:p-8">
                <div className="rounded-lg w-full">

                    {/* Desktop Layout (lg and above) */}
                    <div className="hidden lg:grid lg:grid-cols-[7fr_5fr_2fr] gap-2">
                        {/* Left Section */}
                        <div className="flex flex-col justify-between">
                            <div>
                                <div className="flex items-center bg-[#36383c] rounded-xl p-10 justify-between mb-1">
                                    <span className="text-[#8b8d91] text-lg font-semibold">Team Platform</span>
                                    <div className="flex gap-1.5">
                                        {teamMembers.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setCurrentIndex(i)}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex
                                                    ? "bg-[#ff6b47] scale-125"
                                                    : "bg-[#4a4c51]"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-[#36383c] rounded-xl p-10 h-120">
                                    <h2 className="text-5xl font-light text-[#e4e5e7] mb-3">
                                        {current.name}
                                    </h2>
                                    <p className="text-[#8b8d91] text-xl font-semibold mb-5">{current.title}</p>
                                    <p className="text-[#a5a7ab] mt-2 text-lg leading-relaxed">
                                        {current.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Center Image Section */}
                        <div className="bg-[#1a1b1e] rounded-lg flex items-center justify-center p-8">
                            <div className="w-full h-[500px] rounded-lg overflow-hidden">
                                <img
                                    src={current.image}
                                    alt={current.name}
                                    className="w-full h-[550px] object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="flex flex-col">
                            <div className="flex justify-center">
                                <div className="flex gap-6 bg-[#36383c] p-10 rounded-xl">
                                    <button
                                        onClick={prev}
                                        className="w-12 h-12 rounded-lg border border-[#4a4c51] flex items-center justify-center hover:bg-[#404247] transition-colors"
                                    >
                                        <ChevronLeft className="w-6 h-6 text-[#ff6b47]" />
                                    </button>
                                    <button
                                        onClick={next}
                                        className="w-12 h-12 rounded-lg border border-[#4a4c51] flex items-center justify-center hover:bg-[#404247] transition-colors"
                                    >
                                        <ChevronRight className="w-6 h-6 text-[#ff6b47]" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex-1 flex items-center justify-center bg-[#36383c] mt-1 rounded-xl p-10">
                                <div className="flex flex-col gap-6">
                                    <button className="w-12 h-12 rounded-lg border border-[#4a4c51] flex items-center justify-center hover:bg-[#404247] transition-colors">
                                        <Linkedin className="w-5 h-5 text-[#b4b6ba]" />
                                    </button>
                                    <button className="w-12 h-12 rounded-lg border border-[#4a4c51] flex items-center justify-center hover:bg-[#404247] transition-colors">
                                        <svg className="w-5 h-5 text-[#b4b6ba]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </button>
                                    <button className="w-12 h-12 rounded-lg border border-[#4a4c51] flex items-center justify-center hover:bg-[#404247] transition-colors">
                                        <svg className="w-5 h-5 text-[#b4b6ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile & Tablet Layout (below lg) */}
                    <div className="lg:hidden flex flex-col gap-3">
                        {/* Header with Title and Dots */}
                        <div className="flex items-center bg-[#36383c] rounded-xl p-4 sm:p-6 justify-between">
                            <span className="text-[#8b8d91] text-sm sm:text-base font-semibold">Team Platform</span>
                            <div className="flex gap-1.5">
                                {teamMembers.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-2 h-2 rounded-full ${i === currentIndex ? "bg-[#ff6b47]" : "bg-[#4a4c51]"}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center bg-[#36383c] rounded-xl p-4">
                            <div className="flex gap-4">
                                <button
                                    onClick={prev}
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-[#4a4c51] flex items-center justify-center hover:bg-[#404247] transition-colors"
                                >
                                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff6b47]" />
                                </button>
                                <button
                                    onClick={next}
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-[#4a4c51] flex items-center justify-center hover:bg-[#404247] transition-colors"
                                >
                                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff6b47]" />
                                </button>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="bg-[#1a1b1e] rounded-xl p-4 sm:p-6">
                            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                                <img
                                    src={current.image}
                                    alt={current.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Info Section */}
                        <div className="bg-[#36383c] rounded-xl p-4 sm:p-6 md:p-8">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#e4e5e7] mb-2">
                                {current.name}
                            </h2>
                            <p className="text-[#8b8d91] text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6">
                                {current.title}
                            </p>
                            <p className="text-[#a5a7ab] text-sm sm:text-base md:text-lg leading-relaxed">
                                {current.description}
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="bg-[#36383c] rounded-xl p-4 sm:p-6">
                            <div className="flex justify-center gap-4 sm:gap-6">
                                <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-[#4a4c51] flex items-center justify-center hover:bg-[#404247] transition-colors">
                                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-[#b4b6ba]" />
                                </button>
                                <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-[#4a4c51] flex items-center justify-center hover:bg-[#404247] transition-colors">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#b4b6ba]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </button>
                                <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-[#4a4c51] flex items-center justify-center hover:bg-[#404247] transition-colors">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#b4b6ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}