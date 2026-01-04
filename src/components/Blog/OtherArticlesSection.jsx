import React, { useState } from 'react';

const OtherArticlesSection = () => {
  const articles = [
    {
      id: 1,
      image: "https://framerusercontent.com/images/xQHTLAJm5NoiLEu2lyjmJCm1Lk.jpg",
      date: "May 13, 2025",
      category: "Ops & Strategy",
      title: "Scaling Finance Ops Without Slowing Down",
      authorImage: "https://framerusercontent.com/images/LZYY71GfAAmwFGFURcEc4dfpoY.jpg",
      authorName: "Ella Navarro",
      authorRole: "Head of Finance Ops",
      link: "#"
    },
    {
      id: 2,
      image: "https://framerusercontent.com/images/vzV4ud1UQ7xLnwDx99ukoOvBW4.jpg",
      date: "May 9, 2025",
      category: "Guides & Resources",
      title: "Modern Budget Workflows That Don't Break Under Pressure",
      authorImage: "https://framerusercontent.com/images/JKorM5B0WmJOc8WoLSGW2e0hNG8.jpg",
      authorName: "Jordan Malik",
      authorRole: "Head of Customer Success",
      link: "#"
    },
    {
      id: 3,
      image: "https://framerusercontent.com/images/ONkjvQAz3gacwCm0BbwyHGXM9Y.jpg",
      date: "May 2, 2025",
      category: "Ops & Strategy",
      title: "Two Speeds, One Team: Keeping Weekly Work Aligned With Strategy",
      authorImage: "https://framerusercontent.com/images/LZYY71GfAAmwFGFURcEc4dfpoY.jpg",
      authorName: "Ella Navarro",
      authorRole: "Head of Finance Ops",
      link: "#"
    }
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-0 leading-tight">
            Looking for more? Dive into our other articles, updates, and strategies
          </h2>
          
          <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
            Browse all articles
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              className="block bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              onMouseEnter={() => setHoveredCard(article.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image with Read More Button */}
              <div className="relative overflow-hidden rounded-2xl group">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Read More Button - Shows on Hover */}
                <div 
                  className={`absolute bottom-4 right-4 transition-all duration-300 ${
                    hoveredCard === article.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                >
                  <div className="bg-white bg-opacity-15 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-black text-sm font-medium">Read more</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span className="bg-amber-50 px-3 py-1 rounded-lg text-xs">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-6 leading-tight">
                  {article.title}
                </h3>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <img 
                    src={article.authorImage}
                    alt={article.authorName}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm">{article.authorName}</p>
                    <p className="text-sm text-gray-600 opacity-70">{article.authorRole}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherArticlesSection;