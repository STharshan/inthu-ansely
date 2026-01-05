const FounderMindset = () => {
  const processes = [
    "Eats hours every week",
    'Requires double entry or manual checking',
    'Depends on one person "just knowing how it works"',
    "Causes delays, mistakes, or missed opportunities",
  ];

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">The Founder Mindset</h2>
      </div>

      {/* Mindset Quotes */}
      <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border-2 border-orange-200">
        <h3 className="text-xl font-semibold mb-4">The best founders don't ask:</h3>
        <blockquote className="text-2xl md:text-3xl font-medium text-gray-500 italic mb-6">
          "How do I do this task faster?"
        </blockquote>

        <h3 className="text-xl font-semibold mb-4">They ask:</h3>
        <blockquote className="text-2xl md:text-3xl font-bold text-orange-600">
          "Why does this task exist at all?"
        </blockquote>
      </div>

      {/* Problematic Processes */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">If a process:</h3>
        <div className="space-y-3">
          {processes.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border shadow-sm p-4 hover:border-orange-500 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-orange-600">{idx + 1}</span>
                </div>
                <p className="leading-relaxed">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-gray-900 text-white rounded-xl border shadow-sm p-6 md:p-8">
        <p className="text-xl md:text-2xl font-semibold text-center">
          …it's a software problem, not a people problem.
        </p>
      </div>
    </div>
  );
};

export default FounderMindset;
