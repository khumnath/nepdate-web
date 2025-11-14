import { toDevanagari } from "../lib/utils/lib";

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
  settings: "सेटिङ",
  theme: 'थीम',
  mobileNavStyle: 'मोबाइल मेनु स्टाइल',
  desktopNavStyle: 'डेस्क्टप मेनु स्टाइल',
  desktopNavDesc: 'मनपर्ने मेनु स्टाइल छन्नुहोस।',
  mobileNavDesc: 'आफ्नो मन पर्ने मेनु छान्नुहोस।.',
  slideMenu: 'स्लाइड मेनु',
  tabBar: 'ट्याब मेनु',
  resetMessage: "रिसेट गर्नुहोस्",
  reset: "रिसेट",
  resetMessageDesc: "यसले सबै सुरक्षित गरिएका प्राथमिकताहरू खाली गर्नेछ र पूर्वनिर्धारित लेआउट र थीम पुनर्स्थापित गर्नेछ।",
  project: "नेपडेट क्यालेन्डर प्रोजेक्ट",
  mainTitle: "जन्म कुण्डली",
  Nepdate_calendar: "नेपडेट क्यालेन्डर",
  Software_name: "नेपडेट ज्योतिष",
  Software_version: `${__APP_VERSION__}`,
  subTitle: "वैदिक ज्योतिष सफ्टवेयर",
  tithiWarning: "⚠️पञ्चाङ्ग सुर्योदयकालीन समयको देखाईएको छ। बिस्तृत रुपमा हेर्न कुण्डली हेर्नुहोस।",
  tithiWarningEn: " ⚠️tithis are calculated at sunrise. If a tithi spans multiple days, it is always shown on the day it falls at sunrise.",
  birthDetails: "जन्म विवरण",
  astrologicalDetails: "ज्योतिषीय विवरण",
  gunaMilanDetails: "गुण मिलान विवरण",
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
  printedDate: "मुद्रित मिती",
  returnToForm: "फर्ममा फर्कनुहोस्",
  returnTomain: "मुख्य पृष्ठमा फर्कनुहोस्",
  downloadKundali: "कुण्डली डाउनलोड गर्नुहोस्",
  mahaDasha_clickToExpand: "महादशा",
  antarDasha_clickToExpand: "अन्तरदशा",
  exportSVG: "SVG निर्यात गर्नुहोस्",
  exportPNG: "PNG निर्यात गर्नुहोस्",
  print: "प्रिन्ट गर्नुहोस्",
  rashiChart: "राशि(जन्म लग्न) कुंडली (D1)",
  chandraChart: "चन्द्र लग्न कुंडली",
  navamsaChart: "नवांश कुंडली (D9)",
  dashamsaChart: "दशांश कुंडली (D10)",
  horaChart: "होरा कुंडली (D2)",
  saptamsaChart: "सप्तांश कुंडली (D7)",
  drekkanaChart: "द्रेष्काण कुण्डली (D3)",
  dwadamshaChart: "द्वादशांश कुण्डली (D12)",
  chaturthamshaChart: "चतुर्थांश कुण्डली (D4)",
  shashtiamshaChart: "षष्ट्यंश कुण्डली (D60)",
  showMoreCharts: "थप कुण्डलीहरू देखाउनुहोस्",
  showLessCharts: "कम देखाउनुहोस्",
  planetaryPositions: "ग्रह स्थिति",
  planet: "ग्रह",
  rashi: "राशि",
  degrees: "अंश",
  nakshatra: "नक्षत्र",
  pada: "पद",
  retrograde: "वक्री",
  ascendantShort: "ल",
  moonSign: "चन्द्र राशि",
  sunSign: "सूर्य राशि",
  lagna: "लग्न",
  lagnesh: "लग्नेश",
  birthNakshatra: "जन्म नक्षत्र",
  tithi: "तिथि",
  yoga: "योग",
  karana: "करण",
  dashaPeriods: "विंशोत्तरी दशा",
  tribhagiDasha: "त्रिभागी दशा",
  yoginiDasha: "योगिनी दशा",
  ashtottariDasha: "अष्टोत्तरी दशा",
  jaiminiDasha: "जैमिनी चर दशा",
  jaiminiProportionalNote: "अन्तरदशा अवधि समानुपातिक प्रणालीमा आधारित छ।",
  mahaDasha: "महादशा",
  antarDasha: "अन्तरदशा",
  startsOn: "प्रारम्भ :",
  endsOn: "अन्त्य :",
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
  enterManually: "स्थान म्यानुअल रूपमा प्रविष्ट गर्नुहोस्",
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
  today: "आज",
  events: "कार्यक्रम हरु",
  gregorian: "ग्रेगोरियन",
  am: "बिहान",
  pm: "बेलुका",
  self: "स्वयं",
  locationPlaceholder: "स्थान छान्नुहोस्",
  latitudeShort: "अक्षांश",
  longitudeShort: "देशान्तर",
  searchLocation: "स्थान खोज्नुहोस्(जिल्ला वा शहर)...",
  close: "बन्द गर्नुहोस्",
  varna: "वर्ण",
  vasya: "वश्य",
  yoni: "योनि",
  grahaMaitri: "ग्रह मैत्री",
  kootaType: "प्रकार / सम्बन्ध",
  gana: "गण",
  bhakoot: "भकूट",
  nadi: "नाडी",
  rashiLord: "राशि स्वामी",
  tatva: "तत्व",
  paya: "पाय",
  individual: "व्यक्तिगत कुण्डली",
  comparison: "गुण मिलान",
  groom: "वर",
  bride: "वधु",
  groomDetails: "वरको विवरण",
  brideDetails: "वधुको विवरण",
  calculateComparison: "गुण मिलान गर्नुहोस्",
  gunaMilanTableTitle: "अष्टकूट गुण मिलान",
  koota: "कूट",
  maxPoints: "अधिकतम अंक",
  obtainedPoints: "प्राप्त अंक",
  tara: "तारा",
  totalPoints: "कुल योग",
  conclusion: "निष्कर्ष",
  kundaliDisclaimer: "ⓘ प्रयोग गरिएको गणित, वास्तबिक जन्म समय र स्थान अनुसार कुण्डली फरक पर्न सक्छ।जन्मपत्रीका विश्लेषण गर्नु अगाडि सम्बन्धित विशेषज्ञ सङ्ग परामर्श गर्नुहोस।",
  mobilePrintHint: "मोबाइलमा प्रिन्ट गर्न समस्या भएमा, ब्राउजरको 'Share' मेनुमा गएर 'Print' विकल्प प्रयोग गर्नुहोस्।",
  searchOrSelectLocation: "स्थान खोज्नुहोस् वा छान्नुहोस्",
  cantFindLocation: "स्थान भेटिएन?",
  enterManuallyOrMap: "नक्सा वा म्यानुअल प्रविष्टि",
  backToSearch: "खोजमा फर्कनुहोस्",
  locationSearchPlaceholder: "शहर वा जिल्लाको नाम लेख्नुहोस्...",
  dailyTimings: "दैनिक समय",
  sunrise: "सूर्योदय",
  sunset: "सूर्यास्त",
  moonrise: "चन्द्रोदय",
  moonset: "चन्द्रास्त",
  yesterdayFrom: "हिजो देखि",
  previousDayFrom: "अघिल्लो दिन देखि",
  subDashaPrintNote: "अन्तरदशाको विस्तृत विवरण हेर्नको लागि, कृपया वेब वा मोबाइल एप प्रयोग गर्नुहोस्।",
  resetToToday: "आज",
  invalidDateTitle: "अमान्य मिति",
  invalidDateMessage: (dateSystem: 'BS' | 'AD') => {
    const [min, max] = dateSystem === 'BS' ? [1960, 2210] : [1900, 2150];
    return `तपाईंले प्रविष्ट गर्नुभएको वर्ष अमान्य छ। वर्ष सीमा ${toDevanagari(min)} देखि ${toDevanagari(max)} सम्म मात्र हो। मिति आजको मितिमा रिसेट गरिएको छ। के तपाईं अगाडि बढ्न चाहनुहुन्छ?`;
  },
  proceed: "अगाडि बढ्नुहोस्",
  edit: "सम्पादन गर्नुहोस्",
  saved: "सुरक्षित",
  savedKundalis: "सुरक्षित कुण्डलीहरू",
  noSavedKundalis: "कुनै सुरक्षित कुण्डलीहरू भेटिएन।",
  load: "लोड गर्नुहोस्",
  delete: "हटाउनुहोस्",
  deleteConfirm: "के तपाईं यो कुण्डली हटाउन निश्चित हुनुहुन्छ?",
  savedOn: "सुरक्षित गरिएको:",
  view: "हेर्नुहोस्"
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
  Mangala: 'मङ्गला',
  Pingala: 'पिङ्गला',
  Dhanya: 'धान्या',
  Bhramari: 'भ्रामरी',
  Bhadrika: 'भद्रिका',
  Ulka: 'उल्का',
  Siddha: 'सिद्धा',
  Sankata: 'सङ्कटा'
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
  { name: 'पूर्वफाल्गुनी', syllables: ['मो', 'टा', 'टि', 'टु'] },
  { name: 'उत्तरफाल्गुनी', syllables: ['टे', 'टो', 'पा', 'पि'] },
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
  { name: 'पूर्वभाद्रपद', syllables: ['से', 'सो', 'दा', 'दि'] },
  { name: 'उत्तरभाद्रपद', syllables: ['दु', 'थ', 'झ', 'ञ'] },
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
export const GREGORIAN_WEEKDAYS = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
];
export const GREGORIAN_WEEKDAYS_SHORT: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const NEPALI_NAKSHATRA: string[] = NAKSHATRA_SYLLABLES.map(n => n.name);

export const NEPALI_YOGA: string[] = [
  "विष्कुम्भ", "प्रीति", "आयुष्मान", "सौभाग्य", "शोभन", "अतिगण्ड", "सुकर्मा", "धृति", "शूल", "गण्ड", "वृद्धि", "ध्रुव", "व्याघात", "हर्षण", "वज्र", "सिद्धि", "व्यतीपात", "वरीयान्", "परिघ", "शिव", "सिद्ध", "साध्य", "शुभ", "शुक्ल", "ब्रह्म", "इन्द्र", "वैधृति"
];

export const NEPALI_KARANA: string[] = [
  "किंस्तुघ्न", "बव", "बालव", "कौलव", "तैतिल", "गर", "वणिज", "विष्टि", "शकुनि", "चतुष्पाद", "नाग"
];

export const BACKEND_NAME = "Nepdate-AstroCalc";

export const VARNA_MAP: Record<number, string> = {
  1: 'Kshatriya', 4: 'Brahmin', 7: 'Shudra', 10: 'Vaishya',
  2: 'Vaishya', 5: 'Kshatriya', 8: 'Brahmin', 11: 'Shudra',
  3: 'Shudra', 6: 'Vaishya', 9: 'Kshatriya', 12: 'Brahmin'
};
export const NEPALI_VARNA: Record<string, string> = {
  'Brahmin': 'ब्राह्मण',
  'Kshatriya': 'क्षत्रिय',
  'Vaishya': 'वैश्य',
  'Shudra': 'शूद्र'
};

export const VASYA_MAP: Record<number, string> = {
  1: 'Chatushpada', 2: 'Chatushpada', 3: 'Dwipada', 4: 'Jalachara', 5: 'Vanachara',
  6: 'Dwipada', 7: 'Dwipada', 8: 'Keeta', 9: 'Dwipada', // Sagittarius is mixed, often considered Dwipada
  10: 'Chatushpada', 11: 'Dwipada', 12: 'Jalachara'
};

export const NEPALI_VASYA: Record<string, string> = {
  'Chatushpada': 'चतुष्पाद',
  'Dwipada': 'द्विपद',
  'Jalachara': 'जलचर',
  'Vanachara': 'वनचर',
  'Keeta': 'कीट'
};

// Yoni mapping based on Nakshatra index (0-26)
export const YONI_MAP: Record<number, string> = {
  0: 'Ashwa', 1: 'Gaja', 2: 'Mesha', 3: 'Sarpa', 4: 'Sarpa', 5: 'Shwana',
  6: 'Marjara', 7: 'Mesha', 8: 'Marjara', 9: 'Mushaka', 10: 'Mushaka', 11: 'Gau',
  12: 'Mahisha', 13: 'Vyaghra', 14: 'Mahisha', 15: 'Vyaghra', 16: 'Mriga', 17: 'Mriga',
  18: 'Shwana', 19: 'Vanara', 20: 'Nakula', 21: 'Vanara', 22: 'Simha', 23: 'Ashwa',
  24: 'Simha', 25: 'Gau', 26: 'Gaja'
};
export const NEPALI_YONI: Record<string, string> = {
  'Ashwa': 'अश्व', 'Gaja': 'गज', 'Mesha': 'मेष', 'Sarpa': 'सर्प', 'Shwana': 'श्वान',
  'Marjara': 'मार्जार', 'Mushaka': 'मूषक', 'Gau': 'गौ', 'Mahisha': 'महिष', 'Vyaghra': 'व्याघ्र',
  'Mriga': 'मृग', 'Vanara': 'वानर', 'Nakula': 'नकुल', 'Simha': 'सिंह'
};

// Gana mapping based on Nakshatra index (0-26)
export const GANA_MAP: Record<number, string> = {
  0: 'Deva', 1: 'Manushya', 2: 'Rakshasa', 3: 'Manushya', 4: 'Deva', 5: 'Manushya',
  6: 'Deva', 7: 'Deva', 8: 'Rakshasa', 9: 'Rakshasa', 10: 'Manushya', 11: 'Manushya',
  12: 'Deva', 13: 'Rakshasa', 14: 'Deva', 15: 'Rakshasa', 16: 'Deva', 17: 'Rakshasa',
  18: 'Rakshasa', 19: 'Manushya', 20: 'Manushya', 21: 'Deva', 22: 'Rakshasa', 23: 'Rakshasa',
  24: 'Manushya', 25: 'Manushya', 26: 'Deva'
};
export const NEPALI_GANA: Record<string, string> = {
  'Deva': 'देव',
  'Manushya': 'मनुष्य',
  'Rakshasa': 'राक्षस'
};

// Nadi mapping based on Nakshatra index (0-26)
export const NADI_MAP: Record<number, string> = {
  0: 'Adi', 1: 'Madhya', 2: 'Antya', 3: 'Antya', 4: 'Madhya', 5: 'Adi',
  6: 'Adi', 7: 'Madhya', 8: 'Antya', 9: 'Antya', 10: 'Madhya', 11: 'Adi',
  12: 'Adi', 13: 'Madhya', 14: 'Antya', 15: 'Antya', 16: 'Madhya', 17: 'Adi',
  18: 'Adi', 19: 'Madhya', 20: 'Antya', 21: 'Antya', 22: 'Madhya', 23: 'Adi',
  24: 'Adi', 25: 'Madhya', 26: 'Antya'
};
export const NEPALI_NADI: Record<string, string> = {
  'Adi': 'आदि',
  'Madhya': 'मध्य',
  'Antya': 'अन्त्य'
};

export const TARA_LABELS = [
  'जन्म',
  'संपत्',
  'विपत्',
  'क्षेम',
  'प्रत्यारी',
  'साधक',
  'वधक',
  'मित्र',
  'अति-मित्र'
] as const;

export const TARA_POINTS: number[] = [0, 3, 1, 3, 1, 2.5, 0, 2, 3];

export const GANA_LABELS: Record<string, string> = {
  देव: 'शान्त स्वभाव',
  मनुष्य: 'मिश्रित स्वभाव',
  राक्षस: 'उग्र स्वभाव',
};

export const NADI_LABELS: Record<string, string> = {
  आदि: 'वायु',
  मध्य: 'अग्नि',
  अन्त्य: 'जल',
};

// Tatva (Element) mapping based on Rashi number (1-12)
export const TATVA_MAP: Record<number, string> = {
  1: 'Agni', 2: 'Prithvi', 3: 'Vayu', 4: 'Jal',
  5: 'Agni', 6: 'Prithvi', 7: 'Vayu', 8: 'Jal',
  9: 'Agni', 10: 'Prithvi', 11: 'Vayu', 12: 'Jal'
};

export const NEPALI_TATVA: Record<string, string> = {
  'Agni': 'अग्नि',
  'Prithvi': 'पृथ्वी',
  'Vayu': 'वायु',
  'Jal': 'जल'
};

// Paya (Foot) Nepali Names
export const NEPALI_PAYA: Record<string, string> = {
  'Suvarna': 'सुवर्ण (सुन)',
  'Rajat': 'रजत (चाँदी)',
  'Tamra': 'ताम्र (तामा)',
  'Loha': 'लौह (फलाम)'
};

// Fix: Add GRAHA_MAITRI constant
export const GRAHA_MAITRI: Record<string, Record<string, 'Friend' | 'Neutral' | 'Enemy'>> = {
  SUN: { SUN: 'Friend', MOON: 'Friend', MARS: 'Friend', MERCURY: 'Neutral', JUPITER: 'Friend', VENUS: 'Enemy', SATURN: 'Enemy' },
  MOON: { SUN: 'Friend', MOON: 'Friend', MARS: 'Neutral', MERCURY: 'Friend', JUPITER: 'Neutral', VENUS: 'Neutral', SATURN: 'Neutral' },
  MARS: { SUN: 'Friend', MOON: 'Friend', MARS: 'Friend', MERCURY: 'Enemy', JUPITER: 'Friend', VENUS: 'Neutral', SATURN: 'Neutral' },
  MERCURY: { SUN: 'Friend', MOON: 'Enemy', MARS: 'Neutral', MERCURY: 'Friend', JUPITER: 'Neutral', VENUS: 'Friend', SATURN: 'Friend' },
  JUPITER: { SUN: 'Friend', MOON: 'Friend', MARS: 'Friend', MERCURY: 'Neutral', JUPITER: 'Friend', VENUS: 'Enemy', SATURN: 'Neutral' },
  VENUS: { SUN: 'Neutral', MOON: 'Enemy', MARS: 'Neutral', MERCURY: 'Friend', JUPITER: 'Neutral', VENUS: 'Friend', SATURN: 'Friend' },
  SATURN: { SUN: 'Enemy', MOON: 'Enemy', MARS: 'Enemy', MERCURY: 'Friend', JUPITER: 'Neutral', VENUS: 'Friend', SATURN: 'Friend' }
};

// Fix: Add YONI_COMPATIBILITY constant
export const YONI_COMPATIBILITY: Record<string, Record<string, number>> = {
  'Ashwa': { 'Ashwa': 4, 'Gaja': 2, 'Mesha': 2, 'Sarpa': 2, 'Shwana': 2, 'Marjara': 2, 'Mushaka': 2, 'Gau': 1, 'Mahisha': 0, 'Vyaghra': 1, 'Mriga': 2, 'Vanara': 2, 'Nakula': 2, 'Simha': 1 },
  'Gaja': { 'Ashwa': 2, 'Gaja': 4, 'Mesha': 3, 'Sarpa': 2, 'Shwana': 2, 'Marjara': 2, 'Mushaka': 1, 'Gau': 2, 'Mahisha': 2, 'Vyaghra': 0, 'Mriga': 2, 'Vanara': 2, 'Nakula': 2, 'Simha': 1 },
  'Mesha': { 'Ashwa': 2, 'Gaja': 3, 'Mesha': 4, 'Sarpa': 3, 'Shwana': 2, 'Marjara': 2, 'Mushaka': 2, 'Gau': 2, 'Mahisha': 2, 'Vyaghra': 2, 'Mriga': 2, 'Vanara': 0, 'Nakula': 2, 'Simha': 2 },
  'Sarpa': { 'Ashwa': 2, 'Gaja': 2, 'Mesha': 3, 'Sarpa': 4, 'Shwana': 2, 'Marjara': 2, 'Mushaka': 1, 'Gau': 2, 'Mahisha': 2, 'Vyaghra': 2, 'Mriga': 2, 'Vanara': 2, 'Nakula': 0, 'Simha': 2 },
  'Shwana': { 'Ashwa': 2, 'Gaja': 2, 'Mesha': 2, 'Sarpa': 2, 'Shwana': 4, 'Marjara': 1, 'Mushaka': 2, 'Gau': 2, 'Mahisha': 2, 'Vyaghra': 2, 'Mriga': 0, 'Vanara': 2, 'Nakula': 2, 'Simha': 2 },
  'Marjara': { 'Ashwa': 2, 'Gaja': 2, 'Mesha': 2, 'Sarpa': 2, 'Shwana': 1, 'Marjara': 4, 'Mushaka': 0, 'Gau': 2, 'Mahisha': 2, 'Vyaghra': 2, 'Mriga': 2, 'Vanara': 2, 'Nakula': 2, 'Simha': 2 },
  'Mushaka': { 'Ashwa': 2, 'Gaja': 1, 'Mesha': 2, 'Sarpa': 1, 'Shwana': 2, 'Marjara': 0, 'Mushaka': 4, 'Gau': 2, 'Mahisha': 2, 'Vyaghra': 2, 'Mriga': 2, 'Vanara': 2, 'Nakula': 2, 'Simha': 2 },
  'Gau': { 'Ashwa': 1, 'Gaja': 2, 'Mesha': 2, 'Sarpa': 2, 'Shwana': 2, 'Marjara': 2, 'Mushaka': 2, 'Gau': 4, 'Mahisha': 2, 'Vyaghra': 0, 'Mriga': 2, 'Vanara': 2, 'Nakula': 2, 'Simha': 2 },
  'Mahisha': { 'Ashwa': 0, 'Gaja': 2, 'Mesha': 2, 'Sarpa': 2, 'Shwana': 2, 'Marjara': 2, 'Mushaka': 2, 'Gau': 2, 'Mahisha': 4, 'Vyaghra': 2, 'Mriga': 2, 'Vanara': 2, 'Nakula': 2, 'Simha': 2 },
  'Vyaghra': { 'Ashwa': 1, 'Gaja': 0, 'Mesha': 2, 'Sarpa': 2, 'Shwana': 2, 'Marjara': 2, 'Mushaka': 2, 'Gau': 0, 'Mahisha': 2, 'Vyaghra': 4, 'Mriga': 2, 'Vanara': 2, 'Nakula': 2, 'Simha': 2 },
  'Mriga': { 'Ashwa': 2, 'Gaja': 2, 'Mesha': 2, 'Sarpa': 2, 'Shwana': 0, 'Marjara': 2, 'Mushaka': 2, 'Gau': 2, 'Mahisha': 2, 'Vyaghra': 2, 'Mriga': 4, 'Vanara': 2, 'Nakula': 2, 'Simha': 2 },
  'Vanara': { 'Ashwa': 2, 'Gaja': 2, 'Mesha': 0, 'Sarpa': 2, 'Shwana': 2, 'Marjara': 2, 'Mushaka': 2, 'Gau': 2, 'Mahisha': 2, 'Vyaghra': 2, 'Mriga': 2, 'Vanara': 4, 'Nakula': 2, 'Simha': 2 },
  'Nakula': { 'Ashwa': 2, 'Gaja': 2, 'Mesha': 2, 'Sarpa': 0, 'Shwana': 2, 'Marjara': 2, 'Mushaka': 2, 'Gau': 2, 'Mahisha': 2, 'Vyaghra': 2, 'Mriga': 2, 'Vanara': 2, 'Nakula': 4, 'Simha': 2 },
  'Simha': { 'Ashwa': 1, 'Gaja': 1, 'Mesha': 2, 'Sarpa': 2, 'Shwana': 2, 'Marjara': 2, 'Mushaka': 2, 'Gau': 2, 'Mahisha': 2, 'Vyaghra': 2, 'Mriga': 2, 'Vanara': 2, 'Nakula': 2, 'Simha': 4 }
};