import React from 'react';
import AppLogo from '../../assets/icons/android-chrome-192x192.png';

interface HeaderLogoProps {
    activeSystem: 'bs' | 'ad';
    className?: string;
}

export const HeaderLogo: React.FC<HeaderLogoProps> = ({ activeSystem, className = '' }) => {
    const text = activeSystem === 'bs' ? 'नेपडेट पात्रो' : 'NepDate Patro';

    // Use slightly larger text for desktop if needed, but match base size requested
    return (
        <div className={`flex items-center gap-2.5 ${className}`}>
            <img
                src={AppLogo}
                alt="NepDate Logo"
                className="w-8 h-8 rounded-lg shadow-sm object-cover"
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
