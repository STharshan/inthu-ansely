import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const sectionData = [
  {
    id: "Care Coordination Platform",
    heading: "Transforming Care Through Connected Technology",
    paragraphs: [
      "Our Care Coordination Platform is designed to streamline communication, data flow, and workflows across healthcare providers, caregivers, and stakeholders.",
      "Built with scalability and compliance in mind, the platform reduces operational friction, improves patient outcomes, and enables organizations to deliver coordinated, efficient care. As a digital partner, we continuously refine the platform to adapt to evolving healthcare needs and regulations—ensuring long-term reliability and impact."
    ],
    image: "d1.avif"
  },
  {
    id: "ERP System",
    heading: "A Unified System for Smarter Business Operations",
    paragraphs: [
      "Our custom-built ERP system centralizes your core business processes into a single, intelligent platform. From finance and inventory to operations and reporting, we design ERP solutions that provide clarity, control, and real-time insights.",
      "Rather than forcing businesses to adapt to rigid software, we tailor the system around your workflows—supporting growth, automation, and data-driven decision-making. We evolve the platform with you as your business scales."
    ],
    image: "d1.avif"
  },
  {
    id: "Salon Booking Management System",
    heading: "Powering Modern Service Businesses",
    paragraphs: [
      "The Salon Booking Management System is built to support high-volume, customer-centric service businesses. It enables seamless appointment booking, staff scheduling, client management, and payment tracking through an intuitive digital experience.",
      "Designed for both business owners and end customers, the system improves operational efficiency while elevating the customer journey. As your tech partner, we continue enhancing the platform to meet changing market expectations and customer behaviors."
    ],
    image: "d1.avif"
  },
  {
    id: "Our Partnership Model",
    heading: "More Than Software. A Long-Term Tech Ally.",
    paragraphs: [
      "We work as an extension of your team—handling architecture, development, optimization, and ongoing improvements. From idea validation to product scaling, we help turn technology into a competitive advantage.",
      "Build with confidence. Scale with clarity. Compete digitally."
    ],
    image: "d1.avif"
  }
];

const Section = ({ section, index }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center overflow-hidden bg-white dark:bg-black"
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mt-10 lg:mt-0 uppercase">
              {section.id}
            </h2>

            <div className="w-20 h-1 bg-gray-900 dark:bg-white"></div>

            <p className="block text-gray-800 dark:text-gray-300 leading-relaxed max-w-sm">
              Digital Partnerships is where strategy meets execution. <br />
              We don't just build software—we become your technology partner, working alongside you to create, launch, and evolve digital products that form the backbone of your business. <br />
              Whether you're modernizing operations or launching a tech-enabled venture, we bring the expertise, systems, and long-term support needed to compete in a digital-first world.
            </p>
          </motion.div>

          {/* Right Side: Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl p-6 sm:p-8 lg:p-10 mt-0 lg:mt-10 space-y-6 border border-gray-100 dark:border-gray-800"
          >
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                {section.id}
              </span>
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
              {section.heading}
            </h3>

            <div className="space-y-4">
              {section.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = savedTheme === "dark";
    
    setIsDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
    
    // Set CSS variables for gradients
    updateGradientColors(prefersDark);
  }, []);

  const updateGradientColors = (dark) => {
    const root = document.documentElement;
    if (dark) {
      root.style.setProperty('--bg-start', '#000000');
      root.style.setProperty('--bg-end', '#0a0a0a');
    } else {
      root.style.setProperty('--bg-start', '#ffffff');
      root.style.setProperty('--bg-end', '#f9fafb');
    }
  };

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = !isDark;
    setIsDark(next);
    root.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    updateGradientColors(next);
  };

  return (
    <main className="relative bg-gray-50 dark:bg-black">
      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-200 dark:bg-gray-800 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-300 dark:bg-gray-800 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
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