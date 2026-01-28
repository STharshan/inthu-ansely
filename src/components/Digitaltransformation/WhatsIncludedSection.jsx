import React from "react";

const OurServicesSection = () => {
  const services = [
    {
      title: "Systems Strategy",
      subtitle: "Digital Transformation Roadmap",
      description:
        "We design comprehensive transformation strategies that align technology with your business goals. Through detailed process mapping, stakeholder interviews, and competitive analysis, we identify automation opportunities and create phased implementation plans. Our roadmaps balance quick wins with long-term vision, ensuring you see value at every stage while building toward sustainable digital maturity. We don't just recommend change—we architect the path forward with clarity, measurable milestones, and realistic timelines that your entire organization can rally behind.",
      image: "/system-strategy-digital-transformation.jpeg",
    },
    {
      title: "Infrastructure Design",
      subtitle: "Automation Architecture & Integration",
      description:
        "From workflow automation platforms to cloud infrastructure, we architect the technical backbone that makes automation possible. We design systems that connect your existing tools, eliminate data silos, and create seamless information flow across departments. Our infrastructure solutions are built with scalability in mind—whether you're automating 10 processes today or 1,000 tomorrow. We specialize in API integrations, middleware development, and creating unified platforms that turn disconnected tools into a cohesive digital ecosystem that actually works together.",
      image: "/infrastructure-digital-transformation.jpeg",
    },
    {
      title: "Execution Support",
      subtitle: "Implementation Acceleration & Optimization",
      description:
        "Transformation stalled mid-flight? We diagnose what's blocking progress and inject momentum back into your initiatives. Our team steps in to troubleshoot failing automations, reconfigure workflows, retrain teams, and get implementations back on track. Whether you're facing technical challenges, user adoption issues, or simply need extra hands during critical phases, we provide tactical support that bridges the gap between planning and execution. We've rescued countless transformation projects from the valley of disillusionment and delivered them to sustainable success.",
      image: "/execution-support-digital-transformation.jpeg",
    },
    {
      title: "AI & Data Integration",
      subtitle: "Intelligent Automation & Machine Learning",
      description:
        "We embed AI into your workflows where it delivers measurable impact—not just for the sake of innovation. From predictive analytics that forecast demand to natural language processing that automates customer service, we implement AI solutions grounded in real business needs. Our approach includes data pipeline design, model training, integration with existing systems, and continuous monitoring to ensure AI tools remain accurate and valuable. We make AI practical, not theoretical, helping your business leverage machine learning to make faster, smarter decisions.",
      image: "/ai-data-digital-transformation.jpeg",
    },
    {
      title: "Regulatory Guidance",
      subtitle: "Compliance Automation & Risk Management",
      description:
        "We help you automate compliance processes while maintaining full regulatory alignment. Our consultants understand industry-specific requirements—from financial regulations to data privacy laws—and build automation frameworks that document, audit, and report automatically. We implement approval workflows, audit trails, and compliance dashboards that give you real-time visibility into risk exposure. By automating compliance tasks, we reduce human error, ensure consistency, and free your team from tedious documentation while maintaining the rigorous standards regulators demand.",
      image: "/regulatory-guidence-digital-transformation.jpeg",
    },
    {
      title: "Collaborative Ops",
      subtitle: "Change Management & Team Enablement",
      description:
        "Technology transformation succeeds or fails based on people adoption. We facilitate the human side of digital change through training programs, change management frameworks, and collaborative workshops that bring teams along the journey. Our approach includes identifying automation champions, creating internal documentation, establishing governance structures, and building feedback loops that ensure continuous improvement. We work across departments to align stakeholders, resolve conflicts, and create shared ownership of transformation initiatives, turning potential resistance into enthusiastic participation.",
      image: "/collaborative-ops-digital-transformation.jpeg",
    },
  ];

  return (
    <section className="bg-white dark:bg-black py-32 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">
            How We Support You
            </h2>
          </div>

          <div className="flex items-end">
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md lg:ml-auto">
            Everything we do is designed to automate, optimise, and integrate your systems – so your business
            operates smarter and scales faster.
            </p>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
            >
              <img
                src={service.image}
                alt={service.title}
                className="rounded-2xl w-full h-[220px] object-cover"
              />
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl px-8 py-10 flex flex-col justify-center transition-colors duration-500">
                <h3 className="text-sm font-semibold uppercase text-black dark:text-white mb-2">
                  {service.title}
                </h3>
                <h4 className="text-[#0045EF] font-semibold mb-4">
                  {service.subtitle}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-black dark:text-white mb-6">
            Ready to transform your operations?
          </h3>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-[#0045EF] text-white
                       font-semibold transform transition-all duration-300 shadow-lg
                       hover:scale-105 hover:shadow-xl"
          >
            Get Started
            <span className="bg-white text-[#0045EF] w-8 h-8 flex items-center justify-center rounded-full text-lg transition-transform duration-300">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
