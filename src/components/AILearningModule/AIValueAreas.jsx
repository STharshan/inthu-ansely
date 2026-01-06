const AIValueAreas = () => {
  const areas = [
    { title: "Customer Service", desc: "Handle routine inquiries 24/7" },
    { title: "Data Analysis", desc: "Extract insights from complex datasets" },
    { title: "Content Creation", desc: "Generate drafts and variations quickly" },
    { title: "Process Automation", desc: "Streamline repetitive workflows" },
  ];

  return (
    <div className="prose max-w-none space-y-8 text-gray-900 dark:text-white transition-colors duration-300">

      {/* Intro paragraph */}
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        AI creates the most value in areas where speed, scale, and consistency matter.
      </p>

      {/* Value areas grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {areas.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 p-6 transition-colors duration-300"
          >
            <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{item.title}</h4>
            <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Impact Areas card */}
      <div className="bg-[#0045EF]/10 border border-[#0045EF]/20 rounded-xl p-6 transition-colors duration-300">
        <h3 className="text-lg font-semibold mb-2 text-[#0045EF]">Impact Areas</h3>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Focus on tasks that happen frequently, follow patterns, and don't require creative problem-solving.
        </p>
      </div>

    </div>
  );
};

export default AIValueAreas;
