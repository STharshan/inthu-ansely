import React, { useState } from "react";
import { Plus, X, Calendar } from "lucide-react";
import { platformProcessSteps } from "../../constants/platformProcess";

export default function PlatformProcess() {
  const [expandedId, setExpandedId] = useState(1);

  const toggleStep = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const currentStep =
    platformProcessSteps.find((step) => step.id === expandedId) || platformProcessSteps[0];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors duration-300">
              Services
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-gray-900 dark:text-white transition-colors duration-300">
            What we do
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400 transition-colors duration-300 mb-8">
            Find out which one of our services fit the needs of your project
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#0045EF] text-white rounded-lg font-semibold hover:bg-[#0039CC] transition-colors duration-300 shadow-lg hover:shadow-xl">
            <Calendar className="w-5 h-5" />
            <span>Book a Demo</span>
          </button>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={currentStep.image}
              alt={currentStep.title}
              className="w-full h-full object-cover transition-opacity duration-300"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Right Column - Expandable Services List */}
          <div className="flex flex-col gap-2">
            {platformProcessSteps.map((step) => {
              const Icon = step.icon;
              const isExpanded = expandedId === step.id;

              return (
                <div
                  key={step.id}
                  className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg transition-all duration-300"
                >
                  {/* Service Header - Always Visible */}
                  <button
                    onClick={() => toggleStep(step.id)}
                    className="w-full flex items-center gap-4 p-6 text-left"
                    aria-expanded={isExpanded}
                    aria-controls={`step-content-${step.id}`}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-gray-900 dark:text-white transition-colors duration-300" />
                    </div>

                    {/* Title */}
                    <span className="flex-1 font-semibold text-lg text-gray-900 dark:text-gray-200 transition-colors duration-300">
                      {step.title}
                    </span>

                    {/* Expand/Collapse Icon */}
                    <div className="flex-shrink-0">
                      {isExpanded ? (
                        <X className="w-5 h-5 text-gray-600 dark:text-gray-400 transition-colors duration-300" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-600 dark:text-gray-400 transition-colors duration-300" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div id={`step-content-${step.id}`} className="px-6 pb-6 pt-0">
                      <p className="text-base leading-relaxed mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                        {step.description}
                      </p>

                      {/* Stat Display - Pill Design */}
                      <div className="inline-flex items-baseline gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                          {step.stat}
                        </span>
                        {step.statUnit && (
                          <span className="text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300">
                            {step.statUnit}
                          </span>
                        )}
                        <span className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300 ml-1">
                          {step.statLabel}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
