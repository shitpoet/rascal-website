"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[55701],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,b=m["".concat(l,".").concat(d)]||m[d]||p[d]||s;return t?n.createElement(b,i(i({ref:r},c),{},{components:t})):n.createElement(b,i({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54921:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=t(83117),a=(t(67294),t(3905));const s={title:"module demo::basic::Squares"},i=void 0,o={unversionedId:"Library/demo/basic/Squares",id:"Library/demo/basic/Squares",title:"module demo::basic::Squares",description:"Usage",source:"@site/docs/Library/demo/basic/Squares.md",sourceDirName:"Library/demo/basic",slug:"/Library/demo/basic/Squares",permalink:"/docs/Library/demo/basic/Squares",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/demo/basic/Squares.md",tags:[],version:"current",frontMatter:{title:"module demo::basic::Squares"},sidebar:"tutorialSidebar",previous:{title:"module demo::basic::Quine",permalink:"/docs/Library/demo/basic/Quine"},next:{title:"demo::common",permalink:"/docs/Library/demo/common/"}},l={},u=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"function squares",id:"demo-basic-Squares-squares",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"function squaresTemplate",id:"demo-basic-Squares-squaresTemplate",level:2},{value:"Synopsis",id:"synopsis-2",level:4}],c={toc:u};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import demo::basic::Squares;")),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Demo of printing a table of squares"),(0,a.kt)("h2",{id:"demo-basic-Squares-squares"},"function squares"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"void squares(int n)"))),(0,a.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,a.kt)("p",null,"Print a table of squares using a for loop and single line string templates"),(0,a.kt)("h2",{id:"demo-basic-Squares-squaresTemplate"},"function squaresTemplate"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str squaresTemplate(int N)"))),(0,a.kt)("h4",{id:"synopsis-2"},"Synopsis"),(0,a.kt)("p",null,"a solution with one multi line string template"))}p.isMDXComponent=!0}}]);