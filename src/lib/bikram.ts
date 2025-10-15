// lib/bikram.ts
import { Bsdata } from '../data/monthData';

export { Bsdata };

// Surya Siddhanta Constants
export const YugaRotation = {
    'star': 1582237828, 'sun': 4320000, 'moon': 57753336,
    'mercury': 17937060, 'venus': 7022376, 'mars': 2296832,
    'jupiter': 364220, 'saturn': 146568, 'Candrocca': 488203,
    'Rahu': -232238
};
export const YugaCivilDays = 1577917828;
export const KaliEpoch = 588465.5;
export const PlanetApogee = { 'sun': 77 + 17 / 60 };
export const PlanetCircumm = { 'sun': 13 + 50 / 60, 'moon': 31 + 50 / 60 };
export const rad = 180 / Math.PI;

export const solarMonths = [
    "वैशाख", "ज्येष्ठ", "आषाढ", "श्रावण", "भाद्रपद", "आश्विन",
    "कार्तिक", "मार्गशीर्ष", "पौष", "माघ", "फाल्गुन", "चैत्र"
];

export const weekdays = ["आइतबार", "सोमबार", "मङ्गलबार", "बुधबार", "बिहीबार", "शुक्रबार", "शनिबार"];

// Numerals
export function toDevanagari(n: number | string): string {
    try {
        return n.toString().replace(/[0-9]/g, d => '०१२३४५६७८९'[parseInt(d)]);
    } catch {
        return n.toString();
    }
}

export function fromDevanagari(input: string): string {
    try {
        return input.replace(/[०१२३४५६७८९]/g, d => {
            const devanagariDigits = '०१२३४५६७८९';
            return devanagariDigits.indexOf(d).toString();
        });
    } catch {
        return input;
    }
}


// Helper trig
export function zero360(x: number): number { return x - Math.floor(x / 360) * 360; }
export function sinDeg(deg: number): number { return Math.sin(deg / rad); }
export function cosDeg(deg: number): number { return Math.cos(deg / rad); }
export function arcsinDeg(x: number): number { return Math.asin(x) * rad; }

export function formatMonthDay(month: number, day: number): string {
    return (month < 10 ? '0' : '') + month + '/' + (day < 10 ? '0' : '') + day;
}

export function toJulianDay(year: number, month: number, day: number): number {
    let m = month + 1;
    let y = year;
    if (m <= 2) { y--; m += 12; }
    const a = Math.floor(y / 100);
    const b = 2 - a + Math.floor(a / 4);
    return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524.5;
}

export function fromJulianDay(jd: number): Date {
    jd += 0.5;
    const z = Math.floor(jd);
    const f = jd - z;
    let a: number;
    if (z < 2299161) {
        a = z;
    } else {
        const alpha = Math.floor((z - 1867216.25) / 36524.25);
        a = z + 1 + alpha - Math.floor(alpha / 4);
    }
    const b = a + 1524;
    const c = Math.floor((b - 122.1) / 365.25);
    const d = Math.floor(365.25 * c);
    const e = Math.floor((b - d) / 30.6001);
    const day = Math.floor(b - d - Math.floor(30.6001 * e) + f);
    const month = (e < 14) ? e - 1 : e - 13;
    const year = (month > 2) ? c - 4716 : c - 4715;
    return new Date(Date.UTC(year, month - 1, day));
}

// Core astronomical functions
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

export function getTithi(sunLong: number, moonLong: number): number {
    return zero360(moonLong - sunLong) / 12;
}

export function findNewMoon(ahar: number): number {
    const getElongation = (a: number) => zero360(trueLongitudeMoon(a) - trueLongitudeSun(a));
    let guess = ahar;
    for (let i = 0; i < 10; i++) {
        const elong = getElongation(guess);
        if (elong < 5 || elong > 355) break;
        const correction = (elong < 180 ? -elong : 360 - elong) / 12.19;
        guess += correction;
    }
    let lo = guess - 2, hi = guess + 2;
    for (let j = 0; j < 30; j++) {
        const mid = (lo + hi) / 2;
        const em = getElongation(mid);
        if (em < 180) { hi = mid; } else { lo = mid; }
    }
    return (lo + hi) / 2;
}

export function findPurnima(ahar: number): number {
    const getElongation = (a: number) => zero360(trueLongitudeMoon(a) - trueLongitudeSun(a));
    let guess = ahar;
    for (let i = 0; i < 10; i++) {
        const elong = getElongation(guess);
        if (Math.abs(elong - 180) < 5) break;
        const correction = (180 - elong) / 12.19;
        guess += correction;
    }
    let lo = guess - 2, hi = guess + 2;
    for (let j = 0; j < 30; j++) {
        const mid = (lo + hi) / 2;
        const em = getElongation(mid);
        if (em < 180) { lo = mid; } else { hi = mid; }
    }
    return (lo + hi) / 2;
}

export function calculateAdhikaMasa(ahar: number): string {
    let lunarMonthStart = findNewMoon(ahar);
    if (lunarMonthStart > ahar) {
        lunarMonthStart = findNewMoon(lunarMonthStart - 29.530588853);
    }
    const lunarMonthEnd = findNewMoon(lunarMonthStart + 29.530588853);
    const sunLongStart = trueLongitudeSun(lunarMonthStart);
    const sunLongEnd = trueLongitudeSun(lunarMonthEnd);
    let startSign = Math.floor(sunLongStart / 30);
    let endSign = Math.floor(sunLongEnd / 30);

    if (endSign < startSign) endSign += 12;

    if (endSign === startSign) {
        return "अधिक " + solarMonths[startSign % 12];
    }
    if (endSign > startSign + 1) {
        const skippedSign = (startSign + 1) % 12;
        return "क्षय " + solarMonths[skippedSign];
    }
    return "छैन";
}

function getTslong(ahar: number): number {
    const t1 = (YugaRotation.sun * ahar / YugaCivilDays);
    const t = t1 - Math.floor(t1);
    const mslong = 360 * t;
    const x1 = mslong - PlanetApogee.sun;
    const y1 = PlanetCircumm.sun / 360;
    const y2 = sinDeg(x1);
    const y3 = y1 * y2;
    const x2 = arcsinDeg(y3);
    return mslong - x2;
}

function todaySauraMasaFirstP(ahar: number): boolean {
    const tslong_today = getTslong(ahar);
    const tslong_tomorrow = getTslong(ahar + 1);
    const t1 = tslong_today - Math.floor(tslong_today / 30) * 30;
    const t2 = tslong_tomorrow - Math.floor(tslong_tomorrow / 30) * 30;
    return (25 < t1 && t2 < 5);
}

function getSauraMasaDay(ahar: number): { m: number; d: number } {
    let nearestAhar = ahar;
    let daysBefore = 0;
    while (daysBefore < 40) { // Safety break to prevent infinite loops
        if (todaySauraMasaFirstP(nearestAhar)) {
            const day = Math.round(ahar - nearestAhar) + 1;
            const tslongTomorrow = getTslong(nearestAhar + 1);
            let month = Math.floor(tslongTomorrow / 30) % 12;
            month = (month + 12) % 12;
            return { m: month, d: day };
        }
        daysBefore++;
        nearestAhar--;
    }
    // Fallback in case the start of the month isn't found within 40 days
    return { m: 0, d: 1 };
}

function fromGregorianAstronomical(gYear: number, gMonth: number, gDay: number) {
    const julian = toJulianDay(gYear, gMonth - 1, gDay);
    const ahar = julian - KaliEpoch;
    const sauraMasaResult = getSauraMasaDay(ahar);
    const saura_masa_num = sauraMasaResult.m;
    const saura_masa_day = sauraMasaResult.d;
    const YearKali = Math.floor(ahar * YugaRotation.sun / YugaCivilDays);
    const YearSaka = YearKali - 3179;
    const nepalimonth = saura_masa_num % 12;
    const year = YearSaka + 135 + Math.floor((saura_masa_num - nepalimonth) / 12);
    const month = (saura_masa_num + 12) % 12 + 1;
    return {
        year,
        monthIndex: month - 1,
        day: saura_masa_day,
        monthName: solarMonths[month - 1]
    };
}

// Public: from Bikram Sambat -> Gregorian
export function fromBikramSambat(bsYear: number, monthIndex: number, day: number): Date {
    const yearIndex = bsYear - Bsdata.BS_START_YEAR;
    if (bsYear >= Bsdata.BS_START_YEAR && yearIndex < Bsdata.NP_MONTHS_DATA.length) {
        let daysOffset = 0;
        for (let y = Bsdata.BS_START_YEAR; y < bsYear; y++) {
            const yearData = Bsdata.NP_MONTHS_DATA[y - Bsdata.BS_START_YEAR];
            daysOffset += yearData.reduce((sum, current) => sum + current, 0);
        }
        const targetYearData = Bsdata.NP_MONTHS_DATA[yearIndex];
        for (let m = 0; m < monthIndex; m++) {
            daysOffset += targetYearData[m];
        }
        daysOffset += (day - 1);
        const resultDate = new Date(Bsdata.BS_START_DATE_AD.getTime());
        resultDate.setUTCDate(resultDate.getUTCDate() + daysOffset);
        return resultDate;
    }

    // Fallback for dates outside the pre-computed range
    const YearSaka = bsYear - 135;
    const YearKali = YearSaka + 3179;
    let ahar = Math.floor((YearKali * YugaCivilDays) / YugaRotation.sun);
    let currentDay = getSauraMasaDay(ahar);
    let attempts = 0;
    while ((currentDay.m !== monthIndex || currentDay.d !== day) && attempts < 200000) {
        if (currentDay.m < monthIndex || (currentDay.m === monthIndex && currentDay.d < day)) ahar += 1;
        else ahar -= 1;
        currentDay = getSauraMasaDay(ahar);
        attempts++;
    }
    const julian_date = ahar + KaliEpoch;
    return fromJulianDay(julian_date);
}

export function getBikramMonthInfo(bsYear: number, monthIndex: number) {
    // FIXED: More robust check against actual data size.
    const yearIndex = bsYear - Bsdata.BS_START_YEAR;
    if (bsYear >= Bsdata.BS_START_YEAR && yearIndex < Bsdata.NP_MONTHS_DATA.length) {
        const firstDayAd = fromBikramSambat(bsYear, monthIndex, 1);
        const monthData = Bsdata.NP_MONTHS_DATA[yearIndex];
        return {
            totalDays: monthData[monthIndex],
            startDayOfWeek: firstDayAd.getUTCDay(),
            monthName: solarMonths[monthIndex],
            year: bsYear
        };
    }
    // Fallback for dates outside the pre-computed range
    const first = fromBikramSambat(bsYear, monthIndex, 1);
    const nextMon = monthIndex === 11 ? 0 : monthIndex + 1;
    const nextYear = monthIndex === 11 ? bsYear + 1 : bsYear;
    const nextFirst = fromBikramSambat(nextYear, nextMon, 1);
    const jd1 = toJulianDay(first.getUTCFullYear(), first.getUTCMonth(), first.getUTCDate());
    const jd2 = toJulianDay(nextFirst.getUTCFullYear(), nextFirst.getUTCMonth(), nextFirst.getUTCDate());
    return {
        totalDays: Math.round(jd2 - jd1),
        startDayOfWeek: first.getUTCDay(),
        monthName: solarMonths[monthIndex],
        year: bsYear
    };
}

// Public: Gregorian -> Bikram Sambat
export interface BikramDate {
    year: number;
    monthIndex: number;
    day: number;
    monthName: string;
    isComputed?: boolean;
}

export function toBikramSambat(gregorianDate: Date): BikramDate {
    const targetUtcDate = new Date(Date.UTC(gregorianDate.getFullYear(), gregorianDate.getMonth(), gregorianDate.getDate()));
    const startDate = new Date(Date.UTC(Bsdata.BS_START_DATE_AD.getFullYear(), Bsdata.BS_START_DATE_AD.getMonth(), Bsdata.BS_START_DATE_AD.getDate()));

    // First, try to use the fast, pre-computed data table.
    if (targetUtcDate >= startDate) {
        const daysOffset = Math.floor((targetUtcDate.getTime() - startDate.getTime()) / 86400000);
        let remainingDays = daysOffset;

        for (let y = 0; y < Bsdata.NP_MONTHS_DATA.length; y++) {
            const currentBsYear = Bsdata.BS_START_YEAR + y;
            const yearData = Bsdata.NP_MONTHS_DATA[y];
            const daysInYear = yearData.reduce((sum, current) => sum + current, 0);

            if (remainingDays < daysInYear) {
                // The correct year has been found. Now find the month and day.
                for (let m = 0; m < 12; m++) {
                    const daysInMonth = yearData[m];
                    if (remainingDays < daysInMonth) {
                        return {
                            year: currentBsYear,
                            monthIndex: m,
                            day: remainingDays + 1,
                            monthName: solarMonths[m],
                            isComputed: false
                        };
                    }
                    remainingDays -= daysInMonth;
                }
            }
            remainingDays -= daysInYear;
        }
    }

    // If the date is before the pre-computed data range or after it has been exhausted,
    // fall back to the astronomical calculation.
    const result = fromGregorianAstronomical(
        gregorianDate.getUTCFullYear(),
        gregorianDate.getUTCMonth() + 1,
        gregorianDate.getUTCDate()
    );
    return { ...result, isComputed: true };
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
        return isBsYearPrecomputed(bs.year);
    } catch {
        return false;
    }
}

export function getSunriseSunset(date: Date, lat = 27.7172, lon = 85.3240, tz = 5.75) {
    const dayOfYear = Math.floor((date.getTime() - new Date(date.getUTCFullYear(), 0, 0).getTime()) / 86400000);
    const B = (360 / 365) * (dayOfYear - 81) / rad;
    const eot = 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);
    const lstm = 15 * tz;
    const tc = (4 * (lon - lstm) + eot) / 60;
    const declination = -23.45 * cosDeg(360 / 365 * (dayOfYear + 10));
    const hourAngleRad = Math.acos((sinDeg(-0.833) - sinDeg(lat) * sinDeg(declination)) / (cosDeg(lat) * cosDeg(declination)));
    const hourAngle = hourAngleRad * rad;
    const sunrise = 12 - hourAngle / 15 - tc;
    const sunset = 12 + hourAngle / 15 - tc;
    const formatTime = (h: number) => {
        if (!isFinite(h)) return "N/A";
        let hr = Math.floor(h);
        let min = Math.round((h - hr) * 60);
        if (min === 60) { hr++; min = 0; }
        return (hr < 10 ? '0' : '') + hr + ":" + (min < 10 ? '0' : '') + min;
    };
    return { sunrise: formatTime(sunrise), sunset: formatTime(sunset) };
}

