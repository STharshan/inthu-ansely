import React from "react";
import { Timer, ArrowUp } from "lucide-react";

export default function PerformanceSection() {
  return (
    <>
      <div
        className="min-w-full h-full overflow-y-auto bg-white dark:bg-black transition-colors duration-500"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <section className="py-24 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-12">

              {/* Heading */}
              <div className="space-y-4 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white">
                  Performance:{" "}
                  <span className="text-blue-600 dark:text-cyan-400">Speed = Money</span>
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
                  React websites load 2–10× faster than traditional builders.
                  Faster sites mean lower bounce rates and higher conversions.
                </p>
              </div>

              {/* Performance Card */}
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B0D10] p-8 space-y-8 transition-colors">

                {/* Hint */}
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Timer className="h-4 w-4" />
                  <span>Hover over bars to see load times</span>
                </div>

                {/* Bars */}
                <div className="space-y-6">

                  {/* React */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-black dark:text-white">React</span>
                      <span className="text-sm text-gray-700 dark:text-gray-400">95/100</span>
                    </div>
                    <div className="h-8 bg-gray-300 dark:bg-[#1C1C1C] rounded-lg overflow-hidden">
                      <div
                        className="h-full bg-blue-600 dark:bg-cyan-400 transition-all duration-1000"
                        style={{ width: "95%" }}
                      />
                    </div>
                  </div>

                  {/* WordPress */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-black dark:text-white">WordPress</span>
                      <span className="text-sm text-gray-700 dark:text-gray-400">45/100</span>
                    </div>
                    <div className="h-8 bg-gray-300 dark:bg-[#1C1C1C] rounded-lg overflow-hidden">
                      <div
                        className="h-full bg-orange-500 dark:bg-orange-500 transition-all duration-1000"
                        style={{ width: "45%" }}
                      />
                    </div>
                  </div>

                  {/* Wix */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-black dark:text-white">Wix</span>
                      <span className="text-sm text-gray-700 dark:text-gray-400">35/100</span>
                    </div>
                    <div className="h-8 bg-gray-300 dark:bg-[#1C1C1C] rounded-lg overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 dark:bg-yellow-400 transition-all duration-1000"
                        style={{ width: "35%" }}
                      />
                    </div>
                  </div>

                  {/* GoDaddy */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-black dark:text-white">GoDaddy</span>
                      <span className="text-sm text-gray-700 dark:text-gray-400">30/100</span>
                    </div>
                    <div className="h-8 bg-gray-300 dark:bg-[#1C1C1C] rounded-lg overflow-hidden">
                      <div
                        className="h-full bg-red-500 dark:bg-red-500 transition-all duration-1000"
                        style={{ width: "30%" }}
                      />
                    </div>
                  </div>

                </div>

                {/* Caveat note */}
                <p className="text-xs text-gray-500 dark:text-gray-500 italic">
                  * Scores reflect default/typical setups. WordPress performance varies — a well-optimised WordPress site with caching and a quality host can score significantly higher.
                </p>
              </div>

              {/* Bottom Stat Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B0D10] p-6 transition-colors">
                  <div className="text-3xl font-extrabold text-blue-600 dark:text-cyan-400">2–10×</div>
                  <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">Faster load times</p>
                </div>

                <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B0D10] p-6 transition-colors">
                  <div className="text-3xl font-extrabold text-blue-600 dark:text-cyan-400">53%</div>
                  <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">Users leave if load &gt; 3s</p>
                </div>

                <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0B0D10] p-6 transition-colors">
                  <div className="text-3xl font-extrabold text-blue-600 dark:text-cyan-400"><ArrowUp className="h-8 w-8 inline" /></div>
                  <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">Better rankings & conversions</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
