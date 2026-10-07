// No statutory tax tool is published until its FY-specific primary sources
// have been checked and a reviewed rule set is added here.
export const taxPolicy={enabled:false,financialYear:null,assessmentYear:null,lastUpdated:null,slabs:[],sources:[],reason:'No reviewed financial-year-specific legal rule set is configured.'};
export function requireTaxPolicy(){if(!taxPolicy.enabled||!taxPolicy.financialYear||!taxPolicy.lastUpdated||!taxPolicy.sources.length)throw new Error('A reviewed tax rule set is required before publishing a statutory tax calculator.');}
