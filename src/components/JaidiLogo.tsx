import React from 'react';
import { IMAGES } from '../data/assets';

interface JaidiLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'red-bg' | 'inline' | 'monochrome' | 'badge';
  className?: string;
}

export const JaidiLogo: React.FC<JaidiLogoProps> = ({
  size = 'md',
  showText = true,
  variant = 'red-bg',
  className = '',
}) => {
  const sizeMap = {
    sm: { box: 'w-8 h-8', text: 'text-lg', sub: 'text-[9px]' },
    md: { box: 'w-11 h-11', text: 'text-2xl', sub: 'text-[10px]' },
    lg: { box: 'w-14 h-14', text: 'text-3xl', sub: 'text-xs' },
    xl: { box: 'w-20 h-20', text: 'text-4xl', sub: 'text-sm' },
  };

  const dim = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Jaidi Logo Emblem */}
      <div
        className={`${dim.box} relative rounded-full overflow-hidden flex items-center justify-center shrink-0 shadow-md ring-2 ring-[#E31B23]/25 bg-white transition-transform duration-300 hover:scale-105`}
      >
        <img
          src={IMAGES.logo}
          alt="Jaidi"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Brand Wordmark: Jaidi */}
      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={`font-serif font-black tracking-tight text-[#18181B] ${dim.text}`}
            >
              Jaidi<span className="text-[#E31B23]">.</span>
            </span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#E31B23] bg-[#E31B23]/10 px-1.5 py-0.5 rounded-sm">
              DHA 4
            </span>
          </div>
          <span className={`uppercase font-semibold tracking-widest text-[#71717A] mt-0.5 ${dim.sub}`}>
            Fresh Juices · Shakes · Falooda · Paan
          </span>
        </div>
      )}
    </div>
  );
};
