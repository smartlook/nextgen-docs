(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{YpGV:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return p}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/sdk-installation/android.mdx"}});var i={_frontmatter:l},c=r.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(c,o({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"android-sdk-installation"},"Android SDK Installation"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Add Smartlook in your ",Object(a.b)("strong",{parentName:"li"},"app’s")," ",Object(a.b)("inlineCode",{parentName:"li"},"build.gradle"),":")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-gradle"}),"implementation('com.smartlook.recording:app:1.4.2-native')\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Add Smartlook Maven repository in your ",Object(a.b)("strong",{parentName:"li"},"projects")," ",Object(a.b)("inlineCode",{parentName:"li"},"build.gradle"),":")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-gradle"}),'allprojects {\n  repositories {\n    maven {\n      url "https://sdk.smartlook.com/android/release"\n    }\n  }\n}\n')),Object(a.b)("p",null,"3.Setup and start Smartlook in ",Object(a.b)("strong",{parentName:"p"},"onCreate()")," of your ",Object(a.b)("strong",{parentName:"p"},"Application")," class:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-Java"}),"Smartlook.setupAndStartRecording(String YOUR_API_KEY)\n")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-Kotlin"}),"Smartlook.setupAndStartRecording(YOUR_API_KEY: String)\n")),Object(a.b)("p",null,"NOTE: You need to provide your Smartlook SDK API key which can be acquired in the Smartlook Dashboard."),Object(a.b)("p",null,"NOTE: SDK will upload sessions only on WiFi if you want to upload sessions on mobile connections too, you need to enable this in your project setting in the dashboard."),Object(a.b)("p",null,"After this basic setup SDK will:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"record your application."),Object(a.b)("li",{parentName:"ul"},"stop itself automatically on application closure."),Object(a.b)("li",{parentName:"ul"},"automatically hide some default sensitive views."),Object(a.b)("li",{parentName:"ul"},"detect basic user gestures and touches."),Object(a.b)("li",{parentName:"ul"},"records install referrer if present."),Object(a.b)("li",{parentName:"ul"},"and much more!")),Object(a.b)("p",null,"For any SDK customization please refer to our api reference."),Object(a.b)("p",null,"EXAMPLE: Application class with example call of ",Object(a.b)("inlineCode",{parentName:"p"},"Smartlook.setupAndStart()"),":"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-Java"}),"import android.app.Application;\n\npublic class MyCustomApplication extends Application {\n    @Override\n    public void onCreate() {\n        super.onCreate();\n        Smartlook.setupAndStartRecording(YOUR_API_KEY);\n    }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-Kotlin"}),"class MyCustomApplication : Application() {\n    override fun onCreate() {\n        super.onCreate()\n        Smartlook.setupAndStartRecording(YOUR_API_KEY)\n    }\n}\n")))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/sdk-installation/android.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-sdk-installation-android-mdx-0b7a6e8a538d7c3c5561.js.map