var a=Object.defineProperty;var o=(n,r)=>a(n,"name",{value:r,configurable:!0});import{a as d,j as e}from"./jsx-runtime.fec758dc.js";function t({tokens:n,hasRemValue:r=!1}){return d("table",{className:"tokens-grid",children:[e("thead",{children:d("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Value"}),r&&e("th",{children:"Pixels"})]})}),e("tbody",{children:Object.entries(n).map(([s,i])=>d("tr",{children:[e("td",{children:s}),e("td",{children:i}),r&&d("td",{children:[Number(i.replace("rem",""))*16,"px"]})]},s))})]})}o(t,"TokensGrid");try{t.displayName="TokensGrid",t.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/TokensGrid.tsx#TokensGrid"]={docgenInfo:t.__docgenInfo,name:"TokensGrid",path:"src/components/TokensGrid.tsx#TokensGrid"})}catch{}export{t as T};
//# sourceMappingURL=TokensGrid.1b0e5be2.js.map
