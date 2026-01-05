import { Check } from "lucide-react";

const AINextSteps = () => {
  const steps = [
    "Audit your daily tasks for AI opportunities",
    "Identify one high-impact process to automate",
    "Ensure your data and processes are documented",
    "Start small with a pilot project",
    "Measure results and iterate",
  ];

  return (
    <div className="prose max-w-none space-y-8">
      <p className="text-lg leading-relaxed text-gray-400">
        You've learned the fundamentals. Now it's time to apply them.
      </p>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Your Next Steps</h3>
        <div className="space-y-3">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl border border-gray-700 p-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                <span className="leading-relaxed mt-1">{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-orange-600 text-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-3">Remember</h3>
        <p className="text-lg leading-relaxed">
          AI is a tool for leverage, not a magic solution. Focus on clear problems
          with measurable outcomes.
        </p>
      </div>

      <div className="bg-green-600/10 border border-green-600/20 rounded-xl p-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 text-green-400 rounded-full mb-4">
          <Check className="w-5 h-5" />
          <span className="font-semibold">Course Complete!</span>
        </div>
        <p className="text-gray-400">
          You're now equipped to identify and implement AI solutions in your business.
        </p>
      </div>
    </div>
  );
};

export default AINextSteps;
