import { useState } from 'react';
import { ChevronLeft, Flame } from 'lucide-react';

const PUJA_DATA = [
  {
    id: 'p1',
    title: 'गणेश पूजा',
    content: `गणेश पूजाको विधि:
1. गणेशको मूर्ति वा चित्र स्थापना गर्नुहोस्।
2. दीपक प्रज्वलित गर्नुहोस्।
3. फूल, फल र मिठाई अर्पित गर्नुहोस्।
4. 'ॐ गं गणपतये नमः' मन्त्र १०८ पटक जप गर्नुहोस्।`
  },
  {
    id: 'p2',
    title: 'सरस्वती पूजा',
    content: `सरस्वती पूजाको विधि:
1. देवी सरस्वतीको मूर्ति वा चित्र राख्नुहोस्।
2. दीपक र अगरबत्ती बाल्नुहोस्।
3. पुस्तक, कलम र नोटबुक अर्पित गर्नुहोस्।
4. 'ॐ ऐं सरस्वत्यै नमः' मन्त्र जप गर्नुहोस्।`
  },
  {
    id: 'p3',
    title: 'हनुमान पूजा',
    content: `हनुमान पूजाको विधि:
1. हनुमानको मूर्ति वा चित्र स्थापना गर्नुहोस्।
2. दीपक र फूल अर्पित गर्नुहोस्।
3. हनुमान चालीसा पाठ गर्नुहोस्।`
  },
  {
    id: 'p4',
    title: 'लक्ष्मी पूजा',
    content: `लक्ष्मी पूजाको विधि:
1. लक्ष्मीको मूर्ति स्थापना गर्नुहोस्।
2. दीपक र मिठाई अर्पित गर्नुहोस्।
3. 'ॐ महालक्ष्म्यै नमः' मन्त्र जप गर्नुहोस्।`
  }
];

export const PujaSection = ({ onBack }: { onBack: () => void }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="animate-in slide-in-from-right duration-300 h-full flex flex-col bg-slate-50 dark:bg-gray-900">
      {/* शीर्षक */}
      <div className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-b-3xl shadow-sm mb-4 text-white relative">
        <button onClick={onBack} className="absolute top-4 left-4 p-2 bg-white/20 rounded-full hover:bg-white/30">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex flex-col items-center mt-2">
          <div className="p-3 bg-white/20 rounded-full mb-2 backdrop-blur-sm">
            <Flame size={32} />
          </div>
          <h1 className="text-2xl font-bold">पूजा विधि</h1>
        </div>
      </div>

      {/* सामग्री सूची */}
      <div className="flex-1 overflow-y-auto px-4 pb-24 space-y-4">
        {PUJA_DATA.map((item) => (
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
