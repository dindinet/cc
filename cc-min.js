(function(e){if(!!e.cookieChoices){return e.cookieChoices}var t=e.document;var n="textContent"in t.body;var r=function(){function s(e,n,i,s){var o="position:fixed;width:100%;background-color:#eee;"+"margin:0; left:0; top:0;padding:4px;z-index:1000;text-align:center;";var u=t.createElement("div");u.id=r;u.style.cssText=o;u.appendChild(a(e));if(!!i&&!!s){u.appendChild(l(i,s))}u.appendChild(f(n));return u}function o(e,n,i,s){var o="position:fixed;width:100%;height:100%;z-index:999;"+"top:0;left:0;opacity:0.5;filter:alpha(opacity=50);"+"background-color:#ccc;";var u="z-index:2000;position:fixed;left:50%;top:50%";var c="position:relative;left:-50%;margin-top:-25%;"+"background-color:#fff;padding:20px;box-shadow:4px 4px 25px #888;";var h=t.createElement("div");h.id=r;var p=t.createElement("div");p.style.cssText=o;var d=t.createElement("div");d.style.cssText=c;var v=t.createElement("div");v.style.cssText=u;var m=f(n);m.style.display="block";m.style.textAlign="right";m.style.marginTop="8px";d.appendChild(a(e));if(!!i&&!!s){d.appendChild(l(i,s))}d.appendChild(m);v.appendChild(d);h.appendChild(p);h.appendChild(v);return h}function u(e,t){if(n){e.textContent=t}else{e.innerText=t}}function a(e){var n=t.createElement("span");u(n,e);return n}function f(e){var n=t.createElement("a");u(n,e);n.id=i;n.href="#";n.style.marginLeft="24px";return n}function l(e,n){var r=t.createElement("a");u(r,e);r.href=n;r.target="_blank";r.style.marginLeft="8px";return r}function c(){m();v();return false}function h(e,n,r,u,a){v();var f=a?o(e,n,r,u):s(e,n,r,u);var l=t.createDocumentFragment();l.appendChild(f);t.body.appendChild(l.cloneNode(true));t.getElementById(i).onclick=c}function p(e,t,n,r){h(e,t,n,r,false)}function d(e,t,n,r){h(e,t,n,r,true)}function v(){var e=t.getElementById(r);if(e!=null){e.parentNode.removeChild(e)}}function m(){var n=new Date;n.setFullYear(n.getFullYear()+1);t.cookie=e+"=y; expires="+n.toGMTString()}function g(){return!t.cookie.match(new RegExp(e+"=([^;]+)"))}var e="displayCookieConsent";var r="cookieChoiceInfo";var i="cookieChoiceDismiss";var y={};y.showCookieConsentBar=p;y.showCookieConsentDialog=d;return y}();e.cookieChoices=r;return r})(this)
