import React from 'react';
import { ServiceCard as ServiceCardType } from '../ServicePage/types';

interface ServiceCardProps {
  card: ServiceCardType;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  card,
  className = '',
}) => {
  const Icon = card.icon;

  return (
    <div
      className={`w-full bg-[#0D0D0D] rounded-[20px] will-change-transform opacity-100 p-6 ${className}`}
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.4) 16px 24px 20px 8px',
      }}
    >
      <div className="opacity-100">
        {/* Heading & Icon */}
        <div className="opacity-100 flex items-center gap-4 mb-4">
          <div className="w-6 h-6 flex items-center justify-center">
            <Icon className="text-white opacity-100" size={24} />
          </div>
          <h4 className="text-white font-semibold text-lg">{card.title}</h4>
        </div>

        {/* Line Divider */}
        <div className="w-full mb-4 h-px bg-white/10" />

        {/* Description */}
        <p className="text-white text-sm leading-relaxed text-left">
          {card.description}
        </p>
      </div>
    </div>
  );
};

