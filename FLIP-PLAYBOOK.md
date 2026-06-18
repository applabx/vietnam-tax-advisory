# DNS Flip Playbook — 60 seconds

## What is broken right now

Production `https://accounting-agency.investvietnam.co` is still serving the **old build** with:

- "Big-4 Alumni Team" trust claim
- Fabricated `Linh Nguyen` and `Marc Schneider` Person schema entries
- `foundingDate: 2014` Organization schema
- Old canonical pointing to `https://vietnamtaxadvisory.com/`
- Old title without "Vietnam Tax Advisory —" prefix

The cleaned build is live at `https://e9d5a494.vietnam-tax-advisory-b5f.pages.dev/` and ready to take over.

## What needs to happen (1 DNS record edit, ~60 seconds)

In the **Cloudflare account that owns the `investvietnam.co` zone** (you know which one this is — it's the account where you originally set up the zone):

### Step 1. Find the existing record

1. Log in to Cloudflare dashboard
2. Select the account containing `investvietnam.co`
3. Click **DNS → Records**
4. Find the existing record for `accounting-agency`
   - It will be a CNAME pointing to `vietnam-tax-advisory.pages.dev`
   - Or an A record pointing to CF IPs (`172.67.x.x` / `104.21.x.x`)

### Step 2a. If the existing record is a CNAME

- Click **Edit** on the `accounting-ag` CNAME
- Change **Target** from `vietnam-tax-advisory.pages.dev` to `vietnam-tax-advisory-b5f.pages.dev`
- Confirm **Proxy status** is **Proxied** (orange cloud ON)
- Click **Save**

### Step 2b. If the existing record is an A record

- Click **Delete** on the existing A record
- Click **Add record**
- Type: **CNAME**
- Name: `accounting-agency`
- Target: `vietnam-tax-advisory-b5f.pages.dev`
- Proxy status: **Proxied**
- Click **Save**

### Step 3. Wait and verify

Wait 60–120 seconds for SSL re-provisioning. CF will provision a new certificate under the new Pages project.

Then run the verification script (next file in this repo): `bash verify-production.sh`

Expected output after the flip:

```
✅ Check 1:  Homepage no 'BIG-4 ALUMNI TEAM'           — PASS
✅ Check 2:  Trust strip shows cleaned claims          — PASS
✅ Check 3:  No 'Linh Nguyen'                          — PASS
✅ Check 4:  No 'Marc Schneider'                      — PASS
✅ Check 5:  No fake Person schema                    — PASS
✅ Check 6:  No AggregateRating schema                — PASS
✅ Check 7:  Contact form mailto fallback             — PASS
✅ Check 8:  Resource forms mailto fallback           — PASS
✅ Check 9:  /sitemap.xml returns 200                 — PASS
✅ Check 10: /robots.txt returns 200                  — PASS
✅ Check 11: /llms.txt returns 200                    — PASS
✅ Check 12: SSL valid                                — PASS
✅ Check 13: HTTP redirects to HTTPS                  — PASS
✅ Check 14: Canonical = accounting-agency…           — PASS
✅ Check 15: Lighthouse production ≥ 95 / 95 / 95     — (run separately)
```

## If the flip fails

**Symptom A:** Browser shows "This site can't be reached" or "DNS_PROBE_FINISHED_NXDOMAIN"
- The CNAME may have a typo. Double-check the target is exactly `vietnam-tax-advisory-b5f.pages.dev` (lowercase, with hyphen-b5f).

**Symptom B:** Browser shows the old build after 5+ minutes
- CF may be serving from cache. Run `curl -s "https://accounting-agency.investvietnam.co/" | head -c 5000 | grep -c "Linh Nguyen"` — if non-zero, the cache hasn't refreshed. Try adding `?cache_bust=$(date +%s)` to the URL.

**Symptom C:** SSL error / "Your connection is not private"
- SSL hasn't finished re-provisioning. CF Pages SSL typically completes in 1–5 minutes. Wait and retry.

**Symptom D:** "Error 1016 — Origin DNS error"
- The custom domain is registered on the new Pages project but the CNAME hasn't been updated in the DNS zone. Re-check step 2.

## After the flip is verified

Ping me with confirmation. I will then:

1. Re-run all 15 production checks
2. Capture the production-domain Lighthouse scores
3. Verify the canonical points to `https://accounting-agency.investvietnam.co/`
4. Issue the final launch confirmation

Until the flip happens, this launch is on hold. Everything else is ready.
