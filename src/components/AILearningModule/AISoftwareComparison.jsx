import { ChevronRight } from "lucide-react";

const AISoftwareComparison = () => {
  const traditional = [
    "Rule-based",
    "Predictable outputs",
    "Explicit programming",
    "Fixed logic",
  ];

  const ai = [
    "Pattern-based",
    "Adaptive outputs",
    "Learning from data",
    "Flexible logic",
  ];

  return (
    <div className="prose max-w-none space-y-8">
      <p className="text-lg leading-relaxed text-gray-400">
        Understanding the difference helps you choose the right tool for the job.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Traditional Software */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
          <h3 className="text-xl font-semibold mb-4">
            Traditional Software
          </h3>
          <ul className="space-y-2">
            {traditional.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* AI Software */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
          <h3 className="text-xl font-semibold mb-4">AI Software</h3>
          <ul className="space-y-2">
            {ai.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-orange-600/10 border border-orange-600/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-2">When to Use Each</h3>
        <p className="leading-relaxed">
          Use traditional software for precise, repeatable tasks. Use AI for complex
          pattern recognition and adaptive responses.
        </p>
      </div>
    </div>
  );
};

export default AISoftwareComparison;
