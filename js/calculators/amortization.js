import {emi} from './logic.js';
import {money} from '../utils/formatting.js';
// Nominal annual rate, monthly payments in arrears, no fees or extra payments.
export function amortizationRows(principal,rate,months){
 if(months>600)return[['Schedule note','Monthly schedule display is limited to 600 months; repayment totals remain available.']];
 const payment=emi(principal,rate,months).monthly,q=rate/1200;let balance=principal;const rows=[];
 for(let month=1;month<=months;month++){
  const interest=balance*q,paid=month===months?balance+interest:Math.min(payment,balance+interest),capital=paid-interest;
  balance=Math.max(0,balance-capital);
  rows.push([`Month ${month}`,`Principal ${money(capital)}; interest ${money(interest)}; balance ${money(balance)}`]);
 }
 return rows;
}
