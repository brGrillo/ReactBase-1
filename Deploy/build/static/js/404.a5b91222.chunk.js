"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[404],{80493:function(e,t,o){o.d(t,{Z:function(){return B}});var r=o(93433),a=o(29439),n=o(4942),i=o(87462),l=o(63366),s=o(47313),c=(o(96214),o(83061)),d=o(21921),u=o(64164),p=o(11236),v=o(42669),f=o(17551),m=o(46095),h=o(46417),g=(0,m.Z)((0,h.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Z=o(56456),b=(0,u.ZP)(Z.Z)((function(e){var t=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,f._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,f._4)(t.palette.grey[600],.12)})})})),y=(0,u.ZP)(g)({width:24,height:16});var x=function(e){var t=e;return(0,h.jsx)("li",{children:(0,h.jsx)(b,(0,i.Z)({focusRipple:!0},e,{ownerState:t,children:(0,h.jsx)(y,{ownerState:t})}))})},C=o(77430),R=o(32298);function w(e){return(0,R.Z)("MuiBreadcrumbs",e)}var M=(0,C.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),T=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],N=(0,u.ZP)(v.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,n.Z)({},"& .".concat(M.li),t.li),t.root]}})({}),S=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),z=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function k(e,t,o,r){return e.reduce((function(a,n,i){return i<e.length-1?a=a.concat(n,(0,h.jsx)(z,{"aria-hidden":!0,className:t,ownerState:r,children:o},"separator-".concat(i))):a.push(n),a}),[])}var B=s.forwardRef((function(e,t){var o=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),n=o.children,u=o.className,v=o.component,f=void 0===v?"nav":v,m=o.expandText,g=void 0===m?"Show path":m,Z=o.itemsAfterCollapse,b=void 0===Z?1:Z,y=o.itemsBeforeCollapse,C=void 0===y?1:y,R=o.maxItems,M=void 0===R?8:R,z=o.separator,B=void 0===z?"/":z,j=(0,l.Z)(o,T),P=s.useState(!1),W=(0,a.Z)(P,2),O=W[0],L=W[1],_=(0,i.Z)({},o,{component:f,expanded:O,expandText:g,itemsAfterCollapse:b,itemsBeforeCollapse:C,maxItems:M,separator:B}),H=function(e){var t=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},w,t)}(_),A=s.useRef(null),F=s.Children.toArray(n).filter((function(e){return s.isValidElement(e)})).map((function(e,t){return(0,h.jsx)("li",{className:H.li,children:e},"child-".concat(t))}));return(0,h.jsx)(N,(0,i.Z)({ref:t,component:f,color:"text.secondary",className:(0,c.Z)(H.root,u),ownerState:_},j,{children:(0,h.jsx)(S,{className:H.ol,ref:A,ownerState:_,children:k(O||M&&F.length<=M?F:function(e){return C+b>=e.length?e:[].concat((0,r.Z)(e.slice(0,C)),[(0,h.jsx)(x,{"aria-label":g,onClick:function(){L(!0);var e=A.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,r.Z)(e.slice(e.length-b,e.length)))}(F),H.separator,B,_)})}))}))},82821:function(e,t,o){o.d(t,{Z:function(){return h}});var r=o(87462),a=o(63366),n=o(47313),i=o(83061),l=o(21921),s=o(64164),c=o(11236),d=o(77430),u=o(32298);function p(e){return(0,u.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var v=o(46417),f=["className","component"],m=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),h=n.forwardRef((function(e,t){var o=(0,c.Z)({props:e,name:"MuiCardContent"}),n=o.className,s=o.component,d=void 0===s?"div":s,u=(0,a.Z)(o,f),h=(0,r.Z)({},o,{component:d}),g=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},p,t)}(h);return(0,v.jsx)(m,(0,r.Z)({as:d,className:(0,i.Z)(g.root,n),ownerState:h,ref:t},u))}))},29700:function(e,t,o){o.d(t,{Z:function(){return C}});var r=o(4942),a=o(63366),n=o(87462),i=o(47313),l=o(83061),s=o(21921),c=o(42669),d=o(11236),u=o(64164),p=o(77430),v=o(32298);function f(e){return(0,v.Z)("MuiCardHeader",e)}var m=(0,p.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=o(46417),g=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],Z=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var o;return(0,n.Z)((o={},(0,r.Z)(o,"& .".concat(m.title),t.title),(0,r.Z)(o,"& .".concat(m.subheader),t.subheader),o),t.root)}})({display:"flex",alignItems:"center",padding:16}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),x=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),C=i.forwardRef((function(e,t){var o=(0,d.Z)({props:e,name:"MuiCardHeader"}),r=o.action,i=o.avatar,u=o.className,p=o.component,v=void 0===p?"div":p,m=o.disableTypography,C=void 0!==m&&m,R=o.subheader,w=o.subheaderTypographyProps,M=o.title,T=o.titleTypographyProps,N=(0,a.Z)(o,g),S=(0,n.Z)({},o,{component:v,disableTypography:C}),z=function(e){var t=e.classes;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},f,t)}(S),k=M;null==k||k.type===c.Z||C||(k=(0,h.jsx)(c.Z,(0,n.Z)({variant:i?"body2":"h5",className:z.title,component:"span",display:"block"},T,{children:k})));var B=R;return null==B||B.type===c.Z||C||(B=(0,h.jsx)(c.Z,(0,n.Z)({variant:i?"body2":"body1",className:z.subheader,color:"text.secondary",component:"span",display:"block"},w,{children:B}))),(0,h.jsxs)(Z,(0,n.Z)({className:(0,l.Z)(z.root,u),as:v,ref:t,ownerState:S},N,{children:[i&&(0,h.jsx)(b,{className:z.avatar,ownerState:S,children:i}),(0,h.jsxs)(x,{className:z.content,ownerState:S,children:[k,B]}),r&&(0,h.jsx)(y,{className:z.action,ownerState:S,children:r})]}))}))},92484:function(e,t,o){o.d(t,{Z:function(){return g}});var r=o(87462),a=o(63366),n=o(47313),i=o(83061),l=o(21921),s=o(64164),c=o(11236),d=o(80654),u=o(77430),p=o(32298);function v(e){return(0,p.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var f=o(46417),m=["className","raised"],h=(0,s.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),g=n.forwardRef((function(e,t){var o=(0,c.Z)({props:e,name:"MuiCard"}),n=o.className,s=o.raised,d=void 0!==s&&s,u=(0,a.Z)(o,m),p=(0,r.Z)({},o,{raised:d}),g=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},v,t)}(p);return(0,f.jsx)(h,(0,r.Z)({className:(0,i.Z)(g.root,n),elevation:d?8:void 0,ref:t,ownerState:p},u))}))},93523:function(e,t,o){o.d(t,{Z:function(){return y}});var r=o(4942),a=o(63366),n=o(87462),i=o(47313),l=(o(96214),o(83061)),s=o(21921),c=o(64164),d=o(11236),u=o(28170);function p(e,t){return void 0!==t&&void 0!==e&&(Array.isArray(t)?t.indexOf(e)>=0:e===t)}var v=o(77430),f=o(32298);function m(e){return(0,f.Z)("MuiToggleButtonGroup",e)}var h=(0,v.Z)("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),g=o(46417),Z=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],b=(0,c.ZP)("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[(0,r.Z)({},"& .".concat(h.grouped),t.grouped),(0,r.Z)({},"& .".concat(h.grouped),t["grouped".concat((0,u.Z)(o.orientation))]),t.root,"vertical"===o.orientation&&t.vertical,o.fullWidth&&t.fullWidth]}})((function(e){var t=e.ownerState,o=e.theme;return(0,n.Z)({display:"inline-flex",borderRadius:(o.vars||o).shape.borderRadius},"vertical"===t.orientation&&{flexDirection:"column"},t.fullWidth&&{width:"100%"},(0,r.Z)({},"& .".concat(h.grouped),(0,n.Z)({},"horizontal"===t.orientation?(0,r.Z)({"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0}},"&.".concat(h.selected," + .").concat(h.grouped,".").concat(h.selected),{borderLeft:0,marginLeft:0}):(0,r.Z)({"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}},"&.".concat(h.selected," + .").concat(h.grouped,".").concat(h.selected),{borderTop:0,marginTop:0}))))})),y=i.forwardRef((function(e,t){var o=(0,d.Z)({props:e,name:"MuiToggleButtonGroup"}),r=o.children,c=o.className,v=o.color,f=void 0===v?"standard":v,h=o.disabled,y=void 0!==h&&h,x=o.exclusive,C=void 0!==x&&x,R=o.fullWidth,w=void 0!==R&&R,M=o.onChange,T=o.orientation,N=void 0===T?"horizontal":T,S=o.size,z=void 0===S?"medium":S,k=o.value,B=(0,a.Z)(o,Z),j=(0,n.Z)({},o,{disabled:y,fullWidth:w,orientation:N,size:z}),P=function(e){var t=e.classes,o=e.orientation,r=e.fullWidth,a=e.disabled,n={root:["root","vertical"===o&&"vertical",r&&"fullWidth"],grouped:["grouped","grouped".concat((0,u.Z)(o)),a&&"disabled"]};return(0,s.Z)(n,m,t)}(j),W=function(e,t){if(M){var o,r=k&&k.indexOf(t);k&&r>=0?(o=k.slice()).splice(r,1):o=k?k.concat(t):[t],M(e,o)}},O=function(e,t){M&&M(e,k===t?null:t)};return(0,g.jsx)(b,(0,n.Z)({role:"group",className:(0,l.Z)(P.root,c),ref:t,ownerState:j},B,{children:i.Children.map(r,(function(e){return i.isValidElement(e)?i.cloneElement(e,{className:(0,l.Z)(P.grouped,e.props.className),onChange:C?O:W,selected:void 0===e.props.selected?p(e.props.value,k):e.props.selected,size:e.props.size||z,fullWidth:w,color:e.props.color||f,disabled:e.props.disabled||y}):null}))}))}))},68097:function(e,t,o){o.d(t,{Z:function(){return x}});var r=o(4942),a=o(63366),n=o(87462),i=o(47313),l=o(83061),s=o(21921),c=o(17551),d=o(56456),u=o(28170),p=o(11236),v=o(64164),f=o(77430),m=o(32298);function h(e){return(0,m.Z)("MuiToggleButton",e)}var g=(0,f.Z)("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),Z=o(46417),b=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],y=(0,v.ZP)(d.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t["size".concat((0,u.Z)(o.size))]]}})((function(e){var t,o,a=e.theme,i=e.ownerState,l="standard"===i.color?a.palette.text.primary:a.palette[i.color].main;return a.vars&&(l="standard"===i.color?a.vars.palette.text.primary:a.vars.palette[i.color].main,o="standard"===i.color?a.vars.palette.text.primaryChannel:a.vars.palette[i.color].mainChannel),(0,n.Z)({},a.typography.button,{borderRadius:(a.vars||a).shape.borderRadius,padding:11,border:"1px solid ".concat((a.vars||a).palette.divider),color:(a.vars||a).palette.action.active},i.fullWidth&&{width:"100%"},(t={},(0,r.Z)(t,"&.".concat(g.disabled),{color:(a.vars||a).palette.action.disabled,border:"1px solid ".concat((a.vars||a).palette.action.disabledBackground)}),(0,r.Z)(t,"&:hover",{textDecoration:"none",backgroundColor:a.vars?"rgba(".concat(a.vars.palette.text.primaryChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(a.palette.text.primary,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}),(0,r.Z)(t,"&.".concat(g.selected),{color:l,backgroundColor:a.vars?"rgba(".concat(o," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,c.Fq)(l,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:a.vars?"rgba(".concat(o," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,c.Fq)(l,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(o," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,c.Fq)(l,a.palette.action.selectedOpacity)}}}),t),"small"===i.size&&{padding:7,fontSize:a.typography.pxToRem(13)},"large"===i.size&&{padding:15,fontSize:a.typography.pxToRem(15)})})),x=i.forwardRef((function(e,t){var o=(0,p.Z)({props:e,name:"MuiToggleButton"}),r=o.children,i=o.className,c=o.color,d=void 0===c?"standard":c,v=o.disabled,f=void 0!==v&&v,m=o.disableFocusRipple,g=void 0!==m&&m,x=o.fullWidth,C=void 0!==x&&x,R=o.onChange,w=o.onClick,M=o.selected,T=o.size,N=void 0===T?"medium":T,S=o.value,z=(0,a.Z)(o,b),k=(0,n.Z)({},o,{color:d,disabled:f,disableFocusRipple:g,fullWidth:C,size:N}),B=function(e){var t=e.classes,o=e.fullWidth,r=e.selected,a=e.disabled,n=e.size,i=e.color,l={root:["root",r&&"selected",a&&"disabled",o&&"fullWidth","size".concat((0,u.Z)(n)),i]};return(0,s.Z)(l,h,t)}(k);return(0,Z.jsx)(y,(0,n.Z)({className:(0,l.Z)(B.root,i),disabled:f,focusRipple:!g,ref:t,onClick:function(e){w&&(w(e,S),e.defaultPrevented)||R&&R(e,S)},onChange:R,value:S,ownerState:k,"aria-pressed":M},z,{children:r}))}))}}]);