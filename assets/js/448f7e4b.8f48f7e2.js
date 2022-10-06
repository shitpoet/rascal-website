"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[67466],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,g=d["".concat(l,".").concat(u)]||d[u]||c[u]||i;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},40642:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Motivation",sidebar_position:0},o=void 0,s={unversionedId:"WhyRascal/Motivation/index",id:"WhyRascal/Motivation/index",title:"Motivation",description:"Synopsis",source:"@site/docs/WhyRascal/Motivation/index.md",sourceDirName:"WhyRascal/Motivation",slug:"/WhyRascal/Motivation/",permalink:"/docs/WhyRascal/Motivation/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/WhyRascal/Motivation/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Motivation",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Why Rascal",permalink:"/docs/WhyRascal/"},next:{title:"The Extract-Analyze-SYnthesize (EASY) paradigm",permalink:"/docs/WhyRascal/EASY/"}},l={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"The distinguishing features of Rascal and how they solve real problems."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Meta-programs")," are programs that analyze, transform or generate other programs. Ordinary programs work on data; meta-programs work on programs. "),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"range of programs")," to which meta-programming can be applied is large: from programs in standard languages like C and Java to domain-specific languages for describing high-level system models or applications in specialized areas like gaming or finance. In some cases, even test results or performance data are used as input for meta-programs."),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"range of kinds of meta programs")," that can be applied is also large. There are simple meta programs that generate boilerplate code from a list of items. There are complex meta programs that reverse engineer and statically analyse a big software system before visualizing the results. When writing all these kinds of meta programs one needs similar operations and similar data-types. "),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"point of Rascal")," is to provide an easy-to-use and easy-to=-combine set of primitives to build and manipulate program representations. The point is ",(0,r.kt)("em",{parentName:"p"},"not")," to be or provide a unified representation of programs to let generic algorithms operate on. In meta programming the devil is often in the details. Rascal makes sure to not a priori abstract from the important details programming language syntax and semantics. Instead we make sure it is easy to address every important detail."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Rascal is a domain specific programming language"),". We emphasize programming here because Rascal is intended as an engineering tool for programmers that need to construct meta programs. Rascal programs allow running, inspecting, debugging, tracing, profiling, etc. just as normal programs do. The skills of any good programmer are enough to easily write good Rascal programs."),(0,r.kt)("p",null,"The unique selling point of Rascal is ",(0,r.kt)("em",{parentName:"p"},"linguistic integration")," of all the tools you need to make meta-programming effective:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"higher-order type-parameterized functions and algebraic data-types"),(0,r.kt)("li",{parentName:"ul"},"immutable (builtin) data collections: lists, sets, maps, relations, trees."),(0,r.kt)("li",{parentName:"ul"},"extensive pattern matching and subsitution primitives for every data-type."),(0,r.kt)("li",{parentName:"ul"},"source locations for provenance of code artefacts and other data sources."),(0,r.kt)("li",{parentName:"ul"},"structured programming with exceptions: ",(0,r.kt)("inlineCode",{parentName:"li"},"if"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"for"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"while"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"break"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"continue"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"throw"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"try-catch"),"."),(0,r.kt)("li",{parentName:"ul"},"structured fixed-point programming: ",(0,r.kt)("inlineCode",{parentName:"li"},"solve")),(0,r.kt)("li",{parentName:"ul"},"lexically scoped backtracking for data generators and non-unitary pattern matching."),(0,r.kt)("li",{parentName:"ul"},"syntax definition and parser generation"),(0,r.kt)("li",{parentName:"ul"},"abstract syntax definition and reading in ASTs from external sources"),(0,r.kt)("li",{parentName:"ul"},"generic recursive traversal primitives"),(0,r.kt)("li",{parentName:"ul"},"relational calculus, list, set and map comprehensions, and reducers, including transitive closures and comprehensions for lists, sets, relations, list relations and maps."),(0,r.kt)("li",{parentName:"ul"},"modular extensibility of syntax, data and functions (!) (no expression problem)")),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Typical applications of Rascal are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Empirical methods in Software Engineering research: metrics, statistics, impact analysis"),(0,r.kt)("li",{parentName:"ul"},"Design and Implementing of ",(0,r.kt)("em",{parentName:"li"},"domain-specific languages")," (DSLs);"),(0,r.kt)("li",{parentName:"ul"},"Design and Implementing of Programming Languages;"),(0,r.kt)("li",{parentName:"ul"},"Writing compilers."),(0,r.kt)("li",{parentName:"ul"},"Construction of Software Refactorings, ad-hoc or reusable;"),(0,r.kt)("li",{parentName:"ul"},"Analyzing Legacy Software: Reverse-engineering"),(0,r.kt)("li",{parentName:"ul"},"Renovating Legacy Software: Re-engineering"),(0,r.kt)("li",{parentName:"ul"},"Software Verification"),(0,r.kt)("li",{parentName:"ul"},"Model Driven Engineering: model-to-code, code-to-model, model verification, test code generation"),(0,r.kt)("li",{parentName:"ul"},"Debugging")),(0,r.kt)("p",null,"All these cases involve a form of meta-programming: software programs (in a wide sense) are the objects-of-interest\nthat are being analyzed, transformed or generated. More often than not, other sources of information (other than source code) are applied in metaprogramming.\nRascal is very generic: it can be applied in domains ranging from compiler construction and implementing domain-specific languages to constraint solving and software renovation."),(0,r.kt)("p",null,"Since representation of information is central to the approach, Rascal provides a rich set of built-in data types.\nTo support extraction and analysis, parsing and advanced pattern matching are provided.\nHigh-level control structures make analysis and synthesis of complex data structures simple."),(0,r.kt)("h4",{id:"benefits"},"Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Familiar syntax")," in a ",(0,r.kt)("em",{parentName:"li"},"what-you-see is-what-you-get")," style is used even for sophisticated concepts\nand this makes the language easy to learn and easy to use."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sophisticated built-in data types")," provide standard solutions for many meta-programming problems."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Safety")," is achieved by finding most errors before the program is executed and by making common errors\nlike missing initializations or invalid pointers impossible. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Local type inference")," makes local variable declarations redundant."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pattern matching")," can be used to analyze all complex data structures."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Syntax definitions")," make it possible to define new and existing languages and to write tools for them."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Visiting")," makes it easy to traverse data structures and to extract information from them or to synthesize results."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Templates")," enable easy code generation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Functions as values")," permit programming styles with high re-use."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Generic types")," allow writing functions that are applicable for many different types."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Eclipse integration")," makes Rascal programming a breeze. All familiar tools are at your fingertips.")))}c.isMDXComponent=!0}}]);