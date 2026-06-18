import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaStrip } from "@/components/Section";

export const metadata: Metadata = buildPageMetadata({
  title: "Resources & Downloads",
  description:
    "Vietnam tax calendar, compliance checklist, company setup guide, and FAQ hub — free downloads and reference material for foreign-owned companies in Vietnam.",
  path: "/resources",
});

const items = [
  {
    href: "/resources/faq",
    title: "FAQ Hub",
    desc: "110+ questions on CIT, VAT, PIT, FCT, payroll, social insurance, audits, FDI, transfer pricing, repatriation, and work permits.",
  },
  {
    href: "/resources/tax-calendar",
    title: "Vietnam Tax Calendar",
    desc: "All monthly, quarterly, and annual filing deadlines in one place. Save it to your calendar.",
  },
  {
    href: "/resources/checklist",
    title: "Vietnam Tax Compliance Checklist",
    desc: "The 60-point checklist we use with new clients. Download, print, and tick off as you go.",
  },
  {
    href: "/resources/setup-guide",
    title: "Vietnam Company Setup Guide",
    desc: "The end-to-end playbook for incorporating a foreign-owned company in Vietnam.",
  },
];

export default function ResourcesIndex() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }])} />
      <section className="bg-navy text-white section-pad pt-32">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
          <div className="eyebrow !text-gold-light">Resources</div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-white max-w-3xl mb-6">
            Free <em className="text-gold-light">downloads</em> & reference
          </h1>
          <p className="text-white/65 text-[17px] font-light leading-[1.8] max-w-2xl">
            Practical resources we give to clients: tax calendar, compliance checklist, company setup guide, and 100+ FAQs on Vietnam tax and accounting.
          </p>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-px bg-ivory-warm border border-ivory-warm">
            {items.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="group bg-white p-10 hover:bg-navy transition-colors"
              >
                <h2 className="font-serif text-[26px] font-medium text-navy group-hover:text-white mb-3 transition-colors">{i.title}</h2>
                <p className="text-[15px] text-ink-muted group-hover:text-white/60 leading-[1.7] font-light transition-colors">{i.desc}</p>
                <span className="text-gold text-[14px] mt-4 inline-block opacity-0 group-hover:opacity-100 transition-opacity">Open →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Want a tailored walkthrough?"
        description="Book a free 30-minute consultation. We'll review your situation and tell you which resources are most relevant."
      />
    </>
  );
}
