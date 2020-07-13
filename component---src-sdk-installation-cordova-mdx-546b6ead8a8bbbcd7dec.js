(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{Ouxm:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return d}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var o=n("/FXl"),a=n("TjRS"),r=n("480a"),i=n("npze");n("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/sdk-installation/cordova.mdx"}});var s={_frontmatter:c},b=a.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(b,l({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"Add cordova plugin to your project:"),Object(o.b)("pre",null,Object(o.b)("code",l({parentName:"pre"},{}),"cordova plugin add https://github.com/smartlook/cordova-smartlook.git\n")),Object(o.b)("h1",{id:"installation-1"},"Installation"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Add cordova plugin to your project using this command:")),Object(o.b)(r.a,{snippets:{cli:"\ncordova plugin add https://github.com/smartlook/cordova-smartlook.git\n"},mdxType:"Code"}),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Setup and start Smartlook on ",Object(o.b)("a",l({parentName:"li"},{href:"https://cordova.apache.org/docs/en/5.1.1/cordova/events/events.deviceready.html"}),"deviceready")," callback:")),Object(o.b)(r.a,{snippets:{javascript:'\nif(document.readyState === "complete") {\n  document.addEventListener("deviceready", onDeviceReady, false);\n}\n\nfunction onDeviceReady() {\n    Smartlook.setupAndStartRecording({smartlookAPIKey: "YOUR_API_KEY"});\n}\n      '},mdxType:"Code"}),Object(o.b)(i.a,{kind:"important",mdxType:"Alert"},"You need to provide your Smartlook SDK API key which can be acquired in the Smartlook Dashboard."),Object(o.b)(i.a,{kind:"note",mdxType:"Alert"},"SDK will upload sessions only on WiFi if you want to upload sessions on mobile connections too, you need to enable this in your project setting in the dashboard."),Object(o.b)("h1",{id:"what-will-sdk-do"},"What will SDK do?"),Object(o.b)("p",null,"After this basic setup SDK will:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"record your application."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"stop itself automatically on application closure"),"."),Object(o.b)("li",{parentName:"ul"},"automatically hide all input elements (besides ",Object(o.b)("inlineCode",{parentName:"li"},"button")," and ",Object(o.b)("inlineCode",{parentName:"li"},"submit")," types)."),Object(o.b)("li",{parentName:"ul"},"detect basic user gestures and touches."),Object(o.b)("li",{parentName:"ul"},"and much more!")),Object(o.b)("h1",{id:"supported-versions"},"Supported versions"),Object(o.b)("p",null,"Current ",Object(o.b)("strong",{parentName:"p"},"minimal")," supported version is ",Object(o.b)("strong",{parentName:"p"},"Jelly Bean (API 18)")," for Android and ",Object(o.b)("strong",{parentName:"p"},"10")," for iOS."),Object(o.b)("h1",{id:"issue-tracker"},"Issue tracker"),Object(o.b)("p",null,"If you are experiencing any technical difficulties with our SDK feel free to report a issue to our ",Object(o.b)("a",l({parentName:"p"},{href:"https://github.com/smartlook/cordova-smartlook"}),"issue tracker"),"."))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/sdk-installation/cordova.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-sdk-installation-cordova-mdx-546b6ead8a8bbbcd7dec.js.map