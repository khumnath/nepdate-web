const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-other-DoP2BRe1.js","assets/vendor-other-BUUTtNGK.css","assets/CalendarPrintPage-BTKVmA9C.js","assets/vendor-react-C-JCaY0V.js","assets/vendor-leaflet-Bjm2FGmM.js","assets/vendor-leaflet-Dgihpmma.css","assets/MonthlyEvents-CufL26u1.js","assets/core-astro-IDmxtp1z.js","assets/core-data-BzebUjTq.js","assets/index-D_4qRT_5.js","assets/index-B6j8c8Pz.css","assets/LoadingSpinner-CfL1p9Wq.js","assets/HeaderLogo-DrAACJr3.js","assets/PrintAdDialog-B1kxXAcd.js","assets/DailySaaitPage-C1WPHHmr.js","assets/lib-CdLpxPPP.js","assets/DayDetailPage-CT_f2oVF.js","assets/CalculationDetailsModal-BBu3VOGR.js","assets/icons-Cxd53G4L.js","assets/kundali-TH9pUPW5.js","assets/google-play-badge-DgGAyOYp.js","assets/LocationModal-DnpUQs0x.js","assets/vendor-utils-sJS1BcGZ.js","assets/useTheme-CGMRjEiX.js","assets/BlogCard-DZ3GXYSt.js","assets/HomePage-DP3uQ0Jh.js","assets/LocationInfoBar-DbwHDJvr.js","assets/Muhurtas-BhzNJps0.js","assets/RashifalWidget-DkcYjji9.js","assets/BlogWidget-BXQLxskI.js","assets/SocialMedia-DTUhzLVb.js","assets/TimelinePage-M7VYvKod.js"])))=>i.map(i=>d[i]);
import{r as o,j as e,E as Ma,M as ye,S as Ie,b as Fe,c as We,d as ha,D as da,e as Ua,f as Ca,h as Va,R as _,L as Ya,X as ma,i as Je,G as Ha,a as Ka,k as Ga,l as Qa,T as ia,m as pa,n as Xe,o as Za,p as Xa,q as Ja,s as la,U as qa,t as et,u as at,F as ua,v as tt}from"./vendor-react-C-JCaY0V.js";import{M as $e,h as qe,a as ea,b as _e,t as je,g as Da,c as Ea,d as Aa,_ as Me,e as oe,f as Ee,N as ba,i as Re,j as La,k as Pe,l as ya,s as st,S as Ba,m as rt,n as nt,o as ja,P as He,T as it,E as lt}from"./core-astro-IDmxtp1z.js";import{u as he,a as Oe,A as za,P as ot,R as ct,S as dt}from"./index-D_4qRT_5.js";import{H as fa}from"./HeaderLogo-DrAACJr3.js";import{C as Pa}from"./CalculationDetailsModal-BBu3VOGR.js";import{g as xt,c as Ke}from"./lib-CdLpxPPP.js";import{k as ht,B as mt}from"./kundali-TH9pUPW5.js";import{A as Fa,G as Wa}from"./google-play-badge-DgGAyOYp.js";import{t as ft,u as gt}from"./vendor-other-DoP2BRe1.js";import{L as pt}from"./LocationModal-DnpUQs0x.js";import{u as ut}from"./useTheme-CGMRjEiX.js";import{B as bt,g as $a,a as yt}from"./BlogCard-DZ3GXYSt.js";import{l as jt,m as vt,a as wt,b as kt}from"./vendor-leaflet-Bjm2FGmM.js";const va=({icon:a,label:s,isActive:t,onClick:f,className:d})=>e.jsxs("button",{onClick:p=>{p.stopPropagation(),f()},onTouchStart:p=>p.stopPropagation(),onMouseDown:p=>p.stopPropagation(),className:`flex flex-col items-center justify-center pt-2 pb-1 transition-colors ${t?"text-blue-600 dark:text-blue-400":"text-gray-700 dark:text-gray-300"} ${d??""}`,children:[a,e.jsx("span",{className:"text-[11px] mt-1 font-semibold font-rhodium truncate w-full block text-center px-0.5",children:s})]}),Nt=({activeView:a,onNavigate:s,menus:t=$e,theme:f,onThemeToggle:d,themeLabel:p,setPopupBackAction:l})=>{const{t:x}=he(),[h,c]=o.useState(!1),u=o.useRef(null);o.useEffect(()=>{h&&l?l(()=>c(!1)):!h&&l&&l(null);const n=k=>{u.current&&!u.current.contains(k.target)&&c(!1)};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n),l&&h&&l(null)}},[h,l]);const g=[];typeof window<"u"&&window.Android&&(g.push({key:"share",labelKey:"shareApp",icon:e.jsx(We,{className:"w-5 h-5"}),fixed:!1}),g.push({key:"rate",labelKey:"rateApp",icon:e.jsx(ha,{className:"w-5 h-5"}),fixed:!1}));const i=[...t,...g],y=i.filter(n=>n.fixed&&!n.hideOnTabMenu),b=i.filter(n=>!n.fixed&&!n.hideOnTabMenu);return e.jsxs("nav",{ref:u,className:`
        fixed bottom-0 left-0 right-0 w-full h-16
        bg-white dark:bg-gray-800
        border-t border-gray-500 dark:border-gray-900
        shadow-md
        z-[9999] lg:hidden
      `,"aria-label":"Bottom navigation",onClick:n=>n.stopPropagation(),onTouchStart:n=>n.stopPropagation(),onMouseDown:n=>n.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center h-full w-full relative px-1 overflow-hidden",children:[y.map(n=>e.jsx(va,{icon:n.icon,label:x(n.labelKey),isActive:a===n.key,onClick:()=>s(n.key),className:"flex-1 min-w-0"},n.key)),b.length>0&&e.jsx("div",{className:"relative text-[11px] font-semibold flex-none w-[72px] shrink-0",children:e.jsx(va,{icon:e.jsx(Ma,{className:"w-5 h-5"}),label:x("more"),isActive:h,onClick:()=>c(n=>!n),className:"w-full font-rhodium"})})]}),h&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-transparent",onClick:n=>{n.stopPropagation(),c(!1)},onTouchStart:n=>{n.stopPropagation()},onMouseDown:n=>{n.stopPropagation()}}),e.jsxs("div",{className:`
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
            `,role:"menu",onClick:n=>n.stopPropagation(),onTouchStart:n=>n.stopPropagation(),onMouseDown:n=>n.stopPropagation(),children:[b.map(n=>e.jsxs("button",{type:"button",onClick:k=>{k.stopPropagation(),k.preventDefault(),n.key==="share"?qe():n.key==="rate"?ea():s(n.key),setTimeout(()=>c(!1),100)},className:`
                  w-full flex items-center gap-3 px-2 py-2
                  text-left text-[13px]
                  rounded-md
                  hover:bg-slate-100 dark:hover:bg-gray-600
                  focus:bg-slate-100 dark:focus:bg-gray-600
                  text-gray-800 dark:text-gray-200
                `,role:"menuitem",children:[n.icon,e.jsx("span",{className:"truncate font-rhodium",children:x(n.labelKey)})]},n.key)),e.jsx("div",{className:"h-px bg-gray-200 dark:bg-gray-600 my-1 mx-2"}),e.jsxs("button",{type:"button",onClick:n=>{n.stopPropagation(),n.preventDefault(),d(),setTimeout(()=>c(!1),100)},className:`
                w-full flex items-center gap-3 px-2 py-2
                text-left text-[13px]
                rounded-md
                hover:bg-slate-100 dark:hover:bg-gray-600
                focus:bg-slate-100 dark:focus:bg-gray-600
                text-gray-800 dark:text-gray-200
              `,role:"menuitem",children:[f==="light"?e.jsx(ye,{className:"w-4 h-4"}):e.jsx(Ie,{className:"w-4 h-4"}),e.jsx("span",{className:"truncate font-rhodium",children:p})]}),e.jsx("div",{className:"h-px bg-gray-200 dark:bg-gray-600 my-1 mx-2"}),e.jsxs("button",{type:"button",onClick:n=>{n.stopPropagation(),n.preventDefault(),_e(),setTimeout(()=>c(!1),100)},className:`w-full flex items-center gap-3 px-2 py-2
                text-left text-[13px]
                rounded-md
                hover:bg-slate-100 dark:hover:bg-gray-600
                focus:bg-slate-100 dark:focus:bg-gray-600
                text-gray-800 dark:text-gray-200`,children:[e.jsx(Fe,{className:"w-4 h-4"}),x("reload")]})]})]})]})},St=({activeView:a,activeSystem:s,onNavigate:t,showInstall:f=!1,onInstallClick:d,theme:p,onThemeToggle:l})=>{const x=o.useRef(null),h=o.useRef(null),{t:c}=he(),{language:u,updateLanguage:g}=Oe(),i=["ne","en","hi"],y={ne:"ने",en:"EN",hi:"हि"},b=u==="auto"?"ne":u,n=i[(i.indexOf(b)+1)%i.length],[k,r]=o.useState([]),[E,F]=o.useState([]),[D,$]=o.useState(!1),W=(v,C)=>{const O=document.createElement("canvas").getContext("2d");return O?(O.font=C,Math.ceil(O.measureText(v).width*1.1)):100};return o.useEffect(()=>{const v=()=>{if(!x.current)return;const C=4,K=24,O=16,X=8,z=150,J=x.current.offsetWidth,ee=140;let L=0;f&&(L=W(c("install_app"),"500 14px Inter")+32+20+20);const T=J-ee-L-z,xe=W(c("more"),'500 14px "Rhodium Libre", serif')+K+O+X+C+8,le={key:"refresh",labelKey:"reload",icon:e.jsx(Fe,{className:"w-5 h-5"}),fixed:!1},ae=[];typeof window<"u"&&window.Android&&(ae.push({key:"share",labelKey:"shareApp",icon:e.jsx(We,{className:"w-5 h-5"}),fixed:!1}),ae.push({key:"rate",labelKey:"rateApp",icon:e.jsx(ha,{className:"w-5 h-5"}),fixed:!1}));const m=[...$e.filter(N=>!N.hideOnTopNav),...ae,le],j=m.map(N=>{const M=W(c(N.labelKey),'500 14px "Rhodium Libre", serif');return{...N,width:M+K+O+X}});if(j.reduce((N,M,A)=>N+M.width+(A>0?C:0),0)<=T)r(m),F([]);else{const N=T-xe;let M=0;const A=[],q=[];j.forEach((R,ne)=>{const U=R.width+(ne>0?C:0);M+U<=N?(A.push(R),M+=U):q.push(R)}),r(A),F(q)}};return v(),document.fonts.ready.then(v),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[f,c,u]),o.useEffect(()=>{if(!D)return;const v=C=>{h.current&&!h.current.contains(C.target)&&$(!1)};return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[D]),e.jsxs("nav",{ref:x,className:"hidden md:flex w-full px-4 bg-white dark:bg-gray-800 h-16 items-center relative",children:[e.jsx(fa,{activeSystem:s,className:"mr-6 flex-shrink-0",hideControl:a!=="calendar"}),e.jsxs("div",{className:"flex items-center gap-1 flex-1 min-w-0",children:[k.map(v=>e.jsxs("button",{onClick:()=>{v.key==="refresh"?_e():v.key==="share"?qe():v.key==="rate"?ea():t(v.key)},className:`flex-shrink-0 px-2 py-2 rounded-md flex items-center gap-2 whitespace-nowrap text-sm font-medium font-rhodium transition-colors ${a===v.key?"bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm":"text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"}`,children:[v.icon," ",e.jsx("span",{className:"font-rhodium",children:c(v.labelKey)})]},v.key)),E.length>0&&e.jsxs("div",{ref:h,className:"relative flex-shrink-0",children:[e.jsxs("button",{onClick:v=>{v.stopPropagation(),$(C=>!C)},className:"flex-shrink-0 px-2 py-2 rounded-md flex items-center gap-2 whitespace-nowrap hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors font-rhodium",children:[e.jsx(Ma,{className:"w-4 h-4"})," ",e.jsx("span",{className:"font-rhodium",children:c("more")})]}),D&&e.jsx("div",{className:"absolute left-0 top-full mt-1 w-48 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg flex flex-col z-[1000] py-1",children:E.map(v=>e.jsxs("button",{onClick:C=>{C.stopPropagation(),v.key==="refresh"?_e():v.key==="share"?qe():v.key==="rate"?ea():t(v.key),$(!1)},className:"px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center gap-2 whitespace-nowrap text-sm w-full font-rhodium",children:[v.icon," ",e.jsx("span",{className:"font-rhodium",children:c(v.labelKey)})]},v.key))})]})]}),e.jsxs("div",{className:"flex items-center gap-1 ml-4 flex-shrink-0",children:[e.jsx("button",{onClick:()=>g(n),className:"px-2.5 py-1.5 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-xs font-bold text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600","aria-label":"Toggle Language",title:`Language: ${b.toUpperCase()}`,children:y[b]||"ने"}),e.jsx("button",{onClick:l,className:"p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300","aria-label":"Toggle Theme",children:p==="light"?e.jsx(ye,{className:"w-5 h-5"}):e.jsx(Ie,{className:"w-5 h-5"})}),f&&d&&e.jsxs("button",{onClick:d,className:"px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2 text-sm font-medium transition-colors shadow-sm whitespace-nowrap font-rhodium",children:[e.jsx(da,{className:"w-4 h-4"}),e.jsx("span",{className:"font-rhodium",children:c("installApp")})]})]})]})},Tt=()=>{const[a,s]=o.useState(!1),{t}=he();return e.jsxs("footer",{className:"text-center py-3 sm:py-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex flex-wrap justify-center items-center",children:[e.jsxs("span",{className:"mr-1",children:["© ",new Date().getFullYear()," ",e.jsx("a",{href:"https://github.com/khumnath/nepdate",target:"_blank",rel:"noopener noreferrer",className:"underline hover:text-gray-800 dark:hover:text-gray-200",children:"Nepdate Calendar Project"}),"."]}),e.jsx("span",{children:"All rights reserved."}),e.jsx("span",{className:"mx-2 hidden sm:inline text-gray-400",children:"|"}),e.jsx("button",{onClick:()=>s(!0),className:"underline hover:text-gray-800 dark:hover:text-gray-200 mt-2 sm:mt-0",children:t("calculationDetails")}),a&&e.jsx(Pa,{onClose:()=>s(!1)})]})},Se={calendar:a=>[{label:a("bsMonth_0"),value:"calendar",param:{month:0}},{label:a("bsMonth_1"),value:"calendar",param:{month:1}},{label:a("bsMonth_2"),value:"calendar",param:{month:2}},{label:a("bsMonth_3"),value:"calendar",param:{month:3}},{label:a("bsMonth_4"),value:"calendar",param:{month:4}},{label:a("bsMonth_5"),value:"calendar",param:{month:5}}],calendar_ad:a=>[{label:a("adMonth_0"),value:"calendar",param:{month:0}},{label:a("adMonth_1"),value:"calendar",param:{month:1}},{label:a("adMonth_2"),value:"calendar",param:{month:2}},{label:a("adMonth_3"),value:"calendar",param:{month:3}},{label:a("adMonth_4"),value:"calendar",param:{month:4}},{label:a("adMonth_5"),value:"calendar",param:{month:5}}],calendar2:a=>[{label:a("bsMonth_6"),value:"calendar",param:{month:6}},{label:a("bsMonth_7"),value:"calendar",param:{month:7}},{label:a("bsMonth_8"),value:"calendar",param:{month:8}},{label:a("bsMonth_9"),value:"calendar",param:{month:9}},{label:a("bsMonth_10"),value:"calendar",param:{month:10}},{label:a("bsMonth_11"),value:"calendar",param:{month:11}}],calendar2_ad:a=>[{label:a("adMonth_6"),value:"calendar",param:{month:6}},{label:a("adMonth_7"),value:"calendar",param:{month:7}},{label:a("adMonth_8"),value:"calendar",param:{month:8}},{label:a("adMonth_9"),value:"calendar",param:{month:9}},{label:a("adMonth_10"),value:"calendar",param:{month:10}},{label:a("adMonth_11"),value:"calendar",param:{month:11}}],rashifal:a=>[{label:a("मेष","rashi"),value:"rashifal",param:"mesh"},{label:a("वृष","rashi"),value:"rashifal",param:"brish"},{label:a("मिथुन","rashi"),value:"rashifal",param:"mithun"},{label:a("कर्कट","rashi"),value:"rashifal",param:"karkat"},{label:a("सिंह","rashi"),value:"rashifal",param:"simha"},{label:a("कन्या","rashi"),value:"rashifal",param:"kanya"}],rashifal2:a=>[{label:a("तुला","rashi"),value:"rashifal",param:"tula"},{label:a("वृश्चिक","rashi"),value:"rashifal",param:"brishchik"},{label:a("धनु","rashi"),value:"rashifal",param:"dhanu"},{label:a("मकर","rashi"),value:"rashifal",param:"makar"},{label:a("कुम्भ","rashi"),value:"rashifal",param:"kumbha"},{label:a("मीन","rashi"),value:"rashifal",param:"meen"}],services:a=>[{label:a("converter"),value:"converter"},{label:a("rashifalMenu")||a("rashifalTitle")||"Horoscope",value:"rashifal"},{label:a("kundali"),value:"kundali"},{label:a("eclipse"),value:"eclipse"},{label:a("radio"),value:"radio"},{label:a("facebook"),value:"facebook"}]},It=({onNavigate:a})=>{const{t:s,language:t,tAstro:f,calendarSystem:d}=he(),[p,l]=o.useState(!1),x=(h,c,u)=>{h.preventDefault(),a(c,u),c==="calendar"?setTimeout(()=>{const g=document.getElementById("main-calendar-grid");g?g.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})},100):window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs("footer",{className:"hidden md:block bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-10 pb-8 mt-auto",children:[e.jsxs("div",{className:"max-w-7xl xl:max-w-6xl mx-auto px-4 md:px-6",children:[e.jsxs("div",{className:"grid grid-cols-4 gap-8 mb-10",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-gray-900 dark:text-gray-100 font-bold mb-4 uppercase text-sm tracking-wider font-rhodium",children:d==="ad"?t==="en"?"Gregorian Calendar":t==="hi"?"ग्रेगोरियन कैलेंडर":"अंग्रेजी क्यालेण्डर":t==="en"?"Vikram Calendar":t==="hi"?"विक्रम कैलेंडर":"विक्रम क्यालेण्डर"}),e.jsxs("div",{className:"grid grid-cols-2 gap-x-4",children:[e.jsx("ul",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:(d==="ad"?Se.calendar_ad(s):Se.calendar(s)).map((h,c)=>e.jsx("li",{children:e.jsx("button",{onClick:u=>x(u,h.value,h.param),className:"hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:h.label})},c))}),e.jsx("ul",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:(d==="ad"?Se.calendar2_ad(s):Se.calendar2(s)).map((h,c)=>e.jsx("li",{children:e.jsx("button",{onClick:u=>x(u,h.value,h.param),className:"hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:h.label})},c))})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-gray-900 dark:text-gray-100 font-bold mb-4 uppercase text-sm tracking-wider font-rhodium",children:t==="en"?"Horoscope":"राशिफल (Horoscope)"}),e.jsxs("div",{className:"grid grid-cols-2 gap-x-4",children:[e.jsx("ul",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:Se.rashifal(f).map((h,c)=>e.jsx("li",{children:e.jsx("button",{onClick:u=>x(u,h.value,h.param),className:"hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:h.label})},c))}),e.jsx("ul",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:Se.rashifal2(f).map((h,c)=>e.jsx("li",{children:e.jsx("button",{onClick:u=>x(u,h.value,h.param),className:"hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:h.label})},c))})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-gray-900 dark:text-gray-100 font-bold mb-4 uppercase text-sm tracking-wider font-rhodium",children:t==="en"?"Services":t==="hi"?"सेवाएं (Services)":"सेवाहरू (Services)"}),e.jsx("ul",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:Se.services(s).map((h,c)=>e.jsx("li",{children:e.jsx("button",{onClick:u=>x(u,h.value),className:"hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:h.label})},c))})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-4 -ml-2",children:e.jsx(fa,{activeSystem:"bs"})}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed",children:t==="en"?"Your trusted partner for Nepali dates, festivals, astrology, and muhurtas.":t==="hi"?"नेपाली तिथियों, त्योहारों, ज्योतिष और मुहूर्तों के लिए आपका विश्वसनीय साथी।":"नेपाली मिति, चाडबाड, ज्योतिष र मुहूर्तहरूको लागि तपाईंको भरपर्दो पात्रो।"}),e.jsx("a",{href:"https://play.google.com/store/apps/details?id=com.khumnath.nepdate",target:"_blank",rel:"noopener noreferrer",className:"inline-block mb-6",children:e.jsx("img",{src:"/images/en_badge_web_generic.png",alt:"Get it on Google Play",className:"h-16 -ml-3"})}),e.jsxs("ul",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(Ua,{className:"w-4 h-4 shrink-0"}),e.jsx("span",{children:"aksharlabstudio1@gmail.com"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(Ca,{className:"w-4 h-4 shrink-0"}),e.jsx("span",{children:t==="en"?"Butwal, Nepal":"बुटवल, नेपाल"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(Va,{className:"w-4 h-4 shrink-0"}),e.jsx("a",{href:"https://www.facebook.com/people/NepDate-Patro/61584433679641/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-blue-600 transition-colors",children:t==="en"?"NepDate Patro":"नेपडेट पात्रो"})]})]})]})]}),e.jsxs("div",{className:"border-t border-gray-200 dark:border-gray-800 pt-6 text-center flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4",children:[e.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["© ",new Date().getFullYear()," ",t==="en"?"NepDate Patro. All Rights Reserved.":"नेपडेट पात्रो। सर्वाधिकार सुरक्षित।"]}),e.jsx("span",{className:"hidden sm:inline text-gray-400",children:"|"}),e.jsx("button",{onClick:()=>l(!0),className:"text-sm text-gray-500 dark:text-gray-400 underline hover:text-gray-800 dark:hover:text-gray-200 transition-colors",children:s("calculationDetails")})]})]}),p&&e.jsx(Pa,{onClose:()=>l(!1)})]})},_a=(a,s,t,f,d,p=null,l=[],x=null)=>{const h=new Date,c=Math.floor((h.getTime()-new Date(h.getFullYear(),0,0).getTime())/1e3/60/60/24),u=[`आज साताको ${a}। `,`आज ${a}को दिन। `,`आज ${a} परेको छ। `,`आज सप्ताहको ${a}। `,`आज ${a}को शुभ दिन। `];let g=u[c%u.length];if(l&&l.length>0){const b=l.map(n=>n.name).join(" र ");g+=`आजको दिन ${b} परेको छ। `}t?(g+=`आज ${t} सम्म ${s} तिथि रहनेछ`,f?g+=` र त्यसपछि ${f} तिथि आरम्भ हुनेछ। `:g+="। "):g+=`आज दिनभर ${s} तिथि रहनेछ। `,p?g+=`साथै आज ${p} नक्षत्र र `:g+="आज ";let y={विष्कुम्भ:"यस योगमा गरिएको कार्यले प्रारम्भमा केही बाधा आए पनि अन्त्यमा सफलता दिलाउनेछ।",प्रीति:"यस योगले प्रेम, सद्भाव र पारिवारिक सुख वृद्धि गर्नेछ।",आयुष्मान:"यस योगले आयु र स्वास्थ्यमा सकारात्मक प्रभाव पार्नेछ।",आयुष्मान्:"यस योगले आयु र स्वास्थ्यमा सकारात्मक प्रभाव पार्नेछ।",सौभाग्य:"यस योगमा गरिएका कार्यले नाम जस्तै सौभाग्य र सुख लिएर आउनेछ।",शोभन:"यस योगले सम्पूर्ण कार्यमा सुन्दरता र शुभ फल प्रदान गर्नेछ।",अतिगण्ड:"यस योगमा कार्य गर्दा केही कठिनाइ आउन सक्ने भएकाले संयमता अपनाउनुहोला।",सुकर्मा:"यस योगले असल कर्मतर्फ प्रेरित गर्दै पुण्य र सफलता दिलाउनेछ।",धृति:"यस योगमा गरिएको धैर्यपूर्ण कार्यले स्थायी र उत्तम प्रतिफल दिनेछ।",शूल:"यस योगमा महत्त्वपूर्ण निर्णयहरू लिँदा विशेष होसियारी अपनाउनुहोला।",गण्ड:"यस योगमा नयाँ कार्यको थालनी गर्दा सावधानी अपनाउनु उपयुक्त हुनेछ।",वृद्धि:"यस योगले धन, ज्ञान र व्यवसायमा निरन्तर वृद्धि गराउनेछ।",ध्रुव:"यस योगमा सुरु गरिएका कार्यहरू स्थायी हुने र दीर्घकालीन लाभ दिनेछन्।",व्याघात:"यस योगमा अनावश्यक विवाद र वादविवादबाट टाढै रहनु बेस हुनेछ।",हर्षण:"यस योगले मनमा प्रशन्नता ल्याउने र कार्यमा उत्साह जगाउनेछ।",वज्र:"यस योगमा गरिएको कार्यले वज्र जस्तै बलियो र दृढ परिणाम दिनेछ।",सिद्धि:"यस योगले सम्पूर्ण कार्यमा सिद्धि (सफलता) र मनोकामना पूर्ण गराउनेछ।",व्यतीपात:"यस योगमा ठूला र महत्त्वपूर्ण निर्णयहरू लिँदा पुनर्विचार गर्नुहोला।",वरीयान्:"यस योगले जीवनमा श्रेष्ठता, सम्मान र उच्च सफलता दिलाउनेछ।",परिघ:"यस योगमा कार्य गर्दा केही बाधाहरू आउन सक्ने भएकाले धैर्यता अपनाउनुहोला।",शिव:"यस योगले महादेवको कृपास्वरूप सम्पूर्ण कार्यमा कल्याण र शान्ति ल्याउनेछ।",सिद्ध:"यस योगमा थालिएका कामहरू विना कुनै विघ्नबाधा सम्पन्न हुनेछन्।",साध्य:"यस योगले असम्भव जस्तो लाग्ने कार्यलाई पनि सहजै साध्न (पुरा गर्न) मद्दत गर्नेछ।",शुभ:"यस योगले जीवनका हरेक क्षेत्रमा शुभ फल र मङ्गलमय परिणाम दिनेछ।",शुक्ल:"यस योगले ज्ञान, पवित्रता र कार्यमा उज्ज्वलता प्रदान गर्नेछ।",ब्रह्म:"यस योगले आध्यात्मिक चिन्तन र विद्या अध्ययनमा विशेष सफलता दिनेछ।",इन्द्र:"यस योगले नेतृत्व क्षमता, राज्यसुख र प्रशासनिक कार्यमा विजय दिलाउनेछ।",वैधृति:"यस योगमा नयाँ लगानी वा महत्त्वपूर्ण कार्य गर्दा सजग रहनुहोला।"}[d];if(!y){const b=["यस योगमा गरिएका कार्यहरूमा शुभ फल मिल्ने विश्वास गरिन्छ।","यस योगले सामान्यतया सकारात्मक र मङ्गलमय परिणाम दिनेछ।","यस योगमा थालिएका सम्पूर्ण सत्कर्महरूमा सफलता प्राप्त हुनेछ।","यस योगको प्रभावले दैनिक कार्यहरू विना कुनै बाधा सम्पन्न हुनेछन्।","यस योगले आजको दिनलाई सुखद र फलदायी बनाउन मद्दत गर्नेछ।"],n=new Date,k=Math.floor((n.getTime()-new Date(n.getFullYear(),0,0).getTime())/1e3/60/60/24);y=b[k%b.length]}if(g+=`आज ${d} योग परेको छ। ${y} `,x&&x.isActiveCivil){const n={bhadraResidenceEarth:"मृत्यु लोक (पृथ्वी)",bhadraResidenceHeaven:"स्वर्ग लोक (स्वर्ग)",bhadraResidenceUnderworld:"पाताल लोक (पाताल)"}[x.residence]||x.residence;x.isHarmful?g+=`ध्यान दिनुहोला, आज ${n}मा भद्रा परेको छ र यसको प्रभाव अशुभ मानिन्छ। शुभ कार्यहरू भद्रा समयपछि मात्र गर्दा राम्रो हुनेछ।`:g+=`आज ${n}मा भद्रा रहे पनि यसको प्रभाव शुभ फलदायी मानिन्छ।`}else g+="आज गरिएका कार्यहरूमा शुभ फल मिल्ने विश्वास गरिन्छ।";return g},Mt=(a,s=[])=>{if(s&&s.length>0){const x=s[0].name,h=[`${x} को यस पावन अवसरमा व्रत, पूजापाठ तथा दान-पुण्य गर्नाले विशेष फल मिल्नेछ।`,`आज ${x} को विशेष दिन भएकाले इष्टदेवको आराधना गर्दा जीवनमा सुख र समृद्धि प्राप्त हुनेछ।`,`${x} को शुभ अवसरमा सम्पूर्ण परिवारको कल्याणको कामना गर्दै धार्मिक कार्यमा सहभागी हुनुहोला।`],c=new Date,u=Math.floor((c.getTime()-new Date(c.getFullYear(),0,0).getTime())/1e3/60/60/24);return h[u%h.length]}const t={0:["आज आइतबार भगवान सूर्य नारायणको उपासना र आदित्य हृदय स्तोत्रको पाठ गर्नाले तेज, ऊर्जा र सफलता प्राप्त हुनेछ।","सूर्यदेवलाई अर्घ्य दिएर दिनको आरम्भ गर्नुहोस्, सम्पूर्ण कार्यहरूमा सिद्धि मिल्नेछ।"],1:["आज सोमबार भगवान शिवको आराधना र जल अभिषेक गर्नाले मानसिक शान्ति र सुख प्राप्त हुनेछ।","महादेवको पूजा अर्चना गर्दै ॐ नमः शिवाय मन्त्रको जप गर्नुहोला, दिन शुभ रहनेछ।"],2:["आज मंगलबार संकटमोचन हनुमानजीको दर्शन र हनुमान चालिसा पाठ गर्नाले सम्पूर्ण विघ्न-बाधा दूर हुनेछन्।","बजरङ्गबलीको कृपाले तपाईंका कार्यहरू निर्विघ्न सम्पन्न हुनेछन्। आज रातो वस्त्र धारण गर्नु शुभ मानिन्छ।"],3:["आज बुधबार भगवान गणेश र श्रीकृष्णको पूजा आराधना गर्नाले बुद्धि र विवेकमा वृद्धि हुनेछ।","श्रीहरि विष्णुको स्मरण गर्दै दिनको सुरुवात गर्नुहोला, घर-परिवारमा प्रेम र सद्भाव बनिरहनेछ।"],4:["आज बिहीबार भगवान विष्णु र बृहस्पति देवको पूजा गर्नाले शिक्षा, ज्ञान र धनमा वृद्धि हुनेछ।","आजको दिन पहेँलो वस्त्र धारण गर्नु र गुरुजनको आशीर्वाद लिनु अत्यन्त शुभ मानिन्छ।"],5:["आज शुक्रबार माता लक्ष्मी र सन्तोषी माताको आराधना गर्नाले घरमा धन-धान्य र सुख-समृद्धिले बास गर्नेछ।","माता भगवतीको स्मरण गर्दै कन्याहरूलाई दान गर्नाले विशेष शुभ फल प्राप्त हुनेछ।"],6:["आज शनिबार न्यायका देवता शनिदेवको पूजा र पिपलको वृक्षमा जल चढाउनाले सम्पूर्ण कष्ट निवारण हुनेछन्।","शनिदेवको कृपा प्राप्त गर्न आज गरिब तथा दुःखीहरूलाई सहयोग गर्नु अत्यन्त फलदायी मानिन्छ।"]},f=t[a]||t[0],d=new Date,l=Math.floor((d.getTime()-new Date(d.getFullYear(),0,0).getTime())/1e3/60/60/24)%f.length;return f[l]},Ct=["आइतवार","सोमवार","मंगलवार","बुधवार","बिहीवार","शुक्रवार","शनिवार"],H=a=>Ea(a),Be=a=>{if(!a)return"";try{const s=new Date(a);if(isNaN(s.getTime()))return"";let t=s.getHours();const f=s.getMinutes();let d="बिहान";return t>=12&&t<16?d="दिउँसो":t>=16&&t<20?d="बेलुका":(t>=20||t<4)&&(d="राति"),t>12&&(t-=12),t===0&&(t=12),`${d} ${H(t)}:${H(f<10?"0"+f:f)} सम्म`}catch{return""}},Ge=a=>{if(!a)return"—";try{const s=new Date(a);if(isNaN(s.getTime()))return"—";let t=s.getHours();const f=s.getMinutes();let d="बिहान";return t>=12&&t<16?d="दिउँसो":t>=16&&t<20?d="बेलुका":(t>=20||t<4)&&(d="राति"),t>12&&(t-=12),t===0&&(t=12),`${H(t)}:${H(f<10?"0"+f:f)} ${d}`}catch{return"—"}},wa=({data:a,date:s,onLoad:t,variant:f,isOffscreen:d=!1})=>{if(_.useEffect(()=>{if(t){const J=setTimeout(t,500);return()=>clearTimeout(J)}},[t,a]),!a)return null;const p=je(s),l=p?.year?p.year.toString():"0",x=p?.monthName||"",h=p?.day||0,c=Da(s),u=Ct[c]||"",i=`${["जनवरी","फेब्रुअरी","मार्च","अप्रिल","मे","जुन","जुलाई","अगस्ट","सेप्टेम्बर","अक्टोबर","नोभेम्बर","डिसेम्बर"][s.getMonth()]} ${H(s.getDate())}, ${H(s.getFullYear())}`,y=a.tithis?.[0],b=a.tithis?.[1],n=a.nakshatras?.[0],k=a.nakshatras?.[1],r=a.yogas?.[0],E=a.yogas?.[1],F=a.karanas?.[0],D=a.karanas?.[1],$=a.moonRashis?.[0],W=_a(u,y?.name||"",Be(y?.endTime),b?.name||null,r?.name||"",n?.name||null,a.events,a.bhadra),v=Mt(c,a.events),K=(()=>{if(!a.sunriseIso||!a.sunsetIso||!a.nextSunriseIso)return{dinamanaGp:"—",ratrimanaGp:"—"};const J=a.sunriseMs??new Date(a.sunriseIso).getTime(),ee=a.sunsetMs??new Date(a.sunsetIso).getTime(),L=a.nextSunriseMs??new Date(a.nextSunriseIso).getTime(),T=L-J,ie=ee-J,xe=L-ee,le=ae=>{const m=ae/T*60,j=Math.floor(m),I=Math.floor((m-j)*60);return`${H(j)} घडी ${H(I)} पला`};return{dinamanaGp:le(ie),ratrimanaGp:le(xe)}})(),O=a.ayana==="Uttarayana"?"उत्तरायण":a.ayana==="Dakshinayana"?"दक्षिणायन":a.ayana,X={1:{primary:"#1a237e",secondary:"#c62828",sidebar:"linear-gradient(180deg, #1565c0 0%, #0d47a1 50%, #1a237e 100%)",footer:"linear-gradient(95deg,#0a4f48 0%,#0f7269 22%,#17967f 42%,#4a9f6f 62%,#c9ac4e 82%,#e8bd45 100%)",bg:"linear-gradient(135deg, #f0f2f5, #e8eaed)"},2:{primary:"#4a148c",secondary:"#c2185b",sidebar:"linear-gradient(180deg, #7b1fa2 0%, #6a1b9a 50%, #4a148c 100%)",footer:"linear-gradient(95deg,#4a148c 0%,#6a1b9a 22%,#8e24aa 42%,#ab47bc 62%,#ce93d8 82%,#f48fb1 100%)",bg:"linear-gradient(135deg, #f3e5f5, #fce4ec)"},3:{primary:"#bf360c",secondary:"#b71c1c",sidebar:"linear-gradient(180deg, #e65100 0%, #d84315 50%, #bf360c 100%)",footer:"linear-gradient(95deg,#bf360c 0%,#d84315 22%,#e64a19 42%,#f4511e 62%,#ff8a65 82%,#ffcc80 100%)",bg:"linear-gradient(135deg, #fbe9e7, #fff3e0)"},4:{primary:"#006064",secondary:"#01579b",sidebar:"linear-gradient(180deg, #00838f 0%, #006064 50%, #004d40 100%)",footer:"linear-gradient(95deg,#004d40 0%,#00695c 22%,#00796b 42%,#00897b 62%,#4db6ac 82%,#80cbc4 100%)",bg:"linear-gradient(135deg, #e0f7fa, #e0f2f1)"},5:{primary:"#880e4f",secondary:"#e65100",sidebar:"linear-gradient(180deg, #c2185b 0%, #880e4f 50%, #4a148c 100%)",footer:"linear-gradient(95deg,#b71c1c 0%,#c62828 22%,#d32f2f 42%,#e53935 62%,#ffb300 82%,#ffca28 100%)",bg:"linear-gradient(135deg, #fce4ec, #fbe9e7)"}},z=X[f||1]||X[1];return e.jsx("div",{style:d?{position:"absolute",top:-9999,left:-9999,zIndex:-1,pointerEvents:"none"}:{},children:e.jsxs("div",{id:"panchanga-share-card",className:"poster",style:{"--theme-primary":z.primary,"--theme-secondary":z.secondary,"--theme-sidebar":z.sidebar,"--theme-footer":z.footer,"--theme-bg":z.bg},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`

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
`}}),e.jsxs("svg",{className:"mountain-bg",viewBox:"0 0 500 200",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"skyGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#b3d4f0"}),e.jsx("stop",{offset:"100%",stopColor:"#e8f0f8"})]}),e.jsxs("linearGradient",{id:"mountainGrad1",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),e.jsx("stop",{offset:"40%",stopColor:"#d0dce8"}),e.jsx("stop",{offset:"100%",stopColor:"#8fa4b8"})]}),e.jsxs("linearGradient",{id:"mountainGrad2",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#e8eef4"}),e.jsx("stop",{offset:"100%",stopColor:"#a0b4c8"})]})]}),e.jsx("rect",{width:"500",height:"200",fill:"url(#skyGrad)",opacity:"0.5"}),e.jsx("path",{d:"M100,180 L180,60 L220,90 L280,30 L340,80 L400,50 L460,100 L500,80 L500,200 L100,200 Z",fill:"url(#mountainGrad2)",opacity:"0.6"}),e.jsx("path",{d:"M150,180 L220,80 L260,110 L310,50 L370,90 L420,60 L470,110 L500,90 L500,200 L150,200 Z",fill:"url(#mountainGrad1)",opacity:"0.8"}),e.jsx("path",{d:"M280,30 L295,55 L270,50 Z",fill:"white",opacity:"0.9"}),e.jsx("path",{d:"M310,50 L325,70 L300,65 Z",fill:"white",opacity:"0.8"}),e.jsx("path",{d:"M400,50 L415,70 L390,65 Z",fill:"white",opacity:"0.9"}),e.jsxs("g",{transform:"translate(380, 60)",children:[e.jsx("rect",{x:"10",y:"80",width:"60",height:"8",fill:"#8B4513",rx:"2"}),e.jsx("polygon",{points:"0,80 80,80 70,65 10,65",fill:"#654321"}),e.jsx("rect",{x:"15",y:"65",width:"50",height:"15",fill:"#8B6914"}),e.jsx("polygon",{points:"5,65 75,65 65,50 15,50",fill:"#654321"}),e.jsx("rect",{x:"20",y:"50",width:"40",height:"15",fill:"#8B6914"}),e.jsx("polygon",{points:"10,50 70,50 60,38 20,38",fill:"#654321"}),e.jsx("rect",{x:"25",y:"38",width:"30",height:"12",fill:"#8B6914"}),e.jsx("polygon",{points:"15,38 65,38 55,28 25,28",fill:"#654321"}),e.jsx("line",{x1:"40",y1:"28",x2:"40",y2:"10",stroke:"#DAA520",strokeWidth:"3"}),e.jsx("circle",{cx:"40",cy:"8",r:"4",fill:"#DAA520"}),e.jsx("rect",{x:"30",y:"70",width:"8",height:"8",fill:"#4a3010",rx:"1"}),e.jsx("rect",{x:"45",y:"70",width:"8",height:"8",fill:"#4a3010",rx:"1"})]})]}),e.jsxs("div",{className:"header",children:[e.jsx("div",{className:"logo-section",children:e.jsx("img",{src:Fa,alt:"NepDate Logo",style:{height:60,objectFit:"contain"}})}),e.jsxs("div",{className:"title-section",children:[e.jsxs("div",{className:"main-title",children:[e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"5",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"25",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"5",cy:"15",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"25",cy:"15",r:"2.5",fill:"#c62828"})]}),e.jsx("span",{children:"आजको"}),e.jsx("span",{className:"red",children:"पञ्चाङ्ग"}),e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"5",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"25",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"5",cy:"15",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"25",cy:"15",r:"2.5",fill:"#c62828"})]})]}),e.jsx("div",{className:"title-sub",children:"हरेक दिनको विश्वास"})]}),e.jsx("div",{style:{width:"120px"}})]}),e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"left-sidebar",children:[e.jsxs("svg",{className:"sidebar-calendar-icon",width:"40",height:"40",viewBox:"0 0 40 40",children:[e.jsx("rect",{x:"5",y:"8",width:"30",height:"28",rx:"3",fill:"none",stroke:"white",strokeWidth:"2"}),e.jsx("line",{x1:"5",y1:"16",x2:"35",y2:"16",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"10",y:"4",width:"4",height:"8",rx:"1",fill:"white"}),e.jsx("rect",{x:"26",y:"4",width:"4",height:"8",rx:"1",fill:"white"}),e.jsx("rect",{x:"10",y:"20",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"17.5",y:"20",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"25",y:"20",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"10",y:"27",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"17.5",y:"27",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"25",y:"27",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"})]}),e.jsx("div",{className:"sidebar-label",children:"विक्रम संवत्"}),e.jsx("div",{className:"sidebar-big-date",children:H(h)}),e.jsx("div",{className:"sidebar-month",children:x}),e.jsx("div",{className:"sidebar-year",children:H(l).slice(-2)}),e.jsx("div",{className:"sidebar-day",children:u}),e.jsxs("div",{className:"sidebar-gregorian",children:["तद्नुसार",e.jsx("br",{}),i]})]}),e.jsxs("div",{className:"center-content",children:[e.jsxs("div",{className:"date-banner",children:[e.jsx("div",{className:"date-banner-icon",children:e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",children:[e.jsx("rect",{x:"3",y:"6",width:"22",height:"20",rx:"2",fill:"none",stroke:"white",strokeWidth:"2"}),e.jsx("line",{x1:"3",y1:"12",x2:"25",y2:"12",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"7",y:"2",width:"3",height:"6",rx:"1",fill:"white"}),e.jsx("rect",{x:"18",y:"2",width:"3",height:"6",rx:"1",fill:"white"})]})}),e.jsxs("div",{style:{flex:1,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px",whiteSpace:"nowrap"},children:[e.jsxs("div",{className:"date-banner-text",style:{fontSize:"18px"},children:["विक्रम संवत् ",e.jsx("span",{className:"red",children:H(l)})," ",x," ",H(h)," गते"]}),a.nepalSambatYear&&e.jsxs("div",{className:"date-banner-sub",style:{fontSize:"14px",color:"#1a237e",fontWeight:600},children:["नेपाल संवत् ",H(a.nepalSambatYear)," ",a.nepalSambatMonthName," ",H(a.nepalSambatDay)]}),e.jsxs("div",{className:"date-banner-sub",children:["तद्नुसार ",i]})]}),e.jsx("div",{style:{fontSize:"24px",fontWeight:900,color:"#c62828",borderLeft:"2px solid #eee",paddingLeft:"20px",paddingRight:"10px"},children:u})]})]}),e.jsxs("div",{className:"panchang-row",children:[e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("path",{d:"M18,5 A12,12 0 1,0 18,25 A8,8 0 1,1 18,5",fill:"#ffd700"}),e.jsx("circle",{cx:"10",cy:"10",r:"1.5",fill:"white"}),e.jsx("circle",{cx:"20",cy:"15",r:"1",fill:"white"}),e.jsx("circle",{cx:"12",cy:"22",r:"1",fill:"white"})]})}),e.jsx("div",{className:"panchang-box-label",children:"तिथि"}),e.jsx("div",{className:"panchang-box-value",children:y?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:y?.endTime?`(${Be(y.endTime)})`:""}),b?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),b.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"none",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("circle",{cx:"15",cy:"6",r:"2",fill:"#ffd700"}),e.jsx("circle",{cx:"22",cy:"10",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"24",cy:"18",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"20",cy:"24",r:"2",fill:"#ffd700"}),e.jsx("circle",{cx:"12",cy:"24",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"7",cy:"18",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"8",cy:"10",r:"2",fill:"#ffd700"}),e.jsx("line",{x1:"15",y1:"6",x2:"22",y2:"10",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"22",y1:"10",x2:"24",y2:"18",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"24",y1:"18",x2:"20",y2:"24",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"20",y1:"24",x2:"12",y2:"24",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"12",y1:"24",x2:"7",y2:"18",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"7",y1:"18",x2:"8",y2:"10",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"8",y1:"10",x2:"15",y2:"6",stroke:"#ffd700",strokeWidth:"0.8"})]})}),e.jsx("div",{className:"panchang-box-label",children:"नक्षत्र"}),e.jsx("div",{className:"panchang-box-value",children:n?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:n?.endTime?`(${Be(n.endTime)})`:""}),k?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),k.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"8",r:"4",fill:"#ffd700"}),e.jsx("path",{d:"M15,12 L15,20 M10,16 L20,16 M12,20 L15,26 L18,20",stroke:"#ffd700",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),e.jsx("circle",{cx:"15",cy:"15",r:"10",fill:"none",stroke:"#ffd700",strokeWidth:"1",opacity:"0.5"})]})}),e.jsx("div",{className:"panchang-box-label",children:"योग"}),e.jsx("div",{className:"panchang-box-value",children:r?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:r?.endTime?`(${Be(r.endTime)})`:""}),E?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),E.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"#1a237e"}),e.jsx("path",{d:"M15,3 A12,12 0 0,1 15,27 A8,8 0 0,0 15,3",fill:"#ffd700"})]})}),e.jsx("div",{className:"panchang-box-label",children:"करण"}),e.jsx("div",{className:"panchang-box-value",children:F?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:F?.endTime?`(${Be(F.endTime)})`:""}),D?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),D.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"none",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("circle",{cx:"15",cy:"15",r:"8",fill:"none",stroke:"#ffd700",strokeWidth:"1"}),e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"none",stroke:"#ffd700",strokeWidth:"1"}),e.jsx("line",{x1:"15",y1:"3",x2:"15",y2:"7",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("line",{x1:"15",y1:"23",x2:"15",y2:"27",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("line",{x1:"3",y1:"15",x2:"7",y2:"15",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("line",{x1:"23",y1:"15",x2:"27",y2:"15",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("circle",{cx:"15",cy:"15",r:"2",fill:"#ffd700"})]})}),e.jsx("div",{className:"panchang-box-label",children:"चन्द्र राशि"}),e.jsx("div",{className:"panchang-box-value",children:$?.name||"—"})]})]}),e.jsxs("div",{className:"other-details-body",children:[e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#1a237e"}),e.jsx("line",{x1:"4",y1:"12",x2:"28",y2:"12",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"8",y:"2",width:"4",height:"6",rx:"1",fill:"#1a237e"}),e.jsx("rect",{x:"20",y:"2",width:"4",height:"6",rx:"1",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"वार"}),e.jsx("div",{className:"detail-value",children:u})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#1a237e"}),e.jsx("path",{d:"M16,4 A12,12 0 0,1 16,28 A8,8 0 0,0 16,4",fill:"#ffd700"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"पक्ष"}),e.jsx("div",{className:"detail-value",children:a.paksha||""})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#7b1fa2"}),e.jsx("line",{x1:"4",y1:"12",x2:"28",y2:"12",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"8",y:"2",width:"4",height:"6",rx:"1",fill:"#7b1fa2"}),e.jsx("rect",{x:"20",y:"2",width:"4",height:"6",rx:"1",fill:"#7b1fa2"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"मास"}),e.jsx("div",{className:"detail-value",children:a.lunarMonth||""})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#2e7d32"}),e.jsx("path",{d:"M10,20 Q16,12 22,20 Q16,24 10,20",fill:"#81c784"}),e.jsx("line",{x1:"16",y1:"20",x2:"16",y2:"26",stroke:"#81c784",strokeWidth:"2"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"ऋतु"}),e.jsx("div",{className:"detail-value",children:a.ritu||""})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#c62828"}),e.jsx("line",{x1:"4",y1:"12",x2:"28",y2:"12",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"8",y:"2",width:"4",height:"6",rx:"1",fill:"#c62828"}),e.jsx("rect",{x:"20",y:"2",width:"4",height:"6",rx:"1",fill:"#c62828"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"संवत्सर"}),e.jsx("div",{className:"detail-value",children:a.samvatsar||""})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#5e35b1"}),e.jsx("path",{d:"M10,16 Q16,10 22,16 Q16,22 10,16",fill:"#b39ddb"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"अयन"}),e.jsx("div",{className:"detail-value",children:O||"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#00acc1"}),e.jsx("path",{d:"M12,16 L16,12 L20,16 L16,20 Z",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"आनन्दादि योग"}),e.jsx("div",{className:"detail-value",children:a.anandadiYoga?a.anandadiYoga.nameNe:"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#fdd835"}),e.jsx("circle",{cx:"16",cy:"16",r:"6",fill:"#f57f17"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"दिनमान"}),e.jsx("div",{className:"detail-value",children:K.dinamanaGp})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#3949ab"}),e.jsx("path",{d:"M12,10 A6,6 0 0,0 12,22 A8,8 0 0,1 12,10",fill:"#c5cae9"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"रात्रिमान"}),e.jsx("div",{className:"detail-value",children:K.ratrimanaGp})]})]})]})]}),e.jsxs("div",{className:"right-panel",children:[e.jsx("div",{className:"shubh-header",children:"शुभ समय"}),e.jsxs("div",{className:"shubh-body",children:[e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("circle",{cx:"18",cy:"20",r:"10",fill:"#ffd700"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#4fc3f7"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"सूर्योदय"}),e.jsx("div",{className:"shubh-item-value",children:Ge(a.sunriseIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("circle",{cx:"18",cy:"20",r:"10",fill:"#ff8a65"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#4fc3f7"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"सूर्यास्त"}),e.jsx("div",{className:"shubh-item-value",children:Ge(a.sunsetIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("path",{d:"M16,9 A9,9 0 0,0 16,25 A11,11 0 0,1 25,18 A9,9 0 0,0 16,9",fill:"#b0bec5"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"चन्द्रोदय"}),e.jsx("div",{className:"shubh-item-value",children:Ge(a.moonriseIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("path",{d:"M16,9 A9,9 0 0,0 16,25 A11,11 0 0,1 25,18 A9,9 0 0,0 16,9",fill:"none",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"चन्द्रास्त"}),e.jsx("div",{className:"shubh-item-value",children:Ge(a.moonsetIso)})]})]})]})]})]}),e.jsx("div",{className:"other-details-section",children:e.jsxs("div",{className:"other-details-body",children:[e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#1565c0"}),e.jsx("path",{d:"M12,12 Q16,16 12,20 A4,4 0 1,0 20,20 Q16,16 20,12 A4,4 0 1,0 12,12",fill:"none",stroke:"white",strokeWidth:"2"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"अहर्गण"}),e.jsx("div",{className:"detail-value",children:a.ahargana?H(Math.floor(a.ahargana)):"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#e65100"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"}),e.jsx("line",{x1:"16",y1:"13",x2:"16",y2:"17",stroke:"#e65100",strokeWidth:"2"}),e.jsx("line",{x1:"16",y1:"17",x2:"19",y2:"17",stroke:"#e65100",strokeWidth:"2"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"जुलियन दिन"}),e.jsx("div",{className:"detail-value",children:a.julianDay?H(Math.floor(a.julianDay)):"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#00897b"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"नेपाल संवत् (चान्द्र)"}),e.jsx("div",{className:"detail-value",children:a.nepalSambatYear?`${H(a.nepalSambatYear)} ${a.nepalSambatMonthName} ${H(a.nepalSambatDay)}`:"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#d81b60"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"नेपाल संवत् (सौर)"}),e.jsx("div",{className:"detail-value",children:a.nepalSambatSolar?`${H(a.nepalSambatSolar.year)} ${a.nepalSambatSolar.monthNameNe} ${H(a.nepalSambatSolar.day)}`:"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#6d4c41"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"शक वर्ष"}),e.jsx("div",{className:"detail-value",children:a.shakaYear?H(a.shakaYear):"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#43a047"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"कलि वर्ष"}),e.jsx("div",{className:"detail-value",children:a.kaliYear?H(a.kaliYear):"—"})]})]})]})}),e.jsxs("div",{className:"bottom-sections",children:[e.jsxs("div",{className:"special-box",children:[e.jsx("div",{className:"special-header-wrap",children:e.jsx("div",{className:"special-header",children:"आजको विशेष"})}),e.jsxs("div",{className:"special-content",children:[e.jsxs("svg",{className:"special-decor",width:"80",height:"100",viewBox:"0 0 80 100",children:[e.jsx("ellipse",{cx:"40",cy:"75",rx:"20",ry:"8",fill:"#8B4513"}),e.jsx("path",{d:"M25,75 Q25,60 40,55 Q55,60 55,75",fill:"#D2691E"}),e.jsx("ellipse",{cx:"40",cy:"55",rx:"15",ry:"5",fill:"#FFD700"}),e.jsx("path",{d:"M40,55 Q35,40 40,25 Q45,40 40,55",fill:"#FF6600"}),e.jsx("path",{d:"M40,50 Q37,42 40,32 Q43,42 40,50",fill:"#FFD700"}),e.jsx("path",{d:"M40,45 Q38,40 40,35 Q42,40 40,45",fill:"#FFF8DC"}),e.jsx("circle",{cx:"15",cy:"85",r:"8",fill:"#FF69B4"}),e.jsx("circle",{cx:"15",cy:"85",r:"4",fill:"#FFB6C1"}),e.jsx("circle",{cx:"10",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"20",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"10",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"20",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"65",cy:"85",r:"8",fill:"#FF69B4"}),e.jsx("circle",{cx:"65",cy:"85",r:"4",fill:"#FFB6C1"}),e.jsx("circle",{cx:"60",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"70",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"60",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"70",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("ellipse",{cx:"8",cy:"88",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(-30,8,88)"}),e.jsx("ellipse",{cx:"72",cy:"88",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(30,72,88)"})]}),e.jsx("div",{children:W})]})]}),e.jsxs("div",{className:"message-box",children:[e.jsx("div",{className:"message-header-wrap",children:e.jsx("div",{className:"message-header",children:"शुभ सन्देश"})}),e.jsxs("div",{className:"message-content",children:[e.jsxs("svg",{className:"message-decor",width:"70",height:"90",viewBox:"0 0 70 90",children:[e.jsx("path",{d:"M35,15 L25,30 Q20,40 22,55 Q24,65 30,75 L35,80 L40,75 Q46,65 48,55 Q50,40 45,30 Z",fill:"#FDBCB4",stroke:"#E8A090",strokeWidth:"1"}),e.jsx("line",{x1:"35",y1:"20",x2:"35",y2:"75",stroke:"#E8A090",strokeWidth:"1.5"}),e.jsx("path",{d:"M25,35 Q30,32 35,35",fill:"none",stroke:"#E8A090",strokeWidth:"1"}),e.jsx("path",{d:"M45,35 Q40,32 35,35",fill:"none",stroke:"#E8A090",strokeWidth:"1"}),e.jsx("path",{d:"M22,55 Q15,60 10,70 Q8,75 12,78 Q18,75 25,70 Z",fill:"#4169E1"}),e.jsx("path",{d:"M48,55 Q55,60 60,70 Q62,75 58,78 Q52,75 45,70 Z",fill:"#4169E1"})]}),e.jsxs("div",{children:['"',v,'"']}),e.jsxs("svg",{width:"50",height:"60",viewBox:"0 0 50 60",style:{flexShrink:"0"},children:[e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(0,25,20)"}),e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(72,25,20)"}),e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(144,25,20)"}),e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(216,25,20)"}),e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(288,25,20)"}),e.jsx("circle",{cx:"25",cy:"20",r:"5",fill:"#FFD700"}),e.jsx("line",{x1:"25",y1:"32",x2:"25",y2:"55",stroke:"#228B22",strokeWidth:"2"}),e.jsx("ellipse",{cx:"18",cy:"45",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(-30,18,45)"}),e.jsx("ellipse",{cx:"32",cy:"48",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(30,32,48)"})]})]}),e.jsx("div",{className:"message-footer-text",children:"✨ आजको दिन सुखद रहोस् ! ✨"})]})]}),e.jsxs("footer",{className:"sc-footer",children:[e.jsx("div",{style:{backgroundColor:"white",padding:10,borderRadius:12},children:e.jsx("img",{src:za,alt:"NepDate Logo",style:{height:48,objectFit:"contain"}})}),e.jsx("div",{className:"sc-footer-divider"}),e.jsxs("div",{className:"sc-footer-text",children:["विस्तृत पञ्चाङ्ग, राशिफल र शुभ साइतका लागि",e.jsx("br",{}),e.jsx("span",{className:"sc-hl",children:"NepDate नेपाली पात्रो App डाउनलोड गर्नुहोस् ।"})]}),e.jsx("div",{className:"sc-playstore",children:e.jsx("img",{src:Wa,alt:"GET IT ON Google Play",style:{height:80,objectFit:"contain"}})}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"sc-footer-ornament",width:"140",height:"16",viewBox:"0 0 140 16",fill:"none",children:[e.jsx("path",{d:"M140 8C140 12.4183 136.418 16 132 16H8C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0H132C136.418 0 140 3.58172 140 8Z",fill:"white",fillOpacity:"0.1"}),e.jsx("circle",{cx:"70",cy:"8",r:"4",fill:"white",fillOpacity:"0.3"}),e.jsx("circle",{cx:"56",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"}),e.jsx("circle",{cx:"84",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"})]})]})]})})},ka="/assets/left_ornament-CNOcf_Fy.svg",Dt="/assets/mountain_bg-Casg-URl.png",Et=["आइतवार","सोमवार","मंगलवार","बुधवार","बिहीवार","शुक्रवार","शनिवार"],ge=a=>Ea(a),ze=a=>{if(!a)return"";try{const s=new Date(a);if(isNaN(s.getTime()))return"";let t=s.getHours();const f=s.getMinutes();let d="बिहान";return t>=12&&t<16?d="दिउँसो":t>=16&&t<20?d="बेलुका":(t>=20||t<4)&&(d="राति"),t>12&&(t-=12),t===0&&(t=12),`${d} ${ge(t)}:${ge(f<10?"0"+f:f)} सम्म`}catch{return""}},Qe=a=>{if(!a)return"—";try{const s=new Date(a);if(isNaN(s.getTime()))return"—";let t=s.getHours();const f=s.getMinutes();let d="बिहान";return t>=12&&t<16?d="दिउँसो":t>=16&&t<20?d="बेलुका":(t>=20||t<4)&&(d="राति"),t>12&&(t-=12),t===0&&(t=12),`${ge(t)}:${ge(f<10?"0"+f:f)} ${d}`}catch{return"—"}},Na=({data:a,date:s,onLoad:t,variant:f,isOffscreen:d=!1})=>{if(_.useEffect(()=>{if(t){const C=setTimeout(t,500);return()=>clearTimeout(C)}},[t,a]),!a)return null;const p=je(s),l=p?.year?p.year.toString():"0",x=p?.monthName||"",h=p?.day||0,c=Da(s),u=Et[c]||"",i=`${["जनवरी","फेब्रुअरी","मार्च","अप्रिल","मे","जुन","जुलाई","अगस्ट","सेप्टेम्बर","अक्टोबर","नोभेम्बर","डिसेम्बर"][s.getMonth()]} ${ge(s.getDate())}, ${ge(s.getFullYear())}`,y=a.tithis?.[0],b=a.tithis?.[1],n=a.nakshatras?.[0],k=a.nakshatras?.[1],r=a.yogas?.[0],E=a.yogas?.[1],F=a.karanas?.[0],D=a.karanas?.[1];a.moonRashis?.[0];const $=_a(u,y?.name||"",ze(y?.endTime),b?.name||null,r?.name||"",n?.name||null,a.events,a.bhadra);a.ayana==="Uttarayana"||a.ayana==="Dakshinayana"||a.ayana;const W={1:{primary:"#1a237e",secondary:"#c62828",sidebar:"linear-gradient(180deg, #1565c0 0%, #0d47a1 50%, #1a237e 100%)",footer:"linear-gradient(95deg,#0a4f48 0%,#0f7269 22%,#17967f 42%,#4a9f6f 62%,#c9ac4e 82%,#e8bd45 100%)",bg:"linear-gradient(135deg, #f0f2f5, #e8eaed)"},2:{primary:"#4a148c",secondary:"#c2185b",sidebar:"linear-gradient(180deg, #7b1fa2 0%, #6a1b9a 50%, #4a148c 100%)",footer:"linear-gradient(95deg,#4a148c 0%,#6a1b9a 22%,#8e24aa 42%,#ab47bc 62%,#ce93d8 82%,#f48fb1 100%)",bg:"linear-gradient(135deg, #f3e5f5, #fce4ec)"},3:{primary:"#bf360c",secondary:"#b71c1c",sidebar:"linear-gradient(180deg, #e65100 0%, #d84315 50%, #bf360c 100%)",footer:"linear-gradient(95deg,#bf360c 0%,#d84315 22%,#e64a19 42%,#f4511e 62%,#ff8a65 82%,#ffcc80 100%)",bg:"linear-gradient(135deg, #fbe9e7, #fff3e0)"},4:{primary:"#006064",secondary:"#01579b",sidebar:"linear-gradient(180deg, #00838f 0%, #006064 50%, #004d40 100%)",footer:"linear-gradient(95deg,#004d40 0%,#00695c 22%,#00796b 42%,#00897b 62%,#4db6ac 82%,#80cbc4 100%)",bg:"linear-gradient(135deg, #e0f7fa, #e0f2f1)"},5:{primary:"#880e4f",secondary:"#e65100",sidebar:"linear-gradient(180deg, #c2185b 0%, #880e4f 50%, #4a148c 100%)",footer:"linear-gradient(95deg,#b71c1c 0%,#c62828 22%,#d32f2f 42%,#e53935 62%,#ffb300 82%,#ffca28 100%)",bg:"linear-gradient(135deg, #fce4ec, #fbe9e7)"}},v=W[f||1]||W[1];return e.jsx("div",{style:d?{position:"absolute",top:-9999,left:-9999,zIndex:-1,pointerEvents:"none"}:{},children:e.jsxs("div",{id:"panchanga-share-card",className:"poster",style:{"--theme-primary":v.primary,"--theme-secondary":v.secondary,"--theme-sidebar":v.sidebar,"--theme-footer":v.footer,"--theme-bg":v.bg},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
`}}),e.jsx("img",{className:"mountain-bg",src:Dt,alt:"Mountain"}),e.jsx("div",{className:"mountain-overlay"}),e.jsxs("div",{className:"header",children:[e.jsx("div",{className:"logo-section",children:e.jsx("img",{src:Fa,alt:"NepDate Logo",style:{height:60,objectFit:"contain"}})}),e.jsxs("div",{className:"title-section",children:[e.jsxs("div",{className:"main-title",children:[e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"5",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"25",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"5",cy:"15",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"25",cy:"15",r:"2.5",fill:"#c62828"})]}),e.jsx("span",{children:"आजको"}),e.jsx("span",{className:"red",children:"पञ्चाङ्ग"}),e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"5",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"25",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"5",cy:"15",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"25",cy:"15",r:"2.5",fill:"#c62828"})]})]}),e.jsx("div",{className:"title-sub",children:"NepDate - हरेक दिनको विश्वास"})]}),e.jsx("div",{style:{width:"120px"}})]}),e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"center-content",style:{width:"100%"},children:[e.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",marginBottom:"25px",marginTop:"10px"},children:[e.jsx("div",{style:{position:"absolute",left:"0px",top:"50%",transform:"translateY(-50%)",height:"240px",width:"240px",backgroundColor:"var(--theme-primary, #1a237e)",WebkitMaskImage:`url(${ka})`,WebkitMaskSize:"contain",WebkitMaskRepeat:"no-repeat",WebkitMaskPosition:"center",maskImage:`url(${ka})`,maskSize:"contain",maskRepeat:"no-repeat",maskPosition:"center",zIndex:1}}),e.jsxs("div",{className:"date-banner",style:{flexDirection:"column",alignItems:"center",textAlign:"center",padding:"20px 40px",gap:"8px",width:"max-content",margin:"0",position:"relative",zIndex:2},children:[e.jsxs("div",{className:"date-banner-text",children:["विक्रम संवत् ",e.jsx("span",{className:"red",children:ge(l)})," ",x," ",e.jsx("span",{className:"red",children:ge(h)})," गते"]}),e.jsx("div",{className:"date-banner-text",children:e.jsx("span",{className:"red",children:u})}),a.nepalSambatYear&&e.jsxs("div",{className:"date-banner-sub",style:{color:"#1a237e",fontWeight:600},children:["नेपाल संवत् ",ge(a.nepalSambatYear)," ",a.nepalSambatMonthName," ",ge(a.nepalSambatDay)]}),e.jsxs("div",{className:"date-banner-sub",children:["तद्नुसार ",i]})]})]}),e.jsxs("div",{className:"panchang-row",children:[e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("path",{d:"M18,5 A12,12 0 1,0 18,25 A8,8 0 1,1 18,5",fill:"#ffd700"}),e.jsx("circle",{cx:"10",cy:"10",r:"1.5",fill:"white"}),e.jsx("circle",{cx:"20",cy:"15",r:"1",fill:"white"}),e.jsx("circle",{cx:"12",cy:"22",r:"1",fill:"white"})]})}),e.jsx("div",{className:"panchang-box-label",children:"तिथि"}),e.jsx("div",{className:"panchang-box-value",children:y?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:y?.endTime?`(${ze(y.endTime)})`:""}),b?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),b.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"none",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("circle",{cx:"15",cy:"6",r:"2",fill:"#ffd700"}),e.jsx("circle",{cx:"22",cy:"10",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"24",cy:"18",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"20",cy:"24",r:"2",fill:"#ffd700"}),e.jsx("circle",{cx:"12",cy:"24",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"7",cy:"18",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"8",cy:"10",r:"2",fill:"#ffd700"}),e.jsx("line",{x1:"15",y1:"6",x2:"22",y2:"10",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"22",y1:"10",x2:"24",y2:"18",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"24",y1:"18",x2:"20",y2:"24",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"20",y1:"24",x2:"12",y2:"24",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"12",y1:"24",x2:"7",y2:"18",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"7",y1:"18",x2:"8",y2:"10",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"8",y1:"10",x2:"15",y2:"6",stroke:"#ffd700",strokeWidth:"0.8"})]})}),e.jsx("div",{className:"panchang-box-label",children:"नक्षत्र"}),e.jsx("div",{className:"panchang-box-value",children:n?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:n?.endTime?`(${ze(n.endTime)})`:""}),k?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),k.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"8",r:"4",fill:"#ffd700"}),e.jsx("path",{d:"M15,12 L15,20 M10,16 L20,16 M12,20 L15,26 L18,20",stroke:"#ffd700",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),e.jsx("circle",{cx:"15",cy:"15",r:"10",fill:"none",stroke:"#ffd700",strokeWidth:"1",opacity:"0.5"})]})}),e.jsx("div",{className:"panchang-box-label",children:"योग"}),e.jsx("div",{className:"panchang-box-value",children:r?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:r?.endTime?`(${ze(r.endTime)})`:""}),E?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),E.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"#1a237e"}),e.jsx("path",{d:"M15,3 A12,12 0 0,1 15,27 A8,8 0 0,0 15,3",fill:"#ffd700"})]})}),e.jsx("div",{className:"panchang-box-label",children:"करण"}),e.jsx("div",{className:"panchang-box-value",children:F?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:F?.endTime?`(${ze(F.endTime)})`:""}),D?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),D.name," आरम्भ"]}):null]})]})]}),e.jsxs("div",{className:"shubh-horizontal",children:[e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("circle",{cx:"18",cy:"20",r:"10",fill:"#ffd700"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#4fc3f7"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"सूर्योदय"}),e.jsx("div",{className:"shubh-item-value",children:Qe(a.sunriseIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("circle",{cx:"18",cy:"20",r:"10",fill:"#ff8a65"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#4fc3f7"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"सूर्यास्त"}),e.jsx("div",{className:"shubh-item-value",children:Qe(a.sunsetIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("path",{d:"M16,9 A9,9 0 0,0 16,25 A11,11 0 0,1 25,18 A9,9 0 0,0 16,9",fill:"#b0bec5"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"चन्द्रोदय"}),e.jsx("div",{className:"shubh-item-value",children:Qe(a.moonriseIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("path",{d:"M16,9 A9,9 0 0,0 16,25 A11,11 0 0,1 25,18 A9,9 0 0,0 16,9",fill:"none",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"चन्द्रास्त"}),e.jsx("div",{className:"shubh-item-value",children:Qe(a.moonsetIso)})]})]})]})]}),e.jsx("div",{className:"bottom-sections",children:e.jsxs("div",{className:"special-box",children:[e.jsx("div",{className:"special-header-wrap",children:e.jsx("div",{className:"special-header",children:"आजको विशेष"})}),e.jsxs("div",{className:"special-content",children:[e.jsxs("svg",{className:"special-decor",width:"80",height:"100",viewBox:"0 0 80 100",children:[e.jsx("ellipse",{cx:"40",cy:"75",rx:"20",ry:"8",fill:"#8B4513"}),e.jsx("path",{d:"M25,75 Q25,60 40,55 Q55,60 55,75",fill:"#D2691E"}),e.jsx("ellipse",{cx:"40",cy:"55",rx:"15",ry:"5",fill:"#FFD700"}),e.jsx("path",{d:"M40,55 Q35,40 40,25 Q45,40 40,55",fill:"#FF6600"}),e.jsx("path",{d:"M40,50 Q37,42 40,32 Q43,42 40,50",fill:"#FFD700"}),e.jsx("path",{d:"M40,45 Q38,40 40,35 Q42,40 40,45",fill:"#FFF8DC"}),e.jsx("circle",{cx:"15",cy:"85",r:"8",fill:"#FF69B4"}),e.jsx("circle",{cx:"15",cy:"85",r:"4",fill:"#FFB6C1"}),e.jsx("circle",{cx:"10",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"20",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"10",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"20",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"65",cy:"85",r:"8",fill:"#FF69B4"}),e.jsx("circle",{cx:"65",cy:"85",r:"4",fill:"#FFB6C1"}),e.jsx("circle",{cx:"60",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"70",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"60",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"70",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("ellipse",{cx:"8",cy:"88",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(-30,8,88)"}),e.jsx("ellipse",{cx:"72",cy:"88",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(30,72,88)"})]}),e.jsx("div",{children:$})]})]})}),e.jsxs("footer",{className:"sc-footer",children:[e.jsx("div",{style:{backgroundColor:"white",padding:10,borderRadius:12},children:e.jsx("img",{src:za,alt:"NepDate Logo",style:{height:48,objectFit:"contain"}})}),e.jsx("div",{className:"sc-footer-divider"}),e.jsxs("div",{className:"sc-footer-text",style:{fontSize:"24px",letterSpacing:"-0.5px"},children:["विस्तृत पञ्चाङ्ग, राशिफल र शुभ साइतका लागि",e.jsx("br",{}),e.jsx("span",{className:"sc-hl",children:"NepDate नेपाली पात्रो App डाउनलोड गर्नुहोस् ।"})]}),e.jsx("div",{className:"sc-playstore",children:e.jsx("img",{src:Wa,alt:"GET IT ON Google Play",style:{height:80,objectFit:"contain"}})}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"sc-footer-ornament",width:"140",height:"16",viewBox:"0 0 140 16",fill:"none",children:[e.jsx("path",{d:"M140 8C140 12.4183 136.418 16 132 16H8C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0H132C136.418 0 140 3.58172 140 8Z",fill:"white",fillOpacity:"0.1"}),e.jsx("circle",{cx:"70",cy:"8",r:"4",fill:"white",fillOpacity:"0.3"}),e.jsx("circle",{cx:"56",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"}),e.jsx("circle",{cx:"84",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"})]})]})]})})},Sa=({icon:a,title:s})=>e.jsxs("div",{className:"flex items-center gap-2 mb-3 mt-6 first:mt-0 pb-1 border-b border-gray-200 dark:border-gray-700/50",children:[e.jsx("div",{className:"p-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg shadow-sm",children:_.cloneElement(a,{className:"w-3.5 h-3.5 text-blue-600 dark:text-blue-400"})}),e.jsx("h3",{className:"text-sm font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 font-devanagari",children:s})]}),Ze=({label:a,value:s,className:t="",icon:f})=>e.jsxs("div",{className:`bg-white dark:bg-gray-800/40 rounded-xl p-3 border border-gray-100 dark:border-gray-700/50 shadow-sm transition-all hover:shadow-md flex items-center gap-3 ${t}`,children:[f&&e.jsx("div",{className:"shrink-0",children:f}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[13px] text-gray-600 dark:text-gray-300 font-devanagari mb-0.5 uppercase tracking-tight",children:a}),e.jsx("div",{className:"text-base font-bold text-gray-900 dark:text-white font-devanagari leading-none",children:s})]})]}),fe=({label:a,value:s,compact:t=!1})=>e.jsx("div",{className:`px-4 border-b border-gray-100 dark:border-gray-700/30 last:border-0 ${t?"py-1.5":"py-2.5"}`,children:e.jsxs("div",{className:"flex justify-between items-center text-base",children:[e.jsxs("span",{className:"text-gray-600 dark:text-gray-300 font-medium font-devanagari text-sm",children:[a,":"]}),e.jsx("div",{className:"text-gray-900 dark:text-white font-bold font-devanagari text-right",children:s||"-"})]})}),Te=({elements:a,baseDate:s,timezoneId:t,offset:f,astroType:d,sunriseIso:p,nextSunriseIso:l})=>{const{t:x,tAstro:h,language:c,n:u}=he();return!a||a.length===0?null:e.jsx("div",{className:"px-4 pt-1 pb-2 border-b border-gray-200 dark:border-gray-700/50",children:a.map((g,i)=>{const y=g.startTime?Ee(g.startTime,s,t||"Asia/Kathmandu",c,u,{showSeconds:!0,showVedicDayBracket:!0,sunriseIso:p,nextSunriseIso:l,t:x}):null,b=g.endTime?Ee(g.endTime,s,t||"Asia/Kathmandu",c,u,{showSeconds:!0,showVedicDayBracket:!0,sunriseIso:p,nextSunriseIso:l,t:x}):null;return!y&&!b?null:e.jsxs("div",{className:"mt-1.5",children:[e.jsxs("strong",{className:"text-base text-gray-800 dark:text-white font-devanagari",children:[d&&g.name?h(g.name,d):g.name,d==="tithi"&&g.isKshaya&&e.jsxs("span",{className:"ml-1 text-red-500 text-xs",children:["(",x("kshaya"),")"]}),d==="tithi"&&g.isVriddhi&&e.jsxs("span",{className:"ml-1 text-green-500 text-xs",children:["(",x("vriddhi"),")"]})]}),e.jsx("div",{className:"flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-gray-600 dark:text-gray-400 mt-1 gap-y-1 sm:gap-x-4 font-devanagari",children:y&&b?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-baseline gap-1.5",children:[e.jsxs("span",{className:"font-bold shrink-0 opacity-90",children:[x("startsOn"),":"]}),e.jsx("span",{className:"text-gray-900 dark:text-gray-200",children:y})]}),e.jsxs("div",{className:"flex items-baseline gap-1.5 sm:text-right",children:[e.jsxs("span",{className:"font-bold shrink-0 opacity-90",children:[x("endsOn"),":"]}),e.jsx("span",{className:"text-gray-900 dark:text-gray-200",children:b})]})]}):y?e.jsxs("div",{className:"flex items-baseline gap-1.5",children:[e.jsxs("span",{className:"font-bold shrink-0 opacity-70",children:[x("startsOn"),":"]}),e.jsx("span",{className:"text-gray-900 dark:text-gray-200",children:y})]}):b?e.jsxs("div",{className:"flex items-baseline gap-1.5",children:[e.jsxs("span",{className:"font-bold shrink-0 opacity-70",children:[x("endsOn"),":"]}),e.jsx("span",{className:"text-gray-900 dark:text-gray-200",children:b})]}):null})]},i)})})},At=({sequence:a,baseDate:s,timezoneId:t,offset:f,sunriseIso:d,nextSunriseIso:p})=>{const{language:l,t:x,n:h}=he();return!a||a.length===0?null:e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400",children:[e.jsx(Je,{className:"w-3 h-3"}),x("anandadiYogaSequence")]}),e.jsx("div",{className:"relative pl-6 space-y-4 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-200 dark:before:bg-gray-700",children:a.map((c,u)=>{const g=c.startTime?Ee(c.startTime,s,t||"Asia/Kathmandu",l,h,{showSeconds:!0,showVedicDayBracket:!0,sunriseIso:d,nextSunriseIso:p,t:x}):x("fromSunrise"),i=c.endTime?Ee(c.endTime,s,t||"Asia/Kathmandu",l,h,{showSeconds:!0,showVedicDayBracket:!0,sunriseIso:d,nextSunriseIso:p,t:x}):x("untilSunrise"),y=l==="ne"?c.nameNe:l==="hi"?c.nameHi:c.nameEn,b=c.isAuspicious?"text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/20":"text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-900/20",n=c.isAuspicious?"bg-emerald-500":"bg-rose-500";return e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:`absolute -left-[20px] top-1.5 w-3 h-3 rounded-full border-2 border-white dark:border-gray-900 ${n}`}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-1",children:[e.jsx("span",{className:`px-2 py-0.5 rounded text-sm font-bold font-devanagari self-start ${b}`,children:y}),e.jsxs("span",{className:"text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2",children:[g," ",e.jsx("span",{className:"opacity-40",children:"—"})," ",i]})]}),e.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[e.jsxs("div",{className:"flex items-center gap-1.5 text-slate-800 dark:text-slate-200",children:[e.jsxs("span",{className:"font-bold opacity-70",children:[x("netrama"),":"]}),e.jsx("span",{className:"font-bold",children:h(c.netra)})]}),e.jsxs("div",{className:"flex items-center gap-1.5 text-slate-800 dark:text-slate-200",children:[e.jsxs("span",{className:"font-bold opacity-70",children:[x("jeevanama"),":"]}),e.jsx("span",{className:"font-bold",children:h(c.jeeva)})]})]})]})]},u)})})]})},Lt=({date:a,onClose:s,variant:t="modal",activeSystem:f="bs",onTimelineClick:d,onNavigate:p})=>{const{location:l,isStashLoaded:x,useElevation:h,ayanamsaMethod:c,engineType:u,isTopocentric:g}=Oe(),{t:i,tAstro:y,n:b,language:n}=he(),k=h&&l.elevation||0,r=o.useMemo(()=>Aa(a,l.latitude,l.longitude,l.offset,n,l.zoneId,x,k,c,u,g),[a,l.latitude,l.longitude,l.offset,n,l.zoneId,x,k,c,u,g]),E=r?.sunriseMs?new Date(r.sunriseMs):r?.sunriseIso?new Date(r.sunriseIso):null,F=r?.nextSunriseMs?new Date(r.nextSunriseMs):r?.nextSunriseIso?new Date(r.nextSunriseIso):null,D=w=>!w||!F||!E?w:w.filter(B=>{const V=B.startTime?new Date(B.startTime):null,Z=B.endTime?new Date(B.endTime):null;return!(Z&&Z<=E||V&&V>=F)}),$=D(r?.tithis||[]),W=D(r?.nakshatras||[]),v=D(r?.yogas||[]),C=D(r?.karanas||[]),K=D(r?.sunRashis||[]),O=D(r?.moonRashis||[]),X=D(r?.bhadraTiming||[]),z=r?.bhadra,J=t==="page",ee=J?"bg-white dark:bg-gray-800 w-full mx-auto rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden":"bg-slate-200 dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full ring-1 ring-transparent dark:ring-gray-700/80 dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-sm mx-auto",L=J?"bg-white/95 dark:bg-gray-800/95 border-b border-gray-200 dark:border-gray-700 p-4 rounded-t-2xl":"sticky top-0 bg-slate-200 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 rounded-t-2xl z-10 transition-all shadow-sm",T=new Date().toDateString()===a.toDateString(),[ie,xe]=_.useState(new Date);_.useEffect(()=>{if(T){const w=setInterval(()=>xe(new Date),6e4);return()=>clearInterval(w)}},[T]);const le=T&&r?.sunriseIso?xt(ie,new Date(r.sunriseIso)):null,ae=le?i("ghadiUnits").replace("{0}",b(le.ghatis)).replace("{1}",b(le.palas)):null;(()=>{if(!r.sunriseIso||!r.sunsetIso)return null;const w=new Date(r.sunsetIso).getTime()-new Date(r.sunriseIso).getTime();if(w<=0)return null;const B=Math.floor(w/36e5),V=Math.floor(w%36e5/6e4);return`${b(B)} ${i("hour")} ${b(V)} ${i("minute")}`})();const j=w=>{if(w===void 0)return"";const B=Math.round(w*3600),V=Math.floor(B/3600),Z=Math.floor(B%3600/60);return`${b(V)}°${b(Z)}′`},[I,N]=o.useState(null);o.useEffect(()=>{r.sunriseIso?ht.getKundali({name:"Sunrise",datetime:r.sunriseIso,latitude:l.latitude,longitude:l.longitude,zoneId:l.zoneId,offset:l.offset,locationName:l.name,engine:u,options:{zodiac:"SIDEREAL",ayanamsa:c.toUpperCase(),houseSystem:"WHOLE_SIGN",divisionalCharts:[9],dashaSystem:"VIMSHOTTARI"}}).then(w=>{N(w)}).catch(w=>console.error("Error creating sunrise kundali",w)):N(null)},[r.sunriseIso,l,u,c]);const[M,A]=_.useState(!1);_.useEffect(()=>{A(!!(typeof navigator<"u"&&navigator.share))},[]);const q=async()=>{try{let w=Re(),B="";if(f==="bs"){const Z=je(a);B=`${Z.year}-${Z.monthIndex+1<10?"0":""}${Z.monthIndex+1}-${Z.day<10?"0":""}${Z.day}`,w+=`bs?${B}`}else B=`${a.getFullYear()}-${a.getMonth()+1<10?"0":""}${a.getMonth()+1}-${a.getDate()<10?"0":""}${a.getDate()}`,w+=`ad?${B}`;const V=La(w);window.Android&&typeof window.Android.share=="function"?window.Android.share(`Nepdate - ${B}`,`Check out the details for ${B}`,V):M&&navigator.share?await navigator.share({title:`Nepdate - ${B}`,text:`Check out the details for ${B}`,url:V}):(await navigator.clipboard.writeText(V),oe.success("Link copied to clipboard!"))}catch{oe.error("Failed to share")}},[R,ne]=_.useState(!1),[U,te]=_.useState("social"),[me,se]=_.useState(!1),[re,pe]=_.useState(!1),[ve,Ue]=_.useState(null),[Ve,Ye]=_.useState(null),aa=()=>{pe(!0)},ta=w=>{Ye(w),pe(!1),ne(!0),se(!1)};_.useEffect(()=>{R&&me&&sa()},[R,me]);const sa=async()=>{try{await new Promise(Y=>setTimeout(Y,300));const w=document.getElementById("panchanga-share-card");if(!w)return;const{domToBlob:B}=await Me(async()=>{const{domToBlob:Y}=await import("./vendor-other-DoP2BRe1.js").then(ce=>ce.G);return{domToBlob:Y}},__vite__mapDeps([0,1])),V=`Panchanga-${a.getFullYear()}-${a.getMonth()+1}-${a.getDate()}.png`,Z=await B(w,{scale:typeof window<"u"&&window.devicePixelRatio>2?1:1.5,backgroundColor:"rgba(0,0,0,0)",filter:Y=>{const ce=Y.tagName?.toLowerCase();return ce!=="script"&&ce!=="link"&&ce!=="iframe"}});if(!Z)throw new Error("Failed to generate image blob");if(window.Android?.shareImage&&typeof window.Android.isAndroidApp=="function"&&window.Android.isAndroidApp())try{const Y=new FileReader;Y.readAsDataURL(Z),Y.onloadend=()=>{const ce=Y.result;window.Android.shareImage("आजको पञ्चाङ्ग",V,ce)};return}catch(Y){console.error("Android image bridge failed",Y)}if(navigator.share&&navigator.canShare)try{const Y=new File([Z],V,{type:"image/png"});if(navigator.canShare({files:[Y]})){await navigator.share({files:[Y],title:"आजको पञ्चाङ्ग - NepDate",text:"आजको पञ्चाङ्ग | NepDate नेपाली पात्रो"});return}}catch(Y){console.error("Web Share failed, falling back to download",Y)}const ke=URL.createObjectURL(Z),ue=document.createElement("a");ue.href=ke,ue.download=V,ue.click(),setTimeout(()=>URL.revokeObjectURL(ke),1e3)}catch(w){console.error("Share failed",w),oe.error("Failed to generate image")}finally{ne(!1),se(!1),Ye(null)}},we=(()=>{if(!r.sunriseIso||!r.sunsetIso||!r.nextSunriseIso)return{dinamanaGp:null,dinamanaHm:null,ratrimanaGp:null,ratrimanaHm:null};const w=r.sunriseMs??new Date(r.sunriseIso).getTime(),B=r.sunsetMs??new Date(r.sunsetIso).getTime(),V=r.nextSunriseMs??new Date(r.nextSunriseIso).getTime(),Z=V-w,ke=B-w,ue=V-B,Y=Ae=>{const be=Ae/Z*60,De=Math.floor(be),Le=Math.floor((be-De)*60);return i("ghadiUnits").replace("{0}",b(De)).replace("{1}",b(Le))},ce=Ae=>{const be=Math.floor(Ae/6e4),De=Math.floor(be/60),Le=be%60;return`${b(De)} ${i("hour")} ${b(Le)} ${i("minute")}`};return{dinamanaGp:Y(ke),dinamanaHm:ce(ke),ratrimanaGp:Y(ue),ratrimanaHm:ce(ue)}})(),Ce=w=>w?w.replace(/\d+/g,B=>b(B)):"",na=`${y(r.lunarMonth,"lunarMonth")} • ${y(r.paksha,"paksha")} • ${y(r.tithi.name,"tithi")}`;return e.jsxs("div",{className:ee,children:[e.jsx("div",{className:L,children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-gray-900 dark:text-white font-devanagari flex items-center gap-2",children:[e.jsx("span",{className:"text-blue-600 dark:text-blue-400",children:y(r.weekday,"weekday")}),e.jsx("span",{className:"text-gray-300 dark:text-gray-600",children:"|"}),(()=>{const w=je(a);return`${b(w.year)} ${y(w.monthName,"month")} ${b(w.day)}`})()]}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium",children:r.gregorianDate})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:q,className:"p-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400",children:M?e.jsx(We,{size:18}):e.jsx(Ya,{size:18})}),s&&!J&&e.jsx("button",{onClick:s,className:"p-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors text-gray-500",children:e.jsx(ma,{size:18})})]})]})}),e.jsxs("div",{className:"p-5 space-y-8 pb-20 overflow-x-hidden",children:[e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2.5 px-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest",children:i("riseSetTimings")}),e.jsx("span",{className:"text-[10px] bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded font-bold border border-amber-200/50 dark:border-amber-800/30",children:!l.name||l.name==="Custom Location"?`${b(l.latitude)}°N, ${b(l.longitude)}°E`:`${n==="en"&&l.romanization||l.name}`})]}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[e.jsx(Ze,{label:i("sunrise"),value:Ee(r.sunriseIso,a,l.zoneId,n,b,{truncateToMinute:!0})||"N/A",icon:e.jsx(Ie,{className:"w-5 h-5 text-amber-500"}),className:"bg-orange-50/40 dark:bg-orange-950/20 border-orange-100/50 dark:border-orange-900/30"}),e.jsx(Ze,{label:i("sunset"),value:Ee(r.sunsetIso,a,l.zoneId,n,b,{truncateToMinute:!0})||"N/A",icon:e.jsx(Ie,{className:"w-5 h-5 text-amber-600"}),className:"bg-indigo-50/40 dark:bg-indigo-950/20 border-indigo-100/50 dark:border-indigo-900/30"}),e.jsx(Ze,{label:i("moonrise"),value:r.moonrise?Ce(r.moonrise):"N/A",icon:e.jsx(ye,{className:"w-5 h-5 text-indigo-400"})}),e.jsx(Ze,{label:i("moonset"),value:r.moonset?Ce(r.moonset):"N/A",icon:e.jsx(ye,{className:"w-5 h-5 text-blue-400"})})]}),e.jsxs("div",{className:"mt-4 bg-white dark:bg-gray-800/40 rounded-2xl border border-gray-100 dark:border-gray-700/50 overflow-hidden shadow-sm",children:[e.jsxs("div",{className:"px-4 py-3 border-b border-gray-100 dark:border-gray-700/30 flex items-center justify-center gap-3 bg-gray-50/50 dark:bg-gray-900/20 group",children:[e.jsx(ye,{className:"w-4 h-4 text-blue-500 group-hover:animate-pulse"}),e.jsx("span",{className:"text-sm font-bold text-gray-700 dark:text-gray-200 font-devanagari tracking-wide",children:na})]}),e.jsxs("div",{className:`p-4 grid ${ae?"grid-cols-3":"grid-cols-2"} gap-2 sm:gap-6`,children:[ae&&e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx(Je,{className:"w-3.5 h-3.5 text-blue-500 mb-1"}),e.jsx("span",{className:"text-[11px] uppercase tracking-tighter text-gray-500 mb-0.5 whitespace-nowrap",children:i("currentGhati")||"स्वयम् घटी"}),e.jsx("span",{className:"text-sm sm:text-base font-bold font-devanagari leading-none",children:ae})]}),e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx(Ie,{className:"w-3.5 h-3.5 text-amber-500 mb-1"}),e.jsx("span",{className:"text-[11px] uppercase tracking-tighter text-gray-600 dark:text-gray-300 mb-0.5 whitespace-nowrap",children:i("dinamana")||"दिनमान"}),e.jsx("span",{className:"text-sm sm:text-base font-bold font-devanagari leading-none",children:we.dinamanaGp}),e.jsxs("span",{className:"text-[11px] text-gray-400 font-medium tracking-tighter leading-none mt-0.5",children:["(",we.dinamanaHm,")"]})]}),e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx(ye,{className:"w-3.5 h-3.5 text-indigo-400 mb-1"}),e.jsx("span",{className:"text-[11px] uppercase tracking-tighter text-gray-600 dark:text-gray-300 mb-0.5 whitespace-nowrap",children:i("ratrimana")||"रात्रिमान"}),e.jsx("span",{className:"text-sm sm:text-base font-bold font-devanagari leading-none",children:we.ratrimanaGp}),e.jsxs("span",{className:"text-[11px] text-gray-400 font-medium tracking-tighter leading-none mt-0.5",children:["(",we.ratrimanaHm,")"]})]})]})]})]}),e.jsxs("section",{children:[e.jsx(Sa,{icon:e.jsx(Ha,{}),title:i("eraAndSeason")}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/30 rounded-2xl p-4 border border-gray-100 dark:border-gray-700/50 space-y-1",children:[e.jsxs("div",{className:"px-1 py-1 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between group",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 bg-purple-50 dark:bg-purple-900/30 rounded-xl group-hover:scale-110 transition-transform",children:e.jsx(ye,{size:16,className:"text-purple-600 dark:text-purple-400"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[11px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-black mb-0.5",children:i("nepalSambat")}),e.jsxs("div",{className:"text-base font-bold text-gray-900 dark:text-white font-devanagari leading-none",children:[b(r.nepalSambatYear)," ",r.nepalSambatMonthName," ",b(r.nepalSambatDay)]})]})]}),e.jsx("div",{className:"text-right"})]}),e.jsx("div",{className:"flex items-center justify-between group",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 bg-amber-50 dark:bg-amber-900/30 rounded-xl group-hover:scale-110 transition-transform",children:e.jsx(Ie,{size:16,className:"text-amber-600 dark:text-amber-400"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[11px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-black mb-0.5",children:i("nepalSambatSolar")}),e.jsxs("div",{className:"text-base font-bold text-gray-900 dark:text-white font-devanagari leading-none",children:[b(r.nepalSambatSolar.year)," ",n==="ne"||n==="hi"?r.nepalSambatSolar.monthNameNe:r.nepalSambatSolar.monthNameEn," ",b(r.nepalSambatSolar.day)]})]})]})})]}),e.jsxs("div",{className:"pt-2 border-t border-gray-100 dark:border-gray-700/30",children:[e.jsx(fe,{label:i("shakaYear"),value:b(r.shakaYear),compact:!0}),e.jsx(fe,{label:i("kaliYear"),value:b(r.kaliYear),compact:!0})]})]}),e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/30 rounded-2xl p-4 border border-gray-100 dark:border-gray-700/50 space-y-1",children:[e.jsx(fe,{label:i("samvatsar"),value:r.isSamvatsarTransitioning?e.jsxs("div",{className:"flex flex-col items-end gap-1",children:[e.jsx("span",{className:"text-[11px] text-gray-500 line-through decoration-red-500/40",children:y(r.lunarSamvatsar,"samvatsar")}),e.jsx("span",{className:"text-sm text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/20 px-1.5 py-0.5 rounded leading-none transition-all duration-700 animate-pulse",children:y(r.samvatsar,"samvatsar")})]}):y(r.samvatsar,"samvatsar"),compact:!0}),e.jsx(fe,{label:i("ritu"),value:y(r.ritu,"ritu"),compact:!0}),e.jsx(fe,{label:i("ayana"),value:y(r.ayana,"ayana"),compact:!0}),e.jsx(fe,{label:i("ahargan"),value:b(Math.floor(r.ahargana)),compact:!0})]})]}),r.isSamvatsarTransitioning&&e.jsxs("div",{className:"mt-3 px-4 py-3 bg-blue-50/50 dark:bg-blue-900/10 border-l-4 border-blue-500 rounded-r-2xl shadow-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[e.jsx("div",{className:"p-1 bg-blue-100 dark:bg-blue-800 rounded-full",children:e.jsx(Ka,{className:"w-2.5 h-2.5 text-blue-600 dark:text-blue-300"})}),e.jsx("h4",{className:"text-sm font-bold text-blue-900 dark:text-blue-100 font-devanagari",children:i("jovianYearCorrection")})]}),e.jsx("p",{className:"text-xs leading-relaxed text-blue-800/80 dark:text-blue-200/80 font-medium",children:i("jovianYearCorrectionDesc")})]})]}),e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-3 px-1",children:[e.jsxs("div",{className:"flex items-center gap-2 pb-1 border-b border-gray-200 dark:border-gray-700/50 flex-1",children:[e.jsx("div",{className:"p-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg shadow-sm",children:e.jsx(Ga,{className:"w-3.5 h-3.5 text-blue-600 dark:text-blue-400"})}),e.jsx("h3",{className:"text-sm font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 font-devanagari",children:i("panchanga")})]}),e.jsxs("div",{className:"flex items-center gap-2 ml-4",children:[e.jsxs("button",{onClick:()=>{s?.(),p?.("timeline")},className:"text-[11px] text-blue-600 dark:text-blue-400 font-bold hover:underline flex items-center gap-1 bg-blue-50 dark:bg-blue-800/10 px-2 py-1 rounded border border-blue-100/50 dark:border-blue-800/10",children:[e.jsx(Qa,{size:10}),e.jsx("span",{children:i("timeline")})]}),e.jsxs("button",{onClick:()=>{s?.(),p?.("daily-saait")},className:"text-[11px] text-orange-600 dark:text-orange-400 font-bold hover:underline flex items-center gap-1 bg-orange-50 dark:bg-orange-800/10 px-2 py-1 rounded border border-orange-100/50 dark:border-orange-800/10",children:[e.jsx(Je,{size:10}),e.jsx("span",{children:i("shubha_ashubha_saait")})]})]})]}),e.jsx("div",{className:"px-4 mb-3",children:e.jsxs("div",{className:"flex items-start gap-2 p-2 bg-amber-50/50 dark:bg-amber-900/10 border border-amber-100/50 dark:border-amber-800/20 rounded-xl",children:[e.jsx(ia,{className:"w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5"}),e.jsx("p",{className:"text-xs leading-tight text-amber-700 dark:text-amber-300 font-medium font-devanagari",children:i("tithiWarning")})]})}),e.jsxs("div",{className:"bg-white dark:bg-gray-800/40 rounded-2xl border border-gray-100 dark:border-gray-700/50 overflow-hidden shadow-sm",children:[e.jsx(fe,{label:i("tithi"),value:y(r.tithi.name,"tithi")}),e.jsx(Te,{elements:$,baseDate:a,timezoneId:l.zoneId,offset:l.offset,astroType:"tithi",sunriseIso:r.sunriseIso,nextSunriseIso:r.nextSunriseIso}),e.jsx(fe,{label:i("nakshatra"),value:y(r.nakshatra.name,"nakshatra")}),e.jsx(Te,{elements:W,baseDate:a,timezoneId:l.zoneId,offset:l.offset,astroType:"nakshatra",sunriseIso:r.sunriseIso,nextSunriseIso:r.nextSunriseIso}),e.jsx(fe,{label:i("yoga"),value:y(r.yoga.name,"yoga")}),e.jsx(Te,{elements:v,baseDate:a,timezoneId:l.zoneId,offset:l.offset,astroType:"yoga",sunriseIso:r.sunriseIso,nextSunriseIso:r.nextSunriseIso}),e.jsx(fe,{label:i("karana"),value:y(r.karana.name,"karana")}),e.jsx(Te,{elements:C,baseDate:a,timezoneId:l.zoneId,offset:l.offset,astroType:"karana",sunriseIso:r.sunriseIso,nextSunriseIso:r.nextSunriseIso}),e.jsxs("div",{className:"grid grid-cols-2 bg-gray-50/50 dark:bg-gray-900/40 border-t border-gray-100 dark:border-gray-700/50 divide-x divide-gray-100 dark:divide-gray-700/50",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"px-4 py-2 text-[11px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700/30 bg-gray-100/30 dark:bg-gray-800/20",children:i("sunTransit")}),e.jsx(Te,{elements:K,baseDate:a,timezoneId:l.zoneId,offset:l.offset,astroType:"rashi",sunriseIso:r.sunriseIso,nextSunriseIso:r.nextSunriseIso})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"px-4 py-2 text-[11px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700/30 bg-gray-100/30 dark:bg-gray-800/20",children:i("moonTransit")}),e.jsx(Te,{elements:O,baseDate:a,timezoneId:l.zoneId,offset:l.offset,astroType:"rashi",sunriseIso:r.sunriseIso,nextSunriseIso:r.nextSunriseIso})]})]}),r.anandadiYoga&&e.jsxs("div",{className:"bg-blue-50/30 dark:bg-blue-900/10 p-3.5 border-t border-gray-100 dark:border-gray-700/50",children:[e.jsxs("div",{className:"text-[13px] text-gray-500 uppercase tracking-widest mb-1 flex items-center gap-1.5",children:[e.jsx(pa,{className:"w-3 h-3 text-blue-500"})," ",i("anandadiYoga")]}),e.jsx("div",{className:"text-base font-bold font-devanagari",children:n==="en"?r.anandadiYoga.nameEn:r.anandadiYoga.nameNe})]})]}),r.anandadiSequence&&r.anandadiSequence.length>0&&e.jsx(At,{sequence:r.anandadiSequence,baseDate:a,timezoneId:l.zoneId,offset:l.offset,sunriseIso:r.sunriseIso,nextSunriseIso:r.nextSunriseIso})]}),I&&e.jsxs("section",{children:[e.jsx(Sa,{icon:e.jsx(ha,{}),title:i("sunriseKundali")}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-start",children:[e.jsx("div",{className:"flex justify-center bg-white dark:bg-gray-800/40 rounded-3xl p-6 border border-gray-100 dark:border-gray-700 shadow-inner",children:e.jsx(mt,{planets:I.planets,ascendantSign:I.ascendant.sign,ascendantDegrees:I.ascendant.degreesInSign,ascendantNakshatra:I.ascendant.nakshatra,ascendantNakshatraPada:I.ascendant.nakshatraPada,chartType:"lagna",chartStyle:"north",lang:n})}),e.jsx("div",{className:"overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700/50 shadow-sm bg-white dark:bg-gray-800/20",children:e.jsxs("table",{className:"w-full text-left border-collapse text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700",children:[e.jsx("th",{className:"py-3 px-4 text-gray-600 dark:text-gray-300 font-bold uppercase tracking-wider",children:i("planet")}),e.jsx("th",{className:"py-3 px-4 text-gray-600 dark:text-gray-300 font-bold uppercase tracking-wider",children:i("rashi")}),e.jsx("th",{className:"py-3 px-4 text-gray-600 dark:text-gray-300 font-bold uppercase tracking-wider text-right",children:i("degree")})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-100 dark:divide-gray-700/30",children:[e.jsxs("tr",{className:"bg-blue-50/30 dark:bg-blue-900/10 font-bold",children:[e.jsx("td",{className:"py-3 px-4 text-blue-600 dark:text-blue-400",children:y("Lagna","planet")}),e.jsx("td",{className:"py-3 px-4",children:y(ba[I.ascendant.sign],"rashi")}),e.jsx("td",{className:"py-3 px-4 text-right font-mono opacity-80",children:j(I.ascendant.degreesInSign)})]}),I.planets.map(w=>e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors",children:[e.jsxs("td",{className:"py-2.5 px-4 font-medium flex items-center gap-2",children:[y(w.planet,"planet"),w.retrograde&&e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_5px_rgba(244,63,94,0.5)]",title:"Retrograde"})]}),e.jsx("td",{className:"py-2.5 px-4",children:y(ba[w.rashi],"rashi")}),e.jsx("td",{className:"py-2.5 px-4 text-right font-mono opacity-80",children:j(w.degreesInSign)})]},w.planet))]})]})})]})]}),e.jsxs("section",{className:"space-y-4",children:[z&&z.isActiveCivil&&e.jsxs("div",{className:`p-4 rounded-2xl border flex items-start gap-4 ${z.isHarmful?"bg-rose-50 dark:bg-rose-950/20 border-rose-200/50 text-rose-900 dark:text-rose-100":"bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200/50 text-emerald-900 dark:text-emerald-100"}`,children:[e.jsx(ia,{className:"w-5 h-5 shrink-0 mt-0.5 opacity-80"}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("h4",{className:"font-bold text-base font-devanagari",children:[i("bhadraVisti")," ",i("active")]}),e.jsx("span",{className:`text-[11px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest ${z.isHarmful?"bg-rose-100 dark:bg-rose-900/50":"bg-emerald-100 dark:bg-emerald-900/50"}`,children:i(z.status)})]}),e.jsx(Te,{elements:X,baseDate:a,timezoneId:l.zoneId,offset:l.offset,sunriseIso:r.sunriseIso,nextSunriseIso:r.nextSunriseIso}),e.jsxs("p",{className:"text-sm mt-2 font-medium",children:[i("bhadraResidenceLabel"),": ",e.jsx("span",{className:"ml-1 font-bold",children:i(z.residence)})]})]})]}),r.events&&r.events.length>0&&e.jsxs("div",{className:"bg-emerald-50/40 dark:bg-emerald-950/20 rounded-2xl p-5 border border-emerald-100/50 dark:border-emerald-900/30",children:[e.jsxs("h3",{className:"text-sm font-black mb-4 text-emerald-800 dark:text-emerald-300 font-devanagari flex items-center gap-2 uppercase tracking-widest",children:[e.jsx(pa,{className:"w-4 h-4"})," ",i("todayEvents")]}),e.jsx("div",{className:"space-y-4",children:r.events.map((w,B)=>e.jsxs("div",{className:"flex items-start gap-3 group",children:[e.jsx("div",{className:"mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 group-hover:scale-150 transition-transform"}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("strong",{className:"text-base text-gray-900 dark:text-white font-bold font-devanagari",children:w.name}),w.holiday&&e.jsx("span",{className:"bg-rose-50 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 text-[11px] font-black px-1.5 py-0.5 rounded uppercase",children:i("holiday")})]}),w.detail&&e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed",children:w.detail})]})]},B))})]}),e.jsxs("div",{className:"p-5 bg-white dark:bg-gray-800/40 rounded-2xl border border-gray-100 dark:border-gray-700/50 text-sm text-gray-600 dark:text-gray-300 space-y-3 shadow-inner",children:[e.jsxs("div",{className:"flex justify-between items-center px-1",children:[e.jsx("span",{children:i("usedEngine")}),e.jsx("span",{className:"font-bold text-gray-800 dark:text-gray-200",children:r.engine==="surya_siddhanta"?i("traditionalEngine"):r.engine==="analytical"?i("analyticalEngine"):i("modernEngine")})]}),e.jsxs("div",{className:"flex justify-between items-center px-1",children:[e.jsx("span",{children:i("ayanamsaMethod")}),e.jsx("span",{className:"font-bold text-gray-800 dark:text-gray-200",children:i(r.ayanamsaMethod)})]}),r.ayanamsaValue!==void 0&&r.ayanamsaValue!==0&&e.jsxs("div",{className:"flex justify-between items-center px-1 text-xs opacity-80 italic",children:[e.jsx("span",{children:i("liveAyanamsa")}),e.jsxs("span",{className:"font-mono",children:[r.ayanamsaValue.toFixed(6),"°"]})]}),e.jsx("div",{className:"pt-3 border-t border-gray-100 dark:border-gray-700/50",children:e.jsx("p",{className:"leading-relaxed text-xs opacity-75 italic text-center px-2",children:i("nepalPanchangaInfo")})}),r.engine==="surya_siddhanta"&&e.jsxs("div",{className:"mt-3 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200/50 dark:border-amber-800/50 rounded-xl flex gap-3 shadow-sm",children:[e.jsx(ia,{className:"w-5 h-5 text-amber-500 shrink-0 mt-0.5"}),e.jsx("p",{className:"text-xs leading-relaxed text-amber-800 dark:text-amber-200 font-medium italic",children:i("surya_siddhanta_warning")})]})]}),e.jsxs("button",{onClick:aa,disabled:R||re,className:"w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors",children:[R||re?e.jsx(Xe,{className:"w-5 h-5 animate-spin"}):e.jsx(We,{className:"w-5 h-5"}),e.jsx("span",{children:"पञ्चाङ्ग सेयर गर्नुहोस् (Share Panchanga)"})]})]})]}),R&&(U==="detailed"?e.jsx(wa,{data:r,date:a,variant:Ve||1,isOffscreen:!0,onLoad:()=>se(!0)}):e.jsx(Na,{data:r,date:a,variant:Ve||1,isOffscreen:!0,onLoad:()=>se(!0)})),re&&Za.createPortal(e.jsx("div",{className:"fixed inset-0 bg-black/60 z-[100] flex flex-col items-center justify-center backdrop-blur-sm p-4 overflow-y-auto",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-xl flex flex-col items-center my-auto mx-auto border border-gray-100 dark:border-gray-700",children:[e.jsx("span",{className:"text-lg font-bold text-gray-800 dark:text-white mb-4 text-center",children:"Select Theme"}),e.jsxs("div",{className:"flex flex-row w-full gap-3 mb-6",children:[e.jsx("button",{onClick:()=>te("social"),className:`flex-1 py-2 rounded-xl border-2 transition-all font-bold ${U==="social"?"border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300":"border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800"}`,children:"Social / Simple"}),e.jsx("button",{onClick:()=>te("detailed"),className:`flex-1 py-2 rounded-xl border-2 transition-all font-bold ${U==="detailed"?"border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300":"border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800"}`,children:"Detailed"})]}),e.jsx("div",{className:"relative mb-6 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-gray-100 w-[300px] h-[350px] sm:w-[500px] sm:h-[550px]",children:e.jsx("div",{className:"origin-top-left w-[1000px] scale-[0.30] sm:scale-[0.50]",children:U==="detailed"?e.jsx(wa,{data:r,date:a,variant:ve||1}):e.jsx(Na,{data:r,date:a,variant:ve||1})})}),e.jsx("div",{className:"flex flex-col justify-center gap-4 mb-6 w-full",children:e.jsx("div",{className:"flex flex-row flex-wrap justify-center gap-2 w-full",children:[1,2,3,4,5].map(w=>{const B={1:"linear-gradient(135deg, #1565c0, #1a237e)",2:"linear-gradient(135deg, #7b1fa2, #4a148c)",3:"linear-gradient(135deg, #e65100, #bf360c)",4:"linear-gradient(135deg, #00838f, #004d40)",5:"linear-gradient(135deg, #c2185b, #b71c1c)"};return e.jsx("button",{onClick:()=>Ue(w),className:`w-10 h-10 rounded-full shadow-md hover:scale-110 active:scale-95 transition-transform ${ve===w?"ring-4 ring-offset-2 ring-gray-400 dark:ring-gray-500":""}`,style:{background:B[w]}},w)})})}),e.jsxs("div",{className:"flex flex-row w-full gap-3",children:[e.jsx("button",{onClick:()=>{pe(!1),Ue(null)},className:"flex-1 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl flex flex-row items-center justify-center active:opacity-80 transition-colors",children:e.jsx("span",{className:"text-gray-700 dark:text-gray-300 font-medium",children:"Cancel"})}),e.jsx("button",{onClick:()=>ta(ve),className:"flex-1 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl flex flex-row items-center justify-center active:opacity-80 transition-colors shadow-md",children:e.jsx("span",{className:"text-white font-medium",children:"Download"})})]})]})}),document.body)]})},Bt=({date:a,isOpen:s,onClose:t,activeSystem:f="bs",onTimelineClick:d,onNavigate:p})=>{if(!s||!a)return null;const l=x=>{x.target===x.currentTarget&&t()};return e.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",onClick:l,children:e.jsx("div",{className:"max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl relative no-scrollbar",children:e.jsx(Lt,{date:a,onClose:t,activeSystem:f,onTimelineClick:d,onNavigate:p})})})};function Ta(a){if(!a)return null;const s=typeof a=="string"?parseInt(a,10):a;if(!s||isNaN(s)||s<1e12)return null;try{return new Date(s).toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return null}}const zt=({isOpen:a,onConfirm:s,onCancel:t,currentBuildId:f,newBuildId:d})=>{const{t:p}=he();if(!a)return null;const l=Ta(f),x=Ta(d);return e.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4 backdrop-blur-sm animate-in fade-in duration-200",children:e.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full border border-gray-200 dark:border-gray-700 transform transition-all scale-100 p-6",children:[e.jsxs("div",{className:"flex justify-between items-start mb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl",children:e.jsx(Fe,{className:"w-6 h-6 text-blue-600 dark:text-blue-400"})}),e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white font-[Outfit]",children:p("updateAvailable")})]}),e.jsx("button",{onClick:t,className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",children:e.jsx(ma,{className:"w-5 h-5 text-gray-500"})})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed",children:p("updateMessage")}),(l||x)&&e.jsxs("div",{className:"mt-3 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 space-y-1 border border-gray-100 dark:border-gray-700/50 font-mono",children:[l&&e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-400 dark:text-gray-500",children:"Current:"}),e.jsx("span",{children:l})]}),x&&e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"New:"}),e.jsx("span",{className:"text-green-600 dark:text-green-400 font-medium",children:x})]})]}),e.jsxs("div",{className:"mt-3 flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-900/50",children:[e.jsx(Xa,{className:"w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0"}),e.jsx("p",{className:"text-xs text-amber-700 dark:text-amber-300",children:p("updateWarning")})]})]}),e.jsxs("div",{className:"flex gap-3 justify-end",children:[e.jsx("button",{onClick:t,className:"px-5 py-2.5 rounded-xl text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",children:p("notNow")}),e.jsxs("button",{onClick:s,className:"px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg shadow-blue-500/25 transition-all active:scale-95 flex items-center gap-2",children:[e.jsx(Fe,{className:"w-4 h-4"}),p("updateNow")]})]})]})})},Pt=()=>{const{updateLanguage:a,completeSetup:s,updateLocation:t,setCalendarSystem:f,updateNumberFormat:d}=Oe(),{t:p}=he(),[l,x]=o.useState(1),[h,c]=o.useState(null),u=i=>{c(i),setTimeout(()=>{a(i,!0),f(i==="en"||i==="hi"?"ad":"bs"),d("auto"),x(2),c(null)},50)},g=i=>{t(i),s()};return l===2?e.jsxs("div",{className:"fixed inset-0 z-[100000] bg-slate-100 dark:bg-gray-900 overflow-hidden flex flex-col items-center justify-center",children:[e.jsx("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80",children:e.jsx("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"})}),e.jsxs("div",{className:"text-center mb-8 px-4 animate-fade-in-up",children:[e.jsx(Ca,{className:"w-16 h-16 text-blue-500 mx-auto mb-4"}),e.jsx("h1",{className:"text-3xl font-extrabold text-gray-900 dark:text-white mb-2 font-rhodium",children:p("locationAndTimezone")}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300 max-w-sm mx-auto",children:p("searchOrSelectLocation")})]}),e.jsx("div",{className:"w-full max-w-4xl px-4 flex-1 max-h-[70vh] relative",children:e.jsx(pt,{onClose:()=>{},onSelect:g})})]}):e.jsxs("div",{className:"fixed inset-0 z-[100000] bg-slate-100 dark:bg-gray-900 flex flex-col p-6 animate-fade-in-up",children:[e.jsx("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80",children:e.jsx("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"})}),e.jsx("div",{className:"flex-1 flex flex-col items-center justify-center max-w-md mx-auto w-full",children:e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 p-6 rounded-[2rem] shadow-2xl backdrop-blur-md w-full border border-white/20 dark:border-gray-700/30",children:[e.jsx("div",{className:"flex justify-center mb-6",children:e.jsx("div",{className:"bg-blue-100 dark:bg-blue-900/50 p-4 rounded-full text-blue-600 dark:text-blue-400",children:e.jsx(Ja,{className:"w-10 h-10"})})}),e.jsx("h1",{className:"text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-2 font-rhodium",children:"Welcome / स्वागतम्"}),e.jsx("p",{className:"text-center text-gray-600 dark:text-gray-300 mb-8 font-medium",children:"Please choose your preferred language to continue."}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("button",{onClick:()=>u("ne"),disabled:h!==null,className:`w-full flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-2xl border-2 transition-all font-bold group ${h==="ne"?"border-blue-500 shadow-xl shadow-blue-500/10":"border-transparent hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"} ${h!==null&&h!=="ne"?"opacity-50":""}`,children:[e.jsx("span",{className:"text-xl text-gray-800 dark:text-gray-100 font-rhodium",children:"नेपाली (Nepali)"}),h==="ne"?e.jsx(Xe,{className:"w-6 h-6 text-blue-500 animate-spin"}):e.jsx(la,{className:"w-6 h-6 text-gray-300 dark:text-gray-500 group-hover:text-blue-500 transition-colors"})]}),e.jsxs("button",{onClick:()=>u("hi"),disabled:h!==null,className:`w-full flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-2xl border-2 transition-all font-bold group ${h==="hi"?"border-blue-500 shadow-xl shadow-blue-500/10":"border-transparent hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"} ${h!==null&&h!=="hi"?"opacity-50":""}`,children:[e.jsx("span",{className:"text-xl text-gray-800 dark:text-gray-100 font-rhodium",children:"हिन्दी (Hindi)"}),h==="hi"?e.jsx(Xe,{className:"w-6 h-6 text-blue-500 animate-spin"}):e.jsx(la,{className:"w-6 h-6 text-gray-300 dark:text-gray-500 group-hover:text-blue-500 transition-colors"})]}),e.jsxs("button",{onClick:()=>u("en"),disabled:h!==null,className:`w-full flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-2xl border-2 transition-all font-bold group ${h==="en"?"border-blue-500 shadow-xl shadow-blue-500/10":"border-transparent hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"} ${h!==null&&h!=="en"?"opacity-50":""}`,children:[e.jsx("span",{className:"text-xl text-gray-800 dark:text-gray-100 font-rhodium",children:"English"}),h==="en"?e.jsx(Xe,{className:"w-6 h-6 text-blue-500 animate-spin"}):e.jsx(la,{className:"w-6 h-6 text-gray-300 dark:text-gray-500 group-hover:text-blue-500 transition-colors"})]})]})]})})]})},Ft=()=>{const[a,s]=o.useState(()=>typeof window>"u"?"tabs":localStorage.getItem("menuStyle")||"tabs"),[t,f]=o.useState(()=>typeof window>"u"?"topbar":localStorage.getItem("desktopLayoutStyle")||"topbar");return{menuStyle:a,desktopLayoutStyle:t,handleSetMenuStyle:x=>{s(x),localStorage.setItem("menuStyle",x)},handleSetDesktopLayoutStyle:x=>{f(x),localStorage.setItem("desktopLayoutStyle",x)},resetLayoutSettings:()=>{localStorage.removeItem("menuStyle"),localStorage.removeItem("desktopLayoutStyle"),s("tabs"),f("topbar")}}},Wt=()=>{const[a,s]=o.useState(!1),[t,f]=o.useState(!1),[d,p]=o.useState(()=>localStorage.getItem("pwa_installed")==="true"),[l,x]=o.useState(null);return o.useEffect(()=>{const c=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone;if(s(!!c),c){p(!0);return}const u=()=>{localStorage.setItem("pwa_installed","true"),p(!0),f(!1)};window.addEventListener("appinstalled",u),"getInstalledRelatedApps"in navigator&&navigator.getInstalledRelatedApps().then(i=>{i.length>0&&(localStorage.getItem("pwa_installed")!=="true"&&localStorage.setItem("pwa_installed","true"),p(!0))});const g=i=>{i.preventDefault(),localStorage.removeItem("pwa_installed"),p(!1),x(i),f(!0)};return window.addEventListener("beforeinstallprompt",g),()=>{window.removeEventListener("appinstalled",u),window.removeEventListener("beforeinstallprompt",g)}},[]),{isStandalone:a,canInstall:t,isInstalled:d,deferredPrompt:l,handleInstallClick:async()=>{l&&(l.prompt(),await l.userChoice,x(null),f(!1))}}},$t=()=>{const{location:a,isStashLoaded:s,language:t,useElevation:f,ayanamsaMethod:d,engineType:p,setCalendarSystem:l,calendarSystem:x,isTopocentric:h}=Oe(),[c,u]=o.useState(()=>Pe(a.zoneId)),g=o.useMemo(()=>je(c),[c]),[i,y]=o.useState(null),[b,n]=o.useState(!1);o.useEffect(()=>{u(Pe(a.zoneId))},[a.zoneId]),o.useEffect(()=>{const m=a.latitude,j=a.longitude,I=a.offset,N=f?a.elevation:0;try{const M=new Date(c);M.setUTCHours(0,0,0,0);const A=Aa(M,m,j,I,t,a.zoneId,s,N,d,p,h);"error"in A?oe(`Error from calculate:'${A.error}`,"error",2e3):y(A)}catch(M){oe(`Error calculating today details:${M}`,"error",2e3)}},[c,a.latitude,a.longitude,a.offset,t,s,f,a.elevation,d,p,h]);const[k,r]=o.useState(x);o.useEffect(()=>{r(x)},[x]);const[E,F]=o.useState(g.year),[D,$]=o.useState(g.monthIndex),[W,v]=o.useState(c.getUTCFullYear()),[C,K]=o.useState(c.getUTCMonth()),O=o.useMemo(()=>k==="bs"?E:W,[k,E,W]),X=o.useMemo(()=>k==="bs"?D:C,[k,D,C]);o.useEffect(()=>{const m=()=>{const A=ja(new Date,a.zoneId),q=ja(c,a.zoneId);if(A.day!==q.day||A.month!==q.month||A.year!==q.year){console.log("Midnight detected, updating today..."),u(A.date);const ne=E===g.year&&D===g.monthIndex,U=W===c.getUTCFullYear()&&C===c.getUTCMonth();if(ne||U){const te=je(A.date);F(te.year),$(te.monthIndex),v(A.year),K(A.month)}}},j=Pe(a.zoneId),N=j.getUTCHours()===23&&j.getUTCMinutes()===59?1e3:6e4,M=setInterval(m,N);return()=>clearInterval(M)},[c,g,a.zoneId,E,D,W,C]),o.useEffect(()=>{try{if(O===null)return;const j=(k==="bs"?ya(O,X,15):st(O,X,15)).getTime()/864e5+24405875e-1;Ba.preloadForJd(j)}catch(m){console.error("Failed to preload stash chunk for current view:",m)}},[O,X,k]);const z=o.useCallback(m=>{n(!0),o.startTransition(()=>F(m))},[]),J=o.useCallback(m=>{n(!0),o.startTransition(()=>v(m))},[]),ee=o.useCallback(m=>{n(!0),o.startTransition(()=>$(m))},[]),L=o.useCallback(m=>{n(!0),o.startTransition(()=>K(m))},[]),T=o.useCallback(()=>{const m=Pe(a.zoneId),j=je(m);if(E===j.year&&D===j.monthIndex&&W===m.getUTCFullYear()&&C===m.getUTCMonth()){u(m);return}n(!0),o.startTransition(()=>{u(m),F(j.year),$(j.monthIndex),v(m.getUTCFullYear()),K(m.getUTCMonth())})},[a.zoneId,E,D,W,C]),ie=o.useCallback(m=>{if(m===k)return;const j=W===c.getUTCFullYear()&&C===c.getUTCMonth(),I=E===g.year&&D===g.monthIndex;if(m==="bs"&&j||m==="ad"&&I)T();else if(m==="bs"){const N=W??c.getUTCFullYear(),A=rt(N,C,12),q=nt(A),R=je(q);R.year===0||!R.year?T():(F(R.year),$(R.monthIndex))}else if(E===null)T();else{const N=ya(E,D,18);v(N.getUTCFullYear()),K(N.getUTCMonth())}r(m),l(m)},[k,W,C,E,D,c,g,T,l]),xe=o.useCallback(m=>{n(!0),o.startTransition(()=>{if(k==="bs"){const j=m==="prev"?D-1:D+1;j<0?($(11),F(I=>{const N=I??g.year;return N===1?-1:N-1})):j>11?($(0),F(I=>{const N=I??g.year;return N===-1?1:N+1})):$(j)}else{const j=m==="prev"?C-1:C+1;j<0?(K(11),v(I=>{const N=I??c.getUTCFullYear();return N===1?-1:N-1})):j>11?(K(0),v(I=>{const N=I??c.getUTCFullYear();return N===-1?1:N+1})):K(j)}})},[k,D,C,c,g]),le=o.useCallback(m=>{n(!0),o.startTransition(()=>{k==="bs"?F(j=>(j??g.year)+(m==="next"?1:-1)):v(j=>(j??c.getUTCFullYear())+(m==="next"?1:-1))})},[k,c,g]);o.useEffect(()=>{const m=setTimeout(()=>n(!1),50);return()=>clearTimeout(m)},[E,D,W,C,k]);const ae=o.useRef(t);return o.useEffect(()=>{ae.current!==t&&(t==="en"||t==="hi"?ie("ad"):t==="ne"&&ie("bs"),ae.current=t)},[t,ie]),{activeSystem:k,currentBsYear:E,currentBsMonth:D,currentAdYear:W,currentAdMonth:C,currentYear:O,currentMonth:X,switchSystem:ie,goToToday:T,changeMonth:xe,changeYear:le,setCurrentBsYear:z,setCurrentBsMonth:ee,setCurrentAdYear:J,setCurrentAdMonth:L,initialToday:c,initialTodayBs:g,todayDetails:i,isNavigating:b}},_t=$e.map(a=>a.key),Rt=()=>{const a=o.useCallback(()=>{if(typeof window>"u")return{view:"calendar",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:null};const m=window.location.hash.replace("#","").trim(),j=window.location.pathname.trim(),I=new URLSearchParams(window.location.search);if(window.location.pathname.includes("/bs")||window.location.pathname.includes("/ad")||I.has("bs")||I.has("ad")||I.has("today"))return{view:"day-detail",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:null};const N=I.get("activeView"),M=[...m.split("/").filter(Boolean),...j.split("/").filter(Boolean)],A=N||M.find(pe=>_t.includes(pe)||["blog-detail","day-detail","post"].includes(pe));if(!A)return{view:"calendar",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:null};const q=M.join("/");if(q.includes("bs?")||q.includes("ad?"))return{view:"day-detail",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:null};const R=M.indexOf("post");if(R!==-1&&M.length>=R+3)return{view:"blog-detail",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:{source:M[R+1],slug:decodeURIComponent(M.slice(R+2).join("/"))}};const ne=A,U=M.indexOf(A),te=M[U+1];let me=null,se=!1,re=!1;return ne==="dharma"&&te?(se=!0,te!=="section"&&(me={subSection:te})):ne==="kundali"&&te==="result"&&(re=!0),{view:ne||"calendar",params:me,isKundaliVisible:re,isDharmaVisible:se,post:null}},[]),s=a(),[t,f]=o.useState(s.post),[d,p]=o.useState(s.view),[l,x]=o.useState(s.params),[h,c]=o.useState(s.isKundaliVisible),[u,g]=o.useState(s.isDharmaVisible),i=o.useRef("calendar"),[y,b]=o.useState(null),[n,k]=o.useState(!1),[r,E]=o.useState(!1),[F,D]=o.useState(!1),$=o.useRef(null),W=o.useRef(null),v=o.useRef(null),[C,K]=o.useState(!1),O=o.useRef(null),X=o.useRef(0),[z,J]=o.useState(!1);o.useEffect(()=>{let m=null,j=0;const I=25,N=()=>{j++,typeof window.Android<"u"?(J(!0),m&&clearInterval(m)):j>=I&&m&&clearInterval(m)};return N(),z||(m=window.setInterval(N,2e3)),()=>{m&&clearInterval(m)}},[]),o.useEffect(()=>{const m=a();d==="blog-detail"&&m.post&&f(m.post)},[d,a]),o.useEffect(()=>{if(z)return;let m="";if(d!=="calendar"){if(d==="day-detail")return;if(d==="blog-detail"&&t)m=`post/${t.source}/${t.slug}`;else if(m=d,d==="kundali"&&h)m+="/result";else if(d==="dharma"&&u){const A=l?.subSection?.toLowerCase();m+=A?`/${A}`:"/section"}}const j=window.location.hash.replace("#",""),I=window.location.pathname.includes("/bs")||window.location.pathname.includes("/ad"),N=I&&d!=="day-detail",M=window.location.pathname!=="/"&&window.location.pathname!=="/index.html"&&!I;if(j!==m||N||M){let A=m?`#${m}`:window.location.pathname;N||M?A=`/${m?"#"+m:""}`:d==="calendar"&&(A=window.location.pathname);const q=i.current!==d,R=d==="blog-detail",ne=i.current!=="calendar"&&d!=="calendar"&&!R,U=j===""||m.startsWith(j)&&m!==j;M?window.history.replaceState({view:d},"",A):q&&ne?window.history.replaceState({view:d},"",A):!q&&!U?window.history.replaceState({view:d},"",A):window.history.pushState({view:d},"",A)}i.current=d},[d,h,u,z,t,l]);const ee=o.useRef(!1);o.useEffect(()=>{if(z)return;const m=r||F||n;if(m&&!ee.current){const j=window.history.state||{};j.isPopupOpen||window.history.pushState({...j,isPopupOpen:!0},"",window.location.href)}else!m&&ee.current&&(window.history.state||{}).isPopupOpen&&window.history.back();ee.current=m},[r,F,n,z]),o.useEffect(()=>{const m=j=>{r&&j.key==="Backspace"&&(j.preventDefault(),E(!1))};return r&&window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[r]);const L=o.useCallback(()=>n?(k(!1),!0):r?(E(!1),!0):v.current?(v.current(),!0):d==="kundali"&&h&&$.current?($.current(),!0):d==="dharma"&&u&&W.current?(W.current(),!0):z&&d==="blog-detail"&&t?.source?(p(t.source),f(null),!0):d!=="calendar"?(p("calendar"),!0):!1,[n,r,d,h,u,z,t]),T=o.useRef(L);o.useEffect(()=>{T.current=L},[L]),o.useEffect(()=>{const m=()=>{X.current=0,K(!1),O.current&&(clearTimeout(O.current),O.current=null)},j=()=>T.current()?(m(),!0):(X.current+=1,X.current===1?(K(!0),navigator.vibrate&&navigator.vibrate(50),O.current=window.setTimeout(m,2e3),!0):(typeof window.Android?.exitApp=="function"?window.Android.exitApp():window.navigator?.app?.exitApp&&window.navigator.app.exitApp(),!1)),I=M=>{M.preventDefault(),j()};z&&(window.handleBackPress=j),document.addEventListener("backbutton",I);const N=()=>{const M=a();p(M.view),x(M.params),g(M.isDharmaVisible),c(M.isKundaliVisible),f(M.post||null),k(!1),E(!1),D(!1),v.current&&(v.current(),v.current=null)};return window.addEventListener("popstate",N),()=>{m(),window.removeEventListener("popstate",N),document.removeEventListener("backbutton",I)}},[z,d,a]);const ie=m=>{o.startTransition(()=>{b(m),k(!0)})},xe=o.useCallback(m=>{$.current=m},[]),le=o.useCallback(m=>{W.current=m},[]),ae=o.useCallback(m=>{v.current=m,D(!!m)},[]);return{activeView:d,setActiveView:p,selectedDate:y,setSelectedDate:b,isModalOpen:n,setIsModalOpen:k,isMenuOpen:r,setIsMenuOpen:E,isKundaliResultsVisible:h,setIsKundaliResultsVisible:c,setKundaliBackAction:xe,isDharmaResultsVisible:u,setIsDharmaResultsVisible:g,setDharmaBackAction:le,setPopupBackAction:ae,viewParams:l,setViewParams:x,showExitToast:C,handleDayClick:ie,isAndroidWebView:z,postParams:t,setPostParams:f}},Ot=(a,s)=>{const[t,f]=o.useState(!1),[d,p]=o.useState(null),[l,x]=o.useState(null);return o.useEffect(()=>{typeof window<"u"&&window.Android&&(typeof window.Android.isAndroidApp=="function"?f(window.Android.isAndroidApp()):f(!0))},[]),{isAndroidApp:t,handleTouchStart:g=>{p(g.touches[0].clientX),x(null)},handleTouchMove:g=>x(g.touches[0].clientX),handleTouchEnd:()=>{if(!d||!l)return;const g=l-d;g>60&&d<50?s(!0):g<-60&&a&&s(!1),p(null),x(null)}}},Ut=({blog:a,onBack:s,onNavigate:t})=>{const{t:f,n:d,language:p}=he(),l=o.useRef(null),x=o.useRef(null);o.useEffect(()=>{x.current&&x.current.scrollTo(0,0)},[a]);const[h,c]=_.useState([]);o.useEffect(()=>{(async()=>{try{const b=(await $a(p)).filter(n=>n.id!==a.id).map(n=>{let k=0;return a.tags&&n.tags&&(k=a.tags.filter(E=>n.tags.includes(E)).length),{blog:n,score:k}});b.sort((n,k)=>k.score!==n.score?k.score-n.score:.5-Math.random()),c(b.slice(0,3).map(n=>n.blog))}catch(i){console.error("Failed to load related posts:",i)}})()},[a,p]);const u=async()=>{const g=window.location.href,i=decodeURI(g),y={title:a.title,text:"",url:La(i)};if(window.Android&&typeof window.Android.share=="function"){window.Android.share(y.title,"Check out this article",y.url);return}if(navigator.share)try{await navigator.share(y);return}catch(n){if(n instanceof Error&&n.name==="AbortError")return;console.warn("Share API failed, trying clipboard...",n)}const b=y.url;try{if(navigator.clipboard&&navigator.clipboard.writeText){await navigator.clipboard.writeText(b),oe.success("Url copied to clipboard!");return}}catch(n){console.warn("Clipboard API failed, trying legacy...",n)}try{const n=document.createElement("textarea");n.value=b,n.style.position="fixed",n.style.left="-9999px",n.style.top="0",document.body.appendChild(n),n.focus(),n.select();const k=document.execCommand("copy");if(document.body.removeChild(n),k)oe.success("Url copied to clipboard!");else throw new Error("execCommand failed")}catch(n){console.error("All share methods failed",n),oe.error("Could not share or copy link")}};return e.jsxs("div",{className:"h-full bg-white dark:bg-gray-900 animate-in fade-in slide-in-from-bottom-4 duration-300 relative overflow-hidden flex flex-col",children:[e.jsx(ot,{title:a.title.split(":")[0],onBack:s,transparent:!0,className:"absolute top-0 left-0 right-0 z-20",rightContent:e.jsx("button",{onClick:u,className:"p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/20 text-gray-900 dark:text-white transition-colors",children:e.jsx(We,{size:20})})}),e.jsxs("div",{ref:x,className:"flex-1 overflow-y-auto pb-20",children:[e.jsxs("div",{className:"relative h-[40vh] md:h-[50vh] w-full overflow-hidden flex-shrink-0",children:[e.jsx("img",{src:a.image,alt:a.title,className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"}),e.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-4xl mx-auto",children:[e.jsx("div",{className:"flex gap-2 mb-3",children:a.tags.map((g,i)=>e.jsx("span",{className:"px-2 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-sm",children:g},i))}),e.jsx("h1",{className:"text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 font-serif",children:a.title}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-gray-200 text-sm md:text-base",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(qa,{size:16}),e.jsx("span",{className:"font-medium",children:a.author})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(et,{size:16}),e.jsx("span",{children:a.date})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(Je,{size:16}),e.jsx("span",{children:f("readTime",d(a.readTime))})]})]})]})]}),e.jsx("article",{className:"max-w-3xl mx-auto px-5 md:px-0 -mt-6 relative z-10",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-t-3xl shadow-xl p-6 md:p-10 min-h-[500px]",children:[e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed font-serif",children:[e.jsx("p",{className:"lead text-xl font-medium text-gray-600 dark:text-gray-200 mb-8 border-l-4 border-blue-500 pl-4 italic",children:a.excerpt}),e.jsx("div",{ref:l,dangerouslySetInnerHTML:{__html:a.content},className:"blog-content"})]}),e.jsxs("div",{className:"mt-12 pt-8 border-t border-gray-200 dark:border-gray-700",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-100 mb-4",children:f("alsoRead")}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[h.map(g=>e.jsx("div",{className:"h-[320px]",children:e.jsx(bt,{blog:g,onClick:()=>t(g),compact:!0})},g.id)),h.length===0&&e.jsx("div",{className:"col-span-full p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 text-center text-sm text-gray-500 dark:text-gray-400",children:f("moreArticlesComing")})]})]})]})})]})]})},Vt=_.lazy(()=>Me(()=>import("./CalendarPrintPage-BTKVmA9C.js"),__vite__mapDeps([2,3,0,1,4,5,6,7,8,9,10,11,12,13]))),Yt=_.lazy(()=>Me(()=>import("./DailySaaitPage-C1WPHHmr.js"),__vite__mapDeps([14,3,0,1,4,5,7,8,15,9,10]))),Ht=_.lazy(()=>Me(()=>import("./DayDetailPage-CT_f2oVF.js"),__vite__mapDeps([16,3,0,1,4,5,7,8,9,10,12,17,18,15,19,20,21,22,23,24]))),Kt=_.lazy(()=>Me(()=>import("./HomePage-DP3uQ0Jh.js"),__vite__mapDeps([25,3,0,1,4,5,15,7,8,9,10,26,21,18,22,6,11,27,28,12,20,29,24,30,23,17,19])));_.lazy(()=>Me(()=>import("./TimelinePage-M7VYvKod.js"),__vite__mapDeps([31,3,0,1,4,5,9,7,8,10,15,21,18,22])));const oa=String(1783596749879),ca="nepdate_last_web_build",Gt=()=>{const{t:a}=he(),[s,t]=_.useState(!1),[f,d]=_.useState(!1),[p,l]=_.useState(null),x=_.useRef(!1);o.useEffect(()=>{const S=G=>{x.current||(window.__updateDetected=!0,x.current=!0,G&&l(G),d(!0))};window.__pwaUpdateAvailable&&S();const P=G=>S(G.detail),Q=G=>S(G.detail);return window.addEventListener("pwa-update-available",P),window.addEventListener("version-update-available",Q),()=>{window.removeEventListener("pwa-update-available",P),window.removeEventListener("version-update-available",Q)}},[]);const h=()=>{d(!1),x.current=!1,He.clear(),p?.buildId&&localStorage.setItem(ca,String(p.buildId)),typeof window.refreshPWA=="function"?window.refreshPWA(!0):window.location.reload()};o.useEffect(()=>{if(localStorage.getItem(ca)!==oa&&(localStorage.setItem(ca,oa),He.clear()),typeof window<"u"&&window.Android?.setWebVersion)try{window.Android.setWebVersion("2.7.3")}catch(P){console.error("Failed to set web version on Android",P)}},[]);const{theme:c,toggleTheme:u,resetTheme:g}=ut(),{location:i,language:y,updateLanguage:b,isSetupComplete:n,resetSettings:k,engineType:r,isStashLoaded:E}=Oe(),F=["ne","en","hi"],D={ne:"ने",en:"EN",hi:"हि"},$=y==="auto"?"ne":y,W=F[(F.indexOf($)+1)%F.length],{menuStyle:v,desktopLayoutStyle:C,handleSetMenuStyle:K,handleSetDesktopLayoutStyle:O,resetLayoutSettings:X}=Ft(),{isStandalone:z,canInstall:J,handleInstallClick:ee}=Wt(),{activeView:L,setActiveView:T,selectedDate:ie,setSelectedDate:xe,isModalOpen:le,setIsModalOpen:ae,isMenuOpen:m,setIsMenuOpen:j,handleDayClick:I,setIsKundaliResultsVisible:N,setKundaliBackAction:M,setIsDharmaResultsVisible:A,setDharmaBackAction:q,setPopupBackAction:R,showExitToast:ne,postParams:U,setPostParams:te,viewParams:me,setViewParams:se}=Rt(),{activeSystem:re,currentYear:pe,currentMonth:ve,switchSystem:Ue,goToToday:Ve,changeMonth:Ye,changeYear:aa,setCurrentBsYear:ta,setCurrentAdYear:sa,setCurrentBsMonth:ra,setCurrentAdMonth:we,initialToday:Ce,initialTodayBs:na,todayDetails:w,isNavigating:B}=$t(),{isAndroidApp:V,handleTouchStart:Z,handleTouchMove:ke,handleTouchEnd:ue}=Ot(m,j),[Y,ce]=_.useState(null),Ae=()=>{g(),X(),k(),He.clear(),oe.info("Settings reset to default",2e3)};o.useEffect(()=>{if(new URLSearchParams(window.location.search).get("app_updated")==="true"){oe.success("Latest version loaded successfully",4e3),He.clear();const Q=new URL(window.location.href);Q.searchParams.delete("app_updated"),window.history.replaceState({},"",Q.toString())}},[]),o.useEffect(()=>{const P=new URLSearchParams(window.location.search).get("activeView");P&&(T(P),window.history.replaceState({},"",Re()))},[T]),o.useEffect(()=>{!B&&n&&typeof window<"u"&&window.Android?.onAppReady&&window.Android.onAppReady()},[B,n]);const be=o.useRef(E);o.useEffect(()=>{let S=null;return r==="modern"&&(E?be.current||oe.success("High-precision data downloaded and applied modern engine!",3e3):S=oe.info("Downloading precision data. Using analytical engine temporarily...",0)),be.current=E,()=>{S&&oe.dismiss(S)}},[r,E]),o.useEffect(()=>{const S=()=>T("print-calendar");window.addEventListener("navigate-to-print-calendar",S);const P=()=>T("settings");return window.addEventListener("open-settings-view",P),()=>{window.removeEventListener("navigate-to-print-calendar",S),window.removeEventListener("open-settings-view",P)}},[T]),o.useEffect(()=>{const S=()=>{document.documentElement.classList.remove("dark")},P=()=>{t(!1),c==="dark"&&document.documentElement.classList.add("dark")},Q=()=>t(!0),G=()=>t(!1);return window.addEventListener("beforeprint",S),window.addEventListener("afterprint",P),window.addEventListener("preparing-print",Q),window.addEventListener("finished-print",G),()=>{window.removeEventListener("beforeprint",S),window.removeEventListener("afterprint",P),window.removeEventListener("preparing-print",Q),window.removeEventListener("finished-print",G)}},[c]),o.useEffect(()=>{ne&&oe.info("Press back again to exit",2e3)},[ne]);const De=()=>I(Ce);o.useEffect(()=>{L==="blog-detail"&&U&&(async()=>{try{const P=await $a($);let Q=P.find(G=>Ke(G.title)===U.slug);if(!Q){const G=await yt(U.slug);if(G){const de=P.find(Ne=>Ne.id===G.id);de&&(Q=de,te({...U,slug:Ke(de.title)}))}}Q?ce(Q):(console.error("Blog not found:",U.slug),T("calendar"))}catch(P){console.error("Error loading blog:",P)}})()},[L,U?.slug,$]);const Le=()=>{U?.source?(T(U.source),te(null)):T("calendar")};return e.jsx(ct,{isRadioActive:L==="radio",children:e.jsxs("div",{className:`fixed inset-0 h-[100dvh] w-full flex flex-col bg-slate-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors overflow-hidden ${C==="sidebar"?"md:flex-row":""} ${c==="dark"&&L!=="print-calendar"?"dark":""}`,onTouchStart:Z,onTouchMove:ke,onTouchEnd:ue,children:[C==="topbar"&&e.jsx("div",{className:"w-full sticky top-0 z-30 print:hidden hidden md:block border-b border-gray-200 dark:border-gray-700",children:e.jsx(St,{activeView:L,activeSystem:re,onNavigate:S=>{se(null),T(S)},showInstall:!z&&J&&!V,onInstallClick:ee,theme:c,onThemeToggle:u})}),L==="calendar"&&e.jsx("header",{className:"sticky top-0 px-4 pt-2 bg-transparent z-30 md:hidden",children:e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>j(!0),className:"p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700","aria-label":"Open menu",title:"Open menu",children:e.jsx(at,{className:"w-5 h-5"})}),e.jsx(fa,{activeSystem:re,hideControl:L!=="calendar"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>b(W),className:"px-2 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-[11px] font-bold text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600","aria-label":"Toggle Language",title:"Toggle Language",children:D[$]||"ने"}),v==="tabs"&&!z&&J&&!V&&e.jsxs("button",{onClick:ee,className:"px-2 py-2 text-left text-xs rounded bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2",children:[e.jsx(da,{className:"w-5 h-5"})," ",e.jsx("span",{children:a("installApp")})]})]})]})}),m&&e.jsx("div",{className:"fixed inset-0 bg-black/40 z-40 md:hidden",onClick:()=>j(!1)}),e.jsx("aside",{className:`fixed top-0 left-0 z-[10001] h-full bg-slate-200 dark:bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out
          ${m?"translate-x-0":"-translate-x-full"}
          ${C==="sidebar"?"md:translate-x-0 md:sticky md:h-screen md:w-56":"md:hidden w-64"}`,children:e.jsxs("div",{className:"flex flex-col h-full p-4 overflow-y-auto pb-24 no-scrollbar",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-lg font-semibold text-gray-800 dark:text-gray-100 font-rhodium",children:"Menu"}),e.jsx("button",{onClick:()=>j(!1),className:"p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 md:hidden",title:a("close"),"aria-label":a("close"),children:e.jsx(ma,{className:"w-5 h-5"})})]}),e.jsxs("nav",{className:"flex flex-col space-y-3 text-gray-800 dark:text-gray-200",children:[$e.filter(S=>!S.hideOnSideMenu).map(S=>e.jsxs("button",{onClick:()=>{se(null),T(S.key),j(!1)},className:`px-2 py-2 flex items-center gap-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 font-rhodium ${L===S.key?"bg-gray-300 dark:bg-gray-700 font-medium":""}`,children:[S.icon," ",e.jsx("span",{className:"font-rhodium",children:a(S.labelKey)})]},S.key)),typeof window<"u"&&window.Android&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>{qe(),j(!1)},className:"px-2 py-2 flex items-center gap-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 font-rhodium",children:[e.jsx(ua,{icon:ft,className:"w-5 h-5 text-emerald-500 drop-shadow-icon"})," ",e.jsx("span",{className:"font-rhodium",children:"Share App"})]}),e.jsxs("button",{onClick:()=>{ea(),j(!1)},className:"px-2 py-2 flex items-center gap-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 font-rhodium",children:[e.jsx(ua,{icon:gt,className:"w-5 h-5 text-amber-500 drop-shadow-icon"})," ",e.jsx("span",{className:"font-rhodium",children:"Rate App"})]})]}),!z&&J&&!V&&e.jsxs("button",{onClick:()=>{ee(),j(!1)},className:"px-2 py-2 flex items-center gap-2 rounded bg-blue-600 text-white hover:bg-blue-700",children:[e.jsx(da,{className:"w-4 h-4"})," ",a("installApp")]}),e.jsxs("button",{onClick:()=>{u(),j(!1)},className:"px-2 py-2 flex items-center gap-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700",children:[c==="light"?e.jsx(ye,{className:"w-4 h-4"}):e.jsx(Ie,{className:"w-4 h-4"})," ",a(c==="light"?"darkMode":"lightMode")]}),e.jsx("hr",{className:"border-gray-300 dark:border-gray-600 my-2"}),e.jsxs("button",{onClick:()=>{_e(),j(!1)},className:"px-2 py-2 flex items-center gap-2 rounded text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50",children:[e.jsx(Fe,{className:"w-4 h-4"})," Clear Cache & Reload"]})]}),e.jsxs("div",{className:"mt-auto text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4",children:["© ",Pe(i.zoneId).getUTCFullYear()," ",a("project")]})]})}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsxs("div",{id:"app-scroll-container",className:`h-full no-scrollbar mx-auto w-full max-w-7xl xl:max-w-6xl overflow-x-hidden overflow-y-auto ${L==="calendar"?"px-4 md:px-6 pb-20 md:pb-6":"p-0"}`,children:[e.jsxs(_.Suspense,{fallback:e.jsx("div",{className:"flex-1 flex items-center justify-center h-full",children:e.jsx("div",{className:"w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"})}),children:[L==="calendar"&&e.jsxs(e.Fragment,{children:[e.jsx(Kt,{activeSystem:re,currentYear:pe,currentMonth:ve,switchSystem:Ue,goToToday:Ve,theme:c,toggleTheme:u,todayDetails:w,setActiveView:T,initialToday:Ce,initialTodayBs:na,handleShowDetailsClick:De,setCurrentBsYear:ta,setCurrentAdYear:sa,setCurrentBsMonth:ra,setCurrentAdMonth:we,changeMonth:Ye,changeYear:aa,handleDayClick:I,setPostParams:te,setViewParams:se,isNavigating:B}),e.jsx(It,{onNavigate:(S,P)=>{T(S),se(P||null),P&&typeof P.month=="number"&&(re==="bs"?ra(P.month):we(P.month))}})]}),L==="day-detail"&&e.jsx(Ht,{onBack:()=>{window.history.pushState({},"",Re()),T("calendar")},onNavigate:S=>T(S)}),L==="blog-detail"&&Y&&e.jsx(Ut,{blog:Y,onBack:Le,onNavigate:S=>{te({source:U?.source||"calendar",slug:Ke(S.title)}),window.scrollTo(0,0)}}),L==="daily-saait"&&e.jsx(Yt,{onBack:()=>T("calendar"),onNavigate:S=>T(S),activeSystem:re}),L==="print-calendar"&&e.jsx(Vt,{onBack:()=>T("calendar"),activeSystem:re}),(()=>{const S=$e.find(P=>P.key===L);if(S&&S.page){const P=S.page,Q={onBack:()=>T("calendar"),onOpenMenu:()=>j(!0),theme:c,activeSystem:re,onNavigate:de=>T(de)};let G={...Q,...me};return L==="settings"?G={...Q,currentTheme:c,onThemeChange:u,currentMenuStyle:v,onMenuStyleChange:K,currentDesktopLayoutStyle:C,onDesktopLayoutStyleChange:O,onResetSettings:Ae,isAndroidApp:V,onReloadApp:_e}:L==="kundali"?G={...Q,setIsKundaliResultsVisible:N,setKundaliBackAction:M,initialData:me?.formData}:L==="namakaran"?G={...Q,onViewKundali:de=>{se({formData:de}),T("kundali")},onNavigate:(de,Ne)=>{Ne&&se(Ne),T(de)}}:L==="dharma"?G={...Q,activeSystem:re,currentYear:pe||2081,currentMonth:ve,tag:me?.tag,onNavigate:(de,Ne)=>{de==="blog-detail"?(te({source:"dharma",slug:Ke(Ne.title)}),T("blog-detail")):de==="dharma"&&(se(Ne),T("dharma"))},subSection:me?.subSection,setIsDharmaResultsVisible:A,setDharmaBackAction:q}:L==="timeline"&&(G={...Q,initialDate:ie||Ce}),e.jsx(P,{...G})}return null})()]}),v==="slide"&&e.jsx("div",{className:"w-full bg-slate-200/50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 print:hidden md:hidden mt-8 pb-4",children:e.jsx(Tt,{})})]})}),v==="tabs"&&e.jsx("div",{className:"md:hidden print:hidden",children:e.jsx(Nt,{activeView:L,onNavigate:S=>{se(null),T(S)},theme:c,onThemeToggle:u,themeLabel:a(c==="light"?"darkMode":"lightMode"),setPopupBackAction:R})}),e.jsx(Bt,{date:ie,isOpen:le,onClose:()=>ae(!1),activeSystem:re,onTimelineClick:S=>{xe(S),T("timeline")},onNavigate:S=>T(S)}),e.jsx(zt,{isOpen:f,onConfirm:h,onCancel:()=>d(!1),currentBuildId:oa,newBuildId:p?.buildId}),e.jsx(it,{}),!n&&e.jsx(Pt,{}),s&&e.jsxs("div",{className:"fixed inset-0 z-[10002] bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-200",children:[e.jsx("div",{className:"w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"}),e.jsx("p",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Preparing to print..."})]})]})})};function Qt(a={}){const{immediate:s=!1,onNeedRefresh:t,onOfflineReady:f,onRegistered:d,onRegisteredSW:p,onRegisterError:l}=a;let x,h,c;const u=async(i=!0)=>{await h,await c?.()};async function g(){if("serviceWorker"in navigator){if(x=await Me(async()=>{const{Workbox:i}=await import("./vendor-other-DoP2BRe1.js").then(y=>y.H);return{Workbox:i}},__vite__mapDeps([0,1])).then(({Workbox:i})=>new i("/sw.js",{scope:"/",type:"classic"})).catch(i=>{l?.(i)}),!x)return;c=async()=>{await x?.messageSkipWaiting()};{let i=!1;const y=()=>{i=!0,x?.addEventListener("controlling",b=>{b.isUpdate&&window.location.reload()}),t?.()};x.addEventListener("installed",b=>{typeof b.isUpdate>"u"?typeof b.isExternal<"u"?b.isExternal?y():!i&&f?.():b.isExternal?window.location.reload():!i&&f?.():b.isUpdate||f?.()}),x.addEventListener("waiting",y),x.addEventListener("externalwaiting",y)}x.register({immediate:s}).then(i=>{p?p("/sw.js",i):d?.(i)}).catch(i=>{l?.(i)})}}return h=g(),u}class Zt{static intervalId=null;static lastKnownBuildId=null;static consecutiveFailures=0;static isPrefetching=!1;static POLL_INTERVAL=3e5;static startPolling(){this.intervalId||(setTimeout(()=>this.checkForUpdates(),8e3),this.intervalId=window.setInterval(()=>{document.visibilityState==="visible"&&this.checkForUpdates()},this.POLL_INTERVAL),document.addEventListener("visibilitychange",this.handleVisibilityChange))}static stopPolling(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null),document.removeEventListener("visibilitychange",this.handleVisibilityChange)}static handleVisibilityChange=()=>{document.visibilityState==="visible"&&this.checkForUpdates()};static async checkForUpdates(){if(!navigator.onLine||window.__updateDetected||this.isPrefetching)return!1;if(this.consecutiveFailures>=3){const s=Math.min(this.consecutiveFailures-2,12);if(Math.random()>1/s)return!1}try{const s=Re(),t=await fetch(`${s}version.json?t=${Date.now()}`,{cache:"no-store",headers:{"Cache-Control":"no-cache"}});if(!t.ok)return this.consecutiveFailures++,!1;this.consecutiveFailures=0;const f=await t.json();if(this.lastKnownBuildId===null)return this.lastKnownBuildId=f.buildId,!1;if(f.buildId===this.lastKnownBuildId)return!1;console.log(`VersionService: New build ${f.buildId} detected (was ${this.lastKnownBuildId}). Prefetching...`),this.isPrefetching=!0;const d=await this.prefetchNewContent(s);return this.isPrefetching=!1,d?(this.lastKnownBuildId=f.buildId,console.log("VersionService: Prefetch complete. Prompting user."),window.dispatchEvent(new CustomEvent("version-update-available",{detail:f})),!0):(console.log("VersionService: Prefetch incomplete. Will retry next cycle."),!1)}catch(s){this.consecutiveFailures++,this.isPrefetching=!1,s instanceof Error&&(s.message.includes("Failed to fetch")||s.message.includes("NetworkError"))||console.warn("Version check error:",s)}return!1}static async prefetchNewContent(s){try{const t=await fetch(`${s}?t=${Date.now()}`,{cache:"no-store",headers:{"Cache-Control":"no-cache"}});if(!t.ok)return!1;const f=await t.text(),d=this.extractAssetUrls(f,s);if(d.length===0)return!0;const p=6e4,l=new AbortController,x=setTimeout(()=>l.abort(),p),h=await Promise.allSettled(d.map(i=>fetch(i,{signal:l.signal}).then(y=>{if(!y.ok)throw new Error(`HTTP ${y.status}`);return y.blob()})));clearTimeout(x);const c=h.filter(i=>i.status==="fulfilled").length,u=h.filter(i=>i.status==="rejected").length;return console.log(`VersionService: Prefetched ${c}/${d.length} assets (${u} failed)`),c/d.length>=.8}catch(t){return console.warn("VersionService: Prefetch error:",t),!1}}static extractAssetUrls(s,t){const f=[],d=/<script[^>]+src=["']([^"']+)["']/gi;let p;for(;(p=d.exec(s))!==null;)f.push(this.resolveUrl(p[1],t));const l=/<link[^>]+href=["']([^"']+\.css[^"']*)["']/gi;for(;(p=l.exec(s))!==null;)f.push(this.resolveUrl(p[1],t));return f}static resolveUrl(s,t){return s.startsWith("http://")||s.startsWith("https://")?s:s.startsWith("/")?new URL(s,t).href:new URL(s,t).href}}const Ra=o.createContext(void 0),Ia="nepdate_cached_ads_config",Xt=()=>{const s=Re().replace("https://appassets.androidplatform.net","https://nepdate.khumnath.com.np");return`${s.endsWith("/")?s:`${s}/`}ads.json`},Jt={"ad-slot1":null,"ad-slot2":null,"ad-slot3":null},qt=({children:a})=>{const[s,t]=o.useState(()=>{if(typeof window<"u")try{const l=localStorage.getItem(Ia);if(l)return JSON.parse(l)}catch(l){console.warn("Failed to parse cached ads config:",l)}return Jt}),[f,d]=o.useState(!0),p=async()=>{try{const l=`${Xt()}?t=${Date.now()}`,x=await fetch(l,{cache:"no-store",headers:{"Cache-Control":"no-cache"}});if(x.ok){const h=await x.json(),c={"ad-slot1":h?.["ad-slot1"]||null,"ad-slot2":h?.["ad-slot2"]||null,"ad-slot3":h?.["ad-slot3"]||null},u=JSON.stringify(s),g=JSON.stringify(c);u!==g&&(t(c),localStorage.setItem(Ia,g),console.log("SW/Ads: Ads config updated from remote source."))}}catch(l){console.warn("SW/Ads: Soft probe for ads.json failed (using cached/fallback):",l)}finally{d(!1)}};return o.useEffect(()=>{p();const l=setInterval(p,3e4);return()=>clearInterval(l)},[]),e.jsx(Ra.Provider,{value:{configs:s,isLoading:f,refreshAds:p},children:a})},ms=()=>{const a=o.useContext(Ra);if(!a)throw new Error("useAds must be used within an AdProvider");return a};jt.Icon.Default.mergeOptions({iconUrl:kt,shadowUrl:wt,iconRetinaUrl:vt});window.addEventListener("vite:preloadError",a=>{console.warn("Failed to load chunk, reloading page... disabled for debugging",a)});const ga=!!window.Android;ga&&"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(a=>{for(const s of a)s.unregister()});let Oa,xa;ga||(Oa=Qt({onRegistered(a){xa=a,a&&setInterval(()=>{document.visibilityState==="visible"&&(console.log("SW: Checking for updates (interval)..."),a.update())},300*1e3)},onNeedRefresh(){window.__updateDetected||(window.__updateDetected=!0,window.__pwaUpdateAvailable=!0,console.log("SW: New content available, prompting user."),fetch(`${window.location.origin}/version.json?t=${Date.now()}`,{cache:"no-store"}).then(a=>a.ok?a.json():null).then(a=>{window.dispatchEvent(new CustomEvent("pwa-update-available",{detail:a}))}).catch(()=>{window.dispatchEvent(new CustomEvent("pwa-update-available"))}))},onOfflineReady(){console.log("SW: App ready to work offline")}}));window.refreshPWA=Oa;ga?console.log("Android detected — native assets serving active, web update checks disabled"):"serviceWorker"in navigator?document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&xa&&(console.log("SW: App became visible, checking for updates..."),xa.update())}):(console.log("SW not supported, falling back to version.json polling"),Zt.startPolling());Ba.load();lt.init();tt.createRoot(document.getElementById("root")).render(e.jsx(o.StrictMode,{children:e.jsx(dt,{children:e.jsx(qt,{children:e.jsx(Gt,{})})})}));export{Lt as D,ms as u};
