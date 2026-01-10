import { Check } from "lucide-react";

const AIOverview = () => {
  return (
    <div className="prose max-w-none space-y-8 text-gray-900 dark:text-white transition-colors duration-300">

      {/* Intro paragraph */}
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        AI isn't magic. It's pattern recognition at scale.
      </p>

      {/* What AI can do */}
      <div className="space-y-4">
        <p className="leading-relaxed">AI can:</p>
        <ul className="space-y-2">
          {[
            "Process large amounts of data quickly",
            "Identify patterns humans might miss",
            "Make predictions based on historical data",
            "Automate repetitive cognitive tasks",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[var(--brand-blue)] flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* What AI is NOT card */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 p-6 transition-colors duration-300">
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">What AI Is NOT</h3>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          AI cannot replace human judgment, creativity, or emotional intelligence. It's a tool that amplifies human capabilities, not a replacement for them.
        </p>
      </div>

      {/* Key Insight card */}
      <div className="bg-[var(--brand-blue)]/10 border border-[var(--brand-blue)]/20 rounded-xl p-6 transition-colors duration-300">
        <h3 className="text-lg font-semibold mb-2 text-[var(--brand-blue)]">Key Insight</h3>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          The best AI implementations combine machine efficiency with human oversight.
        </p>
      </div>

    </div>
  );
};

export default AIOverview;
