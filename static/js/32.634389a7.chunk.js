(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[32,40],{108:function(t,e,n){"use strict";var c=n(2),i=n(83),a=i.a?c.useLayoutEffect:c.useEffect,o={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};e.a=i.a&&"undefined"!==typeof window.ResizeObserver?function(){var t=Object(c.useState)(null),e=t[0],n=t[1],i=Object(c.useState)(o),r=i[0],s=i[1],u=Object(c.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var e=t[0].contentRect,n=e.x,c=e.y,i=e.width,a=e.height,o=e.top,r=e.left,u=e.bottom,f=e.right;s({x:n,y:c,width:i,height:a,top:o,left:r,bottom:u,right:f})}}))}),[]);return a((function(){if(e)return u.observe(e),function(){u.disconnect()}}),[e]),[n,r]}:function(){return[i.b,o]}},634:function(t,e,n){"use strict";n.r(e);var c=n(23),i=n(37),a=n(7),o=n(85),r=n.n(o),s=n(2),u=n(40),f=n.n(u),b=n(88),d=n(108),l=n(18),h=void 0,O=function(t){var e=t.mapStatistic,n=t.setMapStatistic,o=Object(d.a)(),u=Object(i.a)(o,2),O=u[0],j=u[1].width,p=Object(s.useState)(!1),m=Object(i.a)(p,2),v=m[0],g=m[1],w=Object(s.useState)(0),S=Object(i.a)(w,2),x=S[0],y=S[1],k=Object(b.useSpring)((function(){return{opacity:0,background:"".concat(a.w[e].color,"20"),transform:"translate3d(".concat(j*a.r.indexOf(e)*.25,"px, 0, 0)"),config:b.config.gentle}})),R=Object(i.a)(k,2),E=R[0],M=R[1];Object(s.useEffect)((function(){j>0&&f.a.unstable_batchedUpdates((function(){M({transform:"translate3d(".concat(j*a.r.indexOf(e)*.25,"px, 0, 0)"),opacity:1,background:"".concat(a.w[e].color,"20"),delay:0===x?1500:0,onStart:g.bind(h,!0),onRest:g.bind(h,!1)})}))}),[x,e,M,j]);var N=Object(s.useCallback)((function(t){y((function(t){return t+1})),n(t)}),[n]);return Object(l.jsxs)("div",{className:"MapSwitcher",ref:O,children:[Object(l.jsx)(b.animated.div,{className:"highlight",style:E}),a.r.map((function(t,e){return Object(l.jsx)("div",{className:r()("clickable",Object(c.a)({},"is-".concat(t),!v)),onClick:N.bind(h,t)},e)}))]})},j=function(t,e){return t.mapStatistic===e.mapStatistic};e.default=Object(s.memo)(O,j)}}]);
//# sourceMappingURL=32.634389a7.chunk.js.map