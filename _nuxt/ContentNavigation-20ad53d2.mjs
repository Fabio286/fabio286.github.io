import{w as f,a as i,j as c,b as h,d as v,t as m,c as g,u as d,h as y}from"./entry-9390b8c4.mjs";const l=e=>{const t=e==null?void 0:e.params(),n=f(t?`/navigation/${i(t)}`:"/navigation");return $fetch(n,{method:"GET",responseType:"json",params:{_params:c(t||{}),previewToken:h("previewToken").value}})};var C=v({props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=m(e),{data:n,refresh:a}=await g(`content-navigation-${i(t.value)}`,()=>l(t.value),"$Xi87ZVr2zG");return{data:n,refresh:a}},render(e){var o;const t=d(),{query:n,data:a,refresh:r}=e,s=(p,u)=>y("pre",null,JSON.stringify({message:"You should use slots with <ContentNavigation>",slot:p,data:u},null,2));return(t==null?void 0:t.empty)&&(!a||!(a!=null&&a.length))?((o=t==null?void 0:t.empty)==null?void 0:o.call(t,{query:n,...this.$attrs}))||s("empty",{query:n,data:a}):t!=null&&t.default?t.default({navigation:a,refresh:r,...this.$attrs}):s("default",a)}});export{C as default};
