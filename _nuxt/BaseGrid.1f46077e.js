import{e as l,o as e,J as s,a5 as d,a6 as c,V as i,c as m,a7 as p,K as r,U as o}from"./entry.69f38b7d.js";const u=["data-aos-delay"],g={class:"text-xl font-bold"},b=l({__name:"BaseGrid",props:{blocks:{type:Object,required:!0},gridSize:{type:Number,default:()=>4},gapSize:{type:Number,default:()=>6}},setup(a){return(y,f)=>(e(),s("div",{class:"mb-16 grid max-w-none lg:mb-32",style:i({"grid-template-columns":`repeat(${a.gridSize}, minmax(0, 1fr))`,gap:`${a.gapSize*.25}rem`})},[(e(!0),s(d,null,c(a.blocks,(t,n)=>(e(),s("div",{key:n,"data-aos":"fade-in","data-aos-duration":"1500","data-aos-delay":200*n,class:"col-span-4 space-y-6 rounded-3xl bg-slate-800 p-6 text-center dark:text-gray-50 lg:col-span-1"},[(e(),m(p(t.icon),{size:"64",class:"m-auto"})),r("h4",g,o(t.title),1),r("p",null,o(t.content),1)],8,u))),128))],4))}});export{b as default};
