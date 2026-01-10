import { Check, ChevronRight } from "lucide-react";

const AIStrengthsAndLimits = () => {
  const strengths = [
    "Works 24/7",
    "Processes data instantly",
    "Never gets tired",
    "Consistent quality",
  ];

  const limitations = [
    "No emotional intelligence",
    "Needs clear instructions",
    "Can't be truly creative",
    "Requires oversight",
  ];

  return (
    <div className="prose max-w-none space-y-8 text-gray-900 dark:text-white transition-colors duration-300">
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        Think of AI as a specialized team member with specific strengths and limitations.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* AI Strengths */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 p-6 transition-colors duration-300">
          <h3 className="text-xl font-semibold mb-4 text-[var(--brand-blue)]">AI Strengths</h3>
          <ul className="space-y-2">
            {strengths.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[var(--brand-blue)] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* AI Limitations */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 p-6 transition-colors duration-300">
          <h3 className="text-xl font-semibold mb-4 text-[var(--brand-blue)]">AI Limitations</h3>
          <ul className="space-y-2">
            {limitations.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-[var(--brand-blue)] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-[var(--brand-blue)]/10 border border-[var(--brand-blue)]/20 rounded-xl p-6 transition-colors duration-300">
        <h3 className="text-lg font-semibold mb-2 text-[var(--brand-blue)]">Integration Strategy</h3>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          AI should complement your team's skills, not replace their judgment. Use it for efficiency, not decision-making.
        </p>
      </div>
    </div>
  );
};

export default AIStrengthsAndLimits;
