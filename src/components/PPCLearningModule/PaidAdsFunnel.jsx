import {
  MousePointer,
  FileText,
  Phone,
  Target,
  TrendingUp,
  ArrowDown,
  TriangleAlert,
} from "lucide-react";

const funnelSteps = [
  {
    icon: MousePointer,
    title: "Ad",
    desc: "Grabs attention",
    iconColor: "text-blue-600",
  },
  {
    icon: FileText,
    title: "Landing Page",
    desc: "Focused message",
    iconColor: "text-blue-600",
  },
  {
    icon: Phone,
    title: "Conversion",
    desc: "Call, form, booking",
    iconColor: "text-purple-600",
  },
  {
    icon: Target,
    title: "Follow-up",
    desc: "Sales process",
    iconColor: "text-pink-600",
  },
  {
    icon: TrendingUp,
    title: "Profit",
    desc: "Tracked & measured",
    iconColor: "text-green-600",
  },
];

const PaidAdsFunnel = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h2 className="text-4xl font-bold mb-4">
          How Paid Ads Actually Make Money
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Understanding the complete funnel from ad to profit.
        </p>
      </div>

      {/* Funnel Steps */}
      <div className="max-w-2xl mx-auto">
        {funnelSteps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={idx}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-all">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                      <Icon className={`h-8 w-8 ${step.iconColor}`} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>

                  <div className="flex-shrink-0 text-3xl font-bold text-gray-200">
                    {idx + 1}
                  </div>
                </div>
              </div>

              {idx < funnelSteps.length - 1 && (
                <div className="flex justify-center py-3">
                  <ArrowDown className="h-6 w-6 text-gray-400" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Critical Insight */}
      <div className="bg-red-50 rounded-xl border-2 border-red-200 shadow-sm p-8">
        <div className="flex items-start gap-4">
          <TriangleAlert className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold mb-2">
              Critical Insight
            </h3>
            <p className="text-lg leading-relaxed">
              💡 Ads don't fail — funnels fail.  
              If your ads aren't working, check every step of this process.
            </p>
          </div>
        </div>
      </div>

      {/* When Paid Ads Make Sense */}
      <div className="bg-gray-50 rounded-xl border border-gray-200 shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">
          When Paid Ads Make Sense
        </h3>
        <ul className="space-y-3">
          {[
            "Your service already converts (you know it works)",
            "You know your margins (profit per customer)",
            "You can handle more leads (capacity to deliver)",
            "You want predictable growth (scalable system)",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Highlight */}
      <div className="bg-blue-600 text-white rounded-xl shadow-sm p-6">
        <p className="text-xl font-semibold text-center">
          Paid ads are not magic — they are amplifiers.
        </p>
      </div>
    </div>
  );
};

export default PaidAdsFunnel;
