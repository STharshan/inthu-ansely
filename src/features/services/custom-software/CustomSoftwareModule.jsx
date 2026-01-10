import { Target, Lightbulb, Zap } from "lucide-react";

const CustomSoftwareModule = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Strategic Thinking",
      desc: "Learn to question processes and identify what should be automated rather than optimized",
    },
    {
      icon: Zap,
      title: "Remove Friction",
      desc: "Understand the real cost of manual work and how it compounds over time",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
          Custom Software — Think Like a Tech Founder
        </h2>
        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300">
          Every successful business reaches a point where off-the-shelf tools start slowing it down.
          As the leader in your field, your time should be spent on growth, strategy, and decisions that move
          the business forward — not buried in repetitive admin, disconnected systems, or manual processes that drain your team's energy.
        </p>
      </div>

      {/* Module Objective */}
      <div className="bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-xl p-6 md:p-8 transition-colors">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Module Objective</h3>
            <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
              This module is about shifting your mindset from business operator to tech-enabled founder. 
              You'll learn to identify opportunities for automation and understand how custom software creates competitive advantage.
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-4">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 hover:shadow-lg transition-shadow transition-colors"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2 text-black dark:text-white">{item.title}</h3>
              <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomSoftwareModule;
