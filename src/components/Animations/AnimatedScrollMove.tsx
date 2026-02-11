"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollMoveProps {
  children: ReactNode;
  x?: number;
  y?: number;
  duration?: number;
  delay?: number;
}

export default function ScrollMove({
  children,
  x = 0,
  y = 0,
  duration = 0.6,
  delay = 0,
}: ScrollMoveProps) {
  const viewportOptions = {
    margin: "-30% 0px -30% 0px",
    amount: 1,
    once: true,
  };

  return (
    <motion.div
      initial={{ x: 0, y: 0, transition: { duration, delay } }}
      whileInView={{
        x,
        y,
        transition: { duration, delay },
      }}
      viewport={viewportOptions}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}
