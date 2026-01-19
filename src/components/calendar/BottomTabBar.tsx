import React, { useState, useRef, useEffect } from 'react';
import { MoreHorizontal, Moon, Sun, RefreshCcw } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../../constants/menu';
import { handleReloadApp } from '../../lib/utils/appUtils';

interface BottomTabBarProps {
  activeView: string;
  onNavigate: (view: string) => void;
  menus?: MenuItem[];
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  themeLabel: string;
}

const NavButton: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}> = ({ icon, label, isActive, onClick, className }) => (
  <button
    onClick={(e) => {
      e.stopPropagation();
      onClick();
    }}
    onTouchStart={(e) => e.stopPropagation()}
    onMouseDown={(e) => e.stopPropagation()}
    className={`flex flex-col items-center justify-center pt-2 pb-1 transition-colors ${isActive
      ? 'text-blue-600 dark:text-blue-400'
      : 'text-gray-700 dark:text-gray-300'
      } ${className ?? ''}`}
  >
    {icon}
    <span className="text-[11px] mt-1 font-medium">{label}</span>
  </button>
);

export const BottomTabBar: React.FC<BottomTabBarProps> = ({
  activeView,
  onNavigate,
  menus = MENU_ITEMS,
  theme,
  onThemeToggle,
  themeLabel,
}) => {
  const [showMore, setShowMore] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setShowMore(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const fixedMenus = menus.filter((m) => m.fixed);
  const moreMenus = menus.filter((m) => !m.fixed);

  return (
    <nav
      className="
        fixed bottom-0 left-0 right-0 w-full h-16
        bg-slate-200 dark:bg-gray-800
        border-t border-gray-400 dark:border-gray-900
        shadow-md
        z-[9999] lg:hidden
        [padding-bottom:env(safe-area-inset-bottom)]
      "
      aria-label="Bottom navigation"
      onClick={(e) => e.stopPropagation()}
      onTouchStart={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div className="flex items-center h-full w-full relative px-1">
        {/* Fixed tabs */}
        {fixedMenus.map((item) => (
          <NavButton
            key={item.key}
            icon={item.icon}
            label={item.label}
            isActive={activeView === item.key}
            onClick={() => onNavigate(item.key)}
            className="flex-1 min-w-0 z-50"
          />
        ))}

        {/* More Tab (fixed width, does NOT grow) */}
        {moreMenus.length > 0 && (
          <div
            ref={moreRef}
            className="relative flex-none w-[72px] shrink-0 z-50"
          >
            <NavButton
              icon={<MoreHorizontal className="w-5 h-5" />}
              label="थप"
              isActive={showMore}
              onClick={() => setShowMore((v) => !v)}
              className="w-full"
            />

            {showMore && (
              <>
                {/* Transparent Backdrop to cover iframes and catch outside clicks */}
                <div
                  className="fixed inset-0 z-[9990] bg-transparent"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMore(false);
                  }}
                  onTouchStart={(e) => {
                    e.stopPropagation();
                  }}
                  onMouseDown={(e) => {
                    e.stopPropagation();
                  }}
                />

                <div
                  className="
                    absolute
                    bottom-[calc(4rem+8px)] /* 16 (bar height) + 8px gap above */
                    left-1/2 -translate-x-1/2
                    bg-white dark:bg-gray-700
                    shadow-xl rounded-md
                    w-52
                    py-2
                    border border-gray-200 dark:border-gray-600
                    z-[9999]
                    space-y-1
                  "
                  role="menu"
                  onClick={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                >
                  {/* Menu Items */}
                  {moreMenus.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        onNavigate(item.key);
                        setTimeout(() => setShowMore(false), 100);
                      }}
                      className="
                        w-full flex items-center gap-3 px-3 py-2
                        text-left text-[13px]
                        rounded-md
                        hover:bg-slate-100 dark:hover:bg-gray-600
                        focus:bg-slate-100 dark:focus:bg-gray-600
                        text-gray-800 dark:text-gray-200
                      "
                      role="menuitem"
                    >
                      {item.icon}
                      <span className="truncate">{item.label}</span>
                    </button>
                  ))}

                  <div className="h-px bg-gray-200 dark:bg-gray-600 my-1 mx-2" />

                  {/* Theme Toggle Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      onThemeToggle();
                      setTimeout(() => setShowMore(false), 100);
                    }}
                    className="
                      w-full flex items-center gap-3 px-3 py-2
                      text-left text-[13px]
                      rounded-md
                      hover:bg-slate-100 dark:hover:bg-gray-600
                      focus:bg-slate-100 dark:focus:bg-gray-600
                      text-gray-800 dark:text-gray-200
                    "
                    role="menuitem"
                  >
                    {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                    <span className="truncate">{themeLabel}</span>
                  </button>
                  <div className="h-px bg-gray-200 dark:bg-gray-600 my-1 mx-2" />

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      handleReloadApp();
                      setTimeout(() => setShowMore(false), 100);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2
                      text-left text-[13px]
                      rounded-md
                      hover:bg-slate-100 dark:hover:bg-gray-600
                      focus:bg-slate-100 dark:focus:bg-gray-600
                      text-gray-800 dark:text-gray-200"
                  >
                    <RefreshCcw className="w-4 h-4" />Reload
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};