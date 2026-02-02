import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import LazyImage from "../LazyImage";

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      name: "G. Selva",
      title: "Everything Guy",
      description:
        "Founder on paper. Team support in practice. With 16 years of experience building businesses online, driving SaaS companies to billion-dollar annual sales milestones and working at the forefront of technology in surgical robotics. I combine visionary leadership, cutting-edge innovation, and unmatched expertise to create extraordinary results.",
      image: "https://framerusercontent.com/images/ld1Isq9iOdLryzyA7HZCe7cNgA.jpg",
    },
    {
      name: "D. Copp",
      title: "Everything Customer",
      description:
        "I'm a digital strategist with over a decade of experience helping businesses transition into the digital age. I've worked at one of Europe's largest software companies, where I was rapidly promoted multiple times for performance and impact. My approach blends deep technical expertise with creative, solution-driven thinking to drive growth. I lead a high-performing sales team of five—and when volume ramps up, even the founder gets pulled into sales duty under my direction.",
      image: "https://framerusercontent.com/images/m1PGVBKWCMad7sb62mX2oeTx8S8.png",
    },
    {
      name: "C. Wooldrige",
      title: "Everything Marketing ",
      description:
        "Outside of running marathons most weekends, I'm driven by creativity and a passion for optimising SEO to help hidden gems get discovered. I've worked in the corporate world helping large companies increase their online visibility and digital performance. That experience allows me to understand what search engines truly reward and how users actually find businesses. I now bring this expertise into everything we build at Ansely. My focus is on turning strong businesses into brands that can't be ignored online.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
    },
    {
      name: "S. Bandarai",
      title: "Everything Tech ",
      description:
        "I'm driven by technology and obsessed with turning vision into working, scalable code. Having worked with some of the world's leading AI businesses, I bring clarity, speed, and execution to ambitious ideas. Currently lead a high-performance team of six leaders delivering real-world impact.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
    },
  ];

  const prev = () => setCurrentIndex((p) => (p === 0 ? teamMembers.length - 1 : p - 1));
  const next = () => setCurrentIndex((p) => (p === teamMembers.length - 1 ? 0 : p + 1));

  const current = teamMembers[currentIndex];

  return (
    <div className="font-sans bg-white text-gray-900 dark:bg-black dark:text-white min-h-screen relative">
      {/* Theme Toggle */}

      <div className="flex items-center max-w-6xl mx-auto justify-center p-4 sm:p-6 lg:p-8">
        <div className="rounded-lg w-full">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-[7fr_5fr_2fr] gap-2">
            {/* Left Section */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between p-10 mb-1 rounded-xl bg-gray-100 dark:bg-gray-800">
                  <span className="text-lg font-semibold text-gray-600 dark:text-gray-400">
                    Leadership Team
                  </span>
                  <div className="flex gap-1.5">
                    {teamMembers.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i === currentIndex
                            ? "bg-[#0045EF] scale-125"
                            : "bg-gray-400 dark:bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-10 rounded-xl h-120 bg-gray-100 dark:bg-gray-800">
                  <h2 className="text-5xl font-light mb-3 text-[#0045EF]">{current.name}</h2>
                  <p className="text-xl font-semibold mb-5 text-gray-600 dark:text-gray-400">
                    {current.title}
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    {current.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="flex items-center justify-center p-8 rounded-lg bg-gray-200 dark:bg-gray-900">
              <div className="w-full h-[500px] rounded-lg overflow-hidden">
                <LazyImage
                  src={current.image}
                  alt={current.name}
                  className="w-full h-[550px] rounded-lg"
                  width={400}
                  height={550}
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col">
              <div className="flex justify-center p-10 rounded-xl bg-gray-100 dark:bg-gray-800 gap-6">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-[#0045EF]" />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-[#0045EF]" />
                </button>
              </div>

              {/* Social Buttons */}
              <div className="flex-1 flex items-center justify-center mt-1 p-10 rounded-xl bg-gray-100 dark:bg-gray-800 gap-6 flex-col">
                <button className="w-12 h-12 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-[#0045EF] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
                {/* You can add more social icons here as needed */}
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Layout */}
          <div className="lg:hidden flex flex-col gap-3">
            <div className="flex items-center justify-between p-4 sm:p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
              <span className="text-sm sm:text-base font-semibold text-gray-600 dark:text-gray-400">
                Leadership Team
              </span>
              <div className="flex gap-1.5">
                {teamMembers.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === currentIndex ? "bg-[#0045EF]" : "bg-gray-400 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-center p-4 rounded-xl bg-gray-100 dark:bg-gray-800 gap-4">
              <button
                onClick={prev}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#0045EF]" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#0045EF]" />
              </button>
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-gray-200 dark:bg-gray-900">
              <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                <LazyImage
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full rounded-lg"
                  width={400}
                  height={500}
                />
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-gray-100 dark:bg-gray-800">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-2 text-[#0045EF]">
                {current.name}
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6 text-gray-600 dark:text-gray-400">
                {current.title}
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {current.description}
              </p>
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-gray-100 dark:bg-gray-800 flex justify-center gap-4 sm:gap-6">
              <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-[#0045EF] transition-colors">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
