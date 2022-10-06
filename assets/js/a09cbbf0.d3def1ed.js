"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[81828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(n),m=l,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const o={title:"Hello",sidebar_position:0},i=void 0,r={unversionedId:"Recipes/Basic/Hello/index",id:"Recipes/Basic/Hello/index",title:"Hello",description:'The "Hello" example shows where to put your code such that it can do something. In this',source:"@site/docs/Recipes/Basic/Hello/index.md",sourceDirName:"Recipes/Basic/Hello",slug:"/Recipes/Basic/Hello/",permalink:"/docs/Recipes/Basic/Hello/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Recipes/Basic/Hello/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Hello",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Basic",permalink:"/docs/Recipes/Basic/"},next:{title:"Factorial",permalink:"/docs/Recipes/Basic/Factorial/"}},s={},c=[{value:"<code>hello</code> on command line, a.k.a. rascal shell",id:"hello-on-command-line-aka-rascal-shell",level:2},{value:"<code>hello</code> as function",id:"hello-as-function",level:2},{value:"<code>hello</code> in a module",id:"hello-in-a-module",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'The "Hello" example shows where to put your code such that it can do ',(0,l.kt)("em",{parentName:"p"},"something"),". In this\ncase all we do is print ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello World..."),". After you know where to put code such that it\ncan be executed, you can replace the slightly silly example with more useful things."),(0,l.kt)("h2",{id:"hello-on-command-line-aka-rascal-shell"},(0,l.kt)("inlineCode",{parentName:"h2"},"hello")," on command line, a.k.a. ",(0,l.kt)("a",{parentName:"h2",href:"/docs/RascalShell/"},"rascal shell")),(0,l.kt)("p",null,"The place to get Rascal code executed ",(0,l.kt)("em",{parentName:"p"},"immediately")," is the ",(0,l.kt)("a",{parentName:"p",href:"/docs/RascalShell/"},"rascal shell")," prompt.\n",(0,l.kt)("a",{parentName:"p",href:"/docs/GettingStarted/"},"Here")," is how to get it started."),(0,l.kt)("p",null,"When you have it up and running, it shows the prompt ",(0,l.kt)("inlineCode",{parentName:"p"},"rascal>")," that indicates that Rascal is ready for our input. "),(0,l.kt)("p",null,"Next, we import the library module ",(0,l.kt)("a",{parentName:"p",href:"/docs/Library/IO"},"IO")," since we will require a function from that library. Rascal responds with the feedback ",(0,l.kt)("inlineCode",{parentName:"p"},"ok")," so we know that all went well. Now we can call ",(0,l.kt)("inlineCode",{parentName:"p"},"println")," and proudly observe our first Rascal output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import IO;\nok\nrascal>println("Hello world, this is my first Rascal program");\nHello world, this is my first Rascal program\nok\n')),(0,l.kt)("h2",{id:"hello-as-function"},(0,l.kt)("inlineCode",{parentName:"h2"},"hello")," as function"),(0,l.kt)("p",null,"As the command above, a piece of code is not ",(0,l.kt)("em",{parentName:"p"},"reusable"),". To be able to use some code again and\nagain, the best way is to wrap it in a ",(0,l.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/Function/"},"Function"),", and then call it:d call it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import IO;\nok\nrascal>void hello() {\n>>>>>>>   println("Hello world, this is my first Rascal program");\n>>>>>>>}\nvoid (): function(|prompt:///|(0,76,<1,0>,<3,1>))\n')),(0,l.kt)("p",null,"When you type in a command and continue it on a new line\nthe Rascal systems prompts you with ",(0,l.kt)("inlineCode",{parentName:"p"},">>>>>>>")," to\nindicate that more input is needed. "),(0,l.kt)("p",null,"Don't get scared by\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"void (): void hello();")," that you get back\nwhen typing in the hello function. The first\n",(0,l.kt)("inlineCode",{parentName:"p"},"void ()")," part says the result is a function that takes\nno arguments and\nreturns nothing, and the second part\n",(0,l.kt)("inlineCode",{parentName:"p"},"function(...)")," is simplified print-out of the function-as-a-value\nthat elides all of the details of how functions are represented in memory."),(0,l.kt)("p",null,"Finally, we call the ",(0,l.kt)("inlineCode",{parentName:"p"},"hello")," function and we do this\ntwice to make point:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>hello()\nHello world, this is my first Rascal program\nok\nrascal>hello()\nHello world, this is my first Rascal program\nok\n")),(0,l.kt)("h2",{id:"hello-in-a-module"},(0,l.kt)("inlineCode",{parentName:"h2"},"hello")," in a module"),(0,l.kt)("p",null,"To have the ",(0,l.kt)("inlineCode",{parentName:"p"},"hello"),' function also for the future and to let it be used by others,\nwe will place it in a file. A Rascal file is called a "module":'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal"},'\nmodule demo::basic::Hello\n\nimport IO;\n\nvoid hello() {\n   println("Hello world, this is my first Rascal program!");\n}\n\n')),(0,l.kt)("p",null,"This module should be placed in ",(0,l.kt)("inlineCode",{parentName:"p"},"<project dir>/src/demo/basic/Hello.rsc"),"."),(0,l.kt)("p",null,"Using this ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello")," module is now simple:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import demo::basic::Hello;\nok\nrascal>hello();\nHello world, this is my first Rascal program!\nok\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"hello")," function is by default visible outside the ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello")," module.\nWe could stress this by adding writing ",(0,l.kt)("inlineCode",{parentName:"p"},"public void hello() { ... }"),"."),(0,l.kt)("p",null,"Restricting visibility to the module itself can be achieved by adding the keyword ",(0,l.kt)("inlineCode",{parentName:"p"},"private"),"\nto the definition of ",(0,l.kt)("inlineCode",{parentName:"p"},"hello"),". When other modules ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," this one, there you\nwill not be able to invoke ",(0,l.kt)("inlineCode",{parentName:"p"},"hello"),"."))}d.isMDXComponent=!0}}]);