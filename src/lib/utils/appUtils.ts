import { toast } from "../../components/shared/toast";

// Timezone Helper to get current date in Nepal
export function getNepalDate(): Date {
  const utcNow = new Date();

  const nepalISOString = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kathmandu',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(utcNow).replace(', ', 'T');

  // Treat Nepal-local time as local, not UTC
  const [datePart, timePart] = nepalISOString.split('T');
  const [year, month, day] = datePart.split('-').map(Number);
  const [hour, minute, second] = timePart.split(':').map(Number);
  return new Date(Date.UTC(year, month - 1, day, hour, minute, second));
}

const INFO_DELAY = 2000;
const ERROR_DELAY = 3000;
const EXPECTED_MARKER = 'id="root"';
const APP_URL = location.origin + '/';

const fetchFreshHtml = async (): Promise<"fresh" | "invalid" | "unreachable"> => {
  try {
    const bustUrl = `${APP_URL}?t=${Date.now()}`;
    const response = await fetch(bustUrl, {
      cache: 'no-store',
      credentials: 'omit',
      headers: { 'Cache-Control': 'no-cache' },
    });

    if (!response.ok) return "unreachable";

    const contentType = response.headers.get("Content-Type") || "";
    if (!contentType.includes("text/html")) return "invalid";

    const html = await response.text();
    return html.includes(EXPECTED_MARKER) ? "fresh" : "invalid";
  } catch {
    return "unreachable";
  }
};

export const handleReloadApp = async () => {
  if (!navigator.onLine) {
    toast("Offline! Full refresh aborted.", "error", ERROR_DELAY);
    return;
  }

  // Online — check origin/data
  const result = await fetchFreshHtml();

  if (result === "unreachable") {
    toast("Origin URL is not available. Using cached app...", "error", ERROR_DELAY);
    if (typeof caches !== "undefined" && typeof caches.keys === "function") {
      setTimeout(() => window.location.reload(), ERROR_DELAY);
    } else {
      console.log("ℹ️ Cache API not available — skipping reload for safety.");
    }
    return;
  }

  if (result === "invalid") {
    toast("Warning: Cache data not replaced. Using cached app...", "warning", INFO_DELAY);
    if (typeof caches !== "undefined" && typeof caches.keys === "function") {
      setTimeout(() => window.location.reload(), INFO_DELAY);
    } else {
      console.log("ℹ️ Cache API not available — skipping reload for safety.");
    }
    return;
  }

  // Fresh version confirmed — hard refresh first
  toast("Fresh version confirmed. Reloading now...", "info", INFO_DELAY);
  setTimeout(() => {
    window.location.href = APP_URL;
  }, INFO_DELAY);

  //  Clear cache after reload (only if API available)
  if (typeof caches !== "undefined" && typeof caches.keys === "function") {
    setTimeout(async () => {
      try {
        const keys = await caches.keys();
        await Promise.all(keys.map((key) => caches.delete(key)));
        console.log("✅ Old cache cleared post-reload.");
      } catch (error) {
        console.warn("Cache cleanup failed:", error);
      }
    }, INFO_DELAY + 3000);
  } else {
    console.log("ℹ️ Cache API not available — skipping cache clear for safety.");
  }
};


export const handlePrint = () => {
  if (window.Android?.printPage) {
    window.Android?.printPage();
  } else {
    const nativePrint = window.print;
    nativePrint();
  }
};