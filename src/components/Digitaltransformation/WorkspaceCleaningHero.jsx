import React from "react";

const WorkspaceCleaningHero = () => {
  return (
    <section className="bg-[#081D3A] text-white py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top Content */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-gray-300 mb-6">
            Workspace Cleaning
          </p>

          {/* BIGGER & BOLDER TITLE */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8">
            Workspaces cleaned <br /> for productivity
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-14 max-w-3xl mx-auto">
            Your team deserves a tidy, healthy work space that helps them focus
            and feel good at their work.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a
              href="/services"
              className="px-10 py-4 rounded-full border border-yellow-400 text-yellow-400
                         font-medium
                         hover:bg-yellow-400 hover:text-[#081D3A]
                         transition shadow-lg"
            >
              Go back to services
            </a>

            <a
              href="/contact-us"
              className="px-10 py-4 rounded-full bg-yellow-400 text-[#081D3A]
                         font-semibold flex items-center justify-center gap-4
                         hover:scale-105 transition shadow-xl"
            >
              Get a free quote
              <span className="bg-[#081D3A] text-yellow-400 w-10 h-10 flex items-center justify-center rounded-full text-lg">
                →
              </span>
            </a>
          </div>
        </div>

        {/* MORE GAP BETWEEN BUTTONS & IMAGE */}
        <div className="mt-24 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://framerusercontent.com/images/vQSbNtAmodEUM13anlUDQeeqXvA.jpg?scale-down-to=2048"
            alt="Workspace Cleaning"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default WorkspaceCleaningHero;
