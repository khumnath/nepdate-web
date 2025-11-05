import { sun, moon, calcayan, calData, dTime, fix360, r2d, d2r } from './astroCalc';
import { fromJulianDay } from '../src/lib/lib';

export function findAspectTime(jd: number, tzone: number, isKarana: boolean): { start: string, end: string } {
    let s_t: { start?: Date, end?: Date } = {};
    const len = isKarana ? 6 : 12;
    const totalAspects = isKarana ? 60 : 30;

    const currentAyanamsa = calcayan(jd);
    const siderealSun = fix360(sun(jd) - currentAyanamsa);
    const siderealMoon = fix360(moon(jd) - currentAyanamsa);
    const diff = fix360(siderealMoon - siderealSun);
    const currentAspectNum = Math.floor(diff / len);

    for (let i = 0; i < 2; i++) {
        const targetAspectNum = (currentAspectNum + i + totalAspects) % totalAspects;
        const targetAspect = targetAspectNum * len;

        let jdt = jd;
        let lsun0, lmoon0, asp1;

        for (let j = 0; j < 5; j++) {
            const tempAyanamsa = calcayan(jdt);
            const sunJdt = sun(jdt);
            const moonJdt = moon(jdt);
            const cachedSun = sunJdt;
            const cachedMoon = moonJdt;

            lsun0 = fix360(cachedSun - tempAyanamsa);
            lmoon0 = fix360(cachedMoon - tempAyanamsa);

            let targetMoonLon = fix360(lsun0 + targetAspect);
            asp1 = targetMoonLon - lmoon0;
            if (asp1 > 180) asp1 -= 360;
            if (asp1 < -180) asp1 += 360;

            if (Math.abs(asp1) < 0.0001) break;
            
            const sunSpeed_trop = (sun(jdt + 0.001) - cachedSun) * 1000;
            const moonSpeed_trop = (moon(jdt + 0.001) - cachedMoon) * 1000;
            const sidereal_speed_diff = moonSpeed_trop - sunSpeed_trop;

            jdt += asp1 / sidereal_speed_diff;
        }
        
        const eventDate = calData(jdt + (tzone - dTime(jdt)) / 24);
        if (i === 0) s_t.start = eventDate;
        else s_t.end = eventDate;
    }
    
    return { start: s_t.start!.toISOString(), end: s_t.end!.toISOString() };
}

export function findNakshatraTime(jd: number, tzone: number): { start: string, end: string } {
    let s_t: { start?: Date, end?: Date } = {};
    const n_len = 360 / 27;
    const currentAyanamsa = calcayan(jd);
    const currentNakshNum = Math.floor(fix360(moon(jd) - currentAyanamsa) / n_len);
    
    for (let i = 0; i < 2; i++) {
        const targetNakshNum = (currentNakshNum + i + 27) % 27;
        const targetNakshLon = targetNakshNum * n_len;

        let jdt = jd;
        let lmoon0, asp1;
        
        for (let j = 0; j < 5; j++) {
            const tempAyanamsa = calcayan(jdt);
            const moonJdt = moon(jdt);
            const cachedMoon = moonJdt;
            
            lmoon0 = fix360(cachedMoon - tempAyanamsa);
            asp1 = targetNakshLon - lmoon0;
            if (asp1 > 180) asp1 -= 360;
            if (asp1 < -180) asp1 += 360;
            
            if (Math.abs(asp1) < 0.0001) break;
            const moonSpeed_trop = (moon(jdt + 0.001) - cachedMoon) * 1000;
            jdt += asp1 / moonSpeed_trop;
        }

        const eventDate = calData(jdt + (tzone - dTime(jdt)) / 24);
        if (i === 0) s_t.start = eventDate;
        else s_t.end = eventDate;
    }

    return { start: s_t.start!.toISOString(), end: s_t.end!.toISOString() };
}

export function findNakshatraPadaTime(jd: number, tzone: number): { start: string, end: string } {
    const n_len = 360 / 27;
    const p_len = n_len / 4;
    const currentAyanamsa = calcayan(jd);
    const siderealMoon = fix360(moon(jd) - currentAyanamsa);

    const currentNakshNum = Math.floor(siderealMoon / n_len);
    const progressInNaksh = siderealMoon % n_len;
    const currentPadaNum = Math.floor(progressInNaksh / p_len);

    let s_t: { start?: Date, end?: Date } = {};
    
    for (let i = 0; i < 2; i++) {
        const targetPadaAbsoluteNum = currentNakshNum * 4 + currentPadaNum + i;
        const targetLon = (targetPadaAbsoluteNum * p_len);

        let jdt = jd;
        let lmoon0, asp1;

        for (let j = 0; j < 5; j++) {
            const tempAyanamsa = calcayan(jdt);
            const moonJdt = moon(jdt);
            const cachedMoon = moonJdt;
            
            lmoon0 = fix360(cachedMoon - tempAyanamsa);
            asp1 = targetLon - lmoon0;
            // Handle wrap-around
            if (asp1 > 180) asp1 -= 360;
            if (asp1 < -180) asp1 += 360;
            
            if (Math.abs(asp1) < 0.0001) break;

            const moonSpeed_trop = (moon(jdt + 0.001) - cachedMoon) * 1000;
            jdt += asp1 / moonSpeed_trop;
        }

        const eventDate = calData(jdt + (tzone - dTime(jdt)) / 24);
        if (i === 0) s_t.start = eventDate;
        else s_t.end = eventDate;
    }

    return { start: s_t.start!.toISOString(), end: s_t.end!.toISOString() };
}


export function findYogaTime(jd: number, tzone: number): { start: string, end: string } {
    let s_t: { start?: Date, end?: Date } = {};
    const y_len = 360 / 27;
    
    const currentAyanamsa = calcayan(jd);
    const siderealSun = fix360(sun(jd) - currentAyanamsa);
    const siderealMoon = fix360(moon(jd) - currentAyanamsa);
    const currentYogaNum = Math.floor(fix360(siderealSun + siderealMoon) / y_len);
    
    for (let i = 0; i < 2; i++) {
        const targetYogaNum = (currentYogaNum + i + 27) % 27;
        const targetYogaLon = targetYogaNum * y_len;

        let jdt = jd;
        let lsun0, lmoon0, totalLon, asp1;

        for (let j = 0; j < 5; j++) {
            const tempAyanamsa = calcayan(jdt);
            const sunJdt = sun(jdt);
            const moonJdt = moon(jdt);
            const cachedSun = sunJdt;
            const cachedMoon = moonJdt;
            
            lsun0 = fix360(cachedSun - tempAyanamsa);
            lmoon0 = fix360(cachedMoon - tempAyanamsa);
            totalLon = fix360(lsun0 + lmoon0);
            asp1 = targetYogaLon - totalLon;
            if (asp1 > 180) asp1 -= 360;
            if (asp1 < -180) asp1 += 360;

            if (Math.abs(asp1) < 0.0001) break;
            const sunSpeed_trop = (sun(jdt+0.001)-cachedSun)*1000;
            const moonSpeed_trop = (moon(jdt+0.001)-cachedMoon)*1000;
            jdt += asp1 / (moonSpeed_trop + sunSpeed_trop);
        }

        const eventDate = calData(jdt + (tzone - dTime(jdt)) / 24);
        if (i === 0) s_t.start = eventDate;
        else s_t.end = eventDate;
    }
    return { start: s_t.start!.toISOString(), end: s_t.end!.toISOString() };
}

export function getSunRiseSet(jd_tt_midnight: number, lat: number, lon: number, tzOffset: number): { sunrise: string, sunset: string } {
    const n = jd_tt_midnight - 2451545.0 + 0.0008;
    const j_star = n - lon / 360.0;
    const M = fix360(357.5291 + 0.98560028 * j_star);
    const C = 1.9148 * Math.sin(M * d2r) + 0.0200 * Math.sin(2 * M * d2r) + 0.0003 * Math.sin(3 * M * d2r);
    const lambda = fix360(M + 102.9372 + C + 180.0);
    const j_transit = 2451545.0 + j_star + 0.0053 * Math.sin(M * d2r) - 0.0069 * Math.sin(2 * lambda * d2r);
    const delta = Math.asin(Math.sin(lambda * d2r) * Math.sin(23.44 * d2r)) * r2d;
    const cos_H = (Math.sin(-0.833 * d2r) - Math.sin(lat * d2r) * Math.sin(delta * d2r)) / (Math.cos(lat * d2r) * Math.cos(delta * d2r));
    
    if (cos_H > 1 || cos_H < -1) return { sunrise: "N/A", sunset: "N/A" };

    const H = Math.acos(cos_H) * r2d;
    const j_rise = j_transit - H / 360.0;
    const j_set = j_transit + H / 360.0;

    const formatTime = (julian_tt: number, isSunrise: boolean) => {
        if (isNaN(julian_tt)) return "N/A";
        const julian_ut = julian_tt - dTime(julian_tt) / 24.0;
        const eventDateUTC = fromJulianDay(julian_ut);
        
        const totalMinutes = eventDateUTC.getUTCHours() * 60 + eventDateUTC.getUTCMinutes() + (tzOffset * 60);
        const localMinutes = ((totalMinutes % 1440) + 1440) % 1440;
        
        let hh = Math.floor(localMinutes / 60);
        const mm = localMinutes % 60;

        // The calculation can be off by 12 hours. This corrects it.
        if (isSunrise && hh >= 12) hh -= 12;
        else if (!isSunrise && hh < 12) hh += 12;
        
        const period = hh < 12 ? 'बिहान' : 'बेलुका';
        const hour12 = hh % 12 === 0 ? 12 : hh % 12;

        return `${hour12}:${String(mm).padStart(2, '0')} ${period}`;
    };

    return { sunrise: formatTime(j_rise, true), sunset: formatTime(j_set, false) };
}

export function getMoonRiseSet(jd_tt_day: number, lat: number, lon: number, tzOffset: number): { moonrise: string, moonset: string } {
    const h0 = -0.833; // Standard altitude for rise/set, includes refraction & semi-diameter. More accurate for moon is -0.125 but this is close.
    const latRad = lat * d2r;

    const getRaDec = (jd: number) => {
        const lon_deg = moon(jd);
        const t = (jd - 2451545.0) / 36525.0;
        const epsilon = (23.439291 - 0.0130042 * t) * d2r;
        const lon_rad = fix360(lon_deg) * d2r;
        const sin_lon = Math.sin(lon_rad);
        let ra = Math.atan2(sin_lon * Math.cos(epsilon), Math.cos(lon_rad));
        const dec = Math.asin(sin_lon * Math.sin(epsilon));
        return { ra, dec };
    };

    const getEventsForDay = (current_jd_tt: number) => {
        const pos_prev = getRaDec(current_jd_tt - 1);
        const pos_curr = getRaDec(current_jd_tt);
        const pos_next = getRaDec(current_jd_tt + 1);

        // Simple unwrap
        const unwrap = (y_prev: number, y_curr: number, y_next: number) => {
            let y0 = y_prev, y1 = y_curr, y2 = y_next;
            if (y1 < y0) y1 += 2 * Math.PI;
            if (y2 < y1) y2 += 2 * Math.PI;
            return { y0, y1, y2 };
        }
        const { y0: ra0, y1: ra1, y2: ra2 } = unwrap(pos_prev.ra, pos_curr.ra, pos_next.ra);
        const { y0: dec0, y1: dec1, y2: dec2 } = {y0: pos_prev.dec, y1: pos_curr.dec, y2: pos_next.dec};

        const jd_ut = current_jd_tt - dTime(current_jd_tt) / 24.0;
        const t = (jd_ut - 2451545.0) / 36525.0;
        const gmst0 = 280.46061837 + 360.98564736629 * (jd_ut - 2451545.0) + 0.000387933 * t * t - t * t * t / 38710000;

        const interpolate = (m: number, y_prev: number, y_curr: number, y_next: number) => {
            const a = y_curr - y_prev;
            const b = y_next - y_curr;
            const c = b - a;
            return y_curr + (m / 2) * (a + b + m * c);
        };

        const findEventTime = (eventType: 'rise' | 'set') => {
            const cos_H0 = (Math.sin(h0 * d2r) - Math.sin(latRad) * Math.sin(dec1)) / (Math.cos(latRad) * Math.cos(dec1));
            if (Math.abs(cos_H0) > 1) return null;
            const H0_deg = Math.acos(cos_H0) * r2d;

            const lst0 = gmst0 + lon;
            const transit_m = fix360(ra1 * r2d - lst0) / 360.985647;
            let m = eventType === 'rise' ? transit_m - H0_deg / 360.985647 : transit_m + H0_deg / 360.985647;
            
            for (let i = 0; i < 4; i++) {
                const lst_m = fix360(gmst0 + lon + m * 360.985647);
                const ra_m = interpolate(m, ra0, ra1, ra2);
                const dec_m = interpolate(m, dec0, dec1, dec2);

                const h_actual_rad = lst_m * d2r - ra_m;
                
                const cos_H_req = (Math.sin(h0 * d2r) - Math.sin(latRad) * Math.sin(dec_m)) / (Math.cos(latRad) * Math.cos(dec_m));
                if (Math.abs(cos_H_req) > 1) return null;
                const H_req_rad = Math.acos(cos_H_req);
                const h_for_event = eventType === 'rise' ? -H_req_rad : H_req_rad;

                const delta_m = (h_actual_rad - h_for_event) / (2 * Math.PI * 1.0027379);
                m -= delta_m;
            }
            return m;
        };
        return { rise: findEventTime('rise'), set: findEventTime('set') };
    }
    
    const eventsToday = getEventsForDay(jd_tt_day);
    const eventsYesterday = getEventsForDay(jd_tt_day - 1);
    const eventsNextDay = getEventsForDay(jd_tt_day + 1);

    const format = (m: number | null, dayOffset: number) => {
        if (m === null) return "N/A";
        const jd_ut = (jd_tt_day + dayOffset) - dTime(jd_tt_day + dayOffset) / 24.0;
        const event_jd_ut = jd_ut + m;
        const eventDateUTC = fromJulianDay(event_jd_ut);
        
        const totalMinutes = eventDateUTC.getUTCHours() * 60 + eventDateUTC.getUTCMinutes() + (tzOffset * 60);
        const localMinutes = ((totalMinutes % 1440) + 1440) % 1440;
        const hh = Math.floor(localMinutes / 60);
        const mm = Math.round(localMinutes % 60);

        const period = hh < 12 ? 'बिहान' : 'बेलुका';
        const hour12 = hh % 12 === 0 ? 12 : hh % 12;
        
        let label = '';
        if (dayOffset === -1) label = ' (हिजो)';
        if (dayOffset === 1) label = ' (भोलि)';
        
        return `${hour12}:${String(mm).padStart(2, '0')} ${period}${label}`;
    }

    const localDayStartFraction = -tzOffset / 24.0;
    const localDayEndFraction = 1 - tzOffset / 24.0;

    const findEventForLocalDay = (eventType: 'rise' | 'set') => {
        const today_m = eventsToday[eventType];
        if (today_m !== null && today_m >= localDayStartFraction && today_m < localDayEndFraction) {
            return format(today_m, 0);
        }
        const yesterday_m = eventsYesterday[eventType];
        if (yesterday_m !== null && (yesterday_m + 1) >= localDayStartFraction && (yesterday_m + 1) < localDayEndFraction) {
            return format(yesterday_m, -1);
        }
        const nextday_m = eventsNextDay[eventType];
        if (nextday_m !== null && (nextday_m - 1) >= localDayStartFraction && (nextday_m - 1) < localDayEndFraction) {
            return format(nextday_m, 1);
        }
        return "N/A";
    }

    return { moonrise: findEventForLocalDay('rise'), moonset: findEventForLocalDay('set') };
}