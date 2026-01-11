import { X, AlertTriangle, CheckCircle, Share2, Link as LinkIcon } from 'lucide-react';

import { calculate, toDevanagari, getNepaliPeriod, toBikramSambat } from '../../lib/utils/lib';
import { NEPALI_LABELS } from '../../constants/constants';
import { toast } from '../shared/toast';
import React from 'react';

interface DayDetailsModalProps {
	date: Date | null;
	isOpen: boolean;
	onClose: () => void;
	activeSystem?: 'bs' | 'ad';
}


const formatPanchangaTime = (
	isoString: string | null | undefined,
	baseDate: Date
): string | null => {
	if (!isoString) return null;
	try {
		// Parse the ISO string (UTC)
		const eventDate = new Date(isoString);
		// Shift the underlying time so that getUTCDay/Month matches Nepal's civil components.
		const TZ_OFFSET_MS = 5.75 * 60 * 60 * 1000;
		const eventDateNPT = new Date(eventDate.getTime() + TZ_OFFSET_MS);
		const baseDateNPT = new Date(baseDate.getTime() + TZ_OFFSET_MS);

		const baseBS = toBikramSambat(baseDateNPT);
		const eventBS = toBikramSambat(eventDateNPT);

		const isSameDay = baseBS?.year === eventBS?.year &&
			baseBS?.monthIndex === eventBS?.monthIndex &&
			baseBS?.day === eventBS?.day;

		const hourOptions: Intl.DateTimeFormatOptions = {
			hour: '2-digit',
			hour12: false,
			timeZone: 'Asia/Kathmandu',
		};
		const hour24 = parseInt(new Intl.DateTimeFormat('en-US', hourOptions).format(eventDate), 10);

		const timeOptions: Intl.DateTimeFormatOptions = {
			hour: 'numeric',
			minute: '2-digit',
			hour12: true,
			timeZone: 'Asia/Kathmandu',
		};

		let formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(eventDate);
		formattedTime = formattedTime.replace(' AM', '').replace(' PM', '');
		const [hour, minute] = formattedTime.split(':');

		const period = getNepaliPeriod(hour24);
		const timePart = `${toDevanagari(hour)}:${toDevanagari(minute)} ${period}`;

		if (isSameDay) {
			return timePart;
		} else {
			return `${toDevanagari(eventBS?.day)} गते ${timePart}`;
		}

	} catch (e) {
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
}> = ({ elements, baseDate }) => {

	if (!elements || elements.length === 0) return null;

	return (
		<div className="pl-4 pt-1 pb-2 border-b border-gray-200 dark:border-gray-700/50">
			{elements.map((element, index) => {
				const startTime = formatPanchangaTime(element.startTime, baseDate);
				const endTime = formatPanchangaTime(element.endTime, baseDate);

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
export const DayDetailsContent: React.FC<{ date: Date; onClose?: () => void; variant?: 'modal' | 'page'; activeSystem?: 'bs' | 'ad' }> = ({ date, onClose, variant = 'modal', activeSystem = 'bs' }) => {
	const data = calculate(date);
	const bhadra = data.bhadra;

	const isPage = variant === 'page';

	// Page variant specific classes
	const containerClasses = isPage
		? "bg-white dark:bg-gray-800 w-full mx-auto rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
		: "bg-slate-200 dark:bg-gray-900 rounded-xl shadow-2xl max-w-2xl w-full ring-1 ring-transparent dark:ring-gray-700/80 dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-sm mx-auto";

	const headerClasses = isPage
		? "sticky top-0 bg-white/95 dark:bg-gray-800/95 border-b border-gray-200 dark:border-gray-700 p-4 z-10 backdrop-blur-md rounded-t-xl"
		: "sticky top-0 bg-slate-200 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 rounded-t-xl z-10";

	const [canShare, setCanShare] = React.useState(false);

	React.useEffect(() => {
		setCanShare(!!(typeof navigator !== 'undefined' && navigator.share));
	}, []);

	const handleShare = async () => {
		try {
			let url = window.location.origin;
			let dateStr = '';

			if (activeSystem === 'bs') {
				const bsDate = toBikramSambat(date);
				const y = bsDate.year;
				const m = bsDate.monthIndex + 1;
				const d = bsDate.day;
				const mStr = m < 10 ? `0${m}` : `${m}`;
				const dStr = d < 10 ? `0${d}` : `${d}`;
				dateStr = `${y}-${mStr}-${dStr}`;
				url += `/bs?${dateStr}`;
			} else {
				const y = date.getFullYear();
				const m = date.getMonth() + 1;
				const d = date.getDate();
				const mStr = m < 10 ? `0${m}` : `${m}`;
				const dStr = d < 10 ? `0${d}` : `${d}`;
				dateStr = `${y}-${mStr}-${dStr}`;
				url += `/ad?${dateStr}`;
			}

			if (window.Android && typeof window.Android.share === 'function') {
				window.Android.share(
					`Nepdate - ${dateStr}`,
					`Check out the details for ${dateStr}`,
					url
				);
			} else if (canShare && navigator.share) {
				await navigator.share({
					title: `Nepdate - ${dateStr}`,
					text: `Check out the details for ${dateStr}`,
					url: url,
				});
			} else {
				// Try Clipboard API
				try {
					await navigator.clipboard.writeText(url);
					toast.success('Link copied to clipboard!');
				} catch (clipboardErr) {
					console.error('Clipboard copy failed', clipboardErr);
					toast.error('Failed to copy. Secure connection required.');
				}
			}
		} catch (error) {
			console.error('Error sharing:', error);
			toast.error('Failed to share');
		}
	};

	if (data.error) {
		return (
			<div className="bg-slate-200 dark:bg-gray-900 rounded-xl p-4 max-w-md w-full mx-auto">
				<div className="flex justify-between items-center mb-3">
					<h2 className="text-lg font-bold text-red-500">Error</h2>
					{onClose && !isPage && (
						<button
							onClick={onClose}
							className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
						>
							<X size={20} />
						</button>
					)}
				</div>
				<p className="text-red-500 text-sm">{data.error}</p>
			</div>
		);
	}

	return (
		<div className={containerClasses}>
			{/* Header */}
			<div className={headerClasses}>
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
					<div className="flex items-center gap-1">
						<button
							onClick={handleShare}
							className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
							title={canShare ? "Share" : "Copy Link"}
						>
							{canShare ? <Share2 size={20} /> : <LinkIcon size={20} />}
						</button>
						{onClose && !isPage && (
							<button
								onClick={onClose}
								className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
							>
								<X size={20} />
							</button>
						)}
					</div>
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

				{/* BHADRA DETAILS */}
				{bhadra && bhadra.isActive && (
					<div className={`p-3 rounded-lg border flex items-start gap-3 ${bhadra.isHarmful
						? 'bg-red-50 dark:bg-red-900/20 border-red-200 text-red-800 dark:text-red-200'
						: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 text-blue-800 dark:text-blue-200'
						}`}>
						{bhadra.isHarmful
							? <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
							: <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
						}
						<div>
							<h4 className="font-bold text-sm" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
								भद्रा (विष्टि करण) सक्रिय
							</h4>
							<TimingDetailRow elements={data.bhadraTiming ?? []} baseDate={date} />
							<p className="text-sm mt-1" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
								बास: <strong>{bhadra.residence}</strong>
							</p>
							<p className="text-xs mt-1 opacity-90">{bhadra.status}</p>
						</div>
					</div>
				)}

				{/* Panchanga Information */}
				<div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
					<h3 className="text-base font-semibold mb-2" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
						पञ्चाङ्ग विवरण
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6">
						<div className="flex flex-col">
							{/* Tithi + Paksha */}
							<InfoRow label="तिथी" value={`${data.lunarMonth} ${data.paksha} ${data.tithi}`} />
							<TimingDetailRow elements={data.tithis ?? []} baseDate={date} />

							{/* Lunar Month */}
							<InfoRow label="चन्द्रमास" value={data.lunarMonth} />

							<InfoRow label="नक्षत्र" value={data.nakshatra} />
							<TimingDetailRow elements={data.nakshatras ?? []} baseDate={date} />

							<InfoRow label="सूर्य राशि" value={data.sunRashi} />
							<InfoRow label="चन्द्र राशि" value={data.moonRashi} />
						</div>
						<div className="flex flex-col">
							<InfoRow label="योग" value={data.yoga} />
							<TimingDetailRow elements={data.yogas ?? []} baseDate={date} />

							<InfoRow label="करण" value={data.karana} />
							<TimingDetailRow elements={data.karanas ?? []} baseDate={date} />
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
	);
};

// MAIN MODAL COMPONENT (Wrapper)
const DayDetailsModal: React.FC<DayDetailsModalProps> = ({ date, isOpen, onClose, activeSystem = 'bs' }) => {
	if (!isOpen || !date) return null;

	const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<div
			className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
			onClick={handleBackdropClick}
		>
			<div className="max-w-2xl w-full max-h-[85vh] overflow-y-auto">
				<DayDetailsContent date={date} onClose={onClose} activeSystem={activeSystem} />
			</div>
		</div>
	);
};

export default DayDetailsModal;