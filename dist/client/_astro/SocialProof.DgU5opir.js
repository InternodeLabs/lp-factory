import{j as a}from"./jsx-runtime.D3GSbgeI.js";import{c}from"./utils.2dOUpm6k.js";import{r as s}from"./index.yGrMsBkE.js";import"./index.yBjzXJbu.js";/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=(...t)=>t.filter((e,r,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===r).join(" ").trim();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,o)=>o?o.toUpperCase():r.toLowerCase());/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=t=>{const e=v(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},A=s.createContext({}),L=()=>s.useContext(A),W=s.forwardRef(({color:t,size:e,strokeWidth:r,absoluteStrokeWidth:o,className:l="",children:i,iconNode:u,...m},p)=>{const{size:d=24,strokeWidth:x=2,absoluteStrokeWidth:y=!1,color:b="currentColor",className:f=""}=L()??{},k=o??y?Number(r??x)*24/Number(e??d):r??x;return s.createElement("svg",{ref:p,...n,width:e??d??n.width,height:e??d??n.height,stroke:t??b,strokeWidth:k,className:g("lucide",f,l),...!i&&!N(m)&&{"aria-hidden":"true"},...m},[...u.map(([w,j])=>s.createElement(w,j)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=(t,e)=>{const r=s.forwardRef(({className:o,...l},i)=>s.createElement(W,{ref:i,iconNode:e,className:g(`lucide-${C(h(t))}`,`lucide-${t}`,o),...l}));return r.displayName=h(t),r};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],$=S("quote",E);function q({logoUrl:t,company:e,darkMode:r}){return t?a.jsx("div",{className:"relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800",children:a.jsx("img",{src:t,alt:`${e} logo`,width:40,height:40,className:"object-contain p-1",loading:"lazy"})}):a.jsx("div",{className:c("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-dashed text-xs font-medium",r?"border-gray-600 text-gray-500":"border-gray-300 text-gray-400"),"aria-hidden":!0,children:e.slice(0,2).toUpperCase()})}function _({section:t,darkMode:e}){return a.jsx("section",{className:c("py-16 px-4 md:py-24 md:px-8",e&&"dark"),children:a.jsxs("div",{className:"mx-auto max-w-5xl",children:[a.jsx("h2",{className:"text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl",children:t.title}),a.jsx("ul",{className:"mt-12 grid gap-8 md:mt-16 md:grid-cols-2 lg:grid-cols-3",children:t.testimonials.map(r=>a.jsxs("li",{className:c("relative flex flex-col rounded-2xl border p-6 md:p-8","border-gray-200 bg-white/90 shadow-sm dark:border-gray-800 dark:bg-gray-900/50"),children:[a.jsx($,{className:"absolute right-5 top-5 h-8 w-8 text-[var(--lp-primary)]/25 md:h-10 md:w-10",strokeWidth:1.25,"aria-hidden":!0}),a.jsxs("blockquote",{className:"relative flex-1 text-lg italic leading-relaxed text-gray-700 dark:text-gray-200 md:text-xl",children:["“",r.quote,"”"]}),a.jsxs("footer",{className:"mt-8 flex items-center gap-3 border-t border-gray-200 pt-6 dark:border-gray-800",children:[a.jsx(q,{logoUrl:r.logoUrl,company:r.company,darkMode:e}),a.jsxs("div",{className:"min-w-0",children:[a.jsx("p",{className:"font-bold text-gray-900 dark:text-white",children:r.name}),a.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:[r.role," · ",r.company]})]})]})]},r.name+r.company))})]})})}export{_ as SocialProof};
