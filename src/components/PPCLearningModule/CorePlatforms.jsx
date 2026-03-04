import { useState } from "react";
import { Search, Users, Play, ChevronDown, ChevronUp } from "lucide-react";

const CorePlatforms = () => {
  const [expandedPlatform, setExpandedPlatform] = useState(-1);

  const platforms = [
    {
      icon: Search,
      title: "Google Ads",
      badge: "Intent-based",
      description: "Capturing high-intent traffic from active searchers",
      formats: ["Search ads (text)", "Display ads", "YouTube ads", "Performance Max"],
      examples: ['"car garage near me"', '"timing belt replacement"', '"emergency plumber"'],
      bestFor: ["Local services", "Emergency services", "ROI-focused"],
    },
    {
      icon: Users,
      title: "Meta Ads",
      badge: "Interest-based",
      description: "Targeting people based on interests and behaviors",
      formats: ["Feed ads", "Stories", "Reels", "Messenger ads"],
      examples: ["Age 30–45, Home improvement", "Parents of teenagers", "Recently engaged"],
      bestFor: ["Brand awareness", "E-commerce", "Visual products"],
    },
    {
      icon: Play,
      title: "TikTok Ads",
      badge: "Attention-based",
      description: "Massive reach at low cost with native video",
      formats: ["In-feed ads", "Spark ads", "TopView", "Branded effects"],
      examples: ["18–35 year olds", "Trending content", "Viral challenges"],
      bestFor: ["Young audiences", "Viral marketing", "Brand building"],
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 space-y-6 md:space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white leading-tight">
          Core Platforms You Must Understand
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Each platform serves a different purpose. Here's what you need to know.
        </p>
      </div>

      {/* Accordion Container */}
      <div className="space-y-4">
        {platforms.map((platform, idx) => {
          const Icon = platform.icon;
          const isExpanded = expandedPlatform === idx;

          return (
            <div
              key={idx}
              className={`rounded-xl border transition-all duration-300 ${
                isExpanded ? "shadow-md border-[#0045EF]/30" : "shadow-sm border-gray-200 dark:border-gray-800"
              } bg-white dark:bg-black overflow-hidden`}
            >
              <button
                onClick={() => setExpandedPlatform(isExpanded ? -1 : idx)}
                className="w-full p-4 md:p-6 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-900/50"
              >
                <div className="flex items-start gap-3 md:gap-5">
                  {/* Icon - Smaller on mobile */}
                  <div className="p-2.5 md:p-3 bg-gray-100 dark:bg-gray-800 rounded-lg shrink-0">
                    <Icon className="h-6 w-6 md:h-8 md:w-8 text-[#0045EF]" />
                  </div>

                  {/* Title & Description Container */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5 md:mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white truncate">
                        {platform.title}
                      </h3>
                      <span className="inline-block px-2 py-0.5 rounded-md bg-[#0045EF]/10 text-[#0045EF] text-[10px] md:text-xs font-bold whitespace-nowrap uppercase tracking-wider">
                        {platform.badge}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 line-clamp-2 md:line-clamp-none">
                      {platform.description}
                    </p>
                  </div>

                  {/* Chevron - Hidden on very small screens to save space if needed, or keep it */}
                  <div className="shrink-0 mt-1">
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-[#0045EF]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-4 pb-6 md:px-6 md:pb-8 space-y-6 animate-in slide-in-from-top-2 duration-300">
                  <div className="h-px bg-gray-100 dark:bg-gray-800 mx-[-1rem] md:mx-[-1.5rem]" />
                  
                  {/* Responsive Grid for Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Formats */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Ad Formats</h4>
                      <div className="flex flex-wrap gap-2">
                        {platform.formats.map((format, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 border border-gray-200 dark:border-gray-700 rounded-md text-[11px] md:text-xs text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900"
                          >
                            {format}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Examples */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Targeting Examples</h4>
                      <ul className="space-y-2">
                        {platform.examples.map((example, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-[#0045EF] rounded-full shrink-0" />
                            <span className="italic">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Best For - Full width on small tablets, 1/3 on desktop */}
                    <div className="space-y-3 sm:col-span-2 lg:col-span-1">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Best For</h4>
                      <div className="flex flex-wrap gap-2">
                        {platform.bestFor.map((item, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-[#0045EF] text-white rounded-md text-[11px] md:text-xs font-medium shadow-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CorePlatforms;