"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[6214],{38875:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(1413),l=a(45987),r=a(16157),i=a(62463),s=a(42669),o=a(80493),d=a(77449),u=a(2135),c=a(46417);function h(e){var t=e.link,a=e.activeLast,l=e.disabled,i=t.name,s=t.href,o=t.icon,h=(0,n.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},l&&!a&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),x=(0,c.jsxs)(c.Fragment,{children:[o&&(0,c.jsx)(r.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:o}),i]});return s?(0,c.jsx)(d.Z,{component:u.rU,to:s,sx:h,children:x}):(0,c.jsxs)(r.Z,{sx:h,children:[" ",x," "]})}var x=["links","action","heading","moreLink","activeLast","sx"];function p(e){var t=e.links,a=e.action,u=e.heading,p=e.moreLink,f=e.activeLast,m=e.sx,Z=(0,l.Z)(e,x),j=t[t.length-1].name;return(0,c.jsxs)(r.Z,{sx:(0,n.Z)({mb:5},m),children:[(0,c.jsxs)(i.Z,{direction:"row",alignItems:"center",children:[(0,c.jsxs)(r.Z,{sx:{flexGrow:1},children:[u&&(0,c.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:u}),!!t.length&&(0,c.jsx)(o.Z,(0,n.Z)((0,n.Z)({separator:(0,c.jsx)(v,{})},Z),{},{children:t.map((function(e){return(0,c.jsx)(h,{link:e,activeLast:f,disabled:e.name===j},e.name||"")}))}))]}),a&&(0,c.jsxs)(r.Z,{sx:{flexShrink:0},children:[" ",a," "]})]}),!!p&&(0,c.jsx)(r.Z,{sx:{mt:2},children:p.map((function(e){return(0,c.jsx)(d.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function v(){return(0,c.jsx)(r.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},56467:function(e,t,a){a.r(t),a.d(t,{default:function(){return C}});var n=a(29439),l=a(47313),r=a(65964),i=a(16157),s=a(10679),o=a(49280),d=a(51987),u=a(48175),c=a(38875),h=a(4942),x=a(1413),p=a(67881),v=a(59017),f=a(18104),m=a(81962),Z=a(82403),j=a(8730),b=a(16769),g=a(46417),y=[{value:"USD",label:"$"},{value:"EUR",label:"\u20ac"},{value:"BTC",label:"\u0e3f"},{value:"JPY",label:"\xa5"}],w={"& > *":{my:"8px !important"}};function P(e){var t=e.variant,a=(0,l.useState)("EUR"),r=(0,n.Z)(a,2),i=r[0],s=r[1],o=(0,l.useState)({amount:"",password:"",weight:"",weightRange:"",showPassword:!1}),d=(0,n.Z)(o,2),u=d[0],c=d[1],P=function(e){s(e.target.value)},W=function(e){return function(t){c((0,x.Z)((0,x.Z)({},u),{},(0,h.Z)({},e,t.target.value)))}};return(0,g.jsxs)(Z.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,g.jsxs)(b.g,{title:"General",sx:w,children:[(0,g.jsx)(p.Z,{variant:t,fullWidth:!0,label:"Inactive"}),(0,g.jsx)(p.Z,{variant:t,required:!0,fullWidth:!0,label:"Activated",defaultValue:"Hello Minimal"}),(0,g.jsx)(p.Z,{variant:t,fullWidth:!0,type:"password",label:"Password",autoComplete:"current-password"}),(0,g.jsx)(p.Z,{variant:t,disabled:!0,fullWidth:!0,label:"Disabled",defaultValue:"Hello Minimal"})]}),(0,g.jsxs)(b.g,{title:"With Icon & Adornments",sx:w,children:[(0,g.jsx)(p.Z,{variant:t,fullWidth:!0,label:"Filled",InputProps:{startAdornment:(0,g.jsx)(v.Z,{position:"start",children:(0,g.jsx)(j.Z,{icon:"eva:person-fill",width:24})})}}),(0,g.jsx)(p.Z,{variant:t,disabled:!0,fullWidth:!0,label:"Disabled",defaultValue:"Hello Minimal",InputProps:{startAdornment:(0,g.jsx)(v.Z,{position:"start",children:(0,g.jsx)(j.Z,{icon:"eva:person-fill",width:24})})}}),(0,g.jsx)(p.Z,{variant:t,fullWidth:!0,label:"With normal TextField",InputProps:{startAdornment:(0,g.jsx)(v.Z,{position:"start",children:"Kg"})}}),(0,g.jsx)(p.Z,{variant:t,fullWidth:!0,value:u.weight,onChange:W("weight"),helperText:"Weight",InputProps:{endAdornment:(0,g.jsx)(v.Z,{position:"end",children:"Kg"})}}),(0,g.jsx)(p.Z,{variant:t,fullWidth:!0,type:u.showPassword?"text":"password",value:u.password,onChange:W("password"),label:"Password",InputProps:{startAdornment:(0,g.jsx)(v.Z,{position:"start",children:(0,g.jsx)(j.Z,{icon:"eva:person-fill",width:24})}),endAdornment:(0,g.jsx)(v.Z,{position:"end",children:(0,g.jsx)(f.Z,{onClick:function(){c((0,x.Z)((0,x.Z)({},u),{},{showPassword:!u.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:u.showPassword?(0,g.jsx)(j.Z,{icon:"eva:eye-fill",width:24}):(0,g.jsx)(j.Z,{icon:"eva:eye-off-fill",width:24})})})}})]}),(0,g.jsxs)(b.g,{title:"With Caption",sx:w,children:[(0,g.jsx)(p.Z,{variant:t,fullWidth:!0,label:"Error",defaultValue:"Hello Minimal",helperText:"Incorrect entry."}),(0,g.jsx)(p.Z,{variant:t,error:!0,fullWidth:!0,label:"Error",defaultValue:"Hello Minimal",helperText:"Incorrect entry."})]}),(0,g.jsxs)(b.g,{title:"Type",sx:w,children:[(0,g.jsx)(p.Z,{variant:t,fullWidth:!0,type:"password",label:"Password",autoComplete:"current-password"}),(0,g.jsx)(p.Z,{variant:t,fullWidth:!0,type:"number",label:"Number",defaultValue:0,InputLabelProps:{shrink:!0}}),(0,g.jsx)(p.Z,{variant:t,fullWidth:!0,label:"Search",type:"search"})]}),(0,g.jsxs)(b.g,{title:"Size",sx:w,children:[(0,g.jsx)(p.Z,{variant:t,fullWidth:!0,label:"Size",size:"small",defaultValue:"Small"}),(0,g.jsx)(p.Z,{variant:t,fullWidth:!0,label:"Size",defaultValue:"Normal"})]}),(0,g.jsxs)(b.g,{title:"Select",sx:w,children:[(0,g.jsx)(p.Z,{variant:t,select:!0,fullWidth:!0,label:"Select",value:i,onChange:P,helperText:"Please select your currency",children:y.map((function(e){return(0,g.jsx)(m.Z,{value:e.value,children:e.label},e.value)}))}),(0,g.jsx)(p.Z,{variant:t,select:!0,fullWidth:!0,size:"small",value:i,label:"Native select",SelectProps:{native:!0},onChange:P,helperText:"Please select your currency",children:y.map((function(e){return(0,g.jsx)("option",{value:e.value,children:e.label},e.value)}))})]}),(0,g.jsxs)(b.g,{title:"Multiline",sx:w,children:[(0,g.jsx)(p.Z,{variant:t,fullWidth:!0,label:"Multiline",multiline:!0,maxRows:4,value:"Controlled"}),(0,g.jsx)(p.Z,{variant:t,fullWidth:!0,multiline:!0,placeholder:"Placeholder",label:"Multiline Placeholder"}),(0,g.jsx)(p.Z,{variant:t,rows:4,fullWidth:!0,multiline:!0,label:"Multiline",defaultValue:"Default Value"})]})]})}var W=[{value:"outlined",label:"Outlined",component:(0,g.jsx)(P,{variant:"outlined"})},{value:"filled",label:"Filled",component:(0,g.jsx)(P,{variant:"filled"})},{value:"standard",label:"Standard",component:(0,g.jsx)(P,{variant:"standard"})}];function C(){var e=(0,l.useState)("outlined"),t=(0,n.Z)(e,2),a=t[0],h=t[1];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.ql,{children:(0,g.jsx)("title",{children:" MUI Components: Textfield | Minimal UI"})}),(0,g.jsx)(i.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,g.jsx)(s.Z,{children:(0,g.jsx)(c.Z,{heading:"Textfield",links:[{name:"Components",href:u.ko.components},{name:"Textfield"}],moreLink:["https://mui.com/components/text-fields"]})})}),(0,g.jsxs)(s.Z,{sx:{my:10},children:[(0,g.jsx)(o.Z,{value:a,onChange:function(e,t){return h(t)},children:W.map((function(e){return(0,g.jsx)(d.Z,{value:e.value,label:e.label},e.value)}))}),(0,g.jsx)("form",{noValidate:!0,autoComplete:"off",children:W.map((function(e){return e.value===a&&(0,g.jsx)(i.Z,{sx:{mt:5},children:e.component},e.value)}))})]})]})}},16769:function(e,t,a){a.d(t,{_:function(){return c},g:function(){return u}});var n=a(1413),l=a(17551),r=a(80654),i=a(29700),s=a(16157),o=a(42669),d=a(46417);function u(e){var t=e.title,a=e.sx,o=e.children;return(0,d.jsxs)(r.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,l.Fq)(e.palette.grey[500],.04)}},children:[t&&(0,d.jsx)(i.Z,{title:t}),(0,d.jsx)(s.Z,{sx:(0,n.Z)({p:5,minHeight:180},a),children:o})]})}function c(e){var t=e.title;return(0,d.jsx)(o.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},29700:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(4942),l=a(63366),r=a(87462),i=a(47313),s=a(83061),o=a(21921),d=a(42669),u=a(11236),c=a(64164),h=a(77430),x=a(32298);function p(e){return(0,x.Z)("MuiCardHeader",e)}var v=(0,h.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),f=a(46417),m=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],Z=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return(0,r.Z)((a={},(0,n.Z)(a,"& .".concat(v.title),t.title),(0,n.Z)(a,"& .".concat(v.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),j=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=i.forwardRef((function(e,t){var a=(0,u.Z)({props:e,name:"MuiCardHeader"}),n=a.action,i=a.avatar,c=a.className,h=a.component,x=void 0===h?"div":h,v=a.disableTypography,y=void 0!==v&&v,w=a.subheader,P=a.subheaderTypographyProps,W=a.title,C=a.titleTypographyProps,k=(0,l.Z)(a,m),M=(0,r.Z)({},a,{component:x,disableTypography:y}),S=function(e){var t=e.classes;return(0,o.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)}(M),T=W;null==T||T.type===d.Z||y||(T=(0,f.jsx)(d.Z,(0,r.Z)({variant:i?"body2":"h5",className:S.title,component:"span",display:"block"},C,{children:T})));var I=w;return null==I||I.type===d.Z||y||(I=(0,f.jsx)(d.Z,(0,r.Z)({variant:i?"body2":"body1",className:S.subheader,color:"text.secondary",component:"span",display:"block"},P,{children:I}))),(0,f.jsxs)(Z,(0,r.Z)({className:(0,s.Z)(S.root,c),as:x,ref:t,ownerState:M},k,{children:[i&&(0,f.jsx)(j,{className:S.avatar,ownerState:M,children:i}),(0,f.jsxs)(g,{className:S.content,ownerState:M,children:[T,I]}),n&&(0,f.jsx)(b,{className:S.action,ownerState:M,children:n})]}))}))},56248:function(e,t,a){a(47313);var n=a(46095),l=a(46417);t.Z=(0,n.Z)((0,l.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},82222:function(e,t,a){a(47313);var n=a(46095),l=a(46417);t.Z=(0,n.Z)((0,l.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")}}]);