(this["webpackJsonpclicker-tutorial"]=this["webpackJsonpclicker-tutorial"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(3),s=c.n(r),l=(c(10),c(4)),o=c(1);const u={clicks:{amount:0},auto:{cost:10,amount:0},double:{cost:20,amount:0},mega:{cost:100,amount:0},ultra:{cost:1e3,amount:0},monster:{cost:1e4,amount:0}},i=(e,t)=>{switch(t.type){case"click":return Object(o.a)({},e,{clicks:Object(o.a)({},e.clicks,{amount:e.clicks.amount+1})});case"increase":return Object(o.a)({},e,{[t.tier]:Object(o.a)({},e[t.tier],{amount:e[t.tier].amount+1}),clicks:{amount:e.clicks.amount-e[t.tier].cost}});case"decrease":return Object(o.a)({},e,{[t.tier]:Object(o.a)({},e[t.tier],{amount:e[t.tier].amount-1}),clicks:{amount:e.clicks.amount+e[t.tier].cost}});case"update":return t.payload===e.clicks.amount?e:Object(o.a)({},e,{clicks:Object(o.a)({},e.clicks,{amount:t.payload})});default:throw new Error}};var m=({amount:e,dispatch:t})=>n.a.createElement("div",{className:"clicker"},n.a.createElement("h1",null,e),n.a.createElement("button",{className:"buy",type:"button",onClick:()=>t({type:"click"})},"click button"));var b=Object(a.memo)(({tier:e,amount:t,cost:c,dispatch:a,enabled:r})=>n.a.createElement("div",{className:"clicker"},n.a.createElement("div",{className:"info"},n.a.createElement("h2",null,`${t} \xd7 ${e}clicker`),n.a.createElement("p",null,`this ${e}clicker buys and sells for ${c}`)),n.a.createElement("button",{className:`buy ${r?void 0:"disabled"}`,type:"button",onClick:()=>a({type:"increase",tier:e})},`buy ${e}clicker`),t>0&&n.a.createElement("button",{className:"sell",type:"button",onClick:()=>a({type:"decrease",tier:e})},"-")));var k=()=>{const e=Object(a.useReducer)(i,u),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(a.useRef)();return Object(a.useEffect)(()=>{s.current=()=>{const e=c.clicks.amount,t=Object.keys(c).reduce((e,t,a)=>0===a?e:e+c[t].amount*(.1*c[t].cost),e);r({type:"update",payload:t})}},[c]),Object(a.useEffect)(()=>{const e=setInterval(()=>s.current(),1e3);return()=>clearInterval(e)},[s]),n.a.createElement("div",{className:"game"},n.a.createElement(m,{amount:c.clicks.amount,dispatch:r}),Object.keys(c).map((e,t)=>{if(0===t)return null;const a=c[e],s=a.cost,l=a.amount;return(c.clicks.amount>=s||l>0)&&n.a.createElement(b,{key:e,tier:e,amount:l,cost:s,enabled:c.clicks.amount>=s,dispatch:r})}))};s.a.render(n.a.createElement(k,null),document.getElementById("root"))},5:function(e,t,c){e.exports=c(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.58b7e190.chunk.js.map