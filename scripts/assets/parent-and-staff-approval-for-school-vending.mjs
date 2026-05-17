import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "parent-and-staff-approval-for-school-vending",
  assetType: "pack",
  title: "School Vending Approval Packet",
  subtitle: "Smart Snacks documentation, parent communication, and wellness committee workflow",
  intro:
    "Parent and staff approval for K-12 vending isn't a single meeting — it's a documented packet covering federal Smart Snacks (7 CFR 210.11), state competitive-food rules, district wellness policy (Healthy, Hunger-Free Kids Act of 2010 § 204), and a wellness committee workflow. This pack codifies the packet so a district is equipped to walk into a board meeting, parent forum, or wellness committee review with documentation in hand.",
  sections: [
    {
      heading: "1. Smart Snacks documentation",
      paragraph:
        "Every SKU on a student-accessible machine during the school day must pass the USDA Smart Snacks Product Calculator. The packet includes a per-SKU attestation from the operator.",
      items: [
        { label: "SKU list with Smart Snacks attestation", value: "Per-SKU: name, brand, calories, fat %, saturated fat %, sodium, sugar, and 'pass' attestation from the USDA Smart Snacks Product Calculator." },
        { label: "Entrée standards", value: "≤ 350 cal, ≤ 35% fat-calories, ≤ 10% saturated fat, ≤ 480 mg sodium per 7 CFR 210.11." },
        { label: "Snack standards", value: "≤ 200 cal, ≤ 35% fat-calories, ≤ 10% saturated fat, ≤ 200 mg sodium." },
        { label: "Beverage standards (HS)", value: "Plain water, flavored water ≤ 5 cal/8oz, ≤ 12oz low-fat milk, ≤ 12oz 100% juice, ≤ 20oz calorie-free/low-calorie beverages." },
        { label: "Beverage standards (MS/ES)", value: "Plain water, ≤ 8oz low-fat milk, ≤ 8oz 100% juice — calorie-free/low-calorie NOT permitted." },
      ],
    },
    {
      heading: "2. State competitive-food overlay",
      paragraph:
        "State rules layer above the federal Smart Snacks floor. The packet documents which state overlay applies and any school-day-window extensions.",
      headers: ["Overlay area", "Federal floor", "Common state add-ons"],
      rows: [
        ["School-day window", "Midnight to 30 min after last bell", "Some states extend through entire on-campus day"],
        ["Beverage limits", "12oz milk/juice cap at HS", "Some states cap at 8oz at all grades"],
        ["Sugar limits", "Snack ≤ 35% sugar by weight", "Some states tighten to ≤ 25% by weight"],
        ["Caffeine", "No HS limit; prohibited MS/ES", "Some states prohibit caffeine through grade 12"],
        ["Fundraiser exemptions", "Federal allows limited exempt fundraisers", "States set the number of exempt days"],
      ],
    },
    {
      heading: "3. Parent communication template",
      paragraph:
        "Parent communication has three touchpoints: pre-launch announcement, first-90-day check-in, and annual update. Each uses district-standard channels (ParentSquare, Bloomz, Remind, district email, board agenda).",
      items: [
        { number: 1, title: "Pre-launch announcement (60 days before)", description: "Letter from principal + wellness coordinator. Covers Smart Snacks compliance, SKU list, payment options, refund process. Includes parent feedback form (open 30 days)." },
        { number: 2, title: "Wellness committee meeting (45 days before)", description: "Parent representative + nutrition director + operator present SKU list, compliance attestation, and placement plan. Committee approval documented." },
        { number: 3, title: "Board agenda (30 days before)", description: "Vending placement + contract on board consent agenda; documentation packet attached." },
        { number: 4, title: "First 90-day check-in", description: "Wellness committee reviews telemetry — top sellers, refund rate, Smart Snacks compliance attestation. Findings communicated to parents through district channels." },
        { number: 5, title: "Annual update", description: "Annual wellness report includes vending KPIs, SKU updates, parent feedback summary." },
      ],
    },
    {
      heading: "4. Wellness committee workflow",
      paragraph:
        "Per the Healthy, Hunger-Free Kids Act § 204, every district must have a wellness committee. The committee owns vending program oversight.",
      items: [
        { check: "Committee membership includes parent, teacher, school nutrition director, student representative, administrator." },
        { check: "Committee meets ≥ 2x/year per HHFKA requirements; vending is on each agenda." },
        { check: "Committee reviews SKU list and Smart Snacks attestation each quarter." },
        { check: "Committee approves any planogram change ahead of operator deployment." },
        { check: "Committee reviews refund rate, stockout rate, and parent feedback annually." },
        { check: "Committee documents decisions in minutes posted to the district website." },
      ],
    },
    {
      heading: "5. Staff approval workflow",
      paragraph:
        "Staff approval is the second track — separate from the wellness committee. Staff-lounge vending falls outside Smart Snacks if locked to students, but the district has wellness signaling.",
      items: [
        { label: "Staff-lounge equipment", value: "AI smart-cooler or combo machine, staff-card-locked outside staff hours." },
        { label: "Staff SKU input", value: "Staff council provides input on SKU mix once per year; operator commits to a planogram refresh per the input." },
        { label: "Staff-only payment", value: "Payroll-deduct or staff-ID payment integration where the district uses MySchoolBucks staff side or comparable." },
        { label: "Staff feedback", value: "Annual staff survey reports satisfaction, refund issues, and SKU requests." },
      ],
    },
    {
      heading: "6. FAQ for parent communication",
      paragraph:
        "These are the seven questions that surface most often in parent forums and the documented response for each.",
      items: [
        { label: "Q: Is vending allowed during the school day?", value: "A: Yes, with Smart Snacks compliance per 7 CFR 210.11. Every SKU passes the USDA Smart Snacks Product Calculator before placement on a student-accessible machine." },
        { label: "Q: What about allergies?", value: "A: Each SKU carries FALCPA-compliant allergen labels. Allergen summary is on the machine face. Peanut/tree-nut SKUs are segregated and labeled prominently." },
        { label: "Q: Can my child use a debit card / phone payment?", value: "A: Yes. EMV chip, contactless tap, and mobile wallet (Apple Pay / Google Pay) are supported. Where the district uses MySchoolBucks / Titan / LINQ Connect, student-ID payment is integrated." },
        { label: "Q: How do I report an allergen mistake or expired product?", value: "A: Operator app or SMS-to-refund number. Refund processed within 24 hours for cashless transactions. Operator log captures the incident." },
        { label: "Q: Who controls what's in the machine?", value: "A: District wellness committee approves the SKU list and the operator's quarterly planogram refresh; parents are represented on the committee." },
        { label: "Q: What happens to expired food?", value: "A: 2-day pull rule; pulled SKUs are donated to a Feeding America partner where the cold chain permits, otherwise discarded. Documented in the operator log." },
        { label: "Q: Does the school make money?", value: "A: Yes, through commission revenue. Revenue funds athletic programs, student activities, or wellness initiatives per district policy and PTA agreement." },
      ],
    },
    {
      heading: "7. Approval packet contents checklist",
      paragraph:
        "Bring this packet to the wellness committee, parent forum, and board meeting. Operator should provide each item before the meeting.",
      items: [
        { check: "Per-SKU Smart Snacks attestation report." },
        { check: "Equipment specification sheet with ADA Section 308 attestation." },
        { check: "Operator certificate of insurance (GL + auto + workers' comp + cyber)." },
        { check: "Operator references — 3 comparable K-12 placements." },
        { check: "Planogram refresh schedule." },
        { check: "Refund policy + parent communication channels." },
        { check: "Donation pathway documentation (Bill Emerson MOU)." },
        { check: "Telemetry capability sheet (Cantaloupe / Nayax / 365 Retail Markets)." },
      ],
    },
  ],
  footer:
    "This packet is a working approval reference. Localize to district policy and state competitive-food rules. Confirm wellness committee meeting cadence and board approval workflow with the district superintendent's office.",
});

console.log("wrote "+"parent-and-staff-approval-for-school-vending");
