import { EventsData } from '../data/eventsData';
import {
    solarMonths,
    weekdays,
    getSunriseSunset,
    toDevanagari,
    toJulianDay,
    findPurnima,
    trueLongitudeSun,
    trueLongitudeMoon,
    getTithi,
    zero360,
    calculateAdhikaMasa,
    KaliEpoch,
    toBikramSambat,
    NAKSHATRA_NAMES,
    YOGA_NAMES,
    KARANA_NAMES,
    RASHI_NAMES,
    resolveTithiName
} from '../lib/lib';

// This function uses the purnimanta (full moon) system.
export function getPanchangaBasics(date: Date, lon: number = 85.3240, tz: number = 5.75): { [key: string]: any } {
    const jd = toJulianDay(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    const ahar = jd - KaliEpoch + 0.25 + ((lon / 15 - tz) / 24);

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
    const purnimantaMonthName = solarMonths[nameSign % 12];

    const adhikaStatus = calculateAdhikaMasa(ahar);
    const isAdhika = adhikaStatus.startsWith("अधिक");

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
        tithiDay
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
        const lunarInfo = getPanchangaBasics(date);
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

// Main calculate function
export function calculate(date: Date, lat?: number, lon?: number, tz?: number) {
    const bsInfo = toBikramSambat(date);
    if (!bsInfo) {
        return { error: "Date out of range or invalid." };
    }

    const lunarInfo = getPanchangaBasics(date, lon, tz);
    
    const events = getEventsForDate(date, bsInfo.year, bsInfo.monthIndex, bsInfo.day);
    const sunriseSunset = getSunriseSunset(date, lat, lon, tz);

    const karanaIdx = Math.floor(2 * lunarInfo.tithiVal);
    const karanaName = karanaIdx > 0
        ? (karanaIdx < 57 ? KARANA_NAMES[(karanaIdx - 1) % 7 + 1] : KARANA_NAMES[karanaIdx - 57 + 8])
        : KARANA_NAMES[0];

    const lunarMonthDisplayName = lunarInfo.isAdhika
        ? "अधिक " + lunarInfo.lunarMonthName
        : lunarInfo.lunarMonthName;
    
    const gregorianOptions: Intl.DateTimeFormatOptions = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
    };
    const gregorianDateFormatted = date.toLocaleDateString('en-US', gregorianOptions);

    return {
        gregorianDate: gregorianDateFormatted,
        bikramSambat: `${toDevanagari(bsInfo.year)} ${bsInfo.monthName} ${toDevanagari(bsInfo.day)}`,
        bsYear: bsInfo.year,
        bsMonthIndex: bsInfo.monthIndex,
        bsDay: bsInfo.day,
        weekday: weekdays[date.getUTCDay()],
        sunrise: sunriseSunset.sunrise,
        sunset: sunriseSunset.sunset,
        tithi: lunarInfo.tithiName,
        tithiDay: lunarInfo.tithiDay,
        paksha: lunarInfo.paksha,
        lunarMonth: lunarMonthDisplayName,
        nakshatra: NAKSHATRA_NAMES[Math.floor(lunarInfo.moonLong / (360 / 27))],
        yoga: YOGA_NAMES[Math.floor(zero360(lunarInfo.sunLong + lunarInfo.moonLong) / (360 / 27))],
        karana: karanaName,
        sunRashi: RASHI_NAMES[Math.floor(lunarInfo.sunLong / 30)],
        moonRashi: RASHI_NAMES[Math.floor(lunarInfo.moonLong / 30)],
        events,
        isComputed: bsInfo.isComputed || false,
        adhikaMasa: lunarInfo.adhikaStatus
    };
}

