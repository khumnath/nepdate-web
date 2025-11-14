import type { PlanetInfo, DashaInfo, AshtaKootaValues, GunaMilanScore, DivisionalChart, HouseInfo, KundaliResponse } from '../src/types/types';
import { 
    RASHI_LORDS, NEPALI_PLANETS, NEPALI_RASHI,
    VARNA_MAP, NEPALI_VARNA, VASYA_MAP, NEPALI_VASYA, YONI_MAP, NEPALI_YONI,
    GANA_MAP, NEPALI_GANA, NADI_MAP, NEPALI_NADI, TATVA_MAP, NEPALI_TATVA, NEPALI_PAYA,
    GRAHA_MAITRI, YONI_COMPATIBILITY, TARA_LABELS, TARA_POINTS, GANA_LABELS, NADI_LABELS
} from '../src/constants/constants';
import { toDevanagari } from '../src/lib/utils/lib';
import { d2r, r2d, fix360 } from './astroCalc';

const MEAN_SOLAR_YEAR_DAYS = 365.2425;

function addYearsExact(start: Date, years: number): Date {
    const d = new Date(start);
    const intYears = Math.trunc(years);
    const fracYears = years - intYears;
    if (intYears !== 0) d.setFullYear(d.getFullYear() + intYears);
    if (fracYears !== 0) d.setDate(d.getDate() + fracYears * MEAN_SOLAR_YEAR_DAYS);
    return d;
}

/* ---------------- HOUSE & ASCENDANT CALCULATIONS ---------------- */

export function getAscendant(jd_utc: number, lat: number, lon: number): number {
    const t = (jd_utc - 2451545.0) / 36525.0;
    const theta0 = 280.46061837 + 360.98564736629 * (jd_utc - 2451545.0) + 0.000387933 * t * t - t * t * t / 38710000;
    const lst = fix360(theta0 + lon);
    const epsilon = 23.439291 - 0.0130042 * t;
    const ascendant = r2d * Math.atan2(
        Math.cos(lst * d2r),
        -(Math.sin(lst * d2r) * Math.cos(epsilon * d2r) + Math.tan(lat * d2r) * Math.sin(epsilon * d2r))
    );
    return fix360(ascendant);
}

export function getHouses(ascendant: number): HouseInfo[] {
    return Array.from({ length: 12 }, (_, i) => ({
        houseNumber: i + 1,
        cuspLongitude: fix360(ascendant + i * 30),
        sign: Math.floor(fix360(ascendant + i * 30) / 30) + 1,
    }));
}

/* ---------------- DASHA CALCULATIONS ---------------- */

function getDashaBalance(moonLongitude: number): { lord: string, balance: number } {
    const nakshatraLength = 360 / 27;
    const nakshatraIndex = Math.floor(moonLongitude / nakshatraLength);
    const progressInNakshatra = (moonLongitude % nakshatraLength) / nakshatraLength;

    const dashaLords = ['KETU', 'VENUS', 'SUN', 'MOON', 'MARS', 'RAHU', 'JUPITER', 'SATURN', 'MERCURY'];
    const dashaPeriods = [7, 20, 6, 10, 7, 18, 16, 19, 17];
    
    const lordIndex = nakshatraIndex % 9;
    const lord = dashaLords[lordIndex];
    const balance = (1 - progressInNakshatra) * dashaPeriods[lordIndex];
    
    return { lord, balance };
}

function getAntardashas(mahaDashaLord: string, startDate: Date): DashaInfo[] {
    const dashaLords = ['KETU', 'VENUS', 'SUN', 'MOON', 'MARS', 'RAHU', 'JUPITER', 'SATURN', 'MERCURY'];
    const dashaPeriods = [7, 20, 6, 10, 7, 18, 16, 19, 17];
    const totalPeriod = dashaPeriods.reduce((a, b) => a + b);
    
    const startIndex = dashaLords.indexOf(mahaDashaLord);
    const mahaDashaPeriod = dashaPeriods[startIndex];
    let currentStartDate = new Date(startDate);
    const antardashas: DashaInfo[] = [];

    for (let i = 0; i < 9; i++) {
        const lordIndex = (startIndex + i) % 9;
        const lord = dashaLords[lordIndex];
        const antardashaPeriod = (dashaPeriods[lordIndex] * mahaDashaPeriod) / totalPeriod;
        const endDate = addYearsExact(currentStartDate, antardashaPeriod);
      
        antardashas.push({
            planet: lord,
            start: currentStartDate.toISOString(),
            end: endDate.toISOString(),
        });
        currentStartDate = endDate;
    }
    return antardashas;
}

export function getVimshottariDasha(moonLongitude: number, birthDate: Date): DashaInfo[] {
    const { lord: firstLord, balance } = getDashaBalance(moonLongitude);
    const dashaLords = ['KETU', 'VENUS', 'SUN', 'MOON', 'MARS', 'RAHU', 'JUPITER', 'SATURN', 'MERCURY'];
    const dashaPeriods = [7, 20, 6, 10, 7, 18, 16, 19, 17];
    
    const dashaSequence: DashaInfo[] = [];
    let currentDate = new Date(birthDate);

    // First (balance) period
    const firstEndDate = addYearsExact(currentDate, balance);
    dashaSequence.push({
        planet: firstLord,
        start: currentDate.toISOString(),
        end: firstEndDate.toISOString(),
        subDashas: getAntardashas(firstLord, currentDate)
    });
    currentDate = firstEndDate;

    let lordIndex = (dashaLords.indexOf(firstLord) + 1) % 9;
    for (let i = 0; i < 15; i++) {
        const lord = dashaLords[lordIndex];
        const period = dashaPeriods[lordIndex];
        const endDate = addYearsExact(currentDate, period);
        
        dashaSequence.push({
            planet: lord,
            start: currentDate.toISOString(),
            end: endDate.toISOString(),
            subDashas: getAntardashas(lord, currentDate)
        });
        
        currentDate = endDate;
        lordIndex = (lordIndex + 1) % 9;
    }
    return dashaSequence;
}

/**
 * Tribhagi dasha:
 * For each Vimshottari period, subdivide into three consecutive equal sub-periods
 * while preserving the total span across all dashas.
 */
export function getTribhagiDasha(moonLongitude: number, birthDate: Date): DashaInfo[] {
    const vimshottari = getVimshottariDasha(moonLongitude, birthDate);
    const tribhagi: DashaInfo[] = [];

    for (const dasha of vimshottari) {
        const start = new Date(dasha.start);
        const end = new Date(dasha.end);
        const totalMs = end.getTime() - start.getTime();
        const thirdMs = totalMs / 3;

        for (let part = 0; part < 3; part++) {
            const partStart = new Date(start.getTime() + thirdMs * part);
            const partEnd = new Date(start.getTime() + thirdMs * (part + 1));
            tribhagi.push({
                planet: dasha.planet,
                start: partStart.toISOString(),
                end: partEnd.toISOString(),
            });
        }
    }

    return tribhagi;
}

/* ---------------- ASHTOTTARI DASHAS ---------------- */

function getAshtottariAntardashas(mahaDashaLord: string, startDate: Date, mahaDashaPeriodInYears: number): DashaInfo[] {
    const dashaLords = ['SUN', 'MOON', 'MARS', 'MERCURY', 'SATURN', 'JUPITER', 'RAHU', 'VENUS'];
    const dashaPeriods = [6, 15, 8, 17, 10, 19, 12, 21];
    const totalPeriod = 108;

    const startIndex = dashaLords.indexOf(mahaDashaLord);
    if (startIndex === -1) return [];

    let currentStartDate = new Date(startDate);
    const antardashas: DashaInfo[] = [];

    for (let i = 0; i < 8; i++) {
        const lordIndex = (startIndex + i) % 8;
        const lord = dashaLords[lordIndex];
        const antardashaPeriodInYears = (dashaPeriods[lordIndex] * mahaDashaPeriodInYears) / totalPeriod;

        const endDate = addYearsExact(currentStartDate, antardashaPeriodInYears);

        antardashas.push({
            planet: lord,
            start: currentStartDate.toISOString(),
            end: endDate.toISOString(),
        });
        currentStartDate = endDate;
    }
    return antardashas;
}

export function getAshtottariDasha(moonLongitude: number, birthDate: Date, paksha: string): DashaInfo[] {
    const nakshatraIndex = Math.floor(moonLongitude / (360 / 27));
    const dashaLords = ['SUN', 'MOON', 'MARS', 'MERCURY', 'SATURN', 'JUPITER', 'RAHU', 'VENUS'];
    const dashaPeriods = [6, 15, 8, 17, 10, 19, 12, 21];
    const isKrishnaPaksha = paksha === 'कृष्ण पक्ष';

    const getStartingLord = (): string => {
        if (isKrishnaPaksha) {
            if (nakshatraIndex === 5) return 'SATURN';
            if (nakshatraIndex === 6) return 'JUPITER';
            if (nakshatraIndex === 11) return 'RAHU';
            if (nakshatraIndex === 15) return 'VENUS';
        }
        if (nakshatraIndex >= 2 && nakshatraIndex <= 5) return 'SUN';
        if (nakshatraIndex >= 6 && nakshatraIndex <= 8) return 'MOON';
        if (nakshatraIndex >= 9 && nakshatraIndex <= 11) return 'MARS';
        if (nakshatraIndex >= 12 && nakshatraIndex <= 14) return 'MERCURY';
        if (nakshatraIndex >= 15 && nakshatraIndex <= 17) return 'SATURN';
        if (nakshatraIndex >= 18 && nakshatraIndex <= 20) return 'JUPITER';
        if (nakshatraIndex >= 21 && nakshatraIndex <= 23) return 'RAHU';
        return 'VENUS'; 
    };
    
    const firstLordName = getStartingLord();
    const lordIndex = dashaLords.indexOf(firstLordName);

    if (lordIndex === -1) return [];

    const nakshatraLength = 360 / 27;
    const progressInNakshatra = (moonLongitude % nakshatraLength) / nakshatraLength;
    const balance = (1 - progressInNakshatra) * dashaPeriods[lordIndex];

    const dashaSequence: DashaInfo[] = [];
    let currentDate = new Date(birthDate);

    const firstEndDate = addYearsExact(currentDate, balance);
    dashaSequence.push({ 
        planet: firstLordName, 
        start: currentDate.toISOString(), 
        end: firstEndDate.toISOString(),
        subDashas: getAshtottariAntardashas(firstLordName, currentDate, dashaPeriods[lordIndex])
    });
    currentDate = firstEndDate;

    let currentLordIndex = (lordIndex + 1) % 8;
    for (let i = 0; i < 10; i++) {
        const lord = dashaLords[currentLordIndex];
        const period = dashaPeriods[currentLordIndex];
        const endDate = addYearsExact(currentDate, period);
        dashaSequence.push({ 
            planet: lord, 
            start: currentDate.toISOString(), 
            end: endDate.toISOString(),
            subDashas: getAshtottariAntardashas(lord, currentDate, period)
        });
        currentDate = endDate;
        currentLordIndex = (currentLordIndex + 1) % 8;
    }
    return dashaSequence;
}

/* ---------------- YOGINI DASHAS ---------------- */

function getYoginiAntardashas(mahaDashaLord: string, startDate: Date, mahaDashaPeriodInYears: number): DashaInfo[] {
    const yoginiLords = ['Mangala', 'Pingala', 'Dhanya', 'Bhramari', 'Bhadrika', 'Ulka', 'Siddha', 'Sankata'];
    const yoginiPeriods = [1, 2, 3, 4, 5, 6, 7, 8];
    const totalPeriod = 36;
    
    const startIndex = yoginiLords.indexOf(mahaDashaLord);
    if (startIndex === -1) return [];

    let currentStartDate = new Date(startDate);
    const antardashas: DashaInfo[] = [];

    for (let i = 0; i < 8; i++) {
        const lordIndex = (startIndex + i) % 8;
        const lord = yoginiLords[lordIndex];
        const antardashaPeriodInYears = (yoginiPeriods[lordIndex] * mahaDashaPeriodInYears) / totalPeriod;
        
        const endDate = addYearsExact(currentStartDate, antardashaPeriodInYears);
        
        antardashas.push({
            planet: lord,
            start: currentStartDate.toISOString(),
            end: endDate.toISOString(),
        });
        currentStartDate = endDate;
    }
    return antardashas;
}

export function getYoginiDasha(moonLongitude: number, birthDate: Date): DashaInfo[] {
    const nakshatraLength = 360 / 27;
    const nakshatraIndex = Math.floor(moonLongitude / nakshatraLength);
    const yoginiLords = ['Mangala', 'Pingala', 'Dhanya', 'Bhramari', 'Bhadrika', 'Ulka', 'Siddha', 'Sankata'];
    const yoginiPeriods = [1, 2, 3, 4, 5, 6, 7, 8];
    
    const startIndex = (nakshatraIndex + 3) % 8;
    const firstLord = yoginiLords[startIndex];
    const balance = (1 - (moonLongitude % nakshatraLength) / nakshatraLength) * yoginiPeriods[startIndex];

    const dashaSequence: DashaInfo[] = [];
    let currentDate = new Date(birthDate);

    const firstEndDate = addYearsExact(currentDate, balance);
    dashaSequence.push({ 
        planet: firstLord, 
        start: currentDate.toISOString(), 
        end: firstEndDate.toISOString(),
        subDashas: getYoginiAntardashas(firstLord, currentDate, yoginiPeriods[startIndex])
    });
    currentDate = firstEndDate;

    let lordIndex = (startIndex + 1) % 8;
    for (let i = 0; i < 10; i++) {
        const lord = yoginiLords[lordIndex];
        const period = yoginiPeriods[lordIndex];
        const endDate = addYearsExact(currentDate, period);
        dashaSequence.push({ 
            planet: lord, 
            start: currentDate.toISOString(), 
            end: endDate.toISOString(),
            subDashas: getYoginiAntardashas(lord, currentDate, period)
        });
        currentDate = endDate;
        lordIndex = (lordIndex + 1) % 8;
    }
    return dashaSequence;
}

/* ---------------- JAIMINI DASHAS ---------------- */

const EXALTATION_RASHI: Record<string, number> = { SUN: 1, MOON: 2, MARS: 10, MERCURY: 6, JUPITER: 4, VENUS: 12, SATURN: 7 };
const DEBILITATION_RASHI: Record<string, number> = { SUN: 7, MOON: 8, MARS: 4, MERCURY: 12, JUPITER: 10, VENUS: 6, SATURN: 1 };

function getJaiminiAntardashas(mahaDashaRashiIndex: number, startDate: Date, mahaDashaPeriodInYears: number): DashaInfo[] {
    const antardashaDurationYears = mahaDashaPeriodInYears / 12;

    const movableSigns = [0, 3, 6, 9];
    const fixedSigns = [1, 4, 7, 10];
    let startRashiIndex: number;

    if (movableSigns.includes(mahaDashaRashiIndex)) {
        startRashiIndex = mahaDashaRashiIndex;
    } else if (fixedSigns.includes(mahaDashaRashiIndex)) {
        startRashiIndex = (mahaDashaRashiIndex + 6) % 12;
    } else {
        startRashiIndex = (mahaDashaRashiIndex + 4) % 12;
    }
    
    let currentStartDate = new Date(startDate);
    const antardashas: DashaInfo[] = [];

    for (let i = 0; i < 12; i++) {
        const antardashaRashiIndex = (startRashiIndex + i) % 12;

        const endDate = addYearsExact(currentStartDate, antardashaDurationYears);
        
        antardashas.push({
            planet: NEPALI_RASHI[antardashaRashiIndex],
            start: currentStartDate.toISOString(),
            end: endDate.toISOString(),
        });
        currentStartDate = endDate;
    }
    return antardashas;
}

export function getJaiminiDasha(planets: PlanetInfo[], ascendant: number, birthDate: Date): DashaInfo[] {
    const ascSign = Math.floor(ascendant / 30);

    const isLagnaOdd = (ascSign + 1) % 2 !== 0; 
    let sequence: number[] = [];
    if (isLagnaOdd) {
        for (let i = 0; i < 12; i++) sequence.push((ascSign + i) % 12);
    } else {
        for (let i = 0; i < 12; i++) sequence.push((ascSign - i + 12) % 12);
    }

    let currentDate = new Date(birthDate);
    const dashaSequence: DashaInfo[] = [];

    const planetPositions = new Map<string, number>();
    planets.forEach(p => {
        planetPositions.set(p.planet, p.rashi - 1);
    });
    
    const vishamaPadaSigns = [0, 1, 2, 6, 7, 8];

    for (const dashaRashiIndex of sequence) {
        const dashaRashi = dashaRashiIndex + 1;
        const lordPlanet = RASHI_LORDS[dashaRashi];
        const lordRashiIndex = planetPositions.get(lordPlanet);

        if (lordRashiIndex === undefined) {
            dashaSequence.push({ planet: NEPALI_RASHI[dashaRashiIndex], start: 'N/A', end: 'N/A' });
            continue; 
        }

        let count: number;
        if (vishamaPadaSigns.includes(dashaRashiIndex)) {
            count = (lordRashiIndex - dashaRashiIndex + 12) % 12;
        } else {
            count = (dashaRashiIndex - lordRashiIndex + 12) % 12;
        }

        let years = count === 0 ? 12 : count;

        const lordRashi = lordRashiIndex + 1;
        if (EXALTATION_RASHI[lordPlanet] === lordRashi) years += 1;
        if (DEBILITATION_RASHI[lordPlanet] === lordRashi) years -= 1;
        
        if (years > 12) years = 12;
        if (years < 1) years = 1;

        const startDate = new Date(currentDate);
        const endDate = addYearsExact(startDate, years);
        
        if (isNaN(endDate.getTime())) {
             dashaSequence.push({ planet: NEPALI_RASHI[dashaRashiIndex], start: startDate.toISOString(), end: 'N/A' });
            continue;
        }

        dashaSequence.push({
            planet: NEPALI_RASHI[dashaRashiIndex],
            start: startDate.toISOString(),
            end: endDate.toISOString(),
            subDashas: getJaiminiAntardashas(dashaRashiIndex, startDate, years)
        });

        currentDate = endDate;
    }

    return dashaSequence;
}

/* ---------------- DIVISIONAL CHARTS ---------------- */

export function getDivisionalChart(chartId: number, planets: PlanetInfo[], ascendantLongitude: number): DivisionalChart {
    const getDivisionalSign = (longitude: number) => {
        const signIndex = Math.floor(longitude / 30);
        const degreesInSign = longitude % 30;
        const divisionSize = 30 / chartId;
        const positionInDivision = Math.floor(degreesInSign / divisionSize);
        
        let newSignIndex: number;
        let newDegreesInSign = (longitude * chartId) % 30;

        switch (chartId) {
            case 3:
                const groupD3 = [0, 4, 8];
                newSignIndex = (signIndex + groupD3[positionInDivision]) % 12;
                break;
            case 4:
                newSignIndex = (signIndex + positionInDivision * 3) % 12;
                break;
            case 9:
                const groupD9 = Math.floor(signIndex / 4);
                const startSignD9 = [0, 4, 8][groupD9];
                newSignIndex = (startSignD9 + positionInDivision) % 12;
                break;
            case 10:
                const isOddSign = (signIndex % 2 === 0);
                const startSignD10 = isOddSign ? signIndex : (signIndex + 8) % 12;
                newSignIndex = (startSignD10 + positionInDivision) % 12;
                break;
            case 12:
                newSignIndex = (signIndex + positionInDivision) % 12;
                break;
            case 60:
                 const newLongitude60 = longitude * chartId;
                 newSignIndex = Math.floor(newLongitude60 / 30) % 12;
                 break;
            default:
                const genericNewLongitude = longitude * chartId;
                newSignIndex = Math.floor(genericNewLongitude / 30) % 12;
                newDegreesInSign = genericNewLongitude % 30;
                break;
        }

        return { sign: newSignIndex + 1, degreesInSign: newDegreesInSign };
    };

    const divisionalPlanets = planets.map(p => {
        const { sign, degreesInSign } = getDivisionalSign(p.eclipticLongitude);
        return {
            planet: p.planet,
            sign,
            degreesInSign,
            retrograde: p.retrograde,
            nakshatra: p.nakshatra,
            nakshatraPada: p.nakshatraPada
        };
    });
    
    const ascendantDivisional = getDivisionalSign(ascendantLongitude);

    return {
        name: `D${chartId}`,
        planets: divisionalPlanets,
        ascendant: { ...ascendantDivisional, nakshatra: '', nakshatraPada: 0 }
    };
}


/* ---------------- ASHTA KOOTA ---------------- */

export function getAshtaKoota(moonRashi: number, moonNakshatraIndex: number, ascendantSign: number): AshtaKootaValues {
    return {
        varna: NEPALI_VARNA[VARNA_MAP[moonRashi]],
        vasya: NEPALI_VASYA[VASYA_MAP[moonRashi]],
        yoni: NEPALI_YONI[YONI_MAP[moonNakshatraIndex]],
        gana: NEPALI_GANA[GANA_MAP[moonNakshatraIndex]],
        nadi: NEPALI_NADI[NADI_MAP[moonNakshatraIndex]],
        tatva: NEPALI_TATVA[TATVA_MAP[moonRashi]],
        paya: (moonRashi - 1) % 4 === 0 ? NEPALI_PAYA['Suvarna'] : (moonRashi - 2) % 4 === 0 ? NEPALI_PAYA['Rajat'] : (moonRashi - 3) % 4 === 0 ? NEPALI_PAYA['Tamra'] : NEPALI_PAYA['Loha'],
        rashiLord: NEPALI_PLANETS[RASHI_LORDS[moonRashi]],
        lagnesh: NEPALI_PLANETS[RASHI_LORDS[ascendantSign]]
    };
}


export function calculateGunaMilan(
  groom: KundaliResponse,
  bride: KundaliResponse
): {
  score: GunaMilanScore;
  conclusion: string;
  labels: {
    taraLabel: string;
    bhakootLabel: string;
    grahaMaitriLabel: string;
    varnaLabel: string;
    vasyaLabel: string;
    yoniLabel: string;
    ganaLabel: string;
    nadiLabel: string;
  };
} {
  const score: GunaMilanScore = {
    varna: 0,
    vasya: 0,
    tara: 0,
    yoni: 0,
    grahaMaitri: 0,
    gana: 0,
    bhakoot: 0,
    nadi: 0,
    total: 0,
  };

  // Varna
  const varnaOrder = { 'ब्राह्मण': 4, 'क्षत्रिय': 3, 'वैश्य': 2, 'शूद्र': 1 };
  score.varna =
    varnaOrder[groom.ashtaKoota.varna as keyof typeof varnaOrder] >=
    varnaOrder[bride.ashtaKoota.varna as keyof typeof varnaOrder]
      ? 1
      : 0;
  const varnaLabel = `अनुकूलता: ${score.varna === 1 ? 'अनुकूल' : 'कम अनुकूल'}`;

  // Vasya
  const groomVasya = VASYA_MAP[groom.planets.find(p => p.planet === 'MOON')!.rashi];
  const brideVasya = VASYA_MAP[bride.planets.find(p => p.planet === 'MOON')!.rashi];

let vasyaLabel: string;
if (groomVasya === brideVasya) {
  score.vasya = 2; // full points when same
  vasyaLabel = `समान वश्य`;
} else if (
  (groomVasya === 'Vanachara' && brideVasya === 'Chatushpada') ||
  (groomVasya === 'Dwipada' && brideVasya !== 'Jalachara')
) {
  score.vasya = 2;
  vasyaLabel = `अनुकूल वश्य `;
} else if (groomVasya === 'Jalachara' && brideVasya === 'Dwipada') {
  score.vasya = 0;
  vasyaLabel = `असंगत वश्य`;
} else {
  score.vasya = 0.5;
  vasyaLabel = `आंशिक वश्य `;
}

  // Tara
  const groomNak = groom.nakshatra.index;
  const brideNak = bride.nakshatra.index;
  const taraIndex = ((brideNak - groomNak) % 9 + 9) % 9;
  score.tara = TARA_POINTS[taraIndex] ?? 0;
  const taraLabel = TARA_LABELS[taraIndex];

  // Yoni
  const groomYoniKey = Object.keys(NEPALI_YONI).find(
  key => NEPALI_YONI[key] === groom.ashtaKoota.yoni
) as keyof typeof YONI_COMPATIBILITY;

const brideYoniKey = Object.keys(NEPALI_YONI).find(
  key => NEPALI_YONI[key] === bride.ashtaKoota.yoni
) as keyof typeof YONI_COMPATIBILITY;

let yoniLabel = `${groom.ashtaKoota.yoni} ⇔ ${bride.ashtaKoota.yoni}`;
if (groomYoniKey && brideYoniKey) {
  const yoniPoints = YONI_COMPATIBILITY[groomYoniKey][brideYoniKey] ?? 0;
  score.yoni = yoniPoints;

  // Map points to description
  let relationDesc = '';
  if (yoniPoints >= 4) relationDesc = 'अत्यन्त अनुकूल';
  else if (yoniPoints >= 2) relationDesc = 'अनुकूल';
  else if (yoniPoints === 1) relationDesc = 'कम अनुकूल';
  else relationDesc = 'असंगत';

  yoniLabel = `${relationDesc}`;
}


  // Graha Maitri
  const groomLordKey = Object.keys(NEPALI_PLANETS).find(key => NEPALI_PLANETS[key] === groom.ashtaKoota.rashiLord)!;
  const brideLordKey = Object.keys(NEPALI_PLANETS).find(key => NEPALI_PLANETS[key] === bride.ashtaKoota.rashiLord)!;
  const relGB = GRAHA_MAITRI[groomLordKey][brideLordKey];
  const relBG = GRAHA_MAITRI[brideLordKey][groomLordKey];
  const relToPoints = (rel: string) =>
  rel === 'मित्र' ? 5 : rel === 'तटस्थ' ? 4 : 0.5;

const pointsGB = relToPoints(relGB);
const pointsBG = relToPoints(relBG);
score.grahaMaitri = Math.min(pointsGB, pointsBG);

// Map points back to a descriptive label
let effectiveLabel = '';
if (score.grahaMaitri === 5) effectiveLabel = 'मित्र';
else if (score.grahaMaitri === 4) effectiveLabel = 'तटस्थ';
else effectiveLabel = 'शत्रु';

// Build final label string
const grahaMaitriLabel =
  relGB === relBG
    ? relGB
    : `${effectiveLabel} (ग्रह दृष्टि: ${relGB} ⇔ ${relBG})`;


  // Gana
  const groomGana = groom.ashtaKoota.gana;
  const brideGana = bride.ashtaKoota.gana;
  if (groomGana === brideGana) score.gana = 6;
  else if (
    (groomGana === 'देव' && brideGana === 'मनुष्य') ||
    (groomGana === 'मनुष्य' && brideGana === 'देव')
  ) score.gana = 6;
  else if (
    (groomGana === 'देव' && brideGana === 'राक्षस') ||
    (groomGana === 'राक्षस' && brideGana === 'देव')
  ) score.gana = 1;
  else score.gana = 0;
 const groomGanaDesc = GANA_LABELS[groomGana] ?? groomGana;
const brideGanaDesc = GANA_LABELS[brideGana] ?? brideGana;

let ganaLabel: string;
if (groomGana === brideGana) {
  score.gana = 6;
  ganaLabel = `समान गण (${groomGanaDesc})`;
} else if (
  (groomGana === 'देव' && brideGana === 'मनुष्य') ||
  (groomGana === 'मनुष्य' && brideGana === 'देव')
) {
  score.gana = 6;
  ganaLabel = `अनुकूल गण (${groomGanaDesc} ⇔ ${brideGanaDesc})`;
} else if (
  (groomGana === 'देव' && brideGana === 'राक्षस') ||
  (groomGana === 'राक्षस' && brideGana === 'देव')
) {
  score.gana = 1;
  ganaLabel = `असंगत गण (${groomGanaDesc} ⇔ ${brideGanaDesc})`;
} else {
  score.gana = 0;
  ganaLabel = `असंगत गण (${groomGanaDesc} ⇔ ${brideGanaDesc})`;
}


  // Bhakoot
  const groomMoonRashi = groom.planets.find(p => p.planet === 'MOON')!.rashi;
const brideMoonRashi = bride.planets.find(p => p.planet === 'MOON')!.rashi;
const dist = ((brideMoonRashi - groomMoonRashi) % 12 + 12) % 12;

let bhakootLabel: string;
let bhakootPoints: number;

switch (dist) {
  case 1:
  case 11:
    bhakootLabel = 'अति शुभ';
    bhakootPoints = 7;
    break;
  case 3:
  case 10:
    bhakootLabel = 'शुभ';
    bhakootPoints = 6;
    break;
  case 4:
  case 7:
    bhakootLabel = 'मध्यम शुभ';
    bhakootPoints = 5;
    break;
  case 6:
  case 8:
    bhakootLabel = 'अशुभ';
    bhakootPoints = 2;
    break;
  case 2:
  case 5:
  case 9:
  case 12:
    bhakootLabel = 'अति अशुभ';
    bhakootPoints = 0;
    break;
  default:
    bhakootLabel = 'अशुभ';
    bhakootPoints = 0;
}

score.bhakoot = bhakootPoints;


  // Nadi
score.nadi = groom.ashtaKoota.nadi === bride.ashtaKoota.nadi ? 0 : 8;

const groomNadiDesc = NADI_LABELS[groom.ashtaKoota.nadi] ?? '';
const brideNadiDesc = NADI_LABELS[bride.ashtaKoota.nadi] ?? '';

const nadiLabel =
  groom.ashtaKoota.nadi === bride.ashtaKoota.nadi
    ? `समान नाड़ी (${groomNadiDesc})`
    : `फरक नाड़ी (${groomNadiDesc} ⇔ ${brideNadiDesc})`;

  // Total
  score.total = Object.values(score).reduce((a, b) => a + b);
  score.total = Math.round(score.total * 2) / 2;

  let conclusion = `कुल ${toDevanagari(score.total)}/३६ गुण मिलान भएको छ। `;
  if (score.total >= 28) conclusion += 'यो अति उत्तम मिलान हो।';
  else if (score.total >= 24) conclusion += 'यो उत्तम मिलान हो।';
  else if (score.total >= 18) conclusion += 'यो मध्यम मिलान हो, विवाह गर्न सकिन्छ।';
  else conclusion += 'यो मिलान विवाहको लागि उपयुक्त मानिदैन।';

  return {
    score,
    conclusion,
    labels: {
      taraLabel,
      bhakootLabel,
      grahaMaitriLabel,
      varnaLabel,
      vasyaLabel,
      yoniLabel,
      ganaLabel,
      nadiLabel
    }
  };
}
