export type CaseStudy = {
  slug: string;
  name: string;
  industry: string;
  origin: string;
  hero: {
    title: string;
    summary: string;
  };
  client: string;
  challenge: string;
  approach: string;
  outcome: string;
  ongoing: string;
  metrics: { label: string; value: string }[];
  quote?: { text: string; attribution: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "singapore-saas-platform",
    name: "Singapore SaaS Platform",
    industry: "Software-as-a-Service",
    origin: "Singapore",
    hero: {
      title: "Singapore SaaS platform: FCT on royalties, TP for cost-share, and a clean entry into Vietnam",
      summary:
        "When a Singapore-headquartered SaaS company entered Vietnam, it needed a Vietnamese operating entity to sell subscriptions to local customers, with royalties paid to the Singapore IP holder. We set up the Vietnam entity, structured the FCT exposure, and aligned the inter-company agreements with the TP documentation.",
    },
    client: "A Singapore-headquartered B2B SaaS company providing workflow automation to mid-market customers in APAC. Approximate ARR at engagement: USD 8M; customers in 7 APAC markets including Vietnam.",
    challenge:
      "The Singapore parent had been selling to Vietnamese customers via a reseller arrangement, but the local partner was exiting. The company needed a Vietnamese entity to sell directly, and wanted to ring-fence the IP in Singapore with a royalty from Vietnam. The CFO in Singapore was concerned about: (1) the FCT exposure on the royalty, (2) the TP documentation to support the royalty rate, and (3) the Vietnamese VAT exposure on the cross-border service.",
    approach:
      "We structured the Vietnam entity as a limited-risk distributor: Vietnam-sourced subscription revenue is booked in Vietnam, and a royalty (8% of net revenue) is paid to Singapore for the use of the platform IP. We prepared: (1) the inter-company services and royalty agreements, (2) the Local File with a benchmarking study supporting the royalty rate, (3) the FCT registration and the monthly FCT filings, and (4) the cloud-infrastructure cost-share agreement with a separate benchmarking study.",
    outcome:
      "The Vietnam entity is fully operational, with monthly management accounts delivered to the Singapore CFO in SGD. The TP documentation was prepared contemporaneously and is available for GDT review. FCT is filed on time, and the royalty remittance is processed via the bank with the SBV notification. The Singapore CFO has live visibility into the Vietnam numbers via Xero.",
    ongoing:
      "We continue as the Vietnam accounting, tax, payroll, and TP compliance partner. The engagement scope is the monthly compliance + annual TP documentation. We work with the Singapore group's reporting calendar for the quarterly consolidation.",
    metrics: [
      { label: "Royalty rate", value: "8% of net revenue" },
      { label: "Engagement scope", value: "Full compliance" },
      { label: "Reporting currency", value: "SGD" },
      { label: "Setup-to-first-sale", value: "10 weeks" },
    ],
  },
  {
    slug: "us-technology-company",
    name: "US Technology Company",
    industry: "Software & Engineering",
    origin: "United States",
    hero: {
      title: "US technology company: software development subsidiary, inter-company IP, and SOX controls",
      summary:
        "A US-headquartered technology company set up a software development subsidiary in Vietnam. We structured the inter-company IP arrangement, the TP documentation, and the SOX-aligned internal controls.",
    },
    client: "A US-headquartered technology company building a cloud-based product. The Vietnam entity was set up to access engineering talent in Ho Chi Minh City. Initial team: 12 engineers.",
    challenge:
      "The US parent wanted the Vietnam entity to operate as a cost-plus engineering centre, with the IP developed by Vietnam vesting in the US parent. The CFO in San Francisco was concerned about: (1) the TP documentation to support the cost-plus mark-up, (2) the SOX controls over the Vietnam entity (the parent is SEC-registered), and (3) the Vietnamese withholding tax on the cost-plus mark-up.",
    approach:
      "We structured the Vietnam entity as a limited-risk engineering centre: Vietnam costs are reimbursed at cost plus a 7% mark-up, with all developed IP assigned to the US parent under an inter-company IP assignment agreement. We prepared: (1) the inter-company cost-plus agreement, (2) the Local File with a benchmarking study supporting the mark-up, (3) the FCT registration and treaty-claim documentation to reduce the withholding on the cost-plus payment, and (4) the SOX-aligned internal controls documentation for the parent's external auditor.",
    outcome:
      "The Vietnam entity is fully operational, with monthly management accounts in USD. The SOX controls documentation was accepted by the parent's external auditor. The TP documentation is contemporaneous, and the FCT is filed on time with the treaty rate applied. The US CFO has live visibility into the Vietnam team cost and the IP-development deliverables.",
    ongoing:
      "We continue as the Vietnam accounting, tax, payroll, and TP compliance partner. The engagement scope includes the SOX controls documentation and the annual TP file.",
    metrics: [
      { label: "Cost-plus mark-up", value: "7% of cost" },
      { label: "Engagement scope", value: "Full compliance + SOX" },
      { label: "Reporting currency", value: "USD" },
      { label: "Initial team size", value: "12 engineers" },
    ],
  },
  {
    slug: "australian-trading-company",
    name: "Australian Trading Company",
    industry: "Import & Distribution",
    origin: "Australia",
    hero: {
      title: "Australian trading company: import-and-distribution entity, customs duty, and AUD reporting",
      summary:
        "An Australian-headquartered trading company set up a Vietnam distribution entity to import and distribute consumer goods. We structured the entity, the customs duty optimisation, and the AUD reporting to the Australian parent.",
    },
    client: "An Australian-headquartered trading company distributing consumer goods (home and lifestyle) across APAC. Vietnam was the next market after Australia and New Zealand.",
    challenge:
      "The Australian parent wanted a Vietnam distribution entity to import the goods and sell to local retailers. The CFO in Sydney was concerned about: (1) the import duty on the goods, (2) the CIT incentives (if any) for the distribution activity, and (3) the AUD reporting for the group consolidation.",
    approach:
      "We structured the Vietnam entity as a distribution company with the Australian parent supplying the goods at cost plus a margin. We prepared: (1) the IRC and ERC for the distribution company, (2) the import-duty classification and the FTA preference application (where eligible), (3) the inter-company supply agreement, and (4) the AUD management accounts with the FX gain/loss reconciliation.",
    outcome:
      "The Vietnam entity is fully operational, with monthly management accounts in AUD. The import duty is being optimised through FTA preferences where eligible. The Australian parent has live visibility into the Vietnam revenue and the FX exposure. We work with the Australian parent's reporting calendar for the quarterly consolidation.",
    ongoing:
      "We continue as the Vietnam accounting, tax, payroll, and customs compliance partner. The engagement scope includes the monthly compliance + the customs classification review.",
    metrics: [
      { label: "Inter-company margin", value: "Cost + 5%" },
      { label: "Engagement scope", value: "Full compliance + customs" },
      { label: "Reporting currency", value: "AUD" },
      { label: "Setup-to-first-import", value: "12 weeks" },
    ],
  },
  {
    slug: "japanese-manufacturer",
    name: "Japanese Manufacturer",
    industry: "Electronics Manufacturing",
    origin: "Japan",
    hero: {
      title: "Japanese manufacturer: production entity, CIT incentives, and JPY reporting to the Tokyo parent",
      summary:
        "A Japanese-headquartered electronics manufacturer set up a production entity in Vietnam. We structured the entity, claimed the CIT incentives, and aligned the reporting to the Japanese parent's calendar.",
    },
    client: "A Japanese-headquartered electronics manufacturer with a global production footprint. Vietnam was selected as a low-cost production hub for APAC.",
    challenge:
      "The Japanese parent wanted a Vietnam production entity with CIT incentives (encouraged sector + encouraged zone). The CFO in Tokyo was concerned about: (1) the eligibility for the 10% CIT rate and the tax holiday, (2) the JPY reporting for the group consolidation, and (3) the J-SOX-aligned internal controls.",
    approach:
      "We advised on the IRC application with the high-tech and encouraged-zone project description. We prepared: (1) the IRC and ERC, (2) the CIT incentive application with the supporting documents, (3) the Local File with a benchmarking study for the cost-plus mark-up on the inter-company supply, and (4) the JPY management accounts with the J-SOX controls documentation.",
    outcome:
      "The Vietnam entity is fully operational, with monthly management accounts in JPY. The CIT incentive was approved by the GDT and the project is enjoying the 10% rate and the tax holiday. The Japanese parent has live visibility into the Vietnam production cost and the JPY exposure. We work with the Japanese parent's reporting calendar for the quarterly consolidation.",
    ongoing:
      "We continue as the Vietnam accounting, tax, payroll, TP, and CIT incentive compliance partner. The engagement scope includes the annual CIT incentive review.",
    metrics: [
      { label: "CIT rate", value: "10% (incentive)" },
      { label: "Tax holiday", value: "4 years" },
      { label: "Reporting currency", value: "JPY" },
      { label: "Setup-to-first-shipment", value: "11 months" },
    ],
  },
];
