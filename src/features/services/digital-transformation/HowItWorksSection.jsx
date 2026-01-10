import React from "react";

export default function HowItWorksTransformation() {
  return (
    <section className="bg-white dark:bg-black py-20 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION - HEADER */}
        <div className="grid grid-cols-12 gap-8 mb-20">
          {/* LEFT TEXT */}
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500 mb-4">
              How it works
            </p>

            <h2 className="text-5xl leading-tight font-light text-black dark:text-white mb-4">
              Get transformed<br />
              in four strategic<br />
              phases
            </h2>

            <p className="text-gray-500 dark:text-gray-400 text-sm">
              And sometimes, see results in as little as 30 days.
            </p>
          </div>

          {/* RIGHT - FIRST TWO STEPS */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-6">
            {/* STEP 01 */}
            <div>
              <span className="text-5xl text-gray-200 dark:text-gray-800 font-light block mb-4">01</span>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-black dark:text-white mb-2">
                Discovery & Assessment
              </h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                We audit your current processes, interview stakeholders, and identify high-impact automation opportunities. Our team maps your existing tech stack and uncovers inefficiencies you didn't know existed.
              </p>
              <img
                src="https://framerusercontent.com/images/Tmr74Q4GMC9WmjAM4nqGzmQEcoc.png"
                className="w-full h-52 object-cover rounded-2xl"
                alt="Discovery & Assessment"
              />
            </div>

            {/* STEP 02 */}
            <div>
              <span className="text-5xl text-gray-200 dark:text-gray-800 font-light block mb-4">02</span>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-black dark:text-white mb-2">
                Strategy & Design
              </h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                We create a custom transformation roadmap with prioritized initiatives, technology recommendations, and clear ROI projections. You'll get a transparent plan with no hidden surprises.
              </p>
              <img
                src="https://framerusercontent.com/images/dDXi1embTwgGoK1gBboVZZAsqw4.png"
                className="w-full h-52 object-cover rounded-2xl"
                alt="Strategy & Design"
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
              <span className="text-5xl text-gray-200 dark:text-gray-800 font-light block mb-4">03</span>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-black dark:text-white mb-2">
                Implementation & Integration
              </h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                Our experts build, configure, and integrate automation solutions with your existing systems. We work in agile sprints, delivering value incrementally while minimizing disruption.
              </p>
              <img
                src="https://framerusercontent.com/images/euSyhjbuIdbKjFFviKpVTHxG8.jpg"
                className="w-full h-52 object-cover rounded-2xl"
                alt="Implementation & Integration"
              />
            </div>

            {/* STEP 04 */}
            <div>
              <span className="text-5xl text-gray-200 dark:text-gray-800 font-light block mb-4">04</span>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-black dark:text-white mb-2">
                Optimize & Scale
              </h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                Enjoy streamlined operations that run smoothly while we monitor performance, gather feedback, and continuously optimize. Your automation improves over time, adapting as your business evolves.
              </p>
              <img
                src="https://framerusercontent.com/images/zj6XEvThavkBIHlYO2umnWZCtc.jpg"
                className="w-full h-52 object-cover rounded-2xl"
                alt="Optimize & Scale"
              />
            </div>
          </div>

          {/* RIGHT - CTA */}
          <div className="col-span-12 lg:col-span-5 flex items-end justify-end">
            <div className="text-right max-w-xs">
              <p className="text-xs font-semibold uppercase tracking-wide text-black dark:text-white mb-2">
                Ready to get started?
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                Transparent process, measurable results — see how we transform businesses like yours.
              </p>

              <a
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[var(--brand-blue)]
                           text-white px-6 py-3 rounded-full
                           font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Start your transformation
                <span className="w-8 h-8 flex items-center justify-center
                                 bg-white text-[var(--brand-blue)] rounded-full text-lg
                                 transition-transform duration-300 group-hover:translate-x-1">
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