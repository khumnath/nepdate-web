import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SocialMedia } from '../components/calendar/SocialMedia';

interface FacebookPageProps {
  onBack: () => void;
  theme: 'light' | 'dark';
}

const FacebookPage: React.FC<FacebookPageProps> = ({ onBack, theme }) => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = React.useState<number>(600);

  React.useLayoutEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        // height of content area - padding (32px = p-4 * 2 approx)
        setContentHeight(contentRef.current.clientHeight - 32);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className="h-full bg-slate-100 dark:bg-gray-900 flex flex-col overflow-hidden pb-[72px] md:pb-0">
      <PageHeader title="हाम्रो फेसबुक पेज" onBack={onBack} />

      {/* Content - Fixed, no scroll on parent */}
      <div ref={contentRef} className="flex-1 p-4 w-full max-w-2xl mx-auto overflow-hidden">
        <div className="bg-white dark:bg-gray-800 h-full rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
          <div className="shrink-0 p-4 pb-2 text-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              हाम्रो फेसबुक पेज लाइक गरेर अपडेट रहनुहोस्।
            </p>
          </div>
          <div className="flex-1 w-full bg-white dark:bg-gray-800 relative">
            {/* Pass calculated height minus header text approx height (e.g. 50px) or just let SocialMedia fill?
                     SocialMedia takes explicit height.
                     iframe height = contentHeight - 50.
                 */}
            <SocialMedia
              showTimeline={true}
              height={contentHeight - 60} // Adjust for text header
              theme={theme}
              width={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookPage;
