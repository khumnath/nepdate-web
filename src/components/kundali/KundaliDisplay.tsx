import React from 'react';
import type { KundaliResponse } from '../../../types/types';
import BirthChart from './BirthChart';
import { PlanetaryTable } from './PlanetaryTable';
import { BirthDetailsCard } from './BirthDetailsCard';
import { DashaTable } from './DashaTable';
import { NEPALI_LABELS } from '../../constants/constants';

interface KundaliDisplayProps {
  data: KundaliResponse;
  onReturnToForm: () => void;
}

export const KundaliDisplay: React.FC<KundaliDisplayProps> = ({ data, onReturnToForm }) => {
  const navamsaChartData = data.divisionalCharts.find((c) => c.name === 'Navamsa (D9)');
  const dashamsaChartData = data.divisionalCharts.find((c) => c.name === 'Dashamsa (D10)');
  const horaChartData = data.divisionalCharts.find((c) => c.name === 'Hora (D2)');
  const saptamsaChartData = data.divisionalCharts.find((c) => c.name === 'Saptamsa (D7)');

  return (
    <div className="dashboard-container  bg-slate-50 rounded-xl shadow-lg w-full  lg:max-w-4xl xl:max-w-6xl lg:p-4 md:p-1 space-y-4 text-sm md:text-base dark:bg-gray-800 dark:text-gray-200 dark:border dark:border-gray-700">
      {/* Header */}
      <header className="kundali-card rounded-lg text-center dark:bg-gray-800 dark:text-blue-400 transition-colors duration-300">
        <h2 className="text-3xl self-center font-bold text-blue-400 dark:text-blue-400">
          {NEPALI_LABELS.kundaliOf(data.birthDetails.name)}
        </h2>
      </header>

      {/* Planet Table + Birth Details */}
      <div className="grid grid-cols-1 gap-6">
        <div className="flex flex-col">
          <div className="lg:col-span-2 flex flex-col">
            <div className="flex-1 kundali-card p-4 rounded-lg bg-slate-200 dark:bg-gray-800 dark:text-stone-100 shadow transition-colors duration-300">
              <BirthDetailsCard data={data} layout="two-column" />
            </div>
          </div>
          <div className="flex-1 kundali-card lg:p-4 md:p-1 rounded-lg bg-slate-200 dark:bg-gray-800 dark:text-stone-100 shadow transition-colors duration-300">
            <PlanetaryTable planets={data.planets} />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
        {/* Rashi (D1) chart */}
        <div className="chart-instance dark:bg-gray-800">
          <h3 className="text-lg font-semibold mb-2 text-center dark:text-blue-400">
            {NEPALI_LABELS.rashiChart}
          </h3>
          <div className="chart-card dark:bg-gray-800 rounded-lg p-2 transition-colors duration-300">
            <BirthChart
              planets={data.planets}
              ascendantSign={data.ascendant.sign}
              ascendantDegrees={data.ascendant.degreesInSign}
              chartType="lagna"
            />
          </div>
        </div>

        {/* Navamsa (D9) chart */}
        {navamsaChartData && (
          <div className="chart-instance">
            <h3 className="text-lg font-semibold mb-2 text-center dark:text-blue-400">
              {NEPALI_LABELS.navamsaChart}
            </h3>
            <div className="chart-card dark:bg-gray-800 rounded-lg p-2 transition-colors duration-300">
              <BirthChart
                planets={navamsaChartData.planets.map((p) => ({
                  planet: p.planet,
                  rashi: p.sign,
                  retrograde: p.retrograde,
                  nakshatra: p.nakshatra,
                  nakshatraPada: p.nakshatraPada,
                }))}
                ascendantSign={navamsaChartData.ascendant.sign}
                chartType="navamsha"
              />
            </div>
          </div>
        )}

        {/* Dashamsa (D10) chart */}
        {dashamsaChartData && (
          <div className="chart-instance">
            <h3 className="text-lg font-semibold mb-2 text-center dark:text-blue-400">
              {NEPALI_LABELS.dashamsaChart}
            </h3>
            <div className="chart-card dark:bg-gray-800 rounded-lg p-2 transition-colors duration-300">
              <BirthChart
                planets={dashamsaChartData.planets.map((p) => ({
                  planet: p.planet,
                  rashi: p.sign,
                  retrograde: p.retrograde,
                  nakshatra: p.nakshatra,
                  nakshatraPada: p.nakshatraPada,
                  degreesInSign: p.degreesInSign,
                }))}
                ascendantSign={dashamsaChartData.ascendant.sign}
                ascendantDegrees={dashamsaChartData.ascendant.degreesInSign}
                chartType="dashamsa"
              />
            </div>
          </div>
        )}

        {/* Hora (D2) chart */}
        {horaChartData && (
          <div className="chart-instance">
            <h3 className="text-lg font-semibold mb-2 text-center dark:text-blue-400">
              {NEPALI_LABELS.horaChart}
            </h3>
            <div className="chart-card dark:bg-gray-800 rounded-lg p-2 transition-colors duration-300">
              <BirthChart
                planets={horaChartData.planets.map((p) => ({
                  planet: p.planet,
                  rashi: p.sign,
                  retrograde: p.retrograde,
                  nakshatra: p.nakshatra,
                  nakshatraPada: p.nakshatraPada,
                  degreesInSign: p.degreesInSign,
                }))}
                ascendantSign={horaChartData.ascendant.sign}
                ascendantDegrees={horaChartData.ascendant.degreesInSign}
                chartType="hora"
              />
            </div>
          </div>
        )}

        {/* Saptamsa (D7) chart */}
        {saptamsaChartData && (
          <div className="chart-instance">
            <h3 className="text-lg font-semibold mb-2 text-center dark:text-blue-400">
              {NEPALI_LABELS.saptamsaChart}
            </h3>
            <div className="chart-card dark:bg-gray-800 rounded-lg p-2 transition-colors duration-300">
              <BirthChart
                planets={saptamsaChartData.planets.map((p) => ({
                  planet: p.planet,
                  rashi: p.sign,
                  retrograde: p.retrograde,
                  nakshatra: p.nakshatra,
                  nakshatraPada: p.nakshatraPada,
                  degreesInSign: p.degreesInSign,
                }))}
                ascendantSign={saptamsaChartData.ascendant.sign}
                ascendantDegrees={saptamsaChartData.ascendant.degreesInSign}
                chartType="saptamsa"
              />
            </div>
          </div>
        )}

        {/* Chandra chart */}
        <div className="chart-instance">
          <h3 className="text-lg font-semibold mb-2 text-center dark:text-blue-400">
            {NEPALI_LABELS.chandraChart}
          </h3>
          <div className="chart-card dark:bg-gray-800 rounded-lg p-2 transition-colors duration-300">
            <BirthChart
              planets={data.planets}
              ascendantSign={data.ascendant.sign}
              ascendantDegrees={data.ascendant.degreesInSign}
              chartType="chandra"
            />
          </div>
        </div>
      </div>

      {/* Dasha table */}
      <DashaTable dashaSequence={data.dashaSequence} />
      <div className='h-32 '></div>

      {/* Return to form button */}
      <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-[999]">
        <button
          className="bg-blue-600 dark:bg-blue-600 text-white px-6 py-2 rounded shadow-md hover:bg-blue-700 dark:hover:bg-blue-800 transition"
          onClick={onReturnToForm}
        >
          ← {NEPALI_LABELS.returnToForm}
        </button>
      </div>
    </div>
  );
};
