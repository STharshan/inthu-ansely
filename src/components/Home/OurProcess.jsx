import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const OurProcess = () => {
  const [activeIndex, setActiveIndex] = useState(3);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  // Listen for theme changes from navbar
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const handlePrevious = () => {
    setActiveIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setActiveIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 md:p-8 ${
      isDarkMode ? 'bg-black' : 'bg-white'
    }`}>
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Main Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-3 sm:gap-4 md:gap-5 mb-6 md:mb-10">
          
          {/* Left Side - Large Image */}
          <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
            <img
              src={activeTestimonial.image}
              alt={activeTestimonial.name}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Right Side - Testimonial Card */}
          <div className={`p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 relative flex flex-col justify-between rounded-xl ${
            isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
          }`}>
            
            {/* Navigation Arrows */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex gap-2 sm:gap-4">
              <button
                onClick={handlePrevious}
                className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all rounded ${
                  isDarkMode ? 'hover:bg-white/5' : 'hover:bg-black/5'
                }`}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#0045EF]" strokeWidth={2.5} />
              </button>
              <button
                onClick={handleNext}
                className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all rounded ${
                  isDarkMode ? 'hover:bg-white/5' : 'hover:bg-black/5'
                }`}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#0045EF]" strokeWidth={2.5} />
              </button>
            </div>

            {/* Quote Icon */}
            <div className="mb-6 md:mb-8">
              <svg className={`w-10 h-10 md:w-12 md:h-12 ${
                isDarkMode ? 'text-gray-700' : 'text-gray-400'
              }`} fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8v8h-4l-2 4h8v-12h-2zM20 8v8h-4l-2 4h8v-12h-2z"/>
              </svg>
            </div>

            {/* Quote Text */}
            <div className="flex-1 mb-6 md:mb-10">
              <p className={`text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {activeTestimonial.quote}
              </p>
            </div>

            {/* Author Info */}
            <div>
              <h3 className={`text-xl sm:text-2xl md:text-3xl font-light mb-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-900'
              }`}>
                {activeTestimonial.name}
              </h3>
              <p className={`text-sm sm:text-base mb-1 ${
                isDarkMode ? 'text-gray-500' : 'text-gray-600'
              }`}>
                {activeTestimonial.role}
              </p>
              <p className={`text-sm sm:text-base ${
                isDarkMode ? 'text-gray-600' : 'text-gray-500'
              }`}>
                {activeTestimonial.company}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative">
          
          {/* Progress Dots */}
          <div className="flex items-center gap-2 mb-6 md:mb-8">
            <span className={`text-xs mr-2 ${
              isDarkMode ? 'text-gray-600' : 'text-gray-500'
            }`}>Reviews</span>
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-1 transition-all duration-300 rounded-full ${
                  index === activeIndex 
                    ? 'w-10 bg-[#0045EF]' 
                    : isDarkMode ? 'w-6 bg-gray-700' : 'w-6 bg-gray-300'
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
                  <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                    <svg 
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#0045EF]" 
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
                  className={`relative w-14 h-16 sm:w-16 sm:h-20 md:w-20 md:h-28 lg:w-24 lg:h-32 overflow-hidden transition-all duration-300 rounded-lg ${
                    index === activeIndex
                      ? 'grayscale-0 opacity-100 ring-2 ring-[#0045EF]'
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