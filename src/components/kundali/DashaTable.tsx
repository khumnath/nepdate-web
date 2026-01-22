import React, { useState } from 'react';
import type { DashaInfo } from '../../types/types';
import { NEPALI_LABELS, NEPALI_PLANETS } from '../../constants/constants';
import { NEPALI_BS_MONTHS } from '../../constants/constants';
import { toBikramSambat } from '../../lib/utils/lib';
import { ChevronDownIcon } from '../../data/icons';
import { toDevanagari } from '../../lib/utils/lib';

const formatDate = (dateString: string): string => {
    if (!dateString || dateString === 'N/A') return 'N/A';
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return 'N/A';

        const bikram = toBikramSambat(date);
        const year = toDevanagari(bikram.year.toString());
        const month = NEPALI_BS_MONTHS[bikram.monthIndex];
        const day = toDevanagari(bikram.day.toString());
        return `${year} ${month} ${day}`;
    } catch (e) {
        console.error("Date formatting error:", e);
        return 'N/A';
    }
};

export const DashaTable: React.FC<{ dashaSequence: DashaInfo[], title: string }> = ({ dashaSequence, title }) => {
    const [expandedDasha, setExpandedDasha] = useState<string | null>(null);
    const isJaimini = title === NEPALI_LABELS.jaiminiDasha;

    const toggleDasha = (dashaKey: string) => {
        setExpandedDasha(prev => (prev === dashaKey ? null : dashaKey));
    };

    return (
        <div className="kundali-card p-2 sm:p-6 mb-11 print:mb-2 rounded-lg bg-slate-200 dark:bg-gray-800 break-inside-avoid-page page-break-inside-avoid print:bg-white print:shadow-none print:border-none">
            <h3 className="text-xl font-bold text-blue-400 dark:text-blue-400 mb-4 print:hidden">{title}</h3>
            {isJaimini && (
                <p className="text-xs text-stone-500 dark:text-stone-400 -mt-3 mb-3 px-2 print:hidden">
                    {NEPALI_LABELS.jaiminiProportionalNote}
                </p>
            )}

            {/* --- Screen View: Interactive Table --- */}
            <div className="print:hidden">
                <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead className="border-b-2 border-amber-200 dark:border-amber-700 text-stone-600 dark:text-stone-300">
                        <tr>
                            <th className="py-2 px-2">{isJaimini ? "दशा राशि" : NEPALI_LABELS.mahaDasha}</th>
                            <th className="py-2 px-2">{NEPALI_LABELS.startsOn}</th>
                            <th className="py-2 px-2">{NEPALI_LABELS.endsOn}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dashaSequence.map((dasha) => {
                            const dashaKey = dasha.planet + dasha.start;
                            const hasSubDashas = dasha.subDashas && dasha.subDashas.length > 0;
                            return (
                                <React.Fragment key={dashaKey}>
                                    <tr
                                        className={`border-b border-amber-100 dark:border-amber-800 ${hasSubDashas ? 'cursor-pointer hover:bg-amber-50/70 dark:hover:bg-amber-900/40' : ''}`}
                                        onClick={() => hasSubDashas && toggleDasha(dashaKey)}
                                        aria-expanded={hasSubDashas && expandedDasha === dashaKey}
                                        aria-controls={`antardasha-${dashaKey}`}
                                    >
                                        <td className="py-2 px-2 font-medium text-stone-800 dark:text-stone-100 flex items-center relative">
                                            {hasSubDashas && (
                                                <div className="relative group">
                                                    <ChevronDownIcon
                                                        className={`w-4 h-4 mr-2 text-amber-700 dark:text-blue-400 transition-transform duration-300 ${expandedDasha === dashaKey ? 'rotate-180' : ''}`}
                                                    />
                                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 bg-zinc-800 text-white text-xs rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-[999] dark:bg-gray-800 dark:text-stone-200">
                                                        {NEPALI_LABELS.antarDasha_clickToExpand}
                                                    </div>
                                                </div>
                                            )}
                                            <span className={`z-0 ${!hasSubDashas ? 'ml-6' : ''}`}>{isJaimini ? dasha.planet : NEPALI_PLANETS[dasha.planet]}</span>
                                        </td>
                                        <td className="py-2 px-2 text-stone-700 dark:text-stone-200">{formatDate(dasha.start)}</td>
                                        <td className="py-2 px-2 text-stone-700 dark:text-stone-200">{formatDate(dasha.end)}</td>
                                    </tr>
                                    {hasSubDashas && (
                                        <tr className="bg-slate-200 dark:bg-gray-800">
                                            <td colSpan={3} className="p-0 border-none">
                                                <div
                                                    id={`antardasha-${dashaKey}`}
                                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedDasha === dashaKey ? 'max-h-[1000px]' : 'max-h-0'}`}
                                                >
                                                    <div className="p-4 bg-amber-50/50 dark:bg-amber-900/20">
                                                        <h4 className="font-semibold text-blue-400 dark:text-blue-400 mb-2 pl-2">{isJaimini ? "अन्तरदशा राशि" : NEPALI_LABELS.antarDasha}</h4>
                                                        <table className="w-full text-sm">
                                                            <thead className="text-stone-500 dark:text-stone-400">
                                                                <tr>
                                                                    <th className="font-medium py-1 px-2 text-left">{isJaimini ? "राशि" : NEPALI_LABELS.planet}</th>
                                                                    <th className="font-medium py-1 px-2 text-left">{NEPALI_LABELS.startsOn}</th>
                                                                    <th className="font-medium py-1 px-2 text-left">{NEPALI_LABELS.endsOn}</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {dasha.subDashas!.map(subDasha => (
                                                                    <tr key={subDasha.planet + subDasha.start} className="border-b border-amber-100 dark:border-amber-800 last:border-b-0">
                                                                        <td className="py-1.5 px-2 text-stone-800 dark:text-stone-100">{isJaimini ? subDasha.planet : NEPALI_PLANETS[subDasha.planet]}</td>
                                                                        <td className="py-1.5 px-2 text-stone-700 dark:text-stone-200">{formatDate(subDasha.start)}</td>
                                                                        <td className="py-1.5 px-2 text-stone-700 dark:text-stone-200">{formatDate(subDasha.end)}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* --- Print View: Static, Main Dashas Only --- */}
            <div className="hidden print:block mt-1">
                <h4 className="text-lg font-semibold mb-1 text-stone-800">{title}</h4>
                {isJaimini && (
                    <p className="text-xs text-stone-500 -mt-1 mb-1 px-2 italic">
                        {NEPALI_LABELS.jaiminiProportionalNote}
                    </p>
                )}
                <table className="w-full text-left text-sm border-collapse mb-1">
                    <thead className="border-b-2 border-stone-400 text-stone-600">
                        <tr>
                            <th className="py-1 px-2">{isJaimini ? "दशा राशि" : NEPALI_LABELS.mahaDasha}</th>
                            <th className="py-1 px-2">{NEPALI_LABELS.startsOn}</th>
                            <th className="py-1 px-2">{NEPALI_LABELS.endsOn}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dashaSequence.slice(0, 12).map((dasha) => (
                            <tr key={`print-${dasha.planet}-${dasha.start}`} className="border-b border-stone-200">
                                <td className="py-1 px-2 font-medium text-stone-800">{isJaimini ? dasha.planet : NEPALI_PLANETS[dasha.planet]}</td>
                                <td className="py-1 px-2 text-stone-700">{formatDate(dasha.start)}</td>
                                <td className="py-1 px-2 text-stone-700">{formatDate(dasha.end)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p className="text-xs text-stone-600 px-2 italic">
                    {NEPALI_LABELS.subDashaPrintNote}
                </p>
            </div>
        </div>
    );
};
export default DashaTable;
