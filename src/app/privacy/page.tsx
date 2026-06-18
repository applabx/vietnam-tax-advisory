import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Vietnam Tax Advisory website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="bg-white section-pad">
      <div className="container-page max-w-3xl prose-vietnam">
        <h1>Privacy Policy</h1>
        <p className="text-[13px] text-ink-muted">Last updated: January 2025</p>

        <h2>What we collect</h2>
        <p>
          We collect information you give us when you submit a contact form, request a download, or otherwise interact with the website. This includes your name, business email, company, country of origin, phone number, and any message you include.
        </p>

        <h2>How we use it</h2>
        <p>
          We use your information to respond to your enquiry, deliver the requested download, and (with your consent) send occasional, relevant updates about Vietnam tax and accounting. We do not sell your data.
        </p>

        <h2>Where it&apos;s stored</h2>
        <p>
          Form submissions are forwarded to our CRM and email system. The data is stored on infrastructure hosted in Singapore and the European Union. We retain contact-form data for 24 months unless you ask us to delete it sooner.
        </p>

        <h2>Your rights</h2>
        <p>
          You can request access to, correction of, or deletion of your data at any time by emailing us. We respond to all data requests within 30 days.
        </p>

        <h2>Cookies</h2>
        <p>
          We use a minimal set of cookies for essential site functionality and (where enabled) privacy-respecting analytics. We do not use advertising cookies.
        </p>

        <h2>Contact</h2>
        <p>
          For any privacy-related question, email <a href="mailto:hello@vietnamtaxadvisory.com">hello@vietnamtaxadvisory.com</a>.
        </p>
      </div>
    </div>
  );
}
