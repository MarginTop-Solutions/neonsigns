"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[397],{9397:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var i=n(7437),l=n(4469),a=n(2265),r=n(2466);let d=["VIEW","UPLOAD"];function s(){let[e,t]=(0,a.useState)("VIEW"),{rects:n,setRectImage:s,frameImage:c}=(0,a.useContext)(l.l),o=t=>{if("UPLOAD"!==e)return;let n=document.createElement("input");n.type="file",n.accept="image/*",n.style.display="none",n.addEventListener("change",e=>{let n=e.target.files[0];if(n){let e=new FileReader;e.onload=e=>{let n=new window.Image;n.src=e.target.result,n.onload=()=>s(t,n)},e.readAsDataURL(n)}}),document.body.appendChild(n),n.click(),n.addEventListener("change",()=>{document.body.removeChild(n)})};return(0,i.jsxs)("div",{className:"relative flex gap-2 items-start w-full flex-grow rounded-xl",children:[d.map(n=>(0,i.jsx)("button",{onClick:()=>t(n),className:"z-10 p-2 bg-zinc-300 rounded-xl ".concat(n===e&&"invert"),children:n},n)),(0,i.jsx)(r.Hf,{width:window.innerWidth,height:window.innerHeight,className:"absolute",draggable:!0,children:(0,i.jsx)(r.mh,{children:(0,i.jsxs)(r.ZA,{className:"bg-red-100",children:[c&&(0,i.jsx)(r.Ee,{image:c,x:0,y:0}),Object.entries(n).map(t=>{let[n,l]=t;return(0,i.jsxs)(r.ZA,{x:l.x,y:l.y,width:l.w,height:l.h,onClick:e=>o(l),clipWidth:l.w,clipHeight:l.h,children:[(0,i.jsx)(r.UL,{x:0,y:0,width:l.w,height:l.h,stroke:"#aa03",fill:"#aa03",strokeWidth:4}),l.image&&(0,i.jsx)(r.Ee,{draggable:"VIEW"===e,image:l.image,onDblClick:e=>s(l,null)})]},n)})]})})})]})}},4469:function(e,t,n){n.d(t,{l:function(){return a},FrameProvider:function(){return r}});var i=n(7437),l=n(2265);let a=(0,l.createContext)(),r=e=>{let{children:t}=e,[n,r]=(0,l.useState)({}),[d,s]=(0,l.useState)(null);return(0,l.useEffect)(()=>{let e=new window.Image;e.onload=()=>{s(e)},e.src="/_next/static/media/family.b37c66ff.png"},[]),(0,i.jsx)(a.Provider,{value:{rects:n,setRects:r,removeRect:e=>{let{[e]:t,...i}=n;r(i)},setRectImage:(e,t)=>{e.image=t,r({...n,[e.id]:e})},frameImage:d},children:t})}}}]);