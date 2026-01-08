import React from "react";
import { ClientCarouselProps } from "../types/clientCarousel";
import { ClientLogo } from "../atoms/ClientLogo";

export const ClientCarousel: React.FC<ClientCarouselProps> = ({ clients, className = "" }) => {
  // Duplicate clients for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section
      className={`relative w-full overflow-hidden bg-white dark:bg-black py-12 sm:py-16 transition-colors duration-300 ${className}`}
    >
      {/* Left Gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 md:w-64 lg:w-80 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-black to-transparent" />

      {/* Right Gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-48 md:w-64 lg:w-80 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-black to-transparent" />

      {/* Scrolling Container */}
      <div className="flex items-center gap-8 sm:gap-12 md:gap-16 w-fit">
        {duplicatedClients.map((client, index) => (
          <ClientLogo key={`${client.id}-${index}`} client={client} />
        ))}
      </div>
    </section>
  );
};
