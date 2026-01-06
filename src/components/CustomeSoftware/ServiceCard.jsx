import React, { useState } from 'react';

const services = [
  {
    id: 1,
    title: "Systems Strategy",
    description: "We design technical and organizational frameworks that help research, data, and decision-making move together—at speed and scale.",
    icon: "M0 0 L8 0 L8 8 L4 4 L0 8 Z M4 4 L8 8 L8 16 L0 16 L0 8 Z",
  },
  {
    id: 2,
    title: "Infrastructure Design",
    description: "From lab systems to computational pipelines, we architect the back-end that powers breakthroughs. Built to adapt, built to last.",
    icon: "M8 0 L16 4 L12 8 L16 12 L8 16 L0 12 L4 8 L0 4 Z",
  },
  {
    id: 3,
    title: "Execution Support",
    description: "Whether you're stuck at the strategy stage or mid-build, we step in to diagnose, recalibrate, and bring momentum to your mission.",
    icon: "M0 0 L16 0 L16 4 L12 4 L12 12 L16 12 L16 16 L0 16 L0 12 L4 12 L4 4 L0 4 Z",
  },
  {
    id: 4,
    title: "AI & Data Integration",
    description: "We help research teams harness AI responsibly—embedding intelligent tools into workflows where they actually drive impact.",
    icon: "M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z M8 4 L8 12 M4 8 L12 8",
  },
  {
    id: 5,
    title: "Regulatory Guidance",
    description: "Our consultants guide product teams through scientific, technical, and regulatory alignment—so nothing stalls in translation.",
    icon: "M8 0 A8 8 0 1 1 8 16 A8 8 0 1 1 8 0 M8 4 A4 4 0 1 0 8 12 A4 4 0 1 0 8 4",
  },
  {
    id: 6,
    title: "Collaborative Ops",
    description: "We facilitate coordination between R&D, engineering, and leadership—helping complex teams think clearly and build cohesively.",
    icon: "M8 2 L14 8 L8 14 L2 8 Z M4 8 L8 4 L12 8 L8 12 Z",
  }
];

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      {/* Icon Card with hover effect */}
      <a 
        href="./service-industries"
        className="relative bg-[#121212] rounded-xl aspect-square overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Textures */}
        <div className="absolute inset-0">
          {/* Dot Grid */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          />
          
          {/* Noise Texture */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="150" height="150" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="150" height="150" filter="url(%23noise)" opacity="0.05"/%3E%3C/svg%3E")',
              backgroundRepeat: 'repeat',
              backgroundSize: '150px'
            }}
          />
        </div>

        {/* Animated Blobs on Hover */}
        <div className="absolute inset-0" style={{ filter: 'blur(54px)' }}>
          {/* Green Blob */}
          <div 
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full transition-all duration-700 ease-out"
            style={{
              background: 'radial-gradient(circle, #a2b79f 0%, transparent 70%)',
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'scale(1)' : 'scale(0.5)',
            }}
          />
          
          {/* Orange Blob */}
          <div 
            className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full transition-all duration-700 ease-out"
            style={{
              background: 'radial-gradient(circle, #e0835c 0%, transparent 70%)',
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'scale(1)' : 'scale(0.5)',
            }}
          />
        </div>

        {/* Icon */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <svg 
            width="96" 
            height="96" 
            viewBox="0 0 16 16" 
            fill="white"
            className="transition-transform duration-300 group-hover:scale-110"
          >
            <path d={service.icon} />
          </svg>
        </div>
      </a>

      {/* Content */}
      <div className="flex flex-col gap-4">
        <h4 className="text-white text-2xl font-semibold">
          {service.title}
        </h4>
        
        <p className="text-gray-400 text-base leading-relaxed">
          {service.description}
        </p>

        {/* Learn More Link */}
        <a 
          href="./service-industries"
          className="inline-flex items-center gap-2 text-white text-sm group/link w-fit"
        >
          <div className="relative overflow-hidden h-5">
            <div className="transition-transform duration-300 group-hover/link:-translate-y-full">
              <div className="h-5 flex items-center">Learn more</div>
              <div className="h-5 flex items-center">Learn more</div>
            </div>
          </div>
          
          {/* Arrow Icon */}
          <svg 
            width="14" 
            height="14" 
            viewBox="0 0 14 14" 
            fill="white"
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          >
            <path d="M 14 10.083 L 10 13.833 L 10 6.333 Z" />
            <path d="M 0 9.333 L 10 9.333 L 10 10.833 L 0 10.833 Z" />
            <path d="M 1.5 0.333 L 1.5 10.333 L 0 10.333 L 0 0.333 Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default function ServicesSection() {
  return (
    <div className="w-full bg-[#1e1e1e] py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight max-w-4xl">
            Science today is a team sport.{' '}
            <span className="text-white/50">
              We help clients architect the platforms, strategies, and environments that support work at scale.
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}