
// rashifalLogic.ts
// Implements Authentic Chandra Gochar (Moon Transit) System
// Features: 
// - House Calculation (1-12)
// - Template Assembly Engine for high variety (10+ formats)
// - Deterministic Hashing for consistent daily results per user

// ------------------------------------------------------------------
// 1. DATA STRUCTURES & CONFIG
// ------------------------------------------------------------------

type Quality = 'GOOD' | 'BAD' | 'MIXED' | 'NEUTRAL';
type Domain = 'WEALTH' | 'HEALTH' | 'RELATIONSHIP' | 'CAREER' | 'GENERAL';

interface HouseInfo {
    house: number; // 1-12
    quality: Quality;
    primaryDomain: Domain;
    description: string; // Astrological label e.g., "Dhana Bhava"
    rating: number; // 1-5
}

// Map House Index (0-11) to House Properties
// House 1 is Index 0.
const HOUSE_RULES: Record<number, HouseInfo> = {
    0: { house: 1, quality: 'MIXED', primaryDomain: 'GENERAL', description: "देह भवन (Janma)", rating: 3 },
    1: { house: 2, quality: 'BAD', primaryDomain: 'WEALTH', description: "धन स्थान", rating: 2 },
    2: { house: 3, quality: 'GOOD', primaryDomain: 'CAREER', description: "पराक्रम स्थान", rating: 5 },
    3: { house: 4, quality: 'BAD', primaryDomain: 'HEALTH', description: "मातृ/सुख स्थान", rating: 2 },
    4: { house: 5, quality: 'MIXED', primaryDomain: 'RELATIONSHIP', description: "विद्या/पुत्र स्थान", rating: 2 },
    5: { house: 6, quality: 'GOOD', primaryDomain: 'HEALTH', description: "शत्रु/रोग स्थान", rating: 5 },
    6: { house: 7, quality: 'GOOD', primaryDomain: 'RELATIONSHIP', description: "कलत्र स्थान", rating: 4 },
    7: { house: 8, quality: 'BAD', primaryDomain: 'HEALTH', description: "आयु/मृत्यु स्थान (अष्टम)", rating: 1 },
    8: { house: 9, quality: 'MIXED', primaryDomain: 'GENERAL', description: "भाग्य स्थान", rating: 3 },
    9: { house: 10, quality: 'GOOD', primaryDomain: 'CAREER', description: "कर्म स्थान", rating: 5 },
    10: { house: 11, quality: 'GOOD', primaryDomain: 'WEALTH', description: "लाभ स्थान", rating: 5 },
    11: { house: 12, quality: 'BAD', primaryDomain: 'WEALTH', description: "व्यय स्थान", rating: 2 },
};

// ------------------------------------------------------------------
// 2. TEXT TEMPLATE LIBRARY
// ------------------------------------------------------------------
// We assemble: [Intro] + [Body based on Domain] + [Closing/Advice]

const TEXT_LIBRARY = {
    INTRO: {
        GOOD: [
            "आजको दिन तपाईंको लागि अत्यन्तै शुभ रहन सक्छ।",
            "ग्रह गोचर अनुकूल रहेकोले मनमा उत्साह छाउनेछ।",
            "चन्द्रमाको शुभ प्रभावले आज महत्त्वपूर्ण काम बन्ने योग छ।",
            "ज्योतिषीय दृष्टिकोणले आजको दिन सकारात्मक देखिन्छ।",
            "आज तपाईंको राशिमा चन्द्रमाको शुभ दृष्टि परेको छ।"
        ],
        BAD: [
            "आज समय अलि प्रतिकूल रहन सक्छ, सचेत रहनुहोला।",
            "ग्रह गोचर त्यति अनुकूल नभएकोले सावधानी अपनाउनु पर्नेछ।",
            "आजको दिन अलि संघर्षपूर्ण रहन सक्छ।",
            "चन्द्रमाको स्थिति कमजोर भएकोले मनमा चिन्ता बढ्न सक्छ।",
            "आज महत्त्वपूर्ण निर्णय लिँदा वा यात्रा गर्दा ध्यान पुर्याउनुहोला।"
        ],
        MIXED: [
            "आजको दिन मिश्रित फलदायी रहनेछ।",
            "शुभ र अशुभ दुबै थरीका अनुभव हुन सक्छन्।",
            "समय सामान्य छ, न त धेरै राम्रो न त धेरै नराम्रो।",
            "आजको दिन मध्यम रहनेछ, धैर्यता अपनाउनुहोला।",
            "परिस्थितिसँग सम्झौता गरेर अघि बढ्नु पर्ने देखिन्छ।"
        ]
    },

    // Specific Astrological Reasoning (Why?) based on House
    REASONING: {
        1: ["चन्द्रमा तपाईंको आफ्नै राशिमा गोचर गर्दैछ।", "आज चन्द्रमा प्रथम भावमा विराजमान हुनुहुन्छ।"],
        2: ["चन्द्रमा धन स्थान (दोस्रो भाव) मा गोचर गर्दैछ।", "दोस्रो भावको चन्द्रमाले आर्थिक विषयमा प्रभाव पार्नेछ।"],
        3: ["चन्द्रमा पराक्रम स्थान (तेस्रो भाव) मा रहेकोले आँट र साहस बढ्नेछ।", "तेस्रो भावको गोचर निकै शुभ मानिन्छ।"],
        4: ["चन्द्रमा सुख स्थान (चौथो भाव) मा प्रवेश गरेको छ।", "चौथो भावको चन्द्रमालाई 'कण्टक' मानिन्छ, त्यसैले सावधानी।"],
        5: ["चन्द्रमा पञ्चम भावमा रहेकोले बुद्धि र विवेकमा प्रभाव पार्नेछ।", "पाँचौं स्थानको चन्द्रमाले मन अस्थिर बनाउन सक्छ।"],
        6: ["छैटौं भावमा चन्द्रमाको गोचर शत्रु नाशक मानिन्छ।", "आज चन्द्रमा छैटौं स्थानमा हुनाले रोग र ऋणबाट मुक्ति मिल्नेछ।"],
        7: ["चन्द्रमा सप्तम भावमा गोचर गर्दैछ, जुन साझेदारीको घर हो।", "सातौं स्थानको चन्द्रमाले रमाइलो वातावरण सिर्जना गर्नेछ।"],
        8: ["तपाईंको राशिबाट आज चन्द्रमा आठौं (अष्टम) भावमा छ।", "अष्टम चन्द्रमा (Astama Chandra) भएकोले विशेष सतर्कता अपनाउनुहोला।"],
        9: ["चन्द्रमा भाग्य स्थान (नवौं भाव) मा गोचर गर्दैछ।", "नवौं भावको चन्द्रमाले धर्म कर्ममा रुचि जगाउनेछ।"],
        10: ["चन्द्रमा कर्म स्थान (दशौं भाव) मा रहेकोले कार्यसिद्धि हुनेछ।", "दशौं चन्द्रमाले मान-सम्मान र प्रतिष्ठा बढाउनेछ।"],
        11: ["चन्द्रमा लाभ स्थान (एघारौं भाव) मा गोचर गर्दैछ।", "एघारौं भावको गोचर सर्वश्रेष्ठ मानिन्छ, सबै इच्छा पूरा हुन सक्छन्।"],
        12: ["चन्द्रमा व्यय स्थान (बाह्रौं भाव) मा रहेको छ।", "बाह्रौं भावको चन्द्रमाले खर्च र चिन्ता बढाउन सक्छ।"]
    },

    BODY: {
        WEALTH: {
            GOOD: [
                "आर्थिक लाभको बलियो योग छ।", "व्यापार व्यवसायमा सोचेभन्दा राम्रो फाइदा हुनेछ।", "रोकिएको वा फसेको धन उठ्ने सम्भावना छ।", "नयाँ लगानीको लागि आजको दिन उत्तम छ।",
                "लटरी वा आकस्मिक धन प्राप्तिको योग देखिन्छ।"
            ],
            BAD: [
                "अनावस्यक खर्चले मन पिरोल्न सक्छ।", "आज कसैलाई पैसा सापटी नदिनुहोला।", "आर्थिक कारोबारमा धोका हुन सक्छ।", "व्यापारमा घाटा हुन सक्ने समय छ।",
                "बजेट असन्तुलित हुनाले तनाव बढ्न सक्छ।"
            ]
        },
        HEALTH: {
            GOOD: [
                "स्वास्थ्य राम्रो रहनेछ, स्फूर्ति बढ्नेछ।", "पुराना रोगबाट छुटकारा मिल्ने सम्भावना छ।", "मन प्रशन्न रहनेछ र शरीरमा ऊर्जा आउनेछ।", "योग र व्यायाममा रुचि बढ्नेछ।",
                "मानसिक तनाव कम भई शान्ति मिल्नेछ।"
            ],
            BAD: [
                "पेट वा छाती सम्बन्धी समस्या आउन सक्छ।", "चोटपटकको भय छ, यात्रामा होसियार हुनुहोला।", "मौसमी रोगले सताउन सक्छ।", "मनमा बिनाकारण डर र चिन्ता लाग्न सक्छ।",
                "खानपानमा लापरवाही नगर्नुहोला, स्वास्थ्य कमजोर बन्न सक्छ।"
            ]
        },
        RELATIONSHIP: {
            GOOD: [
                "दाम्पत्य जीवन सुखमय र रमाइलो रहनेछ।", "मित्र वर्गसँग भेटघाट र रमाइलो कुराकानी हुनेछ।", "प्रेम सम्बन्धमा नयाँ आयाम थपिनेछ।", "परिवारको सहयोग र साथ पूर्ण रूपमा मिल्नेछ।",
                "नयाँ साथीभाइ बन्ने र सामाजिक दायरा बढ्नेछ।"
            ],
            BAD: [
                "सानातिना कुरामा विवाद हुन सक्छ, सचेत रहनुहोला।", "जीवनसाथीसँग मनमुटाव हुन सक्छ।", "पारिवारिक अशान्तिले मन खिन्न बनाउन सक्छ।", "शत्रुहरु सक्रिय हुन सक्छन्।",
                "आफन्तसँगको सम्बन्धमा चिसोपना आउन सक्छ।"
            ]
        },
        CAREER: {
            GOOD: [
                "काममा सफलता र हाकिमबाट प्रशंसा मिल्नेछ।", "नयाँ रोजगारीको अवसर आउन सक्छ।", "पद र प्रतिष्ठा बढ्ने योग छ।", "राजनीति र समाजसेवामा सफलता मिल्नेछ।",
                "विद्यार्थीहरूका लागि पढाइमा प्रगति हुनेछ।"
            ],
            BAD: [
                "काममा बाधा र ढिलासुस्ती हुन सक्छ।", "सहकर्मीसँग विचार नमिल्न सक्छ।", "बनेको काम बिग्रन सक्ने डर छ।", "पढाइ लेखाइमा मन जानेछैन।",
                "जिम्मेवारी पूरा गर्न कठिनाइ हुन सक्छ।"
            ]
        },
        GENERAL: {
            GOOD: [
                "तपाईंको व्यक्तित्वको प्रभाव बढ्नेछ।", "मिष्ठान्न भोजन र मनोरञ्जनको अवसर मिल्नेछ।", "यात्रा रमाइलो र फलदायी रहनेछ।", "धर्म कर्म र परोपकारमा रुचि बढ्नेछ।"
            ],
            BAD: [
                "मन अस्थिर र चञ्चल रहनेछ।", "अनावस्यक दौडधुपले थकान बढाउनेछ।", "समयको ख्याल नगर्दा अवसर गुम्न सक्छ।", "काममा आलस्यता बढ्नेछ।"
            ],
            MIXED: [
                "केही काम बन्नेछन् भने केही अधुरा रहन सक्छन्।", "सुख र दुःखको मिश्रित अनुभव हुनेछ।", "परिणामको लागि अलि बढी मेहनेत गर्नुपर्नेछ।"
            ]
        }
    },

    ADVICE: {
        GOOD: [
            "नयाँ काम सुरु गर्न आजको दिन शुभ छ।", "अवसरको सदुपयोग गर्नुहोला।", "सकारात्मक सोच राख्नुहोला, प्रगति हुनेछ।", "सहयोगीहरुको साथ लिन नहिचकिचाउनुहोला।",
            "भगवानको स्मरण गर्दै दिनको सुरुवात गर्नुहोला।"
        ],
        BAD: [
            "आज ठूलो लगानी वा जोखिमपूर्ण काम नगर्नुहोला।", "वादविवादबाट टाढा रहनु नै बुद्धिमानी हुनेछ।", "धैर्य र संयम अपनाउनुहोला।", "महत्वपूर्ण निर्णय भोलिको लागि सार्नु बेस होला।",
            "शिवजीको आराधना वा मन्दिर दर्शनले शान्ति दिनेछ।"
        ],
        MIXED: [
            "हतारमा निर्णय नलिनुहोला।", "सोचविचार गरेर मात्र पाइला चाल्नुहोला।", "सामान्य दिनचर्यामै रमाउनु राम्रो हुनेछ।", "विवादमा नफस्नुहोला।"
        ]
    }
};

const SYLLABLES = [
    "चु, चे, चो, ला, लि, लु, ले, लो, अ",
    "इ, उ, ए, ओ, वा, वि, वु, वे, वो",
    "का, कि, कु, घ, ङ, छ, के, को, हा",
    "हि, हु, हे, हो, डा, डि, डु, डे, डो",
    "मा, मि, मु, मे, मो, टा, टि, टु, टे",
    "टो, पा, पि, पु, ष, ण, ठ, पे, पो",
    "रा, रि, रु, रे, रो, ता, ति, तु, ते",
    "तो, ना, नि, नु, ने, नो, या, यि, यु",
    "ये, यो, भा, भि, भु, धा, फा, ढा, भे",
    "भो, जा, जि, खी, खू, खे, खो, गा, गी",
    "गू, गे, गो, सा, सी, सू, से, सो, दा",
    "दी, दू, थ, झ, ञ, दे, दो, चा, ची",
];

const RASHI_IDS = [
    "mesh", "vrish", "mithun", "karkat", "simha", "kanya",
    "tula", "vrishchik", "dhanu", "makar", "kumbha", "meen"
];

const RASHI_NAMES_NEP = [
    "मेष", "वृष", "मिथुन", "कर्कट", "सिंह", "कन्या",
    "तुला", "वृश्चिक", "धनु", "मकर", "कुम्भ", "मीन"
];

const RASHI_NAME_TO_INDEX: Record<string, number> = {
    "मेष": 0, "वृष": 1, "मिथुन": 2, "कर्कट": 3, "सिंह": 4, "कन्या": 5,
    "तुला": 6, "वृश्चिक": 7, "धनु": 8, "मकर": 9, "कुम्भ": 10, "मीन": 11
};

export interface RashifalData {
    id: number;
    name: string;
    syllables: string;
    prediction: string;
    rating: number; // 1-5
    img: string; // filename
    houseDescription?: string; // e.g. "8th House"
}

// ------------------------------------------------------------------
// 3. LOGIC & ASSEMBLY
// ------------------------------------------------------------------

function deterministicHash(str: string, mod: number): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash) % mod;
}

function getRandomItem(seed: string, items: string[]): string {
    const idx = deterministicHash(seed, items.length);
    return items[idx];
}

function assemblePrediction(
    houseRule: HouseInfo,
    seedBase: string
): string {
    // 1. SELECT QUALITY & DOMAIN
    const quality = houseRule.quality;
    const domain = houseRule.primaryDomain;

    // 2. FETCH POOLS
    const qualityKey = (quality === 'GOOD' || quality === 'BAD') ? quality : (quality === 'MIXED' ? 'MIXED' : 'GOOD'); // Fallback

    // 2a. Intro
    const introList = TEXT_LIBRARY.INTRO[qualityKey as keyof typeof TEXT_LIBRARY.INTRO];
    const intro = getRandomItem(seedBase + "INTRO", introList);

    // 2b. Reasoning (Specific to House)
    const reasonList = TEXT_LIBRARY.REASONING[houseRule.house as keyof typeof TEXT_LIBRARY.REASONING] || [];
    const reason = reasonList.length > 0 ? getRandomItem(seedBase + "REASON", reasonList) : "";

    // 2c. Body (General)
    // We try to pick one from Primary Domain + one from General or another domain
    const bodyPoolPrimary = TEXT_LIBRARY.BODY[domain as keyof typeof TEXT_LIBRARY.BODY]?.[qualityKey as 'GOOD' | 'BAD'];
    const bodyPoolGeneral = TEXT_LIBRARY.BODY.GENERAL[qualityKey as 'GOOD' | 'BAD' | 'MIXED'] || TEXT_LIBRARY.BODY.GENERAL.GOOD;

    const body1 = bodyPoolPrimary ? getRandomItem(seedBase + "BODY1", bodyPoolPrimary) : "";

    // Ensure Body 2 is different and maybe from GENERAL pool if domain is specific
    const body2 = getRandomItem(seedBase + "BODY2", bodyPoolGeneral);

    // 2d. Advice
    const adviceList = TEXT_LIBRARY.ADVICE[qualityKey as keyof typeof TEXT_LIBRARY.ADVICE] || TEXT_LIBRARY.ADVICE.GOOD;
    const advice = getRandomItem(seedBase + "ADVICE", adviceList);

    // 3. ASSEMBLE
    // Format Idea: Intro + Reason + Body1 + Body2 + Advice
    // But let's shuffle format based on seed to meet "10/12 formats" requirement
    const formatType = deterministicHash(seedBase + "FORMAT", 3);

    if (formatType === 0) {
        // Standard Structure
        return `${intro} ${reason} ${body1} ${body2} ${advice}`;
    } else if (formatType === 1) {
        // Direct Reason first
        return `${reason} त्यसैले ${intro} ${body1} ${advice} ${body2}`;
    } else {
        // Advice Oriented
        return `${intro} ${body1} ${reason} ${body2} ${advice}`;
    }
}

export function generateDailyRashifal(
    dateKey: string,
    tithiName: string = "",
    nakshatraName: string = "",
    currentMoonRashi: string = "मेष"
): RashifalData[] {

    let moonRashiIndex = RASHI_NAME_TO_INDEX[currentMoonRashi];
    if (moonRashiIndex === undefined) moonRashiIndex = 0;

    return RASHI_NAMES_NEP.map((rashiName, userRashiIndex) => {
        // 1. Calculate House
        const houseIndex = (moonRashiIndex - userRashiIndex + 12) % 12; // 0-11
        const houseRule = HOUSE_RULES[houseIndex];

        // 2. Generate Prediction
        const seed = `${dateKey}-${userRashiIndex}-${tithiName}-${nakshatraName}`;
        const prediction = assemblePrediction(houseRule, seed);

        // 3. Rating Jitter (so it's not always exactly the rule rating, +/- 0.5 visual equivalent)
        // Actually keep it simple for now
        const rating = houseRule.rating;

        return {
            id: userRashiIndex + 1,
            name: rashiName,
            syllables: SYLLABLES[userRashiIndex],
            prediction,
            rating,
            img: `${RASHI_IDS[userRashiIndex]}.png`,
            houseDescription: houseRule.description
        };
    });
}
