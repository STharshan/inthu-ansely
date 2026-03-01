import React, { useState, useEffect, useRef } from 'react';

const features = [
    {
        id: "01",
        badge: "$14M FUND RAISED IN INITIAL STATE",
        title: "Seamless Integrations",
        description: "As a flexible, modern banking tool designed to help small businesses grow, the team at Offering Next Gen Marketing Solution World Wide.",
        image: "https://cdn.prod.website-files.com/665af5ee798a95c3f13a61a7/665af5ee798a95c3f13a624a_Feature4.webp"
    },
    {
        id: "02",
        badge: "$14M FUND RAISED IN INITIAL STATE",
        title: "Rapid Market Growth",
        description: "Expanding into new territories with automated scaling. Our infrastructure supports growth at every stage of your business.",
        image: "https://cdn.prod.website-files.com/665af5ee798a95c3f13a61a7/665af5ee798a95c3f13a6247_Feature1.webp"
    },
    {
        id: "03",
        badge: "PRODUCTIVITY AND EFFICIENCY BOOST",
        title: "High User Adoption",
        description: "Our intuitive interface ensures that your team stays productive without a steep learning curve or complex onboarding.",
        image: "https://cdn.prod.website-files.com/665af5ee798a95c3f13a61a7/665af5ee798a95c3f13a6248_Feature2.webp"
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
            threshold: 0.2
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

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={containerRef} className="bg-white dark:bg-black relative py-15 transition-colors duration-500">
            <div className="container mx-auto px-6 py-20 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-start gap-12 relative">

                    {/* LEFT: Scrolling Content with Vertical Progress Line */}
                    <div className="w-full lg:w-1/2 relative flex">

                        {/* THE SIDE LINE (Desktop Only) */}
                        <div className="hidden lg:block relative w-[2px] bg-gray-200 dark:bg-zinc-800 mr-12 self-stretch">
                            {/* Dynamic Blue Filler */}
                            <div
                                className="absolute top-0 left-0 w-full bg-[#0045EF] transition-all duration-150 ease-out"
                                style={{ height: `${scrollProgress}%` }}
                            />
                        </div>

                        <div className="flex-1">
                            {features.map((feature) => (
                                <div
                                    key={feature.id}
                                    data-id={feature.id}
                                    ref={(el) => (sectionRefs.current[feature.id] = el)}
                                    className={`flex flex-col min-h-[70vh] justify-center transition-all duration-700 ${activeId === feature.id
                                            ? 'opacity-100 translate-x-2'
                                            : 'opacity-20 translate-x-0'
                                        }`}
                                >
                                    <div className="text-sm font-mono font-bold text-[#0045EF] mb-6">
                                        {feature.id}
                                    </div>
                                    <span className="text-xs font-bold tracking-[0.2em] text-gray-500 dark:text-zinc-500 uppercase mb-4">
                                        {feature.badge}
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                        {feature.title}
                                    </h2>
                                    <p className="text-lg text-gray-600 dark:text-zinc-400 leading-relaxed max-w-md">
                                        {feature.description}
                                    </p>

                                    {/* Mobile View Image */}
                                    <div className="mt-8 lg:hidden rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-zinc-800">
                                        <img src={feature.image} alt={feature.title} className="w-full h-auto" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Sticky Image Container */}
                    <div className="hidden lg:block w-1/2 sticky top-[15vh] h-[90vh]">
                        <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-gradient-to-br from-[#0045EF] to-[#0045EF]/90 shadow-2xl flex items-center justify-center">

                            {/* Animated Background Elements */}
                            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-indigo-900/20 dark:bg-black/40 rounded-full blur-3xl"></div>

                            {/* Dynamic Images */}
                            {features.map((feature) => (
                                <div
                                    key={feature.id}
                                    className={`absolute inset-0 flex items-center justify-center p-12 transition-all duration-1000 ease-in-out ${activeId === feature.id
                                            ? 'opacity-100 scale-100 rotate-0 translate-y-0'
                                            : 'opacity-0 scale-90 rotate-2 translate-y-12 pointer-events-none'
                                        }`}
                                >
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full max-w-[450px] object-contain bg-white dark:bg-zinc-900 p-2"
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