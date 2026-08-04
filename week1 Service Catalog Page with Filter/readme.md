# SafeX Service Catalog

A single-page, self-contained HTML catalog for browsing SafeX's workplace safety services, with category filtering and live text search.

## Files

| File                    | Description                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------ |
| `safex-catalog.html` | The current version — dark "job-site permit tag" styling. Open directly in any browser, no build step. |

## Features

- **6–8 mock services** (`SX-01` … `SX-08`), each with a code, title, category, description, and duration.
- **Category chips** — click to filter (`All`, Audits & Inspections, Training & Certification, Equipment & Supply, Compliance & Consulting).
- **Live search** — filters by title, description, and category as you type.
- Search and category filters combine (AND logic).
- **Empty state** shown when no service matches the current filter/search.
- **Responsive grid**:
  - Desktop: 3 columns
  - Tablet (≤1020px): 2 columns
  - Mobile (≤640px): 1 column
- Respects `prefers-reduced-motion` (disables hover transitions).

## How to use

1. Open `safex-catalog-v2.html` in any modern browser — no server or build tools required.
2. Type in the search box to filter by keyword.
3. Click a category chip to narrow by category; click it again or click `All` to reset.
4. Result count (top right of the search bar) shows how many services match out of the total.

## Customizing

### Add or edit a service

Edit the `services` array in the `<script>` block at the bottom of the HTML file:

```js
{
  code: "SX-09",
  title: "New Service Name",
  category: "Audits & Inspections", // must match an existing category, or add a new one below
  desc: "Short description of what this service covers.",
  duration: "1 day"
}
```

### Add a new category

1. Add the category name to any service's `category` field.
2. Add a matching color in the `catColor` map (JS) — e.g. `"New Category": "var(--cat-new)"`.
3. Define `--cat-new` in the CSS `:root` block.

The category chip row and card tags are generated automatically from whatever categories exist in the `services` array — no other markup changes needed.

### Change the visual style

All design tokens (colors, fonts) are CSS custom properties in `:root` at the top of the `<style>` block — edit these to reskin the page without touching layout code.

## Tech

Plain HTML5 + CSS3 + vanilla JavaScript. No dependencies, frameworks, or build step. Fonts loaded from Google Fonts (Bebas Neue, Work Sans, JetBrains Mono).
