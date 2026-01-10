const AIOpportunityChecklist = () => {
  const questions = [
    "Does this task happen frequently?",
    "Is there a pattern to how it's done?",
    "Would automation create significant time savings?",
    "Is the task data-driven rather than creative?",
  ];

  return (
    <div className="prose max-w-none space-y-8 text-gray-900 dark:text-white transition-colors duration-300">

      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        Not every problem needs AI. Here's how to spot genuine opportunities.
      </p>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Ask These Questions</h3>
        <ul className="space-y-3">
          {questions.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[var(--brand-blue)]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300">
                <span className="text-xs font-bold text-[var(--brand-blue)]">{idx + 1}</span>
              </div>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 p-6 transition-colors duration-300">
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Red Flags</h3>
        <p className="leading-relaxed text-gray-700 dark:text-gray-400">
          Avoid AI for tasks requiring deep empathy, creative strategy, or high-stakes judgment calls.
        </p>
      </div>

      <div className="bg-[var(--brand-blue)]/10 border border-[var(--brand-blue)]/20 rounded-xl p-6 transition-colors duration-300">
        <h3 className="text-lg font-semibold mb-2 text-[var(--brand-blue)]">Best Candidates</h3>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Look for high-volume, pattern-based tasks that currently consume disproportionate time.
        </p>
      </div>

    </div>
  );
};

export default AIOpportunityChecklist;
