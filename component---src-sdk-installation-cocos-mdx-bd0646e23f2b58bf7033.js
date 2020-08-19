(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{vMzA:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return d}));var o=n("Fcif"),i=n("+I+c"),a=(n("mXGw"),n("/FXl")),r=n("TjRS"),c=n("+8zC"),s=(n("NRsk"),n("aD51"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/sdk-installation/cocos.mdx"}});var l={_frontmatter:s},p=r.a;function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)(p,Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"cocos-sdk-installation"},"Cocos SDK Installation"),Object(a.b)("h2",{id:"android"},"Android"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Add Smartlook in your ",Object(a.b)("strong",{parentName:"li"},"app’s")," ",Object(a.b)("inlineCode",{parentName:"li"},"build.gradle"),":")),Object(a.b)(c.b,{snippets:{gradle:"\nimplementation('com.smartlook.recording:app:1.5.2-cocos')\n"},mdxType:"Code"}),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Add Smartlook Maven repository in your ",Object(a.b)("strong",{parentName:"li"},"projects")," ",Object(a.b)("inlineCode",{parentName:"li"},"build.gradle"),":")),Object(a.b)(c.b,{snippets:{gradle:'\nallprojects {\n  repositories {\n    maven {\n      url "https://sdk.smartlook.com/android/release"\n    }\n  }\n}\n'},mdxType:"Code"}),Object(a.b)("p",null,"3.Setup and start Smartlook in ",Object(a.b)("strong",{parentName:"p"},"onCreate()")," of your ",Object(a.b)("strong",{parentName:"p"},"Application")," class:"),Object(a.b)(c.b,{snippets:{java:"\npublic class AppActivity extends Cocos2dxActivity {\n    @Override\n    public void onCreate() {\n        ...\n        // DO OTHER INITIALIZATION BELOW\n        Smartlook.setupAndStartRecording(YOUR_API_KEY);\n    }\n}\n      ",kotlin:"\nclass AppActivity : Cocos2dxActivity() {\n    override fun onCreate() {\n        ...\n        // DO OTHER INITIALIZATION BELOW\n        Smartlook.setupAndStartRecording(YOUR_API_KEY)\n    }\n}\n      "},mdxType:"Code"}),Object(a.b)(c.g,{kind:"important",mdxType:"TextBlock"},'\nTo setup Smartlook, the **unique project API key **is needed. It can be found in the mobile project settings in <Link to="https://app.smartlook.com/settings/projects">Smartlook Dashboard</Link>.\n'),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Smartlook now starts recording the app. The recordings will appear in the ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://app.smartlook.com/"}),"Smartlook player")," shortly.  ")),Object(a.b)(c.g,{kind:"important",mdxType:"TextBlock"},'\nSDK will upload sessions **only on WiFi**. When uploading on mobile connections is requested, it must be enabled in the project settings in the dashboard. More details about the recording process can be found in the <Link to="/conceptual/when-the-recordings-appear-in-dashboard">Conceptual documentation</Link>.\n'),Object(a.b)("h2",{id:"ios"},"iOS"),Object(a.b)("p",null,"Coming soon"),Object(a.b)("h1",{id:"supported-versions"},"Supported versions"),Object(a.b)("p",null,"Currently ",Object(a.b)("strong",{parentName:"p"},"minimal")," supported Android version is ",Object(a.b)("strong",{parentName:"p"},"Jelly Bean (API 18)"),", however ",Object(a.b)("strong",{parentName:"p"},"video is recorded only for API 24+"),", analytics events and other functionality is not limited."),Object(a.b)("h1",{id:"further-steps"},"Further Steps"),Object(a.b)(c.g,{mdxType:"TextBlock"},'\nAll Smartlook SDK methods are documented in the <Link to="/api_reference" platform="cocos">Smartlook API reference</Link>.\n\n\nSome **advanced use-case** and **troubleshooting** case-studies are described in the Cookbooks section of this documentation.\n\n\n**Issues and bugs** can be reported in the <Link to="https://github.com/smartlook/smartlook-mobile-issue-tracker">issue tracker</Link>.\n\n\n**Concepts** undelying the Smartlook functionality are descibed in the Conceptual documentation:\n* <Link to="/conceptual/setup-and-start-recording" platform="cocos">Setup & Start Recording</Link>\n* <Link to="/conceptual/when-the-recordings-appear-in-dashboard" platform="cocos">How are the data recorded and uploaded to be visible in player and dashboard</Link>\n* <Link to="/conceptual/life-cycle-session-user" platform="cocos">Smartlook Life Cycle in the App, Session, User</Link>\n* <Link to="/conceptual/what-and-how-is-recorded" platform="cocos">What is recorded be Smartlook, and how</Link>\n* <Link to="/conceptual/life-cycle-session-user" platform="cocos">Smartlook Life Cycle in the App, Session, User</Link>\n* <Link to="/conceptual/handling-sensitive-data" platform="cocos">Handling Sensitive Data</Link>\n* <Link to="/conceptual/screen-recording-quality" platform="cocos">Screen Recording Quality</Link>\n* Tracking <Link to="/conceptual/event-tracking" platform="cocos">Events</Link> and <Link to="/conceptual/recording-navigation" platform="android">Navigation</Link> in the App\n* <Link to="/conceptual/integrating-with-other-tools" platform="cocos">Smartlook integration with other tools</Link>\n'))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/sdk-installation/cocos.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-sdk-installation-cocos-mdx-bd0646e23f2b58bf7033.js.map