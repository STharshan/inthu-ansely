import React from 'react';

const HowWeWorkSection = () => {
  const processes = [
    {
      title: "Discovery & assessment",
      description: "We start by understanding your current financial structure and defining key goals."
    },
    {
      title: "Analysis & strategy design",
      description: "Our team builds a tailored financial roadmap supported by data and insight."
    },
    {
      title: "Implementation & optimization",
      description: "We execute and align financial strategies to strengthen performance and control."
    },
    {
      title: "Review & continuous improvement",
      description: "Regular evaluations ensure your plan adapts to changes and maintains long-term value."
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center">
            <div className="relative w-4 h-4">
              <div className="absolute w-4 h-0.5 bg-white top-1/2 left-0 transform -translate-y-1/2"></div>
              <div className="absolute w-0.5 h-4 bg-white left-1/2 top-0 transform -translate-x-1/2"></div>
            </div>
          </div>
          <span className="text-sm font-medium">How we work</span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Image */}
          <div className="lg:col-span-3">
            <img 
              src="https://framerusercontent.com/images/j4t0CKObqbFrv3v2bTMmTuQkSq4.jpg" 
              alt="A workspace with tax forms and calculator"
              className="w-full h-64 lg:h-80 object-cover rounded-2xl"
            />
          </div>

          {/* Middle Content */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Our process for achieving financial clarity
            </h2>
            
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              We follow a structured, collaborative approach to turn financial insight into actionable, measurable results.
            </p>

            {/* Process Steps */}
            <div className="space-y-6">
              {processes.map((process, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-black rounded-full w-9 h-9 flex items-center justify-center">
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
                    <h3 className="text-base md:text-lg font-semibold mb-1">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-4">
            <img 
              src="https://framerusercontent.com/images/0QDeMnvEf6G9exjBFc17js0jw40.jpg" 
              alt="Tax documents with coffee on desk"
              className="w-full h-full min-h-80 lg:min-h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;