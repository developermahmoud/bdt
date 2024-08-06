import*as e from"react";import{useEffect as t,useRef as n,useState as r,useCallback as o,createElement as i}from"react";import*as a from"react-dom";var s,f={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/s=f,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var i=typeof o;if("string"===i||"number"===i)n.push(o);else if(Array.isArray(o)){if(o.length){var a=t.apply(null,o);a&&n.push(a)}}else if("object"===i){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var s in o)e.call(o,s)&&o[s]&&n.push(s)}}}return n.join(" ")}s.exports?(t.default=t,s.exports=t):window.classNames=t}();var c=f.exports;e.createContext(),e.createContext();var u=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},p="undefined"!=typeof window&&window.document&&window.document.createElement?e.useLayoutEffect:e.useEffect,l="top",d="bottom",m="right",h="left",v="auto",g=[l,d,m,h],y="start",b="end",w="clippingParents",x="viewport",O="popper",j="reference",E=g.reduce((function(e,t){return e.concat([t+"-"+y,t+"-"+b])}),[]),A=[].concat(g,[v]).reduce((function(e,t){return e.concat([t,t+"-"+y,t+"-"+b])}),[]),M=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function k(e){return e?(e.nodeName||"").toLowerCase():null}function D(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function S(e){return e instanceof D(e).Element||e instanceof Element}function L(e){return e instanceof D(e).HTMLElement||e instanceof HTMLElement}function P(e){return"undefined"!=typeof ShadowRoot&&(e instanceof D(e).ShadowRoot||e instanceof ShadowRoot)}var B={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];L(o)&&k(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});L(r)&&k(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function W(e){return e.split("-")[0]}var R=Math.max,H=Math.min,T=Math.round;function V(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function C(){return!/^((?!chrome|android).)*safari/i.test(V())}function N(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&L(e)&&(o=e.offsetWidth>0&&T(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&T(r.height)/e.offsetHeight||1);var a=(S(e)?D(e):window).visualViewport,s=!C()&&n,f=(r.left+(s&&a?a.offsetLeft:0))/o,c=(r.top+(s&&a?a.offsetTop:0))/i,u=r.width/o,p=r.height/i;return{width:u,height:p,top:c,right:f+u,bottom:c+p,left:f,x:f,y:c}}function q(e){var t=N(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function F(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&P(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function U(e){return D(e).getComputedStyle(e)}function _(e){return["table","td","th"].indexOf(k(e))>=0}function z(e){return((S(e)?e.ownerDocument:e.document)||window.document).documentElement}function I(e){return"html"===k(e)?e:e.assignedSlot||e.parentNode||(P(e)?e.host:null)||z(e)}function X(e){return L(e)&&"fixed"!==U(e).position?e.offsetParent:null}function Y(e){for(var t=D(e),n=X(e);n&&_(n)&&"static"===U(n).position;)n=X(n);return n&&("html"===k(n)||"body"===k(n)&&"static"===U(n).position)?t:n||function(e){var t=/firefox/i.test(V());if(/Trident/i.test(V())&&L(e)&&"fixed"===U(e).position)return null;var n=I(e);for(P(n)&&(n=n.host);L(n)&&["html","body"].indexOf(k(n))<0;){var r=U(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function $(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function G(e,t,n){return R(e,H(t,n))}function J(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function K(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var Q=function(e,t){return J("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:K(e,g))};var Z={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=W(n.placement),f=$(s),c=[h,m].indexOf(s)>=0?"height":"width";if(i&&a){var u=Q(o.padding,n),p=q(i),v="y"===f?l:h,g="y"===f?d:m,y=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],b=a[f]-n.rects.reference[f],w=Y(i),x=w?"y"===f?w.clientHeight||0:w.clientWidth||0:0,O=y/2-b/2,j=u[v],E=x-p[c]-u[g],A=x/2-p[c]/2+O,M=G(j,A,E),k=f;n.modifiersData[r]=((t={})[k]=M,t.centerOffset=M-A,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&F(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ee(e){return e.split("-")[1]}var te={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ne(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,f=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,p=e.isFixed,v=a.x,g=void 0===v?0:v,y=a.y,w=void 0===y?0:y,x="function"==typeof u?u({x:g,y:w}):{x:g,y:w};g=x.x,w=x.y;var O=a.hasOwnProperty("x"),j=a.hasOwnProperty("y"),E=h,A=l,M=window;if(c){var k=Y(n),S="clientHeight",L="clientWidth";if(k===D(n)&&"static"!==U(k=z(n)).position&&"absolute"===s&&(S="scrollHeight",L="scrollWidth"),o===l||(o===h||o===m)&&i===b)A=d,w-=(p&&k===M&&M.visualViewport?M.visualViewport.height:k[S])-r.height,w*=f?1:-1;if(o===h||(o===l||o===d)&&i===b)E=m,g-=(p&&k===M&&M.visualViewport?M.visualViewport.width:k[L])-r.width,g*=f?1:-1}var P,B=Object.assign({position:s},c&&te),W=!0===u?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:T(n*o)/o||0,y:T(r*o)/o||0}}({x:g,y:w},D(n)):{x:g,y:w};return g=W.x,w=W.y,f?Object.assign({},B,((P={})[A]=j?"0":"",P[E]=O?"0":"",P.transform=(M.devicePixelRatio||1)<=1?"translate("+g+"px, "+w+"px)":"translate3d("+g+"px, "+w+"px, 0)",P)):Object.assign({},B,((t={})[A]=j?w+"px":"",t[E]=O?g+"px":"",t.transform="",t))}var re={passive:!0};var oe={left:"right",right:"left",bottom:"top",top:"bottom"};function ie(e){return e.replace(/left|right|bottom|top/g,(function(e){return oe[e]}))}var ae={start:"end",end:"start"};function se(e){return e.replace(/start|end/g,(function(e){return ae[e]}))}function fe(e){var t=D(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ce(e){return N(z(e)).left+fe(e).scrollLeft}function ue(e){var t=U(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function pe(e){return["html","body","#document"].indexOf(k(e))>=0?e.ownerDocument.body:L(e)&&ue(e)?e:pe(I(e))}function le(e,t){var n;void 0===t&&(t=[]);var r=pe(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=D(r),a=o?[i].concat(i.visualViewport||[],ue(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(le(I(a)))}function de(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function me(e,t,n){return t===x?de(function(e,t){var n=D(e),r=z(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;if(o){i=o.width,a=o.height;var c=C();(c||!c&&"fixed"===t)&&(s=o.offsetLeft,f=o.offsetTop)}return{width:i,height:a,x:s+ce(e),y:f}}(e,n)):S(t)?function(e,t){var n=N(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):de(function(e){var t,n=z(e),r=fe(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=R(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=R(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+ce(e),f=-r.scrollTop;return"rtl"===U(o||n).direction&&(s+=R(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(z(e)))}function he(e,t,n,r){var o="clippingParents"===t?function(e){var t=le(I(e)),n=["absolute","fixed"].indexOf(U(e).position)>=0&&L(e)?Y(e):e;return S(n)?t.filter((function(e){return S(e)&&F(e,n)&&"body"!==k(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=me(e,n,r);return t.top=R(o.top,t.top),t.right=H(o.right,t.right),t.bottom=H(o.bottom,t.bottom),t.left=R(o.left,t.left),t}),me(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ve(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?W(o):null,a=o?ee(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case l:t={x:s,y:n.y-r.height};break;case d:t={x:s,y:n.y+n.height};break;case m:t={x:n.x+n.width,y:f};break;case h:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?$(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case y:t[c]=t[c]-(n[u]/2-r[u]/2);break;case b:t[c]=t[c]+(n[u]/2-r[u]/2)}}return t}function ge(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.strategy,a=void 0===i?e.strategy:i,s=n.boundary,f=void 0===s?w:s,c=n.rootBoundary,u=void 0===c?x:c,p=n.elementContext,h=void 0===p?O:p,v=n.altBoundary,y=void 0!==v&&v,b=n.padding,E=void 0===b?0:b,A=J("number"!=typeof E?E:K(E,g)),M=h===O?j:O,k=e.rects.popper,D=e.elements[y?M:h],L=he(S(D)?D:D.contextElement||z(e.elements.popper),f,u,a),P=N(e.elements.reference),B=ve({reference:P,element:k,strategy:"absolute",placement:o}),W=de(Object.assign({},k,B)),R=h===O?W:P,H={top:L.top-R.top+A.top,bottom:R.bottom-L.bottom+A.bottom,left:L.left-R.left+A.left,right:R.right-L.right+A.right},T=e.modifiersData.offset;if(h===O&&T){var V=T[o];Object.keys(H).forEach((function(e){var t=[m,d].indexOf(e)>=0?1:-1,n=[l,d].indexOf(e)>=0?"y":"x";H[e]+=V[n]*t}))}return H}function ye(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?A:f,u=ee(r),p=u?s?E:E.filter((function(e){return ee(e)===u})):g,l=p.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=p);var d=l.reduce((function(t,n){return t[n]=ge(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[W(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}var be={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,u=n.boundary,p=n.rootBoundary,g=n.altBoundary,b=n.flipVariations,w=void 0===b||b,x=n.allowedAutoPlacements,O=t.options.placement,j=W(O),E=f||(j===O||!w?[ie(O)]:function(e){if(W(e)===v)return[];var t=ie(e);return[se(e),t,se(t)]}(O)),A=[O].concat(E).reduce((function(e,n){return e.concat(W(n)===v?ye(t,{placement:n,boundary:u,rootBoundary:p,padding:c,flipVariations:w,allowedAutoPlacements:x}):n)}),[]),M=t.rects.reference,k=t.rects.popper,D=new Map,S=!0,L=A[0],P=0;P<A.length;P++){var B=A[P],R=W(B),H=ee(B)===y,T=[l,d].indexOf(R)>=0,V=T?"width":"height",C=ge(t,{placement:B,boundary:u,rootBoundary:p,altBoundary:g,padding:c}),N=T?H?m:h:H?d:l;M[V]>k[V]&&(N=ie(N));var q=ie(N),F=[];if(i&&F.push(C[R]<=0),s&&F.push(C[N]<=0,C[q]<=0),F.every((function(e){return e}))){L=B,S=!1;break}D.set(B,F)}if(S)for(var U=function(e){var t=A.find((function(t){var n=D.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return L=t,"break"},_=w?3:1;_>0;_--){if("break"===U(_))break}t.placement!==L&&(t.modifiersData[r]._skip=!0,t.placement=L,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function we(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function xe(e){return[l,m,d,h].some((function(t){return e[t]>=0}))}var Oe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=A.reduce((function(e,n){return e[n]=function(e,t,n){var r=W(e),o=[h,l].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[h,m].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}};var je={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,c=n.rootBoundary,u=n.altBoundary,p=n.padding,v=n.tether,g=void 0===v||v,b=n.tetherOffset,w=void 0===b?0:b,x=ge(t,{boundary:f,rootBoundary:c,padding:p,altBoundary:u}),O=W(t.placement),j=ee(t.placement),E=!j,A=$(O),M="x"===A?"y":"x",k=t.modifiersData.popperOffsets,D=t.rects.reference,S=t.rects.popper,L="function"==typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,P="number"==typeof L?{mainAxis:L,altAxis:L}:Object.assign({mainAxis:0,altAxis:0},L),B=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,T={x:0,y:0};if(k){if(i){var V,C="y"===A?l:h,N="y"===A?d:m,F="y"===A?"height":"width",U=k[A],_=U+x[C],z=U-x[N],I=g?-S[F]/2:0,X=j===y?D[F]:S[F],J=j===y?-S[F]:-D[F],K=t.elements.arrow,Q=g&&K?q(K):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=Z[C],ne=Z[N],re=G(0,D[F],Q[F]),oe=E?D[F]/2-I-re-te-P.mainAxis:X-re-te-P.mainAxis,ie=E?-D[F]/2+I+re+ne+P.mainAxis:J+re+ne+P.mainAxis,ae=t.elements.arrow&&Y(t.elements.arrow),se=ae?"y"===A?ae.clientTop||0:ae.clientLeft||0:0,fe=null!=(V=null==B?void 0:B[A])?V:0,ce=U+ie-fe,ue=G(g?H(_,U+oe-fe-se):_,U,g?R(z,ce):z);k[A]=ue,T[A]=ue-U}if(s){var pe,le="x"===A?l:h,de="x"===A?d:m,me=k[M],he="y"===M?"height":"width",ve=me+x[le],ye=me-x[de],be=-1!==[l,h].indexOf(O),we=null!=(pe=null==B?void 0:B[M])?pe:0,xe=be?ve:me-D[he]-S[he]-we+P.altAxis,Oe=be?me+D[he]+S[he]-we-P.altAxis:ye,je=g&&be?function(e,t,n){var r=G(e,t,n);return r>n?n:r}(xe,me,Oe):G(g?xe:ve,me,g?Oe:ye);k[M]=je,T[M]=je-me}t.modifiersData[r]=T}},requiresIfExists:["offset"]};function Ee(e,t,n){void 0===n&&(n=!1);var r,o,i=L(t),a=L(t)&&function(e){var t=e.getBoundingClientRect(),n=T(t.width)/e.offsetWidth||1,r=T(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),s=z(t),f=N(e,a,n),c={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(i||!i&&!n)&&(("body"!==k(t)||ue(s))&&(c=(r=t)!==D(r)&&L(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:fe(r)),L(t)?((u=N(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):s&&(u.x=ce(s))),{x:f.left+c.scrollLeft-u.x,y:f.top+c.scrollTop-u.y,width:f.width,height:f.height}}function Ae(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var Me={placement:"bottom",modifiers:[],strategy:"absolute"};function ke(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function De(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?Me:o;return function(e,t,n){void 0===n&&(n=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},Me,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],c=!1,u={state:s,setOptions:function(n){var o="function"==typeof n?n(s.options):n;p(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:S(e)?le(e):e.contextElement?le(e.contextElement):[],popper:le(t)};var a,c,l=function(e){var t=Ae(e);return M.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(r,s.options.modifiers),c=a.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(c).map((function(e){return c[e]}))));return s.orderedModifiers=l.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:u,options:r}),a=function(){};f.push(i||a)}})),u.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference,n=e.popper;if(ke(t,n)){s.rects={reference:Ee(t,Y(n),"fixed"===s.options.strategy),popper:q(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,f=void 0===a?{}:a,p=o.name;"function"==typeof i&&(s=i({state:s,options:f,name:p,instance:u})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){u.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){p(),c=!0}};if(!ke(e,t))return u;function p(){f.forEach((function(e){return e()})),f=[]}return u.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var Se=De({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=D(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,re)})),s&&f.addEventListener("resize",n.update,re),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,re)})),s&&f.removeEventListener("resize",n.update,re)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ve({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:W(t.placement),variation:ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ne(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ne(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},B,Oe,be,je,Z,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ge(t,{elementContext:"reference"}),s=ge(t,{altBoundary:!0}),f=we(a,r),c=we(s,o,i),u=xe(f),p=xe(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}}]}),Le="undefined"!=typeof Element,Pe="function"==typeof Map,Be="function"==typeof Set,We="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function Re(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var n,r,o,i;if(Array.isArray(e)){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(!Re(e[r],t[r]))return!1;return!0}if(Pe&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;for(i=e.entries();!(r=i.next()).done;)if(!Re(r.value[1],t.get(r.value[0])))return!1;return!0}if(Be&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(We&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((n=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;if(Le&&e instanceof Element)return!1;for(r=n;0!=r--;)if(("_owner"!==o[r]&&"__v"!==o[r]&&"__o"!==o[r]||!e.$$typeof)&&!Re(e[o[r]],t[o[r]]))return!1;return!0}return e!=e&&t!=t}var He=function(e,t){try{return Re(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}},Te=[];const Ve=s=>{const{trigger:f,htmlMessage:l,textMessage:d,openOn:m,position:h,preview:v,renderMethod:g}=s,y=n(null),[b,w]=r(null!=v&&v),[x,O]=r(null),[j,E]=r(null),[A,M]=r(null),{styles:k,attributes:D}=function(t,n,r){void 0===r&&(r={});var o=e.useRef(null),i={onFirstUpdate:r.onFirstUpdate,placement:r.placement||"bottom",strategy:r.strategy||"absolute",modifiers:r.modifiers||Te},s=e.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),f=s[0],c=s[1],l=e.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);a.flushSync((function(){c({styles:u(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:u(n.map((function(e){return[e,t.attributes[e]]})))})}))},requires:["computeStyles"]}}),[]),d=e.useMemo((function(){var e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[l,{name:"applyStyles",enabled:!1}])};return He(o.current,e)?o.current||e:(o.current=e,e)}),[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,l]),m=e.useRef();return p((function(){m.current&&m.current.setOptions(d)}),[d]),p((function(){if(null!=t&&null!=n){var e=(r.createPopper||Se)(t,n,d);return m.current=e,function(){e.destroy(),m.current=null}}}),[t,n,r.createPopper]),{state:m.current?m.current.state:null,styles:f.styles,attributes:f.attributes,update:m.current?m.current.update:null,forceUpdate:m.current?m.current.forceUpdate:null}}(x,j,{placement:h,modifiers:[{name:"arrow",options:{element:A,padding:5}},{name:"flip",options:{fallbackPlacements:["top","right","bottom","left"]}},{name:"offset",options:{offset:[0,8]}}]});var S,L;t((()=>{const e=e=>{if(Array.isArray(S)){if(S.some((t=>!t.current||t.current.contains(e.target))))return}else if(!S.current||S.current.contains(e.target))return;L()};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[S=[y],L=()=>w(!1)]);const P=o((()=>w(!0)),[]),B=o((()=>w(!1)),[]),W=o((()=>w((e=>!e))),[]);return i("div",{className:c(s.class,"widget-tooltip","widget-tooltip-".concat(h)),ref:y},(()=>{let e;switch(m){case"click":e={onClick:W};break;case"hover":e={onMouseEnter:P,onMouseLeave:B};break;case"hoverFocus":e={onMouseEnter:P,onMouseLeave:B,onFocus:P,onBlur:B}}return i("div",{className:"widget-tooltip-trigger",ref:O,...v?void 0:e},f)})(),b?i("div",{...D.popper,className:"widget-tooltip-content",ref:E,style:k.popper,role:"tooltip"},"text"===g?d:l,i("div",{...D.arrow,className:"widget-tooltip-arrow",ref:M,style:k.arrow})):null)},Ce=(e,t)=>"".concat(e).concat("none"===t?"":"-"+t);function Ne(e){var t;return i(Ve,{class:e.class,htmlMessage:e.htmlMessage,name:e.name,openOn:e.openOn,position:Ce(e.tooltipPosition,e.arrowPosition),renderMethod:e.renderMethod,style:e.style,trigger:e.trigger,textMessage:null===(t=e.textMessage)||void 0===t?void 0:t.value,tabIndex:e.tabIndex})}export{Ne as default};