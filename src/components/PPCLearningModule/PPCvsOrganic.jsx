import React from "react";
import { Zap, TrendingUp, Clock, Target, ArrowRight } from "lucide-react";

const PPCvsOrganic = () => {
  const data = [
    {
      channel: "SEO",
      speed: "Slow",
      cost: "Low",
      longevity: "Long-term",
      control: "Medium",
      isHighlighted: false,
    },
    {
      channel: "Organic Social",
      speed: "Medium",
      cost: "Low",
      longevity: "Medium",
      control: "Low",
      isHighlighted: false,
    },
    {
      channel: "Paid Ads",
      speed: "Instant",
      cost: "Medium–High",
      longevity: "Short-term",
      control: "High",
      isHighlighted: true,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-6 md:space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
          PPC vs Organic
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
          Understanding when to use paid ads versus organic marketing strategies.
        </p>
      </div>

      {/* Mobile View: Stacked Cards (Visible only on small screens) */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {data.map((row, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-xl border ${
              row.isHighlighted
                ? "bg-[#0045EF]/5 border-[#0045EF]/30 ring-1 ring-[#0045EF]/20"
                : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {row.channel}
              </h3>
              {row.isHighlighted && (
                <span className="bg-[#0045EF] text-white text-xs px-2 py-1 rounded-full uppercase tracking-wider font-bold">
                  Recommended
                </span>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm">
              <div className="flex flex-col">
                <span className="text-gray-500 flex items-center gap-1 mb-1">
                  <Zap className="h-3 w-3" /> Speed
                </span>
                <span className={`font-semibold ${row.isHighlighted ? "text-[#0045EF]" : "text-gray-900 dark:text-gray-100"}`}>
                  {row.speed}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 flex items-center gap-1 mb-1">
                  <TrendingUp className="h-3 w-3" /> Cost
                </span>
                <span className="font-semibold text-gray-900 dark:text-gray-100">{row.cost}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 flex items-center gap-1 mb-1">
                  <Clock className="h-3 w-3" /> Longevity
                </span>
                <span className="font-semibold text-gray-900 dark:text-gray-100">{row.longevity}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 flex items-center gap-1 mb-1">
                  <Target className="h-3 w-3" /> Control
                </span>
                <span className="font-semibold text-gray-900 dark:text-gray-100">{row.control}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View: Table (Hidden on small screens) */}
      <div className="hidden md:block bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Channel</th>
              <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#0045EF]" /> Speed</div>
              </th>
              <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">
                <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-[#0045EF]" /> Cost</div>
              </th>
              <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#0045EF]" /> Longevity</div>
              </th>
              <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">
                <div className="flex items-center gap-2"><Target className="h-4 w-4 text-[#0045EF]" /> Control</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr 
                key={idx}
                className={`transition-colors border-b border-gray-100 dark:border-gray-800 last:border-0 ${
                  row.isHighlighted 
                    ? "bg-[#0045EF]/5 hover:bg-[#0045EF]/10" 
                    : "hover:bg-gray-50 dark:hover:bg-gray-900"
                }`}
              >
                <td className={`p-4 font-bold ${row.isHighlighted ? "text-gray-900 dark:text-white" : "font-medium"}`}>
                  {row.channel}
                </td>
                <td className="p-4">
                  <span className={`${row.isHighlighted ? "text-[#0045EF] font-bold" : "text-gray-600 dark:text-gray-300"}`}>
                    {row.speed}
                  </span>
                </td>
                <td className="p-4 text-gray-600 dark:text-gray-300">{row.cost}</td>
                <td className="p-4 text-gray-600 dark:text-gray-300">{row.longevity}</td>
                <td className={`p-4 ${row.isHighlighted ? "text-[#0045EF] font-bold" : "text-gray-600 dark:text-gray-300"}`}>
                  {row.control}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Conclusion */}
      <div className="bg-[#0045EF]/10 dark:bg-[#0045EF]/20 rounded-xl p-5 border border-[#0045EF]/20">
        <p className="text-base md:text-lg font-semibold text-center text-gray-900 dark:text-white flex items-center justify-center gap-2">
          <ArrowRight className="h-5 w-5 shrink-0" /> 
          <span>Smart businesses use <span className="text-[#0045EF]">PPC + SEO</span> together</span>
        </p>
      </div>
    </div>
  );
};

export default PPCvsOrganic;