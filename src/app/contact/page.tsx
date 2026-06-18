import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact a Vietnam Tax Specialist",
  description:
    "Book a free 30-minute consultation with a Vietnam tax specialist. English-speaking team, Big-4 heritage, and 10+ years in practice. We respond within 24 hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])}
      />

      <section className="bg-navy text-white section-pad pt-32">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="eyebrow !text-gold-light">Get in touch</div>
              <h1 className="font-serif text-[clamp(36px,5vw,56px)] font-light leading-[1.1] text-white mb-6">
                Start with a <em className="text-gold-light">free</em> consultation
              </h1>
              <p className="text-white/65 text-[16px] font-light leading-[1.8] max-w-lg mb-10">
                Tell us about your business and we&apos;ll schedule a 30-minute call with a Vietnam tax specialist. No strings attached, no obligation.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div className="text-[11px] tracking-[0.16em] uppercase text-gold mb-1">Office</div>
                    <div className="text-white/80 text-[15px] font-light leading-[1.7]">
                      {siteConfig.address.street}<br />
                      {siteConfig.address.district}, {siteConfig.address.city}<br />
                      {siteConfig.address.country}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div className="text-[11px] tracking-[0.16em] uppercase text-gold mb-1">Email</div>
                    <a href={`mailto:${siteConfig.email}`} className="text-white/80 hover:text-gold text-[15px] font-light transition-colors">{siteConfig.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.79-1.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/></svg>
                  </div>
                  <div>
                    <div className="text-[11px] tracking-[0.16em] uppercase text-gold mb-1">WhatsApp / Phone</div>
                    <a href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`} className="text-white/80 hover:text-gold text-[15px] font-light transition-colors">{siteConfig.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  </div>
                  <div>
                    <div className="text-[11px] tracking-[0.16em] uppercase text-gold mb-1">Office hours</div>
                    <div className="text-white/80 text-[15px] font-light">Monday – Friday, 08:30 – 18:00 (ICT)</div>
                  </div>
                </div>
              </div>

              <a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light inline-flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Or book a time on Calendly
              </a>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
