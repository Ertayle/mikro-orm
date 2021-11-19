"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66129],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),c=m(a),d=n,N=c["".concat(s,".").concat(d)]||c[d]||k[d]||p;return a?r.createElement(N,i(i({ref:t},o),{},{components:a})):r.createElement(N,i({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var m=2;m<p;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},62029:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return o},default:function(){return c}});var r=a(83117),n=a(80102),p=(a(67294),a(3905)),i=["components"],l={id:"core.eventsubscriber",title:"Interface: EventSubscriber<T>",sidebar_label:"EventSubscriber",custom_edit_url:null,hide_title:!0},s="Interface: EventSubscriber<T>",m={unversionedId:"api/interfaces/core.eventsubscriber",id:"version-4.5/api/interfaces/core.eventsubscriber",isDocsHomePage:!1,title:"Interface: EventSubscriber<T>",description:"core.EventSubscriber",source:"@site/versioned_docs/version-4.5/api/interfaces/core.eventsubscriber.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.eventsubscriber",permalink:"/docs/api/interfaces/core.eventsubscriber",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1637275882,formattedLastUpdatedAt:"11/18/2021",frontMatter:{id:"core.eventsubscriber",title:"Interface: EventSubscriber<T>",sidebar_label:"EventSubscriber",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"EventArgs",permalink:"/docs/api/interfaces/core.eventargs"},next:{title:"FactoryOptions",permalink:"/docs/api/interfaces/core.factoryoptions"}},o=[{value:"Type parameters",id:"type-parameters",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"afterCreate",id:"aftercreate",children:[{value:"Parameters:",id:"parameters",children:[],level:4}],level:3},{value:"afterDelete",id:"afterdelete",children:[{value:"Parameters:",id:"parameters-1",children:[],level:4}],level:3},{value:"afterFlush",id:"afterflush",children:[{value:"Parameters:",id:"parameters-2",children:[],level:4}],level:3},{value:"afterTransactionCommit",id:"aftertransactioncommit",children:[{value:"Parameters:",id:"parameters-3",children:[],level:4}],level:3},{value:"afterTransactionRollback",id:"aftertransactionrollback",children:[{value:"Parameters:",id:"parameters-4",children:[],level:4}],level:3},{value:"afterTransactionStart",id:"aftertransactionstart",children:[{value:"Parameters:",id:"parameters-5",children:[],level:4}],level:3},{value:"afterUpdate",id:"afterupdate",children:[{value:"Parameters:",id:"parameters-6",children:[],level:4}],level:3},{value:"beforeCreate",id:"beforecreate",children:[{value:"Parameters:",id:"parameters-7",children:[],level:4}],level:3},{value:"beforeDelete",id:"beforedelete",children:[{value:"Parameters:",id:"parameters-8",children:[],level:4}],level:3},{value:"beforeFlush",id:"beforeflush",children:[{value:"Parameters:",id:"parameters-9",children:[],level:4}],level:3},{value:"beforeTransactionCommit",id:"beforetransactioncommit",children:[{value:"Parameters:",id:"parameters-10",children:[],level:4}],level:3},{value:"beforeTransactionRollback",id:"beforetransactionrollback",children:[{value:"Parameters:",id:"parameters-11",children:[],level:4}],level:3},{value:"beforeTransactionStart",id:"beforetransactionstart",children:[{value:"Parameters:",id:"parameters-12",children:[],level:4}],level:3},{value:"beforeUpdate",id:"beforeupdate",children:[{value:"Parameters:",id:"parameters-13",children:[],level:4}],level:3},{value:"getSubscribedEntities",id:"getsubscribedentities",children:[],level:3},{value:"onFlush",id:"onflush",children:[{value:"Parameters:",id:"parameters-14",children:[],level:4}],level:3},{value:"onInit",id:"oninit",children:[{value:"Parameters:",id:"parameters-15",children:[],level:4}],level:3}],level:2}],k={toc:o};function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"interface-eventsubscribert"},"Interface: EventSubscriber<T",">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".EventSubscriber"),(0,p.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"any"))))),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("h3",{id:"aftercreate"},"afterCreate"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional"),(0,p.kt)("strong",{parentName:"p"},"afterCreate"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.eventargs"},(0,p.kt)("em",{parentName:"a"},"EventArgs")),"<T",">","): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("h4",{id:"parameters"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"args")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.eventargs"},(0,p.kt)("em",{parentName:"a"},"EventArgs")),"<T",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L25"},"packages/core/src/events/EventSubscriber.ts:25")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"afterdelete"},"afterDelete"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional"),(0,p.kt)("strong",{parentName:"p"},"afterDelete"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.eventargs"},(0,p.kt)("em",{parentName:"a"},"EventArgs")),"<T",">","): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"args")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.eventargs"},(0,p.kt)("em",{parentName:"a"},"EventArgs")),"<T",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L29"},"packages/core/src/events/EventSubscriber.ts:29")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"afterflush"},"afterFlush"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional"),(0,p.kt)("strong",{parentName:"p"},"afterFlush"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.flusheventargs"},(0,p.kt)("em",{parentName:"a"},"FlushEventArgs")),"): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"args")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.flusheventargs"},(0,p.kt)("em",{parentName:"a"},"FlushEventArgs")))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L32"},"packages/core/src/events/EventSubscriber.ts:32")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"aftertransactioncommit"},"afterTransactionCommit"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional"),(0,p.kt)("strong",{parentName:"p"},"afterTransactionCommit"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.transactioneventargs"},(0,p.kt)("em",{parentName:"a"},"TransactionEventArgs")),"): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"args")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.transactioneventargs"},(0,p.kt)("em",{parentName:"a"},"TransactionEventArgs")))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L37"},"packages/core/src/events/EventSubscriber.ts:37")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"aftertransactionrollback"},"afterTransactionRollback"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional"),(0,p.kt)("strong",{parentName:"p"},"afterTransactionRollback"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.transactioneventargs"},(0,p.kt)("em",{parentName:"a"},"TransactionEventArgs")),"): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"args")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.transactioneventargs"},(0,p.kt)("em",{parentName:"a"},"TransactionEventArgs")))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L39"},"packages/core/src/events/EventSubscriber.ts:39")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"aftertransactionstart"},"afterTransactionStart"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional"),(0,p.kt)("strong",{parentName:"p"},"afterTransactionStart"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.transactioneventargs"},(0,p.kt)("em",{parentName:"a"},"TransactionEventArgs")),"): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"args")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.transactioneventargs"},(0,p.kt)("em",{parentName:"a"},"TransactionEventArgs")))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L35"},"packages/core/src/events/EventSubscriber.ts:35")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"afterupdate"},"afterUpdate"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional"),(0,p.kt)("strong",{parentName:"p"},"afterUpdate"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.eventargs"},(0,p.kt)("em",{parentName:"a"},"EventArgs")),"<T",">","): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"args")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.eventargs"},(0,p.kt)("em",{parentName:"a"},"EventArgs")),"<T",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L27"},"packages/core/src/events/EventSubscriber.ts:27")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"beforecreate"},"beforeCreate"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional"),(0,p.kt)("strong",{parentName:"p"},"beforeCreate"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.eventargs"},(0,p.kt)("em",{parentName:"a"},"EventArgs")),"<T",">","): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"args")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.eventargs"},(0,p.kt)("em",{parentName:"a"},"EventArgs")),"<T",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L24"},"packages/core/src/events/EventSubscriber.ts:24")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"beforedelete"},"beforeDelete"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional"),(0,p.kt)("strong",{parentName:"p"},"beforeDelete"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.eventargs"},(0,p.kt)("em",{parentName:"a"},"EventArgs")),"<T",">","): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"args")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.eventargs"},(0,p.kt)("em",{parentName:"a"},"EventArgs")),"<T",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L28"},"packages/core/src/events/EventSubscriber.ts:28")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"beforeflush"},"beforeFlush"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional"),(0,p.kt)("strong",{parentName:"p"},"beforeFlush"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.flusheventargs"},(0,p.kt)("em",{parentName:"a"},"FlushEventArgs")),"): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"args")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.flusheventargs"},(0,p.kt)("em",{parentName:"a"},"FlushEventArgs")))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L30"},"packages/core/src/events/EventSubscriber.ts:30")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"beforetransactioncommit"},"beforeTransactionCommit"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional"),(0,p.kt)("strong",{parentName:"p"},"beforeTransactionCommit"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.transactioneventargs"},(0,p.kt)("em",{parentName:"a"},"TransactionEventArgs")),"): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("h4",{id:"parameters-10"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"args")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.transactioneventargs"},(0,p.kt)("em",{parentName:"a"},"TransactionEventArgs")))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L36"},"packages/core/src/events/EventSubscriber.ts:36")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"beforetransactionrollback"},"beforeTransactionRollback"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional"),(0,p.kt)("strong",{parentName:"p"},"beforeTransactionRollback"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.transactioneventargs"},(0,p.kt)("em",{parentName:"a"},"TransactionEventArgs")),"): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("h4",{id:"parameters-11"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"args")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.transactioneventargs"},(0,p.kt)("em",{parentName:"a"},"TransactionEventArgs")))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L38"},"packages/core/src/events/EventSubscriber.ts:38")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"beforetransactionstart"},"beforeTransactionStart"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional"),(0,p.kt)("strong",{parentName:"p"},"beforeTransactionStart"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.transactioneventargs"},(0,p.kt)("em",{parentName:"a"},"TransactionEventArgs")),"): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("h4",{id:"parameters-12"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"args")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.transactioneventargs"},(0,p.kt)("em",{parentName:"a"},"TransactionEventArgs")))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L34"},"packages/core/src/events/EventSubscriber.ts:34")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"beforeupdate"},"beforeUpdate"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional"),(0,p.kt)("strong",{parentName:"p"},"beforeUpdate"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.eventargs"},(0,p.kt)("em",{parentName:"a"},"EventArgs")),"<T",">","): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("h4",{id:"parameters-13"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"args")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.eventargs"},(0,p.kt)("em",{parentName:"a"},"EventArgs")),"<T",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L26"},"packages/core/src/events/EventSubscriber.ts:26")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getsubscribedentities"},"getSubscribedEntities"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional"),(0,p.kt)("strong",{parentName:"p"},"getSubscribedEntities"),"(): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#entityname"},(0,p.kt)("em",{parentName:"a"},"EntityName")),"<T",">","[]"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#entityname"},(0,p.kt)("em",{parentName:"a"},"EntityName")),"<T",">","[]"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L22"},"packages/core/src/events/EventSubscriber.ts:22")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"onflush"},"onFlush"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional"),(0,p.kt)("strong",{parentName:"p"},"onFlush"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.flusheventargs"},(0,p.kt)("em",{parentName:"a"},"FlushEventArgs")),"): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("h4",{id:"parameters-14"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"args")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.flusheventargs"},(0,p.kt)("em",{parentName:"a"},"FlushEventArgs")))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L31"},"packages/core/src/events/EventSubscriber.ts:31")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"oninit"},"onInit"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional"),(0,p.kt)("strong",{parentName:"p"},"onInit"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.eventargs"},(0,p.kt)("em",{parentName:"a"},"EventArgs")),"<T",">","): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"parameters-15"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"args")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.eventargs"},(0,p.kt)("em",{parentName:"a"},"EventArgs")),"<T",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L23"},"packages/core/src/events/EventSubscriber.ts:23")))}c.isMDXComponent=!0}}]);