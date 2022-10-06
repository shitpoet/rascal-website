"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[83410],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,y=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(y,l(l({ref:t},p),{},{components:a})):n.createElement(y,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},78800:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Algebraic Data Type",keywords:["data","struct","record","keywords","term","AST"],sidebar_position:4},l=void 0,s={unversionedId:"Rascal/Declarations/AlgebraicDataType/index",id:"Rascal/Declarations/AlgebraicDataType/index",title:"Algebraic Data Type",description:"Synopsis",source:"@site/docs/Rascal/Declarations/AlgebraicDataType/index.md",sourceDirName:"Rascal/Declarations/AlgebraicDataType",slug:"/Rascal/Declarations/AlgebraicDataType/",permalink:"/docs/Rascal/Declarations/AlgebraicDataType/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Declarations/AlgebraicDataType/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Algebraic Data Type",keywords:["data","struct","record","keywords","term","AST"],sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Type Parameters",permalink:"/docs/Rascal/Declarations/StaticTyping/TypeParameters/"},next:{title:"Function Declaration",permalink:"/docs/Rascal/Declarations/Function/"}},i={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Define a user-defined type (Algebraic Data Type)."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"// declaring a normal data type with 2 constructors of which the second also has keyword parameters:\ndata _Type_\n  = _ConstructorName1_ ( _ParameterType1_ _ParameterName1_, _ParameterType2_ _ParameterName2_, ...)\n  | _ConstructorName2_ ( _ParameterType1_ _ParameterName1_, ..., _KeywordType1_ _KeywordType1_ = _KeywordDefaultExp1_, ...)\n  ;\n\n// declaring a type-parametrized data-type:\ndata _Type_ [&_TypeParameter1_, &_TypeParameter2_]\n  = _ConstructorName1_ ( &_TypeParameter1_ _ParameterName1_, &_TypeParameter2_ _ParameterName2_, ...)\n  | _ConstructorName2_ ( &_TypeParameter1_ _ParameterName1_, ..., _KeywordType1_ _KeywordType1_ = _KeywordDefaultExp1_, ...)\n  ;  \n\n\n// declaring common keyword parameters:\ndata _Type_(_KeywordType1_ _KeywordType1_ = _KeywordDefaultExp1_, ...);\n")),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The user-defined types in Rascal are either concrete ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/SyntaxDefinition/"},"syntax definition"),"s, ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/Alias/"},"Alias"),"es, or ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/AlgebraicDataType/"},"./algebraic data type"),'s ("ADTs"). We use ADTs to define the shapes of structured, hierarchical data, that can also be recursive. Many think of ADTs as tree-like data-structures, others think of them as many-sorted algebraic signatures, and then again the concept of a "case class" from object-oriented programming also comes very close.'),(0,r.kt)("p",null,"In Rascal, algebraic data types have to be declared first by listing for each type a number of ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Expressions/Values/Constructor/"},"Constructor"),"s, and then values can be constructed using ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Expressions/Call/"},"Call")," to the declared constructor functions."),(0,r.kt)("p",null,"Constructor declarations are very much like function signatures:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"They have positional parameters with types"),(0,r.kt)("li",{parentName:"ul"},"They have keyword parameters with types and default values.")),(0,r.kt)("p",null,"However, unlike function signatures, constructor signatures can not have ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Patterns/"},"Patterns")," as parameters. Only ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Patterns/Variable/"},"Variable"),"s are allowed."),(0,r.kt)("p",null,"Algebraic data-types can have type parameters, such as ",(0,r.kt)("a",{parentName:"p",href:"/docs/Library/util/Maybe"},"Maybe")," for more generically applicable data-structures."),(0,r.kt)("p",null,'When "common keyword parameters" are declared, they are woven into the declarations of all visible constructors.'),(0,r.kt)("p",null,"When there are functions with the same name and the same ADT as return type in scope, a constructor becomes\none of overloaded alternatives. See also ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Expressions/Call/"},"Call")," for more semantics of overloading. Constructor\nfunctions are always considered to be ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),", so they are tried only after all the other functions have failed."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The following data declaration defines the datatype ",(0,r.kt)("inlineCode",{parentName:"p"},"Bool")," that contains various constants (",(0,r.kt)("inlineCode",{parentName:"p"},"tt()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ff()"),"\nand constructor functions ",(0,r.kt)("inlineCode",{parentName:"p"},"conj")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"disj"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>data Bool \n>>>>>>>  = tt() \n>>>>>>>  | ff() \n>>>>>>>  | conj(Bool L, Bool R)  \n>>>>>>>  | disj(Bool L, Bool R)\n>>>>>>>  ;\nok\n")),(0,r.kt)("p",null,"Terms of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Bool")," can be constructed using the defined constructors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>example = conj(tt(),ff());\nBool: conj(\n  tt(),\n  ff())\nrascal>example.L\nBool: tt()\nrascal>example.R\nBool: ff()\n")),(0,r.kt)("p",null,'Now let\'s add a "common" keyword field:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>data Bool(loc origin=|unknown:///|);\nok\nrascal>example = tt(origin=|home:///MyDocuments/test.bool|);\nBool: tt(origin=|home:///MyDocuments/test.bool|)\nrascal>example.origin\nloc: |home:///MyDocuments/test.bool|\n")),(0,r.kt)("p",null,"A parametrized data-type can be useful at times. The following\nalso demonstrates an overloaded function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>data SortedList[&T] = sorted(list[&T] lst);\nok\nrascal>SortedList[&T] sorted([*&T a, &T e, *&T b, &T f, *&T c]) = sorted([*a, f, *b, e, *c]) when f < e;\nSortedList[&T] (list[&T]): function(|prompt:///|(0,97,<1,0>,<1,97>))\nrascal>sorted([3,2,1])\nSortedList[int]: sorted([1,2,3])\n")),(0,r.kt)("p",null,"The (overloaded) ",(0,r.kt)("inlineCode",{parentName:"p"},"sorted")," constructor is only built when the ",(0,r.kt)("inlineCode",{parentName:"p"},"sorted")," function is done finding a list that is sorted\nby swapping elements that are out of order using ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Patterns/List/"},"list matching"),". "),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"SortedList")," is type-parametrized it works on any kind of type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>sorted(["tic", "tac", "toe"])\nSortedList[str]: sorted(["tac","tic","toe"])\n')),(0,r.kt)("p",null,'More direct usage of overloaded constructors and functions is "normalizing rewrite rules".\nHere we use an axiomatic definition of ',(0,r.kt)("inlineCode",{parentName:"p"},"conj")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"disj")," to rewrite all applications of ",(0,r.kt)("inlineCode",{parentName:"p"},"conj")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"tt")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ff"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>Bool conj(ff(), Bool _) = ff();\nBool (Bool, Bool): function(|prompt:///|(0,31,<1,0>,<1,31>))\nrascal>Bool conj(tt(), Bool b) = b;\nBool (Bool, Bool): function(|prompt:///|(0,28,<1,0>,<1,28>))\nrascal>Bool disj(tt(), Bool _) = tt();\nBool (Bool, Bool): function(|prompt:///|(0,31,<1,0>,<1,31>))\nrascal>Bool disj(ff(), Bool b) = b;\nBool (Bool, Bool): function(|prompt:///|(0,28,<1,0>,<1,28>))\n")),(0,r.kt)("p",null,"Now let's try it out:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>disj(conj(tt(),tt()), ff())\nBool: tt()\n")))}d.isMDXComponent=!0}}]);