(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{MTWo:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n("Fcif"),i=n("+I+c"),a=(n("mXGw"),n("/FXl")),r=n("TjRS"),s=n("+8zC"),c=(n("NRsk"),n("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/sdk-installation/ios.mdx"}});var l={_frontmatter:c},p=r.a;function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)(p,Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"ios-sdk-installation"},"iOS SDK Installation"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"In projects that use ",Object(a.b)("strong",{parentName:"li"},"Cocoapods"),", Smartlook can be installed by adding the respective pod into ",Object(a.b)("inlineCode",{parentName:"li"},"Podfile"),":")),Object(a.b)(s.b,{snippets:{ruby:"\npod Smartlook\n"},mdxType:"Code"}),Object(a.b)("p",null,"Smartlook can be also added directly to the app project by ",Object(a.b)("strong",{parentName:"p"},"downloading")," the latest ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://sdk.smartlook.com/ios/smartlook-ios-sdk-1.2.5.59.zip"}),"Smartlook iOS SDK"),", unzipping the file and adding ",Object(a.b)("inlineCode",{parentName:"p"},"Smartlook.framework")," to the Xcode project."),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"To ",Object(a.b)("strong",{parentName:"li"},"setup")," and ",Object(a.b)("strong",{parentName:"li"},"start")," recording with Smartlook, Smartlook must be imported and configured e.g., in ",Object(a.b)("inlineCode",{parentName:"li"},"AppDelegate")," and its ",Object(a.b)("inlineCode",{parentName:"li"},"didFinishLaunching")," method:")),Object(a.b)(s.b,{snippets:{swift:'\nimport Smartlook\n...\nfunc application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n\n    Smartlook.setup(key: "YOUR_API_KEY")\n    Smartlook.startRecording()\n      ',"objective-c":'\n#import <Smartlook/Smartlook.h>\n...\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    \n    [Smartlook setupWithKey: @"YOUR_API_KEY"];\n    [Smartlook startRecording];\n      '},mdxType:"Code"}),Object(a.b)(s.h,{kind:"important",mdxType:"TextBlock"},'\nTo setup Smartlook, the **unique project API key **is needed. It can be found in the mobile project settings in <Link to="https://app.smartlook.com/settings/projects">Smartlook Dashboard</Link>.\n'),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Smartlook now starts recording the app. The recordings will appear in the ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://app.smartlook.com/"}),"Smartlook player")," shortly.  ")),Object(a.b)(s.h,{kind:"important",mdxType:"TextBlock"},'\nSDK will upload sessions **only on WiFi**. When uploading on mobile connections is requested, too, it must be enabled in the project settings in the dashboard. More details about the recording process can be found in the <Link to="/conceptual/when-the-recordings-appear-in-dashboard">Conceptual documentation</Link>.\n'),Object(a.b)("h1",{id:"supported-versions"},"Supported versions"),Object(a.b)("p",null,"Current ",Object(a.b)("strong",{parentName:"p"},"minimal")," supported iOS version is ",Object(a.b)("strong",{parentName:"p"},"10"),"."),Object(a.b)("h1",{id:"further-steps"},"Further Steps"),Object(a.b)(s.h,{mdxType:"TextBlock"},'\nAll methods of Smartlook SDK are documented in the <Link to="/api_reference" platform="ios">Smartlook API reference</Link>.\n\n\nSome **advanced use-case** and **troubleshooting** case-studies are described in the Cookbooks section of this documentation.\n\n\n**Issues and bugs** can be reported in the [Smartlook issue tracker](https://github.com/smartlook/smartlook-mobile-issue-tracker).\n\n\n**Concepts** undelying the Smartlook functionality are descibed in the Conceptual documentation:\n* <Link to="/conceptual/setup-and-start-recording" platform="ios">Setup & Start Recording</Link>\n* <Link to="/conceptual/when-the-recordings-appear-in-dashboard" platform="ios">How are the data recorded and uploaded to be visible in player and dashboard</Link>\n* <Link to="/conceptual/life-cycle-session-user" platform="ios">Smartlook Life Cycle in the App, Session, User</Link>\n* <Link to="/conceptual/what-and-how-is-recorded" platform="ios">What is recorded be Smartlook, and how</Link>\n* <Link to="/conceptual/life-cycle-session-user" platform="ios">Smartlook Life Cycle in the App, Session, User</Link>\n* <Link to="/conceptual/handling-sensitive-data" platform="ios">Handling Sensitive Data</Link>\n* <Link to="/conceptual/screen-recording-quality" platform="ios">Screen Recording Quality</Link>\n* Tracking <Link to="/conceptual/event-tracking" platform="ios">Events</Link> and <Link to="/conceptual/recording-navigation" platform="ios">Navigation</Link> in the App\n* <Link to="/conceptual/integrating-with-other-tools" platform="ios">Smartlook integration with other tools</Link>\n'))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/sdk-installation/ios.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-sdk-installation-ios-mdx-a4ce759db9daecd0275d.js.map