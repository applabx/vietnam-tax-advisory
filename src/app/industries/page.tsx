import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaStrip } from "@/components/Section";
import { servicePages } from "@/lib/service-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Industries We Serve",
  description:
    "Vietnam tax, accounting, and CFO advisory tailored to your industry: SaaS, manufacturing, e-commerce, technology startups, and 100%-foreign-owned companies.",
  path: "/industries",
});

const industrySlugs = ["saas", "manufacturing", "ecommerce", "technology-startups", "foreign-owned"];

export default function IndustriesIndex() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }])} />
      <section className="bg-navy text-white section-pad pt-32">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
          <div className="eyebrow !text-gold-light">By industry</div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-white max-w-3xl mb-6">
            We know your <em className="text-gold-light">business model</em>
          </h1>
          <p className="text-white/65 text-[17px] font-light leading-[1.8] max-w-2xl">
            Industry-specific accounting, tax, and CFO advisory. We understand the revenue, expense, and compliance patterns that come with your sector — so we can move fast, ask the right questions, and get you compliant.
          </p>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-px bg-ivory-warm border border-ivory-warm">
            {industrySlugs.map((slug) => {
              const p = servicePages[slug];
              return (
                <Link
                  key={slug}
                  href={`/industries/${slug}`}
                  className="group bg-white p-12 hover:bg-navy transition-colors"
                >
                  <h3 className="font-serif text-[28px] font-medium text-navy group-hover:text-white mb-3 transition-colors">{p.shortName}</h3>
                  <p className="text-[15px] text-ink-muted group-hover:text-white/60 leading-[1.8] font-light transition-colors">{p.hero.description}</p>
                  <span className="text-gold text-[14px] mt-5 inline-block opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Looking for a sector we haven't listed?"
        description="We serve most B2B and B2C sectors in Vietnam. Get in touch and we'll tell you whether we're the right fit."
      />
    </>
  );
}
