import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      number: "1",
      title: "Budget development & forecasting",
      description: "Designing accurate budgets and projections to guide financial stability and strategic growth."
    },
    {
      number: "2",
      title: "Cash flow management",
      description: "Optimizing resources to maintain liquidity and operational efficiency across your organization."
    },
    {
      number: "3",
      title: "Investment planning",
      description: "Evaluating opportunities and balancing risk for consistent, long-term financial returns."
    },
    {
      number: "4",
      title: "Tax strategy & optimization",
      description: "Developing smart tax strategies that enhance savings and ensure full compliance."
    },
    {
      number: "5",
      title: "Risk management",
      description: "Identifying and mitigating potential financial risks to protect your business assets."
    },
    {
      number: "6",
      title: "Retirement & succession planning",
      description: "Preparing for future transitions through structured retirement and leadership plans."
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center">
              <div className="relative w-4 h-4">
                <div className="absolute w-4 h-0.5 bg-white top-1/2 left-0 transform -translate-y-1/2"></div>
                <div className="absolute w-0.5 h-4 bg-white left-1/2 top-0 transform -translate-x-1/2"></div>
              </div>
            </div>
            <span className="text-sm font-medium">Services Offered</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 max-w-2xl">
            Comprehensive solutions for sustainable financial growth
          </h2>
          
          <p className="text-gray-600 max-w-3xl text-lg">
            We deliver specialized planning services to help you manage today's challenges and prepare for tomorrow's opportunities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.number}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-xl font-bold">{service.number}</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;