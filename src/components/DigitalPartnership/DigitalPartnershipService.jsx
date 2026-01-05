import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const sectionData = [
  {
    id: "Introduction",
    heading: "Defining a Premium Creative Identity",
    paragraphs: [
      "Studio Nive, a boutique creative agency, came to Avexa Studio looking to sharpen their brand and digital touchpoints. With a growing roster of clients, they wanted a clear, compelling identity to match their reputation for fresh ideas and high-end creative direction.",
      "During discovery, we uncovered a lack of consistency across their visuals and messaging. The goal became clear: position Studio Nive as a premium partner for ambitious brands while staying true to their experimental roots. We began by studying their target audience and pinpointing gaps in their current brand experience. From there, we built a plan that fused strategy with style.",
    ],
    image: "https://framerusercontent.com/images/2S2u0QCZnr8QEgHxu6IaJQSHXvg.png",
  },
  {
    id: "Brand Refresh",
    heading: "Building a Brand System That Lasts",
    paragraphs: [
      "To reimagine Studio Nive's brand, we focused on defining a distinct visual language that reflected their playful yet refined aesthetic. We crafted a new logo, typography system, and color palette that felt both modern and timeless. Alongside the visual update, we fine-tuned their tone of voice for web and social content.",
      "On the web design side, we built a dynamic site that showcased their projects through immersive case studies and bold imagery. We also streamlined their service pages for clarity, ensuring potential clients could easily grasp their value. The result was a cohesive brand toolkit ready for every touchpoint.",
    ],
    image: "https://framerusercontent.com/images/TPQGetp3AF31J3T147vrPL296FQ.png",
  },
  {
    id: "Impact",
    heading: "Real Results and Continued Momentum",
    paragraphs: [
      "Since the rebrand, Studio Nive has seen an uptick in inbound project requests from higher-budget clients. Their social engagement rose by 30% thanks to consistent visuals and clearer messaging. Internally, the new brand guidelines helped their growing team stay aligned and present a unified identity.",
      "The new website has been praised for its ease of navigation and standout portfolio display. Studio Nive continues to build on this momentum, expanding their creative services while staying anchored by a brand that truly represents who they are. Avexa Studio remains their trusted partner for ongoing updates and creative support.",
    ],
    image: "https://framerusercontent.com/images/rzHm5dnGquIwCm0XDbImzfQwVno.png",
  },
];

const Section = ({ section, index }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  // Scale and opacity effects for scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div 
      ref={container} 
      className=" sticky top-0 flex items-center justify-center overflow-hidden "
      style={{ 
        background: 'linear-gradient(to bottom, #ffffff 0%, #f9fafb 100%)'
      }}
    >
      <motion.div 
        style={{ scale, opacity, y }}
        className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-start lg:items-center">
          
          {/* Left Side: Section Title */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight mt-10 lg:mt-0 uppercase">
              {section.id}
            </h2>

            {/* Decorative Line */}
            <div className="w-20 h-1 bg-gray-900"></div>

            {/* Description Text - Hidden on mobile */}
            <p className="block text-gray-800 text-sm leading-relaxed max-w-sm">
              Exploring the journey of transformation through strategic design and purposeful innovation.
            </p>
          </motion.div>

          {/* Right Side: Content Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 lg:p-10 mt-0 lg:mt-10 space-y-6 border border-gray-100"
          >
            {/* Section Label */}
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                {section.id}
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Heading */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              {section.heading}
            </h3>

            {/* Paragraphs */}
            <div className="space-y-4">
              {section.paragraphs.map((paragraph, i) => (
                <p 
                  key={i} 
                  className="text-sm sm:text-base text-gray-600 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Image */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full aspect-[16/9] overflow-hidden rounded-lg shadow-lg mt-6"
            >
              <img
                src={section.image}
                alt={section.id}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const DigitalPartnershipService = () => {
  return (
    <main className="relative bg-gray-50">
      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-200 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-300 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Sections */}
      <div className="relative">
        {sectionData.map((section, index) => (
          <Section key={section.id} section={section} index={index} />
        ))}
      </div>
    </main>
  );
};

export default DigitalPartnershipService;