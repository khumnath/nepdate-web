import React from 'react';
import { Moon, Sun, Sidebar, Smartphone, PanelLeft, PanelTop } from 'lucide-react';
import { NEPALI_LABELS } from '../constants/constants';
import { toast } from '../components/shared/toast';
import { PageHeader } from '../components/layout/PageHeader';

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
  isAndroidApp: boolean;
  onReloadApp: () => void;
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
    className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg w-32 h-28 transition-colors ${isActive
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
  onResetSettings,
  isAndroidApp,
  onReloadApp
}) => {
  const handleOpenWidgetSettings = () => {
    if ((window as any).Android && (window as any).Android.openWidgetSettings) {
      (window as any).Android.openWidgetSettings();
    } else {
      console.warn("Android bridge is not available.");
      toast("Could not open widget settings. Are you in the native app?", "error", 3000);
    }
  };

  return (
    <div className="h-full bg-slate-100 dark:bg-gray-900 flex flex-col overflow-hidden">
      <PageHeader title="सेटिङ्स" onBack={onBack} />
      <div className="flex-1 overflow-y-auto pb-20 p-3">
        <div className="max-w-2xl mx-auto space-y-5">
          <section className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Reload App</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              If you are online, this will clear the app cache and reload from the server. If offline, it will just refresh the current view.
            </p>
            <button
              onClick={onReloadApp}
              className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Clear Cache and Reload
            </button>
          </section>

          {isAndroidApp && (
            <section className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Android Widget</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Customize the home screen widget for your device.
              </p>
              <button
                onClick={handleOpenWidgetSettings}
                className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Open Widget Settings
              </button>
            </section>
          )}

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
          <section className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow md:hidden">
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
          <section className="hidden md:block p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-1">{NEPALI_LABELS.desktopNavStyle || "Desktop Layout"}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {NEPALI_LABELS.desktopNavDesc || "Select layout for desktop screens."}
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
            <h2 className="text-lg font-semibold mb-2">{NEPALI_LABELS.resetMessage || "Reset Settings"}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {NEPALI_LABELS.resetMessageDesc || "Reset all theme and layout settings to their default values."}
            </p>
            <button
              onClick={onResetSettings}
              className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              {NEPALI_LABELS.reset || "Reset to Default"}
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;