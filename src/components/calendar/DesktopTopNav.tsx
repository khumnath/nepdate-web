import React, { useState, useEffect, useRef } from 'react';
import { MENU_ITEMS, MenuItem } from '../../constants/menu';
import { MoreHorizontal, Download, RefreshCcw } from 'lucide-react';
import { NEPALI_LABELS } from '../../constants/constants';
import { handleReloadApp } from '../../lib/utils/appUtils';

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
	onInstallClick,
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const popoverRef = useRef<HTMLDivElement>(null);

	const [visibleMenus, setVisibleMenus] = useState<MenuItem[]>([]);
	const [moreMenus, setMoreMenus] = useState<MenuItem[]>([]);
	const [showMore, setShowMore] = useState(false);

	// Helper: Measure text width with a safety multiplier
	const measureItemWidth = (text: string, font: string) => {
		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');
		if (context) {
			context.font = font;
			// Multiply by 1.1 to be extra safe (10% buffer per item)
			return Math.ceil(context.measureText(text).width * 1.1);
		}
		return 100;
	};

	useEffect(() => {
		const updateMenus = () => {
			if (!containerRef.current) return;

			const GAP = 4; // CSS gap-1
			const PADDING_X = 24; // px-3 (12px * 2)
			const ICON_SIZE = 16;
			const INNER_GAP = 8;

			// This reserves extra empty space at the end to prevent ANY clipping.
			const SAFETY_BUFFER = 50;

			const containerWidth = containerRef.current.offsetWidth;
			const brandWidth = 140;

			// Calculate Install Button Width (if visible)
			let installButtonWidth = 0;
			if (showInstall) {
				const textW = measureItemWidth(NEPALI_LABELS.installApp, '500 14px Inter');
				// Width = Text + Padding + Icon + Gap + LeftMargin
				installButtonWidth = textW + 32 + 20 + 20;
			}

			// Define Available Space
			const maxAvailableWidth = containerWidth - brandWidth - installButtonWidth - SAFETY_BUFFER;

			// Calculate 'More' button width
			// "More" text + icon + padding + gap
			const moreTextW = measureItemWidth('थप', '500 14px Inter');
			const moreButtonWidth = moreTextW + PADDING_X + ICON_SIZE + INNER_GAP + GAP;

			// Refresh Item
			const REFRESH_ITEM: MenuItem = {
				key: 'refresh',
				label: 'Reload',
				icon: <RefreshCcw className="w-5 h-5" />,
				fixed: false
			};
			const allItems = [...MENU_ITEMS, REFRESH_ITEM];

			// Measure All Menu Items
			const itemWidths = allItems.map(menu => {
				const textW = measureItemWidth(menu.label, '500 14px Inter');
				return {
					...menu,
					// Full width of this button including padding/gaps
					width: textW + PADDING_X + ICON_SIZE + INNER_GAP
				};
			});

			// Try to fit everything
			const totalWidthNeeded = itemWidths.reduce((sum, item, i) =>
				sum + item.width + (i > 0 ? GAP : 0), 0
			);

			if (totalWidthNeeded <= maxAvailableWidth) {
				// FITS PERFECTLY
				setVisibleMenus(allItems);
				setMoreMenus([]);
			} else {
				// DOES NOT FIT -> Use "More" button
				const availableForVisible = maxAvailableWidth - moreButtonWidth;

				let currentWidth = 0;
				const newVisible: MenuItem[] = [];
				const newMore: MenuItem[] = [];

				itemWidths.forEach((item, index) => {
					const itemCost = item.width + (index > 0 ? GAP : 0);

					if (currentWidth + itemCost <= availableForVisible) {
						newVisible.push(item);
						currentWidth += itemCost;
					} else {
						newMore.push(item);
					}
				});

				setVisibleMenus(newVisible);
				setMoreMenus(newMore);
			}
		};

		updateMenus();
		document.fonts.ready.then(updateMenus);
		window.addEventListener('resize', updateMenus);
		return () => window.removeEventListener('resize', updateMenus);
	}, [showInstall]);

	useEffect(() => {
		if (!showMore) return;
		const onDocMouseDown = (e: MouseEvent) => {
			if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
				setShowMore(false);
			}
		};
		document.addEventListener('mousedown', onDocMouseDown);
		return () => document.removeEventListener('mousedown', onDocMouseDown);
	}, [showMore]);

	return (
		<nav
			ref={containerRef}
			className="hidden md:flex w-full px-4 bg-slate-200 dark:bg-gray-800 h-16 items-center relative"
		>
			<div className="text-xl font-semibold whitespace-nowrap flex-shrink-0 mr-6">
				{NEPALI_LABELS.Nepdate_calendar}
			</div>

			<div className="flex items-center gap-1">
				{visibleMenus.map((menu) => (
					<button
						key={menu.key}
						onClick={() => menu.key === 'refresh' ? handleReloadApp() : onNavigate(menu.key)}
						className={`flex-shrink-0 px-3 py-2 rounded-md flex items-center gap-2 whitespace-nowrap text-sm font-medium transition-colors ${activeView === menu.key
							? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
							: 'text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
							}`}
					>
						{menu.icon} <span>{menu.label}</span>
					</button>
				))}

				{moreMenus.length > 0 && (
					<div ref={popoverRef} className="relative flex-shrink-0">
						<button
							onClick={(e) => {
								e.stopPropagation();
								setShowMore((v) => !v);
							}}
							className="flex-shrink-0 px-3 py-2 rounded-md flex items-center gap-1 whitespace-nowrap hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
						>
							<MoreHorizontal className="w-4 h-4" /> <span>थप</span>
						</button>

						{showMore && (
							<div className="absolute left-0 top-full mt-1 w-48 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg flex flex-col z-[100] py-1">
								{moreMenus.map((menu) => (
									<button
										key={menu.key}
										onClick={(e) => {
											e.stopPropagation();
											if (menu.key === 'refresh') {
												handleReloadApp();
											} else {
												onNavigate(menu.key);
											}
											setShowMore(false);
										}}
										className="px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center gap-2 whitespace-nowrap text-sm w-full"
									>
										{menu.icon} <span>{menu.label}</span>
									</button>
								))}
							</div>
						)}
					</div>
				)}
			</div>

			{showInstall && onInstallClick && (
				<div className="flex-shrink-0 ml-4">
					<button
						onClick={onInstallClick}
						className="flex-shrink-0 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2 text-sm font-medium transition-colors shadow-sm whitespace-nowrap"
					>
						<Download className="w-4 h-4" />
						<span>{NEPALI_LABELS.installApp}</span>
					</button>
				</div>
			)}
		</nav>
	);
};