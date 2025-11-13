// CALCULATION ENGINE & HELPERS FOR KUNDALI
// Written to use Surya Siddhanta sun/moon from BS Calendar Library

import { trueLongitudeSun, trueLongitudeMoon, KaliEpoch }
    from '../src/lib/core/bikram';

export const d2r = Math.PI / 180;
export const r2d = 180 / Math.PI;

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

// Surya Siddhanta Integration
function jdToAhar(jd: number): number {
    return jd - KaliEpoch;
}

export function sun(jd: number): number {
    const ahar = jdToAhar(jd);
    return trueLongitudeSun(ahar);
}

export function moon(jd: number): number {
    const ahar = jdToAhar(jd);
    return trueLongitudeMoon(ahar);
}

// Planetary Positions
const J2000 = 2451545.0;
const planet_elements: Record<string, { [key: string]: number[] }> = {
    MERCURY: { N: [48.3313, 3.24587E-5], i: [7.0047, 5.00E-8], w: [29.1241, 4.20258E-5], a: [0.387098, 0], e: [0.205635, 5.59E-10], M: [168.6562, 4.0923344368] },
    VENUS: { N: [76.6799, 2.46590E-5], i: [3.3946, 2.75E-8], w: [54.8910, 1.38374E-5], a: [0.723330, 0], e: [0.006773, -1.32E-9], M: [48.0052, 1.6021302244] },
    EARTH: { N: [0.0, 0], i: [0.0, 0], w: [102.9376, 0.0000713], a: [1.000000, 0], e: [0.016709, -1.151E-9], M: [356.0470, 0.985609102] },
    MARS: { N: [49.5574, 2.11081E-5], i: [1.8497, -1.78E-8], w: [286.5016, 2.92961E-5], a: [1.523688, 0], e: [0.093405, 2.516E-9], M: [18.6021, 0.5240207766] },
    JUPITER: { N: [100.4542, 2.76854E-5], i: [1.3030, -1.557E-7], w: [273.8777, 1.64505E-5], a: [5.20256, 0], e: [0.048498, 1.611E-9], M: [19.8950, 0.0830853001] },
    SATURN: { N: [113.6634, 2.38980E-5], i: [2.4886, -1.081E-7], w: [339.3939, 2.97661E-5], a: [9.55475, 0], e: [0.055546, -9.499E-9], M: [316.9670, 0.0334442282] },
};

type PlanetInfo = {
    planet: string;
    eclipticLongitude: number;
    eclipticLatitude: number;
    speedLon: number;
    rashi: number;
    degreesInSign: number;
    retrograde: boolean;
};

export function getPlanetPosition(jd: number, planet: string, ayanamsa: number): PlanetInfo {
    if (planet === 'SUN') {
        const longitude = sun(jd);
        const siderealLon = fix360(longitude - ayanamsa);
        const longitude_prev = sun(jd - 0.1);
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
            eclipticLatitude: 0,
            speedLon: speed
        };
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

        return {
            planet,
            eclipticLongitude: siderealLon,
            rashi: Math.floor(siderealLon / 30) + 1,
            degreesInSign: siderealLon % 30,
            retrograde: false,
            eclipticLatitude: 0,
            speedLon: speed
        };
    }

    if (planet === 'RAHU' || planet === 'KETU') {
        const t = (jd - 2451545.0) / 36525.0;
        const meanNode = fix360(125.04452 - 1934.136261 * t);

        // True node correction (approx)
        const L_moon = fix360(218.3164477 + 481267.88123421 * t);
        const L_sun = fix360(280.46646 + 36000.76983 * t);
        const d = fix360(L_moon - L_sun);
        const F = fix360(L_moon - meanNode);
        const dL = -1.274 * Math.sin((meanNode - 2 * d) * d2r) - 0.227 * Math.sin(2 * F * d2r);

        const trueNode = fix360(meanNode + dL);
        const siderealTrueNode = fix360(trueNode - ayanamsa);
        const longitude = planet === 'RAHU' ? siderealTrueNode : fix360(siderealTrueNode + 180);

        return {
            planet,
            eclipticLongitude: longitude,
            rashi: Math.floor(longitude / 30) + 1,
            degreesInSign: longitude % 30,
            retrograde: true,
            eclipticLatitude: 0,
            speedLon: -0.0529
        };
    }

    // Inner/outer planets: heliocentric → geocentric ecliptic coordinates
    const d = jd - J2000;

    const getHelioCoords = (p_d: number, planet_name: string) => {
        const elements = planet_elements[planet_name];
        const N = fix360(elements.N[0] + elements.N[1] * p_d);
        const i = elements.i[0] + elements.i[1] * p_d;
        const w = fix360(elements.w[0] + elements.w[1] * p_d);
        const a = elements.a[0];
        const e = elements.e[0] + elements.e[1] * p_d;
        const M = fix360(elements.M[0] + elements.M[1] * p_d);

        const E_rad = kepler(M * d2r, e);

        const x_orb = a * (Math.cos(E_rad) - e);
        const y_orb = a * Math.sqrt(1 - e * e) * Math.sin(E_rad);

        const x_ecl = (Math.cos(w * d2r) * Math.cos(N * d2r) - Math.sin(w * d2r) * Math.sin(N * d2r) * Math.cos(i * d2r)) * x_orb +
            (-Math.sin(w * d2r) * Math.cos(N * d2r) - Math.cos(w * d2r) * Math.sin(N * d2r) * Math.cos(i * d2r)) * y_orb;
        const y_ecl = (Math.cos(w * d2r) * Math.sin(N * d2r) + Math.sin(w * d2r) * Math.cos(N * d2r) * Math.cos(i * d2r)) * x_orb +
            (-Math.sin(w * d2r) * Math.sin(N * d2r) + Math.cos(w * d2r) * Math.cos(N * d2r) * Math.cos(i * d2r)) * y_orb;
        const z_ecl = (Math.sin(w * d2r) * Math.sin(i * d2r)) * x_orb +
            (Math.cos(w * d2r) * Math.sin(i * d2r)) * y_orb;

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
