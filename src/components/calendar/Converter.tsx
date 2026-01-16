import React, { useState, useEffect } from 'react';
import {
	toBikramSambat,
	fromBikramSambat,
	getBikramMonthInfo,
	toDevanagari,
	fromDevanagari,
	Bsdata
} from '../../lib/utils/lib';
import { NEPALI_BS_MONTHS } from '../../constants/constants';

const START_BS_YEAR = Bsdata.BS_START_YEAR;
const END_BS_YEAR = Bsdata.BS_START_YEAR + Bsdata.NP_MONTHS_DATA.length - 1;
const START_AD_DATE = new Date(Date.UTC(
	Bsdata.BS_START_DATE_AD.getFullYear(),
	Bsdata.BS_START_DATE_AD.getMonth(),
	Bsdata.BS_START_DATE_AD.getDate()
));
const END_AD_DATE = fromBikramSambat(
	END_BS_YEAR,
	11,
	Bsdata.NP_MONTHS_DATA[Bsdata.NP_MONTHS_DATA.length - 1][11]
);

interface ConverterProps {
	onBack: () => void;
}

const Converter: React.FC<ConverterProps> = () => {
	const [isAdToBs, setIsAdToBs] = useState(true);

	// Nepal timezone date
	const [todayAd] = useState(() => {
		const now = new Date();
		const nepalFormatter = new Intl.DateTimeFormat('en-CA', {
			timeZone: 'Asia/Kathmandu',
			year: 'numeric', month: '2-digit', day: '2-digit'
		});
		const [year, month, day] = nepalFormatter.format(now).split('-').map(Number);
		return new Date(Date.UTC(year, month - 1, day));
	});

	const [todayBs] = useState(() => toBikramSambat(todayAd));

	const [yearText, setYearText] = useState(todayAd.getUTCFullYear().toString());
	const [monthIndex, setMonthIndex] = useState(todayAd.getUTCMonth());
	const [dayText, setDayText] = useState(todayAd.getUTCDate().toString());

	const [resultText, setResultText] = useState('');
	const [infoText, setInfoText] = useState('');
	const [warningText, setWarningText] = useState('');

	const handleSwitchMode = (adToBs: boolean) => {
		setIsAdToBs(adToBs);

		if (adToBs) {
			setYearText(todayAd.getUTCFullYear().toString());
			setMonthIndex(todayAd.getUTCMonth());
			setDayText(todayAd.getUTCDate().toString());
		} else {
			setYearText(toDevanagari(todayBs.year));
			setMonthIndex(todayBs.monthIndex);
			setDayText(toDevanagari(todayBs.day));
		}
		setResultText('');
		setInfoText('');
	};

	const handleYearChange = (value: string) => {
		const digits = [...fromDevanagari(value)]
			.filter(c => "0123456789".includes(c))
			.join('');
		setYearText(isAdToBs ? digits : toDevanagari(digits));
	};

	const handleYearBlur = () => {
		let year = parseInt(fromDevanagari(yearText), 10);
		if (isNaN(year)) year = isAdToBs ? todayAd.getUTCFullYear() : todayBs.year;

		setYearText(isAdToBs ? year.toString() : toDevanagari(year));

		if (isAdToBs) {
			setWarningText(
				year < START_AD_DATE.getUTCFullYear() || year > END_AD_DATE.getUTCFullYear()
					? "Precalculated BS data not available for this year."
					: ""
			);
		} else {
			setWarningText(
				year < START_BS_YEAR || year > END_BS_YEAR
					? "यो वर्षको लागि पूर्व-गणना गरिएको विक्रम संवत् डाटा उपलब्ध छैन।"
					: ""
			);
		}
	};

	const handleDayChange = (value: string) => {
		const digits = [...fromDevanagari(value)]
			.filter(c => "0123456789".includes(c))
			.join('')
			.slice(0, 2);
		setDayText(isAdToBs ? digits : toDevanagari(digits));
	};

	useEffect(() => {
		const year = parseInt(fromDevanagari(yearText), 10);
		const day = parseInt(fromDevanagari(dayText), 10);
		if (isNaN(year) || isNaN(day)) return;

		let maxDay = 31;

		if (isAdToBs) {
			maxDay = new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
		} else {
			const info = getBikramMonthInfo(year, monthIndex);
			if (info) maxDay = info.totalDays;
		}

		if (day > maxDay) {
			setDayText(isAdToBs ? maxDay.toString() : toDevanagari(maxDay));
		}
	}, [yearText, monthIndex, dayText, isAdToBs]);

	const handleConvert = () => {
		setResultText('');
		setInfoText('');

		try {
			const year = parseInt(fromDevanagari(yearText), 10);
			const day = parseInt(fromDevanagari(dayText), 10);

			if (isNaN(year) || isNaN(day)) {
				setResultText(isAdToBs ? "Please enter a valid date." : "कृपया मान्य मिति प्रविष्ट गर्नुहोस्।");
				return;
			}

			if (isAdToBs) {
				const adDate = new Date(Date.UTC(year, monthIndex, day));
				const bs = toBikramSambat(adDate);
				if (bs.year === 0) throw new Error("Date is out of range.");

				setResultText(`वि.सं.: ${toDevanagari(bs.year)} ${bs.monthName} ${toDevanagari(bs.day)}`);
			} else {
				const adDate = fromBikramSambat(year, monthIndex, day);
				const monthName = adDate.toLocaleString('default', { month: 'long', timeZone: 'UTC' });
				setResultText(`ई.सं.: ${adDate.getUTCFullYear()}-${monthName}-${adDate.getUTCDate()}`);
			}

		} catch (e: any) {
			setResultText(isAdToBs ? "Invalid date or out of range." : "अमान्य मिति वा दायरा बाहिर।");
			setInfoText(e.message);
		}
	};

	const adMonths = Array.from({ length: 12 }, (_, i) =>
		new Date(Date.UTC(2000, i, 1)).toLocaleString('default', { month: 'long', timeZone: 'UTC' })
	);

	const bsMonths = NEPALI_BS_MONTHS;
	const months = isAdToBs ? adMonths : bsMonths;

	return (
		<div className="w-full flex flex-col items-center">



			<div className="w-full max-w-xl bg-gray-100/70 dark:bg-gray-800/50 rounded-2xl shadow-lg p-5 sm:p-8 border border-gray-300 dark:border-gray-700">

				{/* Today section */}
				<div className="text-center mb-5 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
					<p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">आजको मिति</p>
					<p className="text-base sm:text-lg font-semibold text-indigo-700 dark:text-indigo-300">
						ई.सं.: {todayAd.getUTCFullYear()}-{todayAd.getUTCMonth() + 1}-{todayAd.getUTCDate()}
					</p>
					<p className="text-base sm:text-lg font-semibold text-purple-700 dark:text-purple-300">
						वि.सं.: {toDevanagari(todayBs.year)} {todayBs.monthName} {toDevanagari(todayBs.day)}
					</p>
				</div>

				{/* Mode switch */}
				<div className="flex justify-center gap-2 mb-5">
					<button
						onClick={() => handleSwitchMode(true)}
						className={`px-3 py-2 text-xs sm:text-sm rounded-md ${isAdToBs ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700'
							}`}
					>
						AD → BS
					</button>

					<button
						onClick={() => handleSwitchMode(false)}
						className={`px-3 py-2 text-xs sm:text-sm rounded-md ${!isAdToBs ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700'
							}`}
					>
						BS → AD
					</button>
				</div>

				{/* Inputs */}
				<div className="space-y-3 sm:space-y-4">
					<input
						type="text"
						value={yearText}
						onChange={(e) => handleYearChange(e.target.value)}
						onBlur={handleYearBlur}
						placeholder={isAdToBs ? 'Year' : 'वर्ष'}
						className="w-full p-2.5 sm:p-3 bg-white/60 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm sm:text-base"
					/>

					<select
						value={monthIndex}
						onChange={(e) => setMonthIndex(parseInt(e.target.value))}
						className="w-full p-2.5 sm:p-3 bg-white/60 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm sm:text-base"
					>
						{months.map((m, i) => (
							<option key={i} value={i}>{m}</option>
						))}
					</select>

					<input
						type="text"
						value={dayText}
						onChange={(e) => handleDayChange(e.target.value)}
						placeholder={isAdToBs ? 'Day' : 'गते'}
						className="w-full p-2.5 sm:p-3 bg-white/60 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm sm:text-base"
					/>

					<button
						onClick={handleConvert}
						className="w-full p-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md text-sm sm:text-base font-semibold shadow"
					>
						{isAdToBs ? "Convert" : "रूपान्तरण गर्नुहोस्"}
					</button>
				</div>

				{warningText && (
					<div className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900 rounded text-center">
						<p className="text-xs sm:text-sm text-yellow-800 dark:text-yellow-200 font-semibold">
							{warningText}
						</p>
					</div>
				)}

				{resultText && (
					<div className="mt-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded text-center shadow">
						<p className="text-lg sm:text-xl font-semibold text-indigo-800 dark:text-indigo-200">
							{resultText}
						</p>
						{infoText && (
							<p className="text-xs sm:text-sm text-yellow-600 dark:text-yellow-400 mt-2">
								{infoText}
							</p>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default Converter;
