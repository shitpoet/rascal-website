"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[14339],{3905:(e,a,s)=>{s.d(a,{Zo:()=>m,kt:()=>k});var n=s(67294);function t(e,a,s){return a in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s,e}function r(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,n)}return s}function i(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?r(Object(s),!0).forEach((function(a){t(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}function l(e,a){if(null==e)return{};var s,n,t=function(e,a){if(null==e)return{};var s,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],a.indexOf(s)>=0||(t[s]=e[s]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(t[s]=e[s])}return t}var o=n.createContext({}),c=function(e){var a=n.useContext(o),s=a;return e&&(s="function"==typeof e?e(a):i(i({},a),e)),s},m=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var s=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(s),k=t,v=p["".concat(o,".").concat(k)]||p[k]||d[k]||r;return s?n.createElement(v,i(i({ref:a},m),{},{components:s})):n.createElement(v,i({ref:a},m))}));function k(e,a){var s=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=s.length,i=new Array(r);i[0]=p;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var c=2;c<r;c++)i[c]=s[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,s)}p.displayName="MDXCreateElement"},34276:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=s(87462),t=(s(67294),s(3905));const r={title:"Measuring Classes"},i=void 0,l={unversionedId:"Recipes/Metrics/MeasuringJava/MeasuringClasses/index",id:"Recipes/Metrics/MeasuringJava/MeasuringClasses/index",title:"Measuring Classes",description:"Synopsis",source:"@site/docs/Recipes/Metrics/MeasuringJava/MeasuringClasses/index.md",sourceDirName:"Recipes/Metrics/MeasuringJava/MeasuringClasses",slug:"/Recipes/Metrics/MeasuringJava/MeasuringClasses/",permalink:"/docs/Recipes/Metrics/MeasuringJava/MeasuringClasses/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Recipes/Metrics/MeasuringJava/MeasuringClasses/index.md",tags:[],version:"current",frontMatter:{title:"Measuring Classes"},sidebar:"tutorialSidebar",previous:{title:"Measuring Java",permalink:"/docs/Recipes/Metrics/MeasuringJava/"},next:{title:"Measuring Methods",permalink:"/docs/Recipes/Metrics/MeasuringJava/MeasuringMethods/"}},o={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],m={toc:c};function d(e){let{components:a,...s}=e;return(0,t.kt)("wrapper",(0,n.Z)({},m,s,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h4",{id:"synopsis"},"Synopsis"),(0,t.kt)("p",null,"A typical example of how to use M3 to analyze Java classes."),(0,t.kt)("h4",{id:"examples"},"Examples"),(0,t.kt)("p",null,"First we import the basic data types for representing Java. The model is called ",(0,t.kt)("em",{parentName:"p"},"M3"),", and its definition is split acros a generic\nlanguage independent module called ","[Rascal:analysis/m3/Core]"," and a Java specific part called ","[Rascal:lang/java/m3/Core]",". Have a look at the documentation\nof these modules later. For now we will go through using them in a few examples."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import lang::java::m3::Core;\nok\nrascal>import lang::java::m3::AST;\nok\n")),(0,t.kt)("p",null,'"Snakes and Ladders" is an example Java project of which we have stored the source code in ',(0,t.kt)("inlineCode",{parentName:"p"},"|tmp:///snakes-and-ladders/src|")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>|tmp:///snakes-and-ladders/src/snakes/|.ls\nlist[loc]: [\n  |tmp:///snakes-and-ladders/src/snakes/Die.java|,\n  |tmp:///snakes-and-ladders/src/snakes/SimpleGameTest.java|,\n  |tmp:///snakes-and-ladders/src/snakes/LastSquare.java|,\n  |tmp:///snakes-and-ladders/src/snakes/Snake.java|,\n  |tmp:///snakes-and-ladders/src/snakes/Ladder.java|,\n  |tmp:///snakes-and-ladders/src/snakes/FirstSquare.java|,\n  |tmp:///snakes-and-ladders/src/snakes/DieTest.java|,\n  |tmp:///snakes-and-ladders/src/snakes/Player.java|,\n  |tmp:///snakes-and-ladders/src/snakes/Game.java|,\n  |tmp:///snakes-and-ladders/src/snakes/ISquare.java|,\n  |tmp:///snakes-and-ladders/src/snakes/Square.java|\n]\n")),(0,t.kt)("p",null,"Now we can extract our overview model, using the classpath we derived:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>myModel = createM3FromDirectory(|tmp:///snakes-and-ladders/src|);\nM3: m3(\n  |tmp:///snakes-and-ladders/src|,\n  annotations={\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/Snake/squareLabel()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/Ladder/landHereOrGoHome()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/SimpleGameTest/newGame()|,|java+class:///Test|>,\n    <|java+method:///snakes/SimpleGameTest/move8jillWins(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/FirstSquare/isFirstSquare()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/Ladder/squareLabel()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/FirstSquare/isOccupied()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/SimpleGameTest/initialStrings(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/SimpleGameTest/move4jillSnake(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/DieTest/testInRange()|,|java+class:///Test|>,\n    <|java+method:///snakes/DieTest/testMinReached()|,|java+class:///Test|>,\n    <|java+class:///snakes/SimpleGameTest|,|java+class:///RunWith|>,\n    <|java+method:///snakes/SimpleGameTest/move2jackBackwards(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/DieTest/testMaxReached()|,|java+class:///Test|>,\n    <|java+method:///snakes/SimpleGameTest/move5jackLadder(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/SimpleGameTest/move6jill(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/FirstSquare/enter(snakes.Player)|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/LastSquare/isLastSquare()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/FirstSquare/leave(snakes.Player)|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/SimpleGameTest/move3jackMeetsJill(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/SimpleGameTest/move2jillLadder(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/SimpleGameTest/move7jackBouncesBackToJill(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/SimpleGameTest/move1jack(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/FirstSquare/player()|,|java+interface:///java/lang/Override|>\n  },\n  typeDependency={\n    <|java+method:///snakes/Game/winner()|,|java+class:///snakes/Game|>,\n    <|java+method:///snakes/Game/winner()|,|java+class:///snakes/Player|>,\n    <|java+parameter:///snakes/Player/joinGame(snakes.Game)/scope(game)/scope(0)/game|,|java+class:///snakes/Game|>,\n    <|java+field:///snakes/Game/winner|,|java+class:///snakes/Player|>,\n    <|java+method:///snakes/Square/nextSquare()|,|java+interface:///snakes/ISquare|>,\n    <|java+method:///snakes/Square/nextSquare()|,|java+class:///snakes/Game|>,\n    <|java+method:///snakes/Square/nextSquare()|,|java+primitiveType:///int|>,\n    <|java+method:///snakes/Square/nextSquare()|,|java+class:///snakes/Square|>,\n    <|java+method:///snakes/Square/moveAndLand(int)|,|java+interface:///snakes/ISquare|>,\n    <|java+method:///snakes/Square/moveAndLand(int)|,|java+class:///snakes/Game|>,\n    <|java+method:///snakes/Square/moveAndLand(int)|,|java+primitiveType:///int|>,\n    <|java+method:///snakes/Square/moveAndLand(int)|,|java+class:///snakes/Square|>,\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///java/lang/String|>,\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+interface:///snakes/ISquare|>,\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///snakes/Game|>,\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///java/lang/Object|>,\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/Game/initSquare(int,snakes.ISquare)|,|java+interface:///snakes/ISquare|>,\n    ...\n")),(0,t.kt)("p",null,"Next, let's focus on the ",(0,t.kt)("em",{parentName:"p"},"containment")," relation. This defines what parts of the source code are parts of which other parts:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>myModel.containment\nrel[loc from,loc to]: {\n  <|java+method:///snakes/Game/isValidPosition(int)|,|java+parameter:///snakes/Game/isValidPosition(int)/scope(position)/scope(0)/position|>,\n  <|java+compilationUnit:///snakes-and-ladders/src/snakes/SimpleGameTest.java|,|java+class:///snakes/SimpleGameTest|>,\n  <|java+method:///snakes/Square/enter(snakes.Player)|,|java+parameter:///snakes/Square/enter(snakes.Player)/scope(player)/scope(0)/player|>,\n  <|java+method:///snakes/FirstSquare/leave(snakes.Player)|,|java+parameter:///snakes/FirstSquare/leave(snakes.Player)/scope(player)/scope(0)/player|>,\n  <|java+method:///snakes/Game/findSquare(int,int)|,|java+variable:///snakes/Game/findSquare(int,int)/target|>,\n  <|java+method:///snakes/Game/findSquare(int,int)|,|java+parameter:///snakes/Game/findSquare(int,int)/scope(position)/scope(0)/position|>,\n  <|java+method:///snakes/Game/findSquare(int,int)|,|java+parameter:///snakes/Game/findSquare(int,int)/scope(moves)/scope(0)/moves|>,\n  <|java+constructor:///snakes/Snake/Snake(int,snakes.Game,int)|,|java+parameter:///snakes/Snake/Snake(int,snakes.Game,int)/scope(transport)/scope(0)/transport|>,\n  <|java+constructor:///snakes/Snake/Snake(int,snakes.Game,int)|,|java+parameter:///snakes/Snake/Snake(int,snakes.Game,int)/scope(position)/scope(0)/position|>,\n  <|java+constructor:///snakes/Snake/Snake(int,snakes.Game,int)|,|java+parameter:///snakes/Snake/Snake(int,snakes.Game,int)/scope(game)/scope(0)/game|>,\n  <|java+method:///snakes/Game/addPlayers(snakes.Player%5B%5D)|,|java+variable:///snakes/Game/addPlayers(snakes.Player%5B%5D)/scope(0)/player|>,\n  <|java+method:///snakes/Game/addPlayers(snakes.Player%5B%5D)|,|java+parameter:///snakes/Game/addPlayers(snakes.Player%5B%5D)/scope(initPlayers)/scope(0)/initPlayers|>,\n  <|java+compilationUnit:///snakes-and-ladders/src/snakes/Snake.java|,|java+class:///snakes/Snake|>,\n  <|java+compilationUnit:///snakes-and-ladders/src/snakes/Die.java|,|java+class:///snakes/Die|>,\n  <|java+method:///snakes/Square/moveAndLand(int)|,|java+parameter:///snakes/Square/moveAndLand(int)/scope(moves)/scope(0)/moves|>,\n  <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+parameter:///snakes/SimpleGameTest/move1strings(snakes.Game)/scope(game)/scope(0)/game|>,\n  <|java+method:///snakes/Game/initSquare(int,snakes.ISquare)|,|java+parameter:///snakes/Game/initSquare(int,snakes.ISquare)/scope(square)/scope(0)/square|>,\n  <|java+method:///snakes/Game/initSquare(int,snakes.ISquare)|,|java+parameter:///snakes/Game/initSquare(int,snakes.ISquare)/scope(position)/scope(0)/position|>,\n  <|java+class:///snakes/Die|,|java+method:///snakes/Die/roll()|>,\n  <|java+class:///snakes/Die|,|java+field:///snakes/Die/FACES|>,\n  <|java+class:///snakes/Snake|,|java+method:///snakes/Snake/squareLabel()|>,\n  <|java+class:///snakes/Snake|,|java+constructor:///snakes/Snake/Snake(int,snakes.Game,int)|>,\n  <|java+method:///snakes/Die/roll()|,|java+variable:///snakes/Die/roll()/result|>,\n  <|java+method:///snakes/SimpleGameTest/initialStrings(snakes.Game)|,|java+parameter:///snakes/SimpleGameTest/initialStrings(snakes.Game)/scope(game)/scope(0)/game|>,\n  <|java+method:///snakes/SimpleGameTest/move4jillSnake(snakes.Game)|,|java+parameter:///snakes/SimpleGameTest/move4jillSnake(snakes.Game)/scope(game)/scope(0)/game|>,\n  <|java+method:///snakes/DieTest/reached(int)|,|java+variable:///snakes/DieTest/reached(int)/scope(0)/i|>,\n  <|java+method:///snakes/DieTest/reached(int)|,|java+variable:///snakes/DieTest/reached(int)/die|>,\n  <|java+method:///snakes/DieTest/reached(int)|,|java+parameter:///snakes/DieTest/reached(int)/scope(value)/scope(0)/value|>,\n  <|java+method:///snakes/Game/addSquares(int)|,|java+variable:///snakes/Game/addSquares(int)/scope(0)/scope(0)/square|>,\n  <|java+method:///snakes/Game/addSquares(int)|,|java+parameter:///snakes/Game/addSquares(int)/scope(size)/scope(0)/size|>,\n  <|java+method:///snakes/Game/addSquares(int)|,|java+variable:///snakes/Game/addSquares(int)/scope(0)/i|>,\n  <|java+method:///snakes/DieTest/testInRange()...\n")),(0,t.kt)("p",null,"You are looking at a binary relation of type ",(0,t.kt)("inlineCode",{parentName:"p"},"rel[loc from,loc to]"),", where ",(0,t.kt)("inlineCode",{parentName:"p"},"from")," is the container and ",(0,t.kt)("inlineCode",{parentName:"p"},"to")," is the contained item. Each tuple, or row if you will, maps a container to a contained item."),(0,t.kt)("p",null,"As you can read, classes contain methods, methods contain variables, etc. Classes could also contain other classes (nested classes), and methods can even contain classes (anonymous classes). Let's focus on a specific class, and project what it contains from the relation:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>import IO;\nok\nrascal>println(readFile(|java+class:///snakes/Snake|))\npublic class Snake extends Ladder {\n\n    public Snake(int transport, Game game, int position) {\n        super(transport, game, position);\n    }\n\n    @Override\n    protected String squareLabel() {\n        return this.destination().position() + "<-" + position;\n    }\n\n}\nok\nrascal>myModel.containment[|java+class:///snakes/Snake|]\nset[loc]: {\n  |java+method:///snakes/Snake/squareLabel()|,\n  |java+constructor:///snakes/Snake/Snake(int,snakes.Game,int)|\n}\n')),(0,t.kt)("p",null,"Let's filter the methods:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>snakeMethods = [ e | e <- myModel.containment[|java+class:///snakes/Snake|], e.scheme == "java+method"];\nlist[loc]: [|java+method:///snakes/Snake/squareLabel()|]\n')),(0,t.kt)("p",null,"And we are ready to compute our first metric. How many methods does this class contain?"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>import List;\nok\nrascal>size(snakeMethods)\nint: 1\n")),(0,t.kt)("p",null,"No magic applied! It is just a little query on a model that knows everything about the code. "),(0,t.kt)("p",null,"Note that some people define Java's constructors also as methods! In that case our metric is wrong and we should fix it.\nThe quality of a metric's implementation is defined by its independent definition."),(0,t.kt)("p",null,"Let's generalize and compute the number of methods for all classes in one big expression. First we make a new function to compute the number for any given class. Now we reuse ",(0,t.kt)("inlineCode",{parentName:"p"},"isMethod")," for a change, which includes normal methods, constructors and static initializers:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>int numberOfMethods(loc cl, M3 model) = size([ m | m <- model.containment[cl], isMethod(m)]);\nint (loc, M3): function(|prompt:///|(0,93,<1,0>,<1,93>))\nrascal>numberOfMethods(|java+class:///snakes/Snake|, myModel)\nint: 2\n")),(0,t.kt)("p",null,"Then we apply this new function to give us a map from classes to integers:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>classes(myModel)\nset[loc]: {\n  |java+class:///snakes/Game|,\n  |java+class:///snakes/SimpleGameTest|,\n  |java+class:///snakes/DieTest|,\n  |java+class:///snakes/Square|,\n  |java+class:///snakes/Player|,\n  |java+class:///snakes/Ladder|,\n  |java+class:///snakes/Die|,\n  |java+class:///snakes/Snake|,\n  |java+class:///snakes/LastSquare|,\n  |java+class:///snakes/FirstSquare|\n}\nrascal>map[loc class, int methodCount] numberOfMethodsPerClass = (cl:numberOfMethods(cl, myModel) | cl <- classes(myModel));\nmap[loc class, int methodCount]: (\n  |java+class:///snakes/Game|:20,\n  |java+class:///snakes/SimpleGameTest|:12,\n  |java+class:///snakes/DieTest|:4,\n  |java+class:///snakes/Square|:15,\n  |java+class:///snakes/Player|:8,\n  |java+class:///snakes/Ladder|:6,\n  |java+class:///snakes/Die|:1,\n  |java+class:///snakes/Snake|:2,\n  |java+class:///snakes/LastSquare|:2,\n  |java+class:///snakes/FirstSquare|:7\n)\n")),(0,t.kt)("p",null,"How about the number of fields?"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>int numberOfFields(loc cl, M3 model) = size([ m | m <- model.containment[cl], isField(m)]);\nint (loc, M3): function(|prompt:///|(0,91,<1,0>,<1,91>))\nrascal>map[loc class, int fieldCount] numberOfFieldsPerClass = (cl:numberOfFields(cl, myModel) | cl <- classes(myModel));\nmap[loc class, int fieldCount]: (\n  |java+class:///snakes/Game|:4,\n  |java+class:///snakes/SimpleGameTest|:2,\n  |java+class:///snakes/DieTest|:1,\n  |java+class:///snakes/Square|:3,\n  |java+class:///snakes/Player|:2,\n  |java+class:///snakes/Ladder|:1,\n  |java+class:///snakes/Die|:1,\n  |java+class:///snakes/Snake|:0,\n  |java+class:///snakes/LastSquare|:0,\n  |java+class:///snakes/FirstSquare|:1\n)\n")),(0,t.kt)("p",null,"What is the ratio between fields and methods for each class?"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>(cl : (numberOfFieldsPerClass[cl] * 1.0) / (numberOfMethodsPerClass[cl] * 1.0) | cl <- classes(myModel))\nmap[loc, real]: (\n  |java+class:///snakes/Game|:0.2,\n  |java+class:///snakes/SimpleGameTest|:0.1666666667,\n  |java+class:///snakes/DieTest|:0.25,\n  |java+class:///snakes/Square|:0.2,\n  |java+class:///snakes/Player|:0.25,\n  |java+class:///snakes/Ladder|:0.1666666667,\n  |java+class:///snakes/Die|:1.,\n  |java+class:///snakes/Snake|:0.,\n  |java+class:///snakes/LastSquare|:0.,\n  |java+class:///snakes/FirstSquare|:0.1428571429\n)\n")),(0,t.kt)("p",null,"There is a lot more to discover in M3 models. These are the currently available relations in an M3 model:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>import Node;\nok\nrascal>import Set;\nok\nrascal>for (r <- sort(getKeywordParameters(myModel)<0>)) println("  <r>");\n  annotations\n  containment\n  declarations\n  documentation\n  extends\n  fieldAccess\n  implements\n  messages\n  methodInvocation\n  methodOverrides\n  modifiers\n  names\n  typeDependency\n  types\n  uses\nlist[void]: []\n')),(0,t.kt)("p",null,"See ",(0,t.kt)("a",{parentName:"p",href:"/docs/Library/analysis/m3/Core"},"Core")," for the definition of the language-independent relations and ",(0,t.kt)("a",{parentName:"p",href:"/docs/Library/lang/java/m3/Core"},"Core")," for the Java-specific extensions."),(0,t.kt)("h4",{id:"benefits"},"Benefits"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Rascal values, such as M3 models, are fully text-based. That means what you see on screen is what is in memory, and vice versa. Nothing is hidden or implicit. No magic!"),(0,t.kt)("li",{parentName:"ul"},"Using relational calculus operators like ",(0,t.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Set/Intersection/"},"Intersection"),", ",(0,t.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Set/Union/"},"Union"),", ",(0,t.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Relation/Composition/"},"Composition"),", ",(0,t.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Set/Comprehension/"},"Comprehension")," you can query M3 models in many different ways."),(0,t.kt)("li",{parentName:"ul"},"M3 models encapsulate ",(0,t.kt)("em",{parentName:"li"},"everything")," there is to know about the structure of a Java project. Using the knowledge of the Eclipse JDT compiler we derive types and names, semantic relations that can be queried at will."),(0,t.kt)("li",{parentName:"ul"},"M3 models are ",(0,t.kt)("em",{parentName:"li"},"composable"),"; you could extract them for different projects that depend on each-other and combine them before running an analysis on the whole"),(0,t.kt)("li",{parentName:"ul"},"There are other M3 models for other languages, with similar ideas and design. You can transfer your analysis skills to those lanaguges, but also make analyses that cross the boundaries of programming languages (consider javascript and java, or java and C via JNI, etc.)")),(0,t.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Inaccurate query results are possible even though the M3 models are 100% accurate. ",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"M3 models are ",(0,t.kt)("em",{parentName:"li"},"initial")," in the sense that they contain what can be statically derived from the source code in terms of declarations and relations. "),(0,t.kt)("li",{parentName:"ul"},"Analyses based directly on this information can still be ",(0,t.kt)("em",{parentName:"li"},"inaccurate"),"; simply because they represent harder questions."),(0,t.kt)("li",{parentName:"ul"},"For example, a Java call graph produced by the relation composition ",(0,t.kt)("inlineCode",{parentName:"li"},"myModel.methodInvocation o myModel.methodOverrides")," shows ",(0,t.kt)("em",{parentName:"li"},"all")," possible concrete methods that could be invoked via virtual method invocation (over-approximation), but it skips all the invokes constructed via reflection (under-aproximation). In that sense this query is both incomplete and unsound, however useful it may be."))),(0,t.kt)("li",{parentName:"ul"},"Java still has the most complete M3 model in the Rascal ecosystem, so when you move to other languages prepare to extract more information from AST models instead.")))}d.isMDXComponent=!0}}]);