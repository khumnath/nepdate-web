import React, { useMemo, useEffect } from 'react';
import { HeaderLogo } from './HeaderLogo';
import { Star, Share2, Loader2 } from 'lucide-react';
import { generateDailyRashifal } from '../../lib/utils/rashifalLogic';
import html2canvas from 'html2canvas';
import { RashifalShareCard } from './RashifalShareCard';
import { RASHI_IMAGES } from '../../assets/rashiImages';
// Import for preloading - ensures these are in browser cache for offline sharing
import wheelImage from '../../assets/rashi/wheel.webp';
import AppLogo from '../../assets/icons/nepdate.webp';

interface RashifalWidgetProps {
  date: string;
  dateKey: string;
  tithi?: string;
  nakshatra?: string;
  moonRashi?: string;
  nextMoonRashi?: string;
  transitionTime?: string;
  nextNakshatra?: string;
  nakshatraTransitionTime?: string;
  sunriseTime?: string;
  selectedRashi?: string;
  className?: string;
  onViewAll?: () => void;
  moonInfoString?: string;
  nakshatraInfoString?: string;
}

const RASHI_KEY_MAP: Record<string, number> = {
  'mesh': 0, 'brish': 1, 'mithun': 2, 'karkat': 3,
  'simha': 4, 'kanya': 5, 'tula': 6, 'brishchik': 7,
  'dhanu': 8, 'makar': 9, 'kumbha': 10, 'meen': 11
};

const RashiCard: React.FC<{ data: ReturnType<typeof generateDailyRashifal>[0], index: number, isSelected?: boolean, onShare: (data: any) => void }> = ({ data, index, isSelected, onShare }) => {
  const [isReasonExpanded, setIsReasonExpanded] = React.useState(false);
  const [isNakshatraExpanded, setIsNakshatraExpanded] = React.useState(false);

  return (
    <div
      id={`rashi-card-${index}`}
      className={`bg-white dark:bg-gray-700/50 rounded-xl p-4 shadow-sm border flex flex-col transition-all duration-500 relative group ${isSelected ? 'border-blue-500 ring-2 ring-blue-200 dark:ring-blue-900 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-100 dark:border-gray-600'}`}
    >
      {/* Share Button: Show if native share is available OR if on Desktop (to allow download fallback) */}
      {(
        (typeof navigator !== 'undefined' && !!navigator.share) ||
        (window.Android?.shareImage && window.Android.isAndroidApp?.()) ||
        (typeof navigator !== 'undefined' && !/Mobi|Android/i.test(navigator.userAgent))
      ) && (
        <button
          onClick={(e) => { e.stopPropagation(); onShare(data); }}
          className="absolute top-2 right-2 p-2 rounded-full bg-white dark:bg-gray-800 text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 shadow-sm border border-gray-100 dark:border-gray-600 transition-all z-20"
          title="Share as Image"
        >
          <Share2 size={14} />
        </button>
      )}

      <div className="flex gap-4 items-start">
        {/* Left Side: Icon & Name */}
        <div className="flex flex-col items-center justify-center w-24 flex-shrink-0 border-r border-gray-100 dark:border-gray-600 pr-3">
          <img
            src={RASHI_IMAGES[data.img] || data.img}
            alt={data.name}
            className="w-12 h-12 object-contain mb-2 drop-shadow-sm"
          />

          <h3 className="text-lg font-bold text-red-600 dark:text-red-400 leading-none mb-1">
            {data.name}
          </h3>

          <p className="text-[10px] text-gray-500 dark:text-gray-400 text-center leading-tight mt-1 break-words">
            {data.syllables}
          </p>

          <div className="mt-3 flex flex-col items-center">
            <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-tighter mb-0.5">समग्र फल</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => {
                const isFull = i < Math.floor(data.rating);
                // Simple color logic based on rating
                let starColor = "text-gray-200 dark:text-gray-600 fill-gray-200 dark:fill-gray-600";
                if (isFull) {
                  if (data.rating >= 4.5) starColor = "text-green-500 fill-green-500";
                  else if (data.rating >= 3.5) starColor = "text-green-500 fill-green-500";
                  else if (data.rating >= 2.5) starColor = "text-amber-500 fill-amber-500";
                  else starColor = "text-red-500 fill-red-500";
                }

                return (
                  <Star
                    key={i}
                    size={10}
                    className={starColor}
                  />
                );
              })}
            </div>
            {(() => {
              let label = "प्रतिकूल";
              let color = "text-red-500";
              if (data.rating >= 4.5) { label = "उत्तम"; color = "text-green-600 dark:text-green-400"; }
              else if (data.rating >= 3.5) { label = "राम्रो"; color = "text-green-600 dark:text-green-400"; }
              else if (data.rating >= 2.5) { label = "सामान्य"; color = "text-amber-600 dark:text-amber-400"; }

              return (
                <span className={`text-[9px] font-bold mt-1 ${color}`}>
                  {label}
                </span>
              );
            })()}
          </div>
        </div>

        <div className="flex-grow pt-1 pr-10 overflow-hidden">
          <p
            className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-medium"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
            dangerouslySetInnerHTML={{ __html: data.prediction }}
          />

          {data.nakshatraBishesh && (
            <div className="mt-2">
              <button
                onClick={() => setIsNakshatraExpanded(!isNakshatraExpanded)}
                className="flex items-center gap-1.5 text-[10px] font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 transition-colors uppercase tracking-wider"
              >
                {isNakshatraExpanded ? "लुकाउनुहोस्" : "नक्षत्र विशेष"}
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${isNakshatraExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isNakshatraExpanded && (
                <div className="mt-2 p-3 bg-purple-50/50 dark:bg-purple-900/10 rounded-lg border border-purple-100/50 dark:border-purple-900/20 animate-in fade-in slide-in-from-top-2 duration-300 overflow-hidden">
                  <div
                    className="text-[11px] text-purple-900 dark:text-purple-300 leading-relaxed"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: data.nakshatraBishesh }}
                  />
                </div>
              )}
            </div>
          )}

          {data.technicalReason && (
            <div className="mt-4">
              <button
                onClick={() => setIsReasonExpanded(!isReasonExpanded)}
                className="flex items-center gap-1.5 text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors uppercase tracking-wider"
              >
                {isReasonExpanded ? "लुकाउनुहोस्" : "ज्योतिषीय कारण"}
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${isReasonExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isReasonExpanded && (
                <div className="mt-2 p-3 bg-blue-50/50 dark:bg-blue-900/10 rounded-lg border border-blue-100/50 dark:border-blue-900/20 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p
                    className="text-[11px] text-blue-800 dark:text-blue-300 leading-relaxed italic"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: data.technicalReason }}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const RashifalWidget: React.FC<RashifalWidgetProps> = ({ date, dateKey, tithi, nakshatra, moonRashi, nextMoonRashi, transitionTime, nextNakshatra, nakshatraTransitionTime, sunriseTime, selectedRashi, className, onViewAll,
  moonInfoString,
  nakshatraInfoString
}) => {

  // Generate data based on props
  const rashiData = useMemo(() => {
    return generateDailyRashifal(dateKey, tithi, nakshatra, moonRashi || "मेष", nextMoonRashi, transitionTime, nextNakshatra, nakshatraTransitionTime, sunriseTime);
  }, [dateKey, tithi, nakshatra, moonRashi, nextMoonRashi, transitionTime, nextNakshatra, nakshatraTransitionTime, sunriseTime, onViewAll,
  moonInfoString,
  nakshatraInfoString
]);
  // State for sharing
  const [shareData, setShareData] = React.useState<any | null>(null);
  const [isSharing, setIsSharing] = React.useState(false);
  const [imagesLoaded, setImagesLoaded] = React.useState(false);

  // Preload ALL images needed for share cards for offline sharing
  useEffect(() => {
    const preloadImages = [
      wheelImage,
      AppLogo,
      ...Object.values(RASHI_IMAGES) // All 12 rashi icons
    ];
    preloadImages.forEach(src => {
      fetch(src).catch(() => {
        const img = new Image();
        img.src = src;
      });
    });
  }, []);

  const handleShare = (data: any) => {
    setShareData(data);
    setIsSharing(true);
    setImagesLoaded(false); // Reset load state
  };

  // Effect to trigger capture once images are fully loaded
  React.useEffect(() => {
    if (shareData && isSharing && imagesLoaded) {
       performCapture();
    }
  }, [shareData, isSharing, imagesLoaded]);

  const performCapture = async () => {
        try {
            // Small delay to ensure rendering is complete (font layout etc) even after images load
            await new Promise(resolve => setTimeout(resolve, 300));

            const element = document.getElementById('share-card-container');
            if (!element) return;

            const canvas = await html2canvas(element, {
                backgroundColor: null,
                scale: 2,
                useCORS: true,
                allowTaint: true,
                logging: false,
                ignoreElements: (node) => {
                    const tagName = node.tagName.toLowerCase();
                    // Aggressively ignore all scripts and links to prevent any network requests
                    if (tagName === 'script' || tagName === 'link' || tagName === 'iframe') return true;
                    return false;
                },
                onclone: (doc) => {
                    doc.querySelectorAll('script, link, iframe').forEach(el => el.remove());

                    // Ensure the cloned element is visible
                    const el = doc.getElementById('share-card-container');
                    if (el) {
                        el.style.display = 'block';
                        el.style.visibility = 'visible';
                    }
                }
            });

            const fileName = `Rashifal-${shareData.name}-${dateKey}.png`;
            const base64Data = canvas.toDataURL("image/png");

            // Android Native Bridge
            if (window.Android?.shareImage && typeof window.Android.isAndroidApp === 'function' && window.Android.isAndroidApp()) {
                try {
                    window.Android.shareImage(`${shareData.name} राशिफल`, fileName, base64Data);
                    return; // Success via bridge
                } catch (bridgeErr) {
                    console.error("Android image bridge failed", bridgeErr);
                }
            }

            // Web Share API (Standard mobile Browser)
            if (navigator.share && navigator.canShare) {
                try {
                    const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, 'image/png'));
                    if (blob) {
                        const file = new File([blob], fileName, { type: 'image/png' });

                        if (navigator.canShare({ files: [file] })) {
                            await navigator.share({
                                files: [file],
                                title: `${shareData.name} राशिफल - ${date}`,
                                text: `${shareData.name} को दैनिक राशिफल | NepDate`
                            });
                            return; // Success
                        }
                    }
                } catch (shareErr) {
                    console.error("Web Share failed, falling back to download", shareErr);
                }
            }

            // Fallback: Standard Download (for Desktop or unsupported browsers)
            const image = canvas.toDataURL("image/png");
            const link = document.createElement('a');
            link.href = image;
            link.download = fileName;
            link.click();

        } catch (err) {
            console.error("Share failed", err);
        } finally {
            setIsSharing(false);
            setShareData(null);
            setImagesLoaded(false);
        }
  };

  React.useEffect(() => {
    if (selectedRashi && RASHI_KEY_MAP[selectedRashi] !== undefined) {
      const index = RASHI_KEY_MAP[selectedRashi];
      const element = document.getElementById(`rashi-card-${index}`);
      if (element) {
        // Determine offset (e.g. sticky header height)
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  }, [selectedRashi]);

  return (
    <div className={`w-full mt-6 flex flex-col ${className || ''}`}>
      {/* Header Section */}
      <div className="bg-white dark:bg-gray-800 rounded-t-xl border border-gray-200 dark:border-gray-700 p-4 pb-6 relative overflow-hidden shrink-0">
        <div className="flex flex-col mb-4 relative z-10">
          <div className="flex justify-between items-center">
             <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                 <HeaderLogo activeSystem="bs" />
                 दैनिक राशिफल
             </h2>
          </div>

          {/* Astro Info Header */}
          {(moonInfoString || nakshatraInfoString) && (
              <div className="mt-3 text-[11px] text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-2.5 border border-gray-100 dark:border-gray-700">
                  {moonInfoString && <div className="mb-1"><span className="font-bold text-purple-600 dark:text-purple-400">चन्द्रमा:</span> {moonInfoString}</div>}
                  {nakshatraInfoString && <div><span className="font-bold text-blue-600 dark:text-blue-400">नक्षत्र:</span> {nakshatraInfoString}</div>}
              </div>
          )}
        </div>

        {/* Decorative Background lines resembling the image */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-400 to-transparent"></div>
      </div>

      {/* List of Cards - Fixed Height on Dashboard, Auto on Page */}
      <div className={`bg-[#fef8f6] dark:bg-gray-800 border-x border-b border-gray-200 dark:border-gray-700 rounded-b-xl p-4 relative overflow-hidden ${onViewAll ? 'h-[600px]' : ''}`}>

        <div className="space-y-3">
          {rashiData.map((rashi, index) => (
            <RashiCard
              key={rashi.id}
              data={rashi}
              index={index}
              isSelected={selectedRashi ? RASHI_KEY_MAP[selectedRashi] === index : false}
              onShare={handleShare}
            />
          ))}
        </div>

        {/* Fade Overlay & Button */}
        {onViewAll && (
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fef8f6] via-[#fef8f6]/90 to-transparent dark:from-gray-800 dark:via-gray-800/90 dark:to-transparent flex items-end justify-center pb-8 z-10">
            <button
              onClick={onViewAll}
              className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-all text-sm flex items-center gap-2"
            >
              पूरा राशिफल हेर्नुहोस्
            </button>
          </div>
        )}
        </div>

      {/* Hidden Share Card Container (Off-screen but rendered) */}
      {shareData && (
        <RashifalShareCard
            data={shareData}
            date={date}
            onLoad={() => setImagesLoaded(true)}
        />
      )}

      {/* Loading Overlay */}
      {isSharing && (
        <div className="fixed inset-0 bg-black/20 z-[100] flex items-center justify-center backdrop-blur-[1px]">
            <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                <Loader2 className="animate-spin text-blue-600" />
                <span className="font-medium text-gray-700">Generating Image...</span>
            </div>
        </div>
      )}
    </div>
  );
};
