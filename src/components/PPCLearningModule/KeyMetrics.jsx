import React, { useState } from "react";
import {
  MousePointer,
  Target,
  BarChart3,
  TrendingUp,
  DollarSign,
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
        <h2 className="text-4xl font-bold mb-4">
          Key Metrics Every Business Owner Must Know
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
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
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                isActive
                  ? "border-blue-600 bg-blue-50 shadow-md scale-105"
                  : "border-gray-200 hover:border-blue-300"
              }`}
            >
              <Icon
                className={`h-6 w-6 mb-2 ${
                  isActive ? "text-blue-600" : "text-gray-400"
                }`}
              />
              <div className="font-bold text-lg">{metric.title}</div>
              <div className="text-xs text-gray-600 mt-1">
                {metric.subtitle}
              </div>
            </button>
          );
        })}
      </div>

      {/* Metric Detail */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 animate-in fade-in duration-300">
        <div className="flex items-start gap-6">
          <div className="p-4 rounded-xl bg-blue-50">
            <ActiveIcon className="h-12 w-12 text-blue-600" />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-3xl font-bold">
                {metrics[selectedMetric].title}
              </h3>
              <span className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 text-xs font-medium">
                {metrics[selectedMetric].subtitle}
              </span>
            </div>

            <p className="text-lg mb-4 leading-relaxed">
              {metrics[selectedMetric].description}
            </p>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm font-mono">
                {metrics[selectedMetric].example}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Warning */}
      <div className="bg-red-50 rounded-xl border-2 border-red-200 shadow-sm p-8">
        <p className="text-xl font-semibold text-center">
          ⚠️ If you don't track these, you're gambling — not advertising.
        </p>
      </div>
    </div>
  );
};

export default KeyMetrics;
