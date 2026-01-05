import { Check } from "lucide-react";

const AIImplementationChecklist = () => {
  const prerequisites = [
    { title: "Clean Data", desc: "Your data is organized and accessible" },
    { title: "Clear Processes", desc: "You understand your current workflows" },
    { title: "Defined Goals", desc: "You know what success looks like" },
    { title: "Team Buy-in", desc: "Your team is ready for change" },
  ];

  return (
    <div className="prose max-w-none space-y-8">
      <p className="text-lg leading-relaxed text-gray-400">
        Before implementing AI, ensure your foundation is solid.
      </p>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Prerequisites</h3>
        <div className="space-y-3">
          {prerequisites.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl border border-gray-700 p-4"
            >
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-orange-600/10 border border-orange-600/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-2">Readiness Check</h3>
        <p className="leading-relaxed">
          If you can't clearly explain a process to a human, AI won't be able to
          automate it effectively.
        </p>
      </div>
    </div>
  );
};

export default AIImplementationChecklist;
