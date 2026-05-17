import { seedPost, tldr, statStrip, specList, comparisonTable, tipCards, decisionTree, inlineCta, authorCard, tabbedFaq, sourceCitations, relatedGuides } from "../_seed-helper.mjs";

await seedPost("accessible-campus-vending-features", [
  tldr({
    heading: "What does ADA-compliant campus vending actually require?",
    paragraph:
      "ADA compliance for campus vending machines hinges on three measurable rules: payment readers and selection controls must sit between 15\" and 48\" from the floor, the approach path must be at least 36\" wide and clear of obstructions, and every operable part must work with one hand without tight grasping, pinching, or twisting. Modern machines from AMS, Crane National, Royal, and Vendo ship compliant out of the box — but the install location decides whether the deployment stays compliant. Alcoves under 36\" wide, mounting heights above 48\", and step-up thresholds in the approach path are the three failure modes that show up in every campus accessibility audit.",
    bullets: [
      { emphasis: "Reach range:", text: "15\"–48\" from finished floor to highest operable part (card reader, top selection button). Above 48\" is automatic non-compliance." },
      { emphasis: "Approach clearance:", text: "36\" minimum width along the path and 30\" × 48\" parallel approach space in front of the machine for wheelchair access." },
      { emphasis: "Operable parts:", text: "Selection, payment, and door operation must be usable with one closed fist — no twisting, no pinch grip, ≤5 lbf force." },
    ],
  }),
  statStrip({
    heading: "The four ADA numbers every facilities team should memorize",
    stats: [
      { number: "15–48 in", label: "operable parts reach range", sub: "ADA Std. 308.2.1", accent: "blue" },
      { number: "36 in", label: "minimum approach width", sub: "ADA Std. 403.5.1", accent: "orange" },
      { number: "5 lbf", label: "max operating force", sub: "one-handed, no twist", accent: "orange" },
      { number: "30 × 48 in", label: "clear floor space", sub: "for parallel approach", accent: "blue" },
    ],
  }),
  specList({
    heading: "ADA site checks for every campus vending placement",
    items: [
      { label: "Approach path width", value: "Continuous ≥36\" from the nearest accessible route (corridor, lobby) to the front of the machine. Narrowing to 32\" at a doorway is OK if the machine isn't directly behind it." },
      { label: "Clear floor space at the machine", value: "30\" × 48\" of unobstructed floor in front of the machine. Carpet, mats, and trash cans in this zone count as obstructions." },
      { label: "Highest operable part", value: "Card reader, top selection button, or coin slot — whichever is highest — must measure ≤48\" from finished floor. Tape-measure during install, not from spec sheet." },
      { label: "Lowest operable part", value: "Coin return, delivery bin lip, or lowest selection must be ≥15\" from floor. Bins below 15\" force users to reach down past comfortable seated range." },
      { label: "Operating force", value: "Test the door, coin return, and bin door — each should release with ≤5 lbf. Old gas-strut doors that lost pressure exceed this and need replacement." },
      { label: "Side reach vs forward reach", value: "If the machine is in a corner where users must approach from the side, the reach range narrows to 15\"–48\" (same) but max forward reach over an obstruction can't exceed 10\". Audit alcove dimensions before install." },
      { label: "Floor-surface slope", value: "≤1:48 (2%) cross-slope at the clear floor space. Drainage slopes in service corridors often exceed this and put adjacent machines out of compliance." },
      { label: "Detectable warning", value: "Front edge of any platform or step within 6\" of the machine needs ADA-compliant truncated-dome warning surface. Rare on campus but required at loading-dock-adjacent placements." },
    ],
  }),
  comparisonTable({
    heading: "Physical accessibility vs digital accessibility — both required",
    sub: "ADA Title II + ADA Title III for higher education cover physical access to equipment AND digital access through interfaces. Universities should require both in vending RFPs.",
    headers: ["Capability", "Physical (mandatory)", "Digital (best practice, increasingly mandatory)"],
    rows: [
      ["Reach range", "15\"–48\" operable parts", "On-screen UI elements navigable with screen reader"],
      ["One-hand operation", "≤5 lbf, no twist or pinch", "App-based selection with one-touch confirm"],
      ["Vision impairment", "Tactile buttons with raised numerals or Braille", "Audio readback via smartphone app, high-contrast display mode"],
      ["Hearing impairment", "Visual transaction confirmation lights", "On-screen visual receipts, no audio-only confirmations"],
      ["Cognitive accessibility", "Clear pictogram product labels", "Simple-language menus, predictable transaction flow"],
      ["Payment access", "EMV chip + contactless (works with assistive devices)", "Apple/Google Wallet, contactless cards, NFC fobs"],
    ],
  }),
  tipCards({
    heading: "Four audit failures we see at almost every campus we survey",
    sub: "Each fail is fixable during install — and expensive after. Have your operator's project manager verify these on the punch list before sign-off.",
    items: [
      { title: "Card reader installed at 50\"", body: "Most readers ship with adhesive backing and get mounted at eye level out of habit. ADA cap is 48\". A $30 reader relocation during install becomes a $300 callback after audit." },
      { title: "Alcove width measured to drywall, not to obstruction", body: "Alcove looks 38\" on the architectural drawing but a wall-mounted fire extinguisher box protrudes 4\". Net clearance: 34\". Out of compliance. Measure to the actual obstruction, not the wall." },
      { title: "Threshold strip at the alcove entry", body: "Tile-to-carpet transition strips routinely exceed the 1/4\" max threshold. Replace with a flush ADA transition strip — $40 per strip, prevents 100% of approach-path complaints." },
      { title: "Coffee/water station next to the machine", body: "Coffee carts and water dispensers reduce the 30\"×48\" clear floor space and create a slip-hazard during refills. Move the station ≥48\" away or relocate the vending machine." },
    ],
  }),
  decisionTree({
    heading: "Should we retrofit our existing fleet or wait for the next refresh cycle?",
    question: "Is any machine in the fleet older than 2017 OR installed before the ADA 2010 Standards effective date (March 15, 2012)?",
    yesBranch: {
      title: "Audit and retrofit now — don't wait.",
      description: "Pre-2017 equipment often has card readers retrofitted above 48\", and pre-2012 installs predate the current standards entirely. Run a fleet-wide ADA audit ($75–150/machine through your operator), then prioritize retrofits during the next service visit.",
      finalTone: "stop",
      finalLabel: "AUDIT FIRST · RETROFIT NEXT VISIT",
    },
    noBranch: {
      title: "Add ADA review to your refresh-cycle SOW.",
      description: "Modern equipment is compliant out of the box. The risk is install placement, not equipment design. Make ADA placement review a required line item in every refresh-cycle and new-install service order — operator carries the verification cost.",
      finalTone: "go",
      finalLabel: "BAKE INTO REFRESH SOW",
    },
  }),
  inlineCta({
    text: "Want the 28-point ADA campus vending audit checklist as a PDF you can hand to your operator?",
    buttonLabel: "Download the ADA audit checklist",
    buttonHref: "/#get-machine",
  }),
  authorCard({
    bio: "Bobby Mac has spent twelve years deploying and auditing vending equipment for higher-ed accounts. ADA reach numbers in this guide were cross-checked against the 2010 ADA Standards (28 CFR Part 35), the US Access Board's vending-machine technical assistance, and the 2024 NAMA accessibility briefing.",
  }),
  tabbedFaq({
    faqs: [
      { question: "Does the ADA apply to vending machines on private college campuses?", answer: "Yes. Private colleges that receive federal financial assistance (almost all do) are covered under Section 504 of the Rehabilitation Act, and most are also Title III public accommodations under the ADA. Vending machines accessible to students, staff, and visitors fall under both. State accessibility codes (e.g., California's CBC 11B) often impose stricter rules — confirm your state's requirements with campus legal.", audience: "Facilities" },
      { question: "What's the maximum height for the payment card reader?", answer: "48 inches from the finished floor to the highest operable part of the reader. This is the same cap as selection buttons. If the reader is on the side of the machine (less common), the side-reach rule still applies at 48\" max, with no protrusion exceeding 4\" from the surface plane.", audience: "Facilities" },
      { question: "Do we need to provide tactile or Braille labels on every machine?", answer: "Not explicitly required by the 2010 ADA Standards for vending equipment specifically — but tactile selection (raised numerals) is a documented best practice and is required if the machine serves as the primary food access point in a residence hall or after-hours building. Major manufacturers offer tactile keypads as a $40–80 add-on; specify in the RFP rather than retrofitting after install.", audience: "Facilities" },
      { question: "How often should we re-audit installed machines?", answer: "Annually at minimum. Higher-traffic locations (student union, library, residence hall lobbies) should be re-audited every six months. Floor wear, replacement fire extinguishers, added signage, and tenant-installed kiosks routinely shift the clear-floor-space envelope and create new obstructions in the approach path.", audience: "Facilities" },
      { question: "Can audio interfaces through a phone app satisfy accessibility for blind students?", answer: "They satisfy a layer, not the requirement. Physical tactile selection is still the baseline standard because not every blind user has a smartphone with the operator's app installed. The strongest accessibility programs combine both — tactile keypads (works without a phone) plus app-based audio confirmation (works for users who prefer it).", audience: "Students" },
      { question: "Where do I report a vending machine I can't physically reach?", answer: "Your campus disability services office is the right first stop — they coordinate with facilities and the operator and have a written process for accessibility complaints. Most campuses respond within 5 business days; placement issues are typically fixed within one service-route cycle (1–2 weeks).", audience: "Students" },
      { question: "Are there allergen-safe vending options for students with food allergies?", answer: "Yes — most operators on campus accounts can run a curated planogram with documented allergen-free SKUs (top-9 allergen exclusions). Coordinate with your operator's account manager and campus disability services; commonly stocked allergen-safe items include rice crackers, fruit cups, hard-boiled eggs, and clearly-labeled protein bars from brands like Enjoy Life or MadeGood.", audience: "Students" },
      { question: "What's the operator's role in maintaining compliance?", answer: "Operators are responsible for: shipping compliant equipment, recommending compliant install locations during site survey, and re-verifying compliance after any service visit that involves moving the machine or replacing payment hardware. The host (university) is responsible for: not blocking the approach path with mats/signs, and notifying the operator before any building modification near a machine.", audience: "Operators" },
    ],
  }),
  sourceCitations({
    sources: [
      { label: "2010 ADA Standards for Accessible Design — Chapter 3 (Building Blocks) + Chapter 4 (Accessible Routes)", url: "https://www.ada.gov/law-and-regs/design-standards/2010-stds/", note: "Reach ranges (308), clear floor space (305), operable parts (309)" },
      { label: "US Access Board — vending machine technical guidance", url: "https://www.access-board.gov/", note: "Practical interpretations of operable-parts rules for vending equipment" },
      { label: "Section 504 of the Rehabilitation Act — campus compliance overview", url: "https://www.ed.gov/laws-and-policy/civil-rights-laws/disability-discrimination/", note: "Applies to all colleges receiving federal funds" },
      { label: "NAMA — accessibility programming for college accounts", url: "https://www.namanow.org/", note: "Industry guidance on tactile keypads, app-based audio interfaces" },
      { label: "California CBC 11B — accessibility (stricter than federal in several areas)", url: "https://www.dgs.ca.gov/DSA/", note: "Reference for stricter state-level requirements" },
    ],
  }),
  relatedGuides({
    heading: "Related campus and accessibility guides",
    items: [
      { eyebrow: "Sister guide", title: "Optimize campus vending placement", description: "Headcount thresholds, dwell-time math, and the placement rules that determine whether a machine pays back its install cost.", href: "/ai-vending-coolers/optimize-campus-vending-placement" },
      { eyebrow: "Equipment selection", title: "What are the dimensions of a vending machine?", description: "Standard footprints (40×35×72) and the install-day clearances every facilities team should verify.", href: "/vending-machine-types/what-are-the-dimensions-of-a-vending-machine" },
      { eyebrow: "Hub", title: "All AI vending and campus guides", description: "Accessibility, sustainability, telemetry, and student-feedback programs across our campus operator content.", href: "/ai-vending-coolers" },
    ],
  }),
]);
process.exit(0);
