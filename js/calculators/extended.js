import { age, parseDate, lengthFactors, compoundInterest, emi, gst } from './logic.js';

export function whole(value, label, minimum = 0) {
  if (!Number.isSafeInteger(value) || value < minimum) throw new Error(`${label} must be a whole number from ${minimum} to ${Number.MAX_SAFE_INTEGER}.`);
  return value;
}
export function recurringDeposit(deposit, rate, months) {
  whole(months, 'Duration in months', 1);
  // Quarterly nominal interest converted to an equivalent monthly growth rate.
  const monthly = Math.expm1(Math.log1p(rate / 400) / 3);
  const total = monthly ? deposit * Math.expm1(months * Math.log1p(monthly)) / monthly * (1 + monthly) : deposit * months;
  return { invested: deposit * months, interest: total - deposit * months, total };
}
export function profitability(cost, revenue) {
  const profit = revenue - cost;
  const markup=cost ? profit / cost * 100 : null;
  const margin=revenue ? profit / revenue * 100 : null;
  if([profit,markup,margin].some(value=>value!==null&&!Number.isFinite(value)))throw new Error('The result is too large. Use smaller amounts or a larger percentage denominator.');
  return { profit, markup, margin };
}
export function breakEven(fixed, price, variable) {
  if (price <= variable) throw new Error('Selling price must exceed variable cost per unit to reach break-even.');
  const exact = fixed / (price - variable);
  const units = Math.ceil(exact);
  return { exact, units, revenue: units * price };
}
export function numberList(text, positiveIntegers = false) {
  const parts = text.trim().split(/[\s,;]+/);
  if (!text.trim() || parts.some(p => !/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(p))) throw new Error('Enter numbers separated by commas, spaces or new lines.');
  const values = parts.map(Number);
  if (values.some(v => !Number.isFinite(v))) throw new Error('Every value must be a finite number.');
  if (positiveIntegers) {
    if (values.length < 2) throw new Error('Enter at least two positive whole numbers.');
    values.forEach(v => whole(v, 'Each value', 1));
  }
  return values;
}
export function average(text) {
  const values = numberList(text);
  const sum = values.reduce((a,b) => a+b,0);
  return { count: values.length, sum, average: sum / values.length };
}
export function gcdBig(a,b) { a = a < 0n ? -a : a; b = b < 0n ? -b : b; while (b) [a,b] = [b,a%b]; return a; }
export function ratio(a,b) {
  whole(a,'First value'); whole(b,'Second value');
  if (!a && !b) throw new Error('At least one ratio value must be greater than zero.');
  const divisor = gcdBig(BigInt(a),BigInt(b));
  return `${BigInt(a)/divisor}:${BigInt(b)/divisor}`;
}
export function fraction(a,b,c,d,operation) {
  [a,b,c,d].forEach(v => { if (!Number.isSafeInteger(v)) throw new Error('Fraction values must be safe whole numbers.'); });
  if (!b || !d) throw new Error('Fraction denominators cannot be zero.');
  [a,b,c,d] = [a,b,c,d].map(BigInt);
  let n,den;
  if (operation === 'add') { n=a*d+c*b; den=b*d; }
  else if (operation === 'subtract') { n=a*d-c*b; den=b*d; }
  else if (operation === 'multiply') { n=a*c; den=b*d; }
  else { if (!c) throw new Error('Cannot divide by a zero fraction.'); n=a*d; den=b*c; }
  if (den < 0n) { n=-n; den=-den; }
  const divisor=gcdBig(n,den); n/=divisor; den/=divisor;
  return { simplified: den===1n ? String(n) : `${n}/${den}`, decimal: Number(n)/Number(den) };
}
export function integerAggregate(text, operation) {
  const values=numberList(text,true).map(BigInt);
  return String(values.reduce((a,b)=> operation==='gcd'?gcdBig(a,b):a/gcdBig(a,b)*b));
}
export function dateRange(startValue,endValue) {
  const start=parseDate(startValue), end=parseDate(endValue);
  if (end < start) throw new Error('End date must be on or after the start date.');
  const totalDays = (Date.UTC(end.getFullYear(),end.getMonth(),end.getDate())-Date.UTC(start.getFullYear(),start.getMonth(),start.getDate()))/86400000;
  return { start, end, totalDays };
}
export function workingDays(start,end) {
  const range=dateRange(start,end);
  const calendar=range.totalDays+1;
  let work=Math.floor(calendar/7)*5;
  for(let i=0;i<calendar%7;i++){const weekday=(range.start.getDay()+i)%7;if(weekday!==0&&weekday!==6)work++;}
  return { calendar, work };
}
export function timeDuration(start,end,overnight) {
  const minutes = value => { if(!/^\d{2}:\d{2}$/.test(value))throw new Error('Enter a valid time.');const [h,m]=value.split(':').map(Number);if(h>23||m>59)throw new Error('Enter a valid time.');return h*60+m; };
  let duration=minutes(end)-minutes(start);
  if(overnight==='next')duration+=1440;
  if(duration<0)throw new Error('For an earlier end time, select Next day.');
  return { hours:Math.floor(duration/60), minutes:duration%60, total:duration };
}
export function bmr(weight,height,ageValue,sex) {
  const result=10*weight+6.25*height-5*ageValue+(sex==='male'?5:-161);
  if(result<=0)throw new Error('These inputs give a non-positive estimate. Check your height, weight and age.');
  return result;
}
export const unitFactors = {
  weight:{kg:1,g:.001,lb:.45359237,oz:.028349523125},
  area:{m2:1,ft2:.09290304,yd2:.83612736,acre:4046.8564224,ha:10000,km2:1000000},
  volume:{L:1,mL:.001,m3:1000,gal:3.785411784,ukgal:4.54609,ft3:28.316846592},
  speed:{kmh:1/3.6,mph:.44704,ms:1,kn:1852/3600},
  data:{bit:.125,B:1,KB:1000,MB:1000000,GB:1000000000,TB:1000000000000}
};
const unitLabels={m2:'m²',ft2:'ft²',yd2:'yd²',km2:'km²',m3:'m³',ft3:'ft³',gal:'US liquid gal',ukgal:'imperial gal',kmh:'km/h',ms:'m/s',kn:'knots'};
export function convert(kind,value,from,to) { return value*unitFactors[kind][from]/unitFactors[kind][to]; }
export function constructionArea(shape,length,width,unit) {
  const scale=lengthFactors[unit];
  return shape==='circle'?Math.PI*(length*scale)**2:shape==='triangle'?length*width*scale*scale/2:length*width*scale*scale;
}
export function paint(length,height,unit,walls,coats,coverage,openings) {
  whole(walls,'Number of walls',1); whole(coats,'Number of coats',1);
  const gross=length*height*lengthFactors[unit]**2*walls;
  if(openings>gross)throw new Error('Opening area cannot exceed the total wall area.');
  const net=gross-openings;
  return { area:net, liters:net*coats/coverage };
}
export function tiles(length,width,unit,tileLength,tileWidth,tileUnit,waste) {
  const area=length*width*lengthFactors[unit]**2;
  const tileArea=tileLength*tileWidth*lengthFactors[tileUnit]**2;
  return { area, tileArea, count:Math.ceil(area/tileArea*(1+waste/100)) };
}
export function concrete(length,width,depth,unit,depthUnit) { return length*width*depth*lengthFactors[unit]**2*lengthFactors[depthUnit]; }
export function bricks(length,height,thickness,unit,brickLength,brickHeight,brickWidth,brickUnit,joint,waste) {
  const wallVolume=length*height*thickness*lengthFactors[unit]**3;
  const factor=lengthFactors[brickUnit], mortar=joint/1000;
  const moduleVolume=(brickLength*factor+mortar)*(brickHeight*factor+mortar)*(brickWidth*factor+mortar);
  return { volume:wallVolume,count:Math.ceil(wallVolume/moduleVolume*(1+waste/100)) };
}

// Recursive descent expression parser with explicit function/domain checks.
export function scientific(expression,angle='deg') {
  const source=expression.replace(/\s/g,'').replace(/×/g,'*').replace(/÷/g,'/').replace(/−/g,'-').replace(/π/g,'pi').toLowerCase();
  if(source.length>1000)throw new Error('Keep expressions under 1,000 characters.');
  const tokens=source.match(/(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|[a-z]+|[()+\-*/^%]/g)||[];
  if(!source||tokens.join('')!==source)throw new Error('Enter a valid numeric expression using supported functions.');
  let i=0;
  const finite = value => { if(!Number.isFinite(value))throw new Error('Result is undefined or too large. Check the function inputs.');return value; };
  function atom(){const t=tokens[i++];if(t==='('){const n=sum();if(tokens[i++]!==')')throw new Error('Close every parenthesis.');return n;}if(t==='pi')return Math.PI;if(t==='e')return Math.E;if(/^(?:\d|\.)/.test(t||''))return Number(t);
    if(['sin','cos','tan','log','ln','sqrt','abs'].includes(t)){if(tokens[i++]!=='(')throw new Error(`Use ${t}(value).`);const n=sum();if(tokens[i++]!==')')throw new Error('Close every parenthesis.');const radians=angle==='deg'?n*Math.PI/180:n;
      if(t==='tan'&&Math.abs(Math.cos(radians))<1e-12)throw new Error('Tangent is undefined at this angle.');
      return finite(t==='sin'?Math.sin(radians):t==='cos'?Math.cos(radians):t==='tan'?Math.tan(radians):t==='log'?Math.log10(n):t==='ln'?Math.log(n):t==='sqrt'?Math.sqrt(n):Math.abs(n));}
    throw new Error('Enter a complete expression with supported functions.');}
  function postfix(){let n=atom();while(tokens[i]==='%'){i++;n/=100;}return n;}
  function power(){const n=postfix();if(tokens[i]==='^'){i++;return finite(n**unary());}return n;}
  function unary(){if(tokens[i]==='+'){i++;return unary();}if(tokens[i]==='-'){i++;return -unary();}return power();}
  function product(){let n=unary();while(tokens[i]==='*'||tokens[i]==='/'){const op=tokens[i++],r=unary();if(op==='/'&&r===0)throw new Error('Cannot divide by zero.');n=finite(op==='*'?n*r:n/r);}return n;}
  function sum(){let n=product();while(tokens[i]==='+'||tokens[i]==='-'){const op=tokens[i++],r=product();n=finite(op==='+'?n+r:n-r);}return n;}
  const result=sum();if(i!==tokens.length)throw new Error('Check the operators and parentheses. Use * for multiplication.');return finite(result);
}

const row=(label,value,format='precise')=>[label,value,format];
const money=(label,value)=>row(label,value,'money');
const text=(label,value)=>[label,value];
export function computeExtended(id,v) {
  switch(id){
    case 'fd':{const years=v.tenure/(v.unit==='months'?12:1);const r=compoundInterest(v.principal,v.rate,years,+v.frequency);return[money('Estimated maturity amount',r.total),money('Interest earned',r.interest),money('Principal',r.principal)];}
    case 'rd':{const months=v.tenure*(v.unit==='years'?12:1);const r=recurringDeposit(v.deposit,v.rate,months);return[money('Estimated maturity amount',r.total),money('Total investment',r.invested),money('Estimated interest',r.interest)];}
    case 'loan':{const months=v.tenure*(v.unit==='years'?12:1);whole(months,'Tenure in months',1);const r=emi(v.principal,v.rate,months);return[money('Monthly EMI',r.monthly),money('Total interest',r.interest),money('Total repayment',r.total)];}
    case 'profit-margin':case 'margin':case 'markup':case 'profit-loss':{const r=profitability(v.cost,v.revenue);const percent=id==='markup'||id==='profit-loss'?r.markup:r.margin;return[money(id==='profit-loss'?(r.profit<0?'Loss amount':'Profit amount'):id==='markup'?'Markup amount':'Gross profit',id==='profit-loss'?Math.abs(r.profit):r.profit),percent===null?text(id==='markup'||id==='profit-loss'?'Percentage on cost':'Margin percentage','Not calculable (zero denominator)'):text(id==='markup'||id==='profit-loss'?'Percentage on cost':'Margin percentage',`${percent.toFixed(2)}%`),money('Cost',v.cost),money('Revenue',v.revenue)];}
    case 'commission':{const commission=v.sale*v.rate/100;return[money('Commission amount',commission),money('Net sale amount',v.sale-commission)];}
    case 'break-even':{const r=breakEven(v.fixed,v.price,v.variable);return[row('Break-even units (rounded up)',r.units,'number'),money('Revenue at rounded units',r.revenue),row('Exact break-even units',r.exact)];}
    case 'gst-inclusive':{const r=gst(v.amount,v.rate,v.mode);return[money('Final amount',r.total),money('Base amount',r.base),money('GST amount',r.tax),money('CGST',r.cgst),money('SGST',r.sgst)];}
    case 'scientific':return[row('Result',scientific(v.expression,v.angle)),text('Angle mode',v.angle==='deg'?'Degrees':'Radians')];
    case 'average':{const r=average(v.numbers);return[row('Average',r.average),row('Count',r.count,'number'),row('Sum',r.sum)];}
    case 'ratio':return[text('Simplified ratio',ratio(v.a,v.b))];
    case 'fraction':{const r=fraction(v.a,v.b,v.c,v.d,v.operation);return[text('Simplified fraction',r.simplified),row('Decimal result',r.decimal)];}
    case 'lcm':case 'gcd':return[text(id==='lcm'?'Least common multiple':'Highest common factor',integerAggregate(v.numbers,id))];
    case 'square-root':return[row('Square root',Math.sqrt(v.value))];
    case 'date-difference':{dateRange(v.start,v.end);const r=age(v.start,v.end);return[text('Calendar difference',`${r.years} years, ${r.months} months, ${r.days} days`),row('Total days',r.totalDays,'number')];}
    case 'days-between':return[row('Days between dates',dateRange(v.start,v.end).totalDays,'number')];
    case 'time-duration':{const r=timeDuration(v.start,v.end,v.overnight);return[text('Time duration',`${r.hours} hours, ${r.minutes} minutes`),row('Total minutes',r.total,'number'),row('Decimal hours',r.total/60)];}
    case 'working-days':{const r=workingDays(v.start,v.end);return[row('Working days',r.work,'number'),row('Calendar days (inclusive)',r.calendar,'number')];}
    case 'bmr':case 'calorie':{const r=bmr(v.weight,v.height,v.age,v.sex);return[id==='calorie'?text('Estimated daily calories',`${(r*+v.activity).toFixed(0)} kcal/day`):text('Estimated resting energy',`${r.toFixed(0)} kcal/day`),text('Resting estimate (Mifflin–St Jeor)',`${r.toFixed(0)} kcal/day`)];}
    case 'ideal-weight':{const m=v.height*(v.unit==='cm'?.01:1);return[text('Estimated reference weight range',`${(18.5*m*m).toFixed(1)}–${(24.9*m*m).toFixed(1)} kg`),text('Reference BMI range','18.5–24.9')];}
    case 'weight':case 'area-converter':case 'volume':case 'speed':case 'data-storage':{const kind={'weight':'weight','area-converter':'area','volume':'volume','speed':'speed','data-storage':'data'}[id];return[row(`Converted value (${unitLabels[v.to]||v.to})`,convert(kind,v.value,v.from,v.to)),text('Result unit',unitLabels[v.to]||v.to),text('Source value',`${v.value} ${unitLabels[v.from]||v.from}`)];}
    case 'construction-area':return[row('Area (m²)',constructionArea(v.shape,v.length,v.width,v.unit)),text('Shape',v.shape)];
    case 'paint':{const r=paint(v.length,v.height,v.unit,v.walls,v.coats,v.coverage,v.openings);return[row('Estimated paint required (L)',r.liters),row('Net wall area (m²)',r.area)];}
    case 'tile':{const r=tiles(v.length,v.width,v.unit,v.tileLength,v.tileWidth,v.tileUnit,v.waste);return[row('Estimated tiles (rounded up)',r.count,'number'),row('Surface area (m²)',r.area),row('Area per tile (m²)',r.tileArea)];}
    case 'concrete':{const volume=concrete(v.length,v.width,v.depth,v.unit,v.depthUnit);return[row('Estimated concrete volume (m³)',volume),row('Volume (liters)',volume*1000),row('Volume (ft³)',volume/.028316846592)];}
    case 'brick':{const r=bricks(v.length,v.height,v.thickness,v.unit,v.brickLength,v.brickHeight,v.brickWidth,v.brickUnit,v.joint,v.waste);return[row('Estimated bricks (rounded up)',r.count,'number'),row('Wall volume (m³)',r.volume)];}
    default:throw new Error('Unknown calculator.');
  }
}
