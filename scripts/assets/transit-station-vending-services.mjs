import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "transit-station-vending-services",
  assetType: "pack",
  title: "Transit Station Vending Framework",
  subtitle: "Placement-type matrix, FTA procurement scope, planogram weighting by station type",
  intro:
    "Transit-station vending operates on a distinct profile: 16-24 hour operating windows, commuter peak velocity, public-safety oversight, and federal funding rules that govern many station authorities. This pack codifies a placement-type matrix (heavy-rail, commuter rail, bus, airport landside), FTA-aligned procurement scope, and station-type planogram weighting.",
  sections: [
    {
      heading: "1. Transit-station typology",
      paragraph:
        "Demand profile, dwell time, and procurement path differ by station type. Match planogram + service cadence to the station's actual ridership pattern.",
      headers: ["Station type", "Operating hours", "Avg dwell time", "Primary demand"],
      rows: [
        ["Heavy-rail downtown / hub", "16-24 hr", "5-15 min (transfer); 1-2 hr (commuter wait)", "Hydration, grab-and-go snack, coffee"],
        ["Commuter rail outlying", "Peak hours 5-10 AM + 3-8 PM", "10-30 min (off-peak waits)", "Coffee + breakfast AM; snack + beverage PM"],
        ["Bus terminal (intercity)", "16-24 hr", "30-90 min (between-bus waits)", "Meal-format, water, charging-bay drinks"],
        ["Bus stop (curbside)", "Variable", "5-10 min", "Typically no vending — exposure / vandalism makes ROI marginal"],
        ["Airport landside / ground transport", "18-24 hr", "Variable", "Meal-format, water, premium snacks, charging-bay drinks"],
        ["Park-and-ride lot", "Daylight", "5 min (going in) + 5 min (returning)", "Coffee AM, water + snack PM"],
      ],
    },
    {
      heading: "2. FTA procurement scope — federal-funding considerations",
      paragraph:
        "Many transit authorities receive Federal Transit Administration (FTA) funds. FTA Circular 4220.1F (third-party procurement) governs how station-related contracts (including concessions) are structured.",
      items: [
        { label: "Concession vs. service contract", value: "Vending at FTA-funded stations is typically structured as a concession agreement (operator pays commission to authority) — outside FTA procurement scope. Confirm with authority's procurement officer." },
        { label: "If structured as service contract (authority pays operator)", value: "FTA Circular 4220.1F applies — full and open competition, Buy America provisions, DBE goals, debarment + suspension check (SAM.gov), wage rate determination if labor scope triggers Service Contract Act." },
        { label: "Disadvantaged Business Enterprise (DBE)", value: "FTA-funded contracts include DBE goal. Vending operator network may include DBE-certified operators — coordinate with authority's DBE liaison officer." },
        { label: "Davis-Bacon / Service Contract Act", value: "Pure vending services typically don't trigger DBA; if installation work is bundled (electrical, anchoring, kiosk fit-out), DBA may apply to the install scope." },
        { label: "Revenue collection + reporting", value: "Concession revenue typically held separate from FTA-funded operating accounts. Confirm with authority finance." },
      ],
    },
    {
      heading: "3. Planogram weighting by station type",
      paragraph:
        "Per-station planograms differ. Use as starting points; quarterly telemetry review tunes to actual ridership.",
      items: [
        { label: "Downtown hub (16-24 hr, transfer pattern)", value: "Hydration 35%, coffee + energy 20%, grab-and-go snacks 25%, meal-format 10%, sweet treats 10%. AM coffee push 6-9 AM." },
        { label: "Commuter rail outlying (peak-heavy)", value: "Coffee + hot beverage 25% (AM peak), hydration 25%, breakfast bars 15%, lunch / snack 25%, sweet 10%. Morning planogram differs from evening — operator EMS / merchandising tool should support time-of-day SKU swap." },
        { label: "Bus terminal (long-dwell)", value: "Meal-format 20%, hydration 25%, snacks 30%, coffee 15%, charging-bay drinks 10%. Longer dwell tolerates microwaveable bowls + sandwiches." },
        { label: "Airport landside (premium captive)", value: "Premium snacks 30%, hydration 25%, meal-format 20%, coffee 15%, treats 10%. Higher price tolerance; premium SKU mix appropriate." },
        { label: "Park-and-ride (daylight peaks)", value: "Coffee 30% (AM), hydration 25%, snacks 25%, energy / sports drink 20%. Limited slot count typical — micro-vending or 1-2 small machines." },
      ],
    },
    {
      heading: "4. Equipment + telemetry — transit-specific spec",
      items: [
        { check: "Vandalism-resistant cabinet — reinforced glass, tamper-resistant fasteners, e-lock with audit log." },
        { check: "Cashless-primary or cashless-only (cash is a theft target at high-traffic public placements)." },
        { check: "Cellular telemetry — do not rely on transit-authority Wi-Fi (often segregated for ridership / safety systems)." },
        { check: "External antenna for underground / underdeck placements." },
        { check: "Surge protection — transit power circuits experience switching events." },
        { check: "Operating-temperature spec covers indoor (concourse) or outdoor (curbside / platform-shelter) per placement." },
        { check: "CCTV coverage of placement — coordinate with authority's transit-police / security." },
        { check: "Hardened against splash + cleaning chemistry (concourse floor washdown is common)." },
      ],
    },
    {
      heading: "5. Service cadence + access protocol",
      paragraph:
        "Transit stations operate 16-24 hours. Service visits must align with low-ridership windows + security access protocols.",
      items: [
        { number: 1, title: "Off-peak service windows", description: "Restock scheduled outside AM + PM commuter peaks. Typical windows: 10 AM-2 PM and 9 PM-midnight." },
        { number: 2, title: "Security access program", description: "Operator route drivers cleared through transit-authority badge program. Background check on file. Coordination with transit police as needed." },
        { number: 3, title: "Restock dolly / equipment", description: "Concourse-friendly restock dolly; coordinate with station manager on freight elevator access where applicable." },
        { number: 4, title: "Telemetry-driven cadence", description: "Hub stations: 3-5 restocks per week. Outlying stations: 1-2 restocks per week. Adjust by telemetry velocity." },
        { number: 5, title: "Tier-1 incident SLA", description: "Offline / payment failure: <24 hour response. Refrigeration excursion: <4 hour response (fresh-food spoilage)." },
        { number: 6, title: "Incident reporting to authority", description: "Vandalism / theft incidents reported to transit police + authority via standard form within 24 hr." },
      ],
    },
    {
      heading: "6. ADA + accessibility (Title II + DOT regulations)",
      paragraph:
        "Transit stations meet ADA Title II + DOT ADA regulations (49 CFR Parts 27, 37, 38). Vending in stations falls under Title II requirements with transit-specific considerations.",
      items: [
        { check: "Reach range 15-48 in AFF (Section 308)." },
        { check: "Clear floor space 30 in × 48 in (Section 305); placement does not block accessible path-of-travel." },
        { check: "Operating force ≤ 5 lbf (Section 309.4)." },
        { check: "Cashless option for users without coin/bill handling." },
        { check: "High-contrast pricing display; characters readable in station lighting." },
        { check: "Annual ADA recertification on file from operator." },
        { check: "Accessible path-of-travel from accessible boarding area / fare gate to placement maintained." },
      ],
    },
    {
      heading: "7. Reporting + governance",
      items: [
        { check: "Monthly revenue + transaction report to authority finance (concession commission)." },
        { check: "Quarterly uptime + service-SLA report." },
        { check: "Per-station velocity, stockout, refund metrics." },
        { check: "Vandalism / incident log + insurance claim status." },
        { check: "DBE participation report (if FTA-funded contract path)." },
        { check: "ADA + cleaning attestations current." },
        { check: "Planogram refresh recommendations from telemetry." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is an operator network and advisory. We are equipped to coordinate transit-authority RFPs, vandalism-resistant equipment specifications, and station-type planogram weighting. The operator selected via this framework executes the program; the authority owns the concession agreement, security access, and FTA-related procurement compliance.",
    },
  ],
  footer:
    "Informational reference. FTA, DOT, and ADA requirements vary by authority and station type; coordinate with authority procurement, security, and ADA-compliance officers.",
});

console.log("wrote "+"transit-station-vending-services");
