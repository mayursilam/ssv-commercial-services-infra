import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'mark-only';
  theme?: 'dark' | 'light'; // dark means dark logo for light background; light means white/red logo for dark navy background
  className?: string;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  className = '',
  height = 44,
}) => {
  const isLight = theme === 'light'; // on dark navy background
  const redColor = '#C0122A';
  const textColor = isLight ? '#FFFFFF' : '#001423';
  const subtextColor = isLight ? '#848A99' : '#5A6273';
  const shieldFill = redColor;

  if (variant === 'mark-only') {
    return (
      <svg
        width={height}
        height={height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="SSV Logo Emblem"
      >
        {/* Geometric Precision SSV Emblem */}
        <path
          d="M50 4L12 24V56C12 76 28 92 50 98C72 92 88 76 88 56V24L50 4Z"
          fill={shieldFill}
        />
        {/* Inner dynamic precision lines forming triple pillar S & V monogram */}
        <path
          d="M50 14L22 29.5V54C22 70 34 82.5 50 87.5C66 82.5 78 70 78 54V29.5L50 14Z"
          fill="#001423"
        />
        {/* Modern Bold SSV Core Graphic */}
        <path
          d="M34 38C34 33.5 37.5 30 42 30H58C62.5 30 66 33.5 66 38C66 42.5 62.5 45.5 58 45.5H44C40 45.5 37 48.5 37 52.5C37 56.5 40.5 59.5 45 59.5H62"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36 68L50 82L64 68"
          stroke={redColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center select-none ${className}`}>
        <svg
          width={height * 1.1}
          height={height * 1.1}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M50 4L12 24V56C12 76 28 92 50 98C72 92 88 76 88 56V24L50 4Z"
            fill={redColor}
          />
          <path
            d="M50 14L22 29.5V54C22 70 34 82.5 50 87.5C66 82.5 78 70 78 54V29.5L50 14Z"
            fill="#001423"
          />
          <path
            d="M34 38C34 33.5 37.5 30 42 30H58C62.5 30 66 33.5 66 38C66 42.5 62.5 45.5 58 45.5H44C40 45.5 37 48.5 37 52.5C37 56.5 40.5 59.5 45 59.5H62"
            stroke="#FFFFFF"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36 68L50 82L64 68"
            stroke={redColor}
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="mt-2 text-center">
          <span
            className="block text-2xl font-extrabold tracking-tight"
            style={{ color: textColor, fontFamily: "'Montserrat', sans-serif" }}
          >
            SSV
          </span>
          <span
            className="block text-[9px] font-bold tracking-widest uppercase mt-0.5"
            style={{ color: redColor }}
          >
            COMMERCIAL SERVICES & INFRA
          </span>
          <span
            className="block text-[7.5px] font-medium tracking-wider uppercase"
            style={{ color: subtextColor }}
          >
            PRIVATE LIMITED
          </span>
        </div>
      </div>
    );
  }

  // Default: Horizontal Logo (Left Shield + Right Corporate Wordmark)
  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Official Emblem */}
      <svg
        width={height}
        height={height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        <path
          d="M50 4L12 24V56C12 76 28 92 50 98C72 92 88 76 88 56V24L50 4Z"
          fill={redColor}
        />
        <path
          d="M50 14L22 29.5V54C22 70 34 82.5 50 87.5C66 82.5 78 70 78 54V29.5L50 14Z"
          fill="#001423"
        />
        <path
          d="M34 38C34 33.5 37.5 30 42 30H58C62.5 30 66 33.5 66 38C66 42.5 62.5 45.5 58 45.5H44C40 45.5 37 48.5 37 52.5C37 56.5 40.5 59.5 45 59.5H62"
          stroke="#FFFFFF"
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36 68L50 82L64 68"
          stroke={redColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Corporate Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span
            className="text-xl md:text-2xl font-black tracking-tight"
            style={{ color: textColor, fontFamily: "'Montserrat', sans-serif" }}
          >
            SSV
          </span>
          <span
            className="text-[10px] md:text-[11px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded bg-red-950/20 text-[#C0122A] border border-[#C0122A]/30"
          >
            INFRA & SERVICES
          </span>
        </div>
        <span
          className="text-[8.5px] md:text-[9.5px] font-bold tracking-[0.14em] uppercase mt-1 leading-tight"
          style={{ color: isLight ? '#FFFFFF' : '#001423' }}
        >
          COMMERCIAL SERVICES & INFRA PVT. LTD.
        </span>
        <span
          className="text-[7px] md:text-[8px] font-medium tracking-[0.18em] uppercase leading-tight"
          style={{ color: subtextColor }}
        >
          ENSURING SAFETY • DELIVERING EXCELLENCE
        </span>
      </div>
    </div>
  );
};
