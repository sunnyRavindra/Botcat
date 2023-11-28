"use strict";(self.webpackChunkdaku=self.webpackChunkdaku||[]).push([[2258],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={title:"WSDL"},s=void 0,o={unversionedId:"SDET/SoapUI/WSDL",id:"SDET/SoapUI/WSDL",title:"WSDL",description:"WSDL (Web Services Description Language)",source:"@site/docs/SDET/SoapUI/WSDL.md",sourceDirName:"SDET/SoapUI",slug:"/SDET/SoapUI/WSDL",permalink:"/SDET/SoapUI/WSDL",draft:!1,tags:[],version:"current",frontMatter:{title:"WSDL"},sidebar:"SDETSidebar",previous:{title:"Message Structure",permalink:"/SDET/SoapUI/Soap"},next:{title:"Properties",permalink:"/SDET/SoapUI/Properties"}},p={},l=[{value:"WSDL (Web Services Description Language)",id:"wsdl-web-services-description-language",level:3},{value:"WSDL Purpose",id:"wsdl-purpose",level:3},{value:"Example WSDL Structure",id:"example-wsdl-structure",level:3},{value:"WSDL Usage",id:"wsdl-usage",level:3}],c={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"wsdl-web-services-description-language"},"WSDL (Web Services Description Language)"),(0,a.kt)("p",null,"WSDL is an XML-based language used to describe web services and their functionality."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Service"),": Describes the service's name and location (URL).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Ports"),": Define the endpoints for the service.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Operations"),": Specify the functions or methods that can be called on the service.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Messages"),": Describe the data exchanged between the client and the service.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Data Types"),": Define the data structures used by the service."))),(0,a.kt)("h3",{id:"wsdl-purpose"},"WSDL Purpose"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"WSDL is essential in web service development for integrating different systems and allowing them to communicate over a network.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It defines the contract between service providers and consumers, ensuring both parties understand how to interact.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When used with SOAP (Simple Object Access Protocol), it creates platform-independent web services."))),(0,a.kt)("h3",{id:"example-wsdl-structure"},"Example WSDL Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<definitions name="MyService"\n    targetNamespace="http://example.com/myservice.wsdl"\n    xmlns="http://schemas.xmlsoap.org/wsdl/"\n    xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"\n    xmlns:tns="http://example.com/myservice.wsdl">\n    \n    <service name="MyService">\n        <port name="MyServicePort" binding="tns:MyServiceBinding">\n            <soap:address location="http://example.com/myservice"/>\n        </port>\n    </service>\n    \n    <binding name="MyServiceBinding" type="tns:MyServicePortType">\n        <soap:binding style="rpc" transport="http://schemas.xmlsoap.org/soap/http"/>\n        <operation name="doSomething">\n            <soap:operation soapAction="http://example.com/myservice#doSomething"/>\n            <input>\n                <soap:body use="encoded" namespace="urn:example" encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>\n            </input>\n            <output>\n                <soap:body use="encoded" namespace="urn:example" encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>\n            </output>\n        </operation>\n    </binding>\n    \n    <portType name="MyServicePortType">\n        <operation name="doSomething">\n            <input message="tns:doSomethingIn"/>\n            <output message="tns:doSomethingOut"/>\n        </operation>\n    </portType>\n    \n    <message name="doSomethingIn">\n        <part name="parameters" element="tns:doSomething"/>\n    </message>\n    \n    <message name="doSomethingOut">\n        <part name="parameters" element="tns:doSomethingResponse"/>\n    </message>\n    \n    <element name="doSomething" type="xsd:string"/>\n    \n    <element name="doSomethingResponse" type="xsd:string"/>\n</definitions>\n')),(0,a.kt)("h3",{id:"wsdl-usage"},"WSDL Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"WSDL files can be used to generate client code (proxy classes) or server code (skeleton classes) in various programming languages to interact with web services.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"They play a crucial role in enabling the interoperability of web services in a standardized way."))),(0,a.kt)("p",null,"WSDL is fundamental in building and accessing web services in a structured and consistent manner. Understanding its structure and usage is essential for web service development and integration."))}u.isMDXComponent=!0}}]);