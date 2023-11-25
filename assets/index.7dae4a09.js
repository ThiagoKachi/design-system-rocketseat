var Ue=Object.defineProperty;var c=(e,t)=>Ue(e,"name",{value:t,configurable:!0});import{r as f,R as U}from"./index.4244cd94.js";import{r as Ve}from"./index.276ec864.js";import{a as j,j as x,F as P}from"./jsx-runtime.79d39a00.js";function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},A.apply(this,arguments)}c(A,"_extends");var Ge=f.exports.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),ve=c(function(t,r,n){var o=n.get(t);return o?o(r):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)},"renderPathForWeight");function fe(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}c(fe,"_objectWithoutPropertiesLoose");var ye=f.exports.forwardRef(function(e,t){var r=e.alt,n=e.color,o=e.size,i=e.weight,l=e.mirrored,s=e.children,a=e.renderPath,u=fe(e,["alt","color","size","weight","mirrored","children","renderPath"]),m=f.exports.useContext(Ge),p=m.color,d=p===void 0?"currentColor":p,h=m.size,b=m.weight,y=b===void 0?"regular":b,S=m.mirrored,$=S===void 0?!1:S,k=fe(m,["color","size","weight","mirrored"]);return j("svg",{...Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o!=null?o:h,height:o!=null?o:h,fill:n!=null?n:d,viewBox:"0 0 256 256",transform:l||$?"scale(-1, 1)":void 0},k,u),children:[!!r&&x("title",{children:r}),s,x("rect",{width:"256",height:"256",fill:"none"}),a(i!=null?i:y,n!=null?n:d)]})});ye.displayName="IconBase";const ke=ye;var F=new Map;F.set("bold",function(e){return x(P,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});F.set("duotone",function(e){return x(P,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});F.set("fill",function(){return x(P,{children:x("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});F.set("light",function(e){return x(P,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});F.set("thin",function(e){return x(P,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});F.set("regular",function(e){return x(P,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var Ye=c(function(t,r){return ve(t,r,F)},"renderPath"),Ce=f.exports.forwardRef(function(e,t){return x(ke,{...Object.assign({ref:t},e,{renderPath:Ye})})});Ce.displayName="Check";const qe=Ce;var D=new Map;D.set("bold",function(e){return j(P,{children:[x("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),x("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});D.set("duotone",function(e){return j(P,{children:[x("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),x("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),x("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});D.set("fill",function(){return x(P,{children:x("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"})})});D.set("light",function(e){return j(P,{children:[x("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),x("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});D.set("thin",function(e){return j(P,{children:[x("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),x("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});D.set("regular",function(e){return j(P,{children:[x("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),x("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var Ze=c(function(t,r){return ve(t,r,D)},"renderPath"),we=f.exports.forwardRef(function(e,t){return x(ke,{...Object.assign({ref:t},e,{renderPath:Ze})})});we.displayName="User";const Ke=we;function Re(e,t=[]){let r=[];function n(i,l){const s=f.exports.createContext(l),a=r.length;r=[...r,l];function u(p){const{scope:d,children:h,...b}=p,y=(d==null?void 0:d[e][a])||s,S=f.exports.useMemo(()=>b,Object.values(b));return f.exports.createElement(y.Provider,{value:S},h)}c(u,"Provider");function m(p,d){const h=(d==null?void 0:d[e][a])||s,b=f.exports.useContext(h);if(b)return b;if(l!==void 0)return l;throw new Error(`\`${p}\` must be used within \`${i}\``)}return c(m,"useContext"),u.displayName=i+"Provider",[u,m]}c(n,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const o=c(()=>{const i=r.map(l=>f.exports.createContext(l));return c(function(s){const a=(s==null?void 0:s[e])||i;return f.exports.useMemo(()=>({[`__scope${e}`]:{...s,[e]:a}}),[s,a])},"useScope")},"createScope");return o.scopeName=e,[n,Je(o,...t)]}c(Re,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function Je(...e){const t=e[0];if(e.length===1)return t;const r=c(()=>{const n=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return c(function(i){const l=n.reduce((s,{useScope:a,scopeName:u})=>{const p=a(i)[`__scope${u}`];return{...s,...p}},{});return f.exports.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope1");return r.scopeName=t.scopeName,r}c(Je,"$c512c27ab02ef895$var$composeContextScopes");function ce(e){const t=f.exports.useRef(e);return f.exports.useEffect(()=>{t.current=e}),f.exports.useMemo(()=>(...r)=>{var n;return(n=t.current)===null||n===void 0?void 0:n.call(t,...r)},[])}c(ce,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");const J=Boolean(globalThis==null?void 0:globalThis.document)?f.exports.useLayoutEffect:()=>{};function Xe(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}c(Xe,"$6ed0406888f73fc4$var$setRef");function ze(...e){return t=>e.forEach(r=>Xe(r,t))}c(ze,"$6ed0406888f73fc4$export$43e446d32b3d21af");function Ie(...e){return f.exports.useCallback(ze(...e),e)}c(Ie,"$6ed0406888f73fc4$export$c7b2cbe3552a0d05");const Ee=f.exports.forwardRef((e,t)=>{const{children:r,...n}=e,o=f.exports.Children.toArray(r),i=o.find(et);if(i){const l=i.props.children,s=o.map(a=>a===i?f.exports.Children.count(l)>1?f.exports.Children.only(null):f.exports.isValidElement(l)?l.props.children:null:a);return f.exports.createElement(ae,A({},n,{ref:t}),f.exports.isValidElement(l)?f.exports.cloneElement(l,void 0,s):null)}return f.exports.createElement(ae,A({},n,{ref:t}),r)});Ee.displayName="Slot";const ae=f.exports.forwardRef((e,t)=>{const{children:r,...n}=e;return f.exports.isValidElement(r)?f.exports.cloneElement(r,{...tt(n,r.props),ref:t?ze(t,r.ref):r.ref}):f.exports.Children.count(r)>1?f.exports.Children.only(null):null});ae.displayName="SlotClone";const Qe=c(({children:e})=>f.exports.createElement(f.exports.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function et(e){return f.exports.isValidElement(e)&&e.type===Qe}c(et,"$5e63c961fc1ce211$var$isSlottable");function tt(e,t){const r={...t};for(const n in t){const o=e[n],i=t[n];/^on[A-Z]/.test(n)?o&&i?r[n]=(...s)=>{i(...s),o(...s)}:o&&(r[n]=o):n==="style"?r[n]={...o,...i}:n==="className"&&(r[n]=[o,i].filter(Boolean).join(" "))}return{...e,...r}}c(tt,"$5e63c961fc1ce211$var$mergeProps");const rt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],X=rt.reduce((e,t)=>{const r=f.exports.forwardRef((n,o)=>{const{asChild:i,...l}=n,s=i?Ee:t;return f.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),f.exports.createElement(s,A({},l,{ref:o}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),Be="Avatar",[nt,Tr]=Re(Be),[ot,Pe]=nt(Be),it=f.exports.forwardRef((e,t)=>{const{__scopeAvatar:r,...n}=e,[o,i]=f.exports.useState("idle");return f.exports.createElement(ot,{scope:r,imageLoadingStatus:o,onImageLoadingStatusChange:i},f.exports.createElement(X.span,A({},n,{ref:t})))}),st="AvatarImage",at=f.exports.forwardRef((e,t)=>{const{__scopeAvatar:r,src:n,onLoadingStatusChange:o=c(()=>{},"onLoadingStatusChange"),...i}=e,l=Pe(st,r),s=dt(n),a=ce(u=>{o(u),l.onImageLoadingStatusChange(u)});return J(()=>{s!=="idle"&&a(s)},[s,a]),s==="loaded"?f.exports.createElement(X.img,A({},i,{ref:t,src:n})):null}),lt="AvatarFallback",ct=f.exports.forwardRef((e,t)=>{const{__scopeAvatar:r,delayMs:n,...o}=e,i=Pe(lt,r),[l,s]=f.exports.useState(n===void 0);return f.exports.useEffect(()=>{if(n!==void 0){const a=window.setTimeout(()=>s(!0),n);return()=>window.clearTimeout(a)}},[n]),l&&i.imageLoadingStatus!=="loaded"?f.exports.createElement(X.span,A({},o,{ref:t})):null});function dt(e){const[t,r]=f.exports.useState("idle");return J(()=>{if(!e){r("error");return}let n=!0;const o=new window.Image,i=c(l=>()=>{!n||r(l)},"updateStatus");return r("loading"),o.onload=i("loaded"),o.onerror=i("error"),o.src=e,()=>{n=!1}},[e]),t}c(dt,"$cddcb0b647441e34$var$useImageLoadingStatus");const ut=it,ft=at,pt=ct;var v="colors",z="sizes",g="space",Ae={gap:g,gridGap:g,columnGap:g,gridColumnGap:g,rowGap:g,gridRowGap:g,inset:g,insetBlock:g,insetBlockEnd:g,insetBlockStart:g,insetInline:g,insetInlineEnd:g,insetInlineStart:g,margin:g,marginTop:g,marginRight:g,marginBottom:g,marginLeft:g,marginBlock:g,marginBlockEnd:g,marginBlockStart:g,marginInline:g,marginInlineEnd:g,marginInlineStart:g,padding:g,paddingTop:g,paddingRight:g,paddingBottom:g,paddingLeft:g,paddingBlock:g,paddingBlockEnd:g,paddingBlockStart:g,paddingInline:g,paddingInlineEnd:g,paddingInlineStart:g,top:g,right:g,bottom:g,left:g,scrollMargin:g,scrollMarginTop:g,scrollMarginRight:g,scrollMarginBottom:g,scrollMarginLeft:g,scrollMarginX:g,scrollMarginY:g,scrollMarginBlock:g,scrollMarginBlockEnd:g,scrollMarginBlockStart:g,scrollMarginInline:g,scrollMarginInlineEnd:g,scrollMarginInlineStart:g,scrollPadding:g,scrollPaddingTop:g,scrollPaddingRight:g,scrollPaddingBottom:g,scrollPaddingLeft:g,scrollPaddingX:g,scrollPaddingY:g,scrollPaddingBlock:g,scrollPaddingBlockEnd:g,scrollPaddingBlockStart:g,scrollPaddingInline:g,scrollPaddingInlineEnd:g,scrollPaddingInlineStart:g,fontSize:"fontSizes",background:v,backgroundColor:v,backgroundImage:v,borderImage:v,border:v,borderBlock:v,borderBlockEnd:v,borderBlockStart:v,borderBottom:v,borderBottomColor:v,borderColor:v,borderInline:v,borderInlineEnd:v,borderInlineStart:v,borderLeft:v,borderLeftColor:v,borderRight:v,borderRightColor:v,borderTop:v,borderTopColor:v,caretColor:v,color:v,columnRuleColor:v,fill:v,outline:v,outlineColor:v,stroke:v,textDecorationColor:v,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:z,minBlockSize:z,maxBlockSize:z,inlineSize:z,minInlineSize:z,maxInlineSize:z,width:z,minWidth:z,maxWidth:z,height:z,minHeight:z,maxHeight:z,flexBasis:z,gridTemplateColumns:z,gridTemplateRows:z,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},gt=c((e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,"i"),Y=c(()=>{const e=Object.create(null);return(t,r,...n)=>{const o=(i=>JSON.stringify(i,gt))(t);return o in e?e[o]:e[o]=r(t,...n)}},"o"),T=Symbol.for("sxs.internal"),de=c((e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),"s"),pe=c(e=>{for(const t in e)return!0;return!1},"a"),{hasOwnProperty:ht}=Object.prototype,le=c(e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),"d"),mt=/\s+(?![^()]*\))/,V=c(e=>t=>e(...typeof t=="string"?String(t).split(mt):[t]),"p"),ge={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:V((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:V((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:V((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:V((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:V((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:V((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},se=/([\d.]+)([^]*)/,bt=c((e,t)=>e.length?e.reduce((r,n)=>(r.push(...t.map(o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(o)?`:is(${n})`:n):n+" "+o)),r),[]):t,"f"),$t=c((e,t)=>e in xt&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(r,n,o,i)=>n+(o==="stretch"?`-moz-available${i};${le(e)}:${n}-webkit-fill-available`:`-moz-fit-content${i};${le(e)}:${n}fit-content`)+i):String(t),"m"),xt={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},N=c(e=>e?e+"-":"","S"),je=c((e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(n,o,i,l,s)=>l=="$"==!!i?n:(o||l=="--"?"calc(":"")+"var(--"+(l==="$"?N(t)+(s.includes("$")?"":N(r))+s.replace(/\$/g,"-"):s)+")"+(o||l=="--"?"*"+(o||"")+(i||"1")+")":"")),"k"),St=/\s*,\s*(?![^()]*\))/,vt=Object.prototype.toString,G=c((e,t,r,n,o)=>{let i,l,s;const a=c((u,m,p)=>{let d,h;const b=c(y=>{for(d in y){const k=d.charCodeAt(0)===64,R=k&&Array.isArray(y[d])?y[d]:[y[d]];for(h of R){const w=/[A-Z]/.test($=d)?$:$.replace(/-[^]/g,I=>I[1].toUpperCase()),q=typeof h=="object"&&h&&h.toString===vt&&(!n.utils[w]||!m.length);if(w in n.utils&&!q){const I=n.utils[w];if(I!==l){l=I,b(I(h)),l=null;continue}}else if(w in ge){const I=ge[w];if(I!==s){s=I,b(I(h)),s=null;continue}}if(k&&(S=d.slice(1)in n.media?"@media "+n.media[d.slice(1)]:d,d=S.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(I,E,M,L,B,W)=>{const H=se.test(E),Q=.0625*(H?-1:1),[ee,ue]=H?[L,E]:[E,L];return"("+(M[0]==="="?"":M[0]===">"===H?"max-":"min-")+ee+":"+(M[0]!=="="&&M.length===1?ue.replace(se,(He,oe,ie)=>Number(oe)+Q*(M===">"?1:-1)+ie):ue)+(B?") and ("+(B[0]===">"?"min-":"max-")+ee+":"+(B.length===1?W.replace(se,(He,oe,ie)=>Number(oe)+Q*(B===">"?-1:1)+ie):W):"")+")"})),q){const I=k?p.concat(d):[...p],E=k?[...m]:bt(m,d.split(St));i!==void 0&&o(he(...i)),i=void 0,a(h,E,I)}else i===void 0&&(i=[[],m,p]),d=k||d.charCodeAt(0)!==36?d:`--${N(n.prefix)}${d.slice(1).replace(/\$/g,"-")}`,h=q?h:typeof h=="number"?h&&w in yt?String(h)+"px":String(h):je($t(w,h==null?"":h),n.prefix,n.themeMap[w]),i[0].push(`${k?`${d} `:`${le(d)}:`}${h}`)}}var S,$},"p");b(u),i!==void 0&&o(he(...i)),i=void 0},"a");a(e,t,r)},"$"),he=c((e,t,r)=>`${r.map(n=>`${n}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,"x"),yt={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},me=c(e=>String.fromCharCode(e+(e>25?39:97)),"R"),_=c(e=>(t=>{let r,n="";for(r=Math.abs(t);r>52;r=r/52|0)n=me(r%52)+n;return me(r%52)+n})(((t,r)=>{let n=r.length;for(;n;)t=33*t^r.charCodeAt(--n);return t})(5381,JSON.stringify(e))>>>0),"z"),K=["themed","global","styled","onevar","resonevar","allvar","inline"],kt=c(e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},"j"),Ct=c(e=>{let t;const r=c(()=>{const{cssRules:o}=t.sheet;return[].map.call(o,(i,l)=>{const{cssText:s}=i;let a="";if(s.startsWith("--sxs"))return"";if(o[l-1]&&(a=o[l-1].cssText).startsWith("--sxs")){if(!i.cssRules.length)return"";for(const u in t.rules)if(t.rules[u].group===i)return`--sxs{--sxs:${[...t.rules[u].cache].join(" ")}}${s}`;return i.cssRules.length?`${a}${s}`:""}return s}).join("")},"r"),n=c(()=>{if(t){const{rules:s,sheet:a}=t;if(!a.deleteRule){for(;Object(Object(a.cssRules)[0]).type===3;)a.cssRules.splice(0,1);a.cssRules=[]}for(const u in s)delete s[u]}const o=Object(e).styleSheets||[];for(const s of o)if(kt(s)){for(let a=0,u=s.cssRules;u[a];++a){const m=Object(u[a]);if(m.type!==1)continue;const p=Object(u[a+1]);if(p.type!==4)continue;++a;const{cssText:d}=m;if(!d.startsWith("--sxs"))continue;const h=d.slice(14,-3).trim().split(/\s+/),b=K[h[0]];b&&(t||(t={sheet:s,reset:n,rules:{},toString:r}),t.rules[b]={group:p,index:a,cache:new Set(h)})}if(t)break}if(!t){const s=c((a,u)=>({type:u,cssRules:[],insertRule(m,p){this.cssRules.splice(p,0,s(m,{import:3,undefined:1}[(m.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return a==="@media{}"?`@media{${[].map.call(this.cssRules,m=>m.cssText).join("")}}`:a}}),"i");t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:s("","text/css"),rules:{},reset:n,toString:r}}const{sheet:i,rules:l}=t;for(let s=K.length-1;s>=0;--s){const a=K[s];if(!l[a]){const u=K[s+1],m=l[u]?l[u].index:i.cssRules.length;i.insertRule("@media{}",m),i.insertRule(`--sxs{--sxs:${s}}`,m),l[a]={group:i.cssRules[m+1],index:m,cache:new Set([s])}}wt(l[a])}},"n");return n(),t},"E"),wt=c(e=>{const t=e.group;let r=t.cssRules.length;e.apply=n=>{try{t.insertRule(n,r),++r}catch{}}},"v"),Z=Symbol(),Rt=Y(),be=c((e,t)=>Rt(e,()=>(...r)=>{let n={type:null,composers:new Set};for(const o of r)if(o!=null)if(o[T]){n.type==null&&(n.type=o[T].type);for(const i of o[T].composers)n.composers.add(i)}else o.constructor!==Object||o.$$typeof?n.type==null&&(n.type=o):n.composers.add(zt(o,e));return n.type==null&&(n.type="span"),n.composers.size||n.composers.add(["PJLV",{},[],[],{},[]]),It(e,n,t)}),"M"),zt=c(({variants:e,compoundVariants:t,defaultVariants:r,...n},o)=>{const i=`${N(o.prefix)}c-${_(n)}`,l=[],s=[],a=Object.create(null),u=[];for(const d in r)a[d]=String(r[d]);if(typeof e=="object"&&e)for(const d in e){m=a,p=d,ht.call(m,p)||(a[d]="undefined");const h=e[d];for(const b in h){const y={[d]:String(b)};String(b)==="undefined"&&u.push(d);const S=h[b],$=[y,S,!pe(S)];l.push($)}}var m,p;if(typeof t=="object"&&t)for(const d of t){let{css:h,...b}=d;h=typeof h=="object"&&h||{};for(const S in b)b[S]=String(b[S]);const y=[b,h,!pe(h)];s.push(y)}return[i,n,l,s,a,u]},"C"),It=c((e,t,r)=>{const[n,o,i,l]=Et(t.composers),s=typeof t.type=="function"||t.type.$$typeof?(p=>{function d(){for(let h=0;h<d[Z].length;h++){const[b,y]=d[Z][h];p.rules[b].apply(y)}return d[Z]=[],null}return c(d,"t"),d[Z]=[],d.rules={},K.forEach(h=>d.rules[h]={apply:b=>d[Z].push([h,b])}),d})(r):null,a=(s||r).rules,u=`.${n}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,m=c(p=>{p=typeof p=="object"&&p||Bt;const{css:d,...h}=p,b={};for(const $ in i)if(delete h[$],$ in p){let k=p[$];typeof k=="object"&&k?b[$]={"@initial":i[$],...k}:(k=String(k),b[$]=k!=="undefined"||l.has($)?k:i[$])}else b[$]=i[$];const y=new Set([...o]);for(const[$,k,R,w]of t.composers){r.rules.styled.cache.has($)||(r.rules.styled.cache.add($),G(k,[`.${$}`],[],e,E=>{a.styled.apply(E)}));const q=$e(R,b,e.media),I=$e(w,b,e.media,!0);for(const E of q)if(E!==void 0)for(const[M,L,B]of E){const W=`${$}-${_(L)}-${M}`;y.add(W);const H=(B?r.rules.resonevar:r.rules.onevar).cache,Q=B?a.resonevar:a.onevar;H.has(W)||(H.add(W),G(L,[`.${W}`],[],e,ee=>{Q.apply(ee)}))}for(const E of I)if(E!==void 0)for(const[M,L]of E){const B=`${$}-${_(L)}-${M}`;y.add(B),r.rules.allvar.cache.has(B)||(r.rules.allvar.cache.add(B),G(L,[`.${B}`],[],e,W=>{a.allvar.apply(W)}))}}if(typeof d=="object"&&d){const $=`${n}-i${_(d)}-css`;y.add($),r.rules.inline.cache.has($)||(r.rules.inline.cache.add($),G(d,[`.${$}`],[],e,k=>{a.inline.apply(k)}))}for(const $ of String(p.className||"").trim().split(/\s+/))$&&y.add($);const S=h.className=[...y].join(" ");return{type:t.type,className:S,selector:u,props:h,toString:()=>S,deferredInjector:s}},"p");return de(m,{className:n,selector:u,[T]:t,toString:()=>(r.rules.styled.cache.has(n)||m(),n)})},"P"),Et=c(e=>{let t="";const r=[],n={},o=[];for(const[i,,,,l,s]of e){t===""&&(t=i),r.push(i),o.push(...s);for(const a in l){const u=l[a];(n[a]===void 0||u!=="undefined"||s.includes(u))&&(n[a]=u)}}return[t,r,n,new Set(o)]},"L"),$e=c((e,t,r,n)=>{const o=[];e:for(let[i,l,s]of e){if(s)continue;let a,u=0,m=!1;for(a in i){const p=i[a];let d=t[a];if(d!==p){if(typeof d!="object"||!d)continue e;{let h,b,y=0;for(const S in d){if(p===String(d[S])){if(S!=="@initial"){const $=S.slice(1);(b=b||[]).push($ in r?r[$]:S.replace(/^@media ?/,"")),m=!0}u+=y,h=!0}++y}if(b&&b.length&&(l={["@media "+b.join(", ")]:l}),!h)continue e}}}(o[u]=o[u]||[]).push([n?"cv":`${a}-${i[a]}`,l,m])}return o},"O"),Bt={},Pt=Y(),At=c((e,t)=>Pt(e,()=>(...r)=>{const n=c(()=>{for(let o of r){o=typeof o=="object"&&o||{};let i=_(o);if(!t.rules.global.cache.has(i)){if(t.rules.global.cache.add(i),"@import"in o){let l=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let s of[].concat(o["@import"]))s=s.includes('"')||s.includes("'")?s:`"${s}"`,t.sheet.insertRule(`@import ${s};`,l++);delete o["@import"]}G(o,[],[],e,l=>{t.rules.global.apply(l)})}}return""},"n");return de(n,{toString:n})}),"D"),jt=Y(),Mt=c((e,t)=>jt(e,()=>r=>{const n=`${N(e.prefix)}k-${_(r)}`,o=c(()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const i=[];G(r,[],[],e,s=>i.push(s));const l=`@keyframes ${n}{${i.join("")}}`;t.rules.global.apply(l)}return n},"i");return de(o,{get name(){return o()},toString:o})}),"V"),Wt=c(class{constructor(e,t,r,n){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=r==null?"":String(r),this.prefix=n==null?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+N(this.prefix)+N(this.scale)+this.token}toString(){return this.computedValue}},"G"),Nt=Y(),Lt=c((e,t)=>Nt(e,()=>(r,n)=>{n=typeof r=="object"&&r||Object(n);const o=`.${r=(r=typeof r=="string"?r:"")||`${N(e.prefix)}t-${_(n)}`}`,i={},l=[];for(const a in n){i[a]={};for(const u in n[a]){const m=`--${N(e.prefix)}${a}-${u}`,p=je(String(n[a][u]),e.prefix,a);i[a][u]=new Wt(u,p,a,e.prefix),l.push(`${m}:${p}`)}}const s=c(()=>{if(l.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const a=`${n===e.theme?":root,":""}.${r}{${l.join(";")}}`;t.rules.themed.apply(a)}return r},"s");return{...i,get className(){return s()},selector:o,toString:s}}),"J"),Tt=Y(),_t=Y(),Ot=c(e=>{const t=(r=>{let n=!1;const o=Tt(r,i=>{n=!0;const l="prefix"in(i=typeof i=="object"&&i||{})?String(i.prefix):"",s=typeof i.media=="object"&&i.media||{},a=typeof i.root=="object"?i.root||null:globalThis.document||null,u=typeof i.theme=="object"&&i.theme||{},m={prefix:l,media:s,theme:u,themeMap:typeof i.themeMap=="object"&&i.themeMap||{...Ae},utils:typeof i.utils=="object"&&i.utils||{}},p=Ct(a),d={css:be(m,p),globalCss:At(m,p),keyframes:Mt(m,p),createTheme:Lt(m,p),reset(){p.reset(),d.theme.toString()},theme:{},sheet:p,config:m,prefix:l,getCssText:p.toString,toString:p.toString};return String(d.theme=d.createTheme(u)),d});return n||o.reset(),o})(e);return t.styled=(({config:r,sheet:n})=>_t(r,()=>{const o=be(r,n);return(...i)=>{const l=o(...i),s=l[T].type,a=U.forwardRef((u,m)=>{const p=u&&u.as||s,{props:d,deferredInjector:h}=l(u);return delete d.as,d.ref=m,h?U.createElement(U.Fragment,null,U.createElement(p,d),U.createElement(h,null)):U.createElement(p,d)});return a.className=l.className,a.displayName=`Styled.${s.displayName||s.name||s}`,a.selector=l.selector,a.toString=()=>l.selector,a[T]=l[T],a}}))(t),t},"q");function xe(e,t,{checkForDefaultPrevented:r=!0}={}){return c(function(o){if(e==null||e(o),r===!1||!o.defaultPrevented)return t==null?void 0:t(o)},"handleEvent")}c(xe,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function Ft({prop:e,defaultProp:t,onChange:r=c(()=>{},"onChange")}){const[n,o]=Dt({defaultProp:t,onChange:r}),i=e!==void 0,l=i?e:n,s=ce(r),a=f.exports.useCallback(u=>{if(i){const p=typeof u=="function"?u(e):u;p!==e&&s(p)}else o(u)},[i,e,o,s]);return[l,a]}c(Ft,"$71cd76cc60e0454e$export$6f32135080cb4c3");function Dt({defaultProp:e,onChange:t}){const r=f.exports.useState(e),[n]=r,o=f.exports.useRef(n),i=ce(t);return f.exports.useEffect(()=>{o.current!==n&&(i(n),o.current=n)},[n,o,i]),r}c(Dt,"$71cd76cc60e0454e$var$useUncontrolledState");function Ht(e){const t=f.exports.useRef({value:e,previous:e});return f.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}c(Ht,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");function Ut(e){const[t,r]=f.exports.useState(void 0);return J(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const n=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let l,s;if("borderBoxSize"in i){const a=i.borderBoxSize,u=Array.isArray(a)?a[0]:a;l=u.inlineSize,s=u.blockSize}else l=e.offsetWidth,s=e.offsetHeight;r({width:l,height:s})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}else r(void 0)},[e]),t}c(Ut,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function Vt(e,t){return f.exports.useReducer((r,n)=>{const o=t[r][n];return o!=null?o:r},e)}c(Vt,"$fe963b355347cc68$export$3e6543de14f8614f");const Me=c(e=>{const{present:t,children:r}=e,n=Gt(t),o=typeof r=="function"?r({present:n.isPresent}):f.exports.Children.only(r),i=Ie(n.ref,o.ref);return typeof r=="function"||n.isPresent?f.exports.cloneElement(o,{ref:i}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");Me.displayName="Presence";function Gt(e){const[t,r]=f.exports.useState(),n=f.exports.useRef({}),o=f.exports.useRef(e),i=f.exports.useRef("none"),l=e?"mounted":"unmounted",[s,a]=Vt(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return f.exports.useEffect(()=>{const u=te(n.current);i.current=s==="mounted"?u:"none"},[s]),J(()=>{const u=n.current,m=o.current;if(m!==e){const d=i.current,h=te(u);e?a("MOUNT"):h==="none"||(u==null?void 0:u.display)==="none"?a("UNMOUNT"):a(m&&d!==h?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,a]),J(()=>{if(t){const u=c(p=>{const h=te(n.current).includes(p.animationName);p.target===t&&h&&Ve.exports.flushSync(()=>a("ANIMATION_END"))},"handleAnimationEnd"),m=c(p=>{p.target===t&&(i.current=te(n.current))},"handleAnimationStart");return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else a("ANIMATION_END")},[t,a]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:f.exports.useCallback(u=>{u&&(n.current=getComputedStyle(u)),r(u)},[])}}c(Gt,"$921a889cee6df7e8$var$usePresence");function te(e){return(e==null?void 0:e.animationName)||"none"}c(te,"$921a889cee6df7e8$var$getAnimationName");const We="Checkbox",[Yt,_r]=Re(We),[qt,Zt]=Yt(We),Kt=f.exports.forwardRef((e,t)=>{const{__scopeCheckbox:r,name:n,checked:o,defaultChecked:i,required:l,disabled:s,value:a="on",onCheckedChange:u,...m}=e,[p,d]=f.exports.useState(null),h=Ie(t,R=>d(R)),b=f.exports.useRef(!1),y=p?Boolean(p.closest("form")):!0,[S=!1,$]=Ft({prop:o,defaultProp:i,onChange:u}),k=f.exports.useRef(S);return f.exports.useEffect(()=>{const R=p==null?void 0:p.form;if(R){const w=c(()=>$(k.current),"reset");return R.addEventListener("reset",w),()=>R.removeEventListener("reset",w)}},[p,$]),f.exports.createElement(qt,{scope:r,state:S,disabled:s},f.exports.createElement(X.button,A({type:"button",role:"checkbox","aria-checked":O(S)?"mixed":S,"aria-required":l,"data-state":Ne(S),"data-disabled":s?"":void 0,disabled:s,value:a},m,{ref:h,onKeyDown:xe(e.onKeyDown,R=>{R.key==="Enter"&&R.preventDefault()}),onClick:xe(e.onClick,R=>{$(w=>O(w)?!0:!w),y&&(b.current=R.isPropagationStopped(),b.current||R.stopPropagation())})})),y&&f.exports.createElement(Qt,{control:p,bubbles:!b.current,name:n,value:a,checked:S,required:l,disabled:s,style:{transform:"translateX(-100%)"}}))}),Jt="CheckboxIndicator",Xt=f.exports.forwardRef((e,t)=>{const{__scopeCheckbox:r,forceMount:n,...o}=e,i=Zt(Jt,r);return f.exports.createElement(Me,{present:n||O(i.state)||i.state===!0},f.exports.createElement(X.span,A({"data-state":Ne(i.state),"data-disabled":i.disabled?"":void 0},o,{ref:t,style:{pointerEvents:"none",...e.style}})))}),Qt=c(e=>{const{control:t,checked:r,bubbles:n=!0,...o}=e,i=f.exports.useRef(null),l=Ht(r),s=Ut(t);return f.exports.useEffect(()=>{const a=i.current,u=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(u,"checked").set;if(l!==r&&p){const d=new Event("click",{bubbles:n});a.indeterminate=O(r),p.call(a,O(r)?!1:r),a.dispatchEvent(d)}},[l,r,n]),f.exports.createElement("input",A({type:"checkbox","aria-hidden":!0,defaultChecked:O(r)?!1:r},o,{tabIndex:-1,ref:i,style:{...e.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function O(e){return e==="indeterminate"}c(O,"$e698a72e93240346$var$isIndeterminate");function Ne(e){return O(e)?"indeterminate":e?"checked":"unchecked"}c(Ne,"$e698a72e93240346$var$getState");const er=Kt,tr=Xt;var rr=Object.defineProperty,nr=Object.defineProperties,or=Object.getOwnPropertyDescriptors,re=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,Se=c((e,t,r)=>t in e?rr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,"__defNormalProp"),ne=c((e,t)=>{for(var r in t||(t={}))Le.call(t,r)&&Se(e,r,t[r]);if(re)for(var r of re(t))Te.call(t,r)&&Se(e,r,t[r]);return e},"__spreadValues"),_e=c((e,t)=>nr(e,or(t)),"__spreadProps"),ir=c((e,t)=>{var r={};for(var n in e)Le.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&re)for(var n of re(e))t.indexOf(n)<0&&Te.call(e,n)&&(r[n]=e[n]);return r},"__objRest"),sr={white:"#FFF",whitesmoke:"#F5F5F5",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D"},ar={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},lr={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},cr={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},dr={regular:"400",medium:"500",bold:"700"},ur={default:"Roboto, sans-serif",code:"monospace"},fr={shorter:"125%",short:"140%",base:"160%",tall:"180%"},{styled:C,css:Or,globalCss:Fr,keyframes:Oe,getCssText:Dr,theme:Hr,createTheme:Ur,config:Vr}=Ot({themeMap:_e(ne({},Ae),{height:"space",width:"space"}),theme:{colors:sr,fontSizes:cr,fontWeights:dr,fonts:ur,lineHeights:fr,radii:ar,space:lr}}),pr=C(ut,{borderRadius:"$full",display:"inline-block",width:"$16",height:"$16",overflow:"hidden"}),gr=C(ft,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),hr=C(pt,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray600",color:"$gray800",svg:{width:"$6",height:"$6"}});function mr(e){return j(pr,{children:[x(gr,ne({},e)),x(hr,{delayMs:600,children:x(Ke,{})})]})}c(mr,"Avatar2");mr.displayName="Avatar";var br=C("div",{padding:"$6",borderRadius:"$md",backgroundColor:"$gray800",border:"1px solid $gray600"});br.displayName="Box";var $r=C("button",{all:"unset",borderRadius:"$sm",fontSize:"$sm",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",minWidth:120,boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",padding:"$0 $4",cursor:"pointer",svg:{width:"$4",height:"$4"},"&:disabled":{cursor:"not-allowed"},"&:focus":{boxShadow:"0 0 0 2px $colors$ignite500"},variants:{variant:{primary:{color:"$white",background:"$ignite500","&:not(:disabled):hover":{background:"$ignite300"},"&:disabled":{backgroundColor:"$gray200"}},secondary:{color:"$ignite300",border:"2px solid $ignite500","&:not(:disabled):hover":{background:"$ignite500",color:"$white"},"&:disabled":{color:"$gray200",borderColor:"$gray200"}},tertiary:{color:"$gray100","&:not(:disabled):hover":{color:"$white"},"&:disabled":{color:"$gray600"}}},size:{sm:{height:38},md:{height:46}}},defaultVariants:{variant:"primary",size:"md"}});$r.displayName="Button";var xr=C(er,{all:"unset",width:"$6",height:"$6",backgroundColor:"$gray900",borderRadius:"$xs",lineHeight:0,cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid $gray900",'&[data-state="checked"]':{backgroundColor:"$ignite300"},'&:focus, &[data-state="checked"]':{border:"2px solid $ignite300"}}),Sr=Oe({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),vr=Oe({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),yr=C(tr,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${Sr} 200ms ease-out`},'&[data-state="unchecked"]':{animation:`${vr} 200ms ease-out`}});function kr(e){return x(xr,_e(ne({},e),{children:x(yr,{asChild:!0,children:x(qe,{weight:"bold"})})}))}c(kr,"Checkbox2");kr.displayName="Checkbox";var Cr=C("h1",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray100",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},"2xl":{fontSize:"$5xl"},"3xl":{fontSize:"$6xl"},"4xl":{fontSize:"$7xl"},"5xl":{fontSize:"$8xl"},"6xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});Cr.displayName="Heading";var Fe=C("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray100",variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"3xl":{fontSize:"$3xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});Fe.displayName="Text";var wr=C("div",{}),Rr=C(Fe,{color:"$gray200",defaultVariants:{size:"xs"}}),zr=C("div",{display:"grid",gridTemplateColumns:"repeat(var(--steps-size), 1fr)",gap:"$2",marginTop:"$1"}),Ir=C("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{backgroundColor:"$gray100"}}}});function Er({size:e,currentStep:t=1}){return j(wr,{children:[j(Rr,{children:["Passo ",t," de ",e]}),x(zr,{css:{"--steps-size":e},children:Array.from({length:e},(r,n)=>n+1).map(r=>x(Ir,{active:t>=r},r))})]})}c(Er,"MultiStep");Er.displayName="MultiStep";var Br=C("textarea",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:0,borderColor:"$ignite300"},"&:disabled":{outline:.5,cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});Br.displayName="TextArea";var Pr=C("div",{backgroundColor:"$gray900",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"center",variants:{size:{sm:{padding:"$2 $3"},md:{padding:"$3 $4"}}},"&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"},defaultVariants:{size:"md"}}),Ar=C("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray400",fontWeight:"$regular"}),jr=C("input",{fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",backgroundColor:"transparent",border:0,width:"100%","&:focus":{outline:0},"&:disabled":{cursor:"not-allowed"},"&::placeholder":{color:"$gray400"}}),De=f.exports.forwardRef((e,t)=>{var r=e,{prefix:n}=r,o=ir(r,["prefix"]);return j(Pr,{children:[!!n&&x(Ar,{children:n}),x(jr,ne({ref:t},o))]})});De.displayName="TextInput";De.__docgenInfo={description:"",methods:[],displayName:"TextInput"};export{mr as A,br as B,kr as C,Cr as H,ke as I,Er as M,Fe as T,$r as a,Br as b,De as c,ve as r};
//# sourceMappingURL=index.7dae4a09.js.map
