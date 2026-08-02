const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-other-C6Ki0joy.js","assets/vendor-other-BUUTtNGK.css","assets/CalendarPrintPage-7u2rHa5i.js","assets/vendor-react-BDk2p-x1.js","assets/vendor-leaflet-Bjm2FGmM.js","assets/vendor-leaflet-Dgihpmma.css","assets/core-astro-CcDYoj54.js","assets/core-data-BzebUjTq.js","assets/index-CREIlcWl.js","assets/index-BkBxZLMi.css","assets/google-play-badge-DqQCrmxv.js","assets/MonthlyEvents-fA6OhZgb.js","assets/LoadingSpinner-2fgT1lW-.js","assets/PrintAdDialog-B4muGlaK.js","assets/DailySaaitPage-BVTHBrH2.js","assets/lib-CpjroEdF.js","assets/DayDetailPage-BNEF4ak5.js","assets/HeaderLogo-CjaPvsSG.js","assets/CalculationDetailsModal-GRmisqW_.js","assets/icons-BPzoVLUZ.js","assets/BirthChart-Cb9LKr-K.js","assets/kundali-B20ws3o6.js","assets/LocationModal-CKVuDP-j.js","assets/vendor-utils-Dr30av7h.js","assets/useTheme-BpJmGIz2.js","assets/BlogCard-bSgPnejN.js","assets/HomePage-_ibYpBYU.js","assets/LocationInfoBar-DtRvTKAI.js","assets/Muhurtas-GaRfmoYe.js","assets/RashifalWidget-Dmxa0__g.js","assets/rashifalLogic-CJAAma71.js","assets/BlogWidget-DDepGY1u.js","assets/SocialMedia-BgvhTG4N.js","assets/TimelinePage-Dz6D4Tui.js"])))=>i.map(i=>d[i]);
import{r as i,j as e,E as Ct,b as Re,S as $e,c as dt,R as $,d as Mt,X as Ye,e as Fe,M as Ae,P as Dt,D as ot,f as Kt,h as Et,i as Gt,L as Qt,k as _e,G as Zt,a as Xt,l as Jt,T as rt,m as pt,n as Xe,o as qt,p as ea,q as nt,U as ta,s as aa,t as sa,F as ut,u as ra}from"./vendor-react-BDk2p-x1.js";import{M as Ue,h as Je,a as qe,b as Oe,t as Se,g as At,c as Lt,d as et,e as Bt,_ as Me,f as me,i as Le,N as gt,j as Ve,k as zt,l as We,m as bt,s as na,S as Pt,n as ia,o as la,p as yt,P as Ge,T as oa,E as ca}from"./core-astro-CcDYoj54.js";import{u as pe,a as Te,A as Ft,P as da,R as ha,S as xa}from"./index-CREIlcWl.js";import{H as ht}from"./HeaderLogo-CjaPvsSG.js";import{C as Wt}from"./CalculationDetailsModal-GRmisqW_.js";import{g as ma,c as Qe}from"./lib-CpjroEdF.js";import{B as fa}from"./BirthChart-Cb9LKr-K.js";import{k as pa}from"./kundali-B20ws3o6.js";import{A as _t,G as Rt}from"./google-play-badge-DqQCrmxv.js";import{z as ua,e as ga}from"./vendor-other-C6Ki0joy.js";import{L as ba}from"./LocationModal-CKVuDP-j.js";import{u as ya}from"./useTheme-BpJmGIz2.js";import{B as va,g as $t,a as ja}from"./BlogCard-bSgPnejN.js";import{l as wa,m as ka,a as Na,b as Sa}from"./vendor-leaflet-Bjm2FGmM.js";const vt=({icon:t,label:n,isActive:l,onClick:g,className:m})=>e.jsxs("button",{onClick:u=>{u.stopPropagation(),g()},onTouchStart:u=>u.stopPropagation(),onMouseDown:u=>u.stopPropagation(),className:`flex flex-col items-center justify-center pt-2 pb-1 transition-colors ${l?"text-theme-primary dark:text-theme-primary":"text-theme-text dark:text-theme-text"} ${m??""}`,children:[t,e.jsx("span",{className:"text-[11px] mt-1 font-semibold font-rhodium truncate w-full block text-center px-0.5",children:n})]}),Ta=({activeView:t,onNavigate:n,menus:l=Ue,theme:g,onThemeToggle:m,themeLabel:u,setPopupBackAction:a})=>{const{t:c}=pe(),[h,d]=i.useState(!1),b=i.useRef(null);i.useEffect(()=>{h&&a?a(()=>d(!1)):!h&&a&&a(null);const o=M=>{b.current&&!b.current.contains(M.target)&&d(!1)};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o),a&&h&&a(null)}},[h,a]);const f=[];typeof window<"u"&&window.Android&&(f.push({key:"share",labelKey:"shareApp",icon:e.jsx($e,{className:"w-5 h-5"}),fixed:!1}),f.push({key:"rate",labelKey:"rateApp",icon:e.jsx(dt,{className:"w-5 h-5"}),fixed:!1}));const r=[...l,...f],v=r.filter(o=>o.fixed&&!o.hideOnTabMenu),y=r.filter(o=>!o.fixed&&!o.hideOnTabMenu);return e.jsxs("nav",{ref:b,className:`
        fixed bottom-0 left-0 right-0 w-full h-16
        bg-theme-surface dark:bg-theme-surface
        border-t border-gray-500 dark:border-gray-900
        shadow-md
        z-[9999] lg:hidden
      `,"aria-label":"Bottom navigation",onClick:o=>o.stopPropagation(),onTouchStart:o=>o.stopPropagation(),onMouseDown:o=>o.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center h-full w-full relative px-1 overflow-hidden",children:[v.map(o=>e.jsx(vt,{icon:o.icon,label:c(o.labelKey),isActive:t===o.key,onClick:()=>n(o.key),className:"flex-1 min-w-0"},o.key)),y.length>0&&e.jsx("div",{className:"relative text-[11px] font-semibold flex-none w-[72px] shrink-0",children:e.jsx(vt,{icon:e.jsx(Ct,{className:"w-5 h-5"}),label:c("more"),isActive:h,onClick:()=>d(o=>!o),className:"w-full font-rhodium"})})]}),h&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-transparent",onClick:o=>{o.stopPropagation(),d(!1)},onTouchStart:o=>{o.stopPropagation()},onMouseDown:o=>{o.stopPropagation()}}),e.jsxs("div",{className:`
              absolute
              bottom-[calc(4rem+8px)]
              right-1
              bg-theme-surface dark:bg-gray-700
              shadow-xl rounded-md
              w-64
              py-2
              border border-theme-border dark:border-theme-border
              z-[9999]
              space-y-1
            `,role:"menu",onClick:o=>o.stopPropagation(),onTouchStart:o=>o.stopPropagation(),onMouseDown:o=>o.stopPropagation(),children:[y.map(o=>e.jsxs("button",{type:"button",onClick:M=>{M.stopPropagation(),M.preventDefault(),o.key==="share"?Je():o.key==="rate"?qe():n(o.key),setTimeout(()=>d(!1),100)},className:`
                  w-full flex items-center gap-3 px-2 py-2
                  text-left text-[13px]
                  rounded-md
                  hover:bg-theme-bg dark:hover:bg-gray-600
                  focus:bg-theme-bg dark:focus:bg-gray-600
                  text-theme-text dark:text-theme-text
                `,role:"menuitem",children:[o.icon,e.jsx("span",{className:"truncate font-rhodium",children:c(o.labelKey)})]},o.key)),e.jsx("div",{className:"h-px bg-gray-200 dark:bg-gray-600 my-1 mx-2"}),e.jsxs("button",{type:"button",onClick:o=>{o.stopPropagation(),o.preventDefault(),Oe(),setTimeout(()=>d(!1),100)},className:`w-full flex items-center gap-3 px-2 py-2
                text-left text-[13px]
                rounded-md
                hover:bg-theme-bg dark:hover:bg-gray-600
                focus:bg-theme-bg dark:focus:bg-gray-600
                text-theme-text dark:text-theme-text`,children:[e.jsx(Re,{className:"w-4 h-4"}),c("reload")]})]})]})]})},Ia=[{id:"classic",name:"Classic",color:"bg-indigo-600"},{id:"classic-blue",name:"Classic Blue",color:"bg-blue-600"},{id:"royal-purple",name:"Royal Purple",color:"bg-purple-600"},{id:"sunrise-rose",name:"Sunrise Rose",color:"bg-rose-600"},{id:"ocean-teal",name:"Ocean Teal",color:"bg-teal-600"},{id:"rose-pink",name:"Rose Pink",color:"bg-pink-600"},{id:"crimson-red",name:"Crimson Red",color:"bg-red-600"},{id:"midnight-dark",name:"Midnight Dark",color:"bg-slate-700"},{id:"golden-yellow",name:"Golden Yellow",color:"bg-yellow-600"}],Ca=({isOpen:t,onClose:n,theme:l,onThemeToggle:g})=>{const{language:m,appTheme:u,updateAppTheme:a}=Te(),{t:c}=pe();return $.useEffect(()=>{if(!t)return;const h=d=>{d.target.closest(".theme-selector-container")||n()};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[t,n]),!t||typeof document>"u"?null:Mt.createPortal(e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4",style:{zIndex:99999},children:e.jsxs("div",{className:"w-full max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-5 theme-selector-container",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h3",{className:"text-lg font-bold text-gray-800 dark:text-gray-100",children:c("selectTheme")||"Select Theme"}),e.jsx("button",{onClick:n,className:"p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 transition-colors",children:e.jsx(Ye,{size:20})})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"text-[11px] font-extrabold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3 block font-rhodium",children:m==="en"?"Display Mode":"डिस्प्ले मोड"}),e.jsxs("div",{className:"flex p-1 bg-gray-100 dark:bg-black/40 rounded-xl shadow-inner border border-gray-200 dark:border-white/10 relative",children:[e.jsxs("button",{onClick:()=>{l!=="light"&&g()},className:`flex-1 py-2 flex items-center justify-center gap-2 text-xs font-bold rounded-lg transition-all duration-200 z-10 ${l==="light"?"bg-white text-gray-800 shadow-md transform scale-[1.02]":"text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800"}`,children:[e.jsx(Fe,{size:14})," ",m==="en"?"Light":"उज्यालो"]}),e.jsxs("button",{onClick:()=>{l!=="dark"&&g()},className:`flex-1 py-2 flex items-center justify-center gap-2 text-xs font-bold rounded-lg transition-all duration-200 z-10 ${l==="dark"?"bg-gray-800 text-white shadow-md transform scale-[1.02]":"text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800"}`,children:[e.jsx(Ae,{size:14})," ",m==="en"?"Dark":"अँध्यारो"]})]})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"text-[11px] font-extrabold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-1.5 font-rhodium",children:[e.jsx(Dt,{size:14,className:"opacity-70"})," ",m==="en"?"Color Theme":"रङ विषयवस्तु"]}),e.jsx("div",{className:"grid grid-cols-3 gap-3",children:Ia.map(h=>e.jsxs("button",{onClick:()=>{a(h.id),n()},className:`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${u===h.id?"border-theme-primary bg-theme-primary/10":"border-gray-100 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"}`,children:[e.jsx("div",{className:`w-6 h-6 sm:w-8 sm:h-8 rounded-full mb-2 ${h.color} shadow-sm`}),e.jsx("span",{className:"text-[10px] sm:text-xs text-center font-medium text-gray-700 dark:text-gray-300",children:h.name})]},h.id))})]})]})}),document.body)},Ma=({activeView:t,activeSystem:n,onNavigate:l,showInstall:g=!1,onInstallClick:m,theme:u,onThemeToggle:a})=>{const c=i.useRef(null),h=i.useRef(null),{t:d}=pe(),{language:b,updateLanguage:f}=Te(),r=["ne","en","hi"],v={ne:"ने",en:"EN",hi:"हि"},y=b==="auto"?"ne":b,o=r[(r.indexOf(y)+1)%r.length],[M,s]=i.useState([]),[A,Y]=i.useState([]),[E,V]=i.useState(!1),[R,H]=i.useState(!1),L=(T,B)=>{const P=document.createElement("canvas").getContext("2d");return P?(P.font=B,Math.ceil(P.measureText(T).width*1.1)):100};return i.useEffect(()=>{const T=()=>{if(!c.current)return;const B=4,K=24,P=16,ie=8,te=240,ae=c.current.offsetWidth,Q=180;let q=0;g&&(q=L(d("install_app"),"500 14px Inter")+32+20+20);const F=ae-Q-q-te,U=L(d("more"),'500 14px "Rhodium Libre", serif')+K+P+ie+B+8,x={key:"refresh",labelKey:"reload",icon:e.jsx(Re,{className:"w-5 h-5"}),fixed:!1},p=[];typeof window<"u"&&window.Android&&(p.push({key:"share",labelKey:"shareApp",icon:e.jsx($e,{className:"w-5 h-5"}),fixed:!1}),p.push({key:"rate",labelKey:"rateApp",icon:e.jsx(dt,{className:"w-5 h-5"}),fixed:!1}));const S=[...Ue.filter(N=>!N.hideOnTopNav),...p,x],j=S.map(N=>{const C=L(d(N.labelKey),'500 14px "Rhodium Libre", serif');return{...N,width:C+K+P+ie}});if(j.reduce((N,C,z)=>N+C.width+(z>0?B:0),0)<=F)s(S),Y([]);else{const N=F-U;let C=0;const z=[],O=[];j.forEach((ee,le)=>{const ce=ee.width+(le>0?B:0);C+ce<=N?(z.push(ee),C+=ce):O.push(ee)}),s(z),Y(O)}};return T(),document.fonts.ready.then(T),window.addEventListener("resize",T),()=>window.removeEventListener("resize",T)},[g,d,b]),i.useEffect(()=>{if(!E)return;const T=B=>{h.current&&!h.current.contains(B.target)&&V(!1)};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[E]),e.jsxs("nav",{ref:c,className:"hidden md:flex w-[calc(100%-2rem)] max-w-7xl 2xl:max-w-[1600px] mx-auto mt-3 mb-1 px-6 bg-white dark:bg-gray-800 h-[72px] items-center relative rounded-xl shadow-sm border border-theme-border/30 z-50",children:[e.jsx(ht,{activeSystem:n,className:"mr-6 flex-shrink-0",hideControl:t!=="calendar",isLight:!1}),e.jsxs("div",{className:"flex items-center gap-1 flex-1 min-w-0",children:[M.map(T=>e.jsxs("button",{onClick:()=>{T.key==="refresh"?Oe():T.key==="share"?Je():T.key==="rate"?qe():l(T.key)},className:`flex-shrink-0 px-3 py-2 rounded-full flex items-center gap-2 whitespace-nowrap text-sm font-medium font-rhodium transition-colors ${t===T.key?"bg-theme-bg dark:bg-gray-700 text-theme-primary shadow-sm":"text-theme-text-muted hover:text-theme-text hover:bg-slate-50 dark:hover:bg-gray-700"}`,children:[T.icon," ",e.jsx("span",{className:"font-rhodium",children:d(T.labelKey)})]},T.key)),A.length>0&&e.jsxs("div",{ref:h,className:"relative flex-shrink-0",children:[e.jsxs("button",{onClick:T=>{T.stopPropagation(),V(B=>!B)},className:"flex-shrink-0 px-3 py-2 rounded-full flex items-center gap-2 whitespace-nowrap text-theme-text-muted hover:text-theme-text hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors font-rhodium font-medium",children:[e.jsx(Ct,{className:"w-4 h-4"})," ",e.jsx("span",{className:"font-rhodium",children:d("more")})]}),E&&e.jsx("div",{className:"absolute left-0 top-full mt-1 w-48 bg-theme-surface dark:bg-gray-700 border border-theme-border dark:border-theme-border rounded-md shadow-lg flex flex-col z-[1000] py-1",children:A.map(T=>e.jsxs("button",{onClick:B=>{B.stopPropagation(),T.key==="refresh"?Oe():T.key==="share"?Je():T.key==="rate"?qe():l(T.key),V(!1)},className:"px-4 py-2 text-left hover:bg-theme-bg dark:hover:bg-gray-600 flex items-center gap-2 whitespace-nowrap text-sm w-full font-rhodium",children:[T.icon," ",e.jsx("span",{className:"font-rhodium",children:d(T.labelKey)})]},T.key))})]})]}),e.jsxs("div",{className:"flex items-center gap-1 ml-4 flex-shrink-0",children:[e.jsx("button",{onClick:()=>f(o),className:"w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-gray-700 hover:bg-slate-100 dark:hover:bg-gray-600 transition-colors text-xs font-bold text-theme-text-muted hover:text-theme-text border border-theme-border/50","aria-label":"Toggle Language",title:`Language: ${y.toUpperCase()}`,children:v[y]||"ने"}),e.jsx("button",{onClick:()=>H(!0),className:"w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-gray-700 hover:bg-slate-100 dark:hover:bg-gray-600 transition-colors text-theme-text-muted hover:text-theme-text border border-theme-border/50","aria-label":"Color Theme",title:"Color Theme",children:e.jsx(Dt,{className:"w-5 h-5 text-theme-primary"})}),e.jsx(Ca,{isOpen:R,onClose:()=>H(!1),theme:u,onThemeToggle:a}),g&&m&&e.jsxs("button",{onClick:m,className:"px-5 py-2.5 rounded-full bg-theme-primary text-white hover:opacity-90 flex items-center gap-2 text-sm font-bold transition-opacity shadow-md whitespace-nowrap font-rhodium",children:[e.jsx(ot,{className:"w-4 h-4"}),e.jsx("span",{className:"font-rhodium",children:d("installApp")})]})]})]})},Da=()=>{const[t,n]=i.useState(!1),{t:l}=pe();return e.jsxs("footer",{className:"text-center py-3 sm:py-4 text-xs sm:text-sm text-theme-text-muted dark:text-theme-text-muted flex flex-wrap justify-center items-center",children:[e.jsxs("span",{className:"mr-1",children:["© ",new Date().getFullYear()," ",e.jsx("a",{href:"https://github.com/khumnath/nepdate",target:"_blank",rel:"noopener noreferrer",className:"underline hover:text-theme-text dark:hover:text-gray-200",children:"Nepdate Calendar Project"}),"."]}),e.jsx("span",{children:"All rights reserved."}),e.jsx("span",{className:"mx-2 hidden sm:inline text-gray-400",children:"|"}),e.jsx("button",{onClick:()=>n(!0),className:"underline hover:text-theme-text dark:hover:text-gray-200 mt-2 sm:mt-0",children:l("calculationDetails")}),t&&e.jsx(Wt,{onClose:()=>n(!1)})]})},Ie={calendar:t=>[{label:t("bsMonth_0"),value:"calendar",param:{month:0}},{label:t("bsMonth_1"),value:"calendar",param:{month:1}},{label:t("bsMonth_2"),value:"calendar",param:{month:2}},{label:t("bsMonth_3"),value:"calendar",param:{month:3}},{label:t("bsMonth_4"),value:"calendar",param:{month:4}},{label:t("bsMonth_5"),value:"calendar",param:{month:5}}],calendar_ad:t=>[{label:t("adMonth_0"),value:"calendar",param:{month:0}},{label:t("adMonth_1"),value:"calendar",param:{month:1}},{label:t("adMonth_2"),value:"calendar",param:{month:2}},{label:t("adMonth_3"),value:"calendar",param:{month:3}},{label:t("adMonth_4"),value:"calendar",param:{month:4}},{label:t("adMonth_5"),value:"calendar",param:{month:5}}],calendar2:t=>[{label:t("bsMonth_6"),value:"calendar",param:{month:6}},{label:t("bsMonth_7"),value:"calendar",param:{month:7}},{label:t("bsMonth_8"),value:"calendar",param:{month:8}},{label:t("bsMonth_9"),value:"calendar",param:{month:9}},{label:t("bsMonth_10"),value:"calendar",param:{month:10}},{label:t("bsMonth_11"),value:"calendar",param:{month:11}}],calendar2_ad:t=>[{label:t("adMonth_6"),value:"calendar",param:{month:6}},{label:t("adMonth_7"),value:"calendar",param:{month:7}},{label:t("adMonth_8"),value:"calendar",param:{month:8}},{label:t("adMonth_9"),value:"calendar",param:{month:9}},{label:t("adMonth_10"),value:"calendar",param:{month:10}},{label:t("adMonth_11"),value:"calendar",param:{month:11}}],rashifal:t=>[{label:t("मेष","rashi"),value:"rashifal",param:"mesh"},{label:t("वृष","rashi"),value:"rashifal",param:"brish"},{label:t("मिथुन","rashi"),value:"rashifal",param:"mithun"},{label:t("कर्कट","rashi"),value:"rashifal",param:"karkat"},{label:t("सिंह","rashi"),value:"rashifal",param:"simha"},{label:t("कन्या","rashi"),value:"rashifal",param:"kanya"}],rashifal2:t=>[{label:t("तुला","rashi"),value:"rashifal",param:"tula"},{label:t("वृश्चिक","rashi"),value:"rashifal",param:"brishchik"},{label:t("धनु","rashi"),value:"rashifal",param:"dhanu"},{label:t("मकर","rashi"),value:"rashifal",param:"makar"},{label:t("कुम्भ","rashi"),value:"rashifal",param:"kumbha"},{label:t("मीन","rashi"),value:"rashifal",param:"meen"}],services:t=>[{label:t("converter"),value:"converter"},{label:t("rashifalMenu")||t("rashifalTitle")||"Horoscope",value:"rashifal"},{label:t("kundali"),value:"kundali"},{label:t("eclipse"),value:"eclipse"},{label:t("radio"),value:"radio"},{label:t("facebook"),value:"facebook"}]},Ea=({onNavigate:t})=>{const{t:n,language:l,tAstro:g,calendarSystem:m}=pe(),[u,a]=i.useState(!1),c=(h,d,b)=>{h.preventDefault(),t(d,b),d==="calendar"?setTimeout(()=>{const f=document.getElementById("main-calendar-grid");f?f.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})},100):window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs("footer",{className:"hidden md:block bg-theme-bg dark:bg-theme-bg border-t border-theme-border dark:border-theme-border pt-10 pb-8 mt-auto",children:[e.jsxs("div",{className:"max-w-7xl xl:max-w-6xl mx-auto px-4 md:px-6",children:[e.jsxs("div",{className:"grid grid-cols-4 gap-8 mb-10",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-theme-text dark:text-theme-text font-bold mb-4 uppercase text-sm tracking-wider font-rhodium",children:m==="ad"?l==="en"?"Gregorian Calendar":l==="hi"?"ग्रेगोरियन कैलेंडर":"अंग्रेजी क्यालेण्डर":l==="en"?"Vikram Calendar":l==="hi"?"विक्रम कैलेंडर":"विक्रम क्यालेण्डर"}),e.jsxs("div",{className:"grid grid-cols-2 gap-x-4",children:[e.jsx("ul",{className:"space-y-2 text-sm text-theme-text-muted dark:text-theme-text-muted",children:(m==="ad"?Ie.calendar_ad(n):Ie.calendar(n)).map((h,d)=>e.jsx("li",{children:e.jsx("button",{onClick:b=>c(b,h.value,h.param),className:"hover:text-theme-primary dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:h.label})},d))}),e.jsx("ul",{className:"space-y-2 text-sm text-theme-text-muted dark:text-theme-text-muted",children:(m==="ad"?Ie.calendar2_ad(n):Ie.calendar2(n)).map((h,d)=>e.jsx("li",{children:e.jsx("button",{onClick:b=>c(b,h.value,h.param),className:"hover:text-theme-primary dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:h.label})},d))})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-theme-text dark:text-theme-text font-bold mb-4 uppercase text-sm tracking-wider font-rhodium",children:l==="en"?"Horoscope":"राशिफल (Horoscope)"}),e.jsxs("div",{className:"grid grid-cols-2 gap-x-4",children:[e.jsx("ul",{className:"space-y-2 text-sm text-theme-text-muted dark:text-theme-text-muted",children:Ie.rashifal(g).map((h,d)=>e.jsx("li",{children:e.jsx("button",{onClick:b=>c(b,h.value,h.param),className:"hover:text-theme-primary dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:h.label})},d))}),e.jsx("ul",{className:"space-y-2 text-sm text-theme-text-muted dark:text-theme-text-muted",children:Ie.rashifal2(g).map((h,d)=>e.jsx("li",{children:e.jsx("button",{onClick:b=>c(b,h.value,h.param),className:"hover:text-theme-primary dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:h.label})},d))})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-theme-text dark:text-theme-text font-bold mb-4 uppercase text-sm tracking-wider font-rhodium",children:l==="en"?"Services":l==="hi"?"सेवाएं (Services)":"सेवाहरू (Services)"}),e.jsx("ul",{className:"space-y-2 text-sm text-theme-text-muted dark:text-theme-text-muted",children:Ie.services(n).map((h,d)=>e.jsx("li",{children:e.jsx("button",{onClick:b=>c(b,h.value),className:"hover:text-theme-primary dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:h.label})},d))})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-4 -ml-2",children:e.jsx(ht,{activeSystem:"bs"})}),e.jsx("p",{className:"text-sm text-theme-text-muted dark:text-theme-text-muted mb-6 leading-relaxed",children:l==="en"?"Your trusted partner for Nepali dates, festivals, astrology, and muhurtas.":l==="hi"?"नेपाली तिथियों, त्योहारों, ज्योतिष और मुहूर्तों के लिए आपका विश्वसनीय साथी।":"नेपाली मिति, चाडबाड, ज्योतिष र मुहूर्तहरूको लागि तपाईंको भरपर्दो पात्रो।"}),e.jsx("a",{href:"https://play.google.com/store/apps/details?id=com.khumnath.nepdate",target:"_blank",rel:"noopener noreferrer",className:"inline-block mb-6",children:e.jsx("img",{src:"/images/en_badge_web_generic.png",alt:"Get it on Google Play",className:"h-16 -ml-3"})}),e.jsxs("ul",{className:"space-y-2 text-sm text-theme-text-muted dark:text-theme-text-muted",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(Kt,{className:"w-4 h-4 shrink-0"}),e.jsx("span",{children:"aksharlabstudio1@gmail.com"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(Et,{className:"w-4 h-4 shrink-0"}),e.jsx("span",{children:l==="en"?"Butwal, Nepal":"बुटवल, नेपाल"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(Gt,{className:"w-4 h-4 shrink-0"}),e.jsx("a",{href:"https://www.facebook.com/people/NepDate-Patro/61584433679641/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-theme-primary transition-colors",children:l==="en"?"NepDate Patro":"नेपडेट पात्रो"})]})]})]})]}),e.jsxs("div",{className:"border-t border-theme-border dark:border-theme-border pt-6 text-center flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4",children:[e.jsxs("p",{className:"text-sm text-theme-text-muted dark:text-theme-text-muted",children:["© ",new Date().getFullYear()," ",l==="en"?"NepDate Patro. All Rights Reserved.":"नेपडेट पात्रो। सर्वाधिकार सुरक्षित।"]}),e.jsx("span",{className:"hidden sm:inline text-gray-400",children:"|"}),e.jsx("button",{onClick:()=>a(!0),className:"text-sm text-theme-text-muted dark:text-theme-text-muted underline hover:text-theme-text dark:hover:text-gray-200 transition-colors",children:n("calculationDetails")})]})]}),u&&e.jsx(Wt,{onClose:()=>a(!1)})]})},Ut=(t,n,l,g,m,u=null,a=[],c=null)=>{const h=new Date,d=Math.floor((h.getTime()-new Date(h.getFullYear(),0,0).getTime())/1e3/60/60/24),b=[`आज साताको ${t}। `,`आज ${t}को दिन। `,`आज ${t} परेको छ। `,`आज सप्ताहको ${t}। `,`आज ${t}को शुभ दिन। `];let f=b[d%b.length];if(a&&a.length>0){const y=a.map(o=>o.name).join(" र ");f+=`आजको दिन ${y} परेको छ। `}l?(f+=`आज ${l} सम्म ${n} तिथि रहनेछ`,g?f+=` र त्यसपछि ${g} तिथि आरम्भ हुनेछ। `:f+="। "):f+=`आज दिनभर ${n} तिथि रहनेछ। `,u?f+=`साथै आज ${u} नक्षत्र र `:f+="आज ";let v={विष्कुम्भ:"यस योगमा गरिएको कार्यले प्रारम्भमा केही बाधा आए पनि अन्त्यमा सफलता दिलाउनेछ।",प्रीति:"यस योगले प्रेम, सद्भाव र पारिवारिक सुख वृद्धि गर्नेछ।",आयुष्मान:"यस योगले आयु र स्वास्थ्यमा सकारात्मक प्रभाव पार्नेछ।",आयुष्मान्:"यस योगले आयु र स्वास्थ्यमा सकारात्मक प्रभाव पार्नेछ।",सौभाग्य:"यस योगमा गरिएका कार्यले नाम जस्तै सौभाग्य र सुख लिएर आउनेछ।",शोभन:"यस योगले सम्पूर्ण कार्यमा सुन्दरता र शुभ फल प्रदान गर्नेछ।",अतिगण्ड:"यस योगमा कार्य गर्दा केही कठिनाइ आउन सक्ने भएकाले संयमता अपनाउनुहोला।",सुकर्मा:"यस योगले असल कर्मतर्फ प्रेरित गर्दै पुण्य र सफलता दिलाउनेछ।",धृति:"यस योगमा गरिएको धैर्यपूर्ण कार्यले स्थायी र उत्तम प्रतिफल दिनेछ।",शूल:"यस योगमा महत्त्वपूर्ण निर्णयहरू लिँदा विशेष होसियारी अपनाउनुहोला।",गण्ड:"यस योगमा नयाँ कार्यको थालनी गर्दा सावधानी अपनाउनु उपयुक्त हुनेछ।",वृद्धि:"यस योगले धन, ज्ञान र व्यवसायमा निरन्तर वृद्धि गराउनेछ।",ध्रुव:"यस योगमा सुरु गरिएका कार्यहरू स्थायी हुने र दीर्घकालीन लाभ दिनेछन्।",व्याघात:"यस योगमा अनावश्यक विवाद र वादविवादबाट टाढै रहनु बेस हुनेछ।",हर्षण:"यस योगले मनमा प्रशन्नता ल्याउने र कार्यमा उत्साह जगाउनेछ।",वज्र:"यस योगमा गरिएको कार्यले वज्र जस्तै बलियो र दृढ परिणाम दिनेछ।",सिद्धि:"यस योगले सम्पूर्ण कार्यमा सिद्धि (सफलता) र मनोकामना पूर्ण गराउनेछ।",व्यतीपात:"यस योगमा ठूला र महत्त्वपूर्ण निर्णयहरू लिँदा पुनर्विचार गर्नुहोला।",वरीयान्:"यस योगले जीवनमा श्रेष्ठता, सम्मान र उच्च सफलता दिलाउनेछ।",परिघ:"यस योगमा कार्य गर्दा केही बाधाहरू आउन सक्ने भएकाले धैर्यता अपनाउनुहोला।",शिव:"यस योगले महादेवको कृपास्वरूप सम्पूर्ण कार्यमा कल्याण र शान्ति ल्याउनेछ।",सिद्ध:"यस योगमा थालिएका कामहरू विना कुनै विघ्नबाधा सम्पन्न हुनेछन्।",साध्य:"यस योगले असम्भव जस्तो लाग्ने कार्यलाई पनि सहजै साध्न (पुरा गर्न) मद्दत गर्नेछ।",शुभ:"यस योगले जीवनका हरेक क्षेत्रमा शुभ फल र मङ्गलमय परिणाम दिनेछ।",शुक्ल:"यस योगले ज्ञान, पवित्रता र कार्यमा उज्ज्वलता प्रदान गर्नेछ।",ब्रह्म:"यस योगले आध्यात्मिक चिन्तन र विद्या अध्ययनमा विशेष सफलता दिनेछ।",इन्द्र:"यस योगले नेतृत्व क्षमता, राज्यसुख र प्रशासनिक कार्यमा विजय दिलाउनेछ।",वैधृति:"यस योगमा नयाँ लगानी वा महत्त्वपूर्ण कार्य गर्दा सजग रहनुहोला।"}[m];if(!v){const y=["यस योगमा गरिएका कार्यहरूमा शुभ फल मिल्ने विश्वास गरिन्छ।","यस योगले सामान्यतया सकारात्मक र मङ्गलमय परिणाम दिनेछ।","यस योगमा थालिएका सम्पूर्ण सत्कर्महरूमा सफलता प्राप्त हुनेछ।","यस योगको प्रभावले दैनिक कार्यहरू विना कुनै बाधा सम्पन्न हुनेछन्।","यस योगले आजको दिनलाई सुखद र फलदायी बनाउन मद्दत गर्नेछ।"],o=new Date,M=Math.floor((o.getTime()-new Date(o.getFullYear(),0,0).getTime())/1e3/60/60/24);v=y[M%y.length]}if(f+=`आज ${m} योग परेको छ। ${v} `,c&&c.isActiveCivil){const o={bhadraResidenceEarth:"मृत्यु लोक (पृथ्वी)",bhadraResidenceHeaven:"स्वर्ग लोक (स्वर्ग)",bhadraResidenceUnderworld:"पाताल लोक (पाताल)"}[c.residence]||c.residence;c.isHarmful?f+=`ध्यान दिनुहोला, आज ${o}मा भद्रा परेको छ र यसको प्रभाव अशुभ मानिन्छ। शुभ कार्यहरू भद्रा समयपछि मात्र गर्दा राम्रो हुनेछ।`:f+=`आज ${o}मा भद्रा रहे पनि यसको प्रभाव शुभ फलदायी मानिन्छ।`}else f+="आज गरिएका कार्यहरूमा शुभ फल मिल्ने विश्वास गरिन्छ।";return f},Aa=(t,n=[])=>{if(n&&n.length>0){const c=n[0].name,h=[`${c} को यस पावन अवसरमा व्रत, पूजापाठ तथा दान-पुण्य गर्नाले विशेष फल मिल्नेछ।`,`आज ${c} को विशेष दिन भएकाले इष्टदेवको आराधना गर्दा जीवनमा सुख र समृद्धि प्राप्त हुनेछ।`,`${c} को शुभ अवसरमा सम्पूर्ण परिवारको कल्याणको कामना गर्दै धार्मिक कार्यमा सहभागी हुनुहोला।`],d=new Date,b=Math.floor((d.getTime()-new Date(d.getFullYear(),0,0).getTime())/1e3/60/60/24);return h[b%h.length]}const l={0:["आज आइतबार भगवान सूर्य नारायणको उपासना र आदित्य हृदय स्तोत्रको पाठ गर्नाले तेज, ऊर्जा र सफलता प्राप्त हुनेछ।","सूर्यदेवलाई अर्घ्य दिएर दिनको आरम्भ गर्नुहोस्, सम्पूर्ण कार्यहरूमा सिद्धि मिल्नेछ।"],1:["आज सोमबार भगवान शिवको आराधना र जल अभिषेक गर्नाले मानसिक शान्ति र सुख प्राप्त हुनेछ।","महादेवको पूजा अर्चना गर्दै ॐ नमः शिवाय मन्त्रको जप गर्नुहोला, दिन शुभ रहनेछ।"],2:["आज मंगलबार संकटमोचन हनुमानजीको दर्शन र हनुमान चालिसा पाठ गर्नाले सम्पूर्ण विघ्न-बाधा दूर हुनेछन्।","बजरङ्गबलीको कृपाले तपाईंका कार्यहरू निर्विघ्न सम्पन्न हुनेछन्। आज रातो वस्त्र धारण गर्नु शुभ मानिन्छ।"],3:["आज बुधबार भगवान गणेश र श्रीकृष्णको पूजा आराधना गर्नाले बुद्धि र विवेकमा वृद्धि हुनेछ।","श्रीहरि विष्णुको स्मरण गर्दै दिनको सुरुवात गर्नुहोला, घर-परिवारमा प्रेम र सद्भाव बनिरहनेछ।"],4:["आज बिहीबार भगवान विष्णु र बृहस्पति देवको पूजा गर्नाले शिक्षा, ज्ञान र धनमा वृद्धि हुनेछ।","आजको दिन पहेँलो वस्त्र धारण गर्नु र गुरुजनको आशीर्वाद लिनु अत्यन्त शुभ मानिन्छ।"],5:["आज शुक्रबार माता लक्ष्मी र सन्तोषी माताको आराधना गर्नाले घरमा धन-धान्य र सुख-समृद्धिले बास गर्नेछ।","माता भगवतीको स्मरण गर्दै कन्याहरूलाई दान गर्नाले विशेष शुभ फल प्राप्त हुनेछ।"],6:["आज शनिबार न्यायका देवता शनिदेवको पूजा र पिपलको वृक्षमा जल चढाउनाले सम्पूर्ण कष्ट निवारण हुनेछन्।","शनिदेवको कृपा प्राप्त गर्न आज गरिब तथा दुःखीहरूलाई सहयोग गर्नु अत्यन्त फलदायी मानिन्छ।"]},g=l[t]||l[0],m=new Date,a=Math.floor((m.getTime()-new Date(m.getFullYear(),0,0).getTime())/1e3/60/60/24)%g.length;return g[a]},La=["आइतवार","सोमवार","मंगलवार","बुधवार","बिहीवार","शुक्रवार","शनिवार"],Z=t=>Lt(t),jt=({data:t,date:n,onLoad:l,variant:g,isOffscreen:m=!1})=>{const{location:u}=Te(),a=j=>{if(!j)return"";try{const k=new Date(j);if(isNaN(k.getTime()))return"";const N=et(k,u.zoneId||"Asia/Kathmandu");let C=N.getUTCHours();const z=N.getUTCMinutes();let O="बिहान";return C>=12&&C<16?O="दिउँसो":C>=16&&C<20?O="बेलुका":(C>=20||C<4)&&(O="राति"),C>12&&(C-=12),C===0&&(C=12),`${O} ${Z(C)}:${Z(z<10?"0"+z:z)} सम्म`}catch{return""}},c=j=>{if(!j)return"—";try{const k=new Date(j);if(isNaN(k.getTime()))return"—";const N=et(k,u.zoneId||"Asia/Kathmandu");let C=N.getUTCHours();const z=N.getUTCMinutes();let O="बिहान";return C>=12&&C<16?O="दिउँसो":C>=16&&C<20?O="बेलुका":(C>=20||C<4)&&(O="राति"),C>12&&(C-=12),C===0&&(C=12),`${Z(C)}:${Z(z<10?"0"+z:z)} ${O}`}catch{return"—"}};if($.useEffect(()=>{if(l){const j=setTimeout(l,500);return()=>clearTimeout(j)}},[l,t]),!t)return null;const h=Se(n),d=h?.year?h.year.toString():"0",b=h?.monthName||"",f=h?.day||0,r=At(n),v=La[r]||"",o=`${["जनवरी","फेब्रुअरी","मार्च","अप्रिल","मे","जुन","जुलाई","अगस्ट","सेप्टेम्बर","अक्टोबर","नोभेम्बर","डिसेम्बर"][n.getUTCMonth()]} ${Z(n.getUTCDate())}, ${Z(n.getUTCFullYear())}`,M=t?.sunriseMs?new Date(t.sunriseMs):t?.sunriseIso?new Date(t.sunriseIso):null,s=t?.nextSunriseMs?new Date(t.nextSunriseMs):t?.nextSunriseIso?new Date(t.nextSunriseIso):null,A=j=>!j||!s||!M?j:j.filter(k=>{const N=k.startTime?new Date(k.startTime):null,C=k.endTime?new Date(k.endTime):null;return!(C&&C<=M||N&&N>=s)}),Y=A(t.tithis||[]),E=A(t.nakshatras||[]),V=A(t.yogas||[]),R=A(t.karanas||[]),H=A(t.moonRashis||[]),L=Y?.[0],T=Y?.[1],B=E?.[0],K=E?.[1],P=V?.[0],ie=V?.[1],te=R?.[0],ae=R?.[1],Q=H?.[0],q=Ut(v,L?.name||"",a(L?.endTime),T?.name||null,P?.name||"",B?.name||null,t.events,t.bhadra),F=Aa(r,t.events),U=(()=>{if(!t.sunriseIso||!t.sunsetIso||!t.nextSunriseIso)return{dinamanaGp:"—",ratrimanaGp:"—"};const j=t.sunriseMs??new Date(t.sunriseIso).getTime(),k=t.sunsetMs??new Date(t.sunsetIso).getTime(),N=t.nextSunriseMs??new Date(t.nextSunriseIso).getTime(),C=N-j,z=k-j,O=N-k,ee=le=>{const ce=le/C*60,se=Math.floor(ce),oe=Math.floor((ce-se)*60);return`${Z(se)} घडी ${Z(oe)} पला`};return{dinamanaGp:ee(z),ratrimanaGp:ee(O)}})(),x=t.ayana==="Uttarayana"?"उत्तरायण":t.ayana==="Dakshinayana"?"दक्षिणायन":t.ayana,p={1:{primary:"#1a237e",secondary:"#c62828",sidebar:"linear-gradient(180deg, #1565c0 0%, #0d47a1 50%, #1a237e 100%)",footer:"linear-gradient(95deg,#0a4f48 0%,#0f7269 22%,#17967f 42%,#4a9f6f 62%,#c9ac4e 82%,#e8bd45 100%)",bg:"linear-gradient(135deg, #f0f2f5, #e8eaed)"},2:{primary:"#4a148c",secondary:"#c2185b",sidebar:"linear-gradient(180deg, #7b1fa2 0%, #6a1b9a 50%, #4a148c 100%)",footer:"linear-gradient(95deg,#4a148c 0%,#6a1b9a 22%,#8e24aa 42%,#ab47bc 62%,#ce93d8 82%,#f48fb1 100%)",bg:"linear-gradient(135deg, #f3e5f5, #fce4ec)"},3:{primary:"#bf360c",secondary:"#b71c1c",sidebar:"linear-gradient(180deg, #e65100 0%, #d84315 50%, #bf360c 100%)",footer:"linear-gradient(95deg,#bf360c 0%,#d84315 22%,#e64a19 42%,#f4511e 62%,#ff8a65 82%,#ffcc80 100%)",bg:"linear-gradient(135deg, #fbe9e7, #fff3e0)"},4:{primary:"#006064",secondary:"#01579b",sidebar:"linear-gradient(180deg, #00838f 0%, #006064 50%, #004d40 100%)",footer:"linear-gradient(95deg,#004d40 0%,#00695c 22%,#00796b 42%,#00897b 62%,#4db6ac 82%,#80cbc4 100%)",bg:"linear-gradient(135deg, #e0f7fa, #e0f2f1)"},5:{primary:"#880e4f",secondary:"#e65100",sidebar:"linear-gradient(180deg, #c2185b 0%, #880e4f 50%, #4a148c 100%)",footer:"linear-gradient(95deg,#b71c1c 0%,#c62828 22%,#d32f2f 42%,#e53935 62%,#ffb300 82%,#ffca28 100%)",bg:"linear-gradient(135deg, #fce4ec, #fbe9e7)"}},S=p[g||1]||p[1];return e.jsx("div",{style:m?{position:"absolute",top:-9999,left:-9999,zIndex:-1,pointerEvents:"none"}:{},children:e.jsxs("div",{id:"panchanga-share-card",className:"poster",style:{"--theme-primary":S.primary,"--theme-secondary":S.secondary,"--theme-sidebar":S.sidebar,"--theme-footer":S.footer,"--theme-bg":S.bg},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Noto Sans Devanagari', sans-serif;
  background: #e8e8e8;
  display: flex;
  justify-content: center;
  padding: 20px;
}

.poster {
  width: 1000px;
  background: var(--theme-bg, #f0f2f5);
  position: relative;
  overflow: hidden;
  border-radius: 35px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

.sc-footer {
  display: flex;
  align-items: center;
  padding: 16px 34px;
  background: var(--theme-footer, linear-gradient(95deg,#0a4f48 0%,#0f7269 22%,#17967f 42%,#4a9f6f 62%,#c9ac4e 82%,#e8bd45 100%));
  position: relative;
  z-index: 10;
  overflow: hidden;
}
.sc-footer-divider { width:2px; height:76px; background:rgba(255,255,255,.4); margin:0 34px; }
.sc-footer-text { flex:1; color:#fff; font-size:24px; font-weight:600; line-height:1.55; }
.sc-footer-text .sc-hl { color:#fff6a0; font-weight:700; }
.sc-footer-ornament { position:absolute; bottom:16px; left:50%; transform:translateX(-50%); }

/* Mountain background */
.mountain-bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 500px;
  height: 200px;
  z-index: 0;
}

/* Header */
.header {
  position: relative;
  z-index: 1;
  padding: 15px 30px 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.logo-section {
  display: flex;
  flex-direction: column;
}

.logo-text {
  font-size: 40px;
  font-weight: 900;
  color: var(--theme-primary, #1a237e);
  letter-spacing: -1px;
}

.logo-text span {
  color: var(--theme-secondary, #c62828);
}

.logo-sub {
  font-size: 18px;
  color: var(--theme-primary, #1a237e);
  font-weight: 600;
  margin-top: -5px;
}

.title-section {
  text-align: center;
  flex: 1;
  margin-top: 10px;
}

.main-title {
  font-size: 38px;
  font-weight: 900;
  color: var(--theme-primary, #1a237e);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.main-title .red {
  color: var(--theme-secondary, #c62828);
}

.title-sub {
  font-size: 18px;
  color: #555;
  margin-top: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.title-sub::before,
.title-sub::after {
  content: '';
  width: 80px;
  height: 1px;
  background: var(--theme-primary, #1a237e);
}

/* Main content area */
.main-content {
  position: relative;
  z-index: 1;
  display: flex;
  padding: 0 20px 6px;
  gap: 15px;
}

/* Left sidebar */
.left-sidebar {
  width: 180px;
  min-width: 180px;
  background: var(--theme-sidebar, linear-gradient(180deg, #1565c0 0%, #0d47a1 50%, #1a237e 100%));
  border-radius: 12px;
  padding: 20px 8px;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sidebar-calendar-icon {
  margin-bottom: 0px;
}

.sidebar-label {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 2px;
}

.sidebar-big-date {
  font-size: 45px;
  font-weight: 900;
  line-height: 1;
  margin: 5px 0;
}

.sidebar-month {
  font-size: 25px;
  font-weight: 800;
  margin: 2px 0;
}

.sidebar-year {
  font-size: 28px;
  font-weight: 700;
  margin: 2px 0;
}

.sidebar-day {
  font-size: 22px;
  font-weight: 700;
  margin: 8px 0 2px;
}

.sidebar-gregorian {
  font-size: 14px;
  opacity: 0.9;
  line-height: 1.4;
}

/* Center content */
.center-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Date banner */
.date-banner {
  background: white;
  border-radius: 10px;
  padding: 12px 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.date-banner-icon {
  width: 45px;
  height: 45px;
  background: var(--theme-primary, #1a237e);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.date-banner-text {
  font-size: 20px;
  font-weight: 600;
  color: var(--theme-primary, #1a237e);
  white-space: nowrap;
}

.date-banner-text .red {
  color: var(--theme-secondary, #c62828);
}

.date-banner-sub {
  font-size: 15px;
  color: #666;
  margin-top: 2px;
}

/* Panchang boxes */
.panchang-row {
  display: flex;
  gap: 10px;
}

.panchang-box {
  flex: 1;
  background: white;
  border-radius: 10px;
  padding: 12px 8px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border: 1px solid #e0e0e0;
}

.panchang-box-icon {
  width: 45px;
  height: 45px;
  margin: 0 auto 6px;
  background: var(--theme-primary, #1a237e);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.panchang-box-label {
  font-size: 15px;
  font-weight: 700;
  color: var(--theme-primary, #1a237e);
  margin-bottom: 4px;
}

.panchang-box-value {
  font-size: 20px;
  font-weight: 800;
  color: var(--theme-secondary, #c62828);
  margin-bottom: 4px;
}

.panchang-box-time {
  font-size: 13px;
  font-weight: 600;
  color: #444;
  line-height: 1.3;
}

/* Right panel */
.right-panel {
  width: 170px;
  min-width: 170px;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.shubh-header {
  background: var(--theme-primary, #1a237e);
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 10px 10px 0 0;
  font-size: 18px;
  font-weight: 800;
}

.shubh-body {
  background: white;
  border-radius: 0 0 10px 10px;
  padding: 12px 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.shubh-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.shubh-item:last-child {
  border-bottom: none;
}

.shubh-item-icon {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
}

.shubh-item-label {
  font-size: 15px;
  font-weight: 600;
  color: #333;
}

.shubh-item-value {
  font-size: 17px;
  font-weight: 800;
  color: var(--theme-secondary, #c62828);
}

/* Other details section */
.other-details-section {
  position: relative;
  z-index: 1;
  padding: 0 20px;
  margin-bottom: 15px;
}

.other-details-header {
  background: var(--theme-primary, #1a237e);
  color: white;
  text-align: center;
  padding: 8px;
  border-radius: 8px 8px 0 0;
  font-size: 18px;
  font-weight: 800;
}

.other-details-body {
  background: white;
  border-radius: 8px;
  padding: 12px 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

.detail-icon {
  width: 32px;
  height: 32px;
}

.detail-label {
  font-size: 14px;
  color: #666;
  font-weight: 600;
}

.detail-value {
  font-size: 16px;
  font-weight: 800;
  color: var(--theme-secondary, #c62828);
}

/* Bottom sections */
.bottom-sections {
  position: relative;
  z-index: 1;
  display: flex;
  padding: 0 20px;
  gap: 15px;
  margin-bottom: 15px;
}

.special-box {
  flex: 1;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border: 1px solid #e0e0e0;
}

.special-header {
  background: var(--theme-secondary, #c62828);
  color: white;
  text-align: center;
  padding: 8px 20px;
  font-size: 16px;
  font-weight: 800;
  border-radius: 20px;
  display: inline-block;
  margin: 12px auto 0;
  white-space: nowrap;
}

.special-header-wrap {
  text-align: center;
}

.special-content {
  padding: 15px;
  font-size: 13px;
  line-height: 1.8;
  color: #333;
  display: flex;
  align-items: center;
  gap: 12px;
}

.special-decor {
  flex-shrink: 0;
}

.message-box {
  flex: 1;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border: 1px solid #e0e0e0;
}

.message-header {
  background: var(--theme-primary, #1a237e);
  color: white;
  text-align: center;
  padding: 8px 20px;
  font-size: 16px;
  font-weight: 800;
  border-radius: 20px;
  display: inline-block;
  margin: 12px auto 0;
  white-space: nowrap;
}

.message-header-wrap {
  text-align: center;
}

.message-content {
  padding: 15px;
  font-size: 13px;
  line-height: 1.8;
  color: #333;
  display: flex;
  align-items: center;
  gap: 12px;
}

.message-decor {
  flex-shrink: 0;
}

.message-footer-text {
  text-align: center;
  font-size: 16px;
  font-weight: 800;
  color: var(--theme-primary, #1a237e);
  padding: 5px 15px 15px;
}

/* App section */
.app-section {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 10px 20px 20px;
  gap: 20px;
}

.phone-mockup {
  width: 160px;
  flex-shrink: 0;
}

.app-text-section {
  flex: 1;
}

.app-text-main {
  font-size: 20px;
  font-weight: 800;
  color: var(--theme-primary, #1a237e);
  line-height: 1.5;
}

.app-text-main .red {
  color: var(--theme-secondary, #c62828);
}

.google-play-btn {
  display: inline-flex;
  align-items: center;
  background: #000;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  margin-top: 10px;
  gap: 8px;
}

.google-play-btn .gp-text {
  font-size: 12px;
  opacity: 0.8;
}

.google-play-btn .gp-store {
  font-size: 22px;
  font-weight: 700;
}

/* Footer */
.footer {
  background: var(--theme-primary, #1a237e);
  padding: 12px 20px;
  display: flex;
  justify-content: center;
  gap: 30px;
  position: relative;
  z-index: 1;
}

.footer-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-size: 13px;
  font-weight: 600;
}

.footer-icon {
  width: 24px;
  height: 24px;
}
`}}),e.jsxs("svg",{className:"mountain-bg",viewBox:"0 0 500 200",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"skyGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#b3d4f0"}),e.jsx("stop",{offset:"100%",stopColor:"#e8f0f8"})]}),e.jsxs("linearGradient",{id:"mountainGrad1",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),e.jsx("stop",{offset:"40%",stopColor:"#d0dce8"}),e.jsx("stop",{offset:"100%",stopColor:"#8fa4b8"})]}),e.jsxs("linearGradient",{id:"mountainGrad2",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#e8eef4"}),e.jsx("stop",{offset:"100%",stopColor:"#a0b4c8"})]})]}),e.jsx("rect",{width:"500",height:"200",fill:"url(#skyGrad)",opacity:"0.5"}),e.jsx("path",{d:"M100,180 L180,60 L220,90 L280,30 L340,80 L400,50 L460,100 L500,80 L500,200 L100,200 Z",fill:"url(#mountainGrad2)",opacity:"0.6"}),e.jsx("path",{d:"M150,180 L220,80 L260,110 L310,50 L370,90 L420,60 L470,110 L500,90 L500,200 L150,200 Z",fill:"url(#mountainGrad1)",opacity:"0.8"}),e.jsx("path",{d:"M280,30 L295,55 L270,50 Z",fill:"white",opacity:"0.9"}),e.jsx("path",{d:"M310,50 L325,70 L300,65 Z",fill:"white",opacity:"0.8"}),e.jsx("path",{d:"M400,50 L415,70 L390,65 Z",fill:"white",opacity:"0.9"}),e.jsxs("g",{transform:"translate(380, 60)",children:[e.jsx("rect",{x:"10",y:"80",width:"60",height:"8",fill:"#8B4513",rx:"2"}),e.jsx("polygon",{points:"0,80 80,80 70,65 10,65",fill:"#654321"}),e.jsx("rect",{x:"15",y:"65",width:"50",height:"15",fill:"#8B6914"}),e.jsx("polygon",{points:"5,65 75,65 65,50 15,50",fill:"#654321"}),e.jsx("rect",{x:"20",y:"50",width:"40",height:"15",fill:"#8B6914"}),e.jsx("polygon",{points:"10,50 70,50 60,38 20,38",fill:"#654321"}),e.jsx("rect",{x:"25",y:"38",width:"30",height:"12",fill:"#8B6914"}),e.jsx("polygon",{points:"15,38 65,38 55,28 25,28",fill:"#654321"}),e.jsx("line",{x1:"40",y1:"28",x2:"40",y2:"10",stroke:"#DAA520",strokeWidth:"3"}),e.jsx("circle",{cx:"40",cy:"8",r:"4",fill:"#DAA520"}),e.jsx("rect",{x:"30",y:"70",width:"8",height:"8",fill:"#4a3010",rx:"1"}),e.jsx("rect",{x:"45",y:"70",width:"8",height:"8",fill:"#4a3010",rx:"1"})]})]}),e.jsxs("div",{className:"header",children:[e.jsx("div",{className:"logo-section",children:e.jsx("img",{src:_t,alt:"NepDate Logo",style:{height:60,objectFit:"contain"}})}),e.jsxs("div",{className:"title-section",children:[e.jsxs("div",{className:"main-title",children:[e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"5",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"25",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"5",cy:"15",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"25",cy:"15",r:"2.5",fill:"#c62828"})]}),e.jsx("span",{children:"आजको"}),e.jsx("span",{className:"red",children:"पञ्चाङ्ग"}),e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"5",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"25",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"5",cy:"15",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"25",cy:"15",r:"2.5",fill:"#c62828"})]})]}),e.jsx("div",{className:"title-sub",children:"हरेक दिनको विश्वास"})]}),e.jsx("div",{style:{width:"120px"}})]}),e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"left-sidebar",children:[e.jsxs("svg",{className:"sidebar-calendar-icon",width:"40",height:"40",viewBox:"0 0 40 40",children:[e.jsx("rect",{x:"5",y:"8",width:"30",height:"28",rx:"3",fill:"none",stroke:"white",strokeWidth:"2"}),e.jsx("line",{x1:"5",y1:"16",x2:"35",y2:"16",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"10",y:"4",width:"4",height:"8",rx:"1",fill:"white"}),e.jsx("rect",{x:"26",y:"4",width:"4",height:"8",rx:"1",fill:"white"}),e.jsx("rect",{x:"10",y:"20",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"17.5",y:"20",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"25",y:"20",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"10",y:"27",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"17.5",y:"27",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"25",y:"27",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"})]}),e.jsx("div",{className:"sidebar-label",children:"विक्रम संवत्"}),e.jsx("div",{className:"sidebar-big-date",children:Z(f)}),e.jsx("div",{className:"sidebar-month",children:b}),e.jsx("div",{className:"sidebar-year",children:Z(d).slice(-2)}),e.jsx("div",{className:"sidebar-day",children:v}),e.jsxs("div",{className:"sidebar-gregorian",children:["तद्नुसार",e.jsx("br",{}),o]})]}),e.jsxs("div",{className:"center-content",children:[e.jsxs("div",{className:"date-banner",children:[e.jsx("div",{className:"date-banner-icon",children:e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",children:[e.jsx("rect",{x:"3",y:"6",width:"22",height:"20",rx:"2",fill:"none",stroke:"white",strokeWidth:"2"}),e.jsx("line",{x1:"3",y1:"12",x2:"25",y2:"12",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"7",y:"2",width:"3",height:"6",rx:"1",fill:"white"}),e.jsx("rect",{x:"18",y:"2",width:"3",height:"6",rx:"1",fill:"white"})]})}),e.jsxs("div",{style:{flex:1,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px",whiteSpace:"nowrap"},children:[e.jsxs("div",{className:"date-banner-text",style:{fontSize:"18px"},children:["विक्रम संवत् ",e.jsx("span",{className:"red",children:Z(d)})," ",b," ",Z(f)," गते"]}),t.nepalSambatYear&&e.jsxs("div",{className:"date-banner-sub",style:{fontSize:"14px",color:"#1a237e",fontWeight:600},children:["नेपाल संवत् ",Z(t.nepalSambatYear)," ",t.nepalSambatMonthName," ",Z(t.nepalSambatDay)]}),e.jsxs("div",{className:"date-banner-sub",children:["तद्नुसार ",o]})]}),e.jsx("div",{style:{fontSize:"24px",fontWeight:900,color:"#c62828",borderLeft:"2px solid #eee",paddingLeft:"20px",paddingRight:"10px"},children:v})]})]}),e.jsxs("div",{className:"panchang-row",children:[e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("path",{d:"M18,5 A12,12 0 1,0 18,25 A8,8 0 1,1 18,5",fill:"#ffd700"}),e.jsx("circle",{cx:"10",cy:"10",r:"1.5",fill:"white"}),e.jsx("circle",{cx:"20",cy:"15",r:"1",fill:"white"}),e.jsx("circle",{cx:"12",cy:"22",r:"1",fill:"white"})]})}),e.jsx("div",{className:"panchang-box-label",children:"तिथि"}),e.jsx("div",{className:"panchang-box-value",children:L?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:L?.endTime?`(${a(L.endTime)})`:""}),T?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),T.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"none",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("circle",{cx:"15",cy:"6",r:"2",fill:"#ffd700"}),e.jsx("circle",{cx:"22",cy:"10",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"24",cy:"18",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"20",cy:"24",r:"2",fill:"#ffd700"}),e.jsx("circle",{cx:"12",cy:"24",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"7",cy:"18",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"8",cy:"10",r:"2",fill:"#ffd700"}),e.jsx("line",{x1:"15",y1:"6",x2:"22",y2:"10",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"22",y1:"10",x2:"24",y2:"18",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"24",y1:"18",x2:"20",y2:"24",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"20",y1:"24",x2:"12",y2:"24",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"12",y1:"24",x2:"7",y2:"18",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"7",y1:"18",x2:"8",y2:"10",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"8",y1:"10",x2:"15",y2:"6",stroke:"#ffd700",strokeWidth:"0.8"})]})}),e.jsx("div",{className:"panchang-box-label",children:"नक्षत्र"}),e.jsx("div",{className:"panchang-box-value",children:B?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:B?.endTime?`(${a(B.endTime)})`:""}),K?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),K.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"8",r:"4",fill:"#ffd700"}),e.jsx("path",{d:"M15,12 L15,20 M10,16 L20,16 M12,20 L15,26 L18,20",stroke:"#ffd700",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),e.jsx("circle",{cx:"15",cy:"15",r:"10",fill:"none",stroke:"#ffd700",strokeWidth:"1",opacity:"0.5"})]})}),e.jsx("div",{className:"panchang-box-label",children:"योग"}),e.jsx("div",{className:"panchang-box-value",children:P?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:P?.endTime?`(${a(P.endTime)})`:""}),ie?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),ie.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"#1a237e"}),e.jsx("path",{d:"M15,3 A12,12 0 0,1 15,27 A8,8 0 0,0 15,3",fill:"#ffd700"})]})}),e.jsx("div",{className:"panchang-box-label",children:"करण"}),e.jsx("div",{className:"panchang-box-value",children:te?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:te?.endTime?`(${a(te.endTime)})`:""}),ae?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),ae.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"none",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("circle",{cx:"15",cy:"15",r:"8",fill:"none",stroke:"#ffd700",strokeWidth:"1"}),e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"none",stroke:"#ffd700",strokeWidth:"1"}),e.jsx("line",{x1:"15",y1:"3",x2:"15",y2:"7",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("line",{x1:"15",y1:"23",x2:"15",y2:"27",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("line",{x1:"3",y1:"15",x2:"7",y2:"15",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("line",{x1:"23",y1:"15",x2:"27",y2:"15",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("circle",{cx:"15",cy:"15",r:"2",fill:"#ffd700"})]})}),e.jsx("div",{className:"panchang-box-label",children:"चन्द्र राशि"}),e.jsx("div",{className:"panchang-box-value",children:Q?.name||"—"})]})]}),e.jsxs("div",{className:"other-details-body",children:[e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#1a237e"}),e.jsx("line",{x1:"4",y1:"12",x2:"28",y2:"12",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"8",y:"2",width:"4",height:"6",rx:"1",fill:"#1a237e"}),e.jsx("rect",{x:"20",y:"2",width:"4",height:"6",rx:"1",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"वार"}),e.jsx("div",{className:"detail-value",children:v})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#1a237e"}),e.jsx("path",{d:"M16,4 A12,12 0 0,1 16,28 A8,8 0 0,0 16,4",fill:"#ffd700"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"पक्ष"}),e.jsx("div",{className:"detail-value",children:t.paksha||""})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#7b1fa2"}),e.jsx("line",{x1:"4",y1:"12",x2:"28",y2:"12",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"8",y:"2",width:"4",height:"6",rx:"1",fill:"#7b1fa2"}),e.jsx("rect",{x:"20",y:"2",width:"4",height:"6",rx:"1",fill:"#7b1fa2"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"मास"}),e.jsx("div",{className:"detail-value",children:t.lunarMonth||""})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#2e7d32"}),e.jsx("path",{d:"M10,20 Q16,12 22,20 Q16,24 10,20",fill:"#81c784"}),e.jsx("line",{x1:"16",y1:"20",x2:"16",y2:"26",stroke:"#81c784",strokeWidth:"2"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"ऋतु"}),e.jsx("div",{className:"detail-value",children:t.ritu||""})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#c62828"}),e.jsx("line",{x1:"4",y1:"12",x2:"28",y2:"12",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"8",y:"2",width:"4",height:"6",rx:"1",fill:"#c62828"}),e.jsx("rect",{x:"20",y:"2",width:"4",height:"6",rx:"1",fill:"#c62828"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"संवत्सर"}),e.jsx("div",{className:"detail-value",children:t.samvatsar||""})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#5e35b1"}),e.jsx("path",{d:"M10,16 Q16,10 22,16 Q16,22 10,16",fill:"#b39ddb"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"अयन"}),e.jsx("div",{className:"detail-value",children:x||"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#00acc1"}),e.jsx("path",{d:"M12,16 L16,12 L20,16 L16,20 Z",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"आनन्दादि योग"}),e.jsx("div",{className:"detail-value",children:t.anandadiYoga?t.anandadiYoga.nameNe:"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#fdd835"}),e.jsx("circle",{cx:"16",cy:"16",r:"6",fill:"#f57f17"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"दिनमान"}),e.jsx("div",{className:"detail-value",children:U.dinamanaGp})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#3949ab"}),e.jsx("path",{d:"M12,10 A6,6 0 0,0 12,22 A8,8 0 0,1 12,10",fill:"#c5cae9"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"रात्रिमान"}),e.jsx("div",{className:"detail-value",children:U.ratrimanaGp})]})]})]})]}),e.jsxs("div",{className:"right-panel",children:[e.jsx("div",{className:"shubh-header",children:"शुभ समय"}),e.jsxs("div",{className:"shubh-body",children:[e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("circle",{cx:"18",cy:"20",r:"10",fill:"#ffd700"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#4fc3f7"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"सूर्योदय"}),e.jsx("div",{className:"shubh-item-value",children:c(t.sunriseIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("circle",{cx:"18",cy:"20",r:"10",fill:"#ff8a65"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#4fc3f7"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"सूर्यास्त"}),e.jsx("div",{className:"shubh-item-value",children:c(t.sunsetIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("path",{d:"M16,9 A9,9 0 0,0 16,25 A11,11 0 0,1 25,18 A9,9 0 0,0 16,9",fill:"#b0bec5"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"चन्द्रोदय"}),e.jsx("div",{className:"shubh-item-value",children:c(t.moonriseIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("path",{d:"M16,9 A9,9 0 0,0 16,25 A11,11 0 0,1 25,18 A9,9 0 0,0 16,9",fill:"none",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"चन्द्रास्त"}),e.jsx("div",{className:"shubh-item-value",children:c(t.moonsetIso)})]})]})]})]})]}),e.jsx("div",{className:"other-details-section",children:e.jsxs("div",{className:"other-details-body",children:[e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#1565c0"}),e.jsx("path",{d:"M12,12 Q16,16 12,20 A4,4 0 1,0 20,20 Q16,16 20,12 A4,4 0 1,0 12,12",fill:"none",stroke:"white",strokeWidth:"2"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"अहर्गण"}),e.jsx("div",{className:"detail-value",children:t.ahargana?Z(Math.floor(t.ahargana)):"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#e65100"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"}),e.jsx("line",{x1:"16",y1:"13",x2:"16",y2:"17",stroke:"#e65100",strokeWidth:"2"}),e.jsx("line",{x1:"16",y1:"17",x2:"19",y2:"17",stroke:"#e65100",strokeWidth:"2"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"जुलियन दिन"}),e.jsx("div",{className:"detail-value",children:t.julianDay?Z(Math.floor(t.julianDay)):"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#00897b"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"नेपाल संवत् (चान्द्र)"}),e.jsx("div",{className:"detail-value",children:t.nepalSambatYear?`${Z(t.nepalSambatYear)} ${t.nepalSambatMonthName} ${Z(t.nepalSambatDay)}`:"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#d81b60"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"नेपाल संवत् (सौर)"}),e.jsx("div",{className:"detail-value",children:t.nepalSambatSolar?`${Z(t.nepalSambatSolar.year)} ${t.nepalSambatSolar.monthNameNe} ${Z(t.nepalSambatSolar.day)}`:"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#6d4c41"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"शक वर्ष"}),e.jsx("div",{className:"detail-value",children:t.shakaYear?Z(t.shakaYear):"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#43a047"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"कलि वर्ष"}),e.jsx("div",{className:"detail-value",children:t.kaliYear?Z(t.kaliYear):"—"})]})]})]})}),e.jsxs("div",{className:"bottom-sections",children:[e.jsxs("div",{className:"special-box",children:[e.jsx("div",{className:"special-header-wrap",children:e.jsx("div",{className:"special-header",children:"आजको विशेष"})}),e.jsxs("div",{className:"special-content",children:[e.jsxs("svg",{className:"special-decor",width:"80",height:"100",viewBox:"0 0 80 100",children:[e.jsx("ellipse",{cx:"40",cy:"75",rx:"20",ry:"8",fill:"#8B4513"}),e.jsx("path",{d:"M25,75 Q25,60 40,55 Q55,60 55,75",fill:"#D2691E"}),e.jsx("ellipse",{cx:"40",cy:"55",rx:"15",ry:"5",fill:"#FFD700"}),e.jsx("path",{d:"M40,55 Q35,40 40,25 Q45,40 40,55",fill:"#FF6600"}),e.jsx("path",{d:"M40,50 Q37,42 40,32 Q43,42 40,50",fill:"#FFD700"}),e.jsx("path",{d:"M40,45 Q38,40 40,35 Q42,40 40,45",fill:"#FFF8DC"}),e.jsx("circle",{cx:"15",cy:"85",r:"8",fill:"#FF69B4"}),e.jsx("circle",{cx:"15",cy:"85",r:"4",fill:"#FFB6C1"}),e.jsx("circle",{cx:"10",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"20",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"10",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"20",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"65",cy:"85",r:"8",fill:"#FF69B4"}),e.jsx("circle",{cx:"65",cy:"85",r:"4",fill:"#FFB6C1"}),e.jsx("circle",{cx:"60",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"70",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"60",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"70",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("ellipse",{cx:"8",cy:"88",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(-30,8,88)"}),e.jsx("ellipse",{cx:"72",cy:"88",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(30,72,88)"})]}),e.jsx("div",{children:q})]})]}),e.jsxs("div",{className:"message-box",children:[e.jsx("div",{className:"message-header-wrap",children:e.jsx("div",{className:"message-header",children:"शुभ सन्देश"})}),e.jsxs("div",{className:"message-content",children:[e.jsxs("svg",{className:"message-decor",width:"70",height:"90",viewBox:"0 0 70 90",children:[e.jsx("path",{d:"M35,15 L25,30 Q20,40 22,55 Q24,65 30,75 L35,80 L40,75 Q46,65 48,55 Q50,40 45,30 Z",fill:"#FDBCB4",stroke:"#E8A090",strokeWidth:"1"}),e.jsx("line",{x1:"35",y1:"20",x2:"35",y2:"75",stroke:"#E8A090",strokeWidth:"1.5"}),e.jsx("path",{d:"M25,35 Q30,32 35,35",fill:"none",stroke:"#E8A090",strokeWidth:"1"}),e.jsx("path",{d:"M45,35 Q40,32 35,35",fill:"none",stroke:"#E8A090",strokeWidth:"1"}),e.jsx("path",{d:"M22,55 Q15,60 10,70 Q8,75 12,78 Q18,75 25,70 Z",fill:"#4169E1"}),e.jsx("path",{d:"M48,55 Q55,60 60,70 Q62,75 58,78 Q52,75 45,70 Z",fill:"#4169E1"})]}),e.jsxs("div",{children:['"',F,'"']}),e.jsxs("svg",{width:"50",height:"60",viewBox:"0 0 50 60",style:{flexShrink:"0"},children:[e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(0,25,20)"}),e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(72,25,20)"}),e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(144,25,20)"}),e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(216,25,20)"}),e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(288,25,20)"}),e.jsx("circle",{cx:"25",cy:"20",r:"5",fill:"#FFD700"}),e.jsx("line",{x1:"25",y1:"32",x2:"25",y2:"55",stroke:"#228B22",strokeWidth:"2"}),e.jsx("ellipse",{cx:"18",cy:"45",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(-30,18,45)"}),e.jsx("ellipse",{cx:"32",cy:"48",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(30,32,48)"})]})]}),e.jsx("div",{className:"message-footer-text",children:"✨ आजको दिन सुखद रहोस् ! ✨"})]})]}),e.jsxs("footer",{className:"sc-footer",children:[e.jsx("div",{style:{backgroundColor:"white",padding:10,borderRadius:12},children:e.jsx("img",{src:Ft,alt:"NepDate Logo",style:{height:48,objectFit:"contain"}})}),e.jsx("div",{className:"sc-footer-divider"}),e.jsxs("div",{className:"sc-footer-text",children:["विस्तृत पञ्चाङ्ग, राशिफल र शुभ साइतका लागि",e.jsx("br",{}),e.jsx("span",{className:"sc-hl",children:"NepDate नेपाली पात्रो App डाउनलोड गर्नुहोस् ।"})]}),e.jsx("div",{className:"sc-playstore",children:e.jsx("img",{src:Rt,alt:"GET IT ON Google Play",style:{height:80,objectFit:"contain"}})}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"sc-footer-ornament",width:"140",height:"16",viewBox:"0 0 140 16",fill:"none",children:[e.jsx("path",{d:"M140 8C140 12.4183 136.418 16 132 16H8C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0H132C136.418 0 140 3.58172 140 8Z",fill:"white",fillOpacity:"0.1"}),e.jsx("circle",{cx:"70",cy:"8",r:"4",fill:"white",fillOpacity:"0.3"}),e.jsx("circle",{cx:"56",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"}),e.jsx("circle",{cx:"84",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"})]})]})]})})},wt="/assets/left_ornament-CNOcf_Fy.svg",Ba="/assets/mountain_bg-CnO0L1Ge.webp",za=["आइतवार","सोमवार","मंगलवार","बुधवार","बिहीवार","शुक्रवार","शनिवार"],ve=t=>Lt(t),kt=({data:t,date:n,onLoad:l,variant:g,isOffscreen:m=!1})=>{const{location:u}=Te(),a=I=>{if(!I)return"";try{const U=new Date(I);if(isNaN(U.getTime()))return"";const x=et(U,u.zoneId||"Asia/Kathmandu");let p=x.getUTCHours();const S=x.getUTCMinutes();let j="बिहान";return p>=12&&p<16?j="दिउँसो":p>=16&&p<20?j="बेलुका":(p>=20||p<4)&&(j="राति"),p>12&&(p-=12),p===0&&(p=12),`${j} ${ve(p)}:${ve(S<10?"0"+S:S)} सम्म`}catch{return""}},c=I=>{if(!I)return"—";try{const U=new Date(I);if(isNaN(U.getTime()))return"—";const x=et(U,u.zoneId||"Asia/Kathmandu");let p=x.getUTCHours();const S=x.getUTCMinutes();let j="बिहान";return p>=12&&p<16?j="दिउँसो":p>=16&&p<20?j="बेलुका":(p>=20||p<4)&&(j="राति"),p>12&&(p-=12),p===0&&(p=12),`${ve(p)}:${ve(S<10?"0"+S:S)} ${j}`}catch{return"—"}};if($.useEffect(()=>{if(l){const I=setTimeout(l,500);return()=>clearTimeout(I)}},[l,t]),!t)return null;const h=Se(n),d=h?.year?h.year.toString():"0",b=h?.monthName||"",f=h?.day||0,r=At(n),v=za[r]||"",o=`${["जनवरी","फेब्रुअरी","मार्च","अप्रिल","मे","जुन","जुलाई","अगस्ट","सेप्टेम्बर","अक्टोबर","नोभेम्बर","डिसेम्बर"][n.getUTCMonth()]} ${ve(n.getUTCDate())}, ${ve(n.getUTCFullYear())}`,M=t?.sunriseMs?new Date(t.sunriseMs):t?.sunriseIso?new Date(t.sunriseIso):null,s=t?.nextSunriseMs?new Date(t.nextSunriseMs):t?.nextSunriseIso?new Date(t.nextSunriseIso):null,A=I=>!I||!s||!M?I:I.filter(U=>{const x=U.startTime?new Date(U.startTime):null,p=U.endTime?new Date(U.endTime):null;return!(p&&p<=M||x&&x>=s)}),Y=A(t.tithis||[]),E=A(t.nakshatras||[]),V=A(t.yogas||[]),R=A(t.karanas||[]),H=A(t.moonRashis||[]),L=Y?.[0],T=Y?.[1],B=E?.[0],K=E?.[1],P=V?.[0],ie=V?.[1],te=R?.[0],ae=R?.[1];H?.[0];const Q=Ut(v,L?.name||"",a(L?.endTime),T?.name||null,P?.name||"",B?.name||null,t.events,t.bhadra);t.ayana==="Uttarayana"||t.ayana==="Dakshinayana"||t.ayana;const q={1:{primary:"#1a237e",secondary:"#c62828",sidebar:"linear-gradient(180deg, #1565c0 0%, #0d47a1 50%, #1a237e 100%)",footer:"linear-gradient(95deg,#0a4f48 0%,#0f7269 22%,#17967f 42%,#4a9f6f 62%,#c9ac4e 82%,#e8bd45 100%)",bg:"linear-gradient(135deg, #f0f2f5, #e8eaed)"},2:{primary:"#4a148c",secondary:"#c2185b",sidebar:"linear-gradient(180deg, #7b1fa2 0%, #6a1b9a 50%, #4a148c 100%)",footer:"linear-gradient(95deg,#4a148c 0%,#6a1b9a 22%,#8e24aa 42%,#ab47bc 62%,#ce93d8 82%,#f48fb1 100%)",bg:"linear-gradient(135deg, #f3e5f5, #fce4ec)"},3:{primary:"#bf360c",secondary:"#b71c1c",sidebar:"linear-gradient(180deg, #e65100 0%, #d84315 50%, #bf360c 100%)",footer:"linear-gradient(95deg,#bf360c 0%,#d84315 22%,#e64a19 42%,#f4511e 62%,#ff8a65 82%,#ffcc80 100%)",bg:"linear-gradient(135deg, #fbe9e7, #fff3e0)"},4:{primary:"#006064",secondary:"#01579b",sidebar:"linear-gradient(180deg, #00838f 0%, #006064 50%, #004d40 100%)",footer:"linear-gradient(95deg,#004d40 0%,#00695c 22%,#00796b 42%,#00897b 62%,#4db6ac 82%,#80cbc4 100%)",bg:"linear-gradient(135deg, #e0f7fa, #e0f2f1)"},5:{primary:"#880e4f",secondary:"#e65100",sidebar:"linear-gradient(180deg, #c2185b 0%, #880e4f 50%, #4a148c 100%)",footer:"linear-gradient(95deg,#b71c1c 0%,#c62828 22%,#d32f2f 42%,#e53935 62%,#ffb300 82%,#ffca28 100%)",bg:"linear-gradient(135deg, #fce4ec, #fbe9e7)"}},F=q[g||1]||q[1];return e.jsx("div",{style:m?{position:"absolute",top:-9999,left:-9999,zIndex:-1,pointerEvents:"none"}:{},children:e.jsxs("div",{id:"panchanga-share-card",className:"poster",style:{"--theme-primary":F.primary,"--theme-secondary":F.secondary,"--theme-sidebar":F.sidebar,"--theme-footer":F.footer,"--theme-bg":F.bg},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Noto Sans Devanagari', sans-serif;
  background: #e8e8e8;
  display: flex;
  justify-content: center;
  padding: 20px;
}

.poster {
  width: 1000px;
  background: var(--theme-bg, #f0f2f5);
  position: relative;
  overflow: hidden;
  border-radius: 35px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

.sc-footer {
  display: flex;
  align-items: center;
  padding: 16px 34px;
  background: var(--theme-footer, linear-gradient(95deg,#0a4f48 0%,#0f7269 22%,#17967f 42%,#4a9f6f 62%,#c9ac4e 82%,#e8bd45 100%));
  position: relative;
  z-index: 10;
  overflow: hidden;
}
.sc-footer-divider { width:2px; height:76px; background:rgba(255,255,255,.4); margin:0 34px; }
.sc-footer-text { flex:1; color:#fff; font-size:24px; font-weight:600; line-height:1.55; }
.sc-footer-text .sc-hl { color:#fff6a0; font-weight:700; }
.sc-footer-ornament { position:absolute; bottom:16px; left:50%; transform:translateX(-50%); }

/* Mountain background */
.mountain-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 0;
  opacity: 0.4;
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
}

.mountain-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--theme-primary, #1a237e);
  mix-blend-mode: color;
  opacity: 0.8;
  z-index: 0;
  mask-image: linear-gradient(to bottom, black 40%, transparent 80%);
  -webkit-mask-image: linear-gradient(to bottom, black 40%, transparent 80%);
}

/* Header */
.header {
  position: relative;
  z-index: 1;
  padding: 15px 30px 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.logo-section {
  display: flex;
  flex-direction: column;
}

.logo-text {
  font-size: 40px;
  font-weight: 900;
  color: var(--theme-primary, #1a237e);
  letter-spacing: -1px;
}

.logo-text span {
  color: var(--theme-secondary, #c62828);
}

.logo-sub {
  font-size: 18px;
  color: var(--theme-primary, #1a237e);
  font-weight: 600;
  margin-top: -5px;
}

.title-section {
  text-align: center;
  flex: 1;
  margin-top: 10px;
}

.main-title {
  font-size: 52px;
  font-weight: 900;
  color: var(--theme-primary, #1a237e);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.main-title .red {
  color: var(--theme-secondary, #c62828);
}

.title-sub {
  font-size: 24px;
  font-weight: 800;
  color: var(--theme-secondary, #c62828);
  margin-top: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.title-sub::before,
.title-sub::after {
  content: '';
  width: 80px;
  height: 1px;
  background: var(--theme-primary, #1a237e);
}

/* Main content area */
.main-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 0 20px 6px;
  gap: 15px;
}

/* Left sidebar */
.left-sidebar {
  width: 180px;
  min-width: 180px;
  background: var(--theme-sidebar, linear-gradient(180deg, #1565c0 0%, #0d47a1 50%, #1a237e 100%));
  border-radius: 12px;
  padding: 20px 8px;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sidebar-calendar-icon {
  margin-bottom: 0px;
}

.sidebar-label {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 2px;
}

.sidebar-big-date {
  font-size: 45px;
  font-weight: 900;
  line-height: 1;
  margin: 5px 0;
}

.sidebar-month {
  font-size: 25px;
  font-weight: 800;
  margin: 2px 0;
}

.sidebar-year {
  font-size: 28px;
  font-weight: 700;
  margin: 2px 0;
}

.sidebar-day {
  font-size: 22px;
  font-weight: 700;
  margin: 8px 0 2px;
}

.sidebar-gregorian {
  font-size: 14px;
  opacity: 0.9;
  line-height: 1.4;
}

/* Center content */
.center-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Date banner */
.date-banner {
  background: white;
  border-radius: 10px;
  padding: 12px 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.date-banner-icon {
  width: 45px;
  height: 45px;
  background: var(--theme-primary, #1a237e);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.date-banner-text {
  font-size: 36px;
  font-weight: 500;
  color: var(--theme-primary, #1a237e);
  white-space: nowrap;
}

.date-banner-text .red {
  color: var(--theme-secondary, #c62828);
}

.date-banner-sub {
  font-size: 24px;
  color: #666;
  margin-top: 2px;
  white-space: nowrap;
}

/* Panchang boxes */
.panchang-row {
  display: flex;
  gap: 10px;
}

.panchang-box {
  flex: 1;
  background: white;
  border-radius: 10px;
  padding: 12px 8px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border: 1px solid #e0e0e0;
}

.panchang-box-icon {
  width: 45px;
  height: 45px;
  margin: 0 auto 6px;
  background: var(--theme-primary, #1a237e);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.panchang-box-label {
  font-size: 24px;
  font-weight: 700;
  color: var(--theme-primary, #1a237e);
  margin-bottom: 4px;
}

.panchang-box-value {
  font-size: 32px;
  font-weight: 800;
  color: var(--theme-secondary, #c62828);
  margin-bottom: 4px;
}

.panchang-box-time {
  font-size: 18px;
  font-weight: 600;
  color: #444;
  line-height: 1.3;
}



/* Other details section */
.other-details-section {
  position: relative;
  z-index: 1;
  padding: 0 20px;
  margin-bottom: 15px;
}

.other-details-header {
  background: var(--theme-primary, #1a237e);
  color: white;
  text-align: center;
  padding: 8px;
  border-radius: 8px 8px 0 0;
  font-size: 18px;
  font-weight: 800;
}

.other-details-body {
  background: white;
  border-radius: 8px;
  padding: 12px 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

.detail-icon {
  width: 32px;
  height: 32px;
}

.detail-label {
  font-size: 14px;
  color: #666;
  font-weight: 600;
}

.detail-value {
  font-size: 16px;
  font-weight: 800;
  color: var(--theme-secondary, #c62828);
}

/* Bottom sections */
.bottom-sections {
  position: relative;
  z-index: 1;
  display: flex;
  padding: 0 20px;
  gap: 15px;
  margin-bottom: 15px;
}

.special-box {
  flex: 1;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border: 1px solid #e0e0e0;
}

.special-header {
  background: var(--theme-secondary, #c62828);
  color: white;
  text-align: center;
  padding: 12px 24px;
  font-size: 26px;
  font-weight: 800;
  border-radius: 20px;
  display: inline-block;
  margin: 12px auto 0;
  white-space: nowrap;
}

.special-header-wrap {
  text-align: center;
}

.special-content {
  padding: 15px 25px;
  font-size: 24px;
  line-height: 1.6;
  color: #333;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
}

.special-decor {
  flex-shrink: 0;
}

.message-box {
  flex: 1;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border: 1px solid #e0e0e0;
}

.message-header {
  background: var(--theme-primary, #1a237e);
  color: white;
  text-align: center;
  padding: 8px 20px;
  font-size: 16px;
  font-weight: 800;
  border-radius: 20px;
  display: inline-block;
  margin: 12px auto 0;
  white-space: nowrap;
}

.message-header-wrap {
  text-align: center;
}

.message-content {
  padding: 15px;
  font-size: 13px;
  line-height: 1.8;
  color: #333;
  display: flex;
  align-items: center;
  gap: 12px;
}

.message-decor {
  flex-shrink: 0;
}

.message-footer-text {
  text-align: center;
  font-size: 16px;
  font-weight: 800;
  color: var(--theme-primary, #1a237e);
  padding: 5px 15px 15px;
}

/* App section */
.app-section {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 10px 20px 20px;
  gap: 20px;
}

.phone-mockup {
  width: 160px;
  flex-shrink: 0;
}

.app-text-section {
  flex: 1;
}

.app-text-main {
  font-size: 20px;
  font-weight: 800;
  color: var(--theme-primary, #1a237e);
  line-height: 1.5;
}

.app-text-main .red {
  color: var(--theme-secondary, #c62828);
}

.google-play-btn {
  display: inline-flex;
  align-items: center;
  background: #000;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  margin-top: 10px;
  gap: 8px;
}

.google-play-btn .gp-text {
  font-size: 12px;
  opacity: 0.8;
}

.google-play-btn .gp-store {
  font-size: 22px;
  font-weight: 700;
}

/* Footer */
.footer {
  background: var(--theme-primary, #1a237e);
  padding: 12px 20px;
  display: flex;
  justify-content: center;
  gap: 30px;
  position: relative;
  z-index: 1;
}

.footer-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-size: 13px;
  font-weight: 600;
}

.footer-icon {
  width: 24px;
  height: 24px;
}

.shubh-horizontal {
  background: white;
  border-radius: 12px;
  padding: 10px 15px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #e0e0e0;
}
.shubh-item {
  display: flex;
  align-items: center;
  gap: 10px;
}
.shubh-item-icon {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
}
.shubh-item-label {
  font-size: 14px;
  color: #666;
  font-weight: 600;
}
.shubh-item-value {
  font-size: 18px;
  font-weight: 800;
  color: var(--theme-secondary, #c62828);
}
`}}),e.jsx("img",{className:"mountain-bg",src:Ba,alt:"Mountain"}),e.jsx("div",{className:"mountain-overlay"}),e.jsxs("div",{className:"header",children:[e.jsx("div",{className:"logo-section",children:e.jsx("img",{src:_t,alt:"NepDate Logo",style:{height:60,objectFit:"contain"}})}),e.jsxs("div",{className:"title-section",children:[e.jsxs("div",{className:"main-title",children:[e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"5",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"25",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"5",cy:"15",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"25",cy:"15",r:"2.5",fill:"#c62828"})]}),e.jsx("span",{children:"आजको"}),e.jsx("span",{className:"red",children:"पञ्चाङ्ग"}),e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"5",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"25",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"5",cy:"15",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"25",cy:"15",r:"2.5",fill:"#c62828"})]})]}),e.jsx("div",{className:"title-sub",children:"NepDate - हरेक दिनको विश्वास"})]}),e.jsx("div",{style:{width:"120px"}})]}),e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"center-content",style:{width:"100%"},children:[e.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",marginBottom:"25px",marginTop:"10px"},children:[e.jsx("div",{style:{position:"absolute",left:"0px",top:"50%",transform:"translateY(-50%)",height:"240px",width:"240px",backgroundColor:"var(--theme-primary, #1a237e)",WebkitMaskImage:`url(${wt})`,WebkitMaskSize:"contain",WebkitMaskRepeat:"no-repeat",WebkitMaskPosition:"center",maskImage:`url(${wt})`,maskSize:"contain",maskRepeat:"no-repeat",maskPosition:"center",zIndex:1}}),e.jsxs("div",{className:"date-banner",style:{flexDirection:"column",alignItems:"center",textAlign:"center",padding:"20px 40px",gap:"8px",width:"max-content",margin:"0",position:"relative",zIndex:2},children:[e.jsxs("div",{className:"date-banner-text",children:["विक्रम संवत् ",e.jsx("span",{className:"red",children:ve(d)})," ",b," ",e.jsx("span",{className:"red",children:ve(f)})," गते"]}),e.jsx("div",{className:"date-banner-text",children:e.jsx("span",{className:"red",children:v})}),t.nepalSambatYear&&e.jsxs("div",{className:"date-banner-sub",style:{color:"#1a237e",fontWeight:600},children:["नेपाल संवत् ",ve(t.nepalSambatYear)," ",t.nepalSambatMonthName," ",ve(t.nepalSambatDay)]}),e.jsxs("div",{className:"date-banner-sub",children:["तद्नुसार ",o]})]})]}),e.jsxs("div",{className:"panchang-row",children:[e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("path",{d:"M18,5 A12,12 0 1,0 18,25 A8,8 0 1,1 18,5",fill:"#ffd700"}),e.jsx("circle",{cx:"10",cy:"10",r:"1.5",fill:"white"}),e.jsx("circle",{cx:"20",cy:"15",r:"1",fill:"white"}),e.jsx("circle",{cx:"12",cy:"22",r:"1",fill:"white"})]})}),e.jsx("div",{className:"panchang-box-label",children:"तिथि"}),e.jsx("div",{className:"panchang-box-value",children:L?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:L?.endTime?`(${a(L.endTime)})`:""}),T?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),T.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"none",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("circle",{cx:"15",cy:"6",r:"2",fill:"#ffd700"}),e.jsx("circle",{cx:"22",cy:"10",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"24",cy:"18",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"20",cy:"24",r:"2",fill:"#ffd700"}),e.jsx("circle",{cx:"12",cy:"24",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"7",cy:"18",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"8",cy:"10",r:"2",fill:"#ffd700"}),e.jsx("line",{x1:"15",y1:"6",x2:"22",y2:"10",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"22",y1:"10",x2:"24",y2:"18",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"24",y1:"18",x2:"20",y2:"24",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"20",y1:"24",x2:"12",y2:"24",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"12",y1:"24",x2:"7",y2:"18",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"7",y1:"18",x2:"8",y2:"10",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"8",y1:"10",x2:"15",y2:"6",stroke:"#ffd700",strokeWidth:"0.8"})]})}),e.jsx("div",{className:"panchang-box-label",children:"नक्षत्र"}),e.jsx("div",{className:"panchang-box-value",children:B?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:B?.endTime?`(${a(B.endTime)})`:""}),K?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),K.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"8",r:"4",fill:"#ffd700"}),e.jsx("path",{d:"M15,12 L15,20 M10,16 L20,16 M12,20 L15,26 L18,20",stroke:"#ffd700",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),e.jsx("circle",{cx:"15",cy:"15",r:"10",fill:"none",stroke:"#ffd700",strokeWidth:"1",opacity:"0.5"})]})}),e.jsx("div",{className:"panchang-box-label",children:"योग"}),e.jsx("div",{className:"panchang-box-value",children:P?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:P?.endTime?`(${a(P.endTime)})`:""}),ie?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),ie.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"#1a237e"}),e.jsx("path",{d:"M15,3 A12,12 0 0,1 15,27 A8,8 0 0,0 15,3",fill:"#ffd700"})]})}),e.jsx("div",{className:"panchang-box-label",children:"करण"}),e.jsx("div",{className:"panchang-box-value",children:te?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:te?.endTime?`(${a(te.endTime)})`:""}),ae?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),ae.name," आरम्भ"]}):null]})]})]}),e.jsxs("div",{className:"shubh-horizontal",children:[e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("circle",{cx:"18",cy:"20",r:"10",fill:"#ffd700"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#4fc3f7"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"सूर्योदय"}),e.jsx("div",{className:"shubh-item-value",children:c(t.sunriseIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("circle",{cx:"18",cy:"20",r:"10",fill:"#ff8a65"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#4fc3f7"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"सूर्यास्त"}),e.jsx("div",{className:"shubh-item-value",children:c(t.sunsetIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("path",{d:"M16,9 A9,9 0 0,0 16,25 A11,11 0 0,1 25,18 A9,9 0 0,0 16,9",fill:"#b0bec5"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"चन्द्रोदय"}),e.jsx("div",{className:"shubh-item-value",children:c(t.moonriseIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("path",{d:"M16,9 A9,9 0 0,0 16,25 A11,11 0 0,1 25,18 A9,9 0 0,0 16,9",fill:"none",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"चन्द्रास्त"}),e.jsx("div",{className:"shubh-item-value",children:c(t.moonsetIso)})]})]})]})]}),e.jsx("div",{className:"bottom-sections",children:e.jsxs("div",{className:"special-box",children:[e.jsx("div",{className:"special-header-wrap",children:e.jsx("div",{className:"special-header",children:"आजको विशेष"})}),e.jsxs("div",{className:"special-content",children:[e.jsxs("svg",{className:"special-decor",width:"80",height:"100",viewBox:"0 0 80 100",children:[e.jsx("ellipse",{cx:"40",cy:"75",rx:"20",ry:"8",fill:"#8B4513"}),e.jsx("path",{d:"M25,75 Q25,60 40,55 Q55,60 55,75",fill:"#D2691E"}),e.jsx("ellipse",{cx:"40",cy:"55",rx:"15",ry:"5",fill:"#FFD700"}),e.jsx("path",{d:"M40,55 Q35,40 40,25 Q45,40 40,55",fill:"#FF6600"}),e.jsx("path",{d:"M40,50 Q37,42 40,32 Q43,42 40,50",fill:"#FFD700"}),e.jsx("path",{d:"M40,45 Q38,40 40,35 Q42,40 40,45",fill:"#FFF8DC"}),e.jsx("circle",{cx:"15",cy:"85",r:"8",fill:"#FF69B4"}),e.jsx("circle",{cx:"15",cy:"85",r:"4",fill:"#FFB6C1"}),e.jsx("circle",{cx:"10",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"20",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"10",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"20",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"65",cy:"85",r:"8",fill:"#FF69B4"}),e.jsx("circle",{cx:"65",cy:"85",r:"4",fill:"#FFB6C1"}),e.jsx("circle",{cx:"60",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"70",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"60",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"70",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("ellipse",{cx:"8",cy:"88",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(-30,8,88)"}),e.jsx("ellipse",{cx:"72",cy:"88",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(30,72,88)"})]}),e.jsx("div",{children:Q})]})]})}),e.jsxs("footer",{className:"sc-footer",children:[e.jsx("div",{style:{backgroundColor:"white",padding:10,borderRadius:12},children:e.jsx("img",{src:Ft,alt:"NepDate Logo",style:{height:48,objectFit:"contain"}})}),e.jsx("div",{className:"sc-footer-divider"}),e.jsxs("div",{className:"sc-footer-text",style:{fontSize:"24px",letterSpacing:"-0.5px"},children:["विस्तृत पञ्चाङ्ग, राशिफल र शुभ साइतका लागि",e.jsx("br",{}),e.jsx("span",{className:"sc-hl",children:"NepDate नेपाली पात्रो App डाउनलोड गर्नुहोस् ।"})]}),e.jsx("div",{className:"sc-playstore",children:e.jsx("img",{src:Rt,alt:"GET IT ON Google Play",style:{height:80,objectFit:"contain"}})}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"sc-footer-ornament",width:"140",height:"16",viewBox:"0 0 140 16",fill:"none",children:[e.jsx("path",{d:"M140 8C140 12.4183 136.418 16 132 16H8C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0H132C136.418 0 140 3.58172 140 8Z",fill:"white",fillOpacity:"0.1"}),e.jsx("circle",{cx:"70",cy:"8",r:"4",fill:"white",fillOpacity:"0.3"}),e.jsx("circle",{cx:"56",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"}),e.jsx("circle",{cx:"84",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"})]})]})]})})},Nt=({icon:t,title:n})=>e.jsxs("div",{className:"flex items-center gap-2 mb-3 mt-6 first:mt-0 pb-1 border-b border-theme-border dark:border-theme-border/50",children:[e.jsx("div",{className:"p-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg shadow-sm",children:$.cloneElement(t,{className:"w-3.5 h-3.5 text-theme-primary dark:text-theme-primary"})}),e.jsx("h3",{className:"text-sm font-bold uppercase tracking-widest text-theme-text-muted dark:text-theme-text font-devanagari",children:n})]}),Ze=({label:t,value:n,className:l="",icon:g})=>e.jsxs("div",{className:`bg-theme-surface dark:bg-theme-surface/40 rounded-xl p-3 border border-theme-border dark:border-theme-border/50 shadow-sm transition-all hover:shadow-md flex items-center gap-3 ${l}`,children:[g&&e.jsx("div",{className:"shrink-0",children:g}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[13px] text-theme-text-muted dark:text-theme-text font-devanagari mb-0.5 uppercase tracking-tight",children:t}),e.jsx("div",{className:"text-base font-bold text-theme-text dark:text-white font-devanagari leading-none",children:n})]})]}),je=({label:t,value:n,compact:l=!1})=>e.jsx("div",{className:`px-4 border-b border-theme-border dark:border-theme-border/30 last:border-0 ${l?"py-1.5":"py-2.5"}`,children:e.jsxs("div",{className:"flex justify-between items-center text-base",children:[e.jsxs("span",{className:"text-theme-text-muted dark:text-theme-text font-medium font-devanagari text-sm",children:[t,":"]}),e.jsx("div",{className:"text-theme-text dark:text-white font-bold font-devanagari text-right",children:n||"-"})]})}),Ce=({elements:t,baseDate:n,timezoneId:l,offset:g,astroType:m,sunriseIso:u,nextSunriseIso:a})=>{const{t:c,tAstro:h,language:d,n:b}=pe();return!t||t.length===0?null:e.jsx("div",{className:"px-4 pt-1 pb-2 border-b border-theme-border dark:border-theme-border/50",children:t.map((f,r)=>{const v=f.startTime?Le(f.startTime,n,l||"Asia/Kathmandu",d,b,{showSeconds:!0,showVedicDayBracket:!0,sunriseIso:u,nextSunriseIso:a,t:c}):null,y=f.endTime?Le(f.endTime,n,l||"Asia/Kathmandu",d,b,{showSeconds:!0,showVedicDayBracket:!0,sunriseIso:u,nextSunriseIso:a,t:c}):null;return!v&&!y?null:e.jsxs("div",{className:"mt-1.5",children:[e.jsxs("strong",{className:"text-base text-theme-text dark:text-white font-devanagari",children:[m&&f.name?h(f.name,m):f.name,m==="tithi"&&f.isKshaya&&e.jsxs("span",{className:"ml-1 text-theme-error text-xs",children:["(",c("kshaya"),")"]}),m==="tithi"&&f.isVriddhi&&e.jsxs("span",{className:"ml-1 text-theme-success text-xs",children:["(",c("vriddhi"),")"]})]}),e.jsx("div",{className:"flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-theme-text-muted dark:text-theme-text-muted mt-1 gap-y-1 sm:gap-x-4 font-devanagari",children:v&&y?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-baseline gap-1.5",children:[e.jsxs("span",{className:"font-bold shrink-0 opacity-90",children:[c("startsOn"),":"]}),e.jsx("span",{className:"text-theme-text dark:text-theme-text",children:v})]}),e.jsxs("div",{className:"flex items-baseline gap-1.5 sm:text-right",children:[e.jsxs("span",{className:"font-bold shrink-0 opacity-90",children:[c("endsOn"),":"]}),e.jsx("span",{className:"text-theme-text dark:text-theme-text",children:y})]})]}):v?e.jsxs("div",{className:"flex items-baseline gap-1.5",children:[e.jsxs("span",{className:"font-bold shrink-0 opacity-70",children:[c("startsOn"),":"]}),e.jsx("span",{className:"text-theme-text dark:text-theme-text",children:v})]}):y?e.jsxs("div",{className:"flex items-baseline gap-1.5",children:[e.jsxs("span",{className:"font-bold shrink-0 opacity-70",children:[c("endsOn"),":"]}),e.jsx("span",{className:"text-theme-text dark:text-theme-text",children:y})]}):null})]},r)})})},Pa=({sequence:t,baseDate:n,timezoneId:l,offset:g,sunriseIso:m,nextSunriseIso:u})=>{const{language:a,t:c,n:h}=pe();return!t||t.length===0?null:e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2 text-sm font-bold uppercase tracking-wider text-theme-text-muted dark:text-theme-text-muted",children:[e.jsx(_e,{className:"w-3 h-3"}),c("anandadiYogaSequence")]}),e.jsx("div",{className:"relative pl-6 space-y-4 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-200 dark:before:bg-gray-700",children:t.map((d,b)=>{const f=d.startTime?Le(d.startTime,n,l||"Asia/Kathmandu",a,h,{showSeconds:!0,showVedicDayBracket:!0,sunriseIso:m,nextSunriseIso:u,t:c}):c("fromSunrise"),r=d.endTime?Le(d.endTime,n,l||"Asia/Kathmandu",a,h,{showSeconds:!0,showVedicDayBracket:!0,sunriseIso:m,nextSunriseIso:u,t:c}):c("untilSunrise"),v=a==="ne"?d.nameNe:a==="hi"?d.nameHi:d.nameEn,y=d.isAuspicious?"text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/20":"text-rose-700 dark:text-rose-300 bg-theme-error-bg dark:bg-theme-error-bg",o=d.isAuspicious?"bg-theme-success":"bg-theme-error";return e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:`absolute -left-[20px] top-1.5 w-3 h-3 rounded-full border-2 border-white dark:border-gray-900 ${o}`}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-1",children:[e.jsx("span",{className:`px-2 py-0.5 rounded text-sm font-bold font-devanagari self-start ${y}`,children:v}),e.jsxs("span",{className:"text-sm font-bold text-theme-text dark:text-theme-text flex items-center gap-2",children:[f," ",e.jsx("span",{className:"opacity-40",children:"—"})," ",r]})]}),e.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[e.jsxs("div",{className:"flex items-center gap-1.5 text-theme-text dark:text-theme-text",children:[e.jsxs("span",{className:"font-bold opacity-70",children:[c("netrama"),":"]}),e.jsx("span",{className:"font-bold",children:h(d.netra)})]}),e.jsxs("div",{className:"flex items-center gap-1.5 text-theme-text dark:text-theme-text",children:[e.jsxs("span",{className:"font-bold opacity-70",children:[c("jeevanama"),":"]}),e.jsx("span",{className:"font-bold",children:h(d.jeeva)})]})]})]})]},b)})})]})},Fa=({date:t,onClose:n,variant:l="modal",activeSystem:g="bs",onTimelineClick:m,onNavigate:u})=>{const{location:a,isStashLoaded:c,useElevation:h,ayanamsaMethod:d,engineType:b,isTopocentric:f}=Te(),{t:r,tAstro:v,n:y,language:o}=pe(),M=h&&a.elevation||0,s=i.useMemo(()=>Bt(t,a.latitude,a.longitude,a.offset,o,a.zoneId,c,M,d,b,f),[t,a.latitude,a.longitude,a.offset,o,a.zoneId,c,M,d,b,f]),A=s?.sunriseMs?new Date(s.sunriseMs):s?.sunriseIso?new Date(s.sunriseIso):null,Y=s?.nextSunriseMs?new Date(s.nextSunriseMs):s?.nextSunriseIso?new Date(s.nextSunriseIso):null,E=w=>!w||!Y||!A?w:w.filter(W=>{const re=W.startTime?new Date(W.startTime):null,ne=W.endTime?new Date(W.endTime):null;return!(ne&&ne<=A||re&&re>=Y)}),V=E(s?.tithis||[]),R=E(s?.nakshatras||[]),H=E(s?.yogas||[]),L=E(s?.karanas||[]),T=E(s?.sunRashis||[]),B=E(s?.moonRashis||[]),K=E(s?.bhadraTiming||[]),P=s?.bhadra,ie=l==="page",te=ie?"bg-theme-surface dark:bg-theme-surface w-full mx-auto rounded-xl shadow-sm border border-theme-border dark:border-theme-border overflow-hidden":"bg-slate-200 dark:bg-theme-bg rounded-2xl shadow-2xl max-w-2xl w-full ring-1 ring-transparent dark:ring-gray-700/80 dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-sm mx-auto",ae=ie?"bg-theme-surface/95 dark:bg-theme-surface/95 border-b border-theme-border dark:border-theme-border p-4 rounded-t-2xl":"sticky top-0 bg-slate-200 dark:bg-theme-bg border-b border-theme-border dark:border-theme-border p-4 rounded-t-2xl z-10 transition-all shadow-sm",Q=new Date().toDateString()===t.toDateString(),[q,F]=$.useState(new Date);$.useEffect(()=>{if(Q){const w=setInterval(()=>F(new Date),6e4);return()=>clearInterval(w)}},[Q]);const I=Q&&s?.sunriseIso?ma(q,new Date(s.sunriseIso)):null,U=I?r("ghadiUnits").replace("{0}",y(I.ghatis)).replace("{1}",y(I.palas)):null;(()=>{if(!s.sunriseIso||!s.sunsetIso)return null;const w=new Date(s.sunsetIso).getTime()-new Date(s.sunriseIso).getTime();if(w<=0)return null;const W=Math.floor(w/36e5),re=Math.floor(w%36e5/6e4);return`${y(W)} ${r("hour")} ${y(re)} ${r("minute")}`})();const p=w=>{if(w===void 0)return"";const W=Math.round(w*3600),re=Math.floor(W/3600),ne=Math.floor(W%3600/60);return`${y(re)}°${y(ne)}′`},[S,j]=i.useState(null);i.useEffect(()=>{s.sunriseIso?pa.getKundali({name:"Sunrise",datetime:s.sunriseIso,latitude:a.latitude,longitude:a.longitude,zoneId:a.zoneId,offset:a.offset,locationName:a.name,engine:b,options:{zodiac:"SIDEREAL",ayanamsa:d.toUpperCase(),houseSystem:"WHOLE_SIGN",divisionalCharts:[9],dashaSystem:"VIMSHOTTARI"}}).then(w=>{j(w)}).catch(w=>console.error("Error creating sunrise kundali",w)):j(null)},[s.sunriseIso,a,b,d]);const[k,N]=$.useState(!1);$.useEffect(()=>{N(!!(typeof navigator<"u"&&navigator.share))},[]);const C=async()=>{try{let w=Ve(),W="";if(g==="bs"){const ne=Se(t);W=`${ne.year}-${ne.monthIndex+1<10?"0":""}${ne.monthIndex+1}-${ne.day<10?"0":""}${ne.day}`,w+=`bs?${W}`}else W=`${t.getFullYear()}-${t.getMonth()+1<10?"0":""}${t.getMonth()+1}-${t.getDate()<10?"0":""}${t.getDate()}`,w+=`ad?${W}`;const re=zt(w);window.Android&&typeof window.Android.share=="function"?window.Android.share(`Nepdate - ${W}`,`Check out the details for ${W}`,re):k&&navigator.share?await navigator.share({title:`Nepdate - ${W}`,text:`Check out the details for ${W}`,url:re}):(await navigator.clipboard.writeText(re),me.success("Link copied to clipboard!"))}catch{me.error("Failed to share")}},[z,O]=$.useState(!1),[ee,le]=$.useState("social"),[ce,se]=$.useState(!1),[oe,de]=$.useState(!1),[G,he]=$.useState(null),[we,Be]=$.useState(null),tt=()=>{de(!0)},at=w=>{Be(w),de(!1),O(!0),se(!1)};$.useEffect(()=>{z&&ce&&st()},[z,ce]);const st=async()=>{try{await new Promise(X=>setTimeout(X,300));const w=document.getElementById("panchanga-share-card");if(!w)return;const{domToBlob:W}=await Me(async()=>{const{domToBlob:X}=await import("./vendor-other-C6Ki0joy.js").then(fe=>fe.L);return{domToBlob:X}},__vite__mapDeps([0,1])),re=`Panchanga-${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}.png`,ne=await W(w,{scale:typeof window<"u"&&window.devicePixelRatio>2?1:1.5,backgroundColor:"rgba(0,0,0,0)",filter:X=>{const fe=X.tagName?.toLowerCase();return fe!=="script"&&fe!=="link"&&fe!=="iframe"}});if(!ne)throw new Error("Failed to generate image blob");if(window.Android?.shareImage&&typeof window.Android.isAndroidApp=="function"&&window.Android.isAndroidApp())try{const X=new FileReader;X.readAsDataURL(ne),X.onloadend=()=>{const fe=X.result;window.Android.shareImage("आजको पञ्चाङ्ग",re,fe)};return}catch(X){console.error("Android image bridge failed",X)}if(navigator.share&&navigator.canShare)try{const X=new File([ne],re,{type:"image/png"});if(navigator.canShare({files:[X]})){await navigator.share({files:[X],title:"आजको पञ्चाङ्ग - NepDate",text:"आजको पञ्चाङ्ग | NepDate नेपाली पात्रो"});return}}catch(X){console.error("Web Share failed, falling back to download",X)}const ke=URL.createObjectURL(ne),ue=document.createElement("a");ue.href=ke,ue.download=re,ue.click(),setTimeout(()=>URL.revokeObjectURL(ke),1e3)}catch(w){console.error("Share failed",w),me.error("Failed to generate image")}finally{O(!1),se(!1),Be(null)}},De=(()=>{if(!s.sunriseIso||!s.sunsetIso||!s.nextSunriseIso)return{dinamanaGp:null,dinamanaHm:null,ratrimanaGp:null,ratrimanaHm:null};const w=s.sunriseMs??new Date(s.sunriseIso).getTime(),W=s.sunsetMs??new Date(s.sunsetIso).getTime(),re=s.nextSunriseMs??new Date(s.nextSunriseIso).getTime(),ne=re-w,ke=W-w,ue=re-W,X=ze=>{const Ne=ze/ne*60,Ee=Math.floor(Ne),Pe=Math.floor((Ne-Ee)*60);return r("ghadiUnits").replace("{0}",y(Ee)).replace("{1}",y(Pe))},fe=ze=>{const Ne=Math.floor(ze/6e4),Ee=Math.floor(Ne/60),Pe=Ne%60;return`${y(Ee)} ${r("hour")} ${y(Pe)} ${r("minute")}`};return{dinamanaGp:X(ke),dinamanaHm:fe(ke),ratrimanaGp:X(ue),ratrimanaHm:fe(ue)}})(),He=w=>w?w.replace(/\d+/g,W=>y(W)):"",Ke=`${v(s.lunarMonth,"lunarMonth")} • ${v(s.paksha,"paksha")} • ${v(s.tithi.name,"tithi")}`;return e.jsxs("div",{className:te,children:[e.jsx("div",{className:ae,children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-theme-text dark:text-white font-devanagari flex items-center gap-2",children:[e.jsx("span",{className:"text-theme-primary dark:text-theme-primary",children:v(s.weekday,"weekday")}),e.jsx("span",{className:"text-gray-300 dark:text-theme-text-muted",children:"|"}),(()=>{const w=Se(t);return`${y(w.year)} ${v(w.monthName,"month")} ${y(w.day)}`})()]}),e.jsx("p",{className:"text-sm text-theme-text-muted dark:text-theme-text-muted mt-1 font-medium",children:s.gregorianDate})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:C,className:"p-2 rounded-lg hover:bg-theme-surface dark:hover:bg-theme-surface-hover transition-colors text-theme-text-muted dark:text-theme-text-muted",children:k?e.jsx($e,{size:18}):e.jsx(Qt,{size:18})}),n&&!ie&&e.jsx("button",{onClick:n,className:"p-2 rounded-lg hover:bg-theme-surface dark:hover:bg-theme-surface-hover transition-colors text-theme-text-muted",children:e.jsx(Ye,{size:18})})]})]})}),e.jsxs("div",{className:"p-5 space-y-8 pb-20 overflow-x-hidden",children:[e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2.5 px-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-theme-text-muted dark:text-theme-text-muted uppercase tracking-widest",children:r("riseSetTimings")}),e.jsx("span",{className:"text-[10px] bg-theme-warning-bg dark:bg-amber-900/40 text-theme-warning dark:text-theme-warning px-2 py-0.5 rounded font-bold border border-theme-warning/50 dark:border-theme-warning/30",children:!a.name||a.name==="Custom Location"?`${y(a.latitude)}°N, ${y(a.longitude)}°E`:`${o==="en"&&a.romanization||a.name}`})]}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[e.jsx(Ze,{label:r("sunrise"),value:Le(s.sunriseIso,t,a.zoneId,o,y,{truncateToMinute:!0})||"N/A",icon:e.jsx(Fe,{className:"w-5 h-5 text-theme-warning"}),className:"bg-theme-warning-bg/40 dark:bg-orange-950/20 border-theme-warning/50 dark:border-theme-warning"}),e.jsx(Ze,{label:r("sunset"),value:Le(s.sunsetIso,t,a.zoneId,o,y,{truncateToMinute:!0})||"N/A",icon:e.jsx(Fe,{className:"w-5 h-5 text-theme-warning"}),className:"bg-indigo-50/40 dark:bg-indigo-950/20 border-indigo-100/50 dark:border-indigo-900/30"}),e.jsx(Ze,{label:r("moonrise"),value:s.moonrise?He(s.moonrise):"N/A",icon:e.jsx(Ae,{className:"w-5 h-5 text-indigo-400"})}),e.jsx(Ze,{label:r("moonset"),value:s.moonset?He(s.moonset):"N/A",icon:e.jsx(Ae,{className:"w-5 h-5 text-blue-400"})})]}),e.jsxs("div",{className:"mt-4 bg-theme-surface dark:bg-theme-surface/40 rounded-2xl border border-theme-border dark:border-theme-border/50 overflow-hidden shadow-sm",children:[e.jsxs("div",{className:"px-4 py-3 border-b border-theme-border dark:border-theme-border/30 flex items-center justify-center gap-3 bg-theme-surface/50 dark:bg-theme-bg/20 group",children:[e.jsx(Ae,{className:"w-4 h-4 text-theme-primary group-hover:animate-pulse"}),e.jsx("span",{className:"text-sm font-bold text-theme-text dark:text-theme-text font-devanagari tracking-wide",children:Ke})]}),e.jsxs("div",{className:`p-4 grid ${U?"grid-cols-3":"grid-cols-2"} gap-2 sm:gap-6`,children:[U&&e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx(_e,{className:"w-3.5 h-3.5 text-theme-primary mb-1"}),e.jsx("span",{className:"text-[11px] uppercase tracking-tighter text-theme-text-muted mb-0.5 whitespace-nowrap",children:r("currentGhati")||"स्वयम् घटी"}),e.jsx("span",{className:"text-sm sm:text-base font-bold font-devanagari leading-none",children:U})]}),e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx(Fe,{className:"w-3.5 h-3.5 text-theme-warning mb-1"}),e.jsx("span",{className:"text-[11px] uppercase tracking-tighter text-theme-text-muted dark:text-theme-text mb-0.5 whitespace-nowrap",children:r("dinamana")||"दिनमान"}),e.jsx("span",{className:"text-sm sm:text-base font-bold font-devanagari leading-none",children:De.dinamanaGp}),e.jsxs("span",{className:"text-[11px] text-gray-400 font-medium tracking-tighter leading-none mt-0.5",children:["(",De.dinamanaHm,")"]})]}),e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx(Ae,{className:"w-3.5 h-3.5 text-indigo-400 mb-1"}),e.jsx("span",{className:"text-[11px] uppercase tracking-tighter text-theme-text-muted dark:text-theme-text mb-0.5 whitespace-nowrap",children:r("ratrimana")||"रात्रिमान"}),e.jsx("span",{className:"text-sm sm:text-base font-bold font-devanagari leading-none",children:De.ratrimanaGp}),e.jsxs("span",{className:"text-[11px] text-gray-400 font-medium tracking-tighter leading-none mt-0.5",children:["(",De.ratrimanaHm,")"]})]})]})]})]}),e.jsxs("section",{children:[e.jsx(Nt,{icon:e.jsx(Zt,{}),title:r("eraAndSeason")}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-theme-surface/50 dark:bg-theme-surface/30 rounded-2xl p-4 border border-theme-border dark:border-theme-border/50 space-y-1",children:[e.jsxs("div",{className:"px-1 py-1 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between group",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 bg-theme-info-bg dark:bg-purple-900/30 rounded-xl group-hover:scale-110 transition-transform",children:e.jsx(Ae,{size:16,className:"text-purple-600 dark:text-purple-400"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[11px] uppercase tracking-widest text-theme-text-muted dark:text-theme-text-muted font-black mb-0.5",children:r("nepalSambat")}),e.jsxs("div",{className:"text-base font-bold text-theme-text dark:text-white font-devanagari leading-none",children:[y(s.nepalSambatYear)," ",s.nepalSambatMonthName," ",y(s.nepalSambatDay)]})]})]}),e.jsx("div",{className:"text-right"})]}),e.jsx("div",{className:"flex items-center justify-between group",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 bg-theme-warning-bg dark:bg-amber-900/30 rounded-xl group-hover:scale-110 transition-transform",children:e.jsx(Fe,{size:16,className:"text-theme-warning dark:text-theme-warning"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[11px] uppercase tracking-widest text-theme-text-muted dark:text-theme-text-muted font-black mb-0.5",children:r("nepalSambatSolar")}),e.jsxs("div",{className:"text-base font-bold text-theme-text dark:text-white font-devanagari leading-none",children:[y(s.nepalSambatSolar.year)," ",o==="ne"||o==="hi"?s.nepalSambatSolar.monthNameNe:s.nepalSambatSolar.monthNameEn," ",y(s.nepalSambatSolar.day)]})]})]})})]}),e.jsxs("div",{className:"pt-2 border-t border-theme-border dark:border-theme-border/30",children:[e.jsx(je,{label:r("shakaYear"),value:y(s.shakaYear),compact:!0}),e.jsx(je,{label:r("kaliYear"),value:y(s.kaliYear),compact:!0})]})]}),e.jsxs("div",{className:"bg-theme-surface/50 dark:bg-theme-surface/30 rounded-2xl p-4 border border-theme-border dark:border-theme-border/50 space-y-1",children:[e.jsx(je,{label:r("samvatsar"),value:s.isSamvatsarTransitioning?e.jsxs("div",{className:"flex flex-col items-end gap-1",children:[e.jsx("span",{className:"text-[11px] text-theme-text-muted line-through decoration-red-500/40",children:v(s.lunarSamvatsar,"samvatsar")}),e.jsx("span",{className:"text-sm text-theme-success dark:text-theme-success font-bold bg-emerald-50 dark:bg-emerald-900/20 px-1.5 py-0.5 rounded leading-none transition-all duration-700 animate-pulse",children:v(s.samvatsar,"samvatsar")})]}):v(s.samvatsar,"samvatsar"),compact:!0}),e.jsx(je,{label:r("ritu"),value:v(s.ritu,"ritu"),compact:!0}),e.jsx(je,{label:r("ayana"),value:v(s.ayana,"ayana"),compact:!0}),e.jsx(je,{label:r("ahargan"),value:y(Math.floor(s.ahargana)),compact:!0})]})]}),s.isSamvatsarTransitioning&&e.jsxs("div",{className:"mt-3 px-4 py-3 bg-blue-50/50 dark:bg-blue-900/10 border-l-4 border-theme-primary rounded-r-2xl shadow-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[e.jsx("div",{className:"p-1 bg-blue-100 dark:bg-blue-800 rounded-full",children:e.jsx(Xt,{className:"w-2.5 h-2.5 text-theme-primary dark:text-theme-primary"})}),e.jsx("h4",{className:"text-sm font-bold text-blue-900 dark:text-blue-100 font-devanagari",children:r("jovianYearCorrection")})]}),e.jsx("p",{className:"text-xs leading-relaxed text-blue-800/80 dark:text-blue-200/80 font-medium",children:r("jovianYearCorrectionDesc")})]})]}),e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-3 px-1",children:[e.jsxs("div",{className:"flex items-center gap-2 pb-1 border-b border-theme-border dark:border-theme-border/50 flex-1",children:[e.jsx("div",{className:"p-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg shadow-sm",children:e.jsx(Jt,{className:"w-3.5 h-3.5 text-theme-primary dark:text-theme-primary"})}),e.jsx("h3",{className:"text-sm font-bold uppercase tracking-widest text-theme-text-muted dark:text-theme-text font-devanagari",children:r("panchanga")})]}),e.jsxs("div",{className:"flex items-center gap-2 ml-4",children:[e.jsxs("button",{onClick:()=>{n?.(),u?.("timeline")},className:"text-[11px] text-theme-primary dark:text-theme-primary font-bold hover:underline flex items-center gap-1 bg-blue-50 dark:bg-blue-800/10 px-2 py-1 rounded border border-blue-100/50 dark:border-blue-800/10",children:[e.jsx(_e,{size:10}),e.jsx("span",{children:r("timeline")})]}),e.jsxs("button",{onClick:()=>{n?.(),u?.("daily-saait")},className:"text-[11px] text-theme-warning dark:text-theme-warning font-bold hover:underline flex items-center gap-1 bg-theme-warning-bg dark:bg-orange-800/10 px-2 py-1 rounded border border-theme-warning/50 dark:border-theme-warning/10",children:[e.jsx(_e,{size:10}),e.jsx("span",{children:r("shubha_ashubha_saait")})]})]})]}),e.jsx("div",{className:"px-4 mb-3",children:e.jsxs("div",{className:"flex items-start gap-2 p-2 bg-theme-warning-bg/50 dark:bg-amber-900/10 border border-amber-100/50 dark:border-theme-warning/20 rounded-xl",children:[e.jsx(rt,{className:"w-3.5 h-3.5 text-theme-warning shrink-0 mt-0.5"}),e.jsx("p",{className:"text-xs leading-tight text-theme-warning dark:text-theme-warning font-medium font-devanagari",children:r("tithiWarning")})]})}),e.jsxs("div",{className:"bg-theme-surface dark:bg-theme-surface/40 rounded-2xl border border-theme-border dark:border-theme-border/50 overflow-hidden shadow-sm",children:[e.jsx(je,{label:r("tithi"),value:v(s.tithi.name,"tithi")}),e.jsx(Ce,{elements:V,baseDate:t,timezoneId:a.zoneId,offset:a.offset,astroType:"tithi",sunriseIso:s.sunriseIso,nextSunriseIso:s.nextSunriseIso}),e.jsx(je,{label:r("nakshatra"),value:v(s.nakshatra.name,"nakshatra")}),e.jsx(Ce,{elements:R,baseDate:t,timezoneId:a.zoneId,offset:a.offset,astroType:"nakshatra",sunriseIso:s.sunriseIso,nextSunriseIso:s.nextSunriseIso}),e.jsx(je,{label:r("yoga"),value:v(s.yoga.name,"yoga")}),e.jsx(Ce,{elements:H,baseDate:t,timezoneId:a.zoneId,offset:a.offset,astroType:"yoga",sunriseIso:s.sunriseIso,nextSunriseIso:s.nextSunriseIso}),e.jsx(je,{label:r("karana"),value:v(s.karana.name,"karana")}),e.jsx(Ce,{elements:L,baseDate:t,timezoneId:a.zoneId,offset:a.offset,astroType:"karana",sunriseIso:s.sunriseIso,nextSunriseIso:s.nextSunriseIso}),e.jsxs("div",{className:"grid grid-cols-2 bg-theme-surface/50 dark:bg-theme-bg/40 border-t border-theme-border dark:border-theme-border/50 divide-x divide-gray-100 dark:divide-gray-700/50",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"px-4 py-2 text-[11px] font-bold text-theme-text-muted dark:text-theme-text uppercase tracking-widest border-b border-theme-border dark:border-theme-border/30 bg-theme-bg/30 dark:bg-theme-surface/20",children:r("sunTransit")}),e.jsx(Ce,{elements:T,baseDate:t,timezoneId:a.zoneId,offset:a.offset,astroType:"rashi",sunriseIso:s.sunriseIso,nextSunriseIso:s.nextSunriseIso})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"px-4 py-2 text-[11px] font-bold text-theme-text-muted dark:text-theme-text uppercase tracking-widest border-b border-theme-border dark:border-theme-border/30 bg-theme-bg/30 dark:bg-theme-surface/20",children:r("moonTransit")}),e.jsx(Ce,{elements:B,baseDate:t,timezoneId:a.zoneId,offset:a.offset,astroType:"rashi",sunriseIso:s.sunriseIso,nextSunriseIso:s.nextSunriseIso})]})]}),s.anandadiYoga&&e.jsxs("div",{className:"bg-blue-50/30 dark:bg-blue-900/10 p-3.5 border-t border-theme-border dark:border-theme-border/50",children:[e.jsxs("div",{className:"text-[13px] text-theme-text-muted uppercase tracking-widest mb-1 flex items-center gap-1.5",children:[e.jsx(pt,{className:"w-3 h-3 text-theme-primary"})," ",r("anandadiYoga")]}),e.jsx("div",{className:"text-base font-bold font-devanagari",children:o==="en"?s.anandadiYoga.nameEn:s.anandadiYoga.nameNe})]})]}),s.anandadiSequence&&s.anandadiSequence.length>0&&e.jsx(Pa,{sequence:s.anandadiSequence,baseDate:t,timezoneId:a.zoneId,offset:a.offset,sunriseIso:s.sunriseIso,nextSunriseIso:s.nextSunriseIso})]}),S&&e.jsxs("section",{children:[e.jsx(Nt,{icon:e.jsx(dt,{}),title:r("sunriseKundali")}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-start",children:[e.jsx("div",{className:"flex justify-center bg-theme-surface dark:bg-theme-surface/40 rounded-3xl p-6 border border-theme-border dark:border-theme-border shadow-inner",children:e.jsx(fa,{planets:S.planets,ascendantSign:S.ascendant.sign,ascendantDegrees:S.ascendant.degreesInSign,ascendantNakshatra:S.ascendant.nakshatra,ascendantNakshatraPada:S.ascendant.nakshatraPada,chartType:"lagna",chartStyle:"north",lang:o})}),e.jsx("div",{className:"overflow-hidden rounded-2xl border border-theme-border dark:border-theme-border/50 shadow-sm bg-theme-surface dark:bg-theme-surface/20",children:e.jsxs("table",{className:"w-full text-left border-collapse text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-theme-surface dark:bg-gray-700/50 border-b border-theme-border dark:border-theme-border",children:[e.jsx("th",{className:"py-3 px-4 text-theme-text-muted dark:text-theme-text font-bold uppercase tracking-wider",children:r("planet")}),e.jsx("th",{className:"py-3 px-4 text-theme-text-muted dark:text-theme-text font-bold uppercase tracking-wider",children:r("rashi")}),e.jsx("th",{className:"py-3 px-4 text-theme-text-muted dark:text-theme-text font-bold uppercase tracking-wider text-right",children:r("degree")})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-100 dark:divide-gray-700/30",children:[e.jsxs("tr",{className:"bg-blue-50/30 dark:bg-blue-900/10 font-bold",children:[e.jsx("td",{className:"py-3 px-4 text-theme-primary dark:text-theme-primary",children:v("Lagna","planet")}),e.jsx("td",{className:"py-3 px-4",children:v(gt[S.ascendant.sign],"rashi")}),e.jsx("td",{className:"py-3 px-4 text-right font-mono opacity-80",children:p(S.ascendant.degreesInSign)})]}),S.planets.map(w=>e.jsxs("tr",{className:"hover:bg-theme-surface dark:hover:bg-theme-surface-hover/30 transition-colors",children:[e.jsxs("td",{className:"py-2.5 px-4 font-medium flex items-center gap-2",children:[v(w.planet,"planet"),w.retrograde&&e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-theme-error shadow-[0_0_5px_rgba(244,63,94,0.5)]",title:"Retrograde"})]}),e.jsx("td",{className:"py-2.5 px-4",children:v(gt[w.rashi],"rashi")}),e.jsx("td",{className:"py-2.5 px-4 text-right font-mono opacity-80",children:p(w.degreesInSign)})]},w.planet))]})]})})]})]}),e.jsxs("section",{className:"space-y-4",children:[P&&P.isActiveCivil&&e.jsxs("div",{className:`p-4 rounded-2xl border flex items-start gap-4 ${P.isHarmful?"bg-theme-error-bg dark:bg-rose-950/20 border-rose-200/50 text-rose-900 dark:text-rose-100":"bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200/50 text-emerald-900 dark:text-emerald-100"}`,children:[e.jsx(rt,{className:"w-5 h-5 shrink-0 mt-0.5 opacity-80"}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("h4",{className:"font-bold text-base font-devanagari",children:[r("bhadraVisti")," ",r("active")]}),e.jsx("span",{className:`text-[11px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest ${P.isHarmful?"bg-theme-error-bg dark:bg-rose-900/50":"bg-emerald-100 dark:bg-emerald-900/50"}`,children:r(P.status)})]}),e.jsx(Ce,{elements:K,baseDate:t,timezoneId:a.zoneId,offset:a.offset,sunriseIso:s.sunriseIso,nextSunriseIso:s.nextSunriseIso}),e.jsxs("p",{className:"text-sm mt-2 font-medium",children:[r("bhadraResidenceLabel"),": ",e.jsx("span",{className:"ml-1 font-bold",children:r(P.residence)})]})]})]}),s.events&&s.events.length>0&&e.jsxs("div",{className:"bg-emerald-50/40 dark:bg-emerald-950/20 rounded-2xl p-5 border border-theme-success/50 dark:border-emerald-900/30",children:[e.jsxs("h3",{className:"text-sm font-black mb-4 text-emerald-800 dark:text-emerald-300 font-devanagari flex items-center gap-2 uppercase tracking-widest",children:[e.jsx(pt,{className:"w-4 h-4"})," ",r("todayEvents")]}),e.jsx("div",{className:"space-y-4",children:s.events.map((w,W)=>e.jsxs("div",{className:"flex items-start gap-3 group",children:[e.jsx("div",{className:"mt-1.5 w-1.5 h-1.5 rounded-full bg-theme-success shrink-0 group-hover:scale-150 transition-transform"}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("strong",{className:"text-base text-theme-text dark:text-white font-bold font-devanagari",children:w.name}),w.holiday&&e.jsx("span",{className:"bg-theme-error-bg dark:bg-theme-error-bg text-theme-error dark:text-theme-error text-[11px] font-black px-1.5 py-0.5 rounded uppercase",children:r("holiday")})]}),w.detail&&e.jsx("p",{className:"text-sm text-theme-text-muted dark:text-theme-text-muted mt-1 leading-relaxed",children:w.detail})]})]},W))})]}),e.jsxs("div",{className:"p-5 bg-theme-surface dark:bg-theme-surface/40 rounded-2xl border border-theme-border dark:border-theme-border/50 text-sm text-theme-text-muted dark:text-theme-text space-y-3 shadow-inner",children:[e.jsxs("div",{className:"flex justify-between items-center px-1",children:[e.jsx("span",{children:r("usedEngine")}),e.jsx("span",{className:"font-bold text-theme-text dark:text-theme-text",children:s.engine==="surya_siddhanta"?r("traditionalEngine"):s.engine==="analytical"?r("analyticalEngine"):r("modernEngine")})]}),e.jsxs("div",{className:"flex justify-between items-center px-1",children:[e.jsx("span",{children:r("ayanamsaMethod")}),e.jsx("span",{className:"font-bold text-theme-text dark:text-theme-text",children:r(s.ayanamsaMethod)})]}),s.ayanamsaValue!==void 0&&s.ayanamsaValue!==0&&e.jsxs("div",{className:"flex justify-between items-center px-1 text-xs opacity-80 italic",children:[e.jsx("span",{children:r("liveAyanamsa")}),e.jsxs("span",{className:"font-mono",children:[s.ayanamsaValue.toFixed(6),"°"]})]}),e.jsx("div",{className:"pt-3 border-t border-theme-border dark:border-theme-border/50",children:e.jsx("p",{className:"leading-relaxed text-xs opacity-75 italic text-center px-2",children:r("nepalPanchangaInfo")})}),s.engine==="surya_siddhanta"&&e.jsxs("div",{className:"mt-3 p-3 bg-theme-warning-bg dark:bg-theme-warning-bg border border-theme-warning/50 dark:border-theme-warning/50 rounded-xl flex gap-3 shadow-sm",children:[e.jsx(rt,{className:"w-5 h-5 text-theme-warning shrink-0 mt-0.5"}),e.jsx("p",{className:"text-xs leading-relaxed text-theme-warning dark:text-theme-warning font-medium italic",children:r("surya_siddhanta_warning")})]})]}),e.jsxs("button",{onClick:tt,disabled:z||oe,className:"w-full mt-4 bg-theme-primary hover:bg-theme-primary text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors",children:[z||oe?e.jsx(Xe,{className:"w-5 h-5 animate-spin"}):e.jsx($e,{className:"w-5 h-5"}),e.jsx("span",{children:"पञ्चाङ्ग सेयर गर्नुहोस् (Share Panchanga)"})]})]})]}),z&&(ee==="detailed"?e.jsx(jt,{data:s,date:t,variant:we||1,isOffscreen:!0,onLoad:()=>se(!0)}):e.jsx(kt,{data:s,date:t,variant:we||1,isOffscreen:!0,onLoad:()=>se(!0)})),oe&&Mt.createPortal(e.jsx("div",{className:"fixed inset-0 bg-black/60 z-[100] flex flex-col items-center backdrop-blur-sm p-4 sm:p-6 overflow-y-auto",children:e.jsxs("div",{className:"bg-theme-surface dark:bg-theme-surface p-5 sm:p-6 rounded-2xl shadow-xl w-full max-w-xl flex flex-col items-center m-auto border border-theme-border dark:border-theme-border",children:[e.jsx("span",{className:"text-lg font-bold text-theme-text dark:text-white mb-4 text-center",children:"Select Theme"}),e.jsxs("div",{className:"flex flex-row w-full gap-3 mb-6",children:[e.jsx("button",{onClick:()=>le("social"),className:`flex-1 py-2 rounded-xl border-2 transition-all font-bold ${ee==="social"?"border-theme-primary bg-blue-50 text-theme-primary dark:bg-blue-900/30 dark:text-theme-primary":"border-theme-border dark:border-theme-border text-theme-text-muted hover:bg-theme-surface dark:hover:bg-theme-surface-hover"}`,children:"Social / Simple"}),e.jsx("button",{onClick:()=>le("detailed"),className:`flex-1 py-2 rounded-xl border-2 transition-all font-bold ${ee==="detailed"?"border-theme-primary bg-blue-50 text-theme-primary dark:bg-blue-900/30 dark:text-theme-primary":"border-theme-border dark:border-theme-border text-theme-text-muted hover:bg-theme-surface dark:hover:bg-theme-surface-hover"}`,children:"Detailed"})]}),e.jsx("div",{className:"relative mb-4 sm:mb-6 rounded-xl overflow-hidden shadow-lg border border-theme-border dark:border-theme-border bg-theme-bg w-[300px] h-[350px] sm:w-[350px] sm:h-[400px] md:w-[400px] md:h-[450px]",children:e.jsx("div",{className:"origin-top-left w-[1000px] scale-[0.30] sm:scale-[0.35] md:scale-[0.40]",children:ee==="detailed"?e.jsx(jt,{data:s,date:t,variant:G||1}):e.jsx(kt,{data:s,date:t,variant:G||1})})}),e.jsx("div",{className:"flex flex-col justify-center gap-4 mb-6 w-full",children:e.jsx("div",{className:"flex flex-row flex-wrap justify-center gap-2 w-full",children:[1,2,3,4,5].map(w=>{const W={1:"linear-gradient(135deg, #1565c0, #1a237e)",2:"linear-gradient(135deg, #7b1fa2, #4a148c)",3:"linear-gradient(135deg, #e65100, #bf360c)",4:"linear-gradient(135deg, #00838f, #004d40)",5:"linear-gradient(135deg, #c2185b, #b71c1c)"};return e.jsx("button",{onClick:()=>he(w),className:`w-10 h-10 rounded-full shadow-md hover:scale-110 active:scale-95 transition-transform ${G===w?"ring-4 ring-offset-2 ring-gray-400 dark:ring-gray-500":""}`,style:{background:W[w]}},w)})})}),e.jsxs("div",{className:"flex flex-row w-full gap-3",children:[e.jsx("button",{onClick:()=>{de(!1),he(null)},className:"flex-1 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl flex flex-row items-center justify-center active:opacity-80 transition-colors",children:e.jsx("span",{className:"text-theme-text dark:text-theme-text font-medium",children:"Cancel"})}),e.jsx("button",{onClick:()=>at(G),className:"flex-1 py-3 bg-theme-primary hover:bg-theme-primary rounded-xl flex flex-row items-center justify-center active:opacity-80 transition-colors shadow-md",children:e.jsx("span",{className:"text-white font-medium",children:"Download"})})]})]})}),document.body)]})},Wa=({date:t,isOpen:n,onClose:l,activeSystem:g="bs",onTimelineClick:m,onNavigate:u})=>{if(!n||!t)return null;const a=c=>{c.target===c.currentTarget&&l()};return e.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",onClick:a,children:e.jsx("div",{className:"max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl relative no-scrollbar",children:e.jsx(Fa,{date:t,onClose:l,activeSystem:g,onTimelineClick:m,onNavigate:u})})})};function St(t){if(!t)return null;const n=typeof t=="string"?parseInt(t,10):t;if(!n||isNaN(n)||n<1e12)return null;try{return new Date(n).toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return null}}const _a=({isOpen:t,onConfirm:n,onCancel:l,currentBuildId:g,newBuildId:m})=>{const{t:u}=pe();if(!t)return null;const a=St(g),c=St(m);return e.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4 backdrop-blur-sm animate-in fade-in duration-200",children:e.jsxs("div",{className:"bg-theme-surface dark:bg-theme-bg rounded-2xl shadow-2xl max-w-md w-full border border-theme-border dark:border-theme-border transform transition-all scale-100 p-6",children:[e.jsxs("div",{className:"flex justify-between items-start mb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl",children:e.jsx(Re,{className:"w-6 h-6 text-theme-primary dark:text-theme-primary"})}),e.jsx("h2",{className:"text-xl font-bold text-theme-text dark:text-white font-[Outfit]",children:u("updateAvailable")})]}),e.jsx("button",{onClick:l,className:"p-2 rounded-full hover:bg-theme-bg dark:hover:bg-theme-surface-hover transition-colors",children:e.jsx(Ye,{className:"w-5 h-5 text-theme-text-muted"})})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("p",{className:"text-theme-text-muted dark:text-theme-text leading-relaxed",children:u("updateMessage")}),(a||c)&&e.jsxs("div",{className:"mt-3 text-xs text-theme-text-muted dark:text-theme-text-muted bg-theme-surface dark:bg-theme-surface/50 rounded-lg p-3 space-y-1 border border-theme-border dark:border-theme-border/50 font-mono",children:[a&&e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-400 dark:text-theme-text-muted",children:"Current:"}),e.jsx("span",{children:a})]}),c&&e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-theme-success dark:text-theme-success",children:"New:"}),e.jsx("span",{className:"text-theme-success dark:text-theme-success font-medium",children:c})]})]}),e.jsxs("div",{className:"mt-3 flex items-start gap-2 p-3 bg-theme-warning-bg dark:bg-theme-warning-bg rounded-lg border border-amber-100 dark:border-amber-900/50",children:[e.jsx(qt,{className:"w-4 h-4 text-theme-warning dark:text-theme-warning mt-0.5 shrink-0"}),e.jsx("p",{className:"text-xs text-theme-warning dark:text-theme-warning",children:u("updateWarning")})]})]}),e.jsxs("div",{className:"flex gap-3 justify-end",children:[e.jsx("button",{onClick:l,className:"px-5 py-2.5 rounded-xl text-theme-text dark:text-theme-text font-medium hover:bg-theme-bg dark:hover:bg-theme-surface-hover transition-colors",children:u("notNow")}),e.jsxs("button",{onClick:n,className:"px-5 py-2.5 rounded-xl bg-theme-primary hover:bg-theme-primary text-white font-medium shadow-lg shadow-blue-500/25 transition-all active:scale-95 flex items-center gap-2",children:[e.jsx(Re,{className:"w-4 h-4"}),u("updateNow")]})]})]})})},Ra=()=>{const{updateLanguage:t,completeSetup:n,updateLocation:l,setCalendarSystem:g,updateNumberFormat:m}=Te(),{t:u}=pe(),[a,c]=i.useState(1),[h,d]=i.useState(null),b=r=>{d(r),setTimeout(()=>{t(r,!0),g(r==="en"||r==="hi"?"ad":"bs"),m("auto"),c(2),d(null)},50)},f=r=>{l(r),n()};return a===2?e.jsxs("div",{className:"fixed inset-0 z-[100000] bg-theme-bg dark:bg-theme-bg overflow-hidden flex flex-col items-center justify-center",children:[e.jsx("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80",children:e.jsx("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"})}),e.jsxs("div",{className:"text-center mb-8 px-4 animate-fade-in-up",children:[e.jsx(Et,{className:"w-16 h-16 text-theme-primary mx-auto mb-4"}),e.jsx("h1",{className:"text-3xl font-extrabold text-theme-text dark:text-white mb-2 font-rhodium",children:u("locationAndTimezone")}),e.jsx("p",{className:"text-theme-text-muted dark:text-theme-text max-w-sm mx-auto",children:u("searchOrSelectLocation")})]}),e.jsx("div",{className:"w-full max-w-4xl px-4 flex-1 max-h-[70vh] relative",children:e.jsx(ba,{onClose:()=>{},onSelect:f})})]}):e.jsxs("div",{className:"fixed inset-0 z-[100000] bg-theme-bg dark:bg-theme-bg flex flex-col p-6 animate-fade-in-up",children:[e.jsx("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80",children:e.jsx("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"})}),e.jsx("div",{className:"flex-1 flex flex-col items-center justify-center max-w-md mx-auto w-full",children:e.jsxs("div",{className:"bg-theme-surface/50 dark:bg-theme-surface/50 p-6 rounded-[2rem] shadow-2xl backdrop-blur-md w-full border border-white/20 dark:border-theme-border/30",children:[e.jsx("div",{className:"flex justify-center mb-6",children:e.jsx("div",{className:"bg-blue-100 dark:bg-blue-900/50 p-4 rounded-full text-theme-primary dark:text-theme-primary",children:e.jsx(ea,{className:"w-10 h-10"})})}),e.jsx("h1",{className:"text-3xl font-extrabold text-center text-theme-text dark:text-white mb-2 font-rhodium",children:"Welcome / स्वागतम्"}),e.jsx("p",{className:"text-center text-theme-text-muted dark:text-theme-text mb-8 font-medium",children:"Please choose your preferred language to continue."}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("button",{onClick:()=>b("ne"),disabled:h!==null,className:`w-full flex items-center justify-between p-4 bg-theme-surface dark:bg-gray-700 rounded-2xl border-2 transition-all font-bold group ${h==="ne"?"border-theme-primary shadow-xl shadow-blue-500/10":"border-transparent hover:border-theme-primary hover:shadow-xl hover:shadow-blue-500/10"} ${h!==null&&h!=="ne"?"opacity-50":""}`,children:[e.jsx("span",{className:"text-xl text-theme-text dark:text-theme-text font-rhodium",children:"नेपाली (Nepali)"}),h==="ne"?e.jsx(Xe,{className:"w-6 h-6 text-theme-primary animate-spin"}):e.jsx(nt,{className:"w-6 h-6 text-gray-300 dark:text-theme-text-muted group-hover:text-theme-primary transition-colors"})]}),e.jsxs("button",{onClick:()=>b("hi"),disabled:h!==null,className:`w-full flex items-center justify-between p-4 bg-theme-surface dark:bg-gray-700 rounded-2xl border-2 transition-all font-bold group ${h==="hi"?"border-theme-primary shadow-xl shadow-blue-500/10":"border-transparent hover:border-theme-primary hover:shadow-xl hover:shadow-blue-500/10"} ${h!==null&&h!=="hi"?"opacity-50":""}`,children:[e.jsx("span",{className:"text-xl text-theme-text dark:text-theme-text font-rhodium",children:"हिन्दी (Hindi)"}),h==="hi"?e.jsx(Xe,{className:"w-6 h-6 text-theme-primary animate-spin"}):e.jsx(nt,{className:"w-6 h-6 text-gray-300 dark:text-theme-text-muted group-hover:text-theme-primary transition-colors"})]}),e.jsxs("button",{onClick:()=>b("en"),disabled:h!==null,className:`w-full flex items-center justify-between p-4 bg-theme-surface dark:bg-gray-700 rounded-2xl border-2 transition-all font-bold group ${h==="en"?"border-theme-primary shadow-xl shadow-blue-500/10":"border-transparent hover:border-theme-primary hover:shadow-xl hover:shadow-blue-500/10"} ${h!==null&&h!=="en"?"opacity-50":""}`,children:[e.jsx("span",{className:"text-xl text-theme-text dark:text-theme-text font-rhodium",children:"English"}),h==="en"?e.jsx(Xe,{className:"w-6 h-6 text-theme-primary animate-spin"}):e.jsx(nt,{className:"w-6 h-6 text-gray-300 dark:text-theme-text-muted group-hover:text-theme-primary transition-colors"})]})]})]})})]})},$a=()=>{const[t,n]=i.useState(!1);i.useEffect(()=>{localStorage.getItem("hasSeenLanguageInfo")||n(!0)},[]);const l=()=>{localStorage.setItem("hasSeenLanguageInfo","true"),n(!1)};return t?e.jsx("div",{className:"fixed inset-0 z-[10003] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4",children:e.jsxs("div",{className:"bg-theme-surface dark:bg-theme-surface rounded-xl shadow-2xl max-w-sm w-full p-6 relative animate-in fade-in zoom-in-95 duration-300",children:[e.jsx("button",{onClick:l,className:"absolute top-4 right-4 p-1.5 rounded-full hover:bg-theme-bg dark:hover:bg-theme-surface-hover text-theme-text-muted dark:text-theme-text-muted transition-colors","aria-label":"Close",children:e.jsx(Ye,{className:"w-5 h-5"})}),e.jsx("h3",{className:"text-xl font-bold text-theme-text dark:text-theme-text mb-3 pr-8",children:"Welcome to NepDate!"}),e.jsxs("div",{className:"text-theme-text-muted dark:text-theme-text space-y-4 mb-6",children:[e.jsxs("p",{children:["You can change the app language at any time by clicking the single letter button (",e.jsx("strong",{children:"ने / EN / हि"}),") on the top right of the screen."]}),e.jsxs("p",{children:["After setting your preferred language, you can update your ",e.jsx("strong",{children:"Location"})," and preferred ",e.jsx("strong",{children:"Calculation Engine"})," directly from the top of the Calendar grid or in the ",e.jsx("strong",{children:"Settings"})," menu for accurate sunrise, sunset, and panchanga data."]})]}),e.jsx("button",{onClick:l,className:"w-full py-3 px-4 bg-theme-primary hover:bg-theme-primary active:bg-blue-800 text-white font-medium rounded-lg transition-colors",children:"Got it"})]})}):null},Ua=()=>{const[t,n]=i.useState(()=>typeof window>"u"?"tabs":localStorage.getItem("menuStyle")||"tabs"),[l,g]=i.useState(()=>typeof window>"u"?"topbar":localStorage.getItem("desktopLayoutStyle")||"topbar");return{menuStyle:t,desktopLayoutStyle:l,handleSetMenuStyle:c=>{n(c),localStorage.setItem("menuStyle",c)},handleSetDesktopLayoutStyle:c=>{g(c),localStorage.setItem("desktopLayoutStyle",c)},resetLayoutSettings:()=>{localStorage.removeItem("menuStyle"),localStorage.removeItem("desktopLayoutStyle"),n("tabs"),g("topbar")}}},Oa=()=>{const[t,n]=i.useState(!1),[l,g]=i.useState(!1),[m,u]=i.useState(()=>localStorage.getItem("pwa_installed")==="true"),[a,c]=i.useState(null);return i.useEffect(()=>{const d=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone;if(n(!!d),d){u(!0);return}const b=()=>{localStorage.setItem("pwa_installed","true"),u(!0),g(!1)};window.addEventListener("appinstalled",b),"getInstalledRelatedApps"in navigator&&navigator.getInstalledRelatedApps().then(r=>{r.length>0&&(localStorage.getItem("pwa_installed")!=="true"&&localStorage.setItem("pwa_installed","true"),u(!0))});const f=r=>{r.preventDefault(),localStorage.removeItem("pwa_installed"),u(!1),c(r),g(!0)};return window.addEventListener("beforeinstallprompt",f),()=>{window.removeEventListener("appinstalled",b),window.removeEventListener("beforeinstallprompt",f)}},[]),{isStandalone:t,canInstall:l,isInstalled:m,deferredPrompt:a,handleInstallClick:async()=>{a&&(a.prompt(),await a.userChoice,c(null),g(!1))}}},Va=()=>{const{location:t,isStashLoaded:n,language:l,useElevation:g,ayanamsaMethod:m,engineType:u,setCalendarSystem:a,calendarSystem:c,isTopocentric:h}=Te(),[d,b]=i.useState(()=>We(t.zoneId)),f=i.useMemo(()=>Se(d),[d]),[r,v]=i.useState(null),[y,o]=i.useState(!1);i.useEffect(()=>{b(We(t.zoneId))},[t.zoneId]),i.useEffect(()=>{const x=t.latitude,p=t.longitude,S=t.offset,j=g?t.elevation:0;try{const k=new Date(d);k.setUTCHours(0,0,0,0);const N=Bt(k,x,p,S,l,t.zoneId,n,j,m,u,h);"error"in N?me(`Error from calculate:'${N.error}`,"error",2e3):v(N)}catch(k){me(`Error calculating today details:${k}`,"error",2e3)}},[d,t.latitude,t.longitude,t.offset,l,n,g,t.elevation,m,u,h]);const[M,s]=i.useState(c);i.useEffect(()=>{s(c)},[c]);const[A,Y]=i.useState(f.year),[E,V]=i.useState(f.monthIndex),[R,H]=i.useState(d.getUTCFullYear()),[L,T]=i.useState(d.getUTCMonth()),B=i.useMemo(()=>M==="bs"?A:R,[M,A,R]),K=i.useMemo(()=>M==="bs"?E:L,[M,E,L]);i.useEffect(()=>{const x=()=>{const N=yt(new Date,t.zoneId),C=yt(d,t.zoneId);if(N.day!==C.day||N.month!==C.month||N.year!==C.year){console.log("Midnight detected, updating today..."),b(N.date);const O=A===f.year&&E===f.monthIndex,ee=R===d.getUTCFullYear()&&L===d.getUTCMonth();if(O||ee){const le=Se(N.date);Y(le.year),V(le.monthIndex),H(N.year),T(N.month)}}},p=We(t.zoneId),j=p.getUTCHours()===23&&p.getUTCMinutes()===59?1e3:6e4,k=setInterval(x,j);return()=>clearInterval(k)},[d,f,t.zoneId,A,E,R,L]),i.useEffect(()=>{try{if(B===null)return;const p=(M==="bs"?bt(B,K,15):na(B,K,15)).getTime()/864e5+24405875e-1;Pt.preloadForJd(p)}catch(x){console.error("Failed to preload stash chunk for current view:",x)}},[B,K,M]);const P=i.useCallback(x=>{o(!0),i.startTransition(()=>Y(x))},[]),ie=i.useCallback(x=>{o(!0),i.startTransition(()=>H(x))},[]),te=i.useCallback(x=>{o(!0),i.startTransition(()=>V(x))},[]),ae=i.useCallback(x=>{o(!0),i.startTransition(()=>T(x))},[]),Q=i.useCallback(()=>{const x=We(t.zoneId),p=Se(x);if(A===p.year&&E===p.monthIndex&&R===x.getUTCFullYear()&&L===x.getUTCMonth()){b(x);return}o(!0),i.startTransition(()=>{b(x),Y(p.year),V(p.monthIndex),H(x.getUTCFullYear()),T(x.getUTCMonth())})},[t.zoneId,A,E,R,L]),q=i.useCallback(x=>{if(x===M)return;const p=R===d.getUTCFullYear()&&L===d.getUTCMonth(),S=A===f.year&&E===f.monthIndex;if(x==="bs"&&p||x==="ad"&&S)Q();else if(x==="bs"){const j=R??d.getUTCFullYear(),N=ia(j,L,12),C=la(N),z=Se(C);z.year===0||!z.year?Q():(Y(z.year),V(z.monthIndex))}else if(A===null)Q();else{const j=bt(A,E,18);H(j.getUTCFullYear()),T(j.getUTCMonth())}s(x),a(x)},[M,R,L,A,E,d,f,Q,a]),F=i.useCallback(x=>{o(!0),i.startTransition(()=>{if(M==="bs"){const p=x==="prev"?E-1:E+1;p<0?(V(11),Y(S=>{const j=S??f.year;return j===1?-1:j-1})):p>11?(V(0),Y(S=>{const j=S??f.year;return j===-1?1:j+1})):V(p)}else{const p=x==="prev"?L-1:L+1;p<0?(T(11),H(S=>{const j=S??d.getUTCFullYear();return j===1?-1:j-1})):p>11?(T(0),H(S=>{const j=S??d.getUTCFullYear();return j===-1?1:j+1})):T(p)}})},[M,E,L,d,f]),I=i.useCallback(x=>{o(!0),i.startTransition(()=>{M==="bs"?Y(p=>(p??f.year)+(x==="next"?1:-1)):H(p=>(p??d.getUTCFullYear())+(x==="next"?1:-1))})},[M,d,f]);i.useEffect(()=>{const x=setTimeout(()=>o(!1),50);return()=>clearTimeout(x)},[A,E,R,L,M]);const U=i.useRef(l);return i.useEffect(()=>{U.current!==l&&(l==="en"||l==="hi"?q("ad"):l==="ne"&&q("bs"),U.current=l)},[l,q]),{activeSystem:M,currentBsYear:A,currentBsMonth:E,currentAdYear:R,currentAdMonth:L,currentYear:B,currentMonth:K,switchSystem:q,goToToday:Q,changeMonth:F,changeYear:I,setCurrentBsYear:P,setCurrentBsMonth:te,setCurrentAdYear:ie,setCurrentAdMonth:ae,initialToday:d,initialTodayBs:f,todayDetails:r,isNavigating:y}},Ya=Ue.map(t=>t.key),Ha=()=>{const t=i.useCallback(()=>{if(typeof window>"u")return{view:"calendar",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:null};const x=window.location.hash.replace("#","").trim(),[p,S]=x.split("?"),j=window.location.pathname.trim(),k=new URLSearchParams(window.location.search),N=new URLSearchParams(S||"");if(window.location.pathname.includes("/bs")||window.location.pathname.includes("/ad")||k.has("bs")||k.has("ad")||k.has("today"))return{view:"day-detail",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:null};const C=k.get("activeView"),z=[...p.split("/").filter(Boolean),...j.split("/").filter(Boolean)],O=C||z.find(we=>Ya.includes(we)||["blog-detail","day-detail","post"].includes(we));if(!O)return{view:"calendar",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:null};const ee=z.join("/");if(ee.includes("bs?")||ee.includes("ad?"))return{view:"day-detail",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:null};const le=z.indexOf("post");if(le!==-1&&z.length>=le+3)return{view:"blog-detail",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:{source:z[le+1],slug:decodeURIComponent(z.slice(le+2).join("/"))}};const ce=O,se=z.indexOf(O),oe=z[se+1];let de=null,G=!1,he=!1;return ce==="dharma"&&oe?(G=!0,oe!=="section"&&(de={subSection:oe})):ce==="kundali"&&oe==="result"&&(he=!0),N.has("from")&&(de={...de||{},from:N.get("from")}),{view:ce||"calendar",params:de,isKundaliVisible:he,isDharmaVisible:G,post:null}},[]),n=t(),[l,g]=i.useState(n.post),[m,u]=i.useState(n.view),[a,c]=i.useState(n.params),[h,d]=i.useState(n.isKundaliVisible),[b,f]=i.useState(n.isDharmaVisible),r=i.useRef("calendar"),[v,y]=i.useState(null),[o,M]=i.useState(!1),[s,A]=i.useState(!1),[Y,E]=i.useState(!1),V=i.useRef(null),R=i.useRef(null),H=i.useRef(null),[L,T]=i.useState(!1),B=i.useRef(null),K=i.useRef(0),[P,ie]=i.useState(!1);i.useEffect(()=>{let x=null,p=0;const S=25,j=()=>{p++,typeof window.Android<"u"?(ie(!0),x&&clearInterval(x)):p>=S&&x&&clearInterval(x)};return j(),P||(x=window.setInterval(j,2e3)),()=>{x&&clearInterval(x)}},[]),i.useEffect(()=>{const x=t();m==="blog-detail"&&x.post&&g(x.post)},[m,t]),i.useEffect(()=>{if(P)return;let x="";if(m!=="calendar"){if(m==="day-detail")return;if(m==="blog-detail"&&l)x=`post/${l.source}/${l.slug}`;else{if(x=m,m==="kundali"&&h)x+="/result";else if(m==="dharma"&&b){const N=a?.subSection?.toLowerCase();x+=N?`/${N}`:"/section"}a?.from&&(x+=`?from=${a.from}`)}}const p=window.location.hash.replace("#",""),S=window.location.pathname.includes("/bs")||window.location.pathname.includes("/ad"),j=S&&m!=="day-detail",k=window.location.pathname!=="/"&&window.location.pathname!=="/index.html"&&!S;if(p!==x||j||k){let N=x?`#${x}`:window.location.pathname;j||k?N=`/${x?"#"+x:""}`:m==="calendar"&&(N=window.location.pathname);const C=r.current!==m,z=m==="blog-detail",O=r.current!=="calendar"&&m!=="calendar"&&!z&&!a?.from,ee=p===""||x.startsWith(p)&&x!==p;k?window.history.replaceState({view:m},"",N):C&&O?window.history.replaceState({view:m},"",N):!C&&!ee?window.history.replaceState({view:m},"",N):window.history.pushState({view:m},"",N)}r.current=m},[m,h,b,P,l,a]);const te=i.useRef(!1);i.useEffect(()=>{if(P)return;const x=s||Y||o;if(x&&!te.current){const p=window.history.state||{};p.isPopupOpen||window.history.pushState({...p,isPopupOpen:!0},"",window.location.href)}else!x&&te.current&&(window.history.state||{}).isPopupOpen&&window.history.back();te.current=x},[s,Y,o,P]),i.useEffect(()=>{const x=p=>{s&&p.key==="Backspace"&&(p.preventDefault(),A(!1))};return s&&window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[s]);const ae=i.useCallback(()=>o?(M(!1),!0):s?(A(!1),!0):H.current?(H.current(),!0):m==="kundali"&&h&&V.current?(V.current(),!0):m==="dharma"&&b&&R.current?(R.current(),!0):P&&m==="blog-detail"&&l?.source?(u(l.source),g(null),!0):m!=="calendar"?(a?.from==="sitemap"?(c(null),u("sitemap")):u("calendar"),!0):!1,[o,s,m,a,h,b,P,l]),Q=i.useRef(ae);i.useEffect(()=>{Q.current=ae},[ae]),i.useEffect(()=>{const x=()=>{K.current=0,T(!1),B.current&&(clearTimeout(B.current),B.current=null)},p=()=>Q.current()?(x(),!0):(K.current+=1,K.current===1?(T(!0),navigator.vibrate&&navigator.vibrate(50),B.current=window.setTimeout(x,2e3),!0):(typeof window.Android?.exitApp=="function"?window.Android.exitApp():window.navigator?.app?.exitApp&&window.navigator.app.exitApp(),!1)),S=k=>{k.preventDefault(),p()};P&&(window.handleBackPress=p),document.addEventListener("backbutton",S);const j=()=>{const k=t();u(k.view),c(k.params),f(k.isDharmaVisible),d(k.isKundaliVisible),g(k.post||null),M(!1),A(!1),E(!1),H.current&&(H.current(),H.current=null)};return window.addEventListener("popstate",j),()=>{x(),window.removeEventListener("popstate",j),document.removeEventListener("backbutton",S)}},[P,m,t]);const q=x=>{i.startTransition(()=>{y(x),M(!0)})},F=i.useCallback(x=>{V.current=x},[]),I=i.useCallback(x=>{R.current=x},[]),U=i.useCallback(x=>{H.current=x,E(!!x)},[]);return{activeView:m,setActiveView:u,selectedDate:v,setSelectedDate:y,isModalOpen:o,setIsModalOpen:M,isMenuOpen:s,setIsMenuOpen:A,isKundaliResultsVisible:h,setIsKundaliResultsVisible:d,setKundaliBackAction:F,isDharmaResultsVisible:b,setIsDharmaResultsVisible:f,setDharmaBackAction:I,setPopupBackAction:U,viewParams:a,setViewParams:c,showExitToast:L,handleDayClick:q,isAndroidWebView:P,postParams:l,setPostParams:g}},Ka=(t,n)=>{const[l,g]=i.useState(!1),[m,u]=i.useState(null),[a,c]=i.useState(null);return i.useEffect(()=>{typeof window<"u"&&window.Android&&(typeof window.Android.isAndroidApp=="function"?g(window.Android.isAndroidApp()):g(!0))},[]),{isAndroidApp:l,handleTouchStart:f=>{u(f.touches[0].clientX),c(null)},handleTouchMove:f=>c(f.touches[0].clientX),handleTouchEnd:()=>{if(!m||!a)return;const f=a-m;f>60&&m<50?n(!0):f<-60&&t&&n(!1),u(null),c(null)}}},Ga=({blog:t,onBack:n,onNavigate:l})=>{const{t:g,n:m,language:u}=pe(),a=i.useRef(null),c=i.useRef(null);i.useEffect(()=>{c.current&&c.current.scrollTo(0,0)},[t]);const[h,d]=$.useState([]);i.useEffect(()=>{(async()=>{try{const y=(await $t(u)).filter(o=>o.id!==t.id).map(o=>{let M=0;return t.tags&&o.tags&&(M=t.tags.filter(A=>o.tags.includes(A)).length),{blog:o,score:M}});y.sort((o,M)=>M.score!==o.score?M.score-o.score:.5-Math.random()),d(y.slice(0,3).map(o=>o.blog))}catch(r){console.error("Failed to load related posts:",r)}})()},[t,u]);const b=async()=>{const f=window.location.href,r=decodeURI(f),v={title:t.title,text:"",url:zt(r)};if(window.Android&&typeof window.Android.share=="function"){window.Android.share(v.title,"Check out this article",v.url);return}if(navigator.share)try{await navigator.share(v);return}catch(o){if(o instanceof Error&&o.name==="AbortError")return;console.warn("Share API failed, trying clipboard...",o)}const y=v.url;try{if(navigator.clipboard&&navigator.clipboard.writeText){await navigator.clipboard.writeText(y),me.success("Url copied to clipboard!");return}}catch(o){console.warn("Clipboard API failed, trying legacy...",o)}try{const o=document.createElement("textarea");o.value=y,o.style.position="fixed",o.style.left="-9999px",o.style.top="0",document.body.appendChild(o),o.focus(),o.select();const M=document.execCommand("copy");if(document.body.removeChild(o),M)me.success("Url copied to clipboard!");else throw new Error("execCommand failed")}catch(o){console.error("All share methods failed",o),me.error("Could not share or copy link")}};return e.jsxs("div",{className:"h-full bg-theme-surface dark:bg-theme-bg animate-in fade-in slide-in-from-bottom-4 duration-300 relative overflow-hidden flex flex-col",children:[e.jsx(da,{title:t.title.split(":")[0],onBack:n,transparent:!0,className:"absolute top-0 left-0 right-0 z-20",rightContent:e.jsx("button",{onClick:b,className:"p-2 rounded-full hover:bg-black/10 dark:hover:bg-theme-surface/20 text-theme-text dark:text-white transition-colors",children:e.jsx($e,{size:20})})}),e.jsxs("div",{ref:c,className:"flex-1 overflow-y-auto pb-20",children:[e.jsxs("div",{className:"relative h-[40vh] md:h-[50vh] w-full overflow-hidden flex-shrink-0",children:[e.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"}),e.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-4xl mx-auto",children:[e.jsx("div",{className:"flex gap-2 mb-3",children:t.tags.map((f,r)=>e.jsx("span",{className:"px-2 py-1 bg-theme-primary text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-sm",children:f},r))}),e.jsx("h1",{className:"text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 font-serif",children:t.title}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-gray-200 text-sm md:text-base",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(ta,{size:16}),e.jsx("span",{className:"font-medium",children:t.author})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(aa,{size:16}),e.jsx("span",{children:t.date})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(_e,{size:16}),e.jsx("span",{children:g("readTime",m(t.readTime))})]})]})]})]}),e.jsx("article",{className:"max-w-3xl mx-auto px-5 md:px-0 -mt-6 relative z-10",children:e.jsxs("div",{className:"bg-theme-surface dark:bg-theme-surface rounded-t-3xl shadow-xl p-6 md:p-10 min-h-[500px]",children:[e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-theme-text dark:text-theme-text leading-relaxed font-serif",children:[e.jsx("p",{className:"lead text-xl font-medium text-theme-text-muted dark:text-theme-text mb-8 border-l-4 border-theme-primary pl-4 italic",children:t.excerpt}),e.jsx("div",{ref:a,dangerouslySetInnerHTML:{__html:t.content},className:"blog-content"})]}),e.jsxs("div",{className:"mt-12 pt-8 border-t border-theme-border dark:border-theme-border",children:[e.jsx("h4",{className:"text-lg font-bold text-theme-text dark:text-theme-text mb-4",children:g("alsoRead")}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[h.map(f=>e.jsx("div",{className:"h-[320px]",children:e.jsx(va,{blog:f,onClick:()=>l(f),compact:!0})},f.id)),h.length===0&&e.jsx("div",{className:"col-span-full p-4 bg-theme-surface dark:bg-gray-700/50 rounded-xl border border-dashed border-theme-border dark:border-theme-border text-center text-sm text-theme-text-muted dark:text-theme-text-muted",children:g("moreArticlesComing")})]})]})]})})]})]})},Qa=$.lazy(()=>Me(()=>import("./CalendarPrintPage-7u2rHa5i.js"),__vite__mapDeps([2,3,0,1,4,5,6,7,8,9,10,11,12,13]))),Za=$.lazy(()=>Me(()=>import("./DailySaaitPage-BVTHBrH2.js"),__vite__mapDeps([14,3,0,1,4,5,6,7,15,8,9]))),Xa=$.lazy(()=>Me(()=>import("./DayDetailPage-BNEF4ak5.js"),__vite__mapDeps([16,3,0,1,4,5,6,7,8,9,17,18,19,15,20,21,10,22,23,24,25]))),Ja=$.lazy(()=>Me(()=>import("./HomePage-_ibYpBYU.js"),__vite__mapDeps([26,3,0,1,4,5,15,6,7,8,9,27,22,19,23,11,12,28,29,30,17,10,31,25,32,24,18,20,21])));$.lazy(()=>Me(()=>import("./TimelinePage-Dz6D4Tui.js"),__vite__mapDeps([33,3,0,1,4,5,8,6,7,9,15,22,19,23])));const it=String(1785666213592),lt="nepdate_last_web_build",qa=()=>{const{t}=pe(),[n,l]=$.useState(!1),[g,m]=$.useState(!1),[u,a]=$.useState(!1),[c,h]=$.useState(null),d=$.useRef(!1);i.useEffect(()=>{const D=J=>{d.current||(window.__updateDetected=!0,d.current=!0,J&&h(J),m(!0))};window.__pwaUpdateAvailable&&D();const _=J=>D(J.detail),xe=J=>D(J.detail);return window.addEventListener("pwa-update-available",_),window.addEventListener("version-update-available",xe),()=>{window.removeEventListener("pwa-update-available",_),window.removeEventListener("version-update-available",xe)}},[]);const b=()=>{a(!0),m(!1),d.current=!1,setTimeout(()=>{Ge.clear(),c?.buildId&&localStorage.setItem(lt,String(c.buildId)),typeof window.refreshPWA=="function"?window.refreshPWA(!0):window.location.reload()},150)};i.useEffect(()=>{if(localStorage.getItem(lt)!==it&&(localStorage.setItem(lt,it),Ge.clear()),typeof window<"u"&&window.Android?.setWebVersion)try{window.Android.setWebVersion("2.8.2")}catch(_){console.error("Failed to set web version on Android",_)}},[]);const{theme:f,toggleTheme:r,resetTheme:v}=ya(),{location:y,language:o,updateLanguage:M,isSetupComplete:s,resetSettings:A,engineType:Y,isStashLoaded:E,appTheme:V}=Te();i.useEffect(()=>{document.documentElement.setAttribute("data-theme",V||"classic")},[V]);const R=["ne","en","hi"],H={ne:"ने",en:"EN",hi:"हि"},L=o==="auto"?"ne":o,T=R[(R.indexOf(L)+1)%R.length],{menuStyle:B,desktopLayoutStyle:K,handleSetMenuStyle:P,handleSetDesktopLayoutStyle:ie,resetLayoutSettings:te}=Ua(),{isStandalone:ae,canInstall:Q,handleInstallClick:q}=Oa(),{activeView:F,setActiveView:I,selectedDate:U,setSelectedDate:x,isModalOpen:p,setIsModalOpen:S,isMenuOpen:j,setIsMenuOpen:k,handleDayClick:N,setIsKundaliResultsVisible:C,setKundaliBackAction:z,setIsDharmaResultsVisible:O,setDharmaBackAction:ee,setPopupBackAction:le,showExitToast:ce,postParams:se,setPostParams:oe,viewParams:de,setViewParams:G}=Ha(),{activeSystem:he,currentYear:we,currentMonth:Be,switchSystem:tt,goToToday:at,changeMonth:st,changeYear:mt,setCurrentBsYear:De,setCurrentAdYear:He,setCurrentBsMonth:Ke,setCurrentAdMonth:w,initialToday:W,initialTodayBs:re,todayDetails:ne,isNavigating:ke}=Va(),{isAndroidApp:ue,handleTouchStart:X,handleTouchMove:fe,handleTouchEnd:ze}=Ka(j,k),[Ne,Ee]=$.useState(null),Pe=()=>{v(),te(),A(),Ge.clear(),me.info("Settings reset to default",2e3)};i.useEffect(()=>{if(new URLSearchParams(window.location.search).get("app_updated")==="true"){me.success("Latest version loaded successfully",4e3),Ge.clear();const xe=new URL(window.location.href);xe.searchParams.delete("app_updated"),window.history.replaceState({},"",xe.toString())}},[]),i.useEffect(()=>{const _=new URLSearchParams(window.location.search).get("activeView");_&&(I(_),window.history.replaceState({},"",Ve()))},[I]),i.useEffect(()=>{!ke&&s&&typeof window<"u"&&window.Android?.onAppReady&&window.Android.onAppReady()},[ke,s]);const ft=i.useRef(E);i.useEffect(()=>{let D=null;return Y==="modern"&&(E?ft.current||me.success("High-precision data downloaded and applied modern engine!",3e3):D=me.info("Downloading precision data. Using analytical engine temporarily...",0)),ft.current=E,()=>{D&&me.dismiss(D)}},[Y,E]),i.useEffect(()=>{const D=()=>I("print-calendar");window.addEventListener("navigate-to-print-calendar",D);const _=()=>I("settings");return window.addEventListener("open-settings-view",_),()=>{window.removeEventListener("navigate-to-print-calendar",D),window.removeEventListener("open-settings-view",_)}},[I]),i.useEffect(()=>{const D=()=>{document.documentElement.classList.remove("dark")},_=()=>{l(!1),f==="dark"&&document.documentElement.classList.add("dark")},xe=()=>l(!0),J=()=>l(!1);return window.addEventListener("beforeprint",D),window.addEventListener("afterprint",_),window.addEventListener("preparing-print",xe),window.addEventListener("finished-print",J),()=>{window.removeEventListener("beforeprint",D),window.removeEventListener("afterprint",_),window.removeEventListener("preparing-print",xe),window.removeEventListener("finished-print",J)}},[f]),i.useEffect(()=>{ce&&me.info("Press back again to exit",2e3)},[ce]);const Yt=()=>N(W);i.useEffect(()=>{F==="blog-detail"&&se&&(async()=>{try{const _=await $t(L);let xe=_.find(J=>Qe(J.title)===se.slug);if(!xe){const J=await ja(se.slug);if(J){const be=_.find(ge=>ge.id===J.id);be&&(xe=be,oe({...se,slug:Qe(be.title)}))}}xe?Ee(xe):(console.error("Blog not found:",se.slug),I("calendar"))}catch(_){console.error("Error loading blog:",_)}})()},[F,se?.slug,L]);const Ht=()=>{se?.source?(I(se.source),oe(null)):I("calendar")};return e.jsx(ha,{isRadioActive:F==="radio",children:e.jsxs("div",{className:`fixed inset-0 h-[100dvh] w-full flex flex-col bg-theme-bg text-theme-text transition-colors overflow-hidden ${K==="sidebar"?"md:flex-row":""} ${f==="dark"&&F!=="print-calendar"?"dark":""}`,onTouchStart:X,onTouchMove:fe,onTouchEnd:ze,children:[K==="topbar"&&e.jsx("div",{className:"w-full sticky top-0 z-30 print:hidden hidden md:block border-b border-theme-border",children:e.jsx(Ma,{activeView:F,activeSystem:he,onNavigate:D=>{G(null),I(D)},showInstall:!ae&&Q&&!ue,onInstallClick:q,theme:f,onThemeToggle:r})}),F==="calendar"&&e.jsx("header",{className:"sticky top-0 px-4 pt-2 bg-transparent z-30 md:hidden",children:e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>k(!0),className:"p-2 rounded-full hover:bg-theme-surface-hover","aria-label":"Open menu",title:"Open menu",children:e.jsx(sa,{className:"w-5 h-5"})}),e.jsx(ht,{activeSystem:he,hideControl:F!=="calendar"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>M(T),className:"px-2 py-1 rounded-full hover:bg-theme-surface-hover transition-colors text-[11px] font-bold text-theme-text-muted border border-theme-border","aria-label":"Toggle Language",title:"Toggle Language",children:H[L]||"ने"}),B==="tabs"&&!ae&&Q&&!ue&&e.jsxs("button",{onClick:q,className:"px-2 py-2 text-left text-xs rounded bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2",children:[e.jsx(ot,{className:"w-5 h-5"})," ",e.jsx("span",{children:t("installApp")})]})]})]})}),j&&e.jsx("div",{className:"fixed inset-0 bg-black/40 z-40 md:hidden",onClick:()=>k(!1)}),e.jsx("aside",{className:`fixed top-0 left-0 z-[10001] h-full bg-theme-surface shadow-xl transform transition-transform duration-300 ease-in-out
          ${j?"translate-x-0":"-translate-x-full"}
          ${K==="sidebar"?"md:translate-x-0 md:sticky md:h-screen md:w-56":"md:hidden w-64"}`,children:e.jsxs("div",{className:"flex flex-col h-full p-4 overflow-y-auto pb-24 no-scrollbar",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-lg font-semibold text-theme-text font-rhodium",children:"Menu"}),e.jsx("button",{onClick:()=>k(!1),className:"p-2 rounded-full hover:bg-theme-surface-hover md:hidden",title:t("close"),"aria-label":t("close"),children:e.jsx(Ye,{className:"w-5 h-5"})})]}),e.jsxs("nav",{className:"flex flex-col space-y-3 text-theme-text",children:[Ue.filter(D=>!D.hideOnSideMenu).map(D=>e.jsxs("button",{onClick:()=>{G(null),I(D.key),k(!1)},className:`px-2 py-2 flex items-center gap-2 rounded hover:bg-theme-surface-hover font-rhodium ${F===D.key?"bg-theme-border font-medium":""}`,children:[D.icon," ",e.jsx("span",{className:"font-rhodium",children:t(D.labelKey)})]},D.key)),typeof window<"u"&&window.Android&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>{Je(),k(!1)},className:"px-2 py-2 flex items-center gap-2 rounded hover:bg-theme-surface-hover font-rhodium",children:[e.jsx(ut,{icon:ua,className:"w-5 h-5 text-emerald-500 drop-shadow-icon"})," ",e.jsx("span",{className:"font-rhodium",children:"Share App"})]}),e.jsxs("button",{onClick:()=>{qe(),k(!1)},className:"px-2 py-2 flex items-center gap-2 rounded hover:bg-theme-surface-hover font-rhodium",children:[e.jsx(ut,{icon:ga,className:"w-5 h-5 text-amber-500 drop-shadow-icon"})," ",e.jsx("span",{className:"font-rhodium",children:"Rate App"})]})]}),!ae&&Q&&!ue&&e.jsxs("button",{onClick:()=>{q(),k(!1)},className:"px-2 py-2 flex items-center gap-2 rounded bg-blue-600 text-white hover:bg-blue-700",children:[e.jsx(ot,{className:"w-4 h-4"})," ",t("installApp")]}),e.jsx("hr",{className:"border-theme-border my-2"}),e.jsxs("button",{onClick:()=>{Oe(),k(!1)},className:"px-2 py-2 flex items-center gap-2 rounded text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50",children:[e.jsx(Re,{className:"w-4 h-4"})," Clear Cache & Reload"]})]}),e.jsxs("div",{className:"mt-auto text-xs text-theme-text-muted border-t border-theme-border pt-4",children:["© ",We(y.zoneId).getUTCFullYear()," ",t("project")]})]})}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsxs("div",{id:"app-scroll-container",className:`h-full no-scrollbar mx-auto w-full max-w-7xl 2xl:max-w-[1600px] overflow-x-hidden overflow-y-auto ${F==="calendar"?"px-4 md:px-6 pb-20 md:pb-6":"p-0"}`,children:[e.jsxs($.Suspense,{fallback:e.jsx("div",{className:"flex-1 flex items-center justify-center h-full",children:e.jsx("div",{className:"w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"})}),children:[F==="calendar"&&e.jsxs(e.Fragment,{children:[e.jsx(Ja,{activeSystem:he,currentYear:we,currentMonth:Be,switchSystem:tt,goToToday:at,theme:f,toggleTheme:r,todayDetails:ne,setActiveView:I,initialToday:W,initialTodayBs:re,handleShowDetailsClick:Yt,setCurrentBsYear:De,setCurrentAdYear:He,setCurrentBsMonth:Ke,setCurrentAdMonth:w,changeMonth:st,changeYear:mt,handleDayClick:N,setPostParams:oe,setViewParams:G,isNavigating:ke}),e.jsx(Ea,{onNavigate:(D,_)=>{I(D),G(_||null),_&&typeof _.month=="number"&&(he==="bs"?Ke(_.month):w(_.month))}})]}),F==="day-detail"&&e.jsx(Xa,{onBack:()=>{window.history.pushState({},"",Ve()),I("calendar")},onNavigate:D=>I(D)}),F==="blog-detail"&&Ne&&e.jsx(Ga,{blog:Ne,onBack:Ht,onNavigate:D=>{oe({source:se?.source||"calendar",slug:Qe(D.title)}),window.scrollTo(0,0)}}),F==="daily-saait"&&e.jsx(Za,{onBack:()=>{de?.from==="sitemap"?(G(null),I("sitemap")):I("calendar")},onNavigate:(D,_)=>{_&&G(_),I(D)},activeSystem:he}),F==="print-calendar"&&e.jsx(Qa,{onBack:()=>I("calendar"),activeSystem:he}),(()=>{const D=Ue.find(_=>_.key===F);if(D&&D.page){const _=D.page,J={onBack:()=>{de?.from==="sitemap"?(G(null),I("sitemap")):I("calendar")},onOpenMenu:()=>k(!0),theme:f,activeSystem:he,currentYear:we||2081,onNavigate:(ge,ye)=>{G(ye||null),I(ge)},onDayClick:N};let be={...J,...de};return F==="settings"?be={...J,currentTheme:f,onThemeChange:r,currentMenuStyle:B,onMenuStyleChange:P,currentDesktopLayoutStyle:K,onDesktopLayoutStyleChange:ie,onResetSettings:Pe,isAndroidApp:ue,onReloadApp:Oe}:F==="kundali"?be={...J,setIsKundaliResultsVisible:C,setKundaliBackAction:z,initialData:de?.formData}:F==="namakaran"?be={...J,onViewKundali:ge=>{G({formData:ge}),I("kundali")},onNavigate:(ge,ye)=>{ye&&G(ye),I(ge)}}:F==="dharma"?be={...J,activeSystem:he,currentYear:we||2081,currentMonth:Be,tag:de?.tag,onNavigate:(ge,ye)=>{ge==="blog-detail"?(oe({source:"dharma",slug:Qe(ye.title)}),I("blog-detail")):ge==="dharma"?(G(ye),I("dharma")):(G(ye||null),I(ge))},subSection:de?.subSection,setIsDharmaResultsVisible:O,setDharmaBackAction:ee}:F==="timeline"&&(be={...J,initialDate:U||W}),e.jsx(_,{...be})}return null})()]}),B==="slide"&&e.jsx("div",{className:"w-full bg-theme-surface/50 border-t border-theme-border print:hidden md:hidden mt-8 pb-4",children:e.jsx(Da,{})})]})}),B==="tabs"&&e.jsx("div",{className:"md:hidden print:hidden",children:e.jsx(Ta,{activeView:F,onNavigate:D=>{G(null),I(D)},theme:f,onThemeToggle:r,themeLabel:t(f==="light"?"darkMode":"lightMode"),setPopupBackAction:le})}),e.jsx(Wa,{date:U,isOpen:p,onClose:()=>S(!1),activeSystem:he,onTimelineClick:D=>{x(D),I("timeline")},onNavigate:D=>I(D)}),e.jsx(_a,{isOpen:g,onConfirm:b,onCancel:()=>m(!1),currentBuildId:it,newBuildId:c?.buildId}),e.jsx(oa,{}),!s&&e.jsx(Ra,{}),e.jsx($a,{}),n&&e.jsxs("div",{className:"fixed inset-0 z-[10002] bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-200 print:hidden",children:[e.jsx("div",{className:"w-12 h-12 border-4 border-theme-primary border-t-transparent rounded-full animate-spin mb-4"}),e.jsx("p",{className:"text-lg font-medium text-theme-text dark:text-theme-text font-rhodium",children:t("preparingPrint")||"Preparing to print..."})]}),u&&e.jsxs("div",{className:"fixed inset-0 z-[10002] bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-200 print:hidden",children:[e.jsx("div",{className:"w-12 h-12 border-4 border-theme-primary border-t-transparent rounded-full animate-spin mb-4"}),e.jsx("p",{className:"text-lg font-medium text-theme-text dark:text-theme-text font-rhodium",children:t("loading")||"Updating App..."})]})]})})};function es(t={}){const{immediate:n=!1,onNeedRefresh:l,onOfflineReady:g,onRegistered:m,onRegisteredSW:u,onRegisterError:a}=t;let c,h,d;const b=async(r=!0)=>{await h,await d?.()};async function f(){if("serviceWorker"in navigator){if(c=await Me(async()=>{const{Workbox:r}=await import("./vendor-other-C6Ki0joy.js").then(v=>v.M);return{Workbox:r}},__vite__mapDeps([0,1])).then(({Workbox:r})=>new r("/sw.js",{scope:"/",type:"classic"})).catch(r=>{a?.(r)}),!c)return;d=async()=>{await c?.messageSkipWaiting()};{let r=!1;const v=()=>{r=!0,c?.addEventListener("controlling",y=>{y.isUpdate&&window.location.reload()}),l?.()};c.addEventListener("installed",y=>{typeof y.isUpdate>"u"?typeof y.isExternal<"u"?y.isExternal?v():!r&&g?.():y.isExternal?window.location.reload():!r&&g?.():y.isUpdate||g?.()}),c.addEventListener("waiting",v),c.addEventListener("externalwaiting",v)}c.register({immediate:n}).then(r=>{u?u("/sw.js",r):m?.(r)}).catch(r=>{a?.(r)})}}return h=f(),b}class ts{static intervalId=null;static lastKnownBuildId=null;static consecutiveFailures=0;static isPrefetching=!1;static POLL_INTERVAL=3e5;static startPolling(){this.intervalId||(setTimeout(()=>this.checkForUpdates(),8e3),this.intervalId=window.setInterval(()=>{document.visibilityState==="visible"&&this.checkForUpdates()},this.POLL_INTERVAL),document.addEventListener("visibilitychange",this.handleVisibilityChange))}static stopPolling(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null),document.removeEventListener("visibilitychange",this.handleVisibilityChange)}static handleVisibilityChange=()=>{document.visibilityState==="visible"&&this.checkForUpdates()};static async checkForUpdates(){if(!navigator.onLine||window.__updateDetected||this.isPrefetching)return!1;if(this.consecutiveFailures>=3){const n=Math.min(this.consecutiveFailures-2,12);if(Math.random()>1/n)return!1}try{const n=Ve(),l=await fetch(`${n}version.json?t=${Date.now()}`,{cache:"no-store"});if(!l.ok)return this.consecutiveFailures++,!1;this.consecutiveFailures=0;const g=await l.json();if(this.lastKnownBuildId===null)return this.lastKnownBuildId=g.buildId,!1;if(g.buildId===this.lastKnownBuildId)return!1;console.log(`VersionService: New build ${g.buildId} detected (was ${this.lastKnownBuildId}). Prefetching...`),this.isPrefetching=!0;const m=await this.prefetchNewContent(n);return this.isPrefetching=!1,m?(this.lastKnownBuildId=g.buildId,console.log("VersionService: Prefetch complete. Prompting user."),window.dispatchEvent(new CustomEvent("version-update-available",{detail:g})),!0):(console.log("VersionService: Prefetch incomplete. Will retry next cycle."),!1)}catch(n){this.consecutiveFailures++,this.isPrefetching=!1,n instanceof Error&&(n.message.includes("Failed to fetch")||n.message.includes("NetworkError"))||console.warn("Version check error:",n)}return!1}static async prefetchNewContent(n){try{const l=await fetch(`${n}?t=${Date.now()}`,{cache:"no-store"});if(!l.ok)return!1;const g=await l.text(),m=this.extractAssetUrls(g,n);if(m.length===0)return!0;const u=6e4,a=new AbortController,c=setTimeout(()=>a.abort(),u),h=await Promise.allSettled(m.map(r=>fetch(r,{signal:a.signal}).then(v=>{if(!v.ok)throw new Error(`HTTP ${v.status}`);return v.blob()})));clearTimeout(c);const d=h.filter(r=>r.status==="fulfilled").length,b=h.filter(r=>r.status==="rejected").length;return console.log(`VersionService: Prefetched ${d}/${m.length} assets (${b} failed)`),d/m.length>=.8}catch(l){return console.warn("VersionService: Prefetch error:",l),!1}}static extractAssetUrls(n,l){const g=[],m=/<script[^>]+src=["']([^"']+)["']/gi;let u;for(;(u=m.exec(n))!==null;)g.push(this.resolveUrl(u[1],l));const a=/<link[^>]+href=["']([^"']+\.css[^"']*)["']/gi;for(;(u=a.exec(n))!==null;)g.push(this.resolveUrl(u[1],l));return g}static resolveUrl(n,l){return n.startsWith("http://")||n.startsWith("https://")?n:n.startsWith("/")?new URL(n,l).href:new URL(n,l).href}}const Ot=i.createContext(void 0),Tt="nepdate_cached_ads_config",It="nepdate_cached_ads_timestamp",as=1440*60*1e3,ss=()=>{const n=Ve().replace("https://appassets.androidplatform.net","https://nepdate.khumnath.com.np");return`${n.endsWith("/")?n:`${n}/`}ads.json`},rs={"ad-slot1":null,"ad-slot2":null,"ad-slot3":null},ns=({children:t})=>{const[n,l]=i.useState(()=>{if(typeof window<"u")try{const a=localStorage.getItem(Tt);if(a)return JSON.parse(a)}catch(a){console.warn("Failed to parse cached ads config:",a)}return rs}),[g,m]=i.useState(!0),u=async(a=!1)=>{try{if(!a){const d=localStorage.getItem(It);if(d){const b=parseInt(d,10);if(Date.now()-b<as){m(!1);return}}}const c=`${ss()}?t=${Date.now()}`,h=await fetch(c,{cache:"no-store"});if(h.ok){const d=await h.json(),b={"ad-slot1":d?.["ad-slot1"]||null,"ad-slot2":d?.["ad-slot2"]||null,"ad-slot3":d?.["ad-slot3"]||null};localStorage.setItem(It,Date.now().toString()),l(f=>{const r=JSON.stringify(f),v=JSON.stringify(b);return r!==v?(localStorage.setItem(Tt,v),console.log("SW/Ads: Ads config updated from remote source."),b):f})}}catch(c){console.warn("SW/Ads: Soft probe for ads.json failed (using cached/fallback):",c)}finally{m(!1)}};return i.useEffect(()=>{u();const a=setInterval(()=>u(),12e4),c=()=>u(!0);return window.addEventListener("online",c),()=>{clearInterval(a),window.removeEventListener("online",c)}},[]),e.jsx(Ot.Provider,{value:{configs:n,isLoading:g,refreshAds:()=>u(!0)},children:t})},js=()=>{const t=i.useContext(Ot);if(!t)throw new Error("useAds must be used within an AdProvider");return t};wa.Icon.Default.mergeOptions({iconUrl:Sa,shadowUrl:Na,iconRetinaUrl:ka});window.addEventListener("vite:preloadError",t=>{console.warn("Failed to load chunk, reloading page... disabled for debugging",t)});const xt=!!window.Android;xt&&"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(t=>{for(const n of t)n.unregister()});let Vt,ct;xt||(Vt=es({onRegistered(t){ct=t,t&&setInterval(()=>{document.visibilityState==="visible"&&(console.log("SW: Checking for updates (interval)..."),t.update())},300*1e3)},onNeedRefresh(){window.__updateDetected||(window.__updateDetected=!0,window.__pwaUpdateAvailable=!0,console.log("SW: New content available, prompting user."),fetch(`${window.location.origin}/version.json?t=${Date.now()}`,{cache:"no-store"}).then(t=>t.ok?t.json():null).then(t=>{window.dispatchEvent(new CustomEvent("pwa-update-available",{detail:t}))}).catch(()=>{window.dispatchEvent(new CustomEvent("pwa-update-available"))}))},onOfflineReady(){console.log("SW: App ready to work offline")}}));window.refreshPWA=Vt;xt?console.log("Android detected — native assets serving active, web update checks disabled"):"serviceWorker"in navigator?document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&ct&&(console.log("SW: App became visible, checking for updates..."),ct.update())}):(console.log("SW not supported, falling back to version.json polling"),ts.startPolling());const is=()=>{Pt.load(),ca.init(),ra.createRoot(document.getElementById("root")).render(e.jsx(i.StrictMode,{children:e.jsx(xa,{children:e.jsx(ns,{children:e.jsx(qa,{})})})}))};is();export{Fa as D,Ca as T,js as u};
