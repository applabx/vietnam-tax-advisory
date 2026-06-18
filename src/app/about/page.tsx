import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaStrip } from "@/components/Section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "About Vietnam Tax Advisory",
  description:
    "Vietnam Tax Advisory is a Vietnam-based accounting and tax services firm serving foreign-owned companies. We focus on Vietnamese accounting, tax, payroll, transfer pricing, and company setup.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]),
        ]}
      />

      <section className="bg-navy text-white section-pad pt-32">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <div className="eyebrow !text-gold-light">About</div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-white max-w-3xl mb-6">
            About <em className="text-gold-light">Vietnam Tax Advisory</em>
          </h1>
          <p className="text-white/65 text-[17px] font-light leading-[1.8] max-w-2xl">
            Vietnam Tax Advisory is a Vietnam-based accounting and tax services firm focused on foreign-owned companies operating in Vietnam.
          </p>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page max-w-3xl prose-vietnam">
          <h2>What we do</h2>
          <p>
            We provide accounting, tax, payroll, transfer pricing, and company setup services for foreign-owned companies (WFOEs, joint ventures, branches) operating in Vietnam. We work with Vietnamese Accounting Standards (VAS), Vietnamese tax law, and the General Department of Taxation (GDT) practice.
          </p>
          <p>
            Our content covers Vietnamese tax rates (CIT 20% standard, VAT 10% standard), filings (monthly VAT, quarterly CIT provisional, annual CIT finalisation), compliance obligations (transfer pricing under Decree 132/2020, foreign contractor withholding, payroll and social insurance), and entity setup (IRC and ERC licensing).
          </p>

          <h2>What we do not publish</h2>
          <p>
            We do not publish individual team member profiles, credentials, biographies, or ratings until those details have been verified and the relevant individuals have consented to publication. We do not publish named client testimonials, case studies with real company names, or numerical ratings (e.g. "4.9 stars from 127 reviews") that cannot be independently verified.
          </p>
          <p>
            Where a page contains examples, the examples are clearly labelled as illustrative or hypothetical and do not refer to real engagements.
          </p>

          <h2>How we engage</h2>
          <p>
            Engagements are typically scoped around monthly compliance and ad-hoc projects. Initial conversations are usually 30 minutes and at no charge.
          </p>

          <h2>Geographic coverage</h2>
          <p>
            We work with foreign-owned companies across Vietnam, with our registered office at {siteConfig.address.street}, {siteConfig.address.district}, {siteConfig.address.city}. We routinely work with parent companies headquartered in Singapore, Australia, the United States, the United Kingdom, Japan, and South Korea, and with other home jurisdictions where Vietnam has a double tax treaty.
          </p>

          <h2>Contact</h2>
          <p>
            Email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call {siteConfig.phone}. See the <a href="/contact">contact page</a> for a consultation request.
          </p>
        </div>
      </section>

      <CtaStrip
        title="Want to discuss your Vietnam tax position?"
        description="Book a free 30-minute consultation. We will review your situation and explain what an engagement would look like."
      />
    </>
  );
}
