import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "ai-vending-data-analytics-product-trends",
  assetType: "matrix",
  title: "AI Vending Data Analytics Framework",
  subtitle: "Capability matrix, analytics platform comparison, planogram + customer cohort layer",
  intro:
    "This framework gives multi-site operators and host procurement teams a structured way to evaluate AI vending analytics capability. References to standard retail analytics methods (per-SKU velocity, lift, basket affinity), PCI-DSS 4.0 for cashless transaction handling, GDPR / CCPA where identity is captured via account or app, and FDA Food Code 3-501.16 for cold-chain telemetry where applicable. Capability-framed throughout.",
  sections: [
    {
      heading: "1. Capability matrix — analytics dimensions",
      headers: ["Capability", "Baseline (table stakes)", "Advanced", "Best-in-class", "Verify by"],
      rows: [
        ["Per-SKU velocity", "Daily aggregate per machine", "Hourly + day-part decomposition", "Real-time + per-hour with per-customer cohort", "Operator portal export"],
        ["Cashless mix", "% cash vs cashless monthly", "Per-machine + per-day-part", "Per-cohort + payment-method affinity", "Operator portal + processor report"],
        ["Refund rate + reasons", "Total refund $ + count", "Reason-code segmentation", "Reason × SKU × machine + sentiment from open-text", "Operator portal export"],
        ["Stockout incidents", "Manual count + telemetry threshold", "Telemetry alert + auto-route adjustment", "Predictive stockout (lead time × velocity)", "Telemetry alert log"],
        ["Basket affinity", "Not standard at baseline", "Top-pairs per machine monthly", "Cohort × machine × time-of-day affinity matrix", "AI cooler vision-system log"],
        ["Cold-chain telemetry", "Internal-temp log per machine", "Real-time temp + alert ≤ 4 hr excursion", "Predictive maintenance + alert ≤ 15 min excursion + 4-hr resolution SLA", "FDA Food Code 3-501.16 compliance log"],
        ["Customer cohort tracking", "Anonymous transactions only", "Anonymized cohort by repeat-pattern", "Account-linked cohort with consent (GDPR / CCPA flow-down)", "Account / app data export"],
        ["Vision-system accuracy (AI cooler)", "Operator attestation", "Quarterly accuracy report", "Per-SKU mis-charge rate + recalibration log", "Operator vision-system audit"],
      ],
    },
    {
      heading: "2. Analytics platform comparison",
      headers: ["Platform", "Telemetry strength", "Reporting UX", "API export", "Best-fit operator size"],
      rows: [
        ["Cantaloupe (Seed)", "Mature; widest fleet integration", "Strong dashboard + scheduled reports", "REST API + scheduled CSV", "Mid + large operators"],
        ["Nayax (Onyx)", "Strong payment + telemetry stack", "Modern UI; mobile-first", "REST API + webhook", "Small to large; international"],
        ["365 Retail Markets", "Strong micro-market + cooler", "Account-app + reporting console", "API on enterprise tier", "Micro-market + cooler-focused operators"],
        ["AWM Smart Shelf", "Computer-vision + weight stack", "Vision-system analytics", "API on enterprise tier", "Vision-system cooler operators"],
        ["Vagabond / Parlevel", "Strong route + restock optimization", "Route-driver mobile + back-office", "API + CSV", "Mid operators with optimization focus"],
        ["VendSys / VendingMetrics / others", "Various", "Various", "Various", "Small operators or specialty fleets"],
      ],
    },
    {
      heading: "3. Planogram + customer cohort layer",
      paragraph:
        "Standard telemetry covers per-SKU velocity. Customer cohort analytics layer on top using AI cooler vision-system or account-linked data with consent. Use the rubric below to evaluate operator capability beyond table-stakes telemetry.",
      items: [
        { label: "Layer 1 — Per-SKU velocity (baseline)", value: "Operator should publish daily per-SKU velocity per machine. Standard via Cantaloupe / Nayax / 365 / AWM. Drives standard planogram refresh." },
        { label: "Layer 2 — Day-part decomposition", value: "Operator should split velocity by morning / midday / evening / overnight day-parts. Identifies shift-aware or visit-aware planogram opportunities." },
        { label: "Layer 3 — Basket affinity", value: "Operator should publish top-pair affinity (which 2 SKUs co-occur in baskets). Available natively in AI cooler vision systems; partial in micro-market account-linked data." },
        { label: "Layer 4 — Customer cohort", value: "Operator should publish cohort-level reports where account / app data permit (with GDPR / CCPA consent). Cohorts: new vs repeat, frequency tier, basket-size tier, time-of-day tier. Drives targeted promotion + planogram." },
        { label: "Layer 5 — Predictive replenishment", value: "Operator should run route-optimization off telemetry × velocity × lead time. Reduces stockout incidents by 30-50% per industry benchmarks." },
        { label: "Layer 6 — Sentiment from open-text feedback", value: "Operator should aggregate refund + feedback open-text into sentiment categories quarterly. Drives planogram + SKU quality decisions." },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal advice. Hosts collecting account / app data should confirm GDPR / CCPA compliance with counsel. Operator analytics claims should be verified through portal demo, sample report export, and reference calls. LetUsVending can connect host teams with operators equipped to provide advanced analytics.",
});

console.log("wrote "+"ai-vending-data-analytics-product-trends");
