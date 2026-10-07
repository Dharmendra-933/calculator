// Shared by form handling and regression tests.
export function validateField(field, rawValue) {
  const raw=String(rawValue??'').trim();
  if(!raw)throw new Error(`Enter ${field.label.toLowerCase()}.`);
  if(field.type==='select') {
    if(!field.options.some(([value])=>String(value)===raw))throw new Error(`Choose a valid ${field.label.toLowerCase()}.`);
    return raw;
  }
  if(field.type!=='number')return raw;
  const value=Number(raw);
  if(!Number.isFinite(value))throw new Error(`Enter a valid ${field.label.toLowerCase()}.`);
  if(field.min!==undefined&&(field.exclusiveMin?value<=field.min:value<field.min))throw new Error(`${field.label} must be ${field.exclusiveMin?'greater than':'at least'} ${field.min}.`);
  if(field.max!==undefined&&value>field.max)throw new Error(`${field.label} must be at most ${field.max}.`);
  if(field.integer&&!Number.isSafeInteger(value))throw new Error(`${field.label} must be a safe whole number.`);
  return value;
}
export function validateValues(tool,rawValues) {
  return Object.fromEntries(tool.fields.map(field=>[field.name,validateField(field,rawValues[field.name])]));
}
