import {tool,text,line,number,select} from '../shared/definitions.js';
const t=(id,name,description,fields,aliases=[])=>tool('Generators','generators',id,name,description,fields,aliases);
export default [
t('random-picker','Random Picker & Team Generator','Shuffle a list, choose an entry, or divide entries into balanced groups.',[text('input','One entry per line','Alex\nSam\nJamie\nMorgan\nTaylor\nRobin'),select('mode','Operation',['Pick one','Shuffle','Teams'],'Pick one'),number('count','Number of teams',2,1,100)],['random name picker','random team generator','random group generator']),
t('coin-dice','Coin, Dice & Yes/No','Use browser cryptographic randomness for coins, dice and yes/no choices.',[select('mode','Mode',['Coin','Dice','Yes/No'],'Dice'),number('count','Rolls / flips',1,1,1000),number('sides','Dice sides',6,2,1000)],['coin flip','dice roller','yes no generator']),
t('random-date','Random Date Generator','Choose dates uniformly within an inclusive calendar range.',[line('start','Start date (YYYY-MM-DD)','2026-01-01'),line('end','End date (YYYY-MM-DD)','2026-12-31'),number('count','Dates',5,1,1000)]),
t('username-generator','Username & Fictional Test Data Generator','Generate clearly fictional usernames or sample records for software tests.',[select('mode','Output',['Usernames','Fictional JSON'],'Usernames'),number('count','Records',5,1,1000)],['fake test data generator','random username'])
];
