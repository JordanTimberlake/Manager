import{G as z,v as s,x as c,Q as y,F as p,z as L,K as S,N as K,L as D,R as x,a8 as R,ap as B,a7 as C,aZ as H,ah as I,a5 as P,a_ as M,aq as F,H as U,i as Z,I as $,B as d,A as l,ar as V,J as j,u as N,r as E,o as q,y as r,aB as v,O as G}from"./CS3_mnPD.js";import{a as O,Z as w,C as X,U as J,R as Q,d as Y,u as _,c as b}from"./DbKvMxRP.js";import{F as W}from"./Kd1ytcwT.js";import{O as g}from"./CTlAPHtO.js";import{_ as ee}from"./CLhxsNaL.js";import{_ as te}from"./DlAUqK2U.js";var ne=function(e){var n=e.dt;return`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: `.concat(n("avatar.width"),`;
    height: `).concat(n("avatar.height"),`;
    font-size: `).concat(n("avatar.font.size"),`;
    background: `).concat(n("avatar.background"),`;
    border-radius: `).concat(n("avatar.border.radius"),`;
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: `).concat(n("avatar.font.size"),`;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: `).concat(n("avatar.lg.width"),`;
    height: `).concat(n("avatar.lg.width"),`;
    font-size: `).concat(n("avatar.lg.font.size"),`;
}

.p-avatar-lg .p-avatar-icon {
    font-size: `).concat(n("avatar.lg.font.size"),`;
}

.p-avatar-xl {
    width: `).concat(n("avatar.xl.width"),`;
    height: `).concat(n("avatar.xl.width"),`;
    font-size: `).concat(n("avatar.xl.font.size"),`;
}

.p-avatar-xl .p-avatar-icon {
    font-size: `).concat(n("avatar.xl.font.size"),`;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-left: `).concat(n("avatar.group.offset"),`;
}

.p-avatar-group .p-avatar {
    border: 2px solid `).concat(n("avatar.group.border.color"),`;
}
`)},oe={root:function(e){var n=e.props;return["p-avatar p-component",{"p-avatar-image":n.image!=null,"p-avatar-circle":n.shape==="circle","p-avatar-lg":n.size==="large","p-avatar-xl":n.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},re=z.extend({name:"avatar",theme:ne,classes:oe}),ae={name:"BaseAvatar",extends:O,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:re,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},A={name:"Avatar",extends:ae,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}}},ie=["aria-labelledby","aria-label"],se=["src","alt"];function le(t,e,n,a,u,o){return s(),c("div",p({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root")),[y(t.$slots,"default",{},function(){return[t.label?(s(),c("span",p({key:0,class:t.cx("label")},t.ptm("label")),L(t.label),17)):t.$slots.icon?(s(),S(D(t.$slots.icon),{key:1,class:K(t.cx("icon"))},null,8,["class"])):t.icon?(s(),c("span",p({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):t.image?(s(),c("img",p({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return o.onError&&o.onError.apply(o,arguments)})},t.ptm("image")),null,16,se)):x("",!0)]})],16,ie)}A.render=le;var ce=function(e){var n=e.dt;return`
.p-popover {
    margin-top: `.concat(n("popover.gutter"),`;
    background: `).concat(n("popover.background"),`;
    color: `).concat(n("popover.color"),`;
    border: 1px solid `).concat(n("popover.border.color"),`;
    border-radius: `).concat(n("popover.border.radius"),`;
    box-shadow: `).concat(n("popover.shadow"),`;
}

.p-popover-content {
    padding: `).concat(n("popover.content.padding"),`;
}

.p-popover-flipped {
    margin-top: calc(`).concat(n("popover.gutter"),` * -1);
    margin-bottom: `).concat(n("popover.gutter"),`;
}

.p-popover-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-popover-leave-to {
    opacity: 0;
}

.p-popover-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-popover-leave-active {
    transition: opacity 0.1s linear;
}

.p-popover:after,
.p-popover:before {
    bottom: 100%;
    left: calc(`).concat(n("popover.arrow.offset")," + ").concat(n("popover.arrow.left"),`);
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-popover:after {
    border-width: calc(`).concat(n("popover.gutter"),` - 2px);
    margin-left: calc(-1 * (`).concat(n("popover.gutter"),` - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(n("popover.background"),`;
}

.p-popover:before {
    border-width: `).concat(n("popover.gutter"),`;
    margin-left: calc(-1 * `).concat(n("popover.gutter"),`);
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(n("popover.border.color"),`;
}

.p-popover-flipped:after,
.p-popover-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-popover.p-popover-flipped:after {
    border-bottom-color: transparent;
    border-top-color: `).concat(n("popover.background"),`;
}

.p-popover.p-popover-flipped:before {
    border-bottom-color: transparent;
    border-top-color: `).concat(n("popover.border.color"),`;
}
`)},de={root:"p-popover p-component",content:"p-popover-content"},pe=z.extend({name:"popover",theme:ce,classes:de}),ue={name:"BasePopover",extends:O,props:{dismissable:{type:Boolean,default:!0},appendTo:{type:[String,Object],default:"body"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},breakpoints:{type:Object,default:null},closeOnEscape:{type:Boolean,default:!0}},style:pe,provide:function(){return{$pcPopover:this,$parentInstance:this}}},T={name:"Popover",extends:ue,inheritAttrs:!1,emits:["show","hide"],data:function(){return{visible:!1}},watch:{dismissable:{immediate:!0,handler:function(e){e?this.bindOutsideClickListener():this.unbindOutsideClickListener()}}},selfClick:!1,target:null,eventTarget:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,styleElement:null,overlayEventListener:null,documentKeydownListener:null,beforeUnmount:function(){this.dismissable&&this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.destroyStyle(),this.unbindResizeListener(),this.target=null,this.container&&this.autoZIndex&&w.clear(this.container),this.overlayEventListener&&(g.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null),this.container=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{toggle:function(e,n){this.visible?this.hide():this.show(e,n)},show:function(e,n){this.visible=!0,this.eventTarget=e.currentTarget,this.target=n||e.currentTarget},hide:function(){this.visible=!1},onContentClick:function(){this.selfClick=!0},onEnter:function(e){var n=this;this.container.setAttribute(this.attributeSelector,""),R(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.dismissable&&this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.autoZIndex&&w.set("overlay",e,this.baseZIndex+this.$primevue.config.zIndex.overlay),this.overlayEventListener=function(a){n.container.contains(a.target)&&(n.selfClick=!0)},this.focus(),g.on("overlay-click",this.overlayEventListener),this.$emit("show"),this.closeOnEscape&&this.bindDocumentKeyDownListener()},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.unbindDocumentKeyDownListener(),g.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null,this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&w.clear(e)},alignOverlay:function(){B(this.container,this.target,!1);var e=C(this.container),n=C(this.target),a=0;e.left<n.left&&(a=n.left-e.left),this.container.style.setProperty(H("popover.arrow.left").name,"".concat(a,"px")),e.top<n.top&&(this.container.setAttribute("data-p-popover-flipped","true"),!this.isUnstyled&&I(this.container,"p-popover-flipped"))},onContentKeydown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.hide(),P(this.target))},onButtonKeydown:function(e){switch(e.code){case"ArrowDown":case"ArrowUp":case"ArrowLeft":case"ArrowRight":e.preventDefault()}},focus:function(){var e=this.container.querySelector("[autofocus]");e&&e.focus()},onKeyDown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.visible=!1)},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var e=this;!this.outsideClickListener&&M()&&(this.outsideClickListener=function(n){e.visible&&!e.selfClick&&!e.isTargetClicked(n)&&(e.visible=!1),e.selfClick=!1},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null,this.selfClick=!1)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new X(this.target,function(){e.visible&&(e.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!F()&&(e.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked:function(e){return this.eventTarget&&(this.eventTarget===e.target||this.eventTarget.contains(e.target))},containerRef:function(e){this.container=e},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",U(this.styleElement,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.head.appendChild(this.styleElement);var n="";for(var a in this.breakpoints)n+=`
                        @media screen and (max-width: `.concat(a,`) {
                            .p-popover[`).concat(this.attributeSelector,`] {
                                width: `).concat(this.breakpoints[a],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=n}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},onOverlayClick:function(e){g.emit("overlay-click",{originalEvent:e,target:this.target})}},computed:{attributeSelector:function(){return J()}},directives:{focustrap:W,ripple:Q},components:{Portal:Y}},ve=["aria-modal"];function he(t,e,n,a,u,o){var h=Z("Portal"),f=$("focustrap");return s(),S(h,{appendTo:t.appendTo},{default:d(function(){return[l(V,p({name:"p-popover",onEnter:o.onEnter,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave},t.ptm("transition")),{default:d(function(){return[u.visible?j((s(),c("div",p({key:0,ref:o.containerRef,role:"dialog","aria-modal":u.visible,onClick:e[3]||(e[3]=function(){return o.onOverlayClick&&o.onOverlayClick.apply(o,arguments)}),class:t.cx("root")},t.ptmi("root")),[t.$slots.container?y(t.$slots,"container",{key:0,closeCallback:o.hide,keydownCallback:function(i){return o.onButtonKeydown(i)}}):(s(),c("div",p({key:1,class:t.cx("content"),onClick:e[0]||(e[0]=function(){return o.onContentClick&&o.onContentClick.apply(o,arguments)}),onMousedown:e[1]||(e[1]=function(){return o.onContentClick&&o.onContentClick.apply(o,arguments)}),onKeydown:e[2]||(e[2]=function(){return o.onContentKeydown&&o.onContentKeydown.apply(o,arguments)})},t.ptm("content")),[y(t.$slots,"default")],16))],16,ve)),[[f]]):x("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])}T.render=he;const fe={class:"sidebar"},me=r("div",{class:"title text-center font-bold md:text-lg"},[r("p",null,"EPIUSE Manager")],-1),be={class:"routes"},ge=r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[r("path",{fill:"currentColor",d:"M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"})],-1),ye=r("p",null," Home ",-1),we=r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[r("path",{fill:"currentColor",d:"M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9A3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42c-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.54 5.54 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13zM0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9c-.59.68-.95 1.62-.95 2.65V20zm24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65c2.56.34 4.45 1.51 4.45 2.9z"})],-1),Le=r("p",null," Employees ",-1),ke={class:"profile"},Ce={class:"routes"},Ee=r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[r("path",{fill:"currentColor",d:"M11 18h2v-2h-2zm1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-14a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2a2 2 0 0 1 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 0 0-4-4"})],-1),_e=r("p",null," Help & Support ",-1),ze=r("div",{class:"divider"},null,-1),Se={class:"text-center md:text-sm md:contents hidden trancate text-wrap"},xe={class:"popover"},Oe={class:"text-slate-400 pb-4"},Ae={style:{"font-size":"12px"}},Te=r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16px",height:"16px",viewBox:"0 0 24 24"},[r("path",{fill:"currentColor",d:"M21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2M7 12l5 5v-3h4v-4h-4V7z"})],-1),Ke=r("p",null," Logout ",-1),De={__name:"AppSidebar",setup(t){const e=N(),n=_("user_id"),a=_("token"),u=async()=>{try{const i=await $fetch(`http://localhost:8000/api/user/${n.value}/`,{method:"GET",headers:{"Content-Type":"application/json","X-CSRFToken":a.value||""},credentials:"include"});console.log(i),m.value=i}catch(i){console.log(i)}},o=E(null),h=i=>{o.value.toggle(i)},f=async()=>{try{const i=await $fetch("http://localhost:8000/api/auth/signout/",{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":a.value||""},credentials:"include"});console.log(i),n.value="",a.value="",e.push("/login")}catch(i){console.error("Failed to logout",i),error.value="Failed to logout",show(error.value)}loading.value=!1},m=E(null);return q(async()=>{await u(),console.log("TEST: ",m.value)}),(i,Pe)=>{var k;return s(),c(G,null,[r("div",fe,[me,r("div",be,[l(v(b),{text:"",class:"route",as:"router-link",label:"Router",to:"/home"},{default:d(()=>[ge,ye]),_:1}),l(v(b),{text:"",class:"route",as:"router-link",label:"Router",to:"/employees"},{default:d(()=>[we,Le]),_:1})]),r("div",ke,[r("div",Ce,[l(v(b),{text:"",class:"route mb-2",as:"router-link",label:"Router",to:"/help"},{default:d(()=>[Ee,_e]),_:1})]),ze,r("div",{class:"profileContent",onClick:h},[l(v(A),{image:"/images/media/default.png",shape:"circle",alt:"avatar"}),r("p",Se,L((k=m.value)==null?void 0:k.username),1)])])]),l(v(T),{ref_key:"op",ref:o},{default:d(()=>[r("div",xe,[r("div",Oe,[r("p",Ae,"signed in as "+L(m.value.email),1)]),l(v(b),{text:"",class:"popoverRoute",onClick:f},{default:d(()=>[Te,Ke]),_:1})])]),_:1},512)],64)}}},Re={},Be={class:"main"},He={class:"slot"};function Ie(t,e,n,a,u,o){const h=De,f=ee;return s(),c("div",Be,[l(h),r("div",He,[y(t.$slots,"default")]),l(f)])}const je=te(Re,[["render",Ie]]);export{je as default};
