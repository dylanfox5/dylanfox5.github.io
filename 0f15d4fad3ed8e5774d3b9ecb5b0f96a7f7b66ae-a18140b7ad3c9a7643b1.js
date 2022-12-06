"use strict";(self.webpackChunkgatsby_starter_portfolio_minimal_theme=self.webpackChunkgatsby_starter_portfolio_minimal_theme||[]).push([[615],{3723:function(e,t,a){a.d(t,{G:function(){return O},L:function(){return p},M:function(){return E},P:function(){return w},_:function(){return l},a:function(){return s},b:function(){return d},g:function(){return c},h:function(){return o}});var r=a(7294),n=(a(2369),a(5697)),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function d(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function c(e,t,a,r,n,i,l,o){const d={};i&&(d.backgroundColor=i,"fixed"===a?(d.width=r,d.height=n,d.backgroundColor=i,d.position="relative"):("constrained"===a||"fullWidth"===a)&&(d.position="absolute",d.top=0,d.left=0,d.bottom=0,d.right=0)),l&&(d.objectFit=l),o&&(d.objectPosition=o);const c=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},d)});return c}const u=["children"],m=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=l(e,u);return r.createElement(r.Fragment,null,r.createElement(m,s({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:o}=e,d=l(e,g);return r.createElement("img",s({},d,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:i}))},f=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=l(e,h);const o=i.sizes||(null==t?void 0:t.sizes),d=r.createElement(y,s({},i,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),d):d};var b;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},f.displayName="Picture",f.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const v=["fallback"],w=function(e){let{fallback:t}=e,a=l(e,v);return t?r.createElement(f,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(b=f.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(f,s({},e)),r.createElement("noscript",null,r.createElement(f,s({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=f.propTypes;const k=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:i().object.isRequired,alt:k},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],_=new Set;let T,x;const S=function(e){let{as:t="div",image:n,style:i,backgroundColor:d,className:c,class:u,onStartLoad:m,onLoad:p,onError:g}=e,h=l(e,L);const{width:y,height:f,layout:b}=n,v=function(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(y,f,b),{style:w,className:E}=v,k=l(v,N),C=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(c=u);const O=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,y,f);return(0,r.useEffect)((()=>{T||(T=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return x=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(S);if(x&&_.has(S))return;let t,r;return T.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;C.current&&(C.current.innerHTML=a(s({isLoading:!0,isLoaded:_.has(S),image:n},h)),_.has(S)||(t=requestAnimationFrame((()=>{C.current&&(r=l(C.current,S,_,i,m,p,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{_.has(S)&&x&&(C.current.innerHTML=x(s({isLoading:_.has(S),isLoaded:_.has(S),image:n},h)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},k,{style:s({},w,i,{backgroundColor:d}),className:E+(c?" "+c:""),ref:C,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(S,e):null}));O.propTypes=C,O.displayName="GatsbyImage";const I=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],R=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},z=new Set(["fixed","fullWidth","constrained"]),A={src:i().string.isRequired,alt:k,width:R,height:R,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},j=(q=O,function(e){let{src:t,__imageData:a,__error:n}=e,i=l(e,I);return n&&console.warn(n),a?r.createElement(q,s({image:a},i)):(console.warn("Image not loaded",t),null)});var q;j.displayName="StaticImage",j.propTypes=A},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},4088:function(e,t,a){a.d(t,{T:function(){return m},w:function(){return p}});var r=a(7294),n=a(1883),i=a(3723),s=function(){return s=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)};var l="styles_skeleton__tyzRD";function o(e){var t=e.width,a=void 0===t?"100%":t,n=e.height,i=void 0===n?"1em":n,o=e.background,d=void 0===o?"#E9ECEF":o,c=e.radius,u=void 0===c?"4px":c,m=e.circle,p=void 0!==m&&m,g=e.block,h=void 0===g||g,y=e.style,f=void 0===y?{}:y,b=e.as,v=void 0===b?"div":b;return r.createElement(v,{className:l,style:s({width:a,height:i,background:d,borderRadius:p?"50%":u,display:h?"block":"inline-block"},f)},"‌")}!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===a&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}('.styles_skeleton__tyzRD{background:#eff1f6;display:inline-block;line-height:1;overflow:hidden;position:relative}.styles_skeleton__tyzRD:before{animation:styles_skeleton-progress__aezri 1.2s ease-in-out infinite;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0));content:"";height:100%;left:-500px;position:absolute;top:0;width:500px}@keyframes styles_skeleton-progress__aezri{0%{left:-500px}to{left:100%}}');var d=a(5400),c="style-module--Card--c661d",u="style-module--DescriptionWrapper--5f867";function m(e){const{globalState:t}=(0,d.j1)(),a=t.theme===d.Q2.Dark,s=e.data.link.indexOf("://")>0||0===e.data.link.indexOf("//"),l=r.createElement("article",{className:c,style:a?{border:"0.125rem solid var(--primary-color)"}:void 0},e.showBanner&&r.createElement("div",{className:"style-module--Banner--d401d"},e.data.image&&e.data.image.src&&r.createElement(i.G,{className:"style-module--ImageWrapper--50300",imgClassName:"style-module--Image--43f10",image:e.data.image.src.childImageSharp.gatsbyImageData,alt:e.data.image.alt||e.data.title})),r.createElement("div",{className:u},r.createElement("span",{className:"style-module--Category--eeb92"},r.createElement("u",null,e.data.category)),r.createElement("h4",{className:"style-module--Title--de70d"},e.data.title),r.createElement("div",{className:"style-module--Details--5ba4b"},["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][(o=e.data.publishedAt).getMonth()]+" "+o.getDate()+", "+o.getFullYear(),e.data.readingTime&&r.createElement("span",{className:"style-module--ReadingTime--a0392"},e.data.readingTime))));var o;return s?r.createElement("a",{href:e.data.link,target:"_blank",rel:"nofollow noopener noreferrer",title:e.data.title},l):r.createElement(n.Link,{to:e.data.link,title:e.data.title},l)}function p(){const{globalState:e}=(0,d.j1)(),t=e.theme===d.Q2.Dark;return r.createElement("div",{className:c,style:t?{border:"0.125rem solid var(--primary-color)"}:void 0},r.createElement("div",{className:u},r.createElement(o,{style:{height:"1.5rem",marginBottom:".5rem",background:"var(--tertiary-color)"}}),r.createElement(o,{style:{height:"4rem",background:"var(--tertiary-color)"}}),r.createElement(o,{style:{height:".75rem",width:"50%",marginTop:".5rem",background:"var(--tertiary-color)"}})))}},2311:function(e,t,a){a.d(t,{z:function(){return l},L:function(){return s}});var r=a(7294),n=a(1883),i="style-module--Button--82b1f";let s;function l(e){if(e.type===s.LINK){if(e.url)return e.externalLink?r.createElement("a",{id:e.id,className:i,href:e.url,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},e.label):r.createElement(n.Link,{id:e.id,to:e.url,className:i},e.label);throw new Error("Button should be a "+e.type+" but no URL is given!")}if(e.type===s.BUTTON||e.type===s.SUBMIT){if(!e.onClickHandler)throw new Error("Button should be a "+e.type+" but no onClickHandler is given!");return r.createElement("button",{id:e.id,className:i,type:e.type,onClick:e.onClickHandler},e.label)}throw new Error("Unknown button type specified.")}!function(e){e.BUTTON="button",e.SUBMIT="submit",e.LINK="link"}(s||(s={}))},1187:function(e,t,a){a.d(t,{$:function(){return i}});var r=a(7294),n="style-module--ContentWrapper --36dde";function i(e){let t;return t=e.additionalClasses?e.additionalClasses.concat(n).join(" "):n,r.createElement("section",{id:e.anchor,className:"style-module--Section--1d871"},r.createElement("div",{className:t},e.heading&&r.createElement("h3",{className:"style-module--Heading--2c002"},e.heading),e.children))}},8768:function(e,t,a){a.d(t,{i:function(){return i}});var r=a(7294),n="style-module--SlideContainer--60bf2";function i(e){let t;return t=e.additionalClasses?e.additionalClasses.concat(n).join(" "):n,r.createElement("div",{className:t,style:e.style},e.children)}}}]);
//# sourceMappingURL=0f15d4fad3ed8e5774d3b9ecb5b0f96a7f7b66ae-a18140b7ad3c9a7643b1.js.map