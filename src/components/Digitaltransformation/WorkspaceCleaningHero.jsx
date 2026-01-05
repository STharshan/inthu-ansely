import React from "react";

const DigitalTransformationHero = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-32 px-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">

        {/* Top Content */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6">
            Digital Transformation & Smart Automation
          </p>

          {/* BIGGER & BOLDER TITLE */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8">
            From manual to automated and beyond.
          </h1>

          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-14 max-w-3xl mx-auto">
            Helping hidden gems stand tall in the digital world. We transform how businesses operate by automating repetitive tasks, optimizing workflows, and integrating intelligent systems. Whether you're drowning in manual processes or ready to scale, we build digital ecosystems that work smarter, not harder. Your team deserves technology that amplifies their impact—not adds to their workload.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            
            {/* Outlined Button */}
            <a
              href="/services"
              className="group relative px-8 py-4 rounded-lg border-2 border-[#0045EF] text-[#0045EF]
                         font-medium overflow-hidden
                         before:absolute before:inset-0 before:bg-[#0045EF] before:scale-x-0 before:origin-left
                         before:transition-transform before:duration-300
                         hover:before:scale-x-100
                         shadow-md"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Our Services
              </span>
            </a>

            {/* Filled Button */}
            <a
              href="/contact-us"
              className="group px-8 py-4 rounded-lg bg-[#0045EF] text-white
                         font-semibold flex items-center justify-center gap-3
                         transform transition-all duration-300 shadow-lg
                         hover:scale-105 hover:shadow-xl"
            >
              Get Started
              <span className="bg-white text-[#0045EF] w-8 h-8 flex items-center justify-center rounded-full text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Image / Card */}
        <div className="mt-24 rounded-3xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
          <img
            src="https://framerusercontent.com/images/vQSbNtAmodEUM13anlUDQeeqXvA.jpg?scale-down-to=2048"
            alt="Digital Transformation"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

      </div>
    </section>
  );
};

export default DigitalTransformationHero;