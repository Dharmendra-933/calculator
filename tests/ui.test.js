import { calculators, categories } from '../js/catalog.js';
const frame=document.querySelector('#site'),out=document.querySelector('#output'),results=[],errors=[];
const originalRecent=localStorage.getItem('calchub-recent');
const pause=()=>new Promise(resolve=>setTimeout(resolve,25));
async function wait(check){for(let k=0;k<120;k++){if(check())return;await pause();}throw new Error('UI did not reach expected state');}
const doc=()=>frame.contentDocument;
function check(label,condition){results.push(`${condition?'PASS':'FAIL'} ${label}`);out.textContent=results.join('\n');}
async function go(hash){frame.contentWindow.location.hash=hash;await wait(()=>doc().querySelector('#main'));await pause();}
try{
 await wait(()=>doc()?.querySelector('#search'));
 frame.contentWindow.addEventListener('error',e=>errors.push(e.message));
 frame.contentWindow.addEventListener('unhandledrejection',e=>errors.push(String(e.reason)));
 check('Compact homepage has six directory cards',doc().querySelectorAll('#directory-results .calculator-card').length===6);
 const initialTheme=doc().documentElement.dataset.theme,stored=localStorage.getItem('calchub-theme');
 doc().querySelector('#theme-toggle').click();check('Theme toggles',doc().documentElement.dataset.theme!==initialTheme);
 doc().querySelector('#theme-toggle').click();if(stored===null)localStorage.removeItem('calchub-theme');else localStorage.setItem('calchub-theme',stored);
 await go('/directory');
 const discovered=new Set();
 for(let k=0;k<100;k++){
  for(const link of doc().querySelectorAll('#directory-results a'))discovered.add(link.getAttribute('href'));
  const next=doc().querySelector('[data-page="1"]');if(next.disabled)break;next.click();await pause();
 }
 check('Pagination exposes every unique calculator route',discovered.size===calculators.length&&calculators.every(t=>discovered.has(`#/calculator/${t.id}`)));
 for(const [category,,count] of categories){doc().querySelector(`[data-filter="${category}"]`).click();check(`${category}: accurate filter count`,doc().querySelector('#result-count').textContent===`${count} available`);}
 doc().querySelector('[data-filter="All"]').click();
 const requestedNames=await fetch('../docs/ADVANCED-REQUESTS.json').then(r=>r.json());
 for(const query of ['home loan','compound','triangle','ohm','battery','fuel','salary','percentage','date','body fat',...calculators.filter(t=>t.advanced).map(t=>t.name),...requestedNames.map(name=>name.replace(/ Calculator| Converter| Checker| Generator/g,''))]){
  const input=doc().querySelector('#search');input.value=query;input.dispatchEvent(new Event('input',{bubbles:true}));
  check(`Search: ${query}`,doc().querySelectorAll('#directory-results .calculator-card').length>0);
 }
 const titles=new Set(),descriptions=new Set();
 for(const tool of calculators){
  await go(`/calculator/${tool.id}`);await wait(()=>doc().querySelector('h1')?.textContent===tool.name);
  const form=doc().querySelector('form'),result=doc().querySelector('#results');
  titles.add(doc().title);descriptions.add(doc().querySelector('meta[name="description"]').content);
  check(`${tool.id}: default result`,!!result.querySelector('.result-main')&&!/\b(NaN|Infinity|undefined|null)\b/.test(result.textContent));
  check(`${tool.id}: guide sections`,['The formula','How to use it','A quick example'].every(text=>[...doc().querySelectorAll('h2')].some(h=>h.textContent===text)));
  check(`${tool.id}: mobile width`,doc().documentElement.scrollWidth<=390);
  const input=form.querySelector('input,textarea');if(input){input.value='';form.querySelector('[type="submit"]').click();check(`${tool.id}: empty input error`,!!doc().querySelector('#error').textContent);}
  form.querySelector('[type="reset"]').click();await wait(()=>!!result.querySelector('.result-main'));
  check(`${tool.id}: reset restores result`,!doc().querySelector('#error').textContent);
 }
 check('Unique page titles',titles.size===calculators.length);check('Unique descriptions',descriptions.size===calculators.length);
 check('No runtime errors',errors.length===0);
 const passes=results.filter(x=>x.startsWith('PASS')).length;
 out.textContent=results.join('\n')+`\n${passes}/${results.length} passed\n`+errors.join('\n');out.dataset.complete='true';
}catch(e){out.textContent+='\nFAIL integration harness: '+e.message;out.dataset.complete='true';}finally{if(originalRecent===null)localStorage.removeItem('calchub-recent');else localStorage.setItem('calchub-recent',originalRecent);}
