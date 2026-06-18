import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { servicePages, serviceSlugs } from "@/lib/service-data";
import { faqTopics } from "@/lib/faq-data";
import { pillarPages, pillarSlugs } from "@/lib/pillar-data";
import { landingPages, landingSlugs } from "@/lib/landing-data";

export const dynamic = "force-static";

const staticRoutes = [
  { path: "", priority: 1.0 },
  { path: "/services", priority: 0.9 },
  { path: "/setup", priority: 0.8 },
  { path: "/industries", priority: 0.8 },
  { path: "/countries", priority: 0.8 },
  { path: "/resources", priority: 0.7 },
  { path: "/resources/faq", priority: 0.8 },
  { path: "/resources/tax-calendar", priority: 0.7 },
  { path: "/resources/checklist", priority: 0.8 },
  { path: "/resources/setup-guide", priority: 0.8 },
  { path: "/guides", priority: 0.9 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
];

function categoryPath(c: string) {
  return c === "core-services"
    ? "services"
    : c === "business-setup"
    ? "setup"
    : c === "industries"
    ? "industries"
    : "countries";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteConfig.url;

  const entries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r.priority,
  }));

  for (const slug of serviceSlugs) {
    const page = servicePages[slug];
    entries.push({
      url: `${base}/${categoryPath(page.category)}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const t of faqTopics) {
    entries.push({
      url: `${base}/resources/faq#${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  for (const slug of pillarSlugs) {
    const page = pillarPages[slug];
    entries.push({
      url: `${base}${page.path}`,
      lastModified: new Date(page.dateModified ?? page.datePublished),
      changeFrequency: "monthly",
      priority: 0.85,
    });
  }

  for (const slug of landingSlugs) {
    const page = landingPages[slug];
    entries.push({
      url: `${base}${page.path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    });
  }

  return entries;
}
