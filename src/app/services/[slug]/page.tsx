import ServicePage from "@/components/ServicePageTemplate";
import { servicePages, serviceSlugs } from "@/lib/service-data";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return serviceSlugs
    .filter((slug) => servicePages[slug].category === "core-services")
    .map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = servicePages[params.slug];
  if (!page) return {};
  return buildPageMetadata({
    title: page.name,
    description: `${page.name} for foreign companies in Vietnam. ${page.overview.slice(0, 140)}`,
    path: `/services/${page.slug}`,
    keywords: [
      page.name,
      `Vietnam ${page.shortName.toLowerCase()}`,
      `${page.shortName} for foreign companies Vietnam`,
    ],
  });
}

export default ServicePage;
