import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "healthy-beverage-vending-hospitals",
  assetType: "pack",
  title: "Hospital Healthy-Beverage Vending Pack",
  subtitle: "Framework comparison, planogram template, contract language, measurement framework",
  intro:
    "Hospitals across the U.S. — Kaiser Permanente, Cleveland Clinic, Boston Children's, NYC Health + Hospitals, and many academic medical centers — operate under formal healthy-beverage policies. This pack compares the four leading frameworks, provides a planogram template, contract clauses to require, and the measurement framework to prove compliance.",
  sections: [
    {
      heading: "1. Four leading healthy-beverage frameworks",
      paragraph:
        "Each framework defines tiered categories (typically green/yellow/red) and a minimum share commitment. Choose one and write it into the contract.",
      headers: ["Framework", "Definition", "Reference / publisher"],
      rows: [
        ["AHA Healthy Workplace F&B Toolkit", "Tier 1 Healthier Choice / Tier 2 Promote / Tier 3 Discourage; ≥ 50% Healthier", "American Heart Association 2021 update"],
        ["Partnership for a Healthier America (PHA)", "Tier 1 water/unsweetened (≥ 50%) / Tier 2 ≤ 40 cal per 8oz (≤ 30%) / Tier 3 (≤ 20%)", "PHA Healthier Vending Initiative 2018-2023"],
        ["Kaiser Permanente Healthy Picks", "Green ≤ 5g added sugar per 8oz; Yellow ≤ 12g; Red > 12g; ≥ 30% green; cap red ≤ 20%", "Kaiser Permanente internal standard (published case studies 2019-2024)"],
        ["NEMS-V (Nutrition Environment Measures - Vending)", "Score each SKU green/yellow/red; track total score over time", "Hopkins Bloomberg NEMS-V 2014 (validated tool)"],
      ],
    },
    {
      heading: "2. Planogram template — 60-bottle / 40-bottle / 24-bottle merchandiser",
      paragraph:
        "A planogram balanced to a healthy-beverage framework specifies SKUs and facings up-front. Below: a sample applying AHA Tier 1 ≥ 50% to a 60-bottle glass-front merchandiser.",
      headers: ["Tier", "Share", "Example SKUs", "Facings (of 60)"],
      rows: [
        ["Tier 1 — water + unsweetened", "50%", "Aquafina, Smart Water, Dasani Sparkling, LaCroix, Spindrift, Bubly, Hint", "30"],
        ["Tier 1 — milk + plant milk", "5%", "Fairlife Skim, Oat-ly Original, Silk Almond Unsweetened", "3"],
        ["Tier 2 — ≤ 40 cal per 8oz", "20%", "Vitaminwater Zero, Bai, Sparkling ICE, Body Armor Lyte, Gatorade Zero", "12"],
        ["Tier 2 — 100% juice or unsweetened tea", "10%", "Pure Leaf Unsweetened, Honest Tea, Apple & Eve 100% juice", "6"],
        ["Tier 3 — > 40 cal per 8oz / sweetened", "≤ 15%", "Coca-Cola Mini, Pepsi, Snapple, Lipton sweet tea, sweetened energy", "9"],
      ],
    },
    {
      heading: "3. Comparative compliance scoring",
      paragraph:
        "Each framework scores compliance differently. Pick the metric that matches your hospital's quality reporting and stick to it. Below: how a 50%-Tier-1 planogram scores in each framework.",
      headers: ["Framework", "Pass threshold", "Sample planogram (above) score"],
      rows: [
        ["AHA Healthier Choice ≥ 50%", "≥ 50%", "55% (passes)"],
        ["PHA Tier 1 ≥ 50%", "≥ 50%", "55% (passes)"],
        ["Kaiser Green ≥ 30%, Red ≤ 20%", "Green ≥ 30%, Red ≤ 20%", "55% green, 15% red (passes)"],
        ["NEMS-V green ≥ 50%", "≥ 50%", "55% (passes)"],
      ],
    },
    {
      heading: "4. Contract language — clauses to require",
      paragraph:
        "Without explicit contract language, planogram drift takes a 'healthy launch' back to baseline within 6-12 months. Lock the framework in.",
      items: [
        { number: 1, title: "Framework election", description: "Contract names the specific framework (e.g., 'Partnership for a Healthier America Healthier Vending Standard'). Operator binds to deliver." },
        { number: 2, title: "Minimum share + max share", description: "Per-machine minimum Tier-1 share + max Tier-3 share. Verified by quarterly audit." },
        { number: 3, title: "Quarterly audit + remediation", description: "Operator submits planogram inventory each quarter; failure to meet thresholds triggers 30-day cure + commission penalty." },
        { number: 4, title: "Right to substitute", description: "Hospital nutrition lead has right to require swap of any SKU within 30 days." },
        { number: 5, title: "Per-SKU labeling", description: "Operator labels each facing with tier color (green / yellow / red) per the chosen framework so members can see compliance." },
        { number: 6, title: "Termination for sustained non-compliance", description: "≥ 2 consecutive failed audits triggers right to terminate with 60-day notice." },
        { number: 7, title: "Reporting", description: "Operator provides annual healthy-beverage compliance report aligned with hospital community-benefit reporting (IRS Form 990 Schedule H)." },
      ],
    },
    {
      heading: "5. Measurement framework — proving the program works",
      paragraph:
        "Healthy-beverage programs typically aim to shift behavior, not just stock. Pair planogram compliance with consumption data to prove impact.",
      headers: ["Metric", "Source", "Cadence"],
      rows: [
        ["Per-SKU velocity by tier", "Operator telemetry", "Monthly"],
        ["Tier 1 share of beverage sales (revenue + units)", "Telemetry rollup", "Monthly"],
        ["Per-machine compliance audit (% Tier 1 facings)", "Operator quarterly audit + spot-check by hospital wellness", "Quarterly"],
        ["Per-member NPS / wellness pulse", "Hospital employee engagement survey", "Annual"],
        ["Community benefit alignment", "Hospital community-benefit report (IRS Schedule H)", "Annual"],
      ],
    },
    {
      heading: "6. Pricing + behavioral nudges",
      paragraph:
        "Compliance + price + placement together drive behavior. Cleveland Clinic, Boston Children's, and Kaiser case studies all combine all three.",
      items: [
        { label: "Pricing differential", value: "Tier 1 priced 10-20% below Tier 3. Multiple peer-reviewed studies (Block et al. 2010 NEJM; French et al. 2010 AJPH) show 10-25% Tier 3 consumption reduction with price + placement combined." },
        { label: "Placement", value: "Tier 1 at eye level (rows 3-4 of 6); Tier 3 at top + bottom (less visible)." },
        { label: "Tier color labeling", value: "Per-facing tier-color sticker per the chosen framework; high-contrast labels per Section 703 (≥ 70%)." },
        { label: "Front-page kiosk message", value: "Where the machine has a touchscreen, default landing screen highlights Tier 1 SKUs + a wellness message." },
        { label: "Refill stations", value: "Pair the machine with a hospital-branded water refill station within 50 feet; supports Tier 1 substitution + ASHE / FGI 2022 hospital water-quality guidance." },
      ],
    },
    {
      heading: "7. Operator capabilities required",
      items: [
        { check: "Refrigerated fleet with ENERGY STAR 4.0 Class A merchandisers (MDEC ≤ 8.84 + 0.0252 × V kWh/day)." },
        { check: "Telemetry-driven planogram audit; can produce per-machine tier breakdown on demand." },
        { check: "Established cold-chain logistics for Tier 1 fresh milk + Fairlife SKUs (FDA Food Code §3-202 sourcing)." },
        { check: "Cashless-enabled with PCI-DSS attestation." },
        { check: "Quarterly QBR with hospital wellness + nutrition leadership." },
        { check: "References from at least 2 prior hospital healthy-beverage deployments (Kaiser, Cleveland Clinic, Boston Children's, NYC H+H, or comparable IDN)." },
        { check: "Insurance + liability appropriate for hospital placements (GL ≥ $2M/$4M, product liability ≥ $2M)." },
      ],
    },
    {
      heading: "8. Implementation timeline",
      headers: ["Phase", "Duration", "Owner"],
      rows: [
        ["Framework selection + leadership approval", "30-45 days", "Hospital wellness committee + CMO"],
        ["RFP + operator selection", "60-90 days", "Materials management + nutrition"],
        ["Contract negotiation with framework clauses", "30-45 days", "Legal + materials"],
        ["Planogram design + tier labeling", "2-3 weeks", "Operator + nutrition"],
        ["Equipment install + commissioning", "5-10 days per site", "Operator + facilities"],
        ["Soft launch + first audit", "30 days", "Operator + wellness"],
        ["Year-1 community benefit reporting", "Annual", "Hospital community benefit officer"],
      ],
    },
  ],
  footer:
    "This pack is informational. LetUsVending can introduce operators equipped to deliver hospital healthy-beverage programs aligned with the framework of your choice.",
});

console.log("wrote "+"healthy-beverage-vending-hospitals");
