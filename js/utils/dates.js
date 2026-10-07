export function utcDate(value){
  if(!/^\d{4}-\d{2}-\d{2}$/.test(value))throw new Error('Use a valid date between years 0001 and 9999.');
  const [year,month,day]=value.split('-').map(Number);const date=new Date(0);date.setUTCHours(0,0,0,0);date.setUTCFullYear(year,month-1,day);
  if(year<1||date.getUTCFullYear()!==year||date.getUTCMonth()!==month-1||date.getUTCDate()!==day)throw new Error('Enter a valid calendar date.');
  return date;
}
export function dateText(date){if(!Number.isFinite(date.getTime())||date.getUTCFullYear()<1||date.getUTCFullYear()>9999)throw new Error('The resulting date is outside years 0001–9999.');return date.toISOString().slice(0,10);}
export function offsetDate(value,days=0,months=0,years=0){const date=utcDate(value),day=date.getUTCDate();date.setUTCDate(1);date.setUTCFullYear(date.getUTCFullYear()+years,date.getUTCMonth()+months);const end=new Date(date);end.setUTCMonth(end.getUTCMonth()+1,0);date.setUTCDate(Math.min(day,end.getUTCDate()));date.setUTCDate(date.getUTCDate()+days);return dateText(date);}
export function isoWeek(value){const date=utcDate(value);date.setUTCDate(date.getUTCDate()+4-(date.getUTCDay()||7));const year=date.getUTCFullYear();const first=utcDate(`${String(year).padStart(4,'0')}-01-01`);return {year,week:Math.ceil(((date-first)/86400000+1)/7)};}
