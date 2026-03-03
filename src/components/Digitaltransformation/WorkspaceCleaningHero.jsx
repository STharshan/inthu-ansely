import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const DigitalTransformationHero = () => {
  return (
    <section className="bg-white mt-16 md:mt-20 dark:bg-black text-black dark:text-white transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-28">
        {/* Responsive Grid: Stacks on mobile, Side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT - Text and CTA */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 mb-6 font-medium">
              Digital Transformation & Smart Automation
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight">
              From manual to <br className="hidden lg:block" />
              automated <span className="text-[#0045EF]">and beyond.</span>
            </h1>

            <p className="text-gray-700 dark:text-gray-300 text-base md:text-xl mb-10 max-w-2xl leading-relaxed">
              Helping hidden gems stand tall in the digital world. We transform
              how businesses operate by automating repetitive tasks, optimizing
              workflows, and integrating intelligent systems. 
              <span className="hidden md:inline"> Your team deserves technology that amplifies impact—not workload.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Link
                to="/contact"
                className="group px-8 py-4 rounded-full bg-[#0045EF] text-white 
                font-semibold flex items-center justify-center gap-4 
                transform transition-all duration-300 shadow-lg shadow-blue-500/20
                hover:scale-105 hover:shadow-xl"
              >
                Get Started
                <span className="bg-white text-[#0045EF] w-8 h-8 flex items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={18} strokeWidth={3} />
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT CONTENT - Image / Visual Section */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 aspect-[4/5] lg:aspect-[3/4]">
              <img
                src="https://framerusercontent.com/images/vQSbNtAmodEUM13anlUDQeeqXvA.jpg?scale-down-to=2048"
                alt="Digital Transformation"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Subtle Blue Glow Overlay */}
              <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" />
            </div>
            
            {/* Decorative Element - only on desktop */}
            <div className="hidden lg:block absolute -bottom-6 -right-6 w-32 h-32 bg-[#0045EF]/10 rounded-full blur-3xl" />
            <div className="hidden lg:block absolute -top-6 -left-6 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default DigitalTransformationHero;