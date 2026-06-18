import type { ReactNode } from "react";
import { siteConfig } from "./site";

type JsonLdProps = {
  data: object | object[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function buildSiteJsonLd() {
  return [
    siteConfig,
  ];
}
