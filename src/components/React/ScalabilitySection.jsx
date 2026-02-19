import React from "react";

export default function ScalabilitySection() {
  return (
    <>
      <div
        className="min-w-full h-full overflow-y-auto bg-white dark:bg-black transition-colors duration-500"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <section className="py-24 border-t border-gray-200 dark:border-gray-800 transition-colors">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-12">

              {/* Header */}
              <div className="space-y-4 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white">
                  Build Once,
                  <span className="text-blue-600 dark:text-cyan-400"> Grow Forever</span>
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
                  While traditional website builders have scaling limitations, React scales horizontally
                  with your business.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {[{
                  title: "Add features without rebuilding",
                  desc: "Component-based architecture",
                  icon: (
                    <svg
                      className="h-6 w-6 text-blue-600 dark:text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  )
                },{
                  title: "Plug into CRMs, ERPs, booking systems",
                  desc: "Easy integrations",
                  icon: (
                    <svg
                      className="h-6 w-6 text-blue-600 dark:text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  )
                },{
                  title: "Power websites, dashboards & apps",
                  desc: "One codebase",
                  icon: (
                    <svg
                      className="h-6 w-6 text-blue-600 dark:text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20" />
                    </svg>
                  )
                },{
                  title: "Multi-location & franchise scaling",
                  desc: "Built for growth",
                  icon: (
                    <svg
                      className="h-6 w-6 text-blue-600 dark:text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                      <path d="M18 17V9" />
                      <path d="M13 17V5" />
                      <path d="M8 17v-3" />
                    </svg>
                  )
                }].map((card, i) => (
                  <div
                    key={i}
                    className="group rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <div className="space-y-4">
                      <div className="h-12 w-12 rounded-lg bg-blue-50 dark:bg-cyan-400/10 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-cyan-400/20 transition">
                        {card.icon}
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-semibold text-black dark:text-white">{card.title}</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-400">{card.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Perfect for */}
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/70 p-8 transition-colors">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                  Perfect for:
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Multi-location businesses",
                    "Franchises",
                    "Service businesses scaling regionally",
                    "SaaS & membership platforms",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-cyan-400" />
                      <span className="text-gray-700 dark:text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
