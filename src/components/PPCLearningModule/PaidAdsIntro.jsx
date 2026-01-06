import { Zap, Clock, Target, Lightbulb } from "lucide-react";

const PaidAdsIntro = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          What Is Paid Ads (PPC)?
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          PPC (Pay-Per-Click) is a digital advertising model where you pay only
          when someone takes action (clicks, watches, submits, or converts).
        </p>
      </div>

      {/* PPC Concept */}
      <div className="bg-gradient-to-br from-[#0045EF]/10 to-purple-50 dark:from-[#0045EF]/20 rounded-xl shadow-sm p-8 border-2 border-[#0045EF]/30 dark:border-[#0045EF]/50">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#0045EF] rounded-lg">
            <Zap className="h-8 w-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              Think of PPC as:
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              A tap you can turn on or off for demand.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 hover:shadow-lg transition-shadow">
          <Clock className="h-10 w-10 text-[#0045EF] mb-4" />
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            Instant Results
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Instead of waiting months for SEO, PPC puts your business in front of
            buyers today.
          </p>
        </div>

        <div className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 hover:shadow-lg transition-shadow">
          <Target className="h-10 w-10 text-[#0045EF] mb-4" />
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            Full Control
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            You control budget, audience, message, and speed. Scale up or down as
            needed.
          </p>
        </div>
      </div>

      {/* Module Purpose */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
          <Lightbulb className="h-5 w-5 text-[#0045EF]" />
          Module Purpose
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          This module teaches business owners how paid ads actually work, when to
          use them, and how to avoid burning money. By the end, you'll understand
          how PPC fits into a growth system, not just "boosting posts."
        </p>
      </div>
    </div>
  );
};

export default PaidAdsIntro;
