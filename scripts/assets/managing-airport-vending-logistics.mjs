import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "managing-airport-vending-logistics",
  assetType: "playbook",
  title: "Airport Vending Operations Playbook",
  subtitle: "Telemetry dispatch model, SIDA badge program template, zone staging design",
  intro:
    "Airport vending operations is two problems stacked on each other: a high-velocity vending operation and a credential-gated logistics operation. This playbook codifies the telemetry dispatch model, SIDA badge program template, and zone staging design LetUsVending operator partners are equipped to apply — referenced against TSA 49 CFR 1542 / 1544 (airport + airline security programs), FAA Part 139 (airport certification), FAA AC 150/5210-20 (Ground Vehicle Operations on Airports), FDA Food Code 2022 cold-chain, and PCI-DSS 4.0 for the cashless layer.",
  sections: [
    {
      heading: "1. Telemetry dispatch model",
      paragraph:
        "Airport gate-area machines turn 3-10x the velocity of office machines. Manual restock cadence cannot keep up; telemetry-driven dispatch is the only model that holds 98%+ uptime.",
      items: [
        { number: 1, title: "Heartbeat + threshold model", description: "Every machine reports column-level inventory every 5-15 minutes via cellular modem (Cantaloupe, Nayax, 365 Retail Markets, USAT). When any column drops below the SKU-specific threshold, the machine appears on the dispatch screen." },
        { number: 2, title: "Threshold tuning by zone", description: "Gate-area: 25-30% remaining = restock. Concourse mid-traffic: 20% remaining. Lounge / crew: 30% remaining. Threshold is the lead-time the dispatch operation needs to badge in, stage, and refill before stockout." },
        { number: 3, title: "Route batching", description: "Dispatch operation batches every 90 minutes during operating peak; on-demand outside peak. SIDA-badged route personnel work pre-defined airside circuits to minimize movement-area exposure." },
        { number: 4, title: "Cold-chain monitoring", description: "Cold-food + drink machine temperature > 41°F for > 30 minutes triggers an immediate alert (FDA Food Code 2022 §3-501.16); on-call refrigeration tech dispatched within 4 hours airside." },
        { number: 5, title: "Service-call queue", description: "Tier 1 (offline / payment down) auto-creates ticket; SIDA-badged service tech dispatched. SLA <4 hr at large hubs, <12 hr at medium/small." },
      ],
    },
    {
      heading: "2. SIDA badge program template",
      headers: ["Element", "Owner", "Cadence", "Reference"],
      rows: [
        ["Position designation form", "Operator HR", "Per hire", "49 CFR 1542.211"],
        ["DAC fingerprint + STA submission", "Operator + airport badging", "Day 1-5 of hire", "49 CFR 1542.209"],
        ["CHRC (Criminal History Records Check)", "TSA / FBI", "Within 30 days of submission", "49 CFR 1542.209(d)"],
        ["SIDA training (initial + annual)", "Airport training office", "Initial + every 12 months", "Airport ASP"],
        ["Movement-area / AVOP training", "Airport ops", "If apron/movement access required", "FAA AC 150/5210-20"],
        ["Badge issuance + activation", "Airport badging office", "After all clearances", "Per airport ASP"],
        ["Badge audit + return on separation", "Operator HR + airport badging", "Same day as separation", "Per airport ASP"],
        ["Lost / damaged badge protocol", "Operator HR", "Immediate report", "Per airport ASP"],
      ],
    },
    {
      heading: "3. Zone staging design",
      items: [
        { label: "Landside staging warehouse", value: "Operator-leased or sub-leased warehouse landside; full SKU inventory + refrigeration + commissary kitchen if fresh-food prepared on-site. Sales-tax registered + FDA-registered food facility (21 CFR 1.225)." },
        { label: "Airside staging closet", value: "Small lockable closet airside per concourse for top-velocity SKU caches; reduces badge-in lag during peak restock windows. Coordinated with airport concessions office." },
        { label: "Mobile dispatch cart", value: "SIDA-badged route uses a cart configured for snack + drink + cold-food restock. Cold-chain compliance via insulated tote with ice packs (datalogger if cold-food)." },
        { label: "Cold-chain handoff", value: "Commissary > insulated tote > airside cooler. Continuous temperature logging from commissary to airside cooler to consumer. Datalogger retained per QA log." },
        { label: "Reverse logistics", value: "Expired + damaged SKUs returned to landside warehouse, destroyed per local health-department disposal protocol, documented in the operator's QA log." },
      ],
    },
    {
      heading: "4. Vehicle + movement-area logistics",
      items: [
        { check: "AVOP (Airfield Vehicle Operator Permit) per FAA AC 150/5210-20 for any vehicle on the movement area" },
        { check: "Driver familiarization + escort protocol per airport's Movement Area Driving Permit program" },
        { check: "Vehicle markings + signage per ICAO Annex 14 + airport-specific standards" },
        { check: "Pre-trip + post-trip vehicle inspection log retained" },
        { check: "Two-way radio or airport-issued comm device for ground control communication on movement areas" },
        { check: "Apron incident reporting per airport ops manual" },
      ],
    },
    {
      heading: "5. Operating SLA matrix",
      headers: ["Tier", "Description", "Acknowledge", "Resolve"],
      rows: [
        ["Tier 1", "Offline / payment down / cold-chain excursion", "<1 hr airside hub", "<4 hr hub / <12 hr non-hub"],
        ["Tier 2", "Single SKU stockout (high-velocity)", "<2 hr", "<8 hr"],
        ["Tier 3", "Single SKU stockout (low-velocity) / planogram refresh", "24 hr", "5-7 days"],
        ["Tier 4", "Cosmetic / signage", "5 days", "14 days"],
        ["Tier 5", "IROPS surge", "Immediate per airline / airport ops", "Continuous through event"],
      ],
    },
    {
      heading: "6. Reporting + sustainability metrics",
      items: [
        { check: "Monthly concessions report to airport: gross, MAG vs. actual, uptime per machine, refund rate, ACDBE utilization" },
        { check: "Quarterly QBR with airport concessions office: planogram refresh, healthy-share velocity, IROPS event review, customer-experience score" },
        { check: "Annual sustainability report aligned to ACI-ACA Airport Carbon Accreditation where applicable" },
        { check: "Waste + recycling metrics: tonnage diverted from landfill, recyclable packaging share" },
        { check: "Energy: ENERGY STAR-listed equipment share, LED conversion %" },
        { check: "Water: filter cycle + drainage compliance" },
        { check: "FALCPA + 21 CFR 101.8 calorie disclosure attestation maintained" },
      ],
    },
    {
      heading: "7. LetUsVending capability statement",
      paragraph:
        "Through the LetUsVending operator network we can match an airport or master concessionaire with operator partners equipped to run the telemetry-driven dispatch model, SIDA badge program, zone staging design, FAA AC 150/5210-20-compliant movement-area logistics, and concessions-office reporting summarized above. Operating scope is set per opportunity after a discovery call.",
    },
  ],
  footer:
    "Informational reference. Confirm SIDA badging, AVOP, ACDBE, and FAA / TSA requirements with the airport authority + AHJ. Citations current at publication.",
});

console.log("wrote "+"managing-airport-vending-logistics");
