const normalize=value=>String(value).toLowerCase().replace(/[’']/g,'').replace(/[-/]/g,' ').replace(/\s+/g,' ').trim();
const index=new WeakMap();
function entry(c){if(!index.has(c))index.set(c,{name:normalize(c.name),aliases:(c.aliases||[]).map(normalize),text:normalize(`${c.name} ${c.category} ${c.description} ${(c.aliases||[]).join(' ')}`)});return index.get(c);}
// The API remains compatible with calculator callers and accepts tool metadata too.
export function findCalculators(catalog,query='',category='All'){
  const q=normalize(query),words=q.split(/\s+/).filter(Boolean);
  const score=c=>{const e=entry(c);return e.name===q?0:e.name.startsWith(q)?1:e.aliases.some(a=>a.includes(q))?2:3;};
  return catalog.filter(c=>(category==='All'||c.category===category)&&words.every(word=>entry(c).text.includes(word))).sort((a,b)=>score(a)-score(b));
}
