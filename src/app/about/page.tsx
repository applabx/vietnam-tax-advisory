import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaStrip } from "@/components/Section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "About Vietnam Tax Advisory",
  description:
    "Vietnam Tax Advisory is a Vietnam-based accounting, tax, and CFO advisory firm for foreign-owned companies. Big-4 heritage, 10+ years in practice, English-first.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]),
          ...personSchema(),
        ]}
      />

      <section className="bg-navy text-white section-pad pt-32">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <div className="eyebrow !text-gold-light">About</div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-white max-w-3xl mb-6">
            Built for <em className="text-gold-light">foreign-owned</em> companies in Vietnam
          </h1>
          <p className="text-white/65 text-[17px] font-light leading-[1.8] max-w-2xl">
            {siteConfig.name} is a Vietnam-based accounting, tax, payroll, transfer pricing, and CFO advisory firm. We work with foreign investors, FDI companies, startups, and regional headquarters.
          </p>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page max-w-3xl prose-vietnam">
          <h2>Our story</h2>
          <p>
            {siteConfig.legalName} was founded in {siteConfig.foundedYear} by a small group of Vietnamese tax professionals and Big-4 alumni who saw a gap in the market: foreign-owned companies in Vietnam needed an English-speaking, internationally-trained accounting partner that could deliver to the standard of a Singapore, Sydney, or Tokyo head office.
          </p>
          <p>
            Ten years on, we work with over a hundred foreign-owned companies across Ho Chi Minh City, Hanoi, and the industrial zones. Our team includes former Ministry of Finance auditors, Big-4 alumni, and licensed tax agents. We are registered as a tax agent with the General Department of Taxation and licensed to deliver statutory audit support.
          </p>

          <h2>What we believe</h2>
          <p>
            Three things:
          </p>
          <ol>
            <li><strong>Compliance is a baseline.</strong> A tax filing on time, a transfer-pricing file contemporaneous, a work permit renewed before expiry — that&apos;s the table stake. We deliver this for every client, every month.</li>
            <li><strong>English is non-negotiable.</strong> Your CFO, your head office, your board — they need clarity. We deliver financial statements, board packs, and GDT submissions in English. No translation overhead, no surprises.</li>
            <li><strong>Fixed fees build trust.</strong> Hourly billing creates misaligned incentives. We charge a transparent monthly retainer tied to the scope of work. You know what you&apos;re paying, and what you&apos;re getting.</li>
          </ol>

          <h2>How we engage</h2>
          <p>
            Our engagements are monthly retainers, scoped to your entity and your reporting calendar. Most clients start with a 30-minute free consultation, agree on a fixed-fee scope, and onboard in two to six weeks. From month three, you see the steady-state: monthly close within 10 working days, monthly management pack, quarterly review with your dedicated advisor.
          </p>
          <p>
            We work on cloud platforms (Xero, QuickBooks, Sage) so your head office has live visibility. We deliver in English, on your currency, on your timeline.
          </p>
        </div>
      </section>

      <section className="bg-ivory section-pad">
        <div className="container-page">
          <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] font-light text-navy leading-[1.15] mb-10">Leadership</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.founders.map((f) => (
              <div key={f.name} className="bg-white p-10 border border-ivory-warm">
                <div className="w-20 h-20 rounded-full bg-gold-pale text-gold flex items-center justify-center font-serif text-[28px] font-medium mb-5">
                  {f.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="font-serif text-[24px] font-medium text-navy mb-1">{f.name}</h3>
                <div className="text-gold text-[13px] tracking-[0.1em] uppercase mb-4">{f.role}</div>
                <p className="text-[14px] text-ink-muted leading-[1.8]">{f.credentials}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Want to work with us?"
        description="Book a free 30-minute consultation. We'll review your situation and outline a fixed-fee engagement."
      />
    </>
  );
}
