import React, { useState } from 'react';
import type { KundaliResponse } from '../../types/types';
import BirthChart from './BirthChart';
import { PlanetaryTable } from './PlanetaryTable';
import { BirthDetailsCard } from './BirthDetailsCard';
import { DashaTable } from './DashaTable';
import { NEPALI_BS_MONTHS, NEPALI_LABELS } from '../../constants/constants';
import { PrintIcon, ChevronDownIcon } from '../../data/icons';
import { toBikramSambat, toDevanagari } from '../../lib/core/bikram';

interface KundaliDisplayProps {
  data: KundaliResponse;
  onReturnToForm: () => void;
}

const ChartItem: React.FC<{ chart: any }> = ({ chart }) => {
  if (!chart.chartData) return null;
  const chartPlanets = 'planets' in chart.chartData ? chart.chartData.planets : [];
  const ascendantSign = 'ascendant' in chart.chartData ? chart.chartData.ascendant.sign : 1;
  const ascendantDegrees = 'ascendant' in chart.chartData ? chart.chartData.ascendant.degreesInSign : undefined;
  const ascendantNakshatra = 'ascendant' in chart.chartData ? chart.chartData.ascendant.nakshatra : undefined;
  const ascendantNakshatraPada = 'ascendant' in chart.chartData ? chart.chartData.ascendant.nakshatraPada : undefined;

  return (
    <div
      key={chart.title}
      className="chart-instance dark:bg-gray-800 break-inside-avoid-page page-break-inside-avoid print:mb-2"
    >
      <h3 className="text-lg font-semibold mb-1 text-center dark:text-blue-400">{chart.title}</h3>
      <div className="chart-card dark:bg-gray-800 rounded-lg p-2 transition-colors duration-300">
        <BirthChart
          planets={chartPlanets.map((p: any) => ({
            planet: p.planet,
            rashi: 'rashi' in p ? p.rashi : p.sign,
            degreesInSign: 'degreesInSign' in p ? p.degreesInSign : undefined,
            retrograde: p.retrograde,
            nakshatra: p.nakshatra,
            nakshatraPada: p.nakshatraPada
          }))}
          ascendantSign={ascendantSign}
          ascendantDegrees={ascendantDegrees}
          ascendantNakshatra={ascendantNakshatra}
          ascendantNakshatraPada={ascendantNakshatraPada}
          chartType={chart.type as any}
        />
      </div>
    </div>
  );
};

export const KundaliDisplay: React.FC<KundaliDisplayProps> = ({ data, onReturnToForm }) => {
  const [showMoreCharts, setShowMoreCharts] = useState(false);

  const navamsaChartData = data.divisionalCharts.find((c) => c.name.includes('D9'));
  const dashamsaChartData = data.divisionalCharts.find((c) => c.name.includes('D10'));
  const drekkanaChartData = data.divisionalCharts.find((c) => c.name.includes('D3'));
  const dwadamshaChartData = data.divisionalCharts.find((c) => c.name.includes('D12'));
  const chaturthamshaChartData = data.divisionalCharts.find((c) => c.name.includes('D4'));
  const shashtiamshaChartData = data.divisionalCharts.find((c) => c.name.includes('D60'));

  const defaultCharts = [
    { type: 'lagna', title: NEPALI_LABELS.rashiChart, chartData: data },
    { type: 'chandra', title: NEPALI_LABELS.chandraChart, chartData: data },
    { type: 'navamsha', title: NEPALI_LABELS.navamsaChart, chartData: navamsaChartData },
    { type: 'dashamsa', title: NEPALI_LABELS.dashamsaChart, chartData: dashamsaChartData },
  ];

  const moreCharts = [
    { type: 'drekkana', title: NEPALI_LABELS.drekkanaChart, chartData: drekkanaChartData },
    { type: 'dwadamsha', title: NEPALI_LABELS.dwadamshaChart, chartData: dwadamshaChartData },
    { type: 'chaturthamsha', title: NEPALI_LABELS.chaturthamshaChart, chartData: chaturthamshaChartData },
    { type: 'shashtiamsha', title: NEPALI_LABELS.shashtiamshaChart, chartData: shashtiamshaChartData },
  ].filter(c => c.chartData);

  const now = new Date();
  const bsDate = toBikramSambat(now);
  const formattedDate = `${toDevanagari(bsDate.year)} ${NEPALI_BS_MONTHS[bsDate.monthIndex]} ${toDevanagari(bsDate.day)}`;
  const timeFormatted = now.toLocaleTimeString('ne-NP', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className="kundali-display-container flex flex-col bg-slate-200 rounded-xl shadow-lg w-full lg:max-w-4xl xl:max-w-6xl lg:p-4 md:p-1 space-y-4 text-sm md:text-base dark:bg-gray-800 dark:text-gray-200 dark:border dark:border-gray-700 pb-32 print:pb-2 print:space-y-2">
      {/* Header */}
      <header className="kundali-card rounded-lg text-center dark:bg-gray-800 dark:text-blue-400 transition-colors duration-300">
        <h2 className="text-3xl self-center font-bold text-blue-400 dark:text-blue-400">
          {NEPALI_LABELS.kundaliOf(data.birthDetails.name)}
        </h2>
        <div className="hidden text-xs self-center print:block font-bold text-gray-400 dark:text-gray-400">
          {NEPALI_LABELS.printedDate}: {formattedDate} {timeFormatted}
        </div>
        <div className="mt-2 text-xs text-orange-600 dark:text-orange-400 text-center px-2"
                >
                    {NEPALI_LABELS.kundaliDisclaimer}
                </div>
      </header>

      {/* Birth details + planets */}
      <div className="grid grid-cols-1 gap-4 print:gap-2">
        <div className="flex flex-col gap-4 print:gap-2">
          <div className="kundali-card p-4 print:p-2 rounded-lg bg-slate-200 dark:bg-gray-800 shadow">
            <BirthDetailsCard data={data} />
          </div>
          <div className="kundali-card p-4 print:p-2 rounded-lg bg-slate-200 dark:bg-gray-800 shadow">
            <PlanetaryTable planets={data.planets} />
          </div>
        </div>
      </div>

      {/* Charts section */}
      <div className="print:break-inside-avoid-page">
        {/* Screen charts */}
        <div className="print:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {defaultCharts.map(chart => <ChartItem key={chart.type} chart={chart} />)}
          </div>

          {moreCharts.length > 0 && (
            <>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 transition-all duration-500 overflow-hidden ${showMoreCharts ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {showMoreCharts && moreCharts.map(chart => <ChartItem key={chart.type} chart={chart} />)}
              </div>
              <div className="text-center mt-4">
                <button
                  onClick={() => setShowMoreCharts(!showMoreCharts)}
                  className="flex items-center justify-center gap-2 mx-auto px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100/50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition"
                >
                  <span>{showMoreCharts ? NEPALI_LABELS.showLessCharts : NEPALI_LABELS.showMoreCharts}</span>
                  <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${showMoreCharts ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </>
          )}
        </div>

        {/* Print charts */}
        <div className="hidden print:block">
          <div className="flex flex-wrap -mx-2 mt-2 pt-4 border-t border-gray-300 dark:border-gray-700">
            {[...defaultCharts, ...moreCharts].map(chart => (
              <div
                key={`print-${chart.type}`}
                className="w-1/2 px-2 mb-4 "
              >
                <ChartItem chart={chart} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dashas  */}
      <div className="space-y-4 print:space-y-2 print:pt-2">
        <DashaTable dashaSequence={data.dashaSequence} title={NEPALI_LABELS.dashaPeriods} />
        {data.tribhagiDasha?.length > 0 && (
          <DashaTable dashaSequence={data.tribhagiDasha} title={NEPALI_LABELS.tribhagiDasha} />
        )}
        {data.yoginiDasha?.length > 0 && (
          <DashaTable dashaSequence={data.yoginiDasha} title={NEPALI_LABELS.yoginiDasha} />
        )}
        {data.ashtottariDasha?.length > 0 && (
          <DashaTable dashaSequence={data.ashtottariDasha} title={NEPALI_LABELS.ashtottariDasha} />
        )}
        {data.jaiminiDasha?.length > 0 && (
          <DashaTable dashaSequence={data.jaiminiDasha} title={NEPALI_LABELS.jaiminiDasha} />
        )}
      </div>

      {/* Print footer */}
      <div className="hidden print:block text-center text-xs text-gray-500 pt-2 mt-2 border-t border-gray-300">
        <p>© {new Date().getFullYear()} {NEPALI_LABELS.project}</p>
      </div>

      {/* Fixed return & print buttons */}
      <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-[999] print:hidden print:h-0 w-full px-4 text-center">
        <div className="flex gap-4 justify-center">
          <button
            className="bg-blue-600 dark:bg-blue-600 text-white px-6 py-2 rounded shadow-md hover:bg-blue-700 transition flex items-center gap-2"
            onClick={onReturnToForm}
          >
            ← {NEPALI_LABELS.returnToForm}
          </button>
          <button
            className="bg-gray-600 dark:bg-gray-500 text-white px-6 py-2 rounded shadow-md hover:bg-gray-700 transition flex items-center gap-2"
            onClick={() => window.print()}
          >
            <PrintIcon className="w-4 h-4" /> {NEPALI_LABELS.print}
          </button>
        </div>
      </div>
    </div>
  );
};
