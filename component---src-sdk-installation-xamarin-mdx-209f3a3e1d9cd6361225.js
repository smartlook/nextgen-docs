(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{ExNL:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return b}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var a=n("/FXl"),o=n("TjRS"),r=n("+8zC");n("NRsk"),n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/sdk-installation/xamarin.mdx"}});var s={_frontmatter:l},c=o.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(c,i({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"xamarin"},"Xamarin"),Object(a.b)("h2",{id:"smartlook-nuget"},"Smartlook NuGet"),Object(a.b)("p",null,"Smartlook SKD for Xamarin is provided in the form of a ",Object(a.b)("a",i({parentName:"p"},{href:"https://www.nuget.org/packages/Smartlook/"}),"NuGet")," that wrapps up Smartlook iOS and Android native libraries into one universal interface."),Object(a.b)("p",null,"The official Smartlook NuGet could be found here: ",Object(a.b)("a",i({parentName:"p"},{href:"https://www.nuget.org/packages/Smartlook/"}),"Smartlook Xamarin NuGet"),"."),Object(a.b)("p",null,"Reasonable recent versions of iOS and Android are supported. For detailed info see the respective SDK installation documents here: ",Object(a.b)("a",i({parentName:"p"},{href:"/nextgen-docs/sdk-installation/ios"}),"iOS"),", ",Object(a.b)("a",i({parentName:"p"},{href:"/nextgen-docs/sdk-installation/android"}),"Android"),"."),Object(a.b)("h2",{id:"setup-and-start-recording"},"Setup and start recording"),Object(a.b)(r.a,{kind:"important",mdxType:"Alert"},"To setup Smartlook, you need your unique API key. This can be found in your mobile project settings in ",Object(a.b)("a",{href:"https://app.smartlook.com/settings/projects"},"your Smartlook Dashboard"),"."),Object(a.b)("p",null,"To access Smartlook API, use static methods exposed by ",Object(a.b)("inlineCode",{parentName:"p"},"Smartlook.Analytics")," class. The methods are the same for multi-platform, Android or iOS projects."),Object(a.b)("p",null,"The most straightforward way to run Smartlook is by setting and starting it up at the very begin of the app life-cycle "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"iOS"),": ",Object(a.b)("inlineCode",{parentName:"li"},"didFinishLaunchingWithOptions")," of your ",Object(a.b)("inlineCode",{parentName:"li"},"AppDelegates")," class"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Android"),": ",Object(a.b)("inlineCode",{parentName:"li"},"onCreate()")," of your ",Object(a.b)("inlineCode",{parentName:"li"},"Application")," class")),Object(a.b)("p",null,"First, ",Object(a.b)("strong",{parentName:"p"},"include")," Smartlook into the respective source code"),Object(a.b)(r.b,{snippets:{csharp:"\nusing Smartlook;\n  "},mdxType:"Code"}),Object(a.b)("p",null,"then ",Object(a.b)("strong",{parentName:"p"},"setup")," and ",Object(a.b)("strong",{parentName:"p"},"start")," it with "),Object(a.b)(r.b,{snippets:{csharp:'\nSmartlook.Analytics.SetupAndStart("YOR_API_KEY");\n      '},mdxType:"Code"}),Object(a.b)("hr",null),Object(a.b)("hr",null),Object(a.b)("hr",null),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"[Note: the following should be IMHO a in common text included into all SDK installtation docs]")),Object(a.b)(r.a,{kind:"note",invisibleOn:"",mdxType:"Alert"},"SDK will upload sessions only on WiFi if you want to upload sessions on mobile connections too, you need to enable this in your project setting in the dashboard. For more details about when your recordings appear in the Dashboard, refer ",Object(a.b)("a",{href:"/conceptual/when-i-will-see-the-recordings-in-dashboard"},"this detailed document"),"."),Object(a.b)("p",null,"Thats all you need for a quick start."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"After this basic setup SDK will:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"record your application."),Object(a.b)("li",{parentName:"ul"},"stop itself automatically on application closure.",Object(a.b)(r.f,{invisibleOn:"unity,unreal,cocos",mdxType:"TextBlock"},Object(a.b)("li",null),"automatically hide some default sensitive views.")),Object(a.b)("li",{parentName:"ul"},"detect basic user gestures and touches.",Object(a.b)(r.f,{invisibleOn:"ios",mdxType:"TextBlock"},Object(a.b)("li",null),"records install referrer if present.")),Object(a.b)("li",{parentName:"ul"},"and much more!")),Object(a.b)("p",null,"For more advanced recording customization please refer to "),Object(a.b)(r.d,{to:"/api_reference",platform:"ios",mdxType:"Link"},"Smartlook API reference"))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/sdk-installation/xamarin.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-sdk-installation-xamarin-mdx-209f3a3e1d9cd6361225.js.map