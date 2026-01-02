import React from "react";

export default function HomeSection() {
  return (
    <>
      {/* Load Inter font inline (NO config file needed) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      `}</style>

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050608]"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        {/* Radial dark background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,220,0.14)_0%,rgba(5,6,8,0.85)_45%,#050608_70%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center">
          <div className="space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-300 backdrop-blur-sm">
              Interactive Learning Guide
            </div>

            {/* Heading */}
            <h1 className="text-[48px] leading-tight md:text-[72px] md:leading-[1.05] font-extrabold tracking-tight text-white">
              React vs Traditional
              <br />
              <span className="bg-gradient-to-r from-[#E5FAFF] via-[#22D3EE] to-[#06B6D4] bg-clip-text text-transparent">
                Website Builders
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto max-w-2xl text-[17px] md:text-[19px] font-normal leading-relaxed text-gray-400">
              Discover why modern web applications built with React outperform
              WordPress, Wix, and GoDaddy in speed, SEO, security, and scalability.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">

              {/* Primary */}
              <button className="rounded-lg bg-white px-7 py-3 text-[15px] font-semibold text-black shadow-lg transition hover:bg-gray-200">
                Start Learning
              </button>

              {/* Secondary */}
              <button className="rounded-lg border border-white/20 px-7 py-3 text-[15px] font-semibold text-white transition hover:bg-white/5">
                View Comparison
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </div>

          {/* Navigation hint */}
          <div className="absolute bottom-6 right-6 text-xs font-medium text-gray-500">
            Use ← → arrow keys to navigate
          </div>
        </div>
      </section>
    </>
  );
}
