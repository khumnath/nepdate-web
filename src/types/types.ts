export interface Location {
  name: string;
  romanization: string;
  latitude: number;
  longitude: number;
  zoneId: string;
  offset: number;
}

export interface KundaliRequest {
  name: string;
  datetime: string;
  latitude: number;
  longitude: number;
  zoneId: string;
  offset: number;
  options: {
    zodiac: 'SIDEREAL';
    ayanamsa: 'LAHIRI';
    houseSystem: 'WHOLE_SIGN';
    divisionalCharts: number[];
    dashaSystem: 'VIMSHOTTARI';
  };
}

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
  tithis: TimedPanchangaElement[];
  nakshatras: TimedPanchangaElement[];
  yogas: TimedPanchangaElement[];
  karanas: TimedPanchangaElement[];
}

export interface TimedPanchangaElement {
  name: string;
  start: string;
  end: string;
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

export interface DefaultFormValues {
  name: string;
  dateSystem: 'BS' | 'AD';
  bsYear: number;
  bsMonth: number;
  bsDay: number;
  hour: number;
  minute: number;
  second: number;
  period: 'AM' | 'PM';
  location: Location;
}

export type SavedIndividual = {
  id: number;
  type: 'individual';
  name: string;
  timestamp: string;
  data: KundaliRequest;
  defaultValues: DefaultFormValues;
};

export type SavedComparison = {
  id: number;
  type: 'comparison';
  groomName: string;
  brideName: string;
  timestamp: string;
  data: { groom: KundaliRequest; bride: KundaliRequest; };
  defaultValues: { groom: DefaultFormValues; bride: DefaultFormValues; };
};

export type MenuStyle = 'slide' | 'tabs';
export type DesktopLayoutStyle = 'topbar' | 'sidebar';
export type ActiveView = 'calendar' | 'converter' | 'kundali' | 'settings';

export type SavedKundaliEntry = SavedIndividual | SavedComparison;
