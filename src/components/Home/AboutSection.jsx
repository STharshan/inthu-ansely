'use client';
import React from "react";

export default function AboutUs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-3xl">
            Thoughtful ingenuity meets precise technology
          </h2>
          <span className="uppercase text-[#C0752E] tracking-wide font-semibold mt-4 md:mt-0">
            About Us
          </span>
        </div>
        <p className="text-gray-600 max-w-4xl mx-auto md:mx-0 mb-12">
          In the ever-evolving world of innovation, our mission is to bridge elegance and precision.
          From smart automation to optimised solutions, we combine artistry and science to deliver
          transformative results. Our team continues to push the boundaries of what’s possible.
        </p>

        {/* Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
            >
              <img
                src={`/images/about-${item}.jpg`}
                alt={`About ${item}`}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Title {item}
                </h3>
                <p className="text-sm text-gray-500">
                  Short description or supporting text goes here for item {item}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
