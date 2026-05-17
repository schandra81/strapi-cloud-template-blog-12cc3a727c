import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "community-center-vending-services",
  assetType: "pack",
  title: "Community Center Vending Pack",
  subtitle: "Multi-program planogram template, parks-and-rec procurement scope, weekend-event surge protocol",
  intro:
    "Community centers run multiple programs in parallel — youth sports, senior fitness, after-school programs, weekend events. Each program brings a different user demographic and demand curve. This pack codifies a multi-program planogram, the parks-and-recreation procurement scope, and a weekend-event surge protocol that keeps machines stocked during peak weekends.",
  sections: [
    {
      heading: "1. Program profile — who uses the building and when",
      paragraph:
        "Community-center vending performance hinges on matching the planogram to the rolling user mix. Map your building's actual program schedule before specifying SKUs.",
      headers: ["Program type", "Typical schedule", "Primary user", "Vending demand pattern"],
      rows: [
        ["Youth sports (basketball / volleyball / soccer)", "Weeknight 4-9 PM; Sat 8 AM-6 PM", "Athletes 6-18, parents", "Sports drinks, water, healthy snacks; surge before + after games"],
        ["Adult leagues", "Weeknight 6-10 PM", "Adults", "Sports drinks, water, protein snacks"],
        ["Senior fitness / programs", "Weekday morning + early afternoon", "60+ adults", "Coffee, water, lower-sugar / lower-sodium snacks, soft texture options"],
        ["After-school programs", "Weekday 3-6 PM", "Children + parents", "Snack-size, lower-sugar; allergen-aware (school-style)"],
        ["Weekend events / rentals", "Sat-Sun all day", "Variable", "Highest single-day velocity; multi-category demand"],
        ["Pool / aquatic (if co-located)", "Summer all-day", "Families", "Hydration-heavy; ice cream / cold treats"],
      ],
    },
    {
      heading: "2. Multi-program planogram template",
      paragraph:
        "Allocate slots across user types rather than picking one. A balanced 40-slot combo machine for a typical multi-program center:",
      headers: ["Category", "Slots", "Notes"],
      rows: [
        ["Water (16 oz / 1 L)", "5-6", "Highest-velocity SKU at community centers; price near cost where municipal contract supports"],
        ["Sports drinks / electrolyte", "4-5", "Youth + adult sports; hydration tie-in"],
        ["Healthy snacks (granola, fruit cups, nuts)", "5-6", "Better-for-you share supports parks-and-rec wellness messaging"],
        ["Sugar-managed / lower-sodium for seniors", "3-4", "Match senior-program nutrition guidance"],
        ["Kid-friendly snacks (allergen-aware)", "4-5", "Lower-sugar; no top-9 allergens where possible"],
        ["Salty snacks", "4-5", "Adult evening leagues"],
        ["Sweet snacks", "3-4", "Treat occasions, weekend events"],
        ["Cold-brew / coffee / juice", "4-5", "Morning fitness + senior programs"],
        ["Meal-format (sandwich / wrap / fruit cup)", "3-4", "All-day events; rentals"],
      ],
    },
    {
      heading: "3. Parks-and-recreation procurement scope",
      paragraph:
        "Parks-and-rec departments typically procure vending under one of three paths. Confirm path with department's purchasing officer.",
      items: [
        { label: "Concession agreement (most common)", value: "Operator pays commission (typically 8-25% of gross revenue) to the city / parks department. Term 3-5 years; renewable. No facility outlay. Concession agreement requires open bid in most municipalities." },
        { label: "Master contract / cooperative procurement", value: "Some states maintain a master vending contract; cities / parks ride the master. Streamlined path. Examples: state-DOT master, regional COG cooperative." },
        { label: "Local RFP", value: "Smaller parks departments issue their own RFP. Standard RFP language applies; pre-bid walkthrough recommended for multi-building scope." },
        { label: "Donation / sponsorship (limited)", value: "Some health-focused programs (e.g., wellness foundation partnerships) fund subsidized hydration SKUs. Document gift-in-kind separately for accounting." },
      ],
    },
    {
      heading: "4. Weekend-event surge protocol",
      paragraph:
        "A weekend event (tournament, rental, family event) can do 3-5× a normal-day velocity. Without surge prep, machines stock-out by mid-day. The protocol:",
      items: [
        { number: 1, title: "Event calendar shared with operator (4 weeks ahead)", description: "Facility shares confirmed weekend events 4 weeks in advance. Operator overlays against route schedule and adjusts pre-event restock." },
        { number: 2, title: "Pre-event restock (Friday)", description: "For events ≥ 100 expected attendees, operator restocks Friday close-of-business. Top-up Saturday morning if Saturday velocity tracks toward stockout." },
        { number: 3, title: "Surge planogram", description: "Hydration share elevated to 50% during high-attendance summer events. Replace lower-velocity SKUs temporarily with bulk-pack water + sports drink." },
        { number: 4, title: "Mid-event top-off", description: "Operator on-call schedule covers Saturday top-off for events ≥ 200 attendees. Threshold + SLA documented in contract." },
        { number: 5, title: "Post-event report", description: "Operator submits velocity + stockout report for events ≥ 100 attendees. Drives next-event surge plan." },
      ],
    },
    {
      heading: "5. Nutrition + healthy-share — community-center context",
      paragraph:
        "Parks-and-rec departments often align with public-health nutrition standards. Common references below.",
      items: [
        { label: "USDA Smart Snacks (NSLP-adjacent)", value: "School-day standard; some parks departments adopt for after-school programs. Sodium, sugar, fat caps per serving." },
        { label: "USDA Dietary Guidelines for Americans", value: "Baseline for adult nutrition messaging. ≤ 200 mg sodium, ≤ 10 g added sugar typical thresholds." },
        { label: "CDC Healthier Food Retail standards", value: "Public-sector framework for vending in government / community settings. Defines green / amber / red SKU classification." },
        { label: "Partnership for a Healthier America (PHA) framework", value: "Adopted by many parks-and-rec departments. Operator certifies per-SKU PHA alignment." },
      ],
    },
    {
      heading: "6. ADA + accessibility (Title II)",
      paragraph:
        "Community centers are Title II facilities. Full ADA reach, clear-floor, operating-force requirements apply.",
      items: [
        { check: "Reach range 15-48 in AFF; obstructed-reach exceptions documented (Section 308)." },
        { check: "30 in × 48 in clear floor space (Section 305)." },
        { check: "Operating force ≤ 5 lbf; no tight grasping (Section 309.4)." },
        { check: "Cashless option for users without coin/bill handling." },
        { check: "Tactile + high-contrast pricing where state code or facility policy requires." },
        { check: "Annual ADA recertification on file from operator." },
      ],
    },
    {
      heading: "7. Reporting + governance",
      paragraph:
        "Parks-and-rec director or facility manager reviews vending performance quarterly. The QBR pack:",
      items: [
        { check: "Per-machine + per-building revenue, transaction count, average ticket." },
        { check: "Stockout incidents + resolution time." },
        { check: "Telemetry uptime % per machine." },
        { check: "Weekend-event report (velocity vs. forecast for each event ≥ 100 attendees)." },
        { check: "Healthy-share % (count of SKUs meeting PHA / CDC / municipal criteria)." },
        { check: "Concession commission to date vs. budget." },
        { check: "ADA + cleaning attestations current." },
        { check: "Worker / user-feedback channel summary." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "LetUsVending is an operator network and advisory. We are equipped to coordinate parks-and-rec RFPs, multi-building scope, and the planogram + surge protocol framework. The operator selected via this framework executes the program; the parks department owns the concession agreement.",
    },
  ],
  footer:
    "Informational reference. Concession-agreement terms, nutrition guidelines, and procurement path vary by municipality and state. Coordinate with your purchasing officer.",
});

console.log("wrote "+"community-center-vending-services");
