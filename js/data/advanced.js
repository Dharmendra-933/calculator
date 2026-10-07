import {statisticsTools} from '../calculators/statistics.js';
import {numberTheoryTools} from '../calculators/number-theory.js';
export const advancedTools=[...statisticsTools,...numberTheoryTools];

import {advancedAlgebraTools} from '../calculators/algebra-advanced.js';
import {trigonometryTools} from '../calculators/trigonometry.js';
import {advancedGeometryTools} from '../calculators/geometry-advanced.js';
advancedTools.push(...advancedAlgebraTools,...trigonometryTools,...advancedGeometryTools);

import {advancedFinanceTools} from '../calculators/finance-advanced.js';
import {propertyTools} from '../calculators/property.js';
advancedTools.push(...advancedFinanceTools,...propertyTools);

import {ecommerceTools} from '../calculators/ecommerce.js';
import {marketingTools} from '../calculators/marketing.js';
import {digitalTools} from '../calculators/digital.js';
import {programmingTools} from '../calculators/programming.js';
advancedTools.push(...ecommerceTools,...marketingTools,...digitalTools,...programmingTools);

import {advancedElectricalTools} from '../calculators/electrical-advanced.js';
import {engineeringTools} from '../calculators/engineering.js';
import {thermodynamicsTools} from '../calculators/thermodynamics.js';
import {chemistryTools} from '../calculators/chemistry.js';
advancedTools.push(...advancedElectricalTools,...engineeringTools,...thermodynamicsTools,...chemistryTools);

import {advancedConstructionTools} from '../calculators/construction-advanced.js';
import {landTools} from '../calculators/land.js';
import {automotiveTools} from '../calculators/automotive.js';
import {productivityTools} from '../calculators/productivity.js';
import {educationTools} from '../calculators/education.js';
advancedTools.push(...advancedConstructionTools,...landTools,...automotiveTools,...productivityTools,...educationTools);
