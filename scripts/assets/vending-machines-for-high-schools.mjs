import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-machines-for-high-schools",
  assetType: "pack",
  title: "High School Vending Program Design Template",
  subtitle: "Compliance, placement, contract SLA, and after-school operations",
  intro:
    "High school vending sits at the intersection of USDA Smart Snacks (7 CFR 210.11), ADA Section 308, state competitive-food rules, and athletic-program revenue. This pack codifies the program design template so a high school is equipped to commit a full program — compliance, placement, contract SLA, after-school operations — rather than improvise.",
  sections: [
    {
      heading: "1. Compliance baseline",
      paragraph:
        "High school vending has the broadest Smart Snacks scope of any K-12 segment because beverage rules are most permissive at HS (12oz milk/juice; 20oz calorie-free beverages allowed).",
      items: [
        { label: "Smart Snacks — snacks", value: "≤ 200 cal, ≤ 35% fat-calories, ≤ 10% saturated fat, ≤ 200 mg sodium, ≤ 35% sugar by weight." },
        { label: "Smart Snacks — entrée", value: "≤ 350 cal, ≤ 35% fat-calories, ≤ 10% saturated fat, ≤ 480 mg sodium." },
        { label: "Smart Snacks — beverages", value: "Plain water (any size); flavored water ≤ 5 cal/8oz; ≤ 12oz low-fat milk; ≤ 12oz 100% juice; ≤ 20oz calorie-free or ≤ 5 cal/8oz beverages." },
        { label: "Allergen labeling", value: "FALCPA labels on every SKU; allergen summary on machine face." },
        { label: "FDA Food Code", value: "Refrigerated units 35-40°F per 3-501.16; HACCP-style temp monitoring for fresh-food." },
        { label: "ADA Section 308", value: "Operable parts ≤ 48 inches, ≥ 15 inches; ≤ 5 lbf operating force; clear floor space 30×48 inches." },
        { label: "State overlay", value: "Confirm state competitive-food rules with the school nutrition director; some states (CA, MS, NY) tighten federal floor." },
      ],
    },
    {
      heading: "2. Placement plan",
      paragraph:
        "A typical 1500-student HS supports 5-8 vending placements. Use this matrix to map locations to equipment.",
      headers: ["Location", "Equipment", "Audience window", "Daily revenue (typical)"],
      rows: [
        ["Main hallway near gym", "Combo (snack + beverage)", "Passing periods + lunch", "$80-150"],
        ["Cafeteria adjacency", "Fresh-food grab-and-go", "Lunch periods", "$120-200"],
        ["Athletics hallway", "Beverage cooler", "Pre/post practice + games", "$60-100 + event nights"],
        ["Library / commons", "Combo + AI smart-cooler", "Study halls + after-school", "$40-80"],
        ["Faculty lounge", "AI smart-cooler", "Staff only", "$30-60"],
        ["Theater lobby", "Combo (event mode)", "After-school events", "Event-driven"],
        ["Gym lobby", "Beverage cooler (event mode)", "After-school events", "Event-driven"],
      ],
    },
    {
      heading: "3. Contract SLA template",
      items: [
        { number: 1, title: "Tier 1 — revenue-critical / cold-chain / payment failure", description: "Acknowledgement < 4 hours; resolution < 24 hours. Examples: machine offline, payment system down, refrigeration excursion." },
        { number: 2, title: "Tier 2 — stockout / planogram refresh", description: "Acknowledgement 24-48 hours; resolution 5-7 days." },
        { number: 3, title: "Tier 3 — cosmetic / signage", description: "Acknowledgement 5 days; resolution 14 days." },
        { number: 4, title: "Restock cadence", description: "Combo + beverage cooler: 2x/week baseline, scaling to 3-4x/week in peak windows (BTS, athletic seasons). Fresh-food: daily." },
        { number: 5, title: "Cashless availability", description: "Cashless uptime ≥ 99% per month; cash-and-cashless split reported monthly." },
        { number: 6, title: "Refund SLA", description: "Cashless refunds processed < 24 hours via app or SMS; cash refunds at next visit (max 7 days)." },
      ],
    },
    {
      heading: "4. After-school operations playbook",
      paragraph:
        "Smart Snacks applies until 30 minutes after the last bell. After that, athletics events, theater, and community events can use an expanded planogram — but only if the contract addendum permits and the wellness committee approves.",
      items: [
        { label: "Event-mode planogram", value: "Operator timestamps planogram swap from compliant to event-mode after the last bell." },
        { label: "Event SKU set", value: "Hydration + protein + concession-style snacks per athletics coordinator input." },
        { label: "Event restock", value: "Operator pre-stocks before known events (home games, theater openings)." },
        { label: "Event revenue routing", value: "Event-mode revenue commission may differ from school-day rate; document in contract addendum." },
        { label: "Wellness alignment", value: "Wellness committee approves event-mode SKU set annually." },
      ],
    },
    {
      heading: "5. Telemetry + reporting",
      paragraph:
        "Telemetry baselines the program. Per-SKU velocity + cashless mix + refund rate + uptime are the four KPIs reported monthly.",
      items: [
        { check: "Cellular telemetry on every machine, sub-15-minute heartbeat (Cantaloupe / Nayax / 365 Retail Markets)." },
        { check: "Per-SKU velocity report by location and by school-day vs after-school window." },
        { check: "Cashless mix report — target ≥ 75% at HS; below 60% triggers payment hardware review." },
        { check: "Refund rate report — target < 2% of transactions." },
        { check: "Uptime report — target ≥ 98% per machine per month." },
        { check: "Temperature excursion log for refrigerated units." },
        { check: "Smart Snacks attestation refreshed quarterly." },
      ],
    },
    {
      heading: "6. Revenue model + commission structure",
      paragraph:
        "Commission structures range from 10-30% of gross sales depending on operator service level, restock cadence, and equipment investment. Revenue routes per district policy — athletics, student activities fund, PTA partnership, or general fund.",
      headers: ["Commission structure", "Typical rate", "When to use"],
      rows: [
        ["Percentage of gross", "10-30%", "Standard structure; operator absorbs hardware + service"],
        ["Tiered (escalator)", "10% under $X; 15% above", "Larger programs incentivize operator growth"],
        ["Flat per-machine fee", "$100-300/month/machine", "Less common; flat rate regardless of revenue"],
        ["Hybrid", "Base + variable", "Larger districts; predictable floor with upside"],
      ],
    },
    {
      heading: "7. Wellness committee + parent communication",
      items: [
        { check: "Wellness committee reviews SKU list each quarter." },
        { check: "Parent communication via district channels (ParentSquare, Remind, district email) at launch and annually." },
        { check: "Parent feedback channel — annual survey or refund-form data review." },
        { check: "After-school SKU set posted on athletics + activities pages." },
        { check: "Annual KPI report shared with PTA + booster club." },
      ],
    },
    {
      heading: "8. Operator selection checklist",
      items: [
        { check: "Operator has 24+ months of HS placements with 3 verifiable references." },
        { check: "Operator can attest to Smart Snacks workflow and after-school event mode." },
        { check: "Operator's telemetry and cashless capabilities meet contract spec." },
        { check: "Operator carries insurance (GL ≥ $2M / $5M aggregate, auto, workers' comp, cyber)." },
        { check: "Operator's restock cadence is contractually flexible." },
        { check: "Operator reports monthly KPIs and quarterly Smart Snacks attestation." },
        { check: "Operator has executed a wellness-policy review with the school nutrition director." },
      ],
    },
  ],
  footer:
    "This template is a working program-design reference. Localize to district wellness policy and state competitive-food rules; confirm board approval workflow before commit.",
});

console.log("wrote "+"vending-machines-for-high-schools");
