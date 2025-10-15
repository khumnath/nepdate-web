/**
 * Nepali Calendar Events Data
 * Contains lunar events, Gregorian events, Bikram Sambat recurring events, and fixed events.
 */
export const EventsData = {
    lunarEvents: [
        { event: "चैते दशैँ", eventType: "lunar", lunarMonth: "चैत्र", paksha: "शुक्ल पक्ष", tithi: "अष्टमी", detail: "चैत्र महिनामा मनाइने दशैँ, ठूलो दशैँको सानो रूप।", category: "धार्मिक", holiday: false },
        { event: "रामनवमी", eventType: "lunar", lunarMonth: "चैत्र", paksha: "शुक्ल पक्ष", tithi: "नवमी", detail: "भगवान रामको जन्मदिन।", category: "धार्मिक", holiday: true },
        { event: "मातातीर्थ औंसी", eventType: "lunar", lunarMonth: "चैत्र", paksha: "कृष्ण पक्ष", tithi: "अमावस्या", detail: "आमाको मुख हेर्ने दिन।", category: "धार्मिक", holiday: false },
        { event: "घोडेजात्रा", eventType: "lunar", lunarMonth: "चैत्र", paksha: "कृष्ण पक्ष", tithi: "अमावस्या", detail: "काठमाडौँमा मनाइने घोडे जात्रा उत्सव।", category: "Jatra", holiday: true },
        { event: "अक्षय तृतीया", eventType: "lunar", lunarMonth: "वैशाख", paksha: "शुक्ल पक्ष", tithi: "तृतीया", detail: "जौ सातु खाने दिन।", category: "धार्मिक", holiday: false },
        { event: "बुद्ध जयन्ती / उभौली पर्व", eventType: "lunar", lunarMonth: "वैशाख", paksha: "शुक्ल पक्ष", tithi: "पूर्णिमा", detail: "भगवान बुद्धको जन्मदिन र किरात समुदायको उभौली पर्व।", category: "धार्मिक", holiday: true },
        { event: "गुरु पूर्णिमा", eventType: "lunar", lunarMonth: "आषाढ", paksha: "शुक्ल पक्ष", tithi: "पूर्णिमा", detail: "गुरु र शिक्षकहरूलाई सम्मान गर्ने दिन।", category: "धार्मिक", holiday: false },
        { event: "नाग पञ्चमी", eventType: "lunar", lunarMonth: "श्रावण", paksha: "शुक्ल पक्ष", tithi: "पञ्चमी", detail: "सर्प देवताको पूजा गर्ने दिन।", category: "धार्मिक", holiday: false },
        { event: "जनै पूर्णिमा / रक्षा बन्धन", eventType: "lunar", lunarMonth: "श्रावण", paksha: "शुक्ल पक्ष", tithi: "पूर्णिमा", detail: "जनै बदल्ने तथा रक्षा बन्धन बांध्ने पवित्र उत्सव।", category: "धार्मिक", holiday: true },
        { event: "कृष्ण जन्माष्टमी", eventType: "lunar", lunarMonth: "श्रावण", paksha: "कृष्ण पक्ष", tithi: "अष्टमी", detail: "भगवान कृष्णको जन्मदिन।", category: "धार्मिक", holiday: true },
        { event: "गाईजात्रा", eventType: "lunar", lunarMonth: "भाद्रपद", paksha: "कृष्ण पक्ष", tithi: "प्रतिपदा", detail: "गाईको उत्सव, हास्य र व्यङ्ग्यको मेल।", category: "Jatra", holiday: true },
        { event: "कुशे औंसी", eventType: "lunar", lunarMonth: "भाद्रपद", paksha: "कृष्ण पक्ष", tithi: "अमावस्या", detail: "बुवाको मुख हेर्ने दिन।", category: "धार्मिक", holiday: true },
        { event: "हरितालिका तीज", eventType: "lunar", lunarMonth: "भाद्रपद", paksha: "शुक्ल पक्ष", tithi: "तृतीया", detail: "महिलाहरूको महान उत्सव।", category: "धार्मिक", holiday: true },
        { event: "गणेश चतुर्थी", eventType: "lunar", lunarMonth: "भाद्रपद", paksha: "शुक्ल पक्ष", tithi: "चतुर्थी", detail: "भगवान गणेशको जन्मदिन।", category: "धार्मिक", holiday: false },
        { event: "इन्द्रजात्रा", eventType: "lunar", lunarMonth: "भाद्रपद", paksha: "शुक्ल पक्ष", tithi: "चतुर्दशी", detail: "काठमाडौँको प्रमुख सडक उत्सवको मुख्य दिन।", category: "Jatra", holiday: true },
        { event: "घटस्थापना", eventType: "lunar", lunarMonth: "आश्विन", paksha: "शुक्ल पक्ष", tithi: "प्रतिपदा", detail: "दशैँको सुरुवात, नवरात्रिको पहिलो दिन।", category: "धार्मिक", holiday: true },
        { event: "फूलपाती", eventType: "lunar", lunarMonth: "आश्विन", paksha: "शुक्ल पक्ष", tithi: "सप्तमी", detail: "दशैँको सातौँ दिन।", category: "धार्मिक", holiday: true },
        { event: "महाअष्टमी", eventType: "lunar", lunarMonth: "आश्विन", paksha: "शुक्ल पक्ष", tithi: "अष्टमी", detail: "दशैँको आठौँ दिन।", category: "धार्मिक", holiday: true },
        { event: "महानवमी", eventType: "lunar", lunarMonth: "आश्विन", paksha: "शुक्ल पक्ष", tithi: "नवमी", detail: "दशैँको नवौं दिन।", category: "धार्मिक", holiday: true },
        { event: "विजयादशमी (दशैं)", eventType: "lunar", lunarMonth: "आश्विन", paksha: "शुक्ल पक्ष", tithi: "दशमी", detail: "दशैँको दशौँ दिन, विजयको दिन।", category: "धार्मिक", holiday: true },
        { event: "कोजाग्रत पूर्णिमा", eventType: "lunar", lunarMonth: "आश्विन", paksha: "शुक्ल पक्ष", tithi: "पूर्णिमा", detail: "दशैँको अन्त्य।", category: "धार्मिक", holiday: true },
        { event: "काग तिहार", eventType: "lunar", lunarMonth: "कार्तिक", paksha: "कृष्ण पक्ष", tithi: "त्रयोदशी", detail: "तिहारको पहिलो दिन, कागलाई समर्पित।", category: "धार्मिक", holiday: true },
        { event: "कुकुर तिहार", eventType: "lunar", lunarMonth: "कार्तिक", paksha: "कृष्ण पक्ष", tithi: "चतुर्दशी", detail: "तिहारको दोस्रो दिन, कुकुरलाई समर्पित।", category: "धार्मिक", holiday: true },
        { event: "लक्ष्मी पूजा", eventType: "lunar", lunarMonth: "कार्तिक", paksha: "कृष्ण पक्ष", tithi: "अमावस्या", detail: "तिहारको तेस्रो दिन, देवी लक्ष्मीको पूजा।", category: "धार्मिक", holiday: true },
        { event: "गोवर्धन पूजा / म्ह पूजा", eventType: "lunar", lunarMonth: "कार्तिक", paksha: "शुक्ल पक्ष", tithi: "प्रतिपदा", detail: "तिहारको चौथो दिन, आत्म-पूजाको दिन।", category: "धार्मिक", holiday: true },
        { event: "भाइटीका", eventType: "lunar", lunarMonth: "कार्तिक", paksha: "शुक्ल पक्ष", tithi: "द्वितीया", detail: "तिहारको पाँचौँ दिन, दिदी-भाइबीचको प्रेमको दिन।", category: "धार्मिक", holiday: true },
        { event: "छठ पर्व", eventType: "lunar", lunarMonth: "कार्तिक", paksha: "शुक्ल पक्ष", tithi: "षष्ठी", detail: "सूर्य देवतालाई समर्पित उत्सव।", category: "धार्मिक", holiday: true },
        { event: "हरिबोधिनी एकादशी", eventType: "lunar", lunarMonth: "कार्तिक", paksha: "शुक्ल पक्ष", tithi: "एकादशी", detail: "भगवान विष्णुको जागरणको दिन।", category: "धार्मिक", holiday: false },
        { event: "विवाह पञ्चमी", eventType: "lunar", lunarMonth: "मार्गशीर्ष", paksha: "शुक्ल पक्ष", tithi: "पञ्चमी", detail: "भगवान राम र सीताको विवाहको सम्झना।", category: "धार्मिक", holiday: false },
        { event: "य:मरि पुन्हि / धान्यपुर्णिमा", eventType: "lunar", lunarMonth: "मार्गशीर्ष", paksha: "शुक्ल पक्ष", tithi: "पूर्णिमा", detail: "नेवार समुदायको यमरि पुन्हि / धान्य पूर्णिमाको उत्सव।", category: "धार्मिक", holiday: false },
        { event: "सरस्वती पूजा / वसन्तपञ्चमी", eventType: "lunar", lunarMonth: "माघ", paksha: "शुक्ल पक्ष", tithi: "पञ्चमी", detail: "ज्ञान र शिक्षाको देवी सरस्वतीको पूजा।", category: "धार्मिक", holiday: false },
        { event: "महाशिवरात्रि", eventType: "lunar", lunarMonth: "फाल्गुन", paksha: "कृष्ण पक्ष", tithi: "चतुर्दशी", detail: "भगवान शिवको महान रात्रि।", category: "धार्मिक", holiday: true },
        { event: "होली पूर्णिमा", eventType: "lunar", lunarMonth: "फाल्गुन", paksha: "शुक्ल पक्ष", tithi: "पूर्णिमा", detail: "रङ्गहरूको उत्सव।", category: "धार्मिक", holiday: true }
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
        { event: "सोनाम ल्होसार", date: "2082/10/05", detail: "तमाङ समुदायको नयाँ वर्ष।", category: "Lhosar", holiday: true },
        { event: "ग्याल्पो ल्होछार", date: "2082/11/06", detail: "शेर्पा समुदायको नयाँ वर्ष।", category: "Lhosar", holiday: true }
    ]
};
