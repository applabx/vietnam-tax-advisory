import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaStrip } from "@/components/Section";
import { servicePages, serviceSlugs } from "@/lib/service-data";
import type { ServicePage } from "@/lib/service-data";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = servicePages[params.slug];
  if (!page) return {};
  return buildPageMetadata({
    title: page.name,
    description: `${page.name} for foreign companies in Vietnam. ${page.overview.slice(0, 140)}`,
    path: `/${categoryPath(page.category)}/${page.slug}`,
    keywords: [
      page.name,
      `Vietnam ${page.shortName.toLowerCase()}`,
      `${page.shortName} for foreign companies Vietnam`,
    ],
  });
}

function categoryPath(c: ServicePage["category"]) {
  return c === "core-services"
    ? "services"
    : c === "business-setup"
    ? "setup"
    : c === "industries"
    ? "industries"
    : "countries";
}

const categoryLabel = {
  "core-services": "Services",
  "business-setup": "Business Setup",
  industries: "Industries",
  countries: "Countries",
};

const categoryHref = {
  "core-services": "/services",
  "business-setup": "/services",
  industries: "/industries",
  countries: "/countries",
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const page = servicePages[params.slug];
  if (!page) notFound();

  const path = `/${categoryPath(page.category)}/${page.slug}`;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: page.name,
            description: page.overview,
            path,
            serviceType: page.shortName,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: categoryLabel[page.category], path: categoryHref[page.category] },
            { name: page.shortName, path },
          ]),
          faqSchema(page.faqs),
        ]}
      />

      {/* Hero */}
      <section className="bg-navy text-white section-pad pt-32">
        <div className="container-page">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: categoryLabel[page.category], href: categoryHref[page.category] },
              { label: page.shortName },
            ]}
          />
          <div className="eyebrow !text-gold-light">{page.hero.eyebrow}</div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-white max-w-3xl mb-6">
            {page.hero.title} <em className="text-gold-light">{page.hero.italic}</em>
          </h1>
          <p className="text-white/65 text-[17px] font-light leading-[1.8] max-w-2xl mb-10">
            {page.hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
            <Link href={`/${categoryPath(page.category)}`} className="btn-outline-light">
              See all {categoryLabel[page.category]}
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div className="prose-vietnam max-w-none">
              <h2>Overview</h2>
              <p>{page.overview}</p>

              <h2>Who needs this service</h2>
              <ul>
                {page.whoNeeds.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>

              <h2>Legal requirements</h2>
              {page.legalRequirements.map((lr) => (
                <div key={lr.title} className="mb-6">
                  <h3>{lr.title}</h3>
                  <p>{lr.desc}</p>
                </div>
              ))}
            </div>
            <aside className="lg:sticky lg:top-24 self-start">
              <div className="bg-ivory border border-ivory-warm p-7">
                <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-4">Quick facts</div>
                <ul className="space-y-3 text-[13px] text-ink-mid">
                  <li className="flex justify-between border-b border-ivory-warm pb-3">
                    <span className="text-ink-muted">Service area</span>
                    <span className="text-navy font-medium">Vietnam-wide</span>
                  </li>
                  <li className="flex justify-between border-b border-ivory-warm pb-3">
                    <span className="text-ink-muted">Languages</span>
                    <span className="text-navy font-medium">EN / VI</span>
                  </li>
                  <li className="flex justify-between border-b border-ivory-warm pb-3">
                    <span className="text-ink-muted">Engagement</span>
                    <span className="text-navy font-medium">Fixed monthly fee</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-ink-muted">Lead time</span>
                    <span className="text-navy font-medium">2–6 weeks</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn-primary block text-center mt-6 w-full">
                  Request a Proposal
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="bg-ivory section-pad">
        <div className="container-page">
          <div className="eyebrow">Pricing</div>
          <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-navy leading-[1.15] mb-10 max-w-2xl">
            Indicative <em>fees</em>
          </h2>
          <div className="border border-ivory-warm bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-ivory-warm">
                  <th className="text-left p-5 text-[12px] tracking-[0.12em] uppercase text-ink-muted font-medium">Item</th>
                  <th className="text-right p-5 text-[12px] tracking-[0.12em] uppercase text-ink-muted font-medium">Fee</th>
                </tr>
              </thead>
              <tbody>
                {page.costs.map((c, i) => (
                  <tr key={c.item} className={i < page.costs.length - 1 ? "border-b border-ivory-warm" : ""}>
                    <td className="p-5 text-[14px] text-ink-mid">{c.item}</td>
                    <td className="p-5 text-[14px] text-navy font-medium text-right whitespace-nowrap">{c.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-ink-muted mt-4">
            Fees are indicative and depend on transaction volume, complexity, and reporting requirements. Request a tailored proposal.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="eyebrow">Timeline</div>
          <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-navy leading-[1.15] mb-12 max-w-2xl">
            Typical <em>engagement timeline</em>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.timeline.map((t, i) => (
              <div key={t.phase} className="border-t-2 border-gold pt-6">
                <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-3">Phase {i + 1} · {t.duration}</div>
                <h3 className="font-serif text-[22px] font-medium text-navy mb-2">{t.phase}</h3>
                <p className="text-[14px] text-ink-muted font-light leading-[1.7]">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="bg-navy text-white section-pad">
        <div className="container-page">
          <div className="eyebrow !text-gold-light">Watch out</div>
          <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-white leading-[1.15] mb-12 max-w-2xl">
            Common <em className="text-gold-light">mistakes</em> we help you avoid
          </h2>
          <ul className="space-y-4 max-w-3xl">
            {page.commonMistakes.map((m, i) => (
              <li key={i} className="flex items-start gap-5 p-5 bg-white/[0.03] border border-gold/15 rounded">
                <span className="font-serif text-[20px] text-gold-light w-8 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-white/80 text-[15px] font-light leading-[1.7]">{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-ivory section-pad">
        <div className="container-page">
          <div className="eyebrow">Why us</div>
          <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-navy leading-[1.15] mb-12 max-w-2xl">
            What you <em>get</em>
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {page.benefits.map((b) => (
              <div key={b.title} className="bg-white p-8 border border-ivory-warm">
                <h3 className="font-serif text-[22px] font-medium text-navy mb-3">{b.title}</h3>
                <p className="text-[14px] text-ink-muted font-light leading-[1.8]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white section-pad">
        <div className="container-page max-w-3xl">
          <div className="eyebrow">FAQ</div>
          <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-navy leading-[1.15] mb-12">
            Frequently asked <em>questions</em>
          </h2>
          <div className="border-t border-ivory-warm">
            {page.faqs.map((f) => (
              <details key={f.question} className="faq-item">
                <summary>{f.question}</summary>
                <div className="faq-answer">{f.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title={`Ready to discuss ${page.shortName.toLowerCase()}?`}
        description="Free 30-minute consultation. We'll review your situation and outline a fixed-fee engagement."
        primaryLabel="Book a Free Consultation"
        secondaryLabel="Download the Compliance Checklist"
        secondaryHref="/resources/checklist"
      />
    </>
  );
}
