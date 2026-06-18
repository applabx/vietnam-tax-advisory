import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaStrip } from "@/components/Section";
import { servicePages } from "@/lib/service-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Vietnam Tax & Accounting Services",
  description:
    "All Vietnam tax, accounting, payroll, transfer pricing, audit, and CFO advisory services for foreign-owned companies. Pick a service to see overview, fees, timeline, and FAQs.",
  path: "/services",
  keywords: ["Vietnam tax services", "Vietnam accounting services", "Vietnam CFO services"],
});

const coreServiceSlugs = [
  "accounting",
  "tax",
  "bookkeeping",
  "payroll",
  "corporate-tax",
  "vat",
  "transfer-pricing",
  "foreign-contractor-tax",
  "statutory-audit",
  "virtual-cfo",
];

const setupServiceSlugs = [
  "company-registration",
  "foreign-company",
  "irc-erc",
  "representative-office",
  "branch-office",
  "work-permits",
];

export default function ServicesIndex() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])}
      />
      <section className="bg-navy text-white section-pad pt-32">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <div className="eyebrow !text-gold-light">All services</div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-white max-w-3xl mb-6">
            Vietnam tax, accounting & <em className="text-gold-light">advisory</em> services
          </h1>
          <p className="text-white/65 text-[17px] font-light leading-[1.8] max-w-2xl">
            From monthly bookkeeping to transfer pricing documentation and virtual CFO leadership — every service is delivered by an English-speaking team with Big-4 heritage and FDI expertise.
          </p>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page">
          <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] font-light text-navy mb-10">Core services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory-warm border border-ivory-warm">
            {coreServiceSlugs.map((slug) => {
              const p = servicePages[slug];
              return (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="group bg-white p-10 hover:bg-navy transition-colors"
                >
                  <h3 className="font-serif text-[24px] font-medium text-navy group-hover:text-white mb-3 transition-colors">{p.shortName}</h3>
                  <p className="text-[14px] text-ink-muted group-hover:text-white/60 leading-[1.7] font-light line-clamp-3 transition-colors">{p.hero.description}</p>
                  <span className="text-gold text-[14px] mt-4 inline-block opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ivory section-pad">
        <div className="container-page">
          <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] font-light text-navy mb-4">Business setup</h2>
          <p className="text-ink-muted text-[16px] font-light leading-[1.8] max-w-2xl mb-10">
            Incorporation, licensing, and post-setup registrations for foreign investors entering Vietnam.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory-warm border border-ivory-warm">
            {setupServiceSlugs.map((slug) => {
              const p = servicePages[slug];
              return (
                <Link
                  key={slug}
                  href={`/setup/${slug}`}
                  className="group bg-white p-10 hover:bg-navy transition-colors"
                >
                  <h3 className="font-serif text-[24px] font-medium text-navy group-hover:text-white mb-3 transition-colors">{p.shortName}</h3>
                  <p className="text-[14px] text-ink-muted group-hover:text-white/60 leading-[1.7] font-light line-clamp-3 transition-colors">{p.hero.description}</p>
                  <span className="text-gold text-[14px] mt-4 inline-block opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Not sure which service you need?"
        description="Book a free 30-minute consultation. We'll review your situation and recommend the right engagement."
      />
    </>
  );
}
