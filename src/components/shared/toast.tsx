import React, { useState, useEffect } from 'react';
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  X,
} from 'lucide-react';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastOptions {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
}
type ToastListener = (toasts: ToastOptions[]) => void;

class ToastStore {
  private static instance: ToastStore;
  private toasts: ToastOptions[] = [];
  private listeners: ToastListener[] = [];
  private toastIdCounter = 0;

  public static getInstance(): ToastStore {
    if (!ToastStore.instance) {
      ToastStore.instance = new ToastStore();
    }
    return ToastStore.instance;
  }

  subscribe(listener: ToastListener) {
    this.listeners.push(listener);
    // Emit current state immediately to the new listener to avoid missing toasts
    listener([...this.toasts]);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private emit() {
    for (const listener of this.listeners) {
      listener([...this.toasts]);
    }
  }

  addToast(message: string, type: ToastType, duration: number) {
    const id = (this.toastIdCounter++).toString();
    const newToast: ToastOptions = { id, message, type, duration };

    this.toasts.push(newToast);
    this.emit();

    setTimeout(() => {
      this.removeToast(id);
    }, duration);
  }

  removeToast(id: string) {
    this.toasts = this.toasts.filter((t) => t.id !== id);
    this.emit();
  }
}

const toastStore = ToastStore.getInstance();

const showToast = (
  message: string,
  type: ToastType = 'info',
  duration: number = 3000
) => {
  toastStore.addToast(message, type, duration);
};

showToast.success = (message: string, duration?: number) =>
  showToast(message, 'success', duration);

showToast.error = (message: string, duration?: number) =>
  showToast(message, 'error', duration);

showToast.warning = (message: string, duration?: number) =>
  showToast(message, 'warning', duration);

showToast.info = (message: string, duration?: number) =>
  showToast(message, 'info', duration);

export const toast = showToast;

// Standard colors with accessibility in mind
const ICONS: Record<ToastType, React.ReactNode> = {
  success: <CheckCircle className="w-5 h-5 text-white" />,
  error: <XCircle className="w-5 h-5 text-white" />,
  warning: <AlertTriangle className="w-5 h-5 text-black" />,
  info: <Info className="w-5 h-5 text-white" />,
};

const STYLES: Record<ToastType, string> = {
  success: 'bg-green-600 border-green-700 text-white',
  error: 'bg-red-600 border-red-700 text-white',
  warning: 'bg-amber-500 border-amber-600 text-black',
  info: 'bg-blue-600 border-blue-700 text-white',
};

const ToastItem: React.FC<{
  toast: ToastOptions;
  onDismiss: (id: string) => void;
}> = ({ toast, onDismiss }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => onDismiss(toast.id), 300);
      return () => clearTimeout(timer);
    }
  }, [isExiting, onDismiss, toast.id]);

  const handleDismiss = () => setIsExiting(true);

  const transitionClasses = isExiting
    ? 'opacity-0 scale-90'
    : 'opacity-100 scale-100';

  return (
    <div
      className={`relative w-full max-w-sm p-4 pr-10 overflow-hidden border-l-4 rounded-md shadow-lg pointer-events-auto transform transition-all duration-300 ease-in-out ${STYLES[toast.type]} ${transitionClasses}`}
      role="alert"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 pt-0.5">{ICONS[toast.type]}</div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium leading-5">{toast.message}</p>
        </div>
        <div className="absolute top-2 right-2 flex-shrink-0 ml-4">
          <button
            onClick={handleDismiss}
            className="inline-flex transition duration-150 ease-in-out rounded-md opacity-70 hover:opacity-100 focus:outline-none"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};


 //  </ToastContainer> for main app
export const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<ToastOptions[]>([]);

  useEffect(() => {
    const unsubscribe = toastStore.subscribe(setToasts);
    return unsubscribe;
  }, []);

  return (
    <div
      className={`fixed z-50 flex flex-col w-auto max-w-sm gap-3 bottom-20 md:bottom-4 left-1/2 -translate-x-1/2`}
    >
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onDismiss={() => toastStore.removeToast(toast.id)}
        />
      ))}
    </div>
  );
};