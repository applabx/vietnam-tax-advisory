import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaStrip } from "@/components/Section";
import { servicePages } from "@/lib/service-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Business Setup Services in Vietnam",
  description:
    "Company registration, foreign company setup, IRC and ERC licensing, representative office, branch office, and work permits for foreign investors in Vietnam.",
  path: "/setup",
});

const setupSlugs = [
  "company-registration",
  "foreign-company",
  "irc-erc",
  "representative-office",
  "branch-office",
  "work-permits",
];

export default function SetupIndex() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Business Setup", path: "/setup" }])} />
      <section className="bg-navy text-white section-pad pt-32">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Business Setup" }]} />
          <div className="eyebrow !text-gold-light">Setup services</div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-white max-w-3xl mb-6">
            Business <em className="text-gold-light">setup</em> in Vietnam
          </h1>
          <p className="text-white/65 text-[17px] font-light leading-[1.8] max-w-2xl">
            End-to-end incorporation, licensing, and post-setup registrations for foreign investors entering Vietnam. We work with experienced local counsel to manage the licensing authorities.
          </p>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory-warm border border-ivory-warm">
            {setupSlugs.map((slug) => {
              const p = servicePages[slug];
              return (
                <Link
                  key={slug}
                  href={`/setup/${slug}`}
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
        title="Not sure which entity type fits your business?"
        description="Book a free 30-minute consultation. We'll review your situation, your sector, and your strategic goals, then recommend the right structure."
      />
    </>
  );
}
