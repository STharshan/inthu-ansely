import React from 'react';

const HeroSection = () => {
  const backgroundImage = "https://cdn.prod.website-files.com/5f723f17079784254fd79f6d/60f8d9cbcf838a29521a7385_background-about-hero-tech-ui-kit-webflow-template.svg";

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-black transition-colors duration-300">
      
      {/* Background SVG */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Top Badge - Updated */}
        <p className="text-[10px] md:text-xs pt-20 font-bold tracking-[0.2em] text-white uppercase mb-6">
          MAKING CONNECTIONS THAT ACTUALLY STICK
        </p>

        {/* Main Headline - Updated */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-8">
          Leave a Lasting<br />
          Impression, With<br />
          <span className="text-[#0045EF]">Ansely Cards</span>
        </h1>

        {/* Subtext - Updated */}
        <p className="max-w-2xl mx-auto text-sm md:text-lg text-white/80 font-medium leading-relaxed mb-10 px-4">
          Say goodbye to paper cards that end up in a drawer. With Ansely, one tap shares everything - your face, your story, your details - right to their phone.
        </p>

        {/* Buttons - Updated */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Button */}
          <button className="w-full sm:w-auto px-8 py-3 bg-[#0045EF] text-white text-sm font-semibold rounded-xl hover:bg-blue-600 transition-all active:scale-95">
            Get Your Card
          </button>

          {/* Secondary Button */}
          <button className="w-full sm:w-auto px-8 py-3 bg-white/10 text-white backdrop-blur-sm border border-white/20 text-sm font-semibold rounded-xl hover:bg-white/20 transition-all active:scale-95">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;