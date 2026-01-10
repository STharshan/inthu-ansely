import { ChevronRight, Check } from "lucide-react";

const FounderBottleneck = () => {
  return (
    <div className="prose max-w-none space-y-8 text-gray-900 dark:text-white transition-colors duration-300">
      
      {/* Intro paragraph */}
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        Most businesses don't have a growth problem. They have a founder bottleneck.
      </p>

      {/* Founder roles */}
      <div className="space-y-4">
        <p className="leading-relaxed">As a business grows, the founder often becomes:</p>
        <ul className="space-y-2">
          {[
            "The decision-maker",
            "The problem-solver",
            "The quality controller",
            "The fallback when systems fail",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <ChevronRight className="w-5 h-5 text-[var(--brand-blue)] flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Stress explanation */}
      <div className="space-y-4">
        <p className="leading-relaxed">
          This creates stress, delays, and limits scale.
        </p>
        <blockquote className="border-l-4 border-[var(--brand-blue)] pl-6 py-2 italic text-lg text-gray-700 dark:text-gray-300">
          If everything needs you, growth becomes impossible.
        </blockquote>
      </div>

      {/* Key shift card */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 p-6 transition-colors duration-300">
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Key Shift in Thinking</h3>
        <p className="text-lg mb-3 italic text-gray-700 dark:text-gray-300">
          "If I had an unlimited team, what would I delegate first?"
        </p>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          The answer reveals where your business is leaking time and energy.
        </p>
      </div>

      {/* What should not require you */}
      <div className="space-y-3">
        <p className="leading-relaxed">Anything that:</p>
        <ul className="space-y-2">
          {[
            "Happens repeatedly",
            "Follows a predictable pattern",
            "Does not require emotional intelligence or creativity",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[var(--brand-blue)] flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="leading-relaxed">…should not require you.</p>
        <p className="leading-relaxed font-medium">
          That is where AI becomes relevant.
        </p>
      </div>

      {/* Core idea card */}
      <div className="bg-[var(--brand-blue)]/10 border border-[var(--brand-blue)]/20 rounded-xl p-6 transition-colors duration-300">
        <h3 className="text-lg font-semibold mb-2 text-[var(--brand-blue)]">Core Idea</h3>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          AI exists to remove the founder from unnecessary work, not remove control.
        </p>
      </div>
    </div>
  );
};

export default FounderBottleneck;
