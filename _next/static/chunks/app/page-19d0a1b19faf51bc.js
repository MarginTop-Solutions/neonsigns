(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2916:function(e,t,n){Promise.resolve().then(n.bind(n,4571))},551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let l=n(9920);n(7437),n(2265);let r=l._(n(148));function s(e,t){var n;let l={loading:e=>{let{error:t,isLoading:n,pastDelay:l}=e;return null}};"function"==typeof e&&(l.loader=e);let s={...l,...t};return(0,r.default)({...s,modules:null==(n=s.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},912:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let l=n(5592);function r(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new l.BailoutToCSRError(t);return n}},148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let l=n(7437),r=n(2265),s=n(912),o=n(1481);function a(e){return{default:e&&"default"in e?e.default:e}}let i={loader:()=>Promise.resolve(a(()=>null)),loading:null,ssr:!0},u=function(e){let t={...i,...e},n=(0,r.lazy)(()=>t.loader().then(a)),u=t.loading;function d(e){let a=u?(0,l.jsx)(u,{isLoading:!0,pastDelay:!0,error:null}):null,i=t.ssr?(0,l.jsxs)(l.Fragment,{children:["undefined"==typeof window?(0,l.jsx)(o.PreloadCss,{moduleIds:t.modules}):null,(0,l.jsx)(n,{...e})]}):(0,l.jsx)(s.BailoutToCSR,{reason:"next/dynamic",children:(0,l.jsx)(n,{...e})});return(0,l.jsx)(r.Suspense,{fallback:a,children:i})}return d.displayName="LoadableComponent",d}},1481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return s}});let l=n(7437),r=n(8512);function s(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,r.getExpectedRequestStore)("next/dynamic css"),s=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));s.push(...t)}}return 0===s.length?null:(0,l.jsx)(l.Fragment,{children:s.map(e=>(0,l.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},4571:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var l=n(7437),r=n(551),s=n.n(r),o=n(8576),a=e=>{let{props:t,setProps:n,onSubmit:r}=e;return(0,l.jsxs)("div",{className:"pr-12 space-y-8",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsx)("p",{children:"Enter your Text Here"}),(0,l.jsx)("input",{value:t.text,placeholder:"Your Text",onChange:e=>n({...t,text:e.target.value}),className:"rounded-xl p-4 outline-none border-2 border-black"})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsx)("p",{children:"Choose font"}),(0,l.jsx)("select",{value:t.font,onChange:e=>n({...t,font:e.target.value}),className:"px-12 py-4 text-xl",style:{fontFamily:t.font},children:o.ve.map((e,t)=>(0,l.jsx)("option",{value:e,className:"px-12 py-4 text-sm",style:{fontFamily:e},children:e},t))})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsx)("p",{children:"Choose Color"}),(0,l.jsx)("div",{className:"flex flex-wrap gap-4",children:o.Wh.map((e,r)=>(0,l.jsx)("div",{onClick:l=>n({...t,color:e}),style:{background:e},className:"w-[2rem] h-[2rem] rounded-full cursor-pointer"},r))})]}),(0,l.jsx)("button",{className:"px-8 py-3 rounded-xl border-2 border-black bg-white hover:invert font-bold",onClick:r,children:"Submit"})]})},i=n(2265);let u=s()(()=>Promise.all([n.e(466),n.e(141)]).then(n.bind(n,6141)),{loadableGenerated:{webpack:()=>[6141]},ssr:!1});function d(){let e=(0,i.useRef)(null),[t,n]=(0,i.useState)({text:"",font:"neonhimala",color:"#ff0000"});return(0,l.jsxs)("div",{className:"relative flex gap-24 w-full flex-grow justify-end p-6",children:[(0,l.jsx)(u,{props:t,stageRef:e}),(0,l.jsx)(a,{props:t,setProps:n,onSubmit:()=>(0,o.n)(e)})]})}let c=s()(()=>Promise.all([n.e(466),n.e(975)]).then(n.bind(n,1975)),{loadableGenerated:{webpack:()=>[1975]},ssr:!1}),f=s()(()=>Promise.all([n.e(466),n.e(397)]).then(n.bind(n,9397)),{loadableGenerated:{webpack:()=>[9397]},ssr:!1});var p=()=>{let[e,t]=(0,i.useState)(0);return(0,l.jsxs)("main",{className:"flex min-h-screen flex-col items-center p-12",children:[(0,l.jsx)("div",{className:"flex w-full justify-start gap-4 p-4",children:o.cD.map((e,n)=>(0,l.jsx)("button",{className:"font-bold text-xl shadow-md rounded-xl p-3 hover:bg-slate-400 duration-200",onClick:()=>t(n),children:e},n))}),(()=>{switch(e){case 1:return(0,l.jsx)(c,{});case 2:return(0,l.jsx)(f,{});default:return(0,l.jsx)(d,{})}})()]})}},8576:function(e,t,n){"use strict";n.d(t,{Hy:function(){return a},Wh:function(){return s},cD:function(){return l},n:function(){return o},qg:function(){return i},ve:function(){return r}});let l=["NeonText","FrameAdmin","FrameUser"],r=["neonhimala","plasma03","neonbines"],s=["#ff0000","#00ff00","#0000ff"],o=e=>{let t=e.current.toDataURL(),n=document.createElement("a");n.download="render.png",n.href=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)};class a{addPoint(e,t){this.points.push(e),this.points.push(t)}clear(){this.points=[]}updatePoint(e,t,n){this.points[2*e]=t,this.points[2*e+1]=n}getCount(){return this.points.length/2}constructor(){this.points=[]}}class i{constructor(e,t,n,l){this.x=e,this.y=t,this.w=n,this.h=l,this.image=null,this.id=++i._id}}i._id=0}},function(e){e.O(0,[971,23,744],function(){return e(e.s=2916)}),_N_E=e.O()}]);