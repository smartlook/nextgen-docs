(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{LhPt:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return l})),o.d(t,"default",(function(){return d}));var r=o("Fcif"),a=o("+I+c"),n=(o("mXGw"),o("/FXl")),i=o("TjRS"),s=o("+8zC"),l=(o("NRsk"),o("aD51"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/conceptual/integrating-with-other-tools.mdx"}});var c={_frontmatter:l},h=i.a;function d(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(n.b)(h,Object(r.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s.g,{kind:"title",mdxType:"TextBlock"},"Integrating with Other Tools"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"This section shows how to integrate Smartlook with other analytical tools.")),Object(n.b)("p",null,"It is a typical use-case that an app uses several specialized 3rd party libraries to cover various aspects of the analytics, and it is an advantage when it is possible to integrate these tools together."),Object(n.b)(s.g,{mdxType:"TextBlock"},'\nIn order to integrate Smartlook recordings with other tools, Smartlook publishes two URLs that point to the currently recorded session, and the current user in Smartlook dashboard. Smartlook also notifies the hosting app whenever one of the integration URLs changes. The notification mechanism heavily depends on the platform (see <Link to="/api_reference#integrations">API Reference</Link>).\n'),Object(n.b)(s.g,{kind:"important",mdxType:"TextBlock"},"\nThe integration URLs are accessible only to the authorized Smartlook users.\n"),Object(n.b)("p",null,"The integration is then made by sending these URLs to the other tools, e.g., as custom parameters of their own objects."),Object(n.b)("h1",{id:"current-session-url"},"Current Session URL"),Object(n.b)("p",null,"The Smartlook method that publishes dashboard session URL takes a boolean flag if the current timestamp should be included in the URL. With this parameter, Smartlook begins playback of the session at the indicated moment. This comes in handy when the URL is attached to a particular event."),Object(n.b)(s.c,{kind:"example",snippets:{ios:{swift:'\nlet currentSmartlookSessionURL = Smartlook.getDashboardSessionURL(withCurrentTimestamp: true)\nanotherToolEvent.setParameter("SmartlookURL", currentSmartlookSessionURL)\n',"objective-c":'\nNSURL *currentSmartlookSessionURL = [Smartlook getDashboardSessionURLWithCurrentTimestamp:YES];\n[anotherToolEvent setParamValue:currentSmartlookSessionURL forKey:@"SmartlookURL"];\n'}},mdxType:"CodeBlock"}),Object(n.b)(s.d,{to:"/api_reference#dashboard-session-url",mdxType:"Link"},"Session URL API Reference"),".",Object(n.b)("h1",{id:"current-visitor-url"},"Current Visitor URL"),Object(n.b)("p",null,"Visitor URL points to a Dashboard page that wrapps the visitor info (their sessions &c.). This URL may change during the app run are result of user identification via Smartlook SDK."),Object(n.b)(s.c,{kind:"example",snippets:{android:{java:'\nString dashboardVisitorURL = Smartlook.getDashboardVisitorUrl();\nAnotherTool.setUserProperty("SmartlookURL", dashboardVisitorUrl);\n      ',kotlin:'\nval dashboardVisitorURL = Smartlook.getDashboardVisitorUrl()\nAnotherTool.setUserProperty("SmartlookURL", dashboardVisitorUrl)\n      '},cordova:{javascript:'\n Smartlook.getDashboardVisitorUrl(\n  function(dashboardVisitorUrl) {\n    AnotherTool.setUserProperty("SmartlookURL", dashboardVisitorUrl);\n  }\n)\n      '},ionic:{typescript:'\nsmartlook.getDashboardVisitorUrl().then((dashboardVisitorUrl) => {\n  AnotherTool.setUserProperty("SmartlookURL", dashboardVisitorUrl)\n});\n      '},ios:{swift:'\nlet currentSmartlookVisitorURL = Smartlook.getDashboardVisitorURL()\nAnotherTool.setUserProperty("SmartlookURL", currentSmartlookVisitorURL)\n',"objective-c":'\nNSURL *currentSmartlookVisitorURL = [Smartlook getDashboardVisitorURL];\n[AnotherTool setUserParamValue:currentSmartlookVisitorURL forKey:@"SmartlookURL"];\n'}},mdxType:"CodeBlock"}),Object(n.b)(s.d,{to:"/api_reference#dashboard-visitor-url",mdxType:"Link"},"Visitor URL API Reference"),".")}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/conceptual/integrating-with-other-tools.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-conceptual-integrating-with-other-tools-mdx-2c38d9cd59e39402fb14.js.map