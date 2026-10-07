// Pure calculations. UI validation is deliberately kept outside this module.
export function gst(amount, rate, mode) {
  const base = mode === 'remove' ? amount / (1 + rate / 100) : amount;
  const tax = base * rate / 100;
  return { base, tax, cgst: tax / 2, sgst: tax / 2, total: base + tax };
}
export function emi(principal, annualRate, months) {
  const r = annualRate / 1200;
  const growth = r ? -Math.expm1(-months * Math.log1p(r)) : 0;
  const monthly = r ? principal * r / growth : principal / months;
  return { monthly, principal, interest: monthly * months - principal, total: monthly * months };
}
export function sip(payment, annualRate, years) {
  const n = years * 12, r = annualRate / 1200;
  const total = r ? payment * Math.expm1(n * Math.log1p(r)) / r * (1 + r) : payment * n;
  return { invested: payment * n, returns: total - payment * n, total };
}
export const percentage = (percent, value) => percent * value / 100;
export function discount(price, rate) { const savings = price * rate / 100; return { savings, total: price - savings, original: price }; }
export function simpleInterest(principal, rate, years) { const interest = principal * rate * years / 100; return { interest, principal, total: principal + interest }; }
export function compoundInterest(principal, rate, years, frequency) { const total = principal * Math.pow(1 + rate / (100 * frequency), frequency * years); return { interest: total - principal, principal, total }; }
export function parseDate(value) { const [y,m,d] = value.split('-').map(Number); const date = new Date(y,m-1,d); if (date.getFullYear() !== y || date.getMonth() !== m-1 || date.getDate() !== d) throw new Error('Enter a valid calendar date.'); return date; }
function anniversary(birth, year) { return new Date(year, birth.getMonth(), Math.min(birth.getDate(), new Date(year,birth.getMonth()+1,0).getDate())); }
function addMonths(date, count) { const y = date.getFullYear(), m = date.getMonth()+count; return new Date(y,m,Math.min(date.getDate(),new Date(y,m+1,0).getDate())); }
const dayNumber = date => Date.UTC(date.getFullYear(),date.getMonth(),date.getDate()) / 86400000;
export function age(birthValue, referenceValue) {
  const birth = parseDate(birthValue), reference = parseDate(referenceValue);
  if (birth > reference) throw new Error('Date of birth must be on or before the reference date.');
  let years = reference.getFullYear()-birth.getFullYear();
  if (anniversary(birth,birth.getFullYear()+years) > reference) years--;
  const yearDate = anniversary(birth,birth.getFullYear()+years);
  let months = (reference.getFullYear()-yearDate.getFullYear())*12+reference.getMonth()-yearDate.getMonth();
  if (addMonths(yearDate,months)>reference) months--;
  const days = dayNumber(reference)-dayNumber(addMonths(yearDate,months));
  let next = anniversary(birth,reference.getFullYear());
  if (next < reference) next = anniversary(birth,reference.getFullYear()+1);
  return { years, months, days, next, until: dayNumber(next)-dayNumber(reference), totalDays: dayNumber(reference)-dayNumber(birth) };
}
export function bmi(weight, height, unit) {
  const meters = unit === 'cm' ? height / 100 : height;
  const value = weight / (meters * meters);
  return { value, category: value < 18.5 ? 'Underweight' : value < 25 ? 'Healthy weight' : value < 30 ? 'Overweight' : 'Obesity' };
}
export const lengthFactors = { mm: .001, cm: .01, m: 1, km: 1000, in: .0254, ft: .3048, yd: .9144, mi: 1609.344 };
export const length = (value, from, to) => value * lengthFactors[from] / lengthFactors[to];
export function temperature(value, from, to) { const c = from === 'C' ? value : from === 'F' ? (value - 32) * 5 / 9 : value - 273.15; if (c < -273.15000001) throw new Error('Temperature cannot be below absolute zero.'); return to === 'C' ? c : to === 'F' ? c * 9 / 5 + 32 : c + 273.15; }
// A small expression parser; no eval or dynamic code execution.
export function basic(expression) {
  const source = expression.replace(/\s/g,'').replace(/×/g,'*').replace(/÷/g,'/');
  const tokens = source.match(/(?:\d+(?:\.\d*)?|\.\d+)|[()+\-*/]/g) || [];
  if (!source || tokens.join('') !== source) throw new Error('Use numbers, parentheses and + − × ÷ only.');
  let i=0;
  function atom() { const t=tokens[i++]; if(t==='+') return atom(); if(t==='-') return -atom(); if(t==='('){ const n=sum(); if(tokens[i++]!==')') throw new Error('Close every parenthesis.'); return n; } if(!t || !/^(\d|\.)/.test(t)) throw new Error('Enter a complete expression.'); return Number(t); }
  function product(){let n=atom();while(tokens[i]==='*'||tokens[i]==='/'){const op=tokens[i++],r=atom();if(op==='/'&&r===0)throw new Error('Cannot divide by zero.');n=op==='*'?n*r:n/r;}return n;}
  function sum(){let n=product();while(tokens[i]==='+'||tokens[i]==='-'){const op=tokens[i++],r=product();n=op==='+'?n+r:n-r;}return n;}
  const result=sum();if(i!==tokens.length)throw new Error('Check the expression and parentheses.');if(!Number.isFinite(result))throw new Error('Result is too large. Use smaller numbers.');return result;
}
