const AIValueAreas = () => {
  const areas = [
    { title: "Customer Service", desc: "Handle routine inquiries 24/7" },
    { title: "Data Analysis", desc: "Extract insights from complex datasets" },
    { title: "Content Creation", desc: "Generate drafts and variations quickly" },
    { title: "Process Automation", desc: "Streamline repetitive workflows" },
  ];

  return (
    <div className="prose max-w-none space-y-8">
      <p className="text-lg leading-relaxed text-gray-400">
        AI creates the most value in areas where speed, scale, and consistency matter.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {areas.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl border border-gray-700 p-6"
          >
            <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-orange-600/10 border border-orange-600/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-2">Impact Areas</h3>
        <p className="leading-relaxed">
          Focus on tasks that happen frequently, follow patterns, and don't require creative problem-solving.
        </p>
      </div>
    </div>
  );
};

export default AIValueAreas;
