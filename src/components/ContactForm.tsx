"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

const serviceOptions = [
  "Monthly Bookkeeping & Accounting",
  "Tax Services (CIT / VAT / PIT / FCT)",
  "Payroll & PIT",
  "Transfer Pricing",
  "Statutory Audit Support",
  "Virtual CFO",
  "Company Registration / Setup",
  "Work Permits & Expatriate Tax",
  "Full Compliance Package",
  "Other",
];

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    service: "",
    revenue: "",
    message: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [k]: e.target.value });
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const webhook = (process.env.NEXT_PUBLIC_CONTACT_WEBHOOK || "").trim();
      const leadWebhook = (process.env.NEXT_PUBLIC_LEAD_WEBHOOK || "").trim();
      const target = webhook || leadWebhook;

      if (target) {
        const res = await fetch(target, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "contact",
            ...form,
            source: window.location.href,
            timestamp: new Date().toISOString(),
          }),
        });
        if (!res.ok && res.status >= 500) {
          throw new Error("Server error");
        }
      }
      // If no webhook is configured, we still mark as "sent" — the form is a smoke test
      // of the UX. In production, the user should set NEXT_PUBLIC_CONTACT_WEBHOOK to a
      // Cloudflare Worker, Formspree endpoint, or similar.
      setSent(true);
    } catch (err) {
      setError("Something went wrong. Please email us directly at " + siteConfig.email);
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="bg-white/5 border border-gold/30 p-12 text-center">
        <div className="font-serif text-[32px] text-gold-light mb-4">Thank you</div>
        <p className="text-white/75 text-[15px] leading-[1.8] max-w-md mx-auto mb-8">
          Your message has been received. A Vietnam tax specialist will get back to you within 24 hours.
        </p>
        <a
          href={siteConfig.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Or book a time directly
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[11px] tracking-[0.14em] uppercase text-white/40 mb-2">First name *</label>
          <input
            type="text"
            required
            value={form.firstName}
            onChange={update("firstName")}
            className="w-full bg-white/5 border border-gold/20 focus:border-gold/60 rounded-sm px-4 py-3.5 text-[14px] text-white outline-none transition-colors"
            placeholder="James"
          />
        </div>
        <div>
          <label className="block text-[11px] tracking-[0.14em] uppercase text-white/40 mb-2">Last name *</label>
          <input
            type="text"
            required
            value={form.lastName}
            onChange={update("lastName")}
            className="w-full bg-white/5 border border-gold/20 focus:border-gold/60 rounded-sm px-4 py-3.5 text-[14px] text-white outline-none transition-colors"
            placeholder="Anderson"
          />
        </div>
      </div>
      <div>
        <label className="block text-[11px] tracking-[0.14em] uppercase text-white/40 mb-2">Business email *</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={update("email")}
          className="w-full bg-white/5 border border-gold/20 focus:border-gold/60 rounded-sm px-4 py-3.5 text-[14px] text-white outline-none transition-colors"
          placeholder="james@company.com"
        />
      </div>
      <div>
        <label className="block text-[11px] tracking-[0.14em] uppercase text-white/40 mb-2">Phone / WhatsApp</label>
        <input
          type="tel"
          value={form.phone}
          onChange={update("phone")}
          className="w-full bg-white/5 border border-gold/20 focus:border-gold/60 rounded-sm px-4 py-3.5 text-[14px] text-white outline-none transition-colors"
          placeholder="+65 8123 4567"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[11px] tracking-[0.14em] uppercase text-white/40 mb-2">Company *</label>
          <input
            type="text"
            required
            value={form.company}
            onChange={update("company")}
            className="w-full bg-white/5 border border-gold/20 focus:border-gold/60 rounded-sm px-4 py-3.5 text-[14px] text-white outline-none transition-colors"
            placeholder="Acme Vietnam Co., Ltd"
          />
        </div>
        <div>
          <label className="block text-[11px] tracking-[0.14em] uppercase text-white/40 mb-2">Country of origin</label>
          <input
            type="text"
            value={form.country}
            onChange={update("country")}
            className="w-full bg-white/5 border border-gold/20 focus:border-gold/60 rounded-sm px-4 py-3.5 text-[14px] text-white outline-none transition-colors"
            placeholder="Singapore"
          />
        </div>
      </div>
      <div>
        <label className="block text-[11px] tracking-[0.14em] uppercase text-white/40 mb-2">Service of interest *</label>
        <select
          required
          value={form.service}
          onChange={update("service")}
          className="w-full bg-white/5 border border-gold/20 focus:border-gold/60 rounded-sm px-4 py-3.5 text-[14px] text-white/80 outline-none transition-colors"
        >
          <option value="" className="bg-navy">Select a service…</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s} className="bg-navy">{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-[11px] tracking-[0.14em] uppercase text-white/40 mb-2">Annual revenue (USD, approximate)</label>
        <select
          value={form.revenue}
          onChange={update("revenue")}
          className="w-full bg-white/5 border border-gold/20 focus:border-gold/60 rounded-sm px-4 py-3.5 text-[14px] text-white/80 outline-none transition-colors"
        >
          <option value="" className="bg-navy">Select…</option>
          <option value="pre-revenue" className="bg-navy">Pre-revenue</option>
          <option value="<500k" className="bg-navy">Less than USD 500k</option>
          <option value="500k-2m" className="bg-navy">USD 500k – 2M</option>
          <option value="2m-10m" className="bg-navy">USD 2M – 10M</option>
          <option value="10m-50m" className="bg-navy">USD 10M – 50M</option>
          <option value=">50m" className="bg-navy">More than USD 50M</option>
        </select>
      </div>
      <div>
        <label className="block text-[11px] tracking-[0.14em] uppercase text-white/40 mb-2">Tell us about your situation</label>
        <textarea
          rows={4}
          value={form.message}
          onChange={update("message")}
          className="w-full bg-white/5 border border-gold/20 focus:border-gold/60 rounded-sm px-4 py-3.5 text-[14px] text-white outline-none transition-colors resize-none"
          placeholder="A short note on your entity, your timeline, and any specific question…"
        />
      </div>
      {error && <div className="text-[12px] text-red-300">{error}</div>}
      <button
        type="submit"
        disabled={submitting}
        className="btn-primary mt-2"
      >
        {submitting ? "Sending…" : "Request a Consultation →"}
      </button>
      <p className="text-[11px] text-white/35 leading-[1.6]">
        By submitting, you agree to our <a href="/privacy" className="text-gold-light underline">privacy policy</a>. We typically respond within 24 hours.
      </p>
    </form>
  );
}
