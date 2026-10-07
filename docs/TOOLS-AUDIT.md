# CalcHub — Calculators & Online Tools

Expansion audit, 3 October 2026.

## 1–5. Counts and preservation

- Existing calculators preserved: **328**, across the original 30 categories. IDs, names, categories, routes and calculation modules were retained.
- New tool pages: **69**, across 13 categories. Related operations share a page with an explicit operation selector.
- Total calculators: **328**.
- Total tools: **69**.
- Total utilities: **397**.

The [baseline](TOOLS-BASELINE.json) recorded no existing online tools. The [final inventory](TOOLS-INVENTORY.json) records each route. [Feature coverage](TOOLS-COVERAGE.json) maps 284 request entries (274 unique names): 283 entries resolve to supported operations and one conditional feature is omitted. Page counts do not count aliases or modes separately.

## 6. Tool counts by category

| Category | Tools |
| --- | ---: |
| Text | 8 |
| PDF | 7 |
| Image | 7 |
| QR & Barcode | 2 |
| Security | 5 |
| Developer | 11 |
| SEO | 5 |
| Design | 5 |
| Generators | 4 |
| Date & Time | 2 |
| Files | 3 |
| Data | 3 |
| Web | 7 |
| **Total** | **69** |

## 7. Existing functionality reused

Fourteen requested functions reuse six existing calculator pages.

| Requested function | Existing route |
| --- | --- |
| Random Number Generator | #/calculator/random-number |
| Add/Subtract Time | #/calculator/time-arithmetic |
| Add/Subtract Dates | #/calculator/add-days |
| Binary to Decimal | #/calculator/number-base |
| Decimal to Binary | #/calculator/number-base |
| Binary to Hex | #/calculator/number-base |
| Hex to Binary | #/calculator/number-base |
| Decimal to Hex | #/calculator/number-base |
| Hex to Decimal | #/calculator/number-base |
| Octal to Decimal | #/calculator/number-base |
| Decimal to Octal | #/calculator/number-base |
| Number Base Converter | #/calculator/number-base |
| Roman Numeral Converter | #/calculator/roman-numerals |
| Scientific Notation Converter | #/calculator/notation |

Repeated new requests also reuse pages: UUID/password generation, color conversion/palettes, slug generation, text/SEO counters, CSV/file operations, timestamps and social/QR links. All supported requested names are searchable aliases with Calculator/Tool result badges.

## 8. Reliability exclusions

PDF password protection is omitted because the chosen PDF editing library does not support encrypted documents reliably. Ignoring encryption is not decryption. No pretend protection or PDF compression control exists. See [pdf-lib encryption handling](https://github.com/Hopding/pdf-lib#encryption-handling).

PDF-to-images uses PDF.js with a local worker, 168 character maps and 14 standard fonts; associated notices are retained.

## 9–10. Tests performed and results

See [verification record](TOOLS-VERIFICATION.json).

| Suite | Reproduce | Passed |
| --- | --- | ---: |
| Calculator formulas and regression boundaries | /tests/ | 7,495 / 7,495 |
| Every calculator route, 390px forms, validation, reset, search and themes | /tests/ui.html | 2,163 / 2,163 |
| Tool algorithms, actual file outputs, malformed inputs and feature coverage | /tests/tools.html | 120 / 120 |
| Every tool route, 390px layout, filters, search, favorites, recents, validation, file drops, clear/reset, timers and local/lazy assets | /tests/tools-ui.html | 634 / 634 |
| **Total** | | **10,412 / 10,412** |

Checks include Unicode combining marks, literal replacement, JSON/XML parsing, encoding round trips, SHA-256 known vectors, passphrase vocabulary size, quoted/multiline CSV, empty rows, quoted column names, statistics, color/contrast vectors, number words, formatters/minifiers, sanitized Markdown, regex timeout/output bounds, genuine image processing, all PDF page operations, overlays and rendering. Downloaded PDFs reopen; rendered PDF images contain visible text. All QR content modes and five barcode formats generate artifacts; an invalid EAN checksum is rejected.

Manual browser checks: Copy reported “Copied”. QR PNG and SVG downloads were saved and inspected on disk: PNG 512 × 512; valid SVG markup. The extension did not report Blob download events although files were saved. Native OS file-picker automation was blocked by the extension’s file-URL permission; generated-file tests and synthetic browser file-drop flows passed. This automation restriction is not a requirement for ordinary users to enable an extension. No unhandled application errors occurred in final integration harnesses. Only Chrome on Windows was independently exercised.

## 11. Files created / modified

Modified: index.html, js/app.js, js/utils/search.js, css/style.css, README.md and tests/ui.test.js. The calculator UI harness now restores recent IDs after route sweeps.

Created:

- tools/index.html: /tools/ entry into the preserved hash router.
- js/tools/catalog.js, aliases.js and view.js: metadata, requested-name aliases and the shared validated interface.
- js/tools/catalog/ and js/tools/modules/: text, generators, developer, security, image, PDF, data, design, SEO, QR, web, time and numbers, plus a timer lifecycle module.
- js/tools/shared/: definitions, bounded helpers, local library loader, downloads, date validation and timed regex worker.
- assets/vendor/: pinned libraries, PDF.js font/CMap resources, notices and [SHA-256 manifest](../assets/vendor/manifest.json).
- assets/fonts/: local DM Sans/Manrope Latin fonts, stylesheet, provenance and OFL notices.
- tests/tools.html, tools.test.js, tools-ui.html, tools-ui.test.js and fixtures/: algorithm and browser integration checks with PNG/PDF/CSV fixtures.
- docs/TOOLS-BASELINE.json, TOOLS-INVENTORY.json, TOOLS-COVERAGE.json, TOOLS-VERIFICATION.json, TOOLS-AUDIT.md and screenshots.

The final inventory lists every tool; the vendor manifest lists individual resource files, provenance, sizes and hashes.

## 12. External libraries and why

All are pinned and locally vendored, loaded only when needed. No runtime CDN or paid API is required.

| Library | Version | Purpose |
| --- | --- | --- |
| pdf-lib | 1.17.1 | PDF creation, copying pages, metadata, rotation and overlays |
| PDF.js | 4.10.38 | PDF raster rendering, local worker, fonts and character maps |
| Prettier | 3.6.2 | HTML/CSS/JavaScript formatting with local plugins |
| Terser | 5.43.1 | JavaScript minification without executing input |
| CSS-tree | 3.1.0 | Parser-based CSS minification |
| html-minifier | 4.0.0 | HTML minification that preserves text whitespace |
| sql-formatter | 15.6.8 | SQL formatting only, never query execution |
| marked | 15.0.12 | Markdown parsing |
| DOMPurify | 3.2.7 | HTML sanitization before an isolated preview |
| Turndown | 7.2.0 | HTML to Markdown conversion |
| Papa Parse | 5.5.3 | Quoted CSV/TSV parsing and serialization |
| qrcode-generator | 1.4.4 | Local QR encoding and UTF-8 payload support |
| JsBarcode | 3.12.1 | CODE128/EAN/UPC/CODE39 encoding and validation |

Prettier has separate local Babel/Estree/HTML/PostCSS plugins as required by its [browser documentation](https://prettier.io/docs/browser/). PDF.js has its local worker/fonts/CMaps. Notices remain in assets/vendor/licenses/ and PDF asset directories. Existing fonts are self-hosted; other scripts fall back to system fonts. The full library/resource set is approximately 7.5 MB on disk; the homepage loads no heavy vendor libraries.

## 13. Privacy limitations

All inputs, files, images, documents, passwords and results are processed in browser memory. No processing service, analytics, API key or upload endpoint was introduced. HTML previews are isolated by a sandbox and restrictive content policy; Markdown/HTML conversion is sanitized. User JavaScript is formatted/minified, never executed.

Local storage contains the existing theme setting plus validated favorite/recent utility IDs. Recents are limited to ten; no entered values or tool content are saved. Clear discards app results and releases preview URLs, but cannot erase downloaded files, clipboard contents, browser/OS history or information accessible to trusted extensions. Generated passwords are not saved by the app.

The homepage resource-origin test confirms local assets after removing runtime Google Fonts requests. PDF workers, character maps and fonts are also local.

## 14. Browser / functional limitations

- Serve with HTTP and ES-module MIME types, including JavaScript for .mjs files. File-URL launch is unsupported. HTTPS or localhost is required for Web Crypto and dependable clipboard access; keyboard-copy fallback exists.
- Pasted input: 1,000,000 characters. Code/regex input: 100,000. Regex pattern: 10,000. Regex has a one-second worker timeout, 1,000-match limit, capture budgeting and replacement-output bounds. Large jobs remain subject to browser memory.
- Word/sentence counts are heuristics, especially for scripts without spaces and abbreviations. Title case is mechanical, not an editorial style guide.
- Images: PNG/JPEG/WebP, up to 20 sequential files, 50 MB each and 24 megapixels. Upscaling is explicit. Re-encoding edits discard animation/EXIF; Base64 conversion preserves original bytes and metadata. JPEG uses a white transparency background; PNG ignores lossy quality. Output may be larger. Metadata means decoded dimensions/browser file facts, not EXIF/GPS parsing.
- PDFs: unencrypted only, 50 MB each, 500 input pages and 1,000 merged output pages. Individual splits: 100 downloads maximum. Rendering: 20 pages / 12 megapixels per page. Text overlays support printable ASCII. Copied pages can affect signatures, outlines, forms or cross-document links. Missing/nonembedded fonts can be substituted; review outputs.
- Tables: UTF-8 files/paste, flat JSON objects, 10,000 rows / 200 columns. Numeric statistics require finite numbers. CSV formulas are not silently changed; import untrusted data as text in a spreadsheet.
- Strength estimates are heuristics, not breach/cracking checks. The 256-word public vocabulary supplies eight selection bits per word; default 16-word passphrases provide 128 selection bits. UUIDs are random v4. JWT decoding does not verify signatures, issuer, audience or expiry.
- XML retains mixed text and xml:space=preserve; review whitespace-sensitive uses. HTML minification preserves text whitespace. SQL formatting never runs queries.
- Cron input is capped at 1,000 characters: five numeric fields, stars/lists/ranges/steps only. No macros, named fields, seconds or L/W/#. Timezone and day-field semantics depend on the scheduler.
- WCAG checks cover opaque sRGB contrast only: AA 4.5:1 normal / 3:1 large text; AAA 7:1 normal / 4.5:1 large. This is not a complete accessibility audit. [W3C guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).
- SEO/SERP output is approximate; schema uses supplied facts without promising rich-result eligibility. Robots directives do not secure content. Extracted links/emails are unverified candidates. QR codes include a quiet zone/contrast guard; verify scanability before sharing.
- Timers need an open tab, can be throttled or delayed by sleep, and use visual completion notices. They are not dependable wake-up alarms. Current/world time is a snapshot; timezone rules come from the browser’s IANA data.

## Tool pages

| Category | Tool | Route |
| --- | --- | --- |
| Text | Word / Character / Reading Counter | #/tool/text-counter |
| Text | Case Converter | #/tool/case-converter |
| Text | Line Editor / Text Cleaner | #/tool/line-editor |
| Text | Text Repeater | #/tool/text-repeater |
| Text | Find and Replace | #/tool/find-replace |
| Text | Word / Character Frequency | #/tool/text-frequency |
| Text | Text Difference | #/tool/text-diff |
| Text | Lorem Ipsum / Random Text | #/tool/lorem-ipsum |
| Generators | Random Picker & Team Generator | #/tool/random-picker |
| Generators | Coin, Dice & Yes/No | #/tool/coin-dice |
| Generators | Random Date Generator | #/tool/random-date |
| Generators | Username & Fictional Test Data Generator | #/tool/username-generator |
| Developer | SQL Formatter | #/tool/sql-formatter |
| Developer | JSON Formatter, Validator & Viewer | #/tool/json-tools |
| Developer | XML Formatter & Validator | #/tool/xml-tools |
| Developer | HTML, CSS & JavaScript Formatter | #/tool/code-formatter |
| Developer | Markdown Preview & HTML Converter | #/tool/markdown-tools |
| Developer | Text Encoding & Escape Converter | #/tool/encoding-tools |
| Developer | JWT Payload Decoder | #/tool/jwt-decoder |
| Developer | Timestamp & ISO Date Converter | #/tool/timestamp-tools |
| Developer | Regex Tester & Replacer | #/tool/regex-tester |
| Developer | Cron Expression Reader | #/tool/cron-reader |
| Security | Secure Password, PIN & Token Generator | #/tool/secure-generator |
| Security | Passphrase Generator | #/tool/passphrase-generator |
| Security | Password Strength Estimator | #/tool/password-strength |
| Security | SHA & HMAC Generator | #/tool/hash-tools |
| Security | File Hash Checker | #/tool/file-hash |
| Image | Image Compressor & Format Converter | #/tool/image-compressor |
| Image | Image Resizer & Aspect Ratio Tool | #/tool/image-resizer |
| Image | Image Crop, Rotate & Flip | #/tool/image-editor |
| Image | Image Filters & Watermark | #/tool/image-filters |
| Image | Image Metadata & Size Viewer | #/tool/image-info |
| Image | Image to Base64 | #/tool/image-base64 |
| Image | Base64 to Image | #/tool/base64-image |
| PDF | PDF to Images | #/tool/pdf-to-images |
| PDF | PDF Merger | #/tool/pdf-merge |
| PDF | PDF Page Organizer | #/tool/pdf-organizer |
| PDF | PDF Metadata & Page Counter | #/tool/pdf-info |
| PDF | PDF Page Numbers & Text Watermark | #/tool/pdf-overlay |
| PDF | PDF Image Watermark | #/tool/pdf-image-watermark |
| PDF | Images to PDF | #/tool/images-to-pdf |
| Data | CSV / JSON / TSV Converter & Viewer | #/tool/csv-tools |
| Data | CSV Cleaner, Sorter & Column Editor | #/tool/csv-editor |
| Data | CSV Counts & Numeric Statistics | #/tool/csv-statistics |
| Files | Local File Size, MIME & Text Viewer | #/tool/file-viewer |
| Files | Base64 to File | #/tool/base64-file |
| Files | Filename Cleaner | #/tool/filename-cleaner |
| Design | Color Picker & HEX / RGB / HSL Converter | #/tool/color-tools |
| Design | Color Palette, Shades & Tints Generator | #/tool/color-palette |
| Design | CSS Gradient Generator | #/tool/gradient-generator |
| Design | WCAG Contrast Checker | #/tool/contrast-checker |
| Design | CSS Shadow, Radius & Button Generator | #/tool/css-design |
| SEO | Meta Tags & SERP Preview | #/tool/meta-tags |
| SEO | Robots.txt Generator | #/tool/robots-generator |
| SEO | XML Sitemap Generator | #/tool/sitemap-generator |
| SEO | Hreflang Tag Generator | #/tool/hreflang-generator |
| SEO | Schema.org JSON-LD Generator | #/tool/schema-generator |
| QR & Barcode | QR Code Generator | #/tool/qr-generator |
| QR & Barcode | Barcode Generator | #/tool/barcode-generator |
| Web | URL Parser, Query Builder & UTM Generator | #/tool/url-tools |
| Web | Slug Generator | #/tool/slug-generator |
| Web | Domain, URL & Email Extractor | #/tool/extract-links |
| Web | HTTP Status & MIME Reference | #/tool/web-reference |
| Web | Contact & Sharing Link Generator | #/tool/social-links |
| Web | YouTube Timestamp & Embed Generator | #/tool/youtube-links |
| Web | Hashtag Formatter | #/tool/hashtag-generator |
| Date & Time | Stopwatch, Countdown, Pomodoro & Alarm | #/tool/browser-timer |
| Date & Time | Date, Time & Timezone Formatter | #/tool/date-time-format |
| Developer | Number to Words — International & Indian | #/tool/number-to-words |

Final verification evidence is recorded in [TOOLS-VERIFICATION.json](TOOLS-VERIFICATION.json). Mobile widths were checked in the integration iframe; the browser viewport override did not change the live viewport, so the saved screenshot documents the desktop layout only. The functional regex default test initially reached its worker time budget under simultaneous harness load; the isolated final run passed all 120 checks.
