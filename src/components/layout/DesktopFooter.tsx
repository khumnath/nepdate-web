import React from 'react';
import { Facebook, Mail, MapPin, Smartphone } from 'lucide-react';
import { NEPALI_LABELS } from '../../constants/constants';
import { HeaderLogo } from '../calendar/HeaderLogo';

interface DesktopFooterProps {
    onNavigate: (view: string, params?: any) => void;
}

// Define valid links based on project analysis
const FOOTER_LINKS = {
    // Static month links - for now navigate to calendar view
    // In future could pass month params
    calendar: [
        { label: 'बैशाख', value: 'calendar', param: { month: 0 } },
        { label: 'जेठ', value: 'calendar', param: { month: 1 } },
        { label: 'असार', value: 'calendar', param: { month: 2 } },
        { label: 'साउन', value: 'calendar', param: { month: 3 } },
        { label: 'भदौ', value: 'calendar', param: { month: 4 } },
        { label: 'असोज', value: 'calendar', param: { month: 5 } },
    ],
    calendar2: [
        { label: 'कार्तिक', value: 'calendar', param: { month: 6 } },
        { label: 'मंसिर', value: 'calendar', param: { month: 7 } },
        { label: 'पुस', value: 'calendar', param: { month: 8 } },
        { label: 'माघ', value: 'calendar', param: { month: 9 } },
        { label: 'फाल्गुन', value: 'calendar', param: { month: 10 } },
        { label: 'चैत', value: 'calendar', param: { month: 11 } },
    ],
    // Rashifal links with specific Rashi keys
    rashifal: [
        { label: 'मेष', value: 'rashifal', param: 'mesh' },
        { label: 'वृष', value: 'rashifal', param: 'brish' },
        { label: 'मिथुन', value: 'rashifal', param: 'mithun' },
        { label: 'कर्कट', value: 'rashifal', param: 'karkat' },
        { label: 'सिंह', value: 'rashifal', param: 'simha' },
        { label: 'कन्या', value: 'rashifal', param: 'kanya' },
    ],
    rashifal2: [
        { label: 'तुला', value: 'rashifal', param: 'tula' },
        { label: 'वृश्चिक', value: 'rashifal', param: 'brishchik' },
        { label: 'धनु', value: 'rashifal', param: 'dhanu' },
        { label: 'मकर', value: 'rashifal', param: 'makar' },
        { label: 'कुम्भ', value: 'rashifal', param: 'kumbha' },
        { label: 'मीन', value: 'rashifal', param: 'meen' },
    ],
    services: [
        { label: NEPALI_LABELS.converter, value: 'converter' },
        { label: 'राशिफल', value: 'rashifal' },
        { label: NEPALI_LABELS.kundali, value: 'kundali' },
        { label: NEPALI_LABELS.radio, value: 'radio' },
        { label: 'हाम्रो फेसबुक', value: 'facebook' },
    ]
};

export const DesktopFooter: React.FC<DesktopFooterProps> = ({ onNavigate }) => {
    const handleLinkClick = (e: React.MouseEvent, view: string, param?: any) => {
        e.preventDefault();
        onNavigate(view, param);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="hidden md:block bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-10 pb-8 mt-auto">
            <div className="max-w-7xl xl:max-w-6xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-4 gap-8 mb-10">

                    {/* Column 1: Nepali Calendar Months */}
                    <div>
                        <h3 className="text-gray-900 dark:text-gray-100 font-bold mb-4 uppercase text-sm tracking-wider">
                            नेपाली पात्रो (Calendar)
                        </h3>
                        <div className="grid grid-cols-2 gap-x-4">
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                {FOOTER_LINKS.calendar.map((link, idx) => (
                                    <li key={idx}>
                                        <button
                                            onClick={(e) => handleLinkClick(e, link.value, link.param)}
                                            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-left"
                                        >
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                {FOOTER_LINKS.calendar2.map((link, idx) => (
                                    <li key={idx}>
                                        <button
                                            onClick={(e) => handleLinkClick(e, link.value, link.param)}
                                            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-left"
                                        >
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Column 2: Rashifal */}
                    <div>
                        <h3 className="text-gray-900 dark:text-gray-100 font-bold mb-4 uppercase text-sm tracking-wider">
                            आजको राशिफल (Horoscope)
                        </h3>
                        <div className="grid grid-cols-2 gap-x-4">
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                {FOOTER_LINKS.rashifal.map((link, idx) => (
                                    <li key={idx}>
                                        <button
                                            onClick={(e) => handleLinkClick(e, link.value, link.param)}
                                            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-left"
                                        >
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                {FOOTER_LINKS.rashifal2.map((link, idx) => (
                                    <li key={idx}>
                                        <button
                                            onClick={(e) => handleLinkClick(e, link.value, link.param)}
                                            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-left"
                                        >
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Column 3: Services/Utilities */}
                    <div>
                        <h3 className="text-gray-900 dark:text-gray-100 font-bold mb-4 uppercase text-sm tracking-wider">
                            सेवाहरू (Services)
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            {FOOTER_LINKS.services.map((link, idx) => (
                                <li key={idx}>
                                    <button
                                        onClick={(e) => handleLinkClick(e, link.value)}
                                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-left"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: App Info & Download */}
                    <div>
                        <div className="mb-4 -ml-2">
                            <HeaderLogo activeSystem="bs" />
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            Your trusted partner for Nepali dates, festivals, astrology, and muhurtas.
                        </p>

                        <h4 className="text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wide mb-3">
                            एप डाउनलोड गर्नुहोस्
                        </h4>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.khumnath.nepdate"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all shadow-md w-full xs:w-auto mb-6"
                        >
                            <Smartphone className="w-6 h-6" />
                            <div className="text-left">
                                <div className="text-[10px] uppercase font-medium">Get it on</div>
                                <div className="text-sm font-bold">Google Play</div>
                            </div>
                        </a>

                        <h4 className="text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wide mb-3">
                            सम्पर्क (Contact)
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <span>info@nepdate.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>Kathmandu, Nepal</span>
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-4">
                            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors"><Facebook className="w-5 h-5" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-6 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} NepDate Patro. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default DesktopFooter;
