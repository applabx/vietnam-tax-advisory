import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";
import { breadcrumbSchema, articleSchema, faqSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaStrip } from "@/components/Section";
import { pillarPages, pillarSlugs } from "@/lib/pillar-data";
import type { FAQ } from "@/lib/faq-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Vietnam Tax & Accounting Guides — Definitive Resources for Foreign Companies",
  description: "Comprehensive guides to Vietnam tax, accounting, payroll, transfer pricing, audits, and profit repatriation for foreign-owned companies operating in Vietnam.",
  path: "/guides",
  keywords: ["Vietnam tax guide", "Vietnam accounting guide", "Vietnam corporate tax", "Vietnam VAT guide", "Vietnam transfer pricing guide"],
});

const hubFaqs: FAQ[] = [
  { question: "What is the most important tax for foreign-owned companies in Vietnam?", answer: "Corporate Income Tax (CIT) at 20% is the headline direct tax. Value Added Tax (VAT) at 10% is the headline indirect tax. Personal Income Tax (PIT) applies to employees, with progressive rates from 5% to 35%. Foreign Contractor Tax (FCT) applies to payments to foreign parties without a Vietnamese PE." },
  { question: "How often does Vietnamese tax law change?", answer: "Vietnamese tax law is updated frequently, with major amendments typically every 2–3 years and minor updates annually. The GDT issues Circulars throughout the year. We track regulatory changes and alert clients to material developments." },
  { question: "What is the engagement model for a Vietnam tax advisor?", answer: "Most clients engage us on a monthly retainer that covers accounting, tax, and payroll. Standalone projects (TP documentation, audit support, company setup) are quoted as fixed fees. Hourly billing is reserved for ad-hoc advisory." },
  { question: "How long does it take to set up a foreign-owned company?", answer: "Standard setup: 4–8 weeks for a 100%-foreign-owned company. Pre-engagement with the DPI, IRC review, ERC issuance, and post-licence registrations all factor in." },
  { question: "What is the standard CIT rate in Vietnam?", answer: "20% standard rate. Reduced rates of 10%, 15%, and 17% apply to projects in encouraged sectors or geographic zones. Tax holidays of 2–6 years may apply to eligible projects." },
];

export default function GuidesHubPage() {
  const pillars = pillarSlugs.map((s) => pillarPages[s]);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
          ]),
          articleSchema({
            headline: "Vietnam Tax & Accounting Guides",
            description: "The definitive guides to Vietnam tax, accounting, payroll, transfer pricing, audits, and profit repatriation for foreign-owned companies.",
            path: "/guides",
            datePublished: "2026-06-18",
            dateModified: "2026-06-18",
          }),
          faqSchema(hubFaqs),
        ]}
      />

      <section className="bg-navy text-white section-pad pt-32">
        <div className="container-page">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Guides" },
            ]}
          />
          <div className="eyebrow !text-gold-light">Knowledge Hub</div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-white max-w-3xl mb-6">
            Vietnam tax & accounting <em className="text-gold-light">guides</em>
          </h1>
          <p className="text-white/65 text-[17px] font-light leading-[1.8] max-w-2xl mb-10">
            Comprehensive guides to Vietnamese tax, accounting, payroll, transfer pricing, audit, and profit repatriation for foreign-owned companies operating in Vietnam. Each guide is based on publicly available Vietnamese law and GDT practice as of the listed update date. Content is general in nature and does not constitute professional tax or legal advice.
          </p>
          <div className="flex flex-wrap gap-3">
            {pillars.map((p) => (
              <a
                key={p.slug}
                href={`#${p.slug}`}
                className="text-[12px] tracking-[0.1em] uppercase text-white/70 border border-gold/30 px-4 py-2 hover:bg-gold/10 transition-colors"
              >
                {p.heroTitle}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-8">
            {pillars.map((p) => (
              <article
                key={p.slug}
                id={p.slug}
                className="border border-ivory-warm p-8 hover:border-gold transition-colors group scroll-mt-32"
              >
                <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-4">{p.heroEyebrow}</div>
                <h2 className="font-serif text-[clamp(24px,3vw,32px)] font-light text-navy leading-[1.2] mb-3">
                  <Link href={p.path} className="hover:text-gold transition-colors">
                    {p.heroTitle} <em className="text-gold-light">{p.heroItalic}</em>
                  </Link>
                </h2>
                <p className="text-[15px] font-light text-ink-muted leading-[1.7] mb-6">
                  {p.description}
                </p>
                <div className="text-[12px] text-ink-muted mb-6">
                  Updated {new Date(p.dateModified ?? p.datePublished).toLocaleDateString("en-SG", { year: "numeric", month: "long", day: "numeric" })}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.keywords.slice(0, 4).map((k) => (
                    <span key={k} className="text-[11px] text-ink-muted border border-ivory-warm px-2 py-1">
                      {k}
                    </span>
                  ))}
                </div>
                <Link href={p.path} className="text-gold text-[15px] group-hover:translate-x-2 transition-transform inline-block">
                  Read the full guide →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory section-pad">
        <div className="container-page max-w-3xl">
          <div className="eyebrow">FAQ</div>
          <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-light text-navy leading-[1.15] mb-10">
            About the Vietnam tax guides
          </h2>
          <div className="border-t border-ivory-warm">
            {hubFaqs.map((f) => (
              <details key={f.question} className="faq-item">
                <summary>{f.question}</summary>
                <div className="faq-answer">{f.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Need a Vietnam tax specialist?"
        description="Free 30-minute consultation. We'll review your situation and outline a fixed-fee engagement."
        primaryLabel="Book a Free Consultation"
        secondaryLabel="Download the Compliance Checklist"
        secondaryHref="/resources/checklist"
      />
    </>
  );
}
