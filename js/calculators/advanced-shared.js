import {tool,n,p,i,t,s,r,txt,requireCondition as check} from './shared.js';
import {numberList} from './extended.js';
export {n,p,i,t,s,r,txt,check};
export const data=(name='numbers',label='Dataset (commas, spaces or new lines)',value='1, 2, 3, 4')=>({...t(name,label,value),multiline:true});
export function list(text){const a=numberList(text);check(a.length<=5000,'Use at most 5,000 values.');return a;}
export const sum=a=>a.reduce((x,y)=>x+y,0);
export const mean=a=>sum(a)/a.length;
export function paired(x,y){const a=list(x),b=list(y);check(a.length===b.length&&a.length>=2,'Datasets must have the same length and at least two values.');return[a,b];}
export const make=category=>(id,name,description,fields,formula,fn,expected,options={})=>({...tool(id,name,category,description,fields,formula,fn,expected,options),advanced:true});
export function quantile(a,q){const sorted=[...a].sort((x,y)=>x-y),h=(sorted.length-1)*q,k=Math.floor(h);return sorted[k]+(h-k)*((sorted[k+1]??sorted[k])-sorted[k]);}
export function sampleSD(a){check(a.length>1,'At least two observations are required.');const m=mean(a);return Math.sqrt(sum(a.map(x=>(x-m)**2))/(a.length-1));}
export function big(text){check(/^[+-]?\d+$/.test(text)&&text.replace(/\D/g,'').length<=1000,'Enter an integer with at most 1,000 digits.');return BigInt(text);}
export function gcd(a,b){a=a<0n?-a:a;b=b<0n?-b:b;while(b)[a,b]=[b,a%b];return a;}
