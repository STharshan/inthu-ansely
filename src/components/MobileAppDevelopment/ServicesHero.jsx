import React from "react";
import { motion } from "framer-motion";

// ============================================
// CONFIGURATION
// ============================================
const config = {
  // Upper Text
  upperLeft: "Transform Ideas Into",
  upperRight: "iOS • Android • Web",

  // Main Heading
  mainHeading: "Mobile Excellence",

  // Subheading
  subheading:
    "Building apps that users love, with beautiful design and powerful functionality",

  // CTA Buttons
  primaryCTA: {
    text: "Start Your Project",
    href: "/contact",
  },
  secondaryCTA: {
    text: "View Projects",
    href: "/projects",
  },

  // Background
  backgroundImage: "/mobile-hero.jpg",
  showCTAs: true,
  showScrollIndicator: true,
};

export default function ServicesHero() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={config.backgroundImage}
          alt="Mobile app development hero"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%)",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-20">
        {/* Upper Text Wrapper */}
        <div className="flex justify-between items-start mb-12 sm:mb-16 md:mb-20 flex-wrap gap-4">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide">
              <AnimatedWords text={config.upperLeft} delay={0.1} />
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide">
              <AnimatedWords text={config.upperRight} delay={0.4} />
            </div>
          </motion.div>
        </div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1
            className="text-white font-bold tracking-tight leading-tight px-4"
            style={{
              fontSize: "clamp(3rem, 12vw, 8rem)",
              letterSpacing: "-0.05em",
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
            }}
          >
            {config.mainHeading}
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mb-12"
        >
          <p className="text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light px-4">
            {config.subheading}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        {config.showCTAs && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex justify-center gap-4 flex-wrap px-4"
          >
            <a
              href={config.primaryCTA.href}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105"
            >
              {config.primaryCTA.text}
            </a>
            <a
              href={config.secondaryCTA.href}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base hover:scale-105"
            >
              {config.secondaryCTA.text}
            </a>
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      {config.showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-white/60 text-sm flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-wider hidden sm:block">
              Scroll
            </span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

// ============================================
// ANIMATED WORDS COMPONENT
// ============================================
const AnimatedWords = ({ text, delay = 0 }) => {
  const words = text.split(" ");

  return (
    <span>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.1,
          }}
          style={{
            display: "inline-block",
            marginRight: index < words.length - 1 ? "0.3em" : "0",
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};
