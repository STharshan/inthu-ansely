import React from "react";
import { motion } from "framer-motion";

interface AboutHeroProps {
  subtitle?: string;
  title?: string;
  description?: string;
  heroImage?: string;
  backgroundImage?: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({
  subtitle = "About Us",
  title = "Our mission is to help you scale through smart analytics",
  description = "We transform businesses through innovative digital solutions, helping companies navigate the complexities of modern technology with confidence and clarity.",
  backgroundImage = "https://cdn.prod.website-files.com/5f723f17079784254fd79f6d/60f8d9cbcf838a29521a7385_background-about-hero-tech-ui-kit-webflow-template.svg",
}) => {
  return (
    <section className="relative pb-0 overflow-visible bg-black">
      {/* Background SVG - Covers entire section */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Content Container */}
      <div className="relative z-10">
        {/* Text Content Container - Max width 837px */}
        <div className="max-w-[837px] mx-auto px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-32 sm:pb-40 md:pb-48 lg:pb-64 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Subtitle */}
            <div className="subtitle mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-medium text-white tracking-wider uppercase">
                {subtitle}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {title}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
