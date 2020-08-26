(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{tm4K:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a("Fcif"),i=a("+I+c"),o=(a("mXGw"),a("/FXl")),r=a("TjRS"),c=a("+8zC"),s=(a("NRsk"),a("aD51"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/conceptual/recording-navigation.mdx"}});var l={_frontmatter:s},p=r.a;function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(p,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c.j,{mdxType:"Title"},"Recording Navigation"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"This section discusses how is the user navigation in the application recorded")),Object(o.b)("p",null,"Understanding the way user uses the application is the purpose of the analytics. A typical mobile application breaks into several ",Object(o.b)("em",{parentName:"p"},"screens"),", between them users navigates to achieve their goals."),Object(o.b)("p",null,"Smartlook attempts to track the transitions automaticallt and record them as ",Object(o.b)("strong",{parentName:"p"},"navigation events"),", that are then available in the Dashboard. Another usage of navigation events is generating ",Object(o.b)("strong",{parentName:"p"},"heatmpas"),"."),Object(o.b)("p",null,"To generate a meaningfull heatmap, a portion of the application UI with stable structure must be used. Smartlook assumes that a ",Object(o.b)("em",{parentName:"p"},"screen"),", i.e., interval between two subsequent navigation events is such a ",Object(o.b)("em",{parentName:"p"},"UI unit"),"."),Object(o.b)(c.i,{kind:"important",mdxType:"TextBlock"},"Properly dividing the user flow into individual screens important for correct heatmap generation, as each heatmap is generated for a particular screen, i.e., interval between two navigation events."),Object(o.b)("p",null,"However, the accuracy and usefulness of these auto-tracked navigation events depends heavily on the way the application UI is composed. Smartlook understands well apps that use standard UI kits a paradigms for each platform. If the application is, however, made using a 3rd party frameworks, e.g., a gaming framework, that Smartlook SDK cannot detect the navigation logic of the application. Details abount the extent auto-detection of navigation events on each particular platform are provided in the API Reference."),Object(o.b)("p",null,"In such a case, in orded to get useful navigation data, navigation events must be tracked programatically, using this method:"),Object(o.b)(c.i,{kind:"note",mdxType:"TextBlock"},"The navigation event recorded by this method is indistinguishable from the auto-detected navigation events."),Object(o.b)(c.c,{kind:"example",snippets:{android:{java:'\nSmartlook.trackNavigationEvent("LOGIN_SCREEN", ViewState.START);\n      ',kotlin:'\nSmartlook.trackNavigationEvent("LOGIN_SCREEN", ViewState.START)\n      '},ios:{swift:'\nSmartlook.trackNavigationEvent(withControllerId: "LOGIN_SCREEN", type: .enter)\n      ',"objective-c":'\n[Smartlook trackNavigationEventWithControllerId:@"LOGIN_SCREEN" type:SLNavigationTypeEnter];\n      '},react:{js:'\nSmartlook.trackNavigationEvent("LOGIN_SCREEN", "enter");\nSmartlook.trackNavigationEvent("LOGIN_SCREEN", "exit");\n'},unity:{csharp:'\nSmartlookUnity.Smartlook.TrackNavigationEvent("LOGIN_SCREEN", SmartlookUnity.Smartlook.NavigationEventType.enter);\n'},unreal:{csharp:"\nUNREAL - C#\n      "},cocos:{java:'\nSmartlook.trackNavigationEvent("LOGIN_SCREEN", ViewState.START);\n      ',kotlin:'\nSmartlook.trackNavigationEvent("LOGIN_SCREEN", ViewState.START)\n      '},cordova:{javascript:'\nSmartlook.trackNavigationEvent({name: "LOGIN_SCREEN", viewState: Smartlook.ViewState.START})\n    '},ionic:{typescrit:'\nsmartlook.trackNavigationEvent(new SmartlookNavigationEvent("LOGIN_SCREEN", SmartlookViewState.START));\n      '},flutter:{dart:'\nSmartlook.trackNavigationEvent("LOGIN_SCREEN", SmartlookNavigationEventType.enter);\n   '},xamarin:{csharp:"\nXAMARIN - C#\n      "}},mdxType:"CodeBlock"}),Object(o.b)("p",null,"where the type value is either of ",Object(o.b)("inlineCode",{parentName:"p"},"enter")," or ",Object(o.b)("inlineCode",{parentName:"p"},"exit")," kind. The ",Object(o.b)("inlineCode",{parentName:"p"},"exit")," event also records the duration from the previous corresponding enter event."),Object(o.b)(c.i,{mdxType:"TextBlock"},'\nMore details about the navigation events, consult <Link to="/docs/sdk/api-reference#navigation-even">the API reference</Link>.\n'))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/conceptual/recording-navigation.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-conceptual-recording-navigation-mdx-c5beea19e48fe429ec3b.js.map