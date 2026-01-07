import React, { useEffect, useState } from "react";
import {
  FaProjectDiagram,
  FaServer,
  FaRocket,
  FaRobot,
  FaShieldAlt,
  FaCogs,
} from "react-icons/fa";

/* ===================== SERVICES DATA ===================== */

const services = [
  {
    id: 1,
    title: "Software Architecture & Planning",
    description:
      "We design technical blueprints that align with your business vision. From choosing the right tech stack to planning scalable architectures, we ensure your software foundation is solid, flexible, and future-ready.",
    icon: FaProjectDiagram,
  },
  {
    id: 2,
    title: "Backend & API Development",
    description:
      "From robust APIs to cloud-native infrastructures, we build the invisible engines that power your application. Secure, scalable, and optimized for performance—because what's under the hood matters.",
    icon: FaServer,
  },
  {
    id: 3,
    title: "Development Acceleration",
    description:
      "Stuck in development limbo? We jump in to diagnose bottlenecks, refactor code, and accelerate delivery.",
    icon: FaRocket,
  },
  {
    id: 4,
    title: "Intelligent Features & Automation",
    description:
      "We embed AI and machine learning into your software where it makes real impact.",
    icon: FaRobot,
  },
  {
    id: 5,
    title: "Compliance & Security Implementation",
    description:
      "From GDPR to SOC 2, we integrate compliance and security into your software from day one.",
    icon: FaShieldAlt,
  },
  {
    id: 6,
    title: "Team Integration & DevOps",
    description:
      "We bridge the gap between development, operations, and business teams.",
    icon: FaCogs,
  },
];

/* ===================== SERVICE CARD ===================== */

const ServiceCard = ({ service, isDarkMode }) => {
  const Icon = service.icon;

  return (
    <div className="flex flex-col gap-6">
      {/* Icon Card - Reduced size */}
      <div
        className={`relative rounded-2xl overflow-hidden shadow-lg
        transition-all duration-700 h-72 w-72 mx-auto ${
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
            : 'bg-gradient-to-br from-gray-50 to-white'
        }`}
      >
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl opacity-100">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0045EF] via-blue-400 to-[#0045EF] animate-[spin_3s_linear_infinite] blur-md" />
        </div>

        <div className={`absolute inset-[2px] rounded-2xl z-10 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
            : 'bg-gradient-to-br from-gray-50 to-white'
        }`} />

        {/* Glow blobs - Reduced size */}
        <div className="absolute inset-0 z-20 blur-[50px]">
          <div
            className="absolute w-32 h-32 rounded-full opacity-60"
            style={{
              background: "radial-gradient(circle, #0045EF 0%, transparent 70%)",
              top: "0%",
              left: "0%",
              transform: "translate(10%,10%) scale(1.2)",
            }}
          />
          <div
            className="absolute w-32 h-32 rounded-full opacity-50"
            style={{
              background: "radial-gradient(circle, #0045EF 0%, transparent 70%)",
              bottom: "0%",
              right: "0%",
              transform: "translate(-10%,-10%) scale(1.2)",
            }}
          />
        </div>

        {/* Icon - Reduced size */}
        <div className="relative z-30 w-full h-full flex items-center justify-center">
          <div className="absolute w-20 h-20 rounded-full bg-[#0045EF]/25 transition-all duration-700" />

          <Icon
            size={50}
            className="relative z-10 text-[#0045EF] transition-all duration-700"
            style={{
              filter: "drop-shadow(0 8px 16px rgba(0,69,239,0.4))",
            }}
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-4 text-center">
        <h4 className={`text-2xl font-semibold ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {service.title}
        </h4>

        <p className={`leading-relaxed ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {service.description}
        </p>
      </div>
    </div>
  );
};

/* ===================== MAIN SECTION ===================== */

export default function ServicesSection() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Listen for theme changes from navbar
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`w-full py-20 px-8 ${
      isDarkMode ? 'bg-black' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold mb-16 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} isDarkMode={isDarkMode} />
          ))}
        </div>
      </div>
    </section>
  );
}