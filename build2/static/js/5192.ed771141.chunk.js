"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[5192],{21365:function(e,r,n){n.d(r,{SA:function(){return t.SA},ZP:function(){return a.Z}});var t=n(10114),a=n(91245)},38875:function(e,r,n){n.d(r,{Z:function(){return m}});var t=n(1413),a=n(45987),o=n(16157),i=n(62463),s=n(42669),l=n(80493),c=n(77449),d=n(2135),u=n(46417);function p(e){var r=e.link,n=e.activeLast,a=e.disabled,i=r.name,s=r.href,l=r.icon,p=(0,t.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},a&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),h=(0,u.jsxs)(u.Fragment,{children:[l&&(0,u.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),i]});return s?(0,u.jsx)(c.Z,{component:d.rU,to:s,sx:p,children:h}):(0,u.jsxs)(o.Z,{sx:p,children:[" ",h," "]})}var h=["links","action","heading","moreLink","activeLast","sx"];function m(e){var r=e.links,n=e.action,d=e.heading,m=e.moreLink,Z=e.activeLast,f=e.sx,v=(0,a.Z)(e,h),g=r[r.length-1].name;return(0,u.jsxs)(o.Z,{sx:(0,t.Z)({mb:5},f),children:[(0,u.jsxs)(i.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(o.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:d}),!!r.length&&(0,u.jsx)(l.Z,(0,t.Z)((0,t.Z)({separator:(0,u.jsx)(x,{})},v),{},{children:r.map((function(e){return(0,u.jsx)(p,{link:e,activeLast:Z,disabled:e.name===g},e.name||"")}))}))]}),n&&(0,u.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!m&&(0,u.jsx)(o.Z,{sx:{mt:2},children:m.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function x(){return(0,u.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},35192:function(e,r,n){n.r(r),n.d(r,{default:function(){return j}});var t=n(29439),a=n(93433),o=n(47313),i=n(65964),s=n(16157),l=n(10679),c=n(62463),d=n(53643),u=n(14417),p=n(42669),h=n(88208),m=n(48175),x=n(21365),Z=n(8730),f=n(38875),v=n(16769),g=n(46417),b=(0,a.Z)(Array(4)).map((function(e,r){return{id:x.ZP.id(r),value:"panel".concat(r+1),heading:"Accordion ".concat(r+1),subHeading:x.ZP.text.title(r),detail:x.ZP.text.description(r)}}));function j(){var e=(0,o.useState)(!1),r=(0,t.Z)(e,2),n=r[0],a=r[1];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i.ql,{children:(0,g.jsx)("title",{children:" MUI Components: Accordion | Minimal UI"})}),(0,g.jsx)(s.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,g.jsx)(l.Z,{children:(0,g.jsx)(f.Z,{heading:"Accordion",links:[{name:"Components",href:m.ko.components},{name:"Accordion"}],moreLink:["https://mui.com/components/accordion"]})})}),(0,g.jsx)(l.Z,{sx:{my:10},children:(0,g.jsxs)(c.Z,{spacing:5,children:[(0,g.jsx)(v.g,{title:"Simple",children:b.map((function(e,r){return(0,g.jsxs)(d.Z,{disabled:3===r,children:[(0,g.jsx)(u.Z,{expandIcon:(0,g.jsx)(Z.Z,{icon:"eva:arrow-ios-downward-fill"}),children:(0,g.jsx)(p.Z,{variant:"subtitle1",children:e.heading})}),(0,g.jsx)(h.Z,{children:(0,g.jsx)(p.Z,{children:e.detail})})]},e.value)}))}),(0,g.jsx)(v.g,{title:"Controlled",children:b.map((function(e,r){return(0,g.jsxs)(d.Z,{disabled:3===r,expanded:n===e.value,onChange:(t=e.value,function(e,r){a(!!r&&t)}),children:[(0,g.jsxs)(u.Z,{expandIcon:(0,g.jsx)(Z.Z,{icon:"eva:arrow-ios-downward-fill"}),children:[(0,g.jsx)(p.Z,{variant:"subtitle1",sx:{width:"33%",flexShrink:0},children:e.heading}),(0,g.jsx)(p.Z,{sx:{color:"text.secondary"},children:e.subHeading})]}),(0,g.jsx)(h.Z,{children:(0,g.jsx)(p.Z,{children:e.detail})})]},e.value);var t}))})]})})]})}},16769:function(e,r,n){n.d(r,{_:function(){return u},g:function(){return d}});var t=n(1413),a=n(17551),o=n(80654),i=n(29700),s=n(16157),l=n(42669),c=n(46417);function d(e){var r=e.title,n=e.sx,l=e.children;return(0,c.jsxs)(o.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,a.Fq)(e.palette.grey[500],.04)}},children:[r&&(0,c.jsx)(i.Z,{title:r}),(0,c.jsx)(s.Z,{sx:(0,t.Z)({p:5,minHeight:180},n),children:l})]})}function u(e){var r=e.title;return(0,c.jsx)(l.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:r})}},80493:function(e,r,n){n.d(r,{Z:function(){return A}});var t=n(93433),a=n(29439),o=n(4942),i=n(87462),s=n(63366),l=n(47313),c=(n(96214),n(83061)),d=n(21921),u=n(64164),p=n(11236),h=n(42669),m=n(17551),x=n(46095),Z=n(46417),f=(0,x.Z)((0,Z.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),v=n(56456),g=(0,u.ZP)(v.Z)((function(e){var r=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,m._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,m._4)(r.palette.grey[600],.12)})})})),b=(0,u.ZP)(f)({width:24,height:16});var j=function(e){var r=e;return(0,Z.jsx)("li",{children:(0,Z.jsx)(g,(0,i.Z)({focusRipple:!0},e,{ownerState:r,children:(0,Z.jsx)(b,{ownerState:r})}))})},y=n(77430),w=n(32298);function C(e){return(0,w.Z)("MuiBreadcrumbs",e)}var k=(0,y.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],R=(0,u.ZP)(h.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,o.Z)({},"& .".concat(k.li),r.li),r.root]}})({}),M=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),P=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function N(e,r,n,t){return e.reduce((function(a,o,i){return i<e.length-1?a=a.concat(o,(0,Z.jsx)(P,{"aria-hidden":!0,className:r,ownerState:t,children:n},"separator-".concat(i))):a.push(o),a}),[])}var A=l.forwardRef((function(e,r){var n=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),o=n.children,u=n.className,h=n.component,m=void 0===h?"nav":h,x=n.expandText,f=void 0===x?"Show path":x,v=n.itemsAfterCollapse,g=void 0===v?1:v,b=n.itemsBeforeCollapse,y=void 0===b?1:b,w=n.maxItems,k=void 0===w?8:w,P=n.separator,A=void 0===P?"/":P,B=(0,s.Z)(n,S),_=l.useState(!1),H=(0,a.Z)(_,2),I=H[0],T=H[1],L=(0,i.Z)({},n,{component:m,expanded:I,expandText:f,itemsAfterCollapse:g,itemsBeforeCollapse:y,maxItems:k,separator:A}),z=function(e){var r=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},C,r)}(L),q=l.useRef(null),F=l.Children.toArray(o).filter((function(e){return l.isValidElement(e)})).map((function(e,r){return(0,Z.jsx)("li",{className:z.li,children:e},"child-".concat(r))}));return(0,Z.jsx)(R,(0,i.Z)({ref:r,component:m,color:"text.secondary",className:(0,c.Z)(z.root,u),ownerState:L},B,{children:(0,Z.jsx)(M,{className:z.ol,ref:q,ownerState:L,children:N(I||k&&F.length<=k?F:function(e){return y+g>=e.length?e:[].concat((0,t.Z)(e.slice(0,y)),[(0,Z.jsx)(j,{"aria-label":f,onClick:function(){T(!0);var e=q.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,t.Z)(e.slice(e.length-g,e.length)))}(F),z.separator,A,L)})}))}))},29700:function(e,r,n){n.d(r,{Z:function(){return y}});var t=n(4942),a=n(63366),o=n(87462),i=n(47313),s=n(83061),l=n(21921),c=n(42669),d=n(11236),u=n(64164),p=n(77430),h=n(32298);function m(e){return(0,h.Z)("MuiCardHeader",e)}var x=(0,p.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),Z=n(46417),f=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,r){var n;return(0,o.Z)((n={},(0,t.Z)(n,"& .".concat(x.title),r.title),(0,t.Z)(n,"& .".concat(x.subheader),r.subheader),n),r.root)}})({display:"flex",alignItems:"center",padding:16}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,r){return r.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,r){return r.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,r){return r.content}})({flex:"1 1 auto"}),y=i.forwardRef((function(e,r){var n=(0,d.Z)({props:e,name:"MuiCardHeader"}),t=n.action,i=n.avatar,u=n.className,p=n.component,h=void 0===p?"div":p,x=n.disableTypography,y=void 0!==x&&x,w=n.subheader,C=n.subheaderTypographyProps,k=n.title,S=n.titleTypographyProps,R=(0,a.Z)(n,f),M=(0,o.Z)({},n,{component:h,disableTypography:y}),P=function(e){var r=e.classes;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},m,r)}(M),N=k;null==N||N.type===c.Z||y||(N=(0,Z.jsx)(c.Z,(0,o.Z)({variant:i?"body2":"h5",className:P.title,component:"span",display:"block"},S,{children:N})));var A=w;return null==A||A.type===c.Z||y||(A=(0,Z.jsx)(c.Z,(0,o.Z)({variant:i?"body2":"body1",className:P.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:A}))),(0,Z.jsxs)(v,(0,o.Z)({className:(0,s.Z)(P.root,u),as:h,ref:r,ownerState:M},R,{children:[i&&(0,Z.jsx)(g,{className:P.avatar,ownerState:M,children:i}),(0,Z.jsxs)(j,{className:P.content,ownerState:M,children:[N,A]}),t&&(0,Z.jsx)(b,{className:P.action,ownerState:M,children:t})]}))}))}}]);