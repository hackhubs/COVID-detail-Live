(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[24,31],{104:function(e,t,i){"use strict";var r=i(2),n=function(){return(n=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var c=function(e){var t=e.animate,i=e.backgroundColor,c=e.backgroundOpacity,a=e.baseUrl,s=e.children,o=e.foregroundColor,l=e.foregroundOpacity,d=e.gradientRatio,u=e.uniqueKey,b=e.interval,j=e.rtl,f=e.speed,m=e.style,O=e.title,h=function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(i[r[n]]=e[r[n]])}return i}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),g=u||Math.random().toString(36).substring(6),v=g+"-diff",p=g+"-animated-diff",y=g+"-aria",x=j?{transform:"scaleX(-1)"}:null,N="0; "+b+"; 1",C=f+"s";return Object(r.createElement)("svg",n({"aria-labelledby":y,role:"img",style:n(n({},m),x)},h),O?Object(r.createElement)("title",{id:y},O):null,Object(r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+a+"#"+v+")",style:{fill:"url("+a+"#"+p+")"}}),Object(r.createElement)("defs",null,Object(r.createElement)("clipPath",{id:v},s),Object(r.createElement)("linearGradient",{id:p},Object(r.createElement)("stop",{offset:"0%",stopColor:i,stopOpacity:c},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:N,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:l},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:N,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"100%",stopColor:i,stopOpacity:c},t&&Object(r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:N,dur:C,repeatCount:"indefinite"})))))};c.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var a=function(e){return e.children?Object(r.createElement)(c,n({},e)):Object(r.createElement)(s,n({},e))},s=function(e){return Object(r.createElement)(a,n({viewBox:"0 0 476 124"},e),Object(r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=a},125:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var r=i(90);function n(e,t){var i;if(void 0===t){var n,c=Object(r.a)(e);try{for(c.s();!(n=c.n()).done;){var a=n.value;null!=a&&(i>a||void 0===i&&a>=a)&&(i=a)}}catch(u){c.e(u)}finally{c.f()}}else{var s,o=-1,l=Object(r.a)(e);try{for(l.s();!(s=l.n()).done;){var d=s.value;null!=(d=t(d,++o,e))&&(i>d||void 0===i&&d>=d)&&(i=d)}}catch(u){l.e(u)}finally{l.f()}}return i}},633:function(e,t,i){"use strict";var r=i(2),n=i(83);t.a=function(e,t,i){if(!n.a)return[t,n.b,n.b];if(!e)throw new Error("useLocalStorage key may not be falsy");var c=i?i.raw?function(e){return e}:i.deserializer:JSON.parse,a=Object(r.useState)((function(){try{var r=i?i.raw?String:i.serializer:JSON.stringify,n=localStorage.getItem(e);return null!==n?c(n):(t&&localStorage.setItem(e,r(t)),t)}catch(a){return t}})),s=a[0],o=a[1],l=Object(r.useCallback)((function(t){try{var r="function"===typeof t?t(s):t;if("undefined"===typeof r)return;var n=void 0;n=i?i.raw?"string"===typeof r?r:JSON.stringify(r):i.serializer?i.serializer(r):JSON.stringify(r):JSON.stringify(r),localStorage.setItem(e,n),o(c(n))}catch(a){}}),[e,o]),d=Object(r.useCallback)((function(){try{localStorage.removeItem(e),o(void 0)}catch(a){}}),[e,o]);return[s,l,d]}},665:function(e,t,i){"use strict";i.r(t);var r=i(107),n=i(37),c=i(104),a=i(18),s=function(){var e=window.innerWidth,t=e>769?480:e,i=1200;return Object(a.jsxs)(c.a,{viewBox:"0 0 ".concat(t," ").concat(i),height:i,width:t,speed:2,children:[Object(a.jsx)("circle",{cx:.4*t,cy:600,r:"5"}),Object(a.jsx)("circle",{cx:.5*t,cy:600,r:"5"}),Object(a.jsx)("circle",{cx:.6*t,cy:600,r:"5"})]})},o=i(7),l=i(114),d=i(20),u=i(89),b=i(85),j=i.n(b),f=i(125),m=i(58),O=i(69),h=i(82),g=i.n(h),v=i(2),p=i(724),y=i(633),x=i(715),N=Object(v.lazy)((function(){return Object(d.l)((function(){return Promise.all([i.e(1),i.e(2),i.e(20)]).then(i.bind(null,700))}))})),C=Object(v.lazy)((function(){return Object(d.l)((function(){return Promise.all([i.e(1),i.e(2),i.e(19),i.e(44)]).then(i.bind(null,701))}))}));function k(e){var t,i=this,c=e.stateCode,b=e.timeseries,h=e.date,g=e.regionHighlighted,k=e.setRegionHighlighted,w=e.anchor,S=e.setAnchor,E=e.expandTable,M=void 0!==E&&E,J=e.hideVaccinated,P=void 0!==J&&J,T=Object(p.a)().t,I=Object(y.a)("timeseriesLookbackDays",90),U=Object(n.a)(I,2),H=U[0],A=U[1],L=Object(y.a)("chartType","total"),R=Object(n.a)(L,2),z=R[0],B=R[1],D=Object(y.a)("isUniform",!1),q=Object(n.a)(D,2),F=q[0],V=q[1],K=Object(y.a)("isLog",!1),G=Object(n.a)(K,2),W=G[0],X=G[1],Q=Object(y.a)("isMovingAverage",!1),Y=Object(n.a)(Q,2),Z=Y[0],$=Y[1],_=Object.keys((null===b||void 0===b||null===(t=b[c])||void 0===t?void 0:t.dates)||{}),ee=_[0]||h||Object(d.g)(),te=Object(f.a)([_[_.length-1],h||Object(d.g)()]),ie=Object(v.useState)(te),re=Object(n.a)(ie,2),ne=re[0],ce=re[1];Object(v.useEffect)((function(){ce(te)}),[te]);var ae=null!==H?Object(m.a)(Object(O.a)(Object(d.k)(ne),H),{representation:"date"}):ee,se=Object(v.useRef)(),oe=Object(l.a)(se,{once:!0}),le=Object(x.a)().width,de=Object(v.useMemo)((function(){var e;return(null===b||void 0===b||null===(e=b[g.stateCode])||void 0===e?void 0:e.districts)?{stateCode:g.stateCode,districtName:g.districtName}:{stateCode:g.stateCode,districtName:null}}),[b,g.stateCode,g.districtName]),ue=Object(v.useMemo)((function(){var e,t,i,r;return de.districtName?null===b||void 0===b||null===(e=b[de.stateCode])||void 0===e||null===(t=e.districts)||void 0===t||null===(i=t[de.districtName])||void 0===i?void 0:i.dates:null===b||void 0===b||null===(r=b[de.stateCode])||void 0===r?void 0:r.dates}),[b,de.stateCode,de.districtName]),be=Object(v.useMemo)((function(){var e=Object.keys(b||{}).filter((function(e){return e!==c})).sort((function(e,t){return o.v[e].localeCompare(o.v[t])})).map((function(e){return{stateCode:e,districtName:null}})),t=Object.keys(b||{}).reduce((function(e,t){var i;return[].concat(Object(r.a)(e),Object(r.a)(Object.keys((null===b||void 0===b||null===(i=b[t])||void 0===i?void 0:i.districts)||{}).reduce((function(e,i){return[].concat(Object(r.a)(e),[{stateCode:t,districtName:i}])}),[])))}),[]);return[{stateCode:c,districtName:null}].concat(Object(r.a)(e),Object(r.a)(t))}),[b,c]),je=Object(v.useMemo)((function(){return be.find((function(e){return e.stateCode===g.stateCode&&e.districtName===g.districtName}))?be:[].concat(Object(r.a)(be),[{stateCode:g.stateCode,districtName:g.districtName}])}),[g.stateCode,g.districtName,be]),fe=Object(v.useMemo)((function(){return Object.keys(ue||{}).filter((function(e){return e<=te}))}),[ue,te]),me=Object(v.useMemo)((function(){return fe.filter((function(e){return ae<=e&&e<=ne}))}),[fe,ae,ne]),Oe=Object(v.useCallback)((function(e){var t=e.target;k(JSON.parse(t.value))}),[k]),he=Object(v.useCallback)((function(){k({stateCode:c,districtName:null})}),[c,k]),ge=Object(v.useMemo)((function(){return o.C.filter((function(e){return("vaccinated"!==e||!P)&&("delta"===z||"tpr"!==e)}))}),[z,P]);return Object(a.jsxs)("div",{className:j()("TimeseriesExplorer fadeInUp",{stickied:"timeseries"===w},{expanded:M}),style:{display:w&&"timeseries"!==w&&(!M||le<769)?"none":""},ref:se,children:[Object(a.jsxs)("div",{className:"timeseries-header",children:[Object(a.jsx)("div",{className:j()("anchor","fadeInUp",{stickied:"timeseries"===w}),style:{display:M&&le>769?"none":""},onClick:S&&S.bind(this,"timeseries"===w?null:"timeseries"),children:Object(a.jsx)(u.o,{})}),Object(a.jsx)("h1",{children:T("Spread Trends")}),Object(a.jsx)("div",{className:"tabs",children:Object.entries(o.A).map((function(e,t){var r=Object(n.a)(e,2),c=r[0],s=r[1];return Object(a.jsx)("div",{className:"tab ".concat(z===c?"focused":""),onClick:B.bind(i,c),children:Object(a.jsx)("h4",{children:T(s)})},c)}))}),Object(a.jsxs)("div",{className:"timeseries-options",children:[Object(a.jsxs)("div",{className:"scale-modes",children:[Object(a.jsx)("label",{className:"main",children:"".concat(T("Scale Modes"),":")}),Object(a.jsxs)("div",{className:"timeseries-mode",children:[Object(a.jsx)("label",{htmlFor:"timeseries-mode",children:T("Uniform")}),Object(a.jsx)("input",{id:"timeseries-mode",type:"checkbox",className:"switch",checked:F,"aria-label":T("Checked by default to scale uniformly."),onChange:V.bind(this,!F)})]}),Object(a.jsxs)("div",{className:"timeseries-mode ".concat("total"!==z?"disabled":""),children:[Object(a.jsx)("label",{htmlFor:"timeseries-logmode",children:T("Logarithmic")}),Object(a.jsx)("input",{id:"timeseries-logmode",type:"checkbox",checked:"total"===z&&W,className:"switch",disabled:"total"!==z,onChange:X.bind(this,!W)})]})]}),Object(a.jsxs)("div",{className:"timeseries-mode ".concat("total"===z?"disabled":""," moving-average"),children:[Object(a.jsx)("label",{htmlFor:"timeseries-moving-average",children:T("7 day Moving Average")}),Object(a.jsx)("input",{id:"timeseries-moving-average",type:"checkbox",checked:"delta"===z&&Z,className:"switch",disabled:"delta"!==z,onChange:$.bind(this,!Z)})]})]})]}),je&&Object(a.jsxs)("div",{className:"state-selection",children:[Object(a.jsx)("div",{className:"dropdown",children:Object(a.jsx)("select",{value:JSON.stringify(de),onChange:Oe,children:je.filter((function(e){return o.v[e.stateCode]!==e.districtName})).map((function(e){return Object(a.jsx)("option",{value:JSON.stringify(e),children:e.districtName?T(e.districtName):T(o.v[e.stateCode])},"".concat(e.stateCode,"-").concat(e.districtName))}))})}),Object(a.jsx)("div",{className:"reset-icon",onClick:he,children:Object(a.jsx)(u.q,{})})]}),oe&&Object(a.jsxs)(v.Suspense,{fallback:Object(a.jsx)(s,{}),children:[Object(a.jsx)(N,{timeseries:ue,regionHighlighted:de,dates:me,statistics:ge,endDate:te,chartType:z,isUniform:F,isLog:W,isMovingAverage:Z}),Object(a.jsx)(C,{timeseries:ue,regionHighlighted:de,currentBrushSelection:[ae,ne],animationIndex:ge.length,dates:fe,endDate:te,lookback:H,setBrushSelectionEnd:ce,setLookback:A})]}),!oe&&Object(a.jsx)("div",{style:{height:"50rem"}}),Object(a.jsx)("div",{className:"pills fadeInUp",style:{animationDelay:"".concat(250*(1+ge.length),"ms")},children:o.B.map((function(e){return Object(a.jsx)("button",{type:"button",className:j()({selected:e===H}),onClick:A.bind(i,e),children:null!==e?"".concat(e," ").concat(T("days")):T("Beginning")},e)}))})]})}var w=function(e,t){return!t.forceRender&&(!(t.timeseries||!e.timeseries)||!(t.timeseries&&!e.timeseries)&&(!!g()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&(!!g()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(!!g()(t.date,e.date)&&(!!g()(t.anchor,e.anchor)&&(!!g()(t.expandTable,e.expandTable)&&!!g()(t.hideVaccinated,e.hideVaccinated)))))))};t.default=Object(v.memo)(k,w)},82:function(e,t,i){"use strict";e.exports=function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var r,n,c;if(Array.isArray(t)){if((r=t.length)!=i.length)return!1;for(n=r;0!==n--;)if(!e(t[n],i[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((r=(c=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(n=r;0!==n--;)if(!Object.prototype.hasOwnProperty.call(i,c[n]))return!1;for(n=r;0!==n--;){var a=c[n];if(!e(t[a],i[a]))return!1}return!0}return t!==t&&i!==i}}}]);
//# sourceMappingURL=24.f9474261.chunk.js.map