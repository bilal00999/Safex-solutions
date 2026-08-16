# Accessibility & Performance Audit Report

## 1. Executive Summary

This report documents a structured audit of a local website implementation and its remediated redesign.

Audit goals:

- verify accessibility conformance and keyboard/screen-reader support
- evaluate performance and core loading behavior
- track before/after Lighthouse outcomes with evidence

Primary outcome:

- accessibility, best-practices, and SEO improved in the redesigned version
- performance regressed due to heavier visual assets and external resource loading in the redesigned experience
- automated axe scan on the latest version reports 0 violations

## 2. Scope and Method

In-scope pages:

- baseline page: `http://localhost:8000/`
- redesigned page: `http://localhost:8001/`

Tools and evidence used:

- Lighthouse CLI exports
- axe-core CLI output
- before/after Lighthouse screenshots

## 3. Before vs After Scores

Score source: `before-lighthouse-export.report.json` and `after-lighthouse-export.report.json`

| Category       | Before | After | Delta |
| -------------- | -----: | ----: | ----: |
| Performance    |     95 |    74 |   -21 |
| Accessibility  |     91 |    95 |    +4 |
| Best Practices |     89 |    96 |    +7 |
| SEO            |     91 |   100 |    +9 |

Interpretation:

- the redesign successfully improved quality and standards metrics
- performance requires follow-up optimization before production

## 4. Structured Issues Table (Severity / Impact / Fix)

| #   | Severity | Area            | Issue                                                                                             | Impact                                                | Fix Status                                                              |
| --- | -------- | --------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------- |
| 1   | High     | Performance     | Large visual payload from decorative/background images and external assets in redesigned pages    | Slower paint/LCP and lower performance score          | Pending optimization (compress/replace images, reduce external fetches) |
| 2   | Medium   | Best Practices  | Console network noise (missing optional asset such as favicon)                                    | Avoidable console errors and quality signal reduction | Add `favicon.ico` or explicit icon link                                 |
| 3   | Medium   | Accessibility   | Interactive components (menu, FAQ, slider) require continuous verification after redesign updates | Regressions can occur during iterative UI changes     | Keep axe + keyboard checks in release checklist                         |
| 4   | Low      | Maintainability | Audit docs were duplicated and inconsistent across iterations                                     | Presentation confusion and unclear latest evidence    | Consolidated into this structured report                                |

## 5. Accessibility Verification

axe result (latest run):

- file: `axe-results-1786881101674.json`
- violations: `0`
- URL tested: `http://localhost:8001/`

## 6. Evidence Artifacts

- Lighthouse before export HTML: `before-lighthouse-export.report.html`
- Lighthouse after export HTML: `after-lighthouse-export.report.html`
- Lighthouse before screenshot: `screenshots/lighthouse-before.png`
- Lighthouse after screenshot: `screenshots/lighthouse-after.png`

## 7. Recommended Next Fixes (Performance)

1. Replace heavy remote images with optimized local WebP/AVIF assets.
2. Use responsive image sizes (`srcset`) and lazy-loading for non-critical visuals.
3. Self-host or subset fonts, and reduce render-blocking requests.
4. Re-run Lighthouse until Performance returns to target threshold (>=90).

## 8. Conclusion

The redesigned site is stronger in accessibility, best-practices, and SEO, with verified automated accessibility compliance. The main remaining risk is performance regression caused by visual/asset weight. With targeted optimization, the site can retain the improved UX quality while restoring Lighthouse performance.
