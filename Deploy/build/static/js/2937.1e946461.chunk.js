"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[2937],{82937:function(n,r,t){t.d(r,{ZP:function(){return z}});var i=t(93433),e=t(4942),a=t(63366),o=t(87462),c=t(47313),u=t(83061),s=t(54929),p=t(39028),f=t(21921),m=t(64164),l=t(11236),d=t(62111);var v=c.createContext(),g=t(77430),w=t(32298);function h(n){return(0,w.Z)("MuiGrid",n)}var x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],b=(0,g.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,i.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,i.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,i.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,i.Z)(x.map((function(n){return"grid-xs-".concat(n)}))),(0,i.Z)(x.map((function(n){return"grid-sm-".concat(n)}))),(0,i.Z)(x.map((function(n){return"grid-md-".concat(n)}))),(0,i.Z)(x.map((function(n){return"grid-lg-".concat(n)}))),(0,i.Z)(x.map((function(n){return"grid-xl-".concat(n)}))))),k=t(46417),S=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function Z(n){var r=parseFloat(n);return"".concat(r).concat(String(n).replace(String(r),"")||"px")}function W(n){var r=n.breakpoints,t=n.values,i="";Object.keys(t).forEach((function(n){""===i&&0!==t[n]&&(i=n)}));var e=Object.keys(r).sort((function(n,t){return r[n]-r[t]}));return e.slice(0,e.indexOf(i))}var M=(0,m.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,r){var t=n.ownerState,e=t.container,a=t.direction,o=t.item,c=t.spacing,u=t.wrap,s=t.zeroMinWidth,p=t.breakpoints,f=[];e&&(f=function(n,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[t["spacing-xs-".concat(String(n))]];var i=[];return r.forEach((function(r){var e=n[r];Number(e)>0&&i.push(t["spacing-".concat(r,"-").concat(String(e))])})),i}(c,p,r));var m=[];return p.forEach((function(n){var i=t[n];i&&m.push(r["grid-".concat(n,"-").concat(String(i))])})),[r.root,e&&r.container,o&&r.item,s&&r.zeroMinWidth].concat((0,i.Z)(f),["row"!==a&&r["direction-xs-".concat(String(a))],"wrap"!==u&&r["wrap-xs-".concat(String(u))]],m)}})((function(n){var r=n.ownerState;return(0,o.Z)({boxSizing:"border-box"},r.container&&{display:"flex",flexWrap:"wrap",width:"100%"},r.item&&{margin:0},r.zeroMinWidth&&{minWidth:0},"wrap"!==r.wrap&&{flexWrap:r.wrap})}),(function(n){var r=n.theme,t=n.ownerState,i=(0,s.P$)({values:t.direction,breakpoints:r.breakpoints.values});return(0,s.k9)({theme:r},i,(function(n){var r={flexDirection:n};return 0===n.indexOf("column")&&(r["& > .".concat(b.item)]={maxWidth:"none"}),r}))}),(function(n){var r=n.theme,t=n.ownerState,i=t.container,a=t.rowSpacing,o={};if(i&&0!==a){var c,u=(0,s.P$)({values:a,breakpoints:r.breakpoints.values});"object"===typeof u&&(c=W({breakpoints:r.breakpoints.values,values:u})),o=(0,s.k9)({theme:r},u,(function(n,t){var i,a=r.spacing(n);return"0px"!==a?(0,e.Z)({marginTop:"-".concat(Z(a))},"& > .".concat(b.item),{paddingTop:Z(a)}):null!=(i=c)&&i.includes(t)?{}:(0,e.Z)({marginTop:0},"& > .".concat(b.item),{paddingTop:0})}))}return o}),(function(n){var r=n.theme,t=n.ownerState,i=t.container,a=t.columnSpacing,o={};if(i&&0!==a){var c,u=(0,s.P$)({values:a,breakpoints:r.breakpoints.values});"object"===typeof u&&(c=W({breakpoints:r.breakpoints.values,values:u})),o=(0,s.k9)({theme:r},u,(function(n,t){var i,a=r.spacing(n);return"0px"!==a?(0,e.Z)({width:"calc(100% + ".concat(Z(a),")"),marginLeft:"-".concat(Z(a))},"& > .".concat(b.item),{paddingLeft:Z(a)}):null!=(i=c)&&i.includes(t)?{}:(0,e.Z)({width:"100%",marginLeft:0},"& > .".concat(b.item),{paddingLeft:0})}))}return o}),(function(n){var r,t=n.theme,i=n.ownerState;return t.breakpoints.keys.reduce((function(n,e){var a={};if(i[e]&&(r=i[e]),!r)return n;if(!0===r)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=(0,s.P$)({values:i.columns,breakpoints:t.breakpoints.values}),u="object"===typeof c?c[e]:c;if(void 0===u||null===u)return n;var p="".concat(Math.round(r/u*1e8)/1e6,"%"),f={};if(i.container&&i.item&&0!==i.columnSpacing){var m=t.spacing(i.columnSpacing);if("0px"!==m){var l="calc(".concat(p," + ").concat(Z(m),")");f={flexBasis:l,maxWidth:l}}}a=(0,o.Z)({flexBasis:p,flexGrow:0,maxWidth:p},f)}return 0===t.breakpoints.values[e]?Object.assign(n,a):n[t.breakpoints.up(e)]=a,n}),{})}));var y=function(n){var r=n.classes,t=n.container,e=n.direction,a=n.item,o=n.spacing,c=n.wrap,u=n.zeroMinWidth,s=n.breakpoints,p=[];t&&(p=function(n,r){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var t=[];return r.forEach((function(r){var i=n[r];if(Number(i)>0){var e="spacing-".concat(r,"-").concat(String(i));t.push(e)}})),t}(o,s));var m=[];s.forEach((function(r){var t=n[r];t&&m.push("grid-".concat(r,"-").concat(String(t)))}));var l={root:["root",t&&"container",a&&"item",u&&"zeroMinWidth"].concat((0,i.Z)(p),["row"!==e&&"direction-xs-".concat(String(e)),"wrap"!==c&&"wrap-xs-".concat(String(c))],m)};return(0,f.Z)(l,h,r)},N=c.forwardRef((function(n,r){var t=(0,l.Z)({props:n,name:"MuiGrid"}),i=(0,d.Z)().breakpoints,e=(0,p.Z)(t),s=e.className,f=e.columns,m=e.columnSpacing,g=e.component,w=void 0===g?"div":g,h=e.container,x=void 0!==h&&h,b=e.direction,Z=void 0===b?"row":b,W=e.item,N=void 0!==W&&W,z=e.rowSpacing,j=e.spacing,_=void 0===j?0:j,G=e.wrap,P=void 0===G?"wrap":G,E=e.zeroMinWidth,O=void 0!==E&&E,B=(0,a.Z)(e,S),C=z||_,L=m||_,T=c.useContext(v),$=x?f||12:T,R={},D=(0,o.Z)({},B);i.keys.forEach((function(n){null!=B[n]&&(R[n]=B[n],delete D[n])}));var F=(0,o.Z)({},e,{columns:$,container:x,direction:Z,item:N,rowSpacing:C,columnSpacing:L,wrap:P,zeroMinWidth:O,spacing:_},R,{breakpoints:i.keys}),q=y(F);return(0,k.jsx)(v.Provider,{value:$,children:(0,k.jsx)(M,(0,o.Z)({ownerState:F,className:(0,u.Z)(q.root,s),as:w,ref:r},D))})})),z=N}}]);