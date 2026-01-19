import React from 'react';
import type { ComparisonResult } from '../../types/types';
import { NEPALI_BS_MONTHS, NEPALI_LABELS, NEPALI_RASHI } from '../../constants/constants';
import { toBikramSambat, toDevanagari } from '../../lib/utils/lib';
import { PrintIcon } from '../../data/icons';
import { BirthDetailsCard } from './BirthDetailsCard';

interface ComparisonDisplayProps {
  result: ComparisonResult;
  onReturnToForm: () => void;
}

const KootaRow: React.FC<{
  label: string;
  groomValue: string;
  brideValue: string;
  typeLabel?: string;
  maxPoints: number;
  obtainedPoints: number;
}> = ({ label, groomValue, brideValue, typeLabel, maxPoints, obtainedPoints }) => (
  <tr className="border-b border-amber-100 dark:border-stone-700 last:border-b-0">
    <td className="py-2 font-medium text-stone-800 dark:text-stone-100">{label}</td>
    <td className="py-2 text-stone-700 dark:text-stone-200">{groomValue}</td>
    <td className="py-2 text-stone-700 dark:text-stone-200">{brideValue}</td>
    <td className="py-2 text-center text-blue-600 dark:text-blue-400 font-medium">{typeLabel ?? ''}</td>
    <td className="py-2 text-center text-stone-700 dark:text-stone-200">{toDevanagari(maxPoints)}</td>
    <td className="py-2 text-center font-semibold text-stone-800 dark:text-stone-100">{toDevanagari(obtainedPoints)}</td>
  </tr>
);

export const ComparisonDisplay: React.FC<ComparisonDisplayProps> = ({ result, onReturnToForm }) => {
  const { groom, bride, score, conclusion, labels } = result;
  const now = new Date();
  const bsDate = toBikramSambat(now);
  const formattedDate = `${toDevanagari(bsDate.year)} ${NEPALI_BS_MONTHS[bsDate.monthIndex]} ${toDevanagari(bsDate.day)}`;
  const timeFormatted = now.toLocaleTimeString('ne-NP', { hour: 'numeric', minute: '2-digit', hour12: true });

  return (
    <div className="kundali-display-container flex flex-col bg-slate-200 rounded-xl shadow-lg w-full lg:max-w-4xl xl:max-w-6xl lg:p-4 md:p-1 space-y-4 text-sm md:text-base dark:bg-gray-800 dark:text-gray-200 dark:border dark:border-gray-700 pb-32 print:pb-0 print:m-0 print:rounded-none print:shadow-none print:bg-transparent">
      <header className="kundali-card rounded-lg text-center p-4 dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-blue-400 dark:text-blue-400">
          {groom.birthDetails.name} र {bride.birthDetails.name} को गुण मिलान
        </h2>
        <div className="hidden text-xs self-center print:block font-bold text-gray-400 dark:text-gray-400">
          {NEPALI_LABELS.printedDate}: {formattedDate} {timeFormatted}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BirthDetailsCard data={groom} title={NEPALI_LABELS.groomDetails} titleClassName="text-blue-700 dark:text-blue-300" />
        <BirthDetailsCard data={bride} title={NEPALI_LABELS.brideDetails} titleClassName="text-pink-700 dark:text-pink-400" />
      </div>

      <div className="kundali-card p-3 sm:p-5 rounded-lg overflow-x-auto bg-slate-200 dark:bg-gray-800">
        <h3 className="text-xl font-bold text-blue-400 dark:text-blue-400 mb-4">{NEPALI_LABELS.gunaMilanTableTitle}</h3>
        <table className="w-full text-left text-sm sm:text-base">
          <thead className="border-b-2 border-amber-200 dark:border-amber-700 text-stone-600 dark:text-stone-300">
            <tr>
              <th className="py-2 px-2">{NEPALI_LABELS.koota}</th>
              <th className="py-2 px-2">{NEPALI_LABELS.groom}</th>
              <th className="py-2 px-2">{NEPALI_LABELS.bride}</th>
              <th className="py-2 px-2 text-center">{NEPALI_LABELS.kootaType}</th>
              <th className="py-2 px-2 text-center">{NEPALI_LABELS.maxPoints}</th>
              <th className="py-2 px-2 text-center">{NEPALI_LABELS.obtainedPoints}</th>
            </tr>
          </thead>
          <tbody>
            <KootaRow label={NEPALI_LABELS.varna} groomValue={groom.ashtaKoota.varna} brideValue={bride.ashtaKoota.varna} typeLabel={labels.varnaLabel} maxPoints={1} obtainedPoints={score.varna} />
            <KootaRow label={NEPALI_LABELS.vasya} groomValue={groom.ashtaKoota.vasya} brideValue={bride.ashtaKoota.vasya} typeLabel={labels.vasyaLabel} maxPoints={2} obtainedPoints={score.vasya} />
            <KootaRow label={NEPALI_LABELS.tara} groomValue={groom.nakshatra.nameNepali} brideValue={bride.nakshatra.nameNepali} typeLabel={labels.taraLabel} maxPoints={3} obtainedPoints={score.tara} />
            <KootaRow label={NEPALI_LABELS.yoni} groomValue={groom.ashtaKoota.yoni} brideValue={bride.ashtaKoota.yoni} typeLabel={labels.yoniLabel} maxPoints={4} obtainedPoints={score.yoni} />
            <KootaRow label={NEPALI_LABELS.grahaMaitri} groomValue={groom.ashtaKoota.rashiLord} brideValue={bride.ashtaKoota.rashiLord} typeLabel={labels.grahaMaitriLabel} maxPoints={5} obtainedPoints={score.grahaMaitri} />
            <KootaRow label={NEPALI_LABELS.gana} groomValue={groom.ashtaKoota.gana} brideValue={bride.ashtaKoota.gana} typeLabel={labels.ganaLabel} maxPoints={6} obtainedPoints={score.gana} />
            <KootaRow label={NEPALI_LABELS.bhakoot} groomValue={NEPALI_RASHI[groom.planets.find(p => p.planet === 'MOON')!.rashi - 1]} brideValue={NEPALI_RASHI[bride.planets.find(p => p.planet === 'MOON')!.rashi - 1]} typeLabel={labels.bhakootLabel} maxPoints={7} obtainedPoints={score.bhakoot} />
            <KootaRow label={NEPALI_LABELS.nadi} groomValue={groom.ashtaKoota.nadi} brideValue={bride.ashtaKoota.nadi} typeLabel={labels.nadiLabel} maxPoints={8} obtainedPoints={score.nadi} />
          </tbody>
          <tfoot className="border-t-2 border-amber-300 dark:border-amber-600 font-bold">
            <tr>
              <td colSpan={4} className="py-2 px-2 text-right text-stone-800 dark:text-stone-100">{NEPALI_LABELS.totalPoints}</td>
              <td className="px-2 text-center text-stone-800 dark:text-stone-100">{toDevanagari(36)}</td>
              <td className="px-2 text-center text-lg text-blue-600 dark:text-blue-400">{toDevanagari(score.total)}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="kundali-card rounded-lg bg-slate-200 dark:bg-gray-800">
        <h3 className="text-lg font-bold text-blue-400 dark:text-blue-400">{NEPALI_LABELS.conclusion}</h3>
        <p className="text-stone-800 dark:text-stone-100">{conclusion}</p>
      </div>

      <div className="hidden print:block text-center text-xs text-gray-500 mt-4 border-t border-gray-300">
        <p>© {new Date().getFullYear()} {NEPALI_LABELS.project}</p>
      </div>

      <div className="mt-8 mb-8 w-full px-4 text-center screen-only-footer print:hidden">
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 dark:bg-blue-600 text-white px-6 py-2 rounded shadow-md hover:bg-blue-700 dark:hover:bg-blue-800 transition flex items-center gap-2" onClick={onReturnToForm}>
            ← {NEPALI_LABELS.returnToForm}
          </button>
          <button className="bg-gray-600 dark:bg-gray-500 text-white px-6 py-2 rounded shadow-md hover:bg-gray-700 dark:hover:bg-gray-600 transition flex items-center gap-2" onClick={() => window.print()}>
            <PrintIcon className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 md:hidden">
          {NEPALI_LABELS.mobilePrintHint}
        </p>
      </div>
    </div>
  );
};
