(this["webpackJsonpstore-app"]=this["webpackJsonpstore-app"]||[]).push([[0],{44:function(e){e.exports=JSON.parse('{"top50":"Top 50 Coins","rank":"Rank","image":"Image","coin":"Coin","symbol":"Symbol","price":"Price","change_in_1h":"1h","change_in_24h":"24h","marketCap":"MarketCap","search":"Search"}')},45:function(e){e.exports=JSON.parse('{"top50":"50 \u05d4\u05de\u05d8\u05d1\u05e2\u05d5\u05ea \u05d4\u05de\u05d5\u05d1\u05d9\u05dc\u05d9\u05dd","rank":"\u05d3\u05d9\u05e8\u05d5\u05d2","image":"\u05ea\u05de\u05d5\u05e0\u05d4","coin":"\u05de\u05d8\u05d1\u05e2","symbol":"\u05e1\u05de\u05dc","price":"\u05de\u05d7\u05d9\u05e8","change_in_1h":"1 \u05e9\u05e2\u05d4","change_in_24h":"24 \u05e9\u05e2\u05d5\u05ea","marketCap":"\u05e9\u05d5\u05d5\u05d9 \u05e9\u05d5\u05e7","search":"\u05dc\u05d7\u05e4\u05e9"}')},71:function(e,t,a){"use strict";a.r(t);var c,n=a(0),r=a.n(n),s=a(26),i=a(20),l=a(24),o=a(12),d=a(34),j=a.n(d),h=a(40),b=Object(l.b)("coins/getCoins",Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.coingecko.com/api/v3/coins/").then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))),u=Object(l.c)({name:"coins",initialState:{coins:[],status:null},reducers:{},extraReducers:(c={},Object(o.a)(c,b.pending,(function(e,t){e.status="loading"})),Object(o.a)(c,b.fulfilled,(function(e,t){var a=t.payload;e.coins=a,e.status="success"})),Object(o.a)(c,b.rejected,(function(e,t){e.status="failed"})),c)}).reducer,m=Object(l.a)({reducer:{coins:u}}),x=a(19),O=a(7),p=a(37),g=a(8);var f=a(33),k=a(25),v=a(43),_=a(44),w=a(45);f.a.use(v.a).use(k.e).init({returnEmptyString:!1,resources:{en:{translation:_},he:{translation:w}},lng:"en",fallbackLng:"en",interpolation:{escapeValue:!1}});var y=a(87),z=a(84),C=a(81),N=a(82),S=a(49),F=a(80),I=a(88),M=a(50),T=a(85),A=a(83),L=a(1),E=Object(L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-down-up",viewBox:"0 0 16 16",children:Object(L.jsx)("path",{d:"M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"})}),B=Object(L.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-moon-stars",viewBox:"0 0 16 16",children:[Object(L.jsx)("path",{d:"M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"}),Object(L.jsx)("path",{d:"M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"})]}),D=Object(L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"white",className:"bi bi-sun",viewBox:"0 0 16 16",children:Object(L.jsx)("path",{d:"M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"})}),$=Object(z.a)({container:function(e){var t=e.theme;return{background:"dark"===t?"#343a40":"#f8f9fa",color:"dark"===t?"#343a40":"#f8f9fa",display:" flex",flexDirection:"column",alignItems:"center",fontSize:"14px"}},title:function(e){return{marginTop:"2rem",color:"dark"===e.theme?"#f8f9fa":"#343a40",fontSize:"18px"}},table:{marginTop:"2rem",textAlgin:"center"},sort:{border:"none",textAlgin:"center"},spinner:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},input:{width:"10rem",marginTop:"1rem"},notFound:{height:"85vh",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px",fontWeight:600},select:{width:"7rem",marginTop:"1rem"},btn:{marginTop:"1rem"},responsive:{display:"block",width:"70%",overflowX:"auto"}}),J=Object.freeze({asc:"asc",desc:"deck"});function R(){var e=Object(y.a)().t,t=function(){var e=Object(n.useState)("light"),t=Object(g.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){c(localStorage.getItem("theme"))}),[]),Object(n.useEffect)((function(){localStorage.setItem("theme",a)}),[a]),{theme:a,toggleTheme:function(){c("dark"===a?"light":"dark")}}}(),a=t.theme,c=t.toggleTheme,r=Object(n.useState)(""),s=Object(g.a)(r,2),l=s[0],o=s[1],d=Object(n.useState)(J.asc),j=Object(g.a)(d,2),h=j[0],u=j[1],m=Object(x.b)(),O=Object(x.c)((function(e){return e.coins})).coins,k=Object(n.useState)([]),v=Object(g.a)(k,2),_=v[0],w=v[1],z=Object(n.useState)(!1),R=Object(g.a)(z,2),V=R[0],W=R[1],H=$({theme:a});Object(n.useEffect)((function(){w(O),W(!1)}),[O]),Object(n.useEffect)((function(){W(!0),m(b()),setInterval((function(){m(b())}),6e4)}),[m]);var P=function(e,t){var a;return t.forEach((function(c,n){a=n?a[t[n]]:e[t[n]]})),a},U=function(e){var t=Object(p.a)(O);"string"===typeof P(t,[0].concat(Object(p.a)(e)))?t.sort((function(t,a){var c=P(t,e).localeCompare(P(a,e));return h===J.asc?c:-c})):t.sort((function(t,a){var c=P(t,e)-P(a,e);return h===J.desc?c:-c})),w(t),u(h===J.asc?J.desc:J.asc)},X=_.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return V?Object(L.jsx)("div",{className:H.spinner,children:Object(L.jsx)(F.a,{animation:"border",role:"status"})}):Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(C.a,{fluid:!0,className:H.container,children:[Object(L.jsxs)(N.a,{children:[Object(L.jsx)(S.a,{children:Object(L.jsx)(I.a,{variant:"dark"===a?"dark":"light",size:"sm",type:"button",onClick:c,className:H.btn,children:"dark"===a?D:B})}),Object(L.jsx)(S.a,{children:Object(L.jsx)(M.a,{className:H.input,size:"sm",type:"text",placeholder:e("search"),onChange:function(e){o(e.target.value)}})}),Object(L.jsx)(S.a,{children:Object(L.jsxs)(T.a.Select,{className:H.select,size:"sm",onChange:function(e){e.preventDefault(),"he"===e.target.value?document.body.dir=f.a.dir("he"):document.body.dir=f.a.dir("en"),f.a.changeLanguage(e.target.value)},children:[Object(L.jsx)("option",{value:"en",children:"English"}),Object(L.jsx)("option",{value:"he",children:"\u05e2\u05d1\u05e8\u05d9\u05ea"})]})})]}),X.length&&Object(L.jsx)("div",{className:H.title,children:e("top50")}),Object(L.jsx)("div",{className:H.responsive,children:Object(L.jsxs)(A.a,{variant:"dark"===a?"dark":"light",className:H.table,hover:!0,bordered:!0,children:[X.length?Object(L.jsx)("thead",{children:Object(L.jsxs)("tr",{children:[Object(L.jsxs)("th",{children:[e("rank")," ",Object(L.jsx)("br",{}),Object(L.jsx)(I.a,{size:"sm",variant:"dark"===a?"dark":"light",className:H.sort,onClick:function(){return U(["market_data","market_cap_rank"])},children:E})," "]}),Object(L.jsxs)("th",{children:[e("coin")," ",Object(L.jsx)("br",{}),Object(L.jsx)(I.a,{size:"sm",variant:"dark"===a?"dark":"light",className:H.sort,onClick:function(){return U(["symbol"])},children:E})]}),Object(L.jsxs)("th",{children:[e("price")," ",Object(L.jsx)("br",{}),Object(L.jsx)(I.a,{size:"sm",variant:"dark"===a?"dark":"light",className:H.sort,onClick:function(){return U(["market_data","current_price","usd"])},children:E})]}),Object(L.jsxs)("th",{children:[e("change_in_1h")," ",Object(L.jsx)("br",{}),Object(L.jsx)(I.a,{size:"sm",variant:"dark"===a?"dark":"light",className:H.sort,onClick:function(){return U(["market_data","price_change_percentage_1h_in_currency","usd"])},children:E})]}),Object(L.jsxs)("th",{children:[e("change_in_24h")," ",Object(L.jsx)("br",{}),Object(L.jsx)(I.a,{size:"sm",variant:"dark"===a?"dark":"light",className:H.sort,onClick:function(){return U(["market_data","price_change_percentage_24h"])},children:E})]}),Object(L.jsxs)("th",{children:[e("marketCap")," ",Object(L.jsx)("br",{}),Object(L.jsx)(I.a,{size:"sm",variant:"dark"===a?"dark":"light",className:H.sort,onClick:function(){return U(["market_data","market_cap_rank"])},children:E})]})]})}):null,Object(L.jsx)("tbody",{children:X.length?X.map((function(e,t){var a=e.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2),c=e.market_data.price_change_percentage_24h.toFixed(2);return Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{children:e.market_data.market_cap_rank}),Object(L.jsxs)("td",{children:[Object(L.jsx)(i.b,{to:"/".concat(e.id),children:Object(L.jsx)("img",{src:e.image.thumb,alt:""})},t),"\xa0\xa0",Object(L.jsx)("span",{children:e.symbol.toUpperCase()})]}),Object(L.jsxs)("td",{children:["$",e.market_data.current_price.usd.toFixed(2)]}),Object(L.jsxs)("td",{style:{color:a>0?"green":"red"},children:[a,"%"]}),Object(L.jsxs)("td",{style:{color:c>0?"green":"red"},children:[c,"%"]}),Object(L.jsxs)("td",{children:["$",e.market_data.market_cap.usd.toLocaleString()]})]},t)})):Object(L.jsx)("div",{className:H.notFound,children:"Currency not found"})})]})})]})})}var V=a(86),W=a(89),H=Object(z.a)({container:{width:"75vw",height:"75vh",display:"flex",alignItems:"center",justifyContent:"center",direction:"ltr"},card:{width:"18rem",boxShadow:"0px 10px 30px 0px"},current:{marginTop:"0.3rem",marginBottom:"0.7rem",fontSize:"20px",fontWeight:600},progress:{width:"16rem",height:"10px",backgroundColor:"#D3D3D3"},range:{display:"flex",justifyContent:"space-between",marginTop:"0.3rem",fontSize:"12px",fontWeight:600}});function P(){var e=H(),t=Object(x.b)(),a=Object(x.c)((function(e){return e.coins})).coins;Object(n.useEffect)((function(){t(b())}),[t]);var c=Object(O.g)();return Object(L.jsx)(C.a,{className:e.container,children:Object(L.jsx)(N.a,{children:Object(L.jsx)(S.a,{children:Object(L.jsx)(V.a,{className:e.card,children:a.filter((function(e){return e.id===c.coinId})).map((function(t,a){var c=t.market_data.price_change_percentage_24h.toFixed(2),n=t.market_data.current_price.usd.toFixed(2),r=t.market_data.high_24h.usd.toFixed(2),s=t.market_data.low_24h.usd.toFixed(2);return Object(L.jsx)(V.a.Body,{children:Object(L.jsxs)("div",{style:{textAlign:"left"},children:[Object(L.jsxs)(V.a.Title,{children:["Rank ",t.market_data.market_cap_rank]}),Object(L.jsx)("img",{src:t.image.thumb,alt:""})," ",t.name," (",t.symbol,")",Object(L.jsxs)("div",{className:e.current,children:["$",n,"\xa0",Object(L.jsxs)("span",{style:{fontSize:"14px",color:c>0?"green":"red"},children:[c,"%"]})]}),Object(L.jsx)(W.a,{className:e.progress,variant:"warning",min:s,now:n,max:r}),Object(L.jsxs)("div",{className:e.range,children:["$",t.market_data.low_24h.usd.toFixed(2),Object(L.jsx)("span",{children:"24H Range"}),Object(L.jsxs)("span",{children:["$",t.market_data.high_24h.usd.toFixed(2)]})]})]})},a)}))})})})})}function U(){return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(O.c,{children:[Object(L.jsx)(O.a,{path:"/",element:Object(L.jsx)(R,{})}),Object(L.jsx)(O.a,{path:":coinId",element:Object(L.jsx)(P,{})})]})})}a(70);var X=document.getElementById("root");Object(s.render)(Object(L.jsx)(r.a.StrictMode,{children:Object(L.jsx)(i.a,{basename:"crypto-react-redux",children:Object(L.jsx)(x.a,{store:m,children:Object(L.jsx)(U,{})})})}),X)}},[[71,1,2]]]);
//# sourceMappingURL=main.32efb62a.chunk.js.map