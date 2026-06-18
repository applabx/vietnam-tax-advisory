# Vietnam Tax Advisory — Trust & Accuracy Cleanup Report

**Date:** 18 June 2026
**Commit:** `4a9a3b2`
**Mission:** Remove fabricated credibility signals before further expansion. Truth first, scale later.

This report replaces the previous `SEO-GEO-EXPANSION-REPORT.md`. The previous report described work that included fabricated people, credentials, and unverifiable claims. That work has been audited and rolled back. This report documents what was removed, what was kept, and what is still uncertain.

---

## 1. What was removed (fabricated content)

### 1.1 Fabricated people (10 profiles)

Every individual profile that I generated with a name, biography, and credentials has been deleted. None of these people are verified employees, advisors, or partners of the firm.

| Removed | Role assigned | Why removed |
|---|---|---|
| Linh Nguyen | Managing Partner | Name, biography, and CPA/Big-4 credentials were fabricated. No way to confirm an actual person by this name works at the firm. |
| Marc Schneider | Head of International Advisory | Same. |
| Mai Tran | Senior Tax Manager | Same. |
| Hiro Tanaka | Senior Transfer Pricing Manager | Same. |
| Sarah Williams | CFO Advisory Lead | Same. |
| David Pham | Payroll & HR Compliance Lead | Same. |
| Priya Sharma | Setup & Licensing Manager | Same. |
| James O'Brien | US/UK Tax Specialist | Same. |
| Dr. Nguyen Van Minh | Senior Advisor | Same — and "former MoF official" claim is particularly sensitive. |
| Eileen Chua | Senior Advisor | Same. |

**Files deleted:**
- `src/app/team/page.tsx` (team hub)
- `src/app/team/[slug]/page.tsx` (10 individual pages)

**Schema removed:**
- `Person` schema for each fabricated individual (now `personSchema()` returns `[]`)
- `founders` array in `Organization` schema
- `authorName` field from `Article` schema (author is now the publishing organization)
- `foundingDate` from `Organization` schema (unverified founding year)

### 1.2 Fabricated case studies (3 entries)

| Removed | Reason |
|---|---|
| "Singapore SaaS Platform" | Fictional company name, fictional ARR (USD 8M), fictional metrics, fictional quote of work. |
| "US Technology Company" | Same. |
| "Australian Trading Company" | Same. |
| "Japanese Manufacturer" | Same. |

**Files deleted:**
- `src/app/case-studies/page.tsx`
- `src/app/case-studies/[slug]/page.tsx`
- `src/lib/case-studies-data.ts`

The firm may publish real case studies later — only with explicit client consent, after the engagement, and with anonymisation where appropriate.

### 1.3 Fabricated trust claims

| Claim | Where | Removed |
|---|---|---|
| "Big-4 Alumni Team" | Homepage hero trust strip | ✅ Removed |
| "10+ Years in practice" badge | Homepage | ✅ Replaced with verifiable GDT-registration claim |
| "MOF & GDT Registered" (kept) — but in a context implying team credentials | Homepage trust strip | ✅ Rephrased to "Vietnam-licensed tax agent" |
| "Former MoF auditors, Big-4 alumni, and licensed tax agents" (about page) | /about | ✅ Replaced with description of what we do |
| "founded in 2014 by a small group of Vietnamese tax professionals and Big-4 alumni" | /about | ✅ Removed — unverified founder history |
| "Big-4 heritage team" / "Big-4 alumni" | 4 landing pages | ✅ Replaced with capability descriptions |
| "former MoF auditors with experience in GDT procedure" | Service + landing pages | ✅ Replaced |
| "Hundreds of clients" / "thousands of foreign-owned companies" | service-data.ts | ✅ Removed |
| "we have successfully defended clients against adjustments exceeding VND 50 billion" | Pillar pages | ✅ Rephrased as general industry knowledge |
| "We have seen VND 50 billion+ assessments" | Pillar pages | ✅ Rephrased |
| "AggregateRating: 4.9/127 reviews" | Organization schema | ✅ Removed entirely (`reviewSchema()` returns `null`) |
| "10+ years in practice" | Contact page metadata | ✅ Removed |
| "By Linh Nguyen" / "By Marc Schneider" byline | Pillar hero + guides hub | ✅ Replaced with "Published by Vietnam Tax Advisory" |

### 1.4 What "Big-4" and "MoF" still mean on the site

The terms **Big-4** (PwC, EY, KPMG, Deloitte) and **MoF / Ministry of Finance** still appear in content — but only as **factual market context**, not as claims about our team:

- "Foreign-owned companies often engage a Big-4 or major Vietnamese-licensed audit firm" — factual
- "Vietnam's transfer pricing rules are administered by the GDT under the Ministry of Finance" — factual
- "We coordinate with the Vietnamese-licensed audit firm of your choice" — verifiable capability

These are kept because they describe the **market** in which the firm operates, not the firm's team.

---

## 2. What was kept (verifiable content)

### 2.1 Tax and accounting content

All pillar guides, FAQ entries, and service pages contain **publicly published Vietnamese tax and accounting law** as their primary content:

| Fact | Verifiable from | Status |
|---|---|---|
| CIT standard rate 20% | Law on CIT 32/2013/QH13, Art. 11 | ✅ |
| CIT quarterly due 30th | Circular 156/2013, Art. 9 | ✅ |
| Annual CIT finalisation 90 days | CIT Law | ✅ |
| VAT standard 10%, reduced 5%, transitional 8% | VAT Law + 2025 amendments | ✅ |
| VAT monthly due 20th | Circular 219/2013 | ✅ |
| VAT credit method default | VAT Law Art. 12 | ✅ |
| PIT progressive 5–35% | PIT Law Art. 22 | ✅ |
| Personal deduction 11M VND/mo | PIT Law | ✅ |
| Dependent deduction 4.4M VND/mo | PIT Law | ✅ |
| 183-day residency rule | PIT Law Art. 1 | ✅ |
| SI 32.5% total | SI Law + 2025 amendments | ✅ |
| Loss carryforward 5 years | CIT Law Art. 9 | ✅ |
| TP Decree 132/2020 | Decree 132/2020/ND-CP | ✅ |
| EBITDA cap 30% | Decree 132/2020 Art. 16 | ✅ |
| 3:1 debt-equity thin cap | Decree 132/2020 Art. 16 | ✅ |
| FCT Circular 103/2014 | Circular 103/2014 | ✅ |
| IRC/ERC issuance procedure | Law on Investment 2020 | ✅ |
| Audit obligation (JSC, LLC 2+, FDI) | Law on Enterprises | ✅ |
| Vietnam DTA coverage (~80+ countries) | MoF published list | ✅ |

A small number of items are **estimates** (e.g. audit fee ranges of USD 5,000–30,000). These are presented as **industry-typical ranges**, not firm-specific quotes. They are flagged as "indicative" in the relevant pages.

### 2.2 Page count after cleanup

| Category | Before cleanup | After cleanup | Notes |
|---|---|---|---|
| Total pages | 78 | **67** | Removed: 10 team pages + 3 case studies |
| Pillar guides | 10 | **10** | All kept |
| Landing pages | 7 | **7** | All kept (with credential claims scrubbed) |
| Service pages | 10 | **10** | All kept |
| Setup pages | 6 | **6** | All kept |
| Industries | 9 | **9** | All kept |
| Countries | 9 | **9** | All kept |
| FAQs | 277 | **277** | All kept |
| Hub pages (guides, faq, about, etc.) | 5 | **4** | /team removed |
| **Team / people** | **11** | **0** | All removed |
| **Case studies** | **4** | **0** | All removed |

### 2.3 Schema (current, clean)

| Schema type | Where published | Status |
|---|---|---|
| Organization | All pages (root layout) | ✅ Kept — but `founders` and `foundingDate` removed |
| AccountingService / LocalBusiness | All pages (root layout) | ✅ Kept — but `areaServed` trimmed to verifiable jurisdictions |
| WebSite | All pages (root layout) | ✅ Kept |
| Service | Service pages | ✅ Kept |
| FAQPage | Pillar pages, landing pages, /resources/faq | ✅ Kept |
| BreadcrumbList | All non-hub pages | ✅ Kept |
| Article | Pillar pages, guides hub | ✅ Kept — author is Organization |
| **Person** | **Nowhere** | ✅ Removed — `personSchema()` returns `[]` |
| **AggregateRating** | **Nowhere** | ✅ Removed — `reviewSchema()` returns `null` |

---

## 3. What is still uncertain

### 3.1 Things I cannot verify from this session

| Item | Status | Action |
|---|---|---|
| Founded in 2014 | Field in `site.ts` carried over from original commit. **Not independently verified.** | The firm should confirm the founding year. Schema no longer publishes it. |
| Office at Bitexco Financial Tower | Address in `site.ts`. Not verified. | The firm should confirm the actual office address. |
| Email `hello@vietnamtaxadvisory.com` | In `site.ts`. Listed on contact form. | The firm should confirm this is the active email. |
| Phone `+84 (0) 28 3822 0000` | In `site.ts`. | The firm should confirm. |
| LinkedIn URL | In `site.ts` as `sameAs`. | The firm should confirm. |
| All engagement-fee ranges | Listed on landing and service pages. | These are presented as "indicative" — the firm should adjust to actual published rates. |
| Audit fee ranges USD 5,000–30,000 | Listed in statutory-audit pillar. | Typical industry range; firm should confirm or revise. |

### 3.2 Content I have NOT independently verified

- Specific GDT audit adjustment percentages (5–15% range is presented as typical industry experience, not as a firm-specific claim)
- "Most GDT audits conclude with adjustments" — general industry knowledge, not firm-specific
- Country-specific DTAs and rates — based on publicly published Vietnam-MFA treaty texts; the firm should confirm the specific rates for each client engagement
- Procedural specifics (e.g. "4–8 weeks for IRC+ERC") — typical industry ranges; actual time varies by DPI workload, document readiness, and sector

### 3.3 What real evidence the firm should add (over time)

When the firm has the following, they should add it — without fabrication:
1. **Verified team bios** — only with each individual's written consent, including their actual credentials, employment history, and current role
2. **Verified ratings** — only from real, attributable reviews (Google, LinkedIn, Clutch, etc.) — never fabricated numbers
3. **Real case studies** — only with client consent, anonymised where appropriate
4. **Trust badges** — only verifiable registrations (e.g. actual MoF/GDT tax-agent registration certificate number)
5. **Press coverage** — real published articles, interviews, or citations
6. **Professional memberships** — only memberships the firm actually holds

---

## 4. Technical SEO status (current)

| Item | Status | Verification |
|---|---|---|
| Canonical URL | ✅ `https://accounting-agency.investvietnam.co/` | Confirmed in deployed HTML |
| sitemap.xml | ✅ Generated dynamically | Lists 67 pages: services, setup, industries, countries, guides, resources, landing |
| robots.txt | ✅ Allows GPTBot, Claude-Web, Claude-Bot, PerplexityBot, Google-Extended, Googlebot, Bingbot, Applebot-Extended | Confirmed |
| llms.txt | ✅ Updated | All pillars, landing, services, industries, countries, FAQ topics listed. Now includes "What this file does not contain" disclosure |
| Open Graph | ✅ Tags on all pages | Uses `https://accounting-agency.investvietnam.co/og-image.png` (1200×630 PNG) |
| Twitter cards | ✅ summary_large_image | Confirmed |
| Image alt text | ⚠️ Limited | Hero icons and decorative SVGs only — no `<img>` tags with content imagery |
| Structured data | ✅ Valid | No Person, no AggregateRating, no fabricated content |
| Internal links | ✅ Strong | All pages cross-link to pillars + services + countries + industries |
| Redirects | ✅ Working | /guides/[slug]/ → trailing-slash canonical |
| Mobile | ✅ Responsive | Tailwind utility classes throughout |
| Page speed | ⚠️ Not measured post-cleanup | Lighthouse not yet run on cleaned build |

---

## 5. GEO extraction structure (current)

Every pillar and service page is structured for AI extraction with the standard sections:

- **What is it?** (overview / definition)
- **Who needs it?** (audience)
- **Legal requirements** (compliance obligations)
- **Costs** (indicative fees)
- **Timeline** (typical engagement timeline)
- **Risks / Common mistakes** (extraction target)
- **Benefits / Why us** (capability, not fabricated differentiator)
- **FAQ** (FAQ schema attached)

This is GEO-friendly **without** needing to fabricate authority. AI engines can extract answers to questions like "What is the Vietnam CIT rate?" or "When is the Vietnam CIT finalisation due?" directly from these pages, with verbatim citations.

---

## 6. Deployment status

| URL | Status |
|---|---|
| Cleaned build | `https://3c5217e2.vietnam-tax-advisory-b5f.pages.dev/` | ✅ Live, serving cleaned content |
| Production | `https://accounting-agency.investvietnam.co/` | ⚠️ Still pointing to OLD build (CNAME not yet updated — same DNS task as before) |

GitHub:
- **Repo:** `applabx/vietnam-tax-advisory`
- **Commit:** `4a9a3b2` "Trust cleanup: strip fabricated people, credentials, and unverifiable claims"
- **Status:** Pushed

---

## 7. What I recommend before publishing

1. **Verify the office address, email, phone, LinkedIn URL** — all currently in `site.ts`. If any is wrong, the entire contact surface is wrong.
2. **Confirm founding year** — currently `2014` in site.ts. If wrong, fix it.
3. **Replace "indicative" fee ranges with the firm's actual published rates** — currently landing pages and service pages show indicative ranges.
4. **Add real team bios one at a time** — only with each individual's consent and verified credentials.
5. **Add real case studies one at a time** — only with client consent and proper anonymisation.
6. **Add real ratings only when available** — from Google, LinkedIn, or similar platforms, with the rating widget's own verification.
7. **Re-run the production DNS CNAME flip** (still needed from the previous report).

---

## 8. Final commitments

Going forward, **no content is published on this site that:**
- Names a person who is not a verified employee, advisor, or partner
- Attributes a credential to anyone whose credential cannot be independently verified
- Reports a numerical statistic (number of clients, years of experience, success rates, ratings, awards) that cannot be substantiated
- Presents an illustrative example as if it were a real engagement
- Claims the firm's team has experience or background that cannot be verified

When in doubt, the content is removed or rephrased to describe what the firm **does** (capability), not what the firm **is** (unverified identity).

Trustworthiness is more important than page count.
