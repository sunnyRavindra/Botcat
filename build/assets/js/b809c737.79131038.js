"use strict";(self.webpackChunkdaku=self.webpackChunkdaku||[]).push([[6801],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),A=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=A(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=A(n),m=r,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||s;return n?a.createElement(g,i(i({ref:t},l),{},{components:n})):a.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var A=2;A<s;A++)i[A]=n[A];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>A});var a=n(7462),r=(n(7294),n(3905));const s={title:"SoupUI Basics"},i=void 0,o={unversionedId:"SDET/SoapUI/Intro",id:"SDET/SoapUI/Intro",title:"SoupUI Basics",description:"API Basics.png",source:"@site/docs/SDET/SoapUI/Intro.md",sourceDirName:"SDET/SoapUI",slug:"/SDET/SoapUI/Intro",permalink:"/SDET/SoapUI/Intro",draft:!1,tags:[],version:"current",frontMatter:{title:"SoupUI Basics"},sidebar:"SDETSidebar",previous:{title:"HTTP Basics",permalink:"/SDET/API-Testing-Concepts/HTTP Basics"},next:{title:"Message Structure",permalink:"/SDET/SoapUI/Soap"}},p={},A=[{value:"API (Application Programming Interface) Basic Concepts",id:"api-application-programming-interface-basic-concepts",level:3},{value:"What is an API?",id:"what-is-an-api",level:3},{value:"Types of APIs",id:"types-of-apis",level:3},{value:"Key Concepts",id:"key-concepts",level:3},{value:"Use Cases",id:"use-cases",level:2},{value:"Structure of a SOAP message",id:"structure-of-a-soap-message",level:3},{value:"1 Envelope",id:"1-envelope",level:3},{value:"2 Header",id:"2-header",level:3},{value:"3 Body",id:"3-body",level:3},{value:"4 Fault",id:"4-fault",level:3},{value:"Structure of a SOAP message",id:"structure-of-a-soap-message-1",level:3},{value:"example of a SOAP message",id:"example-of-a-soap-message",level:3},{value:"WSDL (Web Services Description Language)",id:"wsdl-web-services-description-language",level:3},{value:"WSDL Purpose",id:"wsdl-purpose",level:3},{value:"Example WSDL Structure",id:"example-wsdl-structure",level:3},{value:"WSDL Usage",id:"wsdl-usage",level:3}],l={toc:A},c="wrapper";function d(e){let{components:t,...s}=e;return(0,r.kt)(c,(0,a.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API Basics.png",src:n(4025).Z,width:"1172",height:"995"}),"\n",(0,r.kt)("img",{alt:"API Basics.png",src:n(2956).Z,width:"1140",height:"1129"})),(0,r.kt)("h3",{id:"api-application-programming-interface-basic-concepts"},"API (Application Programming Interface) Basic Concepts"),(0,r.kt)("p",null,"APIs, or Application Programming Interfaces, are essential components of software and system development, enabling applications to communicate and interact with each other. Here are some fundamental concepts related to APIs:"),(0,r.kt)("h3",{id:"what-is-an-api"},"What is an API?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An API is a set of rules and protocols that allows different software applications to communicate and interact with each other.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It defines the methods and data formats that applications can use to request and exchange information.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"APIs can be used to access functionality or data from services, libraries, or external systems."))),(0,r.kt)("h3",{id:"types-of-apis"},"Types of APIs"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Web APIs"),": Web APIs, often referred to as REST or SOAP APIs, are accessed over the internet using standard HTTP methods. They allow applications to communicate over the web.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Library APIs"),": Library APIs are sets of functions and procedures that developers can use to perform specific tasks or operations within a program.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Operating System APIs"),": These APIs provide access to the underlying functions and services of an operating system, such as file management, hardware control, and process management.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Database APIs"),": Database APIs enable applications to interact with databases, allowing data retrieval, modification, and management."))),(0,r.kt)("h3",{id:"key-concepts"},"Key Concepts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Endpoints"),": Endpoints are specific URLs or URIs that represent different functionalities or resources provided by a web API. Each endpoint corresponds to a specific action.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"HTTP Methods"),": APIs use HTTP methods (e.g., GET, POST, PUT, DELETE) to perform operations on resources. For example, GET retrieves data, while POST creates new data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Request and Response"),": An API request is made by a client to access a resource, and the server responds with data or the result of the requested operation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Authentication"),": Many APIs require authentication, ensuring that only authorized users or applications can access the data or services.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Rate Limiting"),": APIs may have rate limits to control the number of requests a client can make within a specific time frame to prevent abuse.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Versioning"),": API versions are used to maintain compatibility. When changes are made, older versions can still be used by existing clients."))),(0,r.kt)("h2",{id:"use-cases"},"Use Cases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Integration"),": APIs are crucial for integrating services and systems, allowing them to work together and share data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Third-Party Services"),": Developers use APIs to access services and data provided by external organizations, such as social media platforms or payment gateways.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mobile Apps"),": Mobile apps often use APIs to access server-side functionality, such as retrieving data from a remote server.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Automation"),": APIs are used for automating tasks, enabling software to interact with other software without manual intervention.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Data Access"),": APIs provide structured access to data, making it easier to retrieve and manipulate information."))),(0,r.kt)("p",null,"APIs are the building blocks of modern software development, enabling interoperability and data exchange between a wide range of applications and systems."),(0,r.kt)("h3",{id:"structure-of-a-soap-message"},"Structure of a SOAP message"),(0,r.kt)("p",null,'A SOAP message is encoded as an XML document, consisting of an "Envelope" element, which contains an optional "Header" element, and a mandatory "Body" element. The "Fault" element, contained in the "Body", is used for reporting errors.'),(0,r.kt)("h3",{id:"1-envelope"},"1 Envelope"),(0,r.kt)("p",null,'The SOAP "Envelope" is the root element in every SOAP message. It contains two child elements, an optional "Header", and a mandatory "Body".'),(0,r.kt)("h3",{id:"2-header"},"2 Header"),(0,r.kt)("p",null,'The SOAP "Header" is an optional subelement of the SOAP envelope. It is used to pass application-related information that is to be processed by SOAP nodes along the message path.'),(0,r.kt)("h3",{id:"3-body"},"3 Body"),(0,r.kt)("p",null,'The SOAP "Body" is a mandatory subelement of the SOAP envelope. It contains information intended for the ultimate recipient of the message.'),(0,r.kt)("h3",{id:"4-fault"},"4 Fault"),(0,r.kt)("p",null,'The SOAP "Fault" is a subelement of the SOAP body, which is used for reporting errors.'),(0,r.kt)("p",null,'With the exception of the "Fault" element, which is contained in the "Body" of a SOAP message, XML elements in the "Header" and the "Body" are defined by the applications that make use of them. However, the SOAP specification imposes some constraints on their structure.'),(0,r.kt)("h3",{id:"structure-of-a-soap-message-1"},"Structure of a SOAP message"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"soapmsg.gif",src:n(4466).Z,width:"177",height:"213"})),(0,r.kt)("h3",{id:"example-of-a-soap-message"},"example of a SOAP message"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-soap"},'<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:tem="http://tempuri.org/">\n   <soap:Header/>\n   <soap:Body>\n      <tem:Add>\n         <tem:a>7</tem:a>\n         <tem:b>6</tem:b>\n      </tem:Add>\n   </soap:Body>\n</soap:Envelope>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-soap"},'<?xml version=\'1.0\' ?>\n<env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope"> \n <env:Header>\n  <m:reservation xmlns:m="http://travelcompany.example.org/reservation" \n          env:role="http://www.w3.org/2003/05/soap-envelope/role/next"\n           env:mustUnderstand="true">\n   <m:reference>uuid:093a2da1-q345-739r-ba5d-pqff98fe8j7d</m:reference>\n   <m:dateAndTime>2001-11-29T13:20:00.000-05:00</m:dateAndTime>\n  </m:reservation>\n  <n:passenger xmlns:n="http://mycompany.example.com/employees"\n          env:role="http://www.w3.org/2003/05/soap-envelope/role/next"\n           env:mustUnderstand="true">\n   <n:name>\xc5ke J\xf3gvan \xd8yvind</n:name>\n  </n:passenger>\n </env:Header>\n <env:Body>\n  <p:itinerary\n    xmlns:p="http://travelcompany.example.org/reservation/travel">\n   <p:departure>\n     <p:departing>New York</p:departing>\n     <p:arriving>Los Angeles</p:arriving>\n     <p:departureDate>2001-12-14</p:departureDate>\n     <p:departureTime>late afternoon</p:departureTime>\n     <p:seatPreference>aisle</p:seatPreference>\n   </p:departure>\n   <p:return>\n     <p:departing>Los Angeles</p:departing>\n     <p:arriving>New York</p:arriving>\n     <p:departureDate>2001-12-20</p:departureDate>\n     <p:departureTime>mid-morning</p:departureTime>\n     <p:seatPreference/>\n   </p:return>\n  </p:itinerary>\n  <q:lodging\n   xmlns:q="http://travelcompany.example.org/reservation/hotels">\n   <q:preference>none</q:preference>\n  </q:lodging>\n </env:Body>\n</env:Envelope>\n')),(0,r.kt)("h3",{id:"wsdl-web-services-description-language"},"WSDL (Web Services Description Language)"),(0,r.kt)("p",null,"WSDL is an XML-based language used to describe web services and their functionality."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Service"),": Describes the service's name and location (URL).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Ports"),": Define the endpoints for the service.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Operations"),": Specify the functions or methods that can be called on the service.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Messages"),": Describe the data exchanged between the client and the service.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Data Types"),": Define the data structures used by the service."))),(0,r.kt)("h3",{id:"wsdl-purpose"},"WSDL Purpose"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"WSDL is essential in web service development for integrating different systems and allowing them to communicate over a network.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It defines the contract between service providers and consumers, ensuring both parties understand how to interact.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When used with SOAP (Simple Object Access Protocol), it creates platform-independent web services."))),(0,r.kt)("h3",{id:"example-wsdl-structure"},"Example WSDL Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<definitions name="MyService"\n    targetNamespace="http://example.com/myservice.wsdl"\n    xmlns="http://schemas.xmlsoap.org/wsdl/"\n    xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"\n    xmlns:tns="http://example.com/myservice.wsdl">\n    \n    <service name="MyService">\n        <port name="MyServicePort" binding="tns:MyServiceBinding">\n            <soap:address location="http://example.com/myservice"/>\n        </port>\n    </service>\n    \n    <binding name="MyServiceBinding" type="tns:MyServicePortType">\n        <soap:binding style="rpc" transport="http://schemas.xmlsoap.org/soap/http"/>\n        <operation name="doSomething">\n            <soap:operation soapAction="http://example.com/myservice#doSomething"/>\n            <input>\n                <soap:body use="encoded" namespace="urn:example" encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>\n            </input>\n            <output>\n                <soap:body use="encoded" namespace="urn:example" encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>\n            </output>\n        </operation>\n    </binding>\n    \n    <portType name="MyServicePortType">\n        <operation name="doSomething">\n            <input message="tns:doSomethingIn"/>\n            <output message="tns:doSomethingOut"/>\n        </operation>\n    </portType>\n    \n    <message name="doSomethingIn">\n        <part name="parameters" element="tns:doSomething"/>\n    </message>\n    \n    <message name="doSomethingOut">\n        <part name="parameters" element="tns:doSomethingResponse"/>\n    </message>\n    \n    <element name="doSomething" type="xsd:string"/>\n    \n    <element name="doSomethingResponse" type="xsd:string"/>\n</definitions>\n')),(0,r.kt)("h3",{id:"wsdl-usage"},"WSDL Usage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"WSDL files can be used to generate client code (proxy classes) or server code (skeleton classes) in various programming languages to interact with web services.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"They play a crucial role in enabling the interoperability of web services in a standardized way."))),(0,r.kt)("p",null,"WSDL is fundamental in building and accessing web services in a structured and consistent manner. Understanding its structure and usage is essential for web service development and integration."))}d.isMDXComponent=!0},4025:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/API-4448039cb9abccc4337bf93b5bff5ef8.png"},2956:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/APIBasics-4ada4f853e476b42b0e59d275c71686e.png"},4466:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/gif;base64,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"}}]);