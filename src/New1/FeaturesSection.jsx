import React, { useState } from "react";
import { BarChart3, Briefcase, AtSign } from "lucide-react";

export default function NewFeaturesSection() {
  const features = [
    {
      title: "Omnichannel Marketing",
      description:
        "Get access to all mobile messaging channels in one place for personalized newsletters and promotional emails.",
      icon: BarChart3,
      image: "/n3.png",
    },
    {
      title: "Automated Marketing",
      description:
        "Create workflows that do the heavy lifting for you. Send out emails at scheduled times, automatically.",
      icon: Briefcase,
      image: "/n4.png",
    },
    {
      title: "Mobile friendly emails",
      description:
        "Send emails responsive on mobile devices. A/B test with subject lines & preview the entire text easily.",
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
            Only pay for the emails you send.
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Get unlimited subscribers on all our plans, and pay only for the
            emails you actually send.
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
                    className={`flex items-center justify-center w-12 h-10 rounded-md transition-colors ${
                      isActive 
                        ? "bg-white dark:bg-white/20" 
                        : "bg-gray-200 dark:bg-transparent"
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
                    <p className="text-gray-900 text-sm leading-relaxed">
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