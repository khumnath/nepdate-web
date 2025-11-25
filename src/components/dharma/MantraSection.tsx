import { useState } from 'react';
import { ChevronLeft, Music } from 'lucide-react';

const MANTRA_DATA = [
  {
    id: 'm1',
    title: 'गायत्री मन्त्र',
    content: `ॐ भूर्भुवः स्वः। तत्सवितुर्वरेण्यं। भर्गो देवस्य धीमहि। धियो यो नः प्रचोदयात्।`
  },
  {
    id: 'm2',
    title: 'महामृत्युञ्जय मन्त्र',
    content: `ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्।`
  },
  {
    id: 'm3',
    title: 'शिव मन्त्र',
    content: `ॐ नमः शिवाय।`
  },
  {
    id: 'm4',
    title: 'हनुमान मन्त्र',
    content: `ॐ हनुमते नमः।`
  }
];

export const MantraSection = ({ onBack }: { onBack: () => void }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="animate-in slide-in-from-right duration-300 h-full flex flex-col bg-slate-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-6 rounded-b-3xl shadow-sm mb-4 text-white relative">
        <button onClick={onBack} className="absolute top-4 left-4 p-2 bg-white/20 rounded-full hover:bg-white/30">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex flex-col items-center mt-2">
          <div className="p-3 bg-white/20 rounded-full mb-2 backdrop-blur-sm">
            <Music size={32} />
          </div>
          <h1 className="text-2xl font-bold">मन्त्र संग्रह</h1>
        </div>
      </div>

      {/* Content List */}
      <div className="flex-1 overflow-y-auto px-4 pb-24 space-y-4">
        {MANTRA_DATA.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
            >
              <h3 className="font-bold text-gray-800 dark:text-gray-100 text-lg">{item.title}</h3>
              <ChevronLeft
                className={`w-5 h-5 transition-transform ${expandedId === item.id ? '-rotate-90' : 'rotate-180'}`}
              />
            </div>

            {expandedId === item.id && (
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 animate-in fade-in">
                <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed font-serif">
                  {item.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
