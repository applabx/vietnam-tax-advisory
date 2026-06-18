# Vietnam Tax Advisory

Production-ready marketing site for **Vietnam Tax Advisory** — a Vietnam-based accounting, tax, payroll, transfer pricing, and CFO advisory firm for foreign-owned companies.

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**. Static-exported to **Cloudflare Pages**.

---

## Stack

| Layer        | Choice                                        |
|--------------|-----------------------------------------------|
| Framework    | Next.js 15 (App Router, `output: 'export'`)   |
| Language     | TypeScript (strict)                           |
| Styling      | Tailwind CSS 3 + custom design tokens         |
| Fonts        | Cormorant Garamond + DM Sans (self-hosted)    |
| Schema       | JSON-LD: Organization, AccountingService, Service, FAQPage, BreadcrumbList, Article, Person |
| AI search    | `llms.txt` (https://llmstxt.org)              |
| Forms        | Cloudflare Worker (see `workers/contact-form`)|
| Deployment   | Cloudflare Pages (static) + Worker (forms)    |
| Lead magnets | 3 generated PDFs via `pdfkit`                |

---

## Pages

```
/                                  Home
/services/                         Core services index
/services/[slug]                   10 service pages
/setup/                            Business setup index
/setup/[slug]                      6 business setup pages
/industries/                       Industry index
/industries/[slug]                 5 industry pages
/countries/                        Country index
/countries/[slug]                  6 country pages
/case-studies/                     Case studies index
/case-studies/[slug]               4 case studies
/resources/                        Resources index
/resources/faq/                     FAQ hub (110+ Qs across 11 topics)
/resources/tax-calendar/           Tax calendar
/resources/checklist/              Compliance checklist (gated PDF)
/resources/setup-guide/            Setup guide (gated PDF)
/about/                            About
/contact/                          Contact + form
/privacy/                          Privacy policy
/terms/                            Terms of use
/llms.txt                          AI-search summary
/sitemap.xml                       Dynamic sitemap
/robots.txt                        Robots + AI bot rules
```

---

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build

```bash
npm run pdf:lead-magnets   # Generate 3 PDFs into public/downloads/
npm run build              # Build static site to out/
npx serve out              # Preview the production build
```

---

## Environment variables

Create `.env.local` for local development. The form uses these at build time via `NEXT_PUBLIC_*`.

| Variable                   | Purpose                                                         |
|----------------------------|-----------------------------------------------------------------|
| `NEXT_PUBLIC_CONTACT_WEBHOOK` | URL the contact form POSTs to. Should be the Cloudflare Worker URL (or Formspree, Zapier, etc.). |
| `NEXT_PUBLIC_LEAD_WEBHOOK`    | URL the lead-magnet form POSTs to. Defaults to the same as contact. |
| `NEXT_PUBLIC_CRM_WEBHOOK`     | Optional. Used by site metadata; the actual CRM forwarding happens in the worker. |

If no webhook is configured, the form posts a no-op and the UX still completes — useful for preview builds and during initial deployment. **For production, set the contact webhook to the deployed Cloudflare Worker URL.**

---

## Deployment

### 1. Cloudflare Pages (static site)

```bash
# First time: create the project (one-off)
npx wrangler pages project create vietnam-tax-advisory --production-branch=main

# Then deploy
npm run deploy:cf
```

This:
1. Generates the 3 lead-magnet PDFs.
2. Builds the static site to `out/`.
3. Deploys `out/` to Cloudflare Pages under the project `vietnam-tax-advisory`.

After first deploy, attach the custom domain via the Cloudflare dashboard (Pages → project → Custom domains).

### 2. Cloudflare Worker (form handling)

```bash
cd workers/contact-form
npm install -D wrangler typescript @cloudflare/workers-types
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put CRM_WEBHOOK_URL
npx wrangler deploy
```

Then set the worker's URL as `NEXT_PUBLIC_CONTACT_WEBHOOK` in the Pages environment variables.

---

## SEO / GEO architecture

### SEO

- **Per-page metadata**: title, description, keywords, OpenGraph, Twitter card, canonical — generated via `src/lib/seo.ts`.
- **JSON-LD**: every page emits the appropriate schema via `src/lib/schema.ts`:
  - `Organization` (site-wide)
  - `AccountingService` (site-wide)
  - `Service` (per service page)
  - `FAQPage` (per service page + the FAQ hub)
  - `BreadcrumbList` (every page with breadcrumbs)
  - `Article` (case studies)
  - `Person` (founders, on `/about`)
- **Sitemap**: `src/app/sitemap.ts` — 50+ URLs, regenerated on build.
- **Robots**: `src/app/robots.ts` — allow-list for AI crawlers (GPTBot, Claude-Web, PerplexityBot, Google-Extended).

### GEO (AI search optimization)

- **`/llms.txt`**: full site summary in the [llmstxt.org](https://llmstxt.org) convention.
- **FAQ hub**: 110+ questions across 11 topics (CIT, VAT, PIT, FCT, payroll, social insurance, accounting, audits, FDI, transfer pricing, profit repatriation, work permits). Each service page has 4–10 page-specific FAQs.
- **Service pages follow the GEO structure** every page answers:
  1. What is it?
  2. Who needs it?
  3. Legal requirements
  4. Costs
  5. Timeline
  6. Common mistakes
  7. FAQs
- **Crawlable FAQ summary on the hub page** — every FAQ is in the visible HTML, not hidden behind JS.
- **Case studies** are published as `Article` schema with the firm as the publisher.

---

## Performance

- Static export → served from CF Pages CDN, no origin calls.
- Font preconnect + `display: swap` → no FOIT.
- Total client JS for the heaviest page (contact form) is ~112 kB.
- Images: SVG favicon + SVG OG image (zero raster).

---

## Brand

| | |
|---|---|
| Name | Vietnam Tax Advisory (VTA) |
| Legal | Vietnam Tax Advisory Co., Ltd |
| Founded | 2014 |
| Office | Bitexco Financial Tower, District 1, Ho Chi Minh City |
| Palette | Navy `#0d1b2a` / Ivory `#f7f4ef` / Gold `#b8965a` |
| Type | Cormorant Garamond (display) + DM Sans (body) |

---

## License

All rights reserved. Source code proprietary to Vietnam Tax Advisory Co., Ltd.
