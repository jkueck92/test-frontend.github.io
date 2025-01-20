import{v as kt,c as We,g as Ct,a as Lt,u as St,b as Tt,Q as xt,d as _t}from"./QBtn-CDd2XD3g.js";import{c as V,a as v,h as C,r as S,i as nt,o as U,b as N,n as ze,e as Y,g as M,l as H,f as $e,j as D,w as k,k as se,H as Fe,m as O,s as Pe,p as Et,q as Bt,P as zt,t as $t,u as Pt,v as ne,x as be,y as Re,z as ye,A as Te,B as ge,C as Vt,D as lt,E as Ot,F as le,G as Ht,I as Mt,J as re,K as xe,L as z,M as B,N as Qt,O as ue,Q as _e,R as Dt,S as At,T as Wt,U as Ft,V as Rt,W as Nt}from"./index-CjHgzIpx.js";import{h as I,a as it,b as Ne,c as It}from"./render-Ct5z8auQ.js";const Xt=V({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:n}){const l=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>C("div",{class:l.value},I(n.default))}}),jt=V({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:n}){const l=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>C("div",{class:l.value,role:"toolbar"},I(n.default))}});function Ut(){const e=S(!nt.value);return e.value===!1&&U(()=>{e.value=!0}),{isHydrated:e}}const ot=typeof ResizeObserver<"u",Ie=ot===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},Ee=V({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let l=null,o,t={width:-1,height:-1};function i(c){c===!0||e.debounce===0||e.debounce==="0"?s():l===null&&(l=setTimeout(s,e.debounce))}function s(){if(l!==null&&(clearTimeout(l),l=null),o){const{offsetWidth:c,offsetHeight:d}=o;(c!==t.width||d!==t.height)&&(t={width:c,height:d},n("resize",t))}}const{proxy:f}=M();if(f.trigger=i,ot===!0){let c;const d=r=>{o=f.$el.parentNode,o?(c=new ResizeObserver(i),c.observe(o),s()):r!==!0&&Y(()=>{d(!0)})};return U(()=>{d()}),N(()=>{l!==null&&clearTimeout(l),c!==void 0&&(c.disconnect!==void 0?c.disconnect():o&&c.unobserve(o))}),ze}else{let c=function(){l!==null&&(clearTimeout(l),l=null),b!==void 0&&(b.removeEventListener!==void 0&&b.removeEventListener("resize",i,H.passive),b=void 0)},d=function(){c(),o&&o.contentDocument&&(b=o.contentDocument.defaultView,b.addEventListener("resize",i,H.passive),s())};const{isHydrated:r}=Ut();let b;return U(()=>{Y(()=>{o=f.$el,o&&d()})}),N(c),()=>{if(r.value===!0)return C("object",{class:"q--avoid-card-border",style:Ie.style,tabindex:-1,type:"text/html",data:Ie.url,"aria-hidden":"true",onLoad:d})}}}}),Yt=V({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:l}){const{proxy:{$q:o}}=M(),t=$e(se,D);if(t===D)return console.error("QHeader needs to be child of QLayout"),D;const i=S(parseInt(e.heightHint,10)),s=S(!0),f=v(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||o.platform.is.ios&&t.isContainer.value===!0),c=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?i.value:0;const u=i.value-t.scroll.value.position;return u>0?u:0}),d=v(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),r=v(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),b=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=v(()=>{const u=t.rows.value.top,p={};return u[0]==="l"&&t.left.space===!0&&(p[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(p[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),p});function m(u,p){t.update("header",u,p)}function h(u,p){u.value!==p&&(u.value=p)}function T({height:u}){h(i,u),m("size",u)}function L(u){r.value===!0&&h(s,!0),l("focusin",u)}k(()=>e.modelValue,u=>{m("space",u),h(s,!0),t.animate()}),k(c,u=>{m("offset",u)}),k(()=>e.reveal,u=>{u===!1&&h(s,e.modelValue)}),k(s,u=>{t.animate(),l("reveal",u)}),k(t.scroll,u=>{e.reveal===!0&&h(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const g={};return t.instances.header=g,e.modelValue===!0&&m("size",i.value),m("space",e.modelValue),m("offset",c.value),N(()=>{t.instances.header===g&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const u=it(n.default,[]);return e.elevated===!0&&u.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(C(Ee,{debounce:0,onResize:T})),C("header",{class:b.value,style:q.value,onFocusin:L},u)}}}),Be=V({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const l=v(()=>parseInt(e.lines,10)),o=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),t=v(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>C("div",{style:t.value,class:o.value},I(n.default))}}),Ve={dark:{type:Boolean,default:null}};function Oe(e,n){return v(()=>e.dark===null?n.dark.isActive:e.dark)}const Kt=["ul","ol"],Gt=V({name:"QList",props:{...Ve,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:n}){const l=M(),o=Oe(e,l.proxy.$q),t=v(()=>Kt.includes(e.tag)?null:"list"),i=v(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(o.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>C(e.tag,{class:i.value,role:t.value},I(n.default))}});function Jt(e,n,l){let o;function t(){o!==void 0&&(Fe.remove(o),o=void 0)}return N(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){o={condition:()=>l.value===!0,handler:n},Fe.add(o)}}}const Zt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},en=["beforeShow","show","beforeHide","hide"];function tn({showing:e,canShow:n,hideOnRouteChange:l,handleShow:o,handleHide:t,processOnMount:i}){const s=M(),{props:f,emit:c,proxy:d}=s;let r;function b(u){e.value===!0?h(u):q(u)}function q(u){if(f.disable===!0||u!==void 0&&u.qAnchorHandled===!0||n!==void 0&&n(u)!==!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(c("update:modelValue",!0),r=u,Y(()=>{r===u&&(r=void 0)})),(f.modelValue===null||p===!1)&&m(u)}function m(u){e.value!==!0&&(e.value=!0,c("beforeShow",u),o!==void 0?o(u):c("show",u))}function h(u){if(f.disable===!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(c("update:modelValue",!1),r=u,Y(()=>{r===u&&(r=void 0)})),(f.modelValue===null||p===!1)&&T(u)}function T(u){e.value!==!1&&(e.value=!1,c("beforeHide",u),t!==void 0?t(u):c("hide",u))}function L(u){f.disable===!0&&u===!0?f["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):u===!0!==e.value&&(u===!0?m:T)(r)}k(()=>f.modelValue,L),l!==void 0&&kt(s)===!0&&k(()=>d.$route.fullPath,()=>{l.value===!0&&e.value===!0&&h()}),i===!0&&U(()=>{L(f.modelValue)});const g={show:q,hide:h,toggle:b};return Object.assign(d,g),g}const nn=[Element,String],ln=[null,document,document.body,document.scrollingElement,document.documentElement];function on(e,n){let l=Ct(n);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return ln.includes(l)?window:l}function at(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function rt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ie;function we(){if(ie!==void 0)return ie;const e=document.createElement("p"),n=document.createElement("div");We(e,{width:"100%",height:"200px"}),We(n,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),n.appendChild(e),document.body.appendChild(n);const l=e.offsetWidth;n.style.overflow="scroll";let o=e.offsetWidth;return l===o&&(o=n.clientWidth),n.remove(),ie=l-o,ie}function an(e,n=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:n?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let J=0,qe,ke,Z,Ce=!1,Xe,je,Ue,R=null;function rn(e){un(e)&&Pe(e)}function un(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const n=Et(e),l=e.shiftKey&&!e.deltaX,o=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=l||o?e.deltaY:e.deltaX;for(let i=0;i<n.length;i++){const s=n[i];if(an(s,o))return o?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Ye(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function oe(e){Ce!==!0&&(Ce=!0,requestAnimationFrame(()=>{Ce=!1;const{height:n}=e.target,{clientHeight:l,scrollTop:o}=document.scrollingElement;(Z===void 0||n!==window.innerHeight)&&(Z=l-n,document.scrollingElement.scrollTop=o),o>Z&&(document.scrollingElement.scrollTop-=Math.ceil((o-Z)/8))}))}function Ke(e){const n=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:o,overflowX:t}=window.getComputedStyle(n);qe=rt(window),ke=at(window),Xe=n.style.left,je=n.style.top,Ue=window.location.href,n.style.left=`-${qe}px`,n.style.top=`-${ke}px`,t!=="hidden"&&(t==="scroll"||n.scrollWidth>window.innerWidth)&&n.classList.add("q-body--force-scrollbar-x"),o!=="hidden"&&(o==="scroll"||n.scrollHeight>window.innerHeight)&&n.classList.add("q-body--force-scrollbar-y"),n.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,O.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",oe,H.passiveCapture),window.visualViewport.addEventListener("scroll",oe,H.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ye,H.passiveCapture))}O.is.desktop===!0&&O.is.mac===!0&&window[`${e}EventListener`]("wheel",rn,H.notPassive),e==="remove"&&(O.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",oe,H.passiveCapture),window.visualViewport.removeEventListener("scroll",oe,H.passiveCapture)):window.removeEventListener("scroll",Ye,H.passiveCapture)),n.classList.remove("q-body--prevent-scroll"),n.classList.remove("q-body--force-scrollbar-x"),n.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,n.style.left=Xe,n.style.top=je,window.location.href===Ue&&window.scrollTo(qe,ke),Z=void 0)}function sn(e){let n="add";if(e===!0){if(J++,R!==null){clearTimeout(R),R=null;return}if(J>1)return}else{if(J===0||(J--,J>0))return;if(n="remove",O.is.ios===!0&&O.is.nativeMobile===!0){R!==null&&clearTimeout(R),R=setTimeout(()=>{Ke(n),R=null},100);return}}Ke(n)}function dn(){let e;return{preventBodyScroll(n){n!==e&&(e!==void 0||n===!0)&&(e=n,sn(n))}}}function cn(){let e=null;const n=M();function l(){e!==null&&(clearTimeout(e),e=null)}return Bt(l),N(l),{removeTimeout:l,registerTimeout(o,t){l(),Lt(n)===!1&&(e=setTimeout(()=>{e=null,o()},t))}}}const He={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},fn=Object.keys(He);He.all=!0;function Ge(e){const n={};for(const l of fn)e[l]===!0&&(n[l]=!0);return Object.keys(n).length===0?He:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const vn=["INPUT","TEXTAREA"];function Je(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&vn.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function mn(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),zt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Le(e,n,l){const o=Te(e);let t,i=o.left-n.event.x,s=o.top-n.event.y,f=Math.abs(i),c=Math.abs(s);const d=n.direction;d.horizontal===!0&&d.vertical!==!0?t=i<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?t=s<0?"up":"down":d.up===!0&&s<0?(t="up",f>c&&(d.left===!0&&i<0?t="left":d.right===!0&&i>0&&(t="right"))):d.down===!0&&s>0?(t="down",f>c&&(d.left===!0&&i<0?t="left":d.right===!0&&i>0&&(t="right"))):d.left===!0&&i<0?(t="left",f<c&&(d.up===!0&&s<0?t="up":d.down===!0&&s>0&&(t="down"))):d.right===!0&&i>0&&(t="right",f<c&&(d.up===!0&&s<0?t="up":d.down===!0&&s>0&&(t="down")));let r=!1;if(t===void 0&&l===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,r=!0,t==="left"||t==="right"?(o.left-=i,f=0,i=0):(o.top-=s,c=0,s=0)}return{synthetic:r,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:o,direction:t,isFirst:n.event.isFirst,isFinal:l===!0,duration:Date.now()-n.event.time,distance:{x:f,y:c},offset:{x:i,y:s},delta:{x:o.left-n.event.lastX,y:o.top-n.event.lastY}}}}let hn=0;const Se=$t({name:"touch-pan",beforeMount(e,{value:n,modifiers:l}){if(l.mouse!==!0&&O.has.touch!==!0)return;function o(i,s){l.mouse===!0&&s===!0?Pe(i):(l.stop===!0&&ye(i),l.prevent===!0&&Re(i))}const t={uid:"qvtp_"+hn++,handler:n,modifiers:l,direction:Ge(l),noop:ze,mouseStart(i){Je(i,t)&&Pt(i)&&(ne(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(i,!0))},touchStart(i){if(Je(i,t)){const s=i.target;ne(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(i)}},start(i,s){if(O.is.firefox===!0&&be(e,!0),t.lastEvt=i,s===!0||l.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const d=i.type.indexOf("mouse")!==-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&Re(d),i.cancelBubble===!0&&ye(d),Object.assign(d,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[t.uid]:i.qClonedBy.concat(t.uid)}),t.initialEvent={target:i.target,event:d}}ye(i)}const{left:f,top:c}=Te(i);t.event={x:f,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:c}},move(i){if(t.event===void 0)return;const s=Te(i),f=s.left-t.event.x,c=s.top-t.event.y;if(f===0&&c===0)return;t.lastEvt=i;const d=t.event.mouse===!0,r=()=>{o(i,d);let m;l.preserveCursor!==!0&&l.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),mn(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),d===!0){const T=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{T(),h()},50):T()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&o(i,t.event.mouse);const{payload:m,synthetic:h}=Le(i,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(i):(t.styleCleanup===void 0&&t.event.isFirst===!0&&r(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=h===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||d===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){r(),t.event.detected=!0,t.move(i);return}const b=Math.abs(f),q=Math.abs(c);b!==q&&(t.direction.horizontal===!0&&b>q||t.direction.vertical===!0&&b<q||t.direction.up===!0&&b<q&&c<0||t.direction.down===!0&&b<q&&c>0||t.direction.left===!0&&b>q&&f<0||t.direction.right===!0&&b>q&&f>0?(t.event.detected=!0,t.move(i)):t.end(i,!0))},end(i,s){if(t.event!==void 0){if(ge(t,"temp"),O.is.firefox===!0&&be(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Le(i===void 0?t.lastEvt:i,t).payload);const{payload:f}=Le(i===void 0?t.lastEvt:i,t,!0),c=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,l.mouse===!0){const i=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";ne(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}O.has.touch===!0&&ne(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const l=e.__qtouchpan;l!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&l.end(),l.handler=n.value),l.direction=Ge(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),ge(n,"main"),ge(n,"temp"),O.is.firefox===!0&&be(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});function ae(e,n,l){return l<=n?n:Math.min(l,Math.max(n,e))}const Ze=150,pn=V({name:"QDrawer",inheritAttrs:!1,props:{...Zt,...Ve,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...en,"onLayout","miniState"],setup(e,{slots:n,emit:l,attrs:o}){const t=M(),{proxy:{$q:i}}=t,s=Oe(e,i),{preventBodyScroll:f}=dn(),{registerTimeout:c,removeTimeout:d}=cn(),r=$e(se,D);if(r===D)return console.error("QDrawer needs to be child of QLayout"),D;let b,q=null,m;const h=S(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),T=v(()=>e.mini===!0&&h.value!==!0),L=v(()=>T.value===!0?e.miniWidth:e.width),g=S(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),u=v(()=>e.persistent!==!0&&(h.value===!0||ut.value===!0));function p(a,y){if($(),a!==!1&&r.animate(),P(0),h.value===!0){const E=r.instances[ee.value];E!==void 0&&E.belowBreakpoint===!0&&E.hide(!1),A(1),r.isContainer.value!==!0&&f(!0)}else A(0),a!==!1&&me(!1);c(()=>{a!==!1&&me(!0),y!==!0&&l("show",a)},Ze)}function w(a,y){K(),a!==!1&&r.animate(),A(0),P(X.value*L.value),he(),y!==!0?c(()=>{l("hide",a)},Ze):d()}const{show:x,hide:_}=tn({showing:g,hideOnRouteChange:u,handleShow:p,handleHide:w}),{addToHistory:$,removeFromHistory:K}=Jt(g,_,u),F={belowBreakpoint:h,hide:_},Q=v(()=>e.side==="right"),X=v(()=>(i.lang.rtl===!0?-1:1)*(Q.value===!0?1:-1)),Me=S(0),j=S(!1),de=S(!1),Qe=S(L.value*X.value),ee=v(()=>Q.value===!0?"left":"right"),ce=v(()=>g.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:L.value:0),fe=v(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(Q.value?"R":"L")!==-1||i.platform.is.ios===!0&&r.isContainer.value===!0),G=v(()=>e.overlay===!1&&g.value===!0&&h.value===!1),ut=v(()=>e.overlay===!0&&g.value===!0&&h.value===!1),st=v(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&j.value===!1?" hidden":"")),dt=v(()=>({backgroundColor:`rgba(0,0,0,${Me.value*.4})`})),De=v(()=>Q.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),ct=v(()=>Q.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),ft=v(()=>{const a={};return r.header.space===!0&&De.value===!1&&(fe.value===!0?a.top=`${r.header.offset}px`:r.header.space===!0&&(a.top=`${r.header.size}px`)),r.footer.space===!0&&ct.value===!1&&(fe.value===!0?a.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(a.bottom=`${r.footer.size}px`)),a}),vt=v(()=>{const a={width:`${L.value}px`,transform:`translateX(${Qe.value}px)`};return h.value===!0?a:Object.assign(a,ft.value)}),mt=v(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),ht=v(()=>`q-drawer q-drawer--${e.side}`+(de.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(j.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${T.value===!0?"mini":"standard"}`+(fe.value===!0||G.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(De.value===!0?" q-drawer--top-padding":""))),pt=v(()=>{const a=i.lang.rtl===!0?e.side:ee.value;return[[Se,wt,void 0,{[a]:!0,mouse:!0}]]}),bt=v(()=>{const a=i.lang.rtl===!0?ee.value:e.side;return[[Se,Ae,void 0,{[a]:!0,mouse:!0}]]}),yt=v(()=>{const a=i.lang.rtl===!0?ee.value:e.side;return[[Se,Ae,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function ve(){qt(h,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}k(h,a=>{a===!0?(b=g.value,g.value===!0&&_(!1)):e.overlay===!1&&e.behavior!=="mobile"&&b!==!1&&(g.value===!0?(P(0),A(0),he()):x(!1))}),k(()=>e.side,(a,y)=>{r.instances[y]===F&&(r.instances[y]=void 0,r[y].space=!1,r[y].offset=0),r.instances[a]=F,r[a].size=L.value,r[a].space=G.value,r[a].offset=ce.value}),k(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&ve()}),k(()=>e.behavior+e.breakpoint,ve),k(r.isContainer,a=>{g.value===!0&&f(a!==!0),a===!0&&ve()}),k(r.scrollbarWidth,()=>{P(g.value===!0?0:void 0)}),k(ce,a=>{W("offset",a)}),k(G,a=>{l("onLayout",a),W("space",a)}),k(Q,()=>{P()}),k(L,a=>{P(),pe(e.miniToOverlay,a)}),k(()=>e.miniToOverlay,a=>{pe(a,L.value)}),k(()=>i.lang.rtl,()=>{P()}),k(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(gt(),r.animate())}),k(T,a=>{l("miniState",a)});function P(a){a===void 0?Y(()=>{a=g.value===!0?0:L.value,P(X.value*a)}):(r.isContainer.value===!0&&Q.value===!0&&(h.value===!0||Math.abs(a)===L.value)&&(a+=X.value*r.scrollbarWidth.value),Qe.value=a)}function A(a){Me.value=a}function me(a){const y=a===!0?"remove":r.isContainer.value!==!0?"add":"";y!==""&&document.body.classList[y]("q-body--drawer-toggle")}function gt(){q!==null&&clearTimeout(q),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),de.value=!0,q=setTimeout(()=>{q=null,de.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function wt(a){if(g.value!==!1)return;const y=L.value,E=ae(a.distance.x,0,y);if(a.isFinal===!0){E>=Math.min(75,y)===!0?x():(r.animate(),A(0),P(X.value*y)),j.value=!1;return}P((i.lang.rtl===!0?Q.value!==!0:Q.value)?Math.max(y-E,0):Math.min(0,E-y)),A(ae(E/y,0,1)),a.isFirst===!0&&(j.value=!0)}function Ae(a){if(g.value!==!0)return;const y=L.value,E=a.direction===e.side,te=(i.lang.rtl===!0?E!==!0:E)?ae(a.distance.x,0,y):0;if(a.isFinal===!0){Math.abs(te)<Math.min(75,y)===!0?(r.animate(),A(1),P(0)):_(),j.value=!1;return}P(X.value*te),A(ae(1-te/y,0,1)),a.isFirst===!0&&(j.value=!0)}function he(){f(!1),me(!0)}function W(a,y){r.update(e.side,a,y)}function qt(a,y){a.value!==y&&(a.value=y)}function pe(a,y){W("size",a===!0?e.miniWidth:y)}return r.instances[e.side]=F,pe(e.miniToOverlay,L.value),W("space",G.value),W("offset",ce.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),U(()=>{l("onLayout",G.value),l("miniState",T.value),b=e.showIfAbove===!0;const a=()=>{(g.value===!0?p:w)(!1,!0)};if(r.totalWidth.value!==0){Y(a);return}m=k(r.totalWidth,()=>{m(),m=void 0,g.value===!1&&e.showIfAbove===!0&&h.value===!1?x(!1):a()})}),N(()=>{m!==void 0&&m(),q!==null&&(clearTimeout(q),q=null),g.value===!0&&he(),r.instances[e.side]===F&&(r.instances[e.side]=void 0,W("size",0),W("offset",0),W("space",!1))}),()=>{const a=[];h.value===!0&&(e.noSwipeOpen===!1&&a.push(Vt(C("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),pt.value)),a.push(Ne("div",{ref:"backdrop",class:st.value,style:dt.value,"aria-hidden":"true",onClick:_},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>yt.value)));const y=T.value===!0&&n.mini!==void 0,E=[C("div",{...o,key:""+y,class:[mt.value,o.class]},y===!0?n.mini():I(n.default))];return e.elevated===!0&&g.value===!0&&E.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(Ne("aside",{ref:"content",class:ht.value,style:vt.value},E,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>bt.value)),C("div",{class:"q-drawer-container"},a)}}}),bn=V({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:l}}=M(),o=$e(se,D);if(o===D)return console.error("QPageContainer needs to be child of QLayout"),D;lt(Ot,!0);const t=v(()=>{const i={};return o.header.space===!0&&(i.paddingTop=`${o.header.size}px`),o.right.space===!0&&(i[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(i.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(i[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),i});return()=>C("div",{class:"q-page-container",style:t.value},I(n.default))}}),{passive:et}=H,yn=["both","horizontal","vertical"],gn=V({name:"QScrollObserver",props:{axis:{type:String,validator:e=>yn.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:nn},emits:["scroll"],setup(e,{emit:n}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,t,i;k(()=>e.scrollTarget,()=>{c(),f()});function s(){o!==null&&o();const b=Math.max(0,at(t)),q=rt(t),m={top:b-l.position.top,left:q-l.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const h=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";l.position={top:b,left:q},l.directionChanged=l.direction!==h,l.delta=m,l.directionChanged===!0&&(l.direction=h,l.inflectionPoint=l.position),n("scroll",{...l})}function f(){t=on(i,e.scrollTarget),t.addEventListener("scroll",d,et),d(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",d,et),t=void 0)}function d(b){if(b===!0||e.debounce===0||e.debounce==="0")s();else if(o===null){const[q,m]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];o=()=>{m(q),o=null}}}const{proxy:r}=M();return k(()=>r.$q.lang.rtl,s),U(()=>{i=r.$el.parentNode,f()}),N(()=>{o!==null&&o(),c()}),Object.assign(r,{trigger:d,getPosition:()=>l}),ze}}),wn=V({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:l}){const{proxy:{$q:o}}=M(),t=S(null),i=S(o.screen.height),s=S(e.container===!0?0:o.screen.width),f=S({position:0,direction:"down",inflectionPoint:0}),c=S(0),d=S(nt.value===!0?0:we()),r=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=v(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),q=v(()=>d.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),m=v(()=>d.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function h(w){if(e.container===!0||document.qScrollPrevented!==!0){const x={position:w.position.top,direction:w.direction,directionChanged:w.directionChanged,inflectionPoint:w.inflectionPoint.top,delta:w.delta.top};f.value=x,e.onScroll!==void 0&&l("scroll",x)}}function T(w){const{height:x,width:_}=w;let $=!1;i.value!==x&&($=!0,i.value=x,e.onScrollHeight!==void 0&&l("scrollHeight",x),g()),s.value!==_&&($=!0,s.value=_),$===!0&&e.onResize!==void 0&&l("resize",w)}function L({height:w}){c.value!==w&&(c.value=w,g())}function g(){if(e.container===!0){const w=i.value>c.value?we():0;d.value!==w&&(d.value=w)}}let u=null;const p={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:i,containerHeight:c,scrollbarWidth:d,totalWidth:v(()=>s.value+d.value),rows:v(()=>{const w=e.view.toLowerCase().split(" ");return{top:w[0].split(""),middle:w[1].split(""),bottom:w[2].split("")}}),header:le({size:0,offset:0,space:!1}),right:le({size:300,offset:0,space:!1}),footer:le({size:0,offset:0,space:!1}),left:le({size:300,offset:0,space:!1}),scroll:f,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(w,x,_){p[w][x]=_}};if(lt(se,p),we()>0){let w=function(){$=null,K.classList.remove("hide-scrollbar")},x=function(){if($===null){if(K.scrollHeight>o.screen.height)return;K.classList.add("hide-scrollbar")}else clearTimeout($);$=setTimeout(w,300)},_=function(F){$!==null&&F==="remove"&&(clearTimeout($),w()),window[`${F}EventListener`]("resize",x)},$=null;const K=document.body;k(()=>e.container!==!0?"add":"remove",_),e.container!==!0&&_("add"),Ht(()=>{_("remove")})}return()=>{const w=It(n.default,[C(gn,{onScroll:h}),C(Ee,{onResize:T})]),x=C("div",{class:r.value,style:b.value,ref:e.container===!0?void 0:t,tabindex:-1},w);return e.container===!0?C("div",{class:"q-layout-container overflow-hidden",ref:t},[C(Ee,{onResize:L}),C("div",{class:"absolute-full",style:q.value},[C("div",{class:"scroll",style:m.value},[x])])]):x}}}),tt=V({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const l=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>C("div",{class:l.value},I(n.default))}}),qn=V({name:"QItem",props:{...Ve,...St,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:l}){const{proxy:{$q:o}}=M(),t=Oe(e,o),{hasLink:i,linkAttrs:s,linkClass:f,linkTag:c,navigateOnClick:d}=Tt(),r=S(null),b=S(null),q=v(()=>e.clickable===!0||i.value===!0||e.tag==="label"),m=v(()=>e.disable!==!0&&q.value===!0),h=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(i.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),T=v(()=>e.insetLevel===void 0?null:{["padding"+(o.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function L(p){m.value===!0&&(b.value!==null&&(p.qKeyEvent!==!0&&document.activeElement===r.value?b.value.focus():document.activeElement===b.value&&r.value.focus()),d(p))}function g(p){if(m.value===!0&&Mt(p,[13,32])===!0){Pe(p),p.qKeyEvent=!0;const w=new MouseEvent("click",p);w.qKeyEvent=!0,r.value.dispatchEvent(w)}l("keyup",p)}function u(){const p=it(n.default,[]);return m.value===!0&&p.unshift(C("div",{class:"q-focus-helper",tabindex:-1,ref:b})),p}return()=>{const p={ref:r,class:h.value,style:T.value,role:"listitem",onClick:L,onKeyup:g};return m.value===!0?(p.tabindex=e.tabindex||"0",Object.assign(p,s.value)):q.value===!0&&(p["aria-disabled"]="true"),C(c.value,p,u())}}}),kn={__name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},setup(e){const n=e;return(l,o)=>(re(),xe(qn,{clickable:"",tag:"a",target:"_blank",href:n.link},{default:z(()=>[n.icon?(re(),xe(tt,{key:0,avatar:""},{default:z(()=>[B(xt,{name:n.icon},null,8,["name"])]),_:1})):Qt("",!0),B(tt,null,{default:z(()=>[B(Be,null,{default:z(()=>[ue(_e(n.title),1)]),_:1}),B(Be,{caption:""},{default:z(()=>[ue(_e(n.caption),1)]),_:1})]),_:1})]),_:1},8,["href"]))}},xn={__name:"MainLayout",setup(e){const n=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],l=S(!1);function o(){l.value=!l.value}return(t,i)=>{const s=Dt("router-view");return re(),xe(wn,{view:"lHh Lpr lFf"},{default:z(()=>[B(Yt,{elevated:""},{default:z(()=>[B(jt,null,{default:z(()=>[B(_t,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:o}),B(Xt,null,{default:z(()=>i[1]||(i[1]=[ue(" Quasar App ")])),_:1}),At("div",null,"Quasar v"+_e(t.$q.version),1)]),_:1})]),_:1}),B(pn,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=f=>l.value=f),"show-if-above":"",bordered:""},{default:z(()=>[B(Gt,null,{default:z(()=>[B(Be,{header:""},{default:z(()=>i[2]||(i[2]=[ue(" Essential Links ")])),_:1}),(re(),Wt(Rt,null,Ft(n,f=>B(kn,Nt({key:f.title,ref_for:!0},f),null,16)),64))]),_:1})]),_:1},8,["modelValue"]),B(bn,null,{default:z(()=>[B(s)]),_:1})]),_:1})}}};export{xn as default};
