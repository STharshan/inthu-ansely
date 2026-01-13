import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { coreValues, type CoreValue } from "../../constants/coreValues";

export type { CoreValue };

export interface OurValuesProps {
  subtitle?: string;
  title?: string;
  description?: string;
  values?: CoreValue[];
}

const ValueCard: React.FC<{ value: CoreValue; index: number }> = ({ value, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex-shrink-0 w-full md:w-[85vw] lg:w-[70vw] xl:w-[600px] px-0 md:px-4 lg:px-6 mb-6 md:mb-0"
    >
      <div className="group relative bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 border border-gray-200 dark:border-white/10 hover:border-[#0045EF] dark:hover:border-[#0045EF] transition-all duration-500 hover:shadow-2xl hover:shadow-[#0045EF]/20 h-full min-h-[350px] sm:min-h-[400px] md:min-h-[450px] flex flex-col">
        {/* Large Letter Background */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-[100px] sm:text-[120px] md:text-[150px] lg:text-[180px] xl:text-[200px] font-bold text-[#0045EF]/5 dark:text-[#0045EF]/10 leading-none pointer-events-none">
          {value.key}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Key Badge */}
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#0045EF]/10 dark:bg-[#0045EF]/20 mb-6 sm:mb-8 group-hover:bg-[#0045EF] transition-colors duration-500">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0045EF] group-hover:text-white transition-colors duration-500">
              {value.key}
            </span>
          </div>

          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6 transition-colors duration-300">
            {value.heading}
          </h3>

          {/* Description Lines */}
          <div className="space-y-3 sm:space-y-4 flex-grow">
            {value.lines.map((line, lineIndex) => (
              <p
                key={lineIndex}
                className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-white/70 leading-relaxed transition-colors duration-300"
              >
                {line}
              </p>
            ))}
          </div>

          {/* Decorative Corner */}
          <div className="absolute bottom-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-[#0045EF]/5 dark:bg-[#0045EF]/10 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </motion.div>
  );
};

const OurValues: React.FC<OurValuesProps> = ({
  subtitle = "Our Core Values",
  title = "What We Stand For",
  description = "Our values aren't just words on a page — they're the principles that guide every decision, every project, and every interaction.",
  values = coreValues,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Only enable horizontal scroll hijacking on desktop
  useEffect(() => {
    if (isMobile) {
      return;
    }

    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!section || !scrollContainer) {
      return;
    }

    const handleWheel = (e: WheelEvent) => {
      const scrollLeft = scrollContainer.scrollLeft;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      // Check if we're at the edges
      const atStart = scrollLeft <= 10;
      const atEnd = scrollLeft >= maxScroll - 10;

      // Edge detection - exit early
      if (atStart && e.deltaY < 0) {
        setIsScrollLocked(false);
        return;
      }

      if (atEnd && e.deltaY > 0) {
        setIsScrollLocked(false);
        return;
      }

      // Get container position
      const containerRect = scrollContainer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const containerTop = containerRect.top;
      const containerBottom = containerRect.bottom;
      const containerHeight = containerRect.height;

      // LENIENT THRESHOLDS - Much easier to trigger
      const containerInUpperHalf = containerTop < viewportHeight * 0.5; // Top 50%
      const containerInLowerHalf = containerBottom > viewportHeight * 0.5; // Bottom 50%
      const containerNotTooHigh = containerTop > -containerHeight * 0.5;
      const containerNotTooLow = containerBottom < viewportHeight * 1.5;

      const cardsWellPositioned =
        containerInUpperHalf && containerInLowerHalf && containerNotTooHigh && containerNotTooLow;

      if (!cardsWellPositioned) {
        setIsScrollLocked(false);
        return;
      }

      if (e.deltaY !== 0) {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY * 40;
        setIsScrollLocked(true);
      }
    };

    section.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      section.removeEventListener("wheel", handleWheel);
    };
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-32 bg-gray-50 dark:bg-black/50 overflow-hidden transition-colors duration-300"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-12 sm:mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Subtitle */}
          <div className="inline-block mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-medium text-[#0045EF] tracking-wider uppercase">
              {subtitle}
            </span>
            <div className="h-0.5 w-12 bg-[#0045EF] mt-2 mx-auto" />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4 sm:mb-6 leading-tight transition-colors duration-300">
            {title}
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-white/70 leading-relaxed transition-colors duration-300">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Cards Container */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className={`
            ${
              isMobile
                ? "flex flex-col items-center gap-6 px-4"
                : "overflow-x-auto scrollbar-hide scroll-smooth"
            }
          `}
        >
          <div
            className={`
            ${
              isMobile
                ? "w-full max-w-2xl flex flex-col gap-6"
                : "flex gap-6 sm:gap-8 md:gap-10 pl-4 sm:pl-6 md:pl-8 pr-4 sm:pr-6 md:pr-8 py-4"
            }
          `}
          >
            {values.map((value, index) => (
              <ValueCard key={value.key} value={value} index={index} />
            ))}
          </div>
        </div>

        {/* Scroll Indicator - Only on Desktop */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center justify-center gap-2 mt-8 sm:mt-12"
          >
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0045EF] animate-pulse" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#0045EF]/50 animate-pulse delay-100" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#0045EF]/30 animate-pulse delay-200" />
            </div>
            <span className="text-xs sm:text-sm text-gray-500 dark:text-white/50 font-medium">
              Scroll to explore →
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OurValues;
