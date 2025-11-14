import type {
    KundaliRequest,
    KundaliResponse,
    ServiceError,
    ComparisonResult,
    TimedPanchangaElement,
    PlanetInfo,
    HouseInfo,
    DashaInfo,
    DivisionalChart,
    AshtaKootaValues
} from '../src/types/types';

import {
    NAKSHATRA_SYLLABLES,
    NEPALI_YOGA,
    NEPALI_KARANA
} from '../src/constants/constants';

import {
    getAharFor,
    aharToDate,
    absTrueLongitudeSun,
    absTrueLongitudeMoon,
    absElongation,
    findTransit,
} from '../src/lib/core/panchangaCore';

import { getSunriseSunset, toJulianDay } from '../src/lib/utils/lib'

import { getPlanetPosition, calcayan } from './astroCalc';
import {
    getAscendant,
    getHouses,
    getVimshottariDasha,
    getTribhagiDasha,
    getYoginiDasha,
    getAshtottariDasha,
    getJaiminiDasha,
    getDivisionalChart,
    getAshtaKoota,
    calculateGunaMilan
} from './HoroscopeService';


const PLANETS = ['SUN', 'MOON', 'MARS', 'MERCURY', 'JUPITER', 'VENUS', 'SATURN', 'RAHU', 'KETU'] as const;
const NAK_STEP = 360 / 27;
const PADA_STEP = NAK_STEP / 4;
const EPS = 1e-9;
const wrap360 = (x: number) => ((x % 360) + 360) % 360;

async function getKundali(req: KundaliRequest): Promise<KundaliResponse | ServiceError> {
    try {
        const [, timePart] = req.datetime.split('T');
        const [hour, minute, second] = timePart.split(':').map(Number);

        const birthLocalDate = new Date(new Date(req.datetime).getTime() + req.offset * 3600_000);
        const birthTimeFraction = (hour * 3600 + minute * 60 + second) / 86400.0;

        const birthDateUTC = new Date(Date.parse(req.datetime));
        const jd_utc =
            toJulianDay(
                birthDateUTC.getUTCFullYear(),
                birthDateUTC.getUTCMonth(),
                birthDateUTC.getUTCDate()
            ) +
            (birthDateUTC.getUTCHours() +
                birthDateUTC.getUTCMinutes() / 60 +
                birthDateUTC.getUTCSeconds() / 3600) / 24;

        const ayanamsaValue = calcayan(jd_utc);
        const birthAhar = getAharFor(birthLocalDate, req.longitude, birthTimeFraction);

        const moonAbs = absTrueLongitudeMoon(birthAhar);
        const sunAbs = absTrueLongitudeSun(birthAhar);
        const moon360 = wrap360(moonAbs);

        // Nakshatra & Pada (wrapped for names)
        const nakIdx = Math.floor((moon360 - EPS) / NAK_STEP);
        const progInNak = moon360 - nakIdx * NAK_STEP;
        const padaIdx = Math.floor((progInNak - EPS) / PADA_STEP) + 1;
        const nakName = NAKSHATRA_SYLLABLES[nakIdx]?.name ?? '?';

        // Absolute targets for timings
        const nakIdxAbs = Math.floor(moonAbs / NAK_STEP);
        const nakStartAhar = findTransit(birthAhar - 1.0, absTrueLongitudeMoon, nakIdxAbs * NAK_STEP, 2);
        const nakEndAhar = findTransit(birthAhar, absTrueLongitudeMoon, (nakIdxAbs + 1) * NAK_STEP, 2);

        const absPadaIdx = nakIdxAbs * 4 + (padaIdx - 1);
        const padaStartAhar = findTransit(birthAhar - 0.5, absTrueLongitudeMoon, absPadaIdx * PADA_STEP, 2);
        const padaEndAhar = findTransit(birthAhar, absTrueLongitudeMoon, (absPadaIdx + 1) * PADA_STEP, 2);

        // Tithi
        const elongAbs = absElongation(birthAhar);
        const tithiIndex = Math.floor(elongAbs / 12);
        const tithiNum = (tithiIndex % 30) + 1;
        const paksha = tithiNum <= 15 ? 'शुक्ल पक्ष' : 'कृष्ण पक्ष';
        const tithiStartAhar = findTransit(birthAhar - 1.0, absElongation, tithiIndex * 12, 2);
        const tithiEndAhar = findTransit(birthAhar, absElongation, (tithiIndex + 1) * 12, 2);

        // YOGA Absolute sum at birth
        const yogaTotalAbs = sunAbs + moonAbs;

        // Index for naming (wrapped 0–360)
        const yogaIndex = Math.floor(((yogaTotalAbs % 360) - EPS) / NAK_STEP);
        const yogaName = NEPALI_YOGA[yogaIndex] ?? '?';

        // Targets in absolute domain
        const yogaIdxAbs = Math.floor(yogaTotalAbs / NAK_STEP);
        const yogaStartTarget = yogaIdxAbs * NAK_STEP;
        const yogaEndTarget = (yogaIdxAbs + 1) * NAK_STEP;

        // Transit solver on absolute sum
        const yogaFunc = (ah: number) => absTrueLongitudeSun(ah) + absTrueLongitudeMoon(ah);
        const yogaStartAhar = findTransit(birthAhar - 1.0, yogaFunc, yogaStartTarget, 2);
        const yogaEndAhar = findTransit(birthAhar, yogaFunc, yogaEndTarget, 2);

        // Karana
        const karanaIndex = Math.floor(elongAbs / 6);
        const karanaName = NEPALI_KARANA[karanaIndex % NEPALI_KARANA.length];
        const karanaStartAhar = findTransit(birthAhar - 1.0, absElongation, karanaIndex * 6, 2);
        const karanaEndAhar = findTransit(birthAhar, absElongation, (karanaIndex + 1) * 6, 2);

        const formatISO = (aharVal: number | null) =>
            aharVal ? aharToDate(aharVal, birthAhar, birthLocalDate).toISOString() : '';

        const sunEvents = getSunriseSunset(birthLocalDate, req.latitude, req.longitude, req.offset);

        const planets: PlanetInfo[] = PLANETS.map(p => {
            const pos = getPlanetPosition(jd_utc, p as any, ayanamsaValue);
            const nIdx = Math.floor(pos.eclipticLongitude / NAK_STEP);
            const nPada = Math.floor((pos.eclipticLongitude % NAK_STEP) / (NAK_STEP / 4)) + 1;
            return {
                planet: p,
                eclipticLongitude: pos.eclipticLongitude,
                eclipticLatitude: pos.eclipticLatitude,
                speedLon: pos.speedLon,
                rashi: pos.rashi,
                degreesInSign: pos.degreesInSign,
                retrograde: pos.retrograde,
                nakshatra: NAKSHATRA_SYLLABLES[nIdx]?.name ?? '?',
                nakshatraPada: nPada
            };
        });

        const ascendantLon = getAscendant(jd_utc, req.latitude, req.longitude);
        const houses: HouseInfo[] = getHouses(ascendantLon);

        const dashaSequence: DashaInfo[] = getVimshottariDasha(moon360, birthLocalDate);
        const tribhagiDasha: DashaInfo[] = getTribhagiDasha(moon360, birthLocalDate);
        const yoginiDasha: DashaInfo[] = getYoginiDasha(moon360, birthLocalDate);
        const ashtottariDasha: DashaInfo[] = getAshtottariDasha(moon360, birthLocalDate, paksha);
        const jaiminiDasha: DashaInfo[] = getJaiminiDasha(planets, ascendantLon, birthLocalDate);

        const divisionalCharts: DivisionalChart[] = [9, 10, 3, 12, 4, 60].map(d =>
            getDivisionalChart(d, planets, ascendantLon)
        );

        const ashtaKoota: AshtaKootaValues = getAshtaKoota(
            Math.floor(moon360 / 30) + 1,
            nakIdx,
            Math.floor(ascendantLon / 30) + 1
        );

        return {
            birthDetails: { ...req },
            calculationMeta: {
                backend: 'Nepdate-astroCalc',
                ayanamsa: 'Lahiri',
                ayanamsaValue,
                zodiac: 'Sidereal',
                houseSystem: 'Whole Sign',
                calculationUtc: new Date().toISOString(),
                version: __APP_VERSION__
            },
            sunRise: sunEvents.sunrise,
            sunSet: sunEvents.sunset,
            planets,
            ascendant: {
                longitude: ascendantLon,
                sign: Math.floor(ascendantLon / 30) + 1,
                degreesInSign: ascendantLon % 30,
                nakshatra: NAKSHATRA_SYLLABLES[Math.floor((wrap360(ascendantLon) - EPS) / NAK_STEP)]?.name ?? '?',
                nakshatraPada: Math.floor(((wrap360(ascendantLon) % NAK_STEP) - EPS) / PADA_STEP) + 1
            },
            houses,
            nakshatra: {
                index: nakIdx,
                pada: padaIdx,
                nameNepali: nakName,
                start: formatISO(nakStartAhar),
                end: formatISO(nakEndAhar),
                padaStart: formatISO(padaStartAhar),
                padaEnd: formatISO(padaEndAhar)
            },
            tithi: {
                tithiNumber: tithiNum,
                paksha,
                start: formatISO(tithiStartAhar),
                end: formatISO(tithiEndAhar)
            },
            yoga: {
                name: yogaName,
                start: formatISO(yogaStartAhar),
                end: formatISO(yogaEndAhar)
            },
            karana: {
                name: karanaName,
                start: formatISO(karanaStartAhar),
                end: formatISO(karanaEndAhar)
            },
            // Day arrays
            tithis: [] as TimedPanchangaElement[],
            nakshatras: [] as TimedPanchangaElement[],
            yogas: [] as TimedPanchangaElement[],
            karanas: [] as TimedPanchangaElement[],
            // Dashas & charts
            dashaSequence,
            tribhagiDasha,
            yoginiDasha,
            ashtottariDasha,
            jaiminiDasha,
            divisionalCharts,
            ashtaKoota
        };
    } catch (e) {
        return { error: e instanceof Error ? e.message : 'Unknown error during calculation.' };
    }
}

async function getComparison(
    groomReq: KundaliRequest,
    brideReq: KundaliRequest
): Promise<ComparisonResult | ServiceError> {
    const groomData = await getKundali(groomReq);
    const brideData = await getKundali(brideReq);

    if ('error' in groomData || 'error' in brideData) {
        return { error: 'Could not calculate kundali for one or both individuals.' };
    }

    const { score, conclusion, labels } = calculateGunaMilan(groomData, brideData);
    return {
        groom: groomData,
        bride: brideData,
        score,
        conclusion,
        labels
    };
}


export const kundaliService = {
    getKundali,
    getComparison
};