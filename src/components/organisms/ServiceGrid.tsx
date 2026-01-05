import React from 'react';
import { ServiceCard } from '../molecules/ServiceCard';
import { ServiceCard as ServiceCardType } from '../ServicePage/types';

interface ServiceGridProps {
  cards: ServiceCardType[];
  className?: string;
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({
  cards,
  className = '',
}) => {
  if (!cards || cards.length === 0) return null;

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}
    >
      {cards.map((card) => (
        <ServiceCard key={card.id} card={card} />
      ))}
    </div>
  );
};

