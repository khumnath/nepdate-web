import { useState } from 'react';
import { Calendar, ChevronLeft } from 'lucide-react';

const CHADPARBA_DATA = [
  {
    id: 'p1',
    title: 'तिहार',
    content: `तिहार नेपालीहरुको दोस्रो प्रमुख चाड हो। यसमा लक्ष्मी पूजा, कुकुर तिहार, गाई तिहार र भाईटीका समावेश हुन्छ।`
  },
  {
    id: 'p2',
    title: 'छठ पर्व',
    content: `छठ पर्व सूर्य देवता र छठ माताको आराधना गर्ने विशेष पर्व हो। यो मुख्यतया मधेश र तराई क्षेत्रमा मनाइन्छ।`
  },
  {
    id: 'p3',
    title: 'दशैँ',
    content: `दशैँ नेपालकै प्रमुख चाड हो। यसमा देवी दुर्गाको पूजा, रुढीवादी परम्परा अनुसार टीका र जमरा लगाइन्छ।`
  },
  {
    id: 'p4',
    title: 'गुरुङ ल्होसार',
    content: `गुरुङ समुदायको नयाँ वर्ष पर्व। यस दिन विशेष खानपान, सांस्कृतिक नाचगान र पूजा सम्पन्न हुन्छ।`
  }
];

export const ChadparbaSection = ({ onBack }: { onBack: () => void }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="animate-in slide-in-from-right duration-300 h-full flex flex-col bg-slate-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-b-3xl shadow-sm mb-4 text-white relative">
        <button onClick={onBack} className="absolute top-4 left-4 p-2 bg-white/20 rounded-full hover:bg-white/30">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex flex-col items-center mt-2">
          <div className="p-3 bg-white/20 rounded-full mb-2 backdrop-blur-sm">
            <Calendar size={32} />
          </div>
          <h1 className="text-2xl font-bold">चाडपर्व</h1>
        </div>
      </div>

      {/* Content List */}
      <div className="flex-1 overflow-y-auto px-4 pb-24 space-y-4">
        {CHADPARBA_DATA.map((item) => (
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
                className={`w-5 h-5 transition-transform ${
                  expandedId === item.id ? '-rotate-90' : 'rotate-180'
                }`}
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
