import React from "react";
import CenterContent from "../Animations/CenterContent";
import AnimatedScrollMove from "../Animations/AnimatedScrollMove";
import AnimatedShow from "../Animations/AnimatedShow";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

export default function Newabout() {
  const features = [
    "Component-based architecture for fully bespoke design & functionality",
    "Lightning-fast performance with client-side rendering and smart caching",
    "Highly scalable for complex systems, dashboards, and SaaS platforms",
    "Seamless integration with APIs, CRMs, ERPs, and third-party services",
    "Superior control over UX/UI animations, transitions, and interactions",
    "Ideal for long-term growth, custom features, and future expansion",
  ];

  return (
    <div className="overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      <CenterContent>
        <AnimatedShow
          scale={0.6}
          inViewShow
          className="grid grid-cols-1 items-center justify-center gap-24 py-1 lg:grid-cols-2"
        >
          {/* LEFT CONTENT */}
          <div>
            <h1 className="max-w-2xl text-4xl font-bold text-black dark:text-white">
              React Websites — Built for Performance, Scale & Custom Experiences
            </h1>

            <h3 className="my-8 max-w-2xl text-xl opacity-80 text-gray-700 dark:text-gray-300">
              Discover React: a powerful JavaScript framework designed for high-performance, fully
              custom web applications where speed, scalability, and user experience come first.
            </h3>

            <div className="mt-12 grid grid-cols-2 gap-4 font-semibold opacity-80">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="flex w-6 h-6 shrink-0 items-center justify-center rounded-full bg-[#0045EF]">
                    <Check className="w-4 h-4 text-black dark:text-white" strokeWidth={2} />
                  </div>
                  <span className="text-gray-900 dark:text-white">{feature}</span>
                </div>
              ))}
            </div>

            {/* LEARN MORE BUTTON */}
            <div className="mt-12">
              <Link
                to="/learn/react-comparison"
                className="inline-flex items-center justify-center rounded-lg bg-[#0045EF] px-5 py-2 text-white font-semibold text-lg transition-all duration-300 hover:bg-gray-800  dark:text-black dark:hover:bg-gray-200"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGES — DESKTOP */}
          <div className="group relative mt-20 ml-auto hidden min-h-[200px] pb-30 sm:block sm:pb-80 lg:mt-0 lg:pb-0">
            <img
              className="absolute -top-20 left-0 w-full max-w-[200px] -rotate-15 rounded-lg shadow-2xl sm:max-w-sm md:max-w-md"
              src="/kml-desk.png"
              alt="kml website"
              loading="lazy"
              decoding="async"
              style={{ willChange: "transform" }}
            />

            <AnimatedScrollMove x={40} y={40}>
              <img
                className="absolute -top-10 left-20 w-full max-w-[200px] -rotate-5 rounded-lg shadow-2xl transition-transform duration-500 ease-in-out group-hover:translate-2 sm:max-w-sm md:max-w-md"
                src="/auto-desk.png"
                alt="auto-desk. development"
                loading="lazy"
                decoding="async"
                style={{ willChange: "transform" }}
              />
            </AnimatedScrollMove>

            <AnimatedScrollMove x={60} y={60} delay={0.1}>
              <img
                className="absolute top-0 left-40 w-full max-w-[200px] rounded-lg shadow-2xl transition-transform duration-500 ease-in-out group-hover:translate-4 sm:max-w-sm md:max-w-md"
                src="/stonley-desk.png"
                alt="react ui"
                loading="lazy"
                decoding="async"
                style={{ willChange: "transform" }}
              />
            </AnimatedScrollMove>
          </div>

          {/* MOBILE IMAGES */}
          <div className="group relative block h-[500px] min-h-[200px] sm:hidden">
            <img
              className="absolute -top-20 left-[10%] w-full max-w-[200px] -rotate-15 rounded-lg shadow-2xl"
              src="/kml-mobile.png"
              alt="react website"
              loading="lazy"
              decoding="async"
              style={{ willChange: "transform" }}
            />

            <AnimatedScrollMove x={40} y={40}>
              <img
                className="absolute -top-10 left-[20%] w-full max-w-[200px] -rotate-5 rounded-lg shadow-2xl transition-transform duration-500 ease-in-out group-hover:translate-2"
                src="/auto-mobile.png"
                alt="react development"
                loading="lazy"
                decoding="async"
                style={{ willChange: "transform" }}
              />
            </AnimatedScrollMove>

            <AnimatedScrollMove x={60} y={60} delay={0.1}>
              <img
                className="absolute top-0 left-[30%] w-full max-w-[200px] rounded-lg shadow-2xl transition-transform duration-500 ease-in-out group-hover:translate-4"
                src="/stonley-mobile.png"
                alt="react ui"
                loading="lazy"
                decoding="async"
                style={{ willChange: "transform" }}
              />
            </AnimatedScrollMove>
          </div>
        </AnimatedShow>
      </CenterContent>
    </div>
  );
}
