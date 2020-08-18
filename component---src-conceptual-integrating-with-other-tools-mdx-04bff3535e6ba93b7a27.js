(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{LhPt:function(t,o,e){"use strict";e.r(o),e.d(o,"_frontmatter",(function(){return l})),e.d(o,"default",(function(){return c}));var r=e("Fcif"),a=e("+I+c"),n=(e("mXGw"),e("/FXl")),s=e("TjRS"),i=e("+8zC"),l=(e("NRsk"),e("aD51"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/conceptual/integrating-with-other-tools.mdx"}});var d={_frontmatter:l},h=s.a;function c(t){var o=t.components,e=Object(a.a)(t,["components"]);return Object(n.b)(h,Object(r.a)({},d,e,{components:o,mdxType:"MDXLayout"}),Object(n.b)(i.g,{kind:"title",mdxType:"TextBlock"},"Integrating with Other Tools"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"This section shows how to integrate Smartlook with other analytical tools.")),Object(n.b)("p",null,"It is a typical use-case that an application uses several specialized 3rd party libraries to cover various aspects of the analytics, and it is an advantage when it is possible to integrate these tools together."),Object(n.b)(i.g,{mdxType:"TextBlock"},'\nIn order to integrate Smartlook recordings with other tools, Smartlook publishes two URLs that point to the currently recorded session, and the current user in Smartlook dashboard. Smartlook also notifies the hosting application whenever one of the integration URLs changes. The notification mechanism heavily depends on the platform, technical details are provided in <Link to="/api_reference#integrations">the API Reference</Link>.\n'),Object(n.b)(i.g,{kind:"important",mdxType:"TextBlock"},"\nThe integration URLs are accessible only to the authorized Smartlook users.\n"),Object(n.b)("p",null,"The integration is then made by sending these URLs to the other tools, e.g., as custom parameters of their own objects."),Object(n.b)(i.g,{kind:"note",mdxType:"TextBlock"},"Some practical examples of integrating Smartlook into some popular 3rd party tools are provided in the **Cookbooks** section of the documentation."),Object(n.b)("h1",{id:"current-session-url"},"Current Session URL"),Object(n.b)("p",null,"The Smartlook method that publishes dashboard session URL takes a boolean flag if the current timestamp should be included in the URL. With this parameter, Smartlook begins playback of the session at the indicated moment. This comes in handy when the URL is attached to a particular event."),Object(n.b)(i.c,{kind:"example",snippets:{android:{java:'\nString dashboardSessionURL = Smartlook.getDashboardSessionUrl();\nAnotherTool.setParameter("SmartlookURL", dashboardSessionURL);\n      ',kotlin:'\nval dashboardSessionURL = Smartlook.getDashboardSessionUrl()\nAnotherTool.setParamater("SmartlookURL", dashboardSessionURL)\n      '},ios:{swift:'\nlet currentSmartlookSessionURL = Smartlook.getDashboardSessionURL(withCurrentTimestamp: true)\nanotherToolEvent.setParameter("SmartlookURL", currentSmartlookSessionURL)\n      ',"objective-c":'\nNSURL *currentSmartlookSessionURL = [Smartlook getDashboardSessionURLWithCurrentTimestamp:YES];\n[anotherToolEvent setParamValue:currentSmartlookSessionURL forKey:@"SmartlookURL"];\n      '},react:{js:"\nREACT NATIVE - javascript\n"},unity:{csharp:"\nUNITY - C#\n"},unreal:{csharp:"\nUNREAL - C#\n      "},cocos:{java:"\nCOCOS - java\n      ",kotlin:"\nCOCOS - kotlin\n      "},cordova:{javascript:'\n Smartlook.getDashboardSessionUrl(\n  function(dashboardSessionUrl) {\n    AnotherTool.setProperty("SmartlookURL", dashboardSessionUrl);\n  }\n)\n    '},ionic:{typescrit:'\nsmartlook.getDashboardSessionUrl().then((dashboardSessionUrl) => {\n  AnotherTool.setProperty("SmartlookURL", dashboardSessionUrl)\n});\n      '},flutter:{dart:"\nFLUTTER - dart\n   "},xamarin:{csharp:"\nXAMARIN - C#\n      "}},mdxType:"CodeBlock"}),Object(n.b)(i.d,{to:"/api_reference#dashboard-session-url",mdxType:"Link"},"Session URL API Reference"),".",Object(n.b)("h1",{id:"current-visitor-url"},"Current Visitor URL"),Object(n.b)("p",null,"Visitor URL points to a Dashboard page that wrapps the visitor info (their sessions &c.). This URL may change during the application run are result of user identification via Smartlook SDK."),Object(n.b)(i.c,{kind:"example",snippets:{android:{java:'\nString dashboardVisitorURL = Smartlook.getDashboardVisitorUrl();\nAnotherTool.setUserProperty("SmartlookURL", dashboardVisitorUrl);\n      ',kotlin:'\nval dashboardVisitorURL = Smartlook.getDashboardVisitorUrl()\nAnotherTool.setUserProperty("SmartlookURL", dashboardVisitorUrl)\n      '},ios:{swift:'\nlet currentSmartlookVisitorURL = Smartlook.getDashboardVisitorURL()\nAnotherTool.setUserProperty("SmartlookURL", currentSmartlookVisitorURL)\n      ',"objective-c":'\nNSURL *currentSmartlookVisitorURL = [Smartlook getDashboardVisitorURL];\n[AnotherTool setUserParamValue:currentSmartlookVisitorURL forKey:@"SmartlookURL"];\n      '},react:{js:"\nREACT NATIVE - javascript\n"},unity:{csharp:'\nstring dashboardVisitorURL = SmartlookUnity.Smartlook.GetDashboardVisitorUrl();\nAnotherTool.setUserProperty("SmartlookURL", dashboardVisitorUrl);\n'},unreal:{csharp:"\nUNREAL - C#\n      "},cocos:{java:'\nString dashboardVisitorURL = Smartlook.getDashboardVisitorUrl();\nAnotherTool.setUserProperty("SmartlookURL", dashboardVisitorUrl);\n      ',kotlin:'\nval dashboardVisitorURL = Smartlook.getDashboardVisitorUrl()\nAnotherTool.setUserProperty("SmartlookURL", dashboardVisitorUrl)\n      '},cordova:{javascript:'\n Smartlook.getDashboardVisitorUrl(\n  function(dashboardVisitorUrl) {\n    AnotherTool.setUserProperty("SmartlookURL", dashboardVisitorUrl);\n  }\n)\n    '},ionic:{typescrit:'\nsmartlook.getDashboardVisitorUrl().then((dashboardVisitorUrl) => {\n  AnotherTool.setUserProperty("SmartlookURL", dashboardVisitorUrl)\n});\n      '},flutter:{dart:"\nFLUTTER - dart\n   "},xamarin:{csharp:"\nXAMARIN - C#\n      "}},mdxType:"CodeBlock"}),Object(n.b)(i.d,{to:"/api_reference#dashboard-visitor-url",mdxType:"Link"},"Visitor URL API Reference"),".")}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/conceptual/integrating-with-other-tools.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-conceptual-integrating-with-other-tools-mdx-04bff3535e6ba93b7a27.js.map