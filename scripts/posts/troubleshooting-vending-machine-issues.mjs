import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("troubleshooting-vending-machine-issues", [
  tldr({
    heading: "How do operators troubleshoot common vending machine issues?",
    paragraph:
      "Vending machine troubleshooting falls into five issue categories with different root causes and resolution paths: (1) mechanical (jams, stuck product, motor faults — most common, usually resolved within route stop), (2) refrigeration (temperature excursions, compressor faults, condensate drain issues — often telemetry-detected before customer impact), (3) payment hardware (EMV reader failures, contactless issues, cellular connectivity drops — operator dashboard alerts), (4) electrical / power (breaker trips, surge events, GFCI nuisance trips — facility coordination), (5) telemetry / connectivity (cellular drops, Wi-Fi outages, board fault — operator SOC). Best-in-class operators run telemetry-driven proactive troubleshooting (anomaly detection catches issues before customer impact). Worst-in-class operators react to customer complaints days after issue. Modern troubleshooting workflow: anomaly detected via telemetry → operator SOC triages → service ticket created → driver dispatched → resolution within 24-48 hours for non-parts issues. Operators with on-truck parts inventory matched to fleet model mix resolve mechanical and payment hardware issues same-day or next-day.",
    bullets: [
      { emphasis: "Five issue categories:", text: "Mechanical, refrigeration, payment hardware, electrical/power, telemetry/connectivity. Each has distinct root causes and resolution paths." },
      { emphasis: "Telemetry-driven proactive troubleshooting:", text: "Anomaly detection catches issues before customer impact. Modern standard; legacy operators react after customer complaints." },
      { emphasis: "On-truck parts inventory matters:", text: "Operators with on-truck parts resolve mechanical and payment hardware issues same-day. Operators with parts only at warehouse produce 3-7 day delays." },
    ],
  }),
  statStrip({
    heading: "Vending troubleshooting benchmarks",
    stats: [
      { number: "5 categories", label: "issue types", sub: "mechanical, refrigeration, payment, electrical, telemetry", accent: "blue" },
      { number: "24-48 hr", label: "best-in-class resolution", sub: "non-parts issues", accent: "blue" },
      { number: "Same-day", label: "on-truck parts", sub: "common parts on driver truck", accent: "blue" },
      { number: "Telemetry-driven", label: "proactive detection", sub: "before customer impact", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Vending issue categories — root causes + resolution",
    sub: "Five issue categories with distinct root causes and resolution paths. Operator should run structured workflow for each.",
    headers: ["Category", "Common root causes", "Detection method", "Typical resolution time"],
    rows: [
      ["Mechanical (jams, motors)", "Wear, foreign objects, motor fault", "Telemetry failed-vend alert or customer complaint", "Same-day with on-truck parts"],
      ["Refrigeration", "Compressor fouling, refrigerant leak, drain blockage", "Telemetry temperature excursion", "1-3 days; longer with refrigerant"],
      ["Payment hardware", "EMV reader, contactless antenna, cellular board", "Operator dashboard alert", "Same-day or next-day"],
      ["Electrical / power", "Breaker trip, surge, GFCI nuisance trip", "Telemetry connectivity loss", "1-2 days; facility coordination"],
      ["Telemetry / connectivity", "Cellular drop, Wi-Fi outage, board fault", "Operator SOC monitoring", "Hours to 1 day"],
      ["Software / firmware", "Firmware bug, payment processor issue", "Telemetry transaction failures", "Hours via remote update"],
      ["Vandalism / tamper", "External damage, theft attempt", "CCTV review, customer report", "Same-day for safety; days for repair"],
      ["Product / planogram", "Wrong SKU, mis-spaced, sold out", "Customer complaint or telemetry sales pattern", "Same-day at next route stop"],
    ],
  }),
  specList({
    heading: "Vending troubleshooting workflow specifications",
    items: [
      { label: "Telemetry-driven detection", value: "Real-time anomaly detection on failed-vend patterns, temperature excursions, payment hardware errors, connectivity drops. Operator SOC monitors dashboard. Catches most issues before customer impact. Modern standard." },
      { label: "Service ticket workflow", value: "Anomaly detected → operator SOC triages → service ticket created → driver dispatched. Ticket includes machine ID, fault type, suggested parts. Driver workflow includes troubleshooting guide for common issues. Modern operators run CMMS-tracked workflow." },
      { label: "On-truck parts inventory", value: "Common parts on service truck: helical coils, motors, payment hardware components, refrigeration sensor probes. Specialty parts (compressor, board) 5-7 day lead time. Matched to fleet model mix. Modern operators have this; legacy operators don't." },
      { label: "Mechanical troubleshooting", value: "Jams: clear product, inspect coil for damage, check motor function. Stuck product: helical coil inspection + product placement verification. Motor faults: replace motor (typically on truck). Resolution typically same-day or next-day." },
      { label: "Refrigeration troubleshooting", value: "Temperature excursion: check refrigerant level, compressor function, condensate drain. Compressor fault: refrigerant replacement + leak repair (HVAC-certified). Drain blockage: clear drain, verify drainage path. Coordinate with HVAC for refrigerant work." },
      { label: "Payment hardware troubleshooting", value: "EMV reader: test card, reset, replace if hardware failed. Contactless antenna: test mobile wallet, replace if NFC failed. Cellular board: test connectivity, reset, replace if board failed. On-truck spare boards reduce resolution time." },
      { label: "Electrical / power troubleshooting", value: "Breaker trip: identify shared circuit load, recommend dedicated circuit. GFCI nuisance trip: verify GFCI-compatible electronics, may require GFCI replacement. Surge damage: replace affected components, install surge protection. Coordinate with facility electrician." },
      { label: "Telemetry / connectivity troubleshooting", value: "Cellular drop: signal strength check, antenna repositioning, cellular booster install. Wi-Fi outage: facility network coordination. Board fault: reset, firmware update, replace if board failed. Operator SOC handles remotely where possible." },
      { label: "Customer-facing communication", value: "When issues identified, operator notifies host site contact + posts 'Out of service' message on machine. Refund processing for failed-vend transactions via auto-refund or customer-initiated workflow. Visible service contact on machine reduces customer frustration.", },
    ],
  }),
  tipCards({
    heading: "Five troubleshooting workflow mistakes",
    sub: "Each is documented in operator post-incident reviews. All preventable with structured troubleshooting workflow.",
    items: [
      { title: "Reactive troubleshooting without telemetry", body: "Operators that wait for customer complaints to detect issues react days after problems start. Telemetry-driven proactive detection catches most issues before customer impact. Modern operators run anomaly detection on telemetry; legacy operators don't." },
      { title: "No on-truck parts inventory", body: "Operators with parts only at warehouse produce 3-7 day resolution for common parts issues. On-truck parts matched to fleet model mix reduces to same-day or next-day. Build into operator service contract." },
      { title: "Missing GFCI nuisance-trip diagnosis", body: "GFCI outlets in required occupancies (kitchens, bathrooms, outdoor) sometimes nuisance-trip on compressor inrush. Misdiagnosed as compressor fault. Verify GFCI-compatible electronics; may require GFCI replacement. Common at apartment, hospital, outdoor placements." },
      { title: "No customer-facing communication during issues", body: "Customers approaching out-of-service machines without indicator try transactions, get frustrated. Operator should post 'Out of service' message; visible service contact for refunds. Reduces customer complaints; preserves trust." },
      { title: "Skipping CMMS-tracked workflow", body: "Operators without CMMS-tracked troubleshooting workflow miss patterns. Recurring issues indicate underlying problems (placement, equipment age, environmental factor). CMMS data identifies; corrective action prevents repeat. Modern operators run this; legacy operators don't.", },
    ],
  }),
  inlineCta({
    text: "Want the vending troubleshooting framework (telemetry, on-truck parts, structured workflow)?",
    buttonLabel: "Get the troubleshooting framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has supported vending troubleshooting workflow design across office, school, campus, hospital, airport, warehouse, and construction-site placements — including telemetry-driven anomaly detection, on-truck parts inventory planning, and CMMS workflow integration. The benchmarks reflect operator-side data from current accounts.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How do operators troubleshoot common vending issues?", answer: "Five issue categories: mechanical (jams, motors), refrigeration (temperature, compressor), payment hardware (EMV, contactless, cellular), electrical / power (breaker, surge, GFCI), telemetry / connectivity (cellular, Wi-Fi, board). Telemetry-driven detection + structured workflow + on-truck parts + CMMS tracking is modern standard.", audience: "Property Managers" },
      { question: "What's the typical resolution time?", answer: "24-48 hours for non-parts issues at best-in-class operators. Same-day for issues resolved with on-truck parts (mechanical, payment hardware). 5-7 days with back-order parts (specialty refrigeration). Build resolution SLA into operator contract.", audience: "Property Managers" },
      { question: "How does telemetry help troubleshooting?", answer: "Real-time anomaly detection on failed-vend patterns, temperature excursions, payment hardware errors, connectivity drops. Catches most issues before customer impact. Operator SOC monitors dashboard. Modern standard; legacy operators react after customer complaints.", audience: "Operators" },
      { question: "What parts should operators have on-truck?", answer: "Helical coils, motors, payment hardware components, refrigeration sensor probes. Specialty parts (compressor, telemetry board) 5-7 day lead time. Matched to fleet model mix. On-truck inventory reduces resolution time substantially.", audience: "Operators" },
      { question: "What if my machine has a refrigeration issue?", answer: "Operator detects via telemetry temperature excursion alert. Service dispatched. Check refrigerant level, compressor, condensate drain. HVAC-certified technician for refrigerant work. Resolution 1-3 days typical; longer with refrigerant or compressor replacement.", audience: "Property Managers" },
      { question: "What about payment hardware issues?", answer: "Operator dashboard alerts on EMV reader / contactless / cellular failures. Reset, firmware update, or hardware replacement. On-truck spare boards reduce resolution time. Cashless payment failures particularly visible to customers; prioritize.", audience: "Operators" },
      { question: "What's the customer-facing experience during issues?", answer: "Operator posts 'Out of service' message on machine. Visible service contact (phone, QR, email) for refunds. Auto-refund where telemetry confirms failed vend. Don't leave customers without communication path — produces frustration and reputation damage.", audience: "Customers" },
      { question: "How do we know if our operator is good at troubleshooting?", answer: "Verify at proposal: telemetry coverage, on-truck parts inventory, service SLA (24-48 hour ack + resolution), CMMS workflow. Reference checks at peer customers. 'Would you renew?' is most telling question. Best-in-class operators have all four; worst-in-class have none.", audience: "Procurement" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NAMA — vending troubleshooting best practices", url: "https://www.namanow.org/", note: "Industry guidance on vending troubleshooting and operator workflow" },
      { label: "AHRI — refrigeration troubleshooting standards", url: "https://www.ahrinet.org/", note: "Industry standards covering refrigeration troubleshooting" },
      { label: "PCI Security Standards Council — payment troubleshooting", url: "https://www.pcisecuritystandards.org/", note: "Payment security standards relevant to payment hardware troubleshooting" },
      { label: "Cantaloupe / Nayax / USConnect — telemetry-driven troubleshooting", url: "https://www.cantaloupe.com/", note: "Telemetry platforms enabling proactive fault detection and troubleshooting" },
      { label: "Vending Times — operator troubleshooting coverage", url: "https://www.vendingtimes.com/", note: "Trade publication covering operator service workflow" },
    ],
  }),
  relatedGuides({
    heading: "Related FAQ and operations guides",
    items: [
      { eyebrow: "Sister guide", title: "How do vending machine refunds work?", description: "Refund mechanics across cashless, cash, and telemetry-driven scenarios.", href: "/vending-faq/how-do-vending-machine-refunds-work" },
      { eyebrow: "Operations", title: "University vending maintenance guide", description: "Preventive maintenance, service SLA, telemetry-driven fault detection.", href: "/ai-vending-coolers/university-vending-maintenance-guide" },
      { eyebrow: "Hub", title: "All vending FAQs", description: "Equipment, payment, contracts, installation, and operations questions for prospective hosts.", href: "/vending-faq" },
    ],
  }),
]);
process.exit(0);
