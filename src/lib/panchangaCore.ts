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
    fromDevanagari
} from './bikram';

// Panchanga Names
const tithiNamesList = [
    "प्रतिपदा", "द्वितीया", "तृतीया", "चतुर्थी", "पञ्चमी", "षष्ठी", "सप्तमी", "अष्टमी", "नवमी", "दशमी",
    "एकादशी", "द्वादशी", "त्रयोदशी", "चतुर्दशी", "पूर्णिमा", "अमावस्या"
];
const nakshatras = [
    "अश्विनी", "भरणी", "कृत्तिका", "रोहिणी", "मृगशिरा", "आर्द्रा", "पुनर्वसु", "पुष्य", "अश्लेषा",
    "मघा", "पूर्व फाल्गुनी", "उत्तर फाल्गुनी", "हस्त", "चित्रा", "स्वाती", "विशाखा", "अनुराधा",
    "ज्येष्ठा", "मूल", "पूर्वाषाढा", "उत्तराषाढा", "श्रवण", "धनिष्ठा", "शतभिषा", "पूर्व भाद्रपद",
    "उत्तर भाद्रपद", "रेवती"
];
const yogas = [
    "विष्कम्भ", "प्रीति", "आयुष्मान्", "सौभाग्य", "शोभन", "अतिगण्ड", "सुकर्म", "धृति", "शूल", "गण्ड",
    "वृद्धि", "ध्रुव", "व्याघात", "हर्षण", "वज्र", "सिद्धि", "व्यतिपात", "वरीयान्", "परिघ", "शिव",
    "सिद्ध", "साध्य", "शुभ", "शुक्ल", "ब्रह्म", "इन्द्र", "वैधृति"
];
const karanas = [
    "किंस्तुघ्न", "बव", "बालव", "कौलव", "तैतिल", "गर", "वणिज", "विष्टि", "शकुनि", "चतुष्पाद", "नाग"
];
const rashis = [
    "मेष", "वृषभ", "मिथुन", "कर्क", "सिंह", "कन्या",
    "तुला", "वृश्चिक", "धनु", "मकर", "कुम्भ", "मीन"
];

function resolveTithiName(tithiDay: number, paksha: string): string {
    if (paksha === "कृष्ण पक्ष" && tithiDay === 15) return tithiNamesList[15];
    if (paksha === "शुक्ल पक्ष" && tithiDay === 15) return tithiNamesList[14];
    return tithiNamesList[tithiDay - 1];
}

// Uses the purnimanta (full moon) system.
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

    /* ---- purnimānta month ---- */
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

    // --- Gregorian Events ---
    (EventsData.gregorianEvents as any[])?.forEach(event => {
        if ((event.startYear && gregorianYear < event.startYear) || (event.endYear && gregorianYear > event.endYear)) return;
        if (event.date === formattedGregorianDate) {
            events.push({ name: event.event, detail: event.detail, holiday: event.holiday || false });
        }
    });

    // --- Bikram Recurring Events (MM/dd) ---
    (EventsData.bikramRecurringEvents as any[])?.forEach(event => {
        if ((event.startYear && bsYear < event.startYear) || (event.endYear && bsYear > event.endYear)) return;
        if (event.date === formattedBikramRecurringDate) {
            events.push({ name: event.event, detail: event.detail, holiday: event.holiday || false });
        }
    });

    // --- Bikram Fixed Events (YYYY/MM/dd) ---
    (EventsData.bikramFixedEvents as any[])?.forEach(event => {
        if (event.date === formattedBikramFixedDate) {
            events.push({ name: event.event, detail: event.detail, holiday: event.holiday || false });
        }
    });

    // --- Lunar Events ---
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

// FIXED: Main calculate function updated to use the new consistent helper functions.
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
        ? (karanaIdx < 57 ? karanas[(karanaIdx - 1) % 7 + 1] : karanas[karanaIdx - 57 + 8])
        : karanas[0];

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
        nakshatra: nakshatras[Math.floor(lunarInfo.moonLong / (360 / 27))],
        yoga: yogas[Math.floor(zero360(lunarInfo.sunLong + lunarInfo.moonLong) / (360 / 27))],
        karana: karanaName,
        sunRashi: rashis[Math.floor(lunarInfo.sunLong / 30)],
        moonRashi: rashis[Math.floor(lunarInfo.moonLong / 30)],
        events,
        isComputed: bsInfo.isComputed || false,
        adhikaMasa: lunarInfo.adhikaStatus
    };
}
