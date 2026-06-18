import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/lib/json-ld";
import { breadcrumbSchema, articleSchema, faqSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaStrip } from "@/components/Section";
import { buildPageMetadata } from "@/lib/seo";
import type { FAQ } from "@/lib/faq-data";

export type PillarPageData = {
  slug: string;
  path: string;
  title: string;
  description: string;
  keywords: string[];
  heroEyebrow: string;
  heroTitle: string;
  heroItalic: string;
  heroDescription: string;
  tableOfContents: { id: string; label: string }[];
  intro: string;
  sections: { id: string; heading: string; body: string | string[] }[];
  faqs: FAQ[];
  relatedPillars: { slug: string; label: string; href: string }[];
  relatedServices: { label: string; href: string }[];
  countries: { label: string; href: string }[];
  industries: { label: string; href: string }[];
  datePublished: string;
  dateModified?: string;
};

export function buildPillarMetadata(page: PillarPageData): Metadata {
  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    keywords: page.keywords,
    ogType: "article",
    publishedTime: page.datePublished,
    modifiedTime: page.dateModified ?? page.datePublished,
  });
}

export function PillarPage({ page }: { page: PillarPageData }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: page.title, path: page.path },
          ]),
          articleSchema({
            headline: page.title,
            description: page.description,
            path: page.path,
            datePublished: page.datePublished,
            dateModified: page.dateModified ?? page.datePublished,
            keywords: page.keywords,
          }),
          faqSchema(page.faqs),
        ]}
      />

      <section className="bg-navy text-white section-pad pt-32">
        <div className="container-page">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Guides", href: "/guides" },
              { label: page.heroTitle },
            ]}
          />
          <div className="eyebrow !text-gold-light">{page.heroEyebrow}</div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-white max-w-3xl mb-6">
            {page.heroTitle} <em className="text-gold-light">{page.heroItalic}</em>
          </h1>
          <p className="text-white/65 text-[17px] font-light leading-[1.8] max-w-2xl mb-8">
            {page.heroDescription}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-white/50 tracking-[0.08em] uppercase">
            <span>Published by Vietnam Tax Advisory</span>
            <span>·</span>
            <span>Updated {new Date(page.dateModified ?? page.datePublished).toLocaleDateString("en-SG", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page grid lg:grid-cols-[1fr_300px] gap-12">
          <article className="prose-vietnam max-w-none">
            <p className="lead">{page.intro}</p>

            <div className="not-prose bg-ivory border border-ivory-warm p-6 my-10">
              <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-4">In this guide</div>
              <ul className="space-y-2">
                {page.tableOfContents.map((t) => (
                  <li key={t.id} className="text-[14px]">
                    <a href={`#${t.id}`} className="text-navy hover:text-gold transition-colors">
                      → {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {page.sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-32">
                <h2>{s.heading}</h2>
                {Array.isArray(s.body) ? (
                  s.body.map((para, i) => <p key={i}>{para}</p>)
                ) : (
                  <p>{s.body}</p>
                )}
              </section>
            ))}

            <section id="faq" className="scroll-mt-32">
              <h2>Frequently asked questions</h2>
              <p className="text-ink-muted text-[15px] font-light">
                The most common questions our tax and accounting team receives about {page.title.toLowerCase()}.
              </p>
              <div className="not-prose border-t border-ivory-warm mt-6">
                {page.faqs.map((f) => (
                  <details key={f.question} className="faq-item">
                    <summary>{f.question}</summary>
                    <div className="faq-answer">{f.answer}</div>
                  </details>
                ))}
              </div>
            </section>

            <section id="about-this-content" className="not-prose border-t border-ivory-warm mt-16 pt-10">
              <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-3">About this content</div>
              <p className="text-[14px] text-ink-muted leading-[1.8] max-w-2xl">
                This guide is published by Vietnam Tax Advisory. It is general in nature and based on publicly available Vietnamese law and GDT practice as of {new Date(page.dateModified ?? page.datePublished).toLocaleDateString("en-SG", { year: "numeric", month: "long", day: "numeric" })}. It does not constitute professional tax or legal advice. For advice specific to your situation, contact us via the <a href="/contact" className="text-gold hover:underline">contact page</a>.
              </p>
            </section>
          </article>

          <aside className="lg:sticky lg:top-24 self-start space-y-6">
            <div className="bg-ivory border border-ivory-warm p-7">
              <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-4">Quick facts</div>
              <ul className="space-y-3 text-[13px] text-ink-mid">
                <li className="flex justify-between border-b border-ivory-warm pb-3">
                  <span className="text-ink-muted">Jurisdiction</span>
                  <span className="text-navy font-medium">Vietnam</span>
                </li>
                <li className="flex justify-between border-b border-ivory-warm pb-3">
                  <span className="text-ink-muted">Audience</span>
                  <span className="text-navy font-medium">FDI / foreign-owned</span>
                </li>
                <li className="flex justify-between border-b border-ivory-warm pb-3">
                  <span className="text-ink-muted">Languages</span>
                  <span className="text-navy font-medium">EN / VI</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-ink-muted">Last reviewed</span>
                  <span className="text-navy font-medium">{new Date(page.dateModified ?? page.datePublished).toLocaleDateString("en-SG", { year: "numeric", month: "short" })}</span>
                </li>
              </ul>
              <Link href="/contact" className="btn-primary block text-center mt-6 w-full">
                Talk to a specialist
              </Link>
            </div>

            <div className="bg-white border border-ivory-warm p-7">
              <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-4">Related pillars</div>
              <ul className="space-y-3">
                {page.relatedPillars.map((p) => (
                  <li key={p.slug}>
                    <Link href={p.href} className="text-[13px] text-navy hover:text-gold transition-colors leading-[1.6] block">
                      → {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-ivory-warm p-7">
              <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-4">Related services</div>
              <ul className="space-y-3">
                {page.relatedServices.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="text-[13px] text-navy hover:text-gold transition-colors leading-[1.6] block">
                      → {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-ivory-warm p-7">
              <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-4">By country</div>
              <ul className="space-y-2">
                {page.countries.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className="text-[12px] text-navy hover:text-gold transition-colors leading-[1.6] block">
                      → {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaStrip
        title={`Need help with ${page.heroItalic.toLowerCase()}?`}
        description="Free 30-minute consultation with a Vietnam tax specialist. We'll review your situation and outline a fixed-fee engagement."
        primaryLabel="Book a Free Consultation"
        secondaryLabel="Download the Compliance Checklist"
        secondaryHref="/resources/checklist"
      />
    </>
  );
}
