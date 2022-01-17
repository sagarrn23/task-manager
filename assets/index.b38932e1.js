var L=Object.defineProperty,j=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var _=(t,e,s)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,d=(t,e)=>{for(var s in e||(e={}))R.call(e,s)&&_(t,s,e[s]);if(E)for(var s of E(e))U.call(e,s)&&_(t,s,e[s]);return t},c=(t,e)=>j(t,O(e));import{v as S,r as g,j as a,R as b,F as D,f as $,a as u,b as B,c as K,d as F,e as z,g as H,P as J,C as W,D as G,h as I,i as q,S as V,k as A,l as Q,m as X,L as Y,n as Z,N as ee,o as te,p as ae,q as se,s as re,t as ne,B as oe}from"./vendor.4c8fb3d1.js";const le=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}};le();const P=t=>{localStorage.setItem("tasksDB",JSON.stringify(t))},de=(t,e)=>c(d({},t),{tasks:e}),ie=(t,e,s)=>{const r=[...t.tasks].map(o=>(o.id===s&&(o.status=e),o));return P(r),c(d({},t),{tasks:r})},ce=(t,e)=>c(d({},t),{modalState:e}),ue=(t,e)=>c(d({},t),{menuPanelState:e}),me=(t,e)=>{const s=[...t.tasks];return s.push(e),c(d({},t),{tasks:s})},pe=(t,e)=>{const s=[...t.tasks].map(n=>n.id===e.id?e:n);return c(d({},t),{tasks:s})},fe=(t,e)=>c(d({},t),{modalData:d({},e)}),he=(t,e)=>c(d({},t),{updating:e}),ge=(t,e,s)=>{let n=[...t.tasks];return e&&s?n=t.tasks.filter(r=>+r.userId==+s):n=[...t.allTasks],c(d({},t),{allTasks:[...t.tasks],tasks:n})},xe=(t,e)=>{const s=[...t.tasks].filter(n=>n.id!==e);return c(d({},t),{tasks:s})},C={modalState:!1,updating:!1,menuPanelState:!0,modalData:{title:"",description:"",images:[],id:S(),status:"to-do",dueDate:"",userId:""},tasks:[],allTasks:[]},be=(t,e)=>{switch(e.type){case"GET_STORED_TASKS":return de(t,e.data);case"UPDATE_STATUS":return ie(t,e.newStatus,e.taskId);case"SET_MODAL_STATE":return ce(t,e.modalDisplay);case"SET_MENU_PANEL_STATE":return ue(t,e.menuPanelDisplay);case"ADD_NEW_TASK":return me(t,e.newTask);case"UPDATE_TASK":return pe(t,e.updateTask);case"SET_MODAL_DATA":return fe(t,e.updatedData);case"TASK_EDIT_STATUS":return he(t,e.value);case"FILTER_TASKS":return ge(t,e.isChecked,e.userId);case"REMOVE_TASK":return xe(t,e.taskId);default:return t}},k=g.exports.createContext(C),{Provider:Te}=k,ve=({children:t})=>{const[e,s]=g.exports.useReducer(be,C);return a(Te,{value:{state:e,dispatch:s},children:t})};function ke(){const t=g.exports.useContext(k),{dispatch:e,state:s}=t;return a("div",{className:"fixed rounded-full bg-teal-400 hover:bg-teal-500 transition-all right-[2rem] bottom-[2rem] w-14 h-14 text-white flex justify-center items-center cursor-pointer drop-shadow-md",onClick:()=>{e({type:"SET_MODAL_STATE",modalDisplay:!0}),e({type:"TASK_EDIT_STATUS",value:!1}),e({type:"SET_MODAL_DATA",updatedData:{title:"",description:"",images:[],id:S(),status:"to-do",dueDate:"",userId:"1"}})},children:a(D,{icon:$,size:"1x"})})}var De=b.memo(ke),M=[{id:1,firstName:"sagar",lastName:"chaudhari",avatar:"https://randomuser.me/api/portraits/men/41.jpg"},{id:2,firstName:"shailu",lastName:"gadekar",avatar:"https://randomuser.me/api/portraits/men/10.jpg"},{id:3,firstName:"jidnesh",lastName:"patil",avatar:"https://randomuser.me/api/portraits/men/30.jpg"},{id:4,firstName:"priti",lastName:"patil",avatar:"https://randomuser.me/api/portraits/women/72.jpg"},{id:5,firstName:"namrata",lastName:"kulkarni",avatar:"https://randomuser.me/api/portraits/women/40.jpg"}];function Ne({provided:t,item:e,snapshot:s}){const n=g.exports.useContext(k),{dispatch:r,state:o}=n,m=()=>{r({type:"SET_MODAL_STATE",modalDisplay:!0}),r({type:"TASK_EDIT_STATUS",value:!0});const i=o.tasks.filter(p=>p.id===e.id)[0];r({type:"SET_MODAL_DATA",updatedData:d({},i)})},h=i=>M.filter(T=>T.id===+i)[0].avatar,f=(i,p,T="bg-stone-200")=>{const x=`py-1 px-2 ${T} text-black flex gap-1 justify-center items-center rounded-default`;return p?u("span",{className:x,children:[a(D,{icon:i,size:"sm"}),p]}):null},v=i=>{const p=i.split("-"),T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],x=new Date(+p[0],p[1]-1,+p[2]);return x.getDate()?`${T[x.getMonth()]}, ${x.getDate()}`:null},N=({status:i,dueDate:p})=>{if(i==="done")return"bg-blue";const T=p.split("-"),x=+new Date(+T[0],T[1]-1,+T[2]);return x<+new Date?"bg-red":x-+new Date>864e5*7?"bg-yellow":x-+new Date>864e5*2?"bg-orange":"bg-stone-200"},l=(i,p)=>{i.stopPropagation(),r({type:"REMOVE_TASK",taskId:p})};return u("div",c(d(d({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{className:"group relative bg-stone-50 rounded-default drop-shadow-xl mb-4 p-3 hover:cursor-pointer",onClick:m,children:[a("p",{className:"text-black font-bold capitalize",children:e.title}),a("span",{className:"absolute right-[0.75rem] top-[0.75rem] md:hidden group-hover:inline transition-all text-red",children:a(D,{icon:B,size:"sm",onClick:i=>l(i,e.id)})}),e.images.length?a("div",{className:"my-4 -mx-3",children:a("img",{src:e.images[0],alt:"Task attachment",className:"w-full max-h-[300px] object-cover object-top"})}):null,u("div",{className:"flex justify-between mt-4",children:[u("div",{className:"flex gap-2",children:[f(e.status==="done"?K:F,v(e.dueDate),N(e)),f(z,e.images.length),f(H,"5")]}),a("div",{className:"w-[30px]",children:a("img",{className:"w-full rounded-default",src:h(e.userId),alt:"User Image"})})]})]}))}var Se=b.memo(Ne);function ye({item:t,index:e}){return a(J,{draggableId:t.id,index:e,children:(s,n)=>a(Se,{provided:s,item:t,snapshot:n})})}var we=b.memo(ye);function Ae({columnId:t,column:e}){return a(W,{droppableId:t,children:(s,n)=>u("div",c(d({},s.droppableProps),{ref:s.innerRef,className:"md:h-full w-full",children:[e.items.map((r,o)=>a(we,{item:r,index:o},r.id)),s.placeholder]}))},t)}var Ee=b.memo(Ae);const _e=(t,e,s,n)=>{if(!t.destination)return;const{draggableId:r,source:o,destination:m}=t;if(o.droppableId!==m.droppableId&&n({type:"UPDATE_STATUS",newStatus:e[m.droppableId].key,taskId:r}),o.droppableId!==m.droppableId){const h=e[o.droppableId],f=e[m.droppableId],v=[...h.items],N=[...f.items],[l]=v.splice(o.index,1);N.splice(m.index,0,l),s(c(d({},e),{[o.droppableId]:c(d({},h),{items:v}),[m.droppableId]:c(d({},f),{items:N})}))}else{const h=e[o.droppableId],f=[...h.items],[v]=f.splice(o.index,1);f.splice(m.index,0,v),s(c(d({},e),{[o.droppableId]:c(d({},h),{items:f})}))}},Ie=()=>{const t=g.exports.useContext(k),{dispatch:e,state:s}=t,n=h=>s.tasks.filter(f=>f.status===h),r={1:{name:"To do",key:"to-do",items:n("to-do")},2:{name:"In Progress",key:"in-progress",items:n("in-progress")},3:{name:"In Review",key:"in-review",items:n("in-review")},4:{name:"Done",key:"done",items:n("done")}},[o,m]=g.exports.useState({});return g.exports.useEffect(()=>{m(r)},[s]),a("div",{className:"flex flex-col gap-y-4 md:flex-row overflow-auto min-h-full",children:a(G,{onDragEnd:h=>_e(h,o,m,e),children:Object.entries(o).map(([h,f],v)=>u("div",{className:"flex flex-col items-center py-2 mx-2 grow-1 md:min-w-[340px] md:max-w-[340px] bg-teal-100 rounded-lg min-h-[100px]",children:[a("h2",{className:"text-left w-full px-2 font-bold",children:f.name}),a("div",{className:"p-2 h-full w-full flex flex-1",children:a(Ee,{columnId:h,column:f})})]},h))})})};var Pe=b.memo(Ie);const Ce=document.getElementById("modal-root"),Me=()=>{const t=g.exports.useContext(k),{dispatch:e,state:s}=t,n=()=>{e({type:"SET_MODAL_STATE",modalDisplay:!1})},r=(l,i)=>{e({type:"SET_MODAL_DATA",updatedData:c(d({},s.modalData),{[i]:l})})},o=l=>{let i=l.target.selectedIndex,p=l.target.childNodes[i].getAttribute("data-id");r(p,"userId"),N(l.target.value)},m=async()=>{await e({type:"ADD_NEW_TASK",newTask:d({},s.modalData)}),n()},h=async()=>{await e({type:"UPDATE_TASK",updateTask:d({},s.modalData)}),n()},f=async l=>{const i=l.target.files,p=[],T=async x=>new Promise((y,Ye)=>{var w=new FileReader;w.onload=()=>{y(w.result)},w.readAsDataURL(x)});for(const x of i)await T(x).then(y=>{p.push(y)});r(p,"images")};g.exports.useEffect(()=>{P(s.tasks),console.log(s.tasks)},[s.tasks]);const[v,N]=g.exports.useState("");return I.createPortal(a("div",{className:"fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-50",children:u("div",{className:"w-[320px] md:min-h-[400px] md:w-[500px] absolute top-[50%] left-[50%] flex flex-col justify-top items-top bg-stone-50 rounded-default -translate-x-2/4 -translate-y-2/4 gap-4 p-4 pt-16 border-default border-stone-400 drop-shadow-xl",children:[u("div",{className:"w-full flex flex-col",children:[a("label",{className:"font-bold",htmlFor:"title",children:"Title"}),a("input",{id:"title",type:"text",value:s.modalData.title,onChange:l=>r(l.target.value,"title"),className:"bg-stone-200 border-default border-stone-400 rounded-sm leading-normal p-2 outline-none"})]}),u("div",{className:"w-full flex flex-col",children:[a("label",{className:"font-bold",htmlFor:"description",children:"Description"}),a("textarea",{name:"description",id:"description",value:s.modalData.description,onChange:l=>r(l.target.value,"description"),className:"bg-stone-200 border-default border-stone-400 rounded-sm leading-normal p-2 resize-none outline-none"})]}),u("div",{className:"w-full flex flex-col",children:[a("label",{className:"font-bold",htmlFor:"images",children:"Images"}),a("input",{type:"file",id:"images",name:"img",accept:"image/*",className:"cursor-pointer",multiple:"multiple",onChange:l=>f(l)}),a("div",{className:"grid gap-2 grid-cols-4 mt-2",children:s.modalData.images.map((l,i)=>a("div",{className:"h-m max-h-[4rem]",children:a("img",{src:l,alt:"",className:"w-full h-full object-cover object-top"})},S()))})]}),u("div",{className:"w-full flex flex-col",children:[a("label",{className:"font-bold",htmlFor:"user",children:"Assign to"}),a("select",{name:"user",id:"user",className:"bg-stone-200 border-default border-stone-400 rounded-sm leading-normal p-2 cursor-pointer",onChange:l=>o(l),value:v,selected:v,children:M.map(l=>a("option",{"data-id":l.id,value:l.firstName,children:l.firstName},S()))})]}),u("div",{className:"w-full flex flex-col",children:[a("label",{className:"font-bold",htmlFor:"title",children:"Due Date"}),a("input",{id:"title",type:"date",value:s.modalData.dueDate,onChange:l=>r(l.target.value,"dueDate"),className:"bg-stone-200 border-default border-stone-400 rounded-sm leading-normal p-2 outline-none"})]}),a("div",{className:"w-full flex flex-col",children:a("button",{className:"py-4 px-8 bg-teal-400 text-white hover:bg-teal-500 font-bold",onClick:s.updating?h:m,disabled:!s.modalData.title.length,style:{backgroundColor:s.modalData.title.length?null:"#eee"},children:s.updating?"Update Task":"Add Task"})}),a(D,{icon:q,size:"2x",className:"text-stone-500 cursor-pointer absolute top-[1rem] right-[1rem]",onClick:n})]})}),Ce)};var Le=b.memo(Me);function je(){const t=g.exports.useContext(k),{dispatch:e,state:s}=t,n=r=>{e({type:"FILTER_TASKS",isChecked:r,userId:"1"})};return u("div",{className:"m-2 mb-8 flex justify-end items-center",children:[a("label",{className:"cursor-pointer",htmlFor:"check",children:"Show my tasks only"}),a("input",{className:"ml-2 cursor-pointer",type:"checkbox",name:"",id:"check",onChange:r=>n(r.target.checked)})]})}function Oe(){const t=g.exports.useContext(k),{dispatch:e,state:s}=t;return u("div",{className:"p-4 grow-1  h-screen overflow-auto",children:[a(je,{}),a(Pe,{}),a(De,{}),s.modalState?a(Le,{}):null]})}var Re=b.memo(Oe);function Ue(){return a("h1",{className:"font-bold text-5xl",children:"TASK MANAGER"})}var $e=b.memo(Ue);function Be(){return a("div",{className:"flex justify-center items-center h-full",children:a($e,{})})}var Ke=b.memo(Be);const Fe=()=>u(V,{children:[a(A,{path:"/board",component:Re}),a(A,{exact:!0,path:"/",component:Ke}),a(A,{path:"*",children:a(Q,{to:"/"})})]});function ze(){const t=g.exports.useContext(k),{dispatch:e,state:s}=t;return u("div",{className:"text-center text-xl font-bold p-2 border-b-2 border-b-solid border-b-teal-400 relative",children:[a(D,{icon:X,size:"1x",className:"absolute left-[1rem] top-[50%] -translate-y-[50%] cursor-pointer",onClick:()=>{e({type:"SET_MENU_PANEL_STATE",menuPanelDisplay:!s.menuPanelState})}}),"Task Board"]})}var He=b.memo(ze);const Je=[{icon:te,route:"/"},{icon:ae,route:"/board"},{icon:se,route:"/"},{icon:re,route:"/"},{icon:ne,route:"/"}];function We(){return u("div",{className:"h-full flex justify-center items-center	bg-teal-400 flex-col p-2",children:[a(Y,{to:"/",className:"p-2 mb-2",children:a(D,{icon:Z,size:"2x",inverse:!0,fixedWidth:!0})}),Je.map(t=>a(ee,{to:t.route,exact:!0,className:e=>"p-2 mb-2 hover:bg-teal-500 hover:rounded-lg "+(e?"bg-teal-500 rounded-lg":""),children:a(D,{icon:t.icon,size:"2x",inverse:!0,fixedWidth:!0})},S()))]})}var Ge=b.memo(We);function qe(){const t=g.exports.useContext(k),{state:e}=t;return u("div",{className:"w-screen h-screen flex overflow-hidden bg-stone-50",children:[a("div",{className:"h-full w-[5%] min-w-[80px] transition-all",style:{display:e.menuPanelState?"block":"none"},children:a(Ge,{})}),u("div",{style:{width:e.menuPanelState?"95%":"100%"},className:"w-[95%] flex flex-col",children:[a(He,{}),a(Fe,{})]})]})}var Ve=b.memo(qe);const Qe=()=>{const t=localStorage.getItem("tasksDB");return JSON.parse(t)};function Xe(){const t=g.exports.useContext(k),{dispatch:e,state:s}=t;return g.exports.useEffect(()=>{const n=Qe();n&&e({type:"GET_STORED_TASKS",data:n})},[]),a(oe,{children:a(Ve,{})})}I.render(a(ve,{children:a(b.StrictMode,{children:a(Xe,{})})}),document.getElementById("root"));
