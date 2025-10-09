import React from 'react';

type IconProps = {
  className?: string;
};

const version = __APP_VERSION__;

const XIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const GithubIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 
      5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 
      5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const UsersIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <path d="M20 8v6" />
    <path d="M23 11h-6" />
  </svg>
);

const LightbulbIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2a7 7 0 0 0-7 7c0 3.03 1.53 5.58 3.72 6.75L9 16.92V18h6v-1.08l.28-.17A7.007 7.007 0 0 0 19 9a7 7 0 0 0-7-7z" />
    <path d="M9 20h6" />
    <path d="M12 22v-2" />
  </svg>
);

type AboutPopupProps = {
  setIsAboutOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AboutPopup: React.FC<AboutPopupProps> = ({ setIsAboutOpen }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 max-w-sm w-full text-center relative border border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setIsAboutOpen(false)}
          className="absolute top-3 right-3 p-1.5 rounded-full text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Close"
        >
          <XIcon className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">About Bikram Calendar</h2>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          A modern Nepali Bikram Sambat and Gregorian calendar app built using React and PWA technology.
        </p>
         <span>App Version: </span>
          <span className="font-mono">{version}</span>

        <div className="space-y-3 my-6">
          <a href="https://github.com/khumnath/nepdate/tree/page" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-2.5 px-4 rounded-lg transition-colors">
            <GithubIcon className="w-5 h-5" />
            <span>Source Code</span>
          </a>
          <a href="https://github.com/khumnath/nepdate/graphs/contributors" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-2.5 px-4 rounded-lg transition-colors">
            <UsersIcon className="w-5 h-5" />
            <span>Contributors</span>
          </a>
          <a href="https://github.com/khumnath/nepdate/issues/new" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-2.5 px-4 rounded-lg transition-colors">
            <LightbulbIcon className="w-5 h-5" />
            <span>Suggestions and issues</span>
          </a>
        </div>

        <div className="text-xs text-gray-500 dark:text-gray-400">
         <p className="mt-1">© 2024–{new Date().getFullYear()} khumnath cg</p>
          <p className="mt-1">All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPopup;
