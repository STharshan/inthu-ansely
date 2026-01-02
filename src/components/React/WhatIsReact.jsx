import React from "react";

export default function WhatIsReactSection() {
  return (
    <>
      {/* Inline Inter font – no config needed */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      `}</style>

      <section
        id="what-is-react"
        className="relative bg-[#050608] py-24 border-t border-white/10"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl space-y-14">

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-[36px] md:text-[48px] font-extrabold tracking-tight text-white">
                What Is React?{" "}
                <span className="text-gray-500 font-semibold">
                  (In Simple Terms)
                </span>
              </h2>

              <p className="text-[17px] md:text-[19px] text-gray-400 leading-relaxed max-w-3xl">
                React is a JavaScript framework that builds fast, dynamic, app-like
                websites. Instead of loading entire pages repeatedly (like
                WordPress), React updates only what&apos;s needed—making your site
                feel instant.
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6">

              {/* Card 1 */}
              <div className="rounded-xl border border-white/10 bg-[#0B0D10] p-6 transition hover:bg-[#0F1216]">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                    <span className="text-cyan-400 text-xl font-bold">&lt;/&gt;</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    Modern Framework
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    Built on JavaScript, the language that powers the modern web
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-xl border border-white/10 bg-[#0B0D10] p-6 transition hover:bg-[#0F1216]">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                    <span className="text-cyan-400 text-xl">⚡</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    Lightning Fast
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    Updates only what changes, no full page reloads required
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-xl border border-white/10 bg-[#0B0D10] p-6 transition hover:bg-[#0F1216]">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                    <span className="text-cyan-400 text-xl">🚀</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    Growth Engine
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    Not just a website—a digital product that drives business
                    growth
                  </p>
                </div>
              </div>
            </div>

            {/* Think of it as box */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💡</div>

                <div>
                  <p className="text-lg font-semibold text-white mb-2">
                    Think of it as:
                  </p>

                  <div className="space-y-1">
                    <p className="text-gray-400">
                      ❌ A brochure website
                    </p>
                    <p className="text-white font-medium">
                      ✅ A digital growth engine
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
