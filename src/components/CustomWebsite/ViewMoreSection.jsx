import React from "react";

const ViewMoreSection = () => {
  const items = [
    {
      // title: "Pulse Media",
      // year: "2024",
      image:
        "https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=1600&auto=format&fit=crop",
    },
    {
      // title: "Zenith Finance",
      // year: "2024",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-16 py-12 bg-white dark:bg-black transition-colors duration-500">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 dark:text-white">
          View <span className="text-gray-400 dark:text-gray-400">More.</span>
        </h2>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 max-w-md text-sm">
            Discover how Scarlet partners with startups and enterprises to build high-impact digital platforms that drive long-term success.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl aspect-[4/3]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 dark:bg-black/30 group-hover:bg-black/20 dark:group-hover:bg-black/40 transition-all duration-300"></div>

            {/* Text */}
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm opacity-80">{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ViewMoreSection;
