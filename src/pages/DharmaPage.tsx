import React, { useState } from 'react';
import {
  BookOpen,
  Sun,
  Calendar,
  Flame,
  Music,
  ChevronLeft,
  Star,
  Flower,
  Moon,
  Wind,
  Heart
} from 'lucide-react';

// --- Types for our Data Structure ---
type DharmaItem = {
  id: string;
  title: string;
  subtitle?: string;
  content?: string; // Markdown-like text content
  tags?: string[];
};

type CategoryType = {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  items: DharmaItem[];
};

// --- 1. JSON DATA (Expanded & Comprehensive) ---
const dharmaData: CategoryType[] = [
  {
    id: 'puja',
    title: 'पूजा विधि',
    description: 'दैनिक नित्य कर्म र विशेष पूजा विधि',
    icon: <Flame className="w-6 h-6 text-indigo-600" />,
    items: [
      {
        id: 'p1',
        title: 'दैनिक पूजा विधि (नित्य कर्म)',
        subtitle: 'बिहानको आध्यात्मिक सुरुवात',
        content: `हिन्दू धर्ममा दैनिक पूजा वा नित्य कर्मको ठूलो महत्व छ। यसले केवल धार्मिक आस्था मात्र नभई अनुशासन, स्वच्छता र मानसिक शान्ति पनि प्रदान गर्छ।

१. **ब्रह्म मुहूर्तमा जागरण**: सूर्योदय भन्दा करिब १.५ घण्टा अघि (४:०० - ५:३० बजे) उठ्नु स्वास्थ्य र अध्यात्मका लागि सर्वोत्तम मानिन्छ।
२. **स्नान र शुद्धीकरण**: "शरीरमाध्यं खलु धर्मसाधनम्" - धर्म गर्न शरीर शुद्ध हुनुपर्छ। स्नान गरेर धोएको चोखो वस्त्र लगाउनुहोस्।
३. **सूर्य अर्घ**: स्नान लगत्तै उदाउँदो सूर्यलाई जल चढाउनुहोस्। तामाको लोटामा जल, रातो फूल, र अक्षता राखेर "ॐ सूर्याय नमः" भन्दै अर्घ दिनुहोस्।
४. **आसन ग्रहण**: पूजा कोठामा पूर्व वा उत्तर दिशा फर्केर कुश वा ऊनको आसनमा बस्नुहोस्।
५. **दीप प्रज्वलन**: "शुभं करोति कल्याणं..." भन्दै दियो बाल्नुहोस्। अग्नि नै साक्षिको रूप हो।
६. **पञ्चोपचार पूजा**:
   - **गन्ध**: भगवानलाई चन्दन वा टीका लगाउनुहोस्।
   - **पुष्प**: ताजा फूल चढाउनुहोस्।
   - **धूप**: सुगन्धित अगरबत्ती देखाउनुहोस्।
   - **दीप**: दियो देखाउनुहोस्।
   - **नैवेद्य**: मिश्री, फलफूल वा जल प्रसादको रूपमा चढाउनुहोस्।
७. **जप र ध्यान**: आफ्नो कुलदेवता वा इष्टदेवको मन्त्र १०८ पटक जप गर्नुहोस्। ५ मिनेट मौन रही ध्यान गर्नुहोस्।
८. **विसर्जन र क्षमापन**: पूजा सकिएपछि भगवानसँग अन्जानमा भएका गल्तीका लागि क्षमा माग्नुहोस्।`
      },
      {
        id: 'p2',
        title: 'श्री गणेश पूजा',
        subtitle: 'प्रथम पूज्य देवता',
        content: `कुनै पनि शुभ कार्यको आरम्भमा गणेशजीको पूजा अनिवार्य मानिन्छ। उहाँ विघ्नहर्ता हुनुहुन्छ।

**पूजा सामग्री**: दुबो (अत्यन्त प्रिय), रातो फूल, लड्डु वा मोदक, सिन्दूर, चन्दन, र अक्षता।

**विधि**:
१. गणेशजीको मूर्तिलाई पञ्चामृत वा शुद्ध जलले स्नान गराउनुहोस्।
२. सिन्दूर र चन्दनको तिलक लगाउनुहोस्।
३. दुबोको मुठा र रातो फूल अर्पण गर्नुहोस्।
4. भोगको रूपमा लड्डु चढाउनुहोस्।
५. **मन्त्र**: "ॐ गं गणपतये नमः" वा "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥"
६. अन्त्यमा गणेश आरती गाएर परिवारमा प्रसाद वितरण गर्नुहोस्।`
      },
      {
        id: 'p3',
        title: 'लक्ष्मी पूजा (दैनिक/शुक्रबार)',
        subtitle: 'धन र समृद्धिको लागि',
        content: `माता लक्ष्मी धन, सम्पत्ति र ऐश्वर्यकी देवी हुनुहुन्छ। विशेषगरी शुक्रबार र दीपावलीमा उहाँको विशेष पूजा गरिन्छ।

**सरसफाई**: लक्ष्मी माता फोहोर स्थानमा बस्नुहुन्न। त्यसैले घरको मूल ढोका र पूजा कोठा सधैं सफा राख्नुहोस्।
**विधि**:
१. कमलको फूल वा रातो गुलाब आमालाई अत्यन्त मन पर्छ।
२. पूजामा कौडा, कमलको गेडा र श्रीयन्त्र राख्नु शुभ मानिन्छ।
३. गाईको घिउको दियो बाल्नुहोस्।
४. खीर वा सेतो मिठाईको भोग लगाउनुहोस्।
५. **मन्त्र**: "ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद श्रीं ह्रीं श्रीं ॐ महालक्ष्म्यै नमः"
६. कनकधारा स्तोत्र वा श्रीसूक्तको पाठ गर्नाले आर्थिक समस्या हट्छ भन्ने विश्वास छ।`
      },
      {
        id: 'p4',
        title: 'शिव लिङ्ग पूजा',
        subtitle: 'सरल र शीघ्र फलदायी',
        content: `भगवान शिवलाई "भोलेनाथ" भनिन्छ किनकि उहाँ थोरै भक्तिले पनि छिटो प्रसन्न हुनुहुन्छ।

**अभिषेक महत्व**: शिवजीलाई जलधारा अत्यन्त प्रिय छ। "अभिषेकप्रियः शिवः"।
**सामग्री**: बेलपत्र (नच्यातिएको ३ पत्ता भएको), धतुरो, भाङ, काँचो दूध, मह, घिउ, दही र गंगाजल।
**नियम**:
- शिवजीलाई केतकीको फूल र तुलसी चढाउनु हुँदैन।
- शङ्खबाट जल चढाउनु हुँदैन।
- हल्दी (बेसार) को प्रयोग गर्नु हुँदैन।

**विधि**:
१. तामाको लोटाबाट "ॐ नमः शिवाय" जप्दै जल चढाउनुहोस्।
२. त्यसपछि दूध, दही, महले अभिषेक गर्नुहोस्।
३. राम्रोसँग पखालेर चन्दन (त्रिपुण्ड) लगाउनुहोस्।
४. बेलपत्रको चिल्लो भाग तल पारेर चढाउनुहोस्।
५. आरती गर्नुहोस्।`
      }
    ]
  },
  {
    id: 'chadparba',
    title: 'मुख्य चाडपर्व',
    description: 'नेपाली संस्कृति, परम्परा र महत्व',
    icon: <Calendar className="w-6 h-6 text-indigo-600" />,
    items: [
      {
        id: 'c1',
        title: 'बडा दशैं (विजयादशमी)',
        subtitle: 'असत्य माथि सत्यको विजय',
        content: `दशैं नेपालीहरूको महान् राष्ट्रिय चाड हो। यो आश्विन शुक्ल प्रतिपदादेखि पूर्णिमासम्म १५ दिन मनाइन्छ।

**महत्व**:
- यो पर्व महिषासुर दैत्य माथि देवी दुर्गाको विजय र रावण माथि भगवान रामको विजयको उत्सव हो।
- यसले अन्याय, अत्याचार र असत्य माथि न्याय र सत्यको जित हुन्छ भन्ने सन्देश दिन्छ।

**मुख्य दिनहरू**:
- **घटस्थापना**: जमरा राख्ने दिन। कलश स्थापना गरी नवदुर्गाको पूजा आरम्भ गरिन्छ।
- **फूलपाती**: सातौं दिन, घरघरमा फूलपाती भित्र्याइन्छ।
- **महाअष्टमी**: कालीको उग्र रूपको पूजा गरिन्छ, वली दिने चलन छ।
- **महानवमी**: सिद्धिदात्री देवीको पूजा र तलेजु भवानीको मन्दिर खुल्ने दिन। विश्वकर्मा पूजा (हतियार पूजा) पनि गरिन्छ।
- **विजयादशमी**: मान्यजनको हातबाट टीका, जमरा र आशीर्वाद ग्रहण गर्ने मुख्य दिन।
- **कोजाग्रत पूर्णिमा**: धनधान्यकी देवी लक्ष्मीको पूजा गरी दशैंको समापन गरिन्छ।`
      },
      {
        id: 'c2',
        title: 'तिहार (यमपञ्चक)',
        subtitle: 'काग, कुकुर, गाई, लक्ष्मी र भाइको पूजा',
        content: `तिहारलाई उज्यालोको पर्व वा दीपावली पनि भनिन्छ। यो कार्तिक कृष्ण त्रयोदशीदेखि कार्तिक शुक्ल द्वितीयासम्म ५ दिन मनाइन्छ।

**पाँच दिनको महत्व**:
१. **काग तिहार**: यमराजको सन्देशवाहक कागको पूजा गरिन्छ।
२. **कुकुर तिहार**: इमान्दारिता र सुरक्षाको प्रतीक कुकुरको पूजा गरिन्छ।
३. **लक्ष्मी पूजा (गाई तिहार)**: बिहान गाईको पूजा र साँझ धनकी देवी लक्ष्मीको पूजा गरिन्छ। घरघरमा दियो बाली, रंगोली बनाई देउसी-भैलो खेलिन्छ।
४. **गोवर्द्धन पूजा/म्ह पूजा**: गोरुको पूजा, गोवर्द्धन पर्वतको पूजा र नेवार समुदायमा आफ्नो शरीरको पूजा (म्ह पूजा) गरिन्छ।
५. **भाइटीका**: दिदीबहिनीले दाजुभाइलाई सप्तरङ्गी टीका र मखमली माला लगाइदिएर दीर्घायुको कामना गर्छन्।`
      },
      {
        id: 'c3',
        title: 'हरितालिका तीज',
        subtitle: 'नारीहरूको महान् पर्व',
        content: `तीज हिन्दू नारीहरूको विशेष पर्व हो। यो भाद्र शुक्ल तृतीयाका दिन मनाइन्छ।

**पौराणिक कथा**:
माता पार्वतीले भगवान शिवलाई पतिको रूपमा प्राप्त गर्नका लागि कठोर तपस्या गर्नुभएको थियो। उहाँको तपस्याबाट प्रसन्न भई शिवजीले उहाँलाई पत्नी स्वीकार गर्नुभएको दिनको सम्झनामा तीज मनाइन्छ।

**विधि**:
- अघिल्लो दिन 'दर' खाने चलन छ।
- तीजको दिन निराहार वा जलाहार व्रत बसिन्छ।
- रातो पहिरनमा सजिएर शिव मन्दिर जाने र नाचगान गर्ने परम्परा छ।
- भोलिपल्ट गणेश चतुर्थीको दिन पूजा गरी व्रत समापन गरिन्छ।
- यस व्रतले विवाहित महिलाको पतिको आयु बढ्ने र अविवाहितले सुयोग्य वर पाउने विश्वास गरिन्छ।`
      },
      {
        id: 'c4',
        title: 'छठ पर्व',
        subtitle: 'सूर्य उपासना र शुद्धताको पर्व',
        content: `छठ पर्व विशेषगरी तराई क्षेत्रमा मनाइने भएपनि हाल नेपालभरि मनाइन्छ। यो एकमात्र यस्तो पर्व हो जहाँ अस्ताउँदो र उदाउँदो दुवै सूर्यलाई अर्घ दिइन्छ।

**विशेषता**:
- यो पर्व ४ दिनसम्म मनाइन्छ।
- यसमा मूर्ति पूजा हुँदैन, प्रत्यक्ष देवता सूर्य र छठी माताको पूजा हुन्छ।
- व्रतालुहरूले ३६ घण्टासम्म निर्जल व्रत बस्छन्।

**विधि**:
१. **नहाय-खाय**: चोखो खाने दिन।
२. **खरना**: दिनभरि व्रत बसी साँझ सख्खरको खीर खाने।
३. **सन्ध्या अर्घ**: अस्ताउँदो सूर्यलाई नदी वा पोखरीको किनारमा ठेकुवा, भुसुवा, फलफूल सहित अर्घ दिने।
४. **उषा अर्घ**: चौथो दिन बिहान उदाउँदो सूर्यलाई अर्घ दिएर पर्व समापन गर्ने।
- यो पर्वले चर्मरोग निको हुने र सन्तान प्राप्ति हुने विश्वास गरिन्छ।`
      },
      {
        id: 'c5',
        title: 'महाशिवरात्रि',
        subtitle: 'शिव र शक्तिको मिलन',
        content: `फाल्गुन कृष्ण चतुर्दशीको रातलाई महाशिवरात्रि भनिन्छ। यो रात भगवान शिवको उत्पत्ति भएको र शिव-पार्वतीको विवाह भएको मानिन्छ।

**महत्व**:
- यस दिनलाई वर्षकै सबैभन्दा अँध्यारो रात मानिन्छ, तर आध्यात्मिक रूपमा यो 'जागरणको रात' हो।
- पशुपतिनाथ लगायत देशभरका शिवालयमा भक्तजनको घुइँचो लाग्छ।
- साधुसन्तहरू धुनी जगाएर बस्छन्।

**विधि**:
- दिनभरि उपवास (व्रत) बस्ने।
- चार प्रहरको पूजा: राति चार पटक रुद्री पाठ वा अभिषेक गर्ने विधान छ।
- "ॐ नमः शिवाय" मन्त्रको अखण्ड जप गर्ने।`
      },
      {
        id: 'c6',
        title: 'माघे संक्रान्ति',
        subtitle: 'सूर्य उत्तरायण हुने दिन',
        content: `माघ १ गतेलाई माघे संक्रान्ति वा मकर संक्रान्ति भनिन्छ। यस दिन सूर्य धनु राशिबाट मकर राशिमा प्रवेश गर्छन्।

**विशेषता**:
- आजबाट दिन लामो र रात छोटो हुँदै जान्छ।
- घिउ, चाकु, तिलको लड्डु, तरुल र खिचडी खाने चलन छ। यी परिकारले जाडोमा शरीरलाई न्यानो प्रदान गर्छन्।
- थारु समुदायले यसलाई 'माघी' भनी नयाँ वर्षको रूपमा धुमधामले मनाउँछन्।
- विभिन्न नदीहरूको संगम (त्रिवेणी) मा मकर स्नान गर्नु पुण्य मानिन्छ (जस्तै: देवघाट, रिडी)।`
      },
      {
        id: 'c7',
        title: 'बुद्ध जयन्ती',
        subtitle: 'शान्ति र अहिंसाको सन्देश',
        content: `वैशाख शुक्ल पूर्णिमाको दिन गौतम बुद्धको जन्म, ज्ञान प्राप्ति (बुद्धत्व) र महापरिनिर्वाण (मृत्यु) तीनवटै घटना भएकोले यसलाई त्रिसंयोग दिवस पनि भनिन्छ।

**लुम्बिनी र विश्व शान्ति**:
- नेपालको लुम्बिनीमा जन्मिएका बुद्धले संसारलाई 'पञ्चशील' र 'अष्टमार्ग' को सिद्धान्त दिए।
- "अहिंसा परमो धर्मः" (अहिंसा नै ठूलो धर्म हो) भन्ने सन्देश फैलाए।
- यस दिन बौद्ध गुम्बाहरूमा पूजा, पाठ र दीप प्रज्वलन गरिन्छ। खीर खाने चलन पनि छ।`
      }
    ]
  },
  {
    id: 'mantra',
    title: 'मन्त्र र स्तोत्र',
    description: 'जीवन बदल्ने शक्तिशाली मन्त्रहरु',
    icon: <Music className="w-6 h-6 text-indigo-600" />,
    items: [
      {
        id: 'm1',
        title: 'गायत्री मन्त्र',
        subtitle: 'सबैभन्दा शक्तिशाली वैदिक मन्त्र',
        content: `**मन्त्र**:
"ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्॥"

**अर्थ**:
त्यो प्राणस्वरूप, दुःखनाशक, सुखस्वरूप, श्रेष्ठ, तेजस्वी, पापनाशक, देवस्वरूप परमात्मालाई हामी अन्तरात्मामा धारण गर्दछौं। त्यो परमात्माले हाम्रो बुद्धिलाई सन्मार्गमा प्रेरित गरोस्।

**फाइदा**:
- विद्यार्थीहरूका लागि स्मरण शक्ति बढाउन अचूक छ।
- मानसिक शान्ति र सकारात्मक ऊर्जा प्रदान गर्छ।
- सूर्योदय र सूर्यास्तको समयमा जप गर्नु सर्वश्रेष्ठ मानिन्छ।`
      },
      {
        id: 'm2',
        title: 'महामृत्युञ्जय मन्त्र',
        subtitle: 'रोग र मृत्यु भय नाशक',
        content: `**मन्त्र**:
"ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।
उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्॥"

**अर्थ**:
हामी तीन नेत्र भएका (शिव), सुगन्धित र पालनपोषण गर्ने भगवानको पूजा गर्छौं। जसरी पाकेको काँक्रो बोटबाट आफैं छुट्छ, त्यसरी नै हामी पनि मृत्युको बन्धनबाट मुक्त भई अमरत्व (मोक्ष) प्राप्त गरौं।

**प्रयोग**:
- गम्भीर बिरामी हुँदा वा दुर्घटनाको भय हुँदा यो मन्त्रको जप गरिन्छ।
- यसले अकाल मृत्युबाट बचाउँछ भन्ने विश्वास छ।`
      },
      {
        id: 'm3',
        title: 'विद्याकी देवी सरस्वती वन्दना',
        subtitle: 'ज्ञान र कलाको लागि',
        content: `**श्लोक**:
"या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता।
या वीणावरदण्डमण्डितकरा या श्वेतपद्मासना॥
या ब्रह्माच्युतशंकरप्रभृतिभिर्देवैः सदा वन्दिता।
सा मां पातु सरस्वती भगवती निःशेषजाड्यापहा॥"

**भावार्थ**:
जसले कुन्दको फूल, चन्द्रमा र हिउँ जस्तो सेतो हार लगाउनुभएको छ, सेतो वस्त्र धारण गर्नुभएको छ, जसको हातमा वीणा शोभायमान छ, जो सेतो कमलमा बस्नुहुन्छ, र जसलाई ब्रह्मा, विष्णु, महेश आदि देवताहरूले सधैं पूजा गर्छन्। ती सम्पूर्ण अज्ञानता हटाउने देवी सरस्वतीले मेरो रक्षा गर्नुहोस्।`
      }
    ]
  },
  {
    id: 'bastu',
    title: 'वास्तु शास्त्र',
    description: 'घरमा सुख शान्तिको लागि वास्तु',
    icon: <Sun className="w-6 h-6 text-indigo-600" />,
    items: [
      {
        id: 'v1',
        title: 'मूल ढोका (Main Entrance)',
        subtitle: 'ऊर्जा प्रवेश गर्ने मार्ग',
        content: `घरको मूल ढोका अन्य ढोकाहरू भन्दा ठूलो र आकर्षक हुनुपर्छ।

**शुभ दिशाहरू**:
- **पूर्व**: मान सम्मान र उर्जाको लागि।
- **उत्तर**: धन र समृद्धिको लागि (कुबेरको दिशा)।

**ध्यान दिनुपर्ने कुरा**:
- मूल ढोकाको अगाडि खाल्डो, पोल वा फोहोर हुनु हुँदैन।
- ढोका खोल्दा वा बन्द गर्दा आवाज आउनु हुँदैन (यसले कलह निम्त्याउँछ)।
- ढोकामा स्वस्तिक वा गणेशको तस्विर राख्नु शुभ हुन्छ।`
      },
      {
        id: 'v2',
        title: 'भान्सा कोठा (Kitchen)',
        subtitle: 'स्वास्थ्य र धनको केन्द्र',
        content: `भान्साको वास्तु मिलेन भने घरका सदस्यहरू (विशेषगरी महिला) को स्वास्थ्य बिग्रन सक्छ।

**नियम**:
- **दिशा**: आग्नेय कोण (दक्षिण-पूर्व) सबैभन्दा उत्तम हो। यदि सम्भव नभए उत्तर-पश्चिममा बनाउन सकिन्छ।
- **फर्काई**: खाना पकाउँदा पकाउने व्यक्तिको मुख पूर्व दिशामा हुनुपर्छ।
- **धारा र चुलो**: पानी र आगो शत्रु हुन्। त्यसैले सिंक (धारा) र ग्यास चुलो नजिकै राख्नु हुँदैन।
- भान्सा र शौचालय आमने-सामने वा टाँसिएको हुनु हुँदैन।`
      },
      {
        id: 'v3',
        title: 'पूजा कोठा र ऐना',
        subtitle: 'सकारात्मक ऊर्जा व्यवस्थापन',
        content: `**पूजा कोठा**:
- घरको ईशान कोण (उत्तर-पूर्व) मा पूजा कोठा हुनुपर्छ। यो देवताहरूको स्थान हो।
- सिँढीको मुनि वा शौचालयको छेउमा पूजा कोठा बनाउनु हुँदैन।

**ऐना (Mirror)**:
- सुत्ने कोठामा ओछ्यान देखिने गरी ऐना राख्नु हुँदैन। यसले दाम्पत्य जीवनमा समस्या र स्वास्थ्यमा खराबी ल्याउन सक्छ।
- घरको उत्तर वा पूर्व भित्तामा ऐना राख्नु शुभ मानिन्छ।`
      }
    ]
  },
  {
    id: 'any',
    title: 'अन्य विविध जानकारी',
    description: 'रुद्राक्ष, सपना, साइत र ग्रह दशा',
    icon: <Star className="w-6 h-6 text-indigo-600" />,
    items: [
      {
        id: 'o1',
        title: 'एकादशी व्रत',
        subtitle: 'सबै व्रतहरूमा श्रेष्ठ',
        content: `हिन्दू धर्ममा महिनामा दुई वटा एकादशी हुन्छन् (कृष्ण पक्ष र शुक्ल पक्ष)। वर्षमा २४ वटा एकादशी हुन्छन्।

**महत्व**:
- एकादशीलाई 'हरि वासर' (विष्णुको दिन) भनिन्छ।
- वैज्ञानिक रूपमा पनि यो दिन उपवास बस्दा पाचन प्रणालीले विश्राम पाउँछ र शरीर डिटक्स हुन्छ।
- अन्न (विशेषगरी चामल) खान निषेध गरिएको छ। फलफूल र दूध खाएर व्रत बस्न सकिन्छ।
- ठूलो एकादशी वा हरिबोधनी एकादशीको विशेष महत्व छ।`
      },
      {
        id: 'o2',
        title: 'रुद्राक्षको रहस्य',
        subtitle: 'शिवको आँसु',
        content: `रुद्राक्ष (रुद्र + अक्ष) को अर्थ शिवको आँसु हो। यो धारण गर्नाले नकारात्मक ऊर्जाबाट रक्षा हुन्छ।

**विभिन्न मुखी रुद्राक्षको फल**:
- **१ मुखी**: साक्षात् शिव स्वरूप। मोक्ष र आध्यात्मिक उन्नतिका लागि। (दुर्लभ)
- **२ मुखी**: अर्धनारीश्वर स्वरूप। दाम्पत्य सुख र मानसिक शान्तिका लागि।
- **५ मुखी**: कालाग्नि रुद्र। यो सबैभन्दा सुलभ छ। यसले स्वास्थ्य, सुख र शान्ति दिन्छ। रक्तचाप र हृदय रोगमा फाइदाजनक मानिन्छ।
- **७ मुखी**: महालक्ष्मी स्वरूप। धन अभाव हटाउन।

**नियम**: मासु, मदिरा सेवन गर्ने वा अशुद्ध अवस्थामा (सुतक/जुठो) रुद्राक्ष लगाउनु हुँदैन।`
      },
      {
        id: 'o3',
        title: 'सपनाको फल (Swapna Shastra)',
        subtitle: 'शुभ र अशुभ संकेत',
        content: `सपनाले भविष्यको संकेत दिन्छ भन्ने मान्यता छ।

**शुभ सपना**:
- **हात्ती, घोडा वा गाई देख्नु**: धन प्राप्ति र मान सम्मान बढ्ने।
- **मन्दिर वा भगवानको मूर्ति देख्नु**: कार्य सिद्धि हुने।
- **नदी तरेको वा उकालो चढेको**: जीवनमा प्रगति हुने।
- **आफ्नै मृत्यु देख्नु**: आयु बढ्ने र रोग निको हुने।

**अशुभ सपना**:
- **दाँत झरेको**: नजिकको व्यक्तिको स्वास्थ्यमा समस्या वा वियोग।
- **आगो लागेको (कालो धुवाँ)**: संकट वा तनाव।
- **ओरालो झरेको वा हिलोमा फसेको**: अवनति र समस्या।

(नोट: बिहानको सपना बढी सत्य हुन्छ भनिन्छ, तर यो मनको अवस्थामा पनि भर पर्छ।)`
      },
      {
        id: 'o4',
        title: 'पञ्चक र ग्रह दोष',
        subtitle: 'ज्योतिषीय मान्यता',
        content: `**पञ्चक**:
चन्द्रमा कुम्भ र मीन राशिमा रहँदाको ५ दिनको समयलाई पञ्चक भनिन्छ। यस समयमा ५ वटा काम गर्न निषेध गरिएको छ:
१. दक्षिण दिशाको यात्रा।
२. घरको छत ढलान वा खर छाउनु।
३. खाट वा पलङ बुन्नु/किन्नु।
४. शव दाह (विशेष विधि पुर्याएर मात्र गरिन्छ)।
५. इन्धन वा काठ जम्मा गर्नु।

**ग्रह दोष**:
शनि साढे साती वा अढैया चल्दा जीवनमा संघर्ष बढ्छ। यसको निवारणका लागि शनिबार पिपलमा जल चढाउने, हनुमान चालिसा पढ्ने र गरिबलाई सहयोग गर्ने सल्लाह दिइन्छ।`
      }
    ]
  },
  {
    id: 'sahitya',
    title: 'धार्मिक ग्रन्थ',
    description: 'गीता, रामायण, महाभारत र स्वस्थानी',
    icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
    items: [
      {
        id: 's1',
        title: 'श्रीमद्भगवद्गीता',
        subtitle: 'जीवन जिउने कला',
        content: `गीता महाभारतको भीष्म पर्व अन्तर्गत पर्दछ। यसमा १८ अध्याय र ७०० श्लोक छन्।

**मुख्य उपदेश**:
- **कर्मयोग**: "कर्मण्येवाधिकारस्ते..." - तिम्रो अधिकार कर्ममा मात्र छ, फलको आशा नगर।
- **आत्माको अमरता**: "नैनं छिन्दन्ति शस्त्राणि..." - आत्मालाई न हतियारले काट्न सकिन्छ, न आगोले जलाउन। यो अजम्बरी छ।
- **समभाव**: सुख-दुःख, जित-हार, लाभ-हानीमा समान रहने व्यक्ति नै योगी हो।

गीता कुनै धर्म विशेषको मात्र नभई सम्पूर्ण मानव जातिको मार्गदर्शन हो।`
      },
      {
        id: 's2',
        title: 'स्वस्थानी व्रत कथा',
        subtitle: 'नेपालीहरूको मौलिक ग्रन्थ',
        content: `श्री स्वस्थानी व्रतकथा पौष शुक्ल पूर्णिमादेखि माघ शुक्ल पूर्णिमासम्म एक महिना वाचन गरिन्छ।

**कथा सार**:
यो स्कन्द पुराणको केदारखण्ड अन्तर्गत पर्दछ। यसमा शिव र सती/पार्वतीको प्रेम, विवाह, दक्ष प्रजापतिको यज्ञ विध्वंस र गणेश/कुमारको जन्मको कथा छ।
यसमा गोमा ब्राह्मणी, नवराज र चन्द्रावतीको कथा मार्फत "पाप र धर्म" को फल तथा "अहंकारको पतन" देखाइएको छ।
यो व्रत बस्नाले विछोडिएका परिवार मिल्ने र मनोकामना पूरा हुने विश्वास छ।`
      }
    ]
  }
];

const DharmaPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);
  const [selectedItem, setSelectedItem] = useState<DharmaItem | null>(null);

  // --- View 1: Main Dashboard (Grid) ---
  const renderDashboard = () => (
    <div className="animate-fadeIn">
      {/* Hero Section / Daily Featured - Changed to Indigo/Blue Theme */}
      <div className="mb-6 bg-gradient-to-r from-indigo-100 to-blue-50 p-6 rounded-xl border border-indigo-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 text-indigo-900">
          <Wind size={100} />
        </div>
        <div className="flex items-center gap-2 mb-3 relative z-10">
          <Flower className="w-5 h-5 text-indigo-700" />
          <h2 className="font-bold text-indigo-900 tracking-wide">आजको सुविचार</h2>
        </div>
        <p className="text-indigo-900 italic font-serif text-lg leading-relaxed relative z-10">
          "धर्म भनेको मन्दिरमा गएर पूजा गर्नु मात्र होइन, <br />
          धर्म त आफ्नो कर्तव्य इमान्दारीपूर्वक पूरा गर्नु र अरूको भलो चिताउनु हो।"
        </p>
      </div>

      {/* Categories Grid */}
      <h2 className="text-xl font-bold text-gray-800 mb-4 px-1 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-indigo-600" /> विषयसूची
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {dharmaData.map((category) => (
          <div
            key={category.id}
            onClick={() => setSelectedCategory(category)}
            className="bg-white p-5 rounded-xl shadow-sm border border-indigo-50 flex flex-col items-center text-center cursor-pointer hover:shadow-md hover:border-indigo-300 transition-all duration-300 active:scale-95 group"
          >
            <div className="p-4 bg-indigo-50 rounded-full mb-3 group-hover:bg-indigo-100 transition-colors">
              {category.icon}
            </div>
            <h3 className="font-bold text-gray-800 text-base md:text-lg group-hover:text-indigo-700 transition-colors">{category.title}</h3>
            <p className="text-xs text-gray-500 mt-1 line-clamp-2">{category.description}</p>
          </div>
        ))}
      </div>

      {/* Quick Links / Footer Info */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg border border-indigo-100 flex items-center gap-3">
          <Moon className="text-indigo-500 w-8 h-8" />
          <div>
            <h4 className="font-bold text-gray-700 text-sm"></h4>
            <p className="text-xs text-gray-500"></p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-100 flex items-center gap-3">
          <Sun className="text-orange-500 w-8 h-8" />
          
        </div>
      </div>
    </div>
  );

  // --- View 2: List of Items within a Category ---
  const renderCategoryDetail = () => {
    if (!selectedCategory) return null;
    return (
      <div className="animate-slideIn">
        <button
          onClick={() => setSelectedCategory(null)}
          className="flex items-center text-gray-600 mb-4 hover:text-indigo-600 transition-colors px-2 py-1 rounded-md hover:bg-indigo-50 w-fit"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          <span className="font-medium">पछाडि फर्कनुहोस्</span>
        </button>

        <div className="bg-indigo-600 rounded-xl p-6 mb-6 text-white shadow-lg relative overflow-hidden">
          <div className="absolute right-[-20px] top-[-20px] opacity-20">
            <div className="transform scale-150">
              {selectedCategory.icon}
            </div>
          </div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm text-white">
              {selectedCategory.icon}
            </div>
            <div>
              <h1 className="text-2xl font-bold">{selectedCategory.title}</h1>
              <p className="text-indigo-100 text-sm mt-1">{selectedCategory.description}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {selectedCategory.items.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-white p-5 rounded-xl border-l-[6px] border-indigo-500 shadow-sm hover:shadow-md cursor-pointer flex justify-between items-center group transition-all border border-gray-100"
            >
              <div className="pr-4">
                <h3 className="font-bold text-gray-800 text-lg group-hover:text-indigo-700 transition-colors">{item.title}</h3>
                {item.subtitle && (
                  <div className="flex items-center mt-1">
                    <Star className="w-3 h-3 text-yellow-500 mr-1 fill-current" />
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                  </div>
                )}
              </div>
              <div className="bg-indigo-50 p-2 rounded-full group-hover:bg-indigo-100 transition-colors">
                <ChevronLeft className="w-5 h-5 text-indigo-400 rotate-180" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // --- View 3: Specific Item Detail (The Reading View) ---
  const renderItemContent = () => {
    if (!selectedItem) return null;
    return (
      <div className="animate-slideIn">
        <button
          onClick={() => setSelectedItem(null)}
          className="flex items-center text-gray-600 mb-4 hover:text-indigo-600 transition-colors px-2 py-1 rounded-md hover:bg-indigo-50 w-fit"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          <span className="font-medium">{selectedCategory?.title}</span>
        </button>

        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-indigo-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 border-b border-indigo-100">
            <h1 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-2 leading-tight">{selectedItem.title}</h1>
            {selectedItem.subtitle && (
              <div className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium border border-indigo-200">
                {selectedItem.subtitle}
              </div>
            )}
          </div>

          {/* Content Body */}
          <div className="p-6 md:p-8">
            {selectedItem.content ? (
              <div className="prose prose-indigo prose-lg max-w-none text-gray-700 leading-loose whitespace-pre-line font-serif">
                {/* We use whitespace-pre-line to respect the line breaks in our JSON data */}
                {selectedItem.content}
              </div>
            ) : (
              <div className="text-center py-16 text-gray-400 bg-gray-50 rounded-lg">
                <p>विस्तृत विवरण चाँडै अपडेट गरिनेछ...</p>
              </div>
            )}

            {/* End of Content Action */}
            <div className="mt-10 pt-6 border-t border-gray-100 flex justify-center">
              <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium bg-indigo-50 hover:bg-indigo-100 px-6 py-2 rounded-full transition-colors">
                <Heart className="w-4 h-4" />
                मन पर्यो
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20 font-sans">
      {/* Top Navigation Bar Placeholder */}
      <div className="bg-white shadow-sm border-b border-indigo-100 p-4 sticky top-0 z-20">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <button onClick={onBack} className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
            <ChevronLeft className="w-5 h-5 mr-1" />
            <span className="font-medium">मुख्य</span>
          </button>
          <span className="font-bold text-indigo-900">धर्म र संस्कृति</span>
          <div className="w-8"></div> {/* Spacer for centering */}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-3xl mx-auto p-4 mt-2">
        {!selectedCategory && !selectedItem && renderDashboard()}
        {selectedCategory && !selectedItem && renderCategoryDetail()}
        {selectedItem && renderItemContent()}
      </main>
    </div>
  );
};

export default DharmaPage;