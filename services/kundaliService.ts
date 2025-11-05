import type { KundaliRequest, KundaliResponse, ServiceError, ComparisonResult } from '../types/types';
import { NEPALI_NAKSHATRA, NEPALI_YOGA, NEPALI_KARANA } from '../src/constants/constants';
import { toJulianDay, getSunriseSunset } from '../src/lib/lib';
import { dTime, getPlanetPosition, calcayan } from './astroCalc';
import { findAspectTime, findNakshatraTime, findYogaTime, findNakshatraPadaTime } from './panchangaService';
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

async function getKundali(req: KundaliRequest): Promise<KundaliResponse | ServiceError> {
    try {
        const [datePart, timePart] = req.datetime.split('T');
        const [year, month, day] = datePart.split('-').map(Number);
        const [hour, minute, second] = timePart.split(':').map(Number);

        const birthDateUTC = new Date(Date.UTC(year, month - 1, day, hour, minute, second) - req.offset * 3600 * 1000);
        const jd_utc = toJulianDay(birthDateUTC.getUTCFullYear(), birthDateUTC.getUTCMonth(), birthDateUTC.getUTCDate()) + (birthDateUTC.getUTCHours() + birthDateUTC.getUTCMinutes() / 60 + birthDateUTC.getUTCSeconds() / 3600) / 24;
        const dt = dTime(jd_utc);
        const jd = jd_utc + dt / 24;
        
        const sunEvents = getSunriseSunset(birthDateUTC, req.latitude, req.longitude, req.offset);

        const ayanamsa = calcayan(jd);

        const planets = ['SUN', 'MOON', 'MARS', 'MERCURY', 'JUPITER', 'VENUS', 'SATURN', 'RAHU', 'KETU'].map(p => {
            const pos = getPlanetPosition(jd, p, ayanamsa);
            const nakshatraLength = 360 / 27;
            const nakshatraIndex = Math.floor(pos.eclipticLongitude / nakshatraLength);
            
            return {
                ...pos,
                nakshatra: NEPALI_NAKSHATRA[nakshatraIndex],
                nakshatraPada: Math.floor((pos.eclipticLongitude % nakshatraLength) / (nakshatraLength / 4)) + 1,
            };
        });

        const ascendantLon_tropical = getAscendant(jd_utc, req.latitude, req.longitude);
        const ascendantLon = ascendantLon_tropical;
        const houses = getHouses(ascendantLon);

        const moonPlanetInfo = planets.find(p => p.planet === 'MOON')!;
        const sunPlanetInfo = planets.find(p => p.planet === 'SUN')!;
        
        const nakshatraIndex = Math.floor(moonPlanetInfo.eclipticLongitude / (360 / 27));

        const tithiInfo = findAspectTime(jd, req.offset, false);
        const nakshatraInfo = findNakshatraTime(jd, req.offset);
        const nakshatraPadaInfo = findNakshatraPadaTime(jd, req.offset);
        const yogaInfo = findYogaTime(jd, req.offset);
        const karanaInfo = findAspectTime(jd, req.offset, true);

        const sidereal_diff = (moonPlanetInfo.eclipticLongitude - sunPlanetInfo.eclipticLongitude + 360) % 360;
        const tithiNumber = Math.floor(sidereal_diff / 12) + 1;
        const paksha = sidereal_diff < 180 ? 'शुक्ल पक्ष' : 'कृष्ण पक्ष';
        
        const sidereal_sum = (moonPlanetInfo.eclipticLongitude + sunPlanetInfo.eclipticLongitude) % 360;
        const yogaName = NEPALI_YOGA[Math.floor(sidereal_sum / (360/27))];
        
        const karanaNumber = Math.floor(sidereal_diff / 6);
        let karanaIndex: number;
        if (karanaNumber === 0 || karanaNumber === 59) karanaIndex = 0; 
        else if (karanaNumber === 56) karanaIndex = 7;
        else if (karanaNumber === 57) karanaIndex = 8;
        else if (karanaNumber === 58) karanaIndex = 9;
        else karanaIndex = (karanaNumber - 1) % 7 + 1;
        const karanaName = NEPALI_KARANA[karanaIndex];

        const birthDate = new Date(req.datetime);

        return {
            birthDetails: { ...req },
            calculationMeta: { backend: 'Nepdate-astroCalc', version: __APP_VERSION__, ayanamsa: 'Lahiri', ayanamsaValue: ayanamsa, zodiac: 'Sidereal', houseSystem: 'Whole Sign', calculationUtc: new Date().toISOString() },
            sunRise: sunEvents.sunrise,
            sunSet: sunEvents.sunset,
            planets,
            ascendant: { longitude: ascendantLon, sign: Math.floor(ascendantLon / 30) + 1, degreesInSign: ascendantLon % 30, nakshatra: NEPALI_NAKSHATRA[Math.floor(ascendantLon / (360 / 27))], nakshatraPada: Math.floor((ascendantLon % (360 / 27)) / ((360 / 27) / 4)) + 1 },
            houses,
            nakshatra: { index: nakshatraIndex, pada: moonPlanetInfo.nakshatraPada, nameNepali: moonPlanetInfo.nakshatra, start: nakshatraInfo.start, end: nakshatraInfo.end, padaStart: nakshatraPadaInfo.start, padaEnd: nakshatraPadaInfo.end },
            tithi: { tithiNumber: tithiNumber, paksha: paksha, start: tithiInfo.start, end: tithiInfo.end },
            yoga: { name: yogaName, start: yogaInfo.start, end: yogaInfo.end },
            karana: { name: karanaName, start: karanaInfo.start, end: karanaInfo.end },
            dashaSequence: getVimshottariDasha(moonPlanetInfo.eclipticLongitude, birthDate),
            tribhagiDasha: getTribhagiDasha(moonPlanetInfo.eclipticLongitude, birthDate),
            yoginiDasha: getYoginiDasha(moonPlanetInfo.eclipticLongitude, birthDate),
            ashtottariDasha: getAshtottariDasha(moonPlanetInfo.eclipticLongitude, birthDate, paksha),
            jaiminiDasha: getJaiminiDasha(planets, ascendantLon, birthDate),
            divisionalCharts: [9, 10, 3, 12, 4, 60].map(d => getDivisionalChart(d, planets, ascendantLon)),
            ashtaKoota: getAshtaKoota(moonPlanetInfo.rashi, nakshatraIndex, Math.floor(ascendantLon / 30) + 1),
        };
    } catch (e) {
        return { error: e instanceof Error ? e.message : 'Unknown error during calculation.' };
    }
}

async function getComparison(groomReq: KundaliRequest, brideReq: KundaliRequest): Promise<ComparisonResult | ServiceError> {
    const groomData = await getKundali(groomReq);
    const brideData = await getKundali(brideReq);

    if ('error' in groomData || 'error' in brideData) {
        return { error: 'Could not calculate kundali for one or both individuals.' };
    }
    
    const { score, conclusion } = calculateGunaMilan(groomData, brideData);

    return { groom: groomData, bride: brideData, score, conclusion };
}

export const kundaliService = {
    getKundali,
    getComparison,
};