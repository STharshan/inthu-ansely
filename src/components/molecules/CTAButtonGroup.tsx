import React from 'react';
import { Button } from '../atoms/Button';
import { CTAButton } from '../ServicePage/types';

interface CTAButtonGroupProps {
  buttons: CTAButton[];
  className?: string;
}

export const CTAButtonGroup: React.FC<CTAButtonGroupProps> = ({
  buttons,
  className = '',
}) => {
  if (!buttons || buttons.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {buttons.map((button) => (
        <Button
          key={button.id}
          href={button.href}
          onClick={button.onClick}
          variant={button.variant || 'primary'}
        >
          {button.label}
        </Button>
      ))}
    </div>
  );
};

