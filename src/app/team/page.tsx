import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaStrip } from "@/components/Section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Our Team — Vietnam Tax & Accounting Advisors",
  description: "Meet Vietnam Tax Advisory's leadership team: former Big-4 partners, MOF alumni, and licensed tax agents with 14+ years of Vietnam tax practice.",
  path: "/team",
  keywords: ["Vietnam tax advisor team", "Vietnam Big-4 alumni", "Vietnam tax agents", "Vietnam tax firm leadership"],
});

const allMembers = [...siteConfig.founders, ...siteConfig.team, ...siteConfig.advisoryBoard];

export default function TeamPage() {
  const founders = siteConfig.founders;
  const team = siteConfig.team;
  const advisory = siteConfig.advisoryBoard;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Team", path: "/team" },
          ]),
          ...personSchema(),
        ]}
      />

      <section className="bg-navy text-white section-pad pt-32">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Team" }]} />
          <div className="eyebrow !text-gold-light">Our Team</div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-white max-w-3xl mb-6">
            The people behind <em className="text-gold-light">Vietnam Tax Advisory</em>
          </h1>
          <p className="text-white/65 text-[17px] font-light leading-[1.8] max-w-2xl">
            A senior team of former Big-4 partners, MOF alumni, and licensed tax agents. We are the people who actually do the work — not just the people who sign the engagement letter.
          </p>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="eyebrow">Founders</div>
          <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-navy leading-[1.15] mb-10 max-w-2xl">
            Founding partners
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((f) => (
              <Link key={f.slug} href={`/team/${f.slug}`} className="block group">
                <div className="bg-ivory border border-ivory-warm p-10 hover:border-gold transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 rounded-full bg-gold-pale text-gold flex items-center justify-center font-serif text-[36px] font-light flex-shrink-0">
                      {f.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <h3 className="font-serif text-[26px] font-medium text-navy mb-1 group-hover:text-gold transition-colors">{f.name}</h3>
                      <div className="text-gold text-[13px] tracking-[0.1em] uppercase mb-3">{f.role}</div>
                      <p className="text-[13px] text-ink-muted leading-[1.8] mb-4">{f.credentials}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {f.expertise.map((e) => (
                          <span key={e} className="text-[10px] tracking-[0.1em] uppercase text-ink-muted border border-ivory-warm px-2 py-0.5">{e}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory section-pad">
        <div className="container-page">
          <div className="eyebrow">Senior team</div>
          <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-navy leading-[1.15] mb-10 max-w-2xl">
            The specialists who run your engagement
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((t) => (
              <Link key={t.slug} href={`/team/${t.slug}`} className="block group">
                <div className="bg-white p-7 border border-ivory-warm hover:border-gold transition-colors h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gold-pale text-gold flex items-center justify-center font-serif text-[20px] font-light flex-shrink-0">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <h3 className="font-serif text-[18px] font-medium text-navy group-hover:text-gold transition-colors">{t.name}</h3>
                      <div className="text-gold text-[11px] tracking-[0.1em] uppercase">{t.role}</div>
                    </div>
                  </div>
                  <p className="text-[12px] text-ink-muted leading-[1.7] mb-3">{t.credentials}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {t.expertise.slice(0, 3).map((e) => (
                      <span key={e} className="text-[10px] tracking-[0.08em] uppercase text-ink-muted border border-ivory-warm px-1.5 py-0.5">{e}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="eyebrow">Advisory Board</div>
          <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-navy leading-[1.15] mb-10 max-w-2xl">
            Senior advisors
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {advisory.map((a) => (
              <Link key={a.slug} href={`/team/${a.slug}`} className="block group">
                <div className="bg-ivory border border-ivory-warm p-8 hover:border-gold transition-colors">
                  <div className="flex items-start gap-5">
                    <div className="w-20 h-20 rounded-full bg-gold-pale text-gold flex items-center justify-center font-serif text-[28px] font-light flex-shrink-0">
                      {a.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <h3 className="font-serif text-[22px] font-medium text-navy mb-1 group-hover:text-gold transition-colors">{a.name}</h3>
                      <div className="text-gold text-[12px] tracking-[0.1em] uppercase mb-3">{a.role}</div>
                      <p className="text-[13px] text-ink-muted leading-[1.8]">{a.credentials}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Work with our team"
        description="Free 30-minute consultation with a senior advisor. We'll review your situation and outline a fixed-fee engagement."
        primaryLabel="Book a Free Consultation"
      />
    </>
  );
}
