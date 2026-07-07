const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-other-CgSyLtPK.js","assets/vendor-other-BUUTtNGK.css","assets/CalendarPrintPage-D7Ry-1T2.js","assets/vendor-react-D8A8p61_.js","assets/vendor-leaflet-Bjm2FGmM.js","assets/vendor-leaflet-Dgihpmma.css","assets/MonthlyEvents-DG8HkS1M.js","assets/core-astro-DUBHYx4I.js","assets/core-data-BzebUjTq.js","assets/index-SSF8mn-c.js","assets/index-B6j8c8Pz.css","assets/LoadingSpinner-Db6WrIVs.js","assets/HeaderLogo-Cd5kTGwi.js","assets/PrintAdDialog-CzS04RuG.js","assets/DailySaaitPage-jrV6pYer.js","assets/lib-C249TR0q.js","assets/DayDetailPage-DQED08mk.js","assets/CalculationDetailsModal-BQvqNqgn.js","assets/icons-F9Mdt256.js","assets/kundali-CmIk_r9z.js","assets/google-play-badge-DgGAyOYp.js","assets/LocationModal-B5rwE9_K.js","assets/vendor-utils-BOXyE4Yx.js","assets/useTheme-CL4zowlQ.js","assets/BlogCard-CW7mWEQ4.js","assets/HomePage-SwbN1Tui.js","assets/LocationInfoBar-DfXKSOL_.js","assets/Muhurtas-CNt9CjL0.js","assets/RashifalWidget-CkLncDQ3.js","assets/BlogWidget-Bl3yXOJt.js","assets/SocialMedia-DnvmXvBb.js","assets/TimelinePage-ConewibC.js"])))=>i.map(i=>d[i]);
import{r as l,j as e,E as ba,M as pe,S as we,b as sa,c as ze,d as ta,D as aa,e as Ba,f as ya,h as La,R as Y,L as za,X as ja,i as Ve,G as Fa,a as Pa,k as $a,l as _a,T as Je,m as na,n as Ue,o as Wa,p as qe,U as Ra,q as Oa,s as Ya,F as ia,t as Ua}from"./vendor-react-D8A8p61_.js";import{M as Fe,h as He,a as Ge,b as Pe,t as ue,g as va,c as wa,d as ka,_ as Me,e as ne,f as Te,N as la,i as Qe,j as Na,k as Le,l as oa,s as Va,S as Sa,m as Ha,n as Ga,o as ca,P as ea,T as Qa,E as Ka}from"./core-astro-DUBHYx4I.js";import{u as xe,a as $e,A as Ta,P as Za,R as Xa,S as Ja}from"./index-SSF8mn-c.js";import{H as ra}from"./HeaderLogo-Cd5kTGwi.js";import{C as Ma}from"./CalculationDetailsModal-BQvqNqgn.js";import{g as qa,c as We}from"./lib-C249TR0q.js";import{k as es,B as as}from"./kundali-CmIk_r9z.js";import{A as Ca,G as Ia}from"./google-play-badge-DgGAyOYp.js";import{t as ss,u as ts}from"./vendor-other-CgSyLtPK.js";import{L as rs}from"./LocationModal-B5rwE9_K.js";import{u as ns}from"./useTheme-CL4zowlQ.js";import{B as is,g as Da,a as ls}from"./BlogCard-CW7mWEQ4.js";import{l as os,m as cs,a as ds,b as xs}from"./vendor-leaflet-Bjm2FGmM.js";const da=({icon:a,label:n,isActive:s,onClick:m,className:c})=>e.jsxs("button",{onClick:b=>{b.stopPropagation(),m()},onTouchStart:b=>b.stopPropagation(),onMouseDown:b=>b.stopPropagation(),className:`flex flex-col items-center justify-center pt-2 pb-1 transition-colors ${s?"text-blue-600 dark:text-blue-400":"text-gray-700 dark:text-gray-300"} ${c??""}`,children:[a,e.jsx("span",{className:"text-[11px] mt-1 font-semibold font-rhodium truncate w-full block text-center px-0.5",children:n})]}),hs=({activeView:a,onNavigate:n,menus:s=Fe,theme:m,onThemeToggle:c,themeLabel:b,setPopupBackAction:i})=>{const{t:g}=xe(),[d,x]=l.useState(!1),p=l.useRef(null);l.useEffect(()=>{d&&i?i(()=>x(!1)):!d&&i&&i(null);const r=T=>{p.current&&!p.current.contains(T.target)&&x(!1)};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r),i&&d&&i(null)}},[d,i]);const f=[];typeof window<"u"&&window.Android&&(f.push({key:"share",labelKey:"shareApp",icon:e.jsx(ze,{className:"w-5 h-5"}),fixed:!1}),f.push({key:"rate",labelKey:"rateApp",icon:e.jsx(ta,{className:"w-5 h-5"}),fixed:!1}));const o=[...s,...f],w=o.filter(r=>r.fixed&&!r.hideOnTabMenu),y=o.filter(r=>!r.fixed&&!r.hideOnTabMenu);return e.jsxs("nav",{ref:p,className:`
        fixed bottom-0 left-0 right-0 w-full h-16
        bg-white dark:bg-gray-800
        border-t border-gray-500 dark:border-gray-900
        shadow-md
        z-[9999] lg:hidden
      `,"aria-label":"Bottom navigation",onClick:r=>r.stopPropagation(),onTouchStart:r=>r.stopPropagation(),onMouseDown:r=>r.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center h-full w-full relative px-1 overflow-hidden",children:[w.map(r=>e.jsx(da,{icon:r.icon,label:g(r.labelKey),isActive:a===r.key,onClick:()=>n(r.key),className:"flex-1 min-w-0"},r.key)),y.length>0&&e.jsx("div",{className:"relative text-[11px] font-semibold flex-none w-[72px] shrink-0",children:e.jsx(da,{icon:e.jsx(ba,{className:"w-5 h-5"}),label:g("more"),isActive:d,onClick:()=>x(r=>!r),className:"w-full font-rhodium"})})]}),d&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-transparent",onClick:r=>{r.stopPropagation(),x(!1)},onTouchStart:r=>{r.stopPropagation()},onMouseDown:r=>{r.stopPropagation()}}),e.jsxs("div",{className:`
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
            `,role:"menu",onClick:r=>r.stopPropagation(),onTouchStart:r=>r.stopPropagation(),onMouseDown:r=>r.stopPropagation(),children:[y.map(r=>e.jsxs("button",{type:"button",onClick:T=>{T.stopPropagation(),T.preventDefault(),r.key==="share"?He():r.key==="rate"?Ge():n(r.key),setTimeout(()=>x(!1),100)},className:`
                  w-full flex items-center gap-3 px-2 py-2
                  text-left text-[13px]
                  rounded-md
                  hover:bg-slate-100 dark:hover:bg-gray-600
                  focus:bg-slate-100 dark:focus:bg-gray-600
                  text-gray-800 dark:text-gray-200
                `,role:"menuitem",children:[r.icon,e.jsx("span",{className:"truncate font-rhodium",children:g(r.labelKey)})]},r.key)),e.jsx("div",{className:"h-px bg-gray-200 dark:bg-gray-600 my-1 mx-2"}),e.jsxs("button",{type:"button",onClick:r=>{r.stopPropagation(),r.preventDefault(),c(),setTimeout(()=>x(!1),100)},className:`
                w-full flex items-center gap-3 px-2 py-2
                text-left text-[13px]
                rounded-md
                hover:bg-slate-100 dark:hover:bg-gray-600
                focus:bg-slate-100 dark:focus:bg-gray-600
                text-gray-800 dark:text-gray-200
              `,role:"menuitem",children:[m==="light"?e.jsx(pe,{className:"w-4 h-4"}):e.jsx(we,{className:"w-4 h-4"}),e.jsx("span",{className:"truncate font-rhodium",children:b})]}),e.jsx("div",{className:"h-px bg-gray-200 dark:bg-gray-600 my-1 mx-2"}),e.jsxs("button",{type:"button",onClick:r=>{r.stopPropagation(),r.preventDefault(),Pe(),setTimeout(()=>x(!1),100)},className:`w-full flex items-center gap-3 px-2 py-2
                text-left text-[13px]
                rounded-md
                hover:bg-slate-100 dark:hover:bg-gray-600
                focus:bg-slate-100 dark:focus:bg-gray-600
                text-gray-800 dark:text-gray-200`,children:[e.jsx(sa,{className:"w-4 h-4"}),g("reload")]})]})]})]})},ms=({activeView:a,activeSystem:n,onNavigate:s,showInstall:m=!1,onInstallClick:c,theme:b,onThemeToggle:i})=>{const g=l.useRef(null),d=l.useRef(null),{t:x}=xe(),{language:p,updateLanguage:f}=$e(),o=["ne","en","hi"],w={ne:"ने",en:"EN",hi:"हि"},y=p==="auto"?"ne":p,r=o[(o.indexOf(y)+1)%o.length],[T,t]=l.useState([]),[B,W]=l.useState([]),[A,O]=l.useState(!1),P=(j,E)=>{const S=document.createElement("canvas").getContext("2d");return S?(S.font=E,Math.ceil(S.measureText(j).width*1.1)):100};return l.useEffect(()=>{const j=()=>{if(!g.current)return;const E=4,I=24,S=16,Q=8,$=150,J=g.current.offsetWidth,se=140;let Z=0;m&&(Z=P(x("install_app"),"500 14px Inter")+32+20+20);const _=J-se-Z-$,le=P(x("more"),'500 14px "Rhodium Libre", serif')+I+S+Q+E+8,re={key:"refresh",labelKey:"reload",icon:e.jsx(sa,{className:"w-5 h-5"}),fixed:!1},q=[];typeof window<"u"&&window.Android&&(q.push({key:"share",labelKey:"shareApp",icon:e.jsx(ze,{className:"w-5 h-5"}),fixed:!1}),q.push({key:"rate",labelKey:"rateApp",icon:e.jsx(ta,{className:"w-5 h-5"}),fixed:!1}));const h=[...Fe.filter(N=>!N.hideOnTopNav),...q,re],k=h.map(N=>{const M=P(x(N.labelKey),'500 14px "Rhodium Libre", serif');return{...N,width:M+I+S+Q}});if(k.reduce((N,M,D)=>N+M.width+(D>0?E:0),0)<=_)t(h),W([]);else{const N=_-le;let M=0;const D=[],R=[];k.forEach((z,ae)=>{const ee=z.width+(ae>0?E:0);M+ee<=N?(D.push(z),M+=ee):R.push(z)}),t(D),W(R)}};return j(),document.fonts.ready.then(j),window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)},[m,x,p]),l.useEffect(()=>{if(!A)return;const j=E=>{d.current&&!d.current.contains(E.target)&&O(!1)};return document.addEventListener("mousedown",j),()=>document.removeEventListener("mousedown",j)},[A]),e.jsxs("nav",{ref:g,className:"hidden md:flex w-full px-4 bg-white dark:bg-gray-800 h-16 items-center relative",children:[e.jsx(ra,{activeSystem:n,className:"mr-6 flex-shrink-0",hideControl:a!=="calendar"}),e.jsxs("div",{className:"flex items-center gap-1 flex-1 min-w-0",children:[T.map(j=>e.jsxs("button",{onClick:()=>{j.key==="refresh"?Pe():j.key==="share"?He():j.key==="rate"?Ge():s(j.key)},className:`flex-shrink-0 px-2 py-2 rounded-md flex items-center gap-2 whitespace-nowrap text-sm font-medium font-rhodium transition-colors ${a===j.key?"bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm":"text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"}`,children:[j.icon," ",e.jsx("span",{className:"font-rhodium",children:x(j.labelKey)})]},j.key)),B.length>0&&e.jsxs("div",{ref:d,className:"relative flex-shrink-0",children:[e.jsxs("button",{onClick:j=>{j.stopPropagation(),O(E=>!E)},className:"flex-shrink-0 px-2 py-2 rounded-md flex items-center gap-2 whitespace-nowrap hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors font-rhodium",children:[e.jsx(ba,{className:"w-4 h-4"})," ",e.jsx("span",{className:"font-rhodium",children:x("more")})]}),A&&e.jsx("div",{className:"absolute left-0 top-full mt-1 w-48 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg flex flex-col z-[1000] py-1",children:B.map(j=>e.jsxs("button",{onClick:E=>{E.stopPropagation(),j.key==="refresh"?Pe():j.key==="share"?He():j.key==="rate"?Ge():s(j.key),O(!1)},className:"px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center gap-2 whitespace-nowrap text-sm w-full font-rhodium",children:[j.icon," ",e.jsx("span",{className:"font-rhodium",children:x(j.labelKey)})]},j.key))})]})]}),e.jsxs("div",{className:"flex items-center gap-1 ml-4 flex-shrink-0",children:[e.jsx("button",{onClick:()=>f(r),className:"px-2.5 py-1.5 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-xs font-bold text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600","aria-label":"Toggle Language",title:`Language: ${y.toUpperCase()}`,children:w[y]||"ने"}),e.jsx("button",{onClick:i,className:"p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300","aria-label":"Toggle Theme",children:b==="light"?e.jsx(pe,{className:"w-5 h-5"}):e.jsx(we,{className:"w-5 h-5"})}),m&&c&&e.jsxs("button",{onClick:c,className:"px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2 text-sm font-medium transition-colors shadow-sm whitespace-nowrap font-rhodium",children:[e.jsx(aa,{className:"w-4 h-4"}),e.jsx("span",{className:"font-rhodium",children:x("installApp")})]})]})]})},gs=()=>{const[a,n]=l.useState(!1),{t:s}=xe();return e.jsxs("footer",{className:"text-center py-3 sm:py-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex flex-wrap justify-center items-center",children:[e.jsxs("span",{className:"mr-1",children:["© ",new Date().getFullYear()," ",e.jsx("a",{href:"https://github.com/khumnath/nepdate",target:"_blank",rel:"noopener noreferrer",className:"underline hover:text-gray-800 dark:hover:text-gray-200",children:"Nepdate Calendar Project"}),"."]}),e.jsx("span",{children:"All rights reserved."}),e.jsx("span",{className:"mx-2 hidden sm:inline text-gray-400",children:"|"}),e.jsx("button",{onClick:()=>n(!0),className:"underline hover:text-gray-800 dark:hover:text-gray-200 mt-2 sm:mt-0",children:s("calculationDetails")}),a&&e.jsx(Ma,{onClose:()=>n(!1)})]})},je={calendar:a=>[{label:a("bsMonth_0"),value:"calendar",param:{month:0}},{label:a("bsMonth_1"),value:"calendar",param:{month:1}},{label:a("bsMonth_2"),value:"calendar",param:{month:2}},{label:a("bsMonth_3"),value:"calendar",param:{month:3}},{label:a("bsMonth_4"),value:"calendar",param:{month:4}},{label:a("bsMonth_5"),value:"calendar",param:{month:5}}],calendar_ad:a=>[{label:a("adMonth_0"),value:"calendar",param:{month:0}},{label:a("adMonth_1"),value:"calendar",param:{month:1}},{label:a("adMonth_2"),value:"calendar",param:{month:2}},{label:a("adMonth_3"),value:"calendar",param:{month:3}},{label:a("adMonth_4"),value:"calendar",param:{month:4}},{label:a("adMonth_5"),value:"calendar",param:{month:5}}],calendar2:a=>[{label:a("bsMonth_6"),value:"calendar",param:{month:6}},{label:a("bsMonth_7"),value:"calendar",param:{month:7}},{label:a("bsMonth_8"),value:"calendar",param:{month:8}},{label:a("bsMonth_9"),value:"calendar",param:{month:9}},{label:a("bsMonth_10"),value:"calendar",param:{month:10}},{label:a("bsMonth_11"),value:"calendar",param:{month:11}}],calendar2_ad:a=>[{label:a("adMonth_6"),value:"calendar",param:{month:6}},{label:a("adMonth_7"),value:"calendar",param:{month:7}},{label:a("adMonth_8"),value:"calendar",param:{month:8}},{label:a("adMonth_9"),value:"calendar",param:{month:9}},{label:a("adMonth_10"),value:"calendar",param:{month:10}},{label:a("adMonth_11"),value:"calendar",param:{month:11}}],rashifal:a=>[{label:a("मेष","rashi"),value:"rashifal",param:"mesh"},{label:a("वृष","rashi"),value:"rashifal",param:"brish"},{label:a("मिथुन","rashi"),value:"rashifal",param:"mithun"},{label:a("कर्कट","rashi"),value:"rashifal",param:"karkat"},{label:a("सिंह","rashi"),value:"rashifal",param:"simha"},{label:a("कन्या","rashi"),value:"rashifal",param:"kanya"}],rashifal2:a=>[{label:a("तुला","rashi"),value:"rashifal",param:"tula"},{label:a("वृश्चिक","rashi"),value:"rashifal",param:"brishchik"},{label:a("धनु","rashi"),value:"rashifal",param:"dhanu"},{label:a("मकर","rashi"),value:"rashifal",param:"makar"},{label:a("कुम्भ","rashi"),value:"rashifal",param:"kumbha"},{label:a("मीन","rashi"),value:"rashifal",param:"meen"}],services:a=>[{label:a("converter"),value:"converter"},{label:a("rashifalMenu")||a("rashifalTitle")||"Horoscope",value:"rashifal"},{label:a("kundali"),value:"kundali"},{label:a("eclipse"),value:"eclipse"},{label:a("radio"),value:"radio"},{label:a("facebook"),value:"facebook"}]},fs=({onNavigate:a})=>{const{t:n,language:s,tAstro:m,calendarSystem:c}=xe(),[b,i]=l.useState(!1),g=(d,x,p)=>{d.preventDefault(),a(x,p),x==="calendar"?setTimeout(()=>{const f=document.getElementById("main-calendar-grid");f?f.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})},100):window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs("footer",{className:"hidden md:block bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-10 pb-8 mt-auto",children:[e.jsxs("div",{className:"max-w-7xl xl:max-w-6xl mx-auto px-4 md:px-6",children:[e.jsxs("div",{className:"grid grid-cols-4 gap-8 mb-10",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-gray-900 dark:text-gray-100 font-bold mb-4 uppercase text-sm tracking-wider font-rhodium",children:c==="ad"?s==="en"?"Gregorian Calendar":s==="hi"?"ग्रेगोरियन कैलेंडर":"अंग्रेजी क्यालेण्डर":s==="en"?"Vikram Calendar":s==="hi"?"विक्रम कैलेंडर":"विक्रम क्यालेण्डर"}),e.jsxs("div",{className:"grid grid-cols-2 gap-x-4",children:[e.jsx("ul",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:(c==="ad"?je.calendar_ad(n):je.calendar(n)).map((d,x)=>e.jsx("li",{children:e.jsx("button",{onClick:p=>g(p,d.value,d.param),className:"hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:d.label})},x))}),e.jsx("ul",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:(c==="ad"?je.calendar2_ad(n):je.calendar2(n)).map((d,x)=>e.jsx("li",{children:e.jsx("button",{onClick:p=>g(p,d.value,d.param),className:"hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:d.label})},x))})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-gray-900 dark:text-gray-100 font-bold mb-4 uppercase text-sm tracking-wider font-rhodium",children:s==="en"?"Horoscope":"राशिफल (Horoscope)"}),e.jsxs("div",{className:"grid grid-cols-2 gap-x-4",children:[e.jsx("ul",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:je.rashifal(m).map((d,x)=>e.jsx("li",{children:e.jsx("button",{onClick:p=>g(p,d.value,d.param),className:"hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:d.label})},x))}),e.jsx("ul",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:je.rashifal2(m).map((d,x)=>e.jsx("li",{children:e.jsx("button",{onClick:p=>g(p,d.value,d.param),className:"hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:d.label})},x))})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-gray-900 dark:text-gray-100 font-bold mb-4 uppercase text-sm tracking-wider font-rhodium",children:s==="en"?"Services":s==="hi"?"सेवाएं (Services)":"सेवाहरू (Services)"}),e.jsx("ul",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:je.services(n).map((d,x)=>e.jsx("li",{children:e.jsx("button",{onClick:p=>g(p,d.value),className:"hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-left font-rhodium",children:d.label})},x))})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-4 -ml-2",children:e.jsx(ra,{activeSystem:"bs"})}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed",children:s==="en"?"Your trusted partner for Nepali dates, festivals, astrology, and muhurtas.":s==="hi"?"नेपाली तिथियों, त्योहारों, ज्योतिष और मुहूर्तों के लिए आपका विश्वसनीय साथी।":"नेपाली मिति, चाडबाड, ज्योतिष र मुहूर्तहरूको लागि तपाईंको भरपर्दो पात्रो।"}),e.jsx("a",{href:"https://play.google.com/store/apps/details?id=com.khumnath.nepdate",target:"_blank",rel:"noopener noreferrer",className:"inline-block mb-6",children:e.jsx("img",{src:"https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png",alt:"Get it on Google Play",className:"h-16 -ml-3"})}),e.jsxs("ul",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(Ba,{className:"w-4 h-4 shrink-0"}),e.jsx("span",{children:"aksharlabstudio1@gmail.com"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(ya,{className:"w-4 h-4 shrink-0"}),e.jsx("span",{children:s==="en"?"Butwal, Nepal":"बुटवल, नेपाल"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(La,{className:"w-4 h-4 shrink-0"}),e.jsx("a",{href:"https://www.facebook.com/people/NepDate-Patro/61584433679641/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-blue-600 transition-colors",children:s==="en"?"NepDate Patro":"नेपडेट पात्रो"})]})]})]})]}),e.jsxs("div",{className:"border-t border-gray-200 dark:border-gray-800 pt-6 text-center flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4",children:[e.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["© ",new Date().getFullYear()," ",s==="en"?"NepDate Patro. All Rights Reserved.":"नेपडेट पात्रो। सर्वाधिकार सुरक्षित।"]}),e.jsx("span",{className:"hidden sm:inline text-gray-400",children:"|"}),e.jsx("button",{onClick:()=>i(!0),className:"text-sm text-gray-500 dark:text-gray-400 underline hover:text-gray-800 dark:hover:text-gray-200 transition-colors",children:n("calculationDetails")})]})]}),b&&e.jsx(Ma,{onClose:()=>i(!1)})]})},Aa=(a,n,s,m,c,b=null,i=[],g=null)=>{let d=`आज साताको ${a}। `;if(i&&i.length>0){const f=i.map(o=>o.name).join(" र ");d+=`आजको दिन ${f} परेको छ। `}s?(d+=`आज ${s} सम्म ${n} तिथि रहनेछ`,m?d+=` र त्यसपछि ${m} तिथि आरम्भ हुनेछ। `:d+="। "):d+=`आज दिनभर ${n} तिथि रहनेछ। `,b?d+=`साथै आज ${b} नक्षत्र र `:d+="आज ";const p={विष्कुम्भ:"यस योगमा गरिएको कार्यले प्रारम्भमा केही बाधा आए पनि अन्त्यमा सफलता दिलाउनेछ।",प्रीति:"यस योगले प्रेम, सद्भाव र पारिवारिक सुख वृद्धि गर्नेछ।",आयुष्मान:"यस योगले आयु र स्वास्थ्यमा सकारात्मक प्रभाव पार्नेछ।",आयुष्मान्:"यस योगले आयु र स्वास्थ्यमा सकारात्मक प्रभाव पार्नेछ।",सौभाग्य:"यस योगमा गरिएका कार्यले नाम जस्तै सौभाग्य र सुख लिएर आउनेछ।",शोभन:"यस योगले सम्पूर्ण कार्यमा सुन्दरता र शुभ फल प्रदान गर्नेछ।",अतिगण्ड:"यस योगमा कार्य गर्दा केही कठिनाइ आउन सक्ने भएकाले संयमता अपनाउनुहोला।",सुकर्मा:"यस योगले असल कर्मतर्फ प्रेरित गर्दै पुण्य र सफलता दिलाउनेछ।",धृति:"यस योगमा गरिएको धैर्यपूर्ण कार्यले स्थायी र उत्तम प्रतिफल दिनेछ।",शूल:"यस योगमा महत्त्वपूर्ण निर्णयहरू लिँदा विशेष होसियारी अपनाउनुहोला।",गण्ड:"यस योगमा नयाँ कार्यको थालनी गर्दा सावधानी अपनाउनु उपयुक्त हुनेछ।",वृद्धि:"यस योगले धन, ज्ञान र व्यवसायमा निरन्तर वृद्धि गराउनेछ।",ध्रुव:"यस योगमा सुरु गरिएका कार्यहरू स्थायी हुने र दीर्घकालीन लाभ दिनेछन्।",व्याघात:"यस योगमा अनावश्यक विवाद र वादविवादबाट टाढै रहनु बेस हुनेछ।",हर्षण:"यस योगले मनमा प्रशन्नता ल्याउने र कार्यमा उत्साह जगाउनेछ।",वज्र:"यस योगमा गरिएको कार्यले वज्र जस्तै बलियो र दृढ परिणाम दिनेछ।",सिद्धि:"यस योगले सम्पूर्ण कार्यमा सिद्धि (सफलता) र मनोकामना पूर्ण गराउनेछ।",व्यतीपात:"यस योगमा ठूला र महत्त्वपूर्ण निर्णयहरू लिँदा पुनर्विचार गर्नुहोला।",वरीयान्:"यस योगले जीवनमा श्रेष्ठता, सम्मान र उच्च सफलता दिलाउनेछ।",परिघ:"यस योगमा कार्य गर्दा केही बाधाहरू आउन सक्ने भएकाले धैर्यता अपनाउनुहोला।",शिव:"यस योगले महादेवको कृपास्वरूप सम्पूर्ण कार्यमा कल्याण र शान्ति ल्याउनेछ।",सिद्ध:"यस योगमा थालिएका कामहरू विना कुनै विघ्नबाधा सम्पन्न हुनेछन्।",साध्य:"यस योगले असम्भव जस्तो लाग्ने कार्यलाई पनि सहजै साध्न (पुरा गर्न) मद्दत गर्नेछ।",शुभ:"यस योगले जीवनका हरेक क्षेत्रमा शुभ फल र मङ्गलमय परिणाम दिनेछ।",शुक्ल:"यस योगले ज्ञान, पवित्रता र कार्यमा उज्ज्वलता प्रदान गर्नेछ।",ब्रह्म:"यस योगले आध्यात्मिक चिन्तन र विद्या अध्ययनमा विशेष सफलता दिनेछ।",इन्द्र:"यस योगले नेतृत्व क्षमता, राज्यसुख र प्रशासनिक कार्यमा विजय दिलाउनेछ।",वैधृति:"यस योगमा नयाँ लगानी वा महत्त्वपूर्ण कार्य गर्दा सजग रहनुहोला।"}[c]||"यस योगमा गरिएका कार्यहरूमा शुभ फल मिल्ने विश्वास गरिन्छ।";return d+=`आज ${c} योग परेको छ। ${p} `,g&&g.isActiveCivil?g.isHarmful?d+=`ध्यान दिनुहोला, आज ${g.residence}मा भद्रा परेको छ र यसको प्रभाव अशुभ मानिन्छ। शुभ कार्यहरू भद्रा समयपछि मात्र गर्दा राम्रो हुनेछ।`:d+=`आज ${g.residence}मा भद्रा रहे पनि यसको प्रभाव शुभ फलदायी मानिन्छ।`:d+="आज गरिएका कार्यहरूमा शुभ फल मिल्ने विश्वास गरिन्छ।",d},ps=(a,n=[])=>{if(n&&n.length>0){const g=n[0].name,d=[`${g} को यस पावन अवसरमा व्रत, पूजापाठ तथा दान-पुण्य गर्नाले विशेष फल मिल्नेछ।`,`आज ${g} को विशेष दिन भएकाले इष्टदेवको आराधना गर्दा जीवनमा सुख र समृद्धि प्राप्त हुनेछ।`,`${g} को शुभ अवसरमा सम्पूर्ण परिवारको कल्याणको कामना गर्दै धार्मिक कार्यमा सहभागी हुनुहोला।`],x=new Date,p=Math.floor((x.getTime()-new Date(x.getFullYear(),0,0).getTime())/1e3/60/60/24);return d[p%d.length]}const s={0:["आज आइतबार भगवान सूर्य नारायणको उपासना र आदित्य हृदय स्तोत्रको पाठ गर्नाले तेज, ऊर्जा र सफलता प्राप्त हुनेछ।","सूर्यदेवलाई अर्घ्य दिएर दिनको आरम्भ गर्नुहोस्, सम्पूर्ण कार्यहरूमा सिद्धि मिल्नेछ।"],1:["आज सोमबार भगवान शिवको आराधना र जल अभिषेक गर्नाले मानसिक शान्ति र सुख प्राप्त हुनेछ।","महादेवको पूजा अर्चना गर्दै ॐ नमः शिवाय मन्त्रको जप गर्नुहोला, दिन शुभ रहनेछ।"],2:["आज मंगलबार संकटमोचन हनुमानजीको दर्शन र हनुमान चालिसा पाठ गर्नाले सम्पूर्ण विघ्न-बाधा दूर हुनेछन्।","बजरङ्गबलीको कृपाले तपाईंका कार्यहरू निर्विघ्न सम्पन्न हुनेछन्। आज रातो वस्त्र धारण गर्नु शुभ मानिन्छ।"],3:["आज बुधबार भगवान गणेश र श्रीकृष्णको पूजा आराधना गर्नाले बुद्धि र विवेकमा वृद्धि हुनेछ।","श्रीहरि विष्णुको स्मरण गर्दै दिनको सुरुवात गर्नुहोला, घर-परिवारमा प्रेम र सद्भाव बनिरहनेछ।"],4:["आज बिहीबार भगवान विष्णु र बृहस्पति देवको पूजा गर्नाले शिक्षा, ज्ञान र धनमा वृद्धि हुनेछ।","आजको दिन पहेँलो वस्त्र धारण गर्नु र गुरुजनको आशीर्वाद लिनु अत्यन्त शुभ मानिन्छ।"],5:["आज शुक्रबार माता लक्ष्मी र सन्तोषी माताको आराधना गर्नाले घरमा धन-धान्य र सुख-समृद्धिले बास गर्नेछ।","माता भगवतीको स्मरण गर्दै कन्याहरूलाई दान गर्नाले विशेष शुभ फल प्राप्त हुनेछ।"],6:["आज शनिबार न्यायका देवता शनिदेवको पूजा र पिपलको वृक्षमा जल चढाउनाले सम्पूर्ण कष्ट निवारण हुनेछन्।","शनिदेवको कृपा प्राप्त गर्न आज गरिब तथा दुःखीहरूलाई सहयोग गर्नु अत्यन्त फलदायी मानिन्छ।"]},m=s[a]||s[0],c=new Date,i=Math.floor((c.getTime()-new Date(c.getFullYear(),0,0).getTime())/1e3/60/60/24)%m.length;return m[i]},us=["आइतवार","सोमवार","मंगलवार","बुधवार","बिहीवार","शुक्रवार","शनिवार"],U=a=>wa(a),Ee=a=>{if(!a)return"";try{const n=new Date(a);if(isNaN(n.getTime()))return"";let s=n.getHours();const m=n.getMinutes();let c="बिहान";return s>=12&&s<16?c="दिउँसो":s>=16&&s<20?c="बेलुका":(s>=20||s<4)&&(c="राति"),s>12&&(s-=12),s===0&&(s=12),`${c} ${U(s)}:${U(m<10?"0"+m:m)} सम्म`}catch{return""}},Re=a=>{if(!a)return"—";try{const n=new Date(a);if(isNaN(n.getTime()))return"—";let s=n.getHours();const m=n.getMinutes();let c="बिहान";return s>=12&&s<16?c="दिउँसो":s>=16&&s<20?c="बेलुका":(s>=20||s<4)&&(c="राति"),s>12&&(s-=12),s===0&&(s=12),`${U(s)}:${U(m<10?"0"+m:m)} ${c}`}catch{return"—"}},xa=({data:a,date:n,onLoad:s,variant:m,isOffscreen:c=!1})=>{if(Y.useEffect(()=>{if(s){const J=setTimeout(s,500);return()=>clearTimeout(J)}},[s,a]),!a)return null;const b=ue(n),i=b?.year?b.year.toString():"0",g=b?.monthName||"",d=b?.day||0,x=va(n),p=us[x]||"",o=`${["जनवरी","फेब्रुअरी","मार्च","अप्रिल","मे","जुन","जुलाई","अगस्ट","सेप्टेम्बर","अक्टोबर","नोभेम्बर","डिसेम्बर"][n.getMonth()]} ${U(n.getDate())}, ${U(n.getFullYear())}`,w=a.tithis?.[0],y=a.tithis?.[1],r=a.nakshatras?.[0],T=a.nakshatras?.[1],t=a.yogas?.[0],B=a.yogas?.[1],W=a.karanas?.[0],A=a.karanas?.[1],O=a.moonRashis?.[0],P=Aa(p,w?.name||"",Ee(w?.endTime),y?.name||null,t?.name||"",r?.name||null,a.events,a.bhadra),j=ps(x,a.events),I=(()=>{if(!a.sunriseIso||!a.sunsetIso||!a.nextSunriseIso)return{dinamanaGp:"—",ratrimanaGp:"—"};const J=a.sunriseMs??new Date(a.sunriseIso).getTime(),se=a.sunsetMs??new Date(a.sunsetIso).getTime(),Z=a.nextSunriseMs??new Date(a.nextSunriseIso).getTime(),_=Z-J,te=se-J,le=Z-se,re=q=>{const h=q/_*60,k=Math.floor(h),C=Math.floor((h-k)*60);return`${U(k)} घडी ${U(C)} पला`};return{dinamanaGp:re(te),ratrimanaGp:re(le)}})(),S=a.ayana==="Uttarayana"?"उत्तरायण":a.ayana==="Dakshinayana"?"दक्षिणायन":a.ayana,Q={1:{primary:"#1a237e",secondary:"#c62828",sidebar:"linear-gradient(180deg, #1565c0 0%, #0d47a1 50%, #1a237e 100%)",footer:"linear-gradient(95deg,#0a4f48 0%,#0f7269 22%,#17967f 42%,#4a9f6f 62%,#c9ac4e 82%,#e8bd45 100%)",bg:"linear-gradient(135deg, #f0f2f5, #e8eaed)"},2:{primary:"#4a148c",secondary:"#c2185b",sidebar:"linear-gradient(180deg, #7b1fa2 0%, #6a1b9a 50%, #4a148c 100%)",footer:"linear-gradient(95deg,#4a148c 0%,#6a1b9a 22%,#8e24aa 42%,#ab47bc 62%,#ce93d8 82%,#f48fb1 100%)",bg:"linear-gradient(135deg, #f3e5f5, #fce4ec)"},3:{primary:"#bf360c",secondary:"#b71c1c",sidebar:"linear-gradient(180deg, #e65100 0%, #d84315 50%, #bf360c 100%)",footer:"linear-gradient(95deg,#bf360c 0%,#d84315 22%,#e64a19 42%,#f4511e 62%,#ff8a65 82%,#ffcc80 100%)",bg:"linear-gradient(135deg, #fbe9e7, #fff3e0)"},4:{primary:"#006064",secondary:"#01579b",sidebar:"linear-gradient(180deg, #00838f 0%, #006064 50%, #004d40 100%)",footer:"linear-gradient(95deg,#004d40 0%,#00695c 22%,#00796b 42%,#00897b 62%,#4db6ac 82%,#80cbc4 100%)",bg:"linear-gradient(135deg, #e0f7fa, #e0f2f1)"},5:{primary:"#880e4f",secondary:"#e65100",sidebar:"linear-gradient(180deg, #c2185b 0%, #880e4f 50%, #4a148c 100%)",footer:"linear-gradient(95deg,#b71c1c 0%,#c62828 22%,#d32f2f 42%,#e53935 62%,#ffb300 82%,#ffca28 100%)",bg:"linear-gradient(135deg, #fce4ec, #fbe9e7)"}},$=Q[m||1]||Q[1];return e.jsx("div",{style:c?{position:"absolute",top:-9999,left:-9999,zIndex:-1,pointerEvents:"none"}:{},children:e.jsxs("div",{id:"panchanga-share-card",className:"poster",style:{"--theme-primary":$.primary,"--theme-secondary":$.secondary,"--theme-sidebar":$.sidebar,"--theme-footer":$.footer,"--theme-bg":$.bg},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`

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
  font-size: 18px;
  font-weight: 500;
  color: var(--theme-primary, #1a237e);
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
`}}),e.jsxs("svg",{className:"mountain-bg",viewBox:"0 0 500 200",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"skyGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#b3d4f0"}),e.jsx("stop",{offset:"100%",stopColor:"#e8f0f8"})]}),e.jsxs("linearGradient",{id:"mountainGrad1",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),e.jsx("stop",{offset:"40%",stopColor:"#d0dce8"}),e.jsx("stop",{offset:"100%",stopColor:"#8fa4b8"})]}),e.jsxs("linearGradient",{id:"mountainGrad2",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#e8eef4"}),e.jsx("stop",{offset:"100%",stopColor:"#a0b4c8"})]})]}),e.jsx("rect",{width:"500",height:"200",fill:"url(#skyGrad)",opacity:"0.5"}),e.jsx("path",{d:"M100,180 L180,60 L220,90 L280,30 L340,80 L400,50 L460,100 L500,80 L500,200 L100,200 Z",fill:"url(#mountainGrad2)",opacity:"0.6"}),e.jsx("path",{d:"M150,180 L220,80 L260,110 L310,50 L370,90 L420,60 L470,110 L500,90 L500,200 L150,200 Z",fill:"url(#mountainGrad1)",opacity:"0.8"}),e.jsx("path",{d:"M280,30 L295,55 L270,50 Z",fill:"white",opacity:"0.9"}),e.jsx("path",{d:"M310,50 L325,70 L300,65 Z",fill:"white",opacity:"0.8"}),e.jsx("path",{d:"M400,50 L415,70 L390,65 Z",fill:"white",opacity:"0.9"}),e.jsxs("g",{transform:"translate(380, 60)",children:[e.jsx("rect",{x:"10",y:"80",width:"60",height:"8",fill:"#8B4513",rx:"2"}),e.jsx("polygon",{points:"0,80 80,80 70,65 10,65",fill:"#654321"}),e.jsx("rect",{x:"15",y:"65",width:"50",height:"15",fill:"#8B6914"}),e.jsx("polygon",{points:"5,65 75,65 65,50 15,50",fill:"#654321"}),e.jsx("rect",{x:"20",y:"50",width:"40",height:"15",fill:"#8B6914"}),e.jsx("polygon",{points:"10,50 70,50 60,38 20,38",fill:"#654321"}),e.jsx("rect",{x:"25",y:"38",width:"30",height:"12",fill:"#8B6914"}),e.jsx("polygon",{points:"15,38 65,38 55,28 25,28",fill:"#654321"}),e.jsx("line",{x1:"40",y1:"28",x2:"40",y2:"10",stroke:"#DAA520",strokeWidth:"3"}),e.jsx("circle",{cx:"40",cy:"8",r:"4",fill:"#DAA520"}),e.jsx("rect",{x:"30",y:"70",width:"8",height:"8",fill:"#4a3010",rx:"1"}),e.jsx("rect",{x:"45",y:"70",width:"8",height:"8",fill:"#4a3010",rx:"1"})]})]}),e.jsxs("div",{className:"header",children:[e.jsx("div",{className:"logo-section",children:e.jsx("img",{src:Ca,alt:"NepDate Logo",style:{height:60,objectFit:"contain"}})}),e.jsxs("div",{className:"title-section",children:[e.jsxs("div",{className:"main-title",children:[e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"5",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"25",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"5",cy:"15",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"25",cy:"15",r:"2.5",fill:"#c62828"})]}),e.jsx("span",{children:"आजको"}),e.jsx("span",{className:"red",children:"पञ्चाङ्ग"}),e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"5",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"25",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"5",cy:"15",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"25",cy:"15",r:"2.5",fill:"#c62828"})]})]}),e.jsx("div",{className:"title-sub",children:"हरेक दिनको विश्वास"})]}),e.jsx("div",{style:{width:"120px"}})]}),e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"left-sidebar",children:[e.jsxs("svg",{className:"sidebar-calendar-icon",width:"40",height:"40",viewBox:"0 0 40 40",children:[e.jsx("rect",{x:"5",y:"8",width:"30",height:"28",rx:"3",fill:"none",stroke:"white",strokeWidth:"2"}),e.jsx("line",{x1:"5",y1:"16",x2:"35",y2:"16",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"10",y:"4",width:"4",height:"8",rx:"1",fill:"white"}),e.jsx("rect",{x:"26",y:"4",width:"4",height:"8",rx:"1",fill:"white"}),e.jsx("rect",{x:"10",y:"20",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"17.5",y:"20",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"25",y:"20",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"10",y:"27",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"17.5",y:"27",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"}),e.jsx("rect",{x:"25",y:"27",width:"5",height:"5",rx:"1",fill:"white",opacity:"0.5"})]}),e.jsx("div",{className:"sidebar-label",children:"विक्रम संवत्"}),e.jsx("div",{className:"sidebar-big-date",children:U(d)}),e.jsx("div",{className:"sidebar-month",children:g}),e.jsx("div",{className:"sidebar-year",children:U(i).slice(-2)}),e.jsx("div",{className:"sidebar-day",children:p}),e.jsxs("div",{className:"sidebar-gregorian",children:["तद्नुसार",e.jsx("br",{}),o]})]}),e.jsxs("div",{className:"center-content",children:[e.jsxs("div",{className:"date-banner",children:[e.jsx("div",{className:"date-banner-icon",children:e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",children:[e.jsx("rect",{x:"3",y:"6",width:"22",height:"20",rx:"2",fill:"none",stroke:"white",strokeWidth:"2"}),e.jsx("line",{x1:"3",y1:"12",x2:"25",y2:"12",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"7",y:"2",width:"3",height:"6",rx:"1",fill:"white"}),e.jsx("rect",{x:"18",y:"2",width:"3",height:"6",rx:"1",fill:"white"})]})}),e.jsxs("div",{style:{flex:1,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px",whiteSpace:"nowrap"},children:[e.jsxs("div",{className:"date-banner-text",style:{fontSize:"18px"},children:["विक्रम संवत् ",e.jsx("span",{className:"red",children:U(i)})," ",g," ",U(d)," गते"]}),a.nepalSambatYear&&e.jsxs("div",{className:"date-banner-sub",style:{fontSize:"14px",color:"#1a237e",fontWeight:600},children:["नेपाल संवत् ",U(a.nepalSambatYear)," ",a.nepalSambatMonthName," ",U(a.nepalSambatDay)]}),e.jsxs("div",{className:"date-banner-sub",children:["तद्नुसार ",o]})]}),e.jsx("div",{style:{fontSize:"24px",fontWeight:900,color:"#c62828",borderLeft:"2px solid #eee",paddingLeft:"20px",paddingRight:"10px"},children:p})]})]}),e.jsxs("div",{className:"panchang-row",children:[e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("path",{d:"M18,5 A12,12 0 1,0 18,25 A8,8 0 1,1 18,5",fill:"#ffd700"}),e.jsx("circle",{cx:"10",cy:"10",r:"1.5",fill:"white"}),e.jsx("circle",{cx:"20",cy:"15",r:"1",fill:"white"}),e.jsx("circle",{cx:"12",cy:"22",r:"1",fill:"white"})]})}),e.jsx("div",{className:"panchang-box-label",children:"तिथि"}),e.jsx("div",{className:"panchang-box-value",children:w?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:w?.endTime?`(${Ee(w.endTime)})`:""}),y?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),y.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"none",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("circle",{cx:"15",cy:"6",r:"2",fill:"#ffd700"}),e.jsx("circle",{cx:"22",cy:"10",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"24",cy:"18",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"20",cy:"24",r:"2",fill:"#ffd700"}),e.jsx("circle",{cx:"12",cy:"24",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"7",cy:"18",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"8",cy:"10",r:"2",fill:"#ffd700"}),e.jsx("line",{x1:"15",y1:"6",x2:"22",y2:"10",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"22",y1:"10",x2:"24",y2:"18",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"24",y1:"18",x2:"20",y2:"24",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"20",y1:"24",x2:"12",y2:"24",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"12",y1:"24",x2:"7",y2:"18",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"7",y1:"18",x2:"8",y2:"10",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"8",y1:"10",x2:"15",y2:"6",stroke:"#ffd700",strokeWidth:"0.8"})]})}),e.jsx("div",{className:"panchang-box-label",children:"नक्षत्र"}),e.jsx("div",{className:"panchang-box-value",children:r?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:r?.endTime?`(${Ee(r.endTime)})`:""}),T?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),T.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"8",r:"4",fill:"#ffd700"}),e.jsx("path",{d:"M15,12 L15,20 M10,16 L20,16 M12,20 L15,26 L18,20",stroke:"#ffd700",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),e.jsx("circle",{cx:"15",cy:"15",r:"10",fill:"none",stroke:"#ffd700",strokeWidth:"1",opacity:"0.5"})]})}),e.jsx("div",{className:"panchang-box-label",children:"योग"}),e.jsx("div",{className:"panchang-box-value",children:t?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:t?.endTime?`(${Ee(t.endTime)})`:""}),B?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),B.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"#1a237e"}),e.jsx("path",{d:"M15,3 A12,12 0 0,1 15,27 A8,8 0 0,0 15,3",fill:"#ffd700"})]})}),e.jsx("div",{className:"panchang-box-label",children:"करण"}),e.jsx("div",{className:"panchang-box-value",children:W?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:W?.endTime?`(${Ee(W.endTime)})`:""}),A?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),A.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"none",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("circle",{cx:"15",cy:"15",r:"8",fill:"none",stroke:"#ffd700",strokeWidth:"1"}),e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"none",stroke:"#ffd700",strokeWidth:"1"}),e.jsx("line",{x1:"15",y1:"3",x2:"15",y2:"7",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("line",{x1:"15",y1:"23",x2:"15",y2:"27",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("line",{x1:"3",y1:"15",x2:"7",y2:"15",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("line",{x1:"23",y1:"15",x2:"27",y2:"15",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("circle",{cx:"15",cy:"15",r:"2",fill:"#ffd700"})]})}),e.jsx("div",{className:"panchang-box-label",children:"चन्द्र राशि"}),e.jsx("div",{className:"panchang-box-value",children:O?.name||"—"})]})]}),e.jsxs("div",{className:"other-details-body",children:[e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#1a237e"}),e.jsx("line",{x1:"4",y1:"12",x2:"28",y2:"12",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"8",y:"2",width:"4",height:"6",rx:"1",fill:"#1a237e"}),e.jsx("rect",{x:"20",y:"2",width:"4",height:"6",rx:"1",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"वार"}),e.jsx("div",{className:"detail-value",children:p})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#1a237e"}),e.jsx("path",{d:"M16,4 A12,12 0 0,1 16,28 A8,8 0 0,0 16,4",fill:"#ffd700"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"पक्ष"}),e.jsx("div",{className:"detail-value",children:a.paksha||""})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#7b1fa2"}),e.jsx("line",{x1:"4",y1:"12",x2:"28",y2:"12",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"8",y:"2",width:"4",height:"6",rx:"1",fill:"#7b1fa2"}),e.jsx("rect",{x:"20",y:"2",width:"4",height:"6",rx:"1",fill:"#7b1fa2"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"मास"}),e.jsx("div",{className:"detail-value",children:a.lunarMonth||""})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#2e7d32"}),e.jsx("path",{d:"M10,20 Q16,12 22,20 Q16,24 10,20",fill:"#81c784"}),e.jsx("line",{x1:"16",y1:"20",x2:"16",y2:"26",stroke:"#81c784",strokeWidth:"2"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"ऋतु"}),e.jsx("div",{className:"detail-value",children:a.ritu||""})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#c62828"}),e.jsx("line",{x1:"4",y1:"12",x2:"28",y2:"12",stroke:"white",strokeWidth:"2"}),e.jsx("rect",{x:"8",y:"2",width:"4",height:"6",rx:"1",fill:"#c62828"}),e.jsx("rect",{x:"20",y:"2",width:"4",height:"6",rx:"1",fill:"#c62828"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"संवत्सर"}),e.jsx("div",{className:"detail-value",children:a.samvatsar||""})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#5e35b1"}),e.jsx("path",{d:"M10,16 Q16,10 22,16 Q16,22 10,16",fill:"#b39ddb"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"अयन"}),e.jsx("div",{className:"detail-value",children:S||"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#00acc1"}),e.jsx("path",{d:"M12,16 L16,12 L20,16 L16,20 Z",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"आनन्दादि योग"}),e.jsx("div",{className:"detail-value",children:a.anandadiYoga?a.anandadiYoga.nameNe:"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#fdd835"}),e.jsx("circle",{cx:"16",cy:"16",r:"6",fill:"#f57f17"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"दिनमान"}),e.jsx("div",{className:"detail-value",children:I.dinamanaGp})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#3949ab"}),e.jsx("path",{d:"M12,10 A6,6 0 0,0 12,22 A8,8 0 0,1 12,10",fill:"#c5cae9"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"रात्रिमान"}),e.jsx("div",{className:"detail-value",children:I.ratrimanaGp})]})]})]})]}),e.jsxs("div",{className:"right-panel",children:[e.jsx("div",{className:"shubh-header",children:"शुभ समय"}),e.jsxs("div",{className:"shubh-body",children:[e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("circle",{cx:"18",cy:"20",r:"10",fill:"#ffd700"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#4fc3f7"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"सूर्योदय"}),e.jsx("div",{className:"shubh-item-value",children:Re(a.sunriseIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("circle",{cx:"18",cy:"20",r:"10",fill:"#ff8a65"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#4fc3f7"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"सूर्यास्त"}),e.jsx("div",{className:"shubh-item-value",children:Re(a.sunsetIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("path",{d:"M16,9 A9,9 0 0,0 16,25 A11,11 0 0,1 25,18 A9,9 0 0,0 16,9",fill:"#b0bec5"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"चन्द्रोदय"}),e.jsx("div",{className:"shubh-item-value",children:Re(a.moonriseIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("path",{d:"M16,9 A9,9 0 0,0 16,25 A11,11 0 0,1 25,18 A9,9 0 0,0 16,9",fill:"none",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"चन्द्रास्त"}),e.jsx("div",{className:"shubh-item-value",children:Re(a.moonsetIso)})]})]})]})]})]}),e.jsx("div",{className:"other-details-section",children:e.jsxs("div",{className:"other-details-body",children:[e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"#1565c0"}),e.jsx("path",{d:"M12,12 Q16,16 12,20 A4,4 0 1,0 20,20 Q16,16 20,12 A4,4 0 1,0 12,12",fill:"none",stroke:"white",strokeWidth:"2"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"अहर्गण"}),e.jsx("div",{className:"detail-value",children:a.ahargana?U(Math.floor(a.ahargana)):"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#e65100"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"}),e.jsx("line",{x1:"16",y1:"13",x2:"16",y2:"17",stroke:"#e65100",strokeWidth:"2"}),e.jsx("line",{x1:"16",y1:"17",x2:"19",y2:"17",stroke:"#e65100",strokeWidth:"2"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"जुलियन दिन"}),e.jsx("div",{className:"detail-value",children:a.julianDay?U(Math.floor(a.julianDay)):"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#00897b"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"नेपाल संवत् (चान्द्र)"}),e.jsx("div",{className:"detail-value",children:a.nepalSambatYear?`${U(a.nepalSambatYear)} ${a.nepalSambatMonthName} ${U(a.nepalSambatDay)}`:"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#d81b60"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"नेपाल संवत् (सौर)"}),e.jsx("div",{className:"detail-value",children:a.nepalSambatSolar?`${U(a.nepalSambatSolar.year)} ${a.nepalSambatSolar.monthNameNe} ${U(a.nepalSambatSolar.day)}`:"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#6d4c41"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"शक वर्ष"}),e.jsx("div",{className:"detail-value",children:a.shakaYear?U(a.shakaYear):"—"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsxs("svg",{className:"detail-icon",viewBox:"0 0 32 32",children:[e.jsx("rect",{x:"4",y:"6",width:"24",height:"22",rx:"3",fill:"#43a047"}),e.jsx("circle",{cx:"16",cy:"17",r:"6",fill:"white"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-label",children:"कलि वर्ष"}),e.jsx("div",{className:"detail-value",children:a.kaliYear?U(a.kaliYear):"—"})]})]})]})}),e.jsxs("div",{className:"bottom-sections",children:[e.jsxs("div",{className:"special-box",children:[e.jsx("div",{className:"special-header-wrap",children:e.jsx("div",{className:"special-header",children:"आजको विशेष"})}),e.jsxs("div",{className:"special-content",children:[e.jsxs("svg",{className:"special-decor",width:"80",height:"100",viewBox:"0 0 80 100",children:[e.jsx("ellipse",{cx:"40",cy:"75",rx:"20",ry:"8",fill:"#8B4513"}),e.jsx("path",{d:"M25,75 Q25,60 40,55 Q55,60 55,75",fill:"#D2691E"}),e.jsx("ellipse",{cx:"40",cy:"55",rx:"15",ry:"5",fill:"#FFD700"}),e.jsx("path",{d:"M40,55 Q35,40 40,25 Q45,40 40,55",fill:"#FF6600"}),e.jsx("path",{d:"M40,50 Q37,42 40,32 Q43,42 40,50",fill:"#FFD700"}),e.jsx("path",{d:"M40,45 Q38,40 40,35 Q42,40 40,45",fill:"#FFF8DC"}),e.jsx("circle",{cx:"15",cy:"85",r:"8",fill:"#FF69B4"}),e.jsx("circle",{cx:"15",cy:"85",r:"4",fill:"#FFB6C1"}),e.jsx("circle",{cx:"10",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"20",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"10",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"20",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"65",cy:"85",r:"8",fill:"#FF69B4"}),e.jsx("circle",{cx:"65",cy:"85",r:"4",fill:"#FFB6C1"}),e.jsx("circle",{cx:"60",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"70",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"60",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"70",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("ellipse",{cx:"8",cy:"88",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(-30,8,88)"}),e.jsx("ellipse",{cx:"72",cy:"88",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(30,72,88)"})]}),e.jsx("div",{children:P})]})]}),e.jsxs("div",{className:"message-box",children:[e.jsx("div",{className:"message-header-wrap",children:e.jsx("div",{className:"message-header",children:"शुभ सन्देश"})}),e.jsxs("div",{className:"message-content",children:[e.jsxs("svg",{className:"message-decor",width:"70",height:"90",viewBox:"0 0 70 90",children:[e.jsx("path",{d:"M35,15 L25,30 Q20,40 22,55 Q24,65 30,75 L35,80 L40,75 Q46,65 48,55 Q50,40 45,30 Z",fill:"#FDBCB4",stroke:"#E8A090",strokeWidth:"1"}),e.jsx("line",{x1:"35",y1:"20",x2:"35",y2:"75",stroke:"#E8A090",strokeWidth:"1.5"}),e.jsx("path",{d:"M25,35 Q30,32 35,35",fill:"none",stroke:"#E8A090",strokeWidth:"1"}),e.jsx("path",{d:"M45,35 Q40,32 35,35",fill:"none",stroke:"#E8A090",strokeWidth:"1"}),e.jsx("path",{d:"M22,55 Q15,60 10,70 Q8,75 12,78 Q18,75 25,70 Z",fill:"#4169E1"}),e.jsx("path",{d:"M48,55 Q55,60 60,70 Q62,75 58,78 Q52,75 45,70 Z",fill:"#4169E1"})]}),e.jsxs("div",{children:['"',j,'"']}),e.jsxs("svg",{width:"50",height:"60",viewBox:"0 0 50 60",style:{flexShrink:"0"},children:[e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(0,25,20)"}),e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(72,25,20)"}),e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(144,25,20)"}),e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(216,25,20)"}),e.jsx("ellipse",{cx:"25",cy:"20",rx:"8",ry:"12",fill:"#FF69B4",transform:"rotate(288,25,20)"}),e.jsx("circle",{cx:"25",cy:"20",r:"5",fill:"#FFD700"}),e.jsx("line",{x1:"25",y1:"32",x2:"25",y2:"55",stroke:"#228B22",strokeWidth:"2"}),e.jsx("ellipse",{cx:"18",cy:"45",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(-30,18,45)"}),e.jsx("ellipse",{cx:"32",cy:"48",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(30,32,48)"})]})]}),e.jsx("div",{className:"message-footer-text",children:"✨ आजको दिन सुखद रहोस् ! ✨"})]})]}),e.jsxs("footer",{className:"sc-footer",children:[e.jsx("div",{style:{backgroundColor:"white",padding:10,borderRadius:12},children:e.jsx("img",{src:Ta,alt:"NepDate Logo",style:{height:48,objectFit:"contain"}})}),e.jsx("div",{className:"sc-footer-divider"}),e.jsxs("div",{className:"sc-footer-text",children:["विस्तृत पञ्चाङ्ग, राशिफल र शुभ साइतका लागि",e.jsx("br",{}),e.jsx("span",{className:"sc-hl",children:"NepDate नेपाली पात्रो App डाउनलोड गर्नुहोस् ।"})]}),e.jsx("div",{className:"sc-playstore",children:e.jsx("img",{src:Ia,alt:"GET IT ON Google Play",style:{height:80,objectFit:"contain"}})}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"sc-footer-ornament",width:"140",height:"16",viewBox:"0 0 140 16",fill:"none",children:[e.jsx("path",{d:"M140 8C140 12.4183 136.418 16 132 16H8C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0H132C136.418 0 140 3.58172 140 8Z",fill:"white",fillOpacity:"0.1"}),e.jsx("circle",{cx:"70",cy:"8",r:"4",fill:"white",fillOpacity:"0.3"}),e.jsx("circle",{cx:"56",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"}),e.jsx("circle",{cx:"84",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"})]})]})]})})},ha="/assets/left_ornament-CNOcf_Fy.svg",bs="/assets/mountain_bg-Casg-URl.png",ys=["आइतवार","सोमवार","मंगलवार","बुधवार","बिहीवार","शुक्रवार","शनिवार"],de=a=>wa(a),Be=a=>{if(!a)return"";try{const n=new Date(a);if(isNaN(n.getTime()))return"";let s=n.getHours();const m=n.getMinutes();let c="बिहान";return s>=12&&s<16?c="दिउँसो":s>=16&&s<20?c="बेलुका":(s>=20||s<4)&&(c="राति"),s>12&&(s-=12),s===0&&(s=12),`${c} ${de(s)}:${de(m<10?"0"+m:m)} सम्म`}catch{return""}},Oe=a=>{if(!a)return"—";try{const n=new Date(a);if(isNaN(n.getTime()))return"—";let s=n.getHours();const m=n.getMinutes();let c="बिहान";return s>=12&&s<16?c="दिउँसो":s>=16&&s<20?c="बेलुका":(s>=20||s<4)&&(c="राति"),s>12&&(s-=12),s===0&&(s=12),`${de(s)}:${de(m<10?"0"+m:m)} ${c}`}catch{return"—"}},ma=({data:a,date:n,onLoad:s,variant:m,isOffscreen:c=!1})=>{if(Y.useEffect(()=>{if(s){const E=setTimeout(s,500);return()=>clearTimeout(E)}},[s,a]),!a)return null;const b=ue(n),i=b?.year?b.year.toString():"0",g=b?.monthName||"",d=b?.day||0,x=va(n),p=ys[x]||"",o=`${["जनवरी","फेब्रुअरी","मार्च","अप्रिल","मे","जुन","जुलाई","अगस्ट","सेप्टेम्बर","अक्टोबर","नोभेम्बर","डिसेम्बर"][n.getMonth()]} ${de(n.getDate())}, ${de(n.getFullYear())}`,w=a.tithis?.[0],y=a.tithis?.[1],r=a.nakshatras?.[0],T=a.nakshatras?.[1],t=a.yogas?.[0],B=a.yogas?.[1],W=a.karanas?.[0],A=a.karanas?.[1];a.moonRashis?.[0];const O=Aa(p,w?.name||"",Be(w?.endTime),y?.name||null,t?.name||"",r?.name||null,a.events,a.bhadra);a.ayana==="Uttarayana"||a.ayana==="Dakshinayana"||a.ayana;const P={1:{primary:"#1a237e",secondary:"#c62828",sidebar:"linear-gradient(180deg, #1565c0 0%, #0d47a1 50%, #1a237e 100%)",footer:"linear-gradient(95deg,#0a4f48 0%,#0f7269 22%,#17967f 42%,#4a9f6f 62%,#c9ac4e 82%,#e8bd45 100%)",bg:"linear-gradient(135deg, #f0f2f5, #e8eaed)"},2:{primary:"#4a148c",secondary:"#c2185b",sidebar:"linear-gradient(180deg, #7b1fa2 0%, #6a1b9a 50%, #4a148c 100%)",footer:"linear-gradient(95deg,#4a148c 0%,#6a1b9a 22%,#8e24aa 42%,#ab47bc 62%,#ce93d8 82%,#f48fb1 100%)",bg:"linear-gradient(135deg, #f3e5f5, #fce4ec)"},3:{primary:"#bf360c",secondary:"#b71c1c",sidebar:"linear-gradient(180deg, #e65100 0%, #d84315 50%, #bf360c 100%)",footer:"linear-gradient(95deg,#bf360c 0%,#d84315 22%,#e64a19 42%,#f4511e 62%,#ff8a65 82%,#ffcc80 100%)",bg:"linear-gradient(135deg, #fbe9e7, #fff3e0)"},4:{primary:"#006064",secondary:"#01579b",sidebar:"linear-gradient(180deg, #00838f 0%, #006064 50%, #004d40 100%)",footer:"linear-gradient(95deg,#004d40 0%,#00695c 22%,#00796b 42%,#00897b 62%,#4db6ac 82%,#80cbc4 100%)",bg:"linear-gradient(135deg, #e0f7fa, #e0f2f1)"},5:{primary:"#880e4f",secondary:"#e65100",sidebar:"linear-gradient(180deg, #c2185b 0%, #880e4f 50%, #4a148c 100%)",footer:"linear-gradient(95deg,#b71c1c 0%,#c62828 22%,#d32f2f 42%,#e53935 62%,#ffb300 82%,#ffca28 100%)",bg:"linear-gradient(135deg, #fce4ec, #fbe9e7)"}},j=P[m||1]||P[1];return e.jsx("div",{style:c?{position:"absolute",top:-9999,left:-9999,zIndex:-1,pointerEvents:"none"}:{},children:e.jsxs("div",{id:"panchanga-share-card",className:"poster",style:{"--theme-primary":j.primary,"--theme-secondary":j.secondary,"--theme-sidebar":j.sidebar,"--theme-footer":j.footer,"--theme-bg":j.bg},children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
`}}),e.jsx("img",{className:"mountain-bg",src:bs,alt:"Mountain"}),e.jsx("div",{className:"mountain-overlay"}),e.jsxs("div",{className:"header",children:[e.jsx("div",{className:"logo-section",children:e.jsx("img",{src:Ca,alt:"NepDate Logo",style:{height:60,objectFit:"contain"}})}),e.jsxs("div",{className:"title-section",children:[e.jsxs("div",{className:"main-title",children:[e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"5",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"25",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"5",cy:"15",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"25",cy:"15",r:"2.5",fill:"#c62828"})]}),e.jsx("span",{children:"आजको"}),e.jsx("span",{className:"red",children:"पञ्चाङ्ग"}),e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"4",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"8",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"8",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"22",cy:"22",r:"3",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"5",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"15",cy:"25",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"5",cy:"15",r:"2.5",fill:"#c62828"}),e.jsx("circle",{cx:"25",cy:"15",r:"2.5",fill:"#c62828"})]})]}),e.jsx("div",{className:"title-sub",children:"NepDate - हरेक दिनको विश्वास"})]}),e.jsx("div",{style:{width:"120px"}})]}),e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"center-content",style:{width:"100%"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"30px",width:"100%",marginBottom:"15px"},children:[e.jsx("img",{src:ha,alt:"Left Ornament",style:{height:"140px",width:"auto",zIndex:1}}),e.jsxs("div",{className:"date-banner",style:{flexDirection:"column",alignItems:"center",textAlign:"center",padding:"20px",gap:"8px",width:"max-content",margin:"0"},children:[e.jsxs("div",{className:"date-banner-text",children:["विक्रम संवत् ",e.jsx("span",{className:"red",children:de(i)})," ",g," ",e.jsx("span",{className:"red",children:de(d)})," गते"]}),e.jsx("div",{className:"date-banner-text",children:e.jsx("span",{className:"red",children:p})}),a.nepalSambatYear&&e.jsxs("div",{className:"date-banner-sub",style:{color:"#1a237e",fontWeight:600},children:["नेपाल संवत् ",de(a.nepalSambatYear)," ",a.nepalSambatMonthName," ",de(a.nepalSambatDay)]}),e.jsxs("div",{className:"date-banner-sub",children:["तद्नुसार ",o]})]}),e.jsx("img",{src:ha,alt:"leftt Ornament",style:{height:"140px",width:"auto",zIndex:1}})]}),e.jsxs("div",{className:"panchang-row",children:[e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("path",{d:"M18,5 A12,12 0 1,0 18,25 A8,8 0 1,1 18,5",fill:"#ffd700"}),e.jsx("circle",{cx:"10",cy:"10",r:"1.5",fill:"white"}),e.jsx("circle",{cx:"20",cy:"15",r:"1",fill:"white"}),e.jsx("circle",{cx:"12",cy:"22",r:"1",fill:"white"})]})}),e.jsx("div",{className:"panchang-box-label",children:"तिथि"}),e.jsx("div",{className:"panchang-box-value",children:w?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:w?.endTime?`(${Be(w.endTime)})`:""}),y?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),y.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"none",stroke:"#ffd700",strokeWidth:"1.5"}),e.jsx("circle",{cx:"15",cy:"6",r:"2",fill:"#ffd700"}),e.jsx("circle",{cx:"22",cy:"10",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"24",cy:"18",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"20",cy:"24",r:"2",fill:"#ffd700"}),e.jsx("circle",{cx:"12",cy:"24",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"7",cy:"18",r:"1.5",fill:"#ffd700"}),e.jsx("circle",{cx:"8",cy:"10",r:"2",fill:"#ffd700"}),e.jsx("line",{x1:"15",y1:"6",x2:"22",y2:"10",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"22",y1:"10",x2:"24",y2:"18",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"24",y1:"18",x2:"20",y2:"24",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"20",y1:"24",x2:"12",y2:"24",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"12",y1:"24",x2:"7",y2:"18",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"7",y1:"18",x2:"8",y2:"10",stroke:"#ffd700",strokeWidth:"0.8"}),e.jsx("line",{x1:"8",y1:"10",x2:"15",y2:"6",stroke:"#ffd700",strokeWidth:"0.8"})]})}),e.jsx("div",{className:"panchang-box-label",children:"नक्षत्र"}),e.jsx("div",{className:"panchang-box-value",children:r?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:r?.endTime?`(${Be(r.endTime)})`:""}),T?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),T.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"8",r:"4",fill:"#ffd700"}),e.jsx("path",{d:"M15,12 L15,20 M10,16 L20,16 M12,20 L15,26 L18,20",stroke:"#ffd700",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),e.jsx("circle",{cx:"15",cy:"15",r:"10",fill:"none",stroke:"#ffd700",strokeWidth:"1",opacity:"0.5"})]})}),e.jsx("div",{className:"panchang-box-label",children:"योग"}),e.jsx("div",{className:"panchang-box-value",children:t?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:t?.endTime?`(${Be(t.endTime)})`:""}),B?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),B.name," आरम्भ"]}):null]}),e.jsxs("div",{className:"panchang-box",children:[e.jsx("div",{className:"panchang-box-icon",children:e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"#1a237e"}),e.jsx("path",{d:"M15,3 A12,12 0 0,1 15,27 A8,8 0 0,0 15,3",fill:"#ffd700"})]})}),e.jsx("div",{className:"panchang-box-label",children:"करण"}),e.jsx("div",{className:"panchang-box-value",children:W?.name||"—"}),e.jsx("div",{className:"panchang-box-time",children:W?.endTime?`(${Be(W.endTime)})`:""}),A?.name?e.jsxs("div",{className:"panchang-box-time",children:["त्यसपछि",e.jsx("br",{}),A.name," आरम्भ"]}):null]})]})]}),e.jsxs("div",{className:"shubh-horizontal",children:[e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("circle",{cx:"18",cy:"20",r:"10",fill:"#ffd700"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#ffd700",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#4fc3f7"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"सूर्योदय"}),e.jsx("div",{className:"shubh-item-value",children:Oe(a.sunriseIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("circle",{cx:"18",cy:"20",r:"10",fill:"#ff8a65"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#ff8a65",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#4fc3f7"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"सूर्यास्त"}),e.jsx("div",{className:"shubh-item-value",children:Oe(a.sunsetIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("path",{d:"M16,9 A9,9 0 0,0 16,25 A11,11 0 0,1 25,18 A9,9 0 0,0 16,9",fill:"#b0bec5"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#b0bec5",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"चन्द्रोदय"}),e.jsx("div",{className:"shubh-item-value",children:Oe(a.moonriseIso)})]})]}),e.jsxs("div",{className:"shubh-item",children:[e.jsxs("svg",{className:"shubh-item-icon",viewBox:"0 0 36 36",children:[e.jsx("path",{d:"M16,9 A9,9 0 0,0 16,25 A11,11 0 0,1 25,18 A9,9 0 0,0 16,9",fill:"none",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("path",{d:"M8,20 Q18,10 28,20",fill:"none",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"18",y1:"10",x2:"18",y2:"6",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"13",x2:"7",y2:"10",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"10",stroke:"#90a4ae",strokeWidth:"2"}),e.jsx("rect",{x:"4",y:"20",width:"28",height:"4",rx:"2",fill:"#1a237e"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"shubh-item-label",children:"चन्द्रास्त"}),e.jsx("div",{className:"shubh-item-value",children:Oe(a.moonsetIso)})]})]})]})]}),e.jsx("div",{className:"bottom-sections",children:e.jsxs("div",{className:"special-box",children:[e.jsx("div",{className:"special-header-wrap",children:e.jsx("div",{className:"special-header",children:"आजको विशेष"})}),e.jsxs("div",{className:"special-content",children:[e.jsxs("svg",{className:"special-decor",width:"80",height:"100",viewBox:"0 0 80 100",children:[e.jsx("ellipse",{cx:"40",cy:"75",rx:"20",ry:"8",fill:"#8B4513"}),e.jsx("path",{d:"M25,75 Q25,60 40,55 Q55,60 55,75",fill:"#D2691E"}),e.jsx("ellipse",{cx:"40",cy:"55",rx:"15",ry:"5",fill:"#FFD700"}),e.jsx("path",{d:"M40,55 Q35,40 40,25 Q45,40 40,55",fill:"#FF6600"}),e.jsx("path",{d:"M40,50 Q37,42 40,32 Q43,42 40,50",fill:"#FFD700"}),e.jsx("path",{d:"M40,45 Q38,40 40,35 Q42,40 40,45",fill:"#FFF8DC"}),e.jsx("circle",{cx:"15",cy:"85",r:"8",fill:"#FF69B4"}),e.jsx("circle",{cx:"15",cy:"85",r:"4",fill:"#FFB6C1"}),e.jsx("circle",{cx:"10",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"20",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"10",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"20",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"65",cy:"85",r:"8",fill:"#FF69B4"}),e.jsx("circle",{cx:"65",cy:"85",r:"4",fill:"#FFB6C1"}),e.jsx("circle",{cx:"60",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"70",cy:"80",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"60",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("circle",{cx:"70",cy:"90",r:"5",fill:"#FF69B4"}),e.jsx("ellipse",{cx:"8",cy:"88",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(-30,8,88)"}),e.jsx("ellipse",{cx:"72",cy:"88",rx:"6",ry:"3",fill:"#228B22",transform:"rotate(30,72,88)"})]}),e.jsx("div",{children:O})]})]})}),e.jsxs("footer",{className:"sc-footer",children:[e.jsx("div",{style:{backgroundColor:"white",padding:10,borderRadius:12},children:e.jsx("img",{src:Ta,alt:"NepDate Logo",style:{height:48,objectFit:"contain"}})}),e.jsx("div",{className:"sc-footer-divider"}),e.jsxs("div",{className:"sc-footer-text",style:{fontSize:"24px",letterSpacing:"-0.5px"},children:["नेपडेट पात्रो - ",e.jsx("span",{className:"sc-hl",children:"हरेक दिनको विश्वास"})]}),e.jsx("div",{className:"sc-playstore",children:e.jsx("img",{src:Ia,alt:"GET IT ON Google Play",style:{height:80,objectFit:"contain"}})}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"sc-footer-ornament",width:"140",height:"16",viewBox:"0 0 140 16",fill:"none",children:[e.jsx("path",{d:"M140 8C140 12.4183 136.418 16 132 16H8C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0H132C136.418 0 140 3.58172 140 8Z",fill:"white",fillOpacity:"0.1"}),e.jsx("circle",{cx:"70",cy:"8",r:"4",fill:"white",fillOpacity:"0.3"}),e.jsx("circle",{cx:"56",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"}),e.jsx("circle",{cx:"84",cy:"8",r:"3",fill:"white",fillOpacity:"0.2"})]})]})]})})},ga=({icon:a,title:n})=>e.jsxs("div",{className:"flex items-center gap-2 mb-3 mt-6 first:mt-0 pb-1 border-b border-gray-200 dark:border-gray-700/50",children:[e.jsx("div",{className:"p-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg shadow-sm",children:Y.cloneElement(a,{className:"w-3.5 h-3.5 text-blue-600 dark:text-blue-400"})}),e.jsx("h3",{className:"text-sm font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 font-devanagari",children:n})]}),Ye=({label:a,value:n,className:s="",icon:m})=>e.jsxs("div",{className:`bg-white dark:bg-gray-800/40 rounded-xl p-3 border border-gray-100 dark:border-gray-700/50 shadow-sm transition-all hover:shadow-md flex items-center gap-3 ${s}`,children:[m&&e.jsx("div",{className:"shrink-0",children:m}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[13px] text-gray-600 dark:text-gray-300 font-devanagari mb-0.5 uppercase tracking-tight",children:a}),e.jsx("div",{className:"text-base font-bold text-gray-900 dark:text-white font-devanagari leading-none",children:n})]})]}),ce=({label:a,value:n,compact:s=!1})=>e.jsx("div",{className:`px-4 border-b border-gray-100 dark:border-gray-700/30 last:border-0 ${s?"py-1.5":"py-2.5"}`,children:e.jsxs("div",{className:"flex justify-between items-center text-base",children:[e.jsxs("span",{className:"text-gray-600 dark:text-gray-300 font-medium font-devanagari text-sm",children:[a,":"]}),e.jsx("div",{className:"text-gray-900 dark:text-white font-bold font-devanagari text-right",children:n||"-"})]})}),ve=({elements:a,baseDate:n,timezoneId:s,offset:m,astroType:c,sunriseIso:b,nextSunriseIso:i})=>{const{t:g,tAstro:d,language:x,n:p}=xe();return!a||a.length===0?null:e.jsx("div",{className:"px-4 pt-1 pb-2 border-b border-gray-200 dark:border-gray-700/50",children:a.map((f,o)=>{const w=f.startTime?Te(f.startTime,n,s||"Asia/Kathmandu",x,p,{showSeconds:!0,showVedicDayBracket:!0,sunriseIso:b,nextSunriseIso:i,t:g}):null,y=f.endTime?Te(f.endTime,n,s||"Asia/Kathmandu",x,p,{showSeconds:!0,showVedicDayBracket:!0,sunriseIso:b,nextSunriseIso:i,t:g}):null;return!w&&!y?null:e.jsxs("div",{className:"mt-1.5",children:[e.jsxs("strong",{className:"text-base text-gray-800 dark:text-white font-devanagari",children:[c&&f.name?d(f.name,c):f.name,c==="tithi"&&f.isKshaya&&e.jsxs("span",{className:"ml-1 text-red-500 text-xs",children:["(",g("kshaya"),")"]}),c==="tithi"&&f.isVriddhi&&e.jsxs("span",{className:"ml-1 text-green-500 text-xs",children:["(",g("vriddhi"),")"]})]}),e.jsx("div",{className:"flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-gray-600 dark:text-gray-400 mt-1 gap-y-1 sm:gap-x-4 font-devanagari",children:w&&y?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-baseline gap-1.5",children:[e.jsxs("span",{className:"font-bold shrink-0 opacity-90",children:[g("startsOn"),":"]}),e.jsx("span",{className:"text-gray-900 dark:text-gray-200",children:w})]}),e.jsxs("div",{className:"flex items-baseline gap-1.5 sm:text-right",children:[e.jsxs("span",{className:"font-bold shrink-0 opacity-90",children:[g("endsOn"),":"]}),e.jsx("span",{className:"text-gray-900 dark:text-gray-200",children:y})]})]}):w?e.jsxs("div",{className:"flex items-baseline gap-1.5",children:[e.jsxs("span",{className:"font-bold shrink-0 opacity-70",children:[g("startsOn"),":"]}),e.jsx("span",{className:"text-gray-900 dark:text-gray-200",children:w})]}):y?e.jsxs("div",{className:"flex items-baseline gap-1.5",children:[e.jsxs("span",{className:"font-bold shrink-0 opacity-70",children:[g("endsOn"),":"]}),e.jsx("span",{className:"text-gray-900 dark:text-gray-200",children:y})]}):null})]},o)})})},js=({sequence:a,baseDate:n,timezoneId:s,offset:m,sunriseIso:c,nextSunriseIso:b})=>{const{language:i,t:g,n:d}=xe();return!a||a.length===0?null:e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400",children:[e.jsx(Ve,{className:"w-3 h-3"}),g("anandadiYogaSequence")]}),e.jsx("div",{className:"relative pl-6 space-y-4 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-200 dark:before:bg-gray-700",children:a.map((x,p)=>{const f=x.startTime?Te(x.startTime,n,s||"Asia/Kathmandu",i,d,{showSeconds:!0,showVedicDayBracket:!0,sunriseIso:c,nextSunriseIso:b,t:g}):g("fromSunrise"),o=x.endTime?Te(x.endTime,n,s||"Asia/Kathmandu",i,d,{showSeconds:!0,showVedicDayBracket:!0,sunriseIso:c,nextSunriseIso:b,t:g}):g("untilSunrise"),w=i==="ne"?x.nameNe:i==="hi"?x.nameHi:x.nameEn,y=x.isAuspicious?"text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/20":"text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-900/20",r=x.isAuspicious?"bg-emerald-500":"bg-rose-500";return e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:`absolute -left-[20px] top-1.5 w-3 h-3 rounded-full border-2 border-white dark:border-gray-900 ${r}`}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-1",children:[e.jsx("span",{className:`px-2 py-0.5 rounded text-sm font-bold font-devanagari self-start ${y}`,children:w}),e.jsxs("span",{className:"text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2",children:[f," ",e.jsx("span",{className:"opacity-40",children:"—"})," ",o]})]}),e.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[e.jsxs("div",{className:"flex items-center gap-1.5 text-slate-800 dark:text-slate-200",children:[e.jsxs("span",{className:"font-bold opacity-70",children:[g("netrama"),":"]}),e.jsx("span",{className:"font-bold",children:d(x.netra)})]}),e.jsxs("div",{className:"flex items-center gap-1.5 text-slate-800 dark:text-slate-200",children:[e.jsxs("span",{className:"font-bold opacity-70",children:[g("jeevanama"),":"]}),e.jsx("span",{className:"font-bold",children:d(x.jeeva)})]})]})]})]},p)})})]})},vs=({date:a,onClose:n,variant:s="modal",activeSystem:m="bs",onTimelineClick:c,onNavigate:b})=>{const{location:i,isStashLoaded:g,useElevation:d,ayanamsaMethod:x,engineType:p,isTopocentric:f}=$e(),{t:o,tAstro:w,n:y,language:r}=xe(),T=d&&i.elevation||0,t=l.useMemo(()=>ka(a,i.latitude,i.longitude,i.offset,r,i.zoneId,g,T,x,p,f),[a,i.latitude,i.longitude,i.offset,r,i.zoneId,g,T,x,p,f]),B=t?.sunriseMs?new Date(t.sunriseMs):t?.sunriseIso?new Date(t.sunriseIso):null,W=t?.nextSunriseMs?new Date(t.nextSunriseMs):t?.nextSunriseIso?new Date(t.nextSunriseIso):null,A=v=>!v||!W||!B?v:v.filter(F=>{const K=F.startTime?new Date(F.startTime):null,H=F.endTime?new Date(F.endTime):null;return!(H&&H<=B||K&&K>=W)}),O=A(t?.tithis||[]),P=A(t?.nakshatras||[]),j=A(t?.yogas||[]),E=A(t?.karanas||[]),I=A(t?.sunRashis||[]),S=A(t?.moonRashis||[]),Q=A(t?.bhadraTiming||[]),$=t?.bhadra,J=s==="page",se=J?"bg-white dark:bg-gray-800 w-full mx-auto rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden":"bg-slate-200 dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full ring-1 ring-transparent dark:ring-gray-700/80 dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-sm mx-auto",Z=J?"bg-white/95 dark:bg-gray-800/95 border-b border-gray-200 dark:border-gray-700 p-4 rounded-t-2xl":"sticky top-0 bg-slate-200 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 rounded-t-2xl z-10 transition-all shadow-sm",_=new Date().toDateString()===a.toDateString(),[te,le]=Y.useState(new Date);Y.useEffect(()=>{if(_){const v=setInterval(()=>le(new Date),6e4);return()=>clearInterval(v)}},[_]);const re=_&&t?.sunriseIso?qa(te,new Date(t.sunriseIso)):null,q=re?o("ghadiUnits").replace("{0}",y(re.ghatis)).replace("{1}",y(re.palas)):null;(()=>{if(!t.sunriseIso||!t.sunsetIso)return null;const v=new Date(t.sunsetIso).getTime()-new Date(t.sunriseIso).getTime();if(v<=0)return null;const F=Math.floor(v/36e5),K=Math.floor(v%36e5/6e4);return`${y(F)} ${o("hour")} ${y(K)} ${o("minute")}`})();const k=v=>{if(v===void 0)return"";const F=Math.round(v*3600),K=Math.floor(F/3600),H=Math.floor(F%3600/60);return`${y(K)}°${y(H)}′`},[C,N]=l.useState(null);l.useEffect(()=>{t.sunriseIso?es.getKundali({name:"Sunrise",datetime:t.sunriseIso,latitude:i.latitude,longitude:i.longitude,zoneId:i.zoneId,offset:i.offset,locationName:i.name,engine:p,options:{zodiac:"SIDEREAL",ayanamsa:x.toUpperCase(),houseSystem:"WHOLE_SIGN",divisionalCharts:[9],dashaSystem:"VIMSHOTTARI"}}).then(v=>{N(v)}).catch(v=>console.error("Error creating sunrise kundali",v)):N(null)},[t.sunriseIso,i,p,x]);const[M,D]=Y.useState(!1);Y.useEffect(()=>{D(!!(typeof navigator<"u"&&navigator.share))},[]);const R=async()=>{try{let v=Qe(),F="";if(m==="bs"){const H=ue(a);F=`${H.year}-${H.monthIndex+1<10?"0":""}${H.monthIndex+1}-${H.day<10?"0":""}${H.day}`,v+=`bs?${F}`}else F=`${a.getFullYear()}-${a.getMonth()+1<10?"0":""}${a.getMonth()+1}-${a.getDate()<10?"0":""}${a.getDate()}`,v+=`ad?${F}`;const K=Na(v);window.Android&&typeof window.Android.share=="function"?window.Android.share(`Nepdate - ${F}`,`Check out the details for ${F}`,K):M&&navigator.share?await navigator.share({title:`Nepdate - ${F}`,text:`Check out the details for ${F}`,url:K}):(await navigator.clipboard.writeText(K),ne.success("Link copied to clipboard!"))}catch{ne.error("Failed to share")}},[z,ae]=Y.useState(!1),[ee,ie]=Y.useState("social"),[be,he]=Y.useState(!1),[me,ge]=Y.useState(!1),[ke,Ce]=Y.useState(null),[Ie,Ne]=Y.useState(null),Ke=()=>{ge(!0)},Ze=v=>{Ne(v),ge(!1),ae(!0),he(!1)};Y.useEffect(()=>{z&&be&&De()},[z,be]);const De=async()=>{try{await new Promise(u=>setTimeout(u,300));const v=document.getElementById("panchanga-share-card");if(!v)return;const F=await Me(()=>import("./vendor-other-CgSyLtPK.js").then(u=>u.G),__vite__mapDeps([0,1])),K=`Panchanga-${a.getFullYear()}-${a.getMonth()+1}-${a.getDate()}.png`,H=await F.toBlob(v,{pixelRatio:2,cacheBust:!0,backgroundColor:"rgba(0,0,0,0)",filter:u=>{const L=u.tagName?.toLowerCase();return L!=="script"&&L!=="link"&&L!=="iframe"}});if(!H)throw new Error("Failed to generate image blob");if(window.Android?.shareImage&&typeof window.Android.isAndroidApp=="function"&&window.Android.isAndroidApp())try{const u=new FileReader;u.readAsDataURL(H),u.onloadend=()=>{const L=u.result;window.Android.shareImage("आजको पञ्चाङ्ग",K,L)};return}catch(u){console.error("Android image bridge failed",u)}if(navigator.share&&navigator.canShare)try{const u=new File([H],K,{type:"image/png"});if(navigator.canShare({files:[u]})){await navigator.share({files:[u],title:"आजको पञ्चाङ्ग - NepDate",text:"आजको पञ्चाङ्ग | NepDate नेपाली पात्रो"});return}}catch(u){console.error("Web Share failed, falling back to download",u)}const ye=URL.createObjectURL(H),fe=document.createElement("a");fe.href=ye,fe.download=K,fe.click(),setTimeout(()=>URL.revokeObjectURL(ye),1e3)}catch(v){console.error("Share failed",v),ne.error("Failed to generate image")}finally{ae(!1),he(!1),Ne(null)}},Se=(()=>{if(!t.sunriseIso||!t.sunsetIso||!t.nextSunriseIso)return{dinamanaGp:null,dinamanaHm:null,ratrimanaGp:null,ratrimanaHm:null};const v=t.sunriseMs??new Date(t.sunriseIso).getTime(),F=t.sunsetMs??new Date(t.sunsetIso).getTime(),K=t.nextSunriseMs??new Date(t.nextSunriseIso).getTime(),H=K-v,ye=F-v,fe=K-F,u=V=>{const G=V/H*60,X=Math.floor(G),oe=Math.floor((G-X)*60);return o("ghadiUnits").replace("{0}",y(X)).replace("{1}",y(oe))},L=V=>{const G=Math.floor(V/6e4),X=Math.floor(G/60),oe=G%60;return`${y(X)} ${o("hour")} ${y(oe)} ${o("minute")}`};return{dinamanaGp:u(ye),dinamanaHm:L(ye),ratrimanaGp:u(fe),ratrimanaHm:L(fe)}})(),_e=v=>v?v.replace(/\d+/g,F=>y(F)):"",Xe=`${w(t.lunarMonth,"lunarMonth")} • ${w(t.paksha,"paksha")} • ${w(t.tithi.name,"tithi")}`;return e.jsxs("div",{className:se,children:[e.jsx("div",{className:Z,children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-gray-900 dark:text-white font-devanagari flex items-center gap-2",children:[e.jsx("span",{className:"text-blue-600 dark:text-blue-400",children:w(t.weekday,"weekday")}),e.jsx("span",{className:"text-gray-300 dark:text-gray-600",children:"|"}),(()=>{const v=ue(a);return`${y(v.year)} ${w(v.monthName,"month")} ${y(v.day)}`})()]}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium",children:t.gregorianDate})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:R,className:"p-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400",children:M?e.jsx(ze,{size:18}):e.jsx(za,{size:18})}),n&&!J&&e.jsx("button",{onClick:n,className:"p-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors text-gray-500",children:e.jsx(ja,{size:18})})]})]})}),e.jsxs("div",{className:"p-5 space-y-8 pb-20 overflow-x-hidden",children:[e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2.5 px-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest",children:o("riseSetTimings")}),e.jsx("span",{className:"text-[10px] bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded font-bold border border-amber-200/50 dark:border-amber-800/30",children:!i.name||i.name==="Custom Location"?`${y(i.latitude)}°N, ${y(i.longitude)}°E`:`${r==="en"&&i.romanization||i.name}`})]}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[e.jsx(Ye,{label:o("sunrise"),value:Te(t.sunriseIso,a,i.zoneId,r,y,{truncateToMinute:!0})||"N/A",icon:e.jsx(we,{className:"w-5 h-5 text-amber-500"}),className:"bg-orange-50/40 dark:bg-orange-950/20 border-orange-100/50 dark:border-orange-900/30"}),e.jsx(Ye,{label:o("sunset"),value:Te(t.sunsetIso,a,i.zoneId,r,y,{truncateToMinute:!0})||"N/A",icon:e.jsx(we,{className:"w-5 h-5 text-amber-600"}),className:"bg-indigo-50/40 dark:bg-indigo-950/20 border-indigo-100/50 dark:border-indigo-900/30"}),e.jsx(Ye,{label:o("moonrise"),value:t.moonrise?_e(t.moonrise):"N/A",icon:e.jsx(pe,{className:"w-5 h-5 text-indigo-400"})}),e.jsx(Ye,{label:o("moonset"),value:t.moonset?_e(t.moonset):"N/A",icon:e.jsx(pe,{className:"w-5 h-5 text-blue-400"})})]}),e.jsxs("div",{className:"mt-4 bg-white dark:bg-gray-800/40 rounded-2xl border border-gray-100 dark:border-gray-700/50 overflow-hidden shadow-sm",children:[e.jsxs("div",{className:"px-4 py-3 border-b border-gray-100 dark:border-gray-700/30 flex items-center justify-center gap-3 bg-gray-50/50 dark:bg-gray-900/20 group",children:[e.jsx(pe,{className:"w-4 h-4 text-blue-500 group-hover:animate-pulse"}),e.jsx("span",{className:"text-sm font-bold text-gray-700 dark:text-gray-200 font-devanagari tracking-wide",children:Xe})]}),e.jsxs("div",{className:`p-4 grid ${q?"grid-cols-3":"grid-cols-2"} gap-2 sm:gap-6`,children:[q&&e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx(Ve,{className:"w-3.5 h-3.5 text-blue-500 mb-1"}),e.jsx("span",{className:"text-[11px] uppercase tracking-tighter text-gray-500 mb-0.5 whitespace-nowrap",children:o("currentGhati")||"स्वयम् घटी"}),e.jsx("span",{className:"text-sm sm:text-base font-bold font-devanagari leading-none",children:q})]}),e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx(we,{className:"w-3.5 h-3.5 text-amber-500 mb-1"}),e.jsx("span",{className:"text-[11px] uppercase tracking-tighter text-gray-600 dark:text-gray-300 mb-0.5 whitespace-nowrap",children:o("dinamana")||"दिनमान"}),e.jsx("span",{className:"text-sm sm:text-base font-bold font-devanagari leading-none",children:Se.dinamanaGp}),e.jsxs("span",{className:"text-[11px] text-gray-400 font-medium tracking-tighter leading-none mt-0.5",children:["(",Se.dinamanaHm,")"]})]}),e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx(pe,{className:"w-3.5 h-3.5 text-indigo-400 mb-1"}),e.jsx("span",{className:"text-[11px] uppercase tracking-tighter text-gray-600 dark:text-gray-300 mb-0.5 whitespace-nowrap",children:o("ratrimana")||"रात्रिमान"}),e.jsx("span",{className:"text-sm sm:text-base font-bold font-devanagari leading-none",children:Se.ratrimanaGp}),e.jsxs("span",{className:"text-[11px] text-gray-400 font-medium tracking-tighter leading-none mt-0.5",children:["(",Se.ratrimanaHm,")"]})]})]})]})]}),e.jsxs("section",{children:[e.jsx(ga,{icon:e.jsx(Fa,{}),title:o("eraAndSeason")}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/30 rounded-2xl p-4 border border-gray-100 dark:border-gray-700/50 space-y-1",children:[e.jsxs("div",{className:"px-1 py-1 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between group",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 bg-purple-50 dark:bg-purple-900/30 rounded-xl group-hover:scale-110 transition-transform",children:e.jsx(pe,{size:16,className:"text-purple-600 dark:text-purple-400"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[11px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-black mb-0.5",children:o("nepalSambat")}),e.jsxs("div",{className:"text-base font-bold text-gray-900 dark:text-white font-devanagari leading-none",children:[y(t.nepalSambatYear)," ",t.nepalSambatMonthName," ",y(t.nepalSambatDay)]})]})]}),e.jsx("div",{className:"text-right"})]}),e.jsx("div",{className:"flex items-center justify-between group",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 bg-amber-50 dark:bg-amber-900/30 rounded-xl group-hover:scale-110 transition-transform",children:e.jsx(we,{size:16,className:"text-amber-600 dark:text-amber-400"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[11px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-black mb-0.5",children:o("nepalSambatSolar")}),e.jsxs("div",{className:"text-base font-bold text-gray-900 dark:text-white font-devanagari leading-none",children:[y(t.nepalSambatSolar.year)," ",r==="ne"||r==="hi"?t.nepalSambatSolar.monthNameNe:t.nepalSambatSolar.monthNameEn," ",y(t.nepalSambatSolar.day)]})]})]})})]}),e.jsxs("div",{className:"pt-2 border-t border-gray-100 dark:border-gray-700/30",children:[e.jsx(ce,{label:o("shakaYear"),value:y(t.shakaYear),compact:!0}),e.jsx(ce,{label:o("kaliYear"),value:y(t.kaliYear),compact:!0})]})]}),e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/30 rounded-2xl p-4 border border-gray-100 dark:border-gray-700/50 space-y-1",children:[e.jsx(ce,{label:o("samvatsar"),value:t.isSamvatsarTransitioning?e.jsxs("div",{className:"flex flex-col items-end gap-1",children:[e.jsx("span",{className:"text-[11px] text-gray-500 line-through decoration-red-500/40",children:w(t.lunarSamvatsar,"samvatsar")}),e.jsx("span",{className:"text-sm text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/20 px-1.5 py-0.5 rounded leading-none transition-all duration-700 animate-pulse",children:w(t.samvatsar,"samvatsar")})]}):w(t.samvatsar,"samvatsar"),compact:!0}),e.jsx(ce,{label:o("ritu"),value:w(t.ritu,"ritu"),compact:!0}),e.jsx(ce,{label:o("ayana"),value:w(t.ayana,"ayana"),compact:!0}),e.jsx(ce,{label:o("ahargan"),value:y(Math.floor(t.ahargana)),compact:!0})]})]}),t.isSamvatsarTransitioning&&e.jsxs("div",{className:"mt-3 px-4 py-3 bg-blue-50/50 dark:bg-blue-900/10 border-l-4 border-blue-500 rounded-r-2xl shadow-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[e.jsx("div",{className:"p-1 bg-blue-100 dark:bg-blue-800 rounded-full",children:e.jsx(Pa,{className:"w-2.5 h-2.5 text-blue-600 dark:text-blue-300"})}),e.jsx("h4",{className:"text-sm font-bold text-blue-900 dark:text-blue-100 font-devanagari",children:o("jovianYearCorrection")})]}),e.jsx("p",{className:"text-xs leading-relaxed text-blue-800/80 dark:text-blue-200/80 font-medium",children:o("jovianYearCorrectionDesc")})]})]}),e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-3 px-1",children:[e.jsxs("div",{className:"flex items-center gap-2 pb-1 border-b border-gray-200 dark:border-gray-700/50 flex-1",children:[e.jsx("div",{className:"p-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg shadow-sm",children:e.jsx($a,{className:"w-3.5 h-3.5 text-blue-600 dark:text-blue-400"})}),e.jsx("h3",{className:"text-sm font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 font-devanagari",children:o("panchanga")})]}),e.jsxs("div",{className:"flex items-center gap-2 ml-4",children:[e.jsxs("button",{onClick:()=>{n?.(),b?.("timeline")},className:"text-[11px] text-blue-600 dark:text-blue-400 font-bold hover:underline flex items-center gap-1 bg-blue-50 dark:bg-blue-800/10 px-2 py-1 rounded border border-blue-100/50 dark:border-blue-800/10",children:[e.jsx(_a,{size:10}),e.jsx("span",{children:o("timeline")})]}),e.jsxs("button",{onClick:()=>{n?.(),b?.("daily-saait")},className:"text-[11px] text-orange-600 dark:text-orange-400 font-bold hover:underline flex items-center gap-1 bg-orange-50 dark:bg-orange-800/10 px-2 py-1 rounded border border-orange-100/50 dark:border-orange-800/10",children:[e.jsx(Ve,{size:10}),e.jsx("span",{children:o("shubha_ashubha_saait")})]})]})]}),e.jsx("div",{className:"px-4 mb-3",children:e.jsxs("div",{className:"flex items-start gap-2 p-2 bg-amber-50/50 dark:bg-amber-900/10 border border-amber-100/50 dark:border-amber-800/20 rounded-xl",children:[e.jsx(Je,{className:"w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5"}),e.jsx("p",{className:"text-xs leading-tight text-amber-700 dark:text-amber-300 font-medium font-devanagari",children:o("tithiWarning")})]})}),e.jsxs("div",{className:"bg-white dark:bg-gray-800/40 rounded-2xl border border-gray-100 dark:border-gray-700/50 overflow-hidden shadow-sm",children:[e.jsx(ce,{label:o("tithi"),value:w(t.tithi.name,"tithi")}),e.jsx(ve,{elements:O,baseDate:a,timezoneId:i.zoneId,offset:i.offset,astroType:"tithi",sunriseIso:t.sunriseIso,nextSunriseIso:t.nextSunriseIso}),e.jsx(ce,{label:o("nakshatra"),value:w(t.nakshatra.name,"nakshatra")}),e.jsx(ve,{elements:P,baseDate:a,timezoneId:i.zoneId,offset:i.offset,astroType:"nakshatra",sunriseIso:t.sunriseIso,nextSunriseIso:t.nextSunriseIso}),e.jsx(ce,{label:o("yoga"),value:w(t.yoga.name,"yoga")}),e.jsx(ve,{elements:j,baseDate:a,timezoneId:i.zoneId,offset:i.offset,astroType:"yoga",sunriseIso:t.sunriseIso,nextSunriseIso:t.nextSunriseIso}),e.jsx(ce,{label:o("karana"),value:w(t.karana.name,"karana")}),e.jsx(ve,{elements:E,baseDate:a,timezoneId:i.zoneId,offset:i.offset,astroType:"karana",sunriseIso:t.sunriseIso,nextSunriseIso:t.nextSunriseIso}),e.jsxs("div",{className:"grid grid-cols-2 bg-gray-50/50 dark:bg-gray-900/40 border-t border-gray-100 dark:border-gray-700/50 divide-x divide-gray-100 dark:divide-gray-700/50",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"px-4 py-2 text-[11px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700/30 bg-gray-100/30 dark:bg-gray-800/20",children:o("sunTransit")}),e.jsx(ve,{elements:I,baseDate:a,timezoneId:i.zoneId,offset:i.offset,astroType:"rashi",sunriseIso:t.sunriseIso,nextSunriseIso:t.nextSunriseIso})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"px-4 py-2 text-[11px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700/30 bg-gray-100/30 dark:bg-gray-800/20",children:o("moonTransit")}),e.jsx(ve,{elements:S,baseDate:a,timezoneId:i.zoneId,offset:i.offset,astroType:"rashi",sunriseIso:t.sunriseIso,nextSunriseIso:t.nextSunriseIso})]})]}),t.anandadiYoga&&e.jsxs("div",{className:"bg-blue-50/30 dark:bg-blue-900/10 p-3.5 border-t border-gray-100 dark:border-gray-700/50",children:[e.jsxs("div",{className:"text-[13px] text-gray-500 uppercase tracking-widest mb-1 flex items-center gap-1.5",children:[e.jsx(na,{className:"w-3 h-3 text-blue-500"})," ",o("anandadiYoga")]}),e.jsx("div",{className:"text-base font-bold font-devanagari",children:r==="en"?t.anandadiYoga.nameEn:t.anandadiYoga.nameNe})]})]}),t.anandadiSequence&&t.anandadiSequence.length>0&&e.jsx(js,{sequence:t.anandadiSequence,baseDate:a,timezoneId:i.zoneId,offset:i.offset,sunriseIso:t.sunriseIso,nextSunriseIso:t.nextSunriseIso})]}),C&&e.jsxs("section",{children:[e.jsx(ga,{icon:e.jsx(ta,{}),title:o("sunriseKundali")}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-start",children:[e.jsx("div",{className:"flex justify-center bg-white dark:bg-gray-800/40 rounded-3xl p-6 border border-gray-100 dark:border-gray-700 shadow-inner",children:e.jsx(as,{planets:C.planets,ascendantSign:C.ascendant.sign,ascendantDegrees:C.ascendant.degreesInSign,ascendantNakshatra:C.ascendant.nakshatra,ascendantNakshatraPada:C.ascendant.nakshatraPada,chartType:"lagna",chartStyle:"north",lang:r})}),e.jsx("div",{className:"overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700/50 shadow-sm bg-white dark:bg-gray-800/20",children:e.jsxs("table",{className:"w-full text-left border-collapse text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700",children:[e.jsx("th",{className:"py-3 px-4 text-gray-600 dark:text-gray-300 font-bold uppercase tracking-wider",children:o("planet")}),e.jsx("th",{className:"py-3 px-4 text-gray-600 dark:text-gray-300 font-bold uppercase tracking-wider",children:o("rashi")}),e.jsx("th",{className:"py-3 px-4 text-gray-600 dark:text-gray-300 font-bold uppercase tracking-wider text-right",children:o("degree")})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-100 dark:divide-gray-700/30",children:[e.jsxs("tr",{className:"bg-blue-50/30 dark:bg-blue-900/10 font-bold",children:[e.jsx("td",{className:"py-3 px-4 text-blue-600 dark:text-blue-400",children:w("Lagna","planet")}),e.jsx("td",{className:"py-3 px-4",children:w(la[C.ascendant.sign],"rashi")}),e.jsx("td",{className:"py-3 px-4 text-right font-mono opacity-80",children:k(C.ascendant.degreesInSign)})]}),C.planets.map(v=>e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors",children:[e.jsxs("td",{className:"py-2.5 px-4 font-medium flex items-center gap-2",children:[w(v.planet,"planet"),v.retrograde&&e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_5px_rgba(244,63,94,0.5)]",title:"Retrograde"})]}),e.jsx("td",{className:"py-2.5 px-4",children:w(la[v.rashi],"rashi")}),e.jsx("td",{className:"py-2.5 px-4 text-right font-mono opacity-80",children:k(v.degreesInSign)})]},v.planet))]})]})})]})]}),e.jsxs("section",{className:"space-y-4",children:[$&&$.isActiveCivil&&e.jsxs("div",{className:`p-4 rounded-2xl border flex items-start gap-4 ${$.isHarmful?"bg-rose-50 dark:bg-rose-950/20 border-rose-200/50 text-rose-900 dark:text-rose-100":"bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200/50 text-emerald-900 dark:text-emerald-100"}`,children:[e.jsx(Je,{className:"w-5 h-5 shrink-0 mt-0.5 opacity-80"}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("h4",{className:"font-bold text-base font-devanagari",children:[o("bhadraVisti")," ",o("active")]}),e.jsx("span",{className:`text-[11px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest ${$.isHarmful?"bg-rose-100 dark:bg-rose-900/50":"bg-emerald-100 dark:bg-emerald-900/50"}`,children:o($.status)})]}),e.jsx(ve,{elements:Q,baseDate:a,timezoneId:i.zoneId,offset:i.offset,sunriseIso:t.sunriseIso,nextSunriseIso:t.nextSunriseIso}),e.jsxs("p",{className:"text-sm mt-2 font-medium",children:[o("bhadraResidenceLabel"),": ",e.jsx("span",{className:"ml-1 font-bold",children:o($.residence)})]})]})]}),t.events&&t.events.length>0&&e.jsxs("div",{className:"bg-emerald-50/40 dark:bg-emerald-950/20 rounded-2xl p-5 border border-emerald-100/50 dark:border-emerald-900/30",children:[e.jsxs("h3",{className:"text-sm font-black mb-4 text-emerald-800 dark:text-emerald-300 font-devanagari flex items-center gap-2 uppercase tracking-widest",children:[e.jsx(na,{className:"w-4 h-4"})," ",o("todayEvents")]}),e.jsx("div",{className:"space-y-4",children:t.events.map((v,F)=>e.jsxs("div",{className:"flex items-start gap-3 group",children:[e.jsx("div",{className:"mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 group-hover:scale-150 transition-transform"}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("strong",{className:"text-base text-gray-900 dark:text-white font-bold font-devanagari",children:v.name}),v.holiday&&e.jsx("span",{className:"bg-rose-50 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 text-[11px] font-black px-1.5 py-0.5 rounded uppercase",children:o("holiday")})]}),v.detail&&e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed",children:v.detail})]})]},F))})]}),e.jsxs("div",{className:"p-5 bg-white dark:bg-gray-800/40 rounded-2xl border border-gray-100 dark:border-gray-700/50 text-sm text-gray-600 dark:text-gray-300 space-y-3 shadow-inner",children:[e.jsxs("div",{className:"flex justify-between items-center px-1",children:[e.jsx("span",{children:o("usedEngine")}),e.jsx("span",{className:"font-bold text-gray-800 dark:text-gray-200",children:t.engine==="surya_siddhanta"?o("traditionalEngine"):t.engine==="analytical"?o("analyticalEngine"):o("modernEngine")})]}),e.jsxs("div",{className:"flex justify-between items-center px-1",children:[e.jsx("span",{children:o("ayanamsaMethod")}),e.jsx("span",{className:"font-bold text-gray-800 dark:text-gray-200",children:o(t.ayanamsaMethod)})]}),t.ayanamsaValue!==void 0&&t.ayanamsaValue!==0&&e.jsxs("div",{className:"flex justify-between items-center px-1 text-xs opacity-80 italic",children:[e.jsx("span",{children:o("liveAyanamsa")}),e.jsxs("span",{className:"font-mono",children:[t.ayanamsaValue.toFixed(6),"°"]})]}),e.jsx("div",{className:"pt-3 border-t border-gray-100 dark:border-gray-700/50",children:e.jsx("p",{className:"leading-relaxed text-xs opacity-75 italic text-center px-2",children:o("nepalPanchangaInfo")})}),t.engine==="surya_siddhanta"&&e.jsxs("div",{className:"mt-3 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200/50 dark:border-amber-800/50 rounded-xl flex gap-3 shadow-sm",children:[e.jsx(Je,{className:"w-5 h-5 text-amber-500 shrink-0 mt-0.5"}),e.jsx("p",{className:"text-xs leading-relaxed text-amber-800 dark:text-amber-200 font-medium italic",children:o("surya_siddhanta_warning")})]})]}),e.jsxs("button",{onClick:Ke,disabled:z||me,className:"w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors",children:[z||me?e.jsx(Ue,{className:"w-5 h-5 animate-spin"}):e.jsx(ze,{className:"w-5 h-5"}),e.jsx("span",{children:"पञ्चाङ्ग सेयर गर्नुहोस् (Share Panchanga)"})]})]})]}),z&&(ee==="detailed"?e.jsx(xa,{data:t,date:a,variant:Ie||1,isOffscreen:!0,onLoad:()=>he(!0)}):e.jsx(ma,{data:t,date:a,variant:Ie||1,isOffscreen:!0,onLoad:()=>he(!0)})),me&&e.jsx("div",{className:"fixed inset-0 bg-black/60 z-[100] flex flex-col items-center justify-center backdrop-blur-sm p-4 overflow-y-auto",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-xl flex flex-col items-center my-auto mx-auto border border-gray-100 dark:border-gray-700",children:[e.jsx("span",{className:"text-lg font-bold text-gray-800 dark:text-white mb-4 text-center",children:"Select Theme"}),e.jsxs("div",{className:"flex flex-row w-full gap-3 mb-6",children:[e.jsx("button",{onClick:()=>ie("social"),className:`flex-1 py-2 rounded-xl border-2 transition-all font-bold ${ee==="social"?"border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300":"border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800"}`,children:"Social / Simple"}),e.jsx("button",{onClick:()=>ie("detailed"),className:`flex-1 py-2 rounded-xl border-2 transition-all font-bold ${ee==="detailed"?"border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300":"border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800"}`,children:"Detailed"})]}),e.jsx("div",{className:"relative mb-6 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-gray-100 w-[300px] h-[350px] sm:w-[500px] sm:h-[550px]",children:e.jsx("div",{className:"origin-top-left w-[1000px] scale-[0.30] sm:scale-[0.50]",children:ee==="detailed"?e.jsx(xa,{data:t,date:a,variant:ke||1}):e.jsx(ma,{data:t,date:a,variant:ke||1})})}),e.jsx("div",{className:"flex flex-col justify-center gap-4 mb-6 w-full",children:e.jsx("div",{className:"flex flex-row flex-wrap justify-center gap-2 w-full",children:[1,2,3,4,5].map(v=>{const F={1:"linear-gradient(135deg, #1565c0, #1a237e)",2:"linear-gradient(135deg, #7b1fa2, #4a148c)",3:"linear-gradient(135deg, #e65100, #bf360c)",4:"linear-gradient(135deg, #00838f, #004d40)",5:"linear-gradient(135deg, #c2185b, #b71c1c)"};return e.jsx("button",{onClick:()=>Ce(v),className:`w-10 h-10 rounded-full shadow-md hover:scale-110 active:scale-95 transition-transform ${ke===v?"ring-4 ring-offset-2 ring-gray-400 dark:ring-gray-500":""}`,style:{background:F[v]}},v)})})}),e.jsxs("div",{className:"flex flex-row w-full gap-3",children:[e.jsx("button",{onClick:()=>{ge(!1),Ce(null)},className:"flex-1 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl flex flex-row items-center justify-center active:opacity-80 transition-colors",children:e.jsx("span",{className:"text-gray-700 dark:text-gray-300 font-medium",children:"Cancel"})}),e.jsx("button",{onClick:()=>Ze(ke),className:"flex-1 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl flex flex-row items-center justify-center active:opacity-80 transition-colors shadow-md",children:e.jsx("span",{className:"text-white font-medium",children:"Download"})})]})]})})]})},ws=({date:a,isOpen:n,onClose:s,activeSystem:m="bs",onTimelineClick:c,onNavigate:b})=>{if(!n||!a)return null;const i=g=>{g.target===g.currentTarget&&s()};return e.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",onClick:i,children:e.jsx("div",{className:"max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl relative no-scrollbar",children:e.jsx(vs,{date:a,onClose:s,activeSystem:m,onTimelineClick:c,onNavigate:b})})})},ks=()=>{const{updateLanguage:a,completeSetup:n,updateLocation:s,setCalendarSystem:m,updateNumberFormat:c}=$e(),{t:b}=xe(),[i,g]=l.useState(1),[d,x]=l.useState(null),p=o=>{x(o),setTimeout(()=>{a(o,!0),m(o==="en"||o==="hi"?"ad":"bs"),c("auto"),g(2),x(null)},50)},f=o=>{s(o),n()};return i===2?e.jsxs("div",{className:"fixed inset-0 z-[100000] bg-slate-100 dark:bg-gray-900 overflow-hidden flex flex-col items-center justify-center",children:[e.jsx("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80",children:e.jsx("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"})}),e.jsxs("div",{className:"text-center mb-8 px-4 animate-fade-in-up",children:[e.jsx(ya,{className:"w-16 h-16 text-blue-500 mx-auto mb-4"}),e.jsx("h1",{className:"text-3xl font-extrabold text-gray-900 dark:text-white mb-2 font-rhodium",children:b("locationAndTimezone")}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300 max-w-sm mx-auto",children:b("searchOrSelectLocation")})]}),e.jsx("div",{className:"w-full max-w-4xl px-4 flex-1 max-h-[70vh] relative",children:e.jsx(rs,{onClose:()=>{},onSelect:f})})]}):e.jsxs("div",{className:"fixed inset-0 z-[100000] bg-slate-100 dark:bg-gray-900 flex flex-col p-6 animate-fade-in-up",children:[e.jsx("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80",children:e.jsx("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"})}),e.jsx("div",{className:"flex-1 flex flex-col items-center justify-center max-w-md mx-auto w-full",children:e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 p-6 rounded-[2rem] shadow-2xl backdrop-blur-md w-full border border-white/20 dark:border-gray-700/30",children:[e.jsx("div",{className:"flex justify-center mb-6",children:e.jsx("div",{className:"bg-blue-100 dark:bg-blue-900/50 p-4 rounded-full text-blue-600 dark:text-blue-400",children:e.jsx(Wa,{className:"w-10 h-10"})})}),e.jsx("h1",{className:"text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-2 font-rhodium",children:"Welcome / स्वागतम्"}),e.jsx("p",{className:"text-center text-gray-600 dark:text-gray-300 mb-8 font-medium",children:"Please choose your preferred language to continue."}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("button",{onClick:()=>p("ne"),disabled:d!==null,className:`w-full flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-2xl border-2 transition-all font-bold group ${d==="ne"?"border-blue-500 shadow-xl shadow-blue-500/10":"border-transparent hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"} ${d!==null&&d!=="ne"?"opacity-50":""}`,children:[e.jsx("span",{className:"text-xl text-gray-800 dark:text-gray-100 font-rhodium",children:"नेपाली (Nepali)"}),d==="ne"?e.jsx(Ue,{className:"w-6 h-6 text-blue-500 animate-spin"}):e.jsx(qe,{className:"w-6 h-6 text-gray-300 dark:text-gray-500 group-hover:text-blue-500 transition-colors"})]}),e.jsxs("button",{onClick:()=>p("hi"),disabled:d!==null,className:`w-full flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-2xl border-2 transition-all font-bold group ${d==="hi"?"border-blue-500 shadow-xl shadow-blue-500/10":"border-transparent hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"} ${d!==null&&d!=="hi"?"opacity-50":""}`,children:[e.jsx("span",{className:"text-xl text-gray-800 dark:text-gray-100 font-rhodium",children:"हिन्दी (Hindi)"}),d==="hi"?e.jsx(Ue,{className:"w-6 h-6 text-blue-500 animate-spin"}):e.jsx(qe,{className:"w-6 h-6 text-gray-300 dark:text-gray-500 group-hover:text-blue-500 transition-colors"})]}),e.jsxs("button",{onClick:()=>p("en"),disabled:d!==null,className:`w-full flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-2xl border-2 transition-all font-bold group ${d==="en"?"border-blue-500 shadow-xl shadow-blue-500/10":"border-transparent hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"} ${d!==null&&d!=="en"?"opacity-50":""}`,children:[e.jsx("span",{className:"text-xl text-gray-800 dark:text-gray-100 font-rhodium",children:"English"}),d==="en"?e.jsx(Ue,{className:"w-6 h-6 text-blue-500 animate-spin"}):e.jsx(qe,{className:"w-6 h-6 text-gray-300 dark:text-gray-500 group-hover:text-blue-500 transition-colors"})]})]})]})})]})},Ns=()=>{const[a,n]=l.useState(()=>typeof window>"u"?"tabs":localStorage.getItem("menuStyle")||"tabs"),[s,m]=l.useState(()=>typeof window>"u"?"topbar":localStorage.getItem("desktopLayoutStyle")||"topbar");return{menuStyle:a,desktopLayoutStyle:s,handleSetMenuStyle:g=>{n(g),localStorage.setItem("menuStyle",g)},handleSetDesktopLayoutStyle:g=>{m(g),localStorage.setItem("desktopLayoutStyle",g)},resetLayoutSettings:()=>{localStorage.removeItem("menuStyle"),localStorage.removeItem("desktopLayoutStyle"),n("tabs"),m("topbar")}}},Ss=()=>{const a=typeof window<"u"&&!!window.Android,[n]=l.useState(()=>typeof window>"u"?!1:!!(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone||a));return{isStandalone:n,canInstall:!n,isInstalled:n,deferredPrompt:null,handleInstallClick:()=>{window.open("https://play.google.com/store/apps/details?id=com.khumnath.nepdate","_blank")}}},Ts=()=>{const{location:a,isStashLoaded:n,language:s,useElevation:m,ayanamsaMethod:c,engineType:b,setCalendarSystem:i,calendarSystem:g,isTopocentric:d}=$e(),[x,p]=l.useState(()=>Le(a.zoneId)),f=l.useMemo(()=>ue(x),[x]),[o,w]=l.useState(null),[y,r]=l.useState(!1);l.useEffect(()=>{p(Le(a.zoneId))},[a.zoneId]),l.useEffect(()=>{const h=a.latitude,k=a.longitude,C=a.offset,N=m?a.elevation:0;try{const M=new Date(x);M.setUTCHours(0,0,0,0);const D=ka(M,h,k,C,s,a.zoneId,n,N,c,b,d);"error"in D?ne(`Error from calculate:'${D.error}`,"error",2e3):w(D)}catch(M){ne(`Error calculating today details:${M}`,"error",2e3)}},[x,a.latitude,a.longitude,a.offset,s,n,m,a.elevation,c,b,d]);const[T,t]=l.useState(g);l.useEffect(()=>{t(g)},[g]);const[B,W]=l.useState(f.year),[A,O]=l.useState(f.monthIndex),[P,j]=l.useState(x.getUTCFullYear()),[E,I]=l.useState(x.getUTCMonth()),S=l.useMemo(()=>T==="bs"?B:P,[T,B,P]),Q=l.useMemo(()=>T==="bs"?A:E,[T,A,E]);l.useEffect(()=>{const h=()=>{const D=ca(new Date,a.zoneId),R=ca(x,a.zoneId);if(D.day!==R.day||D.month!==R.month||D.year!==R.year){console.log("Midnight detected, updating today..."),p(D.date);const ae=B===f.year&&A===f.monthIndex,ee=P===x.getUTCFullYear()&&E===x.getUTCMonth();if(ae||ee){const ie=ue(D.date);W(ie.year),O(ie.monthIndex),j(D.year),I(D.month)}}},k=Le(a.zoneId),N=k.getUTCHours()===23&&k.getUTCMinutes()===59?1e3:6e4,M=setInterval(h,N);return()=>clearInterval(M)},[x,f,a.zoneId,B,A,P,E]),l.useEffect(()=>{try{if(S===null)return;const k=(T==="bs"?oa(S,Q,15):Va(S,Q,15)).getTime()/864e5+24405875e-1;Sa.preloadForJd(k)}catch(h){console.error("Failed to preload stash chunk for current view:",h)}},[S,Q,T]);const $=l.useCallback(h=>{r(!0),setTimeout(()=>W(h),0)},[]),J=l.useCallback(h=>{r(!0),setTimeout(()=>j(h),0)},[]),se=l.useCallback(h=>{r(!0),setTimeout(()=>O(h),0)},[]),Z=l.useCallback(h=>{r(!0),setTimeout(()=>I(h),0)},[]),_=l.useCallback(()=>{const h=Le(a.zoneId),k=ue(h);if(B===k.year&&A===k.monthIndex&&P===h.getUTCFullYear()&&E===h.getUTCMonth()){p(h);return}r(!0),setTimeout(()=>{p(h),W(k.year),O(k.monthIndex),j(h.getUTCFullYear()),I(h.getUTCMonth())},0)},[a.zoneId,B,A,P,E]),te=l.useCallback(h=>{if(h===T)return;const k=P===x.getUTCFullYear()&&E===x.getUTCMonth(),C=B===f.year&&A===f.monthIndex;if(h==="bs"&&k||h==="ad"&&C)_();else if(h==="bs"){const N=P??x.getUTCFullYear(),D=Ha(N,E,12),R=Ga(D),z=ue(R);z.year===0||!z.year?_():(W(z.year),O(z.monthIndex))}else if(B===null)_();else{const N=oa(B,A,18);j(N.getUTCFullYear()),I(N.getUTCMonth())}t(h),i(h)},[T,P,E,B,A,x,f,_,i]),le=l.useCallback(h=>{r(!0),setTimeout(()=>{if(T==="bs"){const k=h==="prev"?A-1:A+1;k<0?(O(11),W(C=>{const N=C??f.year;return N===1?-1:N-1})):k>11?(O(0),W(C=>{const N=C??f.year;return N===-1?1:N+1})):O(k)}else{const k=h==="prev"?E-1:E+1;k<0?(I(11),j(C=>{const N=C??x.getUTCFullYear();return N===1?-1:N-1})):k>11?(I(0),j(C=>{const N=C??x.getUTCFullYear();return N===-1?1:N+1})):I(k)}},0)},[T,A,E,x,f]),re=l.useCallback(h=>{r(!0),setTimeout(()=>{T==="bs"?W(k=>(k??f.year)+(h==="next"?1:-1)):j(k=>(k??x.getUTCFullYear())+(h==="next"?1:-1))},0)},[T,x,f]);l.useEffect(()=>{const h=setTimeout(()=>r(!1),50);return()=>clearTimeout(h)},[B,A,P,E,T]);const q=l.useRef(s);return l.useEffect(()=>{q.current!==s&&(s==="en"||s==="hi"?te("ad"):s==="ne"&&te("bs"),q.current=s)},[s,te]),{activeSystem:T,currentBsYear:B,currentBsMonth:A,currentAdYear:P,currentAdMonth:E,currentYear:S,currentMonth:Q,switchSystem:te,goToToday:_,changeMonth:le,changeYear:re,setCurrentBsYear:$,setCurrentBsMonth:se,setCurrentAdYear:J,setCurrentAdMonth:Z,initialToday:x,initialTodayBs:f,todayDetails:o,isNavigating:y}},Ms=Fe.map(a=>a.key),Cs=()=>{const a=l.useCallback(()=>{if(typeof window>"u")return{view:"calendar",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:null};const h=window.location.hash.replace("#","").trim(),k=window.location.pathname.trim(),C=new URLSearchParams(window.location.search);if(window.location.pathname.includes("/bs")||window.location.pathname.includes("/ad")||C.has("bs")||C.has("ad")||C.has("today"))return{view:"day-detail",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:null};const N=C.get("activeView"),M=[...h.split("/").filter(Boolean),...k.split("/").filter(Boolean)],D=N||M.find(ge=>Ms.includes(ge)||["blog-detail","day-detail","post"].includes(ge));if(!D)return{view:"calendar",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:null};const R=M.join("/");if(R.includes("bs?")||R.includes("ad?"))return{view:"day-detail",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:null};const z=M.indexOf("post");if(z!==-1&&M.length>=z+3)return{view:"blog-detail",params:null,isKundaliVisible:!1,isDharmaVisible:!1,post:{source:M[z+1],slug:decodeURIComponent(M.slice(z+2).join("/"))}};const ae=D,ee=M.indexOf(D),ie=M[ee+1];let be=null,he=!1,me=!1;return ae==="dharma"&&ie?(he=!0,ie!=="section"&&(be={subSection:ie})):ae==="kundali"&&ie==="result"&&(me=!0),{view:ae||"calendar",params:be,isKundaliVisible:me,isDharmaVisible:he,post:null}},[]),n=a(),[s,m]=l.useState(n.post),[c,b]=l.useState(n.view),[i,g]=l.useState(n.params),[d,x]=l.useState(n.isKundaliVisible),[p,f]=l.useState(n.isDharmaVisible),o=l.useRef("calendar"),[w,y]=l.useState(null),[r,T]=l.useState(!1),[t,B]=l.useState(!1),[W,A]=l.useState(!1),O=l.useRef(null),P=l.useRef(null),j=l.useRef(null),[E,I]=l.useState(!1),S=l.useRef(null),Q=l.useRef(0),[$,J]=l.useState(!1);l.useEffect(()=>{let h=null,k=0;const C=25,N=()=>{k++,typeof window.Android<"u"?(J(!0),h&&clearInterval(h)):k>=C&&h&&clearInterval(h)};return N(),$||(h=window.setInterval(N,2e3)),()=>{h&&clearInterval(h)}},[]),l.useEffect(()=>{const h=a();c==="blog-detail"&&h.post&&m(h.post)},[c,a]),l.useEffect(()=>{if($)return;let h="";if(c!=="calendar"){if(c==="day-detail")return;if(c==="blog-detail"&&s)h=`post/${s.source}/${s.slug}`;else if(h=c,c==="kundali"&&d)h+="/result";else if(c==="dharma"&&p){const D=i?.subSection?.toLowerCase();h+=D?`/${D}`:"/section"}}const k=window.location.hash.replace("#",""),C=window.location.pathname.includes("/bs")||window.location.pathname.includes("/ad"),N=C&&c!=="day-detail",M=window.location.pathname!=="/"&&window.location.pathname!=="/index.html"&&!C;if(k!==h||N||M){let D=h?`#${h}`:window.location.pathname;N||M?D=`/${h?"#"+h:""}`:c==="calendar"&&(D=window.location.pathname);const R=o.current!==c,z=c==="blog-detail",ae=o.current!=="calendar"&&c!=="calendar"&&!z,ee=k===""||h.startsWith(k)&&h!==k;M?window.history.replaceState({view:c},"",D):R&&ae?window.history.replaceState({view:c},"",D):!R&&!ee?window.history.replaceState({view:c},"",D):window.history.pushState({view:c},"",D)}o.current=c},[c,d,p,$,s,i]);const se=l.useRef(!1);l.useEffect(()=>{if($)return;const h=t||W||r;if(h&&!se.current){const k=window.history.state||{};k.isPopupOpen||window.history.pushState({...k,isPopupOpen:!0},"",window.location.href)}else!h&&se.current&&(window.history.state||{}).isPopupOpen&&window.history.back();se.current=h},[t,W,r,$]),l.useEffect(()=>{const h=k=>{t&&k.key==="Backspace"&&(k.preventDefault(),B(!1))};return t&&window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[t]);const Z=l.useCallback(()=>r?(T(!1),!0):t?(B(!1),!0):j.current?(j.current(),!0):c==="kundali"&&d&&O.current?(O.current(),!0):c==="dharma"&&p&&P.current?(P.current(),!0):$&&c==="blog-detail"&&s?.source?(b(s.source),m(null),!0):c!=="calendar"?(b("calendar"),!0):!1,[r,t,c,d,p,$,s]),_=l.useRef(Z);l.useEffect(()=>{_.current=Z},[Z]),l.useEffect(()=>{const h=()=>{Q.current=0,I(!1),S.current&&(clearTimeout(S.current),S.current=null)},k=()=>_.current()?(h(),!0):(Q.current+=1,Q.current===1?(I(!0),navigator.vibrate&&navigator.vibrate(50),S.current=window.setTimeout(h,2e3),!0):(typeof window.Android?.exitApp=="function"?window.Android.exitApp():window.navigator?.app?.exitApp&&window.navigator.app.exitApp(),!1)),C=M=>{M.preventDefault(),k()};$&&(window.handleBackPress=k),document.addEventListener("backbutton",C);const N=()=>{const M=a();b(M.view),g(M.params),f(M.isDharmaVisible),x(M.isKundaliVisible),m(M.post||null),T(!1),B(!1),A(!1),j.current&&(j.current(),j.current=null)};return window.addEventListener("popstate",N),()=>{h(),window.removeEventListener("popstate",N),document.removeEventListener("backbutton",C)}},[$,c,a]);const te=h=>{y(h),T(!0)},le=l.useCallback(h=>{O.current=h},[]),re=l.useCallback(h=>{P.current=h},[]),q=l.useCallback(h=>{j.current=h,A(!!h)},[]);return{activeView:c,setActiveView:b,selectedDate:w,setSelectedDate:y,isModalOpen:r,setIsModalOpen:T,isMenuOpen:t,setIsMenuOpen:B,isKundaliResultsVisible:d,setIsKundaliResultsVisible:x,setKundaliBackAction:le,isDharmaResultsVisible:p,setIsDharmaResultsVisible:f,setDharmaBackAction:re,setPopupBackAction:q,viewParams:i,setViewParams:g,showExitToast:E,handleDayClick:te,isAndroidWebView:$,postParams:s,setPostParams:m}},Is=(a,n)=>{const[s,m]=l.useState(!1),[c,b]=l.useState(null),[i,g]=l.useState(null);return l.useEffect(()=>{typeof window<"u"&&window.Android&&(typeof window.Android.isAndroidApp=="function"?m(window.Android.isAndroidApp()):m(!0))},[]),{isAndroidApp:s,handleTouchStart:f=>{b(f.touches[0].clientX),g(null)},handleTouchMove:f=>g(f.touches[0].clientX),handleTouchEnd:()=>{if(!c||!i)return;const f=i-c;f>60&&c<50?n(!0):f<-60&&a&&n(!1),b(null),g(null)}}},Ds=({blog:a,onBack:n,onNavigate:s})=>{const{t:m,n:c,language:b}=xe(),i=l.useRef(null),g=l.useRef(null);l.useEffect(()=>{g.current&&g.current.scrollTo(0,0)},[a]);const[d,x]=Y.useState([]);l.useEffect(()=>{(async()=>{try{const y=(await Da(b)).filter(r=>r.id!==a.id).map(r=>{let T=0;return a.tags&&r.tags&&(T=a.tags.filter(B=>r.tags.includes(B)).length),{blog:r,score:T}});y.sort((r,T)=>T.score!==r.score?T.score-r.score:.5-Math.random()),x(y.slice(0,3).map(r=>r.blog))}catch(o){console.error("Failed to load related posts:",o)}})()},[a,b]);const p=async()=>{const f=window.location.href,o=decodeURI(f),w={title:a.title,text:"",url:Na(o)};if(window.Android&&typeof window.Android.share=="function"){window.Android.share(w.title,"Check out this article",w.url);return}if(navigator.share)try{await navigator.share(w);return}catch(r){if(r instanceof Error&&r.name==="AbortError")return;console.warn("Share API failed, trying clipboard...",r)}const y=w.url;try{if(navigator.clipboard&&navigator.clipboard.writeText){await navigator.clipboard.writeText(y),ne.success("Url copied to clipboard!");return}}catch(r){console.warn("Clipboard API failed, trying legacy...",r)}try{const r=document.createElement("textarea");r.value=y,r.style.position="fixed",r.style.left="-9999px",r.style.top="0",document.body.appendChild(r),r.focus(),r.select();const T=document.execCommand("copy");if(document.body.removeChild(r),T)ne.success("Url copied to clipboard!");else throw new Error("execCommand failed")}catch(r){console.error("All share methods failed",r),ne.error("Could not share or copy link")}};return e.jsxs("div",{className:"h-full bg-white dark:bg-gray-900 animate-in fade-in slide-in-from-bottom-4 duration-300 relative overflow-hidden flex flex-col",children:[e.jsx(Za,{title:a.title.split(":")[0],onBack:n,transparent:!0,className:"absolute top-0 left-0 right-0 z-20",rightContent:e.jsx("button",{onClick:p,className:"p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/20 text-gray-900 dark:text-white transition-colors",children:e.jsx(ze,{size:20})})}),e.jsxs("div",{ref:g,className:"flex-1 overflow-y-auto pb-20",children:[e.jsxs("div",{className:"relative h-[40vh] md:h-[50vh] w-full overflow-hidden flex-shrink-0",children:[e.jsx("img",{src:a.image,alt:a.title,className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"}),e.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-4xl mx-auto",children:[e.jsx("div",{className:"flex gap-2 mb-3",children:a.tags.map((f,o)=>e.jsx("span",{className:"px-2 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-sm",children:f},o))}),e.jsx("h1",{className:"text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 font-serif",children:a.title}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-gray-200 text-sm md:text-base",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(Ra,{size:16}),e.jsx("span",{className:"font-medium",children:a.author})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(Oa,{size:16}),e.jsx("span",{children:a.date})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(Ve,{size:16}),e.jsx("span",{children:m("readTime",c(a.readTime))})]})]})]})]}),e.jsx("article",{className:"max-w-3xl mx-auto px-5 md:px-0 -mt-6 relative z-10",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-t-3xl shadow-xl p-6 md:p-10 min-h-[500px]",children:[e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed font-serif",children:[e.jsx("p",{className:"lead text-xl font-medium text-gray-600 dark:text-gray-200 mb-8 border-l-4 border-blue-500 pl-4 italic",children:a.excerpt}),e.jsx("div",{ref:i,dangerouslySetInnerHTML:{__html:a.content},className:"blog-content"})]}),e.jsxs("div",{className:"mt-12 pt-8 border-t border-gray-200 dark:border-gray-700",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-100 mb-4",children:m("alsoRead")}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[d.map(f=>e.jsx("div",{className:"h-[320px]",children:e.jsx(is,{blog:f,onClick:()=>s(f),compact:!0})},f.id)),d.length===0&&e.jsx("div",{className:"col-span-full p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 text-center text-sm text-gray-500 dark:text-gray-400",children:m("moreArticlesComing")})]})]})]})})]})]})},As=Y.lazy(()=>Me(()=>import("./CalendarPrintPage-D7Ry-1T2.js"),__vite__mapDeps([2,3,0,1,4,5,6,7,8,9,10,11,12,13]))),Es=Y.lazy(()=>Me(()=>import("./DailySaaitPage-jrV6pYer.js"),__vite__mapDeps([14,3,0,1,4,5,7,8,15,9,10]))),Bs=Y.lazy(()=>Me(()=>import("./DayDetailPage-DQED08mk.js"),__vite__mapDeps([16,3,0,1,4,5,7,8,9,10,12,17,18,15,19,20,21,22,23,24]))),Ls=Y.lazy(()=>Me(()=>import("./HomePage-SwbN1Tui.js"),__vite__mapDeps([25,3,0,1,4,5,15,7,8,9,10,26,21,18,22,6,11,27,28,12,20,29,24,30,23,17,19])));Y.lazy(()=>Me(()=>import("./TimelinePage-ConewibC.js"),__vite__mapDeps([31,3,0,1,4,5,9,7,8,10,15,21,18,22])));const fa=String(1783439845358),pa="nepdate_last_web_build",zs=()=>{const{t:a}=xe(),[n,s]=Y.useState(!1);l.useEffect(()=>{if(localStorage.getItem(pa)!==fa&&(localStorage.setItem(pa,fa),ea.clear()),typeof window<"u"&&window.Android?.setWebVersion)try{window.Android.setWebVersion("2.7.1")}catch(L){console.error("Failed to set web version on Android",L)}},[]);const{theme:m,toggleTheme:c,resetTheme:b}=ns(),{location:i,language:g,updateLanguage:d,isSetupComplete:x,resetSettings:p,engineType:f,isStashLoaded:o}=$e(),w=["ne","en","hi"],y={ne:"ने",en:"EN",hi:"हि"},r=g==="auto"?"ne":g,T=w[(w.indexOf(r)+1)%w.length],{menuStyle:t,desktopLayoutStyle:B,handleSetMenuStyle:W,handleSetDesktopLayoutStyle:A,resetLayoutSettings:O}=Ns(),{isStandalone:P,canInstall:j,handleInstallClick:E}=Ss(),{activeView:I,setActiveView:S,selectedDate:Q,setSelectedDate:$,isModalOpen:J,setIsModalOpen:se,isMenuOpen:Z,setIsMenuOpen:_,handleDayClick:te,setIsKundaliResultsVisible:le,setKundaliBackAction:re,setIsDharmaResultsVisible:q,setDharmaBackAction:h,setPopupBackAction:k,showExitToast:C,postParams:N,setPostParams:M,viewParams:D,setViewParams:R}=Cs(),{activeSystem:z,currentYear:ae,currentMonth:ee,switchSystem:ie,goToToday:be,changeMonth:he,changeYear:me,setCurrentBsYear:ge,setCurrentAdYear:ke,setCurrentBsMonth:Ce,setCurrentAdMonth:Ie,initialToday:Ne,initialTodayBs:Ke,todayDetails:Ze,isNavigating:De}=Ts(),{isAndroidApp:Ae,handleTouchStart:Se,handleTouchMove:_e,handleTouchEnd:Xe}=Is(Z,_),[v,F]=Y.useState(null),K=()=>{b(),O(),p(),ea.clear(),ne.info("Settings reset to default",2e3)};l.useEffect(()=>{if(new URLSearchParams(window.location.search).get("app_updated")==="true"){ne.success("Latest version loaded successfully",4e3),ea.clear();const V=new URL(window.location.href);V.searchParams.delete("app_updated"),window.history.replaceState({},"",V.toString())}},[]),l.useEffect(()=>{const L=new URLSearchParams(window.location.search).get("activeView");L&&(S(L),window.history.replaceState({},"",Qe()))},[S]),l.useEffect(()=>{!De&&x&&typeof window<"u"&&window.Android?.onAppReady&&window.Android.onAppReady()},[De,x]);const H=l.useRef(o);l.useEffect(()=>{let u=null;return f==="modern"&&(o?H.current||ne.success("High-precision data downloaded and applied modern engine!",3e3):u=ne.info("Downloading precision data. Using analytical engine temporarily...",0)),H.current=o,()=>{u&&ne.dismiss(u)}},[f,o]),l.useEffect(()=>{const u=()=>S("print-calendar");window.addEventListener("navigate-to-print-calendar",u);const L=()=>S("settings");return window.addEventListener("open-settings-view",L),()=>{window.removeEventListener("navigate-to-print-calendar",u),window.removeEventListener("open-settings-view",L)}},[S]),l.useEffect(()=>{const u=()=>{document.documentElement.classList.remove("dark")},L=()=>{s(!1),m==="dark"&&document.documentElement.classList.add("dark")},V=()=>s(!0),G=()=>s(!1);return window.addEventListener("beforeprint",u),window.addEventListener("afterprint",L),window.addEventListener("preparing-print",V),window.addEventListener("finished-print",G),()=>{window.removeEventListener("beforeprint",u),window.removeEventListener("afterprint",L),window.removeEventListener("preparing-print",V),window.removeEventListener("finished-print",G)}},[m]),l.useEffect(()=>{C&&ne.info("Press back again to exit",2e3)},[C]);const ye=()=>te(Ne);l.useEffect(()=>{I==="blog-detail"&&N&&(async()=>{try{const L=await Da(r);let V=L.find(G=>We(G.title)===N.slug);if(!V){const G=await ls(N.slug);if(G){const X=L.find(oe=>oe.id===G.id);X&&(V=X,M({...N,slug:We(X.title)}))}}V?F(V):(console.error("Blog not found:",N.slug),S("calendar"))}catch(L){console.error("Error loading blog:",L)}})()},[I,N?.slug,r]);const fe=()=>{N?.source?(S(N.source),M(null)):S("calendar")};return e.jsx(Xa,{isRadioActive:I==="radio",children:e.jsxs("div",{className:`fixed inset-0 h-[100dvh] w-full flex flex-col bg-slate-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors overflow-hidden ${B==="sidebar"?"md:flex-row":""} ${m==="dark"&&I!=="print-calendar"?"dark":""}`,onTouchStart:Se,onTouchMove:_e,onTouchEnd:Xe,children:[B==="topbar"&&e.jsx("div",{className:"w-full sticky top-0 z-30 print:hidden hidden md:block border-b border-gray-200 dark:border-gray-700",children:e.jsx(ms,{activeView:I,activeSystem:z,onNavigate:u=>{R(null),S(u)},showInstall:!P&&j&&!Ae,onInstallClick:E,theme:m,onThemeToggle:c})}),I==="calendar"&&e.jsx("header",{className:"sticky top-0 px-4 pt-2 bg-transparent z-30 md:hidden",children:e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>_(!0),className:"p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700","aria-label":"Open menu",title:"Open menu",children:e.jsx(Ya,{className:"w-5 h-5"})}),e.jsx(ra,{activeSystem:z,hideControl:I!=="calendar"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>d(T),className:"px-2 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-[11px] font-bold text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600","aria-label":"Toggle Language",title:"Toggle Language",children:y[r]||"ने"}),t==="tabs"&&!P&&j&&!Ae&&e.jsxs("button",{onClick:E,className:"px-2 py-2 text-left text-xs rounded bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2",children:[e.jsx(aa,{className:"w-5 h-5"})," ",e.jsx("span",{children:a("installApp")})]})]})]})}),Z&&e.jsx("div",{className:"fixed inset-0 bg-black/40 z-40 md:hidden",onClick:()=>_(!1)}),e.jsx("aside",{className:`fixed top-0 left-0 z-[10001] h-full bg-slate-200 dark:bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out
          ${Z?"translate-x-0":"-translate-x-full"}
          ${B==="sidebar"?"md:translate-x-0 md:sticky md:h-screen md:w-56":"md:hidden w-64"}`,children:e.jsxs("div",{className:"flex flex-col h-full p-4 overflow-y-auto pb-24 no-scrollbar",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-lg font-semibold text-gray-800 dark:text-gray-100 font-rhodium",children:"Menu"}),e.jsx("button",{onClick:()=>_(!1),className:"p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 md:hidden",title:a("close"),"aria-label":a("close"),children:e.jsx(ja,{className:"w-5 h-5"})})]}),e.jsxs("nav",{className:"flex flex-col space-y-3 text-gray-800 dark:text-gray-200",children:[Fe.filter(u=>!u.hideOnSideMenu).map(u=>e.jsxs("button",{onClick:()=>{R(null),S(u.key),_(!1)},className:`px-2 py-2 flex items-center gap-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 font-rhodium ${I===u.key?"bg-gray-300 dark:bg-gray-700 font-medium":""}`,children:[u.icon," ",e.jsx("span",{className:"font-rhodium",children:a(u.labelKey)})]},u.key)),typeof window<"u"&&window.Android&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>{He(),_(!1)},className:"px-2 py-2 flex items-center gap-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 font-rhodium",children:[e.jsx(ia,{icon:ss,className:"w-5 h-5 text-emerald-500 drop-shadow-icon"})," ",e.jsx("span",{className:"font-rhodium",children:"Share App"})]}),e.jsxs("button",{onClick:()=>{Ge(),_(!1)},className:"px-2 py-2 flex items-center gap-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 font-rhodium",children:[e.jsx(ia,{icon:ts,className:"w-5 h-5 text-amber-500 drop-shadow-icon"})," ",e.jsx("span",{className:"font-rhodium",children:"Rate App"})]})]}),!P&&j&&!Ae&&e.jsxs("button",{onClick:()=>{E(),_(!1)},className:"px-2 py-2 flex items-center gap-2 rounded bg-blue-600 text-white hover:bg-blue-700",children:[e.jsx(aa,{className:"w-4 h-4"})," ",a("installApp")]}),e.jsxs("button",{onClick:()=>{c(),_(!1)},className:"px-2 py-2 flex items-center gap-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700",children:[m==="light"?e.jsx(pe,{className:"w-4 h-4"}):e.jsx(we,{className:"w-4 h-4"})," ",a(m==="light"?"darkMode":"lightMode")]}),e.jsx("hr",{className:"border-gray-300 dark:border-gray-600 my-2"}),e.jsxs("button",{onClick:()=>{Pe(),_(!1)},className:"px-2 py-2 flex items-center gap-2 rounded text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50",children:[e.jsx(sa,{className:"w-4 h-4"})," Clear Cache & Reload"]})]}),e.jsxs("div",{className:"mt-auto text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4",children:["© ",Le(i.zoneId).getUTCFullYear()," ",a("project")]})]})}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsxs("div",{id:"app-scroll-container",className:`h-full no-scrollbar mx-auto w-full max-w-7xl xl:max-w-6xl overflow-x-hidden overflow-y-auto ${I==="calendar"?"px-4 md:px-6 pb-20 md:pb-6":"p-0"}`,children:[e.jsxs(Y.Suspense,{fallback:e.jsx("div",{className:"flex-1 flex items-center justify-center h-full",children:e.jsx("div",{className:"w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"})}),children:[I==="calendar"&&e.jsxs(e.Fragment,{children:[e.jsx(Ls,{activeSystem:z,currentYear:ae,currentMonth:ee,switchSystem:ie,goToToday:be,theme:m,toggleTheme:c,todayDetails:Ze,setActiveView:S,initialToday:Ne,initialTodayBs:Ke,handleShowDetailsClick:ye,setCurrentBsYear:ge,setCurrentAdYear:ke,setCurrentBsMonth:Ce,setCurrentAdMonth:Ie,changeMonth:he,changeYear:me,handleDayClick:te,setPostParams:M,setViewParams:R,isNavigating:De}),e.jsx(fs,{onNavigate:(u,L)=>{S(u),R(L||null),L&&typeof L.month=="number"&&(z==="bs"?Ce(L.month):Ie(L.month))}})]}),I==="day-detail"&&e.jsx(Bs,{onBack:()=>{window.history.pushState({},"",Qe()),S("calendar")},onNavigate:u=>S(u)}),I==="blog-detail"&&v&&e.jsx(Ds,{blog:v,onBack:fe,onNavigate:u=>{M({source:N?.source||"calendar",slug:We(u.title)}),window.scrollTo(0,0)}}),I==="daily-saait"&&e.jsx(Es,{onBack:()=>S("calendar"),onNavigate:u=>S(u),activeSystem:z}),I==="print-calendar"&&e.jsx(As,{onBack:()=>S("calendar"),activeSystem:z}),(()=>{const u=Fe.find(L=>L.key===I);if(u&&u.page){const L=u.page,V={onBack:()=>S("calendar"),onOpenMenu:()=>_(!0),theme:m,activeSystem:z,onNavigate:X=>S(X)};let G={...V,...D};return I==="settings"?G={...V,currentTheme:m,onThemeChange:c,currentMenuStyle:t,onMenuStyleChange:W,currentDesktopLayoutStyle:B,onDesktopLayoutStyleChange:A,onResetSettings:K,isAndroidApp:Ae,onReloadApp:Pe}:I==="kundali"?G={...V,setIsKundaliResultsVisible:le,setKundaliBackAction:re,initialData:D?.formData}:I==="namakaran"?G={...V,onViewKundali:X=>{R({formData:X}),S("kundali")},onNavigate:(X,oe)=>{oe&&R(oe),S(X)}}:I==="dharma"?G={...V,activeSystem:z,currentYear:ae||2081,currentMonth:ee,tag:D?.tag,onNavigate:(X,oe)=>{X==="blog-detail"?(M({source:"dharma",slug:We(oe.title)}),S("blog-detail")):X==="dharma"&&(R(oe),S("dharma"))},subSection:D?.subSection,setIsDharmaResultsVisible:q,setDharmaBackAction:h}:I==="timeline"&&(G={...V,initialDate:Q||Ne}),e.jsx(L,{...G})}return null})()]}),t==="slide"&&e.jsx("div",{className:"w-full bg-slate-200/50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 print:hidden md:hidden mt-8 pb-4",children:e.jsx(gs,{})})]})}),t==="tabs"&&e.jsx("div",{className:"md:hidden print:hidden",children:e.jsx(hs,{activeView:I,onNavigate:u=>{R(null),S(u)},theme:m,onThemeToggle:c,themeLabel:a(m==="light"?"darkMode":"lightMode"),setPopupBackAction:k})}),e.jsx(ws,{date:Q,isOpen:J,onClose:()=>se(!1),activeSystem:z,onTimelineClick:u=>{$(u),S("timeline")},onNavigate:u=>S(u)}),e.jsx(Qa,{}),!x&&e.jsx(ks,{}),n&&e.jsxs("div",{className:"fixed inset-0 z-[10002] bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-200",children:[e.jsx("div",{className:"w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"}),e.jsx("p",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Preparing to print..."})]})]})})},Ea=l.createContext(void 0),ua="nepdate_cached_ads_config",Fs=()=>{const n=Qe().replace("https://appassets.androidplatform.net","https://nepdate.khumnath.com.np");return`${n.endsWith("/")?n:`${n}/`}ads.json`},Ps={"ad-slot1":null,"ad-slot2":null,"ad-slot3":null},$s=({children:a})=>{const[n,s]=l.useState(()=>{if(typeof window<"u")try{const i=localStorage.getItem(ua);if(i)return JSON.parse(i)}catch(i){console.warn("Failed to parse cached ads config:",i)}return Ps}),[m,c]=l.useState(!0),b=async()=>{try{const i=`${Fs()}?t=${Date.now()}`,g=await fetch(i,{cache:"no-store",headers:{"Cache-Control":"no-cache"}});if(g.ok){const d=await g.json(),x={"ad-slot1":d?.["ad-slot1"]||null,"ad-slot2":d?.["ad-slot2"]||null,"ad-slot3":d?.["ad-slot3"]||null},p=JSON.stringify(n),f=JSON.stringify(x);p!==f&&(s(x),localStorage.setItem(ua,f),console.log("SW/Ads: Ads config updated from remote source."))}}catch(i){console.warn("SW/Ads: Soft probe for ads.json failed (using cached/fallback):",i)}finally{c(!1)}};return l.useEffect(()=>{b();const i=setInterval(b,3e4);return()=>clearInterval(i)},[]),e.jsx(Ea.Provider,{value:{configs:n,isLoading:m,refreshAds:b},children:a})},Js=()=>{const a=l.useContext(Ea);if(!a)throw new Error("useAds must be used within an AdProvider");return a};os.Icon.Default.mergeOptions({iconUrl:xs,shadowUrl:ds,iconRetinaUrl:cs});window.addEventListener("vite:preloadError",a=>{console.warn("Failed to load chunk, reloading page...",a),window.location.reload()});"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(a=>{for(const n of a)n.unregister().then(s=>{s&&console.log("SW: Successfully unregistered redundant service worker.")})});"caches"in window&&caches.keys().then(a=>{for(const n of a)caches.delete(n).then(s=>{s&&console.log("SW: Purged cache storage:",n)})});localStorage.removeItem("__build_id__");Sa.load();Ka.init();Ua.createRoot(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(Ja,{children:e.jsx($s,{children:e.jsx(zs,{})})})}));export{vs as D,Js as u};
