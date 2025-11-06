import React from 'react';
import { Home, SwitchCamera, Info, Settings } from 'lucide-react'; 
import { NEPALI_LABELS } from '../../constants/constants';

type NavView = 'calendar' | 'converter' | 'kundali' | 'settings' | 'about';

interface BottomTabBarProps {
  activeView: string;
  onNavigate: (view: NavView) => void;
}

const NavButton: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors ${
      isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'
    }`}
  >
    {icon}
    <span className="text-[11px] mt-1 font-medium">{label}</span>
  </button>
);

const KundaliIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2v20M2 12h20"/>
  </svg>
);

export const BottomTabBar: React.FC<BottomTabBarProps> = ({ activeView, onNavigate }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full h-16 bg-slate-200 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 z-50 flex items-center justify-around lg:hidden">
      <NavButton
        icon={<Home className="w-5 h-5" />}
        label={NEPALI_LABELS.home}
        isActive={activeView === 'calendar'}
        onClick={() => onNavigate('calendar')}
      />
      <NavButton
        icon={<SwitchCamera className="w-5 h-5" />}
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
        icon={<Settings className="w-5 h-5" />}
        label={NEPALI_LABELS.settings || 'Settings'}
        isActive={activeView === 'settings'}
        onClick={() => onNavigate('settings')}
      />

      <NavButton
        icon={<Info className="w-5 h-5" />}
        label={NEPALI_LABELS.about}
        isActive={false}
        onClick={() => onNavigate('about')}
      />
    </nav>
  );
};