import {
  Zap,
  TrendingUp,
  Clock,
  Target,
} from "lucide-react";

const PPCvsOrganic = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h2 className="text-4xl font-bold mb-4">PPC vs Organic</h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Understanding when to use paid ads versus organic marketing strategies.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left p-4 font-semibold">Channel</th>
                <th className="text-left p-4 font-semibold">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-purple-600" />
                    Speed
                  </div>
                </th>
                <th className="text-left p-4 font-semibold">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                    Cost
                  </div>
                </th>
                <th className="text-left p-4 font-semibold">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    Longevity
                  </div>
                </th>
                <th className="text-left p-4 font-semibold">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Control
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {/* SEO */}
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium">SEO</td>
                <td className="p-4 text-gray-600">Slow</td>
                <td className="p-4 text-blue-600 font-semibold">Low</td>
                <td className="p-4 text-blue-600 font-semibold">Long-term</td>
                <td className="p-4 text-gray-600">Medium</td>
              </tr>

              {/* Organic Social */}
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium">Organic Social</td>
                <td className="p-4 text-gray-600">Medium</td>
                <td className="p-4 text-blue-600 font-semibold">Low</td>
                <td className="p-4 text-gray-600">Medium</td>
                <td className="p-4 text-gray-600">Low</td>
              </tr>

              {/* Paid Ads */}
              <tr className="bg-blue-50 hover:bg-blue-100 transition-colors">
                <td className="p-4 font-bold">Paid Ads</td>
                <td className="p-4">
                  <span className="text-purple-600 font-semibold flex items-center gap-1">
                    <Zap className="h-4 w-4" />
                    Instant
                  </span>
                </td>
                <td className="p-4 text-gray-600">Medium–High</td>
                <td className="p-4 text-gray-600">Short-term</td>
                <td className="p-4 text-blue-600 font-semibold">High</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-sm p-6 border-2 border-blue-200">
        <p className="text-lg font-semibold text-center">
          👉 Smart businesses use PPC + SEO together
        </p>
      </div>
    </div>
  );
};

export default PPCvsOrganic;
