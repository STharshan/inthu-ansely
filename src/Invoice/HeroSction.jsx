import React from 'react';

const HeroSection = () => {
  const backgroundImage = "https://cdn.prod.website-files.com/5f723f17079784254fd79f6d/60f8d9cbcf838a29521a7385_background-about-hero-tech-ui-kit-webflow-template.svg";

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-black transition-colors duration-300">
      
      {/* Background SVG - Replaces the previous gradient div */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Optional: Subtle Overlay to ensure text pops if the SVG is too bright */}
      <div className="absolute inset-0 z-0 bg-black/20 dark:bg-black/40"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Top Badge */}
        <p className="text-[10px] md:text-xs pt-20 font-bold tracking-[0.2em] text-white uppercase mb-6">
          Entering the digital world together
        </p>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-8">
          Be Faster<br />
          In Payments,<br />
          With <span className="text-[#0045EF]">Ansely Invoicing</span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-sm md:text-lg text-white/80 dark:text-zinc-400 font-medium leading-relaxed mb-10 px-4">
          Say goodbye to paperwork, chasing payments, and “I will send it later.” With Ansely, invoice your client there and then — directly from your phone.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Button */}
          <button className="w-full sm:w-auto px-8 py-3 bg-[#0045EF] text-white text-sm font-semibold rounded-xl hover:bg-blue-600 transition-all active:scale-95">
            Try today
          </button>

          {/* Secondary Button */}
          <button className="w-full sm:w-auto px-8 py-3 bg-white/10 text-white backdrop-blur-sm border border-white/20 text-sm font-semibold rounded-xl hover:bg-white/20 transition-all active:scale-95">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;