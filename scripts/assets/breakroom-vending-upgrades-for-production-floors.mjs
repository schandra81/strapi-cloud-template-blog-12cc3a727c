import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "breakroom-vending-upgrades-for-production-floors",
  assetType: "playbook",
  title: "Production-Floor Breakroom Upgrade Playbook",
  subtitle: "Sequencing pathway, capital budget framework, implementation timeline",
  intro:
    "A production-floor breakroom upgrade is a sequenced capital project, not a same-week machine swap. This playbook codifies the four-phase sequencing pathway, capital budget framework, and 16-26 week implementation timeline an operator should be equipped to deliver — with measurable handoffs at each phase.",
  sections: [
    {
      heading: "1. Sequencing pathway — four phases",
      paragraph:
        "A production-floor breakroom upgrade moves through four phases. Skipping phases produces predictable failure modes: under-spec'd cold chain, missed EHS coordination, or planogram-vs-workforce mismatch.",
      items: [
        { number: 1, title: "Phase 1 — Discovery + baseline (4-6 weeks)", description: "Headcount + shift map, OSHA recordable history, existing equipment audit, planogram velocity baseline (where data exists), workforce demographic + language profile, ADA + NFPA 101 site walk." },
        { number: 2, title: "Phase 2 — Design + procurement (4-6 weeks)", description: "Equipment specification (refrigeration, snack, micro-market vs vending decision), planogram design, integration architecture (telemetry, payment, HRIS), operator RFP issued and scored, contract negotiation." },
        { number: 3, title: "Phase 3 — Build + install (4-8 weeks)", description: "Electrical + network rough-in (where new circuits or drops needed), equipment delivery + install, signage fabrication, HRIS + payment integration test, planogram pre-load, EHS + facility walk-through sign-off." },
        { number: 4, title: "Phase 4 — Launch + stabilization (4-6 weeks)", description: "Soft-launch with shift-huddle communication, 2-week feedback window, planogram tuning, formal launch with town-hall and HR briefing, 30-day stabilization with daily ops review." },
      ],
    },
    {
      heading: "2. Capital budget framework",
      paragraph:
        "Most operator-run vending programs are funded by the operator under commission or fixed-fee terms — but a production-floor breakroom upgrade typically requires host capital for the build-out (electrical, network, finishes, furniture). Plan the budget in three buckets.",
      headers: ["Bucket", "Typical owner", "Range (per 200-worker breakroom)"],
      rows: [
        ["Equipment (vending, coolers, kiosks)", "Operator-funded under contract", "$0 to host (capex absorbed by operator)"],
        ["Electrical + network rough-in", "Host capital", "$15-50k depending on existing service"],
        ["Finishes (flooring, paint, lighting, ceiling)", "Host capital", "$25-100k depending on scope"],
        ["Furniture (tables, chairs, charging stations)", "Host capital", "$15-50k"],
        ["Signage + wayfinding", "Operator (machine-face) + host (room signage)", "$3-10k split"],
        ["AV + digital signage (optional)", "Host capital", "$5-25k"],
        ["Contingency", "Host capital", "10-15% of host scope"],
      ],
    },
    {
      heading: "3. Implementation timeline (16-26 weeks)",
      items: [
        { label: "Weeks 1-4: Discovery", value: "Baseline data pull from HRIS + OSHA recordables. Site walk with Facilities, EHS, HR, and operator candidate. Planogram velocity data request from incumbent operator (where exists)." },
        { label: "Weeks 5-6: Design decisions", value: "Vending-vs-micro-market decision. Equipment specs. Planogram design. Integration scope (telemetry, payment, HRIS). Communication plan." },
        { label: "Weeks 7-10: RFP + selection", value: "Issue RFP, 2-week response window, scoring, finalist interviews, contract negotiation. Operator signs master agreement and site addendum." },
        { label: "Weeks 11-14: Electrical + network rough-in", value: "Where new circuits or network drops needed. Permits per jurisdiction. Inspections at rough-in and final." },
        { label: "Weeks 15-18: Finishes + furniture", value: "Flooring, paint, ceiling, lighting, furniture install. Daily punch-list with general contractor." },
        { label: "Weeks 19-20: Equipment install + integration test", value: "Operator delivers + installs vending/coolers/kiosks. Network + payment integration tested end-to-end. Planogram pre-loaded." },
        { label: "Week 21: Soft-launch", value: "Workers introduced via shift huddle. 2-week feedback window. Daily ops review by operator + host." },
        { label: "Weeks 22-23: Planogram tuning", value: "Velocity data drives planogram adjustments. LTO slate confirmed for next quarter." },
        { label: "Weeks 24-26: Stabilization", value: "Formal launch town-hall. 30-day stabilization with weekly ops review. First QBR scheduled for Week 39." },
      ],
    },
    {
      heading: "4. Equipment specifications",
      items: [
        { label: "Refrigerated machine", value: "ENERGY STAR-qualified, R-290 hydrocarbon refrigerant, LED interior, glass-front. ENERGY STAR Refrigerated Beverage Vending Machines V4.0." },
        { label: "Snack machine", value: "LED interior, vacuum sensors for low-stock, ADA Section 308/309/703 reach + force + contrast." },
        { label: "Micro-market kiosk (if selected)", value: "PCI DSS Level 1 or 2 attestation, VPAT for accessibility, EMV chip + contactless + mobile wallet + payroll deduct (where applicable)." },
        { label: "Telemetry module", value: "Cellular LTE-M or 5G, sub-15-minute heartbeat, encrypted payload." },
        { label: "Coffee equipment (optional)", value: "NSF/ANSI 18 food-zone certified, descaling cycle every 4-6 weeks, FDA Food Code 4-202 alignment." },
      ],
    },
    {
      heading: "5. Standards + regulatory references",
      items: [
        { label: "OSHA 29 CFR 1910 General Industry", value: "Hazard communication, walking-working surfaces, ergonomics. Breakroom not directly regulated but must not introduce hazards into the work environment." },
        { label: "OSHA 1910.141 Sanitation", value: "Drinking water provision, washing facilities, eating + drinking areas separate from toxic-material exposure zones." },
        { label: "NFPA 101 Life Safety Code", value: "Equipment placement preserves egress corridor width (44 in healthcare, 36 in most occupancies) and does not obstruct fire-rated assemblies." },
        { label: "ADA Title III + Sections 308/309/703", value: "Reach range, operating force, contrast + character for all guest-accessible and worker-accessible equipment." },
        { label: "FDA Food Code (state-adopted)", value: "TCS foods at 41°F or below refrigerated; 135°F or above hot. Temperature logs retained 12 months." },
        { label: "FALCPA + FASTER Act", value: "FDA Top 9 allergen labels on all SKUs." },
        { label: "EPA SNAP + Section 608", value: "Refrigerant choice (R-290 preferred); reclaim by certified technician at end of life." },
      ],
    },
    {
      heading: "6. EHS + facility coordination",
      items: [
        { check: "Site walk with Facilities, EHS, HR, and Safety Committee at Discovery + Build phases" },
        { check: "Operator route staff wear hi-vis PPE per facility EHS policy" },
        { check: "Restock windows aligned with low-activity periods (typically 1-2 hours before shift start, 30-60 min during shift change)" },
        { check: "Equipment placement preserves NFPA 101 egress; does not obstruct AED, eye wash, fire pull, fire-rated assemblies" },
        { check: "Refrigerant + electrical work by EPA Section 608 certified technicians; logged in host CMMS" },
        { check: "OSHA recordable-event reporting: 24-hour notification to host EHS" },
        { check: "Annual ADA + life-safety re-walk" },
      ],
    },
    {
      heading: "7. Service SLA (post-launch)",
      headers: ["Tier", "Examples", "Acknowledgement", "Resolution"],
      rows: [
        ["Tier 1 — revenue-critical / cold-chain", "Offline > 30 min, temperature excursion, payment down", "30 minutes", "4 hours on-site"],
        ["Tier 2 — stockout / planogram", "Stockout, planogram refresh", "24-48 hours", "5-7 days"],
        ["Tier 3 — cosmetic / signage", "Signage, cabinet cleaning", "5 days", "14 days"],
      ],
    },
  ],
  footer:
    "This playbook is informational and not legal or design advice. Coordinate with Facilities, EHS, HR, IT, Procurement, and General Counsel before initiating a build-out. LetUsVending is equipped to arrange operators with documented production-floor build-out capability.",
});

console.log("wrote "+"breakroom-vending-upgrades-for-production-floors");
