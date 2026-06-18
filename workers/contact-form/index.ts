// Cloudflare Worker for handling contact + lead-magnet form submissions
// Deploy with: wrangler deploy
// Configure secrets with: wrangler secret put RESEND_API_KEY
//                        wrangler secret put CRM_WEBHOOK_URL
//                        wrangler secret put ALLOWED_ORIGIN
//
// The worker is CORS-friendly and proxies form submissions to:
// - Resend (transactional email) for inbound notification
// - A configurable CRM webhook (HubSpot, Pipedrive, Zapier, etc.)
// - A static file on /downloads for the lead-magnet asset delivery

export interface Env {
  RESEND_API_KEY: string;
  CRM_WEBHOOK_URL: string;
  ALLOWED_ORIGIN: string;
  NOTIFY_EMAIL: string;
  FROM_EMAIL: string;
}

interface LeadPayload {
  type: "contact" | "lead-magnet";
  firstName?: string;
  lastName?: string;
  email: string;
  company?: string;
  country?: string;
  phone?: string;
  service?: string;
  revenue?: string;
  message?: string;
  asset?: string;
  source?: string;
  timestamp?: string;
}

const CORS = (origin: string) => ({
  "Access-Control-Allow-Origin": origin,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
});

function jsonResponse(data: object, status: number, origin: string) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...CORS(origin) },
  });
}

async function sendEmail(env: Env, payload: LeadPayload) {
  if (!env.RESEND_API_KEY) return;
  const subject =
    payload.type === "contact"
      ? `[VTA] New consultation request from ${payload.firstName ?? ""} ${payload.lastName ?? ""} (${payload.company ?? "n/a"})`
      : `[VTA] New lead-magnet download: ${payload.asset ?? "unknown"} — ${payload.email}`;
  const body = Object.entries(payload)
    .map(([k, v]) => `${k}: ${v ?? ""}`)
    .join("\n");
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.FROM_EMAIL || "Vietnam Tax Advisory <noreply@vietnamtaxadvisory.com>",
      to: [env.NOTIFY_EMAIL || "hello@vietnamtaxadvisory.com"],
      subject,
      text: body,
    }),
  });
}

async function forwardToCRM(env: Env, payload: LeadPayload) {
  if (!env.CRM_WEBHOOK_URL) return;
  await fetch(env.CRM_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = env.ALLOWED_ORIGIN || "*";
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS(origin) });
    }

    if (request.method !== "POST") {
      return jsonResponse({ error: "Method not allowed" }, 405, origin);
    }

    let payload: LeadPayload;
    try {
      payload = await request.json();
    } catch {
      return jsonResponse({ error: "Invalid JSON" }, 400, origin);
    }

    if (!payload.email || !isValidEmail(payload.email)) {
      return jsonResponse({ error: "Valid email is required" }, 400, origin);
    }
    if (payload.type === "contact" && !payload.firstName) {
      return jsonResponse({ error: "First name is required" }, 400, origin);
    }

    try {
      // Forward in parallel — neither blocks the other
      await Promise.all([
        sendEmail(env, payload),
        forwardToCRM(env, payload),
      ]);
    } catch (err) {
      // Log to console; do not fail the user-facing request
      console.error("Forwarding error:", err);
    }

    return jsonResponse({ ok: true }, 200, origin);
  },
};
