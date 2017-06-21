(self.AMP=self.AMP||[]).push({n:"amp-anim",v:"1497462282545",f:(function(AMP){var f;function g(a,c){function b(){}b.prototype=c.prototype;a.prototype=new b;a.prototype.constructor=a;for(var d in c)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(c,d);e&&Object.defineProperty(a,d,e)}else a[d]=c[d]};Date.now();self.log=self.log||{user:null,dev:null};var h=self.log;function l(){if(h.user)return h.user;throw Error("failed to call initLogConstructor");};var m,n="Webkit webkit Moz moz ms O o".split(" ");function p(a){var c=void 0;m||(m=Object.create(null));var b=m.display;if(!b||c){b="display";if(void 0===a.display){var d="D"+"display".slice(1);a:{for(var e=0;e<n.length;e++){var k=n[e]+d;if(void 0!==a[k]){d=k;break a}}d=""}var r=d;void 0!==a[r]&&(b=r)}c||(m.display=b)}return b}function q(a,c){if(void 0===c){var b;b=(b=p(a.style))?a.style[b]:void 0;c="none"==b}b=c?"":"none";var d=p(a.style);d&&(a.style[d]=b)};function t(a){l().assert(0<a.length,"Srcset must have at least one source");this.a=a;var c=!1,b=!1;for(a=0;a<this.a.length;a++){var d=this.a[a];l().assert((d.width||d.dpr)&&(!d.width||!d.dpr),"Either dpr or width must be specified");c=c||!!d.width;b=b||!!d.dpr}l().assert(!c||!b,"Srcset cannot have both width and dpr sources");c?this.a.sort(u):this.a.sort(v);this.h=c;this.g=b}
t.prototype.select=function(a,c){var b=-1;if(this.h)a:{for(var b=-Infinity,d=this.a.length-1;0<=d;d--){var e=this.a[d].width/c;if(e>=a){b=1.1*(a-b)<e-a&&1.2>=a/b?d+1:d;break a}b=e}b=0}else if(this.g){a=-1;b=1E6;for(d=0;d<this.a.length;d++)e=Math.abs((this.a[d].dpr||1)-c),e<b&&(b=e,a=d);b=a}return-1!=b?this.a[b]:this.getLast()};t.prototype.getLast=function(){return this.a[this.a.length-1]};t.prototype.getSources=function(){return this.a};
t.prototype.stringify=function(){for(var a=[],c=0;c<this.a.length;c++){var b=this.a[c];b.width?a.push(b.url+" "+b.width+"w"):b.dpr?a.push(b.url+" "+b.dpr+"x"):a.push(""+b.url)}return a.join(", ")};function u(a,c){l().assert(a.width!=c.width,"Duplicate width: %s",a.width);return c.width-a.width}function v(a,c){l().assert(a.dpr!=c.dpr,"Duplicate dpr: %s",a.dpr);return c.dpr-a.dpr};function w(a){AMP.BaseElement.call(this,a);this.b=new Image;this.f=null;this.c=!1}g(w,AMP.BaseElement);f=w.prototype;f.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a};
f.buildCallback=function(){this.propagateAttributes(["alt","aria-label","aria-describedby","aria-labelledby"],this.b);this.applyFillContent(this.b,!0);"img"==this.element.getAttribute("role")&&(this.element.removeAttribute("role"),l().error("AMP-ANIM","Setting role=img on amp-anim elements breaks screen readers. Please just set alt or ARIA attributes, they will be correctly propagated for the underlying <img> element."));q(this.b,!this.getPlaceholder());this.element.appendChild(this.b)};
f.isRelayoutNeeded=function(){return!0};
f.layoutCallback=function(){if(!this.f){var a;a=this.element;var c=a.getAttribute("srcset");if(c){a=c.match(/\s*(?:[\S]*)(?:\s+(?:-?(?:\d+(?:\.(?:\d+)?)?|\.\d+)[a-zA-Z]))?(?:\s*,)?/g);l().assert(0<a.length,"srcset has to have at least one source: %s",void 0);for(var c=[],b=0;b<a.length;b++){var d=a[b].trim();","==d.substr(-1)&&(d=d.substr(0,d.length-1).trim());var e=d.split(/\s+/,2);if(0!=e.length&&(1!=e.length||e[0])&&(2!=e.length||e[0]||e[1]))if(d=e[0],1==e.length||2==e.length&&!e[1])c.push({url:d,
width:void 0,dpr:1});else{var e=e[1].toLowerCase(),k=e.substring(e.length-1);"w"==k?c.push({url:d,width:parseFloat(e),dpr:void 0}):"x"==k&&c.push({url:d,width:void 0,dpr:parseFloat(e)})}}a=new t(c)}else a=l().assert(a.getAttribute("src"),'Either non-empty "srcset" or "src" attribute must be specified: %s',a),a=new t([{url:a,width:void 0,dpr:1}]);this.f=a}return x(this)};f.firstLayoutCompleted=function(){this.c=!0;y(this)};f.viewportCallback=function(){this.c&&y(this)};
f.unlayoutCallback=function(){this.b.src="";this.c=!1;return!0};function y(a){var c=a.isInViewport();a.togglePlaceholder(!c);q(a.b,c)}function x(a){if(0>=a.getLayoutWidth())return Promise.resolve();var c=a.f.select(a.getLayoutWidth(),a.getDpr()).url;if(c==a.b.getAttribute("src"))return Promise.resolve();a.b.setAttribute("src",c);return a.loadPromise(a.b).catch(function(b){if(a.b.getAttribute("src"))throw b;})}AMP.registerElement("amp-anim",w);
})});
//# sourceMappingURL=amp-anim-0.1.js.map

