export const check=(value,message)=>{if(!value)throw new Error(message);};
export const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const output=(text,extra={})=>({text:String(text),...extra});
export function bounded(text,max=1000000){check(text.length<=max,`Use at most ${max.toLocaleString()} characters.`);return text;}
export function randomInt(max){check(Number.isSafeInteger(max)&&max>0&&max<=4294967296,'Random bound must be a positive integer within 2³².');const limit=Math.floor(4294967296/max)*max,a=new Uint32Array(1);do{crypto.getRandomValues(a);}while(a[0]>=limit);return a[0]%max;}
export const choose=a=>a[randomInt(a.length)];
export function shuffle(values){const a=[...values];for(let k=a.length-1;k>0;k--){const j=randomInt(k+1);[a[k],a[j]]=[a[j],a[k]];}return a;}
export function words(text){return text.match(/[\p{L}\p{N}][\p{L}\p{N}\p{M}]*(?:['’][\p{L}\p{N}][\p{L}\p{N}\p{M}]*)*/gu)||[];}
export function graphemes(text){return typeof Intl.Segmenter==='function'?[...new Intl.Segmenter(undefined,{granularity:'grapheme'}).segment(text)].map(x=>x.segment):Array.from(text);}
export function textBlob(text,type='text/plain;charset=utf-8'){return new Blob([text],{type});}
export function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.hidden=true;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
export async function fileBytes(file,max=50*1024*1024){check(file&&file.size<=max,'Choose a file no larger than '+Math.round(max/1024/1024)+' MB.');return new Uint8Array(await file.arrayBuffer());}
export function loadScript(path,globalName){const key=new URL('../../../assets/vendor/'+path,import.meta.url).href;if(!scripts.has(key))scripts.set(key,new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=key;s.onload=()=>resolve(globalThis[globalName]);s.onerror=()=>{scripts.delete(key);s.remove();reject(new Error('Local library could not load. Check the static server and vendor files.'));};document.head.append(s);}));return scripts.get(key);}
const scripts=new Map();

export const escapeHTML=escape;
export function parseInstant(s){const m=s.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2})(?:\.\d+)?)?(?:Z|[+-]\d{2}:\d{2})$/);check(m,'Use an ISO instant with an explicit timezone.');const d=new Date(s),calendar=new Date(0);calendar.setUTCFullYear(+m[1],+m[2]-1,+m[3]);check(!isNaN(d)&&calendar.getUTCFullYear()===+m[1]&&calendar.getUTCMonth()===+m[2]-1&&calendar.getUTCDate()===+m[3]&&+m[4]<=23&&+m[5]<=59&&+(m[6]||0)<=59,'Enter a real calendar date and time.');return d;}
