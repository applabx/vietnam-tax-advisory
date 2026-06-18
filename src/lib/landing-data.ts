import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaStrip } from "@/components/Section";
import type { FAQ } from "@/lib/faq-data";

export type LandingPageData = {
  slug: string;
  path: string;
  title: string;
  h1: string;
  italic: string;
  description: string;
  keywords: string[];
  heroSubtitle: string;
  intro: string;
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  pricing: { item: string; amount: string; note?: string }[];
  faqs: FAQ[];
  relatedServices: { label: string; href: string }[];
  relatedCountries: { label: string; href: string }[];
  relatedIndustries: { label: string; href: string }[];
};

const allServices = [
  { label: "Accounting Services Vietnam", href: "/landing/accounting-services-vietnam" },
  { label: "Tax Consultant Vietnam", href: "/landing/tax-consultant-vietnam" },
  { label: "Tax Advisor Vietnam", href: "/landing/tax-advisor-vietnam" },
  { label: "Bookkeeping Services Vietnam", href: "/landing/bookkeeping-services-vietnam" },
  { label: "Payroll Services Vietnam", href: "/landing/payroll-services-vietnam" },
  { label: "Virtual CFO Vietnam", href: "/landing/virtual-cfo-vietnam" },
  { label: "Accounting for Foreign Companies in Vietnam", href: "/landing/accounting-for-foreign-companies-vietnam" },
];

const countries = [
  { label: "Singapore", href: "/countries/singapore" },
  { label: "Japan", href: "/countries/japan" },
  { label: "South Korea", href: "/countries/korea" },
  { label: "Australia", href: "/countries/australia" },
  { label: "United States", href: "/countries/united-states" },
  { label: "United Kingdom", href: "/countries/united-kingdom" },
];

const industries = [
  { label: "SaaS & Software", href: "/industries/saas" },
  { label: "Manufacturing", href: "/industries/manufacturing" },
  { label: "E-commerce", href: "/industries/ecommerce" },
  { label: "Tech Startups", href: "/industries/technology-startups" },
  { label: "Foreign-Owned Companies", href: "/industries/foreign-owned" },
];

// ============================================================================
// 1. ACCOUNTING SERVICES VIETNAM
// ============================================================================
export const landingAccounting: LandingPageData = {
  slug: "accounting-services-vietnam",
  path: "/landing/accounting-services-vietnam",
  title: "Accounting Services Vietnam — Monthly Bookkeeping for Foreign Companies",
  h1: "Accounting services in",
  italic: "Vietnam for foreign companies",
  description: "Vietnam-based monthly bookkeeping, VAS financial statements, IFRS reconciliation, and audit support for 100%-foreign-owned companies, joint ventures, and regional HQs. From USD 800/month.",
  keywords: ["accounting services Vietnam", "Vietnam bookkeeping services", "monthly accounting Vietnam", "VAS financial statements", "FDI accounting"],
  heroSubtitle: "From USD 800/month. VAS-compliant. English-first reporting. Cloud-based.",
  intro: "We deliver monthly bookkeeping, management accounts, and year-end financial statements for foreign-owned companies operating in Vietnam. Our team uses VAS, Xero, QuickBooks, and Sage — and delivers everything in English, ready for your head office and group consolidation.",
  benefits: [
    { title: "English-first financial statements", desc: "Every management pack and financial statement is delivered in English. No translation overhead for your CFO or board." },
    { title: "VAS + IFRS dual reporting", desc: "VAS-compliant statutory financials plus an IFRS-equivalent package for group consolidation. Reconciled quarterly." },
    { title: "Cloud-based, live visibility", desc: "Xero, QuickBooks, or Sage with bank feeds. Your head office sees live numbers from anywhere." },
    { title: "Qualified accounting team", desc: "Vietnam-licensed accountants handling your books. Books kept to VAS standards year-round." },
    { title: "Fixed monthly fee", desc: "Predictable monthly retainer. No hourly billing, no surprise invoices. Scope and fee locked at engagement." },
    { title: "Full compliance coverage", desc: "VAT, CIT, FCT, payroll, social insurance, transfer pricing — all coordinated from one team." },
  ],
  process: [
    { step: "1", title: "Free consultation", desc: "30-minute call. We assess your entity, transactions, and reporting requirements." },
    { step: "2", title: "Fixed-fee proposal", desc: "Clear scope of work and monthly retainer. You know what you're paying and what you're getting." },
    { step: "3", title: "Onboarding", desc: "We register as your tax agent, set up the chart of accounts, and connect to your bank feeds." },
    { step: "4", title: "Ongoing compliance", desc: "Monthly close within 10 working days, monthly management pack, quarterly review with your advisor." },
  ],
  pricing: [
    { item: "Basic monthly bookkeeping (≤ 80 transactions)", amount: "from USD 250 / month" },
    { item: "Standard FDI monthly bookkeeping (unlimited transactions)", amount: "from USD 800 / month" },
    { item: "Year-end financial statements (VAS)", amount: "from USD 1,200" },
    { item: "IFRS reconciliation (per period)", amount: "from USD 1,500" },
    { item: "Catch-up / clean-up of prior years", amount: "from USD 3,000 per year" },
  ],
  faqs: [
    { question: "How much do accounting services cost in Vietnam?", answer: "Monthly bookkeeping for FDI companies starts at USD 800/month for unlimited transactions. Year-end financial statements start at USD 1,200. IFRS reconciliation is USD 1,500+ per period." },
    { question: "Which accounting software do you use?", answer: "Xero and QuickBooks Online are the most common for FDI clients. We also support Sage, MISA SME.NET, Fast Accounting, SAP Business One, and Oracle NetSuite. The choice depends on transaction volume, multi-currency needs, and group consolidation requirements." },
    { question: "Do you deliver financial statements in English?", answer: "Yes. All financial statements and management accounts are prepared in English (with Vietnamese statutory versions as required). We use templates approved by your head office and reconcile to your group's reporting calendar." },
    { question: "What is the monthly close timeline?", answer: "We close the books within 10 working days of month-end and issue the management pack. VAT returns are filed by the 20th of the following month. Quarterly CIT provisional is paid by the 30th of the month following the quarter end." },
    { question: "Do you handle statutory audit support?", answer: "Yes. We prepare the year-end close, liaise with the auditor (Big-4 or local firm), and respond to audit queries. We have worked with all major Vietnamese audit firms." },
  ],
  relatedServices: allServices.filter((s) => !s.href.includes("accounting-services-vietnam")),
  relatedCountries: countries,
  relatedIndustries: industries,
};

// ============================================================================
// 2. TAX CONSULTANT VIETNAM
// ============================================================================
export const landingTaxConsultant: LandingPageData = {
  slug: "tax-consultant-vietnam",
  path: "/landing/tax-consultant-vietnam",
  title: "Tax Consultant Vietnam — CIT, VAT, FCT, Transfer Pricing",
  h1: "Tax consultant in",
  italic: "Vietnam for foreign companies",
  description: "Vietnam-based tax consulting for foreign-owned companies: CIT, VAT, FCT, transfer pricing, treaty relief, and GDT audit defence. focused on foreign-owned companies operating in Vietnam.",
  keywords: ["tax consultant Vietnam", "Vietnam tax advisor", "Vietnam tax consulting", "GDT audit defence Vietnam", "Vietnam tax treaty"],
  heroSubtitle: "GDT-registered. Tax compliance, planning, and audit support.",
  intro: "We provide end-to-end tax consulting for foreign-owned companies in Vietnam — from CIT and VAT filing through transfer pricing, FCT, treaty applications, and GDT audit defence. We coordinate with the Vietnamese-licensed audit firm of your choice and provide audit support throughout the year.",
  benefits: [
    { title: "GDT audit support", desc: "We assist clients during CIT, VAT, FCT, and TP reviews and audits. We prepare documentation, respond to GDT information requests, and represent clients in the audit process." },
    { title: "CIT planning and incentives", desc: "We model tax-incentive scenarios, optimise entity structure, and register incentives at the IRC stage." },
    { title: "Transfer pricing compliance", desc: "Local File, Master File, CbCR support, and TP audit defence under Decree 132/2020." },
    { title: "Treaty relief and CoR filings", desc: "We process Certificate of Residence filings, treaty-rate withholding applications, and renewal calendars." },
    { title: "Tax structuring for FDI", desc: "Entity setup, branch vs subsidiary, holding structures, and cross-border tax optimisation." },
    { title: "FCT compliance", desc: "Deemed vs direct filer modelling, registration, monthly declarations, and Vietnamese payer education." },
  ],
  process: [
    { step: "1", title: "Free consultation", desc: "30-minute call. We assess your tax position and identify risk areas or planning opportunities." },
    { step: "2", title: "Diagnostic review", desc: "A deeper review of your filings, structure, and treaty positions to identify specific issues." },
    { step: "3", title: "Engagement scope", desc: "Fixed-fee proposal for ongoing compliance, audit defence, or a specific project (TP, treaty, structuring)." },
    { step: "4", title: "Execution", desc: "Implementation, filings, audit representation, and ongoing advice. Quarterly reviews with your advisor." },
  ],
  pricing: [
    { item: "Monthly tax retainer (compliance + advisory)", amount: "from USD 800 / month" },
    { item: "Transfer pricing Local File", amount: "USD 5,000 – 12,000" },
    { item: "Transfer pricing Master File", amount: "USD 8,000 – 18,000" },
    { item: "CbCR notification", amount: "USD 1,500 – 3,000" },
    { item: "Tax audit defence", amount: "from USD 5,000 per audit" },
    { item: "Tax incentive modelling and registration", amount: "from USD 5,000" },
  ],
  faqs: [
    { question: "What does a tax consultant do in Vietnam?", answer: "A Vietnam tax consultant advises on CIT, VAT, PIT, FCT, and transfer pricing. They prepare and file returns, represent clients in GDT audits, claim treaty relief, and structure FDI investments. We provide end-to-end tax consulting for foreign-owned companies." },
    { question: "How much do tax consultants charge in Vietnam?", answer: "Monthly tax retainers for compliance + advisory start at USD 800/month. Standalone projects (TP documentation, audit defence, treaty claims) are quoted as fixed fees typically ranging USD 1,500–18,000 depending on scope." },
    { question: "Can a tax consultant represent us in a GDT audit?", answer: "Yes. We are registered tax agents with the GDT and represent clients in CIT, VAT, FCT, and TP audits. We assist with documentation, GDT correspondence, and representation during the audit process." },
    { question: "What is the CIT rate in Vietnam?", answer: "20% standard. Reduced rates of 10%, 15%, and 17% apply to projects in encouraged sectors or geographic zones. Tax holidays of 2–6 years are available for eligible projects. We model the optimal incentive scenarios at IRC stage." },
    { question: "Do you handle treaty applications?", answer: "Yes. We process Certificate of Residence filings, treaty-rate withholding applications, and renewal calendars. Vietnam has DTAs with 80+ countries; we maintain a current list and renewal schedule for our clients." },
  ],
  relatedServices: allServices.filter((s) => !s.href.includes("tax-consultant-vietnam")),
  relatedCountries: countries,
  relatedIndustries: industries,
};

// ============================================================================
// 3. TAX ADVISOR VIETNAM
// ============================================================================
export const landingTaxAdvisor: LandingPageData = {
  slug: "tax-advisor-vietnam",
  path: "/landing/tax-advisor-vietnam",
  title: "Tax Advisor Vietnam — Strategic Tax Planning for FDI Companies",
  h1: "Tax advisor for",
  italic: "foreign-owned companies in Vietnam",
  description: "Strategic Vietnam tax advisory for FDI companies: cross-border structuring, treaty planning, BEPS Pillar 2, APA negotiations, and high-stakes tax disputes.",
  keywords: ["tax advisor Vietnam", "Vietnam tax strategy", "Vietnam tax planning", "Vietnam APA", "BEPS Pillar 2 Vietnam"],
  heroSubtitle: "Strategic advisory for FDI tax positions, structuring, and disputes.",
  intro: "For tax positions that matter — cross-border structuring, treaty planning, APA negotiations, BEPS Pillar 2, and high-stakes disputes — you need a tax advisor, not just a tax preparer. We work directly with founders, CFOs, and controllers of foreign-owned companies — senior advisors engaged on every matter.",
  benefits: [
    { title: "Senior advisor engagement", desc: "Direct engagement with senior advisors — no junior-staff hand-off, no layered account management." },
    { title: "Cross-border structuring", desc: "Entity setup, holding structures, treaty planning, and exit planning for FDI investments." },
    { title: "BEPS Pillar 2 advisory", desc: "GloBE calculations, ETR modelling, and Pillar 2 compliance for MNEs above the threshold." },
    { title: "APA negotiation", desc: "Bilateral and unilateral APAs with the GDT. Pre-emptive pricing certainty for related-party transactions." },
    { title: "High-stakes audit defence", desc: "Representation in major GDT audits, tax appeals, and tax-court proceedings. Our team has handled adjustments exceeding VND 100 billion." },
    { title: "Tax due diligence", desc: "Buy-side and sell-side tax diligence for M&A, restructurings, and capital events." },
  ],
  process: [
    { step: "1", title: "Briefing call", desc: "30-minute call with a senior advisor to understand the issue and your goals." },
    { step: "2", title: "Issue scoping", desc: "We scope the engagement: tax positions, risk areas, regulatory landscape, and budget." },
    { step: "3", title: "Advisory delivery", desc: "Memo, modelling, or representation as appropriate. Senior advisor engagement throughout." },
    { step: "4", title: "Implementation", desc: "We work with your auditors, lawyers, and tax authority to implement the advisory position." },
  ],
  pricing: [
    { item: "Strategic advisory (senior partner)", amount: "USD 500 – 800 / hour" },
    { item: "Cross-border structuring engagement", amount: "from USD 10,000" },
    { item: "BEPS Pillar 2 readiness", amount: "from USD 15,000" },
    { item: "APA negotiation", amount: "from USD 25,000" },
    { item: "Tax due diligence", amount: "from USD 8,000 per target" },
  ],
  faqs: [
    { question: "What is the difference between a tax consultant and a tax advisor?", answer: "A tax consultant typically focuses on compliance: preparing and filing returns, day-to-day advisory. A tax advisor focuses on strategic tax positions: cross-border structuring, treaty planning, M&A tax, high-stakes disputes. We provide both services under one roof." },
    { question: "How much does a senior tax advisor cost?", answer: "Senior advisor engagements are billed at USD 500–800/hour. Project fees for defined engagements (structuring, due diligence, APA) start at USD 8,000–25,000 depending on scope. We quote fixed fees where possible." },
    { question: "Do you handle BEPS Pillar 2?", answer: "Yes. Pillar 2 (Global Anti-Base Erosion) applies to MNEs with consolidated revenue above EUR 750 million. We assist with GloBE calculations, ETR modelling, safe-harbour applications, and Pillar 2 compliance." },
    { question: "Can you negotiate an APA?", answer: "Yes. We negotiate unilateral and bilateral APAs with the GDT. APAs provide pricing certainty for related-party transactions for a defined period (typically 3–5 years)." },
    { question: "What is the largest GDT audit you have defended?", answer: "Our team has defended clients against GDT adjustments exceeding VND 100 billion. We have successfully negotiated reduced assessments and resolved disputes through the appeal process." },
  ],
  relatedServices: allServices.filter((s) => !s.href.includes("tax-advisor-vietnam")),
  relatedCountries: countries,
  relatedIndustries: industries,
};

// ============================================================================
// 4. BOOKKEEPING SERVICES VIETNAM
// ============================================================================
export const landingBookkeeping: LandingPageData = {
  slug: "bookkeeping-services-vietnam",
  path: "/landing/bookkeeping-services-vietnam",
  title: "Bookkeeping Services Vietnam — Monthly Bookkeeping for Foreign Companies",
  h1: "Bookkeeping services in",
  italic: "Vietnam for foreign-owned companies",
  description: "Monthly bookkeeping, bank reconciliation, AP/AR management, and cloud accounting for foreign-owned companies in Vietnam. From USD 250/month.",
  keywords: ["bookkeeping services Vietnam", "Vietnam bookkeeping", "monthly bookkeeping Vietnam", "Xero Vietnam", "QuickBooks Vietnam"],
  heroSubtitle: "From USD 250/month. VAS-compliant. Xero, QuickBooks, Sage.",
  intro: "Outsource your Vietnam bookkeeping to a qualified VAS-compliant team. We handle transaction processing, bank reconciliation, AP/AR management, and monthly management accounts — all in English, all in the cloud, all delivered on your reporting calendar.",
  benefits: [
    { title: "Cloud-first workflow", desc: "Xero, QuickBooks, Sage, or MISA. Bank feeds and integrations so you see live numbers." },
    { title: "Monthly close in 10 days", desc: "Books closed within 10 working days of month-end, with a management pack and VAT filing." },
    { title: "AP/AR management", desc: "Vendor and customer master data, invoice processing, payment runs, and aging reports." },
    { title: "Bank reconciliation", desc: "Daily or weekly bank feeds with full reconciliation by month-end." },
    { title: "Bilingual support", desc: "English-speaking team for your CFO, Vietnamese-speaking team for local vendors and authorities." },
    { title: "Audit-ready books", desc: "Books kept to audit standards year-round — no year-end scramble." },
  ],
  process: [
    { step: "1", title: "Free consultation", desc: "30-minute call. We assess your transaction volume, systems, and reporting needs." },
    { step: "2", title: "Onboarding", desc: "Chart of accounts setup, opening balances, system access, document collection." },
    { step: "3", title: "First month close", desc: "Process opening transactions, reconcile bank accounts, produce first management pack." },
    { step: "4", title: "Steady state", desc: "Monthly close, monthly management pack, quarterly review with your advisor." },
  ],
  pricing: [
    { item: "Basic monthly bookkeeping (≤ 80 transactions)", amount: "from USD 250 / month" },
    { item: "Standard FDI monthly bookkeeping", amount: "from USD 600 / month" },
    { item: "High-volume bookkeeping", amount: "from USD 1,500 / month" },
    { item: "Catch-up / clean-up of prior years", amount: "from USD 3,000 per year" },
  ],
  faqs: [
    { question: "How much does bookkeeping cost in Vietnam?", answer: "Monthly bookkeeping for FDI companies starts at USD 600/month for a typical entity (200–500 monthly transactions). Rep-office bookkeeping starts at USD 250/month. High-volume or multi-entity engagements start at USD 1,500/month." },
    { question: "Which accounting software do you use?", answer: "Xero and QuickBooks Online are most common for FDI clients. We also support Sage, MISA SME.NET, Fast Accounting, SAP Business One, and Oracle NetSuite. The choice depends on transaction volume, multi-currency needs, and group consolidation requirements." },
    { question: "How often is bookkeeping done?", answer: "Monthly, with optional weekly processing for high-transaction entities. We close the books within 10 working days of month-end, issue the management pack, and file the VAT return by the 20th." },
    { question: "Can you clean up prior-year books?", answer: "Yes. We perform a catch-up engagement to reconcile prior years, restate the financial statements, and bring the books current. Common triggers: acquisition due diligence, switching advisors, audit preparation." },
  ],
  relatedServices: allServices.filter((s) => !s.href.includes("bookkeeping-services-vietnam")),
  relatedCountries: countries,
  relatedIndustries: industries,
};

// ============================================================================
// 5. PAYROLL SERVICES VIETNAM
// ============================================================================
export const landingPayroll: LandingPageData = {
  slug: "payroll-services-vietnam",
  path: "/landing/payroll-services-vietnam",
  title: "Payroll Services Vietnam — Monthly Payroll, PIT, Social Insurance",
  h1: "Payroll services in",
  italic: "Vietnam for foreign-owned companies",
  description: "Monthly payroll, PIT withholding, social insurance, expatriate tax, and year-end finalisation for foreign-owned companies in Vietnam. From USD 8 per employee per month.",
  keywords: ["payroll services Vietnam", "Vietnam payroll", "Vietnam PIT", "Vietnam social insurance", "Vietnam expatriate tax"],
  heroSubtitle: "From USD 8 per employee per month. Local + expat. SI + PIT handled.",
  intro: "We deliver monthly payroll, PIT withholding, social insurance contributions, and year-end finalisation for foreign-owned companies in Vietnam. Our team handles local staff, expatriate staff, and split-payroll assignments — including tax-equalisation modelling and year-end PIT finalisation.",
  benefits: [
    { title: "Local + expat payroll", desc: "Vietnamese staff and expatriate staff handled in one workflow, including split-payroll assignments." },
    { title: "Tax-equalisation modelling", desc: "Hypo-tax registers, monthly gross-up calculations, and year-end equalisation reconciliation." },
    { title: "Social insurance handled", desc: "SI registration, monthly contributions, dependent registration, and SI audit defence." },
    { title: "Year-end PIT finalisation", desc: "Annual PIT reconciliation for residents and non-residents. Pre-departure finalisation for assignees." },
    { title: "Work permit coordination", desc: "We work with your immigration counsel on work permit and TRC renewals." },
    { title: "Compliance coverage", desc: "Monthly PIT, monthly SI, quarterly SI reconciliation, and annual labour-authority filings." },
  ],
  process: [
    { step: "1", title: "Free consultation", desc: "30-minute call. We review your headcount, expat assignments, and reporting needs." },
    { step: "2", title: "Payroll setup", desc: "Employee master, salary structures, SI registration, PIT tax codes, payroll calendar." },
    { step: "3", title: "First payroll run", desc: "We process the first payroll, file PIT and SI, deliver payslips and bank files." },
    { step: "4", title: "Ongoing monthly", desc: "Monthly payroll, monthly PIT/SI filings, quarterly reviews, year-end finalisation." },
  ],
  pricing: [
    { item: "Local employee payroll (per employee per month)", amount: "from USD 8" },
    { item: "Expatriate payroll (per employee per month)", amount: "from USD 25" },
    { item: "Tax-equalisation modelling", amount: "from USD 200 per month per assignee" },
    { item: "Year-end PIT finalisation (per employee)", amount: "from USD 100" },
    { item: "SI audit support", amount: "from USD 2,500 per audit" },
  ],
  faqs: [
    { question: "How much does payroll cost in Vietnam?", answer: "Local employee payroll starts at USD 8 per employee per month. Expatriate payroll starts at USD 25 per employee per month (includes PIT and SI handling). Year-end PIT finalisation is USD 100+ per employee." },
    { question: "Do you handle expatriate payroll?", answer: "Yes. We process payroll for expatriate staff including split-payroll arrangements, tax-equalisation modelling, hypo-tax registers, and pre-departure PIT finalisation." },
    { question: "What is the social insurance rate in Vietnam?", answer: "Total SI contributions are 32.5% of insurable salary (capped at 20x base salary): employer 21.5% (SI 17.5% + HI 3% + UI 1%), employee 10.5% (SI 8% + HI 1.5% + UI 1%). Foreign employees became subject to mandatory SI from 1 July 2025." },
    { question: "What is the PIT rate?", answer: "Vietnamese PIT is progressive from 5% to 35%. Personal deduction VND 11 million/month, dependent deduction VND 4.4 million/month. We withhold PIT monthly and finalise annually." },
  ],
  relatedServices: allServices.filter((s) => !s.href.includes("payroll-services-vietnam")),
  relatedCountries: countries,
  relatedIndustries: industries,
};

// ============================================================================
// 6. VIRTUAL CFO VIETNAM
// ============================================================================
export const landingCfo: LandingPageData = {
  slug: "virtual-cfo-vietnam",
  path: "/landing/virtual-cfo-vietnam",
  title: "Virtual CFO Vietnam — Fractional CFO for Foreign-Owned Companies",
  h1: "Virtual CFO for",
  italic: "foreign-owned companies in Vietnam",
  description: "Fractional CFO leadership for foreign-owned companies in Vietnam: forecasting, board reporting, cash management, fundraising, and M&A advisory. From USD 2,000/month.",
  keywords: ["virtual CFO Vietnam", "fractional CFO Vietnam", "Vietnam CFO services", "board reporting Vietnam", "FDI CFO advisory"],
  heroSubtitle: "From USD 2,000/month. Senior CFO leadership on a fractional basis.",
  intro: "Senior finance leadership for foreign-owned companies in Vietnam — without the cost of a full-time CFO. Our virtual CFO engagements typically run 1–3 days per month and cover forecasting, board reporting, cash management, and other priorities agreed with you.",
  benefits: [
    { title: "Senior advisor engagement", desc: "A senior advisor assigned to your engagement, supported by the firm's wider team." },
    { title: "Fractional engagement", desc: "1–3 days per month typically. Flexible engagement that scales with your business." },
    { title: "Board and investor reporting", desc: "Board packs, monthly management accounts, investor updates, fundraising decks." },
    { title: "Forecasting and cash management", desc: "13-week cash flow, scenario modelling, and KPI dashboards." },
    { title: "Fundraising and M&A", desc: "Financial modelling, due diligence support, deal structuring, and investor relations." },
    { title: "Strategic finance leadership", desc: "Hire/firing decisions, finance team development, system selection, and audit committee support." },
  ],
  process: [
    { step: "1", title: "Free consultation", desc: "30-minute call with a virtual CFO. We assess your finance function and growth stage." },
    { step: "2", title: "Engagement scoping", desc: "Days per month, deliverables, and integration with your existing team." },
    { step: "3", title: "Onboarding", desc: "Access to your systems, history of the business, and key stakeholder introductions." },
    { step: "4", title: "Ongoing", desc: "Monthly CFO engagement, quarterly board reporting, ad-hoc strategic advice." },
  ],
  pricing: [
    { item: "2 days per month engagement", amount: "from USD 2,000 / month" },
    { item: "3 days per month engagement", amount: "from USD 3,500 / month" },
    { item: "Full-time embedded CFO", amount: "from USD 8,000 / month" },
    { item: "Fundraising readiness project", amount: "from USD 15,000" },
    { item: "M&A buy-side or sell-side support", amount: "from USD 20,000" },
  ],
  faqs: [
    { question: "What is a virtual CFO?", answer: "A virtual CFO is a senior finance leader who works with your business on a fractional basis. They provide strategic guidance, financial planning, board reporting, and oversight of the finance function without the cost of a full-time CFO." },
    { question: "How is a virtual CFO different from an accounting firm?", answer: "An accounting firm records transactions and prepares tax filings. A virtual CFO uses that data to drive decisions: cash-flow forecasting, scenario planning, fundraising, M&A, and board engagement. Many clients use both." },
    { question: "How much does a virtual CFO cost?", answer: "Virtual CFO engagements range from USD 2,000 to USD 8,000 per month depending on frequency, scope, and seniority. A 2-day-per-month engagement is the most common starting point." },
    { question: "Can a virtual CFO serve on our board?", answer: "Yes. Many of our virtual CFOs take a non-executive director or advisory-board role for an additional fee. The role is governed by the company's charter and any local directorship rules." },
  ],
  relatedServices: allServices.filter((s) => !s.href.includes("virtual-cfo-vietnam")),
  relatedCountries: countries,
  relatedIndustries: industries,
};

// ============================================================================
// 7. ACCOUNTING FOR FOREIGN COMPANIES IN VIETNAM
// ============================================================================
export const landingForeignCompanies: LandingPageData = {
  slug: "accounting-for-foreign-companies-vietnam",
  path: "/landing/accounting-for-foreign-companies-vietnam",
  title: "Accounting for Foreign Companies in Vietnam — Complete Guide",
  h1: "Accounting for foreign companies",
  italic: "in Vietnam",
  description: "Specialist accounting, tax, and payroll services for 100%-foreign-owned companies, joint ventures, and regional HQs operating in Vietnam. From setup to audit and profit repatriation.",
  keywords: ["accounting for foreign companies Vietnam", "FDI accounting Vietnam", "foreign-owned company accounting", "WFOE accounting", "joint venture accounting"],
  heroSubtitle: "End-to-end financial compliance for 100%-foreign-owned companies and JVs.",
  intro: "We are specialists in accounting, tax, and CFO advisory for foreign-owned companies in Vietnam — WFOEs, joint ventures, branches, and regional HQs. From day-one setup through monthly compliance, annual audit, and profit repatriation, we handle every financial obligation so you can focus on running the business.",
  benefits: [
    { title: "Built for FDI", desc: "We work with 100%-foreign-owned companies, holding structures, and regional HQs every day. We know the GDT's expectations." },
    { title: "English-first reporting", desc: "Every financial statement, board pack, and filing delivered in English. No translation overhead for your CFO." },
    { title: "Fixed-fee transparency", desc: "Single monthly retainer covers the agreed scope. No hourly billing, no surprise invoices." },
    { title: "Vietnamese expertise", desc: "Vietnam-resident team working in VAS, Vietnamese tax law, and GDT practice day-to-day." },
    { title: "Modern, cloud-based", desc: "Xero, QuickBooks, and other cloud platforms. Live numbers from anywhere, in your currency." },
    { title: "Full compliance coverage", desc: "CIT, VAT, PIT, FCT, payroll, social insurance, transfer pricing, audit, and profit repatriation." },
  ],
  process: [
    { step: "1", title: "Free consultation", desc: "30-minute call. We assess your entity, jurisdiction, and reporting requirements." },
    { step: "2", title: "Fixed-fee proposal", desc: "Clear scope and monthly retainer. Setup + ongoing compliance bundled." },
    { step: "3", title: "Onboarding", desc: "Tax agent registration, chart of accounts setup, bank feed integration." },
    { step: "4", title: "Ongoing compliance", desc: "Monthly close, quarterly review, annual audit, profit repatriation support." },
  ],
  pricing: [
    { item: "Foreign company monthly retainer (full compliance)", amount: "from USD 1,500 / month" },
    { item: "Foreign company setup (IRC + ERC)", amount: "from USD 8,000" },
    { item: "Joint venture accounting (full compliance)", amount: "from USD 2,000 / month" },
    { item: "Branch office accounting", amount: "from USD 1,200 / month" },
    { item: "Profit repatriation advisory", amount: "from USD 3,000" },
  ],
  faqs: [
    { question: "What does accounting for foreign companies in Vietnam include?", answer: "Accounting for foreign companies in Vietnam includes monthly bookkeeping, management accounts, VAS financial statements, IFRS reconciliation, VAT/CIT/PIT filings, social insurance, statutory audit support, transfer pricing documentation, and profit repatriation. We provide all of this under one fixed monthly retainer." },
    { question: "How much does it cost?", answer: "Full-service accounting for a foreign company in Vietnam starts at USD 1,500/month, depending on transaction volume, headcount, and complexity. Foreign company setup (IRC + ERC) is from USD 8,000." },
    { question: "What is the standard CIT rate for foreign companies?", answer: "20% standard rate, the same as domestic companies. Reduced rates of 10%, 15%, and 17% apply to projects in encouraged sectors or geographic zones, subject to advance application and registration." },
    { question: "Do foreign companies need a Vietnamese director?", answer: "No. The legal representative can be a foreigner. However, a Vietnamese-resident person is often required for certain filings, bank account opening, and tax registration. We coordinate local presence as part of the engagement." },
  ],
  relatedServices: allServices.filter((s) => !s.href.includes("accounting-for-foreign-companies-vietnam")),
  relatedCountries: countries,
  relatedIndustries: industries,
};

export const landingPages: Record<string, LandingPageData> = {
  "accounting-services-vietnam": landingAccounting,
  "tax-consultant-vietnam": landingTaxConsultant,
  "tax-advisor-vietnam": landingTaxAdvisor,
  "bookkeeping-services-vietnam": landingBookkeeping,
  "payroll-services-vietnam": landingPayroll,
  "virtual-cfo-vietnam": landingCfo,
  "accounting-for-foreign-companies-vietnam": landingForeignCompanies,
};

export const landingSlugs = Object.keys(landingPages);
