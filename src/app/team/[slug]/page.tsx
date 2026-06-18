import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaStrip } from "@/components/Section";
import { siteConfig } from "@/lib/site";

const allMembers = [...siteConfig.founders, ...siteConfig.team, ...siteConfig.advisoryBoard];

export function generateStaticParams() {
  return allMembers.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const m = allMembers.find((x) => x.slug === params.slug);
  if (!m) return {};
  return buildPageMetadata({
    title: `${m.name} — ${m.role}, Vietnam Tax Advisory`,
    description: `${m.name} is ${m.role} at Vietnam Tax Advisory. ${(m as { bio?: string }).bio?.slice(0, 160) ?? (m as { credentials?: string }).credentials}`,
    path: `/team/${m.slug}`,
    keywords: [`${m.name} Vietnam tax`, `Vietnam ${m.role}`, "Vietnam tax advisor"],
    ogType: "article",
  });
}

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const m = allMembers.find((x) => x.slug === params.slug);
  if (!m) {
    return (
      <div className="container-page py-32">
        <h1>Team member not found</h1>
      </div>
    );
  }
  const expertise = ((m as { expertise?: readonly string[] }).expertise ?? []) as string[];
  const bio = (m as { bio?: string }).bio || (m as { credentials?: string }).credentials || "";

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Team", path: "/team" },
            { name: m.name, path: `/team/${m.slug}` },
          ]),
          ...personSchema().filter((p) => p.name === m.name),
        ]}
      />

      <section className="bg-navy text-white section-pad pt-32">
        <div className="container-page">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Team", href: "/team" },
              { label: m.name },
            ]}
          />
          <div className="grid md:grid-cols-[200px_1fr] gap-10 items-start">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gold-pale text-gold flex items-center justify-center font-serif text-[64px] md:text-[80px] font-light flex-shrink-0">
              {m.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <div className="eyebrow !text-gold-light mb-4">{m.role}</div>
              <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-white mb-6">
                {m.name}
              </h1>
              <div className="text-gold-light text-[16px] font-light mb-6">{(m as { credentials?: string }).credentials}</div>
              <p className="text-white/75 text-[17px] font-light leading-[1.8] max-w-2xl">
                {bio}
              </p>
              {expertise.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {expertise.map((e) => (
                    <span key={e} className="text-[11px] tracking-[0.1em] uppercase text-white/70 border border-gold/30 px-3 py-1.5">
                      {e}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page max-w-3xl prose-vietnam">
          <h2>About {m.name.split(" ")[0]}</h2>
          <p>{bio}</p>
          
          {expertise.length > 0 && (
            <>
              <h2>Areas of expertise</h2>
              <ul>
                {expertise.map((e) => <li key={e}>{e}</li>)}
              </ul>
            </>
          )}

          <h2>How to engage</h2>
          <p>
            {m.name} is available for client engagements through our monthly retainer model and for standalone projects.{" "}
            <Link href="/contact" className="text-gold hover:underline">Book a free 30-minute consultation</Link>{" "}
            to discuss how {m.name.split(" ")[0]} can help with your Vietnam tax, accounting, payroll, transfer pricing, or CFO advisory needs.
          </p>
        </div>
      </section>

      <CtaStrip
        title={`Work with ${m.name.split(" ")[0]}`}
        description="Free 30-minute consultation. We'll review your situation and outline a fixed-fee engagement."
        primaryLabel="Book a Free Consultation"
      />
    </>
  );
}
