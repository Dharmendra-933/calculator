import {calculators,categories} from '../js/catalog.js';
import {compute} from '../js/calculators/compute.js';
import {validateValues,validateField} from '../js/validation.js';
import {assertRows} from '../js/calculators/shared.js';
import {findCalculators} from '../js/utils/search.js';
import {normalizeRequested} from '../js/utils/request-matching.js';
export async function runAdvancedTests(){
 const results=[],test=(name,fn)=>{try{fn();results.push('PASS '+name);}catch(e){results.push('FAIL '+name+': '+e.message);}};
 const equal=(a,b)=>{if(typeof b==='number'?typeof a!=='number'||!Number.isFinite(a)||Math.abs(a-b)>Math.max(1e-7,Math.abs(b)*1e-8):a!==b)throw new Error(`Expected ${b}, got ${a}`);};
 const run=(id,values={})=>{const t=calculators.find(t=>t.id===id);return assertRows(compute(id,validateValues(t,{...Object.fromEntries(t.fields.map(f=>[f.name,f.value])),...values})));};
 const rejects=(id,values)=>{let caught=false;try{run(id,values);}catch(e){caught=!!e.message;}if(!caught)throw new Error('Expected a useful validation error');};
 const baseline=await fetch('../docs/ADVANCED-BASELINE.json').then(r=>r.json());
 test('All previous 214 names, IDs, routes and categories preserved',()=>{equal(baseline.count,214);for(const prior of baseline.calculators){const current=calculators.find(t=>t.id===prior.id);if(!current)throw new Error('Missing '+prior.id);equal(current.name,prior.name);equal(current.category,prior.category);equal('#/calculator/'+current.id,prior.route);}});
 test('328 names, IDs and routes are unique; categories total correctly',()=>{equal(calculators.length,328);equal(new Set(calculators.map(t=>t.id)).size,328);equal(new Set(calculators.map(t=>t.name.toLowerCase())).size,328);equal(categories.reduce((sum,c)=>sum+c[2],0),328);});
 const requests=await fetch('../docs/ADVANCED-REQUESTS.json').then(r=>r.json());
 for(const request of requests)test('Requested function indexed: '+request,()=>{const matching=calculators.filter(t=>[t.name,...t.aliases].some(a=>normalizeRequested(a)===normalizeRequested(request)));if(!matching.length)throw new Error('No exact normalized name or alias');if(!findCalculators(calculators,request.replace(/ Calculator| Converter| Checker| Generator/g,'')).length)throw new Error('Global search cannot find the requested function');});
 for(const t of calculators.filter(t=>t.advanced))for(const f of t.fields){
  if(f.type==='select')test(`${t.id}/${f.name}: unknown option rejected`,()=>{let caught=false;try{validateField(f,'unsupported');}catch{caught=true;}if(!caught)throw new Error('Invalid option accepted');});
  if(f.type==='number')for(const bad of ['abc','Infinity','NaN'])test(`${t.id}/${f.name}: ${bad} rejected`,()=>{let caught=false;try{validateField(f,bad);}catch{caught=true;}if(!caught)throw new Error('Invalid number accepted');});
 }
 const cases=[
 ['npv',{rate:0},200],['irr',{flows:'-100 100'},0],['growing-annuity',{growth:10},1818.18181818],['perpetuity',{growth:5},20000],
 ['payback',{flows:'100 100'},'Not recovered within the entered periods'],
 ['matrix-determinant',{a:'1 0 0;0 2 0;0 0 3'},6],['matrix-multiply',{a:'1 2 3',b:'1;2;3'},'14'],
 ['matrix-add',{mode:'subtract'},'-4, -4; -4, -4'],['polynomial',{operation:'evaluate'},4],['polynomial',{operation:'add'},'2, 5'],
 ['complex-number',{operation:'multiply'},0],['complex-number',{operation:'divide'},.8],
 ['law-cosines',{mode:'angle'},90],['advanced-trig',{function:'atan',value:1},45],['advanced-trig',{function:'sec',value:60},2],
 ['number-base',{value:'FF',from:16,to:2},'11111111'],['base-arithmetic',{operation:'divide'},'10'],['roman-numerals',{value:'MCMXCIV'},1994],
 ['modular-arithmetic',{a:'-5',b:'3',operation:'add'},'5'],['factors',{mode:'common'},'1, 2, 3, 6'],
 ['confidence-interval',{count:400},.97998199227],['outliers',{numbers:'1 2 3 4'},'None'],['odds',{probability:0},0],
 ['ipv4-subnet',{cidr:'10.0.0.3/31'},'10.0.0.2'],['ipv4-subnet',{cidr:'255.255.255.255/32'},'255.255.255.255'],
 ['raid',{level:'10'},4],['ac-power',{phase:'three',voltage:400},5542.56258422],
 ['heat-energy',{solve:'specific'},4180],['ideal-gas',{solve:'volume'},.0249433878545],
 ['molar-mass',{formula:'Ca(OH)2'},74.092],['moles-mass',{solve:'mass'},18],['solution-concentration',{basis:'molality',solvent:2},1],
 ['ph-poh',{kind:'hydrogen',value:.000001},6],['dilution',{solve:'concentration'},.5],
 ['bigha',{from:'ft2',to:'bigha',value:14400},1],['plot-area',{points:'0,0;4,0;0,3'},6],
 ['timesheet',{shifts:'22:00-06:00/30'},7.5],['final-grade',{solve:'required'},100],['required-attendance',{target:100},'100% cannot be reached in a finite number of sessions after an absence'],
 ['transfer-time',{solve:'speed'},10],['battery-energy',{solve:'capacity'},10],['density',{solve:'mass'},10],['doubling-time',{multiple:3},11.5267046072]
 ];
 for(const [id,values,want] of cases)test(`${id}: independent alternate/boundary value`,()=>equal(run(id,values)[0][1],want));
 for(const [id,values] of [
 ['irr',{flows:'-100 200 -50'}],['matrix-inverse',{a:'1 2;2 4'}],['matrix-multiply',{a:'1 2;3 4',b:'1 2 3'}],
 ['linear-three',{a:'1 1 1;1 1 1;1 1 1'}],['complex-number',{operation:'divide',c:0,d:0}],
 ['roman-numerals',{value:'IIII'}],['number-base',{value:'2',from:2}],['modular-arithmetic',{modulus:'0'}],
 ['law-sines',{A:100,B:100}],['advanced-trig',{function:'sec',value:90}],['advanced-trig',{function:'asin',value:2}],
 ['molar-mass',{formula:'Un2'}],['molar-mass',{formula:'H0'}],['molar-mass',{formula:'(H2O'}],['ph-poh',{kind:'hydrogen',value:0}],
 ['plot-area',{points:'0,0;2,2;0,2;2,0'}],['ipv4-subnet',{cidr:'256.1.1.1/24'}],['ipv4-subnet',{cidr:'1.2.3.4/33'}],
 ['raid',{level:'10',drives:5}],['timesheet',{shifts:'09:00-10:00/90'}],['required-attendance',{attended:101}],
 ['vehicle-depreciation',{floor:2000000}],['battery-energy',{solve:'capacity',voltage:0}],['density',{solve:'volume',density:0}]
 ])test(`${id}: invalid domain rejected`,()=>rejects(id,values));
 test('Loan includes principal/interest/balance schedule and zero-rate payoff',()=>{const rows=run('loan',{principal:1200,rate:0,tenure:12,unit:'months'});equal(rows[0][1],100);if(!rows.find(([label,value])=>label==='Month 12'&&value.includes('₹0.00')))throw new Error('Final schedule balance missing');});
 return results;
}
