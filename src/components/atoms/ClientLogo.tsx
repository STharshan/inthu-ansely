import React from "react";
import { ClientLogo as ClientLogoType } from "../types/clientCarousel";

interface ClientLogoProps {
  client: ClientLogoType;
  className?: string;
}

export const ClientLogo: React.FC<ClientLogoProps> = ({ client, className = "" }) => {
  const logoContent = (
    <div
      className={`flex items-center justify-center px-4 sm:px-6 transition-opacity duration-300 hover:opacity-80 ${className}`}
    >
      <div className="relative h-[56px] sm:h-[72px] md:h-[90px] aspect-[16/9]">
        <img
          src={client.logoUrl}
          alt={client.name}
          className="absolute inset-0 w-full h-full opacity-60 dark:opacity-50 hover:opacity-100 dark:hover:opacity-100 transition-all duration-300 object-cover"
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
        className="block"
        aria-label={`Visit ${client.name} website`}
      >
        {logoContent}
      </a>
    );
  }

  return logoContent;
};
