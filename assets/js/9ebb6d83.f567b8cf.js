"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[81500],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},45772:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Working on the Tutor Compiler",sidebar_position:0},o=void 0,l={unversionedId:"Developers/TutorCompiler/index",id:"Developers/TutorCompiler/index",title:"Working on the Tutor Compiler",description:"Synopsis",source:"@site/docs/Developers/TutorCompiler/index.md",sourceDirName:"Developers/TutorCompiler",slug:"/Developers/TutorCompiler/",permalink:"/docs/Developers/TutorCompiler/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Working on the Tutor Compiler",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Developers manual",permalink:"/docs/Developers/"},next:{title:"Working on the Interpreter",permalink:"/docs/Developers/Interpreter/"}},s={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"How to compile, run and test the tutor compiler."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"The tutor compiler translates Rascal modules and Markdown files to Docusaurus Markdown files. The main features are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flattening and fusing a hierarchical tree of markdown files that each describe a single concept"),(0,a.kt)("li",{parentName:"ul"},"Indexing sub-concepts and resolving links to them (internally)"),(0,a.kt)("li",{parentName:"ul"},"Implementing local tables of contents for listing nested subconcepts in the parent file"),(0,a.kt)("li",{parentName:"ul"},"Collecting and linking local image files"),(0,a.kt)("li",{parentName:"ul"},"Supporting subscripts and superscripts as in ",(0,a.kt)("inlineCode",{parentName:"li"},"Type\u2081")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Type^21^")," by translation MDX Text tags."),(0,a.kt)("li",{parentName:"ul"},"Collecting Rascal source modules and the function and data declarations in them to generating API documentations in markdown notation"),(0,a.kt)("li",{parentName:"ul"},"Running ",(0,a.kt)("inlineCode",{parentName:"li"},"rascal-shell")," blocks on the Rascal REPL and collecting resulting HTML visualizations as screenshots (unfinished)"),(0,a.kt)("li",{parentName:"ul"},"Executing the questions DSL to produce embedded interactive questions (unfinished)")),(0,a.kt)("p",null,"The tutor compiler is located here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/library/lang/rascal/tutor"},"src/org/rascalmpl/library/lang/rascal/tutor"),", with each main feature in a sub-folder. You will find the main compiler file in ",(0,a.kt)("inlineCode",{parentName:"p"},"Compiler.rsc"),". Some of the tutor compiler is written in Java, in particular the interface with the REPL (See ",(0,a.kt)("inlineCode",{parentName:"p"},"lang/rascal/tutor/repl/TutorCommandExecutor.java"),"."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"clone the rascal project first: ",(0,a.kt)("inlineCode",{parentName:"li"},"git clone git@github.com:usethesource/rascal.git")),(0,a.kt)("li",{parentName:"ul"},"compile it, but skip the type-checking of the library: ",(0,a.kt)("inlineCode",{parentName:"li"},"mvn -Drascal.compile.skip -DskipTests package")),(0,a.kt)("li",{parentName:"ul"},"run can be done in several ways:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"use VScode run command to execute ",(0,a.kt)("inlineCode",{parentName:"li"},"RascalShell")," in debug mode"),(0,a.kt)("li",{parentName:"ol"},'use Eclipse to "Run as Java Program", also ',(0,a.kt)("inlineCode",{parentName:"li"},"RascalShell")),(0,a.kt)("li",{parentName:"ol"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"java -jar target/rascal-<version>-SNAPSHOT.jar"))))),(0,a.kt)("p",null,"Note that it's indeed best to run the rascal REPL as described above, otherwise you might miss fixes in the Java-implemented part of the tutor, or other related changes in the interpreter that needed fixing to build the tutor."),(0,a.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"src/org/rascalmpl/library/lang/rascal/tutor"),' you will find "throwaway" scripts for translating asciidoctor markdown notation to docusaurus markdown notation. Sometimes it requires running the same script twice or three times to see the desired effects. This is because some rules generate the input for other rules to be transformed again.')))}u.isMDXComponent=!0}}]);