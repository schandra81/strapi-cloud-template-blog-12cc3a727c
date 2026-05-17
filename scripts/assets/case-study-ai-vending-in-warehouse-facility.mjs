import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "case-study-ai-vending-in-warehouse-facility",
  assetType: "pack",
  title: "Warehouse AI Cooler Deployment Pack",
  subtitle: "Site survey, planogram template, and operator SLA framework for 24/7 industrial placements",
  intro:
    "Warehouse + distribution-center AI coolers serve three shifts of associates who can't leave the facility for breaks. This pack bundles a site-survey template, a shift-aware planogram, and an SLA framework an operations + EHS team can use to evaluate and govern the placement.",
  sections: [
    {
      heading: "1. Site-survey template",
      paragraph:
        "Walk the site with the operator before signing. Each item maps to a placement-fit or compliance constraint. Cross every item or note the remediation plan.",
      items: [
        { check: "Headcount per shift: shift-1 / shift-2 / shift-3 documented; total ≥ 200 associates per 24 hr across one cooler." },
        { check: "Cooler location: break room, mezzanine, or production-floor adjacency that does not interfere with material-handling traffic; OSHA-compliant 36-in clear aisle around cooler." },
        { check: "Electrical: dedicated 120V/20A circuit, GFCI; emergency power if facility has 24/7-critical load category." },
        { check: "Connectivity: cellular ≥ -95 dBm at cooler face OR dedicated Ethernet drop on segmented VLAN." },
        { check: "Ambient: 60-85°F operating range, < 75% RH, no direct sunlight, away from forklift travel zones." },
        { check: "Floor + anchoring: level concrete floor; cooler bolted per OEM spec; tamper-evident hardware." },
        { check: "Safety + EHS: cooler does not block emergency egress, fire extinguisher, AED, or eyewash; clearance from electrical panels ≥ 36 in per NEC 110.26." },
        { check: "Cold-chain (if refrigerated): temperature 35-40°F, alert threshold ± 5°F triggers immediate operator alert + EHS notification." },
      ],
    },
    {
      heading: "2. Warehouse shift-aware planogram (75 SKUs)",
      paragraph:
        "Warehouse purchase patterns shift by time of day. Telemetry confirms after 30 days; refresh quarterly.",
      items: [
        { label: "Hydration — 25%", value: "Bottled water (multi-size), electrolyte (Gatorade, Liquid IV, Powerade), coconut water. $1.50-$4.00." },
        { label: "Caffeine + cold brew — 18%", value: "RTD cold brew, iced espresso, premium soda, energy drink (regular + sugar-free). $2.50-$5.00." },
        { label: "Lunch substitute / meal — 17%", value: "Sandwich, salad bowl, wrap, chicken-salad cup, hot pocket, microwaveable bowl. $5.50-$10.50." },
        { label: "Calorie-dense snack — 12%", value: "Pop-Tarts, granola bar, trail mix, jerky, chips, crackers, peanut-butter cracker pack. $1.50-$4.00." },
        { label: "Protein + recovery — 10%", value: "RTD protein shake, protein bar, single-serve protein packet. $2.50-$5.00." },
        { label: "Fresh fruit + dairy — 8%", value: "Apple, banana, orange, Greek yogurt, cottage cheese, cheese stick. $1.50-$3.50." },
        { label: "Convenience + comfort — 5%", value: "OTC pain reliever 2-pack, allergy 2-pack, antacid, single-use hand-warmer, hand-cleaning wipe. $2.50-$6.00." },
        { label: "Indulgent — 5%", value: "Single-serve ice cream (where cold-chain supports), chocolate, cookie, candy. $1.50-$3.50." },
      ],
    },
    {
      heading: "3. Operator SLA framework",
      headers: ["Tier", "Examples", "Acknowledgement", "Resolution"],
      rows: [
        ["Tier 1 — revenue-critical / cold-chain", "Offline > 30 min, temperature excursion, payment system down", "< 30 min, 24/7", "< 24 hr"],
        ["Tier 2 — stockout / planogram refresh", "Single SKU empty, planogram update request", "< 24 hr business", "< 48 hr"],
        ["Tier 3 — cosmetic / signage", "Cabinet cleaning, signage damage, light bulb", "< 48 hr business", "< 7 days"],
        ["Tier 4 — improvement / change request", "New SKU request, integration enhancement", "< 5 business days", "Per joint roadmap"],
      ],
    },
    {
      heading: "4. Shift-aware restock cadence",
      paragraph:
        "Restock during a low-traffic window for each shift, not against forklift + material-handling traffic. Operator should coordinate route with the facility shift supervisor.",
      items: [
        { label: "High-volume (300+ associates per 24 hr)", value: "4x/week visits, two visits before shift-1 start (5-6 AM), one mid-day for shift-2, one before shift-3 (9-10 PM). Telemetry-triggered top-offs as needed." },
        { label: "Medium-volume (150-300 associates per 24 hr)", value: "3x/week visits, one before each shift transition. Telemetry-triggered top-off for hot-selling SKUs." },
        { label: "Lower-volume (75-150 associates per 24 hr)", value: "2x/week visits, scheduled around shift-1 + shift-3 starts. On-demand based on telemetry." },
        { label: "Specialty cold-chain", value: "Daily cold-chain check via telemetry; physical visit if temperature trend > 38°F sustained for 30 min." },
      ],
    },
    {
      heading: "5. EHS + safety coordination",
      items: [
        { check: "Cooler placement reviewed by facility EHS officer before install; documented in EHS file." },
        { check: "Cooler does not block emergency egress, fire panel, AED, eyewash station, or first-aid kit." },
        { check: "Forklift traffic study: cooler ≥ 6 ft offset from designated forklift travel lanes; bollards installed if forklift-lane adjacency unavoidable." },
        { check: "Heat-exposure season: free-water-bottle program coordinated with EHS during high-heat days (per OSHA heat-illness guidance)." },
        { check: "Cleaning + sanitation: cooler interior + dispense bin sanitized at each restock visit; cabinet exterior wiped daily by facility staff." },
        { check: "Sharps + glass: SKU mix avoids glass bottles in production-adjacent placements; glass restricted to break-room placements only." },
        { check: "Emergency contact: operator dispatch number + facility EHS phone tree posted on cooler face." },
      ],
    },
    {
      heading: "6. Payment + identity stack — warehouse considerations",
      items: [
        { label: "Cashless preferred", value: "Apple Pay, Google Pay, contactless EMV. PCI-DSS 4.0 attestation, SAQ-B-IP." },
        { label: "Payroll-deduction option", value: "Where supported, cooler integrates with operator app + payroll provider for elective per-paycheck deduction; capped at $X/pay period by HR." },
        { label: "Free-issue subsidy", value: "Operator app supports HR-funded daily allowance ($5-$15/shift); used for safety-incentive programs or heat-illness mitigation." },
        { label: "Anonymous / no-account mode", value: "Tap-to-pay for any associate without account; no PII capture beyond payment-processor scope." },
        { label: "Refund flow", value: "QR + SMS refund flow; credit-back to original payment method within 24 hr; HR-funded refunds within 48 hr." },
        { label: "PCI scope", value: "Cooler stays out of facility PCI scope; operator AOC + SAQ on file with HR or finance." },
      ],
    },
    {
      heading: "7. Quarterly business review checklist",
      items: [
        { check: "Per-shift transactions + basket (shift-1 vs shift-2 vs shift-3)" },
        { check: "Top-15 and bottom-15 SKUs by velocity per shift" },
        { check: "Uptime by month per cooler" },
        { check: "Cold-chain incidents + resolution" },
        { check: "Refund rate; flags > 2% threshold" },
        { check: "EHS incidents involving cooler (none expected)" },
        { check: "Planogram refresh proposal for next quarter" },
        { check: "Subsidy program reconciliation (if HR-funded)" },
      ],
    },
    {
      heading: "8. Install + launch plan",
      items: [
        { number: 1, title: "T-30: site survey + LOI", description: "Operator + facility ops + EHS walk site, document placement, electrical, connectivity, egress. Sign LOI specifying placement + scope." },
        { number: 2, title: "T-21: facility prep", description: "Facility runs electrical + Ethernet (if needed); EHS confirms placement signage + bollards; operator confirms cabinet dimensions." },
        { number: 3, title: "T-14: planogram + signage approval", description: "Planogram reviewed by HR + EHS for allergen labeling + Smart-Snacks/wellness compliance (where applicable). Cabinet wrap brand-approved." },
        { number: 4, title: "T-7: install + commissioning", description: "Cooler delivered, anchored, calibrated; 200+ vision-system training transactions per SKU; cold-chain validated for 48 hr before launch." },
        { number: 5, title: "T-0: launch + shift-by-shift demo", description: "On-site associate demo at each shift change for first week; HR newsletter announcement; free-first-purchase code." },
        { number: 6, title: "T+30: planogram refresh", description: "30-day velocity report; bottom-10 SKUs replaced; HR confirms allergen panel + signage." },
      ],
    },
  ],
  footer:
    "This pack is informational. Facility EHS + HR + IT should jointly review operator capability claims and attestations before contract execution. Cold-chain placements should confirm temperature-monitoring SLAs with the food-safety officer.",
});

console.log("wrote " + "case-study-ai-vending-in-warehouse-facility");
