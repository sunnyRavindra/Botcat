"use strict";(self.webpackChunkdaku=self.webpackChunkdaku||[]).push([[7789],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>s});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,s=m["".concat(i,".").concat(d)]||m[d]||k[d]||a;return r?n.createElement(s,l(l({ref:t},p),{},{components:r})):n.createElement(s,l({ref:t},p))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:o,l[1]=c;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8563:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"Docker Commands"},l=void 0,c={unversionedId:"SDET/Docker/Docker-Commands",id:"SDET/Docker/Docker-Commands",title:"Docker Commands",description:"- Login",source:"@site/docs/SDET/Docker/Docker-Commands.md",sourceDirName:"SDET/Docker",slug:"/SDET/Docker/Docker-Commands",permalink:"/SDET/Docker/Docker-Commands",draft:!1,tags:[],version:"current",frontMatter:{title:"Docker Commands"},sidebar:"SDETSidebar",previous:{title:"Docker",permalink:"/SDET/Docker/Docker-Introduction"},next:{title:"Interacting with container",permalink:"/SDET/Docker/ContainerInteractions"}},i={},u=[],p={toc:u},m="wrapper";function k(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Login ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker login\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build Image")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker build -t username/imagename:tag .\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"List Image")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker image ls\ndocker image ls -a\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"List of running containers.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker ps\nor \ndocker container ls\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"List of running as well as stopped containers.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker ps -a\nor\ndocker container ls -a\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Container .")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker stop <the-container-id>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Remove Stopped Container.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker rm <the-container-id>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Stop and remove container with one command.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker rm -f <the-container-id>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To push locally built image to dockerhub you first need to tag the image appropriately ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker image -t imagename dockeruserID/imagename:version\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Push image to dockerHub")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker push dockeruserID/imagename:version\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run commands in a running container ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker exec <container-id> cat /data.txt\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can watch the logs using")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker logs <container-id>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use the docker image history command to see the layers in the getting-started image you created earlier in the tutorial.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker image history --no-trunc getting-started \n")))}k.isMDXComponent=!0}}]);