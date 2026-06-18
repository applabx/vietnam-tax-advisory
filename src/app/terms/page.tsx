import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Use",
  description: "Terms of use for Vietnam Tax Advisory website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="bg-white section-pad">
      <div className="container-page max-w-3xl prose-vietnam">
        <h1>Terms of Use</h1>
        <p className="text-[13px] text-ink-muted">Last updated: January 2025</p>

        <h2>1. Acceptance</h2>
        <p>
          By accessing this website, you agree to these terms. If you do not agree, please do not use the website.
        </p>

        <h2>2. Information is general</h2>
        <p>
          The content on this website is general in nature and does not constitute professional tax, accounting, or legal advice. Specific advice requires engagement. We do not warrant the accuracy, completeness, or fitness of any information on this site for any particular purpose.
        </p>

        <h2>3. No client relationship</h2>
        <p>
          Visiting this site, reading the content, or downloading a resource does not create a client-advisor relationship. A client relationship is formed only on execution of a written engagement letter.
        </p>

        <h2>4. Intellectual property</h2>
        <p>
          The content, design, and code on this website are owned by Vietnam Tax Advisory Co., Ltd. You may share and quote for non-commercial purposes with attribution. Republication or commercial use requires written permission.
        </p>

        <h2>5. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, Vietnam Tax Advisory is not liable for any loss or damage arising from your use of this website or reliance on its content.
        </p>

        <h2>6. Governing law</h2>
        <p>
          These terms are governed by the laws of Vietnam. Any dispute is subject to the exclusive jurisdiction of the courts of Ho Chi Minh City.
        </p>
      </div>
    </div>
  );
}
