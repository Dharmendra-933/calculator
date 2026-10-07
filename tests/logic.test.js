import {runAdvancedTests} from './advanced.test.js';
import { runExpansionTests } from './expansion.test.js';
import * as c from '../js/calculators/logic.js';
import { runExtendedTests } from './extended.test.js';
const tests=[];
function test(name,fn){try{fn();tests.push(`PASS ${name}`);}catch(e){tests.push(`FAIL ${name}: ${e.message}`);}}
function close(actual,expected,tolerance=.00001){if(!Number.isFinite(actual)||Math.abs(actual-expected)>tolerance)throw new Error(`Expected ${expected}, got ${actual}`);}
function equal(a,b){if(a!==b)throw new Error(`Expected ${b}, got ${a}`);}
function throws(fn){let thrown=false;try{fn();}catch{thrown=true;}if(!thrown)throw new Error('Expected rejection');}
test('GST add and split',()=>{const r=c.gst(10000,18,'add');close(r.total,11800);close(r.cgst,900);close(r.sgst,900);});
test('GST inclusive inverse',()=>{const r=c.gst(11800,18,'remove');close(r.base,10000);close(r.tax,1800);});
test('GST zero rate',()=>close(c.gst(100,0,'remove').total,100));
test('EMI standard formula',()=>close(c.emi(500000,8.5,60).monthly,10258.265679,.001));
test('EMI zero interest',()=>{const r=c.emi(12000,0,12);equal(r.monthly,1000);equal(r.interest,0);});
test('SIP beginning of month',()=>{const r=c.sip(5000,12,10);close(r.total,1161695.381,.01);equal(r.invested,600000);});
test('SIP zero return',()=>equal(c.sip(5000,0,10).total,600000));
test('Percentage including negative',()=>{equal(c.percentage(20,250),50);equal(c.percentage(-20,250),-50);});
test('Discount',()=>{equal(c.discount(2000,15).total,1700);equal(c.discount(2000,100).total,0);});
test('Simple interest',()=>equal(c.simpleInterest(10000,5,3).interest,1500));
test('Compound interest annually',()=>close(c.compoundInterest(10000,5,3,1).total,11576.25));
test('Compound interest monthly',()=>close(c.compoundInterest(10000,12,1,12).total,11268.250301));
test('Age exact birthday',()=>{const r=c.age('2000-01-01','2025-01-01');equal(r.years,25);equal(r.months,0);equal(r.days,0);equal(r.until,0);});
test('Age leap day',()=>{const r=c.age('2000-02-29','2025-02-28');equal(r.years,25);equal(r.months,0);equal(r.days,0);});
test('Age month end',()=>{const r=c.age('2000-01-31','2025-03-01');equal(r.years,25);equal(r.months,1);equal(r.days,1);});
test('Age rejects future and invalid dates',()=>{throws(()=>c.age('2030-01-01','2025-01-01'));throws(()=>c.age('2000-02-31','2025-01-01'));});
test('BMI and unit equivalence',()=>{close(c.bmi(70,175,'cm').value,22.857142857);equal(c.bmi(70,1.75,'m').category,'Healthy weight');});
test('BMI category boundaries',()=>{equal(c.bmi(18.5,1,'m').category,'Healthy weight');equal(c.bmi(25,1,'m').category,'Overweight');equal(c.bmi(30,1,'m').category,'Obesity');});
test('Length exact factors',()=>{close(c.length(1,'mi','m'),1609.344);close(c.length(12,'in','ft'),1);close(c.length(1,'m','ft'),3.280839895);});
test('Temperature',()=>{close(c.temperature(25,'C','F'),77);close(c.temperature(32,'F','C'),0);close(c.temperature(0,'K','C'),-273.15);throws(()=>c.temperature(-1,'K','C'));});
test('Basic precedence and unary',()=>{equal(c.basic('12 × (8 + 2)'),120);equal(c.basic('2+3*4'),14);equal(c.basic('-3 * -2'),6);equal(c.basic('.5+1.5'),2);});
test('Basic rejects bad input and divide by zero',()=>{throws(()=>c.basic('1/0'));throws(()=>c.basic('alert(1)'));throws(()=>c.basic('2+'));throws(()=>c.basic('(2+3'));throws(()=>c.basic('2(3)'));});
tests.push(...runExtendedTests(),...runExpansionTests(),...await runAdvancedTests());
const report=`${tests.join('\n')}\n\n${tests.filter(t=>t.startsWith('PASS')).length}/${tests.length} passed`;
document.querySelector('#output').textContent=report;
window.testResults={passed:tests.filter(t=>t.startsWith('PASS')).length,total:tests.length,report};
