import type { PillarPageData } from "@/components/PillarPageTemplate";
import type { FAQ } from "@/lib/faq-data";

// Helper to ensure type safety
function makeFaq(question: string, answer: string): FAQ {
  return { question, answer };
}

const today = "2026-06-18";

// Common related-services/related-pillars shortcuts
const allServices = [
  { label: "Accounting Services", href: "/services/accounting" },
  { label: "Tax Services", href: "/services/tax" },
  { label: "Bookkeeping", href: "/services/bookkeeping" },
  { label: "Payroll & PIT", href: "/services/payroll" },
  { label: "Corporate Tax", href: "/services/corporate-tax" },
  { label: "VAT Services", href: "/services/vat" },
  { label: "Transfer Pricing", href: "/services/transfer-pricing" },
  { label: "Foreign Contractor Tax", href: "/services/foreign-contractor-tax" },
  { label: "Statutory Audit Support", href: "/services/statutory-audit" },
  { label: "Virtual CFO", href: "/services/virtual-cfo" },
];

const allPillars = [
  { slug: "corporate-income-tax", label: "Vietnam Corporate Income Tax Guide", href: "/guides/corporate-income-tax" },
  { slug: "vat", label: "Vietnam VAT Guide", href: "/guides/vat" },
  { slug: "payroll", label: "Vietnam Payroll & PIT Guide", href: "/guides/payroll" },
  { slug: "personal-income-tax", label: "Vietnam Personal Income Tax Guide", href: "/guides/personal-income-tax" },
  { slug: "foreign-contractor-tax", label: "Vietnam Foreign Contractor Tax Guide", href: "/guides/foreign-contractor-tax" },
  { slug: "transfer-pricing", label: "Vietnam Transfer Pricing Guide", href: "/guides/transfer-pricing" },
  { slug: "tax-deadlines", label: "Vietnam Tax Deadlines Calendar", href: "/guides/tax-deadlines" },
  { slug: "accounting-requirements", label: "Vietnam Accounting Requirements", href: "/guides/accounting-requirements" },
  { slug: "statutory-audit", label: "Vietnam Statutory Audit Guide", href: "/guides/statutory-audit" },
  { slug: "profit-repatriation", label: "Vietnam Profit Repatriation Guide", href: "/guides/profit-repatriation" },
];

const countries = [
  { label: "Singapore", href: "/countries/singapore" },
  { label: "Japan", href: "/countries/japan" },
  { label: "South Korea", href: "/countries/korea" },
  { label: "Australia", href: "/countries/australia" },
  { label: "United States", href: "/countries/united-states" },
  { label: "United Kingdom", href: "/countries/united-kingdom" },
  { label: "Germany", href: "/countries/germany" },
  { label: "France", href: "/countries/france" },
  { label: "Canada", href: "/countries/canada" },
];

const industries = [
  { label: "SaaS & Software", href: "/industries/saas" },
  { label: "Manufacturing", href: "/industries/manufacturing" },
  { label: "E-commerce", href: "/industries/ecommerce" },
  { label: "Tech Startups", href: "/industries/technology-startups" },
  { label: "Foreign-Owned Companies", href: "/industries/foreign-owned" },
  { label: "Trading Companies", href: "/industries/trading" },
  { label: "Consulting Firms", href: "/industries/consulting" },
  { label: "Logistics", href: "/industries/logistics" },
  { label: "Recruitment", href: "/industries/recruitment" },
];

// ============================================================================
// 1. CORPORATE INCOME TAX (CIT)
// ============================================================================
export const citPillar: PillarPageData = {
  slug: "corporate-income-tax",
  path: "/guides/corporate-income-tax",
  title: "Vietnam Corporate Income Tax Guide for Foreign Companies (2026)",
  description: "Definitive guide to Vietnam Corporate Income Tax (CIT) for foreign-owned companies: 20% rate, quarterly provisional, annual finalisation, incentives, transfer pricing, and the GDT audit playbook.",
  keywords: ["Vietnam corporate income tax", "Vietnam CIT", "CIT rate Vietnam", "Vietnam tax incentives", "FDI CIT Vietnam", "Vietnam corporate tax filing"],
  heroEyebrow: "Pillar Guide",
  heroTitle: "Vietnam Corporate Income Tax",
  heroItalic: "the definitive guide",
  heroDescription: "How Vietnam's 20% corporate income tax works in practice for foreign-owned companies — from provisional quarterly CIT through incentives, transfer pricing, and audit defence.",
  tableOfContents: [
    { id: "what-is-cit", label: "What is CIT in Vietnam?" },
    { id: "who-pays", label: "Who pays CIT in Vietnam?" },
    { id: "rate", label: "The 20% rate and reduced rates" },
    { id: "incentives", label: "CIT incentives for FDI" },
    { id: "filing-cycle", label: "Filing cycle and deadlines" },
    { id: "deductions", label: "Deductions and non-deductible expenses" },
    { id: "losses", label: "Loss carryforward rules" },
    { id: "transfer-pricing", label: "Transfer pricing and CIT" },
    { id: "thin-cap", label: "Thin capitalisation and interest deduction" },
    { id: "withholding", label: "Withholding tax on payments to foreign parties" },
    { id: "audit-defence", label: "GDT audit defence playbook" },
    { id: "common-mistakes", label: "Common CIT mistakes" },
    { id: "faq", label: "Frequently asked questions" },
  ],
  intro:
    "Corporate Income Tax (CIT) is the headline tax on company profits in Vietnam. The standard rate is 20% with reduced rates of 10%, 15%, and 17% available for projects in encouraged sectors or geographic zones. This guide explains how CIT works in practice for foreign-owned companies: who is taxed, how the rate is set, what incentives are available, how the filing cycle works, how deductions are determined, and how to defend a GDT audit. We have written it for CFOs, controllers, founders, and regional finance leads of foreign-owned companies in Vietnam — the people who own the actual CIT number and need to know what is and is not deductible, how to claim treaty relief, and how to avoid the penalties that the GDT routinely imposes on first-time entrants.",
  sections: [
    {
      id: "what-is-cit",
      heading: "What is Corporate Income Tax in Vietnam?",
      body: [
        "Corporate Income Tax (CIT) is a direct tax levied on the taxable profit of entities operating in Vietnam. It is governed by the Law on Corporate Income Tax (most recently Law 32/2013/QH13, as amended) and its implementing regulations, including Decree 218/2013 and Circular 78/2014. The tax is administered by the General Department of Taxation (GDT), which is part of the Ministry of Finance.",
        "Vietnamese CIT is a self-assessed tax: companies compute their own liability, file returns, and pay the tax. The GDT's role is to review filings, conduct audits, and enforce compliance. Most companies interact with the provincial tax department where they are registered; large taxpayers are handled by dedicated large-enterprise divisions.",
        "Taxable profit is accounting profit adjusted for non-deductible expenses, non-taxable income, loss carryforwards, and incentives. The starting point is the audited statutory financial statement prepared under VAS; adjustments are documented in the CIT finalisation return (Form 03/QTT-TNCN).",
        "CIT is paid quarterly on a provisional basis (by the 30th day of the month following the quarter), with annual finalisation within 90 days of fiscal year-end. Late payment triggers late-payment interest at 0.03% per day (approximately 10.95% per year) and penalties of up to VND 25 million per return.",
      ],
    },
    {
      id: "who-pays",
      heading: "Who pays CIT in Vietnam?",
      body: [
        "Every entity that conducts business in Vietnam and earns Vietnam-source income is subject to CIT. This includes: 100%-foreign-owned companies (WFOEs), joint ventures, local companies, branches of foreign companies, representative offices with revenue (limited cases), and permanent establishments of foreign companies.",
        "Representative offices are exempt from CIT because they cannot generate Vietnam-source revenue. Branches are taxed as foreign entities on Vietnam-source income at 20% CIT. Foreign companies with a Vietnamese permanent establishment are taxed on the income attributable to the PE.",
        "Foreign-owned companies are not subject to different CIT rates than domestic companies — the 20% standard rate applies to both. However, foreign-owned companies face additional compliance obligations including transfer pricing documentation (Decree 132/2020), capital account reporting to the State Bank of Vietnam, and the foreign contractor withholding regime when engaging local service providers.",
        "Joint ventures are taxed at the JV level (not the parent level). Profits distributed to foreign partners are subject to withholding tax on dividends — 0% under Vietnamese domestic law (no Vietnam-Cayman or similar treaty rate is needed because Vietnam's domestic rate is already 0%).",
      ],
    },
    {
      id: "rate",
      heading: "The 20% rate and reduced rates",
      body: [
        "The standard CIT rate in Vietnam is 20%. This has been the rate since 2016 (it was 22% from 2014–2015 and 25% before that). The 20% rate is competitive within ASEAN — higher than Singapore (17%) and Hong Kong (16.5%) but lower than the Philippines (25%), Malaysia (24%), and Indonesia (22%).",
        "Reduced rates are available for projects in encouraged sectors or encouraged geographic zones. The reduced rates are:",
        "10% rate — for high-tech projects, software products, certain biotechnology, supporting industries for high-tech products, and projects in special economic zones. The 10% rate typically applies for the first 15 years of the project, with incentives extending beyond depending on the specific regime.",
        "15% rate — for projects in encouraged geographic zones (e.g. certain provinces with difficult socio-economic conditions, industrial zones in encouraged areas). The rate typically applies for a defined period (often 12 years), with subsequent increases.",
        "17% rate — for projects in encouraged sectors that do not qualify for the 10% or 15% rates (e.g. certain manufacturing, certain agricultural projects).",
        "Eligibility for reduced rates must be confirmed at IRC application and registered with the GDT. Once granted, the rate applies for the entire benefit period; the GDT does not retroactively withdraw a granted rate without due process. However, claiming a rate you do not qualify for triggers back taxes, interest, and penalties.",
      ],
    },
    {
      id: "incentives",
      heading: "CIT incentives for foreign investors",
      body: [
        "Beyond reduced rates, Vietnam offers several CIT incentives that are particularly relevant for FDI projects:",
        "Tax holidays — full exemption from CIT for a defined period (typically 2–4 years from the first profitable year, or longer for special projects), followed by a 50% reduction for up to 9 subsequent years. Tax holidays are available for high-tech projects, software, certain education, and certain encouraged-zone projects.",
        "Sector incentives — additional incentives for encouraged sectors (high-tech, supporting industries, software, R&D, certain environmental projects). Sector incentives may be combined with geographic incentives.",
        "Geographic incentives — projects in encouraged zones (defined by the government) qualify for additional incentives beyond sector incentives.",
        "Size incentives — large-scale projects (above a defined investment threshold) may qualify for additional incentives, including longer tax holidays and rate stability.",
        "Incentives must be applied for at the IRC stage. Late applications are not accepted. The IRC must record the incentive and the supporting documents. We help clients model the incentive scenarios before IRC application to ensure eligibility.",
      ],
    },
    {
      id: "filing-cycle",
      heading: "CIT filing cycle and deadlines",
      body: [
        "Vietnamese CIT operates on a quarterly provisional + annual finalisation cycle:",
        "Quarterly provisional CIT — paid by the 30th day of the month following the quarter end. Q1 by 30 April, Q2 by 31 July, Q3 by 31 October, Q4 by 31 January of the following year. The provisional CIT is calculated as 20% (or the applicable reduced rate) of estimated quarterly taxable profit. If actual profit is lower, the provisional payment can be reduced or eliminated via Form 01a.",
        "Annual finalisation return (Form 03/QTT-TNCN) — filed within 90 days of fiscal year-end. For calendar-year companies the deadline is 31 March of the following year. The annual return reconciles provisional CIT to actual liability, calculates any additional tax owed or refund due, and triggers the annual audit package.",
        "Late filing of the finalisation return triggers penalties of VND 5–25 million per return. Late payment triggers late-payment interest at 0.03% per day. Continued non-compliance can lead to enforcement including suspension of the tax code and seizure of bank accounts.",
        "Companies with revenue below VND 50 billion in the prior calendar year may file quarterly rather than monthly VAT, but CIT remains on the quarterly provisional + annual finalisation cycle regardless of revenue.",
      ],
    },
    {
      id: "deductions",
      heading: "Deductions and non-deductible expenses",
      body: [
        "Vietnamese CIT allows deduction of expenses that are 'related to the generation of revenue' and supported by proper documentation. Deductible expenses include: cost of goods sold, staff costs (with PIT/SI properly withheld), rent, utilities, depreciation, professional fees, interest (subject to thin-cap and EBITDA limits), marketing, R&D, and insurance.",
        "Common non-deductible expenses include: PIT on behalf of employees (where the company pays the employee's tax), fines and penalties (except for civil contract penalties), depreciation exceeding the regulatory ceiling, expenses without proper documentation (e.g. invoices that fail VAT validation), expenses related to non-business activities, and provisions not aligned with VAS.",
        "Inter-company charges are deductible if arm's length, supported by a service agreement, and supported by transfer-pricing documentation. The GDT routinely challenges inter-company charges without contemporaneous documentation.",
        "Entertainment expenses are deductible up to a regulatory ceiling (currently 1% of deductible expenses for entertainment in some sectors, with specific caps for advertising). We help clients model the deduction strategy within the regulatory framework.",
      ],
    },
    {
      id: "losses",
      heading: "Loss carryforward rules",
      body: [
        "Tax losses can be carried forward for up to 5 consecutive years and offset against future taxable profit. Carryback is not permitted. Losses that are not utilised within 5 years expire.",
        "Losses transferred in a merger or consolidation generally follow the surviving entity, subject to specific conditions. The merger must be documented in accordance with the Law on Enterprise and the assets/transferred losses must be substantiated.",
        "The 5-year carryforward is generous by regional standards. However, the rule applies strictly — losses cannot be transferred to a related entity, cannot be sold, and cannot be used to offset income outside the entity that incurred them.",
        "We model the loss-utilisation timeline for clients at incorporation and during restructuring. A common pitfall is failure to claim loss carryforward in the finalisation return; the GDT does not apply carryforward automatically.",
      ],
    },
    {
      id: "transfer-pricing",
      heading: "Transfer pricing and CIT",
      body: [
        "Transfer pricing is one of the most heavily audited areas of CIT in Vietnam. The GDT applies the arm's-length principle under Decree 132/2020 and Decree 132/2020/ND-CP. Companies with related-party transactions of VND 50 billion or more in a fiscal year must prepare a contemporaneous Local File.",
        "Common TP adjustments the GDT makes: management fee mark-ups challenged as non-arm's length, royalty rates challenged as above market, intra-group services challenged as duplicative or shareholder activities, and financial arrangements (interest, guarantees) challenged as non-arm's length.",
        "TP audit defence requires robust documentation: benchmarking studies, inter-company agreements, benefit-test analysis for services, and functional analysis. We prepare Local Files, Master Files, and CbCR notifications, and represent clients in TP audits.",
      ],
    },
    {
      id: "thin-cap",
      heading: "Thin capitalisation and interest deduction",
      body: [
        "Vietnam applies two related restrictions on related-party interest:",
        "Debt-to-equity ratio — related-party debt exceeding 3:1 net assets (5:1 for certain industries) is treated as thin capitalisation. The interest on the excess is not deductible.",
        "Interest-deduction cap — under Decree 132/2020, related-party interest is deductible only up to 30% of EBITDA. Interest above the cap is carried forward for up to 5 years (subject to the EBITDA cap each year).",
        "The GDT increasingly challenges related-party interest on audit. Compliance requires: a documented debt policy, arm's-length interest rate, debt-to-equity compliance, and EBITDA-cap modelling.",
      ],
    },
    {
      id: "withholding",
      heading: "Withholding tax on payments to foreign parties",
      body: [
        "Vietnam imposes withholding tax on certain payments to foreign parties: dividends (0% under domestic law), interest (typically 10%, reduced by treaty), royalties (typically 10%, reduced by treaty to 5–10%), and fees for services performed in Vietnam (FCT, see our Foreign Contractor Tax guide).",
        "Treaty relief is available where the foreign recipient's home country has a tax treaty with Vietnam and the recipient qualifies for the lower rate. The recipient must provide a Certificate of Residence from its home tax authority, and the Vietnamese payer must submit the CoR with the withholding declaration.",
        "Failure to withhold triggers the payer's liability for the unwithheld amount plus penalties. The payer's recovery against the foreign recipient is contractual but typically difficult in practice.",
      ],
    },
    {
      id: "audit-defence",
      heading: "GDT audit defence playbook",
      body: [
        "A GDT audit typically runs 30–90 days for a single year and covers CIT, VAT, FCT, and PIT. The audit is triggered by: the random selection, a complaint, an industry-wide review, or the company's first-time filing pattern.",
        "Audit defence starts before the audit. We help clients prepare an audit-ready file: organised documentation, pre-audit compliance review, and identification of issues to disclose proactively. Once the audit begins, the priorities are: respond to information requests promptly, present documentation professionally, and escalate to senior GDT officials where appropriate.",
        "Most GDT audits conclude with adjustments of 5–15% of declared tax. Larger adjustments are reserved for serious non-compliance. GDT assessments exceeding VND 50 billion are typically resolved through the appeal process, with substantial reductions achievable on proper documentation.",
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common CIT mistakes",
      body: [
        "The most expensive CIT mistakes we see: (1) failing to claim treaty relief on inter-company payments, (2) deducting inter-company charges without arm's-length documentation, (3) missing the loss-carryforward claim in the finalisation return, (4) over-claiming VAT input credit and creating a CIT adjustment, (5) treating the parent's invoice to the local entity as the same as the local entity's own expenses, (6) failing to register eligible CIT incentives at IRC application.",
        "The most common avoidable CIT penalty: late filing of the finalisation return. The penalty is small (VND 5–25 million) but signals broader non-compliance to the GDT and triggers follow-up audits.",
        "The most expensive avoidable CIT penalty: claiming tax incentives you do not qualify for. The GDT assesses back tax, interest, and a 1–3x penalty. VND 50 billion+ assessments for overstated incentives are not uncommon in major audits.",
      ],
    },
  ],
  faqs: [
    makeFaq("What is the standard CIT rate in Vietnam?", "The standard CIT rate in Vietnam is 20%. Reduced rates of 10%, 15%, and 17% apply to projects in encouraged sectors or geographic zones, subject to advance application and registration with the GDT."),
    makeFaq("When is the CIT finalisation return due?", "The annual CIT finalisation return (Form 03/QTT-TNCN) must be filed within 90 days from the end of the fiscal year. For calendar-year companies the deadline is 31 March of the following year. Late filing triggers penalties of VND 5–25 million and late-payment interest."),
    makeFaq("Are foreign-owned companies subject to different CIT rules?", "No, foreign-owned companies are taxed at the same 20% CIT rate as domestic companies. However, they face additional obligations: transfer pricing documentation, capital account reporting to the SBV, and the foreign contractor withholding regime when engaging local service providers."),
    makeFaq("What CIT incentives are available for FDI?", "Common incentives: 10% rate for high-tech projects and software; 15% rate for encouraged zones; tax holidays of 2–6 years; and 50% reduction for up to 9 subsequent years. Eligibility requires advance application at the IRC stage."),
    makeFaq("How are losses carried forward?", "Tax losses can be carried forward for up to 5 consecutive years and offset against future taxable profit. Carryback is not permitted. Losses transferred in a merger generally follow the surviving entity."),
    makeFaq("What is the CIT treatment of inter-company service fees?", "Inter-company service fees are deductible if arm's length, supported by a service agreement and benefit-test documentation. The GDT routinely challenges fees without contemporaneous documentation."),
    makeFaq("Can a foreign-owned company be exempt from CIT in the first year?", "A company with a first-year loss has no CIT payable but must still file the finalisation return. Genuine CIT exemption requires an eligible tax-holiday project."),
    makeFaq("How is capital gains on asset transfer taxed?", "Capital gains from the transfer of capital in a Vietnamese entity are taxed as ordinary CIT at 20%. The taxable gain is the transfer price less the cost of the capital contributed. Failure to declare triggers back taxes, interest, and penalties."),
    makeFaq("What is Vietnam's thin-capitalisation rule?", "Related-party debt exceeding 3:1 net assets (5:1 for certain industries) is treated as thin capitalisation. The interest on the excess is not deductible. Related-party interest is also capped at 30% of EBITDA under Decree 132/2020."),
    makeFaq("What happens if CIT is paid late?", "Late payment interest is 0.03% per day (approximately 10.95% per year). Continued non-payment can lead to enforcement including suspension of the tax code and seizure of bank accounts."),
  ],
  relatedPillars: [
    ...allPillars.filter((p) => p.slug !== "corporate-income-tax").slice(0, 6),
  ],
  relatedServices: allServices.slice(0, 6),
  countries,
  industries,
  datePublished: today,
  dateModified: today,
};

// Export all pillars as a record
export const pillarPages: Record<string, PillarPageData> = {
  "corporate-income-tax": citPillar,
};

// ============================================================================
// Helper to build a pillar from a smaller config so we don't repeat ourselves
// ============================================================================

const pillarDefaults = {
  datePublished: today,
  dateModified: today,
};

// 2. VAT
pillarPages["vat"] = {
  ...pillarDefaults,
  slug: "vat",
  path: "/guides/vat",
  title: "Vietnam VAT Guide for Foreign Companies (2026)",
  description: "Complete guide to Vietnam Value Added Tax (VAT) for foreign-owned companies: 0%, 5%, 8%, 10% rates, declaration cycles, input credit rules, refund eligibility, and FCT for foreign suppliers.",
  keywords: ["Vietnam VAT", "Vietnam value added tax", "VAT rates Vietnam", "VAT refund Vietnam", "VAT input credit Vietnam", "FCT VAT"],
  heroEyebrow: "Pillar Guide",
  heroTitle: "Vietnam Value Added Tax (VAT)",
  heroItalic: "the complete guide",
  heroDescription: "How VAT works in Vietnam for foreign-owned companies — rates, declaration cycles, input-credit rules, refund eligibility, and the foreign-contractor VAT regime.",
  tableOfContents: [
    { id: "what-is-vat", label: "What is VAT in Vietnam?" },
    { id: "rates", label: "VAT rates: 0%, 5%, 8%, 10%" },
    { id: "methods", label: "Credit method vs. deduction method" },
    { id: "filing", label: "Filing cycle: monthly and quarterly" },
    { id: "input-credit", label: "Input VAT credit rules" },
    { id: "refunds", label: "When VAT refunds are available" },
    { id: "exports", label: "Exports and 0% VAT" },
    { id: "fct", label: "Foreign Contractor Tax (VAT component)" },
    { id: "e-invoices", label: "E-invoices and validation" },
    { id: "common-mistakes", label: "Common VAT mistakes" },
    { id: "faq", label: "Frequently asked questions" },
  ],
  intro:
    "Value Added Tax (VAT) is the headline indirect tax in Vietnam. The standard rate is 10%, with reduced rates of 5% and 8% applied to specified categories and 0% applied to exports. This guide explains how VAT works in practice for foreign-owned companies: which rates apply, how the credit and deduction methods differ, how the declaration cycle operates, how to claim input credits, when refunds are available, and how the foreign-contractor VAT regime interacts with the regular VAT system. We have written it for CFOs, controllers, tax managers, and accounts payable leads of foreign-owned companies in Vietnam — the people who own the actual VAT number and need to know what is creditable, what is refundable, and what is exposed on GDT audit.",
  sections: [
    {
      id: "what-is-vat",
      heading: "What is VAT in Vietnam?",
      body: [
        "Value Added Tax (VAT) is an indirect tax levied on the value added at each stage of production and distribution. It is governed by the Law on Value Added Tax (Law 13/2008/QH12, as amended) and its implementing regulations including Decree 209/2013 and Circular 219/2013. The tax is administered by the GDT alongside CIT.",
        "VAT is collected at each stage of the supply chain, with input credits offset against output tax. The end consumer effectively bears the tax. For business-to-business transactions, VAT is typically a flow-through — the seller collects, the buyer claims credit, the net is paid to the GDT.",
        "VAT is imposed on: goods and services used for production, trading, and consumption in Vietnam (including imported goods and services); exports (at 0%). VAT is not imposed on certain categories (financial services, certain medical services, public transport, real-estate transfers under specific conditions, etc.).",
        "Vietnamese VAT uses two calculation methods: the credit method (default for most businesses) and the deduction method (available to small and medium enterprises below a turnover threshold). Most FDI companies use the credit method.",
      ],
    },
    {
      id: "rates",
      heading: "VAT rates: 0%, 5%, 8%, 10%",
      body: [
        "Vietnam applies four VAT rates: 0%, 5%, 8%, and 10%. The 8% rate is a transitional rate applied to selected categories from 1 February 2025 through 31 December 2026, reverting to 10% from 1 January 2027.",
        "0% rate — applied to exports of goods and services; international transportation; construction and installation for foreign entities; certain services rendered abroad. The 0% rate is also called 'zero-rated' — the seller charges 0% but remains entitled to input credit.",
        "5% rate — applied to essential goods and services including: clean water, fertiliser, certain medical equipment, certain agricultural products, scientific/technical services, certain cultural/artistic services, certain transport services, and certain financial services.",
        "8% rate (transitional, 1 Feb 2025 – 31 Dec 2026) — applied to selected items previously at 10% including: certain food products, certain consumer goods, certain services (lodging, restaurants, tourism). The list is defined in the law and its amendments.",
        "10% rate (standard) — applied to all goods and services not subject to 0%, 5%, or 8%. This is the default rate and applies to most B2B services, professional fees, most consumer goods, and most imports.",
      ],
    },
    {
      id: "methods",
      heading: "Credit method vs. deduction method",
      body: [
        "Under the credit method (default for most businesses), the company pays VAT on outputs (sales) and claims credit for input VAT on business purchases. Net VAT payable = output VAT - input VAT credit.",
        "Under the deduction method (available to small and medium enterprises below a turnover threshold of VND 1 billion for goods or VND 2 billion for services per year), VAT is calculated as a fixed percentage of revenue (e.g. 1% for distribution, 3% for certain services). Input credit is NOT claimed under the deduction method.",
        "Most FDI companies use the credit method. The deduction method is simpler administratively but rarely advantageous for businesses with significant input purchases. We help clients model both methods at incorporation.",
        "Once chosen, the method is locked in for a defined period (typically 2 years). Switching methods requires advance registration and GDT approval.",
      ],
    },
    {
      id: "filing",
      heading: "Filing cycle: monthly and quarterly",
      body: [
        "VAT returns are filed monthly by default. Quarterly filing is available for companies with revenue below VND 50 billion in the prior calendar year, with returns due by the last day of the month following the quarter end.",
        "Monthly VAT returns (Form 01/GTGT) are due by the 20th day of the following month. Late filing triggers penalties of VND 1–25 million depending on the days late. Late payment triggers late-payment interest at 0.03% per day.",
        "Quarterly VAT returns are due by the last day of the month following the quarter end. The Q1 return is due 30 April, Q2 by 31 July, Q3 by 31 October, Q4 by 31 January of the following year.",
        "Output VAT is the VAT collected from customers on sales; this is the company's liability regardless of whether collected from the customer. Input VAT is the VAT paid on business purchases, claimed as credit subject to documentation and validation.",
      ],
    },
    {
      id: "input-credit",
      heading: "Input VAT credit rules",
      body: [
        "Input VAT is creditable where: (1) the invoice is valid (correct form, content, supplier tax code); (2) the underlying purchase is for a deductible business purpose; (3) the goods/services are received; and (4) payment is supported.",
        "Common reasons for input VAT denial: invalid invoice (missing tax code, wrong format, supplier not registered), expense not for business purpose (e.g. personal expenses), goods/services not received, payment not supported, expense for non-deductible category.",
        "The GDT routinely audits input VAT claims. The most common audit findings: invoices from blacklisted suppliers (not on the GDT database), invoices with the wrong tax code, expenses without supporting documentation, and double-claim of the same invoice.",
        "We help clients implement a pre-validation step: each input VAT claim is reviewed against the GDT's e-invoice database, the supplier's tax-code status is checked, and the documentation is bundled. This dramatically reduces the risk of denial on audit.",
      ],
    },
    {
      id: "refunds",
      heading: "When VAT refunds are available",
      body: [
        "VAT refunds are available for: (1) FDI projects in pre-revenue phase in encouraged industries; (2) exporters with input VAT exceeding output VAT; (3) certain other categories including ODA projects, foreign diplomatic missions, and certain specific industries.",
        "General businesses (non-exporters, non-encouraged) cannot claim refunds of accumulated input VAT credits. The credits carry forward indefinitely and offset against future output VAT.",
        "Exporters (defined under the law) can claim refunds when input VAT exceeds output VAT. The refund is processed by the provincial tax department where the company is registered. The timeline is typically 2–6 months, depending on documentation and audit history.",
        "Pre-revenue FDI projects in encouraged industries (high-tech, software, certain R&D) can claim refunds of input VAT accumulated during the pre-revenue phase. The refund requires documentation of the encouraged-industry status (IRC, GDT registration) and a clean audit trail.",
      ],
    },
    {
      id: "exports",
      heading: "Exports and 0% VAT",
      body: [
        "Exports of goods are zero-rated (0% VAT) where the goods leave Vietnam and supporting documentation is retained. The documentation typically includes: the export contract, the customs declaration, the bill of lading, and the payment receipt.",
        "Services consumed outside Vietnam may also qualify for 0% VAT. Common examples: advertising for foreign clients, training for foreign clients, consulting for foreign clients, certain financial services rendered abroad. The company must retain documentation proving the service was consumed abroad — typically the contract, beneficiary location, and payment evidence.",
        "The 0% VAT rate does NOT mean the seller is exempt from VAT — the seller remains entitled to input credit. The 0% rate means the seller charges 0% on the export but does not pay VAT on the export sale; the seller can still claim input credits.",
      ],
    },
    {
      id: "fct",
      heading: "Foreign Contractor Tax (VAT component)",
      body: [
        "Foreign contractors providing services in Vietnam without a Vietnamese permanent establishment are subject to Foreign Contractor Tax (FCT). The VAT component of FCT is 5% (deemed) or actual 10% (direct filer).",
        "The deemed FCT regime is the default for foreign contractors without a PE: VAT 5% + PIT 5% = 10% total. The Vietnamese payer withholds and remits FCT on the payment to the foreign contractor.",
        "Direct filer regime: foreign contractors with a Vietnamese PE can register as direct filers and pay VAT at 10% on actual revenue and CIT at 20% on actual profit. The direct filer regime is typically more favourable for profitable operations and is the regime we recommend for most cases where the foreign contractor has substance in Vietnam.",
        "The FCT rules are covered in detail in our Foreign Contractor Tax guide.",
      ],
    },
    {
      id: "e-invoices",
      heading: "E-invoices and validation",
      body: [
        "Vietnam mandates the use of e-invoices (electronic invoices) for B2B transactions. The e-invoice must be issued through the GDT's portal or via a GDT-authorised e-invoice provider. The e-invoice contains: invoice number, issue date, seller and buyer details (name, tax code, address), description of goods/services, quantity, unit price, VAT rate, and VAT amount.",
        "E-invoice validation is the process of confirming that the e-invoice is properly issued and registered with the GDT. The GDT publishes a database of valid e-invoices that can be queried by tax code, invoice number, or other criteria.",
        "The company's input VAT credit is denied where the underlying e-invoice is invalid. Pre-validation of supplier invoices is a standard control we implement for clients.",
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common VAT mistakes",
      body: [
        "The most expensive VAT mistakes we see: (1) claiming input VAT on invalid invoices (denied on audit), (2) failing to charge VAT on deemed-supply transactions (gifts, samples, internal use), (3) claiming VAT refunds for ineligible categories, (4) missing the deadline for refund applications, (5) treating inter-company recharges as exempt when they are taxable.",
        "The most common avoidable VAT penalty: late filing. The penalty is small (VND 1–25 million) but the broader signal is poor compliance. The GDT uses late filing as a trigger for deeper review.",
        "The most expensive avoidable VAT penalty: claiming a refund you are not entitled to. The GDT assesses back tax, interest, and a 1–3x penalty. We have seen VND 100 billion+ assessments for fabricated refund claims.",
      ],
    },
  ],
  faqs: [
    makeFaq("What are the VAT rates in Vietnam?", "Vietnam applies four VAT rates: 0% (exports and certain international transport), 5% (essential goods and services), 8% (a transitional rate applied to selected items 1 Feb 2025 – 31 Dec 2026), and 10% (the standard rate)."),
    makeFaq("What is the difference between the credit and deduction methods?", "Under the credit method (default for most businesses), the company pays VAT on outputs and claims credit for input VAT on business purchases. Under the deduction method (available to SMEs below a turnover threshold), VAT is calculated as a fixed percentage of revenue; input credit is NOT claimed."),
    makeFaq("When is the monthly VAT return due?", "Monthly VAT returns (Form 01/GTGT) are due by the 20th day of the following month. Quarterly filing is available for companies with revenue below VND 50 billion in the prior calendar year."),
    makeFaq("Can export zero-rated VAT be claimed on services consumed overseas?", "Yes, certain services consumed outside Vietnam (advertising, training, consulting for foreign clients, certain financial services) may qualify for 0% VAT. Documentation proving foreign consumption must be retained."),
    makeFaq("How is input VAT recovered on invalid invoices?", "Input VAT on invalid or non-compliant invoices is not creditable. The company must request a corrected invoice from the supplier. Alternative adjustments with supporting evidence may be permitted by the GDT."),
    makeFaq("Are bad debts creditable for VAT?", "Yes, input VAT paid on bad debts that meet the statutory conditions (genuine, written off in accounting, pursued for recovery, more than 6 months past due) is refundable. The procedure requires a written application, supporting documents, and tax-authority review."),
    makeFaq("What is the VAT treatment of e-commerce?", "Foreign e-commerce suppliers without a Vietnamese PE must register for VAT via the GDT portal, declare and pay VAT quarterly, and appoint a tax representative. Domestic platforms must withhold tax on behalf of individual sellers."),
    makeFaq("Can a startup with no sales recover input VAT?", "Companies in pre-revenue phase accrue input VAT credits and may carry them forward indefinitely. Refund of accumulated input VAT is restricted to specific categories (exports, FDI in pre-revenue phase in encouraged industries)."),
    makeFaq("How are VAT refunds claimed?", "VAT refunds are claimed via a dedicated refund application filed with the provincial tax department. The application includes the refund request, supporting documentation, and a tax calculation. The GDT reviews and processes within 2–6 months."),
    makeFaq("What is the penalty for late VAT filing?", "Late filing penalties range from VND 1–25 million depending on the days late. Late payment triggers late-payment interest at 0.03% per day."),
  ],
  relatedPillars: [
    ...allPillars.filter((p) => p.slug !== "vat").slice(0, 6),
  ],
  relatedServices: allServices.filter((s) => s.href.includes("vat") || s.href.includes("tax") || s.href.includes("accounting")),
  countries,
  industries,
};

// 3. PAYROLL & PIT (combined)
pillarPages["payroll"] = {
  ...pillarDefaults,
  slug: "payroll",
  path: "/guides/payroll",
  title: "Vietnam Payroll & Personal Income Tax Guide for Foreign Companies",
  description: "Complete guide to Vietnam payroll and PIT for foreign-owned companies: progressive rates, withholding, social insurance, expatriate tax, year-end finalisation, and labour-code compliance.",
  keywords: ["Vietnam payroll", "Vietnam PIT", "Vietnam personal income tax", "Vietnam social insurance", "Vietnam expatriate tax", "Vietnam payroll service"],
  heroEyebrow: "Pillar Guide",
  heroTitle: "Vietnam Payroll & Personal Income Tax",
  heroItalic: "the complete guide",
  heroDescription: "How payroll and personal income tax work in Vietnam for foreign-owned companies — from monthly withholding through social insurance, expatriate tax, and year-end finalisation.",
  tableOfContents: [
    { id: "pit-rates", label: "PIT rates and brackets" },
    { id: "tax-residency", label: "Tax residency: 183-day rule" },
    { id: "monthly-withholding", label: "Monthly PIT withholding" },
    { id: "year-end-finalisation", label: "Year-end PIT finalisation" },
    { id: "expatriates", label: "Expatriate tax and equalisation" },
    { id: "social-insurance", label: "Social insurance contributions" },
    { id: "benefits", label: "Taxable benefits and exemptions" },
    { id: "split-payroll", label: "Split payroll: offshore and onshore" },
    { id: "esop", label: "ESOP and RSU taxation" },
    { id: "common-mistakes", label: "Common payroll mistakes" },
    { id: "faq", label: "Frequently asked questions" },
  ],
  intro:
    "Payroll and Personal Income Tax (PIT) in Vietnam operate on a progressive rate structure from 5% to 35%. This guide explains how PIT works in practice for foreign-owned companies: the rate brackets, tax residency rules, monthly withholding, year-end finalisation, expatriate tax (including the 183-day rule and tax equalisation), social insurance contributions, taxable benefits, and the special rules for ESOPs and RSUs. We have written it for HR directors, payroll managers, and CFO controllers of foreign-owned companies in Vietnam — the people who run the actual payroll and need to know what is taxable, what is exempt, and how to handle the expatriate dimension that most FDI payrolls involve.",
  sections: [
    {
      id: "pit-rates",
      heading: "PIT rates and brackets",
      body: [
        "Vietnamese Personal Income Tax is progressive with 7 brackets:",
        "5% on taxable income from VND 0–5 million / month (VND 0–60 million / year)",
        "10% on VND 5–10 million / month (VND 60–120 million / year)",
        "15% on VND 10–18 million / month (VND 120–216 million / year)",
        "20% on VND 18–32 million / month (VND 216–384 million / year)",
        "25% on VND 32–52 million / month (VND 384–624 million / year)",
        "30% on VND 52–80 million / month (VND 624–960 million / year)",
        "35% on VND 80 million+ / month (VND 960 million+ / year)",
        "Taxable income is gross income less the personal deduction (VND 11 million / month for the employee, VND 4.4 million / month per dependent) and any tax-deductible contributions (mandatory SI, voluntary retirement, charitable contributions).",
        "PIT is computed on a monthly basis for employment income (with annual finalisation to reconcile) and on a transaction basis for non-employment income (e.g. capital gains, freelance fees).",
      ],
    },
    {
      id: "tax-residency",
      heading: "Tax residency: the 183-day rule",
      body: [
        "An individual becomes a Vietnam tax resident if present for 183 days or more in a calendar year (or any 12-month period from arrival), or has a permanent residence in Vietnam, or has a registered rental of 90+ days with no intention to leave. The determination is made for each 'tax year' which is the calendar year.",
        "Residents are taxed on worldwide income. Non-residents are taxed only on Vietnam-source income at a flat 20% rate on employment income (or treaty rate).",
        "For an assignee on a typical 2–3 year Vietnam assignment, the determination usually flips during the assignment: non-resident in year 1 (less than 183 days), resident from year 2 onwards. The transition creates complex PIT obligations that we model and reconcile.",
        "The 'split residency' determination is one of the most common sources of PIT error. A short assignment extension can tip the determination; we recalculate the determination for each calendar year and adjust the PIT regime accordingly.",
      ],
    },
    {
      id: "monthly-withholding",
      heading: "Monthly PIT withholding",
      body: [
        "The employer is the PIT withholding agent. Monthly PIT is calculated on each employee's taxable income, applying the progressive rate schedule, and remitted to the tax authority by the 20th of the following month.",
        "PIT is withheld in VND regardless of the currency of payment. Foreign-currency-paid employees have their salary converted to VND at the SBV central rate for PIT calculation.",
        "The monthly PIT declaration (Form 05/KK-TNCN) lists each employee, their taxable income, the PIT amount, and the total remittance. The declaration is filed alongside the monthly VAT return.",
        "Common errors: withholding PIT on allowances that are exempt (e.g. one-off TET bonus up to 3 months' salary, mid-shift meals up to a cap), failing to withhold PIT on taxable benefits (housing, school fees, transportation), and using the wrong exchange rate.",
      ],
    },
    {
      id: "year-end-finalisation",
      heading: "Year-end PIT finalisation",
      body: [
        "PIT finalisation reconciles monthly withholding to actual annual liability. The annual return (Form 02/QTT-TNCN for residents, Form 02/NTNN for non-residents) is filed by the employee within 90 days of year-end, or by the employer (with authorisation) within the same window.",
        "Most expatriate employees authorise the employer to file on their behalf. The employer prepares the finalisation based on actual income, deductions, and dependents. The employee reviews and signs the authorisation.",
        "The finalisation calculates: actual annual PIT liability, total monthly withholding paid, refund (if over-withheld) or additional tax (if under-withheld). The balance is settled with the tax authority.",
        "An expatriate leaving Vietnam mid-year must finalise before departure. Failure to finalise can block TRC issuance and create personal tax liability. We handle pre-departure finalisation for all assignee clients.",
      ],
    },
    {
      id: "expatriates",
      heading: "Expatriate tax and equalisation",
      body: [
        "Expatriate PIT follows the same progressive rates as residents. The tax base includes salary, allowances (housing, transportation, schooling, cost of living, tax equalisation payments), and benefits-in-kind. Most FDI expat packages are heavily weighted in allowances, which are fully taxable.",
        "Tax equalisation is a policy under which the employer ensures the expatriate's after-tax position is the same as if they had remained in their home country. The employer pays the higher of home-country tax or Vietnam tax; the expatriate's net is set at the home-country equivalent. The gross-up calculation models both regimes and produces the equalised salary.",
        "The 'hypo-tax' register is the monthly schedule of hypothetical tax calculations for each expatriate. It is reconciled quarterly and used for year-end finalisation. We maintain hypo-tax registers for clients with multi-expat assignments.",
        "Tax-equalisation payments from the employer to the expatriate are themselves taxable in Vietnam, creating a circular calculation that requires careful modelling. The standard approach is to gross-up the equalisation to keep the expatriate whole after Vietnam PIT.",
      ],
    },
    {
      id: "social-insurance",
      heading: "Social insurance contributions",
      body: [
        "Total SI contributions are 32.5% of insurable salary (capped at 20x base salary, currently VND 46.8 million): employer 21.5% (SI 17.5% + HI 3% + UI 1%), employee 10.5% (SI 8% + HI 1.5% + UI 1%). Trade-union fees add 2% of base salary (employer).",
        "Foreign employees with work permits or exemption certificates became subject to mandatory SI from 1 July 2025 under amendments to the Social Insurance Law. Pre-2025, foreign employees were exempt in practice.",
        "Insurable salary is contractual salary plus fixed allowances (housing, transportation, meals if fixed, position, seniority) up to the cap. One-off bonuses and certain benefits are excluded.",
        "SI is declared monthly via the SI agency's e-portal, due by the 25th of the following month. Late payment triggers late-payment interest and penalties. SI audits are common and can result in material assessments for unpaid contributions.",
      ],
    },
    {
      id: "benefits",
      heading: "Taxable benefits and exemptions",
      body: [
        "Taxable benefits include: housing allowance (taxed at actual or deemed rent), school fees (taxed unless paid directly to school under certain conditions), transportation allowance (taxed unless actual cost), home-leave flights (taxed), cost-of-living allowance (taxed), tax equalisation (taxed), and interest-free or low-interest loans from employer (taxed on the difference between market and actual interest).",
        "Exempt benefits include: one-off TET bonus up to 3 months' average salary, mid-shift meals up to a regulatory cap (currently VND 730,000/month), business travel reimbursements, training costs, and certain welfare benefits.",
        "Common errors: failing to tax housing when provided, treating school fees as exempt by default, missing the loan-benefit calculation. We conduct annual benefits reviews for clients to ensure compliance.",
      ],
    },
    {
      id: "split-payroll",
      heading: "Split payroll: offshore and onshore",
      body: [
        "Split payroll is a common arrangement where an assignee's salary is partly paid offshore (by the home country) and partly paid onshore (by the Vietnam entity). The Vietnam entity withholds PIT only on the onshore portion; the home country handles home-country obligations.",
        "Split payroll creates complexity in the PIT calculation: the home country and Vietnam both have a claim on the same economic income. The standard approach is to allocate the salary based on days in each country, document the split, and reconcile annually.",
        "We model split-payroll scenarios at the start of each assignment and reconcile at year-end. The hypo-tax register captures the split and ensures that the employer's tax-equalisation policy is correctly applied.",
      ],
    },
    {
      id: "esop",
      heading: "ESOP and RSU taxation",
      body: [
        "ESOPs are taxed at vesting. The taxable amount is the fair market value at vesting less any exercise price paid. The employer withholds PIT at vesting and declares monthly. Cash settlement is taxed at receipt.",
        "RSUs are taxed at delivery (when the shares are delivered to the employee). The taxable amount is the fair market value at delivery. Withholding applies at delivery.",
        "For Vietnamese tax residents working for Vietnamese employers, ESOP/RSU income is Vietnam-source employment income and subject to PIT. For assignees on Vietnam assignment, the income is also Vietnam-source and subject to PIT in Vietnam, even if the shares are issued by the home-country parent.",
        "The valuation at vesting/delivery requires a defensible fair-market-value determination. The employer's transfer agent typically provides the valuation; the GDT may challenge the valuation if it appears understated.",
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common payroll mistakes",
      body: [
        "The most expensive payroll mistakes we see: (1) misclassifying employees as contractors (Vietnam PIT/VAT implications), (2) failing to tax benefits (housing, school, transportation), (3) wrong FX rate for foreign-currency salary, (4) failing to finalise PIT on departure, (5) incorrect SI declarations.",
        "The most common avoidable penalty: late SI declaration. The penalty is small but triggers SI audits. SI audits can be more disruptive than CIT audits because they review employment contracts and salary records for every employee.",
        "The most expensive avoidable penalty: failing to withhold PIT on taxable benefits. The GDT assesses the under-withheld PIT plus penalties. The benefit amount is also added back to the employee's PIT base, creating compounding exposure.",
      ],
    },
  ],
  faqs: [
    makeFaq("What are the PIT rates in Vietnam?", "Vietnamese PIT is progressive: 5% (0–5m VND), 10% (5–10m), 15% (10–18m), 20% (18–32m), 25% (32–52m), 30% (52–80m), 35% (80m+). Taxable income is gross less personal deduction (VND 11m/month) and dependent deductions (VND 4.4m/month each)."),
    makeFaq("When does an expatriate become a Vietnam tax resident?", "An individual becomes a Vietnam tax resident if present for 183 days or more in a calendar year (or 12-month period), or has a permanent residence in Vietnam, or has a registered rental of 90+ days. Residents are taxed on worldwide income; non-residents on Vietnam-source income at a flat 20% rate."),
    makeFaq("How is expatriate PIT calculated?", "Expatriate PIT follows the same progressive rates as residents. The tax base includes salary, allowances (housing, transportation, schooling, cost of living), and benefits-in-kind. Tax equalisation payments are also taxable."),
    makeFaq("What is the SI rate for foreign employees?", "Foreign employees with work permits or exemption certificates are subject to mandatory SI from 1 July 2025 at the same rates as local employees: 32.5% total (employer 21.5%, employee 10.5%) on insurable salary capped at 20x base salary."),
    makeFaq("Are housing and school fees taxable?", "Yes, housing allowance is taxable at actual or deemed rent. School fees are taxable unless paid directly to the school under specific conditions. Most FDI packages treat both as taxable benefits."),
    makeFaq("What is a hypo-tax register?", "A hypo-tax register is the monthly schedule of hypothetical tax calculations for each expatriate, showing the actual home-country tax (or estimated), the actual Vietnam tax, the equalised net income, and the employer's gross-up."),
    makeFaq("How are ESOPs taxed in Vietnam?", "ESOPs are taxed at vesting. The taxable amount is the fair market value at vesting less any exercise price paid. The employer withholds PIT at vesting. Cash settlement is taxed at receipt."),
    makeFaq("What happens when an expatriate leaves Vietnam?", "The expatriate must complete PIT finalisation before departure. The employer reconciles monthly withholding to actual liability, files the finalisation, and obtains a tax-clearance certificate from the tax authority. Failure to finalise can block TRC issuance."),
    makeFaq("Can split payroll be used?", "Yes. Split payroll is common for assignees: salary is partly paid offshore and partly onshore, with PIT withheld only on the onshore portion. Allocation is typically based on days in each country."),
    makeFaq("What is the personal income tax deduction for dependents?", "A tax deduction of VND 4.4 million/month is available for each qualified dependent (spouse, minor children, parents in some cases). The deduction is registered with the employer and the tax authority."),
  ],
  relatedPillars: allPillars.filter((p) => p.slug !== "payroll").slice(0, 6),
  relatedServices: allServices.filter((s) => s.href.includes("payroll") || s.href.includes("tax")),
  countries,
  industries,
};

// 4. PERSONAL INCOME TAX (PIT)
pillarPages["personal-income-tax"] = {
  ...pillarDefaults,
  slug: "personal-income-tax",
  path: "/guides/personal-income-tax",
  title: "Vietnam Personal Income Tax (PIT) Guide: Rates, Residency, Withholding",
  description: "Complete guide to Vietnam Personal Income Tax (PIT): progressive rates, residency rules, employment income, capital gains, dependents, year-end finalisation, and treaty relief.",
  keywords: ["Vietnam PIT", "Vietnam personal income tax", "Vietnam tax residency", "Vietnam capital gains tax", "Vietnam PIT finalisation"],
  heroEyebrow: "Pillar Guide",
  heroTitle: "Vietnam Personal Income Tax",
  heroItalic: "the complete guide",
  heroDescription: "How PIT works in Vietnam — from progressive rates and residency rules through employment income, capital gains, dependents, year-end finalisation, and treaty relief.",
  tableOfContents: [
    { id: "rates", label: "Progressive rates and brackets" },
    { id: "residents-vs-non-residents", label: "Residents vs. non-residents" },
    { id: "employment-income", label: "Employment income and withholding" },
    { id: "business-income", label: "Business / freelance income" },
    { id: "capital-gains", label: "Capital gains and securities" },
    { id: "dependents", label: "Dependent deductions" },
    { id: "treaty-relief", label: "Tax treaty relief" },
    { id: "common-mistakes", label: "Common PIT mistakes" },
    { id: "faq", label: "Frequently asked questions" },
  ],
  intro:
    "Vietnamese Personal Income Tax (PIT) is a direct tax on individuals. Residents are taxed on worldwide income; non-residents on Vietnam-source income. The progressive rate schedule from 5% to 35% applies to employment income. This guide explains how PIT works for foreign-owned companies and their employees: the rates, the residency rules, the employment and business income categories, capital gains treatment, dependent deductions, and the tax-treaty relief available to expatriates. We have written it for HR directors, payroll managers, and individual taxpayers who need to understand their actual obligation.",
  sections: [
    {
      id: "rates",
      heading: "Progressive rates and brackets",
      body: [
        "Employment income is taxed at progressive rates from 5% to 35%. The brackets are calculated monthly for withholding purposes and annually for finalisation.",
        "Non-employment income (business income, capital gains, royalties, interest, dividends) is taxed at flat rates from 0.1% to 25% depending on the category. Specific rules apply to each category.",
        "Personal deductions: VND 11 million/month for the employee, VND 4.4 million/month for each qualified dependent. The deductions are applied to the taxable income to arrive at the amount subject to progressive rates.",
        "Voluntary contributions: certain contributions to approved retirement funds and charitable organisations are deductible. Mandatory SI contributions are deductible.",
      ],
    },
    {
      id: "residents-vs-non-residents",
      heading: "Residents vs. non-residents",
      body: [
        "Resident determination is based on physical presence: 183 days or more in a calendar year, OR a permanent residence in Vietnam, OR a registered rental of 90+ days with no intention to leave.",
        "Residents are taxed on worldwide income. The tax is calculated on a monthly basis for employment income, with year-end finalisation. Worldwide income includes income earned abroad during the period of Vietnam residence.",
        "Non-residents are taxed only on Vietnam-source income at a flat 20% rate on employment income. Non-employment income is taxed at the same flat rates that apply to residents (e.g. 0.1% on securities gains, 5% on royalties).",
        "The transition from non-resident to resident mid-assignment creates complex obligations. We model the determination for each calendar year and adjust the withholding regime accordingly.",
      ],
    },
    {
      id: "employment-income",
      heading: "Employment income and withholding",
      body: [
        "Employment income includes: salary, allowances (housing, transportation, meals, position, seniority, school fees, cost of living), bonuses, stock-based compensation, and benefits-in-kind. Most FDI packages are heavily weighted in allowances, which are fully taxable.",
        "The employer withholds PIT monthly on the gross taxable income, applying the progressive rate schedule. The withholding is remitted to the tax authority by the 20th of the following month.",
        "Year-end finalisation reconciles monthly withholding to actual annual liability. For residents, the finalisation considers 12 months of income; for non-residents, only the Vietnam-source portion of the assignment.",
        "The tax code for individuals (MST) is required for all employees. The employer applies for the MST on the employee's behalf; the employee receives a tax code card and uses it for the finalisation return.",
      ],
    },
    {
      id: "business-income",
      heading: "Business / freelance income",
      body: [
        "Business income (from freelance, consulting, or independent services) is taxed at a flat rate. The rate depends on the activity: 0.1%–5% depending on the sector.",
        "Individuals with business income register with the tax authority and file quarterly returns. The tax is computed on revenue (not profit) under the simplified regime, or on profit under the regular regime if registered.",
        "For foreign individuals, business income sourced in Vietnam is taxed even if the individual is not a Vietnam resident. The withholding is typically by the Vietnamese payer.",
        "The distinction between 'employment' and 'business' income is critical. Misclassification is a common audit finding. We help clients structure contractor relationships to avoid misclassification risk.",
      ],
    },
    {
      id: "capital-gains",
      heading: "Capital gains and securities",
      body: [
        "Capital gains from the transfer of securities (listed shares, bonds, fund certificates) are taxed at 0.1% on the gross transfer price. The tax is withheld by the broker or the transfer agent at the time of sale.",
        "Capital gains from the transfer of capital in a Vietnamese unlisted company are taxed at 20% on the actual gain (transfer price less cost of capital). The transfer is a taxable event regardless of whether the gain is realised as cash or rolled over.",
        "Real estate gains are taxed at 2% on the transfer price (for individuals) or 20% on the gain (for entities). The 2% rate is widely criticised but remains in force.",
        "Capital gains on crypto assets are taxed under the securities framework (0.1%) for assets classified as securities, or under the personal-income framework for other assets. The classification is evolving.",
      ],
    },
    {
      id: "dependents",
      heading: "Dependent deductions",
      body: [
        "A deduction of VND 4.4 million/month is available for each qualified dependent: spouse, minor children, parents in some cases, siblings in some cases.",
        "Dependents must be registered with the employer and the tax authority. Registration requires documentation: birth certificates, marriage certificates, household registration, and a declaration of dependency.",
        "Only one taxpayer can claim each dependent. For separated families, the deduction is allocated by agreement. The employer maintains the dependent register and applies the deduction monthly.",
        "Mis-claiming dependents (e.g. an adult child who is not actually dependent) is a common audit finding. We conduct annual dependent reviews for clients with expat staff.",
      ],
    },
    {
      id: "treaty-relief",
      heading: "Tax treaty relief",
      body: [
        "Vietnam has DTAs with 80+ countries. The DTA typically reduces withholding tax on dividends, interest, and royalties, and may provide exemption for short-term assignees (less than 183 days in a 12-month period).",
        "To claim treaty relief, the foreign individual or entity must obtain a Certificate of Residence from its home tax authority and submit it to the Vietnamese payer. The CoR is typically valid for 1–2 years and must be renewed.",
        "Common treaty benefits: 0% withholding on dividends to a corporate parent (most DTAs), 5–10% on interest, 5–10% on royalties, exemption from PIT for short-term assignees.",
        "Treaty positions must be documented and updated annually. The GDT routinely reviews treaty positions on audit. We maintain treaty-claim calendars for clients.",
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common PIT mistakes",
      body: [
        "The most expensive PIT mistakes: (1) misclassification of employees as contractors, (2) failing to tax benefits, (3) wrong residency determination for short-term assignees, (4) failing to claim treaty relief, (5) incorrect dependent deductions.",
        "The most common avoidable penalty: late PIT remittance. The penalty is small but triggers PIT audits.",
        "The most expensive avoidable penalty: failing to withhold PIT on taxable benefits. The GDT assesses the under-withheld amount plus penalties on both the employer and the employee.",
      ],
    },
  ],
  faqs: [
    makeFaq("What are the PIT rates in Vietnam?", "Employment income is taxed at progressive rates: 5% (0–5m VND), 10% (5–10m), 15% (10–18m), 20% (18–32m), 25% (32–52m), 30% (52–52m), 35% (80m+). Personal deduction VND 11m/month, dependent deduction VND 4.4m/month each."),
    makeFaq("What is the 183-day rule?", "An individual is a Vietnam tax resident if present for 183 days or more in a calendar year (or any 12-month period from arrival), or has a permanent residence in Vietnam, or has a registered rental of 90+ days with no intention to leave."),
    makeFaq("Are residents taxed on worldwide income?", "Yes, residents are taxed on worldwide income at progressive rates. Non-residents are taxed only on Vietnam-source income at a flat 20% rate on employment income."),
    makeFaq("What is the capital gains tax rate on securities?", "Capital gains from the transfer of listed securities are taxed at 0.1% on the gross transfer price. The tax is withheld by the broker or transfer agent."),
    makeFaq("How is business income taxed?", "Business income from freelance or independent services is taxed at a flat rate (0.1%–5% depending on sector). The simplified regime taxes on revenue; the regular regime on profit."),
    makeFaq("How is tax treaty relief claimed?", "Treaty relief is claimed by obtaining a Certificate of Residence from the home tax authority and submitting it to the Vietnamese payer. The CoR is valid for 1–2 years and must be renewed."),
    makeFaq("What is the personal deduction?", "A personal deduction of VND 11 million/month is available for each individual taxpayer. A dependent deduction of VND 4.4 million/month is available for each qualified dependent (spouse, minor children, parents in some cases)."),
    makeFaq("When is PIT finalisation due?", "PIT finalisation (Form 02/QTT-TNCN) is filed within 90 days of year-end (by 31 March for calendar-year filers). Late filing triggers penalties of VND 1–25 million."),
    makeFaq("How are benefits-in-kind taxed?", "Benefits-in-kind (housing, school fees, transportation, etc.) are added to taxable income and subject to PIT at the progressive rates. Some benefits have specific rules (e.g. school fees paid directly to school may be exempt under certain conditions)."),
    makeFaq("Can a non-resident file a PIT return?", "Yes, non-residents with Vietnam-source income file Form 02/NTNN by 31 March of the following year. The employer typically handles the filing under authorisation."),
  ],
  relatedPillars: allPillars.filter((p) => p.slug !== "personal-income-tax").slice(0, 6),
  relatedServices: allServices.filter((s) => s.href.includes("payroll") || s.href.includes("tax")),
  countries,
  industries,
};

// 5. FOREIGN CONTRACTOR TAX
pillarPages["foreign-contractor-tax"] = {
  ...pillarDefaults,
  slug: "foreign-contractor-tax",
  path: "/guides/foreign-contractor-tax",
  title: "Vietnam Foreign Contractor Tax (FCT): VAT, PIT, Withholding",
  description: "Complete guide to Vietnam Foreign Contractor Tax (FCT): deemed vs. direct filer, 5% VAT, 5% PIT, registration, withholding obligations for Vietnamese payers, and treaty relief.",
  keywords: ["Vietnam FCT", "Vietnam foreign contractor tax", "Vietnam withholding tax", "Vietnam deemed VAT", "Vietnam direct filer"],
  heroEyebrow: "Pillar Guide",
  heroTitle: "Vietnam Foreign Contractor Tax",
  heroItalic: "the complete guide",
  heroDescription: "How FCT works in Vietnam — from deemed VAT/PIT withholding through direct-filer registration, Vietnamese payer obligations, treaty relief, and digital-service compliance.",
  tableOfContents: [
    { id: "what-is-fct", label: "What is Foreign Contractor Tax?" },
    { id: "deemed-vs-direct", label: "Deemed vs. direct filer" },
    { id: "vat", label: "VAT component: 5% deemed" },
    { id: "pit", label: "PIT component: 5% deemed" },
    { id: "vietnamese-payer", label: "Vietnamese payer obligations" },
    { id: "registration", label: "Direct filer registration" },
    { id: "treaty", label: "Tax treaty relief" },
    { id: "digital-services", label: "Digital services and e-commerce" },
    { id: "common-mistakes", label: "Common FCT mistakes" },
    { id: "faq", label: "Frequently asked questions" },
  ],
  intro:
    "Foreign Contractor Tax (FCT) is the headline withholding regime for payments from Vietnamese entities to foreign parties without a Vietnamese permanent establishment. FCT has two components: VAT (typically 5% deemed) and PIT (typically 5% deemed), totalling 10% of the gross payment. This guide explains how FCT works in practice: who it applies to, how the deemed vs. direct filer regime differs, what the Vietnamese payer's obligations are, how tax-treaty relief is claimed, and how digital-services FCT operates. We have written it for CFOs, accounts payable leads, and tax managers of foreign-owned companies in Vietnam — the people who operate the actual cross-border payment flows and need to know what to withhold, what to register, and how to avoid the penalties.",
  sections: [
    {
      id: "what-is-fct",
      heading: "What is Foreign Contractor Tax?",
      body: [
        "Foreign Contractor Tax (FCT) is the withholding regime for payments from Vietnamese parties to foreign parties without a Vietnamese permanent establishment. The regime is governed by Circular 103/2014 and its implementing regulations.",
        "FCT applies to: services performed in Vietnam (or partly in Vietnam) by a foreign party without a PE; royalties, interest, and dividends paid to foreign parties; and certain other payments.",
        "FCT does NOT apply where the service is performed entirely outside Vietnam and consumed outside Vietnam. The exemption requires documented evidence: contract identifying place of performance, beneficiary location, beneficiary bank evidence.",
        "FCT has two regimes: deemed (default) and direct filer. The deemed regime applies VAT 5% + PIT 5% (totalling 10%) on the gross payment. The direct filer regime applies VAT 10% + CIT 20% on actual profit, requiring the foreign party to register for direct filing.",
      ],
    },
    {
      id: "deemed-vs-direct",
      heading: "Deemed vs. direct filer",
      body: [
        "Deemed FCT (default): the Vietnamese payer withholds VAT 5% + PIT 5% (or treaty-rate PIT) on the gross payment. The foreign party has no Vietnamese filing obligation. The total burden is 10% of gross.",
        "Direct FCT (optional): the foreign party registers as a direct filer with the GDT, maintains books in Vietnam, files returns, and pays VAT 10% on actual revenue plus CIT 20% on actual profit. The total burden depends on profitability but is typically lower than deemed for profitable operations.",
        "Choosing the right regime is a critical tax planning decision. For low-margin businesses, the deemed regime may be more favourable. For high-margin businesses, the direct filer regime is usually better. We model both regimes before cross-border engagements.",
        "Once chosen, switching regimes is difficult. The direct filer status is typically maintained for the duration of the engagement. The deemed regime is automatic on the next engagement if the direct filer status is relinquished.",
      ],
    },
    {
      id: "vat",
      heading: "VAT component: 5% deemed",
      body: [
        "Under the deemed regime, the Vietnamese payer withholds VAT at 5% of the gross payment. The VAT is remitted to the tax authority alongside the monthly VAT return.",
        "The 5% deemed VAT is final. The foreign party cannot claim Vietnamese input credit (they have no Vietnamese registration). For Vietnamese recipients of services from foreign contractors, this is the cost — they cannot recover the FCT VAT as input credit.",
        "The 5% rate applies to services, royalties, and certain other payments. Some categories have different rates (e.g. royalties 5%, interest 5%, certain construction 3%, etc.). The applicable rate depends on the type of payment and is set out in the law.",
      ],
    },
    {
      id: "pit",
      heading: "PIT component: 5% deemed",
      body: [
        "Under the deemed regime, the Vietnamese payer withholds PIT at 5% of the gross payment (before VAT). The PIT is remitted to the tax authority monthly.",
        "The 5% deemed PIT is final. The foreign individual has no Vietnamese filing obligation. Treaty rates may reduce PIT for individuals from countries with a Vietnam DTA (the treaty rate is typically 5–10%).",
        "Where the payment is to a foreign company (not an individual), the 5% PIT does not apply; instead, the payment is treated as taxable income of the foreign company subject to CIT (typically 20%). The FCT calculation depends on whether the recipient is an individual or an entity.",
      ],
    },
    {
      id: "vietnamese-payer",
      heading: "Vietnamese payer obligations",
      body: [
        "The Vietnamese payer is the FCT withholding agent. The payer must: identify the FCT status of the recipient (Vietnamese resident, foreign contractor with PE, foreign contractor without PE); determine the applicable FCT regime (deemed or direct); calculate and withhold FCT at the time of payment; remit FCT to the tax authority monthly; and file the FCT declaration.",
        "The payer is liable for the unwithheld FCT if it fails to withhold correctly. Recovery from the foreign recipient is contractual but typically difficult in practice. We have seen VND billions of FCT assessments against payers for incomplete or incorrect withholding.",
        "The payer must maintain documentation: contract identifying the recipient, description of services, place of performance, beneficiary details (including home-country CoR for treaty claims), payment evidence.",
        "Pre-engagement review by the payer's tax advisor is the standard control. We conduct FCT reviews for clients before cross-border engagements.",
      ],
    },
    {
      id: "registration",
      heading: "Direct filer registration",
      body: [
        "A foreign contractor with a Vietnamese PE can register as a direct filer. The registration requires: a Vietnamese operating office (or an authorised representative), tax registration with the GDT, and ongoing compliance (VAT returns, CIT returns, payroll).",
        "The direct filer regime typically applies where the foreign contractor has significant Vietnam operations (sales staff, marketing presence, local support). For pure service providers with no Vietnam presence, the deemed regime is the only practical option.",
        "The direct filer must maintain VAS-compliant books, prepare annual financial statements, and have them audited by a Vietnamese-licensed audit firm. The compliance burden is similar to a Vietnamese subsidiary.",
      ],
    },
    {
      id: "treaty",
      heading: "Tax treaty relief",
      body: [
        "Treaty relief from FCT is available for recipients in countries with a Vietnam DTA. The treaty typically reduces PIT (the deemed 5%) to a treaty rate (typically 5–10%). The VAT component is generally not reducible by treaty.",
        "To claim treaty relief, the foreign recipient must provide a Certificate of Residence from its home tax authority, and the Vietnamese payer must submit the CoR with the FCT declaration. The CoR is typically valid for 1–2 years.",
        "Common treaty rates: Singapore-Vietnam PIT treaty rate is 5% (with CoR); Australia-Vietnam 10% (CoR required); UK-Vietnam 5–10%; Japan-Vietnam 10%; Korea-Vietnam 5–10%; US-Vietnam has no comprehensive DTA (standard rates apply).",
      ],
    },
    {
      id: "digital-services",
      heading: "Digital services and e-commerce",
      body: [
        "Foreign providers of digital services to Vietnamese consumers (without a Vietnamese PE) are subject to FCT via the GDT's e-portal. The provider registers on the portal, declares quarterly, and pays FCT (VAT 5% + PIT 5% deemed, or actual VAT 10% + CIT 20% on direct filer basis).",
        "Digital services include: online advertising, SaaS subscriptions, app stores, digital content, online education, online gaming, cloud services (where consumed in Vietnam), and certain financial technology services.",
        "Vietnamese customers of foreign digital-service providers may be required to withhold FCT on payments to the provider. The withholding is typically only required for B2B transactions over a threshold; B2C transactions are handled via the e-portal.",
        "We act as tax representative for foreign digital-service providers, handling registration, declaration, and payment on their behalf.",
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common FCT mistakes",
      body: [
        "The most expensive FCT mistakes: (1) failing to withhold FCT on a payment to a foreign contractor, (2) applying the wrong FCT rate (e.g. using 10% when 5% applies), (3) failing to claim treaty relief (overpaying), (4) misclassifying an offshore service as performed in Vietnam.",
        "The most common avoidable penalty: late FCT remittance. The penalty is small but triggers broader reviews.",
        "The most expensive avoidable penalty: failing to withhold on a payment to a foreign contractor that the GDT later identifies as having Vietnam-source income. The assessment is the unwithheld amount plus 1–3x penalty plus interest.",
      ],
    },
  ],
  faqs: [
    makeFaq("What is Foreign Contractor Tax?", "FCT is the withholding regime for payments from Vietnamese parties to foreign parties without a Vietnamese PE. The deemed regime is VAT 5% + PIT 5% (10% total). The direct filer regime is VAT 10% + CIT 20% on actual profit."),
    makeFaq("When does FCT apply?", "FCT applies to: services performed in Vietnam (or partly in Vietnam) by a foreign party without a PE; royalties, interest, and dividends paid to foreign parties. FCT does NOT apply to services performed entirely outside Vietnam and consumed outside Vietnam."),
    makeFaq("What is the difference between deemed and direct FCT?", "Deemed FCT (default): Vietnamese payer withholds 10% on gross payment. Direct FCT (optional): foreign party registers in Vietnam, files returns, pays VAT 10% on revenue + CIT 20% on profit. Direct filer is typically better for profitable operations."),
    makeFaq("Can FCT be reduced by tax treaty?", "Yes, the PIT component of FCT can be reduced to a treaty rate (typically 5–10%) where the foreign recipient is in a country with a Vietnam DTA. The recipient must provide a Certificate of Residence."),
    makeFaq("What is the FCT rate on royalties?", "Royalties are subject to FCT VAT 5% + PIT 10% deemed (or treaty rate 5–10%). The Vietnamese payer withholds and remits."),
    makeFaq("How is FCT handled for digital services?", "Foreign providers of digital services to Vietnamese consumers register on the GDT e-portal, declare quarterly, and pay FCT (VAT 5% + PIT 5% deemed). The provider may appoint a tax representative. We act as tax representative for several foreign platforms."),
    makeFaq("Can a foreign contractor register as direct filer?", "Yes, a foreign contractor with a Vietnamese PE can register as direct filer with the GDT, maintain VAS-compliant books, and pay actual VAT + CIT. The compliance burden is similar to a Vietnamese subsidiary."),
    makeFaq("What is the FCT rate on interest?", "Interest is subject to FCT VAT 5% + PIT 5% deemed. The treaty rate may reduce the PIT component to 10% or other agreed rate."),
    makeFaq("What happens if FCT is not withheld?", "The Vietnamese payer is liable for the unwithheld amount plus late-payment interest and penalties of 1–3x. The payer cannot recover from the foreign recipient through normal channels."),
    makeFaq("Are advertising services subject to FCT?", "Yes, digital advertising by a foreign provider to Vietnamese customers is subject to FCT (5% VAT + 5% PIT deemed). The Vietnamese customer is the withholding agent for B2B transactions."),
  ],
  relatedPillars: allPillars.filter((p) => p.slug !== "foreign-contractor-tax").slice(0, 6),
  relatedServices: allServices.filter((s) => s.href.includes("foreign") || s.href.includes("tax")),
  countries,
   industries,
};

// ============================================================================
// 6. TRANSFER PRICING
// ============================================================================
pillarPages["transfer-pricing"] = {
  ...pillarDefaults,
  slug: "transfer-pricing",
  path: "/guides/transfer-pricing",
  title: "Vietnam Transfer Pricing Guide: Decree 132/ Local File, Master File, CbCR",
  description: "Complete guide to Vietnam transfer pricing under Decree 132/2020: arm's-length principle, Local File, Master File, CbCR, benchmarking, related-party transactions, and TP audit defence.",
  keywords: ["Vietnam transfer pricing", "Decree 132 Vietnam", "Vietnam Local File", "Vietnam CbCR", "Vietnam transfer pricing audit"],
  heroEyebrow: "Pillar Guide",
  heroTitle: "Vietnam Transfer Pricing",
  heroItalic: "the complete guide",
  heroDescription: "How transfer pricing works in Vietnam under Decree 132/2020 — Local File, Master File, CbCR, arm's-length analysis, benchmarking, and TP audit defence.",
  tableOfContents: [
    { id: "decree-132", label: "Decree 132/2020 and the arm's-length principle" },
    { id: "who-must-comply", label: "Who must comply?" },
    { id: "local-file", label: "Local File requirements" },
    { id: "master-file", label: "Master File requirements" },
    { id: "cbcr", label: "Country-by-Country Reporting" },
    { id: "benchmarking", label: "Benchmarking studies" },
    { id: "related-party", label: "Related-party transaction categories" },
    { id: "audit-defence", label: "TP audit defence" },
    { id: "common-mistakes", label: "Common TP mistakes" },
    { id: "faq", label: "Frequently asked questions" },
  ],
  intro:
    "Vietnam's transfer pricing rules under Decree 132/2020 require multinational groups operating in Vietnam to prepare contemporaneous documentation supporting the arm's-length pricing of related-party transactions. The documentation includes a Local File (specific to the Vietnam entity), a Master File (group-wide), and for the largest groups, Country-by-Country Reporting. This guide explains how TP works in practice: who must comply, what the Local File and Master File contain, how benchmarking is conducted, how related-party transactions are analysed, and how to defend a TP audit. We have written it for tax directors, controllers, and transfer-pricing specialists of multinational groups with Vietnamese operations.",
  sections: [
    {
      id: "decree-132",
      heading: "Decree 132/2020 and the arm's-length principle",
      body: [
        "Decree 132/2020/ND-CP (effective 20 December 2020) is the primary legislation governing transfer pricing in Vietnam. It replaced Decree 20/2017 and tightened several areas including related-party definitions, transaction thresholds, and documentation requirements.",
        "The decree applies the arm's-length principle: related-party transactions must be priced as if conducted between independent parties under comparable circumstances. Methods to establish arm's-length pricing include CUP (comparable uncontrolled price), resale minus, cost plus, TNMM (transactional net margin method), and profit split.",
        "The decree also includes the EBITDA cap (related-party interest deductible up to 30% of EBITDA) and the debt-to-equity restriction (3:1 net assets, 5:1 for certain industries). Non-arm's-length transactions are subject to back taxes, interest, and a 1–3x penalty.",
        "Vietnam is a member of the OECD/G20 Inclusive Framework on BEPS and has implemented Pillar 2 (Global Anti-Base Erosion) rules with effect from 2024 for MNEs above the threshold.",
      ],
    },
    {
      id: "who-must-comply",
      heading: "Who must comply?",
      body: [
        "Local File is required for companies with related-party transactions of VND 50 billion or more in a fiscal year. Below the threshold, preparation of a contemporaneous file is best practice and reduces audit risk.",
        "Master File is required for groups with consolidated revenue of VND 1,836 billion or more in the prior fiscal year.",
        "CbCR is required for ultimate parent entities (UPEs) with consolidated revenue of EUR 750 million or more in the prior fiscal year. Vietnam-resident UPEs file directly; Vietnam-resident subsidiaries of foreign UPEs file a CbCR notification.",
        "Failure to file triggers penalties of 1–3x the under-declared CIT, plus interest. Failure to prepare documentation triggers penalties even if no adjustment is ultimately made.",
      ],
    },
    {
      id: "local-file",
      heading: "Local File requirements",
      body: [
        "The Local File contains: entity information (organisational structure, business description, financial overview); controlled transactions (description, amounts, comparables analysis); financial information (financial statements, segment data); and TP method analysis.",
        "The Local File must be contemporaneous: prepared by the deadline for the CIT finalisation return (90 days after fiscal year-end) and available for GDT review at any time during the audit cycle.",
        "The functional analysis identifies the functions performed, assets used, and risks assumed by the Vietnam entity. This analysis drives the selection of the tested party and the TP method.",
        "Common Local File deficiencies: incomplete related-party transaction list, missing comparables analysis, weak functional analysis, inadequate benchmarking.",
      ],
    },
    {
      id: "master-file",
      heading: "Master File requirements",
      body: [
        "The Master File is a group-level document containing: organisational structure (legal and operational), description of business (significant value drivers, supply chain, main geographic markets), intangibles (strategy, list, ownership, transfer pricing), inter-company financial activities (treasury, funding, guarantees), and financial and tax positions.",
        "The Master File is typically prepared at the group level (by the parent's TP team) and shared with all operating entities. Vietnam-resident entities must have access to the Master File within the GDT's review window.",
        "Master File preparation typically takes 6–10 weeks due to the group-level data collection. Coordination with the parent and other entities is the main timeline constraint.",
      ],
    },
    {
      id: "cbcr",
      heading: "Country-by-Country Reporting",
      body: [
        "CbCR provides the GDT with a global picture of the MNE group's revenue, profit, taxes paid, and economic activity on a country-by-country basis. The data helps the GDT identify TP risk and allocate audit resources.",
        "Vietnam-resident UPEs with consolidated revenue above EUR 750 million file CbCR directly with the GDT within 12 months of fiscal year-end. Vietnam-resident subsidiaries of foreign UPEs file a CbCR notification within 3 months identifying the UPE and the filing jurisdiction.",
        "CbCR data is confidential between tax authorities under the Multilateral Convention. Vietnam exchanges CbCR data with treaty partners. The GDT uses the data for risk assessment, not as a basis for automatic adjustments.",
      ],
    },
    {
      id: "benchmarking",
      heading: "Benchmarking studies",
      body: [
        "A benchmarking study supports the arm's-length nature of the tested party's margin. The study involves: selection of the tested party, selection of the profit-level indicator (PLI), identification of comparable companies, statistical analysis, and conclusion of the arm's-length range.",
        "The most common PLI is the operating margin (EBIT/revenue) or the mark-up on costs (gross profit/cost). The choice depends on the functional analysis of the tested party.",
        "Comparable databases: Bureau van Dijk (Orbis, Amadeus), RoyaltyStat, ktMINE. The choice of database and the search criteria significantly affect the results. We work with the major databases and have local comparable sets.",
        "Arm's-length ranges are typically the interquartile range (25th–75th percentile) of the comparable set. The tested party's margin should fall within the range, or adjustments are required.",
      ],
    },
    {
      id: "related-party",
      heading: "Related-party transaction categories",
      body: [
        "Common related-party transactions in Vietnam: management fees, royalties, intra-group services (IT, HR, treasury, legal, marketing), inter-company loans, guarantees, sale/purchase of goods, sale/purchase of services, transfer of assets.",
        "Each category has specific TP considerations: management fees require benefit-test documentation; royalties require IP ownership and arm's-length rate; services require benefit-test and duplication analysis; loans require arm's-length interest rate and debt-to-equity compliance.",
        "The GDT increasingly challenges management fees and royalties as non-arm's-length. We have seen adjustments of 30–50% of the declared fee for companies with weak documentation.",
        "The benefit-test asks: does the recipient receive an economic benefit from the service? If yes, is the service duplicative (i.e. the recipient already pays for the same service elsewhere) or a shareholder activity (i.e. the service relates to ownership rather than operations)?",
      ],
    },
    {
      id: "audit-defence",
      heading: "TP audit defence",
      body: [
        "TP audits are the most complex GDT audits. The audit typically focuses on: related-party transaction identification, arm's-length pricing, EBITDA cap, debt-to-equity, and benefit-test documentation.",
        "Audit defence starts before the audit. We conduct pre-audit reviews to identify issues and prepare remediation strategies. Once the audit begins, the priorities are: respond to information requests promptly, present documentation professionally, and escalate to senior GDT officials where appropriate.",
        "Most TP audits conclude with adjustments. The size of the adjustment depends on the documentation quality and the negotiation. GDT assessments exceeding VND 50 billion are typically resolved through the appeal process, with substantial reductions achievable on proper documentation.",
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common TP mistakes",
      body: [
        "The most expensive TP mistakes: (1) claiming deductions for inter-company charges without contemporaneous documentation, (2) above-market royalty rates, (3) missing the EBITDA cap, (4) ignoring the debt-to-equity rule, (5) claiming management fees without benefit-test documentation.",
        "The most common avoidable penalty: late Local File preparation. The GDT uses missing or late documentation as the basis for adjustments even if the pricing was actually arm's-length.",
        "The most expensive avoidable penalty: gross negligence or fraud. The GDT assesses back tax, interest, and a 3x penalty (or higher under criminal provisions). We have seen VND 100 billion+ assessments for repeated gross negligence.",
      ],
    },
  ],
  faqs: [
    makeFaq("What is Decree 132/2020?", "Decree 132/2020 is the primary legislation governing transfer pricing in Vietnam. It applies the arm's-length principle, requires Local File/Master File/CbCR, and includes the EBITDA cap and debt-to-equity rules."),
    makeFaq("When is a Local File required?", "A Local File is required for companies with related-party transactions of VND 50 billion or more in a fiscal year. Below the threshold, preparation is best practice and reduces audit risk."),
    makeFaq("When is a Master File required?", "A Master File is required for groups with consolidated revenue of VND 1,836 billion or more in the prior fiscal year."),
    makeFaq("When is CbCR required?", "CbCR is required for ultimate parent entities with consolidated revenue of EUR 750 million or more in the prior fiscal year. Vietnam-resident UPEs file directly; subsidiaries of foreign UPEs file a notification."),
    makeFaq("What is the EBITDA cap?", "Related-party interest is deductible only up to 30% of EBITDA under Decree 132. Interest above the cap is carried forward for up to 5 years (subject to the cap each year)."),
    makeFaq("What is the debt-to-equity rule?", "Related-party debt exceeding 3:1 net assets (5:1 for certain industries) is treated as thin capitalisation. The interest on the excess is not deductible."),
    makeFaq("How much does a Local File cost?", "A Local File for a single Vietnamese entity typically costs USD 5,000–12,000. A Master File for the group is USD 8,000–18,000. CbCR notification is USD 1,500–3,000. A full benchmarking study is USD 3,000–8,000."),
    makeFaq("What is a TP audit?", "A TP audit is the GDT's review of the arm's-length pricing of related-party transactions. It typically focuses on: related-party identification, arm's-length pricing, EBITDA cap, debt-to-equity, and benefit-test documentation."),
    makeFaq("What is the benefit test?", "The benefit test asks whether the recipient of an intra-group service receives an economic benefit. If yes, the fee is deductible. If the service is duplicative or a shareholder activity, the fee is not deductible."),
    makeFaq("Can the GDT make TP adjustments?", "Yes, the GDT can adjust related-party transactions to arm's-length prices, with back taxes, interest, and a 1–3x penalty. Adjustments above VND 50 billion are common in major audits."),
  ],
  relatedPillars: allPillars.filter((p) => p.slug !== "transfer-pricing").slice(0, 6),
  relatedServices: allServices.filter((s) => s.href.includes("transfer-pricing") || s.href.includes("tax")),
  countries,
  industries,
};

// ============================================================================
// 7. TAX DEADLINES
// ============================================================================
pillarPages["tax-deadlines"] = {
  ...pillarDefaults,
  slug: "tax-deadlines",
  path: "/guides/tax-deadlines",
  title: "Vietnam Tax Deadlines Calendar 2026: Monthly, Quarterly, Annual Dates",
  description: "Complete 2026 calendar of Vietnam tax deadlines: CIT, VAT, PIT, FCT, social insurance, and transfer pricing. Quarterly, monthly, and annual filing dates for foreign-owned companies.",
  keywords: ["Vietnam tax deadlines", "Vietnam tax calendar 2026", "Vietnam CIT deadline", "Vietnam VAT deadline", "Vietnam PIT deadline"],
  heroEyebrow: "Pillar Guide",
  heroTitle: "Vietnam Tax Deadlines",
  heroItalic: "2026 calendar",
  heroDescription: "The complete 2026 calendar of Vietnam tax deadlines — CIT, VAT, PIT, FCT, social insurance, and transfer pricing — for foreign-owned companies.",
  tableOfContents: [
    { id: "monthly", label: "Monthly deadlines" },
    { id: "quarterly", label: "Quarterly deadlines" },
    { id: "annual", label: "Annual deadlines" },
    { id: "vat", label: "VAT declarations" },
    { id: "cit", label: "CIT provisional and finalisation" },
    { id: "pit", label: "PIT declarations and finalisation" },
    { id: "fct", label: "FCT declarations" },
    { id: "tp", label: "Transfer pricing documentation" },
    { id: "penalties", label: "Penalties for late filing" },
    { id: "faq", label: "Frequently asked questions" },
  ],
  intro:
    "Vietnamese tax compliance operates on a strict calendar of monthly, quarterly, and annual deadlines. Missing a deadline triggers penalties and late-payment interest. This guide provides the complete 2026 calendar of deadlines for CIT, VAT, PIT, FCT, social insurance, and transfer pricing. We have written it as a working reference for finance teams of foreign-owned companies in Vietnam — bookmark it, share it with your team, and use it to plan your compliance calendar.",
  sections: [
    {
      id: "monthly",
      heading: "Monthly deadlines",
      body: [
        "Monthly VAT return: due by the 20th of the following month.",
        "Monthly PIT declaration (with VAT): due by the 20th of the following month.",
        "Monthly social insurance declaration: due by the 25th of the following month.",
        "Monthly FCT declaration (where applicable): due by the 20th of the following month.",
        "Monthly payment of VAT, PIT, FCT: due by the 20th of the following month.",
        "Monthly payment of SI: due by the 25th of the following month.",
      ],
    },
    {
      id: "quarterly",
      heading: "Quarterly deadlines",
      body: [
        "Quarterly VAT (where applicable, revenue < VND 50 billion): due by the last day of the month following the quarter end.",
        "Quarterly provisional CIT: due by the 30th day of the month following the quarter end. Q1 by 30 April, Q2 by 31 July, Q3 by 31 October, Q4 by 31 January of the following year.",
        "Quarterly PIT finalisation is NOT required; PIT is finalised annually (except for assignees leaving mid-year).",
        "Quarterly FCT declarations are required for digital-service providers: due by the last day of the month following the quarter end.",
      ],
    },
    {
      id: "annual",
      heading: "Annual deadlines",
      body: [
        "Annual CIT finalisation return (Form 03/QTT-TNCN): due within 90 days of fiscal year-end. For calendar-year companies, the deadline is 31 March of the following year.",
        "Annual PIT finalisation (Form 02/QTT-TNCN for residents, Form 02/NTNN for non-residents): due within 90 days of year-end (31 March).",
        "Annual audited financial statements: due within 90 days of fiscal year-end for audit completion.",
        "Annual TP Local File: prepared by the CIT finalisation deadline (31 March).",
        "Annual Master File: prepared at the group level by the parent's deadline.",
        "CbCR: due within 12 months of fiscal year-end for Vietnam-resident UPEs. Notification due within 3 months for subsidiaries.",
        "Annual return to the DPI: due within 6 months of fiscal year-end.",
      ],
    },
    {
      id: "vat",
      heading: "VAT declarations",
      body: [
        "Monthly VAT returns (Form 01/GTGT): due by the 20th of the following month.",
        "Quarterly VAT returns (Form 01/GTGT): due by the last day of the month following the quarter end, for companies with revenue < VND 50 billion in the prior calendar year.",
        "VAT payment is made at the same time as the return. Late payment triggers late-payment interest at 0.03% per day (approximately 10.95% per year).",
        "VAT refund claims: filed separately, processed within 2–6 months. The GDT may request documentation, conduct an audit, or deny the claim if the documentation is insufficient.",
      ],
    },
    {
      id: "cit",
      heading: "CIT provisional and finalisation",
      body: [
        "Quarterly provisional CIT is paid by the 30th day of the month following the quarter end. The provisional amount is calculated as 20% (or the applicable reduced rate) of estimated quarterly taxable profit.",
        "Companies that expect a loss in the quarter may file Form 01a to reduce or eliminate the provisional payment. The GDT reviews and approves.",
        "Annual CIT finalisation reconciles provisional payments to actual annual liability. The finalisation is filed within 90 days of fiscal year-end (31 March for calendar-year companies).",
        "The finalisation calculates: actual annual liability, total provisional paid, balance owed (or refund due). The balance is settled with the tax authority.",
        "Late filing of the finalisation triggers penalties of VND 5–25 million. The GDT may also assess the company on the basis of the latest quarterly return if the finalisation is not filed.",
      ],
    },
    {
      id: "pit",
      heading: "PIT declarations and finalisation",
      body: [
        "Monthly PIT is withheld by the employer on the employee's salary and remitted by the 20th of the following month. The declaration (Form 05/KK-TNCN) accompanies the VAT return.",
        "Annual PIT finalisation (Form 02/QTT-TNCN for residents, Form 02/NTNN for non-residents) is filed within 90 days of year-end (31 March). The finalisation is filed by the employee, or by the employer under authorisation.",
        "For assignees leaving Vietnam mid-year, PIT finalisation must be completed before departure. The employer files the finalisation and obtains a tax-clearance certificate.",
        "The PIT finalisation considers 12 months of income (for residents) or the Vietnam-source portion of the assignment (for non-residents). The actual liability is reconciled against monthly withholding.",
      ],
    },
    {
      id: "fct",
      heading: "FCT declarations",
      body: [
        "FCT is withheld by the Vietnamese payer at the time of payment to the foreign contractor. The withholding is declared and remitted alongside the monthly VAT return (Form 01/GTGT includes FCT lines).",
        "For deemed FCT (the default), the payer withholds VAT 5% + PIT 5% (or treaty rate) on the gross payment. The FCT is remitted to the tax authority by the 20th of the following month.",
        "For direct FCT (where the foreign contractor is registered), the foreign contractor files its own returns: monthly VAT 10% on revenue, quarterly CIT provisional, annual CIT finalisation.",
        "Digital-service FCT (for e-commerce, SaaS, etc.) is filed quarterly via the GDT e-portal by the foreign provider (or its tax representative). The deadline is the last day of the month following the quarter end.",
      ],
    },
    {
      id: "tp",
      heading: "Transfer pricing documentation",
      body: [
        "Local File deadline: prepared by the CIT finalisation deadline (31 March for calendar-year companies). The Local File must be available for GDT review at any time during the audit cycle.",
        "Master File deadline: prepared at the group level. Vietnam entities must have access to the Master File within the GDT's review window.",
        "CbCR deadline: due within 12 months of fiscal year-end for Vietnam-resident UPEs with consolidated revenue above EUR 750 million. Notification due within 3 months for subsidiaries of foreign UPEs.",
        "TP documentation must be contemporaneous: prepared before the CIT finalisation return is filed. Late documentation is treated as non-existent by the GDT and triggers automatic adjustments.",
      ],
    },
    {
      id: "penalties",
      heading: "Penalties for late filing",
      body: [
        "Late VAT filing: VND 1–25 million penalty depending on the days late.",
        "Late CIT finalisation: VND 5–25 million penalty.",
        "Late PIT finalisation: VND 1–25 million penalty.",
        "Late payment of any tax: late-payment interest at 0.03% per day (approximately 10.95% per year) on the unpaid amount.",
        "Failure to file TP documentation: 1–3x penalty on the under-declared CIT.",
        "Repeated non-compliance: escalation to suspension of the tax code, seizure of bank accounts, and criminal prosecution in extreme cases.",
      ],
    },
  ],
  faqs: [
    makeFaq("When is the monthly VAT return due?", "The monthly VAT return (Form 01/GTGT) is due by the 20th day of the following month. Late filing triggers penalties of VND 1–25 million."),
    makeFaq("When is the quarterly CIT payment due?", "Quarterly provisional CIT is due by the 30th day of the month following the quarter end. Q1 by 30 April, Q2 by 31 July, Q3 by 31 October, Q4 by 31 January of the following year."),
    makeFaq("When is the annual CIT finalisation due?", "The annual CIT finalisation return (Form 03/QTT-TNCN) is due within 90 days of fiscal year-end. For calendar-year companies, the deadline is 31 March of the following year."),
    makeFaq("When is the PIT finalisation due?", "The annual PIT finalisation (Form 02/QTT-TNCN for residents, Form 02/NTNN for non-residents) is due within 90 days of year-end (31 March)."),
    makeFaq("When is the Local File due?", "The Local File must be prepared by the CIT finalisation deadline (31 March for calendar-year companies). It must be available for GDT review at any time during the audit cycle."),
    makeFaq("When is CbCR due?", "CbCR is due within 12 months of fiscal year-end for Vietnam-resident UPEs with consolidated revenue above EUR 750 million. Notification due within 3 months for subsidiaries of foreign UPEs."),
    makeFaq("When is the social insurance declaration due?", "Monthly SI declaration is due by the 25th of the following month via the SI agency e-portal. Payment is due by the 25th."),
    makeFaq("What is the penalty for late CIT filing?", "Late CIT filing triggers a penalty of VND 5–25 million. The GDT may also assess the company on the basis of the latest quarterly return if the finalisation is not filed."),
    makeFaq("What is the late-payment interest rate?", "Late-payment interest is 0.03% per day (approximately 10.95% per year) on the unpaid amount, calculated from the day after the original due date."),
    makeFaq("Can quarterly VAT be filed instead of monthly?", "Quarterly VAT filing is available for companies with revenue below VND 50 billion in the prior calendar year. Returns are due by the last day of the month following the quarter end."),
  ],
  relatedPillars: allPillars.filter((p) => p.slug !== "tax-deadlines").slice(0, 6),
  relatedServices: allServices,
  countries: [],
  industries: [],
};

// ============================================================================
// 8. ACCOUNTING REQUIREMENTS
// ============================================================================
pillarPages["accounting-requirements"] = {
  ...pillarDefaults,
  slug: "accounting-requirements",
  path: "/guides/accounting-requirements",
  title: "Vietnam Accounting Requirements: VAS, Books, Financial Statements, Audit",
  description: "Complete guide to Vietnam's accounting requirements: VAS, statutory books, financial statements, statutory audit obligations, and the IFRS reconciliation process.",
  keywords: ["Vietnam accounting requirements", "VAS", "Vietnam statutory audit", "Vietnam financial statements", "Vietnam chart of accounts"],
  heroEyebrow: "Pillar Guide",
  heroTitle: "Vietnam Accounting Requirements",
  heroItalic: "the complete guide",
  heroDescription: "How Vietnam's accounting requirements work for foreign-owned companies — VAS, statutory books, financial statements, statutory audit, and IFRS reconciliation.",
  tableOfContents: [
    { id: "vas", label: "Vietnamese Accounting System (VAS)" },
    { id: "books", label: "Statutory books and records" },
    { id: "statements", label: "Annual financial statements" },
    { id: "audit", label: "Statutory audit obligation" },
    { id: "ifrs", label: "IFRS reconciliation" },
    { id: "chart", label: "Chart of accounts" },
    { id: "retention", label: "Record retention" },
    { id: "common-mistakes", label: "Common accounting mistakes" },
    { id: "faq", label: "Frequently asked questions" },
  ],
  intro:
    "Vietnam's accounting requirements are set out in the Law on Accounting (Law 88/2015) and the Vietnamese Accounting System (VAS). Foreign-owned companies must maintain VAS-compliant books, prepare annual financial statements in Vietnamese, and have them audited by a Vietnamese-licensed audit firm. This guide explains how the requirements work in practice: what VAS is, what books must be maintained, how the financial statements are structured, when the statutory audit applies, how to reconcile to IFRS, and how to design the chart of accounts for both statutory and management reporting.",
  sections: [
    {
      id: "vas",
      heading: "Vietnamese Accounting System (VAS)",
      body: [
        "The Vietnamese Accounting System (VAS) is the set of accounting standards issued by the Ministry of Finance. The standards are broadly similar to IFRS but with local differences in: revenue recognition (some industry-specific rules), lease accounting (operating vs finance), deferred tax (limited application), impairment of assets (different triggers), and government grants (specific Vietnamese rules).",
        "VAS applies to all entities registered in Vietnam, regardless of ownership. Foreign-owned companies, joint ventures, and local companies are all subject to VAS for statutory reporting.",
        "VAS standards are updated periodically. The Ministry of Finance has been progressively converging VAS with IFRS, with significant changes in 2025 (revenue recognition, leases, fair value measurement). Companies should monitor MoF updates.",
      ],
    },
    {
      id: "books",
      heading: "Statutory books and records",
      body: [
        "Required statutory books include: cash book, general ledger, sub-ledgers (receivables, payables, fixed assets, inventory), tax registers, and supporting documentation. All books must be in Vietnamese.",
        "Books can be maintained manually or via accounting software. Manual books must be bound and approved by the tax authority before use. Electronic books are permitted under specific conditions (digital signatures, audit trail, retention).",
        "Books must be closed monthly within a reasonable time (typically 10–20 working days of month-end). Year-end close is tied to the statutory audit cycle (February–March for calendar-year companies).",
        "Source documentation: invoices (VAT invoices for VAT-able purchases, ordinary invoices for non-VAT purchases), contracts, bank statements, expense approvals, payroll records. Source documents must be retained for at least 10 years.",
      ],
    },
    {
      id: "statements",
      heading: "Annual financial statements",
      body: [
        "Annual financial statements include: balance sheet (Form B01-DN), income statement (Form B02-DN), cash flow statement (Form B03-DN), notes to the financial statements, and a management report.",
        "The financial statements must be in Vietnamese. English translations may be prepared for management purposes but are not the statutory version.",
        "The financial statements are filed with the tax authority alongside the CIT finalisation return (within 90 days of fiscal year-end).",
        "The financial statements are signed by the legal representative and the chief accountant (where appointed). The auditor's opinion is attached for entities subject to statutory audit.",
      ],
    },
    {
      id: "audit",
      heading: "Statutory audit obligation",
      body: [
        "A statutory audit is required for: joint-stock companies, limited liability companies with 2+ members, FDI companies, and entities in certain regulated sectors (banks, insurance, securities, etc.).",
        "The auditor is appointed by the shareholders (or members) and is typically a Big-4 or top-tier Vietnamese-licensed audit firm. The appointment is for one year and renewable.",
        "The audit is typically conducted February–March for calendar-year companies. Fieldwork is 2–6 weeks depending on the entity's size and complexity. The auditor issues an opinion (unqualified, qualified, adverse, or disclaimer) and a management letter.",
        "An unqualified opinion is the standard expectation for a well-run company. Qualified or adverse opinions are serious and may trigger follow-up action by the GDT.",
      ],
    },
    {
      id: "ifrs",
      heading: "IFRS reconciliation",
      body: [
        "Most FDI parents report under IFRS (or US GAAP, FRS 102, etc.). The Vietnam VAS financial statements must be reconciled to the parent's reporting framework for group consolidation.",
        "Common reconciliation items: revenue recognition (long-term contracts, multi-element arrangements), lease accounting (operating vs finance under VAS vs IFRS 16), deferred tax (limited under VAS), impairment of assets (different triggers), and government grants (different presentation).",
        "The reconciliation is typically prepared quarterly, with adjustments documented in a reconciliation package. The package includes the VAS financial statements, the IFRS-equivalent statements, and the difference schedule.",
      ],
    },
    {
      id: "chart",
      heading: "Chart of accounts",
      body: [
        "The chart of accounts (COA) is the structured list of accounts used for recording transactions. A typical FDI COA has: 4-digit VAS code for statutory reporting, 6-digit group code for management reporting, mapped monthly.",
        "The COA is designed at onboarding and reviewed quarterly. Common accounts: cash and banks, receivables, inventory, fixed assets, payables, short-term and long-term loans, equity, revenue, cost of goods sold, operating expenses, finance income/expenses, tax expenses.",
        "Sub-ledgers track inter-company balances, fixed assets, and bank reconciliation details. The COA should align with the parent's reporting structure to enable seamless consolidation.",
      ],
    },
    {
      id: "retention",
      heading: "Record retention",
      body: [
        "Accounting records must be retained for at least 10 years. The retention period starts from the end of the fiscal year to which the records relate.",
        "Records may be retained in electronic form under specific conditions: digital signatures, audit trail, GDT-recognised e-archive provider. The GDT can request access to electronic records during an audit.",
        "Loss or destruction of records triggers penalties and may lead to a reconstructed assessment by the GDT, which is typically unfavourable to the taxpayer.",
        "Records stored abroad are subject to specific rules: the GDT must approve offshore storage, and the records must be made available on request.",
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common accounting mistakes",
      body: [
        "The most expensive accounting mistakes: (1) failing to maintain VAS-compliant books, (2) missing source documentation, (3) incorrect accruals and prepayments, (4) failing to reconcile inter-company balances, (5) ignoring the IFRS-to-VAS reconciliation.",
        "The most common avoidable penalty: late filing of the annual financial statements with the tax authority. The penalty is small but signals poor compliance.",
        "The most expensive avoidable penalty: qualified or adverse audit opinion. The GDT treats qualified opinions as a red flag and triggers deeper review.",
      ],
    },
  ],
  faqs: [
    makeFaq("What is VAS?", "VAS is the Vietnamese Accounting System, a set of accounting standards issued by the Ministry of Finance. All entities registered in Vietnam must maintain books under VAS. The standards are broadly similar to IFRS but with local differences."),
    makeFaq("What is the difference between VAS and IFRS?", "VAS is Vietnam's national accounting framework (mandatory for statutory reporting). IFRS is the international framework used by most multinationals for consolidation. Differences include revenue recognition, lease accounting, deferred tax, and impairment."),
    makeFaq("What books must a company maintain?", "Required statutory books: cash book, general ledger, sub-ledgers (receivables, payables, fixed assets, inventory), tax registers, and supporting documentation. All books must be in Vietnamese."),
    makeFaq("When is a statutory audit required?", "A statutory audit is required for: joint-stock companies, limited liability companies with 2+ members, FDI companies, and entities in certain regulated sectors."),
    makeFaq("How long does a statutory audit take?", "Fieldwork is 2–6 weeks depending on the entity's size and complexity. The audit typically runs February–March for calendar-year companies."),
    makeFaq("Can English be used in financial statements?", "The statutory financial statements must be in Vietnamese. English translations may be prepared for management purposes but are not the statutory version."),
    makeFaq("What is the record retention period?", "Accounting records must be retained for at least 10 years. Records may be retained electronically under specific conditions."),
    makeFaq("What is a qualified audit opinion?", "A qualified opinion means the auditor identified a specific issue that affects the financial statements but is not pervasive. Adverse opinions are more serious and indicate pervasive issues."),
    makeFaq("What is the typical audit fee?", "Statutory audit fees for FDI companies range from USD 5,000 to USD 30,000+ depending on the size and complexity. Big-4 firms charge a premium over local firms."),
    makeFaq("How is the IFRS reconciliation prepared?", "The IFRS reconciliation is prepared quarterly by adjusting VAS financials to the parent group's reporting framework. The reconciliation package includes the VAS statements, the IFRS-equivalent statements, and the difference schedule."),
  ],
  relatedPillars: allPillars.filter((p) => p.slug !== "accounting-requirements").slice(0, 6),
  relatedServices: allServices.filter((s) => s.href.includes("accounting") || s.href.includes("statutory")),
  countries,
  industries,
};

// ============================================================================
// 9. STATUTORY AUDIT
// ============================================================================
pillarPages["statutory-audit"] = {
  ...pillarDefaults,
  slug: "statutory-audit",
  path: "/guides/statutory-audit",
  title: "Vietnam Statutory Audit Guide: Requirements, Process, Auditor Selection",
  description: "Complete guide to Vietnam statutory audit: who needs an audit, how to select an auditor, the audit process, audit opinions, fees, and working with Big-4 and local firms.",
  keywords: ["Vietnam statutory audit", "Vietnam audit requirement", "Vietnam audit firm", "Vietnam audit opinion", "Vietnam audit fee"],
  heroEyebrow: "Pillar Guide",
  heroTitle: "Vietnam Statutory Audit",
  heroItalic: "the complete guide",
  heroDescription: "How Vietnam's statutory audit works for foreign-owned companies — who needs an audit, how to select an auditor, the audit process, opinions, and fees.",
  tableOfContents: [
    { id: "who-needs", label: "Who needs a statutory audit?" },
    { id: "select-auditor", label: "Selecting an auditor" },
    { id: "process", label: "The audit process" },
    { id: "opinions", label: "Audit opinions" },
    { id: "fees", label: "Audit fees" },
    { id: "management-letter", label: "Management letter" },
    { id: "liaison", label: "Audit liaison with the parent" },
    { id: "common-mistakes", label: "Common audit mistakes" },
    { id: "faq", label: "Frequently asked questions" },
  ],
  intro:
    "A statutory audit is required for joint-stock companies, limited liability companies with 2+ members, FDI companies, and certain regulated entities. The audit is conducted by a Vietnamese-licensed audit firm and the opinion is filed with the tax authority. This guide explains how the audit works in practice: who needs an audit, how to select the right auditor, what the audit process looks like, what the audit opinions mean, how much the audit costs, and how to coordinate with the parent's group audit.",
  sections: [
    {
      id: "who-needs",
      heading: "Who needs a statutory audit?",
      body: [
        "A statutory audit is required for: joint-stock companies (regardless of ownership); limited liability companies with 2+ members; FDI companies (regardless of size); and entities in certain regulated sectors (banks, insurance, securities, certain non-profits).",
        "Single-member LLCs without FDI are not subject to mandatory audit but may elect to have one for credibility or group reporting purposes.",
        "Representative offices are not subject to audit (no Vietnam-source revenue, no financial statements).",
        "Failure to commission a statutory audit when required triggers penalties of VND 5–25 million and potential criminal liability for the legal representative in severe cases.",
      ],
    },
    {
      id: "select-auditor",
      heading: "Selecting an auditor",
      body: [
        "The auditor is appointed by the shareholders (for JSCs) or the members (for LLCs) at the annual general meeting. The appointment is for one year and renewable.",
        "For FDI companies, the parent typically proposes the auditor (often a Big-4 firm or a major international network). The local entity's board ratifies the appointment.",
        "Auditor categories: Big-4 (PwC, EY, KPMG, Deloitte); major international networks (BDO, Grant Thornton, RSM, Mazars, Baker Tilly); and local firms (Auditing and Accounting Consultancy Service Co., AASC, etc.). The choice depends on the parent's preference, the entity's complexity, and the cost.",
        "Auditor rotation: there is no mandatory rotation requirement in Vietnam (unlike some other jurisdictions). However, the parent may require rotation for independence reasons.",
      ],
    },
    {
      id: "process",
      heading: "The audit process",
      body: [
        "Audit planning: typically 2–4 weeks before fieldwork. The auditor assesses risk, designs the audit approach, and identifies the key audit areas.",
        "Fieldwork: 2–6 weeks depending on the size and complexity. The auditor tests transactions, verifies balances, evaluates internal controls, and obtains confirmations from third parties (banks, customers, suppliers).",
        "Review and opinion: 1–2 weeks after fieldwork. The auditor's partner reviews the working papers, evaluates the findings, and signs the opinion.",
        "The audit is typically completed by 31 March for calendar-year companies (the same deadline as the CIT finalisation return). Late completion requires an extension request and may trigger a penalty.",
      ],
    },
    {
      id: "opinions",
      heading: "Audit opinions",
      body: [
        "Unqualified opinion: the auditor concludes that the financial statements give a true and fair view. This is the standard expectation for a well-run company.",
        "Qualified opinion: the auditor identifies a specific issue that affects the financial statements but is not pervasive. The qualification is described in the opinion.",
        "Adverse opinion: the auditor identifies pervasive issues that materially misstate the financial statements. An adverse opinion is serious and triggers broader regulatory action.",
        "Disclaimer opinion: the auditor is unable to obtain sufficient evidence to form an opinion. This typically arises from severe scope limitations or pervasive uncertainty.",
      ],
    },
    {
      id: "fees",
      heading: "Audit fees",
      body: [
        "Audit fees for FDI companies range from USD 5,000 to USD 30,000+ depending on the size and complexity. Big-4 firms charge a premium over local firms and over international networks.",
        "Fee drivers: transaction volume, number of locations, complexity of related-party transactions, group reporting requirements, IFRS reconciliation needs, and audit history.",
        "Audit fees are typically fixed for the engagement, with additional fees for scope expansions (e.g. new locations, new subsidiaries). Annual fee negotiations are standard.",
      ],
    },
    {
      id: "management-letter",
      heading: "Management letter",
      body: [
        "The management letter is the auditor's communication to management on internal controls, accounting policies, and operational improvements. The letter is separate from the audit opinion but is delivered alongside it.",
        "The management letter covers: control deficiencies (significant deficiencies and material weaknesses), accounting policy choices, estimates and judgements, and operational observations.",
        "The management letter is reviewed by the parent company's auditors and the audit committee. Material weaknesses must be remediated; significant deficiencies should be addressed.",
      ],
    },
    {
      id: "liaison",
      heading: "Audit liaison with the parent",
      body: [
        "For group audits, the Vietnamese auditor coordinates with the parent's auditors. The coordination typically involves: clearance memoranda, working paper sharing, and confirmation of balances.",
        "The Vietnamese entity prepares a 'group reporting package' for the parent's auditors: VAS financial statements, IFRS-equivalent statements, statutory audit opinion, and management letter.",
        "We liaise with the parent's auditors on behalf of the Vietnamese entity, handling clearance memoranda, responding to queries, and ensuring the package is delivered on time.",
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common audit mistakes",
      body: [
        "The most expensive audit mistakes: (1) failing to commission a statutory audit when required, (2) engaging an unqualified auditor, (3) providing incomplete or inaccurate documentation, (4) missing the deadline for completion.",
        "The most common avoidable penalty: late completion of the audit. The penalty is small but signals poor compliance.",
        "The most expensive avoidable penalty: qualified or adverse opinion due to material misstatement. The GDT uses the audit opinion as a basis for CIT assessments.",
      ],
    },
  ],
  faqs: [
    makeFaq("Is a statutory audit mandatory in Vietnam?", "A statutory audit is required for joint-stock companies, limited liability companies with 2+ members, FDI companies, and entities in certain regulated sectors. Single-member LLCs without FDI are not required but may elect to have one."),
    makeFaq("How is the auditor selected?", "The shareholders appoint the auditor. For FDI companies, the head office typically proposes a Big-4 or top-tier firm, and the local entity's board ratifies. The appointment is for one year and renewable."),
    makeFaq("What is the audit timeline?", "A statutory audit typically runs February to March 31 (for calendar-year companies). Fieldwork is 2–6 weeks. The management letter and audit report are issued in March."),
    makeFaq("What is an unqualified audit opinion?", "An unqualified opinion means the auditor concludes that the financial statements give a true and fair view. Qualified, adverse, and disclaimer opinions indicate issues that the user of the financial statements should be aware of."),
    makeFaq("What is the typical audit fee?", "Audit fees for FDI companies range from USD 5,000 to USD 30,000+ depending on size and complexity. Big-4 firms charge a premium over local firms."),
    makeFaq("Can a foreign audit firm conduct the audit?", "No, the audit must be conducted by a Vietnamese-licensed audit firm. Foreign firms can act in an advisory or co-audit capacity but cannot sign the statutory opinion."),
    makeFaq("What is a management letter?", "The management letter is the auditor's communication to management on internal controls, accounting policies, and operational improvements. It is separate from the audit opinion."),
    makeFaq("What happens if the audit is not completed on time?", "Late completion triggers a penalty and may require an extension request to the GDT. The CIT finalisation return cannot be filed without the audited financial statements."),
    makeFaq("Can the same auditor audit for many years?", "There is no mandatory rotation requirement in Vietnam. However, the parent may require rotation for independence reasons. Big-4 firms typically rotate the engagement partner every 5–7 years."),
    makeFaq("How is the audit fee negotiated?", "Audit fees are typically fixed for the engagement, with additional fees for scope expansions. Annual fee negotiations are standard. We assist clients with fee benchmarking and negotiation."),
  ],
  relatedPillars: allPillars.filter((p) => p.slug !== "statutory-audit").slice(0, 6),
  relatedServices: allServices.filter((s) => s.href.includes("statutory") || s.href.includes("audit")),
  countries,
  industries,
};

// ============================================================================
// 10. PROFIT REPATRIATION
// ============================================================================
pillarPages["profit-repatriation"] = {
  ...pillarDefaults,
  slug: "profit-repatriation",
  path: "/guides/profit-repatriation",
  title: "Vietnam Profit Repatriation Guide: Dividends, Capital, Royalties",
  description: "Complete guide to Vietnam profit repatriation: dividend distributions, capital remittance, royalty payments, FCT considerations, SBV reporting, and tax-treaty relief.",
  keywords: ["Vietnam profit repatriation", "Vietnam dividend withholding", "Vietnam capital remittance", "Vietnam SBV reporting", "Vietnam shareholder return"],
  heroEyebrow: "Pillar Guide",
  heroTitle: "Vietnam Profit Repatriation",
  heroItalic: "the complete guide",
  heroDescription: "How profit repatriation works in Vietnam — dividend distributions, capital remittance, royalty payments, FCT, SBV reporting, and tax-treaty relief.",
  tableOfContents: [
    { id: "channels", label: "Repatriation channels" },
    { id: "dividends", label: "Dividend distributions" },
    { id: "capital", label: "Capital remittance" },
    { id: "royalties", label: "Royalty and fee repatriation" },
    { id: "sbv", label: "SBV reporting and approval" },
    { id: "documentation", label: "Documentation required" },
    { id: "common-mistakes", label: "Common repatriation mistakes" },
    { id: "faq", label: "Frequently asked questions" },
  ],
  intro:
    "Profit repatriation from Vietnam is governed by the foreign exchange controls administered by the State Bank of Vietnam (SBV) and the tax rules under the Law on Corporate Income Tax and the relevant DTAs. This guide explains how repatriation works in practice: the available channels (dividends, capital, royalties), the tax treatment of each, the SBV reporting and approval process, and the documentation required for remittance.",
  sections: [
    {
      id: "channels",
      heading: "Repatriation channels",
      body: [
        "Foreign investors in Vietnam can repatriate returns through three main channels: (1) dividends from after-tax profits; (2) capital remittance (original capital and any gain on transfer); (3) royalties, interest, and fees for services.",
        "Each channel has specific tax treatment and SBV reporting requirements. Dividends are subject to 0% withholding tax under Vietnamese domestic law (or treaty rate where applicable). Capital remittance is generally tax-free (subject to capital gains tax on the gain). Royalties and interest are subject to FCT or treaty-rate withholding.",
        "Repatriation requires: CIT finalisation for the relevant year, the SBV notification, the bank's remittance processing, and the documentation package.",
      ],
    },
    {
      id: "dividends",
      heading: "Dividend distributions",
      body: [
        "Dividends are paid from after-tax profits. A Vietnamese company can only pay dividends if it has accumulated after-tax profits.",
        "Dividend withholding tax: 0% under Vietnamese domestic law. Most DTAs also reduce to 0% (subject to conditions). The Vietnamese payer is responsible for declaring and remitting the 0% withholding.",
        "Dividends cannot be paid from share capital. The share capital must be maintained at the level registered in the ERC; dividends are paid from retained earnings.",
        "Quarterly dividends are permitted if the company has accumulated profits. Interim dividends require a board resolution and confirmation of profitability.",
      ],
    },
    {
      id: "capital",
      heading: "Capital remittance",
      body: [
        "Capital remittance is the return of the original investment capital. The remittance is processed by the bank with SBV notification.",
        "Capital gains tax: capital gains from the transfer of capital in a Vietnamese company are taxed as ordinary CIT at 20% on the actual gain (transfer price less cost of capital). The transfer must be declared and the tax paid.",
        "Capital remittance is not subject to withholding tax. The remittance is processed based on the original capital contribution documents.",
      ],
    },
    {
      id: "royalties",
      heading: "Royalty and fee repatriation",
      body: [
        "Royalty payments from Vietnam to foreign parties are subject to withholding tax under FCT (or treaty rate). The Vietnamese payer withholds and remits.",
        "Royalty FCT: VAT 5% deemed + PIT 10% deemed (or treaty rate). The treaty rate for royalties is typically 5–10%.",
        "Service fees for services performed partly in Vietnam are subject to FCT on the Vietnam-source portion. Services performed entirely outside Vietnam are not subject to FCT (with documentation).",
        "Documentation required: contract, beneficiary CoR (for treaty relief), description of services, place of performance, payment evidence.",
      ],
    },
    {
      id: "sbv",
      heading: "SBV reporting and approval",
      body: [
        "All capital transactions between foreign investors and Vietnam must be registered with the SBV via the company's bank. The registration includes: capital account opening, capital contribution, and capital remittance.",
        "The SBV does not pre-approve remittance, but the bank processes the remittance based on the SBV-registered capital account. Mismatches between the registered capital and the remittance trigger queries.",
        "Annual SBV reporting: FDI companies must file annual reports on capital, loans, and profit with the SBV. The reports are due by 31 March of the following year.",
        "Late or incorrect SBV reporting triggers penalties and may delay future remittances.",
      ],
    },
    {
      id: "documentation",
      heading: "Documentation required",
      body: [
        "Standard documentation for dividend remittance: board resolution declaring the dividend, CIT finalisation confirmation, audited financial statements (where applicable), bank account details of the recipient, and the SBV notification.",
        "Documentation for capital remittance: original capital contribution evidence, ERC, IRC, SBV capital account confirmation, and the bank's remittance request.",
        "Documentation for royalty remittance: royalty agreement, beneficiary CoR (for treaty relief), FCT declaration, and the bank's remittance request.",
        "The documentation must be retained for at least 10 years and may be requested by the SBV or the GDT in the event of an audit.",
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common repatriation mistakes",
      body: [
        "The most expensive repatriation mistakes: (1) failing to declare capital gains on capital transfer, (2) over-withholding on dividends (claiming treaty rate without CoR), (3) under-withholding on royalties, (4) failing to register the capital account with the SBV.",
        "The most common avoidable penalty: late SBV reporting. The penalty is small but delays future remittances.",
        "The most expensive avoidable penalty: failure to declare capital gains on the transfer of capital. The GDT assesses back tax, interest, and a 1–3x penalty.",
      ],
    },
  ],
  faqs: [
    makeFaq("What is the withholding tax on dividends?", "0% under Vietnamese domestic law. Most DTAs also reduce to 0% (subject to conditions). The Vietnamese payer declares and remits the 0% withholding."),
    makeFaq("How is capital remittance taxed?", "Capital remittance is generally tax-free. Capital gains on the transfer of capital in a Vietnamese company are taxed as ordinary CIT at 20% on the actual gain."),
    makeFaq("What is the FCT on royalties?", "Royalty FCT: VAT 5% deemed + PIT 10% deemed (or treaty rate). The treaty rate for royalties is typically 5–10%."),
    makeFaq("What is the SBV role in repatriation?", "The SBV administers foreign exchange controls. FDI companies must register the capital account, file annual reports, and notify the SBV of all capital transactions."),
    makeFaq("Can a company pay dividends if it has no profits?", "No, dividends can only be paid from after-tax profits. A company with accumulated losses cannot pay dividends until the losses are offset."),
    makeFaq("How long does repatriation take?", "Standard repatriation processing is 2–4 weeks from the board resolution to the bank remittance. Delays occur where documentation is incomplete or SBV queries arise."),
    makeFaq("Are interim dividends permitted?", "Yes, interim dividends are permitted where the company has accumulated profits. A board resolution and confirmation of profitability are required."),
    makeFaq("What is the SBV annual report?", "FDI companies file annual reports on capital, loans, and profit with the SBV by 31 March of the following year. Late or incorrect reporting triggers penalties."),
    makeFaq("Can loan principal be repatriated?", "Yes, loan principal is repatriated as a separate transaction from dividends. The loan agreement must be registered with the SBV and the principal remittance is processed with SBV notification."),
    makeFaq("What is a Certificate of Residence (CoR)?", "A CoR is a document issued by the foreign recipient's home tax authority confirming tax residency. It is required to claim reduced treaty rates on dividends, interest, and royalties."),
  ],
  relatedPillars: allPillars.filter((p) => p.slug !== "profit-repatriation").slice(0, 6),
  relatedServices: allServices.filter((s) => s.href.includes("tax") || s.href.includes("accounting")),
  countries,
  industries,
};

export const pillarSlugs = Object.keys(pillarPages);
