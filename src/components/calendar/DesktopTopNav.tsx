import React, { useState, useEffect, useRef } from 'react';
import { MENU_ITEMS, MenuItem } from '../../constants/menu';
import { MoreHorizontal } from 'lucide-react';
import { NEPALI_LABELS } from '../../constants/constants';

interface DesktopTopNavProps {
  activeView: string;
  onNavigate: (key: string) => void;
  showInstall?: boolean;
  onInstallClick?: () => void;
}

export const DesktopTopNav: React.FC<DesktopTopNavProps> = ({
  activeView,
  onNavigate,
  showInstall = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const [visibleMenus, setVisibleMenus] = useState<MenuItem[]>([]);
  const [moreMenus, setMoreMenus] = useState<MenuItem[]>([]);
  const [showMore, setShowMore] = useState(false);

  // Measure available width and split MENU_ITEMS into visible + overflow
  useEffect(() => {
    const updateMenus = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;

      const brandWidth = 120;          // Approx width of "Nepdate"
      const moreButtonWidth = 60;      // Width of the "More" trigger
      const availableWidth = containerWidth - brandWidth - moreButtonWidth;

      let totalWidth = 0;
      const newVisible: MenuItem[] = [];
      const newMore: MenuItem[] = [];

      MENU_ITEMS.forEach((menu) => {
        const approxMenuWidth = 90; // Per-item width budget; approximation
        totalWidth += approxMenuWidth;
        if (totalWidth <= availableWidth) {
          newVisible.push(menu);
        } else {
          newMore.push(menu);
        }
      });

      setVisibleMenus(newVisible);
      setMoreMenus(newMore);
    };

    updateMenus();
    window.addEventListener('resize', updateMenus);
    return () => window.removeEventListener('resize', updateMenus);
  }, [showInstall]);

  // Close the "More" popover on outside click
  useEffect(() => {
    if (!showMore) return;
    const onDocMouseDown = (e: MouseEvent) => {
      if (!popoverRef.current) return;
      if (!popoverRef.current.contains(e.target as Node)) {
        setShowMore(false);
      }
    };
    document.addEventListener('mousedown', onDocMouseDown);
    return () => document.removeEventListener('mousedown', onDocMouseDown);
  }, [showMore]);

  return (
    <nav
      ref={containerRef}
      className="hidden md:flex w-full pl-6 bg-slate-200 dark:bg-gray-800 h-16 items-center justify-between relative"
      aria-label="Top navigation"
    >
      {/* Brand */}
      <div className="text-xl font-semibold whitespace-nowrap flex-shrink-0 mr-4">
        {NEPALI_LABELS.Nepdate_calendar}
      </div>

      {/* Primary menu items + More */}
      <div className="flex items-center space-x-2 flex-1 overflow-visible">
        {visibleMenus.map((menu) => (
          <button
            key={menu.key}
            onClick={() => onNavigate(menu.key)}
            className={`px-4 py-2 rounded-md flex items-center gap-1 whitespace-nowrap text-ellipsis ${
              activeView === menu.key ? 'bg-gray-300 dark:bg-gray-700' : ''
            }`}
            aria-current={activeView === menu.key ? 'page' : undefined}
          >
            {menu.icon} <span>{menu.label}</span>
          </button>
        ))}

        {moreMenus.length > 0 && (
          <div
            ref={popoverRef}
            className="relative flex-shrink-0"
          >
            <button
              onClick={() => setShowMore((v) => !v)}
              className="px-4 py-2 rounded-md flex items-center gap-1 whitespace-nowrap"
              aria-expanded={showMore}
              aria-haspopup="menu"
            >
              <MoreHorizontal className="w-4 h-4" /> <span>थप</span>
            </button>

            {showMore && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg flex flex-col z-50"
                role="menu"
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
              >
                {moreMenus.map((menu) => (
                  <button
                    key={menu.key}
                    onMouseDown={() => {
                      onNavigate(menu.key);
                      setShowMore(false);
                    }}
                    className="px-4 py-2 text-left hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center gap-1 whitespace-nowrap"
                    role="menuitem"
                  >
                    {menu.icon} <span>{menu.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

    </nav>
  );
};
