import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaStrip } from "@/components/Section";

export const metadata: Metadata = buildPageMetadata({
  title: "Vietnam Tax Calendar 2026 — Monthly, Quarterly & Annual Deadlines",
  description:
    "All Vietnam tax filing and payment deadlines in one place: monthly VAT, quarterly CIT, annual CIT finalisation, PIT, FCT, social insurance, and audit. With primary-source citations for each deadline.",
  path: "/resources/tax-calendar",
  keywords: [
    "Vietnam tax calendar",
    "Vietnam tax deadlines 2026",
    "Vietnam CIT filing deadline",
    "Vietnam VAT due date",
    "Vietnam PIT finalisation",
    "Vietnam tax administration",
  ],
});

const monthly = [
  { day: "20th", item: "VAT return (Form 01/GTGT) for prior month", source: "Circular 219/2013/TT-BTC, Article 11" },
  { day: "20th", item: "PIT withholding declaration (Form 05/KK-TNCN) for prior month", source: "Circular 92/2015/TT-BTC, Article 1" },
  { day: "20th", item: "FCT declaration and remittance (for prior month's foreign-contractor payments)", source: "Circular 103/2014/TT-BTC" },
  { day: "Last day of month", item: "Social insurance monthly contribution file (for prior month)", source: "Law on Social Insurance 2014 (Law 58/2014/QH13), Article 102" },
];

const quarterly = [
  { month: "Apr 30", item: "Q1 CIT provisional payment", source: "Law on CIT Art. 17; Circular 78/2014/TT-BTC" },
  { month: "Jul 31", item: "Q2 CIT provisional payment", source: "Law on CIT Art. 17; Circular 78/2014/TT-BTC" },
  { month: "Oct 31", item: "Q3 CIT provisional payment", source: "Law on CIT Art. 17; Circular 78/2014/TT-BTC" },
  { month: "Jan 31", item: "Q4 CIT provisional payment", source: "Law on CIT Art. 17; Circular 78/2014/TT-BTC" },
  { month: "Last day of month after quarter", item: "VAT return (Form 01/GTKT) for quarterly filers", source: "Circular 219/2013/TT-BTC, Article 11" },
];

const annual = [
  { date: "Mar 31", item: "CIT finalisation return (Form 03/QTT-TNCN) — within 90 days of fiscal year-end", source: "Law on CIT Art. 18; Circular 78/2014/TT-BTC Art. 10" },
  { date: "Mar 31", item: "Annual financial statements (VAS) submission", source: "Law on Accounting 2015 (Law 88/2015/QH13) Art. 28" },
  { date: "Mar 31", item: "Statutory audit report submission (where applicable)", source: "Law on Independent Audit 2011 (Law 67/2011/QH13)" },
  { date: "Mar 31", item: "PIT finalisation for employees (Form 02/QTT-TNCN)", source: "Circular 92/2015/TT-BTC Art. 14" },
  { date: "Mar 31", item: "Transfer pricing Local File (where required)", source: "Decree 132/2020/ND-CP Art. 10" },
  { date: "Within 90 days of year-end", item: "Transfer pricing Master File (where required)", source: "Decree 132/2020/ND-CP Art. 11" },
  { date: "Within 12 months of year-end", item: "CbCR filing (where required) — by Vietnam UPE", source: "Decree 132/2020/ND-CP Art. 13" },
  { date: "Within 3 months of year-end", item: "CbCR notification (Vietnam subsidiary of foreign UPE)", source: "Decree 132/2020/ND-CP Art. 13" },
  { date: "Jan 30", item: "PIT finalisation for self-employed / business income (Form 08/QTT-TNCN)", source: "Circular 40/2021/TT-BTC" },
  { date: "Mar 31", item: "Annual dependent-allowance re-registration for PIT", source: "Circular 111/2013/TT-BTC" },
];

const other = [
  { item: "Work permit renewal — begin 2–3 months before expiry", source: "Decree 152/2020/ND-CP" },
  { item: "TRC renewal — within 30 days of expiry", source: "Law on Foreigners' Entry, Exit, Transit, Residence 2014 (Law 47/2014/QH13)" },
  { item: "IRC amendment — for material changes (capital, scope, shareholder)", source: "Law on Investment 2020 (Law 61/2020/QH14) Art. 41" },
  { item: "Annual social insurance contribution-base adjustment (1 Jan salary review)", source: "Law on Social Insurance 2014 Art. 89" },
  { item: "Annual fire-safety inspection certificate (where applicable)", source: "Law on Fire Prevention and Fighting 2001 (Law 27/2001/QH10)" },
  { item: "Annual environmental monitoring report (where applicable)", source: "Law on Environmental Protection 2020 (Law 72/2020/QH14)" },
];

export default function TaxCalendarPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Tax Calendar", path: "/resources/tax-calendar" },
        ])}
      />
      <section className="bg-navy text-white section-pad pt-32">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Tax Calendar" }]} />
          <div className="eyebrow !text-gold-light">Resource</div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-white max-w-3xl mb-6">
            Vietnam <em className="text-gold-light">tax calendar</em>
          </h1>
          <p className="text-white/65 text-[17px] font-light leading-[1.8] max-w-2xl">
            All Vietnam tax filing and payment deadlines in one place, for a calendar-year fiscal year. Each item is cited to the relevant Vietnamese law, decree, or circular. For a tailored calendar (different fiscal year, quarterly VAT, etc.), <Link href="/contact" className="text-gold underline">book a free consultation</Link>.
          </p>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page max-w-3xl">
          <h2 className="font-serif text-[28px] font-light text-navy mb-8">Monthly</h2>
          <ul className="border-t border-ivory-warm mb-14">
            {monthly.map((m, i) => (
              <li key={i} className="flex items-start gap-6 py-5 border-b border-ivory-warm">
                <div className="w-24 flex-shrink-0 text-gold font-serif text-[20px] font-medium">{m.day}</div>
                <div>
                  <div className="text-[15px] text-ink-mid leading-[1.7]">{m.item}</div>
                  <div className="text-[12px] text-ink-muted mt-1">Source: {m.source}</div>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="font-serif text-[28px] font-light text-navy mb-8">Quarterly</h2>
          <ul className="border-t border-ivory-warm mb-14">
            {quarterly.map((q, i) => (
              <li key={i} className="flex items-start gap-6 py-5 border-b border-ivory-warm">
                <div className="w-24 flex-shrink-0 text-gold font-serif text-[20px] font-medium">{q.month}</div>
                <div>
                  <div className="text-[15px] text-ink-mid leading-[1.7]">{q.item}</div>
                  <div className="text-[12px] text-ink-muted mt-1">Source: {q.source}</div>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="font-serif text-[28px] font-light text-navy mb-8">Annual</h2>
          <ul className="border-t border-ivory-warm mb-14">
            {annual.map((a, i) => (
              <li key={i} className="flex items-start gap-6 py-5 border-b border-ivory-warm">
                <div className="w-24 flex-shrink-0 text-gold font-serif text-[20px] font-medium">{a.date}</div>
                <div>
                  <div className="text-[15px] text-ink-mid leading-[1.7]">{a.item}</div>
                  <div className="text-[12px] text-ink-muted mt-1">Source: {a.source}</div>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="font-serif text-[28px] font-light text-navy mb-8">Other recurring items</h2>
          <ul className="border-t border-ivory-warm">
            {other.map((o, i) => (
              <li key={i} className="flex items-start gap-4 py-5 border-b border-ivory-warm">
                <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <div>
                  <div className="text-[15px] text-ink-mid leading-[1.7]">{o.item}</div>
                  <div className="text-[12px] text-ink-muted mt-1">Source: {o.source}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="bg-ivory border border-ivory-warm p-7 mt-12">
            <p className="text-[13px] text-ink-muted leading-[1.8]">
              <strong className="text-navy">Note.</strong> This calendar is general information based on publicly published Vietnamese law. It does not constitute professional tax or legal advice. Specific deadlines for your entity may differ based on fiscal year, sector, registration status, or special GDT rulings. For a calendar tailored to your entity, <Link href="/contact" className="text-gold underline">book a consultation</Link>.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-[14px] text-ink-muted leading-[1.8]">
              Want this in your calendar? <Link href="/contact" className="text-gold underline">Request a calendar invite</Link> with a tailored version for your entity.
            </p>
            <a
              href="/downloads/vietnam-tax-calendar.pdf"
              download
              className="btn-primary text-[12px] py-3 px-6 whitespace-nowrap"
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>

      <CtaStrip
        title="Don't want to track all of this yourself?"
        description="Our monthly retainer covers every filing on this page. You see the deadlines, we handle the work."
      />
    </>
  );
}
