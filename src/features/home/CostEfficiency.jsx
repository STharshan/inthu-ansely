"use client";
import React from "react";

export default function CostEfficiency() {
  return (
    <section className="py-24 border-t border-gray-200 dark:border-gray-800 transition-colors bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mx-auto max-w-4xl space-y-12">

          {/* Header */}
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-4 py-1.5 text-sm border border-cyan-400/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-cyan-400"
              >
                <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                <polyline points="16 17 22 17 22 11" />
              </svg>
              <span className="text-cyan-400 dark:text-cyan-300">Long-Term Savings</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
              Cost Efficiency Over Time
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              React is more transparent and cost-effective in the long run
              compared to traditional builders.
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* WordPress / Wix */}
            <div className="rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-8 shadow-sm transition-colors">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-gray-500 dark:text-gray-400"
                  >
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                  <h3 className="text-2xl font-bold text-black dark:text-white">
                    WordPress / Wix
                  </h3>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-400">
                    Hidden Costs:
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-400">
                    {[
                      "Premium plugins ($100–500/year)",
                      "Security subscriptions",
                      "Performance tools",
                      "Hosting upgrades",
                      "Developer fixes",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* React */}
            <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 dark:bg-cyan-400/10 p-8 shadow-sm transition-colors">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-cyan-400"
                  >
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                  <h3 className="text-2xl font-bold text-cyan-400">React</h3>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-cyan-300">
                    Transparent Costs:
                  </p>
                  <ul className="space-y-2 text-black dark:text-white">
                    {[
                      "One-time build",
                      "Lightweight hosting",
                      "Minimal maintenance",
                      "No plugin licensing",
                      "Predictable costs",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Statement */}
          <div className="rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-8 text-center transition-colors">
            <p className="text-lg text-black dark:text-white">
              Over{" "}
              <span className="font-bold text-cyan-400">2–3 years</span>, React
              is{" "}
              <span className="font-bold text-cyan-400">
                cheaper and more reliable
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
