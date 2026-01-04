import React from "react";

const WhatsIncludedSection = () => {
  return (
    <section className="bg-[#F8F9FB] py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
              No Spot Left Behind
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#081D3A] leading-tight">
              What’s included in <br /> this service
            </h2>
          </div>

          <div className="flex items-end">
            <p className="text-gray-600 text-lg max-w-md ml-auto">
              Everything we clean, organize, and refresh,
              so your space feels brand new again.
            </p>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ITEM 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <img
              src="https://framerusercontent.com/images/sDomwMoYpOoZpPWJHDoyUqn3og.png"
              alt="Workspace Areas"
              className="rounded-2xl w-full h-[220px] object-cover"
            />
            <div className="bg-white rounded-2xl px-8 py-10 flex flex-col justify-center">
              <h3 className="text-sm font-semibold uppercase text-[#081D3A] mb-4">
                Workspace Areas
              </h3>
              <p className="text-gray-600">
                Work desks, chairs, monitors, and high-touch items
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <img
              src="https://framerusercontent.com/images/F2SWniO8apzocUG50pp8fKzEwa0.png"
              alt="Shared Spaces"
              className="rounded-2xl w-full h-[220px] object-cover"
            />
            <div className="bg-white rounded-2xl px-8 py-10 flex flex-col justify-center">
              <h3 className="text-sm font-semibold uppercase text-[#081D3A] mb-4">
                Shared Spaces
              </h3>
              <p className="text-gray-600">
                Break rooms, lounges, and meeting spaces
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <img
              src="https://framerusercontent.com/images/2JV0mfakTPp0rG3VIDOpeFUhwWk.jpg"
              alt="Office Restroom"
              className="rounded-2xl w-full h-[220px] object-cover"
            />
            <div className="bg-white rounded-2xl px-8 py-10 flex flex-col justify-center">
              <h3 className="text-sm font-semibold uppercase text-[#081D3A] mb-4">
                Office Restroom
              </h3>
              <p className="text-gray-600">
                Sinks, stalls, and floors with high-grade cleaners
              </p>
            </div>
          </div>

          {/* ITEM 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <img
              src="https://framerusercontent.com/images/EwD4z5q2EjaybtToBskVxEQ6Ceo.jpg"
              alt="Contact Disinfection"
              className="rounded-2xl w-full h-[220px] object-cover"
            />
            <div className="bg-white rounded-2xl px-8 py-10 flex flex-col justify-center">
              <h3 className="text-sm font-semibold uppercase text-[#081D3A] mb-4">
                Contact Disinfection
              </h3>
              <p className="text-gray-600">
                Door handles, elevator buttons, and light switches
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatsIncludedSection;
