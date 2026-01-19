import React, { useState, useEffect } from 'react';
import { Globe, X } from 'lucide-react';

export const TimezoneWarning: React.FC<{
  className?: string;
  activeSystem: 'bs' | 'ad';
  closable?: boolean;
  compact?: boolean;
}> = ({ className = '', activeSystem, closable = true, compact = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const userTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      // Check if timezone is NOT Kathmandu
      if (userTz !== 'Asia/Kathmandu' && userTz !== 'Asia/Katmandu') {
        setIsVisible(true);
      }
    } catch (e) {
      const offset = new Date().getTimezoneOffset();
      // offset is positive if behind UTC (conventionally).
      // actually JS getTimezoneOffset() returns +ve for WEST of UTC, -ve for EAST.
      // Nepal is East. So -345.
      if (offset !== -345) {
        setIsVisible(true);
      }
    }
  }, []);

  if (!isVisible) return null;
  const message = activeSystem === 'bs'
    ? 'तपाईंको डिभाइसको समय फरक भए पनि यहाँ देखाइने सबै मिति र समय नेपालको समयमा आधारित छन्।'
    : 'All dates and times are displayed in Nepal Time.';

  if (compact) {
    return (
      <div className={`bg-blue-50/80 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-md px-3 py-1.5 flex items-center gap-2 ${className}`}>
        <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
        <p className="flex-1 text-[10px] sm:text-[11px] text-blue-800 dark:text-blue-200 leading-tight font-medium opacity-90">
          {message}
        </p>
        {closable && (
          <button
            onClick={() => setIsVisible(false)}
            className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-200"
          >
            <X size={14} />
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={`bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-3 flex items-start gap-3 ${className}`}>
      <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
      <div className="flex-1">
        <p className="text-sm text-blue-800 dark:text-blue-200 leading-tight">
          <span className="block text-xs mt-1 opacity-80">
            {message}
          </span>
        </p>
      </div>
      {closable && (
        <button
          onClick={() => setIsVisible(false)}
          className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-200"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};
