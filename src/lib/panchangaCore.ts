import { EventsData } from '../data/eventsData';
import {
    getSunriseSunset,
    toDevanagari,
    toBikramSambat,
    KaliEpoch,
    zero360,
    trueLongitudeSun,
    trueLongitudeMoon,
    getTithi,
    toJulianDay,
    solarMonths,
    findPurnima,
    calculateAdhikaMasa,
    formatMonthDay
} from './bikram';

// --- PANCHANGA-SPECIFIC NAME ARRAYS ---
const tithiNamesList = ["प्रतिपदा", "द्वितीया", "तृतीया", "चतुर्थी", "पञ्चमी", "षष्ठी", "सप्तमी", "अष्टमी", "नवमी", "दशमी", "एकादशी", "द्वादशी", "त्रयोदशी", "चतुर्दशी", "पूर्णिमा", "अमावस्या"];
const nakshatras = ["अश्विनी", "भरणी", "कृत्तिका", "रोहिणी", "मृगशिरा", "आर्द्रा", "पुनर्वसु", "पुष्य", "अश्लेषा", "मघा", "पूर्व फाल्गुनी", "उत्तर फाल्गुनी", "हस्त", "चित्रा", "स्वाती", "विशाखा", "अनुराधा", "ज्येष्ठा", "मूल", "पूर्वाषाढा", "उत्तराषाढा", "श्रवण", "धनिष्ठा", "शतभिषा", "पूर्व भाद्रपद", "उत्तर भाद्रपद", "रेवती"];
const yogas = ["विष्कम्भ", "प्रीति", "आयुष्मान्", "सौभाग्य", "शोभन", "अतिगण्ड", "सुकर्म", "धृति", "शूल", "गण्ड", "वृद्धि", "ध्रुव", "व्याघात", "हर्षण", "वज्र", "सिद्धि", "व्यतिपात", "वरीयान्", "परिघ", "शिव", "सिद्ध", "साध्य", "शुभ", "शुक्ल", "ब्रह्म", "इन्द्र", "वैधृति"];
const karanas = ["किंस्तुघ्न", "बव", "बालव", "कौलव", "तैतिल", "गर", "वणिज", "विष्टि", "शकुनि", "चतुष्पाद", "नाग"];
const rashis = ["मेष", "वृषभ", "मिथुन", "कर्क", "सिंह", "कन्या", "तुला", "वृश्चिक", "धनु", "मकर", "कुम्भ", "मीन"];
const weekdays = ["आइतबार", "सोमबार", "मङ्गलबार", "बुधबार", "बिहीबार", "शुक्रबार", "शनिबार"];


// --- PRIVATE HELPERS for PANCHANGA ---

function resolveTithiName(tithiDay: number, paksha: string) {
    if (paksha === "कृष्ण पक्ष" && tithiDay === 15) return tithiNamesList[15];
    if (paksha === "शुक्ल पक्ष" && tithiDay === 15) return tithiNamesList[14];
    return tithiNamesList[tithiDay - 1];
}

export function _getPanchangaBasics(date: Date) {
    const jd = toJulianDay(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    const ahar = jd - KaliEpoch + 0.25 + ((85.3240 / 15 - 5.75) / 24);
    const sunLong = trueLongitudeSun(ahar);
    const moonLong = trueLongitudeMoon(ahar);
    const tithiVal = getTithi(sunLong, moonLong);
    const tithiNum = Math.floor(tithiVal) + 1;
    const paksha = tithiNum <= 15 ? "शुक्ल पक्ष" : "कृष्ण पक्ष";
    const tithiDay = tithiNum > 15 ? tithiNum - 15 : tithiNum;
    const tithiName = resolveTithiName(tithiDay, paksha);

    // Purnimanta month calculation (to align with main `calculate` function)
    let purnima_end_of_month = findPurnima(ahar);
    if (purnima_end_of_month < ahar) {
        purnima_end_of_month = findPurnima(ahar + 29.53);
    }
    const sunLongAtPurnima = trueLongitudeSun(purnima_end_of_month);
    const nameSign = Math.floor(sunLongAtPurnima / 30);
    const purnimantaMonthName = solarMonths[nameSign];
    const isAdhika = calculateAdhikaMasa(ahar).startsWith("अधिक");

    return {
        ahar,
        lunarMonthName: purnimantaMonthName,
        isAdhika: isAdhika,
        paksha,
        tithiName,
        tithiDay
    };
}

export function getEventsForDate(date: Date, bsYear: number, bsMonthIndex: number, bsDay: number) {
    const events: any[] = [];
    const gregorianYear = date.getUTCFullYear();
    const gregorianMonth = date.getUTCMonth() + 1;
    const gregorianDay = date.getUTCDate();
    const formattedGregorianDate = formatMonthDay(gregorianMonth, gregorianDay);
    const formattedBikramRecurringDate = formatMonthDay(bsMonthIndex + 1, bsDay);

    if (EventsData.gregorianEvents) {
        for (const event of EventsData.gregorianEvents as any[]) {
            if ((event.startYear && gregorianYear < event.startYear) || (event.endYear && gregorianYear > event.endYear)) continue;
            if (event.date === formattedGregorianDate) {
                events.push({ name: event.event, detail: event.detail, category: event.category, holiday: !!event.holiday });
            }
        }
    }

    if (EventsData.bikramRecurringEvents) {
        for (const event of EventsData.bikramRecurringEvents as any[]) {
            if ((event.startYear && bsYear < event.startYear) || (event.endYear && bsYear > event.endYear)) continue;
            if (event.date === formattedBikramRecurringDate) {
                events.push({ name: event.event, detail: event.detail, category: event.category, holiday: !!event.holiday });
            }
        }
    }

    if (EventsData.bikramFixedEvents) {
        const formattedFixedDate = bsYear + "/" + formatMonthDay(bsMonthIndex + 1, bsDay);
        for (const event of EventsData.bikramFixedEvents) {
            if (event.date === formattedFixedDate) {
                events.push({ name: event.event, detail: event.detail, category: event.category, holiday: !!event.holiday });
            }
        }
    }

    if (EventsData.lunarEvents) {
        const todayInfo = _getPanchangaBasics(date);
        if (todayInfo.isAdhika) {
            return events; // No lunar events in Adhika masa
        }

        for (const lunarEvent of EventsData.lunarEvents as any[]) {
            if ((lunarEvent.startYear && bsYear < lunarEvent.startYear) || (lunarEvent.endYear && bsYear > lunarEvent.endYear)) continue;
            
            if (lunarEvent.lunarMonth === todayInfo.lunarMonthName && lunarEvent.paksha === todayInfo.paksha && lunarEvent.tithi === todayInfo.tithiName) {
                 events.push({ name: lunarEvent.event, detail: lunarEvent.detail, category: lunarEvent.category, holiday: !!lunarEvent.holiday });
            }
        }
    }

    return events;
}


// --- MAIN CALCULATION FUNCTION ---
export function calculate(date: Date, lat?: number, lon?: number, tz?: number) {
    const jd = toJulianDay(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    const ahar = jd - KaliEpoch + 0.25 + (((lon || 85.3240) / 15 - (tz || 5.75)) / 24);
    const sunLong = trueLongitudeSun(ahar);
    const moonLong = trueLongitudeMoon(ahar);

    const tithiVal = getTithi(sunLong, moonLong);
    const tithiNum = Math.floor(tithiVal) + 1;
    const paksha = tithiNum <= 15 ? "शुक्ल पक्ष" : "कृष्ण पक्ष";
    const tithiDay = tithiNum > 15 ? tithiNum - 15 : tithiNum;
    const tithiName = resolveTithiName(tithiDay, paksha);

    let purnima_end_of_month = findPurnima(ahar);
    if (purnima_end_of_month < ahar) {
        purnima_end_of_month = findPurnima(ahar + 29.53);
    }

    const sunLongAtPurnima = trueLongitudeSun(purnima_end_of_month);
    const nameSign = Math.floor(sunLongAtPurnima / 30);
    const purnimantaMonthName = solarMonths[nameSign];

    const adhikaMasaStatus = calculateAdhikaMasa(ahar);
    const isAdhika = adhikaMasaStatus.startsWith("अधिक");

    const karanaIdx = Math.floor(2 * tithiVal);
    const karanaName = karanaIdx > 0 ? (karanaIdx < 57 ? karanas[(karanaIdx-1) % 7 + 1] : karanas[karanaIdx - 57 + 8]) : karanas[0];

    const bsInfo = toBikramSambat(date);
    if (!bsInfo) return { error: "Date out of range" } as any;

    const lunarMonthDisplayName = isAdhika ? "अधिक " + purnimantaMonthName : purnimantaMonthName;
    const events = getEventsForDate(date, bsInfo.year, bsInfo.monthIndex, bsInfo.day);
    const sunriseSunset = getSunriseSunset(date, lat, lon, tz);

    const gregorianOptions: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
    const gregorianDateFormatted = date.toLocaleDateString('en-US', gregorianOptions);

    return {
        gregorianDate: gregorianDateFormatted,
        bikramSambat: toDevanagari(bsInfo.year) + " " + bsInfo.monthName + " " + toDevanagari(bsInfo.day),
        bsYear: bsInfo.year,
        bsMonthIndex: bsInfo.monthIndex,
        bsDay: bsInfo.day,
        weekday: weekdays[date.getUTCDay()],
        sunrise: sunriseSunset.sunrise,
        sunset: sunriseSunset.sunset,
        tithi: tithiName,
        tithiDay: tithiDay,
        paksha: paksha,
        lunarMonth: lunarMonthDisplayName,
        nakshatra: nakshatras[Math.floor(moonLong / (360 / 27))],
        yoga: yogas[Math.floor(zero360(sunLong + moonLong) / (360 / 27))],
        karana: karanaName,
        sunRashi: rashis[Math.floor(sunLong / 30)],
        moonRashi: rashis[Math.floor(moonLong / 30)],
        events: events,
        isComputed: bsInfo.isComputed,
        adhikaMasa: adhikaMasaStatus
    };
}

