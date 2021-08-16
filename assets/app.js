!function(t,e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):t.jquery_dotdotdot_js=e(t.jQuery)}(this,function(t){return function(t){"use strict";function e(){o=t(window),i={},n={},s={},t.each([i,n,s],function(t,e){e.add=function(t){for(var i=0,n=(t=t.split(" ")).length;i<n;i++)e[t[i]]=e.ddd(t[i])}}),i.ddd=function(t){return"ddd-"+t},i.add("truncated keep"),n.ddd=function(t){return"ddd-"+t},s.ddd=function(t){return t+".ddd"},s.add("resize"),e=function(){}}var i,n,s,o,r="dotdotdot",h="3.2.2";t[r]&&t[r].version>h||(t[r]=function(t,e){this.$dot=t,this.api=["getInstance","truncate","restore","destroy","watch","unwatch"],this.opts=e;var i=this.$dot.data(r);return i&&i.destroy(),this.init(),this.truncate(),this.opts.watch&&this.watch(),this},t[r].version=h,t[r].uniqueId=0,t[r].defaults={ellipsis:"… ",callback:function(t){},truncate:"word",tolerance:0,keep:null,watch:"window",height:null},t[r].prototype={init:function(){this.watchTimeout=null,this.watchInterval=null,this.uniqueId=t[r].uniqueId++,this.originalStyle=this.$dot.attr("style")||"",this.originalContent=this._getOriginalContent(),"break-word"!==this.$dot.css("word-wrap")&&this.$dot.css("word-wrap","break-word"),"nowrap"===this.$dot.css("white-space")&&this.$dot.css("white-space","normal"),null===this.opts.height&&(this.opts.height=this._getMaxHeight()),"string"==typeof this.opts.ellipsis&&(this.opts.ellipsis=document.createTextNode(this.opts.ellipsis))},getInstance:function(){return this},truncate:function(){this.$inner=this.$dot.wrapInner("<div />").children().css({display:"block",height:"auto",width:"auto",border:"none",padding:0,margin:0}),this.$inner.empty().append(this.originalContent.clone(!0)),this.maxHeight=this._getMaxHeight();var t=!1;return this._fits()||(t=!0,this._truncateToNode(this.$inner[0])),this.$dot[t?"addClass":"removeClass"](i.truncated),this.$inner.replaceWith(this.$inner.contents()),this.$inner=null,this.opts.callback.call(this.$dot[0],t),t},restore:function(){this.unwatch(),this.$dot.empty().append(this.originalContent).attr("style",this.originalStyle).removeClass(i.truncated)},destroy:function(){this.restore(),this.$dot.data(r,null)},watch:function(){var t=this;this.unwatch();var e={};"window"==this.opts.watch?o.on(s.resize+t.uniqueId,function(i){t.watchTimeout&&clearTimeout(t.watchTimeout),t.watchTimeout=setTimeout(function(){e=t._watchSizes(e,o,"width","height")},100)}):this.watchInterval=setInterval(function(){e=t._watchSizes(e,t.$dot,"innerWidth","innerHeight")},500)},unwatch:function(){o.off(s.resize+this.uniqueId),this.watchInterval&&clearInterval(this.watchInterval),this.watchTimeout&&clearTimeout(this.watchTimeout)},_api:function(){var e=this,i={};return t.each(this.api,function(t){var n=this;i[n]=function(){var t=e[n].apply(e,arguments);return void 0===t?i:t}}),i},_truncateToNode:function(e){var n=[],s=[];if(t(e).contents().each(function(){var e=t(this);if(!e.hasClass(i.keep)){var o=document.createComment("");e.replaceWith(o),s.push(this),n.push(o)}}),s.length){for(var o=0;o<s.length;o++){t(n[o]).replaceWith(s[o]),t(s[o]).append(this.opts.ellipsis);var r=this._fits();if(t(this.opts.ellipsis,s[o]).remove(),!r){if("node"==this.opts.truncate&&o>1)return void t(s[o-2]).remove();break}}for(var h=o;h<n.length;h++)t(n[h]).remove();var a=s[Math.max(0,Math.min(o,s.length-1))];if(1==a.nodeType){var d=t("<"+a.nodeName+" />");d.append(this.opts.ellipsis),t(a).replaceWith(d),this._fits()?d.replaceWith(a):(d.remove(),a=s[Math.max(0,o-1)])}1==a.nodeType?this._truncateToNode(a):this._truncateToWord(a)}},_truncateToWord:function(t){for(var e=t,i=this,n=this.__getTextContent(e),s=-1!==n.indexOf(" ")?" ":"　",o=n.split(s),r="",h=o.length;h>=0;h--)if(r=o.slice(0,h).join(s),i.__setTextContent(e,i._addEllipsis(r)),i._fits()){"letter"==i.opts.truncate&&(i.__setTextContent(e,o.slice(0,h+1).join(s)),i._truncateToLetter(e));break}},_truncateToLetter:function(t){for(var e=this,i=this.__getTextContent(t).split(""),n="",s=i.length;s>=0&&(!(n=i.slice(0,s).join("")).length||(e.__setTextContent(t,e._addEllipsis(n)),!e._fits()));s--);},_fits:function(){return this.$inner.innerHeight()<=this.maxHeight+this.opts.tolerance},_addEllipsis:function(e){for(var i=[" ","　",",",";",".","!","?"];t.inArray(e.slice(-1),i)>-1;)e=e.slice(0,-1);return e+this.__getTextContent(this.opts.ellipsis)},_getOriginalContent:function(){var e=this;return this.$dot.find("script, style").addClass(i.keep),this.opts.keep&&this.$dot.find(this.opts.keep).addClass(i.keep),this.$dot.find("*").not("."+i.keep).add(this.$dot).contents().each(function(){var i=t(this);if(3==this.nodeType){if(""==t.trim(e.__getTextContent(this))){if(i.parent().is("table, thead, tbody, tfoot, tr, dl, ul, ol, video"))return void i.remove();if(i.prev().is("div, p, table, td, td, dt, dd, li"))return void i.remove();if(i.next().is("div, p, table, td, td, dt, dd, li"))return void i.remove();if(!i.prev().length)return void i.remove();if(!i.next().length)return void i.remove()}}else 8==this.nodeType&&i.remove()}),this.$dot.contents()},_getMaxHeight:function(){if("number"==typeof this.opts.height)return this.opts.height;for(var t=["maxHeight","height"],e=0,i=0;i<t.length;i++)if(e=window.getComputedStyle(this.$dot[0])[t[i]],"px"==e.slice(-2)){e=parseFloat(e);break}t=[];switch(this.$dot.css("boxSizing")){case"border-box":t.push("borderTopWidth"),t.push("borderBottomWidth");case"padding-box":t.push("paddingTop"),t.push("paddingBottom")}for(i=0;i<t.length;i++){var n=window.getComputedStyle(this.$dot[0])[t[i]];"px"==n.slice(-2)&&(e-=parseFloat(n))}return Math.max(e,0)},_watchSizes:function(t,e,i,n){if(this.$dot.is(":visible")){var s={width:e[i](),height:e[n]()};return t.width==s.width&&t.height==s.height||this.truncate(),s}return t},__getTextContent:function(t){for(var e=["nodeValue","textContent","innerText"],i=0;i<e.length;i++)if("string"==typeof t[e[i]])return t[e[i]];return""},__setTextContent:function(t,e){for(var i=["nodeValue","textContent","innerText"],n=0;n<i.length;n++)t[i[n]]=e}},t.fn[r]=function(i){return e(),i=t.extend(!0,{},t[r].defaults,i),this.each(function(){t(this).data(r,new t[r](t(this),i)._api())})})}(t),!0});
!function(a,b){var c=b(a,a.document,Date);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}("undefined"!=typeof window?window:{},function(a,b,c){"use strict";var d,e;if(function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};e=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in e||(e[b]=c[b])}(),!b||!b.getElementsByClassName)return{init:function(){},cfg:e,noSupport:!0};var f=b.documentElement,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h].bind(a),k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,c,e,f,g){var h=b.createEvent("Event");return e||(e={}),e.instance=d,h.initEvent(c,!f,!g),h.detail=e,a.dispatchEvent(h),h},w=function(b,c){var d;!g&&(d=a.picturefill||e.pf)?(c&&c.src&&!b[i]("srcset")&&b.setAttribute("srcset",c.src),d({reevaluate:!0,elements:[b]})):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<e.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,d=0,f=e.throttleDelay,g=e.ricTimeout,h=function(){b=!1,d=c.now(),a()},i=m&&g>49?function(){m(h,{timeout:g}),g!==e.ricTimeout&&(g=e.ricTimeout)}:A(function(){k(h)},!0);return function(a){var e;(a=!0===a)&&(g=33),b||(b=!0,e=f-(c.now()-d),e<0&&(e=0),a||e<9?i():k(i,e))}},C=function(a){var b,d,e=99,f=function(){b=null,a()},g=function(){var a=c.now()-d;a<e?k(g,e-a):(m||f)(f)};return function(){d=c.now(),b||(b=k(g,e))}},D=function(){var g,m,o,p,y,D,F,G,H,I,J,K,L=/^img$/i,M=/^iframe$/i,N="onscroll"in a&&!/(gle|ing)bot/.test(navigator.userAgent),O=0,P=0,Q=0,R=-1,S=function(a){Q--,(!a||Q<0||!a.target)&&(Q=0)},T=function(a){return null==K&&(K="hidden"==x(b.body,"visibility")),K||!("hidden"==x(a.parentNode,"visibility")&&"hidden"==x(a,"visibility"))},U=function(a,c){var d,e=a,g=T(a);for(G-=c,J+=c,H-=c,I+=c;g&&(e=e.offsetParent)&&e!=b.body&&e!=f;)(g=(x(e,"opacity")||1)>0)&&"visible"!=x(e,"overflow")&&(d=e.getBoundingClientRect(),g=I>d.left&&H<d.right&&J>d.top-1&&G<d.bottom+1);return g},V=function(){var a,c,h,j,k,l,n,o,q,r,s,t,u=d.elements;if((p=e.loadMode)&&Q<8&&(a=u.length)){for(c=0,R++;c<a;c++)if(u[c]&&!u[c]._lazyRace)if(!N||d.prematureUnveil&&d.prematureUnveil(u[c]))ba(u[c]);else if((o=u[c][i]("data-expand"))&&(l=1*o)||(l=P),r||(r=!e.expand||e.expand<1?f.clientHeight>500&&f.clientWidth>500?500:370:e.expand,d._defEx=r,s=r*e.expFactor,t=e.hFac,K=null,P<s&&Q<1&&R>2&&p>2&&!b.hidden?(P=s,R=0):P=p>1&&R>1&&Q<6?r:O),q!==l&&(D=innerWidth+l*t,F=innerHeight+l,n=-1*l,q=l),h=u[c].getBoundingClientRect(),(J=h.bottom)>=n&&(G=h.top)<=F&&(I=h.right)>=n*t&&(H=h.left)<=D&&(J||I||H||G)&&(e.loadHidden||T(u[c]))&&(m&&Q<3&&!o&&(p<3||R<4)||U(u[c],l))){if(ba(u[c]),k=!0,Q>9)break}else!k&&m&&!j&&Q<4&&R<4&&p>2&&(g[0]||e.preloadAfterLoad)&&(g[0]||!o&&(J||I||H||G||"auto"!=u[c][i](e.sizesAttr)))&&(j=g[0]||u[c]);j&&!k&&ba(j)}},W=B(V),X=function(a){var b=a.target;if(b._lazyCache)return void delete b._lazyCache;S(a),s(b,e.loadedClass),t(b,e.loadingClass),u(b,Z),v(b,"lazyloaded")},Y=A(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,c=a[i](e.srcsetAttr);(b=e.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},aa=A(function(a,b,c,d,f){var g,h,j,l,m,p;(m=v(a,"lazybeforeunveil",b)).defaultPrevented||(d&&(c?s(a,e.autosizesClass):a.setAttribute("sizes",d)),h=a[i](e.srcsetAttr),g=a[i](e.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),m={target:a},s(a,e.loadingClass),p&&(clearTimeout(o),o=k(S,2500),u(a,Z,!0)),l&&q.call(j.getElementsByTagName("source"),_),h?a.setAttribute("srcset",h):g&&!l&&(M.test(a.nodeName)?$(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,e.lazyClass),z(function(){var b=a.complete&&a.naturalWidth>1;p&&!b||(b&&s(a,"ls-is-cached"),X(m),a._lazyCache=!0,k(function(){"_lazyCache"in a&&delete a._lazyCache},9)),"lazy"==a.loading&&Q--},!0)}),ba=function(a){if(!a._lazyRace){var b,c=L.test(a.nodeName),d=c&&(a[i](e.sizesAttr)||a[i]("sizes")),f="auto"==d;(!f&&m||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,e.errorClass)||!r(a,e.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,Q++,aa(a,b,f,d,c))}},ca=C(function(){e.loadMode=3,W()}),da=function(){3==e.loadMode&&(e.loadMode=2),ca()},ea=function(){if(!m){if(c.now()-y<999)return void k(ea,999);m=!0,e.loadMode=3,W(),j("scroll",da,!0)}};return{_:function(){y=c.now(),d.elements=b.getElementsByClassName(e.lazyClass),g=b.getElementsByClassName(e.lazyClass+" "+e.preloadClass),j("scroll",W,!0),j("resize",W,!0),j("pageshow",function(a){if(a.persisted){var c=b.querySelectorAll("."+e.loadingClass);c.length&&c.forEach&&l(function(){c.forEach(function(a){a.complete&&ba(a)})})}}),a.MutationObserver?new MutationObserver(W).observe(f,{childList:!0,subtree:!0,attributes:!0}):(f[h]("DOMNodeInserted",W,!0),f[h]("DOMAttrModified",W,!0),setInterval(W,999)),j("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(a){b[h](a,W,!0)}),/d$|^c/.test(b.readyState)?ea():(j("load",ea),b[h]("DOMContentLoaded",W),k(ea,2e4)),d.elements.length?(V(),z._lsFlush()):W()},checkElems:W,unveil:ba,_aLSL:da}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;f<g;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),d=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width)&&d!==a._lazysizesWidth&&c(a,f,e,d))},f=function(){var b,c=a.length;if(c)for(b=0;b<c;b++)d(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(e.autosizesClass),j("resize",g)},checkElems:g,updateElem:d}}(),F=function(){!F.i&&b.getElementsByClassName&&(F.i=!0,E._(),D._())};return k(function(){e.init&&F()}),d={cfg:e,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}});
!function (t, e) { if ("function" == typeof define && define.amd) define(["exports"], e); else if ("undefined" != typeof exports) e(exports); else { var n = { exports: {} }; e(n.exports), t.countDown = n.exports } }("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : this, function (t) { "use strict"; function e(t) { return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) } function n(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } function i(t, e, i) { return e && n(t.prototype, e), i && n(t, i), t } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0; var o = function () { function t(e) { !function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.options = { cont: null, countdown: !0, date: { year: 0, month: 0, day: 0, hour: 0, minute: 0, second: 0 }, endCallback: null, outputFormat: "year|week|day|hour|minute|second", outputTranslation: { year: "Years", week: "Weeks", day: "Days", hour: "Hours", minute: "Minutes", second: "Seconds" } }, this.lastTick = null, this.intervalsBySize = ["year", "week", "day", "hour", "minute", "second"], this.elementClassPrefix = "countDown_", this.interval = null, this.digitConts = {}, this._assignOptions(this.options, e) } return i(t, [{ key: "TIMESTAMP_SECOND", get: function () { return 1e3 } }, { key: "TIMESTAMP_MINUTE", get: function () { return 60 * this.TIMESTAMP_SECOND } }, { key: "TIMESTAMP_HOUR", get: function () { return 60 * this.TIMESTAMP_MINUTE } }, { key: "TIMESTAMP_DAY", get: function () { return 24 * this.TIMESTAMP_HOUR } }, { key: "TIMESTAMP_WEEK", get: function () { return 7 * this.TIMESTAMP_DAY } }, { key: "TIMESTAMP_YEAR", get: function () { return 365 * this.TIMESTAMP_DAY } }]), i(t, [{ key: "start", value: function () { var t, e, n = this; this._fixCompatibility(), t = this._getDate(this.options.date), e = this._prepareTimeByOutputFormat(t), this._writeData(e), this.lastTick = e, this.options.countdown && t.getTime() <= Date.now() ? (this.stop(), "function" == typeof this.options.endCallback && this.options.endCallback()) : this.interval = setInterval(function () { n.options.countdown && t.getTime() <= Date.now() ? (n.stop(), "function" == typeof n.options.endCallback && n.options.endCallback()) : n._updateView(n._prepareTimeByOutputFormat(t)) }, this.TIMESTAMP_SECOND) } }, { key: "stop", value: function () { null !== this.interval && clearInterval(this.interval) } }, { key: "_getDate", value: function (t) { if ("object" === e(t)) { if (t instanceof Date) return t; var n = { day: 0, month: 0, year: 0, hour: 0, minute: 0, second: 0 }; for (var i in n) n.hasOwnProperty(i) && t.hasOwnProperty(i) && (n[i] = t[i]); return new Date(n.year, n.month > 0 ? n.month - 1 : n.month, n.day, n.hour, n.minute, n.second) } return "number" == typeof t || "string" == typeof t ? new Date(t) : new Date } }, { key: "_prepareTimeByOutputFormat", value: function (t) { var e, n, i = this, o = {}; return e = this.intervalsBySize.filter(function (t) { return -1 !== i.options.outputFormat.split("|").indexOf(t) }), n = this.options.countdown ? t.getTime() - Date.now() : Date.now() - t.getTime(), e.forEach(function (t) { var e; if (n > 0) switch (t) { case "year": e = Math.trunc(n / i.TIMESTAMP_YEAR), n -= e * i.TIMESTAMP_YEAR; break; case "week": e = Math.trunc(n / i.TIMESTAMP_WEEK), n -= e * i.TIMESTAMP_WEEK; break; case "day": e = Math.trunc(n / i.TIMESTAMP_DAY), n -= e * i.TIMESTAMP_DAY; break; case "hour": e = Math.trunc(n / i.TIMESTAMP_HOUR), n -= e * i.TIMESTAMP_HOUR; break; case "minute": e = Math.trunc(n / i.TIMESTAMP_MINUTE), n -= e * i.TIMESTAMP_MINUTE; break; case "second": e = Math.trunc(n / i.TIMESTAMP_SECOND), n -= e * i.TIMESTAMP_SECOND } else e = "00"; o[t] = (("" + e).length < 2 ? "0" + e : "" + e).split("") }), o } }, { key: "_fixCompatibility", value: function () { Math.trunc = Math.trunc || function (t) { return isNaN(t) ? NaN : t > 0 ? Math.floor(t) : Math.ceil(t) } } }, { key: "_writeData", value: function (t) { var e, n = this, i = '<div class="'.concat(this.elementClassPrefix, 'cont">'); for (e in t) if (t.hasOwnProperty(e)) { var o = '<div class="'.concat(this.elementClassPrefix, '_interval_basic_cont">\n                                       <div class="').concat(this._getIntervalContCommonClassName(), " ").concat(this._getIntervalContClassName(e), '">'), a = '<div class="'.concat(this.elementClassPrefix, 'interval_basic_cont_description">\n                                                   ').concat(this.options.outputTranslation[e], "\n                                               </div>"); t[e].forEach(function (t, e) { o += '<div class="'.concat(n._getDigitContCommonClassName(), " ").concat(n._getDigitContClassName(e), '">\n                                        ').concat(n._getDigitElementString(t, 0), "\n                                    </div>") }), i += o + "</div>" + a + "</div>" } this.options.cont.innerHTML = i + "</div>", this.lastTick = t } }, { key: "_getDigitElementString", value: function (t, e) { return '<div class="'.concat(this.elementClassPrefix, 'digit_last_placeholder">\n                        <div class="').concat(this.elementClassPrefix, 'digit_last_placeholder_inner">\n                            ').concat(e, '\n                        </div>\n                    </div>\n                    <div class="').concat(this.elementClassPrefix, 'digit_new_placeholder">').concat(t, '</div>\n                    <div class="').concat(this.elementClassPrefix, 'digit_last_rotate">').concat(e, '</div>\n                    <div class="').concat(this.elementClassPrefix, 'digit_new_rotate">\n                        <div class="').concat(this.elementClassPrefix, 'digit_new_rotated">\n                            <div class="').concat(this.elementClassPrefix, 'digit_new_rotated_inner">\n                                ').concat(t, "\n                            </div>\n                        </div>\n                    </div>") } }, { key: "_updateView", value: function (t) { var e = this, n = function (n) { t.hasOwnProperty(n) && t[n].forEach(function (i, o) { null !== e.lastTick && e.lastTick[n][o] !== t[n][o] && (e._getDigitCont(n, o).innerHTML = e._getDigitElementString(t[n][o], e.lastTick[n][o])) }) }; for (var i in t) n(i); this.lastTick = t } }, { key: "_getDigitCont", value: function (t, e) { return this.digitConts["".concat(t, "_").concat(e)] || (this.digitConts["".concat(t, "_").concat(e)] = this.options.cont.querySelector(".".concat(this._getIntervalContClassName(t), " .").concat(this._getDigitContClassName(e)))), this.digitConts["".concat(t, "_").concat(e)] } }, { key: "_getIntervalContClassName", value: function (t) { return "".concat(this.elementClassPrefix, "interval_cont_").concat(t) } }, { key: "_getIntervalContCommonClassName", value: function () { return "".concat(this.elementClassPrefix, "interval_cont") } }, { key: "_getDigitContClassName", value: function (t) { return "".concat(this.elementClassPrefix, "digit_cont_").concat(t) } }, { key: "_getDigitContCommonClassName", value: function () { return "".concat(this.elementClassPrefix, "digit_cont") } }, { key: "_assignOptions", value: function (t, n) { for (var i in t) t.hasOwnProperty(i) && n.hasOwnProperty(i) && (null !== t[i] && "object" === e(t[i]) && "object" === e(n[i]) ? this._assignOptions(t[i], n[i]) : t[i] = n[i]) } }]), t }(); t.default = o, "undefined" != typeof window && (window.Countdown = o) });


var productDemo = {
  init: function(){$('.main-carousel-product-demo').flickity({groupCells: true});},
  unload: function($target){
    var $slider = $target.find('.main-carousel-product-demo');
    $slider.flickity('destroy');
  }
}
var usePageDots = false;
var imageFunctions = {
  zoom: function(zoomParent, enableTouch, magnify){
    var activateZoom = $(zoomParent).data('zoom');
    if (activateZoom){
      $(zoomParent + ' img')
      .wrap('<span style="display:inline-block"></span>')
      .css('display', 'block')
      .parent()
      .zoom({
        touch: enableTouch,
        magnify: magnify ? magnify : 1
      });
    }
  },
  linkGalleryAndCarousel: function($gallery, $carousel){
    $carousel.find('.gallery-cell:nth-child(1)').addClass('is-nav-selected');
    $carousel.on( 'click', '.gallery-cell', function() {
      var index = $(this).index();
      $carousel.find('.is-nav-selected').removeClass('is-nav-selected');
      $(this).addClass('is-nav-selected');
      $gallery.flickity( 'select', index );
    });
    $gallery.on( 'select.flickity', function() {
      var galleryData = $(this).data('flickity');
      if (galleryData){
        $carousel.find('.is-nav-selected').removeClass('is-nav-selected');
        $carousel.find('.gallery-cell:nth-child(' + (galleryData.selectedIndex + 1) + ')').addClass('is-nav-selected');
      }
    });
  },
  fullWidth: function(images, imageContainer){
    $(images).each(function(){
      var $image = $(this),alt = $image.attr('alt'),src = $image.attr('src');
      if (alt.indexOf("[") >= 0){
        $image.remove();
        var shortcodes = alt.match(/\[(.*?)\]/ig);
        alt = alt.replace(/\[(.*?)\]/ig, '');
        var captionClass = $.map( shortcodes, function( value, index ) {
          value = value.replace(/[\[\]']+/g,'');
          return value;
        });
        var caption = [
          '<div class="position-' + (captionClass.length ? captionClass : 'center') + ' caption js-caption">',
          '<div class="caption-content caption-background-false align-' + (captionClass.length ? captionClass : 'center') + '">',
          '<p class="headline">' + alt + '</p>',
          '</div>',
          '</div>'
        ].join('');
        $image.attr({alt: alt,class: 'lazyload fade-in',src: src,dataSizes: 'auto'});
        var image = $image.prop('outerHTML')
        var banner =  '<div class="banner">' + image + caption + '</div>'
        $(imageContainer).append(banner);
      }
    })
  },
  showSecondaryImage: function(){
    $('body').on("mouseenter", ".swap-true", function() {$(this).toggleClass('toggle-images');});
    $('body').on("mouseleave", ".swap-true", function() {$(this).toggleClass('toggle-images');});
  }
}
var recentlyViewed = {
  init: function(){
    var productHandle,rvCookie,rvProducts,displayProducts,rvProductArray;
    if ($('.js-product_section[data-rv-handle]').length){
      productHandle = $('.js-product_section').data('rv-handle').toString();
      rvCookie = Cookies.get('recentlyViewed');
      rvProducts = recentlyViewed.getCookieProducts(rvCookie, productHandle);
    } else if ($('.recently-viewed__section').length){
      rvCookie = Cookies.get('recentlyViewed');
      rvProducts = recentlyViewed.getCookieProducts(rvCookie, productHandle);
    } else if ($('.collection-template-section .js-sidebar-recently-viewed').length){
      rvCookie = Cookies.get('recentlyViewed');
      rvProducts = recentlyViewed.getCookieProducts(rvCookie, productHandle);
    }
    if (rvProducts){rvProductArray = unescape(rvProducts).split(',');}
    if (productHandle){
      if(!$.inArray(productHandle, rvProductArray) !== -1){
        displayProducts = [];
        rvProductArray.unshift(productHandle);
        $.each(rvProductArray, function(i, el){
          if($.inArray(el, displayProducts) === -1) displayProducts.push(el);
        });
      }
      recentlyViewed.setCookieProducts(displayProducts);
    } else {
      displayProducts = rvProductArray;
    }
    if ($('.recently-viewed__section').length){
      var parent = '.recently-viewed__section';
      recentlyViewed.getProductInformation(parent, displayProducts);
    } else if ($('.js-recently-viewed .rv-main').length){
      var parent = '.js-recently-viewed';
      recentlyViewed.getProductInformation(parent, displayProducts, productHandle);
    }
    if ($('.sidebar .js-sidebar-recently-viewed').length){
      var parent = '.sidebar .js-sidebar-recently-viewed';
      if (productHandle){
        recentlyViewed.getProductInformation(parent, displayProducts, productHandle);
      } else {
        recentlyViewed.getProductInformation(parent, displayProducts);
      }
      $('.js-sidebar-recently-viewed.hidden').parents('.sidebar-block').hide();
    }
  },
  getCookieProducts: function(rvCookie, productHandle){
    if (!rvCookie && productHandle) {
      Cookies.set('recentlyViewed', productHandle, { expires: 30, path: '/' });
      rvCookie = Cookies.get('recentlyViewed');
    } else {
      rvCookie = Cookies.get('recentlyViewed');
    }
    return rvCookie;
  },
  setCookieProducts: function(rvProductArray){
    Cookies.set('recentlyViewed', escape(rvProductArray.join(',')), { expires: 30, path: '/' });
  },
  getProductInformation: function(parent, displayProducts, productHandle){
    if (productHandle){displayProducts.splice( $.inArray(productHandle, displayProducts), 1 );}
    var productLimit = $(parent).data('visible-products');
    if (productLimit && displayProducts){displayProducts = displayProducts.slice(0, productLimit);}
    $.each(displayProducts, function (index, value) {
      if (value){
        $(parent).removeClass('hidden');
        $(parent).parents('.sidebar-block').show();
        $.ajax({
          type: 'GET',
          url: '/products/' + value  + '?view=rv',
          success: function(data) {
            var rvProduct = $(data).find('.js-recently-viewed-product');
            $(parent).find(' .rv-box-' + index ).append(rvProduct);
            
          },
          error: function(x, t, m) {},
          dataType: "html"
        });
      }
      if ($(parent).find('.rv-main').hasClass('js-rv-slider')){
        if (displayProducts.length <= productLimit) {
          $('.js-rv-slider .gallery-cell').eq(displayProducts.length).nextAll().addBack().remove();
        } else {
          $('.js-rv-slider .gallery-cell').eq(productLimit).nextAll().addBack().remove();
        }
        recentlyViewed.createSlider(parent, productLimit);
      } else if ($(parent).find('.rv-main').hasClass('js-rv-grid')){
        if (displayProducts.length <= productLimit) {
          $('.js-rv-grid .thumbnail').eq(displayProducts.length).nextAll().addBack().remove();
        } else {
          $('.js-rv-grid .thumbnail').eq(productLimit).nextAll().addBack().remove();
        }
      }
    });
  },
  createSlider: function(el, productsAvailable){
    var products_per_slide = $('.js-rv-slider').data('products-per-slide');
    var products_limit = $('.js-rv-slider').data('products-limit');
    var products_available = productsAvailable;
    var indexProductsAvailable = productsAvailable - 1;
    var rvProductstoShow = $('.js-rv-slider').find('.gallery-cell');
    var cellAlign, draggable, prevNext, wrapAround, initialIndex;
    if (products_per_slide == "2" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "4" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "6" && products_available > products_per_slide && products_limit > products_per_slide){
      cellAlign = "left";
    } else {
      cellAlign = "center";
    }
    if (products_available > products_per_slide && products_limit > products_per_slide) {
      draggable = true; prevNext = true; wrapAround = true;
    } else {
      draggable = false; prevNext = false; wrapAround = false;
    }
    if (products_per_slide == "2" && products_available > products_per_slide || products_per_slide == "4" && products_available > products_per_slide || products_per_slide == "6" && products_available > products_per_slide){
      initialIndex = 0;
    } else if (products_per_slide == "3" && products_available) {
      initialIndex = 1;
    } else if (products_per_slide == "5" && products_available) {
      initialIndex = 2;
    } else if (products_per_slide == "7" && products_available) {
      initialIndex = 3;
    }
    if ($(window).width() <= 798) {
      cellAlign = "center";
      initialIndex = 1;
      if (rvProductstoShow.length <= 2){
        draggable = false; prevNext = false; wrapAround = false;
      } else if (products_available > 3 && products_limit > 3) {
        draggable = true; prevNext = true; wrapAround = true;
      } else {
        draggable = false; prevNext = false; wrapAround = false;
      }
      $('.js-rv-slider').parents('.even-num-slides').removeClass('even-num-slides');
    }
    $('.js-rv-slider').flickity({
      "lazyLoad": 2,
      "imagesLoaded": true,
      "draggable": draggable,
      "prevNextButtons": prevNext,
      "wrapAround": false,
      "cellAlign": cellAlign,
      "pageDots": usePageDots,
      "contain": true,
      "freeScroll": true,
      "arrowShape": arrowSize,
      "initialIndex": initialIndex,
      "groupCells": true
    });
    $('.js-rv-slider').addClass('slider-initialized');
  }
}
var featuredCollectionSection = {
  init: function(){
    $('.js-product-slider .products-slider').each(function (index, value) {
      var products_per_slide = $(this).data('products-per-slide');
      var products_limit = $(this).data('products-limit');
      var products_available = $(this).data('products-available');
      var cellAlign, draggable, prevNext, wrapAround, initialIndex;
      if (products_per_slide == "2" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "4" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "6" && products_available > products_per_slide && products_limit > products_per_slide){
        cellAlign = "left";
      } else {
        cellAlign = "center";
      }
      if (products_available > products_per_slide && products_limit > products_per_slide) {
        draggable = true; prevNext = true; wrapAround = true;
      } else {
        draggable = false; prevNext = false; wrapAround = false;
      }
      if (products_per_slide == "2" && products_available > products_per_slide || products_per_slide == "4" && products_available > products_per_slide || products_per_slide == "6" && products_available > products_per_slide){
        initialIndex = 0;
      } else if (products_per_slide == "3" && products_available) {
        initialIndex = 1;
      } else if (products_per_slide == "5" && products_available) {
        initialIndex = 2;
      } else if (products_per_slide == "7" && products_available) {
        initialIndex = 3;
      }
      if ($(window).width() <= 798) {
        cellAlign = "center"; draggable = true; prevNext = true; wrapAround = true; initialIndex = 1;
        $(this).parents('.even-num-slides').removeClass('even-num-slides');
      }
      $(this).flickity({
        "lazyLoad": 7, "imagesLoaded": true, "draggable": draggable, "prevNextButtons": prevNext, "wrapAround": false, "cellAlign": cellAlign, "pageDots": usePageDots, "contain": true, "arrowShape": arrowSize, "initialIndex": 0, "groupCells": true, "freeScroll": true
      });
      $(this).addClass('slider-initialized');
      $(".products-slider .gallery-cell").addClass("pageloaded");
      $(".homepage-product-slider").css("height", "auto");
    });
  },
  unload: function($target){
    var $slider = $target.find('.js-product-slider');
    if ($slider.hasClass('flickity-enabled')){
      $slider.flickity('destroy');
    }
  }
}
var featuredPromotions = {
  init: function(){
    if ($(window).width() > 798 || $(window).width() == 0) {
      $('.feature-overlay').hover(function(){
        $(this).find('.feature-details').slideDown('100', function(){
          $(this).addClass('reveal-details');
        });
      }, function(){
        $(this).find('.feature-details').removeClass('reveal-details');
        $(this).find('.feature-details').slideUp('100');
      });
      $('.js-featured-promotions').each(function (index, value){
        var $promos = $(this);
        var animationStyle = $(this).data('promo-animation');
        $promos.waypoint(function() {
          $(this.element).find(".feature-section").addClass("animated " + animationStyle);
        }, { offset: '80%' });
      });
    }
  }
}
var slideshow = {
  init: function(){
    $('.js-homepage-slideshow').each(function (index, value){
      var $homepageSlider = $(this);
      var settings = {
        slideshowSpeed: $homepageSlider.data('slideshow-speed')*1000,
        slideshowTextAnimation: $homepageSlider.data('slideshow-text-animation')
      }
      if (!$homepageSlider.hasClass('flickity-enabled')){
        var arrowShow = $homepageSlider.find('.gallery-cell').length === 1 ? false : true;
        $homepageSlider.flickity({
          wrapAround: true,cellAlign: 'left',imagesLoaded: true,prevNextButtons: arrowShow,draggable: arrowShow,pageDots: usePageDots,autoPlay: settings.slideshowSpeed,arrowShape: arrowSize
        });
        $homepageSlider.on('click', function() {
          $homepageSlider.flickity({autoPlay: settings.slideshowSpeed});
          $homepageSlider.flickity('playPlayer');
        });
        if (settings.slideshowTextAnimation != ''){
          var flkty = $homepageSlider.data('flickity');
          setTimeout(function() {
            $homepageSlider.find('.gallery-cell:nth-child(1) .caption-content').addClass('animated ' + settings.slideshowTextAnimation);
          }, 400);
          $homepageSlider.on( 'select.flickity', function() {
            if($homepageSlider.is(':visible')) {
              var currentSlide = flkty.selectedIndex + 1;
              setTimeout(function() {
                $homepageSlider.find('.caption-content').removeClass('animated ' + settings.slideshowTextAnimation);
                $homepageSlider.find('.gallery-cell:nth-child(' + currentSlide + ') .caption-content').addClass('animated ' + settings.slideshowTextAnimation);
              }, 400);
            }
          });
        }
      }
      if ($homepageSlider.find('.gallery-cell').length > 1) {$homepageSlider.addClass('multi-image');} else {$homepageSlider.addClass('single-image');}
      $homepageSlider.find('.gallery-cell').each(function(){
        var buttonWidth = 0;
        $(this).find('.action_button').each(function(){
          $button = $(this);
          if($(this).width() > buttonWidth){
            buttonWidth = $(this).width();
          }
        });
        $(this).find('.action_button').width(buttonWidth);
      });
    });
  },
  unload: function($target){
    var $slider = $target.find('.js-homepage-slideshow');
    $slider.flickity('destroy');
  }
}
var testimonial = {
  init: function(){
    $('.js-testimonial').each(function (index, value){
      var $testimonialSlider = $(this);
      var settings = {
        slideshowSpeed: $testimonialSlider.data('slideshow-speed')*1000,
        slideshowTextAnimation: $testimonialSlider.data('slideshow-text-animation')
      }
      if( $('.testimonial-image').length > 0){
        $('.testimonial-block').each(function(){
          if( $(this).find('.testimonial-image').length == 0){
            var theBlock = $(this).closest('.testimonial-block');
            $(theBlock).addClass('set-testimonial-height');
          }
        });
      }
      if (!$testimonialSlider.hasClass('flickity-enabled')){
        var arrowShow = $testimonialSlider.find('.gallery-cell').length === 1 ? false : true;
        $testimonialSlider.flickity({
          wrapAround: true,cellAlign: 'left',imagesLoaded: true,prevNextButtons: arrowShow,draggable: arrowShow,pageDots: usePageDots,autoPlay: settings.slideshowSpeed,arrowShape: arrowSize
        });
        if (settings.slideshowTextAnimation != ''){
          var flkty = $testimonialSlider.data('flickity');
          setTimeout(function() {
            $testimonialSlider.find('.gallery-cell:nth-child(1) .caption-content').addClass('animated ' + settings.slideshowTextAnimation);
          }, 400);
          $testimonialSlider.on( 'select.flickity', function() {
            if($testimonialSlider.is(':visible')) {
              var currentSlide = flkty.selectedIndex + 1;
              setTimeout(function() {
                $testimonialSlider.find('.caption-content').removeClass('animated ' + settings.slideshowTextAnimation);
                $testimonialSlider.find('.gallery-cell:nth-child(' + currentSlide + ') .caption-content').addClass('animated ' + settings.slideshowTextAnimation);
              }, 400);
            }
          });
        }
      }
      if ($testimonialSlider.find('.gallery-cell').length > 1) {$testimonialSlider.addClass('multi-image');} else {$testimonialSlider.addClass('single-image');}
      $testimonialSlider.find('.gallery-cell').each(function(){
        var buttonWidth = 0;
        $(this).find('.action_button').each(function(){
          $button = $(this);
          if($(this).width() > buttonWidth){
            buttonWidth = $(this).width();
          }
        });
        $(this).find('.action_button').width(buttonWidth);
      });
    });
  },
  unload: function($target){
    var $slider = $target.find('.js-testimonial');
    $slider.flickity('destroy');
  }
}
var gallery = {
  init: function(){
    $('.gallery-horizontal').find('.gallery-image-wrapper').each(function(){
      var wrapper = $(this),images = $(this).find("img"),imgWidth,imgHeight;
      $("<img />").attr("src", $(images).attr("src")).on('load', function() {
        imgWidth = this.width;
        imgHeight = this.height;
        $(wrapper).css("flex-basis", imgWidth * 200 / imgHeight);
        $(wrapper).css("flex-grow", imgWidth * 200 / imgHeight);
        $(wrapper).find("i").css("padding-bottom", imgHeight / imgWidth * 100 + '%');
      });
    });
    lightboxGallery.init();
  }
}
var supports_video = function(){return !!document.createElement('video').canPlayType;}
var videoSection = {
  init: function(){
    var $videoElement,settings;
    $('.homepage-video').each(function (index, value) {
      if ($('.homepage-video').length && supports_video()) {
        $videoElement = $(this); settings = videoSection.getVideoSettings($videoElement);
        if (is_touch_device() && $(window).width() <= 798 && settings.posterImage === false || $(window).width() <= 798 && settings.posterImage === false) {
          videoSection.appendFrame($videoElement, settings);
        } else if (settings.autoPlayVideo && $(window).width() > 798){
          videoSection.appendFrame($videoElement, settings);
        } else if (settings.autoPlayVideo === false && settings.posterImage === false){
          videoSection.appendFrame($videoElement, settings);
        } else {
          $videoElement.find('.homepage-video__placeholder').show();
          $videoElement.find('.placeholder-svg--video').show();
        }
      }
    });
    $('body').on('click', '.video__play-button', function(e) {
      $videoElement = $(this).parents('.video-section').find('.homepage-video');
      $(this).fadeOut();
      settings = videoSection.getVideoSettings($videoElement);
      if ($videoElement.find('.mediaWrapper').length < 1 && $videoElement.find('video').length < 1){
        videoSection.appendFrame($videoElement, settings);
      }
    });
    $('body').on('click', '[data-play-video]', function(e) {
      $videoElement = $(this).parents('.video-section').find('.homepage-video');
      $(this).fadeOut();
      settings = videoSection.getVideoSettings($videoElement);
      if ($videoElement.find('.mediaWrapper').length < 1 && $videoElement.find('video').length < 1){
        videoSection.appendFrame($videoElement, settings);
      }
    });
  },
  getVideoSettings: function($videoElement){
    var settings = {
      container: $videoElement.find('.homepage-video'),
      header: $videoElement.find('.homepage-video--media'),
      posterImage: $videoElement.data('poster-image'),
      videoText: $videoElement.find('.homepage-video--media .caption'),
      videoTrigger: $videoElement.find("[data-play-video]"),
      autoPlayVideo: $videoElement.data('autoplay'),
      displayTextOverVideo: $videoElement.data('display-text-over-video'),
      autoloop: $videoElement.data('autoloop'),
      id: $videoElement.attr('data-video-src'),
      aspectRatio: $videoElement.attr('data-aspect-ratio').split(":"),
      provider: $videoElement.attr('data-provider').toLowerCase(),
      videoMP4: $videoElement.attr('data-video-mp4'),
      videoOGV: $videoElement.attr('data-video-ogv')
    }
    return settings;
  },
  createFrame: function(settings){
    var autoloop,controls,html,autoplay,poster = '';
    if(settings.provider === 'youtube') {
      if (settings.autoloop){autoloop = '1&iv_load_policy=3&playlist='+settings.id;} else {autoloop = 0;}
      if (settings.posterImage === false && settings.autoPlayVideo === false){autoplay = 0;} else {autoplay = 1;}
      controls = 1;
      html = '<iframe src="//www.youtube.com/embed/'+settings.id+'?&autoplay='+autoplay+'&loop='+autoloop+'&rel=0&hd=1&showinfo=0&color=white&controls=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>';
    } else if(settings.provider === 'vimeo') {
      if (settings.posterImage === false && settings.autoPlayVideo === false){autoplay = 0;} else {autoplay = 1;}
      if (settings.autoloop){autoloop = 1;} else {autoloop = 0;}
      html = '<iframe src="//player.vimeo.com/video/'+settings.id+'?loop='+autoloop+'&amp;title=0&amp;byline=0&amp;portrait=0&amp;color=3d96d2&autoplay='+autoplay+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>';
    } else if(settings.provider === 'html5') {
      if (settings.posterImage !== false){poster = ' poster="https://' + settings.posterImage;}
      if (settings.posterImage === false && settings.autoPlayVideo === false && is_touch_device() === 0){
        autoplay = ' ';
      } else if (settings.autoPlayVideo && settings.posterImage !== false){
        poster = ' poster="https://' + settings.posterImage;
        autoplay = ' autoplay ';
      } else {
        autoplay = ' autoplay ';
      }
      if (settings.autoloop){autoloop = ' loop="loop" ';}
      controls = '';
      html = '<video '+ controls + autoplay + autoloop + poster +' id="video" onclick="this.paused?this.play():this.pause();" ><source src="'+settings.videoMP4+'" type="video/mp4"><source src="'+settings.videoOGV+'" type="video/ogg" ></video>';
    }
    return html;
  },
  appendFrame: function($videoElement, settings){
    var mediaWrapper;
    if (settings.displayTextOverVideo === false){settings.videoText.fadeOut();}
    $videoElement.find('.video__play-button').fadeOut();
    $videoElement.append(videoSection.createFrame(settings));
    if (settings.provider != 'html5'){
      var paddingBottomValue = settings.aspectRatio[1] / settings.aspectRatio[0] * 100 + '%';
      $videoElement.find('iframe').mediaWrapper({intrinsic: false,baseWidth : settings.aspectRatio[0],baseHeight: settings.aspectRatio[1]});
      $videoElement.css({height: 0,paddingBottom: paddingBottomValue});
    } else {
      $videoElement.find('.homepage-video__image').hide();
    }
  },
  unload: function($target){$target.find('[data-play-video]').off('click');}
}
var cart = {
  init: function(){
    if ($('#cart_form .tos_agree').length) {
      $('body').on('click', "#cart_form input[type='submit']", function() {
        if ($(this).parents('form').find('.tos_agree').is(':checked')) {
          $(this).submit();
        } else {
          var warning = '<p class="warning animated bounceIn">' + "You must agree with the terms and conditions to checkout." + '</p>';
          if ($('p.warning').length == 0) {$(this).before(warning);}
          return false;
        }
      });
    }
  }
}
selectCallback = function(variant, selector) {
  var $product = $('.product-' + selector.product.id);
  var $notify_form = $('.notify-form-' + selector.product.id);
  var $productForm = $('.product_form', $product);
  var variantInventory = $productForm.data('variant-inventory');
  if (variant && variant.featured_image && $product.is(":visible")) {
    var $sliders = $('.product_gallery', $product);
    $sliders.each(function() {
      var $slider = $(this);
      var $sliderInstance = Flickity.data(this);
      if ($slider.is(":visible") && $sliderInstance != undefined ) {
        var index = $('[data-image-id="' + variant.featured_image.id + '"]').data('index');
        $sliderInstance.select( index, false, true );
      }
    });
  }
  if (variant) {
    if (variantInventory) {
      variantInventory.forEach(function(v){
        if (v.id === variant.id) {
          variant.inventory_quantity = v.inventory_quantity;
          variant.inventory_management = v.inventory_management;
          variant.inventory_policy = v.inventory_policy;
        }
      });
    }
    $('.sku span', $product).text(variant.sku);
    
    for (var i=0,length=variant.options.length; i<length; i++) {
      var radioButton = $productForm.find('.swatch[data-option-index="' + escape(i) + '"] :radio[value="' + variant.options[i].replace(/\"/g,'\\"') +'"]');
      if (radioButton.length) {radioButton.get(0).checked = true;}
    }
    
  }
  if (variant && variant.available == true) {
    if(variant.price < variant.compare_at_price){
      $('.was_price', $product).html('<span class="money">' + Shopify.formatMoney(variant.compare_at_price, $productForm.data('money-format')) + '</span>');
      $('.savings', $product).html("You save" + ' ' + parseInt(((variant.compare_at_price - variant.price) * 100) / variant.compare_at_price) + '% (' + '<span class="money">' + Shopify.formatMoney(variant.compare_at_price - variant.price, $productForm.data('money-format')) + '</span>)');
      $('.current_price', $product).parent().addClass('sale');
    } else {
      $('.was_price', $product).html('');
      $('.savings', $product).html('');
      $('.current_price', $product).parent().removeClass('sale');
    }
    if (variant.inventory_management && variant.inventory_quantity > 0) {
      
      if (variant.inventory_quantity == 1) {items_left_text = "copy left";} else {items_left_text = "copies left";}
      var inventoryThreshold = 10;
      if (variant.inventory_quantity <= inventoryThreshold ) {$('.items_left', $product).html(variant.inventory_quantity + " " + items_left_text);} else {$('.items_left', $product).html("");}
      
      if(variant.inventory_policy == "deny") {$('.quantity', $product).attr('max', variant.inventory_quantity);}
    } else {
      $('.items_left', $product).text('');
      $('.quantity', $product).removeAttr('max');
    }
    $('.sold_out', $product).text('');
    if (variant.price > 0) {
      $('.current_price', $product).html('<span class="money">' + Shopify.formatMoney(variant.price, $productForm.data('money-format')) + '</span>');
    } else {
      $('.current_price', $product).html("");
    }
    $('.add_to_cart', $product).removeClass('disabled').removeAttr('disabled').find('span').text($('.add_to_cart', $product).data('label'));
    $('.shopify-payment-button', $product).show();
    $notify_form.hide();
  } else {
      var message = variant ? "Out-of-Stock" : "Unavailable";
      $('.was_price', $product).text('');
      $('.savings', $product).text('');
      $('.current_price', $product).text('');
      $('.items_left', $product).text('');
      $('.quantity', $product).removeAttr('max');
      $('.sold_out', $product).text(message);
      $('.add_to_cart', $product).addClass('disabled').attr('disabled', 'disabled').find('span').text(message);
      $('.shopify-payment-button', $product).hide();
      if (variant) {$notify_form.fadeIn();}
    }
  
  };
  var productPage = {
    init: function(){
      var draggable = true, prevNextButtons = true, autoplay = $('.product_gallery').data('autoplay');
      setTimeout(function(){
        imageFunctions.linkGalleryAndCarousel($('.js-product-page-gallery .product_gallery'), $('.js-product-page-gallery .product_gallery_nav'));
      }, 1000);
      imageFunctions.zoom('.product_gallery', false);
      if($('.js-full-width-product-images').length){imageFunctions.fullWidth('.product-template .product .description img', '.js-full-width-product-images');}
      if ($('.product_gallery').hasClass('single-image')){draggable = false;prevNextButtons = false;}
      $('.product_gallery').flickity({
        "wrapAround": true,"cellAlign": "left","draggable": draggable,"contain": true,"imagesLoaded": true,"lazyLoad": 2,"pageDots": usePageDots,"prevNextButtons": prevNextButtons,"autoPlay": autoplay ? 6000 : false,"selectedAttraction": 0.01,"friction": 0.15,"arrowShape": arrowSize
      });
      $(".js-product_section .product_form_options").each(function() {
        new Shopify.OptionSelectors($(this).data("select-id"), { product: $(this).data("product"), onVariantSelected: selectCallback, enableHistoryState: $(this).data("enable-state") });
      });
      var $notify_form = $('.notify_form .contact-form');
      $notify_form.each(function() {
        var $nf = $(this);
        $nf.on("submit", function (e) {
          if($('input[name="challenge"]', $nf).val() !== "true") {
            $.ajax({
              type: $nf.attr('method'),
              url: $nf.attr('action'),
              data: $nf.serialize(),
              success: function (data) {
                $nf.fadeOut("slow", function(){
                  $nf.prev('.message').html("Thanks! We will notify you when this product becomes available!");
                });
              },
              error: function(data) {
                $('input[name="challenge"]', $nf).val('true');
                $nf.submit();
              }
            });
            e.preventDefault();
          }
        });
      });
      
      $('body').on('change', '.swatch :radio', function() {
        var optionIndex = $(this).closest('.swatch').attr('data-option-index');
        var optionValue = $(this).val();
        var parentForm = $(this).closest('.product_form');
        if (parentForm.siblings('.notify_form').length){var notifyForm = parentForm.siblings('.notify_form');} else {var notifyForm = $('.js-notify-form');}
        var option1 = parentForm.find('.swatch_options input:checked').eq(0).val();
        var option2 = parentForm.find('.swatch_options input:checked').eq(1).val() || '';
        var option3 = parentForm.find('.swatch_options input:checked').eq(2).val() || '';
        if (option1 && option2 && option3){
          var notifyMessage = option1 + ' / ' + option2 + ' / ' + option3;
        } else if (option1 && option2){
          var notifyMessage = option1 + ' / ' + option2;
        } else {
          var notifyMessage = option1;
        }
        notifyForm.find(".notify_form_message").attr("value", notifyForm.find(".notify_form_message").data('body') + " - " + notifyMessage );
        $(this).closest('form').find('.single-option-selector').eq(optionIndex).val(optionValue).trigger('change');
      });
      
      lightboxGallery.init();
    },
        productSwatches: function(){
          
          if ($('.js-product_section').length){
            var $productForms = $('.js-product_section').find('.product_form');
            $productForms.addClass('is-visible');
            $productForms.each(function(){
              var JSONData = $(this).data('product');
              var productID = $(this).data('product-id');
              var productSection = '.product-' + productID + ' .js-product_section';
              var swatchOptions = $(this).find('.swatch_options .swatch');
              if (swatchOptions.length > 1){Shopify.linkOptionSelectors(JSONData, productSection);}
            });
          }
          if ($('.js-product_section').length > 1){
            $('body').on('click', '.swatch-element', function(){
              var swatchValue = $(this).data('value');
              $(this).siblings('input[value="'+ swatchValue.replace(/\"/g,'\\"') +'"]').prop("checked", true).trigger("change");
              var JSONData = $(this).parents('.product_form').data('product');
              var productID = $(this).parents('.product_form').data('product-id');
              var productSection = '.product-' + productID + ' .js-product_section';
              var swatchOptions = $(this).parents('.product_form').find('.swatch_options .swatch');
              if (swatchOptions.length > 1){Shopify.linkOptionSelectors(JSONData, productSection);}
            })
          }
          
        },
          recommendTagProducts: function(){
            $('.js-recommend-tags-products-slider .products-slider').each(function (index, value) {
              var products_per_slide = $(this).data('products-per-slide');
              var products_limit = $(this).data('products-limit');
              var products_available = $(this).data('products-available');
              var cellAlign,draggable,prevNext,wrapAround,initialIndex;
              if (products_per_slide == "2" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "4" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "6" && products_available > products_per_slide && products_limit > products_per_slide){
                cellAlign = "left";
              } else {
                cellAlign = "center";
              }
              if (products_available > products_per_slide && products_limit > products_per_slide) {
                draggable = true;prevNext = true;wrapAround = true;
              } else {
                draggable = false;prevNext = false;wrapAround = false;
              }
              if (products_per_slide == "2" && products_available > products_per_slide || products_per_slide == "4" && products_available > products_per_slide || products_per_slide == "6" && products_available > products_per_slide){
                initialIndex = 0;
              } else if (products_per_slide == "3" && products_available) {
                initialIndex = 1;
              } else if (products_per_slide == "5" && products_available) {
                initialIndex = 2;
              } else if (products_per_slide == "7" && products_available) {
                initialIndex = 3;
              }
              if ($(window).width() <= 798) {
                cellAlign = "center";draggable = true;prevNext = true;wrapAround = true;initialIndex = 1;
                $(this).parents('.even-num-slides').removeClass('even-num-slides');
              }
              $(this).flickity({
                "lazyLoad": 7,"imagesLoaded": true,"draggable": draggable,"prevNextButtons": prevNext,"wrapAround": false,"cellAlign": cellAlign,"pageDots": usePageDots,"contain": true,"arrowShape": arrowSize,"initialIndex": 0,"groupCells": true,"freeScroll": true
              });
            });
          },
          relatedProducts: function(){
            $('.js-related-products-slider .products-slider').each(function (index, value) {
              var products_per_slide = $(this).data('products-per-slide');
              var products_limit = $(this).data('products-limit');
              var products_available = $(this).data('products-available');
              var cellAlign,draggable,prevNext,wrapAround,initialIndex;
              if (products_per_slide == "2" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "4" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "6" && products_available > products_per_slide && products_limit > products_per_slide){
                cellAlign = "left";
              } else {
                cellAlign = "center";
              }
              if (products_available > products_per_slide && products_limit > products_per_slide) {
                draggable = true;prevNext = true;wrapAround = true;
              } else {
                draggable = false;prevNext = false;wrapAround = false;
              }
              if (products_per_slide == "2" && products_available > products_per_slide || products_per_slide == "4" && products_available > products_per_slide || products_per_slide == "6" && products_available > products_per_slide){
                initialIndex = 0;
              } else if (products_per_slide == "3" && products_available) {
                initialIndex = 1;
              } else if (products_per_slide == "5" && products_available) {
                initialIndex = 2;
              } else if (products_per_slide == "7" && products_available) {
                initialIndex = 3;
              }
              if ($(window).width() <= 798) {
                cellAlign = "center";draggable = true;prevNext = true;wrapAround = true;initialIndex = 1;
                $(this).parents('.even-num-slides').removeClass('even-num-slides');
              }
              $(this).flickity({
                "lazyLoad": 7,"imagesLoaded": true,"draggable": draggable,"prevNextButtons": prevNext,"wrapAround": false,"cellAlign": cellAlign,"pageDots": usePageDots,"contain": true,"arrowShape": arrowSize,"initialIndex": 0,"groupCells": true,"freeScroll": true
              });
            });
          },
            initializeQuantityBox: function(){
              $('body').on('click', '.js-change-quantity', function() {
                var $this = $(this),
                    $input = $(this).siblings('input'),
                    val = parseInt($input.val()),
                    valMax = 100000000000000000000000000000,
                    valMin = $input.attr('min') || 0;
                if ($input.attr('max') != null){valMax = $input.attr('max');}
                if(isNaN(val) || val < valMin) {
                  $input.val(valMin);
                  return false;
                } else if (val > valMax) {
                  $input.val(valMax);
                  return false;
                }
                if($this.data('func') == 'plus') {
                  if(val < valMax) $input.val(val + 1);
                } else {
                  if(val > valMin) $input.val(val - 1);
                }
                $input.trigger('change');
                $('body.cart :input[type="submit"]').hide();
                $('body.cart a.js-update-quantity').css('display', 'inline-block');
              });
            },
            unload: function($target){
              var $slider = $target.find('.products-slider');
              $slider.flickity('destroy');
            }
  }
  
  var header = {
        init: function(){
          var closeDropdown = function() {
            $('body').removeClass('is-active');
            $('.dropdown_link').removeClass('active_link');
            $('.dropdown_container').hide();
            $('.mobile_nav').find('div').removeClass('open');
          };
          var closeMiniCart = function() {
            $('body').removeClass('is-active');
            $('.dropdown_link').toggleClass('active_link');
            $('.cart_container').removeClass('active_link');
          };
          var openMiniCart = function($cart_container) {
            $('.mobile_nav div').removeClass('open');
            $('.dropdown_link').removeClass('active_link');
            $cart_container.addClass('active_link');
          };
          if ($('.promo_banner').length){
            var promo_banner = Cookies.get('promo_banner');
            if (promo_banner != 'dismiss') {
              $('body').addClass('promo_banner-show');
              $('.promo_banner').on('click', '.promo_banner-close', function(){
                $('body').removeClass('promo_banner-show');
                Cookies.set('promo_banner', 'dismiss', { expires: 30 });
              });
            }
          }
          $('.vertical-menu_submenu, .vertical-menu_sub-submenu').each(function() {
            if($(this).is(':off-right')) {$(this).addClass('vertical-menu--align-right');}
          });
          $('html').on('click', function(event) {
            if (!$(event.target).closest('.cart_container').length && $('.cart_content').is(':visible')) {closeMiniCart();}
            if (!$(event.target).closest('.dropdown_container').length && $('.dropdown').is(':visible')) {closeDropdown();}
          });
          if ($(window).width() > 798) {
            if ($('.header').hasClass('header-fixed--true')){
              if (!$('.main_nav_wrapper').hasClass('sticky_nav')) {
                var sticky_nav = new Headhesive('.main_nav_wrapper', {
                  offset: 700,throttle: 300,classes: {clone: 'sticky_nav',stick: 'sticky_nav--stick',unstick: 'sticky_nav--unstick'},
                  onInit: function() {
                    $(".sticky_nav .secondary_logo").css('display', 'none');
                    $(".sticky_nav .primary_logo").css('display', 'block');
                    $(".sticky_nav .icon-search").css('display', 'block');
                    $(".sticky_nav .search_container").css('display', 'none');
                    $(".sticky_nav .nav:last").prepend($(".header .cart_container").clone());
                    var sticky_nav_height = $(".sticky_nav").height() + 5;
                  },
                  onUnstick: function() {$('.cart_container').removeClass('active_link');}
                });
              }
            } else {
              $('.header-fixed--true').removeClass('header-fixed--true');
              if($('.main_nav_wrapper').length > 1){$('.main_nav_wrapper').first().remove();}
            }
            if($('img.primary_logo:visible')){$('.logo img', $(".feature_image .header")).attr('src', $('.logo img').data('src-home'));}else{$('.logo img').attr('src', $('.logo img').data('src'));}
          } else {
            if($('#header').hasClass('mobile_nav-fixed--true')){$('body').addClass('mobile_nav-fixed--true');}else{$('body').addClass('mobile_nav-fixed--false');}
          }
          $('#header .cart_container').append($('.cart_content').clone());
          if ($(window).width() <= 798) {
            $('.dropdown_link').attr('data-no-instant', true);
            $('body').on('click', '.dropdown_link', function(e) {
              $('.nav a').removeClass('active_link');
              if ($('#header').is(':visible')) {
                var $dropdown = $(this).parents("#header").find('[data-dropdown="' + $(this).data("dropdown-rel") + '"]')
                if(!$(this).hasClass('mini_cart')) {$('.cart_container').removeClass('active_link');}
              } else {
                if($(this).hasClass("icon-search")) {
                  window.location = $(this).attr("href");
                  return false;
                }
                var $dropdown = $(this).parents(".main_nav").find('[data-dropdown="' + $(this).data("dropdown-rel") + '"]');
                }
              if ($dropdown.is(':visible') || $dropdown.attr('class') === undefined) {
                $dropdown.hide();
                $('body').removeClass('is-active');
              } else {
                $('.dropdown_container').hide();
                if(!$(this).hasClass('cart_container')) {$('.is-absolute').parent().removeClass('feature_image');}
                $dropdown.show();
                $('body').addClass('is-active');
                $('.mobile_nav').find('div').removeClass('open');
              }
              if ($dropdown.is(':visible')) {
                e.stopPropagation();
                return false;
              }
            });
            $('body').on("click", '.mobile_nav', function() {$(this).find('div').toggleClass('open');});
            $(".mini_cart").on("click", function(e) {
              var $cart_container = $(this).parent();
                if($cart_container.hasClass('active_link')) {closeMiniCart();} else {openMiniCart($cart_container);}
                if (is_touch_device() || $(window).width() <= 798) {e.preventDefault();}
            });
            $('.cart_content__continue-shopping').on('click', function(e){closeMiniCart();});
          } else {
            $(".nav a, .logo a").not(".cart_content a").on("mouseenter", function() {
              if(!$(this).hasClass("active_link")) {
                $('.dropdown_container').hide();
                $('.active_link').removeClass('active_link');
                $('.is-absolute').parent().addClass('feature_image');
              }
            });
            $('.main_nav, .top_bar, .cart_container').on("mouseleave", function() {
              $('.dropdown_container').hide();
              $('.active_link').removeClass('active_link');
              $('.is-absolute').parent().addClass('feature_image');
            });
            $('.dropdown_link, .dropdown_link--vertical').attr('data-click-count', 0);
            $('.dropdown_link').on('mouseover touchstart', function(e) {
              $('.dropdown_container').hide();
              var $dropdown = $(this).parents('.main_nav').find('[data-dropdown="' + $(this).data('dropdown-rel') + '"]');
              var clickCount = $(this).attr('data-click-count');
              $('.active_link').removeClass('active_link');
              if(!$(this).hasClass('active_link')) {
                $dropdown.show();
                if($(this).hasClass('mini_cart')) {
                  $(this).parent('.cart_container').addClass('active_link');
                } else {
                  $(this).addClass('active_link');
                  $('.is-absolute').parent().removeClass('feature_image');
                }
              }
              if(is_touch_device()){
                $('.dropdown_link').not(this).attr('data-click-count', 0);
                $('.dropdown_link').attr('data-no-instant', true);
                if (e.type == 'touchstart'){
                  clickCount++;
                  $(this).attr('data-click-count', clickCount);
                  if (clickCount < 2){
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                  }
                }
              }
            });
            if ($('.dropdown_link--vertical').length){
              $('.dropdown_link--vertical, .vertical-menu_submenu').on('mouseover', function(e) {
                var $dropdown = $(this).parents('.main_nav').find('[data-dropdown="' + $(this).data('dropdown-rel') + '"]');
                var clickCount = $(this).attr('data-click-count');
                $('.active_link').removeClass('active_link');
                if(!$(this).hasClass('active_link')) {
                  $(this).children('a').addClass('active_link');
                  $('.is-absolute').parent().removeClass('feature_image');
                }
              });
              if(is_touch_device()){
                $('.dropdown_link--vertical').on('touchstart', function(e) {
                  var $dropdownMegaMenu = $(this).parents('.main_nav').find('[data-dropdown="' + $(this).data('dropdown-rel') + '"]');
                  var $dropdownVertical = $(this).next('.vertical-menu_submenu');
                  var clickCount = $(this).attr('data-click-count');
                  $('.dropdown_link--vertical').not(this).attr('data-click-count', 0);
                  $('.dropdown_link--vertical').attr('data-no-instant', true);
                  $('.dropdown_container').hide();
                  $dropdownMegaMenu.show();
                  $('.vertical-menu_submenu').removeClass('is-visible');
                  $dropdownVertical.addClass('is-visible');
                  if (e.type == 'touchstart'){
                    clickCount++;
                    $(this).attr('data-click-count', clickCount);
                    if (clickCount < 2){
                      e.preventDefault();
                      e.stopPropagation();
                      return false;
                    }
                  }
                });
              }
            }
          }
        },
        removeDataAttributes: function(target){
          if($(target).length){
            var i,$target = $(target),attrName,dataAttrsToDelete = [],dataAttrs = $target.get(0).attributes,dataAttrsLen = dataAttrs.length;
            for (i=0; i<dataAttrsLen; i++) {if ( 'data-' === dataAttrs[i].name.substring(0,5) ) {dataAttrsToDelete.push(dataAttrs[i].name);}}
            $.each(dataAttrsToDelete, function( index, attrName ) {$target.removeAttr( attrName );});
          }
        },
        loadMegaMenu: function(){
          $('.sticky_nav .mega-menu').remove();
          $('.header .mega-menu').remove();
          $('.mega-menu-container .mega-menu').clone().appendTo('.sticky_nav .main_nav');
          header.removeDataAttributes('.sticky_nav .mega-menu.dropdown_container .dropdown_column');
          $('.mega-menu-container .mega-menu').each(function(index){
            var megaMenuValue = $(this).data("dropdown");
            $('[data-dropdown-rel="' + megaMenuValue + '"]').find('span').remove();
            $('[data-dropdown-rel="' + megaMenuValue + '"]').not('.icon-search').append(' <span class="icon-down-arrow"></span>').addClass('mega-menu-parent').addClass('dropdown_link').removeClass('top_link');
            $('[data-dropdown="' + megaMenuValue + '"]').each(function(index){if(!$(this).hasClass('mega-menu')) {$(this).remove();}});
            $(this).clone().appendTo('.header .main_nav');
          });
          if ($('.dropdown_link--vertical').length){
            $('.dropdown_link--vertical.mega-menu-parent + .vertical-menu_submenu').remove();
            $('.dropdown_link--vertical:not(.mega-menu-parent)').each(function(index){
              var megaMenuValue = $(this).data('dropdown-rel');
              $('[data-dropdown="' + megaMenuValue + '"]').remove();
            })
          }
          $('.mega-menu-parent').on('mouseenter', function() {
            if(!$(this).hasClass('active_link')) {
              $('.dropdown_container').hide();
              $(this).parents('.main_nav').find('[data-dropdown="' + $(this).data('dropdown-rel') + '"]').toggle();
              $(this).addClass('active_link');
              $('.is-absolute').parent().removeClass('feature_image');
            }
          });
          header.removeDataAttributes('.header .mega-menu.dropdown_container .dropdown_column');
          if (is_touch_device() || $(window).width() <= 798) {$('.dropdown_link').attr('data-no-instant', true);}
          header.loadMobileMegaMenu();
        },
        loadMobileMegaMenu: function() {
          $('.mega-menu-container .mobile-mega-menu').each(function(index){
            $('[data-mobile-dropdown-rel="' + $(this).data("mobile-dropdown") + '"]').find('span').remove();
            $('[data-mobile-dropdown-rel="' + $(this).data("mobile-dropdown") + '"] > a').append(' <span class="right icon-down-arrow"></span>').attr('data-no-instant', 'true');
            $('[data-mobile-dropdown-rel="' + $(this).data("mobile-dropdown") + '"]').addClass('mobile-mega-menu-parent sublink');
            $('[data-mobile-dropdown-rel="' + $(this).data("mobile-dropdown") + '"]').append(this);
            $('[data-mobile-dropdown-rel="' + $(this).data("mobile-dropdown") + '"] > ul').each(function(index){
              if (!$(this).hasClass('mobile-mega-menu')) {$(this).remove();}
            });
          });
        },
        unloadMegaMenu: function(){
          $('.header .mega-menu').remove();
          $('.mega-menu-container .mega-menu').each(function(index){
            var menuParent = $(this).data('dropdown');
            $('.mega-menu-parent[data-dropdown-rel="' + $(this).data("dropdown") + '"]').find('.icon-down-arrow').remove();
          });
        },
        unload: function() {
          $('body').off("click", '.mobile_nav');
          $('body').off('click', '.dropdown_link');
          $('html').off('click');
          $('.mini_cart').off('click');
          $('.cart_content__continue-shopping').off('click');
        }
      }
  
  var enableLoadMoreSearch = function(){
        $('body').on('click', '.js-load-more a', function(e){
          enableInfiniteSearchScroll();
          e.stopPropagation();
          return false;
        });
      }
  var enableInfiniteSearchScroll = function(){
        if ($('.search-matrix').length) {
          var infiniteSearchScroll = new Waypoint.Infinite({
            element: $('.search-matrix')[0],items: '.search-matrix',more: '.load-more__btn',loadingClass: 'loading-in-progress',onBeforePageLoad: function(){$('.js-load-more').hide();},
            onAfterPageLoad: function(data){
              SPR.$(document).ready(function() {return SPR.registerCallbacks(),SPR.initRatingHandler(),SPR.initDomEls(),SPR.loadProducts(),SPR.loadBadges()});
              
              $(function(){$('.product-details .title').dotdotdot({truncate: 'letter',watch: 'window',height: 36,});});
            }
          })
       	}
      }
  
  
  Shopify.queryParams = {};
  if (location.search.length) {
        for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
          aKeyValue = aCouples[i].split('=');
          if (aKeyValue.length > 1) {Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);}
        }
      }
  var quickFilter = {
        init: function(){
          var selectedOptions = [],query = '',currentTags = '',siteUrl = 'https://' + $.url('hostname'),url1 = $.url('1') ? '/' + $.url('1') + '/' : '',url2 = $.url('2') ? $.url('2') + '/' : '',url3 = $.url('3') ? $.url('3') + '/' : '',path = url1 + url2 + url3;
          if ($('#sort-by').length){query = $('#sort-by').val();} else {query = url('?sort_by');}
          if ($('#tag_filter').length){
            if ($('#tag_filter').data('default-collection') != $('#tag_filter').val()){
              urlTag = $('#tag_filter').val().substr($('#tag_filter').val().lastIndexOf('/') + 1);
              if (urlTag != 'all'){if ($.inArray( urlTag, selectedOptions ) > -1){} else {selectedOptions.unshift(urlTag);}}
            }
          }
          $('[data-option-filter] input:checked').each(function (){
            selectedOptions.push($(this).val());
          });
          selectedOptions = $.makeArray(selectedOptions);
          $.each(selectedOptions, function(i, value){
            if (i != selectedOptions.length - 1) {currentTags += selectedOptions[i] + '+';} else {currentTags += selectedOptions[i];}
          });
          Shopify.queryParams.sort_by = query;
          query = '?' + $.param(Shopify.queryParams);
          quickFilter.processUrl(path, currentTags, query);
        },
        updateView: function(filterURL) {
          $.ajax({
            type: 'GET',
            url: filterURL,
            beforeSend: function() {
              $(".collection-matrix").addClass('fadeOut animated loading-in-progress filter-loading');
              Waypoint.destroyAll()
            },
            success: function(data) {
              $(".collection-matrix").removeClass('loading-in-progress');
              $(".collection-matrix").removeClass('filter-loading');
              var filteredBreadcrumb = $(data).find('.breadcrumb_text').html();
              $('.breadcrumb_text').html(filteredBreadcrumb);
              var filteredPagination = $(data).find('.paginate').html();
              $('.paginate').html(filteredPagination);
              var filteredSidebar = $(data).find('.sidebar').html();
              $('.sidebar').html(filteredSidebar);
              var filteredPageLinks = $(data).find('.paginate').html();
              $('.paginate').empty();
              $('.paginate').html(filteredPageLinks);
              var filteredData = $(data).find('.collection-matrix');
              $('.collection-matrix').remove();
              filteredData.insertBefore( $('.load-more__icon') );
              window.history && window.history.pushState && window.history.pushState("", "", filterURL);
              if ($('.sidebar__collection-filter').length){
                collectionSidebarFilter.init();
              }
              
              
              
              SPR.$(document).ready(function() {
                return SPR.registerCallbacks(),
                  SPR.initRatingHandler(),
                  SPR.initDomEls(),
                  SPR.loadProducts(),
                  SPR.loadBadges()
              })
              
              $(function() {
                $('.product-details .title').dotdotdot({
                  truncate: 'letter',
                  watch: 'window',
                  height: 36,
                });
              });
            },
            error: function(x, t, m) {location.replace(location.protocol + '//' + location.host + filterURL);},
            dataType: "html"
          });
        },
        processUrl: function(path, tags, query){
          var query = query.replace(/\page=(\w+)&/, ''),
              urlString = '';
          urlString = path + tags + query;
          quickFilter.updateView(urlString);
        }
      }
  $('#sort-by').val($('#sort-by').data('default-sort'));
  $('body').on('change', '#tag_filter, #sort-by', function() {quickFilter.init();});
  $('body').on('change', '#blog_filter', function() {
        var url = $(this).val();
        window.location = url;
      });
  $('input, select, textarea').on('focus blur', function(event) {
        $('meta[name=viewport]').attr('content', 'width=device-width,initial-scale=1,maximum-scale=' + (event.type == 'blur' ? 10 : 1));
      });
  var searchAutocomplete = {
        init: function(){
          var currentAjaxRequest = null,shopURL = $('body').data('shop-url');
          var searchPath = shopURL + '/search?type=product&options[unavailable_products]=hide&q=';
          $(".search_form, .search__form").on("submit", function(e){
            var formValue = $(this).find('input[name="q"]');
            e.preventDefault();
            if(!formValue.val()) {
              window.location.href = '/search';
            } else {
              window.location.href = searchPath + "title:" + formValue.val().replace(/\s+/g, '-') + "* OR product_type:" + formValue.val().replace(/\s+/g, '-') + "* OR variants.sku:" + formValue.val().replace(/\s+/g, '-') + "* OR tag:" + formValue.val().replace(/\s+/g, '-') + "* OR vendor:" + formValue.val().replace(/\s+/g, '-');
            }
          });
          var searchForms = $('form.search_form, form.search, form.header_search_form').each(function() {
            var input = $(this).find('input[name="q"]');
            $('<div class="search__results-wrapper"><ul class="search__results"></ul></div>').appendTo($(this));
            input.attr('autocomplete', 'off').bind('keyup change', function() {
              if(input.val() == '') {
                $('.search__results').hide();
                $('.search__results').empty();
              }
              var term = $(this).val();
              var form = $(this).closest('form');
              var searchURL = searchPath + "title:" + term.replace(/\s+/g, '-') + "* OR product_type:" + term.replace(/\s+/g, '-') + "* OR variants.sku:" + term.replace(/\s+/g, '-') + "* OR tag:" + term.replace(/\s+/g, '-') + "* OR vendor:" + term.replace(/\s+/g, '-');
              var resultsList = form.find('.search__results');
              if (term.length >= 3) {
                if (currentAjaxRequest != null) currentAjaxRequest.abort();
                currentAjaxRequest = $.getJSON(searchURL +'*&view=json', function(data) {
                  resultsList.empty();
                  if(data.results_count == 0) {
                    resultsList.hide();
                  } else {
                    $.each(data.results, function(index, item) {
                      if(index >= 10) {return false;}
                         var link = $('<a></a>').attr('href', item.url);
                      if(item.object_type == 'product') {
                        var collectionHandles = [];
                        for(i=0; i < item.collections.length; i++) {collectionHandles.push(item.collections[i].handle);}
                        if($.inArray('coming-soon', collectionHandles) != -1) {
                          var itemPrice = "Coming Soon";
                        } else {
                          if(item.available == true) {
                            if(item.raw_compare > item.raw_price ) {
                              var itemPrice = '<span class="was_price">' + item.compare + '</span> ' + item.price;
                            } else {
                              if(item.price_varies && item.price_min > 0) {
                                var itemPrice = "from " + item.price;
                              } else if(item.price > 0 || item.raw_price > 0) {
                                var itemPrice = item.price;
                              } else {
                                var itemPrice = '';
                              }
                            }
                          } else {
                            var itemPrice = "Out-of-Stock";
                          }
                        }
                        if(item.thumbnail != 'NULL') {
                          link.append('<div class="thumbnail"><img class="lazyload fade-in" src="' + item.thumbnail + '" /></div>');
                                      }
                                      link.append('<div class="title">' + item.title + '<br><span class="item-pricing">'+ itemPrice +'</span></div>');
                        } else if(item.object_type == 'article') {
                          if(item.thumbnail != 'NULL') {
                            link.append('<div class="thumbnail"><img class="lazyload fade-in" src="' + item.thumbnail + '" /></div>');
                                        }
                                        link.append('<div class="title">' + item.title + '<br><span class="item-pricing">'+ item.text_content +'</span></div>');
                          } else if(item.object_type == 'page') {
                            link.append('<div class="title">' + item.title + '<br><span class="item-pricing">'+ item.text_content +'</span></div>');
                          }
                          link.wrap('<li class="item-result result--' + item.object_type + '"></li>');
                          resultsList.append(link.parent());
                        });
                        if(data.results_count >= 10) {
                           resultsList.append('<li class="all-results"><span class="title see-all"><a href="' + searchURL + '*">' + "View all results" + ' (' + data.results_count + ')</a></span></li>');
                           }
                           resultsList.fadeIn(200);
                      }
                    })
                  }
                });
              });
              $(document).on('click', function(e){
                var container = $('[data-autocomplete-true]');
                if (!container.is(e.target) && container.has(e.target).length === 0) {$('[data-autocomplete-true]').find('.search__results-wrapper').hide();}
              });
              $('[data-autocomplete-true] input').on('focus', function(){
                $('.search__results-wrapper').hide();
                $(this).parents('[data-autocomplete-true]').find('.search__results-wrapper').show();
              });
            },
            unload: function() {$('body').off('focus', '[data-autocomplete-true] input');}
          }
  var collectionSidebarFilter = {
          init: function(){
            $('.filter-active-tag input:checked').parents('.filter-active-tag').siblings('.filter-all-tags').hide();
            $('.toggle-all--true .toggle_list .filter-active-tag input:checked').parents('ul.toggle_list').prev().click();
            if ($.url(2) === 'types' || $.url(2) === 'vendors'){$('.sidebar__collection-filter').remove();}
            $('.sidebar-block:empty').prev().css('border-bottom', 'none');
          },
            clearAllFilters: function(){
              $('[data-option-filter] input').attr('checked', false);
              $('[data-option-filter] input').trigger('change');
            },
              clearSelectedFilter: function(optionFilter){
                optionFilter.find('[data-option-filter] input').attr('checked', false);
                optionFilter.find('[data-option-filter] input').trigger('change');
              }
        }
  $('body').on('change', '[data-option-filter] input', function(){
        quickFilter.init();
        $("html, body").animate({scrollTop: ($('#pagecontent').offset().top)}, 500);
    });
  $('body').on('click', '[data-reset-filters]', function(){collectionSidebarFilter.clearAllFilters();});
  $('body').on('click', '[data-clear-filter]', function(){
    var selectedOption = $(this).parents('.filter-active-tag');
    collectionSidebarFilter.clearSelectedFilter(selectedOption);
  });
  var faqAccordion = {
    init: function(){
      var flg = 0,$faqHeading = $('.faqAccordion > dt > button');
      $('.faqAccordion > dd').attr('aria-hidden',true);
      $faqHeading.attr('aria-expanded',false);
      $faqHeading.on('click activate',function(){
        if( flg ) return false;
        flg = 1;
        var state = $(this).attr('aria-expanded') === 'false' ? true : false;
        $(this).attr('aria-expanded',state);
        $(this).parent().next().slideToggle(function(){flg = 0;});
        $(this).parent().next().attr('aria-hidden',!state);
        return false;
      });
      $faqHeading.on('keydown',function(event){
        var keyCode = event.keyCode || e.which;
        if (keyCode === 13){$(this).trigger('activate');}
      });
    }
  }
  
  var arrowSize = {x0: 10,x1: 60, y1: 50,x2: 62, y2: 40,x3: 22}
  
  var lightboxGallery = {
    init: function(){
      if ($('.lightbox img').length) {
        var currentSlide,$lightboxImages = $('a.lightbox'),groups = [];
        $lightboxImages.each(function(index){
          groups.push($(this).attr('rel'));
          groups = groups.filter(function(item, i, ar){return ar.indexOf(item) === i;});
        })
        $.each(groups, function(index, value){
          $('.lightbox[rel=' + value + ']').attr('data-remodal-target', 'lightbox-id-' + index );
          var lightboxModal = [
            '<div class="remodal remodal-lightbox js-remodal-lightbox js-lightbox-' + index + '" data-rel="' + value + '" data-remodal-id="lightbox-id-' + index + '" data-remodal-options="hashTracking: false">',
            '<a data-remodal-action="close" class="remodal-close"></a>',
            '<div class="lightbox-gallery"></div>',
            '</div>'
          ].join('');
          $('body').append(lightboxModal);
          $('.lightbox[rel=' + value + ']').each(function(index){
            $(this).attr('data-image-id', index);
            $(this).attr('data-no-instant', '');
          });
        });
      }
    }
  }
  var utils = {
    createAccordion: function(container, tab, content){
      var $container = $(container),$tab = $(container).find(tab),$content = $(container).find(content),specificTab = container + ' ' + tab;
      if (container.indexOf(".accordion-tabs") >= 0){
        var rearrangedTabs = $.map($tab, function(v, i) { return [v, $content[i]]; });
        $container.empty();
        $.each(rearrangedTabs, function (index, value) {$container.append(this);});
        $content.removeClass('active');
        $container.find('.active').next().slideToggle();
        tab = container + '> a';
      }
      $(container).children('a').each(function(i, tab) {
        var tab = $(this),tabValue = tab.attr('href');
        tab.attr('data-tab-value', tabValue);
        tab.removeAttr("href");
      });
      $(container).find(tab + '.active').next().slideToggle();
      $('body').on('click', specificTab, function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).next().slideToggle();
      });
    },
    mobileAccordion: function(container, tab, content){
      $container = $(container);
      $tab = $(container).find(tab);
      $content = $(container).find(content);
      $(tab + '.active').next().slideToggle();
      $('body').on('click', tab, function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).next().slideToggle();
      });
    },
    mobileParentActiveAccordion: function(container, tab, content){
      $container = $(container);
      $tab = $(container).find(tab);
      $content = $(container).find(content);
      $(tab + '.active').parent().next().slideToggle();
      $('body').on('click', tab, function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().next().slideToggle();
      });
    },
    initializeTabs: function(){
      $('ul.tabs > li > a').attr('data-no-instant', true);
      $('body').on('click', 'ul.tabs > li > a', function(e) {
        e.preventDefault();
        var contentLocation = $(this).attr('href');
        if(contentLocation.charAt(0)=="#") {
          $('ul.tabs > li > a.active').removeClass('active');
          $(this).addClass('active');
          $(this).parents('ul.tabs').next().find(contentLocation).show().css({'display': 'block'}).addClass('active').siblings().hide().removeClass('active');
        }
      });
    },
    pageBannerCheck: function(){
      if (!$('.page_banner').length > 0 || $('.header').hasClass('header-background--solid')) {
        $('.feature_image').removeClass('feature_image');
        $('.header.is-absolute').removeClass('is-absolute');
        $('.secondary_logo--true').find('.secondary_logo').css('display', 'none');
        $('.secondary_logo--true').find('.primary_logo').css('display', 'block');
      } else {
        $('.header').parent().addClass('feature_image');
        $('.header').addClass('is-absolute');
        if ($('header.feature_image').hasClass('secondary_logo--true')){
          $('.secondary_logo--true').find('.secondary_logo').css('display', 'block');
          $('.secondary_logo--true').find('.primary_logo').css('display', 'none');
        }
      }
      if ($('.index-sections').children().first().hasClass('under-menu')) {
        if (!$('.header').hasClass('header-background--solid')) {
          $('.index .header').parent().addClass('feature_image');
          $('.index .header').addClass('is-absolute');
        }
        if ($('header.feature_image').hasClass('secondary_logo--true')){
          $('.secondary_logo--true').find('.secondary_logo').show();
          $('.secondary_logo--true').find('.primary_logo').hide();
        }
      } else {
        $('.index .feature_image').removeClass('feature_image');
        $('.index .header.is-absolute').removeClass('is-absolute');
        if (!$('header.feature_image').hasClass('secondary_logo--true')){
          $('.secondary_logo--true').find('.secondary_logo').hide();
          $('.secondary_logo--true').find('.primary_logo').show();
        }
      }
      if ($('.detail-sections').children().first().hasClass('under-menu')) {
        if (!$('.header').hasClass('header-background--solid')) {
          $('[class^="page-details"] .header').parent().addClass('feature_image');
          $('[class^="page-details"] .header').addClass('is-absolute');
        }
        if ($('header.feature_image').hasClass('secondary_logo--true')){
          $('.secondary_logo--true').find('.secondary_logo').show();
          $('.secondary_logo--true').find('.primary_logo').hide();
        }
      } else {
        $('[class^="page-details"] .feature_image').removeClass('feature_image');
        $('[class^="page-details"] .header.is-absolute').removeClass('is-absolute');
        if (!$('header.feature_image').hasClass('secondary_logo--true')){
          $('.secondary_logo--true').find('.secondary_logo').hide();
          $('.secondary_logo--true').find('.primary_logo').show();
        }
      }
    },
    resizeActionButtons: function(){
      $('.js-caption:visible').each(function(){
        var buttonWidth = 0;
        $(this).find('.action_button').each(function(){
          $button = $(this);
          if($(this).width() > buttonWidth){buttonWidth = $(this).width();}
        });$(this).find('.action_button').width(buttonWidth);
      });
    }
  }
  var sliderBlock = {
    select: function(blockId, $parentSection){
      var $blocks = $parentSection.find('.gallery-cell');
      var blockIdsArray = $blocks.map(function() {return String($(this).data('block-id'));});
      var $slider = $parentSection.find('.js-homepage-slideshow');
      var settings = {slideshowTextAnimation: $slider.data('slideshow-text-animation')}
      var flkty = $slider.data('flickity');
      $slider.flickity('pausePlayer');
      for(var i = 0; i < blockIdsArray.length; i++){
        if(blockIdsArray[i] === blockId){
          var currentSlide = i;
          if (currentSlide !== flkty.selectedIndex){$slider.flickity( 'select', parseInt(currentSlide), false, true);}
        }
      }
    },
    deselect: function($parentSection){
      var $slider = $parentSection.find('.flexslider').data('flexslider');
      if($slider) {$slider.flickity('unpausePlayer');}
    }
  }
  $(function() {
    var oldFlickityCreate = window.Flickity.prototype._create;
    window.Flickity.prototype._create = function(){
      var that = this;
      if(this.element.addEventListener){
        this.element.addEventListener('load', function(){that.onresize();}, true);
      }
      this._create = oldFlickityCreate;
      return oldFlickityCreate.apply(this, arguments);
    };
    utils.pageBannerCheck();
    slideshow.init();
    productDemo.init();
    featuredCollectionSection.init();
    header.loadMegaMenu();
    header.init();
    searchAutocomplete.init();
    testimonial.init();
    gallery.init();
    videoSection.init();
    featuredPromotions.init();
    collectionSidebarFilter.init();
    cart.init();
    productPage.initializeQuantityBox();
    productPage.init();
    productPage.relatedProducts();
    productPage.recommendTagProducts();
    recentlyViewed.init();
    var currentValue = $(".search_form input[name='q']").val()
    if ($(".search_form input[name='q']").length > 0){$(".search_form input[name='q']").val( currentValue.replace('*', '') );}
    $('body').on('click', '.lightbox', function(){currentSlide = $(this).data('image-id');});
    $('body').on('opened', '.js-remodal-lightbox', function () {
      var $currentLightbox = $(this);
      var group = $(this).data('rel');
      var $groupImages = $('.lightbox[rel=' + group + ']').parent().clone();
      var arrowShow = $groupImages.length === 1 ? false : true;
      var draggable = $groupImages.length === 1 ? false : true;
      var flktyEnabled = $currentLightbox.find('.lightbox-gallery').hasClass('flickity-enabled');
      var elem = $currentLightbox.find('.lightbox-gallery')[0];
      $(this).find('a.lightbox').removeAttr('href').removeAttr('data-remodal-target');
      var flktyGallery = new Flickity( elem, {"wrapAround": "true","cellAlign": "center","contain": true,"imagesLoaded": true,"lazyLoad": 2,"pageDots": usePageDots,"draggable": draggable,"prevNextButtons": arrowShow,"arrowShape": arrowSize,"adaptiveHeight": true});
      if (!flktyEnabled){flktyGallery.insert($groupImages);}
      flktyGallery.select(currentSlide, false, true );
      elem.focus();
      $currentLightbox.find('.overlay').remove();
      $currentLightbox.find('.zoomImg').remove();
      $currentLightbox.find('img').removeClass('lazyautosizes').attr('sizes', '2000px').css('opacity', '1');
    });
    $('body').on('closed', '.js-remodal-lightbox', function () {
      var $currentLightbox = $(this);
      $currentLightbox.find('img').css('opacity', '0');
    });
    
    if(window.location.pathname.indexOf('/comments') != -1) {$('html,body').animate({scrollTop: $("#new-comment").offset().top-140},'slow');}
    $('body').on('mouseenter', '.icon-search', function() {$('.search-terms').focus();});
    $('body').on('click', '.icon-search', function() {$('input.search-terms').focus();});
    $('body').on('click', '.search-submit', function() {$(this).parent().submit();});
    if ($(window).width() > 798) {
      $(".animate_right").waypoint(function() {$(this.element).addClass("animated fadeInRight");}, { offset: '70%' });
      $(".animate_left").waypoint(function() {$(this.element).addClass("animated fadeInLeft");}, { offset: '70%' });
      $(".animate_up").waypoint(function() {$(this.element).addClass("animated fadeInUp");}, { offset: '70%' });
      $(".animate_down").waypoint(function() {$(this.element).addClass("animated fadeInDown");}, { offset: '70%' });
    }
    $('.slider, .flexslider').find('li').unwrap();
    $('.slider, .flexslider').flickity({pageDots: usePageDots,imagesLoaded: true,arrowShape: arrowSize,lazyLoad: 2});
    utils.createAccordion('.toggle-all--true', 'h4.toggle', 'ul.toggle_list');
    utils.createAccordion('.footer_menu', 'h6', 'ul');
    utils.createAccordion('.footer_content', 'h6', 'div.toggle_content');
    utils.createAccordion('.product_section .accordion-tabs', '.tabs li > a', '.tabs-content li');
    utils.mobileParentActiveAccordion('#mobile_menu', 'li.sublink > a.parent-link--true span', 'li.sublink ul');
    utils.mobileAccordion('#mobile_menu', 'li.sublink > a.parent-link--false', 'li.sublink ul');
    utils.initializeTabs();
    utils.resizeActionButtons();
    faqAccordion.init();
    $(window).on('resize', function() {utils.resizeActionButtons();});
    if ($(window).width() <= 798) {utils.createAccordion('.toggle-all--false', 'h4.toggle', 'ul.toggle_list');}
    $('body').on('click', '.menu-toggle', function(e) {
      var $content = $(this).next('ul');
      $content.slideToggle();
      $(this).toggleClass('active');
      $(this).attr('aria-expanded', $(this).attr('aria-expanded') == 'true' ? 'false' : 'true');
    });
    if ($('.shopify-section.page-details-section, .shopify-section.product-details-section').length){
    } else if ($('body').hasClass('index')) {
      $('.featured-products-section iframe[src*=youtube], .featured-products-section iframe[src*=vimeo]').mediaWrapper({intrinsic: true});
    } else {
      $('iframe[src*=youtube], iframe[src*=vimeo]').mediaWrapper({intrinsic: true});
    }
    if ($(window).width() >= 959) {
      var modal_width = '870px';
      if($(window).width() >= 1200 || $('html').hasClass('ie')) {modal_width = '1110px'}
    }
    
    $('body').on('click touchstart', '.cart_content .tos_label', function() {$(this).prev('input').prop('checked', true);});
    
    $('body').on('click', ".cart_content .action_button", function(e) {
      e.preventDefault();
      document.location.href = "/cart";
    });
    
    
    var $contact_form = $('.newsletter .contact-form');
    $contact_form.each(function() {
      var $cf = $(this);
      $cf.on('submit', function (e) {
        if($('input[name="challenge"]', $cf).val() !== "true") {
          $.ajax({
            type: $cf.attr('method'),
            url: $cf.attr('action'),
            data: $cf.serialize(),
            success: function (data) {
              $cf.fadeOut("slow", function(){$cf.prev('.message').html("Thank you for joining our mailing list!");});
            },
            error: function(data) {$('input[name="challenge"]', $cf).val('true');$cf.submit();}
          });
          e.preventDefault();
        }
      });
    });
    $('.maps').click(function () {$('.maps iframe').css("pointer-events", "auto");});
    
    
    
    enableInfiniteSearchScroll();
    
                function ajaxSubmitCart(cart) {
                  $cart = cart;
                  $.ajax({
                    url: '/cart/update.js',
                    dataType: 'json',
                    cache: false,
                    type: 'post',
                    data: $cart.serialize(),
                    success: function (data) {refreshCart(data);}
                  });
                }
                function ajaxUpdateCart(lineID, quantity, parent) {
                  $.ajax({
                    url: '/cart/change.js',
                    dataType: 'json',
                    cache: false,
                    type: 'post',
                    data: { quantity: quantity, line: lineID },
                    success: function (data) {
                      var lineIDIndex = lineID - 1;
                      if (typeof data.items[lineIDIndex] === "undefined"){var updated_quantity = 0;} else {var updated_quantity = data.items[lineIDIndex].quantity;}
                      if(quantity > 0 && quantity != updated_quantity) {
                        if (updated_quantity == 1) {items_left_text = "copy left";} else {items_left_text = "copies left";}
                        $('.warning--quantity').remove();
                        var warning = '<p class="warning warning--quantity animated bounceIn">' + updated_quantity + ' ' + items_left_text + '</p>';
                        parent.find("input[data-line-id='" + lineID + "']").parent().after(warning);
                        parent.find("input[data-line-id='" + lineID + "']").val(updated_quantity);
                      } else if (parent.is('#cart_form')) {
                        $("#cart_form").submit();
                      }
                    }
                  });
                }
                function ajaxUpdateMiniCart(lineID, quantity, parent) {
                  $.ajax({
                    url: '/cart/change.js',
                    dataType: 'json',
                    cache: false,
                    type: 'post',
                    data: { quantity: quantity, line: lineID },
                    success: function (data) {
                      refreshCart(data);
                      var lineIDIndex = lineID - 1;
                      if (typeof data.items[lineIDIndex] === "undefined"){var updated_quantity = 0;} else {var updated_quantity = data.items[lineIDIndex].quantity;}
                      if(quantity > 0 && quantity != updated_quantity) {
                        if (updated_quantity == 1) {items_left_text = "copy left";} else {items_left_text = "copies left";}
                        $('.warning--quantity').remove();
                        var warning = '<p class="warning warning--quantity animated bounceIn">' + updated_quantity + ' ' + items_left_text + '</p>';
                        parent.find("input[data-line-id='" + lineID + "']").parent().after(warning);
                        parent.find("input[data-line-id='" + lineID + "']").val(updated_quantity);
                      } else if (parent.is('#cart_form')) {
                        $("#cart_form").submit();
                      }
                    }
                  });
                }
                function refreshCart(cart) {
                  $(".cart_count").empty();
                  $cartBtn = $(".cart_count");
                  var value = $cartBtn.text() || '0',cart_items_html = "",cart_action_html = "",cart_savings_html = "",$cart = $(".cart_content form"),discounted_price_total = 0,total_savings = 0;
                  $cartBtn.text(value.replace(/[0-9]+/,cart.item_count));
                  if (cart.item_count == 0) {
                    $('.js-empty-cart__message').removeClass('hidden');
                    $('.js-cart_content__form').addClass('hidden');
                  } else {
                    $('.js-empty-cart__message').addClass('hidden');
                    $('.js-cart_content__form').removeClass('hidden');
                    $.each(cart.items, function(index, item) {
                      var line_id = index + 1;
                      cart_items_html += '<li class="cart_item clearfix" data-cart-item data-cart-item-key="' + item.key + '">' +
                        '<a href="' + item.url +'">';
                      if (item.image) {
                        cart_items_html += '<div class="cart_image">' +
                          '<img src="' + item.image.replace(/(\.[^.]*)$/, "_compact$1").replace('http:', '') + '" alt="' + htmlEncode(item.title) + '" />' +
                          '</div>';
                      }
                      cart_items_html += '<strong class="right price">';
                      
                      $.ajax({
                        dataType: "json",
                        async: false,
                        cache: false,
                        url: "/products/" + item.handle + ".js",
                        success: function(data) {
                          var variant_id = item.variant_id;
                          var variant = $.grep(data.variants, function(v) {
                            return v.id == variant_id;
                          });
                          if(variant[0] && variant[0].compare_at_price > item.price) {
                            cart_items_html += ' <span class="money was_price">' + Shopify.formatMoney(variant[0].compare_at_price, $('body').data('money-format')) + '</span> ';
                            discounted_price_total += item.price * item.quantity;
                            total_savings += variant[0].compare_at_price * item.quantity;
                          }
                        }
                      });
                      
                      cart_items_html += '<span class="money">' + Shopify.formatMoney(item.price, $('body').data('money-format')) + '</span></strong>' + '<div class="item_title">' + item.title;
                      if(item.properties) {
                        $.each(item.properties, function(title, value) {if (value) {cart_items_html += '<div class="line-item">' + title +': ' + value + '</div>';}});
                      }
                      cart_items_html += '</div></a>';
                      cart_items_html += '<div class="left product-quantity-box">' +
                        '<span class="ss-icon product-minus js-change-quantity" data-func="minus"><span class="icon-minus"></span></span>' +
                        '<input type="number" min="0" class="quantity" name="updates[]" id="updates_' + item.id + '" value="' + item.quantity +'" data-line-id="' + line_id +'" />' +
                        '<span class="ss-icon product-plus js-change-quantity" data-func="plus"><span class="icon-plus"></span></span>' +
                        ' <span class="ss-icon product-minus js-change-quantity remove" data-func="remove"><span class="icon-cross"></span><p class="ecom-remove">Remove</p></span><input style="display:none;" type="number" min="0" size="2" class="quantity" name="updates[]" id="updates_' + item.id + '" value="0"/></div>' +
                        '</li>';
                    });
                    cart_action_html += '<span class="right"><span class="money">' + Shopify.formatMoney(cart.total_price, $('body').data('money-format')) + '</span></span>' +
                      '<span>Subtotal</span>';
                    if(total_savings > 0 ) {
                      cart_savings_html = '<span class="right"><span class="money">' + Shopify.formatMoney(total_savings - discounted_price_total, $('body').data('money-format')) + '</span></span>' +
                        '<span>Total Savings</span>';
                    } else {
                      cart_savings_html = "";
                    }
                  }
                  $('.js-cart_items').html(cart_items_html);
                  $('.js-cart_subtotal').html(cart_action_html);
                  $('.js-cart_savings').html(cart_savings_html);
                  
                }
                if($('a.js-update-quantity').length > 0) {
                  $('a.js-update-quantity').on('click', function(e) {
                    var qarray = '';
                    $( "#cart_form input.quantity" ).each(function( index ) {
                      if(index == 0) {
                      	qarray += 'updates[' + $(this).data('variant-id') + ']=' + $(this).val();
                      } else {
                      	qarray += '&updates[' + $(this).data('variant-id') + ']=' + $(this).val();
                      }
                    });
                    jQuery.post('/cart/update.js', qarray);
                    setTimeout(function(){
                    	location.reload();
                    }, 500);
                  });
                } else {
                  $('body').on("change", ".cart_content input.quantity", function() {
                    ajaxUpdateMiniCart($(this).data('line-id'), $(this).val(), $(this).parents('.cart_content'));
                  });
                }
                
                $('body').on('submit', ".product_form form", function(e) {
                  e.preventDefault();
                  var $addToCartForm = $(this);
                  var $addToCartBtn = $addToCartForm.find('.add_to_cart');
                  $.ajax({
                    url: '/cart/add.js',
                    dataType: 'json',
                    cache: false,
                    type: 'post',
                    data: $addToCartForm.serialize(),
                    beforeSend: function() {
                      $addToCartBtn.attr('disabled', 'disabled').addClass('disabled');
                      $addToCartBtn.find('span').removeClass("fadeInDown").addClass('animated zoomOut');
                    },
                    success: function(itemData) {
                      $addToCartBtn.find('.checkmark').addClass('checkmark-active');
                      window.setTimeout(function(){
                        $addToCartBtn.removeAttr('disabled').removeClass('disabled');
                        $addToCartBtn.find('.checkmark').removeClass('checkmark-active');
                        $addToCartBtn.find('span').removeClass('zoomOut').addClass('fadeInDown');
                      }, 1000);
                      $.ajax({
                        url: '/cart.js',
                        dataType: "json",
                        cache: false,
                        success: function(cart) {
                          refreshCart(cart);
                          if($('html').hasClass("remodal-is-locked")) {$('.remodal-close').click();}
                          if($('#header').is(':visible')) {
                            $('#header .cart_container').addClass('active_link');
                          } else if ($('.sticky_nav--stick').length) {
                            $('.sticky_nav .cart_container').addClass('active_link');
                          } else {
                            $('.top_bar .cart_container').addClass('active_link');
                          }
                        }
                      });
                    },
                    error: function(XMLHttpRequest) {
                      var response = eval('(' + XMLHttpRequest.responseText + ')');
                      response = response.description;
                      $('.warning').remove();
                      var warning = '<p class="warning animated bounceIn">' + response.replace('All 1 ', 'All ') + '</p>';
                      $addToCartForm.after(warning);
                      $addToCartBtn.removeAttr('disabled').removeClass('disabled');
                      $addToCartBtn.find('span').text("Add to Cart").removeClass('zoomOut').addClass('zoomIn');
                    }
                  });
                  return false;
                });
                
                
                if ($('.js-product_section').length){
                  var $productForms = $('.js-product_section').find('.product_form');
                  $productForms.addClass('is-visible');
                  $productForms.each(function(){
                    var JSONData = $(this).data('product');
                    var productID = $(this).data('product-id');
                    var productSection = '.product-' + productID + ' .js-product_section';
                    var swatchOptions = $(this).find('.swatch_options .swatch');
                    if (swatchOptions.length > 1){Shopify.linkOptionSelectors(JSONData, productSection);}
                  });
                }
                if ($('.js-product_section').length > 1){
                  $('body').on('click', '.swatch-element', function(){
                    var swatchValue = $(this).data('value');
                    $(this).siblings('input[value="'+ swatchValue.replace(/\"/g,'\\"') +'"]').prop("checked", true).trigger("change");
                    var JSONData = $(this).parents('.product_form').data('product');
                    var productID = $(this).parents('.product_form').data('product-id');
                    var productSection = '.product-' + productID + ' .js-product_section';
                    var swatchOptions = $(this).parents('.product_form').find('.swatch_options .swatch');
                    if (swatchOptions.length > 1){Shopify.linkOptionSelectors(JSONData, productSection);}
                  })
                }
                
              });
Shopify.updateOptionsInSelector = function(selectorIndex, parent) {
                switch (selectorIndex) {
                  case 0:
                    var key = 'root';
                    var selector = $(parent + ' .single-option-selector:eq(0)');
                    break;
                  case 1:
                    var key = $(parent + ' .single-option-selector:eq(0)').val();
                    var selector = $(parent + ' .single-option-selector:eq(1)');
                    break;
                  case 2:
                    var key = $(parent + ' .single-option-selector:eq(0)').val();
                    key += ' / ' + $(parent + ' .single-option-selector:eq(1)').val();
                    var selector = $(parent + ' .single-option-selector:eq(2)');
                }
                var availableOptions = Shopify.optionsMap[key];
                $(parent + ' .swatch[data-option-index="' + selectorIndex + '"] .swatch-element').each(function() {
                  if ($.inArray($(this).attr('data-value'), availableOptions) !== -1) {
                    $(this).removeClass('soldout').find(':radio').removeAttr('disabled','disabled').removeAttr('checked');
                  }else {
                    $(this).addClass('soldout').find(':radio').removeAttr('checked').attr('disabled','disabled');
                  }
                });
              };
Shopify.linkOptionSelectors = function(product, parent) {
                Shopify.optionsMap = {};
                for (var i=0; i<product.variants.length; i++) {
                  var variant = product.variants[i];
                  if (variant.available) {
                    Shopify.optionsMap['root'] = Shopify.optionsMap['root'] || [];
                    Shopify.optionsMap['root'].push(variant.option1);
                    Shopify.optionsMap['root'] = Shopify.uniq(Shopify.optionsMap['root']);
                    if (product.options.length > 1) {
                      var key = variant.option1;
                      Shopify.optionsMap[key] = Shopify.optionsMap[key] || [];
                      Shopify.optionsMap[key].push(variant.option2);
                      Shopify.optionsMap[key] = Shopify.uniq(Shopify.optionsMap[key]);
                    }
                    if (product.options.length === 3) {
                      var key = variant.option1 + ' / ' + variant.option2;
                      Shopify.optionsMap[key] = Shopify.optionsMap[key] || [];
                      Shopify.optionsMap[key].push(variant.option3);
                      Shopify.optionsMap[key] = Shopify.uniq(Shopify.optionsMap[key]);
                    }
                  }
                }
                Shopify.updateOptionsInSelector(0, parent);
                if (product.options.length > 1) Shopify.updateOptionsInSelector(1, parent);
                if (product.options.length === 3) Shopify.updateOptionsInSelector(2, parent);
                $(parent + " .single-option-selector:eq(0)").change(function() {
                  Shopify.updateOptionsInSelector(1, parent);
                  if (product.options.length === 3) Shopify.updateOptionsInSelector(2, parent);
                  return true;
                });
                $(parent + " .single-option-selector:eq(1)").change(function() {
                  if (product.options.length === 3) Shopify.updateOptionsInSelector(2, parent);
                  return true;
                });
              };
function htmlEncode(t) { return t ? $("<div/>").text(t).html() : "" }
function is_touch_device() { return "ontouchstart" in window || navigator.maxTouchPoints }
function floatToString(t,e){var o=t.toFixed(e).toString();return o.match(/^\.\d+/)?"0"+o:o}if("undefined"==typeof Shopify)var Shopify={};Shopify.each=function(t,e){for(var o=0;o<t.length;o++)e(t[o],o)},Shopify.map=function(t,e){for(var o=[],i=0;i<t.length;i++)o.push(e(t[i],i));return o},Shopify.arrayIncludes=function(t,e){for(var o=0;o<t.length;o++)if(t[o]==e)return!0;return!1},Shopify.uniq=function(t){for(var e=[],o=0;o<t.length;o++)Shopify.arrayIncludes(e,t[o])||e.push(t[o]);return e},Shopify.isDefined=function(t){return"undefined"==typeof t?!1:!0},Shopify.getClass=function(t){return Object.prototype.toString.call(t).slice(8,-1)},Shopify.extend=function(t,e){function o(){}o.prototype=e.prototype,t.prototype=new o,t.prototype.constructor=t,t.baseConstructor=e,t.superClass=e.prototype},Shopify.locationSearch=function(){return window.location.search},Shopify.locationHash=function(){return window.location.hash},Shopify.replaceState=function(t){window.history.replaceState({},document.title,t)},Shopify.urlParam=function(t){var e=RegExp("[?&]"+t+"=([^&#]*)").exec(Shopify.locationSearch());return e&&decodeURIComponent(e[1].replace(/\+/g," "))},Shopify.newState=function(t,e){var o;return o=Shopify.urlParam(t)?Shopify.locationSearch().replace(RegExp("("+t+"=)[^&#]+"),"$1"+e):""===Shopify.locationSearch()?"?"+t+"="+e:Shopify.locationSearch()+"&"+t+"="+e,o+Shopify.locationHash()},Shopify.setParam=function(t,e){Shopify.replaceState(Shopify.newState(t,e))},Shopify.Product=function(t){Shopify.isDefined(t)&&this.update(t)},Shopify.Product.prototype.update=function(t){for(property in t)this[property]=t[property]},Shopify.Product.prototype.optionNames=function(){return"Array"==Shopify.getClass(this.options)?this.options:[]},Shopify.Product.prototype.optionValues=function(t){if(!Shopify.isDefined(this.variants))return null;var e=Shopify.map(this.variants,function(e){var o="option"+(t+1);return void 0==e[o]?null:e[o]});return null==e[0]?null:Shopify.uniq(e)},Shopify.Product.prototype.getVariant=function(t){var e=null;return t.length!=this.options.length?e:(Shopify.each(this.variants,function(o){for(var i=!0,r=0;r<t.length;r++){var n="option"+(r+1);o[n]!=t[r]&&(i=!1)}return 1==i?void(e=o):void 0}),e)},Shopify.Product.prototype.getVariantById=function(t){for(var e=0;e<this.variants.length;e++){var o=this.variants[e];if(t==o.id)return o}return null},Shopify.money_format="$",Shopify.formatMoney=function(t,e){function o(t,e){return"undefined"==typeof t?e:t}function i(t,e,i,r){if(e=o(e,2),i=o(i,","),r=o(r,"."),isNaN(t)||null==t)return 0;t=(t/100).toFixed(e);var n=t.split("."),a=n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+i),s=n[1]?r+n[1]:"";return a+s}"string"==typeof t&&(t=t.replace(".",""));var r="",n=/\{\{\s*(\w+)\s*\}\}/,a=e||this.money_format;switch(a.match(n)[1]){case"amount":r=i(t,2);break;case"amount_no_decimals":r=i(t,0);break;case"amount_with_comma_separator":r=i(t,2,".",",");break;case"amount_no_decimals_with_comma_separator":r=i(t,0,".",",")}return a.replace(n,r)},Shopify.OptionSelectors=function(t,e){return this.selectorDivClass="selector-wrapper",this.selectorClass="single-option-selector",this.variantIdFieldIdSuffix="-variant-id",this.variantIdField=null,this.historyState=null,this.selectors=[],this.domIdPrefix=t,this.product=new Shopify.Product(e.product),this.onVariantSelected=Shopify.isDefined(e.onVariantSelected)?e.onVariantSelected:function(){},this.replaceSelector(t),this.initDropdown(),e.enableHistoryState&&(this.historyState=new Shopify.OptionSelectors.HistoryState(this)),!0},Shopify.OptionSelectors.prototype.initDropdown=function(){var t={initialLoad:!0},e=this.selectVariantFromDropdown(t);if(!e){var o=this;setTimeout(function(){o.selectVariantFromParams(t)||o.fireOnChangeForFirstDropdown.call(o,t)})}},Shopify.OptionSelectors.prototype.fireOnChangeForFirstDropdown=function(t){this.selectors[0].element.onchange(t)},Shopify.OptionSelectors.prototype.selectVariantFromParamsOrDropdown=function(t){var e=this.selectVariantFromParams(t);e||this.selectVariantFromDropdown(t)},Shopify.OptionSelectors.prototype.replaceSelector=function(t){var e=document.getElementById(t),o=e.parentNode;Shopify.each(this.buildSelectors(),function(t){o.insertBefore(t,e)}),e.style.display="none",this.variantIdField=e},Shopify.OptionSelectors.prototype.selectVariantFromDropdown=function(t){var e=document.getElementById(this.domIdPrefix).querySelector("[selected]");if(e||(e=document.getElementById(this.domIdPrefix).querySelector('[selected="selected"]')),!e)return!1;var o=e.value;return this.selectVariant(o,t)},Shopify.OptionSelectors.prototype.selectVariantFromParams=function(t){var e=Shopify.urlParam("variant");return this.selectVariant(e,t)},Shopify.OptionSelectors.prototype.selectVariant=function(t,e){var o=this.product.getVariantById(t);if(null==o)return!1;for(var i=0;i<this.selectors.length;i++){var r=this.selectors[i].element,n=r.getAttribute("data-option"),a=o[n];null!=a&&this.optionExistInSelect(r,a)&&(r.value=a)}return"undefined"!=typeof jQuery?jQuery(this.selectors[0].element).trigger("change",e):this.selectors[0].element.onchange(e),!0},Shopify.OptionSelectors.prototype.optionExistInSelect=function(t,e){for(var o=0;o<t.options.length;o++)if(t.options[o].value==e)return!0},Shopify.OptionSelectors.prototype.insertSelectors=function(t,e){Shopify.isDefined(e)&&this.setMessageElement(e),this.domIdPrefix="product-"+this.product.id+"-variant-selector";var o=document.getElementById(t);Shopify.each(this.buildSelectors(),function(t){o.appendChild(t)})},Shopify.OptionSelectors.prototype.buildSelectors=function(){for(var t=0;t<this.product.optionNames().length;t++){var e=new Shopify.SingleOptionSelector(this,t,this.product.optionNames()[t],this.product.optionValues(t));e.element.disabled=!1,this.selectors.push(e)}var o=this.selectorDivClass,i=this.product.optionNames(),r=Shopify.map(this.selectors,function(t){var e=document.createElement("div");if(e.setAttribute("class",o),i.length>1){var r=document.createElement("label");r.htmlFor=t.element.id,r.innerHTML=t.name,e.appendChild(r)}return e.appendChild(t.element),e});return r},Shopify.OptionSelectors.prototype.selectedValues=function(){for(var t=[],e=0;e<this.selectors.length;e++){var o=this.selectors[e].element.value;t.push(o)}return t},Shopify.OptionSelectors.prototype.updateSelectors=function(t,e){var o=this.selectedValues(),i=this.product.getVariant(o);i?(this.variantIdField.disabled=!1,this.variantIdField.value=i.id):this.variantIdField.disabled=!0,this.onVariantSelected(i,this,e),null!=this.historyState&&this.historyState.onVariantChange(i,this,e)},Shopify.OptionSelectorsFromDOM=function(t,e){var o=e.optionNames||[],i=e.priceFieldExists||!0,r=e.delimiter||"/",n=this.createProductFromSelector(t,o,i,r);e.product=n,Shopify.OptionSelectorsFromDOM.baseConstructor.call(this,t,e)},Shopify.extend(Shopify.OptionSelectorsFromDOM,Shopify.OptionSelectors),Shopify.OptionSelectorsFromDOM.prototype.createProductFromSelector=function(t,e,o,i){if(!Shopify.isDefined(o))var o=!0;if(!Shopify.isDefined(i))var i="/";var r=document.getElementById(t),n=r.childNodes,a=(r.parentNode,e.length),s=[];Shopify.each(n,function(t,r){if(1==t.nodeType&&"option"==t.tagName.toLowerCase()){var n=t.innerHTML.split(new RegExp("\\s*\\"+i+"\\s*"));0==e.length&&(a=n.length-(o?1:0));var p=n.slice(0,a),l=o?n[a]:"",c=(t.getAttribute("value"),{available:t.disabled?!1:!0,id:parseFloat(t.value),price:l,option1:p[0],option2:p[1],option3:p[2]});s.push(c)}});var p={variants:s};if(0==e.length){p.options=[];for(var l=0;a>l;l++)p.options[l]="option "+(l+1)}else p.options=e;return p},Shopify.SingleOptionSelector=function(t,e,o,i){this.multiSelector=t,this.values=i,this.index=e,this.name=o,this.element=document.createElement("select");for(var r=0;r<i.length;r++){var n=document.createElement("option");n.value=i[r],n.innerHTML=i[r],this.element.appendChild(n)}return this.element.setAttribute("class",this.multiSelector.selectorClass),this.element.setAttribute("data-option","option"+(e+1)),this.element.id=t.domIdPrefix+"-option-"+e,this.element.onchange=function(o,i){i=i||{},t.updateSelectors(e,i)},!0},Shopify.Image={preload:function(t,e){for(var o=0;o<t.length;o++){var i=t[o];this.loadImage(this.getSizedImageUrl(i,e))}},loadImage:function(t){(new Image).src=t},switchImage:function(t,e,o){if(t&&e){var i=this.imageSize(e.src),r=this.getSizedImageUrl(t.src,i);o?o(r,t,e):e.src=r}},imageSize:function(t){var e=t.match(/_(1024x1024|2048x2048|pico|icon|thumb|small|compact|medium|large|grande)\./);return null!=e?e[1]:null},getSizedImageUrl:function(t,e){if(null==e)return t;if("master"==e)return this.removeProtocol(t);var o=t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);if(null!=o){var i=t.split(o[0]),r=o[0];return this.removeProtocol(i[0]+"_"+e+r)}return null},removeProtocol:function(t){return t.replace(/http(s)?:/,"")}},Shopify.OptionSelectors.HistoryState=function(t){this.browserSupports()&&this.register(t)},Shopify.OptionSelectors.HistoryState.prototype.register=function(t){window.addEventListener("popstate",function(e){t.selectVariantFromParamsOrDropdown({popStateCall:!0})})},Shopify.OptionSelectors.HistoryState.prototype.onVariantChange=function(t,e,o){this.browserSupports()&&(!t||o.initialLoad||o.popStateCall||Shopify.setParam("variant",t.id))},Shopify.OptionSelectors.HistoryState.prototype.browserSupports=function(){return window.history&&window.history.replaceState};
!function (o) { o.extend(o.expr[":"], { "off-top": function (f) { return o(f).offset().top < o(window).scrollTop() }, "off-right": function (f) { return o(f).offset().left + o(f).outerWidth() - o(window).scrollLeft() > o(window).width() }, "off-bottom": function (f) { return o(f).offset().top + o(f).outerHeight() - o(window).scrollTop() > o(window).height() }, "off-left": function (f) { return o(f).offset().left < o(window).scrollLeft() }, "off-screen": function (f) { return o(f).is(":off-top, :off-right, :off-bottom, :off-left") } }) }(jQuery);
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(a,c)}):"object"==typeof exports?b(a,require("jquery")):b(a,a.jQuery||a.Zepto)}(this,function(a,b){"use strict";function c(a){if(w&&"none"===a.css("animation-name")&&"none"===a.css("-webkit-animation-name")&&"none"===a.css("-moz-animation-name")&&"none"===a.css("-o-animation-name")&&"none"===a.css("-ms-animation-name"))return 0;var b,c,d,e,f=a.css("animation-duration")||a.css("-webkit-animation-duration")||a.css("-moz-animation-duration")||a.css("-o-animation-duration")||a.css("-ms-animation-duration")||"0s",g=a.css("animation-delay")||a.css("-webkit-animation-delay")||a.css("-moz-animation-delay")||a.css("-o-animation-delay")||a.css("-ms-animation-delay")||"0s",h=a.css("animation-iteration-count")||a.css("-webkit-animation-iteration-count")||a.css("-moz-animation-iteration-count")||a.css("-o-animation-iteration-count")||a.css("-ms-animation-iteration-count")||"1";for(f=f.split(", "),g=g.split(", "),h=h.split(", "),e=0,c=f.length,b=Number.NEGATIVE_INFINITY;e<c;e++)d=parseFloat(f[e])*parseInt(h[e],10)+parseFloat(g[e]),d>b&&(b=d);return b}function d(){if(b(document.body).height()<=b(window).height())return 0;var a,c,d=document.createElement("div"),e=document.createElement("div");return d.style.visibility="hidden",d.style.width="100px",document.body.appendChild(d),a=d.offsetWidth,d.style.overflow="scroll",e.style.width="100%",d.appendChild(e),c=e.offsetWidth,d.parentNode.removeChild(d),a-c}function e(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)||(c=b(document.body),a=parseInt(c.css("padding-right"),10)+d(),c.css("padding-right",a+"px"),e.addClass(f))}}function f(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)&&(c=b(document.body),a=parseInt(c.css("padding-right"),10)-d(),c.css("padding-right",a+"px"),e.removeClass(f))}}function g(a,b,c,d){var e=k("is",b),f=[k("is",u.CLOSING),k("is",u.OPENING),k("is",u.CLOSED),k("is",u.OPENED)].join(" ");a.$bg.removeClass(f).addClass(e),a.$overlay.removeClass(f).addClass(e),a.$wrapper.removeClass(f).addClass(e),a.$modal.removeClass(f).addClass(e),a.state=b,!c&&a.$modal.trigger({type:b,reason:d},[{reason:d}])}function h(a,d,e){var f=0,g=function(a){a.target===this&&f++},h=function(a){a.target===this&&0===--f&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())};b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].on(r,g).on(s,h)}),a(),0===c(e.$bg)&&0===c(e.$overlay)&&0===c(e.$wrapper)&&0===c(e.$modal)&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())}function i(a){a.state!==u.CLOSED&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(b,c){a[c].off(r+" "+s)}),a.$bg.removeClass(a.settings.modifier),a.$overlay.removeClass(a.settings.modifier).hide(),a.$wrapper.hide(),f(),g(a,u.CLOSED,!0))}function j(a){var b,c,d,e,f={};for(a=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),b=a.split(","),e=0,c=b.length;e<c;e++)b[e]=b[e].split(":"),d=b[e][1],("string"==typeof d||d instanceof String)&&(d="true"===d||"false"!==d&&d),("string"==typeof d||d instanceof String)&&(d=isNaN(d)?d:+d),f[b[e][0]]=d;return f}function k(){for(var a=q,b=0;b<arguments.length;++b)a+="-"+arguments[b];return a}function l(){var a,c,d=location.hash.replace("#","");if(d){try{c=b('[data-remodal-id="'+d+'"]')}catch(e){}c&&c.length&&(a=b[p].lookup[c.data(p)],a&&a.settings.hashTracking&&a.open())}else n&&n.state===u.OPENED&&n.settings.hashTracking&&n.close()}function m(a,c){var d=b(document.body),e=d,f=this;f.settings=b.extend({},t,c),f.index=b[p].lookup.push(f)-1,f.state=u.CLOSED,f.$overlay=b("."+k("overlay")),null!==f.settings.appendTo&&f.settings.appendTo.length&&(e=b(f.settings.appendTo)),f.$overlay.length||(f.$overlay=b("<div>").addClass(k("overlay")+" "+k("is",u.CLOSED)).hide(),e.append(f.$overlay)),f.$bg=b("."+k("bg")).addClass(k("is",u.CLOSED)),f.$modal=a.addClass(q+" "+k("is-initialized")+" "+f.settings.modifier+" "+k("is",u.CLOSED)).attr("tabindex","-1"),f.$wrapper=b("<div>").addClass(k("wrapper")+" "+f.settings.modifier+" "+k("is",u.CLOSED)).hide().append(f.$modal),e.append(f.$wrapper),f.$wrapper.on("click."+q,'[data-remodal-action="close"]',function(a){a.preventDefault(),f.close()}),f.$wrapper.on("click."+q,'[data-remodal-action="cancel"]',function(a){a.preventDefault(),f.$modal.trigger(v.CANCELLATION),f.settings.closeOnCancel&&f.close(v.CANCELLATION)}),f.$wrapper.on("click."+q,'[data-remodal-action="confirm"]',function(a){a.preventDefault(),f.$modal.trigger(v.CONFIRMATION),f.settings.closeOnConfirm&&f.close(v.CONFIRMATION)}),f.$wrapper.on("click."+q,function(a){var c=b(a.target);c.hasClass(k("wrapper"))&&f.settings.closeOnOutsideClick&&f.close()})}var n,o,p="remodal",q=a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.NAMESPACE||p,r=b.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(a){return a+"."+q}).join(" "),s=b.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(a){return a+"."+q}).join(" "),t=b.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:"",appendTo:null},a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.DEFAULTS),u={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},v={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},w=function(){var a=document.createElement("div").style;return void 0!==a.animationName||void 0!==a.WebkitAnimationName||void 0!==a.MozAnimationName||void 0!==a.msAnimationName||void 0!==a.OAnimationName}(),x=/iPad|iPhone|iPod/.test(navigator.platform);m.prototype.open=function(){var a,c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&(a=c.$modal.attr("data-remodal-id"),a&&c.settings.hashTracking&&(o=b(window).scrollTop(),location.hash=a),n&&n!==c&&i(n),n=c,e(),c.$bg.addClass(c.settings.modifier),c.$overlay.addClass(c.settings.modifier).show(),c.$wrapper.show().scrollTop(0),c.$modal.focus(),h(function(){g(c,u.OPENING)},function(){g(c,u.OPENED)},c))},m.prototype.close=function(a){var c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&(c.settings.hashTracking&&c.$modal.attr("data-remodal-id")===location.hash.substr(1)&&(location.hash="",b(window).scrollTop(o)),h(function(){g(c,u.CLOSING,!1,a)},function(){c.$bg.removeClass(c.settings.modifier),c.$overlay.removeClass(c.settings.modifier).hide(),c.$wrapper.hide(),f(),g(c,u.CLOSED,!1,a)},c))},m.prototype.getState=function(){return this.state},m.prototype.destroy=function(){var a,c=b[p].lookup;i(this),this.$wrapper.remove(),delete c[this.index],a=b.grep(c,function(a){return!!a}).length,0===a&&(this.$overlay.remove(),this.$bg.removeClass(k("is",u.CLOSING)+" "+k("is",u.OPENING)+" "+k("is",u.CLOSED)+" "+k("is",u.OPENED)))},b[p]={lookup:[]},b.fn[p]=function(a){var c,d;return this.each(function(e,f){d=b(f),null==d.data(p)?(c=new m(d,a),d.data(p,c.index),c.settings.hashTracking&&d.attr("data-remodal-id")===location.hash.substr(1)&&c.open()):c=b[p].lookup[d.data(p)]}),c},b(document).ready(function(){b('body').on("click","[data-remodal-target]",function(a){a.preventDefault();var c=a.currentTarget,d=c.getAttribute("data-remodal-target"),e=b('[data-remodal-id="'+d+'"]');b[p].lookup[e.data(p)].open()}),b('body').find("."+q).each(function(a,c){var d=b(c),e=d.data("remodal-options");e?("string"==typeof e||e instanceof String)&&(e=j(e)):e={},d[p](e)}),b('body').on("keydown."+q,function(a){n&&n.settings.closeOnEscape&&n.state===u.OPENED&&27===a.keyCode&&n.close()}),b(window).on("hashchange."+q,l)})});
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},t.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(e){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var f="";for(var s in i)i[s]&&(f+="; "+s,!0!==i[s]&&(f+="="+i[s]));return document.cookie=n+"="+r+f}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var l=p[u].split("="),C=l.slice(1).join("=");'"'===C.charAt(0)&&(C=C.slice(1,-1));try{var g=l[0].replace(d,decodeURIComponent);if(C=o.read?o.read(C,g):o(C,g)||C.replace(d,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(e){}if(n===g){c=C;break}n||(c[g]=C)}catch(e){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}return n(function(){})});
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
!function(t){t.fn.mediaWrapper=function(i){var e=t.extend({intrinsic:!0,baseWidth:16,baseHeight:9},i);return this.each(function(){var i="";i=1==e.intrinsic&&""!==t(this).attr("width")&&""!==t(this).attr("height")?t(this).attr("height")/t(this).attr("width")*100:e.baseHeight/e.baseWidth*100,t(this).wrap('<div class="mediaWrapper" style="position: relative; width: 100%; height: 0; padding: '+i+'% 0 0 0; " />').css({position:"absolute",width:"100%",height:"100%",top:"0",left:"0"})})}}(jQuery);
function PointerEventsPolyfill(t){if(this.options={selector:"*",mouseEvents:["click","dblclick","mousedown","mouseup"],usePolyfillIf:function(){if("Microsoft Internet Explorer"==navigator.appName){var t=navigator.userAgent;if(null!=t.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/)){var e=parseFloat(RegExp.$1);if(11>e)return!0}}return!1}},t){var e=this;$.each(t,function(t,n){e.options[t]=n})}this.options.usePolyfillIf()&&this.register_mouse_events()}PointerEventsPolyfill.initialize=function(t){return null==PointerEventsPolyfill.singleton&&(PointerEventsPolyfill.singleton=new PointerEventsPolyfill(t)),PointerEventsPolyfill.singleton},PointerEventsPolyfill.prototype.register_mouse_events=function(){$(document).on(this.options.mouseEvents.join(" "),this.options.selector,function(t){if("none"==$(this).css("pointer-events")){var e=$(this).css("display");$(this).css("display","none");var n=document.elementFromPoint(t.clientX,t.clientY);return e?$(this).css("display",e):$(this).css("display",""),t.target=n,$(n).trigger(t),!1}return!0})};
!function (e, i) { "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) { return i(e, t) }) : "object" == typeof module && module.exports ? module.exports = i(e, require("jquery")) : e.jQueryBridget = i(e, e.jQuery) }(window, function (t, e) { "use strict"; var i = Array.prototype.slice, n = t.console, d = void 0 === n ? function () { } : function (t) { n.error(t) }; function s(h, s, c) { (c = c || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function (t) { c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t)) }), c.fn[h] = function (t) { return "string" == typeof t ? function (t, o, r) { var a, l = "$()." + h + '("' + o + '")'; return t.each(function (t, e) { var i = c.data(e, h); if (i) { var n = i[o]; if (n && "_" != o.charAt(0)) { var s = n.apply(i, r); a = void 0 === a ? s : a } else d(l + " is not a valid method") } else d(h + " not initialized. Cannot call methods, i.e. " + l) }), void 0 !== a ? a : t }(this, t, i.call(arguments, 1)) : (function (t, n) { t.each(function (t, e) { var i = c.data(e, h); i ? (i.option(n), i._init()) : (i = new s(e, n), c.data(e, h, i)) }) }(this, t), this) }, o(c)) } function o(t) { !t || t && t.bridget || (t.bridget = s) } return o(e || t.jQuery), s }), function (t, e) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e() }("undefined" != typeof window ? window : this, function () { function t() { } var e = t.prototype; return e.on = function (t, e) { if (t && e) { var i = this._events = this._events || {}, n = i[t] = i[t] || []; return -1 == n.indexOf(e) && n.push(e), this } }, e.once = function (t, e) { if (t && e) { this.on(t, e); var i = this._onceEvents = this._onceEvents || {}; return (i[t] = i[t] || {})[e] = !0, this } }, e.off = function (t, e) { var i = this._events && this._events[t]; if (i && i.length) { var n = i.indexOf(e); return -1 != n && i.splice(n, 1), this } }, e.emitEvent = function (t, e) { var i = this._events && this._events[t]; if (i && i.length) { i = i.slice(0), e = e || []; for (var n = this._onceEvents && this._onceEvents[t], s = 0; s < i.length; s++) { var o = i[s]; n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, e) } return this } }, e.allOff = function () { delete this._events, delete this._onceEvents }, t }), function (t, e) { "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e() }(window, function () { "use strict"; function m(t) { var e = parseFloat(t); return -1 == t.indexOf("%") && !isNaN(e) && e } var i = "undefined" == typeof console ? function () { } : function (t) { console.error(t) }, y = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], b = y.length; function E(t) { var e = getComputedStyle(t); return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e } var S, C = !1; function x(t) { if (function () { if (!C) { C = !0; var t = document.createElement("div"); t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box"; var e = document.body || document.documentElement; e.appendChild(t); var i = E(t); S = 200 == Math.round(m(i.width)), x.isBoxSizeOuter = S, e.removeChild(t) } }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) { var e = E(t); if ("none" == e.display) return function () { for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < b; e++) { t[y[e]] = 0 } return t }(); var i = {}; i.width = t.offsetWidth, i.height = t.offsetHeight; for (var n = i.isBorderBox = "border-box" == e.boxSizing, s = 0; s < b; s++) { var o = y[s], r = e[o], a = parseFloat(r); i[o] = isNaN(a) ? 0 : a } var l = i.paddingLeft + i.paddingRight, h = i.paddingTop + i.paddingBottom, c = i.marginLeft + i.marginRight, d = i.marginTop + i.marginBottom, u = i.borderLeftWidth + i.borderRightWidth, f = i.borderTopWidth + i.borderBottomWidth, p = n && S, g = m(e.width); !1 !== g && (i.width = g + (p ? 0 : l + u)); var v = m(e.height); return !1 !== v && (i.height = v + (p ? 0 : h + f)), i.innerWidth = i.width - (l + u), i.innerHeight = i.height - (h + f), i.outerWidth = i.width + c, i.outerHeight = i.height + d, i } } return x }), function (t, e) { "use strict"; "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e() }(window, function () { "use strict"; var i = function () { var t = window.Element.prototype; if (t.matches) return "matches"; if (t.matchesSelector) return "matchesSelector"; for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) { var n = e[i] + "MatchesSelector"; if (t[n]) return n } }(); return function (t, e) { return t[i](e) } }), function (e, i) { "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (t) { return i(e, t) }) : "object" == typeof module && module.exports ? module.exports = i(e, require("desandro-matches-selector")) : e.fizzyUIUtils = i(e, e.matchesSelector) }(window, function (h, o) { var c = { extend: function (t, e) { for (var i in e) t[i] = e[i]; return t }, modulo: function (t, e) { return (t % e + e) % e } }, e = Array.prototype.slice; c.makeArray = function (t) { return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? e.call(t) : [t] }, c.removeFrom = function (t, e) { var i = t.indexOf(e); -1 != i && t.splice(i, 1) }, c.getParent = function (t, e) { for (; t.parentNode && t != document.body;)if (t = t.parentNode, o(t, e)) return t }, c.getQueryElement = function (t) { return "string" == typeof t ? document.querySelector(t) : t }, c.handleEvent = function (t) { var e = "on" + t.type; this[e] && this[e](t) }, c.filterFindElements = function (t, n) { t = c.makeArray(t); var s = []; return t.forEach(function (t) { if (t instanceof HTMLElement) if (n) { o(t, n) && s.push(t); for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++)s.push(e[i]) } else s.push(t) }), s }, c.debounceMethod = function (t, e, n) { n = n || 100; var s = t.prototype[e], o = e + "Timeout"; t.prototype[e] = function () { var t = this[o]; clearTimeout(t); var e = arguments, i = this; this[o] = setTimeout(function () { s.apply(i, e), delete i[o] }, n) } }, c.docReady = function (t) { var e = document.readyState; "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t) }, c.toDashed = function (t) { return t.replace(/(.)([A-Z])/g, function (t, e, i) { return e + "-" + i }).toLowerCase() }; var d = h.console; return c.htmlInit = function (a, l) { c.docReady(function () { var t = c.toDashed(l), s = "data-" + t, e = document.querySelectorAll("[" + s + "]"), i = document.querySelectorAll(".js-" + t), n = c.makeArray(e).concat(c.makeArray(i)), o = s + "-options", r = h.jQuery; n.forEach(function (e) { var t, i = e.getAttribute(s) || e.getAttribute(o); try { t = i && JSON.parse(i) } catch (t) { return void (d && d.error("Error parsing " + s + " on " + e.className + ": " + t)) } var n = new a(e, t); r && r.data(e, l, n) }) }) }, c }), function (e, i) { "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function (t) { return i(e, t) }) : "object" == typeof module && module.exports ? module.exports = i(e, require("get-size")) : (e.Flickity = e.Flickity || {}, e.Flickity.Cell = i(e, e.getSize)) }(window, function (t, e) { function i(t, e) { this.element = t, this.parent = e, this.create() } var n = i.prototype; return n.create = function () { this.element.style.position = "absolute", this.element.setAttribute("aria-hidden", "true"), this.x = 0, this.shift = 0 }, n.destroy = function () { this.unselect(), this.element.style.position = ""; var t = this.parent.originSide; this.element.style[t] = "" }, n.getSize = function () { this.size = e(this.element) }, n.setPosition = function (t) { this.x = t, this.updateTarget(), this.renderPosition(t) }, n.updateTarget = n.setDefaultTarget = function () { var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight"; this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign }, n.renderPosition = function (t) { var e = this.parent.originSide; this.element.style[e] = this.parent.getPositionValue(t) }, n.select = function () { this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden") }, n.unselect = function () { this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true") }, n.wrapShift = function (t) { this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t) }, n.remove = function () { this.element.parentNode.removeChild(this.element) }, i }), function (t, e) { "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {}, t.Flickity.Slide = e()) }(window, function () { "use strict"; function t(t) { this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, this.height = 0 } var e = t.prototype; return e.addCell = function (t) { if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) { this.x = t.x; var e = this.isOriginLeft ? "marginLeft" : "marginRight"; this.firstMargin = t.size[e] } }, e.updateTarget = function () { var t = this.isOriginLeft ? "marginRight" : "marginLeft", e = this.getLastCell(), i = e ? e.size[t] : 0, n = this.outerWidth - (this.firstMargin + i); this.target = this.x + this.firstMargin + n * this.parent.cellAlign }, e.getLastCell = function () { return this.cells[this.cells.length - 1] }, e.select = function () { this.cells.forEach(function (t) { t.select() }) }, e.unselect = function () { this.cells.forEach(function (t) { t.unselect() }) }, e.getCellElements = function () { return this.cells.map(function (t) { return t.element }) }, t }), function (e, i) { "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (t) { return i(e, t) }) : "object" == typeof module && module.exports ? module.exports = i(e, require("fizzy-ui-utils")) : (e.Flickity = e.Flickity || {}, e.Flickity.animatePrototype = i(e, e.fizzyUIUtils)) }(window, function (t, e) { var i = { startAnimation: function () { this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate()) }, animate: function () { this.applyDragForce(), this.applySelectedAttraction(); var t = this.x; if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) { var e = this; requestAnimationFrame(function () { e.animate() }) } }, positionSlider: function () { var t = this.x; this.options.wrapAround && 1 < this.cells.length && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), this.setTranslateX(t, this.isAnimating), this.dispatchScrollEvent() }, setTranslateX: function (t, e) { t += this.cursorPosition, t = this.options.rightToLeft ? -t : t; var i = this.getPositionValue(t); this.slider.style.transform = e ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")" }, dispatchScrollEvent: function () { var t = this.slides[0]; if (t) { var e = -this.x - t.target, i = e / this.slidesWidth; this.dispatchEvent("scroll", null, [i, e]) } }, positionSliderAtSelected: function () { this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider()) }, getPositionValue: function (t) { return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px" }, settle: function (t) { this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, 2 < this.restingFrames && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex])) }, shiftWrapCells: function (t) { var e = this.cursorPosition + t; this._shiftCells(this.beforeShiftCells, e, -1); var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition); this._shiftCells(this.afterShiftCells, i, 1) }, _shiftCells: function (t, e, i) { for (var n = 0; n < t.length; n++) { var s = t[n], o = 0 < e ? i : 0; s.wrapShift(o), e -= s.size.outerWidth } }, _unshiftCells: function (t) { if (t && t.length) for (var e = 0; e < t.length; e++)t[e].wrapShift(0) }, integratePhysics: function () { this.x += this.velocity, this.velocity *= this.getFrictionFactor() }, applyForce: function (t) { this.velocity += t }, getFrictionFactor: function () { return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"] }, getRestingPosition: function () { return this.x + this.velocity / (1 - this.getFrictionFactor()) }, applyDragForce: function () { if (this.isDraggable && this.isPointerDown) { var t = this.dragX - this.x - this.velocity; this.applyForce(t) } }, applySelectedAttraction: function () { if (!(this.isDraggable && this.isPointerDown) && !this.isFreeScrolling && this.slides.length) { var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction; this.applyForce(t) } } }; return i }), function (r, a) { if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function (t, e, i, n, s, o) { return a(r, t, e, i, n, s, o) }); else if ("object" == typeof module && module.exports) module.exports = a(r, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate")); else { var t = r.Flickity; r.Flickity = a(r, r.EvEmitter, r.getSize, r.fizzyUIUtils, t.Cell, t.Slide, t.animatePrototype) } }(window, function (n, t, e, a, i, r, s) { var l = n.jQuery, o = n.getComputedStyle, h = n.console; function c(t, e) { for (t = a.makeArray(t); t.length;)e.appendChild(t.shift()) } var d = 0, u = {}; function f(t, e) { var i = a.getQueryElement(t); if (i) { if (this.element = i, this.element.flickityGUID) { var n = u[this.element.flickityGUID]; return n.option(e), n } l && (this.$element = l(this.element)), this.options = a.extend({}, this.constructor.defaults), this.option(e), this._create() } else h && h.error("Bad element for Flickity: " + (i || t)) } f.defaults = { accessibility: !0, cellAlign: "center", freeScrollFriction: .075, friction: .28, namespaceJQueryEvents: !0, percentPosition: !0, resize: !0, selectedAttraction: .025, setGallerySize: !0 }, f.createMethods = []; var p = f.prototype; a.extend(p, t.prototype), p._create = function () { var t = this.guid = ++d; for (var e in this.element.flickityGUID = t, (u[t] = this).selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && n.addEventListener("resize", this), this.options.on) { var i = this.options.on[e]; this.on(e, i) } f.createMethods.forEach(function (t) { this[t]() }, this), this.options.watchCSS ? this.watchCSS() : this.activate() }, p.option = function (t) { a.extend(this.options, t) }, p.activate = function () { this.isActive || (this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), c(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready")) }, p._createSlider = function () { var t = document.createElement("div"); t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t }, p._filterFindCellElements = function (t) { return a.filterFindElements(t, this.options.cellSelector) }, p.reloadCells = function () { this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize() }, p._makeCells = function (t) { return this._filterFindCellElements(t).map(function (t) { return new i(t, this) }, this) }, p.getLastCell = function () { return this.cells[this.cells.length - 1] }, p.getLastSlide = function () { return this.slides[this.slides.length - 1] }, p.positionCells = function () { this._sizeCells(this.cells), this._positionCells(0) }, p._positionCells = function (t) { t = t || 0, this.maxCellHeight = t && this.maxCellHeight || 0; var e = 0; if (0 < t) { var i = this.cells[t - 1]; e = i.x + i.size.outerWidth } for (var n = this.cells.length, s = t; s < n; s++) { var o = this.cells[s]; o.setPosition(e), e += o.size.outerWidth, this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight) } this.slideableWidth = e, this.updateSlides(), this._containSlides(), this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0 }, p._sizeCells = function (t) { t.forEach(function (t) { t.getSize() }) }, p.updateSlides = function () { if (this.slides = [], this.cells.length) { var n = new r(this); this.slides.push(n); var s = "left" == this.originSide ? "marginRight" : "marginLeft", o = this._getCanCellFit(); this.cells.forEach(function (t, e) { if (n.cells.length) { var i = n.outerWidth - n.firstMargin + (t.size.outerWidth - t.size[s]); o.call(this, e, i) || (n.updateTarget(), n = new r(this), this.slides.push(n)), n.addCell(t) } else n.addCell(t) }, this), n.updateTarget(), this.updateSelectedSlide() } }, p._getCanCellFit = function () { var t = this.options.groupCells; if (!t) return function () { return !1 }; if ("number" == typeof t) { var e = parseInt(t, 10); return function (t) { return t % e != 0 } } var i = "string" == typeof t && t.match(/^(\d+)%$/), n = i ? parseInt(i[1], 10) / 100 : 1; return function (t, e) { return e <= (this.size.innerWidth + 1) * n } }, p._init = p.reposition = function () { this.positionCells(), this.positionSliderAtSelected() }, p.getSize = function () { this.size = e(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign }; var g = { center: { left: .5, right: .5 }, left: { left: 0, right: 1 }, right: { right: 0, left: 1 } }; return p.setCellAlign = function () { var t = g[this.options.cellAlign]; this.cellAlign = t ? t[this.originSide] : this.options.cellAlign }, p.setGallerySize = function () { if (this.options.setGallerySize) { var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight; this.viewport.style.height = t + "px" } }, p._getWrapShiftCells = function () { if (this.options.wrapAround) { this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells); var t = this.cursorPosition, e = this.cells.length - 1; this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1) } }, p._getGapCells = function (t, e, i) { for (var n = []; 0 < t;) { var s = this.cells[e]; if (!s) break; n.push(s), e += i, t -= s.size.outerWidth } return n }, p._containSlides = function () { if (this.options.contain && !this.options.wrapAround && this.cells.length) { var t = this.options.rightToLeft, e = t ? "marginRight" : "marginLeft", i = t ? "marginLeft" : "marginRight", n = this.slideableWidth - this.getLastCell().size[i], s = n < this.size.innerWidth, o = this.cursorPosition + this.cells[0].size[e], r = n - this.size.innerWidth * (1 - this.cellAlign); this.slides.forEach(function (t) { s ? t.target = n * this.cellAlign : (t.target = Math.max(t.target, o), t.target = Math.min(t.target, r)) }, this) } }, p.dispatchEvent = function (t, e, i) { var n = e ? [e].concat(i) : i; if (this.emitEvent(t, n), l && this.$element) { var s = t += this.options.namespaceJQueryEvents ? ".flickity" : ""; if (e) { var o = l.Event(e); o.type = t, s = o } this.$element.trigger(s, i) } }, p.select = function (t, e, i) { if (this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = a.modulo(t, this.slides.length)), this.slides[t])) { var n = this.selectedIndex; this.selectedIndex = t, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [t]), t != n && this.dispatchEvent("change", null, [t]), this.dispatchEvent("cellSelect") } }, p._wrapSelect = function (t) { var e = this.slides.length; if (!(this.options.wrapAround && 1 < e)) return t; var i = a.modulo(t, e), n = Math.abs(i - this.selectedIndex), s = Math.abs(i + e - this.selectedIndex), o = Math.abs(i - e - this.selectedIndex); !this.isDragSelect && s < n ? t += e : !this.isDragSelect && o < n && (t -= e), t < 0 ? this.x -= this.slideableWidth : e <= t && (this.x += this.slideableWidth) }, p.previous = function (t, e) { this.select(this.selectedIndex - 1, t, e) }, p.next = function (t, e) { this.select(this.selectedIndex + 1, t, e) }, p.updateSelectedSlide = function () { var t = this.slides[this.selectedIndex]; t && (this.unselectSelectedSlide(), (this.selectedSlide = t).select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0]) }, p.unselectSelectedSlide = function () { this.selectedSlide && this.selectedSlide.unselect() }, p.selectInitialIndex = function () { var t = this.options.initialIndex; if (this.isInitActivated) this.select(this.selectedIndex, !1, !0); else { if (t && "string" == typeof t) if (this.queryCell(t)) return void this.selectCell(t, !1, !0); var e = 0; t && this.slides[t] && (e = t), this.select(e, !1, !0) } }, p.selectCell = function (t, e, i) { var n = this.queryCell(t); if (n) { var s = this.getCellSlideIndex(n); this.select(s, e, i) } }, p.getCellSlideIndex = function (t) { for (var e = 0; e < this.slides.length; e++) { if (-1 != this.slides[e].cells.indexOf(t)) return e } }, p.getCell = function (t) { for (var e = 0; e < this.cells.length; e++) { var i = this.cells[e]; if (i.element == t) return i } }, p.getCells = function (t) { t = a.makeArray(t); var i = []; return t.forEach(function (t) { var e = this.getCell(t); e && i.push(e) }, this), i }, p.getCellElements = function () { return this.cells.map(function (t) { return t.element }) }, p.getParentCell = function (t) { var e = this.getCell(t); return e || (t = a.getParent(t, ".flickity-slider > *"), this.getCell(t)) }, p.getAdjacentCellElements = function (t, e) { if (!t) return this.selectedSlide.getCellElements(); e = void 0 === e ? this.selectedIndex : e; var i = this.slides.length; if (i <= 1 + 2 * t) return this.getCellElements(); for (var n = [], s = e - t; s <= e + t; s++) { var o = this.options.wrapAround ? a.modulo(s, i) : s, r = this.slides[o]; r && (n = n.concat(r.getCellElements())) } return n }, p.queryCell = function (t) { if ("number" == typeof t) return this.cells[t]; if ("string" == typeof t) { if (t.match(/^[#\.]?[\d\/]/)) return; t = this.element.querySelector(t) } return this.getCell(t) }, p.uiChange = function () { this.emitEvent("uiChange") }, p.childUIPointerDown = function (t) { "touchstart" != t.type && t.preventDefault(), this.focus() }, p.onresize = function () { this.watchCSS(), this.resize() }, a.debounceMethod(f, "onresize", 150), p.resize = function () { if (this.isActive) { this.getSize(), this.options.wrapAround && (this.x = a.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize"); var t = this.selectedElements && this.selectedElements[0]; this.selectCell(t, !1, !0) } }, p.watchCSS = function () { this.options.watchCSS && (-1 != o(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate()) }, p.onkeydown = function (t) { var e = document.activeElement && document.activeElement != this.element; if (this.options.accessibility && !e) { var i = f.keyboardHandlers[t.keyCode]; i && i.call(this) } }, f.keyboardHandlers = { 37: function () { var t = this.options.rightToLeft ? "next" : "previous"; this.uiChange(), this[t]() }, 39: function () { var t = this.options.rightToLeft ? "previous" : "next"; this.uiChange(), this[t]() } }, p.focus = function () { var t = n.pageYOffset; this.element.focus({ preventScroll: !0 }), n.pageYOffset != t && n.scrollTo(n.pageXOffset, t) }, p.deactivate = function () { this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach(function (t) { t.destroy() }), this.element.removeChild(this.viewport), c(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate")) }, p.destroy = function () { this.deactivate(), n.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), l && this.$element && l.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete u[this.guid] }, a.extend(p, s), f.data = function (t) { var e = (t = a.getQueryElement(t)) && t.flickityGUID; return e && u[e] }, a.htmlInit(f, "flickity"), l && l.bridget && l.bridget("flickity", f), f.setJQuery = function (t) { l = t }, f.Cell = i, f.Slide = r, f }), function (e, i) { "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function (t) { return i(e, t) }) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.Unipointer = i(e, e.EvEmitter) }(window, function (s, t) { function e() { } var i = e.prototype = Object.create(t.prototype); i.bindStartEvent = function (t) { this._bindStartEvent(t, !0) }, i.unbindStartEvent = function (t) { this._bindStartEvent(t, !1) }, i._bindStartEvent = function (t, e) { var i = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener", n = "mousedown"; s.PointerEvent ? n = "pointerdown" : "ontouchstart" in s && (n = "touchstart"), t[i](n, this) }, i.handleEvent = function (t) { var e = "on" + t.type; this[e] && this[e](t) }, i.getTouch = function (t) { for (var e = 0; e < t.length; e++) { var i = t[e]; if (i.identifier == this.pointerIdentifier) return i } }, i.onmousedown = function (t) { var e = t.button; e && 0 !== e && 1 !== e || this._pointerDown(t, t) }, i.ontouchstart = function (t) { this._pointerDown(t, t.changedTouches[0]) }, i.onpointerdown = function (t) { this._pointerDown(t, t) }, i._pointerDown = function (t, e) { t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e)) }, i.pointerDown = function (t, e) { this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]) }; var n = { mousedown: ["mousemove", "mouseup"], touchstart: ["touchmove", "touchend", "touchcancel"], pointerdown: ["pointermove", "pointerup", "pointercancel"] }; return i._bindPostStartEvents = function (t) { if (t) { var e = n[t.type]; e.forEach(function (t) { s.addEventListener(t, this) }, this), this._boundPointerEvents = e } }, i._unbindPostStartEvents = function () { this._boundPointerEvents && (this._boundPointerEvents.forEach(function (t) { s.removeEventListener(t, this) }, this), delete this._boundPointerEvents) }, i.onmousemove = function (t) { this._pointerMove(t, t) }, i.onpointermove = function (t) { t.pointerId == this.pointerIdentifier && this._pointerMove(t, t) }, i.ontouchmove = function (t) { var e = this.getTouch(t.changedTouches); e && this._pointerMove(t, e) }, i._pointerMove = function (t, e) { this.pointerMove(t, e) }, i.pointerMove = function (t, e) { this.emitEvent("pointerMove", [t, e]) }, i.onmouseup = function (t) { this._pointerUp(t, t) }, i.onpointerup = function (t) { t.pointerId == this.pointerIdentifier && this._pointerUp(t, t) }, i.ontouchend = function (t) { var e = this.getTouch(t.changedTouches); e && this._pointerUp(t, e) }, i._pointerUp = function (t, e) { this._pointerDone(), this.pointerUp(t, e) }, i.pointerUp = function (t, e) { this.emitEvent("pointerUp", [t, e]) }, i._pointerDone = function () { this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone() }, i._pointerReset = function () { this.isPointerDown = !1, delete this.pointerIdentifier }, i.pointerDone = function () { }, i.onpointercancel = function (t) { t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t) }, i.ontouchcancel = function (t) { var e = this.getTouch(t.changedTouches); e && this._pointerCancel(t, e) }, i._pointerCancel = function (t, e) { this._pointerDone(), this.pointerCancel(t, e) }, i.pointerCancel = function (t, e) { this.emitEvent("pointerCancel", [t, e]) }, e.getPointerPoint = function (t) { return { x: t.pageX, y: t.pageY } }, e }), function (e, i) { "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function (t) { return i(e, t) }) : "object" == typeof module && module.exports ? module.exports = i(e, require("unipointer")) : e.Unidragger = i(e, e.Unipointer) }(window, function (o, t) { function e() { } var i = e.prototype = Object.create(t.prototype); i.bindHandles = function () { this._bindHandles(!0) }, i.unbindHandles = function () { this._bindHandles(!1) }, i._bindHandles = function (t) { for (var e = (t = void 0 === t || t) ? "addEventListener" : "removeEventListener", i = t ? this._touchActionValue : "", n = 0; n < this.handles.length; n++) { var s = this.handles[n]; this._bindStartEvent(s, t), s[e]("click", this), o.PointerEvent && (s.style.touchAction = i) } }, i._touchActionValue = "none", i.pointerDown = function (t, e) { this.okayPointerDown(t) && (this.pointerDownPointer = e, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])) }; var s = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 }, r = { radio: !0, checkbox: !0, button: !0, submit: !0, image: !0, file: !0 }; return i.okayPointerDown = function (t) { var e = s[t.target.nodeName], i = r[t.target.type], n = !e || i; return n || this._pointerReset(), n }, i.pointerDownBlur = function () { var t = document.activeElement; t && t.blur && t != document.body && t.blur() }, i.pointerMove = function (t, e) { var i = this._dragPointerMove(t, e); this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i) }, i._dragPointerMove = function (t, e) { var i = { x: e.pageX - this.pointerDownPointer.pageX, y: e.pageY - this.pointerDownPointer.pageY }; return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i }, i.hasDragStarted = function (t) { return 3 < Math.abs(t.x) || 3 < Math.abs(t.y) }, i.pointerUp = function (t, e) { this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e) }, i._dragPointerUp = function (t, e) { this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e) }, i._dragStart = function (t, e) { this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(t, e) }, i.dragStart = function (t, e) { this.emitEvent("dragStart", [t, e]) }, i._dragMove = function (t, e, i) { this.isDragging && this.dragMove(t, e, i) }, i.dragMove = function (t, e, i) { t.preventDefault(), this.emitEvent("dragMove", [t, e, i]) }, i._dragEnd = function (t, e) { this.isDragging = !1, setTimeout(function () { delete this.isPreventingClicks }.bind(this)), this.dragEnd(t, e) }, i.dragEnd = function (t, e) { this.emitEvent("dragEnd", [t, e]) }, i.onclick = function (t) { this.isPreventingClicks && t.preventDefault() }, i._staticClick = function (t, e) { this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function () { delete this.isIgnoringMouseUp }.bind(this), 400))) }, i.staticClick = function (t, e) { this.emitEvent("staticClick", [t, e]) }, e.getPointerPoint = t.getPointerPoint, e }), function (n, s) { "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function (t, e, i) { return s(n, t, e, i) }) : "object" == typeof module && module.exports ? module.exports = s(n, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : n.Flickity = s(n, n.Flickity, n.Unidragger, n.fizzyUIUtils) }(window, function (i, t, e, a) { a.extend(t.defaults, { draggable: ">1", dragThreshold: 3 }), t.createMethods.push("_createDrag"); var n = t.prototype; a.extend(n, e.prototype), n._touchActionValue = "pan-y"; var s = "createTouch" in document, o = !1; n._createDrag = function () { this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), s && !o && (i.addEventListener("touchmove", function () { }), o = !0) }, n.onActivateDrag = function () { this.handles = [this.viewport], this.bindHandles(), this.updateDraggable() }, n.onDeactivateDrag = function () { this.unbindHandles(), this.element.classList.remove("is-draggable") }, n.updateDraggable = function () { ">1" == this.options.draggable ? this.isDraggable = 1 < this.slides.length : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable") }, n.bindDrag = function () { this.options.draggable = !0, this.updateDraggable() }, n.unbindDrag = function () { this.options.draggable = !1, this.updateDraggable() }, n._uiChangeDrag = function () { delete this.isFreeScrolling }, n.pointerDown = function (t, e) { this.isDraggable ? this.okayPointerDown(t) && (this._pointerDownPreventDefault(t), this.pointerDownFocus(t), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = l(), i.addEventListener("scroll", this), this._pointerDownDefault(t, e)) : this._pointerDownDefault(t, e) }, n._pointerDownDefault = function (t, e) { this.pointerDownPointer = { pageX: e.pageX, pageY: e.pageY }, this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [e]) }; var r = { INPUT: !0, TEXTAREA: !0, SELECT: !0 }; function l() { return { x: i.pageXOffset, y: i.pageYOffset } } return n.pointerDownFocus = function (t) { r[t.target.nodeName] || this.focus() }, n._pointerDownPreventDefault = function (t) { var e = "touchstart" == t.type, i = "touch" == t.pointerType, n = r[t.target.nodeName]; e || i || n || t.preventDefault() }, n.hasDragStarted = function (t) { return Math.abs(t.x) > this.options.dragThreshold }, n.pointerUp = function (t, e) { delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e) }, n.pointerDone = function () { i.removeEventListener("scroll", this), delete this.pointerDownScroll }, n.dragStart = function (t, e) { this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), i.removeEventListener("scroll", this), this.dispatchEvent("dragStart", t, [e])) }, n.pointerMove = function (t, e) { var i = this._dragPointerMove(t, e); this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i) }, n.dragMove = function (t, e, i) { if (this.isDraggable) { t.preventDefault(), this.previousDragX = this.dragX; var n = this.options.rightToLeft ? -1 : 1; this.options.wrapAround && (i.x = i.x % this.slideableWidth); var s = this.dragStartPosition + i.x * n; if (!this.options.wrapAround && this.slides.length) { var o = Math.max(-this.slides[0].target, this.dragStartPosition); s = o < s ? .5 * (s + o) : s; var r = Math.min(-this.getLastSlide().target, this.dragStartPosition); s = s < r ? .5 * (s + r) : s } this.dragX = s, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, i]) } }, n.dragEnd = function (t, e) { if (this.isDraggable) { this.options.freeScroll && (this.isFreeScrolling = !0); var i = this.dragEndRestingSelect(); if (this.options.freeScroll && !this.options.wrapAround) { var n = this.getRestingPosition(); this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect()); delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e]) } }, n.dragEndRestingSelect = function () { var t = this.getRestingPosition(), e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)), i = this._getClosestResting(t, e, 1), n = this._getClosestResting(t, e, -1); return i.distance < n.distance ? i.index : n.index }, n._getClosestResting = function (t, e, i) { for (var n = this.selectedIndex, s = 1 / 0, o = this.options.contain && !this.options.wrapAround ? function (t, e) { return t <= e } : function (t, e) { return t < e }; o(e, s) && (n += i, s = e, null !== (e = this.getSlideDistance(-t, n)));)e = Math.abs(e); return { distance: s, index: n - i } }, n.getSlideDistance = function (t, e) { var i = this.slides.length, n = this.options.wrapAround && 1 < i, s = n ? a.modulo(e, i) : e, o = this.slides[s]; if (!o) return null; var r = n ? this.slideableWidth * Math.floor(e / i) : 0; return t - (o.target + r) }, n.dragEndBoostSelect = function () { if (void 0 === this.previousDragX || !this.dragMoveTime || 100 < new Date - this.dragMoveTime) return 0; var t = this.getSlideDistance(-this.dragX, this.selectedIndex), e = this.previousDragX - this.dragX; return 0 < t && 0 < e ? 1 : t < 0 && e < 0 ? -1 : 0 }, n.staticClick = function (t, e) { var i = this.getParentCell(t.target), n = i && i.element, s = i && this.cells.indexOf(i); this.dispatchEvent("staticClick", t, [e, n, s]) }, n.onscroll = function () { var t = l(), e = this.pointerDownScroll.x - t.x, i = this.pointerDownScroll.y - t.y; (3 < Math.abs(e) || 3 < Math.abs(i)) && this._pointerDone() }, t }), function (n, s) { "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function (t, e, i) { return s(n, t, e, i) }) : "object" == typeof module && module.exports ? module.exports = s(n, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils) }(window, function (t, e, i, n) { "use strict"; var s = "http://www.w3.org/2000/svg"; function o(t, e) { this.direction = t, this.parent = e, this._create() } (o.prototype = Object.create(i.prototype))._create = function () { this.isEnabled = !0, this.isPrevious = -1 == this.direction; var t = this.parent.options.rightToLeft ? 1 : -1; this.isLeft = this.direction == t; var e = this.element = document.createElement("button"); e.className = "flickity-button flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next"); var i = this.createSVG(); e.appendChild(i), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent)) }, o.prototype.activate = function () { this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element) }, o.prototype.deactivate = function () { this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this) }, o.prototype.createSVG = function () { var t = document.createElementNS(s, "svg"); t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100"); var e = document.createElementNS(s, "path"), i = function (t) { return "string" != typeof t ? "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z" : t }(this.parent.options.arrowShape); return e.setAttribute("d", i), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t }, o.prototype.handleEvent = n.handleEvent, o.prototype.onclick = function () { if (this.isEnabled) { this.parent.uiChange(); var t = this.isPrevious ? "previous" : "next"; this.parent[t]() } }, o.prototype.enable = function () { this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0) }, o.prototype.disable = function () { this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1) }, o.prototype.update = function () { var t = this.parent.slides; if (this.parent.options.wrapAround && 1 < t.length) this.enable(); else { var e = t.length ? t.length - 1 : 0, i = this.isPrevious ? 0 : e; this[this.parent.selectedIndex == i ? "disable" : "enable"]() } }, o.prototype.destroy = function () { this.deactivate(), this.allOff() }, n.extend(e.defaults, { prevNextButtons: !0, arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 } }), e.createMethods.push("_createPrevNextButtons"); var r = e.prototype; return r._createPrevNextButtons = function () { this.options.prevNextButtons && (this.prevButton = new o(-1, this), this.nextButton = new o(1, this), this.on("activate", this.activatePrevNextButtons)) }, r.activatePrevNextButtons = function () { this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons) }, r.deactivatePrevNextButtons = function () { this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons) }, e.PrevNextButton = o, e }), function (n, s) { "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function (t, e, i) { return s(n, t, e, i) }) : "object" == typeof module && module.exports ? module.exports = s(n, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils) }(window, function (t, e, i, n) { function s(t) { this.parent = t, this._create() } (s.prototype = Object.create(i.prototype))._create = function () { this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.handleClick = this.onClick.bind(this), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent)) }, s.prototype.activate = function () { this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder) }, s.prototype.deactivate = function () { this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder) }, s.prototype.setDots = function () { var t = this.parent.slides.length - this.dots.length; 0 < t ? this.addDots(t) : t < 0 && this.removeDots(-t) }, s.prototype.addDots = function (t) { for (var e = document.createDocumentFragment(), i = [], n = this.dots.length, s = n + t, o = n; o < s; o++) { var r = document.createElement("li"); r.className = "dot", r.setAttribute("aria-label", "Page dot " + (o + 1)), e.appendChild(r), i.push(r) } this.holder.appendChild(e), this.dots = this.dots.concat(i) }, s.prototype.removeDots = function (t) { this.dots.splice(this.dots.length - t, t).forEach(function (t) { this.holder.removeChild(t) }, this) }, s.prototype.updateSelected = function () { this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step")) }, s.prototype.onTap = s.prototype.onClick = function (t) { var e = t.target; if ("LI" == e.nodeName) { this.parent.uiChange(); var i = this.dots.indexOf(e); this.parent.select(i) } }, s.prototype.destroy = function () { this.deactivate(), this.allOff() }, e.PageDots = s, n.extend(e.defaults, { pageDots: !0 }), e.createMethods.push("_createPageDots"); var o = e.prototype; return o._createPageDots = function () { this.options.pageDots && (this.pageDots = new s(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots)) }, o.activatePageDots = function () { this.pageDots.activate() }, o.updateSelectedPageDots = function () { this.pageDots.updateSelected() }, o.updatePageDots = function () { this.pageDots.setDots() }, o.deactivatePageDots = function () { this.pageDots.deactivate() }, e.PageDots = s, e }), function (t, n) { "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function (t, e, i) { return n(t, e, i) }) : "object" == typeof module && module.exports ? module.exports = n(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : n(t.EvEmitter, t.fizzyUIUtils, t.Flickity) }(window, function (t, e, i) { function n(t) { this.parent = t, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this) } (n.prototype = Object.create(t.prototype)).play = function () { "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick())) }, n.prototype.tick = function () { if ("playing" == this.state) { var t = this.parent.options.autoPlay; t = "number" == typeof t ? t : 3e3; var e = this; this.clear(), this.timeout = setTimeout(function () { e.parent.next(!0), e.tick() }, t) } }, n.prototype.stop = function () { this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange) }, n.prototype.clear = function () { clearTimeout(this.timeout) }, n.prototype.pause = function () { "playing" == this.state && (this.state = "paused", this.clear()) }, n.prototype.unpause = function () { "paused" == this.state && this.play() }, n.prototype.visibilityChange = function () { this[document.hidden ? "pause" : "unpause"]() }, n.prototype.visibilityPlay = function () { this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay) }, e.extend(i.defaults, { pauseAutoPlayOnHover: !0 }), i.createMethods.push("_createPlayer"); var s = i.prototype; return s._createPlayer = function () { this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer) }, s.activatePlayer = function () { this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this)) }, s.playPlayer = function () { this.player.play() }, s.stopPlayer = function () { this.player.stop() }, s.pausePlayer = function () { this.player.pause() }, s.unpausePlayer = function () { this.player.unpause() }, s.deactivatePlayer = function () { this.player.stop(), this.element.removeEventListener("mouseenter", this) }, s.onmouseenter = function () { this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this)) }, s.onmouseleave = function () { this.player.unpause(), this.element.removeEventListener("mouseleave", this) }, i.Player = n, i }), function (i, n) { "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function (t, e) { return n(i, t, e) }) : "object" == typeof module && module.exports ? module.exports = n(i, require("./flickity"), require("fizzy-ui-utils")) : n(i, i.Flickity, i.fizzyUIUtils) }(window, function (t, e, n) { var i = e.prototype; return i.insert = function (t, e) { var i = this._makeCells(t); if (i && i.length) { var n = this.cells.length; e = void 0 === e ? n : e; var s = function (t) { var e = document.createDocumentFragment(); return t.forEach(function (t) { e.appendChild(t.element) }), e }(i), o = e == n; if (o) this.slider.appendChild(s); else { var r = this.cells[e].element; this.slider.insertBefore(s, r) } if (0 === e) this.cells = i.concat(this.cells); else if (o) this.cells = this.cells.concat(i); else { var a = this.cells.splice(e, n - e); this.cells = this.cells.concat(i).concat(a) } this._sizeCells(i), this.cellChange(e, !0) } }, i.append = function (t) { this.insert(t, this.cells.length) }, i.prepend = function (t) { this.insert(t, 0) }, i.remove = function (t) { var e = this.getCells(t); if (e && e.length) { var i = this.cells.length - 1; e.forEach(function (t) { t.remove(); var e = this.cells.indexOf(t); i = Math.min(e, i), n.removeFrom(this.cells, t) }, this), this.cellChange(i, !0) } }, i.cellSizeChange = function (t) { var e = this.getCell(t); if (e) { e.getSize(); var i = this.cells.indexOf(e); this.cellChange(i) } }, i.cellChange = function (t, e) { var i = this.selectedElement; this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize(); var n = this.getCell(i); n && (this.selectedIndex = this.getCellSlideIndex(n)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [t]), this.select(this.selectedIndex), e && this.positionSliderAtSelected() }, e }), function (i, n) { "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function (t, e) { return n(i, t, e) }) : "object" == typeof module && module.exports ? module.exports = n(i, require("./flickity"), require("fizzy-ui-utils")) : n(i, i.Flickity, i.fizzyUIUtils) }(window, function (t, e, o) { "use strict"; e.createMethods.push("_createLazyload"); var i = e.prototype; function s(t, e) { this.img = t, this.flickity = e, this.load() } return i._createLazyload = function () { this.on("select", this.lazyLoad) }, i.lazyLoad = function () { var t = this.options.lazyLoad; if (t) { var e = "number" == typeof t ? t : 0, i = this.getAdjacentCellElements(e), n = []; i.forEach(function (t) { var e = function (t) { if ("IMG" == t.nodeName) { var e = t.getAttribute("data-flickity-lazyload"), i = t.getAttribute("data-flickity-lazyload-src"), n = t.getAttribute("data-flickity-lazyload-srcset"); if (e || i || n) return [t] } var s = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]"); return o.makeArray(s) }(t); n = n.concat(e) }), n.forEach(function (t) { new s(t, this) }, this) } }, s.prototype.handleEvent = o.handleEvent, s.prototype.load = function () { this.img.addEventListener("load", this), this.img.addEventListener("error", this); var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"), e = this.img.getAttribute("data-flickity-lazyload-srcset"); this.img.src = t, e && this.img.setAttribute("srcset", e), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset") }, s.prototype.onload = function (t) { this.complete(t, "flickity-lazyloaded") }, s.prototype.onerror = function (t) { this.complete(t, "flickity-lazyerror") }, s.prototype.complete = function (t, e) { this.img.removeEventListener("load", this), this.img.removeEventListener("error", this); var i = this.flickity.getParentCell(this.img), n = i && i.element; this.flickity.cellSizeChange(n), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, n) }, e.LazyLoader = s, e }), function (t, e) { "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == typeof module && module.exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload"))) }(window, function (t) { return t }), function (t, e) { "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils) }(window, function (n, s) { n.createMethods.push("_createAsNavFor"); var t = n.prototype; return t._createAsNavFor = function () { this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor); var t = this.options.asNavFor; if (t) { var e = this; setTimeout(function () { e.setNavCompanion(t) }) } }, t.setNavCompanion = function (t) { t = s.getQueryElement(t); var e = n.data(t); if (e && e != this) { this.navCompanion = e; var i = this; this.onNavCompanionSelect = function () { i.navCompanionSelect() }, e.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0) } }, t.navCompanionSelect = function (t) { var e = this.navCompanion && this.navCompanion.selectedCells; if (e) { var i = e[0], n = this.navCompanion.cells.indexOf(i), s = n + e.length - 1, o = Math.floor(function (t, e, i) { return (e - t) * i + t }(n, s, this.navCompanion.cellAlign)); if (this.selectCell(o, !1, t), this.removeNavSelectedElements(), !(o >= this.cells.length)) { var r = this.cells.slice(n, 1 + s); this.navSelectedElements = r.map(function (t) { return t.element }), this.changeNavSelectedClass("add") } } }, t.changeNavSelectedClass = function (e) { this.navSelectedElements.forEach(function (t) { t.classList[e]("is-nav-selected") }) }, t.activateAsNavFor = function () { this.navCompanionSelect(!0) }, t.removeNavSelectedElements = function () { this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements) }, t.onNavStaticClick = function (t, e, i, n) { "number" == typeof n && this.navCompanion.selectCell(n) }, t.deactivateAsNavFor = function () { this.removeNavSelectedElements() }, t.destroyAsNavFor = function () { this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion) }, n }), function (e, i) { "use strict"; "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function (t) { return i(e, t) }) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.imagesLoaded = i(e, e.EvEmitter) }("undefined" != typeof window ? window : this, function (e, t) { var s = e.jQuery, o = e.console; function r(t, e) { for (var i in e) t[i] = e[i]; return t } var a = Array.prototype.slice; function l(t, e, i) { if (!(this instanceof l)) return new l(t, e, i); var n = t; "string" == typeof t && (n = document.querySelectorAll(t)), n ? (this.elements = function (t) { return Array.isArray(t) ? t : "object" == typeof t && "number" == typeof t.length ? a.call(t) : [t] }(n), this.options = r({}, this.options), "function" == typeof e ? i = e : r(this.options, e), i && this.on("always", i), this.getImages(), s && (this.jqDeferred = new s.Deferred), setTimeout(this.check.bind(this))) : o.error("Bad element for imagesLoaded " + (n || t)) } (l.prototype = Object.create(t.prototype)).options = {}, l.prototype.getImages = function () { this.images = [], this.elements.forEach(this.addElementImages, this) }, l.prototype.addElementImages = function (t) { "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t); var e = t.nodeType; if (e && h[e]) { for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) { var s = i[n]; this.addImage(s) } if ("string" == typeof this.options.background) { var o = t.querySelectorAll(this.options.background); for (n = 0; n < o.length; n++) { var r = o[n]; this.addElementBackgroundImages(r) } } } }; var h = { 1: !0, 9: !0, 11: !0 }; function i(t) { this.img = t } function n(t, e) { this.url = t, this.element = e, this.img = new Image } return l.prototype.addElementBackgroundImages = function (t) { var e = getComputedStyle(t); if (e) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) { var s = n && n[2]; s && this.addBackground(s, t), n = i.exec(e.backgroundImage) } }, l.prototype.addImage = function (t) { var e = new i(t); this.images.push(e) }, l.prototype.addBackground = function (t, e) { var i = new n(t, e); this.images.push(i) }, l.prototype.check = function () { var n = this; function e(t, e, i) { setTimeout(function () { n.progress(t, e, i) }) } this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function (t) { t.once("progress", e), t.check() }) : this.complete() }, l.prototype.progress = function (t, e, i) { this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && o && o.log("progress: " + i, t, e) }, l.prototype.complete = function () { var t = this.hasAnyBroken ? "fail" : "done"; if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) { var e = this.hasAnyBroken ? "reject" : "resolve"; this.jqDeferred[e](this) } }, (i.prototype = Object.create(t.prototype)).check = function () { this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src) }, i.prototype.getIsImageComplete = function () { return this.img.complete && this.img.naturalWidth }, i.prototype.confirm = function (t, e) { this.isLoaded = t, this.emitEvent("progress", [this, this.img, e]) }, i.prototype.handleEvent = function (t) { var e = "on" + t.type; this[e] && this[e](t) }, i.prototype.onload = function () { this.confirm(!0, "onload"), this.unbindEvents() }, i.prototype.onerror = function () { this.confirm(!1, "onerror"), this.unbindEvents() }, i.prototype.unbindEvents = function () { this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, (n.prototype = Object.create(i.prototype)).check = function () { this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents()) }, n.prototype.unbindEvents = function () { this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, n.prototype.confirm = function (t, e) { this.isLoaded = t, this.emitEvent("progress", [this, this.element, e]) }, l.makeJQueryPlugin = function (t) { (t = t || e.jQuery) && ((s = t).fn.imagesLoaded = function (t, e) { return new l(this, t, e).jqDeferred.promise(s(this)) }) }, l.makeJQueryPlugin(), l }), function (i, n) { "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function (t, e) { return n(i, t, e) }) : "object" == typeof module && module.exports ? module.exports = n(i, require("flickity"), require("imagesloaded")) : i.Flickity = n(i, i.Flickity, i.imagesLoaded) }(window, function (t, e, i) { "use strict"; e.createMethods.push("_createImagesLoaded"); var n = e.prototype; return n._createImagesLoaded = function () { this.on("activate", this.imagesLoaded) }, n.imagesLoaded = function () { if (this.options.imagesLoaded) { var n = this; i(this.slider).on("progress", function (t, e) { var i = n.getParentCell(e.img); n.cellSizeChange(i && i.element), n.options.freeScroll || n.positionSliderAtSelected() }) } }, e });
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,a,i,r;for(var l in c)if(c.hasOwnProperty(l)){if(e=[],n=c[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),f.push((s?"":"no-")+r.join("-"))}}function a(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?u.className.baseVal=n:u.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,s){var a,l,f,c,d="modernizr",p=i("div"),h=r();if(parseInt(o,10))for(;o--;)f=i("div"),f.id=s?s[o]:d+(o+1),p.appendChild(f);return a=i("style"),a.type="text/css",a.id="s"+d,(h.fake?h:p).appendChild(a),h.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",c=u.style.overflow,u.style.overflow="hidden",u.appendChild(h)),l=t(p,e),h.fake?(h.parentNode.removeChild(h),u.style.overflow=c,u.offsetHeight):p.parentNode.removeChild(p),!!l}var f=[],c=[],d={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){c.push({name:e,fn:n,options:t})},addAsyncTest:function(e){c.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=d,Modernizr=new Modernizr;var u=n.documentElement,p="svg"===u.nodeName.toLowerCase(),h=d._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];d._prefixes=h;var m=d.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(o,function(e){t=9===e.offsetTop})}return t}),s(),a(f),delete d.addTest,delete d.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);
!function(t,e){"function"==typeof define&&define.amd?define([],function(){return e()}):"object"==typeof exports?module.exports=e():t.Headhesive=e()}(this,function(){"use strict";var t=function(e,s){for(var o in s)s.hasOwnProperty(o)&&(e[o]="object"==typeof s[o]?t(e[o],s[o]):s[o]);return e},e=function(t,e){var s,o,i,n=Date.now||function(){return(new Date).getTime()},l=null,c=0,r=function(){c=n(),l=null,i=t.apply(s,o),s=o=null};return function(){var f=n(),h=e-(f-c);return s=this,o=arguments,0>=h?(clearTimeout(l),l=null,c=f,i=t.apply(s,o),s=o=null):l||(l=setTimeout(r,h)),i}},s=function(){return void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop},o=function(t,e){for(var s=0,o=t.offsetHeight;t;)s+=t.offsetTop,t=t.offsetParent;return"bottom"===e&&(s+=o),s},i=function(e,s){"querySelector"in document&&"addEventListener"in window&&(this.visible=!1,this.options={offset:300,offsetSide:"top",classes:{clone:"headhesive",stick:"headhesive--stick",unstick:"headhesive--unstick"},throttle:250,onInit:function(){},onStick:function(){},onUnstick:function(){},onDestroy:function(){}},this.elem="string"==typeof e?document.querySelector(e):e,this.options=t(this.options,s),this.init())};return i.prototype={constructor:i,init:function(){if(this.clonedElem=this.elem.cloneNode(!0),this.clonedElem.className+=" "+this.options.classes.clone,document.body.insertBefore(this.clonedElem,document.body.firstChild),"number"==typeof this.options.offset)this.scrollOffset=this.options.offset;else{if("string"!=typeof this.options.offset)throw new Error("Invalid offset: "+this.options.offset);this._setScrollOffset()}this._throttleUpdate=e(this.update.bind(this),this.options.throttle),this._throttleScrollOffset=e(this._setScrollOffset.bind(this),this.options.throttle),window.addEventListener("scroll",this._throttleUpdate,!1),window.addEventListener("resize",this._throttleScrollOffset,!1),this.options.onInit.call(this)},_setScrollOffset:function(){"string"==typeof this.options.offset&&(this.scrollOffset=o(document.querySelector(this.options.offset),this.options.offsetSide))},destroy:function(){document.body.removeChild(this.clonedElem),window.removeEventListener("scroll",this._throttleUpdate),window.removeEventListener("resize",this._throttleScrollOffset),this.options.onDestroy.call(this)},stick:function(){this.visible||(this.clonedElem.className=this.clonedElem.className.replace(new RegExp("(^|\\s)*"+this.options.classes.unstick+"(\\s|$)*","g"),""),this.clonedElem.className+=" "+this.options.classes.stick,this.visible=!0,this.options.onStick.call(this))},unstick:function(){this.visible&&(this.clonedElem.className=this.clonedElem.className.replace(new RegExp("(^|\\s)*"+this.options.classes.stick+"(\\s|$)*","g"),""),this.clonedElem.className+=" "+this.options.classes.unstick,this.visible=!1,this.options.onUnstick.call(this))},update:function(){s()>this.scrollOffset?this.stick():this.unstick()}},i});
!function(){var a=function(){function a(){}function b(a){return decodeURIComponent(a.replace(/\+/g," "))}function c(a,b){var c=a.charAt(0),d=b.split(c);return c===a?d:(a=parseInt(a.substring(1),10),d[a<0?d.length+a:a-1])}function d(a,c){for(var d=a.charAt(0),e=c.split("&"),f=[],g={},h=[],i=a.substring(1),j=0,k=e.length;j<k;j++)if(f=e[j].match(/(.*?)=(.*)/),f||(f=[e[j],e[j],""]),""!==f[1].replace(/\s/g,"")){if(f[2]=b(f[2]||""),i===f[1])return f[2];h=f[1].match(/(.*)\[([0-9]+)\]/),h?(g[h[1]]=g[h[1]]||[],g[h[1]][h[2]]=f[2]):g[f[1]]=f[2]}return d===a?g:g[i]}return function(b,e){var f,g={};if("tld?"===b)return a();if(e=e||window.location.toString(),!b)return e;if(b=b.toString(),f=e.match(/^mailto:([^\/].+)/))g.protocol="mailto",g.email=f[1];else{if((f=e.match(/(.*?)\/#\!(.*)/))&&(e=f[1]+f[2]),(f=e.match(/(.*?)#(.*)/))&&(g.hash=f[2],e=f[1]),g.hash&&b.match(/^#/))return d(b,g.hash);if((f=e.match(/(.*?)\?(.*)/))&&(g.query=f[2],e=f[1]),g.query&&b.match(/^\?/))return d(b,g.query);if((f=e.match(/(.*?)\:?\/\/(.*)/))&&(g.protocol=f[1].toLowerCase(),e=f[2]),(f=e.match(/(.*?)(\/.*)/))&&(g.path=f[2],e=f[1]),g.path=(g.path||"").replace(/^([^\/])/,"/$1"),b.match(/^[\-0-9]+$/)&&(b=b.replace(/^([^\/])/,"/$1")),b.match(/^\//))return c(b,g.path.substring(1));if(f=c("/-1",g.path.substring(1)),f&&(f=f.match(/(.*?)\.(.*)/))&&(g.file=f[0],g.filename=f[1],g.fileext=f[2]),(f=e.match(/(.*)\:([0-9]+)$/))&&(g.port=f[2],e=f[1]),(f=e.match(/(.*?)@(.*)/))&&(g.auth=f[1],e=f[2]),g.auth&&(f=g.auth.match(/(.*)\:(.*)/),g.user=f?f[1]:g.auth,g.pass=f?f[2]:void 0),g.hostname=e.toLowerCase(),"."===b.charAt(0))return c(b,g.hostname);a()&&(f=g.hostname.match(a()),f&&(g.tld=f[3],g.domain=f[2]?f[2]+"."+f[3]:void 0,g.sub=f[1]||void 0)),g.port=g.port||("https"===g.protocol?"443":"80"),g.protocol=g.protocol||("443"===g.port?"https":"http")}return b in g?g[b]:"{}"===b?g:void 0}}();"function"==typeof window.define&&window.define.amd?window.define("js-url",[],function(){return a}):("undefined"!=typeof window.jQuery&&window.jQuery.extend({url:function(a,b){return window.url(a,b)}}),window.url=a)}();
var social = {
  twitter: function(){
    if (!window.twttr){
      window.twttr = (function (d,s,id) {
        var t, js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
        js.src="https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
        return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
      }(document, "script", "twitter-wjs"));
    }
    if (window.twttr) {window.twttr.ready(function (twttr) {twttr.widgets.load(document.getElementById("twitter-timeline"));});}
  },
  unload: function(){}
}
var instagram = {
  loadContent: function(s){
    if(s.clientID) {
      var url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='+s.clientID;
      $.ajax({
        type: 'GET',
        url: url,
        dataType: 'jsonp',
        success: function(data) {
          if(data.meta.code === 200 && data.data.length) {
            var data = data.data, count = 0;
            s.el.empty();
            for(var i = 0; i < data.length; i++) {
              var thisMedia = data[i], item;
              var url = thisMedia.images.low_resolution.url;
              if(!thisMedia.images.low_resolution.url.indexOf("null") > -1) {
                item = '<div class="il-photo__img instagram__bg" style="background-image:url('+url+')" data-filter="'+thisMedia.filter+'" /></div>';
                item = '<a href="'+thisMedia.link+'" target="_blank" class="instagram__link">'+item+'</a>';
              }
              if(thisMedia.videos) {
                item = '<div class="instagram__video instagram__bg" style="background-image:url('+url+')" data-filter="'+thisMedia.filter+'" /></div>';
                item = '<a href="'+thisMedia.link+'" target="_blank" class="instagram__link instagram__video-link">'+item+'</a>';
              }
              if(item) {item = '<div class="four columns instagram__item">'+item+'</div>';}
              if(item !== '') {
                s.el.append(item);
                count++;
              }
              if(count == s.limit) {break;}
            }
          }
        },error: function() {}
      });
    }
  }
}
$('.social-feeds-wrap').each(function (index, value) {
  social.twitter();
  var $target = $(this).find(".js-instafeed");
  instagram.loadContent({
    el: $target,clientID: $target.data('client-id'),limit: $target.data('count')
  });
});
$(document).on('shopify:block:select', function(e){
  var blockId = e.detail.blockId;
  var $parentSection = $('#shopify-section-' + e.detail.sectionId);
  if ($parentSection.hasClass('slideshow-section') || $parentSection.hasClass('testimonial-section')){
    sliderBlock.select(blockId, $parentSection);
  }
  utils.resizeActionButtons();
});
$(document).on('shopify:block:deselect', function(e){
  var $parentSection = $('#shopify-section-' + e.detail.sectionId);
  if ($parentSection.hasClass('slideshow-section') || $parentSection.hasClass('testimonial-section')){
    sliderBlock.deselect($parentSection)
  }
});
$(document).on('shopify:section:reorder', function(e){
  utils.pageBannerCheck();
});
$(document).on('shopify:section:load', function(e){
  var $parentSection = $('#shopify-section-' + e.detail.sectionId);
  utils.pageBannerCheck();
  
  if ($parentSection.hasClass('social-feeds-section')){
    $('.social-feeds-wrap').each(function (index, value) {
      social.twitter();
      var $target = $(this).find(".js-instafeed");
      instagram.loadContent({el: $target,clientID: $target.data('client-id'),limit: $target.data('count')});
    });
  }
  if ($parentSection.hasClass('faq-section')){faqAccordion.init();}
  if ($parentSection.hasClass('cart-section')){cart.init();}
  if ($parentSection.hasClass('featured-promotions-section')){featuredPromotions.init();}
  if ($parentSection.hasClass('slideshow-section')){slideshow.init();}
  if ($parentSection.hasClass('homepage-product-demo')){productDemo.init();}
  if ($parentSection.hasClass('search-section')){searchAutocomplete.init();}
  if ($parentSection.hasClass('testimonial-section')){testimonial.init();}
  if ($parentSection.hasClass('image-gallery-section')){gallery.init();}
  if ($parentSection.hasClass('featured-products-section')){
    productPage.initializeQuantityBox();
    productPage.productSwatches();
    productPage.init();
  }
  if ($parentSection.hasClass('featured-collection-section')){featuredCollectionSection.init();}
  if ($parentSection.hasClass('video-section')){videoSection.init();}
  if ($parentSection.hasClass('recently-viewed')){recentlyViewed.init('.js-recently-viewed');}
  if ($parentSection.hasClass('product-template')){
    productPage.init();
    productPage.productSwatches();
    productPage.relatedProducts();
    productPage.recommendTagProducts();
    recentlyViewed.init();
  }
  if ($parentSection.hasClass('article-template-section')){
    if(window.location.pathname.indexOf('/comments') != -1) {$('html,body').animate({scrollTop: $("#new-comment").offset().top-140},'slow');}
  }
  if ($parentSection.hasClass('collection-template-section')){collectionSidebarFilter.init();}
  if ($parentSection.hasClass('search-template-section')){
    collection.init();
    searchAutocomplete.init();
    collectionSidebarFilter.init();
  }
  if ($parentSection.hasClass('header-section')){
    header.init();
    header.loadMegaMenu();
  }
  if ($parentSection.hasClass('mega-menu-section')){header.loadMegaMenu();}
  if ($parentSection.hasClass('page-details-section')) {
    featuredCollectionSection.init();
    videoSection.init();
  }
  if ($parentSection.hasClass('product-details-section')) {
    featuredCollectionSection.init();
    videoSection.init();
  }
});
$(document).on('shopify:section:unload', function(e){
  var $target = $(e.target);
  var $parentSection = $('#shopify-section-' + e.detail.sectionId);
  if ($parentSection.hasClass('header-section')){
    header.unload($target);
    header.unloadMegaMenu();
  }
  if ($parentSection.hasClass('slideshow-section')){slideshow.unload($target);}
  if ($parentSection.hasClass('homepage-product-demo')){productDemo.unload($target);}
  if ($parentSection.hasClass('testimonial-section')){testimonial.unload($target);}
  if ($parentSection.hasClass('video-section')){videoSection.unload($target);}
  if ($parentSection.hasClass('search-section')){searchAutocomplete.unload($target);}
  if ($parentSection.hasClass('product-template')){productPage.unload($target);}
  if ($parentSection.hasClass('mega-menu-section')){header.unloadMegaMenu();}
  if ($parentSection.hasClass('page-details-section')) {videoSection.unload($target);}
  if ($parentSection.hasClass('product-details-section')) {videoSection.unload($target);}
});
$(document).on('shopify:section:select', function(e){
  var $parentSection = $('#shopify-section-' + e.detail.sectionId);
  if ($parentSection.hasClass('social-feeds-section')){
    $('.social-feeds-wrap').each(function (index, value) {social.twitter();});
  }
  if ($parentSection.hasClass('mega-menu-section')){
    var megaMenuParent = $('.header .' + e.detail.sectionId).data('dropdown');
    setTimeout(function() {
      $('a.mega-menu-parent[data-dropdown-rel="' + megaMenuParent + '"]').trigger('mouseenter');
      $('a.mega-menu-parent[data-dropdown-rel="' + megaMenuParent + '"]').parents('header').addClass('editor-hover--true');
      header.removeDataAttributes('.header .mega-menu.dropdown_container .dropdown_column');
    }, 10);
  }
  if ($parentSection.hasClass('featured-collection-section')){
    featuredCollectionSection.unload($parentSection);
    featuredCollectionSection.init();
  }
  utils.pageBannerCheck();
  var evt = document.createEvent('UIEvents');
  evt.initUIEvent('resize', true, false, window, 0);
  window.dispatchEvent(evt);
});
$(document).on('shopify:section:deselect', function(e){
  var $parentSection = $('#shopify-section-' + e.detail.sectionId);
  if ($parentSection.hasClass('mega-menu-section')){
    var megaMenuParent = $('.header .' + e.detail.sectionId).data('dropdown');
    $('a.mega-menu-parent[data-dropdown-rel="' + megaMenuParent + '"]').trigger('mouseout');
    $('a.mega-menu-parent[data-dropdown-rel="' + megaMenuParent + '"]').parents('header').removeClass('editor-hover--true');
  }
});

$(function () {
    $(".tab").filter(function () {
      return $("a", this).length > 5  
    }).append($('<a href="#">').append("show more").addClass("sidebar-toggle"));
    $(".sidebar-toggle").click(function (e) {
      e.preventDefault();
      $(".tab").toggleClass("show-all");
      var text = $(this).html();
      if (text == 'show more') {$(this).html('show less');} else {$(this).html('show more');}
    });
  });

$(function(){
  const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
  var url = window.location.href;
  if (isMobileDevice) {
    var newUrl = `whatsapp://send?text=${url}%0A%0AThought you would like this! Check out BookXcess Online, their books are all 50%-80% off all year long.`
    $('.icon-whatsapp-share').attr("href", newUrl);
  }
  $('.product-details .title').dotdotdot({truncate: 'letter',watch: 'window',height: 36,});
  if($(".product_section .description").height() >= 205 ){$(".product_section .description").after("<a href='#' class='description-toggle'>show more</a>");}
  $(".description-toggle").click(function (e){
    e.preventDefault();
    $(".product_section .description").toggleClass("show-all");
    var text = $(this).html();
    if (text == 'show more') {$(this).html('show less');} else {$(this).html('show more');}
  });
  if($('body.cart').length > 0) {	
    if($('div.list_pwp_products').length > 0) {
      var flagSwitch = 0;
      $("div.list_pwp_products").each(function( index ) {
        var pwp_monthstart = $(this).data('monthstart'),
            pwp_daystart = $(this).data('daystart'),
            pwp_hourstart = $(this).data('hourstart'),
            pwp_minutestart = $(this).data('minutestart'),
            pwp_monthend = $(this).data('monthend'),
            pwp_dayend = $(this).data('dayend'),
            pwp_hourend = $(this).data('hourend'),
            pwp_minuteend = $(this).data('minuteend'),
            currentCustom = new Date(),
            currentCustomYear = currentCustom.getFullYear(),
            currentCustomMonth = currentCustom.getMonth() + 1,
            currentCustomDay = currentCustom.getDate(),
            currentCustomHour = currentCustom.getHours(),
            currentCustomMinute = currentCustom.getMinutes(),
            pwpDateStart = new Date(currentCustomYear, pwp_monthstart, pwp_daystart, pwp_hourstart, pwp_minutestart),
            pwpDateEnd = new Date(currentCustomYear, pwp_monthend, pwp_dayend, pwp_hourend, pwp_minuteend),
            currentDateCustom = new Date(currentCustomYear, currentCustomMonth, currentCustomDay, currentCustomHour, currentCustomMinute),
            currentPwpStatus = currentDateCustom < pwpDateEnd && currentDateCustom > pwpDateStart ? 'open' : 'closed';
        if(currentPwpStatus == 'open') {flagSwitch = 1;}
        if(currentPwpStatus == 'closed') {$(this).remove();}
      });
      var pwp_image = $("div.list_pwp_products").data('image'),
          pwp_product = $("div.list_pwp_products").data('product'),
          pwp_product_id = $("div.list_pwp_products").data('productid'),
          pwp_collection = $("div.list_pwp_products").data('collectionurl'),
          pwp_reached = $("div.list_pwp_products").data('pwpreached'),
          pwp_product_threshold = $("div.list_pwp_products").data('productthreshold'),
          customPwpFake = "<img class='popuppwp_img' src='" + pwp_image + "' /><p><a href='" + pwp_collection + "'><strong><span style='color:black;'>You Are Eligible For This Promotion!</span><br>Shop Now</strong></a></p>",
          customPwpReal = "<img class='popuppwp_img' src='" + pwp_image + "' /><p><strong>Reach RM100 to get this book at RM1</strong></p>",
          flagPwp = 0, flagNonPwp = 0;
      document.addEventListener("limoniapps:discountninja:cart:updated", function (event){
        $.each(event.detail.data[0].items, function(i,v){
          if(v.Line.DiscountedPrice == 1) {flagPwp = 1;}
        });
        if(flagNonPwp == 0) {
          if(event.detail.data[0].total_discounted_price >= pwp_reached){
            $('.pwp.remodal .container').html(customPwpFake);
          } else {
            $('.pwp.remodal .container').html(customPwpReal);
          }
        } else {
          if(event.detail.data[0].total_discounted_price < pwp_product_threshold){
            $('.pwp.remodal .container').html(customPwpReal);
          }
        }
        if(flagSwitch == 1) {
          if(flagPwp == 0) {
            $('[data-remodal-id=pwp]').remodal().open();
          }
        }
      });
    }
  }
});