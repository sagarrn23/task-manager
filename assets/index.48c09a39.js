var I=Object.defineProperty,k=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var w=(t,r,o)=>r in t?I(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,m=(t,r)=>{for(var o in r||(r={}))D.call(r,o)&&w(t,o,r[o]);if(N)for(var o of N(r))A.call(r,o)&&w(t,o,r[o]);return t},p=(t,r)=>k(t,P(r));import{R as i,j as e,F as b,f as C,P as E,C as R,a as d,r as f,D as M,b as S,c as $,S as j,d as x,e as B,L as O,g as L,N as F,v as H,h as _,i as z,k as U,l as K,m as G,B as J}from"./vendor.851cc3c7.js";const W=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=o(a);fetch(a.href,n)}};W();function q({setModal:t}){return e("div",{className:"fixed rounded-full bg-teal-400 right-[2rem] bottom-[2rem] w-14 h-14 text-white flex justify-center items-center cursor-pointer drop-shadow-md",onClick:()=>t(!0),children:e(b,{icon:C,size:"1x"})})}var Q=i.memo(q);function V({provided:t,item:r,snapshot:o}){return e("div",p(m(m({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{className:"bg-white rounded-default drop-shadow-xl mb-4 p-2 hover:cursor-pointer",onClick:()=>console.log(r),children:e("p",{className:"text-black font-bold",children:r.title})}))}var X=i.memo(V);function Y({item:t,index:r}){return e(E,{draggableId:t.id,index:r,children:(o,s)=>e(X,{provided:o,item:t,snapshot:s})})}var Z=i.memo(Y);function ee({columnId:t,column:r}){return e(R,{droppableId:t,children:(o,s)=>d("div",p(m({},o.droppableProps),{ref:o.innerRef,className:"h-full",children:[r.items.map((a,n)=>e(Z,{item:a,index:n},a.id)),o.placeholder]}))},t)}var te=i.memo(ee);const re=t=>{localStorage.setItem("tasksDB",JSON.stringify(t))},oe=(t,r)=>r,ne=(t,r,o)=>{const a=[...t].map(n=>(n.id===o&&(n.status=r),n));return re(a),a},y=[],ae=(t,r)=>{switch(r.type){case"GET_STORED_TASKS":return oe(t,r.data);case"UPDATE_STATUS":return ne(t,r.newStatus,r.taskId);default:return t}},g=f.exports.createContext(y),{Provider:se}=g,le=({children:t})=>{const[r,o]=f.exports.useReducer(ae,y);return e(se,{value:{state:r,dispatch:o},children:t})},ie=(t,r,o,s)=>{if(!t.destination)return;const{draggableId:a,source:n,destination:l}=t;if(n.droppableId!==l.droppableId&&s({type:"UPDATE_STATUS",newStatus:r[l.droppableId].key,taskId:a}),n.droppableId!==l.droppableId){const c=r[n.droppableId],u=r[l.droppableId],h=[...c.items],v=[...u.items],[T]=h.splice(n.index,1);v.splice(l.index,0,T),o(p(m({},r),{[n.droppableId]:p(m({},c),{items:h}),[l.droppableId]:p(m({},u),{items:v})}))}else{const c=r[n.droppableId],u=[...c.items],[h]=u.splice(n.index,1);u.splice(l.index,0,h),o(p(m({},r),{[n.droppableId]:p(m({},c),{items:u})}))}},de=()=>{const t=f.exports.useContext(g),{dispatch:r,state:o}=t,s=c=>o.filter(u=>u.status===c),a={1:{name:"To do",key:"to-do",items:s("to-do")},2:{name:"In Progress",key:"in-progress",items:s("in-progress")},3:{name:"In Review",key:"in-review",items:s("in-review")},4:{name:"Done",key:"done",items:s("done")}},[n,l]=f.exports.useState({});return f.exports.useEffect(()=>{l(a)},[o]),e("div",{className:"flex h-full overflow-auto",children:e(M,{onDragEnd:c=>ie(c,n,l,r),children:Object.entries(n).map(([c,u],h)=>d("div",{className:"flex flex-col items-center py-2 mx-2 grow-1 min-w-[340px] max-w-[340px] bg-teal-100 rounded-lg",children:[e("h2",{className:"text-left w-full px-2 font-bold",children:u.name}),e("div",{className:"p-2 h-full w-full",children:e(te,{columnId:c,column:u})})]},c))})})};var ce=i.memo(de);const ue=document.getElementById("modal-root"),me=({setModal:t})=>S.createPortal(d("div",{className:"min-h-[400px] w-[500px] fixed top-[50%] left-[50%] flex flex-col justify-top items-top bg-white rounded-default -translate-x-2/4 -translate-y-2/4 gap-4 p-4 pt-16 border-default border-stone-400 drop-shadow-xl",children:[d("div",{className:"w-full flex flex-col",children:[e("label",{className:"font-bold",htmlFor:"title",children:"Title"}),e("input",{id:"title",type:"text",className:"bg-stone-200 border-default border-stone-400 rounded-sm leading-normal p-2 outline-none"})]}),d("div",{className:"w-full flex flex-col",children:[e("label",{className:"font-bold",htmlFor:"description",children:"Description"}),e("textarea",{name:"description",id:"description",className:"bg-stone-200 border-default border-stone-400 rounded-sm leading-normal p-2 resize-none outline-none"})]}),d("div",{className:"w-full flex flex-col",children:[e("label",{className:"font-bold",htmlFor:"images",children:"Images"}),e("input",{type:"file",id:"images",name:"img",accept:"image/*",className:"cursor-pointer",multiple:"multiple"})]}),d("div",{className:"w-full flex flex-col",children:[e("label",{className:"font-bold",htmlFor:"user",children:"Assign to"}),d("select",{name:"user",id:"user",className:"bg-stone-200 border-default border-stone-400 rounded-sm leading-normal p-2 cursor-pointer",children:[e("option",{value:"Sagar",children:"Sagar"}),e("option",{value:"Shailu",children:"Shailu"}),e("option",{value:"Priti",children:"Priti"}),e("option",{value:"Ajay",children:"Ajay"}),e("option",{value:"Namrata",children:"Namrata"})]})]}),e("div",{className:"w-full flex flex-col",children:e("button",{className:"py-4 px-8 bg-teal-500 text-white hover:bg-teal-400 font-bold",onClick:()=>t(!1),children:"Add Task"})}),e(b,{icon:$,size:"2x",className:"text-stone-500 cursor-pointer absolute top-[1rem] right-[1rem]",onClick:()=>t(!1)})]}),ue);var pe=i.memo(me);function fe(){const[t,r]=f.exports.useState(!1);return d("div",{className:"p-4 grow-1",children:[e(ce,{}),e(Q,{setModal:r}),t?e(pe,{setModal:r}):null]})}var he=i.memo(fe);function be(){return e("h1",{className:"font-bold text-5xl",children:"TASK MANAGER"})}var xe=i.memo(be);function ge(){return e("div",{className:"flex justify-center items-center h-full",children:e(xe,{})})}var ve=i.memo(ge);const Ne=()=>d(j,{children:[e(x,{path:"/board",component:he}),e(x,{exact:!0,path:"/",component:ve}),e(x,{path:"*",children:e(B,{to:"/"})})]});function we(){return e("div",{className:"text-center p-2 border-b-2 border-b-solid border-b-teal-400",children:"Header"})}var Se=i.memo(we);const ye=[{icon:_,route:"/"},{icon:z,route:"/board"},{icon:U,route:"/"},{icon:K,route:"/"},{icon:G,route:"/"}];function Te(){return d("div",{className:"h-full flex justify-center items-center	bg-teal-400 flex-col p-2",children:[e(O,{to:"/",className:"p-2 mb-2",children:e(b,{icon:L,size:"2x",inverse:!0,fixedWidth:!0})}),ye.map(t=>e(F,{to:t.route,exact:!0,className:r=>"p-2 mb-2 "+(r?"bg-teal-500 rounded-lg":""),children:e(b,{icon:t.icon,size:"2x",inverse:!0,fixedWidth:!0})},H()))]})}var Ie=i.memo(Te);function ke(){return d("div",{className:"w-screen h-screen flex",children:[e("div",{className:"h-full w-[5%]",children:e(Ie,{})}),d("div",{className:"w-[95%] flex flex-col",children:[e(Se,{}),e(Ne,{})]})]})}var Pe=i.memo(ke);const De=()=>{const t=localStorage.getItem("tasksDB");return JSON.parse(t)};function Ae(){const t=f.exports.useContext(g),{dispatch:r,state:o}=t;return f.exports.useEffect(()=>{const s=De();r({type:"GET_STORED_TASKS",data:s})},[]),e(J,{children:e(Pe,{})})}S.render(e(le,{children:e(i.StrictMode,{children:e(Ae,{})})}),document.getElementById("root"));
