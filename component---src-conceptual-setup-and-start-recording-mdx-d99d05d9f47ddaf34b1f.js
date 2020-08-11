(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"3YZ9":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return d}));var o=t("Fcif"),a=t("+I+c"),i=(t("mXGw"),t("/FXl")),r=t("TjRS"),s=t("+8zC"),c=(t("NRsk"),t("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/conceptual/setup-and-start-recording.mdx"}});var p={_frontmatter:c},l=r.a;function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)(l,Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)(s.g,{kind:"title",mdxType:"TextBlock"},"Setup & Start Recording"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"This section deals with how to setup Smartlook SDK and start recording your app.")),Object(i.b)("p",null,"To start recording, just put the following code into your application. Once you run your app on a device or in a simulator, recording will appear ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://app.smartlook.com/settings/projects"}),"in your dashboard"),"."),Object(i.b)(s.g,{kind:"important",mdxType:"TextBlock"},"Some Android simulators are not very reliable when running low-level libraries like Smartlook. Testing on real devices is preferred when debugging an app that utilizes Smartlook."),Object(i.b)("p",null,"In order to function properly, the setup should happen as soon as possible in the app life cycle:"),Object(i.b)(s.c,{kind:"example",snippets:{android:{java:"\nimport android.app.Application;\n\npublic class MyCustomApplication extends Application {\n    @Override\n    public void onCreate() {\n        super.onCreate();\n        Smartlook.setupAndStartRecording(YOUR_API_KEY);\n    }\n}\n      ",kotlin:"\nimport android.app.Application;\n\nclass MyCustomApplication : Application() {\n    override fun onCreate() {\n        super.onCreate()\n        Smartlook.setupAndStartRecording(YOUR_API_KEY)\n    }\n}\n      "},cordova:{javascript:'\nif(document.readyState === "complete") {\n  document.addEventListener("deviceready", onDeviceReady, false);\n}\n\nfunction onDeviceReady() {\n    Smartlook.setupAndStartRecording({smartlookAPIKey: "YOUR_API_KEY"});\n}\n      '},ionic:{typescript:'\nthis.platform.ready().then(() => {\n    this.smartlook.setupAndStartRecording(new SmartlookSetupConfig("YOUR API KEY"));\n}\n      '},ios:{swift:'\ninclude Smartlook\n \n...\n \nfunc application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n \n   Smartlook.setup(key: "YOUR_API_KEY")\n   Smartlook.startRecording()\n}\n      ',"objective-c":'\n#include Smartlook\n \n...\n \nfunc application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n \n   Smartlook.setup(key: "YOUR_API_KEY")\n   Smartlook.startRecording()\n}      '},react:{js:'\n// Smartlook initialization\nvar Smartlook = require("smartlook-react-native-wrapper"); \nSmartlook.setupAndStartRecording("API_KEY");\n      '},xamarin:{csharp:"\nXamarin C#\n      "},unity:{csharp:"\nUnity C#\n      "},unreal:{csharp:"\nUnreal C#\n      "},cocos:{cpp:"\nCocos C++\n      ",lua:"\nCocos lua\n   "},flutter:{dart:"\n      Smartlook.setupAndStartRecording('YOUR_API_KEY');\n   "}},mdxType:"CodeBlock"}),Object(i.b)("p",null,"This is basically all you need to record your sessions. All other events in the app life cycle are handled by Smartlook automatically."),Object(i.b)(s.g,{kind:"important",mdxType:"TextBlock"},"It may take several minutes before the recordings appear in the Dashboard. In the default setup, recordings are not uploaded when the device is on a mobile network. In order to see the recordings immediately, make sure the device is on WiFi, or that mobile uploads are enabled in [your project dashboard](https://app.smartlook.com/settings/projects). The recording is not streamed, it is uploaded in chunks and then processed on the server. To understand when your recordings will be availabe in the project dashboard, see ",Object(i.b)(s.d,{to:"/conceptual/when-i-will-see-the-recordings-in-dashboard",mdxType:"Link"},"this document"),"."),Object(i.b)(s.g,{kind:"note",visibleOn:"ios",mdxType:"TextBlock"},'\n  When debugging your app with Smartlook, you will encounter a Main Thread Checker warning which might be accompanied by a short app freeze during the app start. The freeze does not happen in production builds. For details, see this <Link to="/cookbooks/ios-main-thread-check-warning">technical note</Link>.\n'),Object(i.b)("h2",{id:"setup-options"},"Setup Options"),Object(i.b)("p",null,"Smartlook recording can be customized by several parameters. Some of the recording customization options can be set by dedicated methods, some others can be also set as startup options."),Object(i.b)(s.g,{kind:"important",mdxType:"TextBlock"},'\nNot all options are available on all platforms. For a comprehensive list of all the setup options and related details, consult our <Link to="/api_reference/#setup-configuration">API reference</Link>.\n'))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/conceptual/setup-and-start-recording.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-conceptual-setup-and-start-recording-mdx-d99d05d9f47ddaf34b1f.js.map