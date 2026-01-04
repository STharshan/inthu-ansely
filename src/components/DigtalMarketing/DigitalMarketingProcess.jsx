import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const processData = [
    {
        id: "consultation",
        title: "Consultation",
        description:
            "Our interior architecture services are designed enhance the functionality & flow of your space, while also ensuring it is visually stunning.",
        image: "/w1.jpg",
    },
    {
        id: "design",
        title: "Design",
        description:
            "We craft unique and functional design concepts tailored precisely to your vision and requirements.",
        image: "/w2.jpg",
    },
    {
        id: "execution",
        title: "Execution",
        description:
            "Our team ensures flawless execution with precision, quality control, and attention to detail.",
        image: "/w4.jpeg",
    },
    {
        id: "communication",
        title: "Communication",
        description:
            "We maintain transparent communication throughout the project lifecycle to ensure clarity and confidence.",
        image: "/w5.jpeg",
    },
];

export default function DigitalMarketingProcess() {
    const [activeId, setActiveId] = useState(processData[0].id);

    const activeItem = processData.find((item) => item.id === activeId);

    return (
        <section className="bg-black text-white py-16 sm:py-20 lg:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* LEFT IMAGE */}
                    {/* LEFT IMAGE */}
                    <div className="relative overflow-hidden rounded-2xl">
                        <img
                            key={activeId}
                            src={activeItem.image}
                            alt={activeItem.title}
                            className="
      w-full 
      h-[320px] sm:h-[420px] lg:h-[520px] 
      object-cover
      transition-all
      duration-700
      ease-out
    "
                            style={{
                                animation: "slideFromTop 0.7s ease-out",
                            }}
                        />

                        <style>
                            {`
      @keyframes slideFromTop {
        0% {
          opacity: 0;
          transform: translateY(-40px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
                        </style>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
                            <span className="w-2 h-2 rounded-full bg-lime-400"></span>
                            <span className="text-xs uppercase tracking-widest text-gray-300">
                                Our Proven Process
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl leading-relaxed mb-10">
                            WE START BY GRASPING YOUR VISION AND ASSESSING THE SITE, THEN CRAFT
                            UNIQUE AND FUNCTIONAL DESIGN CONCEPTS TAILORED TO YOUR NEEDS.
                        </h2>

                        {/* Accordion */}
                        <div className="space-y-4">
                            {processData.map((item) => {
                                const isActive = activeId === item.id;

                                return (
                                    <div
                                        key={item.id}
                                        className="border-b border-white/10 pb-4"
                                    >
                                        <button
                                            onClick={() => setActiveId(item.id)}
                                            className="w-full flex items-center justify-between text-left"
                                        >
                                            <span className="text-3xl font-semibold">
                                                {item.title}
                                            </span>
                                            {isActive ? (
                                                <ChevronUp className="w-5 h-5 text-gray-400" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-gray-400" />
                                            )}
                                        </button>

                                        {isActive && (
                                            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
