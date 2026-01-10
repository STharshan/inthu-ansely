import React, { useState } from "react";

export default function UserExperienceSection() {
  const [active, setActive] = useState("transitions");

  const content = {
    transitions: {
      title: "Instant page transitions",
      desc: "No full page reloads—navigation feels seamless and fast",
      tip: "Try clicking between sections to feel the smooth transitions",
      icon: (
        <svg
          className="h-10 w-10 text-[var(--brand-blue)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M14 4.1 12 6" />
          <path d="m5.1 8-2.9-.8" />
          <path d="m6 12-1.9 2" />
          <path d="M7.2 2.2 8 5.1" />
          <path d="M9 9l11 4-4 1-1 4z" />
        </svg>
      ),
    },
    interactions: {
      title: "App-like interactions",
      desc: "Hover effects, animations, and real-time updates",
      tip: "Hover over performance elements to see live feedback",
      icon: (
        <svg
          className="h-10 w-10 text-[var(--brand-blue)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
          <path d="M20 3v4M22 5h-4" />
        </svg>
      ),
    },
    forms: {
      title: "Smart forms",
      desc: "Auto-validation, multi-step flows, and better UX",
      tip: "Forms that save progress and provide instant feedback",
      icon: (
        <svg
          className="h-10 w-10 text-[var(--brand-blue)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path d="M7 12h.01M12 12h.01M17 12h.01" />
        </svg>
      ),
    },
    personalization: {
      title: "Dynamic personalization",
      desc: "Content adapts to user behavior and preferences",
      tip: "Tailored experiences that increase engagement",
      icon: (
        <svg
          className="h-10 w-10 text-[var(--brand-blue)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="8" cy="8" r=".5" fill="currentColor" />
          <circle cx="16" cy="10" r=".5" fill="currentColor" />
          <circle cx="10" cy="14" r=".5" fill="currentColor" />
        </svg>
      ),
    },
  };

  return (
    <section className="py-24 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 transition-colors text-black dark:text-white">
      <div className="container mx-auto px-4 max-w-4xl space-y-12">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Better User Experience =
            <span className="text-[var(--brand-blue)]"> More Leads</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            React enables interactions that keep visitors engaged and convert them into customers.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            ["transitions", "Instant page transitions"],
            ["interactions", "App-like interactions"],
            ["forms", "Smart forms"],
            ["personalization", "Dynamic personalization"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-4 py-2 rounded-md text-sm font-medium border transition
                ${
                  active === key
                    ? "bg-[var(--brand-blue)] text-white border-[var(--brand-blue)]"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Dynamic Content Card */}
        <div className="rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-8 space-y-6 transition-colors">
          <div className="flex items-center gap-4">
            {content[active].icon}
            <div>
              <h3 className="text-2xl font-bold">{content[active].title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-1">{content[active].desc}</p>
            </div>
          </div>

          <div className="rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-6 transition-colors">
            <p className="text-sm text-gray-700 dark:text-gray-300">{content[active].tip}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["↑ 40%", "Longer session duration"],
            ["↑ 35%", "Higher engagement rates"],
            ["↑ 25%", "More enquiries & bookings"],
          ].map(([value, label], i) => (
            <div key={i} className="rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-6 text-center transition-colors">
              <div className="text-3xl font-extrabold text-[var(--brand-blue)] mb-2">
                {value}
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
