(window["webpackJsonpig-react-starter"]=window["webpackJsonpig-react-starter"]||[]).push([[3],{121:function(e,n,t){e.exports=t.p+"static/media/version-icon.33d62ed9.svg"},122:function(e,n,t){e.exports=t.p+"static/media/author-icon.46001f4c.svg"},124:function(e,n,t){e.exports=t.p+"static/media/swap-icon.12e46e00.svg"},125:function(e,n,t){e.exports=t.p+"static/media/download-icon.2b4d5ffa.svg"},127:function(e,n,t){"use strict";t.r(n);var r=t(120),a=t(27),i=t(0),c=t.n(i),o=t(37),u=t(118),l=t(24),s=t(8),d=t(46),f=t(21);function m(){var e=Object(a.a)(["\n  outline: none;\n  border-radius: 0;\n  padding: "," ",";\n  font-size: ",";\n"]);return m=function(){return e},e}var p=f.c.select(m(),function(e){return e.theme.unit.half},function(e){return e.theme.unit.double},function(e){return e.theme.fontSizes.normal}),b=t(47),g=function(e){var n=e.active,t=e.onSetLocale;return c.a.createElement(p,{onChange:function(e){var n=e.target.value;t(n)},value:n},b.languages.map(function(e){var n=e.label,t=e.value;return c.a.createElement("option",{key:t,value:t},n)}))},h=Object(o.b)(function(e){return{active:e.internalization.active}},function(e){return{onSetLocale:function(n){return e(function(e){return{payload:e,type:s.i}}(n))}}})(g),y=t(39);function x(){var e=Object(a.a)(["\n  height: 75px;\n  color: ",";\n  font-size: ",";\n  padding-left: ",";\n  padding-right: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n\n  @media "," {\n    height: 48px;\n    flex-direction: row;\n  }\n\n  ul {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  ul li {\n    font-family: Arial;\n    font-weight: ",";\n    font-size: ",";\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin: 0 0 0 35px;\n    text-align: center;\n  }\n\n  ul li:first-child{\n    opacity: 0.7;\n  }\n\n  ul li:first-child::after{\n    display: inline-block;\n    content: '';\n    height: 12px;\n    width: 1px;\n    background: #FFFFFF;\n    opacity: 0.3;\n    margin: 0 0 0 35px;\n  }\n\n  ul img {\n    opacity: 0.3;\n    padding: 0 8px 0 0;\n  }\n"]);return x=function(){return e},e}var v=f.c.header(x(),function(e){return e.theme.colors.backgroundDark},function(e){return e.theme.fontSizes.weryBig},function(e){return e.theme.unit.quadriple},function(e){return e.theme.unit.quadriple},function(e){return e.theme.unit.double},function(e){return e.theme.unit.double},y.a.tablet,function(e){return e.theme.fontWeights.bold},function(e){return e.theme.fontSizes.werySmall}),j=t(121),O=t.n(j),w=t(122),E=t.n(w),k=function(){return c.a.createElement(v,null,c.a.createElement(h,null),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("img",{src:O.a,alt:"Version"}),c.a.createElement(u.a,{id:"headerVersion"})),c.a.createElement("li",null,c.a.createElement("img",{src:E.a,alt:"Author"}),c.a.createElement(u.a,{id:"headerAuthor"}))))},S=(t(38),function(e){var n=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement(k,null),c.a.createElement("main",null,n))}),V=t(50),_=t(126),z=t(123);function C(){var e=Object(a.a)(["\n  color: ",";\n  background: ",";\n  border-radius: ",";\n  padding: 46px;\n  display: flex;\n  flex-direction: column;\n  margin: 46px 0px;\n  min-width: 200px;\n\n  @media "," {\n    margin: 0 46px;\n  }\n\n  @media "," {\n    min-width: 300px;\n  }\n\n  input, select, .selectBtn {\n    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08);\n    border-radius: ",";\n    border: none;\n    outline: none;\n    padding: 14px;\n  }\n\n  .selectBtn {\n    height: 45px;\n    background: #ffff;\n  }\n\n  .select {\n    margin: 0 0 20px 0;\n\n    ul {\n      border: none;\n      outline: none;\n    }\n  }\n"]);return C=function(){return e},e}var F=f.c.div(C(),function(e){return e.theme.colors.font},function(e){return e.theme.colors.backgroundLight},function(e){return e.theme.unit.single},y.a.laptop,y.a.mobileL,function(e){return e.theme.unit.half}),L=t(57),B=function(e){var n=e.type,t=e.storedValue,a=e.setValue,i=Object(_.a)(),u=i.formatMessage({id:"convert_block_input_placeholder"}),s=i.formatMessage({id:"convert_block_select_placeholder"}),d=Object(o.c)(),f=Object(o.d)(function(e){return e.baseValues[n].type}),m=Object(o.d)(function(e){return e.baseValues[n].value}),p=Object.entries(L.a).find(function(e){var n=Object(r.a)(e,2)[1];return f===n}),b=Object(r.a)(p,1)[0];return c.a.createElement(F,null,c.a.createElement(z.a,{selected:b,onSelect:function(e){return function(e){switch(n){case"primary":a([e,t[1]]),d(Object(l.a)(e));break;case"secondary":a([t[0],e]),d(Object(l.c)(e));break;default:d(Object(l.a)(e))}}(L.a[e])},customLabels:L.a,countries:Object(V.a)(Object.keys(L.a).map(function(e){return e})),selectButtonClassName:"selectBtn",className:"select",searchPlaceholder:s,searchable:!0}),c.a.createElement("input",{type:"text",value:m,onChange:function(e){var t=e.target.value;switch(n){case"primary":d(Object(l.b)(t));break;case"secondary":d(Object(l.d)(t));break;default:d(Object(l.b)(t))}},placeholder:u}))},A=t(48);function D(){var e=Object(a.a)(["\n    padding: ",";\n    font-family: Arial;\n    font-weight: ",";\n    font-size: ",";\n    color: ",";\n    border: none;\n    outline: none;\n    background: ",";\n    border-radius: ",";\n    transition: 0.3s;\n    display: flex;\n    align-items: center;\n\n    &:hover {\n      background: ",";\n      cursor: pointer;\n    }\n"]);return D=function(){return e},e}var J=f.c.button(D(),function(e){return e.padding||e.theme.unit.triple},function(e){return e.theme.fontWeights.normal},function(e){return e.theme.fontSizes.small},function(e){return e.theme.colors.fontLight},function(e){return e.theme.colors.primary},function(e){return e.borderRadius},function(e){return e.theme.colors.secondaryLight}),N=function(e){var n=e.type,t=Object(A.a)(e,["type"]);switch(n){case"Primary":return c.a.createElement(J,Object.assign({borderRadius:"8px",padding:"13px 20px"},t),t.children);case"Circle":return c.a.createElement(J,Object.assign({borderRadius:"180px"},t),t.children);default:return c.a.createElement(J,t)}},R=t(61),P=t(124),q=t.n(P),I=t(125),M=t.n(I);function U(){var e=Object(a.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 70px 0 90px 0;\n  flex-direction: column;\n\n  @media "," {\n    flex-direction: row;\n  }\n"]);return U=function(){return e},e}var W=f.c.div(U(),y.a.laptop),G=function(e){var n=e.update,t=function(e,n){var t=Object(i.useState)(function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):n}catch(r){return console.error(r),n}}),a=Object(r.a)(t,2),c=a[0],o=a[1];return[c,function(n){try{var t=n instanceof Function?n(c):n;o(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(r){console.error(r)}}]}("baseValues"),a=Object(r.a)(t,2),s=a[0],f=a[1],m=Object(o.c)();return Object(i.useEffect)(function(){s?(m(Object(l.a)(s[0])),m(Object(l.c)(s[1]))):R.b.getCurrentCountry().then(function(e){m(Object(l.c)("USD")),m(Object(l.a)(L.a[e.data.country.iso])),f([L.a[e.data.country.iso],"USD"])})},[m,s,f]),c.a.createElement(S,null,c.a.createElement("h1",null,c.a.createElement(u.a,{id:"page_content_title"})),c.a.createElement(W,null,c.a.createElement(B,{type:"primary",setValue:f,storedValue:s}),c.a.createElement(N,{type:"Circle",onClick:function(){m(Object(l.e)())}},c.a.createElement("img",{src:q.a,width:23,height:23,alt:"Swap-icon"})),c.a.createElement(B,{type:"secondary",setValue:f,storedValue:s})),c.a.createElement(N,{type:"Primary",onClick:function(){m(Object(d.a)(L.a)),n()}},c.a.createElement("img",{src:M.a,alt:"Download-icon",style:{marginRight:"10px"}}),c.a.createElement(u.a,{id:"button_cache_text"})))};n.default=G}}]);
//# sourceMappingURL=3.7f3fdcd8.chunk.js.map