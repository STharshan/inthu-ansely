import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      
      {/* Background Gradient Effect - Adjusted for Dark Mode */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-gray-200 to-gray-400 opacity-60 dark:from-zinc-800 dark:via-zinc-900 dark:to-black dark:opacity-40"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Top Badge */}
        <p className="text-[10px] md:text-xs pt-20 font-bold tracking-[0.2em] text-[#0045EF] uppercase mb-6">
          $14M Fund Raised in Initial State
        </p>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black dark:text-white leading-[1.1] mb-8">
          Be Better <br />
          In Marketing, <br />
          With <span className="text-[#0045EF]">Roboto</span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-sm md:text-lg text-gray-600 dark:text-zinc-400 font-medium leading-relaxed mb-10 px-4">
          Say goodbye to endless hours spent searching for solutions and 
          struggling with marketing – with Roboto.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Button */}
          <button className="w-full sm:w-auto px-8 py-3 bg-[#0045EF] text-white dark:text-black text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all active:scale-95">
            Try today
          </button>
          
          {/* Secondary Button */}
          <button className="w-full sm:w-auto px-8 py-3 bg-gray-200 text-black dark:bg-zinc-800 dark:text-white text-sm font-semibold rounded-xl hover:bg-gray-300 dark:hover:bg-zinc-700 transition-all active:scale-95">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;