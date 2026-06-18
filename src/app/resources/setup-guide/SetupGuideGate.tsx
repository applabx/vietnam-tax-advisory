"use client";

import { useState } from "react";
import Link from "next/link";

export default function SetupGuideGate() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [company, setCompany] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const webhook = (process.env.NEXT_PUBLIC_LEAD_WEBHOOK || "").trim();
      if (webhook) {
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "lead-magnet",
            asset: "setup-guide",
            email,
            firstName,
            company,
            source: window.location.href,
            timestamp: new Date().toISOString(),
          }),
        });
      }
      setSent(true);
    } catch (err) {
      setError("Something went wrong. Please try again or email us.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-white border border-ivory-warm p-8 lg:p-10">
      {sent ? (
        <div className="text-center py-6">
          <div className="font-serif text-[24px] text-navy mb-3">Thank you</div>
          <p className="text-[14px] text-ink-muted leading-[1.7] mb-6">
            Your download link is on its way.
          </p>
          <a href="/downloads/vietnam-company-setup-guide.pdf" className="btn-primary" download>
            Download the Guide (PDF)
          </a>
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          method="POST"
          action={process.env.NEXT_PUBLIC_LEAD_WEBHOOK || process.env.NEXT_PUBLIC_CONTACT_WEBHOOK || "#"}
          className="space-y-4"
        >
          <h3 className="font-serif text-[24px] text-navy mb-2">Get the guide</h3>
          <p className="text-[13px] text-ink-muted leading-[1.7] mb-4">
            Step-by-step playbook, free PDF. We&apos;ll email you the download link.
          </p>
          <div>
            <label className="text-[11px] tracking-[0.14em] uppercase text-ink-muted">First name</label>
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full mt-1 px-4 py-3 border border-ivory-warm focus:border-gold outline-none text-[14px] text-navy bg-ivory"
            />
          </div>
          <div>
            <label className="text-[11px] tracking-[0.14em] uppercase text-ink-muted">Business email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-3 border border-ivory-warm focus:border-gold outline-none text-[14px] text-navy bg-ivory"
            />
          </div>
          <div>
            <label className="text-[11px] tracking-[0.14em] uppercase text-ink-muted">Company</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full mt-1 px-4 py-3 border border-ivory-warm focus:border-gold outline-none text-[14px] text-navy bg-ivory"
            />
          </div>
          {error && <div className="text-[12px] text-red-600">{error}</div>}
          <button type="submit" disabled={submitting} className="btn-primary w-full">
            {submitting ? "Sending…" : "Send me the guide"}
          </button>
          <p className="text-[11px] text-ink-muted leading-[1.6]">
            By submitting, you agree to our <Link href="/privacy" className="text-gold underline">privacy policy</Link>.
          </p>
        </form>
      )}
    </div>
  );
}
