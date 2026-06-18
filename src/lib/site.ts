export const siteConfig = {
  name: "Vietnam Tax Advisory",
  shortName: "VTA",
  legalName: "Vietnam Tax Advisory Co., Ltd",
  tagline: "Accounting, Tax & CFO Advisory for Foreign-Owned Companies in Vietnam",
  description:
    "Vietnam-based accounting, tax, payroll, transfer pricing, and CFO advisory for foreign investors, FDI companies, startups, and regional headquarters. English-speaking team with Big-4 heritage.",
  url: "https://vietnamtaxadvisory.com",
  ogImage: "/og-image.png",
  locale: "en",
  email: "hello@vietnamtaxadvisory.com",
  phone: "+84 (0) 28 3822 0000",
  whatsapp: "+84 28 3822 0000",
  calendlyUrl: "https://calendly.com/vietnamtaxadvisory/intro",
  crmWebhook: process.env.NEXT_PUBLIC_CRM_WEBHOOK || "",
  address: {
    street: "Bitexco Financial Tower, 2 Hai Trieu Street",
    district: "District 1",
    city: "Ho Chi Minh City",
    country: "Vietnam",
    postal: "700000",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/vietnamtaxadvisory",
  },
  founders: [
    {
      name: "Linh Nguyen",
      role: "Managing Partner",
      credentials: "CPA, Big-4 alumni, 14 years Vietnam tax practice",
    },
    {
      name: "Marc Schneider",
      role: "Head of International Advisory",
      credentials: "CFA, former PwC Singapore, regional FDI specialist",
    },
  ],
  foundedYear: 2014,
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
} as const;

export type SiteConfig = typeof siteConfig;
