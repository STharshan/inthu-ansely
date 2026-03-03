import React from "react";
import { Link } from "react-router-dom";
import { Plus, ArrowRight } from "lucide-react";

export default function FinancialConfidenceSection() {
  return (
    <section className="w-full py-12 md:py-20 px-5 sm:px-8 lg:px-12 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* IMAGE SECTION */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-video lg:aspect-auto h-full min-h-[300px] md:min-h-[450px]">
            <img
              src="https://framerusercontent.com/images/295l2PYYNWyQF0GHf7Kws2Ddko.jpg?width=3148&height=2100"
              alt="Strategic intelligence and business confidence"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* CONTENT SECTION */}
          <div className="flex flex-col space-y-6 md:space-y-8">
            
            {/* BADGE */}
            <div className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[#0045EF] rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Plus className="text-white w-5 h-5" strokeWidth={3} />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#0045EF]">
                What we do
              </span>
            </div>

            {/* MAIN HEADING */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-[1.15] tracking-tight">
              Building business confidence through strategic intelligence
            </h2>

            {/* DESCRIPTION BLOCKS */}
            <div className="space-y-5">
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                We start by getting a proper understanding of your market, how your business actually runs day-to-day, 
                and where the real friction or missed opportunities are. From there, we bring in the right mix of strategy, 
                systems thinking, and AI — only where it genuinely adds value.
              </p>

              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                The goal is simple: better decisions, smoother operations, and a business that’s set up to grow without 
                unnecessary complexity. Everything we recommend is rooted in real data and designed to give you a 
                lasting edge, not short-term wins.
              </p>
              
              <p className="hidden md:block text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                We don’t just point out problems. We design and implement practical solutions that change how your 
                business operates, competes, and scales — especially as technology becomes a bigger part of work.
              </p>
            </div>

            {/* CTA LINK */}
            <div className="pt-2">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-[#0045EF] font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300"
              >
                Explore our approach
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}