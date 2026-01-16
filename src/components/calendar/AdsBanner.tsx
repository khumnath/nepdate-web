import React from 'react';

interface AdsBannerProps {
    className?: string;
    square?: boolean;
}

import { Megaphone } from 'lucide-react';

export const AdsBanner: React.FC<AdsBannerProps> = ({ className = '', square = false }) => {
    return (
        <a
            href="mailto:Aksharlabstudio2@gmail.com"
            className={`
                block relative overflow-hidden group cursor-pointer
                bg-gradient-to-br from-amber-400 to-orange-600
                rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5
                ${square ? 'aspect-square flex flex-col items-center justify-center p-4 text-center' : 'w-full py-5 px-4 flex items-center justify-center'}
                ${className}
            `}
        >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-black/5 rounded-full -ml-10 -mb-10 blur-xl" />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />

            <div className="relative z-10 flex flex-col items-center gap-1.5">
                <div className="bg-white/20 p-2 rounded-full mb-0.5 group-hover:rotate-12 transition-transform duration-300 backdrop-blur-sm border border-white/20">
                    <Megaphone className="w-5 h-5 text-white animate-wiggle" />
                </div>

                <div className={`
                    font-extrabold text-white drop-shadow-sm leading-none
                    ${square ? 'text-xl' : 'text-lg'}
                `}>
                    Ads Space Available
                </div>

                <div className="mt-1 text-xs font-semibold text-amber-700 bg-white/90 px-3 py-1 rounded-full shadow-sm hover:bg-white transition-colors flex items-center gap-1">
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
        </a>
    );
};
