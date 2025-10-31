export const NEPALI_LABELS = {
  home: "मुख्य पृष्ठ",
  converter: "मिति रूपान्तरण",
  about: "नेपडेट बारे",
  kundali: "कुण्डली",
  sourceCode: "श्रोत कोड",
  installApp: "एप स्थापना गर्नुहोस्",
  openApp: "एप खोल्नुहोस्",
  darkMode: "अँध्यारो मोड",
  lightMode: "उज्यालो मोड",
  project: "नेपडेट क्यालेन्डर प्रोजेक्ट",
  mainTitle: "जन्म कुण्डली",
  Nepdate_calendar: "नेपडेट क्यालेन्डर",
  Software_name: "नेपडेट ज्योतिष",
  subTitle: "वैदिक ज्योतिष सफ्टवेयर",
  birthDetails: "जन्म विवरण",
  name: "नाम",
  namePlaceholder: "नाम",
  dateAndTime: "जन्म मिति र समय",
  location: "जन्म स्थान",
  latitude: "अक्षांश",
  longitude: "देशान्तर",
  timeZone: "समय क्षेत्र",
  calculate: "कुण्डली बनाउनुहोस्",
  calculating: "गणना गर्दै...",
  calculationError: "गणनामा त्रुटि भयो",
  unexpectedError: "एक अप्रत्याशित त्रुटि भयो। कृपया फेरि प्रयास गर्नुहोस्।",
  enterDetailsPrompt: "कृपया आफ्नो जन्म विवरण प्रविष्ट गर्नुहोस् र कुण्डली हेर्नुहोस्।",
  kundaliOf: (name: string) => `${name} को जन्म कुण्डली`,
  returnToForm: "फर्ममा फर्कनुहोस्",
  returnTomain: "मुख्य पृष्ठमा फर्कनुहोस्",
  downloadKundali: "कुण्डली डाउनलोड गर्नुहोस्",
  mahaDasha_clickToExpand: "महादशा",
  antarDasha_clickToExpand: "अन्तर्दशा",
  exportSVG: "SVG निर्यात गर्नुहोस्",
  exportPNG: "PNG निर्यात गर्नुहोस्",
  print: "प्रिन्ट गर्नुहोस्",
  rashiChart: "राशि(जन्म लग्न) कुंडली (D1)",
  chandraChart: "चन्द्र लग्न कुंडली",
  navamsaChart: "नवांश कुंडली (D9)",
  dashamsaChart: "दशांश कुंडली (D10)",
  horaChart: "होरा कुंडली (D2)",
  saptamsaChart: "सप्तांश कुंडली (D7)",
  planetaryPositions: "ग्रह स्थिति",
  planet: "ग्रह",
  rashi: "राशि",
  degrees: "अंश",
  nakshatra: "नक्षत्र",
  pada: "पद",
  retrograde: "वक्री",
  ascendantShort: "ल",
  generalInfo: "सामान्य जानकारी",
  moonSign: "चन्द्र राशि",
  sunSign: "सूर्य राशि",
  lagna: "लग्न",
  birthNakshatra: "जन्म नक्षत्र",
  tithi: "तिथि",
  yoga: "योग",
  karana: "करण",
  dashaPeriods: "विंशोत्तरी दशा",
  mahaDasha: "महादशा",
  antarDasha: "अन्तरदशा",
  startsOn: "सुरु",
  endsOn: "अन्त्य",
  calculationDetails: "गणना विवरण",
  backend: "गणना प्रणाली",
  ayanamsa: "अयनांश",
  houseSystem: "भाव प्रणाली",
  birthDateBS: "जन्म मिति (वि.सं.)",
  birthDateAD: "जन्म मिति (ई.सं.)",
  birthTime: "जन्म समय",
  suggestedSyllable: "नामको पहिलो अक्षर",
  dayOfWeek: "बार",
  dateOfBirth: "जन्म मिति",
  birthTimeLabel: "जन्म समय",
  relation: "नाता",
  birthPlace: "जन्म स्थान",
  outsideNepal: "नेपाल बाहिर",
  selectOnMap: "नक्सामा छान्नुहोस्",
  TIMEZONE_OFFSETS: "समय क्षेत्र अफसेटहरू",
  selectLocation: "स्थान छान्नुहोस्",
  enterManually: "स्थान खोज्नुहोस्(नेपाल बाहिर पनि)",
  selectFromList: "सूचीबाट छान्नुहोस्(नेपाल मात्र)",
  timezone: "समय क्षेत्र छान्नुहोस्",
  baktoSearchLocation: "नेपाली स्थान खोज्नुहोस्",
  selectLocationConform: "स्थान पुष्टि गर्नुहोस्",
  selectedLocation: "चयनित स्थान",
  year: "वर्ष",
  month: "महिना",
  day: "गते",
  hour: "घण्टा",
  minute: "मिनेट",
  second: "सेकेन्ड",
  bs: "वि.सं.",
  ad: "ई.सं.",
  bikramsambat: "विक्रम संवत",
  gregorian: "ग्रेगोरियन",
  am: "बिहान",
  pm: "बेलुका",
  self: "स्वयं",
  locationPlaceholder: "स्थान छान्नुहोस्",
  latitudeShort: "अक्षांश",
  longitudeShort: "देशान्तर",
  searchLocation: "स्थान खोज्नुहोस्(जिल्ला वा शहर)...",
  close: "बन्द गर्नुहोस्"
};

export const NEPALI_PLANETS: { [key: string]: string } = {
  SUN: "सूर्य",
  MOON: "चन्द्र",
  MARS: "मंगल",
  MERCURY: "बुध",
  JUPITER: "बृहस्पति",
  VENUS: "शुक्र",
  SATURN: "शनि",
  RAHU: "राहु",
  KETU: "केतु",
  ASCENDANT: "लग्न",
};


// Mapping of Rashi number (1–12) to its lord planet key
export const RASHI_LORDS: Record<number, string> = {
  1: 'MARS',     // Aries (मेष)
  2: 'VENUS',    // Taurus (वृष)
  3: 'MERCURY',  // Gemini (मिथुन)
  4: 'MOON',     // Cancer (कर्कट)
  5: 'SUN',      // Leo (सिंह)
  6: 'MERCURY',  // Virgo (कन्या)
  7: 'VENUS',    // Libra (तुला)
  8: 'MARS',     // Scorpio (वृश्चिक)
  9: 'JUPITER',  // Sagittarius (धनु)
  10: 'SATURN',  // Capricorn (मकर)
  11: 'SATURN',  // Aquarius (कुम्भ)
  12: 'JUPITER', // Pisces (मीन)
};


export const NEPALI_PLANET_ABBREVIATIONS: { [key: string]: string } = {
  SUN: "सू.",
  MOON: "चं.",
  MARS: "मं.",
  MERCURY: "बु.",
  JUPITER: "बृ.",
  VENUS: "शु.",
  SATURN: "श.",
  RAHU: "रा.",
  KETU: "के.",
  ASCENDANT: "ल.",
};

export const NAKSHATRA_SYLLABLES: { name: string, syllables: [string, string, string, string] }[] = [
  { name: 'अश्विनी', syllables: ['चु', 'चे', 'चो', 'ला'] },
  { name: 'भरणी', syllables: ['लि', 'लु', 'ले', 'लो'] },
  { name: 'कृत्तिका', syllables: ['अ', 'इ', 'उ', 'ए'] },
  { name: 'रोहिणी', syllables: ['ओ', 'वा', 'वि', 'वु'] },
  { name: 'मृगशिरा', syllables: ['वे', 'वो', 'का', 'कि'] },
  { name: 'आर्द्रा', syllables: ['कु', 'घ', 'ङ', 'छ'] },
  { name: 'पुनर्वसु', syllables: ['के', 'को', 'हा', 'हि'] },
  { name: 'पुष्य', syllables: ['हु', 'हे', 'हो', 'डा'] },
  { name: 'अश्लेषा', syllables: ['डि', 'डु', 'डे', 'डो'] },
  { name: 'मघा', syllables: ['मा', 'मि', 'मु', 'मे'] },
  { name: 'पूर्व फाल्गुनी', syllables: ['मो', 'टा', 'टि', 'टु'] },
  { name: 'उत्तर फाल्गुनी', syllables: ['टे', 'टो', 'पा', 'पि'] },
  { name: 'हस्त', syllables: ['पु', 'ष', 'ण', 'ठ'] },
  { name: 'चित्रा', syllables: ['पे', 'पो', 'रा', 'रि'] },
  { name: 'स्वाती', syllables: ['रु', 'रे', 'रो', 'ता'] },
  { name: 'विशाखा', syllables: ['ति', 'तु', 'ते', 'तो'] },
  { name: 'अनुराधा', syllables: ['ना', 'नि', 'नु', 'ने'] },
  { name: 'ज्येष्ठा', syllables: ['नो', 'या', 'यि', 'यु'] },
  { name: 'मूल', syllables: ['ये', 'यो', 'भा', 'भि'] },
  { name: 'पूर्वाषाढा', syllables: ['भु', 'धा', 'फा', 'ढा'] },
  { name: 'उत्तराषाढा', syllables: ['भे', 'भो', 'जा', 'जि'] },
  { name: 'श्रवण', syllables: ['खि', 'खु', 'खे', 'खो'] },
  { name: 'धनिष्ठा', syllables: ['गा', 'गि', 'गु', 'गे'] },
  { name: 'शतभिषा', syllables: ['गो', 'सा', 'सि', 'सु'] },
  { name: 'पूर्व भाद्रपद', syllables: ['से', 'सो', 'दा', 'दि'] },
  { name: 'उत्तर भाद्रपद', syllables: ['दु', 'थ', 'झ', 'ञ'] },
  { name: 'रेवती', syllables: ['दे', 'दो', 'चा', 'चि'] },
];

export const NEPALI_NAKSHATRA_ABBREVIATIONS_LIST: string[] = [
  "अश्.",    // अश्विनी
  "भ.",    // भरणी
  "कृ.",   // कृत्तिका
  "रो.",   // रोहिणी
  "मृ.",   // मृगशिरा
  "आ.",    // आर्द्रा
  "पुन.",   // पुनर्वसु
  "पुष्.",   // पुष्य
  "अश्ले.",    // अश्लेषा
  "म.",    // मघा
  "पू.फा.",// पूर्व फाल्गुनी
  "उ.फा.", // उत्तर फाल्गुनी
  "ह.",    // हस्त
  "च.",    // चित्रा
  "स्वा.",  // स्वाती
  "वि.",   // विशाखा
  "अनु.",  // अनुराधा
  "ज्ये.", // ज्येष्ठा
  "मू.",   // मूल
  "पू.आ.", // पूर्वाषाढा
  "उ.आ.",  // उत्तराषाढा
  "श्र.",  // श्रवण
  "ध.",    // धनिष्ठा
  "श.",    // शतभिषा
  "पू.भा.",// पूर्व भाद्रपद
  "उ.भा.", // उत्तर भाद्रपद
  "रे.",   // रेवती
];

export const NEPALI_NAKSHATRA_ABBREVIATIONS: Record<string, string> =
  Object.fromEntries(
    NAKSHATRA_SYLLABLES.map((n, i) => [n.name, NEPALI_NAKSHATRA_ABBREVIATIONS_LIST[i]])
  );


export const NEPALI_RASHI: string[] = [
  "मेष", "वृष", "मिथुन", "कर्कट", "सिंह", "कन्या",
  "तुला", "वृश्चिक", "धनु", "मकर", "कुम्भ", "मीन"
];

export const NEPALI_NUMERALS = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

export const NEPALI_BS_MONTHS: string[] = [
  "बैशाख", "जेठ", "असार", "श्रावण", "भदौ", "आश्विन", "कार्तिक", "मंसिर", "पौष", "माघ", "फाल्गुन", "चैत्र"
];

export const NEPALI_BS_MONTHSShort = [
  'बै.', 'ज्ये.', 'असा.', 'श्रा.', 'भाद्र.', 'आश्वी.', 'का.', 'मं.', 'पौ.', 'मा.', 'फाल.', 'चै.'
];

export const NEPALI_AD_MONTHS: string[] = [
  "जनवरी", "फेब्रुअरी", "मार्च", "अप्रिल", "मे", "जुन", "जुलाई", "अगस्ट", "सेप्टेम्बर", "अक्टोबर", "नोभेम्बर", "डिसेम्बर"
];

export const GREGORIAN_MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
export const GREGORIAN_MONTHS_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];



export const NEPALI_WEEKDAYS: string[] = ['आइतबार', 'सोमबार', 'मंगलबार', 'बुधबार', 'बिहिबार', 'शुक्रबार', 'शनिबार'];
export const NEPALI_WEEKDAYS_SHORT: string[] = ["आइत", "सोम", "मङ्गल", "बुध", "बिही", "शुक्र", "शनि"];
export const GREGORIAN_WEEKDAYS_SHORT: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const NEPALI_NAKSHATRA: string[] = NAKSHATRA_SYLLABLES.map(n => n.name);

export const NEPALI_YOGA: string[] = [
  "विष्कुम्भ", "प्रीति", "आयुष्मान", "सौभाग्य", "शोभन", "अतिगण्ड", "सुकर्मा", "धृति", "शूल", "गण्ड", "वृद्धि", "ध्रुव", "व्याघात", "हर्षण", "वज्र", "सिद्धि", "व्यतीपात", "वरीयान्", "परिघ", "शिव", "सिद्ध", "साध्य", "शुभ", "शुक्ल", "ब्रह्म", "इन्द्र", "वैधृति"
];

export const NEPALI_KARANA: string[] = [
  "किंस्तुघ्न", "बव", "बालव", "कौलव", "तैतिल", "गर", "वणिज", "विष्टि", "शकुनि", "चतुष्पाद", "नाग"
];

export const BACKEND_NAME = "Nepdate-AstroCalc";
