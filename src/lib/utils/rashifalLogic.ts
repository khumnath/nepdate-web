
// rashifalLogic.ts
// Implements Authentic Chandra Gochar (Moon Transit) System
// Features:
// - House Calculation (1-12)
// - Template Assembly Engine for high variety (10+ formats)
// - Deterministic Hashing for consistent daily results per user

// ------------------------------------------------------------------
// DATA STRUCTURES & CONFIG
// ------------------------------------------------------------------

type Quality = 'GOOD' | 'BAD' | 'MIXED' | 'NEUTRAL';
type Domain = 'WEALTH' | 'HEALTH' | 'RELATIONSHIP' | 'CAREER' | 'GENERAL';

interface HouseInfo {
  house: number; // 1-12
  quality: Quality;
  primaryDomain: Domain;
  description: string; // Astrological label e.g., "Dhana Bhava"
  rating: number; // 1-5
  domainQualities?: Partial<Record<Domain, Quality>>; // Domain-specific overrides
}

// Map House Index (0-11) to House Properties
// House 1 is Index 0.
const HOUSE_RULES: Record<number, HouseInfo> = {
  0: { house: 1, quality: 'GOOD', primaryDomain: 'HEALTH', description: "देह भवन (Excellent Health)", rating: 4, domainQualities: { WEALTH: 'MIXED' } },
  1: { house: 2, quality: 'BAD', primaryDomain: 'WEALTH', description: "धन स्थान (Wealth Loss)", rating: 2 },
  2: { house: 3, quality: 'GOOD', primaryDomain: 'CAREER', description: "पराक्रम स्थान (Success)", rating: 5, domainQualities: { RELATIONSHIP: 'MIXED' } }, // Siblings dispute
  3: { house: 4, quality: 'BAD', primaryDomain: 'HEALTH', description: "मातृ/सुख स्थान (Unrest)", rating: 2 },
  4: { house: 5, quality: 'BAD', primaryDomain: 'RELATIONSHIP', description: "विद्या/पुत्र स्थान (Anxiety)", rating: 2, domainQualities: { CAREER: 'MIXED' } },
  5: { house: 6, quality: 'GOOD', primaryDomain: 'HEALTH', description: "शत्रु/रोग स्थान (Victory)", rating: 5 },
  6: { house: 7, quality: 'GOOD', primaryDomain: 'RELATIONSHIP', description: "कलत्र स्थान (Happiness)", rating: 5 },
  7: { house: 8, quality: 'BAD', primaryDomain: 'HEALTH', description: "आयु/मृत्यु स्थान (Chandrashtama)", rating: 1 },
  8: { house: 9, quality: 'BAD', primaryDomain: 'CAREER', description: "भाग्य स्थान (Obstacles)", rating: 2, domainQualities: { GENERAL: 'GOOD' } }, // Good for spiritual, Bad for material
  9: { house: 10, quality: 'GOOD', primaryDomain: 'CAREER', description: "कर्म स्थान (Status)", rating: 5 },
  10: { house: 11, quality: 'GOOD', primaryDomain: 'WEALTH', description: "लाभ स्थान (Gains)", rating: 5 },
  11: { house: 12, quality: 'BAD', primaryDomain: 'WEALTH', description: "व्यय स्थान (Expense)", rating: 2, domainQualities: { GENERAL: 'MIXED' } }, // Good for travel/donation
};

// TEXT TEMPLATE LIBRARY
// {moonRashi} -> Name of the Rashi where Moon is Transiting (e.g. "मेष", "वृष")

const TEXT_LIBRARY = {
  INTRO: {
    GOOD: [
      "आजको दिन तपाईंको लागि अत्यन्तै शुभ रहन सक्छ।",
      "ग्रह गोचर अनुकूल रहेकोले मनमा उत्साह छाउनेछ।",
      "चन्द्रमाको शुभ प्रभावले आज महत्त्वपूर्ण काम बन्ने योग छ।",
      "ज्योतिषीय दृष्टिकोणले आजको दिन सकारात्मक देखिन्छ।",
      "आज तपाईंको राशिमा चन्द्रमाको शुभ दृष्टि परेको छ।",
      "भाग्यले साथ दिने समय छ, अवसरको सदुपयोग गर्नुहोला।",
      "आजको ग्रह स्थितिले तपाईंलाई विशेष ऊर्जा प्रदान गर्नेछ।"
    ],
    BAD: [
      "आज समय अलि प्रतिकूल रहन सक्छ, सचेत रहनुहोला।",
      "ग्रह गोचर त्यति अनुकूल नभएकोले सावधानी अपनाउनु पर्नेछ।",
      "आजको दिन अलि संघर्षपूर्ण रहन सक्छ।",
      "चन्द्रमाको स्थिति कमजोर भएकोले मनमा चिन्ता बढ्न सक्छ।",
      "आज महत्त्वपूर्ण निर्णय लिँदा वा यात्रा गर्दा ध्यान पुर्याउनुहोला।",
      "परिस्थितिले केही चुनौतीहरू सिर्जना गर्न सक्छ।",
      "आजको दिन धैर्य र संयम अपनाउनुपर्ने देखिन्छ।"
    ],
    MIXED: [
      "आजको दिन मिश्रित फलदायी रहनेछ।",
      "शुभ र अशुभ दुबै थरीका अनुभव हुन सक्छन्।",
      "समय सामान्य छ, न त धेरै राम्रो न त धेरै नराम्रो।",
      "आजको दिन मध्यम रहनेछ, धैर्यता अपनाउनुहोला।",
      "परिस्थितिसँग सम्झौता गरेर अघि बढ्नु पर्ने देखिन्छ।",
      "हतारमा निर्णय नलिनुहोला, समय तटस्थ छ।"
    ]
  },

  // Specific Astrological Reasoning (Why?) based on House
  // We now use {moonRashi} to make it specific.
  REASONING: {
    1: [
      "{moonRashi} राशिमा चन्द्रमाको उपस्थितिले आज तपाईंलाई 'भोजन सुख' र 'आरोग्यता' प्रदान गर्नेछ।",
      "तपाईंको आफ्नै राशिमा आज चन्द्रमा रहेकोले आत्मविश्वास बढ्ने समय छ।",
      "आजको दिन {moonRashi} को चन्द्रमाले तपाईंको व्यक्तित्वमा निखार ल्याउनेछ।",
      "शरीरमा स्फूर्ति र मनमा उत्साह रहनेछ, किनकि आज चन्द्रदेव तपाईंको राशिमा हुनुहुन्छ।",
      "{moonRashi} राशिको चन्द्रमाले तपाईंलाई आज विशेष आकर्षण शक्ति दिनेछ।"
    ],
    2: [
      "धन स्थान ({moonRashi}) मा गोचर गर्ने चन्द्रमाले आज खर्चको मात्रा बढाउन सक्छ।",
      "आज सञ्चित धन चलाउनुपर्ने अवस्था आउन सक्छ, {moonRashi} मा चन्द्रमा प्रतिकूल छ।",
      "{moonRashi} को चन्द्रमाले मुखमा अलि कडाइ ल्याउन सक्छ, बोलीमा विचार पुर्याउनुहोला।",
      "आर्थिक कारोबारमा आज अलि सचेत रहनुपर्ने दिन छ, दोस्रो भावमा चन्द्रमा छ।",
      "खानपानमा रुचि जाग्नेछ तर {moonRashi} को प्रभावले सामान्य विवाद पनि हुन सक्छ।"
    ],
    3: [
      "आज पराक्रम स्थान ({moonRashi}) मा चन्द्रमा छ, जसले तपाईंको आँट र उत्साह बढाउनेछ।",
      "{moonRashi} को चन्द्रमाको प्रभावले दाजुभाइ वा इष्टमित्रको सहयोग मिल्नेछ।",
      "नयाँ काम थालनी गर्ने सोचमा हुनुहुन्छ भने समय अनुकूल छ, तेस्रो चन्द्रमा बलियो छ।",
      "छोटो र रमाइलो यात्राको योजना बन्न सक्छ, {moonRashi} को गोचर शुभ छ।",
      "तपाईंको सक्रियता र दौडधुपले आज राम्रो प्रतिफल दिनेछ।"
    ],
    4: [
      "चौथो भाव ({moonRashi}) मा रहेको चन्द्रमाले मनमा अलि अशान्ति ल्याउन सक्छ।",
      "आज {moonRashi} को चन्द्रमाले 'कण्टक' योग सिर्जना गर्ने हुँदा पेटको ख्याल राख्नुहोला।",
      "पारिवारिक विषयमा स–साना मतभेद हुन सक्छन्, धैर्य रहनुहोला।",
      "चन्द्रमा चौथो घरमा हुनाले आज घरबाहिर भन्दा घरमै बस्न मन लाग्न सक्छ।",
      "आमाको स्वास्थ्यमा वा घरायसी सुखमा केही कमी महसुस हुन सक्छ।"
    ],
    5: [
      "पाँचौं भाव ({moonRashi}) को चन्द्रमाले मनलाई एकाग्र हुन दिँदैन, चञ्चलता बढ्नेछ।",
      "आज {moonRashi} मा गोचर गर्ने चन्द्रमाले निर्णय क्षमतामा ह्रास ल्याउन सक्छ।",
      "विद्यार्थीहरूले पढाइमा बढी ध्यान दिनुपर्ने समय छ, मन भड्किन सक्छ।",
      "संतान वा प्रेम पात्रसँगको संवादमा संयम अपनाउनुहोला, पाँचौं चन्द्रमा अलि कमजोर हुन्छ।",
      "शेयर बजार वा जुवाजन्य क्रियाकलापबाट आज टाढै रहनु उचित हुनेछ।"
    ],
    6: [
      "छैटौं भाव ({moonRashi}) मा गोचर गर्ने चन्द्रमाले शत्रु र रोगलाई परास्त गर्नेछ।",
      "आज {moonRashi} राशिमा रहेको चन्द्रमाले अड्किएका कामहरू फुकाउनेछ।",
      "तपाईंको प्रतिस्पर्धात्मक क्षमता बढ्नेछ, मुद्दा मामिलामा जित हुने योग छ।",
      "मामा वा मावली पक्षबाट आज विशेष सहयोग र स्नेह प्राप्त होला।",
      "स्वास्थ्य बलियो रहनेछ र मनमा नयाँ जोश पलाउनेछ।"
    ],
    7: [
      "सप्तम भाव ({moonRashi}) मा रहेको चन्द्रमाले व्यापार र साझेदारीमा लाभ दिलाउनेछ।",
      "आज जीवनसाथी वा प्रेम पात्रसँगको सम्बन्ध प्रगाढ हुनेछ, {moonRashi} को गोचर शुभ छ।",
      "रमाइलो यात्रा वा स्वादिष्ट भोजनको अवसर मिल्नेछ, सातौं चन्द्रमाको प्रभाव हो।",
      "{moonRashi} राशिको चन्द्रमाले विपरीत लिङ्गीको आकर्षण र सहयोग बढाउनेछ।",
      "दिन मनोरञ्जनपूर्ण र उल्लासमय रहने देखिन्छ।"
    ],
    8: [
      "आज अष्टम भाव ({moonRashi}) मा चन्द्रमा गोचर गर्दैछ, जसलाई 'चन्द्रअष्टम' भनिन्छ।",
      "{moonRashi} को चन्द्रमा आठौं घरमा हुनाले स्वास्थ्य र चोटपटकमा विशेष सावधानी अपनाउनुहोला।",
      "मनमा अज्ञात भय र चिन्ताले सताउन सक्छ, आठौं चन्द्रमा प्रतिकूल मानिन्छ।",
      "महत्त्वपूर्ण काम वा यात्रा आज नगर्नु नै बेस हुनेछ, समय अलि जोखिमपूर्ण छ।",
      "आफ्नो सामानको जतन गर्नुहोला, {moonRashi} को चन्द्रमाले क्षति गराउन सक्छ।"
    ],
    9: [
      "भाग्य स्थान ({moonRashi}) मा भए पनि नवौं चन्द्रमाले कार्यमा केही विलम्ब गराउन सक्छ।",
      "आज {moonRashi} को चन्द्रमाले पिता वा गुरुसँगको मतभेद निम्त्याउन सक्छ।",
      "धर्म कर्ममा रुचि जाग्नेछ तर मन भने केही अशान्त रहन सक्छ।",
      "सरकारी काम वा कागजी प्रक्रियामा आज अलि झन्झट व्यहोर्नुपर्ला।",
      "भाग्यमा भन्दा कर्ममा विश्वास गरेर अघि बढ्नुपर्ने दिन छ।"
    ],
    10: [
      "दशौं भाव ({moonRashi}) मा रहेको चन्द्रमाले कार्यक्षेत्रमा सफलता र प्रशंसा दिलाउनेछ।",
      "आज {moonRashi} को चन्द्रमाले तपाईंको सामाजिक प्रतिष्ठा र मान–सम्मान बढाउनेछ।",
      "बुवा वा अभिभावकको सहयोगले महत्त्वपूर्ण काम बन्ने योग छ।",
      "नयाँ दायित्व वा अवसर प्राप्त हुन सक्छ, दशौं चन्द्रमा शुभ फलदायी छ।",
      "तपाईंको नेतृत्व क्षमताको आज कदर हुनेछ।"
    ],
    11: [
      "एघारौं भाव ({moonRashi}) को चन्द्रमाले आज मनग्य आम्दानीको योग बनाएको छ।",
      "जताबाट पनि खुसीको खबर सुन्न पाइनेछ, {moonRashi} को चन्द्रमा सर्वश्रेष्ठ मानिन्छ।",
      "व्यापार व्यवसायमा राम्रो मुनाफा हुनेछ, साथीभाइको साथ रमाइलो हुनेछ।",
      "इच्छा र आकांक्षाहरू पूरा हुने दिन छ, एघारौं गोचरको फाइदा लिनुहोला।",
      "प्रेम सम्बन्ध र पारिवारिक सुखमा वृद्धि हुनेछ।"
    ],
    12: [
      "बाह्रौं भाव ({moonRashi}) मा गोचर गर्ने चन्द्रमाले खर्चको मात्रा ह्वात्तै बढाउन सक्छ।",
      "आज आँखा वा खुट्टामा समस्या आउन सक्छ, {moonRashi} को चन्द्रमा कमजोर छ।",
      "टाढाको यात्रा वा विदेशसम्बन्धी काममा भने केही सफलता मिल्न सक्छ।",
      "दान पुण्य वा परोपकारमा धन खर्च हुने योग छ, मनमा वैराग्य आउन सक्छ।",
      "फजुल खर्च नियन्त्रण गर्न आज गाह्रो पर्न सक्छ, सचेत रहनुहोला।"
    ]
  },

  BODY: {
    WEALTH: {
      GOOD: [
        "आर्थिक लाभको बलियो योग छ।",
        "व्यापार व्यवसायमा सोचेभन्दा राम्रो फाइदा हुनेछ।",
        "रोकिएको वा फसेको धन उठ्ने सम्भावना छ।",
        "नयाँ लगानीको लागि आजको दिन उत्तम छ।",
        "लटरी वा आकस्मिक धन प्राप्तिको योग देखिन्छ।",
        "सेयर बजार वा आर्थिक कारोबारमा आजको दिन फलदायी रहनेछ।",
        "आम्दानीका नयाँ स्रोतहरू फेला पर्नेछन्।",
        "ऋण लगानी गरेको रकम फिर्ता आउन सक्छ।"
      ],
      BAD: [
        "अनावस्यक खर्चले मन पिरोल्न सक्छ।",
        "आज कसैलाई पैसा सापटी नदिनुहोला, उठ्न गाह्रो हुनेछ।",
        "आर्थिक कारोबारमा धोका हुन सक्छ, सचेत रहनुहोला।",
        "व्यापारमा घाटा हुन सक्ने समय छ, लगानी विचार गरेर गर्नुहोला।",
        "बजेट असन्तुलित हुनाले तनाव बढ्न सक्छ।",
        "महँगो सामान हराउने वा चोरी हुने डर छ।",
        "आर्थिक सङ्कटको महसुस हुन सक्छ।"
      ]
    },
    HEALTH: {
      GOOD: [
        "स्वास्थ्य राम्रो रहनेछ, शरीरमा जोस र जाँगर बढ्नेछ।",
        "पुराना रोगबाट छुटकारा मिल्ने सम्भावना छ।",
        "मन प्रशन्न रहनेछ र शरीरमा सकारात्मक ऊर्जा आउनेछ।",
        "योग र व्यायाममा रुचि बढ्नेछ, दैनिकी व्यवस्थित हुनेछ।",
        "मानसिक तनाव कम भई शान्ति मिल्नेछ।",
        "अनुहारमा कान्ति र चमक आउनेछ।"
      ],
      BAD: [
        "पेट वा छाती सम्बन्धी समस्या आउन सक्छ।",
        "चोटपटकको भय छ, सवारी साधन चलाउँदा होसियार हुनुहोला।",
        "मौसमी रोग (रुघा, खोकी) ले सताउन सक्छ, तातो पानी पिउनुहोला।",
        "मनमा बिनाकारण डर र चिन्ता लाग्न सक्छ, निद्रा बिग्रन सक्छ।",
        "खानपानमा लापरवाही नगर्नुहोला, 'फूड पोइजनिङ' को डर छ।",
        "आँखा वा दाँतको दुखाइले सताउन सक्छ।"
      ]
    },
    RELATIONSHIP: {
      GOOD: [
        "दाम्पत्य जीवन सुखमय र रमाइलो रहनेछ।",
        "मित्र वर्गसँग भेटघाट र रमाइलो कुराकानी हुनेछ, मन हलुका हुनेछ।",
        "प्रेम सम्बन्धमा नयाँ आयाम थपिनेछ, विश्वास बढ्नेछ।",
        "परिवारको सहयोग र साथ पूर्ण रूपमा मिल्नेछ।",
        "नयाँ साथीभाइ बन्ने र सामाजिक दायरा बढ्नेछ।",
        "विपरीत लिङ्गीबाट विशेष सहयोग र सम्मान,मिल्नेछ।",
        "घरमा पाहुनाको आगमनले रमाइलो वातावरण बन्नेछ।"
      ],
      BAD: [
        "सानातिना कुरामा विवाद हुन सक्छ, बोलीमा नियन्त्रण गर्नुहोला।",
        "जीवनसाथीसँग मनमुटाव हुन सक्छ, समझदारीमा चल्नु बेस होला।",
        "पारिवारिक अशान्तिले मन खिन्न बनाउन सक्छ।",
        "शत्रुहरु सक्रिय हुन सक्छन्, कसैको कुरा नकाट्नुहोला।",
        "आफन्तसँगको सम्बन्धमा चिसोपना आउन सक्छ।",
        "प्रेम सम्बन्धमा शंका उपशंका बढ्न सक्छ।"
      ]
    },
    CAREER: {
      GOOD: [
        "काममा सफलता र हाकिमबाट प्रशंसा मिल्नेछ।",
        "नयाँ रोजगारीको अवसर आउन सक्छ वा जिम्मेवारी थपिन सक्छ।",
        "पद र प्रतिष्ठा बढ्ने योग छ, प्रतिस्पर्धीहरू पछि पर्नेछन्।",
        "राजनीति र समाजसेवामा सफलता मिल्नेछ, जनसमर्थन जुट्नेछ।",
        "विद्यार्थीहरूका लागि पढाइमा प्रगति हुनेछ, नतिजा राम्रो आउनेछ।",
        "वैदेशिक रोजगारी वा कामका लागि सुखद समाचार आउनेछ।"
      ],
      BAD: [
        "काममा बाधा र ढिलासुस्ती हुन सक्छ, समयको ख्याल गर्नुहोला।",
        "सहकर्मीसँग विचार नमिल्न सक्छ, एक्लै काम गर्नु फाइदाजनक होला।",
        "बनेको काम बिग्रन सक्ने डर छ, दोहोर्याएर प्रयास गर्नुपर्नेछ।",
        "पढाइ लेखाइमा मन जानेछैन, एकाग्रताको कमी हुनेछ।",
        "जिम्मेवारी पूरा गर्न कठिनाइ हुन सक्छ, आलोचित भइएला।"
      ]
    },
    GENERAL: {
      GOOD: [
        "तपाईंको व्यक्तित्वको प्रभाव बढ्नेछ।",
        "मिष्ठान्न भोजन र मनोरञ्जनको अवसर मिल्नेछ।",
        "यात्रा रमाइलो र फलदायी रहनेछ।",
        "धर्म कर्म र परोपकारमा रुचि बढ्नेछ।",
        "कला, साहित्य र सिर्जनात्मक काममा मन जानेछ."
      ],
      BAD: [
        "मन अस्थिर र चञ्चल रहनेछ, निर्णय लिन गाह्रो पर्नेछ।",
        "अनावस्यक दौडधुपले थकान बढाउनेछ।",
        "समयको ख्याल नगर्दा अवसर गुम्न सक्छ।",
        "काममा आलस्यता बढ्नेछ, दिन भारी महसुस होला।"
      ],
      MIXED: [
        "केही काम बन्नेछन् भने केही अधुरा रहन सक्छन्।",
        "सुख र दुःखको मिश्रित अनुभव हुनेछ।",
        "परिणामको लागि अलि बढी मेहनेत गर्नुपर्नेछ।",
        "सामान्य दिनचर्यामा नै दिन बित्नेछ।"
      ]
    }
  },

  ADVICE: {
    GOOD: [
      "नयाँ काम सुरु गर्न आजको दिन शुभ छ।",
      "अवसरको सदुपयोग गर्नुहोला, समय बलवान छ।",
      "सकारात्मक सोच राख्नुहोला, प्रगति हुनेछ।",
      "सहयोगीहरुको साथ लिन नहिचकिचाउनुहोला।",
      "भगवानको स्मरण गर्दै दिनको सुरुवात गर्नुहोला।",
      "साहस र धैर्यले काम लिँदा सफलता निश्चित छ।"
    ],
    BAD: [
      "आज ठूलो लगानी वा जोखिमपूर्ण काम नगर्नुहोला।",
      "वादविवादबाट टाढा रहनु नै बुद्धिमानी हुनेछ।",
      "धैर्य र संयम अपनाउनुहोला, समय परिवर्तनशील छ।",
      "महत्वपूर्ण निर्णय भोलिको लागि सार्नु बेस होला।",
      "शिवजीको आराधना वा मन्दिर दर्शनले शान्ति दिनेछ।",
      "सवारी साधन चलाउँदा वा बाटो काट्दा हतार नगर्नुहोला।"
    ],
    MIXED: [
      "हतारमा निर्णय नलिनुहोला।",
      "सोचविचार गरेर मात्र पाइला चाल्नुहोला।",
      "सामान्य दिनचर्यामै रमाउनु राम्रो हुनेछ।",
      "विवादमा नफस्नुहोला, आफ्नो काममा मात्र ध्यान दिनुहोस्।"
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

// LOGIC & ASSEMBLY

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
  seedBase: string,
  transitRashiName: string
): string {
  // SELECT BASE QUALITY
  const baseQuality = houseRule.quality;
  const primaryDomain = houseRule.primaryDomain;

  const baseQualityKey = (baseQuality === 'GOOD' || baseQuality === 'BAD') ? baseQuality : (baseQuality === 'MIXED' ? 'MIXED' : 'GOOD');

  // Intro
  const introList = TEXT_LIBRARY.INTRO[baseQualityKey as keyof typeof TEXT_LIBRARY.INTRO];
  const intro = getRandomItem(seedBase + "INTRO", introList);

  // Reasoning (Specific to House)
  const reasonList = TEXT_LIBRARY.REASONING[houseRule.house as keyof typeof TEXT_LIBRARY.REASONING] || [];
  let reason = reasonList.length > 0 ? getRandomItem(seedBase + "REASON", reasonList) : "";

  // REPLACE PLACEHOLDERS
  reason = reason.replace(/{moonRashi}/g, transitRashiName);

  // Body (Split Domain Logic)
  // We try to pick one from Primary Domain + one from a Secondary Domain

  // Primary Domain (Check for override)
  const primaryOverride = houseRule.domainQualities?.[primaryDomain];
  const effectivePrimaryQuality = primaryOverride || baseQuality;
  const primaryQualityKey = (effectivePrimaryQuality === 'GOOD' || effectivePrimaryQuality === 'BAD') ? effectivePrimaryQuality : 'MIXED';

  const bodyPoolPrimary = TEXT_LIBRARY.BODY[primaryDomain as keyof typeof TEXT_LIBRARY.BODY]?.[primaryQualityKey as 'GOOD' | 'BAD'] || [];
  const body1 = bodyPoolPrimary.length > 0 ? getRandomItem(seedBase + "BODY1", bodyPoolPrimary) : "";

  // Secondary Domain (Check for override)
  // To ensure variety, we cycle through domains based on seed, excluding proper primary.
  const ALL_DOMAINS: Domain[] = ['WEALTH', 'HEALTH', 'RELATIONSHIP', 'CAREER'];
  const otherDomains = ALL_DOMAINS.filter(d => d !== primaryDomain);
  const secondaryDomain = getRandomItem(seedBase + "SEC_DOM", otherDomains) as Domain;

  const secondaryOverride = houseRule.domainQualities?.[secondaryDomain];
  const effectiveSecondaryQuality = secondaryOverride || baseQuality; // Default to base house quality
  const secondaryQualityKey = (effectiveSecondaryQuality === 'GOOD' || effectiveSecondaryQuality === 'BAD') ? effectiveSecondaryQuality : 'MIXED';

  // If Override exists, we strongly prefer picking it. If not, pick from General or Secondary Domain.
  const bodyPoolSecondary = TEXT_LIBRARY.BODY[secondaryDomain as keyof typeof TEXT_LIBRARY.BODY]?.[secondaryQualityKey as 'GOOD' | 'BAD'] || TEXT_LIBRARY.BODY.GENERAL[baseQualityKey as 'GOOD' | 'BAD' | 'MIXED'];
  const body2 = getRandomItem(seedBase + "BODY2", bodyPoolSecondary);

  // Advice
  const adviceList = TEXT_LIBRARY.ADVICE[baseQualityKey as keyof typeof TEXT_LIBRARY.ADVICE] || TEXT_LIBRARY.ADVICE.GOOD;
  const advice = getRandomItem(seedBase + "ADVICE", adviceList);

  // ASSEMBLE
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
    // Calculate House
    const houseIndex = (moonRashiIndex - userRashiIndex + 12) % 12; // 0-11
    const houseRule = HOUSE_RULES[houseIndex];

    // Generate Prediction
    const seed = `${dateKey}-${userRashiIndex}-${tithiName}-${nakshatraName}`;
    const prediction = assemblePrediction(houseRule, seed, currentMoonRashi);

    // Rating Jitter
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
