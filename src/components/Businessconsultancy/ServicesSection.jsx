import React from "react";
import {
  FaCompass,
  FaCogs,
  FaRobot,
  FaSyncAlt,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";

const BusinessConsultancyServicesSection = () => {
  const services = [
    {
      icon: FaCompass,
      title: "Strategic roadmap development & market positioning",
      description:
        "We work with leadership teams to define clear strategic direction, identify growth opportunities, and create actionable roadmaps aligned with market dynamics. Our process includes competitive analysis, SWOT assessments, business model innovation, and strategic planning that balances ambition with achievable milestones.",
    },
    {
      icon: FaCogs,
      title: "Process improvement & efficiency enhancement",
      description:
        "We diagnose operational bottlenecks, map inefficient workflows, and redesign processes that drain resources without adding value. Through lean methodologies and process reengineering, we reduce costs, improve quality, and create scalable systems that enable sustained excellence.",
    },
    {
      icon: FaRobot,
      title: "Intelligent technology adoption & AI integration roadmaps",
      description:
        "We help businesses move beyond AI hype to practical implementation. From assessing data readiness to identifying high-value AI use cases, we design phased implementation plans that deliver measurable business impact.",
    },
    {
      icon: FaSyncAlt,
      title: "Organizational change leadership & culture transformation",
      description:
        "Strategic initiatives fail without effective change management. We support transformation through stakeholder engagement, communication strategies, leadership coaching, and adoption frameworks that turn resistance into momentum.",
    },
    {
      icon: FaChartLine,
      title: "Data strategy, analytics frameworks & decision intelligence",
      description:
        "We transform raw data into strategic assets through analytics strategy, dashboards, governance frameworks, and decision intelligence systems that enable faster, smarter decisions across the organization.",
    },
    {
      icon: FaGlobe,
      title: "Market analysis, customer insights & competitive positioning",
      description:
        "We conduct comprehensive market research using customer interviews, competitive benchmarking, industry analysis, and trend forecasting—revealing opportunity gaps and competitive advantages.",
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-black py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-[#0045EF] rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
              <FaCompass className="text-white text-lg" />
            </div>
            <span className="text-sm font-medium text-[#0045EF]">
              Services Offered
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-5 max-w-3xl text-gray-900 dark:text-white">
            Comprehensive solutions for sustainable business growth
          </h2>

          <p className="text-gray-700 dark:text-gray-300 max-w-3xl text-lg leading-relaxed">
            We deliver specialised consulting services that address today’s
            operational realities while positioning you for tomorrow’s
            opportunities through strategic AI integration.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="rounded-2xl p-8
                bg-blue-50 dark:bg-blue-950/30
                border border-blue-100 dark:border-blue-900
                shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* ICON */}
                <div className="w-14 h-14 rounded-xl bg-[#0045EF]/10 flex items-center justify-center mb-6">
                  <Icon className="text-[#0045EF] text-2xl" />
                </div>

                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white leading-snug">
                  {service.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BusinessConsultancyServicesSection;
