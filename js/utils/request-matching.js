// Coverage comparison uses exact normalized names, never substring matches.
export const normalizeRequested=value=>value.toLowerCase().replace(/calculators?|converters?|checker|generator/g,'').replace(/[^a-z0-9]/g,'');
