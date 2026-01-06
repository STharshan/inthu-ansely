import React from "react";
import { X } from "lucide-react";

const mistakes = [
  "Sending traffic to a homepage",
  "No clear offer or CTA",
  "No tracking installed",
  'Boosting posts with no strategy',
  "No follow-up system",
  'Expecting ads to "fix" a bad business',
];

const requirements = [
  "Fast website (loads in under 3 seconds)",
  "Clear landing pages (one goal per page)",
  "Mobile optimisation (most traffic is mobile)",
  "Strong CTAs (clear next steps)",
  "Conversion tracking (know what works)",
];

const PPCMistakes = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Common PPC Mistakes (That Waste Money)
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Avoid these costly errors that drain your advertising budget.
        </p>
      </div>

      {/* Mistakes Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {mistakes.map((mistake, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl border border-red-200 dark:border-red-700 shadow-sm p-6
                       hover:shadow-lg transition-all hover:scale-[1.02]"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 dark:bg-red-900 flex items-center justify-center">
                <X className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <p className="text-lg pt-1 text-gray-800 dark:text-gray-200">{mistake}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Website Requirement Callout */}
      <div className="bg-gradient-to-br from-[#0045EF]/10 to-[#0045EF]/20 dark:from-[#0045EF]/20 dark:to-[#0045EF]/10 rounded-xl shadow-sm p-8 border-2 border-[#0045EF]/30 dark:border-[#0045EF]/50">
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          PPC + Website = Non-Negotiable
        </h3>

        <p className="text-lg mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
          Paid ads only work properly when paired with:
        </p>

        <ul className="space-y-2">
          {requirements.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
              <div className="w-2 h-2 rounded-full bg-[#0045EF]"></div>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-lg font-semibold mt-6 text-gray-900 dark:text-gray-100">
          Ads don’t replace a website — they demand one.
        </p>
      </div>
    </div>
  );
};

export default PPCMistakes;
