import {
    toDevanagari
} from '../core/bikram';

export {
    fromBikramSambat,
    getMonthWarning,
    Bsdata,
    getBikramMonthInfo,
    fromDevanagari,
    weekdays,
    getSunriseSunset,
    toDevanagari, // Exporting it again is fine
    toJulianDay,
// ...

    fromJulianDay,
    findPurnima,
    findNewMoon,
    trueLongitudeSun,
    trueLongitudeMoon,
    getTithi,
    zero360,
    calculateAdhikaMasa,
    KaliEpoch,
    NAKSHATRA_NAMES,
    TITHI_NAMES,
    YOGA_NAMES,
    RASHI_NAMES,
    KARANA_NAMES,
    resolveTithiName,
    sinDeg,
    cosDeg,
    arcsinDeg,
    rad,
    toBikramSambat,
    getDaysInADMonth,
    formatDegrees,
    YugaRotation,
    PlanetApogee,
    PlanetCircumm,
    mandaEquation,
    YugaCivilDays,
    UJJAIN_LONGITUDE,
    getNepaliPeriod,
    formatDMS,
} from '../core/bikram';
export {
    calculate,
    getEventsForDate,
    getAharFor,
    aharToDate,
    absTrueLongitudeSun,
    absTrueLongitudeMoon,
    findTransit,
    absElongation,
} from '../core/panchangaCore';

 // Helper to calculate approx read time (200 words per minute)
export const calculateReadTime = (content: string): string => {
    if (!content) return '१ मिनेट';
    // Strip HTML
    const text = content.replace(/<[^>]*>?/gm, '');
    const wordCount = text.trim().split(/\s+/).length;
    const time = Math.ceil(wordCount / 200);
    return `${toDevanagari(time)} मिनेट`;
};

export const createSlug = (text: string): string => {
    return text
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with -
        // Keep Devanagari characters, alphanumeric, and -
        // Remove everything else? careful with punctuation.
        // Simple approach: just spaces to dashes for now to keep it readable.
        // Maybe simple cleanup of special chars like : or ?
        .replace(/[:?]/g, '')
        .replace(/-+/g, '-'); // Collapse multiple dashes
};
