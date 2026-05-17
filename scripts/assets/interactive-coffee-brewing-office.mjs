import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "interactive-coffee-brewing-office",
  assetType: "template",
  title: "Interactive Coffee Brewing — Office Specification Template",
  subtitle: "Mechanism selection, operator capability checks, planogram, and labor planning",
  intro:
    "Use this template to specify an interactive coffee brewing program (pour-over bar, manual espresso, siphon, batch brew with tasting board) inside an office setting. Each section is capability-framed — facilities and HR teams should confirm with the operator in writing before committing to the program. Numbers reflect SCA (Specialty Coffee Association) brewing standards and typical office equipment ratings.",
  sections: [
    {
      heading: "1. Program scope + headcount fit",
      paragraph:
        "Interactive brewing is labor- and skill-intensive. Use the headcount band to select the brewing mechanism, not the other way around.",
      headers: ["Headcount band", "Daily cups expected", "Recommended interactive mechanism", "Backup batch capacity"],
      rows: [
        ["25-75 employees", "30-90 cups", "Pour-over bar (Hario V60, Chemex) + 1-2 manual stations", "8-cup carafe batch brewer as fallback"],
        ["76-200 employees", "90-250 cups", "Pour-over bar + single-group semi-auto espresso", "1.5-gallon thermal batch brewer"],
        ["201-400 employees", "250-500 cups", "Two-group semi-auto espresso + pour-over station", "Dual 1.5-gallon batch brewers"],
        ["400+ employees", "500+ cups", "Two-group espresso + batch brewing line + pour-over station", "Bean-to-cup superautomatic for off-peak"],
      ],
    },
    {
      heading: "2. Equipment specification",
      paragraph:
        "Equipment ratings and water/power requirements drive the build-out. Confirm operator carries replacement parts for the specific make/model on file.",
      items: [
        { label: "Pour-over station", value: "Hario V60 02 or Chemex 6-cup, gooseneck kettle (Fellow Stagg EKG or comparable, 0.9L, variable temperature 135-212°F), digital scale (Acaia Pearl or comparable, 0.1g resolution), timer, scoop set. Brew water 195-205°F per SCA standard." },
        { label: "Semi-automatic espresso", value: "Single-group or two-group commercial machine (La Marzocco Linea Mini, Slayer Steam, Synesso ES1, or comparable). 220V/30A dedicated circuit. Plumbed water with 3-stage filtration. Pre-infusion + temperature stability ±1°F." },
        { label: "Burr grinder", value: "Mahlkönig E65S GBW, Mazzer Super Jolly, or comparable. On-demand dosing with ±0.1g accuracy. Separate grinder for decaf required." },
        { label: "Water system", value: "Plumbed filtration (Everpure 4FC-S or 3MWater MC2 + softener) targeting 75-150 ppm total dissolved solids per SCA water standard." },
        { label: "Batch brewer fallback", value: "Bunn ITCB-DV, Fetco CBS-2131XTS, or comparable thermal-server brewer. NSF/ANSI 4 certified." },
      ],
    },
    {
      heading: "3. Operator capability checks",
      paragraph:
        "Interactive brewing programs require an operator that can supply trained barista labor, not just equipment. Verify capability in writing.",
      items: [
        { check: "Operator should attest to barista hiring + training pipeline (SCA Barista Skills Foundation or equivalent certification on file)." },
        { check: "Operator should attest to wage and benefit structure compliant with local Fair Workweek and predictive scheduling ordinances where applicable (Seattle, NYC, San Francisco, Philadelphia, Chicago)." },
        { check: "Operator should attest to backup barista coverage within 4 hours for unplanned absences." },
        { check: "Operator should provide proof of food handler certification per state code and ServSafe alcohol/food manager credentials where applicable." },
        { check: "Operator should attest to preventive maintenance cadence (espresso machine PM every 6 months by certified tech; descaling every 90 days; grinder burr replacement at manufacturer-spec interval)." },
        { check: "Operator should provide $2M general liability, $1M umbrella, additional-insured endorsement to host." },
      ],
    },
    {
      heading: "4. Labor planning + staffing model",
      paragraph:
        "Use this staffing model to size the labor line item. Hours are barista on-station hours; operator overhead, training, and PTO coverage are operator-side.",
      headers: ["Service window", "Daily cups", "Baristas on station", "Staffing hours/day"],
      rows: [
        ["Single AM rush (7-10 AM)", "60-120", "1 barista", "3.5 hr"],
        ["AM + PM peaks (7-10 AM + 1-3 PM)", "120-250", "1 barista, dual shift", "6 hr"],
        ["Continuous service (7 AM - 4 PM)", "250-450", "1-2 baristas overlapping", "10-14 hr"],
        ["Continuous + premium service", "450+", "2 baristas + lead barista", "16-24 hr"],
      ],
    },
    {
      heading: "5. Bean + supply specification",
      items: [
        { label: "Bean grade", value: "SCA cupping score ≥ 84 (specialty grade). Single-origin rotation (3-5 origins/quarter) + 1 house blend. Roast date ≤ 14 days from delivery; full bag rotation within 21 days of roast." },
        { label: "Decaf", value: "Swiss Water or CO2-process decaf, specialty grade ≥ 82. Separate grinder and labeled hopper required." },
        { label: "Milk + alternatives", value: "Whole, 2%, oat (Oatly Barista or comparable), almond, soy. Refrigeration ≤ 40°F per FDA Food Code 3-501.16." },
        { label: "Tea + alternative beverages", value: "Loose-leaf or whole-leaf sachet program (3-5 SKUs), matcha, hot chocolate. Separate hot-water tower or kettle." },
        { label: "Disposables vs reusable", value: "Reusable mug program (logo ceramic, host-branded) + compostable backup cups (PLA, BPI certified) where reusables are unavailable." },
      ],
    },
    {
      heading: "6. Brewing standards + recipe card",
      paragraph:
        "Recipes below are SCA-aligned starting points. Operator should publish a recipe card at each station and update quarterly based on origin + roast level.",
      headers: ["Drink", "Dose (in)", "Yield (out)", "Time", "Temp"],
      rows: [
        ["Espresso single", "18-20 g", "36-40 g", "25-30 sec", "200°F"],
        ["Pour-over (V60 02)", "22 g", "352 g", "3:00-3:30", "200°F"],
        ["Chemex (6-cup)", "42 g", "700 g", "4:00-4:30", "200°F"],
        ["Batch brew (carafe)", "55 g/L", "1 L", "5-6 min", "200°F"],
        ["Cold brew", "100 g/L", "1 L", "12-18 hr", "Ambient 65-70°F"],
      ],
    },
    {
      heading: "7. Pricing + subsidy model",
      items: [
        { label: "Fully subsidized (host pays)", value: "Host pays operator a per-cup or per-pound rate plus barista labor. Typical $4.50-$7.50/cup all-in including bean, milk, labor, and equipment lease. Common at HQ campuses and Class-A tenant amenities." },
        { label: "Partially subsidized", value: "Host pays equipment + labor; employees pay $1-$2/cup via badge or app. Reduces waste and drives accountability." },
        { label: "Employee-paid", value: "Operator runs as concession; employees pay $3-$5/cup. Host provides space + utilities only. Less common for HQ; more common at multi-tenant buildings." },
        { label: "Hybrid", value: "First 1-2 cups/day free per employee; subsequent cups paid. Tracked through badge or app." },
      ],
    },
    {
      heading: "8. Service KPIs + quarterly review",
      items: [
        { check: "Cups served per day, per drink type, vs forecast." },
        { check: "Average wait time at peak (target < 4 minutes)." },
        { check: "Bean usage (lbs/week) and waste rate (target < 5%)." },
        { check: "Employee satisfaction (quarterly pulse, target NPS ≥ 50)." },
        { check: "Barista retention (target ≥ 80% over 12 months) and certification renewal status." },
        { check: "Equipment uptime (target ≥ 98%); PM completion + descale log." },
        { check: "Cost per cup trending vs budget; bean origin rotation plan for next quarter." },
      ],
    },
  ],
  footer:
    "This template is informational and not legal advice. Confirm operator capabilities through reference calls and written attestation. Local labor ordinances (Fair Workweek, predictive scheduling, tip pooling) may impose additional requirements above the federal floor.",
});

console.log("wrote " + "interactive-coffee-brewing-office");
