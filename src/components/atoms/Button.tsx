import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'framer' | 'glow';
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  disabled = false,
}) => {
  // Simple glow button - dark background with subtle white glow
  if (variant === 'glow') {
    const buttonVisual = (
      <div
        className="relative"
        style={{
          backgroundColor: 'rgb(0, 0, 0)',
          borderRadius: '999px',
          padding: '14px 32px',
          position: 'relative',
        }}
      >
        {/* Subtle perimeter glow - diffused halo effect */}
        <div
          className="absolute -inset-[2px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 40%, transparent 70%)',
            borderRadius: '999px',
            filter: 'blur(6px)',
            WebkitFilter: 'blur(6px)',
            opacity: 1,
          }}
        />
        
        {/* Enhanced glow on top and bottom edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 0%, transparent 20%, transparent 80%, rgba(255, 255, 255, 0.08) 100%)',
            borderRadius: '999px',
            filter: 'blur(4px)',
            WebkitFilter: 'blur(4px)',
          }}
        />

        {/* Text Content */}
        <div className="relative z-10">
          <p className="text-white text-sm font-medium whitespace-nowrap">{children}</p>
        </div>
      </div>
    );

    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative inline-block ${className}`}
          style={{ 
            opacity: disabled ? 0.5 : 1, 
            textDecoration: 'none',
            cursor: disabled ? 'not-allowed' : 'pointer',
          }}
          onClick={disabled ? undefined : onClick}
        >
          {buttonVisual}
        </a>
      );
    }

    return (
      <button
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        className={`relative inline-block border-none bg-transparent p-0 ${className}`}
        style={{
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.5 : 1,
        }}
      >
        {buttonVisual}
      </button>
    );
  }

  // Framer-style button with layered glows
  if (variant === 'framer') {
    const buttonVisual = (
      <>
        {/* Outer Container */}
        <div
          className="relative"
          style={{
            backgroundColor: 'rgb(59, 59, 59)',
            borderRadius: '11.5px',
            boxShadow: 'rgba(255, 255, 255, 0) 0px 1px 9px 0px',
            opacity: disabled ? 0.5 : 1,
            willChange: 'auto',
          }}
        >
          {/* Inner Container */}
          <div
            className="relative overflow-hidden"
            style={{
              backgroundColor: 'rgb(0, 0, 0)',
              borderRadius: '10px',
              opacity: 1,
              padding: '12px 24px',
            }}
          >
            {/* Glow Layer 1 */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(50% 50% at 50% 50%, rgb(163, 163, 163) 0%, rgba(0, 0, 0, 0) 100%)',
                borderRadius: '999px',
                filter: 'blur(10px)',
                WebkitFilter: 'blur(10px)',
                opacity: 0.41,
              }}
            />

            {/* Glow Layer 2 */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(50% 50%, rgb(115, 115, 115) 0%, rgba(0, 0, 0, 0) 100%)',
                borderRadius: '999px',
                filter: 'blur(10px)',
                opacity: 1,
              }}
            />

            {/* Text Content */}
            <div className="relative z-10" style={{ opacity: 1 }}>
              <p className="text-white text-sm font-medium whitespace-nowrap">{children}</p>
            </div>
          </div>

          {/* White Top Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundColor: 'rgb(255, 255, 255)',
              filter: 'blur(8px)',
              opacity: 1,
              borderRadius: '11.5px',
            }}
          />

          {/* White Glow 1 */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundColor: 'rgb(230, 230, 230)',
              filter: 'blur(8px)',
              opacity: 1,
              borderRadius: '11.5px',
            }}
          />

          {/* White Glow 2 */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundColor: 'rgb(255, 255, 255)',
              filter: 'blur(8px)',
              opacity: 1,
              borderRadius: '11.5px',
            }}
          />
        </div>

        {/* Outer White Glow 1 */}
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          style={{
            background: 'radial-gradient(50% 50%, rgb(171, 171, 171) 0%, rgba(0, 0, 0, 0) 100%)',
            borderRadius: '999px',
            filter: 'blur(10px)',
            opacity: 1,
          }}
        />

        {/* Outer White Glow 2 */}
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          style={{
            background: 'radial-gradient(50% 50% at 50% 50%, rgb(255, 255, 255) 0%, rgba(0, 0, 0, 0) 100%)',
            borderRadius: '21px',
            filter: 'blur(10px)',
            WebkitFilter: 'blur(10px)',
            opacity: 0.62,
          }}
        />
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative inline-block ${className}`}
          style={{ opacity: 1, textDecoration: 'none' }}
          onClick={disabled ? undefined : onClick}
        >
          {buttonVisual}
        </a>
      );
    }

    return (
      <button
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        className={`relative inline-block border-none bg-transparent p-0 ${className}`}
        style={{
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
      >
        {buttonVisual}
      </button>
    );
  }

  const baseStyles =
    'px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out whitespace-nowrap';
  
  const variantStyles = {
    primary:
      'bg-white text-black hover:shadow-xl border border-white/20 hover:border-white/40',
    secondary:
      'bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/10',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  }`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        onClick={disabled ? undefined : onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={disabled ? undefined : onClick}
      className={combinedClassName}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

