import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "common-location-deal-breakers",
  assetType: "checklist",
  title: "Vending Location Deal-Breaker Checklist",
  subtitle: "12 walk-away signals + restructuring patterns for owner-operators",
  intro:
    "Owner-operators evaluating a new placement frequently sign a 12-month commitment based on a single capture-rate estimate. This checklist gives a 12-signal walk-away framework derived from common patterns in route-route operator forums (NAMA OpX, Vending Times, AVN). Each signal is paired with a restructuring pattern — a way to keep the location only if specific changes are negotiated up front.",
  sections: [
    {
      heading: "1. Population + capture-rate signals",
      items: [
        { check: "Signal 1 — Average daily population (ADP) < 75 in a single-machine placement (snack); walk away or restructure as cashless-only with no service-truck dedication." },
        { check: "Signal 2 — Hybrid / remote workforce > 50%; office ADP is the in-office headcount, not the badge roster. Verify with HR or badge-data sample." },
        { check: "Signal 3 — Single-shift placement that's claimed as 24/7 — confirm by walk-through at 11 PM and 3 AM before committing." },
        { check: "Signal 4 — Visible competitor (corner store, food trucks, third-party micro-market) within 500 ft and contractually preferred." },
      ],
    },
    {
      heading: "2. Commission + economics signals",
      items: [
        { check: "Signal 5 — Decision-maker demands commission > 25% at projected gross < $8,000/yr; math does not work for a route operator. Restructure or walk." },
        { check: "Signal 6 — Decision-maker demands flat monthly minimum unbacked by ADP × capture × ticket; ask for a 90-day capture-rate validation period instead." },
        { check: "Signal 7 — Decision-maker demands exclusive of allergen / dietary lines (no nuts, vegan-only, etc.) that cut planogram by > 30%; capture rate will drop by the same magnitude." },
      ],
    },
    {
      heading: "3. Site + install signals",
      items: [
        { check: "Signal 8 — Cellular signal < -110 dBm RSRP at proposed placement; telemetry + payment will be unreliable. Restructure as Wi-Fi VLAN or walk." },
        { check: "Signal 9 — No dedicated 120V/20A circuit (NEC 210.23(B)(2)) and decision-maker unwilling to fund electrical scope." },
        { check: "Signal 10 — Doorway < 36 in or delivery path requires > 2 stairs without freight elevator; cost-of-delivery exceeds first-year commission." },
      ],
    },
    {
      heading: "4. Contract + behavior signals",
      items: [
        { check: "Signal 11 — Decision-maker won't sign a written agreement, won't commit to a term, or demands month-to-month with 30-day termination at-will; route economics require term stability." },
        { check: "Signal 12 — Pattern of unpaid prior operator invoices, contested commissions, or chargebacks on prior installs (verify via NAMA / regional operator network if accessible)." },
      ],
    },
    {
      heading: "5. Restructuring patterns (keep the placement on different terms)",
      headers: ["Signal", "Restructure"],
      rows: [
        ["Low ADP (< 75)", "Cashless-only mini-machine; no service truck dedication; route stop only when batched with adjacent placements."],
        ["Hybrid workforce", "Telemetry-driven 1x/week service; planogram targets in-office days (typically Tue/Wed/Thu)."],
        ["Single-shift only", "Pull machine to day-only operating window; remove shift-3 inventory exposure."],
        ["Competitor proximity", "Differentiate planogram (fresh + cold-chain vs shelf-stable); negotiate exclusivity zone."],
        ["High-commission demand", "Tiered commission with floor that activates only above breakeven gross."],
        ["Allergen-restricted planogram", "Adjusted capture-rate model; minimum gross floor; 90-day validation period."],
        ["Weak cellular", "Operator-funded cellular booster or facility VLAN with PCI DSS v4.0.1 segmentation."],
        ["No dedicated circuit", "Decision-maker funds NEC-compliant electrical scope before install."],
        ["Difficult delivery path", "One-time piano-dolly delivery surcharge in contract; subsequent service uses smaller stock cart."],
      ],
    },
    {
      heading: "6. 90-day validation period clauses",
      paragraph:
        "Where you can't walk because the placement matches strategic route geometry, negotiate a 90-day validation period — written into the agreement — with the right to renegotiate or exit if economics do not match projection.",
      items: [
        { check: "Telemetry baseline established Day 1-30; per-shift velocity captured." },
        { check: "Day 60 review: actual vs projected gross; planogram refresh if capture rate < 80% of projection." },
        { check: "Day 90 decision: continue at current terms, renegotiate commission + planogram, or 30-day exit." },
        { check: "Documentation: per-month gross + commission + service hours logged; share with decision-maker for transparency." },
      ],
    },
    {
      heading: "7. Walk-away script (verbatim)",
      paragraph:
        "When the placement fails 2+ signals and restructuring is not on the table, exit professionally. Reputation is the most valuable asset on a route.",
      items: [
        { check: "\"Thanks for the opportunity — based on the population profile and our economics, this placement falls below our minimum service threshold. I can recommend a colleague who runs smaller-format machines.\"" },
        { check: "\"Our minimum to deploy a refrigerated unit is $X/year in projected gross — your placement projects below that. Happy to revisit if conditions change.\"" },
        { check: "\"Without a dedicated NEC-compliant circuit, we can't guarantee uptime. If that changes we'd love to revisit.\"" },
        { check: "Leave a card; document the conversation; circle back in 6 months if the placement profile changes." },
      ],
    },
  ],
  footer:
    "Informational only — not legal or business advice. Verify each placement with site survey + 90-day economics model. LetUsVending is equipped to match operators to placements based on route economics and to coordinate transparent decision-maker conversations.",
});

console.log("wrote "+"common-location-deal-breakers");
