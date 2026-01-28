export default function FinancialPlanningHero() {
  return (
    <section className="w-full mt-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        {/* TEXT CONTENT */}
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            From insight to impact and beyond.
          </h1>

          {/* Subheading */}
          <h2 className="text-xl lg:text-2xl font-medium text-[#0045EF] mb-6">
            Helping hidden gems stand tall in the digital world.
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
            We help businesses navigate complexity and unlock growth through
            strategic consulting and AI innovation. Whether you're optimizing
            operations, exploring AI opportunities, or scaling for the next
            chapter, we bring clarity, precision, and forward-thinking strategy
            to your most pressing challenges.
            <br />
            <br />
            Your business deserves more than generic advice—it deserves a
            roadmap built specifically for your vision, market, and
            capabilities.
          </p>

          {/* Focus Tags */}
          <div className="flex flex-wrap gap-4">
            {[
              "Business Consultancy",
              "AI Consultancy",
              "Strategy & Growth",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-blue-50 dark:bg-blue-950/40
                  border border-blue-100 dark:border-blue-900
                  rounded-md px-5 py-2 shadow-sm"
              >
                <p className="text-sm font-medium text-[#0045EF]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* HERO VIDEO */}
        <div className="mt-14 lg:mt-20 rounded-xl overflow-hidden shadow-2xl">
          <video
            className="w-full h-auto object-cover"
            src="/consultancy-hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="/contact"
            className="inline-flex items-center gap-2
            bg-[#0045EF] text-white
            px-8 py-4 rounded-lg font-medium
            hover:bg-blue-700 transition"
          >
            Start Your Strategy →
          </a>
        </div>
      </div>
    </section>
  );
}
