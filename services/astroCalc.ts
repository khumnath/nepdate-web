/**
 * Nepdate-astroCalc Vedic Astrological Ephemeris Calculator
 *
 * Computes planetary positions (Sun, Moon, Mercury–Saturn, Rahu/Ketu)
 * using simplified orbital elements and lunar corrections
 * based on Jean Meeus' "Astronomical Algorithms" (VSOP87/ELP2000 approximations).
 *
 * Positions are adapted to the sidereal zodiac via ayanamsa subtraction.
 * Outputs include longitude, latitude, speed, retrograde status, and rashi placement.
 *
 * Note: This is an approximation suitable for astrological use,
 * not a full high‑precision VSOP87/ELP2000 implementation.
 */


export const d2r = Math.PI / 180;
export const r2d = 180 / Math.PI;

// Data structures for lunar corrections
function corr(mlcor: number, mscor: number, fcor: number, dcor: number, lcor: number) {
    return { mlcor, mscor, fcor, dcor, lcor };
}
function corr2(l: number, ml: number, ms: number, f: number, d: number) {
    return { l, ml, ms, f, d };
}

const corrMoon = [
    corr(0,0,0,4,13.902), corr(0,0,0,2,2369.912), corr(1,0,0,4,1.979), corr(1,0,0,2,191.953),
    corr(1,0,0,0,22639.5), corr(1,0,0,-2,-4586.465), corr(1,0,0,-4,-38.428), corr(1,0,0,-6,-0.393),
    corr(0,1,0,4,-0.289), corr(0,1,0,2,-24.42), corr(0,1,0,0,-668.146), corr(0,1,0,-2,-165.145),
    corr(0,1,0,-4,-1.877), corr(0,0,0,3,0.403), corr(0,0,0,1,-125.154), corr(2,0,0,4,0.213),
    corr(2,0,0,2,14.387), corr(2,0,0,0,769.016), corr(2,0,0,-2,-211.656), corr(2,0,0,-4,-30.773),
    corr(2,0,0,-6,-0.57), corr(1,1,0,2,-2.921), corr(1,1,0,0,-109.673), corr(1,1,0,-2,-205.962),
    corr(1,1,0,-4,-4.391), corr(1,-1,0,4,0.283), corr(1,-1,0,2,14.577), corr(1,-1,0,0,147.687),
    corr(1,-1,0,-2,28.475), corr(1,-1,0,-4,0.636), corr(0,2,0,2,-0.189), corr(0,2,0,0,-7.486),
    corr(0,2,0,-2,-8.096), corr(0,0,2,2,-5.741), corr(0,0,2,0,-411.608), corr(0,0,2,-2,-55.173),
    corr(0,0,2,-4,0.025), corr(1,0,0,1,-8.466), corr(1,0,0,-1,18.609), corr(1,0,0,-3,3.215),
    corr(0,1,0,1,18.023), corr(0,1,0,-1,0.56), corr(3,0,0,2,1.06), corr(3,0,0,0,36.124),
    corr(3,0,0,-2,-13.193), corr(3,0,0,-4,-1.187), corr(3,0,0,-6,-0.293), corr(2,1,0,2,-0.29),
    corr(2,1,0,0,-7.649), corr(2,1,0,-2,-8.627), corr(2,1,0,-4,-2.74), corr(2,-1,0,2,1.181),
    corr(2,-1,0,0,9.703), corr(2,-1,0,-2,-2.494), corr(2,-1,0,-4,0.36), corr(1,2,0,0,-1.167),
    corr(1,2,0,-2,-7.412), corr(1,2,0,-4,-0.311), corr(1,-2,0,2,0.757), corr(1,-2,0,0,2.58),
    corr(1,-2,0,-2,2.533), corr(0,3,0,-2,-0.344), corr(1,0,2,2,-0.992), corr(1,0,2,0,-45.099),
    corr(1,0,2,-2,-0.179), corr(1,0,-2,2,-6.382), corr(1,0,-2,0,39.528), corr(1,0,-2,-2,9.366),
    corr(0,1,2,0,0.415), corr(0,1,2,-2,-2.152), corr(0,1,-2,2,-1.44), corr(0,1,-2,-2,0.384),
    corr(2,0,0,1,-0.586), corr(2,0,0,-1,1.75), corr(2,0,0,-3,1.225), corr(1,1,0,1,1.267),
    corr(1,-1,0,-1,-1.089), corr(0,0,2,-1,0.584), corr(4,0,0,0,1.938), corr(4,0,0,-2,-0.952),
    corr(3,1,0,0,-0.551), corr(3,1,0,-2,-0.482), corr(3,-1,0,0,0.681), corr(2,0,2,0,-3.996),
    corr(2,0,2,-2,0.557), corr(2,0,-2,2,-0.459), corr(2,0,-2,0,-1.298), corr(2,0,-2,-2,0.538),
    corr(1,1,-2,-2,0.426), corr(1,-1,2,0,-0.304), corr(1,-1,-2,2,-0.372), corr(0,0,4,0,0.418),
    corr(2,-1,0,-1,-0.352)
];

const corrMoon2 = [
    corr2(0.127,0,0,0,6), corr2(-0.151,0,2,0,-4), corr2(-0.085,0,0,2,4), corr2(0.15,0,1,0,3),
    corr2(-0.091,2,1,0,-6), corr2(-0.103,0,3,0,0), corr2(-0.301,1,0,2,-4), corr2(0.202,1,0,-2,-4),
    corr2(0.137,1,1,0,-1), corr2(0.233,1,1,0,-3), corr2(-0.122,1,-1,0,1), corr2(-0.276,1,-1,0,-3),
    corr2(0.255,0,0,2,1), corr2(0.254,0,0,2,-3), corr2(-0.1,3,1,0,-4), corr2(-0.183,3,-1,0,-2),
    corr2(-0.297,2,2,0,-2), corr2(-0.161,2,2,0,-4), corr2(0.197,2,-2,0,0), corr2(0.254,2,-2,0,-2),
    corr2(-0.25,1,3,0,-2), corr2(-0.123,2,0,2,2), corr2(0.173,2,0,-2,-4), corr2(0.263,1,1,2,0),
    corr2(0.13,3,0,0,-1), corr2(0.113,5,0,0,0), corr2(0.092,3,0,2,-2)
];

export function fix360(v: number): number {
    v = v - Math.floor(v / 360.0) * 360.0;
    return v < 0 ? v + 360.0 : v;
}

// Iterative solver for Kepler's Equation. M must be in radians.
function kepler(m_rad: number, ex: number): number {
    let u0 = m_rad;
    for (let i = 0; i < 7; i++) {
        u0 = m_rad + ex * Math.sin(u0);
    }
    return u0;
}

function nutation(jd: number): number {
    const t = (jd - 2415020) / 36525;
    const t2 = t * t;
    const ls = (279.6967 + 36000.7689 * t + 0.000303 * t2) * d2r;
    const l = (270.4341639 + 481267.8831417 * t - 0.0011333333 * t2) * d2r;
    const ms = (358.4758333 + 35999.04975 * t - 0.00015 * t2) * d2r;
    const ml = (296.1046083 + 477198.8491083 * t + 0.0091916667 * t2) * d2r;
    const om = (259.183275 - 1934.1420083 * t + 0.0020777778 * t2) * d2r;
    
    let nut = (-17.2327 - 0.01737 * t) * Math.sin(om) + 0.2088 * Math.sin(2 * om) - 1.2729 * Math.sin(2 * ls) + 0.1261 * Math.sin(ms) - 0.2037 * Math.sin(2 * l) + 0.0675 * Math.sin(ml) - 0.0497 * Math.sin(2 * ls + ms) + 0.0214 * Math.sin(2 * ls - ms) + 0.0261 * Math.sin(2 * l + ml);
    return nut / 3600.0;
}

export function calcayan(jd: number): number {
    const T = (jd - 2451545.0) / 36525.0;
    return 24.144206 - 0.013972 * T - 0.000009 * T * T;
}

export function calData(jd: number) {
    let z1 = jd + 0.5;
    let z2 = Math.floor(z1);
    let f = z1 - z2;

    let a = z2;
    if (z2 >= 2299161) {
        const alf = Math.floor((z2 - 1867216.25) / 36524.25);
        a = z2 + 1 + alf - Math.floor(alf / 4);
    }

    const b = a + 1524;
    const c = Math.floor((b - 122.1) / 365.25);
    const d = Math.floor(365.25 * c);
    const e = Math.floor((b - d) / 30.6001);

    const days = b - d - Math.floor(30.6001 * e) + f;
    const kday = Math.floor(days);
    const kmon = e < 13.5 ? e - 1 : e - 13;
    const kyear = kmon > 2.5 ? c - 4716 : c - 4715;

    const hh1 = (days - kday) * 24;
    const khr = Math.floor(hh1);
    const ksek = (hh1 - khr) * 3600;
    const kmin = Math.floor(ksek / 60);
    const ksek_final = Math.floor(ksek % 60);

    return new Date(Date.UTC(kyear, kmon - 1, kday, khr, kmin, ksek_final));
}

export function dTime(jd: number): number {
    const efdt = [
        124, 85, 62, 48, 37, 26, 16, 10, 9, 10, 11, 11, 12, 13, 15, 16, 17, 17, 13.7, 12.5, 
        12, 7.5, 5.7, 7.1, 7.9, 1.6, -5.4, -5.9, -2.7, 10.5, 21.2, 24, 24.3, 29.2, 33.2, 40.2, 50.5, 56.9,
        63.8, 67.0, 69.4, 71.0,
    ];
    const s = calData(jd);
    const dgod = s.getUTCFullYear() + (s.getUTCMonth())/12 + (s.getUTCDate() - 1)/365.25;
    const t = (jd - 2378497)/36525; 
    let dt_val: number;

    if (dgod >= 1620 && dgod < 2030) {
        const i1 = Math.floor((dgod - 1620)/10);
        const di = dgod - (1620 + i1*10);
        dt_val = (efdt[i1] + ((efdt[i1 + 1] - efdt[i1])*di)/10);
    }
    else {
        if (dgod >= 2030) dt_val = 71.0 + 0.5 * (dgod - 2030);
        else if (dgod >= 948) dt_val = 25.5 * t * t;
        else dt_val = 1361.7 + 320 * t + 44.3 * t * t;
    }
    return dt_val / 3600;
}

export function moon(jd: number): number {
    const tdays = jd - 2415020;
    const t = tdays / 36525;
    
    let l = 270.4337361 + 13.176396544528099 * tdays - 5.86 * t * t / 3600 + 0.0068 * t * t * t / 3600;
    let d_mean = 350.7374861110581 + 445267.1142166667 * t - t * t * 1.436111132303874e-3 + 0.0000018888889 * t * t * t;
    const pe = 334.329556 + 14648522.52 * t / 3600 - 37.17 * t * t / 3600 - 0.045 * t * t * t / 3600;
    let ms_mean = 358.4758333333334 + 35999.04974999958 * t - t * t * 1.500000059604645e-4 - t * t * t * 3.3333333623078e-6;
    let ml = fix360(l - pe);
    const om = 259.183275 - 6962911.23 * t / 3600 + 7.48 * t * t / 3600 + 0.008 * t * t * t / 3600;
    let f_mean = fix360(l - om);

    let ml_rad = d2r * ml;
    let ms_rad = d2r * ms_mean;
    let f_rad = d2r * f_mean;
    let d_rad = d2r * d_mean;

    let lk = 0, lk1 = 0;
    const i1corr = 1.0 - 6.8320e-8 * tdays;
    const dgc = 1;
    const i2corr = dgc * dgc;

    for (let i = 0; i < corrMoon.length; i++) {
        const arg = corrMoon[i].mlcor * ml_rad + corrMoon[i].mscor * ms_rad + corrMoon[i].fcor * f_rad + corrMoon[i].dcor * d_rad;
        let sinarg = Math.sin(arg);
        if (corrMoon[i].mscor != 0) {
            sinarg *= i1corr;
            if (corrMoon[i].mscor == 2 || corrMoon[i].mscor == -2) sinarg *= i1corr;
        }
        if (corrMoon[i].fcor != 0) sinarg *= i2corr;
        lk += corrMoon[i].lcor * sinarg;
    }
    for (let i = 0; i < corrMoon2.length; i++) {
        const arg = corrMoon2[i].ml * ml_rad + corrMoon2[i].ms * ms_rad + corrMoon2[i].f * f_rad + corrMoon2[i].d * d_rad;
        lk1 += corrMoon2[i].l * Math.sin(arg);
    }
    
    const r2rad_dlid = 360 * d2r;
    let dlid = 0.822 * Math.sin(r2rad_dlid * (0.32480 - 0.0017125594 * tdays)) + 0.307 * Math.sin(r2rad_dlid * (0.14905 - 0.0034251187 * tdays)) + 0.348 * Math.sin(r2rad_dlid * (0.68266 - 0.0006873156 * tdays)) + 0.662 * Math.sin(r2rad_dlid * (0.65162 + 0.0365724168 * tdays)) + 0.643 * Math.sin(r2rad_dlid * (0.88098 - 0.0025069941 * tdays)) + 1.137 * Math.sin(r2rad_dlid * (0.85823 + 0.0364487270 * tdays)) + 0.436 * Math.sin(r2rad_dlid * (0.71892 + 0.0362179180 * tdays)) + 0.327 * Math.sin(r2rad_dlid * (0.97639 + 0.0001734910 * tdays));

    l = l + nutation(jd) + (lk + lk1 + dlid) / 3600.0;
    
    return fix360(l);
}


export function sun(jd: number): number {
    const tdays = jd - 2415020;
    const t = tdays / 36525;
    
    const ls = 279.696678 + 0.9856473354 * tdays + 1.089 * t * t / 3600;
    const pes = 281.220833 + 1.7192 * t + 0.00045 * t * t;
    const ms = fix360(ls - pes);
    const ex = 0.01675104 - 0.0000418 * t - 0.000000126 * t * t;
    
    const u_rad = kepler(ms * d2r, ex);
    const truanom = 2 * r2d * Math.atan(Math.sqrt((1 + ex) / (1 - ex)) * Math.tan(u_rad / 2));
    
    let il = ls + truanom - ms;

    const u1 = (153.23 + 22518.7541 * t) * d2r;
    const u2 = (216.57 + 45037.5082 * t) * d2r;
    const u3 = (312.69 + 32964.3577 * t) * d2r;
    const u4 = (350.74 + 445267.1142 * t - 0.00144 * t * t) * d2r;

    let dl = 0.00134 * Math.cos(u1) + 0.00154 * Math.cos(u2) + 0.002 * Math.cos(u3) + 0.00179 * Math.sin(u4) + 0.00178 * Math.sin((5.4 - 1.5 * t) * d2r);

    const rs = 1.0000002 * (1 - ex * ex) / (1 + ex * Math.cos(truanom * d2r));
    const ab = 20.4898 / 3600 / rs;

    let finalSun = il + dl + nutation(jd) - ab;

    return fix360(finalSun);
}

const J2000 = 2451545.0;
const planet_elements: Record<string, { [key: string]: number[] }> = {
    'MERCURY': { N: [48.3313, 3.24587E-5], i: [7.0047, 5.00E-8], w: [29.1241, 4.20258E-5], a: [0.387098, 0], e: [0.205635, 5.59E-10], M: [168.6562, 4.0923344368] },
    'VENUS':   { N: [76.6799, 2.46590E-5], i: [3.3946, 2.75E-8], w: [54.8910, 1.38374E-5], a: [0.723330, 0], e: [0.006773, -1.32E-9], M: [48.0052, 1.6021302244] },
    'EARTH':   { N: [0.0, 0], i: [0.0, 0], w: [102.9376, 0.0000713], a: [1.000000, 0], e: [0.016709, -1.151E-9], M: [356.0470, 0.985609102] },
    'MARS':    { N: [49.5574, 2.11081E-5], i: [1.8497, -1.78E-8], w: [286.5016, 2.92961E-5], a: [1.523688, 0], e: [0.093405, 2.516E-9], M: [18.6021, 0.5240207766] },
    'JUPITER': { N: [100.4542, 2.76854E-5], i: [1.3030, -1.557E-7], w: [273.8777, 1.64505E-5], a: [5.20256, 0], e: [0.048498, 1.611E-9], M: [19.8950, 0.0830853001] },
    'SATURN':  { N: [113.6634, 2.38980E-5], i: [2.4886, -1.081E-7], w: [339.3939, 2.97661E-5], a: [9.55475, 0], e: [0.055546, -9.499E-9], M: [316.9670, 0.0334442282] },
};

export function getPlanetPosition(jd: number, planet: string, ayanamsa: number): {
    planet: string;
    eclipticLongitude: number;
    eclipticLatitude: number;
    speedLon: number;
    rashi: number;
    degreesInSign: number;
    retrograde: boolean;
} {
     if (planet === 'SUN') {
        const longitude = sun(jd);
        const siderealLon = fix360(longitude - ayanamsa);
        const longitude_prev = sun(jd - 0.1);
        const siderealLon_prev = fix360(longitude_prev - ayanamsa);
        
        let diff = siderealLon - siderealLon_prev;
        if (diff < -180) diff += 360;
        if (diff > 180) diff -= 360;
        const speed = diff / 0.1;
        
        return { planet, eclipticLongitude: siderealLon, rashi: Math.floor(siderealLon / 30) + 1, degreesInSign: siderealLon % 30, retrograde: speed < 0, eclipticLatitude: 0, speedLon: speed };
    }
    if (planet === 'MOON') {
        const longitude = moon(jd);
        const siderealLon = fix360(longitude - ayanamsa);
        const longitude_prev = moon(jd - 0.1);
        const siderealLon_prev = fix360(longitude_prev - ayanamsa);

        let diff = siderealLon - siderealLon_prev;
        if (diff < -180) diff += 360;
        if (diff > 180) diff -= 360;
        const speed = diff / 0.1;

        return { planet, eclipticLongitude: siderealLon, rashi: Math.floor(siderealLon / 30) + 1, degreesInSign: siderealLon % 30, retrograde: false, eclipticLatitude: 0, speedLon: speed };
    }
    if (planet === 'RAHU' || planet === 'KETU') {
        const t = (jd - 2451545.0) / 36525.0;
        const meanNode = fix360(125.04452 - 1934.136261 * t);
        
        const L_moon = fix360(218.3164477 + 481267.88123421 * t);
        const L_sun = fix360(280.46646 + 36000.76983 * t);
        const d = fix360(L_moon - L_sun);
        const F = fix360(L_moon - meanNode);
        
        let dL = -1.274 * Math.sin((meanNode - 2 * d) * d2r) 
               - 0.227 * Math.sin(2 * F * d2r);

        const trueNode = fix360(meanNode + dL);
        const siderealTrueNode = fix360(trueNode - ayanamsa);
        const longitude = planet === 'RAHU' ? siderealTrueNode : fix360(siderealTrueNode + 180);
        return { planet, eclipticLongitude: longitude, rashi: Math.floor(longitude / 30) + 1, degreesInSign: longitude % 30, retrograde: true, eclipticLatitude: 0, speedLon: -0.0529 };
    }

    const d = jd - J2000;
    
    const getHelioCoords = (p_d: number, planet_name: string) => {
        const elements = planet_elements[planet_name];
        const N = fix360(elements.N[0] + elements.N[1] * p_d);
        const i = elements.i[0] + elements.i[1] * p_d;
        const w = fix360(elements.w[0] + elements.w[1] * p_d);
        const a = elements.a[0];
        const e = elements.e[0] + elements.e[1] * p_d;
        let M = fix360(elements.M[0] + elements.M[1] * p_d);
        
        const E_rad = kepler(M * d2r, e);
        
        const x_orb = a * (Math.cos(E_rad) - e);
        const y_orb = a * Math.sqrt(1 - e * e) * Math.sin(E_rad);
        
        const x_ecl = (Math.cos(w*d2r) * Math.cos(N*d2r) - Math.sin(w*d2r) * Math.sin(N*d2r) * Math.cos(i*d2r)) * x_orb +
                      (-Math.sin(w*d2r) * Math.cos(N*d2r) - Math.cos(w*d2r) * Math.sin(N*d2r) * Math.cos(i*d2r)) * y_orb;
        const y_ecl = (Math.cos(w*d2r) * Math.sin(N*d2r) + Math.sin(w*d2r) * Math.cos(N*d2r) * Math.cos(i*d2r)) * x_orb +
                      (-Math.sin(w*d2r) * Math.sin(N*d2r) + Math.cos(w*d2r) * Math.cos(N*d2r) * Math.cos(i*d2r)) * y_orb;
        const z_ecl = (Math.sin(w*d2r) * Math.sin(i*d2r)) * x_orb + 
                      (Math.cos(w*d2r) * Math.sin(i*d2r)) * y_orb;
        
        return { x: x_ecl, y: y_ecl, z: z_ecl };
    };

    const getGeoCoords = (p_d: number, planet_name: string): { longitude: number, latitude: number } => {
        const planetCoords = getHelioCoords(p_d, planet_name);
        const earthCoords = getHelioCoords(p_d, 'EARTH');

        const geo_x = planetCoords.x - earthCoords.x;
        const geo_y = planetCoords.y - earthCoords.y;
        const geo_z = planetCoords.z - earthCoords.z;
        
        const longitude = fix360(Math.atan2(geo_y, geo_x) * r2d);

        const dist_xy = Math.sqrt(geo_x * geo_x + geo_y * geo_y);
        const latitude = Math.atan2(geo_z, dist_xy) * r2d;

        return { longitude, latitude };
    };

    const { longitude, latitude } = getGeoCoords(d, planet);
    const { longitude: longitude_prev } = getGeoCoords(d - 0.1, planet);

    const siderealLon = fix360(longitude - ayanamsa);
    const siderealLon_prev = fix360(longitude_prev - ayanamsa);

    let diff = siderealLon - siderealLon_prev;
    if (diff < -180) diff += 360;
    if (diff > 180) diff -= 360;
    const speed = diff / 0.1;

    return { 
        planet, 
        eclipticLongitude: siderealLon, 
        rashi: Math.floor(siderealLon / 30) + 1, 
        degreesInSign: siderealLon % 30, 
        retrograde: speed < 0, 
        eclipticLatitude: latitude,
        speedLon: speed 
    };
}