import React from "react";

export default function OtherServices() {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-light text-center text-[#081D3A] mb-20">
          Other services
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* CARD 1 */}
          <a
            href="/home-cleaning"
            className="group relative h-[520px] rounded-[32px] overflow-hidden"
          >
            {/* IMAGE */}
            <img
              src="https://framerusercontent.com/images/TgWHAlAO4Ll4B4hQCEkGaxxPsg.jpg"
              alt="Home cleaning"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* DARK GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

            {/* CONTENT */}
            <div className="relative h-full p-10 flex flex-col justify-between text-white">

              {/* TOP TEXT */}
              <div>
                <h3 className="text-xl font-medium mb-4 max-w-sm">
                  Cleaning that goes beyond the surface
                </h3>
                <p className="text-sm text-gray-200 max-w-sm">
                  Consistent, safe, and detail-focused cleaning that makes your
                  home feel lighter, fresher, and fully yours again.
                </p>
              </div>

              {/* BOTTOM ROW */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm">
                  <img
                    src="https://framerusercontent.com/images/k6W1tvNaOZEih2K6a63bGDb2bY.png"
                    alt=""
                    className="w-6 h-6"
                  />
                  <span>Home cleaning</span>
                </div>

                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-[#081D3A] group-hover:scale-110 transition">
                  →
                </div>
              </div>
            </div>
          </a>

          {/* CARD 2 */}
          <a
            href="/store-cleaning"
            className="group relative h-[520px] rounded-[32px] overflow-hidden"
          >
            {/* IMAGE */}
            <img
              src="https://framerusercontent.com/images/pBINfKeLHT4GyOVsH1rjlaoZv4.png"
              alt="Store cleaning"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* DARK GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

            {/* CONTENT */}
            <div className="relative h-full p-10 flex flex-col justify-between text-white">

              {/* TOP TEXT */}
              <div>
                <h3 className="text-xl font-medium mb-4 max-w-sm">
                  Retail spaces that shine daily
                </h3>
                <p className="text-sm text-gray-200 max-w-sm">
                  From showrooms to storefronts, we keep customer-facing spaces
                  spotless and welcoming.
                </p>
              </div>

              {/* BOTTOM ROW */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm">
                  <img
                    src="https://framerusercontent.com/images/k6W1tvNaOZEih2K6a63bGDb2bY.png"
                    alt=""
                    className="w-6 h-6"
                  />
                  <span>Store cleaning</span>
                </div>

                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-[#081D3A] group-hover:scale-110 transition">
                  →
                </div>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
