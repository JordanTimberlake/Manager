import{G as S,v as s,x as c,Q as y,F as p,z as k,K as x,N as D,L as R,R as O,a8 as B,ap as H,a7 as z,aZ as I,ah as P,a5 as M,a_ as F,aq as U,H as Z,i as $,I as j,B as h,A as l,ar as V,J as N,u as q,r as _,o as G,y as r,ay as m,O as X}from"./BaPgrU-z.js";import{a as A,Z as g,C as J,U as Q,R as Y,d as W,u as w,c as L}from"./CQ-QpSxo.js";import{F as ee}from"./ShWfdubD.js";import{O as b}from"./DVai2ygU.js";import{_ as te}from"./BAO2Aoda.js";import{_ as ne}from"./DlAUqK2U.js";var oe=function(e){var n=e.dt;return`
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
`)},re={root:function(e){var n=e.props;return["p-avatar p-component",{"p-avatar-image":n.image!=null,"p-avatar-circle":n.shape==="circle","p-avatar-lg":n.size==="large","p-avatar-xl":n.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},ae=S.extend({name:"avatar",theme:oe,classes:re}),ie={name:"BaseAvatar",extends:A,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ae,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},K={name:"Avatar",extends:ie,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}}},se=["aria-labelledby","aria-label"],le=["src","alt"];function ce(t,e,n,a,d,o){return s(),c("div",p({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root")),[y(t.$slots,"default",{},function(){return[t.label?(s(),c("span",p({key:0,class:t.cx("label")},t.ptm("label")),k(t.label),17)):t.$slots.icon?(s(),x(R(t.$slots.icon),{key:1,class:D(t.cx("icon"))},null,8,["class"])):t.icon?(s(),c("span",p({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):t.image?(s(),c("img",p({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return o.onError&&o.onError.apply(o,arguments)})},t.ptm("image")),null,16,le)):O("",!0)]})],16,se)}K.render=ce;var de=function(e){var n=e.dt;return`
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
`)},pe={root:"p-popover p-component",content:"p-popover-content"},ue=S.extend({name:"popover",theme:de,classes:pe}),ve={name:"BasePopover",extends:A,props:{dismissable:{type:Boolean,default:!0},appendTo:{type:[String,Object],default:"body"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},breakpoints:{type:Object,default:null},closeOnEscape:{type:Boolean,default:!0}},style:ue,provide:function(){return{$pcPopover:this,$parentInstance:this}}},T={name:"Popover",extends:ve,inheritAttrs:!1,emits:["show","hide"],data:function(){return{visible:!1}},watch:{dismissable:{immediate:!0,handler:function(e){e?this.bindOutsideClickListener():this.unbindOutsideClickListener()}}},selfClick:!1,target:null,eventTarget:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,styleElement:null,overlayEventListener:null,documentKeydownListener:null,beforeUnmount:function(){this.dismissable&&this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.destroyStyle(),this.unbindResizeListener(),this.target=null,this.container&&this.autoZIndex&&g.clear(this.container),this.overlayEventListener&&(b.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null),this.container=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{toggle:function(e,n){this.visible?this.hide():this.show(e,n)},show:function(e,n){this.visible=!0,this.eventTarget=e.currentTarget,this.target=n||e.currentTarget},hide:function(){this.visible=!1},onContentClick:function(){this.selfClick=!0},onEnter:function(e){var n=this;this.container.setAttribute(this.attributeSelector,""),B(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.dismissable&&this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.autoZIndex&&g.set("overlay",e,this.baseZIndex+this.$primevue.config.zIndex.overlay),this.overlayEventListener=function(a){n.container.contains(a.target)&&(n.selfClick=!0)},this.focus(),b.on("overlay-click",this.overlayEventListener),this.$emit("show"),this.closeOnEscape&&this.bindDocumentKeyDownListener()},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.unbindDocumentKeyDownListener(),b.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null,this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&g.clear(e)},alignOverlay:function(){H(this.container,this.target,!1);var e=z(this.container),n=z(this.target),a=0;e.left<n.left&&(a=n.left-e.left),this.container.style.setProperty(I("popover.arrow.left").name,"".concat(a,"px")),e.top<n.top&&(this.container.setAttribute("data-p-popover-flipped","true"),!this.isUnstyled&&P(this.container,"p-popover-flipped"))},onContentKeydown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.hide(),M(this.target))},onButtonKeydown:function(e){switch(e.code){case"ArrowDown":case"ArrowUp":case"ArrowLeft":case"ArrowRight":e.preventDefault()}},focus:function(){var e=this.container.querySelector("[autofocus]");e&&e.focus()},onKeyDown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.visible=!1)},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var e=this;!this.outsideClickListener&&F()&&(this.outsideClickListener=function(n){e.visible&&!e.selfClick&&!e.isTargetClicked(n)&&(e.visible=!1),e.selfClick=!1},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null,this.selfClick=!1)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new J(this.target,function(){e.visible&&(e.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!U()&&(e.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked:function(e){return this.eventTarget&&(this.eventTarget===e.target||this.eventTarget.contains(e.target))},containerRef:function(e){this.container=e},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",Z(this.styleElement,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.head.appendChild(this.styleElement);var n="";for(var a in this.breakpoints)n+=`
                        @media screen and (max-width: `.concat(a,`) {
                            .p-popover[`).concat(this.attributeSelector,`] {
                                width: `).concat(this.breakpoints[a],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=n}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},onOverlayClick:function(e){b.emit("overlay-click",{originalEvent:e,target:this.target})}},computed:{attributeSelector:function(){return Q()}},directives:{focustrap:ee,ripple:Y},components:{Portal:W}},he=["aria-modal"];function fe(t,e,n,a,d,o){var u=$("Portal"),f=j("focustrap");return s(),x(u,{appendTo:t.appendTo},{default:h(function(){return[l(V,p({name:"p-popover",onEnter:o.onEnter,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave},t.ptm("transition")),{default:h(function(){return[d.visible?N((s(),c("div",p({key:0,ref:o.containerRef,role:"dialog","aria-modal":d.visible,onClick:e[3]||(e[3]=function(){return o.onOverlayClick&&o.onOverlayClick.apply(o,arguments)}),class:t.cx("root")},t.ptmi("root")),[t.$slots.container?y(t.$slots,"container",{key:0,closeCallback:o.hide,keydownCallback:function(v){return o.onButtonKeydown(v)}}):(s(),c("div",p({key:1,class:t.cx("content"),onClick:e[0]||(e[0]=function(){return o.onContentClick&&o.onContentClick.apply(o,arguments)}),onMousedown:e[1]||(e[1]=function(){return o.onContentClick&&o.onContentClick.apply(o,arguments)}),onKeydown:e[2]||(e[2]=function(){return o.onContentKeydown&&o.onContentKeydown.apply(o,arguments)})},t.ptm("content")),[y(t.$slots,"default")],16))],16,he)),[[f]]):O("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])}T.render=fe;const me={class:"sidebar"},be=r("div",{class:"title text-center font-bold md:text-lg"},[r("p",null,"EPIUSE Manager")],-1),ye={class:"routes"},ge=r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[r("path",{fill:"currentColor",d:"M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"})],-1),we=r("p",null," Home ",-1),Le=r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[r("path",{fill:"currentColor",d:"M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9A3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42c-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.54 5.54 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13zM0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9c-.59.68-.95 1.62-.95 2.65V20zm24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65c2.56.34 4.45 1.51 4.45 2.9z"})],-1),ke=r("p",null," Employees ",-1),Ce={class:"profile"},Ee=r("div",{class:"divider"},null,-1),ze={class:"text-center md:text-sm md:contents hidden"},_e={class:"popover"},Se={class:"text-slate-400 pb-4"},xe={style:{"font-size":"12px"}},Oe=r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16px",height:"16px",viewBox:"0 0 24 24"},[r("path",{fill:"currentColor",d:"M21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2M7 12l5 5v-3h4v-4h-4V7z"})],-1),Ae=r("p",null," Logout ",-1),Ke={__name:"AppSidebar",setup(t){const e=q(),n=w("user_id"),a=w("token"),d=w("email"),o=async()=>{try{const i=await $fetch(`https://vitreous-bert-jordantimberlake-dd542edd.koyeb.app/api/user/${n.value}/`,{method:"GET",headers:{"Content-Type":"application/json","X-CSRFToken":a.value||""},credentials:"include"});console.log(i),v.value=i}catch(i){console.log(i)}},u=_(null),f=i=>{u.value.toggle(i)},C=async()=>{try{const i=await $fetch("https://vitreous-bert-jordantimberlake-dd542edd.koyeb.app/api/auth/signout/",{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":a.value||""},withCredentials:!0});d.value="",n.value="",a.value="",e.push("/login")}catch(i){console.error("Failed to logout",i),i.value="Failed to logout",show(i.value)}loading.value=!1},v=_(null);return G(async()=>{await o(),d.value=v.value.email}),(i,He)=>{var E;return s(),c(X,null,[r("div",me,[be,r("div",ye,[l(m(L),{text:"",class:"route",as:"router-link",label:"Router",to:"/home"},{default:h(()=>[ge,we]),_:1}),l(m(L),{text:"",class:"route",as:"router-link",label:"Router",to:"/employees"},{default:h(()=>[Le,ke]),_:1})]),r("div",Ce,[Ee,r("div",{class:"profileContent",onClick:f},[l(m(K),{image:"/images/media/default.png",shape:"circle",alt:"avatar"}),r("p",ze,k((E=v.value)==null?void 0:E.username),1)])])]),l(m(T),{ref_key:"op",ref:u},{default:h(()=>[r("div",_e,[r("div",Se,[r("p",xe,"signed in as "+k(v.value.email),1)]),l(m(L),{text:"",class:"popoverRoute",onClick:C},{default:h(()=>[Oe,Ae]),_:1})])]),_:1},512)],64)}}},Te={},De={class:"main"},Re={class:"slot"};function Be(t,e,n,a,d,o){const u=Ke,f=te;return s(),c("div",De,[l(u),r("div",Re,[y(t.$slots,"default")]),l(f)])}const $e=ne(Te,[["render",Be]]);export{$e as default};
