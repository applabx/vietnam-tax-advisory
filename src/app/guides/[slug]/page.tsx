import { pillarPages, pillarSlugs } from "@/lib/pillar-data";
import { PillarPage, buildPillarMetadata } from "@/components/PillarPageTemplate";

export function generateStaticParams() {
  return pillarSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const page = pillarPages[params.slug];
  if (!page) return {};
  return buildPillarMetadata(page);
}

export default function PillarPageRoute({ params }: { params: { slug: string } }) {
  const page = pillarPages[params.slug];
  if (!page) {
    return (
      <div className="container-page py-32">
        <h1>Pillar page not found</h1>
      </div>
    );
  }
  return <PillarPage page={page} />;
}
