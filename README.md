# CalcHub

A responsive calculator and online tools website using HTML, CSS and vanilla JavaScript. **328 calculators and 69 browser-local tool pages** (397 utilities), preserving calculator design and routes. Inputs and files stay in the browser.

## Run locally

Serve this directory over HTTP with VS Code Live Server, or `python -m http.server 5500` if Python is installed. Open `http://localhost:5500`. ES modules require HTTP; opening index.html directly as a file is not supported. No build step, package installation, backend or API key is required. Third-party browser libraries and fonts are vendored locally; heavy libraries load only when needed. Serve .mjs files as JavaScript.

## Browse and test

- `#/`: compact homepage with popular tools and a six-card directory preview.
- `#/directory`: all tools with category filters, alias search and 24-card pagination.
- `#/calculator/<id>`: shared calculator form, validation, reset, results, formula, guide, example and FAQ.
- `/tests/`: formula and regression suite.
- `/tests/ui.html`: automated browser integration sweep; uses a 390px iframe and temporarily toggles/restores the theme.

## Architecture

`js/catalog.js` combines original metadata and modular expansion definitions from `js/data/expansion.js`. Domain modules in `js/calculators/` supply pure calculations. `compute.js` dispatches to these and the retained original logic. Shared helpers are in `shared.js`, `validation.js` and `js/utils/`. INR configuration remains centralized in `js/config.js`. `app.js` renders the existing UI, hash routes, search and persistent themes; `css/style.css` retains the design system.

Statutory tax/pension tools are not published without reviewed financial-year rules; `js/data/tax-policy.js` guards that configuration. Salary deductions and GST rates are user-supplied. Financial, health and construction outputs are estimates with explicit assumptions.

[Full expansion audit](docs/EXPANSION-AUDIT.md) includes category counts, all 168 additions, requested-name mappings, skipped tools, source notes, files changed and limitations. [Verification record](tests/VERIFICATION.md) records observed checks. [Original inventory](docs/BASELINE.json) preserves the previous 46 tools.

## Latest advanced expansion

Added 114 distinct tools to the previous 214. Related operations and requested synonyms share pages; all 363 requested names are covered. Dataset inputs support comma-, space- and newline-separated pastes. Existing tools gained inverse modes and a loan amortization schedule.

[Advanced expansion audit](docs/ADVANCED-AUDIT.md) includes all additions, category counts, 120 requested names reused from the previous catalog, source references, reliability exclusions, changed files and test results. [Coverage JSON](docs/ADVANCED-COVERAGE.json) maps every requested name to its working route. The earlier expansion audit is retained as historical documentation.

## Online tools expansion

Open #/tools (or /tools/) for 69 pages across 13 categories. Global search covers all 397 utilities with Calculator/Tool badges. Favorites and recents save validated IDs only. Existing calculator routes remain intact.

[Complete tool audit](docs/TOOLS-AUDIT.md) covers counts, mappings, reused calculators, reliability exclusions, libraries/licenses, privacy/browser limits and verification. [Inventory](docs/TOOLS-INVENTORY.json), [coverage](docs/TOOLS-COVERAGE.json) and [vendor integrity manifest](assets/vendor/manifest.json) are machine-readable. Run /tests/tools.html and /tests/tools-ui.html alongside the existing calculator suites.
