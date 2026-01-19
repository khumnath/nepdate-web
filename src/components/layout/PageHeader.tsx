import React from 'react';
import { ArrowLeft } from 'lucide-react';
import AppLogo from '../../assets/icons/nepdate.webp';

interface PageHeaderProps {
  title: string;
  onBack: () => void;
  className?: string;
  rightContent?: React.ReactNode;
  transparent?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, onBack, className = '', rightContent, transparent = false }) => {
  const containerClasses = transparent
    ? `bg-transparent border-none ${className}`
    : `bg-slate-100 dark:bg-gray-800 ${className}`;

  const textClass = transparent ? 'text-gray-900 dark:text-white drop-shadow-md' : 'text-gray-900 dark:text-gray-100';
  const iconClass = transparent ? 'text-gray-900 dark:text-white hover:bg-black/10 dark:hover:bg-white/20 pt-2' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700';

  return (
    <div className={`${containerClasses} shrink-0 px-4 mt-2 flex items-center gap-3 z-10 sticky top-0 print:hidden`}>
      <button
        onClick={onBack}
        className={`p-2 -ml-2 rounded-full transition-colors ${iconClass}`}
        aria-label="Go back"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      {/* App Logo for Pages */}
      <img
        src={AppLogo}
        alt="Logo"
        className="w-9 h-9 rounded-md object-fill md:hidden"
      />

      <h1 className={`text-xl font-bold flex-1 truncate ${textClass}`}>
        {title}
      </h1>

      {rightContent && (
        <div className="flex items-center gap-2">
          {rightContent}
        </div>
      )}
    </div>
  );
};
