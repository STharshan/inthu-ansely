import React from "react";
import { FAQSectionProps } from "../types/faq";
import { Tag } from "../atoms/Tag";
import { Button } from "../atoms/Button";
import { FAQAccordion } from "../molecules/FAQAccordion";

export const FAQSection: React.FC<FAQSectionProps> = ({
  categoryTag,
  heading,
  description,
  imageUrl,
  imageAlt = "FAQ illustration",
  serviceTags = [],
  ctaButton,
  faqItems,
  className = "",
}) => {
  return (
    <section
      id="faq"
      className={`relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-black text-white ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Container */}
          <div className="flex flex-col gap-8">
            {/* Category Tag */}
            {categoryTag && (
              <div>
                <Tag variant="category">{categoryTag}</Tag>
              </div>
            )}

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white opacity-100 will-change-transform">
              {heading}
            </h2>

            {/* Description */}
            <p className="text-white/70 text-base sm:text-lg leading-relaxed">{description}</p>

            {/* Image */}
            {imageUrl && (
              <div className="w-full rounded-xl overflow-hidden">
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  className="w-full h-auto block object-cover object-center"
                />
              </div>
            )}

            {/* Service Tags */}
            {serviceTags && serviceTags.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {serviceTags.map((tag, index) => (
                  <Tag key={index} variant="category">
                    {tag}
                  </Tag>
                ))}
              </div>
            )}

            {/* Divider Line */}
            <div className="w-full h-px bg-white/10" />

            {/* CTA Button */}
            {ctaButton && (
              <div>
                <Button href={ctaButton.href} onClick={ctaButton.onClick} variant="glow">
                  {ctaButton.label}
                </Button>
              </div>
            )}
          </div>

          {/* Right Container - FAQ Accordion */}
          <div className="flex flex-col">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
};
