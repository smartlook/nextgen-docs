(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{g1Xh:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return b}));var i=n("Fcif"),o=n("+I+c"),a=(n("mXGw"),n("/FXl")),s=n("TjRS"),r=n("+8zC"),l=(n("NRsk"),n("aD51"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/conceptual/handling-sensitive-data.mdx"}});var c={_frontmatter:l},d=s.a;function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(d,Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(r.g,{kind:"title",mdxType:"TextBlock"},"Handling Sensitive Data"),Object(a.b)("p",null,"The goal of analytic is to understand the user journey in the app and their interaction with it to improve the user experience. To gather the necessary data, Smartlook follows user actions and records what users see on the screen. This indeed represents a challenge for protecting user privacy - out of decency, the law requirements, and also because the data itself is rarely needed for analytical purposes. "),Object(a.b)("p",null,"What analytics uses is the metadata."),Object(a.b)("p",null,"There are several ways how Smartlook protects user privacy when gathering the information it needs for its purposes. Smartlook obfuscates out of the box the native visual elements that typically contain private information. The data are replaced by neutral colour boxes during the recording process, they never make it to our systems. Moreover, Smartlook offers a set of methods that enable app developers to avoid recording unnecessary information."),Object(a.b)("p",null,"Also, Smartlook provides an open-source ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/smartlook/ios-consent-sdk"}),"Consent SDK for iOS")," and ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/smartlook/android-consent-sdk"}),"Consent SDK for Android"),", that allows app authors to get user consent to gather the data for analytical purposes."),Object(a.b)("h1",{id:"handling-ui-with-sensitive-data"},"Handling UI with Sensitive Data"),Object(a.b)("p",null,"Potentially any UI element may contain sensitive information that should not be recorded. On the other hand, some elements that are not recorded by default may contain harmless data vital for analytics. Smartlook offers a comprehensive set of methods to handle various scenarios."),Object(a.b)(r.g,{kind:"note",mdxType:"TextBlock"},"\nTerminology: in Smartlook, disabling UI element recording is done by blacklisting it. Enabling UI element recording is done by whitelisting it. Blacklisted UI elements are also called sensitive.\n"),Object(a.b)("p",null,"Most UI elements are whitelisted by default. Some types of UI elements (text edits, web views) are blacklisted by default."),Object(a.b)("p",null,"There are three levels of granularity established for handling the sensitive data recording:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"individual UI elements recording"),Object(a.b)("li",{parentName:"ul"},"UI element types recording"),Object(a.b)("li",{parentName:"ul"},"the whole screen recording ")),Object(a.b)(r.g,{kind:"important",mdxType:"TextBlock"},"\nIn order to provide robust user privacy protection by default, some UI elements, namely text inputs and web views (that typically contain sensitive user data) are not recorded in the default Smartlook setup. The app author must take active steps to whitelist these elements in order to record their content.\n"),Object(a.b)("h2",{id:"handling-sensitivity-of-individual-ui-elements"},"Handling Sensitivity of Individual UI Elements"),Object(a.b)("p",null,"In order not to record a particular view, like here in an example with an image view that shows a portrait image of the user, use a variable that holds a reference to the view with one of the following approaches to black list it, e.g., "),Object(a.b)(r.c,{kind:"example",snippets:{ios:{swift:"\nSmartlook.registerBlacklisted(object: self.portraitImageView)\nself.portraitImageView.slSensitive = true\n","objective-c":"\n[Smartlook registerBlacklistedObject: self.portraitImageView];\nself.portraitImageView.slSensitive = YES;\n"}},mdxType:"CodeBlock"}),Object(a.b)("p",null,"When, on the other hand, an otherwise blacklisted view (in our example a web view) should be recorded, follow this example code:"),Object(a.b)(r.c,{kind:"example",snippets:{ios:{swift:"\nSmartlook.unregisterBlacklisted(object: self.introWebView)\nself.introWebView.slSensitive = false\n","objective-c":"\n[Smartlook unregisterBlacklistedObject: self.self.introWebView];\nself.self.introWebView.slSensitive = NO;\n"}},mdxType:"CodeBlock"}),Object(a.b)(r.g,{kind:"note",visibleOn:"ios",mdxType:"TextBlock"},"\nNote also, that the `slSensitive` property of `UIView` can be set in Xcode Interface Builder as well, i.e., it is not necessary creating an `@IBOutlet` for a view that is designed in the Interface Builder just in order to set its sensitivity.\n"),Object(a.b)(r.g,{mdxType:"TextBlock"},'\nMore on the topic in <Link to="/api_reference?platform=ios#sensitive-data-hiding">API reference</Link>.\n'),Object(a.b)("h2",{id:"handling-sensitivity-of-classes"},"Handling Sensitivity of Classes"),Object(a.b)(r.g,{kind:"important",mdxType:"TextBlock"},'\nThis functionality is available only on some platforms. Please consult the <Link to="/api_reference?platform=ios#sensitive-data-hiding">API reference</Link> to see if it is available for your development toolchain.\n'),Object(a.b)("p",null,"In some use cases, whitelisting or blacklisting individual views is not practical, e.g., in an app that heavily uses web views for presenting some insensitive content, or if the app defines its own subclasses of visual components that present sensitive user data."),Object(a.b)("p",null,"To cover this use-case, Smartlook offers ",Object(a.b)("strong",{parentName:"p"},"on some platforms")," a convenient way to blacklist or whitelist all descendants of some class or visual elements that conform to a protocol."),Object(a.b)(r.e,{visibleOn:"ios",markup:"\nOn iOS, you can blacklist or whitelist all instances of a **`UIView` subclass** or all `UIView` or all UIView subclasses that conform to a **protocol**.\n",mdxType:"MD"}),Object(a.b)(r.g,{mdxType:"TextBlock"},'\nMore on the topic in <Link to="/api_reference?platform=ios#sensitive-data-hiding">API reference</Link>.\n'),Object(a.b)("h2",{id:"handling-content-presented-in-webviews"},"Handling Content Presented in WebViews"),Object(a.b)("p",null,"Native WebView classes are blacklisted by default. Its instances, or the whole class, must be whitelisted in order to record its content. However, a whitelisted web view can still contain HTML elements with sensitive content, and Smartlook thus does not record the HTML elements where the user enters data."),Object(a.b)("p",null,"In order to change the default behaviour, HTML elements that are not recorded by default can be whitelisted by assigning ",Object(a.b)("inlineCode",{parentName:"p"},"smartlook-show")," CSS class to them. Any HTML element that should not be recorded can be blacklisted by assigning ",Object(a.b)("inlineCode",{parentName:"p"},"smartlook-hide")," CSS class to it. "),Object(a.b)(r.d,{to:"/api_reference",mdxType:"Link"},"FIXME API reference"),".",Object(a.b)("h3",{id:"rendering-modes-handling-sensitive-data-at-the-whole-screen-level"},"Rendering Modes: Handling Sensitive Data at the Whole Screen Level"),Object(a.b)("p",null,"There can be scenarios when direct recording of the screen is not appropriate or necessary to understand the user behaviour. In such  cases, Smartlook can be instructed to use (permanently or just temporarily) one of its wireframe rendering modes."),Object(a.b)("p",null,"When a wireframe mode is on, Smartlook draws a sketch of the screens instead of copying its content literally into the video. The principal UI elements and user interaction with them are still clearly distinguishable, but their actual look and content (texts, images) are replaced by an abstract representation."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"i do not understand how to link images, the example in index.mdx is useless"),"\n",Object(a.b)("inlineCode",{parentName:"p"},"<img src={rendering_native.png} />"),"\n",Object(a.b)("inlineCode",{parentName:"p"},"<img src={rendering_wireframe.png} />")),Object(a.b)("h3",{id:"setting-rendering-mode"},"Setting Rendering Mode"),Object(a.b)("p",null,"The default rendering mode for an app is set in ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://app.smartlook.com/settings/projects"}),"the dashboard"),". "),Object(a.b)("p",null,"When debugging or experimenting to find the most suitable one for a particular app, the default rendering mode can be also set within the setup options. In production releases, this option should not be used."),Object(a.b)("p",null,"The app can change the rendering mode at any time, e.g., to temporarily hide the sensitive user content on some screens. It is also possible to obtain the currently used values."),Object(a.b)(r.g,{mdxType:"TextBlock"},'\nMore about rendering modes could be found <Link to="/api_reference#rendering">in the API reference.</Link>\n'),Object(a.b)("h1",{id:"handling-sensitive-events"},"Handling Sensitive Events"),Object(a.b)("p",null,"It is not just the visual elements that can contain sensitive information. Sometimes, a clue to sensitive user data can be found in user interaction events. Consider that, e.g. location of click events on a keyboard area could be used to guess user password even when the keyboard itself is obfuscated."),Object(a.b)(r.g,{kind:"important",mdxType:"TextBlock"},"\nClick events in the area of the system keyboard are never recorded by Smartlook. User interaction with custom input elements, e.g., custom PIN-Pad, must be filtered out programatically by the app developer.\n"),Object(a.b)("p",null,"The default setting is to track all events (with the exception of events on the keyboard, for obvious user privacy reasons). When this is not desired, the app may fine-tune the level of tracked events."),Object(a.b)("p",null,"Typically, the default ",Object(a.b)("strong",{parentName:"p"},"Full Tracking")," mode is desired, as it gives a detailed picture of user activities."),Object(a.b)("p",null,"OOn the other hand, on some screens the event location of touches on an otherwise blacklisted view can reveal sensitive private information (e.g., custom input view for PIN). In such a case, touches should not be recorded, and the app should switch to the ",Object(a.b)("strong",{parentName:"p"},"Ignore User Interaction Events")," mode temporarily."),Object(a.b)("p",null,"In specific cases, some apps that handle complex private information on particular screens may prefer stopping event recording altogether, by switching to the ",Object(a.b)("strong",{parentName:"p"},"No Tracking")," mode for the screens."),Object(a.b)(r.g,{kind:"note",mdxType:"TextBlock"},"\nEvent tracking mode cannot be set on per-UI-element basis, only for the whole app.\n"),Object(a.b)(r.g,{mdxType:"TextBlock"},'\nMore about rendering modes could be found <Link to="/api_reference#event-tracking-modes">in the API reference.</Link> \n'))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/conceptual/handling-sensitive-data.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-conceptual-handling-sensitive-data-mdx-6e92420eaf12160d5b23.js.map