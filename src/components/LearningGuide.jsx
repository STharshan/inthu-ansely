"use client";
import React from "react";

export default function LearningGuide() {
  // Array of cards
  const processCards = [
    {
      title: "Define Your Vision",
      description:
        "Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly.",
      cta: "Book a Free Call",
    },
    {
      title: "Define Your Vision",
      description:
        "Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly.",
      cta: "Book a Free Call",
    },
    // You can add more cards here
  ];

  return (
    <section className="bg-black text-white py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        
        {/* Left Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="/mnt/data/eb9d2f9b-569a-4738-831b-6de83fb88214.png"
            alt="Design process"
            className="w-full h-auto rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full flex flex-col gap-6">
          {/* Tag */}
          <span className="text-sm uppercase text-gray-400 tracking-wide mb-2">
            Design process
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold">Process</h2>
          <p className="text-gray-400 mb-6">
            Crafting bold visuals that inspire and elevate brands with thought process.
          </p>

          {/* Cards rendered using map */}
          <div className="flex flex-col gap-4">
            {processCards.map((card, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-400 mb-3">{card.description}</p>
                <button className="text-[#C5A265] font-medium hover:underline">
                  {card.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}