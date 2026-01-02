"use client";

export default function BottomLine() {
  return (
    <section className="py-24 bg-[#0B0F14] border-t border-[#1F2933]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-4 py-1.5 text-sm border border-cyan-400/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-cyan-400"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              </svg>
              <span className="text-cyan-300">The Bottom Line</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              React Websites Are:
            </h2>
          </div>

          {/* Key Benefits */}
          <div className="rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-[#111827] to-[#111827] p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Faster",
                "More secure",
                "Better for Google",
                "Built to scale",
                "Designed to convert",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-cyan-400 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span className="text-xl font-semibold text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Statement */}
          <div className="space-y-6">
            <div className="rounded-xl border border-[#1F2933] bg-[#111827] p-8 text-center">
              <p className="text-lg text-[#9CA3AF]">
                WordPress, Wix, and GoDaddy are fine for{" "}
                <span className="text-white font-medium">hobby sites</span>.
              </p>
              <p className="text-xl text-white font-semibold mt-2">
                React is built for{" "}
                <span className="text-cyan-400">serious businesses</span>.
              </p>
            </div>

            {/* Final Thought */}
            <div className="rounded-xl border border-[#1F2933] bg-[#0F172A] p-8">
              <h3 className="text-2xl font-bold text-center text-white mb-4">
                Final Thought
              </h3>

              <p className="text-lg text-center text-[#9CA3AF] leading-relaxed">
                If your website is part of your{" "}
                <span className="text-white font-semibold">sales team</span>,{" "}
                <span className="text-white font-semibold">brand authority</span>,
                and{" "}
                <span className="text-white font-semibold">
                  growth strategy
                </span>
                —React isn’t an upgrade.
              </p>

              <p className="text-2xl font-bold text-center text-cyan-400 mt-4">
                It’s a business advantage.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-6">
            <button className="inline-flex items-center justify-center rounded-md bg-cyan-400 px-6 py-3 text-base font-medium text-[#0B0F14] transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50">
              Get Started with React
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
