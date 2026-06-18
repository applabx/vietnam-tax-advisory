import Link from "next/link";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[12px] tracking-[0.08em] uppercase text-ink-muted mb-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-gold transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-navy">{item.label}</span>
            )}
            {i < items.length - 1 && <span className="text-gold/60">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
