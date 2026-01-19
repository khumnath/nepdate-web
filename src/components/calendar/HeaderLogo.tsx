import React from 'react';
import AppLogo from '../../assets/icons/nepdate.webp';

interface HeaderLogoProps {
  activeSystem: 'bs' | 'ad';
  className?: string;
}

export const HeaderLogo: React.FC<HeaderLogoProps> = ({ activeSystem, className = '' }) => {
  const text = activeSystem === 'bs' ? 'नेपडेट पात्रो' : 'NepDate Patro';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={AppLogo}
        alt="NepDate Logo"
        className="w-9 h-9 rounded-lg shadow-sm object-fill"
      />
      <span
        className="text-lg font-bold text-gray-800 dark:text-gray-100 tracking-tight"
        style={{ fontFamily: activeSystem === 'bs' ? "'Noto Sans Devanagari', sans-serif" : 'inherit' }}
      >
        {text}
      </span>
    </div>
  );
};
