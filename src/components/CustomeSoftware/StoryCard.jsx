import React, { useState } from 'react';

const stories = [
  {
    id: 1,
    company: "continuum.ai",
    logo: "https://framerusercontent.com/images/VoZ0vz9Zs5xwDizFsB9tQFB3jpw.svg",
    image: "https://framerusercontent.com/images/oYvV35p7ejV0T7qlnwQ5HuFGWdY.webp",
    title: "How continuum.ai scaled scientific models across global labs.",
    category: "PUBLIC HEALTH",
    url: "../customers/how-continuum-ai-scaled-scientific-models-across-global-labs"
  },
  {
    id: 2,
    company: "Gridpoint",
    logo: "https://framerusercontent.com/images/1ibNLsX9pvlNwhTGzJU4fuyJgY.svg",
    image: "https://framerusercontent.com/images/507BGOQx7r8eVukSrsGwoM57hSE.webp",
    title: "Gridpoint's journey from fragmented data to unified intelligence.",
    category: "FINANCE",
    url: "../customers/gridpoint-s-journey-from-fragmented-data-to-unified-intelligence"
  }
];

const StoryCard = ({ story }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={story.url}
      className="flex flex-col bg-[#121212] rounded-xl overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-80 bg-[#1e1e1e] overflow-hidden">
        {/* Main Image */}
        <div className="absolute inset-0">
          <img
            src={story.image}
            alt={story.company}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(18, 18, 18, 0.71) 100%)'
          }}
        />

        {/* Logo */}
        <div className="absolute bottom-6 left-6">
          <img
            src={story.logo}
            alt={story.company}
            className="h-6 object-contain"
            style={{ objectPosition: 'left bottom' }}
          />
        </div>
      </div>

      {/* Content Section */}
      <div 
        className="relative p-8 backdrop-blur-lg"
        style={{ backdropFilter: 'blur(32px)' }}
      >
        {/* Title */}
        <h4 className="text-white text-2xl font-semibold mb-6 leading-snug">
          {story.title}
        </h4>

        {/* Meta Section */}
        <div className="flex items-center justify-between">
          {/* Category Badge */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-sm" />
            <span className="text-white text-xs uppercase tracking-wider font-medium">
              {story.category}
            </span>
          </div>

          {/* Arrow Button */}
          <div 
            className="relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              backdropFilter: 'blur(6px)',
              backgroundColor: 'rgba(255, 255, 255, 0.06)'
            }}
          >
            <div className="relative w-5 h-5 overflow-hidden">
              {/* Hover Arrow */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="white"
                className="absolute inset-0 transition-transform duration-300"
                style={{
                  transform: isHovered ? 'translate(0, 0)' : 'translate(-100%, 100%)'
                }}
              >
                <path d="M20 14.4 L14.3 20 L14.3 9 Z" />
                <path d="M0 13.3 L14.3 13.3 L14.3 15.4 L0 15.4 Z" />
                <path d="M2.1 0.5 L2.1 14.7 L0 14.7 L0 0.5 Z" />
              </svg>

              {/* Default Arrow */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="white"
                className="absolute inset-0 transition-transform duration-300"
                style={{
                  transform: isHovered ? 'translate(100%, -100%)' : 'translate(0, 0)'
                }}
              >
                <path d="M20 14.4 L14.3 20 L14.3 9 Z" />
                <path d="M0 13.3 L14.3 13.3 L14.3 15.4 L0 15.4 Z" />
                <path d="M2.1 0.5 L2.1 14.7 L0 14.7 L0 0.5 Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default function CustomerStories() {
  return (
    <section className="w-full bg-[#1e1e1e] py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-white text-5xl font-bold mb-12">
          Customer Stories
        </h2>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>

        {/* Footer Link */}
        <div className="flex items-center justify-end gap-4">
          <p className="text-gray-400 text-base">
            Explore more success stories
          </p>
          
          <a 
            href="../customers"
            className="inline-flex items-center gap-2 text-white text-sm group/link"
          >
            <div className="relative overflow-hidden h-5">
              <div className="transition-transform duration-300 group-hover/link:-translate-y-full">
                <div className="h-5 flex items-center">Our Customers</div>
                <div className="h-5 flex items-center">Our Customers</div>
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
    </section>
  );
}