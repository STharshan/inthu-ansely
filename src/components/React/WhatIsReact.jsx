import React from "react";
import { Zap, Rocket, Lightbulb, X, Check } from "lucide-react";

export default function WhatIsReactSection() {
  return (
    <>
      <section
        id="what-is-react"
        className="relative py-24 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black transition-colors duration-500"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl space-y-14">

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-[36px] md:text-[48px] font-extrabold tracking-tight text-black dark:text-white">
                What Is React?{" "}
                <span className="text-gray-500 dark:text-gray-400 font-semibold">
                  (In Simple Terms)
                </span>
              </h2>

              <p className="text-[17px] md:text-[19px] text-gray-700 dark:text-gray-400 leading-relaxed max-w-3xl">
                React is a JavaScript framework that builds fast, dynamic, app-like
                websites. Instead of loading entire pages repeatedly (like
                WordPress), React updates only what&apos;s needed—making your site
                feel instant.
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B0D10] p-6 transition hover:bg-gray-100 dark:hover:bg-[#0F1216]">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-cyan-400/10 flex items-center justify-center">
                    <span className="text-blue-600 dark:text-cyan-400 text-xl font-bold">&lt;/&gt;</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    Modern Framework
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                    Built on JavaScript, the language that powers the modern web
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B0D10] p-6 transition hover:bg-gray-100 dark:hover:bg-[#0F1216]">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-cyan-400/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    Lightning Fast
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                    Updates only what changes, no full page reloads required
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B0D10] p-6 transition hover:bg-gray-100 dark:hover:bg-[#0F1216]">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-cyan-400/10 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    Growth Engine
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                    Not just a website—a digital product that drives business
                    growth
                  </p>
                </div>
              </div>
            </div>

            {/* Think of it as box */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-white/5 p-6 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Lightbulb className="w-8 h-8 text-yellow-500" />
                </div>

                <div>
                  <p className="text-lg font-semibold text-black dark:text-white mb-2">
                    Think of it as:
                  </p>

                  <div className="space-y-2">
                    <p className="text-gray-700 dark:text-gray-400 flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500" /> A brochure website
                    </p>
                    <p className="text-black dark:text-white font-medium flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" /> A digital growth engine
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
