(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{Ouxm:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return s})),o.d(t,"default",(function(){return p}));var n=o("Fcif"),a=o("+I+c"),r=(o("mXGw"),o("/FXl")),i=o("TjRS"),c=o("+8zC"),s=(o("aD51"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/sdk-installation/cordova.mdx"}});var d={_frontmatter:s},l=i.a;function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)(l,Object(n.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"installation"},"Installation"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Add cordova plugin to your project using this command:")),Object(r.b)(c.b,{snippets:{cli:"\ncordova plugin add https://github.com/smartlook/cordova-smartlook.git\n"},mdxType:"Code"}),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Setup and start Smartlook on ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://cordova.apache.org/docs/en/5.1.1/cordova/events/events.deviceready.html"}),"deviceready")," callback:")),Object(r.b)(c.b,{snippets:{javascript:'\nif(document.readyState === "complete") {\n  document.addEventListener("deviceready", onDeviceReady, false);\n}\n\nfunction onDeviceReady() {\n    Smartlook.setupAndStartRecording({smartlookAPIKey: "YOUR_API_KEY"});\n}\n      '},mdxType:"Code"}),Object(r.b)(c.h,{kind:"important",mdxType:"TextBlock"},'\nTo setup Smartlook, the **unique project API key **is needed. It can be found in the mobile project settings in <Link to="https://app.smartlook.com/settings/projects">Smartlook Dashboard</Link>.\n'),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Smartlook now starts recording the app. The recordings will appear in the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://app.smartlook.com/"}),"Smartlook player")," shortly.  ")),Object(r.b)(c.h,{kind:"important",mdxType:"TextBlock"},'\nSDK will upload sessions **only on WiFi**. When uploading on mobile connections is requested, it must be enabled in the project settings in the dashboard. More details about the recording process can be found in the <Link to="/conceptual/when-the-recordings-appear-in-dashboard">Conceptual documentation</Link>.\n'),Object(r.b)("h1",{id:"supported-versions"},"Supported versions"),Object(r.b)("p",null,"Current ",Object(r.b)("strong",{parentName:"p"},"minimal")," supported version is ",Object(r.b)("strong",{parentName:"p"},"Jelly Bean (API 18)")," for Android and ",Object(r.b)("strong",{parentName:"p"},"10")," for iOS."),Object(r.b)("h1",{id:"further-steps"},"Further Steps"),Object(r.b)(c.h,{mdxType:"TextBlock"},'\nAll Smartlook SDK methods are documented in the <Link to="/api_reference" platform="cordova">Smartlook API reference</Link>.\n\n\nSome **advanced use-case** and **troubleshooting** case-studies are described in the Cookbooks section of this documentation.\n\n\n**Issues and bugs** can be reported in the <Link to="https://github.com/smartlook/smartlook-mobile-issue-tracker)">issue tracker</Link>.\n\n\n**Concepts** undelying the Smartlook functionality are descibed in the Conceptual documentation:\n* <Link to="/conceptual/setup-and-start-recording" platform="cordova">Setup & Start Recording</Link>\n* <Link to="/conceptual/when-the-recordings-appear-in-dashboard" platform="cordova">How are the data recorded and uploaded to be visible in player and dashboard</Link>\n* <Link to="/conceptual/life-cycle-session-user" platform="cordova">Smartlook Life Cycle in the App, Session, User</Link>\n* <Link to="/conceptual/what-and-how-is-recorded" platform="cordova">What is recorded be Smartlook, and how</Link>\n* <Link to="/conceptual/life-cycle-session-user" platform="cordova">Smartlook Life Cycle in the App, Session, User</Link>\n* <Link to="/conceptual/handling-sensitive-data" platform="cordova">Handling Sensitive Data</Link>\n* <Link to="/conceptual/screen-recording-quality" platform="cordova">Screen Recording Quality</Link>\n* Tracking <Link to="/conceptual/event-tracking" platform="cordova">Events</Link> and <Link to="/conceptual/recording-navigation" platform="cordova">Navigation</Link> in the App\n* <Link to="/conceptual/integrating-with-other-tools" platform="cordova">Smartlook integration with other tools</Link>\n'))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/sdk-installation/cordova.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-sdk-installation-cordova-mdx-15ea67824c3bba3652d4.js.map