import { getSunriseSunset, fromBikramSambat, toDevanagari, fromDevanagari } from '../core/bikram';
import { NAKSHATRA_NAMES } from './lib';

// rashifalLogic.ts
// Implements Authentic Chandra Gochar (Moon Transit) System
// Features:
// - House Calculation (1-12)
// - Template Assembly Engine for high variety (10+ formats)
// - Deterministic Hashing for consistent daily results per user

type Quality = 'GOOD' | 'BAD' | 'MIXED' | 'NEUTRAL';
type Domain = 'WEALTH' | 'HEALTH' | 'RELATIONSHIP' | 'CAREER' | 'GENERAL';

interface HouseInfo {
  house: number; // 1-12
  quality: Quality;
  primaryDomain: Domain;
  description: string; // Astrological label e.g., "Dhana Bhava"
  rating: number; // 1-5
  domainQualities?: Partial<Record<Domain, Quality>>;
}

// Map House Index (0-11) to House Properties
// House 1 is Index 0.
const HOUSE_RULES: Record<number, HouseInfo> = {
  0: { house: 1, quality: 'GOOD', primaryDomain: 'HEALTH', description: "देह भवन (Excellent Health)", rating: 4, domainQualities: { WEALTH: 'MIXED' } },
  1: { house: 2, quality: 'BAD', primaryDomain: 'WEALTH', description: "धन स्थान (Wealth Loss)", rating: 2 },
  2: { house: 3, quality: 'GOOD', primaryDomain: 'CAREER', description: "पराक्रम स्थान (Success)", rating: 5, domainQualities: { RELATIONSHIP: 'MIXED' } }, // Siblings dispute
  3: { house: 4, quality: 'BAD', primaryDomain: 'HEALTH', description: "मातृ/सुख स्थान (Unrest)", rating: 2 },
  4: { house: 5, quality: 'BAD', primaryDomain: 'RELATIONSHIP', description: "विद्या/पुत्र स्थान (Mental Worry)", rating: 2, domainQualities: { CAREER: 'MIXED' } },
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
      "आजको ग्रह स्थितिले तपाईंलाई विशेष ऊर्जा प्रदान गर्नेछ।",
      "आजको दिन उमंग र उत्साहले भरिपूर्ण रहनेछ।",
      "तपाईंको कार्यक्षमता र आत्मविश्वास बढ्ने समय छ।",
      "ग्रहहरुको साथले गर्दा आज सोचेका कामहरु सजिलै बन्नेछन्।"
    ],
    BAD: [
      "आज समय अलि प्रतिकूल रहन सक्छ, सचेत रहनुहोला।",
      "ग्रह गोचर त्यति अनुकूल नभएकोले सावधानी अपनाउनु पर्नेछ।",
      "आजको दिन अलि संघर्षपूर्ण रहन सक्छ।",
      "चन्द्रमाको स्थिति कमजोर भएकोले मनमा चिन्ता बढ्न सक्छ।",
      "आज महत्त्वपूर्ण निर्णय लिँदा वा यात्रा गर्दा ध्यान पुर्याउनुहोला।",
      "परिस्थितिले केही चुनौतीहरू सिर्जना गर्न सक्छ।",
      "आजको दिन धैर्य र संयम अपनाउनुपर्ने देखिन्छ।",
      "सोचेअनुसार काम नबन्दा मन खिन्न हुन सक्छ।",
      "आजको प्रयासमा केही बाधा आउन सक्ने देखिन्छ।",
      "सवारी साधन चलाउँदा वा बाटो काट्दा विशेष ख्याल गर्नुहोला।"
    ],
    MIXED: [
      "आजको दिन मिश्रित फलदायी रहनेछ।",
      "शुभ र अशुभ दुबै थरीका अनुभव हुन सक्छन्।",
      "समय सामान्य छ, न त धेरै राम्रो न त धेरै नराम्रो।",
      "आजको दिन मध्यम रहनेछ, धैर्यता अपनाउनुहोला।",
      "परिस्थितिसँग सम्झौता गरेर अघि बढ्नु पर्ने देखिन्छ।",
      "हतारमा निर्णय नलिनुहोला, समय तटस्थ छ।",
      "बिहानको समय राम्रो भएपनि साँझपख अलि सतर्क रहनुपर्ला।",
      "आज नाफा र नोक्सान दुवै समान रहने देखिन्छ।"
    ]
  },

  // Specific Astrological Reasoning (Why?) based on House
  // We now use {moonRashi} to make it specific.
  REASONING: {
    1: [
      "{userRashi} राशिको आफ्नै राशि ({moonRashi}) मा आज चन्द्रमाको उपस्थिति छ।",
      "आज {userRashi} राशिको लागि प्रथम भाव ({moonRashi}) मा चन्द्रमा रहेकाले 'भोजन सुख' मिल्नेछ।",
      "{userRashi} राशिको आफ्नै आरम्भिक स्थान ({moonRashi}) मा चन्द्रमाको गोचर हुनाले व्यक्तित्वमा निखार आउनेछ।",
      "आज {moonRashi} राशिको चन्द्रमा {userRashi}को लागि पहिलो घरमा पर्दछ, जसले स्फूर्ति दिनेछ।",
      "{moonRashi} राशिको चन्द्रमाले आज {userRashi} राशि भएका व्यक्तिहरूलाई विशेष प्रभाव पार्नेछ।",
      "{moonRashi} राशिमा चन्द्रमाको उपस्थितिले आज तपाईंलाई 'भोजन सुख' र 'आरोग्यता' प्रदान गर्नेछ।",
      "तपाईंको आफ्नै राशिमा आज चन्द्रमा रहेकोले आत्मविश्वास बढ्ने समय छ।",
      "आजको दिन {moonRashi} को चन्द्रमाले तपाईंको व्यक्तित्वमा निखार ल्याउनेछ।",
      "शरीरमा स्फूर्ति र मनमा उत्साह रहनेछ, किनकि आज चन्द्रदेव तपाईंको राशिमा हुनुहुन्छ।",
      "{moonRashi} राशिको चन्द्रमाले तपाईंलाई आज विशेष आकर्षण शक्ति दिनेछ।"
    ],
    2: [
      "{userRashi} राशिको लागि आज धन स्थान ({moonRashi}) मा चन्द्रमाको गोचर रहेको छ।",
      "आज {userRashi}को दोस्रो भाव ({moonRashi}) मा चन्द्रमा रहेकाले खर्चको मात्रा बढ्न सक्छ।",
      "{userRashi}को आर्थिक भाव ({moonRashi}) मा चन्द्रमाको उपस्थितिले बोलीमा प्रभाव ल्याउनेछ।",
      "आज {moonRashi} राशिको चन्द्रमा {userRashi}को लागि दोस्रो स्थानमा पर्दछ, सचेत रहनुहोला।",
      "{userRashi} राशिको धन स्थानमा चन्द्रमाको प्रभावले आर्थिक कारोबारमा ध्यान दिनु पर्नेछ।",
      "धन स्थान ({moonRashi}) मा गोचर गर्ने चन्द्रमाले आज खर्चको मात्रा बढाउन सक्छ।",
      "आज सञ्चित धन चलाउनुपर्ने अवस्था आउन सक्छ, {moonRashi} मा चन्द्रमा प्रतिकूल छ।",
      "{moonRashi} को चन्द्रमाले मुखमा अलि कडाइ ल्याउन सक्छ, बोलीमा विचार पुर्याउनुहोला।",
      "आर्थिक कारोबारमा आज अलि सचेत रहनुपर्ने दिन छ, दोस्रो भावमा चन्द्रमा छ।",
      "खानपानमा रुचि जाग्नेछ तर {moonRashi} को प्रभावले सामान्य विवाद पनि हुन सक्छ।"
    ],
    3: [
      "{userRashi} राशिको लागि आज पराक्रम स्थान ({moonRashi}) मा चन्द्रमाको गोचर छ।",
      "आज {userRashi}को तेस्रो भाव ({moonRashi}) मा चन्द्रमा रहेकाले आँट र उत्साह बढ्नेछ।",
      "{userRashi}को पुरुषार्थ भाव ({moonRashi}) मा चन्द्रमाको उपस्थितिले नयाँ अवसर दिलाउनेछ।",
      "आज {moonRashi} को चन्द्रमा {userRashi}को लागि तेस्रो स्थानमा पर्दछ, ईष्टमित्रको सहयोग मिल्नेछ।",
      "{userRashi}को तेस्रो भावमा चन्द्रमा बलियो हुनाले यात्राको योग बन्न सक्छ।",
      "आज पराक्रम स्थान ({moonRashi}) मा चन्द्रमा छ, जसले तपाईंको आँट र उत्साह बढाउनेछ।",
      "{moonRashi} को चन्द्रमाको प्रभावले दाजुभाइ वा इष्टमित्रको सहयोग मिल्नेछ।",
      "नयाँ काम थालनी गर्ने सोचमा हुनुहुन्छ भने समय अनुकूल छ, तेस्रो चन्द्रमा बलियो छ।",
      "छोटो र रमाइलो यात्राको योजना बन्न सक्छ, {moonRashi} को गोचर शुभ छ।",
      "तपाईंको सक्रियता र दौधुपले आज राम्रो प्रतिफल दिनेछ।"
    ],
    4: [
      "{userRashi} राशिको लागि आज चौथो भाव ({moonRashi}) मा चन्द्रमाको गोचर रहेको छ।",
      "आज {userRashi}को सुख स्थान ({moonRashi}) मा चन्द्रमा रहेकाले मनमा केही अशान्ति हुन सक्छ।",
      "{userRashi}को मातृ भाव ({moonRashi}) मा चन्द्रमाको उपस्थितिले घरायसी विषयमा ध्यान तान्नेछ।",
      "आज {moonRashi} को चन्द्रमा {userRashi}को लागि चौथो घरमा पर्दछ, जसलाई 'कण्टक' पनि भनिन्छ।",
      "{userRashi}को चौथो भावमा चन्द्रमा कमजोर हुनाले स्वास्थ्यमा ध्यान दिनुहोला।",
      "चौथो भाव ({moonRashi}) मा रहेको चन्द्रमाले मनमा अलि अशान्ति ल्याउन सक्छ।",
      "आज {moonRashi} को चन्द्रमाले 'कण्टक' योग सिर्जना गर्ने हुँदा पेटको ख्याल राख्नुहोला।",
      "पारिवारिक विषयमा स–साना मतभेद हुन सक्छन्, धैर्य रहनुहोला।",
      "चन्द्रमा चौथो घरमा हुनाले आज घरबाहिर भन्दा घरमै बस्न मन लाग्न सक्छ।",
      "आमाको स्वास्थ्यमा वा घरायसी सुखमा केही कमी महसुस हुन सक्छ।"
    ],
    5: [
      "{userRashi} राशिको लागि आज पाँचौं भाव ({moonRashi}) मा चन्द्रमाको गोचर रहेको छ।",
      "आज {userRashi}को विद्या स्थान ({moonRashi}) मा चन्द्रमा रहेकाले मन चञ्चल हुन सक्छ।",
      "{userRashi}को सन्तान भाव ({moonRashi}) मा चन्द्रमाको उपस्थितिले सिर्जनात्मकता बढाउनेछ।",
      "आज {moonRashi} को चन्द्रमा {userRashi}को लागि पाँचौं स्थानमा पर्दछ, निर्णयमा हतार नगर्नुहोला।",
      "{userRashi}को पाँचौं भावमा चन्द्रमा कमजोर हुनाले शेयर बजारमा सावधानी अपनाउनुहोला।",
      "पाँचौं भाव ({moonRashi}) को चन्द्रमाले मनलाई एकाग्र हुन दिँदैन, चञ्चलता बढ्नेछ।",
      "आज {moonRashi} मा गोचर गर्ने चन्द्रमाले निर्णय क्षमतामा ह्रास ल्याउन सक्छ।",
      "विद्यार्थीहरूले पढाइमा बढी ध्यान दिनुपर्ने समय छ, मन भड्किन सक्छ।",
      "सन्तान वा प्रेम पात्रसँगको संवादमा संयम अपनाउनुहोला, पाँचौं चन्द्रमा अलि कमजोर हुन्छ।",
      "शेयर बजार वा जुवाजन्य क्रियाकलापबाट आज टाढै रहनु उचित हुनेछ।"
    ],
    6: [
      "{userRashi} राशिको लागि आज छैटौं भाव ({moonRashi}) मा चन्द्रमाको गोचर छ।",
      "आज {userRashi}को शत्रु स्थान ({moonRashi}) मा चन्द्रमा रहेकाले रोकिएका काम बन्नेछन्।",
      "{userRashi}को रोग भाव ({moonRashi}) मा चन्द्रमाको उपस्थितिले स्वास्थ्यमा सुधार ल्याउनेछ।",
      "आज {moonRashi} को चन्द्रमा {userRashi}को लागि छैटौं घरमा पर्दछ, जसले प्रतिस्पर्धामा जित दिलाउनेछ।",
      "{userRashi}को छैटौं भावमा चन्द्रमा बलियो हुनाले मुद्दा मामिलामा अनुकूलता मिल्नेछ।",
      "छैटौं भाव ({moonRashi}) मा गोचर गर्ने चन्द्रमाले शत्रु र रोगलाई परास्त गर्नेछ।",
      "आज {moonRashi} राशिमा रहेको चन्द्रमाले अड्किएका कामहरू फुकाउनेछ।",
      "तपाईंको प्रतिस्पर्धात्मक क्षमता बढ्नेछ, मुद्दा मामिलामा जित हुने योग छ।",
      "मामा वा मावली पक्षबाट आज विशेष सहयोग र स्नेह प्राप्त होला।",
      "स्वास्थ्य बलियो रहनेछ र मनमा नयाँ जोश पलाउनेछ।"
    ],
    7: [
      "{userRashi} राशिको लागि आज सातौं भाव ({moonRashi}) मा चन्द्रमाको गोचर छ।",
      "आज {userRashi}को कलत्र स्थान ({moonRashi}) मा चन्द्रमा रहेकाले व्यापारमा लाभ मिल्नेछ।",
      "{userRashi}को जीवनसाथी भाव ({moonRashi}) मा चन्द्रमाको उपस्थितिले सम्बन्धमा मधुरता ल्याउनेछ।",
      "आज {moonRashi} को चन्द्रमा {userRashi}को लागि सातौं घरमा पर्दछ, रमाइलो यात्रा हुन सक्छ।",
      "{userRashi}को सातौं भावमा चन्द्रमा शुभ हुनाले साझेदारीमा सफलता प्राप्त होला।",
      "सप्तम भाव ({moonRashi}) मा रहेको चन्द्रमाले व्यापार र साझेदारीमा लाभ दिलाउनेछ।",
      "आज जीवनसाथी वा प्रेम पात्रसँगको सम्बन्ध प्रगाढ हुनेछ, {moonRashi} को गोचर शुभ छ।",
      "रमाइलो यात्रा वा स्वादिष्ट भोजनको अवसर मिल्नेछ, सातौं चन्द्रमाको प्रभाव हो।",
      "{moonRashi} राशिको चन्द्रमाले विपरीत लिङ्गीको आकर्षण र सहयोग बढाउनेछ।",
      "दिन मनोरञ्जनपूर्ण र उल्लासमय रहने देखिन्छ।"
    ],
    8: [
      "{userRashi} राशिको लागि आज अष्टम भाव ({moonRashi}) मा चन्द्रमाको गोचर छ।",
      "आज {userRashi}को आठौं भाव ({moonRashi}) मा चन्द्रमा रहेकाले यसलाई 'चन्द्रअष्टम' भनिन्छ।",
      "{userRashi}को आयु भाव ({moonRashi}) मा चन्द्रमाको उपस्थितिले स्वास्थ्यमा जोखिम देखाउन सक्छ।",
      "आज {moonRashi} को चन्द्रमा {userRashi}को लागि आठौं स्थानमा पर्दछ, जोखिमपूर्ण काम नगर्नुहोला।",
      "{userRashi}को आठौं भावमा चन्द्रमा प्रतिकूल हुनाले यात्रामा सावधानी अपनाउनुहोला।",
      "आज अष्टम भाव ({moonRashi}) मा चन्द्रमा गोचर गर्दैछ, जसलाई 'चन्द्रअष्टम' भनिन्छ।",
      "{moonRashi} को चन्द्रमा आठौं घरमा हुनाले स्वास्थ्य र चोटपटकमा विशेष सावधानी अपनाउनुहोला।",
      "मनमा अज्ञात भय र चिन्ताले सताउन सक्छ, आठौं चन्द्रमा प्रतिकूल मानिन्छ।",
      "महत्त्वपूर्ण काम वा यात्रा आज नगर्नु नै बेस हुनेछ, समय अलि जोखिमपूर्ण छ।",
      "आफ्नो सामानको जतन गर्नुहोला, {moonRashi} को चन्द्रमाले क्षति गराउन सक्छ।"
    ],
    9: [
      "{userRashi} राशिको लागि आज नवौं भाव ({moonRashi}) मा चन्द्रमाको गोचर छ।",
      "आज {userRashi}को भाग्य स्थान ({moonRashi}) मा चन्द्रमा रहेकाले कार्यमा ढिलासुस्ती हुन सक्छ।",
      "{userRashi}को धर्म भाव ({moonRashi}) मा चन्द्रमाको उपस्थितिले धार्मिक रुचि बढाउनेछ।",
      "आज {moonRashi} को चन्द्रमा {userRashi}को लागि नवौं स्थानमा पर्दछ, पिताको सल्लाह लिनुहोला।",
      "{userRashi}को नवौं भावमा चन्द्रमा मध्यम हुनाले भाग्यभन्दा कर्ममा विश्वास गर्नुहोला।",
      "भाग्य स्थान ({moonRashi}) मा भए पनि नवौं चन्द्रमाले कार्यमा केही विलम्ब गराउन सक्छ।",
      "आज {moonRashi} को चन्द्रमाले पिता वा गुरुसँगको मतभेद निम्त्याउन सक्छ।",
      "धर्म कर्ममा रुचि जाग्नेछ तर मन भने केही अशान्त रहन सक्छ।",
      "सरकारी काम वा कागजी प्रक्रियामा आज अलि झन्झट व्यहोर्नुपर्ला।",
      "भाग्यमा भन्दा कर्ममा विश्वास गरेर अघि बढ्नुपर्ने दिन छ।"
    ],
    10: [
      "{userRashi} राशिको लागि आज दशौं भाव ({moonRashi}) मा चन्द्रमाको गोचर छ।",
      "आज {userRashi}को कर्म स्थान ({moonRashi}) मा चन्द्रमा रहेकाले कार्यक्षेत्रमा सफलता मिल्नेछ।",
      "{userRashi}को राज्य भाव ({moonRashi}) मा चन्द्रमाको उपस्थितिले मान–सम्मान बढाउनेछ।",
      "आज {moonRashi} को चन्द्रमा {userRashi}को लागि दशौं घरमा पर्दछ, नयाँ अवसर प्राप्त होला।",
      "{userRashi}को दशौं भावमा चन्द्रमा बलियो हुनाले नेतृत्वदायी भूमिका निर्वाह गर्न सकिनेछ।",
      "दशौं भाव ({moonRashi}) मा रहेको चन्द्रमाले कार्यक्षेत्रमा सफलता र प्रशंसा दिलाउनेछ।",
      "आज {moonRashi} को चन्द्रमाले तपाईंको सामाजिक प्रतिष्ठा र मान–सम्मान बढाउनेछ।",
      "बुवा वा अभिभावकको सहयोगले महत्त्वपूर्ण काम बन्ने योग छ।",
      "नयाँ दायित्व वा अवसर प्राप्त हुन सक्छ, दशौं चन्द्रमा शुभ फलदायी छ।",
      "तपाईंको नेतृत्व क्षमताको आज कदर हुनेछ।"
    ],
    11: [
      "{userRashi} राशिको लागि आज एघारौं भाव ({moonRashi}) मा चन्द्रमाको गोचर छ।",
      "आज {userRashi}को लाभ स्थान ({moonRashi}) मा चन्द्रमा रहेकाले आर्थिक लाभको योग छ।",
      "{userRashi}को आय भाव ({moonRashi}) मा चन्द्रमाको उपस्थितिले मनग्गे आम्दानी दिलाउनेछ।",
      "आज {moonRashi} को चन्द्रमा {userRashi}को लागि एघारौं घरमा पर्दछ, इच्छा पूरा हुनेछ।",
      "{userRashi}को एघारौं भावमा चन्द्रमा सर्वश्रेष्ठ हुनाले सबैतिरबाट साथ सहयोग मिल्नेछ।",
      "एघारौं भाव ({moonRashi}) को चन्द्रमाले आज मनग्य आम्दानीको योग बनाएको छ।",
      "जताबाट पनि खुसीको खबर सुन्न पाइनेछ, {moonRashi} को चन्द्रमा सर्वश्रेष्ठ मानिन्छ।",
      "व्यापार व्यवसायमा राम्रो मुनाफा हुनेछ, साथीभाइको साथ रमाइलो हुनेछ।",
      "इच्छा र आकांक्षाहरू पूरा हुने दिन छ, एघारौं गोचरको फाइदा लिनुहोला।",
      "प्रेम सम्बन्ध र पारिवारिक सुखमा वृद्धि हुनेछ।"
    ],
    12: [
      "{userRashi} राशिको लागि आज बाह्रौं भाव ({moonRashi}) मा चन्द्रमाको गोचर छ।",
      "आज {userRashi}को व्यय स्थान ({moonRashi}) मा चन्द्रमा रहेकाले अनावश्यक खर्च बढ्न सक्छ।",
      "{userRashi}को मोक्ष भाव ({moonRashi}) मा चन्द्रमाको उपस्थितिले वैराग्य वा विदेशको योग बनाउँछ।",
      "आज {moonRashi} को चन्द्रमा {userRashi}को लागि बाह्रौं घरमा पर्दछ, आँखाको ख्याल गर्नुहोला।",
      "{userRashi}को बाह्रौं भावमा चन्द्रमा कमजोर हुनाले फजुल खर्च नियन्त्रण गर्नुहोला।",
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
        "ऋण लगानी गरेको रकम फिर्ता आउन सक्छ।",
        "बचत गर्ने प्रयास सफल हुनेछ।",
        "आर्थिक पक्ष सुदृढ रहनेछ, मनग्य धन आर्जन हुनेछ।"
      ],
      BAD: [
        "अनावस्यक खर्चले मन पिरोल्न सक्छ।",
        "आज कसैलाई पैसा सापटी नदिनुहोला, उठ्न गाह्रो हुनेछ।",
        "आर्थिक कारोबारमा धोका हुन सक्छ, सचेत रहनुहोला।",
        "व्यापारमा घाटा हुन सक्ने समय छ, लगानी विचार गरेर गर्नुहोला।",
        "बजेट असन्तुलित हुनाले तनाव बढ्न सक्छ।",
        "महँगो सामान हराउने वा चोरी हुने डर छ।",
        "आर्थिक सङ्कटको महसुस हुन सक्छ।",
        "व्यर्थको भ्रमणमा धन खर्च हुने योग छ।",
        "आम्दानी भन्दा खर्च बढ्ने देखिन्छ।"
      ]
    },
    HEALTH: {
      GOOD: [
        "स्वास्थ्य राम्रो रहनेछ, शरीरमा जोस र जाँगर बढ्नेछ।",
        "पुराना रोगबाट छुटकारा मिल्ने सम्भावना छ।",
        "मन प्रशन्न रहनेछ र शरीरमा सकारात्मक ऊर्जा आउनेछ।",
        "योग र व्यायाममा रुचि बढ्नेछ, दैनिकी व्यवस्थित हुनेछ।",
        "मानसिक तनाव कम भई शान्ति मिल्नेछ।",
        "अनुहारमा कान्ति र चमक आउनेछ।",
        "शारीरिक तन्दुरुस्तीले काम गर्न हौसला मिल्नेछ।",
        "लामो समयदेखिको स्वास्थ्य समस्या हल हुनेछ।"
      ],
      BAD: [
        "पेट वा छाती सम्बन्धी समस्या आउन सक्छ।",
        "चोटपटकको भय छ, सवारी साधन चलाउँदा होसियार हुनुहोला।",
        "मौसमी रोग (रुघा, खोकी) ले सताउन सक्छ, तातो पानी पिउनुहोला।",
        "मनमा बिनाकारण डर र चिन्ता लाग्न सक्छ, निद्रा बिग्रन सक्छ।",
        "खानपानमा लापरवाही नगर्नुहोला, 'फूड पोइजनिङ' को डर छ।",
        "आँखा वा दाँतको दुखाइले सताउन सक्छ।",
        "टाउको दुख्ने वा माइग्रेनको समस्या बल्झिन सक्छ।",
        "हड्डी वा जोर्नीसम्बन्धी पीडा हुन सक्छ।"
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
        "घरमा पाहुनाको आगमनले रमाइलो वातावरण बन्नेछ।",
        "अविवाहितहरुको लागि विवाहको कुरा चल्न सक्छ।",
        "सन्तान वा भाइबहिनीबाट खुसीको खबर सुन्न पाइनेछ।"
      ],
      BAD: [
        "सानातिना कुरामा विवाद हुन सक्छ, बोलीमा नियन्त्रण गर्नुहोला।",
        "जीवनसाथीसँग मनमुटाव हुन सक्छ, समझदारीमा चल्नु बेस होला।",
        "पारिवारिक अशान्तिले मन खिन्न बनाउन सक्छ।",
        "शत्रुहरु सक्रिय हुन सक्छन्, कसैको कुरा नकाट्नुहोला।",
        "आफन्तसँगको सम्बन्धमा चिसोपना आउन सक्छ।",
        "प्रेम सम्बन्धमा शंका उपशंका बढ्न सक्छ।",
        "घरका सदस्यहरुबीच मतभेद हुन सक्छ।",
        "आफ्नै मान्छेबाट धोका हुन सक्छ, विश्वास नगर्नुहोला।"
      ]
    },
    CAREER: {
      GOOD: [
        "काममा सफलता र हाकिमबाट प्रशंसा मिल्नेछ।",
        "नयाँ रोजगारीको अवसर आउन सक्छ वा जिम्मेवारी थपिन सक्छ।",
        "पद र प्रतिष्ठा बढ्ने योग छ, प्रतिस्पर्धीहरू पछि पर्नेछन्।",
        "राजनीति र समाजसेवामा सफलता मिल्नेछ, जनसमर्थन जुट्नेछ।",
        "विद्यार्थीहरूका लागि पढाइमा प्रगति हुनेछ, नतिजा राम्रो आउनेछ।",
        "वैदेशिक रोजगारी वा कामका लागि सुखद समाचार आउनेछ।",
        "रोकिएका अधुरा कामहरु आज बन्नेछन्।",
        "कला र साहित्यमा रुचि बढ्नेछ, सिर्जनात्मक काममा सफलता मिल्नेछ।"
      ],
      BAD: [
        "काममा बाधा र ढिलासुस्ती हुन सक्छ, समयको ख्याल गर्नुहोला।",
        "सहकर्मीसँग विचार नमिल्न सक्छ, एक्लै काम गर्नु फाइदाजनक होला।",
        "बनेको काम बिग्रन सक्ने डर छ, दोहोर्याएर प्रयास गर्नुपर्नेछ।",
        "पढाइ लेखाइमा मन जानेछैन, एकाग्रताको कमी हुनेछ।",
        "जिम्मेवारी पूरा गर्न कठिनाइ हुन सक्छ, आलोचित भइएला।",
        "शत्रुले काम बिगार्न सक्छन्, होसियार रहनुहोला।",
        "अफिसमा हाकिमको गाली खानुपर्ने अवस्था आउन सक्छ।"
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
      "साहस र धैर्यले काम लिँदा सफलता निश्चित छ।",
      "आज गरिएको लगानीले भविष्यमा राम्रो प्रतिफल दिनेछ।",
      "ठुलाबडाको आशीर्वाद लिएर काम थाल्नुहोला।"
    ],
    BAD: [
      "आज ठूलो लगानी वा जोखिमपूर्ण काम नगर्नुहोला।",
      "वादविवादबाट टाढा रहनु नै बुद्धिमानी हुनेछ।",
      "धैर्य र संयम अपनाउनुहोला, समय परिवर्तनशील छ।",
      "महत्वपूर्ण निर्णय भोलिको लागि सार्नु बेस होला।",
      "शिवजीको आराधना वा मन्दिर दर्शनले शान्ति दिनेछ।",
      "सवारी साधन चलाउँदा वा बाटो काट्दा हतार नगर्नुहोला।",
      "आज कसैसँग पैसाको कारोबार नगर्नुहोला।",
      "शान्त रहनुहोला र प्रतिक्रिया नदिनुहोला।"
    ],
    MIXED: [
      "हतारमा निर्णय नलिनुहोला।",
      "सोचविचार गरेर मात्र पाइला चाल्नुहोला।",
      "सामान्य दिनचर्यामै रमाउनु राम्रो हुनेछ।",
      "विवादमा नफस्नुहोला, आफ्नो काममा मात्र ध्यान दिनुहोस्।",
      "मध्यम मार्ग अपनाउनु बुद्धिमानी हुनेछ।"
    ]
  },

  TRANSITION: {
    SAME: [
        "<span class='font-medium'>विशेष:</span> आज {time} पछि चन्द्रमा {nextRashi} राशिमा प्रवेश गरेपनि समय {nextQuality} नै रहनेछ।",
        "दिनको उत्तरार्द्धमा ({time} पछि) चन्द्रमा {nextRashi} मा सर्नेछ, तर प्रभाव {nextQuality} नै रहनेछ।",
        "बेलुकी {time} बजे चन्द्रमाको राशि परिवर्तन ({nextRashi}) भएपनि फल {nextQuality} नै देखिन्छ।"
    ],
    GOOD_TO_BAD: [
        "<span class='text-red-600 dark:text-red-400 font-medium'>सावधानी:</span> {time} पछि चन्द्रमा {nextRashi} राशिमा जानेहुँदा समय <b>{nextQuality}</b> बन्न सक्छ।",
        "दिनको सुरु राम्रो भएपनि {time} पछि समय <b>{nextQuality}</b> रहनेछ, त्यसैले महत्त्वपूर्ण काम छिट्टै सक्नुहोला।",
        "ध्यान दिनुहोला: {time} पछि समय <b>{nextQuality}</b> हुने देखिन्छ।"
    ],
    BAD_TO_GOOD: [
        "<span class='text-green-600 dark:text-green-400 font-medium'>खुसीको खबर:</span> {time} पछि चन्द्रमा {nextRashi} राशिमा प्रवेश गर्नेहुँदा समय <b>{nextQuality}</b> बन्नेछ।",
        "धैर्य गर्नुहोला, {time} पछि समयमा सुधार आई दिन <b>{nextQuality}</b> हुनेछ।",
        "दिनको सुरुमा केही बाधा भएपनि {time} पछि भने समय <b>{nextQuality}</b> रहनेछ।"
    ],
    NEUTRAL: [
         "{time} पछि चन्द्रमा {nextRashi} राशिमा सर्नेछ, जसले गर्दा समय <b>{nextQuality}</b> हुन सक्छ।",
         "दिनको मध्यभाग ({time}) पछि चन्द्रमाको राशि परिवर्तन हुँदैछ, समय <b>{nextQuality}</b> रहनेछ।"
    ]
  },

  NAKSHATRA_TRANSITION: {
    DEFAULT: [
        "आज नक्षत्र परिवर्तन हुने देखिएको छ, जसले गर्दा समय <b>{nextNakshatra}</b> को प्रभाव सुरु हुनेछ।",
    ],
    WITH_EFFECTS: [
        "आज नक्षत्र परिवर्तन हुनाले **{goodStars}** लाई फाइदा हुनेछ भने **{badStars}** ले सावधानी अपनाउनुहोला।",
        "दिनको उत्तरार्द्धमा **{goodStars}** नक्षत्र हुनेहरुको समय सुधारिनेछ, तर **{badStars}** ले सतर्क रहनुपर्छ।",
        "आज **{nextNakshatra}** नक्षत्र सुरु हुने हुँदा **{goodStars}** का लागि शुभ समय बन्नेछ।"
    ]
  },

  CAVEAT: {
    GOOD_RASHI_BAD_STAR: [
      "यद्यपि समग्रमा समय राम्रो भएपनि **{stars}** नक्षत्र हुनेहरुले भने विशेष सावधानी अपनाउनुहोला।",
      "ग्रह बल मध्यम देखिए पनि **{stars}** नक्षत्रका व्यक्तिहरुले आजको दिन सतर्क रहनु पर्ने देखिन्छ।",
      "समय उत्साहवर्धक भए पनि **{stars}** नक्षत्र भएकाहरुका लागि केही बाधाहरु आउन सक्छन्।",
      "सामान्यतया दिन शुभ छ, तर **{stars}** नक्षत्र हुनेहरुले महत्त्वपूर्ण निर्णयमा संयम अपनाउनुहोला।"
    ],
    BAD_RASHI_GOOD_STAR: [
      "समग्रमा समय कमजोर भएपनि **{stars}** नक्षत्र हुनेहरुका लागि भने दिन लाभदायक रहनेछ।",
      "ग्रह गोचर अलि प्रतिकूल देखिए पनि **{stars}** नक्षत्र हुनेहरुका लागि समयले साथ दिनेछ।",
      "दिन केही संघर्षपूर्ण रहे पनि **{stars}** नक्षत्र हुनेहरुलाई भने आकस्मिक लाभ मिल्न सक्छ।",
      "सावधानी अपनाउनु पर्ने समय भए तापनि **{stars}** नक्षत्रका लागि भने अवसरहरु प्राप्त हुनेछन्।"
    ],
    JANMA_RASHI: [
      "आज तपाईंको आफ्नै राशिमा चन्द्रमाको गोचर (जन्म राशि) रहेकाले मनमा उत्साह र शरीरमा स्फूर्ति रहनेछ।",
      "तपाईंको राशिमा आज चन्द्रमाको उपस्थिति छ, जसले गर्दा आजको दिन विशेष र स्मरणीय रहन सक्छ।",
      "चन्द्रदेव आज तपाईंको आफ्नै राशिमा हुनुहुन्छ, आत्मविश्वासका साथ अघि बढ्नुहोला।"
    ],
    JANMA_NAKSHATRA: [
      "विशेष गरी आज **{stars}** नक्षत्र हुनेहरुको आफ्नै नक्षत्रमा चन्द्रमा रहेकाले (जन्म तारा) केही भावुकता र चञ्चलता बढ्न सक्छ, संयम रहनुहोला।",
      "आज **{stars}** नक्षत्रका व्यक्तिहरुको आफ्नै जन्मदिनको नक्षत्र परेकोले महत्त्वपूर्ण काममा धैर्यता अपनाउनु उचित हुनेछ।",
      "आज तपाईंको जन्म नक्षत्र **{stars}** मा चन्द्रमाको गोचर छ, स्वास्थ्य र निर्णय प्रक्रियामा विशेष ध्यान दिनुहोला।"
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
  technicalReason?: string; // e.g. "Moon in 8th house (Chandrashtama)"
  nakshatraBishesh?: string; // e.g. Nakshatra-specific caveats and star details
}

// TARA BALAM LOGIC (Star Compatibility)

// Mapping of Rashi Index (0-11) to Constituent Nakshatras (Indices 0-26)
// Approx: Each Rashi = 2.25 Nakshatras
const RASHI_NAKSHATRAS: Record<number, number[]> = {
  0: [0, 1, 2], // Mesh: Ashwini, Bharani, Krittika (1)
  1: [2, 3, 4], // Brish: Krittika, Rohini, Mrigashira (1/2)
  2: [4, 5, 6], // Mithun: Mrigashira, Ardra, Punarvasu (3)
  3: [6, 7, 8], // Karkat: Punarvasu, Pushya, Ashlesha
  4: [9, 10, 11], // Simha: Magha, Purva Phalguni, Uttara Phalguni (1)
  5: [11, 12, 13], // Kanya: Uttara Phalguni, Hasta, Chitra (1/2)
  6: [13, 14, 15], // Tula: Chitra, Swati, Vishakha (3)
  7: [15, 16, 17], // Brishchik: Vishakha, Anuradha, Jyeshtha
  8: [18, 19, 20], // Dhanu: Mula, Purva Ashadha, Uttara Ashadha (1)
  9: [20, 21, 22], // Makar: Uttara Ashadha, Shravana, Dhanistha (1/2)
  10: [22, 23, 24], // Kumbha: Dhanistha, Shatabhisha, Purva Bhadrapada (3)
  11: [24, 25, 26], // Meen: Purva Bhadrapada, Uttara Bhadrapada, Revati
};

const TARA_BALAM_RESULTS = [
  { name: "जन्म", quality: "मध्यम", desc: "शरीर कष्ट" },       // Medium/Bad
  { name: "सम्पत", quality: "शुभ", desc: "धन लाभ" },        // Good
  { name: "विपत", quality: "अशुभ", desc: "कार्य बाधा" },    // Bad
  { name: "क्षेम", quality: "शुभ", desc: "सुख शान्ति" },      // Good
  { name: "प्रत्यरि", quality: "अशुभ", desc: "चिन्ता/भय" },   // Bad
  { name: "साधक", quality: "शुभ", desc: "कार्य सिद्धि" },     // Good
  { name: "बध", quality: "अशुभ", desc: "कष्ट/मृत्यु तुल्य" },  // Very Bad
  { name: "मित्र", quality: "शुभ", desc: "सहयोग" },         // Good
  { name: "अति मित्र", quality: "शुभ", desc: "अत्यन्त सुख" }    // Excellent
];

const NAKSHATRA_SYLLABLES: Record<number, string> = {
    0: "चु, चे, चो, ला", 1: "लि, लु, ले, लो", 2: "अ, इ, उ, ए",
    3: "ओ, वा, वि, वु", 4: "वे, वो, का, कि", 5: "कु, घ, ङ, छ",
    6: "के, को, हा, हि", 7: "हु, हे, हो, डा", 8: "डि, डु, डे, डो",
    9: "मा, मि, मु, मे", 10: "मो, टा, टि, टु", 11: "टे, टो, पा, पि",
    12: "पु, ष, ण, ठ", 13: "पे, पो, रा, रि", 14: "रु, रे, रो, ता",
    15: "ति, तु, ते, तो", 16: "ना, नि, नु, ने", 17: "नो, या, यि, यु",
    18: "ये, यो, भा, भि", 19: "भु, धा, फा, ढा", 20: "भे, भो, जा, जि",
    21: "खी, खू, खे, खो", 22: "गा, गी, गू, गे", 23: "गो, सा, सी, सू",
    24: "से, सो, दा, दी", 25: "दू, थ, झ, ञ", 26: "दे, दो, चा, ची"
};


function getSyllables(nakshatraIdx: number, rashiIdx: number): string {
    const raw = NAKSHATRA_SYLLABLES[nakshatraIdx];
    if (!raw) return "";
    const parts = raw.split(/[,،]\s*/).map(s => s.trim()).filter(s => s);
    if (parts.length < 4) return raw;

    // ASHWINI (0) -> All in Mesh (0)
    // KRITTIKA (2) -> Mesh (0): 1st | Vrish (1): 2,3,4
    if (nakshatraIdx === 2) {
        return rashiIdx === 0 ? parts[0] : parts.slice(1).join(", ");
    }
    // MRIGASHIRA (4) -> Vrish (1): 1,2 | Mithun (2): 3,4
    if (nakshatraIdx === 4) {
        return rashiIdx === 1 ? parts.slice(0, 2).join(", ") : parts.slice(2).join(", ");
    }
    // PUNARVASU (6) -> Mithun (2): 1,2,3 | Karkat (3): 4
    if (nakshatraIdx === 6) {
        return rashiIdx === 2 ? parts.slice(0, 3).join(", ") : parts[3];
    }
    // UTTARA PHALGUNI (11) -> Simha (4): 1 | Kanya (5): 2,3,4
    if (nakshatraIdx === 11) {
        return rashiIdx === 4 ? parts[0] : parts.slice(1).join(", ");
    }
    // CHITRA (13) -> Kanya (5): 1,2 | Tula (6): 3,4
    if (nakshatraIdx === 13) {
        return rashiIdx === 5 ? parts.slice(0, 2).join(", ") : parts.slice(2).join(", ");
    }
    // VISHAKHA (15) -> Tula (6): 1,2,3 | Vrishchik (7): 4
    if (nakshatraIdx === 15) {
        return rashiIdx === 6 ? parts.slice(0, 3).join(", ") : parts[3];
    }
    // UTTARA ASHADHA (20) -> Dhanu (8): 1 | Makar (9): 2,3,4
    if (nakshatraIdx === 20) {
        return rashiIdx === 8 ? parts[0] : parts.slice(1).join(", ");
    }
    // DHANISTHA (22) -> Makar (9): 1,2 | Kumbha (10): 3,4
    if (nakshatraIdx === 22) {
        return rashiIdx === 9 ? parts.slice(0, 2).join(", ") : parts.slice(2).join(", ");
    }
    // PURVA BHADRAPADA (24) -> Kumbha (10): 1,2,3 | Meen (11): 4
    if (nakshatraIdx === 24) {
        return rashiIdx === 10 ? parts.slice(0, 3).join(", ") : parts[3];
    }

    return raw; // For nakshatras wholly in one rashi
}

function calculateTaraBalam(userNakshatraIdx: number, dailyNakshatraIdx: number): { quality: string, desc: string, result: string } {
    // Count from User Star to Daily Star
    let count = (dailyNakshatraIdx - userNakshatraIdx + 27) % 27 + 1;
    // Divide by 9, take remainder. If 0 (i.e. 9, 18, 27) -> 9.
    let remainder = (count - 1) % 9;

    return {
        quality: TARA_BALAM_RESULTS[remainder].quality,
        desc: TARA_BALAM_RESULTS[remainder].desc,
        result: TARA_BALAM_RESULTS[remainder].name
    };
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

function generateShortPrediction(
  houseRule: HouseInfo,
  seedBase: string,
  transitRashiName: string,
  userRashiName: string
): string {
  // Reasoning (Specific to House)
  const reasonList = TEXT_LIBRARY.REASONING[houseRule.house as keyof typeof TEXT_LIBRARY.REASONING] || [];
  let reason = reasonList.length > 0 ? getRandomItem(seedBase + "REASON", reasonList) : "";

  // REPLACE PLACEHOLDERS
  reason = reason
    .replace(/{moonRashi}/g, transitRashiName)
    .replace(/{userRashi}/g, userRashiName)
    .replace(/{house}/g, toDevanagari(houseRule.house.toString()));

  return reason;
}
// BODY (Primary Domain) - 1 Sentence
// The original `generateShortPrediction` also included a body part.
// The instruction implies it should only return the reason.
// The `assemblePrediction` function below still generates the full prediction.

function assemblePrediction(
  houseRule: HouseInfo,
  seedBase: string,
  transitRashiName: string,
  userRashiName: string
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
  reason = reason
    .replace(/{moonRashi}/g, transitRashiName)
    .replace(/{userRashi}/g, userRashiName)
    .replace(/{house}/g, toDevanagari(houseRule.house.toString()));

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
  currentMoonRashi: string = "मेष",
  nextMoonRashi?: string | null,
  transitionTime?: string | null,
  nextNakshatra?: string | null,
  nakshatraTransitionTime?: string | null,
  sunriseTime?: string // Format "06:45 AM"
): RashifalData[] {

  // ANALYZE TRANSITION TIME & DETERMINE EFFECTIVE RASHI
  let isEarlyTransition = false;
  let transitionMinutes = 0;
  let sunriseMinutes = 0;
  let cutoffMinutes = 20 * 60; // 8 PM

  if (nextMoonRashi && transitionTime) {
      try {
          // Parse Transition Time
      const mins = parseTimeMins(transitionTime);
      if (mins !== -1) {
          transitionMinutes = mins;
          const h = Math.floor(mins / 60);
          const m = mins % 60;

          const roundedM = m < 15 ? 0 : m < 45 ? 30 : 60;
          let dispH = h;
          if (roundedM === 60) {
              dispH += 1;
          }
      }

          // Parse Sunrise Time
          let sunriseH = 6;
          let sunriseM = 0;
          if (sunriseTime) {
             try {
                const mins = parseTimeMins(sunriseTime);
                if (mins !== -1) {
                    sunriseMinutes = mins;
                    sunriseH = Math.floor(mins / 60);
                    sunriseM = mins % 60;
                }
             } catch(e) {}
          } else {
             // Fallback calculation (kept from previous logic)
             try {
                 const parts = dateKey.split('-').map(Number);
                 if (parts.length === 3) {
                    const adDate = fromBikramSambat(parts[0], parts[1] - 1, parts[2]);
                    const sunData = getSunriseSunset(adDate);
                    const [sH, sM] = sunData.sunrise.split(':').map(Number);
                    if (!isNaN(sH)) {
                        sunriseH = sH;
                        sunriseM = sM;
                    }
                 }
             } catch (err) {}
          }
          sunriseMinutes = sunriseH * 60 + sunriseM;

          // Check Conditions
          // Must be after sunrise
          const isRelevant = transitionMinutes >= sunriseMinutes && transitionMinutes < cutoffMinutes;

          if (isRelevant) {
             // Check if Early (Before 12 PM = 720 minutes)
             if (transitionMinutes < 720) {
                 isEarlyTransition = true;
             }
          }
      } catch (err) {
          // On error, fallback to standard (isEarlyTransition = false)
      }
  }

  // Determine Primary Rashi (Majority of the Day)
  const primaryRashiName = isEarlyTransition && nextMoonRashi ? nextMoonRashi : currentMoonRashi;
  const secondaryRashiName = isEarlyTransition ? currentMoonRashi : (nextMoonRashi || "");

  let primaryRashiIndex = RASHI_NAME_TO_INDEX[primaryRashiName];
  if (primaryRashiIndex === undefined) primaryRashiIndex = 0;

  let secondaryRashiIndex = secondaryRashiName ? RASHI_NAME_TO_INDEX[secondaryRashiName] : undefined;


  return RASHI_NAMES_NEP.map((rashiName, userRashiIndex) => {
    // Calculate House based on PRIMARY Rashi
    const houseIndex = (primaryRashiIndex - userRashiIndex + 12) % 12; // 0-11
    const houseRule = HOUSE_RULES[houseIndex];
    let extraTechnicalReason = "";
    // Default Technical Reason (Standard)
    let technicalText = `चन्द्रमा आज तपाईंको राशिबाट **${houseIndex + 1} औं** भावमा (${houseRule.description}) गोचर।`;

    // Generate Prediction (Using Primary Rashi)
    const seed = `${dateKey}-${userRashiIndex}-${tithiName}-${nakshatraName}`;
    // Pass primaryRashiName to template
    // Generate Prediction with Chronological Flow
    let prediction = "";

    // Check if transition is relevant for display text
    const isTransitionDisplayable = nextMoonRashi && transitionTime && secondaryRashiIndex !== undefined && nextMoonRashi !== currentMoonRashi &&
                                    transitionMinutes >= sunriseMinutes && transitionMinutes < cutoffMinutes;

    if (isTransitionDisplayable) {
         const roundedTime = roundToNearest30(transitionTime);
         const qualityMap: Record<string, string> = { 'GOOD': 'शुभ', 'BAD': 'प्रतिकूल', 'MIXED': 'सामान्य' };

         if (isEarlyTransition) {
             // CHRONOLOGY: Morning (Secondary) -> Day (Primary)
             const secHouseIndex = (secondaryRashiIndex! - userRashiIndex + 12) % 12;
             const secHouseRule = HOUSE_RULES[secHouseIndex];
             const secQualityText = qualityMap[secHouseRule.quality];
             const morningDuration = transitionMinutes - sunriseMinutes;

             let morningText = "";
             if (morningDuration > 240) { // > 4 Hours: DETAILED RESULT
                 const shortPred = generateShortPrediction(secHouseRule, seed + "MORN", secondaryRashiName, rashiName);
                 // Variations:
                 const templates = [
                    `बिहान ${roundedTime} सम्म चन्द्रमा ${secondaryRashiName} राशिमा रहनेछ। ${shortPred}`,
                    `बिहान ${roundedTime} बजेसम्म समय ${secQualityText} रहनेछ। ${shortPred}`,
                    `बिहानको समयमा चन्द्रमाको प्रभाव ${secondaryRashiName} मा रहनेछ। ${shortPred}`
                 ];
                 morningText = getRandomItem(seed + "MORN_T", templates);
             } else {
                 morningText = `बिहान ${roundedTime} सम्म चन्द्रमा ${secondaryRashiName} राशिमा रहनेछ।`;
             }

             const dayText = assemblePrediction(houseRule, seed + "DAY", primaryRashiName, rashiName);
             prediction = `${morningText} ${dayText}`;

             extraTechnicalReason += `<br/><div class='mt-2 pt-2 border-t border-blue-200 dark:border-blue-800'><span class='text-purple-600 dark:text-purple-400 font-bold'>राशि परिवर्तन:</span> ${secondaryRashiName} ➝ ${primaryRashiName} (${transitionTime})<br/><span class='text-[10px] text-gray-600 dark:text-gray-300'>${transitionTime} पछि चन्द्रमा ${houseIndex + 1} औं भावमा (${houseRule.description}) प्रवेश गर्नेछ।</span></div>`;

             // Dynamic Technical Reason (Early)
             technicalText = `चन्द्रमा बिहान ${transitionTime} सम्म **${secHouseIndex + 1} औं** भावमा र त्यसपछि **${houseIndex + 1} औं** भावमा (${houseRule.description}) गोचर।`;

         } else {
             // CHRONOLOGY: Day (Primary) -> Evening (Secondary)
             const secHouseIndex = (secondaryRashiIndex! - userRashiIndex + 12) % 12;
             const secHouseRule = HOUSE_RULES[secHouseIndex];
             const secQualityText = qualityMap[secHouseRule.quality];

             const dayText = assemblePrediction(houseRule, seed + "DAY", primaryRashiName, rashiName);
             let eveningText = "";

             const eveningDuration = cutoffMinutes - transitionMinutes;
             if (eveningDuration > 180) { // > 3 Hours
                  const shortPred = generateShortPrediction(secHouseRule, seed + "EVE", secondaryRashiName, rashiName);
                  const templates = [
                    `${roundedTime} पछि चन्द्रमा ${secondaryRashiName} मा सर्नेछ, जसले गर्दा ${shortPred}`,
                    `${roundedTime} बजेपछि भने समय ${secQualityText} रहनेछ। ${shortPred}`,
                    `साँझ ${roundedTime} पछि चन्द्रमाको राशि परिवर्तन हुनेछ। ${shortPred}`
                  ];
                  eveningText = getRandomItem(seed + "EVE_T", templates);
             } else {
                  eveningText = `${roundedTime} पछि चन्द्रमा ${secondaryRashiName} राशिमा प्रवेश गर्नेछ।`;
             }

             prediction = `${dayText} ${eveningText}`;

             extraTechnicalReason += `<br/><div class='mt-2 pt-2 border-t border-blue-200 dark:text-blue-800'><span class='text-purple-600 dark:text-purple-400 font-bold'>राशि परिवर्तन:</span> ${primaryRashiName} ➝ ${secondaryRashiName} (${transitionTime})<br/><span class='text-[10px] text-gray-600 dark:text-gray-300'>${transitionTime} पछि चन्द्रमा ${secHouseIndex + 1} औं भावमा (${secHouseRule.description}) सर्नेछ। (${secQualityText})</span></div>`;

             // Dynamic Technical Reason (Late)
             technicalText = `चन्द्रमा **${houseIndex + 1} औं** भावमा (${houseRule.description}) र ${transitionTime} पछि **${secHouseIndex + 1} औं** भावमा (${secHouseRule.description}) गोचर।`;
         }

    } else {
         // STANDARD: No relevant transition, just full day prediction
         prediction = assemblePrediction(houseRule, seed, primaryRashiName, rashiName);
    }



    // DYNAMIC NAKSHATRA TRANSITION LOGIC
    if (nextNakshatra && nakshatraTransitionTime && nakshatraName) {
        const nextNkIdx = NAKSHATRA_NAMES.indexOf(nextNakshatra);
        // Ensure RASHI_NAKSHATRAS uses userRashiIndex correctly
        const constituentStars = RASHI_NAKSHATRAS[userRashiIndex];

        let nextGoodStars: string[] = [];
        let nextBadStars: string[] = [];

        if (nextNkIdx !== -1 && constituentStars) {
            constituentStars.forEach(starIdx => {
                const starName = NAKSHATRA_NAMES[starIdx];
                const tara = calculateTaraBalam(starIdx, nextNkIdx);
                // Classify
                if (tara.quality === 'शुभ' || tara.quality === 'अत्यन्त सुख' || tara.quality === 'अति मित्र' || tara.quality === 'मित्र') {
                    nextGoodStars.push(`${starName} (${tara.result})`);
                } else if (tara.quality === 'अशुभ' || tara.quality === 'कष्ट/मृत्यु तुल्य' || tara.quality === 'चिन्ता/भय' || tara.quality === 'बध' || tara.quality === 'मध्यम') {
                    nextBadStars.push(`${starName} (${tara.result})`);
                }
            });
        }

        const nkTemplates = (nextGoodStars.length > 0 || nextBadStars.length > 0)
            ? TEXT_LIBRARY.NAKSHATRA_TRANSITION.WITH_EFFECTS
            : TEXT_LIBRARY.NAKSHATRA_TRANSITION.DEFAULT;

        const nkSeed = `${dateKey}-NAKSHATRA-TRANSITION`;
        let nkText = getRandomItem(nkSeed, nkTemplates);

        if (nextGoodStars.length > 0 && nextBadStars.length > 0) {
             nkText = "{time} पछि नक्षत्र परिवर्तन हुनाले **{goodStars}** लाई फाइदा हुनेछ भने **{badStars}** ले सावधानी अपनाउनुहोला।";
        } else if (nextGoodStars.length > 0) {
             nkText = "{time} देखि **{nextNakshatra}** नक्षत्र सुरु हुने हुँदा **{goodStars}** का लागि शुभ समय बन्नेछ।";
        } else if (nextBadStars.length > 0) {
             nkText = "{time} पछि **{nextNakshatra}** सुरु हुने भएकाले **{badStars}** ले विशेष विचार पुर्याउनुहोला।";
        }

        nkText = nkText
            .replace(/{currentNakshatra}/g, nakshatraName)
            .replace(/{time}/g, nakshatraTransitionTime)
            .replace(/{nextNakshatra}/g, nextNakshatra)
            .replace(/{goodStars}/g, nextGoodStars.join(', '))
            .replace(/{badStars}/g, nextBadStars.join(', '));

        // Append to Technical Reason instead of Main Prediction
         extraTechnicalReason += `<br/><div class='mt-2 pt-2 border-t border-blue-200 dark:border-blue-800'><span class='text-purple-600 dark:text-purple-400 font-bold'>नक्षत्र परिवर्तन:</span> ${nakshatraName} ➝ ${nextNakshatra} (${nakshatraTransitionTime})<br/><span class='text-[10px] text-gray-600 dark:text-gray-300'>${nkText}</span></div>`;
    }

     // Finalize Reasoning & Stars

     // Weighted Rating Calculation
     let finalRating = houseRule.rating;

     if (isTransitionDisplayable) {
         // Calculate Weighted Average
         // houseRule is Primary. secHouseRule is Secondary.
         // If Early Transition: Secondary (Morning) -> Primary (Day).
         // If Late Transition: Primary (Day) -> Secondary (Evening).

         const totalDayMinutes = cutoffMinutes - sunriseMinutes;

         if (isEarlyTransition) { // Sec -> Pri
             const morningDuration = transitionMinutes - sunriseMinutes;
             const dayDuration = totalDayMinutes - morningDuration;

             // Sec (Morning) Rating, Pri (Day) Rating
             const secHouseIndex = (secondaryRashiIndex! - userRashiIndex + 12) % 12;
             const secHouseRule = HOUSE_RULES[secHouseIndex];

             const wRating = ((morningDuration * secHouseRule.rating) + (dayDuration * houseRule.rating)) / totalDayMinutes;
             finalRating = Math.round(wRating * 10) / 10; // 1 Decimal Place

         } else { // Pri -> Sec
             const dayDuration = transitionMinutes - sunriseMinutes;
             const eveningDuration = totalDayMinutes - dayDuration;

             // Pri (Day) Rating, Sec (Evening) Rating
              const secHouseIndex = (secondaryRashiIndex! - userRashiIndex + 12) % 12;
             const secHouseRule = HOUSE_RULES[secHouseIndex];

             const wRating = ((dayDuration * houseRule.rating) + (eveningDuration * secHouseRule.rating)) / totalDayMinutes;
             finalRating = Math.round(wRating * 10) / 10;
         }
     }

    let nakshatraBishesh = "";

    // TARA BALAM APPENDIX (Merged Logic)
    if (nakshatraName) {
        const dailyNakshatraIdx = NAKSHATRA_NAMES.indexOf(nakshatraName);
        if (dailyNakshatraIdx !== -1) {
             const constituentStars = RASHI_NAKSHATRAS[userRashiIndex];
             if (constituentStars) {
                let bisheshContent = "";
                let nkTransitionMins = parseTimeMins(nakshatraTransitionTime);

                // Identify Pre and Post Stars
                const getGroupedStars = (nkIdx: number) => {
                    if (nkIdx === -1) return [] as { names: string[], effect: string, color: string }[];
                    const groups: Record<string, { names: string[], color: string }> = {};

                    constituentStars.forEach(sIdx => {
                        const t = calculateTaraBalam(sIdx, nkIdx);
                        const effect = t.desc || t.result;

                        let color = "text-blue-600 dark:text-blue-400"; // Medium/Neutral (Janma/Normal)
                        if (t.quality === 'अशुभ' || t.result === 'विपत' || t.result === 'प्रत्यरि' || t.result === 'बध') {
                            color = "text-red-600 dark:text-red-400";
                        } else if (t.quality === 'शुभ' || t.result === 'सम्पत' || t.result === 'क्षेम' || t.result === 'साधक' || t.result === 'मित्र' || t.result === 'अति मित्र') {
                            color = "text-green-600 dark:text-green-400";
                        }

                        if (!groups[effect]) groups[effect] = { names: [], color };
                        const nakshatraName = NAKSHATRA_NAMES[sIdx];
                        const syllables = getSyllables(sIdx, userRashiIndex);
                        const displayName = syllables ? `${nakshatraName} (${syllables})` : nakshatraName;
                        groups[effect].names.push(displayName);
                    });
                    return Object.entries(groups).map(([effect, data]) => ({ effect, ...data }));
                };

                const preStars = getGroupedStars(dailyNakshatraIdx);
                const nextNkIdx = nextNakshatra ? NAKSHATRA_NAMES.indexOf(nextNakshatra) : -1;
                const postStars = nextNkIdx !== -1 ? getGroupedStars(nextNkIdx) : [];

                // Check valid transition within day
                const isNkTransitionRelevant = nkTransitionMins >= sunriseMinutes && nkTransitionMins < cutoffMinutes && nextNkIdx !== -1;

                // CAVEAT LOGIC (Split based on Consumed Time / Transition)
                const generateSectionHtml = (groups: { names: string[], effect: string, color: string }[]) => {
                    let html = "";
                    groups.forEach(g => {
                        html += `<div class='${g.color}'>- ${g.names.join(', ')} → ${g.effect}</div>`;
                    });
                    return html;
                };

                let listHtml = "";
                if (isNkTransitionRelevant) {
                    // Transition View
                    listHtml += `<div class='mb-3'>`;
                    listHtml += `<div class='font-bold text-gray-800 dark:text-gray-200 mb-1'>🕑 ${nakshatraTransitionTime} बजेअघि</div>`;
                    listHtml += generateSectionHtml(preStars);
                    listHtml += `</div>`;

                    listHtml += `<div class='mb-2'>`;
                    listHtml += `<div class='font-bold text-gray-800 dark:text-gray-200 mb-1'>🕑 ${nakshatraTransitionTime} बजेपछि</div>`;
                    listHtml += generateSectionHtml(postStars);
                    listHtml += `</div>`;
                } else {
                    // Standard View
                    listHtml += generateSectionHtml(preStars);
                }

                if (listHtml) {
                    bisheshContent += `<div class='mb-3 text-[11px] leading-relaxed'>${listHtml}</div>`;
                }

                // INJECT SPECIFIC CAVEATS (Janma Rashi / Janma Nakshatra)
                // JANMA RASHI (Moon in House 1)
                if (houseIndex === 0) {
                    const templates = TEXT_LIBRARY.CAVEAT.JANMA_RASHI;
                    const template = getRandomItem(seed + "JANMA_RASHI", templates);
                    bisheshContent += `<div class='mb-2'><span class='text-blue-600 dark:text-blue-400 text-xs font-bold'>${template}</span></div>`;
                }

                // JANMA NAKSHATRA (Star 1)
                const janmaStars = constituentStars
                    .filter(starIdx => calculateTaraBalam(starIdx, dailyNakshatraIdx).result === "जन्म")
                    .map(starIdx => NAKSHATRA_NAMES[starIdx]);

                if (janmaStars.length > 0) {
                    const templates = TEXT_LIBRARY.CAVEAT.JANMA_NAKSHATRA;
                    const template = getRandomItem(seed + "JANMA_STAR", templates);
                    const jText = template.replace(/{stars}/g, janmaStars.join(', '));
                    bisheshContent += `<div class='mb-2'><span class='text-purple-600 dark:text-purple-400 text-xs font-bold'>${jText}</span></div>`;
                }


                nakshatraBishesh = bisheshContent;
            }
        }
    }

    // Rating Jitter (Now using Weighted Final Rating)
    const rating = finalRating;

    // Use full syllables list for the rashi
    const rashiSyllables = SYLLABLES[userRashiIndex];

    return {
      id: userRashiIndex + 1,
      name: rashiName,
      syllables: rashiSyllables,
      prediction,
      rating,
      img: `${RASHI_IDS[userRashiIndex]}.png`,
      houseDescription: houseRule.description,
      technicalReason: technicalText + extraTechnicalReason,
      nakshatraBishesh
    };
  });
}

// Helper: Parse time string (English or Devanagari) into minutes from midnight
function parseTimeMins(timeStr: string | null | undefined): number {
    if (!timeStr) return -1;
    try {
        const normalized = fromDevanagari(timeStr.trim());
        const parts = normalized.split(/\s+/);
        if (parts.length < 1) return -1;

        const tPart = parts[0];
        const mPart = parts.length > 1 ? parts[1].toUpperCase() : "";

        const [hStr, mStr] = tPart.split(':');
        let h = parseInt(hStr);
        let m = parseInt(mStr) || 0;

        if (isNaN(h)) return -1;

        // Handle Meridiem
        const isPM = mPart === 'PM' || mPart === 'अपराह्न';
        const isAM = mPart === 'AM' || mPart === 'पूर्वाह्न';

        if (isPM && h !== 12) h += 12;
        if (isAM && h === 12) h = 0;

        return h * 60 + m;
    } catch (e) {
        return -1;
    }
}

// Helper: Round time to nearest 30 mins and format in Nepali
function roundToNearest30(timeStr: string, includeApprox: boolean = true): string {
    // Expected format: "HH:MM AM/PM" or "HH:MM पूर्वाह्न/अपराह्न"
    try {
        const normalized = fromDevanagari(timeStr.trim());
        const parts = normalized.split(/\s+/);
        if (parts.length < 2) return timeStr;

        const [time, meridiem] = parts;
        const [hStr, mStr] = time.split(':');

        let h = parseInt(hStr);
        let m = parseInt(mStr);

        if (isNaN(h) || isNaN(m)) return timeStr;

        // Convert to minutes from start of 12h period
        let totalMins = h * 60 + m;

        // Round to nearest 30
        const remainder = totalMins % 30;
        if (remainder >= 15) {
            totalMins += (30 - remainder);
        } else {
            totalMins -= remainder;
        }

        // Convert back
        let newH = Math.floor(totalMins / 60);
        let newM = totalMins % 60;

        if (newH === 0) newH = 12;
        if (newH > 12) newH -= 12;

        const hDisplay = toDevanagari(newH);
        const mDisplay = newM === 0 ? "" : `:${toDevanagari(newM.toString().padStart(2, '0'))}`;

        // Use normalized meridiem for comparison
        const mUpper = meridiem.toUpperCase();
        const isAM = mUpper === 'AM' || mUpper === 'पूर्वाह्न';
        const meridiemDisplay = isAM ? 'पूर्वाह्न' : 'अपराह्न';

        return includeApprox ? `करिब ${hDisplay}${mDisplay} ${meridiemDisplay}` : `${hDisplay}${mDisplay} ${meridiemDisplay}`;

    } catch (e) {
        return timeStr;
    }
}
