(self.webpackChunk=self.webpackChunk||[]).push([[98446,95118,49088],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?a.createElement(f,o(o({ref:t},s),{},{components:r})):a.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},13919:(e,t,r)=>{"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!a(e)}r.d(t,{b:()=>a,Z:()=>n})},44996:(e,t,r)=>{"use strict";r.d(t,{C:()=>i,Z:()=>o});var a=r(52263),n=r(13919);function i(){var e=(0,a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,p=void 0!==o&&o,l=i.absolute,c=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,n.b)(r))return r;if(p)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+s:s}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},86647:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>o,metadata:()=>p,toc:()=>l,default:()=>s});var a=r(22122),n=r(19756),i=(r(67294),r(3905)),o={},p={unversionedId:"api-reference/types/CacheConfig",id:"api-reference/types/CacheConfig",isDocsHomePage:!1,title:"CacheConfig",description:"Type CacheConfig",source:"@site/docs/api-reference/types/CacheConfig.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/CacheConfig",permalink:"/docs/next/api-reference/types/CacheConfig",editUrl:"https://github.com/facebook/relay/edit/master/website/docs/api-reference/types/CacheConfig.md",version:"current",lastUpdatedBy:"Marshall Roch",lastUpdatedAt:1622127526,formattedLastUpdatedAt:"5/27/2021",frontMatter:{}},l=[],c={toc:l};function s(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"type-cacheconfig"},"Type ",(0,i.kt)("inlineCode",{parentName:"h4"},"CacheConfig")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An object with the following fields:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"force"),": ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("em",{parentName:"em"},"[Optional]"))," A boolean. If true, causes a query to be issued unconditionally, regardless of the state of any configured response cache."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"poll"),": ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("em",{parentName:"em"},"[Optional]"))," A number. Causes a query to live-update by polling at the specified interval, in milliseconds. (This value will be passed to ",(0,i.kt)("inlineCode",{parentName:"li"},"setTimeout"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"liveConfigId"),": ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("em",{parentName:"em"},"[Optional]"))," A string. Causes a query to live-update by calling GraphQLLiveQuery; it represents a configuration of gateway when doing live query."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metadata"),": ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("em",{parentName:"em"},"[Optional]"))," An object. User-supplied metadata."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transactionId"),": ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("em",{parentName:"em"},"[Optional]"))," A string. A user-supplied value, intended for use as a unique id for a given instance of executing an operation.")))))}s.isMDXComponent=!0},88490:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,metadata:()=>c,toc:()=>s,default:()=>u});var a=r(22122),n=r(19756),i=(r(67294),r(3905)),o=r(31219),p=r(86647),l={},c={unversionedId:"api-reference/types/GraphQLSubscriptionConfig",id:"api-reference/types/GraphQLSubscriptionConfig",isDocsHomePage:!1,title:"GraphQLSubscriptionConfig",description:"Type GraphQLSubscriptionConfig",source:"@site/docs/api-reference/types/GraphQLSubscriptionConfig.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/GraphQLSubscriptionConfig",permalink:"/docs/next/api-reference/types/GraphQLSubscriptionConfig",editUrl:"https://github.com/facebook/relay/edit/master/website/docs/api-reference/types/GraphQLSubscriptionConfig.md",version:"current",lastUpdatedBy:"Marshall Roch",lastUpdatedAt:1622127526,formattedLastUpdatedAt:"5/27/2021",frontMatter:{}},s=[],d={toc:s};function u(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"type-graphqlsubscriptionconfigtsubscriptionpayload"},"Type ",(0,i.kt)("inlineCode",{parentName:"h4"},"GraphQLSubscriptionConfig<TSubscriptionPayload>")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An object with the following fields:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cacheConfig"),": ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("em",{parentName:"em"},"[Optional]"))," ",(0,i.kt)("a",{parentName:"li",href:"#type-cacheconfig"},(0,i.kt)("inlineCode",{parentName:"a"},"CacheConfig"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"subscription"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"GraphQLTaggedNode"),". A GraphQL subscription specified using a ",(0,i.kt)("inlineCode",{parentName:"li"},"graphql")," template literal"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"variables"),": The variables to pass to the subscription"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onCompleted"),": ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("em",{parentName:"em"},"[Optional]"))," ",(0,i.kt)("inlineCode",{parentName:"li"},"() => void"),". An optional callback that is executed when the subscription is established"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onError"),": ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("em",{parentName:"em"},"[Optional]"))," ",(0,i.kt)("inlineCode",{parentName:"li"},"(Error) => {}"),". An optional callback that is executed when an error occurs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onNext"),": ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("em",{parentName:"em"},"[Optional]"))," ",(0,i.kt)("inlineCode",{parentName:"li"},"(TSubscriptionPayload) => {}"),". An optional callback that is executed when new data is received"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updater"),": ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("em",{parentName:"em"},"[Optional]"))," ",(0,i.kt)("a",{parentName:"li",href:"#type-selectorstoreupdater"},(0,i.kt)("inlineCode",{parentName:"a"},"SelectorStoreUpdater")),".")))),(0,i.kt)(p.default,{mdxType:"CacheConfig"}),(0,i.kt)(o.default,{mdxType:"SelectorStoreUpdater"}))}u.isMDXComponent=!0},31219:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>p,metadata:()=>l,toc:()=>c,default:()=>d});var a=r(22122),n=r(19756),i=(r(67294),r(3905)),o=r(44996),p={},l={unversionedId:"api-reference/types/SelectorStoreUpdater",id:"api-reference/types/SelectorStoreUpdater",isDocsHomePage:!1,title:"SelectorStoreUpdater",description:"Type SelectorStoreUpdater",source:"@site/docs/api-reference/types/SelectorStoreUpdater.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/SelectorStoreUpdater",permalink:"/docs/next/api-reference/types/SelectorStoreUpdater",editUrl:"https://github.com/facebook/relay/edit/master/website/docs/api-reference/types/SelectorStoreUpdater.md",version:"current",lastUpdatedBy:"Marshall Roch",lastUpdatedAt:1622127526,formattedLastUpdatedAt:"5/27/2021",frontMatter:{}},c=[],s={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"type-selectorstoreupdater"},"Type ",(0,i.kt)("inlineCode",{parentName:"h4"},"SelectorStoreUpdater")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A function with signature ",(0,i.kt)("inlineCode",{parentName:"li"},"(store: RecordSourceSelectorProxy, data) => void")),(0,i.kt)("li",{parentName:"ul"},"This interface allows you to ",(0,i.kt)("em",{parentName:"li"},"imperatively")," write and read data directly to and from the Relay store. This means that you have full control over how to update the store in response to the subscription payload: you can ",(0,i.kt)("em",{parentName:"li"},"create entirely new records"),", or ",(0,i.kt)("em",{parentName:"li"},"update or delete existing ones"),". The full API for reading and writing to the Relay store is available ",(0,i.kt)("a",{href:(0,o.Z)("docs/api-reference/store/#recordsourceselectorproxy")},"here"),".")))}d.isMDXComponent=!0}}]);