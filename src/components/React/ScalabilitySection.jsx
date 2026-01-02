import React from "react";

export default function ScalabilitySection() {
  return (
    <>
      {/* Inter font – inline only */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      `}</style>

      <div
        className="min-w-full h-full overflow-y-auto bg-[#050608]"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <section className="py-24 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-12">

              {/* Header */}
              <div className="space-y-4 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                  Build Once,
                  <span className="text-cyan-400"> Grow Forever</span>
                </h2>

                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                  While WordPress hits limits fast, React scales horizontally
                  with your business.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid md:grid-cols-2 gap-6">

                {/* Card 1 */}
                <div className="group rounded-xl border border-white/10 bg-[#0B0D10] p-6 transition hover:bg-[#0F1216]">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition">
                      <svg
                        className="h-6 w-6 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                        <polyline points="16 7 22 7 22 13" />
                      </svg>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold text-white">
                        Add features without rebuilding
                      </h3>
                      <p className="text-sm text-gray-400">
                        Component-based architecture
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group rounded-xl border border-white/10 bg-[#0B0D10] p-6 transition hover:bg-[#0F1216]">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition">
                      <svg
                        className="h-6 w-6 text-cyan-400"
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
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold text-white">
                        Plug into CRMs, ERPs, booking systems
                      </h3>
                      <p className="text-sm text-gray-400">
                        Easy integrations
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group rounded-xl border border-white/10 bg-[#0B0D10] p-6 transition hover:bg-[#0F1216]">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition">
                      <svg
                        className="h-6 w-6 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20" />
                      </svg>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold text-white">
                        Power websites, dashboards & apps
                      </h3>
                      <p className="text-sm text-gray-400">
                        One codebase
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="group rounded-xl border border-white/10 bg-[#0B0D10] p-6 transition hover:bg-[#0F1216]">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition">
                      <svg
                        className="h-6 w-6 text-cyan-400"
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
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold text-white">
                        Multi-location & franchise scaling
                      </h3>
                      <p className="text-sm text-gray-400">
                        Built for growth
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Perfect for */}
              <div className="rounded-xl border border-white/10 bg-[#0B0D10]/70 p-8">
                <h3 className="text-xl font-semibold text-white mb-4">
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
                      <div className="h-2 w-2 rounded-full bg-cyan-400" />
                      <span className="text-gray-400">{item}</span>
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
