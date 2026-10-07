import { calculators, categories } from '../js/catalog.js';
import { compute } from '../js/calculators/compute.js';
import { validateField, validateValues } from '../js/validation.js';
import * as c from '../js/calculators/extended.js';

export function runExtendedTests() {
  const tests=[];
  const test=(name,fn)=>{try{fn();tests.push(`PASS ${name}`);}catch(e){tests.push(`FAIL ${name}: ${e.message}`);}};
  const equal=(a,b)=>{if(a!==b)throw new Error(`Expected ${b}, got ${a}`);};
  const close=(a,b,tolerance=.00001)=>{if(!Number.isFinite(a)||Math.abs(a-b)>tolerance)throw new Error(`Expected ${b}, got ${a}`);};
  const throws=fn=>{let rejected=false;try{fn();}catch{rejected=true;}if(!rejected)throw new Error('Expected input rejection');};
  test('Original 46 routes preserved and catalog IDs unique',()=>{equal(calculators.filter(c=>!c.expansion).length,46);equal(new Set(calculators.map(c=>c.id)).size,calculators.length);});
  for(const [category,,count] of categories)test(`${category} directory count`,()=>equal(calculators.filter(c=>c.category===category).length,count));
  for(const tool of calculators.filter(c=>!c.expansion)){
    const defaults=Object.fromEntries(tool.fields.map(f=>[f.name,String(f.value)]));
    test(`${tool.name}: normal inputs`,()=>{const rows=compute(tool.id,validateValues(tool,defaults));if(!Array.isArray(rows)||!rows.length)throw new Error('Missing results');for(const row of rows){if(typeof row[1]==='number'&&!Number.isFinite(row[1]))throw new Error('Nonfinite result');if(/NaN|Infinity/.test(String(row[1])))throw new Error('Invalid formatted result');}});
    for(const field of tool.fields){
      test(`${tool.id}/${field.name}: empty rejected`,()=>throws(()=>validateField(field,'')));
      if(field.type==='number'){
        test(`${tool.id}/${field.name}: zero boundary`,()=>{if((field.min??-Infinity)>0||field.exclusiveMin&&field.min===0) throws(()=>validateField(field,'0'));else equal(validateField(field,'0'),0);});
        test(`${tool.id}/${field.name}: negative boundary`,()=>{if(field.min!==undefined&&field.min>=0)throws(()=>validateField(field,'-1'));else equal(validateField(field,'-1'),-1);});
        test(`${tool.id}/${field.name}: decimal boundary`,()=>{if(field.integer) throws(()=>validateField(field,'30.5'));else equal(validateField(field,'30.5'),30.5);});
        test(`${tool.id}/${field.name}: invalid/nonfinite rejected`,()=>{throws(()=>validateField(field,'abc'));throws(()=>validateField(field,'Infinity'));});
        for(const sample of ['0','-1','30.5'])test(`${tool.id}/${field.name}: ${sample} result or clear error`,()=>{
          const raw={...defaults,[field.name]:sample};
          try {
            const rows=compute(tool.id,validateValues(tool,raw));
            for(const [,value] of rows)if(typeof value==='number'&&!Number.isFinite(value)||/NaN|Infinity/.test(String(value)))throw new Error('NONFINITE_RESULT');
          }catch(e){if(e.message==='NONFINITE_RESULT'||!e.message)throw e;}
        });
      }
    }
  }
  test('FD quarterly maturity',()=>close(compute('fd',{principal:100000,rate:7,tenure:1,unit:'years',frequency:'4'})[0][1],107185.903,.001));
  test('RD zero rate',()=>{const r=c.recurringDeposit(5000,0,12);equal(r.total,60000);equal(r.interest,0);});
  test('RD one deposit earns one month',()=>close(c.recurringDeposit(100,12,1).total,100*Math.cbrt(1.03)));
  test('RD fractional months rejected',()=>throws(()=>c.recurringDeposit(100,7,1.5)));
  test('Loan zero-interest payment',()=>equal(compute('loan',{principal:12000,rate:0,tenure:12,unit:'months'})[0][1],1000));
  test('Profit, loss, margin and markup bases',()=>{const r=c.profitability(800,1000);equal(r.profit,200);equal(r.margin,20);equal(r.markup,25);equal(c.profitability(100,80).profit,-20);equal(c.profitability(0,100).markup,null);equal(c.profitability(100,0).margin,null);});
  test('Commission',()=>equal(compute('commission',{sale:10000,rate:5})[0][1],500));
  test('Break-even rounding and invalid contribution',()=>{equal(c.breakEven(10000,100,60).units,250);equal(c.breakEven(101,10,0).units,11);equal(c.breakEven(0,10,1).units,0);throws(()=>c.breakEven(100,10,10));throws(()=>c.breakEven(100,10,11));});
  test('Business GST inclusive',()=>close(compute('gst-inclusive',{amount:11800,rate:18,mode:'remove'})[1][1],10000));
  test('Scientific operations, percent and powers',()=>{close(c.scientific('sin(30)+sqrt(16)+2^3'),12.5);equal(c.scientific('2^3^2'),512);equal(c.scientific('-2^2'),-4);equal(c.scientific('2^-2'),.25);equal(c.scientific('200*10%'),20);equal(c.scientific('log(100)+ln(e)'),3);close(c.scientific('cos(pi)','rad'),-1);close(c.scientific('tan(45)'),1);equal(c.scientific('3^2'),9);});
  test('Scientific domains and unsafe expressions',()=>{for(const expr of ['tan(90)','sqrt(-1)','log(0)','ln(-1)','1/0','2+','2(3)','alert(1)','2^^3'])throws(()=>c.scientific(expr));});
  test('Average decimal and signed inputs',()=>{const r=c.average('-1.5, 2.5 5');equal(r.count,3);equal(r.sum,6);equal(r.average,2);equal(c.average('0').average,0);throws(()=>c.average('1, bad'));});
  test('Ratio reduction and zero cases',()=>{equal(c.ratio(12,18),'2:3');equal(c.ratio(0,2),'0:1');throws(()=>c.ratio(0,0));throws(()=>c.ratio(1.5,3));});
  test('All fraction operations',()=>{equal(c.fraction(1,2,1,3,'add').simplified,'5/6');equal(c.fraction(1,2,1,3,'subtract').simplified,'1/6');equal(c.fraction(1,2,1,3,'multiply').simplified,'1/6');equal(c.fraction(1,2,1,3,'divide').simplified,'3/2');equal(c.fraction(0,-2,1,3,'multiply').simplified,'0');throws(()=>c.fraction(1,0,1,3,'add'));throws(()=>c.fraction(1,2,0,3,'divide'));});
  test('GCD and LCM multiple integers and exact output',()=>{equal(c.integerAggregate('12,18,30','gcd'),'6');equal(c.integerAggregate('12,18,30','lcm'),'180');equal(c.integerAggregate('9007199254740991,2','lcm'),'18014398509481982');throws(()=>c.integerAggregate('0,2','gcd'));throws(()=>c.integerAggregate('1.5,2','lcm'));throws(()=>c.integerAggregate('2','gcd'));});
  test('Square root zero and decimals',()=>{equal(compute('square-root',{value:0})[0][1],0);equal(compute('square-root',{value:2.25})[0][1],1.5);});
  test('Date spans and reverse rejection',()=>{equal(c.dateRange('2024-02-28','2024-03-01').totalDays,2);equal(c.dateRange('2025-01-01','2025-01-01').totalDays,0);throws(()=>c.dateRange('2025-02-01','2025-01-01'));});
  test('Time overnight and same day',()=>{equal(c.timeDuration('09:00','17:30','same').total,510);equal(c.timeDuration('23:30','00:15','next').total,45);equal(c.timeDuration('09:00','09:00','same').total,0);equal(c.timeDuration('09:00','09:00','next').total,1440);throws(()=>c.timeDuration('23:00','01:00','same'));});
  test('Working days inclusive boundaries',()=>{equal(c.workingDays('2025-01-01','2025-01-07').work,5);equal(c.workingDays('2025-01-04','2025-01-05').work,0);equal(c.workingDays('2025-01-06','2025-01-06').work,1);});
  test('Male/female Mifflin estimates and calorie factor',()=>{close(c.bmr(70,175,30,'male'),1648.75);close(c.bmr(70,175,30,'female'),1482.75);equal(compute('calorie',{weight:70,height:175,age:30,sex:'male',activity:'1.2'})[0][1],'1979 kcal/day');throws(()=>c.bmr(.1,1,100,'female'));});
  test('Ideal weight metric unit equivalence',()=>equal(compute('ideal-weight',{height:175,unit:'cm'})[0][1],compute('ideal-weight',{height:1.75,unit:'m'})[0][1]));
  test('All converter factors and round trips',()=>{close(c.convert('weight',1,'lb','kg'),.45359237);close(c.convert('area',1,'acre','m2'),4046.8564224);close(c.convert('volume',1,'gal','L'),3.785411784);close(c.convert('volume',1,'ukgal','L'),4.54609);close(c.convert('speed',36,'kmh','ms'),10);equal(c.convert('data',1,'GB','MB'),1000);for(const kind of Object.keys(c.unitFactors)){const keys=Object.keys(c.unitFactors[kind]);for(const from of keys)for(const to of keys)close(c.convert(kind,c.convert(kind,12.5,from,to),to,from),12.5);}});
  test('Construction shape and unit calculations',()=>{equal(c.constructionArea('rectangle',5,4,'m'),20);equal(c.constructionArea('triangle',5,4,'m'),10);close(c.constructionArea('circle',2,0,'m'),4*Math.PI);equal(c.constructionArea('rectangle',500,400,'cm'),20);});
  test('Paint coverage, openings and coats',()=>{equal(c.paint(5,3,'m',1,2,10,0).liters,3);equal(c.paint(5,3,'m',1,2,10,5).liters,2);equal(c.paint(5,3,'m',1,2,10,15).liters,0);throws(()=>c.paint(5,3,'m',1,2,10,16));});
  test('Tile count and wastage',()=>{equal(c.tiles(5,4,'m',60,60,'cm',10).count,62);equal(c.tiles(1,1,'m',50,50,'cm',0).count,4);});
  test('Concrete depth units',()=>{equal(c.concrete(5,4,10,'m','cm'),2);close(c.concrete(500,400,100,'cm','mm'),2);});
  test('Brick modules and mortar',()=>{equal(c.bricks(5,3,.1,'m',190,90,90,'mm',10,5).count,788);equal(c.bricks(1,1,1,'m',.5,.5,.5,'m',0,0).count,8);});
  return tests;
}
