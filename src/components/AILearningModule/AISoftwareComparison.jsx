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
    <div className="prose max-w-none space-y-8 text-gray-900 dark:text-white transition-colors duration-300">

      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        Understanding the difference helps you choose the right tool for the job.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Traditional Software */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 p-6 transition-colors duration-300">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Traditional Software
          </h3>
          <ul className="space-y-2">
            {traditional.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* AI Software */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 p-6 transition-colors duration-300">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            AI Software
          </h3>
          <ul className="space-y-2">
            {ai.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-[#0045EF] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-[#0045EF]/10 border border-[#0045EF]/20 rounded-xl p-6 transition-colors duration-300">
        <h3 className="text-lg font-semibold mb-2 text-[#0045EF]">When to Use Each</h3>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Use traditional software for precise, repeatable tasks. Use AI for complex
          pattern recognition and adaptive responses.
        </p>
      </div>
    </div>
  );
};

export default AISoftwareComparison;
