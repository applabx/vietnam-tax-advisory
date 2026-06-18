import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaStrip } from "@/components/Section";
import { servicePages } from "@/lib/service-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Vietnam Tax & Accounting for Foreign Companies",
  description:
    "Vietnam-side tax, accounting, payroll, transfer pricing, and CFO advisory for companies headquartered in Singapore, Australia, the US, the UK, Japan, and South Korea.",
  path: "/countries",
});

const countrySlugs = ["singapore", "australia", "united-states", "united-kingdom", "japan", "korea"];

export default function CountriesIndex() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Countries", path: "/countries" }])} />
      <section className="bg-navy text-white section-pad pt-32">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "For Foreign Companies" }]} />
          <div className="eyebrow !text-gold-light">By country</div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-white max-w-3xl mb-6">
            For foreign <em className="text-gold-light">companies</em> in Vietnam
          </h1>
          <p className="text-white/65 text-[17px] font-light leading-[1.8] max-w-2xl">
            We deliver to head offices in Singapore, Sydney, Tokyo, Seoul, London, and New York — and reconcile with the standards they expect. Treaty relief, group reporting, and the documentation your parent needs.
          </p>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory-warm border border-ivory-warm">
            {countrySlugs.map((slug) => {
              const p = servicePages[slug];
              return (
                <Link
                  key={slug}
                  href={`/countries/${slug}`}
                  className="group bg-white p-10 hover:bg-navy transition-colors"
                >
                  <h3 className="font-serif text-[24px] font-medium text-navy group-hover:text-white mb-3 transition-colors">{p.shortName}</h3>
                  <p className="text-[14px] text-ink-muted group-hover:text-white/60 leading-[1.7] font-light transition-colors">{p.hero.description}</p>
                  <span className="text-gold text-[14px] mt-4 inline-block opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Country not listed?"
        description="We serve most major investing countries in Vietnam. Get in touch — if we can't help, we can usually point you to a trusted partner."
      />
    </>
  );
}
