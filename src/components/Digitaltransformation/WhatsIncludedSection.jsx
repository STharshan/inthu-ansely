
import React, { useState, useEffect } from "react";

const OurServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Systems Strategy",
      subtitle: "Digital Transformation Roadmap",
      shortDesc: "Comprehensive transformation strategies aligning technology with business goals.",
      description:
        "We design comprehensive transformation strategies that align technology with your business goals. Through detailed process mapping, stakeholder interviews, and competitive analysis, we identify automation opportunities and create phased implementation plans. Our roadmaps balance quick wins with long-term vision, ensuring you see value at every stage while building toward sustainable digital maturity.",
      image: "/system-strategy-digital-transformation.jpeg",
    },
    {
      title: "Infrastructure Design",
      subtitle: "Automation Architecture & Integration",
      shortDesc: "Technical backbone connecting tools and eliminating data silos.",
      description:
        "From workflow automation platforms to cloud infrastructure, we architect the technical backbone that makes automation possible. We design systems that connect your existing tools, eliminate data silos, and create seamless information flow across departments. Our infrastructure solutions are built with scalability in mind—whether you're automating 10 processes today or 1,000 tomorrow.",
      image: "/infrastructure-digital-transformation.jpeg",
    },
    {
      title: "Execution Support",
      subtitle: "Implementation Acceleration & Optimization",
      shortDesc: "Diagnose blockers and inject momentum into stalled initiatives.",
      description:
        "Transformation stalled mid-flight? We diagnose what's blocking progress and inject momentum back into your initiatives. Our team steps in to troubleshoot failing automations, reconfigure workflows, retrain teams, and get implementations back on track. We've rescued countless transformation projects from the valley of disillusionment.",
      image: "/execution-support-digital-transformation.jpeg",
    },
    {
      title: "AI & Data Integration",
      subtitle: "Intelligent Automation & Machine Learning",
      shortDesc: "AI embedded where it delivers measurable impact.",
      description:
        "We embed AI into your workflows where it delivers measurable impact—not just for the sake of innovation. From predictive analytics that forecast demand to natural language processing that automates customer service, we implement AI solutions grounded in real business needs. Our approach includes data pipeline design, model training, and continuous monitoring.",
      image: "/ai-data-digital-transformation.jpeg",
    },
    {
      title: "Regulatory Guidance",
      subtitle: "Compliance Automation & Risk Management",
      shortDesc: "Automate compliance while maintaining regulatory alignment.",
      description:
        "We help you automate compliance processes while maintaining full regulatory alignment. Our consultants understand industry-specific requirements—from financial regulations to data privacy laws—and build automation frameworks that document, audit, and report automatically. We implement approval workflows, audit trails, and compliance dashboards.",
      image: "/regulatory-guidence-digital-transformation.jpeg",
    },
    {
      title: "Collaborative Ops",
      subtitle: "Change Management & Team Enablement",
      shortDesc: "Facilitate the human side of digital transformation.",
      description:
        "Technology transformation succeeds or fails based on people adoption. We facilitate the human side of digital change through training programs, change management frameworks, and collaborative workshops. Our approach includes identifying automation champions, creating internal documentation, and building feedback loops that ensure continuous improvement.",
      image: "/collaborative-ops-digital-transformation.jpeg",
    },
  ];

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedService !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleCardClick = (index) => {
    setSelectedService(index);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const service = selectedService !== null ? services[selectedService] : null;

  return (
    <section className="w-full overflow-x-hidden bg-white dark:bg-[#0a0a0a] py-24 px-6 transition-colors duration-300">
      <div className="w-full min-w-0 max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
            Our Services
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white tracking-tight">
              How We Support You
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-sm lg:text-right leading-relaxed">
              Everything we do is designed to automate, optimise, and integrate your systems.
            </p>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-w-0">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className="service-card group relative cursor-pointer min-w-0"
            >
              <div 
                className="relative overflow-hidden rounded-2xl h-[304px] flex flex-col bg-gray-100 dark:bg-[#111] border border-gray-200 dark:border-gray-800/50
                  transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 dark:hover:border-gray-700 dark:hover:bg-[#151515]"
              >
                {/* Image */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-100 dark:from-[#111] via-gray-100/20 dark:via-[#111]/20 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-5 pb-8 pr-12 flex flex-col flex-1 min-h-0">
                  {/* Title - Large and Bold */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 tracking-tight group-hover:text-[#0045EF] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Subtitle - Blue accent */}
                  <p className="text-[#0045EF] text-xs font-medium mb-3">
                    {service.subtitle}
                  </p>
                  
                  {/* Short Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>
                </div>
                
                {/* Learn more indicator (expands on hover) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(index);
                  }}
                  className="absolute bottom-4 right-4 rounded-full border border-gray-300/70 dark:border-white/15 bg-white/90 dark:bg-black/40 shadow-sm backdrop-blur-sm
                    px-3 py-1.5 text-xs font-medium text-gray-800 dark:text-gray-200 cursor-pointer
                    hover:border-[#0045EF] hover:text-[#0045EF] hover:bg-[#0045EF]/10
                    focus:outline-none focus:ring-2 focus:ring-[#0045EF]/40 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#0a0a0a]"
                  aria-label="Learn more"
                >
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
            Ready to transform your operations?
          </h3>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0045EF] text-white
              text-sm font-medium transition-all duration-300 hover:bg-[#0038c7]"
          >
            Learn More
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* MODAL OVERLAY */}
      {selectedService !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={closeModal}
        >
          {/* Backdrop - dims the cards behind */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800
              animate-modal-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100/80 dark:bg-black/50 backdrop-blur-sm
                flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-black/70
                transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-56 lg:h-auto lg:min-h-[400px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-white dark:from-[#111] via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Content Side */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-2 tracking-tight">
                  {service.title}
                </h3>
                
                {/* Subtitle */}
                <p className="text-[#0045EF] font-medium mb-6">
                  {service.subtitle}
                </p>
                
                {/* Full Description */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  {service.description}
                </p>
                
                {/* Action buttons */}
                <div className="flex flex-wrap gap-3">
                  {/* <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0045EF] text-white
                      text-sm font-medium transition-all duration-300 hover:bg-[#0038c7]"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a> */}
                  <button
                    onClick={closeModal}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300
                      text-sm font-medium transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Services
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedService(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === selectedService 
                      ? 'bg-[#0045EF] w-6' 
                      : 'bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @keyframes modal-in {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-modal-in {
          animation: modal-in 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default OurServicesSection;