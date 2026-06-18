import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/lib/json-ld";
import { SectionHeader } from "@/components/Section";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = buildPageMetadata({
  title: "Vietnam Tax Advisory — Accounting, Tax & CFO Advisory for Foreign Companies",
  description:
    "Vietnam-based accounting, tax, payroll, transfer pricing, and CFO advisory for foreign investors, FDI companies, startups, and regional HQs. CIT 20% standard rate, VAT 10%, FCT for foreign contractors, transfer pricing under Decree 132/2020.",
  path: "/",
  keywords: [
    "Vietnam accounting",
    "Vietnam tax advisory",
    "Vietnam corporate income tax",
    "Vietnam VAT",
    "Vietnam transfer pricing",
    "Vietnam foreign contractor tax",
    "Vietnam payroll",
    "Vietnam CIT",
    "FDI accounting Vietnam",
    "Vietnam CFO services",
    "accounting for foreign companies in Vietnam",
    "Vietnam tax consultant",
    "Vietnam tax advisor",
    "Vietnam bookkeeping",
  ],
});

const services = [
  {
    href: "/services/accounting",
    name: "Accounting",
    desc: "VAS-compliant monthly bookkeeping, management accounts, and year-end financial statements prepared in English.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
    ),
  },
  {
    href: "/services/tax",
    name: "Tax Services",
    desc: "CIT, VAT, PIT, FCT filings, withholding tax, and ongoing tax planning with full GDT representation.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
    ),
  },
  {
    href: "/services/payroll",
    name: "Payroll & PIT",
    desc: "Compliant payroll, expatriate tax, social insurance, and year-end PIT finalisation for local and foreign staff.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
    ),
  },
  {
    href: "/services/transfer-pricing",
    name: "Transfer Pricing",
    desc: "Local file, master file, CbCR support, and TP audit defence aligned with Vietnam's Decree 132/2020.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
  },
  {
    href: "/services/statutory-audit",
    name: "Audit Support",
    desc: "Year-end preparation, audit liaison, IFRS reconciliation, and statutory compliance for licensed audits.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
    ),
  },
  {
    href: "/services/virtual-cfo",
    name: "Virtual CFO",
    desc: "Fractional CFO leadership for foreign-owned companies: forecasting, board reporting, cash, and strategy.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
  },
];

const industries = [
  { href: "/industries/saas", name: "SaaS & Software" },
  { href: "/industries/manufacturing", name: "Manufacturing" },
  { href: "/industries/ecommerce", name: "E-commerce" },
  { href: "/industries/technology-startups", name: "Tech Startups" },
  { href: "/industries/foreign-owned", name: "Foreign-Owned Companies" },
];

const countries = [
  { href: "/countries/singapore", name: "Singapore" },
  { href: "/countries/australia", name: "Australia" },
  { href: "/countries/united-states", name: "United States" },
  { href: "/countries/united-kingdom", name: "United Kingdom" },
  { href: "/countries/japan", name: "Japan" },
  { href: "/countries/korea", name: "South Korea" },
];

const complianceItems = [
  "Corporate Income Tax (CIT) — 20% standard rate",
  "Value Added Tax (VAT) — 0% / 5% / 8% / 10%",
  "Personal Income Tax (PIT) — progressive up to 35%",
  "Foreign Contractor Tax (FCT) — VAT + PIT deemed",
  "Social, Health & Unemployment Insurance",
  "Transfer Pricing Documentation (Decree 132/2020)",
  "VAS Financial Statements & Statutory Audit",
  "IFRS Reconciliation & Group Reporting",
  "State Bank of Vietnam (SBV) Capital & Loan Reporting",
];

const process = [
  { num: 1, title: "Free Consultation", desc: "We assess your entity structure, current filings, and obligations — at no charge, in English." },
  { num: 2, title: "Fixed-Fee Proposal", desc: "A clear scope of work and a transparent monthly retainer. No hourly billing, no surprises." },
  { num: 3, title: "Onboarding & Registration", desc: "We register as your tax agent, collect your records, and configure your reporting." },
  { num: 4, title: "Ongoing Compliance", desc: "Monthly, quarterly, and annual filings handled. Quarterly review with your dedicated advisor." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          serviceSchema({
            name: "Vietnam Tax & Accounting Advisory",
            description: siteConfig.description,
            path: "/",
            serviceType: "Accounting and Tax Advisory",
          }),
        ]}
      />

      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center bg-navy overflow-hidden pt-[140px] pb-16">
        <div
          aria-hidden
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(184,150,90,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(184,150,90,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          aria-hidden
          className="absolute w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            right: "-100px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "radial-gradient(circle, rgba(184,150,90,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="container-page relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-0">
          <div className="animate-fade-up">
            <div className="eyebrow !text-gold-light">Vietnam-based Advisory</div>
            <h1 className="text-white text-[clamp(40px,5vw,68px)] leading-[1.08] tracking-tight font-light mb-7">
              Accounting, Tax & CFO Advisory for <em className="text-gold-light">Foreign Companies</em> in Vietnam
            </h1>
            <p className="text-white/65 text-[17px] font-light leading-[1.8] mb-10 max-w-[520px]">
              We help foreign investors, FDI companies, startups, and regional headquarters stay fully compliant with Vietnamese tax, accounting, and payroll — in plain English, with predictable monthly fees.
            </p>
            <div className="flex flex-wrap gap-5 items-center">
              <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
              <Link href="/services" className="btn-ghost">
                Explore Services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[12px] text-white/50 tracking-[0.08em] uppercase">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden />
                Vietnam-licensed tax agent
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden />
                English-first reporting
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden />
                Bilingual EN / VI
              </span>
            </div>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="border border-gold/20 rounded bg-white/[0.02] divide-y divide-gold/10">
              <div className="p-7">
                <div className="font-serif text-[36px] font-light text-gold-light leading-none mb-2">FDI specialists</div>
                <div className="text-[13px] text-white/55">Built for 100%-foreign-owned companies, holding structures, and regional HQs.</div>
              </div>
              <div className="p-7">
                <div className="font-serif text-[36px] font-light text-gold-light leading-none mb-2">English-first</div>
                <div className="text-[13px] text-white/55">All reports, contracts, and GDT submissions explained in plain English.</div>
              </div>
              <div className="p-7">
                <div className="font-serif text-[36px] font-light text-gold-light leading-none mb-2">Fixed monthly fees</div>
                <div className="text-[13px] text-white/55">Predictable retainers — no hourly billing, no surprise invoices.</div>
              </div>
              <div className="p-7">
                <div className="font-serif text-[36px] font-light text-gold-light leading-none mb-2">Proactive alerts</div>
                <div className="text-[13px] text-white/55">We track regulatory changes and flag risk before it becomes a penalty.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="bg-gold">
        <div className="container-page py-5 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-navy">
          {["Vietnam-Licensed Tax Agent", "English-first reporting", "Bilingual EN / VI", "Fixed-fee engagements", "Cloud-based bookkeeping"].map((t) => (
            <div key={t} className="text-[12px] font-medium tracking-[0.1em] uppercase flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M2 8l3.5 3.5L14 4" stroke="#0d1b2a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
            <SectionHeader
              eyebrow="What We Do"
              title={<>End-to-end financial <em>compliance</em> in Vietnam</>}
            />
            <p className="text-ink-muted text-[16px] font-light leading-[1.8] max-w-[540px]">
              From day-one incorporation through annual audits and the repatriation of profits, we handle every financial obligation so you can focus on running the business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border border-ivory-warm">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-white p-10 border-ivory-warm border-t border-r last:border-r-0 even:border-r-0 transition-colors hover:bg-navy"
              >
                <div className="w-[52px] h-[52px] rounded-full bg-gold-pale text-gold group-hover:bg-gold/15 group-hover:text-gold flex items-center justify-center mb-7 transition-colors">
                  {s.icon}
                </div>
                <h3 className="font-serif text-[22px] font-medium text-navy group-hover:text-white mb-3 transition-colors tracking-wide">
                  {s.name}
                </h3>
                <p className="text-[14px] font-light text-ink-muted group-hover:text-white/55 leading-[1.8] transition-colors mb-5">
                  {s.desc}
                </p>
                <span className="text-gold text-[15px] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-navy section-pad">
        <div className="container-page">
          <SectionHeader
            light
            eyebrow="Why Vietnam Tax Advisory"
            title={<>The partner foreign <em>investors choose</em></>}
            sub="A specialist firm purpose-built for foreign-owned companies operating in Vietnam."
          />
          <div className="grid lg:grid-cols-2 gap-16 mt-14">
            <div className="divide-y divide-gold/15 border-y border-gold/15">
              {[
                { num: "01", title: "Built for FDI", desc: "We work with 100%-foreign-owned companies, holding structures, and regional HQs every day. We know the GDT's expectations and the traps that catch first-time entrants." },
                { num: "02", title: "English-first reporting", desc: "Every financial statement, board pack, and filing is delivered in English. Your CFO and HQ get the clarity they need without translation overhead." },
                { num: "03", title: "Fixed-fee transparency", desc: "A single monthly retainer covers the agreed scope. No hourly billing, no surprise invoices, no scope creep." },
                { num: "04", title: "Vietnamese expertise", desc: "Vietnam-resident team working in VAS, Vietnamese tax law, and GDT practice day-to-day. We respond in English and Vietnamese." },
                { num: "05", title: "Modern, cloud-based", desc: "Xero, QuickBooks, and other cloud platforms. You see live numbers from anywhere, in your currency, on your schedule." },
              ].map((item) => (
                <div key={item.num} className="py-9 grid grid-cols-[60px_1fr] gap-6 hover:pl-2 transition-all">
                  <div className="font-serif text-[15px] text-gold pt-1">{item.num}</div>
                  <div>
                    <h3 className="font-serif text-[22px] font-normal text-white mb-2">{item.title}</h3>
                    <p className="text-[14px] text-white/55 font-light leading-[1.8]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="border border-gold/20 rounded bg-white/[0.03] p-10">
                <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-7">Compliance coverage</div>
                <ul className="space-y-4">
                  {complianceItems.map((c) => (
                    <li key={c} className="flex items-start gap-4 text-[14px] text-white/75 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold text-navy p-7 rounded text-center hidden md:block">
                <div className="font-serif text-[24px] font-light leading-tight mb-1 max-w-[180px]">GDT-registered tax agent</div>
                <div className="text-[10px] font-medium tracking-[0.12em] uppercase mt-1">English-first reporting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-ivory section-pad">
        <div className="container-page">
          <SectionHeader
            eyebrow="How It Works"
            title={<>Onboarding in <em>four steps</em></>}
            sub="From first contact to full compliance in as little as two weeks."
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
            {process.map((p) => (
              <div key={p.num} className="text-center group">
                <div className="w-20 h-20 rounded-full bg-white border border-gold-pale group-hover:bg-navy group-hover:border-navy text-gold group-hover:text-gold-light font-serif text-[24px] font-light flex items-center justify-center mx-auto mb-7 transition-colors">
                  {p.num}
                </div>
                <h3 className="font-serif text-[20px] font-medium text-navy mb-3">{p.title}</h3>
                <p className="text-[13px] text-ink-muted font-light leading-[1.8]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES + COUNTRIES */}
      <section className="bg-white section-pad">
        <div className="container-page grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader
              eyebrow="By Industry"
              title={<>We know your <em>business model</em></>}
              sub="From SaaS to manufacturing, our team understands the revenue, expense, and compliance patterns that come with your sector."
            />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {industries.map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="flex items-center justify-between p-5 border border-ivory-warm hover:border-gold transition-colors group"
                  >
                    <span className="font-serif text-[18px] text-navy group-hover:text-gold transition-colors">{i.name}</span>
                    <span className="text-gold text-[15px]">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader
              eyebrow="By Country of Origin"
              title={<>Working with your <em>home country</em></>}
              sub="We deliver to head offices in Singapore, Sydney, Tokyo, Seoul, London, and New York — and reconcile with the standards they expect."
            />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {countries.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="flex items-center justify-between p-5 border border-ivory-warm hover:border-gold transition-colors group"
                  >
                    <span className="font-serif text-[18px] text-navy group-hover:text-gold transition-colors">For {c.name} companies</span>
                    <span className="text-gold text-[15px]">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-navy section-pad">
        <div className="container-page text-center">
          <div className="eyebrow justify-center !text-gold-light">Get Started</div>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-light text-white leading-[1.15] max-w-2xl mx-auto mb-6">
            Talk to a Vietnam tax <em className="text-gold-light">specialist</em>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-[16px] font-light leading-[1.8] mb-10">
            Free 30-minute consultation. We&apos;ll review your current setup, identify any compliance gaps, and explain what ongoing support would look like.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
            <Link href="/resources/faq" className="btn-outline-light">Read the FAQ</Link>
          </div>
        </div>
      </section>
    </>
  );
}
