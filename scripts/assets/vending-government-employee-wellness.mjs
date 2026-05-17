import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-government-employee-wellness",
  assetType: "toolkit",
  title: "Federal Wellness Vending Implementation Toolkit",
  subtitle: "Planogram template, subsidy structure, outcome measurement framework, and HHS-aligned audit checklist",
  intro:
    "This toolkit gives federal agency wellness leads, contracting officers, and facility coordinators the working documents to launch a wellness-vending program aligned with the HHS/CDC Food Service Guidelines for Federal Facilities. References pulled from HHS/GSA/DOD/USDA food service guidelines, FDA menu labeling (21 CFR 101.11), FALCPA, ADA Section 308, PCI-DSS 4.0, and CDC point-of-decision prompt guidance. Capability-framed throughout.",
  sections: [
    {
      heading: "1. Wellness planogram template",
      paragraph:
        "The HHS/CDC Food Service Guidelines for Federal Facilities (FSG) sets a target of ≥ 50% of snacks and beverages meeting the standards. This planogram exceeds the minimum at 60%+ to leave headroom for seasonal SKUs that may not score.",
      headers: ["Category", "Facing share", "FSG-aligned SKU examples", "Sodium / sugar / cal target", "Posted price range"],
      rows: [
        ["Snack — better-for-you (BFY)", "35%", "Air-popped popcorn, whole-grain crackers, mixed nuts (unsalted), beef jerky, roasted chickpeas", "≤ 200 cal, ≤ 230 mg sodium, ≤ 10 g added sugar", "$1.75-$3.50"],
        ["Snack — conventional", "20%", "Classic chips, pretzels, cookies", "Per FALCPA + calorie display", "$1.50-$2.75"],
        ["Beverage — water + sparkling", "20%", "Bottled water, sparkling water (LaCroix, Bubly)", "0 cal", "$1.25-$2.75"],
        ["Beverage — BFY", "10%", "Unsweetened tea, electrolyte water, low-sugar kombucha", "≤ 40 cal per 8 oz", "$2.25-$4.25"],
        ["Beverage — RTD coffee + dairy", "8%", "Cold brew, oat-milk latte, plant milk", "Per FSG", "$2.75-$4.50"],
        ["Beverage — conventional soda / energy", "7%", "Diet soda, regular soda, energy drink", "Per calorie display + FDA menu labeling", "$1.50-$3.50"],
      ],
    },
    {
      heading: "2. Subsidy structure options",
      paragraph:
        "Federal placements typically apply one of three subsidy structures to encourage healthier-option purchase. The wellness office should document the chosen structure in the contract Schedule B and reconcile quarterly.",
      items: [
        { number: 1, title: "Structure A — Price parity subsidy", description: "Agency wellness fund subsidizes BFY SKUs so the posted price is ≤ conventional comparator. Operator invoices monthly for the subsidy amount × units sold. Typical subsidy: $0.25-$0.75 per BFY transaction." },
        { number: 2, title: "Structure B — Free-first-purchase + recurring promo", description: "Agency funds a free-first-purchase code at launch and a recurring quarterly promo (e.g., 'BFY Friday' with $0.50 off). Operator tracks promo redemption and invoices the wellness fund." },
        { number: 3, title: "Structure C — Commission reinvestment", description: "Agency directs operator's commission share back into BFY product subsidy, signage, and point-of-decision prompts. Net cost to agency is zero; trade-off is no commission to the agency general fund." },
      ],
    },
    {
      heading: "3. Outcome measurement framework",
      paragraph:
        "FSG implementation should be measured against baseline. The framework below uses CDC-published evaluation approaches.",
      items: [
        { label: "Metric 1 — BFY share of total transactions", value: "Calculate monthly: (BFY transactions / total transactions). Target ≥ 50% by month 6; ≥ 60% by month 12. Source: operator telemetry." },
        { label: "Metric 2 — BFY share of facings", value: "Audit at quarterly QBR: count BFY facings vs total. Target ≥ 50% per FSG; recommended 60%+." },
        { label: "Metric 3 — Average sodium per snack transaction", value: "Calculate monthly: (sum of sodium per SKU × units sold) / total snack transactions. Target ≤ 200 mg average by month 12." },
        { label: "Metric 4 — Calorie-display compliance", value: "Audit quarterly: 100% of SKUs display calorie information at the point of selection per FDA menu labeling rule (where operator has ≥ 20 placements)." },
        { label: "Metric 5 — Employee satisfaction", value: "Quarterly 5-question pulse: satisfaction (1-5), BFY availability (1-5), pricing (1-5), variety (1-5), open suggestion. Target ≥ 4.0 average by month 12." },
        { label: "Metric 6 — Refund rate", value: "Operator refund report: < 2% of transactions. Spike > 2% triggers planogram or machine quality review." },
        { label: "Metric 7 — Uptime", value: "Operator telemetry: ≥ 98% monthly. Federal placements typically include 24/7 access; off-hours uptime measured separately." },
      ],
    },
    {
      heading: "4. Point-of-decision prompt design",
      paragraph:
        "CDC and FSG guidance show that point-of-decision prompts increase BFY purchase by 5-15%. Use the prompt design framework below.",
      items: [
        { check: "Shelf labels: green dot or 'Best Choice' icon at each FSG-aligned SKU; standardized across all machines." },
        { check: "Machine-face signage: 11x17 print with 'How to spot a Best Choice' graphic; mounted at adult eye level (60-64 in)." },
        { check: "Calorie + sodium display: directly under each SKU's price; consistent format across all machines per FDA menu labeling." },
        { check: "Allergen summary: separate sign listing common allergens by SKU number per FALCPA." },
        { check: "Hydration prompt: 'Choose water — it's free at the fountain' sign near beverage machine; encourages no-cost choice." },
        { check: "Wellness program tie-in: QR code linking to agency wellness portal (where applicable) at each machine." },
      ],
    },
    {
      heading: "5. FSG audit checklist (annual)",
      items: [
        { check: "BFY facings ≥ 50% (snack) and ≥ 50% (beverage) — count and photograph each machine" },
        { check: "BFY SKUs meet thresholds: ≤ 200 cal, ≤ 230 mg sodium, ≤ 10 g added sugar (snack); ≤ 40 cal per 8 oz (beverage)" },
        { check: "Calorie display visible at point of selection (per FDA menu labeling)" },
        { check: "Allergen labeling per FALCPA on each SKU" },
        { check: "ADA Section 308: operable parts 15-48 in AFF; ≤ 5 lbf operating force" },
        { check: "Point-of-decision prompts present and standardized" },
        { check: "Refrigerated units hold ≤ 40°F (FDA Food Code 3-501.16); telemetry log on file" },
        { check: "Operator PCI-DSS 4.0 AOC / SAQ-B-IP current" },
        { check: "Operator insurance COI current ($2M GL, $1M umbrella, additional-insured endorsement)" },
        { check: "Quarterly QBR records retained in contract file (last 4 quarters)" },
        { check: "Outcome metrics report from operator telemetry retained in wellness office file" },
      ],
    },
    {
      heading: "6. Implementation timeline",
      items: [
        { number: 1, title: "T-90: Wellness office + contracting officer scoping", description: "Confirm placement count, baseline planogram, agency wellness fund availability, subsidy structure choice." },
        { number: 2, title: "T-60: Operator coordination", description: "Operator submits FSG-aligned planogram proposal; wellness office reviews and approves; agency contracting officer confirms commission/subsidy schedule." },
        { number: 3, title: "T-30: Signage + POS prompts design", description: "Design + print machine-face signage, shelf labels, allergen summary. Wellness office reviews and approves." },
        { number: 4, title: "T-14: Calibration + photo documentation", description: "Operator deploys initial planogram and signage; wellness office walks each machine and documents with photos." },
        { number: 5, title: "T-0: Launch", description: "Free-first-purchase code active for 30 days; agency-wide email announcement; wellness portal QR codes live." },
        { number: 6, title: "T+30 / +60 / +90: Calibration", description: "Telemetry-driven planogram tune-up at 30/60/90 days; drop bottom-5 BFY SKUs that aren't moving; substitute with 5 new candidates." },
        { number: 7, title: "T+180: First FSG outcome report", description: "Wellness office presents 6-month outcome metrics to leadership; documents pivots for year 2." },
      ],
    },
  ],
  footer:
    "This toolkit is informational and not legal advice. Federal wellness leads should coordinate with agency General Counsel, contracting officers, and the agency Office of Inspector General on subsidy mechanics and FSG compliance documentation. Operator capability claims should be verified through written attestation and on-site audit. LetUsVending can connect agency teams with operators equipped to serve FSG-aligned placements.",
});

console.log("wrote "+"vending-government-employee-wellness");
