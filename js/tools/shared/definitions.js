export const text=(name,label,value='',optional=false)=>({name,label,value,type:'text',multiline:true,optional});
export const line=(name,label,value='',optional=false)=>({name,label,value,type:'text',optional});
export const number=(name,label,value,min=0,max=100000)=>({name,label,value,type:'number',min,max,integer:true});
export const select=(name,label,options,value)=>({name,label,type:'select',options:options.map(x=>Array.isArray(x)?x:[x,x]),value});
export const color=(name,label,value)=>({name,label,type:'color',value});
export function tool(category,module,id,name,description,fields,aliases=[],options={}){return{id,name,category,module,description,fields,aliases,kind:'Tool',icon:'◇',route:`#/tool/${id}`,instructions:description+' Choose the appropriate options, then select Process. Copy or download the output, or Clear to discard it.',faq:['Where is my input processed?','Processing happens in this browser. Input content is not saved to local storage or sent to a service.'],...options};}
