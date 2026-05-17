import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "best-office-coffee-machines-for-small-teams",
  assetType: "pack",
  title: "Small-Team Office Coffee Evaluation Pack",
  subtitle: "Cup-count worksheet, equipment shortlist by team size, and OCS RFP template",
  intro:
    "Choosing a coffee program for a 5-50 person office is a different problem than choosing one for 500. This pack bundles the cup-count worksheet, the equipment shortlist by team size and brew style, and the office coffee service (OCS) RFP template a small-team office manager + facilities owner needs.",
  sections: [
    {
      heading: "1. Cup-count + sizing worksheet",
      paragraph:
        "Right-sizing a coffee program starts with cup-count. Use the worksheet below to estimate daily cups, peak-hour capacity, and equipment tier.",
      headers: ["Team size", "Avg cups per person per day", "Daily cups", "Peak-hour cups (typical 20-25% of daily)", "Equipment tier"],
      rows: [
        ["5-10", "2.5-3.0", "12-30", "3-8", "Single-serve (Keurig, Nespresso Pro) or pour-over"],
        ["10-25", "2.5-3.0", "25-75", "6-19", "Bean-to-cup superautomatic (Jura X8, Necta Krea Touch)"],
        ["25-50", "2.5-3.5", "60-175", "15-44", "Bean-to-cup w/ 2 grinders (Saeco PerfectBrew, Schaerer Coffee Soul)"],
        ["50-100", "3.0-3.5", "150-350", "38-88", "Bean-to-cup + bypass for tea, or dual-machine setup"],
        ["100-200", "3.0-3.5", "300-700", "75-175", "Commercial bean-to-cup + auxiliary brewer (Bunn, Curtis)"],
      ],
    },
    {
      heading: "2. Equipment shortlist — small team (5-25 person)",
      paragraph:
        "Equipment cost spans $500 (single-serve) to $15K (bean-to-cup). Reliability + service uptime matter more than absolute cost for small teams.",
      items: [
        { label: "Keurig K-3500 / K-2500 (commercial single-serve)", value: "$1,500-$2,500. K-Cup standard; reservoir + plumbed options; supports 5-15 person teams. Pros: low learning curve, reliable. Cons: pod waste; cost per cup $0.65-$1.10." },
        { label: "Nespresso Professional Aguila 220 / Momento", value: "$3,500-$8,000. Capsule-based; premium espresso + milk; supports 10-30 person teams. Pros: barista-quality espresso. Cons: capsule waste; ongoing capsule cost." },
        { label: "Jura X8 / X10", value: "$5,500-$8,500. Bean-to-cup; bean hopper; supports 10-40 person teams. Pros: fresh beans, no waste, dual-bean hopper. Cons: requires daily cleaning, $400-$800/year maintenance." },
        { label: "Saeco PerfectBrew / Royal OTC", value: "$3,500-$6,500. Bean-to-cup; supports 10-30 person teams. Pros: cost per cup $0.18-$0.30, no pod waste. Cons: requires daily cleaning, programming." },
        { label: "Bunn iMix-3 / iMix-5 (instant + filter combo)", value: "$2,500-$4,500. Multi-station; supports 15-40 person teams. Pros: rapid serve, multiple drink options. Cons: less premium experience." },
        { label: "Pour-over + grinder station (Fellow Aiden + Baratza Vario)", value: "$700-$1,200. Manual pour-over + grinder; supports 5-15 person teams. Pros: lowest cost, premium experience. Cons: labor-intensive, inconsistent for higher headcount." },
        { label: "Filter brewer (Curtis Gemini, Fetco CBS-2131)", value: "$2,500-$5,500. Batch brew; supports 25+ person teams. Pros: high capacity, low cost per cup. Cons: dated experience; quality drops after 30-60 min." },
      ],
    },
    {
      heading: "3. OCS provider RFP template — required clauses",
      paragraph:
        "Office coffee service (OCS) providers handle equipment + supply + service. Use the clauses below in any OCS RFP.",
      items: [
        { label: "Equipment + lease model", value: "Provider proposes equipment options; lease ($X/month, no capital), purchase ($X capital + $Y/year service), or capital-included-in-supply model." },
        { label: "Coffee + supply scope", value: "Per-pound or per-cup pricing; minimum order quantity; lead time for orders; substitutions for back-order; private-label option." },
        { label: "Service SLA", value: "Tier-1 (machine down): < 24 hr response, < 24 hr resolve. Tier-2 (calibration, descaling): < 5 days. Routine maintenance: monthly." },
        { label: "Preventive maintenance", value: "Quarterly PM visit; descaling, brew-group inspection, milk-system clean (if applicable), water-filter replacement." },
        { label: "Water filtration", value: "Provider supplies + maintains water filter (Everpure, 3M, or comparable); replacement cadence aligned to gallons or 6-month interval." },
        { label: "Specialty coffee + alternative milk support", value: "Whole-bean roasts (3-5 SKUs minimum); ground coffee; flavored options; alternative milk (oat, almond, soy) where machine supports." },
        { label: "Cup, lid, sleeve, stirrer supply", value: "Provider supplies + manages inventory; recyclable + compostable options where available." },
        { label: "Reporting", value: "Monthly consumption report; quarterly business review; sustainability metrics (recycled content, packaging, fair-trade percentage)." },
        { label: "Sustainability + certifications", value: "Provider commits to Fair Trade / Rainforest Alliance / B Corp coffee SKUs ≥ 25% of mix; reusable mug program supported." },
        { label: "Insurance + indemnity", value: "$1M GL, additional-insured to office; food product liability $500K; equipment insurance carried by provider." },
      ],
    },
    {
      heading: "4. Cost model — total cost of ownership (TCO) by team size",
      paragraph:
        "Compare TCO over 3-year period. Includes equipment, coffee, supplies, service, and water filtration.",
      headers: ["Team size", "Equipment + service (annual)", "Coffee + supply (annual)", "Total annual TCO", "Per-cup TCO"],
      rows: [
        ["5-10", "$1,500-$2,500", "$1,500-$3,000", "$3K-$5.5K", "$0.80-$1.40"],
        ["10-25", "$2,500-$4,500", "$3,000-$6,500", "$5.5K-$11K", "$0.60-$1.10"],
        ["25-50", "$4,500-$8,000", "$6,500-$13,000", "$11K-$21K", "$0.45-$0.85"],
        ["50-100", "$6,500-$12,000", "$13K-$25K", "$19.5K-$37K", "$0.40-$0.70"],
        ["100+", "$10K+", "$25K+", "$35K+", "$0.35-$0.60"],
      ],
    },
    {
      heading: "5. Water + plumbing + electrical checklist",
      paragraph:
        "Coffee equipment lives or dies by water quality. Confirm each item below before install.",
      items: [
        { check: "Water hardness ≤ 50 ppm (3 grains/gal) preferred for espresso; ≤ 100 ppm acceptable with filtration" },
        { check: "Water filter installed (Everpure, 3M, OmniFilter or comparable); replacement cadence per provider spec or every 6-12 months" },
        { check: "TDS (total dissolved solids) 75-250 ppm for optimal coffee extraction" },
        { check: "Plumbed connection: 3/8 in cold-water line; 1/2 in drain line within 5 ft of machine" },
        { check: "Dedicated 120V/15A circuit for single-serve; dedicated 120V/20A or 240V for commercial bean-to-cup" },
        { check: "Counter depth + height: confirm machine fits with 6 in clearance behind for ventilation + service access" },
        { check: "Drainage: trap or floor drain near install; spill containment + drip tray for high-volume placements" },
        { check: "GFCI outlet within reach; surge protection recommended" },
      ],
    },
    {
      heading: "6. Operations + maintenance cadence",
      items: [
        { label: "Daily (office manager / staff)", value: "Empty drip tray + grounds container; rinse milk system (if applicable); refill bean hopper; wipe down exterior." },
        { label: "Weekly", value: "Deep-clean brew group; descale (if hard water); wipe down full machine + counter; restock cups + supplies." },
        { label: "Monthly (provider)", value: "Site visit: full clean cycle, descale, milk-system deep-clean, water-filter check, bean hopper inspection." },
        { label: "Quarterly (provider PM)", value: "Full preventive maintenance: brew-group inspection, gasket replacement if needed, water-filter replacement, calibration." },
        { label: "Annual (provider)", value: "Full machine refurb + capacitor + heating-element inspection; OCS contract review." },
        { label: "On-demand (provider service ticket)", value: "Tier-1 (machine down): 24 hr response. Tier-2 (calibration, software): 5 days. Tier-3 (cosmetic, signage): 14 days." },
      ],
    },
    {
      heading: "7. Sustainability + waste-reduction framework",
      items: [
        { check: "Single-serve waste audit: K-Cup recycling program enrolled (Keurig recycling); compostable pods where machine supports" },
        { check: "Bean-to-cup grounds composting: office composting program or municipal pickup" },
        { check: "Reusable mug program: provide branded mugs at hire + amenity; discount or incentive for reusable use" },
        { check: "Cup + lid: shift to PLA / fiber-based compostable + recyclable; FSC-certified paper cup" },
        { check: "Coffee certifications: ≥ 25% Fair Trade / Rainforest Alliance / B Corp / Organic mix" },
        { check: "Water-filter cartridge recycling: provider takes back or recycle program" },
        { check: "Alternative-milk shelf-stable cartons recyclable; on-demand option to reduce waste" },
        { check: "Annual sustainability report from provider: kg of waste diverted, recycled content %, kWh per cup" },
      ],
    },
    {
      heading: "8. Provider selection scorecard",
      headers: ["Criterion", "Weight", "Sub-criteria"],
      rows: [
        ["Equipment fit + reliability", "20%", "Team-size fit; reliability track record; service-call frequency"],
        ["Service SLA + response", "20%", "Tier-1 response time; PM cadence; on-call coverage"],
        ["Coffee + supply quality + variety", "15%", "Roast variety; flavor profile; specialty + alt-milk; cup quality"],
        ["Cost / TCO", "15%", "Equipment lease/purchase; per-pound or per-cup; total 3-year cost"],
        ["Sustainability + certifications", "10%", "Fair Trade / B Corp share; waste diversion; reusable mug support"],
        ["Reporting + transparency", "10%", "Consumption report; QBR cadence; sustainability metrics"],
        ["Reference accounts", "5%", "Comparable team-size offices ≥ 12 mo service"],
        ["Insurance + business terms", "5%", "GL coverage; food product liability; contract flexibility"],
      ],
    },
  ],
  footer:
    "This pack is informational. Office manager + facilities + procurement should jointly review provider equipment + supply + service terms before contract execution. TCO numbers are estimates; confirm with provider quotes for your specific team size + brew preferences.",
});

console.log("wrote " + "best-office-coffee-machines-for-small-teams");
