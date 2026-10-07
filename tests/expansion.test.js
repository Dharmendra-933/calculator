import { expansionTools } from '../js/data/expansion.js';
import { validateField,validateValues } from '../js/validation.js';
import { assertRows } from '../js/calculators/shared.js';
import { calculators, categories } from '../js/catalog.js';
import { findCalculators } from '../js/utils/search.js';
export function runExpansionTests(){
  const results=[];
  const test=(label,fn)=>{try{fn();results.push(`PASS ${label}`);}catch(e){results.push(`FAIL ${label}: ${e.message}`);}};
  const equal=(a,b)=>{if(typeof b==='number'?Math.abs(a-b)>Math.max(1e-8,Math.abs(b)*1e-8):a!==b)throw new Error(`Expected ${b}, got ${a}`);};
  const run=(id,overrides={})=>{const tool=expansionTools.find(t=>t.id===id);return assertRows(tool.compute(validateValues(tool,{...Object.fromEntries(tool.fields.map(f=>[f.name,f.value])),...overrides})));};
  test('Catalog preserves at least 214 tools with distinct IDs and names',()=>{if(calculators.length<214)throw new Error('Existing catalog lost tools');equal(new Set(calculators.map(t=>t.id)).size,calculators.length);equal(new Set(calculators.map(t=>t.name.toLowerCase())).size,calculators.length);equal(categories.reduce((sum,c)=>sum+c[2],0),calculators.length);});
  for(const query of ['home loan','compound','triangle','ohm','battery','fuel','salary','percentage','date','body fat'])test(`Global alias search: ${query}`,()=>{if(!findCalculators(calculators,query).length)throw new Error('No matching tools');});
  for(const [id,values,want] of [
    ['ohms-law',{solve:'current'},2],['ohms-law',{solve:'resistance'},6],
    ['speed-distance-time',{solve:'time'},10],['speed-distance-time',{solve:'distance'},100],
    ['wave',{solve:'wavelength'},3],['wave',{solve:'speed'},300],
    ['resistor-network',{mode:'parallel'},50],['capacitor-network',{mode:'parallel'},200],
    ['nth-root',{value:-27},-3],['percentage-change',{current:80},-20],
    ['reverse-percentage',{direction:'decrease',final:80},100],
    ['add-days',{date:'2024-03-01',offset:-1},'2024-02-29'],
    ['add-months',{date:'2024-01-31',offset:1},'2024-02-29'],
    ['add-years',{date:'2024-02-29',offset:1},'2025-02-28']
  ])test(`${id}: alternate mode / boundary example`,()=>equal(run(id,values)[0][1],want));
  for(const [id,values] of [['ohms-law',{solve:'resistance',current:0}],['speed-distance-time',{solve:'time',speed:0}],['nth-root',{value:-16,degree:2}],['reverse-percentage',{direction:'decrease',percent:100}],['triangle',{a:1,b:2,c:3}],['linear-two',{a:1,b:1,c:1,d:1,e:1,f:2}]])test(`${id}: impossible or singular input rejected`,()=>{let rejected=false;try{run(id,values);}catch{rejected=true;}if(!rejected)throw new Error('Invalid case accepted');});
  for(const tool of expansionTools){
    const defaults=Object.fromEntries(tool.fields.map(f=>[f.name,f.value]));
    test(`${tool.id}: independently specified worked example`,()=>{const rows=assertRows(tool.compute(validateValues(tool,defaults)));if(tool.random){const result=rows[0][1];if(!Number.isInteger(result)||result<defaults.min||result>defaults.max)throw new Error('Random integer outside range');return;}const expected=Array.isArray(tool.expected)?tool.expected:[tool.expected];expected.forEach((want,k)=>{const got=rows[k][1];if(typeof want==='number'){if(!Number.isFinite(got)||Math.abs(got-want)>Math.max(1e-6,Math.abs(want)*1e-7))throw new Error(`Expected ${want}, got ${got}`);}else if(got!==want)throw new Error(`Expected ${want}, got ${got}`);});});
    for(const f of tool.fields){
      test(`${tool.id}/${f.name}: empty rejected`,()=>{let rejected=false;try{validateField(f,'');}catch{rejected=true;}if(!rejected)throw new Error('Empty input accepted');});
      if(f.type==='number')for(const sample of ['abc','Infinity','0','-1','1.5','1e308'])test(`${tool.id}/${f.name}: ${sample} bounded result or helpful error`,()=>{
        try{const values=validateValues(tool,{...defaults,[f.name]:sample});const rows=tool.compute(values);assertRows(rows);}catch(e){if(!e.message)throw e;if(sample==='abc'||sample==='Infinity')return;if(/outside the supported range/.test(e.message))return;}
      });
    }
  }
  return results;
}
