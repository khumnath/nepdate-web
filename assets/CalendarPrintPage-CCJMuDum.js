import{r as b,j as e,R as Z,V as ae,B as L,D as te}from"./vendor-react-C8Y5ZUpv.js";import{B as re}from"./vendor-other-rCQIOS6m.js";import{A as se,G as oe}from"./nepdate_logo-B0xGqhI1.js";import{u as de,a as q,w as ie,A as ne,g as le,h as K,M as ce}from"./main-YEXaxlku.js";import{n as X,f as V,c as P,i as W,t as J,b as fe,N as Q,k as ee}from"./core-astro-vPm4DHYH.js";import{P as ge}from"./PrintAdDialog-D_FojfnE.js";import"./vendor-leaflet-Bjm2FGmM.js";import"./vendor-utils-DkdFK2Cb.js";import"./core-data-BzebUjTq.js";const me=["आइत","सोम","मङ्गल","बुध","बिही","शुक्र","शनि"],xe=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],pe=({system:y,year:f,monthIndex:s,theme:t,highlightToday:j=!1})=>{const{location:o,isStashLoaded:A,ayanamsaMethod:l,engineType:S,isTopocentric:p,useElevation:N,eventRegion:$,weeklyHolidays:G}=de(),{language:B}=q(),z=y==="bs"?me:xe,[C,O]=b.useState({});b.useEffect(()=>{let a=!0;const h=[];if(y==="bs"){const d=X(f,s);if(d)for(let i=1;i<=d.totalDays;i++){const x=V(f,s,i);h.push(x.toISOString())}}else{const d=P(f,s+1,0).getUTCDate();for(let i=1;i<=d;i++){const x=P(f,s,i);h.push(x.toISOString())}}const u=N?o.elevation:0,g={dates:h,lat:o.latitude,lon:o.longitude,tz:o.offset,language:B,zoneId:o.zoneId,isStashLoaded:A,elevation:u,ayanamsa:l,engineType:S,isTopocentric:p,eventRegion:$};let m={},c=null;return ie.calculateMonthOffThread(g,d=>{a&&(m[d.dateStr]=d.data,c||(c=setTimeout(()=>{O(i=>({...i,...m})),m={},c=null},50)))}).then(d=>{if(a&&(c&&clearTimeout(c),Array.isArray(d))){const i={};for(const x of d)x?.dateStr&&x?.data&&(i[x.dateStr]=x.data);O(x=>({...x,...m,...i}))}}).catch(d=>{console.warn("Worker month calculation error in ThemedCalendarGrid:",d)}),()=>{a=!1}},[f,s,y,o.latitude,o.longitude,o.offset,o.zoneId,B,A,l,S,p,N,o.elevation,$]);const H=(()=>{const a=[];if(y==="bs"){const h=X(f,s);if(!h)return a;const u=h.startDayOfWeek||0,g=u+h.totalDays>35?42:35;for(let m=0;m<g;m++)if(m<u||m>=u+h.totalDays)a.push({day:0,adDay:0,isCurrent:!1,date:new Date(0),weekday:m%7});else{const c=m-u+1,d=V(f,s,c),i=W(d),x=C[d.toISOString()],k=x?.tithi?.name||"",E=k==="पूर्णिमा",D=k==="अमावस्या",R=(x?.events?.length??0)>0,r=x?.events?.some(T=>T.holiday)??!1,n=new Date,w=j&&d.getUTCFullYear()===n.getFullYear()&&d.getUTCMonth()===n.getMonth()&&d.getUTCDate()===n.getDate();a.push({day:c,adDay:d.getUTCDate(),isCurrent:!0,isToday:w,date:d,weekday:i,tithi:k,isPurnima:E,isAmavasya:D,hasEvent:R,isHoliday:r})}}else{const h=P(f,s,1),u=P(f,s+1,0),g=W(h),m=g+u.getUTCDate()>35?42:35;for(let c=0;c<m;c++)if(c<g||c>=g+u.getUTCDate())a.push({day:0,adDay:0,isCurrent:!1,isToday:!1,date:new Date(0),weekday:c%7});else{const d=c-g+1,i=P(f,s,d),x=W(i),k=J(i),E=C[i.toISOString()],D=E?.tithi?.name||"",R=D==="पूर्णिमा",r=D==="अमावस्या",n=(E?.events?.length??0)>0,w=E?.events?.some(v=>v.holiday)??!1,T=new Date,U=j&&i.getUTCFullYear()===T.getFullYear()&&i.getUTCMonth()===T.getMonth()&&i.getUTCDate()===T.getDate();a.push({day:d,adDay:k.day,isCurrent:!0,isToday:U,date:i,weekday:x,tithi:D,isPurnima:R,isAmavasya:r,hasEvent:n,isHoliday:w})}}return a})(),M=a=>y==="bs"?fe(a):String(a);return e.jsxs("div",{className:"cal-grid-container",style:{"--cal-primary":t.primary,"--cal-secondary":t.secondary,"--cal-bg":t.bg,"--cal-grid-bg":t.gridBg,"--cal-weekday-gradient":t.weekdayGradient,"--cal-saturday-weekday-bg":t.saturdayWeekdayBg||t.weekdayGradient,"--cal-day-bg":t.dayBg,"--cal-day-border":t.dayBorder,"--cal-day-text":t.dayText,"--cal-saturday-text":t.saturdayText,"--cal-saturday-bg":t.saturdayBg||t.dayBg,"--cal-saturday-border":t.saturdayBorder||t.dayBorder,"--cal-tithi-text":t.tithiText,"--cal-today-bg":t.todayBg||`color-mix(in srgb, ${t.primary} 15%, ${t.dayBg})`,"--cal-today-border":t.todayBorder||t.primary},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .cal-grid-container {
          background: var(--cal-grid-bg);
          border-radius: 32px;
          padding: 22px 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          font-family: 'Noto Sans Devanagari', sans-serif;
        }

        .cal-weekday-row {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 10px;
          margin-bottom: 14px;
        }

        .cal-weekday-cell {
          text-align: center;
          font-size: 28px;
          font-weight: 800;
          color: #fff;
          background: var(--cal-weekday-gradient);
          border-radius: 14px;
          padding: 14px 0;
          letter-spacing: 0.5px;
        }

        .cal-weekday-cell.saturday {
          background: var(--cal-saturday-weekday-bg, var(--cal-saturday-bg, #ef4444));
        }

        .cal-days-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 9px;
          flex: 1;
        }

        .cal-day-cell.today {
          background: var(--cal-today-bg) !important;
          border: 3px solid var(--cal-today-border) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
        }

        .cal-day-cell.today .cal-day-main {
          color: var(--cal-today-border) !important;
        }

        .cal-day-cell {
          background: var(--cal-day-bg);
          border: 1.5px solid var(--cal-day-border);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 8px;
          position: relative;
          aspect-ratio: 1 / 1;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
        }

        .cal-day-cell.empty {
          background: transparent;
          border-color: transparent;
          box-shadow: none;
        }

        .cal-day-cell.saturday {
          background: var(--cal-saturday-bg);
          border-color: var(--cal-saturday-border);
        }

        .cal-day-cell.saturday .cal-day-main {
          color: color-mix(in srgb, var(--cal-saturday-text) 85%, black) !important;
        }

        .cal-day-cell.holiday .cal-day-main {
          color: color-mix(in srgb, var(--cal-saturday-text) 85%, black) !important;
        }

        .cal-day-main {
          font-size: 44px;
          font-weight: 800;
          color: color-mix(in srgb, var(--cal-day-text) 85%, black);
          line-height: 1;
          margin-top: 4px;
        }

        .cal-day-sub {
          position: absolute;
          top: 10px;
          right: 14px;
          font-size: 20px;
          font-weight: 700;
          color: color-mix(in srgb, var(--cal-tithi-text) 80%, black);
        }

        .cal-day-tithi {
          font-size: 19px;
          font-weight: 600;
          color: color-mix(in srgb, var(--cal-tithi-text) 80%, black);
          margin-top: 4px;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-align: center;
        }

        .cal-moon-dot {
          position: absolute;
          top: 14px;
          left: 16px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .cal-event-dot {
          position: absolute;
          bottom: 14px;
          left: 50%;
          transform: translateX(-50%);
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #22c55e;
        }
      `}}),e.jsx("div",{className:"cal-weekday-row",children:z.map((a,h)=>{const u=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"],g=G?.includes(u[h]);return e.jsx("div",{className:`cal-weekday-cell ${g?"saturday":""}`,children:a},h)})}),e.jsx("div",{className:"cal-days-grid",children:H.map((a,h)=>{if(!a.isCurrent)return e.jsx("div",{className:"cal-day-cell empty"},h);const u=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"],m=["cal-day-cell",G?.includes(u[a.weekday])?"saturday":"",a.isToday?"today":""].filter(Boolean).join(" ");return e.jsxs("div",{className:m,children:[a.isPurnima&&e.jsx("div",{className:"cal-moon-dot",style:{background:"#eab308"}}),a.isAmavasya&&e.jsx("div",{className:"cal-moon-dot",style:{background:"#374151"}}),e.jsx("span",{className:"cal-day-main",children:M(a.day)}),e.jsx("span",{className:"cal-day-sub",children:M(a.adDay)}),a.tithi&&e.jsx("span",{className:"cal-day-tithi",children:a.tithi}),a.hasEvent&&!a.isHoliday&&e.jsx("div",{className:"cal-event-dot"}),a.isHoliday&&e.jsx("div",{className:"cal-event-dot",style:{background:"#ef4444"}})]},h)})})]})},he=["०","१","२","३","४","५","६","७","८","९"];function ue(y){return y.toString().split("").map(f=>{const s=parseInt(f);return isNaN(s)?f:he[s]}).join("")}const I={1:{name:"Classic Blue",primary:"#1a237e",secondary:"#c62828",headerGradient:"linear-gradient(90deg, #ffffff 0%, #e3f2fd 30%, #1a237e 80%, #1565c0 100%)",headerTextColor:"#ffffff",footerGradient:"linear-gradient(90deg, #1a237e 0%, #283593 50%, #1565c0 100%)",bg:"#eef2f7",gridBg:"#ffffff",weekdayGradient:"linear-gradient(135deg, #1a237e 0%, #283593 40%, #1565c0 100%)",dayBg:"#e8edf4",dayBorder:"#cdd8e6",dayText:"#1e3a8a",saturdayText:"#c62828",saturdayBg:"#f5c5c5ff",saturdayBorder:"#fecaca",tithiText:"#4a6382",todayBg:"#e3f2fd",todayBorder:"#1565c0"},2:{name:"Royal Purple",primary:"#4a148c",secondary:"#c2185b",headerGradient:"linear-gradient(90deg, #ffffff 0%, #f3e5f5 30%, #4a148c 80%, #8e24aa 100%)",headerTextColor:"#ffffff",footerGradient:"linear-gradient(90deg, #4a148c 0%, #6a1b9a 50%, #8e24aa 100%)",bg:"#f5f0ff",gridBg:"#ffffff",weekdayGradient:"linear-gradient(135deg, #4a148c 0%, #7b1fa2 40%, #ab47bc 100%)",dayBg:"#ede5ff",dayBorder:"#d8c5f0",dayText:"#4a148c",saturdayText:"#c2185b",saturdayBg:"#facac5ff",saturdayBorder:"#fbcfe8",tithiText:"#7c3aed",todayBg:"#f3e5f5",todayBorder:"#7b1fa2"},3:{name:"Sunrise Rose",primary:"#9f1239",secondary:"#881337",headerGradient:"linear-gradient(90deg, #ffffff 0%, #fbe9e7 30%, #bf360c 80%, #e64a19 100%)",headerTextColor:"#ffffff",footerGradient:"linear-gradient(90deg, #bf360c 0%, #d84315 50%, #e64a19 100%)",bg:"#fdf2f4",gridBg:"#ffffff",weekdayGradient:"linear-gradient(135deg, #9f1239 0%, #be185d 35%, #e11d74 70%, #c2185b 100%)",dayBg:"#fce4ec",dayBorder:"#f5d0d6",dayText:"#831843",saturdayText:"#dc2626",saturdayBg:"#f7c5c8ff",saturdayBorder:"#fecaca",tithiText:"#9f1239",todayBg:"#ffe4e6",todayBorder:"#e11d48"},4:{name:"Ocean Teal",primary:"#004d40",secondary:"#e65100",headerGradient:"linear-gradient(90deg, #ffffff 0%, #e0f2f1 30%, #004d40 80%, #00897b 100%)",headerTextColor:"#ffffff",footerGradient:"linear-gradient(90deg, #004d40 0%, #00695c 50%, #00897b 100%)",bg:"#ecfdf5",gridBg:"#ffffff",weekdayGradient:"linear-gradient(135deg, #004d40 0%, #00695c 40%, #00897b 100%)",dayBg:"#d1fae5",dayBorder:"#a7f3d0",dayText:"#064e3b",saturdayText:"#dc2626",saturdayBg:"#fad0d0ff",saturdayBorder:"#fecaca",tithiText:"#047857",todayBg:"#e0f2f1",todayBorder:"#00897b"},5:{name:"Rose Pink",primary:"#8B1538",secondary:"#C4144A",headerGradient:"linear-gradient(90deg, #ffffff 0%, #fce4ec 30%, #8B1538 80%, #6E1130 100%)",headerTextColor:"#ffffff",footerGradient:"linear-gradient(90deg, #6E1130 0%, #8B1538 50%, #C4144A 100%)",bg:"#FDECF1",gridBg:"#FFFFFF",weekdayGradient:"linear-gradient(135deg, #E91E63 0%, #8B1538 100%)",saturdayWeekdayBg:"linear-gradient(135deg, #EF476F 0%, #C4144A 100%)",dayBg:"#FFFAFB",dayBorder:"#F3D2DE",dayText:"#4A1524",saturdayText:"#C4144A",saturdayBg:"#f9ced0ff",saturdayBorder:"#fecaca",tithiText:"#9C6478",todayBg:"#fce4ec",todayBorder:"#d81b60"},6:{name:"Crimson Red",primary:"#be123c",secondary:"#881337",headerGradient:"linear-gradient(90deg, #ffffff 0%, #ffe4e8 30%, #9f1239 80%, #be123c 100%)",headerTextColor:"#ffffff",footerGradient:"linear-gradient(90deg, #881337 0%, #be123c 50%, #e11d48 100%)",bg:"#fff0f5",gridBg:"#ffffff",weekdayGradient:"linear-gradient(135deg, #be123c 0%, #e11d48 40%, #f43f5e 100%)",dayBg:"#ffe4e8",dayBorder:"#ffced6",dayText:"#881337",saturdayText:"#e11d48",saturdayBg:"#fac9cdff",saturdayBorder:"#fecaca",tithiText:"#9f1239",todayBg:"#ffe4e8",todayBorder:"#e11d48"},7:{name:"Midnight Dark",primary:"#374151",secondary:"#111827",headerGradient:"linear-gradient(90deg, #ffffff 0%, #e5e7eb 30%, #111827 80%, #1f2937 100%)",headerTextColor:"#ffffff",footerGradient:"linear-gradient(90deg, #030712 0%, #1f2937 50%, #374151 100%)",bg:"#f3f4f6",gridBg:"#ffffff",weekdayGradient:"linear-gradient(135deg, #111827 0%, #374151 40%, #4b5563 100%)",dayBg:"#e5e7eb",dayBorder:"#d1d5db",dayText:"#1f2937",saturdayText:"#b91c1c",saturdayBg:"#fee2e2",saturdayBorder:"#fca5a5",tithiText:"#4b5563",todayBg:"#d1d5db",todayBorder:"#1f2937"},8:{name:"Golden Yellow",primary:"#ca8a04",secondary:"#854d0e",headerGradient:"linear-gradient(90deg, #ffffff 0%, #fef08a 30%, #713f12 80%, #a16207 100%)",headerTextColor:"#ffffff",footerGradient:"linear-gradient(90deg, #713f12 0%, #a16207 50%, #ca8a04 100%)",bg:"#fefce8",gridBg:"#ffffff",weekdayGradient:"linear-gradient(135deg, #854d0e 0%, #ca8a04 40%, #eab308 100%)",dayBg:"#fef08a",dayBorder:"#fde047",dayText:"#713f12",saturdayText:"#dc2626",saturdayBg:"#fef2f2",saturdayBorder:"#fee2e2",tithiText:"#854d0e",todayBg:"#fde047",todayBorder:"#b45309"}},_=({system:y,year:f,monthIndex:s,variant:t=3,onLoad:j,isOffscreen:o=!1,highlightToday:A=!0})=>{const l=I[t]||I[3],S=y==="bs"?Q[s]:ee[s];Z.useEffect(()=>{if(j){const N=setTimeout(j,600);return()=>clearTimeout(N)}},[j]);const p=N=>y==="bs"?ue(N):String(N);return e.jsx("div",{style:o?{position:"absolute",top:-9999,left:-9999,zIndex:-1,pointerEvents:"none"}:{},children:e.jsxs("div",{id:o?"calendar-share-card":"calendar-share-card-preview",style:{width:1e3,aspectRatio:"4/5",position:"relative",overflow:"hidden",fontFamily:"'Noto Sans Devanagari', sans-serif"},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .cal-card {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
            background: ${l.bg};
            border-radius: 48px;
            padding: 24px;
            overflow: hidden;
          }

          .cal-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 24px 32px;
            border-radius: 20px;
            margin-bottom: 24px;
          }

          .cal-logo-wrap {
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .cal-logo-wrap img {
            height: 72px;
            object-fit: contain;
          }

          .cal-title-wrap {
            text-align: right;
          }

          .cal-month-name {
            font-size: 36px;
            font-weight: 900;
            color: var(--cal-header-text, #fff);
            line-height: 1.1;
          }

          .cal-year-text {
            font-size: 18px;
            font-weight: 700;
            color: var(--cal-header-text, #fff);
            opacity: 0.8;
            margin-top: 4px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .cal-grid-wrap {
            flex: 1;
            display: flex;
            flex-direction: column;
            min-height: 0;
            margin-bottom: 24px;
          }

          .cal-footer {
            margin-top: auto;
            display: flex;
            align-items: center;
            padding: 24px 34px 32px;
            border-radius: 20px;
            overflow: hidden;
            width: 100%;
            position: relative;
          }

          .cal-footer-logo-box {
            background: #fff;
            border-radius: 16px;
            padding: 14px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }

          .cal-footer-logo {
            height: 64px;
            object-fit: contain;
          }

          .cal-footer-divider {
            width: 2px;
            height: 76px;
            background: rgba(255,255,255,0.4);
            margin: 0 34px;
          }

          .cal-footer-text {
            color: #fff;
            font-size: 24px;
            font-weight: 600;
            line-height: 1.55;
            flex: 1;
            text-align: left;
          }

          .cal-footer-text .cal-hl {
            color: #fff6a0;
            font-weight: 700;
          }

          .cal-gp-badge {
            height: 50px;
            object-fit: contain;
          }

          .cal-footer-ornament {
            position: absolute;
            bottom: 12px;
            left: 50%;
            transform: translateX(-50%);
          }
        `}}),e.jsxs("div",{className:"cal-card",style:{"--cal-bg":l.bg,"--cal-header-text":l.headerTextColor},children:[e.jsxs("div",{className:"cal-header",style:{background:l.headerGradient},children:[e.jsxs("div",{className:"cal-logo-wrap",children:[e.jsx("img",{src:se,alt:"NepDate"}),e.jsx("span",{style:{fontSize:"32px",fontWeight:"bold",color:l.primary,marginLeft:"4px"},children:y==="bs"?"नेपडेट पात्रो":"NepDate Calendar"})]}),e.jsxs("div",{className:"cal-title-wrap",children:[e.jsxs("div",{className:"cal-month-name",children:[S," ",y==="bs"?p(f):f]}),e.jsx("div",{className:"cal-year-text",children:y==="bs"?"बिक्रम सम्बत":"Gregorian"})]})]}),e.jsx("div",{className:"cal-grid-wrap",children:e.jsx(pe,{system:y,year:f,monthIndex:s,theme:l,highlightToday:A})}),e.jsxs("div",{className:"cal-footer",style:{background:l.footerGradient},children:[e.jsx("div",{className:"cal-footer-logo-box",children:e.jsx("img",{className:"cal-footer-logo",src:ne,alt:"NepDate"})}),e.jsx("div",{className:"cal-footer-divider"}),e.jsxs("div",{className:"cal-footer-text",children:["विस्तृत पञ्चाङ्ग, राशिफल र शुभ साइतका लागि",e.jsx("br",{}),e.jsx("span",{className:"cal-hl",children:"NepDate नेपाली पात्रो App डाउनलोड गर्नुहोस् ।"})]}),e.jsx("img",{className:"cal-gp-badge",src:oe,alt:"Get it on Google Play"}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"cal-footer-ornament",width:"140",height:"16",viewBox:"0 0 140 16",fill:"none",children:[e.jsx("path",{d:"M140 8C140 12.4183 136.418 16 132 16H8C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0H132C136.418 0 140 3.58172 140 8Z",fill:"white",fillOpacity:"0.1"}),e.jsx("circle",{cx:"70",cy:"8",r:"4",fill:"white",fillOpacity:"0.3"}),e.jsx("circle",{cx:"56",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"}),e.jsx("circle",{cx:"84",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"})]})]})]})]})})},Ce=({onBack:y,activeSystem:f})=>{const{t:s}=q(),t=le(),j=J(t),[o,A]=b.useState(f),[l,S]=b.useState(f==="bs"?j.year:t.getUTCFullYear()),[p,N]=b.useState(f==="bs"?j.monthIndex:t.getUTCMonth()),[$,G]=b.useState(!1),[B,z]=b.useState(!1),[C,O]=b.useState(3),[F,H]=b.useState(!1),[M,a]=b.useState(!1),[h,u]=b.useState(!1),[g,m]=b.useState("pdf"),[c,d]=b.useState(!0);b.useEffect(()=>{o==="bs"&&l<1970&&S(j.year),o==="ad"&&l>2100&&S(t.getUTCFullYear())},[o,l,j.year,t]),b.useEffect(()=>{p==="all"&&m("pdf")},[p]);const i=p==="all"?"year":"single",x=p==="all"?Array.from({length:12},(r,n)=>n):[p],k=r=>o==="bs"?Q[r]:ee[r],E=I[C],D=()=>{i==="single"&&(H(!0),u(!1),a(!0))};Z.useEffect(()=>{M&&h&&R()},[M,h]);const R=async()=>{try{await new Promise(v=>setTimeout(v,300));const r=document.getElementById("calendar-share-card");if(!r)return;const n=await re(r,{scale:typeof window<"u"&&window.devicePixelRatio>2?1:1.5,backgroundColor:"rgba(0,0,0,0)",filter:v=>{const Y=v.tagName?.toLowerCase();return Y!=="script"&&Y!=="link"&&Y!=="iframe"}});if(!n)throw new Error("Failed to generate image");const w=`NepDate-${o}-${l}-${k(p)}-calendar.png`;if(window.Android?.shareImage&&typeof window.Android.isAndroidApp=="function"&&window.Android.isAndroidApp())try{const v=new FileReader;v.readAsDataURL(n),v.onloadend=()=>{const Y=v.result;window.Android.shareImage(`${k(p)} ${l} — NepDate`,w,Y)};return}catch(v){console.error("Android image bridge failed",v)}if(navigator.share&&navigator.canShare)try{const v=new File([n],w,{type:"image/png"});if(navigator.canShare({files:[v]})){await navigator.share({files:[v],title:`${k(p)} ${l} — NepDate`});return}}catch{}const T=URL.createObjectURL(n),U=document.createElement("a");U.href=T,U.download=w,U.click(),setTimeout(()=>URL.revokeObjectURL(T),1e3)}catch(r){console.error("Failed to download image:",r)}finally{H(!1),a(!1),u(!1)}};return e.jsxs("div",{className:"min-h-screen bg-theme-surface text-theme-text",children:[e.jsxs("div",{className:"print:hidden sticky top-0 z-50 bg-theme-surface border-b shadow-sm p-4",children:[e.jsxs("div",{className:"max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4 w-full md:w-auto",children:[e.jsxs("button",{onClick:y,className:"flex items-center gap-2 text-theme-text-muted hover:text-theme-primary font-medium",children:[e.jsx(ae,{size:20}),s("back")]}),e.jsxs("h1",{className:"text-xl font-bold flex items-center gap-2",children:[e.jsx(L,{size:24,className:"text-theme-primary"}),s("calendarPrint")]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 w-full md:w-auto justify-end mt-4 sm:mt-0",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-3 w-full sm:flex sm:w-auto",children:[e.jsxs("div",{className:"flex bg-theme-bg rounded-lg p-1 w-full sm:w-auto",children:[e.jsx("button",{onClick:()=>A("bs"),className:`flex-1 sm:flex-none px-2 py-1 text-sm font-medium rounded-md transition-colors ${o==="bs"?"bg-theme-surface shadow text-theme-primary":"text-theme-text-muted hover:text-theme-text"}`,children:"BS"}),e.jsx("button",{onClick:()=>A("ad"),className:`flex-1 sm:flex-none px-2 py-1 text-sm font-medium rounded-md transition-colors ${o==="ad"?"bg-theme-surface shadow text-theme-primary":"text-theme-text-muted hover:text-theme-text"}`,children:"AD"})]}),e.jsx("input",{id:"print-year-input",name:"year","aria-label":s("year"),autoComplete:"off",type:"number",value:l,onChange:r=>S(parseInt(r.target.value)),className:"border rounded px-2 py-1.5 w-full sm:w-24 text-center font-medium focus:ring-2 focus:ring-blue-500 outline-none min-w-0"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 w-full sm:flex sm:w-auto",children:[e.jsxs("select",{id:"print-month-select",name:"month","aria-label":s("month"),value:p,onChange:r=>{const n=r.target.value;n==="all"?(N("all"),m("pdf")):N(parseInt(n))},className:"border rounded px-2 py-1.5 font-medium focus:ring-2 focus:ring-blue-500 outline-none w-full sm:w-auto flex-1 sm:flex-none min-w-0",children:[e.jsx("option",{value:"all",children:s("allMonths")}),Array.from({length:12},(r,n)=>e.jsx("option",{value:n,children:k(n)},n))]}),e.jsxs("div",{className:"flex bg-theme-bg rounded-lg p-1 w-full sm:w-auto",children:[e.jsxs("button",{onClick:()=>m("pdf"),className:`flex-1 sm:flex-none px-3 py-1.5 text-sm font-medium rounded-md transition-colors flex justify-center items-center gap-1.5 ${g==="pdf"?"bg-theme-surface shadow text-theme-primary":"text-theme-text-muted hover:text-theme-text"}`,children:[e.jsx(L,{size:16})," PDF"]}),e.jsxs("button",{onClick:()=>m("image"),disabled:p==="all",className:`flex-1 sm:flex-none px-3 py-1.5 text-sm font-medium rounded-md transition-colors flex justify-center items-center gap-1.5 ${p==="all"?"opacity-50 cursor-not-allowed":g==="image"?"bg-theme-surface shadow text-theme-primary":"text-theme-text-muted hover:text-theme-text"}`,title:p==="all"?"Image generation is only available for single months":"Share Card Image",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.jsx("polyline",{points:"21 15 16 10 5 21"})]})," Image"]})]})]}),"            ",e.jsx("div",{className:"w-full sm:w-auto",children:e.jsx("div",{className:"flex items-center justify-center gap-2 px-3 bg-theme-surface rounded-lg py-1.5 border overflow-x-auto w-full sm:w-auto",children:Object.entries(I).map(([r,n])=>{const w=Number(r);return e.jsx("button",{onClick:()=>O(w),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${C===w?"ring-2 ring-offset-2 ring-blue-500 scale-110":"hover:scale-110"}`,style:{background:n.primary},title:n.name,children:C===w&&e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-theme-surface shadow-sm"})},w)})})}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 w-full sm:flex sm:w-auto",children:[g==="pdf"&&e.jsxs("button",{onClick:()=>z(r=>!r),className:"flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-theme-surface dark:hover:bg-theme-surface-hover transition-colors border border-theme-border dark:border-theme-border w-full sm:w-auto",title:B?"Hide monthly events":"Show monthly events",children:[e.jsx("div",{className:`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 ease-in-out ${B?"bg-theme-primary":"bg-gray-300 dark:bg-gray-600"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-theme-surface shadow-sm transition duration-200 ease-in-out ${B?"translate-x-4":"translate-x-1"}`})}),e.jsx("span",{className:"text-theme-text dark:text-theme-text",children:"Events"})]}),g==="image"&&e.jsxs("button",{onClick:()=>d(r=>!r),className:"flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-theme-surface dark:hover:bg-theme-surface-hover transition-colors border border-theme-border dark:border-theme-border w-full sm:w-auto",title:c?"Remove today highlight":"Highlight today",children:[e.jsx("div",{className:`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 ease-in-out ${c?"bg-theme-primary":"bg-gray-300 dark:bg-gray-600"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-theme-surface shadow-sm transition duration-200 ease-in-out ${c?"translate-x-4":"translate-x-1"}`})}),e.jsx("span",{className:"text-theme-text dark:text-theme-text truncate",children:"Highlight Today"})]}),g==="pdf"?e.jsxs("button",{onClick:()=>{window.Android?G(!0):K()},className:"bg-theme-primary hover:bg-theme-primary text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 font-medium shadow-sm transition-colors whitespace-nowrap w-full sm:w-auto",children:[e.jsx(L,{size:18}),s("print")]}):e.jsxs("button",{onClick:()=>{window.Android?G(!0):D()},disabled:F,className:`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium shadow-sm transition-colors whitespace-nowrap w-full sm:w-auto ${F?"bg-theme-bg text-gray-400 cursor-not-allowed":"bg-theme-primary hover:bg-theme-primary text-white"}`,title:s("download"),children:[F?e.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}):e.jsx(te,{size:18}),e.jsx("span",{children:F?"Generating Image...":"Image"})]})]})]})]}),e.jsx(ge,{isOpen:$,onClose:()=>G(!1),onSuccess:g==="pdf"?K:D,actionType:g==="pdf"?"print":"share"})]}),e.jsx("div",{className:"w-full min-h-screen bg-theme-bg dark:bg-theme-bg print:bg-theme-surface p-4 sm:p-8 md:p-12 lg:p-16 print:p-0 flex justify-center overflow-x-hidden",children:g==="pdf"?e.jsx("div",{className:"w-full flex flex-col items-center gap-8 print:w-full print:block print:gap-0",children:x.map((r,n)=>{const w=B?"h-[500px] sm:h-[625px] md:h-[750px] lg:h-[1000px]":"h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px]",T=B?"h-[1560px]":"h-[1250px]";return e.jsx("div",{className:`relative rounded-xl overflow-hidden shadow-sm md:shadow-md bg-theme-surface print:shadow-none print:rounded-none w-[320px] sm:w-[400px] md:w-[480px] lg:w-[640px] ${w} print:w-[1000px] print:h-auto print:mb-0`,children:e.jsxs("div",{className:`absolute top-0 left-0 origin-top-left w-[1000px] ${T} scale-[0.32] sm:scale-[0.40] md:scale-[0.48] lg:scale-[0.64] print:scale-100 print:w-[1000px] print:h-auto print:relative flex flex-col bg-theme-surface print:overflow-hidden [page-break-after:var(--pb-after)] [break-after:var(--b-after)]`,style:{"--pb-after":n===x.length-1?"auto":"always","--b-after":n===x.length-1?"auto":"page",background:E?.bg||"#ffffff"},children:[e.jsx(_,{system:o,year:l,monthIndex:r,variant:C,highlightToday:c,isOffscreen:!1}),B&&e.jsx("div",{className:"relative flex flex-col items-center justify-center mt-4 w-[1000px] px-12",children:e.jsx("div",{className:"w-full text-center p-6 rounded-2xl bg-white shadow-sm border border-gray-100",children:e.jsx(ce,{activeSystem:o,currentYear:l,currentMonth:r})})})]})},`${l}-${r}`)})}):e.jsx("div",{className:"print:hidden w-full flex justify-center py-6",children:e.jsx("div",{className:"relative shadow-2xl rounded-3xl overflow-hidden bg-theme-surface w-[320px] h-[400px] sm:w-[400px] sm:h-[500px] md:w-[480px] md:h-[600px]",children:e.jsx("div",{className:"origin-top-left absolute top-0 left-0 w-[1000px] h-[1250px] scale-[0.32] sm:scale-[0.40] md:scale-[0.48]",children:e.jsx(_,{system:o,year:l,monthIndex:p,variant:C,highlightToday:c,isOffscreen:!1})})})})}),M&&i==="single"&&e.jsx(_,{system:o,year:l,monthIndex:p,variant:C,onLoad:()=>u(!0),highlightToday:c,isOffscreen:!0})]})};export{Ce as default};
