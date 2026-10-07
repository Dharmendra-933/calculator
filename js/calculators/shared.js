// Shared definition helpers keep domain modules concise without hiding formulas.
export const n=(name,label,value,min=0,extra={})=>({name,label,value,type:'number',...(min===null?{}:{min}),...extra});
export const p=(name,label,value,extra={})=>n(name,label,value,0,{exclusiveMin:true,...extra});
export const i=(name,label,value,min=0,max=100000)=>n(name,label,value,min,{integer:true,max});
export const t=(name,label,value)=>({name,label,value,type:'text'});
export const s=(name,label,options,value)=>({name,label,options,value,type:'select'});
export const d=(name,label,value='2026-01-01')=>({name,label,value,type:'date'});
export const r=(label,value,format='precise')=>[label,value,format];
export const m=(label,value)=>r(label,value,'money');
export const txt=(label,value)=>[label,value];
export function requireCondition(condition,message){if(!condition)throw new Error(message);}
export function divide(a,b){requireCondition(b!==0,'The denominator must not be zero.');return a/b;}
export function tool(id,name,category,description,fields,formula,compute,expected,options={}){
  return {id,name:/Calculator|Converter|Checker$/.test(name)?name:`${name} Calculator`,category,description,fields,formula,compute,expected,expansion:true,
    icon:({'Finance':'₹','Loans':'▥','Tax & Salary':'₹','Business':'▥','Math':'∑','Algebra':'x','Geometry':'△','Health':'♡','Date & Time':'◷','Converters':'⇄','Physics':'F','Electrical':'ϟ','Construction':'▱','Travel':'↗','Everyday':'◇'})[category]||'◇',
    how:`${description} Enter ${fields.map(f=>f.label.toLowerCase()).join(', ')}. Select Calculate to see the result, or Reset to restore the worked example.`,
    example:`Example inputs: ${fields.map(f=>`${f.label}: ${f.value}`).join('; ')}. Expected main result: ${options.random?'an integer within the selected range':Array.isArray(expected)?expected[0]:expected}.`,
    faq:['What does this calculation assume?',options.note||`This tool uses ${formula}. Input units are indicated in the labels; display rounding does not alter the intermediate calculation.`],...options};
}
export function assertRows(rows){
  requireCondition(Array.isArray(rows)&&rows.length>0,'No result could be calculated.');
  for(const [,value] of rows)requireCondition(value!==null&&value!==undefined&&(typeof value!=='number'||Number.isFinite(value))&&!/\b(?:NaN|Infinity|undefined|null)\b/.test(String(value)),'The result is outside the supported range. Check your inputs or use smaller values.');
  return rows;
}
export const financeNote='Illustrative estimate using constant rates supplied by you; excludes taxes, fees and market variability.';
export const healthNote='For informational purposes only. This is not medical advice. Adult planning estimate; not intended for children, pregnancy or diagnosis.';
export const constructionNote='Estimated quantities. Confirm dimensions, waste, material specifications and site conditions with your supplier.';
