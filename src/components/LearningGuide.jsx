"use client";

import React from "react";
import { Link } from "react-router-dom";

export default function LearningGuide() {
  const processCards = [
    {
      title: "Think Like a Tech Founder",
      description:
        "Transform your business by understanding how custom software creates leverage, eliminates friction, and unlocks scale.",
      cta: "Learn More",
      href: "/insidecustomsoftwareservice",
    },
    {
      title: "AI for business growth",
      description:
        "Most businesses don't have a growth problem. They have a founder bottleneck.",
      cta: "Learn More",
      href: "/AILearningModule",
    },
    {
      title: "SEO Learning Platform",
      description: "Master SEO for your business success.",
      cta: "Learn More",
      href: "/SEOLearningPlatform",
    },
    {
      title: "Paid Ads (PPC)",
      description: "Instant Visibility That Scales",
      cta: "Learn More",
      href: "/PPCLearningModule",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-16 
      bg-white text-black 
      dark:bg-black dark:text-white
      transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">

        {/* Left Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="/learn.png"
            alt="Design process"
            className="w-full h-full rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full flex flex-col gap-6">

          <h2 className="text-4xl md:text-5xl font-bold">
            Learning Guides
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Simple, practical guides to help you understand key concepts,
            learn step by step, and apply your knowledge with confidence.
          </p>

          {/* Cards */}
          <div className="flex flex-col gap-4">
            {processCards.map((card, index) => (
              <Link key={index} to={card.href}>
                <div
                  className="group cursor-pointer p-6 rounded-lg shadow-md 
                  bg-gray-100 hover:bg-gray-200
                  dark:bg-gray-900 dark:hover:bg-gray-800
                  transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2 
                    group-hover:text-[#0045EF] transition-colors"
                  >
                    {card.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {card.description}
                  </p>

                  <span className="text-[#0045EF] font-medium group-hover:underline">
                    {card.cta}
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
