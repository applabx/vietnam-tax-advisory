import Link from "next/link";
import { siteConfig } from "@/lib/site";

const groups: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Core Services",
    links: [
      { label: "Accounting Services", href: "/services/accounting" },
      { label: "Tax Services", href: "/services/tax" },
      { label: "Bookkeeping", href: "/services/bookkeeping" },
      { label: "Payroll & PIT", href: "/services/payroll" },
      { label: "Corporate Tax", href: "/services/corporate-tax" },
      { label: "VAT Services", href: "/services/vat" },
      { label: "Transfer Pricing", href: "/services/transfer-pricing" },
      { label: "Foreign Contractor Tax", href: "/services/foreign-contractor-tax" },
      { label: "Statutory Audit Support", href: "/services/statutory-audit" },
      { label: "Virtual CFO", href: "/services/virtual-cfo" },
    ],
  },
  {
    title: "Guides & Resources",
    links: [
      { label: "All Guides", href: "/guides" },
      { label: "CIT Guide", href: "/guides/corporate-income-tax" },
      { label: "VAT Guide", href: "/guides/vat" },
      { label: "Payroll & PIT Guide", href: "/guides/payroll" },
      { label: "Transfer Pricing Guide", href: "/guides/transfer-pricing" },
      { label: "FAQ Hub", href: "/resources/faq" },
      { label: "Tax Calendar", href: "/resources/tax-calendar" },
      { label: "Compliance Checklist", href: "/resources/checklist" },
      { label: "Company Setup Guide", href: "/resources/setup-guide" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    title: "Business Setup",
    links: [
      { label: "Company Registration", href: "/setup/company-registration" },
      { label: "Foreign Company Setup", href: "/setup/foreign-company" },
      { label: "IRC / ERC Licensing", href: "/setup/irc-erc" },
      { label: "Representative Office", href: "/setup/representative-office" },
      { label: "Branch Office", href: "/setup/branch-office" },
      { label: "Work Permits", href: "/setup/work-permits" },
    ],
  },
  {
    title: "Firm",
    links: [
      { label: "About", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Industries", href: "/industries" },
      { label: "Countries", href: "/countries" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-gold/15">
      <div className="container-page py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="font-serif text-[15px] font-medium text-white mb-4 tracking-wide">
                {g.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[13px] text-white/55 hover:text-gold transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
          <div>
            <div className="font-serif text-[24px] text-white tracking-wide mb-2">
              {siteConfig.name}<span className="text-gold">.</span>
            </div>
            <p className="text-[13px] text-white/45 leading-relaxed max-w-md">
              {siteConfig.description}
            </p>
          </div>
          <div className="md:text-right text-[12px] text-white/40 leading-relaxed">
            <div>
              {siteConfig.address.street}, {siteConfig.address.district}, {siteConfig.address.city}, {siteConfig.address.country}
            </div>
            <div className="mt-1">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">{siteConfig.email}</a>
              {" · "}
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-gold">{siteConfig.phone}</a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="text-[12px] text-white/30">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </div>
          <div className="text-[11px] text-white/25 max-w-2xl">
            The information on this website is general in nature and does not constitute professional tax or legal advice. Contact us for advice specific to your situation.
          </div>
        </div>
      </div>
    </footer>
  );
}
