import { ChevronRight, Check } from "lucide-react";

const FounderBottleneck = () => {
  return (
    <div className="prose max-w-none space-y-8">
      <p className="text-lg leading-relaxed text-gray-400">
        Most businesses don't have a growth problem. They have a founder bottleneck.
      </p>

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
              <ChevronRight className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <p className="leading-relaxed">
          This creates stress, delays, and limits scale.
        </p>
        <blockquote className="border-l-4 border-orange-600 pl-6 py-2 italic text-lg">
          If everything needs you, growth becomes impossible.
        </blockquote>
      </div>

      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
        <h3 className="text-xl font-semibold mb-3">Key Shift in Thinking</h3>
        <p className="text-lg mb-3 italic">
          "If I had an unlimited team, what would I delegate first?"
        </p>
        <p className="leading-relaxed text-gray-400">
          The answer reveals where your business is leaking time and energy.
        </p>
      </div>

      <div className="space-y-3">
        <p className="leading-relaxed">Anything that:</p>
        <ul className="space-y-2">
          {[
            "Happens repeatedly",
            "Follows a predictable pattern",
            "Does not require emotional intelligence or creativity",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="leading-relaxed">…should not require you.</p>
        <p className="leading-relaxed font-medium">
          That is where AI becomes relevant.
        </p>
      </div>

      <div className="bg-orange-600/10 border border-orange-600/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-2">Core Idea</h3>
        <p className="leading-relaxed">
          AI exists to remove the founder from unnecessary work, not remove control.
        </p>
      </div>
    </div>
  );
};

export default FounderBottleneck;
