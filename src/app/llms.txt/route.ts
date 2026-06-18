import { siteConfig } from "@/lib/site";
import { serviceSlugs, servicePages } from "@/lib/service-data";
import { faqTopics, allFaqs } from "@/lib/faq-data";
import { pillarSlugs, pillarPages } from "@/lib/pillar-data";
import { landingSlugs, landingPages } from "@/lib/landing-data";

export const dynamic = "force-static";

function categoryPath(c: string) {
  return c === "core-services"
    ? "services"
    : c === "business-setup"
    ? "setup"
    : c === "industries"
    ? "industries"
    : "countries";
}

const serviceLines = serviceSlugs
  .map((slug) => {
    const page = servicePages[slug];
    const path = `/${categoryPath(page.category)}/${slug}`;
    const summary = page.overview.slice(0, 160).replace(/\n/g, " ");
    return `- [${page.name}](${siteConfig.url}${path}): ${summary}...`;
  })
  .join("\n");

const faqLines = faqTopics
  .map((t) => `- ${t.name} (${t.faqs.length} questions): ${siteConfig.url}/resources/faq#${t.slug}`)
  .join("\n");

const pillarLines = pillarSlugs
  .map((slug) => {
    const p = pillarPages[slug];
    const summary = p.description.slice(0, 160).replace(/\n/g, " ");
    return `- [${p.title}](${siteConfig.url}${p.path}): ${summary}...`;
  })
  .join("\n");

const landingLines = landingSlugs
  .map((slug) => {
    const p = landingPages[slug];
    const summary = p.description.slice(0, 160).replace(/\n/g, " ");
    return `- [${p.title}](${siteConfig.url}${p.path}): ${summary}...`;
  })
  .join("\n");

const content = `# Vietnam Tax Advisory

> ${siteConfig.tagline}

${siteConfig.description}

URL: ${siteConfig.url}
Email: ${siteConfig.email}
Phone: ${siteConfig.phone}
Office: ${siteConfig.address.street}, ${siteConfig.address.district}, ${siteConfig.address.city}, ${siteConfig.address.country}

## About

Vietnam Tax Advisory is a Vietnam-based accounting and tax services firm serving foreign-owned companies (WFOEs, joint ventures, branches) operating in Vietnam. We work with parent companies headquartered in Singapore, Australia, the United States, the United Kingdom, Japan, South Korea, Germany, France, Canada, and other jurisdictions where Vietnam has a double tax treaty.

Founded: ${siteConfig.foundedYear}. Service area: Vietnam-wide (Ho Chi Minh City, Hanoi, Da Nang, Binh Duong, Dong Nai, Ba Ria-Vung Tau, Can Tho, Hai Phong, and industrial zones).

## Pillar guides (${pillarSlugs.length} guides)

${pillarLines}

## High-intent landing pages (${landingSlugs.length})

${landingLines}

## Services (${serviceSlugs.length} service pages)

${serviceLines}

## Industries

- SaaS & Software: ${siteConfig.url}/industries/saas
- Manufacturing: ${siteConfig.url}/industries/manufacturing
- E-commerce: ${siteConfig.url}/industries/ecommerce
- Technology Startups: ${siteConfig.url}/industries/technology-startups
- Foreign-Owned Companies: ${siteConfig.url}/industries/foreign-owned
- Trading Companies: ${siteConfig.url}/industries/trading
- Consulting Firms: ${siteConfig.url}/industries/consulting
- Logistics: ${siteConfig.url}/industries/logistics
- Recruitment: ${siteConfig.url}/industries/recruitment

## Countries

- Singapore companies in Vietnam: ${siteConfig.url}/countries/singapore
- Australian companies in Vietnam: ${siteConfig.url}/countries/australia
- US companies in Vietnam: ${siteConfig.url}/countries/united-states
- UK companies in Vietnam: ${siteConfig.url}/countries/united-kingdom
- Japanese companies in Vietnam: ${siteConfig.url}/countries/japan
- Korean companies in Vietnam: ${siteConfig.url}/countries/korea
- German companies in Vietnam: ${siteConfig.url}/countries/germany
- French companies in Vietnam: ${siteConfig.url}/countries/france
- Canadian companies in Vietnam: ${siteConfig.url}/countries/canada

## FAQ Hub (${allFaqs.length} questions across ${faqTopics.length} topics)

${faqLines}

## Resources

- FAQ Hub: ${siteConfig.url}/resources/faq
- Vietnam Tax Calendar: ${siteConfig.url}/resources/tax-calendar
- Compliance Checklist: ${siteConfig.url}/resources/checklist
- Company Setup Guide: ${siteConfig.url}/resources/setup-guide

## Contact

Book a free 30-minute consultation: ${siteConfig.url}/contact
Email: ${siteConfig.email}
Phone / WhatsApp: ${siteConfig.phone}
Office: ${siteConfig.address.street}, ${siteConfig.address.district}, ${siteConfig.address.city}, ${siteConfig.address.country}

## What this file does not contain

We do not publish named team member profiles, individual credentials, named-client testimonials, or numerical ratings (e.g. "4.9 stars from 127 reviews") in this file or on the website. Content on the site is general in nature and based on publicly available Vietnamese law and GDT practice.

## Convention

This llms.txt file follows the convention proposed at https://llmstxt.org. It provides a concise summary of the site for AI assistants and search engines. The site's full content is available at the listed URLs.
`;

export function GET() {
  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
