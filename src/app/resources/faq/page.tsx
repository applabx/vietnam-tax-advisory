import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaStrip } from "@/components/Section";
import { faqTopics, allFaqs } from "@/lib/faq-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Vietnam Tax & Accounting FAQ Hub",
  description:
    "100+ frequently asked questions on Vietnam tax, accounting, payroll, social insurance, audits, FDI compliance, transfer pricing, profit repatriation, and work permits.",
  path: "/resources/faq",
  keywords: ["Vietnam tax FAQ", "Vietnam accounting FAQ", "Vietnam compliance FAQ"],
});

export default function FAQHubPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }, { name: "FAQ", path: "/resources/faq" }]),
          faqSchema(allFaqs),
        ]}
      />

      <section className="bg-navy text-white section-pad pt-32">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "FAQ" }]} />
          <div className="eyebrow !text-gold-light">FAQ Hub</div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-white max-w-3xl mb-6">
            Vietnam tax & accounting <em className="text-gold-light">FAQ</em>
          </h1>
          <p className="text-white/65 text-[17px] font-light leading-[1.8] max-w-2xl mb-10">
            {allFaqs.length} frequently asked questions across {faqTopics.length} topics — covering corporate income tax, VAT, PIT, foreign contractor tax, payroll, social insurance, accounting requirements, audits, FDI companies, transfer pricing, profit repatriation, and work permits.
          </p>
          <div className="flex flex-wrap gap-3">
            {faqTopics.map((t) => (
              <a
                key={t.slug}
                href={`#${t.slug}`}
                className="text-[12px] tracking-[0.1em] uppercase text-white/70 border border-gold/30 px-4 py-2 hover:bg-gold/10 transition-colors"
              >
                {t.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page max-w-3xl">
          {faqTopics.map((t) => (
            <div key={t.slug} id={t.slug} className="mb-20 scroll-mt-32">
              <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-light text-navy leading-[1.15] mb-3">
                {t.name}
              </h2>
              <p className="text-ink-muted text-[15px] font-light leading-[1.8] mb-8 max-w-2xl">{t.description}</p>
              <div className="border-t border-ivory-warm">
                {t.faqs.map((f) => (
                  <details key={f.question} className="faq-item">
                    <summary>{f.question}</summary>
                    <div className="faq-answer">{f.answer}</div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaStrip
        title="Have a question not covered here?"
        description="Book a free 30-minute consultation. We'll answer your specific question and tell you whether we can help."
        secondaryLabel="Download the Compliance Checklist"
        secondaryHref="/resources/checklist"
      />
    </>
  );
}
