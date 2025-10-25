"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function OurProcessSection() {
  const steps = [
    {
      title: "Smart Connect",
      desc: "Platform’s AI analyzes your tech stack and swiftly configures your ideal environment. One connection is all it takes to set everything up following industry best practices.",
      time: "30 sec",
      image: "/cube.png",
    },
    {
      title: "Automation Setup",
      desc: "Automatically link your apps and tools with our smart automation framework — saving time and minimizing errors.",
      time: "45 sec",
      image: "/cube2.png",
    },
    {
      title: "Performance Monitor",
      desc: "We continuously analyze performance metrics and optimize your stack for maximum efficiency.",
      time: "60 sec",
      image: "/cube3.png",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () =>
    setCurrentStep((prev) => (prev + 1) % steps.length);
  const prevStep = () =>
    setCurrentStep((prev) =>
      prev === 0 ? steps.length - 1 : prev - 1
    );

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => nextStep(), 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0D0E10] text-[#E6E7E9] px-6 md:px-16 py-24 font-[Inter]">
      <div className="max-w-7xl mx-auto border border-[#2A2B2D] overflow-hidden rounded-lg">
        {/* ---------- ROW 1 ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-[#2A2B2D]">
          {/* COL 1 — Section Info */}
          <div className="bg-[#0E0E0E] h-[100px] border-r border-[#2A2B2D] flex flex-col justify-center items-start px-8">
            <div className="flex items-center gap-3">
              <div className="h-[55px] w-[1px] bg-[#FF5C1D]" />
              <div>
                <p className="text-[#E6E7E9] text-[15px] leading-tight">003</p>
                <p className="text-[#8A8A8A] text-[13px] mt-[2px]">
                  plat—form
                </p>
              </div>
            </div>
          </div>

          {/* COL 2 — Platform Process */}
          <div className="bg-[#191A1B] flex justify-between items-center px-10 border-r border-[#2A2B2D]">
            <span className="text-[18px] text-[#D0D0D0]">
              Platform Process
            </span>
            <div className="flex items-center gap-2">
              {steps.map((_, i) => (
                <span
                  key={i}
                  className={`h-[6px] rounded-full transition-all ${
                    i === currentStep
                      ? "w-7 bg-[#FF5C1D]"
                      : "w-2 bg-[#444]"
                  }`}
                ></span>
              ))}
            </div>
          </div>

          {/* COL 3 — Arrows */}
          <div className="bg-[#191A1B] flex justify-center items-center gap-12 text-[#FF5C1D]">
            <button
              onClick={prevStep}
              className="hover:text-[#ff7842] transition"
            >
              <FaArrowLeft size={22} />
            </button>
            <button
              onClick={nextStep}
              className="hover:text-[#ff7842] transition"
            >
              <FaArrowRight size={22} />
            </button>
          </div>
        </div>

        {/* ---------- ROW 2 ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[620px]">
          {/* COL 1 — Cube Image (top border removed) */}
          <div className="bg-[#0E0E0E] border-r border-[#2A2B2D] flex justify-center items-center py-16 px-8">
            <AnimatePresence mode="wait">
              <motion.img
                key={steps[currentStep].image}
                src={steps[currentStep].image}
                alt="Cube"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
                className="object-contain w-[85%] max-w-[480px] h-auto"
              />
            </AnimatePresence>
          </div>

          {/* COL 2 — Step Content */}
          <div className="bg-[#191A1B] border-t border-r border-[#2A2B2D] p-14 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={steps[currentStep].title}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-[26px] font-medium text-[#E6E7E9] mb-4 tracking-tight">
                  Step {currentStep + 1} — {steps[currentStep].title}
                </h3>
                <p className="text-[17px] text-[#A0A0A0] mb-10 leading-relaxed">
                  {steps[currentStep].desc}
                </p>

                <div>
                  <p className="text-[38px] text-[#E6E7E9] font-semibold leading-none">
                    {steps[currentStep].time.split(" ")[0]}
                    <span className="text-base text-[#999] ml-1 align-super">
                      {steps[currentStep].time.split(" ")[1]}
                    </span>
                  </p>
                  <p className="text-sm text-[#7A7A7A] mt-2">
                    Average connection time
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* COL 3 — CTA */}
          <div className="bg-[#191A1B] border-t border-[#2A2B2D] p-14 flex flex-col justify-between">
            <div className="flex justify-start">
              <button className="flex items-center gap-3 bg-[#FF5C1D] hover:bg-[#ff7136] text-white px-7 py-4 rounded-md text-[16px] font-medium transition">
                <span className="text-[18px]">📅</span>
                <span>Book a Demo</span>
              </button>
            </div>
            <p className="text-[#A6A6A6] text-[15px] mt-10 max-w-[220px] leading-relaxed">
              Book a demo to see this process in action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}