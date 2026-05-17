import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "airport-vending-contracts-and-permits",
  assetType: "playbook",
  title: "Airport Vending Permit + RFP Playbook",
  subtitle: "Five layers, master concessionaire framework, and TSA badging timeline",
  intro:
    "Airport vending is not a workplace placement with a SIDA badge stapled on. It's a five-layer regulatory + commercial stack — airport sponsor (FAA AC 150/5190-6), master concessionaire framework (49 CFR Part 23 ACDBE), TSA badging (49 CFR 1542 / 1544), local health department, and concession-specific RFP terms. This playbook codifies the operating practices LetUsVending operator partners are equipped to support in pursuing or operating an airport vending placement.",
  sections: [
    {
      heading: "1. The five layers (and who governs each)",
      headers: ["Layer", "Governing authority", "Primary instrument", "Operator deliverable"],
      rows: [
        ["1. Airport sponsor + economics", "Airport authority + FAA AC 150/5190-6", "Master concession or direct lease", "Pro forma + commission floor + capex plan"],
        ["2. ACDBE / DBE participation", "DOT 49 CFR Part 23", "ACDBE certification + utilization plan", "DBE goal % per concession opportunity"],
        ["3. Security / SIDA badging", "TSA 49 CFR 1542 / 1544", "Airport security program (ASP)", "Per-employee SIDA badge + STA"],
        ["4. Health + food safety", "Local health department + FDA Food Code 2022", "Mobile / commissary permit", "Hazard analysis + cold-chain log"],
        ["5. Concession-specific RFP terms", "Airport CFO + concessions office", "Concession agreement / sublease", "MAG + percentage rent + service SLA"],
      ],
    },
    {
      heading: "2. Master concessionaire framework",
      paragraph:
        "Most U.S. medium- and large-hub airports run concessions through a master concessionaire (HMSHost / Areas / Paradies Lagardère / SSP America / OTG / Hudson) or a small set of prime concessionaires. Vending often sits as a subconcession under the master, not as a direct airport contract.",
      items: [
        { number: 1, title: "Direct lease (rare)", description: "Operator contracts directly with the airport for vending space. Usually only at non-hub or small-hub facilities. Lowest layer count but full burden on the operator." },
        { number: 2, title: "Subconcession under master", description: "Operator contracts with the master concessionaire who already holds the head-lease. Master handles airport-side reporting; operator handles vending economics. Most common path." },
        { number: 3, title: "Joint-venture / ACDBE arrangement", description: "ACDBE-certified operator partners with a non-ACDBE prime to meet 49 CFR Part 23 utilization goals (typically 10-30%). Documented utilization plan filed with airport DBE office." },
        { number: 4, title: "Direct airport RFP (mixed)", description: "Some airports (mid-hubs, government / international) issue stand-alone vending RFPs. Same five layers but operator owns the concession-agreement layer directly." },
      ],
    },
    {
      heading: "3. TSA badging timeline + cost",
      headers: ["Step", "Owner", "Timeline", "Note"],
      rows: [
        ["Designated Aviation Channeling (DAC) fingerprint", "Operator employee", "Day 1-3", "$25-$75 fingerprint fee"],
        ["Security Threat Assessment (STA) submission", "Airport badging office", "Day 1-5", "TSA review window"],
        ["Criminal History Records Check (CHRC)", "TSA / FBI", "5-15 business days", "49 CFR 1542.209 disqualifying offenses screen"],
        ["Security Identification Display Area (SIDA) training", "Airport training", "Day 10-30 (recurring annual)", "Required for any escort + un-escorted access"],
        ["Driver / movement-area training", "Airport ops", "Day 14-45 if AOA needed", "Some vending routes need apron access"],
        ["Badge issuance + cost", "Airport badging office", "Day 21-60 end-to-end", "$50-$250 / badge / year"],
        ["Badge return on termination", "Operator HR", "Same day as separation", "Lost-badge fee $200-$1,000"],
      ],
    },
    {
      heading: "4. ACDBE participation",
      items: [
        { label: "Authority", value: "49 CFR Part 23 (Participation by Disadvantaged Business Enterprises in Airport Concessions). Goal-setting by airport per ACDBE program." },
        { label: "Typical goal %", value: "Goals range 5-30% of concession revenue depending on airport size + opportunity mix. Public goal published annually in the airport's ACDBE program update." },
        { label: "Certification path", value: "Operator certified through the state UCP (Unified Certification Program). Cross-airport reciprocal recognition." },
        { label: "Utilization plan", value: "Prime + ACDBE submit utilization plan with bid; tracked through commercially useful function (CUF) reviews." },
        { label: "Compliance audit", value: "Airport DBE office audits annually; civil-penalty exposure for misrepresented utilization." },
      ],
    },
    {
      heading: "5. Concession-agreement economics",
      items: [
        { number: 1, title: "Minimum annual guarantee (MAG)", description: "Floor revenue paid to the airport regardless of sales. Typically 70-85% of pro forma year-1 percentage rent." },
        { number: 2, title: "Percentage rent", description: "10-20% of gross at large hubs; 8-15% at mid-hubs; 6-12% at small hubs. Categorical (snack vs. beverage vs. fresh) sometimes differentiated." },
        { number: 3, title: "Capex contribution", description: "Operator carries machine + telemetry + branding capex; airport may carry electrical + space build-out depending on the agreement." },
        { number: 4, title: "Pricing parity / 'street + 10'", description: "Many airports require menu pricing within X% of local off-airport retail (typically + 10-20%). Pricing must be filed and approved." },
        { number: 5, title: "Hours of operation", description: "24/7 expected at hub facilities. Pre-opening + post-closing landside vending often allowed but airside follows concession-program hours." },
      ],
    },
    {
      heading: "6. Health + food safety overlay",
      items: [
        { check: "Local health-department food permit for fresh/perishable + commissary kitchen if used" },
        { check: "FDA Food Code 2022 cold-chain ≤41°F continuous (§3-501.16) with telemetry alert + corrective-action log" },
        { check: "FDA Food Code 2022 §3-501.17 date-marking + 7-day discard for ready-to-eat items prepared off-site" },
        { check: "FALCPA + FASTER Act top-9 allergen labeling on every packaged SKU" },
        { check: "Calorie disclosure per 21 CFR 101.8 (vending calorie rule)" },
        { check: "ServSafe-trained route personnel where commissary handling occurs" },
        { check: "Sanitation + pest-control logs aligned to local health-department inspection cadence" },
      ],
    },
    {
      heading: "7. Operating SLA expectations at airports",
      items: [
        { check: "Tier 1 (offline / payment down / cold-chain) <24 hr ack + resolve — airports often require <12 hr or <4 hr at hubs" },
        { check: "Restock cadence telemetry-driven; high-velocity gate-area machines may visit 2-3x/day at peak" },
        { check: "Refund flow per the airport's customer-experience program (often 100% money-back guaranteed)" },
        { check: "Monthly + quarterly reporting to airport concessions office: gross, MAG vs. actual, refund rate, uptime, ACDBE utilization" },
        { check: "Annual ACDBE utilization audit + civil-penalty exposure if misrepresented" },
        { check: "Sustainability + ESG metrics increasingly required at large hubs (water, energy, recyclable packaging)" },
      ],
    },
    {
      heading: "8. LetUsVending capability statement",
      paragraph:
        "Through the LetUsVending operator network we can match an airport opportunity with operator partners equipped to support the five layers — concession-agreement structuring, ACDBE certification + utilization, SIDA badge program management, FDA Food Code-compliant fresh-food + cold-chain, and the operating SLA expectations of large-hub airport concessions offices. Engagement scope is set per opportunity after a discovery call.",
    },
  ],
  footer:
    "Informational reference, not legal advice. Confirm 49 CFR Part 23, 49 CFR 1542/1544, FAA AC 150/5190-6, and local health-department requirements with counsel and the airport concessions office for the specific facility. Citations current at publication.",
});

console.log("wrote "+"airport-vending-contracts-and-permits");
