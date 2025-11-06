import React from 'react';
import { Home, SwitchCamera, Settings } from 'lucide-react';
import { NEPALI_LABELS } from '../../constants/constants';

type NavView = 'calendar' | 'converter' | 'kundali' | 'settings';

interface DesktopTopNavProps {
  activeView: string;
  onNavigate: (view: NavView) => void;
}

const KundaliIcon = () => (
  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2v20M2 12h20"/>
  </svg>
);

const NavButton: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
    }`}
  >
    {icon}
    {label}
  </button>
);

export const DesktopTopNav: React.FC<DesktopTopNavProps> = ({ activeView, onNavigate }) => {
  return (
    <nav className="hidden lg:flex items-center justify-between w-full h-16 px-6 bg-slate-200 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 shadow-sm z-30">
      
      {/* Left Side: Title */}
      <div className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {NEPALI_LABELS.Nepdate_calendar}
      </div>

      {/* Right Side: Navigation Links */}
      <div className="flex items-center space-x-2">
        <NavButton
          icon={<Home className="w-4 h-4 mr-2" />}
          label={NEPALI_LABELS.home}
          isActive={activeView === 'calendar'}
          onClick={() => onNavigate('calendar')}
        />
        <NavButton
          icon={<SwitchCamera className="w-4 h-4 mr-2" />}
          label={NEPALI_LABELS.converter}
          isActive={activeView === 'converter'}
          onClick={() => onNavigate('converter')}
        />
        <NavButton
          icon={<KundaliIcon />}
          label={NEPALI_LABELS.kundali}
          isActive={activeView === 'kundali'}
          onClick={() => onNavigate('kundali')}
        />
        <NavButton
          icon={<Settings className="w-4 h-4 mr-2" />}
          label={NEPALI_LABELS.settings || 'Settings'}
          isActive={activeView === 'settings'}
          onClick={() => onNavigate('settings')}
        />
      </div>
    </nav>
  );
};