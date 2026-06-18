// Build the three lead-magnet PDFs.
// Run: node scripts/build-lead-magnets.mjs
// Outputs to public/downloads/ so the form can deliver them.

import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.resolve(__dirname, "../public/downloads");
fs.mkdirSync(outDir, { recursive: true });

const colors = {
  navy: "#0d1b2a",
  navyMid: "#1a2f45",
  ivory: "#f7f4ef",
  gold: "#b8965a",
  ink: "#1a1a1a",
  mid: "#4a4a4a",
  muted: "#7a7a7a",
};

function drawHeader(doc, eyebrow, title) {
  doc.rect(0, 0, doc.page.width, 96).fill(colors.navy);
  doc.fillColor(colors.gold).fontSize(9).font("Helvetica-Bold").text("VIETNAM TAX ADVISORY", 50, 32, { characterSpacing: 2 });
  doc.fillColor(colors.ivory).fontSize(7).font("Helvetica").text("VTA.", 0, 36, { width: doc.page.width - 50, align: "right" });
  doc.fillColor(colors.ivory).fontSize(8).font("Helvetica-Bold").text(eyebrow.toUpperCase(), 50, 56, { characterSpacing: 1.5 });
  doc.fillColor(colors.ivory).fontSize(22).font("Helvetica").text(title, 50, 68, { width: doc.page.width - 100 });
  doc.fillColor(colors.ink);
  doc.y = 130;
}

function drawFooter(doc) {
  const range = doc.bufferedPageRange();
  for (let i = range.start; i < range.start + range.count; i++) {
    doc.switchToPage(i);
    doc.fontSize(7).fillColor(colors.muted)
      .text(
        "© 2025 Vietnam Tax Advisory Co., Ltd.  ·  vietnamtaxadvisory.com  ·  hello@vietnamtaxadvisory.com",
        50,
        doc.page.height - 36,
        { width: doc.page.width - 100, align: "center" }
      );
    doc.fontSize(7).fillColor(colors.muted).text(`Page ${i + 1} of ${range.count}`, 0, doc.page.height - 22, { width: doc.page.width - 50, align: "right" });
  }
}

function drawSectionTitle(doc, num, title) {
  doc.moveDown(0.5);
  doc.fillColor(colors.gold).fontSize(8).font("Helvetica-Bold").text(`SECTION ${num}`, { characterSpacing: 1.5 });
  doc.fillColor(colors.navy).fontSize(15).font("Helvetica-Bold").text(title);
  doc.moveDown(0.3);
  doc.moveTo(50, doc.y).lineTo(doc.page.width - 50, doc.y).lineWidth(0.5).strokeColor(colors.gold).stroke();
  doc.moveDown(0.4);
}

function drawChecklistItem(doc, text) {
  doc.fillColor(colors.ink);
  const startY = doc.y;
  const boxX = 50;
  const textX = 65;
  const textWidth = doc.page.width - 100 - 15;
  doc.rect(boxX, startY + 2, 8, 8).lineWidth(0.5).strokeColor(colors.gold).stroke();
  doc.fontSize(9.5).font("Helvetica").fillColor(colors.mid).text(text, textX, startY, { width: textWidth, lineGap: 2 });
  doc.moveDown(0.3);
}

async function buildComplianceChecklist() {
  const doc = new PDFDocument({ size: "A4", margin: 50, info: { Title: "Vietnam Tax Compliance Checklist", Author: "Vietnam Tax Advisory" } });
  const out = path.join(outDir, "vietnam-tax-compliance-checklist.pdf");
  doc.pipe(fs.createWriteStream(out));

  drawHeader(doc, "Free Download", "Vietnam Tax Compliance Checklist");

  doc.fillColor(colors.mid).fontSize(10).font("Helvetica").text(
    "The 60-point compliance checklist we use with new clients. Use it quarterly to confirm every filing and every obligation is on track.",
    { width: doc.page.width - 100, lineGap: 3 }
  );
  doc.moveDown(1);

  const sections = [
    { n: "01", t: "Setup", items: [
      "IRC and ERC on file and current",
      "Tax code registered",
      "Social insurance employer registration completed",
      "Bank account opened in the company's name",
      "Company seal registered",
      "Legal representative appointed (resident or non-resident)",
    ]},
    { n: "02", t: "Monthly", items: [
      "Bank reconciliation completed within 10 working days of month-end",
      "All supplier invoices obtained in valid VAT format",
      "VAT return filed and VAT paid by the 20th of the following month",
      "PIT withholding and remittance completed by the 20th of the following month",
      "Social insurance monthly contribution file submitted by the 10th",
      "Foreign-contractor tax (FCT) declared and remitted on each payment",
      "Inter-company invoices raised and recorded",
    ]},
    { n: "03", t: "Quarterly", items: [
      "Quarterly CIT provisional payment by the 30th of the following month",
      "Quarterly financial review with the advisor",
      "Reconciliation of management accounts to tax numbers",
      "FX gain/loss reviewed and recorded",
    ]},
    { n: "04", t: "Annual", items: [
      "CIT finalisation return (Form 03/QTT-TNCN) filed by 31 March",
      "Annual financial statements (VAS) filed by 31 March",
      "Statutory audit completed and report filed by 31 March (where applicable)",
      "PIT finalisation for all employees by 31 March",
      "Transfer pricing Local File prepared by 31 March",
      "Master File prepared (where applicable) by 31 March",
      "Country-by-Country Report filed (where applicable)",
      "Dependent-allowance re-registration for PIT",
      "Social insurance contribution-base adjustment (1 Jan salary review)",
      "Work permits renewed 2–3 months before expiry",
      "TRC renewed within 30 days of expiry",
    ]},
    { n: "05", t: "Transfer Pricing", items: [
      "Inter-company agreements in place and current",
      "Service-level benefit test documented",
      "Mark-up is arm's length (benchmarking study on file)",
      "Cost-sharing agreement in place (where applicable)",
      "Royalty agreement aligned with TP documentation",
      "CbCR notification filed (where applicable)",
      "Local File is contemporaneous (not year-end)",
    ]},
    { n: "06", t: "FDI-specific", items: [
      "SBV capital contribution reported",
      "SBV loan drawdown and repayment reported (where applicable)",
      "IRC amendment filed for material changes",
      "Foreign-exchange transactions reported",
    ]},
    { n: "07", t: "Payroll", items: [
      "Labour contracts in place and on file for all employees",
      "Work permits on file for all foreign employees",
      "Salary reviews documented",
      "Overtime within statutory caps",
      "PIT certificates issued to leavers within 30 days",
      "13th-month and Tet bonuses included in the correct month",
    ]},
  ];

  for (const sec of sections) {
    if (doc.y > doc.page.height - 180) doc.addPage();
    drawSectionTitle(doc, sec.n, sec.t);
    for (const item of sec.items) {
      if (doc.y > doc.page.height - 70) doc.addPage();
      drawChecklistItem(doc, item);
    }
  }

  doc.addPage();
  drawHeader(doc, "Need help?", "How we use this checklist");
  doc.fillColor(colors.mid).fontSize(11).font("Helvetica").text(
    "This checklist is the same exercise we run as part of our new-client onboarding. The health-check takes 1-2 weeks and produces a clear remediation plan: every missed filing, every under-declared amount, and every unaddressed exposure.",
    { lineGap: 4 }
  );
  doc.moveDown(0.5);
  doc.fillColor(colors.mid).fontSize(11).text(
    "If you would like us to run the checklist on your entity, book a free 30-minute consultation and we will scope the engagement."
  );
  doc.moveDown(2);
  doc.fillColor(colors.navy).fontSize(13).font("Helvetica-Bold").text("Book a free consultation", { characterSpacing: 0.5 });
  doc.fillColor(colors.mid).fontSize(11).font("Helvetica").text("vietnamtaxadvisory.com/contact  ·  hello@vietnamtaxadvisory.com  ·  +84 (0) 28 3822 0000");

  drawFooter(doc);
  doc.end();
  return out;
}

async function buildTaxCalendar() {
  const doc = new PDFDocument({ size: "A4", margin: 50, layout: "landscape", info: { Title: "Vietnam Tax Calendar 2025", Author: "Vietnam Tax Advisory" } });
  const out = path.join(outDir, "vietnam-tax-calendar.pdf");
  doc.pipe(fs.createWriteStream(out));

  drawHeader(doc, "Free Download", "Vietnam Tax Calendar 2025");

  doc.fillColor(colors.mid).fontSize(10).font("Helvetica").text(
    "All Vietnam tax filing and payment deadlines in one place. For a calendar-year fiscal year. Bookmark this page and review it quarterly.",
    { width: doc.page.width - 100 }
  );
  doc.moveDown(1);

  // Three columns: Monthly / Quarterly / Annual
  const colWidth = (doc.page.width - 130) / 3;

  const renderColumn = (title, items, x) => {
    doc.fillColor(colors.gold).fontSize(8).font("Helvetica-Bold").text(title.toUpperCase(), x, doc.y, { characterSpacing: 1.5 });
    doc.fillColor(colors.navy).fontSize(13).font("Helvetica-Bold").text(title);
    doc.moveTo(x, doc.y + 2).lineTo(x + colWidth, doc.y + 2).lineWidth(0.5).strokeColor(colors.gold).stroke();
    const startY = doc.y + 6;
    doc.y = startY;
    for (const it of items) {
      if (doc.y > doc.page.height - 60) return;
      doc.fillColor(colors.gold).fontSize(9).font("Helvetica-Bold").text(it.day, x, doc.y, { width: 50 });
      doc.fillColor(colors.mid).fontSize(9).font("Helvetica").text(it.item, x + 55, doc.y - 11, { width: colWidth - 55, lineGap: 2 });
      doc.moveDown(0.4);
      doc.y = Math.max(doc.y, startY);
    }
  };

  const monthly = [
    { day: "10th", item: "Social insurance monthly contribution file" },
    { day: "20th", item: "Monthly VAT return and PIT withholding" },
    { day: "20th", item: "FCT declaration and remittance" },
  ];
  const quarterly = [
    { day: "Apr 30", item: "Q1 CIT provisional payment" },
    { day: "Jul 31", item: "Q2 CIT provisional payment" },
    { day: "Oct 31", item: "Q3 CIT provisional payment" },
    { day: "Jan 31", item: "Q4 CIT provisional payment" },
    { day: "Q-end+1", item: "Quarterly VAT return (where eligible)" },
  ];
  const annual = [
    { day: "Mar 31", item: "CIT finalisation return (Form 03/QTT-TNCN)" },
    { day: "Mar 31", item: "Annual financial statements (VAS)" },
    { day: "Mar 31", item: "Statutory audit report" },
    { day: "Mar 31", item: "PIT finalisation for employees" },
    { day: "Mar 31", item: "Transfer pricing Local File / Master File" },
    { day: "Jan 30", item: "PIT for self-employed / business income" },
  ];

  renderColumn("Monthly", monthly, 50);
  doc.y = 200;
  renderColumn("Quarterly", quarterly, 50 + colWidth + 15);
  doc.y = 200;
  renderColumn("Annual", annual, 50 + (colWidth + 15) * 2);

  drawFooter(doc);
  doc.end();
  return out;
}

async function buildSetupGuide() {
  const doc = new PDFDocument({ size: "A4", margin: 50, info: { Title: "Vietnam Company Setup Guide", Author: "Vietnam Tax Advisory" } });
  const out = path.join(outDir, "vietnam-company-setup-guide.pdf");
  doc.pipe(fs.createWriteStream(out));

  drawHeader(doc, "Free Download", "Vietnam Company Setup Guide");

  doc.fillColor(colors.mid).fontSize(10).font("Helvetica").text(
    "The end-to-end playbook for setting up a 100%-foreign-owned company in Vietnam. Documents, timelines, costs, and the common mistakes we see.",
    { width: doc.page.width - 100, lineGap: 3 }
  );
  doc.moveDown(1);

  const phases = [
    { n: "01", t: "Pre-engagement", d: "1–2 weeks", items: [
      "Confirm the sector is open to foreign investment",
      "Confirm the entity type (LLC vs JSC) and capital amount",
      "Engage local counsel for the licensing authority liaison",
      "Document preparation: parent-company documents, passports, project proposal",
    ]},
    { n: "02", t: "Investment Registration Certificate (IRC)", d: "3–6 weeks", items: [
      "Submit the IRC application to the Department of Planning and Investment",
      "Respond to queries on project scope, capital, environmental impact",
      "Receive the IRC recording the project, capital, scope, and investor",
    ]},
    { n: "03", t: "Enterprise Registration Certificate (ERC)", d: "1–2 weeks", items: [
      "Submit the ERC application with the company's charter and legal representative",
      "Receive the ERC recording the entity name, address, charter, and members",
    ]},
    { n: "04", t: "Sector sub-licences (if applicable)", d: "4–12 weeks", items: [
      "Conditional sectors require sub-licences from the relevant ministry",
      "Each sub-licence has its own timeline and document requirements",
    ]},
    { n: "05", t: "Post-licence registrations", d: "2–4 weeks", items: [
      "Tax code registration with the GDT",
      "Social insurance employer registration",
      "Company seal registration",
      "Bank account opening in the company's name",
      "SBV capital registration (for FDI)",
      "Customs registration (where applicable)",
    ]},
    { n: "06", t: "Operational readiness", d: "2–4 weeks", items: [
      "Chart of accounts and accounting system setup",
      "Recruit and onboard first employees (with work permits for foreign staff)",
      "Register the office lease and the legal address",
      "Brief management on the compliance calendar",
    ]},
  ];

  for (const ph of phases) {
    if (doc.y > doc.page.height - 180) doc.addPage();
    doc.fillColor(colors.gold).fontSize(8).font("Helvetica-Bold").text(`PHASE ${ph.n}  ·  ${ph.d.toUpperCase()}`, { characterSpacing: 1.5 });
    doc.fillColor(colors.navy).fontSize(15).font("Helvetica-Bold").text(ph.t);
    doc.moveTo(50, doc.y).lineTo(doc.page.width - 50, doc.y).lineWidth(0.5).strokeColor(colors.gold).stroke();
    doc.moveDown(0.3);
    for (const it of ph.items) {
      if (doc.y > doc.page.height - 60) doc.addPage();
      doc.fillColor(colors.mid).fontSize(10).font("Helvetica").text("•  " + it, { lineGap: 2, indent: 8, paragraphGap: 4 });
    }
    doc.moveDown(0.4);
  }

  doc.addPage();
  drawHeader(doc, "Next step", "Want us to handle the setup?");
  doc.fillColor(colors.mid).fontSize(11).font("Helvetica").text(
    "Our end-to-end setup engagement takes the project from document preparation to post-licence registrations. One engagement, one fee, predictable timeline.",
    { lineGap: 4 }
  );
  doc.moveDown(0.5);
  doc.fillColor(colors.mid).fontSize(11).text(
    "Book a free 30-minute consultation and we will scope the engagement and quote a fixed fee."
  );
  doc.moveDown(2);
  doc.fillColor(colors.navy).fontSize(13).font("Helvetica-Bold").text("Book a free consultation");
  doc.fillColor(colors.mid).fontSize(11).font("Helvetica").text("vietnamtaxadvisory.com/contact  ·  hello@vietnamtaxadvisory.com  ·  +84 (0) 28 3822 0000");

  drawFooter(doc);
  doc.end();
  return out;
}

const results = await Promise.all([
  buildComplianceChecklist(),
  buildTaxCalendar(),
  buildSetupGuide(),
]);
console.log("Generated PDFs:");
for (const r of results) console.log("  -", r);
