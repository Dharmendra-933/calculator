# CalcHub expansion audit

Verified 3 October 2026. Previous count: **46**. Added: **168**. Total: **214** working calculators across **15** categories. Aliases, inverse modes and unit choices do not add to these counts. Original IDs and routes are preserved.

## Inventory and architecture

[Original inventory](BASELINE.json) records all 46 names, categories and hash routes before expansion. Original formulas remain in `logic.js` and `extended.js`; shared dispatch is `compute.js`. Shared form rendering, field validation, reset, results, metadata and themes remain in `app.js` and `validation.js`. New domain modules provide pure computation functions and specific field/formula/example/FAQ content. `data/expansion.js` assembles the batches; `data/aliases.js` and `utils/search.js` support equivalent names without duplicate cards. INR formatting is centralized in `utils/formatting.js`, using `config.js` currency INR and locale en-IN.

## Count by category

| Category | Original | Added | Total |
|---|---:|---:|---:|
| Finance | 10 | 21 | 31 |
| Math | 9 | 24 | 33 |
| Date & Time | 5 | 8 | 13 |
| Health | 4 | 9 | 13 |
| Converters | 7 | 13 | 20 |
| Business | 6 | 15 | 21 |
| Construction | 5 | 8 | 13 |
| Loans | 0 | 9 | 9 |
| Tax & Salary | 0 | 3 | 3 |
| Algebra | 0 | 10 | 10 |
| Geometry | 0 | 17 | 17 |
| Physics | 0 | 13 | 13 |
| Electrical | 0 | 11 | 11 |
| Travel | 0 | 4 | 4 |
| Everyday | 0 | 3 | 3 |

## Full list of additions

### Finance (21)

- **SWP Calculator** — `#/calculator/swp`; Estimate a corpus after fixed monthly withdrawals.
- **CAGR Calculator** — `#/calculator/cagr`; Find the constant annual growth rate between two positive values.
- **ROI Calculator** — `#/calculator/roi`; Measure investment gain relative to the original cost.
- **Inflation Calculator** — `#/calculator/inflation`; Estimate the future cost of an item as prices rise.
- **Future Value Calculator** — `#/calculator/future-value`; Combine a starting balance with recurring end-of-month contributions.
- **Present Value Calculator** — `#/calculator/present-value`; Discount a future amount to its value today.
- **Rule of 72 Calculator** — `#/calculator/rule-72`; Approximate how long an investment takes to double.
- **Doubling Time Calculator** — `#/calculator/doubling-time`; Find the exact doubling time under annual compounding.
- **Goal Investment Calculator** — `#/calculator/goal-investment`; Find a monthly saving amount needed for a future goal.
- **Retirement Corpus Calculator** — `#/calculator/retirement-corpus`; Estimate a retirement fund from spending and a chosen withdrawal assumption.
- **Emergency Fund Calculator** — `#/calculator/emergency-fund`; Build a reserve target from expenses and desired coverage.
- **Annuity Calculator** — `#/calculator/annuity`; Value a fixed series of end-of-period payments today.
- **Annuity Payout Calculator** — `#/calculator/annuity-payout`; Estimate equal annual withdrawals from a fixed starting fund.
- **Dividend Yield Calculator** — `#/calculator/dividend-yield`; Compare annual dividends per share with the share price.
- **Dividend Calculator** — `#/calculator/dividend`; Estimate cash dividends for the shares you hold.
- **Stock Average Calculator** — `#/calculator/stock-average`; Compute the weighted average cost of two share purchases.
- **Stock Profit/Loss Calculator** — `#/calculator/stock-profit`; Calculate a trade’s gain after entry and exit fees.
- **Risk/Reward Ratio Calculator** — `#/calculator/risk-reward`; Compare a long position’s target gain to its stop-loss risk.
- **Bond Yield Calculator** — `#/calculator/bond-yield`; Calculate current yield from coupon income and bond price.
- **Effective Interest Rate Calculator** — `#/calculator/effective-rate`; Convert a nominal annual rate to an effective annual yield.
- **APR Calculator** — `#/calculator/apr`; Estimate an effective annual borrowing cost including an upfront fee.

### Math (24)

- **Median Calculator** — `#/calculator/median`; Find the middle of a sorted numerical dataset.
- **Mode Calculator** — `#/calculator/mode`; Find values that occur most frequently.
- **Weighted Average Calculator** — `#/calculator/weighted-average`; Compute a mean where each value has a different weight.
- **Geometric Mean Calculator** — `#/calculator/geometric-mean`; Find the multiplicative center of positive values.
- **Harmonic Mean Calculator** — `#/calculator/harmonic-mean`; Find the reciprocal-based mean of positive values.
- **Range Calculator** — `#/calculator/range`; Measure the span from the smallest to largest observation.
- **Variance Calculator** — `#/calculator/variance`; Measure the average squared deviation from the mean.
- **Standard Deviation Calculator** — `#/calculator/standard-deviation`; Express dataset dispersion in its original units.
- **Factorial Calculator** — `#/calculator/factorial`; Compute the exact product of all integers from 1 to n.
- **Prime Number Checker** — `#/calculator/prime-checker`; Check whether an integer has exactly two positive divisors.
- **Prime Factorization Calculator** — `#/calculator/prime-factorization`; Decompose an integer into a product of prime factors.
- **Remainder & Modulo Calculator** — `#/calculator/modulo`; Compare truncating remainder with a nonnegative modulo.
- **nth Root Calculator** — `#/calculator/nth-root`; Compute a real nth root, including odd roots of negative values.
- **Permutation Calculator** — `#/calculator/permutation`; Count ordered choices of r items from n without replacement.
- **Combination Calculator** — `#/calculator/combination`; Count unordered selections without replacement.
- **Probability Calculator** — `#/calculator/probability`; Compute probability for equally likely outcomes.
- **Random Number Calculator** — `#/calculator/random-number`; Generate an integer within an inclusive range.
- **Significant Figures Calculator** — `#/calculator/significant-figures`; Round a number to a chosen count of significant digits.
- **Decimal to Fraction Calculator** — `#/calculator/decimal-fraction`; Convert finite decimal or percentage notation into an exact fraction.
- **Decimal to Percentage Calculator** — `#/calculator/decimal-percentage`; Convert between a fractional decimal and percentage notation.
- **Percentage Change Calculator** — `#/calculator/percentage-change`; Compare an old value to a new value and find the relative change.
- **Percentage Difference Calculator** — `#/calculator/percentage-difference`; Measure symmetric relative difference between two nonnegative values.
- **X Is What Percent of Y Calculator** — `#/calculator/percent-of`; Find the percentage represented by a part of a nonzero whole.
- **Reverse Percentage Calculator** — `#/calculator/reverse-percentage`; Recover an original amount before a percentage increase or decrease.

### Date & Time (8)

- **Add / Subtract Days Calculator** — `#/calculator/add-days`; Move a calendar date forward or backward by a signed day count.
- **Add Months to Date Calculator** — `#/calculator/add-months`; Add a signed number of calendar months while preserving month-end validity.
- **Add Years to Date Calculator** — `#/calculator/add-years`; Add calendar years, clamping leap-day anniversaries to February 28.
- **Weekend Days Calculator** — `#/calculator/weekend-days`; Count Saturdays and Sundays in an inclusive date range.
- **Week Number Calculator** — `#/calculator/week-number`; Find the ISO week number and ISO week-year of a date.
- **Leap Year Calculator** — `#/calculator/leap-year`; Check the Gregorian leap-year rule.
- **Time Addition / Subtraction Calculator** — `#/calculator/time-arithmetic`; Add or subtract durations entered as hours and minutes.
- **Decimal Hours Calculator** — `#/calculator/decimal-hours`; Convert decimal hours into hours, minutes and seconds.

### Health (9)

- **Body Fat Calculator** — `#/calculator/body-fat`; Estimate adult body-fat percentage from BMI, age and the Deurenberg regression.
- **Lean Body Mass Calculator** — `#/calculator/lean-body-mass`; Estimate non-fat mass using a supplied body-fat percentage.
- **Waist-to-Height Ratio Calculator** — `#/calculator/waist-height`; Compare waist circumference and height in matching metric units.
- **Calorie Deficit / Surplus Calculator** — `#/calculator/calorie-budget`; Adjust an existing maintenance estimate by a chosen daily calorie amount.
- **Protein Intake Calculator** — `#/calculator/protein`; Calculate a protein quantity from a target grams-per-kilogram assumption.
- **Water Intake Calculator** — `#/calculator/water`; Convert a chosen milliliters-per-kilogram assumption to a daily volume.
- **Macro Calculator** — `#/calculator/macros`; Allocate a supplied calorie target to chosen macronutrient percentages.
- **Running / Walking Pace Calculator** — `#/calculator/running-pace`; Calculate pace and speed from distance and elapsed duration.
- **Steps / Distance Calculator** — `#/calculator/steps-distance`; Convert distance and step count using your own step length.

### Converters (13)

- **Pressure Converter** — `#/calculator/pressure-units`; Convert pressure using the selected unit definitions.
- **Energy Converter** — `#/calculator/energy-units`; Convert energy using the selected unit definitions.
- **Power Converter** — `#/calculator/power-units`; Convert power using the selected unit definitions.
- **Force Converter** — `#/calculator/force-units`; Convert force using the selected unit definitions.
- **Torque Converter** — `#/calculator/torque-units`; Convert torque using the selected unit definitions.
- **Angle Converter** — `#/calculator/angle-units`; Convert angle using the selected unit definitions.
- **Frequency Converter** — `#/calculator/frequency-units`; Convert frequency using the selected unit definitions.
- **Density Converter** — `#/calculator/density-units`; Convert density using the selected unit definitions.
- **Acceleration Converter** — `#/calculator/acceleration-units`; Convert acceleration using the selected unit definitions.
- **Cooking Measurement Converter** — `#/calculator/cooking-units`; Convert cooking measurement using the selected unit definitions.
- **Time Unit Converter** — `#/calculator/time-units`; Convert time unit using the selected unit definitions.
- **Digital Transfer Rate Converter** — `#/calculator/transfer-units`; Convert digital transfer rate using the selected unit definitions.
- **Fuel Economy Converter** — `#/calculator/fuel-economy`; Convert economy or consumption with explicit US/imperial gallon definitions.

### Business (15)

- **Revenue Calculator** — `#/calculator/revenue`; Estimate revenue from quantity sold and unit selling price.
- **Net Profit Calculator** — `#/calculator/net-profit`; Calculate profit after direct and operating costs.
- **Operating Margin Calculator** — `#/calculator/operating-margin`; Express operating profit as a percentage of revenue.
- **Contribution Margin Calculator** — `#/calculator/contribution-margin`; Measure the contribution of a unit toward fixed costs.
- **Unit Price Calculator** — `#/calculator/unit-price`; Compare cost per measured unit or item.
- **Selling Price Calculator** — `#/calculator/selling-price`; Find the selling price required for a target gross margin.
- **Cost Price Calculator** — `#/calculator/cost-price`; Recover cost price from selling price and markup.
- **Target Profit Calculator** — `#/calculator/target-profit`; Estimate sales needed to cover fixed costs and a profit target.
- **Sales Tax Calculator** — `#/calculator/sales-tax`; Add or extract a user-supplied sales tax or VAT rate.
- **ROAS Calculator** — `#/calculator/roas`; Compare attributable ad revenue with advertising spend.
- **CPM Calculator** — `#/calculator/cpm`; Calculate advertising cost per thousand impressions.
- **CPC Calculator** — `#/calculator/cpc`; Calculate the average cost of an advertising click.
- **CPA Calculator** — `#/calculator/cpa`; Find advertising cost per recorded acquisition or lead.
- **Customer Acquisition Cost Calculator** — `#/calculator/customer-acquisition`; Allocate total sales and marketing expense across new customers.
- **Conversion Rate Calculator** — `#/calculator/conversion-rate`; Measure conversions as a fraction of total eligible visits.

### Construction (8)

- **Cement / Sand / Gravel Calculator** — `#/calculator/concrete-mix`; Estimate nominal concrete mix ingredients using explicitly chosen assumptions.
- **Flooring Calculator** — `#/calculator/flooring`; Estimate floor material area and material-only cost with waste.
- **Roofing Calculator** — `#/calculator/roofing`; Estimate material area for a constant-pitch roof from its horizontal footprint.
- **Wallpaper Calculator** — `#/calculator/wallpaper`; Estimate whole wallpaper rolls from vertical strips and usable roll length.
- **Stair Calculator** — `#/calculator/stairs`; Plan equal risers and a simple straight stair run.
- **Fence Calculator** — `#/calculator/fence`; Estimate posts and span count for one straight fence section.
- **Water Tank Volume Calculator** — `#/calculator/water-tank`; Calculate internal cylindrical tank capacity from radius and water depth.
- **Excavation / Soil / Mulch Calculator** — `#/calculator/earth-material`; Estimate bulk volume and mass for a rectangular layer or excavation.

### Loans (9)

- **Loan Eligibility Calculator** — `#/calculator/loan-eligibility`; Estimate principal supported by your payment budget.
- **Loan Comparison Calculator** — `#/calculator/loan-comparison`; Compare monthly payments and total interest on two offers.
- **Loan Prepayment Calculator** — `#/calculator/loan-prepayment`; Estimate repayment time and interest saved with extra monthly payments.
- **Loan Tenure Calculator** — `#/calculator/loan-tenure`; Solve how many monthly payments your loan needs.
- **Interest Rate Calculator** — `#/calculator/loan-rate`; Solve a nominal annual loan rate from payment and tenure.
- **Principal Calculator** — `#/calculator/loan-principal`; Find the loan principal corresponding to an EMI.
- **Credit Card Interest Calculator** — `#/calculator/credit-card-interest`; Estimate simple daily interest on a constant revolving balance.
- **Debt-to-Income Ratio Calculator** — `#/calculator/debt-income`; Measure monthly debt payments relative to gross income.
- **Debt Repayment Calculator** — `#/calculator/debt-repayment`; Estimate a constant-payment debt payoff schedule.

### Tax & Salary (3)

- **Salary Calculator** — `#/calculator/salary`; Convert gross annual salary into monthly, weekly and hourly equivalents.
- **Take-Home Salary Calculator** — `#/calculator/take-home`; Estimate cash salary after deductions that you enter.
- **Overtime Calculator** — `#/calculator/overtime`; Calculate overtime pay from hours and your agreed pay multiplier.

### Algebra (10)

- **Quadratic Equation Calculator** — `#/calculator/quadratic`; Find real roots of ax² + bx + c = 0 and its discriminant.
- **Linear Equation Calculator** — `#/calculator/linear-equation`; Solve ax + b = c with a substitution breakdown.
- **Two-Variable Linear Equation Calculator** — `#/calculator/linear-two`; Solve two simultaneous linear equations with unique solutions.
- **Slope Calculator** — `#/calculator/slope`; Compute rise over run between two points.
- **Point-Slope Calculator** — `#/calculator/point-slope`; Convert a point and slope into slope-intercept form.
- **Distance Between Two Points Calculator** — `#/calculator/point-distance`; Calculate straight-line distance in a Cartesian plane.
- **Midpoint Calculator** — `#/calculator/midpoint`; Find the point halfway between two coordinates.
- **Equation of Line Calculator** — `#/calculator/line-equation`; Construct a general-form equation from two different points.
- **Arithmetic Sequence Calculator** — `#/calculator/arithmetic-sequence`; Find the nth term and finite sum of equally spaced terms.
- **Geometric Sequence Calculator** — `#/calculator/geometric-sequence`; Find a term and sum in a constant-ratio sequence.

### Geometry (17)

- **Circle Calculator** — `#/calculator/circle`; Calculate area, diameter and circumference from a radius.
- **Triangle Calculator** — `#/calculator/triangle`; Calculate area and perimeter from three side lengths.
- **Right Triangle Calculator** — `#/calculator/right-triangle`; Solve a right triangle from its two perpendicular legs.
- **Rectangle Calculator** — `#/calculator/rectangle`; Find rectangular area, perimeter and diagonal.
- **Square Calculator** — `#/calculator/square`; Calculate area, perimeter and diagonal for a square.
- **Parallelogram Calculator** — `#/calculator/parallelogram`; Find area and perimeter from base, side and perpendicular height.
- **Trapezoid Calculator** — `#/calculator/trapezoid`; Calculate area between parallel sides from height.
- **Rhombus Calculator** — `#/calculator/rhombus`; Calculate area and perimeter from perpendicular diagonals.
- **Ellipse Calculator** — `#/calculator/ellipse`; Find elliptical area and an approximate perimeter from semi-axes.
- **Regular Polygon Calculator** — `#/calculator/regular-polygon`; Calculate area and perimeter for equal-sided regular polygons.
- **Sector Calculator** — `#/calculator/sector`; Find a circular sector’s area, arc length and boundary length.
- **Cylinder Calculator** — `#/calculator/cylinder`; Calculate volume and closed surface area of a cylinder.
- **Cone Calculator** — `#/calculator/cone`; Calculate volume and closed surface area of a right circular cone.
- **Sphere Calculator** — `#/calculator/sphere`; Calculate spherical volume and surface area.
- **Cube Calculator** — `#/calculator/cube`; Find volume, surface area and space diagonal of a cube.
- **Cuboid / Rectangular Prism Calculator** — `#/calculator/cuboid`; Calculate a rectangular prism’s volume and closed surface.
- **Pyramid Calculator** — `#/calculator/pyramid`; Calculate volume and surface of a right square pyramid.

### Physics (13)

- **Speed Distance Time Calculator** — `#/calculator/speed-distance-time`; Solve one motion quantity from the other two for constant speed.
- **Acceleration Calculator** — `#/calculator/acceleration`; Calculate average acceleration from a velocity change.
- **Force Calculator** — `#/calculator/force`; Calculate net force from mass and acceleration.
- **Work Calculator** — `#/calculator/work`; Calculate work by a constant force at an angle to displacement.
- **Mechanical Power Calculator** — `#/calculator/mechanical-power`; Calculate average power from work and elapsed time.
- **Momentum Calculator** — `#/calculator/momentum`; Find linear momentum along one direction.
- **Kinetic Energy Calculator** — `#/calculator/kinetic-energy`; Calculate classical kinetic energy from mass and speed.
- **Potential Energy Calculator** — `#/calculator/potential-energy`; Estimate gravitational potential energy relative to a chosen height datum.
- **Density Calculator** — `#/calculator/density`; Find bulk density from mass and occupied volume.
- **Pressure Calculator** — `#/calculator/pressure`; Calculate average pressure from perpendicular force and area.
- **Frequency / Wavelength Calculator** — `#/calculator/wave`; Solve wave frequency, wavelength or speed from the other two.
- **Torque Calculator** — `#/calculator/torque`; Calculate torque from force, lever length and included angle.
- **Mechanical Advantage Calculator** — `#/calculator/mechanical-advantage`; Calculate actual force amplification by a machine.

### Electrical (11)

- **Ohm's Law Calculator** — `#/calculator/ohms-law`; Solve voltage, current or resistance in an ideal DC circuit.
- **Electrical Power Calculator** — `#/calculator/electrical-power`; Calculate DC electrical power from voltage and current.
- **Electrical Energy Calculator** — `#/calculator/electrical-energy`; Calculate consumed energy from constant wattage and runtime.
- **Electricity Cost Calculator** — `#/calculator/electricity-cost`; Estimate a device’s energy cost using your tariff.
- **Battery Runtime Calculator** — `#/calculator/battery-runtime`; Estimate runtime from nominal energy and usable efficiency.
- **Battery Capacity Calculator** — `#/calculator/battery-capacity`; Estimate amp-hour capacity required for a planned runtime.
- **Battery Energy Calculator** — `#/calculator/battery-energy`; Convert battery amp-hours and nominal voltage to energy.
- **Voltage Divider Calculator** — `#/calculator/voltage-divider`; Find unloaded output voltage of a two-resistor divider.
- **LED Resistor Calculator** — `#/calculator/led-resistor`; Estimate a series resistor and dissipation for a low-voltage LED.
- **Resistors in Series / Parallel Calculator** — `#/calculator/resistor-network`; Combine positive resistances for either connection topology.
- **Capacitors in Series / Parallel Calculator** — `#/calculator/capacitor-network`; Combine positive capacitances under an ideal model.

### Travel (4)

- **Fuel Cost Calculator** — `#/calculator/fuel-cost`; Estimate fuel needed and its cost for a journey.
- **Mileage / Fuel Efficiency Calculator** — `#/calculator/mileage`; Calculate measured fuel economy from distance and fuel used.
- **Trip Cost Calculator** — `#/calculator/trip-cost`; Combine fuel, tolls, parking and other journey expenses.
- **Cost Per Kilometer / Mile Calculator** — `#/calculator/distance-cost`; Allocate total travel costs over distance in kilometers or miles.

### Everyday (3)

- **Tip / Split Bill Calculator** — `#/calculator/tip-split`; Calculate a tip and split the total equally among a group.
- **Recipe Scaling Calculator** — `#/calculator/recipe-scaling`; Scale an ingredient quantity to a different serving count.
- **Data Transfer Time Calculator** — `#/calculator/transfer-time`; Estimate ideal download/upload duration from size and line rate.

## Requested tools deliberately skipped

| Requested tool | Exact reason |
|---|---|
| PPF | No reviewed scheme interest schedule, contribution-date rules or current statutory limits configured. Generic compound interest is not presented as statutory PPF. |
| EPF | No reviewed contribution ceilings, eligibility and scheme-specific accrual rules configured. |
| NPS | No reviewed scheme-specific contribution, tax and withdrawal/annuity rule set configured. Generic investment/annuity tools remain available. |
| Gratuity | No reviewed jurisdiction, eligibility, wage basis, statutory cap or financial-year applicability configured. |
| HRA | No reviewed exemption rule set or financial-year assumptions configured. |
| TDS estimation | No reviewed financial-year rates, payment categories, thresholds and exceptions configured. |

`js/data/tax-policy.js` contains an unpublished guard with financialYear, assessmentYear, lastUpdated, slabs and primary-source slots. It rejects use until a reviewed rule set is enabled. No disabled tax cards are published. Salary and take-home tools use deductions supplied by the user. Existing GST tools use the chosen rate; no current legal rate applicability is claimed.

## Requested equivalent names and combined tools

This table accounts for every requested calculator/converter name. “Covered” means an existing or new working tool supplies the relevant calculation; selectable modes and aliases are intentionally not separate cards.

| Requested name | Working route / disposition |
|---|---|
| SWP Calculator | Covered by SWP Calculator (`#/calculator/swp`) |
| Lumpsum Investment Calculator | Covered by Compound Interest Calculator (`#/calculator/compound-interest`) |
| CAGR Calculator | Covered by CAGR Calculator (`#/calculator/cagr`) |
| Investment Return Calculator | Covered by ROI Calculator (`#/calculator/roi`) |
| ROI Calculator | Covered by ROI Calculator (`#/calculator/roi`) |
| Inflation Calculator | Covered by Inflation Calculator (`#/calculator/inflation`) |
| Future Value Calculator | Covered by Future Value Calculator (`#/calculator/future-value`) |
| Present Value Calculator | Covered by Present Value Calculator (`#/calculator/present-value`) |
| Rule of 72 Calculator | Covered by Rule of 72 Calculator (`#/calculator/rule-72`) |
| Mutual Fund Return Calculator | Covered by Compound Interest Calculator (`#/calculator/compound-interest`) |
| Goal Investment Calculator | Covered by Goal Investment Calculator (`#/calculator/goal-investment`) |
| Retirement Calculator | Covered by Retirement Corpus Calculator (`#/calculator/retirement-corpus`) |
| Retirement Corpus Calculator | Covered by Retirement Corpus Calculator (`#/calculator/retirement-corpus`) |
| Monthly Investment Required Calculator | Covered by Goal Investment Calculator (`#/calculator/goal-investment`) |
| Savings Goal Calculator | Covered by Goal Investment Calculator (`#/calculator/goal-investment`) |
| Emergency Fund Calculator | Covered by Emergency Fund Calculator (`#/calculator/emergency-fund`) |
| PPF Calculator | Skipped: see statutory-rule reason above |
| EPF Calculator | Skipped: see statutory-rule reason above |
| NPS Calculator | Skipped: see statutory-rule reason above |
| Gratuity Calculator | Skipped: see statutory-rule reason above |
| Annuity Calculator | Covered by Annuity Calculator (`#/calculator/annuity`) |
| Annuity Payout Calculator | Covered by Annuity Payout Calculator (`#/calculator/annuity-payout`) |
| Dividend Yield Calculator | Covered by Dividend Yield Calculator (`#/calculator/dividend-yield`) |
| Dividend Calculator | Covered by Dividend Calculator (`#/calculator/dividend`) |
| Stock Average Calculator | Covered by Stock Average Calculator (`#/calculator/stock-average`) |
| Average Share Price Calculator | Covered by Stock Average Calculator (`#/calculator/stock-average`) |
| Stock Profit/Loss Calculator | Covered by Stock Profit/Loss Calculator (`#/calculator/stock-profit`) |
| Risk/Reward Ratio Calculator | Covered by Risk/Reward Ratio Calculator (`#/calculator/risk-reward`) |
| Bond Yield Calculator | Covered by Bond Yield Calculator (`#/calculator/bond-yield`) |
| Effective Interest Rate Calculator | Covered by Effective Interest Rate Calculator (`#/calculator/effective-rate`) |
| APY Calculator | Covered by Effective Interest Rate Calculator (`#/calculator/effective-rate`) |
| APR Calculator | Covered by APR Calculator (`#/calculator/apr`) |
| Doubling Time Calculator | Covered by Doubling Time Calculator (`#/calculator/doubling-time`) |
| Home Loan EMI Calculator | Covered by EMI Calculator (`#/calculator/emi`) |
| Car Loan Calculator | Covered by EMI Calculator (`#/calculator/emi`) |
| Personal Loan Calculator | Covered by EMI Calculator (`#/calculator/emi`) |
| Education Loan Calculator | Covered by EMI Calculator (`#/calculator/emi`) |
| Business Loan Calculator | Covered by EMI Calculator (`#/calculator/emi`) |
| Loan Eligibility Calculator | Covered by Loan Eligibility Calculator (`#/calculator/loan-eligibility`) |
| Loan Affordability Calculator | Covered by Loan Eligibility Calculator (`#/calculator/loan-eligibility`) |
| Loan Comparison Calculator | Covered by Loan Comparison Calculator (`#/calculator/loan-comparison`) |
| Loan Prepayment Calculator | Covered by Loan Prepayment Calculator (`#/calculator/loan-prepayment`) |
| Loan Tenure Calculator | Covered by Loan Tenure Calculator (`#/calculator/loan-tenure`) |
| Interest Rate Calculator | Covered by Interest Rate Calculator (`#/calculator/loan-rate`) |
| Principal Calculator | Covered by Principal Calculator (`#/calculator/loan-principal`) |
| Credit Card EMI Calculator | Covered by EMI Calculator (`#/calculator/emi`) |
| Credit Card Interest Calculator | Covered by Credit Card Interest Calculator (`#/calculator/credit-card-interest`) |
| Debt-to-Income Ratio Calculator | Covered by Debt-to-Income Ratio Calculator (`#/calculator/debt-income`) |
| Debt Repayment Calculator | Covered by Debt Repayment Calculator (`#/calculator/debt-repayment`) |
| Salary Calculator | Covered by Salary Calculator (`#/calculator/salary`) |
| CTC to In-Hand Salary Calculator | Covered by Take-Home Salary Calculator (`#/calculator/take-home`) |
| Take-Home Salary Calculator | Covered by Take-Home Salary Calculator (`#/calculator/take-home`) |
| HRA Calculator | Skipped: see statutory-rule reason above |
| Basic Salary Percentage Calculator | Covered by X Is What Percent of Y Calculator (`#/calculator/percent-of`) |
| Salary Increment Calculator | Covered by Percentage Change Calculator (`#/calculator/percentage-change`) |
| Salary Hike Percentage Calculator | Covered by Percentage Change Calculator (`#/calculator/percentage-change`) |
| Bonus Calculator | Covered by Percentage Calculator (`#/calculator/percentage`) |
| Overtime Calculator | Covered by Overtime Calculator (`#/calculator/overtime`) |
| Revenue Calculator | Covered by Revenue Calculator (`#/calculator/revenue`) |
| Gross Profit Calculator | Covered by Profit Margin Calculator (`#/calculator/profit-margin`) |
| Net Profit Calculator | Covered by Net Profit Calculator (`#/calculator/net-profit`) |
| Operating Margin Calculator | Covered by Operating Margin Calculator (`#/calculator/operating-margin`) |
| Gross Margin Calculator | Covered by Profit Margin Calculator (`#/calculator/profit-margin`) |
| Contribution Margin Calculator | Covered by Contribution Margin Calculator (`#/calculator/contribution-margin`) |
| Cost Per Unit Calculator | Covered by Unit Price Calculator (`#/calculator/unit-price`) |
| Unit Price Calculator | Covered by Unit Price Calculator (`#/calculator/unit-price`) |
| Selling Price Calculator | Covered by Selling Price Calculator (`#/calculator/selling-price`) |
| Cost Price Calculator | Covered by Cost Price Calculator (`#/calculator/cost-price`) |
| Target Profit Calculator | Covered by Target Profit Calculator (`#/calculator/target-profit`) |
| Sales Growth Calculator | Covered by Percentage Change Calculator (`#/calculator/percentage-change`) |
| Revenue Growth Calculator | Covered by Percentage Change Calculator (`#/calculator/percentage-change`) |
| Percentage Increase Calculator | Covered by Percentage Change Calculator (`#/calculator/percentage-change`) |
| Percentage Decrease Calculator | Covered by Percentage Change Calculator (`#/calculator/percentage-change`) |
| Price Increase Calculator | Covered by Percentage Calculator (`#/calculator/percentage`) |
| Price Reduction Calculator | Covered by Percentage Calculator (`#/calculator/percentage`) |
| VAT Calculator | Covered by Sales Tax Calculator (`#/calculator/sales-tax`) |
| Sales Tax Calculator | Covered by Sales Tax Calculator (`#/calculator/sales-tax`) |
| Tip Calculator | Covered by Tip / Split Bill Calculator (`#/calculator/tip-split`) |
| Split Bill Calculator | Covered by Tip / Split Bill Calculator (`#/calculator/tip-split`) |
| Cost Per Lead Calculator | Covered by CPA Calculator (`#/calculator/cpa`) |
| Customer Acquisition Cost Calculator | Covered by Customer Acquisition Cost Calculator (`#/calculator/customer-acquisition`) |
| ROAS Calculator | Covered by ROAS Calculator (`#/calculator/roas`) |
| CPM Calculator | Covered by CPM Calculator (`#/calculator/cpm`) |
| CPC Calculator | Covered by CPC Calculator (`#/calculator/cpc`) |
| CPA Calculator | Covered by CPA Calculator (`#/calculator/cpa`) |
| Conversion Rate Calculator | Covered by Conversion Rate Calculator (`#/calculator/conversion-rate`) |
| Percentage Change | Covered by Percentage Change Calculator (`#/calculator/percentage-change`) |
| Percentage Increase | Covered by Percentage Change Calculator (`#/calculator/percentage-change`) |
| Percentage Decrease | Covered by Percentage Change Calculator (`#/calculator/percentage-change`) |
| Percentage Difference | Covered by Percentage Difference Calculator (`#/calculator/percentage-difference`) |
| X is What Percent of Y | Covered by X Is What Percent of Y Calculator (`#/calculator/percent-of`) |
| What is X Percent of Y | Covered by Percentage Calculator (`#/calculator/percentage`) |
| Find Original Value From Percentage | Covered by Reverse Percentage Calculator (`#/calculator/reverse-percentage`) |
| Reverse Percentage Calculator | Covered by Reverse Percentage Calculator (`#/calculator/reverse-percentage`) |
| Median Calculator | Covered by Median Calculator (`#/calculator/median`) |
| Mode Calculator | Covered by Mode Calculator (`#/calculator/mode`) |
| Mean Calculator | Covered by Average Calculator (`#/calculator/average`) |
| Weighted Average Calculator | Covered by Weighted Average Calculator (`#/calculator/weighted-average`) |
| Geometric Mean Calculator | Covered by Geometric Mean Calculator (`#/calculator/geometric-mean`) |
| Harmonic Mean Calculator | Covered by Harmonic Mean Calculator (`#/calculator/harmonic-mean`) |
| Range Calculator | Covered by Range Calculator (`#/calculator/range`) |
| Variance Calculator | Covered by Variance Calculator (`#/calculator/variance`) |
| Standard Deviation Calculator | Covered by Standard Deviation Calculator (`#/calculator/standard-deviation`) |
| Factorial Calculator | Covered by Factorial Calculator (`#/calculator/factorial`) |
| Prime Number Checker | Covered by Prime Number Checker (`#/calculator/prime-checker`) |
| Prime Factorization Calculator | Covered by Prime Factorization Calculator (`#/calculator/prime-factorization`) |
| Remainder Calculator | Covered by Remainder & Modulo Calculator (`#/calculator/modulo`) |
| Modulo Calculator | Covered by Remainder & Modulo Calculator (`#/calculator/modulo`) |
| Exponent Calculator | Covered by Scientific Calculator (`#/calculator/scientific`) |
| Power Calculator | Covered by Scientific Calculator (`#/calculator/scientific`) |
| Cube Calculator | Covered by Cube Calculator (`#/calculator/cube`) |
| Cube Root Calculator | Covered by nth Root Calculator (`#/calculator/nth-root`) |
| nth Root Calculator | Covered by nth Root Calculator (`#/calculator/nth-root`) |
| Logarithm Calculator | Covered by Scientific Calculator (`#/calculator/scientific`) |
| Permutation Calculator | Covered by Permutation Calculator (`#/calculator/permutation`) |
| Combination Calculator | Covered by Combination Calculator (`#/calculator/combination`) |
| Probability Calculator | Covered by Probability Calculator (`#/calculator/probability`) |
| Random Number Calculator | Covered by Random Number Calculator (`#/calculator/random-number`) |
| Absolute Value Calculator | Covered by Scientific Calculator (`#/calculator/scientific`) |
| Significant Figures Calculator | Covered by Significant Figures Calculator (`#/calculator/significant-figures`) |
| Decimal to Fraction Calculator | Covered by Decimal to Fraction Calculator (`#/calculator/decimal-fraction`) |
| Fraction to Decimal Calculator | Covered by Fraction Calculator (`#/calculator/fraction`) |
| Percentage to Fraction Calculator | Covered by Decimal to Fraction Calculator (`#/calculator/decimal-fraction`) |
| Decimal to Percentage Calculator | Covered by Decimal to Percentage Calculator (`#/calculator/decimal-percentage`) |
| Quadratic Equation Calculator | Covered by Quadratic Equation Calculator (`#/calculator/quadratic`) |
| Linear Equation Calculator | Covered by Linear Equation Calculator (`#/calculator/linear-equation`) |
| Two-Variable Linear Equation Calculator | Covered by Two-Variable Linear Equation Calculator (`#/calculator/linear-two`) |
| Slope Calculator | Covered by Slope Calculator (`#/calculator/slope`) |
| Point-Slope Calculator | Covered by Point-Slope Calculator (`#/calculator/point-slope`) |
| Distance Between Two Points Calculator | Covered by Distance Between Two Points Calculator (`#/calculator/point-distance`) |
| Midpoint Calculator | Covered by Midpoint Calculator (`#/calculator/midpoint`) |
| Equation of Line Calculator | Covered by Equation of Line Calculator (`#/calculator/line-equation`) |
| Arithmetic Sequence Calculator | Covered by Arithmetic Sequence Calculator (`#/calculator/arithmetic-sequence`) |
| Geometric Sequence Calculator | Covered by Geometric Sequence Calculator (`#/calculator/geometric-sequence`) |
| Circle Calculator | Covered by Circle Calculator (`#/calculator/circle`) |
| Triangle Calculator | Covered by Triangle Calculator (`#/calculator/triangle`) |
| Right Triangle Calculator | Covered by Right Triangle Calculator (`#/calculator/right-triangle`) |
| Pythagorean Theorem Calculator | Covered by Right Triangle Calculator (`#/calculator/right-triangle`) |
| Rectangle Calculator | Covered by Rectangle Calculator (`#/calculator/rectangle`) |
| Square Calculator | Covered by Square Calculator (`#/calculator/square`) |
| Parallelogram Calculator | Covered by Parallelogram Calculator (`#/calculator/parallelogram`) |
| Trapezoid Calculator | Covered by Trapezoid Calculator (`#/calculator/trapezoid`) |
| Rhombus Calculator | Covered by Rhombus Calculator (`#/calculator/rhombus`) |
| Ellipse Calculator | Covered by Ellipse Calculator (`#/calculator/ellipse`) |
| Regular Polygon Calculator | Covered by Regular Polygon Calculator (`#/calculator/regular-polygon`) |
| Sector Calculator | Covered by Sector Calculator (`#/calculator/sector`) |
| Arc Length Calculator | Covered by Sector Calculator (`#/calculator/sector`) |
| Cylinder Calculator | Covered by Cylinder Calculator (`#/calculator/cylinder`) |
| Cone Calculator | Covered by Cone Calculator (`#/calculator/cone`) |
| Sphere Calculator | Covered by Sphere Calculator (`#/calculator/sphere`) |
| Cuboid/Rectangular Prism Calculator | Covered by Cuboid / Rectangular Prism Calculator (`#/calculator/cuboid`) |
| Pyramid Calculator | Covered by Pyramid Calculator (`#/calculator/pyramid`) |
| TDEE Calculator | Covered by Calorie Calculator (`#/calculator/calorie`) |
| Body Fat Calculator | Covered by Body Fat Calculator (`#/calculator/body-fat`) |
| Lean Body Mass Calculator | Covered by Lean Body Mass Calculator (`#/calculator/lean-body-mass`) |
| Waist-to-Height Ratio Calculator | Covered by Waist-to-Height Ratio Calculator (`#/calculator/waist-height`) |
| Calorie Deficit Calculator | Covered by Calorie Deficit / Surplus Calculator (`#/calculator/calorie-budget`) |
| Calorie Surplus Calculator | Covered by Calorie Deficit / Surplus Calculator (`#/calculator/calorie-budget`) |
| Protein Intake Calculator | Covered by Protein Intake Calculator (`#/calculator/protein`) |
| Water Intake Calculator | Covered by Water Intake Calculator (`#/calculator/water`) |
| Macro Calculator | Covered by Macro Calculator (`#/calculator/macros`) |
| Running Pace Calculator | Covered by Running / Walking Pace Calculator (`#/calculator/running-pace`) |
| Walking Pace Calculator | Covered by Running / Walking Pace Calculator (`#/calculator/running-pace`) |
| Pace Converter | Covered by Running / Walking Pace Calculator (`#/calculator/running-pace`) |
| Steps to Distance Calculator | Covered by Steps / Distance Calculator (`#/calculator/steps-distance`) |
| Distance to Steps Calculator | Covered by Steps / Distance Calculator (`#/calculator/steps-distance`) |
| Add Days to Date Calculator | Covered by Add / Subtract Days Calculator (`#/calculator/add-days`) |
| Subtract Days From Date Calculator | Covered by Add / Subtract Days Calculator (`#/calculator/add-days`) |
| Add Months to Date Calculator | Covered by Add Months to Date Calculator (`#/calculator/add-months`) |
| Add Years to Date Calculator | Covered by Add Years to Date Calculator (`#/calculator/add-years`) |
| Business Days Calculator | Covered by Working Days Calculator (`#/calculator/working-days`) |
| Weekend Days Calculator | Covered by Weekend Days Calculator (`#/calculator/weekend-days`) |
| Week Number Calculator | Covered by Week Number Calculator (`#/calculator/week-number`) |
| Leap Year Calculator | Covered by Leap Year Calculator (`#/calculator/leap-year`) |
| Birthday Countdown Calculator | Covered by Age Calculator (`#/calculator/age`) |
| Anniversary Calculator | Covered by Add Years to Date Calculator (`#/calculator/add-years`) |
| Hours Calculator | Covered by Time Unit Converter (`#/calculator/time-units`) |
| Minutes Calculator | Covered by Time Unit Converter (`#/calculator/time-units`) |
| Seconds Calculator | Covered by Time Unit Converter (`#/calculator/time-units`) |
| Hours Between Times Calculator | Covered by Time Duration Calculator (`#/calculator/time-duration`) |
| Time Addition Calculator | Covered by Time Addition / Subtraction Calculator (`#/calculator/time-arithmetic`) |
| Time Subtraction Calculator | Covered by Time Addition / Subtraction Calculator (`#/calculator/time-arithmetic`) |
| Decimal Hours Calculator | Covered by Decimal Hours Calculator (`#/calculator/decimal-hours`) |
| Hours to Decimal Calculator | Covered by Time Duration Calculator (`#/calculator/time-duration`) |
| Pressure Converter | Covered by Pressure Converter (`#/calculator/pressure-units`) |
| Energy Converter | Covered by Energy Converter (`#/calculator/energy-units`) |
| Power Converter | Covered by Scientific Calculator (`#/calculator/scientific`) |
| Force Converter | Covered by Force Converter (`#/calculator/force-units`) |
| Torque Converter | Covered by Torque Converter (`#/calculator/torque-units`) |
| Angle Converter | Covered by Angle Converter (`#/calculator/angle-units`) |
| Frequency Converter | Covered by Frequency Converter (`#/calculator/frequency-units`) |
| Fuel Economy Converter | Covered by Fuel Economy Converter (`#/calculator/fuel-economy`) |
| Fuel Consumption Converter | Covered by Fuel Economy Converter (`#/calculator/fuel-economy`) |
| Density Converter | Covered by Density Converter (`#/calculator/density-units`) |
| Acceleration Converter | Covered by Acceleration Converter (`#/calculator/acceleration-units`) |
| Cooking Measurement Converter | Covered by Volume Converter (`#/calculator/volume`) |
| Distance Converter if not covered sufficiently | Covered by Length Converter (`#/calculator/length`) |
| Time Unit Converter | Covered by Time Unit Converter (`#/calculator/time-units`) |
| Digital Transfer Rate Converter | Covered by Digital Transfer Rate Converter (`#/calculator/transfer-units`) |
| Speed Distance Time Calculator | Covered by Speed Distance Time Calculator (`#/calculator/speed-distance-time`) |
| Acceleration Calculator | Covered by Acceleration Converter (`#/calculator/acceleration-units`) |
| Force Calculator | Covered by Force Converter (`#/calculator/force-units`) |
| Work Calculator | Covered by Work Calculator (`#/calculator/work`) |
| Momentum Calculator | Covered by Momentum Calculator (`#/calculator/momentum`) |
| Kinetic Energy Calculator | Covered by Kinetic Energy Calculator (`#/calculator/kinetic-energy`) |
| Potential Energy Calculator | Covered by Potential Energy Calculator (`#/calculator/potential-energy`) |
| Density Calculator | Covered by Density Converter (`#/calculator/density-units`) |
| Pressure Calculator | Covered by Pressure Converter (`#/calculator/pressure-units`) |
| Frequency Calculator | Covered by Frequency Converter (`#/calculator/frequency-units`) |
| Wavelength Calculator | Covered by Frequency / Wavelength Calculator (`#/calculator/wave`) |
| Frequency/Wavelength Calculator | Covered by Frequency / Wavelength Calculator (`#/calculator/wave`) |
| Torque Calculator | Covered by Torque Converter (`#/calculator/torque-units`) |
| Mechanical Advantage Calculator | Covered by Mechanical Advantage Calculator (`#/calculator/mechanical-advantage`) |
| Ohm's Law Calculator | Covered by Ohm's Law Calculator (`#/calculator/ohms-law`) |
| Voltage Calculator | Covered by Ohm's Law Calculator (`#/calculator/ohms-law`) |
| Current Calculator | Covered by Ohm's Law Calculator (`#/calculator/ohms-law`) |
| Resistance Calculator | Covered by Ohm's Law Calculator (`#/calculator/ohms-law`) |
| Electrical Power Calculator | Covered by Electrical Power Calculator (`#/calculator/electrical-power`) |
| Electrical Energy Calculator | Covered by Electrical Energy Calculator (`#/calculator/electrical-energy`) |
| kWh Calculator | Covered by Electrical Energy Calculator (`#/calculator/electrical-energy`) |
| Electricity Cost Calculator | Covered by Electricity Cost Calculator (`#/calculator/electricity-cost`) |
| kW to HP Calculator | Covered by Power Converter (`#/calculator/power-units`) |
| HP to kW Calculator | Covered by Power Converter (`#/calculator/power-units`) |
| Battery Runtime Calculator | Covered by Battery Runtime Calculator (`#/calculator/battery-runtime`) |
| Battery Capacity Calculator | Covered by Battery Capacity Calculator (`#/calculator/battery-capacity`) |
| Battery Energy Calculator | Covered by Battery Energy Calculator (`#/calculator/battery-energy`) |
| Voltage Divider Calculator | Covered by Voltage Divider Calculator (`#/calculator/voltage-divider`) |
| LED Resistor Calculator | Covered by LED Resistor Calculator (`#/calculator/led-resistor`) |
| Resistors in Series Calculator | Covered by Resistors in Series / Parallel Calculator (`#/calculator/resistor-network`) |
| Resistors in Parallel Calculator | Covered by Resistors in Series / Parallel Calculator (`#/calculator/resistor-network`) |
| Capacitors in Series Calculator | Covered by Capacitors in Series / Parallel Calculator (`#/calculator/capacitor-network`) |
| Capacitors in Parallel Calculator | Covered by Capacitors in Series / Parallel Calculator (`#/calculator/capacitor-network`) |
| Cement Calculator | Covered by Cement / Sand / Gravel Calculator (`#/calculator/concrete-mix`) |
| Sand Calculator | Covered by Cement / Sand / Gravel Calculator (`#/calculator/concrete-mix`) |
| Gravel Calculator | Covered by Cement / Sand / Gravel Calculator (`#/calculator/concrete-mix`) |
| Flooring Calculator | Covered by Flooring Calculator (`#/calculator/flooring`) |
| Roofing Calculator | Covered by Roofing Calculator (`#/calculator/roofing`) |
| Wallpaper Calculator | Covered by Wallpaper Calculator (`#/calculator/wallpaper`) |
| Wall Area Calculator | Covered by Area Calculator (`#/calculator/construction-area`) |
| Room Area Calculator | Covered by Area Calculator (`#/calculator/construction-area`) |
| Ceiling Area Calculator | Covered by Area Calculator (`#/calculator/construction-area`) |
| Stair Calculator | Covered by Stair Calculator (`#/calculator/stairs`) |
| Fence Calculator | Covered by Fence Calculator (`#/calculator/fence`) |
| Water Tank Volume Calculator | Covered by Water Tank Volume Calculator (`#/calculator/water-tank`) |
| Excavation Volume Calculator | Covered by Excavation / Soil / Mulch Calculator (`#/calculator/earth-material`) |
| Mulch Calculator | Covered by Excavation / Soil / Mulch Calculator (`#/calculator/earth-material`) |
| Soil Calculator | Covered by Excavation / Soil / Mulch Calculator (`#/calculator/earth-material`) |
| Asphalt Calculator | Covered by Excavation / Soil / Mulch Calculator (`#/calculator/earth-material`) |
| Paver Calculator | Covered by Tile Calculator (`#/calculator/tile`) |
| Fuel Cost Calculator | Covered by Fuel Cost Calculator (`#/calculator/fuel-cost`) |
| Mileage Calculator | Covered by Mileage / Fuel Efficiency Calculator (`#/calculator/mileage`) |
| Fuel Efficiency Calculator | Covered by Mileage / Fuel Efficiency Calculator (`#/calculator/mileage`) |
| Trip Cost Calculator | Covered by Trip Cost Calculator (`#/calculator/trip-cost`) |
| Cost Per Kilometer Calculator | Covered by Cost Per Kilometer / Mile Calculator (`#/calculator/distance-cost`) |
| Cost Per Mile Calculator | Covered by Cost Per Kilometer / Mile Calculator (`#/calculator/distance-cost`) |
| Travel Time Calculator | Covered by Speed Distance Time Calculator (`#/calculator/speed-distance-time`) |
| Average Speed Calculator | Covered by Speed Distance Time Calculator (`#/calculator/speed-distance-time`) |
| Distance Calculator | Covered by Length Converter (`#/calculator/length`) |
| Fuel Required Calculator | Covered by Fuel Cost Calculator (`#/calculator/fuel-cost`) |
| Price Per Unit Calculator | Covered by Unit Price Calculator (`#/calculator/unit-price`) |
| Discount Percentage Calculator | Covered by X Is What Percent of Y Calculator (`#/calculator/percent-of`) |
| Recipe Scaling Calculator | Covered by Recipe Scaling Calculator (`#/calculator/recipe-scaling`) |
| Cooking Measurement Calculator | Covered by Volume Converter (`#/calculator/volume`) |
| Download Time Calculator | Covered by Data Transfer Time Calculator (`#/calculator/transfer-time`) |
| Upload Time Calculator | Covered by Data Transfer Time Calculator (`#/calculator/transfer-time`) |
| Data Transfer Time Calculator | Covered by Data Transfer Time Calculator (`#/calculator/transfer-time`) |
| TDS estimation tools | Skipped: see statutory-rule reason above |

## Verification

- Batch 1: 1,901/1,901 checks passed; finance, loan, business and salary examples plus original regressions.
- Batch 2: 2,392/2,392; math, percentage and algebra.
- Batch 3: 2,726/2,726; geometry and dates.
- Batch 4: 3,295/3,295; converters, physics and electrical.
- Batch 5: 3,858/3,858 before overlap audit removed the duplicate lumpsum card; it now resolves to original Compound Interest.
- Final formula suite: 3,867/3,867. Independently specified examples for every new calculator, field validation, zero/negative/decimal/huge/nonfinite inputs, original regressions, inverse-mode examples, leap/month-end boundaries, singular systems and impossible geometry.
- Browser integration: 1,101 checks across all 214 real rendered calculator pages, default results, empty-input errors, reset, mobile overflow, unique page metadata, directory pagination, all category counts, ten requested search terms and theme toggle. See `tests/ui.html` and `tests/VERIFICATION.md` for final observed outcome.
- No unfinished calculator cards, duplicate IDs, duplicate names or inaccessible catalog routes. Search-input hint attributes are normal UI text.

## Assumptions and limitations

- Financial projections use constant entered rates and explicit deposit/withdrawal timing; fees/taxes are excluded unless a fee field exists. SWP stops at depletion; monthly loan schedules are capped at 1,000 years. APR is a monthly cash-flow estimate including entered upfront fee, not a jurisdiction-specific statutory APR. Bond yield is current yield, not yield to maturity. Rule of 72 is approximate; Doubling Time uses exact annual compounding.
- Body fat uses the adult Deurenberg BMI regression: 1.20×BMI + 0.23×age − 10.8×sex − 5.4, with male sex=1 and female=0. Adult age and original BMI study ranges are guarded. It is a population estimate. All new health tools show the requested informational/medical disclaimer; protein/water factors and calorie/macronutrient targets are supplied by the user, not medical recommendations.
- Physics uses ideal standard SI models. Electrical tools use ideal DC resistive circuits; battery runtime assumes usable energy fraction and constant load. No mains installation or component-rating certification is provided.
- Construction tools label quantities estimated; dry-volume factors, cement density, waste, roof pitch and chosen stair riser are user assumptions, not site surveys, structural design or building-code compliance. Concrete Mix estimates material components, while the original Concrete tool measures wet volume.
- Dates use UTC calendar arithmetic, inclusive day ranges where stated, ISO week years, leap-year rules and month-end clamping. Business days exclude weekends, not a holiday calendar.
- US customary cooking measurements and US/UK gallon choices are explicit. Data transfer uses decimal MB/Mbps; speed overhead is excluded. Very large/out-of-range results produce errors. Tiny nonzero numbers use scientific notation; precision is limited by JavaScript floating point except exact integer/fraction tools. Random numbers use Math.random, not cryptographic randomness.
- The directory uses hash routes and dynamic metadata. Search-engine indexing of client-rendered content depends on crawler support; no static per-tool prerendering or public deployment was requested. Tested in Chrome; cross-browser testing remains outside this verification.

## Formula sources

- [NIST SI guide](https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-4-two-classes-si-units-and-si-prefixes): SI units and prefixes.
- [NIST conversion factors](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9): conversion conventions.
- [Deurenberg et al., 1991](https://pubmed.ncbi.nlm.nih.gov/2043597/): adult body-fat regression. The calculator exposes this source on its page.
- Elementary finance, algebra, geometry and physical definitions are written explicitly in each module and verified against independent worked examples; numerical approximations (ellipse perimeter, APR root solving) are labeled.

## Files created or modified

Created: `docs/BASELINE.json`, `docs/EXPANSION-AUDIT.md`; `js/data/expansion.js`, `js/data/aliases.js`, `js/data/tax-policy.js`; `js/utils/dates.js`, `js/utils/formatting.js`, `js/utils/search.js`; `js/calculators/shared.js`, `finance.js`, `business.js`, `math.js`, `algebra.js`, `geometry.js`, `dates.js`, `converters.js`, `physics.js`, `electrical.js`, `health.js`, `construction.js`, `everyday.js`; `tests/expansion.test.js`, `tests/ui.html`, `tests/ui.test.js`.

Modified: `index.html`, `css/style.css`, `js/catalog.js`, `js/extended-catalog.js` (clearer original explanatory notes), `js/calculators/compute.js`, `js/calculators/extended.js` (zero-denominator result wording), `js/app.js`, `tests/logic.test.js`, `tests/extended.test.js`, `README.md`, `tests/VERIFICATION.md`.
