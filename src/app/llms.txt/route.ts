import { siteConfig } from "@/lib/site";
import { serviceSlugs, servicePages } from "@/lib/service-data";
import { faqTopics, allFaqs } from "@/lib/faq-data";
import { caseStudies } from "@/lib/case-studies-data";

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

const caseLines = caseStudies
  .map((c) => `- [${c.name}](${siteConfig.url}/case-studies/${c.slug}): ${c.hero.summary.slice(0, 140)}...`)
  .join("\n");

const content = `# Vietnam Tax Advisory

> ${siteConfig.tagline}

${siteConfig.description}

URL: ${siteConfig.url}
Email: ${siteConfig.email}
Phone: ${siteConfig.phone}
Office: ${siteConfig.address.street}, ${siteConfig.address.district}, ${siteConfig.address.city}, ${siteConfig.address.country}

## About

Vietnam Tax Advisory is a Vietnam-based accounting, tax, payroll, transfer pricing, and CFO advisory firm serving foreign investors, FDI companies, startups, and regional headquarters. We work with foreign-owned companies from Singapore, Australia, the United States, the United Kingdom, Japan, South Korea, and beyond. Our team includes former Ministry of Finance auditors and Big-4 alumni, with 10+ years in practice.

Founded: ${siteConfig.foundedYear}. Service area: Vietnam-wide (Ho Chi Minh City, Hanoi, Da Nang, Binh Duong, Dong Nai, and industrial zones).

## Services (${serviceSlugs.length} service pages)

${serviceLines}

## Industries

- SaaS & Software: ${siteConfig.url}/industries/saas
- Manufacturing: ${siteConfig.url}/industries/manufacturing
- E-commerce: ${siteConfig.url}/industries/ecommerce
- Technology Startups: ${siteConfig.url}/industries/technology-startups
- Foreign-Owned Companies: ${siteConfig.url}/industries/foreign-owned

## Countries

- Singapore companies in Vietnam: ${siteConfig.url}/countries/singapore
- Australian companies in Vietnam: ${siteConfig.url}/countries/australia
- US companies in Vietnam: ${siteConfig.url}/countries/united-states
- UK companies in Vietnam: ${siteConfig.url}/countries/united-kingdom
- Japanese companies in Vietnam: ${siteConfig.url}/countries/japan
- Korean companies in Vietnam: ${siteConfig.url}/countries/korea

## Case studies

${caseLines}

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

## Convention

This llms.txt file follows the convention proposed at https://llmstxt.org. It provides a concise summary of the site for AI assistants and search engines. The site's full content is available at the listed URLs.
`;

export function GET() {
  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
