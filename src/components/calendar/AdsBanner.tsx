import React from 'react';

interface AdsBannerProps {
  className?: string;
  square?: boolean;
  imageSrc?: string;
}

import { Megaphone } from 'lucide-react';

export const AdsBanner: React.FC<AdsBannerProps> = ({ className = '', square = false, imageSrc }) => {
  return (
    <a
      href="mailto:Aksharlabstudio1@gmail.com"
      className={`
                block relative overflow-hidden group cursor-pointer
                ${!imageSrc ? 'bg-gradient-to-br from-green-200 to-orange-200 dark:from-green-900/40 dark:to-orange-900/40 border border-orange-200 dark:border-orange-800' : ''}
                rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5
                ${square ? 'aspect-square flex flex-col items-center justify-center p-4 text-center' : 'w-full flex items-center justify-center'}
                ${!imageSrc && !square ? 'py-5 px-4' : ''}
                ${className}
            `}
    >
      {imageSrc ? (
        <img src={imageSrc} alt="Advertisement" className="w-full h-full object-cover rounded-xl" />
      ) : (
        <>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl" />
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-black/5 rounded-full -ml-10 -mb-10 blur-xl" />

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />

          <div className="relative z-10 flex flex-col items-center gap-1.5">
            <div className="bg-white/60 dark:bg-black/20 p-2 rounded-full mb-0.5 group-hover:rotate-12 transition-transform duration-300 backdrop-blur-sm border border-white/40">
              <Megaphone className="w-5 h-5 text-orange-600 dark:text-orange-400 animate-wiggle" />
            </div>

            <div className={`
                    font-extrabold text-slate-800 dark:text-gray-100 drop-shadow-sm leading-none
                    ${square ? 'text-xl' : 'text-lg'}
                `}>
              Ads Space Available
            </div>

            <div className="mt-1 text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-500 px-3 py-1 rounded-full shadow-sm transition-colors flex items-center gap-1">
              <span>Contact Us</span>
            </div>
          </div>

          <style>{`
                @keyframes wiggle {
                    0%, 100% { transform: rotate(-3deg); }
                    50% { transform: rotate(3deg); }
                }
                .animate-wiggle {
                    animation: wiggle 1s ease-in-out infinite;
                }
            `}</style>
        </>
      )}
    </a>
  );
};
