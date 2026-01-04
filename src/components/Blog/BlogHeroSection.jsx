import React from 'react';

const BlogHeroSection = () => {
  const tags = ['PERMISSIONS', 'ROLE MANAGEMENT', 'PROCESSES'];

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-between">
            {/* Top Section */}
            <div>
              {/* Meta Information */}
              <div className="flex items-center gap-2 text-xs text-gray-600 mb-6 uppercase tracking-wide">
                <span className="font-medium">Product & Updates</span>
                <span>•</span>
                <span>May 5, 2025</span>
                <span>•</span>
                <span>3 min</span>
                <span>Read</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Introducing Roles & Permissions in Vectura
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                See how new roles and permissions give finance leaders more control and flexibility in managing spend approvals across departments.
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <img 
                  src="https://framerusercontent.com/images/cmQt0ay0xGNLe9Sc30vSaXtio.jpg" 
                  alt="Clara Jensen"
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-black">Clara Jensen</p>
                  <p className="text-sm text-gray-700">Product Marketing Manager</p>
                </div>
              </div>

              {/* Tags - Below Author */}
              <div className="flex flex-wrap gap-2 mt-6">
                {tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-3 py-2 bg-blue-50 text-black text-xs font-light tracking-wider rounded-lg uppercase"
                    style={{ fontFamily: '"Chivo Mono", monospace' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Empty or can add content */}
          <div className="hidden lg:block">
          </div>
        </div>

        {/* Featured Image */}
        <div className="w-full">
          <img 
            src="https://framerusercontent.com/images/2kq6l9zkPi4aa57pKEkSYHd2qU.jpg" 
            alt="Featured image"
            className="w-full h-auto max-h-96 object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSection;