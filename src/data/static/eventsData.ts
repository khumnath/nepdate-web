/**
 * Nepali Calendar Events Data
 * Contains lunar events with calculation rules (Udaya, Nishitha, Pradosh, Madhyanna).
 */
export const EventsData = {
	lunarEvents: [
		// CHAITRA
		{ event: "चैते दशैँ", eventType: "lunar", lunarMonth: "चैत्र", paksha: "शुक्ल पक्ष", tithi: "अष्टमी", detail: "चैत्र महिनामा मनाइने दशैँ, ठूलो दशैँको सानो रूप।", category: "धार्मिक", holiday: false, rule: "udaya" },
		{ event: "रामनवमी", eventType: "lunar", lunarMonth: "चैत्र", paksha: "शुक्ल पक्ष", tithi: "नवमी", detail: "भगवान रामको जन्मदिन (मध्याह्न काल)।", category: "धार्मिक", holiday: true, rule: "madhyanna" },
		{ event: "मातातीर्थ औंसी", eventType: "lunar", lunarMonth: "चैत्र", paksha: "कृष्ण पक्ष", tithi: "अमावस्या", detail: "आमाको मुख हेर्ने दिन।", category: "धार्मिक", holiday: false, rule: "udaya" },
		{ event: "घोडेजात्रा", eventType: "lunar", lunarMonth: "चैत्र", paksha: "कृष्ण पक्ष", tithi: "अमावस्या", detail: "काठमाडौँमा मनाइने घोडे जात्रा उत्सव।", category: "Jatra", holiday: true, rule: "udaya" },

		// BAISHAKH
		{ event: "अक्षय तृतीया", eventType: "lunar", lunarMonth: "वैशाख", paksha: "शुक्ल पक्ष", tithi: "तृतीया", detail: "जौ सातु खाने दिन, विवाहको लागि शुभ साइत।", category: "धार्मिक", holiday: false, rule: "udaya" },
		{ event: "बुद्ध जयन्ती / उभौली पर्व", eventType: "lunar", lunarMonth: "वैशाख", paksha: "शुक्ल पक्ष", tithi: "पूर्णिमा", detail: "भगवान बुद्धको जन्मदिन र किरात समुदायको उभौली पर्व।", category: "धार्मिक", holiday: true, rule: "udaya" },

		// JESTHA
		{ event: "सिथि नख:", eventType: "lunar", lunarMonth: "ज्येष्ठ", paksha: "शुक्ल पक्ष", tithi: "षष्ठी", detail: "नेवार समुदायले इनार तथा पानीका मुहान सफा गर्ने र कुमार कार्तिकेयको पूजा गर्ने पर्व।", category: "सांस्कृतिक", holiday: false, rule: "udaya" },
		{ event: "निर्जला एकादशी", eventType: "lunar", lunarMonth: "ज्येष्ठ", paksha: "शुक्ल पक्ष", tithi: "एकादशी", detail: "जल समेत नपिई व्रत बस्ने कठोर एकादशी।", category: "धार्मिक", holiday: false, rule: "udaya" },

		// ASHADH
		{ event: "हरिशयनी एकादशी (तुलसी रोपण)", eventType: "lunar", lunarMonth: "आषाढ", paksha: "शुक्ल पक्ष", tithi: "एकादशी", detail: "चतुर्मास व्रत सुरु, घर-घरमा तुलसी रोप्ने दिन।", category: "धार्मिक", holiday: false, rule: "udaya" },
		{ event: "गुरु पूर्णिमा", eventType: "lunar", lunarMonth: "आषाढ", paksha: "शुक्ल पक्ष", tithi: "पूर्णिमा", detail: "गुरु र शिक्षकहरूलाई सम्मान गर्ने दिन।", category: "धार्मिक", holiday: false, rule: "udaya" },

		// SHRAVAN
		{ event: "गठाःमुगः चह्रे (घन्टाकर्ण)", eventType: "lunar", lunarMonth: "श्रावण", paksha: "कृष्ण पक्ष", tithi: "चतुर्दशी", detail: "दुष्ट आत्माहरूलाई भगाउने नेवारी पर्व।", category: "सांस्कृतिक", holiday: false, rule: "udaya" },
		{ event: "नाग पञ्चमी", eventType: "lunar", lunarMonth: "श्रावण", paksha: "शुक्ल पक्ष", tithi: "पञ्चमी", detail: "सर्प देवताको पूजा गर्ने र ढोकामा नाग टाँस्ने दिन।", category: "धार्मिक", holiday: false, rule: "udaya" },
		{ event: "जनै पूर्णिमा / रक्षा बन्धन", eventType: "lunar", lunarMonth: "श्रावण", paksha: "शुक्ल पक्ष", tithi: "पूर्णिमा", detail: "जनै बदल्ने तथा रक्षा बन्धन बाँध्ने, क्वाँटी खाने दिन।", category: "धार्मिक", holiday: true, rule: "udaya" },
		{ event: "कृष्ण जन्माष्टमी", eventType: "lunar", lunarMonth: "श्रावण", paksha: "कृष्ण पक्ष", tithi: "अष्टमी", detail: "भगवान कृष्णको जन्मदिन (निशीथ काल)।", category: "धार्मिक", holiday: true, rule: "nishitha" },

		// BHADRA
		{ event: "गाईजात्रा", eventType: "lunar", lunarMonth: "भाद्रपद", paksha: "कृष्ण पक्ष", tithi: "प्रतिपदा", detail: "गाईको उत्सव, हास्य र व्यङ्ग्यको मेल।", category: "Jatra", holiday: true, rule: "udaya" },
		{ event: "कुशे औंसी (बुवाको मुख हेर्ने)", eventType: "lunar", lunarMonth: "भाद्रपद", paksha: "कृष्ण पक्ष", tithi: "अमावस्या", detail: "बुवाको सम्मान गर्ने दिन।", category: "धार्मिक", holiday: false, rule: "udaya" },
		{ event: "हरितालिका तीज", eventType: "lunar", lunarMonth: "भाद्रपद", paksha: "शुक्ल पक्ष", tithi: "तृतीया", detail: "महिलाहरूको महान उत्सव, शिव-पार्वतीको पूजा।", category: "धार्मिक", holiday: true, rule: "udaya" },
		{ event: "गणेश चतुर्थी", eventType: "lunar", lunarMonth: "भाद्रपद", paksha: "शुक्ल पक्ष", tithi: "चतुर्थी", detail: "भगवान गणेशको जन्मदिन (मध्याह्न काल)।", category: "धार्मिक", holiday: false, rule: "madhyanna" },
		{ event: "ऋषि पञ्चमी", eventType: "lunar", lunarMonth: "भाद्रपद", paksha: "शुक्ल पक्ष", tithi: "पञ्चमी", detail: "महिलाहरूले सप्तऋषिको पूजा गर्ने विशेष दिन।", category: "धार्मिक", holiday: true, rule: "udaya" },
		{ event: "इन्द्रजात्रा", eventType: "lunar", lunarMonth: "भाद्रपद", paksha: "शुक्ल पक्ष", tithi: "चतुर्दशी", detail: "काठमाडौँको प्रमुख सडक उत्सव, जीवित देवी कुमारीको रथ यात्रा।", category: "Jatra", holiday: true, rule: "udaya" },
		{ event: "सोह्र श्राद्ध आरम्भ", eventType: "lunar", lunarMonth: "भाद्रपद", paksha: "शुक्ल पक्ष", tithi: "पूर्णिमा", detail: "पितृ पक्ष (सोह्र श्राद्ध) सुरु हुने दिन।", category: "धार्मिक", holiday: false, rule: "udaya" },

		// ASHWIN
		{ event: "जितिया पर्व", eventType: "lunar", lunarMonth: "आश्विन", paksha: "कृष्ण पक्ष", tithi: "अष्टमी", detail: "तराईका महिलाहरूले सन्तानको दीर्घायुको लागि मनाउने व्रत।", category: "सांस्कृतिक", holiday: true, rule: "udaya" },
		{ event: "घटस्थापना", eventType: "lunar", lunarMonth: "आश्विन", paksha: "शुक्ल पक्ष", tithi: "प्रतिपदा", detail: "दशैँको सुरुवात, जमरा राख्ने दिन।", category: "धार्मिक", holiday: true, rule: "udaya" },
		{ event: "फूलपाती", eventType: "lunar", lunarMonth: "आश्विन", paksha: "शुक्ल पक्ष", tithi: "सप्तमी", detail: "दशैँको सातौँ दिन।", category: "धार्मिक", holiday: true, rule: "udaya" },
		{ event: "महाअष्टमी", eventType: "lunar", lunarMonth: "आश्विन", paksha: "शुक्ल पक्ष", tithi: "अष्टमी", detail: "दशैँको आठौँ दिन, कालरात्रिको पूजा।", category: "धार्मिक", holiday: true, rule: "udaya" },
		{ event: "महानवमी", eventType: "lunar", lunarMonth: "आश्विन", paksha: "शुक्ल पक्ष", tithi: "नवमी", detail: "दशैँको नवौं दिन, विश्वकर्मा पूजा।", category: "धार्मिक", holiday: true, rule: "udaya" },
		{ event: "विजयादशमी (दशैं)", eventType: "lunar", lunarMonth: "आश्विन", paksha: "शुक्ल पक्ष", tithi: "दशमी", detail: "दशैँको मुख्य दिन, टिका र जमरा लगाउने दिन।", category: "धार्मिक", holiday: true, rule: "udaya" },
		{ event: "कोजाग्रत पूर्णिमा", eventType: "lunar", lunarMonth: "आश्विन", paksha: "शुक्ल पक्ष", tithi: "पूर्णिमा", detail: "दशैँको अन्त्य, धनकी देवी लक्ष्मीको पूजा।", category: "धार्मिक", holiday: false, rule: "nishitha" },

		// KARTIK
		{ event: "काग तिहार", eventType: "lunar", lunarMonth: "कार्तिक", paksha: "कृष्ण पक्ष", tithi: "त्रयोदशी", detail: "तिहारको पहिलो दिन, कागलाई समर्पित।", category: "धार्मिक", holiday: true, rule: "udaya" },
		{ event: "कुकुर तिहार", eventType: "lunar", lunarMonth: "कार्तिक", paksha: "कृष्ण पक्ष", tithi: "चतुर्दशी", detail: "तिहारको दोस्रो दिन, कुकुरलाई समर्पित।", category: "धार्मिक", holiday: true, rule: "udaya" },
		{ event: "लक्ष्मी पूजा", eventType: "lunar", lunarMonth: "कार्तिक", paksha: "कृष्ण पक्ष", tithi: "अमावस्या", detail: "तिहारको तेस्रो दिन, गाई तिहार र लक्ष्मी पूजा (प्रदोष काल)।", category: "धार्मिक", holiday: true, rule: "pradosh" },
		{ event: "गोवर्धन पूजा / म्ह पूजा", eventType: "lunar", lunarMonth: "कार्तिक", paksha: "शुक्ल पक्ष", tithi: "प्रतिपदा", detail: "तिहारको चौथो दिन, गोवर्धन पर्वत र आत्म-पूजा (म्ह पूजा)।", category: "धार्मिक", holiday: true, rule: "udaya" },
		{ event: "भाइटीका", eventType: "lunar", lunarMonth: "कार्तिक", paksha: "शुक्ल पक्ष", tithi: "द्वितीया", detail: "तिहारको पाँचौँ दिन, दाजुभाइ र दिदीबहिनीको पर्व।", category: "धार्मिक", holiday: true, rule: "madhyanna" },
		{ event: "छठ पर्व", eventType: "lunar", lunarMonth: "कार्तिक", paksha: "शुक्ल पक्ष", tithi: "षष्ठी", detail: "सूर्य देवतालाई समर्पित तराईको महान पर्व (साँझको अर्घ्य)।", category: "धार्मिक", holiday: true, rule: "pradosh" },
		{ event: "हरिबोधिनी एकादशी (तुलसी विवाह)", eventType: "lunar", lunarMonth: "कार्तिक", paksha: "शुक्ल पक्ष", tithi: "एकादशी", detail: "भगवान विष्णुको जागरण, तुलसी विवाह गर्ने दिन।", category: "धार्मिक", holiday: false, rule: "udaya" },

		// MARGASHIRSHA (MANGSIR)
		{ event: "बाला चतुर्दशी", eventType: "lunar", lunarMonth: "मार्गशीर्ष", paksha: "कृष्ण पक्ष", tithi: "चतुर्दशी", detail: "पशुपतिनाथमा शतबीज छर्ने विशेष दिन।", category: "धार्मिक", holiday: false, rule: "udaya" },
		{ event: "विवाह पञ्चमी", eventType: "lunar", lunarMonth: "मार्गशीर्ष", paksha: "शुक्ल पक्ष", tithi: "पञ्चमी", detail: "जनकपुरमा भगवान राम र सीताको विवाह महोत्सव।", category: "धार्मिक", holiday: false, rule: "udaya" },
		{ event: "य:मरि पुन्हि / धान्यपुर्णिमा", eventType: "lunar", lunarMonth: "मार्गशीर्ष", paksha: "शुक्ल पक्ष", tithi: "पूर्णिमा", detail: "नेवार समुदायको य:मरि खाने र धान्य पूर्णिमाको उत्सव।", category: "धार्मिक", holiday: true, rule: "udaya" },

		// POUSH
		{ event: "स्वस्थानी व्रत आरम्भ", eventType: "lunar", lunarMonth: "पौष", paksha: "शुक्ल पक्ष", tithi: "पूर्णिमा", detail: "श्री स्वस्थानी माताको व्रत तथा कथा सुरु हुने दिन।", category: "धार्मिक", holiday: false, rule: "udaya" },

		// MAGH
		{ event: "सोनाम ल्होछार", eventType: "lunar", lunarMonth: "माघ", paksha: "शुक्ल पक्ष", tithi: "प्रतिपदा", detail: "तामाङ समुदायको नयाँ वर्ष।", category: "सांस्कृतिक", holiday: true, rule: "udaya" },
		{ event: "सरस्वती पूजा / वसन्तपञ्चमी", eventType: "lunar", lunarMonth: "माघ", paksha: "शुक्ल पक्ष", tithi: "पञ्चमी", detail: "ज्ञान र शिक्षाको देवी सरस्वतीको पूजा, वसन्त ऋतुको आगमन।", category: "धार्मिक", holiday: true, rule: "udaya" },

		// PHALGUN
		{ event: "ग्याल्पो ल्होछार", eventType: "lunar", lunarMonth: "फाल्गुन", paksha: "शुक्ल पक्ष", tithi: "प्रतिपदा", detail: "शेर्पा समुदायको नयाँ वर्ष।", category: "सांस्कृतिक", holiday: true, rule: "udaya" },
		{ event: "महाशिवरात्रि", eventType: "lunar", lunarMonth: "फाल्गुन", paksha: "कृष्ण पक्ष", tithi: "चतुर्दशी", detail: "भगवान शिवको महान रात्रि, पशुपतिनाथमा मेला (निशीथ काल)।", category: "धार्मिक", holiday: true, rule: "nishitha" },
		{ event: "होली (पहाड)", eventType: "lunar", lunarMonth: "फाल्गुन", paksha: "शुक्ल पक्ष", tithi: "पूर्णिमा", detail: "रङ्गहरूको उत्सव (पहाडी जिल्लाहरूमा)।", category: "धार्मिक", holiday: true, rule: "udaya" },
		{ event: "होली (तराई)", eventType: "lunar", lunarMonth: "चैत्र", paksha: "कृष्ण पक्ष", tithi: "प्रतिपदा", detail: "रङ्गहरूको उत्सव (तराई जिल्लाहरूमा)।", category: "धार्मिक", holiday: true, rule: "udaya" }
	],

	gregorianEvents: [
		{ event: "New Year's Day", date: "01/01", detail: "Celebration of the new Gregorian year.", category: "International Day", holiday: true },
		{ event: "Valentine's Day", date: "02/14", detail: "International day of love. Nepali: प्रणय दिवस.", category: "International Day", holiday: false },
		{ event: "International Women's Day", date: "03/08", detail: "Global day celebrating womanhood. Nepali: नारी दिवस.", category: "International Day", holiday: true },
		{ event: "World Health Day", date: "04/07", detail: "A global health awareness day.", category: "International Day", holiday: false },
		{ event: "International Workers' Day", date: "05/01", detail: "Also known as May Day.", category: "International Day", holiday: true },
		{ event: "World Environment Day", date: "06/05", detail: "Day for environmental awareness and action.", category: "International Day", holiday: false },
		{ event: "International Day of Yoga", date: "06/21", detail: "Global day to celebrate yoga.", category: "International Day", holiday: false },
		{ event: "World Population Day", date: "07/11", detail: "Awareness of population issues.", category: "International Day", holiday: false },
		{ event: "International Youth Day", date: "08/12", detail: "Celebrate young people.", category: "International Day", holiday: false },
		{ event: "International Human Rights Day", date: "12/10", detail: "Commemorates the UDHR adoption.", category: "International Day", holiday: false },
		{ event: "Christmas Day", date: "12/25", detail: "Christian festival celebrating the birth of Jesus.", category: "Festival", holiday: true }
	],
	bikramRecurringEvents: [
		{ event: "लोकतन्त्र दिवस", date: "01/11", detail: "लोकतन्त्र दिवस, बैशाख ११ गते।", category: "National Day", holiday: true },
		{ event: "गणतन्त्र दिवस", date: "02/15", detail: "गणतन्त्र दिवस, जेठ १५ गते।", category: "National Day", holiday: true },
		{ event: "राष्ट्रिय धान दिवस", date: "03/15", detail: "असार १५ गते।", category: "National Day", holiday: false },
		{ event: "भानु जयन्ती", date: "03/29", detail: "कवि भानुभक्त आचार्यको जन्म जयन्ती।", category: "Jayanti", holiday: false },
		{ event: "संविधान दिवस", date: "06/03", detail: "संविधान दिवस, असोज ३ गते।", category: "National Day", holiday: true },
		{ event: "पृथ्वी जयन्ती / राष्ट्रिय एकता दिवस", date: "09/27", detail: "पृथ्वी जयन्ती।", category: "National Day", holiday: true },
		{ event: "शहीद दिवस", date: "10/16", detail: "शहीद दिवस।", category: "National Day", holiday: true },
		{ event: "प्रजातन्त्र दिवस", date: "11/07", detail: "राणा शासनको अन्त्यको सम्झनामा।", category: "National Day", holiday: true },
		{ event: "नयाँ वर्ष", date: "01/01", detail: "नेपाली नयाँ वर्ष।", category: "Festival", holiday: true },
		{ event: "बिस्का: जात्रा", date: "01/01", detail: "भक्तपुरमा मनाइने जात्रा।", category: "Jatra", holiday: true },
		{ event: "साउने सङ्क्रान्ति", date: "04/01", detail: "श्रावण सङ्क्रान्ति।", category: "Sankranti", holiday: false },
		{ event: "माघे संक्रान्ति", date: "10/01", detail: "माघे सङ्क्रान्ति।", category: "Sankranti", holiday: true }
	],
	bikramFixedEvents: [
		{ event: "भोटो जात्रा", date: "2082/02/18", detail: "रातो मच्छिन्द्रनाथ जात्राको समापन दिन।", category: "Jatra", holiday: true },
		{ event: "तमु ल्होसार", date: "2082/09/15", detail: "गुरुङ समुदायको नयाँ वर्ष।", category: "Lhosar", holiday: true },
	]
};