import React from 'react';
import { X } from 'lucide-react';
import { calculate, toDevanagari, getNepaliPeriod } from '../../lib/utils/lib';
import { NEPALI_LABELS } from '../../constants/constants';

interface DayDetailsModalProps {
    date: Date | null;
    isOpen: boolean;
    onClose: () => void;
}

// HELPER FUNCTIONS
function getNepalDate(): Date {
    const utcNow = new Date();
    const nepalISOString = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Asia/Kathmandu',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(utcNow);
    const [year, month, day] = nepalISOString.split('-').map(Number);
    return new Date(Date.UTC(year, month - 1, day));
}

const formatPanchangaTime = (
    isoString: string | null | undefined,
    baseDate: Date,
    todayDate: Date
): string | null => {
    if (!isoString) return null;
    try {
        const date = new Date(isoString);

        const nepalTZ = 'Asia/Kathmandu';
        const dateOptions: Intl.DateTimeFormatOptions = { timeZone: nepalTZ, year: 'numeric', month: '2-digit', day: '2-digit' };

        const eventDateStr = new Intl.DateTimeFormat('en-CA', dateOptions).format(date);
        const baseDateStr = new Intl.DateTimeFormat('en-CA', dateOptions).format(baseDate);
        const todayDateStr = new Intl.DateTimeFormat('en-CA', dateOptions).format(todayDate);

        const isBaseDateToday = (baseDateStr === todayDateStr);

        const baseDay = new Date(baseDateStr + "T00:00:00Z");
        const eventDay = new Date(eventDateStr + "T00:00:00Z");
        const dayDiff = (eventDay.getTime() - baseDay.getTime()) / 86400000;

        let dayContext = '';
        if (dayDiff === -1) {
            dayContext = isBaseDateToday ? 'हिजो ' : 'अघिल्लो दिन ';
        } else if (dayDiff === 1) {
            dayContext = isBaseDateToday ? 'भोलि ' : 'अर्को दिन ';
        } else if (dayDiff < -1) {
            dayContext = 'अघिल्लो दिन ';
        } else if (dayDiff > 1) {
            dayContext = 'अर्को दिन ';
        }

        const hourOptions: Intl.DateTimeFormatOptions = {
            hour: '2-digit',
            hour12: false,
            timeZone: nepalTZ,
        };
        const hour24 = parseInt(new Intl.DateTimeFormat('en-US', hourOptions).format(date), 10);

        const timeOptions: Intl.DateTimeFormatOptions = {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
            timeZone: nepalTZ,
        };

        let formatted = new Intl.DateTimeFormat('en-US', timeOptions).format(date);
        const period = getNepaliPeriod(hour24);

        formatted = formatted.replace(' AM', '').replace(' PM', '');
        const [hour, minute] = formatted.split(':');

        return `${dayContext}${toDevanagari(hour)}:${toDevanagari(minute)} ${period}`;

    } catch (e) {
        console.error("Failed to format time:", e);
        return null;
    }
};


// Sub-Components
const InfoRow: React.FC<{ label: string; value?: string | null }> = ({ label, value }) => (
    <div className="py-2.5 border-b border-gray-200 dark:border-gray-700/50">
        <div className="flex justify-between items-center text-sm">
            <span
                className="text-gray-600 dark:text-gray-400 font-medium"
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
            >
                {label}:
            </span>
            <strong
                className="text-gray-900 dark:text-white"
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
            >
                {value || '-'}
            </strong>
        </div>
    </div>
);

const TimingDetailRow: React.FC<{
    elements: Array<{ name?: string; startTime?: string | null; endTime?: string | null }>;
    baseDate: Date;
    todayDate: Date;
}> = ({ elements, baseDate, todayDate }) => {

    if (!elements || elements.length === 0) return null;

    return (
        <div className="pl-4 pt-1 pb-2 border-b border-gray-200 dark:border-gray-700/50">
            {elements.map((element, index) => {
                const startTime = formatPanchangaTime(element.startTime, baseDate, todayDate);
                const endTime = formatPanchangaTime(element.endTime, baseDate, todayDate);

                return (
                    <div key={index} className="mt-1.5">
                        <strong className="text-sm text-gray-800 dark:text-white" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                            {element.name}
                        </strong>
                        <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-500 mt-0.5" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                            <span><span className='font-bold'>{NEPALI_LABELS.startsOn}</span> {startTime}</span>
                            <span><span className='font-bold'>{NEPALI_LABELS.endsOn}</span> {endTime}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

// MAIN COMPONENT
const DayDetailsModal: React.FC<DayDetailsModalProps> = ({ date, isOpen, onClose }) => {
    if (!isOpen || !date) return null;

    const data = calculate(date);
    const todayDate = getNepalDate();
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (data.error) {
        return (
            <div
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                onClick={handleBackdropClick}
            >
                <div className="bg-slate-200 dark:bg-gray-900 rounded-xl p-4 max-w-md w-full">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="text-lg font-bold text-red-500">Error</h2>
                        <button
                            onClick={onClose}
                            className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>
                    <p className="text-red-500 text-sm">{data.error}</p>
                </div>
            </div>
        );
    }

    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
        >
            <div className="bg-slate-200 dark:bg-gray-900 rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto ring-1 ring-transparent dark:ring-gray-700/80 dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-sm">
                {/* Header */}
                <div className="sticky top-0 bg-slate-200 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 rounded-t-xl">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2
                                className="text-xl font-bold text-gray-900 dark:text-white"
                                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                            >
                                {data.weekday}, {data.bikramSambat}
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{data.gregorianDate}</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">
                    {/* Sunrise/Sunset */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-3 rounded-lg">
                            <div className="text-xs text-orange-600 dark:text-orange-400 font-medium">सूर्योदय</div>
                            <div className="text-lg font-bold text-orange-700 dark:text-orange-300">{data.sunrise}</div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-3 rounded-lg">
                            <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">सूर्यास्त</div>
                            <div className="text-lg font-bold text-purple-700 dark:text-purple-300">{data.sunset}</div>
                        </div>
                    </div>

                    {/* Panchanga Information */}
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                        <h3 className="text-base font-semibold mb-2" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                            पञ्चाङ्ग विवरण
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6">
                            <div className="flex flex-col">
                                <InfoRow label="तिथी" value={data.tithi} />
                                <TimingDetailRow elements={data.tithis ?? []} baseDate={date} todayDate={todayDate} />

                                <InfoRow label="नक्षत्र" value={data.nakshatra} />
                                <TimingDetailRow elements={data.nakshatras ?? []} baseDate={date} todayDate={todayDate} />

                                <InfoRow label="चन्द्रमास" value={data.lunarMonth} />
                                <InfoRow label="सूर्य राशि" value={data.sunRashi} />
                            </div>
                            <div className="flex flex-col">
                                <InfoRow label="पक्ष" value={data.paksha} />

                                <InfoRow label="योग" value={data.yoga} />
                                <TimingDetailRow elements={data.yogas ?? []} baseDate={date} todayDate={todayDate} />

                                <InfoRow label="करण" value={data.karana} />
                                <TimingDetailRow elements={data.karanas ?? []} baseDate={date} todayDate={todayDate} />

                                <InfoRow label="चन्द्र राशि" value={data.moonRashi} />
                            </div>
                        </div>
                    </div>

                    {/* Events */}
                    {data.events && data.events.length > 0 && (
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4">
                            <h3
                                className="text-base font-semibold mb-3 text-green-800 dark:text-green-200"
                                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                            >
                                आजका चाडपर्वहरु
                            </h3>
                            <div className="space-y-2">
                                {data.events.map((event: { name: string; detail?: string; holiday?: boolean; category?: string }, index: number) => (
                                    <div key={index} className="bg-slate-200/70 dark:bg-gray-800/70 rounded-lg p-3">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <strong
                                                        className="text-sm text-green-800 dark:text-green-200"
                                                        style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                                                    >
                                                        {event.name}
                                                    </strong>
                                                    {event.holiday && (
                                                        <span className="bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200 px-2 py-0.5 rounded-full text-xs font-medium">
                                                            Holiday
                                                        </span>
                                                    )}
                                                </div>
                                                {event.detail && (
                                                    <p
                                                        className="text-xs text-gray-600 dark:text-gray-300"
                                                        style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                                                    >
                                                        {event.detail}
                                                    </p>
                                                )}
                                            </div>
                                            {event.category && (
                                                <span className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200 px-2 py-0.5 rounded-full text-xs font-medium ml-2">
                                                    {event.category}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Computation note when data-driven BS mapping is not available */}
                    {data.isComputed && (
                        <div className="text-xs text-yellow-700 dark:text-yellow-300 mt-2">
                            Note: Date converted via astronomical fallback (precomputed data unavailable). Events from pre-calculated lists may not be available for this year.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DayDetailsModal;
