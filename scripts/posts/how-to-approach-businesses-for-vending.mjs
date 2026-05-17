import { seedPost, tldr, timeline, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-to-approach-businesses-for-vending", [
  tldr({
    heading: "How should a vending operator approach a business about placing a machine?",
    paragraph:
      "Approaching a business for vending placement is a structured process, not a cold pitch. Effective approach: (1) pre-qualify the placement — confirm employee count / traffic, current vending status, decision-maker, fit with your operator capability; (2) identify and reach the right decision-maker (facility manager / HR / property manager / GC, not receptionists); (3) lead with value-specific opening that references the placement, not a generic pitch; (4) request a 15-minute meeting, not a contract on the first call; (5) prepare placement-specific revenue projection backed by telemetry data from similar placements; (6) bring peer references in the same placement type; (7) walk the site to assess electrical, traffic patterns, placement zones; (8) deliver a tailored proposal with commission structure, service SLA, and exit provisions; (9) follow up systematically over 4-8 weeks (5-7 contacts typical). Conversion benchmarks: 5-10% call-to-meeting, 30-50% meeting-to-proposal, 40-60% proposal-to-contract. Approach quality drives conversion at every stage.",
    bullets: [
      { emphasis: "Pre-qualify before approaching:", text: "Confirm employee count / traffic, current vending status, decision-maker identity, fit with your operator capability. Skipping pre-qualification wastes outreach on low-fit placements." },
      { emphasis: "15-minute meeting, not contract:", text: "First-call goal is a 15-minute meeting, not a signed contract. Pitching contract on first call signals desperation and erodes conversion." },
      { emphasis: "5-7 follow-ups typical before conversion:", text: "Approach is multi-contact over 4-8 weeks. CRM-tracked cadence. Systematic follow-up drives conversion; one-and-done approaches don't." },
    ],
  }),
  timeline({
    heading: "How to approach a business for vending — step-by-step",
    sub: "Nine-step structured approach from initial pre-qualification to signed contract. Each step has conversion benchmarks.",
    howToName: "Approach a business for vending placement",
    totalTime: "4-12 weeks from first contact to signed contract",
    steps: [
      { title: "Pre-qualify the placement", description: "Confirm employee count or daily traffic, current vending status (legacy operator? unmet demand?), decision-maker identity, fit with your operator capability (office vs construction vs apartment vs hospital). Skip placements with no fit; concentrate outreach on qualified prospects.", duration: "15-30 minutes per prospect" },
      { title: "Identify the decision-maker", description: "Office: facility manager or HR / admin. Apartment: property manager. Hospital: auxiliary services or facility manager. Campus: dining services or auxiliary services. Construction: GC or site superintendent. Retail: store manager or operations. LinkedIn + company website + targeted phone calls confirm.", duration: "10-20 minutes per prospect" },
      { title: "Make first contact (call, email, or LinkedIn)", description: "Lead with placement-specific value — reference the placement and how vending would benefit. Brief introduction. Confirm decision-maker. Ask for 15-minute meeting. Conversion target: 5-10% to scheduled meeting. Document outcome in CRM.", duration: "5-15 minutes per contact" },
      { title: "Run the first meeting", description: "15-30 minutes. Understand placement traffic, current vending, decision criteria, timeline. Share operator capability, peer references, telemetry-driven revenue projection. Confirm site walk + proposal timeline. Conversion target: 30-50% meeting to proposal.", duration: "15-30 minutes" },
      { title: "Walk the site", description: "On-site walk to assess placement zones (high-traffic, accessible, ADA-compliant), electrical capacity (15A / 20A circuits, dedicated where required), traffic patterns, current vending performance (if any). 30-60 minutes. Notes feed proposal development.", duration: "30-60 minutes" },
      { title: "Develop and deliver proposal", description: "Tailored proposal: telemetry-driven revenue projection, commission structure, service SLA (24-48 hour response typical), planogram approach, sustainability spec, contract length, exit provisions. 1-2 week turnaround from site walk. Reference checks at prospect option.", duration: "1-2 weeks" },
      { title: "Manage proposal review", description: "Prospect reviews proposal and may call 2-3 of your peer references. Compete against other operators if RFP. Respond to clarifications. Conversion target: 40-60% proposal to contract. Lost-bid post-mortem if not selected.", duration: "2-4 weeks" },
      { title: "Negotiate and sign contract", description: "Final terms: commission rate, service SLA, contract length (1-3 years typical), exit provisions, sustainability spec. Engage attorneys at high-stakes contracts. Final signing 2-4 weeks from proposal review.", duration: "2-4 weeks" },
      { title: "Install and first business review", description: "Operator install crew handles delivery, setup, telemetry verification, planogram load. First business review 30-60 days post-install to confirm operations. Quarterly cadence thereafter. Begin expansion conversations at 6-12 months.", duration: "30-60 days post-signing" },
    ],
  }),
  specList({
    heading: "Approach specifications by placement type",
    items: [
      { label: "Office — facility manager or HR approach", value: "Decision-maker at facility manager or HR / admin. Value framing: employee amenity, retention, satisfaction. Revenue projection: $600-$1.8K monthly per machine typical. Service SLA: 24-48 hour response. Allergen-restricted formats, modern payment, sustainability spec." },
      { label: "Apartment / multi-family — property manager approach", value: "Decision-maker at property manager. Value framing: resident amenity, NAA quality scoring, after-hours convenience. Revenue projection: $2-6K monthly per placement at qualifying communities. Service SLA: 24-48 hour. Resident-app integration where available." },
      { label: "Hospital — auxiliary services approach", value: "Decision-maker at auxiliary services or facility manager (sometimes dietitian for nutrition compliance). Value framing: staff amenity, visitor amenity, nutrition policy alignment. Revenue projection: $400-$1.5K monthly. Allergen-restricted formats critical; HIPAA-aware staffing." },
      { label: "Campus — dining services or auxiliary approach", value: "Decision-maker at dining services or auxiliary services. Value framing: student amenity, dining program complement, after-hours coverage. Revenue projection varies; major-campus contracts $1-8K monthly per placement. Allergen-restricted, meal-plan integration, sustainability." },
      { label: "Construction — GC or superintendent approach", value: "Decision-maker at GC or site superintendent. Value framing: crew amenity, hydration, productivity. Revenue projection: $1-4K monthly at active phase. Outdoor-rated equipment, anti-tipping, cellular telemetry, after-hours access protocol critical." },
      { label: "Retail / mall — center management approach", value: "Decision-maker at mall management or center operations. Value framing: customer amenity, satisfaction lift, commission revenue, complement to food court. Revenue projection: $1-5K monthly per machine at high-traffic placements. AI cooler wall at central seating where qualifying." },
      { label: "Airport — concession office or procurement approach", value: "Decision-maker at concession office or procurement (typically RFP process for major airports). Value framing: traveler amenity, after-hours coverage, gate-area placement, ACI-NA service standards. Revenue projection: $3-12K monthly per machine at qualifying gate placements." },
      { label: "Generic value-first opening — never lead with pitch", value: "'I noticed your office has [X] employees and your current vending [appears underperforming based on visible stockouts / has no machine at the break room / lacks allergen-restricted options].' Brief introduction. Confirm decision-maker. Ask for 15-minute meeting. Specific value-based openings convert 5-10× generic." },
      { label: "Peer references — placement-type-matched", value: "Bring 3-5 current accounts in target prospect's placement type. Pre-call references; brief them on prospect call. References drive 30-50% of conversion at proposal stage. Generic references nearly worthless; placement-type-matched references convert." },
    ],
  }),
  tipCards({
    heading: "Six business approach mistakes",
    sub: "Each is documented in operator sales post-mortems. All preventable with structured approach.",
    items: [
      { title: "Skipping pre-qualification", body: "Approaching every business burns sales time on low-fit placements. Pre-qualify: employee count / traffic, current vending status, decision-maker, operator-capability fit. Concentrate outreach on qualified prospects; skip unmatched placements." },
      { title: "Pitching to gatekeepers", body: "Receptionists, assistants, and front-desk staff are gatekeepers, not decision-makers. Identify and target the decision-maker. LinkedIn + company website + targeted phone calls. Pitching to gatekeepers wastes outreach + erodes credibility." },
      { title: "Generic 'we do vending great' opening", body: "Generic pitches get rejected. Lead with placement-specific value — reference the placement and how vending would benefit. Specific openings convert 5-10× generic. 'I noticed your office has 200 employees...' beats 'I provide vending services.'" },
      { title: "Pitching contract on first call", body: "First-call goal is a 15-minute meeting, not a contract. Pitching contract on first call signals desperation and erodes conversion. Structured progression — call → meeting → site walk → proposal → contract — produces better outcomes." },
      { title: "No peer references in target placement type", body: "Peer references drive 30-50% of conversion at proposal stage. Generic references nearly worthless. Build placement-type-matched references — office references for office prospects, construction for construction, etc. Pre-call references; brief them on prospect call." },
      { title: "No systematic follow-up", body: "5-7 contacts typical before conversion. One-and-done approaches rarely convert. Systematic CRM-tracked cadence: initial → 3-day email → 1-week phone → 2-week case study → 1-month phone → final. Drop after no-response cycle." },
    ],
  }),
  inlineCta({
    text: "Want the business approach framework (pre-qualification + decision-maker targeting + meeting scripts + follow-up cadence)?",
    buttonLabel: "Get the approach framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vending operator outreach and account acquisition across office, apartment, hospital, campus, construction, retail, and airport placements — including pre-qualification frameworks, decision-maker targeting by placement type, meeting scripts, and CRM-tracked follow-up cadence. The benchmarks reflect operator-side conversion data across multiple placement types.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Who do we approach at a business for vending?", answer: "Office: facility manager or HR / admin. Apartment: property manager. Hospital: auxiliary services. Campus: dining services. Construction: GC or superintendent. Retail: store manager or center management. Airport: concession office or procurement. Target decision-makers, not gatekeepers (receptionists, assistants).", audience: "Operators" },
      { question: "What's the first-call goal?", answer: "A 15-minute meeting, not a signed contract. Pitching contract on first call signals desperation and erodes conversion. Structured progression — call → meeting → site walk → proposal → contract — produces better outcomes. Conversion target: 5-10% call-to-meeting.", audience: "Operators" },
      { question: "How should we open the call?", answer: "Lead with placement-specific value — reference the placement and how vending would benefit. 'I noticed your office has [X] employees and your current vending [observation].' Brief introduction. Confirm decision-maker. Ask for 15-minute meeting. Specific openings convert 5-10× generic.", audience: "Operators" },
      { question: "How many follow-ups are typical?", answer: "5-7 contacts typical before conversion. Systematic CRM-tracked cadence: initial call → 3-day email → 1-week phone → 2-week case study → 1-month phone → final outreach. Drop after no-response cycle. One-and-done approaches rarely convert.", audience: "Operators" },
      { question: "What should the first meeting cover?", answer: "Understand placement traffic, current vending, decision criteria, timeline. Share operator capability, peer references, telemetry-driven revenue projection. Confirm site walk + proposal timeline. 15-30 minutes. Conversion target: 30-50% meeting to proposal.", audience: "Operators" },
      { question: "How important are peer references?", answer: "Substantial. Peer references drive 30-50% of conversion at proposal stage. Generic references nearly worthless. Build placement-type-matched references — office for office prospects, construction for construction. Pre-call references; brief them on prospect call.", audience: "Operators" },
      { question: "What's in a proposal?", answer: "Telemetry-driven revenue projection, commission structure, service SLA (24-48 hour response typical), planogram approach, sustainability spec, contract length, exit provisions. Tailored to placement type. 1-2 week turnaround from site walk. Reference checks at prospect option.", audience: "Operators" },
      { question: "How long from approach to contract?", answer: "4-12 weeks typical from first contact to signed contract. Pre-qualify → first contact → meeting → site walk → proposal → review → negotiation → signing. Faster at smaller placements; longer at major-airport / federal / large institutional contracts (sometimes 3-6 months).", audience: "Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending operator sales practice", url: "https://www.namanow.org/", note: "Industry trade association covering operator outreach + account acquisition" },
      { label: "BOMA — Building Owners and Managers Association", url: "https://www.boma.org/", note: "Commercial office facility-manager decision-maker context" },
      { label: "NAA — National Apartment Association", url: "https://www.naahq.org/", note: "Apartment property-manager decision-maker context" },
      { label: "ACI-NA — Airports Council International North America", url: "https://airportscouncil.org/", note: "Airport concession office + procurement context" },
      { label: "AGC — Associated General Contractors of America", url: "https://www.agc.org/", note: "Construction GC + superintendent decision-maker context" },
    ],
  }),
  relatedGuides({
    heading: "Related vending sales and approach guides",
    items: [
      { eyebrow: "Sister guide", title: "Cold calling tips for vending operators", description: "Conversion benchmarks, follow-up cadence, and CRM-tracked funnel design.", href: "/vending-machine-locators/cold-calling-tips-for-vending-operators" },
      { eyebrow: "Operations", title: "How to write a vending machine proposal", description: "Proposal structure, revenue projection, commission, service SLA, and exit provisions.", href: "/vending-machine-locators/how-to-write-a-vending-machine-proposal" },
      { eyebrow: "Hub", title: "All vending location guides", description: "Lead generation, approach, proposal, negotiation, and operator scaling.", href: "/vending-machine-locators" },
    ],
  }),
]);
process.exit(0);
