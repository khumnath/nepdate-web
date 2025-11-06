import React from 'react';
import { ArrowLeft, Moon, Sun, Sidebar, Smartphone, PanelLeft, PanelTop } from 'lucide-react';
import { NEPALI_LABELS } from '../constants/constants';

type MenuStyle = 'slide' | 'tabs';
type DesktopLayoutStyle = 'topbar' | 'sidebar';

interface SettingsPageProps {
  onBack: () => void;
  currentTheme: 'light' | 'dark';
  onThemeChange: () => void;
  currentMenuStyle: MenuStyle;
  onMenuStyleChange: (style: MenuStyle) => void;
  currentDesktopLayoutStyle: DesktopLayoutStyle;
  onDesktopLayoutStyleChange: (style: DesktopLayoutStyle) => void;
  onResetSettings: () => void;
}

// SettingOption component
const SettingOption: React.FC<{
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
}> = ({ label, icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    disabled={isActive}
    className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg w-32 h-28 transition-colors ${
      isActive
        ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/50 cursor-default'
        : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-400'
    }`}
  >
    {icon}
    <span className="mt-2 text-sm font-medium">{label}</span>
  </button>
);


const SettingsPage: React.FC<SettingsPageProps> = ({
  onBack,
  currentTheme,
  onThemeChange,
  currentMenuStyle,
  onMenuStyleChange,
  currentDesktopLayoutStyle,
  onDesktopLayoutStyleChange,
  onResetSettings
}) => {
  return (
    <div className="p-3 max-w-2xl mx-auto">
      <header className="flex items-center mb-6">
        <button onClick={onBack} className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-semibold">{NEPALI_LABELS.settings || 'Settings'}</h1>
      </header>

      <div className="space-y-5">
        
        <section className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-3">{NEPALI_LABELS.theme || 'Theme'}</h2>
          <div className="flex space-x-4">
            <SettingOption
              label={NEPALI_LABELS.lightMode || 'Light'}
              icon={<Sun className="w-8 h-8 text-yellow-500" />}
              isActive={currentTheme === 'light'}
              onClick={currentTheme === 'light' ? undefined : onThemeChange} 
            />
            <SettingOption
              label={NEPALI_LABELS.darkMode || 'Dark'}
              icon={<Moon className="w-8 h-8 text-blue-300" />}
              isActive={currentTheme === 'dark'}
              onClick={currentTheme === 'dark' ? undefined : onThemeChange}
            />
          </div>
        </section>
        
        {/* Mobile Menu Style Setting (hidden on desktop) */}
        <section className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow lg:hidden">
          <h2 className="text-lg font-semibold mb-1">{NEPALI_LABELS.mobileNavStyle || 'Mobile Navigation'}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            {NEPALI_LABELS.mobileNavDesc || 'Select navigation style for mobile screens.'}
          </p>
          <div className="flex space-x-4">
            <SettingOption
              label={NEPALI_LABELS.slideMenu || 'Slide Menu'}
              icon={<Sidebar className="w-8 h-8" />}
              isActive={currentMenuStyle === 'slide'}
              onClick={currentMenuStyle === 'slide' ? undefined : () => onMenuStyleChange('slide')}
            />
            <SettingOption
              label={NEPALI_LABELS.tabBar || 'Tab Bar'}
              icon={<Smartphone className="w-8 h-8" />}
              isActive={currentMenuStyle === 'tabs'}
              onClick={currentMenuStyle === 'tabs' ? undefined : () => onMenuStyleChange('tabs')}
            />
          </div>
        </section>
        
        {/* Desktop Layout Setting (hidden on mobile) */}
        <section className="hidden lg:block p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-1">{NEPALI_LABELS.desktopNavStyle}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            {NEPALI_LABELS.desktopNavDesc}
          </p>
          <div className="flex space-x-4">
            <SettingOption
              label="Top Bar"
              icon={<PanelTop className="w-8 h-8" />}
              isActive={currentDesktopLayoutStyle === 'topbar'}
              onClick={currentDesktopLayoutStyle === 'topbar' ? undefined : () => onDesktopLayoutStyleChange('topbar')}
            />
            <SettingOption
              label="Side Bar"
              icon={<PanelLeft className="w-8 h-8" />}
              isActive={currentDesktopLayoutStyle === 'sidebar'}
              onClick={currentDesktopLayoutStyle === 'sidebar' ? undefined : () => onDesktopLayoutStyleChange('sidebar')}
            />
          </div>
        </section>

        <section className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">{NEPALI_LABELS.resetMessage}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            {NEPALI_LABELS.resetMessageDesc}
          </p>
          <button
            onClick={onResetSettings}
            className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
           {NEPALI_LABELS.reset}
          </button>
        </section>
        
      </div>
    </div>
  );
};

export default SettingsPage;