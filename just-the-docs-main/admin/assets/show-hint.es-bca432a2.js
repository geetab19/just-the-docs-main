import{a as ct}from"./codemirror.es-74c1253d.js";import"./index-cca33cac.js";var lt=Object.defineProperty,p=(w,S)=>lt(w,"name",{value:S,configurable:!0});function tt(w,S){return S.forEach(function(r){r&&typeof r!="string"&&!Array.isArray(r)&&Object.keys(r).forEach(function(y){if(y!=="default"&&!(y in w)){var b=Object.getOwnPropertyDescriptor(r,y);Object.defineProperty(w,y,b.get?b:{enumerable:!0,get:function(){return r[y]}})}})}),Object.freeze(Object.defineProperty(w,Symbol.toStringTag,{value:"Module"}))}p(tt,"_mergeNamespaces");var et={exports:{}};(function(w,S){(function(r){r(ct.exports)})(function(r){var y="CodeMirror-hint",b="CodeMirror-hint-active";r.showHint=function(t,e,i){if(!e)return t.showHint(i);i&&i.async&&(e.async=!0);var n={hint:e};if(i)for(var s in i)n[s]=i[s];return t.showHint(n)},r.defineExtension("showHint",function(t){t=j(this,this.getCursor("start"),t);var e=this.listSelections();if(!(e.length>1)){if(this.somethingSelected()){if(!t.hint.supportsSelection)return;for(var i=0;i<e.length;i++)if(e[i].head.line!=e[i].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var n=this.state.completionActive=new C(this,t);n.options.hint&&(r.signal(this,"startCompletion",this),n.update(!0))}}),r.defineExtension("closeHint",function(){this.state.completionActive&&this.state.completionActive.close()});function C(t,e){if(this.cm=t,this.options=e,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length,this.options.updateOnCursorActivity){var i=this;t.on("cursorActivity",this.activityFunc=function(){i.cursorActivity()})}}p(C,"Completion");var it=window.requestAnimationFrame||function(t){return setTimeout(t,1e3/60)},nt=window.cancelAnimationFrame||clearTimeout;C.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.options.updateOnCursorActivity&&this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&r.signal(this.data,"close"),this.widget&&this.widget.close(),r.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(t,e){var i=t.list[e],n=this;this.cm.operation(function(){i.hint?i.hint(n.cm,t,i):n.cm.replaceRange(P(i),i.from||t.from,i.to||t.to,"complete"),r.signal(t,"pick",i),n.cm.scrollIntoView()}),this.options.closeOnPick&&this.close()},cursorActivity:function(){this.debounce&&(nt(this.debounce),this.debounce=0);var t=this.startPos;this.data&&(t=this.data.from);var e=this.cm.getCursor(),i=this.cm.getLine(e.line);if(e.line!=this.startPos.line||i.length-e.ch!=this.startLen-this.startPos.ch||e.ch<t.ch||this.cm.somethingSelected()||!e.ch||this.options.closeCharacters.test(i.charAt(e.ch-1)))this.close();else{var n=this;this.debounce=it(function(){n.update()}),this.widget&&this.widget.disable()}},update:function(t){if(this.tick!=null){var e=this,i=++this.tick;L(this.options.hint,this.cm,this.options,function(n){e.tick==i&&e.finishUpdate(n,t)})}},finishUpdate:function(t,e){this.data&&r.signal(this.data,"update");var i=this.widget&&this.widget.picked||e&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=t,t&&t.list.length&&(i&&t.list.length==1?this.pick(t,0):(this.widget=new _(this,t),r.signal(t,"shown")))}};function j(t,e,i){var n=t.options.hintOptions,s={};for(var c in V)s[c]=V[c];if(n)for(var c in n)n[c]!==void 0&&(s[c]=n[c]);if(i)for(var c in i)i[c]!==void 0&&(s[c]=i[c]);return s.hint.resolve&&(s.hint=s.hint.resolve(t,e)),s}p(j,"parseOptions");function P(t){return typeof t=="string"?t:t.text}p(P,"getText");function D(t,e){var i={Up:function(){e.moveFocus(-1)},Down:function(){e.moveFocus(1)},PageUp:function(){e.moveFocus(-e.menuSize()+1,!0)},PageDown:function(){e.moveFocus(e.menuSize()-1,!0)},Home:function(){e.setFocus(0)},End:function(){e.setFocus(e.length-1)},Enter:e.pick,Tab:e.pick,Esc:e.close},n=/Mac/.test(navigator.platform);n&&(i["Ctrl-P"]=function(){e.moveFocus(-1)},i["Ctrl-N"]=function(){e.moveFocus(1)});var s=t.options.customKeys,c=s?{}:i;function o(h,l){var f;typeof l!="string"?f=p(function(H){return l(H,e)},"bound"):i.hasOwnProperty(l)?f=i[l]:f=l,c[h]=f}if(p(o,"addBinding"),s)for(var u in s)s.hasOwnProperty(u)&&o(u,s[u]);var a=t.options.extraKeys;if(a)for(var u in a)a.hasOwnProperty(u)&&o(u,a[u]);return c}p(D,"buildKeyMap");function W(t,e){for(;e&&e!=t;){if(e.nodeName.toUpperCase()==="LI"&&e.parentNode==t)return e;e=e.parentNode}}p(W,"getHintElement");function _(t,e){this.id="cm-complete-"+Math.floor(Math.random(1e6)),this.completion=t,this.data=e,this.picked=!1;var i=this,n=t.cm,s=n.getInputField().ownerDocument,c=s.defaultView||s.parentWindow,o=this.hints=s.createElement("ul");o.setAttribute("role","listbox"),o.setAttribute("aria-expanded","true"),o.id=this.id;var u=t.cm.options.theme;o.className="CodeMirror-hints "+u,this.selectedHint=e.selectedHint||0;for(var a=e.list,h=0;h<a.length;++h){var l=o.appendChild(s.createElement("li")),f=a[h],H=y+(h!=this.selectedHint?"":" "+b);f.className!=null&&(H=f.className+" "+H),l.className=H,h==this.selectedHint&&l.setAttribute("aria-selected","true"),l.id=this.id+"-"+h,l.setAttribute("role","option"),f.render?f.render(l,e,f):l.appendChild(s.createTextNode(f.displayText||P(f))),l.hintId=h}var A=t.options.container||s.body,v=n.cursorCoords(t.options.alignWithWord?e.from:null),T=v.left,O=v.bottom,$=!0,k=0,F=0;if(A!==s.body){var st=["absolute","relative","fixed"].indexOf(c.getComputedStyle(A).position)!==-1,R=st?A:A.offsetParent,q=R.getBoundingClientRect(),Y=s.body.getBoundingClientRect();k=q.left-Y.left-R.scrollLeft,F=q.top-Y.top-R.scrollTop}o.style.left=T-k+"px",o.style.top=O-F+"px";var E=c.innerWidth||Math.max(s.body.offsetWidth,s.documentElement.offsetWidth),B=c.innerHeight||Math.max(s.body.offsetHeight,s.documentElement.offsetHeight);A.appendChild(o),n.getInputField().setAttribute("aria-autocomplete","list"),n.getInputField().setAttribute("aria-owns",this.id),n.getInputField().setAttribute("aria-activedescendant",this.id+"-"+this.selectedHint);var m=t.options.moveOnOverlap?o.getBoundingClientRect():new DOMRect,X=t.options.paddingForScrollbar?o.scrollHeight>o.clientHeight+1:!1,x;setTimeout(function(){x=n.getScrollInfo()});var ot=m.bottom-B;if(ot>0){var K=m.bottom-m.top,rt=v.top-(v.bottom-m.top);if(rt-K>0)o.style.top=(O=v.top-K-F)+"px",$=!1;else if(K>B){o.style.height=B-5+"px",o.style.top=(O=v.bottom-m.top-F)+"px";var G=n.getCursor();e.from.ch!=G.ch&&(v=n.cursorCoords(G),o.style.left=(T=v.left-k)+"px",m=o.getBoundingClientRect())}}var N=m.right-E;if(X&&(N+=n.display.nativeBarWidth),N>0&&(m.right-m.left>E&&(o.style.width=E-5+"px",N-=m.right-m.left-E),o.style.left=(T=v.left-N-k)+"px"),X)for(var I=o.firstChild;I;I=I.nextSibling)I.style.paddingRight=n.display.nativeBarWidth+"px";if(n.addKeyMap(this.keyMap=D(t,{moveFocus:function(d,g){i.changeActive(i.selectedHint+d,g)},setFocus:function(d){i.changeActive(d)},menuSize:function(){return i.screenAmount()},length:a.length,close:function(){t.close()},pick:function(){i.pick()},data:e})),t.options.closeOnUnfocus){var J;n.on("blur",this.onBlur=function(){J=setTimeout(function(){t.close()},100)}),n.on("focus",this.onFocus=function(){clearTimeout(J)})}n.on("scroll",this.onScroll=function(){var d=n.getScrollInfo(),g=n.getWrapperElement().getBoundingClientRect();x||(x=n.getScrollInfo());var Z=O+x.top-d.top,U=Z-(c.pageYOffset||(s.documentElement||s.body).scrollTop);if($||(U+=o.offsetHeight),U<=g.top||U>=g.bottom)return t.close();o.style.top=Z+"px",o.style.left=T+x.left-d.left+"px"}),r.on(o,"dblclick",function(d){var g=W(o,d.target||d.srcElement);g&&g.hintId!=null&&(i.changeActive(g.hintId),i.pick())}),r.on(o,"click",function(d){var g=W(o,d.target||d.srcElement);g&&g.hintId!=null&&(i.changeActive(g.hintId),t.options.completeOnSingleClick&&i.pick())}),r.on(o,"mousedown",function(){setTimeout(function(){n.focus()},20)});var Q=this.getSelectedHintRange();return(Q.from!==0||Q.to!==0)&&this.scrollToActive(),r.signal(e,"select",a[this.selectedHint],o.childNodes[this.selectedHint]),!0}p(_,"Widget"),_.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode&&this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var t=this.completion.cm.getInputField();t.removeAttribute("aria-activedescendant"),t.removeAttribute("aria-owns");var e=this.completion.cm;this.completion.options.closeOnUnfocus&&(e.off("blur",this.onBlur),e.off("focus",this.onFocus)),e.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var t=this;this.keyMap={Enter:function(){t.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(t,e){if(t>=this.data.list.length?t=e?this.data.list.length-1:0:t<0&&(t=e?0:this.data.list.length-1),this.selectedHint!=t){var i=this.hints.childNodes[this.selectedHint];i&&(i.className=i.className.replace(" "+b,""),i.removeAttribute("aria-selected")),i=this.hints.childNodes[this.selectedHint=t],i.className+=" "+b,i.setAttribute("aria-selected","true"),this.completion.cm.getInputField().setAttribute("aria-activedescendant",i.id),this.scrollToActive(),r.signal(this.data,"select",this.data.list[this.selectedHint],i)}},scrollToActive:function(){var t=this.getSelectedHintRange(),e=this.hints.childNodes[t.from],i=this.hints.childNodes[t.to],n=this.hints.firstChild;e.offsetTop<this.hints.scrollTop?this.hints.scrollTop=e.offsetTop-n.offsetTop:i.offsetTop+i.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=i.offsetTop+i.offsetHeight-this.hints.clientHeight+n.offsetTop)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1},getSelectedHintRange:function(){var t=this.completion.options.scrollMargin||0;return{from:Math.max(0,this.selectedHint-t),to:Math.min(this.data.list.length-1,this.selectedHint+t)}}};function M(t,e){if(!t.somethingSelected())return e;for(var i=[],n=0;n<e.length;n++)e[n].supportsSelection&&i.push(e[n]);return i}p(M,"applicableHelpers");function L(t,e,i,n){if(t.async)t(e,n,i);else{var s=t(e,i);s&&s.then?s.then(n):n(s)}}p(L,"fetchHints");function z(t,e){var i=t.getHelpers(e,"hint"),n;if(i.length){var s=p(function(c,o,u){var a=M(c,i);function h(l){if(l==a.length)return o(null);L(a[l],c,u,function(f){f&&f.list.length>0?o(f):h(l+1)})}p(h,"run"),h(0)},"resolved");return s.async=!0,s.supportsSelection=!0,s}else return(n=t.getHelper(t.getCursor(),"hintWords"))?function(c){return r.hint.fromList(c,{words:n})}:r.hint.anyword?function(c,o){return r.hint.anyword(c,o)}:function(){}}p(z,"resolveAutoHints"),r.registerHelper("hint","auto",{resolve:z}),r.registerHelper("hint","fromList",function(t,e){var i=t.getCursor(),n=t.getTokenAt(i),s,c=r.Pos(i.line,n.start),o=i;n.start<i.ch&&/\w/.test(n.string.charAt(i.ch-n.start-1))?s=n.string.substr(0,i.ch-n.start):(s="",c=i);for(var u=[],a=0;a<e.words.length;a++){var h=e.words[a];h.slice(0,s.length)==s&&u.push(h)}if(u.length)return{list:u,from:c,to:o}}),r.commands.autocomplete=r.showHint;var V={hint:r.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnPick:!0,closeOnUnfocus:!0,updateOnCursorActivity:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null,paddingForScrollbar:!0,moveOnOverlap:!0};r.defineOption("hintOptions",null)})})();var at=et.exports,ut=tt({__proto__:null,default:at},[et.exports]);export{ut as s};
