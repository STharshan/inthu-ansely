import React from "react";
import { LearningGuideProps } from "../types/learningGuide";
import {
  customSoftwareLearningGuides,
  aiConsultingLearningGuides,
  digitalMarketingLearningGuides,
  learningGuideConfig,
} from "../../constants/learningGuide";

export const LearningGuide: React.FC<LearningGuideProps> = ({
  service,
  className = "",
  mediaUrl = "/learning-guide-video.mp4",
  mediaType = "video",
}) => {
  const getLearningGuides = (): typeof customSoftwareLearningGuides => {
    switch (service) {
      case "custom-software":
        return customSoftwareLearningGuides;
      case "ai-consulting":
        return aiConsultingLearningGuides;
      case "digital-marketing":
        return digitalMarketingLearningGuides;
      default:
        return [];
    }
  };

  const guides = getLearningGuides();

  return (
    <section
      className={`py-16 px-4 md:px-16 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 ${className}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-12">
        {/* Left Media */}
        <div className="md:w-1/2 w-full flex">
          {mediaType === "video" ? (
            <video
              className="w-full h-full rounded-lg object-cover shadow-lg"
              src={mediaUrl}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              className="w-full h-full rounded-lg object-cover shadow-lg"
              src={mediaUrl}
              alt="Learning guide"
            />
          )}
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white transition-colors duration-300">
            {learningGuideConfig.heading}
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">
            {learningGuideConfig.description}
          </p>

          {/* Cards */}
          <div className="flex flex-col gap-4">
            {guides.map((card) => (
              <a
                key={card.id}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white group-hover:text-[#0045EF] dark:group-hover:text-blue-400 transition-colors duration-300">
                  {card.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-3 transition-colors duration-300">
                  {card.description}
                </p>

                <span className="text-[#0045EF] dark:text-blue-400 font-medium group-hover:underline transition-colors duration-300">
                  Learn More
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
