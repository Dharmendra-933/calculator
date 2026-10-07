import { financeTools,loanTools } from '../calculators/finance.js';
import { businessTools,salaryTools } from '../calculators/business.js';
export const expansionTools=[...financeTools,...loanTools,...businessTools,...salaryTools];

import { mathTools } from '../calculators/math.js';
import { algebraTools } from '../calculators/algebra.js';
expansionTools.push(...mathTools,...algebraTools);
import { geometryTools } from '../calculators/geometry.js';
import { dateTools } from '../calculators/dates.js';
expansionTools.push(...geometryTools,...dateTools);
import { converterTools } from '../calculators/converters.js';
import { physicsTools } from '../calculators/physics.js';
import { electricalTools } from '../calculators/electrical.js';
expansionTools.push(...converterTools,...physicsTools,...electricalTools);
import { healthTools } from '../calculators/health.js';
import { constructionTools } from '../calculators/construction.js';
import { travelTools,everydayTools } from '../calculators/everyday.js';
expansionTools.push(...healthTools,...constructionTools,...travelTools,...everydayTools);

import {advancedTools} from './advanced.js';
expansionTools.push(...advancedTools);
