import React, { useState } from "react";
import { BarChart3, Briefcase, AtSign } from "lucide-react";

export default function NewFeaturesSection() {
  const features = [
    {
      title: "Instant Invoicing",
      description:
        "Create and send invoices directly from your phone in just a few clicks. No laptop needed — invoice customers there and then while you're with them.",
      icon: BarChart3,
      image: "/in1.png",
    },
    {
      title: "Built for Client-Facing Businesses",
      description:
        "Designed for teams on the move. Whether onsite or meeting clients, send professional invoices immediately without returning to the office.",
      icon: Briefcase,
      image: "/in2.png",
    },
    {
      title: "Professional Business Image",
      description:
        "Stop writing invoices on paper. Present your business professionally with clean, branded digital invoices that build trust and credibility.",
      icon: AtSign,
      image: "/in3.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-white dark:bg-black text-slate-900 dark:text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 xl:px-20 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Top Text */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="text-xs sm:text-sm tracking-widest text-[#0045EF] uppercase mb-3 sm:mb-4 font-bold">
            Features 2
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            Faster Payments
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed px-2">
            Send invoices instantly after completing work, reducing delays and helping you get paid quicker.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* Image — shown first on mobile, second on desktop */}
          <div className="relative flex justify-center w-full order-first lg:order-last">
            <div className="bg-white dark:bg-[#1e2e54] h-140 rounded-2xl p-3 sm:p-4 shadow-2xl w-full max-w-xs sm:max-w-md lg:max-w-xl transition-all duration-500 ring-1 ring-gray-200 dark:ring-0">
              <img
                key={features[activeIndex].image}
                src={features[activeIndex].image}
                alt="Dashboard Preview"
                className="rounded-xl w-full h-full object-center transition-opacity duration-500 aspect-[4/3] sm:aspect-auto"
              />
            </div>
            {/* Decorative Circle */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-14 h-14 sm:w-20 sm:h-20 bg-orange-500 rounded-full opacity-80 blur-sm pointer-events-none"></div>
          </div>

          {/* Left Features */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 w-full order-last lg:order-first">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer flex gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-[#0045EF] shadow-xl dark:shadow-none backdrop-blur-md scale-[1.02] sm:scale-105"
                      : "hover:bg-gray-200/50 dark:hover:bg-white/5"
                  }`}
                >
                  {/* Icon Box */}
                  <div
                    className={`flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-md transition-colors ${
                      isActive
                        ? "bg-white dark:bg-white/80"
                        : "bg-gray-200 dark:bg-white/80"
                    }`}
                  >
                    <Icon
                      size={20}
                      className="text-[#0045EF]"
                    />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <h4 className={`font-semibold text-base sm:text-lg mb-1 sm:mb-2 leading-snug ${
                      isActive ? "text-white" : "text-slate-900 dark:text-white"
                    }`}>
                      {feature.title}
                    </h4>
                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      isActive ? "text-blue-100" : "text-gray-600 dark:text-gray-300"
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}