import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "waste-recycling-vending",
  assetType: "pack",
  title: "Office Vending Waste + Recycling Pack",
  subtitle: "Packaging + bins + supplier + telemetry + ESG QBR framework",
  intro:
    "Waste + recycling is where most office vending programs either earn their sustainability credentials or quietly contradict them. This pack covers the five-layer framework: packaging shift, bin + diversion infrastructure, supplier criteria, telemetry-verified waste data, and the ESG QBR documentation needed for CDP / SBTi / CSRD reporting.",
  sections: [
    {
      heading: "1. Packaging shift (upstream)",
      paragraph:
        "Diversion downstream is only as good as recyclability upstream. Apply these standards to every SKU bid.",
      items: [
        { check: "Aluminum cans ≥ 70% recycled content (industry avg ~73%; leaders ≥ 90%)" },
        { check: "PET bottles ≥ 50% rPET; targeting ≥ 25% per EPR-state floor (CA SB 54, OR SB 582, ME LD 1541, CO HB 22-1355)" },
        { check: "Snack films: mono-material PE preferred; How2Recycle Store Drop-Off labeling on every applicable SKU" },
        { check: "Paperboard cartons: FSC- or SFI-certified, ≥ 70% recycled content, recyclable curbside" },
        { check: "Compostable cups (coffee): BPI-certified, PFAS-free (per FDA 2024 voluntary phase-out)" },
        { check: "No PVC, PVdC, EPS, expanded polypropylene in primary packaging" },
        { check: "Plastic stirrers + cutlery eliminated (birchwood or FSC paperboard alternatives)" },
        { check: "Supplier disclosure of How2Recycle labeling per SKU; refreshed annually" },
      ],
    },
    {
      heading: "2. Bin + diversion infrastructure (point of disposal)",
      paragraph:
        "Three-stream sorting at every vending machine. Bin signage drives 80% of contamination prevention.",
      items: [
        { label: "Bin count + type", value: "Three bins per machine site (or shared across machines on the same floor): landfill / commingled recycle / compost. Toter + Rubbermaid + ClearStream commercial-grade options." },
        { label: "Bin colors", value: "Recycle Across America standardized labels OR municipal-required colors (Seattle SPU, NYC DSNY, San Francisco DPW, Portland Metro each differ)." },
        { label: "Signage", value: "Photo-realistic SKU images at user eye-level. Generic icons cut contamination 30% less effectively than photo signage." },
        { label: "Placement", value: "Within 10 ft of machine; not blocked by chairs or partitions; ADA-compliant approach 30 × 48 in clear floor space." },
        { label: "Liner type", value: "Recycle bin: clear liner (helps janitorial team verify; signals transparency to users). Landfill: opaque. Compost: BPI-certified compostable liner." },
        { label: "Service cadence", value: "Recycle + compost bins emptied separately by janitorial team. Coordinate with facilities to avoid commingling at janitor closet (program-killer)." },
      ],
    },
    {
      heading: "3. Supplier + downstream MRF criteria",
      paragraph:
        "Sustainable vending is meaningless if the recycle bin actually goes to landfill (a common failure). Verify the downstream chain.",
      items: [
        { check: "Recycling vendor provides annual MRF destination report — specific MRF name + address" },
        { check: "Compost vendor provides annual destination report — specific composter (Cedar Grove, Recology, NYC Composting, similar)" },
        { check: "MRF accepts the materials your packaging stream contains; verify aluminum + rPET + paperboard at minimum" },
        { check: "Snack film (multilayer) takeback: Store Drop-Off (How2Recycle) partnership — TerraCycle programs as supplementary not primary" },
        { check: "Contamination policy: > 10% contamination triggers municipal landfill rejection in most jurisdictions" },
        { check: "End-of-life equipment: refrigerant reclamation per EPA Section 608 + scrap-metal recycling at every machine refresh" },
      ],
    },
    {
      heading: "4. Telemetry + waste data",
      items: [
        { label: "Per-SKU velocity data", value: "Operator supplies monthly per-SKU velocity → multiplied by packaging mass per SKU → packaging mass generated per month." },
        { label: "Diversion-rate calculation", value: "Recycle weight + compost weight / total waste weight = diversion rate. Quarterly waste audit verifies." },
        { label: "Contamination rate", value: "Percentage of recycle bin contents that are landfill-bound. Target ≤ 10%; > 15% triggers signage refresh + program intervention." },
        { label: "Emission-factor reporting", value: "Annual kg CO2e per vend split by electricity + refrigerant + freight + packaging. Operator supplies for Scope 3 reporting." },
        { label: "Quarterly waste-audit cadence", value: "Operator + janitorial + sustainability lead conduct quarterly bin audit. Document with photos + weight + composition." },
      ],
    },
    {
      heading: "5. ESG QBR documentation",
      paragraph:
        "Operator brings this package to every QBR. Sustainability lead + facilities sign-off.",
      items: [
        { check: "Per-SKU packaging-material disclosure (aluminum %, rPET %, mono-PE %, paperboard %, compostable %)" },
        { check: "Annual emission factor per vend (kg CO2e/vend); methodology + verification body" },
        { check: "Quarterly diversion rate + contamination rate per site" },
        { check: "MRF + composter destination receipts + annual destination report" },
        { check: "Equipment refresh log — ENERGY STAR + R-290 transition % for the host's fleet" },
        { check: "Telemetry-verified route mileage allocation per host (for Scope 3 freight allocation)" },
        { check: "Supplier transition roadmap for non-recyclable SKUs; date-certain milestones" },
        { check: "EPR-compliance attestation for applicable states (CA SB 54, OR SB 582, ME LD 1541, CO HB 22-1355, WA + NY pending)" },
      ],
    },
    {
      heading: "6. ESG framework alignment",
      headers: ["Framework", "Vending-relevant disclosure", "How this pack aligns"],
      rows: [
        ["CDP Climate Change", "Scope 3 Category 1 (purchased goods + services); supplier engagement (C12)", "Per-vend emission factor + supplier mix"],
        ["SBTi", "1.5°C-aligned absolute reduction (4.2%/yr Scope 1+2)", "Operator trajectory + measurable annual cuts"],
        ["SASB FB-NB-410a + CG-EC-410a", "Packaging recyclability + material recovery", "Material mix + diversion rate"],
        ["EU CSRD + ESRS E5", "Resource use + circular economy", "Diversion + recovery metrics"],
        ["GRI 306", "Waste — composition + disposal route", "Quarterly waste audit data"],
        ["TCFD / IFRS S2", "Climate-related risk + opportunity", "Trajectory toward net-zero target"],
        ["LEED O+M + WELL", "MR Credit + N02/N03", "Healthier + lower-impact SKU mix"],
      ],
    },
    {
      heading: "7. Behavior change + employee engagement",
      items: [
        { check: "Earth Day or quarterly waste-audit volunteer day with sustainability ERG" },
        { check: "Signage refresh every 6 months — kept fresh prevents 'background noise' effect" },
        { check: "Bin-audit data shared at all-hands or sustainability newsletter (transparency drives behavior)" },
        { check: "Compete + reward: floor-level diversion-rate contest with small reward" },
        { check: "New-hire orientation includes 1-minute on the recycle / compost / landfill sort" },
        { check: "Visiting-guest signage near machine — 'how to sort' for non-employees" },
      ],
    },
    {
      heading: "8. Equipment-level reductions",
      paragraph:
        "Operator's machine fleet emissions allocate to host Scope 3. Push for fleet transition.",
      items: [
        { label: "ENERGY STAR fleet share", value: "Target 100% on host's account at next refresh cycle. Year-over-year trajectory reported at QBR." },
        { label: "R-290 / R-600a fleet share", value: "Target 100% at next refresh. R-404A out by 2027 across host's fleet." },
        { label: "Telemetry fleet share", value: "100% telemetry by year 1. Enables dynamic restock = 30-50% vehicle-miles reduction." },
        { label: "EV route vehicle share", value: "Operator commits to EV transition trajectory (e.g., 50% by 2028, 100% by 2032 in metros with grid + infrastructure)." },
        { label: "End-of-life recycling", value: "Refrigerant reclamation per EPA Section 608 + scrap metal recycling at every retirement. Certificate filed." },
      ],
    },
    {
      heading: "9. Operator selection checklist",
      items: [
        { check: "Three-stream bin infrastructure included in operator scope or partnered with host janitorial" },
        { check: "Quarterly waste audit + diversion-rate report" },
        { check: "Annual per-vend emission factor with methodology" },
        { check: "ENERGY STAR + R-290 equipment standard" },
        { check: "Telemetry on every machine with operator-supplied raw data export" },
        { check: "Supplier transition roadmap for non-recyclable SKUs" },
        { check: "EPR-compliance attestation for applicable states" },
        { check: "References from 3+ ESG-mandated hosts (Fortune 500 sustainability programs) with ≥ 24 months tenure" },
      ],
    },
  ],
  footer:
    "This pack is informational and operator-neutral. LetUsVending helps sustainability + facilities + procurement teams scope waste-aligned vending programs with operators positioned to support CDP / SBTi / CSRD-grade reporting.",
});

console.log("wrote " + "waste-recycling-vending");
