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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Custom Software — Think Like a Tech Founder
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Every successful business reaches a point where off-the-shelf tools start slowing it down.
          As the leader in your field, your time should be spent on growth, strategy, and decisions that move
          the business forward — not buried in repetitive admin, disconnected systems, or manual processes that drain your team's energy.
        </p>
      </div>

      {/* Module Objective */}
      <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-orange-100 rounded-lg">
            <Target className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Module Objective</h3>
            <p className="text-gray-600 leading-relaxed">
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
              className="bg-white rounded-xl border shadow-sm p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomSoftwareModule;
