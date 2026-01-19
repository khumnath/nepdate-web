import { lunar_MonthNames } from '../../constants/constants';
import { EventsData } from '../../data/static/eventsData';
import {
  weekdays,
  getSunriseSunset,
  toDevanagari,
  toJulianDay,
  findNewMoon,
  trueLongitudeSun,
  trueLongitudeMoon,
  getTithi,
  calculateAdhikaMasa,
  KaliEpoch,
  toBikramSambat,
  NAKSHATRA_NAMES,
  YOGA_NAMES,
  KARANA_NAMES,
  RASHI_NAMES,
  resolveTithiName,
  TITHI_NAMES,
  YugaRotation,
  PlanetApogee,
  PlanetCircumm,
  mandaEquation,
  YugaCivilDays,
  UJJAIN_LONGITUDE,
} from '../utils/lib';

// 1 Day = 60 Ghatis. So 1 Ghati = 1/60 of a day fraction.
const GHATI = 1.0 / 60.0;

/**
 * Calculates the Ahar (Ahargana - days since Kali Epoch) for a specific date and time.
 * @param date The Date object (provides Year, Month, Day)
 * @param lon Local Longitude (for Deshantara correction)
 * @param timeFraction Fraction of the day (0.0 to 1.0)
 */
export function getAharFor(date: Date, lon: number, timeFraction: number): number {
  const jd = toJulianDay(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  const aharAtUjjainMidnight = jd - KaliEpoch;
  const deshantara = (lon - UJJAIN_LONGITUDE) / 360.0;
  // Ahar at Ujjain Midnight + local time fraction - longitude correction
  const aharAtTime = aharAtUjjainMidnight + timeFraction - deshantara;

  return aharAtTime;
}


export function getPanchangaDetailsAtAhar(ahar: number): { [key: string]: any } {
  const sunLong = trueLongitudeSun(ahar);
  const moonLong = trueLongitudeMoon(ahar);
  const tithiVal = getTithi(sunLong, moonLong);
  const tithiNum = Math.floor(tithiVal) + 1;
  const paksha = tithiNum <= 15 ? "शुक्ल पक्ष" : "कृष्ण पक्ष";
  const tithiDay = tithiNum > 15 ? tithiNum - 15 : tithiNum;
  const tithiName = resolveTithiName(tithiDay, paksha);
  // Calculate Amanta Month
  let lastNewMoon = findNewMoon(ahar);
  if (lastNewMoon > ahar) {
    lastNewMoon = findNewMoon(lastNewMoon - 29.53);
  }
  const clong = trueLongitudeSun(lastNewMoon);

  let masaNum = Math.floor(sunLong / 30) % 12;
  if ((Math.floor(clong / 30) % 12) === masaNum) {
    masaNum = masaNum + 1;
  }
  masaNum = (masaNum + 12) % 12;
  // Convert to Purnimanta Month
  masaNum = (masaNum - 1 + 12) % 12;

  // Adjust for Purnimanta (Nepal System)
  if (paksha === "कृष्ण पक्ष") {
    masaNum = (masaNum + 1) % 12;
  }

  const purnimantaMonthName = lunar_MonthNames[masaNum];

  const adhikaStatus = calculateAdhikaMasa(ahar);
  const isAdhika = adhikaStatus.startsWith("अधिक");

  const karanaIdx = Math.floor(tithiVal * 2) % 60;
  let karanaName: string;
  if (karanaIdx === 0) {
    karanaName = KARANA_NAMES[0];
  } else if (karanaIdx < 57) {
    karanaName = KARANA_NAMES[(karanaIdx - 1) % 7 + 1];
  } else {
    karanaName = KARANA_NAMES[karanaIdx - 57 + 8];
  }

  return {
    ahar,
    sunLong,
    moonLong,
    tithiVal,
    lunarMonthName: purnimantaMonthName,
    isAdhika,
    adhikaStatus,
    paksha,
    tithiName,
    tithiDay,
    nakshatraName: NAKSHATRA_NAMES[Math.floor(moonLong / (360 / 27))],
    yogaName: YOGA_NAMES[Math.floor((sunLong + moonLong) % 360 / (360 / 27))],
    karanaName: karanaName,
    sunRashi: RASHI_NAMES[Math.floor(sunLong / 30)],
    moonRashi: RASHI_NAMES[Math.floor(moonLong / 30)],
  };
}

function timeStringToFraction(timeStr: string): number {
  const [hr, min, sec] = timeStr.split(':').map(Number);
  return (hr * 3600 + min * 60 + sec) / 86400.0;
}

export function getBhadraDetails(karanaName: string, moonLong: number) {
  if (!karanaName.includes("विष्टि") && !karanaName.includes("Vishti")) return null;
  const rashiIndex = Math.floor(moonLong / 30);
  let residence = "";
  let status = "";
  let isHarmful = false;

  if ([3, 4, 10, 11].includes(rashiIndex)) {
    // पृथ्वी लोक (अशुभ)
    residence = "पृथ्वी लोक (मृत्युलोक)";
    status =
      "अशुभ — भद्रा पृथ्वी लोकमा हुँदा अत्यन्त अशुभ मानिन्छ। " +
      "विवाह, नयाँ कार्य, यात्रा, खरीद-बिक्री जस्ता शुभ कार्य पूर्णतः वर्जित। " +
      "बाधा, दुर्घटना, विवाद, हानी हुने सम्भावना। केवल कठोर/दण्डात्मक वा विनाशक कार्यका लागि उपयुक्त।";
    isHarmful = true;

  } else if ([0, 1, 2, 7].includes(rashiIndex)) {
    // स्वर्ग लोक (तटस्थ)
    residence = "स्वर्ग लोक (स्वर्ग)";
    status =
      "तटस्थ — भद्रा स्वर्ग लोकमा हुँदा मध्यम/तटस्थ मानिन्छ। " +
      "कुनै ठूलो हानि हुँदैन, शुभ कार्य गर्न सकिन्छ तर यो सर्वोत्तम समय भने होइन। " +
      "सामान्य कार्य तथा छोटो यात्रा उपयुक्त।";
    isHarmful = false;

  } else {
    // पाताल लोक (शुभ)
    residence = "पाताल लोक (पाताल)";
    status =
      "शुभ — भद्रा पाताल लोकमा हुँदा शुभ मानिन्छ। " +
      "विवाह, नयाँ कार्य, यात्रा, खरीद-बिक्री, पूजा, घर प्रवेश सबैका लागि उत्तम समय। " +
      "हानि वा बाधा हुने डर हुँदैन।";
    isHarmful = false;
  }

  return { isActive: true, residence, status, isHarmful };
}

// ------------------------------------------------------------------
// Helper to check if Tithi exists in a Window
// ------------------------------------------------------------------
function isTithiInWindow(
  targetTithi: string,
  targetPaksha: string,
  startInfo: any,
  endInfo: any
): boolean {
  // Check Start of Window
  if (startInfo.tithiName === targetTithi && startInfo.paksha === targetPaksha) return true;
  // Check End of Window
  if (endInfo.tithiName === targetTithi && endInfo.paksha === targetPaksha) return true;

  return false;
}

export function getEventsForDate(
  date: Date,
  bsYear: number,
  bsMonthIndex: number,
  bsDay: number,
  // Expects enriched Tithi objects with Paksha
  dailyTithis: Array<{ name: string; paksha: string; startTime: number | null; endTime: number | null }> = []
): Array<{ name: string; detail: string; holiday: boolean; }> {
  const events: any[] = [];
  const gregorianYear = date.getUTCFullYear();
  const gregorianMonth = date.getUTCMonth() + 1;
  const gregorianDay = date.getUTCDate();

  const formattedGregorianDate = (gregorianMonth < 10 ? '0' : '') + gregorianMonth + '/' + (gregorianDay < 10 ? '0' : '') + gregorianDay;
  const formattedBikramRecurringDate = (bsMonthIndex + 1 < 10 ? '0' : '') + (bsMonthIndex + 1) + '/' + (bsDay < 10 ? '0' : '') + bsDay;
  const formattedBikramFixedDate = `${bsYear}/${formattedBikramRecurringDate}`;

  const defaultLon = 85.3240;
  const defaultLat = 27.7172;
  const defaultTz = 5.75;

  // Calculate Solar/Time Windows for Event Rules
  const sunEvents = getSunriseSunset(date, defaultLat, defaultLon, defaultTz);
  const nextDay = new Date(date);
  nextDay.setDate(date.getDate() + 1);
  const nextSunEvents = getSunriseSunset(nextDay, defaultLat, defaultLon, defaultTz);

  if (sunEvents.sunrise === "N/A" || sunEvents.sunset === "N/A") {
    return events; // Safety fallback
  }

  const sunriseFraction = timeStringToFraction(sunEvents.sunrise);
  const sunsetFraction = timeStringToFraction(sunEvents.sunset);
  const nextSunriseFraction = nextSunEvents.sunrise !== "N/A" ? timeStringToFraction(nextSunEvents.sunrise) : sunriseFraction;

  const sunriseAhar = getAharFor(date, defaultLon, sunriseFraction);

  // Calculate Next Sunrise Ahar
  const nextSunriseAhar = getAharFor(nextDay, defaultLon, nextSunriseFraction);

  // Pradosh Window (Sunset + 3 Ghatis)
  const pradoshStartAhar = getAharFor(date, defaultLon, sunsetFraction);
  const pradoshEndAhar = getAharFor(date, defaultLon, sunsetFraction + (3 * GHATI));

  // Nishitha Window (Midnight +/- 1 Ghati)
  const trueMidnightFraction = (sunsetFraction + (1.0 + nextSunriseFraction)) / 2;
  const nishithaStartAhar = getAharFor(date, defaultLon, trueMidnightFraction - (1 * GHATI));
  const nishithaEndAhar = getAharFor(date, defaultLon, trueMidnightFraction + (1 * GHATI));

  // Madhyanna Window (Noon +/- 3 Ghatis)
  const noonFraction = (sunriseFraction + sunsetFraction) / 2;
  const madhyannaStartAhar = getAharFor(date, defaultLon, noonFraction - (3 * GHATI));
  const madhyannaEndAhar = getAharFor(date, defaultLon, noonFraction + (3 * GHATI));

  // Get Panchanga Info at specific moments
  const infoUdaya = getPanchangaDetailsAtAhar(sunriseAhar);
  const infoPradoshStart = getPanchangaDetailsAtAhar(pradoshStartAhar);
  const infoPradoshEnd = getPanchangaDetailsAtAhar(pradoshEndAhar);
  const infoNishithaStart = getPanchangaDetailsAtAhar(nishithaStartAhar);
  const infoNishithaEnd = getPanchangaDetailsAtAhar(nishithaEndAhar);
  const infoMadhyannaStart = getPanchangaDetailsAtAhar(madhyannaStartAhar);
  const infoMadhyannaEnd = getPanchangaDetailsAtAhar(madhyannaEndAhar);

  // Previous Day Info for Udaya Deduplication
  const prevDay = new Date(date);
  prevDay.setDate(date.getDate() - 1);
  const prevSunEvents = getSunriseSunset(prevDay, defaultLat, defaultLon, defaultTz);
  let infoPrevUdaya: any = null;
  if (prevSunEvents.sunrise !== "N/A") {
    const prevSunriseFraction = timeStringToFraction(prevSunEvents.sunrise);
    const prevSunriseAhar = getAharFor(prevDay, defaultLon, prevSunriseFraction);
    infoPrevUdaya = getPanchangaDetailsAtAhar(prevSunriseAhar);
  }

  // Dynamic Weekday Events
  const weekday = date.getUTCDay();

  // Mangal Chaturthi (Tuesday + Krishna Chaturthi)
  if (weekday === 2 && infoUdaya.tithiName === 'चतुर्थी' && infoUdaya.paksha === 'कृष्ण पक्ष') {
    events.push({
      name: 'मंगल चतुर्थी',
      detail: 'कृष्ण पक्षको चतुर्थी मंगलबार पर्नु मंगल चतुर्थी हो। यस दिन भगवान् गणेशको पूजा-अर्चना गरिन्छ। व्रत बस्दा विघ्न-बाधा हट्ने, रोग-शोक कम हुने र कार्यसिद्धि हुने विश्वास छ।',
      holiday: false
    });
  }
  // Somvati Amavasya (Monday + Amavasya)
  if (weekday === 1 && infoUdaya.tithiName === 'अमावस्या') {
    events.push({
      name: 'सोमवती औंसी',
      detail: 'सोमबारको अमावस्या सोमवती औंसी हो। यस दिन व्रत बस्नेले दीर्घायु, स्वास्थ्य र सौभाग्य प्राप्त गर्ने विश्वास छ। विशेष गरी महिलाले पतिको आयु र परिवारको कल्याणका लागि व्रत गर्छन्।',
      holiday: false
    });
  }
  // Ravi Saptami
  if (weekday === 0 && infoUdaya.tithiName === 'सप्तमी' && infoUdaya.paksha === 'शुक्ल पक्ष') {
    events.push({
      name: 'रवि सप्तमी',
      detail: 'शुक्ल पक्षको सप्तमी आइतबार पर्नु रवि सप्तमी हो। यस दिन सूर्यदेवको पूजा-अर्चना गरिन्छ। स्नान, दान र व्रतले रोग-शोक नाश हुने, आयु वृद्धि हुने र तेज प्राप्त हुने विश्वास छ।',
      holiday: false
    });
  }

  // Budhashtami
  if (weekday === 3 && infoUdaya.tithiName === 'अष्टमी' && infoUdaya.paksha === 'शुक्ल पक्ष') {
    events.push({
      name: 'बुधाष्टमी (भौमाष्टमी',
      detail: 'शुक्ल पक्षको अष्टमी बुधबार पर्नु बुधाष्टमी हो। यस दिन देवी दुर्गाको पूजा गरिन्छ। व्रत बस्दा सन्तान सुख, परिवारको कल्याण र रोग-शोक नाश हुने विश्वास छ।',
      holiday: false
    });
  }

  // Shani Amavasya
  if (weekday === 6 && infoUdaya.tithiName === 'अमावस्या') {
    events.push({
      name: 'शनिश्चरी औंसी',
      detail: 'शनिबारको अमावस्या शनिश्चरी औंसी हो। यस दिन शनिदेवको पूजा-अर्चना गरिन्छ। व्रत बस्दा शनि दोष नाश हुने, बाधा हट्ने र कार्यसिद्धि हुने विश्वास छ।',
      holiday: false
    });
  }

  // Pradosh Vrat (Trayodashi touching Pradosh time)
  if (isTithiInWindow('त्रयोदशी', infoPradoshStart.paksha, infoPradoshStart, infoPradoshEnd)) {
    if (weekday === 1) events.push({
      name: 'सोम प्रदोष',
      detail: 'त्रयोदशी सोमबार पर्नु सोम प्रदोष हो। यस दिन भगवान् शिवको पूजा-अर्चना गरिन्छ। व्रत बस्दा स्वास्थ्य, दीर्घायु र सुख-समृद्धि प्राप्त हुने विश्वास छ।',
      holiday: false
    });
    if (weekday === 2) events.push({
      name: 'भौम प्रदोष',
      detail: 'त्रयोदशी मंगलबार पर्नु भौम प्रदोष हो। यस दिन शिवपूजा विशेष फलदायी हुन्छ। व्रत बस्दा विघ्न-बाधा हट्ने, साहस र कार्यसिद्धि हुने विश्वास छ।',
      holiday: false
    });
    if (weekday === 6) events.push({
      name: 'शनि प्रदोष',
      detail: 'त्रयोदशी शनिबार पर्नु शनि प्रदोष हो। यस दिन शिवपूजा र व्रतले शनि दोष नाश गर्ने, बाधा हटाउने र सुख-समृद्धि दिने विश्वास छ।',
      holiday: false
    });
  }

  // Static Events (Gregorian, Recurring BS, Fixed BS)
  (EventsData.gregorianEvents as any[])?.forEach(event => {
    if ((event.startYear && gregorianYear < event.startYear) || (event.endYear && gregorianYear > event.endYear)) return;
    if (event.date === formattedGregorianDate) events.push({ name: event.event, detail: event.detail, holiday: event.holiday || false });
  });
  (EventsData.bikramRecurringEvents as any[])?.forEach(event => {
    if ((event.startYear && bsYear < event.startYear) || (event.endYear && bsYear > event.endYear)) return;
    if (event.date === formattedBikramRecurringDate) events.push({ name: event.event, detail: event.detail, holiday: event.holiday || false });
  });
  (EventsData.bikramFixedEvents as any[])?.forEach(event => {
    if (event.date === formattedBikramFixedDate) events.push({ name: event.event, detail: event.detail, holiday: event.holiday || false });
  });

  // Lunar Events (with Kshaya/Lost Tithi Logic)
  if (EventsData.lunarEvents) {
    if (infoUdaya.isAdhika) return events; // Skip lunar festivals in Adhika Masa

    // Check for Kshaya Masa (Lost Month)
    let secondaryMonthName: string | null = null;
    if (infoUdaya.adhikaStatus && infoUdaya.adhikaStatus.startsWith("क्षय")) {
      const parts = infoUdaya.adhikaStatus.split(" ");
      if (parts.length > 1) {
        const solarName = parts[1];
        const SOLAR_TO_LUNAR_MAP: Record<string, string> = {
          "बैशाख": "वैशाख", "जेठ": "ज्येष्ठ", "असार": "आषाढ", "साउन": "श्रावण",
          "भदौ": "भाद्र", "असोज": "आश्विन", "कार्तिक": "कार्तिक", "मंसिर": "मार्गशीर्ष",
          "पुस": "पौष", "माघ": "माघ", "फागुन": "फाल्गुन", "चैत": "चैत्र"
        };
        secondaryMonthName = SOLAR_TO_LUNAR_MAP[solarName] || null;
      }
    }

    (EventsData.lunarEvents as any[])?.forEach(lunarEvent => {
      if ((lunarEvent.startYear && bsYear < lunarEvent.startYear) || (lunarEvent.endYear && bsYear > lunarEvent.endYear)) return;

      // Allow if match Primary Month OR Secondary (Kshaya) Month
      const isMonthMatch = (lunarEvent.lunarMonth === infoUdaya.lunarMonthName) ||
        (secondaryMonthName && lunarEvent.lunarMonth === secondaryMonthName);

      if (!isMonthMatch) return;

      const rule = lunarEvent.rule || 'udaya';
      let isMatch = false;

      if (rule === 'udaya') {
        // Condition A: It exists at Sunrise
        const isAtSunrise = (infoUdaya.paksha === lunarEvent.paksha && infoUdaya.tithiName === lunarEvent.tithi);

        // DEDUPLICATION: If yesterday's Udaya Tithi was same, skip today (only show on first day)
        const isDuplicate = isAtSunrise && infoPrevUdaya && (infoPrevUdaya.paksha === lunarEvent.paksha && infoPrevUdaya.tithiName === lunarEvent.tithi);

        // Condition B (Kshaya): It is NOT at sunrise, but starts and ends entirely within this day
        // STRICT CHECK: Matches Name AND Matches Paksha AND Ends before next sunrise
        const isKshaya = !isAtSunrise && dailyTithis.some(t => {
          return t.name === lunarEvent.tithi &&
            t.paksha === lunarEvent.paksha &&
            t.startTime !== null &&
            t.endTime !== null &&
            t.endTime < nextSunriseAhar;
        });

        isMatch = (isAtSunrise && !isDuplicate) || isKshaya;

      } else if (rule === 'nishitha') {
        isMatch = isTithiInWindow(lunarEvent.tithi, lunarEvent.paksha, infoNishithaStart, infoNishithaEnd);
      } else if (rule === 'pradosh') {
        isMatch = isTithiInWindow(lunarEvent.tithi, lunarEvent.paksha, infoPradoshStart, infoPradoshEnd);
      } else if (rule === 'madhyanna') {
        isMatch = isTithiInWindow(lunarEvent.tithi, lunarEvent.paksha, infoMadhyannaStart, infoMadhyannaEnd);
        if (isMatch) {
          // DEDUPLICATION:
          // If it is NOT Udaya Tithi, require it to cover the Center (Noon).
          // This prevents weak matches where Tithi starts late in the afternoon (touching end of Madhyanna)
          // but is the main Tithi of the next day.
          const isUdaya = (lunarEvent.tithi === infoUdaya.tithiName && lunarEvent.paksha === infoUdaya.paksha);
          if (!isUdaya) {
            const madhyannaMiddleAhar = getAharFor(date, defaultLon, noonFraction);
            const infoMadhyannaMiddle = getPanchangaDetailsAtAhar(madhyannaMiddleAhar);
            if (infoMadhyannaMiddle.tithiName !== lunarEvent.tithi || infoMadhyannaMiddle.paksha !== lunarEvent.paksha) {
              isMatch = false;
            }
          }
        }
      }

      if (isMatch) {
        events.push({ name: lunarEvent.event, detail: lunarEvent.detail, holiday: lunarEvent.holiday || false });
      }
    });
  }

  return events;
}

export const absMeanLongitude = (ahar: number, rotation: number): number => {
  return (rotation * ahar * 360 / YugaCivilDays);
};
export const absTrueLongitudeSun = (ahar: number): number => {
  const meanLong = absMeanLongitude(ahar, YugaRotation.sun);
  const manda = mandaEquation(meanLong, PlanetApogee.sun, PlanetCircumm.sun);
  return meanLong - manda;
};

export const absTrueLongitudeMoon = (ahar: number): number => {
  const meanLong = absMeanLongitude(ahar, YugaRotation.moon);
  const apogee = absMeanLongitude(ahar, YugaRotation.Candrocca) + 90;
  const manda = mandaEquation(meanLong, apogee, PlanetCircumm.moon);
  return meanLong - manda;
};

export const absElongation = (ahar: number): number => {
  return absTrueLongitudeMoon(ahar) - absTrueLongitudeSun(ahar);
};

export function findTransit(
  searchStartAhar: number,
  getValueFunc: (ah: number) => number,
  targetValue: number,
  maxDays: number = 2
): number | null {
  let low = searchStartAhar;
  let high = searchStartAhar + maxDays;
  let startVal = getValueFunc(low);
  let endVal = getValueFunc(high);

  if (startVal <= targetValue && targetValue <= endVal) {
  }
  else if (targetValue < startVal) {
    low = searchStartAhar - maxDays;
    high = searchStartAhar;
    startVal = getValueFunc(low);
    endVal = getValueFunc(high);

    if (!(startVal <= targetValue && targetValue <= endVal)) {
      return null;
    }
  } else {
    return null;
  }

  // Bisection search
  for (let i = 0; i < 20; i++) {
    let mid = (low + high) / 2;
    if (getValueFunc(mid) < targetValue) {
      low = mid;
    } else {
      high = mid;
    }
  }
  return high;
}

/**
 * Finds all panchanga elements (Tithi, Nakshatra, etc.) that occur between startAhar and endAhar.
 * @param startAhar Typically Sunrise
 * @param endAhar Typically Next Sunrise
 */
function findElementsForDay(
  startAhar: number,
  endAhar: number,
  getValueFunc: (ah: number) => number,
  divisor: number,
  nameArray: string[],
  getSpecialName?: (index: number) => string
): Array<{ index: number; name: string; startTime: number | null; endTime: number | null }> {

  const elements = [];

  // Find element at Start (Sunrise)
  let valAtStart = getValueFunc(startAhar);
  let currentIndex = Math.floor(valAtStart / divisor);
  let targetEndValue = (currentIndex + 1) * divisor;

  // Find start/end times relative to the window
  let startTimeAhar = findTransit(startAhar, getValueFunc, currentIndex * divisor, 2);
  let endTimeAhar = findTransit(startTimeAhar ?? startAhar, getValueFunc, targetEndValue, 2);

  let name: string;
  if (getSpecialName) {
    name = getSpecialName(currentIndex);
  } else {
    name = nameArray[currentIndex % nameArray.length];
  }

  elements.push({ index: currentIndex, name, startTime: startTimeAhar, endTime: endTimeAhar });

  // Scan for subsequent elements within the window
  while (endTimeAhar && endTimeAhar < endAhar) {
    let currentStartTimeAhar = endTimeAhar;
    currentIndex++;
    targetEndValue = (currentIndex + 1) * divisor;

    endTimeAhar = findTransit(currentStartTimeAhar, getValueFunc, targetEndValue, 2);

    if (getSpecialName) {
      name = getSpecialName(currentIndex);
    } else {
      name = nameArray[currentIndex % nameArray.length];
    }

    if (endTimeAhar && endTimeAhar > currentStartTimeAhar) {
      elements.push({ index: currentIndex, name, startTime: currentStartTimeAhar, endTime: endTimeAhar });
    } else {
      // If we can't find the end (goes beyond window), add it anyway as the last element
      if (elements.at(-1)?.name !== name) {
        elements.push({ index: currentIndex, name, startTime: currentStartTimeAhar, endTime: endTimeAhar });
      }
      break;
    }
  }

  return elements;
}

export function aharToDate(ahar: number, sunriseAhar: number, sunriseDate: Date): Date {
  const dayFraction = ahar - sunriseAhar;
  const timestamp = sunriseDate.getTime() + dayFraction * 24 * 60 * 60 * 1000;
  return new Date(timestamp);
}

function getTzString(tz: number): string {
  const sign = tz >= 0 ? '+' : '-';
  const hours = String(Math.floor(Math.abs(tz))).padStart(2, '0');
  const minutes = String(Math.abs(tz) * 60 % 60).padStart(2, '0');
  return `${sign}${hours}:${minutes}`;
}

// MAIN CALCULATE FUNCTION

export function calculate(date: Date, lat?: number, lon?: number, tz?: number) {
  const bsInfo = toBikramSambat(date);
  if (!bsInfo) return { error: "Date out of range or invalid." };

  const latitude = lat ?? 27.7172;
  const longitude = lon ?? 85.3240;
  const timezone = tz ?? 5.75;
  const tzString = getTzString(timezone);

  // Sunrise/Sunset Calculation (Today & Tomorrow)
  // We need to ensure we are calculating sunrise for the CIVIL DAY at the given location.
  // If 'date' is close to midnight in local time, it might be the previous day in UTC.
  // We construct a "safe" date that represents Noon on the local civil day.
  const localDateStr = new Date(date.getTime() + timezone * 60 * 60 * 1000).toISOString().split('T')[0];
  const safeDate = new Date(`${localDateStr}T12:00:00Z`);

  const todaySunriseSunset = getSunriseSunset(safeDate, latitude, longitude, timezone);
  if (!todaySunriseSunset || todaySunriseSunset.sunrise === "N/A") return { error: "Could not calculate sunrise/sunset." };

  const sunriseDate = new Date(`${localDateStr}T${todaySunriseSunset.sunrise}${tzString}`);
  const [hr, min, sec] = todaySunriseSunset.sunrise.split(':').map(Number);
  const sunriseFraction = (hr * 3600 + min * 60 + sec) / 86400.0;

  const sunriseAhar = getAharFor(safeDate, longitude, sunriseFraction);

  // Calculate Next Sunrise to determine the "Day End" Ahar
  const tomorrowDate = new Date(date.getTime() + 86400000);
  const tomorrowSunriseSunset = getSunriseSunset(tomorrowDate, latitude, longitude, timezone);
  let nextSunriseAhar: number | null = null;
  let nextSunriseDate: Date | null = null;

  if (tomorrowSunriseSunset && tomorrowSunriseSunset.sunrise !== "N/A") {
    const tomorrowLocalStr = new Date(tomorrowDate.getTime() + timezone * 60 * 60 * 1000).toISOString().split('T')[0];
    nextSunriseDate = new Date(`${tomorrowLocalStr}T${tomorrowSunriseSunset.sunrise}${tzString}`);
    if (nextSunriseDate && !isNaN(nextSunriseDate.getTime())) {
      const [thr, tmin, tsec] = tomorrowSunriseSunset.sunrise.split(':').map(Number);
      const nextSunriseFraction = (thr * 3600 + tmin * 60 + tsec) / 86400.0;

      const safeTomorrowDate = new Date(`${tomorrowLocalStr}T12:00:00Z`);
      nextSunriseAhar = getAharFor(safeTomorrowDate, longitude, nextSunriseFraction);
    }
  }

  // Fallback if next sunrise calc fails (approx 24h later)
  const dayEndAhar = nextSunriseAhar ?? (sunriseAhar + 1.0);
  const midnightEndAhar = getAharFor(tomorrowDate, longitude, 0.0); // Used for Bhadra filtering

  if (isNaN(sunriseAhar)) return { error: "Failed to calculate ahar boundaries." };

  // Get Basic Panchanga Info at Sunrise
  const lunarInfo = getPanchangaDetailsAtAhar(sunriseAhar);
  const formatTime = (aharVal: number | null) => aharVal ? aharToDate(aharVal, sunriseAhar, sunriseDate).toISOString() : null;

  // Calculate Tithis
  const rawTithiElements = findElementsForDay(sunriseAhar, dayEndAhar, absElongation, 12, TITHI_NAMES, (index) => {
    const tithiNum = (index % 30) + 1;
    const paksha = tithiNum <= 15 ? "शुक्ल पक्ष" : "कृष्ण पक्ष";
    const tithiDay = tithiNum > 15 ? tithiNum - 15 : tithiNum;
    return resolveTithiName(tithiDay, paksha);
  });

  // Enrich Tithis with Paksha based on the Index
  const enrichedTithis = rawTithiElements.map(t => {
    // 0-14 is Shukla, 15-29 is Krishna
    // Math.abs handles any weird negative wrapping cases
    const normalizedIndex = Math.abs(t.index) % 30;
    const paksha = normalizedIndex < 15 ? "शुक्ल पक्ष" : "कृष्ण पक्ष";
    return { ...t, paksha };
  });

  // Calculate Nakshatra, Yoga, Karana
  let nakshatraElements = findElementsForDay(sunriseAhar, dayEndAhar, absTrueLongitudeMoon, (360 / 27), NAKSHATRA_NAMES);
  let yogaElements = findElementsForDay(sunriseAhar, dayEndAhar, (ah) => absTrueLongitudeSun(ah) + absTrueLongitudeMoon(ah), (360 / 27), YOGA_NAMES);
  let karanaElements = findElementsForDay(sunriseAhar, dayEndAhar, absElongation, 6, KARANA_NAMES, (index) => {
    const karanaIdx = index % 60;
    if (karanaIdx === 0) return KARANA_NAMES[0];
    if (karanaIdx < 57) return KARANA_NAMES[(karanaIdx - 1) % 7 + 1];
    return KARANA_NAMES[karanaIdx - 57 + 8];
  });

  // If previous element do not touches sunrise ... we no need to show in that day
  const filterEarlyElements = (list: any[]) => {
    return list.filter(item => {
      if (item.endTime === null || item.endTime === undefined) return true;
      return item.endTime > sunriseAhar;
    });
  };

  // Remove any Tithi that ends before sunrise
  if (rawTithiElements.length > 0 && rawTithiElements[0].endTime && rawTithiElements[0].endTime <= sunriseAhar) {
    rawTithiElements.shift();
  }

  nakshatraElements = filterEarlyElements(nakshatraElements);
  yogaElements = filterEarlyElements(yogaElements);
  karanaElements = filterEarlyElements(karanaElements);

  // Calculate Bhadra
  const vishtiEpisodes = karanaElements.filter(k => k.name.includes("विष्टि") || k.name.includes("Vishti"));
  const validBhadraEpisodes = vishtiEpisodes.filter(v => {
    if (!v.startTime) return true;
    return v.startTime < midnightEndAhar;
  });
  let bhadraInfo = null;
  if (validBhadraEpisodes.length > 0) {
    bhadraInfo = getBhadraDetails(validBhadraEpisodes[0].name, lunarInfo.moonLong);
  }

  // Generate Events (Passing Enriched Tithis)
  const events = getEventsForDate(
    date,
    bsInfo.year,
    bsInfo.monthIndex,
    bsInfo.day,
    enrichedTithis // contains Name + Paksha for Kshaya matching
  );

  // Format Final Output
  const lunarMonthDisplayName = lunarInfo.isAdhika ? "अधिक " + lunarInfo.lunarMonthName : lunarInfo.lunarMonthName;
  const gregorianDateFormatted = date.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
  });

  return {
    gregorianDate: gregorianDateFormatted,
    bikramSambat: `${toDevanagari(bsInfo.year)} ${bsInfo.monthName} ${toDevanagari(bsInfo.day)}`,
    bsYear: bsInfo.year,
    bsMonthIndex: bsInfo.monthIndex,
    bsDay: bsInfo.day,
    weekday: weekdays[date.getUTCDay()],
    sunrise: todaySunriseSunset.sunriseFormatted,
    sunset: todaySunriseSunset.sunsetFormatted,
    lunarMonth: lunarMonthDisplayName,
    paksha: lunarInfo.paksha,
    sunRashi: lunarInfo.sunRashi,
    moonRashi: lunarInfo.moonRashi,
    adhikaMasa: lunarInfo.adhikaStatus,
    isComputed: bsInfo.isComputed || false,

    // Udaya Values
    tithi: lunarInfo.tithiName,
    nakshatra: lunarInfo.nakshatraName,
    yoga: lunarInfo.yogaName,
    karana: lunarInfo.karanaName,

    bhadra: bhadraInfo,
    bhadraTiming: validBhadraEpisodes.map(v => ({
      startTime: formatTime(v.startTime),
      endTime: formatTime(v.endTime)
    })),

    // Timelines
    tithis: enrichedTithis.map(t => ({
      name: t.name,
      paksha: t.paksha,
      startTime: formatTime(t.startTime),
      endTime: formatTime(t.endTime)
    })),
    nakshatras: nakshatraElements.map(n => ({
      name: n.name,
      startTime: formatTime(n.startTime),
      endTime: formatTime(n.endTime)
    })),
    yogas: yogaElements.map(y => ({
      name: y.name,
      startTime: formatTime(y.startTime),
      endTime: formatTime(y.endTime)
    })),
    karanas: karanaElements.map(k => ({
      name: k.name,
      startTime: formatTime(k.startTime),
      endTime: formatTime(k.endTime)
    })),
    sunriseIso: sunriseDate.toISOString(),
    nextSunriseIso: nextSunriseDate ? nextSunriseDate.toISOString() : null,
    events,
  };
}