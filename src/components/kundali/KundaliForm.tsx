import React, { useEffect, useMemo, useState, useImperativeHandle, forwardRef, useRef } from 'react';
import { LoaderIcon, ChevronDownIcon, LocationIcon, MapIcon, XIcon, SearchIcon } from '../../data/icons';
import type { KundaliRequest } from '../../../types/types';
import { NEPALI_LABELS, NEPALI_BS_MONTHS, GREGORIAN_MONTHS } from '../../constants/constants';
import { nepaliLocations, TIMEZONE_OFFSETS } from '../../data/timezone';
import { Bsdata } from '../../data/monthData';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import tzlookup from 'tz-lookup';
import { toBikramSambat, fromBikramSambat, getDaysInADMonth, toDevanagari, fromDevanagari } from '../../lib/lib';

export interface DefaultFormValues {
    name: string;
    dateSystem: 'BS' | 'AD';
    bsYear: number;
    bsMonth: number;
    bsDay: number;
    hour: number;
    minute: number;
    second: number;
    period: 'AM' | 'PM';
}

interface KundaliFormProps {
  onCalculate: (data: KundaliRequest) => void;
  isLoading: boolean;
  hideSubmitButton?: boolean;
  defaultValues?: DefaultFormValues;
}

export interface KundaliFormHandle {
    validateAndGetData: () => Promise<KundaliRequest | null>;
}


const kathmandu = nepaliLocations.find(
  loc => loc.romanization.toLowerCase() === "kathmandu"
);
const defaultLocation = kathmandu ?? nepaliLocations[0];

// --- FormSelect Component ---
interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  children: React.ReactNode;
}
const FormSelect: React.FC<FormSelectProps> = ({ label, children, ...props }) => (
  <div className="relative w-full">
    <select
      {...props}
      className="w-full appearance-none bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-sm text-gray-800 focus:outline-none focus:bg-slate-200 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:bg-blue-400 dark:focus:border-blue-400"
    >
      {children}
    </select>
    <label className="absolute -top-2 left-2.5 bg-gray-100 px-1 text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-400">{label}</label>

    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
      <ChevronDownIcon className="w-4 h-4" />
    </div>
  </div>
);

// --- MapModal Component  ---
interface MapModalProps {
  onClose: () => void;
  onLocationSelect: (lat: number, lon: number) => void;
  initialPosition: [number, number];
}

const ResizeFix: React.FC = () => {
  const map = useMap();
  useEffect(() => {
    // small timeout to let container settle in WebView
    const t = setTimeout(() => {
      try { map.invalidateSize(); } catch { /* ignore */ }
    }, 150);
    return () => clearTimeout(t);
  }, [map]);
  return null;
};

const MapModal: React.FC<MapModalProps> = ({ onClose, onLocationSelect, initialPosition }) => {
  const [markerPosition, setMarkerPosition] = useState<[number, number]>(initialPosition);

  const LocationMarker: React.FC = () => {
    useMapEvents({
      click(e) {
        setMarkerPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return <Marker position={markerPosition}></Marker>;
  };

  const handleSelect = () => {
    onLocationSelect(markerPosition[0], markerPosition[1]);
    onClose();
  };

  // Use absolute full-screen overlay (reliable than fixed in some WebViews)
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // vertical centering
        padding: 12,
      }}
    >
      <div
        style={{
          width: '95%',
          maxWidth: 960,
          height: 620,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 12,
          overflow: 'hidden',
          background: undefined,
        }}
        className="bg-slate-50 dark:bg-gray-800 dark:text-gray-200 rounded-lg shadow-lg"
      >
        {/* --- Header --- */}
        <div className="flex justify-between items-center border-b p-3 dark:border-gray-700">
          <h3 className="text-lg font-semibold">{NEPALI_LABELS.selectOnMap || "Select on Map"}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* --- Map --- */}
        <div style={{ flex: 1, minHeight: 420, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <MapContainer
            key={`${initialPosition[0]}-${initialPosition[1]}`}
            center={initialPosition}
            zoom={7}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ResizeFix />
            <LocationMarker />
          </MapContainer>
        </div>

        {/* --- Footer with coordinates and select button --- */}
        <div className="border-t p-3 flex justify-between items-center dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            Lat: {markerPosition[0].toFixed(4)}, Lon: {markerPosition[1].toFixed(4)}
          </div>
          <button
            onClick={handleSelect}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-400 dark:text-blue-900 dark:hover:bg-blue-500 dark:hover:text-white"
          >
            {NEPALI_LABELS.selectLocation || "Select Location"}
          </button>
        </div>
      </div>
    </div>
  );

};


// --- InputGroup Components ---
const InputGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="grid grid-cols-3 border border-gray-300 rounded-md overflow-hidden divide-x divide-gray-300 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 dark:border-gray-600 dark:divide-gray-600 dark:focus-within:border-blue-400 dark:focus-within:ring-blue-400">
    {children}
  </div>
);

interface GroupedSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  value: number | string;
  children: React.ReactNode;
}
const GroupedSelect: React.FC<GroupedSelectProps> = ({ label, children, ...props }) => (
  <div className="relative">
    <label className="absolute top-1 left-2 text-xs text-gray-500 z-10 dark:text-gray-400">{label}</label>

    <select
      {...props}
      className="relative w-full appearance-none bg-gray-100 pt-5 pb-1.5 px-2 text-sm text-gray-800 focus:outline-none focus:bg-slate-200 z-0 dark:bg-gray-700 dark:text-gray-200 dark:focus:bg-gray-600"
    >
      {children}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 z-10 dark:text-gray-300">
      <ChevronDownIcon className="w-4 h-4" />
    </div>
  </div>
);

interface GroupedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const GroupedInput: React.FC<GroupedInputProps> = ({ label, type = "number", ...props }) => (
  <div className="relative">
    <label className="absolute top-1 left-2 text-xs text-gray-500 z-10 dark:text-gray-400">{label}</label>
    <input
      {...props}
      type={type}
      className="relative w-full bg-gray-100 pt-5 pb-1.5 px-2 text-sm text-gray-800 focus:outline-none focus:bg-slate-200 z-0 dark:bg-gray-700 dark:text-gray-200 dark:focus:bg-gray-600"
    />
  </div>
);

const AD_YEAR_MIN = 1900;
const AD_YEAR_MAX = 2150;
const BS_YEAR_MIN = 1960;
const BS_YEAR_MAX = 2210;

const getDaysInBSMonth = (year: number, month: number): number => {
    if (!year || !month) return 30;
    const yearIndex = year - Bsdata.BS_START_YEAR;
    if (year >= Bsdata.BS_START_YEAR && yearIndex < Bsdata.NP_MONTHS_DATA.length) {
        const yearData = Bsdata.NP_MONTHS_DATA[yearIndex];
        return yearData ? yearData[month - 1] : 30;
    }
    // Algorithmic fallback
    try {
        const firstDayAd = fromBikramSambat(year, month - 1, 1);
        const nextMonthIndex = (month - 1) === 11 ? 0 : month;
        const nextYear = (month - 1) === 11 ? year + 1 : year;
        const firstDayOfNextMonthAd = fromBikramSambat(nextYear, nextMonthIndex, 1);
        const totalDays = Math.round((firstDayOfNextMonthAd.getTime() - firstDayAd.getTime()) / 86400000);
        return totalDays > 0 && totalDays < 33 ? totalDays : 30;
    } catch {
        return 30; // Fallback if conversion fails
    }
};


// --- KundaliForm Component ---
export const KundaliForm = forwardRef<KundaliFormHandle, KundaliFormProps>(({ onCalculate, isLoading, hideSubmitButton = false, defaultValues }, ref) => {
  const today = new Date();
  const bsToday = toBikramSambat(today);
  
  const [name, setName] = useState(defaultValues?.name || 'प्रयोगकर्ता');
  const [dateSystem, setDateSystem] = useState<'BS' | 'AD'>(defaultValues?.dateSystem || 'BS');

  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [modalView, setModalView] = useState<'search' | 'manual'>('search');

  const [adYear, setAdYear] = useState<number | null>(today.getFullYear());
  const [adMonth, setAdMonth] = useState<number>(today.getMonth() + 1); // JS months are 0-based
  const [adDay, setAdDay] = useState<number>(today.getDate());

  const [bsYear, setBsYear] = useState<number | null>(defaultValues?.bsYear || bsToday.year);
  const [bsMonth, setBsMonth] = useState<number>(defaultValues?.bsMonth || bsToday.monthIndex + 1); // bikram.ts uses 0-based monthIndex
  const [bsDay, setBsDay] = useState<number>(defaultValues?.bsDay || bsToday.day);
  
  const yearBeforeFocusRef = useRef<number | null>(null);
  
  const [showInvalidDatePopup, setShowInvalidDatePopup] = useState(false);
  const [resolvePopup, setResolvePopup] = useState<((value: KundaliRequest | null) => void) | null>(null);

  const [period, setPeriod] = useState<'AM' | 'PM'>(defaultValues?.period ||'PM');
  const [hour, setHour] = useState<number>(defaultValues?.hour || 4);
  const [minute, setMinute] = useState<number>(defaultValues?.minute || 15);
  const [second, setSecond] = useState<number>(defaultValues?.second || 0);
  
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation);
  const [manualLat, setManualLat] = useState<number>(defaultLocation?.latitude ?? 27.7172);
  const [manualLon, setManualLon] = useState<number>(defaultLocation?.longitude ?? 85.3240);
  const [manualZoneId, setManualZoneId] = useState<string>(defaultLocation?.zoneId ?? 'Asia/Kathmandu');
  const [showMap, setShowMap] = useState<boolean>(false);
  const [locationSearch, setLocationSearch] = useState<string>('');

  const filteredLocations = useMemo(() => {
    const searchTerm = locationSearch.trim().toLowerCase();
    if (!searchTerm) return nepaliLocations;
    return nepaliLocations.filter(
      (loc) => loc.romanization.toLowerCase().includes(searchTerm) || loc.name.includes(locationSearch.trim())
    );
  }, [locationSearch]);

  useEffect(() => {
    if (typeof manualLat !== 'number' || typeof manualLon !== 'number' || isNaN(manualLat) || isNaN(manualLon)) return;
    try {
      const zoneId = tzlookup(manualLat, manualLon);
      const isValidZone = TIMEZONE_OFFSETS.some((tz) => tz.zoneId === zoneId);
      if (isValidZone) setManualZoneId(zoneId);
      else setManualZoneId(defaultLocation?.zoneId ?? 'Asia/Kathmandu');
    } catch (err) {
      setManualZoneId(defaultLocation?.zoneId ?? 'Asia/Kathmandu');
    }
  }, [manualLat, manualLon, defaultLocation?.zoneId]);

  const hours = useMemo(() => Array.from({ length: 12 }, (_, i) => i + 1), []);
  const minutesSeconds = useMemo(() => Array.from({ length: 60 }, (_, i) => i), []);

  const daysInMonth = useMemo(() => {
    const year = dateSystem === 'BS' ? bsYear : adYear;
    const validYear = year || (dateSystem === 'BS' ? bsToday.year : today.getFullYear());
    return dateSystem === 'BS'
      ? getDaysInBSMonth(validYear, bsMonth)
      : getDaysInADMonth(validYear, adMonth);
  }, [dateSystem, bsYear, bsMonth, adYear, adMonth, bsToday.year, today]);

  useEffect(() => {
    if (dateSystem === 'BS' && bsDay > daysInMonth) setBsDay(daysInMonth);
    if (dateSystem === 'AD' && adDay > daysInMonth) setAdDay(daysInMonth);
  }, [daysInMonth, dateSystem, bsDay, adDay]);
  
  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const valueStr = e.target.value;
      const englishValueStr = fromDevanagari(valueStr);
      const sanitizedStr = englishValueStr.replace(/[^0-9]/g, '');

      if (sanitizedStr === '') {
          if (dateSystem === 'BS') setBsYear(null);
          else setAdYear(null);
          return;
      }

      const num = parseInt(sanitizedStr, 10);
      if (!isNaN(num)) {
          if (dateSystem === 'BS') setBsYear(num);
          else setAdYear(num);
      }
  };
  
  const handleYearFocus = () => {
    const currentYear = dateSystem === 'BS' ? bsYear : adYear;
    yearBeforeFocusRef.current = currentYear;
    if (dateSystem === 'BS') {
        setBsYear(null);
    } else {
        setAdYear(null);
    }
  };

  const handleYearBlur = () => {
    const currentYear = dateSystem === 'BS' ? bsYear : adYear;
    if (currentYear === null || String(currentYear).trim() === '') {
        if (dateSystem === 'BS') {
            setBsYear(yearBeforeFocusRef.current);
        } else {
            setAdYear(yearBeforeFocusRef.current);
        }
    }
  };

  const handleResetToToday = () => {
    const today = new Date();
    const bsToday = toBikramSambat(today);
    setAdYear(today.getFullYear());
    setAdMonth(today.getMonth() + 1);
    setAdDay(today.getDate());
    setBsYear(bsToday.year);
    setBsMonth(bsToday.monthIndex + 1);
    setBsDay(bsToday.day);
  };

  const handleLocationSelect = (selected: typeof nepaliLocations[0]) => {
    setSelectedLocation(selected);
    setManualLat(selected.latitude);
    setManualLon(selected.longitude);
    setManualZoneId(selected.zoneId);
    setIsLocationModalOpen(false);
  };

  const handleMapSelect = (lat: number, lon: number) => {
    setManualLat(lat);
    setManualLon(lon);
    setSelectedLocation({
      name: `${lat.toFixed(4)}, ${lon.toFixed(4)}`,
      romanization: 'Manual Selection',
      latitude: lat,
      longitude: lon,
      zoneId: manualZoneId,
      offset: TIMEZONE_OFFSETS.find(tz => tz.zoneId === manualZoneId)?.offset ?? 5.75
    });
    setIsLocationModalOpen(false);
  };

  const getKundaliRequestData = (): KundaliRequest | null => {
      let currentBsYear = bsYear;
      let currentAdYear = adYear;

      // Handle case where form is reset to today
      if (currentBsYear === null && currentAdYear === null) {
          handleResetToToday();
          currentBsYear = bsToday.year;
          currentAdYear = today.getFullYear();
      }

      const year = dateSystem === 'BS' ? currentBsYear : adYear;
      if (year === null) return null;
      
      const pad = (n: number) => n.toString().padStart(2, '0');
      let finalAdYear = currentAdYear ?? today.getFullYear();
      let finalAdMonth = adMonth;
      let finalAdDay = adDay;

      if (dateSystem === 'BS') {
        const finalBsYear = currentBsYear ?? bsToday.year;
        const adDate = fromBikramSambat(finalBsYear, bsMonth - 1, bsDay);
        finalAdYear = adDate.getFullYear();
        finalAdMonth = adDate.getMonth() + 1;
        finalAdDay = adDate.getDate();
      }

      let h24 = hour;
      if (period === 'PM' && hour < 12) h24 += 12;
      if (period === 'AM' && hour === 12) h24 = 0;

      const datetimeString = `${finalAdYear}-${pad(finalAdMonth)}-${pad(finalAdDay)}T${pad(h24)}:${pad(minute)}:${pad(second)}`;
      const finalLat = selectedLocation.latitude;
      const finalLon = selectedLocation.longitude;
      const finalZoneId = selectedLocation.zoneId;
      const foundTimezone = TIMEZONE_OFFSETS.find(tz => tz.zoneId === finalZoneId);
      const finalOffset = foundTimezone ? foundTimezone.offset : 5.75;

      return {
        name, datetime: datetimeString, latitude: finalLat, longitude: finalLon,
        zoneId: finalZoneId, offset: finalOffset,
        options: {
          zodiac: 'SIDEREAL', ayanamsa: 'LAHIRI', houseSystem: 'WHOLE_SIGN',
          divisionalCharts: [9], dashaSystem: 'VIMSHOTTARI',
        },
      };
  };

  const validateForm = (): boolean => {
    const year = dateSystem === 'BS' ? bsYear : adYear;
    if (year === null || String(year).length < 4) return false;
    
    const [min, max] = dateSystem === 'BS' ? [BS_YEAR_MIN, BS_YEAR_MAX] : [AD_YEAR_MIN, AD_YEAR_MAX];
    if (year < min || year > max) return false;

    return true;
  };
  
  const validateAndGetData = (): Promise<KundaliRequest | null> => {
      return new Promise((resolve) => {
          if (validateForm()) {
              resolve(getKundaliRequestData());
          } else {
              handleResetToToday();
              setShowInvalidDatePopup(true);
              setResolvePopup(() => resolve); // Store the resolve function
          }
      });
  };
  
  useImperativeHandle(ref, () => ({
    validateAndGetData,
  }));

  const handleProceedWithToday = () => {
    setShowInvalidDatePopup(false);
    const todayRequestData = getKundaliRequestData(); 
    if (resolvePopup) {
        resolvePopup(todayRequestData);
        setResolvePopup(null);
    }
  };
  
  const handleEdit = () => {
    setShowInvalidDatePopup(false);
    if(resolvePopup) {
        resolvePopup(null);
        setResolvePopup(null);
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const requestData = await validateAndGetData();
    if (requestData) {
        onCalculate(requestData);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div className="relative">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-sm text-gray-800 focus:outline-none focus:bg-slate-200 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:bg-gray-600 dark:focus:border-blue-400"
          />
          <label htmlFor="name" className="absolute -top-2 left-2.5 bg-gray-100 px-1 text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-400">
            {NEPALI_LABELS.name}
          </label>
        </div>

        {/* Date System Toggle */}
        <div className="flex justify-center">
          <div className="flex p-1 bg-gray-200 dark:bg-gray-700 rounded-md">
            <button
              type="button"
              onClick={() => { setDateSystem('BS'); }}
              className={`px-4 py-1 text-sm rounded ${dateSystem === 'BS' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
            >
              {NEPALI_LABELS.bs}
            </button>
            <button
              type="button"
              onClick={() => { setDateSystem('AD'); }}
              className={`px-4 py-1 text-sm rounded ${dateSystem === 'AD' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
            >
              {NEPALI_LABELS.ad}
            </button>
          </div>
        </div>

        {/* Date Inputs */}
        <div>
          <div className="flex items-center gap-2">
              <div className="flex-1">
                  <InputGroup>
                  <GroupedInput
                      label={NEPALI_LABELS.year}
                      value={dateSystem === 'BS' ? toDevanagari(bsYear ?? '') : (adYear ?? '')}
                      onChange={handleYearChange}
                      onFocus={handleYearFocus}
                      onBlur={handleYearBlur}
                      type="tel"
                      inputMode="numeric"
                      autoComplete="off"
                  />
                  <GroupedSelect
                      label={NEPALI_LABELS.month}
                      value={dateSystem === 'BS' ? bsMonth : adMonth}
                      onChange={(e) => (dateSystem === 'BS' ? setBsMonth(Number(e.target.value)) : setAdMonth(Number(e.target.value)))}
                  >
                      {Array.from({ length: 12 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                          {dateSystem === 'BS' ? NEPALI_BS_MONTHS[i] : GREGORIAN_MONTHS[i]}
                      </option>
                      ))}
                  </GroupedSelect>
                  <GroupedSelect
                      label={NEPALI_LABELS.day}
                      value={dateSystem === 'BS' ? bsDay : adDay}
                      onChange={(e) => (dateSystem === 'BS' ? setBsDay(Number(e.target.value)) : setAdDay(Number(e.target.value)))}
                  >
                      {Array.from({ length: daysInMonth }, (_, i) => <option key={i + 1} value={i + 1}>{toDevanagari(i + 1)}</option>)}
                  </GroupedSelect>
                  </InputGroup>
              </div>
              <button
                  type="button"
                  onClick={handleResetToToday}
                  className="px-3 py-2 text-sm bg-gray-200 dark:bg-gray-600 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500"
                  aria-label={NEPALI_LABELS.resetToToday}
              >
                  {NEPALI_LABELS.resetToToday}
              </button>
          </div>
        </div>

        {/* Time Inputs */}
        <InputGroup>
          <GroupedSelect
            label={NEPALI_LABELS.hour}
            value={hour}
            onChange={(e) => setHour(Number(e.target.value))}
          >
            {hours.map((h) => <option key={h} value={h}>{toDevanagari(h)}</option>)}
          </GroupedSelect>
          <GroupedSelect
            label={NEPALI_LABELS.minute}
            value={minute}
            onChange={(e) => setMinute(Number(e.target.value))}
          >
            {minutesSeconds.map((m) => <option key={m} value={m}>{toDevanagari(m)}</option>)}
          </GroupedSelect>
          <GroupedSelect
            label={NEPALI_LABELS.second}
            value={second}
            onChange={(e) => setSecond(Number(e.target.value))}
          >
            {minutesSeconds.map((s) => <option key={s} value={s}>{toDevanagari(s)}</option>)}
          </GroupedSelect>
        </InputGroup>
        <div className="flex justify-center">
          <div className="flex p-1 bg-gray-200 dark:bg-gray-700 rounded-md">
            <button
              type="button"
              onClick={() => setPeriod('AM')}
              className={`px-4 py-1 text-sm rounded ${period === 'AM' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
            >
              {NEPALI_LABELS.am}
            </button>
            <button
              type="button"
              onClick={() => setPeriod('PM')}
              className={`px-4 py-1 text-sm rounded ${period === 'PM' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
            >
              {NEPALI_LABELS.pm}
            </button>
          </div>
        </div>

        {/* Location Input */}
        <div className="relative">
          <label className="absolute -top-2 left-2.5 bg-gray-100 px-1 text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-400 z-10">{NEPALI_LABELS.location}</label>
          <button
            type="button"
            onClick={() => { setIsLocationModalOpen(true); setModalView('search'); }}
            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-sm text-gray-800 focus:outline-none focus:bg-slate-200 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 flex justify-between items-center text-left"
          >
            <span>{selectedLocation.name} <span className="text-gray-500 dark:text-gray-400 text-xs">({selectedLocation.romanization})</span></span>
            <LocationIcon className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Submit Button */}
        {!hideSubmitButton && (
          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed dark:bg-blue-600 dark:hover:bg-blue-700 dark:disabled:bg-gray-500"
            >
              {isLoading ? (
                <>
                  <LoaderIcon className="w-5 h-5 mr-3 animate-spin" />
                  {NEPALI_LABELS.calculating}
                </>
              ) : (
                NEPALI_LABELS.calculate
              )}
            </button>
          </div>
        )}
      </form>
      
      {/* Location Modal */}
      {isLocationModalOpen && (
         <div className="fixed inset-0 flex items-start justify-center bg-black/60 z-50 p-4 pt-8 sm:pt-8 transition-opacity" onClick={() => setIsLocationModalOpen(false)}>
            <div className="bg-slate-200 dark:bg-gray-800 w-full h-full sm:h-auto sm:max-h-[90vh] sm:rounded-lg shadow-xl max-w-lg p-4 flex flex-col transition-transform" onClick={(e) => e.stopPropagation()}>
               <div className="flex justify-between items-center pb-3 border-b dark:border-gray-700">
                  <h3 className="text-lg font-semibold">{modalView === 'search' ? NEPALI_LABELS.searchOrSelectLocation : NEPALI_LABELS.enterManually}</h3>
                  <button onClick={() => setIsLocationModalOpen(false)} className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"><XIcon className="w-5 h-5" /></button>
               </div>

               {modalView === 'search' ? (
                  <>
                    <div className="relative my-4">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>
                        <input
                            type="text"
                            placeholder={NEPALI_LABELS.locationSearchPlaceholder}
                            value={locationSearch}
                            onChange={(e) => setLocationSearch(e.target.value)}
                            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm text-gray-800 focus:outline-none focus:bg-slate-200 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:bg-gray-600 dark:focus:border-blue-400"
                        />
                    </div>
                    <div className="overflow-y-auto flex-1">
                        {filteredLocations.map(loc => (
                        <div key={loc.name} onClick={() => handleLocationSelect(loc)} className="p-2.5 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-md text-sm flex justify-between">
                           <span>{loc.name}</span>
                           <span className="text-gray-500 dark:text-gray-400">{loc.romanization}</span>
                        </div>
                        ))}
                    </div>
                    <div className="pt-3 mt-3 border-t dark:border-gray-700 text-center">
                        <button onClick={() => setModalView('manual')} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                           {NEPALI_LABELS.cantFindLocation} {NEPALI_LABELS.enterManuallyOrMap}
                        </button>
                    </div>
                  </>
               ) : (
                  <div className="pt-4 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                            <input type="number" step="0.0001" id="latitude" value={manualLat} onChange={(e) => setManualLat(parseFloat(e.target.value))} required className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-sm text-gray-800 focus:outline-none focus:bg-slate-200 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:bg-gray-600 dark:focus:border-blue-400" />
                            <label htmlFor="latitude" className="absolute -top-2 left-2.5 bg-slate-200 px-1 text-xs text-gray-500 dark:bg-gray-800 dark:text-gray-400">{NEPALI_LABELS.latitudeShort}</label>
                        </div>
                        <div className="relative">
                            <input type="number" step="0.0001" id="longitude" value={manualLon} onChange={(e) => setManualLon(parseFloat(e.target.value))} required className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-sm text-gray-800 focus:outline-none focus:bg-slate-200 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:bg-gray-600 dark:focus:border-blue-400" />
                            <label htmlFor="longitude" className="absolute -top-2 left-2.5 bg-slate-200 px-1 text-xs text-gray-500 dark:bg-gray-800 dark:text-gray-400">{NEPALI_LABELS.longitudeShort}</label>
                        </div>
                    </div>
                    <FormSelect label={NEPALI_LABELS.timezone} value={manualZoneId} onChange={(e) => setManualZoneId(e.target.value)}>
                        {TIMEZONE_OFFSETS.map(tz => <option key={tz.zoneId} value={tz.zoneId}>{tz.label}</option>)}
                    </FormSelect>
                     <button type="button" onClick={() => setShowMap(true)} className="w-full flex justify-center items-center gap-2 py-2 bg-gray-200 hover:bg-gray-300 rounded-md dark:bg-gray-600 dark:hover:bg-gray-500" aria-label={NEPALI_LABELS.selectOnMap}>
                        <MapIcon className="w-5 h-5" /> {NEPALI_LABELS.selectOnMap}
                    </button>
                     <div className="text-center">
                        <button onClick={() => setModalView('search')} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                           ← {NEPALI_LABELS.backToSearch}
                        </button>
                    </div>
                  </div>
               )}
            </div>
         </div>
      )}
      
      {/* Map Modal */}
      {showMap && (
        <MapModal
          onClose={() => setShowMap(false)}
          onLocationSelect={handleMapSelect}
          initialPosition={[manualLat, manualLon]}
        />
      )}
      
      {/* Invalid Date Popup */}
      {showInvalidDatePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4 transition-opacity">
            <div className="bg-slate-200 dark:bg-gray-800 rounded-lg shadow-xl max-w-sm w-full p-6 text-center" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-400">{NEPALI_LABELS.invalidDateTitle}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{NEPALI_LABELS.invalidDateMessage(dateSystem)}</p>
                <div className="mt-6 flex justify-center gap-4">
                    <button onClick={handleEdit} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-300 rounded-md hover:bg-gray-400 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500">
                      {NEPALI_LABELS.edit}
                    </button>
                    <button onClick={handleProceedWithToday} className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
                      {NEPALI_LABELS.proceed}
                    </button>
                </div>
            </div>
        </div>
      )}
    </>
  );
});