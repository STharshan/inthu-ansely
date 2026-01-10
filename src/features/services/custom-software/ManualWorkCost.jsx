import { Users, TrendingUp, Zap, Target } from "lucide-react";

const ManualWorkCost = () => {
  const items = [
    {
      icon: Users,
      title: "Admin-heavy workflows",
      desc: "Staff spending hours on tasks that could be automated",
      stat: "10-15 hours/week per employee",
    },
    {
      icon: TrendingUp,
      title: "Copying data between systems",
      desc: "Manual data entry leading to errors and delays",
      stat: "Up to 20% error rate",
    },
    {
      icon: Zap,
      title: "Chasing updates & approvals",
      desc: "Time lost following up on processes and payments",
      stat: "5-8 hours/week per manager",
    },
    {
      icon: Target,
      title: "Disconnected tools",
      desc: "Using 5–6 tools that don't talk to each other",
      stat: "30% productivity loss",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
          The Real Cost of Manual Work
        </h2>
        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300">
          Most businesses underestimate how much time and money is lost to inefficient processes. 
          That time compounds. And it quietly blocks scale.
        </p>
      </div>

      {/* Cost Items */}
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 hover:shadow-lg transition-all hover:scale-105"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">{item.title}</h3>
              <p className="text-sm text-gray-800 dark:text-gray-300 mb-3 leading-relaxed">{item.desc}</p>
              <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full inline-block">
                {item.stat}
              </div>
            </div>
          );
        })}
      </div>

      {/* Conclusion */}
      <div className="bg-blue-600 dark:bg-blue-700 text-white rounded-xl border border-blue-600 dark:border-blue-700 shadow-sm p-6 md:p-8 transition-colors">
        <p className="text-lg md:text-xl font-semibold text-center">
          Custom software removes friction by designing your business logic directly into a system — the way you actually operate.
        </p>
      </div>
    </div>
  );
};

export default ManualWorkCost;
