# Demo / Presentation Report

## 1. Presentation Summary

This document is designed for a stakeholder demo and submission package. It summarizes the website accessibility and performance audit, key findings, and before/after Lighthouse score evidence.

## 2. Project and Scope

- Project: Acme Digital Studio website audit (local environment)
- Baseline URL: `http://localhost:8000/`
- Redesigned URL: `http://localhost:8001/`
- Validation tools: Lighthouse CLI and axe-core CLI

## 3. Before/After Lighthouse Scores

| Category | Before | After | Delta |
| --- | ---: | ---: | ---: |
| Performance | 95 | 74 | -21 |
| Accessibility | 91 | 95 | +4 |
| Best Practices | 89 | 96 | +7 |
| SEO | 91 | 100 | +9 |

## 4. Key Findings

- Accessibility improved and automated checks pass on the redesigned version.
- Best-practices and SEO improved significantly.
- Performance regressed and is the main open remediation area.
- Follow-up optimization should focus on image payload and render-critical assets.

## 5. Issues and Fix Tracking

| Severity | Issue | Business/User Impact | Action Taken or Recommended |
| --- | --- | --- | --- |
| High | Performance drop after redesign | Slower user-perceived load and weaker quality perception | Optimize image payloads, use local compressed assets, reduce render-blocking requests |
| Medium | Console network warning for missing optional asset | Noise in QA validation and best-practice signal | Add favicon and validate asset references |
| Medium | Interactive components need regression checks each iteration | Potential accessibility drift in future updates | Keep Lighthouse + axe + keyboard navigation checks in release checklist |

## 6. Screenshot Evidence (Lighthouse)

### Before

![Lighthouse Before](./screenshots/lighthouse-before.png)

### After

![Lighthouse After](./screenshots/lighthouse-after.png)

## 7. Accessibility Evidence

Latest axe run result:

- File: `axe-results-1786881101674.json`
- Violations: `0`
- Scope: WCAG 2A and 2AA tags

## 8. Recommended Next Sprint

1. Replace heavy external imagery with optimized local WebP/AVIF assets.
2. Add responsive image sizes and lazy-loading where appropriate.
3. Re-run Lighthouse after optimization and update this report.
4. Keep the screenshot evidence section refreshed for stakeholder review.

## 9. Export Instructions (PDF / DOC)

- PDF: open this file in Markdown preview and print to PDF.
- DOC: copy into Word or convert Markdown to `.docx` using Pandoc.
