import React from "react";

export default function SEOAdvantageSection() {
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
        <section className="py-24 border-t border-white/10 bg-[#080A0D]">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-12">

              {/* Header */}
              <div className="space-y-4 text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-sm">
                  <span className="text-cyan-400">🔍</span>
                  <span className="text-cyan-300 font-medium">
                    SEO Advantage
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                  Why Google Favors React
                </h2>

                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                  Modern React sites (especially using Next.js) are built for
                  search engines from the ground up.
                </p>
              </div>

              {/* Main SEO Card */}
              <div className="rounded-xl border border-white/10 bg-[#0B0D10] p-8">
                <div className="grid md:grid-cols-2 gap-6">

                  {[
                    "Server-Side Rendered (SSR) or Statically Generated (SSG)",
                    "Optimized for Core Web Vitals",
                    "Built with clean, lightweight HTML",
                    "Google can crawl your site faster",
                    "Pages index more reliably",
                    "Rankings improve organically over time",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-0.5">✔</span>
                      <span className="text-white leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>
              </div>

              {/* Comparison Cards */}
              <div className="grid md:grid-cols-2 gap-6">

                {/* WordPress */}
                <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6">
                  <div className="space-y-3">
                    <div className="text-2xl font-extrabold text-red-400">
                      WordPress
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Needs plugins for everything</li>
                      <li>• Each plugin slows the site</li>
                      <li>• Technical SEO becomes fragile</li>
                      <li>• Plugin conflicts common</li>
                    </ul>
                  </div>
                </div>

                {/* React */}
                <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-6">
                  <div className="space-y-3">
                    <div className="text-2xl font-extrabold text-cyan-400">
                      React
                    </div>
                    <ul className="space-y-2 text-sm text-white">
                      <li>• SEO is engineered, not patched</li>
                      <li>• Built-in optimization</li>
                      <li>• No plugin dependencies</li>
                      <li>• Consistent performance</li>
                    </ul>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
