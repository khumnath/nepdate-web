import React from 'react';
import type { PlanetInfo } from '../../types/types';
import { NEPALI_LABELS, NEPALI_PLANETS, NEPALI_RASHI } from '../../constants/constants';
import { formatDegrees, toDevanagari } from '../../lib/utils/lib';

interface PlanetaryTableProps {
  planets: PlanetInfo[];
}

export const PlanetaryTable: React.FC<PlanetaryTableProps> = ({ planets }) => {
  return (
    <div className="kundali-card p-4 sm:p-6 rounded-lg overflow-x-auto dark:bg-gray-800 dark:text-stone-100 transition-colors duration-300 print:bg-white print:shadow-none print:border-none">
      <h3 className="text-xl font-bold text-blue-400 dark:text-blue-400 mb-4">
        {NEPALI_LABELS.planetaryPositions}
      </h3>
      <table className="w-full text-left text-sm sm:text-base">
        <thead className="border-b-2 border-amber-200 dark:border-amber-700 text-stone-600 dark:text-stone-300">
          <tr>
            <th className="py-2 px-2">{NEPALI_LABELS.planet}</th>
            <th className="py-2 px-2">{NEPALI_LABELS.rashi}</th>
            <th className="py-2 px-2">{NEPALI_LABELS.degrees}</th>
            <th className="py-2 px-2">{NEPALI_LABELS.nakshatra}</th>
            <th className="py-2 px-2">{NEPALI_LABELS.pada}</th>
          </tr>
        </thead>
        <tbody>
          {planets.map((planet) => (
            <tr
              key={planet.planet}
              className="border-b border-amber-100 dark:border-stone-700 hover:bg-amber-50/70 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <td className="py-2 px-2 font-medium text-stone-800 dark:text-stone-100">
                {NEPALI_PLANETS[planet.planet]}
                {planet.retrograde && (
                  <span className="text-blue-600 dark:text-blue-400 ml-1">
                    ({NEPALI_LABELS.retrograde})
                  </span>
                )}
              </td>
              <td className="py-2 px-2">{NEPALI_RASHI[planet.rashi - 1]}</td>
              <td className="py-2 px-2 font-mono">{formatDegrees(planet.degreesInSign)}</td>
              <td className="py-2 px-2">{planet.nakshatra}</td>
              <td className="py-2 px-2">{toDevanagari(planet.nakshatraPada)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
