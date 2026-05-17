import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("do-vending-machines-work-in-power-outages", [
  tldr({
    heading: "Do vending machines keep working during power outages?",
    paragraph:
      "Short answer: not without backup power. Standard vending machines run on continuous 120V grid power; when the power goes out, the machine stops working — lighting goes dark, cashless payment hardware loses power, refrigeration stops cycling, and existing transactions in progress fail. Three solutions exist, in order of capability: (1) UPS battery backup (15-60 minutes of operation, enough to complete in-progress transactions and run on backup briefly); (2) generator backup integration (machine on generator-protected circuit; continues operation during extended outage); (3) full off-grid solar + battery (limited deployment; outdoor / remote placements). For most placements, UPS is the minimum for graceful operation during brief outages; generator integration is required at emergency-capable sites (hospitals, airports, federal facilities, designated shelters). Refrigerated machines have additional concerns — extended outages produce thermal damage to product even after power returns. Operators with telemetry detect outages remotely; coordinate with facilities on restoration timing and post-outage product disposal.",
    bullets: [
      { emphasis: "Standard machines fail in outages:", text: "No power = no operation. Lighting, payment hardware, refrigeration all stop. In-progress transactions fail. Customer experience and product safety both suffer." },
      { emphasis: "Three backup tiers — UPS, generator, off-grid:", text: "UPS 15-60 min minimum. Generator integration for extended outages. Off-grid solar at outdoor/remote placements (limited deployment)." },
      { emphasis: "Refrigerated machines have thermal damage concerns:", text: "Extended outages produce product thermal damage even after power returns. Coordinate with facility on restoration timing and product disposal." },
    ],
  }),
  statStrip({
    heading: "Vending machine power outage benchmarks",
    stats: [
      { number: "15-60 min", label: "UPS battery runtime", sub: "typical backup duration", accent: "blue" },
      { number: "Generator", label: "extended outage protection", sub: "emergency-capable sites", accent: "blue" },
      { number: "2-4 hr", label: "thermal damage threshold", sub: "refrigerated product", accent: "orange" },
      { number: "Telemetry", label: "remote detection", sub: "operator visibility during outage", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Vending power outage protection — three tiers",
    sub: "Tier of backup power determines operation during outages. Match tier to placement criticality.",
    headers: ["Backup tier", "Duration", "Best fit", "Operational reality"],
    rows: [
      ["None (grid only)", "0 (fails immediately)", "Low-criticality offices", "Machine stops; refrigerated product at thermal risk"],
      ["UPS battery", "15-60 minutes", "Standard commercial placements", "Completes in-progress transactions; brief outage handled"],
      ["Generator integration", "Extended (generator runtime)", "Hospitals, airports, federal sites, designated shelters", "Continues operation during extended outages"],
      ["Off-grid solar + battery", "Indefinite (solar generation)", "Outdoor / remote placements", "Limited deployment; off-grid-rated equipment required"],
      ["Hybrid solar augmentation", "Extends grid-on operation", "Sustainability-leading sites", "Reduces grid dependency; pilot scale"],
    ],
  }),
  specList({
    heading: "Vending power outage protection specifications",
    items: [
      { label: "UPS battery backup (minimum)", value: "15-60 minute runtime via UPS battery. Bridges power blips and brief outages. Enables in-progress transaction completion. Verify UPS sized for refrigeration load (compressors draw more on startup). Modern best practice at most commercial placements." },
      { label: "Generator integration", value: "Machine on facility's generator-protected circuit. Continues operation during extended outages (hours to days, generator-runtime-dependent). Standard at emergency-capable sites (hospitals, airports, federal facilities, designated shelters). Verify with facilities at install survey." },
      { label: "Off-grid solar + battery (niche)", value: "Outdoor / remote placements where grid power isn't available. Solar PV panel + battery storage. Outdoor-rated machine + off-grid-compatible electronics. Limited deployment; specific to outdoor athletic fields, remote campus, parking deck placements." },
      { label: "Telemetry-driven outage detection", value: "Modern telemetry detects power loss remotely (machine goes offline, then UPS-bridged status). Operator dashboard shows outage status; alerts operator to coordinate with facility on restoration." },
      { label: "Refrigerated product thermal damage", value: "Refrigerated product (beverages, dairy, fresh items) reaches thermal damage threshold within 2-4 hours of refrigeration loss. Coordinate with facility on restoration timing; pull thermal-damaged product after extended outage. Insurance covers product loss at most placements." },
      { label: "Outage restoration protocol", value: "After power returns: verify refrigeration cycling, payment hardware, telemetry. Pull thermal-damaged product. Investigate cause if equipment-side issue. Document for insurance claim if product loss substantial." },
      { label: "Emergency declaration coordination", value: "Sites with emergency-capability (hospitals, airports, federal facilities) coordinate vending into emergency operations. Free-vend toggle during declared emergencies. Telemetry confirms machine status during events. Build into operator contract." },
      { label: "Communication with customers", value: "During outages, customers approaching machines may try transactions. Modern UPS-backed machines display 'Out of service' message during outage. Operators may post temporary signage explaining outage and refund process for stuck transactions." },
    ],
  }),
  tipCards({
    heading: "Five power outage protection mistakes",
    sub: "Each is documented in vending-host post-outage reviews. All preventable with proper backup tier and protocol.",
    items: [
      { title: "No UPS backup at any placement", body: "Standard commercial placements should have UPS backup minimum. Without UPS, brief power blips fail in-progress transactions, frustrate customers, and risk equipment damage from sudden shutdowns. UPS is cheap insurance ($100-300 per machine)." },
      { title: "Standard machines at emergency-capable sites", body: "Hospitals, airports, federal facilities, and designated shelters need generator-backed power, not just UPS. Standard machines fail during extended outages when they're needed most. Build generator integration into RFP at emergency-capable sites." },
      { title: "No telemetry-driven outage detection", body: "Operators without telemetry can't detect outages remotely. They learn from customer complaints hours or days later. Telemetry enables real-time outage detection and coordination with facility on restoration." },
      { title: "No protocol for refrigerated product after outage", body: "Refrigerated product reaches thermal damage threshold within 2-4 hours. Without protocol, thermal-damaged product remains in machine, creates food safety risk, and customer trust issues. Operator should pull and document after extended outages." },
      { title: "Not coordinating with facility on emergency declaration", body: "Sites with emergency-capability should coordinate vending into emergency operations — free-vend toggle, surge stocking, ops-center contact. Without coordination, vending sits inactive during emergencies when it could serve. Build into operator contract." },
    ],
  }),
  inlineCta({
    text: "Want the vending power outage protection framework (UPS, generator, telemetry, protocol)?",
    buttonLabel: "Get the outage protection framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vending power outage protection at office, hospital, airport, and federal placements — including UPS specification, generator integration, telemetry-driven outage detection, and post-outage protocol. The benchmarks reflect operator-side data and facility manager feedback.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Do vending machines work during power outages?", answer: "Not without backup power. Standard machines stop working immediately when power goes out — lighting, payment hardware, refrigeration all stop. Three backup tiers: UPS (15-60 min), generator integration (extended), off-grid solar (niche outdoor placements).", audience: "Property Managers" },
      { question: "Should we add UPS backup?", answer: "Yes at standard commercial placements. Cheap insurance ($100-300 per machine) that bridges brief outages and enables in-progress transaction completion. Standard UPS bridges 15-60 minutes; sufficient for most blips and brief outages.", audience: "Property Managers" },
      { question: "What about hospitals, airports, federal sites?", answer: "Need generator integration, not just UPS. Standard machines fail during extended outages when they're needed most. Build generator-circuit integration into RFP at emergency-capable sites. Coordinate with facilities at install survey.", audience: "Hospital / Airport / Federal Operations" },
      { question: "What happens to refrigerated product during outages?", answer: "Reaches thermal damage threshold within 2-4 hours of refrigeration loss. Coordinate with facility on restoration timing; pull thermal-damaged product after extended outage. Insurance covers product loss at most placements. Document for claim.", audience: "Operators" },
      { question: "How do operators detect outages?", answer: "Modern telemetry detects power loss remotely (machine goes offline, then UPS-bridged status). Operator dashboard shows outage status; alerts operator to coordinate with facility on restoration. Operators without telemetry learn from customer complaints hours later.", audience: "Operators" },
      { question: "What happens to in-progress transactions during outage?", answer: "Without UPS: transaction fails; customer's card may or may not be charged depending on exact failure timing. With UPS: in-progress transaction completes; subsequent transactions blocked with 'Out of service' message. Operator processes refunds for any failed-but-charged transactions.", audience: "Customers" },
      { question: "Can vending run on solar power?", answer: "At outdoor / remote placements where grid isn't available, yes. Solar PV + battery + outdoor-rated off-grid-compatible machine. Limited deployment; specific to outdoor athletic fields, remote campus, parking deck placements. Not a mainstream backup option.", audience: "Sustainability Officers" },
      { question: "How should we coordinate with facility on outages?", answer: "Operator contact for facility's emergency operations center. Coordination on free-vend toggle during declared emergencies, restoration timing communication, refrigerated product disposal protocol. Build into operator contract; test annually with tabletop exercise.", audience: "Emergency Management" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NEC — National Electrical Code (NFPA 70)", url: "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70", note: "Federal electrical code governing backup power systems" },
      { label: "AHRI — refrigeration equipment standards", url: "https://www.ahrinet.org/", note: "Refrigeration standards relevant to thermal damage after outages" },
      { label: "FDA — Food Safety after power loss", url: "https://www.fda.gov/", note: "Federal food safety guidance after refrigeration loss" },
      { label: "FEMA — emergency operations planning", url: "https://www.fema.gov/", note: "Federal framework for facility emergency operations coordination" },
      { label: "NAMA — vending equipment outage protection", url: "https://www.namanow.org/", note: "Industry guidance on backup power and outage protocols" },
    ],
  }),
  relatedGuides({
    heading: "Related FAQ and operations guides",
    items: [
      { eyebrow: "Sister guide", title: "Emergency vending in public shelters", description: "Free-vend capability, pre-positioning, and surge stocking at designated emergency shelters.", href: "/vending-for-public-buildings/emergency-vending-public-shelters" },
      { eyebrow: "Operations", title: "Can vending machines run 24/7?", description: "Operational reliability, refrigeration cycling, and continuous-operation requirements.", href: "/vending-faq/can-vending-machines-run-24-7" },
      { eyebrow: "Hub", title: "All vending FAQs", description: "Equipment, payment, contracts, installation, and operations questions for prospective hosts.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
