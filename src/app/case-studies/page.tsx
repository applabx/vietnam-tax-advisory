import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaStrip } from "@/components/Section";
import { caseStudies } from "@/lib/case-studies-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Case Studies",
  description:
    "Selected client engagements: Singapore SaaS, US technology, Australian trading, and Japanese manufacturing. Real-world scenarios for foreign-owned companies in Vietnam.",
  path: "/case-studies",
});

export default function CaseStudiesIndex() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }])} />
      <section className="bg-navy text-white section-pad pt-32">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies" }]} />
          <div className="eyebrow !text-gold-light">Selected engagements</div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-white max-w-3xl mb-6">
            Case <em className="text-gold-light">studies</em>
          </h1>
          <p className="text-white/65 text-[17px] font-light leading-[1.8] max-w-2xl">
            Real-world engagements with foreign-owned companies in Vietnam. The names are anonymised, the scenarios are typical. The structure and outcomes are drawn from our work with similar clients.
          </p>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-px bg-ivory-warm border border-ivory-warm">
            {caseStudies.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="group bg-white p-10 hover:bg-navy transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[11px] tracking-[0.16em] uppercase text-gold border border-gold/40 px-3 py-1 rounded-full">
                    {c.industry}
                  </span>
                  <span className="text-[11px] tracking-[0.16em] uppercase text-ink-muted group-hover:text-white/50">
                    {c.origin}
                  </span>
                </div>
                <h2 className="font-serif text-[24px] font-medium text-navy group-hover:text-white mb-3 transition-colors">
                  {c.name}
                </h2>
                <p className="text-[14px] text-ink-muted group-hover:text-white/60 leading-[1.7] font-light transition-colors">
                  {c.hero.summary}
                </p>
                <span className="text-gold text-[14px] mt-5 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
                  Read the case study →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="See your company here next quarter"
        description="Book a free 30-minute consultation. We'll review your situation and outline a fixed-fee engagement."
      />
    </>
  );
}
