import React from 'react';
import { X, RefreshCcw, AlertCircle } from 'lucide-react';
import { NEPALI_LABELS } from '../../constants/constants';

interface UpdateModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const UpdateModal: React.FC<UpdateModalProps> = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full border border-gray-200 dark:border-gray-700 transform transition-all scale-100 p-6">

        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                <RefreshCcw className="w-6 h-6 text-blue-600 dark:text-blue-400" />
             </div>
             <h2 className="text-xl font-bold text-gray-900 dark:text-white font-[Outfit]">
               {NEPALI_LABELS.updateAvailable}
             </h2>
          </div>
          <button
            onClick={onCancel}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {NEPALI_LABELS.updateMessage}
          </p>
          <div className="mt-3 flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-900/50">
             <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
             <p className="text-xs text-amber-700 dark:text-amber-300">
               {NEPALI_LABELS.updateWarning}
             </p>
          </div>
        </div>

        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-5 py-2.5 rounded-xl text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {NEPALI_LABELS.notNow}
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg shadow-blue-500/25 transition-all active:scale-95 flex items-center gap-2"
          >
            <RefreshCcw className="w-4 h-4" />
            {NEPALI_LABELS.updateNow}
          </button>
        </div>

      </div>
    </div>
  );
};
