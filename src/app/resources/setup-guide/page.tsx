import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaStrip } from "@/components/Section";
import SetupGuideGate from "./SetupGuideGate";

export const metadata: Metadata = buildPageMetadata({
  title: "Vietnam Company Setup Guide (Free PDF)",
  description:
    "The end-to-end playbook for setting up a 100%-foreign-owned company in Vietnam. Documents, timelines, costs, and the common mistakes we see.",
  path: "/resources/setup-guide",
});

const steps = [
  { phase: "1. Pre-engagement", duration: "1–2 weeks", source: "Law on Investment 2020 (Law 61/2020/QH14) Art. 31–33", items: [
    "Confirm the sector is open to foreign investment",
    "Confirm the entity type (LLC vs JSC) and capital amount",
    "Engage local counsel for the licensing authority liaison",
    "Document preparation: parent-company documents, passports, project proposal",
  ]},
  { phase: "2. Investment Registration Certificate (IRC)", duration: "3–6 weeks", source: "Law on Investment 2020 Art. 37–38; Decree 31/2021/ND-CP Art. 32–36", items: [
    "Submit the IRC application to the Department of Planning and Investment",
    "Respond to queries on project scope, capital, and environmental impact",
    "Receive the IRC recording the project, capital, scope, and investor",
  ]},
  { phase: "3. Enterprise Registration Certificate (ERC)", duration: "1–2 weeks", source: "Law on Enterprises 2020 (Law 59/2020/QH14) Art. 26–28; Decree 01/2021/ND-CP Art. 14–17", items: [
    "Submit the ERC application with the company's charter and legal representative",
    "Receive the ERC recording the entity name, address, charter, and members",
  ]},
  { phase: "4. Sector sub-licences (if applicable)", duration: "4–12 weeks", source: "Various ministry regulations; conditional sectors under Law on Investment 2020 Annex IV", items: [
    "Conditional sectors (telecoms, education, certain logistics) require sub-licences from the relevant ministry",
    "Each sub-licence has its own timeline and document requirements",
  ]},
  { phase: "5. Post-licence registrations", duration: "2–4 weeks", source: "Law on Tax Administration 2019 Art. 35; Law on Social Insurance 2014 Art. 27; SBV Circular 06/2024/TT-NHNN", items: [
    "Tax code registration with the General Department of Taxation",
    "Social insurance employer registration with the social insurance agency",
    "Company seal registration",
    "Bank account opening (in the company's name)",
    "SBV capital registration (for FDI)",
    "Customs registration (where applicable)",
  ]},
  { phase: "6. Operational readiness", duration: "2–4 weeks", source: "Circular 200/2014/TT-BTC (VAS chart of accounts); Labour Code 2019 (Law 45/2019/QH13)", items: [
    "Set up the chart of accounts and the accounting system",
    "Recruit and onboard the first employees (with work permits for foreign staff)",
    "Register the office lease and the legal address",
    "Brief the management team on the compliance calendar",
  ]},
];

export default function SetupGuidePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Company Setup Guide", path: "/resources/setup-guide" },
        ])}
      />

      <section className="bg-navy text-white section-pad pt-32">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Company Setup Guide" }]} />
          <div className="eyebrow !text-gold-light">Free download</div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-white max-w-3xl mb-6">
            Vietnam <em className="text-gold-light">company setup guide</em>
          </h1>
          <p className="text-white/65 text-[17px] font-light leading-[1.8] max-w-2xl">
            The end-to-end playbook for incorporating a 100%-foreign-owned company in Vietnam. Documents, timelines, costs, and the common mistakes we see.
          </p>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page grid lg:grid-cols-[1fr_400px] gap-12">
          <div>
            <h2 className="font-serif text-[28px] font-light text-navy mb-10">The six-phase playbook</h2>
            {steps.map((s) => (
              <div key={s.phase} className="mb-10 border-l-2 border-gold pl-6">
                <h3 className="font-serif text-[24px] font-medium text-navy mb-2">{s.phase}</h3>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
                  <div className="text-[12px] tracking-[0.14em] uppercase text-gold">{s.duration}</div>
                  <div className="text-[11px] text-ink-muted italic">Source: {s.source}</div>
                </div>
                <ul className="space-y-2 text-[14px] text-ink-mid leading-[1.7]">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-gold mt-1">·</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-ivory border border-ivory-warm p-6 mt-8">
              <h3 className="font-serif text-[18px] font-medium text-navy mb-3">Primary sources cited in this guide</h3>
              <ul className="text-[12px] text-ink-muted space-y-1.5 leading-[1.6]">
                <li>Law on Investment 2020 (Law 61/2020/QH14) and Decree 31/2021/ND-CP</li>
                <li>Law on Enterprises 2020 (Law 59/2020/QH14) and Decree 01/2021/ND-CP</li>
                <li>Law on Tax Administration 2019 (Law 38/2019/QH14); Decree 126/2020/ND-CP</li>
                <li>Labour Code 2019 (Law 45/2019/QH13); Decree 152/2020/ND-CP (foreign workers)</li>
                <li>Circular 200/2014/TT-BTC (VAS chart of accounts)</li>
                <li>SBV Circular 06/2024/TT-NHNN (FDI capital accounts)</li>
              </ul>
            </div>
          </div>
          <aside className="lg:sticky lg:top-24 self-start">
            <SetupGuideGate />
          </aside>
        </div>
      </section>

      <CtaStrip
        title="Want us to handle the setup end-to-end?"
        description="From document preparation to post-licence registrations — one engagement, one fee, predictable timeline."
      />
    </>
  );
}
