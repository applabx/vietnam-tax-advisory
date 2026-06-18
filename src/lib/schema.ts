import { siteConfig } from "./site";

type JsonLdObject = Record<string, unknown>;

export function organizationSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "AccountingService"],
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${siteConfig.url}/og-image.png`,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    // foundingDate removed — was an unverified claim.
    // founders removed — no verified individuals to publish.
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.district,
      postalCode: siteConfig.address.postal,
      addressCountry: siteConfig.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.geo.latitude,
      longitude: siteConfig.address.geo.longitude,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        telephone: siteConfig.phone,
        areaServed: ["VN", "SG", "AU", "US", "GB", "JP", "KR"],
        availableLanguage: ["English", "Vietnamese"],
      },
    ],
    sameAs: [siteConfig.social.linkedin],
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
      containedInPlace: { "@type": "Country", name: "Vietnam" },
    })),
    knowsAbout: siteConfig.expertiseEntities,
  };
}

export function localBusinessSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${siteConfig.url}#localbusiness`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    image: `${siteConfig.url}/og-image.png`,
    logo: `${siteConfig.url}/logo.png`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.district,
      postalCode: siteConfig.address.postal,
      addressCountry: siteConfig.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.geo.latitude,
      longitude: siteConfig.address.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "18:00",
      },
    ],
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
      containedInPlace: { "@type": "Country", name: "Vietnam" },
    })),
    parentOrganization: {
      "@id": `${siteConfig.url}#organization`,
    },
    knowsAbout: siteConfig.expertiseEntities,
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.serviceType,
    name: opts.name,
    description: opts.description,
    provider: { "@id": `${siteConfig.url}#organization` },
    areaServed: siteConfig.serviceAreas,
    url: `${siteConfig.url}${opts.path}`,
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  imagePath?: string;
  keywords?: string[];
}): JsonLdObject {
  // Author is the publishing organization, not an individual — we do not
  // publish Person author schema until a verified byline is available.
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    keywords: opts.keywords?.join(", "),
    image: opts.imagePath || `${siteConfig.url}/og-image.png`,
    author: {
      "@type": "Organization",
      name: siteConfig.legalName,
      "@id": `${siteConfig.url}#organization`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}#organization`,
      name: siteConfig.legalName,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${opts.path}`,
    },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
  };
}

// Person schema intentionally returns no entries. We do not publish Person
// schema for any individual until that person's identity, role, credentials,
// and consent have been verified by the firm. This avoids fabricating
// authority signals that AI search engines and users cannot validate.
export function personSchema(): JsonLdObject[] {
  return [];
}

// AggregateRating / Review schema intentionally returns null. We do not publish
// numeric ratings or review counts until we have real, attributable reviews
// from real clients with consent.
export function reviewSchema(): JsonLdObject | null {
  return null;
}

export function webpageSchema(opts: {
  title: string;
  description: string;
  path: string;
  inLanguage?: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}${opts.path}#webpage`,
    url: `${siteConfig.url}${opts.path}`,
    name: opts.title,
    description: opts.description,
    inLanguage: opts.inLanguage || siteConfig.locale,
    isPartOf: { "@id": `${siteConfig.url}#website` },
    about: { "@id": `${siteConfig.url}#organization` },
    primaryImageOfPage: { "@type": "ImageObject", url: `${siteConfig.url}/og-image.png` },
    dateModified: new Date().toISOString(),
  };
}

export function websiteSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: siteConfig.locale,
    publisher: { "@id": `${siteConfig.url}#organization` },
  };
}
