import React from 'react';

export default function ServicesHero() {
  return (
    <div className="relative w-full h-screen bg-[#1e1e1e] overflow-hidden flex items-center justify-center p-8">
      {/* Main Content Card */}
      <div className="relative w-full max-w-7xl h-[600px] bg-[#6c588d] rounded-xl overflow-hidden">
        {/* Background Textures */}
        <div className="absolute inset-0 opacity-100">
          {/* Noise Texture */}
          <div 
            className="absolute inset-0 opacity-100"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="150" height="150" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="150" height="150" filter="url(%23noise)" opacity="0.05"/%3E%3C/svg%3E")',
              backgroundRepeat: 'repeat',
              backgroundSize: '150px'
            }}
          />
          
          {/* Dot Grid */}
          <div 
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          />
        </div>

        {/* Animated Blobs */}
        <div className="absolute inset-0" style={{ filter: 'blur(96px)' }}>
          {/* Teal Blob */}
          <div 
            className="absolute w-64 h-64 rounded-full opacity-100"
            style={{
              background: 'radial-gradient(circle, #a2b79f 0%, transparent 70%)',
              left: 'calc(50% + 90px)',
              top: 'calc(50% + 430px)',
              transform: 'translate(-50%, -50%)'
            }}
          />
          
          {/* Orange Blob Top Right */}
          <div 
            className="absolute w-72 h-72 rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, #d8a373 0%, transparent 70%)',
              right: 'calc(0% - 100px)',
              top: 'calc(50% - 170px)',
              transform: 'rotate(-13deg)'
            }}
          />
          
          {/* Orange/Red Blob Left */}
          <div 
            className="absolute w-80 h-80 rounded-full opacity-100"
            style={{
              background: 'radial-gradient(circle, #e0835c 0%, #d8a373 50%, transparent 70%)',
              left: 'calc(0% + 70px)',
              top: 'calc(50% - 200px)',
              transform: 'translateY(-50%) rotate(-7deg) scale(0.8)'
            }}
          />
          
          {/* Purple Blob */}
          <div 
            className="absolute w-96 h-96 rounded-full opacity-100"
            style={{
              background: 'radial-gradient(circle, #6c588d 0%, transparent 70%)',
              left: 'calc(50% - 570px)',
              top: 'calc(50% - 375px)',
              transform: 'translateX(-50%) scale(0.8)'
            }}
          />
          
          {/* Bottom Right Blob */}
          <div 
            className="absolute w-64 h-64 rounded-full opacity-100"
            style={{
              background: 'radial-gradient(circle, #e0835c 30%, #d8a373 60%, transparent 80%)',
              right: '-50px',
              bottom: '-50px'
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-16 py-20">
          {/* Tag */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-white rounded-sm" />
            <span className="text-white text-xs uppercase tracking-widest font-medium">
              our services
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2 mb-8">
            <h1 className="text-white text-7xl font-bold leading-tight">
              From data to insight
            </h1>
            <div className="flex items-baseline gap-6">
              <h1 className="text-white text-7xl font-bold">and</h1>
              <h1 
                className="text-white text-7xl font-serif italic"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                beyond.
              </h1>
            </div>
          </div>

          {/* Description */}
          <p className="text-white text-xl max-w-2xl leading-relaxed opacity-90">
            We help science-led teams build with structure, clarity, and speed.
          </p>
        </div>
      </div>
    </div>
  );
}