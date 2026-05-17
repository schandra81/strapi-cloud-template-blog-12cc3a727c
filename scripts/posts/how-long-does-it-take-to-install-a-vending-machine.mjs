import { seedPost, tldr, timeline, specList, tipCards, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("how-long-does-it-take-to-install-a-vending-machine", [
  tldr({
    heading: "How long does it take to install a vending machine?",
    paragraph:
      "Total install timeline from contract signing to operational machine: 2-6 weeks typical at most placements. Breakdown: 1-2 weeks for site survey + scheduling (operator install crew + electrician if upgrade needed), 1-2 weeks for electrical work (if 20A circuit upgrade required — most common timeline driver), 1 week for machine delivery + install (operator crew handles delivery + positioning + plug-in + telemetry verification + initial stock), 2-3 days for post-install verification + first restock. Specialty equipment (fresh food lockers, micro-markets, AI cooler walls) requires longer — 4-12 weeks total depending on infrastructure complexity (water + drainage for fresh food, larger floor space for micro-market, computer-vision platform setup for AI cooler wall). Government / federal placements add compliance review (PCI-DSS + Section 508 + Randolph-Sheppard verification) — 4-8 additional weeks typical. Verify timeline at proposal; operator should provide install plan at contract signing.",
    bullets: [
      { emphasis: "2-6 weeks typical at standard placements:",
        text: "Site survey + scheduling + electrical work + machine install + verification. Electrical upgrade typically the timeline driver." },
      { emphasis: "Specialty equipment 4-12 weeks:",
        text: "Fresh food lockers + micro-markets + AI cooler walls require longer due to infrastructure complexity (water + drainage + computer vision)." },
      { emphasis: "Government / federal placements 6-14 weeks:",
        text: "Compliance review (PCI-DSS + Section 508 + Randolph-Sheppard) adds 4-8 weeks. Verify timeline at proposal; build into operator contract." },
    ],
  }),
  timeline({
    heading: "Standard vending machine install timeline",
    sub: "End-to-end from contract signing to operational machine. Most placements complete in 2-6 weeks.",
    howToName: "Install a standard commercial vending machine",
    totalTime: "2-6 weeks typical",
    steps: [
      { title: "Contract signing + install scheduling", description: "Operator contract signed. Operator install crew scheduled. Electrician scheduled (if 20A circuit upgrade needed). Communication with facility manager on access + timing.", duration: "Days 1-3" },
      { title: "Site survey (if not already completed)", description: "Operator site survey — placement zones, electrical access, floor load, doorway clearance, cellular signal, telemetry connectivity. Document at install survey; identify any blockers.", duration: "Days 3-7" },
      { title: "Electrical work (if upgrade required)", description: "Most common timeline driver. Dedicated 20A circuit installation if 15A or no dedicated outlet at placement. GFCI installation if required by NEC. $150-$500 typical cost for short circuit run. Licensed electrician handles.", duration: "Days 7-14 (1-2 weeks)" },
      { title: "Machine delivery + positioning", description: "Operator install crew delivers machine. Positions at agreed placement. Anti-tipping anchoring if outdoor / exposed placement. Plug-in to dedicated 20A circuit. Verify telemetry connectivity. 1-2 hour install per machine typical.", duration: "Day 14-15 (1-2 hours)" },
      { title: "Initial stock + planogram verification", description: "Operator stocks initial planogram. Telemetry verifies stock counts. Payment hardware tested (EMV + contactless + mobile wallet). Signage installed (refund contact, allergen labeling, payment instructions).", duration: "Day 14-15 (additional 1 hour)" },
      { title: "Post-install verification + first restock", description: "Telemetry monitoring during first 7 days. Initial sales pattern analysis. First restock at 3-7 days typical (sooner if high-volume placement). First quarterly business review at 30-60 days.", duration: "Days 15-22" },
    ],
  }),
  specList({
    heading: "Vending install timeline specifications",
    items: [
      { label: "Standard placement (2-6 weeks total)", value: "1-2 weeks site survey + scheduling. 1-2 weeks electrical work (if 20A upgrade needed — most common timeline driver). 1 week machine delivery + install. 2-3 days post-install verification. Total 2-6 weeks from contract signing." },
      { label: "Specialty equipment (4-12 weeks)", value: "Fresh food lockers (need refrigeration verification). Micro-markets (250-500 sq ft floor space + open shelf + refrigerated cases + checkout kiosk install). AI cooler walls (computer-vision platform setup + sensor fusion calibration). Longer due to infrastructure complexity." },
      { label: "Government / federal placements (6-14 weeks)", value: "Standard timeline (2-6 weeks) + compliance review (PCI-DSS + Section 508 + Randolph-Sheppard / BEP coordination + FIPS verification where applicable + audit log retention setup). Additional 4-8 weeks for compliance verification + documentation." },
      { label: "Electrical upgrade timeline driver", value: "If placement lacks dedicated 20A circuit (most common blocker), electrical work adds 1-2 weeks. Licensed electrician + permit (where required) + circuit installation + GFCI installation + testing. $150-$500 typical cost; coordinate at install survey." },
      { label: "Cellular signal verification", value: "Telemetry requires cellular signal at placement. Remote / outdoor / industrial placements may need cellular booster ($200-$1,500) or satellite telemetry. Verify at install survey; budget for boosters where needed. Add 1-2 weeks for booster install if required." },
      { label: "Outdoor / construction site placements", value: "Outdoor-rated machine + anti-tipping anchoring + GFCI + weatherproof outlet. Site relocation logistics if construction site moves to next phase. Coordinate with GC at install survey. Standard 2-6 week timeline at active sites; longer at remote sites with cellular issues." },
      { label: "Post-install verification + telemetry monitoring", value: "First 7 days: telemetry monitors initial sales patterns, stockout signals, payment hardware functionality, refrigeration temperature stability. First restock at 3-7 days typical. First quarterly business review at 30-60 days." },
      { label: "Operator install crew + electrician coordination", value: "Operator install crew handles machine delivery + install. Electrician handles electrical work (if upgrade needed). Coordinate timing — electrical work first, then machine install. Operator account manager coordinates across crews. Build coordination into operator contract." },
      { label: "Communication with facility manager", value: "Facility manager coordinates electrical access + site access + after-hours timing (if applicable). Build into install schedule at contract signing. Modern operators provide install plan with timeline + responsibilities. Legacy operators don't structure communication.", },
    ],
  }),
  tipCards({
    heading: "Five vending install timeline mistakes",
    sub: "Each is documented in operator post-install reviews. All preventable with proper scheduling + coordination.",
    items: [
      { title: "Underestimating electrical upgrade timeline", body: "Most common blocker. If placement lacks dedicated 20A circuit, electrical work adds 1-2 weeks. Licensed electrician + permit + circuit installation. Schedule electrician at contract signing; don't wait for machine delivery to discover circuit issue." },
      { title: "Skipping site survey", body: "Site survey identifies blockers — electrical, floor load, doorway clearance, cellular signal, telemetry connectivity. Operators that deploy without site survey discover blockers at install + reschedule. Site survey at proposal-design stage prevents rescheduling." },
      { title: "Not verifying cellular signal", body: "Remote / outdoor / industrial placements may have weak cellular signal. Telemetry requires cellular connectivity. Operators that don't verify at install have dark machines at remote sites. Verify at install survey; budget for cellular booster where needed." },
      { title: "Underestimating government / federal timeline", body: "Standard 2-6 week timeline doesn't apply at federal / government placements. Compliance review (PCI-DSS + Section 508 + Randolph-Sheppard + FIPS + audit log retention) adds 4-8 weeks. Total 6-14 weeks; build into operator contract + government schedule." },
      { title: "No post-install verification", body: "First 7 days telemetry monitoring catches initial issues (payment hardware, refrigeration, stock patterns). Operators that don't monitor produce customer complaints + reactive service. Modern operators run automated monitoring; legacy operators don't.", },
    ],
  }),
  inlineCta({
    text: "Want the vending install timeline framework (standard + specialty + government + verification)?",
    buttonLabel: "Get the install timeline framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has overseen vending machine installations across office, school, campus, hospital, airport, warehouse, construction, retail, library, government, and clinic placements — coordinating with facilities, electricians, and operator install crews on timeline + compliance + verification. The benchmarks reflect operator-side install data.",
  }),
  tabbedFaq({
    faqs: [
      { question: "How long does it take to install a vending machine?", answer: "2-6 weeks typical at standard placements. Specialty equipment (fresh food lockers, micro-markets, AI cooler walls) 4-12 weeks. Government / federal placements 6-14 weeks (compliance review adds 4-8 weeks). Verify timeline at proposal; operator provides install plan at contract signing.", audience: "Property Managers" },
      { question: "What's the typical timeline driver?", answer: "Electrical work. Most placements lack dedicated 20A circuit; electrician install adds 1-2 weeks. Schedule electrician at contract signing; don't wait for machine delivery to discover circuit issue. $150-$500 typical cost for short circuit run.", audience: "Facilities" },
      { question: "How long does machine delivery + install take?", answer: "1-2 hours per machine typical. Operator install crew delivers + positions + anchors (if outdoor) + plugs in + verifies telemetry. Initial stock takes additional 1 hour. Payment hardware testing during install. Total install day 2-4 hours per machine.", audience: "Operators" },
      { question: "Are specialty equipment installs longer?", answer: "Yes. Fresh food lockers (refrigeration verification), micro-markets (250-500 sq ft floor space + open shelf + refrigerated cases + checkout kiosk), AI cooler walls (computer-vision platform setup + sensor fusion calibration). 4-12 weeks total depending on infrastructure.", audience: "Property Managers" },
      { question: "What about government placements?", answer: "Longer. Standard 2-6 week timeline + compliance review (PCI-DSS + Section 508 + Randolph-Sheppard / BEP coordination + FIPS verification + audit log retention setup) adds 4-8 weeks. Total 6-14 weeks. Build into operator contract; verify timeline at proposal.", audience: "Federal Procurement" },
      { question: "What if our placement has weak cellular signal?", answer: "Cellular booster ($200-$1,500) extends coverage. Satellite telemetry at sites without cellular. Verify at install survey; budget for boosters where needed. Add 1-2 weeks for booster install if required. Don't deploy without verifying telemetry connectivity.", audience: "Operators" },
      { question: "When does the first restock happen?", answer: "3-7 days post-install typical. Sooner at high-volume placements with rapid initial sales. Telemetry-driven prioritization. First quarterly business review at 30-60 days post-install with operator account manager.", audience: "Property Managers" },
      { question: "Do we need to be there during install?", answer: "Site access + electrical coordination required. Facility manager + operator install crew coordinate timing. Some placements need facility staff present for security check-in + access. Build into install plan at contract signing.", audience: "Facilities" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "NEC — National Electrical Code (NFPA 70)", url: "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70", note: "Federal electrical code governing commercial outlet + GFCI requirements" },
      { label: "NAMA — vending equipment install standards", url: "https://www.namanow.org/", note: "Industry guidance on vending installation timeline + process" },
      { label: "Section 508 — federal accessibility standard", url: "https://www.section508.gov/", note: "Federal procurement accessibility compliance framework underlying government install timeline" },
      { label: "PCI Security Standards Council — payment install requirements", url: "https://www.pcisecuritystandards.org/", note: "Payment security standards underlying install + verification timeline" },
      { label: "FCC — cellular coverage data", url: "https://www.fcc.gov/", note: "Federal cellular coverage data relevant to telemetry connectivity verification" },
    ],
  }),
  relatedGuides({
    heading: "Related install + operations guides",
    items: [
      { eyebrow: "Sister guide", title: "How are vending machines installed?", description: "End-to-end installation process — site survey, electrical, delivery, setup, verification.", href: "/vending-faq/how-are-vending-machines-installed" },
      { eyebrow: "Operations", title: "Do vending machines need WiFi or power?", description: "Power + connectivity infrastructure requirements at install.", href: "/vending-Info-for-businesses/do-vending-machines-need-wifi-or-power" },
      { eyebrow: "Hub", title: "All vending business resources", description: "Install timeline, infrastructure, performance measurement, operator selection.", href: "/vending-Info-for-businesses" },
    ],
  }),
]);
process.exit(0);
