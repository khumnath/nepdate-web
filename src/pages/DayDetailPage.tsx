import React, { useEffect } from 'react';
import { DayDetailsContent } from '../components/calendar/DayDetailsModal';
import { fromBikramSambat } from '../lib/utils/lib';
import { PageHeader } from '../components/layout/PageHeader';

interface DayDetailPageProps {
  onBack: () => void;
}

// LINK FORMATS:
// $Root url/#bs?2082-08-19  (BS Date: Year-Month-Day)
// $Root url/#ad?2025-12-04  (AD Date: Year-Month-Day)

const DayDetailPage: React.FC<DayDetailPageProps> = ({ onBack }) => {
  const [date, setDate] = React.useState<Date | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    try {
      let type: string | undefined;
      let dateStr: string | undefined;

      const hash = window.location.hash;
      const pathname = window.location.pathname;
      const search = window.location.search;

      if (hash && hash.includes('?')) {
        // Hash format: #bs?2082-08-19
        [type, dateStr] = hash.substring(1).split('?');
      } else if (pathname.includes('/bs') || pathname.includes('/ad')) {
        // Path format: /bs?2082-08-19 OR /bs.html?2082-08-19
        if (pathname.includes('/bs')) type = 'bs';
        else if (pathname.includes('/ad')) type = 'ad';

        if (search && search.startsWith('?')) {
          dateStr = search.substring(1);
        }
      }

      if (!type || !dateStr) {
        setError('Invalid Link format. Use #bs?DATE or /bs?DATE');
        return;
      }

      const [y, m, d] = dateStr.split('-').map(Number);
      if (!y || !m || !d) {
        setError('Invalid date format. Use YYYY-MM-DD');
        return;
      }

      if (type === 'bs') {
        const adDate = fromBikramSambat(y, m - 1, d);
        setDate(adDate);
      } else if (type === 'ad') {
        const adDate = new Date(Date.UTC(y, m - 1, d));
        setDate(adDate);
      } else {
        setError('Unknown date type. Use #bs? or #ad?');
      }

    } catch (err) {
      console.error(err);
      setError('Date parsing failed.');
    }
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 dark:bg-gray-900 text-red-500 p-4">
        <h2 className="text-xl font-bold mb-2">Link Error</h2>
        <p>{error}</p>
        <button onClick={onBack} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
          Go Home
        </button>
      </div>
    );
  }

  if (!date) {
    return <div className="flex items-center justify-center min-h-screen dark:bg-gray-900"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div></div>;
  }

  // Reuse the Day DetailsModal but render it "always open" and handle close by going back
  const path = window.location.pathname;
  const isAd = path.includes('/ad');
  const activeSystem = isAd ? 'ad' : 'bs';

  // ...

  return (
    <div className="h-full bg-slate-100 dark:bg-gray-900 flex flex-col items-center overflow-hidden">
      <div className="w-full flex-none">
        <PageHeader title="दिन विशेष" onBack={onBack} className="rounded-none border-b" />
      </div>
      <div className="flex-1 w-full overflow-y-auto p-4">
        <div className="max-w-2xl mx-auto">
          <DayDetailsContent date={date} onClose={onBack} variant="page" activeSystem={activeSystem} />
        </div>
      </div>
    </div>
  );
};

export default DayDetailPage;
