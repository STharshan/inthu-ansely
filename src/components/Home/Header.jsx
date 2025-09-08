import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  const slides = [
    {
      image: "/h1.avif", // Replace with actual image path
      title: "Da Vinci 5",
      subtitle: "The most advanced and integrated platform we’ve ever created.",
      link: "/en-us/products-and-services/da-vinci/5"
    },
    {
      image: "/h2.avif", // Replace with actual image path
      title: "Da Vinci SP",
      subtitle: "Inspiring new and transformative surgical approaches.",
      link: "/en-us/products-and-services/da-vinci/sp"
    },
    {
      image: "/h3.avif", // Replace with actual image path
      title: "Ion robotic bronchoscopy",
      subtitle: "Advancing lung cancer care with minimally invasive biopsies.",
      link: "/en-us/products-and-services/ion"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to navigate to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Function to navigate to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-12 px-6 bg-gray-50">
      <div className="max-w-310 mx-auto">
        {/* Carousel */}
        <div className="relative">
          <div className="flex overflow-hidden">
            {/* Carousel Slides */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map(({ image, title, subtitle, link }, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full" // Ensure only one image per slide
                >
                  <div className="relative">
                    {/* Image */}
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-[500px] object-cover rounded-lg" // Adjust the height for your design
                    />
                    <div className="absolute top-0 left-0 bg-opacity-30 p-4 text-white">
                      {/* Content in top-left corner */}
                      <h2 className="text-7xl font-semibold mb-2 p-5">{title}</h2>
                      <p className="text-xl p-5 mb-4">{subtitle}</p>
                      <div className='p-5'>
                        <a
                          href={link}
                          className="bg-blue-600 text-white px-6 font-semibold py-3 rounded-full hover:bg-blue-700 transition duration-300"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Left Arrow */}
            <button
              className="absolute top-1/2 -left-12 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full focus:outline-none"
              onClick={prevSlide}
            >
              <FaArrowLeft size={20} />
            </button>

            {/* Right Arrow */}
            <button
              className="absolute top-1/2 -right-12 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full focus:outline-none"
              onClick={nextSlide}
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
