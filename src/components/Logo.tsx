import React from 'react';

export interface LogoProps {
  variant?: 'horizontal' | 'stacked';
  className?: string;
  width?: number | string;
  alt?: string;
  id?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  className = '',
  width,
  alt = 'SSV Commercial Services & Infra Private Limited',
  id,
}) => {
  // Official PNG asset paths
  const logoSrc = variant === 'stacked'
    ? '/assets/images/logo/ssv-logo-stacked.png'
    : '/assets/images/logo/ssv-logo-horizontal.png';

  const defaultWidthClass = variant === 'stacked'
    ? 'w-[160px] sm:w-[190px]'
    : 'w-[200px] sm:w-[240px] md:w-[250px]';

  return (
    <img
      id={id || (variant === 'stacked' ? 'ssv-logo-stacked' : 'ssv-logo-horizontal')}
      src={logoSrc}
      alt={alt}
      className={`block object-contain select-none max-w-full ${width ? '' : defaultWidthClass} ${className}`}
      style={{
        width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
        height: 'auto',
      }}
      loading="eager"
      decoding="async"
      referrerPolicy="no-referrer"
    />
  );
};
