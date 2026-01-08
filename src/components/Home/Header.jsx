"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CORE_VALUES = [
  {
    key: "A",
    heading: "Agility",
    lines: [
      "We move fast and adapt even faster.",
      "We stay ahead of trends, embrace new technologies, and thrive in an ever-changing landscape.",
      "Change isn't something we fear — it's the constant that drives our growth.",
    ],
  },
  {
    key: "N",
    heading: "No-Nonsense Honesty",
    lines: [
      "We believe in brutal honesty.",
      "We speak openly and transparently, even when it's uncomfortable.",
      "Truth builds trust, and trust builds teams.",
    ],
  },
  {
    key: "S",
    heading: "Service to Customers",
    lines: [
      "Our customers' success is our success.",
      "We go above and beyond to deliver long-term value, building partnerships that last.",
      "Every decision starts with what's best for the people we serve.",
    ],
  },
  {
    key: "E",
    heading: "Excellence through Effort",
    lines: [
      "We work hard, we work smart, and we never settle.",
      "We believe in meritocracy — where results, contribution, and teamwork drive recognition.",
      "Every achievement is earned.",
    ],
  },
  {
    key: "L",
    heading: "Lifelong Learning",
    lines: [
      "Technology never stands still, and neither do we.",
      "We constantly seek new skills, insights, and ideas to stay at the cutting edge.",
      "Curiosity fuels our progress.",
    ],
  },
  {
    key: "Y",
    heading: "Yes to Change",
    lines: [
      "The only constant with us is change.",
      "We embrace it, initiate it, and lead it — because innovation demands momentum.",
      "We don't just react to the future; we help build it.",
    ],
  },
];

export default function CoreValuesCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const active = CORE_VALUES[index];

  const goPrev = () => {
    setDirection(-1);
    setIndex((i) => (i === 0 ? CORE_VALUES.length - 1 : i - 1));
  };
  const goNext = () => {
    setDirection(1);
    setIndex((i) => (i === CORE_VALUES.length - 1 ? 0 : i + 1));
  };

  const brandWord = useMemo(() => {
    const letters = ["A", "N", "S", "E", "L", "Y"];
    return letters.map((ch, i) => {
      const isActive = ch === active.key;
      return (
        <span
          key={`${ch}-${i}`}
          className={`transition-all duration-500 ${
            isActive
              ? "scale-110 text-[#0045EF]"
              : "scale-100 text-slate-400 dark:text-slate-500"
          }`}
        >
          {ch}
        </span>
      );
    });
  }, [active.key]);

  return (
    <div className="relative w-full py-5 px-4 sm:px-6 transition-colors duration-500 bg-white dark:bg-black">
      <h1 className="text-center text-2xl sm:text-4xl font-bold text-black dark:text-white mb-10 mt-10">
        Values That Power Everything We Build
      </h1>

      <div className="relative overflow-hidden max-w-5xl mx-auto rounded-2xl bg-[#36383C] px-4 py-10 sm:px-10 sm:py-14 shadow-xl transition-colors duration-500">
        {/* Content */}
        <div className="relative z-10 max-w-2xl p-6">
          <div className="mb-6 sm:mb-8">
            <div className="mb-3 flex items-center gap-2 text-3xl sm:text-5xl font-extrabold tracking-wide">
              {brandWord}
            </div>
            <p className="text-xs font-medium uppercase tracking-widest text-slate-300">
              Our Core Values
            </p>
          </div>

          {/* Slide */}
          <div className="relative min-h-[180px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.key}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <h2 className="mb-3 text-xl sm:text-3xl font-bold text-white">
                  {active.heading}
                </h2>
                <div className="space-y-2 text-sm sm:text-lg text-slate-200">
                  {active.lines.map((t, i) => (
                    <p key={i} className="leading-relaxed">
                      {t}
                    </p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Prev Button */}
        <button
          onClick={goPrev}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-slate-300/80 dark:bg-slate-800/80 text-black dark:text-white shadow-md backdrop-blur-md hover:scale-110 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 18l-6-6 6-6"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={goNext}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-slate-300/80 dark:bg-slate-800/80 text-black dark:text-white shadow-md backdrop-blur-md hover:scale-110 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 18l6-6-6-6"
            />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="mt-5 flex justify-center gap-2">
        {CORE_VALUES.map((s, i) => {
          const isActive = i === index;
          return (
            <button
              key={s.key}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                isActive ? "w-5 bg-[#0045EF]" : "w-2 bg-[#36383C]"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
