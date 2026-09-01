import React, { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide' | 'auto';
  overlay?: boolean;
  darkOverlayOpacity?: string;
  badge?: string;
  zoomOnHover?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  aspectRatio = 'video',
  overlay = false,
  darkOverlayOpacity = 'bg-black/35',
  badge,
  zoomOnHover = true,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const getAspectClass = () => {
    switch (aspectRatio) {
      case 'video': return 'aspect-[16/9]';
      case 'square': return 'aspect-square';
      case 'portrait': return 'aspect-[3/4]';
      case 'wide': return 'aspect-[21/9]';
      case 'auto': return '';
      default: return 'aspect-[16/9]';
    }
  };

  return (
    <div className={`relative overflow-hidden ${getAspectClass()} ${containerClassName} bg-[#001423]`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            zoomOnHover ? 'hover:scale-105' : ''
          } ${isLoaded ? 'opacity-100' : 'opacity-80 scale-100'} ${className}`}
        />
      ) : (
        /* Geometric Fallback if network blocked under file:/// */
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#001423] via-[#05243E] to-[#001423] text-white">
          <div className="w-12 h-12 rounded-full border border-[#C0122A] flex items-center justify-center mb-3">
            <span className="text-[#C0122A] font-black text-xs">SSV</span>
          </div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-300 text-center max-w-xs">{alt}</p>
        </div>
      )}

      {overlay && (
        <div className={`absolute inset-0 pointer-events-none ${darkOverlayOpacity} transition-opacity duration-300`} />
      )}

      {badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#001423]/85 backdrop-blur-md text-white text-[11px] font-bold tracking-wider uppercase border border-white/10 rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C0122A]" />
            {badge}
          </span>
        </div>
      )}
    </div>
  );
};
