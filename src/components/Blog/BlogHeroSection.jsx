"use client";
import React from "react";
import LazyImage from "../LazyImage";

export default function BlogHeroSection() {
  const tags = ["PERMISSIONS", "ROLE MANAGEMENT", "PROCESSES"];

  return (
    <section className="w-full bg-white dark:bg-black py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-6xl mx-auto">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">

          {/* Left Column */}
          <div className="flex flex-col justify-between">
            <div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide mb-6
                text-gray-600 dark:text-gray-400">
                <span className="font-medium">Product & Updates</span>
                <span>•</span>
                <span>May 5, 2025</span>
                <span>•</span>
                <span>3 min read</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight
                text-black dark:text-white">
                Introducing Roles & Permissions in Vectura
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl mb-8 leading-relaxed
                text-gray-700 dark:text-gray-300">
                See how new roles and permissions give finance leaders more
                control and flexibility in managing spend approvals across
                departments.
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <LazyImage
                  src="https://framerusercontent.com/images/cmQt0ay0xGNLe9Sc30vSaXtio.jpg"
                  alt="Clara Jensen"
                  className="w-11 h-11 rounded-full"
                  width={44}
                  height={44}
                />
                <div>
                  <p className="font-semibold text-black dark:text-white">
                    Clara Jensen
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    Product Marketing Manager
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-2 rounded-lg text-xs uppercase tracking-wider
                      bg-gray-100 dark:bg-gray-800
                      text-[#0045EF] border border-[#0045EF]/20"
                    style={{ fontFamily: '"Chivo Mono", monospace' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column (reserved) */}
          <div className="hidden lg:block" />
        </div>

        {/* Featured Image */}
        <div className="w-full">
          <LazyImage
            src="https://framerusercontent.com/images/2kq6l9zkPi4aa57pKEkSYHd2qU.jpg"
            alt="Featured"
            className="w-full h-auto max-h-96 rounded-2xl"
            width={1200}
            height={384}
          />
        </div>

      </div>
    </section>
  );
}
