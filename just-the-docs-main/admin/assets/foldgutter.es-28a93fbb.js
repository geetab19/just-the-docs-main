import{a as T}from"./codemirror.es-74c1253d.js";import"./index-cca33cac.js";var A=Object.defineProperty,u=(F,y)=>A(F,"name",{value:y,configurable:!0});function P(F,y){return y.forEach(function(a){a&&typeof a!="string"&&!Array.isArray(a)&&Object.keys(a).forEach(function(s){if(s!=="default"&&!(s in F)){var h=Object.getOwnPropertyDescriptor(a,s);Object.defineProperty(F,s,h.get?h:{enumerable:!0,get:function(){return a[s]}})}})}),Object.freeze(Object.defineProperty(F,Symbol.toStringTag,{value:"Module"}))}u(P,"_mergeNamespaces");var N={exports:{}},V={exports:{}};(function(F,y){(function(a){a(T.exports)})(function(a){function s(e,r,f,i){if(f&&f.call){var p=f;f=null}else var p=c(e,f,"rangeFinder");typeof r=="number"&&(r=a.Pos(r,0));var m=c(e,f,"minFoldSize");function w(l){var o=p(e,r);if(!o||o.to.line-o.from.line<m)return null;if(i==="fold")return o;for(var g=e.findMarksAt(o.from),v=0;v<g.length;++v)if(g[v].__isFold){if(!l)return null;o.cleared=!0,g[v].clear()}return o}u(w,"getRange");var d=w(!0);if(c(e,f,"scanUp"))for(;!d&&r.line>e.firstLine();)r=a.Pos(r.line-1,0),d=w(!1);if(!(!d||d.cleared||i==="unfold")){var t=h(e,f,d);a.on(t,"mousedown",function(l){n.clear(),a.e_preventDefault(l)});var n=e.markText(d.from,d.to,{replacedWith:t,clearOnEnter:c(e,f,"clearOnEnter"),__isFold:!0});n.on("clear",function(l,o){a.signal(e,"unfold",e,l,o)}),a.signal(e,"fold",e,d.from,d.to)}}u(s,"doFold");function h(e,r,f){var i=c(e,r,"widget");if(typeof i=="function"&&(i=i(f.from,f.to)),typeof i=="string"){var p=document.createTextNode(i);i=document.createElement("span"),i.appendChild(p),i.className="CodeMirror-foldmarker"}else i&&(i=i.cloneNode(!0));return i}u(h,"makeWidget"),a.newFoldFunction=function(e,r){return function(f,i){s(f,i,{rangeFinder:e,widget:r})}},a.defineExtension("foldCode",function(e,r,f){s(this,e,r,f)}),a.defineExtension("isFolded",function(e){for(var r=this.findMarksAt(e),f=0;f<r.length;++f)if(r[f].__isFold)return!0}),a.commands.toggleFold=function(e){e.foldCode(e.getCursor())},a.commands.fold=function(e){e.foldCode(e.getCursor(),null,"fold")},a.commands.unfold=function(e){e.foldCode(e.getCursor(),{scanUp:!1},"unfold")},a.commands.foldAll=function(e){e.operation(function(){for(var r=e.firstLine(),f=e.lastLine();r<=f;r++)e.foldCode(a.Pos(r,0),{scanUp:!1},"fold")})},a.commands.unfoldAll=function(e){e.operation(function(){for(var r=e.firstLine(),f=e.lastLine();r<=f;r++)e.foldCode(a.Pos(r,0),{scanUp:!1},"unfold")})},a.registerHelper("fold","combine",function(){var e=Array.prototype.slice.call(arguments,0);return function(r,f){for(var i=0;i<e.length;++i){var p=e[i](r,f);if(p)return p}}}),a.registerHelper("fold","auto",function(e,r){for(var f=e.getHelpers(r,"fold"),i=0;i<f.length;i++){var p=f[i](e,r);if(p)return p}});var _={rangeFinder:a.fold.auto,widget:"↔",minFoldSize:0,scanUp:!1,clearOnEnter:!0};a.defineOption("foldOptions",null);function c(e,r,f){if(r&&r[f]!==void 0)return r[f];var i=e.options.foldOptions;return i&&i[f]!==void 0?i[f]:_[f]}u(c,"getOption"),a.defineExtension("foldOption",function(e,r){return c(this,e,r)})})})();(function(F,y){(function(a){a(T.exports,V.exports)})(function(a){a.defineOption("foldGutter",!1,function(t,n,l){l&&l!=a.Init&&(t.clearGutter(t.state.foldGutter.options.gutter),t.state.foldGutter=null,t.off("gutterClick",p),t.off("changes",m),t.off("viewportChange",w),t.off("fold",d),t.off("unfold",d),t.off("swapDoc",m)),n&&(t.state.foldGutter=new h(_(n)),i(t),t.on("gutterClick",p),t.on("changes",m),t.on("viewportChange",w),t.on("fold",d),t.on("unfold",d),t.on("swapDoc",m))});var s=a.Pos;function h(t){this.options=t,this.from=this.to=0}u(h,"State");function _(t){return t===!0&&(t={}),t.gutter==null&&(t.gutter="CodeMirror-foldgutter"),t.indicatorOpen==null&&(t.indicatorOpen="CodeMirror-foldgutter-open"),t.indicatorFolded==null&&(t.indicatorFolded="CodeMirror-foldgutter-folded"),t}u(_,"parseOptions");function c(t,n){for(var l=t.findMarks(s(n,0),s(n+1,0)),o=0;o<l.length;++o)if(l[o].__isFold){var g=l[o].find(-1);if(g&&g.line===n)return l[o]}}u(c,"isFolded");function e(t){if(typeof t=="string"){var n=document.createElement("div");return n.className=t+" CodeMirror-guttermarker-subtle",n}else return t.cloneNode(!0)}u(e,"marker");function r(t,n,l){var o=t.state.foldGutter.options,g=n-1,v=t.foldOption(o,"minFoldSize"),G=t.foldOption(o,"rangeFinder"),b=typeof o.indicatorFolded=="string"&&f(o.indicatorFolded),E=typeof o.indicatorOpen=="string"&&f(o.indicatorOpen);t.eachLine(n,l,function(S){++g;var k=null,O=S.gutterMarkers;if(O&&(O=O[o.gutter]),c(t,g)){if(b&&O&&b.test(O.className))return;k=e(o.indicatorFolded)}else{var U=s(g,0),x=G&&G(t,U);if(x&&x.to.line-x.from.line>=v){if(E&&O&&E.test(O.className))return;k=e(o.indicatorOpen)}}!k&&!O||t.setGutterMarker(S,o.gutter,k)})}u(r,"updateFoldInfo");function f(t){return new RegExp("(^|\\s)"+t+"(?:$|\\s)\\s*")}u(f,"classTest");function i(t){var n=t.getViewport(),l=t.state.foldGutter;l&&(t.operation(function(){r(t,n.from,n.to)}),l.from=n.from,l.to=n.to)}u(i,"updateInViewport");function p(t,n,l){var o=t.state.foldGutter;if(o){var g=o.options;if(l==g.gutter){var v=c(t,n);v?v.clear():t.foldCode(s(n,0),g)}}}u(p,"onGutterClick");function m(t){var n=t.state.foldGutter;if(n){var l=n.options;n.from=n.to=0,clearTimeout(n.changeUpdate),n.changeUpdate=setTimeout(function(){i(t)},l.foldOnChangeTimeSpan||600)}}u(m,"onChange");function w(t){var n=t.state.foldGutter;if(n){var l=n.options;clearTimeout(n.changeUpdate),n.changeUpdate=setTimeout(function(){var o=t.getViewport();n.from==n.to||o.from-n.to>20||n.from-o.to>20?i(t):t.operation(function(){o.from<n.from&&(r(t,o.from,n.from),n.from=o.from),o.to>n.to&&(r(t,n.to,o.to),n.to=o.to)})},l.updateViewportTimeSpan||400)}}u(w,"onViewportChange");function d(t,n){var l=t.state.foldGutter;if(l){var o=n.line;o>=l.from&&o<l.to&&r(t,o,o+1)}}u(d,"onFold")})})();var j=N.exports,C=P({__proto__:null,default:j},[N.exports]);export{C as f};
