import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "24-7-micro-market-vending",
  assetType: "playbook",
  title: "24/7 Micro-Market Vending Playbook",
  subtitle: "Kiosk, refrigerated case bank, healthy-share, shrinkage, telemetry, and subsidy integration",
  intro:
    "A 24/7 micro-market is an unstaffed retail footprint inside the host's facility: an open shelving footprint, a refrigerated case bank, a self-checkout kiosk, and a payment + identity rail. Per published industry studies, micro-markets outperform comparable vending placements 30-60% on per-occupant revenue when the six operational levers in this playbook are managed. This playbook codifies each. It maps to PCI DSS v4.0, EMV + NFC, ADA Section 309.4 + 308, FALCPA allergen labeling, NIST IR 8259 (IoT baseline), and standard NAMA service KPIs.",
  sections: [
    {
      heading: "1. Kiosk + payment rails",
      items: [
        { check: "Self-checkout kiosk with EMV chip + contactless + mobile wallet + closed-loop (badge / SSO) rails. PCI DSS v4.0 AOC current within 12 months." },
        { check: "Camera-vision second-check (where supported) for loss-mitigation: kiosk validates scanned items against camera-detected items before completing transaction." },
        { check: "ADA Section 309.4 — kiosk screen, payment reader, and bagging area within reach range (15-48 inches AFF) and ≤ 5 lbf operating force." },
        { check: "Audio + accessibility — Section 707 audio output for visually impaired members; high-contrast UI mode." },
        { check: "Receipt — printed + emailed (member's opt-in); transaction history available in operator app." },
        { check: "Refund flow — member-initiated via app, SMS, or on-kiosk; cashless auto-credit within 24 hours." },
      ],
    },
    {
      heading: "2. Refrigerated case bank",
      paragraph:
        "Cold-chain is the most failure-prone subsystem in a micro-market. Per FDA Food Code and NSF/ANSI 7 standards, refrigerated SKUs require continuous temperature control with auditable logging.",
      items: [
        { label: "Temperature target", value: "Refrigerated case 35-40°F continuously; frozen case 0°F or below. Logged via telemetry; excursion outside range triggers immediate alert with 4-hour SLA." },
        { label: "Case capacity", value: "Plan for 50-80 SKUs per linear case foot at 24 inch depth. Mix: 40% beverage, 25% fresh meal / sandwich, 20% snack-prep / dairy / fruit, 15% breakfast / yogurt." },
        { label: "Door sensor", value: "Door-open / door-ajar sensor with telemetry alert at > 5 minute ajar threshold (excursion + theft risk)." },
        { label: "Cold-chain documentation", value: "Operator field-rep logs at every restock; auditable per HACCP-aligned principles. Annual sanitation per NSF 4." },
        { label: "Frozen / hot-hold (where in scope)", value: "Frozen case (Häagen-Dazs, frozen meals) at 0°F or below; hot-hold (where present) ≥ 135°F per FDA Food Code." },
      ],
    },
    {
      heading: "3. Open-shelving + planogram",
      items: [
        { check: "Open-shelving for shelf-stable SKUs (chips, bars, crackers, candy, dry pantry). Plan 70-120 SKUs per linear shelf-foot." },
        { check: "Healthy-share floor — at minimum 30% of SKUs meet NANA thresholds (≤ 200 cal, ≤ 230 mg sodium, ≤ 35% calories from fat); at wellness-focused placements 50%+. Healthy SKUs at eye-level + entry zone; not relegated to bottom shelf." },
        { check: "Allergen labeling per FALCPA on every SKU; allergen summary signage at kiosk + each shelving section; allergen-flag opt-in for app members." },
        { check: "Dietary-preference SKUs (vegetarian, vegan, halal, kosher, gluten-free) identified where demographics warrant; flagged with shelf tag." },
        { check: "Local-source SKUs (regional snack vendor, local bakery) included where requested; documented separately." },
        { check: "Quarterly telemetry-driven planogram refresh — bottom-decile SKUs swapped for member-requested + tested winners." },
      ],
    },
    {
      heading: "4. Shrinkage management",
      paragraph:
        "Shrinkage (theft + spoilage + miscounted) is the single biggest cost variable in unstaffed micro-markets. Published industry data suggests 1.5-4% shrink as typical; > 4% triggers intervention.",
      items: [
        { number: 1, title: "Camera coverage", description: "Two cameras minimum at kiosk + entry; high-shelf cameras over open shelving. 14-30 day retention, sufficient to support incident review. Privacy notice posted at entrance." },
        { number: 2, title: "Identity at entry (high-trust placements)", description: "Badge / SSO tap at entry; only identified members enter. Eliminates anonymous shrink. Best at corporate + residential + healthcare staff-only placements." },
        { number: 3, title: "Camera-vision second-check at kiosk", description: "Real-time validation of scanned items against camera-detected items. Discrepancy prompts member to re-scan. Reduces honest miscounts + opportunistic skips." },
        { number: 4, title: "Audit cadence", description: "Operator inventory audit monthly; high-shrink-rate placements bi-weekly. Variance reconciled to telemetry sales + supply receipts." },
        { number: 5, title: "Member-facing comms", description: "Welcome signage emphasizes 'unstaffed, community-trust.' Refund channel publicized. Member feedback channel for honest miscount correction." },
        { number: 6, title: "Shrink-triggered action", description: "Shrinkage > 4% over 90 days triggers (a) camera coverage review, (b) identity-rail review (move to badge-tap entry), (c) planogram review (high-shrink SKUs relocated near kiosk), (d) host comms." },
      ],
    },
    {
      heading: "5. Telemetry + reporting",
      items: [
        { label: "Connectivity", value: "Cellular modem + facility WiFi failover. Sub-15-minute heartbeat. Per-SKU velocity, per-kiosk transaction count, temperature for cold-chain." },
        { label: "Alert thresholds", value: "Kiosk offline > 30 min → operator alert. Refrigeration excursion → immediate alert + 4-hour SLA. Payment rail failure > 1 hour → operator alert." },
        { label: "Member-facing app", value: "Member sees catalog + price + healthy-flag + allergen + balance + transaction history. Refund initiation in-app." },
        { label: "Host reporting", value: "Weekly transaction-level export to host SFTP / API by 09:00 Monday. Schema published. Data ownership host; operator licensed for service + de-identified benchmarking only." },
        { label: "PCI scope", value: "P2PE or PCI-listed terminal; no PAN persistence on operator infrastructure. SOC 2 Type II for back-office." },
      ],
    },
    {
      heading: "6. Subsidy + payment integration",
      items: [
        { number: 1, title: "Full cost-recovery (default)", description: "Member pays full retail at kiosk. EMV + contactless + wallet rails. Standard for non-subsidized placements." },
        { number: 2, title: "Subsidized pricing", description: "Host subsidizes selected SKUs (typically healthy + breakfast); member pays subsidized price at kiosk. Subsidy reconciled monthly via operator settlement." },
        { number: 3, title: "Closed-loop / payroll deduct", description: "Member uses badge / SSO at kiosk; transaction posts to member's payroll-deduct account or pre-paid balance. Operator settles monthly to host AP. SOC 2 Type II on settlement environment." },
        { number: 4, title: "Tier-based pricing", description: "Loyalty tiers (active member, wellness-program enrollee, role-based) receive discounted pricing on selected SKUs. Reviewed for protected-class neutrality with HR + legal before launch." },
        { number: 5, title: "Visitor / contractor rail", description: "Non-employee visitors pay full retail via standard EMV / contactless; do not access subsidized or closed-loop rails." },
      ],
    },
    {
      heading: "7. Member experience + 24/7 operations",
      items: [
        { check: "24/7 access — host badge / lock controls; micro-market remains open even when adjacent facilities close (night shift, weekends, holidays)." },
        { check: "Lighting + safety — adequate lighting at all hours; security camera coverage; emergency phone or panic button at kiosk for after-hours incidents." },
        { check: "Cleaning cadence — operator field rep daily during business days; weekly deep clean (case sanitation, kiosk sanitation, signage refresh)." },
        { check: "Trash + recycling — visible bins; bin emptying coordinated with facility cleaning crew or operator." },
        { check: "Member feedback channel — operator app, SMS, kiosk touchpoint, email. Response within 24 hours for refund; 5 business days for non-refund feedback." },
        { check: "Comms — welcome signage explaining checkout, refund, and accessibility options; planogram refresh notices; healthy-share campaign signage." },
      ],
    },
    {
      heading: "8. Service SLA",
      headers: ["Tier", "Definition", "Acknowledge", "Resolve"],
      rows: [
        ["Tier 1 — revenue-critical / cold-chain / payment failure", "Kiosk offline, payment system down, refrigeration excursion", "≤ 4 hr", "≤ 24 hr"],
        ["Tier 2 — stockout / planogram refresh", "Single-SKU stockout, planogram update request", "≤ 24 hr", "5 days"],
        ["Tier 3 — cosmetic / signage", "Signage refresh, cabinet cleaning, label refresh", "≤ 5 days", "≤ 14 days"],
      ],
    },
    {
      heading: "9. Pre-signing red flags",
      items: [
        { check: "Operator declines telemetry on kiosk + refrigerated cases — opaque velocity + cold-chain data." },
        { check: "Shrinkage SLA absent — host bears full cost variance with no operator accountability." },
        { check: "PCI DSS v4.0 AOC not current or scope unclear." },
        { check: "Camera retention beyond 30 days by default without privacy notice." },
        { check: "Healthy-share floor not in writing — depends on operator goodwill quarter-to-quarter." },
        { check: "Closed-loop / payroll-deduct integration promised without SOC 2 Type II on settlement environment." },
        { check: "No quarterly business review — program drifts within 2 quarters." },
      ],
    },
  ],
  footer:
    "This playbook is informational. Final contract terms should be reviewed by your counsel and IT/security team where identity integration is in scope. Cold-chain operations should align with applicable state + local health-department permits and HACCP-aligned principles.",
});

console.log("wrote "+"24-7-micro-market-vending");
