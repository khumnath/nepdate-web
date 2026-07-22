const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-other-By8KEE3n.js","assets/vendor-other-BUUTtNGK.css","assets/CalendarPrintPage-LsKIuWip.js","assets/vendor-react-CxARfaPr.js","assets/vendor-leaflet-Bjm2FGmM.js","assets/vendor-leaflet-Dgihpmma.css","assets/core-astro-DH4BzoC3.js","assets/core-data-BzebUjTq.js","assets/index-D-is38YF.js","assets/index-DaXjxUGI.css","assets/google-play-badge-DgGAyOYp.js","assets/MonthlyEvents-BEU2xWOu.js","assets/LoadingSpinner-Clq7L-lN.js","assets/PrintAdDialog-BERiIl7r.js","assets/DailySaaitPage-ga1agu9T.js","assets/lib-B9HkI2CN.js","assets/DayDetailPage-BZx80x1O.js","assets/HeaderLogo-CoVG6fIF.js","assets/CalculationDetailsModal-rJERlJmt.js","assets/icons-BeORF7zm.js","assets/kundali-CqFgP7fi.js","assets/LocationModal-DQzEGI1-.js","assets/vendor-utils-9CAs1DVL.js","assets/useTheme-BzBBvQHO.js","assets/BlogCard-Cp-7IImE.js","assets/HomePage-CFRaIbOb.js","assets/LocationInfoBar-C42EpKeU.js","assets/Muhurtas-BJlAGUVu.js","assets/RashifalWidget-BGJFyYt6.js","assets/BlogWidget-BUoVlies.js","assets/SocialMedia-BbbOvsea.js","assets/TimelinePage--YxSPKqh.js"])))=>i.map(i=>d[i]);
import{r as l,j as e,E as Tt,M as we,S as Ie,b as Re,c as $e,d as ct,D as lt,e as Ot,f as It,h as Vt,R as U,L as Yt,X as qe,i as We,G as Ht,a as Kt,k as Gt,T as st,l as ft,m as Qe,n as Qt,o as Zt,p as Xt,q as rt,U as Jt,s as qt,t as ea,F as pt,u as ta}from"./vendor-react-CxARfaPr.js";import{M as _e,h as Ze,a as Xe,b as Ue,t as ke,g as Ct,c as Mt,d as Je,e as Dt,_ as Ce,f as ce,i as Ae,N as ut,j as Oe,k as Et,l as Fe,m as gt,s as aa,S as At,n as sa,o as ra,p as bt,P as He,T as na,E as ia}from"./core-astro-DH4BzoC3.js";import{u as ge,a as Me,A as Lt,P as la,R as oa,S as ca}from"./index-D-is38YF.js";import{H as dt}from"./HeaderLogo-CoVG6fIF.js";import{C as Bt}from"./CalculationDetailsModal-rJERlJmt.js";import{g as da,c as Ke}from"./lib-B9HkI2CN.js";import{k as ha,B as xa}from"./kundali-CqFgP7fi.js";import{A as zt,G as Pt}from"./google-play-badge-DgGAyOYp.js";import{t as ma,u as fa}from"./vendor-other-By8KEE3n.js";import{L as pa}from"./LocationModal-DQzEGI1-.js";import{u as ua}from"./useTheme-BzBBvQHO.js";import{B as ga,g as Ft,a as ba}from"./BlogCard-Cp-7IImE.js";import{l as va,m as ja,a as ya,b as wa}from"./vendor-leaflet-Bjm2FGmM.js";const vt=({icon:t,label:n,isActive:o,onClick:g,className:f})=>e.jsxs("button",{onClick:u=>{u.stopPropagation(),g()},onTouchStart:u=>u.stopPropagation(),onMouseDown:u=>u.stopPropagation(),className:`flex flex-col items-center justify-center pt-2 pb-1 transition-colors ${o?"text-theme-primary dark:text-theme-primary":"text-theme-text dark:text-theme-text"} ${f??""}`,children:[t,e.jsx("span",{className:"text-[11px] mt-1 font-semibold font-rhodium truncate w-full block text-center px-0.5",children:n})]}),ka=({activeView:t,onNavigate:n,menus:o=_e,theme:g,onThemeToggle:f,themeLabel:u,setPopupBackAction:r})=>{const{t:c}=ge(),[x,d]=l.useState(!1),v=l.useRef(null);l.useEffect(()=>{x&&r?r(()=>d(!1)):!x&&r&&r(null);const i=C=>{v.current&&!v.current.contains(C.target)&&d(!1)};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i),r&&x&&r(null)}},[x,r]);const m=[];typeof window<"u"&&window.Android&&(m.push({key:"share",labelKey:"shareApp",icon:e.jsx($e,{className:"w-5 h-5"}),fixed:!1}),m.push({key:"rate",labelKey:"rateApp",icon:e.jsx(ct,{className:"w-5 h-5"}),fixed:!1}));const a=[...o,...m],w=a.filter(i=>i.fixed&&!i.hideOnTabMenu),j=a.filter(i=>!i.fixed&&!i.hideOnTabMenu);return e.jsxs("nav",{ref:v,className:`
        fixed bottom-0 left-0 right-0 w-full h-16
        bg-theme-surface dark:bg-theme-surface
        border-t border-gray-500 dark:border-gray-900
        shadow-md
        z-[9999] lg:hidden
      `,"aria-label":"Bottom navigation",onClick:i=>i.stopPropagation(),onTouchStart:i=>i.stopPropagation(),onMouseDown:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center h-full w-full relative px-1 overflow-hidden",children:[w.map(i=>e.jsx(vt,{icon:i.icon,label:c(i.labelKey),isActive:t===i.key,onClick:()=>n(i.key),className:"flex-1 min-w-0"},i.key)),j.length>0&&e.jsx("div",{className:"relative text-[11px] font-semibold flex-none w-[72px] shrink-0",children:e.jsx(vt,{icon:e.jsx(Tt,{className:"w-5 h-5"}),label:c("more"),isActive:x,onClick:()=>d(i=>!i),className:"w-full font-rhodium"})})]}),x&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-transparent",onClick:i=>{i.stopPropagation(),d(!1)},onTouchStart:i=>{i.stopPropagation()},onMouseDown:i=>{i.stopPropagation()}}),e.jsxs("div",{className:`
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
            `,role:"menu",onClick:i=>i.stopPropagation(),onTouchStart:i=>i.stopPropagation(),onMouseDown:i=>i.stopPropagation(),children:[j.map(i=>e.jsxs("button",{type:"button",onClick:C=>{C.stopPropagation(),C.preventDefault(),i.key==="share"?Ze():i.key==="rate"?Xe():n(i.key),setTimeout(()=>d(!1),100)},className:`
                  w-full flex items-center gap-3 px-2 py-2
                  text-left text-[13px]
                  rounded-md
                  hover:bg-theme-bg dark:hover:bg-gray-600
                  focus:bg-theme-bg dark:focus:bg-gray-600
                  text-theme-text dark:text-theme-text
                `,role:"menuitem",children:[i.icon,e.jsx("span",{className:"truncate font-rhodium",children:c(i.labelKey)})]},i.key)),e.jsx("div",{className:"h-px bg-gray-200 dark:bg-gray-600 my-1 mx-2"}),e.jsxs("button",{type:"button",onClick:i=>{i.stopPropagation(),i.preventDefault(),f(),setTimeout(()=>d(!1),100)},className:`
                w-full flex items-center gap-3 px-2 py-2
                text-left text-[13px]
                rounded-md
                hover:bg-theme-bg dark:hover:bg-gray-600
                focus:bg-theme-bg dark:focus:bg-gray-600
                text-theme-text dark:text-theme-text
              `,role:"menuitem",children:[g==="light"?e.jsx(we,{className:"w-4 h-4"}):e.jsx(Ie,{className:"w-4 h-4"}),e.jsx("span",{className:"truncate font-rhodium",children:u})]}),e.jsx("div",{className:"h-px bg-gray-200 dark:bg-gray-600 my-1 mx-2"}),e.jsxs("button",{type:"button",onClick:i=>{i.stopPropagation(),i.preventDefault(),Ue(),setTimeout(()=>d(!1),100)},className:`w-full flex items-center gap-3 px-2 py-2
                text-left text-[13px]
                rounded-md
                hover:bg-theme-bg dark:hover:bg-gray-600
                focus:bg-theme-bg dark:focus:bg-gray-600
                text-theme-text dark:text-theme-text`,children:[e.jsx(Re,{className:"w-4 h-4"}),c("reload")]})]})]})]})},Na=({activeView:t,activeSystem:n,onNavigate:o,showInstall:g=!1,onInstallClick:f,theme:u,onThemeToggle:r})=>{const c=l.useRef(null),x=l.useRef(null),{t:d}=ge(),{language:v,updateLanguage:m}=Me(),a=["ne","en","hi"],w={ne:"ने",en:"EN",hi:"हि"},j=v==="auto"?"ne":v,i=a[(a.indexOf(j)+1)%a.length],[C,s]=l.useState([]),[L,H]=l.useState([]),[A,O]=l.useState(!1),R=(S,M)=>{const z=document.createElement("canvas").getContext("2d");return z?(z.font=M,Math.ceil(z.measureText(S).width*1.1)):100};return l.useEffect(()=>{const S=()=>{if(!c.current)return;const M=4,V=24,z=16,K=8,F=240,ie=c.current.offsetWidth,te=180;let J=0;g&&(J=R(d("install_app"),"500 14px Inter")+32+20+20);const G=ie-te-J-F,B=R(d("more"),'500 14px "Rhodium Libre", serif')+V+z+K+M+8,T={key:"refresh",labelKey:"reload",icon:e.jsx(Re,{className:"w-5 h-5"}),fixed:!1},$=[];typeof window<"u"&&window.Android&&($.push({key:"share",labelKey:"shareApp",icon:e.jsx($e,{className:"w-5 h-5"}),fixed:!1}),$.push({key:"rate",labelKey:"rateApp",icon:e.jsx(ct,{className:"w-5 h-5"}),fixed:!1}));const h=[..._e.filter(b=>!b.hideOnTopNav),...$,T],p=h.map(b=>{const y=R(d(b.labelKey),'500 14px "Rhodium Libre", serif');return{...b,width:y+V+z+K}});if(p.reduce((b,y,I)=>b+y.width+(I>0?M:0),0)<=G)s(h),H([]);else{const b=G-B;let y=0;const I=[],D=[];p.forEach((P,Y)=>{const ne=P.width+(Y>0?M:0);y+ne<=b?(I.push(P),y+=ne):D.push(P)}),s(I),H(D)}};return S(),document.fonts.ready.then(S),window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[g,d,v]),l.useEffect(()=>{if(!A)return;const S=M=>{x.current&&!x.current.contains(M.target)&&O(!1)};return document.addEventListener("mousedown",S),()=>document.removeEventListener("mousedown",S)},[A]),e.jsxs("nav",{ref:c,className:"hidden md:flex w-[calc(100%-2rem)] max-w-7xl 2xl:max-w-[1600px] mx-auto mt-3 mb-1 px-6 bg-white dark:bg-gray-800 h-[72px] items-center relative rounded-xl shadow-sm border border-theme-border/30 z-50",children:[e.jsx(dt,{activeSystem:n,className:"mr-6 flex-shrink-0",hideControl:t!=="calendar",isLight:!1}),e.jsxs("div",{className:"flex items-center gap-1 flex-1 min-w-0",children:[C.map(S=>e.jsxs("button",{onClick:()=>{S.key==="refresh"?Ue():S.key==="share"?Ze():S.key==="rate"?Xe():o(S.key)},className:`flex-shrink-0 px-3 py-2 rounded-full flex items-center gap-2 whitespace-nowrap text-sm font-medium font-rhodium transition-colors ${t===S.key?"bg-theme-bg dark:bg-gray-700 text-theme-primary shadow-sm":"text-theme-text-muted hover:text-theme-text hover:bg-slate-50 dark:hover:bg-gray-700"}`,children:[S.icon," ",e.jsx("span",{className:"font-rhodium",children:d(S.labelKey)})]},S.key)),L.length>0&&e.jsxs("div",{ref:x,className:"relative flex-shrink-0",children:[e.jsxs("button",{onClick:S=>{S.stopPropagation(),O(M=>!M)},className:"flex-shrink-0 px-3 py-2 rounded-full flex items-center gap-2 whitespace-nowrap text-theme-text-muted hover:text-theme-text hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors font-rhodium font-medium",children:[e.jsx(Tt,{className:"w-4 h-4"})," ",e.jsx("span",{className:"font-rhodium",children:d("more")})]}),A&&e.jsx("div",{className:"absolute left-0 top-full mt-1 w-48 bg-theme-surface dark:bg-gray-700 border border-theme-border dark:border-theme-border rounded-md shadow-lg flex flex-col z-[1000] py-1",children:L.map(S=>e.jsxs("button",{onClick:M=>{M.stopPropagation(),S.key==="refresh"?Ue():S.key==="share"?Ze():S.key==="rate"?Xe():o(S.key),O(!1)},className:"px-4 py-2 text-left hover:bg-theme-bg dark:hover:bg-gray-600 flex items-center gap-2 whitespace-nowrap text-sm w-full font-rhodium",children:[S.icon," ",e.jsx("span",{className:"font-rhodium",children:d(S.labelKey)})]},S.key))})]})]}),e.jsxs("div",{className:"flex items-center gap-1 ml-4 flex-shrink-0",children:[e.jsx("button",{onClick:()=>m(i),className:"w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-gray-700 hover:bg-slate-100 dark:hover:bg-gray-600 transition-colors text-xs font-bold text-theme-text-muted hover:text-theme-text border border-theme-border/50","aria-label":"Toggle Language",title:`Language: ${j.toUpperCase()}`,children:w[j]||"ने"}),e.jsx("button",{onClick:r,className:"w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-gray-700 hover:bg-slate-100 dark:hover:bg-gray-600 transition-colors text-theme-text-muted hover:text-theme-text border border-theme-border/50","aria-label":"Toggle Theme",children:u==="light"?e.jsx(we,{className:"w-5 h-5"}):e.jsx(Ie,{className:"w-5 h-5"})}),g&&f&&e.jsxs("button",{onClick:f,className:"px-5 py-2.5 rounded-full bg-theme-primary text-white hover:opacity-90 flex items-center gap-2 text-sm font-bold transition-opacity shadow-md whitespace-nowrap font-rhodium",children:[e.jsx(lt,{className:"w-4 h-4"}),e.jsx("span",{className:"font-rhodium",children:d("installApp")})]})]})]})},Sa=()=>{const[t,n]=l.useState(!1),{t:o}=ge();return e.jsxs("footer",{className:"text-center py-3 sm:py-4 text-xs sm:text-sm text-theme-text-muted dark:text-theme-text-muted flex flex-wrap justify-center items-center",children:[e.jsxs("span",{className:"mr-1",children:["© ",new Date().getFullYear()," ",e.jsx("a",{href:"https://github.com/khumnath/nepdate",target:"_blank",rel:"noopener noreferrer",className:"underline hover:text-theme-text dark:hover:text-gray-200",children:"Nepdate Calendar Project"}),"."]}),e.jsx("span",{children:"All rights reserved."}),e.jsx("span",{className:"mx-2 hidden sm:inline text-gray-400",children:"|"}),e.jsx("button",{onClick:()=>n(!0),className:"underline hover:text-theme-text dark:hover:text-gray-200 mt-2 sm:mt-0",children:o("calculationDetails")}),t&&e.jsx(Bt,{onClose:()=>n(!1)})]})},Se={calendar:t=>[{label:t("bsMonth_0"),value:"calendar",param:{month:0}},{label:t("bsMonth_1"),value:"calendar",param:{month:1}},{label:t("bsMonth_2"),value:"calendar",param:{month:2}},{label:t("bsMonth_3"),value:"calendar",param:{month:3}},{label:t("bsMonth_4"),value:"calendar",param:{month:4}},{label:t("bsMonth_5"),value:"calendar",param:{month:5}}],calendar_ad:t=>[{label:t("adMonth_0"),value:"calendar",param:{month:0}},{label:t("adMonth_1"),value:"calendar",param:{month:1}},{label:t("adMonth_2"),value:"calendar",param:{month:2}},{label:t("adMonth_3"),value:"calendar",param:{month:3}},{label:t("adMonth_4"),value:"calendar",param:{month:4}},{label:t("adMonth_5"),value:"calendar",param:{month:5}}],calendar2:t=>[{label:t("bsMonth_6"),value:"calendar",param:{month:6}},{label:t("bsMonth_7"),value:"calendar",param:{month:7}},{label:t("bsMonth_8"),value:"calendar",param:{month:8}},{label:t("bsMonth_9"),value:"calendar",param:{month:9}},{label:t("bsMonth_10"),value:"calendar",param:{month:10}},{label:t("bsMonth_11"),value:"calendar",param:{month:11}}],calendar2_ad:t=>[{label:t("adMonth_6"),value:"calendar",param:{month:6}},{label:t("adMonth_7"),value:"calendar",param:{month:7}},{label:t("adMonth_8"),value:"calendar",param:{month:8}},{label:t("adMonth_9"),value:"calendar",param:{month:9}},{label:t("adMonth_10"),value:"calendar",param:{month:10}},{label:t("adMonth_11"),value:"calendar",param:{month:11}}],rashifal:t=>[{label:t("मेष","rashi"),value:"rashifal",param:"mesh"},{label:t("वृष","rashi"),value:"rashifal",param:"brish"},{label:t("मिथुन","rashi"),value:"rashifal",param:"mithun"},{label:t("कर्कट","rashi"),value:"rashifal",param:"karkat"},{label:t("सिंह","rashi"),value:"rashifal",param:"simha"},{label:t("कन्या","rashi"),value:"rashifal",param:"kanya"}],rashifal2:t=>[{label:t("तुला","rashi"),value:"rashifal",param:"tula"},{label:t("वृश्चिक","rashi"),value:"rashifal",param:"brishchik"},{label:t("धनु","rashi"),value:"rashifal",param:"dhanu"},{label:t("मकर","rashi"),value:"rashifal",param:"makar"},{label:t("कुम्भ","rashi"),value:"rashifal",param:"kumbha"},{label:t("मीन","rashi"),value:"rashifal",param:"meen"}],services:t=>[{label:t("converter"),value:"converter"},{label:t("rashifalMenu")||t("rashifalTitle")||"Horoscope",value:"rashifal"},{label:t("kundali"),value:"kundali"},{label:t("eclipse"),value:"eclipse"},{label:t("radio"),value:"radio"},{label:t("facebook"),value:"facebook"}]},Ta=({onNavigate:t})=>{const{t:n,language:o,tAstro:g,calendarSystem:f}=ge(),[u,r]=l.useState(!1),c=(x,d,v)=>{x.preventDefault(),t(d,v),d==="calendar"?setTimeout(()=>{const m=document.getElementById("main-calendar-grid");m?m.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})},100):window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs("footer",{className:"hidden md:block bg-theme-bg dark:bg-theme-bg border-t border-theme-border dark:border-theme-border pt-10 pb-8 mt-auto",children:[e.jsxs("div",{className:"max-w-7xl xl:max-w-6xl mx-auto px-4 md:px-6",children:[e.jsxs("div",{className:"grid grid-cols-4 gap-8 mb-10",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-theme-text dark:text-theme-text font-bold mb-4 uppercase text-sm tracking-wider font-rhodium",children:f==="ad"?o==="en"?"Gregorian Calendar":o==="hi"?"ग्रेगोरियन कैलेंडर":"अंग्रेजी क्यालेण्डर":o==="en"?"Vikram Calendar":o==="hi"?"विक्रम कैलेंडर":"विक्रम क्यालेण्डर"}),e.jsxs("div",{className:"grid grid-cols-2 gap-x-4",children:[e.jsx("ul",{className:"space-y-2 text-sm text-theme-text-muted dark:text-theme-text-muted",children:(f==="ad"?Se.calendar_ad(n):Se.calendar(n)).map((x,d)=>e.jsx("li",{children:e.jsx("button",{onClick:v=>c(v,x.value,x.param),className:"hover:text-theme-primary dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:x.label})},d))}),e.jsx("ul",{className:"space-y-2 text-sm text-theme-text-muted dark:text-theme-text-muted",children:(f==="ad"?Se.calendar2_ad(n):Se.calendar2(n)).map((x,d)=>e.jsx("li",{children:e.jsx("button",{onClick:v=>c(v,x.value,x.param),className:"hover:text-theme-primary dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:x.label})},d))})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-theme-text dark:text-theme-text font-bold mb-4 uppercase text-sm tracking-wider font-rhodium",children:o==="en"?"Horoscope":"राशिफल (Horoscope)"}),e.jsxs("div",{className:"grid grid-cols-2 gap-x-4",children:[e.jsx("ul",{className:"space-y-2 text-sm text-theme-text-muted dark:text-theme-text-muted",children:Se.rashifal(g).map((x,d)=>e.jsx("li",{children:e.jsx("button",{onClick:v=>c(v,x.value,x.param),className:"hover:text-theme-primary dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:x.label})},d))}),e.jsx("ul",{className:"space-y-2 text-sm text-theme-text-muted dark:text-theme-text-muted",children:Se.rashifal2(g).map((x,d)=>e.jsx("li",{children:e.jsx("button",{onClick:v=>c(v,x.value,x.param),className:"hover:text-theme-primary dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:x.label})},d))})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-theme-text dark:text-theme-text font-bold mb-4 uppercase text-sm tracking-wider font-rhodium",children:o==="en"?"Services":o==="hi"?"सेवाएं (Services)":"सेवाहरू (Services)"}),e.jsx("ul",{className:"space-y-2 text-sm text-theme-text-muted dark:text-theme-text-muted",children:Se.services(n).map((x,d)=>e.jsx("li",{children:e.jsx("button",{onClick:v=>c(v,x.value),className:"hover:text-theme-primary dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:x.label})},d))})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-4 -ml-2",children:e.jsx(dt,{activeSystem:"bs"})}),e.jsx("p",{className:"text-sm text-theme-text-muted dark:text-theme-text-muted mb-6 leading-relaxed",children:o==="en"?"Your trusted partner for Nepali dates, festivals, astrology, and muhurtas.":o==="hi"?"नेपाली तिथियों, त्योहारों, ज्योतिष और मुहूर्तों के लिए आपका विश्वसनीय साथी।":"नेपाली मिति, चाडबाड, ज्योतिष र मुहूर्तहरूको लागि तपाईंको भरपर्दो पात्रो।"}),e.jsx("a",{href:"https://play.google.com/store/apps/details?id=com.khumnath.nepdate",target:"_blank",rel:"noopener noreferrer",className:"inline-block mb-6",children:e.jsx("img",{src:"/images/en_badge_web_generic.png",alt:"Get it on Google Play",className:"h-16 -ml-3"})}),e.jsxs("ul",{className:"space-y-2 text-sm text-theme-text-muted dark:text-theme-text-muted",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(Ot,{className:"w-4 h-4 shrink-0"}),e.jsx("span",{children:"aksharlabstudio1@gmail.com"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(It,{className:"w-4 h-4 shrink-0"}),e.jsx("span",{children:o==="en"?"Butwal, Nepal":"बुटवल, नेपाल"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(Vt,{className:"w-4 h-4 shrink-0"}),e.jsx("a",{href:"https://www.facebook.com/people/NepDate-Patro/61584433679641/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-theme-primary transition-colors",children:o==="en"?"NepDate Patro":"नेपडेट पात्रो"})]})]})]})]}),e.jsxs("div",{className:"border-t border-theme-border dark:border-theme-border pt-6 text-center flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4",children:[e.jsxs("p",{className:"text-sm text-theme-text-muted dark:text-theme-text-muted",children:["© ",new Date().getFullYear()," ",o==="en"?"NepDate Patro. All Rights Reserved.":"नेपडेट पात्रो। सर्वाधिकार सुरक्षित।"]}),e.jsx("span",{className:"hidden sm:inline text-gray-400",children:"|"}),e.jsx("button",{onClick:()=>r(!0),className:"text-sm text-theme-text-muted dark:text-theme-text-muted underline hover:text-theme-text dark:hover:text-gray-200 transition-colors",children:n("calculationDetails")})]})]}),u&&e.jsx(Bt,{onClose:()=>r(!1)})]})},Wt=(t,n,o,g,f,u=null,r=[],c=null)=>{const x=new Date,d=Math.floor((x.getTime()-new Date(x.getFullYear(),0,0).getTime())/1e3/60/60/24),v=[`आज साताको ${t}। `,`आज ${t}को दिन। `,`आज ${t} परेको छ। `,`आज सप्ताहको ${t}। `,`आज ${t}को शुभ दिन। `];let m=v[d%v.length];if(r&&r.length>0){const j=r.map(i=>i.name).join(" र ");m+=`आजको दिन ${j} परेको छ। `}o?(m+=`आज ${o} सम्म ${n} तिथि रहनेछ`,g?m+=` र त्यसपछि ${g} तिथि आरम्भ हुनेछ। `:m+="। "):m+=`आज दिनभर ${n} तिथि रहनेछ। `,u?m+=`साथै आज ${u} नक्षत्र र `:m+="आज ";let w={विष्कुम्भ:"यस योगमा गरिएको कार्यले प्रारम्भमा केही बाधा आए पनि अन्त्यमा सफलता दिलाउनेछ।",प्रीति:"यस योगले प्रेम, सद्भाव र पारिवारिक सुख वृद्धि गर्नेछ।",आयुष्मान:"यस योगले आयु र स्वास्थ्यमा सकारात्मक प्रभाव पार्नेछ।",आयुष्मान्:"यस योगले आयु र स्वास्थ्यमा सकारात्मक प्रभाव पार्नेछ।",सौभाग्य:"यस योगमा गरिएका कार्यले नाम जस्तै सौभाग्य र सुख लिएर आउनेछ।",शोभन:"यस योगले सम्पूर्ण कार्यमा सुन्दरता र शुभ फल प्रदान गर्नेछ।",अतिगण्ड:"यस योगमा कार्य गर्दा केही कठिनाइ आउन सक्ने भएकाले संयमता अपनाउनुहोला।",सुकर्मा:"यस योगले असल कर्मतर्फ प्रेरित गर्दै पुण्य र सफलता दिलाउनेछ।",धृति:"यस योगमा गरिएको धैर्यपूर्ण कार्यले स्थायी र उत्तम प्रतिफल दिनेछ।",शूल:"यस योगमा महत्त्वपूर्ण निर्णयहरू लिँदा विशेष होसियारी अपनाउनुहोला।",गण्ड:"यस योगमा नयाँ कार्यको थालनी गर्दा सावधानी अपनाउनु उपयुक्त हुनेछ।",वृद्धि:"यस योगले धन, ज्ञान र व्यवसायमा निरन्तर वृद्धि गराउनेछ।",ध्रुव:"यस योगमा सुरु गरिएका कार्यहरू स्थायी हुने र दीर्घकालीन लाभ दिनेछन्।",व्याघात:"यस योगमा अनावश्यक विवाद र वादविवादबाट टाढै रहनु बेस हुनेछ।",हर्षण:"यस योगले मनमा प्रशन्नता ल्याउने र कार्यमा उत्साह जगाउनेछ।",वज्र:"यस योगमा गरिएको कार्यले वज्र जस्तै बलियो र दृढ परिणाम दिनेछ।",सिद्धि:"यस योगले सम्पूर्ण कार्यमा सिद्धि (सफलता) र मनोकामना पूर्ण गराउनेछ।",व्यतीपात:"यस योगमा ठूला र महत्त्वपूर्ण निर्णयहरू लिँदा पुनर्विचार गर्नुहोला।",वरीयान्:"यस योगले जीवनमा श्रेष्ठता, सम्मान र उच्च सफलता दिलाउनेछ।",परिघ:"यस योगमा कार्य गर्दा केही बाधाहरू आउन सक्ने भएकाले धैर्यता अपनाउनुहोला।",शिव:"यस योगले महादेवको कृपास्वरूप सम्पूर्ण कार्यमा कल्याण र शान्ति ल्याउनेछ।",सिद्ध:"यस योगमा थालिएका कामहरू विना कुनै विघ्नबाधा सम्पन्न हुनेछन्।",साध्य:"यस योगले असम्भव जस्तो लाग्ने कार्यलाई पनि सहजै साध्न (पुरा गर्न) मद्दत गर्नेछ।",शुभ:"यस योगले जीवनका हरेक क्षेत्रमा शुभ फल र मङ्गलमय परिणाम दिनेछ।",शुक्ल:"यस योगले ज्ञान, पवित्रता र कार्यमा उज्ज्वलता प्रदान गर्नेछ।",ब्रह्म:"यस योगले आध्यात्मिक चिन्तन र विद्या अध्ययनमा विशेष सफलता दिनेछ।",इन्द्र:"यस योगले नेतृत्व क्षमता, राज्यसुख र प्रशासनिक कार्यमा विजय दिलाउनेछ।",वैधृति:"यस योगमा नयाँ लगानी वा महत्त्वपूर्ण कार्य गर्दा सजग रहनुहोला।"}[f];if(!w){const j=["यस योगमा गरिएका कार्यहरूमा शुभ फल मिल्ने विश्वास गरिन्छ।","यस योगले सामान्यतया सकारात्मक र मङ्गलमय परिणाम दिनेछ।","यस योगमा थालिएका सम्पूर्ण सत्कर्महरूमा सफलता प्राप्त हुनेछ।","यस योगको प्रभावले दैनिक कार्यहरू विना कुनै बाधा सम्पन्न हुनेछन्।","यस योगले आजको दिनलाई सुखद र फलदायी बनाउन मद्दत गर्नेछ।"],i=new Date,C=Math.floor((i.getTime()-new Date(i.getFullYear(),0,0).getTime())/1e3/60/60/24);w=j[C%j.length]}if(m+=`आज ${f} योग परेको छ। ${w} `,c&&c.isActiveCivil){const i={bhadraResidenceEarth:"मृत्यु लोक (पृथ्वी)",bhadraResidenceHeaven:"स्वर्ग लोक (स्वर्ग)",bhadraResidenceUnderworld:"पाताल लोक (पाताल)"}[c.residence]||c.residence;c.isHarmful?m+=`ध्यान दिनुहोला, आज ${i}मा भद्रा परेको छ र यसको प्रभाव अशुभ मानिन्छ। शुभ कार्यहरू भद्रा समयपछि मात्र गर्दा राम्रो हुनेछ।`:m+=`आज ${i}मा भद्रा रहे पनि यसको प्रभाव शुभ फलदायी मानिन्छ।`}else m+="आज गरिएका कार्यहरूमा शुभ फल मिल्ने विश्वास गरिन्छ।";return m},Ia=(t,n=[])=>{if(n&&n.length>0){const c=n[0].name,x=[`${c} को यस पावन अवसरमा व्रत, पूजापाठ तथा दान-पुण्य गर्नाले विशेष फल मिल्नेछ।`,`आज ${c} को विशेष दिन भएकाले इष्टदेवको आराधना गर्दा जीवनमा सुख र समृद्धि प्राप्त हुनेछ।`,`${c} को शुभ अवसरमा सम्पूर्ण परिवारको कल्याणको कामना गर्दै धार्मिक कार्यमा सहभागी हुनुहोला।`],d=new Date,v=Math.floor((d.getTime()-new Date(d.getFullYear(),0,0).getTime())/1e3/60/60/24);return x[v%x.length]}const o={0:["आज आइतबार भगवान सूर्य नारायणको उपासना र आदित्य हृदय स्तोत्रको पाठ गर्नाले तेज, ऊर्जा र सफलता प्राप्त हुनेछ।","सूर्यदेवलाई अर्घ्य दिएर दिनको आरम्भ गर्नुहोस्, सम्पूर्ण कार्यहरूमा सिद्धि मिल्नेछ।"],1:["आज सोमबार भगवान शिवको आराधना र जल अभिषेक गर्नाले मानसिक शान्ति र सुख प्राप्त हुनेछ।","महादेवको पूजा अर्चना गर्दै ॐ नमः शिवाय मन्त्रको जप गर्नुहोला, दिन शुभ रहनेछ।"],2:["आज मंगलबार संकटमोचन हनुमानजीको दर्शन र हनुमान चालिसा पाठ गर्नाले सम्पूर्ण विघ्न-बाधा दूर हुनेछन्।","बजरङ्गबलीको कृपाले तपाईंका कार्यहरू निर्विघ्न सम्पन्न हुनेछन्। आज रातो वस्त्र धारण गर्नु शुभ मानिन्छ।"],3:["आज बुधबार भगवान गणेश र श्रीकृष्णको पूजा आराधना गर्नाले बुद्धि र विवेकमा वृद्धि हुनेछ।","श्रीहरि विष्णुको स्मरण गर्दै दिनको सुरुवात गर्नुहोला, घर-परिवारमा प्रेम र सद्भाव बनिरहनेछ।"],4:["आज बिहीबार भगवान विष्णु र बृहस्पति देवको पूजा गर्नाले शिक्षा, ज्ञान र धनमा वृद्धि हुनेछ।","आजको दिन पहेँलो वस्त्र धारण गर्नु र गुरुजनको आशीर्वाद लिनु अत्यन्त शुभ मानिन्छ।"],5:["आज शुक्रबार माता लक्ष्मी र सन्तोषी माताको आराधना गर्नाले घरमा धन-धान्य र सुख-समृद्धिले बास गर्नेछ।","माता भगवतीको स्मरण गर्दै कन्याहरूलाई दान गर्नाले विशेष शुभ फल प्राप्त हुनेछ।"],6:["आज शनिबार न्यायका देवता शनिदेवको पूजा र पिपलको वृक्षमा जल चढाउनाले सम्पूर्ण कष्ट निवारण हुनेछन्।","शनिदेवको कृपा प्राप्त गर्न आज गरिब तथा दुःखीहरूलाई सहयोग गर्नु अत्यन्त फलदायी मानिन्छ।"]},g=o[t]||o[0],f=new Date,r=Math.floor((f.getTime()-new Date(f.getFullYear(),0,0).getTime())/1e3/60/60/24)%g.length;return g[r]},Ca=["आइतवार","सोमवार","मंगलवार","बुधवार","बिहीवार","शुक्रवार","शनिवार"],Q=t=>Mt(t),jt=({data:t,date:n,onLoad:o,variant:g,isOffscreen:f=!1})=>{const{location:u}=Me(),r=b=>{if(!b)return"";try{const y=new Date(b);if(isNaN(y.getTime()))return"";const I=Je(y,u.zoneId||"Asia/Kathmandu");let D=I.getUTCHours();const P=I.getUTCMinutes();let Y="बिहान";return D>=12&&D<16?Y="दिउँसो":D>=16&&D<20?Y="बेलुका":(D>=20||D<4)&&(Y="राति"),D>12&&(D-=12),D===0&&(D=12),`${Y} ${Q(D)}:${Q(P<10?"0"+P:P)} सम्म`}catch{return""}},c=b=>{if(!b)return"—";try{const y=new Date(b);if(isNaN(y.getTime()))return"—";const I=Je(y,u.zoneId||"Asia/Kathmandu");let D=I.getUTCHours();const P=I.getUTCMinutes();let Y="बिहान";return D>=12&&D<16?Y="दिउँसो":D>=16&&D<20?Y="बेलुका":(D>=20||D<4)&&(Y="राति"),D>12&&(D-=12),D===0&&(D=12),`${Q(D)}:${Q(P<10?"0"+P:P)} ${Y}`}catch{return"—"}};if(U.useEffect(()=>{if(o){const b=setTimeout(o,500);return()=>clearTimeout(b)}},[o,t]),!t)return null;const x=ke(n),d=x?.year?x.year.toString():"0",v=x?.monthName||"",m=x?.day||0,a=Ct(n),w=Ca[a]||"",i=`${["जनवरी","फेब्रुअरी","मार्च","अप्रिल","मे","जुन","जुलाई","अगस्ट","सेप्टेम्बर","अक्टोबर","नोभेम्बर","डिसेम्बर"][n.getUTCMonth()]} ${Q(n.getUTCDate())}, ${Q(n.getUTCFullYear())}`,C=t?.sunriseMs?new Date(t.sunriseMs):t?.sunriseIso?new Date(t.sunriseIso):null,s=t?.nextSunriseMs?new Date(t.nextSunriseMs):t?.nextSunriseIso?new Date(t.nextSunriseIso):null,L=b=>!b||!s||!C?b:b.filter(y=>{const I=y.startTime?new Date(y.startTime):null,D=y.endTime?new Date(y.endTime):null;return!(D&&D<=C||I&&I>=s)}),H=L(t.tithis||[]),A=L(t.nakshatras||[]),O=L(t.yogas||[]),R=L(t.karanas||[]),S=L(t.moonRashis||[]),M=H?.[0],V=H?.[1],z=A?.[0],K=A?.[1],F=O?.[0],ie=O?.[1],te=R?.[0],J=R?.[1],G=S?.[0],re=Wt(w,M?.name||"",r(M?.endTime),V?.name||null,F?.name||"",z?.name||null,t.events,t.bhadra),B=Ia(a,t.events),$=(()=>{if(!t.sunriseIso||!t.sunsetIso||!t.nextSunriseIso)return{dinamanaGp:"—",ratrimanaGp:"—"};const b=t.sunriseMs??new Date(t.sunriseIso).getTime(),y=t.sunsetMs??new Date(t.sunsetIso).getTime(),I=t.nextSunriseMs??new Date(t.nextSunriseIso).getTime(),D=I-b,P=y-b,Y=I-y,ne=le=>{const fe=le/D*60,q=Math.floor(fe),oe=Math.floor((fe-q)*60);return`${Q(q)} घडी ${Q(oe)} पला`};return{dinamanaGp:ne(P),ratrimanaGp:ne(Y)}})(),h=t.ayana==="Uttarayana"?"उत्तरायण":t.ayana==="Dakshinayana"?"दक्षिणायन":t.ayana,p={1:{primary:"#1a237e",secondary:"#c62828",sidebar:"linear-gradient(180deg, #1565c0 0%, #0d47a1 50%, #1a237e 100%)",footer:"linear-gradient(95deg,#0a4f48 0%,#0f7269 22%,#17967f 42%,#4a9f6f 62%,#c9ac4e 82%,#e8bd45 100%)",bg:"linear-gradient(135deg, #f0f2f5, #e8eaed)"},2:{primary:"#4a148c",secondary:"#c2185b",sidebar:"linear-gradient(180deg, #7b1fa2 0%, #6a1b9a 50%, #4a148c 100%)",footer:"linear-gradient(95deg,#4a148c 0%,#6a1b9a 22%,#8e24aa 42%,#ab47bc 62%,#ce93d8 82%,#f48fb1 100%)",bg:"linear-gradient(135deg, #f3e5f5, #fce4ec)"},3:{primary:"#bf360c",secondary:"#b71c1c",sidebar:"linear-gradient(180deg, #e65100 0%, #d84315 50%, #bf360c 100%)",footer:"linear-gradient(95deg,#bf360c 0%,#d84315 22%,#e64a19 42%,#f4511e 62%,#ff8a65 82%,#ffcc80 100%)",bg:"linear-gradient(135deg, #fbe9e7, #fff3e0)"},4:{primary:"#006064",secondary:"#01579b",sidebar:"linear-gradient(180deg, #00838f 0%, #006064 50%, #004d40 100%)",footer:"linear-gradient(95deg,#004d40 0%,#00695c 22%,#00796b 42%,#00897b 62%,#4db6ac 82%,#80cbc4 100%)",bg:"linear-gradient(135deg, #e0f7fa, #e0f2f1)"},5:{primary:"#880e4f",secondary:"#e65100",sidebar:"linear-gradient(180deg, #c2185b 0%, #880e4f 50%, #4a148c 100%)",footer:"linear-gradient(95deg,#b71c1c 0%,#c62828 22%,#d32f2f 42%,#e53935 62%,#ffb300 82%,#ffca28 100%)",bg:"linear-gradient(135deg, #fce4ec, #fbe9e7)"}},N=p[g||1]||p[1];return e.jsx("div",{style:f?{position:"absolute",top:-9999,left:-9999,zIndex:-1,pointerEvents:"none"}:{},children:e.jsxs("div",{id:"panchanga-share-card",className:"poster",style:{"--theme-primary":N.primary,"--theme-secondary":N.secondary,"--theme-sidebar":N.sidebar,"--theme-footer":N.footer,"--theme-bg":N.bg},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`

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
`}}),e.jsxs("svg",{className:"mountain-bg",viewBox:"0 0 500 200",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"skyGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#b3d4f0"}),e.jsx("stop",{offset:"100%",stopColor:"#e8f0f8"})]}),e.jsxs("linearGradient",{id:"mountainGrad1",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),e.jsx("stop",{offset:"40%",stopColor:"#d0dce8"}),e.jsx("stop",{offset:"100%",stopColor:"#8fa4b8"})]}),e.jsxs("linearGradient",{id:"mountainGrad2",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#e8eef4"}),e.jsx("stop",{offset:"100%",stopColor:"#a0b4c8"})]})]}),e.jsx("rect",{width:"500",height:"200",fill:"url(#skyGrad)",opacity:"0.5"}),e.jsx("path",{d:"M100,180 L180,60 L220,90 L280,30 L340,80 L400,50 L460,100 L500,80 L500,200 L100,200 Z",fill:"url(#mountainGrad2)",opacity:"0.6"}),e.jsx("path",{d:"M150,180 L220,80 L260,110 L310,50 L370,90 L420,60 L470,110 L500,90 L500,200 L150,200 Z",fill:"url(#mountainGrad1)",opacity:"0.8"}),e.jsx("path",{d:"M280,30 L295,55 L270,50 Z",fill:"white",opacity:"0.9"}),e.jsx("path",{d:"M310,50 L325,70 L300,65 Z",fill:"white",opacity:"0.8"}),e.jsx("path",{d:"M400,50 L415,70 L390,65 Z",fill:"white",opacity:"0.9"}),e.jsxs("g",{transform:"translate(380, 60)",children:[e.jsx("rect",{x:"10",y:"80",width:"60",height:"8",fill:"#8B4513",rx:"2"}),e.jsx("polygon",{points:"0,80 80,80 70,65 10,65",fill:"#654321"}),e.jsx("rect",{x:"15",y:"65",width:"50",height:"15",fill:"#8B6914"}),e.jsx("polygon",{points:"5,65 75,65 65,50 15,50",fill:"#654321"}),e.jsx("rect",{x:"20",y:"50",width:"40",height:"15",fill:"#8B6914"}),e.jsx("polygon",{points:"10,50 70,50 60,38 20,38",fill:"#654321"}),e.jsx("rect",{x:"25",y:"38",width:"30",height:"12",fill:"#8B6914"}),e.jsx("polygon",{points:"15,38 65,38 55,28 25,28",fill:"#654321"}),e.jsx("line",{x1:"40",y1:"28",x2:"40",y2:"10",stroke:"#DAA520",strokeWidth:"3"}),e.jsx("circle",{cx:"40",cy:"8",r:"4",fill:"#DAA520"}),e.jsx("rect",{x:"30",y:"70",width:"8",height:"8",fill:"#4a3010",rx:"1"}),e.jsx("rect",{x:"45",y:"70",width:"8",height:"8",fill:"#4a3010",rx:"1"})]})]}),e.jsxs("div",{className:"header",children:[e.jsx("div",{className:"logo-section",children:e.jsx("img",{src:zt,alt:"NepDate Logo",style:{height:60,objectFit:"contain"}})}),e.jsxs("div",{className:"title-section",children:[e.jsxs("div",{className:"main-title",children:[e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"5",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"25",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"5",cy:"15",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"25",cy:"15",r:"2.5",fill:"#c62828"})]}),e.jsx("span",{children:"आजको"}),e.jsx("span",{className:"red",children:"पञ्चाङ्ग"}),e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"5",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"25",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"5",cy:"15",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"25",cy:"15",r:"2.5",fill:"#c62828"})]})]}),e.jsx("div",{className:"title-sub",children:"हरेक दिनको विश्वास"})]}),e.jsx("div",{style:{width:"120px"}})]}),e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"left-sidebar",children:[e.jsxs("svg",{className:"sidebar-calendar-icon",width:"40",height:"40",viewBox:"0 0 40 40",children:[e.jsx("rect",{x:"5",y:"8",width:"30",height:"28",rx:"3",fill:"none",stroke:"white",strokeWidth:"2"}),e.jsx("line",{x1:"5",y1:"16",x2:"35",y2:"16",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"10",y:"4",width:"4",height:"8",rx:"1",fill:"white"}),e.jsx("rect",{x:"26",y:"4",width:"4",height:"8",rx:"1",fill:"white"}),e.jsx("rect",{x:"10",y:"20",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"17.5",y:"20",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"25",y:"20",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"10",y:"27",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"17.5",y:"27",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"25",y:"27",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"})]}),e.jsx("div",{className:"sidebar-label",children:"विक्रम संवत्"}),e.jsx("div",{className:"sidebar-big-date",children:Q(m)}),e.jsx("div",{className:"sidebar-month",children:v}),e.jsx("div",{className:"sidebar-year",children:Q(d).slice(-2)}),e.jsx("div",{className:"sidebar-day",children:w}),e.jsxs("div",{className:"sidebar-gregorian",children:["तद्नुसार",e.jsx("br",{}),i]})]}),e.jsxs("div",{className:"center-content",children:[e.jsxs("div",{className:"date-banner",children:[e.jsx("div",{className:"date-banner-icon",children:e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",children:[e.jsx("rect",{x:"3",y:"6",width:"22",height:"20",rx:"2",fill:"none",stroke:"white",strokeWidth:"2"}),e.jsx("line",{x1:"3",y1:"12",x2:"25",y2:"12",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"7",y:"2",width:"3",height:"6",rx:"1",fill:"white"}),e.jsx("rect",{x:"18",y:"2",width:"3",height:"6",rx:"1",fill:"white"})]})}),e.jsxs("div",{style:{flex:1,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px",whiteSpace:"nowrap"},children:[e.jsxs("div",{className:"date-banner-text",style:{fontSize:"18px"},children:["विक्रम संवत् ",e.jsx("span",{className:"red",children:Q(d)})," ",v," ",Q(m)," गते"]}),t.nepalSambatYear&&e.jsxs("div",{className:"date-banner-sub",style:{fontSize:"14px",color:"#1a237e",fontWeight:600},children:["नेपाल संवत् ",Q(t.nepalSambatYear)," ",t.nepalSambatMonthName," ",Q(t.nepalSambatDay)]}),e.jsxs("div",{className:"date-banner-sub",children:["तद्नुसार ",i]})]}),e.jsx("div",{style:{fontSize:"24px",fontWeight:900,color:"#c62828",borderLeft:"2px solid #eee",paddingLeft:"20px",paddingRight:"10px"},children:w})]})]}),e.jsxs("div",{className:"panchang-row",children:[e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("path",{d:"M18,5 A12,12 0 1,0 18,25 A8,8 0 1,1 18,5",fill:"#ffd700"}),e.jsx("circle",{cx:"10",cy:"10",r:"1.5",fill:"white"}),e.jsx("circle",{cx:"20",cy:"15",r:"1",fill:"white"}),e.jsx("circle",{cx:"12",cy:"22",r:"1",fill:"white"})]})}),e.jsx("div",{className:"panchang-box-label",children:"तिथि"}),e.jsx("div",{className:"panchang-box-value",children:M?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:M?.endTime?`(${r(M.endTime)})`:""}),V?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),V.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"none",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("circle",{cx:"15",cy:"6",r:"2",fill:"#ffd700"}),e.jsx("circle",{cx:"22",cy:"10",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"24",cy:"18",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"20",cy:"24",r:"2",fill:"#ffd700"}),e.jsx("circle",{cx:"12",cy:"24",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"7",cy:"18",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"8",cy:"10",r:"2",fill:"#ffd700"}),e.jsx("line",{x1:"15",y1:"6",x2:"22",y2:"10",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"22",y1:"10",x2:"24",y2:"18",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"24",y1:"18",x2:"20",y2:"24",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"20",y1:"24",x2:"12",y2:"24",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"12",y1:"24",x2:"7",y2:"18",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"7",y1:"18",x2:"8",y2:"10",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"8",y1:"10",x2:"15",y2:"6",stroke:"#ffd700",strokeWidth:"0.8"})]})}),e.jsx("div",{className:"panchang-box-label",children:"नक्षत्र"}),e.jsx("div",{className:"panchang-box-value",children:z?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:z?.endTime?`(${r(z.endTime)})`:""}),K?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),K.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"8",r:"4",fill:"#ffd700"}),e.jsx("path",{d:"M15,12 L15,20 M10,16 L20,16 M12,20 L15,26 L18,20",stroke:"#ffd700",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),e.jsx("circle",{cx:"15",cy:"15",r:"10",fill:"none",stroke:"#ffd700",strokeWidth:"1",opacity:"0.5"})]})}),e.jsx("div",{className:"panchang-box-label",children:"योग"}),e.jsx("div",{className:"panchang-box-value",children:F?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:F?.endTime?`(${r(F.endTime)})`:""}),ie?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),ie.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"#1a237e"}),e.jsx("path",{d:"M15,3 A12,12 0 0,1 15,27 A8,8 0 0,0 15,3",fill:"#ffd700"})]})}),e.jsx("div",{className:"panchang-box-label",children:"करण"}),e.jsx("div",{className:"panchang-box-value",children:te?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:te?.endTime?`(${r(te.endTime)})`:""}),J?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),J.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"none",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("circle",{cx:"15",cy:"15",r:"8",fill:"none",stroke:"#ffd700",strokeWidth:"1"}),e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"none",stroke:"#ffd700",strokeWidth:"1"}),e.jsx("line",{x1:"15",y1:"3",x2:"15",y2:"7",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("line",{x1:"15",y1:"23",x2:"15",y2:"27",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("line",{x1:"3",y1:"15",x2:"7",y2:"15",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("line",{x1:"23",y1:"15",x2:"27",y2:"15",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("circle",{cx:"15",cy:"15",r:"2",fill:"#ffd700"})]})}),e.jsx("div",{className:"panchang-box-label",children:"चन्द्र राशि"}),e.jsx("div",{className:"panchang-box-value",children:G?.name||"—"})]})]}),e.jsxs("div",{className:"other-details-body",children:[e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#1a237e"}),e.jsx("line",{x1:"4",y1:"12",x2:"28",y2:"12",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"8",y:"2",width:"4",height:"6",rx:"1",fill:"#1a237e"}),e.jsx("rect",{x:"20",y:"2",width:"4",height:"6",rx:"1",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"वार"}),e.jsx("div",{className:"detail-value",children:w})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#1a237e"}),e.jsx("path",{d:"M16,4 A12,12 0 0,1 16,28 A8,8 0 0,0 16,4",fill:"#ffd700"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"पक्ष"}),e.jsx("div",{className:"detail-value",children:t.paksha||""})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#7b1fa2"}),e.jsx("line",{x1:"4",y1:"12",x2:"28",y2:"12",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"8",y:"2",width:"4",height:"6",rx:"1",fill:"#7b1fa2"}),e.jsx("rect",{x:"20",y:"2",width:"4",height:"6",rx:"1",fill:"#7b1fa2"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"मास"}),e.jsx("div",{className:"detail-value",children:t.lunarMonth||""})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#2e7d32"}),e.jsx("path",{d:"M10,20 Q16,12 22,20 Q16,24 10,20",fill:"#81c784"}),e.jsx("line",{x1:"16",y1:"20",x2:"16",y2:"26",stroke:"#81c784",strokeWidth:"2"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"ऋतु"}),e.jsx("div",{className:"detail-value",children:t.ritu||""})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#c62828"}),e.jsx("line",{x1:"4",y1:"12",x2:"28",y2:"12",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"8",y:"2",width:"4",height:"6",rx:"1",fill:"#c62828"}),e.jsx("rect",{x:"20",y:"2",width:"4",height:"6",rx:"1",fill:"#c62828"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"संवत्सर"}),e.jsx("div",{className:"detail-value",children:t.samvatsar||""})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#5e35b1"}),e.jsx("path",{d:"M10,16 Q16,10 22,16 Q16,22 10,16",fill:"#b39ddb"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"अयन"}),e.jsx("div",{className:"detail-value",children:h||"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#00acc1"}),e.jsx("path",{d:"M12,16 L16,12 L20,16 L16,20 Z",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"आनन्दादि योग"}),e.jsx("div",{className:"detail-value",children:t.anandadiYoga?t.anandadiYoga.nameNe:"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#fdd835"}),e.jsx("circle",{cx:"16",cy:"16",r:"6",fill:"#f57f17"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"दिनमान"}),e.jsx("div",{className:"detail-value",children:$.dinamanaGp})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#3949ab"}),e.jsx("path",{d:"M12,10 A6,6 0 0,0 12,22 A8,8 0 0,1 12,10",fill:"#c5cae9"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"रात्रिमान"}),e.jsx("div",{className:"detail-value",children:$.ratrimanaGp})]})]})]})]}),e.jsxs("div",{className:"right-panel",children:[e.jsx("div",{className:"shubh-header",children:"शुभ समय"}),e.jsxs("div",{className:"shubh-body",children:[e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("circle",{cx:"18",cy:"20",r:"10",fill:"#ffd700"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#4fc3f7"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"सूर्योदय"}),e.jsx("div",{className:"shubh-item-value",children:c(t.sunriseIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("circle",{cx:"18",cy:"20",r:"10",fill:"#ff8a65"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#4fc3f7"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"सूर्यास्त"}),e.jsx("div",{className:"shubh-item-value",children:c(t.sunsetIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("path",{d:"M16,9 A9,9 0 0,0 16,25 A11,11 0 0,1 25,18 A9,9 0 0,0 16,9",fill:"#b0bec5"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"चन्द्रोदय"}),e.jsx("div",{className:"shubh-item-value",children:c(t.moonriseIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("path",{d:"M16,9 A9,9 0 0,0 16,25 A11,11 0 0,1 25,18 A9,9 0 0,0 16,9",fill:"none",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"चन्द्रास्त"}),e.jsx("div",{className:"shubh-item-value",children:c(t.moonsetIso)})]})]})]})]})]}),e.jsx("div",{className:"other-details-section",children:e.jsxs("div",{className:"other-details-body",children:[e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#1565c0"}),e.jsx("path",{d:"M12,12 Q16,16 12,20 A4,4 0 1,0 20,20 Q16,16 20,12 A4,4 0 1,0 12,12",fill:"none",stroke:"white",strokeWidth:"2"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"अहर्गण"}),e.jsx("div",{className:"detail-value",children:t.ahargana?Q(Math.floor(t.ahargana)):"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#e65100"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"}),e.jsx("line",{x1:"16",y1:"13",x2:"16",y2:"17",stroke:"#e65100",strokeWidth:"2"}),e.jsx("line",{x1:"16",y1:"17",x2:"19",y2:"17",stroke:"#e65100",strokeWidth:"2"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"जुलियन दिन"}),e.jsx("div",{className:"detail-value",children:t.julianDay?Q(Math.floor(t.julianDay)):"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#00897b"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"नेपाल संवत् (चान्द्र)"}),e.jsx("div",{className:"detail-value",children:t.nepalSambatYear?`${Q(t.nepalSambatYear)} ${t.nepalSambatMonthName} ${Q(t.nepalSambatDay)}`:"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#d81b60"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"नेपाल संवत् (सौर)"}),e.jsx("div",{className:"detail-value",children:t.nepalSambatSolar?`${Q(t.nepalSambatSolar.year)} ${t.nepalSambatSolar.monthNameNe} ${Q(t.nepalSambatSolar.day)}`:"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#6d4c41"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"शक वर्ष"}),e.jsx("div",{className:"detail-value",children:t.shakaYear?Q(t.shakaYear):"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#43a047"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"कलि वर्ष"}),e.jsx("div",{className:"detail-value",children:t.kaliYear?Q(t.kaliYear):"—"})]})]})]})}),e.jsxs("div",{className:"bottom-sections",children:[e.jsxs("div",{className:"special-box",children:[e.jsx("div",{className:"special-header-wrap",children:e.jsx("div",{className:"special-header",children:"आजको विशेष"})}),e.jsxs("div",{className:"special-content",children:[e.jsxs("svg",{className:"special-decor",width:"80",height:"100",viewBox:"0 0 80 100",children:[e.jsx("ellipse",{cx:"40",cy:"75",rx:"20",ry:"8",fill:"#8B4513"}),e.jsx("path",{d:"M25,75 Q25,60 40,55 Q55,60 55,75",fill:"#D2691E"}),e.jsx("ellipse",{cx:"40",cy:"55",rx:"15",ry:"5",fill:"#FFD700"}),e.jsx("path",{d:"M40,55 Q35,40 40,25 Q45,40 40,55",fill:"#FF6600"}),e.jsx("path",{d:"M40,50 Q37,42 40,32 Q43,42 40,50",fill:"#FFD700"}),e.jsx("path",{d:"M40,45 Q38,40 40,35 Q42,40 40,45",fill:"#FFF8DC"}),e.jsx("circle",{cx:"15",cy:"85",r:"8",fill:"#FF69B4"}),e.jsx("circle",{cx:"15",cy:"85",r:"4",fill:"#FFB6C1"}),e.jsx("circle",{cx:"10",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"20",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"10",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"20",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"65",cy:"85",r:"8",fill:"#FF69B4"}),e.jsx("circle",{cx:"65",cy:"85",r:"4",fill:"#FFB6C1"}),e.jsx("circle",{cx:"60",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"70",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"60",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"70",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("ellipse",{cx:"8",cy:"88",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(-30,8,88)"}),e.jsx("ellipse",{cx:"72",cy:"88",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(30,72,88)"})]}),e.jsx("div",{children:re})]})]}),e.jsxs("div",{className:"message-box",children:[e.jsx("div",{className:"message-header-wrap",children:e.jsx("div",{className:"message-header",children:"शुभ सन्देश"})}),e.jsxs("div",{className:"message-content",children:[e.jsxs("svg",{className:"message-decor",width:"70",height:"90",viewBox:"0 0 70 90",children:[e.jsx("path",{d:"M35,15 L25,30 Q20,40 22,55 Q24,65 30,75 L35,80 L40,75 Q46,65 48,55 Q50,40 45,30 Z",fill:"#FDBCB4",stroke:"#E8A090",strokeWidth:"1"}),e.jsx("line",{x1:"35",y1:"20",x2:"35",y2:"75",stroke:"#E8A090",strokeWidth:"1.5"}),e.jsx("path",{d:"M25,35 Q30,32 35,35",fill:"none",stroke:"#E8A090",strokeWidth:"1"}),e.jsx("path",{d:"M45,35 Q40,32 35,35",fill:"none",stroke:"#E8A090",strokeWidth:"1"}),e.jsx("path",{d:"M22,55 Q15,60 10,70 Q8,75 12,78 Q18,75 25,70 Z",fill:"#4169E1"}),e.jsx("path",{d:"M48,55 Q55,60 60,70 Q62,75 58,78 Q52,75 45,70 Z",fill:"#4169E1"})]}),e.jsxs("div",{children:['"',B,'"']}),e.jsxs("svg",{width:"50",height:"60",viewBox:"0 0 50 60",style:{flexShrink:"0"},children:[e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(0,25,20)"}),e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(72,25,20)"}),e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(144,25,20)"}),e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(216,25,20)"}),e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(288,25,20)"}),e.jsx("circle",{cx:"25",cy:"20",r:"5",fill:"#FFD700"}),e.jsx("line",{x1:"25",y1:"32",x2:"25",y2:"55",stroke:"#228B22",strokeWidth:"2"}),e.jsx("ellipse",{cx:"18",cy:"45",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(-30,18,45)"}),e.jsx("ellipse",{cx:"32",cy:"48",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(30,32,48)"})]})]}),e.jsx("div",{className:"message-footer-text",children:"✨ आजको दिन सुखद रहोस् ! ✨"})]})]}),e.jsxs("footer",{className:"sc-footer",children:[e.jsx("div",{style:{backgroundColor:"white",padding:10,borderRadius:12},children:e.jsx("img",{src:Lt,alt:"NepDate Logo",style:{height:48,objectFit:"contain"}})}),e.jsx("div",{className:"sc-footer-divider"}),e.jsxs("div",{className:"sc-footer-text",children:["विस्तृत पञ्चाङ्ग, राशिफल र शुभ साइतका लागि",e.jsx("br",{}),e.jsx("span",{className:"sc-hl",children:"NepDate नेपाली पात्रो App डाउनलोड गर्नुहोस् ।"})]}),e.jsx("div",{className:"sc-playstore",children:e.jsx("img",{src:Pt,alt:"GET IT ON Google Play",style:{height:80,objectFit:"contain"}})}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"sc-footer-ornament",width:"140",height:"16",viewBox:"0 0 140 16",fill:"none",children:[e.jsx("path",{d:"M140 8C140 12.4183 136.418 16 132 16H8C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0H132C136.418 0 140 3.58172 140 8Z",fill:"white",fillOpacity:"0.1"}),e.jsx("circle",{cx:"70",cy:"8",r:"4",fill:"white",fillOpacity:"0.3"}),e.jsx("circle",{cx:"56",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"}),e.jsx("circle",{cx:"84",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"})]})]})]})})},yt="/assets/left_ornament-CNOcf_Fy.svg",Ma="/assets/mountain_bg-Casg-URl.png",Da=["आइतवार","सोमवार","मंगलवार","बुधवार","बिहीवार","शुक्रवार","शनिवार"],be=t=>Mt(t),wt=({data:t,date:n,onLoad:o,variant:g,isOffscreen:f=!1})=>{const{location:u}=Me(),r=T=>{if(!T)return"";try{const $=new Date(T);if(isNaN($.getTime()))return"";const h=Je($,u.zoneId||"Asia/Kathmandu");let p=h.getUTCHours();const N=h.getUTCMinutes();let b="बिहान";return p>=12&&p<16?b="दिउँसो":p>=16&&p<20?b="बेलुका":(p>=20||p<4)&&(b="राति"),p>12&&(p-=12),p===0&&(p=12),`${b} ${be(p)}:${be(N<10?"0"+N:N)} सम्म`}catch{return""}},c=T=>{if(!T)return"—";try{const $=new Date(T);if(isNaN($.getTime()))return"—";const h=Je($,u.zoneId||"Asia/Kathmandu");let p=h.getUTCHours();const N=h.getUTCMinutes();let b="बिहान";return p>=12&&p<16?b="दिउँसो":p>=16&&p<20?b="बेलुका":(p>=20||p<4)&&(b="राति"),p>12&&(p-=12),p===0&&(p=12),`${be(p)}:${be(N<10?"0"+N:N)} ${b}`}catch{return"—"}};if(U.useEffect(()=>{if(o){const T=setTimeout(o,500);return()=>clearTimeout(T)}},[o,t]),!t)return null;const x=ke(n),d=x?.year?x.year.toString():"0",v=x?.monthName||"",m=x?.day||0,a=Ct(n),w=Da[a]||"",i=`${["जनवरी","फेब्रुअरी","मार्च","अप्रिल","मे","जुन","जुलाई","अगस्ट","सेप्टेम्बर","अक्टोबर","नोभेम्बर","डिसेम्बर"][n.getUTCMonth()]} ${be(n.getUTCDate())}, ${be(n.getUTCFullYear())}`,C=t?.sunriseMs?new Date(t.sunriseMs):t?.sunriseIso?new Date(t.sunriseIso):null,s=t?.nextSunriseMs?new Date(t.nextSunriseMs):t?.nextSunriseIso?new Date(t.nextSunriseIso):null,L=T=>!T||!s||!C?T:T.filter($=>{const h=$.startTime?new Date($.startTime):null,p=$.endTime?new Date($.endTime):null;return!(p&&p<=C||h&&h>=s)}),H=L(t.tithis||[]),A=L(t.nakshatras||[]),O=L(t.yogas||[]),R=L(t.karanas||[]),S=L(t.moonRashis||[]),M=H?.[0],V=H?.[1],z=A?.[0],K=A?.[1],F=O?.[0],ie=O?.[1],te=R?.[0],J=R?.[1];S?.[0];const G=Wt(w,M?.name||"",r(M?.endTime),V?.name||null,F?.name||"",z?.name||null,t.events,t.bhadra);t.ayana==="Uttarayana"||t.ayana==="Dakshinayana"||t.ayana;const re={1:{primary:"#1a237e",secondary:"#c62828",sidebar:"linear-gradient(180deg, #1565c0 0%, #0d47a1 50%, #1a237e 100%)",footer:"linear-gradient(95deg,#0a4f48 0%,#0f7269 22%,#17967f 42%,#4a9f6f 62%,#c9ac4e 82%,#e8bd45 100%)",bg:"linear-gradient(135deg, #f0f2f5, #e8eaed)"},2:{primary:"#4a148c",secondary:"#c2185b",sidebar:"linear-gradient(180deg, #7b1fa2 0%, #6a1b9a 50%, #4a148c 100%)",footer:"linear-gradient(95deg,#4a148c 0%,#6a1b9a 22%,#8e24aa 42%,#ab47bc 62%,#ce93d8 82%,#f48fb1 100%)",bg:"linear-gradient(135deg, #f3e5f5, #fce4ec)"},3:{primary:"#bf360c",secondary:"#b71c1c",sidebar:"linear-gradient(180deg, #e65100 0%, #d84315 50%, #bf360c 100%)",footer:"linear-gradient(95deg,#bf360c 0%,#d84315 22%,#e64a19 42%,#f4511e 62%,#ff8a65 82%,#ffcc80 100%)",bg:"linear-gradient(135deg, #fbe9e7, #fff3e0)"},4:{primary:"#006064",secondary:"#01579b",sidebar:"linear-gradient(180deg, #00838f 0%, #006064 50%, #004d40 100%)",footer:"linear-gradient(95deg,#004d40 0%,#00695c 22%,#00796b 42%,#00897b 62%,#4db6ac 82%,#80cbc4 100%)",bg:"linear-gradient(135deg, #e0f7fa, #e0f2f1)"},5:{primary:"#880e4f",secondary:"#e65100",sidebar:"linear-gradient(180deg, #c2185b 0%, #880e4f 50%, #4a148c 100%)",footer:"linear-gradient(95deg,#b71c1c 0%,#c62828 22%,#d32f2f 42%,#e53935 62%,#ffb300 82%,#ffca28 100%)",bg:"linear-gradient(135deg, #fce4ec, #fbe9e7)"}},B=re[g||1]||re[1];return e.jsx("div",{style:f?{position:"absolute",top:-9999,left:-9999,zIndex:-1,pointerEvents:"none"}:{},children:e.jsxs("div",{id:"panchanga-share-card",className:"poster",style:{"--theme-primary":B.primary,"--theme-secondary":B.secondary,"--theme-sidebar":B.sidebar,"--theme-footer":B.footer,"--theme-bg":B.bg},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
`}}),e.jsx("img",{className:"mountain-bg",src:Ma,alt:"Mountain"}),e.jsx("div",{className:"mountain-overlay"}),e.jsxs("div",{className:"header",children:[e.jsx("div",{className:"logo-section",children:e.jsx("img",{src:zt,alt:"NepDate Logo",style:{height:60,objectFit:"contain"}})}),e.jsxs("div",{className:"title-section",children:[e.jsxs("div",{className:"main-title",children:[e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"5",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"25",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"5",cy:"15",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"25",cy:"15",r:"2.5",fill:"#c62828"})]}),e.jsx("span",{children:"आजको"}),e.jsx("span",{className:"red",children:"पञ्चाङ्ग"}),e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"5",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"25",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"5",cy:"15",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"25",cy:"15",r:"2.5",fill:"#c62828"})]})]}),e.jsx("div",{className:"title-sub",children:"NepDate - हरेक दिनको विश्वास"})]}),e.jsx("div",{style:{width:"120px"}})]}),e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"center-content",style:{width:"100%"},children:[e.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",marginBottom:"25px",marginTop:"10px"},children:[e.jsx("div",{style:{position:"absolute",left:"0px",top:"50%",transform:"translateY(-50%)",height:"240px",width:"240px",backgroundColor:"var(--theme-primary, #1a237e)",WebkitMaskImage:`url(${yt})`,WebkitMaskSize:"contain",WebkitMaskRepeat:"no-repeat",WebkitMaskPosition:"center",maskImage:`url(${yt})`,maskSize:"contain",maskRepeat:"no-repeat",maskPosition:"center",zIndex:1}}),e.jsxs("div",{className:"date-banner",style:{flexDirection:"column",alignItems:"center",textAlign:"center",padding:"20px 40px",gap:"8px",width:"max-content",margin:"0",position:"relative",zIndex:2},children:[e.jsxs("div",{className:"date-banner-text",children:["विक्रम संवत् ",e.jsx("span",{className:"red",children:be(d)})," ",v," ",e.jsx("span",{className:"red",children:be(m)})," गते"]}),e.jsx("div",{className:"date-banner-text",children:e.jsx("span",{className:"red",children:w})}),t.nepalSambatYear&&e.jsxs("div",{className:"date-banner-sub",style:{color:"#1a237e",fontWeight:600},children:["नेपाल संवत् ",be(t.nepalSambatYear)," ",t.nepalSambatMonthName," ",be(t.nepalSambatDay)]}),e.jsxs("div",{className:"date-banner-sub",children:["तद्नुसार ",i]})]})]}),e.jsxs("div",{className:"panchang-row",children:[e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("path",{d:"M18,5 A12,12 0 1,0 18,25 A8,8 0 1,1 18,5",fill:"#ffd700"}),e.jsx("circle",{cx:"10",cy:"10",r:"1.5",fill:"white"}),e.jsx("circle",{cx:"20",cy:"15",r:"1",fill:"white"}),e.jsx("circle",{cx:"12",cy:"22",r:"1",fill:"white"})]})}),e.jsx("div",{className:"panchang-box-label",children:"तिथि"}),e.jsx("div",{className:"panchang-box-value",children:M?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:M?.endTime?`(${r(M.endTime)})`:""}),V?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),V.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"none",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("circle",{cx:"15",cy:"6",r:"2",fill:"#ffd700"}),e.jsx("circle",{cx:"22",cy:"10",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"24",cy:"18",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"20",cy:"24",r:"2",fill:"#ffd700"}),e.jsx("circle",{cx:"12",cy:"24",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"7",cy:"18",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"8",cy:"10",r:"2",fill:"#ffd700"}),e.jsx("line",{x1:"15",y1:"6",x2:"22",y2:"10",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"22",y1:"10",x2:"24",y2:"18",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"24",y1:"18",x2:"20",y2:"24",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"20",y1:"24",x2:"12",y2:"24",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"12",y1:"24",x2:"7",y2:"18",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"7",y1:"18",x2:"8",y2:"10",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"8",y1:"10",x2:"15",y2:"6",stroke:"#ffd700",strokeWidth:"0.8"})]})}),e.jsx("div",{className:"panchang-box-label",children:"नक्षत्र"}),e.jsx("div",{className:"panchang-box-value",children:z?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:z?.endTime?`(${r(z.endTime)})`:""}),K?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),K.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"8",r:"4",fill:"#ffd700"}),e.jsx("path",{d:"M15,12 L15,20 M10,16 L20,16 M12,20 L15,26 L18,20",stroke:"#ffd700",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),e.jsx("circle",{cx:"15",cy:"15",r:"10",fill:"none",stroke:"#ffd700",strokeWidth:"1",opacity:"0.5"})]})}),e.jsx("div",{className:"panchang-box-label",children:"योग"}),e.jsx("div",{className:"panchang-box-value",children:F?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:F?.endTime?`(${r(F.endTime)})`:""}),ie?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),ie.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"#1a237e"}),e.jsx("path",{d:"M15,3 A12,12 0 0,1 15,27 A8,8 0 0,0 15,3",fill:"#ffd700"})]})}),e.jsx("div",{className:"panchang-box-label",children:"करण"}),e.jsx("div",{className:"panchang-box-value",children:te?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:te?.endTime?`(${r(te.endTime)})`:""}),J?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),J.name," आरम्भ"]}):null]})]})]}),e.jsxs("div",{className:"shubh-horizontal",children:[e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("circle",{cx:"18",cy:"20",r:"10",fill:"#ffd700"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#4fc3f7"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"सूर्योदय"}),e.jsx("div",{className:"shubh-item-value",children:c(t.sunriseIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("circle",{cx:"18",cy:"20",r:"10",fill:"#ff8a65"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#4fc3f7"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"सूर्यास्त"}),e.jsx("div",{className:"shubh-item-value",children:c(t.sunsetIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("path",{d:"M16,9 A9,9 0 0,0 16,25 A11,11 0 0,1 25,18 A9,9 0 0,0 16,9",fill:"#b0bec5"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"चन्द्रोदय"}),e.jsx("div",{className:"shubh-item-value",children:c(t.moonriseIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("path",{d:"M16,9 A9,9 0 0,0 16,25 A11,11 0 0,1 25,18 A9,9 0 0,0 16,9",fill:"none",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"चन्द्रास्त"}),e.jsx("div",{className:"shubh-item-value",children:c(t.moonsetIso)})]})]})]})]}),e.jsx("div",{className:"bottom-sections",children:e.jsxs("div",{className:"special-box",children:[e.jsx("div",{className:"special-header-wrap",children:e.jsx("div",{className:"special-header",children:"आजको विशेष"})}),e.jsxs("div",{className:"special-content",children:[e.jsxs("svg",{className:"special-decor",width:"80",height:"100",viewBox:"0 0 80 100",children:[e.jsx("ellipse",{cx:"40",cy:"75",rx:"20",ry:"8",fill:"#8B4513"}),e.jsx("path",{d:"M25,75 Q25,60 40,55 Q55,60 55,75",fill:"#D2691E"}),e.jsx("ellipse",{cx:"40",cy:"55",rx:"15",ry:"5",fill:"#FFD700"}),e.jsx("path",{d:"M40,55 Q35,40 40,25 Q45,40 40,55",fill:"#FF6600"}),e.jsx("path",{d:"M40,50 Q37,42 40,32 Q43,42 40,50",fill:"#FFD700"}),e.jsx("path",{d:"M40,45 Q38,40 40,35 Q42,40 40,45",fill:"#FFF8DC"}),e.jsx("circle",{cx:"15",cy:"85",r:"8",fill:"#FF69B4"}),e.jsx("circle",{cx:"15",cy:"85",r:"4",fill:"#FFB6C1"}),e.jsx("circle",{cx:"10",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"20",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"10",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"20",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"65",cy:"85",r:"8",fill:"#FF69B4"}),e.jsx("circle",{cx:"65",cy:"85",r:"4",fill:"#FFB6C1"}),e.jsx("circle",{cx:"60",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"70",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"60",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"70",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("ellipse",{cx:"8",cy:"88",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(-30,8,88)"}),e.jsx("ellipse",{cx:"72",cy:"88",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(30,72,88)"})]}),e.jsx("div",{children:G})]})]})}),e.jsxs("footer",{className:"sc-footer",children:[e.jsx("div",{style:{backgroundColor:"white",padding:10,borderRadius:12},children:e.jsx("img",{src:Lt,alt:"NepDate Logo",style:{height:48,objectFit:"contain"}})}),e.jsx("div",{className:"sc-footer-divider"}),e.jsxs("div",{className:"sc-footer-text",style:{fontSize:"24px",letterSpacing:"-0.5px"},children:["विस्तृत पञ्चाङ्ग, राशिफल र शुभ साइतका लागि",e.jsx("br",{}),e.jsx("span",{className:"sc-hl",children:"NepDate नेपाली पात्रो App डाउनलोड गर्नुहोस् ।"})]}),e.jsx("div",{className:"sc-playstore",children:e.jsx("img",{src:Pt,alt:"GET IT ON Google Play",style:{height:80,objectFit:"contain"}})}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"sc-footer-ornament",width:"140",height:"16",viewBox:"0 0 140 16",fill:"none",children:[e.jsx("path",{d:"M140 8C140 12.4183 136.418 16 132 16H8C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0H132C136.418 0 140 3.58172 140 8Z",fill:"white",fillOpacity:"0.1"}),e.jsx("circle",{cx:"70",cy:"8",r:"4",fill:"white",fillOpacity:"0.3"}),e.jsx("circle",{cx:"56",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"}),e.jsx("circle",{cx:"84",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"})]})]})]})})},kt=({icon:t,title:n})=>e.jsxs("div",{className:"flex items-center gap-2 mb-3 mt-6 first:mt-0 pb-1 border-b border-theme-border dark:border-theme-border/50",children:[e.jsx("div",{className:"p-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg shadow-sm",children:U.cloneElement(t,{className:"w-3.5 h-3.5 text-theme-primary dark:text-theme-primary"})}),e.jsx("h3",{className:"text-sm font-bold uppercase tracking-widest text-theme-text-muted dark:text-theme-text font-devanagari",children:n})]}),Ge=({label:t,value:n,className:o="",icon:g})=>e.jsxs("div",{className:`bg-theme-surface dark:bg-theme-surface/40 rounded-xl p-3 border border-theme-border dark:border-theme-border/50 shadow-sm transition-all hover:shadow-md flex items-center gap-3 ${o}`,children:[g&&e.jsx("div",{className:"shrink-0",children:g}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[13px] text-theme-text-muted dark:text-theme-text font-devanagari mb-0.5 uppercase tracking-tight",children:t}),e.jsx("div",{className:"text-base font-bold text-theme-text dark:text-white font-devanagari leading-none",children:n})]})]}),ve=({label:t,value:n,compact:o=!1})=>e.jsx("div",{className:`px-4 border-b border-theme-border dark:border-theme-border/30 last:border-0 ${o?"py-1.5":"py-2.5"}`,children:e.jsxs("div",{className:"flex justify-between items-center text-base",children:[e.jsxs("span",{className:"text-theme-text-muted dark:text-theme-text font-medium font-devanagari text-sm",children:[t,":"]}),e.jsx("div",{className:"text-theme-text dark:text-white font-bold font-devanagari text-right",children:n||"-"})]})}),Te=({elements:t,baseDate:n,timezoneId:o,offset:g,astroType:f,sunriseIso:u,nextSunriseIso:r})=>{const{t:c,tAstro:x,language:d,n:v}=ge();return!t||t.length===0?null:e.jsx("div",{className:"px-4 pt-1 pb-2 border-b border-theme-border dark:border-theme-border/50",children:t.map((m,a)=>{const w=m.startTime?Ae(m.startTime,n,o||"Asia/Kathmandu",d,v,{showSeconds:!0,showVedicDayBracket:!0,sunriseIso:u,nextSunriseIso:r,t:c}):null,j=m.endTime?Ae(m.endTime,n,o||"Asia/Kathmandu",d,v,{showSeconds:!0,showVedicDayBracket:!0,sunriseIso:u,nextSunriseIso:r,t:c}):null;return!w&&!j?null:e.jsxs("div",{className:"mt-1.5",children:[e.jsxs("strong",{className:"text-base text-theme-text dark:text-white font-devanagari",children:[f&&m.name?x(m.name,f):m.name,f==="tithi"&&m.isKshaya&&e.jsxs("span",{className:"ml-1 text-theme-error text-xs",children:["(",c("kshaya"),")"]}),f==="tithi"&&m.isVriddhi&&e.jsxs("span",{className:"ml-1 text-theme-success text-xs",children:["(",c("vriddhi"),")"]})]}),e.jsx("div",{className:"flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-theme-text-muted dark:text-theme-text-muted mt-1 gap-y-1 sm:gap-x-4 font-devanagari",children:w&&j?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-baseline gap-1.5",children:[e.jsxs("span",{className:"font-bold shrink-0 opacity-90",children:[c("startsOn"),":"]}),e.jsx("span",{className:"text-theme-text dark:text-theme-text",children:w})]}),e.jsxs("div",{className:"flex items-baseline gap-1.5 sm:text-right",children:[e.jsxs("span",{className:"font-bold shrink-0 opacity-90",children:[c("endsOn"),":"]}),e.jsx("span",{className:"text-theme-text dark:text-theme-text",children:j})]})]}):w?e.jsxs("div",{className:"flex items-baseline gap-1.5",children:[e.jsxs("span",{className:"font-bold shrink-0 opacity-70",children:[c("startsOn"),":"]}),e.jsx("span",{className:"text-theme-text dark:text-theme-text",children:w})]}):j?e.jsxs("div",{className:"flex items-baseline gap-1.5",children:[e.jsxs("span",{className:"font-bold shrink-0 opacity-70",children:[c("endsOn"),":"]}),e.jsx("span",{className:"text-theme-text dark:text-theme-text",children:j})]}):null})]},a)})})},Ea=({sequence:t,baseDate:n,timezoneId:o,offset:g,sunriseIso:f,nextSunriseIso:u})=>{const{language:r,t:c,n:x}=ge();return!t||t.length===0?null:e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2 text-sm font-bold uppercase tracking-wider text-theme-text-muted dark:text-theme-text-muted",children:[e.jsx(We,{className:"w-3 h-3"}),c("anandadiYogaSequence")]}),e.jsx("div",{className:"relative pl-6 space-y-4 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-200 dark:before:bg-gray-700",children:t.map((d,v)=>{const m=d.startTime?Ae(d.startTime,n,o||"Asia/Kathmandu",r,x,{showSeconds:!0,showVedicDayBracket:!0,sunriseIso:f,nextSunriseIso:u,t:c}):c("fromSunrise"),a=d.endTime?Ae(d.endTime,n,o||"Asia/Kathmandu",r,x,{showSeconds:!0,showVedicDayBracket:!0,sunriseIso:f,nextSunriseIso:u,t:c}):c("untilSunrise"),w=r==="ne"?d.nameNe:r==="hi"?d.nameHi:d.nameEn,j=d.isAuspicious?"text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/20":"text-rose-700 dark:text-rose-300 bg-theme-error-bg dark:bg-theme-error-bg",i=d.isAuspicious?"bg-theme-success":"bg-theme-error";return e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:`absolute -left-[20px] top-1.5 w-3 h-3 rounded-full border-2 border-white dark:border-gray-900 ${i}`}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-1",children:[e.jsx("span",{className:`px-2 py-0.5 rounded text-sm font-bold font-devanagari self-start ${j}`,children:w}),e.jsxs("span",{className:"text-sm font-bold text-theme-text dark:text-theme-text flex items-center gap-2",children:[m," ",e.jsx("span",{className:"opacity-40",children:"—"})," ",a]})]}),e.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[e.jsxs("div",{className:"flex items-center gap-1.5 text-theme-text dark:text-theme-text",children:[e.jsxs("span",{className:"font-bold opacity-70",children:[c("netrama"),":"]}),e.jsx("span",{className:"font-bold",children:x(d.netra)})]}),e.jsxs("div",{className:"flex items-center gap-1.5 text-theme-text dark:text-theme-text",children:[e.jsxs("span",{className:"font-bold opacity-70",children:[c("jeevanama"),":"]}),e.jsx("span",{className:"font-bold",children:x(d.jeeva)})]})]})]})]},v)})})]})},Aa=({date:t,onClose:n,variant:o="modal",activeSystem:g="bs",onTimelineClick:f,onNavigate:u})=>{const{location:r,isStashLoaded:c,useElevation:x,ayanamsaMethod:d,engineType:v,isTopocentric:m}=Me(),{t:a,tAstro:w,n:j,language:i}=ge(),C=x&&r.elevation||0,s=l.useMemo(()=>Dt(t,r.latitude,r.longitude,r.offset,i,r.zoneId,c,C,d,v,m),[t,r.latitude,r.longitude,r.offset,i,r.zoneId,c,C,d,v,m]),L=s?.sunriseMs?new Date(s.sunriseMs):s?.sunriseIso?new Date(s.sunriseIso):null,H=s?.nextSunriseMs?new Date(s.nextSunriseMs):s?.nextSunriseIso?new Date(s.nextSunriseIso):null,A=k=>!k||!H||!L?k:k.filter(W=>{const ae=W.startTime?new Date(W.startTime):null,se=W.endTime?new Date(W.endTime):null;return!(se&&se<=L||ae&&ae>=H)}),O=A(s?.tithis||[]),R=A(s?.nakshatras||[]),S=A(s?.yogas||[]),M=A(s?.karanas||[]),V=A(s?.sunRashis||[]),z=A(s?.moonRashis||[]),K=A(s?.bhadraTiming||[]),F=s?.bhadra,ie=o==="page",te=ie?"bg-theme-surface dark:bg-theme-surface w-full mx-auto rounded-xl shadow-sm border border-theme-border dark:border-theme-border overflow-hidden":"bg-slate-200 dark:bg-theme-bg rounded-2xl shadow-2xl max-w-2xl w-full ring-1 ring-transparent dark:ring-gray-700/80 dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-sm mx-auto",J=ie?"bg-theme-surface/95 dark:bg-theme-surface/95 border-b border-theme-border dark:border-theme-border p-4 rounded-t-2xl":"sticky top-0 bg-slate-200 dark:bg-theme-bg border-b border-theme-border dark:border-theme-border p-4 rounded-t-2xl z-10 transition-all shadow-sm",G=new Date().toDateString()===t.toDateString(),[re,B]=U.useState(new Date);U.useEffect(()=>{if(G){const k=setInterval(()=>B(new Date),6e4);return()=>clearInterval(k)}},[G]);const T=G&&s?.sunriseIso?da(re,new Date(s.sunriseIso)):null,$=T?a("ghadiUnits").replace("{0}",j(T.ghatis)).replace("{1}",j(T.palas)):null;(()=>{if(!s.sunriseIso||!s.sunsetIso)return null;const k=new Date(s.sunsetIso).getTime()-new Date(s.sunriseIso).getTime();if(k<=0)return null;const W=Math.floor(k/36e5),ae=Math.floor(k%36e5/6e4);return`${j(W)} ${a("hour")} ${j(ae)} ${a("minute")}`})();const p=k=>{if(k===void 0)return"";const W=Math.round(k*3600),ae=Math.floor(W/3600),se=Math.floor(W%3600/60);return`${j(ae)}°${j(se)}′`},[N,b]=l.useState(null);l.useEffect(()=>{s.sunriseIso?ha.getKundali({name:"Sunrise",datetime:s.sunriseIso,latitude:r.latitude,longitude:r.longitude,zoneId:r.zoneId,offset:r.offset,locationName:r.name,engine:v,options:{zodiac:"SIDEREAL",ayanamsa:d.toUpperCase(),houseSystem:"WHOLE_SIGN",divisionalCharts:[9],dashaSystem:"VIMSHOTTARI"}}).then(k=>{b(k)}).catch(k=>console.error("Error creating sunrise kundali",k)):b(null)},[s.sunriseIso,r,v,d]);const[y,I]=U.useState(!1);U.useEffect(()=>{I(!!(typeof navigator<"u"&&navigator.share))},[]);const D=async()=>{try{let k=Oe(),W="";if(g==="bs"){const se=ke(t);W=`${se.year}-${se.monthIndex+1<10?"0":""}${se.monthIndex+1}-${se.day<10?"0":""}${se.day}`,k+=`bs?${W}`}else W=`${t.getFullYear()}-${t.getMonth()+1<10?"0":""}${t.getMonth()+1}-${t.getDate()<10?"0":""}${t.getDate()}`,k+=`ad?${W}`;const ae=Et(k);window.Android&&typeof window.Android.share=="function"?window.Android.share(`Nepdate - ${W}`,`Check out the details for ${W}`,ae):y&&navigator.share?await navigator.share({title:`Nepdate - ${W}`,text:`Check out the details for ${W}`,url:ae}):(await navigator.clipboard.writeText(ae),ce.success("Link copied to clipboard!"))}catch{ce.error("Failed to share")}},[P,Y]=U.useState(!1),[ne,le]=U.useState("social"),[fe,q]=U.useState(!1),[oe,pe]=U.useState(!1),[de,he]=U.useState(null),[Le,Be]=U.useState(null),et=()=>{pe(!0)},tt=k=>{Be(k),pe(!1),Y(!0),q(!1)};U.useEffect(()=>{P&&fe&&at()},[P,fe]);const at=async()=>{try{await new Promise(Z=>setTimeout(Z,300));const k=document.getElementById("panchanga-share-card");if(!k)return;const{domToBlob:W}=await Ce(async()=>{const{domToBlob:Z}=await import("./vendor-other-By8KEE3n.js").then(xe=>xe.H);return{domToBlob:Z}},__vite__mapDeps([0,1])),ae=`Panchanga-${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}.png`,se=await W(k,{scale:typeof window<"u"&&window.devicePixelRatio>2?1:1.5,backgroundColor:"rgba(0,0,0,0)",filter:Z=>{const xe=Z.tagName?.toLowerCase();return xe!=="script"&&xe!=="link"&&xe!=="iframe"}});if(!se)throw new Error("Failed to generate image blob");if(window.Android?.shareImage&&typeof window.Android.isAndroidApp=="function"&&window.Android.isAndroidApp())try{const Z=new FileReader;Z.readAsDataURL(se),Z.onloadend=()=>{const xe=Z.result;window.Android.shareImage("आजको पञ्चाङ्ग",ae,xe)};return}catch(Z){console.error("Android image bridge failed",Z)}if(navigator.share&&navigator.canShare)try{const Z=new File([se],ae,{type:"image/png"});if(navigator.canShare({files:[Z]})){await navigator.share({files:[Z],title:"आजको पञ्चाङ्ग - NepDate",text:"आजको पञ्चाङ्ग | NepDate नेपाली पात्रो"});return}}catch(Z){console.error("Web Share failed, falling back to download",Z)}const je=URL.createObjectURL(se),ue=document.createElement("a");ue.href=je,ue.download=ae,ue.click(),setTimeout(()=>URL.revokeObjectURL(je),1e3)}catch(k){console.error("Share failed",k),ce.error("Failed to generate image")}finally{Y(!1),q(!1),Be(null)}},De=(()=>{if(!s.sunriseIso||!s.sunsetIso||!s.nextSunriseIso)return{dinamanaGp:null,dinamanaHm:null,ratrimanaGp:null,ratrimanaHm:null};const k=s.sunriseMs??new Date(s.sunriseIso).getTime(),W=s.sunsetMs??new Date(s.sunsetIso).getTime(),ae=s.nextSunriseMs??new Date(s.nextSunriseIso).getTime(),se=ae-k,je=W-k,ue=ae-W,Z=ze=>{const ye=ze/se*60,Ee=Math.floor(ye),Pe=Math.floor((ye-Ee)*60);return a("ghadiUnits").replace("{0}",j(Ee)).replace("{1}",j(Pe))},xe=ze=>{const ye=Math.floor(ze/6e4),Ee=Math.floor(ye/60),Pe=ye%60;return`${j(Ee)} ${a("hour")} ${j(Pe)} ${a("minute")}`};return{dinamanaGp:Z(je),dinamanaHm:xe(je),ratrimanaGp:Z(ue),ratrimanaHm:xe(ue)}})(),Ve=k=>k?k.replace(/\d+/g,W=>j(W)):"",Ye=`${w(s.lunarMonth,"lunarMonth")} • ${w(s.paksha,"paksha")} • ${w(s.tithi.name,"tithi")}`;return e.jsxs("div",{className:te,children:[e.jsx("div",{className:J,children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-theme-text dark:text-white font-devanagari flex items-center gap-2",children:[e.jsx("span",{className:"text-theme-primary dark:text-theme-primary",children:w(s.weekday,"weekday")}),e.jsx("span",{className:"text-gray-300 dark:text-theme-text-muted",children:"|"}),(()=>{const k=ke(t);return`${j(k.year)} ${w(k.monthName,"month")} ${j(k.day)}`})()]}),e.jsx("p",{className:"text-sm text-theme-text-muted dark:text-theme-text-muted mt-1 font-medium",children:s.gregorianDate})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:D,className:"p-2 rounded-lg hover:bg-theme-surface dark:hover:bg-theme-surface-hover transition-colors text-theme-text-muted dark:text-theme-text-muted",children:y?e.jsx($e,{size:18}):e.jsx(Yt,{size:18})}),n&&!ie&&e.jsx("button",{onClick:n,className:"p-2 rounded-lg hover:bg-theme-surface dark:hover:bg-theme-surface-hover transition-colors text-theme-text-muted",children:e.jsx(qe,{size:18})})]})]})}),e.jsxs("div",{className:"p-5 space-y-8 pb-20 overflow-x-hidden",children:[e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2.5 px-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-theme-text-muted dark:text-theme-text-muted uppercase tracking-widest",children:a("riseSetTimings")}),e.jsx("span",{className:"text-[10px] bg-theme-warning-bg dark:bg-amber-900/40 text-theme-warning dark:text-theme-warning px-2 py-0.5 rounded font-bold border border-theme-warning/50 dark:border-theme-warning/30",children:!r.name||r.name==="Custom Location"?`${j(r.latitude)}°N, ${j(r.longitude)}°E`:`${i==="en"&&r.romanization||r.name}`})]}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[e.jsx(Ge,{label:a("sunrise"),value:Ae(s.sunriseIso,t,r.zoneId,i,j,{truncateToMinute:!0})||"N/A",icon:e.jsx(Ie,{className:"w-5 h-5 text-theme-warning"}),className:"bg-theme-warning-bg/40 dark:bg-orange-950/20 border-theme-warning/50 dark:border-theme-warning"}),e.jsx(Ge,{label:a("sunset"),value:Ae(s.sunsetIso,t,r.zoneId,i,j,{truncateToMinute:!0})||"N/A",icon:e.jsx(Ie,{className:"w-5 h-5 text-theme-warning"}),className:"bg-indigo-50/40 dark:bg-indigo-950/20 border-indigo-100/50 dark:border-indigo-900/30"}),e.jsx(Ge,{label:a("moonrise"),value:s.moonrise?Ve(s.moonrise):"N/A",icon:e.jsx(we,{className:"w-5 h-5 text-indigo-400"})}),e.jsx(Ge,{label:a("moonset"),value:s.moonset?Ve(s.moonset):"N/A",icon:e.jsx(we,{className:"w-5 h-5 text-blue-400"})})]}),e.jsxs("div",{className:"mt-4 bg-theme-surface dark:bg-theme-surface/40 rounded-2xl border border-theme-border dark:border-theme-border/50 overflow-hidden shadow-sm",children:[e.jsxs("div",{className:"px-4 py-3 border-b border-theme-border dark:border-theme-border/30 flex items-center justify-center gap-3 bg-theme-surface/50 dark:bg-theme-bg/20 group",children:[e.jsx(we,{className:"w-4 h-4 text-theme-primary group-hover:animate-pulse"}),e.jsx("span",{className:"text-sm font-bold text-theme-text dark:text-theme-text font-devanagari tracking-wide",children:Ye})]}),e.jsxs("div",{className:`p-4 grid ${$?"grid-cols-3":"grid-cols-2"} gap-2 sm:gap-6`,children:[$&&e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx(We,{className:"w-3.5 h-3.5 text-theme-primary mb-1"}),e.jsx("span",{className:"text-[11px] uppercase tracking-tighter text-theme-text-muted mb-0.5 whitespace-nowrap",children:a("currentGhati")||"स्वयम् घटी"}),e.jsx("span",{className:"text-sm sm:text-base font-bold font-devanagari leading-none",children:$})]}),e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx(Ie,{className:"w-3.5 h-3.5 text-theme-warning mb-1"}),e.jsx("span",{className:"text-[11px] uppercase tracking-tighter text-theme-text-muted dark:text-theme-text mb-0.5 whitespace-nowrap",children:a("dinamana")||"दिनमान"}),e.jsx("span",{className:"text-sm sm:text-base font-bold font-devanagari leading-none",children:De.dinamanaGp}),e.jsxs("span",{className:"text-[11px] text-gray-400 font-medium tracking-tighter leading-none mt-0.5",children:["(",De.dinamanaHm,")"]})]}),e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx(we,{className:"w-3.5 h-3.5 text-indigo-400 mb-1"}),e.jsx("span",{className:"text-[11px] uppercase tracking-tighter text-theme-text-muted dark:text-theme-text mb-0.5 whitespace-nowrap",children:a("ratrimana")||"रात्रिमान"}),e.jsx("span",{className:"text-sm sm:text-base font-bold font-devanagari leading-none",children:De.ratrimanaGp}),e.jsxs("span",{className:"text-[11px] text-gray-400 font-medium tracking-tighter leading-none mt-0.5",children:["(",De.ratrimanaHm,")"]})]})]})]})]}),e.jsxs("section",{children:[e.jsx(kt,{icon:e.jsx(Ht,{}),title:a("eraAndSeason")}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-theme-surface/50 dark:bg-theme-surface/30 rounded-2xl p-4 border border-theme-border dark:border-theme-border/50 space-y-1",children:[e.jsxs("div",{className:"px-1 py-1 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between group",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 bg-theme-info-bg dark:bg-purple-900/30 rounded-xl group-hover:scale-110 transition-transform",children:e.jsx(we,{size:16,className:"text-purple-600 dark:text-purple-400"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[11px] uppercase tracking-widest text-theme-text-muted dark:text-theme-text-muted font-black mb-0.5",children:a("nepalSambat")}),e.jsxs("div",{className:"text-base font-bold text-theme-text dark:text-white font-devanagari leading-none",children:[j(s.nepalSambatYear)," ",s.nepalSambatMonthName," ",j(s.nepalSambatDay)]})]})]}),e.jsx("div",{className:"text-right"})]}),e.jsx("div",{className:"flex items-center justify-between group",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 bg-theme-warning-bg dark:bg-amber-900/30 rounded-xl group-hover:scale-110 transition-transform",children:e.jsx(Ie,{size:16,className:"text-theme-warning dark:text-theme-warning"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[11px] uppercase tracking-widest text-theme-text-muted dark:text-theme-text-muted font-black mb-0.5",children:a("nepalSambatSolar")}),e.jsxs("div",{className:"text-base font-bold text-theme-text dark:text-white font-devanagari leading-none",children:[j(s.nepalSambatSolar.year)," ",i==="ne"||i==="hi"?s.nepalSambatSolar.monthNameNe:s.nepalSambatSolar.monthNameEn," ",j(s.nepalSambatSolar.day)]})]})]})})]}),e.jsxs("div",{className:"pt-2 border-t border-theme-border dark:border-theme-border/30",children:[e.jsx(ve,{label:a("shakaYear"),value:j(s.shakaYear),compact:!0}),e.jsx(ve,{label:a("kaliYear"),value:j(s.kaliYear),compact:!0})]})]}),e.jsxs("div",{className:"bg-theme-surface/50 dark:bg-theme-surface/30 rounded-2xl p-4 border border-theme-border dark:border-theme-border/50 space-y-1",children:[e.jsx(ve,{label:a("samvatsar"),value:s.isSamvatsarTransitioning?e.jsxs("div",{className:"flex flex-col items-end gap-1",children:[e.jsx("span",{className:"text-[11px] text-theme-text-muted line-through decoration-red-500/40",children:w(s.lunarSamvatsar,"samvatsar")}),e.jsx("span",{className:"text-sm text-theme-success dark:text-theme-success font-bold bg-emerald-50 dark:bg-emerald-900/20 px-1.5 py-0.5 rounded leading-none transition-all duration-700 animate-pulse",children:w(s.samvatsar,"samvatsar")})]}):w(s.samvatsar,"samvatsar"),compact:!0}),e.jsx(ve,{label:a("ritu"),value:w(s.ritu,"ritu"),compact:!0}),e.jsx(ve,{label:a("ayana"),value:w(s.ayana,"ayana"),compact:!0}),e.jsx(ve,{label:a("ahargan"),value:j(Math.floor(s.ahargana)),compact:!0})]})]}),s.isSamvatsarTransitioning&&e.jsxs("div",{className:"mt-3 px-4 py-3 bg-blue-50/50 dark:bg-blue-900/10 border-l-4 border-theme-primary rounded-r-2xl shadow-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[e.jsx("div",{className:"p-1 bg-blue-100 dark:bg-blue-800 rounded-full",children:e.jsx(Kt,{className:"w-2.5 h-2.5 text-theme-primary dark:text-theme-primary"})}),e.jsx("h4",{className:"text-sm font-bold text-blue-900 dark:text-blue-100 font-devanagari",children:a("jovianYearCorrection")})]}),e.jsx("p",{className:"text-xs leading-relaxed text-blue-800/80 dark:text-blue-200/80 font-medium",children:a("jovianYearCorrectionDesc")})]})]}),e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-3 px-1",children:[e.jsxs("div",{className:"flex items-center gap-2 pb-1 border-b border-theme-border dark:border-theme-border/50 flex-1",children:[e.jsx("div",{className:"p-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg shadow-sm",children:e.jsx(Gt,{className:"w-3.5 h-3.5 text-theme-primary dark:text-theme-primary"})}),e.jsx("h3",{className:"text-sm font-bold uppercase tracking-widest text-theme-text-muted dark:text-theme-text font-devanagari",children:a("panchanga")})]}),e.jsxs("div",{className:"flex items-center gap-2 ml-4",children:[e.jsxs("button",{onClick:()=>{n?.(),u?.("timeline")},className:"text-[11px] text-theme-primary dark:text-theme-primary font-bold hover:underline flex items-center gap-1 bg-blue-50 dark:bg-blue-800/10 px-2 py-1 rounded border border-blue-100/50 dark:border-blue-800/10",children:[e.jsx(We,{size:10}),e.jsx("span",{children:a("timeline")})]}),e.jsxs("button",{onClick:()=>{n?.(),u?.("daily-saait")},className:"text-[11px] text-theme-warning dark:text-theme-warning font-bold hover:underline flex items-center gap-1 bg-theme-warning-bg dark:bg-orange-800/10 px-2 py-1 rounded border border-theme-warning/50 dark:border-theme-warning/10",children:[e.jsx(We,{size:10}),e.jsx("span",{children:a("shubha_ashubha_saait")})]})]})]}),e.jsx("div",{className:"px-4 mb-3",children:e.jsxs("div",{className:"flex items-start gap-2 p-2 bg-theme-warning-bg/50 dark:bg-amber-900/10 border border-amber-100/50 dark:border-theme-warning/20 rounded-xl",children:[e.jsx(st,{className:"w-3.5 h-3.5 text-theme-warning shrink-0 mt-0.5"}),e.jsx("p",{className:"text-xs leading-tight text-theme-warning dark:text-theme-warning font-medium font-devanagari",children:a("tithiWarning")})]})}),e.jsxs("div",{className:"bg-theme-surface dark:bg-theme-surface/40 rounded-2xl border border-theme-border dark:border-theme-border/50 overflow-hidden shadow-sm",children:[e.jsx(ve,{label:a("tithi"),value:w(s.tithi.name,"tithi")}),e.jsx(Te,{elements:O,baseDate:t,timezoneId:r.zoneId,offset:r.offset,astroType:"tithi",sunriseIso:s.sunriseIso,nextSunriseIso:s.nextSunriseIso}),e.jsx(ve,{label:a("nakshatra"),value:w(s.nakshatra.name,"nakshatra")}),e.jsx(Te,{elements:R,baseDate:t,timezoneId:r.zoneId,offset:r.offset,astroType:"nakshatra",sunriseIso:s.sunriseIso,nextSunriseIso:s.nextSunriseIso}),e.jsx(ve,{label:a("yoga"),value:w(s.yoga.name,"yoga")}),e.jsx(Te,{elements:S,baseDate:t,timezoneId:r.zoneId,offset:r.offset,astroType:"yoga",sunriseIso:s.sunriseIso,nextSunriseIso:s.nextSunriseIso}),e.jsx(ve,{label:a("karana"),value:w(s.karana.name,"karana")}),e.jsx(Te,{elements:M,baseDate:t,timezoneId:r.zoneId,offset:r.offset,astroType:"karana",sunriseIso:s.sunriseIso,nextSunriseIso:s.nextSunriseIso}),e.jsxs("div",{className:"grid grid-cols-2 bg-theme-surface/50 dark:bg-theme-bg/40 border-t border-theme-border dark:border-theme-border/50 divide-x divide-gray-100 dark:divide-gray-700/50",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"px-4 py-2 text-[11px] font-bold text-theme-text-muted dark:text-theme-text uppercase tracking-widest border-b border-theme-border dark:border-theme-border/30 bg-theme-bg/30 dark:bg-theme-surface/20",children:a("sunTransit")}),e.jsx(Te,{elements:V,baseDate:t,timezoneId:r.zoneId,offset:r.offset,astroType:"rashi",sunriseIso:s.sunriseIso,nextSunriseIso:s.nextSunriseIso})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"px-4 py-2 text-[11px] font-bold text-theme-text-muted dark:text-theme-text uppercase tracking-widest border-b border-theme-border dark:border-theme-border/30 bg-theme-bg/30 dark:bg-theme-surface/20",children:a("moonTransit")}),e.jsx(Te,{elements:z,baseDate:t,timezoneId:r.zoneId,offset:r.offset,astroType:"rashi",sunriseIso:s.sunriseIso,nextSunriseIso:s.nextSunriseIso})]})]}),s.anandadiYoga&&e.jsxs("div",{className:"bg-blue-50/30 dark:bg-blue-900/10 p-3.5 border-t border-theme-border dark:border-theme-border/50",children:[e.jsxs("div",{className:"text-[13px] text-theme-text-muted uppercase tracking-widest mb-1 flex items-center gap-1.5",children:[e.jsx(ft,{className:"w-3 h-3 text-theme-primary"})," ",a("anandadiYoga")]}),e.jsx("div",{className:"text-base font-bold font-devanagari",children:i==="en"?s.anandadiYoga.nameEn:s.anandadiYoga.nameNe})]})]}),s.anandadiSequence&&s.anandadiSequence.length>0&&e.jsx(Ea,{sequence:s.anandadiSequence,baseDate:t,timezoneId:r.zoneId,offset:r.offset,sunriseIso:s.sunriseIso,nextSunriseIso:s.nextSunriseIso})]}),N&&e.jsxs("section",{children:[e.jsx(kt,{icon:e.jsx(ct,{}),title:a("sunriseKundali")}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-start",children:[e.jsx("div",{className:"flex justify-center bg-theme-surface dark:bg-theme-surface/40 rounded-3xl p-6 border border-theme-border dark:border-theme-border shadow-inner",children:e.jsx(xa,{planets:N.planets,ascendantSign:N.ascendant.sign,ascendantDegrees:N.ascendant.degreesInSign,ascendantNakshatra:N.ascendant.nakshatra,ascendantNakshatraPada:N.ascendant.nakshatraPada,chartType:"lagna",chartStyle:"north",lang:i})}),e.jsx("div",{className:"overflow-hidden rounded-2xl border border-theme-border dark:border-theme-border/50 shadow-sm bg-theme-surface dark:bg-theme-surface/20",children:e.jsxs("table",{className:"w-full text-left border-collapse text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-theme-surface dark:bg-gray-700/50 border-b border-theme-border dark:border-theme-border",children:[e.jsx("th",{className:"py-3 px-4 text-theme-text-muted dark:text-theme-text font-bold uppercase tracking-wider",children:a("planet")}),e.jsx("th",{className:"py-3 px-4 text-theme-text-muted dark:text-theme-text font-bold uppercase tracking-wider",children:a("rashi")}),e.jsx("th",{className:"py-3 px-4 text-theme-text-muted dark:text-theme-text font-bold uppercase tracking-wider text-right",children:a("degree")})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-100 dark:divide-gray-700/30",children:[e.jsxs("tr",{className:"bg-blue-50/30 dark:bg-blue-900/10 font-bold",children:[e.jsx("td",{className:"py-3 px-4 text-theme-primary dark:text-theme-primary",children:w("Lagna","planet")}),e.jsx("td",{className:"py-3 px-4",children:w(ut[N.ascendant.sign],"rashi")}),e.jsx("td",{className:"py-3 px-4 text-right font-mono opacity-80",children:p(N.ascendant.degreesInSign)})]}),N.planets.map(k=>e.jsxs("tr",{className:"hover:bg-theme-surface dark:hover:bg-theme-surface-hover/30 transition-colors",children:[e.jsxs("td",{className:"py-2.5 px-4 font-medium flex items-center gap-2",children:[w(k.planet,"planet"),k.retrograde&&e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-theme-error shadow-[0_0_5px_rgba(244,63,94,0.5)]",title:"Retrograde"})]}),e.jsx("td",{className:"py-2.5 px-4",children:w(ut[k.rashi],"rashi")}),e.jsx("td",{className:"py-2.5 px-4 text-right font-mono opacity-80",children:p(k.degreesInSign)})]},k.planet))]})]})})]})]}),e.jsxs("section",{className:"space-y-4",children:[F&&F.isActiveCivil&&e.jsxs("div",{className:`p-4 rounded-2xl border flex items-start gap-4 ${F.isHarmful?"bg-theme-error-bg dark:bg-rose-950/20 border-rose-200/50 text-rose-900 dark:text-rose-100":"bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200/50 text-emerald-900 dark:text-emerald-100"}`,children:[e.jsx(st,{className:"w-5 h-5 shrink-0 mt-0.5 opacity-80"}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("h4",{className:"font-bold text-base font-devanagari",children:[a("bhadraVisti")," ",a("active")]}),e.jsx("span",{className:`text-[11px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest ${F.isHarmful?"bg-theme-error-bg dark:bg-rose-900/50":"bg-emerald-100 dark:bg-emerald-900/50"}`,children:a(F.status)})]}),e.jsx(Te,{elements:K,baseDate:t,timezoneId:r.zoneId,offset:r.offset,sunriseIso:s.sunriseIso,nextSunriseIso:s.nextSunriseIso}),e.jsxs("p",{className:"text-sm mt-2 font-medium",children:[a("bhadraResidenceLabel"),": ",e.jsx("span",{className:"ml-1 font-bold",children:a(F.residence)})]})]})]}),s.events&&s.events.length>0&&e.jsxs("div",{className:"bg-emerald-50/40 dark:bg-emerald-950/20 rounded-2xl p-5 border border-theme-success/50 dark:border-emerald-900/30",children:[e.jsxs("h3",{className:"text-sm font-black mb-4 text-emerald-800 dark:text-emerald-300 font-devanagari flex items-center gap-2 uppercase tracking-widest",children:[e.jsx(ft,{className:"w-4 h-4"})," ",a("todayEvents")]}),e.jsx("div",{className:"space-y-4",children:s.events.map((k,W)=>e.jsxs("div",{className:"flex items-start gap-3 group",children:[e.jsx("div",{className:"mt-1.5 w-1.5 h-1.5 rounded-full bg-theme-success shrink-0 group-hover:scale-150 transition-transform"}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("strong",{className:"text-base text-theme-text dark:text-white font-bold font-devanagari",children:k.name}),k.holiday&&e.jsx("span",{className:"bg-theme-error-bg dark:bg-theme-error-bg text-theme-error dark:text-theme-error text-[11px] font-black px-1.5 py-0.5 rounded uppercase",children:a("holiday")})]}),k.detail&&e.jsx("p",{className:"text-sm text-theme-text-muted dark:text-theme-text-muted mt-1 leading-relaxed",children:k.detail})]})]},W))})]}),e.jsxs("div",{className:"p-5 bg-theme-surface dark:bg-theme-surface/40 rounded-2xl border border-theme-border dark:border-theme-border/50 text-sm text-theme-text-muted dark:text-theme-text space-y-3 shadow-inner",children:[e.jsxs("div",{className:"flex justify-between items-center px-1",children:[e.jsx("span",{children:a("usedEngine")}),e.jsx("span",{className:"font-bold text-theme-text dark:text-theme-text",children:s.engine==="surya_siddhanta"?a("traditionalEngine"):s.engine==="analytical"?a("analyticalEngine"):a("modernEngine")})]}),e.jsxs("div",{className:"flex justify-between items-center px-1",children:[e.jsx("span",{children:a("ayanamsaMethod")}),e.jsx("span",{className:"font-bold text-theme-text dark:text-theme-text",children:a(s.ayanamsaMethod)})]}),s.ayanamsaValue!==void 0&&s.ayanamsaValue!==0&&e.jsxs("div",{className:"flex justify-between items-center px-1 text-xs opacity-80 italic",children:[e.jsx("span",{children:a("liveAyanamsa")}),e.jsxs("span",{className:"font-mono",children:[s.ayanamsaValue.toFixed(6),"°"]})]}),e.jsx("div",{className:"pt-3 border-t border-theme-border dark:border-theme-border/50",children:e.jsx("p",{className:"leading-relaxed text-xs opacity-75 italic text-center px-2",children:a("nepalPanchangaInfo")})}),s.engine==="surya_siddhanta"&&e.jsxs("div",{className:"mt-3 p-3 bg-theme-warning-bg dark:bg-theme-warning-bg border border-theme-warning/50 dark:border-theme-warning/50 rounded-xl flex gap-3 shadow-sm",children:[e.jsx(st,{className:"w-5 h-5 text-theme-warning shrink-0 mt-0.5"}),e.jsx("p",{className:"text-xs leading-relaxed text-theme-warning dark:text-theme-warning font-medium italic",children:a("surya_siddhanta_warning")})]})]}),e.jsxs("button",{onClick:et,disabled:P||oe,className:"w-full mt-4 bg-theme-primary hover:bg-theme-primary text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors",children:[P||oe?e.jsx(Qe,{className:"w-5 h-5 animate-spin"}):e.jsx($e,{className:"w-5 h-5"}),e.jsx("span",{children:"पञ्चाङ्ग सेयर गर्नुहोस् (Share Panchanga)"})]})]})]}),P&&(ne==="detailed"?e.jsx(jt,{data:s,date:t,variant:Le||1,isOffscreen:!0,onLoad:()=>q(!0)}):e.jsx(wt,{data:s,date:t,variant:Le||1,isOffscreen:!0,onLoad:()=>q(!0)})),oe&&Qt.createPortal(e.jsx("div",{className:"fixed inset-0 bg-black/60 z-[100] flex flex-col items-center backdrop-blur-sm p-4 sm:p-6 overflow-y-auto",children:e.jsxs("div",{className:"bg-theme-surface dark:bg-theme-surface p-5 sm:p-6 rounded-2xl shadow-xl w-full max-w-xl flex flex-col items-center m-auto border border-theme-border dark:border-theme-border",children:[e.jsx("span",{className:"text-lg font-bold text-theme-text dark:text-white mb-4 text-center",children:"Select Theme"}),e.jsxs("div",{className:"flex flex-row w-full gap-3 mb-6",children:[e.jsx("button",{onClick:()=>le("social"),className:`flex-1 py-2 rounded-xl border-2 transition-all font-bold ${ne==="social"?"border-theme-primary bg-blue-50 text-theme-primary dark:bg-blue-900/30 dark:text-theme-primary":"border-theme-border dark:border-theme-border text-theme-text-muted hover:bg-theme-surface dark:hover:bg-theme-surface-hover"}`,children:"Social / Simple"}),e.jsx("button",{onClick:()=>le("detailed"),className:`flex-1 py-2 rounded-xl border-2 transition-all font-bold ${ne==="detailed"?"border-theme-primary bg-blue-50 text-theme-primary dark:bg-blue-900/30 dark:text-theme-primary":"border-theme-border dark:border-theme-border text-theme-text-muted hover:bg-theme-surface dark:hover:bg-theme-surface-hover"}`,children:"Detailed"})]}),e.jsx("div",{className:"relative mb-4 sm:mb-6 rounded-xl overflow-hidden shadow-lg border border-theme-border dark:border-theme-border bg-theme-bg w-[300px] h-[350px] sm:w-[350px] sm:h-[400px] md:w-[400px] md:h-[450px]",children:e.jsx("div",{className:"origin-top-left w-[1000px] scale-[0.30] sm:scale-[0.35] md:scale-[0.40]",children:ne==="detailed"?e.jsx(jt,{data:s,date:t,variant:de||1}):e.jsx(wt,{data:s,date:t,variant:de||1})})}),e.jsx("div",{className:"flex flex-col justify-center gap-4 mb-6 w-full",children:e.jsx("div",{className:"flex flex-row flex-wrap justify-center gap-2 w-full",children:[1,2,3,4,5].map(k=>{const W={1:"linear-gradient(135deg, #1565c0, #1a237e)",2:"linear-gradient(135deg, #7b1fa2, #4a148c)",3:"linear-gradient(135deg, #e65100, #bf360c)",4:"linear-gradient(135deg, #00838f, #004d40)",5:"linear-gradient(135deg, #c2185b, #b71c1c)"};return e.jsx("button",{onClick:()=>he(k),className:`w-10 h-10 rounded-full shadow-md hover:scale-110 active:scale-95 transition-transform ${de===k?"ring-4 ring-offset-2 ring-gray-400 dark:ring-gray-500":""}`,style:{background:W[k]}},k)})})}),e.jsxs("div",{className:"flex flex-row w-full gap-3",children:[e.jsx("button",{onClick:()=>{pe(!1),he(null)},className:"flex-1 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl flex flex-row items-center justify-center active:opacity-80 transition-colors",children:e.jsx("span",{className:"text-theme-text dark:text-theme-text font-medium",children:"Cancel"})}),e.jsx("button",{onClick:()=>tt(de),className:"flex-1 py-3 bg-theme-primary hover:bg-theme-primary rounded-xl flex flex-row items-center justify-center active:opacity-80 transition-colors shadow-md",children:e.jsx("span",{className:"text-white font-medium",children:"Download"})})]})]})}),document.body)]})},La=({date:t,isOpen:n,onClose:o,activeSystem:g="bs",onTimelineClick:f,onNavigate:u})=>{if(!n||!t)return null;const r=c=>{c.target===c.currentTarget&&o()};return e.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",onClick:r,children:e.jsx("div",{className:"max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl relative no-scrollbar",children:e.jsx(Aa,{date:t,onClose:o,activeSystem:g,onTimelineClick:f,onNavigate:u})})})};function Nt(t){if(!t)return null;const n=typeof t=="string"?parseInt(t,10):t;if(!n||isNaN(n)||n<1e12)return null;try{return new Date(n).toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return null}}const Ba=({isOpen:t,onConfirm:n,onCancel:o,currentBuildId:g,newBuildId:f})=>{const{t:u}=ge();if(!t)return null;const r=Nt(g),c=Nt(f);return e.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4 backdrop-blur-sm animate-in fade-in duration-200",children:e.jsxs("div",{className:"bg-theme-surface dark:bg-theme-bg rounded-2xl shadow-2xl max-w-md w-full border border-theme-border dark:border-theme-border transform transition-all scale-100 p-6",children:[e.jsxs("div",{className:"flex justify-between items-start mb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl",children:e.jsx(Re,{className:"w-6 h-6 text-theme-primary dark:text-theme-primary"})}),e.jsx("h2",{className:"text-xl font-bold text-theme-text dark:text-white font-[Outfit]",children:u("updateAvailable")})]}),e.jsx("button",{onClick:o,className:"p-2 rounded-full hover:bg-theme-bg dark:hover:bg-theme-surface-hover transition-colors",children:e.jsx(qe,{className:"w-5 h-5 text-theme-text-muted"})})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("p",{className:"text-theme-text-muted dark:text-theme-text leading-relaxed",children:u("updateMessage")}),(r||c)&&e.jsxs("div",{className:"mt-3 text-xs text-theme-text-muted dark:text-theme-text-muted bg-theme-surface dark:bg-theme-surface/50 rounded-lg p-3 space-y-1 border border-theme-border dark:border-theme-border/50 font-mono",children:[r&&e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-400 dark:text-theme-text-muted",children:"Current:"}),e.jsx("span",{children:r})]}),c&&e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-theme-success dark:text-theme-success",children:"New:"}),e.jsx("span",{className:"text-theme-success dark:text-theme-success font-medium",children:c})]})]}),e.jsxs("div",{className:"mt-3 flex items-start gap-2 p-3 bg-theme-warning-bg dark:bg-theme-warning-bg rounded-lg border border-amber-100 dark:border-amber-900/50",children:[e.jsx(Zt,{className:"w-4 h-4 text-theme-warning dark:text-theme-warning mt-0.5 shrink-0"}),e.jsx("p",{className:"text-xs text-theme-warning dark:text-theme-warning",children:u("updateWarning")})]})]}),e.jsxs("div",{className:"flex gap-3 justify-end",children:[e.jsx("button",{onClick:o,className:"px-5 py-2.5 rounded-xl text-theme-text dark:text-theme-text font-medium hover:bg-theme-bg dark:hover:bg-theme-surface-hover transition-colors",children:u("notNow")}),e.jsxs("button",{onClick:n,className:"px-5 py-2.5 rounded-xl bg-theme-primary hover:bg-theme-primary text-white font-medium shadow-lg shadow-blue-500/25 transition-all active:scale-95 flex items-center gap-2",children:[e.jsx(Re,{className:"w-4 h-4"}),u("updateNow")]})]})]})})},za=()=>{const{updateLanguage:t,completeSetup:n,updateLocation:o,setCalendarSystem:g,updateNumberFormat:f}=Me(),{t:u}=ge(),[r,c]=l.useState(1),[x,d]=l.useState(null),v=a=>{d(a),setTimeout(()=>{t(a,!0),g(a==="en"||a==="hi"?"ad":"bs"),f("auto"),c(2),d(null)},50)},m=a=>{o(a),n()};return r===2?e.jsxs("div",{className:"fixed inset-0 z-[100000] bg-theme-bg dark:bg-theme-bg overflow-hidden flex flex-col items-center justify-center",children:[e.jsx("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80",children:e.jsx("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"})}),e.jsxs("div",{className:"text-center mb-8 px-4 animate-fade-in-up",children:[e.jsx(It,{className:"w-16 h-16 text-theme-primary mx-auto mb-4"}),e.jsx("h1",{className:"text-3xl font-extrabold text-theme-text dark:text-white mb-2 font-rhodium",children:u("locationAndTimezone")}),e.jsx("p",{className:"text-theme-text-muted dark:text-theme-text max-w-sm mx-auto",children:u("searchOrSelectLocation")})]}),e.jsx("div",{className:"w-full max-w-4xl px-4 flex-1 max-h-[70vh] relative",children:e.jsx(pa,{onClose:()=>{},onSelect:m})})]}):e.jsxs("div",{className:"fixed inset-0 z-[100000] bg-theme-bg dark:bg-theme-bg flex flex-col p-6 animate-fade-in-up",children:[e.jsx("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80",children:e.jsx("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"})}),e.jsx("div",{className:"flex-1 flex flex-col items-center justify-center max-w-md mx-auto w-full",children:e.jsxs("div",{className:"bg-theme-surface/50 dark:bg-theme-surface/50 p-6 rounded-[2rem] shadow-2xl backdrop-blur-md w-full border border-white/20 dark:border-theme-border/30",children:[e.jsx("div",{className:"flex justify-center mb-6",children:e.jsx("div",{className:"bg-blue-100 dark:bg-blue-900/50 p-4 rounded-full text-theme-primary dark:text-theme-primary",children:e.jsx(Xt,{className:"w-10 h-10"})})}),e.jsx("h1",{className:"text-3xl font-extrabold text-center text-theme-text dark:text-white mb-2 font-rhodium",children:"Welcome / स्वागतम्"}),e.jsx("p",{className:"text-center text-theme-text-muted dark:text-theme-text mb-8 font-medium",children:"Please choose your preferred language to continue."}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("button",{onClick:()=>v("ne"),disabled:x!==null,className:`w-full flex items-center justify-between p-4 bg-theme-surface dark:bg-gray-700 rounded-2xl border-2 transition-all font-bold group ${x==="ne"?"border-theme-primary shadow-xl shadow-blue-500/10":"border-transparent hover:border-theme-primary hover:shadow-xl hover:shadow-blue-500/10"} ${x!==null&&x!=="ne"?"opacity-50":""}`,children:[e.jsx("span",{className:"text-xl text-theme-text dark:text-theme-text font-rhodium",children:"नेपाली (Nepali)"}),x==="ne"?e.jsx(Qe,{className:"w-6 h-6 text-theme-primary animate-spin"}):e.jsx(rt,{className:"w-6 h-6 text-gray-300 dark:text-theme-text-muted group-hover:text-theme-primary transition-colors"})]}),e.jsxs("button",{onClick:()=>v("hi"),disabled:x!==null,className:`w-full flex items-center justify-between p-4 bg-theme-surface dark:bg-gray-700 rounded-2xl border-2 transition-all font-bold group ${x==="hi"?"border-theme-primary shadow-xl shadow-blue-500/10":"border-transparent hover:border-theme-primary hover:shadow-xl hover:shadow-blue-500/10"} ${x!==null&&x!=="hi"?"opacity-50":""}`,children:[e.jsx("span",{className:"text-xl text-theme-text dark:text-theme-text font-rhodium",children:"हिन्दी (Hindi)"}),x==="hi"?e.jsx(Qe,{className:"w-6 h-6 text-theme-primary animate-spin"}):e.jsx(rt,{className:"w-6 h-6 text-gray-300 dark:text-theme-text-muted group-hover:text-theme-primary transition-colors"})]}),e.jsxs("button",{onClick:()=>v("en"),disabled:x!==null,className:`w-full flex items-center justify-between p-4 bg-theme-surface dark:bg-gray-700 rounded-2xl border-2 transition-all font-bold group ${x==="en"?"border-theme-primary shadow-xl shadow-blue-500/10":"border-transparent hover:border-theme-primary hover:shadow-xl hover:shadow-blue-500/10"} ${x!==null&&x!=="en"?"opacity-50":""}`,children:[e.jsx("span",{className:"text-xl text-theme-text dark:text-theme-text font-rhodium",children:"English"}),x==="en"?e.jsx(Qe,{className:"w-6 h-6 text-theme-primary animate-spin"}):e.jsx(rt,{className:"w-6 h-6 text-gray-300 dark:text-theme-text-muted group-hover:text-theme-primary transition-colors"})]})]})]})})]})},Pa=()=>{const[t,n]=l.useState(!1);l.useEffect(()=>{localStorage.getItem("hasSeenLanguageInfo")||n(!0)},[]);const o=()=>{localStorage.setItem("hasSeenLanguageInfo","true"),n(!1)};return t?e.jsx("div",{className:"fixed inset-0 z-[10003] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4",children:e.jsxs("div",{className:"bg-theme-surface dark:bg-theme-surface rounded-xl shadow-2xl max-w-sm w-full p-6 relative animate-in fade-in zoom-in-95 duration-300",children:[e.jsx("button",{onClick:o,className:"absolute top-4 right-4 p-1.5 rounded-full hover:bg-theme-bg dark:hover:bg-theme-surface-hover text-theme-text-muted dark:text-theme-text-muted transition-colors","aria-label":"Close",children:e.jsx(qe,{className:"w-5 h-5"})}),e.jsx("h3",{className:"text-xl font-bold text-theme-text dark:text-theme-text mb-3 pr-8",children:"Welcome to NepDate!"}),e.jsxs("div",{className:"text-theme-text-muted dark:text-theme-text space-y-4 mb-6",children:[e.jsxs("p",{children:["You can change the app language at any time by clicking the single letter button (",e.jsx("strong",{children:"ने / EN / हि"}),") on the top right of the screen."]}),e.jsxs("p",{children:["After setting your preferred language, you can update your ",e.jsx("strong",{children:"Location"})," and preferred ",e.jsx("strong",{children:"Calculation Engine"})," directly from the top of the Calendar grid or in the ",e.jsx("strong",{children:"Settings"})," menu for accurate sunrise, sunset, and panchanga data."]})]}),e.jsx("button",{onClick:o,className:"w-full py-3 px-4 bg-theme-primary hover:bg-theme-primary active:bg-blue-800 text-white font-medium rounded-lg transition-colors",children:"Got it"})]})}):null},Fa=()=>{const[t,n]=l.useState(()=>typeof window>"u"?"tabs":localStorage.getItem("menuStyle")||"tabs"),[o,g]=l.useState(()=>typeof window>"u"?"topbar":localStorage.getItem("desktopLayoutStyle")||"topbar");return{menuStyle:t,desktopLayoutStyle:o,handleSetMenuStyle:c=>{n(c),localStorage.setItem("menuStyle",c)},handleSetDesktopLayoutStyle:c=>{g(c),localStorage.setItem("desktopLayoutStyle",c)},resetLayoutSettings:()=>{localStorage.removeItem("menuStyle"),localStorage.removeItem("desktopLayoutStyle"),n("tabs"),g("topbar")}}},Wa=()=>{const[t,n]=l.useState(!1),[o,g]=l.useState(!1),[f,u]=l.useState(()=>localStorage.getItem("pwa_installed")==="true"),[r,c]=l.useState(null);return l.useEffect(()=>{const d=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone;if(n(!!d),d){u(!0);return}const v=()=>{localStorage.setItem("pwa_installed","true"),u(!0),g(!1)};window.addEventListener("appinstalled",v),"getInstalledRelatedApps"in navigator&&navigator.getInstalledRelatedApps().then(a=>{a.length>0&&(localStorage.getItem("pwa_installed")!=="true"&&localStorage.setItem("pwa_installed","true"),u(!0))});const m=a=>{a.preventDefault(),localStorage.removeItem("pwa_installed"),u(!1),c(a),g(!0)};return window.addEventListener("beforeinstallprompt",m),()=>{window.removeEventListener("appinstalled",v),window.removeEventListener("beforeinstallprompt",m)}},[]),{isStandalone:t,canInstall:o,isInstalled:f,deferredPrompt:r,handleInstallClick:async()=>{r&&(r.prompt(),await r.userChoice,c(null),g(!1))}}},Ra=()=>{const{location:t,isStashLoaded:n,language:o,useElevation:g,ayanamsaMethod:f,engineType:u,setCalendarSystem:r,calendarSystem:c,isTopocentric:x}=Me(),[d,v]=l.useState(()=>Fe(t.zoneId)),m=l.useMemo(()=>ke(d),[d]),[a,w]=l.useState(null),[j,i]=l.useState(!1);l.useEffect(()=>{v(Fe(t.zoneId))},[t.zoneId]),l.useEffect(()=>{const h=t.latitude,p=t.longitude,N=t.offset,b=g?t.elevation:0;try{const y=new Date(d);y.setUTCHours(0,0,0,0);const I=Dt(y,h,p,N,o,t.zoneId,n,b,f,u,x);"error"in I?ce(`Error from calculate:'${I.error}`,"error",2e3):w(I)}catch(y){ce(`Error calculating today details:${y}`,"error",2e3)}},[d,t.latitude,t.longitude,t.offset,o,n,g,t.elevation,f,u,x]);const[C,s]=l.useState(c);l.useEffect(()=>{s(c)},[c]);const[L,H]=l.useState(m.year),[A,O]=l.useState(m.monthIndex),[R,S]=l.useState(d.getUTCFullYear()),[M,V]=l.useState(d.getUTCMonth()),z=l.useMemo(()=>C==="bs"?L:R,[C,L,R]),K=l.useMemo(()=>C==="bs"?A:M,[C,A,M]);l.useEffect(()=>{const h=()=>{const I=bt(new Date,t.zoneId),D=bt(d,t.zoneId);if(I.day!==D.day||I.month!==D.month||I.year!==D.year){console.log("Midnight detected, updating today..."),v(I.date);const Y=L===m.year&&A===m.monthIndex,ne=R===d.getUTCFullYear()&&M===d.getUTCMonth();if(Y||ne){const le=ke(I.date);H(le.year),O(le.monthIndex),S(I.year),V(I.month)}}},p=Fe(t.zoneId),b=p.getUTCHours()===23&&p.getUTCMinutes()===59?1e3:6e4,y=setInterval(h,b);return()=>clearInterval(y)},[d,m,t.zoneId,L,A,R,M]),l.useEffect(()=>{try{if(z===null)return;const p=(C==="bs"?gt(z,K,15):aa(z,K,15)).getTime()/864e5+24405875e-1;At.preloadForJd(p)}catch(h){console.error("Failed to preload stash chunk for current view:",h)}},[z,K,C]);const F=l.useCallback(h=>{i(!0),l.startTransition(()=>H(h))},[]),ie=l.useCallback(h=>{i(!0),l.startTransition(()=>S(h))},[]),te=l.useCallback(h=>{i(!0),l.startTransition(()=>O(h))},[]),J=l.useCallback(h=>{i(!0),l.startTransition(()=>V(h))},[]),G=l.useCallback(()=>{const h=Fe(t.zoneId),p=ke(h);if(L===p.year&&A===p.monthIndex&&R===h.getUTCFullYear()&&M===h.getUTCMonth()){v(h);return}i(!0),l.startTransition(()=>{v(h),H(p.year),O(p.monthIndex),S(h.getUTCFullYear()),V(h.getUTCMonth())})},[t.zoneId,L,A,R,M]),re=l.useCallback(h=>{if(h===C)return;const p=R===d.getUTCFullYear()&&M===d.getUTCMonth(),N=L===m.year&&A===m.monthIndex;if(h==="bs"&&p||h==="ad"&&N)G();else if(h==="bs"){const b=R??d.getUTCFullYear(),I=sa(b,M,12),D=ra(I),P=ke(D);P.year===0||!P.year?G():(H(P.year),O(P.monthIndex))}else if(L===null)G();else{const b=gt(L,A,18);S(b.getUTCFullYear()),V(b.getUTCMonth())}s(h),r(h)},[C,R,M,L,A,d,m,G,r]),B=l.useCallback(h=>{i(!0),l.startTransition(()=>{if(C==="bs"){const p=h==="prev"?A-1:A+1;p<0?(O(11),H(N=>{const b=N??m.year;return b===1?-1:b-1})):p>11?(O(0),H(N=>{const b=N??m.year;return b===-1?1:b+1})):O(p)}else{const p=h==="prev"?M-1:M+1;p<0?(V(11),S(N=>{const b=N??d.getUTCFullYear();return b===1?-1:b-1})):p>11?(V(0),S(N=>{const b=N??d.getUTCFullYear();return b===-1?1:b+1})):V(p)}})},[C,A,M,d,m]),T=l.useCallback(h=>{i(!0),l.startTransition(()=>{C==="bs"?H(p=>(p??m.year)+(h==="next"?1:-1)):S(p=>(p??d.getUTCFullYear())+(h==="next"?1:-1))})},[C,d,m]);l.useEffect(()=>{const h=setTimeout(()=>i(!1),50);return()=>clearTimeout(h)},[L,A,R,M,C]);const $=l.useRef(o);return l.useEffect(()=>{$.current!==o&&(o==="en"||o==="hi"?re("ad"):o==="ne"&&re("bs"),$.current=o)},[o,re]),{activeSystem:C,currentBsYear:L,currentBsMonth:A,currentAdYear:R,currentAdMonth:M,currentYear:z,currentMonth:K,switchSystem:re,goToToday:G,changeMonth:B,changeYear:T,setCurrentBsYear:F,setCurrentBsMonth:te,setCurrentAdYear:ie,setCurrentAdMonth:J,initialToday:d,initialTodayBs:m,todayDetails:a,isNavigating:j}},$a=_e.map(t=>t.key),_a=()=>{const t=l.useCallback(()=>{if(typeof window>"u")return{view:"calendar",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:null};const h=window.location.hash.replace("#","").trim(),p=window.location.pathname.trim(),N=new URLSearchParams(window.location.search);if(window.location.pathname.includes("/bs")||window.location.pathname.includes("/ad")||N.has("bs")||N.has("ad")||N.has("today"))return{view:"day-detail",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:null};const b=N.get("activeView"),y=[...h.split("/").filter(Boolean),...p.split("/").filter(Boolean)],I=b||y.find(pe=>$a.includes(pe)||["blog-detail","day-detail","post"].includes(pe));if(!I)return{view:"calendar",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:null};const D=y.join("/");if(D.includes("bs?")||D.includes("ad?"))return{view:"day-detail",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:null};const P=y.indexOf("post");if(P!==-1&&y.length>=P+3)return{view:"blog-detail",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:{source:y[P+1],slug:decodeURIComponent(y.slice(P+2).join("/"))}};const Y=I,ne=y.indexOf(I),le=y[ne+1];let fe=null,q=!1,oe=!1;return Y==="dharma"&&le?(q=!0,le!=="section"&&(fe={subSection:le})):Y==="kundali"&&le==="result"&&(oe=!0),{view:Y||"calendar",params:fe,isKundaliVisible:oe,isDharmaVisible:q,post:null}},[]),n=t(),[o,g]=l.useState(n.post),[f,u]=l.useState(n.view),[r,c]=l.useState(n.params),[x,d]=l.useState(n.isKundaliVisible),[v,m]=l.useState(n.isDharmaVisible),a=l.useRef("calendar"),[w,j]=l.useState(null),[i,C]=l.useState(!1),[s,L]=l.useState(!1),[H,A]=l.useState(!1),O=l.useRef(null),R=l.useRef(null),S=l.useRef(null),[M,V]=l.useState(!1),z=l.useRef(null),K=l.useRef(0),[F,ie]=l.useState(!1);l.useEffect(()=>{let h=null,p=0;const N=25,b=()=>{p++,typeof window.Android<"u"?(ie(!0),h&&clearInterval(h)):p>=N&&h&&clearInterval(h)};return b(),F||(h=window.setInterval(b,2e3)),()=>{h&&clearInterval(h)}},[]),l.useEffect(()=>{const h=t();f==="blog-detail"&&h.post&&g(h.post)},[f,t]),l.useEffect(()=>{if(F)return;let h="";if(f!=="calendar"){if(f==="day-detail")return;if(f==="blog-detail"&&o)h=`post/${o.source}/${o.slug}`;else if(h=f,f==="kundali"&&x)h+="/result";else if(f==="dharma"&&v){const I=r?.subSection?.toLowerCase();h+=I?`/${I}`:"/section"}}const p=window.location.hash.replace("#",""),N=window.location.pathname.includes("/bs")||window.location.pathname.includes("/ad"),b=N&&f!=="day-detail",y=window.location.pathname!=="/"&&window.location.pathname!=="/index.html"&&!N;if(p!==h||b||y){let I=h?`#${h}`:window.location.pathname;b||y?I=`/${h?"#"+h:""}`:f==="calendar"&&(I=window.location.pathname);const D=a.current!==f,P=f==="blog-detail",Y=a.current!=="calendar"&&f!=="calendar"&&!P,ne=p===""||h.startsWith(p)&&h!==p;y?window.history.replaceState({view:f},"",I):D&&Y?window.history.replaceState({view:f},"",I):!D&&!ne?window.history.replaceState({view:f},"",I):window.history.pushState({view:f},"",I)}a.current=f},[f,x,v,F,o,r]);const te=l.useRef(!1);l.useEffect(()=>{if(F)return;const h=s||H||i;if(h&&!te.current){const p=window.history.state||{};p.isPopupOpen||window.history.pushState({...p,isPopupOpen:!0},"",window.location.href)}else!h&&te.current&&(window.history.state||{}).isPopupOpen&&window.history.back();te.current=h},[s,H,i,F]),l.useEffect(()=>{const h=p=>{s&&p.key==="Backspace"&&(p.preventDefault(),L(!1))};return s&&window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[s]);const J=l.useCallback(()=>i?(C(!1),!0):s?(L(!1),!0):S.current?(S.current(),!0):f==="kundali"&&x&&O.current?(O.current(),!0):f==="dharma"&&v&&R.current?(R.current(),!0):F&&f==="blog-detail"&&o?.source?(u(o.source),g(null),!0):f!=="calendar"?(u("calendar"),!0):!1,[i,s,f,x,v,F,o]),G=l.useRef(J);l.useEffect(()=>{G.current=J},[J]),l.useEffect(()=>{const h=()=>{K.current=0,V(!1),z.current&&(clearTimeout(z.current),z.current=null)},p=()=>G.current()?(h(),!0):(K.current+=1,K.current===1?(V(!0),navigator.vibrate&&navigator.vibrate(50),z.current=window.setTimeout(h,2e3),!0):(typeof window.Android?.exitApp=="function"?window.Android.exitApp():window.navigator?.app?.exitApp&&window.navigator.app.exitApp(),!1)),N=y=>{y.preventDefault(),p()};F&&(window.handleBackPress=p),document.addEventListener("backbutton",N);const b=()=>{const y=t();u(y.view),c(y.params),m(y.isDharmaVisible),d(y.isKundaliVisible),g(y.post||null),C(!1),L(!1),A(!1),S.current&&(S.current(),S.current=null)};return window.addEventListener("popstate",b),()=>{h(),window.removeEventListener("popstate",b),document.removeEventListener("backbutton",N)}},[F,f,t]);const re=h=>{l.startTransition(()=>{j(h),C(!0)})},B=l.useCallback(h=>{O.current=h},[]),T=l.useCallback(h=>{R.current=h},[]),$=l.useCallback(h=>{S.current=h,A(!!h)},[]);return{activeView:f,setActiveView:u,selectedDate:w,setSelectedDate:j,isModalOpen:i,setIsModalOpen:C,isMenuOpen:s,setIsMenuOpen:L,isKundaliResultsVisible:x,setIsKundaliResultsVisible:d,setKundaliBackAction:B,isDharmaResultsVisible:v,setIsDharmaResultsVisible:m,setDharmaBackAction:T,setPopupBackAction:$,viewParams:r,setViewParams:c,showExitToast:M,handleDayClick:re,isAndroidWebView:F,postParams:o,setPostParams:g}},Ua=(t,n)=>{const[o,g]=l.useState(!1),[f,u]=l.useState(null),[r,c]=l.useState(null);return l.useEffect(()=>{typeof window<"u"&&window.Android&&(typeof window.Android.isAndroidApp=="function"?g(window.Android.isAndroidApp()):g(!0))},[]),{isAndroidApp:o,handleTouchStart:m=>{u(m.touches[0].clientX),c(null)},handleTouchMove:m=>c(m.touches[0].clientX),handleTouchEnd:()=>{if(!f||!r)return;const m=r-f;m>60&&f<50?n(!0):m<-60&&t&&n(!1),u(null),c(null)}}},Oa=({blog:t,onBack:n,onNavigate:o})=>{const{t:g,n:f,language:u}=ge(),r=l.useRef(null),c=l.useRef(null);l.useEffect(()=>{c.current&&c.current.scrollTo(0,0)},[t]);const[x,d]=U.useState([]);l.useEffect(()=>{(async()=>{try{const j=(await Ft(u)).filter(i=>i.id!==t.id).map(i=>{let C=0;return t.tags&&i.tags&&(C=t.tags.filter(L=>i.tags.includes(L)).length),{blog:i,score:C}});j.sort((i,C)=>C.score!==i.score?C.score-i.score:.5-Math.random()),d(j.slice(0,3).map(i=>i.blog))}catch(a){console.error("Failed to load related posts:",a)}})()},[t,u]);const v=async()=>{const m=window.location.href,a=decodeURI(m),w={title:t.title,text:"",url:Et(a)};if(window.Android&&typeof window.Android.share=="function"){window.Android.share(w.title,"Check out this article",w.url);return}if(navigator.share)try{await navigator.share(w);return}catch(i){if(i instanceof Error&&i.name==="AbortError")return;console.warn("Share API failed, trying clipboard...",i)}const j=w.url;try{if(navigator.clipboard&&navigator.clipboard.writeText){await navigator.clipboard.writeText(j),ce.success("Url copied to clipboard!");return}}catch(i){console.warn("Clipboard API failed, trying legacy...",i)}try{const i=document.createElement("textarea");i.value=j,i.style.position="fixed",i.style.left="-9999px",i.style.top="0",document.body.appendChild(i),i.focus(),i.select();const C=document.execCommand("copy");if(document.body.removeChild(i),C)ce.success("Url copied to clipboard!");else throw new Error("execCommand failed")}catch(i){console.error("All share methods failed",i),ce.error("Could not share or copy link")}};return e.jsxs("div",{className:"h-full bg-theme-surface dark:bg-theme-bg animate-in fade-in slide-in-from-bottom-4 duration-300 relative overflow-hidden flex flex-col",children:[e.jsx(la,{title:t.title.split(":")[0],onBack:n,transparent:!0,className:"absolute top-0 left-0 right-0 z-20",rightContent:e.jsx("button",{onClick:v,className:"p-2 rounded-full hover:bg-black/10 dark:hover:bg-theme-surface/20 text-theme-text dark:text-white transition-colors",children:e.jsx($e,{size:20})})}),e.jsxs("div",{ref:c,className:"flex-1 overflow-y-auto pb-20",children:[e.jsxs("div",{className:"relative h-[40vh] md:h-[50vh] w-full overflow-hidden flex-shrink-0",children:[e.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"}),e.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-4xl mx-auto",children:[e.jsx("div",{className:"flex gap-2 mb-3",children:t.tags.map((m,a)=>e.jsx("span",{className:"px-2 py-1 bg-theme-primary text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-sm",children:m},a))}),e.jsx("h1",{className:"text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 font-serif",children:t.title}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-gray-200 text-sm md:text-base",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(Jt,{size:16}),e.jsx("span",{className:"font-medium",children:t.author})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(qt,{size:16}),e.jsx("span",{children:t.date})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(We,{size:16}),e.jsx("span",{children:g("readTime",f(t.readTime))})]})]})]})]}),e.jsx("article",{className:"max-w-3xl mx-auto px-5 md:px-0 -mt-6 relative z-10",children:e.jsxs("div",{className:"bg-theme-surface dark:bg-theme-surface rounded-t-3xl shadow-xl p-6 md:p-10 min-h-[500px]",children:[e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-theme-text dark:text-theme-text leading-relaxed font-serif",children:[e.jsx("p",{className:"lead text-xl font-medium text-theme-text-muted dark:text-theme-text mb-8 border-l-4 border-theme-primary pl-4 italic",children:t.excerpt}),e.jsx("div",{ref:r,dangerouslySetInnerHTML:{__html:t.content},className:"blog-content"})]}),e.jsxs("div",{className:"mt-12 pt-8 border-t border-theme-border dark:border-theme-border",children:[e.jsx("h4",{className:"text-lg font-bold text-theme-text dark:text-theme-text mb-4",children:g("alsoRead")}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[x.map(m=>e.jsx("div",{className:"h-[320px]",children:e.jsx(ga,{blog:m,onClick:()=>o(m),compact:!0})},m.id)),x.length===0&&e.jsx("div",{className:"col-span-full p-4 bg-theme-surface dark:bg-gray-700/50 rounded-xl border border-dashed border-theme-border dark:border-theme-border text-center text-sm text-theme-text-muted dark:text-theme-text-muted",children:g("moreArticlesComing")})]})]})]})})]})]})},Va=U.lazy(()=>Ce(()=>import("./CalendarPrintPage-LsKIuWip.js"),__vite__mapDeps([2,3,0,1,4,5,6,7,8,9,10,11,12,13]))),Ya=U.lazy(()=>Ce(()=>import("./DailySaaitPage-ga1agu9T.js"),__vite__mapDeps([14,3,0,1,4,5,6,7,15,8,9]))),Ha=U.lazy(()=>Ce(()=>import("./DayDetailPage-BZx80x1O.js"),__vite__mapDeps([16,3,0,1,4,5,6,7,8,9,17,18,19,15,20,10,21,22,23,24]))),Ka=U.lazy(()=>Ce(()=>import("./HomePage-CFRaIbOb.js"),__vite__mapDeps([25,3,0,1,4,5,15,6,7,8,9,26,21,19,22,11,12,27,28,17,10,29,24,30,23,18,20])));U.lazy(()=>Ce(()=>import("./TimelinePage--YxSPKqh.js"),__vite__mapDeps([31,3,0,1,4,5,8,6,7,9,15,21,19,22])));const nt=String(1784722704366),it="nepdate_last_web_build",Ga=()=>{const{t}=ge(),[n,o]=U.useState(!1),[g,f]=U.useState(!1),[u,r]=U.useState(!1),[c,x]=U.useState(null),d=U.useRef(!1);l.useEffect(()=>{const E=X=>{d.current||(window.__updateDetected=!0,d.current=!0,X&&x(X),f(!0))};window.__pwaUpdateAvailable&&E();const _=X=>E(X.detail),ee=X=>E(X.detail);return window.addEventListener("pwa-update-available",_),window.addEventListener("version-update-available",ee),()=>{window.removeEventListener("pwa-update-available",_),window.removeEventListener("version-update-available",ee)}},[]);const v=()=>{r(!0),f(!1),d.current=!1,setTimeout(()=>{He.clear(),c?.buildId&&localStorage.setItem(it,String(c.buildId)),typeof window.refreshPWA=="function"?window.refreshPWA(!0):window.location.reload()},150)};l.useEffect(()=>{if(localStorage.getItem(it)!==nt&&(localStorage.setItem(it,nt),He.clear()),typeof window<"u"&&window.Android?.setWebVersion)try{window.Android.setWebVersion("2.8.1")}catch(_){console.error("Failed to set web version on Android",_)}},[]);const{theme:m,toggleTheme:a,resetTheme:w}=ua(),{location:j,language:i,updateLanguage:C,isSetupComplete:s,resetSettings:L,engineType:H,isStashLoaded:A,appTheme:O}=Me();l.useEffect(()=>{document.documentElement.setAttribute("data-theme",O||"classic")},[O]);const R=["ne","en","hi"],S={ne:"ने",en:"EN",hi:"हि"},M=i==="auto"?"ne":i,V=R[(R.indexOf(M)+1)%R.length],{menuStyle:z,desktopLayoutStyle:K,handleSetMenuStyle:F,handleSetDesktopLayoutStyle:ie,resetLayoutSettings:te}=Fa(),{isStandalone:J,canInstall:G,handleInstallClick:re}=Wa(),{activeView:B,setActiveView:T,selectedDate:$,setSelectedDate:h,isModalOpen:p,setIsModalOpen:N,isMenuOpen:b,setIsMenuOpen:y,handleDayClick:I,setIsKundaliResultsVisible:D,setKundaliBackAction:P,setIsDharmaResultsVisible:Y,setDharmaBackAction:ne,setPopupBackAction:le,showExitToast:fe,postParams:q,setPostParams:oe,viewParams:pe,setViewParams:de}=_a(),{activeSystem:he,currentYear:Le,currentMonth:Be,switchSystem:et,goToToday:tt,changeMonth:at,changeYear:xt,setCurrentBsYear:De,setCurrentAdYear:Ve,setCurrentBsMonth:Ye,setCurrentAdMonth:k,initialToday:W,initialTodayBs:ae,todayDetails:se,isNavigating:je}=Ra(),{isAndroidApp:ue,handleTouchStart:Z,handleTouchMove:xe,handleTouchEnd:ze}=Ua(b,y),[ye,Ee]=U.useState(null),Pe=()=>{w(),te(),L(),He.clear(),ce.info("Settings reset to default",2e3)};l.useEffect(()=>{if(new URLSearchParams(window.location.search).get("app_updated")==="true"){ce.success("Latest version loaded successfully",4e3),He.clear();const ee=new URL(window.location.href);ee.searchParams.delete("app_updated"),window.history.replaceState({},"",ee.toString())}},[]),l.useEffect(()=>{const _=new URLSearchParams(window.location.search).get("activeView");_&&(T(_),window.history.replaceState({},"",Oe()))},[T]),l.useEffect(()=>{!je&&s&&typeof window<"u"&&window.Android?.onAppReady&&window.Android.onAppReady()},[je,s]);const mt=l.useRef(A);l.useEffect(()=>{let E=null;return H==="modern"&&(A?mt.current||ce.success("High-precision data downloaded and applied modern engine!",3e3):E=ce.info("Downloading precision data. Using analytical engine temporarily...",0)),mt.current=A,()=>{E&&ce.dismiss(E)}},[H,A]),l.useEffect(()=>{const E=()=>T("print-calendar");window.addEventListener("navigate-to-print-calendar",E);const _=()=>T("settings");return window.addEventListener("open-settings-view",_),()=>{window.removeEventListener("navigate-to-print-calendar",E),window.removeEventListener("open-settings-view",_)}},[T]),l.useEffect(()=>{const E=()=>{document.documentElement.classList.remove("dark")},_=()=>{o(!1),m==="dark"&&document.documentElement.classList.add("dark")},ee=()=>o(!0),X=()=>o(!1);return window.addEventListener("beforeprint",E),window.addEventListener("afterprint",_),window.addEventListener("preparing-print",ee),window.addEventListener("finished-print",X),()=>{window.removeEventListener("beforeprint",E),window.removeEventListener("afterprint",_),window.removeEventListener("preparing-print",ee),window.removeEventListener("finished-print",X)}},[m]),l.useEffect(()=>{fe&&ce.info("Press back again to exit",2e3)},[fe]);const _t=()=>I(W);l.useEffect(()=>{B==="blog-detail"&&q&&(async()=>{try{const _=await Ft(M);let ee=_.find(X=>Ke(X.title)===q.slug);if(!ee){const X=await ba(q.slug);if(X){const me=_.find(Ne=>Ne.id===X.id);me&&(ee=me,oe({...q,slug:Ke(me.title)}))}}ee?Ee(ee):(console.error("Blog not found:",q.slug),T("calendar"))}catch(_){console.error("Error loading blog:",_)}})()},[B,q?.slug,M]);const Ut=()=>{q?.source?(T(q.source),oe(null)):T("calendar")};return e.jsx(oa,{isRadioActive:B==="radio",children:e.jsxs("div",{className:`fixed inset-0 h-[100dvh] w-full flex flex-col bg-theme-bg text-theme-text transition-colors overflow-hidden ${K==="sidebar"?"md:flex-row":""} ${m==="dark"&&B!=="print-calendar"?"dark":""}`,onTouchStart:Z,onTouchMove:xe,onTouchEnd:ze,children:[K==="topbar"&&e.jsx("div",{className:"w-full sticky top-0 z-30 print:hidden hidden md:block border-b border-theme-border",children:e.jsx(Na,{activeView:B,activeSystem:he,onNavigate:E=>{de(null),T(E)},showInstall:!J&&G&&!ue,onInstallClick:re,theme:m,onThemeToggle:a})}),B==="calendar"&&e.jsx("header",{className:"sticky top-0 px-4 pt-2 bg-transparent z-30 md:hidden",children:e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>y(!0),className:"p-2 rounded-full hover:bg-theme-surface-hover","aria-label":"Open menu",title:"Open menu",children:e.jsx(ea,{className:"w-5 h-5"})}),e.jsx(dt,{activeSystem:he,hideControl:B!=="calendar"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>C(V),className:"px-2 py-1 rounded-full hover:bg-theme-surface-hover transition-colors text-[11px] font-bold text-theme-text-muted border border-theme-border","aria-label":"Toggle Language",title:"Toggle Language",children:S[M]||"ने"}),z==="tabs"&&!J&&G&&!ue&&e.jsxs("button",{onClick:re,className:"px-2 py-2 text-left text-xs rounded bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2",children:[e.jsx(lt,{className:"w-5 h-5"})," ",e.jsx("span",{children:t("installApp")})]})]})]})}),b&&e.jsx("div",{className:"fixed inset-0 bg-black/40 z-40 md:hidden",onClick:()=>y(!1)}),e.jsx("aside",{className:`fixed top-0 left-0 z-[10001] h-full bg-theme-surface shadow-xl transform transition-transform duration-300 ease-in-out
          ${b?"translate-x-0":"-translate-x-full"}
          ${K==="sidebar"?"md:translate-x-0 md:sticky md:h-screen md:w-56":"md:hidden w-64"}`,children:e.jsxs("div",{className:"flex flex-col h-full p-4 overflow-y-auto pb-24 no-scrollbar",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-lg font-semibold text-theme-text font-rhodium",children:"Menu"}),e.jsx("button",{onClick:()=>y(!1),className:"p-2 rounded-full hover:bg-theme-surface-hover md:hidden",title:t("close"),"aria-label":t("close"),children:e.jsx(qe,{className:"w-5 h-5"})})]}),e.jsxs("nav",{className:"flex flex-col space-y-3 text-theme-text",children:[_e.filter(E=>!E.hideOnSideMenu).map(E=>e.jsxs("button",{onClick:()=>{de(null),T(E.key),y(!1)},className:`px-2 py-2 flex items-center gap-2 rounded hover:bg-theme-surface-hover font-rhodium ${B===E.key?"bg-theme-border font-medium":""}`,children:[E.icon," ",e.jsx("span",{className:"font-rhodium",children:t(E.labelKey)})]},E.key)),typeof window<"u"&&window.Android&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>{Ze(),y(!1)},className:"px-2 py-2 flex items-center gap-2 rounded hover:bg-theme-surface-hover font-rhodium",children:[e.jsx(pt,{icon:ma,className:"w-5 h-5 text-emerald-500 drop-shadow-icon"})," ",e.jsx("span",{className:"font-rhodium",children:"Share App"})]}),e.jsxs("button",{onClick:()=>{Xe(),y(!1)},className:"px-2 py-2 flex items-center gap-2 rounded hover:bg-theme-surface-hover font-rhodium",children:[e.jsx(pt,{icon:fa,className:"w-5 h-5 text-amber-500 drop-shadow-icon"})," ",e.jsx("span",{className:"font-rhodium",children:"Rate App"})]})]}),!J&&G&&!ue&&e.jsxs("button",{onClick:()=>{re(),y(!1)},className:"px-2 py-2 flex items-center gap-2 rounded bg-blue-600 text-white hover:bg-blue-700",children:[e.jsx(lt,{className:"w-4 h-4"})," ",t("installApp")]}),e.jsxs("button",{onClick:()=>{a(),y(!1)},className:"px-2 py-2 flex items-center gap-2 rounded hover:bg-theme-surface-hover",children:[m==="light"?e.jsx(we,{className:"w-4 h-4"}):e.jsx(Ie,{className:"w-4 h-4"})," ",t(m==="light"?"darkMode":"lightMode")]}),e.jsx("hr",{className:"border-theme-border my-2"}),e.jsxs("button",{onClick:()=>{Ue(),y(!1)},className:"px-2 py-2 flex items-center gap-2 rounded text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50",children:[e.jsx(Re,{className:"w-4 h-4"})," Clear Cache & Reload"]})]}),e.jsxs("div",{className:"mt-auto text-xs text-theme-text-muted border-t border-theme-border pt-4",children:["© ",Fe(j.zoneId).getUTCFullYear()," ",t("project")]})]})}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsxs("div",{id:"app-scroll-container",className:`h-full no-scrollbar mx-auto w-full max-w-7xl 2xl:max-w-[1600px] overflow-x-hidden overflow-y-auto ${B==="calendar"?"px-4 md:px-6 pb-20 md:pb-6":"p-0"}`,children:[e.jsxs(U.Suspense,{fallback:e.jsx("div",{className:"flex-1 flex items-center justify-center h-full",children:e.jsx("div",{className:"w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"})}),children:[B==="calendar"&&e.jsxs(e.Fragment,{children:[e.jsx(Ka,{activeSystem:he,currentYear:Le,currentMonth:Be,switchSystem:et,goToToday:tt,theme:m,toggleTheme:a,todayDetails:se,setActiveView:T,initialToday:W,initialTodayBs:ae,handleShowDetailsClick:_t,setCurrentBsYear:De,setCurrentAdYear:Ve,setCurrentBsMonth:Ye,setCurrentAdMonth:k,changeMonth:at,changeYear:xt,handleDayClick:I,setPostParams:oe,setViewParams:de,isNavigating:je}),e.jsx(Ta,{onNavigate:(E,_)=>{T(E),de(_||null),_&&typeof _.month=="number"&&(he==="bs"?Ye(_.month):k(_.month))}})]}),B==="day-detail"&&e.jsx(Ha,{onBack:()=>{window.history.pushState({},"",Oe()),T("calendar")},onNavigate:E=>T(E)}),B==="blog-detail"&&ye&&e.jsx(Oa,{blog:ye,onBack:Ut,onNavigate:E=>{oe({source:q?.source||"calendar",slug:Ke(E.title)}),window.scrollTo(0,0)}}),B==="daily-saait"&&e.jsx(Ya,{onBack:()=>T("calendar"),onNavigate:E=>T(E),activeSystem:he}),B==="print-calendar"&&e.jsx(Va,{onBack:()=>T("calendar"),activeSystem:he}),(()=>{const E=_e.find(_=>_.key===B);if(E&&E.page){const _=E.page,ee={onBack:()=>T("calendar"),onOpenMenu:()=>y(!0),theme:m,activeSystem:he,onNavigate:me=>T(me)};let X={...ee,...pe};return B==="settings"?X={...ee,currentTheme:m,onThemeChange:a,currentMenuStyle:z,onMenuStyleChange:F,currentDesktopLayoutStyle:K,onDesktopLayoutStyleChange:ie,onResetSettings:Pe,isAndroidApp:ue,onReloadApp:Ue}:B==="kundali"?X={...ee,setIsKundaliResultsVisible:D,setKundaliBackAction:P,initialData:pe?.formData}:B==="namakaran"?X={...ee,onViewKundali:me=>{de({formData:me}),T("kundali")},onNavigate:(me,Ne)=>{Ne&&de(Ne),T(me)}}:B==="dharma"?X={...ee,activeSystem:he,currentYear:Le||2081,currentMonth:Be,tag:pe?.tag,onNavigate:(me,Ne)=>{me==="blog-detail"?(oe({source:"dharma",slug:Ke(Ne.title)}),T("blog-detail")):me==="dharma"&&(de(Ne),T("dharma"))},subSection:pe?.subSection,setIsDharmaResultsVisible:Y,setDharmaBackAction:ne}:B==="timeline"&&(X={...ee,initialDate:$||W}),e.jsx(_,{...X})}return null})()]}),z==="slide"&&e.jsx("div",{className:"w-full bg-theme-surface/50 border-t border-theme-border print:hidden md:hidden mt-8 pb-4",children:e.jsx(Sa,{})})]})}),z==="tabs"&&e.jsx("div",{className:"md:hidden print:hidden",children:e.jsx(ka,{activeView:B,onNavigate:E=>{de(null),T(E)},theme:m,onThemeToggle:a,themeLabel:t(m==="light"?"darkMode":"lightMode"),setPopupBackAction:le})}),e.jsx(La,{date:$,isOpen:p,onClose:()=>N(!1),activeSystem:he,onTimelineClick:E=>{h(E),T("timeline")},onNavigate:E=>T(E)}),e.jsx(Ba,{isOpen:g,onConfirm:v,onCancel:()=>f(!1),currentBuildId:nt,newBuildId:c?.buildId}),e.jsx(na,{}),!s&&e.jsx(za,{}),e.jsx(Pa,{}),n&&e.jsxs("div",{className:"fixed inset-0 z-[10002] bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-200 print:hidden",children:[e.jsx("div",{className:"w-12 h-12 border-4 border-theme-primary border-t-transparent rounded-full animate-spin mb-4"}),e.jsx("p",{className:"text-lg font-medium text-theme-text dark:text-theme-text font-rhodium",children:t("preparingPrint")||"Preparing to print..."})]}),u&&e.jsxs("div",{className:"fixed inset-0 z-[10002] bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-200 print:hidden",children:[e.jsx("div",{className:"w-12 h-12 border-4 border-theme-primary border-t-transparent rounded-full animate-spin mb-4"}),e.jsx("p",{className:"text-lg font-medium text-theme-text dark:text-theme-text font-rhodium",children:t("loading")||"Updating App..."})]})]})})};function Qa(t={}){const{immediate:n=!1,onNeedRefresh:o,onOfflineReady:g,onRegistered:f,onRegisteredSW:u,onRegisterError:r}=t;let c,x,d;const v=async(a=!0)=>{await x,await d?.()};async function m(){if("serviceWorker"in navigator){if(c=await Ce(async()=>{const{Workbox:a}=await import("./vendor-other-By8KEE3n.js").then(w=>w.I);return{Workbox:a}},__vite__mapDeps([0,1])).then(({Workbox:a})=>new a("/sw.js",{scope:"/",type:"classic"})).catch(a=>{r?.(a)}),!c)return;d=async()=>{await c?.messageSkipWaiting()};{let a=!1;const w=()=>{a=!0,c?.addEventListener("controlling",j=>{j.isUpdate&&window.location.reload()}),o?.()};c.addEventListener("installed",j=>{typeof j.isUpdate>"u"?typeof j.isExternal<"u"?j.isExternal?w():!a&&g?.():j.isExternal?window.location.reload():!a&&g?.():j.isUpdate||g?.()}),c.addEventListener("waiting",w),c.addEventListener("externalwaiting",w)}c.register({immediate:n}).then(a=>{u?u("/sw.js",a):f?.(a)}).catch(a=>{r?.(a)})}}return x=m(),v}class Za{static intervalId=null;static lastKnownBuildId=null;static consecutiveFailures=0;static isPrefetching=!1;static POLL_INTERVAL=3e5;static startPolling(){this.intervalId||(setTimeout(()=>this.checkForUpdates(),8e3),this.intervalId=window.setInterval(()=>{document.visibilityState==="visible"&&this.checkForUpdates()},this.POLL_INTERVAL),document.addEventListener("visibilitychange",this.handleVisibilityChange))}static stopPolling(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null),document.removeEventListener("visibilitychange",this.handleVisibilityChange)}static handleVisibilityChange=()=>{document.visibilityState==="visible"&&this.checkForUpdates()};static async checkForUpdates(){if(!navigator.onLine||window.__updateDetected||this.isPrefetching)return!1;if(this.consecutiveFailures>=3){const n=Math.min(this.consecutiveFailures-2,12);if(Math.random()>1/n)return!1}try{const n=Oe(),o=await fetch(`${n}version.json?t=${Date.now()}`,{cache:"no-store",headers:{"Cache-Control":"no-cache"}});if(!o.ok)return this.consecutiveFailures++,!1;this.consecutiveFailures=0;const g=await o.json();if(this.lastKnownBuildId===null)return this.lastKnownBuildId=g.buildId,!1;if(g.buildId===this.lastKnownBuildId)return!1;console.log(`VersionService: New build ${g.buildId} detected (was ${this.lastKnownBuildId}). Prefetching...`),this.isPrefetching=!0;const f=await this.prefetchNewContent(n);return this.isPrefetching=!1,f?(this.lastKnownBuildId=g.buildId,console.log("VersionService: Prefetch complete. Prompting user."),window.dispatchEvent(new CustomEvent("version-update-available",{detail:g})),!0):(console.log("VersionService: Prefetch incomplete. Will retry next cycle."),!1)}catch(n){this.consecutiveFailures++,this.isPrefetching=!1,n instanceof Error&&(n.message.includes("Failed to fetch")||n.message.includes("NetworkError"))||console.warn("Version check error:",n)}return!1}static async prefetchNewContent(n){try{const o=await fetch(`${n}?t=${Date.now()}`,{cache:"no-store",headers:{"Cache-Control":"no-cache"}});if(!o.ok)return!1;const g=await o.text(),f=this.extractAssetUrls(g,n);if(f.length===0)return!0;const u=6e4,r=new AbortController,c=setTimeout(()=>r.abort(),u),x=await Promise.allSettled(f.map(a=>fetch(a,{signal:r.signal}).then(w=>{if(!w.ok)throw new Error(`HTTP ${w.status}`);return w.blob()})));clearTimeout(c);const d=x.filter(a=>a.status==="fulfilled").length,v=x.filter(a=>a.status==="rejected").length;return console.log(`VersionService: Prefetched ${d}/${f.length} assets (${v} failed)`),d/f.length>=.8}catch(o){return console.warn("VersionService: Prefetch error:",o),!1}}static extractAssetUrls(n,o){const g=[],f=/<script[^>]+src=["']([^"']+)["']/gi;let u;for(;(u=f.exec(n))!==null;)g.push(this.resolveUrl(u[1],o));const r=/<link[^>]+href=["']([^"']+\.css[^"']*)["']/gi;for(;(u=r.exec(n))!==null;)g.push(this.resolveUrl(u[1],o));return g}static resolveUrl(n,o){return n.startsWith("http://")||n.startsWith("https://")?n:n.startsWith("/")?new URL(n,o).href:new URL(n,o).href}}const Rt=l.createContext(void 0),St="nepdate_cached_ads_config",Xa=()=>{const n=Oe().replace("https://appassets.androidplatform.net","https://nepdate.khumnath.com.np");return`${n.endsWith("/")?n:`${n}/`}ads.json`},Ja={"ad-slot1":null,"ad-slot2":null,"ad-slot3":null},qa=({children:t})=>{const[n,o]=l.useState(()=>{if(typeof window<"u")try{const r=localStorage.getItem(St);if(r)return JSON.parse(r)}catch(r){console.warn("Failed to parse cached ads config:",r)}return Ja}),[g,f]=l.useState(!0),u=async()=>{try{const r=`${Xa()}?t=${Date.now()}`,c=await fetch(r,{cache:"no-store",headers:{"Cache-Control":"no-cache"}});if(c.ok){const x=await c.json(),d={"ad-slot1":x?.["ad-slot1"]||null,"ad-slot2":x?.["ad-slot2"]||null,"ad-slot3":x?.["ad-slot3"]||null};o(v=>{const m=JSON.stringify(v),a=JSON.stringify(d);return m!==a?(localStorage.setItem(St,a),console.log("SW/Ads: Ads config updated from remote source."),d):v})}}catch(r){console.warn("SW/Ads: Soft probe for ads.json failed (using cached/fallback):",r)}finally{f(!1)}};return l.useEffect(()=>{u();const r=setInterval(u,3e4);return window.addEventListener("online",u),()=>{clearInterval(r),window.removeEventListener("online",u)}},[]),e.jsx(Rt.Provider,{value:{configs:n,isLoading:g,refreshAds:u},children:t})},ms=()=>{const t=l.useContext(Rt);if(!t)throw new Error("useAds must be used within an AdProvider");return t};va.Icon.Default.mergeOptions({iconUrl:wa,shadowUrl:ya,iconRetinaUrl:ja});window.addEventListener("vite:preloadError",t=>{console.warn("Failed to load chunk, reloading page... disabled for debugging",t)});const ht=!!window.Android;ht&&"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(t=>{for(const n of t)n.unregister()});let $t,ot;ht||($t=Qa({onRegistered(t){ot=t,t&&setInterval(()=>{document.visibilityState==="visible"&&(console.log("SW: Checking for updates (interval)..."),t.update())},300*1e3)},onNeedRefresh(){window.__updateDetected||(window.__updateDetected=!0,window.__pwaUpdateAvailable=!0,console.log("SW: New content available, prompting user."),fetch(`${window.location.origin}/version.json?t=${Date.now()}`,{cache:"no-store"}).then(t=>t.ok?t.json():null).then(t=>{window.dispatchEvent(new CustomEvent("pwa-update-available",{detail:t}))}).catch(()=>{window.dispatchEvent(new CustomEvent("pwa-update-available"))}))},onOfflineReady(){console.log("SW: App ready to work offline")}}));window.refreshPWA=$t;ht?console.log("Android detected — native assets serving active, web update checks disabled"):"serviceWorker"in navigator?document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&ot&&(console.log("SW: App became visible, checking for updates..."),ot.update())}):(console.log("SW not supported, falling back to version.json polling"),Za.startPolling());At.load();ia.init();ta.createRoot(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(ca,{children:e.jsx(qa,{children:e.jsx(Ga,{})})})}));export{Aa as D,ms as u};
