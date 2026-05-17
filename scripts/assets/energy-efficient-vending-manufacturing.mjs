import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "energy-efficient-vending-manufacturing",
  assetType: "playbook",
  title: "Manufacturing Energy-Efficient Vending Playbook",
  subtitle: "ENERGY STAR specification + R-290 refrigerant + LED retrofit + sleep-mode programming + scope 2 reporting",
  intro:
    "A modern vending fleet at a manufacturing facility runs 50-65% less electricity per machine than a 2010-era fleet (DOE + ENERGY STAR program data). At a 200-machine facility, that's a $40-80k/year operating-cost difference and a measurable scope 2 emissions reduction. This playbook codifies the five-lever energy framework an operator should be equipped to deliver.",
  sections: [
    {
      heading: "1. Five-lever energy framework",
      paragraph:
        "Vending energy use is governed by five operational levers. Each can be specified into the operator agreement and measured quarterly.",
      headers: ["Lever", "Mechanism", "Typical savings"],
      rows: [
        ["ENERGY STAR fleet certification", "Improved insulation, condenser efficiency, fan motor efficiency", "30-50% reduction vs non-certified"],
        ["R-290 hydrocarbon refrigerant", "Higher COP than R-404A, R-134a", "5-15% additional reduction"],
        ["LED retrofit (interior + signage)", "LED vs fluorescent tube interior lighting", "60-80% lighting kWh reduction"],
        ["Sleep-mode programming", "Reduced compressor + lighting during low-activity windows", "15-30% reduction during sleep window"],
        ["Right-sizing + consolidation", "Fewer, better-utilized machines vs over-deployed fleet", "20-40% reduction in machine count"],
      ],
    },
    {
      heading: "2. ENERGY STAR specification — refrigerated beverage vending",
      paragraph:
        "ENERGY STAR's Refrigerated Beverage Vending Machines specification (currently V4.0, effective 2018, with V5.0 in EPA pipeline review) caps daily energy use per cabinet volume. Operators should be able to attest to certification at procurement.",
      items: [
        { label: "ENERGY STAR V4.0 maximum daily energy consumption (MDEC)", value: "Calculated per cabinet volume in cubic feet; class-specific. A standard glass-front beverage machine (~25 ft³) typically caps at 7-9 kWh/day MDEC under V4.0 (vs 12-15 kWh/day for pre-2010 fleet)." },
        { label: "Procurement clause", value: "'Refrigerated equipment provided under this agreement shall be ENERGY STAR-certified to V4.0 or successor specification at time of install.'" },
        { label: "Verification", value: "ENERGY STAR Product Finder lookup by manufacturer model number; certificate retained in procurement file." },
        { label: "Existing fleet retrofit path", value: "Some pre-V4.0 machines can be retrofit with EC fan motors + LED + sleep-mode controller to approximate V4.0 performance; many cannot. Replacement is typically the more cost-effective path past 7-year fleet age." },
      ],
    },
    {
      heading: "3. R-290 hydrocarbon refrigerant",
      paragraph:
        "R-290 (propane, hydrocarbon refrigerant) has Global Warming Potential 3 — compared to R-404A at 3,922 and R-134a at 1,430. EPA SNAP (Significant New Alternatives Policy) approved R-290 for vending machines in 2011; phasedown of R-404A under the AIM Act accelerates the transition.",
      items: [
        { number: 1, title: "EPA SNAP approval status", description: "R-290 approved for vending machines under EPA SNAP. UL 60335-2-89 governs charge limit (typically ≤ 150 g for stand-alone refrigerated cabinets)." },
        { number: 2, title: "AIM Act phasedown", description: "American Innovation and Manufacturing Act (2020) directs EPA to phase down HFC consumption 85% by 2036. R-404A and R-134a are on the phasedown list. R-290 is HFC-free." },
        { number: 3, title: "Charge-limit compliance", description: "Manufacturer attestation that the R-290 charge in each cabinet complies with UL 60335-2-89. Operator carries documentation in the procurement file." },
        { number: 4, title: "Service technician certification", description: "EPA Section 608 certified technicians required for refrigerant work; R-290 servicing additionally requires hydrocarbon-specific training." },
        { number: 5, title: "End-of-life reclaim", description: "R-290 reclaim or controlled venting per EPA SNAP guidance. Operator attests to end-of-life handling in the master agreement." },
      ],
    },
    {
      heading: "4. LED + sleep-mode programming",
      items: [
        { label: "Interior LED", value: "LED tube replacement for T8/T5 fluorescent interior lighting. 60-80% kWh reduction; 50,000+ hour lamp life. Retrofit cost typically $40-80 per machine; payback under 18 months at typical commercial kWh rates." },
        { label: "External LED signage", value: "LED-illuminated front signage or graphic panels. Lower kWh, lower heat output (reduces compressor load slightly)." },
        { label: "Sleep-mode schedule", value: "Operator programs each machine with a low-activity window (typically 1-4 AM at 24/7 facilities; can be longer at 1- or 2-shift facilities). During sleep window: lighting off or dimmed, refrigeration cycles at wider hysteresis (still maintains FDA Food Code 41°F for refrigerated TCS food)." },
        { label: "Sleep-mode override", value: "Telemetry-driven: sleep window auto-exits 30 min before shift-start; manual override available via operator dashboard for unscheduled production runs." },
      ],
    },
    {
      heading: "5. Right-sizing + fleet consolidation",
      paragraph:
        "An over-deployed fleet costs more in capex, refrigerant, electricity, and route service than a right-sized fleet. Telemetry data drives the right-sizing decision.",
      items: [
        { number: 1, title: "Velocity baseline", description: "Pull 90-day per-machine velocity data. Machines running < 30% capacity utilization are candidates for consolidation." },
        { number: 2, title: "Consolidation proposal", description: "Operator proposes machine count reduction with planogram redesign to capture velocity in fewer machines. Typical 20-40% machine reduction without revenue loss in over-deployed fleets." },
        { number: 3, title: "Right-sizing review cadence", description: "Annual at minimum; more frequent during workforce-mix or shift-pattern changes." },
        { number: 4, title: "ESG benefit", description: "Each removed machine saves ~2-4 MWh/year and ~0.8-1.6 tCO2e/year at US average eGRID factors." },
      ],
    },
    {
      heading: "6. Scope 2 reporting framework",
      paragraph:
        "Scope 2 emissions = (kWh per machine × hours) × eGRID subregion emission factor. Operators with telemetry can deliver this quarterly.",
      items: [
        { label: "Data inputs", value: "Per-machine kWh (from machine-spec or sub-meter where deployed), uptime hours from telemetry, regional eGRID subregion emission factor (EPA publishes annually)." },
        { label: "Calculation", value: "Σ (kWh/machine × hours active) × eGRID factor = tCO2e per facility. Roll up to corporate." },
        { label: "Disclosure alignment", value: "GHG Protocol Scope 2 Guidance (location-based + market-based methods); CDP Climate Change disclosure; GRI 305-2; SASB sector-specific metrics; SBTi target tracking." },
        { label: "Reporting cadence", value: "Quarterly per-machine + facility roll-up from operator; annual corporate roll-up for sustainability disclosure." },
        { label: "Methodology refresh", value: "EPA eGRID factor updated annually; operator refreshes calculation factors within 90 days of EPA release." },
      ],
    },
    {
      heading: "7. Operator RFP language",
      items: [
        { check: "'≥ 95% of refrigerated equipment provided under this agreement shall be ENERGY STAR V4.0 (or successor) certified at install'" },
        { check: "'≥ 50% of refrigerated equipment shall use R-290 hydrocarbon refrigerant within 12 months of contract effective date; 100% within 36 months'" },
        { check: "'All interior + signage lighting shall be LED at install or at first scheduled PM'" },
        { check: "'Operator shall configure sleep-mode programming on every refrigerated machine, with the window aligned to Host shift schedule'" },
        { check: "'Operator shall deliver quarterly scope 2 emissions report aligned with GHG Protocol Scope 2 Guidance, GRI 305-2, and EPA eGRID emission factors'" },
        { check: "'Operator shall perform annual right-sizing review and propose fleet consolidation where velocity data supports'" },
        { check: "'EPA Section 608 + hydrocarbon-certified technicians for all refrigerant service; documentation retained 5 years'" },
      ],
    },
    {
      heading: "8. Quarterly business review",
      items: [
        { check: "Per-machine kWh + fleet total kWh trend" },
        { check: "tCO2e scope 2 trend (location + market-based)" },
        { check: "ENERGY STAR fleet certification % (target ≥ 95%)" },
        { check: "R-290 refrigerant fleet % (toward 100% within 36 months)" },
        { check: "Sleep-mode adherence (% of machines on schedule)" },
        { check: "Right-sizing opportunity review" },
        { check: "Refrigerant inventory + end-of-life reclaim attestation" },
        { check: "Action items + owner + due date" },
      ],
    },
  ],
  footer:
    "This playbook is informational and not legal or technical advice. Coordinate with Facilities, Sustainability, Procurement, and EHS before contracting energy-performance terms. LetUsVending is equipped to arrange operators with documented ENERGY STAR + R-290 fleet capability and scope 2 reporting.",
});

console.log("wrote "+"energy-efficient-vending-manufacturing");
