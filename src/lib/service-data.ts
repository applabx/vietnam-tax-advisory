import { FAQ } from "./faq-data";

export type ServicePage = {
  slug: string;
  name: string;
  category: "core-services" | "business-setup" | "industries" | "countries";
  shortName: string;
  hero: {
    eyebrow: string;
    title: string;
    italic: string;
    description: string;
  };
  overview: string;
  whoNeeds: string[];
  legalRequirements: { title: string; desc: string }[];
  costs: { item: string; amount: string; note?: string }[];
  timeline: { phase: string; duration: string; desc: string }[];
  commonMistakes: string[];
  benefits: { title: string; desc: string }[];
  faqs: FAQ[];
};

const taxFaqs: FAQ[] = [
  { question: "What Vietnam tax services do you provide?", answer: "We provide end-to-end corporate income tax (CIT), value added tax (VAT), personal income tax (PIT), foreign contractor tax (FCT), withholding tax, transfer pricing documentation, and tax audit representation for foreign-owned companies in Vietnam." },
  { question: "How do you charge for tax services?", answer: "Tax services are typically bundled in a monthly retainer alongside accounting and payroll. Standalone projects (e.g. transfer pricing documentation, tax audit defence) are quoted as fixed fees. Hourly billing is reserved for ad-hoc advisory." },
  { question: "Can you represent us before the GDT?", answer: "Yes. We are a registered tax agent and represent clients in tax audits, tax appeals, and on-site inspections. Our team includes former MoF auditors with experience in GDT procedure." },
  { question: "Do you handle tax-treaty applications?", answer: "Yes. We process Certificate of Residence (CoR) filings, treaty-rate withholding applications, and treaty-claim procedures. Vietnam has DTAs with 80+ countries; we maintain a current list and renewal calendar for our clients." },
];

const accountingFaqs: FAQ[] = [
  { question: "What accounting software do you support?", answer: "We work with Xero, QuickBooks Online, Sage, and a range of Vietnamese systems (MISA SME.NET, Fast Accounting). For most FDI clients we recommend Xero or QBO with a Vietnam VAT module and bank-feed integration." },
  { question: "Do you provide English-language financial statements?", answer: "Yes. All financial statements and management accounts are prepared in English (with Vietnamese statutory versions as required). We use templates approved by your head office and reconcile to your group's reporting calendar." },
  { question: "Can you prepare IFRS reconciliations?", answer: "Yes. We reconcile VAS statutory financials to IFRS for group reporting, including differences in revenue recognition, lease accounting, deferred tax, and impairment. The reconciliation package is delivered to your group reporting deadline." },
  { question: "How is the chart of accounts aligned with group reporting?", answer: "We map the Vietnam chart of accounts to your group's reporting structure. A typical setup is 4-digit VAS code for statutory and 6-digit group code for management reporting, with monthly mapping and a quarterly reconciliation." },
];

const payrollFaqs: FAQ[] = [
  { question: "Do you process payroll in VND only or also in foreign currency?", answer: "Both. Local employees are paid in VND to a Vietnamese bank account. Expatriates on a contract that allows foreign-currency payment can be paid in USD, EUR, JPY, etc. We reconcile the FX at the contract rate agreed with the employee." },
  { question: "How do you handle tax equalisation for expatriates?", answer: "We model the tax-equalisation policy, prepare monthly gross-up calculations, project the annual cost, and reconcile to the actual tax paid in both countries. The deliverable is a monthly hypo-tax register for the assignee." },
  { question: "Can you manage social insurance registration?", answer: "Yes. We register new employees with the social insurance agency, prepare the monthly contribution file, file the quarterly reconciliation, and handle the SI book and dependent-registration updates." },
  { question: "What happens during a payroll audit?", answer: "We represent the company in the labour-authority audit, prepare the supporting documents, attend the on-site review, and handle the remediation. Pre-audit, we run a compliance health-check to identify and resolve issues." },
];

const fctFaqs: FAQ[] = [
  { question: "When does FCT not apply to offshore services?", answer: "FCT does not apply where services are performed entirely outside Vietnam and consumed outside Vietnam. The exemption requires documented evidence: a contract identifying the place of performance, beneficiary location, and beneficiary-bank evidence. We help assemble the file." },
  { question: "Can a foreign contractor register as a direct filer?", answer: "Yes. A foreign contractor with a Vietnamese permanent establishment can register as a direct filer and pay CIT/VAT on actuals, avoiding the deemed regime. We assist with the registration and the ongoing compliance." },
  { question: "How is digital-service FCT paid?", answer: "Foreign providers of digital services to Vietnamese consumers use the GDT's e-portal to register, declare quarterly, and pay FCT. We act as tax representative and handle the filings." },
  { question: "What is the FCT rate on royalties?", answer: "Royalties are typically subject to VAT 5% + PIT 10% (treaty rates commonly reduce PIT to 5–10%). The Vietnamese payer withholds and remits." },
];

const tpFaqs: FAQ[] = [
  { question: "Do all FDI companies need a Local File?", answer: "A Local File is required for companies with related-party transactions of VND 50 billion or more in a fiscal year. Below the threshold, preparation of a contemporaneous file is best practice and reduces audit risk." },
  { question: "What is the typical Local File timeline?", answer: "A Local File is prepared within 3–6 weeks of the fiscal year-end and is ready by the CIT finalisation deadline. A Master File takes 6–10 weeks due to group-level data collection." },
  { question: "How much does transfer pricing documentation cost?", answer: "A Local File for a single Vietnamese entity typically costs USD 5,000–12,000. A Master File for the group is USD 8,000–18,000. CbCR notification is USD 1,500–3,000. A full benchmarking study is USD 3,000–8,000 depending on the number of tested parties." },
  { question: "What is a TP audit defence?", answer: "A TP audit defence is the representation of the company before the GDT in a transfer-pricing review. It includes responding to information requests, presenting the documentation, negotiating adjustments, and appealing assessments." },
];

const auditFaqs: FAQ[] = [
  { question: "Is a statutory audit mandatory in Vietnam?", answer: "A statutory audit is required for joint-stock companies, limited liability companies with 2+ members, FDI companies, and entities in certain regulated sectors. The audit is performed by an independent audit firm licensed in Vietnam." },
  { question: "How is the auditor selected?", answer: "The shareholders appoint the auditor. For FDI companies, the head office typically proposes a Big-4 or top-tier firm, and the local entity's board ratifies. The appointment is for one year and renewable." },
  { question: "What is the audit timeline?", answer: "A statutory audit typically runs February to March 31 (for calendar-year companies). Fieldwork is 2–6 weeks depending on the size of the entity and the number of locations. The management letter and audit report are issued in March." },
  { question: "What is an unqualified audit opinion?", answer: "An unqualified opinion means the auditor concludes that the financial statements give a true and fair view. Qualified, adverse, and disclaimer opinions indicate issues that the user of the financial statements should be aware of." },
];

const cfoFaqs: FAQ[] = [
  { question: "What is a virtual CFO?", answer: "A virtual CFO is a senior finance leader who works with your business on a fractional basis. They provide strategic guidance, financial planning, board reporting, and oversight of the finance function without the cost of a full-time CFO." },
  { question: "How is a virtual CFO different from an accounting firm?", answer: "An accounting firm records transactions and prepares tax filings. A virtual CFO uses that data to drive decisions: cash-flow forecasting, scenario planning, fundraising, M&A, and board engagement. Many clients use both." },
  { question: "What is the typical cost of a virtual CFO?", answer: "Virtual CFO engagements range from USD 2,000 to USD 8,000 per month depending on the frequency, scope, and seniority. A 2-day-per-month engagement is the most common starting point." },
  { question: "Can a virtual CFO serve on our board?", answer: "Yes. Many of our virtual CFOs take a non-executive director or advisory-board role for an additional fee. The role is governed by the company's charter and any local directorship rules." },
];

const bookkeepingFaqs: FAQ[] = [
  { question: "How often is bookkeeping done?", answer: "Monthly, with optional weekly processing for high-transaction entities. We close the books within 10 working days of month-end, issue the management pack, and file the VAT return by the 20th." },
  { question: "What is the cost of monthly bookkeeping?", answer: "Monthly bookkeeping fees start at USD 250/month for representative offices and scale with transaction volume, complexity, and reporting requirements. A typical FDI entity pays USD 600–1,500 per month." },
  { question: "Do you reconcile bank statements monthly?", answer: "Yes. Bank reconciliation is part of the standard close. We work with bank feeds for automation and reconcile any unmatched items in the management pack." },
  { question: "Can you clean up prior-year books?", answer: "Yes. We perform a catch-up engagement to reconcile prior years, restate the financial statements, and bring the books current. This is a common engagement for newly acquired entities or those switching from another advisor." },
];

const corporateTaxFaqs: FAQ[] = [
  { question: "How is CIT calculated in Vietnam?", answer: "CIT is calculated as 20% of taxable profit. Taxable profit is accounting profit adjusted for non-deductible expenses, non-taxable income, and incentives. The annual finalisation return reconciles the quarterly provisional CIT to the actual annual liability." },
  { question: "When are quarterly CIT payments due?", answer: "Quarterly CIT is due by the 30th day of the month following the quarter end. Q1 by 30 April, Q2 by 31 July, Q3 by 31 October, and Q4 by 31 January of the following year. The annual finalisation reconciles the cumulative Q1–Q4 to the actual liability." },
  { question: "What CIT incentives are common for FDI?", answer: "Common incentives: 10% rate for high-tech and certain software projects; 15% for encouraged zones and encouraged industries; tax holidays of 2–6 years for new projects. Eligibility must be confirmed at IRC application and registered with the GDT." },
  { question: "How are inter-company charges treated for CIT?", answer: "Inter-company charges are deductible to the Vietnamese entity if arm's length, supported by a service agreement, and a benefit test. The GDT requires contemporaneous documentation; non-arm's-length charges are added back to taxable profit." },
];

const vatFaqs: FAQ[] = [
  { question: "What is the standard VAT rate?", answer: "10% is the standard rate, with reductions of 5% and 8% for specified categories. Exports are 0%. Some categories transition between rates (8% during 1 Feb 2025 – 31 Dec 2026, reverting to 10% thereafter)." },
  { question: "Can VAT be refunded?", answer: "VAT refunds are available for: FDI in pre-revenue phase in encouraged industries; exporters with input VAT exceeding output VAT; and certain other categories. General businesses cannot claim refunds and carry the credit forward." },
  { question: "What is the VAT declaration cycle?", answer: "Monthly or quarterly. Quarterly is available for companies with revenue below VND 50 billion in the prior calendar year. Returns are due by the 20th of the month following the period." },
  { question: "How is input VAT validated?", answer: "Input VAT is creditable where: the invoice is valid (correct form, content, supplier tax code); the underlying purchase is for a deductible business purpose; the goods/services are received; and payment is supported. Non-compliant invoices are not creditable." },
];

const setupCompanyFaqs: FAQ[] = [
  { question: "How long does company registration take?", answer: "Standard timeline: 4–8 weeks for a 100% foreign-owned company. Pre-engagement with the Department of Planning and Investment, document preparation, IRC review, ERC issuance, and post-licence registrations (tax, SI, seal, bank) all factor in." },
  { question: "What is the minimum capital for a foreign company?", answer: "There is no universal statutory minimum, but the IRC approval typically requires a capital amount consistent with the project. Capital-intensive sectors (manufacturing, real estate) have higher practical floors." },
  { question: "What documents are needed for incorporation?", answer: "Commonly required: parent-company documents (certificate of incorporation, articles, audited financials), passport copies of the legal representative, the investment project proposal, the company's charter, and a proof of address for the planned office." },
  { question: "Can a foreign company hold 100% ownership?", answer: "Yes, in most sectors Vietnam permits 100% foreign ownership. Conditional sectors (e.g. telecommunications, certain logistics, certain media) have foreign-ownership caps or require a local partner." },
];

const foreignCompanyFaqs: FAQ[] = [
  { question: "What is the difference between an IRC and an ERC?", answer: "The Investment Registration Certificate (IRC) authorises the investment project. The Enterprise Registration Certificate (ERC) establishes the legal entity. Both are required for a foreign-owned company; the ERC is obtained after the IRC." },
  { question: "What is the role of the legal representative?", answer: "The legal representative is the individual authorised to bind the company in contracts and represent it before authorities. The legal representative's name is on the ERC; the position is held by an individual (resident or non-resident) and may be a foreigner." },
  { question: "Do I need a Vietnamese director?", answer: "No. The legal representative can be a foreigner. However, a Vietnamese-resident person is often required for certain filings, bank account opening, and tax registration. A local service-of-process address is also required." },
  { question: "What is the cost of foreign company setup?", answer: "Government fees are typically VND 3–10 million. Professional fees (legal, tax, secretarial) range from USD 5,000 to USD 25,000 depending on the sector and complexity." },
];

const ircErcFaqs: FAQ[] = [
  { question: "What is an IRC?", answer: "An Investment Registration Certificate is the document issued by the Department of Planning and Investment that authorises a foreign investment project. It records the project name, scope, capital, location, and investor." },
  { question: "What is an ERC?", answer: "An Enterprise Registration Certificate is the document issued by the DPI that establishes a legal entity. It records the company name, charter, registered address, legal representative, and members/shareholders." },
  { question: "Can the IRC and ERC be obtained in parallel?", answer: "No. The ERC requires the IRC to be issued first. The two are sequential: IRC issuance, then ERC. The process can be expedited with a competent local counsel and pre-engagement with the DPI." },
  { question: "How long is the IRC valid?", answer: "The IRC is valid for the duration of the project, typically tied to the land-use term or the licence period. It is not a time-limited certificate in the same way as a work permit, but it can be amended or revoked for cause." },
];

const repOfficeFaqs: FAQ[] = [
  { question: "What activities can a representative office conduct?", answer: "A representative office is limited to non-commercial activities: market research, liaison with local partners, monitoring the parent's investments, and promoting the parent's business. It cannot sell, sign contracts, or generate revenue in Vietnam." },
  { question: "How is a rep office set up?", answer: "A representative office requires an IRC from the Department of Planning and Investment (or the Ministry of Planning and Investment for certain sectors). Documents include the parent's certificate of incorporation, financial statements, and a chief-representative appointment." },
  { question: "How is a rep office taxed?", answer: "A representative office is not subject to CIT or VAT because it has no Vietnam-source revenue. Operating expenses (rent, salaries, utilities) are paid by the parent; the office must still register with the tax authority and file a non-business declaration." },
  { question: "Can a rep office hire local staff?", answer: "Yes. A rep office can hire local staff under local labour contracts. The chief representative must be a foreign national with a work permit (or work-permit exemption). The local staff are subject to the same payroll, SI, and PIT rules as any other local employee." },
];

const branchOfficeFaqs: FAQ[] = [
  { question: "Can a foreign company open a branch in Vietnam?", answer: "Yes, in permitted sectors. Branches are extensions of the foreign parent, not separate legal entities, and the parent is directly liable. The branch is established by registering with the Department of Planning and Investment under the foreign-branch rules." },
  { question: "What is the difference between a branch and a subsidiary?", answer: "A branch is an extension of the parent. A subsidiary is a separate Vietnamese legal entity with limited liability. Branches are restricted in the activities they can undertake and are not available in all sectors." },
  { question: "How is a branch office taxed?", answer: "A branch is taxed as a foreign entity on Vietnam-source income at 20% CIT. It is required to withhold FCT on payments to foreign suppliers, register for SI/PIT, and file a CIT return as a permanent establishment." },
  { question: "What are the restrictions on a branch office?", answer: "Branches cannot undertake activities reserved for Vietnamese-licensed entities (e.g. certain financial services, real-estate brokerage, certain construction activities). They are also restricted in their ability to bid on public procurement and to hold title to land." },
];

const workPermitFaqs: FAQ[] = [
  { question: "How long does a work permit take?", answer: "4–8 weeks from document preparation to issuance, longer if apostilled documents are required. Begin the process at least 3 months before the start date." },
  { question: "What are the work-permit exemptions?", answer: "Common exemptions: internal transferees (12+ months with the related entity), shareholders contributing more than VND 3 billion, members of the board of management not directly working, specialists on short-term projects, and certain professionals with practising certificates." },
  { question: "How long is a work permit valid?", answer: "Up to 2 years. The permit is not renewable in practice; a fresh application is required for each term. Re-application should begin 2–3 months before expiry." },
  { question: "What is the cost of a work permit?", answer: "Government fees are typically VND 1–2 million. Professional fees (document preparation, apostille, medical, translation) range from USD 1,500 to USD 5,000 per employee." },
];

const saasFaqs: FAQ[] = [
  { question: "What is the typical setup for a SaaS company in Vietnam?", answer: "Most SaaS companies set up a 100%-foreign-owned LLC with a sales and marketing presence. The Vietnamese entity is typically a limited-risk distributor: it books Vietnam-sourced subscription revenue and pays a royalty to the offshore IP holder under FCT." },
  { question: "How is SaaS revenue taxed in Vietnam?", answer: "Subscription revenue from Vietnamese customers is Vietnam-source income and is subject to 20% CIT. If the SaaS is sold by an offshore entity to Vietnamese customers, the deemed FCT (5% VAT + 5% PIT) applies. We help structure the operation to optimise the total tax cost." },
  { question: "What expenses are deductible for a SaaS company?", answer: "Marketing, sales staff, cloud infrastructure (where the customer is in Vietnam), office rent, and a portion of regional overhead allocated to Vietnam are deductible. Cost-sharing agreements must be arm's length and documented." },
  { question: "How are R&D credits treated in Vietnam?", answer: "Vietnam does not have an R&D tax credit like the US R&D credit. However, certain R&D activities in encouraged sectors may qualify for CIT incentives (10% rate, tax holiday). The eligibility must be confirmed at IRC application." },
];

const manufacturingFaqs: FAQ[] = [
  { question: "What licences are needed for a manufacturing company?", answer: "Manufacturing FDI typically requires: IRC, ERC, environmental permit, construction permit, fire-safety permit, and product-specific sub-licences. The timeline is 6–12 months for a greenfield project." },
  { question: "How is the manufacturing corporate tax rate determined?", answer: "Standard 20% applies. Incentives depend on the sector and location: 10% for high-tech projects, 15% for projects in encouraged zones, and 17% for certain supporting industries. Tax holidays of 2–6 years may apply to new projects." },
  { question: "What are the import-duty considerations for manufacturers?", answer: "Manufacturers can defer import duty on raw materials and components used in production. Export products may be zero-rated for export duty. Free-trade zones and export-processing zones offer additional benefits. We help structure the customs declarations." },
  { question: "How is transfer pricing handled for a manufacturing subsidiary?", answer: "Manufacturers typically operate as contract manufacturers or limited-risk manufacturers with arm's-length mark-ups (often 5–7% on cost). The TP documentation, benchmarking study, and inter-company agreement are essential to support the pricing." },
];

const ecommerceFaqs: FAQ[] = [
  { question: "How is e-commerce taxed in Vietnam?", answer: "Domestic e-commerce is taxed at 20% CIT and 10% VAT (with reductions for certain categories). Foreign e-commerce suppliers without a PE must register for VAT via the GDT portal and pay quarterly FCT. Platforms must withhold tax on individual sellers." },
  { question: "What is the tax treatment of marketplace income?", answer: "Marketplace income (commission, listing fees, advertising) is VAT-taxable and subject to CIT. Cross-border services consumed in Vietnam are subject to FCT. We help platforms structure the operation and the withholding regime." },
  { question: "What is the role of a tax representative for foreign e-commerce?", answer: "A tax representative is a Vietnamese-resident entity appointed by a foreign e-commerce supplier to handle VAT registration, declaration, and payment. The representative is jointly liable for the supplier's compliance. We act as tax representative for several foreign platforms." },
  { question: "What are the bookkeeping obligations for an e-commerce seller?", answer: "An e-commerce seller is required to maintain the same books as any other entity: cash book, general ledger, sub-ledgers, tax registers, and statutory financial statements. E-commerce-specific records include platform reports, transaction logs, and reconciliation to bank receipts." },
];

const techStartupFaqs: FAQ[] = [
  { question: "What incentives are available for tech startups?", answer: "Tech startups in software, IT services, R&D, and digital content may qualify for: 10% CIT for high-tech projects, tax holidays of 2–6 years, and 50% reduction for up to 9 subsequent years. Eligibility requires registration with the high-tech authority and the GDT." },
  { question: "How is a tech startup typically structured in Vietnam?", answer: "Most tech startups set up a 100%-foreign-owned LLC. Pre-revenue startups often operate with a small team and rely on the parent for capital. The Vietnamese entity grows as the customer base in Vietnam grows." },
  { question: "What ESOP rules apply in Vietnam?", answer: "ESOPs are taxed at vesting. The taxable amount is the fair market value at vesting less any exercise price paid. The company must withhold PIT at vesting and declare monthly. Cash settlement is taxed at receipt." },
  { question: "What grants and incentives are available from the government?", answer: "Vietnam offers support for tech startups via the National Technology Innovation Fund, the High-Tech Park incentive scheme, and various provincial-level programs. Eligibility and timing vary; we help identify and apply for the relevant programs." },
];

const foreignOwnedFaqs: FAQ[] = [
  { question: "What is the difference between a 100% foreign-owned company and a joint venture?", answer: "A 100% foreign-owned company (Wholly Foreign-Owned Enterprise, WFOE) is wholly owned by the foreign investor. A joint venture is owned by both a foreign and a local partner. The choice depends on the sector, the local-partner value, and the strategic goals." },
  { question: "What are the obligations specific to WFOEs?", answer: "WFOEs have specific obligations: SBV reporting on capital and loans, transfer pricing documentation, IRC amendments for material changes, and stricter approvals for share transfers. We help WFOEs navigate these obligations." },
  { question: "How is profit repatriation handled for a WFOE?", answer: "After-tax profits can be distributed as dividends. There is no Vietnamese withholding tax on dividends paid to a foreign corporate shareholder. The remittance is processed by the bank with SBV notification." },
  { question: "What is the role of a local service-of-process address?", answer: "A WFOE must maintain a registered address in Vietnam for service of process. The address is recorded on the ERC. We provide registered-office services and mail handling for clients that do not maintain a physical office." },
];

const singaporeFaqs: FAQ[] = [
  { question: "What is the typical Vietnam setup for a Singapore company?", answer: "Singapore-headquartered companies typically set up a 100%-foreign-owned LLC in Vietnam with a sales/marketing presence. The Vietnam entity may be a subsidiary of the Singapore parent or a regional subsidiary. The choice depends on tax-treaty and group-reporting considerations." },
  { question: "How is the Singapore-Vietnam tax treaty applied?", answer: "The Singapore-Vietnam DTA reduces withholding tax on dividends to 0% (in many cases), on interest to 10%, and on royalties to 5–10%. To claim treaty benefits, the Singapore parent must obtain a Certificate of Residence from IRAS and submit it to the Vietnamese payer." },
  { question: "What is the typical engagement model for a Singapore client?", answer: "Singapore clients typically have a parent-coordinator model: the Singapore head office engages us, and we liaise with the local entity. Monthly reporting is in English, with quarterly consolidation to the Singapore parent's reporting calendar." },
  { question: "What reporting package does a Singapore parent expect?", answer: "Singapore parents typically expect: monthly management accounts (in SGD or USD), quarterly statutory financials, the annual audit package, the TP documentation, and a quarterly compliance update. The reporting calendar is set to the Singapore fiscal year." },
];

const australiaFaqs: FAQ[] = [
  { question: "What is the typical Vietnam setup for an Australian company?", answer: "Australian companies typically set up a sales/marketing subsidiary or a regional operations centre in Vietnam. The subsidiary is 100%-foreign-owned. The Australian parent typically uses Vietnam as a low-cost engineering or operations hub." },
  { question: "How is the Australia-Vietnam tax treaty applied?", answer: "The Australia-Vietnam DTA reduces withholding tax on dividends to 0% (where the parent holds a qualifying stake and is a company), on interest to 10%, and on royalties to 10%. The Australian parent must obtain a Certificate of Residence from the ATO and submit it for treaty claims." },
  { question: "What is the typical engagement model for an Australian client?", answer: "Australian clients expect English-first communication, ATO-compliant transfer pricing documentation, and reporting that reconciles to the Australian group's calendar. We provide monthly management accounts, quarterly compliance, and the annual audit liaison." },
  { question: "What is the typical AUD/USD reporting framework?", answer: "Australian parents typically want reporting in AUD. We maintain an AUD-functional ledger for management reporting, with the VND functional ledger for statutory. FX gains/losses are reconciled to the parent's reporting currency." },
];

const usFaqs: FAQ[] = [
  { question: "What is the typical Vietnam setup for a US company?", answer: "US companies typically set up a sales subsidiary or a regional engineering centre. The subsidiary is 100%-foreign-owned. US companies often have a regional CFO overseeing multiple Asian entities, and the Vietnam entity reports into that structure." },
  { question: "How is the US-Vietnam tax treaty applied?", answer: "Vietnam and the US do not have a comprehensive tax treaty. The standard Vietnamese rates apply: 0% withholding on dividends to a US corporate parent (under Vietnamese domestic law), 5% FCT on royalties, 10% on interest. The absence of a treaty makes structure and substance critical." },
  { question: "How is FCPA and anti-bribery compliance handled in Vietnam?", answer: "Vietnam has anti-bribery laws and accounting-record-keeping requirements that align broadly with FCPA expectations. We help clients maintain adequate books and records, document third-party engagements, and provide training." },
  { question: "What reporting does a US parent expect for SOX compliance?", answer: "US parents subject to SOX expect: documented internal controls, audit-trail evidence, segregation-of-duties review, IT general controls review, and management certifications. We provide the working papers and controls evidence to support the parent's SOX audit." },
];

const ukFaqs: FAQ[] = [
  { question: "What is the typical Vietnam setup for a UK company?", answer: "UK companies typically set up a sales subsidiary or a representative office. The subsidiary is 100%-foreign-owned. UK companies often use Vietnam as a low-cost engineering or manufacturing hub for APAC." },
  { question: "How is the UK-Vietnam tax treaty applied?", answer: "The UK-Vietnam DTA reduces withholding tax on dividends to 0% (where the parent holds a qualifying stake), on interest to 10%, and on royalties to 5–10%. The UK parent must obtain a Certificate of Residence from HMRC and submit it for treaty claims." },
  { question: "What is the typical engagement model for a UK client?", answer: "UK clients expect English-language reporting, HMRC-compliant transfer pricing documentation, and consolidation to the UK group's reporting calendar. We provide monthly management accounts, quarterly compliance, and the annual audit liaison." },
  { question: "What is the typical UK reporting framework?", answer: "UK parents expect reporting under FRS 102 or IFRS. We prepare the Vietnam financial statements in VAS and reconcile to the UK group's reporting framework. Differences in revenue recognition, lease accounting, and deferred tax are reconciled in a quarterly package." },
];

const japanFaqs: FAQ[] = [
  { question: "What is the typical Vietnam setup for a Japanese company?", answer: "Japanese companies typically set up a 100%-foreign-owned sales subsidiary or manufacturing entity. The subsidiary is owned directly by the Japan parent or via a regional holding company (typically Singapore or Hong Kong). The Japan parent typically uses Vietnam as a manufacturing hub." },
  { question: "How is the Japan-Vietnam tax treaty applied?", answer: "The Japan-Vietnam DTA reduces withholding tax on dividends to 0% (where the parent holds 50%+ for 6 months and is a company), on interest to 10%, and on royalties to 10%. The Japan parent must obtain a Certificate of Residence from the NTA and submit it for treaty claims." },
  { question: "What is the typical engagement model for a Japanese client?", answer: "Japanese clients expect bilingual reporting (English/Japanese), J-SOX or Japanese-style internal controls, and reporting that reconciles to the Japan parent's calendar. We provide monthly management accounts, quarterly compliance, and the annual audit liaison." },
  { question: "What is the typical JPY reporting framework?", answer: "Japanese parents often want reporting in JPY. We maintain a JPY-functional ledger for management reporting. FX gains/losses are reconciled to the parent's reporting currency. The TP documentation follows Japanese transfer-pricing guidance." },
];

const koreaFaqs: FAQ[] = [
  { question: "What is the typical Vietnam setup for a Korean company?", answer: "Korean companies typically set up a 100%-foreign-owned sales subsidiary or manufacturing entity. The subsidiary is owned directly by the Korea parent or via a regional holding company. The Korea parent typically uses Vietnam as a manufacturing hub." },
  { question: "How is the Korea-Vietnam tax treaty applied?", answer: "The Korea-Vietnam DTA reduces withholding tax on dividends to 0% (where the parent holds 50%+ for 6 months and is a company), on interest to 10%, and on royalties to 5–10%. The Korea parent must obtain a Certificate of Residence from the NTS and submit it for treaty claims." },
  { question: "What is the typical engagement model for a Korean client?", answer: "Korean clients expect bilingual reporting (English/Korean), Korean-style internal controls, and reporting that reconciles to the Korea parent's calendar. We provide monthly management accounts, quarterly compliance, and the annual audit liaison." },
  { question: "What is the typical KRW reporting framework?", answer: "Korean parents often want reporting in KRW. We maintain a KRW-functional ledger for management reporting. FX gains/losses are reconciled to the parent's reporting currency. The TP documentation follows Korean transfer-pricing guidance." },
];

export const servicePages: Record<string, ServicePage> = {
  accounting: {
    slug: "accounting",
    name: "Accounting Services Vietnam",
    category: "core-services",
    shortName: "Accounting",
    hero: {
      eyebrow: "Core Service",
      title: "Accounting services in",
      italic: "Vietnam for foreign companies",
      description:
        "Monthly bookkeeping, management accounts, and year-end financial statements under VAS — delivered in English, ready for your head office and group consolidation.",
    },
    overview:
      "Our accounting service is the foundation of compliance for foreign-owned companies in Vietnam. We deliver monthly bookkeeping in line with the Vietnamese Accounting System (VAS), produce management accounts in English, and prepare year-end financial statements that satisfy the General Department of Taxation (GDT), your auditor, and your group consolidation needs. We work on cloud platforms (Xero, QuickBooks, Sage) so your CFO and head office have live visibility into the numbers.",
    whoNeeds: [
      "100%-foreign-owned companies operating in Vietnam",
      "Joint ventures that need bilingual reporting to both parents",
      "Regional headquarters with multi-entity Vietnam operations",
      "Startups that need an outsourced finance function",
      "Foreign-owned companies under audit or restructuring",
    ],
    legalRequirements: [
      { title: "Vietnamese Accounting System (VAS)", desc: "All entities must maintain books under VAS. Financial statements must be in Vietnamese with English translations for the company's own use." },
      { title: "Statutory financial statements", desc: "Annual financial statements must be prepared and filed with the tax authority within 90 days of fiscal year-end." },
      { title: "Statutory audit", desc: "Limited liability companies with 2+ members, joint-stock companies, and FDI companies must be audited annually by a licensed Vietnamese audit firm." },
      { title: "Tax authority filings", desc: "Monthly VAT, quarterly CIT provisional, and annual CIT finalisation filings must be submitted in addition to the financial statements." },
    ],
    costs: [
      { item: "Basic monthly bookkeeping (≤ 80 transactions)", amount: "from USD 250 / month" },
      { item: "Standard FDI monthly bookkeeping (unlimited transactions)", amount: "from USD 800 / month" },
      { item: "Year-end financial statements (VAS)", amount: "from USD 1,200" },
      { item: "IFRS reconciliation (per period)", amount: "from USD 1,500" },
      { item: "Catch-up / clean-up of prior years", amount: "from USD 3,000 per year" },
    ],
    timeline: [
      { phase: "Onboarding", duration: "Week 1–2", desc: "Chart of accounts setup, opening balances, system access, document collection." },
      { phase: "First month close", duration: "Week 3–6", desc: "Process opening transactions, reconcile bank accounts, produce first management pack." },
      { phase: "Steady state", duration: "From month 3", desc: "Monthly close within 10 working days, monthly management pack, quarterly review with advisor." },
    ],
    commonMistakes: [
      "Mixing personal and company expenses (a frequent GDT audit finding)",
      "Failing to record inter-company transactions in real time",
      "Treating the parent's invoice to the local entity as the same as the local entity's own expenses",
      "Missing the FX gain/loss on the foreign-currency bank account",
      "Failing to obtain valid VAT invoices for expenses that are creditable",
    ],
    benefits: [
      { title: "English-first reporting", desc: "Every management pack and financial statement is delivered in English. No translation overhead for your CFO or board." },
      { title: "Cloud-based, live visibility", desc: "Xero, QuickBooks, or Sage with bank feeds. Your head office sees live numbers from anywhere." },
      { title: "Group reconciliation", desc: "Mapping the Vietnam chart of accounts to your group's reporting structure, with monthly reconciliation." },
      { title: "Audit-ready books", desc: "We work closely with your statutory auditor, providing working papers and reconciliations ahead of the audit." },
    ],
    faqs: accountingFaqs,
  },
  tax: {
    slug: "tax",
    name: "Tax Services Vietnam",
    category: "core-services",
    shortName: "Tax Services",
    hero: {
      eyebrow: "Core Service",
      title: "Tax services in",
      italic: "Vietnam for foreign companies",
      description:
        "CIT, VAT, PIT, FCT, withholding tax, transfer pricing, and tax audit defence — full GDT representation for foreign-owned companies.",
    },
    overview:
      "Our tax service covers every obligation a foreign-owned company faces in Vietnam: corporate income tax, value added tax, personal income tax, foreign contractor tax, withholding tax, transfer pricing, and tax audit defence. We are a registered tax agent and represent clients before the General Department of Taxation. Our team includes former Ministry of Finance auditors with experience across the full range of GDT procedures.",
    whoNeeds: [
      "FDI companies facing GDT audits or inspections",
      "Foreign-owned companies expanding into new sectors or new entities",
      "Joint ventures with complex inter-company flows",
      "Companies preparing for an exit or restructuring",
      "Foreign-owned companies that have under-declared and need a voluntary disclosure",
    ],
    legalRequirements: [
      { title: "CIT finalisation", desc: "Annual CIT finalisation return (Form 03/QTT-TNCN) within 90 days of fiscal year-end." },
      { title: "VAT monthly or quarterly", desc: "Monthly or quarterly VAT returns depending on revenue threshold." },
      { title: "PIT finalisation", desc: "Annual PIT finalisation for employees and directors." },
      { title: "FCT withholding", desc: "Withholding and remittance of FCT on payments to foreign contractors without a Vietnamese PE." },
    ],
    costs: [
      { item: "Tax filings (monthly + quarterly + annual)", amount: "from USD 600 / month" },
      { item: "Transfer pricing Local File", amount: "from USD 5,000" },
      { item: "Transfer pricing Master File", amount: "from USD 8,000" },
      { item: "GDT audit defence (per audit)", amount: "from USD 8,000" },
    ],
    timeline: [
      { phase: "Tax health check", duration: "Week 1–2", desc: "Review of the last 3 years of filings, identification of exposure, and remediation plan." },
      { phase: "Filings stabilisation", duration: "Month 1–3", desc: "Catch-up of any missed filings, voluntary disclosures if needed, baseline established." },
      { phase: "Steady state", duration: "From month 4", desc: "Monthly, quarterly, and annual filings on time. Quarterly compliance review with advisor." },
    ],
    commonMistakes: [
      "Treating inter-company management fees as deductible without the benefit test and the mark-up",
      "Under-declaring VAT on goods given as gifts or samples without proper documentation",
      "Missing the FCT obligation on cross-border services (the deemed regime applies even where the service is performed offshore but consumed in Vietnam)",
      "Failing to obtain a Certificate of Residence before claiming treaty relief",
      "Not amending the CIT return when an audit identifies a correction",
    ],
    benefits: [
      { title: "GDT representation", desc: "We are a registered tax agent. We handle correspondence, attend meetings, and represent you in inspections." },
      { title: "Proactive alerts", desc: "We monitor regulatory changes and alert you before they affect your obligations — not after a penalty lands." },
      { title: "Voluntary disclosure", desc: "If you have under-declared, a voluntary disclosure is the lowest-cost route. We manage the process end-to-end." },
      { title: "Tax-planning input", desc: "Quarterly reviews identify tax-planning opportunities: transfer pricing, incentives, and structure optimisation." },
    ],
    faqs: taxFaqs,
  },
  bookkeeping: {
    slug: "bookkeeping",
    name: "Bookkeeping Services Vietnam",
    category: "core-services",
    shortName: "Bookkeeping",
    hero: {
      eyebrow: "Core Service",
      title: "Bookkeeping in",
      italic: "Vietnam for foreign companies",
      description:
        "Accurate, VAS-compliant monthly bookkeeping with real-time English-language reporting. General ledger, bank reconciliation, and management accounts — done right.",
    },
    overview:
      "Our bookkeeping service is the day-to-day engine of the finance function. We process transactions, reconcile bank accounts, manage accounts payable and receivable, and produce monthly management accounts in English. The result is a finance function that runs on time, on plan, and on a basis your head office can rely on for decision-making.",
    whoNeeds: [
      "FDI companies without an in-house accountant",
      "Startups that need to outsource the finance function",
      "Representative offices that need basic bookkeeping for tax-registration purposes",
      "Companies that have just been incorporated and need a clean baseline",
    ],
    legalRequirements: [
      { title: "VAS chart of accounts", desc: "All entries must follow the VAS chart of accounts. Sub-accounts may be added for management reporting." },
      { title: "Document retention", desc: "Invoices, contracts, and supporting documents must be retained for at least 10 years for accounting and 5 years for tax." },
      { title: "Bank reconciliation", desc: "Bank reconciliations must be performed monthly and any unreconciled items must be investigated and cleared." },
    ],
    costs: [
      { item: "Basic bookkeeping (≤ 80 transactions)", amount: "from USD 250 / month" },
      { item: "Standard bookkeeping (≤ 300 transactions)", amount: "from USD 500 / month" },
      { item: "Complex bookkeeping (multi-currency, multi-entity)", amount: "from USD 1,200 / month" },
    ],
    timeline: [
      { phase: "Onboarding", duration: "Week 1–2", desc: "Chart of accounts, opening balances, system access, document collection." },
      { phase: "First month close", duration: "Week 3–5", desc: "Process opening transactions, reconcile bank, produce first management pack." },
      { phase: "Steady state", duration: "From month 3", desc: "Close within 10 working days, monthly management pack, quarterly review." },
    ],
    commonMistakes: [
      "Mixing personal and company expenses",
      "Not coding inter-company transactions correctly",
      "Missing the FX gain/loss on the foreign-currency bank account",
      "Recording expenses without valid VAT invoices (and therefore losing the input credit)",
    ],
    benefits: [
      { title: "Clean books, clean audit", desc: "The books are reconciled, the documentation is complete, and the auditor's review is faster and cheaper." },
      { title: "Live visibility", desc: "Cloud-based systems with bank feeds give you live visibility into cash and the monthly P&L." },
      { title: "Scalable", desc: "We scale with you. As your transaction volume grows, we add capacity without changing the engagement model." },
    ],
    faqs: bookkeepingFaqs,
  },
  payroll: {
    slug: "payroll",
    name: "Payroll Services Vietnam",
    category: "core-services",
    shortName: "Payroll",
    hero: {
      eyebrow: "Core Service",
      title: "Payroll in",
      italic: "Vietnam for foreign companies",
      description:
        "Compliant payroll, expatriate tax, social insurance, and PIT finalisation for local and foreign staff. Payslips, SI filings, and PIT returns — done monthly.",
    },
    overview:
      "Payroll in Vietnam is more than just paying salaries. It includes social, health, and unemployment insurance contributions, personal income tax withholding, work-permit tracking, and year-end PIT finalisation. Our payroll service covers the full cycle: enrolment, monthly processing, payslips, SI filings, PIT returns, and year-end reconciliation.",
    whoNeeds: [
      "FDI companies with local and expatriate staff",
      "Startups hiring their first employees in Vietnam",
      "Representative offices with a small local team",
      "Companies with frequent joiners and leavers that need a streamlined process",
    ],
    legalRequirements: [
      { title: "Labour contract", desc: "All employees must have a written labour contract. Verbal contracts are not recognised under the labour code." },
      { title: "Social insurance", desc: "Employees with contracts of 1 month or more must be enrolled in SI/HI/UI. The employer is the registering and contributing party." },
      { title: "PIT withholding", desc: "The employer is responsible for monthly PIT withholding and remittance, and for annual PIT finalisation for each employee." },
      { title: "Work permits", desc: "Foreign employees must hold a valid work permit or work-permit exemption certificate before starting work." },
    ],
    costs: [
      { item: "Per-employee-per-month (PEPM)", amount: "from USD 25 per employee" },
      { item: "Expatriate payroll (with tax equalisation)", amount: "from USD 80 per employee" },
      { item: "Work permit processing", amount: "from USD 1,500 per employee" },
    ],
    timeline: [
      { phase: "Onboarding", duration: "Week 1", desc: "Employee data collection, SI registration, payroll system setup." },
      { phase: "First payroll", duration: "Week 2", desc: "Process first payroll, issue payslips, file first SI/PIT." },
      { phase: "Steady state", duration: "From month 2", desc: "Monthly payroll by the 25th, monthly SI/PIT filings, quarterly reconciliation." },
    ],
    commonMistakes: [
      "Paying in cash to avoid SI/PIT (illegal; penalties apply)",
      "Excluding fixed allowances from the SI contribution base",
      "Withholding PIT at the wrong rate (residents vs non-residents)",
      "Failing to obtain a work permit before the employee starts",
    ],
    benefits: [
      { title: "Compliant by design", desc: "All filings, contributions, and PIT withholdings are calculated correctly. Audit-ready documentation." },
      { title: "Expat-ready", desc: "We handle tax equalisation, treaty claims, and the multi-currency payroll for expatriate staff." },
      { title: "Year-end ready", desc: "PIT finalisation is included. We handle the employee communications, the certificates, and the GDT submission." },
    ],
    faqs: payrollFaqs,
  },
  "corporate-tax": {
    slug: "corporate-tax",
    name: "Corporate Tax Services Vietnam",
    category: "core-services",
    shortName: "Corporate Tax",
    hero: {
      eyebrow: "Core Service",
      title: "Corporate income tax in",
      italic: "Vietnam for foreign companies",
      description:
        "CIT calculation, provisional payments, annual finalisation, incentives, and audit defence. The full CIT lifecycle, managed by a registered tax agent.",
    },
    overview:
      "Corporate income tax (CIT) is the most material tax for a foreign-owned company. Our CIT service covers the full lifecycle: provisional quarterly payments, annual finalisation, incentives, transfer pricing, and audit defence. We help you plan the CIT year, file on time, claim the incentives you are entitled to, and respond to the GDT when it asks questions.",
    whoNeeds: [
      "FDI companies preparing the annual CIT finalisation",
      "Companies planning an investment in an encouraged sector or zone",
      "Companies under a GDT audit or inspection",
      "Joint ventures with complex inter-company flows",
    ],
    legalRequirements: [
      { title: "Quarterly provisional CIT", desc: "Quarterly provisional CIT is due by the 30th day of the month following the quarter end. Under- or over-payment is reconciled at finalisation." },
      { title: "Annual CIT finalisation", desc: "The annual CIT finalisation return is due within 90 days of fiscal year-end. Late filing attracts penalties and interest." },
      { title: "Incentive registration", desc: "CIT incentives must be registered with the GDT at the time of the investment and reflected in the annual return." },
    ],
    costs: [
      { item: "Annual CIT finalisation", amount: "from USD 1,500" },
      { item: "CIT incentive study", amount: "from USD 3,000" },
      { item: "CIT audit defence", amount: "from USD 6,000 per audit" },
    ],
    timeline: [
      { phase: "Tax planning", duration: "Q1", desc: "Annual tax plan, identification of incentives, structuring of inter-company flows." },
      { phase: "Provisional CIT", duration: "Quarterly", desc: "Provisional CIT calculation and filing within the statutory window." },
      { phase: "Finalisation", duration: "Q1 of following year", desc: "Annual CIT finalisation, working paper preparation, submission to the GDT." },
    ],
    commonMistakes: [
      "Not registering incentives at IRC application, forfeiting the benefit",
      "Treating inter-company charges as deductible without the benefit test",
      "Failing to file the finalisation return on time (and triggering penalties)",
      "Not amending prior-year returns when the GDT identifies a correction",
    ],
    benefits: [
      { title: "Incentive identification", desc: "We help you claim the incentives you are entitled to, with the registration and the supporting documentation." },
      { title: "Audit-ready documentation", desc: "Working papers, reconciliations, and supporting documents are maintained throughout the year." },
      { title: "Audit defence", desc: "If the GDT audits, we represent you. Our team includes former MoF auditors with experience in CIT procedure." },
    ],
    faqs: corporateTaxFaqs,
  },
  vat: {
    slug: "vat",
    name: "VAT Services Vietnam",
    category: "core-services",
    shortName: "VAT",
    hero: {
      eyebrow: "Core Service",
      title: "VAT services in",
      italic: "Vietnam for foreign companies",
      description:
        "Monthly or quarterly VAT filings, input-credit optimisation, VAT refund claims, and GDT representation for foreign-owned companies.",
    },
    overview:
      "Value added tax (VAT) in Vietnam is a real-time tax: monthly or quarterly, with cash-flow impact. Our VAT service covers the full cycle: classification of supplies by rate, validation of input credits, monthly or quarterly filings, and VAT refund claims for eligible categories (FDI in pre-revenue phase in encouraged industries, exporters, etc.).",
    whoNeeds: [
      "FDI companies with input VAT in excess of output VAT",
      "Exporters of goods and services seeking a VAT refund",
      "E-commerce sellers handling cross-border supplies",
      "Companies with complex supply chains and partial exemptions",
    ],
    legalRequirements: [
      { title: "Monthly or quarterly filings", desc: "Returns are due by the 20th of the month following the period. Quarterly is available for companies with revenue below VND 50 billion." },
      { title: "Valid input invoices", desc: "Input credits require valid VAT invoices from registered suppliers. Non-compliant invoices are not creditable." },
      { title: "VAT refund application", desc: "Eligible categories (FDI in pre-revenue phase in encouraged industries, exporters, etc.) may apply for a refund. Other categories carry the credit forward." },
    ],
    costs: [
      { item: "Monthly VAT filings", amount: "from USD 200 / month" },
      { item: "VAT refund application", amount: "from USD 3,000 per application" },
      { item: "VAT audit defence", amount: "from USD 5,000 per audit" },
    ],
    timeline: [
      { phase: "Setup", duration: "Week 1", desc: "VAT rate classification, supplier validation, system setup." },
      { phase: "Monthly filings", duration: "Ongoing", desc: "Monthly or quarterly filings by the 20th, with reconciliation and input-credit review." },
      { phase: "Refund (if applicable)", duration: "Quarterly / annual", desc: "Refund application with supporting documentation; GDT review typically 30–60 days." },
    ],
    commonMistakes: [
      "Claiming input credit on invalid or non-compliant invoices",
      "Failing to apply the correct VAT rate to each supply",
      "Not separating input VAT attributable to non-deductible activities",
      "Missing the deadline for the refund application",
    ],
    benefits: [
      { title: "Input credit optimisation", desc: "We review every credit, validate the supporting invoices, and ensure you claim what you are entitled to." },
      { title: "Refund expertise", desc: "Eligible companies can recover significant cash. We prepare the application and represent you in the GDT review." },
      { title: "Audit-ready", desc: "Working papers, reconciliations, and supporting documents are maintained throughout the year." },
    ],
    faqs: vatFaqs,
  },
  "transfer-pricing": {
    slug: "transfer-pricing",
    name: "Transfer Pricing Vietnam",
    category: "core-services",
    shortName: "Transfer Pricing",
    hero: {
      eyebrow: "Core Service",
      title: "Transfer pricing in",
      italic: "Vietnam for foreign companies",
      description:
        "Local File, Master File, CbCR, benchmarking, and TP audit defence. Compliant with Decree 132/2020 and OECD BEPS.",
    },
    overview:
      "Vietnam's transfer pricing regime is one of the most active in the region. The GDT routinely audits inter-company transactions and can reassess CIT, VAT, and FCT for multiple years. Our transfer pricing service covers the full compliance cycle: Local File, Master File, CbCR, benchmarking, and TP audit defence.",
    whoNeeds: [
      "FDI companies with related-party transactions of VND 50 billion or more per year",
      "Multinational groups with material Vietnam operations",
      "Companies under TP audit or inspection by the GDT",
      "Joint ventures with cross-border flows",
    ],
    legalRequirements: [
      { title: "Local File", desc: "Required for companies with related-party transactions of VND 50 billion or more per fiscal year. Due by CIT finalisation deadline." },
      { title: "Master File", desc: "Required for groups with consolidated revenue of VND 18,000 billion or more. Due by CIT finalisation deadline." },
      { title: "CbCR", desc: "Required for groups with consolidated revenue of VND 18,000 billion or more. Filed with the GDT for the parent's fiscal year." },
      { title: "Threshold declarations", desc: "All companies must file an annual declaration disclosing whether the TP thresholds are met." },
    ],
    costs: [
      { item: "Local File", amount: "from USD 5,000" },
      { item: "Master File", amount: "from USD 8,000" },
      { item: "CbCR notification", amount: "from USD 1,500" },
      { item: "Benchmarking study", amount: "from USD 3,000" },
      { item: "TP audit defence", amount: "from USD 10,000 per audit" },
    ],
    timeline: [
      { phase: "Data collection", duration: "Week 1–3", desc: "Inter-company transactions, agreements, financial data." },
      { phase: "Documentation", duration: "Week 4–8", desc: "Local File / Master File / CbCR preparation, benchmarking." },
      { phase: "Submission", duration: "By CIT finalisation deadline", desc: "Local File / Master File available on request; CbCR filed with CIT return." },
    ],
    commonMistakes: [
      "Treating the Local File as a year-end project rather than a contemporaneous process",
      "Using a single comparable for the benchmarking (insufficient)",
      "Failing to update the Local File when the business changes",
      "Not aligning the TP documentation with the inter-company agreement",
    ],
    benefits: [
      { title: "Audit defence", desc: "We represent you in TP audits, presenting the documentation and negotiating adjustments." },
      { title: "Risk reduction", desc: "Contemporaneous documentation reduces the GDT's ability to reassess and the penalties that follow." },
      { title: "Cross-border alignment", desc: "Documentation aligns with OECD BEPS and supports your group's global TP policy." },
    ],
    faqs: tpFaqs,
  },
  "foreign-contractor-tax": {
    slug: "foreign-contractor-tax",
    name: "Foreign Contractor Tax Vietnam",
    category: "core-services",
    shortName: "Foreign Contractor Tax",
    hero: {
      eyebrow: "Core Service",
      title: "Foreign contractor tax in",
      italic: "Vietnam for foreign companies",
      description:
        "FCT compliance, treaty relief, direct-filer registration, and digital-service tax for foreign suppliers without a Vietnamese PE.",
    },
    overview:
      "Foreign contractor tax (FCT) is the deemed-tax regime that applies when a foreign company provides services, transfers technology, or supplies goods with installation in Vietnam, and does not have a Vietnamese permanent establishment. The Vietnamese customer must withhold FCT and remit to the GDT. Our FCT service covers the full cycle: registration, withholding, treaty relief, and direct-filer support.",
    whoNeeds: [
      "Vietnamese companies paying foreign suppliers for services or royalties",
      "Foreign suppliers without a Vietnamese PE that want to register as a direct filer",
      "Foreign digital-service providers selling to Vietnamese customers",
      "Holding companies receiving royalties or service fees from Vietnam",
    ],
    legalRequirements: [
      { title: "FCT withholding", desc: "The Vietnamese customer must withhold FCT (deemed VAT and PIT) on each payment to a foreign contractor without a PE." },
      { title: "Treaty relief", desc: "Treaty relief is available for residents of countries with a DTA. Requires a Certificate of Residence from the home-country tax authority." },
      { title: "Direct filer registration", desc: "A foreign contractor with a Vietnamese PE may register as a direct filer and pay CIT/VAT on actuals." },
    ],
    costs: [
      { item: "FCT registration and monthly compliance", amount: "from USD 300 / month" },
      { item: "Treaty relief application", amount: "from USD 500 per contractor" },
      { item: "Direct filer registration", amount: "from USD 3,000" },
    ],
    timeline: [
      { phase: "Assessment", duration: "Week 1", desc: "Determine whether FCT applies, the rate, and treaty relief availability." },
      { phase: "Setup", duration: "Week 2", desc: "Treaty documentation, withholding system, declaration calendar." },
      { phase: "Ongoing", duration: "Monthly", desc: "Monthly withholding, declaration, and remittance to the GDT." },
    ],
    commonMistakes: [
      "Treating an offshore service as outside FCT scope without the supporting documentation",
      "Not applying treaty relief because the CoR was not obtained in time",
      "Using the wrong deemed rate for the activity type",
      "Failing to withhold when the foreign contractor is non-resident",
    ],
    benefits: [
      { title: "Treaty relief maximised", desc: "We obtain the CoR, prepare the application, and apply treaty relief to reduce the PIT rate." },
      { title: "Direct filer option", desc: "For high-volume contractors, direct filer registration often reduces the total tax burden." },
      { title: "Digital-service ready", desc: "We act as tax representative for foreign digital-service providers, with quarterly FCT filings via the GDT portal." },
    ],
    faqs: fctFaqs,
  },
  "statutory-audit": {
    slug: "statutory-audit",
    name: "Statutory Audit Support Vietnam",
    category: "core-services",
    shortName: "Statutory Audit Support",
    hero: {
      eyebrow: "Core Service",
      title: "Statutory audit support in",
      italic: "Vietnam for foreign companies",
      description:
        "Year-end financial statement preparation under VAS, audit liaison, IFRS reconciliation, and management of the audit process for licensed auditors.",
    },
    overview:
      "Most FDI companies are required to have an annual statutory audit by a licensed Vietnamese audit firm. Our statutory audit support service covers the year-end preparation, the audit liaison, and the IFRS reconciliation. We work with the auditor of your choice (typically a Big-4 or top-tier firm) and ensure the process runs smoothly.",
    whoNeeds: [
      "FDI companies required to be audited by Vietnamese law",
      "Joint-stock companies and 2+ member LLCs",
      "Foreign-owned companies preparing for an audit",
      "Companies switching auditors and needing a clean baseline",
    ],
    legalRequirements: [
      { title: "Audit requirement", desc: "Joint-stock companies, 2+ member LLCs, and FDI companies must be audited annually by a licensed Vietnamese audit firm." },
      { title: "Audit firm selection", desc: "The audit firm must be licensed by the Ministry of Finance. The shareholders appoint the auditor." },
      { title: "Audit report submission", desc: "The audit report is submitted to the tax authority and the licensing authority (DPI) as required." },
    ],
    costs: [
      { item: "Year-end preparation (FDI entity)", amount: "from USD 2,500" },
      { item: "Audit liaison and management", amount: "from USD 2,000" },
      { item: "IFRS reconciliation (per period)", amount: "from USD 1,500" },
    ],
    timeline: [
      { phase: "Pre-audit planning", duration: "December", desc: "Audit plan, sample selection, walkthroughs, interim procedures." },
      { phase: "Year-end close", duration: "January", desc: "Year-end close, working paper preparation, draft financial statements." },
      { phase: "Audit fieldwork", duration: "February–March", desc: "Auditor field work, issue resolution, management letter." },
      { phase: "Sign-off", duration: "March 31", desc: "Final audit report, financial statements, CIT finalisation." },
    ],
    commonMistakes: [
      "Choosing an audit firm without checking the licence and the audit-team credentials",
      "Not preparing reconciliations in advance, leading to extended fieldwork",
      "Missing the 31 March deadline for the audit report and CIT finalisation",
      "Treating the auditor as the preparer (the company is responsible for the financial statements)",
    ],
    benefits: [
      { title: "Smooth process", desc: "We manage the audit from planning to sign-off. Working papers are ready, reconciliations are prepared, and the auditor is briefed." },
      { title: "IFRS-ready", desc: "We prepare the IFRS reconciliation in parallel with the VAS financials, ready for your group consolidation." },
      { title: "Cost control", desc: "Pre-prepared working papers reduce the auditor's hours and the audit fee." },
    ],
    faqs: auditFaqs,
  },
  "virtual-cfo": {
    slug: "virtual-cfo",
    name: "Virtual CFO Services Vietnam",
    category: "core-services",
    shortName: "Virtual CFO",
    hero: {
      eyebrow: "Core Service",
      title: "Virtual CFO services in",
      italic: "Vietnam for foreign companies",
      description:
        "Fractional CFO leadership: forecasting, board reporting, cash management, fundraising support, and strategy — for foreign-owned companies that need senior financial leadership without a full-time hire.",
    },
    overview:
      "Many foreign-owned companies in Vietnam need senior financial leadership but are not yet at the scale to justify a full-time CFO. Our virtual CFO service provides fractional CFO leadership on a 2-8 day per month basis. We work alongside your accounting and tax team to deliver board reporting, cash management, scenario planning, and strategic guidance.",
    whoNeeds: [
      "FDI companies that need a CFO but are not at the scale for a full-time hire",
      "Startups preparing for a fundraise or an exit",
      "Regional headquarters overseeing multiple Vietnam entities",
      "Companies in transition (new CEO, restructuring, M&A)",
    ],
    legalRequirements: [
      { title: "No statutory requirement", desc: "Virtual CFO is a service, not a statutory role. The legal representative remains responsible for compliance." },
      { title: "Director duties", desc: "Where the virtual CFO also serves as a non-executive director, duties are governed by the company's charter and the Companies Act." },
    ],
    costs: [
      { item: "Virtual CFO (2 days / month)", amount: "from USD 2,500 / month" },
      { item: "Virtual CFO (4 days / month)", amount: "from USD 4,500 / month" },
      { item: "Virtual CFO (8 days / month)", amount: "from USD 8,500 / month" },
    ],
    timeline: [
      { phase: "Onboarding", duration: "Month 1", desc: "Orientation with the leadership team, review of current state, 90-day plan." },
      { phase: "Steady state", duration: "From month 2", desc: "Regular cadence (weekly check-in, monthly review, quarterly board pack)." },
      { phase: "Annual", duration: "Year-end", desc: "Annual budgeting, board strategy session, CFO succession planning." },
    ],
    commonMistakes: [
      "Confusing a virtual CFO with a controller or accountant",
      "Engaging a virtual CFO too late (after a financial crisis rather than before)",
      "Setting an unclear scope of authority for the virtual CFO",
      "Not integrating the virtual CFO with the rest of the finance team",
    ],
    benefits: [
      { title: "Senior leadership, flexible cost", desc: "A senior CFO at a fraction of the cost of a full-time hire. Scale the engagement up or down as the business needs." },
      { title: "Board-ready reporting", desc: "Monthly board pack with cash, P&L, KPIs, scenario analysis, and the forward-looking narrative." },
      { title: "Strategy input", desc: "Capital allocation, fundraising preparation, M&A, and pricing decisions — informed by senior financial judgment." },
    ],
    faqs: cfoFaqs,
  },
  "company-registration": {
    slug: "company-registration",
    name: "Company Registration Vietnam",
    category: "business-setup",
    shortName: "Company Registration",
    hero: {
      eyebrow: "Business Setup",
      title: "Company registration in",
      italic: "Vietnam for foreign companies",
      description:
        "Incorporation of a 100%-foreign-owned company or a joint venture: IRC, ERC, sector sub-licences, and post-licence registrations. End-to-end setup.",
    },
    overview:
      "Company registration in Vietnam for a foreign investor requires an Investment Registration Certificate (IRC) and an Enterprise Registration Certificate (ERC), followed by sector sub-licences (where applicable) and post-licence registrations (tax, SI, seal, bank). We handle the full process, working with local counsel to manage the licensing authority engagement.",
    whoNeeds: [
      "Foreign investors setting up a new entity in Vietnam",
      "Joint ventures requiring a local partner",
      "Holding companies that need a regional operating entity",
      "Startups that need a Vietnam footprint",
    ],
    legalRequirements: [
      { title: "IRC", desc: "Investment Registration Certificate from the Department of Planning and Investment, recording the project, capital, and scope." },
      { title: "ERC", desc: "Enterprise Registration Certificate establishing the legal entity. Issued after the IRC." },
      { title: "Sector sub-licences", desc: "Conditional sectors (telecoms, education, certain logistics, etc.) require sub-licences from the relevant ministry." },
      { title: "Post-licence registrations", desc: "Tax code, social insurance, seal, bank account, and (for FDI) SBV capital registration." },
    ],
    costs: [
      { item: "Government fees (IRC + ERC)", amount: "from VND 5 million" },
      { item: "Professional fees (legal, secretarial)", amount: "from USD 5,000" },
      { item: "Sector sub-licence (if applicable)", amount: "from USD 3,000" },
    ],
    timeline: [
      { phase: "Pre-engagement", duration: "Week 1–2", desc: "Document preparation, project proposal, sector advice." },
      { phase: "IRC submission", duration: "Week 3–6", desc: "Submission to DPI, queries, and final issuance." },
      { phase: "ERC", duration: "Week 7–8", desc: "Submission to DPI for the ERC." },
      { phase: "Post-licence", duration: "Week 9–12", desc: "Tax code, SI, seal, bank account, SBV capital registration." },
    ],
    commonMistakes: [
      "Underestimating the project capital and triggering a query from the DPI",
      "Not engaging a local counsel with experience in the licensing authority",
      "Choosing the wrong entity type for the sector",
      "Missing the sector sub-licence and starting operations without it",
    ],
    benefits: [
      { title: "End-to-end", desc: "From document preparation to post-licence registrations. One engagement, one fee." },
      { title: "Local expertise", desc: "We work with local counsel who has the relationships and the track record with the licensing authority." },
      { title: "Predictable timeline", desc: "A clear timeline with weekly status updates. We manage the queries and the revisions." },
    ],
    faqs: setupCompanyFaqs,
  },
  "foreign-company": {
    slug: "foreign-company",
    name: "Foreign Company Setup Vietnam",
    category: "business-setup",
    shortName: "Foreign Company Setup",
    hero: {
      eyebrow: "Business Setup",
      title: "Foreign company setup in",
      italic: "Vietnam: 100%-foreign-owned entities",
      description:
        "WFOE setup, sector-specific advice, and end-to-end incorporation for foreign investors entering Vietnam with full ownership.",
    },
    overview:
      "A 100%-foreign-owned company (WFOE) is the most common structure for a foreign investor entering Vietnam. The setup requires an IRC, an ERC, sector sub-licences (where applicable), and post-licence registrations. We handle the full process, advising on entity type, capital, sector constraints, and structuring.",
    whoNeeds: [
      "Foreign investors seeking 100% ownership in Vietnam",
      "Companies expanding into Vietnam for sales, manufacturing, or services",
      "Holding companies establishing a regional operating entity",
    ],
    legalRequirements: [
      { title: "WFOE eligibility", desc: "Most sectors permit 100% foreign ownership. Conditional sectors require a local partner or have ownership caps." },
      { title: "IRC and ERC", desc: "Both required. The IRC authorises the project; the ERC establishes the legal entity." },
      { title: "Capital adequacy", desc: "The IRC approval typically requires a capital amount consistent with the project's scope. Practical floors apply in some sectors." },
    ],
    costs: [
      { item: "Government fees", amount: "from VND 5 million" },
      { item: "Professional fees", amount: "from USD 6,000" },
    ],
    timeline: [
      { phase: "Pre-engagement", duration: "Week 1–2", desc: "Sector advice, document preparation, project proposal." },
      { phase: "IRC", duration: "Week 3–6", desc: "Submission, queries, and issuance." },
      { phase: "ERC", duration: "Week 7–8", desc: "Submission and issuance." },
      { phase: "Post-licence", duration: "Week 9–12", desc: "Tax, SI, seal, bank, SBV." },
    ],
    commonMistakes: [
      "Choosing the wrong entity type for the sector",
      "Underestimating the project capital",
      "Not engaging a local counsel with sector experience",
      "Missing the sector sub-licence",
    ],
    benefits: [
      { title: "Sector expertise", desc: "We advise on the entity type, capital, and sector sub-licence requirements specific to your business." },
      { title: "End-to-end", desc: "From document preparation to post-licence registrations, one engagement." },
      { title: "Post-setup support", desc: "Accounting, tax, payroll, and ongoing compliance — under the same roof as the setup." },
    ],
    faqs: foreignCompanyFaqs,
  },
  "irc-erc": {
    slug: "irc-erc",
    name: "IRC and ERC Services Vietnam",
    category: "business-setup",
    shortName: "IRC / ERC",
    hero: {
      eyebrow: "Business Setup",
      title: "IRC and ERC in",
      italic: "Vietnam for foreign companies",
      description:
        "Investment Registration Certificate and Enterprise Registration Certificate: application, queries, and issuance.",
    },
    overview:
      "The IRC and ERC are the two foundation documents for a foreign-owned company in Vietnam. The IRC authorises the project; the ERC establishes the legal entity. We handle the application, manage the queries, and ensure timely issuance.",
    whoNeeds: [
      "Foreign investors seeking an IRC for a new project",
      "Companies requiring an ERC for a new entity",
      "Companies amending an existing IRC (change of scope, capital, or shareholder)",
    ],
    legalRequirements: [
      { title: "IRC", desc: "Issued by the Department of Planning and Investment. Records the project, capital, scope, and investor." },
      { title: "ERC", desc: "Issued by the DPI after the IRC. Records the entity name, charter, address, and legal representative." },
      { title: "IRC amendments", desc: "Material changes (scope, capital, shareholder, address) require an amendment to the IRC." },
    ],
    costs: [
      { item: "IRC application", amount: "from USD 3,000" },
      { item: "ERC application", amount: "from USD 2,000" },
      { item: "IRC amendment", amount: "from USD 1,500" },
    ],
    timeline: [
      { phase: "Application", duration: "Week 1–3", desc: "Document preparation, project proposal, submission." },
      { phase: "Review", duration: "Week 4–10", desc: "DPI review, queries, revisions, and issuance." },
    ],
    commonMistakes: [
      "Insufficient project description triggering a query",
      "Capital amount not aligned with the project scope",
      "Incomplete parent-company documents (no apostille, no translation)",
    ],
    benefits: [
      { title: "Efficient process", desc: "We prepare the application to minimise queries and expedite issuance." },
      { title: "Local relationships", desc: "We work with local counsel with established DPI relationships." },
      { title: "End-to-end", desc: "From application to post-licence registrations, one engagement." },
    ],
    faqs: ircErcFaqs,
  },
  "representative-office": {
    slug: "representative-office",
    name: "Representative Office Vietnam",
    category: "business-setup",
    shortName: "Representative Office",
    hero: {
      eyebrow: "Business Setup",
      title: "Representative office in",
      italic: "Vietnam for foreign companies",
      description:
        "Rep office setup, IRC application, chief-representative work permit, and ongoing tax-registration compliance.",
    },
    overview:
      "A representative office is a non-commercial presence for a foreign company in Vietnam. It can undertake market research, liaison, and promotional activities, but cannot sell or sign contracts. The setup requires an IRC, a chief-representative work permit, and tax registration. We handle the full process.",
    whoNeeds: [
      "Foreign companies exploring the Vietnam market",
      "Foreign companies with a long-term sales or sourcing interest",
      "Foreign companies managing investments in Vietnam",
    ],
    legalRequirements: [
      { title: "IRC for a rep office", desc: "Issued by the DPI. Authorises the rep office to operate." },
      { title: "Chief representative work permit", desc: "The chief representative must be a foreign national with a work permit or work-permit exemption." },
      { title: "Tax registration", desc: "Rep offices are not subject to CIT/VAT but must register with the tax authority and file a non-business declaration." },
    ],
    costs: [
      { item: "Rep office setup", amount: "from USD 3,500" },
      { item: "Chief-representative work permit", amount: "from USD 2,500" },
    ],
    timeline: [
      { phase: "Application", duration: "Week 1–4", desc: "Document preparation and submission." },
      { phase: "Review", duration: "Week 5–10", desc: "DPI review and issuance." },
      { phase: "Post-setup", duration: "Week 11–12", desc: "Tax registration, work permit, office lease." },
    ],
    commonMistakes: [
      "Conducting commercial activities through a rep office (prohibited)",
      "Not obtaining a work permit for the chief representative",
      "Missing the tax registration deadline",
    ],
    benefits: [
      { title: "Quick entry", desc: "A rep office can be set up in 6–10 weeks — much faster than a full WFOE." },
      { title: "Low cost", desc: "Lower setup cost and lower ongoing cost than a full subsidiary." },
      { title: "Conversion path", desc: "When the market warrants, the rep office can be converted to a subsidiary. We manage the conversion." },
    ],
    faqs: repOfficeFaqs,
  },
  "branch-office": {
    slug: "branch-office",
    name: "Branch Office Vietnam",
    category: "business-setup",
    shortName: "Branch Office",
    hero: {
      eyebrow: "Business Setup",
      title: "Branch office in",
      italic: "Vietnam for foreign companies",
      description:
        "Branch office registration, sector-specific requirements, and ongoing compliance for foreign-parent branches in Vietnam.",
    },
    overview:
      "A branch office is an extension of a foreign company in Vietnam, not a separate legal entity. The parent is directly liable for the branch's obligations. The branch is established by registration with the Department of Planning and Investment. Branches are restricted to certain sectors and activities.",
    whoNeeds: [
      "Foreign companies in permitted sectors (banking, insurance, certain professional services)",
      "Foreign companies that need a presence without incorporating a subsidiary",
    ],
    legalRequirements: [
      { title: "Branch registration", desc: "Issued by the DPI or the relevant ministry. Authorises the branch to operate in Vietnam." },
      { title: "Sector restrictions", desc: "Branches are not available in all sectors. Some sectors require a subsidiary structure." },
      { title: "Parent liability", desc: "The parent is directly liable for the branch's obligations in Vietnam." },
    ],
    costs: [
      { item: "Branch registration", amount: "from USD 5,000" },
      { item: "Branch tax registration and ongoing compliance", amount: "from USD 600 / month" },
    ],
    timeline: [
      { phase: "Application", duration: "Week 1–6", desc: "Document preparation, parent-company documents, submission." },
      { phase: "Review", duration: "Week 7–14", desc: "Authority review, queries, and issuance." },
    ],
    commonMistakes: [
      "Choosing a branch when a subsidiary is required for the sector",
      "Underestimating the parent's direct liability",
      "Failing to register for CIT as a permanent establishment",
    ],
    benefits: [
      { title: "Sector expertise", desc: "We advise on whether a branch is available for your sector and the implications for liability." },
      { title: "Full setup", desc: "From registration to ongoing compliance, we handle the full lifecycle." },
    ],
    faqs: branchOfficeFaqs,
  },
  "work-permits": {
    slug: "work-permits",
    name: "Work Permits Vietnam",
    category: "business-setup",
    shortName: "Work Permits",
    hero: {
      eyebrow: "Business Setup",
      title: "Work permits in",
      italic: "Vietnam for foreign employees",
      description:
        "Work permit applications, exemptions, dependent visas, and TRCs for foreign employees of FDI companies and rep offices.",
    },
    overview:
      "A work permit is required for most foreign nationals working in Vietnam under a labour contract. We handle the full work-permit process: document preparation, medical, criminal record, apostille, translation, submission, and TRC (Temporary Residence Card) for the employee and dependents.",
    whoNeeds: [
      "FDI companies hiring foreign staff",
      "Rep offices appointing a chief representative",
      "Companies transferring staff from a foreign related entity",
    ],
    legalRequirements: [
      { title: "Work permit application", desc: "Submitted to the Department of Labour, Invalids and Social Affairs. Documents include the health certificate, criminal record, education, experience, and the labour contract." },
      { title: "Work-permit exemption", desc: "Internal transferees, shareholders, and certain professionals may be exempt. The exemption certificate is required." },
      { title: "TRC", desc: "A long-term residence card for work-permit holders and qualifying dependents. Removes the need for visa renewals." },
    ],
    costs: [
      { item: "Work permit application", amount: "from USD 1,500" },
      { item: "Work-permit exemption certificate", amount: "from USD 800" },
      { item: "TRC application", amount: "from USD 1,000" },
      { item: "Dependent visa", amount: "from USD 500 per dependent" },
    ],
    timeline: [
      { phase: "Document preparation", duration: "Week 1–4", desc: "Apostille, translation, medical, criminal record." },
      { phase: "Submission", duration: "Week 5–6", desc: "Application to the labour authority." },
      { phase: "Review and issuance", duration: "Week 7–10", desc: "Authority review and permit issuance." },
    ],
    commonMistakes: [
      "Starting work before the work permit is issued",
      "Missing the apostille on the criminal record",
      "Failing to obtain a work-permit exemption certificate for an internal transferee",
      "Not planning the renewal 2–3 months before expiry",
    ],
    benefits: [
      { title: "End-to-end", desc: "We manage the entire process, from document preparation to TRC and dependent visas." },
      { title: "Exemption expertise", desc: "We advise on whether an exemption is available, saving time and cost." },
      { title: "Renewal planning", desc: "We track the permit expiry and start the renewal process ahead of time." },
    ],
    faqs: workPermitFaqs,
  },
  saas: {
    slug: "saas",
    name: "Accounting for SaaS Companies in Vietnam",
    category: "industries",
    shortName: "SaaS",
    hero: {
      eyebrow: "Industry",
      title: "Accounting for SaaS in",
      italic: "Vietnam: subscription revenue, royalties, and FCT",
      description:
        "Specialist accounting and tax for SaaS companies in Vietnam: subscription revenue recognition, royalty structuring, FCT on offshore IP, and investor-grade reporting.",
    },
    overview:
      "SaaS companies operating in Vietnam face a specific set of tax and accounting issues: subscription revenue recognition under VAS, FCT on royalty payments to offshore IP holders, transfer pricing for cloud-infrastructure cost-sharing, and investor-grade reporting that reconciles to the parent group's calendar. Our SaaS team has worked with global SaaS leaders entering the Vietnam market.",
    whoNeeds: [
      "Global SaaS companies with Vietnam-sourced subscription revenue",
      "SaaS companies structuring the Vietnam entity as a limited-risk distributor",
      "SaaS companies with Vietnamese customers and offshore IP holding",
    ],
    legalRequirements: [
      { title: "Subscription revenue recognition", desc: "Subscription revenue is recognised over the service period, with deferred revenue recorded for the unearned portion." },
      { title: "FCT on royalty", desc: "Royalties paid to an offshore IP holder are subject to FCT (typically 5% VAT + 10% PIT, with treaty relief available)." },
      { title: "Transfer pricing for cloud costs", desc: "Cost-sharing agreements for cloud infrastructure must be arm's length, with contemporaneous documentation." },
    ],
    costs: [
      { item: "SaaS monthly compliance", amount: "from USD 1,500 / month" },
      { item: "TP documentation for royalty and cost-share", amount: "from USD 8,000" },
    ],
    timeline: [
      { phase: "Structuring", duration: "Week 1–2", desc: "Entity structure, royalty rate, cost-share model, IP holding." },
      { phase: "Setup", duration: "Month 1", desc: "Chart of accounts, deferred revenue, TP documentation." },
      { phase: "Steady state", duration: "From month 2", desc: "Monthly close, FCT filings, royalty remittance, group reconciliation." },
    ],
    commonMistakes: [
      "Treating the Vietnam entity as a full-risk distributor (and losing the limited-risk structure)",
      "Not documenting the royalty rate with a contemporaneous benchmarking study",
      "Recognising annual subscription revenue upfront rather than over the service period",
      "Missing the FCT withholding on the royalty payment",
    ],
    benefits: [
      { title: "Industry expertise", desc: "We work with global SaaS companies and understand the limited-risk-distributor model, the royalty structure, and the FCT exposure." },
      { title: "Investor-grade reporting", desc: "MRR, ARR, churn, CAC, LTV — the SaaS metrics your investor wants to see, reconciled to VAS." },
      { title: "Group-ready", desc: "Reporting that reconciles to the parent group's calendar and chart of accounts." },
    ],
    faqs: saasFaqs,
  },
  manufacturing: {
    slug: "manufacturing",
    name: "Accounting for Manufacturing Companies in Vietnam",
    category: "industries",
    shortName: "Manufacturing",
    hero: {
      eyebrow: "Industry",
      title: "Accounting for manufacturing in",
      italic: "Vietnam: inventory, costing, and import duty",
      description:
        "Specialist accounting and tax for manufacturing FDI in Vietnam: inventory valuation, cost accounting, import duty optimisation, and CIT incentives for encouraged sectors.",
    },
    overview:
      "Manufacturing FDI in Vietnam involves a specific set of accounting and tax issues: inventory valuation, standard vs actual costing, import duty on raw materials and equipment, CIT incentives for encouraged sectors, and environmental compliance. Our manufacturing team has worked with global manufacturers across electronics, garments, food processing, and other sectors.",
    whoNeeds: [
      "Foreign manufacturers setting up production in Vietnam",
      "Existing manufacturers expanding capacity or product lines",
      "Manufacturers seeking CIT incentives or environmental compliance",
    ],
    legalRequirements: [
      { title: "Inventory valuation", desc: "Inventory is valued at cost (FIFO or weighted average). Periodic and perpetual systems are both acceptable." },
      { title: "Cost accounting", desc: "Direct and indirect costs are allocated to products. A standard-cost system with periodic variance analysis is common." },
      { title: "Import duty", desc: "Raw materials, components, and equipment are subject to import duty. Free-trade agreements may reduce or eliminate duty for eligible goods." },
      { title: "CIT incentives", desc: "Encouraged sectors (high-tech, supporting industries, certain software) qualify for 10% CIT and tax holidays." },
    ],
    costs: [
      { item: "Manufacturing monthly compliance", amount: "from USD 2,500 / month" },
      { item: "CIT incentive study", amount: "from USD 5,000" },
    ],
    timeline: [
      { phase: "Setup", duration: "Month 1–3", desc: "Chart of accounts, cost centres, inventory system, customs registration." },
      { phase: "Production ramp", duration: "Month 4–9", desc: "Trial production, cost refinement, import duty optimisation." },
      { phase: "Steady state", duration: "From month 10", desc: "Monthly close, CIT provisional, annual CIT finalisation, audit support." },
    ],
    commonMistakes: [
      "Under-allocating overhead to inventory (inflating cost of goods sold)",
      "Not claiming CIT incentives at IRC application",
      "Missing import duty exemptions available under FTAs",
      "Failing to reconcile inventory to the physical count",
    ],
    benefits: [
      { title: "Industry expertise", desc: "We work with global manufacturers and understand the cost accounting, customs, and CIT incentive landscape." },
      { title: "Incentive identification", desc: "We help you claim the incentives you are entitled to, with the registration and the supporting documentation." },
      { title: "Customs optimisation", desc: "Free-trade agreement preferences, bonded warehousing, and export-processing zones can materially reduce duty." },
    ],
    faqs: manufacturingFaqs,
  },
  ecommerce: {
    slug: "ecommerce",
    name: "Accounting for E-commerce Companies in Vietnam",
    category: "industries",
    shortName: "E-commerce",
    hero: {
      eyebrow: "Industry",
      title: "Accounting for e-commerce in",
      italic: "Vietnam: marketplace, cross-border, and withholding",
      description:
        "Specialist accounting and tax for e-commerce companies in Vietnam: marketplace withholding, cross-border FCT, and tax-representation for foreign platforms.",
    },
    overview:
      "E-commerce in Vietnam is taxed under a specific framework: domestic sellers are subject to CIT and VAT, marketplaces are required to withhold tax on individual sellers, and foreign e-commerce suppliers are subject to FCT. Our e-commerce team has worked with global platforms, domestic marketplaces, and DTC sellers.",
    whoNeeds: [
      "Foreign e-commerce platforms selling to Vietnamese customers",
      "Domestic marketplaces and DTC sellers",
      "E-commerce sellers using a hybrid model (domestic + cross-border)",
    ],
    legalRequirements: [
      { title: "CIT and VAT for domestic sellers", desc: "Domestic e-commerce sellers are subject to 20% CIT and 10% VAT (with reductions for some categories)." },
      { title: "Marketplace withholding", desc: "Domestic platforms must withhold tax on individual sellers (deemed PIT and VAT) and remit to the GDT." },
      { title: "FCT for foreign platforms", desc: "Foreign e-commerce platforms without a Vietnamese PE must register for FCT via the GDT portal and pay quarterly." },
    ],
    costs: [
      { item: "E-commerce monthly compliance", amount: "from USD 1,500 / month" },
      { item: "Foreign platform tax-representation", amount: "from USD 800 / month" },
    ],
    timeline: [
      { phase: "Setup", duration: "Week 1–4", desc: "Tax registration, withholding system, FCT portal access." },
      { phase: "Ongoing", duration: "From month 2", desc: "Monthly CIT/VAT filings, quarterly FCT (for foreign platforms), annual reconciliation." },
    ],
    commonMistakes: [
      "Failing to register for FCT (foreign platforms)",
      "Not withholding on individual sellers (marketplaces)",
      "Treating the foreign platform's Vietnamese revenue as outside the FCT scope",
      "Missing the data-sharing obligations with the GDT",
    ],
    benefits: [
      { title: "Industry expertise", desc: "We work with foreign platforms, domestic marketplaces, and DTC sellers. We understand the e-commerce tax framework." },
      { title: "Tax representation", desc: "For foreign platforms, we act as tax representative: registration, declaration, and remittance." },
      { title: "Withholding automation", desc: "For marketplaces, we help automate the seller withholding and the GDT remittance." },
    ],
    faqs: ecommerceFaqs,
  },
  "technology-startups": {
    slug: "technology-startups",
    name: "Accounting for Technology Startups in Vietnam",
    category: "industries",
    shortName: "Tech Startups",
    hero: {
      eyebrow: "Industry",
      title: "Accounting for tech startups in",
      italic: "Vietnam: incentives, ESOP, and investor reporting",
      description:
        "Specialist accounting and tax for technology startups in Vietnam: CIT incentives for software and high-tech, ESOP structuring, and investor-grade reporting.",
    },
    overview:
      "Technology startups in Vietnam benefit from a specific set of incentives: 10% CIT for high-tech and software projects, tax holidays of 2–6 years, and 50% reduction for up to 9 subsequent years. Our startup team has worked with venture-backed and bootstrapped technology companies at every stage, from incorporation to exit.",
    whoNeeds: [
      "Venture-backed technology startups",
      "Bootstrapped software companies scaling in Vietnam",
      "Startups preparing for a Series A or an exit",
    ],
    legalRequirements: [
      { title: "CIT incentives for software", desc: "Software and IT services may qualify for 10% CIT and tax holidays. Eligibility requires registration with the high-tech authority." },
      { title: "ESOP", desc: "ESOPs are taxed at vesting. The taxable amount is the FMV at vesting less any exercise price paid. The company must withhold PIT at vesting." },
      { title: "Investor reporting", desc: "Monthly management accounts, quarterly board reporting, and the annual audit are standard investor expectations." },
    ],
    costs: [
      { item: "Startup monthly compliance", amount: "from USD 1,200 / month" },
      { item: "ESOP structuring and ongoing compliance", amount: "from USD 2,500" },
    ],
    timeline: [
      { phase: "Setup", duration: "Week 1–4", desc: "Entity setup, incentive application, ESOP plan, accounting system." },
      { phase: "Pre-revenue", duration: "Month 1–12", desc: "Monthly bookkeeping, cost tracking, runway monitoring." },
      { phase: "Growth", duration: "From month 12", desc: "Revenue recognition, CIT incentives claimed, ESOP vesting, audit." },
    ],
    commonMistakes: [
      "Not claiming CIT incentives at IRC application",
      "Misclassifying ESOP income (taxable at vesting, not at exercise)",
      "Failing to implement proper internal controls early",
      "Not preparing for the audit from day one",
    ],
    benefits: [
      { title: "Incentive expertise", desc: "We help you identify and claim the incentives you are entitled to, with the registration and the supporting documentation." },
      { title: "Investor-ready reporting", desc: "Monthly management accounts, runway monitoring, and the audit-ready books that investors expect." },
      { title: "ESOP support", desc: "Plan design, PIT withholding, annual PIT finalisation, and reporting to the parent." },
    ],
    faqs: techStartupFaqs,
  },
  "foreign-owned": {
    slug: "foreign-owned",
    name: "Accounting for Foreign-Owned Companies in Vietnam",
    category: "industries",
    shortName: "Foreign-Owned Companies",
    hero: {
      eyebrow: "Industry",
      title: "Accounting for foreign-owned in",
      italic: "Vietnam: WFOE compliance and group reporting",
      description:
        "Specialist accounting and tax for 100%-foreign-owned companies in Vietnam: WFOE setup, group reporting, transfer pricing, and profit repatriation.",
    },
    overview:
      "Foreign-owned companies (WFOEs) in Vietnam have a specific set of obligations: SBV capital and loan reporting, transfer pricing documentation, inter-company agreement maintenance, and group reporting. Our WFOE team has worked with thousands of foreign-owned companies across sectors.",
    whoNeeds: [
      "100%-foreign-owned companies in Vietnam",
      "Joint ventures with complex inter-company flows",
      "Regional headquarters with multi-entity Vietnam operations",
    ],
    legalRequirements: [
      { title: "SBV reporting", desc: "WFOEs must report capital contributions, loan drawdowns, and loan repayments to the State Bank of Vietnam." },
      { title: "Transfer pricing", desc: "WFOEs with related-party transactions of VND 50 billion or more must prepare a Local File." },
      { title: "Group reporting", desc: "WFOEs typically report to the parent on a monthly / quarterly / annual basis, with consolidation in the parent's reporting currency." },
    ],
    costs: [
      { item: "WFOE monthly compliance", amount: "from USD 1,500 / month" },
      { item: "Group reporting reconciliation", amount: "from USD 1,000 / month" },
    ],
    timeline: [
      { phase: "Setup", duration: "Month 1", desc: "Chart of accounts, group mapping, SBV registration, TP framework." },
      { phase: "Steady state", duration: "From month 2", desc: "Monthly close, group reporting, TP documentation, SBV filings." },
    ],
    commonMistakes: [
      "Treating inter-company management fees as deductible without the benefit test",
      "Not reporting capital contributions to the SBV",
      "Missing the TP Local File deadline",
      "Failing to amend the IRC for material changes",
    ],
    benefits: [
      { title: "WFOE expertise", desc: "We work with WFOEs across sectors and understand the SBV, TP, and group reporting obligations." },
      { title: "Group-ready", desc: "Reporting that reconciles to the parent group's chart of accounts and reporting calendar." },
      { title: "Audit defence", desc: "We represent you in GDT and SBV audits, presenting the documentation and negotiating adjustments." },
    ],
    faqs: foreignOwnedFaqs,
  },
  singapore: {
    slug: "singapore",
    name: "Accounting Services for Singapore Companies in Vietnam",
    category: "countries",
    shortName: "Singapore",
    hero: {
      eyebrow: "Country",
      title: "Singapore companies in",
      italic: "Vietnam: tax, accounting, and CFO advisory",
      description:
        "Vietnam-side accounting, tax, payroll, transfer pricing, and CFO advisory for Singapore-headquartered companies. Treaty relief, group reporting, and IRAS-aligned documentation.",
    },
    overview:
      "Singapore-headquartered companies are the largest group of foreign investors in Vietnam. We provide Vietnam-side accounting, tax, payroll, transfer pricing, and CFO advisory to Singapore parents and their Vietnamese subsidiaries. Our team is familiar with the Singapore-Vietnam tax treaty, IRAS documentation requirements, and SGD / USD reporting frameworks.",
    whoNeeds: [
      "Singapore-headquartered companies with Vietnam operations",
      "Singapore holding companies with Vietnamese subsidiaries",
      "Singapore SMEs expanding into Vietnam",
    ],
    legalRequirements: [
      { title: "Vietnamese Accounting System (VAS)", desc: "Vietnam entities must maintain books under VAS and file statutory financial statements in Vietnamese." },
      { title: "Singapore-Vietnam tax treaty", desc: "Reduces withholding on dividends to 0% (with conditions), on interest to 10%, and on royalties to 5–10%." },
      { title: "Group reporting", desc: "Singapore parents typically expect monthly management accounts, quarterly consolidation, and the annual audit." },
    ],
    costs: [
      { item: "Singapore client monthly compliance", amount: "from USD 1,500 / month" },
      { item: "Group reporting and consolidation", amount: "from USD 1,000 / month" },
    ],
    timeline: [
      { phase: "Setup", duration: "Week 1–4", desc: "Vietnam entity setup, group chart of accounts, SGD/USD reporting framework." },
      { phase: "Steady state", duration: "From month 2", desc: "Monthly close, group reporting, treaty-claim documentation, audit support." },
    ],
    commonMistakes: [
      "Not obtaining the IRAS Certificate of Residence before treaty claims",
      "Treating the Vietnam entity as a full-risk distributor when a limited-risk model is more appropriate",
      "Missing the VAS-to-Singapore-FRS / IFRS reconciliation in the management accounts",
      "Failing to document the inter-company services with a benefit test",
    ],
    benefits: [
      { title: "Treaty expertise", desc: "We obtain the IRAS CoR, prepare the treaty-claim documentation, and apply the reduced rates." },
      { title: "Group-ready reporting", desc: "Monthly management accounts, quarterly consolidation, and the VAS-to-IFRS reconciliation your parent expects." },
      { title: "IRAS-aligned documentation", desc: "TP documentation aligned with IRAS expectations and OECD BEPS." },
    ],
    faqs: singaporeFaqs,
  },
  australia: {
    slug: "australia",
    name: "Accounting Services for Australian Companies in Vietnam",
    category: "countries",
    shortName: "Australia",
    hero: {
      eyebrow: "Country",
      title: "Australian companies in",
      italic: "Vietnam: tax, accounting, and CFO advisory",
      description:
        "Vietnam-side accounting, tax, payroll, transfer pricing, and CFO advisory for Australian-headquartered companies. ATO-aligned documentation, AUD reporting.",
    },
    overview:
      "Australian companies have a growing footprint in Vietnam, particularly in mining services, agribusiness, software, and education. We provide Vietnam-side accounting, tax, payroll, transfer pricing, and CFO advisory to Australian parents. Our team is familiar with the Australia-Vietnam tax treaty, ATO documentation requirements, and AUD reporting frameworks.",
    whoNeeds: [
      "Australian-headquartered companies with Vietnam operations",
      "Australian SMEs expanding into Vietnam",
      "Australian holding companies with Vietnamese subsidiaries",
    ],
    legalRequirements: [
      { title: "Vietnamese Accounting System (VAS)", desc: "Vietnam entities must maintain books under VAS and file statutory financial statements in Vietnamese." },
      { title: "Australia-Vietnam tax treaty", desc: "Reduces withholding on dividends to 0% (with conditions), on interest to 10%, and on royalties to 10%." },
      { title: "Group reporting", desc: "Australian parents typically expect monthly management accounts in AUD, quarterly consolidation, and the annual audit." },
    ],
    costs: [
      { item: "Australian client monthly compliance", amount: "from USD 1,500 / month" },
      { item: "AUD reporting and consolidation", amount: "from USD 1,000 / month" },
    ],
    timeline: [
      { phase: "Setup", duration: "Week 1–4", desc: "Vietnam entity setup, group chart of accounts, AUD reporting framework." },
      { phase: "Steady state", duration: "From month 2", desc: "Monthly close, group reporting, treaty-claim documentation, audit support." },
    ],
    commonMistakes: [
      "Not obtaining the ATO Certificate of Residence before treaty claims",
      "Missing the VAS-to-AASB / IFRS reconciliation",
      "Failing to align the TP documentation with ATO expectations",
      "Not tracking the AUD/VND FX exposure in the management accounts",
    ],
    benefits: [
      { title: "Treaty expertise", desc: "We obtain the ATO CoR, prepare the treaty-claim documentation, and apply the reduced rates." },
      { title: "AUD reporting", desc: "Monthly management accounts in AUD, with the FX gain/loss reconciled to the parent's reporting framework." },
      { title: "ATO-aligned documentation", desc: "TP documentation aligned with ATO expectations and OECD BEPS." },
    ],
    faqs: australiaFaqs,
  },
  "united-states": {
    slug: "united-states",
    name: "Accounting Services for US Companies in Vietnam",
    category: "countries",
    shortName: "United States",
    hero: {
      eyebrow: "Country",
      title: "US companies in",
      italic: "Vietnam: tax, accounting, and CFO advisory",
      description:
        "Vietnam-side accounting, tax, payroll, transfer pricing, and CFO advisory for US-headquartered companies. SOX-ready controls, USD reporting.",
    },
    overview:
      "US companies are increasingly using Vietnam as a regional operations hub. We provide Vietnam-side accounting, tax, payroll, transfer pricing, and CFO advisory to US parents. Our team is familiar with the absence of a US-Vietnam tax treaty, SOX control expectations, and USD reporting frameworks.",
    whoNeeds: [
      "US-headquartered companies with Vietnam operations",
      "US SMEs expanding into Vietnam",
      "US holding companies with Vietnamese subsidiaries",
    ],
    legalRequirements: [
      { title: "Vietnamese Accounting System (VAS)", desc: "Vietnam entities must maintain books under VAS and file statutory financial statements in Vietnamese." },
      { title: "No US-Vietnam tax treaty", desc: "Standard Vietnamese rates apply. Structure and substance are critical." },
      { title: "Group reporting", desc: "US parents typically expect monthly management accounts in USD, quarterly consolidation, and the annual audit." },
    ],
    costs: [
      { item: "US client monthly compliance", amount: "from USD 1,500 / month" },
      { item: "SOX controls and documentation", amount: "from USD 2,000 / month" },
    ],
    timeline: [
      { phase: "Setup", duration: "Week 1–4", desc: "Vietnam entity setup, group chart of accounts, SOX controls, USD reporting framework." },
      { phase: "Steady state", duration: "From month 2", desc: "Monthly close, group reporting, SOX documentation, audit support." },
    ],
    commonMistakes: [
      "Treating the Vietnam entity as a full-risk distributor when a limited-risk model is more appropriate (especially without a tax treaty)",
      "Missing the VAS-to-US-GAAP / IFRS reconciliation",
      "Failing to document the inter-company services with a benefit test",
      "Not implementing SOX controls from day one",
    ],
    benefits: [
      { title: "SOX-ready controls", desc: "Internal controls and documentation aligned with SOX expectations. We support the parent's SOX audit." },
      { title: "USD reporting", desc: "Monthly management accounts in USD, with the FX gain/loss reconciled to the parent's reporting framework." },
      { title: "FCPA-aligned books", desc: "Books and records that support FCPA compliance. We help maintain the documentation." },
    ],
    faqs: usFaqs,
  },
  "united-kingdom": {
    slug: "united-kingdom",
    name: "Accounting Services for UK Companies in Vietnam",
    category: "countries",
    shortName: "United Kingdom",
    hero: {
      eyebrow: "Country",
      title: "UK companies in",
      italic: "Vietnam: tax, accounting, and CFO advisory",
      description:
        "Vietnam-side accounting, tax, payroll, transfer pricing, and CFO advisory for UK-headquartered companies. HMRC-aligned documentation, GBP reporting.",
    },
    overview:
      "UK companies have a long-standing presence in Vietnam, particularly in financial services, manufacturing, and education. We provide Vietnam-side accounting, tax, payroll, transfer pricing, and CFO advisory to UK parents. Our team is familiar with the UK-Vietnam tax treaty, HMRC documentation requirements, and GBP / USD reporting frameworks.",
    whoNeeds: [
      "UK-headquartered companies with Vietnam operations",
      "UK SMEs expanding into Vietnam",
      "UK holding companies with Vietnamese subsidiaries",
    ],
    legalRequirements: [
      { title: "Vietnamese Accounting System (VAS)", desc: "Vietnam entities must maintain books under VAS and file statutory financial statements in Vietnamese." },
      { title: "UK-Vietnam tax treaty", desc: "Reduces withholding on dividends to 0% (with conditions), on interest to 10%, and on royalties to 5–10%." },
      { title: "Group reporting", desc: "UK parents typically expect monthly management accounts in GBP, quarterly consolidation, and the annual audit." },
    ],
    costs: [
      { item: "UK client monthly compliance", amount: "from USD 1,500 / month" },
      { item: "GBP reporting and consolidation", amount: "from USD 1,000 / month" },
    ],
    timeline: [
      { phase: "Setup", duration: "Week 1–4", desc: "Vietnam entity setup, group chart of accounts, GBP reporting framework." },
      { phase: "Steady state", duration: "From month 2", desc: "Monthly close, group reporting, treaty-claim documentation, audit support." },
    ],
    commonMistakes: [
      "Not obtaining the HMRC Certificate of Residence before treaty claims",
      "Missing the VAS-to-FRS 102 / IFRS reconciliation",
      "Failing to align the TP documentation with HMRC expectations",
      "Not tracking the GBP/VND FX exposure in the management accounts",
    ],
    benefits: [
      { title: "Treaty expertise", desc: "We obtain the HMRC CoR, prepare the treaty-claim documentation, and apply the reduced rates." },
      { title: "GBP reporting", desc: "Monthly management accounts in GBP, with the FX gain/loss reconciled to the parent's reporting framework." },
      { title: "HMRC-aligned documentation", desc: "TP documentation aligned with HMRC expectations and OECD BEPS." },
    ],
    faqs: ukFaqs,
  },
  japan: {
    slug: "japan",
    name: "Accounting Services for Japanese Companies in Vietnam",
    category: "countries",
    shortName: "Japan",
    hero: {
      eyebrow: "Country",
      title: "Japanese companies in",
      italic: "Vietnam: tax, accounting, and CFO advisory",
      description:
        "Vietnam-side accounting, tax, payroll, transfer pricing, and CFO advisory for Japanese-headquartered companies. NTA-aligned documentation, JPY reporting.",
    },
    overview:
      "Japan is one of the largest foreign investors in Vietnam, particularly in manufacturing. We provide Vietnam-side accounting, tax, payroll, transfer pricing, and CFO advisory to Japanese parents. Our team is familiar with the Japan-Vietnam tax treaty, NTA documentation requirements, J-SOX controls, and JPY / USD reporting frameworks.",
    whoNeeds: [
      "Japanese-headquartered companies with Vietnam operations",
      "Japanese SMEs expanding into Vietnam",
      "Japanese holding companies with Vietnamese subsidiaries",
    ],
    legalRequirements: [
      { title: "Vietnamese Accounting System (VAS)", desc: "Vietnam entities must maintain books under VAS and file statutory financial statements in Vietnamese." },
      { title: "Japan-Vietnam tax treaty", desc: "Reduces withholding on dividends to 0% (with conditions), on interest to 10%, and on royalties to 10%." },
      { title: "Group reporting", desc: "Japanese parents typically expect monthly management accounts in JPY, quarterly consolidation, and the annual audit." },
    ],
    costs: [
      { item: "Japanese client monthly compliance", amount: "from USD 1,500 / month" },
      { item: "JPY reporting and consolidation", amount: "from USD 1,000 / month" },
    ],
    timeline: [
      { phase: "Setup", duration: "Week 1–4", desc: "Vietnam entity setup, group chart of accounts, JPY reporting framework, J-SOX controls." },
      { phase: "Steady state", duration: "From month 2", desc: "Monthly close, group reporting, treaty-claim documentation, audit support." },
    ],
    commonMistakes: [
      "Not obtaining the NTA Certificate of Residence before treaty claims",
      "Missing the VAS-to-J-GAAP / IFRS reconciliation",
      "Failing to align the TP documentation with NTA expectations",
      "Not tracking the JPY/VND FX exposure in the management accounts",
    ],
    benefits: [
      { title: "Treaty expertise", desc: "We obtain the NTA CoR, prepare the treaty-claim documentation, and apply the reduced rates." },
      { title: "JPY reporting", desc: "Monthly management accounts in JPY, with the FX gain/loss reconciled to the parent's reporting framework." },
      { title: "J-SOX-aligned controls", desc: "Internal controls and documentation aligned with J-SOX expectations." },
    ],
    faqs: japanFaqs,
  },
  korea: {
    slug: "korea",
    name: "Accounting Services for Korean Companies in Vietnam",
    category: "countries",
    shortName: "South Korea",
    hero: {
      eyebrow: "Country",
      title: "Korean companies in",
      italic: "Vietnam: tax, accounting, and CFO advisory",
      description:
        "Vietnam-side accounting, tax, payroll, transfer pricing, and CFO advisory for Korean-headquartered companies. NTS-aligned documentation, KRW reporting.",
    },
    overview:
      "Korean companies are among the largest foreign investors in Vietnam, particularly in electronics, manufacturing, and consumer goods. We provide Vietnam-side accounting, tax, payroll, transfer pricing, and CFO advisory to Korean parents. Our team is familiar with the Korea-Vietnam tax treaty, NTS documentation requirements, and KRW / USD reporting frameworks.",
    whoNeeds: [
      "Korean-headquartered companies with Vietnam operations",
      "Korean SMEs expanding into Vietnam",
      "Korean holding companies with Vietnamese subsidiaries",
    ],
    legalRequirements: [
      { title: "Vietnamese Accounting System (VAS)", desc: "Vietnam entities must maintain books under VAS and file statutory financial statements in Vietnamese." },
      { title: "Korea-Vietnam tax treaty", desc: "Reduces withholding on dividends to 0% (with conditions), on interest to 10%, and on royalties to 5–10%." },
      { title: "Group reporting", desc: "Korean parents typically expect monthly management accounts in KRW, quarterly consolidation, and the annual audit." },
    ],
    costs: [
      { item: "Korean client monthly compliance", amount: "from USD 1,500 / month" },
      { item: "KRW reporting and consolidation", amount: "from USD 1,000 / month" },
    ],
    timeline: [
      { phase: "Setup", duration: "Week 1–4", desc: "Vietnam entity setup, group chart of accounts, KRW reporting framework." },
      { phase: "Steady state", duration: "From month 2", desc: "Monthly close, group reporting, treaty-claim documentation, audit support." },
    ],
    commonMistakes: [
      "Not obtaining the NTS Certificate of Residence before treaty claims",
      "Missing the VAS-to-K-IFRS reconciliation",
      "Failing to align the TP documentation with NTS expectations",
      "Not tracking the KRW/VND FX exposure in the management accounts",
    ],
    benefits: [
      { title: "Treaty expertise", desc: "We obtain the NTS CoR, prepare the treaty-claim documentation, and apply the reduced rates." },
      { title: "KRW reporting", desc: "Monthly management accounts in KRW, with the FX gain/loss reconciled to the parent's reporting framework." },
      { title: "NTS-aligned documentation", desc: "TP documentation aligned with NTS expectations and OECD BEPS." },
    ],
    faqs: koreaFaqs,
  },
};

export const serviceSlugs = Object.keys(servicePages);
