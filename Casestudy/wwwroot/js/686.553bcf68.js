"use strict";(self["webpackChunkcasestudy"]=self["webpackChunkcasestudy"]||[]).push([[686],{5572:(e,t,s)=>{s.d(t,{C:()=>n,_:()=>r});const a="/api/",r=async e=>{let t,s=o();try{let r=await fetch(`${a}${e}`,{method:"GET",headers:s});t=await r.json()}catch(r){console.log(r),t={error:`Error has occured: ${r.message}`}}return t},n=async(e,t)=>{let s,r=o();try{let n=await fetch(`${a}${e}`,{method:"POST",headers:r,body:JSON.stringify(t)});s=await n.json()}catch(n){s=n}return s},o=()=>{const e=new Headers,t=JSON.parse(sessionStorage.getItem("customer"));return t?(e.append("Content-Type","application/json"),e.append("Authorization","Bearer "+t.token)):e.append("Content-Type","application/json"),e}},9686:(e,t,s)=>{s.r(t),s.d(t,{default:()=>S});var a=s(9835),r=s(6970);const n={class:"text-center"},o=["src"],l={class:"text-center"},i=["src"],d={class:"text-title2 text-center text-positive text-bold q-mt-sm"};function u(e,t,s,u,m,p){const c=(0,a.up)("q-avatar"),g=(0,a.up)("q-input"),w=(0,a.up)("q-btn"),h=(0,a.up)("q-form"),y=(0,a.up)("q-card"),f=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("body",null,[(0,a._)("div",n,[(0,a.Wm)(c,{style:{height:"70px",width:"110px","margin-top":"20px"}},{default:(0,a.w5)((()=>[(0,a._)("img",{src:"/img/Laptop.png"},null,8,o)])),_:1})]),(0,a._)("div",l,[(0,a.Wm)(c,{style:{height:"120px",width:"220px","margin-top":"-4px"}},{default:(0,a.w5)((()=>[(0,a._)("img",{src:"/img/login.jpg"},null,8,i)])),_:1})]),(0,a._)("div",d,(0,r.zw)(u.state.status),1),(0,a.Wm)(y,{class:"q-ma-md q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{ref:"myForm",class:"q-gutter-md",greedy:"",onSubmit:u.login,onReset:u.resetFields},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{outlined:"",placeholder:"enter email address",id:"email",modelValue:u.state.email,"onUpdate:modelValue":t[0]||(t[0]=e=>u.state.email=e),rules:[u.isRequired,u.isValidEmail]},null,8,["modelValue","rules"]),(0,a.Wm)(g,{outlined:"",placeholder:"enter password",id:"password",type:"password",modelValue:u.state.password,"onUpdate:modelValue":t[1]||(t[1]=e=>u.state.password=e),rules:[u.isRequired],autocomplete:"on"},null,8,["modelValue","rules"]),(0,a.Wm)(w,{rounded:"",label:"Sign in",type:"submit",color:"info"}),(0,a.Wm)(w,{rounded:"",label:"Reset",type:"reset"})])),_:1},8,["onSubmit","onReset"])])),_:1}),(0,a.Wm)(f)])}var m=s(499),p=s(5572),c=s(8910);const g={setup(){const e=(0,c.tv)(),t=(0,c.yj)();let s=(0,m.qj)({status:"",email:"e@here.com",password:"Abc1234?"});const a=e=>{const t=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return t.test(e)||"Invalid email"},r=e=>!!e||"field is required",n=async()=>{s.status="logging into server";let a={firstname:s.firstname,lastname:s.lastname,email:s.email,password:s.password};try{await sessionStorage.removeItem("customer");let r=await(0,p.C)("login",a);-1!==r.token.indexOf("failed")?s.status=r.token:(s.status="logged in",await sessionStorage.setItem("customer",JSON.stringify(r)),t.query.nextUrl?e.push(t.query.nextUrl):e.push({path:"/"}))}catch(r){s.status=r.message}},o=()=>{s.firstname="",s.lastname="",s.email="",s.password="",s.status=""};return{state:s,login:n,isValidEmail:a,isRequired:r,resetFields:o}}};var w=s(1639),h=s(1357),y=s(4458),f=s(8326),q=s(6611),x=s(4455),v=s(9984),b=s.n(v);const _=(0,w.Z)(g,[["render",u]]),S=_;b()(g,"components",{QAvatar:h.Z,QCard:y.Z,QForm:f.Z,QInput:q.Z,QBtn:x.Z})}}]);