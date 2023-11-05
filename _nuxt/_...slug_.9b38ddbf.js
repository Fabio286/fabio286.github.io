import v from"./ContentRenderer.4c5778a6.js";import{_ as p}from"./BasePageContent.vue.e1dec453.js";import b from"./ContentDoc.d8f21e19.js";import{f as u,u as d,o as f,c as x,b as t,w as e,d as m,t as a,g as o,a as s,E as k,H as w}from"./entry.b93f07bf.js";import{T as $,H as C}from"./components.821f78e5.js";import{_ as H}from"./nuxt-link.8bdfdc24.js";import{u as N}from"./composables.61808a85.js";import"./ContentRendererMarkdown.vue.6852dcfe.js";import"./index.288f722b.js";import"./preview.3356906a.js";import"./vue.f36acd1f.1bad46c9.js";import"./ContentQuery.3c791a80.js";import"./query.74a4740a.js";const T={class:"overflow-hidden"},B={class:"-mt-24 flex h-screen items-center justify-center"},E={class:"space-y-10 pt-44 text-center"},I={class:"text-7xl font-bold dark:text-gray-50"},P=u({__name:"NotFound",setup(h){const c=N(),{t:r}=d();return(g,i)=>{const _=$,l=C,n=H,y=p;return f(),x("div",T,[t(l,null,{default:e(()=>[t(_,null,{default:e(()=>[m(a(o(r)("message.error404")),1)]),_:1})]),_:1}),t(y,null,{default:e(()=>[s("div",B,[s("div",E,[t(o(k),{class:"mx-auto dark:text-gray-50",size:"128"}),s("h1",I,a(o(r)("message.pageNotFound")),1),t(n,{to:o(c)("/"),class:"inline-flex items-center justify-center whitespace-nowrap rounded-2xl bg-gradient-to-tr from-orange-700 to-orange-500 py-3 px-5 text-2xl font-semibold uppercase text-white hover:opacity-80 focus:ring-2 focus:ring-blue-400"},{default:e(()=>[t(o(w),{class:"mr-2"}),m(" "+a(o(r)("message.goToHome")),1)]),_:1},8,["to"])])])]),_:1})])}}}),V={class:"pb-20 dark:text-stone-50"},j={class:"px-5 py-16"},D={class:"text-5xl"},F={class:"text-5xl"},W=u({__name:"[...slug]",setup(h){const{t:c}=d();return(r,g)=>{const i=v,_=p,l=b;return f(),x("main",null,[t(l,null,{default:e(({doc:n})=>[t(_,null,{default:e(()=>[s("div",V,[s("div",j,[s("h1",D,a(n.fullTitle||n.title),1)]),t(i,{class:"prose max-w-none rounded-3xl bg-white p-8 dark:prose-invert dark:bg-stone-800",value:n},null,8,["value"])])]),_:2},1024)]),"not-found":e(()=>[t(P)]),empty:e(()=>[s("h1",F,a(o(c)("message.documentIsEmpty")),1)]),_:1})])}}});export{W as default};