import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaStrip } from "@/components/Section";
import ChecklistGate from "./ChecklistGate";

export const metadata: Metadata = buildPageMetadata({
  title: "Vietnam Tax Compliance Checklist (Free PDF)",
  description:
    "The 60-point Vietnam tax and accounting compliance checklist we use with new clients. Covers CIT, VAT, PIT, FCT, payroll, social insurance, transfer pricing, FDI, and audit.",
  path: "/resources/checklist",
});

const items = [
  { section: "Setup", items: [
    "IRC and ERC on file and current",
    "Tax code registered",
    "Social insurance employer registration completed",
    "Bank account opened in the company's name",
    "Company seal registered",
    "Legal representative appointed (resident or non-resident)",
  ]},
  { section: "Monthly", items: [
    "Bank reconciliation completed within 10 working days of month-end",
    "All supplier invoices obtained in valid VAT format",
    "VAT return filed and VAT paid by the 20th of the following month",
    "PIT withholding and remittance completed by the 20th of the following month",
    "Social insurance monthly contribution file submitted by the 10th",
    "Foreign-contractor tax (FCT) declared and remitted on each payment",
    "Inter-company invoices raised and recorded",
  ]},
  { section: "Quarterly", items: [
    "Quarterly CIT provisional payment by the 30th of the following month",
    "Quarterly financial review with the advisor",
    "Reconciliation of management accounts to tax numbers",
    "FX gain/loss reviewed and recorded",
  ]},
  { section: "Annual", items: [
    "CIT finalisation return (Form 03/QTT-TNCN) filed by 31 March",
    "Annual financial statements (VAS) filed by 31 March",
    "Statutory audit completed and report filed by 31 March (where applicable)",
    "PIT finalisation for all employees by 31 March",
    "Transfer pricing Local File prepared by 31 March",
    "Master File prepared (where applicable) by 31 March",
    "Country-by-Country Report filed (where applicable)",
    "Dependent-allowance re-registration for PIT",
    "Social insurance contribution-base adjustment (1 Jan salary review)",
    "Work permits renewed 2–3 months before expiry",
    "TRC renewed within 30 days of expiry",
  ]},
  { section: "Transfer Pricing", items: [
    "Inter-company agreements in place and current",
    "Service-level benefit test documented",
    "Mark-up is arm's length (benchmarking study on file)",
    "Cost-sharing agreement in place (where applicable)",
    "Royalty agreement aligned with TP documentation",
    "CbCR notification filed (where applicable)",
    "Local File is contemporaneous (not year-end)",
  ]},
  { section: "FDI-specific", items: [
    "SBV capital contribution reported",
    "SBV loan drawdown and repayment reported (where applicable)",
    "IRC amendment filed for material changes",
    "Foreign-exchange transactions reported",
  ]},
  { section: "Payroll", items: [
    "Labour contracts in place and on file for all employees",
    "Work permits on file for all foreign employees",
    "Salary reviews documented",
    "Overtime within statutory caps",
    "PIT certificates issued to leavers within 30 days",
    "13th-month and Tet bonuses included in the correct month",
  ]},
];

export default function ChecklistPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Compliance Checklist", path: "/resources/checklist" },
        ])}
      />

      <section className="bg-navy text-white section-pad pt-32">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Compliance Checklist" }]} />
          <div className="eyebrow !text-gold-light">Free download</div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-white max-w-3xl mb-6">
            Vietnam tax <em className="text-gold-light">compliance checklist</em>
          </h1>
          <p className="text-white/65 text-[17px] font-light leading-[1.8] max-w-2xl">
            The 60-point checklist we use with new clients. Covers every monthly, quarterly, and annual obligation — plus the FDI, transfer pricing, and payroll specifics that catch first-time entrants.
          </p>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page grid lg:grid-cols-[1fr_400px] gap-12">
          <div>
            <h2 className="font-serif text-[28px] font-light text-navy mb-8">What&apos;s inside</h2>
            {items.map((sec) => (
              <div key={sec.section} className="mb-8">
                <h3 className="font-serif text-[22px] font-medium text-navy mb-4">{sec.section}</h3>
                <ul className="space-y-2.5">
                  {sec.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[14px] text-ink-mid leading-[1.7]">
                      <span className="w-4 h-4 border border-gold/40 flex-shrink-0 mt-1" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <aside className="lg:sticky lg:top-24 self-start">
            <ChecklistGate />
          </aside>
        </div>
      </section>

      <CtaStrip
        title="Want us to run the checklist for you?"
        description="Our compliance health-check is the same exercise we use to onboard new clients. Book a free 30-minute consultation and we'll run it on your entity."
      />
    </>
  );
}
