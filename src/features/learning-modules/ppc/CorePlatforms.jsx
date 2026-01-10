import { useState } from "react";
import { Search, Users, Play, ChevronDown, ChevronUp } from "lucide-react";

const CorePlatforms = () => {
  const [expandedPlatform, setExpandedPlatform] = useState(-1);

  const platforms = [
    {
      icon: Search,
      title: "Google Ads",
      badge: "Intent-based advertising",
      description: "Capturing high-intent traffic from active searchers",
      formats: ["Search ads (text)", "Display ads", "YouTube ads", "Performance Max"],
      examples: ['"car garage near me"', '"timing belt replacement cost"', '"emergency plumber Leicester"'],
      bestFor: ["Local services", "Emergency services", "ROI-focused campaigns"],
    },
    {
      icon: Users,
      title: "Meta Ads",
      badge: "Interest & behaviour-based",
      description: "Targeting people based on interests, behaviors, and life events",
      formats: ["Feed ads", "Stories", "Reels", "Messenger ads"],
      examples: ["Age 30–45, interested in home improvement", "Parents of teenagers", "Recently engaged"],
      bestFor: ["Brand awareness", "E-commerce", "Visual products"],
    },
    {
      icon: Play,
      title: "TikTok Ads",
      badge: "Attention-based advertising",
      description: "Massive reach at low cost with short-form native video",
      formats: ["In-feed ads", "Spark ads", "TopView", "Branded effects"],
      examples: ["18–35 year olds", "Trending content", "Viral challenges"],
      bestFor: ["Young audiences", "Viral marketing", "Brand building"],
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Core Platforms You Must Understand
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Each platform serves a different purpose. Here's what you need to know.
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {platforms.map((platform, idx) => {
          const Icon = platform.icon;
          const isExpanded = expandedPlatform === idx;

          return (
            <div
              key={idx}
              className={`rounded-xl border transition-all ${
                isExpanded ? "shadow-lg" : "shadow-sm"
              } bg-white dark:bg-black border-gray-200 dark:border-gray-700`}
            >
              <button
                onClick={() => setExpandedPlatform(isExpanded ? -1 : idx)}
                className="w-full p-6 text-left  transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                      <Icon className="h-8 w-8 text-[var(--brand-blue)]" />
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {platform.title}
                        </h3>
                        <span className="px-2 py-0.5 rounded-md bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-xs font-medium">
                          {platform.badge}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{platform.description}</p>
                    </div>
                  </div>

                  {isExpanded ? (
                    <ChevronUp className="h-6 w-6 text-gray-400 dark:text-gray-300" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-400 dark:text-gray-300" />
                  )}
                </div>
              </button>

              {isExpanded && (
                <div className="px-6 pb-6 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="h-px bg-gray-200 dark:bg-gray-700" />

                  {/* Formats */}
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Ad Formats</h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.formats.map((format, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-xs text-gray-900 dark:text-white"
                        >
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Examples */}
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                      Example Targets / Searches
                    </h4>
                    <ul className="space-y-2">
                      {platform.examples.map((example, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                        >
                          <span className="w-1.5 h-1.5 bg-[var(--brand-blue)] rounded-full" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Best For</h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.bestFor.map((item, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] rounded-md text-xs font-medium"
                        >
                          {item}
                        </span>
                      ))}
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
