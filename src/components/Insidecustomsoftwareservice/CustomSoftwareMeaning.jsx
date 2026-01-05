import { CircleCheck } from "lucide-react";

const CustomSoftwareMeaning = () => {
  const keyPoints = [
    "Software built around your business, not the other way round",
    "Automating tasks you already do every day",
    "Giving you visibility, control, and speed",
  ];

  const examples = [
    {
      title: "Internal dashboards",
      desc: "Replacing spreadsheets with real-time data visualization",
    },
    {
      title: "Automated workflows",
      desc: "Instead of manual follow-ups and reminders",
    },
    {
      title: "Custom CRM, ERP, or booking systems",
      desc: "Designed specifically for your business processes",
    },
    {
      title: "Tools that scale",
      desc: "Growing seamlessly alongside your business",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Custom Software Really Means
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Custom software isn't "big tech" or overkill. It's simply software built around your business, not the other way round.
        </p>
      </div>

      {/* Key Points */}
      <div className="grid gap-4">
        {keyPoints.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-xl border shadow-sm p-5 border-l-4 border-l-orange-600"
          >
            <div className="flex items-start gap-3">
              <CircleCheck className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">{item}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Examples */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Examples Include:</h3>
        <div className="space-y-4">
          {examples.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border shadow-sm p-6 hover:border-orange-500 transition-colors"
            >
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-gray-900 text-white rounded-xl border shadow-sm p-6 md:p-8 text-center">
        <p className="text-xl font-semibold mb-2">Built once. Used every day.</p>
        <p className="text-gray-300">Investment that compounds over time</p>
      </div>
    </div>
  );
};

export default CustomSoftwareMeaning;
