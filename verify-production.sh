#!/usr/bin/env bash
# verify-production.sh
# Run after the DNS flip to confirm production serves the cleaned build.
# Usage: bash verify-production.sh

set -u
PROD="https://accounting-agency.investvietnam.co"

# ANSI colours
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

PASS=0
FAIL=0

check_pass() { echo -e "${GREEN}✅ PASS${NC}  $1"; PASS=$((PASS+1)); }
check_fail() { echo -e "${RED}❌ FAIL${NC}  $1"; FAIL=$((FAIL+1)); }
check_warn() { echo -e "${YELLOW}⚠ WARN${NC}  $1"; }

echo "============================================================"
echo " Production Cutover Verification"
echo " Target: $PROD"
echo " Run at: $(date -u +"%Y-%m-%dT%H:%M:%SZ")"
echo "============================================================"
echo

echo "── Fetching homepage ──"
HTML=$(curl -sL --max-time 20 "$PROD/" 2>/dev/null)
if [ -z "$HTML" ]; then
  echo -e "${RED}❌ FAIL  Could not fetch $PROD/ — is DNS flipped?${NC}"
  echo
  echo "Run 'nslookup accounting-agency.investvietnam.co' and confirm"
  echo "the A records are 104.21.x.x / 172.67.x.x. If they show the"
  echo "old project, the CNAME wasn't updated."
  exit 1
fi
echo "OK — $(printf '%s' "$HTML" | wc -c | tr -d ' ') bytes"
echo

echo "── Check 1: Homepage has NO 'BIG-4 ALUMNI TEAM' ──"
n=$(printf '%s' "$HTML" | grep -oc "BIG-4 ALUMNI TEAM" || true)
if [ "$n" = "0" ]; then check_pass "No 'BIG-4 ALUMNI TEAM' on home"; else check_fail "Found 'BIG-4 ALUMNI TEAM' ×$n"; fi

echo "── Check 2: Homepage shows cleaned trust-strip claims ──"
n=$(printf '%s' "$HTML" | grep -oc "VIETNAM-LICENSED TAX AGENT" || true)
if [ "$n" -ge "1" ]; then check_pass "Cleaned trust strip present (VIETNAM-LICENSED TAX AGENT)"; else check_fail "Cleaned trust strip missing"; fi

echo "── Check 3: Homepage has NO 'Linh Nguyen' anywhere ──"
n=$(printf '%s' "$HTML" | grep -oc "Linh Nguyen" || true)
if [ "$n" = "0" ]; then check_pass "No 'Linh Nguyen' on home"; else check_fail "Found 'Linh Nguyen' ×$n"; fi

echo "── Check 4: Homepage has NO 'Marc Schneider' anywhere ──"
n=$(printf '%s' "$HTML" | grep -oc "Marc Schneider" || true)
if [ "$n" = "0" ]; then check_pass "No 'Marc Schneider' on home"; else check_fail "Found 'Marc Schneider' ×$n"; fi

echo "── Check 5: Homepage has NO fake Person schema ──"
n=$(printf '%s' "$HTML" | grep -oc '"@type":"Person"' || true)
if [ "$n" = "0" ]; then check_pass "No Person schema on home"; else check_fail "Found Person schema ×$n"; fi

echo "── Check 6: Homepage has NO AggregateRating schema ──"
n=$(printf '%s' "$HTML" | grep -oc "AggregateRating" || true)
if [ "$n" = "0" ]; then check_pass "No AggregateRating schema"; else check_fail "Found AggregateRating ×$n"; fi

echo "── Check 7: Contact form has mailto fallback ──"
HTML_C=$(curl -sL --max-time 20 "$PROD/contact" 2>/dev/null)
mailto=$(printf '%s' "$HTML_C" | grep -oE 'action="mailto:[^"]+"' | head -1)
if [ -n "$mailto" ]; then check_pass "Contact form mailto: $mailto"; else check_fail "Contact form has no mailto: fallback"; fi

echo "── Check 8: Resource download forms have mailto fallback ──"
for p in resources/checklist resources/setup-guide; do
  HTML_R=$(curl -sL --max-time 20 "$PROD/$p" 2>/dev/null)
  mailto_r=$(printf '%s' "$HTML_R" | grep -oE 'action="mailto:[^"]+"' | head -1)
  if [ -n "$mailto_r" ]; then check_pass "$p form mailto: $mailto_r"; else check_fail "$p form has no mailto: fallback"; fi
done

echo "── Check 9: /sitemap.xml returns 200 ──"
status=$(curl -sIL --max-time 15 "$PROD/sitemap.xml" 2>/dev/null | head -1 | awk '{print $2}')
if [ "$status" = "200" ]; then check_pass "/sitemap.xml = $status"; else check_fail "/sitemap.xml = $status"; fi

echo "── Check 10: /robots.txt returns 200 ──"
status=$(curl -sIL --max-time 15 "$PROD/robots.txt" 2>/dev/null | head -1 | awk '{print $2}')
if [ "$status" = "200" ]; then check_pass "/robots.txt = $status"; else check_fail "/robots.txt = $status"; fi

echo "── Check 11: /llms.txt returns 200 ──"
status=$(curl -sIL --max-time 15 "$PROD/llms.txt" 2>/dev/null | head -1 | awk '{print $2}')
if [ "$status" = "200" ]; then check_pass "/llms.txt = $status"; else check_fail "/llms.txt = $status"; fi

echo "── Check 12: SSL certificate valid ──"
expiry=$(echo | openssl s_client -servername accounting-agency.investvietnam.co -connect accounting-agency.investvietnam.co:443 2>/dev/null | openssl x509 -noout -enddate 2>&1 | sed 's/.*=//')
if [ -n "$expiry" ]; then check_pass "SSL valid until $expiry"; else check_fail "SSL probe failed"; fi

echo "── Check 13: HTTP redirects to HTTPS ──"
loc=$(curl -sI --max-time 15 "http://accounting-agency.investvietnam.co/" 2>/dev/null | grep -i "^location:" | head -1 | awk '{print $2}' | tr -d '\r')
if echo "$loc" | grep -q "https://"; then check_pass "HTTP→HTTPS: $loc"; else check_fail "HTTP→HTTPS location: $loc"; fi

echo "── Check 14: Canonical URL ──"
canonical=$(printf '%s' "$HTML" | grep -oE 'rel="canonical" href="[^"]+"' | head -1 | sed 's/.*href="//; s/"//')
expected="https://accounting-agency.investvietnam.co/"
if [ "$canonical" = "$expected" ]; then check_pass "Canonical = $canonical"; else check_fail "Canonical = $canonical (expected $expected)"; fi

echo "── Check 15: Page title ──"
title=$(printf '%s' "$HTML" | grep -oE '<title>[^<]+</title>' | head -1 | sed 's|<title>||; s|</title>||')
if echo "$title" | grep -q "Vietnam Tax Advisory"; then check_pass "Title = $title"; else check_fail "Title = $title"; fi

echo
echo "============================================================"
echo " Result:  ${GREEN}${PASS} passed${NC}, ${RED}${FAIL} failed${NC}"
echo "============================================================"

if [ "$FAIL" = "0" ]; then
  echo
  echo -e "${GREEN}✅ Production cutover VERIFIED.${NC}"
  echo "   The cleaned build is live at $PROD"
  echo
  echo "Next steps:"
  echo "  1. Add site to Google Search Console: https://search.google.com/search-console"
  echo "  2. Add site to Bing Webmaster Tools: https://www.bing.com/webmasters"
  echo "  3. Enable Cloudflare Analytics in CF Pages → Analytics"
  echo "  4. Submit sitemap to GSC for indexing"
  echo
  exit 0
else
  echo
  echo -e "${RED}❌ Production cutover FAILED.${NC}"
  echo
  echo "The DNS CNAME has not been updated, or propagation is incomplete."
  echo "See FLIP-PLAYBOOK.md for the exact DNS change required."
  echo
  echo "Quick checks:"
  echo "  - Confirm the production CNAME points to: vietnam-tax-advisory-b5f.pages.dev"
  echo "  - Wait 5 minutes for CF SSL provisioning"
  echo "  - Re-run: bash verify-production.sh"
  echo
  exit 1
fi
