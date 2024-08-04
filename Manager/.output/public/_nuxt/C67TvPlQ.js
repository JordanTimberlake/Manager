import{aA as y,u as k,r as u,o as C,x as c,A as d,aB as m,y as e,R as T,J as r,aM as i,B as S,C as _,v as f}from"./CS3_mnPD.js";import{u as V}from"./DNZMkAnO.js";import{u as p,c as j}from"./DbKvMxRP.js";import{c as A}from"./BjlN2r8C.js";import{S as M}from"./p-mV6gvn.js";import"./DlAUqK2U.js";const N={class:"userAuth p-10"},B={class:"w-3/5 mx-auto border border-slate-600 rounded-md p-10"},F=e("div",{class:"pb-6"},[e("h1",{class:"text-3xl font-semibold text-left"}," Create an account "),e("p",{class:"text-sm"},[_("Already have an account? "),e("a",{class:"underline",href:"/login"},"Log in")])],-1),q={class:"w-full flex lg:flex-row-reverse flex-col justify-between gap-4"},E={class:"lg:w-1/2 flex flex-col justify-center items-center gap-10"},P=e("h1",{class:"lg:text-3xl font-semibold text-center"}," Welcome to ManagerOrg ",-1),R={key:0,class:"w-full flex justify-center items-center"},U={class:"lg:w-1/2"},O={class:"flex flex-row justify-between gap-4"},$={class:"mb-4"},D=e("label",{for:"name",class:"block text-sm font-bold mb-2"},"Name",-1),J={class:"mb-4"},L=e("label",{for:"surname",class:"block text-sm font-bold mb-2"},"Surname",-1),G={class:"mb-4"},W=e("label",{for:"email",class:"block text-sm font-bold mb-2"},"Email",-1),X={class:"mb-4"},z=e("label",{for:"password",class:"block text-sm font-bold mb-2"},"Password",-1),H={class:"flex items-center justify-between"},I=e("a",{href:"/login",class:"underline"},"Log in instead",-1),te={__name:"signup",setup(K){const h=y(),v=k();V({title:"Create account",description:"Manager account creation page"});const l=p("token"),w=p("user_id"),n=u(!1),s=u({first_name:"",last_name:"",email:"",password:""}),b=async()=>{if(n.value=!0,s.value.email===""||s.value.password===""||s.value.first_name===""||s.value.last_name===""){alert("Please fill in all fields");return}try{const a=await $fetch("http://localhost:8000/api/auth/signup/",{method:"POST",body:JSON.stringify({first_name:s.value.first_name,last_name:s.value.last_name,email:s.value.email,password:s.value.password}),headers:{"Content-Type":"application/json","X-CSRFToken":l.value||""},credentials:"include"});w.value=a.user_id,n.value=!1,v.push("/home")}catch(a){console.error("Failed to login",a),a.value="Failed - Please make sure you have filled in all the input boxes",g(a.value)}n.value=!1},x=async()=>{try{const{data:a}=await $fetch("http://localhost:8000/api/token/",{method:"GET",credentials:"include"});l.value=a.csrfToken}catch(a){console.error("Failed to fetch CSRF token",a)}},g=a=>{a=a||"An error occurred",h.add({severity:"warn",summary:"Error",detail:a,life:5e3})};return C(()=>{l.value===""&&x(),console.log("token ",l.value)}),(a,t)=>(f(),c("div",N,[d(m(A)),e("div",B,[F,e("div",q,[e("div",E,[P,n.value?(f(),c("div",R,[d(M)])):T("",!0)]),e("form",U,[e("div",O,[e("div",$,[D,r(e("input",{type:"name",id:"name","onUpdate:modelValue":t[0]||(t[0]=o=>s.value.first_name=o),required:"",class:"shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"},null,512),[[i,s.value.first_name]])]),e("div",J,[L,r(e("input",{type:"surname",id:"surname","onUpdate:modelValue":t[1]||(t[1]=o=>s.value.last_name=o),required:"",class:"shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"},null,512),[[i,s.value.last_name]])])]),e("div",G,[W,r(e("input",{type:"email",id:"email","onUpdate:modelValue":t[2]||(t[2]=o=>s.value.email=o),required:"",class:"shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"},null,512),[[i,s.value.email]])]),e("div",X,[z,r(e("input",{type:"password",id:"password","onUpdate:modelValue":t[3]||(t[3]=o=>s.value.password=o),required:"",class:"shadow appearance-none border border-red rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"},null,512),[[i,s.value.password]])]),e("div",H,[I,d(m(j),{rounded:"",class:"font-bold py-2 px-4 w-1/2",type:"button",onClick:b},{default:S(()=>[_(" Create account ")]),_:1})])])])])]))}};export{te as default};