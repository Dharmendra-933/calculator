# CalcHub advanced expansion audit

Verified 3 October 2026 in Chrome. **Previous: 214. Added: 114. Total: 328 working calculators in 30 categories.** All previous IDs, titles, categories and routes are retained. Selectable inverse operations, aliases and alternate units are not additional calculator cards.

## Inventory before implementation

[ADVANCED-BASELINE.json](ADVANCED-BASELINE.json) records the complete prior set of 214 IDs, titles, aliases, categories and routes. Existing logic, form rendering, reset, validation, themes, pagination and formatting were reused. [ADVANCED-REQUESTS.json](ADVANCED-REQUESTS.json) contains all 363 requested calculator names. [ADVANCED-COVERAGE.json](ADVANCED-COVERAGE.json) is their exact normalized mapping to working routes. Comparison strips naming suffixes and punctuation; it does not count substring matches as proof of coverage.

## Counts

| Category | Previous | Added | Total |
|---|---:|---:|---:|
| Finance | 31 | 11 | 42 |
| Math | 33 | 0 | 33 |
| Date & Time | 13 | 0 | 13 |
| Health | 13 | 0 | 13 |
| Converters | 20 | 0 | 20 |
| Business | 21 | 0 | 21 |
| Construction | 13 | 6 | 19 |
| Loans | 9 | 0 | 9 |
| Tax & Salary | 3 | 0 | 3 |
| Algebra | 10 | 7 | 17 |
| Geometry | 17 | 9 | 26 |
| Physics | 13 | 0 | 13 |
| Electrical | 11 | 6 | 17 |
| Travel | 4 | 0 | 4 |
| Everyday | 3 | 0 | 3 |
| Statistics | 0 | 15 | 15 |
| Number Theory | 0 | 11 | 11 |
| Trigonometry | 0 | 3 | 3 |
| Property | 0 | 2 | 2 |
| Ecommerce | 0 | 4 | 4 |
| Marketing | 0 | 2 | 2 |
| Digital | 0 | 6 | 6 |
| Computing | 0 | 3 | 3 |
| Engineering | 0 | 9 | 9 |
| Thermodynamics | 0 | 6 | 6 |
| Chemistry | 0 | 5 | 5 |
| Land | 0 | 2 | 2 |
| Automotive | 0 | 4 | 4 |
| Productivity | 0 | 1 | 1 |
| Education | 0 | 2 | 2 |

## All additions

### Finance

- **NPV / Profitability Index Calculator** — `#/calculator/npv`. Discount a periodic cash-flow series including its time-zero cash flow.
- **IRR Calculator** — `#/calculator/irr`. Solve the periodic return for a conventional investment cash-flow series.
- **Payback / Discounted Payback Period Calculator** — `#/calculator/payback`. Find recovery time for an initial outlay and nonnegative periodic inflows.
- **Growing Annuity Calculator** — `#/calculator/growing-annuity`. Value a finite series of end-of-year payments growing at a constant rate.
- **Perpetuity / Growing Perpetuity Calculator** — `#/calculator/perpetuity`. Value an indefinite annual payment stream at constant growth.
- **Nominal Interest Rate Calculator** — `#/calculator/nominal-rate`. Recover a nominal annual interest rate from an effective annual rate.
- **Real Interest Rate / Fisher Equation Calculator** — `#/calculator/real-interest`. Adjust nominal annual growth for inflation using the exact Fisher equation.
- **Continuous Compounding Calculator** — `#/calculator/continuous-compounding`. Project a lump sum using continuous rather than discrete compounding.
- **ROA / ROE / Asset and Inventory Turnover Calculator** — `#/calculator/financial-performance`. Calculate company performance ratios using consistent period and average balances.
- **Current / Quick Ratio / Working Capital Calculator** — `#/calculator/liquidity`. Assess short-term balance-sheet liquidity using entered current balances.
- **EPS / P-E / Book Value / Enterprise Value Calculator** — `#/calculator/equity-valuation`. Derive share and enterprise valuation measures from financial statements.

### Construction

- **Rebar Calculator** — `#/calculator/rebar`. Estimate straight reinforcing bar length and mass from diameter and density.
- **Decking Calculator** — `#/calculator/decking`. Estimate parallel deck boards with butt joints and a chosen gap allowance.
- **Board Foot / Lumber Calculator** — `#/calculator/board-foot`. Measure lumber volume using the board-foot convention.
- **Ramp Slope / Roof Pitch Calculator** — `#/calculator/ramp-slope`. Calculate rise/run gradient and inclination for a straight ramp or roof section.
- **Gutter / Linear Material Calculator** — `#/calculator/gutter`. Estimate stock sections for separately measured straight material runs.
- **Pipe Weight Calculator** — `#/calculator/pipe-weight`. Estimate cylindrical pipe material mass from outer diameter, wall thickness and density.

### Algebra

- **Polynomial Operations Calculator** — `#/calculator/polynomial`. Add, multiply or evaluate polynomials using descending-power coefficient lists.
- **Complex Number Operations / Polar Form Calculator** — `#/calculator/complex-number`. Add, multiply, divide complex numbers or convert the first to polar form.
- **Matrix Addition / Subtraction Calculator** — `#/calculator/matrix-add`. Combine two matrices of identical dimensions.
- **Matrix Multiplication Calculator** — `#/calculator/matrix-multiply`. Multiply conformable rectangular matrices up to 6×6.
- **Matrix Determinant Calculator** — `#/calculator/matrix-determinant`. Calculate a square matrix determinant by recursive cofactor expansion.
- **Matrix Inverse Calculator** — `#/calculator/matrix-inverse`. Invert a nonsingular square matrix with a determinant and adjugate.
- **System of 3 Equations / Cramer’s Rule Calculator** — `#/calculator/linear-three`. Solve a uniquely determined 3×3 linear system using determinant ratios.

### Geometry

- **Annulus Calculator** — `#/calculator/annulus`. Find the area and boundary lengths of a circular ring.
- **Circle Chord / Segment Calculator** — `#/calculator/circle-segment`. Measure a chord and its minor or major circular segment from the central angle.
- **Polygon Angles / Diagonals Calculator** — `#/calculator/polygon-properties`. Count diagonals and find interior/exterior angles of a regular polygon.
- **Prism / Triangular Prism Calculator** — `#/calculator/prism`. Measure a right prism using either a triangular base or a supplied base area and perimeter.
- **Hemisphere Calculator** — `#/calculator/hemisphere`. Calculate half-sphere volume and curved/total surface area.
- **Hollow Cylinder / Pipe Volume Calculator** — `#/calculator/hollow-cylinder`. Calculate material and internal capacity of an open cylindrical tube.
- **Cone Frustum Calculator** — `#/calculator/cone-frustum`. Measure volume and surface of a truncated right circular cone.
- **Ellipsoid Calculator** — `#/calculator/ellipsoid`. Calculate volume of an ellipsoid from its three semi-axes.
- **Torus Calculator** — `#/calculator/torus`. Calculate volume and surface area of a ring torus.

### Electrical

- **AC Single / Three Phase Power Calculator** — `#/calculator/ac-power`. Calculate real, apparent and reactive power or infer power factor from real power.
- **RMS Voltage / Current Calculator** — `#/calculator/sinusoidal-rms`. Convert sinusoidal peak amplitude to RMS voltage or current.
- **Transformer Turns Ratio / Voltage Calculator** — `#/calculator/transformer`. Estimate ideal transformer secondary voltage and winding ratio.
- **Wire Voltage Drop (DC) Calculator** — `#/calculator/wire-drop`. Estimate a two-conductor DC voltage drop from entered conductor resistance.
- **Battery / EV Charging Time Calculator** — `#/calculator/battery-charging`. Estimate charging duration from required energy and average delivered input power.
- **Solar Panel Output Calculator** — `#/calculator/solar-output`. Estimate daily PV energy using entered equivalent full-sun hours and system efficiency.

### Statistics

- **Mean Absolute Deviation Calculator** — `#/calculator/mean-absolute-deviation`. Measure average absolute distance from the arithmetic mean.
- **Coefficient of Variation Calculator** — `#/calculator/coefficient-variation`. Compare population or sample standard deviation with a positive mean.
- **Z-Score Calculator** — `#/calculator/z-score`. Standardize an observation using a supplied reference mean and standard deviation.
- **Standard Error Calculator** — `#/calculator/standard-error`. Estimate standard error of the sample mean from independent observations.
- **Confidence Interval / Margin of Error Calculator** — `#/calculator/confidence-interval`. Compute a normal-reference interval for a mean using a chosen critical value.
- **Sample Size Calculator** — `#/calculator/sample-size`. Plan an independent binomial-proportion sample under a normal approximation.
- **Quartiles / Five Number Summary Calculator** — `#/calculator/quartiles`. Summarize a sorted dataset with interpolated quartiles and IQR.
- **Percentile Calculator** — `#/calculator/percentile`. Find a selected interpolated percentile in a numerical dataset.
- **Outlier Calculator** — `#/calculator/outliers`. Identify values outside Tukey fences from interpolated quartiles.
- **Covariance Calculator** — `#/calculator/covariance`. Measure joint variation of paired observations.
- **Linear Regression / Pearson Correlation Calculator** — `#/calculator/linear-regression`. Fit an ordinary least-squares line and report correlation and R-squared.
- **RMS Calculator** — `#/calculator/rms`. Calculate the root mean square of a numerical dataset.
- **Frequency Distribution / Relative Frequency Calculator** — `#/calculator/frequency-distribution`. Count exact distinct dataset values and their relative frequencies.
- **Odds Calculator** — `#/calculator/odds`. Convert a probability into event-to-non-event odds.
- **Odds Ratio Calculator** — `#/calculator/odds-ratio`. Compare exposure odds in a positive 2×2 contingency table.

### Number Theory

- **Fibonacci / Sequence Generator Calculator** — `#/calculator/fibonacci`. Compute an exact Fibonacci number and the sequence from F₀.
- **Natural Number / Squares / Cubes Sum Calculator** — `#/calculator/power-sums`. Sum the first n positive integers or their squares/cubes exactly.
- **Divisibility Calculator** — `#/calculator/divisibility`. Check whether one exact integer divides another.
- **Factors / Common Factors Calculator** — `#/calculator/factors`. List positive divisors of an integer or divisors common to two integers.
- **Multiples / Common Multiples Calculator** — `#/calculator/multiples`. Generate a bounded list of positive multiples or common multiples.
- **Extended GCD / Coprime Checker** — `#/calculator/extended-gcd`. Find Bézout coefficients and check coprimality of exact integers.
- **Modular Arithmetic / Exponentiation Calculator** — `#/calculator/modular-arithmetic`. Perform exact modular addition, subtraction, multiplication or nonnegative exponentiation.
- **Number Base Converter** — `#/calculator/number-base`. Convert exact signed integers between bases 2 through 36.
- **Binary / Octal / Hex Arithmetic Calculator** — `#/calculator/base-arithmetic`. Add, subtract, multiply or divide exact integers in a selected radix.
- **Roman Numeral Converter** — `#/calculator/roman-numerals`. Convert canonical Roman numerals and integers from 1 to 3999.
- **Scientific / Engineering Notation Calculator** — `#/calculator/notation`. Express a finite number using powers of ten or powers divisible by three.

### Trigonometry

- **Inverse / Reciprocal Trigonometry Calculator** — `#/calculator/advanced-trig`. Evaluate inverse trig or reciprocal trig functions with explicit angle units.
- **Law of Sines Calculator** — `#/calculator/law-sines`. Solve a triangle from two angles and the side opposite the first angle.
- **Law of Cosines / Triangle Side and Angle Calculator** — `#/calculator/law-cosines`. Solve an included side from SAS or an angle from three triangle sides.

### Property

- **Rental Yield / Cap Rate Calculator** — `#/calculator/rental-yield`. Estimate gross and net annual rental yield before financing and income tax.
- **Rent vs Buy Calculator** — `#/calculator/rent-buy`. Compare scenario wealth after buying a home versus renting and investing the upfront cash and monthly cost difference.

### Ecommerce

- **Product Profit / Pricing Calculator** — `#/calculator/product-profit`. Calculate unit profit after configurable fees and fulfillment, or solve a target-margin price.
- **Marketplace / Payment Gateway Fee Calculator** — `#/calculator/transaction-fee`. Estimate a variable plus fixed payment fee and net proceeds.
- **Customer Lifetime Value Calculator** — `#/calculator/customer-lifetime`. Estimate gross contribution across an assumed customer lifetime.
- **Inventory Reorder Point / Safety Stock Calculator** — `#/calculator/inventory-planning`. Plan safety stock and reorder point for a fixed supplier lead time.

### Marketing

- **Customer Retention / Churn Rate Calculator** — `#/calculator/retention-churn`. Measure retained starting customers after excluding new acquisitions.
- **Cart Abandonment Rate Calculator** — `#/calculator/cart-abandonment`. Calculate unfinished initiated shopping carts as a share of started carts.

### Digital

- **Website Uptime / Downtime Calculator** — `#/calculator/uptime`. Convert monitored downtime into availability or calculate downtime from uptime.
- **Website Bandwidth Usage Calculator** — `#/calculator/website-bandwidth`. Estimate transfer volume and average bandwidth from traffic and page payload.
- **Streaming / Audio / Video Data Usage Calculator** — `#/calculator/media-size`. Estimate encoded media size from constant bitrate and duration.
- **Image Uncompressed Size Calculator** — `#/calculator/image-size`. Estimate raw raster payload before headers, alignment or compression.
- **Screen Resolution / PPI Calculator** — `#/calculator/ppi`. Measure display pixel density from raster dimensions and diagonal size.
- **Print DPI Calculator** — `#/calculator/print-dpi`. Calculate print sampling density from pixels and physical print width.

### Computing

- **RAID Capacity Calculator** — `#/calculator/raid`. Estimate usable capacity for equal-size drives in common RAID layouts.
- **CPU Execution Time / Clock Cycles Calculator** — `#/calculator/cpu-time`. Estimate execution time under a constant average cycles-per-instruction model.
- **IPv4 Subnet / CIDR / Address Range Calculator** — `#/calculator/ipv4-subnet`. Calculate normal IPv4 addressing ranges and usable host counts.

### Engineering

- **Torque / RPM / Horsepower Calculator** — `#/calculator/rotational-power`. Solve shaft power, torque or rotation speed for steady mechanical transmission.
- **Gear / Pulley Ratio and Speed Calculator** — `#/calculator/gear-pulley`. Calculate an ideal gear-pair or belt-pulley speed ratio from teeth or diameters.
- **Mechanical Efficiency Calculator** — `#/calculator/mechanical-efficiency`. Compare useful mechanical output with supplied input energy or power.
- **Friction Calculator** — `#/calculator/friction`. Estimate Coulomb friction from a selected coefficient and normal force.
- **Centripetal / Centrifugal Force Calculator** — `#/calculator/centripetal`. Calculate radial force magnitude for uniform circular motion.
- **Angular Velocity / Linear Velocity Calculator** — `#/calculator/angular-motion`. Convert rotation speed into angular velocity and tangential linear speed.
- **Angular Acceleration Calculator** — `#/calculator/angular-acceleration`. Calculate average angular acceleration over an elapsed time.
- **Volumetric / Mass Flow Rate Calculator** — `#/calculator/flow-rate`. Calculate pipe flow from cross-section, mean velocity and fluid density.
- **Hydraulic Cylinder Force / Pressure Calculator** — `#/calculator/hydraulic-cylinder`. Solve ideal hydraulic force or pressure using bore and optional rod diameter.

### Thermodynamics

- **Heat Energy / Specific Heat Calculator** — `#/calculator/heat-energy`. Solve sensible heat or specific heat using mass and temperature change.
- **Heat Transfer (Conduction) Calculator** — `#/calculator/heat-conduction`. Estimate steady heat flow through a homogeneous planar layer.
- **Temperature Difference Calculator** — `#/calculator/temperature-difference`. Subtract temperatures and express the interval in Celsius/Kelvin or Fahrenheit.
- **Thermal Expansion Calculator** — `#/calculator/thermal-expansion`. Estimate a small linear expansion or contraction from an entered coefficient.
- **Ideal Gas Law Calculator** — `#/calculator/ideal-gas`. Solve one ideal gas state quantity with absolute pressure and temperature.
- **Combined Gas / Boyle’s / Charles’s Law Calculator** — `#/calculator/combined-gas`. Calculate a final gas volume for a fixed gas amount across two states.

### Chemistry

- **Molar Mass Calculator** — `#/calculator/molar-mass`. Calculate molar mass for formulas using supported elements and nested parentheses.
- **Moles / Mass Conversion Calculator** — `#/calculator/moles-mass`. Convert amount of substance and mass with a supplied molar mass.
- **Molarity / Molality Calculator** — `#/calculator/solution-concentration`. Calculate molarity from solution volume or molality from solvent mass.
- **Dilution Calculator** — `#/calculator/dilution`. Calculate final volume or concentration for ideal solvent-only dilution.
- **pH / pOH / Hydrogen Ion Calculator** — `#/calculator/ph-poh`. Convert pH, pOH or hydrogen ion concentration under a supplied water-ion constant.

### Land

- **Plot / Land Polygon Area Calculator** — `#/calculator/plot-area`. Estimate simple polygon area from ordered planar survey coordinates.
- **Regional Bigha Converter** — `#/calculator/bigha`. Convert Assam-convention Bigha using an explicit regional selection and source.

### Automotive

- **Vehicle Depreciation Calculator** — `#/calculator/vehicle-depreciation`. Estimate value after constant percentage depreciation and a chosen residual floor.
- **EV / Battery Range Calculator** — `#/calculator/ev-range`. Estimate range from nominal energy, usable fraction and vehicle consumption.
- **EV Charging Cost Calculator** — `#/calculator/ev-cost`. Estimate wall-energy charging cost including entered charging losses.
- **Tire Size / Diameter / Speedometer Error Calculator** — `#/calculator/tire-size`. Compare metric tire dimensions and resulting theoretical road-speed change.

### Productivity

- **Timesheet / Work Hours Calculator** — `#/calculator/timesheet`. Sum shift durations and unpaid breaks over any entered weekly or monthly period.

### Education

- **Final Grade / Required Marks Calculator** — `#/calculator/final-grade`. Project a final percentage or solve the remaining assessment score needed for a target.
- **Required Attendance Calculator** — `#/calculator/required-attendance`. Find how many future sessions must all be attended to reach a target attendance rate.

## Existing calculators reused / skipped as separate additions

**120 requested names** are covered by the previous catalog. They were skipped as new cards because the same calculation already existed, or could be completed with an inverse mode on that existing page. Existing loan, density, battery energy, transfer-time, fuel-cost, growth-time and storage tools gained complementary functionality without increasing their card count.

| Requested name skipped as a new card | Existing working tool | Relevant input/mode |
|---|---|---|
| Population Variance Calculator | Variance Calculator (`#/calculator/variance`) | Choose population or sample in Dataset type. |
| Population Standard Deviation Calculator | Standard Deviation Calculator (`#/calculator/standard-deviation`) | Choose population or sample in Dataset type. |
| Sample Variance Calculator | Variance Calculator (`#/calculator/variance`) | Choose population or sample in Dataset type. |
| Sample Standard Deviation Calculator | Standard Deviation Calculator (`#/calculator/standard-deviation`) | Choose population or sample in Dataset type. |
| Weighted Mean Calculator | Weighted Average Calculator (`#/calculator/weighted-average`) | For portfolio return, enter individual percentage returns and allocation weights. For GPA/CGPA, enter your institution’s grade points and corresponding credits; for weighted grades, enter assessment percentages and weights. No institutional grade conversion or grading scale is assumed. |
| Arithmetic Progression Calculator | Arithmetic Sequence Calculator (`#/calculator/arithmetic-sequence`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Geometric Progression Calculator | Geometric Sequence Calculator (`#/calculator/geometric-sequence`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Quadratic Formula Calculator | Quadratic Equation Calculator (`#/calculator/quadratic`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Discriminant Calculator | Quadratic Equation Calculator (`#/calculator/quadratic`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| System of 2 Equations Calculator | Two-Variable Linear Equation Calculator (`#/calculator/linear-two`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Sine Calculator | Scientific Calculator (`#/calculator/scientific`) | Use sin(angle), cos(angle) or tan(angle) and select degrees/radians. |
| Cosine Calculator | Scientific Calculator (`#/calculator/scientific`) | Use sin(angle), cos(angle) or tan(angle) and select degrees/radians. |
| Tangent Calculator | Scientific Calculator (`#/calculator/scientific`) | Use sin(angle), cos(angle) or tan(angle) and select degrees/radians. |
| Trigonometry Calculator | Scientific Calculator (`#/calculator/scientific`) | Use sin(angle), cos(angle) or tan(angle) and select degrees/radians. |
| Degrees to Radians Calculator | Angle Converter (`#/calculator/angle-units`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Radians to Degrees Calculator | Angle Converter (`#/calculator/angle-units`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Circle Sector Calculator | Sector Calculator (`#/calculator/sector`) | Set the central angle to 180 degrees for a semicircle; the boundary result includes the diameter. |
| Semicircle Calculator | Sector Calculator (`#/calculator/sector`) | Set the central angle to 180 degrees for a semicircle; the boundary result includes the diameter. |
| Equilateral Triangle Calculator | Triangle Calculator (`#/calculator/triangle`) | For equilateral triangles enter three equal sides; for isosceles enter two equal sides. Area uses Heron’s formula for all valid side triples. |
| Isosceles Triangle Calculator | Triangle Calculator (`#/calculator/triangle`) | For equilateral triangles enter three equal sides; for isosceles enter two equal sides. Area uses Heron’s formula for all valid side triples. |
| Scalene Triangle Calculator | Triangle Calculator (`#/calculator/triangle`) | For equilateral triangles enter three equal sides; for isosceles enter two equal sides. Area uses Heron’s formula for all valid side triples. |
| Heron's Formula Calculator | Triangle Calculator (`#/calculator/triangle`) | For equilateral triangles enter three equal sides; for isosceles enter two equal sides. Area uses Heron’s formula for all valid side triples. |
| Hexagon Calculator | Regular Polygon Calculator (`#/calculator/regular-polygon`) | Select 5, 6 or 8 sides for a pentagon, hexagon or octagon. |
| Pentagon Calculator | Regular Polygon Calculator (`#/calculator/regular-polygon`) | Select 5, 6 or 8 sides for a pentagon, hexagon or octagon. |
| Octagon Calculator | Regular Polygon Calculator (`#/calculator/regular-polygon`) | Select 5, 6 or 8 sides for a pentagon, hexagon or octagon. |
| Future Value of Annuity Calculator | Future Value Calculator (`#/calculator/future-value`) | For the future value of an annuity, set the starting balance to zero; contributions are monthly and occur at month end. |
| Present Value of Annuity Calculator | Annuity Calculator (`#/calculator/annuity`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Effective Annual Rate Calculator | Effective Interest Rate Calculator (`#/calculator/effective-rate`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Investment Doubling Calculator | Doubling Time Calculator (`#/calculator/doubling-time`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Investment Tripling Calculator | Doubling Time Calculator (`#/calculator/doubling-time`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Portfolio Return Calculator | Weighted Average Calculator (`#/calculator/weighted-average`) | For portfolio return, enter individual percentage returns and allocation weights. For GPA/CGPA, enter your institution’s grade points and corresponding credits; for weighted grades, enter assessment percentages and weights. No institutional grade conversion or grading scale is assumed. |
| Weighted Portfolio Return Calculator | Weighted Average Calculator (`#/calculator/weighted-average`) | For portfolio return, enter individual percentage returns and allocation weights. For GPA/CGPA, enter your institution’s grade points and corresponding credits; for weighted grades, enter assessment percentages and weights. No institutional grade conversion or grading scale is assumed. |
| EBITDA Margin Calculator | Operating Margin Calculator (`#/calculator/operating-margin`) | For EBITDA margin, supply EBITDA as the operating-profit input; EBITDA and operating profit are different accounting measures. |
| Mortgage Calculator | EMI Calculator (`#/calculator/emi`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Mortgage Payment Calculator | EMI Calculator (`#/calculator/emi`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Mortgage Affordability Calculator | Loan Eligibility Calculator (`#/calculator/loan-eligibility`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Mortgage Amortization Calculator | Loan Calculator (`#/calculator/loan`) | Includes an amortization schedule for up to 600 months; longer loans retain repayment totals. |
| Extra Mortgage Payment Calculator | Loan Prepayment Calculator (`#/calculator/loan-prepayment`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Mortgage Payoff Calculator | Debt Repayment Calculator (`#/calculator/debt-repayment`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Property ROI Calculator | ROI Calculator (`#/calculator/roi`) | For property/marketing ROI, enter initial cost, total proceeds and additional income consistently; annualization is not automatic. |
| Price Per Square Foot Calculator | Unit Price Calculator (`#/calculator/unit-price`) | Enter total cost or revenue and the matching quantity: orders, visitors, clicks, square feet or square meters. The output is per the entered quantity unit. |
| Price Per Square Meter Calculator | Unit Price Calculator (`#/calculator/unit-price`) | Enter total cost or revenue and the matching quantity: orders, visitors, clicks, square feet or square meters. The output is per the entered quantity unit. |
| Property Appreciation Calculator | Compound Interest Calculator (`#/calculator/compound-interest`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Down Payment Calculator | Percentage Calculator (`#/calculator/percentage`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Wholesale Price Calculator | Selling Price Calculator (`#/calculator/selling-price`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Retail Price Calculator | Selling Price Calculator (`#/calculator/selling-price`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Reseller Margin Calculator | Profit Margin Calculator (`#/calculator/profit-margin`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Shipping Cost Per Order Calculator | Unit Price Calculator (`#/calculator/unit-price`) | Enter total cost or revenue and the matching quantity: orders, visitors, clicks, square feet or square meters. The output is per the entered quantity unit. |
| Average Order Value Calculator | Unit Price Calculator (`#/calculator/unit-price`) | Enter total cost or revenue and the matching quantity: orders, visitors, clicks, square feet or square meters. The output is per the entered quantity unit. |
| Refund Rate Calculator | Conversion Rate Calculator (`#/calculator/conversion-rate`) | For equivalent event-rate metrics, enter numerator events and the eligible denominator count for one consistent cohort. For CTR use clicks and impressions; refunds/returns use refunded/returned orders and total orders. For engagement count unique engaged entities; repeated interactions may exceed a unique-event rate. |
| Return Rate Calculator | Conversion Rate Calculator (`#/calculator/conversion-rate`) | For equivalent event-rate metrics, enter numerator events and the eligible denominator count for one consistent cohort. For CTR use clicks and impressions; refunds/returns use refunded/returned orders and total orders. For engagement count unique engaged entities; repeated interactions may exceed a unique-event rate. |
| CTR Calculator | Conversion Rate Calculator (`#/calculator/conversion-rate`) | For equivalent event-rate metrics, enter numerator events and the eligible denominator count for one consistent cohort. For CTR use clicks and impressions; refunds/returns use refunded/returned orders and total orders. For engagement count unique engaged entities; repeated interactions may exceed a unique-event rate. |
| Engagement Rate Calculator | Conversion Rate Calculator (`#/calculator/conversion-rate`) | For equivalent event-rate metrics, enter numerator events and the eligible denominator count for one consistent cohort. For CTR use clicks and impressions; refunds/returns use refunded/returned orders and total orders. For engagement count unique engaged entities; repeated interactions may exceed a unique-event rate. |
| Bounce Rate Calculator | Conversion Rate Calculator (`#/calculator/conversion-rate`) | For equivalent event-rate metrics, enter numerator events and the eligible denominator count for one consistent cohort. For CTR use clicks and impressions; refunds/returns use refunded/returned orders and total orders. For engagement count unique engaged entities; repeated interactions may exceed a unique-event rate. |
| Email Open Rate Calculator | Conversion Rate Calculator (`#/calculator/conversion-rate`) | For equivalent event-rate metrics, enter numerator events and the eligible denominator count for one consistent cohort. For CTR use clicks and impressions; refunds/returns use refunded/returned orders and total orders. For engagement count unique engaged entities; repeated interactions may exceed a unique-event rate. |
| Email Click Rate Calculator | Conversion Rate Calculator (`#/calculator/conversion-rate`) | For equivalent event-rate metrics, enter numerator events and the eligible denominator count for one consistent cohort. For CTR use clicks and impressions; refunds/returns use refunded/returned orders and total orders. For engagement count unique engaged entities; repeated interactions may exceed a unique-event rate. |
| Lead Conversion Rate Calculator | Conversion Rate Calculator (`#/calculator/conversion-rate`) | For equivalent event-rate metrics, enter numerator events and the eligible denominator count for one consistent cohort. For CTR use clicks and impressions; refunds/returns use refunded/returned orders and total orders. For engagement count unique engaged entities; repeated interactions may exceed a unique-event rate. |
| Sales Conversion Rate Calculator | Conversion Rate Calculator (`#/calculator/conversion-rate`) | For equivalent event-rate metrics, enter numerator events and the eligible denominator count for one consistent cohort. For CTR use clicks and impressions; refunds/returns use refunded/returned orders and total orders. For engagement count unique engaged entities; repeated interactions may exceed a unique-event rate. |
| Cost Per Conversion Calculator | CPA Calculator (`#/calculator/cpa`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Cost Per Acquisition Calculator | CPA Calculator (`#/calculator/cpa`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Marketing ROI Calculator | ROI Calculator (`#/calculator/roi`) | For property/marketing ROI, enter initial cost, total proceeds and additional income consistently; annualization is not automatic. |
| MER Calculator | ROAS Calculator (`#/calculator/roas`) | For MER, enter total revenue and total marketing spend; for ROAS, enter attributable advertising revenue and ad spend. These use the same ratio with different attribution scope. |
| Revenue Per Visitor Calculator | Unit Price Calculator (`#/calculator/unit-price`) | Enter total cost or revenue and the matching quantity: orders, visitors, clicks, square feet or square meters. The output is per the entered quantity unit. |
| Revenue Per Click Calculator | Unit Price Calculator (`#/calculator/unit-price`) | Enter total cost or revenue and the matching quantity: orders, visitors, clicks, square feet or square meters. The output is per the entered quantity unit. |
| Email Conversion Rate Calculator | Conversion Rate Calculator (`#/calculator/conversion-rate`) | For equivalent event-rate metrics, enter numerator events and the eligible denominator count for one consistent cohort. For CTR use clicks and impressions; refunds/returns use refunded/returned orders and total orders. For engagement count unique engaged entities; repeated interactions may exceed a unique-event rate. |
| Page Size Download Time Calculator | Data Transfer Time Calculator (`#/calculator/transfer-time`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| File Download Time Calculator | Data Transfer Time Calculator (`#/calculator/transfer-time`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| File Upload Time Calculator | Data Transfer Time Calculator (`#/calculator/transfer-time`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Internet Speed Calculator | Data Transfer Time Calculator (`#/calculator/transfer-time`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Transfer Speed Calculator | Data Transfer Time Calculator (`#/calculator/transfer-time`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Aspect Ratio Calculator | Ratio Calculator (`#/calculator/ratio`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Bit Calculator | Data Storage Converter (`#/calculator/data-storage`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Byte Calculator | Data Storage Converter (`#/calculator/data-storage`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Storage Calculator | Data Storage Converter (`#/calculator/data-storage`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| DC Power Calculator | Electrical Power Calculator (`#/calculator/electrical-power`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Joules to kWh Calculator | Energy Converter (`#/calculator/energy-units`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| kWh to Joules Calculator | Energy Converter (`#/calculator/energy-units`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Amp Hours to Watt Hours Calculator | Battery Energy Calculator (`#/calculator/battery-energy`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Watt Hours to Amp Hours Calculator | Battery Energy Calculator (`#/calculator/battery-energy`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Solar Battery Size Calculator | Battery Capacity Calculator (`#/calculator/battery-capacity`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Electricity Bill Calculator | Electricity Cost Calculator (`#/calculator/electricity-cost`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Percent Concentration Calculator | X Is What Percent of Y Calculator (`#/calculator/percent-of`) | For concentration percentages, use solute and total solution quantities in the same units for mass/mass or volume/volume; for mass/volume use grams and solution mL. For grades/time/productivity, use achieved and possible values with consistent units. |
| Density Mass Volume Calculator | Density Calculator (`#/calculator/density`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Concrete Block Calculator | Brick Calculator (`#/calculator/brick`) | Enter your block face dimensions and joint allowance for a concrete/cinder-block wall estimate; do not interpret solid brick volume as hollow-block concrete fill. |
| Cinder Block Calculator | Brick Calculator (`#/calculator/brick`) | Enter your block face dimensions and joint allowance for a concrete/cinder-block wall estimate; do not interpret solid brick volume as hollow-block concrete fill. |
| Drywall Calculator | Flooring Calculator (`#/calculator/flooring`) | For drywall or insulation panels, enter the total coverage area and sheet/pack coverage as the flooring-box coverage input. This is an area-based quantity estimate, not thermal or structural performance. |
| Insulation Calculator | Flooring Calculator (`#/calculator/flooring`) | For drywall or insulation panels, enter the total coverage area and sheet/pack coverage as the flooring-box coverage input. This is an area-based quantity estimate, not thermal or structural performance. |
| Plaster Calculator | Excavation / Soil / Mulch Calculator (`#/calculator/earth-material`) | For plaster, mortar or screed layers enter layer length, width, depth and material bulk density; the result estimates layer material volume/mass, not mix design or brick-joint mortar consumption. |
| Mortar Calculator | Excavation / Soil / Mulch Calculator (`#/calculator/earth-material`) | For plaster, mortar or screed layers enter layer length, width, depth and material bulk density; the result estimates layer material volume/mass, not mix design or brick-joint mortar consumption. |
| Screed Calculator | Excavation / Soil / Mulch Calculator (`#/calculator/earth-material`) | For plaster, mortar or screed layers enter layer length, width, depth and material bulk density; the result estimates layer material volume/mass, not mix design or brick-joint mortar consumption. |
| Column Concrete Calculator | Cylinder Calculator (`#/calculator/cylinder`) | For a column volume estimate use its radius and height; add any waste allowance separately. Geometry is not concrete mix design. |
| Slab Concrete Calculator | Concrete Calculator (`#/calculator/concrete`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Footing Concrete Calculator | Concrete Calculator (`#/calculator/concrete`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Foundation Concrete Calculator | Concrete Calculator (`#/calculator/concrete`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Roof Area Calculator | Roofing Calculator (`#/calculator/roofing`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Square Feet to Gaj Calculator | Area Converter (`#/calculator/area-converter`) | For Gaj, choose square yards (yd²): this tool explicitly uses the square-yard interpretation, 1 area Gaj = 9 ft². Bigha uses the separate region-specific converter. |
| Gaj to Square Feet Calculator | Area Converter (`#/calculator/area-converter`) | For Gaj, choose square yards (yd²): this tool explicitly uses the square-yard interpretation, 1 area Gaj = 9 ft². Bigha uses the separate region-specific converter. |
| Square Feet to Acre Calculator | Area Converter (`#/calculator/area-converter`) | For Gaj, choose square yards (yd²): this tool explicitly uses the square-yard interpretation, 1 area Gaj = 9 ft². Bigha uses the separate region-specific converter. |
| Acre to Square Feet Calculator | Area Converter (`#/calculator/area-converter`) | For Gaj, choose square yards (yd²): this tool explicitly uses the square-yard interpretation, 1 area Gaj = 9 ft². Bigha uses the separate region-specific converter. |
| Hectare to Acre Calculator | Area Converter (`#/calculator/area-converter`) | For Gaj, choose square yards (yd²): this tool explicitly uses the square-yard interpretation, 1 area Gaj = 9 ft². Bigha uses the separate region-specific converter. |
| Acre to Hectare Calculator | Area Converter (`#/calculator/area-converter`) | For Gaj, choose square yards (yd²): this tool explicitly uses the square-yard interpretation, 1 area Gaj = 9 ft². Bigha uses the separate region-specific converter. |
| Square Meter to Square Feet Calculator | Area Converter (`#/calculator/area-converter`) | For Gaj, choose square yards (yd²): this tool explicitly uses the square-yard interpretation, 1 area Gaj = 9 ft². Bigha uses the separate region-specific converter. |
| Square Feet to Square Meter Calculator | Area Converter (`#/calculator/area-converter`) | For Gaj, choose square yards (yd²): this tool explicitly uses the square-yard interpretation, 1 area Gaj = 9 ft². Bigha uses the separate region-specific converter. |
| Car Affordability Calculator | Loan Eligibility Calculator (`#/calculator/loan-eligibility`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Car Loan Affordability Calculator | Loan Eligibility Calculator (`#/calculator/loan-eligibility`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Cost Per Trip Calculator | Trip Cost Calculator (`#/calculator/trip-cost`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Fuel Cost Per Kilometer Calculator | Fuel Cost Calculator (`#/calculator/fuel-cost`) | The result includes fuel cost per kilometer and per mile as well as journey total. |
| Fuel Cost Per Mile Calculator | Fuel Cost Calculator (`#/calculator/fuel-cost`) | The result includes fuel cost per kilometer and per mile as well as journey total. |
| Hours to Minutes Calculator | Time Unit Converter (`#/calculator/time-units`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Minutes to Hours Calculator | Time Unit Converter (`#/calculator/time-units`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Seconds to Hours Calculator | Time Unit Converter (`#/calculator/time-units`) | Use the labeled inputs and relevant unit/mode selector on the existing page. |
| Time Percentage Calculator | X Is What Percent of Y Calculator (`#/calculator/percent-of`) | For concentration percentages, use solute and total solution quantities in the same units for mass/mass or volume/volume; for mass/volume use grams and solution mL. For grades/time/productivity, use achieved and possible values with consistent units. |
| Productivity Percentage Calculator | X Is What Percent of Y Calculator (`#/calculator/percent-of`) | For concentration percentages, use solute and total solution quantities in the same units for mass/mass or volume/volume; for mass/volume use grams and solution mL. For grades/time/productivity, use achieved and possible values with consistent units. |
| GPA Calculator | Weighted Average Calculator (`#/calculator/weighted-average`) | For portfolio return, enter individual percentage returns and allocation weights. For GPA/CGPA, enter your institution’s grade points and corresponding credits; for weighted grades, enter assessment percentages and weights. No institutional grade conversion or grading scale is assumed. |
| CGPA Calculator | Weighted Average Calculator (`#/calculator/weighted-average`) | For portfolio return, enter individual percentage returns and allocation weights. For GPA/CGPA, enter your institution’s grade points and corresponding credits; for weighted grades, enter assessment percentages and weights. No institutional grade conversion or grading scale is assumed. |
| Grade Percentage Calculator | X Is What Percent of Y Calculator (`#/calculator/percent-of`) | For concentration percentages, use solute and total solution quantities in the same units for mass/mass or volume/volume; for mass/volume use grams and solution mL. For grades/time/productivity, use achieved and possible values with consistent units. |
| Marks Percentage Calculator | X Is What Percent of Y Calculator (`#/calculator/percent-of`) | For concentration percentages, use solute and total solution quantities in the same units for mass/mass or volume/volume; for mass/volume use grams and solution mL. For grades/time/productivity, use achieved and possible values with consistent units. |
| Weighted Grade Calculator | Weighted Average Calculator (`#/calculator/weighted-average`) | For portfolio return, enter individual percentage returns and allocation weights. For GPA/CGPA, enter your institution’s grade points and corresponding credits; for weighted grades, enter assessment percentages and weights. No institutional grade conversion or grading scale is assumed. |
| Attendance Percentage Calculator | Conversion Rate Calculator (`#/calculator/conversion-rate`) | For equivalent event-rate metrics, enter numerator events and the eligible denominator count for one consistent cohort. For CTR use clicks and impressions; refunds/returns use refunded/returned orders and total orders. For engagement count unique engaged entities; repeated interactions may exceed a unique-event rate. |
| Correct Answer Percentage Calculator | Conversion Rate Calculator (`#/calculator/conversion-rate`) | For equivalent event-rate metrics, enter numerator events and the eligible denominator count for one consistent cohort. For CTR use clicks and impressions; refunds/returns use refunded/returned orders and total orders. For engagement count unique engaged entities; repeated interactions may exceed a unique-event rate. |

## Consolidated new functions

The remaining **243 requested names** are covered by 114 new shared pages. For example, NPV and profitability index share the same cash-flow inputs; polynomial add/multiply/evaluate share one engine; matrix addition/subtraction share one page; pH/pOH/ion concentrations share one page; IPv4 CIDR/subnet/address ranges share one page.

| Requested name | New shared working tool |
|---|---|
| Mean Absolute Deviation Calculator | Mean Absolute Deviation Calculator (`#/calculator/mean-absolute-deviation`) |
| Coefficient of Variation Calculator | Coefficient of Variation Calculator (`#/calculator/coefficient-variation`) |
| Z-Score Calculator | Z-Score Calculator (`#/calculator/z-score`) |
| Standard Error Calculator | Standard Error Calculator (`#/calculator/standard-error`) |
| Confidence Interval Calculator | Confidence Interval / Margin of Error Calculator (`#/calculator/confidence-interval`) |
| Margin of Error Calculator | Confidence Interval / Margin of Error Calculator (`#/calculator/confidence-interval`) |
| Sample Size Calculator | Sample Size Calculator (`#/calculator/sample-size`) |
| Quartile Calculator | Quartiles / Five Number Summary Calculator (`#/calculator/quartiles`) |
| Interquartile Range Calculator | Quartiles / Five Number Summary Calculator (`#/calculator/quartiles`) |
| Percentile Calculator | Percentile Calculator (`#/calculator/percentile`) |
| Five Number Summary Calculator | Quartiles / Five Number Summary Calculator (`#/calculator/quartiles`) |
| Outlier Calculator | Outlier Calculator (`#/calculator/outliers`) |
| Covariance Calculator | Covariance Calculator (`#/calculator/covariance`) |
| Correlation Coefficient Calculator | Linear Regression / Pearson Correlation Calculator (`#/calculator/linear-regression`) |
| Pearson Correlation Calculator | Linear Regression / Pearson Correlation Calculator (`#/calculator/linear-regression`) |
| Linear Regression Calculator | Linear Regression / Pearson Correlation Calculator (`#/calculator/linear-regression`) |
| Regression Line Calculator | Linear Regression / Pearson Correlation Calculator (`#/calculator/linear-regression`) |
| R-Squared Calculator | Linear Regression / Pearson Correlation Calculator (`#/calculator/linear-regression`) |
| RMS Calculator | RMS Calculator (`#/calculator/rms`) |
| Frequency Distribution Calculator | Frequency Distribution / Relative Frequency Calculator (`#/calculator/frequency-distribution`) |
| Relative Frequency Calculator | Frequency Distribution / Relative Frequency Calculator (`#/calculator/frequency-distribution`) |
| Odds Calculator | Odds Calculator (`#/calculator/odds`) |
| Odds Ratio Calculator | Odds Ratio Calculator (`#/calculator/odds-ratio`) |
| Fibonacci Calculator | Fibonacci / Sequence Generator Calculator (`#/calculator/fibonacci`) |
| Fibonacci Sequence Generator | Fibonacci / Sequence Generator Calculator (`#/calculator/fibonacci`) |
| Sum of Natural Numbers Calculator | Natural Number / Squares / Cubes Sum Calculator (`#/calculator/power-sums`) |
| Sum of Squares Calculator | Natural Number / Squares / Cubes Sum Calculator (`#/calculator/power-sums`) |
| Sum of Cubes Calculator | Natural Number / Squares / Cubes Sum Calculator (`#/calculator/power-sums`) |
| Divisibility Calculator | Divisibility Calculator (`#/calculator/divisibility`) |
| Factors Calculator | Factors / Common Factors Calculator (`#/calculator/factors`) |
| Common Factors Calculator | Factors / Common Factors Calculator (`#/calculator/factors`) |
| Multiples Calculator | Multiples / Common Multiples Calculator (`#/calculator/multiples`) |
| Common Multiples Calculator | Multiples / Common Multiples Calculator (`#/calculator/multiples`) |
| Coprime Checker | Extended GCD / Coprime Checker (`#/calculator/extended-gcd`) |
| GCD Extended Calculator | Extended GCD / Coprime Checker (`#/calculator/extended-gcd`) |
| Modular Arithmetic Calculator | Modular Arithmetic / Exponentiation Calculator (`#/calculator/modular-arithmetic`) |
| Modular Exponentiation Calculator | Modular Arithmetic / Exponentiation Calculator (`#/calculator/modular-arithmetic`) |
| Binary Calculator | Binary / Octal / Hex Arithmetic Calculator (`#/calculator/base-arithmetic`) |
| Octal Calculator | Binary / Octal / Hex Arithmetic Calculator (`#/calculator/base-arithmetic`) |
| Hex Calculator | Binary / Octal / Hex Arithmetic Calculator (`#/calculator/base-arithmetic`) |
| Decimal to Binary Calculator | Number Base Converter (`#/calculator/number-base`) |
| Binary to Decimal Calculator | Number Base Converter (`#/calculator/number-base`) |
| Decimal to Octal Calculator | Number Base Converter (`#/calculator/number-base`) |
| Octal to Decimal Calculator | Number Base Converter (`#/calculator/number-base`) |
| Decimal to Hex Calculator | Number Base Converter (`#/calculator/number-base`) |
| Hex to Decimal Calculator | Number Base Converter (`#/calculator/number-base`) |
| Binary to Hex Calculator | Number Base Converter (`#/calculator/number-base`) |
| Hex to Binary Calculator | Number Base Converter (`#/calculator/number-base`) |
| Roman Numeral Converter | Roman Numeral Converter (`#/calculator/roman-numerals`) |
| Scientific Notation Calculator | Scientific / Engineering Notation Calculator (`#/calculator/notation`) |
| Engineering Notation Calculator | Scientific / Engineering Notation Calculator (`#/calculator/notation`) |
| Number Base Converter | Number Base Converter (`#/calculator/number-base`) |
| Polynomial Calculator | Polynomial Operations Calculator (`#/calculator/polynomial`) |
| Polynomial Addition Calculator | Polynomial Operations Calculator (`#/calculator/polynomial`) |
| Polynomial Multiplication Calculator | Polynomial Operations Calculator (`#/calculator/polynomial`) |
| Polynomial Evaluation Calculator | Polynomial Operations Calculator (`#/calculator/polynomial`) |
| Complex Number Calculator | Complex Number Operations / Polar Form Calculator (`#/calculator/complex-number`) |
| Complex Number Addition | Complex Number Operations / Polar Form Calculator (`#/calculator/complex-number`) |
| Complex Number Multiplication | Complex Number Operations / Polar Form Calculator (`#/calculator/complex-number`) |
| Complex Number Division | Complex Number Operations / Polar Form Calculator (`#/calculator/complex-number`) |
| Complex Number Polar Form Calculator | Complex Number Operations / Polar Form Calculator (`#/calculator/complex-number`) |
| System of 3 Equations Calculator | System of 3 Equations / Cramer’s Rule Calculator (`#/calculator/linear-three`) |
| Matrix Addition Calculator | Matrix Addition / Subtraction Calculator (`#/calculator/matrix-add`) |
| Matrix Subtraction Calculator | Matrix Addition / Subtraction Calculator (`#/calculator/matrix-add`) |
| Matrix Multiplication Calculator | Matrix Multiplication Calculator (`#/calculator/matrix-multiply`) |
| Matrix Determinant Calculator | Matrix Determinant Calculator (`#/calculator/matrix-determinant`) |
| 2x2 Matrix Inverse Calculator | Matrix Inverse Calculator (`#/calculator/matrix-inverse`) |
| 3x3 Matrix Determinant Calculator | Matrix Determinant Calculator (`#/calculator/matrix-determinant`) |
| Cramer's Rule Calculator | System of 3 Equations / Cramer’s Rule Calculator (`#/calculator/linear-three`) |
| Arcsine Calculator | Inverse / Reciprocal Trigonometry Calculator (`#/calculator/advanced-trig`) |
| Arccosine Calculator | Inverse / Reciprocal Trigonometry Calculator (`#/calculator/advanced-trig`) |
| Arctangent Calculator | Inverse / Reciprocal Trigonometry Calculator (`#/calculator/advanced-trig`) |
| Law of Sines Calculator | Law of Sines Calculator (`#/calculator/law-sines`) |
| Law of Cosines Calculator | Law of Cosines / Triangle Side and Angle Calculator (`#/calculator/law-cosines`) |
| Triangle Angle Calculator | Law of Cosines / Triangle Side and Angle Calculator (`#/calculator/law-cosines`) |
| Triangle Side Calculator | Law of Cosines / Triangle Side and Angle Calculator (`#/calculator/law-cosines`) |
| Cotangent Calculator | Inverse / Reciprocal Trigonometry Calculator (`#/calculator/advanced-trig`) |
| Secant Calculator | Inverse / Reciprocal Trigonometry Calculator (`#/calculator/advanced-trig`) |
| Cosecant Calculator | Inverse / Reciprocal Trigonometry Calculator (`#/calculator/advanced-trig`) |
| Annulus Calculator | Annulus Calculator (`#/calculator/annulus`) |
| Circle Chord Calculator | Circle Chord / Segment Calculator (`#/calculator/circle-segment`) |
| Circle Segment Calculator | Circle Chord / Segment Calculator (`#/calculator/circle-segment`) |
| Regular Polygon Interior Angle Calculator | Polygon Angles / Diagonals Calculator (`#/calculator/polygon-properties`) |
| Polygon Exterior Angle Calculator | Polygon Angles / Diagonals Calculator (`#/calculator/polygon-properties`) |
| Polygon Diagonal Calculator | Polygon Angles / Diagonals Calculator (`#/calculator/polygon-properties`) |
| Prism Volume Calculator | Prism / Triangular Prism Calculator (`#/calculator/prism`) |
| Triangular Prism Calculator | Prism / Triangular Prism Calculator (`#/calculator/prism`) |
| Hemisphere Calculator | Hemisphere Calculator (`#/calculator/hemisphere`) |
| Hollow Cylinder Calculator | Hollow Cylinder / Pipe Volume Calculator (`#/calculator/hollow-cylinder`) |
| Frustum Calculator | Cone Frustum Calculator (`#/calculator/cone-frustum`) |
| Cone Frustum Calculator | Cone Frustum Calculator (`#/calculator/cone-frustum`) |
| Ellipsoid Calculator | Ellipsoid Calculator (`#/calculator/ellipsoid`) |
| Torus Calculator | Torus Calculator (`#/calculator/torus`) |
| IRR Calculator | IRR Calculator (`#/calculator/irr`) |
| NPV Calculator | NPV / Profitability Index Calculator (`#/calculator/npv`) |
| Payback Period Calculator | Payback / Discounted Payback Period Calculator (`#/calculator/payback`) |
| Discounted Payback Period Calculator | Payback / Discounted Payback Period Calculator (`#/calculator/payback`) |
| Profitability Index Calculator | NPV / Profitability Index Calculator (`#/calculator/npv`) |
| Growing Annuity Calculator | Growing Annuity Calculator (`#/calculator/growing-annuity`) |
| Perpetuity Calculator | Perpetuity / Growing Perpetuity Calculator (`#/calculator/perpetuity`) |
| Growing Perpetuity Calculator | Perpetuity / Growing Perpetuity Calculator (`#/calculator/perpetuity`) |
| Nominal Interest Rate Calculator | Nominal Interest Rate Calculator (`#/calculator/nominal-rate`) |
| Real Interest Rate Calculator | Real Interest Rate / Fisher Equation Calculator (`#/calculator/real-interest`) |
| Fisher Equation Calculator | Real Interest Rate / Fisher Equation Calculator (`#/calculator/real-interest`) |
| Continuous Compounding Calculator | Continuous Compounding Calculator (`#/calculator/continuous-compounding`) |
| Dividend Payout Ratio Calculator | EPS / P-E / Book Value / Enterprise Value Calculator (`#/calculator/equity-valuation`) |
| Earnings Per Share Calculator | EPS / P-E / Book Value / Enterprise Value Calculator (`#/calculator/equity-valuation`) |
| P/E Ratio Calculator | EPS / P-E / Book Value / Enterprise Value Calculator (`#/calculator/equity-valuation`) |
| Price to Book Ratio Calculator | EPS / P-E / Book Value / Enterprise Value Calculator (`#/calculator/equity-valuation`) |
| Book Value Per Share Calculator | EPS / P-E / Book Value / Enterprise Value Calculator (`#/calculator/equity-valuation`) |
| Market Capitalization Calculator | EPS / P-E / Book Value / Enterprise Value Calculator (`#/calculator/equity-valuation`) |
| Enterprise Value Calculator | EPS / P-E / Book Value / Enterprise Value Calculator (`#/calculator/equity-valuation`) |
| ROA Calculator | ROA / ROE / Asset and Inventory Turnover Calculator (`#/calculator/financial-performance`) |
| ROE Calculator | ROA / ROE / Asset and Inventory Turnover Calculator (`#/calculator/financial-performance`) |
| Debt-to-Equity Ratio Calculator | EPS / P-E / Book Value / Enterprise Value Calculator (`#/calculator/equity-valuation`) |
| Current Ratio Calculator | Current / Quick Ratio / Working Capital Calculator (`#/calculator/liquidity`) |
| Quick Ratio Calculator | Current / Quick Ratio / Working Capital Calculator (`#/calculator/liquidity`) |
| Working Capital Calculator | Current / Quick Ratio / Working Capital Calculator (`#/calculator/liquidity`) |
| Inventory Turnover Calculator | ROA / ROE / Asset and Inventory Turnover Calculator (`#/calculator/financial-performance`) |
| Asset Turnover Calculator | ROA / ROE / Asset and Inventory Turnover Calculator (`#/calculator/financial-performance`) |
| Rent vs Buy Calculator | Rent vs Buy Calculator (`#/calculator/rent-buy`) |
| Rental Yield Calculator | Rental Yield / Cap Rate Calculator (`#/calculator/rental-yield`) |
| Gross Rental Yield Calculator | Rental Yield / Cap Rate Calculator (`#/calculator/rental-yield`) |
| Net Rental Yield Calculator | Rental Yield / Cap Rate Calculator (`#/calculator/rental-yield`) |
| Cap Rate Calculator | Rental Yield / Cap Rate Calculator (`#/calculator/rental-yield`) |
| Product Profit Calculator | Product Profit / Pricing Calculator (`#/calculator/product-profit`) |
| Ecommerce Profit Margin Calculator | Product Profit / Pricing Calculator (`#/calculator/product-profit`) |
| Product Pricing Calculator | Product Profit / Pricing Calculator (`#/calculator/product-profit`) |
| Marketplace Fee Calculator | Marketplace / Payment Gateway Fee Calculator (`#/calculator/transaction-fee`) |
| Payment Gateway Fee Calculator | Marketplace / Payment Gateway Fee Calculator (`#/calculator/transaction-fee`) |
| Transaction Fee Calculator | Marketplace / Payment Gateway Fee Calculator (`#/calculator/transaction-fee`) |
| Customer Lifetime Value Calculator | Customer Lifetime Value Calculator (`#/calculator/customer-lifetime`) |
| Cart Abandonment Rate Calculator | Cart Abandonment Rate Calculator (`#/calculator/cart-abandonment`) |
| Inventory Days Calculator | ROA / ROE / Asset and Inventory Turnover Calculator (`#/calculator/financial-performance`) |
| Inventory Reorder Point Calculator | Inventory Reorder Point / Safety Stock Calculator (`#/calculator/inventory-planning`) |
| Safety Stock Calculator | Inventory Reorder Point / Safety Stock Calculator (`#/calculator/inventory-planning`) |
| Customer Retention Rate Calculator | Customer Retention / Churn Rate Calculator (`#/calculator/retention-churn`) |
| Customer Churn Rate Calculator | Customer Retention / Churn Rate Calculator (`#/calculator/retention-churn`) |
| Website Uptime Percentage Calculator | Website Uptime / Downtime Calculator (`#/calculator/uptime`) |
| Website Downtime Calculator | Website Uptime / Downtime Calculator (`#/calculator/uptime`) |
| Bandwidth Calculator | Website Bandwidth Usage Calculator (`#/calculator/website-bandwidth`) |
| Website Bandwidth Usage Calculator | Website Bandwidth Usage Calculator (`#/calculator/website-bandwidth`) |
| Data Usage Calculator | Streaming / Audio / Video Data Usage Calculator (`#/calculator/media-size`) |
| Streaming Data Usage Calculator | Streaming / Audio / Video Data Usage Calculator (`#/calculator/media-size`) |
| Video File Size Calculator | Streaming / Audio / Video Data Usage Calculator (`#/calculator/media-size`) |
| Audio File Size Calculator | Streaming / Audio / Video Data Usage Calculator (`#/calculator/media-size`) |
| Image Uncompressed Size Calculator | Image Uncompressed Size Calculator (`#/calculator/image-size`) |
| Screen Resolution Calculator | Screen Resolution / PPI Calculator (`#/calculator/ppi`) |
| PPI Calculator | Screen Resolution / PPI Calculator (`#/calculator/ppi`) |
| DPI Calculator | Print DPI Calculator (`#/calculator/print-dpi`) |
| Bitrate Calculator | Streaming / Audio / Video Data Usage Calculator (`#/calculator/media-size`) |
| RAID Capacity Calculator | RAID Capacity Calculator (`#/calculator/raid`) |
| CPU Execution Time Calculator | CPU Execution Time / Clock Cycles Calculator (`#/calculator/cpu-time`) |
| Clock Cycle Calculator | CPU Execution Time / Clock Cycles Calculator (`#/calculator/cpu-time`) |
| Network Subnet Calculator | IPv4 Subnet / CIDR / Address Range Calculator (`#/calculator/ipv4-subnet`) |
| IPv4 CIDR Calculator | IPv4 Subnet / CIDR / Address Range Calculator (`#/calculator/ipv4-subnet`) |
| IP Address Range Calculator | IPv4 Subnet / CIDR / Address Range Calculator (`#/calculator/ipv4-subnet`) |
| AC Power Calculator | AC Single / Three Phase Power Calculator (`#/calculator/ac-power`) |
| Single Phase Power Calculator | AC Single / Three Phase Power Calculator (`#/calculator/ac-power`) |
| Three Phase Power Calculator | AC Single / Three Phase Power Calculator (`#/calculator/ac-power`) |
| Power Factor Calculator | AC Single / Three Phase Power Calculator (`#/calculator/ac-power`) |
| Apparent Power Calculator | AC Single / Three Phase Power Calculator (`#/calculator/ac-power`) |
| Reactive Power Calculator | AC Single / Three Phase Power Calculator (`#/calculator/ac-power`) |
| RMS Voltage Calculator | RMS Voltage / Current Calculator (`#/calculator/sinusoidal-rms`) |
| RMS Current Calculator | RMS Voltage / Current Calculator (`#/calculator/sinusoidal-rms`) |
| Transformer Turns Ratio Calculator | Transformer Turns Ratio / Voltage Calculator (`#/calculator/transformer`) |
| Transformer Voltage Calculator | Transformer Turns Ratio / Voltage Calculator (`#/calculator/transformer`) |
| Wire Voltage Drop Calculator | Wire Voltage Drop (DC) Calculator (`#/calculator/wire-drop`) |
| Battery Charging Time Calculator | Battery / EV Charging Time Calculator (`#/calculator/battery-charging`) |
| Solar Panel Output Calculator | Solar Panel Output Calculator (`#/calculator/solar-output`) |
| Horsepower Calculator | Torque / RPM / Horsepower Calculator (`#/calculator/rotational-power`) |
| Torque to Horsepower Calculator | Torque / RPM / Horsepower Calculator (`#/calculator/rotational-power`) |
| Horsepower to Torque Calculator | Torque / RPM / Horsepower Calculator (`#/calculator/rotational-power`) |
| RPM Calculator | Torque / RPM / Horsepower Calculator (`#/calculator/rotational-power`) |
| Gear Ratio Calculator | Gear / Pulley Ratio and Speed Calculator (`#/calculator/gear-pulley`) |
| Gear Speed Calculator | Gear / Pulley Ratio and Speed Calculator (`#/calculator/gear-pulley`) |
| Pulley Ratio Calculator | Gear / Pulley Ratio and Speed Calculator (`#/calculator/gear-pulley`) |
| Mechanical Efficiency Calculator | Mechanical Efficiency Calculator (`#/calculator/mechanical-efficiency`) |
| Friction Calculator | Friction Calculator (`#/calculator/friction`) |
| Centripetal Force Calculator | Centripetal / Centrifugal Force Calculator (`#/calculator/centripetal`) |
| Centrifugal Force Calculator | Centripetal / Centrifugal Force Calculator (`#/calculator/centripetal`) |
| Angular Velocity Calculator | Angular Velocity / Linear Velocity Calculator (`#/calculator/angular-motion`) |
| Angular Acceleration Calculator | Angular Acceleration Calculator (`#/calculator/angular-acceleration`) |
| Linear Velocity Calculator | Angular Velocity / Linear Velocity Calculator (`#/calculator/angular-motion`) |
| Mass Flow Rate Calculator | Volumetric / Mass Flow Rate Calculator (`#/calculator/flow-rate`) |
| Volumetric Flow Rate Calculator | Volumetric / Mass Flow Rate Calculator (`#/calculator/flow-rate`) |
| Flow Rate Calculator | Volumetric / Mass Flow Rate Calculator (`#/calculator/flow-rate`) |
| Hydraulic Pressure Calculator | Hydraulic Cylinder Force / Pressure Calculator (`#/calculator/hydraulic-cylinder`) |
| Hydraulic Force Calculator | Hydraulic Cylinder Force / Pressure Calculator (`#/calculator/hydraulic-cylinder`) |
| Hydraulic Cylinder Force Calculator | Hydraulic Cylinder Force / Pressure Calculator (`#/calculator/hydraulic-cylinder`) |
| Heat Energy Calculator | Heat Energy / Specific Heat Calculator (`#/calculator/heat-energy`) |
| Specific Heat Calculator | Heat Energy / Specific Heat Calculator (`#/calculator/heat-energy`) |
| Heat Transfer Calculator | Heat Transfer (Conduction) Calculator (`#/calculator/heat-conduction`) |
| Temperature Difference Calculator | Temperature Difference Calculator (`#/calculator/temperature-difference`) |
| Thermal Expansion Calculator | Thermal Expansion Calculator (`#/calculator/thermal-expansion`) |
| Ideal Gas Law Calculator | Ideal Gas Law Calculator (`#/calculator/ideal-gas`) |
| Boyle's Law Calculator | Combined Gas / Boyle’s / Charles’s Law Calculator (`#/calculator/combined-gas`) |
| Charles's Law Calculator | Combined Gas / Boyle’s / Charles’s Law Calculator (`#/calculator/combined-gas`) |
| Combined Gas Law Calculator | Combined Gas / Boyle’s / Charles’s Law Calculator (`#/calculator/combined-gas`) |
| Pressure Volume Calculator | Ideal Gas Law Calculator (`#/calculator/ideal-gas`) |
| Molar Mass Calculator | Molar Mass Calculator (`#/calculator/molar-mass`) |
| Moles Calculator | Moles / Mass Conversion Calculator (`#/calculator/moles-mass`) |
| Mole to Mass Calculator | Moles / Mass Conversion Calculator (`#/calculator/moles-mass`) |
| Mass to Mole Calculator | Moles / Mass Conversion Calculator (`#/calculator/moles-mass`) |
| Molarity Calculator | Molarity / Molality Calculator (`#/calculator/solution-concentration`) |
| Molality Calculator | Molarity / Molality Calculator (`#/calculator/solution-concentration`) |
| Dilution Calculator | Dilution Calculator (`#/calculator/dilution`) |
| Solution Concentration Calculator | Molarity / Molality Calculator (`#/calculator/solution-concentration`) |
| pH Calculator | pH / pOH / Hydrogen Ion Calculator (`#/calculator/ph-poh`) |
| pOH Calculator | pH / pOH / Hydrogen Ion Calculator (`#/calculator/ph-poh`) |
| pH to Hydrogen Ion Calculator | pH / pOH / Hydrogen Ion Calculator (`#/calculator/ph-poh`) |
| Hydrogen Ion to pH Calculator | pH / pOH / Hydrogen Ion Calculator (`#/calculator/ph-poh`) |
| Ideal Gas Chemistry Calculator | Ideal Gas Law Calculator (`#/calculator/ideal-gas`) |
| Rebar Calculator | Rebar Calculator (`#/calculator/rebar`) |
| Decking Calculator | Decking Calculator (`#/calculator/decking`) |
| Board Foot Calculator | Board Foot / Lumber Calculator (`#/calculator/board-foot`) |
| Lumber Calculator | Board Foot / Lumber Calculator (`#/calculator/board-foot`) |
| Ramp Slope Calculator | Ramp Slope / Roof Pitch Calculator (`#/calculator/ramp-slope`) |
| Roof Pitch Calculator | Ramp Slope / Roof Pitch Calculator (`#/calculator/ramp-slope`) |
| Gutter Calculator | Gutter / Linear Material Calculator (`#/calculator/gutter`) |
| Pipe Volume Calculator | Hollow Cylinder / Pipe Volume Calculator (`#/calculator/hollow-cylinder`) |
| Pipe Weight Calculator | Pipe Weight Calculator (`#/calculator/pipe-weight`) |
| Plot Area Calculator | Plot / Land Polygon Area Calculator (`#/calculator/plot-area`) |
| Land Area Calculator | Plot / Land Polygon Area Calculator (`#/calculator/plot-area`) |
| Bigha Converter | Regional Bigha Converter (`#/calculator/bigha`) |
| Vehicle Depreciation Calculator | Vehicle Depreciation Calculator (`#/calculator/vehicle-depreciation`) |
| EV Charging Cost Calculator | EV Charging Cost Calculator (`#/calculator/ev-cost`) |
| EV Range Calculator | EV / Battery Range Calculator (`#/calculator/ev-range`) |
| Charging Time Calculator | Battery / EV Charging Time Calculator (`#/calculator/battery-charging`) |
| Battery Range Calculator | EV / Battery Range Calculator (`#/calculator/ev-range`) |
| Tire Size Calculator | Tire Size / Diameter / Speedometer Error Calculator (`#/calculator/tire-size`) |
| Tire Diameter Calculator | Tire Size / Diameter / Speedometer Error Calculator (`#/calculator/tire-size`) |
| Speedometer Error Calculator | Tire Size / Diameter / Speedometer Error Calculator (`#/calculator/tire-size`) |
| Work Hours Calculator | Timesheet / Work Hours Calculator (`#/calculator/timesheet`) |
| Timesheet Calculator | Timesheet / Work Hours Calculator (`#/calculator/timesheet`) |
| Shift Duration Calculator | Timesheet / Work Hours Calculator (`#/calculator/timesheet`) |
| Break Time Calculator | Timesheet / Work Hours Calculator (`#/calculator/timesheet`) |
| Overtime Hours Calculator | Timesheet / Work Hours Calculator (`#/calculator/timesheet`) |
| Weekly Hours Calculator | Timesheet / Work Hours Calculator (`#/calculator/timesheet`) |
| Monthly Work Hours Calculator | Timesheet / Work Hours Calculator (`#/calculator/timesheet`) |
| Final Grade Calculator | Final Grade / Required Marks Calculator (`#/calculator/final-grade`) |
| Required Marks Calculator | Final Grade / Required Marks Calculator (`#/calculator/final-grade`) |
| Required Attendance Calculator | Required Attendance Calculator (`#/calculator/required-attendance`) |

## Reliability exclusions

No entire requested calculator was left unpublished in this batch. The following unsupported variants are deliberately rejected or explicitly excluded rather than presented as accurate:

- Nonconventional IRR cash flows with repeated sign changes: may have multiple roots. Only one initial negative cash flow followed by nonnegative inflows is accepted, with equally spaced periods. Irregular-date XIRR is not claimed.
- Bigha outside the sourced Assam convention: regional definitions differ. Other states/regions are not offered.
- Molar-mass formulas with unsupported elements, isotope labels, charges or hydrate-dot notation: the selected-element parser rejects them; supported symbols and source are visible.
- Small-sample unknown-SD mean confidence intervals: the current interval is normal-reference with known SD or a clearly stated large-sample approximation, not Student-t.
- Ambiguous SSA law-of-sines triangles: the page instead accepts two angles and the side opposite the first angle, giving a unique ASA/AAS solution.
- Singular/ill-conditioned matrix inverses, impossible triangles, invalid subnet syntax, invalid Roman notation, self-crossing land boundaries and impossible grade/attendance inputs receive useful errors or explicit feasibility results.
- No institutional letter-grade-to-GPA mapping is invented. GPA/CGPA reuse Weighted Average with grade points and credits supplied according to the institution; final/required grade tools use entered percentage weights.
- No marketplace fee schedule, current tax rule, SLA contract, code-based electrical sizing, professional construction design or vehicle-fitment approval is assumed. All relevant rates/factors are user supplied.

## Verification

| Batch | Formula/regression checks | Browser integration checks |
|---|---:|---:|
| Statistics + number theory | 4,116/4,116 | 1,259/1,259 |
| Advanced algebra + trigonometry + geometry | 4,405/4,405 | 1,374/1,374 |
| Advanced finance + property | 4,793/4,793 | 1,453/1,453 |
| Ecommerce + marketing + digital + computing | 5,153/5,153 | 1,547/1,547 |
| Electrical + engineering + thermodynamics + chemistry | 5,749/5,749 | 1,706/1,706 |
| Construction + land + automotive + productivity + education | 6,118/6,118 | 1,800/1,800 |
| Existing inverse modes, aliases, schedule and stronger boundaries | **7,495/7,495** | **2,163/2,163** |

Every batch reran prior regressions, tested known new examples/field boundaries, every rendered route, category counts, global search, theme toggle and 390px mobile overflow; runtime error listeners were clear. Final checks preserve all 214 prior IDs, routes, names and categories; verify 328 unique IDs/titles and summed category counts; test all 363 requested names in global search; exercise every calculator default result, empty-input error and reset; test independent alternative-mode examples, singular matrices, leap/overnight boundaries, /31 and /32 subnet edges, nested chemistry formula parsing and amortization payoff.

The full directory exposes all 328 routes across 14 pages (24 per page). The homepage retains its four popular tools and six-card directory preview. All new pages reuse specific descriptions, labeled units, formulas, how-to text, examples, FAQ and notes. Browser page titles and descriptions are unique. Source scan found no unfinished cards or labels; the remaining HTML search hint attribute is intentional.

## Architecture and changed files

Created category/shared engines:

- `js/calculators/advanced-shared.js`
- `js/calculators/statistics.js`
- `js/calculators/number-theory.js`
- `js/calculators/algebra-advanced.js`
- `js/calculators/trigonometry.js`
- `js/calculators/geometry-advanced.js`
- `js/calculators/finance-advanced.js`
- `js/calculators/property.js`
- `js/calculators/ecommerce.js`
- `js/calculators/marketing.js`
- `js/calculators/digital.js`
- `js/calculators/programming.js`
- `js/calculators/electrical-advanced.js`
- `js/calculators/engineering.js`
- `js/calculators/thermodynamics.js`
- `js/calculators/chemistry.js`
- `js/calculators/construction-advanced.js`
- `js/calculators/land.js`
- `js/calculators/automotive.js`
- `js/calculators/productivity.js`
- `js/calculators/education.js`
- `js/calculators/amortization.js`

Created integration/support files: `js/data/advanced.js`, `js/data/advanced-aliases.js`, `js/data/atomic-weights.js`, `js/utils/request-matching.js`, `tests/advanced.test.js`, `docs/ADVANCED-BASELINE.json`, `docs/ADVANCED-REQUESTS.json`, `docs/ADVANCED-COVERAGE.json`, `docs/ADVANCED-AUDIT.md`, and final screenshot `docs/advanced-preview.png`.

Modified: `js/catalog.js`, `js/data/expansion.js`, `js/calculators/shared.js`, `js/calculators/compute.js`, `js/calculators/finance.js`, `js/calculators/physics.js`, `js/calculators/electrical.js`, `js/calculators/everyday.js`, `js/calculators/extended.js`, `js/extended-catalog.js`, `js/app.js`, `js/utils/search.js`, `css/style.css`, `tests/logic.test.js`, `tests/expansion.test.js`, `tests/ui.test.js`, `tests/VERIFICATION.md`, `README.md`. The original math/algebra/geometry/health formulas are retained.

## Assumptions and limits

- INR still uses the shared en-IN formatter. Financial projections use constant entered rates and timing; no recommendations or current statutory claims. Rent vs Buy compares ending property equity against a renter’s modeled investment account under equal income/other spending, includes entered transaction/operating costs and loan balance, and excludes taxes, investment fees and sale delays. Negative renter balances represent a modeled funding deficit.
- OLS includes an intercept; Pearson/R² require variation in both datasets. Quantiles use R type 7. CV requires a positive ratio-scale mean. Frequency tables count exact values (up to 100 distinct values), not histogram bins. Datasets are bounded at 5,000 values; fractional, negative and extreme values are validated per domain.
- Exact integer base/modular/Fibonacci arithmetic uses BigInt with documented input bounds. Floating-point physical/statistical calculations have ordinary JavaScript precision limits. Matrices are at most 6×6; Fibonacci sequence display is bounded to index 500.
- Marketing aliases use consistent numerator/denominator cohorts, not platform-specific attribution rules. CLV is a simple undiscounted fixed-lifetime contribution model; inventory safety stock assumes independent daily demand and fixed supplier lead time.
- AC power assumes sinusoidal supply and balanced three phase; sinusoidal RMS has no DC offset. Voltage-drop modeling is two-wire resistive DC. Charging uses average input power and entered efficiency, not nameplate-power guarantees. Solar output uses entered equivalent full-sun hours and aggregate losses.
- Engineering/thermal/gas tools use ideal models and SI units; hydraulic force uses differential gauge pressure. Chemistry concentration uses appropriate solvent-vs-solution denominators; dilution assumes solute conservation and approximately additive volume.
- Construction outputs are estimates with entered dimensions, density and waste. Rebar does not design reinforcement; decking does not specify load/joist design; gutters estimate sections but do not size drainage; layer material aliases estimate volume/mass, not mortar or plaster mix design.
- Planar land coordinates are projected meters, not geographic latitude/longitude. Gaj explicitly uses the square-yard area interpretation (9 ft²); Bigha is separately region sourced. No legal survey is established.
- EV range/depreciation and tire diameter are illustrative geometric/constant-parameter estimates. Timesheets treat overnight ends as next day, equal start/end as zero hours, and overtime according to the entered threshold; no employment-law rule is assumed.
- Loan amortization display is limited to 600 months; longer loans retain totals. The final payment settles floating-point residue. No extra payments/fees are assumed in that schedule.
- Hash routes and dynamic metadata remain; static per-tool prerendering and deployment were not requested. Chrome was tested; broader cross-browser and jurisdiction-specific validation are not claimed.

## Sources and conventions

- [NIST confidence intervals](https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm): normal-reference mean interval with known population standard deviation. The calculator explicitly distinguishes this from a small-sample Student-t interval.
- [R quantile documentation](https://www.stat.ethz.ch/R-manual/R-devel/library/stats/html/quantile.html): type-7 linear interpolation for percentiles and quartiles.
- [OpenStax finance: perpetuities](https://openstax.org/books/principles-finance/pages/8-1-perpetuities) and [IRR](https://openstax.org/books/principles-finance/pages/16-3-internal-rate-of-return-irr-method): cash-flow definitions and numerical root limitations.
- [NIST capital investment analysis](https://www.nist.gov/el/applied-economics-office/manufacturing/capital-investment-analysis): present-value and net-present-value conventions.
- [RFC 3021](https://www.rfc-editor.org/info/rfc3021/): both /31 addresses usable on point-to-point IPv4 links.
- [CIAAW abridged atomic weights 2024](https://www.ciaaw.org/abridged-atomic-weights.htm): central values for the 38 supported common elements, configured in `js/data/atomic-weights.js`. Accessed 3 October 2026. Isotopic variation/uncertainty is not modeled.
- [OpenStax pH/pOH](https://openstax.org/books/chemistry-2e/pages/14-2-ph-and-poh): dilute aqueous concentration approximation; default pKw 14 around 25°C.
- [OpenStax ideal gas law](https://openstax.org/books/college-physics/pages/13-3-the-ideal-gas-law), [transformers](https://openstax.org/books/college-physics-2e/pages/23-7-transformers), and [rotational mechanics](https://openstax.org/books/university-physics-volume-1/pages/10-summary): educational physical definitions.
- [Assam government AIRBMP framework](https://igr.assam.gov.in/sites/default/files/swf_utility_folder/departments/asdma_revenue_uneecopscloud_com_oid_70/menu/document/airbmp_rpf_0.pdf), November 2022, section 7.2, printed page 28: Assam convention 1 Bigha = 14,400 ft². The selected region and assumption are visible on the page. This is not a universal Indian conversion.

