import React, { useEffect, useMemo, useState } from 'react';
import { LoaderIcon, ChevronDownIcon, LocationIcon, MapIcon, XIcon } from '../../data/icons';
import type { KundaliRequest } from '../../../types/types';
import { NEPALI_LABELS, NEPALI_BS_MONTHS } from '../../constants/constants';
import { nepaliLocations, TIMEZONE_OFFSETS } from '../../data/timezone';
import { Bsdata } from '../../data/monthData';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import tzlookup from 'tz-lookup';
import { toBikramSambat, fromBikramSambat, getDaysInADMonth, toDevanagari } from '../../lib/lib';

interface KundaliFormProps {
  onCalculate: (data: KundaliRequest) => void;
  isLoading: boolean;
}


const version = __APP_VERSION__;
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


// --- KundaliForm Component ---
export const KundaliForm: React.FC<KundaliFormProps> = ({ onCalculate, isLoading }) => {
  const [name, setName] = useState('प्रयोगकर्ता');
  const [dateSystem, setDateSystem] = useState<'BS' | 'AD'>('BS');

  // showSearchModal with a mode-based state
  const [locationModalMode, setLocationModalMode] = useState<'closed' | 'search' | 'manual'>('closed');



  // --- States and Memos ---
  const today = new Date();
  const bsToday = toBikramSambat(today);

  const [adYear, setAdYear] = useState<number>(today.getFullYear());
  const [adMonth, setAdMonth] = useState<number>(today.getMonth() + 1); // JS months are 0-based
  const [adDay, setAdDay] = useState<number>(today.getDate());

  const [bsYear, setBsYear] = useState<number>(bsToday.year);
  const [bsMonth, setBsMonth] = useState<number>(bsToday.monthIndex + 1); // bikram.ts uses 0-based monthIndex
  const [bsDay, setBsDay] = useState<number>(bsToday.day);

  const [period, setPeriod] = useState<'AM' | 'PM'>('PM');
  const [hour, setHour] = useState<number>(4);
  const [minute, setMinute] = useState<number>(15);
  const [second, setSecond] = useState<number>(0);
  const [relation, setRelation] = useState<string>(NEPALI_LABELS.self);
  const [locationMode, setLocationMode] = useState<'nepal' | 'manual'>('nepal');
  const [nepalLocation, setNepalLocation] = useState(defaultLocation);
  const [manualLat, setManualLat] = useState<number>(defaultLocation?.latitude ?? 27.7172);
  const [manualLon, setManualLon] = useState<number>(defaultLocation?.longitude ?? 85.3240);
  const [manualZoneId, setManualZoneId] = useState<string>(defaultLocation?.zoneId ?? 'Asia/Kathmandu');
  const [showMap, setShowMap] = useState<boolean>(false);
  const [locationSearch, setLocationSearch] = useState<string>(defaultLocation?.name ?? 'Kathmandu');


  useEffect(() => {
    if (typeof manualLat !== 'number' || typeof manualLon !== 'number' || isNaN(manualLat) || isNaN(manualLon)) {
      return;
    }
    try {
      const zoneId = tzlookup(manualLat, manualLon);
      const isValidZone = TIMEZONE_OFFSETS.some((tz) => tz.zoneId === zoneId);
      if (isValidZone) {
        setManualZoneId(zoneId);
      } else {
        setManualZoneId(defaultLocation?.zoneId ?? 'Asia/Kathmandu');
      }
    } catch (err) {
      console.error("tzlookup failed:", err);
      setManualZoneId(defaultLocation?.zoneId ?? 'Asia/Kathmandu');
    }
  }, [manualLat, manualLon, defaultLocation?.zoneId]);

  const bsYears = useMemo(() => {
    return Array.from({ length: Bsdata.BS_END_YEAR - Bsdata.BS_START_YEAR + 1 }, (_, i) => Bsdata.BS_END_YEAR - i);
  }, []);
  const adYears = useMemo(() => Array.from({ length: 102 }, (_, i) => 2034 - i), []);
  const hours = useMemo(() => Array.from({ length: 12 }, (_, i) => i + 1), []);
  const minutesSeconds = useMemo(() => Array.from({ length: 60 }, (_, i) => i), []);

  const daysInMonth = useMemo(() => {
    const yearData = Bsdata.NP_MONTHS_DATA[bsYear];
    return dateSystem === 'BS'
      ? (yearData ? yearData[bsMonth - 1] : 30)
      : getDaysInADMonth(adYear, adMonth);
  }, [dateSystem, bsYear, bsMonth, adYear, adMonth]);

  const filteredLocations = useMemo(() => {
    const searchTerm = locationSearch.toLowerCase().trim();
    if (!searchTerm || searchTerm === nepalLocation?.name.toLowerCase().trim()) {
      return nepaliLocations;
    }
    return nepaliLocations.filter(loc =>
      loc.name.includes(searchTerm) ||
      (loc.romanization && loc.romanization.toLowerCase().includes(searchTerm))
    );
  }, [locationSearch, nepalLocation?.name]);

  useEffect(() => {
    if (dateSystem === 'BS' && bsDay > daysInMonth) setBsDay(daysInMonth);
    if (dateSystem === 'AD' && adDay > daysInMonth) setAdDay(daysInMonth);
  }, [daysInMonth, dateSystem, bsDay, adDay]);

  // --- Handlers and Submit Logic ---
  const handleNepalLocationChange = (selected: typeof nepaliLocations[0]) => {
    setNepalLocation(selected);
    setManualLat(selected.latitude);
    setManualLon(selected.longitude);
    setManualZoneId(selected.zoneId);
  };

  const handleMapSelect = (lat: number, lon: number) => {
    setManualLat(lat);
    setManualLon(lon);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pad = (n: number) => n.toString().padStart(2, '0');
    let finalAdYear = adYear, finalAdMonth = adMonth, finalAdDay = adDay;

    if (dateSystem === 'BS') {
      const adDate = fromBikramSambat(bsYear, bsMonth - 1, bsDay);
      finalAdYear = adDate.getFullYear();
      finalAdMonth = adDate.getMonth() + 1;
      finalAdDay = adDate.getDate();
    }

    let h24 = hour;
    if (period === 'PM' && hour < 12) h24 += 12;
    if (period === 'AM' && hour === 12) h24 = 0;

    const datetimeString = `${finalAdYear}-${pad(finalAdMonth)}-${pad(finalAdDay)}T${pad(h24)}:${pad(minute)}:${pad(second)}`;
    const finalLat = locationMode === 'nepal' ? (nepalLocation?.latitude ?? 27.7172) : manualLat;
    const finalLon = locationMode === 'nepal' ? (nepalLocation?.longitude ?? 85.3240) : manualLon;
    const finalZoneId = locationMode === 'nepal' ? (nepalLocation?.zoneId ?? 'Asia/Kathmandu') : manualZoneId;
    const foundTimezone = TIMEZONE_OFFSETS.find(tz => tz.zoneId === finalZoneId);
    const finalOffset = foundTimezone
      ? foundTimezone.offset
      : 5.75;

    onCalculate({
      name,
      datetime: datetimeString,
      latitude: finalLat,
      longitude: finalLon,
      zoneId: finalZoneId,
      offset: finalOffset,
      options: {
        zodiac: 'SIDEREAL',
        ayanamsa: 'LAHIRI',
        houseSystem: 'WHOLE_SIGN',
        divisionalCharts: [9],
        dashaSystem: 'VIMSHOTTARI',
      },
    });
  };

  return (
    <>
      {/* --- PAGE WRAPPER --- */}
      <div
        style={{ width: '100%', minHeight: 800, paddingTop: 24, paddingBottom: 24 }}
        className="bg-slate-200 dark:bg-gray-800 flex justify-center items-start overflow-y-auto"
      >
        <form
          onSubmit={handleSubmit}
          className="kundali-card bg-slate-50 rounded-xl shadow-lg w-full lg:p-4 md:p-1  space-y-4 text-sm md:text-base dark:bg-gray-800 dark:text-gray-200 dark:border dark:border-gray-700"
          style={{ maxWidth: 1200 }}
        >
          <div className="text-center">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-700 dark:text-blue-300">
              {NEPALI_LABELS.mainTitle}
            </h2>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              App Version: <span className="font-mono">{version}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-x-8">

            {/* --- LEFT COLUMN --- */}
            <div className="space-y-3 md:space-y-4">
              <div>
                <label className="block font-medium text-stone-700 mb-1 dark:text-stone-300">{NEPALI_LABELS.name}</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                  required
                />
              </div>

              {/* Date Input Section */}
              <div>
                <div className="flex justify-between py-1.5 items-center mb-1">
                  <label className="block font-medium text-stone-700 dark:text-stone-300">
                    {NEPALI_LABELS.dateOfBirth}
                  </label>
                  <div className="flex bg-gray-200  py-2 rounded-md p-0.5 w-auto dark:bg-gray-700">
                    {(['BS', 'AD'] as const).map((sys) => (
                      <button
                        key={sys}
                        type="button"
                        onClick={() => setDateSystem(sys)}
                        className={`px-3 py-1 text-xs rounded-md transition-colors duration-200 ${dateSystem === sys
                          ? 'bg-blue-500 text-white shadow dark:bg-blue-400 dark:text-blue-900'
                          : 'text-gray-600 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-600'
                          }`}
                      >
                        {sys === 'BS' ? NEPALI_LABELS.bs : NEPALI_LABELS.ad}
                      </button>
                    ))}
                  </div>
                </div>

                {dateSystem === 'BS' ? (
                  <InputGroup>
                    <GroupedSelect label={NEPALI_LABELS.year} value={bsYear} onChange={e => setBsYear(+e.target.value)}>
                      {bsYears.map(y => <option key={y} value={y}>{toDevanagari(y)}</option>)}
                    </GroupedSelect>
                    <GroupedSelect label={NEPALI_LABELS.month} value={bsMonth} onChange={e => setBsMonth(+e.target.value)}>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                        <option key={m} value={m}>{NEPALI_BS_MONTHS[m - 1]}</option>
                      ))}
                    </GroupedSelect>
                    <GroupedSelect label={NEPALI_LABELS.day} value={bsDay} onChange={e => setBsDay(+e.target.value)}>
                      {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(d => <option key={d} value={d}>{toDevanagari(d)}</option>)}
                    </GroupedSelect>
                  </InputGroup>
                ) : (
                  <InputGroup>
                    <GroupedSelect label={NEPALI_LABELS.year} value={adYear} onChange={e => setAdYear(+e.target.value)}>
                      {adYears.map(y => <option key={y} value={y}>{toDevanagari(y)}</option>)}
                    </GroupedSelect>
                    <GroupedSelect label={NEPALI_LABELS.month} value={adMonth} onChange={e => setAdMonth(+e.target.value)}>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                        <option key={m} value={m}>{toDevanagari(m)}</option>
                      ))}
                    </GroupedSelect>
                    <GroupedSelect label={NEPALI_LABELS.day} value={adDay} onChange={e => setAdDay(+e.target.value)}>
                      {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(d => <option key={d} value={d}>{toDevanagari(d)}</option>)}
                    </GroupedSelect>
                  </InputGroup>
                )}
              </div>

              {/* Time of Birth */}
              <div>
                <label className="block font-medium text-stone-700 mb-1 dark:text-stone-300">{NEPALI_LABELS.birthTimeLabel}</label>
                <InputGroup>
                  <GroupedSelect label={NEPALI_LABELS.hour} value={hour} onChange={e => setHour(+e.target.value)}>
                    {hours.map(h => <option key={h} value={h}>{toDevanagari(h)}</option>)}
                  </GroupedSelect>
                  <GroupedSelect label={NEPALI_LABELS.minute} value={minute} onChange={e => setMinute(+e.target.value)}>
                    {minutesSeconds.map(m => (
                      <option key={m} value={m}>
                        {toDevanagari(m.toString().padStart(2, '0'))}
                      </option>
                    ))}
                  </GroupedSelect>
                  <GroupedSelect label={NEPALI_LABELS.second} value={second} onChange={e => setSecond(+e.target.value)}>
                    {minutesSeconds.map(s => (
                      <option key={s} value={s}>
                        {toDevanagari(s.toString().padStart(2, '0'))}
                      </option>
                    ))}
                  </GroupedSelect>
                </InputGroup>
                <div className="mt-1.5">
                  <div className="flex bg-gray-200 rounded-md p-0.5 w-full dark:bg-gray-700">
                    {(['AM', 'PM'] as const).map((key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setPeriod(key)}
                        className={`w-full px-3 py-1.5 text-sm rounded-md transition-colors duration-200 ${period === key ? 'bg-blue-500 text-white shadow dark:bg-blue-400 dark:text-blue-900' : 'text-gray-600 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-600'
                          }`}
                      >
                        {NEPALI_LABELS[key.toLowerCase() as 'am' | 'pm']}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Relation */}
              <div>
                <label className="block font-medium text-stone-700 mb-1 dark:text-stone-300">{NEPALI_LABELS.relation}</label>
                <select
                  value={relation}
                  onChange={e => setRelation(e.target.value)}
                  className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-sm text-gray-800 focus:outline-none focus:bg-slate-200 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:bg-gray-600 dark:focus:border-blue-400"
                >
                  <option>{NEPALI_LABELS.self}</option>
                  <option>छोरा</option>
                  <option>छोरी</option>
                  <option>जीवनसाथी</option>
                </select>
              </div>
            </div>

            {/* --- RIGHT COLUMN --- */}

            <div className="space-y-3 md:space-y-4 mt-3 xl:mt-0">
              {/* Location Section --- */}
              <div>
                <label className="block font-medium text-stone-700 mb-1 dark:text-stone-300">
                  {NEPALI_LABELS.birthPlace}
                </label>

                <div className="flex bg-gray-200 rounded-md p-0.5 w-full mb-2 dark:bg-gray-700">
                  <button
                    type="button"
                    onClick={() => {
                      setLocationMode('nepal');
                      if (nepalLocation) {
                        setLocationSearch(nepalLocation.name);
                      }
                    }}
                    className={`w-full px-3 py-1.5 text-sm rounded-md transition-colors duration-200 ${locationMode === 'nepal'
                      ? 'bg-blue-500 text-white shadow dark:bg-blue-400 dark:text-blue-900'
                      : 'text-gray-600 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-600'
                      }`}
                  >
                    <LocationIcon className="w-4 h-4 inline-block -mt-0.5 mr-1" />
                    {NEPALI_LABELS.selectFromList || "Select from Nepal"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLocationMode('manual');
                      setLocationModalMode('manual'); // Open modal in manual mode
                    }}
                    className={`w-full px-3 py-1.5 text-sm rounded-md transition-colors duration-200 ${locationMode === 'manual'
                      ? 'bg-blue-500 text-white shadow dark:bg-blue-400 dark:text-blue-900'
                      : 'text-gray-600 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-600'
                      }`}
                  >
                    <MapIcon className="w-4 h-4 inline-block -mt-0.5 mr-1" />
                    {NEPALI_LABELS.enterManually || "Enter Manually"}
                  </button>
                </div>

                {/* Trigger input for modal search */}
                {locationMode === 'nepal' && (
                  <input
                    type="text"
                    value={locationSearch}
                    readOnly
                    onFocus={() => setLocationModalMode('search')}
                    onClick={() => setLocationModalMode('search')}
                    placeholder={NEPALI_LABELS.searchLocation}
                    className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                  />
                )}



                {/* --- Unified Location Info Box --- */}
                <div className="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-md text-center">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {NEPALI_LABELS.selectedLocation || "Selected Location"}
                  </span>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 flex justify-center flex-wrap gap-x-3 gap-y-1">
                    <span>{NEPALI_LABELS.latitudeShort || "Lat"}: {manualLat.toFixed(4)}</span>
                    <span>{NEPALI_LABELS.longitudeShort || "Lon"}: {manualLon.toFixed(4)}</span>
                    <span>TZ: {manualZoneId}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Full-screen modal for search AND manual entry --- */}
            {locationModalMode !== 'closed' && (
              <div
                style={{
                  position: 'fixed',
                  inset: 0,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  zIndex: 9999,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* --- CONDITIONAL MODAL CONTENT --- */}
                {locationModalMode === 'search' ? (
                  <>
                    {/* Modal header with input */}
                    <div className="bg-white dark:bg-gray-800 p-3 shadow-md flex items-center">
                      <input
                        autoFocus
                        type="text"
                        value={locationSearch}
                        onChange={(e) => setLocationSearch(e.target.value)}
                        placeholder={NEPALI_LABELS.searchLocation}
                        className="flex-1 px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                      />
                      <button
                        onClick={() => setLocationModalMode('closed')}
                        className="ml-2 px-3 py-2 bg-red-500 text-white rounded-md"
                      >
                        {NEPALI_LABELS.close}
                      </button>
                    </div>

                    {/* Results list */}
                    <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-800 dark:text-gray-200">
                      {filteredLocations.map(loc => (
                        <div
                          key={loc.name}
                          className="p-3 border-b cursor-pointer hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
                          onClick={() => {
                            handleNepalLocationChange(loc);
                            setLocationSearch(loc.name);
                            setLocationModalMode('closed');
                          }}
                        >
                          {loc.name}
                        </div>
                      ))}
                      <div
                        className="p-3 border-t font-medium cursor-pointer hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
                        onClick={() => {
                          setLocationMode('manual');
                          setLocationModalMode('manual'); // Switch modal to manual mode
                        }}
                      >
                        --- {NEPALI_LABELS.outsideNepal} ---
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Modal header */}
                    <div className="bg-white dark:bg-gray-800 p-3 shadow-md flex justify-between items-center">
                      <h3 className="text-lg font-semibold dark:text-gray-200">{NEPALI_LABELS.enterManually || "Enter Manually"}</h3>
                      <button
                        onClick={() => setLocationModalMode('closed')}
                        className="px-3 py-2 bg-red-500 text-white rounded-md"
                      >
                        {NEPALI_LABELS.close}
                      </button>
                    </div>

                    {/* Manual entry form */}
                    <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-800 p-4 space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs text-gray-500 mb-0.5 dark:text-gray-400">
                            {NEPALI_LABELS.latitude}
                          </label>
                          <input
                            type="number"
                            step="any"
                            value={manualLat}
                            onChange={e => setManualLat(parseFloat(e.target.value))}
                            className="w-full px-3 py-2 text-sm border border-stone-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-0.5 dark:text-gray-400">
                            {NEPALI_LABELS.longitude}
                          </label>
                          <input
                            type="number"
                            step="any"
                            value={manualLon}
                            onChange={e => setManualLon(parseFloat(e.target.value))}
                            className="w-full px-3 py-2 text-sm border border-stone-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                          />
                        </div>
                      </div>
                      <div>
                        <FormSelect
                          label={NEPALI_LABELS.timezone}
                          value={manualZoneId}
                          onChange={e => setManualZoneId(e.target.value)}
                        >
                          {TIMEZONE_OFFSETS.map((tz) => (
                            <option key={tz.zoneId} value={tz.zoneId}>
                              {tz.label}
                            </option>
                          ))}
                        </FormSelect>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowMap(true)}
                        className="w-full flex items-center justify-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-md text-sm py-2 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-700 dark:hover:bg-blue-800"
                      >
                        <MapIcon className="w-4 h-4" />
                        {NEPALI_LABELS.selectOnMap}
                      </button>


                      {/* --- Location Info Box(inside manual location box)--- */}
                      <div className="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-md text-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {NEPALI_LABELS.selectedLocation || "Selected Location"}
                        </span>
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 flex justify-center flex-wrap gap-x-3 gap-y-1">
                          <span>{NEPALI_LABELS.latitudeShort || "Lat"}: {manualLat.toFixed(4)}</span>
                          <span>{NEPALI_LABELS.longitudeShort || "Lon"}: {manualLon.toFixed(4)}</span>
                          <span>TZ: {manualZoneId}</span>
                        </div>
                      </div>
                    </div>
                    {/* Modal footer */}
                    <div className="bg-white dark:bg-gray-800 p-3 border-t dark:border-gray-700 flex justify-between">
                      <button
                        type="button"
                        onClick={() => {
                          setLocationMode('nepal');
                          setLocationModalMode('search');
                        }}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500"
                      >
                        {NEPALI_LABELS?.baktoSearchLocation ?? "Back to Search"}
                      </button>
                      <button
                        type="button"
                        onClick={() => setLocationModalMode('closed')}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-400 dark:text-blue-900 dark:hover:bg-blue-500"
                      >
                        {NEPALI_LABELS?.selectLocationConform ?? "Confirm Selection"}
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}


            {/* --- SUBMIT BUTTON --- */}
            <div style={{ position: 'relative' }} className="bg-slate-50/90 pt-4 pb-2 px-4 rounded-b-xl dark:bg-gray-800/90">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed dark:bg-blue-400 dark:text-blue-900 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-300 dark:disabled:bg-blue-200 dark:disabled:text-gray-500"
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
          </div>
        </form>
      </div>

      {/* Map Modal */}
      {showMap && (
        <MapModal
          initialPosition={[manualLat, manualLon]}
          onClose={() => setShowMap(false)}
          onLocationSelect={handleMapSelect}
        />
      )}
    </>
  );
};