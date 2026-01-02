import React from "react";

export default function PerformanceSection() {
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

              {/* Heading */}
              <div className="space-y-4 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                  Performance:
                  <span className="text-cyan-400"> Speed = Money</span>
                </h2>

                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                  React websites load 2–10× faster than traditional builders.
                  Faster sites mean lower bounce rates and higher conversions.
                </p>
              </div>

              {/* Performance Card */}
              <div className="rounded-xl border border-white/10 bg-[#0B0D10] p-8 space-y-8">

                {/* Hint */}
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>⏱</span>
                  <span>Hover over bars to see load times</span>
                </div>

                {/* Bars */}
                <div className="space-y-6">

                  {/* React */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-white">React</span>
                      <span className="text-sm text-gray-400">95/100</span>
                    </div>
                    <div className="h-8 bg-[#1C1C1C] rounded-lg overflow-hidden">
                      <div
                        className="h-full bg-cyan-400 transition-all duration-1000"
                        style={{ width: "95%" }}
                      />
                    </div>
                  </div>

                  {/* WordPress */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-white">WordPress</span>
                      <span className="text-sm text-gray-400">45/100</span>
                    </div>
                    <div className="h-8 bg-[#1C1C1C] rounded-lg overflow-hidden">
                      <div
                        className="h-full bg-orange-500 transition-all duration-1000"
                        style={{ width: "45%" }}
                      />
                    </div>
                  </div>

                  {/* Wix */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-white">Wix</span>
                      <span className="text-sm text-gray-400">35/100</span>
                    </div>
                    <div className="h-8 bg-[#1C1C1C] rounded-lg overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 transition-all duration-1000"
                        style={{ width: "35%" }}
                      />
                    </div>
                  </div>

                  {/* GoDaddy */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-white">GoDaddy</span>
                      <span className="text-sm text-gray-400">30/100</span>
                    </div>
                    <div className="h-8 bg-[#1C1C1C] rounded-lg overflow-hidden">
                      <div
                        className="h-full bg-red-500 transition-all duration-1000"
                        style={{ width: "30%" }}
                      />
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Stat Cards */}
              <div className="grid md:grid-cols-3 gap-6">

                <div className="rounded-xl border border-white/10 bg-[#0B0D10] p-6">
                  <div className="text-3xl font-extrabold text-cyan-400">
                    2–10×
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    Faster load times
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#0B0D10] p-6">
                  <div className="text-3xl font-extrabold text-cyan-400">
                    53%
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    Users leave if load &gt; 3s
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#0B0D10] p-6">
                  <div className="text-3xl font-extrabold text-cyan-400">
                    ↑
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    Better rankings & conversions
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
