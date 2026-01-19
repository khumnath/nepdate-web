import { useTheme } from '../../hooks/useTheme';
import React, { useRef, useState, useEffect } from 'react';

interface SocialMediaProps {
  theme?: 'light' | 'dark';
  showTimeline?: boolean;
  height?: number | string;
  width?: number | string;
}

export const SocialMedia: React.FC<SocialMediaProps> = ({
  theme: propTheme,
  showTimeline = false,
  height = 130,
  width = 500
}) => {
  const { theme: hookTheme } = useTheme();
  const activeTheme = propTheme || hookTheme;
  const tabs = showTimeline ? 'timeline' : '';

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        // Get strict width, clamped between Facebook's min (180) and max (500) API limits
        const currentWidth = containerRef.current.offsetWidth;
        const maxWidth = typeof width === 'number' ? width : 500;
        const finalWidth = Math.min(Math.max(currentWidth, 180), maxWidth);
        setContainerWidth(finalWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [width]);

  // key based on width forces re-render of iframe when width changes significantly

  return (
    <div
      ref={containerRef}
      className="mt-4 w-full mx-auto flex justify-center bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 shadow-sm relative z-0"
      style={{ maxWidth: typeof width === 'number' ? `${width}px` : width }}
    >
      {containerWidth ? (
        <iframe
          key={containerWidth}
          src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61584433679641&tabs=${tabs}&width=${containerWidth}&height=${height}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId`}
          width="100%"
          height={height}
          style={{
            border: 'none',
            overflow: 'hidden',
            filter: activeTheme === 'dark' ? 'invert(1) hue-rotate(180deg)' : 'none',
            height: height
          }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="Facebook Page"
        ></iframe>
      ) : (
        <div style={{ height: height }} className="w-full bg-gray-100 dark:bg-gray-800 animate-pulse" />
      )}
    </div>
  );
};
