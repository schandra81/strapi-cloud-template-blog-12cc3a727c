import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "office-coffee-vendors-near-me",
  assetType: "matrix",
  title: "Office Coffee Vendor Selection Framework",
  subtitle: "Category matrix, capability rubric, service radius, and SLA expectations",
  intro:
    "This framework gives offices a structured way to evaluate local + regional + national office coffee vendors. References to NSF/ANSI 4 + 18 commercial equipment standards, UL 197, ENERGY STAR for commercial brewers, ADA Section 308 + 309 for accessible operable parts, and PCI-DSS 4.0 where the program includes account-linked OCS. Capability-framed throughout — every vendor claim should be attestable in writing.",
  sections: [
    {
      heading: "1. Vendor category matrix",
      paragraph:
        "Office coffee vendors split into national, regional, and local categories. Match category to office count, geography, and service expectation.",
      headers: ["Category", "Typical scale", "Service radius", "Service strengths", "Service trade-offs"],
      rows: [
        ["National OCS", "Multi-state; 1,000+ accounts", "Anywhere in US metro", "Bench depth, equipment uniformity, multi-site SLA, enterprise reporting", "Less customization, longer escalation chains, may price tier-1 service higher"],
        ["Super-regional", "5-15 states", "Major metros in region", "Mid-size flexibility + scale; uniform SLA per metro", "May have spotty coverage in tertiary cities"],
        ["Regional OCS", "Single state or metro", "Single metro + adjacent counties", "Local responsiveness, customization, named account manager", "Lower bench depth; single-machine repair time may extend if specialty"],
        ["Local roaster + service", "Single city", "20-50 mile radius", "Premium bean tier, brand cachet, hospitality feel", "Limited equipment portfolio; may sub-contract repair"],
        ["Pure roaster (delivery-only)", "Various", "Anywhere via ship", "Premium bean origin + freshness", "Host owns equipment + service"],
      ],
    },
    {
      heading: "2. Capability + service-radius rubric",
      paragraph:
        "Score each shortlisted vendor 1-5. Operator should attest in writing.",
      items: [
        { label: "Service radius + technician coverage", value: "5 = dispatchable technician within 1 hr drive; 3 = within 2 hr; 1 = > 2 hr or partner-dispatched. Verify by ZIP-code lookup with operator." },
        { label: "Reference accounts in your metro", value: "5 = ≥ 5 in matching size band within metro; 3 = ≥ 3; 1 = none in metro. Reference call required." },
        { label: "Equipment specification + ENERGY STAR / NSF", value: "Operator should provide NSF/ANSI 4 + 18 certified brewers + ENERGY STAR where commercially available. UL 197 for cooking-style equipment." },
        { label: "Tier-1 service SLA (machine down)", value: "5 = ≤ 24 hr ack + resolution; 3 = ≤ 48 hr; 1 = no contractual SLA." },
        { label: "Tier-2 service SLA (descale, filter, calibration)", value: "5 = scheduled cadence + on-demand within 5 days; 3 = scheduled cadence only; 1 = on-call." },
        { label: "Water filtration program", value: "5 = under-counter cartridge with documented replacement; 3 = scheduled; 1 = none." },
        { label: "Bean origin + certification", value: "5 = ≥ 50% fair-trade / rainforest-alliance / organic + named roasters; 3 = ≥ 30%; 1 = no certification commitment." },
        { label: "Plant-milk + condiment range", value: "5 = oat / almond / soy + multiple sweetener tiers; 3 = oat + 1 alternative; 1 = dairy only." },
        { label: "ADA Section 308 + 309 compliance", value: "5 = written attestation + annual verification; 3 = written attestation; 1 = none." },
        { label: "Insurance + liability", value: "$2M GL + $1M umbrella + additional-insured endorsement; food product liability ≥ $1M." },
      ],
    },
    {
      heading: "3. SLA expectations summary",
      headers: ["Element", "Standard expectation", "Premium expectation"],
      rows: [
        ["Uptime SLA", "≥ 98% monthly", "≥ 99%"],
        ["Tier-1 ack / resolve", "≤ 24 hr / ≤ 24 hr", "≤ 4 hr / ≤ 24 hr"],
        ["Tier-2 ack / resolve", "≤ 48 hr / 5-7 days", "≤ 24 hr / ≤ 5 days"],
        ["Stock delivery cadence", "Weekly", "Bi-weekly with telemetry top-off"],
        ["Cleaning + descaling", "Quarterly", "Monthly"],
        ["Water filter replacement", "Per manufacturer cycle", "Per manufacturer cycle + telemetry-triggered"],
        ["QBR cadence", "Quarterly", "Monthly stand-up + quarterly QBR"],
        ["Account manager response", "≤ 1 business day email", "≤ 4 hr email + ≤ 1 hr urgent phone"],
      ],
    },
  ],
  footer:
    "This framework is informational and not legal advice. Operator capability claims should be verified through reference calls and written attestation. LetUsVending can connect host teams with operators in your metro equipped to deliver OCS at the right scale.",
});

console.log("wrote "+"office-coffee-vendors-near-me");
