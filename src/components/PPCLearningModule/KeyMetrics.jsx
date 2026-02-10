import React, { useState } from "react";
import {
  MousePointer,
  Target,
  BarChart3,
  TrendingUp,
  DollarSign,
  AlertTriangle,
} from "lucide-react";

const metrics = [
  {
    icon: MousePointer,
    title: "CPC",
    subtitle: "Cost Per Click",
    description: "How much you pay each time someone clicks your ad.",
    example: "£2.50 CPC → You pay £2.50 per click",
  },
  {
    icon: Target,
    title: "CPA",
    subtitle: "Cost Per Acquisition",
    description: "Total ad spend divided by number of conversions.",
    example: "£500 spent ÷ 10 sales = £50 CPA",
  },
  {
    icon: BarChart3,
    title: "CTR",
    subtitle: "Click-Through Rate",
    description: "Percentage of people who see your ad and click.",
    example: "100 clicks ÷ 10,000 impressions = 1% CTR",
  },
  {
    icon: TrendingUp,
    title: "ROAS",
    subtitle: "Return On Ad Spend",
    description: "Revenue generated for every pound spent on ads.",
    example: "£1,000 revenue ÷ £200 spend = 5× ROAS",
  },
  {
    icon: DollarSign,
    title: "Conversion Rate",
    subtitle: "Conversion Rate",
    description: "Percentage of clicks that turn into customers.",
    example: "10 sales ÷ 100 clicks = 10% conversion rate",
  },
];

const KeyMetrics = () => {
  const [selectedMetric, setSelectedMetric] = useState(0);
  const ActiveIcon = metrics[selectedMetric].icon;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Key Metrics Every Business Owner Must Know
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          You don't need to be a marketer — but you must understand these numbers.
        </p>
      </div>

      {/* Metric Selector */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          const isActive = selectedMetric === idx;

          return (
            <button
              key={idx}
              onClick={() => setSelectedMetric(idx)}
              className={`p-4 rounded-lg border-2 text-left transition-all dark:border-gray-700 ${
                isActive
                  ? "border-[#0045EF] bg-[#0045EF]/10 shadow-md scale-105"
                  : "border-gray-200 hover:border-[#0045EF] dark:bg-gray-800 dark:hover:border-[#0045EF]"
              }`}
            >
              <Icon
                className={`h-6 w-6 mb-2 ${
                  isActive ? "text-[#0045EF]" : "text-gray-400 dark:text-gray-500"
                }`}
              />
              <div
                className={`font-bold text-lg ${
                  isActive ? "text-gray-900 dark:text-gray-100" : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {metric.title}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {metric.subtitle}
              </div>
            </button>
          );
        })}
      </div>

      {/* Metric Detail */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-8 animate-in fade-in duration-300">
        <div className="flex items-start gap-6">
          <div className="p-4 rounded-xl bg-[#0045EF]/10 dark:bg-[#0045EF]/20">
            <ActiveIcon className="h-12 w-12 text-[#0045EF]" />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                {metrics[selectedMetric].title}
              </h3>
              <span className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium">
                {metrics[selectedMetric].subtitle}
              </span>
            </div>

            <p className="text-lg mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
              {metrics[selectedMetric].description}
            </p>

            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <p className="text-sm font-mono text-gray-900 dark:text-gray-100">
                {metrics[selectedMetric].example}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Warning */}
      <div className="bg-[#0045EF]/10 dark:bg-[#0045EF]/20 rounded-xl border-2 border-[#0045EF]/20 shadow-sm p-8">
        <p className="text-xl font-semibold text-center text-[#0045EF] dark:text-[#0045EF]">
          <AlertTriangle className="h-6 w-6 inline mr-2" />If you don't track these, you're gambling — not advertising.
        </p>
      </div>
    </div>
  );
};

export default KeyMetrics;
