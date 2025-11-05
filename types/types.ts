export interface Location {
  name: string;
  romanization: string;
  latitude: number;
  longitude: number;
  zoneId: string;
  offset: number;
}

// --- FILE: ../types/jyotish_types.ts ---
// (Showing only the relevant type to be modified)

export interface KundaliRequest {
  name: string;
  datetime: string;      // e.g., "2000-03-28T22:00:00"
  latitude: number;
  longitude: number;
  zoneId: string;        // e.g., "Asia/Kathmandu"
  offset: number;        // <-- ADD THIS LINE (e.g., 5.75 for Nepal)
  options: {
    zodiac: 'SIDEREAL';
    ayanamsa: 'LAHIRI';
    houseSystem: 'WHOLE_SIGN';
    divisionalCharts: number[];
    dashaSystem: 'VIMSHOTTARI';
  };
}

// ... other types like KundaliResponse, PlanetInfo, etc.

// Fix: Add and export TimedPanchangaElement interface to resolve import error in kundaliService.ts.
export interface TimedPanchangaElement {
  name: string;
  start: string;
  end: string;
}

export interface PlanetInfo {
  planet: string;
  eclipticLongitude: number;
  eclipticLatitude: number;
  speedLon: number;
  rashi: number;
  degreesInSign: number;
  retrograde: boolean;
  nakshatra: string;
  nakshatraPada: number;
}

export interface HouseInfo {
  houseNumber: number;
  cuspLongitude: number;
  sign: number;
}

export interface DashaInfo {
  planet: string;
  start: string;
  end: string;
  subDashas?: DashaInfo[];
}

export interface AshtaKootaValues {
  varna: string;
  vasya: string;
  yoni: string;
  gana: string;
  nadi: string;
  tatva: string;
  paya: string;
  rashiLord: string;
  lagnesh: string;
}

export interface DivisionalChart {
  name: string;
  planets: {
    planet: string;
    sign: number;
    degreesInSign: number;
    retrograde: boolean;
    nakshatra: string;
    nakshatraPada: number;
  }[];
  ascendant: {
    sign: number;
    degreesInSign: number;
    nakshatra: string;
    nakshatraPada: number;
  };
}




export interface KundaliResponse {
  birthDetails: {
    name: string;
    datetime: string;
    zoneId: string;
    offset: number;
    latitude: number;
    longitude: number;
  };
  calculationMeta: {
    backend: string;
    ayanamsa: string;
    ayanamsaValue: number;
    zodiac: string;
    houseSystem: string;
    calculationUtc: string;
    version: string;
  };
  sunRise: string;
  sunSet: string;
  planets: PlanetInfo[];
  ascendant: {
    longitude: number;
    sign: number;
    degreesInSign: number;
    nakshatra: string;
    nakshatraPada: number;
  };
  houses: HouseInfo[];
  nakshatra: {
    index: number;
    pada: number;
    nameNepali: string;
    start: string;
    end: string;
    padaStart: string;
    padaEnd: string;
  };
  tithi: {
    tithiNumber: number;
    paksha: string;
    start: string;
    end: string;
  };
  dashaSequence: DashaInfo[];
  tribhagiDasha: DashaInfo[];
  yoginiDasha: DashaInfo[];
  ashtottariDasha: DashaInfo[];
  jaiminiDasha: DashaInfo[];
  divisionalCharts: DivisionalChart[];
  yoga: TimedPanchangaElement;
  karana: TimedPanchangaElement;
  ashtaKoota: AshtaKootaValues;
}

export interface GunaMilanScore {
    varna: number;
    vasya: number;
    tara: number;
    yoni: number;
    grahaMaitri: number;
    gana: number;
    bhakoot: number;
    nadi: number;
    total: number;
}

export interface ComparisonResult {
    groom: KundaliResponse;
    bride: KundaliResponse;
    score: GunaMilanScore;
    conclusion: string;
}


export interface ServiceError {
  error: string;
}

export type BikramDate = {
  year: number;
  monthIndex: number;
  day: number;
  monthName: string;
  isComputed: boolean;
};