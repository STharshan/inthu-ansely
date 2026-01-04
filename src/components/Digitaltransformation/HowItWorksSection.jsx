import React from "react";

export default function HowItWorksExact() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION - HEADER */}
        <div className="grid grid-cols-12 gap-8 mb-20">
          {/* LEFT TEXT */}
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400 mb-4">
              How it works
            </p>

            <h2 className="text-5xl leading-tight font-light text-[#081D3A] mb-4">
              Get cleaner<br />
              space in four<br />
              steps
            </h2>

            <p className="text-gray-500 text-sm">
              And sometimes, in as little as 24 hours.
            </p>
          </div>

          {/* RIGHT - FIRST TWO STEPS */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-6">
            {/* STEP 01 */}
            <div>
              <span className="text-5xl text-gray-200 font-light block mb-4">01</span>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#081D3A] mb-2">
                Share details
              </h4>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                Fill out a quick form with details about your space,
                schedule, and preferences.
              </p>
              <img
                src="https://framerusercontent.com/images/Tmr74Q4GMC9WmjAM4nqGzmQEcoc.png"
                className="w-full h-52 object-cover rounded-2xl"
                alt="Share details"
              />
            </div>

            {/* STEP 02 */}
            <div>
              <span className="text-5xl text-gray-200 font-light block mb-4">02</span>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#081D3A] mb-2">
                Get quote
              </h4>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                We'll send you a personalized estimate,
                no hidden fees, no upselling.
              </p>
              <img
                src="https://framerusercontent.com/images/dDXi1embTwgGoK1gBboVZZAsqw4.png"
                className="w-full h-52 object-cover rounded-2xl"
                alt="Get quote"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION - LAST TWO STEPS + CTA */}
        <div className="grid grid-cols-12 gap-8">
          {/* LEFT - LAST TWO STEPS */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-6">
            {/* STEP 03 */}
            <div>
              <span className="text-5xl text-gray-200 font-light block mb-4">03</span>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#081D3A] mb-2">
                We clean
              </h4>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                Our team arrives on time, equipped,
                and ready to clean thoroughly.
              </p>
              <img
                src="https://framerusercontent.com/images/euSyhjbuIdbKjFFviKpVTHxG8.jpg"
                className="w-full h-52 object-cover rounded-2xl"
                alt="We clean"
              />
            </div>

            {/* STEP 04 */}
            <div>
              <span className="text-5xl text-gray-200 font-light block mb-4">04</span>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#081D3A] mb-2">
                You relax
              </h4>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                Enjoy a spotless home or workspace that looks,
                feels, and smells truly clean.
              </p>
              <img
                src="https://framerusercontent.com/images/zj6XEvThavkBIHlYO2umnWZCtc.jpg"
                className="w-full h-52 object-cover rounded-2xl"
                alt="You relax"
              />
            </div>
          </div>

          {/* RIGHT - CTA */}
          <div className="col-span-12 lg:col-span-5 flex items-end justify-end">
            <div className="text-right max-w-xs">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#081D3A] mb-2">
                Ready to get started?
              </p>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                Simple pricing, no hidden fees — see what works for your space.
              </p>

              <a
                href="/pricing"
                className="inline-flex items-center gap-3 bg-yellow-400
                           text-[#081D3A] px-6 py-3 rounded-full
                           font-semibold text-sm transition hover:scale-105"
              >
                View our pricing
                <span className="w-8 h-8 flex items-center justify-center
                                 bg-[#081D3A] text-yellow-400 rounded-full text-lg">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}