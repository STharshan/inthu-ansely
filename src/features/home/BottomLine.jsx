"use client";

export default function BottomLine() {
  return (
    <section className="py-24 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 transition-colors text-black dark:text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mx-auto max-w-4xl space-y-12">

          {/* Header */}
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)]/10 px-4 py-1.5 text-sm border border-[var(--brand-blue)]/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-[var(--brand-blue)]"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              </svg>
              <span className="text-[var(--brand-blue)]/80">The Bottom Line</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              React Websites Are:
            </h2>
          </div>

          {/* Key Benefits */}
          <div className="rounded-xl border border-[var(--brand-blue)]/20 bg-gray-100 dark:bg-gray-800 p-8 shadow-sm transition-colors">
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
                    className="h-6 w-6 text-[var(--brand-blue)] flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span className="text-xl font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Statement */}
          <div className="space-y-6">
            <div className="rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-8 text-center transition-colors">
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                WordPress, Wix, and GoDaddy are fine for{" "}
                <span className="font-medium text-black dark:text-white">
                  hobby sites
                </span>.
              </p>
              <p className="text-xl font-semibold mt-2 text-black dark:text-white">
                React is built for{" "}
                <span className="text-[var(--brand-blue)]">serious businesses</span>.
              </p>
            </div>

            {/* Final Thought */}
            <div className="rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-8 transition-colors">
              <h3 className="text-2xl font-bold text-center mb-4">
                Final Thought
              </h3>

              <p className="text-lg text-center leading-relaxed text-gray-700 dark:text-gray-300">
                If your website is part of your{" "}
                <span className="font-semibold text-black dark:text-white">
                  sales team
                </span>,{" "}
                <span className="font-semibold text-black dark:text-white">
                  brand authority
                </span>, and{" "}
                <span className="font-semibold text-black dark:text-white">
                  growth strategy
                </span>
                —React isn’t an upgrade.
              </p>

              <p className="text-2xl font-bold text-center text-[var(--brand-blue)] mt-4">
                It’s a business advantage.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-6">
            <button className="inline-flex items-center justify-center rounded-md bg-[var(--brand-blue)] px-6 py-3 text-base font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/50">
              Get Started with React
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
