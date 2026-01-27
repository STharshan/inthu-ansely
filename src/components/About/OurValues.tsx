import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { coreValues, type CoreValue } from "../../constants/coreValues";

export type { CoreValue };

export interface OurValuesProps {
  subtitle?: string;
  title?: string;
  description?: string;
  values?: CoreValue[];
}

const ValueCard: React.FC<{ value: CoreValue; index: number }> = ({
  value,
  index,
}) => {
  return (
    <div className="flex-shrink-0 w-[90vw] sm:w-[85vw] md:w-[70vw] lg:w-[600px] px-0 md:px-4 lg:px-6 mb-6 md:mb-0">
      <div className="group relative bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 border border-transparent dark:border-white/10 hover:border-[#0045EF] dark:hover:border-[#0045EF] transition-all duration-500 hover:shadow-2xl hover:shadow-[#0045EF]/20 h-full min-h-[350px] sm:min-h-[400px] md:min-h-[450px] flex flex-col">
        {/* Large Letter Background */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-[100px] sm:text-[120px] md:text-[150px] lg:text-[180px] xl:text-[200px] font-bold text-[#0045EF]/[0.03] dark:text-[#0045EF]/10 group-hover:text-[#0045EF]/[0.08] dark:group-hover:text-[#0045EF]/20 leading-none pointer-events-none transition-all duration-500">
          {value.key}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Key Badge */}
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#0045EF]/[0.08] dark:bg-[#0045EF]/20 mb-6 sm:mb-8 group-hover:bg-[#0045EF] group-hover:scale-110 transition-all duration-500">
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
    </div>
  );
};

const OurValues: React.FC<OurValuesProps> = ({
  subtitle = "Our Core Values",
  title = "What We Stand For",
  description = "Our values aren't just words on a page — they're the principles that guide every decision, every project, and every interaction.",
  values = coreValues,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile/tablet on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024; // lg breakpoint
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Calculate horizontal movement
  const cardWidth = 700; // approximate width including padding
  const totalWidth = values.length * cardWidth;
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [
      0,
      -totalWidth +
        (typeof window !== "undefined" ? window.innerWidth * 0.8 : 800),
    ],
  );

  // Mobile: Render vertical stack
  if (isMobile) {
    return (
      <>
        {/* Section Header */}
        <div className="relative py-16 sm:py-20 bg-gray-50 dark:bg-black/50 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
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
        </div>

        {/* Mobile: Vertical Stack */}
        <section className="relative py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 transition-colors duration-300">
          <div className="max-w-2xl mx-auto px-4 space-y-6">
            {values.map((value, index) => (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ValueCard value={value} index={index} />
              </motion.div>
            ))}
          </div>
        </section>
      </>
    );
  }

  // Desktop: Horizontal Scroll
  return (
    <>
      {/* Section Header - Before the scroll section */}
      <div className="relative py-16 sm:py-20 bg-gray-50 dark:bg-black/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
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

            {/* Scroll Instruction */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 flex items-center justify-center gap-2"
            >
              <span className="text-sm text-gray-500 dark:text-white/50 font-medium">
                Scroll down to explore
              </span>
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="text-[#0045EF]"
              >
                ↓
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroll Section - Desktop Only */}
      <section
        ref={sectionRef}
        className="relative h-[300vh] bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 transition-colors duration-300"
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          {/* Progress bar */}
          <motion.div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 z-20">
            <motion.div
              className="h-full bg-[#0045EF]"
              style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
            />
          </motion.div>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none" />

          {/* Scrolling cards */}
          <motion.div
            style={{ x }}
            className="flex gap-6 sm:gap-8 md:gap-10 pl-4 sm:pl-6 md:pl-8 pr-4 sm:pr-6 md:pr-8 py-4"
          >
            {values.map((value, index) => (
              <ValueCard key={value.key} value={value} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OurValues;
