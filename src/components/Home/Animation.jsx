import React, { useState, useEffect, useCallback } from 'react';
import { Plus, Send, Repeat2 } from 'lucide-react'; // Using lucide-react for icons

// Utility function to clamp a value between a min and max
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

// --- Snippet Card Data ---
// xBase, yBase: Initial static offset in pixels (from center). These are now minimal for a tight stack.
// xMove, yMove: Scroll-induced movement vector (multiplied by scroll ratio)
// initialRotate: Fixed rotation in degrees for the stacked, scattered look
const SNIPPET_DATA = [
    // Minimal positioning near the center for a highly stacked look:
    { id: 1, color: 'bg-green-500', icon: '💸', xBase: 10, yBase: 15, xMove: 100, yMove: 300, initialRotate: 3 },
    { id: 2, color: 'bg-blue-500', icon: '📨', xBase: -10, yBase: -5, xMove: -100, yMove: 300, initialRotate: -2 },
    { id: 3, color: 'bg-pink-500', icon: '💳', xBase: -5, yBase: 10, xMove: -100, yMove: -300, initialRotate: 5 },
    { id: 4, color: 'bg-yellow-500', icon: '💱', xBase: 5, yBase: -15, xMove: 50, yMove: -300, initialRotate: -4 },
    { id: 5, color: 'bg-indigo-500', icon: '🏦', xBase: 0, yBase: 0, xMove: 150, yMove: 50, initialRotate: 1 },
];

// --- Custom Hook for Scroll Animation Logic ---
const useScrollAnimation = (maxTitleScroll = 500, maxTaglineScroll = 1200) => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = useCallback(() => {
        setScrollY(window.scrollY);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Initial call to set scrollY
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // 1. Title/Snippet Scroll Ratio (0 to 1 over maxTitleScroll distance)
    const titleRatio = clamp(scrollY / maxTitleScroll, 0, 1);

    // 2. Tagline Fade Ratios (Sequential reveal)
    const getTaglineRatio = (start, end) => {
        const range = end - start;
        const scrollInSegment = scrollY - start;
        return clamp(scrollInSegment / range, 0, 1);
    };

    // Define the sequential scroll ranges for taglines
    const taglineRanges = [
        { start: maxTitleScroll - 100, end: maxTitleScroll + 200 }, // Add
        { start: maxTitleScroll + 100, end: maxTitleScroll + 400 }, // Send
        { start: maxTitleScroll + 300, end: maxTitleScroll + 600 }, // Exchange
    ];

    const taglineRatios = taglineRanges.map(range => getTaglineRatio(range.start, range.end));

    return { scrollY, titleRatio, taglineRatios };
};

// --- SnippetCard Component ---
const SnippetCard = ({ data, titleRatio }) => {
    const { xBase, yBase, xMove, yMove, color, icon, id, initialRotate } = data;

    // Calculate dynamic transform based on scroll ratio
    const currentX = xBase + xMove * titleRatio;
    const currentY = yBase + yMove * titleRatio;
    const opacity = 1 - titleRatio * 1.5; // Fade faster
    
    // Combine initial rotation with scroll-based rotation
    const currentRotation = initialRotate + titleRatio * 10; 

    const style = {
        transform: `translate3d(${currentX}px, ${currentY}px, 0px) rotate(${currentRotation}deg) scale(${1 - titleRatio * 0.5})`,
        opacity: clamp(opacity, 0, 1),
        // Ensure smooth animation transition
        transition: 'transform 0.1s linear, opacity 0.1s linear',
        position: 'absolute',
        top: '50%',
        left: '50%',
        // Adjusted for w-40 (160px) and h-52 (208px) for accurate center offset
        marginLeft: '-80px',
        marginTop: '-104px',
    };

    return (
        <div
            // Added rotation and drop shadow for depth in the cluster
            className={`w-40 h-52 p-4 rounded-xl shadow-2xl transition-all duration-100 ease-linear ${color} flex flex-col justify-between transform hover:scale-105`}
            style={{...style, zIndex: 50 - id}} // Use Z-index to help with overlapping appearance
        >
            <div className="text-xl font-bold text-white/90">Card #{id}</div>
            <div className="text-6xl text-center">{icon}</div>
            <div className="text-sm text-white/80">Balance: $4,921.22</div>
        </div>
    );
};

// --- Tagline Component ---
const Tagline = ({ icon: Icon, text, ratio, color }) => {
    // Animate from bottom (100% Y) and faded (0 opacity) to original position (0% Y) and full opacity (1)
    const translateY = 10 * (1 - ratio);
    const opacity = ratio;

    const style = {
        transform: `translateY(${translateY}%)`,
        opacity: opacity,
        color: color,
        transition: 'transform 0.1s linear, opacity 0.1s linear',
    };

    return (
        <li className="flex items-center justify-center h-28" style={style}>
            <div className={`text-6xl sm:text-7xl font-bold flex items-center gap-6`}>
                <div className="p-4 rounded-2xl bg-white shadow-xl">
                    <Icon className={`w-8 h-8 sm:w-10 sm:h-10`} style={{ color: color }} />
                </div>
                <span>{text}</span>
            </div>
        </li>
    );
};

// --- Main App Component ---
const UnifyFinances = () => {
    // maxTitleScroll is 500px, which is the distance over which the initial hero section animates
    const { titleRatio, taglineRatios } = useScrollAnimation(500, 1200);

    // 1. Title Animation Styles
    const titleScale = 1 - titleRatio * 0.6; // Scale from 1 to 0.4
    const titleOpacity = 1 - titleRatio * 0.7; // Opacity from 1 to 0.3
    const titleTranslateY = -titleRatio * 150; // Move up by 150px
    const titleStyle = {
        transform: `translate3d(0px, ${titleTranslateY}px, 0px) scale(${titleScale})`,
        opacity: titleOpacity,
        transition: 'transform 0.1s linear, opacity 0.1s linear',
    };

    return (
        <div className="h-[400vh] bg-gray-50 font-sans">
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
                    body { font-family: 'Inter', sans-serif; }
                    /* Custom styles to ensure the header stays fixed during its animation phase */
                    .hero-header-sticky {
                        position: sticky;
                        top: 0;
                        height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                        background: white;
                        z-index: 10;
                    }
                    /* Styling for the red bar at the bottom, appearing after scroll */
                    .footer-bar {
                        height: 100vh;
                        background: #fb2d54; /* Match Exchange color */
                        opacity: 0;
                        transform: translateY(100%);
                        transition: opacity 0.1s linear, transform 0.1s linear;
                        position: relative;
                        z-index: 1;
                    }
                `}
            </style>

            <header className="hero-header-sticky">
                {/* Title Container */}
                <div className="flex flex-col items-center justify-center h-full w-full relative">
                    <h1
                        className="text-8xl mt-20 md:text-[10rem] font-extrabold text-[#FB2D54] whitespace-pre-line text-center leading-none tracking-tight"
                        style={titleStyle}
                    >
                        Unify your
                        <br />
                        finances
                    </h1>

                    {/* Snippet Cards List */}
                    {/* FIXED: Removed 'hidden' class to ensure cards display on all screen sizes in development */}
                    <div className="absolute inset-0 max-w-7xl mx-auto block"> 
                        {SNIPPET_DATA.map(data => (
                            <SnippetCard key={data.id} data={data} titleRatio={titleRatio} />
                        ))}
                    </div>
                </div>
            </header>

            {/* Tagline Section (This section appears as the title shrinks) */}
            <main className="min-h-screen pt-40 md:pt-0 pb-20 bg-white">
                <ul className="flex flex-col items-center justify-center gap-10 md:gap-12 min-h-[50vh] pt-20">
                    <Tagline
                        icon={Plus}
                        text="Add"
                        color="#34C771" // Green
                        ratio={taglineRatios[0]}
                    />
                    <Tagline
                        icon={Send}
                        text="Send"
                        color="#477EE9" // Blue
                        ratio={taglineRatios[1]}
                    />
                    <Tagline
                        icon={Repeat2}
                        text="Exchange"
                        color="#FB2D54" // Red/Pink
                        ratio={taglineRatios[2]}
                    />
                </ul>
            </main>

            {/* Placeholder for continued content/Red Footer Bar (Appears fully when the last tagline is visible) */}
            <div
                className="footer-bar"
                style={{
                    opacity: taglineRatios[2] > 0 ? 1 : 0,
                    transform: `translateY(${100 * (1 - taglineRatios[2])}%)`,
                }}
            >
                <div className="absolute bottom-0 w-full p-4 flex justify-center text-white">
                    <p className="text-xl">The journey continues...</p>
                </div>
            </div>
        </div>
    );
};

export default UnifyFinances;