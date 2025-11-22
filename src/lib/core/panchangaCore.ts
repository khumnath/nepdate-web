import { lunar_MonthNames } from '../../constants/constants';
import { EventsData } from '../../data/static/eventsData';
import {
    weekdays,
    getSunriseSunset,
    toDevanagari,
    toJulianDay,
    findPurnima,
    trueLongitudeSun,
    trueLongitudeMoon,
    getTithi,
    calculateAdhikaMasa,
    KaliEpoch,
    toBikramSambat,
    NAKSHATRA_NAMES,
    YOGA_NAMES,
    KARANA_NAMES,
    RASHI_NAMES,
    resolveTithiName,
    TITHI_NAMES,
    YugaRotation,
    PlanetApogee,
    PlanetCircumm,
    mandaEquation,
    YugaCivilDays,
    UJJAIN_LONGITUDE,
} from '../utils/lib';


export function getAharFor(date: Date, lon: number, timeFraction: number): number {
    const jd = toJulianDay(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    const aharAtUjjainMidnight = jd - KaliEpoch;
    const deshantara = (lon - UJJAIN_LONGITUDE) / 360.0;
    // Ahar at Ujjain Midnight + local time fraction - longitude correction
    const aharAtTime = aharAtUjjainMidnight + timeFraction - deshantara;

    return aharAtTime;
}


export function getPanchangaDetailsAtAhar(ahar: number): { [key: string]: any } {
    const sunLong = trueLongitudeSun(ahar);
    const moonLong = trueLongitudeMoon(ahar);
    const tithiVal = getTithi(sunLong, moonLong);
    const tithiNum = Math.floor(tithiVal) + 1;
    const paksha = tithiNum <= 15 ? "शुक्ल पक्ष" : "कृष्ण पक्ष";
    const tithiDay = tithiNum > 15 ? tithiNum - 15 : tithiNum;
    const tithiName = resolveTithiName(tithiDay, paksha);
    let purnimaEnd = findPurnima(ahar);
    if (purnimaEnd < ahar) {
        purnimaEnd = findPurnima(ahar + 29.53);
    }
    const sunAtPurnima = trueLongitudeSun(purnimaEnd);
    const nameSign = Math.floor(sunAtPurnima / 30);
    const purnimantaMonthName = lunar_MonthNames[nameSign % 12];

    const adhikaStatus = calculateAdhikaMasa(ahar);
    const isAdhika = adhikaStatus.startsWith("अधिक");

    // Calculate Karana name at sunrise
    const karanaIdxAtSunrise = Math.floor(tithiVal * 2) % 60;
    let karanaName: string;
    if (karanaIdxAtSunrise === 0) {
        karanaName = KARANA_NAMES[0]; // Kimstughna
    } else if (karanaIdxAtSunrise < 57) {
        karanaName = KARANA_NAMES[(karanaIdxAtSunrise - 1) % 7 + 1]; // Chara
    } else {
        karanaName = KARANA_NAMES[karanaIdxAtSunrise - 57 + 8]; // Sthira
    }

    return {
        ahar,
        sunLong,
        moonLong,
        tithiVal,
        lunarMonthName: purnimantaMonthName,
        isAdhika,
        adhikaStatus,
        paksha,
        tithiName,
        tithiDay,
        nakshatraName: NAKSHATRA_NAMES[Math.floor(moonLong / (360 / 27))],
        yogaName: YOGA_NAMES[Math.floor((sunLong + moonLong) % 360 / (360 / 27))],
        karanaName: karanaName,
        sunRashi: RASHI_NAMES[Math.floor(sunLong / 30)],
        moonRashi: RASHI_NAMES[Math.floor(moonLong / 30)],
    };
}

export function getEventsForDate(
    date: Date,
    bsYear: number,
    bsMonthIndex: number,
    bsDay: number
): Array<{ name: string; detail: string; holiday: boolean; }> {
    const events: any[] = [];
    const gregorianYear = date.getUTCFullYear();
    const gregorianMonth = date.getUTCMonth() + 1;
    const gregorianDay = date.getUTCDate();
    const formattedGregorianDate = (gregorianMonth < 10 ? '0' : '') + gregorianMonth + '/' + (gregorianDay < 10 ? '0' : '') + gregorianDay;
    const formattedBikramRecurringDate = (bsMonthIndex + 1 < 10 ? '0' : '') + (bsMonthIndex + 1) + '/' + (bsDay < 10 ? '0' : '') + bsDay;
    const formattedBikramFixedDate = `${bsYear}/${formattedBikramRecurringDate}`;

    const defaultLon = 85.3240;
    const defaultLat = 27.7172;
    const defaultTz = 5.75;

    const sunEvents = getSunriseSunset(date, defaultLat, defaultLon, defaultTz);
    if (sunEvents.sunrise === "N/A") {
        return events;
    }
    const [hr, min, sec] = sunEvents.sunrise.split(':').map(Number);
    const sunriseFraction = (hr * 3600 + min * 60 + sec) / 86400.0;
    const sunriseAhar = getAharFor(date, defaultLon, sunriseFraction);
    const lunarInfo = getPanchangaDetailsAtAhar(sunriseAhar);

    // Gregorian Events
    (EventsData.gregorianEvents as any[])?.forEach(event => {
        if ((event.startYear && gregorianYear < event.startYear) || (event.endYear && gregorianYear > event.endYear)) return;
        if (event.date === formattedGregorianDate) {
            events.push({ name: event.event, detail: event.detail, holiday: event.holiday || false });
        }
    });

    // Bikram Recurring Events (MM/dd)
    (EventsData.bikramRecurringEvents as any[])?.forEach(event => {
        if ((event.startYear && bsYear < event.startYear) || (event.endYear && bsYear > event.endYear)) return;
        if (event.date === formattedBikramRecurringDate) {
            events.push({ name: event.event, detail: event.detail, holiday: event.holiday || false });
        }
    });

    // Bikram Fixed Events (YYYY/MM/dd)
    (EventsData.bikramFixedEvents as any[])?.forEach(event => {
        if (event.date === formattedBikramFixedDate) {
            events.push({ name: event.event, detail: event.detail, holiday: event.holiday || false });
        }
    });

    // Lunar Events
    if (EventsData.lunarEvents) {
        if (lunarInfo.isAdhika) {
            return events; // No lunar events in Adhika masa
        }

        (EventsData.lunarEvents as any[])?.forEach(lunarEvent => {
            if ((lunarEvent.startYear && bsYear < lunarEvent.startYear) || (lunarEvent.endYear && bsYear > lunarEvent.endYear)) return;

            const sameMonth = lunarEvent.lunarMonth === lunarInfo.lunarMonthName;
            const samePaksha = lunarEvent.paksha === lunarInfo.paksha;
            const sameTithi = lunarEvent.tithi === lunarInfo.tithiName;

            if (sameMonth && samePaksha && sameTithi) {
                events.push({ name: lunarEvent.event, detail: lunarEvent.detail, holiday: lunarEvent.holiday || false });
            }
        });
    }

    return events;
}


export const absMeanLongitude = (ahar: number, rotation: number): number => {
    return (rotation * ahar * 360 / YugaCivilDays);
};

export const absTrueLongitudeSun = (ahar: number): number => {
    const meanLong = absMeanLongitude(ahar, YugaRotation.sun);
    const manda = mandaEquation(meanLong, PlanetApogee.sun, PlanetCircumm.sun);
    return meanLong - manda; // No zero360
};

export const absTrueLongitudeMoon = (ahar: number): number => {
    const meanLong = absMeanLongitude(ahar, YugaRotation.moon);
    const apogee = absMeanLongitude(ahar, YugaRotation.Candrocca) + 90;
    const manda = mandaEquation(meanLong, apogee, PlanetCircumm.moon);
    return meanLong - manda; // No zero360
};

export const absElongation = (ahar: number): number => {
    return absTrueLongitudeMoon(ahar) - absTrueLongitudeSun(ahar);
};


export function findTransit(
    searchStartAhar: number,
    getValueFunc: (ah: number) => number,
    targetValue: number,
    maxDays: number = 2
): number | null {

    let low = searchStartAhar;
    let high = searchStartAhar + maxDays;
    let startVal = getValueFunc(low);
    let endVal = getValueFunc(high);

    if (startVal <= targetValue && targetValue <= endVal) {
    }
    else if (targetValue < startVal) {
        low = searchStartAhar - maxDays;
        high = searchStartAhar;
        startVal = getValueFunc(low);
        endVal = getValueFunc(high);

        if (!(startVal <= targetValue && targetValue <= endVal)) {
            return null;
        }
    } else {
        return null;
    }

    // Bisection search
    for (let i = 0; i < 20; i++) {
        let mid = (low + high) / 2;
        if (getValueFunc(mid) < targetValue) {
            low = mid;
        } else {
            high = mid;
        }
    }
    return high;
}


function findElementsForDay(
    startAhar: number,
    endAhar: number,
    getValueFunc: (ah: number) => number,
    divisor: number,
    nameArray: string[],
    getSpecialName?: (index: number) => string
): Array<{ name: string, startTime: number | null, endTime: number | null }> {

    const elements = [];

    //  Find the element active *at* the start time (sunrise)
    let valAtStart = getValueFunc(startAhar);
    let currentIndex = Math.floor(valAtStart / divisor);
    let targetStartValue = currentIndex * divisor;
    let targetEndValue = (currentIndex + 1) * divisor;

    // Find the start time of this first element (it was probably yesterday)
    let startTimeAhar = findTransit(startAhar, getValueFunc, targetStartValue, 2);

    // Find the end time
    let endTimeAhar = findTransit(startTimeAhar ?? startAhar, getValueFunc, targetEndValue, 2);

    let name: string;
    if (getSpecialName) {
        name = getSpecialName(currentIndex);
    } else {
        name = nameArray[currentIndex % nameArray.length];
    }

    elements.push({ name, startTime: startTimeAhar, endTime: endTimeAhar });

    // Check if this element ends *before* our end boundary.
    while (endTimeAhar && endTimeAhar < endAhar) {
        let currentStartTimeAhar = endTimeAhar;
        currentIndex++;
        targetEndValue = (currentIndex + 1) * divisor;

        // Find the end time of this *new* element
        endTimeAhar = findTransit(currentStartTimeAhar, getValueFunc, targetEndValue, 2);

        if (getSpecialName) {
            name = getSpecialName(currentIndex);
        } else {
            name = nameArray[currentIndex % nameArray.length];
        }

        if (endTimeAhar && endTimeAhar > currentStartTimeAhar) {
            elements.push({ name, startTime: currentStartTimeAhar, endTime: endTimeAhar });
        } else {
            if (elements.at(-1)?.name !== name) {
                elements.push({ name, startTime: currentStartTimeAhar, endTime: endTimeAhar });
            }
            break;
        }
    }

    return elements;
}



export function aharToDate(ahar: number, sunriseAhar: number, sunriseDate: Date): Date {
    const dayFraction = ahar - sunriseAhar;
    const timestamp = sunriseDate.getTime() + dayFraction * 24 * 60 * 60 * 1000;
    return new Date(timestamp);
}


function getTzString(tz: number): string {
    const sign = tz >= 0 ? '+' : '-';
    const hours = String(Math.floor(Math.abs(tz))).padStart(2, '0');
    const minutes = String(Math.abs(tz) * 60 % 60).padStart(2, '0');
    return `${sign}${hours}:${minutes}`;
}

// MAIN CALCULATE FUNCTION

export function calculate(date: Date, lat?: number, lon?: number, tz?: number) {
    const bsInfo = toBikramSambat(date);
    if (!bsInfo) {
        return { error: "Date out of range or invalid." };
    }

    const latitude = lat ?? 27.7172;
    const longitude = lon ?? 85.3240;
    const timezone = tz ?? 5.75;

    const tzString = getTzString(timezone);
    const todaySunriseSunset = getSunriseSunset(date, latitude, longitude, timezone);
    if (!todaySunriseSunset || todaySunriseSunset.sunrise === "N/A") {
        return { error: "Could not calculate sunrise/sunset. Location or date might be invalid." };
    }
    const localDateStr = new Date(date.getTime() + timezone * 60 * 60 * 1000).toISOString().split('T')[0];
    const sunriseDate = new Date(`${localDateStr}T${todaySunriseSunset.sunrise}${tzString}`);
    if (isNaN(sunriseDate.getTime())) {
        return { error: "Failed to construct local sunrise time." };
    }



    // Define Day Boundaries in Ahar
    const [hr, min, sec] = todaySunriseSunset.sunrise.split(':').map(Number);
    const sunriseFraction = (hr * 3600 + min * 60 + sec) / 86400.0; // Fraction of a 24-hour day

    const sunriseAhar = getAharFor(date, longitude, sunriseFraction);
    const tomorrowDate = new Date(date.getTime() + 86400000);
    // Compute next day's sunrise (needed for display rules and to set the day's end boundary)
    const tomorrowSunriseSunset = getSunriseSunset(tomorrowDate, latitude, longitude, timezone);
    let nextSunriseDate: Date | null = null;
    let nextSunriseAhar: number | null = null;
    if (tomorrowSunriseSunset && tomorrowSunriseSunset.sunrise !== "N/A") {
        nextSunriseDate = new Date(`${new Date(tomorrowDate.getTime() + timezone * 60 * 60 * 1000).toISOString().split('T')[0]}T${tomorrowSunriseSunset.sunrise}${tzString}`);
        if (isNaN(nextSunriseDate.getTime())) {
            nextSunriseDate = null;
        } else {
            // compute ahar for next sunrise
            const [thr, tmin, tsec] = tomorrowSunriseSunset.sunrise.split(':').map(Number);
            const nextSunriseFraction = (thr * 3600 + tmin * 60 + tsec) / 86400.0;
            nextSunriseAhar = getAharFor(tomorrowDate, longitude, nextSunriseFraction);
        }
    }
    const midnightEndAhar = getAharFor(tomorrowDate, longitude, 0.0);
    // Use nextSunriseAhar as day's end boundary when available, otherwise fallback to midnight
    const dayEndAhar = nextSunriseAhar ?? midnightEndAhar;

    if (isNaN(sunriseAhar) || isNaN(midnightEndAhar)) {
        return { error: "Failed to calculate ahar boundaries. Input date may be invalid." };
    }

    const lunarInfo = getPanchangaDetailsAtAhar(sunriseAhar);
    const tithiElements = findElementsForDay(sunriseAhar, dayEndAhar, absElongation, 12, TITHI_NAMES, (index) => {
        const tithiNum = (index % 30) + 1;
        const paksha = tithiNum <= 15 ? "शुक्ल पक्ष" : "कृष्ण पक्ष";
        const tithiDay = tithiNum > 15 ? tithiNum - 15 : tithiNum;
        return resolveTithiName(tithiDay, paksha);
    });

    const nakshatraElements = findElementsForDay(sunriseAhar, dayEndAhar, absTrueLongitudeMoon, (360 / 27), NAKSHATRA_NAMES);

    const yogaElements = findElementsForDay(sunriseAhar, dayEndAhar, (ah) => absTrueLongitudeSun(ah) + absTrueLongitudeMoon(ah), (360 / 27), YOGA_NAMES);

    const karanaElements = findElementsForDay(sunriseAhar, dayEndAhar, absElongation, 6, KARANA_NAMES, (index) => {
        const karanaIdx = index % 60;
        if (karanaIdx === 0) return KARANA_NAMES[0];
        if (karanaIdx < 57) return KARANA_NAMES[(karanaIdx - 1) % 7 + 1];
        return KARANA_NAMES[karanaIdx - 57 + 8];
    });

    const events = getEventsForDate(date, bsInfo.year, bsInfo.monthIndex, bsInfo.day);

    const lunarMonthDisplayName = lunarInfo.isAdhika
        ? "अधिक " + lunarInfo.lunarMonthName
        : lunarInfo.lunarMonthName;

    const gregorianOptions: Intl.DateTimeFormatOptions = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
    };
    const gregorianDateFormatted = date.toLocaleDateString('en-US', gregorianOptions);

    const formatTime = (aharVal: number | null) => aharVal ? aharToDate(aharVal, sunriseAhar, sunriseDate).toISOString() : null;

    return {
        gregorianDate: gregorianDateFormatted,
        bikramSambat: `${toDevanagari(bsInfo.year)} ${bsInfo.monthName} ${toDevanagari(bsInfo.day)}`,
        bsYear: bsInfo.year,
        bsMonthIndex: bsInfo.monthIndex,
        bsDay: bsInfo.day,
        weekday: weekdays[date.getUTCDay()],
        sunrise: todaySunriseSunset.sunriseFormatted,
        sunset: todaySunriseSunset.sunsetFormatted,
        lunarMonth: lunarMonthDisplayName,
        paksha: lunarInfo.paksha,
        sunRashi: lunarInfo.sunRashi,
        moonRashi: lunarInfo.moonRashi,
        adhikaMasa: lunarInfo.adhikaStatus,
        isComputed: bsInfo.isComputed || false,
        // Sunrise-specific elements
        tithi: lunarInfo.tithiName,
        nakshatra: lunarInfo.nakshatraName,
        yoga: lunarInfo.yogaName,
        karana: lunarInfo.karanaName,

        // Multi-value array properties (for the whole day)
        tithis: tithiElements.map(t => ({
            name: t.name,
            startTime: formatTime(t.startTime),
            endTime: formatTime(t.endTime)
        })),

        nakshatras: nakshatraElements.map(n => ({
            name: n.name,
            startTime: formatTime(n.startTime),
            endTime: formatTime(n.endTime)
        })),

        yogas: yogaElements.map(y => ({
            name: y.name,
            startTime: formatTime(y.startTime),
            endTime: formatTime(y.endTime)
        })),

        karanas: karanaElements.map(k => ({
            name: k.name,
            startTime: formatTime(k.startTime),
            endTime: formatTime(k.endTime)
        })),
        // Expose today's sunrise ISO and next sunrise ISO to help display logic in UI
        sunriseIso: sunriseDate.toISOString(),
        nextSunriseIso: nextSunriseDate ? nextSunriseDate.toISOString() : null,

        events,
    };
}