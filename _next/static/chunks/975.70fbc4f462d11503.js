"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[975],{1975:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(7437),i=n(2466),l=n(2265),a=n(4469),s=n(8576);let o=["VIEW","DRAW","DELETE"];function u(){let{rects:e,setRects:t,removeRect:n,frameImage:u}=(0,l.useContext)(a.l),[d,x]=(0,l.useState)("VIEW"),[c,g]=(0,l.useState)(null);return(0,r.jsxs)("div",{className:"relative flex gap-2 items-start w-full flex-grow rounded-xl",children:[o.map(e=>(0,r.jsx)("button",{onClick:()=>x(e),className:"z-10 p-2 bg-zinc-300 rounded-xl ".concat(e===d&&"invert"),children:e},e)),(0,r.jsxs)(i.Hf,{width:window.innerWidth,height:window.innerHeight,onMouseDown:n=>{if("DRAW"!==d)return;let r=n.target.getStage().getRelativePointerPosition();if(console.log(r),c){let n=new s.qg(c.x,c.y,c.ex-c.x,c.ey-c.y);t({...e,[n.id]:n}),g(null)}else g({x:r.x,y:r.y,ex:r.x,ey:r.y})},onMouseMove:e=>{if("DRAW"!==d||!c)return;let t=e.target.getStage().getRelativePointerPosition();g(e=>({...e,ex:t.x,ey:t.y}))},className:"absolute top-0 left-0 bg-slate-200 rounded-xl",draggable:"VIEW"===d,children:[(0,r.jsx)(i.mh,{children:(0,r.jsxs)(i.ZA,{className:"bg-red-100",children:[u&&(0,r.jsx)(i.Ee,{image:u,x:0,y:0}),Object.entries(e).map(e=>{let[t,l]=e;return(0,r.jsx)(i.UL,{x:l.x,y:l.y,width:l.w,height:l.h,stroke:"#aa0",strokeWidth:4,fill:"#aa0",onClick:e=>"DELETE"===d&&n(t),draggable:"VIEW"===d,onDragEnd:e=>{l.x=e.target.x(),l.y=e.target.y()}},t)})]})}),(0,r.jsx)(i.mh,{children:c&&(0,r.jsx)(i.UL,{x:c.x,y:c.y,width:c.ex-c.x,height:c.ey-c.y,stroke:"#0aa",strokeWidth:4})})]})]})}},4469:function(e,t,n){n.d(t,{l:function(){return l},FrameProvider:function(){return a}});var r=n(7437),i=n(2265);let l=(0,i.createContext)(),a=e=>{let{children:t}=e,[n,a]=(0,i.useState)({}),[s,o]=(0,i.useState)(null);return(0,i.useEffect)(()=>{let e=new window.Image;e.onload=()=>{o(e)},e.src="/_next/static/media/family.b37c66ff.png"},[]),(0,r.jsx)(l.Provider,{value:{rects:n,setRects:a,removeRect:e=>{let{[e]:t,...r}=n;a(r)},setRectImage:(e,t)=>{e.image=t,a({...n,[e.id]:e})},frameImage:s},children:t})}}}]);