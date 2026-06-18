import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaStrip } from "@/components/Section";

export const metadata: Metadata = buildPageMetadata({
  title: "Vietnam Tax Calendar 2025",
  description:
    "All Vietnam tax filing and payment deadlines in one place: monthly VAT, quarterly CIT, annual CIT finalisation, PIT, FCT, social insurance, and audit. Calendar-year basis.",
  path: "/resources/tax-calendar",
});

const monthly = [
  { day: "10th", item: "Social insurance monthly contribution file (for prior month)" },
  { day: "20th", item: "VAT return (monthly filers) and PIT withholding (monthly filers)" },
  { day: "20th", item: "FCT declaration and remittance (for prior month's foreign-contractor payments)" },
];

const quarterly = [
  { month: "Apr 30", item: "Q1 CIT provisional payment" },
  { month: "Jul 31", item: "Q2 CIT provisional payment" },
  { month: "Oct 31", item: "Q3 CIT provisional payment" },
  { month: "Jan 31", item: "Q4 CIT provisional payment (and year-end payroll PIT finalisation)" },
  { month: "Last day of month after quarter", item: "VAT return (quarterly filers, where eligible)" },
];

const annual = [
  { date: "Mar 31", item: "CIT finalisation return (Form 03/QTT-TNCN)" },
  { date: "Mar 31", item: "Annual financial statements (VAS) submission" },
  { date: "Mar 31", item: "Statutory audit report submission (where applicable)" },
  { date: "Mar 31", item: "PIT finalisation for employees (Form 02/QTT-TNCN)" },
  { date: "Mar 31", item: "Transfer pricing Local File / Master File / CbCR" },
  { date: "Jan 30", item: "PIT finalisation for self-employed / business income (Form 08/QTT-TNCN)" },
];

const other = [
  { item: "Work permit renewal — begin 2–3 months before expiry" },
  { item: "TRC renewal — within 30 days of expiry" },
  { item: "IRC renewal / amendment — for material changes (capital, scope, shareholder)" },
  { item: "Annual dependent-allowance re-registration for PIT" },
  { item: "Annual social insurance contribution-base adjustment (1 Jan salary review)" },
  { item: "Annual fire-safety inspection certificate" },
  { item: "Annual environmental permit (where applicable)" },
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
            All Vietnam tax filing and payment deadlines in one place, for a calendar-year fiscal year. Use this as your reference; for a tailored calendar (different fiscal year, quarterly VAT, etc.), book a free consultation.
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
                <div className="text-[15px] text-ink-mid leading-[1.7]">{m.item}</div>
              </li>
            ))}
          </ul>

          <h2 className="font-serif text-[28px] font-light text-navy mb-8">Quarterly</h2>
          <ul className="border-t border-ivory-warm mb-14">
            {quarterly.map((q, i) => (
              <li key={i} className="flex items-start gap-6 py-5 border-b border-ivory-warm">
                <div className="w-24 flex-shrink-0 text-gold font-serif text-[20px] font-medium">{q.month}</div>
                <div className="text-[15px] text-ink-mid leading-[1.7]">{q.item}</div>
              </li>
            ))}
          </ul>

          <h2 className="font-serif text-[28px] font-light text-navy mb-8">Annual</h2>
          <ul className="border-t border-ivory-warm mb-14">
            {annual.map((a, i) => (
              <li key={i} className="flex items-start gap-6 py-5 border-b border-ivory-warm">
                <div className="w-24 flex-shrink-0 text-gold font-serif text-[20px] font-medium">{a.date}</div>
                <div className="text-[15px] text-ink-mid leading-[1.7]">{a.item}</div>
              </li>
            ))}
          </ul>

          <h2 className="font-serif text-[28px] font-light text-navy mb-8">Other recurring items</h2>
          <ul className="border-t border-ivory-warm">
            {other.map((o, i) => (
              <li key={i} className="flex items-start gap-4 py-5 border-b border-ivory-warm">
                <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <div className="text-[15px] text-ink-mid leading-[1.7]">{o.item}</div>
              </li>
            ))}
          </ul>

          <div className="bg-ivory border border-ivory-warm p-7 mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
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
