import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "can-small-businesses-use-vending-management-services",
  assetType: "pack",
  title: "Small-Business VMS Evaluation Pack",
  subtitle: "Operator shortlist criteria, qualification template, and contract checklist for SMB placements",
  intro:
    "Small-business placements (typically 25-200 employees, single site) sit below most regional VMS minimum-volume thresholds. This pack helps you qualify operators willing to serve SMB volumes, evaluate them against published industry SLA norms, and structure a contract that protects both sides without burdensome minimums.",
  sections: [
    {
      heading: "1. SMB-fit operator shortlist criteria",
      paragraph:
        "Most regional and national VMS firms publish minimum-volume thresholds (commonly 100-200 employees per site or 30,000+ USD annual revenue per machine). Independent and small-regional operators typically serve below those thresholds.",
      items: [
        { label: "Footprint match", value: "Operator's route density within 25 miles of your site. Density drives restock cost; without density, operator either declines or charges a service fee." },
        { label: "Account-size mix", value: "Confirm 40%+ of operator's book is sub-200-employee accounts. Operators whose book is dominated by large accounts often deprioritize SMBs at first stockout." },
        { label: "Equipment age policy", value: "SMB placements often receive older equipment. Specify max age (e.g., ≤ 7 years) or 'card-reader-equipped' minimum in RFP." },
        { label: "Insurance + licensing", value: "Operator carries 1M general liability + auto + product liability. Health-department permit for food/beverage in the jurisdiction." },
      ],
    },
    {
      heading: "2. Volume threshold + commission realism",
      paragraph:
        "SMB placements rarely justify commission. NAMA-published industry data suggests sub-100-employee single-machine placements typically generate 8,000-18,000 USD annual gross revenue. After cost of goods, route labor, and telemetry, operator gross margin is 12-22%.",
      headers: ["Employee count", "Typical annual gross / machine", "Commission expectation", "Subsidy posture"],
      rows: [
        ["Under 50", "4,000 – 9,000 USD", "Zero; operator may decline or charge service fee", "Host typically subsidizes if price points are kept down"],
        ["50 – 100", "8,000 – 18,000 USD", "0 – 5% on lines above threshold", "Subsidy optional"],
        ["100 – 200", "15,000 – 35,000 USD", "5 – 15% standard", "Subsidy not typical at this size"],
        ["200+", "30,000 USD and up", "15 – 25%", "Subsidy uncommon"],
      ],
    },
    {
      heading: "3. Qualification questionnaire (to operator)",
      items: [
        { number: 1, title: "Density + service window", description: "How many active accounts within 10 miles of our site? What is your typical restock day-of-week and time window for our zone?" },
        { number: 2, title: "Minimum-volume threshold", description: "What is your minimum monthly gross per machine to keep the account active? What happens if we fall below — service fee, reduced cadence, or termination notice?" },
        { number: 3, title: "Equipment + telemetry", description: "Will our machine be telemetry-enabled (Cantaloupe, Nayax, 365, or comparable)? Equipment year of manufacture? Card-reader rail coverage?" },
        { number: 4, title: "Stockout response", description: "What is your SLA on a reported stockout? On a payment-system failure? On a machine offline?" },
        { number: 5, title: "Planogram flexibility", description: "Will you accommodate per-quarter planogram refresh based on our employee feedback survey? How is sub-pack pricing set — operator discretion, fixed schedule, or agreed price list?" },
        { number: 6, title: "Healthy-share + allergen", description: "What percentage of slots can be allocated to healthy SKUs (under 200 cal, under 230 mg sodium, under 35% calories from fat)? Allergen labeling on each SKU per FALCPA?" },
        { number: 7, title: "Exit + transfer", description: "Notice period to terminate? Equipment removal cost? Any liquidated damages or buyout clause?" },
      ],
    },
    {
      heading: "4. Contract checklist — SMB-protective terms",
      items: [
        { check: "Term: 12 months initial, month-to-month after, 30-day mutual termination notice. Avoid 36+ month terms without exit ramps." },
        { check: "Service SLA in writing — uptime target (97%+), stockout resolution (24-48 hours), machine-offline resolution (24 hours)." },
        { check: "Right to request equipment swap if uptime falls below 95% in any rolling 90-day window." },
        { check: "Price list reference (operator price list as of date) with annual escalator cap (CPI or 5%, whichever lower)." },
        { check: "Quarterly business review with telemetry-derived data: per-SKU velocity, uptime, stockout count, refund rate." },
        { check: "Refund procedure: member-initiated app/SMS refund, cashless auto-credit within 24 hours, cash via slip + next-visit credit." },
        { check: "Liability + insurance: operator names host as additional insured; certificate on file." },
        { check: "Food safety + allergen: operator attests to FALCPA labeling and local health-department permit currency." },
        { check: "Data: host owns aggregate transaction data; operator may use de-identified data for benchmarking only." },
      ],
    },
    {
      heading: "5. Service-fee structures when commission won't work",
      paragraph:
        "Where account volume is below the operator's threshold, a service fee can keep service quality intact without forcing the operator to operate at a loss.",
      items: [
        { label: "Monthly service fee", value: "Fixed monthly amount (e.g., 75-200 USD) the host pays to maintain restock cadence regardless of sales volume. Common at sub-50-employee sites." },
        { label: "Subsidized pricing", value: "Host pays operator the gap between member price (e.g., 0.50 coffee) and operator wholesale + margin floor. Used in white-glove or recruiting-tool placements." },
        { label: "Equipment lease", value: "Host leases equipment from operator at a fixed monthly rate; host operates planogram independently or via 'reverse-vend' fill service." },
        { label: "Office coffee bundle", value: "Combine coffee + snack + cold beverage into a single managed program; bundle volume often qualifies for full VMS service." },
      ],
    },
    {
      heading: "6. Operator-scoring rubric (100 points)",
      items: [
        { check: "Density + service-window fit — 15 points." },
        { check: "Equipment age + telemetry rail coverage — 15 points." },
        { check: "Healthy-share + allergen capability — 10 points." },
        { check: "SLA terms (uptime, stockout, offline) in writing — 15 points." },
        { check: "Pricing transparency + escalator cap — 10 points." },
        { check: "Reference checks (3 SMB-sized accounts) — 15 points." },
        { check: "Insurance + licensing complete — 10 points." },
        { check: "Exit terms (notice period, removal cost) — 10 points." },
      ],
    },
    {
      heading: "7. Pre-signing red flags",
      items: [
        { check: "Operator refuses telemetry on your machine — opaque velocity data." },
        { check: "Operator requires 36+ month term with no early-exit clause." },
        { check: "Operator declines to put SLA in writing." },
        { check: "Operator price list 'subject to change without notice' with no cap." },
        { check: "Operator references include zero accounts under 200 employees." },
        { check: "Operator declines additional-insured endorsement." },
      ],
    },
  ],
  footer:
    "This pack is informational. LetUsVending can describe operator alternatives in your market based on density and account-mix fit. Final contract terms should be reviewed by your counsel.",
});

console.log("wrote "+"can-small-businesses-use-vending-management-services");
