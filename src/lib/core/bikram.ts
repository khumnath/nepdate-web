/* * Bikram Sambat (BS) Calendar Conversion Library
 * This version uses a hybrid approach:
 * 1. Data-Driven: For dates within the pre-computed range (e.g., 2000-2089 BS), it uses a fast lookup table for accuracy and speed.
 * 2. Algorithmic Fallback: For dates outside the pre-computed range, it falls back to traditional astronomical calculations
 * based on the Surya Siddhanta to ensure wide historical and future date compatibility.
 */
import { Bsdata } from '../../data/static/monthData';
import { NEPALI_NUMERALS } from '../../constants/constants';

export { Bsdata };

// Base Surya Siddhanta Constants (used by solar and lunar calculations)
export const YugaRotation = {
    'star': 1582237828, 'sun': 4320000, 'moon': 57753336, 'Candrocca': 488203
};
export const YugaCivilDays = 1577917828;
export const PlanetApogee = { 'sun': 77 + 17 / 60 };
export const PlanetCircumm = { 'sun': 13 + 50 / 60, 'moon': 31 + 50 / 60 };
const SOLAR_YEAR_IN_DAYS = YugaCivilDays / YugaRotation.sun;
export const KaliEpoch = 588465.5; // UJJAIN_KALI_EPOCH, Julian days from AD epoch at Ujjain midnight
const KATHMANDU_LONGITUDE = 85.324;
export const UJJAIN_LONGITUDE = 75.776;
const DESHANTARA = (KATHMANDU_LONGITUDE - UJJAIN_LONGITUDE) / 360; // Longitude difference correction
export const rad = 180 / Math.PI;

// can be imported from constants. but keeping here for easier usage.
export const solarMonths = ["वैशाख", "ज्येष्ठ", "आषाढ", "श्रावण", "भाद्रपद", "आश्विन", "कार्तिक", "मार्गशीर्ष", "पौष", "माघ", "फाल्गुन", "चैत्र"];
export const weekdays = ["आइतबार", "सोमबार", "मङ्गलबार", "बुधबार", "बिहीबार", "शुक्रबार", "शनिबार"];
export const TITHI_NAMES = [
    "प्रतिपदा", "द्वितीया", "तृतीया", "चतुर्थी", "पञ्चमी", "षष्ठी", "सप्तमी", "अष्टमी", "नवमी", "दशमी",
    "एकादशी", "द्वादशी", "त्रयोदशी", "चतुर्दशी", "पूर्णिमा", "अमावस्या"
];

// Helper & Utility Functions
export function toDevanagari(num: number | string): string {
    const map: Record<string, string> = {
        '0': '०', '1': '१', '2': '२', '3': '३', '4': '४',
        '5': '५', '6': '६', '7': '७', '8': '८', '9': '९',
    };
    return String(num).split('').map(ch => map[ch] ?? ch).join('');
}


export function fromDevanagari(input: string): string {
    try {
        return input.replace(/[०१२३४५६७८९]/g, d => '०१२३४५६७८९'.indexOf(d).toString());
    } catch { return input; }
}

export function zero360(x: number): number { return x - Math.floor(x / 360) * 360; }
export function sinDeg(deg: number): number { return Math.sin(deg / rad); }
export function cosDeg(deg: number): number { return Math.cos(deg / rad); }
export function arcsinDeg(x: number): number {
    if (x > 1.0) x = 1.0; if (x < -1.0) x = -1.0;
    return Math.asin(x) * rad;
}

export function formatMonthDay(month: number, day: number): string {
    return (month < 10 ? '0' : '') + month + '/' + (day < 10 ? '0' : '') + day;
}


// Julian Day Converters
export function toJulianDay(year: number, month: number, day: number) {
    const month_ = month + 1;
    const a = Math.floor((14 - month_) / 12);
    const y = year + 4800 - a;
    const m = month_ + 12 * a - 3;
    let jdn = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4);
    if (year > 1582 || (year === 1582 && month > 9) || (year === 1582 && month === 9 && day >= 15)) {
        jdn = jdn - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
    } else {
        jdn = jdn - 32083;
    }
    return jdn - 0.5; // midnight
}

export function fromJulianDay(jd: number): Date {
    const z = Math.floor(jd);
    const f = jd - z; // Fraction *from midnight*

    let a = z;
    if (z >= 2299161) {
        const alpha = Math.floor((z - 1867216.25) / 36524.25);
        a = z + 1 + alpha - Math.floor(alpha / 4);
    }

    const b = a + 1524;
    const c = Math.floor((b - 122.1) / 365.25);
    const d = Math.floor(365.25 * c);
    const e = Math.floor((b - d) / 30.6001);

    // Use the fraction 'f' directly
    const dayWithFraction = b - d - Math.floor(30.6001 * e) + f;
    const day = Math.floor(dayWithFraction);
    const fractionalDay = dayWithFraction - day; // 0.0 to 1.0 from midnight

    const month = e < 14 ? e - 1 : e - 13;
    const year = month > 2 ? c - 4716 : c - 4715;

    // Convert fractional day to milliseconds
    const msInDay = fractionalDay * 86400000;
    const hours = Math.floor(msInDay / 3600000);
    const minutes = Math.floor((msInDay % 3600000) / 60000);
    const seconds = Math.floor((msInDay % 60000) / 1000);
    const ms = Math.floor(msInDay % 1000);

    if (year >= 0 && year <= 99) {
        const iso = `${year.toString().padStart(4, '0')}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}T${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}Z`;
        return new Date(iso);
    }

    return new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds, ms));
}

// Algorithmic Fallback Engine
function getTslong(ahar: number): number {
    const meanLong = zero360(YugaRotation.sun * ahar * 360 / YugaCivilDays);
    const manda = arcsinDeg(PlanetCircumm.sun / 360 * sinDeg(meanLong - PlanetApogee.sun));
    return zero360(meanLong - manda);
}

function todaySauraMasaFirstP(ahar: number): boolean {
    const ahar_local_today = ahar - DESHANTARA;
    const ahar_local_tomorrow = ahar_local_today + 1;
    let tslong_today = getTslong(ahar_local_today);
    let tslong_tomorrow = getTslong(ahar_local_tomorrow);
    tslong_today -= Math.floor(tslong_today / 30) * 30;
    tslong_tomorrow -= Math.floor(tslong_tomorrow / 30) * 30;
    return (25 < tslong_today && tslong_tomorrow < 5);
}

function getSauraMasaDay(ahar: number): { m: number; d: number } {
    let currentAhar = Math.floor(ahar);
    let daysElapsed = 0;
    while (daysElapsed < 40) {
        if (todaySauraMasaFirstP(currentAhar)) {
            const tslong_tomorrow = getTslong(currentAhar - DESHANTARA + 1);
            let month = Math.floor(tslong_tomorrow / 30) % 12;
            return { m: (month + 12) % 12, d: daysElapsed + 1 };
        }
        currentAhar--; daysElapsed++;
    }
    return { m: 0, d: 1 }; // Fallback
}

function getBsYearFromAhar(ahar: number): number {
    const sauraMasaResult = getSauraMasaDay(ahar);
    const aharForYearCalc = ahar + (4 - sauraMasaResult.m) * 30;
    const yearKali = Math.floor(aharForYearCalc / SOLAR_YEAR_IN_DAYS);
    const yearSaka = yearKali - 3179;
    return yearSaka + 135;
}

function findAharForBsDate(bsYear: number, monthIndex: number, day: number): number {
    const yearSaka = bsYear - 135;
    const yearKali = yearSaka + 3179;
    let ahar = Math.floor(yearKali * SOLAR_YEAR_IN_DAYS);
    for (let i = 0; i < 5; i++) {
        const foundBsYear = getBsYearFromAhar(ahar);
        const yearDifference = bsYear - foundBsYear;
        if (yearDifference === 0) break;
        ahar += Math.round(yearDifference * SOLAR_YEAR_IN_DAYS);
    }
    let currentDay = getSauraMasaDay(ahar);
    const dayDifference = Math.round((monthIndex * 30.5 + day) - (currentDay.m * 30.5 + currentDay.d));
    ahar += dayDifference;
    currentDay = getSauraMasaDay(ahar);
    let safetyCounter = 0;
    while ((currentDay.m !== monthIndex || currentDay.d !== day) && safetyCounter < 45) {
        ahar += ((currentDay.m < monthIndex) || (currentDay.m === monthIndex && currentDay.d < day)) ? 1 : -1;
        currentDay = getSauraMasaDay(ahar);
        safetyCounter++;
    }
    return ahar;
}

// Panchanga Calculation Engine (Lunar Functions)
export function meanLongitude(ahar: number, rotation: number): number {
    return zero360(rotation * ahar * 360 / YugaCivilDays);
}
export function mandaEquation(meanLong: number, apogee: number, circ: number): number {
    return arcsinDeg(circ / 360 * sinDeg(meanLong - apogee));
}
export function trueLongitudeSun(ahar: number): number {
    const meanLong = meanLongitude(ahar, YugaRotation.sun);
    const manda = mandaEquation(meanLong, PlanetApogee.sun, PlanetCircumm.sun);
    return zero360(meanLong - manda);
}
export function trueLongitudeMoon(ahar: number): number {
    const meanLong = meanLongitude(ahar, YugaRotation.moon);
    const apogee = meanLongitude(ahar, YugaRotation.Candrocca) + 90;
    const manda = mandaEquation(meanLong, apogee, PlanetCircumm.moon);
    return zero360(meanLong - manda);
}

export function resolveTithiName(tithiDay: number, paksha: string): string {
    if (paksha === "कृष्ण पक्ष" && tithiDay === 15) return TITHI_NAMES[15];
    if (paksha === "शुक्ल पक्ष" && tithiDay === 15) return TITHI_NAMES[14];
    return TITHI_NAMES[tithiDay - 1];
}
export const NAKSHATRA_NAMES = ["अश्विनी", "भरणी", "कृत्तिका", "रोहिणी", "मृगशिरा", "आर्द्रा", "पुनर्वसु", "पुष्य", "अश्लेषा", "मघा", "पूर्वफाल्गुनी", "उत्तरफाल्गुनी", "हस्त", "चित्रा", "स्वाती", "विशाखा", "अनुराधा", "ज्येष्ठा", "मूल", "पूर्वाषाढा", "उत्तराषाढा", "श्रवण", "धनिष्ठा", "शतभिषा", "पूर्वभाद्रपदा", "उत्तरभाद्रपदा", "रेवती"];
export const YOGA_NAMES = ["विष्कुम्भ", "प्रीति", "आयुष्मान्", "सौभाग्य", "शोभन", "अतिगण्ड", "सुकर्मा", "धृति", "शूल", "गण्ड", "वृद्धि", "ध्रुव", "व्याघात", "हर्षण", "वज्र", "सिद्धि", "व्यतीपात", "वरीयान्", "परिघ", "शिव", "सिद्ध", "साध्य", "शुभ", "शुक्ल", "ब्रह्म", "इन्द्र", "वैधृति"];
export const KARANA_NAMES = ["किंस्तुघ्न", "बव", "बालव", "कौलव", "तैतिल", "गर", "वणिज", "विष्टि", "शकुनि", "चतुष्पाद", "नाग"];
export const RASHI_NAMES = ["मेष", "वृषभ", "मिथुन", "कर्कट", "सिंह", "कन्या", "तुला", "वृश्चिक", "धनु", "मकर", "कुम्भ", "मीन"];

export function getTithi(sunLong: number, moonLong: number): number {
    return zero360(moonLong - sunLong) / 12;
}

export function findNewMoon(ahar: number): number {
    const getElongation = (a: number) => zero360(trueLongitudeMoon(a) - trueLongitudeSun(a));
    let guess = ahar;
    for (let i = 0; i < 10; i++) {
        const elong = getElongation(guess); if (elong < 5 || elong > 355) break;
        guess += (elong < 180 ? -elong : 360 - elong) / 12.19;
    }
    let lo = guess - 2, hi = guess + 2;
    for (let j = 0; j < 30; j++) { const mid = (lo + hi) / 2; getElongation(mid) < 180 ? hi = mid : lo = mid; }
    return (lo + hi) / 2;
}

export function findPurnima(ahar: number): number {
    const getElongation = (a: number) => zero360(trueLongitudeMoon(a) - trueLongitudeSun(a));
    let guess = ahar;
    for (let i = 0; i < 10; i++) {
        const elong = getElongation(guess);
        if (Math.abs(elong - 180) < 5) break;
        guess += (180 - elong) / 12.19;
    }
    let lo = guess - 2, hi = guess + 2;
    for (let j = 0; j < 30; j++) { const mid = (lo + hi) / 2; getElongation(mid) < 180 ? lo = mid : hi = mid; }
    return (lo + hi) / 2;
}

export function calculateAdhikaMasa(ahar: number): string {
    let lunarMonthStart = findNewMoon(ahar);
    if (lunarMonthStart > ahar) { lunarMonthStart = findNewMoon(lunarMonthStart - 29.53); }
    const lunarMonthEnd = findNewMoon(lunarMonthStart + 29.53);
    let startSign = Math.floor(trueLongitudeSun(lunarMonthStart) / 30);
    let endSign = Math.floor(trueLongitudeSun(lunarMonthEnd) / 30);
    if (endSign < startSign) endSign += 12;
    if (endSign === startSign) return "अधिक " + solarMonths[startSign % 12];
    if (endSign > startSign + 1) return "क्षय " + solarMonths[(startSign + 1) % 12];
    return "छैन";
}


// Main Bikram date Conversion Logic (Hybrid Approach)
export interface BikramDate { year: number; monthIndex: number; day: number; monthName: string; isComputed: boolean; }

// Public: Gregorian -> Bikram Sambat
export function toBikramSambat(gregorianDate: Date): BikramDate {
    const targetUtcDate = new Date(Date.UTC(gregorianDate.getFullYear(), gregorianDate.getMonth(), gregorianDate.getDate()));
    const startDate = new Date(Date.UTC(Bsdata.BS_START_DATE_AD.getFullYear(), Bsdata.BS_START_DATE_AD.getMonth(), Bsdata.BS_START_DATE_AD.getDate()));
    const lastBsYear = Bsdata.BS_START_YEAR + Bsdata.NP_MONTHS_DATA.length - 1;
    const lastBsMonthData = Bsdata.NP_MONTHS_DATA[Bsdata.NP_MONTHS_DATA.length - 1];
    const daysInLastBsMonth = lastBsMonthData[lastBsMonthData.length - 1];
    const endDate = fromBikramSambat(lastBsYear, 11, daysInLastBsMonth);

    if (targetUtcDate >= startDate && targetUtcDate <= endDate) {
        const daysOffset = Math.floor((targetUtcDate.getTime() - startDate.getTime()) / 86400000);
        let remainingDays = daysOffset;
        for (let y = 0; y < Bsdata.NP_MONTHS_DATA.length; y++) {
            const currentBsYear = Bsdata.BS_START_YEAR + y;
            const yearData = Bsdata.NP_MONTHS_DATA[y];
            const daysInYear = yearData.reduce((sum, current) => sum + current, 0);
            if (remainingDays < daysInYear) {
                for (let m = 0; m < 12; m++) {
                    if (remainingDays < yearData[m]) {
                        return { year: currentBsYear, monthIndex: m, day: remainingDays + 1, monthName: solarMonths[m], isComputed: false };
                    }
                    remainingDays -= yearData[m];
                }
            }
            remainingDays -= daysInYear;
        }
    }

    const jd = toJulianDay(gregorianDate.getUTCFullYear(), gregorianDate.getUTCMonth(), gregorianDate.getUTCDate());
    const ahar_at_ujjain_midnight = jd - KaliEpoch;

    const sauraMasaResult = getSauraMasaDay(ahar_at_ujjain_midnight);
    const monthIndex = sauraMasaResult.m;

    const aharForYearCalc = ahar_at_ujjain_midnight + (4 - monthIndex) * 30;
    const yearKali = Math.floor(aharForYearCalc / SOLAR_YEAR_IN_DAYS);
    const yearSaka = yearKali - 3179;
    const finalBsYear = yearSaka + 135;
    return { year: finalBsYear, monthIndex: sauraMasaResult.m, day: sauraMasaResult.d, monthName: solarMonths[sauraMasaResult.m], isComputed: true };
}

// Public: from Bikram Sambat -> Gregorian
export function fromBikramSambat(bsYear: number, monthIndex: number, day: number): Date {
    const yearIndex = bsYear - Bsdata.BS_START_YEAR;
    if (bsYear >= Bsdata.BS_START_YEAR && yearIndex < Bsdata.NP_MONTHS_DATA.length) {
        let daysOffset = day - 1;
        for (let y = Bsdata.BS_START_YEAR; y < bsYear; y++) {
            daysOffset += Bsdata.NP_MONTHS_DATA[y - Bsdata.BS_START_YEAR].reduce((s, c) => s + c, 0);
        }
        for (let m = 0; m < monthIndex; m++) {
            daysOffset += Bsdata.NP_MONTHS_DATA[yearIndex][m];
        }
        const resultDate = new Date(Bsdata.BS_START_DATE_AD.getTime());
        resultDate.setUTCDate(resultDate.getUTCDate() + daysOffset);
        return resultDate;
    } else {
        const ahar_at_ujjain_midnight = findAharForBsDate(bsYear, monthIndex, day);
        const julian_date = KaliEpoch + ahar_at_ujjain_midnight;
        return fromJulianDay(julian_date);
    }
}


// Other Calendar Info Functions
export function getBikramMonthInfo(bsYear: number, monthIndex: number) {
    const yearIndex = bsYear - Bsdata.BS_START_YEAR;
    if (bsYear >= Bsdata.BS_START_YEAR && yearIndex < Bsdata.NP_MONTHS_DATA.length) {
        const firstDayAd = fromBikramSambat(bsYear, monthIndex, 1);
        const monthData = Bsdata.NP_MONTHS_DATA[yearIndex];
        return {
            totalDays: monthData[monthIndex],
            startDayOfWeek: firstDayAd.getUTCDay(),
            monthName: solarMonths[monthIndex],
            year: bsYear,
            isComputed: false
        };
    }

    const firstDayAd = fromBikramSambat(bsYear, monthIndex, 1);
    const nextMonthIndex = (monthIndex + 1) % 12;
    const nextYear = (monthIndex === 11) ? bsYear + 1 : bsYear;
    const firstDayOfNextMonthAd = fromBikramSambat(nextYear, nextMonthIndex, 1);
    const totalDays = Math.round((firstDayOfNextMonthAd.getTime() - firstDayAd.getTime()) / 86400000);

    return {
        totalDays,
        startDayOfWeek: firstDayAd.getUTCDay(),
        monthName: solarMonths[monthIndex],
        year: bsYear,
        isComputed: true
    };
}

const getCurrentBsYear = (): number => {
    return toBikramSambat(new Date()).year;
};

export function getMonthWarning(
    calendarType: 'bs' | 'ad',
    year: number,
    monthIndex: number
): { showWarning: boolean; message: string } {
    let displayedBsYear: number;

    if (calendarType === 'bs') {
        displayedBsYear = year;
    } else {
        const firstDayAd = new Date(Date.UTC(year, monthIndex, 1));
        const bs = toBikramSambat(firstDayAd);
        displayedBsYear = bs.year;
    }

    const isPrecomputed = isBsYearPrecomputed(displayedBsYear);
    const currentBsYear = getCurrentBsYear();
    const isFutureYear = displayedBsYear > currentBsYear;

    if (!isPrecomputed) {
        return {
            showWarning: true,
            message:
                calendarType === 'bs'
                    ? 'यो महिनाको डाटा खगोलीय गणना बाट प्राप्त गरिएको हो, सटीकता कम हुन सक्छ।'
                    : 'This month includes dates calculated using fallback algorithms and may be less accurate.',
        };
    }

    if (isFutureYear) {
        return {
            showWarning: true,
            message:
                calendarType === 'bs'
                    ? 'भविष्यका बर्षमा महिनाको डाटा आधिकारिक  नभएकोले, वास्तविक दिन फरक हुन सक्छ।'
                    : 'Future year month data is not officially recognized; actual dates may vary.',
        };
    }

    return { showWarning: false, message: '' };
}

export function isBsYearPrecomputed(bsYear: number | null): boolean {
    if (bsYear === null) return false;
    const yearIndex = bsYear - Bsdata.BS_START_YEAR;
    return bsYear >= Bsdata.BS_START_YEAR && yearIndex < Bsdata.NP_MONTHS_DATA.length;
}

export function isAdMonthPrecomputed(adYear: number | null, adMonth: number): boolean {
    if (adYear === null) return false;
    try {
        const bs = toBikramSambat(new Date(Date.UTC(adYear, adMonth, 1)));
        return !bs.isComputed;
    } catch {
        return false;
    }
}


export function getDaysInADMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
}


export const formatDegrees = (decimal: number): string => {
    const deg = Math.floor(decimal);
    const minFloat = (decimal - deg) * 60;
    const min = Math.floor(minFloat);
    const secFloat = (minFloat - min) * 60;
    const sec = Math.round(secFloat);

    let adjMin = min;
    let adjDeg = deg;
    let adjSec = sec;
    if (adjSec === 60) {
        adjSec = 0;
        adjMin += 1;
    }
    if (adjMin === 60) {
        adjMin = 0;
        adjDeg += 1;
    }

    const formattedDeg = toDevanagari(adjDeg).padStart(2, NEPALI_NUMERALS[0]);
    const formattedMin = toDevanagari(adjMin).padStart(2, NEPALI_NUMERALS[0]);
    const formattedSec = toDevanagari(adjSec).padStart(2, NEPALI_NUMERALS[0]);

    return `${formattedDeg}° ${formattedMin}' ${formattedSec}"`;
};


export function getNepaliPeriod(hh: number): string {
    if (hh < 0 || hh >= 24) {
        return "not available";
    } else if (hh >= 4 && hh < 6) {
    return "ब्रह्ममुहूर्त";
  } else if (hh >= 6 && hh < 8) {
    return "प्रातः";
    } else if (hh >= 8 && hh < 12) {
    return "पूर्वाह्न";
    } else if (hh >= 12 && hh < 16) {
        return "अपरान्ह";
    } else if (hh >= 16 && hh < 20) {
        return "साँझ";
    } else if (hh >= 20 && hh < 24) {
        return "रात्री(पूर्वार्द्ध)";
    } else {
        return "रात्री(उत्तरार्ध)";
    }
}

export const to12Hour = (hh: number, mm: number): string => {
    const period = getNepaliPeriod(hh);
    const hour12 = hh % 12 === 0 ? 12 : hh % 12;
    return `${toDevanagari(hour12)}:${toDevanagari(mm.toString().padStart(2, "0"))} ${period}`;
};

type SunriseSunset = {
    sunrise: string; // 24-hour HH:mm:ss
    sunset: string;  // 24-hour HH:mm:ss
    sunriseFormatted: string; // 12-hour Nepali
    sunsetFormatted: string;  // 12-hour Nepali
};

// SUNRISE/SUNSET
export function getSunriseSunset(
    date: Date,
    lat: number = 27.7172,
    lon: number = 85.3240,
    _tz: number = 5.75
): SunriseSunset {

    const jd0 = toJulianDay(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    const n = jd0 - 2451545.0 + 0.0008;
    const jStar = n - lon / 360.0;
    const M = zero360(357.5291 + 0.98560028 * jStar);
    const C = 1.9148 * sinDeg(M) + 0.0200 * sinDeg(2 * M) + 0.0003 * sinDeg(3 * M);
    const lambda = zero360(M + 102.9372 + C + 180.0);
    const Jtransit = 2451545.0 + jStar + 0.0053 * sinDeg(M) - 0.0069 * sinDeg(2 * lambda);
    const delta = arcsinDeg(sinDeg(lambda) * sinDeg(23.44));
    const cosH = (sinDeg(-0.833) - sinDeg(lat) * sinDeg(delta)) / (cosDeg(lat) * cosDeg(delta));

    if (!isFinite(cosH) || cosH < -1 || cosH > 1) {
        return { sunrise: "N/A", sunset: "N/A", sunriseFormatted: "N/A", sunsetFormatted: "N/A" };
    }

    const H = Math.acos(cosH) * (180 / Math.PI);
    const Jrise = Jtransit - H / 360.0;
    const Jset = Jtransit + H / 360.0;

    const riseUtc = fromJulianDay(Jrise);
    const setUtc = fromJulianDay(Jset);

    // A robust way to get local time parts, immune to bugs
    const getLocalTime = (utcDate: Date) => {
        const timeZone = "Asia/Kathmandu";

        const parts = new Intl.DateTimeFormat('en-US', {
            timeZone,
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        }).formatToParts(utcDate);

        const get = (type: string) => parts.find(p => p.type === type)?.value || "00";

        let hour = parseInt(get('hour'), 10);
        if (hour === 24) hour = 0; // Handle midnight

        return {
            hh: hour,
            mm: parseInt(get('minute'), 10),
            ss: parseInt(get('second'), 10),
        };
    };

    const riseLocal = getLocalTime(riseUtc);
    const setLocal = getLocalTime(setUtc);

    // 24-hour HH:mm:ss string for calculations (used by panchangaCore.ts)
    const sunriseHHMMSS = `${riseLocal.hh.toString().padStart(2, "0")}:${riseLocal.mm.toString().padStart(2, "0")}:${riseLocal.ss.toString().padStart(2, "0")}`;
    const sunsetHHMMSS = `${setLocal.hh.toString().padStart(2, "0")}:${setLocal.mm.toString().padStart(2, "0")}:${setLocal.ss.toString().padStart(2, "0")}`;

    return {
        sunrise: sunriseHHMMSS,
        sunset: sunsetHHMMSS,
        sunriseFormatted: to12Hour(riseLocal.hh, riseLocal.mm), // 12-hour Nepali for display
        sunsetFormatted: to12Hour(setLocal.hh, setLocal.mm),   // 12-hour Nepali for display
    };
}