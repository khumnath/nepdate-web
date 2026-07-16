const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-other-DoP2BRe1.js","assets/vendor-other-BUUTtNGK.css","assets/CalendarPrintPage-InVtOyyY.js","assets/vendor-react-DEGWukit.js","assets/vendor-leaflet-Bjm2FGmM.js","assets/vendor-leaflet-Dgihpmma.css","assets/MonthlyEvents-CUyKltGe.js","assets/core-astro-CIEaF2MC.js","assets/core-data-BzebUjTq.js","assets/index-C9xLCRru.js","assets/index-D8xR6X0E.css","assets/LoadingSpinner-CSBx76Q6.js","assets/HeaderLogo-hgQ7FuJ0.js","assets/PrintAdDialog-BvYBa2W5.js","assets/DailySaaitPage-BO0XFGGc.js","assets/lib-Bq1iPRpM.js","assets/DayDetailPage-Cs_L10ct.js","assets/CalculationDetailsModal-U0sMuU29.js","assets/icons-D2GndHt-.js","assets/kundali-DiYD02gH.js","assets/google-play-badge-DgGAyOYp.js","assets/LocationModal-BsdeotDe.js","assets/vendor-utils-Uz7Ytgz9.js","assets/useTheme-DKQzq5th.js","assets/BlogCard-Db9X_GGD.js","assets/HomePage-BjvcnD7l.js","assets/LocationInfoBar-DZImjnHX.js","assets/Muhurtas-DXB_BgTW.js","assets/RashifalWidget-Cc38QG21.js","assets/BlogWidget-AJ4F8S-_.js","assets/SocialMedia-DVwVdlAX.js","assets/TimelinePage-BACizzWJ.js"])))=>i.map(i=>d[i]);
import{r as l,j as e,E as Sa,M as ye,S as Ie,b as Fe,c as We,d as ca,D as la,e as $a,f as Ta,h as _a,R as K,L as Ua,X as da,i as Pe,G as Oa,a as Va,k as Ya,T as sa,l as ma,m as Ge,n as Ha,o as Ka,p as Ga,q as ra,U as Qa,s as Za,t as Xa,F as fa,u as Ja}from"./vendor-react-DEGWukit.js";import{M as Re,h as Qe,a as Ze,b as $e,t as je,g as Ia,c as Ca,d as Xe,e as Ma,_ as Ce,f as ce,i as Ae,N as ga,j as _e,k as Da,l as ze,m as pa,s as qa,S as Ea,n as et,o as at,p as ua,P as Ye,T as tt,E as st}from"./core-astro-CIEaF2MC.js";import{u as me,a as Me,A as Aa,P as rt,R as nt,S as it}from"./index-C9xLCRru.js";import{H as xa}from"./HeaderLogo-hgQ7FuJ0.js";import{C as La}from"./CalculationDetailsModal-U0sMuU29.js";import{g as lt,c as He}from"./lib-Bq1iPRpM.js";import{k as ot,B as ct}from"./kundali-DiYD02gH.js";import{A as Ba,G as za}from"./google-play-badge-DgGAyOYp.js";import{t as dt,u as xt}from"./vendor-other-DoP2BRe1.js";import{L as ht}from"./LocationModal-BsdeotDe.js";import{u as mt}from"./useTheme-DKQzq5th.js";import{B as ft,g as Pa,a as gt}from"./BlogCard-Db9X_GGD.js";import{l as pt,m as ut,a as bt,b as yt}from"./vendor-leaflet-Bjm2FGmM.js";const ba=({icon:a,label:i,isActive:c,onClick:u,className:f})=>e.jsxs("button",{onClick:p=>{p.stopPropagation(),u()},onTouchStart:p=>p.stopPropagation(),onMouseDown:p=>p.stopPropagation(),className:`flex flex-col items-center justify-center pt-2 pb-1 transition-colors ${c?"text-blue-600 dark:text-blue-400":"text-gray-700 dark:text-gray-300"} ${f??""}`,children:[a,e.jsx("span",{className:"text-[11px] mt-1 font-semibold font-rhodium truncate w-full block text-center px-0.5",children:i})]}),jt=({activeView:a,onNavigate:i,menus:c=Re,theme:u,onThemeToggle:f,themeLabel:p,setPopupBackAction:s})=>{const{t:d}=me(),[h,o]=l.useState(!1),b=l.useRef(null);l.useEffect(()=>{h&&s?s(()=>o(!1)):!h&&s&&s(null);const n=I=>{b.current&&!b.current.contains(I.target)&&o(!1)};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n),s&&h&&s(null)}},[h,s]);const g=[];typeof window<"u"&&window.Android&&(g.push({key:"share",labelKey:"shareApp",icon:e.jsx(We,{className:"w-5 h-5"}),fixed:!1}),g.push({key:"rate",labelKey:"rateApp",icon:e.jsx(ca,{className:"w-5 h-5"}),fixed:!1}));const r=[...c,...g],v=r.filter(n=>n.fixed&&!n.hideOnTabMenu),j=r.filter(n=>!n.fixed&&!n.hideOnTabMenu);return e.jsxs("nav",{ref:b,className:`
        fixed bottom-0 left-0 right-0 w-full h-16
        bg-white dark:bg-gray-800
        border-t border-gray-500 dark:border-gray-900
        shadow-md
        z-[9999] lg:hidden
      `,"aria-label":"Bottom navigation",onClick:n=>n.stopPropagation(),onTouchStart:n=>n.stopPropagation(),onMouseDown:n=>n.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center h-full w-full relative px-1 overflow-hidden",children:[v.map(n=>e.jsx(ba,{icon:n.icon,label:d(n.labelKey),isActive:a===n.key,onClick:()=>i(n.key),className:"flex-1 min-w-0"},n.key)),j.length>0&&e.jsx("div",{className:"relative text-[11px] font-semibold flex-none w-[72px] shrink-0",children:e.jsx(ba,{icon:e.jsx(Sa,{className:"w-5 h-5"}),label:d("more"),isActive:h,onClick:()=>o(n=>!n),className:"w-full font-rhodium"})})]}),h&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-transparent",onClick:n=>{n.stopPropagation(),o(!1)},onTouchStart:n=>{n.stopPropagation()},onMouseDown:n=>{n.stopPropagation()}}),e.jsxs("div",{className:`
              absolute
              bottom-[calc(4rem+8px)]
              right-1
              bg-white dark:bg-gray-700
              shadow-xl rounded-md
              w-64
              py-2
              border border-gray-200 dark:border-gray-600
              z-[9999]
              space-y-1
            `,role:"menu",onClick:n=>n.stopPropagation(),onTouchStart:n=>n.stopPropagation(),onMouseDown:n=>n.stopPropagation(),children:[j.map(n=>e.jsxs("button",{type:"button",onClick:I=>{I.stopPropagation(),I.preventDefault(),n.key==="share"?Qe():n.key==="rate"?Ze():i(n.key),setTimeout(()=>o(!1),100)},className:`
                  w-full flex items-center gap-3 px-2 py-2
                  text-left text-[13px]
                  rounded-md
                  hover:bg-slate-100 dark:hover:bg-gray-600
                  focus:bg-slate-100 dark:focus:bg-gray-600
                  text-gray-800 dark:text-gray-200
                `,role:"menuitem",children:[n.icon,e.jsx("span",{className:"truncate font-rhodium",children:d(n.labelKey)})]},n.key)),e.jsx("div",{className:"h-px bg-gray-200 dark:bg-gray-600 my-1 mx-2"}),e.jsxs("button",{type:"button",onClick:n=>{n.stopPropagation(),n.preventDefault(),f(),setTimeout(()=>o(!1),100)},className:`
                w-full flex items-center gap-3 px-2 py-2
                text-left text-[13px]
                rounded-md
                hover:bg-slate-100 dark:hover:bg-gray-600
                focus:bg-slate-100 dark:focus:bg-gray-600
                text-gray-800 dark:text-gray-200
              `,role:"menuitem",children:[u==="light"?e.jsx(ye,{className:"w-4 h-4"}):e.jsx(Ie,{className:"w-4 h-4"}),e.jsx("span",{className:"truncate font-rhodium",children:p})]}),e.jsx("div",{className:"h-px bg-gray-200 dark:bg-gray-600 my-1 mx-2"}),e.jsxs("button",{type:"button",onClick:n=>{n.stopPropagation(),n.preventDefault(),$e(),setTimeout(()=>o(!1),100)},className:`w-full flex items-center gap-3 px-2 py-2
                text-left text-[13px]
                rounded-md
                hover:bg-slate-100 dark:hover:bg-gray-600
                focus:bg-slate-100 dark:focus:bg-gray-600
                text-gray-800 dark:text-gray-200`,children:[e.jsx(Fe,{className:"w-4 h-4"}),d("reload")]})]})]})]})},vt=({activeView:a,activeSystem:i,onNavigate:c,showInstall:u=!1,onInstallClick:f,theme:p,onThemeToggle:s})=>{const d=l.useRef(null),h=l.useRef(null),{t:o}=me(),{language:b,updateLanguage:g}=Me(),r=["ne","en","hi"],v={ne:"ने",en:"EN",hi:"हि"},j=b==="auto"?"ne":b,n=r[(r.indexOf(j)+1)%r.length],[I,t]=l.useState([]),[A,V]=l.useState([]),[B,_]=l.useState(!1),R=(N,C)=>{const W=document.createElement("canvas").getContext("2d");return W?(W.font=C,Math.ceil(W.measureText(N).width*1.1)):100};return l.useEffect(()=>{const N=()=>{if(!d.current)return;const C=4,Y=24,W=16,J=8,z=150,te=d.current.offsetWidth,q=140;let L=0;u&&(L=R(o("install_app"),"500 14px Inter")+32+20+20);const D=te-q-L-z,oe=R(o("more"),'500 14px "Rhodium Libre", serif')+Y+W+J+C+8,G={key:"refresh",labelKey:"reload",icon:e.jsx(Fe,{className:"w-5 h-5"}),fixed:!1},U=[];typeof window<"u"&&window.Android&&(U.push({key:"share",labelKey:"shareApp",icon:e.jsx(We,{className:"w-5 h-5"}),fixed:!1}),U.push({key:"rate",labelKey:"rateApp",icon:e.jsx(ca,{className:"w-5 h-5"}),fixed:!1}));const x=[...Re.filter(y=>!y.hideOnTopNav),...U,G],m=x.map(y=>{const k=R(o(y.labelKey),'500 14px "Rhodium Libre", serif');return{...y,width:k+Y+W+J}});if(m.reduce((y,k,T)=>y+k.width+(T>0?C:0),0)<=D)t(x),V([]);else{const y=D-oe;let k=0;const T=[],M=[];m.forEach((P,O)=>{const H=P.width+(O>0?C:0);k+H<=y?(T.push(P),k+=H):M.push(P)}),t(T),V(M)}};return N(),document.fonts.ready.then(N),window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)},[u,o,b]),l.useEffect(()=>{if(!B)return;const N=C=>{h.current&&!h.current.contains(C.target)&&_(!1)};return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[B]),e.jsxs("nav",{ref:d,className:"hidden md:flex w-full px-4 bg-white dark:bg-gray-800 h-16 items-center relative",children:[e.jsx(xa,{activeSystem:i,className:"mr-6 flex-shrink-0",hideControl:a!=="calendar"}),e.jsxs("div",{className:"flex items-center gap-1 flex-1 min-w-0",children:[I.map(N=>e.jsxs("button",{onClick:()=>{N.key==="refresh"?$e():N.key==="share"?Qe():N.key==="rate"?Ze():c(N.key)},className:`flex-shrink-0 px-2 py-2 rounded-md flex items-center gap-2 whitespace-nowrap text-sm font-medium font-rhodium transition-colors ${a===N.key?"bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm":"text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"}`,children:[N.icon," ",e.jsx("span",{className:"font-rhodium",children:o(N.labelKey)})]},N.key)),A.length>0&&e.jsxs("div",{ref:h,className:"relative flex-shrink-0",children:[e.jsxs("button",{onClick:N=>{N.stopPropagation(),_(C=>!C)},className:"flex-shrink-0 px-2 py-2 rounded-md flex items-center gap-2 whitespace-nowrap hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors font-rhodium",children:[e.jsx(Sa,{className:"w-4 h-4"})," ",e.jsx("span",{className:"font-rhodium",children:o("more")})]}),B&&e.jsx("div",{className:"absolute left-0 top-full mt-1 w-48 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg flex flex-col z-[1000] py-1",children:A.map(N=>e.jsxs("button",{onClick:C=>{C.stopPropagation(),N.key==="refresh"?$e():N.key==="share"?Qe():N.key==="rate"?Ze():c(N.key),_(!1)},className:"px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center gap-2 whitespace-nowrap text-sm w-full font-rhodium",children:[N.icon," ",e.jsx("span",{className:"font-rhodium",children:o(N.labelKey)})]},N.key))})]})]}),e.jsxs("div",{className:"flex items-center gap-1 ml-4 flex-shrink-0",children:[e.jsx("button",{onClick:()=>g(n),className:"px-2.5 py-1.5 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-xs font-bold text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600","aria-label":"Toggle Language",title:`Language: ${j.toUpperCase()}`,children:v[j]||"ने"}),e.jsx("button",{onClick:s,className:"p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300","aria-label":"Toggle Theme",children:p==="light"?e.jsx(ye,{className:"w-5 h-5"}):e.jsx(Ie,{className:"w-5 h-5"})}),u&&f&&e.jsxs("button",{onClick:f,className:"px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2 text-sm font-medium transition-colors shadow-sm whitespace-nowrap font-rhodium",children:[e.jsx(la,{className:"w-4 h-4"}),e.jsx("span",{className:"font-rhodium",children:o("installApp")})]})]})]})},wt=()=>{const[a,i]=l.useState(!1),{t:c}=me();return e.jsxs("footer",{className:"text-center py-3 sm:py-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex flex-wrap justify-center items-center",children:[e.jsxs("span",{className:"mr-1",children:["© ",new Date().getFullYear()," ",e.jsx("a",{href:"https://github.com/khumnath/nepdate",target:"_blank",rel:"noopener noreferrer",className:"underline hover:text-gray-800 dark:hover:text-gray-200",children:"Nepdate Calendar Project"}),"."]}),e.jsx("span",{children:"All rights reserved."}),e.jsx("span",{className:"mx-2 hidden sm:inline text-gray-400",children:"|"}),e.jsx("button",{onClick:()=>i(!0),className:"underline hover:text-gray-800 dark:hover:text-gray-200 mt-2 sm:mt-0",children:c("calculationDetails")}),a&&e.jsx(La,{onClose:()=>i(!1)})]})},Se={calendar:a=>[{label:a("bsMonth_0"),value:"calendar",param:{month:0}},{label:a("bsMonth_1"),value:"calendar",param:{month:1}},{label:a("bsMonth_2"),value:"calendar",param:{month:2}},{label:a("bsMonth_3"),value:"calendar",param:{month:3}},{label:a("bsMonth_4"),value:"calendar",param:{month:4}},{label:a("bsMonth_5"),value:"calendar",param:{month:5}}],calendar_ad:a=>[{label:a("adMonth_0"),value:"calendar",param:{month:0}},{label:a("adMonth_1"),value:"calendar",param:{month:1}},{label:a("adMonth_2"),value:"calendar",param:{month:2}},{label:a("adMonth_3"),value:"calendar",param:{month:3}},{label:a("adMonth_4"),value:"calendar",param:{month:4}},{label:a("adMonth_5"),value:"calendar",param:{month:5}}],calendar2:a=>[{label:a("bsMonth_6"),value:"calendar",param:{month:6}},{label:a("bsMonth_7"),value:"calendar",param:{month:7}},{label:a("bsMonth_8"),value:"calendar",param:{month:8}},{label:a("bsMonth_9"),value:"calendar",param:{month:9}},{label:a("bsMonth_10"),value:"calendar",param:{month:10}},{label:a("bsMonth_11"),value:"calendar",param:{month:11}}],calendar2_ad:a=>[{label:a("adMonth_6"),value:"calendar",param:{month:6}},{label:a("adMonth_7"),value:"calendar",param:{month:7}},{label:a("adMonth_8"),value:"calendar",param:{month:8}},{label:a("adMonth_9"),value:"calendar",param:{month:9}},{label:a("adMonth_10"),value:"calendar",param:{month:10}},{label:a("adMonth_11"),value:"calendar",param:{month:11}}],rashifal:a=>[{label:a("मेष","rashi"),value:"rashifal",param:"mesh"},{label:a("वृष","rashi"),value:"rashifal",param:"brish"},{label:a("मिथुन","rashi"),value:"rashifal",param:"mithun"},{label:a("कर्कट","rashi"),value:"rashifal",param:"karkat"},{label:a("सिंह","rashi"),value:"rashifal",param:"simha"},{label:a("कन्या","rashi"),value:"rashifal",param:"kanya"}],rashifal2:a=>[{label:a("तुला","rashi"),value:"rashifal",param:"tula"},{label:a("वृश्चिक","rashi"),value:"rashifal",param:"brishchik"},{label:a("धनु","rashi"),value:"rashifal",param:"dhanu"},{label:a("मकर","rashi"),value:"rashifal",param:"makar"},{label:a("कुम्भ","rashi"),value:"rashifal",param:"kumbha"},{label:a("मीन","rashi"),value:"rashifal",param:"meen"}],services:a=>[{label:a("converter"),value:"converter"},{label:a("rashifalMenu")||a("rashifalTitle")||"Horoscope",value:"rashifal"},{label:a("kundali"),value:"kundali"},{label:a("eclipse"),value:"eclipse"},{label:a("radio"),value:"radio"},{label:a("facebook"),value:"facebook"}]},kt=({onNavigate:a})=>{const{t:i,language:c,tAstro:u,calendarSystem:f}=me(),[p,s]=l.useState(!1),d=(h,o,b)=>{h.preventDefault(),a(o,b),o==="calendar"?setTimeout(()=>{const g=document.getElementById("main-calendar-grid");g?g.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})},100):window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs("footer",{className:"hidden md:block bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-10 pb-8 mt-auto",children:[e.jsxs("div",{className:"max-w-7xl xl:max-w-6xl mx-auto px-4 md:px-6",children:[e.jsxs("div",{className:"grid grid-cols-4 gap-8 mb-10",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-gray-900 dark:text-gray-100 font-bold mb-4 uppercase text-sm tracking-wider font-rhodium",children:f==="ad"?c==="en"?"Gregorian Calendar":c==="hi"?"ग्रेगोरियन कैलेंडर":"अंग्रेजी क्यालेण्डर":c==="en"?"Vikram Calendar":c==="hi"?"विक्रम कैलेंडर":"विक्रम क्यालेण्डर"}),e.jsxs("div",{className:"grid grid-cols-2 gap-x-4",children:[e.jsx("ul",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:(f==="ad"?Se.calendar_ad(i):Se.calendar(i)).map((h,o)=>e.jsx("li",{children:e.jsx("button",{onClick:b=>d(b,h.value,h.param),className:"hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:h.label})},o))}),e.jsx("ul",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:(f==="ad"?Se.calendar2_ad(i):Se.calendar2(i)).map((h,o)=>e.jsx("li",{children:e.jsx("button",{onClick:b=>d(b,h.value,h.param),className:"hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:h.label})},o))})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-gray-900 dark:text-gray-100 font-bold mb-4 uppercase text-sm tracking-wider font-rhodium",children:c==="en"?"Horoscope":"राशिफल (Horoscope)"}),e.jsxs("div",{className:"grid grid-cols-2 gap-x-4",children:[e.jsx("ul",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:Se.rashifal(u).map((h,o)=>e.jsx("li",{children:e.jsx("button",{onClick:b=>d(b,h.value,h.param),className:"hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:h.label})},o))}),e.jsx("ul",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:Se.rashifal2(u).map((h,o)=>e.jsx("li",{children:e.jsx("button",{onClick:b=>d(b,h.value,h.param),className:"hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:h.label})},o))})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-gray-900 dark:text-gray-100 font-bold mb-4 uppercase text-sm tracking-wider font-rhodium",children:c==="en"?"Services":c==="hi"?"सेवाएं (Services)":"सेवाहरू (Services)"}),e.jsx("ul",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:Se.services(i).map((h,o)=>e.jsx("li",{children:e.jsx("button",{onClick:b=>d(b,h.value),className:"hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:h.label})},o))})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-4 -ml-2",children:e.jsx(xa,{activeSystem:"bs"})}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed",children:c==="en"?"Your trusted partner for Nepali dates, festivals, astrology, and muhurtas.":c==="hi"?"नेपाली तिथियों, त्योहारों, ज्योतिष और मुहूर्तों के लिए आपका विश्वसनीय साथी।":"नेपाली मिति, चाडबाड, ज्योतिष र मुहूर्तहरूको लागि तपाईंको भरपर्दो पात्रो।"}),e.jsx("a",{href:"https://play.google.com/store/apps/details?id=com.khumnath.nepdate",target:"_blank",rel:"noopener noreferrer",className:"inline-block mb-6",children:e.jsx("img",{src:"/images/en_badge_web_generic.png",alt:"Get it on Google Play",className:"h-16 -ml-3"})}),e.jsxs("ul",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx($a,{className:"w-4 h-4 shrink-0"}),e.jsx("span",{children:"aksharlabstudio1@gmail.com"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(Ta,{className:"w-4 h-4 shrink-0"}),e.jsx("span",{children:c==="en"?"Butwal, Nepal":"बुटवल, नेपाल"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(_a,{className:"w-4 h-4 shrink-0"}),e.jsx("a",{href:"https://www.facebook.com/people/NepDate-Patro/61584433679641/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-blue-600 transition-colors",children:c==="en"?"NepDate Patro":"नेपडेट पात्रो"})]})]})]})]}),e.jsxs("div",{className:"border-t border-gray-200 dark:border-gray-800 pt-6 text-center flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4",children:[e.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["© ",new Date().getFullYear()," ",c==="en"?"NepDate Patro. All Rights Reserved.":"नेपडेट पात्रो। सर्वाधिकार सुरक्षित।"]}),e.jsx("span",{className:"hidden sm:inline text-gray-400",children:"|"}),e.jsx("button",{onClick:()=>s(!0),className:"text-sm text-gray-500 dark:text-gray-400 underline hover:text-gray-800 dark:hover:text-gray-200 transition-colors",children:i("calculationDetails")})]})]}),p&&e.jsx(La,{onClose:()=>s(!1)})]})},Fa=(a,i,c,u,f,p=null,s=[],d=null)=>{const h=new Date,o=Math.floor((h.getTime()-new Date(h.getFullYear(),0,0).getTime())/1e3/60/60/24),b=[`आज साताको ${a}। `,`आज ${a}को दिन। `,`आज ${a} परेको छ। `,`आज सप्ताहको ${a}। `,`आज ${a}को शुभ दिन। `];let g=b[o%b.length];if(s&&s.length>0){const j=s.map(n=>n.name).join(" र ");g+=`आजको दिन ${j} परेको छ। `}c?(g+=`आज ${c} सम्म ${i} तिथि रहनेछ`,u?g+=` र त्यसपछि ${u} तिथि आरम्भ हुनेछ। `:g+="। "):g+=`आज दिनभर ${i} तिथि रहनेछ। `,p?g+=`साथै आज ${p} नक्षत्र र `:g+="आज ";let v={विष्कुम्भ:"यस योगमा गरिएको कार्यले प्रारम्भमा केही बाधा आए पनि अन्त्यमा सफलता दिलाउनेछ।",प्रीति:"यस योगले प्रेम, सद्भाव र पारिवारिक सुख वृद्धि गर्नेछ।",आयुष्मान:"यस योगले आयु र स्वास्थ्यमा सकारात्मक प्रभाव पार्नेछ।",आयुष्मान्:"यस योगले आयु र स्वास्थ्यमा सकारात्मक प्रभाव पार्नेछ।",सौभाग्य:"यस योगमा गरिएका कार्यले नाम जस्तै सौभाग्य र सुख लिएर आउनेछ।",शोभन:"यस योगले सम्पूर्ण कार्यमा सुन्दरता र शुभ फल प्रदान गर्नेछ।",अतिगण्ड:"यस योगमा कार्य गर्दा केही कठिनाइ आउन सक्ने भएकाले संयमता अपनाउनुहोला।",सुकर्मा:"यस योगले असल कर्मतर्फ प्रेरित गर्दै पुण्य र सफलता दिलाउनेछ।",धृति:"यस योगमा गरिएको धैर्यपूर्ण कार्यले स्थायी र उत्तम प्रतिफल दिनेछ।",शूल:"यस योगमा महत्त्वपूर्ण निर्णयहरू लिँदा विशेष होसियारी अपनाउनुहोला।",गण्ड:"यस योगमा नयाँ कार्यको थालनी गर्दा सावधानी अपनाउनु उपयुक्त हुनेछ।",वृद्धि:"यस योगले धन, ज्ञान र व्यवसायमा निरन्तर वृद्धि गराउनेछ।",ध्रुव:"यस योगमा सुरु गरिएका कार्यहरू स्थायी हुने र दीर्घकालीन लाभ दिनेछन्।",व्याघात:"यस योगमा अनावश्यक विवाद र वादविवादबाट टाढै रहनु बेस हुनेछ।",हर्षण:"यस योगले मनमा प्रशन्नता ल्याउने र कार्यमा उत्साह जगाउनेछ।",वज्र:"यस योगमा गरिएको कार्यले वज्र जस्तै बलियो र दृढ परिणाम दिनेछ।",सिद्धि:"यस योगले सम्पूर्ण कार्यमा सिद्धि (सफलता) र मनोकामना पूर्ण गराउनेछ।",व्यतीपात:"यस योगमा ठूला र महत्त्वपूर्ण निर्णयहरू लिँदा पुनर्विचार गर्नुहोला।",वरीयान्:"यस योगले जीवनमा श्रेष्ठता, सम्मान र उच्च सफलता दिलाउनेछ।",परिघ:"यस योगमा कार्य गर्दा केही बाधाहरू आउन सक्ने भएकाले धैर्यता अपनाउनुहोला।",शिव:"यस योगले महादेवको कृपास्वरूप सम्पूर्ण कार्यमा कल्याण र शान्ति ल्याउनेछ।",सिद्ध:"यस योगमा थालिएका कामहरू विना कुनै विघ्नबाधा सम्पन्न हुनेछन्।",साध्य:"यस योगले असम्भव जस्तो लाग्ने कार्यलाई पनि सहजै साध्न (पुरा गर्न) मद्दत गर्नेछ।",शुभ:"यस योगले जीवनका हरेक क्षेत्रमा शुभ फल र मङ्गलमय परिणाम दिनेछ।",शुक्ल:"यस योगले ज्ञान, पवित्रता र कार्यमा उज्ज्वलता प्रदान गर्नेछ।",ब्रह्म:"यस योगले आध्यात्मिक चिन्तन र विद्या अध्ययनमा विशेष सफलता दिनेछ।",इन्द्र:"यस योगले नेतृत्व क्षमता, राज्यसुख र प्रशासनिक कार्यमा विजय दिलाउनेछ।",वैधृति:"यस योगमा नयाँ लगानी वा महत्त्वपूर्ण कार्य गर्दा सजग रहनुहोला।"}[f];if(!v){const j=["यस योगमा गरिएका कार्यहरूमा शुभ फल मिल्ने विश्वास गरिन्छ।","यस योगले सामान्यतया सकारात्मक र मङ्गलमय परिणाम दिनेछ।","यस योगमा थालिएका सम्पूर्ण सत्कर्महरूमा सफलता प्राप्त हुनेछ।","यस योगको प्रभावले दैनिक कार्यहरू विना कुनै बाधा सम्पन्न हुनेछन्।","यस योगले आजको दिनलाई सुखद र फलदायी बनाउन मद्दत गर्नेछ।"],n=new Date,I=Math.floor((n.getTime()-new Date(n.getFullYear(),0,0).getTime())/1e3/60/60/24);v=j[I%j.length]}if(g+=`आज ${f} योग परेको छ। ${v} `,d&&d.isActiveCivil){const n={bhadraResidenceEarth:"मृत्यु लोक (पृथ्वी)",bhadraResidenceHeaven:"स्वर्ग लोक (स्वर्ग)",bhadraResidenceUnderworld:"पाताल लोक (पाताल)"}[d.residence]||d.residence;d.isHarmful?g+=`ध्यान दिनुहोला, आज ${n}मा भद्रा परेको छ र यसको प्रभाव अशुभ मानिन्छ। शुभ कार्यहरू भद्रा समयपछि मात्र गर्दा राम्रो हुनेछ।`:g+=`आज ${n}मा भद्रा रहे पनि यसको प्रभाव शुभ फलदायी मानिन्छ।`}else g+="आज गरिएका कार्यहरूमा शुभ फल मिल्ने विश्वास गरिन्छ।";return g},Nt=(a,i=[])=>{if(i&&i.length>0){const d=i[0].name,h=[`${d} को यस पावन अवसरमा व्रत, पूजापाठ तथा दान-पुण्य गर्नाले विशेष फल मिल्नेछ।`,`आज ${d} को विशेष दिन भएकाले इष्टदेवको आराधना गर्दा जीवनमा सुख र समृद्धि प्राप्त हुनेछ।`,`${d} को शुभ अवसरमा सम्पूर्ण परिवारको कल्याणको कामना गर्दै धार्मिक कार्यमा सहभागी हुनुहोला।`],o=new Date,b=Math.floor((o.getTime()-new Date(o.getFullYear(),0,0).getTime())/1e3/60/60/24);return h[b%h.length]}const c={0:["आज आइतबार भगवान सूर्य नारायणको उपासना र आदित्य हृदय स्तोत्रको पाठ गर्नाले तेज, ऊर्जा र सफलता प्राप्त हुनेछ।","सूर्यदेवलाई अर्घ्य दिएर दिनको आरम्भ गर्नुहोस्, सम्पूर्ण कार्यहरूमा सिद्धि मिल्नेछ।"],1:["आज सोमबार भगवान शिवको आराधना र जल अभिषेक गर्नाले मानसिक शान्ति र सुख प्राप्त हुनेछ।","महादेवको पूजा अर्चना गर्दै ॐ नमः शिवाय मन्त्रको जप गर्नुहोला, दिन शुभ रहनेछ।"],2:["आज मंगलबार संकटमोचन हनुमानजीको दर्शन र हनुमान चालिसा पाठ गर्नाले सम्पूर्ण विघ्न-बाधा दूर हुनेछन्।","बजरङ्गबलीको कृपाले तपाईंका कार्यहरू निर्विघ्न सम्पन्न हुनेछन्। आज रातो वस्त्र धारण गर्नु शुभ मानिन्छ।"],3:["आज बुधबार भगवान गणेश र श्रीकृष्णको पूजा आराधना गर्नाले बुद्धि र विवेकमा वृद्धि हुनेछ।","श्रीहरि विष्णुको स्मरण गर्दै दिनको सुरुवात गर्नुहोला, घर-परिवारमा प्रेम र सद्भाव बनिरहनेछ।"],4:["आज बिहीबार भगवान विष्णु र बृहस्पति देवको पूजा गर्नाले शिक्षा, ज्ञान र धनमा वृद्धि हुनेछ।","आजको दिन पहेँलो वस्त्र धारण गर्नु र गुरुजनको आशीर्वाद लिनु अत्यन्त शुभ मानिन्छ।"],5:["आज शुक्रबार माता लक्ष्मी र सन्तोषी माताको आराधना गर्नाले घरमा धन-धान्य र सुख-समृद्धिले बास गर्नेछ।","माता भगवतीको स्मरण गर्दै कन्याहरूलाई दान गर्नाले विशेष शुभ फल प्राप्त हुनेछ।"],6:["आज शनिबार न्यायका देवता शनिदेवको पूजा र पिपलको वृक्षमा जल चढाउनाले सम्पूर्ण कष्ट निवारण हुनेछन्।","शनिदेवको कृपा प्राप्त गर्न आज गरिब तथा दुःखीहरूलाई सहयोग गर्नु अत्यन्त फलदायी मानिन्छ।"]},u=c[a]||c[0],f=new Date,s=Math.floor((f.getTime()-new Date(f.getFullYear(),0,0).getTime())/1e3/60/60/24)%u.length;return u[s]},St=["आइतवार","सोमवार","मंगलवार","बुधवार","बिहीवार","शुक्रवार","शनिवार"],X=a=>Ca(a),ya=({data:a,date:i,onLoad:c,variant:u,isOffscreen:f=!1})=>{const{location:p}=Me(),s=y=>{if(!y)return"";try{const k=new Date(y);if(isNaN(k.getTime()))return"";const T=Xe(k,p.zoneId||"Asia/Kathmandu");let M=T.getUTCHours();const P=T.getUTCMinutes();let O="बिहान";return M>=12&&M<16?O="दिउँसो":M>=16&&M<20?O="बेलुका":(M>=20||M<4)&&(O="राति"),M>12&&(M-=12),M===0&&(M=12),`${O} ${X(M)}:${X(P<10?"0"+P:P)} सम्म`}catch{return""}},d=y=>{if(!y)return"—";try{const k=new Date(y);if(isNaN(k.getTime()))return"—";const T=Xe(k,p.zoneId||"Asia/Kathmandu");let M=T.getUTCHours();const P=T.getUTCMinutes();let O="बिहान";return M>=12&&M<16?O="दिउँसो":M>=16&&M<20?O="बेलुका":(M>=20||M<4)&&(O="राति"),M>12&&(M-=12),M===0&&(M=12),`${X(M)}:${X(P<10?"0"+P:P)} ${O}`}catch{return"—"}};if(K.useEffect(()=>{if(c){const y=setTimeout(c,500);return()=>clearTimeout(y)}},[c,a]),!a)return null;const h=je(i),o=h?.year?h.year.toString():"0",b=h?.monthName||"",g=h?.day||0,r=Ia(i),v=St[r]||"",n=`${["जनवरी","फेब्रुअरी","मार्च","अप्रिल","मे","जुन","जुलाई","अगस्ट","सेप्टेम्बर","अक्टोबर","नोभेम्बर","डिसेम्बर"][i.getUTCMonth()]} ${X(i.getUTCDate())}, ${X(i.getUTCFullYear())}`,I=a?.sunriseMs?new Date(a.sunriseMs):a?.sunriseIso?new Date(a.sunriseIso):null,t=a?.nextSunriseMs?new Date(a.nextSunriseMs):a?.nextSunriseIso?new Date(a.nextSunriseIso):null,A=y=>!y||!t||!I?y:y.filter(k=>{const T=k.startTime?new Date(k.startTime):null,M=k.endTime?new Date(k.endTime):null;return!(M&&M<=I||T&&T>=t)}),V=A(a.tithis||[]),B=A(a.nakshatras||[]),_=A(a.yogas||[]),R=A(a.karanas||[]),N=A(a.moonRashis||[]),C=V?.[0],Y=V?.[1],W=B?.[0],J=B?.[1],z=_?.[0],te=_?.[1],q=R?.[0],L=R?.[1],D=N?.[0],le=Fa(v,C?.name||"",s(C?.endTime),Y?.name||null,z?.name||"",W?.name||null,a.events,a.bhadra),oe=Nt(r,a.events),U=(()=>{if(!a.sunriseIso||!a.sunsetIso||!a.nextSunriseIso)return{dinamanaGp:"—",ratrimanaGp:"—"};const y=a.sunriseMs??new Date(a.sunriseIso).getTime(),k=a.sunsetMs??new Date(a.sunsetIso).getTime(),T=a.nextSunriseMs??new Date(a.nextSunriseIso).getTime(),M=T-y,P=k-y,O=T-k,H=ne=>{const de=ne/M*60,se=Math.floor(de),ie=Math.floor((de-se)*60);return`${X(se)} घडी ${X(ie)} पला`};return{dinamanaGp:H(P),ratrimanaGp:H(O)}})(),x=a.ayana==="Uttarayana"?"उत्तरायण":a.ayana==="Dakshinayana"?"दक्षिणायन":a.ayana,m={1:{primary:"#1a237e",secondary:"#c62828",sidebar:"linear-gradient(180deg, #1565c0 0%, #0d47a1 50%, #1a237e 100%)",footer:"linear-gradient(95deg,#0a4f48 0%,#0f7269 22%,#17967f 42%,#4a9f6f 62%,#c9ac4e 82%,#e8bd45 100%)",bg:"linear-gradient(135deg, #f0f2f5, #e8eaed)"},2:{primary:"#4a148c",secondary:"#c2185b",sidebar:"linear-gradient(180deg, #7b1fa2 0%, #6a1b9a 50%, #4a148c 100%)",footer:"linear-gradient(95deg,#4a148c 0%,#6a1b9a 22%,#8e24aa 42%,#ab47bc 62%,#ce93d8 82%,#f48fb1 100%)",bg:"linear-gradient(135deg, #f3e5f5, #fce4ec)"},3:{primary:"#bf360c",secondary:"#b71c1c",sidebar:"linear-gradient(180deg, #e65100 0%, #d84315 50%, #bf360c 100%)",footer:"linear-gradient(95deg,#bf360c 0%,#d84315 22%,#e64a19 42%,#f4511e 62%,#ff8a65 82%,#ffcc80 100%)",bg:"linear-gradient(135deg, #fbe9e7, #fff3e0)"},4:{primary:"#006064",secondary:"#01579b",sidebar:"linear-gradient(180deg, #00838f 0%, #006064 50%, #004d40 100%)",footer:"linear-gradient(95deg,#004d40 0%,#00695c 22%,#00796b 42%,#00897b 62%,#4db6ac 82%,#80cbc4 100%)",bg:"linear-gradient(135deg, #e0f7fa, #e0f2f1)"},5:{primary:"#880e4f",secondary:"#e65100",sidebar:"linear-gradient(180deg, #c2185b 0%, #880e4f 50%, #4a148c 100%)",footer:"linear-gradient(95deg,#b71c1c 0%,#c62828 22%,#d32f2f 42%,#e53935 62%,#ffb300 82%,#ffca28 100%)",bg:"linear-gradient(135deg, #fce4ec, #fbe9e7)"}},S=m[u||1]||m[1];return e.jsx("div",{style:f?{position:"absolute",top:-9999,left:-9999,zIndex:-1,pointerEvents:"none"}:{},children:e.jsxs("div",{id:"panchanga-share-card",className:"poster",style:{"--theme-primary":S.primary,"--theme-secondary":S.secondary,"--theme-sidebar":S.sidebar,"--theme-footer":S.footer,"--theme-bg":S.bg},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`

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
`}}),e.jsxs("svg",{className:"mountain-bg",viewBox:"0 0 500 200",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"skyGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#b3d4f0"}),e.jsx("stop",{offset:"100%",stopColor:"#e8f0f8"})]}),e.jsxs("linearGradient",{id:"mountainGrad1",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),e.jsx("stop",{offset:"40%",stopColor:"#d0dce8"}),e.jsx("stop",{offset:"100%",stopColor:"#8fa4b8"})]}),e.jsxs("linearGradient",{id:"mountainGrad2",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#e8eef4"}),e.jsx("stop",{offset:"100%",stopColor:"#a0b4c8"})]})]}),e.jsx("rect",{width:"500",height:"200",fill:"url(#skyGrad)",opacity:"0.5"}),e.jsx("path",{d:"M100,180 L180,60 L220,90 L280,30 L340,80 L400,50 L460,100 L500,80 L500,200 L100,200 Z",fill:"url(#mountainGrad2)",opacity:"0.6"}),e.jsx("path",{d:"M150,180 L220,80 L260,110 L310,50 L370,90 L420,60 L470,110 L500,90 L500,200 L150,200 Z",fill:"url(#mountainGrad1)",opacity:"0.8"}),e.jsx("path",{d:"M280,30 L295,55 L270,50 Z",fill:"white",opacity:"0.9"}),e.jsx("path",{d:"M310,50 L325,70 L300,65 Z",fill:"white",opacity:"0.8"}),e.jsx("path",{d:"M400,50 L415,70 L390,65 Z",fill:"white",opacity:"0.9"}),e.jsxs("g",{transform:"translate(380, 60)",children:[e.jsx("rect",{x:"10",y:"80",width:"60",height:"8",fill:"#8B4513",rx:"2"}),e.jsx("polygon",{points:"0,80 80,80 70,65 10,65",fill:"#654321"}),e.jsx("rect",{x:"15",y:"65",width:"50",height:"15",fill:"#8B6914"}),e.jsx("polygon",{points:"5,65 75,65 65,50 15,50",fill:"#654321"}),e.jsx("rect",{x:"20",y:"50",width:"40",height:"15",fill:"#8B6914"}),e.jsx("polygon",{points:"10,50 70,50 60,38 20,38",fill:"#654321"}),e.jsx("rect",{x:"25",y:"38",width:"30",height:"12",fill:"#8B6914"}),e.jsx("polygon",{points:"15,38 65,38 55,28 25,28",fill:"#654321"}),e.jsx("line",{x1:"40",y1:"28",x2:"40",y2:"10",stroke:"#DAA520",strokeWidth:"3"}),e.jsx("circle",{cx:"40",cy:"8",r:"4",fill:"#DAA520"}),e.jsx("rect",{x:"30",y:"70",width:"8",height:"8",fill:"#4a3010",rx:"1"}),e.jsx("rect",{x:"45",y:"70",width:"8",height:"8",fill:"#4a3010",rx:"1"})]})]}),e.jsxs("div",{className:"header",children:[e.jsx("div",{className:"logo-section",children:e.jsx("img",{src:Ba,alt:"NepDate Logo",style:{height:60,objectFit:"contain"}})}),e.jsxs("div",{className:"title-section",children:[e.jsxs("div",{className:"main-title",children:[e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"5",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"25",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"5",cy:"15",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"25",cy:"15",r:"2.5",fill:"#c62828"})]}),e.jsx("span",{children:"आजको"}),e.jsx("span",{className:"red",children:"पञ्चाङ्ग"}),e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"5",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"25",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"5",cy:"15",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"25",cy:"15",r:"2.5",fill:"#c62828"})]})]}),e.jsx("div",{className:"title-sub",children:"हरेक दिनको विश्वास"})]}),e.jsx("div",{style:{width:"120px"}})]}),e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"left-sidebar",children:[e.jsxs("svg",{className:"sidebar-calendar-icon",width:"40",height:"40",viewBox:"0 0 40 40",children:[e.jsx("rect",{x:"5",y:"8",width:"30",height:"28",rx:"3",fill:"none",stroke:"white",strokeWidth:"2"}),e.jsx("line",{x1:"5",y1:"16",x2:"35",y2:"16",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"10",y:"4",width:"4",height:"8",rx:"1",fill:"white"}),e.jsx("rect",{x:"26",y:"4",width:"4",height:"8",rx:"1",fill:"white"}),e.jsx("rect",{x:"10",y:"20",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"17.5",y:"20",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"25",y:"20",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"10",y:"27",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"17.5",y:"27",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"25",y:"27",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"})]}),e.jsx("div",{className:"sidebar-label",children:"विक्रम संवत्"}),e.jsx("div",{className:"sidebar-big-date",children:X(g)}),e.jsx("div",{className:"sidebar-month",children:b}),e.jsx("div",{className:"sidebar-year",children:X(o).slice(-2)}),e.jsx("div",{className:"sidebar-day",children:v}),e.jsxs("div",{className:"sidebar-gregorian",children:["तद्नुसार",e.jsx("br",{}),n]})]}),e.jsxs("div",{className:"center-content",children:[e.jsxs("div",{className:"date-banner",children:[e.jsx("div",{className:"date-banner-icon",children:e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",children:[e.jsx("rect",{x:"3",y:"6",width:"22",height:"20",rx:"2",fill:"none",stroke:"white",strokeWidth:"2"}),e.jsx("line",{x1:"3",y1:"12",x2:"25",y2:"12",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"7",y:"2",width:"3",height:"6",rx:"1",fill:"white"}),e.jsx("rect",{x:"18",y:"2",width:"3",height:"6",rx:"1",fill:"white"})]})}),e.jsxs("div",{style:{flex:1,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px",whiteSpace:"nowrap"},children:[e.jsxs("div",{className:"date-banner-text",style:{fontSize:"18px"},children:["विक्रम संवत् ",e.jsx("span",{className:"red",children:X(o)})," ",b," ",X(g)," गते"]}),a.nepalSambatYear&&e.jsxs("div",{className:"date-banner-sub",style:{fontSize:"14px",color:"#1a237e",fontWeight:600},children:["नेपाल संवत् ",X(a.nepalSambatYear)," ",a.nepalSambatMonthName," ",X(a.nepalSambatDay)]}),e.jsxs("div",{className:"date-banner-sub",children:["तद्नुसार ",n]})]}),e.jsx("div",{style:{fontSize:"24px",fontWeight:900,color:"#c62828",borderLeft:"2px solid #eee",paddingLeft:"20px",paddingRight:"10px"},children:v})]})]}),e.jsxs("div",{className:"panchang-row",children:[e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("path",{d:"M18,5 A12,12 0 1,0 18,25 A8,8 0 1,1 18,5",fill:"#ffd700"}),e.jsx("circle",{cx:"10",cy:"10",r:"1.5",fill:"white"}),e.jsx("circle",{cx:"20",cy:"15",r:"1",fill:"white"}),e.jsx("circle",{cx:"12",cy:"22",r:"1",fill:"white"})]})}),e.jsx("div",{className:"panchang-box-label",children:"तिथि"}),e.jsx("div",{className:"panchang-box-value",children:C?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:C?.endTime?`(${s(C.endTime)})`:""}),Y?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),Y.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"none",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("circle",{cx:"15",cy:"6",r:"2",fill:"#ffd700"}),e.jsx("circle",{cx:"22",cy:"10",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"24",cy:"18",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"20",cy:"24",r:"2",fill:"#ffd700"}),e.jsx("circle",{cx:"12",cy:"24",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"7",cy:"18",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"8",cy:"10",r:"2",fill:"#ffd700"}),e.jsx("line",{x1:"15",y1:"6",x2:"22",y2:"10",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"22",y1:"10",x2:"24",y2:"18",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"24",y1:"18",x2:"20",y2:"24",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"20",y1:"24",x2:"12",y2:"24",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"12",y1:"24",x2:"7",y2:"18",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"7",y1:"18",x2:"8",y2:"10",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"8",y1:"10",x2:"15",y2:"6",stroke:"#ffd700",strokeWidth:"0.8"})]})}),e.jsx("div",{className:"panchang-box-label",children:"नक्षत्र"}),e.jsx("div",{className:"panchang-box-value",children:W?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:W?.endTime?`(${s(W.endTime)})`:""}),J?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),J.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"8",r:"4",fill:"#ffd700"}),e.jsx("path",{d:"M15,12 L15,20 M10,16 L20,16 M12,20 L15,26 L18,20",stroke:"#ffd700",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),e.jsx("circle",{cx:"15",cy:"15",r:"10",fill:"none",stroke:"#ffd700",strokeWidth:"1",opacity:"0.5"})]})}),e.jsx("div",{className:"panchang-box-label",children:"योग"}),e.jsx("div",{className:"panchang-box-value",children:z?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:z?.endTime?`(${s(z.endTime)})`:""}),te?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),te.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"#1a237e"}),e.jsx("path",{d:"M15,3 A12,12 0 0,1 15,27 A8,8 0 0,0 15,3",fill:"#ffd700"})]})}),e.jsx("div",{className:"panchang-box-label",children:"करण"}),e.jsx("div",{className:"panchang-box-value",children:q?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:q?.endTime?`(${s(q.endTime)})`:""}),L?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),L.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"none",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("circle",{cx:"15",cy:"15",r:"8",fill:"none",stroke:"#ffd700",strokeWidth:"1"}),e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"none",stroke:"#ffd700",strokeWidth:"1"}),e.jsx("line",{x1:"15",y1:"3",x2:"15",y2:"7",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("line",{x1:"15",y1:"23",x2:"15",y2:"27",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("line",{x1:"3",y1:"15",x2:"7",y2:"15",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("line",{x1:"23",y1:"15",x2:"27",y2:"15",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("circle",{cx:"15",cy:"15",r:"2",fill:"#ffd700"})]})}),e.jsx("div",{className:"panchang-box-label",children:"चन्द्र राशि"}),e.jsx("div",{className:"panchang-box-value",children:D?.name||"—"})]})]}),e.jsxs("div",{className:"other-details-body",children:[e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#1a237e"}),e.jsx("line",{x1:"4",y1:"12",x2:"28",y2:"12",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"8",y:"2",width:"4",height:"6",rx:"1",fill:"#1a237e"}),e.jsx("rect",{x:"20",y:"2",width:"4",height:"6",rx:"1",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"वार"}),e.jsx("div",{className:"detail-value",children:v})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#1a237e"}),e.jsx("path",{d:"M16,4 A12,12 0 0,1 16,28 A8,8 0 0,0 16,4",fill:"#ffd700"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"पक्ष"}),e.jsx("div",{className:"detail-value",children:a.paksha||""})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#7b1fa2"}),e.jsx("line",{x1:"4",y1:"12",x2:"28",y2:"12",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"8",y:"2",width:"4",height:"6",rx:"1",fill:"#7b1fa2"}),e.jsx("rect",{x:"20",y:"2",width:"4",height:"6",rx:"1",fill:"#7b1fa2"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"मास"}),e.jsx("div",{className:"detail-value",children:a.lunarMonth||""})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#2e7d32"}),e.jsx("path",{d:"M10,20 Q16,12 22,20 Q16,24 10,20",fill:"#81c784"}),e.jsx("line",{x1:"16",y1:"20",x2:"16",y2:"26",stroke:"#81c784",strokeWidth:"2"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"ऋतु"}),e.jsx("div",{className:"detail-value",children:a.ritu||""})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#c62828"}),e.jsx("line",{x1:"4",y1:"12",x2:"28",y2:"12",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"8",y:"2",width:"4",height:"6",rx:"1",fill:"#c62828"}),e.jsx("rect",{x:"20",y:"2",width:"4",height:"6",rx:"1",fill:"#c62828"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"संवत्सर"}),e.jsx("div",{className:"detail-value",children:a.samvatsar||""})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#5e35b1"}),e.jsx("path",{d:"M10,16 Q16,10 22,16 Q16,22 10,16",fill:"#b39ddb"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"अयन"}),e.jsx("div",{className:"detail-value",children:x||"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#00acc1"}),e.jsx("path",{d:"M12,16 L16,12 L20,16 L16,20 Z",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"आनन्दादि योग"}),e.jsx("div",{className:"detail-value",children:a.anandadiYoga?a.anandadiYoga.nameNe:"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#fdd835"}),e.jsx("circle",{cx:"16",cy:"16",r:"6",fill:"#f57f17"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"दिनमान"}),e.jsx("div",{className:"detail-value",children:U.dinamanaGp})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#3949ab"}),e.jsx("path",{d:"M12,10 A6,6 0 0,0 12,22 A8,8 0 0,1 12,10",fill:"#c5cae9"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"रात्रिमान"}),e.jsx("div",{className:"detail-value",children:U.ratrimanaGp})]})]})]})]}),e.jsxs("div",{className:"right-panel",children:[e.jsx("div",{className:"shubh-header",children:"शुभ समय"}),e.jsxs("div",{className:"shubh-body",children:[e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("circle",{cx:"18",cy:"20",r:"10",fill:"#ffd700"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#4fc3f7"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"सूर्योदय"}),e.jsx("div",{className:"shubh-item-value",children:d(a.sunriseIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("circle",{cx:"18",cy:"20",r:"10",fill:"#ff8a65"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#4fc3f7"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"सूर्यास्त"}),e.jsx("div",{className:"shubh-item-value",children:d(a.sunsetIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("path",{d:"M16,9 A9,9 0 0,0 16,25 A11,11 0 0,1 25,18 A9,9 0 0,0 16,9",fill:"#b0bec5"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"चन्द्रोदय"}),e.jsx("div",{className:"shubh-item-value",children:d(a.moonriseIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("path",{d:"M16,9 A9,9 0 0,0 16,25 A11,11 0 0,1 25,18 A9,9 0 0,0 16,9",fill:"none",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"चन्द्रास्त"}),e.jsx("div",{className:"shubh-item-value",children:d(a.moonsetIso)})]})]})]})]})]}),e.jsx("div",{className:"other-details-section",children:e.jsxs("div",{className:"other-details-body",children:[e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#1565c0"}),e.jsx("path",{d:"M12,12 Q16,16 12,20 A4,4 0 1,0 20,20 Q16,16 20,12 A4,4 0 1,0 12,12",fill:"none",stroke:"white",strokeWidth:"2"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"अहर्गण"}),e.jsx("div",{className:"detail-value",children:a.ahargana?X(Math.floor(a.ahargana)):"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#e65100"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"}),e.jsx("line",{x1:"16",y1:"13",x2:"16",y2:"17",stroke:"#e65100",strokeWidth:"2"}),e.jsx("line",{x1:"16",y1:"17",x2:"19",y2:"17",stroke:"#e65100",strokeWidth:"2"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"जुलियन दिन"}),e.jsx("div",{className:"detail-value",children:a.julianDay?X(Math.floor(a.julianDay)):"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#00897b"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"नेपाल संवत् (चान्द्र)"}),e.jsx("div",{className:"detail-value",children:a.nepalSambatYear?`${X(a.nepalSambatYear)} ${a.nepalSambatMonthName} ${X(a.nepalSambatDay)}`:"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#d81b60"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"नेपाल संवत् (सौर)"}),e.jsx("div",{className:"detail-value",children:a.nepalSambatSolar?`${X(a.nepalSambatSolar.year)} ${a.nepalSambatSolar.monthNameNe} ${X(a.nepalSambatSolar.day)}`:"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#6d4c41"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"शक वर्ष"}),e.jsx("div",{className:"detail-value",children:a.shakaYear?X(a.shakaYear):"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#43a047"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"कलि वर्ष"}),e.jsx("div",{className:"detail-value",children:a.kaliYear?X(a.kaliYear):"—"})]})]})]})}),e.jsxs("div",{className:"bottom-sections",children:[e.jsxs("div",{className:"special-box",children:[e.jsx("div",{className:"special-header-wrap",children:e.jsx("div",{className:"special-header",children:"आजको विशेष"})}),e.jsxs("div",{className:"special-content",children:[e.jsxs("svg",{className:"special-decor",width:"80",height:"100",viewBox:"0 0 80 100",children:[e.jsx("ellipse",{cx:"40",cy:"75",rx:"20",ry:"8",fill:"#8B4513"}),e.jsx("path",{d:"M25,75 Q25,60 40,55 Q55,60 55,75",fill:"#D2691E"}),e.jsx("ellipse",{cx:"40",cy:"55",rx:"15",ry:"5",fill:"#FFD700"}),e.jsx("path",{d:"M40,55 Q35,40 40,25 Q45,40 40,55",fill:"#FF6600"}),e.jsx("path",{d:"M40,50 Q37,42 40,32 Q43,42 40,50",fill:"#FFD700"}),e.jsx("path",{d:"M40,45 Q38,40 40,35 Q42,40 40,45",fill:"#FFF8DC"}),e.jsx("circle",{cx:"15",cy:"85",r:"8",fill:"#FF69B4"}),e.jsx("circle",{cx:"15",cy:"85",r:"4",fill:"#FFB6C1"}),e.jsx("circle",{cx:"10",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"20",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"10",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"20",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"65",cy:"85",r:"8",fill:"#FF69B4"}),e.jsx("circle",{cx:"65",cy:"85",r:"4",fill:"#FFB6C1"}),e.jsx("circle",{cx:"60",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"70",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"60",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"70",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("ellipse",{cx:"8",cy:"88",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(-30,8,88)"}),e.jsx("ellipse",{cx:"72",cy:"88",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(30,72,88)"})]}),e.jsx("div",{children:le})]})]}),e.jsxs("div",{className:"message-box",children:[e.jsx("div",{className:"message-header-wrap",children:e.jsx("div",{className:"message-header",children:"शुभ सन्देश"})}),e.jsxs("div",{className:"message-content",children:[e.jsxs("svg",{className:"message-decor",width:"70",height:"90",viewBox:"0 0 70 90",children:[e.jsx("path",{d:"M35,15 L25,30 Q20,40 22,55 Q24,65 30,75 L35,80 L40,75 Q46,65 48,55 Q50,40 45,30 Z",fill:"#FDBCB4",stroke:"#E8A090",strokeWidth:"1"}),e.jsx("line",{x1:"35",y1:"20",x2:"35",y2:"75",stroke:"#E8A090",strokeWidth:"1.5"}),e.jsx("path",{d:"M25,35 Q30,32 35,35",fill:"none",stroke:"#E8A090",strokeWidth:"1"}),e.jsx("path",{d:"M45,35 Q40,32 35,35",fill:"none",stroke:"#E8A090",strokeWidth:"1"}),e.jsx("path",{d:"M22,55 Q15,60 10,70 Q8,75 12,78 Q18,75 25,70 Z",fill:"#4169E1"}),e.jsx("path",{d:"M48,55 Q55,60 60,70 Q62,75 58,78 Q52,75 45,70 Z",fill:"#4169E1"})]}),e.jsxs("div",{children:['"',oe,'"']}),e.jsxs("svg",{width:"50",height:"60",viewBox:"0 0 50 60",style:{flexShrink:"0"},children:[e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(0,25,20)"}),e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(72,25,20)"}),e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(144,25,20)"}),e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(216,25,20)"}),e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(288,25,20)"}),e.jsx("circle",{cx:"25",cy:"20",r:"5",fill:"#FFD700"}),e.jsx("line",{x1:"25",y1:"32",x2:"25",y2:"55",stroke:"#228B22",strokeWidth:"2"}),e.jsx("ellipse",{cx:"18",cy:"45",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(-30,18,45)"}),e.jsx("ellipse",{cx:"32",cy:"48",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(30,32,48)"})]})]}),e.jsx("div",{className:"message-footer-text",children:"✨ आजको दिन सुखद रहोस् ! ✨"})]})]}),e.jsxs("footer",{className:"sc-footer",children:[e.jsx("div",{style:{backgroundColor:"white",padding:10,borderRadius:12},children:e.jsx("img",{src:Aa,alt:"NepDate Logo",style:{height:48,objectFit:"contain"}})}),e.jsx("div",{className:"sc-footer-divider"}),e.jsxs("div",{className:"sc-footer-text",children:["विस्तृत पञ्चाङ्ग, राशिफल र शुभ साइतका लागि",e.jsx("br",{}),e.jsx("span",{className:"sc-hl",children:"NepDate नेपाली पात्रो App डाउनलोड गर्नुहोस् ।"})]}),e.jsx("div",{className:"sc-playstore",children:e.jsx("img",{src:za,alt:"GET IT ON Google Play",style:{height:80,objectFit:"contain"}})}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"sc-footer-ornament",width:"140",height:"16",viewBox:"0 0 140 16",fill:"none",children:[e.jsx("path",{d:"M140 8C140 12.4183 136.418 16 132 16H8C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0H132C136.418 0 140 3.58172 140 8Z",fill:"white",fillOpacity:"0.1"}),e.jsx("circle",{cx:"70",cy:"8",r:"4",fill:"white",fillOpacity:"0.3"}),e.jsx("circle",{cx:"56",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"}),e.jsx("circle",{cx:"84",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"})]})]})]})})},ja="/assets/left_ornament-CNOcf_Fy.svg",Tt="/assets/mountain_bg-Casg-URl.png",It=["आइतवार","सोमवार","मंगलवार","बुधवार","बिहीवार","शुक्रवार","शनिवार"],fe=a=>Ca(a),va=({data:a,date:i,onLoad:c,variant:u,isOffscreen:f=!1})=>{const{location:p}=Me(),s=G=>{if(!G)return"";try{const U=new Date(G);if(isNaN(U.getTime()))return"";const x=Xe(U,p.zoneId||"Asia/Kathmandu");let m=x.getUTCHours();const S=x.getUTCMinutes();let y="बिहान";return m>=12&&m<16?y="दिउँसो":m>=16&&m<20?y="बेलुका":(m>=20||m<4)&&(y="राति"),m>12&&(m-=12),m===0&&(m=12),`${y} ${fe(m)}:${fe(S<10?"0"+S:S)} सम्म`}catch{return""}},d=G=>{if(!G)return"—";try{const U=new Date(G);if(isNaN(U.getTime()))return"—";const x=Xe(U,p.zoneId||"Asia/Kathmandu");let m=x.getUTCHours();const S=x.getUTCMinutes();let y="बिहान";return m>=12&&m<16?y="दिउँसो":m>=16&&m<20?y="बेलुका":(m>=20||m<4)&&(y="राति"),m>12&&(m-=12),m===0&&(m=12),`${fe(m)}:${fe(S<10?"0"+S:S)} ${y}`}catch{return"—"}};if(K.useEffect(()=>{if(c){const G=setTimeout(c,500);return()=>clearTimeout(G)}},[c,a]),!a)return null;const h=je(i),o=h?.year?h.year.toString():"0",b=h?.monthName||"",g=h?.day||0,r=Ia(i),v=It[r]||"",n=`${["जनवरी","फेब्रुअरी","मार्च","अप्रिल","मे","जुन","जुलाई","अगस्ट","सेप्टेम्बर","अक्टोबर","नोभेम्बर","डिसेम्बर"][i.getUTCMonth()]} ${fe(i.getUTCDate())}, ${fe(i.getUTCFullYear())}`,I=a?.sunriseMs?new Date(a.sunriseMs):a?.sunriseIso?new Date(a.sunriseIso):null,t=a?.nextSunriseMs?new Date(a.nextSunriseMs):a?.nextSunriseIso?new Date(a.nextSunriseIso):null,A=G=>!G||!t||!I?G:G.filter(U=>{const x=U.startTime?new Date(U.startTime):null,m=U.endTime?new Date(U.endTime):null;return!(m&&m<=I||x&&x>=t)}),V=A(a.tithis||[]),B=A(a.nakshatras||[]),_=A(a.yogas||[]),R=A(a.karanas||[]),N=A(a.moonRashis||[]),C=V?.[0],Y=V?.[1],W=B?.[0],J=B?.[1],z=_?.[0],te=_?.[1],q=R?.[0],L=R?.[1];N?.[0];const D=Fa(v,C?.name||"",s(C?.endTime),Y?.name||null,z?.name||"",W?.name||null,a.events,a.bhadra);a.ayana==="Uttarayana"||a.ayana==="Dakshinayana"||a.ayana;const le={1:{primary:"#1a237e",secondary:"#c62828",sidebar:"linear-gradient(180deg, #1565c0 0%, #0d47a1 50%, #1a237e 100%)",footer:"linear-gradient(95deg,#0a4f48 0%,#0f7269 22%,#17967f 42%,#4a9f6f 62%,#c9ac4e 82%,#e8bd45 100%)",bg:"linear-gradient(135deg, #f0f2f5, #e8eaed)"},2:{primary:"#4a148c",secondary:"#c2185b",sidebar:"linear-gradient(180deg, #7b1fa2 0%, #6a1b9a 50%, #4a148c 100%)",footer:"linear-gradient(95deg,#4a148c 0%,#6a1b9a 22%,#8e24aa 42%,#ab47bc 62%,#ce93d8 82%,#f48fb1 100%)",bg:"linear-gradient(135deg, #f3e5f5, #fce4ec)"},3:{primary:"#bf360c",secondary:"#b71c1c",sidebar:"linear-gradient(180deg, #e65100 0%, #d84315 50%, #bf360c 100%)",footer:"linear-gradient(95deg,#bf360c 0%,#d84315 22%,#e64a19 42%,#f4511e 62%,#ff8a65 82%,#ffcc80 100%)",bg:"linear-gradient(135deg, #fbe9e7, #fff3e0)"},4:{primary:"#006064",secondary:"#01579b",sidebar:"linear-gradient(180deg, #00838f 0%, #006064 50%, #004d40 100%)",footer:"linear-gradient(95deg,#004d40 0%,#00695c 22%,#00796b 42%,#00897b 62%,#4db6ac 82%,#80cbc4 100%)",bg:"linear-gradient(135deg, #e0f7fa, #e0f2f1)"},5:{primary:"#880e4f",secondary:"#e65100",sidebar:"linear-gradient(180deg, #c2185b 0%, #880e4f 50%, #4a148c 100%)",footer:"linear-gradient(95deg,#b71c1c 0%,#c62828 22%,#d32f2f 42%,#e53935 62%,#ffb300 82%,#ffca28 100%)",bg:"linear-gradient(135deg, #fce4ec, #fbe9e7)"}},oe=le[u||1]||le[1];return e.jsx("div",{style:f?{position:"absolute",top:-9999,left:-9999,zIndex:-1,pointerEvents:"none"}:{},children:e.jsxs("div",{id:"panchanga-share-card",className:"poster",style:{"--theme-primary":oe.primary,"--theme-secondary":oe.secondary,"--theme-sidebar":oe.sidebar,"--theme-footer":oe.footer,"--theme-bg":oe.bg},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
`}}),e.jsx("img",{className:"mountain-bg",src:Tt,alt:"Mountain"}),e.jsx("div",{className:"mountain-overlay"}),e.jsxs("div",{className:"header",children:[e.jsx("div",{className:"logo-section",children:e.jsx("img",{src:Ba,alt:"NepDate Logo",style:{height:60,objectFit:"contain"}})}),e.jsxs("div",{className:"title-section",children:[e.jsxs("div",{className:"main-title",children:[e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"5",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"25",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"5",cy:"15",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"25",cy:"15",r:"2.5",fill:"#c62828"})]}),e.jsx("span",{children:"आजको"}),e.jsx("span",{className:"red",children:"पञ्चाङ्ग"}),e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"5",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"25",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"5",cy:"15",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"25",cy:"15",r:"2.5",fill:"#c62828"})]})]}),e.jsx("div",{className:"title-sub",children:"NepDate - हरेक दिनको विश्वास"})]}),e.jsx("div",{style:{width:"120px"}})]}),e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"center-content",style:{width:"100%"},children:[e.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",marginBottom:"25px",marginTop:"10px"},children:[e.jsx("div",{style:{position:"absolute",left:"0px",top:"50%",transform:"translateY(-50%)",height:"240px",width:"240px",backgroundColor:"var(--theme-primary, #1a237e)",WebkitMaskImage:`url(${ja})`,WebkitMaskSize:"contain",WebkitMaskRepeat:"no-repeat",WebkitMaskPosition:"center",maskImage:`url(${ja})`,maskSize:"contain",maskRepeat:"no-repeat",maskPosition:"center",zIndex:1}}),e.jsxs("div",{className:"date-banner",style:{flexDirection:"column",alignItems:"center",textAlign:"center",padding:"20px 40px",gap:"8px",width:"max-content",margin:"0",position:"relative",zIndex:2},children:[e.jsxs("div",{className:"date-banner-text",children:["विक्रम संवत् ",e.jsx("span",{className:"red",children:fe(o)})," ",b," ",e.jsx("span",{className:"red",children:fe(g)})," गते"]}),e.jsx("div",{className:"date-banner-text",children:e.jsx("span",{className:"red",children:v})}),a.nepalSambatYear&&e.jsxs("div",{className:"date-banner-sub",style:{color:"#1a237e",fontWeight:600},children:["नेपाल संवत् ",fe(a.nepalSambatYear)," ",a.nepalSambatMonthName," ",fe(a.nepalSambatDay)]}),e.jsxs("div",{className:"date-banner-sub",children:["तद्नुसार ",n]})]})]}),e.jsxs("div",{className:"panchang-row",children:[e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("path",{d:"M18,5 A12,12 0 1,0 18,25 A8,8 0 1,1 18,5",fill:"#ffd700"}),e.jsx("circle",{cx:"10",cy:"10",r:"1.5",fill:"white"}),e.jsx("circle",{cx:"20",cy:"15",r:"1",fill:"white"}),e.jsx("circle",{cx:"12",cy:"22",r:"1",fill:"white"})]})}),e.jsx("div",{className:"panchang-box-label",children:"तिथि"}),e.jsx("div",{className:"panchang-box-value",children:C?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:C?.endTime?`(${s(C.endTime)})`:""}),Y?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),Y.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"none",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("circle",{cx:"15",cy:"6",r:"2",fill:"#ffd700"}),e.jsx("circle",{cx:"22",cy:"10",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"24",cy:"18",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"20",cy:"24",r:"2",fill:"#ffd700"}),e.jsx("circle",{cx:"12",cy:"24",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"7",cy:"18",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"8",cy:"10",r:"2",fill:"#ffd700"}),e.jsx("line",{x1:"15",y1:"6",x2:"22",y2:"10",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"22",y1:"10",x2:"24",y2:"18",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"24",y1:"18",x2:"20",y2:"24",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"20",y1:"24",x2:"12",y2:"24",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"12",y1:"24",x2:"7",y2:"18",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"7",y1:"18",x2:"8",y2:"10",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"8",y1:"10",x2:"15",y2:"6",stroke:"#ffd700",strokeWidth:"0.8"})]})}),e.jsx("div",{className:"panchang-box-label",children:"नक्षत्र"}),e.jsx("div",{className:"panchang-box-value",children:W?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:W?.endTime?`(${s(W.endTime)})`:""}),J?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),J.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"8",r:"4",fill:"#ffd700"}),e.jsx("path",{d:"M15,12 L15,20 M10,16 L20,16 M12,20 L15,26 L18,20",stroke:"#ffd700",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),e.jsx("circle",{cx:"15",cy:"15",r:"10",fill:"none",stroke:"#ffd700",strokeWidth:"1",opacity:"0.5"})]})}),e.jsx("div",{className:"panchang-box-label",children:"योग"}),e.jsx("div",{className:"panchang-box-value",children:z?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:z?.endTime?`(${s(z.endTime)})`:""}),te?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),te.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"#1a237e"}),e.jsx("path",{d:"M15,3 A12,12 0 0,1 15,27 A8,8 0 0,0 15,3",fill:"#ffd700"})]})}),e.jsx("div",{className:"panchang-box-label",children:"करण"}),e.jsx("div",{className:"panchang-box-value",children:q?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:q?.endTime?`(${s(q.endTime)})`:""}),L?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),L.name," आरम्भ"]}):null]})]})]}),e.jsxs("div",{className:"shubh-horizontal",children:[e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("circle",{cx:"18",cy:"20",r:"10",fill:"#ffd700"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#4fc3f7"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"सूर्योदय"}),e.jsx("div",{className:"shubh-item-value",children:d(a.sunriseIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("circle",{cx:"18",cy:"20",r:"10",fill:"#ff8a65"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#4fc3f7"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"सूर्यास्त"}),e.jsx("div",{className:"shubh-item-value",children:d(a.sunsetIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("path",{d:"M16,9 A9,9 0 0,0 16,25 A11,11 0 0,1 25,18 A9,9 0 0,0 16,9",fill:"#b0bec5"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"चन्द्रोदय"}),e.jsx("div",{className:"shubh-item-value",children:d(a.moonriseIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("path",{d:"M16,9 A9,9 0 0,0 16,25 A11,11 0 0,1 25,18 A9,9 0 0,0 16,9",fill:"none",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"चन्द्रास्त"}),e.jsx("div",{className:"shubh-item-value",children:d(a.moonsetIso)})]})]})]})]}),e.jsx("div",{className:"bottom-sections",children:e.jsxs("div",{className:"special-box",children:[e.jsx("div",{className:"special-header-wrap",children:e.jsx("div",{className:"special-header",children:"आजको विशेष"})}),e.jsxs("div",{className:"special-content",children:[e.jsxs("svg",{className:"special-decor",width:"80",height:"100",viewBox:"0 0 80 100",children:[e.jsx("ellipse",{cx:"40",cy:"75",rx:"20",ry:"8",fill:"#8B4513"}),e.jsx("path",{d:"M25,75 Q25,60 40,55 Q55,60 55,75",fill:"#D2691E"}),e.jsx("ellipse",{cx:"40",cy:"55",rx:"15",ry:"5",fill:"#FFD700"}),e.jsx("path",{d:"M40,55 Q35,40 40,25 Q45,40 40,55",fill:"#FF6600"}),e.jsx("path",{d:"M40,50 Q37,42 40,32 Q43,42 40,50",fill:"#FFD700"}),e.jsx("path",{d:"M40,45 Q38,40 40,35 Q42,40 40,45",fill:"#FFF8DC"}),e.jsx("circle",{cx:"15",cy:"85",r:"8",fill:"#FF69B4"}),e.jsx("circle",{cx:"15",cy:"85",r:"4",fill:"#FFB6C1"}),e.jsx("circle",{cx:"10",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"20",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"10",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"20",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"65",cy:"85",r:"8",fill:"#FF69B4"}),e.jsx("circle",{cx:"65",cy:"85",r:"4",fill:"#FFB6C1"}),e.jsx("circle",{cx:"60",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"70",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"60",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"70",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("ellipse",{cx:"8",cy:"88",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(-30,8,88)"}),e.jsx("ellipse",{cx:"72",cy:"88",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(30,72,88)"})]}),e.jsx("div",{children:D})]})]})}),e.jsxs("footer",{className:"sc-footer",children:[e.jsx("div",{style:{backgroundColor:"white",padding:10,borderRadius:12},children:e.jsx("img",{src:Aa,alt:"NepDate Logo",style:{height:48,objectFit:"contain"}})}),e.jsx("div",{className:"sc-footer-divider"}),e.jsxs("div",{className:"sc-footer-text",style:{fontSize:"24px",letterSpacing:"-0.5px"},children:["विस्तृत पञ्चाङ्ग, राशिफल र शुभ साइतका लागि",e.jsx("br",{}),e.jsx("span",{className:"sc-hl",children:"NepDate नेपाली पात्रो App डाउनलोड गर्नुहोस् ।"})]}),e.jsx("div",{className:"sc-playstore",children:e.jsx("img",{src:za,alt:"GET IT ON Google Play",style:{height:80,objectFit:"contain"}})}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"sc-footer-ornament",width:"140",height:"16",viewBox:"0 0 140 16",fill:"none",children:[e.jsx("path",{d:"M140 8C140 12.4183 136.418 16 132 16H8C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0H132C136.418 0 140 3.58172 140 8Z",fill:"white",fillOpacity:"0.1"}),e.jsx("circle",{cx:"70",cy:"8",r:"4",fill:"white",fillOpacity:"0.3"}),e.jsx("circle",{cx:"56",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"}),e.jsx("circle",{cx:"84",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"})]})]})]})})},wa=({icon:a,title:i})=>e.jsxs("div",{className:"flex items-center gap-2 mb-3 mt-6 first:mt-0 pb-1 border-b border-gray-200 dark:border-gray-700/50",children:[e.jsx("div",{className:"p-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg shadow-sm",children:K.cloneElement(a,{className:"w-3.5 h-3.5 text-blue-600 dark:text-blue-400"})}),e.jsx("h3",{className:"text-sm font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 font-devanagari",children:i})]}),Ke=({label:a,value:i,className:c="",icon:u})=>e.jsxs("div",{className:`bg-white dark:bg-gray-800/40 rounded-xl p-3 border border-gray-100 dark:border-gray-700/50 shadow-sm transition-all hover:shadow-md flex items-center gap-3 ${c}`,children:[u&&e.jsx("div",{className:"shrink-0",children:u}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[13px] text-gray-600 dark:text-gray-300 font-devanagari mb-0.5 uppercase tracking-tight",children:a}),e.jsx("div",{className:"text-base font-bold text-gray-900 dark:text-white font-devanagari leading-none",children:i})]})]}),ge=({label:a,value:i,compact:c=!1})=>e.jsx("div",{className:`px-4 border-b border-gray-100 dark:border-gray-700/30 last:border-0 ${c?"py-1.5":"py-2.5"}`,children:e.jsxs("div",{className:"flex justify-between items-center text-base",children:[e.jsxs("span",{className:"text-gray-600 dark:text-gray-300 font-medium font-devanagari text-sm",children:[a,":"]}),e.jsx("div",{className:"text-gray-900 dark:text-white font-bold font-devanagari text-right",children:i||"-"})]})}),Te=({elements:a,baseDate:i,timezoneId:c,offset:u,astroType:f,sunriseIso:p,nextSunriseIso:s})=>{const{t:d,tAstro:h,language:o,n:b}=me();return!a||a.length===0?null:e.jsx("div",{className:"px-4 pt-1 pb-2 border-b border-gray-200 dark:border-gray-700/50",children:a.map((g,r)=>{const v=g.startTime?Ae(g.startTime,i,c||"Asia/Kathmandu",o,b,{showSeconds:!0,showVedicDayBracket:!0,sunriseIso:p,nextSunriseIso:s,t:d}):null,j=g.endTime?Ae(g.endTime,i,c||"Asia/Kathmandu",o,b,{showSeconds:!0,showVedicDayBracket:!0,sunriseIso:p,nextSunriseIso:s,t:d}):null;return!v&&!j?null:e.jsxs("div",{className:"mt-1.5",children:[e.jsxs("strong",{className:"text-base text-gray-800 dark:text-white font-devanagari",children:[f&&g.name?h(g.name,f):g.name,f==="tithi"&&g.isKshaya&&e.jsxs("span",{className:"ml-1 text-red-500 text-xs",children:["(",d("kshaya"),")"]}),f==="tithi"&&g.isVriddhi&&e.jsxs("span",{className:"ml-1 text-green-500 text-xs",children:["(",d("vriddhi"),")"]})]}),e.jsx("div",{className:"flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-gray-600 dark:text-gray-400 mt-1 gap-y-1 sm:gap-x-4 font-devanagari",children:v&&j?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-baseline gap-1.5",children:[e.jsxs("span",{className:"font-bold shrink-0 opacity-90",children:[d("startsOn"),":"]}),e.jsx("span",{className:"text-gray-900 dark:text-gray-200",children:v})]}),e.jsxs("div",{className:"flex items-baseline gap-1.5 sm:text-right",children:[e.jsxs("span",{className:"font-bold shrink-0 opacity-90",children:[d("endsOn"),":"]}),e.jsx("span",{className:"text-gray-900 dark:text-gray-200",children:j})]})]}):v?e.jsxs("div",{className:"flex items-baseline gap-1.5",children:[e.jsxs("span",{className:"font-bold shrink-0 opacity-70",children:[d("startsOn"),":"]}),e.jsx("span",{className:"text-gray-900 dark:text-gray-200",children:v})]}):j?e.jsxs("div",{className:"flex items-baseline gap-1.5",children:[e.jsxs("span",{className:"font-bold shrink-0 opacity-70",children:[d("endsOn"),":"]}),e.jsx("span",{className:"text-gray-900 dark:text-gray-200",children:j})]}):null})]},r)})})},Ct=({sequence:a,baseDate:i,timezoneId:c,offset:u,sunriseIso:f,nextSunriseIso:p})=>{const{language:s,t:d,n:h}=me();return!a||a.length===0?null:e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400",children:[e.jsx(Pe,{className:"w-3 h-3"}),d("anandadiYogaSequence")]}),e.jsx("div",{className:"relative pl-6 space-y-4 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-200 dark:before:bg-gray-700",children:a.map((o,b)=>{const g=o.startTime?Ae(o.startTime,i,c||"Asia/Kathmandu",s,h,{showSeconds:!0,showVedicDayBracket:!0,sunriseIso:f,nextSunriseIso:p,t:d}):d("fromSunrise"),r=o.endTime?Ae(o.endTime,i,c||"Asia/Kathmandu",s,h,{showSeconds:!0,showVedicDayBracket:!0,sunriseIso:f,nextSunriseIso:p,t:d}):d("untilSunrise"),v=s==="ne"?o.nameNe:s==="hi"?o.nameHi:o.nameEn,j=o.isAuspicious?"text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/20":"text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-900/20",n=o.isAuspicious?"bg-emerald-500":"bg-rose-500";return e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:`absolute -left-[20px] top-1.5 w-3 h-3 rounded-full border-2 border-white dark:border-gray-900 ${n}`}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-1",children:[e.jsx("span",{className:`px-2 py-0.5 rounded text-sm font-bold font-devanagari self-start ${j}`,children:v}),e.jsxs("span",{className:"text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2",children:[g," ",e.jsx("span",{className:"opacity-40",children:"—"})," ",r]})]}),e.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[e.jsxs("div",{className:"flex items-center gap-1.5 text-slate-800 dark:text-slate-200",children:[e.jsxs("span",{className:"font-bold opacity-70",children:[d("netrama"),":"]}),e.jsx("span",{className:"font-bold",children:h(o.netra)})]}),e.jsxs("div",{className:"flex items-center gap-1.5 text-slate-800 dark:text-slate-200",children:[e.jsxs("span",{className:"font-bold opacity-70",children:[d("jeevanama"),":"]}),e.jsx("span",{className:"font-bold",children:h(o.jeeva)})]})]})]})]},b)})})]})},Mt=({date:a,onClose:i,variant:c="modal",activeSystem:u="bs",onTimelineClick:f,onNavigate:p})=>{const{location:s,isStashLoaded:d,useElevation:h,ayanamsaMethod:o,engineType:b,isTopocentric:g}=Me(),{t:r,tAstro:v,n:j,language:n}=me(),I=h&&s.elevation||0,t=l.useMemo(()=>Ma(a,s.latitude,s.longitude,s.offset,n,s.zoneId,d,I,o,b,g),[a,s.latitude,s.longitude,s.offset,n,s.zoneId,d,I,o,b,g]),A=t?.sunriseMs?new Date(t.sunriseMs):t?.sunriseIso?new Date(t.sunriseIso):null,V=t?.nextSunriseMs?new Date(t.nextSunriseMs):t?.nextSunriseIso?new Date(t.nextSunriseIso):null,B=w=>!w||!V||!A?w:w.filter(F=>{const Q=F.startTime?new Date(F.startTime):null,re=F.endTime?new Date(F.endTime):null;return!(re&&re<=A||Q&&Q>=V)}),_=B(t?.tithis||[]),R=B(t?.nakshatras||[]),N=B(t?.yogas||[]),C=B(t?.karanas||[]),Y=B(t?.sunRashis||[]),W=B(t?.moonRashis||[]),J=B(t?.bhadraTiming||[]),z=t?.bhadra,te=c==="page",q=te?"bg-white dark:bg-gray-800 w-full mx-auto rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden":"bg-slate-200 dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full ring-1 ring-transparent dark:ring-gray-700/80 dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-sm mx-auto",L=te?"bg-white/95 dark:bg-gray-800/95 border-b border-gray-200 dark:border-gray-700 p-4 rounded-t-2xl":"sticky top-0 bg-slate-200 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 rounded-t-2xl z-10 transition-all shadow-sm",D=new Date().toDateString()===a.toDateString(),[le,oe]=K.useState(new Date);K.useEffect(()=>{if(D){const w=setInterval(()=>oe(new Date),6e4);return()=>clearInterval(w)}},[D]);const G=D&&t?.sunriseIso?lt(le,new Date(t.sunriseIso)):null,U=G?r("ghadiUnits").replace("{0}",j(G.ghatis)).replace("{1}",j(G.palas)):null;(()=>{if(!t.sunriseIso||!t.sunsetIso)return null;const w=new Date(t.sunsetIso).getTime()-new Date(t.sunriseIso).getTime();if(w<=0)return null;const F=Math.floor(w/36e5),Q=Math.floor(w%36e5/6e4);return`${j(F)} ${r("hour")} ${j(Q)} ${r("minute")}`})();const m=w=>{if(w===void 0)return"";const F=Math.round(w*3600),Q=Math.floor(F/3600),re=Math.floor(F%3600/60);return`${j(Q)}°${j(re)}′`},[S,y]=l.useState(null);l.useEffect(()=>{t.sunriseIso?ot.getKundali({name:"Sunrise",datetime:t.sunriseIso,latitude:s.latitude,longitude:s.longitude,zoneId:s.zoneId,offset:s.offset,locationName:s.name,engine:b,options:{zodiac:"SIDEREAL",ayanamsa:o.toUpperCase(),houseSystem:"WHOLE_SIGN",divisionalCharts:[9],dashaSystem:"VIMSHOTTARI"}}).then(w=>{y(w)}).catch(w=>console.error("Error creating sunrise kundali",w)):y(null)},[t.sunriseIso,s,b,o]);const[k,T]=K.useState(!1);K.useEffect(()=>{T(!!(typeof navigator<"u"&&navigator.share))},[]);const M=async()=>{try{let w=_e(),F="";if(u==="bs"){const re=je(a);F=`${re.year}-${re.monthIndex+1<10?"0":""}${re.monthIndex+1}-${re.day<10?"0":""}${re.day}`,w+=`bs?${F}`}else F=`${a.getFullYear()}-${a.getMonth()+1<10?"0":""}${a.getMonth()+1}-${a.getDate()<10?"0":""}${a.getDate()}`,w+=`ad?${F}`;const Q=Da(w);window.Android&&typeof window.Android.share=="function"?window.Android.share(`Nepdate - ${F}`,`Check out the details for ${F}`,Q):k&&navigator.share?await navigator.share({title:`Nepdate - ${F}`,text:`Check out the details for ${F}`,url:Q}):(await navigator.clipboard.writeText(Q),ce.success("Link copied to clipboard!"))}catch{ce.error("Failed to share")}},[P,O]=K.useState(!1),[H,ne]=K.useState("social"),[de,se]=K.useState(!1),[ie,pe]=K.useState(!1),[ve,Ue]=K.useState(null),[Oe,Ve]=K.useState(null),Je=()=>{pe(!0)},qe=w=>{Ve(w),pe(!1),O(!0),se(!1)};K.useEffect(()=>{P&&de&&ea()},[P,de]);const ea=async()=>{try{await new Promise(Z=>setTimeout(Z,300));const w=document.getElementById("panchanga-share-card");if(!w)return;const{domToBlob:F}=await Ce(async()=>{const{domToBlob:Z}=await import("./vendor-other-DoP2BRe1.js").then(xe=>xe.G);return{domToBlob:Z}},__vite__mapDeps([0,1])),Q=`Panchanga-${a.getFullYear()}-${a.getMonth()+1}-${a.getDate()}.png`,re=await F(w,{scale:typeof window<"u"&&window.devicePixelRatio>2?1:1.5,backgroundColor:"rgba(0,0,0,0)",filter:Z=>{const xe=Z.tagName?.toLowerCase();return xe!=="script"&&xe!=="link"&&xe!=="iframe"}});if(!re)throw new Error("Failed to generate image blob");if(window.Android?.shareImage&&typeof window.Android.isAndroidApp=="function"&&window.Android.isAndroidApp())try{const Z=new FileReader;Z.readAsDataURL(re),Z.onloadend=()=>{const xe=Z.result;window.Android.shareImage("आजको पञ्चाङ्ग",Q,xe)};return}catch(Z){console.error("Android image bridge failed",Z)}if(navigator.share&&navigator.canShare)try{const Z=new File([re],Q,{type:"image/png"});if(navigator.canShare({files:[Z]})){await navigator.share({files:[Z],title:"आजको पञ्चाङ्ग - NepDate",text:"आजको पञ्चाङ्ग | NepDate नेपाली पात्रो"});return}}catch(Z){console.error("Web Share failed, falling back to download",Z)}const ke=URL.createObjectURL(re),ue=document.createElement("a");ue.href=ke,ue.download=Q,ue.click(),setTimeout(()=>URL.revokeObjectURL(ke),1e3)}catch(w){console.error("Share failed",w),ce.error("Failed to generate image")}finally{O(!1),se(!1),Ve(null)}},we=(()=>{if(!t.sunriseIso||!t.sunsetIso||!t.nextSunriseIso)return{dinamanaGp:null,dinamanaHm:null,ratrimanaGp:null,ratrimanaHm:null};const w=t.sunriseMs??new Date(t.sunriseIso).getTime(),F=t.sunsetMs??new Date(t.sunsetIso).getTime(),Q=t.nextSunriseMs??new Date(t.nextSunriseIso).getTime(),re=Q-w,ke=F-w,ue=Q-F,Z=Le=>{const be=Le/re*60,Ee=Math.floor(be),Be=Math.floor((be-Ee)*60);return r("ghadiUnits").replace("{0}",j(Ee)).replace("{1}",j(Be))},xe=Le=>{const be=Math.floor(Le/6e4),Ee=Math.floor(be/60),Be=be%60;return`${j(Ee)} ${r("hour")} ${j(Be)} ${r("minute")}`};return{dinamanaGp:Z(ke),dinamanaHm:xe(ke),ratrimanaGp:Z(ue),ratrimanaHm:xe(ue)}})(),De=w=>w?w.replace(/\d+/g,F=>j(F)):"",ta=`${v(t.lunarMonth,"lunarMonth")} • ${v(t.paksha,"paksha")} • ${v(t.tithi.name,"tithi")}`;return e.jsxs("div",{className:q,children:[e.jsx("div",{className:L,children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-gray-900 dark:text-white font-devanagari flex items-center gap-2",children:[e.jsx("span",{className:"text-blue-600 dark:text-blue-400",children:v(t.weekday,"weekday")}),e.jsx("span",{className:"text-gray-300 dark:text-gray-600",children:"|"}),(()=>{const w=je(a);return`${j(w.year)} ${v(w.monthName,"month")} ${j(w.day)}`})()]}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium",children:t.gregorianDate})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:M,className:"p-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400",children:k?e.jsx(We,{size:18}):e.jsx(Ua,{size:18})}),i&&!te&&e.jsx("button",{onClick:i,className:"p-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors text-gray-500",children:e.jsx(da,{size:18})})]})]})}),e.jsxs("div",{className:"p-5 space-y-8 pb-20 overflow-x-hidden",children:[e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2.5 px-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest",children:r("riseSetTimings")}),e.jsx("span",{className:"text-[10px] bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded font-bold border border-amber-200/50 dark:border-amber-800/30",children:!s.name||s.name==="Custom Location"?`${j(s.latitude)}°N, ${j(s.longitude)}°E`:`${n==="en"&&s.romanization||s.name}`})]}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[e.jsx(Ke,{label:r("sunrise"),value:Ae(t.sunriseIso,a,s.zoneId,n,j,{truncateToMinute:!0})||"N/A",icon:e.jsx(Ie,{className:"w-5 h-5 text-amber-500"}),className:"bg-orange-50/40 dark:bg-orange-950/20 border-orange-100/50 dark:border-orange-900/30"}),e.jsx(Ke,{label:r("sunset"),value:Ae(t.sunsetIso,a,s.zoneId,n,j,{truncateToMinute:!0})||"N/A",icon:e.jsx(Ie,{className:"w-5 h-5 text-amber-600"}),className:"bg-indigo-50/40 dark:bg-indigo-950/20 border-indigo-100/50 dark:border-indigo-900/30"}),e.jsx(Ke,{label:r("moonrise"),value:t.moonrise?De(t.moonrise):"N/A",icon:e.jsx(ye,{className:"w-5 h-5 text-indigo-400"})}),e.jsx(Ke,{label:r("moonset"),value:t.moonset?De(t.moonset):"N/A",icon:e.jsx(ye,{className:"w-5 h-5 text-blue-400"})})]}),e.jsxs("div",{className:"mt-4 bg-white dark:bg-gray-800/40 rounded-2xl border border-gray-100 dark:border-gray-700/50 overflow-hidden shadow-sm",children:[e.jsxs("div",{className:"px-4 py-3 border-b border-gray-100 dark:border-gray-700/30 flex items-center justify-center gap-3 bg-gray-50/50 dark:bg-gray-900/20 group",children:[e.jsx(ye,{className:"w-4 h-4 text-blue-500 group-hover:animate-pulse"}),e.jsx("span",{className:"text-sm font-bold text-gray-700 dark:text-gray-200 font-devanagari tracking-wide",children:ta})]}),e.jsxs("div",{className:`p-4 grid ${U?"grid-cols-3":"grid-cols-2"} gap-2 sm:gap-6`,children:[U&&e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx(Pe,{className:"w-3.5 h-3.5 text-blue-500 mb-1"}),e.jsx("span",{className:"text-[11px] uppercase tracking-tighter text-gray-500 mb-0.5 whitespace-nowrap",children:r("currentGhati")||"स्वयम् घटी"}),e.jsx("span",{className:"text-sm sm:text-base font-bold font-devanagari leading-none",children:U})]}),e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx(Ie,{className:"w-3.5 h-3.5 text-amber-500 mb-1"}),e.jsx("span",{className:"text-[11px] uppercase tracking-tighter text-gray-600 dark:text-gray-300 mb-0.5 whitespace-nowrap",children:r("dinamana")||"दिनमान"}),e.jsx("span",{className:"text-sm sm:text-base font-bold font-devanagari leading-none",children:we.dinamanaGp}),e.jsxs("span",{className:"text-[11px] text-gray-400 font-medium tracking-tighter leading-none mt-0.5",children:["(",we.dinamanaHm,")"]})]}),e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx(ye,{className:"w-3.5 h-3.5 text-indigo-400 mb-1"}),e.jsx("span",{className:"text-[11px] uppercase tracking-tighter text-gray-600 dark:text-gray-300 mb-0.5 whitespace-nowrap",children:r("ratrimana")||"रात्रिमान"}),e.jsx("span",{className:"text-sm sm:text-base font-bold font-devanagari leading-none",children:we.ratrimanaGp}),e.jsxs("span",{className:"text-[11px] text-gray-400 font-medium tracking-tighter leading-none mt-0.5",children:["(",we.ratrimanaHm,")"]})]})]})]})]}),e.jsxs("section",{children:[e.jsx(wa,{icon:e.jsx(Oa,{}),title:r("eraAndSeason")}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/30 rounded-2xl p-4 border border-gray-100 dark:border-gray-700/50 space-y-1",children:[e.jsxs("div",{className:"px-1 py-1 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between group",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 bg-purple-50 dark:bg-purple-900/30 rounded-xl group-hover:scale-110 transition-transform",children:e.jsx(ye,{size:16,className:"text-purple-600 dark:text-purple-400"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[11px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-black mb-0.5",children:r("nepalSambat")}),e.jsxs("div",{className:"text-base font-bold text-gray-900 dark:text-white font-devanagari leading-none",children:[j(t.nepalSambatYear)," ",t.nepalSambatMonthName," ",j(t.nepalSambatDay)]})]})]}),e.jsx("div",{className:"text-right"})]}),e.jsx("div",{className:"flex items-center justify-between group",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 bg-amber-50 dark:bg-amber-900/30 rounded-xl group-hover:scale-110 transition-transform",children:e.jsx(Ie,{size:16,className:"text-amber-600 dark:text-amber-400"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[11px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-black mb-0.5",children:r("nepalSambatSolar")}),e.jsxs("div",{className:"text-base font-bold text-gray-900 dark:text-white font-devanagari leading-none",children:[j(t.nepalSambatSolar.year)," ",n==="ne"||n==="hi"?t.nepalSambatSolar.monthNameNe:t.nepalSambatSolar.monthNameEn," ",j(t.nepalSambatSolar.day)]})]})]})})]}),e.jsxs("div",{className:"pt-2 border-t border-gray-100 dark:border-gray-700/30",children:[e.jsx(ge,{label:r("shakaYear"),value:j(t.shakaYear),compact:!0}),e.jsx(ge,{label:r("kaliYear"),value:j(t.kaliYear),compact:!0})]})]}),e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/30 rounded-2xl p-4 border border-gray-100 dark:border-gray-700/50 space-y-1",children:[e.jsx(ge,{label:r("samvatsar"),value:t.isSamvatsarTransitioning?e.jsxs("div",{className:"flex flex-col items-end gap-1",children:[e.jsx("span",{className:"text-[11px] text-gray-500 line-through decoration-red-500/40",children:v(t.lunarSamvatsar,"samvatsar")}),e.jsx("span",{className:"text-sm text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/20 px-1.5 py-0.5 rounded leading-none transition-all duration-700 animate-pulse",children:v(t.samvatsar,"samvatsar")})]}):v(t.samvatsar,"samvatsar"),compact:!0}),e.jsx(ge,{label:r("ritu"),value:v(t.ritu,"ritu"),compact:!0}),e.jsx(ge,{label:r("ayana"),value:v(t.ayana,"ayana"),compact:!0}),e.jsx(ge,{label:r("ahargan"),value:j(Math.floor(t.ahargana)),compact:!0})]})]}),t.isSamvatsarTransitioning&&e.jsxs("div",{className:"mt-3 px-4 py-3 bg-blue-50/50 dark:bg-blue-900/10 border-l-4 border-blue-500 rounded-r-2xl shadow-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[e.jsx("div",{className:"p-1 bg-blue-100 dark:bg-blue-800 rounded-full",children:e.jsx(Va,{className:"w-2.5 h-2.5 text-blue-600 dark:text-blue-300"})}),e.jsx("h4",{className:"text-sm font-bold text-blue-900 dark:text-blue-100 font-devanagari",children:r("jovianYearCorrection")})]}),e.jsx("p",{className:"text-xs leading-relaxed text-blue-800/80 dark:text-blue-200/80 font-medium",children:r("jovianYearCorrectionDesc")})]})]}),e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-3 px-1",children:[e.jsxs("div",{className:"flex items-center gap-2 pb-1 border-b border-gray-200 dark:border-gray-700/50 flex-1",children:[e.jsx("div",{className:"p-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg shadow-sm",children:e.jsx(Ya,{className:"w-3.5 h-3.5 text-blue-600 dark:text-blue-400"})}),e.jsx("h3",{className:"text-sm font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 font-devanagari",children:r("panchanga")})]}),e.jsxs("div",{className:"flex items-center gap-2 ml-4",children:[e.jsxs("button",{onClick:()=>{i?.(),p?.("timeline")},className:"text-[11px] text-blue-600 dark:text-blue-400 font-bold hover:underline flex items-center gap-1 bg-blue-50 dark:bg-blue-800/10 px-2 py-1 rounded border border-blue-100/50 dark:border-blue-800/10",children:[e.jsx(Pe,{size:10}),e.jsx("span",{children:r("timeline")})]}),e.jsxs("button",{onClick:()=>{i?.(),p?.("daily-saait")},className:"text-[11px] text-orange-600 dark:text-orange-400 font-bold hover:underline flex items-center gap-1 bg-orange-50 dark:bg-orange-800/10 px-2 py-1 rounded border border-orange-100/50 dark:border-orange-800/10",children:[e.jsx(Pe,{size:10}),e.jsx("span",{children:r("shubha_ashubha_saait")})]})]})]}),e.jsx("div",{className:"px-4 mb-3",children:e.jsxs("div",{className:"flex items-start gap-2 p-2 bg-amber-50/50 dark:bg-amber-900/10 border border-amber-100/50 dark:border-amber-800/20 rounded-xl",children:[e.jsx(sa,{className:"w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5"}),e.jsx("p",{className:"text-xs leading-tight text-amber-700 dark:text-amber-300 font-medium font-devanagari",children:r("tithiWarning")})]})}),e.jsxs("div",{className:"bg-white dark:bg-gray-800/40 rounded-2xl border border-gray-100 dark:border-gray-700/50 overflow-hidden shadow-sm",children:[e.jsx(ge,{label:r("tithi"),value:v(t.tithi.name,"tithi")}),e.jsx(Te,{elements:_,baseDate:a,timezoneId:s.zoneId,offset:s.offset,astroType:"tithi",sunriseIso:t.sunriseIso,nextSunriseIso:t.nextSunriseIso}),e.jsx(ge,{label:r("nakshatra"),value:v(t.nakshatra.name,"nakshatra")}),e.jsx(Te,{elements:R,baseDate:a,timezoneId:s.zoneId,offset:s.offset,astroType:"nakshatra",sunriseIso:t.sunriseIso,nextSunriseIso:t.nextSunriseIso}),e.jsx(ge,{label:r("yoga"),value:v(t.yoga.name,"yoga")}),e.jsx(Te,{elements:N,baseDate:a,timezoneId:s.zoneId,offset:s.offset,astroType:"yoga",sunriseIso:t.sunriseIso,nextSunriseIso:t.nextSunriseIso}),e.jsx(ge,{label:r("karana"),value:v(t.karana.name,"karana")}),e.jsx(Te,{elements:C,baseDate:a,timezoneId:s.zoneId,offset:s.offset,astroType:"karana",sunriseIso:t.sunriseIso,nextSunriseIso:t.nextSunriseIso}),e.jsxs("div",{className:"grid grid-cols-2 bg-gray-50/50 dark:bg-gray-900/40 border-t border-gray-100 dark:border-gray-700/50 divide-x divide-gray-100 dark:divide-gray-700/50",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"px-4 py-2 text-[11px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700/30 bg-gray-100/30 dark:bg-gray-800/20",children:r("sunTransit")}),e.jsx(Te,{elements:Y,baseDate:a,timezoneId:s.zoneId,offset:s.offset,astroType:"rashi",sunriseIso:t.sunriseIso,nextSunriseIso:t.nextSunriseIso})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"px-4 py-2 text-[11px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700/30 bg-gray-100/30 dark:bg-gray-800/20",children:r("moonTransit")}),e.jsx(Te,{elements:W,baseDate:a,timezoneId:s.zoneId,offset:s.offset,astroType:"rashi",sunriseIso:t.sunriseIso,nextSunriseIso:t.nextSunriseIso})]})]}),t.anandadiYoga&&e.jsxs("div",{className:"bg-blue-50/30 dark:bg-blue-900/10 p-3.5 border-t border-gray-100 dark:border-gray-700/50",children:[e.jsxs("div",{className:"text-[13px] text-gray-500 uppercase tracking-widest mb-1 flex items-center gap-1.5",children:[e.jsx(ma,{className:"w-3 h-3 text-blue-500"})," ",r("anandadiYoga")]}),e.jsx("div",{className:"text-base font-bold font-devanagari",children:n==="en"?t.anandadiYoga.nameEn:t.anandadiYoga.nameNe})]})]}),t.anandadiSequence&&t.anandadiSequence.length>0&&e.jsx(Ct,{sequence:t.anandadiSequence,baseDate:a,timezoneId:s.zoneId,offset:s.offset,sunriseIso:t.sunriseIso,nextSunriseIso:t.nextSunriseIso})]}),S&&e.jsxs("section",{children:[e.jsx(wa,{icon:e.jsx(ca,{}),title:r("sunriseKundali")}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-start",children:[e.jsx("div",{className:"flex justify-center bg-white dark:bg-gray-800/40 rounded-3xl p-6 border border-gray-100 dark:border-gray-700 shadow-inner",children:e.jsx(ct,{planets:S.planets,ascendantSign:S.ascendant.sign,ascendantDegrees:S.ascendant.degreesInSign,ascendantNakshatra:S.ascendant.nakshatra,ascendantNakshatraPada:S.ascendant.nakshatraPada,chartType:"lagna",chartStyle:"north",lang:n})}),e.jsx("div",{className:"overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700/50 shadow-sm bg-white dark:bg-gray-800/20",children:e.jsxs("table",{className:"w-full text-left border-collapse text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700",children:[e.jsx("th",{className:"py-3 px-4 text-gray-600 dark:text-gray-300 font-bold uppercase tracking-wider",children:r("planet")}),e.jsx("th",{className:"py-3 px-4 text-gray-600 dark:text-gray-300 font-bold uppercase tracking-wider",children:r("rashi")}),e.jsx("th",{className:"py-3 px-4 text-gray-600 dark:text-gray-300 font-bold uppercase tracking-wider text-right",children:r("degree")})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-100 dark:divide-gray-700/30",children:[e.jsxs("tr",{className:"bg-blue-50/30 dark:bg-blue-900/10 font-bold",children:[e.jsx("td",{className:"py-3 px-4 text-blue-600 dark:text-blue-400",children:v("Lagna","planet")}),e.jsx("td",{className:"py-3 px-4",children:v(ga[S.ascendant.sign],"rashi")}),e.jsx("td",{className:"py-3 px-4 text-right font-mono opacity-80",children:m(S.ascendant.degreesInSign)})]}),S.planets.map(w=>e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors",children:[e.jsxs("td",{className:"py-2.5 px-4 font-medium flex items-center gap-2",children:[v(w.planet,"planet"),w.retrograde&&e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_5px_rgba(244,63,94,0.5)]",title:"Retrograde"})]}),e.jsx("td",{className:"py-2.5 px-4",children:v(ga[w.rashi],"rashi")}),e.jsx("td",{className:"py-2.5 px-4 text-right font-mono opacity-80",children:m(w.degreesInSign)})]},w.planet))]})]})})]})]}),e.jsxs("section",{className:"space-y-4",children:[z&&z.isActiveCivil&&e.jsxs("div",{className:`p-4 rounded-2xl border flex items-start gap-4 ${z.isHarmful?"bg-rose-50 dark:bg-rose-950/20 border-rose-200/50 text-rose-900 dark:text-rose-100":"bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200/50 text-emerald-900 dark:text-emerald-100"}`,children:[e.jsx(sa,{className:"w-5 h-5 shrink-0 mt-0.5 opacity-80"}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("h4",{className:"font-bold text-base font-devanagari",children:[r("bhadraVisti")," ",r("active")]}),e.jsx("span",{className:`text-[11px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest ${z.isHarmful?"bg-rose-100 dark:bg-rose-900/50":"bg-emerald-100 dark:bg-emerald-900/50"}`,children:r(z.status)})]}),e.jsx(Te,{elements:J,baseDate:a,timezoneId:s.zoneId,offset:s.offset,sunriseIso:t.sunriseIso,nextSunriseIso:t.nextSunriseIso}),e.jsxs("p",{className:"text-sm mt-2 font-medium",children:[r("bhadraResidenceLabel"),": ",e.jsx("span",{className:"ml-1 font-bold",children:r(z.residence)})]})]})]}),t.events&&t.events.length>0&&e.jsxs("div",{className:"bg-emerald-50/40 dark:bg-emerald-950/20 rounded-2xl p-5 border border-emerald-100/50 dark:border-emerald-900/30",children:[e.jsxs("h3",{className:"text-sm font-black mb-4 text-emerald-800 dark:text-emerald-300 font-devanagari flex items-center gap-2 uppercase tracking-widest",children:[e.jsx(ma,{className:"w-4 h-4"})," ",r("todayEvents")]}),e.jsx("div",{className:"space-y-4",children:t.events.map((w,F)=>e.jsxs("div",{className:"flex items-start gap-3 group",children:[e.jsx("div",{className:"mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 group-hover:scale-150 transition-transform"}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("strong",{className:"text-base text-gray-900 dark:text-white font-bold font-devanagari",children:w.name}),w.holiday&&e.jsx("span",{className:"bg-rose-50 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 text-[11px] font-black px-1.5 py-0.5 rounded uppercase",children:r("holiday")})]}),w.detail&&e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed",children:w.detail})]})]},F))})]}),e.jsxs("div",{className:"p-5 bg-white dark:bg-gray-800/40 rounded-2xl border border-gray-100 dark:border-gray-700/50 text-sm text-gray-600 dark:text-gray-300 space-y-3 shadow-inner",children:[e.jsxs("div",{className:"flex justify-between items-center px-1",children:[e.jsx("span",{children:r("usedEngine")}),e.jsx("span",{className:"font-bold text-gray-800 dark:text-gray-200",children:t.engine==="surya_siddhanta"?r("traditionalEngine"):t.engine==="analytical"?r("analyticalEngine"):r("modernEngine")})]}),e.jsxs("div",{className:"flex justify-between items-center px-1",children:[e.jsx("span",{children:r("ayanamsaMethod")}),e.jsx("span",{className:"font-bold text-gray-800 dark:text-gray-200",children:r(t.ayanamsaMethod)})]}),t.ayanamsaValue!==void 0&&t.ayanamsaValue!==0&&e.jsxs("div",{className:"flex justify-between items-center px-1 text-xs opacity-80 italic",children:[e.jsx("span",{children:r("liveAyanamsa")}),e.jsxs("span",{className:"font-mono",children:[t.ayanamsaValue.toFixed(6),"°"]})]}),e.jsx("div",{className:"pt-3 border-t border-gray-100 dark:border-gray-700/50",children:e.jsx("p",{className:"leading-relaxed text-xs opacity-75 italic text-center px-2",children:r("nepalPanchangaInfo")})}),t.engine==="surya_siddhanta"&&e.jsxs("div",{className:"mt-3 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200/50 dark:border-amber-800/50 rounded-xl flex gap-3 shadow-sm",children:[e.jsx(sa,{className:"w-5 h-5 text-amber-500 shrink-0 mt-0.5"}),e.jsx("p",{className:"text-xs leading-relaxed text-amber-800 dark:text-amber-200 font-medium italic",children:r("surya_siddhanta_warning")})]})]}),e.jsxs("button",{onClick:Je,disabled:P||ie,className:"w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors",children:[P||ie?e.jsx(Ge,{className:"w-5 h-5 animate-spin"}):e.jsx(We,{className:"w-5 h-5"}),e.jsx("span",{children:"पञ्चाङ्ग सेयर गर्नुहोस् (Share Panchanga)"})]})]})]}),P&&(H==="detailed"?e.jsx(ya,{data:t,date:a,variant:Oe||1,isOffscreen:!0,onLoad:()=>se(!0)}):e.jsx(va,{data:t,date:a,variant:Oe||1,isOffscreen:!0,onLoad:()=>se(!0)})),ie&&Ha.createPortal(e.jsx("div",{className:"fixed inset-0 bg-black/60 z-[100] flex flex-col items-center backdrop-blur-sm p-4 sm:p-6 overflow-y-auto",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-2xl shadow-xl w-full max-w-xl flex flex-col items-center m-auto border border-gray-100 dark:border-gray-700",children:[e.jsx("span",{className:"text-lg font-bold text-gray-800 dark:text-white mb-4 text-center",children:"Select Theme"}),e.jsxs("div",{className:"flex flex-row w-full gap-3 mb-6",children:[e.jsx("button",{onClick:()=>ne("social"),className:`flex-1 py-2 rounded-xl border-2 transition-all font-bold ${H==="social"?"border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300":"border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800"}`,children:"Social / Simple"}),e.jsx("button",{onClick:()=>ne("detailed"),className:`flex-1 py-2 rounded-xl border-2 transition-all font-bold ${H==="detailed"?"border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300":"border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800"}`,children:"Detailed"})]}),e.jsx("div",{className:"relative mb-4 sm:mb-6 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-gray-100 w-[300px] h-[350px] sm:w-[350px] sm:h-[400px] md:w-[400px] md:h-[450px]",children:e.jsx("div",{className:"origin-top-left w-[1000px] scale-[0.30] sm:scale-[0.35] md:scale-[0.40]",children:H==="detailed"?e.jsx(ya,{data:t,date:a,variant:ve||1}):e.jsx(va,{data:t,date:a,variant:ve||1})})}),e.jsx("div",{className:"flex flex-col justify-center gap-4 mb-6 w-full",children:e.jsx("div",{className:"flex flex-row flex-wrap justify-center gap-2 w-full",children:[1,2,3,4,5].map(w=>{const F={1:"linear-gradient(135deg, #1565c0, #1a237e)",2:"linear-gradient(135deg, #7b1fa2, #4a148c)",3:"linear-gradient(135deg, #e65100, #bf360c)",4:"linear-gradient(135deg, #00838f, #004d40)",5:"linear-gradient(135deg, #c2185b, #b71c1c)"};return e.jsx("button",{onClick:()=>Ue(w),className:`w-10 h-10 rounded-full shadow-md hover:scale-110 active:scale-95 transition-transform ${ve===w?"ring-4 ring-offset-2 ring-gray-400 dark:ring-gray-500":""}`,style:{background:F[w]}},w)})})}),e.jsxs("div",{className:"flex flex-row w-full gap-3",children:[e.jsx("button",{onClick:()=>{pe(!1),Ue(null)},className:"flex-1 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl flex flex-row items-center justify-center active:opacity-80 transition-colors",children:e.jsx("span",{className:"text-gray-700 dark:text-gray-300 font-medium",children:"Cancel"})}),e.jsx("button",{onClick:()=>qe(ve),className:"flex-1 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl flex flex-row items-center justify-center active:opacity-80 transition-colors shadow-md",children:e.jsx("span",{className:"text-white font-medium",children:"Download"})})]})]})}),document.body)]})},Dt=({date:a,isOpen:i,onClose:c,activeSystem:u="bs",onTimelineClick:f,onNavigate:p})=>{if(!i||!a)return null;const s=d=>{d.target===d.currentTarget&&c()};return e.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",onClick:s,children:e.jsx("div",{className:"max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl relative no-scrollbar",children:e.jsx(Mt,{date:a,onClose:c,activeSystem:u,onTimelineClick:f,onNavigate:p})})})};function ka(a){if(!a)return null;const i=typeof a=="string"?parseInt(a,10):a;if(!i||isNaN(i)||i<1e12)return null;try{return new Date(i).toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return null}}const Et=({isOpen:a,onConfirm:i,onCancel:c,currentBuildId:u,newBuildId:f})=>{const{t:p}=me();if(!a)return null;const s=ka(u),d=ka(f);return e.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4 backdrop-blur-sm animate-in fade-in duration-200",children:e.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full border border-gray-200 dark:border-gray-700 transform transition-all scale-100 p-6",children:[e.jsxs("div",{className:"flex justify-between items-start mb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl",children:e.jsx(Fe,{className:"w-6 h-6 text-blue-600 dark:text-blue-400"})}),e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white font-[Outfit]",children:p("updateAvailable")})]}),e.jsx("button",{onClick:c,className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",children:e.jsx(da,{className:"w-5 h-5 text-gray-500"})})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed",children:p("updateMessage")}),(s||d)&&e.jsxs("div",{className:"mt-3 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 space-y-1 border border-gray-100 dark:border-gray-700/50 font-mono",children:[s&&e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-400 dark:text-gray-500",children:"Current:"}),e.jsx("span",{children:s})]}),d&&e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"New:"}),e.jsx("span",{className:"text-green-600 dark:text-green-400 font-medium",children:d})]})]}),e.jsxs("div",{className:"mt-3 flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-900/50",children:[e.jsx(Ka,{className:"w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0"}),e.jsx("p",{className:"text-xs text-amber-700 dark:text-amber-300",children:p("updateWarning")})]})]}),e.jsxs("div",{className:"flex gap-3 justify-end",children:[e.jsx("button",{onClick:c,className:"px-5 py-2.5 rounded-xl text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",children:p("notNow")}),e.jsxs("button",{onClick:i,className:"px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg shadow-blue-500/25 transition-all active:scale-95 flex items-center gap-2",children:[e.jsx(Fe,{className:"w-4 h-4"}),p("updateNow")]})]})]})})},At=()=>{const{updateLanguage:a,completeSetup:i,updateLocation:c,setCalendarSystem:u,updateNumberFormat:f}=Me(),{t:p}=me(),[s,d]=l.useState(1),[h,o]=l.useState(null),b=r=>{o(r),setTimeout(()=>{a(r,!0),u(r==="en"||r==="hi"?"ad":"bs"),f("auto"),d(2),o(null)},50)},g=r=>{c(r),i()};return s===2?e.jsxs("div",{className:"fixed inset-0 z-[100000] bg-slate-100 dark:bg-gray-900 overflow-hidden flex flex-col items-center justify-center",children:[e.jsx("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80",children:e.jsx("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"})}),e.jsxs("div",{className:"text-center mb-8 px-4 animate-fade-in-up",children:[e.jsx(Ta,{className:"w-16 h-16 text-blue-500 mx-auto mb-4"}),e.jsx("h1",{className:"text-3xl font-extrabold text-gray-900 dark:text-white mb-2 font-rhodium",children:p("locationAndTimezone")}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300 max-w-sm mx-auto",children:p("searchOrSelectLocation")})]}),e.jsx("div",{className:"w-full max-w-4xl px-4 flex-1 max-h-[70vh] relative",children:e.jsx(ht,{onClose:()=>{},onSelect:g})})]}):e.jsxs("div",{className:"fixed inset-0 z-[100000] bg-slate-100 dark:bg-gray-900 flex flex-col p-6 animate-fade-in-up",children:[e.jsx("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80",children:e.jsx("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"})}),e.jsx("div",{className:"flex-1 flex flex-col items-center justify-center max-w-md mx-auto w-full",children:e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 p-6 rounded-[2rem] shadow-2xl backdrop-blur-md w-full border border-white/20 dark:border-gray-700/30",children:[e.jsx("div",{className:"flex justify-center mb-6",children:e.jsx("div",{className:"bg-blue-100 dark:bg-blue-900/50 p-4 rounded-full text-blue-600 dark:text-blue-400",children:e.jsx(Ga,{className:"w-10 h-10"})})}),e.jsx("h1",{className:"text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-2 font-rhodium",children:"Welcome / स्वागतम्"}),e.jsx("p",{className:"text-center text-gray-600 dark:text-gray-300 mb-8 font-medium",children:"Please choose your preferred language to continue."}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("button",{onClick:()=>b("ne"),disabled:h!==null,className:`w-full flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-2xl border-2 transition-all font-bold group ${h==="ne"?"border-blue-500 shadow-xl shadow-blue-500/10":"border-transparent hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"} ${h!==null&&h!=="ne"?"opacity-50":""}`,children:[e.jsx("span",{className:"text-xl text-gray-800 dark:text-gray-100 font-rhodium",children:"नेपाली (Nepali)"}),h==="ne"?e.jsx(Ge,{className:"w-6 h-6 text-blue-500 animate-spin"}):e.jsx(ra,{className:"w-6 h-6 text-gray-300 dark:text-gray-500 group-hover:text-blue-500 transition-colors"})]}),e.jsxs("button",{onClick:()=>b("hi"),disabled:h!==null,className:`w-full flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-2xl border-2 transition-all font-bold group ${h==="hi"?"border-blue-500 shadow-xl shadow-blue-500/10":"border-transparent hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"} ${h!==null&&h!=="hi"?"opacity-50":""}`,children:[e.jsx("span",{className:"text-xl text-gray-800 dark:text-gray-100 font-rhodium",children:"हिन्दी (Hindi)"}),h==="hi"?e.jsx(Ge,{className:"w-6 h-6 text-blue-500 animate-spin"}):e.jsx(ra,{className:"w-6 h-6 text-gray-300 dark:text-gray-500 group-hover:text-blue-500 transition-colors"})]}),e.jsxs("button",{onClick:()=>b("en"),disabled:h!==null,className:`w-full flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-2xl border-2 transition-all font-bold group ${h==="en"?"border-blue-500 shadow-xl shadow-blue-500/10":"border-transparent hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"} ${h!==null&&h!=="en"?"opacity-50":""}`,children:[e.jsx("span",{className:"text-xl text-gray-800 dark:text-gray-100 font-rhodium",children:"English"}),h==="en"?e.jsx(Ge,{className:"w-6 h-6 text-blue-500 animate-spin"}):e.jsx(ra,{className:"w-6 h-6 text-gray-300 dark:text-gray-500 group-hover:text-blue-500 transition-colors"})]})]})]})})]})},Lt=()=>{const[a,i]=l.useState(()=>typeof window>"u"?"tabs":localStorage.getItem("menuStyle")||"tabs"),[c,u]=l.useState(()=>typeof window>"u"?"topbar":localStorage.getItem("desktopLayoutStyle")||"topbar");return{menuStyle:a,desktopLayoutStyle:c,handleSetMenuStyle:d=>{i(d),localStorage.setItem("menuStyle",d)},handleSetDesktopLayoutStyle:d=>{u(d),localStorage.setItem("desktopLayoutStyle",d)},resetLayoutSettings:()=>{localStorage.removeItem("menuStyle"),localStorage.removeItem("desktopLayoutStyle"),i("tabs"),u("topbar")}}},Bt=()=>{const[a,i]=l.useState(!1),[c,u]=l.useState(!1),[f,p]=l.useState(()=>localStorage.getItem("pwa_installed")==="true"),[s,d]=l.useState(null);return l.useEffect(()=>{const o=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone;if(i(!!o),o){p(!0);return}const b=()=>{localStorage.setItem("pwa_installed","true"),p(!0),u(!1)};window.addEventListener("appinstalled",b),"getInstalledRelatedApps"in navigator&&navigator.getInstalledRelatedApps().then(r=>{r.length>0&&(localStorage.getItem("pwa_installed")!=="true"&&localStorage.setItem("pwa_installed","true"),p(!0))});const g=r=>{r.preventDefault(),localStorage.removeItem("pwa_installed"),p(!1),d(r),u(!0)};return window.addEventListener("beforeinstallprompt",g),()=>{window.removeEventListener("appinstalled",b),window.removeEventListener("beforeinstallprompt",g)}},[]),{isStandalone:a,canInstall:c,isInstalled:f,deferredPrompt:s,handleInstallClick:async()=>{s&&(s.prompt(),await s.userChoice,d(null),u(!1))}}},zt=()=>{const{location:a,isStashLoaded:i,language:c,useElevation:u,ayanamsaMethod:f,engineType:p,setCalendarSystem:s,calendarSystem:d,isTopocentric:h}=Me(),[o,b]=l.useState(()=>ze(a.zoneId)),g=l.useMemo(()=>je(o),[o]),[r,v]=l.useState(null),[j,n]=l.useState(!1);l.useEffect(()=>{b(ze(a.zoneId))},[a.zoneId]),l.useEffect(()=>{const x=a.latitude,m=a.longitude,S=a.offset,y=u?a.elevation:0;try{const k=new Date(o);k.setUTCHours(0,0,0,0);const T=Ma(k,x,m,S,c,a.zoneId,i,y,f,p,h);"error"in T?ce(`Error from calculate:'${T.error}`,"error",2e3):v(T)}catch(k){ce(`Error calculating today details:${k}`,"error",2e3)}},[o,a.latitude,a.longitude,a.offset,c,i,u,a.elevation,f,p,h]);const[I,t]=l.useState(d);l.useEffect(()=>{t(d)},[d]);const[A,V]=l.useState(g.year),[B,_]=l.useState(g.monthIndex),[R,N]=l.useState(o.getUTCFullYear()),[C,Y]=l.useState(o.getUTCMonth()),W=l.useMemo(()=>I==="bs"?A:R,[I,A,R]),J=l.useMemo(()=>I==="bs"?B:C,[I,B,C]);l.useEffect(()=>{const x=()=>{const T=ua(new Date,a.zoneId),M=ua(o,a.zoneId);if(T.day!==M.day||T.month!==M.month||T.year!==M.year){console.log("Midnight detected, updating today..."),b(T.date);const O=A===g.year&&B===g.monthIndex,H=R===o.getUTCFullYear()&&C===o.getUTCMonth();if(O||H){const ne=je(T.date);V(ne.year),_(ne.monthIndex),N(T.year),Y(T.month)}}},m=ze(a.zoneId),y=m.getUTCHours()===23&&m.getUTCMinutes()===59?1e3:6e4,k=setInterval(x,y);return()=>clearInterval(k)},[o,g,a.zoneId,A,B,R,C]),l.useEffect(()=>{try{if(W===null)return;const m=(I==="bs"?pa(W,J,15):qa(W,J,15)).getTime()/864e5+24405875e-1;Ea.preloadForJd(m)}catch(x){console.error("Failed to preload stash chunk for current view:",x)}},[W,J,I]);const z=l.useCallback(x=>{n(!0),l.startTransition(()=>V(x))},[]),te=l.useCallback(x=>{n(!0),l.startTransition(()=>N(x))},[]),q=l.useCallback(x=>{n(!0),l.startTransition(()=>_(x))},[]),L=l.useCallback(x=>{n(!0),l.startTransition(()=>Y(x))},[]),D=l.useCallback(()=>{const x=ze(a.zoneId),m=je(x);if(A===m.year&&B===m.monthIndex&&R===x.getUTCFullYear()&&C===x.getUTCMonth()){b(x);return}n(!0),l.startTransition(()=>{b(x),V(m.year),_(m.monthIndex),N(x.getUTCFullYear()),Y(x.getUTCMonth())})},[a.zoneId,A,B,R,C]),le=l.useCallback(x=>{if(x===I)return;const m=R===o.getUTCFullYear()&&C===o.getUTCMonth(),S=A===g.year&&B===g.monthIndex;if(x==="bs"&&m||x==="ad"&&S)D();else if(x==="bs"){const y=R??o.getUTCFullYear(),T=et(y,C,12),M=at(T),P=je(M);P.year===0||!P.year?D():(V(P.year),_(P.monthIndex))}else if(A===null)D();else{const y=pa(A,B,18);N(y.getUTCFullYear()),Y(y.getUTCMonth())}t(x),s(x)},[I,R,C,A,B,o,g,D,s]),oe=l.useCallback(x=>{n(!0),l.startTransition(()=>{if(I==="bs"){const m=x==="prev"?B-1:B+1;m<0?(_(11),V(S=>{const y=S??g.year;return y===1?-1:y-1})):m>11?(_(0),V(S=>{const y=S??g.year;return y===-1?1:y+1})):_(m)}else{const m=x==="prev"?C-1:C+1;m<0?(Y(11),N(S=>{const y=S??o.getUTCFullYear();return y===1?-1:y-1})):m>11?(Y(0),N(S=>{const y=S??o.getUTCFullYear();return y===-1?1:y+1})):Y(m)}})},[I,B,C,o,g]),G=l.useCallback(x=>{n(!0),l.startTransition(()=>{I==="bs"?V(m=>(m??g.year)+(x==="next"?1:-1)):N(m=>(m??o.getUTCFullYear())+(x==="next"?1:-1))})},[I,o,g]);l.useEffect(()=>{const x=setTimeout(()=>n(!1),50);return()=>clearTimeout(x)},[A,B,R,C,I]);const U=l.useRef(c);return l.useEffect(()=>{U.current!==c&&(c==="en"||c==="hi"?le("ad"):c==="ne"&&le("bs"),U.current=c)},[c,le]),{activeSystem:I,currentBsYear:A,currentBsMonth:B,currentAdYear:R,currentAdMonth:C,currentYear:W,currentMonth:J,switchSystem:le,goToToday:D,changeMonth:oe,changeYear:G,setCurrentBsYear:z,setCurrentBsMonth:q,setCurrentAdYear:te,setCurrentAdMonth:L,initialToday:o,initialTodayBs:g,todayDetails:r,isNavigating:j}},Pt=Re.map(a=>a.key),Ft=()=>{const a=l.useCallback(()=>{if(typeof window>"u")return{view:"calendar",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:null};const x=window.location.hash.replace("#","").trim(),m=window.location.pathname.trim(),S=new URLSearchParams(window.location.search);if(window.location.pathname.includes("/bs")||window.location.pathname.includes("/ad")||S.has("bs")||S.has("ad")||S.has("today"))return{view:"day-detail",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:null};const y=S.get("activeView"),k=[...x.split("/").filter(Boolean),...m.split("/").filter(Boolean)],T=y||k.find(pe=>Pt.includes(pe)||["blog-detail","day-detail","post"].includes(pe));if(!T)return{view:"calendar",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:null};const M=k.join("/");if(M.includes("bs?")||M.includes("ad?"))return{view:"day-detail",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:null};const P=k.indexOf("post");if(P!==-1&&k.length>=P+3)return{view:"blog-detail",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:{source:k[P+1],slug:decodeURIComponent(k.slice(P+2).join("/"))}};const O=T,H=k.indexOf(T),ne=k[H+1];let de=null,se=!1,ie=!1;return O==="dharma"&&ne?(se=!0,ne!=="section"&&(de={subSection:ne})):O==="kundali"&&ne==="result"&&(ie=!0),{view:O||"calendar",params:de,isKundaliVisible:ie,isDharmaVisible:se,post:null}},[]),i=a(),[c,u]=l.useState(i.post),[f,p]=l.useState(i.view),[s,d]=l.useState(i.params),[h,o]=l.useState(i.isKundaliVisible),[b,g]=l.useState(i.isDharmaVisible),r=l.useRef("calendar"),[v,j]=l.useState(null),[n,I]=l.useState(!1),[t,A]=l.useState(!1),[V,B]=l.useState(!1),_=l.useRef(null),R=l.useRef(null),N=l.useRef(null),[C,Y]=l.useState(!1),W=l.useRef(null),J=l.useRef(0),[z,te]=l.useState(!1);l.useEffect(()=>{let x=null,m=0;const S=25,y=()=>{m++,typeof window.Android<"u"?(te(!0),x&&clearInterval(x)):m>=S&&x&&clearInterval(x)};return y(),z||(x=window.setInterval(y,2e3)),()=>{x&&clearInterval(x)}},[]),l.useEffect(()=>{const x=a();f==="blog-detail"&&x.post&&u(x.post)},[f,a]),l.useEffect(()=>{if(z)return;let x="";if(f!=="calendar"){if(f==="day-detail")return;if(f==="blog-detail"&&c)x=`post/${c.source}/${c.slug}`;else if(x=f,f==="kundali"&&h)x+="/result";else if(f==="dharma"&&b){const T=s?.subSection?.toLowerCase();x+=T?`/${T}`:"/section"}}const m=window.location.hash.replace("#",""),S=window.location.pathname.includes("/bs")||window.location.pathname.includes("/ad"),y=S&&f!=="day-detail",k=window.location.pathname!=="/"&&window.location.pathname!=="/index.html"&&!S;if(m!==x||y||k){let T=x?`#${x}`:window.location.pathname;y||k?T=`/${x?"#"+x:""}`:f==="calendar"&&(T=window.location.pathname);const M=r.current!==f,P=f==="blog-detail",O=r.current!=="calendar"&&f!=="calendar"&&!P,H=m===""||x.startsWith(m)&&x!==m;k?window.history.replaceState({view:f},"",T):M&&O?window.history.replaceState({view:f},"",T):!M&&!H?window.history.replaceState({view:f},"",T):window.history.pushState({view:f},"",T)}r.current=f},[f,h,b,z,c,s]);const q=l.useRef(!1);l.useEffect(()=>{if(z)return;const x=t||V||n;if(x&&!q.current){const m=window.history.state||{};m.isPopupOpen||window.history.pushState({...m,isPopupOpen:!0},"",window.location.href)}else!x&&q.current&&(window.history.state||{}).isPopupOpen&&window.history.back();q.current=x},[t,V,n,z]),l.useEffect(()=>{const x=m=>{t&&m.key==="Backspace"&&(m.preventDefault(),A(!1))};return t&&window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[t]);const L=l.useCallback(()=>n?(I(!1),!0):t?(A(!1),!0):N.current?(N.current(),!0):f==="kundali"&&h&&_.current?(_.current(),!0):f==="dharma"&&b&&R.current?(R.current(),!0):z&&f==="blog-detail"&&c?.source?(p(c.source),u(null),!0):f!=="calendar"?(p("calendar"),!0):!1,[n,t,f,h,b,z,c]),D=l.useRef(L);l.useEffect(()=>{D.current=L},[L]),l.useEffect(()=>{const x=()=>{J.current=0,Y(!1),W.current&&(clearTimeout(W.current),W.current=null)},m=()=>D.current()?(x(),!0):(J.current+=1,J.current===1?(Y(!0),navigator.vibrate&&navigator.vibrate(50),W.current=window.setTimeout(x,2e3),!0):(typeof window.Android?.exitApp=="function"?window.Android.exitApp():window.navigator?.app?.exitApp&&window.navigator.app.exitApp(),!1)),S=k=>{k.preventDefault(),m()};z&&(window.handleBackPress=m),document.addEventListener("backbutton",S);const y=()=>{const k=a();p(k.view),d(k.params),g(k.isDharmaVisible),o(k.isKundaliVisible),u(k.post||null),I(!1),A(!1),B(!1),N.current&&(N.current(),N.current=null)};return window.addEventListener("popstate",y),()=>{x(),window.removeEventListener("popstate",y),document.removeEventListener("backbutton",S)}},[z,f,a]);const le=x=>{l.startTransition(()=>{j(x),I(!0)})},oe=l.useCallback(x=>{_.current=x},[]),G=l.useCallback(x=>{R.current=x},[]),U=l.useCallback(x=>{N.current=x,B(!!x)},[]);return{activeView:f,setActiveView:p,selectedDate:v,setSelectedDate:j,isModalOpen:n,setIsModalOpen:I,isMenuOpen:t,setIsMenuOpen:A,isKundaliResultsVisible:h,setIsKundaliResultsVisible:o,setKundaliBackAction:oe,isDharmaResultsVisible:b,setIsDharmaResultsVisible:g,setDharmaBackAction:G,setPopupBackAction:U,viewParams:s,setViewParams:d,showExitToast:C,handleDayClick:le,isAndroidWebView:z,postParams:c,setPostParams:u}},Wt=(a,i)=>{const[c,u]=l.useState(!1),[f,p]=l.useState(null),[s,d]=l.useState(null);return l.useEffect(()=>{typeof window<"u"&&window.Android&&(typeof window.Android.isAndroidApp=="function"?u(window.Android.isAndroidApp()):u(!0))},[]),{isAndroidApp:c,handleTouchStart:g=>{p(g.touches[0].clientX),d(null)},handleTouchMove:g=>d(g.touches[0].clientX),handleTouchEnd:()=>{if(!f||!s)return;const g=s-f;g>60&&f<50?i(!0):g<-60&&a&&i(!1),p(null),d(null)}}},Rt=({blog:a,onBack:i,onNavigate:c})=>{const{t:u,n:f,language:p}=me(),s=l.useRef(null),d=l.useRef(null);l.useEffect(()=>{d.current&&d.current.scrollTo(0,0)},[a]);const[h,o]=K.useState([]);l.useEffect(()=>{(async()=>{try{const j=(await Pa(p)).filter(n=>n.id!==a.id).map(n=>{let I=0;return a.tags&&n.tags&&(I=a.tags.filter(A=>n.tags.includes(A)).length),{blog:n,score:I}});j.sort((n,I)=>I.score!==n.score?I.score-n.score:.5-Math.random()),o(j.slice(0,3).map(n=>n.blog))}catch(r){console.error("Failed to load related posts:",r)}})()},[a,p]);const b=async()=>{const g=window.location.href,r=decodeURI(g),v={title:a.title,text:"",url:Da(r)};if(window.Android&&typeof window.Android.share=="function"){window.Android.share(v.title,"Check out this article",v.url);return}if(navigator.share)try{await navigator.share(v);return}catch(n){if(n instanceof Error&&n.name==="AbortError")return;console.warn("Share API failed, trying clipboard...",n)}const j=v.url;try{if(navigator.clipboard&&navigator.clipboard.writeText){await navigator.clipboard.writeText(j),ce.success("Url copied to clipboard!");return}}catch(n){console.warn("Clipboard API failed, trying legacy...",n)}try{const n=document.createElement("textarea");n.value=j,n.style.position="fixed",n.style.left="-9999px",n.style.top="0",document.body.appendChild(n),n.focus(),n.select();const I=document.execCommand("copy");if(document.body.removeChild(n),I)ce.success("Url copied to clipboard!");else throw new Error("execCommand failed")}catch(n){console.error("All share methods failed",n),ce.error("Could not share or copy link")}};return e.jsxs("div",{className:"h-full bg-white dark:bg-gray-900 animate-in fade-in slide-in-from-bottom-4 duration-300 relative overflow-hidden flex flex-col",children:[e.jsx(rt,{title:a.title.split(":")[0],onBack:i,transparent:!0,className:"absolute top-0 left-0 right-0 z-20",rightContent:e.jsx("button",{onClick:b,className:"p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/20 text-gray-900 dark:text-white transition-colors",children:e.jsx(We,{size:20})})}),e.jsxs("div",{ref:d,className:"flex-1 overflow-y-auto pb-20",children:[e.jsxs("div",{className:"relative h-[40vh] md:h-[50vh] w-full overflow-hidden flex-shrink-0",children:[e.jsx("img",{src:a.image,alt:a.title,className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"}),e.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-4xl mx-auto",children:[e.jsx("div",{className:"flex gap-2 mb-3",children:a.tags.map((g,r)=>e.jsx("span",{className:"px-2 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-sm",children:g},r))}),e.jsx("h1",{className:"text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 font-serif",children:a.title}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-gray-200 text-sm md:text-base",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(Qa,{size:16}),e.jsx("span",{className:"font-medium",children:a.author})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(Za,{size:16}),e.jsx("span",{children:a.date})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(Pe,{size:16}),e.jsx("span",{children:u("readTime",f(a.readTime))})]})]})]})]}),e.jsx("article",{className:"max-w-3xl mx-auto px-5 md:px-0 -mt-6 relative z-10",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-t-3xl shadow-xl p-6 md:p-10 min-h-[500px]",children:[e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed font-serif",children:[e.jsx("p",{className:"lead text-xl font-medium text-gray-600 dark:text-gray-200 mb-8 border-l-4 border-blue-500 pl-4 italic",children:a.excerpt}),e.jsx("div",{ref:s,dangerouslySetInnerHTML:{__html:a.content},className:"blog-content"})]}),e.jsxs("div",{className:"mt-12 pt-8 border-t border-gray-200 dark:border-gray-700",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-100 mb-4",children:u("alsoRead")}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[h.map(g=>e.jsx("div",{className:"h-[320px]",children:e.jsx(ft,{blog:g,onClick:()=>c(g),compact:!0})},g.id)),h.length===0&&e.jsx("div",{className:"col-span-full p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 text-center text-sm text-gray-500 dark:text-gray-400",children:u("moreArticlesComing")})]})]})]})})]})]})},$t=K.lazy(()=>Ce(()=>import("./CalendarPrintPage-InVtOyyY.js"),__vite__mapDeps([2,3,0,1,4,5,6,7,8,9,10,11,12,13]))),_t=K.lazy(()=>Ce(()=>import("./DailySaaitPage-BO0XFGGc.js"),__vite__mapDeps([14,3,0,1,4,5,7,8,15,9,10]))),Ut=K.lazy(()=>Ce(()=>import("./DayDetailPage-Cs_L10ct.js"),__vite__mapDeps([16,3,0,1,4,5,7,8,9,10,12,17,18,15,19,20,21,22,23,24]))),Ot=K.lazy(()=>Ce(()=>import("./HomePage-BjvcnD7l.js"),__vite__mapDeps([25,3,0,1,4,5,15,7,8,9,10,26,21,18,22,6,11,27,28,12,20,29,24,30,23,17,19])));K.lazy(()=>Ce(()=>import("./TimelinePage-BACizzWJ.js"),__vite__mapDeps([31,3,0,1,4,5,9,7,8,10,15,21,18,22])));const na=String(1784207864786),ia="nepdate_last_web_build",Vt=()=>{const{t:a}=me(),[i,c]=K.useState(!1),[u,f]=K.useState(!1),[p,s]=K.useState(null),d=K.useRef(!1);l.useEffect(()=>{const E=ee=>{d.current||(window.__updateDetected=!0,d.current=!0,ee&&s(ee),f(!0))};window.__pwaUpdateAvailable&&E();const $=ee=>E(ee.detail),ae=ee=>E(ee.detail);return window.addEventListener("pwa-update-available",$),window.addEventListener("version-update-available",ae),()=>{window.removeEventListener("pwa-update-available",$),window.removeEventListener("version-update-available",ae)}},[]);const h=()=>{f(!1),d.current=!1,Ye.clear(),p?.buildId&&localStorage.setItem(ia,String(p.buildId)),typeof window.refreshPWA=="function"?window.refreshPWA(!0):window.location.reload()};l.useEffect(()=>{if(localStorage.getItem(ia)!==na&&(localStorage.setItem(ia,na),Ye.clear()),typeof window<"u"&&window.Android?.setWebVersion)try{window.Android.setWebVersion("2.7.5")}catch($){console.error("Failed to set web version on Android",$)}},[]);const{theme:o,toggleTheme:b,resetTheme:g}=mt(),{location:r,language:v,updateLanguage:j,isSetupComplete:n,resetSettings:I,engineType:t,isStashLoaded:A}=Me(),V=["ne","en","hi"],B={ne:"ने",en:"EN",hi:"हि"},_=v==="auto"?"ne":v,R=V[(V.indexOf(_)+1)%V.length],{menuStyle:N,desktopLayoutStyle:C,handleSetMenuStyle:Y,handleSetDesktopLayoutStyle:W,resetLayoutSettings:J}=Lt(),{isStandalone:z,canInstall:te,handleInstallClick:q}=Bt(),{activeView:L,setActiveView:D,selectedDate:le,setSelectedDate:oe,isModalOpen:G,setIsModalOpen:U,isMenuOpen:x,setIsMenuOpen:m,handleDayClick:S,setIsKundaliResultsVisible:y,setKundaliBackAction:k,setIsDharmaResultsVisible:T,setDharmaBackAction:M,setPopupBackAction:P,showExitToast:O,postParams:H,setPostParams:ne,viewParams:de,setViewParams:se}=Ft(),{activeSystem:ie,currentYear:pe,currentMonth:ve,switchSystem:Ue,goToToday:Oe,changeMonth:Ve,changeYear:Je,setCurrentBsYear:qe,setCurrentAdYear:ea,setCurrentBsMonth:aa,setCurrentAdMonth:we,initialToday:De,initialTodayBs:ta,todayDetails:w,isNavigating:F}=zt(),{isAndroidApp:Q,handleTouchStart:re,handleTouchMove:ke,handleTouchEnd:ue}=Wt(x,m),[Z,xe]=K.useState(null),Le=()=>{g(),J(),I(),Ye.clear(),ce.info("Settings reset to default",2e3)};l.useEffect(()=>{if(new URLSearchParams(window.location.search).get("app_updated")==="true"){ce.success("Latest version loaded successfully",4e3),Ye.clear();const ae=new URL(window.location.href);ae.searchParams.delete("app_updated"),window.history.replaceState({},"",ae.toString())}},[]),l.useEffect(()=>{const $=new URLSearchParams(window.location.search).get("activeView");$&&(D($),window.history.replaceState({},"",_e()))},[D]),l.useEffect(()=>{!F&&n&&typeof window<"u"&&window.Android?.onAppReady&&window.Android.onAppReady()},[F,n]);const be=l.useRef(A);l.useEffect(()=>{let E=null;return t==="modern"&&(A?be.current||ce.success("High-precision data downloaded and applied modern engine!",3e3):E=ce.info("Downloading precision data. Using analytical engine temporarily...",0)),be.current=A,()=>{E&&ce.dismiss(E)}},[t,A]),l.useEffect(()=>{const E=()=>D("print-calendar");window.addEventListener("navigate-to-print-calendar",E);const $=()=>D("settings");return window.addEventListener("open-settings-view",$),()=>{window.removeEventListener("navigate-to-print-calendar",E),window.removeEventListener("open-settings-view",$)}},[D]),l.useEffect(()=>{const E=()=>{document.documentElement.classList.remove("dark")},$=()=>{c(!1),o==="dark"&&document.documentElement.classList.add("dark")},ae=()=>c(!0),ee=()=>c(!1);return window.addEventListener("beforeprint",E),window.addEventListener("afterprint",$),window.addEventListener("preparing-print",ae),window.addEventListener("finished-print",ee),()=>{window.removeEventListener("beforeprint",E),window.removeEventListener("afterprint",$),window.removeEventListener("preparing-print",ae),window.removeEventListener("finished-print",ee)}},[o]),l.useEffect(()=>{O&&ce.info("Press back again to exit",2e3)},[O]);const Ee=()=>S(De);l.useEffect(()=>{L==="blog-detail"&&H&&(async()=>{try{const $=await Pa(_);let ae=$.find(ee=>He(ee.title)===H.slug);if(!ae){const ee=await gt(H.slug);if(ee){const he=$.find(Ne=>Ne.id===ee.id);he&&(ae=he,ne({...H,slug:He(he.title)}))}}ae?xe(ae):(console.error("Blog not found:",H.slug),D("calendar"))}catch($){console.error("Error loading blog:",$)}})()},[L,H?.slug,_]);const Be=()=>{H?.source?(D(H.source),ne(null)):D("calendar")};return e.jsx(nt,{isRadioActive:L==="radio",children:e.jsxs("div",{className:`fixed inset-0 h-[100dvh] w-full flex flex-col bg-slate-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors overflow-hidden ${C==="sidebar"?"md:flex-row":""} ${o==="dark"&&L!=="print-calendar"?"dark":""}`,onTouchStart:re,onTouchMove:ke,onTouchEnd:ue,children:[C==="topbar"&&e.jsx("div",{className:"w-full sticky top-0 z-30 print:hidden hidden md:block border-b border-gray-200 dark:border-gray-700",children:e.jsx(vt,{activeView:L,activeSystem:ie,onNavigate:E=>{se(null),D(E)},showInstall:!z&&te&&!Q,onInstallClick:q,theme:o,onThemeToggle:b})}),L==="calendar"&&e.jsx("header",{className:"sticky top-0 px-4 pt-2 bg-transparent z-30 md:hidden",children:e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>m(!0),className:"p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700","aria-label":"Open menu",title:"Open menu",children:e.jsx(Xa,{className:"w-5 h-5"})}),e.jsx(xa,{activeSystem:ie,hideControl:L!=="calendar"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>j(R),className:"px-2 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-[11px] font-bold text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600","aria-label":"Toggle Language",title:"Toggle Language",children:B[_]||"ने"}),N==="tabs"&&!z&&te&&!Q&&e.jsxs("button",{onClick:q,className:"px-2 py-2 text-left text-xs rounded bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2",children:[e.jsx(la,{className:"w-5 h-5"})," ",e.jsx("span",{children:a("installApp")})]})]})]})}),x&&e.jsx("div",{className:"fixed inset-0 bg-black/40 z-40 md:hidden",onClick:()=>m(!1)}),e.jsx("aside",{className:`fixed top-0 left-0 z-[10001] h-full bg-slate-200 dark:bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out
          ${x?"translate-x-0":"-translate-x-full"}
          ${C==="sidebar"?"md:translate-x-0 md:sticky md:h-screen md:w-56":"md:hidden w-64"}`,children:e.jsxs("div",{className:"flex flex-col h-full p-4 overflow-y-auto pb-24 no-scrollbar",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-lg font-semibold text-gray-800 dark:text-gray-100 font-rhodium",children:"Menu"}),e.jsx("button",{onClick:()=>m(!1),className:"p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 md:hidden",title:a("close"),"aria-label":a("close"),children:e.jsx(da,{className:"w-5 h-5"})})]}),e.jsxs("nav",{className:"flex flex-col space-y-3 text-gray-800 dark:text-gray-200",children:[Re.filter(E=>!E.hideOnSideMenu).map(E=>e.jsxs("button",{onClick:()=>{se(null),D(E.key),m(!1)},className:`px-2 py-2 flex items-center gap-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 font-rhodium ${L===E.key?"bg-gray-300 dark:bg-gray-700 font-medium":""}`,children:[E.icon," ",e.jsx("span",{className:"font-rhodium",children:a(E.labelKey)})]},E.key)),typeof window<"u"&&window.Android&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>{Qe(),m(!1)},className:"px-2 py-2 flex items-center gap-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 font-rhodium",children:[e.jsx(fa,{icon:dt,className:"w-5 h-5 text-emerald-500 drop-shadow-icon"})," ",e.jsx("span",{className:"font-rhodium",children:"Share App"})]}),e.jsxs("button",{onClick:()=>{Ze(),m(!1)},className:"px-2 py-2 flex items-center gap-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 font-rhodium",children:[e.jsx(fa,{icon:xt,className:"w-5 h-5 text-amber-500 drop-shadow-icon"})," ",e.jsx("span",{className:"font-rhodium",children:"Rate App"})]})]}),!z&&te&&!Q&&e.jsxs("button",{onClick:()=>{q(),m(!1)},className:"px-2 py-2 flex items-center gap-2 rounded bg-blue-600 text-white hover:bg-blue-700",children:[e.jsx(la,{className:"w-4 h-4"})," ",a("installApp")]}),e.jsxs("button",{onClick:()=>{b(),m(!1)},className:"px-2 py-2 flex items-center gap-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700",children:[o==="light"?e.jsx(ye,{className:"w-4 h-4"}):e.jsx(Ie,{className:"w-4 h-4"})," ",a(o==="light"?"darkMode":"lightMode")]}),e.jsx("hr",{className:"border-gray-300 dark:border-gray-600 my-2"}),e.jsxs("button",{onClick:()=>{$e(),m(!1)},className:"px-2 py-2 flex items-center gap-2 rounded text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50",children:[e.jsx(Fe,{className:"w-4 h-4"})," Clear Cache & Reload"]})]}),e.jsxs("div",{className:"mt-auto text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4",children:["© ",ze(r.zoneId).getUTCFullYear()," ",a("project")]})]})}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsxs("div",{id:"app-scroll-container",className:`h-full no-scrollbar mx-auto w-full max-w-7xl xl:max-w-6xl overflow-x-hidden overflow-y-auto ${L==="calendar"?"px-4 md:px-6 pb-20 md:pb-6":"p-0"}`,children:[e.jsxs(K.Suspense,{fallback:e.jsx("div",{className:"flex-1 flex items-center justify-center h-full",children:e.jsx("div",{className:"w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"})}),children:[L==="calendar"&&e.jsxs(e.Fragment,{children:[e.jsx(Ot,{activeSystem:ie,currentYear:pe,currentMonth:ve,switchSystem:Ue,goToToday:Oe,theme:o,toggleTheme:b,todayDetails:w,setActiveView:D,initialToday:De,initialTodayBs:ta,handleShowDetailsClick:Ee,setCurrentBsYear:qe,setCurrentAdYear:ea,setCurrentBsMonth:aa,setCurrentAdMonth:we,changeMonth:Ve,changeYear:Je,handleDayClick:S,setPostParams:ne,setViewParams:se,isNavigating:F}),e.jsx(kt,{onNavigate:(E,$)=>{D(E),se($||null),$&&typeof $.month=="number"&&(ie==="bs"?aa($.month):we($.month))}})]}),L==="day-detail"&&e.jsx(Ut,{onBack:()=>{window.history.pushState({},"",_e()),D("calendar")},onNavigate:E=>D(E)}),L==="blog-detail"&&Z&&e.jsx(Rt,{blog:Z,onBack:Be,onNavigate:E=>{ne({source:H?.source||"calendar",slug:He(E.title)}),window.scrollTo(0,0)}}),L==="daily-saait"&&e.jsx(_t,{onBack:()=>D("calendar"),onNavigate:E=>D(E),activeSystem:ie}),L==="print-calendar"&&e.jsx($t,{onBack:()=>D("calendar"),activeSystem:ie}),(()=>{const E=Re.find($=>$.key===L);if(E&&E.page){const $=E.page,ae={onBack:()=>D("calendar"),onOpenMenu:()=>m(!0),theme:o,activeSystem:ie,onNavigate:he=>D(he)};let ee={...ae,...de};return L==="settings"?ee={...ae,currentTheme:o,onThemeChange:b,currentMenuStyle:N,onMenuStyleChange:Y,currentDesktopLayoutStyle:C,onDesktopLayoutStyleChange:W,onResetSettings:Le,isAndroidApp:Q,onReloadApp:$e}:L==="kundali"?ee={...ae,setIsKundaliResultsVisible:y,setKundaliBackAction:k,initialData:de?.formData}:L==="namakaran"?ee={...ae,onViewKundali:he=>{se({formData:he}),D("kundali")},onNavigate:(he,Ne)=>{Ne&&se(Ne),D(he)}}:L==="dharma"?ee={...ae,activeSystem:ie,currentYear:pe||2081,currentMonth:ve,tag:de?.tag,onNavigate:(he,Ne)=>{he==="blog-detail"?(ne({source:"dharma",slug:He(Ne.title)}),D("blog-detail")):he==="dharma"&&(se(Ne),D("dharma"))},subSection:de?.subSection,setIsDharmaResultsVisible:T,setDharmaBackAction:M}:L==="timeline"&&(ee={...ae,initialDate:le||De}),e.jsx($,{...ee})}return null})()]}),N==="slide"&&e.jsx("div",{className:"w-full bg-slate-200/50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 print:hidden md:hidden mt-8 pb-4",children:e.jsx(wt,{})})]})}),N==="tabs"&&e.jsx("div",{className:"md:hidden print:hidden",children:e.jsx(jt,{activeView:L,onNavigate:E=>{se(null),D(E)},theme:o,onThemeToggle:b,themeLabel:a(o==="light"?"darkMode":"lightMode"),setPopupBackAction:P})}),e.jsx(Dt,{date:le,isOpen:G,onClose:()=>U(!1),activeSystem:ie,onTimelineClick:E=>{oe(E),D("timeline")},onNavigate:E=>D(E)}),e.jsx(Et,{isOpen:u,onConfirm:h,onCancel:()=>f(!1),currentBuildId:na,newBuildId:p?.buildId}),e.jsx(tt,{}),!n&&e.jsx(At,{}),i&&e.jsxs("div",{className:"fixed inset-0 z-[10002] bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-200",children:[e.jsx("div",{className:"w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"}),e.jsx("p",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Preparing to print..."})]})]})})};function Yt(a={}){const{immediate:i=!1,onNeedRefresh:c,onOfflineReady:u,onRegistered:f,onRegisteredSW:p,onRegisterError:s}=a;let d,h,o;const b=async(r=!0)=>{await h,await o?.()};async function g(){if("serviceWorker"in navigator){if(d=await Ce(async()=>{const{Workbox:r}=await import("./vendor-other-DoP2BRe1.js").then(v=>v.H);return{Workbox:r}},__vite__mapDeps([0,1])).then(({Workbox:r})=>new r("/sw.js",{scope:"/",type:"classic"})).catch(r=>{s?.(r)}),!d)return;o=async()=>{await d?.messageSkipWaiting()};{let r=!1;const v=()=>{r=!0,d?.addEventListener("controlling",j=>{j.isUpdate&&window.location.reload()}),c?.()};d.addEventListener("installed",j=>{typeof j.isUpdate>"u"?typeof j.isExternal<"u"?j.isExternal?v():!r&&u?.():j.isExternal?window.location.reload():!r&&u?.():j.isUpdate||u?.()}),d.addEventListener("waiting",v),d.addEventListener("externalwaiting",v)}d.register({immediate:i}).then(r=>{p?p("/sw.js",r):f?.(r)}).catch(r=>{s?.(r)})}}return h=g(),b}class Ht{static intervalId=null;static lastKnownBuildId=null;static consecutiveFailures=0;static isPrefetching=!1;static POLL_INTERVAL=3e5;static startPolling(){this.intervalId||(setTimeout(()=>this.checkForUpdates(),8e3),this.intervalId=window.setInterval(()=>{document.visibilityState==="visible"&&this.checkForUpdates()},this.POLL_INTERVAL),document.addEventListener("visibilitychange",this.handleVisibilityChange))}static stopPolling(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null),document.removeEventListener("visibilitychange",this.handleVisibilityChange)}static handleVisibilityChange=()=>{document.visibilityState==="visible"&&this.checkForUpdates()};static async checkForUpdates(){if(!navigator.onLine||window.__updateDetected||this.isPrefetching)return!1;if(this.consecutiveFailures>=3){const i=Math.min(this.consecutiveFailures-2,12);if(Math.random()>1/i)return!1}try{const i=_e(),c=await fetch(`${i}version.json?t=${Date.now()}`,{cache:"no-store",headers:{"Cache-Control":"no-cache"}});if(!c.ok)return this.consecutiveFailures++,!1;this.consecutiveFailures=0;const u=await c.json();if(this.lastKnownBuildId===null)return this.lastKnownBuildId=u.buildId,!1;if(u.buildId===this.lastKnownBuildId)return!1;console.log(`VersionService: New build ${u.buildId} detected (was ${this.lastKnownBuildId}). Prefetching...`),this.isPrefetching=!0;const f=await this.prefetchNewContent(i);return this.isPrefetching=!1,f?(this.lastKnownBuildId=u.buildId,console.log("VersionService: Prefetch complete. Prompting user."),window.dispatchEvent(new CustomEvent("version-update-available",{detail:u})),!0):(console.log("VersionService: Prefetch incomplete. Will retry next cycle."),!1)}catch(i){this.consecutiveFailures++,this.isPrefetching=!1,i instanceof Error&&(i.message.includes("Failed to fetch")||i.message.includes("NetworkError"))||console.warn("Version check error:",i)}return!1}static async prefetchNewContent(i){try{const c=await fetch(`${i}?t=${Date.now()}`,{cache:"no-store",headers:{"Cache-Control":"no-cache"}});if(!c.ok)return!1;const u=await c.text(),f=this.extractAssetUrls(u,i);if(f.length===0)return!0;const p=6e4,s=new AbortController,d=setTimeout(()=>s.abort(),p),h=await Promise.allSettled(f.map(r=>fetch(r,{signal:s.signal}).then(v=>{if(!v.ok)throw new Error(`HTTP ${v.status}`);return v.blob()})));clearTimeout(d);const o=h.filter(r=>r.status==="fulfilled").length,b=h.filter(r=>r.status==="rejected").length;return console.log(`VersionService: Prefetched ${o}/${f.length} assets (${b} failed)`),o/f.length>=.8}catch(c){return console.warn("VersionService: Prefetch error:",c),!1}}static extractAssetUrls(i,c){const u=[],f=/<script[^>]+src=["']([^"']+)["']/gi;let p;for(;(p=f.exec(i))!==null;)u.push(this.resolveUrl(p[1],c));const s=/<link[^>]+href=["']([^"']+\.css[^"']*)["']/gi;for(;(p=s.exec(i))!==null;)u.push(this.resolveUrl(p[1],c));return u}static resolveUrl(i,c){return i.startsWith("http://")||i.startsWith("https://")?i:i.startsWith("/")?new URL(i,c).href:new URL(i,c).href}}const Wa=l.createContext(void 0),Na="nepdate_cached_ads_config",Kt=()=>{const i=_e().replace("https://appassets.androidplatform.net","https://nepdate.khumnath.com.np");return`${i.endsWith("/")?i:`${i}/`}ads.json`},Gt={"ad-slot1":null,"ad-slot2":null,"ad-slot3":null},Qt=({children:a})=>{const[i,c]=l.useState(()=>{if(typeof window<"u")try{const s=localStorage.getItem(Na);if(s)return JSON.parse(s)}catch(s){console.warn("Failed to parse cached ads config:",s)}return Gt}),[u,f]=l.useState(!0),p=async()=>{try{const s=`${Kt()}?t=${Date.now()}`,d=await fetch(s,{cache:"no-store",headers:{"Cache-Control":"no-cache"}});if(d.ok){const h=await d.json(),o={"ad-slot1":h?.["ad-slot1"]||null,"ad-slot2":h?.["ad-slot2"]||null,"ad-slot3":h?.["ad-slot3"]||null};c(b=>{const g=JSON.stringify(b),r=JSON.stringify(o);return g!==r?(localStorage.setItem(Na,r),console.log("SW/Ads: Ads config updated from remote source."),o):b})}}catch(s){console.warn("SW/Ads: Soft probe for ads.json failed (using cached/fallback):",s)}finally{f(!1)}};return l.useEffect(()=>{p();const s=setInterval(p,3e4);return window.addEventListener("online",p),()=>{clearInterval(s),window.removeEventListener("online",p)}},[]),e.jsx(Wa.Provider,{value:{configs:i,isLoading:u,refreshAds:p},children:a})},cs=()=>{const a=l.useContext(Wa);if(!a)throw new Error("useAds must be used within an AdProvider");return a};pt.Icon.Default.mergeOptions({iconUrl:yt,shadowUrl:bt,iconRetinaUrl:ut});window.addEventListener("vite:preloadError",a=>{console.warn("Failed to load chunk, reloading page... disabled for debugging",a)});const ha=!!window.Android;ha&&"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(a=>{for(const i of a)i.unregister()});let Ra,oa;ha||(Ra=Yt({onRegistered(a){oa=a,a&&setInterval(()=>{document.visibilityState==="visible"&&(console.log("SW: Checking for updates (interval)..."),a.update())},300*1e3)},onNeedRefresh(){window.__updateDetected||(window.__updateDetected=!0,window.__pwaUpdateAvailable=!0,console.log("SW: New content available, prompting user."),fetch(`${window.location.origin}/version.json?t=${Date.now()}`,{cache:"no-store"}).then(a=>a.ok?a.json():null).then(a=>{window.dispatchEvent(new CustomEvent("pwa-update-available",{detail:a}))}).catch(()=>{window.dispatchEvent(new CustomEvent("pwa-update-available"))}))},onOfflineReady(){console.log("SW: App ready to work offline")}}));window.refreshPWA=Ra;ha?console.log("Android detected — native assets serving active, web update checks disabled"):"serviceWorker"in navigator?document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&oa&&(console.log("SW: App became visible, checking for updates..."),oa.update())}):(console.log("SW not supported, falling back to version.json polling"),Ht.startPolling());Ea.load();st.init();Ja.createRoot(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(it,{children:e.jsx(Qt,{children:e.jsx(Vt,{})})})}));export{Mt as D,cs as u};
