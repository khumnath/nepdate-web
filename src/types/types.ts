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
    ayanamsaString: string;
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

export interface BhadraInfo {
  isActive: boolean;
  residence: string;
  status: string;
  isHarmful: boolean;
}

export type ContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string; className?: string }
  | { type: 'verse'; text: string; translation?: string }
  | { type: 'image'; src: string; alt?: string; caption?: string }
  | { type: 'list'; items: string[] };

export interface SectionItem {
  id: string;
  title: string;
  subtitle?: string;
  content: ContentBlock[];
  eventDate?: EventDate;
  tags?: string[];
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  eventDate?: EventDate;
}

export interface EventDate {
  type: 'BS' | 'LUNAR' | 'AD';
  month: number; // 1-12
  day?: number;
  tithi?: number;
  paksha?: 'shukla' | 'krishna';
  endDate?: EventDate; // Recursive for simple range definition
  approxBsDay?: number;
}

export type MenuStyle = 'slide' | 'tabs';
export type DesktopLayoutStyle = 'topbar' | 'sidebar';
import type { MENU_ITEMS } from '../constants/menu';
export type ActiveView = (typeof MENU_ITEMS)[number]['key'] | 'blog-detail' | 'day-detail';

export type SavedKundaliEntry = SavedIndividual | SavedComparison;
