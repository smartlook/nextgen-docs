(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{HdlA:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return s})),n.d(e,"default",(function(){return d}));var o=n("Fcif"),a=n("+I+c"),i=(n("mXGw"),n("/FXl")),r=n("TjRS"),l=n("+8zC"),s=(n("NRsk"),n("aD51"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/sdk-installation/flutter.mdx"}});var c={_frontmatter:s},p=r.a;function d(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(i.b)(p,Object(o.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"flutter-sdk-installation"},"Flutter SDK Installation"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add Smartlook among other dependecies into the ",Object(i.b)("inlineCode",{parentName:"li"},"pubspec.yaml"))),Object(i.b)(l.b,{snippets:{yaml:"\ndependencies:\n  smartlook:\n"},mdxType:"Code"}),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Setup Smartlook and start recording, e.g., in your app state initiacization")),Object(i.b)(l.b,{snippets:{dart:"\nimport 'package:smartlook/smartlook.dart';\n\nclass _MyAppState extends State<MyApp> {\n\t@override\n\tvoid initState() {\n\t\tsuper.initState();\n\t\t...\n\t\tSmartlook.setupAndStartRecording('API_KEY');\n\t\t...\n\t  }\n}"},mdxType:"Code"}),Object(i.b)(l.g,{kind:"important",mdxType:"TextBlock"},'\nTo setup Smartlook, the **unique project API key **is needed. It can be found in the mobile project settings in <Link to="https://app.smartlook.com/settings/projects">Smartlook Dashboard</Link>.\n'),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Smartlook now starts recording the app. The recordings will appear in the ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://app.smartlook.com/"}),"Smartlook player")," shortly.  ")),Object(i.b)(l.g,{kind:"important",mdxType:"TextBlock"},'\nSDK will upload sessions **only on WiFi**. When uploading on mobile connections is requested, it must be enabled in the project settings in the dashboard. More details about the recording process can be found in the <Link to="/conceptual/when-the-recordings-appear-in-dashboard">Conceptual documentation</Link>.\n'),Object(i.b)("h1",{id:"supported-versions"},"Supported versions"),Object(i.b)("p",null,"Flutter is supported on iOS 10+ and Android Jelly Bean (API 18)."),Object(i.b)("h1",{id:"further-steps"},"Further Steps"),Object(i.b)(l.g,{mdxType:"TextBlock"},'\nAll Smartlook SDK methods are documented in the <Link to="/api_reference" platform="flutter">Smartlook API reference</Link>.\n\n\nSome **advanced use-case** and **troubleshooting** case-studies are described in the Cookbooks section of this documentation.\n\n\n**Issues and bugs** can be reported in the <Link to="https://github.com/smartlook/smartlook-mobile-issue-tracker">issue tracker</Link>.\n\n\n**Concepts** undelying the Smartlook functionality are descibed in the Conceptual documentation:\n* <Link to="/conceptual/setup-and-start-recording" platform="flutter">Setup & Start Recording</Link>\n* <Link to="/conceptual/when-the-recordings-appear-in-dashboard" platform="flutter">How are the data recorded and uploaded to be visible in player and dashboard</Link>\n* <Link to="/conceptual/life-cycle-session-user" platform="flutter">Smartlook Life Cycle in the App, Session, User</Link>\n* <Link to="/conceptual/what-and-how-is-recorded" platform="flutter">What is recorded be Smartlook, and how</Link>\n* <Link to="/conceptual/life-cycle-session-user" platform="flutter">Smartlook Life Cycle in the App, Session, User</Link>\n* <Link to="/conceptual/handling-sensitive-data" platform="flutter">Handling Sensitive Data</Link>\n* <Link to="/conceptual/screen-recording-quality" platform="flutter">Screen Recording Quality</Link>\n* Tracking <Link to="/conceptual/event-tracking" platform="flutter">Events</Link> and <Link to="/conceptual/recording-navigation" platform="flutter">Navigation</Link> in the App\n* <Link to="/conceptual/integrating-with-other-tools" platform="flutter">Smartlook integration with other tools</Link>\n\n\nMore info about the wrapper with additional examples can be found at [pub.dev site.](https://pub.dev/packages/smartlook#-readme-tab-)\n'))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/sdk-installation/flutter.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-sdk-installation-flutter-mdx-9b8ad9ecb903e0949b9e.js.map