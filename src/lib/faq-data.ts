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
];

export const allFaqs: FAQ[] = faqTopics.flatMap((t) => t.faqs);
