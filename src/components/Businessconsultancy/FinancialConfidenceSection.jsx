export default function FinancialConfidenceSection() {
  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* IMAGE SECTION */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://framerusercontent.com/images/295l2PYYNWyQF0GHf7Kws2Ddko.jpg?width=3148&height=2100"
              alt="Strategic intelligence and business confidence"
              className="w-full h-full object-cover"
            />
          </div>

          {/* CONTENT SECTION */}
          <div className="space-y-7">

            {/* BADGE */}
            <div className="inline-flex items-center gap-3 rounded-lg">
              <div className="w-10 h-10 bg-[#0045EF] rounded-full flex items-center justify-center shadow-lg">
                <div className="relative w-5 h-5">
                  <div className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-90"></div>
                </div>
              </div>
              <span className="text-sm font-medium text-[#0045EF]">
                What we do
              </span>
            </div>

            {/* MAIN HEADING */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Building business confidence through strategic intelligence
            </h2>

            {/* DESCRIPTION */}
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            We start by getting a proper understanding of your market, how your business actually runs day-to-day,
and where the real friction or missed opportunities are. From there, we bring in the right mix of strategy,
systems thinking, and AI - only where it genuinely adds value
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            The goal is simple: better decisions, smoother operations, and a business that’s set up to grow without unnecessary complexity. Everything we recommend is rooted in real data and designed to give you a lasting edge, not short-term wins.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            We don’t just point out problems. We design and implement practical solutions that change how your business operates, competes, and scales - especially as technology becomes a bigger part of how modern businesses work.
            </p>

            {/* CTA LINK */}
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-[#0045EF] font-medium hover:translate-x-1 transition"
            >
              Explore our approach →
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
