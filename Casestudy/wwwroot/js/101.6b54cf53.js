"use strict";(self["webpackChunkcasestudy"]=self["webpackChunkcasestudy"]||[]).push([[101],{5572:(e,t,a)=>{a.d(t,{C:()=>o,_:()=>n});const s="/api/",n=async e=>{let t,a=r();try{let n=await fetch(`${s}${e}`,{method:"GET",headers:a});t=await n.json()}catch(n){console.log(n),t={error:`Error has occured: ${n.message}`}}return t},o=async(e,t)=>{let a,n=r();try{let o=await fetch(`${s}${e}`,{method:"POST",headers:n,body:JSON.stringify(t)});a=await o.json()}catch(o){a=o}return a},r=()=>{const e=new Headers,t=JSON.parse(sessionStorage.getItem("customer"));return t?(e.append("Content-Type","application/json"),e.append("Authorization","Bearer "+t.token)):e.append("Content-Type","application/json"),e}},7101:(e,t,a)=>{a.r(t),a.d(t,{default:()=>$});var s=a(9835),n=a(1957);const o={class:"text-center q-mt-md"},r=["src"],d=(0,s._)("div",{class:"text-h5 text-primary text-bold"}," Find 3 Closest Branches To: ",-1),c=(0,s._)("br",null,null,-1),l={style:{height:"50vh",width:"90vw","margin-left":"5vw",border:"solid"},ref:"mapRef"};function i(e,t,a,i,p,u){const h=(0,s.up)("q-avatar"),m=(0,s.up)("q-input"),w=(0,s.up)("q-btn");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s.Wm)(h,{style:{height:"70px",width:"110px","margin-top":"20px"}},{default:(0,s.w5)((()=>[(0,s._)("img",{src:"/img/Laptop.png"},null,8,r)])),_:1}),d,(0,s._)("div",null,[(0,s.Wm)(m,{class:"q-ma-lg text-h5",placeholder:"enter current address",id:"address",modelValue:i.state.address,"onUpdate:modelValue":t[0]||(t[0]=e=>i.state.address=e)},null,8,["modelValue"]),c]),(0,s.Wm)(w,{label:"FIND 3",onClick:i.genMap,class:"q-mb-md text-bold",style:{width:"30vw"}},null,8,["onClick"]),(0,s.wy)((0,s._)("div",l,null,512),[[n.F8,!0===i.state.showmap]])])}var p=a(499),u=a(5572);const h={name:"storedBranch",setup(){const e=(0,p.iH)(null);let t=(0,p.qj)({status:"",address:"",showmap:!1,threeBranches:[]});const a=async()=>{try{t.showmap=!0;const a=window.tt;let s=`https://api.tomtom.com/search/2/geocode/${t.address}.json?key=onbGqyYstDRZDIn424mzUapeOn5G7dYM`,n=await fetch(s),o=await n.json(),r=o.results[0].position.lat,d=o.results[0].position.lon,c=a.map({key:"onbGqyYstDRZDIn424mzUapeOn5G7dYM",container:e.value,source:"vector/1/basic-main",center:[d,r],zoom:8});t.threeBranches=await(0,u._)(`branch/${r}/${d}`),t.threeBranches.forEach((e=>{let t=(new a.Marker).setLngLat([e.longitude,e.latitude]).addTo(c),s=25,n=new a.Popup({offset:s}),o=1.60934*e.distance.toFixed(2);n.setHTML(`<div id="popup">Branch#: ${e.id}</div><div>${e.street}, ${e.city}\n<br/>${o.toFixed(2)} km</div>`),t.setPopup(n)}))}catch(a){t.status=a.message}};return{mapRef:e,state:t,genMap:a}}};var m=a(1639),w=a(1357),y=a(6611),g=a(4455),v=a(9984),f=a.n(v);const b=(0,m.Z)(h,[["render",i]]),$=b;f()(h,"components",{QAvatar:w.Z,QInput:y.Z,QBtn:g.Z})}}]);