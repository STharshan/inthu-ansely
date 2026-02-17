const BuildWhatMatters = () => {
  const steps = [
    {
      num: "01",
      title: "Identify tasks wasting founder or staff time",
      desc: "We analyse your current workflows to find where time is being lost",
    },
    {
      num: "02",
      title: "Map where friction, delays, or errors occur",
      desc: "Understanding the pain points in your processes",
    },
    {
      num: "03",
      title: "Decide what should be automated, simplified, or removed",
      desc: "Strategic decisions about what deserves custom software",
    },
    {
      num: "04",
      title: "Design software that solves those exact problems",
      desc: "Building solutions tailored to your specific needs",
    },
    {
      num: "05",
      title: "Build systems that grow with your business",
      desc: "Creating scalable infrastructure for long-term success",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
          Our Approach: Build What Matters
        </h2>
        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300">
          We don't start with code. We start with your bottlenecks.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((item) => (
          <div
            key={item.num}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 md:p-8 hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-600 dark:bg-blue-700 text-white rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                {item.num}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">{item.title}</h3>
                <p className="text-gray-800 dark:text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Conclusion */}
      <div className="bg-blue-600 dark:bg-blue-700 text-white rounded-xl border border-blue-600 dark:border-blue-700 shadow-sm p-8 text-center transition-colors">
        <p className="text-xl md:text-2xl font-semibold mb-3">
          You stay focused on what matters.
        </p>
        <p className="text-lg">Your software handles the rest.</p>
      </div>
    </div>
  );
};

export default BuildWhatMatters;
