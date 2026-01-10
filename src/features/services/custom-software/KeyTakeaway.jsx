import { Lightbulb, Zap, CircleCheck } from "lucide-react";

const KeyTakeaway = () => {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
          Key Takeaway
        </h2>
      </div>

      {/* Main Takeaway */}
      <div className="bg-gray-900 dark:bg-gray-900 text-white rounded-xl border border-gray-700 shadow-sm p-8 md:p-12 transition-colors">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-xl md:text-2xl font-semibold leading-relaxed">
            If you're leading a business today, thinking like a tech founder isn't optional — it's a competitive advantage.
          </p>
        </div>
      </div>

      {/* Expertise & Role */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 md:p-8 transition-colors">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
            <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Your Expertise</h3>
          <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
            You already know your industry better than anyone. That knowledge is your competitive advantage.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 md:p-8 transition-colors">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Our Role</h3>
          <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
            Our job is to turn that knowledge into software that works for you, not against you.
          </p>
        </div>
      </div>

      {/* Leverage Statement */}
      <div className="bg-blue-600 dark:bg-blue-700 text-white rounded-xl border border-blue-600 dark:border-blue-700 shadow-sm p-8 md:p-12 text-center transition-colors">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          When you're ready, we don't just build tools —
        </h3>
        <p className="text-xl md:text-2xl font-semibold">we help you build leverage.</p>
      </div>

      {/* Module Complete Badge */}
      <div className="pt-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full transition-colors">
          <CircleCheck className="w-5 h-5" />
          <span className="font-semibold">Module Complete!</span>
        </div>
      </div>
    </div>
  );
};

export default KeyTakeaway;
