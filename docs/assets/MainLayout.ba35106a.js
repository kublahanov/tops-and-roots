import{_ as D,ad as A,c as w,l as y,X as T,f as e,n as l,ar as c,x,t as p,q as v,r as s,aJ as k,w as B,o as F,k as M,m as q,Q as b}from"./index.6f2f8022.js";import{Q as U}from"./QSpace.ff000766.js";import{Q as C,u as $,_ as H,b as I,c as L,d as O}from"./AppSectionsDrawer.0a754498.js";import{Q as Y,a as j}from"./QLayout.1828f55d.js";import{Q as z,_ as E}from"./tops-and-roots_logo_001.7b683758.js";import"./uid.42677368.js";import"./selection.fbfc4f40.js";import"./use-timeout.6094778e.js";import"./use-dark.762201bc.js";import"./scroll.90c5bbdc.js";const J={class:"q-pa-lg"},P={class:"footer-logo column items-center"},R={class:"app-name"},X={class:"copyrights"},G={__name:"MainFooter",props:{color:{type:String,required:!0},sectionName:{type:String,required:!0}},setup(f){A(a=>({"24cc095e":a.textColor}));const t=f,o="\u0412\u0435\u0440\u0448\u043A\u0438 \u0438 \u043A\u043E\u0440\u0435\u0448\u043A\u0438",i="0.1",u=()=>new Date().getFullYear(),m=w(()=>"text-"+t.color);return(a,r)=>(y(),T("footer",J,[e(C,{class:"justify-center my-layout"},{default:l(()=>[c("div",P,[c("div",{class:x(["app-section-name",m.value])},p(t.sectionName),3),e(z,{src:E,width:"100px",height:"100px",alt:v(o)},null,8,["alt"]),c("div",R,p(v(o)),1),c("div",X," \u0412\u0435\u0440\u0441\u0438\u044F "+p(v(i))+", "+p(u())+" \xA9 ",1)])]),_:1})]))}};var K=D(G,[["__scopeId","data-v-4db4c3eb"]]);const ce={__name:"MainLayout",setup(f){const t=s(!1),o=s(!1),i=()=>t.value=!t.value,u=()=>o.value=!o.value,m="\u0412\u0435\u0440\u0448\u043A\u0438 \u0438 \u043A\u043E\u0440\u0435\u0448\u043A\u0438",a=k(),r=s(""),_=s(""),g=s(!1),S=s([]);function h(){r.value=a.getAppSectionName,_.value=a.getAppSectionColor,g.value=a.hasAppSectionTabs,S.value=a.getAppSectionTabs}const Q=w(()=>"bg-"+_.value);return B(()=>a.appSectionData,(V,n)=>{h()}),F(()=>{h(),$(()=>({title:r.value+" | "+m}))}),(V,n)=>{const N=M("router-view");return y(),q(Y,{view:"hHh lpR fFf"},{default:l(()=>[e(I,{elevated:"",class:x(Q.value)},{default:l(()=>[e(C,null,{default:l(()=>[e(b,{dense:"",icon:"menu",onClick:i}),e(U),e(b,{dense:"",icon:"menu",onClick:u})]),_:1}),e(H,{hasTabs:g.value,tabs:S.value},null,8,["hasTabs","tabs"])]),_:1},8,["class"]),e(L,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=d=>t.value=d)},null,8,["modelValue"]),e(O,{modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=d=>o.value=d)},null,8,["modelValue"]),e(j,{class:"my-layout"},{default:l(()=>[e(N)]),_:1}),e(K,{color:_.value,sectionName:r.value},null,8,["color","sectionName"])]),_:1})}}};export{ce as default};
