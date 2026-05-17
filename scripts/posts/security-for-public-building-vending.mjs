import { seedPost, tldr, statStrip, comparisonTable, specList, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("security-for-public-building-vending", [
  tldr({
    heading: "What security controls do public-building vending machines require — and how do federal, state, and municipal frameworks shape the spec?",
    paragraph:
      "Public-building vending security overlays five distinct threat surfaces: (1) physical security (cabinet construction, anti-pry hardware, anchor / floor-bolt, anti-jiggle locks, tamper-evident seals); (2) cash security (where cash accepted — bill validator with stacker, drop-safe interface, twice-weekly cash pickup with armored service or two-person rule at federal placements); (3) payment-card security (PCI-DSS 4.0 compliance for any card reader, EMV chip + contactless mandatory, P2PE encryption preferred, no card data retained on machine); (4) cyber security (network isolation from building infrastructure, VLAN segmentation, firewall rules limiting outbound telemetry endpoints, no inbound management ports, vendor SOC 2 Type II attestation); (5) personnel security (operator employee background checks, badging for restricted areas, CCTV-covered service routes, two-person rule at SCIF / cleared facilities). Public-sector procurement adds five governance overlays: GSA Multiple Award Schedule compliance, FedRAMP for any cloud-managed payment processor, FIPS 140-2 cryptography for any federal placement, ADA 308 accessibility (which intersects security — vending must be accessible without compromising tamper-resistance), CDC Continuity of Operations Plan integration (vending machines as supplemental food access during emergency). Modern public-sector operators carry security infrastructure as core capability; legacy operators don't. RFPs spec PCI-DSS + SOC 2 + FedRAMP minimums and scoring rubrics weight security capability 20-35%. At federal placements, expect facility security officer (FSO) to review vending security plan annually. At SCIF-adjacent placements, vending often excluded or strictly controlled.",
    bullets: [
      { emphasis: "Five threat surfaces:", text: "Physical + cash + payment-card + cyber + personnel. Modern operators address all five; legacy operators address only physical + cash." },
      { emphasis: "Public-sector governance overlays:", text: "GSA + FedRAMP + FIPS 140-2 + ADA 308 + CDC COOP. Procurement weights security capability 20-35% of RFP score." },
      { emphasis: "FSO annual review at federal placements:", text: "Facility security officer reviews vending security plan annually. SCIF-adjacent placements often exclude or strictly control vending." },
    ],
  }),
  statStrip({
    heading: "Public-building vending security benchmarks",
    stats: [
      { number: "5 threats", label: "physical + cash + card + cyber + personnel", sub: "modern security stack", accent: "blue" },
      { number: "20-35%", label: "RFP scoring weight", sub: "for security capability", accent: "amber" },
      { number: "PCI 4.0", label: "DSS compliance floor", sub: "any card reader", accent: "blue" },
      { number: "Annual", label: "FSO security plan review", sub: "federal placements", accent: "blue" },
    ],
  }),
  comparisonTable({
    heading: "Modern vs legacy public-sector vending security",
    sub: "Modern public-sector operators carry full security infrastructure; legacy operators address only physical + cash baseline.",
    headers: ["Layer", "Modern public-sector", "Legacy"],
    rows: [
      ["Physical security", "ASTM F3038 anti-pry, floor-bolt, tamper seals", "Standard commercial cabinet"],
      ["Cash security", "Drop-safe, armored pickup, two-person rule", "Cash-box, single-driver pickup"],
      ["Payment card", "PCI-DSS 4.0 + EMV + contactless + P2PE encryption", "Magstripe or none"],
      ["Cyber", "VLAN isolated, no inbound ports, SOC 2 Type II", "Often unsegmented, no attestation"],
      ["Personnel", "Background checks, badging, CCTV-covered routes", "Limited vetting"],
      ["GSA Schedule", "MAS listed for federal procurement", "Not on MAS"],
      ["FedRAMP", "Cloud payment processor FedRAMP authorized", "Not FedRAMP"],
      ["FIPS 140-2", "Validated cryptography in card reader", "Not FIPS"],
      ["FSO security plan", "Annual review + tabletop", "Not provided"],
    ],
  }),
  specList({
    heading: "Public-building vending security specifications",
    items: [
      { label: "Physical cabinet security", value: "ASTM F3038 anti-pry construction; floor-bolt anchor (especially at vestibule + lobby placements); anti-jiggle locks; tamper-evident seals on access points; CCTV coverage with 30-day retention minimum. Spec at procurement; modern operators supply." },
      { label: "Cash handling protocol", value: "Drop-safe interface (operator can deposit but not retrieve without two-person key + safe key combination); armored service pickup or two-person rule at federal + restricted facilities; twice-weekly pickup max to limit on-machine cash exposure; cash-handling log per pickup." },
      { label: "PCI-DSS 4.0 compliance for card readers", value: "Any card reader must meet PCI-DSS 4.0 minimum; EMV chip + contactless (NFC) mandatory; P2PE (point-to-point encryption) preferred. No cardholder data retained on machine. Operator attests + provides Attestation of Compliance (AOC) document annually." },
      { label: "Cyber security + network isolation", value: "Vending machines on isolated VLAN; firewall rules permit only specific outbound endpoints (telemetry + payment processor); no inbound management ports; vendor SOC 2 Type II attestation; quarterly vulnerability scanning. Modern public-sector operators carry full stack." },
      { label: "Personnel security + background checks", value: "Operator employee background checks (criminal + employment verification); badging for restricted-area access; CCTV-covered service routes; two-person rule for SCIF-adjacent placements. Operator HR maintains documentation; provides to FSO on request." },
      { label: "GSA Multiple Award Schedule compliance", value: "Federal placements typically require operator be GSA Schedule contract holder (MAS). Verifies pricing, security, performance standards. Operator submits MAS contract number at procurement." },
      { label: "FedRAMP for cloud payment processors", value: "Any cloud-hosted payment + telemetry platform must be FedRAMP authorized for federal placements. Verify operator's payment processor + telemetry vendor FedRAMP status. Modern operators use FedRAMP-authorized providers." },
      { label: "FIPS 140-2 cryptography", value: "Card reader cryptography must be FIPS 140-2 validated for federal placements. Verify at procurement; operator provides FIPS validation certificate. Required at most federal + cleared facilities." },
      { label: "ADA 308 accessibility intersection", value: "ADA 308 reach range (15-48 inches) + clear floor space + operable parts under 5 lbf. Tamper-resistance must accommodate accessibility (anti-pry hardware can't obstruct accessibility). Modern operators balance; legacy operators may compromise." },
      { label: "CDC COOP integration", value: "Continuity of Operations Plan: vending machines often designated supplemental food access during facility lockdown / emergency. Coordinate with FSO + emergency manager at install on backup power + restock surge + cash-handling continuity." },
    ],
  }),
  tipCards({
    heading: "Five public-building vending security mistakes",
    sub: "Each produces compliance failure + federal RFP loss + security incident risk. All preventable with modern operator + governance.",
    items: [
      { title: "Magstripe-only card reader (no EMV / contactless)", body: "PCI-DSS 4.0 requires EMV + contactless at minimum. Magstripe-only readers fail PCI compliance + create cardholder data exposure. Spec EMV + contactless + P2PE at procurement; verify operator's AOC annually." },
      { title: "Unsegmented vending network", body: "Vending machines on building general network create attack surface for lateral movement. Isolate on dedicated VLAN; firewall rules permit only telemetry + payment endpoints. Modern public-sector operators support; legacy operators don't." },
      { title: "No FSO security plan review", body: "Federal placements require facility security officer annual review of vending security plan. Operator without security plan template can't pass FSO review. Spec at procurement; modern operators provide." },
      { title: "Operator employees not badged for restricted areas", body: "Service routes through restricted areas require badged operator employees + escort protocol. Operator without badging discipline can't service federal placements. Verify HR maintains badging across workforce." },
      { title: "No FedRAMP for cloud payment / telemetry", body: "Federal placements require FedRAMP authorized cloud services for payment + telemetry. Operator's vendors must be FedRAMP authorized; verify at procurement. Modern operators use FedRAMP providers; legacy may not." },
    ],
  }),
  decisionTree({
    heading: "Public-building vending security decision",
    question: "Does your operator demonstrate full 5-layer security (physical + cash + card PCI 4.0 + cyber SOC 2 + personnel) and public-sector governance (GSA + FedRAMP + FIPS + FSO plan)?",
    yesBranch: {
      title: "Yes — modern operator passes security review",
      description: "Operator can serve federal, state, and municipal placements. Schedule FSO annual review at install; coordinate CDC COOP integration with emergency manager. Track PCI AOC + SOC 2 reports + FedRAMP status annually.",
      finalTone: "go",
      finalLabel: "Continue + FSO review",
    },
    noBranch: {
      title: "No — RFP security-capable operator",
      description: "Legacy operator without modern security infrastructure can't credibly serve federal + restricted placements. RFP modern public-sector operators (Compass Canteen Public Sector, Aramark Federal, USConnect Government Division). Build security scoring rubric into evaluation.",
      finalTone: "stop",
      finalLabel: "RFP security-capable",
    },
  }),
  inlineCta({
    text: "Want the public-building vending security framework (5-layer + governance)?",
    buttonLabel: "Get the security framework",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac is equipped to advise public-building vending hosts on multi-layer vending security (physical + cash + payment + cyber + personnel), public-sector governance frameworks (GSA + FedRAMP + FIPS 140-2 + FSO coordination), and security RFP scoring rubric design. Benchmarks reflect federal procurement standards and operator-side security infrastructure data.",
  }),
  tabbedFaq({
    faqs: [
      { question: "What's the PCI-DSS requirement for vending card readers?", answer: "PCI-DSS 4.0 floor. EMV chip + contactless (NFC) mandatory. P2PE preferred. No cardholder data retained on machine. Operator provides Attestation of Compliance (AOC) annually.", audience: "Security Officers" },
      { question: "Do federal placements require GSA Schedule?", answer: "Yes typically. Federal placements expect operator be GSA Multiple Award Schedule contract holder. Verifies pricing, security, performance standards. Verify MAS contract number at procurement.", audience: "Federal Procurement" },
      { question: "What's FedRAMP and do we need it?", answer: "FedRAMP = Federal Risk and Authorization Management Program. Required for cloud services serving federal placements. Operator's payment processor + telemetry vendor must be FedRAMP authorized.", audience: "Federal IT / Security" },
      { question: "What's the SCIF-adjacent vending policy?", answer: "SCIF (Sensitive Compartmented Information Facility) adjacent placements often exclude vending or strictly control. Coordinate with FSO at install; vending typically not permitted inside SCIF; vestibule placements possible with two-person rule.", audience: "Federal Security" },
      { question: "How do we handle cash at federal placements?", answer: "Drop-safe interface (operator deposits but can't retrieve without two-person key); armored pickup or two-person rule; twice-weekly maximum; cash-handling log. Many federal placements now move to cashless-only to eliminate cash handling.", audience: "Federal Operations" },
      { question: "Do operators need to be on a VLAN?", answer: "Yes at federal + most state placements. Vending machines on isolated VLAN with firewall rules permitting only telemetry + payment endpoints. No inbound management ports. Modern public-sector operators support.", audience: "IT Security" },
      { question: "What about FIPS 140-2?", answer: "FIPS 140-2 cryptography validation required for federal card readers. Operator provides FIPS validation certificate. Most modern public-sector operators meet; verify at procurement.", audience: "Federal Security" },
      { question: "Do we need ADA 308 + security balance?", answer: "Yes. ADA 308 reach range + clear floor space + operable parts under 5 lbf. Tamper-resistance must accommodate accessibility. Modern operators design balanced; legacy may compromise one or the other.", audience: "Accessibility / Security" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "PCI Security Standards Council — PCI DSS 4.0", url: "https://www.pcisecuritystandards.org/", note: "Payment Card Industry Data Security Standard governing vending card reader compliance" },
      { label: "GSA Multiple Award Schedule", url: "https://www.gsa.gov/buy-through-us/purchasing-programs/multiple-award-schedule", note: "Federal procurement schedule covering public-sector vending operator pricing + standards" },
      { label: "FedRAMP — Federal Risk and Authorization Management Program", url: "https://www.fedramp.gov/", note: "Federal cloud services authorization required for vending payment + telemetry platforms" },
      { label: "NIST FIPS 140-2 / FIPS 140-3 cryptographic validation", url: "https://csrc.nist.gov/projects/cryptographic-module-validation-program", note: "Federal cryptography validation standard covering vending card readers" },
      { label: "ADA.gov — Title III + Section 308 accessibility standards", url: "https://www.ada.gov/topics/title-iii/", note: "Federal accessibility requirements covering public-building vending placements" },
    ],
  }),
  relatedGuides({
    heading: "Related public-building vending security guides",
    items: [
      { eyebrow: "Sister guide", title: "Vending services for government buildings and offices", description: "Public-sector vending procurement, governance, and operator capability framework.", href: "/vending-for-public-buildings/vending-services-for-government-buildings-and-offices" },
      { eyebrow: "Operations", title: "Procurement of vending services for government", description: "RFP scoring rubric design, security evaluation, and operator capability assessment.", href: "/vending-for-public-buildings/procurement-of-vending-services-for-government" },
      { eyebrow: "Hub", title: "All public building vending guides", description: "Placement, compliance, procurement, accessibility, and security for civic spaces.", href: "/vending-for-public-buildings" },
    ],
  }),
]);
process.exit(0);
