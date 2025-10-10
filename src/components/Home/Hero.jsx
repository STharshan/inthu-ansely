import React from "react";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero.jpeg')", // ✅ wrap the image path in url()
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6">
        {/* Decorative Line */}
        <div className="w-20 h-[2px] bg-white mx-auto mb-6"></div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto">
          Driving Innovation <br /> Pushing Boundaries <br /> Elevated by AI
        </h1>

        {/* CTA Button */}
        <a
          href="/projects"
          className="mt-8 inline-block border border-white px-8 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition"
        >
          View Our Projects
        </a>
      </div>
    </section>
  );
}
