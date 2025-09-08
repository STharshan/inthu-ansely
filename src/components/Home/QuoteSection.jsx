import React from 'react';

const QuoteSection = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0">
        {/* Left Section (Image) */}
        <div className="flex-shrink-0 w-48 h-48 bg-cover rounded-lg overflow-hidden">
          <img
            src="/side.avif"
            alt="Sam Balsubramani"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Section (Text) */}
        <div className="flex-1 p-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
            Belonging matters. Intuitive provides a safe space for expression, knowledge, and community.
          </h2>
          <div className="text-lg mb-4">
            <strong>Sam Balsubramani</strong>, Global Ecosystem Portfolio Marketing
          </div>
          <a
            href="http://careers.intuitive.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800 text-white py-2 px-6 rounded-full hover:bg-blue-900 transition duration-300"
          >
            Join Intuitive
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
