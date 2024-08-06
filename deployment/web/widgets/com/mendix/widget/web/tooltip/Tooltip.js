define(["react","react-dom"],(function(e,t){"use strict";function n(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var r,o=n(e),i=n(t),a={exports:{}};
/*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
r=a,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var i=typeof o;if("string"===i||"number"===i)n.push(o);else if(Array.isArray(o)){if(o.length){var a=t.apply(null,o);a&&n.push(a)}}else if("object"===i){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var s in o)e.call(o,s)&&o[s]&&n.push(s)}}}return n.join(" ")}r.exports?(t.default=t,r.exports=t):window.classNames=t}();var s=a.exports;o.createContext(),o.createContext();var f=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},c="undefined"!=typeof window&&window.document&&window.document.createElement?o.useLayoutEffect:o.useEffect,u="top",l="bottom",p="right",d="left",m="auto",h=[u,l,p,d],v="start",g="end",y="clippingParents",b="viewport",w="popper",x="reference",O=h.reduce((function(e,t){return e.concat([t+"-"+v,t+"-"+g])}),[]),j=[].concat(h,[m]).reduce((function(e,t){return e.concat([t,t+"-"+v,t+"-"+g])}),[]),E=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function A(e){return e?(e.nodeName||"").toLowerCase():null}function M(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function k(e){return e instanceof M(e).Element||e instanceof Element}function S(e){return e instanceof M(e).HTMLElement||e instanceof HTMLElement}function D(e){return"undefined"!=typeof ShadowRoot&&(e instanceof M(e).ShadowRoot||e instanceof ShadowRoot)}var L={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];S(o)&&A(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});S(r)&&A(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function P(e){return e.split("-")[0]}var B=Math.max,W=Math.min,R=Math.round;function H(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function C(){return!/^((?!chrome|android).)*safari/i.test(H())}function T(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&S(e)&&(o=e.offsetWidth>0&&R(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&R(r.height)/e.offsetHeight||1);var a=(k(e)?M(e):window).visualViewport,s=!C()&&n,f=(r.left+(s&&a?a.offsetLeft:0))/o,c=(r.top+(s&&a?a.offsetTop:0))/i,u=r.width/o,l=r.height/i;return{width:u,height:l,top:c,right:f+u,bottom:c+l,left:f,x:f,y:c}}function V(e){var t=T(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function N(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&D(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function q(e){return M(e).getComputedStyle(e)}function F(e){return["table","td","th"].indexOf(A(e))>=0}function U(e){return((k(e)?e.ownerDocument:e.document)||window.document).documentElement}function _(e){return"html"===A(e)?e:e.assignedSlot||e.parentNode||(D(e)?e.host:null)||U(e)}function z(e){return S(e)&&"fixed"!==q(e).position?e.offsetParent:null}function I(e){for(var t=M(e),n=z(e);n&&F(n)&&"static"===q(n).position;)n=z(n);return n&&("html"===A(n)||"body"===A(n)&&"static"===q(n).position)?t:n||function(e){var t=/firefox/i.test(H());if(/Trident/i.test(H())&&S(e)&&"fixed"===q(e).position)return null;var n=_(e);for(D(n)&&(n=n.host);S(n)&&["html","body"].indexOf(A(n))<0;){var r=q(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function X(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Y(e,t,n){return B(e,W(t,n))}function $(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function G(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var J=function(e,t){return $("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:G(e,h))};var K={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=P(n.placement),f=X(s),c=[d,p].indexOf(s)>=0?"height":"width";if(i&&a){var m=J(o.padding,n),h=V(i),v="y"===f?u:d,g="y"===f?l:p,y=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],b=a[f]-n.rects.reference[f],w=I(i),x=w?"y"===f?w.clientHeight||0:w.clientWidth||0:0,O=y/2-b/2,j=m[v],E=x-h[c]-m[g],A=x/2-h[c]/2+O,M=Y(j,A,E),k=f;n.modifiersData[r]=((t={})[k]=M,t.centerOffset=M-A,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&N(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Q(e){return e.split("-")[1]}var Z={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ee(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,f=e.gpuAcceleration,c=e.adaptive,m=e.roundOffsets,h=e.isFixed,v=a.x,y=void 0===v?0:v,b=a.y,w=void 0===b?0:b,x="function"==typeof m?m({x:y,y:w}):{x:y,y:w};y=x.x,w=x.y;var O=a.hasOwnProperty("x"),j=a.hasOwnProperty("y"),E=d,A=u,k=window;if(c){var S=I(n),D="clientHeight",L="clientWidth";if(S===M(n)&&"static"!==q(S=U(n)).position&&"absolute"===s&&(D="scrollHeight",L="scrollWidth"),o===u||(o===d||o===p)&&i===g)A=l,w-=(h&&S===k&&k.visualViewport?k.visualViewport.height:S[D])-r.height,w*=f?1:-1;if(o===d||(o===u||o===l)&&i===g)E=p,y-=(h&&S===k&&k.visualViewport?k.visualViewport.width:S[L])-r.width,y*=f?1:-1}var P,B=Object.assign({position:s},c&&Z),W=!0===m?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:R(n*o)/o||0,y:R(r*o)/o||0}}({x:y,y:w},M(n)):{x:y,y:w};return y=W.x,w=W.y,f?Object.assign({},B,((P={})[A]=j?"0":"",P[E]=O?"0":"",P.transform=(k.devicePixelRatio||1)<=1?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",P)):Object.assign({},B,((t={})[A]=j?w+"px":"",t[E]=O?y+"px":"",t.transform="",t))}var te={passive:!0};var ne={left:"right",right:"left",bottom:"top",top:"bottom"};function re(e){return e.replace(/left|right|bottom|top/g,(function(e){return ne[e]}))}var oe={start:"end",end:"start"};function ie(e){return e.replace(/start|end/g,(function(e){return oe[e]}))}function ae(e){var t=M(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function se(e){return T(U(e)).left+ae(e).scrollLeft}function fe(e){var t=q(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ce(e){return["html","body","#document"].indexOf(A(e))>=0?e.ownerDocument.body:S(e)&&fe(e)?e:ce(_(e))}function ue(e,t){var n;void 0===t&&(t=[]);var r=ce(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=M(r),a=o?[i].concat(i.visualViewport||[],fe(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(ue(_(a)))}function le(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function pe(e,t,n){return t===b?le(function(e,t){var n=M(e),r=U(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;if(o){i=o.width,a=o.height;var c=C();(c||!c&&"fixed"===t)&&(s=o.offsetLeft,f=o.offsetTop)}return{width:i,height:a,x:s+se(e),y:f}}(e,n)):k(t)?function(e,t){var n=T(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):le(function(e){var t,n=U(e),r=ae(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=B(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=B(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+se(e),f=-r.scrollTop;return"rtl"===q(o||n).direction&&(s+=B(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(U(e)))}function de(e,t,n,r){var o="clippingParents"===t?function(e){var t=ue(_(e)),n=["absolute","fixed"].indexOf(q(e).position)>=0&&S(e)?I(e):e;return k(n)?t.filter((function(e){return k(e)&&N(e,n)&&"body"!==A(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=pe(e,n,r);return t.top=B(o.top,t.top),t.right=W(o.right,t.right),t.bottom=W(o.bottom,t.bottom),t.left=B(o.left,t.left),t}),pe(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function me(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?P(o):null,a=o?Q(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case u:t={x:s,y:n.y-r.height};break;case l:t={x:s,y:n.y+n.height};break;case p:t={x:n.x+n.width,y:f};break;case d:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?X(i):null;if(null!=c){var m="y"===c?"height":"width";switch(a){case v:t[c]=t[c]-(n[m]/2-r[m]/2);break;case g:t[c]=t[c]+(n[m]/2-r[m]/2)}}return t}function he(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.strategy,a=void 0===i?e.strategy:i,s=n.boundary,f=void 0===s?y:s,c=n.rootBoundary,d=void 0===c?b:c,m=n.elementContext,v=void 0===m?w:m,g=n.altBoundary,O=void 0!==g&&g,j=n.padding,E=void 0===j?0:j,A=$("number"!=typeof E?E:G(E,h)),M=v===w?x:w,S=e.rects.popper,D=e.elements[O?M:v],L=de(k(D)?D:D.contextElement||U(e.elements.popper),f,d,a),P=T(e.elements.reference),B=me({reference:P,element:S,strategy:"absolute",placement:o}),W=le(Object.assign({},S,B)),R=v===w?W:P,H={top:L.top-R.top+A.top,bottom:R.bottom-L.bottom+A.bottom,left:L.left-R.left+A.left,right:R.right-L.right+A.right},C=e.modifiersData.offset;if(v===w&&C){var V=C[o];Object.keys(H).forEach((function(e){var t=[p,l].indexOf(e)>=0?1:-1,n=[u,l].indexOf(e)>=0?"y":"x";H[e]+=V[n]*t}))}return H}function ve(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?j:f,u=Q(r),l=u?s?O:O.filter((function(e){return Q(e)===u})):h,p=l.filter((function(e){return c.indexOf(e)>=0}));0===p.length&&(p=l);var d=p.reduce((function(t,n){return t[n]=he(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[P(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}var ge={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,h=n.boundary,g=n.rootBoundary,y=n.altBoundary,b=n.flipVariations,w=void 0===b||b,x=n.allowedAutoPlacements,O=t.options.placement,j=P(O),E=f||(j===O||!w?[re(O)]:function(e){if(P(e)===m)return[];var t=re(e);return[ie(e),t,ie(t)]}(O)),A=[O].concat(E).reduce((function(e,n){return e.concat(P(n)===m?ve(t,{placement:n,boundary:h,rootBoundary:g,padding:c,flipVariations:w,allowedAutoPlacements:x}):n)}),[]),M=t.rects.reference,k=t.rects.popper,S=new Map,D=!0,L=A[0],B=0;B<A.length;B++){var W=A[B],R=P(W),H=Q(W)===v,C=[u,l].indexOf(R)>=0,T=C?"width":"height",V=he(t,{placement:W,boundary:h,rootBoundary:g,altBoundary:y,padding:c}),N=C?H?p:d:H?l:u;M[T]>k[T]&&(N=re(N));var q=re(N),F=[];if(i&&F.push(V[R]<=0),s&&F.push(V[N]<=0,V[q]<=0),F.every((function(e){return e}))){L=W,D=!1;break}S.set(W,F)}if(D)for(var U=function(e){var t=A.find((function(t){var n=S.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return L=t,"break"},_=w?3:1;_>0;_--){if("break"===U(_))break}t.placement!==L&&(t.modifiersData[r]._skip=!0,t.placement=L,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ye(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function be(e){return[u,p,l,d].some((function(t){return e[t]>=0}))}var we={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=j.reduce((function(e,n){return e[n]=function(e,t,n){var r=P(e),o=[d,u].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[d,p].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}};var xe={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,c=n.rootBoundary,m=n.altBoundary,h=n.padding,g=n.tether,y=void 0===g||g,b=n.tetherOffset,w=void 0===b?0:b,x=he(t,{boundary:f,rootBoundary:c,padding:h,altBoundary:m}),O=P(t.placement),j=Q(t.placement),E=!j,A=X(O),M="x"===A?"y":"x",k=t.modifiersData.popperOffsets,S=t.rects.reference,D=t.rects.popper,L="function"==typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,R="number"==typeof L?{mainAxis:L,altAxis:L}:Object.assign({mainAxis:0,altAxis:0},L),H=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,C={x:0,y:0};if(k){if(i){var T,N="y"===A?u:d,q="y"===A?l:p,F="y"===A?"height":"width",U=k[A],_=U+x[N],z=U-x[q],$=y?-D[F]/2:0,G=j===v?S[F]:D[F],J=j===v?-D[F]:-S[F],K=t.elements.arrow,Z=y&&K?V(K):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[N],ne=ee[q],re=Y(0,S[F],Z[F]),oe=E?S[F]/2-$-re-te-R.mainAxis:G-re-te-R.mainAxis,ie=E?-S[F]/2+$+re+ne+R.mainAxis:J+re+ne+R.mainAxis,ae=t.elements.arrow&&I(t.elements.arrow),se=ae?"y"===A?ae.clientTop||0:ae.clientLeft||0:0,fe=null!=(T=null==H?void 0:H[A])?T:0,ce=U+ie-fe,ue=Y(y?W(_,U+oe-fe-se):_,U,y?B(z,ce):z);k[A]=ue,C[A]=ue-U}if(s){var le,pe="x"===A?u:d,de="x"===A?l:p,me=k[M],ve="y"===M?"height":"width",ge=me+x[pe],ye=me-x[de],be=-1!==[u,d].indexOf(O),we=null!=(le=null==H?void 0:H[M])?le:0,xe=be?ge:me-S[ve]-D[ve]-we+R.altAxis,Oe=be?me+S[ve]+D[ve]-we-R.altAxis:ye,je=y&&be?function(e,t,n){var r=Y(e,t,n);return r>n?n:r}(xe,me,Oe):Y(y?xe:ge,me,y?Oe:ye);k[M]=je,C[M]=je-me}t.modifiersData[r]=C}},requiresIfExists:["offset"]};function Oe(e,t,n){void 0===n&&(n=!1);var r,o,i=S(t),a=S(t)&&function(e){var t=e.getBoundingClientRect(),n=R(t.width)/e.offsetWidth||1,r=R(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),s=U(t),f=T(e,a,n),c={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(i||!i&&!n)&&(("body"!==A(t)||fe(s))&&(c=(r=t)!==M(r)&&S(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:ae(r)),S(t)?((u=T(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):s&&(u.x=se(s))),{x:f.left+c.scrollLeft-u.x,y:f.top+c.scrollTop-u.y,width:f.width,height:f.height}}function je(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var Ee={placement:"bottom",modifiers:[],strategy:"absolute"};function Ae(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Me(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?Ee:o;return function(e,t,n){void 0===n&&(n=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ee,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],c=!1,u={state:s,setOptions:function(n){var o="function"==typeof n?n(s.options):n;l(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:k(e)?ue(e):e.contextElement?ue(e.contextElement):[],popper:ue(t)};var a,c,p=function(e){var t=je(e);return E.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(r,s.options.modifiers),c=a.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(c).map((function(e){return c[e]}))));return s.orderedModifiers=p.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:u,options:r}),a=function(){};f.push(i||a)}})),u.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference,n=e.popper;if(Ae(t,n)){s.rects={reference:Oe(t,I(n),"fixed"===s.options.strategy),popper:V(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,f=void 0===a?{}:a,l=o.name;"function"==typeof i&&(s=i({state:s,options:f,name:l,instance:u})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){u.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){l(),c=!0}};if(!Ae(e,t))return u;function l(){f.forEach((function(e){return e()})),f=[]}return u.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var ke=Me({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=M(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,te)})),s&&f.addEventListener("resize",n.update,te),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,te)})),s&&f.removeEventListener("resize",n.update,te)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=me({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:P(t.placement),variation:Q(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ee(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ee(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},L,we,ge,xe,K,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=he(t,{elementContext:"reference"}),s=he(t,{altBoundary:!0}),f=ye(a,r),c=ye(s,o,i),u=be(f),l=be(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":l})}}]}),Se="undefined"!=typeof Element,De="function"==typeof Map,Le="function"==typeof Set,Pe="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function Be(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var n,r,o,i;if(Array.isArray(e)){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(!Be(e[r],t[r]))return!1;return!0}if(De&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;for(i=e.entries();!(r=i.next()).done;)if(!Be(r.value[1],t.get(r.value[0])))return!1;return!0}if(Le&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(Pe&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((n=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;if(Se&&e instanceof Element)return!1;for(r=n;0!=r--;)if(("_owner"!==o[r]&&"__v"!==o[r]&&"__o"!==o[r]||!e.$$typeof)&&!Be(e[o[r]],t[o[r]]))return!1;return!0}return e!=e&&t!=t}var We=function(e,t){try{return Be(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}},Re=[];const He=t=>{const{trigger:n,htmlMessage:r,textMessage:a,openOn:u,position:l,preview:p,renderMethod:d}=t,m=e.useRef(null),[h,v]=e.useState(null!=p&&p),[g,y]=e.useState(null),[b,w]=e.useState(null),[x,O]=e.useState(null),{styles:j,attributes:E}=function(e,t,n){void 0===n&&(n={});var r=o.useRef(null),a={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||Re},s=o.useState({styles:{popper:{position:a.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),u=s[0],l=s[1],p=o.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);i.flushSync((function(){l({styles:f(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:f(n.map((function(e){return[e,t.attributes[e]]})))})}))},requires:["computeStyles"]}}),[]),d=o.useMemo((function(){var e={onFirstUpdate:a.onFirstUpdate,placement:a.placement,strategy:a.strategy,modifiers:[].concat(a.modifiers,[p,{name:"applyStyles",enabled:!1}])};return We(r.current,e)?r.current||e:(r.current=e,e)}),[a.onFirstUpdate,a.placement,a.strategy,a.modifiers,p]),m=o.useRef();return c((function(){m.current&&m.current.setOptions(d)}),[d]),c((function(){if(null!=e&&null!=t){var r=(n.createPopper||ke)(e,t,d);return m.current=r,function(){r.destroy(),m.current=null}}}),[e,t,n.createPopper]),{state:m.current?m.current.state:null,styles:u.styles,attributes:u.attributes,update:m.current?m.current.update:null,forceUpdate:m.current?m.current.forceUpdate:null}}(g,b,{placement:l,modifiers:[{name:"arrow",options:{element:x,padding:5}},{name:"flip",options:{fallbackPlacements:["top","right","bottom","left"]}},{name:"offset",options:{offset:[0,8]}}]});var A,M;A=[m],M=()=>v(!1),e.useEffect((()=>{const e=e=>{if(Array.isArray(A)){if(A.some((t=>!t.current||t.current.contains(e.target))))return}else if(!A.current||A.current.contains(e.target))return;M()};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[A,M]);const k=e.useCallback((()=>v(!0)),[]),S=e.useCallback((()=>v(!1)),[]),D=e.useCallback((()=>v((e=>!e))),[]);return e.createElement("div",{className:s(t.class,"widget-tooltip","widget-tooltip-".concat(l)),ref:m},(()=>{let t;switch(u){case"click":t={onClick:D};break;case"hover":t={onMouseEnter:k,onMouseLeave:S};break;case"hoverFocus":t={onMouseEnter:k,onMouseLeave:S,onFocus:k,onBlur:S}}return e.createElement("div",{className:"widget-tooltip-trigger",ref:y,...p?void 0:t},n)})(),h?e.createElement("div",{...E.popper,className:"widget-tooltip-content",ref:w,style:j.popper,role:"tooltip"},"text"===d?a:r,e.createElement("div",{...E.arrow,className:"widget-tooltip-arrow",ref:O,style:j.arrow})):null)},Ce=(e,t)=>"".concat(e).concat("none"===t?"":"-"+t);return function(t){var n;return e.createElement(He,{class:t.class,htmlMessage:t.htmlMessage,name:t.name,openOn:t.openOn,position:Ce(t.tooltipPosition,t.arrowPosition),renderMethod:t.renderMethod,style:t.style,trigger:t.trigger,textMessage:null===(n=t.textMessage)||void 0===n?void 0:n.value,tabIndex:t.tabIndex})}}));