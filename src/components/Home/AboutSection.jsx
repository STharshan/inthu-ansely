import React from 'react';

const AboutSection = () => {
  const cards = [
    {
      title: "Intuitive’s da Vinci 5 surgical system receives CE mark approval in Europe",
      description: "Intuitive’s da Vinci 5 surgical system has received CE mark approval in Europe, expanding its reach and improving surgical outcomes.",
      category: "Press Release",
      image: "/m1.avif", // Replace with actual image path
    },
    {
      title: "The impact of our environmental, social, and governance commitment",
      description: "Explore the impact of our environmental, social, and governance (ESG) commitment in advancing sustainability in healthcare.",
      category: "Feature",
      image: "/m1.avif", // Replace with actual image path
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-310 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cards.map(({ title, description, category, image }, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-blue-600 text-sm font-semibold">{category}</div>
                <h3 className="text-xl font-semibold text-gray-900 mt-2">{title}</h3>
                <p className="text-gray-600 mt-2">{description}</p>
                <button className="mt-4 text-blue-600 font-medium hover:text-blue-800">
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
