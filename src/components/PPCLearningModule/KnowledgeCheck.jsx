import React from "react";
import { CheckCircle, Lightbulb } from "lucide-react";

const questions = [
  {
    q: "Question 1",
    a: "What does PPC stand for and when do you pay? Answer: Pay-Per-Click. You only pay when someone clicks your ad.",
  },
  {
    q: "Question 2",
    a: "What's more important: CTR or ROAS? Answer: ROAS. A high CTR is worthless if the clicks don't convert to profit.",
  },
  {
    q: "Question 3",
    a: "Should you send PPC traffic to your homepage? Answer: No. Always use dedicated landing pages designed for specific campaigns.",
  },
  {
    q: "Question 4",
    a: "What's the first thing you must know before running PPC? Answer: Your numbers — CLV, profit margins, and how much you can afford to pay per customer.",
  },
];

const KnowledgeCheck = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Knowledge Check
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Test your understanding of PPC fundamentals.
        </p>
      </div>

      {/* Questions */}
      <div className="grid md:grid-cols-2 gap-6">
        {questions.map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6
                       hover:shadow-lg transition-shadow"
          >
            <CheckCircle className="h-10 w-10 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{item.q}</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      {/* Completion Message */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-gray-100">
          <Lightbulb className="h-5 w-5 text-[#0045EF]" />
          Ready to Launch?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          You now understand PPC fundamentals. Start small, track everything,
          and scale what works. Remember: PPC is a skill that improves with
          practice and data.
        </p>
      </div>
    </div>
  );
};

export default KnowledgeCheck;
