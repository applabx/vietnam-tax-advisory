export const siteConfig = {
  // ─── Identity ────────────────────────────────────────────────────────
  name: "Vietnam Tax Advisory",
  shortName: "VTA",
  legalName: "Vietnam Tax Advisory Co., Ltd",
  tagline: "Accounting, Tax & Advisory for Foreign-Owned Companies in Vietnam",
  description:
    "Vietnam-based accounting, tax, payroll, transfer pricing, and advisory services for foreign investors and FDI companies in Vietnam.",
  url: "https://accounting-agency.investvietnam.co",
  ogImage: "/og-image.svg",
  logo: "/logo.svg",
  locale: "en",

  // ─── Contact (PENDING FIRM CONFIRMATION) ────────────────────────────
  // Items below are placeholders carried from the original repository
  // commit. They MUST be confirmed by the firm before they should be
  // treated as authoritative in any client engagement.
  email: "hello@vietnamtaxadvisory.com",                 // ⚠ PENDING
  phone: "+84 (0) 28 3822 0000",                          // ⚠ PENDING
  whatsapp: "+84 28 3822 0000",                          // ⚠ PENDING
  calendlyUrl: "https://calendly.com/vietnamtaxadvisory/intro", // ⚠ PENDING
  crmWebhook: process.env.NEXT_PUBLIC_CRM_WEBHOOK || "",

  // ─── Address (PENDING FIRM CONFIRMATION) ────────────────────────────
  // The Bitexco address is widely used by professional firms in HCMC but
  // this MUST be confirmed before publication — virtual office tenants
  // do not always have a true presence.
  address: {
    street: "Bitexco Financial Tower, 2 Hai Trieu Street",  // ⚠ PENDING
    district: "District 1",
    city: "Ho Chi Minh City",
    region: "Ho Chi Minh City",
    country: "Vietnam",
    countryCode: "VN",
    postal: "700000",
    geo: { latitude: 10.7718, longitude: 106.7009 },         // Bitexco coords
  },

  // ─── Social (PENDING FIRM CONFIRMATION) ─────────────────────────────
  social: {
    linkedin: "https://www.linkedin.com/company/vietnamtaxadvisory", // ⚠ PENDING
  },

  // ─── Registration (PENDING FIRM CONFIRMATION) ──────────────────────
  // Do not publish an MoF/GDT tax-agent registration number until the
  // firm supplies the verified certificate.
  // Typical Vietnamese tax-agent registration: a tax-agent license number
  // issued by the GDT and an enterprise registration code (ERC).
  registration: {
    taxAgentLicense: null,  // ⚠ PENDING — to be filled by firm
    enterpriseCode: null,   // ⚠ PENDING — to be filled by firm
    notes: "Tax-agent registration number and ERC are not published until the firm supplies verified values.",
  },

  // ─── Team (intentionally empty) ─────────────────────────────────────
  // Real team profiles will be added one at a time, only with the
  // individual's written consent, name, role, and verifiable credentials.
  team: [] as ReadonlyArray<{ name: string; slug: string; role: string; bio?: string }>,

  // ─── Founded year (PENDING FIRM CONFIRMATION) ───────────────────────
  // Not exposed in any schema or public-facing badge. Listed here only
  // for internal reference pending confirmation.
  foundedYear: 2014,   // ⚠ PENDING

  // ─── Service areas ──────────────────────────────────────────────────
  serviceAreas: [
    "Ho Chi Minh City",
    "Hanoi",
    "Da Nang",
    "Binh Duong",
    "Dong Nai",
    "Ba Ria-Vung Tau",
    "Can Tho",
    "Hai Phong",
  ],

  // ─── Knowledge-graph entities (used by schema) ──────────────────────
  geoEntities: [
    "Vietnam",
    "Ho Chi Minh City",
    "Hanoi",
    "Da Nang",
    "Binh Duong",
    "Dong Nai",
    "Ba Ria-Vung Tau",
    "Can Tho",
    "Hai Phong",
    "Southeast Asia",
    "ASEAN",
  ],
  expertiseEntities: [
    "Accounting",
    "Tax",
    "Payroll",
    "Social Insurance",
    "VAT",
    "Corporate Income Tax",
    "Personal Income Tax",
    "Transfer Pricing",
    "Foreign Contractor Tax",
    "Statutory Audit",
    "Bookkeeping",
    "Compliance",
    "FDI",
    "Foreign Direct Investment",
    "Company Formation",
    "Work Permits",
    "Profit Repatriation",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
