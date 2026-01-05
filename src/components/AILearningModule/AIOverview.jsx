import { Check } from "lucide-react";

const AIOverview = () => {
  return (
    <div className="prose max-w-none space-y-8">
      <p className="text-lg leading-relaxed text-gray-400">
        AI isn't magic. It's pattern recognition at scale.
      </p>

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
              <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
        <h3 className="text-xl font-semibold mb-3">What AI Is NOT</h3>
        <p className="leading-relaxed text-gray-400">
          AI cannot replace human judgment, creativity, or emotional intelligence.
          It's a tool that amplifies human capabilities, not a replacement for them.
        </p>
      </div>

      <div className="bg-orange-600/10 border border-orange-600/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-2">Key Insight</h3>
        <p className="leading-relaxed">
          The best AI implementations combine machine efficiency with human oversight.
        </p>
      </div>
    </div>
  );
};

export default AIOverview;
