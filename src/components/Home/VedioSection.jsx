import React from 'react';

const VideoSection = () => {
  return (
    <section className="relative w-full h-screen max-w-7xl mx-auto px-4 py-8">
      {/* Wrapper with rounded corners & shadow */}
      <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50">
          <div className="text-center text-white px-6 md:px-12">
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-wide mb-6 drop-shadow-lg">
              Ansely
            </h1>
            <p className="text-xl md:text-2xl font-light drop-shadow-md">
              Digital Growth.{" "}
              <span className="font-semibold">Human Touch.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
