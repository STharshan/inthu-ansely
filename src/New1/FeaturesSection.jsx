import React, { useState } from "react";
import { BarChart3, Briefcase, AtSign } from "lucide-react";

export default function NewFeaturesSection() {
  const features = [
    {
      title: "Instant Invoicing",
      description:
        "Create and send invoices directly from your phone in just a few clicks. No laptop needed — invoice customers there and then while you’re with them.",
      icon: BarChart3,
      image: "/n3.png",
    },
    {
      title: "Built for Client-Facing Businesses",
      description:
        "Designed for teams on the move. Whether onsite or meeting clients, send professional invoices immediately without returning to the office.",
      icon: Briefcase,
      image: "/n4.png",
    },
    {
      title: "Professional Business Image",
      description:
        "Stop writing invoices on paper. Present your business professionally with clean, branded digital invoices that build trust and credibility.",
      icon: AtSign,
      image: "/n5.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-white dark:bg-black text-slate-900 dark:text-white py-20 px-6 lg:px-20 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Top Text */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-[#0045EF] uppercase mb-4 font-bold">
            Features 2
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Faster Payments
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Send invoices instantly after completing work, reducing delays and helping you get paid quicker.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Features */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer flex gap-4 p-6 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-[#0045EF] shadow-xl dark:shadow-none backdrop-blur-md scale-105"
                      : "hover:bg-gray-200/50 dark:hover:bg-white/5"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-18 h-10 rounded-md transition-colors ${
                      isActive 
                        ? "bg-white dark:bg-white/80" 
                        : "bg-gray-200 dark:bg-white/80"
                    }`}
                  >
                    <Icon
                      className="text-[#0045EF]"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
                      {feature.title}
                    </h4>
                    <p className="text-gray-900 dark:text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Dynamic Image */}
          <div className="relative flex justify-center">
            <div className="bg-white dark:bg-[#1e2e54] rounded-2xl p-4 shadow-2xl w-full max-w-md sm:max-w-lg lg:max-w-xl transition-all duration-500 ring-1 ring-gray-200 dark:ring-0">
              <img
                key={features[activeIndex].image}
                src={features[activeIndex].image}
                alt="Dashboard Preview"
                className="rounded-xl w-full object-cover transition-opacity duration-500"
              />
            </div>

            {/* Decorative Circle */}
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-orange-500 rounded-full opacity-80 blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}