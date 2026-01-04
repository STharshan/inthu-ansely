import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const OurProcess = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Designer",
      company: "DesignCo",
      image: "w8.png",
      quote: "Working with this platform has completely transformed how we approach product development. The tools are intuitive and powerful."
    },
    {
      name: "Michael Davis",
      role: "Engineering Lead",
      company: "TechStart",
      image: "w12.png",
      quote: "The technical architecture and scalability options provided exceeded our expectations. Deployment was seamless."
    },
    {
      name: "Emma Wilson",
      role: "CEO",
      company: "Innovate",
      image: "w11.png",
      quote: "This solution helped us scale from startup to enterprise level. The support team is always there when we need them."
    },
    {
      name: "Jonas Klein",
      role: "Growth Hacker",
      company: "Brava",
      image: "w13.png",
      quote: "Platform Labs' ability to simplify complex AI workflows was a game changer. We now deploy new features faster, with confidence and traceability."
    },
    {
      name: "Sophia Martinez",
      role: "Marketing Director",
      company: "GrowthLabs",
      image: "w9.png",
      quote: "The analytics and insights we get from this platform have been instrumental in driving our marketing strategy forward."
    },
    {
      name: "David Chen",
      role: "CTO",
      company: "DataFlow",
      image: "w14.png",
      quote: "Security and performance were our top priorities. This platform delivered on both fronts without compromise."
    },
  ];

  const handlePrevious = () => {
    setActiveIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setActiveIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Main Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-0 mb-6 md:mb-10">
          
          {/* Left Side - Large Image */}
          <div className="h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px]">
            <img
              src={activeTestimonial.image}
              alt={activeTestimonial.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Testimonial Card */}
          <div className="bg-[#1c1c1e] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 relative flex flex-col justify-between">
            
            {/* Navigation Arrows */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex gap-2 sm:gap-4">
              <button
                onClick={handlePrevious}
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-white/5 transition-all rounded"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff5a3c]" strokeWidth={2.5} />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-white/5 transition-all rounded"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff5a3c]" strokeWidth={2.5} />
              </button>
            </div>

            {/* Quote Icon */}
            <div className="mb-6 md:mb-8">
              <svg className="w-10 h-10 md:w-12 md:h-12 text-gray-700" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8v8h-4l-2 4h8v-12h-2zM20 8v8h-4l-2 4h8v-12h-2z"/>
              </svg>
            </div>

            {/* Quote Text */}
            <div className="flex-1 mb-6 md:mb-10">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
                {activeTestimonial.quote}
              </p>
            </div>

            {/* Author Info */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-light mb-2">
                {activeTestimonial.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-500 mb-1">
                {activeTestimonial.role}
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                {activeTestimonial.company}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative">
          
          {/* Progress Dots */}
          <div className="flex items-center gap-2 mb-6 md:mb-8">
            <span className="text-gray-600 text-xs mr-2">Reviews</span>
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-1 transition-all duration-300 rounded-full ${
                  index === activeIndex 
                    ? 'w-10 bg-[#ff5a3c]' 
                    : 'w-6 bg-gray-700'
                }`}
              />
            ))}
          </div>

          {/* Thumbnails Row */}
          <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {testimonials.map((person, index) => (
              <div key={index} className="relative flex-shrink-0">
                
                {/* Up Arrow - Only shows for active */}
                {index === activeIndex && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                    <svg 
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#ff5a3c]" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                )}

                {/* Thumbnail Button */}
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-16 h-20 sm:w-20 sm:h-28 md:w-24 md:h-32 overflow-hidden transition-all duration-300 ${
                    index === activeIndex
                      ? 'grayscale-0 opacity-100 ring-2 ring-[#ff5a3c]'
                      : 'grayscale opacity-50 hover:opacity-75'
                  }`}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default OurProcess;