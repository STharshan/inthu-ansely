import React from "react";

export default function CTASection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* MAIN CARD */}
        <div className="relative rounded-[40px] overflow-hidden">

          {/* BACKGROUND IMAGE */}
          <img
            src="https://framerusercontent.com/images/4cisCdT4UKdwxmD22WCIgrxRD44.jpg"
            alt="Cleaning service"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#081D3A]/95 via-[#081D3A]/70 to-[#081D3A]/30" />

          {/* CONTENT */}
          <div className="relative z-10 p-16 md:p-20 text-white">

            {/* TOP GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* LEFT TEXT */}
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
                  Cleaning <br />
                  that works <br />
                  around you
                </h2>

                <p className="text-gray-200 max-w-md">
                  Our expert cleaners handle the mess so you can focus on what matters.
                </p>
              </div>

              {/* RIGHT SERVICES */}
              <div className="flex flex-col items-end justify-center gap-4 text-sm tracking-wide">
                <span>HOME CLEANING</span>
                <span>STORE CLEANING</span>
                <span>WORKSPACE CLEANING</span>
                <span>MOVE - IN/OUT CLEANING</span>
              </div>
            </div>
          </div>

          {/* BOTTOM CTA BAR */}
          <div className="relative z-10 bg-yellow-400 px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

            <p className="text-[#081D3A] font-semibold text-lg">
              GOT A SPACE IN NEED <br className="hidden md:block" />
              OF A REFRESH?
            </p>

            <a
              href="https://cal.com/radecreatives/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#081D3A] text-yellow-400 px-8 py-4 rounded-full shadow-lg hover:scale-105 transition"
            >
              Schedule a call
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-[#081D3A]">
                →
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
