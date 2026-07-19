import{j as e,R as Z,r as g,w as re,x as I,D as se}from"./vendor-react-CxARfaPr.js";import{v as le}from"./vendor-other-By8KEE3n.js";import{u as ie,m as ne,g as _,e as oe,s as Y,t as q,c as J,v as Q,G as V,l as de,w as K}from"./core-astro-DrEtro0q.js";import{a as ce,u as ee,A as W}from"./index-CR7Vxvie.js";import{A as fe,G as ae}from"./google-play-badge-DgGAyOYp.js";import{M as me}from"./MonthlyEvents-CBBvcjmC.js";import{P as xe}from"./PrintAdDialog-3iqoXdDc.js";import"./vendor-leaflet-Bjm2FGmM.js";import"./core-data-BzebUjTq.js";import"./LoadingSpinner-Clq7L-lN.js";const ge=["आइत","सोम","मङ्गल","बुध","बिही","शुक्र","शनि"],he=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],te=({system:m,year:c,monthIndex:r,theme:s,highlightToday:u=!1})=>{const{location:l,isStashLoaded:F,ayanamsaMethod:i,engineType:S,isTopocentric:o,useElevation:j}=ce(),{language:R}=ee(),P=m==="bs"?ge:he,H=(()=>{const a=[];if(m==="bs"){const d=ie(c,r);if(!d)return a;const y=d.startDayOfWeek||0,h=y+d.totalDays>35?42:35;for(let b=0;b<h;b++)if(b<y||b>=y+d.totalDays)a.push({day:0,adDay:0,isCurrent:!1,date:new Date(0),weekday:b%7});else{const p=b-y+1,x=ne(c,r,p),f=_(x);let w="",v=!1,C=!1,G=!1,A=!1;try{const L=j?l.elevation:0,E=oe(x,l.latitude,l.longitude,l.offset,R,l.zoneId,F,L,i,S,o);E&&!E.error&&(w=E.tithi?.name||"",v=w==="पूर्णिमा",C=w==="अमावस्या",G=(E.events?.length??0)>0,A=E.events?.some(t=>t.holiday)??!1)}catch{}const D=new Date,B=u&&x.getUTCFullYear()===D.getFullYear()&&x.getUTCMonth()===D.getMonth()&&x.getUTCDate()===D.getDate();a.push({day:p,adDay:x.getUTCDate(),isCurrent:!0,isToday:B,date:x,weekday:f,tithi:w,isPurnima:v,isAmavasya:C,hasEvent:G,isHoliday:A})}}else{const d=Y(c,r,1),y=Y(c,r+1,0),h=_(d),b=h+y.getUTCDate()>35?42:35;for(let p=0;p<b;p++)if(p<h||p>=h+y.getUTCDate())a.push({day:0,adDay:0,isCurrent:!1,isToday:!1,date:new Date(0),weekday:p%7});else{const x=p-h+1,f=Y(c,r,x),w=_(f),v=q(f),C=new Date,G=u&&f.getUTCFullYear()===C.getFullYear()&&f.getUTCMonth()===C.getMonth()&&f.getUTCDate()===C.getDate();a.push({day:x,adDay:v.day,isCurrent:!0,isToday:G,date:f,weekday:w})}}return a})(),T=a=>m==="bs"?J(a):String(a);return e.jsxs("div",{className:"cal-grid-container",style:{"--cal-primary":s.primary,"--cal-secondary":s.secondary,"--cal-bg":s.bg,"--cal-grid-bg":s.gridBg,"--cal-weekday-gradient":s.weekdayGradient,"--cal-saturday-weekday-bg":s.saturdayWeekdayBg||s.weekdayGradient,"--cal-day-bg":s.dayBg,"--cal-day-border":s.dayBorder,"--cal-day-text":s.dayText,"--cal-saturday-text":s.saturdayText,"--cal-saturday-bg":s.saturdayBg||s.dayBg,"--cal-saturday-border":s.saturdayBorder||s.dayBorder,"--cal-tithi-text":s.tithiText},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          background: color-mix(in srgb, var(--cal-primary) 12%, var(--cal-day-bg)) !important;
          border: 2.5px solid var(--cal-primary) !important;
          box-shadow: 0 4px 12px color-mix(in srgb, var(--cal-primary) 15%, transparent);
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
      `}}),e.jsx("div",{className:"cal-weekday-row",children:P.map((a,d)=>e.jsx("div",{className:`cal-weekday-cell ${d===6?"saturday":""}`,children:a},d))}),e.jsx("div",{className:"cal-days-grid",children:H.map((a,d)=>{if(!a.isCurrent)return e.jsx("div",{className:"cal-day-cell empty"},d);const h=["cal-day-cell",a.weekday===6?"saturday":"",a.isToday?"today":""].filter(Boolean).join(" ");return e.jsxs("div",{className:h,children:[a.isPurnima&&e.jsx("div",{className:"cal-moon-dot",style:{background:"#eab308"}}),a.isAmavasya&&e.jsx("div",{className:"cal-moon-dot",style:{background:"#374151"}}),e.jsx("span",{className:"cal-day-main",children:T(a.day)}),e.jsx("span",{className:"cal-day-sub",children:T(a.adDay)}),a.tithi&&e.jsx("span",{className:"cal-day-tithi",children:a.tithi}),a.hasEvent&&!a.isHoliday&&e.jsx("div",{className:"cal-event-dot"}),a.isHoliday&&e.jsx("div",{className:"cal-event-dot",style:{background:"#ef4444"}})]},d)})})]})},pe=["०","१","२","३","४","५","६","७","८","९"];function ue(m){return m.toString().split("").map(c=>{const r=parseInt(c);return isNaN(r)?c:pe[r]}).join("")}const O={1:{name:"Classic Blue",primary:"#1a237e",secondary:"#c62828",headerGradient:"linear-gradient(90deg, #ffffff 0%, #e3f2fd 30%, #1a237e 80%, #1565c0 100%)",headerTextColor:"#ffffff",footerGradient:"linear-gradient(90deg, #1a237e 0%, #283593 50%, #1565c0 100%)",bg:"#eef2f7",gridBg:"#ffffff",weekdayGradient:"linear-gradient(135deg, #1a237e 0%, #283593 40%, #1565c0 100%)",dayBg:"#e8edf4",dayBorder:"#cdd8e6",dayText:"#1e3a8a",saturdayText:"#c62828",tithiText:"#4a6382"},2:{name:"Royal Purple",primary:"#4a148c",secondary:"#c2185b",headerGradient:"linear-gradient(90deg, #ffffff 0%, #f3e5f5 30%, #4a148c 80%, #8e24aa 100%)",headerTextColor:"#ffffff",footerGradient:"linear-gradient(90deg, #4a148c 0%, #6a1b9a 50%, #8e24aa 100%)",bg:"#f5f0ff",gridBg:"#ffffff",weekdayGradient:"linear-gradient(135deg, #4a148c 0%, #7b1fa2 40%, #ab47bc 100%)",dayBg:"#ede5ff",dayBorder:"#d8c5f0",dayText:"#4a148c",saturdayText:"#c2185b",tithiText:"#7c3aed"},3:{name:"Sunrise Rose",primary:"#9f1239",secondary:"#881337",headerGradient:"linear-gradient(90deg, #ffffff 0%, #fbe9e7 30%, #bf360c 80%, #e64a19 100%)",headerTextColor:"#ffffff",footerGradient:"linear-gradient(90deg, #bf360c 0%, #d84315 50%, #e64a19 100%)",bg:"#fdf2f4",gridBg:"#ffffff",weekdayGradient:"linear-gradient(135deg, #9f1239 0%, #be185d 35%, #e11d74 70%, #c2185b 100%)",dayBg:"#fce4ec",dayBorder:"#f5d0d6",dayText:"#831843",saturdayText:"#dc2626",tithiText:"#9f1239"},4:{name:"Ocean Teal",primary:"#004d40",secondary:"#e65100",headerGradient:"linear-gradient(90deg, #ffffff 0%, #e0f2f1 30%, #004d40 80%, #00897b 100%)",headerTextColor:"#ffffff",footerGradient:"linear-gradient(90deg, #004d40 0%, #00695c 50%, #00897b 100%)",bg:"#ecfdf5",gridBg:"#ffffff",weekdayGradient:"linear-gradient(135deg, #004d40 0%, #00695c 40%, #00897b 100%)",dayBg:"#d1fae5",dayBorder:"#a7f3d0",dayText:"#064e3b",saturdayText:"#dc2626",tithiText:"#047857"},5:{name:"Rose Pink",primary:"#8B1538",secondary:"#C4144A",headerGradient:"linear-gradient(90deg, #ffffff 0%, #fce4ec 30%, #8B1538 80%, #6E1130 100%)",headerTextColor:"#ffffff",footerGradient:"linear-gradient(90deg, #6E1130 0%, #8B1538 50%, #C4144A 100%)",bg:"#FDECF1",gridBg:"#FFFFFF",weekdayGradient:"linear-gradient(135deg, #E91E63 0%, #8B1538 100%)",saturdayWeekdayBg:"linear-gradient(135deg, #EF476F 0%, #C4144A 100%)",dayBg:"#FFFAFB",dayBorder:"#F3D2DE",dayText:"#4A1524",saturdayText:"#C4144A",saturdayBg:"#FFF3F6",saturdayBorder:"#F6C6D6",tithiText:"#9C6478"},6:{name:"Crimson Red",primary:"#be123c",secondary:"#881337",headerGradient:"linear-gradient(90deg, #ffffff 0%, #ffe4e8 30%, #9f1239 80%, #be123c 100%)",headerTextColor:"#ffffff",footerGradient:"linear-gradient(90deg, #881337 0%, #be123c 50%, #e11d48 100%)",bg:"#fff0f5",gridBg:"#ffffff",weekdayGradient:"linear-gradient(135deg, #be123c 0%, #e11d48 40%, #f43f5e 100%)",dayBg:"#ffe4e8",dayBorder:"#ffced6",dayText:"#881337",saturdayText:"#e11d48",tithiText:"#9f1239"},7:{name:"Midnight Dark",primary:"#374151",secondary:"#111827",headerGradient:"linear-gradient(90deg, #ffffff 0%, #e5e7eb 30%, #111827 80%, #1f2937 100%)",headerTextColor:"#ffffff",footerGradient:"linear-gradient(90deg, #030712 0%, #1f2937 50%, #374151 100%)",bg:"#f3f4f6",gridBg:"#ffffff",weekdayGradient:"linear-gradient(135deg, #111827 0%, #374151 40%, #4b5563 100%)",dayBg:"#e5e7eb",dayBorder:"#d1d5db",dayText:"#1f2937",saturdayText:"#b91c1c",tithiText:"#4b5563"},8:{name:"Golden Yellow",primary:"#ca8a04",secondary:"#854d0e",headerGradient:"linear-gradient(90deg, #ffffff 0%, #fef08a 30%, #713f12 80%, #a16207 100%)",headerTextColor:"#ffffff",footerGradient:"linear-gradient(90deg, #713f12 0%, #a16207 50%, #ca8a04 100%)",bg:"#fefce8",gridBg:"#ffffff",weekdayGradient:"linear-gradient(135deg, #854d0e 0%, #ca8a04 40%, #eab308 100%)",dayBg:"#fef08a",dayBorder:"#fde047",dayText:"#713f12",saturdayText:"#dc2626",tithiText:"#854d0e"}},X=({system:m,year:c,monthIndex:r,variant:s=3,onLoad:u,isOffscreen:l=!1,highlightToday:F=!0})=>{const i=O[s]||O[3],S=m==="bs"?Q[r]:V[r];Z.useEffect(()=>{if(u){const j=setTimeout(u,600);return()=>clearTimeout(j)}},[u]);const o=j=>m==="bs"?ue(j):String(j);return e.jsx("div",{style:l?{position:"absolute",top:-9999,left:-9999,zIndex:-1,pointerEvents:"none"}:{},children:e.jsxs("div",{id:l?"calendar-share-card":"calendar-share-card-preview",style:{width:1e3,aspectRatio:"4/5",position:"relative",overflow:"hidden",fontFamily:"'Noto Sans Devanagari', sans-serif"},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .cal-card {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
            background: ${i.bg};
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
        `}}),e.jsxs("div",{className:"cal-card",style:{"--cal-bg":i.bg,"--cal-header-text":i.headerTextColor},children:[e.jsxs("div",{className:"cal-header",style:{background:i.headerGradient},children:[e.jsxs("div",{className:"cal-logo-wrap",children:[e.jsx("img",{src:fe,alt:"NepDate"}),e.jsx("span",{style:{fontSize:"32px",fontWeight:"bold",color:i.primary,marginLeft:"4px"},children:m==="bs"?"नेपडेट पात्रो":"NepDate Calendar"})]}),e.jsxs("div",{className:"cal-title-wrap",children:[e.jsxs("div",{className:"cal-month-name",children:[S," ",m==="bs"?o(c):c]}),e.jsx("div",{className:"cal-year-text",children:m==="bs"?"बिक्रम सम्बत":"Gregorian"})]})]}),e.jsx("div",{className:"cal-grid-wrap",children:e.jsx(te,{system:m,year:c,monthIndex:r,theme:i,highlightToday:F})}),e.jsxs("div",{className:"cal-footer",style:{background:i.footerGradient},children:[e.jsx("div",{className:"cal-footer-logo-box",children:e.jsx("img",{className:"cal-footer-logo",src:W,alt:"NepDate"})}),e.jsx("div",{className:"cal-footer-divider"}),e.jsxs("div",{className:"cal-footer-text",children:["विस्तृत पञ्चाङ्ग, राशिफल र शुभ साइतका लागि",e.jsx("br",{}),e.jsx("span",{className:"cal-hl",children:"NepDate नेपाली पात्रो App डाउनलोड गर्नुहोस् ।"})]}),e.jsx("img",{className:"cal-gp-badge",src:ae,alt:"Get it on Google Play"}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"cal-footer-ornament",width:"140",height:"16",viewBox:"0 0 140 16",fill:"none",children:[e.jsx("path",{d:"M140 8C140 12.4183 136.418 16 132 16H8C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0H132C136.418 0 140 3.58172 140 8Z",fill:"white",fillOpacity:"0.1"}),e.jsx("circle",{cx:"70",cy:"8",r:"4",fill:"white",fillOpacity:"0.3"}),e.jsx("circle",{cx:"56",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"}),e.jsx("circle",{cx:"84",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"})]})]})]})]})})},Be=({onBack:m,activeSystem:c})=>{const{t:r}=ee(),s=de(),u=q(s),[l,F]=g.useState(c),[i,S]=g.useState(c==="bs"?u.year:s.getUTCFullYear()),[o,j]=g.useState(c==="bs"?u.monthIndex:s.getUTCMonth()),[R,P]=g.useState(!1),[k,H]=g.useState(!1),[T,a]=g.useState(3),[d,y]=g.useState(!1),[h,b]=g.useState(!1),[p,x]=g.useState(!1),[f,w]=g.useState("pdf"),[v,C]=g.useState(!0);g.useEffect(()=>{l==="bs"&&i<1970&&S(u.year),l==="ad"&&i>2100&&S(s.getUTCFullYear())},[l,i,u.year,s]),g.useEffect(()=>{o==="all"&&w("pdf")},[o]);const G=o==="all"?"year":"single",A=o==="all"?Array.from({length:12},(t,n)=>n):[o],D=t=>l==="bs"?Q[t]:V[t],B=O[T],L=()=>{G==="single"&&(y(!0),x(!1),b(!0))};Z.useEffect(()=>{h&&p&&E()},[h,p]);const E=async()=>{try{await new Promise(M=>setTimeout(M,300));const t=document.getElementById("calendar-share-card");if(!t)return;const n=await le(t,{scale:typeof window<"u"&&window.devicePixelRatio>2?1:1.5,backgroundColor:"rgba(0,0,0,0)",filter:M=>{const z=M.tagName?.toLowerCase();return z!=="script"&&z!=="link"&&z!=="iframe"}});if(!n)throw new Error("Failed to generate image");const N=`NepDate-${l}-${i}-${D(o)}-calendar.png`;if(navigator.share&&navigator.canShare)try{const M=new File([n],N,{type:"image/png"});if(navigator.canShare({files:[M]})){await navigator.share({files:[M],title:`${D(o)} ${i} — NepDate`});return}}catch{}const $=URL.createObjectURL(n),U=document.createElement("a");U.href=$,U.download=N,U.click(),setTimeout(()=>URL.revokeObjectURL($),1e3)}catch(t){console.error("Failed to download image:",t)}finally{y(!1),b(!1),x(!1)}};return e.jsxs("div",{className:"min-h-screen bg-theme-surface text-theme-text",children:[e.jsxs("div",{className:"print:hidden sticky top-0 z-50 bg-theme-surface border-b shadow-sm p-4",children:[e.jsxs("div",{className:"max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4 w-full md:w-auto",children:[e.jsxs("button",{onClick:m,className:"flex items-center gap-2 text-theme-text-muted hover:text-theme-primary font-medium",children:[e.jsx(re,{size:20}),r("back")]}),e.jsxs("h1",{className:"text-xl font-bold flex items-center gap-2",children:[e.jsx(I,{size:24,className:"text-theme-primary"}),r("calendarPrint")]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 w-full md:w-auto justify-end mt-4 sm:mt-0",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-3 w-full sm:flex sm:w-auto",children:[e.jsxs("div",{className:"flex bg-theme-bg rounded-lg p-1 w-full sm:w-auto",children:[e.jsx("button",{onClick:()=>F("bs"),className:`flex-1 sm:flex-none px-2 py-1 text-sm font-medium rounded-md transition-colors ${l==="bs"?"bg-theme-surface shadow text-theme-primary":"text-theme-text-muted hover:text-theme-text"}`,children:"BS"}),e.jsx("button",{onClick:()=>F("ad"),className:`flex-1 sm:flex-none px-2 py-1 text-sm font-medium rounded-md transition-colors ${l==="ad"?"bg-theme-surface shadow text-theme-primary":"text-theme-text-muted hover:text-theme-text"}`,children:"AD"})]}),e.jsx("input",{id:"print-year-input",name:"year","aria-label":r("year"),autoComplete:"off",type:"number",value:i,onChange:t=>S(parseInt(t.target.value)),className:"border rounded px-2 py-1.5 w-full sm:w-24 text-center font-medium focus:ring-2 focus:ring-blue-500 outline-none min-w-0"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 w-full sm:flex sm:w-auto",children:[e.jsxs("select",{id:"print-month-select",name:"month","aria-label":r("month"),value:o,onChange:t=>{const n=t.target.value;n==="all"?(j("all"),w("pdf")):j(parseInt(n))},className:"border rounded px-2 py-1.5 font-medium focus:ring-2 focus:ring-blue-500 outline-none w-full sm:w-auto flex-1 sm:flex-none min-w-0",children:[e.jsx("option",{value:"all",children:r("allMonths")}),Array.from({length:12},(t,n)=>e.jsx("option",{value:n,children:D(n)},n))]}),e.jsxs("div",{className:"flex bg-theme-bg rounded-lg p-1 w-full sm:w-auto",children:[e.jsxs("button",{onClick:()=>w("pdf"),className:`flex-1 sm:flex-none px-3 py-1.5 text-sm font-medium rounded-md transition-colors flex justify-center items-center gap-1.5 ${f==="pdf"?"bg-theme-surface shadow text-theme-primary":"text-theme-text-muted hover:text-theme-text"}`,children:[e.jsx(I,{size:16})," PDF"]}),e.jsxs("button",{onClick:()=>w("image"),disabled:o==="all",className:`flex-1 sm:flex-none px-3 py-1.5 text-sm font-medium rounded-md transition-colors flex justify-center items-center gap-1.5 ${o==="all"?"opacity-50 cursor-not-allowed":f==="image"?"bg-theme-surface shadow text-theme-primary":"text-theme-text-muted hover:text-theme-text"}`,title:o==="all"?"Image generation is only available for single months":"Share Card Image",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.jsx("polyline",{points:"21 15 16 10 5 21"})]})," Image"]})]})]}),"            ",e.jsx("div",{className:"w-full sm:w-auto",children:e.jsx("div",{className:"flex items-center justify-center gap-2 px-3 bg-theme-surface rounded-lg py-1.5 border overflow-x-auto w-full sm:w-auto",children:Object.entries(O).map(([t,n])=>{const N=Number(t);return e.jsx("button",{onClick:()=>a(N),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${T===N?"ring-2 ring-offset-2 ring-blue-500 scale-110":"hover:scale-110"}`,style:{background:n.primary},title:n.name,children:T===N&&e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-theme-surface shadow-sm"})},N)})})}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 w-full sm:flex sm:w-auto",children:[f==="pdf"&&e.jsxs("button",{onClick:()=>H(t=>!t),className:"flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-theme-surface dark:hover:bg-theme-surface-hover transition-colors border border-theme-border dark:border-theme-border w-full sm:w-auto",title:k?"Hide monthly events":"Show monthly events",children:[e.jsx("div",{className:`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 ease-in-out ${k?"bg-theme-primary":"bg-gray-300 dark:bg-gray-600"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-theme-surface shadow-sm transition duration-200 ease-in-out ${k?"translate-x-4":"translate-x-1"}`})}),e.jsx("span",{className:"text-theme-text dark:text-theme-text",children:"Events"})]}),f==="image"&&e.jsxs("button",{onClick:()=>C(t=>!t),className:"flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-theme-surface dark:hover:bg-theme-surface-hover transition-colors border border-theme-border dark:border-theme-border w-full sm:w-auto",title:v?"Remove today highlight":"Highlight today",children:[e.jsx("div",{className:`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 ease-in-out ${v?"bg-theme-primary":"bg-gray-300 dark:bg-gray-600"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-theme-surface shadow-sm transition duration-200 ease-in-out ${v?"translate-x-4":"translate-x-1"}`})}),e.jsx("span",{className:"text-theme-text dark:text-theme-text truncate",children:"Highlight Today"})]}),f==="pdf"?e.jsxs("button",{onClick:()=>{window.Android?P(!0):K()},className:"bg-theme-primary hover:bg-theme-primary text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 font-medium shadow-sm transition-colors whitespace-nowrap w-full sm:w-auto",children:[e.jsx(I,{size:18}),r("print")]}):e.jsxs("button",{onClick:L,disabled:d,className:`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium shadow-sm transition-colors whitespace-nowrap w-full sm:w-auto ${d?"bg-theme-bg text-gray-400 cursor-not-allowed":"bg-theme-primary hover:bg-theme-primary text-white"}`,title:r("download"),children:[d?e.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}):e.jsx(se,{size:18}),e.jsx("span",{children:d?"Generating Image...":"Image"})]})]})]})]}),e.jsx(xe,{isOpen:R,onClose:()=>P(!1),onPrint:K})]}),e.jsx("div",{className:"w-full min-h-screen bg-theme-bg dark:bg-theme-bg print:bg-theme-surface p-4 sm:p-8 md:p-12 lg:p-16 print:p-0 flex justify-center overflow-x-hidden",children:f==="pdf"?e.jsx("div",{className:"w-full flex flex-col items-center gap-8 print:w-full print:block print:gap-0",children:A.map((t,n)=>{const N=k?"h-[452px] sm:h-[678px] md:h-[904px] lg:h-[1130px]":"h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1000px]",$=k?"h-[1130px]":"h-[1000px]";return e.jsx("div",{className:`relative rounded-xl overflow-hidden shadow-sm md:shadow-md bg-theme-surface print:shadow-none print:rounded-none w-[320px] sm:w-[480px] md:w-[640px] lg:w-[800px] ${N} print:w-full print:h-[99vh] print:aspect-auto print:mb-0`,children:e.jsx("div",{className:`absolute top-0 left-0 origin-top-left w-[800px] ${$} scale-[0.40] sm:scale-[0.60] md:scale-[0.80] lg:scale-100 print:scale-100 print:w-full print:h-full print:relative flex flex-col bg-theme-surface print:min-h-0 print:overflow-hidden [page-break-after:var(--pb-after)] [break-after:var(--b-after)]`,style:{"--pb-after":n===A.length-1?"auto":"always","--b-after":n===A.length-1?"auto":"page"},children:e.jsxs("div",{className:"flex flex-col min-h-full print:h-full p-3 sm:p-5 md:p-8 print:p-6",style:{background:B?.bg||"#ffffff"},children:[e.jsxs("div",{className:"flex flex-shrink-0 items-center justify-between pb-3 mb-3 rounded-lg px-4 py-3",style:{background:B.headerGradient},children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"bg-theme-surface rounded-lg p-1.5 shadow-sm",children:e.jsx("img",{src:W,alt:"NepDate Logo",className:"w-9 h-9 rounded-md object-fill"})}),e.jsx("span",{className:"text-lg font-bold tracking-tight",style:{color:B.primary,fontFamily:l==="bs"?"'Noto Sans Devanagari', sans-serif":"inherit"},children:r("headerLogoBS")})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("h2",{className:"text-2xl font-bold",style:{color:B.headerTextColor},children:[D(t)," ",l==="bs"?J(i):i]}),e.jsx("p",{className:"text-sm uppercase tracking-wider font-semibold",style:{color:"rgba(255,255,255,0.8)"},children:r(l==="bs"?"bikramsambat":"gregorian")})]})]}),e.jsx("div",{className:"w-full flex flex-col relative print:min-h-0 print:overflow-hidden flex-1 mb-4",children:e.jsxs("div",{className:"flex flex-col w-full flex-1 print:h-full",children:[e.jsx("div",{className:`print:px-24 flex ${k?"flex-shrink-0 mb-2":"flex-1 mb-0"}`,children:e.jsx(te,{system:l,year:i,monthIndex:t,theme:B})}),k&&e.jsx("div",{className:"relative flex flex-col items-center justify-center mt-4 flex-1 print:min-h-0 print:mt-2 print:overflow-hidden",children:e.jsx("div",{className:"w-full px-8 print:px-12 text-center",children:e.jsx(me,{activeSystem:l,currentYear:i,currentMonth:t})})})]})}),e.jsxs("div",{className:"w-full flex-shrink-0 rounded-lg overflow-hidden",style:{background:B.footerGradient},children:[e.jsxs("div",{className:"flex flex-row items-center justify-center px-5 py-3 gap-4 text-left",children:[e.jsx("div",{className:"bg-theme-surface rounded-xl p-2 flex-shrink-0 shadow-sm",children:e.jsx("img",{src:W,alt:"NepDate",className:"w-10 h-10 object-contain"})}),e.jsx("div",{className:"block w-[2px] h-12 bg-theme-surface/40 flex-shrink-0"}),e.jsxs("div",{className:"flex-1 text-white text-sm font-semibold leading-relaxed",style:{fontFamily:"'Noto Sans Devanagari', sans-serif"},children:[r("printFooterDesc"),e.jsx("br",{className:"block"}),e.jsx("span",{className:"text-yellow-200 font-bold ml-0",children:"NepDate — Download from Google Play"})]}),e.jsx("div",{className:"flex-shrink-0 mt-0",children:e.jsx("img",{src:ae,alt:"GET IT ON Google Play",className:"h-12 object-contain"})})]}),e.jsx("div",{className:"flex justify-center pb-2",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"10",viewBox:"0 0 100 10",fill:"none",children:[e.jsx("path",{d:"M100 5C100 7.76 97.76 10 95 10H5C2.24 10 0 7.76 0 5C0 2.24 2.24 0 5 0H95C97.76 0 100 2.24 100 5Z",fill:"white",fillOpacity:"0.1"}),e.jsx("circle",{cx:"50",cy:"5",r:"3",fill:"white",fillOpacity:"0.3"}),e.jsx("circle",{cx:"40",cy:"5",r:"2",fill:"white",fillOpacity:"0.2"}),e.jsx("circle",{cx:"60",cy:"5",r:"2",fill:"white",fillOpacity:"0.2"})]})})]})]})})},`${i}-${t}`)})}):e.jsx("div",{className:"print:hidden w-full flex justify-center py-6",children:e.jsx("div",{className:"relative shadow-2xl rounded-3xl overflow-hidden bg-theme-surface w-[320px] h-[400px] sm:w-[400px] sm:h-[500px] md:w-[480px] md:h-[600px]",children:e.jsx("div",{className:"origin-top-left absolute top-0 left-0 w-[1000px] h-[1250px] scale-[0.32] sm:scale-[0.40] md:scale-[0.48]",children:e.jsx(X,{system:l,year:i,monthIndex:o,variant:T,highlightToday:v,isOffscreen:!1})})})})}),h&&G==="single"&&e.jsx(X,{system:l,year:i,monthIndex:o,variant:T,onLoad:()=>x(!0),highlightToday:v,isOffscreen:!0})]})};export{Be as default};
