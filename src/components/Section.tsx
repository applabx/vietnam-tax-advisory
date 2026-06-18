import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  light?: boolean;
  align?: "left" | "center";
};

export function SectionLabel({ children, light, align = "left" }: Props) {
  return (
    <div
      className={`eyebrow ${align === "center" ? "justify-center" : ""} ${
        light ? "!text-gold-light" : ""
      }`}
    >
      {children}
    </div>
  );
}

type SectionTitleProps = {
  children: ReactNode;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({ children, light, align = "left", className = "" }: SectionTitleProps) {
  return (
    <h2
      className={`font-serif text-[clamp(32px,4vw,52px)] font-light leading-[1.15] tracking-tight ${
        light ? "text-white" : "text-navy"
      } ${align === "center" ? "text-center" : ""} ${className}`}
    >
      {children}
    </h2>
  );
}

type SectionSubProps = {
  children: ReactNode;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
};

export function SectionSub({ children, light, align = "left", className = "" }: SectionSubProps) {
  return (
    <p
      className={`text-[16px] font-light leading-[1.8] ${
        light ? "text-white/55" : "text-ink-muted"
      } ${align === "center" ? "text-center mx-auto" : ""} max-w-[540px] ${className}`}
    >
      {children}
    </p>
  );
}

type CtaStripProps = {
  title: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaStrip({
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Book a Free Consultation",
  secondaryHref = "/resources/faq",
  secondaryLabel = "Read the FAQ",
}: CtaStripProps) {
  return (
    <section className="bg-navy text-white section-pad">
      <div className="container-page text-center">
        <SectionLabel light align="center">Get Started</SectionLabel>
        <SectionTitle light align="center" className="max-w-2xl mx-auto">{title}</SectionTitle>
        {description && (
          <p className="text-white/60 mt-6 max-w-2xl mx-auto text-[16px] font-light leading-relaxed">
            {description}
          </p>
        )}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryHref} className="btn-primary">
            {primaryLabel}
          </Link>
          <Link href={secondaryHref} className="btn-outline-light">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  light?: boolean;
  center?: boolean;
};

export function SectionHeader({ eyebrow, title, sub, light, center }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <div
        className={`eyebrow ${center ? "justify-center" : ""} ${
          light ? "!text-gold-light" : ""
        }`}
      >
        {eyebrow}
      </div>
      <h2
        className={`font-serif text-[clamp(32px,4vw,52px)] font-light leading-[1.15] tracking-tight mb-4 ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`text-[16px] font-light leading-[1.8] max-w-[540px] ${
            center ? "mx-auto" : ""
          } ${light ? "text-white/55" : "text-ink-muted"}`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
