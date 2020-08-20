(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"8eMb":function(n,r,e){"use strict";e.r(r),e.d(r,"_frontmatter",(function(){return d})),e.d(r,"default",(function(){return c}));var o=e("Fcif"),t=e("+I+c"),i=(e("mXGw"),e("/FXl")),s=e("TjRS"),a=e("+8zC"),d=(e("aD51"),{});void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/integrations/heap-integration.mdx"}});var l={_frontmatter:d},p=s.a;function c(n){var r=n.components,e=Object(t.a)(n,["components"]);return Object(i.b)(p,Object(o.a)({},l,e,{components:r,mdxType:"MDXLayout"}),Object(i.b)(a.h,{kind:"title",mdxType:"TextBlock"},"Heap integration"),Object(i.b)("h2",{id:"manual-integration"},"Manual integration"),Object(i.b)(a.h,{invisibleOn:"ios",mdxType:"TextBlock"},"Smartlook can be easily integrated into Heap using `IntegrationListener`:"),Object(i.b)(a.h,{visibleOn:"ios",mdxType:"TextBlock"},"Smartlook can be easily integrated into Heap using `Notifications`:"),Object(i.b)(a.c,{kind:"example",snippets:{android:{java:'\nSmartlook.registerIntegrationListener(new IntegrationListener() {\n    @Override\n    public void onSessionReady(@NotNull String dashboardSessionUrl) {\n        Map<String, String> props = new HashMap<>();\n        props.put("Session url", dashboardSessionUrl);\n\n        Heap.track("Smartlook session URL", props);\n    }\n\n    @Override\n    public void onVisitorReady(@NotNull String dashboardVisitorUrl) {\n        Map<String, String> props = new HashMap<>();\n        props.put("Smartlook visitor URL", dashboardVisitorUrl);\n\n        Heap.addUserProperties(props);\n    }\n});\n      ',kotlin:'\nSmartlook.registerIntegrationListener(object : IntegrationListener {\n    override fun onSessionReady(dashboardSessionUrl: String) {\n        val props = HashMap<String, String>();\n        props.put("Session url", dashboardSessionUrl)\n\n        Heap.track("Smartlook session URL", props)\n    }\n\n    override fun onVisitorReady(dashboardVisitorUrl: String) {\n        val props = new HashMap<String,String>()\n        props.put("Smartlook visitor URL", dashboardVisitorUrl)\n\n        Heap.addUserProperties(props)\n    }\n})\n      '},cocos:{java:'\nSmartlook.registerIntegrationListener(new IntegrationListener() {\n    @Override\n    public void onSessionReady(@NotNull String dashboardSessionUrl) {\n        Map<String, String> props = new HashMap<>();\n        props.put("Session url", dashboardSessionUrl);\n\n        Heap.track("Smartlook session URL", props);\n    }\n\n    @Override\n    public void onVisitorReady(@NotNull String dashboardVisitorUrl) {\n        Map<String, String> props = new HashMap<>();\n        props.put("Smartlook visitor URL", dashboardVisitorUrl);\n\n        Heap.addUserProperties(props);\n    }\n});\n      ',kotlin:'\nSmartlook.registerIntegrationListener(object : IntegrationListener {\n    override fun onSessionReady(dashboardSessionUrl: String) {\n        val props = HashMap<String, String>();\n        props.put("Session url", dashboardSessionUrl)\n\n        Heap.track("Smartlook session URL", props)\n    }\n\n    override fun onVisitorReady(dashboardVisitorUrl: String) {\n        val props = new HashMap<String,String>()\n        props.put("Smartlook visitor URL", dashboardVisitorUrl)\n\n        Heap.addUserProperties(props)\n    }\n})\n      '},cordova:{javascript:'\nSmartlook.registerIntegrationListener({\n  onSessionReady: function (dashboardSessionUrl) { \n    heap.track(\n        "Smartlook session URL",\n        {"session_url": dashboardSessionUrl});\n  },\n  onVisitorReady: function (dashboardVisitorUrl) { \n    heap.addUserProperties({\'smartlook_visitor_url\': dashboardVisitorUrl});\n  }\n});\n      '},ionic:{typescript:'\nsmartlook.registerIntegrationListener(new SmartlookIntegrationListener(\n  function (dashboardSessionUrl) { \n    heap.track(\n        "Smartlook session URL",\n        {"session_url": dashboardSessionUrl})\n  },\n  function (dashboardVisitorUrl) { \n    heap.addUserProperties({\'smartlook_visitor_url\': dashboardVisitorUrl})\n  }\n));\n      '},ios:{swift:'\nNotificationCenter.default.addObserver(forName: Smartlook.dashboardSessionURLChanged, object: nil, queue: nil) { (note) in\n    if let currentSessionUrl = Smartlook.getDashboardSessionURL(withCurrentTimestamp: false) {\n        Heap.track("Smartlook session URL", withProperties: [ "session_url" : currentSessionUrl.absoluteString ])\n    }\n};\n\nNotificationCenter.default.addObserver(forName: Smartlook.dashboardVisitorURLChanged, object: nil, queue: nil) { (note) in\n    if let currentVisitorUrl = Smartlook.getDashboardVisitorURL() {\n        Heap.addUserProperties([ "smartlook_visitor_url" : currentVisitorUrl.absoluteString ])\n    }\n};\n      ',"objective-c":'\n[[NSNotificationCenter defaultCenter] addObserverForName:SLDashboardSessionURLChangedNotification object:nil queue:nil usingBlock:^(NSNotification * _Nonnull note) {\n    NSURL *currentSessionURL = [Smartlook getDashboardSessionURLWithCurrentTimestamp:NO];\n    if (currentSessionURL != nil) {\n        [Heap track:@"Smartlook session URL" withProperties:@{ @"session_url" : currentSessionURL.absoluteString}];\n    }\n}];\n\n[[NSNotificationCenter defaultCenter] addObserverForName:SLDashboardVisitorURLChangedNotification object:nil queue:nil usingBlock:^(NSNotification * _Nonnull note) {\n    NSURL *currentVisitorURL = [Smartlook getDashboardVisitorURL];\n    if (currentVisitorURL != nil) {\n        [Heap addUserProperties:@{ @"smartlook_visitor_url" : currentVisitorURL.absoluteString}];\n    }\n}];\n      '},flutter:{dart:"\nclass CustomIntegrationListener implements IntegrationListener {\n  void onSessionReady(String dashboardSessionUrl) {\n      heap.track(\n      identity: _identity,\n      event: 'dashboardSessionUrl', \n      properties: {\n        'dashboardSessionUrl': dashboardSessionUrl\n      },\n    );\n  }\n\n\n  void onVisitorReady(String dashboardVisitorUrl) {\n    heap.userProperties(\n      identity: _identity,\n      properties: {\n        'dashboardVisitorUrl': dashboardVisitorUrl\n      },\n    );\n  }\n}\n\n\nSmartlook.registerIntegrationListener(new CustomIntegrationListener());\n      "},unity:{csharp:"\npublic class IntegrationListener : SmartlookUnity.IntegrationListener\n{\n    public override void onSessionReady(string dashboardSessionUrl)\n    {\n        //Not available yet\n    }\n\n\n    public override void onVisitorReady(string dashboardVisitorUrl)\n    {\n        //Not available yet\n    }\n}\n\n\nSmartlookUnity.Smartlook.RegisterIntegrationListener(new IntegrationListener());\n"},react:{javascript:'\nSmartlook.registerIntegrationListener({\n  onSessionReady: function (dashboardSessionUrl) { \n    heap.track(\n        "Smartlook session URL",\n        {"session_url": dashboardSessionUrl});\n);\n  },\n  onVisitorReady: function (dashboardVisitorUrl) { \n    heap.addUserProperties({\'smartlook_visitor_url\': dashboardVisitorUrl});\n  }\n});\n      '}},mdxType:"CodeBlock"}),Object(i.b)(a.h,{kind:"note",mdxType:"TextBlock"},"\nFull Heap API documentation can be found on the [official website](https://developers.heap.io/reference).\n"),Object(i.b)("h2",{id:"automatic-integration"},"Automatic integration"),Object(i.b)("p",null,"Automatic Heap integration coming soon."))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/integrations/heap-integration.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-integrations-heap-integration-mdx-dea2676001ab7075cb12.js.map