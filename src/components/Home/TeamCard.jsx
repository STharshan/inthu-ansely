import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";

export default function TeamCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const teamMembers = [
        {
            name: "Lisa Weber",
            title: "VP Technology",
            description:
                "In my role as VP of Technology, I oversee the architecture and implementation of our cutting-edge infrastructure platforms. Our team is committed to leveraging AI to deliver powerful and efficient technological solutions. We prioritise adaptability and performance to meet evolving business demands.",
            image:
                "https://framerusercontent.com/images/ld1Isq9iOdLryzyA7HZCe7cNgA.jpg",
        },
        {
            name: "Chloe Yoon",
            title: "Head of Engineering",
            description:
                "I oversee the engineering division, driving the technical vision for our AI-powered infrastructure products. Our focus is on innovation and delivering high-performance systems that empower businesses.",
            image:
                "https://framerusercontent.com/images/m1PGVBKWCMad7sb62mX2oeTx8S8.png",
        },
        {
            name: "Alex Martinez",
            title: "Senior Developer",
            description:
                "As a Senior Developer, I focus on building scalable solutions and mentoring our development team. My passion lies in creating efficient, maintainable code that drives business value.",
            image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
        },
        {
            name: "Sarah Chen",
            title: "Product Manager",
            description:
                "I drive product strategy and roadmap, ensuring we deliver solutions that truly meet customer needs. My approach combines data-driven insights with user empathy.",
            image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop",
        },
        {
            name: "James Wilson",
            title: "UX Designer",
            description:
                "I craft intuitive user experiences that bridge the gap between complex technology and user needs. My design philosophy centers on simplicity and accessibility.",
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop",
        },
        {
            name: "Emma Thompson",
            title: "Data Scientist",
            description:
                "I transform data into actionable insights that drive strategic decisions. My work involves developing machine learning models and analytics frameworks.",
            image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1000&fit=crop",
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
                                        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                                            <div
                                                key={i}
                                                className={`w-2 h-2 rounded-full ${i === 2 ? "bg-[#ff6b47]" : "bg-[#4a4c51]"}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-[#36383c] rounded-xl p-10 h-120">
                                    <h2 className="text-5xl font-light text-[#e4e5e7] mb-3">
                                        {current.name}
                                    </h2>
                                    <p className="text-[#8b8d91] text-xl font-semibold mb-8">{current.title}</p>
                                    <p className="text-[#a5a7ab] mt-40 text-lg leading-relaxed">
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