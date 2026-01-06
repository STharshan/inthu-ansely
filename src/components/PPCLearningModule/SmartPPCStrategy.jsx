import React from "react";
import { Lightbulb, Target } from "lucide-react";

const strategies = [
  {
    title: "Start Small, Scale Fast",
    desc: "Begin with a modest budget to test and learn. Once you find winning campaigns, scale aggressively.",
  },
  {
    title: "Match Intent to Stage",
    desc: "Cold audience? Focus on awareness. Warm audience? Push offers. Hot audience? Retarget with urgency.",
  },
  {
    title: "Build Retargeting Lists",
    desc: "Most people don’t buy on first visit. Retargeting converts 2–3x better than cold traffic.",
  },
  {
    title: "Track Everything",
    desc: "Use conversion tracking, UTM parameters, and analytics. You can’t improve what you don’t measure.",
  },
  {
    title: "Test Ad Copy Like a Scientist",
    desc: "Run A/B tests on headlines, descriptions, and CTAs. Small improvements compound into big wins.",
  },
  {
    title: "Quality Score Matters",
    desc: "Google rewards relevant ads with lower costs. Focus on improving quality score for cheaper clicks.",
  },
];

const SmartPPCStrategy = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Smart PPC Strategy
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          How to approach PPC like a professional.
        </p>
      </div>

      {/* Strategy Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {strategies.map((strategy, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6
                       hover:shadow-lg transition-shadow"
          >
            <Lightbulb className="h-10 w-10 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{strategy.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{strategy.desc}</p>
          </div>
        ))}
      </div>

      {/* 80/20 Rule Highlight */}
      <div className="bg-gradient-to-br from-[#0045EF]/10 to-[#0045EF]/20 dark:from-[#0045EF]/20 dark:to-[#0045EF]/10 rounded-xl shadow-sm p-8 border-2 border-[#0045EF]/30 dark:border-[#0045EF]/50">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#0045EF] rounded-lg">
            <Target className="h-8 w-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">The 80/20 Rule</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              80% of your results come from 20% of your campaigns.
              Find those winners and double down on them ruthlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartPPCStrategy;
