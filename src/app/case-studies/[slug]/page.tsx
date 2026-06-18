import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaStrip } from "@/components/Section";
import { caseStudies } from "@/lib/case-studies-data";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = caseStudies.find((x) => x.slug === params.slug);
  if (!c) return {};
  return buildPageMetadata({
    title: c.hero.title,
    description: c.hero.summary,
    path: `/case-studies/${c.slug}`,
    keywords: [c.industry, `Vietnam ${c.industry.toLowerCase()}`, `${c.origin} company Vietnam`],
    ogType: "article",
    publishedTime: "2025-01-15T00:00:00Z",
    modifiedTime: "2025-01-15T00:00:00Z",
  });
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const c = caseStudies.find((x) => x.slug === params.slug);
  if (!c) notFound();
  const path = `/case-studies/${c.slug}`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: c.hero.title,
            description: c.hero.summary,
            path,
            authorName: "Vietnam Tax Advisory",
            datePublished: "2025-01-15",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
            { name: c.name, path },
          ]),
        ]}
      />

      <section className="bg-navy text-white section-pad pt-32">
        <div className="container-page">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Case Studies", href: "/case-studies" },
              { label: c.name },
            ]}
          />
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] tracking-[0.16em] uppercase text-gold border border-gold/40 px-3 py-1 rounded-full">
              {c.industry}
            </span>
            <span className="text-[11px] tracking-[0.16em] uppercase text-white/50">{c.origin}</span>
          </div>
          <h1 className="font-serif text-[clamp(32px,4.5vw,56px)] font-light leading-[1.1] text-white max-w-3xl mb-6">
            {c.hero.title}
          </h1>
          <p className="text-white/65 text-[16px] font-light leading-[1.8] max-w-2xl">
            {c.hero.summary}
          </p>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page grid lg:grid-cols-[1fr_300px] gap-12">
          <div className="prose-vietnam max-w-none">
            <h2>Client</h2>
            <p>{c.client}</p>

            <h2>Challenge</h2>
            <p>{c.challenge}</p>

            <h2>Approach</h2>
            <p>{c.approach}</p>

            <h2>Outcome</h2>
            <p>{c.outcome}</p>

            <h2>Ongoing engagement</h2>
            <p>{c.ongoing}</p>
          </div>
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="bg-ivory border border-ivory-warm p-7 mb-6">
              <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-5">Engagement at a glance</div>
              <dl className="space-y-4">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="text-[12px] text-ink-muted uppercase tracking-wide">{m.label}</dt>
                    <dd className="font-serif text-[20px] text-navy font-medium">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <Link href="/case-studies" className="btn-outline w-full text-center block">
              ← All case studies
            </Link>
          </aside>
        </div>
      </section>

      <CtaStrip
        title="Want a similar engagement?"
        description="Book a free 30-minute consultation. We'll review your situation and outline a fixed-fee engagement."
      />
    </>
  );
}
