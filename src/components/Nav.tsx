"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const primaryLinks = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/countries", label: "For Foreign Companies" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 bg-navy/97 backdrop-blur-md border-b border-gold/20 transition-shadow ${
        scrolled ? "shadow-lg shadow-navy-deep/30" : ""
      }`}
      aria-label="Primary"
    >
      <div className="container-page h-[72px] flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-[22px] font-medium text-white tracking-wide"
          aria-label={`${siteConfig.name} — home`}
        >
          {siteConfig.shortName}<span className="text-gold">.</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          {primaryLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[12px] font-normal text-white/70 hover:text-gold-light tracking-[0.12em] uppercase transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="text-[12px] font-medium text-navy bg-gold hover:bg-gold-light px-6 py-2.5 rounded-sm tracking-[0.08em] uppercase transition-colors"
          >
            Book a Consultation
          </Link>
        </div>

        <button
          className="lg:hidden text-white p-2 -mr-2"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gold/20 bg-navy">
          <ul className="container-page py-6 flex flex-col gap-1">
            {primaryLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[14px] font-normal text-white/80 hover:text-gold-light tracking-[0.1em] uppercase"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block text-center text-[12px] font-medium text-navy bg-gold hover:bg-gold-light px-6 py-3 rounded-sm tracking-[0.08em] uppercase transition-colors"
              >
                Book a Consultation
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
