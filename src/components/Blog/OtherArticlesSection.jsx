"use client";
import React, { useState } from "react";
import LazyImage from "../LazyImage";

export default function OtherArticlesSection() {
  const articles = [
    {
      id: 1,
      image: "https://framerusercontent.com/images/xQHTLAJm5NoiLEu2lyjmJCm1Lk.jpg",
      date: "May 13, 2025",
      category: "Ops & Strategy",
      title: "Scaling Finance Ops Without Slowing Down",
      authorImage: "/team-placeholder.png",
      authorName: "Ella Navarro",
      authorRole: "Head of Finance Ops",
      link: "#",
    },
    {
      id: 2,
      image: "https://framerusercontent.com/images/vzV4ud1UQ7xLnwDx99ukoOvBW4.jpg",
      date: "May 9, 2025",
      category: "Guides & Resources",
      title: "Modern Budget Workflows That Don't Break Under Pressure",
      authorImage: "/team-placeholder.png",
      authorName: "Jordan Malik",
      authorRole: "Head of Customer Success",
      link: "#",
    },
    {
      id: 3,
      image: "https://framerusercontent.com/images/ONkjvQAz3gacwCm0BbwyHGXM9Y.jpg",
      date: "May 2, 2025",
      category: "Ops & Strategy",
      title: "Two Speeds, One Team: Keeping Weekly Work Aligned With Strategy",
      authorImage: "/team-placeholder.png",
      authorName: "Ella Navarro",
      authorRole: "Head of Finance Ops",
      link: "#",
    },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="w-full bg-white dark:bg-black py-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight
            text-black dark:text-white max-w-3xl"
          >
            Looking for more? Dive into our other articles, updates, and strategies
          </h2>

          <button
            className="rounded-full px-6 py-3 font-medium transition
            bg-[#0045EF] text-white hover:opacity-90 whitespace-nowrap"
          >
            Browse all articles
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              className="group block rounded-2xl overflow-hidden
                bg-gray-100 dark:bg-gray-900
                border border-gray-200 dark:border-white/10
                transition hover:shadow-lg"
              onMouseEnter={() => setHoveredCard(article.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <LazyImage
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                  width={400}
                  height={224}
                />

                {/* Read More */}
                <div
                  className={`absolute bottom-4 right-4 transition-all duration-300 z-10
                    ${
                      hoveredCard === article.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    }`}
                >
                  <div
                    className="rounded-full px-4 py-2 text-sm font-medium
                    bg-white dark:bg-black
                    text-[#0045EF] border border-[#0045EF]/30"
                  >
                    Read more
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div
                  className="flex items-center gap-2 mb-4 text-sm
                  text-gray-600 dark:text-gray-400"
                >
                  <span>{article.date}</span>
                  <span>•</span>
                  <span
                    className="px-3 py-1 rounded-lg text-xs
                    bg-gray-200 dark:bg-gray-800
                    text-[#0045EF] border border-[#0045EF]/20"
                  >
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold mb-6 leading-tight
                  text-black dark:text-white"
                >
                  {article.title}
                </h3>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <LazyImage
                    src={article.authorImage}
                    alt={article.authorName}
                    className="w-11 h-11 rounded-full"
                    width={44}
                    height={44}
                  />
                  <div>
                    <p
                      className="font-semibold text-sm
                      text-black dark:text-white"
                    >
                      {article.authorName}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{article.authorRole}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
