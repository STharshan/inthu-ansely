import { Check } from "lucide-react";

const AIImplementationChecklist = () => {
  const prerequisites = [
    { title: "Clean Data", desc: "Your data is organized and accessible" },
    { title: "Clear Processes", desc: "You understand your current workflows" },
    { title: "Defined Goals", desc: "You know what success looks like" },
    { title: "Team Buy-in", desc: "Your team is ready for change" },
  ];

  return (
    <div className="prose max-w-none space-y-8 text-gray-900 dark:text-white transition-colors duration-300">
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        Before implementing AI, ensure your foundation is solid.
      </p>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-[#0045EF]">Prerequisites</h3>
        <div className="space-y-3">
          {prerequisites.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 p-4 transition-colors duration-300"
            >
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#0045EF] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#0045EF]/10 border border-[#0045EF]/20 rounded-xl p-6 transition-colors duration-300">
        <h3 className="text-lg font-semibold mb-2 text-[#0045EF]">Readiness Check</h3>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          If you can't clearly explain a process to a human, AI won't be able to
          automate it effectively.
        </p>
      </div>
    </div>
  );
};

export default AIImplementationChecklist;
