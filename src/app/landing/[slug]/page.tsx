import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaStrip } from "@/components/Section";
import { landingPages, landingSlugs } from "@/lib/landing-data";

export function generateStaticParams() {
  return landingSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = landingPages[params.slug];
  if (!p) return {};
  return buildPageMetadata({
    title: p.title,
    description: p.description,
    path: p.path,
    keywords: p.keywords,
    ogType: "website",
  });
}

export default function LandingPageRoute({ params }: { params: { slug: string } }) {
  const p = landingPages[params.slug];
  if (!p) {
    return (
      <div className="container-page py-32">
        <h1>Landing page not found</h1>
      </div>
    );
  }
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: p.title, path: p.path },
          ]),
          serviceSchema({
            name: p.title,
            description: p.description,
            path: p.path,
            serviceType: p.title,
          }),
          faqSchema(p.faqs),
        ]}
      />

      {/* Hero */}
      <section className="bg-navy text-white section-pad pt-32">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: p.title }]} />
          <div className="eyebrow !text-gold-light">Service</div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-white max-w-3xl mb-6">
            {p.h1} <em className="text-gold-light">{p.italic}</em>
          </h1>
          <p className="text-white/65 text-[17px] font-light leading-[1.8] max-w-2xl mb-4">
            {p.intro}
          </p>
          <p className="text-gold-light text-[14px] tracking-[0.1em] uppercase mb-10">{p.heroSubtitle}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
            <Link href="/services" className="btn-outline-light">See all services</Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="eyebrow">Why us</div>
          <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-navy leading-[1.15] mb-12 max-w-2xl">
            What you <em>get</em>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.benefits.map((b) => (
              <div key={b.title} className="bg-ivory border border-ivory-warm p-8">
                <h3 className="font-serif text-[20px] font-medium text-navy mb-3">{b.title}</h3>
                <p className="text-[14px] text-ink-muted leading-[1.8]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-ivory section-pad">
        <div className="container-page">
          <div className="eyebrow">How it works</div>
          <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-navy leading-[1.15] mb-12 max-w-2xl">
            From first contact to <em>steady state</em>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {p.process.map((s) => (
              <div key={s.step} className="border-t-2 border-gold pt-6">
                <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-3">Step {s.step}</div>
                <h3 className="font-serif text-[22px] font-medium text-navy mb-2">{s.title}</h3>
                <p className="text-[14px] text-ink-muted font-light leading-[1.7]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="eyebrow">Pricing</div>
          <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-navy leading-[1.15] mb-10 max-w-2xl">
            Indicative <em>fees</em>
          </h2>
          <div className="border border-ivory-warm bg-ivory">
            <table className="w-full">
              <thead>
                <tr className="border-b border-ivory-warm">
                  <th className="text-left p-5 text-[12px] tracking-[0.12em] uppercase text-ink-muted font-medium">Item</th>
                  <th className="text-right p-5 text-[12px] tracking-[0.12em] uppercase text-ink-muted font-medium">Fee</th>
                </tr>
              </thead>
              <tbody>
                {p.pricing.map((c, i) => (
                  <tr key={c.item} className={i < p.pricing.length - 1 ? "border-b border-ivory-warm" : ""}>
                    <td className="p-5 text-[14px] text-ink-mid">{c.item}</td>
                    <td className="p-5 text-[14px] text-navy font-medium text-right whitespace-nowrap">{c.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-ink-muted mt-4">Fees are indicative and depend on transaction volume, complexity, and reporting requirements. Request a tailored proposal.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivory section-pad">
        <div className="container-page max-w-3xl">
          <div className="eyebrow">FAQ</div>
          <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-navy leading-[1.15] mb-10">
            Frequently asked <em>questions</em>
          </h2>
          <div className="border-t border-ivory-warm">
            {p.faqs.map((f) => (
              <details key={f.question} className="faq-item">
                <summary>{f.question}</summary>
                <div className="faq-answer">{f.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-white section-pad">
        <div className="container-page grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-5">Related services</h3>
            <ul className="space-y-2">
              {p.relatedServices.map((s) => (
                <li key={s.href}><Link href={s.href} className="text-[14px] text-navy hover:text-gold transition-colors">→ {s.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-5">By country</h3>
            <ul className="space-y-2">
              {p.relatedCountries.map((c) => (
                <li key={c.href}><Link href={c.href} className="text-[14px] text-navy hover:text-gold transition-colors">→ {c.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-5">By industry</h3>
            <ul className="space-y-2">
              {p.relatedIndustries.map((i) => (
                <li key={i.href}><Link href={i.href} className="text-[14px] text-navy hover:text-gold transition-colors">→ {i.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaStrip
        title={`Ready to discuss ${p.italic.toLowerCase()}?`}
        description="Free 30-minute consultation. We'll review your situation and outline a fixed-fee engagement."
        primaryLabel="Book a Free Consultation"
        secondaryLabel="Download the Compliance Checklist"
        secondaryHref="/resources/checklist"
      />
    </>
  );
}
