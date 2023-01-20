"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[5314],{80493:function(e,t,n){n.d(t,{Z:function(){return T}});var r=n(93433),o=n(29439),a=n(4942),i=n(87462),s=n(63366),c=n(47313),l=(n(96214),n(83061)),d=n(21921),u=n(64164),p=n(11236),f=n(42669),v=n(17551),m=n(46095),h=n(46417),g=(0,m.Z)((0,h.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Z=n(56456),b=(0,u.ZP)(Z.Z)((function(e){var t=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,v._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,v._4)(t.palette.grey[600],.12)})})})),x=(0,u.ZP)(g)({width:24,height:16});var w=function(e){var t=e;return(0,h.jsx)("li",{children:(0,h.jsx)(b,(0,i.Z)({focusRipple:!0},e,{ownerState:t,children:(0,h.jsx)(x,{ownerState:t})}))})},S=n(77430),C=n(32298);function y(e){return(0,C.Z)("MuiBreadcrumbs",e)}var R=(0,S.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),M=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],k=(0,u.ZP)(f.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,a.Z)({},"& .".concat(R.li),t.li),t.root]}})({}),N=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),D=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function j(e,t,n,r){return e.reduce((function(o,a,i){return i<e.length-1?o=o.concat(a,(0,h.jsx)(D,{"aria-hidden":!0,className:t,ownerState:r,children:n},"separator-".concat(i))):o.push(a),o}),[])}var T=c.forwardRef((function(e,t){var n=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),a=n.children,u=n.className,f=n.component,v=void 0===f?"nav":f,m=n.expandText,g=void 0===m?"Show path":m,Z=n.itemsAfterCollapse,b=void 0===Z?1:Z,x=n.itemsBeforeCollapse,S=void 0===x?1:x,C=n.maxItems,R=void 0===C?8:C,D=n.separator,T=void 0===D?"/":D,A=(0,s.Z)(n,M),I=c.useState(!1),B=(0,o.Z)(I,2),L=B[0],P=B[1],_=(0,i.Z)({},n,{component:v,expanded:L,expandText:g,itemsAfterCollapse:b,itemsBeforeCollapse:S,maxItems:R,separator:T}),z=function(e){var t=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},y,t)}(_),F=c.useRef(null),X=c.Children.toArray(a).filter((function(e){return c.isValidElement(e)})).map((function(e,t){return(0,h.jsx)("li",{className:z.li,children:e},"child-".concat(t))}));return(0,h.jsx)(k,(0,i.Z)({ref:t,component:v,color:"text.secondary",className:(0,l.Z)(z.root,u),ownerState:_},A,{children:(0,h.jsx)(N,{className:z.ol,ref:F,ownerState:_,children:j(L||R&&X.length<=R?X:function(e){return S+b>=e.length?e:[].concat((0,r.Z)(e.slice(0,S)),[(0,h.jsx)(w,{"aria-label":g,onClick:function(){P(!0);var e=F.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,r.Z)(e.slice(e.length-b,e.length)))}(X),z.separator,T,_)})}))}))},66382:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(63366),o=n(87462),a=n(47313),i=n(83061),s=n(21921),c=n(64164),l=n(11236),d=n(77430),u=n(32298);function p(e){return(0,u.Z)("MuiDialogActions",e)}(0,d.Z)("MuiDialogActions",["root","spacing"]);var f=n(46417),v=["className","disableSpacing"],m=(0,c.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return(0,o.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),h=a.forwardRef((function(e,t){var n=(0,l.Z)({props:e,name:"MuiDialogActions"}),a=n.className,c=n.disableSpacing,d=void 0!==c&&c,u=(0,r.Z)(n,v),h=(0,o.Z)({},n,{disableSpacing:d}),g=function(e){var t=e.classes,n={root:["root",!e.disableSpacing&&"spacing"]};return(0,s.Z)(n,p,t)}(h);return(0,f.jsx)(m,(0,o.Z)({className:(0,i.Z)(g.root,a),ownerState:h,ref:t},u))}))},71235:function(e,t,n){n.d(t,{Z:function(){return Z}});var r=n(4942),o=n(63366),a=n(87462),i=n(47313),s=n(83061),c=n(21921),l=n(64164),d=n(11236),u=n(77430),p=n(32298);function f(e){return(0,p.Z)("MuiDialogContent",e)}(0,u.Z)("MuiDialogContent",["root","dividers"]);var v=n(9757),m=n(46417),h=["className","dividers"],g=(0,l.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dividers&&t.dividers]}})((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},n.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat((t.vars||t).palette.divider),borderBottom:"1px solid ".concat((t.vars||t).palette.divider)}:(0,r.Z)({},".".concat(v.Z.root," + &"),{paddingTop:0}))})),Z=i.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiDialogContent"}),r=n.className,i=n.dividers,l=void 0!==i&&i,u=(0,o.Z)(n,h),p=(0,a.Z)({},n,{dividers:l}),v=function(e){var t=e.classes,n={root:["root",e.dividers&&"dividers"]};return(0,c.Z)(n,f,t)}(p);return(0,m.jsx)(g,(0,a.Z)({className:(0,s.Z)(v.root,r),ownerState:p,ref:t},u))}))},5448:function(e,t,n){var r=n(87462),o=n(63366),a=n(47313),i=n(83061),s=n(21921),c=n(42669),l=n(64164),d=n(11236),u=n(9757),p=n(11954),f=n(46417),v=["className","id"],m=(0,l.ZP)(c.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),h=a.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiDialogTitle"}),c=n.className,l=n.id,h=(0,o.Z)(n,v),g=n,Z=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},u.a,t)}(g),b=a.useContext(p.Z).titleId,x=void 0===b?l:b;return(0,f.jsx)(m,(0,r.Z)({component:"h2",className:(0,i.Z)(Z.root,c),ownerState:g,ref:t,variant:"h6",id:x},h))}));t.Z=h},9757:function(e,t,n){n.d(t,{a:function(){return a}});var r=n(77430),o=n(32298);function a(e){return(0,o.Z)("MuiDialogTitle",e)}var i=(0,r.Z)("MuiDialogTitle",["root"]);t.Z=i},2983:function(e,t,n){n.d(t,{Z:function(){return T}});var r=n(30168),o=n(63366),a=n(87462),i=n(47313),s=n(83061),c=n(30686),l=n(21921);function d(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function u(e){return parseFloat(e)}var p=n(17551),f=n(64164),v=n(11236),m=n(77430),h=n(32298);function g(e){return(0,h.Z)("MuiSkeleton",e)}(0,m.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var Z,b,x,w,S,C,y,R,M=n(46417),k=["animation","className","component","height","style","variant","width"],N=(0,c.F4)(S||(S=Z||(Z=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),D=(0,c.F4)(C||(C=b||(b=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),j=(0,f.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((function(e){var t=e.theme,n=e.ownerState,r=d(t.shape.borderRadius)||"px",o=u(t.shape.borderRadius);return(0,a.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,p.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(o).concat(r,"/").concat(Math.round(o/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(t.vars||t).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(e){return"pulse"===e.ownerState.animation&&(0,c.iv)(y||(y=x||(x=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),N)}),(function(e){var t=e.ownerState,n=e.theme;return"wave"===t.animation&&(0,c.iv)(R||(R=w||(w=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),D,(n.vars||n).palette.action.hover)})),T=i.forwardRef((function(e,t){var n=(0,v.Z)({props:e,name:"MuiSkeleton"}),r=n.animation,i=void 0===r?"pulse":r,c=n.className,d=n.component,u=void 0===d?"span":d,p=n.height,f=n.style,m=n.variant,h=void 0===m?"text":m,Z=n.width,b=(0,o.Z)(n,k),x=(0,a.Z)({},n,{animation:i,component:u,variant:h,hasChildren:Boolean(b.children)}),w=function(e){var t=e.classes,n=e.variant,r=e.animation,o=e.hasChildren,a=e.width,i=e.height,s={root:["root",n,r,o&&"withChildren",o&&!a&&"fitContent",o&&!i&&"heightAuto"]};return(0,l.Z)(s,g,t)}(x);return(0,M.jsx)(j,(0,a.Z)({as:u,ref:t,className:(0,s.Z)(w.root,c),ownerState:x},b,{style:(0,a.Z)({width:Z,height:p},f)}))}))},99780:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(4942),o=n(63366),a=n(87462),i=n(21921),s=n(83061),c=n(47313),l=n(56456),d=n(46095),u=n(46417),p=(0,d.Z)((0,u.jsx)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),f=n(64164),v=n(11236),m=n(28170),h=n(77430),g=n(32298);function Z(e){return(0,g.Z)("MuiTableSortLabel",e)}var b=(0,h.Z)("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),x=["active","children","className","direction","hideSortIcon","IconComponent"],w=(0,f.ZP)(l.Z,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.active&&t.active]}})((function(e){var t=e.theme;return(0,r.Z)({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(t.vars||t).palette.text.secondary},"&:hover":(0,r.Z)({color:(t.vars||t).palette.text.secondary},"& .".concat(b.icon),{opacity:.5})},"&.".concat(b.active),(0,r.Z)({color:(t.vars||t).palette.text.primary},"& .".concat(b.icon),{opacity:1,color:(t.vars||t).palette.text.secondary}))})),S=(0,f.ZP)("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:function(e,t){var n=e.ownerState;return[t.icon,t["iconDirection".concat((0,m.Z)(n.direction))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter}),userSelect:"none"},"desc"===n.direction&&{transform:"rotate(0deg)"},"asc"===n.direction&&{transform:"rotate(180deg)"})})),C=c.forwardRef((function(e,t){var n=(0,v.Z)({props:e,name:"MuiTableSortLabel"}),r=n.active,c=void 0!==r&&r,l=n.children,d=n.className,f=n.direction,h=void 0===f?"asc":f,g=n.hideSortIcon,b=void 0!==g&&g,C=n.IconComponent,y=void 0===C?p:C,R=(0,o.Z)(n,x),M=(0,a.Z)({},n,{active:c,direction:h,hideSortIcon:b,IconComponent:y}),k=function(e){var t=e.classes,n=e.direction,r={root:["root",e.active&&"active"],icon:["icon","iconDirection".concat((0,m.Z)(n))]};return(0,i.Z)(r,Z,t)}(M);return(0,u.jsxs)(w,(0,a.Z)({className:(0,s.Z)(k.root,d),component:"span",disableRipple:!0,ownerState:M,ref:t},R,{children:[l,b&&!c?null:(0,u.jsx)(S,{as:y,className:(0,s.Z)(k.icon),ownerState:M})]}))}))},59023:function(e,t,n){n.d(t,{$:function(){return a}});var r=n(66797),o=n(26675);function a(e,t){return void 0===t&&(t={}),(0,o.B)(e,(0,r.pi)({delimiter:"."},t))}},73709:function(e,t,n){n.d(t,{o:function(){return a}});var r=n(66797),o=n(59023);function a(e,t){return void 0===t&&(t={}),(0,o.$)(e,(0,r.pi)({delimiter:"-"},t))}}}]);