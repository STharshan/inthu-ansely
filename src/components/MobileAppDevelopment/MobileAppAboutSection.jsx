import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaMobileAlt, FaLightbulb, FaRocket } from "react-icons/fa";

/**
 * Innovation-Focused About Section - SCROLL RESPONSIVE
 *
 * Features:
 * - Scroll DOWN → Words appear one-by-one
 * - Scroll UP → Words disappear one-by-one
 * - Dark/Light mode → Automatic theme support
 * - Smooth bidirectional animation
 */

export default function MobileAppAboutSection() {
  const sectionRef = useRef(null);
  const [totalWords, setTotalWords] = useState(0);

  // Track scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"], // Trigger when section is 80% in view
  });

  // Innovation-Focused Content
  const content = [
    {
      text: "We believe that mobile apps",
      icon: { Component: FaMobileAlt, color: "#0045EF" },
      continuedText: "should push boundaries — not follow trends.",
    },

    {
      text: "By embracing emerging technologies and challenging conventions, we help visionaries",
      icon: { Component: FaLightbulb, color: "#0045EF" },
      continuedText:
        "transform bold ideas into groundbreaking mobile experiences.",
    },

    {
      text: "With innovation",
      icon: { Component: FaRocket, color: "#0045EF" },
      continuedText:
        "as our compass, we're pioneering the future of mobile technology.",
    },
  ];

  // Calculate total words on mount
  useEffect(() => {
    let count = 0;
    content.forEach((item) => {
      if (item.text) {
        count += item.text.split(" ").length;
        if (item.icon) count += 1; // Count icon as a word
        if (item.continuedText) count += item.continuedText.split(" ").length;
      }
    });
    setTotalWords(count);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 py-20">
        <div className="flex flex-wrap gap-x-3 gap-y-2">
          {content.map((item, index) => {
            if (item.lineBreaks) {
              return (
                <div
                  key={`break-${index}`}
                  className="w-full"
                  style={{ height: `${item.lineBreaks * 1.2}em` }}
                />
              );
            }

            // Calculate word index for this item
            let wordIndex = 0;
            for (let i = 0; i < index; i++) {
              if (content[i].text) {
                wordIndex += content[i].text.split(" ").length;
                if (content[i].icon) wordIndex += 1;
                if (content[i].continuedText) {
                  wordIndex += content[i].continuedText.split(" ").length;
                }
              }
            }

            return (
              <React.Fragment key={index}>
                {/* Text before icon */}
                {item.text.split(" ").map((word, wordIdx) => (
                  <ScrollAnimatedWord
                    key={`${index}-${wordIdx}`}
                    word={word}
                    wordIndex={wordIndex + wordIdx}
                    totalWords={totalWords}
                    scrollYProgress={scrollYProgress}
                  />
                ))}

                {/* Icon */}
                {item.icon && (
                  <ScrollAnimatedIcon
                    icon={item.icon}
                    wordIndex={wordIndex + item.text.split(" ").length}
                    totalWords={totalWords}
                    scrollYProgress={scrollYProgress}
                  />
                )}

                {/* Text after icon */}
                {item.continuedText &&
                  item.continuedText
                    .split(" ")
                    .map((word, wordIdx) => (
                      <ScrollAnimatedWord
                        key={`${index}-continued-${wordIdx}`}
                        word={word}
                        wordIndex={
                          wordIndex + item.text.split(" ").length + 1 + wordIdx
                        }
                        totalWords={totalWords}
                        scrollYProgress={scrollYProgress}
                      />
                    ))}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Scroll-animated word component
const ScrollAnimatedWord = ({
  word,
  wordIndex,
  totalWords,
  scrollYProgress,
}) => {
  // Calculate when this word should be visible based on scroll position
  // Each word has a "reveal point" in the scroll range
  const revealPoint = wordIndex / totalWords;

  // Create smooth fade in/out zones
  // Word fades IN as you scroll down past its reveal point
  // Word fades OUT as you scroll up past its reveal point
  const opacity = useTransform(
    scrollYProgress,
    [
      Math.max(0, revealPoint - 0.05), // Start fading in slightly before
      revealPoint, // Fully visible at reveal point
      Math.min(1, revealPoint + 0.05), // Stay visible slightly after
    ],
    [0.2, 1, 1], // Opacity values: start dim, fully visible, stay visible
  );

  return (
    <motion.span
      style={{ opacity }}
      className="text-black dark:text-white text-2xl sm:text-3xl md:text-4xl font-medium leading-relaxed transition-colors duration-300"
    >
      {word}
    </motion.span>
  );
};

// Scroll-animated icon component
const ScrollAnimatedIcon = ({
  icon,
  wordIndex,
  totalWords,
  scrollYProgress,
}) => {
  const { Component, color } = icon;
  const revealPoint = wordIndex / totalWords;

  const opacity = useTransform(
    scrollYProgress,
    [
      Math.max(0, revealPoint - 0.05),
      revealPoint,
      Math.min(1, revealPoint + 0.05),
    ],
    [0.2, 1, 1],
  );

  return (
    <motion.span style={{ opacity }} className="inline-flex items-center mx-1">
      <Component
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9"
        style={{ color }}
      />
    </motion.span>
  );
};
