import React from 'react';

const CardsSection = () => {
  // Array for the content of the cards
  const cards = [
    {
      title: "My Intuitive",
      description: "Data. Insights. Action.",
      image: "/path/to/image1.png", // Replace with actual image path
    },
    {
      title: "SimNow",
      description: "Sharpen your surgical skills",
      image: "/path/to/image2.png", // Replace with actual image path
    },
    {
      title: "SureForm Stapling",
      description: "Consistency and precision",
      image: "/path/to/image3.png", // Replace with actual image path
    }
  ];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-310 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-lg text-gray-600 mb-4">{card.description}</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                  Learn more
                </button>
              </div>
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
