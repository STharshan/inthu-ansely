import React from "react";

const HowWeWorkSection = () => {
  const processes = [
    {
      title: "Discovery & Assessment",
      description:
        "We start by deeply understanding your business model, competitive landscape, organizational capabilities, and strategic aspirations. Through stakeholder interviews, operational audits, data analysis, and market research, we build a comprehensive picture of where you are today and where you want to go. This foundation ensures our recommendations are grounded in reality, not theory.",
    },
    {
      title: "Analysis & Strategy Design",
      description:
        "Our consultants synthesize discovery insights into strategic recommendations backed by data and industry expertise. We develop tailored frameworks, evaluate multiple scenarios, model potential outcomes, and design strategies that balance risk with opportunity. You receive a detailed roadmap with clear priorities, resource requirements, success metrics, and implementation timelines that make strategy tangible and executable.",
    },
    {
      title: "Implementation & Enablement",
      description:
        "We don't just hand over PowerPoint decks—we roll up our sleeves to support execution. Our team provides project management, coordinates cross-functional workstreams, facilitates decision-making, and ensures strategies translate into real organizational change. We work alongside your teams, transferring knowledge and building internal capabilities so improvements sustain long after our engagement ends.",
    },
    {
      title: "Review & Continuous Improvement",
      description:
        "Strategic success requires ongoing refinement. We establish performance tracking systems, conduct regular progress reviews, analyze what's working (and what isn't), and adjust strategies based on results and changing conditions. Our commitment extends beyond initial implementation—we ensure your strategy evolves with your business, maintaining relevance and driving continuous improvement over time.",
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-black py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-[#0045EF] rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="w-4 h-4"
                fill="white"
              >
                <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </div>
            <span className="text-sm font-medium text-[#0045EF]">How We Work</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl text-gray-900 dark:text-white leading-tight">
            Our process for achieving strategic clarity
          </h2>

          <p className="text-gray-700 dark:text-gray-300 max-w-3xl text-lg leading-relaxed">
            We follow a structured, collaborative approach that turns business challenges into strategic advantages and actionable results.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT IMAGE */}
          <div className="lg:col-span-3">
            <img
              src="https://framerusercontent.com/images/j4t0CKObqbFrv3v2bTMmTuQkSq4.jpg"
              alt="Workspace with financial documents"
              className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* PROCESS STEPS */}
          <div className="lg:col-span-5 flex flex-col justify-start space-y-6">
            {processes.map((process, index) => (
              <div
                key={index}
                className="flex gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg p-4 rounded-xl bg-gray-50 dark:bg-gray-900"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="bg-[#0045EF] rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      className="w-4 h-4"
                      fill="white"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-4">
            <img
              src="https://framerusercontent.com/images/0QDeMnvEf6G9exjBFc17js0jw40.jpg"
              alt="Tax documents with coffee on desk"
              className="w-full h-full min-h-80 lg:min-h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
