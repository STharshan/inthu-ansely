import React from "react";
import { ClientLogo as ClientLogoType } from "../types/clientCarousel";

interface ClientLogoProps {
  client: ClientLogoType;
  className?: string;
}

export const ClientLogo: React.FC<ClientLogoProps> = ({
  client,
  className = "",
}) => {
  const logoContent = (
    <div
      className={`flex items-center justify-center transition-all duration-300 ${className}`}
    >
      <div className="relative h-12 sm:h-14 md:h-16 lg:h-20 w-auto">
        <img
          src={client.logoUrl}
          alt={client.name}
          className="h-full w-auto object-contain filter grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            console.error(`Failed to load image: ${client.logoUrl}`);
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
    </div>
  );

  if (client.websiteUrl) {
    return (
      <a
        href={client.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer"
        aria-label={`Visit ${client.name} website`}
      >
        {logoContent}
      </a>
    );
  }

  return logoContent;
};
