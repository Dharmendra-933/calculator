import { expansionTools } from '../data/expansion.js';
import {amortizationRows} from './amortization.js';
import { assertRows } from './shared.js';
const expansionById=new Map(expansionTools.map(c=>[c.id,c]));
import * as calc from './logic.js';
import { computeExtended } from './extended.js';
import { config } from '../config.js';
const num=(value,digits=2)=>new Intl.NumberFormat(config.locale,{maximumFractionDigits:digits}).format(value);
export function compute(id,v){
  if(id==='loan')return assertRows([...computeExtended(id,v),...amortizationRows(v.principal,v.rate,v.tenure*(v.unit==='years'?12:1))]);
  if(expansionById.has(id))return assertRows(expansionById.get(id).compute(v));
  const M=(label,value)=>[label,value,'money'];
  switch(id){
    case 'gst':{const r=calc.gst(v.amount,v.rate,v.mode);return[M('Final amount',r.total),M('Base amount',r.base),M('GST amount',r.tax),M('CGST',r.cgst),M('SGST',r.sgst)];}
    case 'emi':{const months=v.tenure*(v.unit==='years'?12:1);if(!Number.isInteger(months)||months<1)throw new Error('Tenure must equal a whole number of months.');const r=calc.emi(v.principal,v.rate,months);return[M('Monthly EMI',r.monthly),M('Principal amount',r.principal),M('Total interest',r.interest),M('Total payment',r.total)];}
    case 'sip':{if(!Number.isInteger(v.years*12))throw new Error('Duration must equal a whole number of months.');const r=calc.sip(v.payment,v.rate,v.years);return[M('Estimated maturity value',r.total),M('Total invested',r.invested),M('Estimated returns',r.returns)];}
    case 'percentage':return[['Result',calc.percentage(v.percent,v.value),'number'],['Calculation',`${num(v.percent)}% of ${num(v.value)}`]];
    case 'discount':{const r=calc.discount(v.price,v.rate);return[M('Final price',r.total),M('You save',r.savings),M('Original price',r.original)];}
    case 'simple-interest':case 'compound-interest':{const r=id==='simple-interest'?calc.simpleInterest(v.principal,v.rate,v.years):calc.compoundInterest(v.principal,v.rate,v.years,Number(v.frequency));return[M('Total amount',r.total),M('Interest earned',r.interest),M('Principal amount',r.principal)];}
    case 'age':{const r=calc.age(v.birth,v.reference);return[['Your age',`${r.years} years, ${r.months} months, ${r.days} days`],['Total days',r.totalDays,'number'],['Next birthday',r.next.toLocaleDateString(config.locale,{day:'numeric',month:'long',year:'numeric'})],['Birthday countdown',r.until===0?'Today!':`${num(r.until)} days`]];}
    case 'bmi':{const r=calc.bmi(v.weight,v.height,v.unit);if(!Number.isFinite(r.value))throw new Error('Result is too large. Please check your height and weight.');return[['Body mass index',r.value.toFixed(1)],['Standard category',r.category],['Healthy adult BMI range','18.5–24.9']];}
    case 'length':{const converted=calc.length(v.value,v.from,v.to);if(!Number.isFinite(converted))throw new Error('Result is too large. Please use a smaller length.');return[['Converted length',`${num(converted,8)} ${v.to}`],['Original length',`${num(v.value,8)} ${v.from}`]];}
    case 'temperature':{const converted=calc.temperature(v.value,v.from,v.to);if(!Number.isFinite(converted))throw new Error('Result is too large. Please use a smaller temperature.');return[['Converted temperature',`${num(converted,8)} ${v.to==='K'?'K':'°'+v.to}`],['Original temperature',`${num(v.value,8)} ${v.from==='K'?'K':'°'+v.from}`]];}
    case 'basic':return[['Result',calc.basic(v.expression),'precise'],['Expression',v.expression]];
    default:return computeExtended(id,v);
  }
}
