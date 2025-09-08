import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const CardCarousel = () => {
  const carouselRef = useRef();

  const scroll = (direction) => {
    const scrollAmount = direction === 'right' ? 420 * 4 : -420 * 4; // Scroll by 4 card widths (420px each)
    carouselRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  const cards = [
    {
      title: "Can robotic surgery be used for emergency...",
      description: "Exploring the potential of robotic surgery in emergency situations.",
      category: "Problem Solver",
      image: "/m1.avif", // Replace with actual image path
    },
    {
      title: "Intuitive Foundation and the future of surgery",
      description: "How the Intuitive Foundation is shaping the future of surgery.",
      category: "Problem Solver",
      image: "/path-to-image2.png", // Replace with actual image path
    },
    {
      title: "Nephrectomy: a minimally invasive...",
      description: "Discover the benefits of minimally invasive nephrectomy with robotic surgery.",
      category: "Impact Story",
      image: "/path-to-image3.png", // Replace with actual image path
    },
    {
      title: "The evolution of da Vinci systems",
      description: "The journey of da Vinci systems and their role in modern surgeries.",
      category: "Problem Solver",
      image: "/path-to-image4.png", // Replace with actual image path
    },
    {
      title: "Can robotic surgery be used for emergency...",
      description: "Exploring the potential of robotic surgery in emergency situations.",
      category: "Problem Solver",
      image: "/path-to-image1.png", // Replace with actual image path
    },
    {
      title: "Intuitive Foundation and the future of surgery",
      description: "How the Intuitive Foundation is shaping the future of surgery.",
      category: "Problem Solver",
      image: "/path-to-image2.png", // Replace with actual image path
    },
    {
      title: "Nephrectomy: a minimally invasive...",
      description: "Discover the benefits of minimally invasive nephrectomy with robotic surgery.",
      category: "Impact Story",
      image: "/path-to-image3.png", // Replace with actual image path
    },
    {
      title: "The evolution of da Vinci systems",
      description: "The journey of da Vinci systems and their role in modern surgeries.",
      category: "Problem Solver",
      image: "/path-to-image4.png", // Replace with actual image path
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          {/* Left Arrow */}
          <button
            className="text-gray-600 hover:text-blue-600"
            onClick={() => scroll('left')}
          >
            <FaArrowLeft size={24} />
          </button>
          
          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex overflow-x-hidden space-x-4 w-full"
            style={{ scrollBehavior: 'smooth' }} // Smooth scrolling for arrow click
          >
            {cards.map(({ title, description, category, image }, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg w-[295px] h-[420px] overflow-hidden flex-shrink-0" // Width set for 4 cards per row
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-blue-600 text-sm font-semibold">{category}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2">{title}</h3>
                  <p className="text-gray-600 mt-2">{description}</p>
                  <button className="mt-4 text-blue-600 font-medium hover:text-blue-800">
                    Read more →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="text-gray-600 hover:text-blue-600"
            onClick={() => scroll('right')}
          >
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardCarousel;
