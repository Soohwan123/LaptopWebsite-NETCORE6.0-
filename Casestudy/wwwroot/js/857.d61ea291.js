"use strict";(self["webpackChunkcasestudy"]=self["webpackChunkcasestudy"]||[]).push([[857],{5572:(e,t,a)=>{a.d(t,{C:()=>r,_:()=>l});const s="https://localhost:7184/api/",l=async e=>{let t,a=n();try{let l=await fetch(`${s}${e}`,{method:"GET",headers:a});t=await l.json()}catch(l){console.log(l),t={error:`Error has occured: ${l.message}`}}return t},r=async(e,t)=>{let a,l=n();try{let r=await fetch(`${s}${e}`,{method:"POST",headers:l,body:JSON.stringify(t)});a=await r.json()}catch(r){a=r}return a},n=()=>{const e=new Headers,t=JSON.parse(sessionStorage.getItem("customer"));return t?(e.append("Content-Type","application/json"),e.append("Authorization","Bearer "+t.token)):e.append("Content-Type","application/json"),e}},4857:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var s=a(9835),l=a(6970);const r=(0,s._)("div",{class:"text-h4 text-center q-mt-md q-mb-md"},"Register",-1),n={class:"text-title2 text-center text-positive text-bold q-mt-sm"};function i(e,t,a,i,o,d){const m=(0,s.up)("q-input"),u=(0,s.up)("q-btn"),p=(0,s.up)("q-form"),c=(0,s.up)("q-card");return(0,s.wg)(),(0,s.iD)(s.HY,null,[r,(0,s._)("div",n,(0,l.zw)(i.state.status),1),(0,s.Wm)(c,{class:"q-ma-md q-pa-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{ref:"myForm",class:"q-gutter-md",greedy:"",onSubmit:i.register,onReset:i.resetFields},{default:(0,s.w5)((()=>[(0,s.Wm)(m,{outlined:"",placeholder:"enter first name",id:"firstname",modelValue:i.state.firstname,"onUpdate:modelValue":t[0]||(t[0]=e=>i.state.firstname=e),rules:[i.isRequired]},null,8,["modelValue","rules"]),(0,s.Wm)(m,{outlined:"",placeholder:"enter last name",id:"lastname",modelValue:i.state.lastname,"onUpdate:modelValue":t[1]||(t[1]=e=>i.state.lastname=e),rules:[i.isRequired]},null,8,["modelValue","rules"]),(0,s.Wm)(m,{outlined:"",placeholder:"enter email address",id:"email",modelValue:i.state.email,"onUpdate:modelValue":t[2]||(t[2]=e=>i.state.email=e),rules:[i.isRequired,i.isValidEmail]},null,8,["modelValue","rules"]),(0,s.Wm)(m,{outlined:"",placeholder:"enter password",id:"password",type:"password",modelValue:i.state.password,"onUpdate:modelValue":t[3]||(t[3]=e=>i.state.password=e),rules:[i.isRequired],autocomplete:"on"},null,8,["modelValue","rules"]),(0,s.Wm)(u,{label:"Register",type:"submit"}),(0,s.Wm)(u,{label:"Reset",type:"reset"})])),_:1},8,["onSubmit","onReset"])])),_:1})],64)}var o=a(499),d=a(5572);const m={setup(){let e=(0,o.qj)({status:"",email:"",password:"",firstname:"",lastname:""});const t=e=>{const t=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return t.test(e)||"Invalid email"},a=e=>!!e||"field is required",s=async()=>{e.status="registering with server";let t={firstname:e.firstname,lastname:e.lastname,email:e.email,password:e.password};try{let a=await(0,d.C)("register",t);e.status=a.token}catch(a){e.status=a.message}},l=()=>{e.firstname="",e.lastname="",e.email="",e.password="",e.status=""};return{state:e,register:s,isValidEmail:t,isRequired:a,resetFields:l}}};var u=a(1639),p=a(4458),c=a(8326),h=a(6611),w=a(4455),f=a(9984),q=a.n(f);const y=(0,u.Z)(m,[["render",i]]),g=y;q()(m,"components",{QCard:p.Z,QForm:c.Z,QInput:h.Z,QBtn:w.Z})}}]);