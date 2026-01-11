import React, { lazy } from "react";
import { Home, SwitchCamera, RadioIcon, Info, Settings, FileText, BookOpen } from "lucide-react";
import { NEPALI_LABELS } from "./constants";


// Lazy-loaded pages

const ConverterPage = lazy(() => import("../pages/ConverterPage"));
const KundaliPage = lazy(() => import("../pages/KundaliPage"));
const SettingsPage = lazy(() => import("../pages/SettingsPage"));
const AboutPage = lazy(() => import("../pages/AboutPopup"));
const PrivacyPage = lazy(() => import("../pages/PrivacyPage"));
const radioPage = lazy(() => import("../pages/radioPage"));
const DharmaPage = lazy(() => import("../pages/DharmaPage"));
// Menu page import template
//const MenuPage = lazy(() => import("../pages/MenuPage"));

export interface MenuItem {
  key: string;                                      // Unique identifier
  label: string;                                    // Nepali label
  icon?: React.ReactNode;                           // Optional icon
  page?: React.LazyExoticComponent<React.FC<any>>; // Linked lazy-loaded page
  fixed?: boolean;                                  // Show in tab/top menu if true
}

// Menu items
export const MENU_ITEMS: MenuItem[] = [
  {
    key: "calendar",
    label: NEPALI_LABELS.home,
    icon: <Home className="w-5 h-5" />,
    page: undefined,
    fixed: true,
  },
  {
    key: "converter",
    label: NEPALI_LABELS.converter,
    icon: <SwitchCamera className="w-5 h-5" />,
    page: ConverterPage,
    fixed: true,
  },
  {
    key: "dharma",
    label: NEPALI_LABELS.dharma,
    icon: <BookOpen className="w-5 h-5" />,
    page: DharmaPage,
    fixed: true,
  },
  {
    key: "kundali",
    label: NEPALI_LABELS.kundali,
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
    page: KundaliPage,
    fixed: true,
  },
  {
    key: "settings",
    label: NEPALI_LABELS.settings,
    icon: <Settings className="w-5 h-5" />,
    page: SettingsPage,
    fixed: true,
  },
  {
    key: "about",
    label: NEPALI_LABELS.about,
    icon: <Info className="w-5 h-5" />,
    page: AboutPage,
    fixed: false,
  },
  {
    key: "privacy",
    label: NEPALI_LABELS.privacyPolicy,
    icon: <FileText className="w-5 h-5" />,
    page: PrivacyPage,
    fixed: false,
  },
	{
    key: "radio",
    label: NEPALI_LABELS.radio,
    icon: <RadioIcon className="w-5 h-5" />,
    page: radioPage,
    fixed: false,
  },

	// Template
	/*{
    key: "menu",
    label: "मेनु",
    icon: <MenuIcon className="w-5 h-5" />,
    page: menuPage,
    fixed: false,
  },*/
];