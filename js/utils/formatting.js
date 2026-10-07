import { config } from '../config.js';
export const money=value=>new Intl.NumberFormat(config.locale,{style:'currency',currency:config.currency,maximumFractionDigits:2}).format(value);
export const num=(value,digits=2)=>new Intl.NumberFormat(config.locale,{maximumFractionDigits:digits}).format(value);
export function formatResult(value,format){
  if(format==='money')return money(value);
  if(format==='number')return num(value);
  if(format==='precise'){
    if(value!==0&&Math.abs(value)<1e-6)return value.toExponential(6);
    return num(value,8);
  }
  return String(value);
}
