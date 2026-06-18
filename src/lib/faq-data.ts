export type FAQ = { question: string; answer: string };

export type TopicFAQs = {
  slug: string;
  name: string;
  description: string;
  faqs: FAQ[];
};

export const faqTopics: TopicFAQs[] = [
  {
    slug: "corporate-income-tax",
    name: "Corporate Income Tax (CIT)",
    description:
      "Vietnam's CIT rate, filing deadlines, incentives, and how foreign-owned companies are taxed on profits.",
    faqs: [
      {
        question: "What is the standard corporate income tax rate in Vietnam?",
        answer:
          "The standard CIT rate in Vietnam is 20%. Certain preferential sectors and qualifying economic zones may apply lower rates of 10%, 15%, or 17% for a defined period under specific conditions set out in the CIT Law and its implementing regulations.",
      },
      {
        question: "When is the CIT finalisation return due?",
        answer:
          "The annual CIT finalisation return (Form 03/QTT-TNCN) must be filed within 90 days from the end of the fiscal year. For calendar-year companies the deadline is 31 March of the following year. Late filing triggers penalties of VND 5–25 million and potential late-payment interest.",
      },
      {
        question: "Are foreign-owned companies subject to different CIT rules?",
        answer:
          "No, foreign-owned companies are taxed on the same 20% CIT rate as domestic companies. However, they are typically subject to additional obligations including transfer pricing documentation, capital account reporting to the State Bank of Vietnam, and the foreign contractor withholding regime when engaging local service providers.",
      },
      {
        question: "What CIT incentives are available for foreign investors?",
        answer:
          "Common incentives include: preferential rates of 10% / 15% / 17% for projects in encouraged sectors (high-tech, supporting industries, software, R&D) or in encouraged geographic areas; tax holidays of 2–6 years; and 50% reduction for up to 9 subsequent years. Eligibility requires advance application and registration with the tax authority.",
      },
      {
        question: "How are losses carried forward?",
        answer:
          "Tax losses can be carried forward for up to 5 consecutive years and offset against taxable profit. Carryback is not permitted. Losses transferred in a merger or consolidation generally follow the surviving entity, subject to specific conditions.",
      },
      {
        question: "What is the CIT treatment of inter-company service fees?",
        answer:
          "Inter-company service fees are deductible to the Vietnamese entity if they are arm's length, supported by a service agreement, an appropriate mark-up, and benefit-test documentation. The GDT routinely challenges fees without contemporaneous documentation.",
      },
      {
        question: "Can a foreign-owned company be exempt from CIT in the first year?",
        answer:
          "A company with a loss in its first year will have no CIT payable but must still file a finalisation return. Genuine CIT exemption is only available where a project qualifies for a tax holiday under the law — typically for high-tech, software, certain education, or encouraged-zone projects.",
      },
      {
        question: "How is capital gains on asset transfer taxed?",
        answer:
          "Capital gains from the transfer of capital in a Vietnamese entity are taxed as ordinary CIT at 20%. The taxable gain is the transfer price less the cost of the capital contributed. Failure to declare triggers back taxes, interest, and penalties.",
      },
      {
        question: "What is the GDT's approach to thin capitalisation?",
        answer:
          "Vietnam applies an interest-deduction cap of 30% of EBITDA under Decree 132/2020. Related-party debt exceeding 3:1 net assets (5:1 for certain industries) is not deductible. The GDT increasingly challenges related-party interest on tax audits.",
      },
      {
        question: "What happens if CIT is paid late?",
        answer:
          "Late payment interest is 0.03% per day (approximately 10.95% per year) on the unpaid amount, calculated from the day after the original due date. Continued non-payment can lead to enforcement action including suspension of the tax code and seizure of bank accounts.",
      },
    ],
  },
  {
    slug: "vat",
    name: "Value Added Tax (VAT)",
    description:
      "VAT methods, rates, declaration cycles, and the input-credit rules that apply to foreign-invested enterprises.",
    faqs: [
      {
        question: "What are the VAT rates in Vietnam?",
        answer:
          "Vietnam applies four VAT rates: 0% (exports and certain international transport), 5% (essential goods and services), 8% (a transitional rate applied to selected items 1 Feb 2025 – 31 Dec 2026), and 10% (the standard rate). A reduced 8% rate currently applies to many categories previously at 10%, scheduled to revert to 10% from 1 January 2027.",
      },
      {
        question: "What is the difference between the credit and deduction methods?",
        answer:
          "Under the credit method (the default for most businesses), the company pays VAT on outputs and claims credit for input VAT on business purchases. Under the deduction method (available to small and medium enterprises below a turnover threshold), VAT is calculated as a fixed percentage of revenue, and input credit is not claimed.",
      },
      {
        question: "When is the monthly VAT return due?",
        answer:
          "Monthly VAT returns (Form 01/GTGT) are due by the 20th day of the following month. Quarterly filing is available for companies with revenue below VND 50 billion in the prior calendar year, with returns due by the last day of the month following the quarter end.",
      },
      {
        question: "Can export zero-rated VAT be claimed on services consumed overseas?",
        answer:
          "Yes, certain services consumed outside Vietnam (such as advertising, training, consulting for foreign clients, and certain financial services) may qualify for 0% VAT. The company must retain documentation proving the service was consumed abroad — typically the contract, beneficiary location, and payment evidence.",
      },
      {
        question: "How is input VAT recovered on invalid invoices?",
        answer:
          "Input VAT on invalid or non-compliant invoices is not creditable. The company must request a corrected invoice from the supplier. If the supplier refuses, the GDT may permit an alternative adjustment with supporting evidence, but the company should never declare an input credit on a known-invalid invoice.",
      },
      {
        question: "Are bad debts creditable for VAT?",
        answer:
          "Yes, input VAT paid on bad debts that meet the statutory conditions (genuine, written off in accounting, pursued for recovery, and more than 6 months past due) is refundable. The procedure requires a written application, supporting documents, and a tax-authority review.",
      },
      {
        question: "How is VAT handled on free-of-charge samples and gifts?",
        answer:
          "Samples given for VAT-deductible business promotion purposes can be credited for input VAT, but the output VAT is not charged. Gifts to employees and individuals require a market-value output VAT declaration by the company. Documentation must clearly distinguish samples from gifts.",
      },
      {
        question: "What is the VAT treatment of e-commerce?",
        answer:
          "Foreign e-commerce suppliers without a Vietnamese permanent establishment are required to register for VAT via the e-portal of the GDT, declare and pay VAT on a quarterly basis, and appoint a tax representative. Domestic platforms must withhold tax on behalf of individual sellers.",
      },
      {
        question: "Can a startup with no sales still recover input VAT?",
        answer:
          "Companies in a pre-revenue phase accrue input VAT credits and may carry them forward indefinitely. Refund of accumulated input VAT is restricted: a refund is only available for specific categories (exports, FDI in pre-revenue phase in certain encouraged industries, etc.) — not for general businesses.",
      },
      {
        question: "How is VAT on imported goods calculated?",
        answer:
          "VAT on imports is calculated as (customs value + import duty + special consumption duty, if any) × VAT rate. It is payable at the time of customs clearance and is creditable as input VAT on the next monthly return, subject to the standard conditions.",
      },
    ],
  },
  {
    slug: "personal-income-tax",
    name: "Personal Income Tax (PIT)",
    description:
      "PIT for residents and non-residents, progressive rates, employment income, and tax treaty relief.",
    faqs: [
      {
        question: "What are the PIT rates for residents?",
        answer:
          "Vietnam-resident individuals are taxed on worldwide income at progressive rates from 5% to 35% across 7 brackets. Employment income is taxed after deducting personal allowance (VND 11 million/month) and dependent allowances (VND 4.4 million/month per dependent).",
      },
      {
        question: "What is the PIT rate for non-residents?",
        answer:
          "Non-residents are taxed at a flat 20% on Vietnam-sourced employment income, without personal allowance. Non-employment income is generally taxed at rates varying from 0.1% to 25% depending on the category. Tax-treaty relief may reduce these rates for citizens of countries with double-tax agreements with Vietnam.",
      },
      {
        question: "When is the PIT finalisation return due?",
        answer:
          "Annual PIT finalisation (Form 02/QTT-TNCN for employees, Form 08/QTT-TNCN for self-employed) is due within 90 days of year-end, i.e. 31 March of the following year for calendar-year taxpayers. The employer may undertake committed finalisation on the employee's behalf in some cases.",
      },
      {
        question: "How is expatriate PIT calculated?",
        answer:
          "Resident expatriates are taxed on worldwide income at progressive rates, with a tax-treaty-residency tie-breaker determining the host country for most types of income. Non-residents are taxed only on Vietnam-source income at 20% flat. Most assignees to Vietnam become tax residents within 183 days.",
      },
      {
        question: "What allowances are tax-exempt?",
        answer:
          "Common exempt items include: the personal and dependent allowances; home-leave tickets (up to 2 round trips/year for expatriates on a Vietnamese labour contract); school fees for children studying in Vietnam or abroad (under limits); relocation costs; and training costs that are primarily for the employer's benefit.",
      },
      {
        question: "How is stock-based compensation taxed?",
        answer:
          "ESOP income from vested shares is taxable at vesting. The taxable amount is generally the fair market value at vesting less any exercise price paid. Cash settlement is taxed at the time of receipt. Withholding on RSUs and options at vesting is the company's responsibility.",
      },
      {
        question: "How does Vietnam tax director fees paid to non-residents?",
        answer:
          "Director fees paid to non-residents for board services are treated as PIT-taxable Vietnam-source income. The standard rate is 20% on gross. The company must withhold and declare. Tax-treaty relief for independent personal services may apply where the director does not have a fixed base in Vietnam.",
      },
      {
        question: "What is the PIT treatment of termination payments?",
        answer:
          "Statutory severance and redundancy payments are generally tax-free up to statutory caps. Voluntary redundancy payments that exceed the statutory formula are fully taxable. Tax equalisation and gross-up payments from the employer are also fully taxable in the hands of the employee.",
      },
      {
        question: "How do dependent allowances work?",
        answer:
          "Each registered dependent reduces taxable income by VND 4.4 million per month. Dependents must be registered with the tax authority via Form 07/ĐK-NPT-TNCN, with supporting documents (birth certificate for children, marriage certificate for spouse, certificate for disabled/incapacitated dependents).",
      },
      {
        question: "What is the tax-treaty process for foreign assignees?",
        answer:
          "Vietnam has DTAs with around 80 countries. To claim treaty benefits, the employee must obtain a Certificate of Residence (CoR) from their home-country tax authority and submit it (with Form 08 or equivalent) to the Vietnamese employer before payment. Without a valid CoR, treaty rates cannot be applied.",
      },
    ],
  },
  {
    slug: "foreign-contractor-tax",
    name: "Foreign Contractor Tax (FCT)",
    description:
      "The deemed VAT and PIT regime that applies when foreign companies provide services or transfer technology in Vietnam.",
    faqs: [
      {
        question: "What is foreign contractor tax (FCT)?",
        answer:
          "FCT is a withholding regime under which the Vietnamese customer withholds and pays tax on behalf of a foreign contractor that has no Vietnamese permanent establishment. It comprises a deemed VAT (typically 5%) and a deemed PIT (typically 5%), calculated on a deemed-taxable turnover.",
      },
      {
        question: "When does FCT apply?",
        answer:
          "FCT applies to payments to foreign contractors for: services performed in Vietnam or consumed in Vietnam; royalties, licensing fees, and transfer of technology; and certain supplies with installation in Vietnam. It does not apply to pure offshore services consumed wholly outside Vietnam with proper documentation.",
      },
      {
        question: "What are the standard FCT rates?",
        answer:
          "The standard deemed rates are VAT 5% and PIT 5%, giving a combined rate of 10% on the gross payment. Rates vary by activity type: management/consulting (5% VAT, 5% PIT); construction (3% VAT, 2% PIT); and certain other activities have specific rates. A tax-treaty reduction on PIT may apply where the foreign contractor files the relevant CoR.",
      },
      {
        question: "How is FCT calculated?",
        answer:
          "FCT is calculated on the gross payment made to the foreign contractor. The deemed VAT is 5% × gross / 1.05; the deemed PIT is 5% × gross / 1.05. The Vietnamese customer withholds and remits both to the tax authority by the 20th of the following month.",
      },
      {
        question: "Can a foreign contractor register for direct tax filing instead?",
        answer:
          "Yes. A foreign contractor with a Vietnamese PE may register as a direct filer and pay CIT and VAT on actuals, avoiding the deemed regime. This is typically advantageous for high-margin activities or where the foreign contractor has substantial local expenses that would otherwise be undeductible.",
      },
      {
        question: "What is required to obtain a tax-treaty reduction on FCT?",
        answer:
          "The foreign contractor must submit a Certificate of Residence (CoR) issued by its home-country tax authority, together with the relevant form prescribed by Circular 111/2013. The treaty rate is applied at the time of payment. The CoR is typically valid for one year from issuance.",
      },
      {
        question: "What happens if the customer does not withhold FCT?",
        answer:
          "Failure to withhold leaves the customer jointly liable for the unpaid tax plus penalties of 1–3 times the tax underpaid. The GDT routinely audits cross-border payments and can recover from either the customer or the foreign contractor, regardless of contractual terms.",
      },
      {
        question: "Are digital services subject to FCT?",
        answer:
          "Foreign providers of digital services to Vietnamese consumers (such as SaaS, advertising, and platform services) are subject to FCT. Circular 13/2022 introduced a simplified declaration portal. Many foreign providers use Vietnamese tax agents to manage compliance.",
      },
      {
        question: "How are royalty payments to a foreign parent taxed?",
        answer:
          "Royalties paid to a foreign parent for the use of intellectual property in Vietnam are subject to FCT (typically 5% VAT + 10% PIT, with treaty PIT rates of 5–10% commonly available). The payment is deductible to the Vietnamese payer, but only where the full FCT or treaty-withheld amount is properly declared.",
      },
      {
        question: "What records support an FCT-exempt payment?",
        answer:
          "To support that a payment is exempt (e.g. services performed wholly outside Vietnam), maintain: a contract showing the place of performance; boarding passes, work-location records, and timesheets; beneficiary-bank evidence; and a self-declaration by the foreign contractor. Documentation is reviewed at audit and should be in English or bilingual.",
      },
    ],
  },
  {
    slug: "payroll",
    name: "Payroll & Employment",
    description:
      "Payroll cycles, payslips, gross-to-net calculation, gross-up, and the obligations that come with hiring in Vietnam.",
    faqs: [
      {
        question: "What is the payroll cycle in Vietnam?",
        answer:
          "There is no statutory pay frequency, but monthly payroll by the 25th–last day of the month is the market norm. Pay must be in Vietnamese Dong unless a written employment contract allows another currency for foreign employees. Payment is by bank transfer to a personal account.",
      },
      {
        question: "What components make up a Vietnam payslip?",
        answer:
          "A compliant payslip includes: basic salary, allowances (position, meal, phone, housing, seniority, etc.), bonuses, gross income, social insurance contributions (employee 10.5%, employer 17.5% capped at 20× base salary), health insurance (employee 1.5%, employer 3%), unemployment insurance (employee 1%, employer 1%), PIT withholding, and net pay.",
      },
      {
        question: "How is 13th-month pay treated?",
        answer:
          "The 13th-month salary (and Tet bonus) is at the employer's discretion. Taxable as employment income, it is included in the month paid. Some employers structure bonuses as a fringe benefit subject to PIT and subject to declaration in the month paid.",
      },
      {
        question: "What is payroll tax equalisation?",
        answer:
          "Tax equalisation is a common arrangement for expatriate assignees where the employer bears the home-country and host-country tax burden, while the employee takes home a target net. It is a PIT-taxable fringe benefit to the employee, and the gross-up itself is also taxable, creating compounding complexity that should be modelled and budgeted.",
      },
      {
        question: "How is unpaid leave treated for payroll?",
        answer:
          "Unpaid leave is permitted by the labour code up to limits. Social insurance contributions are not required for unpaid leave exceeding 14 working days in a month. The payslip for that month should reflect zero salary for unpaid days and no SI contributions for the period.",
      },
      {
        question: "Can employment income be paid in USD?",
        answer:
          "Vietnamese employees must be paid in VND. Foreign employees under a labour contract that explicitly allows foreign-currency payment can be paid in a hard currency (USD, EUR, JPY, etc.) and use a foreign-currency account at a licensed Vietnamese bank.",
      },
      {
        question: "What is the Probation payroll?",
        answer:
          "Probation is not mandatory; if used, the probationary salary may be at least 85% of the main contract salary. The probation period varies by job grade (max 60 days for office work, 6 days for simple jobs). After probation, the employee becomes a full labour-contract holder with full SI, PIT, and other benefits.",
      },
      {
        question: "What are the working hour and overtime rules?",
        answer:
          "Standard hours are 8/day and 48/week. Overtime is capped at 30 hours/month and 200 hours/year (300 hours in certain sectors). Overtime pay is 150% (weekday), 200% (weekend), and 300% (public holiday). The 200-hour cap is often exceeded in practice and is a common audit finding.",
      },
      {
        question: "How is part-time employment taxed?",
        answer:
          "Part-time employees are subject to the same PIT rules, with monthly withholding using the resident progressive rates or 20% flat for non-residents. Social insurance is required for contracts of 1 month or more. Multiple part-time employers are summed for PIT monthly withholding.",
      },
      {
        question: "What is the bonus taxation timing?",
        answer:
          "Bonuses are taxed in the month actually paid, regardless of the period they relate to. The 13th-month bonus, Tet bonus, performance bonus, and project bonus are all employment income subject to PIT withholding in the month paid. Year-end bonuses paid in January of the following year are taxed in that month.",
      },
    ],
  },
  {
    slug: "social-insurance",
    name: "Social, Health & Unemployment Insurance",
    description:
      "Statutory contributions, salary caps, foreign-employee coverage, and benefits.",
    faqs: [
      {
        question: "Who must contribute to social insurance?",
        answer:
          "All employees with a labour contract of 1 month or more are required to participate in social insurance (SI), health insurance (HI), and unemployment insurance (UI). The employer is responsible for registration and monthly contribution.",
      },
      {
        question: "What is the contribution rate and cap?",
        answer:
          "Total contribution: 32% of capped salary (employee 10.5%, employer 21.5%). The salary cap is 20× the prevailing base salary. From 1 July 2025 the cap rises to 30× the base salary, with a transition scheme. Voluntary SI is available for some categories.",
      },
      {
        question: "Are foreign employees required to join social insurance?",
        answer:
          "Foreign employees working under a Vietnamese labour contract of 1 month or more must participate in SI from the date the contract starts. Several categories are exempt (internal-transferee, contract less than 1 month, etc.), but those working beyond 1 month are mandatorily covered.",
      },
      {
        question: "What are the SI benefits?",
        answer:
          "SI covers sickness, maternity, work-related accident and disease, retirement, and death. UI provides a portion of salary for up to 12 months of unemployment. HI covers 80–100% of medical costs for in-patient care, with co-payment for some services.",
      },
      {
        question: "How is the contribution base calculated?",
        answer:
          "The contribution base is the contractual salary plus allowances that are fixed and recurring (position, seniority, housing, phone, etc.). Variable bonuses, meal allowance, and one-off payments are typically excluded from the contribution base. The base must be reviewed annually.",
      },
      {
        question: "Can the employee opt out of SI?",
        answer:
          "There is no opt-out for employees with a labour contract of 1 month or more. Trying to pay salary net of SI to an employee (or paying through cash) is a violation with penalties up to VND 75 million per offence and potential criminal liability for repeated evasion.",
      },
      {
        question: "What happens to SI on termination?",
        answer:
          "On termination, the employee is entitled to a lump-sum withdrawal of their SI accumulation if they move abroad permanently, or a one-off unemployment benefit if they meet the conditions. The employer must finalise the SI record within 30 days of termination.",
      },
      {
        question: "How is the contribution base increased?",
        answer:
          "The contribution base should be reviewed at least once a year, when a labour contract is renewed, or when there is a salary adjustment. The base cannot be reduced during the contract term. Late payment of contributions triggers late-payment interest of 0.03%/day.",
      },
      {
        question: "What is the employer's role in HI?",
        answer:
          "The employer enrols the employee with the social insurance agency, deducts the employee portion from payroll, tops up the employer portion, and remits the total monthly. The employee receives an HI card and can use it at any public hospital or registered private provider.",
      },
      {
        question: "What are the penalties for non-compliance with SI?",
        answer:
          "Penalties range from VND 5 million to VND 75 million for failing to enrol or under-declaring contributions, plus recovery of unpaid contributions, late-payment interest, and potential criminal liability for large-scale evasion. Audit risk is highest in labour-intensive sectors.",
      },
    ],
  },
  {
    slug: "accounting-requirements",
    name: "Accounting Requirements",
    description:
      "VAS framework, accounting periods, chart of accounts, internal controls, and statutory reporting.",
    faqs: [
      {
        question: "What is the Vietnamese Accounting System (VAS)?",
        answer:
          "VAS is the national accounting framework for financial statements. It is largely cash-and-accrual hybrid with prescribed treatments for many items. It is the only system accepted for statutory CIT finalisation, although IFRS is permitted for credit institutions and certain public-interest entities.",
      },
      {
        question: "What is the standard chart of accounts?",
        answer:
          "Decision 19/2006/QD-BTC prescribes the standard chart of accounts with classes 0–9. Companies may extend the chart with sub-accounts as long as the parent classes remain intact. The GDT and auditors expect alignment with this structure for tax mapping and statutory reporting.",
      },
      {
        question: "What is the fiscal year?",
        answer:
          "The default fiscal year is the calendar year. Other periods (e.g. ending 30 June) are permitted with the tax authority's registration and must be used for CIT, PIT, and VAT. The fiscal year generally cannot be changed without tax authority approval.",
      },
      {
        question: "What books and records must be maintained?",
        answer:
          "Required records include: the accounting book series (general journal, general ledger, sub-ledgers), tax registers, fixed-asset register, payroll register, inventory records, bank reconciliations, statutory financial statements, and supporting vouchers. Records must be retained for at least 10 years for accounting and 5 years for tax.",
      },
      {
        question: "What is the language of accounting records?",
        answer:
          "Records can be maintained in Vietnamese, a foreign language commonly used in the industry, or both. The financial statements, tax declarations, and statutory filings must be in Vietnamese (with English translations allowed for the company's own use).",
      },
      {
        question: "What are the internal control requirements?",
        answer:
          "VAS requires a system of internal controls sufficient to prevent and detect errors and fraud. For statutory audit entities, the controls are tested by the auditor. Common weaknesses are authorisation limits, segregation of duties, and IT general controls over the accounting system.",
      },
      {
        question: "What is the auditor's role vs the company's role?",
        answer:
          "The company prepares the financial statements and is responsible for them. The auditor expresses an opinion on whether the statements give a true and fair view. The auditor does not prepare the books; rather, the auditor tests them. The engagement letter should clearly delineate the scope.",
      },
      {
        question: "What is the penalty for late filing of financial statements?",
        answer:
          "Late filing of statutory financial statements is penalised at VND 5–25 million, and the company's tax code may be flagged. For audit-required entities, late submission of the audited financial statements also impacts the CIT finalisation deadline.",
      },
      {
        question: "Can a foreign-owned company use IFRS?",
        answer:
          "Only credit institutions, certain public-interest entities, and parent companies of state-owned groups are required or permitted to use IFRS for statutory reporting. Most FDI companies must use VAS. IFRS financial statements may be prepared for the parent as a parallel exercise.",
      },
      {
        question: "What is a statutory audit?",
        answer:
          "A statutory audit is a financial-statement audit required by law (for limited liability companies with 2+ members, joint-stock companies, and FDI companies). The audit must be performed by an independent audit firm licensed in Vietnam; the report is filed with the tax authority.",
      },
    ],
  },
  {
    slug: "audits",
    name: "Audits & GDT Inspections",
    description:
      "Tax audit triggers, document preparation, GDT powers, and post-audit follow-up.",
    faqs: [
      {
        question: "When does the GDT typically audit a company?",
        answer:
          "Common audit triggers: significant losses, declining revenue, related-party transactions, transfer-pricing exposure, VAT refund claims, sector high-risk flags, randomised checks (especially in the first 3 years of operation), whistle-blower complaints, and the first 2 years after incorporation.",
      },
      {
        question: "What is the typical audit period covered?",
        answer:
          "Routine tax audits generally cover 3 years of filings. The GDT can go back up to 5 years for transfer-pricing cases, and up to 10 years for suspected evasion. Statute of limitations is 5 years from the date of the filing for non-evasion cases, and 10 years where evasion is alleged.",
      },
      {
        question: "What powers does the GDT have?",
        answer:
          "The GDT can request documents, conduct on-site inspections, interview staff, copy records, freeze bank accounts, and impose tax assessments and penalties. Cooperation is mandatory; refusal is an offence. Representation by a tax agent during an audit is permitted.",
      },
      {
        question: "How should we prepare for a GDT audit?",
        answer:
          "Begin by reconciling the financial statements to the tax returns. Confirm the transfer-pricing documentation is current and supports inter-company pricing. Ensure the payroll records, SI contributions, and PIT withholding are reconciled. Have a single point of contact and a clear authorisation matrix for information requests.",
      },
      {
        question: "What is the difference between a tax audit and a tax inspection?",
        answer:
          "A tax audit is a comprehensive review of one or more tax obligations. A tax inspection is a broader review that may include compliance with accounting, invoicing, customs, and labour obligations. Both can result in tax assessments, penalties, and referrals.",
      },
      {
        question: "Can we appeal a GDT assessment?",
        answer:
          "Yes. The first step is an administrative complaint to the GDT within 90 days of the decision. If unresolved, the case can be escalated to the People's Committee at the same level, then to the Ministry of Finance, and finally to the Administrative Court. Most assessments are settled at the complaint stage.",
      },
      {
        question: "What are the common penalties for non-compliance?",
        answer:
          "Penalties range from VND 5 million to VND 200 million per violation, plus 0.03%/day late-payment interest on underpaid tax, plus 1–3× the underpaid tax for evasion. Personal liability of the legal representative is possible for serious or repeated violations.",
      },
      {
        question: "What is a transfer-pricing audit?",
        answer:
          "A TP audit is a specialised review of inter-company transactions. The GDT reviews the Local File, Master File, and CbCR to assess whether pricing is arm's length. Adjustments can lead to CIT, VAT, and FCT reassessments across multiple years, plus penalties and interest.",
      },
      {
        question: "Can the GDT access bank accounts?",
        answer:
          "Yes. The GDT has the legal power to request bank statements and transaction details directly from banks. Bank-account-based audit methods (BABM) are used to cross-check turnover declarations, and unexplained deposits can be treated as taxable income.",
      },
      {
        question: "What is the cost of a tax audit?",
        answer:
          "The GDT's audit is not directly billed. The company's internal cost is significant: management time, advisor fees, document preparation, and remediation. A typical first-time audit for an FDI company runs USD 8,000–30,000 in advisor fees and 3–9 months of management time.",
      },
    ],
  },
  {
    slug: "fdi-companies",
    name: "FDI Companies",
    description:
      "Specific obligations for foreign-owned companies: capital accounts, SBV reporting, and investment registration.",
    faqs: [
      {
        question: "What licences do FDI companies need?",
        answer:
          "FDI companies typically need: an Investment Registration Certificate (IRC) for the project, an Enterprise Registration Certificate (ERC) for the entity, sector-specific sub-licences (for trading, education, etc.), and post-licence registrations (tax code, SI, customs). A representative office needs an IRC only and is restricted to non-commercial activities.",
      },
      {
        question: "What is the minimum capital for an FDI company?",
        answer:
          "There is no statutory minimum across all sectors, but the IRC approval typically requires a capital amount consistent with the project's scope. Capital-intensive sectors (manufacturing, real estate) have higher practical floors. Sectors with a statutory minimum include education (VND 50 billion for a university), securities, and certain financial services.",
      },
      {
        question: "How is FDI capital monitored?",
        answer:
          "The State Bank of Vietnam (SBV) tracks the inflow and use of FDI capital. Companies must report capital contributions, loan drawdowns, and usage. The GDT cross-checks against declared capital. Failure to disburse committed capital on schedule can trigger IRC revocation.",
      },
      {
        question: "Can an FDI company repatriate profits?",
        answer:
          "Yes. After-tax profits can be repatriated by dividend distribution. The company files a notification with the SBV, completes PIT withholding for foreign shareholders, and transfers the net amount through a licensed bank. Profit repatriation is a right under the investment certificate, not subject to additional approval.",
      },
      {
        question: "What is a foreign-loan registration?",
        answer:
          "Medium- and long-term foreign loans (over 1 year) require SBV registration before drawdown. Short-term loans (under 1 year) require notification. The company must report drawdowns, repayments, and interest. Loans in foreign currency are subject to FX regulations and the foreign-currency loan cap.",
      },
      {
        question: "Can a foreign shareholder sell their stake?",
        answer:
          "Yes, but the transfer requires notification to the SBV and an amendment to the IRC if the new shareholder is a non-resident. The transfer price must be arm's length, and the Vietnamese company may need to declare a tax on any capital gain if applicable. Material changes to ownership require advance approval.",
      },
      {
        question: "What is the role of a foreign-investment lawyer?",
        answer:
          "A foreign-investment lawyer drafts the application for the IRC and ERC, advises on sector sub-licences, and represents the company with the licensing authority. They are essential for sector-specific compliance, joint-venture structuring, and dispute resolution. They are distinct from tax advisors, although the two often work together.",
      },
      {
        question: "What is the difference between a Branch and a Subsidiary?",
        answer:
          "A branch is an extension of the foreign parent, not a separate legal entity; the parent is directly liable. A subsidiary is a separate Vietnamese legal entity (typically a limited liability company or joint-stock company), with liability limited to its capital. Branches are restricted in the activities they can undertake and are not permitted in some sectors.",
      },
      {
        question: "Can a foreign-owned company hold real estate?",
        answer:
          "Yes, but only for the purpose of executing the investment project. Residential property ownership by FDI entities is generally not permitted. Land use rights are allocated or leased by the State; a company cannot own land outright. The land-use-right certificate is the title document.",
      },
      {
        question: "What is the typical timeline to set up an FDI company?",
        answer:
          "A standard FDI setup takes 8–16 weeks from document preparation to ERC issuance, depending on the sector and the licensing authority's workload. Sectors with national-security review (encryption, certain media, certain cross-border data) can take 4–6 months. Pre-engagement with the local Department of Planning and Investment is the key to a fast track.",
      },
    ],
  },
  {
    slug: "transfer-pricing",
    name: "Transfer Pricing",
    description:
      "Arm's-length pricing, Local File / Master File / CbCR, and TP audit defence.",
    faqs: [
      {
        question: "What is the transfer-pricing threshold for documentation?",
        answer:
          "Companies with related-party transactions of VND 50 billion or more in a fiscal year must prepare a Local File. Master File is required for parent groups with consolidated revenue of VND 18,000 billion or more. Country-by-Country Reporting (CbCR) is required for groups with revenue of VND 18,000 billion or more.",
      },
      {
        question: "What methods are accepted for arm's-length pricing?",
        answer:
          "Vietnam accepts Comparable Uncontrolled Price (CUP), Resale Price, Cost Plus, Transactional Net Margin Method (TNMM), and Profit Split. TNMM is the most commonly used due to the limited availability of CUP data in Vietnam. The choice of method must be supported by a comparability analysis.",
      },
      {
        question: "What is the deadline for filing the Local File?",
        answer:
          "The Local File must be prepared by the time the CIT finalisation return is filed (i.e. 90 days after fiscal year-end). The GDT can request the Local File at any time within the audit-review window. Late preparation or non-existent documentation is heavily penalised.",
      },
      {
        question: "What is a Mutual Agreement Procedure (MAP)?",
        answer:
          "A MAP is a process under a tax treaty that allows the competent authorities of two countries to resolve disputes arising from transfer-pricing or double-taxation issues. The taxpayer can request a MAP via the home-country competent authority. MAPs typically take 2–5 years to resolve.",
      },
      {
        question: "How is the TP adjustment taxed?",
        answer:
          "A TP adjustment by the GDT results in a CIT underpayment for the audited year, plus late-payment interest at 0.03%/day and a penalty of 1–3× the underpayment. The GDT can also adjust the counter-party jurisdiction through MAP or unilaterally.",
      },
      {
        question: "What is a 'substance' requirement for an IP holding entity?",
        answer:
          "An IP holding entity must demonstrate that it controls the economic and legal ownership of the IP, bears the development risk, and has the people and infrastructure to perform the DEMPE functions (Development, Enhancement, Maintenance, Protection, Exploitation). The OECD/G20 BEPS framework is the reference standard.",
      },
      {
        question: "Can management fees be deducted?",
        answer:
          "Management fees paid to a related party are deductible if the services are real, the benefit test is met, the mark-up is arm's length, and the documentation supports the charges. Charges for shareholder activities, duplicated services, and items that benefit the shareholder personally are not deductible.",
      },
      {
        question: "How are intra-group services priced?",
        answer:
          "Intra-group services should be priced at cost plus an arm's-length mark-up (typically 5% as a benchmark in Vietnam, though 3–10% is observed in comparables). Cost-only or no-mark-up arrangements attract GDT scrutiny. A benefit test is required: the Vietnamese entity must actually receive a benefit.",
      },
      {
        question: "What is the role of a benchmarking study?",
        answer:
          "A benchmarking study supports the choice of method and the arm's-length range. It identifies comparable companies (typically via databases such as RoyaltyStat, ktMINE, or Orbis) and tests the controlled transaction's profitability against the interquartile range of comparables.",
      },
      {
        question: "What is the CbCR filing deadline?",
        answer:
          "CbCR must be filed with the CIT finalisation return for the parent group's fiscal year ending 12 months or more after the parent's first CbCR-reporting fiscal year. The report is exchanged under the Multilateral Competent Authority Agreement. Vietnam has activated CbCR exchanges since 2018.",
      },
    ],
  },
  {
    slug: "profit-repatriation",
    name: "Profit Repatriation",
    description:
      "Dividends, branch profits, royalties, and FX controls on outbound payments.",
    faqs: [
      {
        question: "How are dividends paid to foreign shareholders?",
        answer:
          "After-tax profits can be distributed to foreign shareholders as dividends. There is no Vietnamese withholding tax on dividends paid to a foreign parent corporation (subject to the foreign-investment certificate conditions). The distribution must follow Vietnamese accounting rules and be supported by retained-earnings calculation.",
      },
      {
        question: "How long must profits remain in Vietnam before repatriation?",
        answer:
          "There is no minimum holding period for dividends. However, the GDT can challenge a dividend distribution if the company is loss-making overall, has unresolved tax liabilities, or has not completed CIT finalisation. Pre-distribution tax clearance is recommended.",
      },
      {
        question: "What is the process for repatriating dividends?",
        answer:
          "The board of members/shareholders resolves the dividend distribution. The company files a notification with the SBV through the bank. The bank remits the net amount to the shareholder's overseas account, less the prescribed fees. A tax clearance letter is generally not required for dividend remittance.",
      },
      {
        question: "Can a company lend money to a foreign parent?",
        answer:
          "Loans from a Vietnamese subsidiary to a foreign parent are restricted. Outbound loans are generally not permitted unless structured as part of a registered inter-company loan with documented terms. The GDT challenges round-trip and back-to-back arrangements as potential constructive dividends.",
      },
      {
        question: "What is the FX risk of holding VND?",
        answer:
          "The VND is managed against the USD by the SBV within a band. Day-to-day volatility is limited, but the long-term trend is gradual depreciation. Companies with USD expenses (royalties, dividends, services) often hold a multi-currency position to manage the timing risk of remittance.",
      },
      {
        question: "Can profits be repatriated in kind?",
        answer:
          "Generally no. Outbound payments in kind require prior approval and valuation by an independent valuer. The GDT will assess the market value of the in-kind remittance and may deem the difference as a constructive dividend. Cash is the only practical repatriation route.",
      },
      {
        question: "What is the tax on capital gains from selling an FDI stake?",
        answer:
          "A foreign transferor selling shares in a Vietnamese company is taxed on the capital gain at 20% CIT (or treaty rate). The buyer is required to withhold the tax at the time of payment and remit to the tax authority within 10 days. Treaty relief may reduce the rate to 0% where the seller holds a small stake.",
      },
      {
        question: "How is branch profit treated?",
        answer:
          "A foreign-branch's after-tax profit is treated as distributed at year-end and subject to remittance tax (under tax-treaty rates, typically 0% to 10%; absent a treaty, 0% as per the CIT Law's branch-profit-remittance provision). The branch must complete CIT finalisation before remitting.",
      },
      {
        question: "What is the typical timeline for dividend remittance?",
        answer:
          "From board resolution to receipt of funds in the overseas account, a typical dividend remittance takes 2–4 weeks, assuming all documentation is in order. The bank handles the SBV notification as part of the FX process. Delays arise from incomplete retained-earnings documentation or unresolved tax queries.",
      },
      {
        question: "What records support a dividend remittance?",
        answer:
          "Records to retain: audited or reviewed financial statements, CIT finalisation returns, board resolution, retained-earnings computation, the tax-clearance letter (if requested), and the SBV notification. The records are reviewed in the event of an SBV audit or GDT inspection.",
      },
    ],
  },
  {
    slug: "work-permits",
    name: "Work Permits & Expatriates",
    description:
      "Work-permit requirements, TRC, dependent visas, and the labour-code rules for foreign staff.",
    faqs: [
      {
        question: "Who needs a Vietnamese work permit?",
        answer:
          "Most foreign nationals working in Vietnam under a labour contract need a work permit. Exempt categories include: internal-transferee specialists (under specific conditions), workers in Vietnam for less than 3 months, certain investors and contributors of capital, and holders of practising certificates (e.g. lawyers).",
      },
      {
        question: "What documents are required for a work permit?",
        answer:
          "Commonly required: a health certificate (issued by a designated Vietnamese or overseas hospital), a clean police check from the home country (apostilled and translated), educational credentials, proof of at least 3 years of relevant work experience, the labour contract, and an introduction letter from the host company.",
      },
      {
        question: "How long does a work permit take?",
        answer:
          "A standard work permit takes 4–8 weeks from document preparation to issuance. Documents issued abroad (criminal record, apostilled degrees) often take longer due to notarisation, apostille, and translation timelines. Begin the process at least 3 months before the start date.",
      },
      {
        question: "What is a Temporary Residence Card (TRC)?",
        answer:
          "A TRC is a long-term residence card issued to foreign nationals with a valid work permit, investment certificate, or other qualifying status. It removes the need for visa renewals and permits multiple-entry travel. TRCs are typically valid for 2 years for work-permit holders and renewable.",
      },
      {
        question: "Can dependents accompany a work-permit holder?",
        answer:
          "Yes. A dependent visa (TR or visa extension) can be issued to a spouse, minor children, and parents-in-law. The dependent visa is sponsored by the work-permit holder. Dependents cannot work without their own work permit or relevant authorisation.",
      },
      {
        question: "What is an internal-transferee (expatriate) under the labour code?",
        answer:
          "An internal transferee is a foreign employee who has been employed by an offshore related entity for at least 12 months immediately before being transferred to Vietnam. They are exempt from the work permit requirement, but the host company must notify the labour authority and obtain a work-permit-exemption certificate.",
      },
      {
        question: "What is the tax-residency rule for expatriates?",
        answer:
          "An individual becomes a Vietnam tax resident if present for 183 days or more in a calendar year, or 12 months from arrival on a 12-month rolling basis, or has a permanent residence in Vietnam. Residents are taxed on worldwide income at progressive rates.",
      },
      {
        question: "What happens if a work permit is not obtained?",
        answer:
          "Employing a foreign national without a work permit triggers a fine of VND 30–75 million per person, plus the requirement to terminate the employment. Repeat violations can result in suspension of the employer's labour-code compliance. The employee may also be deported.",
      },
      {
        question: "What is a practising certificate?",
        answer:
          "A practising certificate is a work-permit exemption available to specified professions (lawyers, foreign experts on short-term projects, etc.). It is granted by the relevant professional body. The category and conditions are set out in the labour code and Decree 152/2020.",
      },
      {
        question: "How does a company re-apply when a work permit expires?",
        answer:
          "Re-application is required for each work permit. The new permit is typically valid for up to 2 years and is non-renewable in practice (a fresh application is required). Employers should plan the re-application timeline 2–3 months before expiry to avoid gaps.",
      },
    ],
  },
  {
    slug: "accounting-services",
    name: "Accounting & Bookkeeping",
    description:
      "VAS-compliant bookkeeping, financial statements, IFRS reconciliation, cloud accounting, and outsourced finance-function best practice.",
    faqs: [
      { question: "What is VAS?", answer: "VAS is the Vietnamese Accounting System, a set of accounting standards and chart-of-accounts rules issued by the Ministry of Finance. All companies registered in Vietnam must maintain books under VAS. The standards are broadly similar to IFRS but with local differences in inventory, fixed assets, and government grants." },
      { question: "What is the difference between VAS and IFRS?", answer: "VAS is Vietnam's national accounting framework (mandatory for statutory reporting). IFRS is the international framework used by most multinational groups for consolidation. Differences include revenue recognition, lease accounting, deferred tax, impairment of assets, and government grants. Most FDI entities maintain dual ledgers or prepare a quarterly VAS-to-IFRS reconciliation." },
      { question: "What accounting software do foreign companies use in Vietnam?", answer: "Xero and QuickBooks Online are the most common for FDI clients, supplemented by local tools like MISA SME.NET or Fast Accounting for Vietnamese statutory reporting. For manufacturing and high-volume entities, SAP Business One and Oracle NetSuite are common. The choice depends on transaction volume, multi-currency needs, group consolidation, and statutory reporting requirements." },
      { question: "How often are books closed?", answer: "Monthly close within 10 working days of month-end is the standard. Weekly processing is available for high-transaction entities. Quarterly reviews with the partner are standard; annual close is tied to the statutory audit and CIT finalisation cycle." },
      { question: "What is the chart-of-accounts structure for an FDI company?", answer: "A typical structure is 4-digit VAS code for statutory reporting and 6-digit group code for management reporting, mapped monthly. Sub-ledgers track inter-company balances, fixed assets, and bank reconciliation. The chart is built at onboarding and reviewed quarterly." },
      { question: "Can a foreign-owned company use English in its financial statements?", answer: "The statutory financial statements filed with the GDT must be in Vietnamese. The English version is prepared for management, head office, and group consolidation purposes. The two versions reconcile and are reviewed by the statutory auditor." },
      { question: "What is the audit-trail requirement?", answer: "Every accounting entry must be supported by source documentation: invoices, contracts, bank statements, approvals. The audit trail must be sufficient for a third party to trace any balance back to underlying transactions. Soft-copy records are permitted if signed digitally; hard-copy invoices for input VAT must be retained for at least 10 years." },
      { question: "How are bank reconciliations handled?", answer: "Monthly bank reconciliation is part of the standard close. Bank feeds automate the matching; unmatched items are investigated and either posted (genuine transactions) or followed up (timing differences, errors). Most FDI clients use cloud accounting with API-connected bank feeds." },
      { question: "What is the retention period for accounting records?", answer: "Accounting records must be retained for at least 10 years. The statutory financial statements, CIT returns, VAT returns, and supporting documentation are subject to GDT review within this period. Records in electronic form must comply with Vietnam's e-archive regulations." },
      { question: "How do you handle foreign-currency transactions?", answer: "Foreign-currency transactions are translated at the transaction-date rate (or a monthly average rate for immaterial items). FX gains and losses are recognised in profit or loss. Bank accounts in foreign currency are revalued at month-end at the SBV central rate." },
      { question: "What is a managed-account service?", answer: "A managed-account service is the engagement model where the accounting firm takes responsibility for the full bookkeeping function: processing transactions, reconciling bank accounts, managing AP/AR, producing monthly management accounts, and filing VAT and CIT returns. The fee is fixed monthly, scoped to transaction volume and reporting needs." },
      { question: "How are inter-company transactions recorded?", answer: "Inter-company transactions are recorded at the same value as the related party, supported by an inter-company agreement. Mark-ups (e.g. on management fees or services) must be arm's length and supported by transfer-pricing documentation. Monthly inter-company reconciliation is standard for groups." },
      { question: "What is a clean-up engagement?", answer: "A clean-up engagement is a project to reconcile and restate prior-year books that are out of date, incorrect, or have not been finalised. Common triggers include acquisition due diligence, switching advisors, or preparing for an audit. The engagement scope covers re-issuance of financial statements, restatement of tax filings, and a closing-position reconciliation." },
      { question: "What is the typical cost of monthly bookkeeping for an FDI company?", answer: "Monthly bookkeeping fees start at USD 250/month for representative offices and scale with transaction volume, complexity, and reporting requirements. A typical FDI entity (10–30 employees, 200–500 monthly transactions, dual-currency reporting) pays USD 600–1,500 per month. Standalone year-end statements are USD 1,200–3,500." },
      { question: "How is the year-end close different from monthly close?", answer: "The year-end close includes additional steps: accruals and prepayments adjustments, year-end inventory counts, fixed-asset depreciation, statutory-tax provisioning, related-party balance confirmations, and audit-tie-out. Year-end close is tied to the statutory audit (typically February–March for calendar-year companies) and the CIT finalisation return (deadline 31 March)." },
    ],
  },
  {
    slug: "company-formation",
    name: "Company Formation & Setup",
    description:
      "Foreign company setup, capital, timelines, documents, post-licence registrations, and common pitfalls.",
    faqs: [
      { question: "How long does it take to set up a 100% foreign-owned company in Vietnam?", answer: "Standard timeline: 4–8 weeks from first engagement to issuance of the Enterprise Registration Certificate (ERC). Pre-engagement with the Department of Planning and Investment (DPI) typically takes 1–2 weeks. Documents for the Investment Registration Certificate (IRC) are then submitted, followed by ERC application. Post-licence registrations (tax, social insurance, bank account, seal) add another 2–4 weeks." },
      { question: "What is the minimum capital for a foreign-owned company?", answer: "There is no universal statutory minimum, but the IRC approval typically requires a capital amount consistent with the project. Practical floors: USD 10,000–20,000 for a trading/services LLC; USD 50,000–100,000 for light manufacturing; USD 200,000+ for heavy manufacturing or real estate. The SBV scrutinises capital contributions against the investment project's stated scope." },
      { question: "What documents are required for foreign company setup?", answer: "Commonly required: parent-company certificate of incorporation (apostilled and translated), parent-company charter and audited financials, passport copies of the legal representative, the investment project proposal (scope, capital, location, headcount, revenue), the company's draft charter, a proof of address for the planned office, and a clean police check for the legal representative." },
      { question: "Can a foreign company own 100% of a Vietnamese company?", answer: "Yes, in most sectors Vietnam permits 100% foreign ownership. Conditional sectors (e.g. telecommunications, certain logistics, advertising, certain media) have foreign-ownership caps or require a Vietnamese partner. WTO commitments and bilateral investment treaties determine the applicable ceiling; the World Bank's Investing Across Sectors database is a useful reference." },
      { question: "What is the difference between a 100% WFOE and a joint venture?", answer: "A WFOE (Wholly Foreign-Owned Enterprise) is owned entirely by the foreign investor. A joint venture is co-owned with a Vietnamese partner. The choice depends on sector restrictions, the local-partner's value (regulatory access, distribution, relationships), and strategic considerations. A joint venture adds complexity but may be required for market access." },
      { question: "What is the role of the legal representative?", answer: "The legal representative is the individual authorised to bind the company in contracts and represent it before authorities. The legal representative's name is on the ERC. They must be an individual (resident or non-resident) and may be a foreigner. Most FDI companies appoint a resident director for operational reasons and a non-resident director for strategic oversight." },
      { question: "What is a registered office address?", answer: "A registered office address is required for service of process, official correspondence, and certain filings. The address must be a physical location in Vietnam (not a P.O. box). Most FDI companies rent serviced office space initially, then transition to a dedicated office once headcount warrants the cost." },
      { question: "How is share capital paid in?", answer: "Share capital is paid into the company's bank account within 90 days of ERC issuance (or as agreed with the DPI in the IRC). Capital contributions in foreign currency are converted to VND at the bank's rate; the receipt is the basis for the SBV capital-account registration. Failure to contribute on time triggers penalties and may invalidate the ERC." },
      { question: "What are the post-licence registrations required?", answer: "Post-licence registrations include: tax registration (automatic with the ERC, but a tax-registration certificate is issued separately); social-insurance registration; trade registration (if applicable); seal registration; bank account opening (current account and capital account with the SBV); and licences for regulated activities (e.g. import-export, food safety, telecommunications)." },
      { question: "How much does foreign company setup cost?", answer: "Government fees are typically VND 3–10 million (USD 150–400). Professional fees (legal, tax, secretarial, translation, apostille) range from USD 5,000 to USD 25,000 depending on the sector, complexity, and required sub-licences. Translation and apostille of foreign documents add USD 1,000–3,000." },
      { question: "What is a conditional sector?", answer: "A conditional sector is one where foreign investment is subject to additional approvals, sub-licences, or ownership caps. Examples include: telecommunications, certain financial services, certain logistics, certain media, natural resources, real estate, education. The list is updated periodically and is published in the Law on Investment and its implementing regulations." },
      { question: "What is the role of the DPI?", answer: "The Department of Planning and Investment (DPI) is the provincial authority that issues IRCs and ERCs. The DPI reviews the investment project proposal, conducts market-entry assessment, and verifies the legal status of the foreign investor. Pre-engagement with the DPI is strongly recommended for FDI projects in encouraged sectors." },
      { question: "How do you change the legal representative after setup?", answer: "Changing the legal representative requires a board resolution, an amendment to the company's charter, and an ERC amendment notification to the DPI. The new legal representative's information is filed with the DPI; the change becomes effective on registration. The tax authority, social-insurance authority, and bank must be notified separately." },
      { question: "What is an investment project proposal?", answer: "An investment project proposal is a document required for IRC issuance that describes the project: scope of business, total investment capital, implementation timeline, location, headcount, technology, expected revenue, and environmental/social impact. The proposal is reviewed by the DPI and forms the basis of the IRC." },
      { question: "Can a foreign company operate without an ERC?", answer: "No. Operating without an ERC triggers severe penalties including fines, forced closure, and personal liability for the directors. Foreign companies that intend to operate in Vietnam must obtain both an IRC and an ERC before commencing operations. Limited pre-operations activities (e.g. recruiting, market research, lease negotiation) are typically permitted." },
    ],
  },
  {
    slug: "irc-erc-licensing",
    name: "IRC, ERC & Sub-licensing",
    description:
      "Investment Registration Certificate, Enterprise Registration Certificate, sector sub-licences, and post-licence amendments.",
    faqs: [
      { question: "What is an IRC?", answer: "An Investment Registration Certificate (IRC) is the document issued by the Department of Planning and Investment (DPI) that authorises a foreign investment project. It records the project name, scope, capital, location, headcount, and investor. The IRC is a prerequisite for the ERC." },
      { question: "What is an ERC?", answer: "An Enterprise Registration Certificate (ERC) is the document issued by the DPI that establishes a legal entity. It records the company name, charter, registered address, legal representative, members/shareholders, and charter capital. The ERC is the legal-identity document for the company." },
      { question: "Can the IRC and ERC be obtained in parallel?", answer: "No. The ERC requires the IRC to be issued first. The two are sequential: IRC issuance, then ERC. The process can be expedited with competent local counsel and pre-engagement with the DPI." },
      { question: "How long is the IRC valid?", answer: "The IRC is valid for the duration of the project, typically tied to the land-use term or the licence period. It is not a time-limited certificate in the same way as a work permit, but it can be amended or revoked for cause (e.g. material change in scope, prolonged inactivity, breach of conditions)." },
      { question: "How is the IRC amended?", answer: "An IRC amendment is required for material changes: change in scope of business, change in capital (above a threshold), change in location, change in legal representative. The amendment is filed with the DPI; supporting documents include the amended investment project proposal and a board resolution." },
      { question: "What is the difference between the IRC and an Investment Policy Decision?", answer: "An Investment Policy Decision (IPD) is required for large-scale projects (e.g. those above a capital threshold, in certain sectors, or with land allocation). The IPD is issued at the National Assembly, Prime Minister, or provincial level depending on scale. The IRC follows the IPD for projects that require one." },
      { question: "What sub-licences are typically required?", answer: "Sub-licences depend on the sector: import-export (trade registration), food production (food-safety certificate), construction (construction permit, fire-safety permit), telecommunications (telecom licence), banking (Banking licence from the State Bank), education (education permit), manufacturing (environmental permit, fire-safety permit, product-specific certifications). Each sub-licence has its own timeline and fees." },
      { question: "What is an environmental permit?", answer: "An environmental permit is required for manufacturing projects and certain services with environmental impact. The permit is issued by the Department of Natural Resources and Environment after an environmental impact assessment (EIA). The EIA scope depends on project scale and sector; it can take 3–6 months to prepare and approve." },
      { question: "What is the difference between a sub-licence and a conditional business line?", answer: "A sub-licence is a separate regulatory approval required for a specific activity (e.g. fire safety, food safety, telecom). A conditional business line is one that requires the company to meet certain conditions before operating in that line. Sub-licences are typically sector-specific and may be issued by a different authority than the DPI." },
      { question: "What is the cost of an IRC amendment?", answer: "Government fees are typically VND 1–5 million. Professional fees depend on the complexity of the amendment: a simple capital increase is USD 500–1,500; a change of scope or location is USD 2,000–5,000; a material amendment requiring re-engagement with the DPI is USD 5,000–10,000." },
      { question: "What is a branch operations licence?", answer: "A branch operations licence is the document issued by the DPI for a foreign branch office. It records the branch's activities, head of branch, and operating term. The branch operates under the parent company's licence, with the parent liable for the branch's obligations in Vietnam." },
      { question: "How is the IRC transferred?", answer: "An IRC can be transferred to a new investor with the approval of the DPI. The transfer requires: a sale-and-purchase agreement, the new investor's due-diligence documents, the existing investor's no-objection, and the DPI's approval. Transfer taxes and stamp duties may apply." },
    ],
  },
  {
    slug: "representative-office",
    name: "Representative Office",
    description:
      "Rep-office scope, restrictions, head-of-rep appointment, work permits, and conversion to a subsidiary.",
    faqs: [
      { question: "What is a representative office?", answer: "A representative office is a foreign company's presence in Vietnam that is limited to non-commercial activities. It cannot generate revenue, sign contracts, or engage in trading. Common activities include market research, liaison with local partners, and promoting the parent's business." },
      { question: "What activities can a rep office conduct?", answer: "A representative office may conduct: market research and analysis, liaison with local partners, monitoring the parent's investments, promoting the parent's business, supporting the parent's commercial activities (without binding the parent). It cannot sell, sign contracts, generate revenue, or provide paid services in Vietnam." },
      { question: "How is a rep office set up?", answer: "A representative office requires an IRC from the DPI (or the Ministry of Planning and Investment for certain sectors). Documents include the parent's certificate of incorporation, the parent's audited financial statements (typically the last 2 years), a chief-representative appointment, and the parent's charter." },
      { question: "How is a rep office taxed?", answer: "A representative office is not subject to CIT or VAT because it has no Vietnam-source revenue. Operating expenses (rent, salaries, utilities) are paid by the parent. The office must register with the tax authority and file a non-business declaration confirming nil activity. The chief representative and staff are subject to PIT on their Vietnamese salary." },
      { question: "Can a rep office hire local staff?", answer: "Yes. A rep office can hire local staff under local labour contracts. The chief representative must be a foreign national with a work permit (or work-permit exemption). The local staff are subject to the same payroll, SI, and PIT rules as any other local employee." },
      { question: "What is the chief representative's role?", answer: "The chief representative is the head of the rep office. The chief representative holds a work permit (or exemption), is named on the IRC, and is the office's point of contact with the authorities. The chief representative is typically the parent company's senior in-country representative." },
      { question: "Can a rep office be converted to a subsidiary?", answer: "Yes. The conversion involves setting up a subsidiary (IRC + ERC) and winding up the rep office. The subsidiary can take over the rep office's staff and assets. Conversion is typically driven by commercial intent (the parent wants to sell or operate in Vietnam)." },
      { question: "How long does rep office setup take?", answer: "Standard timeline: 6–10 weeks from document preparation to IRC issuance, plus 1–2 weeks for tax registration and bank account. Documents issued abroad (apostilled and translated) often extend the timeline. Pre-engagement with the DPI is recommended." },
      { question: "What is the cost of a rep office?", answer: "Government fees are typically VND 1–3 million. Professional fees (legal, tax, secretarial, translation, apostille) range from USD 3,000 to USD 8,000. Annual operating costs (rent, salaries, accounting) start at USD 30,000–50,000 per year." },
      { question: "What are the risks of operating a rep office?", answer: "Common risks: (1) operating beyond permitted scope (commercial activity), which triggers fines and forced closure; (2) failure to file annual declarations with the DPI, which can result in licence revocation; (3) tax non-compliance on staff payroll. We conduct an annual compliance review for rep-office clients." },
    ],
  },
  {
    slug: "branch-office",
    name: "Branch Office",
    description:
      "Foreign branch scope, parent liability, restricted sectors, accounting and CIT obligations, and conversion options.",
    faqs: [
      { question: "Can a foreign company open a branch in Vietnam?", answer: "Yes, in permitted sectors. Branches are extensions of the foreign parent, not separate legal entities, and the parent is directly liable for the branch's obligations. The branch is established by registering with the DPI under the foreign-branch rules." },
      { question: "What is the difference between a branch and a subsidiary?", answer: "A branch is an extension of the parent. A subsidiary is a separate Vietnamese legal entity with limited liability. Branches are restricted in the activities they can undertake and are not available in all sectors. Most foreign investors prefer a subsidiary structure for liability protection." },
      { question: "How is a branch office taxed?", answer: "A branch is taxed as a foreign entity on Vietnam-source income at 20% CIT. It is required to withhold FCT on payments to foreign suppliers, register for SI/PIT for staff, and file a CIT return as a permanent establishment. The branch is also subject to branch profit remittance tax considerations." },
      { question: "What are the restrictions on a branch office?", answer: "Branches cannot undertake activities reserved for Vietnamese-licensed entities (e.g. certain financial services, real-estate brokerage, certain construction activities). They are also restricted in their ability to bid on public procurement and to hold title to land. Some sectors explicitly prohibit foreign branches." },
      { question: "How is the branch profit remitted?", answer: "Branch profits can be remitted to the parent after CIT payment. The remittance is processed by the bank with SBV notification. Vietnam does not impose withholding tax on branch profit remittance (under domestic law), but the parent's home country may tax the remittance as a dividend." },
      { question: "What accounting standards apply to a branch?", answer: "A branch must maintain books under VAS, prepare annual financial statements, and have them audited by a Vietnamese-licensed audit firm. The branch may also be required to reconcile to the parent's home-country GAAP (IFRS, US GAAP, etc.) for group reporting." },
      { question: "Can a branch hire foreign staff?", answer: "Yes. The branch's foreign staff require work permits (or exemption certificates). The branch's head (chief representative) is typically a foreigner on a work permit. Local staff are hired under local labour contracts." },
      { question: "What is the cost of branch setup?", answer: "Government fees are typically VND 3–10 million. Professional fees range from USD 5,000 to USD 15,000 depending on sector and complexity. Annual operating costs include rent, salaries, accounting, audit, and statutory filings. The branch's tax compliance is more onerous than a rep office but comparable to a subsidiary." },
      { question: "How long does branch setup take?", answer: "Standard timeline: 8–14 weeks from document preparation to licence issuance. The branch licence is issued by the DPI for permitted sectors. Documents issued abroad (apostilled and translated) often extend the timeline." },
      { question: "Can a branch be converted to a subsidiary?", answer: "Yes. The conversion involves setting up a subsidiary (IRC + ERC), transferring the branch's assets and contracts to the subsidiary, and winding up the branch. Conversion may be triggered by liability considerations, commercial expansion, or home-country tax planning." },
    ],
  },
  {
    slug: "expatriate-tax",
    name: "Expatriate Tax in Vietnam",
    description:
      "Tax residency, PIT rates, tax equalisation, hypo-tax calculations, treaty relief, and the 183-day rule.",
    faqs: [
      { question: "When does an expatriate become a Vietnam tax resident?", answer: "An individual becomes a Vietnam tax resident if present for 183 days or more in a calendar year (or any 12-month period from arrival), or has a permanent residence in Vietnam, or has a registered rental of 90+ days with no intention to leave. Residents are taxed on worldwide income; non-residents are taxed only on Vietnam-source income." },
      { question: "How is expatriate PIT calculated?", answer: "Expatriate PIT follows the same progressive rates as residents: 5% (0–5m VND), 10% (5–10m), 15% (10–18m), 20% (18–32m), 25% (32–52m), 30% (52–80m), 35% (80m+). Employment income is taxed on a monthly basis with the employer withholding. Year-end PIT finalisation reconciles actual liability to monthly withholding." },
      { question: "What is tax equalisation?", answer: "Tax equalisation is a policy under which the employer ensures the expatriate is in the same after-tax position as if they had remained in their home country. The employer pays the higher of home-country tax or Vietnam tax, and the expatriate's net income is set at the home-country equivalent. The hypo-tax calculation models both regimes and produces the gross-up." },
      { question: "What is the hypo-tax register?", answer: "The hypo-tax register is the monthly schedule of hypothetical tax calculations for each expatriate. It records the actual home-country tax (or estimated), the actual Vietnam tax, the equalised net income, and the employer's gross-up. The register is reconciled quarterly and used for year-end PIT finalisation." },
      { question: "Are expatriate benefits taxable?", answer: "Most expatriate benefits are taxable in Vietnam: housing allowance, school fees, transportation, home-leave flights, tax-equalisation payments, and cost-of-living adjustments. Some benefits have specific rules: school fees paid directly to the school may be exempt under certain conditions; housing is taxable at the rent paid or a deemed value." },
      { question: "What is the tax-treaty exemption for short-term assignees?", answer: "Under most Vietnam DTAs, an individual present in Vietnam for less than 183 days in a 12-month period and paid by an offshore employer (not paid through a Vietnamese PE) may be exempt from Vietnam PIT on employment income. The exemption requires the foreign employer to obtain a Certificate of Residence and submit it to the Vietnamese payer." },
      { question: "How is stock-based compensation taxed?", answer: "ESOPs and RSUs granted to expatriates working in Vietnam are taxable at vesting (ESOP) or receipt (RSU). The taxable amount is the fair market value at vesting/receipt less any exercise price paid. The company must withhold PIT at vesting/receipt and declare monthly." },
      { question: "How are expatriate loans taxed?", answer: "Low-interest or interest-free loans from the employer to the expatriate are a taxable benefit, calculated as the difference between market interest and actual interest. The benefit is included in monthly PIT. The calculation method is set out in the CIT Law and Circular 111/2013." },
      { question: "Can an expatriate claim foreign tax credits?", answer: "Vietnam does not have a foreign-tax-credit regime. Tax paid in the home country is not creditable against Vietnam PIT, except where the home country grants a credit for Vietnam tax (as under the US foreign tax credit rules). This is why tax-equalisation policies are common for US and Canadian assignees." },
      { question: "What happens when an expatriate leaves Vietnam?", answer: "The expatriate must complete PIT finalisation before departure. The employer reconciles monthly withholding to actual liability, files the year-end finalisation, and obtains a tax-clearance certificate from the tax authority. Failure to finalise can block the issuance of a TRC and create personal tax liability." },
    ],
  },
  {
    slug: "saas-tech-industry",
    name: "SaaS & Tech Industry Tax",
    description:
      "SaaS revenue sourcing, digital-service FCT, IP structuring, R&D incentives, and ESOP taxation for tech companies.",
    faqs: [
      { question: "How is SaaS revenue taxed in Vietnam?", answer: "Subscription revenue from Vietnamese customers is Vietnam-source income and is subject to 20% CIT (for a Vietnamese subsidiary). If the SaaS is sold by an offshore entity to Vietnamese customers, the deemed FCT (5% VAT + 5% PIT) applies. We help structure the operation to optimise the total tax cost." },
      { question: "What is the typical setup for a SaaS company in Vietnam?", answer: "Most SaaS companies set up a 100%-foreign-owned LLC with a sales and marketing presence. The Vietnamese entity is typically a limited-risk distributor: it books Vietnam-sourced subscription revenue and pays a royalty to the offshore IP holder under FCT." },
      { question: "How is the FCT on SaaS calculated?", answer: "For deemed FCT, VAT is 5% of revenue (or deemed revenue) and PIT is 5% (or a deemed rate). For direct filing, the SaaS provider registers as a direct filer with a Vietnamese permanent establishment and pays CIT 20% on actual profit and VAT 10% on revenue, which is typically more favourable for profitable operations." },
      { question: "What expenses are deductible for a SaaS company?", answer: "Marketing, sales staff, cloud infrastructure (where the customer is in Vietnam), office rent, and a portion of regional overhead allocated to Vietnam are deductible. Cost-sharing agreements must be arm's length and supported by transfer-pricing documentation." },
      { question: "How are R&D credits treated in Vietnam?", answer: "Vietnam does not have an R&D tax credit like the US R&D credit. However, certain R&D activities in encouraged sectors may qualify for CIT incentives (10% rate, tax holiday). The eligibility must be confirmed at IRC application." },
      { question: "What is the ESOP tax treatment for tech startups?", answer: "ESOPs are taxed at vesting. The taxable amount is the fair market value at vesting less any exercise price paid. The company must withhold PIT at vesting and declare monthly. Cash settlement is taxed at receipt." },
      { question: "What grants and incentives are available for tech startups?", answer: "Vietnam offers support for tech startups via the National Technology Innovation Fund, the High-Tech Park incentive scheme, and various provincial-level programs. Eligibility and timing vary; we help identify and apply for the relevant programs." },
      { question: "How is IP held in a SaaS structure?", answer: "IP is typically held offshore (Singapore, US, Ireland) and licensed to the Vietnamese entity. The Vietnamese entity pays a royalty (5–10% of revenue is typical for arm's-length). The royalty is subject to FCT (or treaty-rate withholding if a tax treaty applies)." },
      { question: "What is the typical royalty rate for SaaS in Vietnam?", answer: "Arm's-length royalty rates for SaaS typically range from 5% to 15% of revenue, depending on the contribution of the offshore IP holder, the market, and the comparables. Rates above 15% are typically challenged by the GDT as non-arm's-length." },
      { question: "How is a tech startup's investor diligence handled?", answer: "Investor diligence focuses on entity structure, IP ownership, ESOP documentation, customer contracts, and tax compliance. We prepare a tax due-diligence pack and respond to investor queries. The pack covers the last 3–5 years and includes CIT/VAT/PIT returns, transfer-pricing documentation, and any GDT correspondence." },
    ],
  },
  {
    slug: "manufacturing-industry",
    name: "Manufacturing Industry Tax",
    description:
      "Manufacturer tax structure, import-duty incentives, environmental permits, transfer pricing for contract manufacturers, and free-trade zones.",
    faqs: [
      { question: "What licences are needed for a manufacturing company?", answer: "Manufacturing FDI typically requires: IRC, ERC, environmental permit, construction permit, fire-safety permit, and product-specific sub-licences. The timeline is 6–12 months for a greenfield project. Brownfield acquisitions are faster (2–3 months) but require environmental and operational due diligence." },
      { question: "How is the manufacturing corporate tax rate determined?", answer: "Standard 20% applies. Incentives depend on the sector and location: 10% for high-tech projects, 15% for projects in encouraged zones, and 17% for certain supporting industries. Tax holidays of 2–6 years may apply to new projects. The incentives must be registered at the IRC application." },
      { question: "What are the import-duty considerations for manufacturers?", answer: "Manufacturers can defer import duty on raw materials and components used in production. Export products may be zero-rated for export duty. Free-trade zones and export-processing zones offer additional benefits. We help structure the customs declarations." },
      { question: "How is transfer pricing handled for a manufacturing subsidiary?", answer: "Manufacturers typically operate as contract manufacturers or limited-risk manufacturers with arm's-length mark-ups (often 5–7% on cost). The TP documentation, benchmarking study, and inter-company agreement are essential to support the pricing. We prepare the Local File and assist with TP audit defence." },
      { question: "What is a free-trade zone?", answer: "A free-trade zone (FTZ) is a designated area where goods can be traded, stored, and processed with simplified customs and tax treatment. FTZs offer VAT exemptions on certain transactions, deferred import duty, and CIT incentives for some activities. Examples include the Tan Thuan EPZ in HCMC and various provincial FTZs." },
      { question: "What is an environmental permit?", answer: "An environmental permit is required for manufacturing projects with environmental impact. The permit is issued by the Department of Natural Resources and Environment after an environmental impact assessment (EIA). The EIA scope depends on project scale and sector." },
      { question: "How is customs duty calculated?", answer: "Customs duty is calculated as a percentage of the customs value (typically CIF price plus certain adjustments). Duty rates vary by HS code; some products enjoy preferential rates under FTAs (e.g. EVFTA, CPTPP, RCEP). We help classify products and apply for preferential rates." },
      { question: "What is an export-processing enterprise (EPE)?", answer: "An EPE is a special entity that operates in an export-processing zone. EPEs enjoy tax incentives (e.g. CIT exemption for certain periods), simplified customs, and free repatriation of profits. The investment is registered through the EPE-specific process with the DPI." },
      { question: "How are manufacturing losses treated?", answer: "Manufacturing losses can be carried forward for up to 5 consecutive years and offset against future taxable profit. Carryback is not permitted. Losses transferred in a merger or consolidation generally follow the surviving entity, subject to specific conditions." },
      { question: "What is the role of the customs broker?", answer: "A customs broker handles customs declarations, HS classification, and duty payment on behalf of the importer. For manufacturers with high import volumes, a competent customs broker is essential. We coordinate with customs brokers on tax-efficient import strategies." },
    ],
  },
  {
    slug: "ecommerce-industry",
    name: "E-commerce & Digital Platforms",
    description:
      "Marketplace tax, foreign e-commerce supplier obligations, withholding on individual sellers, and digital-service FCT.",
    faqs: [
      { question: "How is e-commerce taxed in Vietnam?", answer: "Domestic e-commerce is taxed at 20% CIT and 10% VAT (with reductions for certain categories). Foreign e-commerce suppliers without a PE must register for VAT via the GDT portal and pay quarterly FCT. Platforms must withhold tax on individual sellers." },
      { question: "What is the tax treatment of marketplace income?", answer: "Marketplace income (commission, listing fees, advertising) is VAT-taxable and subject to CIT. Cross-border services consumed in Vietnam are subject to FCT. We help platforms structure the operation and the withholding regime." },
      { question: "What is the role of a tax representative for foreign e-commerce?", answer: "A tax representative is a Vietnamese-resident entity appointed by a foreign e-commerce supplier to handle VAT registration, declaration, and payment. The representative is jointly liable for the supplier's compliance. We act as tax representative for several foreign platforms." },
      { question: "What are the bookkeeping obligations for an e-commerce seller?", answer: "An e-commerce seller is required to maintain the same books as any other entity: cash book, general ledger, sub-ledgers, tax registers, and statutory financial statements. E-commerce-specific records include platform reports, transaction logs, and reconciliation to bank receipts." },
      { question: "How is digital advertising taxed in Vietnam?", answer: "Digital advertising by a foreign provider to Vietnamese customers is subject to FCT (5% VAT + 5% deemed PIT). The Vietnamese customer is the withholding agent. Direct filing is available for foreign providers with a Vietnamese PE." },
      { question: "How are platform sellers taxed?", answer: "Platform sellers (individuals) are subject to PIT on platform income. The platform is required to withhold PIT at the rate set by the GDT (typically 1.5%–2% for goods, 3%–5% for services) and remit to the tax authority. The seller may file a year-end PIT return to reconcile." },
      { question: "What is the digital-service FCT?", answer: "Digital-service FCT applies to foreign providers of digital services to Vietnamese consumers without a PE. The deemed FCT is 5% VAT + 5% PIT. The provider registers via the GDT e-portal, declares quarterly, and pays FCT. Direct filing is available for providers willing to establish a PE." },
      { question: "How is customer data treated under Vietnamese law?", answer: "Customer data is subject to Vietnam's Personal Data Protection Act (effective 1 July 2023). E-commerce platforms must register data processing, obtain consent for data collection, and implement security measures. Cross-border data transfer requires notification to the Ministry of Public Security." },
    ],
  },
  {
    slug: "country-singapore",
    name: "Singapore Companies in Vietnam",
    description:
      "Singapore-Vietnam tax treaty, regional HQ setup, IRAS Certificate of Residence, and typical engagement models.",
    faqs: [
      { question: "What is the typical Vietnam setup for a Singapore company?", answer: "Singapore-headquartered companies typically set up a 100%-foreign-owned LLC in Vietnam with a sales/marketing presence. The Vietnam entity may be a subsidiary of the Singapore parent or a regional subsidiary. The choice depends on tax-treaty and group-reporting considerations." },
      { question: "How is the Singapore-Vietnam tax treaty applied?", answer: "The Singapore-Vietnam DTA reduces withholding tax on dividends to 0% (in many cases), on interest to 10%, and on royalties to 5–10%. To claim treaty benefits, the Singapore parent must obtain a Certificate of Residence from IRAS and submit it to the Vietnamese payer." },
      { question: "What is the typical engagement model for a Singapore client?", answer: "Singapore clients typically have a parent-coordinator model: the Singapore head office engages us, and we liaise with the local entity. Monthly reporting is in English, with quarterly consolidation to the Singapore parent's reporting calendar." },
      { question: "What reporting package does a Singapore parent expect?", answer: "Singapore parents typically expect: monthly management accounts (in SGD or USD), quarterly statutory financials, the annual audit package, the TP documentation, and a quarterly compliance update. The reporting calendar is set to the Singapore fiscal year." },
      { question: "How are dividends repatriated from Vietnam to Singapore?", answer: "After-tax profits can be distributed as dividends. There is no Vietnamese withholding tax on dividends paid to a Singapore corporate parent (under the DTA). The remittance is processed by the bank with SBV notification and Certificate of Residence from IRAS." },
      { question: "What is the typical capital for a Singapore subsidiary in Vietnam?", answer: "There is no statutory minimum, but the IRC approval typically requires a capital amount consistent with the project. Practical floors: USD 10,000–20,000 for a trading/services LLC; USD 50,000–100,000 for light manufacturing. Singapore parents often capitalise the Vietnam entity through inter-company loans." },
      { question: "How is the Singapore parent's auditor coordinated?", answer: "We liaise with the Singapore parent's auditor to provide Vietnam financials, working papers, and confirmations. For Big-4 group audits, we typically receive a clearance memorandum and respond to specific queries. We coordinate the timing with the parent's audit cycle." },
      { question: "What is the typical timeline for a Singapore-Vietnam setup?", answer: "Standard timeline: 4–8 weeks for the IRC + ERC, plus 2–4 weeks for post-licence registrations. Documents issued by the Singapore parent (ACRA filing, board resolution) are typically available quickly. Apostille is required for some documents." },
    ],
  },
  {
    slug: "country-japan",
    name: "Japanese Companies in Vietnam",
    description:
      "Japan-Vietnam tax treaty, J-SOX, manufacturing setup, and Japanese-language reporting requirements.",
    faqs: [
      { question: "What is the typical Vietnam setup for a Japanese company?", answer: "Japanese companies typically set up a 100%-foreign-owned sales subsidiary or manufacturing entity. The subsidiary is owned directly by the Japan parent or via a regional holding company (typically Singapore or Hong Kong). The Japan parent typically uses Vietnam as a manufacturing hub." },
      { question: "How is the Japan-Vietnam tax treaty applied?", answer: "The Japan-Vietnam DTA reduces withholding tax on dividends to 0% (where the parent holds 50%+ for 6 months and is a company), on interest to 10%, and on royalties to 10%. The Japan parent must obtain a Certificate of Residence from the NTA and submit it for treaty claims." },
      { question: "What is the typical engagement model for a Japanese client?", answer: "Japanese clients expect bilingual reporting (English/Japanese), J-SOX or Japanese-style internal controls, and reporting that reconciles to the Japan parent's calendar. We provide monthly management accounts, quarterly compliance, and the annual audit liaison." },
      { question: "What is the typical JPY reporting framework?", answer: "Japanese parents often want reporting in JPY. We maintain a JPY-functional ledger for management reporting. FX gains/losses are reconciled to the parent's reporting currency. The TP documentation follows Japanese transfer-pricing guidance." },
      { question: "How are J-SOX requirements handled for the Vietnam entity?", answer: "We assist the Japan parent with J-SOX documentation for the Vietnam entity: process narratives, risk-control matrices, testing of key controls, and remediation of deficiencies. The work is coordinated with the parent's J-SOX team and external auditor." },
      { question: "What is the typical inter-company arrangement?", answer: "Japanese manufacturers typically operate as contract manufacturers with arm's-length mark-ups (5–7% on cost). The TP documentation, benchmarking study, and inter-company agreement are essential. We prepare the Local File and assist with TP audit defence." },
      { question: "How are Japanese expatriate staff handled?", answer: "Japanese expatriate staff require work permits. We assist with the application, the tax equalisation calculation, the hypo-tax register, and the year-end PIT finalisation. We coordinate with the Japan parent's HR and payroll for split-payroll arrangements." },
      { question: "What is the typical manufacturing setup timeline?", answer: "Manufacturing setup takes 6–12 months for a greenfield project. The IRC + ERC takes 4–8 weeks, environmental and construction permits take 3–6 months, and equipment installation takes 2–4 months. Brownfield acquisitions are faster (2–3 months)." },
    ],
  },
  {
    slug: "country-korea",
    name: "Korean Companies in Vietnam",
    description:
      "Korea-Vietnam tax treaty, manufacturing setup, K-IFRS reconciliation, and Korean-style internal controls.",
    faqs: [
      { question: "What is the typical Vietnam setup for a Korean company?", answer: "Korean companies typically set up a 100%-foreign-owned sales subsidiary or manufacturing entity. The subsidiary is owned directly by the Korea parent or via a regional holding company. The Korea parent typically uses Vietnam as a manufacturing hub." },
      { question: "How is the Korea-Vietnam tax treaty applied?", answer: "The Korea-Vietnam DTA reduces withholding tax on dividends to 0% (where the parent holds 50%+ for 6 months and is a company), on interest to 10%, and on royalties to 5–10%. The Korea parent must obtain a Certificate of Residence from the NTS and submit it for treaty claims." },
      { question: "What is the typical engagement model for a Korean client?", answer: "Korean clients expect bilingual reporting (English/Korean), Korean-style internal controls, and reporting that reconciles to the Korea parent's calendar. We provide monthly management accounts, quarterly compliance, and the annual audit liaison." },
      { question: "What is the typical KRW reporting framework?", answer: "Korean parents often want reporting in KRW. We maintain a KRW-functional ledger for management reporting. FX gains/losses are reconciled to the parent's reporting currency. The TP documentation follows Korean transfer-pricing guidance." },
      { question: "How are Korean expatriate staff handled?", answer: "Korean expatriate staff require work permits. We assist with the application, the tax equalisation calculation, the hypo-tax register, and the year-end PIT finalisation. We coordinate with the Korea parent's HR and payroll for split-payroll arrangements." },
      { question: "What is the typical manufacturing setup timeline?", answer: "Manufacturing setup takes 6–12 months for a greenfield project. The IRC + ERC takes 4–8 weeks, environmental and construction permits take 3–6 months, and equipment installation takes 2–4 months. Brownfield acquisitions are faster (2–3 months)." },
      { question: "How is the Korean parent's auditor coordinated?", answer: "We liaise with the Korean parent's auditor (often Big-4) to provide Vietnam financials, working papers, and confirmations. The coordination timing is set to the Korea parent's fiscal year (calendar year for most Korean parents)." },
    ],
  },
  {
    slug: "country-australia",
    name: "Australian Companies in Vietnam",
    description:
      "Australia-Vietnam tax treaty, ATO compliance, AUD reporting, and BEPS Pillar 2 considerations.",
    faqs: [
      { question: "What is the typical Vietnam setup for an Australian company?", answer: "Australian companies typically set up a sales/marketing subsidiary or a regional operations centre in Vietnam. The subsidiary is 100%-foreign-owned. The Australian parent typically uses Vietnam as a low-cost engineering or operations hub." },
      { question: "How is the Australia-Vietnam tax treaty applied?", answer: "The Australia-Vietnam DTA reduces withholding tax on dividends to 0% (where the parent holds a qualifying stake and is a company), on interest to 10%, and on royalties to 10%. The Australian parent must obtain a Certificate of Residence from the ATO and submit it for treaty claims." },
      { question: "What is the typical engagement model for an Australian client?", answer: "Australian clients expect English-first communication, ATO-compliant transfer pricing documentation, and reporting that reconciles to the Australian group's calendar. We provide monthly management accounts, quarterly compliance, and the annual audit liaison." },
      { question: "What is the typical AUD/USD reporting framework?", answer: "Australian parents typically want reporting in AUD. We maintain an AUD-functional ledger for management reporting, with the VND functional ledger for statutory. FX gains/losses are reconciled to the parent's reporting currency." },
      { question: "How is BEPS Pillar 2 handled for Australian parents?", answer: "Australian parents are subject to the Global Anti-Base Erosion (GloBE) rules under Pillar 2. We assist with the calculation of the Vietnam entity's GloBE income, covered taxes, and effective tax rate. The work is coordinated with the parent's Pillar 2 team." },
      { question: "What is the typical Australian engagement pricing?", answer: "Monthly retainers start at USD 1,500–3,000 for a sales subsidiary and USD 3,000–6,000 for a manufacturing subsidiary. Annual compliance projects (TP documentation, Pillar 2) are quoted separately. Fixed-fee engagements are the norm." },
    ],
  },
  {
    slug: "country-usa-uk",
    name: "USA & UK Companies in Vietnam",
    description:
      "US/UK-Vietnam setup, FCPA, SOX, FRS 102/IFRS reconciliation, and inter-company documentation.",
    faqs: [
      { question: "What is the typical Vietnam setup for a US company?", answer: "US companies typically set up a sales subsidiary or a regional engineering centre. The subsidiary is 100%-foreign-owned. US companies often have a regional CFO overseeing multiple Asian entities, and the Vietnam entity reports into that structure." },
      { question: "How is the US-Vietnam tax treaty applied?", answer: "Vietnam and the US do not have a comprehensive tax treaty. The standard Vietnamese rates apply: 0% withholding on dividends to a US corporate parent (under Vietnamese domestic law), 5% FCT on royalties, 10% on interest. The absence of a treaty makes structure and substance critical." },
      { question: "How is FCPA and anti-bribery compliance handled in Vietnam?", answer: "Vietnam has anti-bribery laws and accounting-record-keeping requirements that align broadly with FCPA expectations. We help clients maintain adequate books and records, document third-party engagements, and provide training." },
      { question: "What reporting does a US parent expect for SOX compliance?", answer: "US parents subject to SOX expect: documented internal controls, audit-trail evidence, segregation-of-duties review, IT general controls review, and management certifications. We provide the working papers and controls evidence to support the parent's SOX audit." },
      { question: "What is the typical Vietnam setup for a UK company?", answer: "UK companies typically set up a sales subsidiary or a representative office. The subsidiary is 100%-foreign-owned. UK companies often use Vietnam as a low-cost engineering or manufacturing hub for APAC." },
      { question: "How is the UK-Vietnam tax treaty applied?", answer: "The UK-Vietnam DTA reduces withholding tax on dividends to 0% (where the parent holds a qualifying stake), on interest to 10%, and on royalties to 5–10%. The UK parent must obtain a Certificate of Residence from HMRC and submit it for treaty claims." },
      { question: "What is the typical UK reporting framework?", answer: "UK parents expect reporting under FRS 102 or IFRS. We prepare the Vietnam financial statements in VAS and reconcile to the UK group's reporting framework. Differences in revenue recognition, lease accounting, and deferred tax are reconciled in a quarterly package." },
    ],
  },
  {
    slug: "social-insurance",
    name: "Social, Health & Unemployment Insurance",
    description:
      "SI rates, contributions, declaration, foreign-worker exemption, and the role of the SI agency.",
    faqs: [
      { question: "What are the social insurance rates in Vietnam?", answer: "Total social insurance contributions are 32.5% of insurable salary (capped at 20x base salary): employer 21.5% (SI 17.5% + HI 3% + UI 1%), employee 10.5% (SI 8% + HI 1.5% + UI 1%). Trade-union fees add 2% of base salary (employer) for entities with a trade union." },
      { question: "What is the insurable salary?", answer: "Insurable salary is the contractual salary plus allowances (housing, transportation, seniority, position, meals if fixed) up to a cap of 20x the base salary. Some allowances are excluded (e.g. one-off bonuses, TET bonus up to 3 months' salary, mid-shift meals). The base salary is set by the government (currently VND 2,340,000/month)." },
      { question: "Are expatriate employees subject to SI?", answer: "Foreign employees with work permits or work-permit-exemption certificates are subject to mandatory SI from 1 July 2025 (under amendments to the Social Insurance Law). The standard rates apply. Vietnamese employees are subject to SI from day one of employment." },
      { question: "How is the SI declaration submitted?", answer: "SI is declared monthly via the SI agency's e-portal. The declaration is due by the 25th of the following month. Payment is made by the 25th. Late payment triggers late-payment interest (0.03% per day) and penalties." },
      { question: "What is the unemployment insurance benefit?", answer: "Unemployment insurance provides income support to employees who lose their job involuntarily. The benefit is 60% of the average insurable salary for the last 6 months, for 3–6 months depending on the contribution period. The benefit is paid by the SI agency." },
      { question: "How is the SI book managed?", answer: "Each employee has an SI book that records contributions and benefits. The SI book is issued by the SI agency and updated for each change (new employee, salary change, termination). The employer files the monthly declaration; the SI book is reconciled quarterly." },
      { question: "What is the role of the SI agency?", answer: "The SI agency (Vietnam Social Insurance) is the government body that administers social, health, and unemployment insurance. The agency collects contributions, manages benefits, and maintains employee records. The agency also conducts SI audits." },
      { question: "What is the SI audit process?", answer: "An SI audit is typically triggered by a complaint, a discrepancy in the declaration, or a periodic review. The audit reviews the past 3 years of declarations, salary records, employment contracts, and termination documentation. Findings can include unpaid contributions, late-payment interest, and penalties." },
      { question: "How is HI handled for dependents?", answer: "Health insurance covers the employee and their dependents (spouse, minor children, parents in some cases) at no additional premium. The HI rate (4.5% of insurable salary) is shared between employer (3%) and employee (1.5%). Dependents register with the employer and receive HI cards." },
      { question: "What happens when an employee retires?", answer: "An employee qualifies for retirement benefits at 60 (men) or 55 (women) with at least 15 years of contributions. The benefit is a percentage of the average insurable salary for the last 20 years, capped at 75%. The benefit is paid by the SI agency monthly." },
    ],
  },
  {
    slug: "corporate-services-overview",
    name: "Corporate Services & Secretarial",
    description:
      "Registered office, seal management, statutory records, board resolutions, and corporate-secretary support.",
    faqs: [
      { question: "What is a registered office?", answer: "A registered office is the official address of a company in Vietnam, recorded on the ERC. The address must be a physical location in Vietnam (not a P.O. box) and is used for service of process, official correspondence, and certain filings. Most FDI companies use serviced office space initially." },
      { question: "What is a corporate seal?", answer: "A corporate seal is the official stamp of the company, used to authenticate documents. Vietnam recognises both physical seals (round, with company name and tax code) and digital signatures. The seal is registered with the DPI; the company can choose one or both methods of authentication." },
      { question: "What are statutory records?", answer: "Statutory records include: the company's charter, the ERC and IRC, the register of members/shareholders, board and shareholder resolutions, and accounting records. Records must be retained at the registered office or another location in Vietnam (with the DPI's approval)." },
      { question: "What is a board resolution?", answer: "A board resolution is a formal decision of the company's board of management. Resolutions are required for major decisions: approval of financial statements, capital changes, amendments to the charter, appointment of officers, and material contracts. Resolutions are filed in the company's statutory records." },
      { question: "What is the corporate-secretary service?", answer: "The corporate-secretary service covers: maintaining statutory records, preparing board and shareholder resolutions, filing annual returns, coordinating with the DPI on amendments, and ensuring corporate-governance compliance. The service is bundled with the registered office or provided as a standalone retainer." },
      { question: "What is the annual return?", answer: "The annual return is a filing with the DPI that confirms the company's status: capital, scope of business, legal representative, members/shareholders. The return is due within 6 months of fiscal year-end. Late filing triggers a fine of VND 1–5 million." },
      { question: "How are changes to the company recorded?", answer: "Material changes (e.g. capital increase, change of legal representative, amendment to charter) require a board resolution, an amended document, and an ERC amendment with the DPI. The changes are also notified to the tax authority, SI agency, and bank." },
      { question: "What is the difference between a director and the legal representative?", answer: "A director is a member of the board of management. The legal representative is the individual authorised to bind the company. The legal representative must be an individual; a director can be a company. A company can have multiple directors but typically only one legal representative (though multiple are permitted)." },
      { question: "What is the role of the auditor?", answer: "The auditor is an independent Vietnamese-licensed audit firm appointed by the shareholders to audit the annual financial statements. The audit opinion is required for FDI companies, JSCs, and LLCs with 2+ members. The auditor issues an opinion (unqualified, qualified, adverse, or disclaimer) and a management letter." },
      { question: "How is the annual general meeting conducted?", answer: "The annual general meeting (AGM) is held within 4 months of fiscal year-end for JSCs and within 6 months for LLCs. The AGM approves the financial statements, appoints the auditor, declares dividends, and elects directors. Minutes of the AGM are filed in the company's statutory records." },
    ],
  },
];

export const allFaqs: FAQ[] = faqTopics.flatMap((t) => t.faqs);
