(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[261],{5073:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/analysis",function(){return r(5563)}])},5563:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return le}});var t=r(5666),o=r.n(t),i=r(5893),a=r(7294),l=r(7389),c=r(6242),s=r(974),u=r(7357),d=r(4163),f=r(8057),h=r(1216),m=r(3946),g=r(5113),p=r(7148),b=r(4514),x=r(5697),v=r.n(x),y=r(7906),j=r(295),w=r(3252),P=r(2882),O=r(3184),k=r(4698),Z=r(3816),N=r(6280),S=r(155),V=r(2902),A=r(3113);function _(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function E(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function R(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(t=(a=l.next()).done)&&(r.push(a.value),!n||r.length!==n);t=!0);}catch(c){o=!0,i=c}finally{try{t||null==l.return||l.return()}finally{if(o)throw i}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var B=[{id:"name",numeric:!1,label:"\u540d\u524d",align:"center",sortable:!1,getOrderValue:function(e){return e.name}},{id:"cover",numeric:!1,label:"\u753b\u50cf",align:"center",sortable:!1,getOrderValue:function(e){return e.name}},{id:"video",numeric:!1,label:"\u52d5\u753b",align:"center",sortable:!0,getOrderValue:function(e){var n;return null===(n=e.lookBackVideo)||void 0===n?void 0:n.no}},{id:"friends",numeric:!0,label:"\u3068\u3082\u3060\u3061",align:"center",sortable:!0,getOrderValue:function(e){return e.friendPokemons.length}},{id:"others",numeric:!0,label:"\u3053\u308c\u304b\u3089",align:"center",sortable:!0,getOrderValue:function(e){return e.othersPokemons.length}},{id:"ratio",numeric:!0,label:"\u9054\u6210\u7387",align:"center",sortable:!0,getOrderValue:function(e){return e.friendPokemons.length/e.num}}],C=function(e,n,r){return r(n)<r(e)?-1:r(n)>r(e)?1:0},I=function(e,n){return"desc"===e?function(e,r){return C(e,r,n)}:function(e,r){return-C(e,r,n)}},T=function(e,n){var r=e.map((function(e,n){return[e,n]}));return r.sort((function(e,r){var t=n(e[0],r[0]);return 0!==t?t:e[1]-r[1]})),r.map((function(e){return e[0]}))};function D(e){var n=e.order,r=e.orderBy,t=(e.rowCount,e.onRequestSort);return(0,i.jsx)(O.Z,{children:(0,i.jsx)(Z.Z,{children:B.map((function(e){return(0,i.jsx)(w.Z,{align:e.align,padding:"normal",sortDirection:r===e.id&&n,children:e.sortable?(0,i.jsxs)(N.Z,{active:r===e.id,direction:r===e.id?n:"asc",onClick:(o=e,function(e){t(e,o)}),children:[e.label,r===e.id?(0,i.jsx)(u.Z,{component:"span",sx:A.Z,children:"desc"===n?"sorted descending":"sorted ascending"}):null]}):(0,i.jsx)(i.Fragment,{children:e.label})},e.id);var o}))})})}D.propTypes={onRequestSort:v().func.isRequired,order:v().oneOf(["asc","desc"]).isRequired,orderBy:v().string.isRequired,rowCount:v().number.isRequired};var q=function(e){var n=e.friendAreas,r=e.defaultRowsPerPage,t=e.rowsPerPageOptions,o=E(e,["friendAreas","defaultRowsPerPage","rowsPerPageOptions"]),l=R(a.useState("asc"),2),c=l[0],s=l[1],x=R(a.useState("no"),2),v=x[0],O=x[1],N=R(a.useState((function(){return function(e){return e}})),2),A=N[0],B=N[1],C=R(a.useState(0),2),q=C[0],F=C[1],z=R(a.useState(r),2),X=z[0],H=z[1],L=R(a.useState(""),2),M=L[0],W=L[1],G=M.length>0?n.filter((function(e){return e.friendPokemons.concat(e.othersPokemons).some((function(e){return e.name.includes(M)}))})):n,J=q>0?Math.max(0,(1+q)*X-G.length):0;return(0,i.jsx)(u.Z,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){_(e,n,r[n])}))}return e}({className:"w-full"},o,{children:(0,i.jsxs)(g.Z,{className:"w-full mb-2",children:[(0,i.jsxs)(S.Z,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:[(0,i.jsx)(p.Z,{inputValue:M,setInputValue:W,textFieldProps:{label:"\u300c\u30dd\u30b1\u30e2\u30f3\u300d\u304b\u300c\u306a\u307e\u3048\u300d\u3092\u5165\u529b",inputProps:{className:"focus:ring-0 bg-gray-100"}},className:"ml-1 w-full px-1"}),(0,i.jsx)(V.Z,{title:"\u307e\u3060\u4f7f\u3048\u307e\u305b\u3093\u3002",children:(0,i.jsx)(m.Z,{children:(0,i.jsx)(h.Z,{})})})]}),(0,i.jsx)(P.Z,{sx:{height:"calc(100vh - 340px)"},children:(0,i.jsxs)(y.Z,{stickyHeader:!0,sx:{minWidth:750},"aria-labelledby":"tableTitle",size:"medium",children:[(0,i.jsx)(D,{order:c,orderBy:v,onRequestSort:function(e,n){var r=v===n.id&&"asc"===c;s(r?"desc":"asc"),O(n.id),B((function(){return n.getOrderValue}))},rowCount:G.length}),(0,i.jsxs)(j.Z,{children:[T(G,I(c,A)).slice(q*X,q*X+X).map((function(e,n){var r="enhanced-table-checkbox-".concat(n),t=parseInt(e.friendPokemons.length/e.num*100);return(0,i.jsxs)(Z.Z,{hover:!0,tabIndex:-1,children:[(0,i.jsx)(w.Z,{component:"th",id:r,scope:"row",align:"center",children:e.name}),(0,i.jsx)(w.Z,{align:"center",children:(0,i.jsx)(d.Z,{friendArea:e,style:{width:"160px"},imgProps:{className:"object-cover"}})}),(0,i.jsx)(w.Z,{align:"center",children:e.lookBackVideo&&(0,i.jsx)(f.Z,{id:e.lookBackVideo.id,videoNo:e.lookBackVideo.no,duration:e.lookBackVideo.duration,style:{width:"120px"}})}),(0,i.jsx)(w.Z,{align:"center",children:(0,i.jsx)(b.Z,{pokemons:e.friendPokemons})}),(0,i.jsx)(w.Z,{align:"center",children:(0,i.jsx)(b.Z,{pokemons:e.othersPokemons})}),(0,i.jsx)(w.Z,{align:"center",children:(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsxs)("span",{className:"mr-2",children:[t,"%"]}),(0,i.jsx)("div",{className:"relative w-full",children:(0,i.jsx)("div",{className:"overflow-hidden h-2 text-xs flex rounded bg-".concat(100===t?"emerald":"red","-200"),children:(0,i.jsx)("div",{style:{width:"".concat(t,"%")},className:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-".concat(100===t?"emerald":"red","-500")})})})]})})]},e)})),J>0&&(0,i.jsx)(Z.Z,{style:{height:53*J},children:(0,i.jsx)(w.Z,{colSpan:6})})]})]})}),(0,i.jsx)(k.Z,{rowsPerPageOptions:t,component:"div",count:G.length,rowsPerPage:X,page:q,onPageChange:function(e,n){F(n)},onRowsPerPageChange:function(e){H(parseInt(e.target.value,10)),F(0)},className:"border-t"})]})}))};q.propTypes={rowsPerPageOptions:v().arrayOf(v().number),defaultRowsPerPage:v().number},q.defaultProps={rowsPerPageOptions:[10,30,60],defaultRowsPerPage:60};var F=q,z=r(7385),X=r(4054),H=r(480),L=r(476),M=r(3618),W=r(7781),G=r(2890),J=r(6945);function K(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function Q(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){K(e,n,r[n])}))}return e}function U(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Y(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(t=(a=l.next()).done)&&(r.push(a.value),!n||r.length!==n);t=!0);}catch(c){o=!0,i=c}finally{try{t||null==l.return||l.return()}finally{if(o)throw i}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var $=[{label:"\u65e5\u6642",color:"#fad95e",getData:function(e){return new Date(e.published_at)}},{label:"\u52d5\u753b\u6570",color:"#cb3e33",getData:function(e){return e.no}}],ee=function(e){var n=e.options,r=e.height,t=U(e,["options","height"]),o=Y(a.useState($[0].label),2),l=o[0],c=o[1],s=$.find((function(e){return e.label==l})),u=0,d=[[l,"\u56e3\u54e1\u6570"]].concat(J.map((function(e){return[s.getData(e),u+=e.friends]})));return(0,i.jsxs)("div",{className:"relative w-full",children:[(0,i.jsx)("div",{className:"absolute z-10 bg-gray-900 p-2",style:{top:.75*r-(39+42*$.length),right:10},children:(0,i.jsxs)(X.Z,{component:"fieldset",children:[(0,i.jsx)(L.Z,{component:"legend",children:"\u6a2a\u8ef8\u306e\u5024"}),(0,i.jsx)(G.Z,{value:l,onChange:function(e){return c(e.target.value)},children:$.map((function(e){return(0,i.jsx)(H.Z,{value:e.label,control:(0,i.jsx)(W.Z,{}),label:e.label,className:"font-bold",style:{color:e.color}},e.label)}))})]})}),(0,i.jsx)(z.Z,Q({height:r,chartType:"AreaChart",loader:(0,i.jsx)("div",{children:"Loading Chart..."}),data:d,options:Q({title:"\u30a2\u30d2\u30eb\u56e3\u306e\u56e3\u54e1\u6570",hAxis:{title:l,titleTextStyle:{color:"#1e293b"}},vAxis:{title:"\u56e3\u54e1\u6570",minValue:0,maxValue:M.length},chartArea:{width:"75%",height:"75%"},colors:[s.color]},n)},t))]})};ee.defaultProps={height:400};var ne=ee;var re,te=function(e){var n=e.children;return(0,i.jsx)("h1",{className:"text-3xl font-semibold text-gray-700",children:n})};function oe(e,n,r,t,o,i,a){try{var l=e[i](a),c=l.value}catch(s){return void r(s)}l.done?n(c):Promise.resolve(c).then(t,o)}function ie(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function ae(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){ie(e,n,r[n])}))}return e}function le(e){var n=e.friendAreas,r=e.curtFriendsNum,t=e.totalFriendsNum;return(0,i.jsxs)("div",{className:"",children:[(0,i.jsx)(te,{children:"\u3010\u30a2\u30d2\u30eb\u56e3\u306e\u56e3\u54e1\u6570\u3011"}),(0,i.jsx)(c.Z,{className:"p-2 m-2",children:(0,i.jsx)(ne,{})}),(0,i.jsxs)(te,{children:["\u3010\u9032\u6357\u72b6\u6cc1\u3011\uff08","".concat(r," / ").concat(t),"\uff09"]}),(0,i.jsx)(F,{className:"m-2",friendAreas:n})]})}le.getInitialProps=(re=o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{curtFriendsNum:M.filter((function(e){return e.nickname.length>0})).length,totalFriendsNum:M.length,friendAreas:s.map((function(e){var n=M.filter((function(n){return e.pokemons.includes(n.name)}));return ae({},e,{friendPokemons:n.filter((function(e){return e.nickname.length>0})),othersPokemons:n.filter((function(e){return 0===e.nickname.length})),lookBackVideo:e.lookBackVideoNo&&J[e.lookBackVideoNo-1]})}))});case 1:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(r,t){var o=re.apply(e,n);function i(e){oe(o,r,t,i,a,"next",e)}function a(e){oe(o,r,t,i,a,"throw",e)}i(void 0)}))}),le.layout=l.Z}},function(e){e.O(0,[686,271,989,66,325,389,226,148,338,774,888,179],(function(){return n=5073,e(e.s=n);var n}));var n=e.O();_N_E=n}]);