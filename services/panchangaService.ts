import {
    // Absolute Surya siddanta values used by the solver
    absTrueLongitudeSun,
    absTrueLongitudeMoon,
    absElongation,
    getAharFor,
    aharToDate,
    findTransit,
} from '../src/lib/core/panchangaCore';
import {
    getSunriseSunset
} from '../src/lib/core/bikram'

export function getDayAharBounds(date: Date, lat: number, lon: number, tz: number): {
    sunriseAhar: number;
    sunriseDate: Date;
    midnightEndAhar: number;
    sunriseHHMMSS: string;
} {
    const sun = getSunriseSunset(date, lat, lon, tz);
    if (sun.sunrise === 'N/A') {
        throw new Error('Could not calculate sunrise/sunset.');
    }

    const tzString = (() => {
        const sign = tz >= 0 ? '+' : '-';
        const hours = String(Math.floor(Math.abs(tz))).padStart(2, '0');
        const minutes = String(Math.abs(tz) * 60 % 60).padStart(2, '0');
        return `${sign}${hours}:${minutes}`;
    })();

    const localDateStr = new Date(date.getTime() + tz * 3600_000).toISOString().split('T')[0];
    const sunriseDate = new Date(`${localDateStr}T${sun.sunrise}${tzString}`);
    if (isNaN(sunriseDate.getTime())) {
        throw new Error('Failed to construct local sunrise time.');
    }

    // Ahar boundaries
    const [hr, min, sec] = sun.sunrise.split(':').map(Number);
    const sunriseFraction = (hr * 3600 + min * 60 + sec) / 86400.0;
    const sunriseAhar = getAharFor(date, lon, sunriseFraction);
    const tomorrow = new Date(date.getTime() + 86400000);
    const midnightEndAhar = getAharFor(tomorrow, lon, 0.0);
    return { sunriseAhar, sunriseDate, midnightEndAhar, sunriseHHMMSS: sun.sunrise };
}

export function findAspectTime(
    sunriseAhar: number, sunriseDate: Date, isKarana: boolean): { start: string, end: string } {
    const step = isKarana ? 6 : 12;      // degrees per aspect
    const total = isKarana ? 60 : 30;    // total aspects
    const valAtStart = absElongation(sunriseAhar);
    const currentIndex = Math.floor(valAtStart / step);
    const startTarget = currentIndex * step;
    const endTarget = ((currentIndex + 1) % total) * step;
    const startAhar = findTransit(sunriseAhar, absElongation, startTarget, 2);
    const endAhar = findTransit(startAhar ?? sunriseAhar, absElongation, endTarget, 2);
    const startISO = startAhar ? aharToDate(startAhar, sunriseAhar, sunriseDate).toISOString() : null;
    const endISO = endAhar ? aharToDate(endAhar, sunriseAhar, sunriseDate).toISOString() : null;
    return { start: startISO ?? '', end: endISO ?? '' };
}

export function findNakshatraTime(
    sunriseAhar: number, sunriseDate: Date,
): { start: string, end: string } {
    const step = 360 / 27;
    const valAtStart = absTrueLongitudeMoon(sunriseAhar);
    const currentIndex = Math.floor(valAtStart / step);
    const startTarget = currentIndex * step;
    const endTarget = (currentIndex + 1) * step;
    const startAhar = findTransit(sunriseAhar, absTrueLongitudeMoon, startTarget, 2);
    const endAhar = findTransit(startAhar ?? sunriseAhar, absTrueLongitudeMoon, endTarget, 2);
    const startISO = startAhar ? aharToDate(startAhar, sunriseAhar, sunriseDate).toISOString() : null;
    const endISO = endAhar ? aharToDate(endAhar, sunriseAhar, sunriseDate).toISOString() : null;

    return { start: startISO ?? '', end: endISO ?? '' };
}

export function findNakshatraPadaTime(
    sunriseAhar: number, sunriseDate: Date,
): { start: string, end: string } {
    const nStep = 360 / 27;
    const pStep = nStep / 4;
    const siderealMoonAbs = absTrueLongitudeMoon(sunriseAhar);
    const currentNaksh = Math.floor(siderealMoonAbs / nStep);
    const progressInNaksh = siderealMoonAbs % nStep;
    const currentPada = Math.floor(progressInNaksh / pStep);
    const absolutePadaIndex = currentNaksh * 4 + currentPada; // 0..107
    const startTarget = absolutePadaIndex * pStep;
    const endTarget = (absolutePadaIndex + 1) * pStep;
    const startAhar = findTransit(sunriseAhar, absTrueLongitudeMoon, startTarget, 2);
    const endAhar = findTransit(startAhar ?? sunriseAhar, absTrueLongitudeMoon, endTarget, 2);
    const startISO = startAhar ? aharToDate(startAhar, sunriseAhar, sunriseDate).toISOString() : null;
    const endISO = endAhar ? aharToDate(endAhar, sunriseAhar, sunriseDate).toISOString() : null;
    return { start: startISO ?? '', end: endISO ?? '' };
}

export function findYogaTime(
    sunriseAhar: number, sunriseDate: Date,
): { start: string, end: string } {
    const step = 360 / 27;
    const getTotal = (ah: number) => absTrueLongitudeSun(ah) + absTrueLongitudeMoon(ah);
    const totalAtStart = getTotal(sunriseAhar);
    const currentIndex = Math.floor((totalAtStart % 360) / step);
    const startTarget = currentIndex * step;
    const endTarget = (currentIndex + 1) * step;
    const startAhar = findTransit(sunriseAhar, getTotal, startTarget, 2);
    const endAhar = findTransit(startAhar ?? sunriseAhar, getTotal, endTarget, 2);
    const startISO = startAhar ? aharToDate(startAhar, sunriseAhar, sunriseDate).toISOString() : null;
    const endISO = endAhar ? aharToDate(endAhar, sunriseAhar, sunriseDate).toISOString() : null;
    return { start: startISO ?? '', end: endISO ?? '' };
}
