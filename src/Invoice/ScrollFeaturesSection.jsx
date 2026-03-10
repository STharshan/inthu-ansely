import React, { useState, useEffect, useRef } from 'react';

const features = [
  {
    id: "01",
    badge: "MOBILE-FIRST WORKFLOW",
    title: "Built for Life on the Move",
    description: "Designed for professionals meeting clients face-to-face, at homes, or on job sites. Create quotes, convert to invoices, and take payment there and then. Close deals faster, reduce delays, and turn conversations into confirmed sales instantly.",
    image: "i4.png"
  },
  {
    id: "02",
    badge: "FRICTIONLESS TRANSACTIONS",
    title: "Instant Payments. Instant Trust.",
    description: "Send professional invoices in seconds and get paid on the spot. Customers feel confident paying a branded, digital invoice immediately — improving cash flow, reducing chasing, and increasing completed transactions.",
    image: "i5.png"
  },
  {
    id: "03",
    badge: "OPERATIONAL FREEDOM",
    title: "Less Admin. More Revenue.",
    description: "No paperwork. No lost invoices. No end-of-day catch-up. Everything is recorded automatically in a few clicks, giving you more time to sell, serve clients, and grow your business instead of managing admin.",
    image: "i6.png"
  }
];

const DynamicScrollSection = () => {
  const [activeId, setActiveId] = useState("01");
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.getAttribute('data-id'));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height - windowHeight;
      const progress = Math.max(0, Math.min(100, (Math.abs(rect.top) / totalHeight) * 100));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="bg-white dark:bg-black relative transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-24 max-w-7xl">
        <div className="flex flex-col xl:flex-row items-start gap-6 sm:gap-8 lg:gap-12 relative">

          {/* LEFT: Content Side */}
          <div className="w-full xl:w-1/2 relative flex">

            {/* Desktop Progress Line */}
            <div className="hidden lg:block relative w-[2px] bg-gray-100 dark:bg-zinc-800 mr-8 xl:mr-12 self-stretch flex-shrink-0">
              <div
                className="absolute top-0 left-0 w-full bg-[#0045EF] transition-all duration-150 ease-out"
                style={{ height: `${scrollProgress}%` }}
              />
            </div>

            <div className="flex-1 min-w-0">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  data-id={feature.id}
                  ref={(el) => (sectionRefs.current[feature.id] = el)}
                  className={`flex flex-col min-h-[60vh] sm:min-h-[55vh] lg:min-h-[70vh] justify-center transition-all duration-700 py-10 sm:py-12 lg:py-0 ${
                    activeId === feature.id
                      ? 'opacity-100 lg:translate-x-2'
                      : 'opacity-30 lg:opacity-15'
                  }`}
                >
                  <div className="text-sm font-mono font-bold text-[#0045EF] dark:text-blue-500 mb-3 sm:mb-4 lg:mb-6">
                    {feature.id}
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-500 dark:text-zinc-500 uppercase mb-2 sm:mb-3">
                    {feature.badge}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-[1.2]">
                    {feature.title}
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-zinc-400 leading-relaxed max-w-md">
                    {feature.description}
                  </p>

                  {/* Mobile & Tablet Image (hidden on lg+) */}
                  <div className="mt-8 sm:mt-10 xl:hidden w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-zinc-800 bg-gradient-to-br from-[#0045EF] to-[#002ba3]">
                    <div className="relative w-full p-4 sm:p-6 flex items-center justify-center min-h-[220px] sm:min-h-[280px]">
                      {/* Glowing orbs */}
                      <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-black/20 rounded-full blur-2xl pointer-events-none"></div>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="relative z-10 rounded-xl shadow-xl w-full max-w-[280px] sm:max-w-[360px] mx-auto object-contain bg-white dark:bg-zinc-900 p-2"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Sticky Image (Desktop Only) */}
          <div className="hidden xl:block w-1/2 sticky top-[10vh] xl:top-[15vh] h-[60vh] xl:h-[135vh] flex-shrink-0">
            <div className="relative w-full h-full rounded-[32px] xl:rounded-[40px] overflow-hidden bg-gradient-to-br from-[#0045EF] to-[#002ba3] shadow-2xl flex items-center justify-center">

              {/* Glowing Background Details */}
              <div className="absolute top-[-10%] right-[-10%] w-48 xl:w-64 h-48 xl:h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-[-10%] left-[-10%] w-48 xl:w-64 h-48 xl:h-64 bg-black/20 rounded-full blur-3xl pointer-events-none"></div>

              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`absolute inset-0 flex items-center justify-center p-8 xl:p-12 transition-all duration-700 ease-in-out ${
                    activeId === feature.id
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-95 translate-y-12 pointer-events-none'
                  }`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-2xl shadow-2xl w-full max-w-[360px] xl:max-w-[450px] object-contain bg-white dark:bg-zinc-900 p-2"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DynamicScrollSection;