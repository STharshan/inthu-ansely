import React from 'react';

const VideoSection = () => {
  return (
    <section className="relative w-full h-screen max-w-310 mx-auto overflow-hidden ">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
        autoPlay
        loop
        muted
      >
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white px-6 md:px-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">We are Intuitive</h1>
          <p className="text-lg mb-6">Inspiring transformation in care since 1995.</p>
          <button className="py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
