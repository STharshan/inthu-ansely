import { Zap, TrendingUp, Clock, Target, ArrowRight } from "lucide-react";

const PPCvsOrganic = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          PPC vs Organic
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Understanding when to use paid ads versus organic marketing strategies.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Channel</th>
                <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-[#0045EF]" />
                    Speed
                  </div>
                </th>
                <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-[#0045EF]" />
                    Cost
                  </div>
                </th>
                <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#0045EF]" />
                    Longevity
                  </div>
                </th>
                <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-[#0045EF]" />
                    Control
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {/* SEO */}
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                <td className="p-4 font-medium text-gray-900 dark:text-white">SEO</td>
                <td className="p-4 text-gray-600 dark:text-gray-300">Slow</td>
                <td className="p-4 text-[#0045EF] font-semibold">Low</td>
                <td className="p-4 text-[#0045EF] font-semibold">Long-term</td>
                <td className="p-4 text-gray-600 dark:text-gray-300">Medium</td>
              </tr>

              {/* Organic Social */}
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                <td className="p-4 font-medium text-gray-900 dark:text-white">Organic Social</td>
                <td className="p-4 text-gray-600 dark:text-gray-300">Medium</td>
                <td className="p-4 text-[#0045EF] font-semibold">Low</td>
                <td className="p-4 text-gray-600 dark:text-gray-300">Medium</td>
                <td className="p-4 text-gray-600 dark:text-gray-300">Low</td>
              </tr>

              {/* Paid Ads */}
              <tr className="bg-[#0045EF]/10 dark:bg-[#0045EF]/20 hover:bg-[#0045EF]/20 dark:hover:bg-[#0045EF]/30 transition-colors">
                <td className="p-4 font-bold text-gray-900 dark:text-white">Paid Ads</td>
                <td className="p-4">
                  <span className="text-[#0045EF] font-semibold flex items-center gap-1">
                    <Zap className="h-4 w-4" />
                    Instant
                  </span>
                </td>
                <td className="p-4 text-gray-600 dark:text-gray-300">Medium–High</td>
                <td className="p-4 text-gray-600 dark:text-gray-300">Short-term</td>
                <td className="p-4 text-[#0045EF] font-semibold">High</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-[#0045EF]/10 dark:bg-[#0045EF]/20 rounded-xl shadow-sm p-6 border border-[#0045EF]/20">
        <p className="text-lg font-semibold text-center text-gray-900 dark:text-white">
          <ArrowRight className="h-5 w-5 inline mr-1" /> Smart businesses use PPC + SEO together
        </p>
      </div>
    </div>
  );
};

export default PPCvsOrganic;
