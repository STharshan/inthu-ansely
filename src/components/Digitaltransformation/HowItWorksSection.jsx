import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PHASES = [
  {
    id: "01",
    title: "Discovery & Assessment",
    description: "We audit your current processes, interview stakeholders, and identify high-impact automation opportunities. Our team maps your existing tech stack and uncovers inefficiencies.",
    video: "/discovery-assesment-digital-transformation.mp4",
  },
  {
    id: "02",
    title: "Strategy & Design",
    description: "We create a custom transformation roadmap with prioritized initiatives, technology recommendations, and clear ROI projections.",
    video: "/stratergy-design-digital-transformation.mp4",
  },
  {
    id: "03",
    title: "Implementation & Integration",
    description: "Our experts build, configure, and integrate automation solutions with your existing systems. We work in agile sprints, delivering value incrementally.",
    video: "/implementation-integration-digital-transformation.mp4",
  },
  {
    id: "04",
    title: "Optimise & Scale",
    description: "Enjoy streamlined operations while we monitor performance, gather feedback, and continuously optimise. Your automation improves over time.",
    video: "/optimize-scale-digital-transformation.mp4",
  },
];

export default function HowItWorksTransformation() {
  return (
    <section className="bg-white dark:bg-black py-16 md:py-24 px-5 sm:px-8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION - Header + First 2 Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-24">
          
          {/* Header Text */}
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500 mb-4">
              How it works
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-light text-black dark:text-white mb-6">
              Get transformed <br className="hidden md:block" /> 
              in four strategic <br className="hidden md:block" /> 
              phases
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
              And sometimes, see results in as little as 30 days.
            </p>
          </div>

          {/* Steps 01 and 02 */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-6">
            {PHASES.slice(0, 2).map((phase) => (
              <PhaseCard key={phase.id} {...phase} />
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION - Last 2 Steps + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Steps 03 and 04 */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-6 order-2 lg:order-1">
            {PHASES.slice(2, 4).map((phase) => (
              <PhaseCard key={phase.id} {...phase} />
            ))}
          </div>

          {/* CTA SECTION - Corrected Responsive Alignment */}
          <div className="col-span-12 lg:col-span-5 flex items-start lg:items-end justify-start lg:justify-end order-1 lg:order-2 mb-10 lg:mb-0">
            <div className="text-left lg:text-right max-w-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-black dark:text-white mb-3">
                Ready to get started?
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm leading-relaxed">
                Transparent process, measurable results — see how we transform
                businesses like yours.
              </p>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 bg-[#0045EF] text-white pl-7 pr-2 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
              >
                Start your transformation
                <span className="w-10 h-10 flex items-center justify-center bg-white text-[#0045EF] rounded-full transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={20} strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* Reusable Phase Card Component */
const PhaseCard = ({ id, title, description, video }) => (
  <div className="flex flex-col h-full group">
    <span className="text-5xl md:text-6xl text-gray-100 dark:text-gray-900 font-light block mb-4 transition-colors duration-500 group-hover:text-gray-200 dark:group-hover:text-gray-800">
      {id}
    </span>
    <h4 className="text-[13px] font-bold uppercase tracking-wider text-black dark:text-white mb-3">
      {title}
    </h4>
    <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
      {description}
    </p>
    <div className="relative w-full h-52 overflow-hidden rounded-2xl">
      <video
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        src={video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/5 dark:bg-white/5 pointer-events-none" />
    </div>
  </div>
);