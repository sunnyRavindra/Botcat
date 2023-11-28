"use strict";(self.webpackChunkdaku=self.webpackChunkdaku||[]).push([[7744],{3905:(e,A,t)=>{t.d(A,{Zo:()=>p,kt:()=>g});var a=t(7294);function n(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function o(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);A&&(a=a.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?o(Object(t),!0).forEach((function(A){n(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function i(e,A){if(null==e)return{};var t,a,n=function(e,A){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],A.indexOf(t)>=0||(n[t]=e[t]);return n}(e,A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),s=function(e){var A=a.useContext(l),t=A;return e&&(t="function"==typeof e?e(A):r(r({},A),e)),t},p=function(e){var A=s(e.components);return a.createElement(l.Provider,{value:A},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var A=e.children;return a.createElement(a.Fragment,{},A)}},E=a.forwardRef((function(e,A){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(t),E=n,g=c["".concat(l,".").concat(E)]||c[E]||d[E]||o;return t?a.createElement(g,r(r({ref:A},p),{},{components:t})):a.createElement(g,r({ref:A},p))}));function g(e,A){var t=arguments,n=A&&A.mdxType;if("string"==typeof e||n){var o=t.length,r=new Array(o);r[0]=E;var i={};for(var l in A)hasOwnProperty.call(A,l)&&(i[l]=A[l]);i.originalType=e,i[c]="string"==typeof e?e:n,r[1]=i;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}E.displayName="MDXCreateElement"},1530:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(7462),n=(t(7294),t(3905));const o={title:"Message Structure"},r=void 0,i={unversionedId:"SDET/SoapUI/Soap",id:"SDET/SoapUI/Soap",title:"Message Structure",description:"SOAP (Simple Object Access Protocol) is a protocol used for exchanging structured information in the implementation of web services. A SOAP message consists of several key elements that define its structure:",source:"@site/docs/SDET/SoapUI/Soap.md",sourceDirName:"SDET/SoapUI",slug:"/SDET/SoapUI/Soap",permalink:"/SDET/SoapUI/Soap",draft:!1,tags:[],version:"current",frontMatter:{title:"Message Structure"},sidebar:"SDETSidebar",previous:{title:"SoupUI Basics",permalink:"/SDET/SoapUI/Intro"},next:{title:"WSDL",permalink:"/SDET/SoapUI/WSDL"}},l={},s=[{value:"Envelope",id:"envelope",level:3},{value:"Header",id:"header",level:3},{value:"Body",id:"body",level:3},{value:"Fault",id:"fault",level:3},{value:"Namespace Prefixes",id:"namespace-prefixes",level:3},{value:"Example SOAP Message",id:"example-soap-message",level:3},{value:"Structure of a SOAP message",id:"structure-of-a-soap-message",level:3}],p={toc:s},c="wrapper";function d(e){let{components:A,...o}=e;return(0,n.kt)(c,(0,a.Z)({},p,o,{components:A,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"SOAP (Simple Object Access Protocol) is a protocol used for exchanging structured information in the implementation of web services. A SOAP message consists of several key elements that define its structure:"),(0,n.kt)("h3",{id:"envelope"},"Envelope"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"<Envelope>")," element is the root element of a SOAP message.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"It encapsulates the entire SOAP message and defines the XML namespace for SOAP."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<soapenv:Envelope\n    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\n    xmlns:web="http://www.example.com/webservice">\n    \x3c!-- Body and Header elements go here --\x3e\n</soapenv:Envelope>\n')),(0,n.kt)("h3",{id:"header"},"Header"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The optional ",(0,n.kt)("inlineCode",{parentName:"p"},"<Header>")," element contains additional metadata about the SOAP message.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"It can include information like authentication credentials, routing instructions, or application-specific data."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<soapenv:Header>\n    \x3c!-- Header data goes here --\x3e\n</soapenv:Header>\n")),(0,n.kt)("h3",{id:"body"},"Body"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"<Body>")," element contains the actual content of the SOAP message.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"It defines the payload, which typically includes the request or response data for a web service operation."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<soapenv:Body>\n    \x3c!-- Request or response data goes here --\x3e\n</soapenv:Body>\n")),(0,n.kt)("h3",{id:"fault"},"Fault"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In the event of an error or exception, a SOAP message may contain a ",(0,n.kt)("inlineCode",{parentName:"p"},"<Fault>")," element within the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Body>"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"<Fault>")," element provides information about the error, including a fault code, fault string, and optional details."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<soapenv:Fault>\n    <faultcode>soapenv:Server</faultcode>\n    <faultstring>Invalid input</faultstring>\n    <detail>\n        \x3c!-- Error details go here --\x3e\n    </detail>\n</soapenv:Fault>\n")),(0,n.kt)("h3",{id:"namespace-prefixes"},"Namespace Prefixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SOAP messages typically use namespace prefixes to define namespaces and reference elements.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Commonly used prefixes include ",(0,n.kt)("inlineCode",{parentName:"p"},"soapenv")," for the SOAP envelope and ",(0,n.kt)("inlineCode",{parentName:"p"},"web")," for the web service namespace."))),(0,n.kt)("h3",{id:"example-soap-message"},"Example SOAP Message"),(0,n.kt)("p",null,"Here's an example of a simple SOAP message structure:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<soapenv:Envelope\n    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\n    xmlns:web="http://www.example.com/webservice">\n    <soapenv:Header>\n        \x3c!-- Header data goes here --\x3e\n    </soapenv:Header>\n    <soapenv:Body>\n        \x3c!-- Request or response data goes here --\x3e\n    </soapenv:Body>\n</soapenv:Envelope>\n')),(0,n.kt)("p",null,"The structure of a SOAP message is well-defined and allows for the exchange of structured data in a standardized manner, making it a key technology for web service communication."),(0,n.kt)("h3",{id:"structure-of-a-soap-message"},"Structure of a SOAP message"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"soapmsg.gif",src:t(4466).Z,width:"177",height:"213"})))}d.isMDXComponent=!0},4466:(e,A,t)=>{t.d(A,{Z:()=>a});const a="data:image/gif;base64,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"}}]);