import React, { useState, useEffect } from 'react';
import { X, Printer, PlayCircle } from 'lucide-react';
import { NEPALI_LABELS } from '../../constants/constants';

interface PrintAdDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onPrint: () => void; // Fallback for non-android or final print action
}

export const PrintAdDialog: React.FC<PrintAdDialogProps> = ({ isOpen, onClose, onPrint }) => {
  const [step, setStep] = useState<'confirm' | 'countdown' | 'ready'>('confirm');
  const [countdown, setCountdown] = useState(5);

  // Check if we are actually in Android app context
  const isAndroid = typeof window !== 'undefined' && !!window.Android;

  useEffect(() => {
    if (isOpen) {
      // Reset state when opened
      setStep('confirm');
      setCountdown(5);
    }
  }, [isOpen]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === 'countdown' && countdown > 0) {
      timer = setTimeout(() => setCountdown(c => c - 1), 1000);
    } else if (step === 'countdown' && countdown === 0) {
      setStep('ready');
    }
    return () => clearTimeout(timer);
  }, [step, countdown]);

  const handleConfirm = () => {
    if (isAndroid && window.Android?.triggerFullScreenAd) {
      window.Android.triggerFullScreenAd();
      setStep('countdown');
    } else {
      // Not android? Just print
      onPrint();
      onClose();
    }
  };

  const handleFinalPrint = () => {
    if (isAndroid && window.Android?.printPage) {
        window.Android.printPage();
    } else {
        onPrint();
    }
    onClose();
  };

  if (!isOpen) return null;

  // STRICT CHECK: Does not render if not Android (or checks fail)
  if (!isAndroid) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-sm w-full p-6 relative animate-in fade-in zoom-in duration-200">
        <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          <X size={20} />
        </button>

        {step === 'confirm' && (
          <div className="text-center">
            <div className="mx-auto bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <PlayCircle className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
              Support {NEPALI_LABELS.project}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
              Please watch a short ad to print this document. Your support helps us keep the app free.
            </p>
            <button
              onClick={handleConfirm}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              Watch Ad & Print
            </button>
          </div>
        )}

        {step === 'countdown' && (
          <div className="text-center py-4">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 animate-pulse">
              {countdown}
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Preparing print...
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Please wait for the ad to finish
            </p>
          </div>
        )}

        {step === 'ready' && (
            <div className="text-center">
                <div className="mx-auto bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Printer className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Ready to Print
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                    Thank you for your support!
                </p>
                <button
                    onClick={handleFinalPrint}
                        className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                    >
                    <Printer size={18} /> Print Now
                </button>
            </div>
        )}
      </div>
    </div>
  );
};
