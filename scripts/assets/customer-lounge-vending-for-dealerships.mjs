import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "customer-lounge-vending-for-dealerships",
  assetType: "playbook",
  title: "Dealership Customer Lounge Vending Playbook",
  subtitle: "Tier-by-tier program design, manufacturer alignment, CSI integration, and lounge layout",
  intro:
    "A dealership customer lounge is graded against the J.D. Power Customer Service Index Long-Term study, the OEM brand-experience standards, and the dealership's own customer-retention metrics. Vending and beverages are recurring items in the customer verbatim feedback. This playbook walks through tier-by-tier program design, OEM alignment, CSI integration, and the operator SLA that keeps the lounge supporting — not subtracting from — the dealership's customer-experience score.",
  sections: [
    {
      heading: "1. Tier-by-tier lounge program design",
      paragraph:
        "Dealerships run one of three or four lounge tiers depending on brand position and group strategy. Each tier maps to specific equipment, planogram, and CSI expectations.",
      headers: ["Tier", "Brand position", "Beverage program", "Snack program", "Operator framing"],
      rows: [
        ["Standard", "Mass-market (Ford, Chevy, Toyota, Honda, Hyundai, Nissan)", "Complimentary drip coffee + filtered water; vended cold beverages", "Vended snack machine", "Concession + revenue share"],
        ["Enhanced", "Premium-mass-market (Mazda, Subaru, Volkswagen, Kia)", "Bean-to-cup coffee + filtered water + RTD cooler", "Vended snack + complimentary fruit", "Hybrid — partial complimentary"],
        ["Premium", "Premium (Acura, Buick, Genesis, Cadillac)", "Bean-to-cup + branded RTD + premium bottled water", "Curated complimentary + vended specialty", "Service contract — operator paid by dealership"],
        ["Luxury", "Luxury (BMW, Mercedes, Lexus, Audi, Lincoln)", "Barista bar + curated cooler + premium bottled water + tea station", "Curated complimentary snack — no vending visible", "Service contract + brand-experience grant"],
      ],
    },
    {
      heading: "2. Equipment specification by tier",
      items: [
        { label: "Standard tier coffee", value: "Bunn VPR or Curtis G3 commercial drip-coffee maker on filtered-water line (NSF/ANSI 53 filter, replaced quarterly). Single-serve pod machine (Keurig K-3500 or Bunn MCU) as alternate for variety." },
        { label: "Enhanced and premium tier coffee", value: "Bean-to-cup: Jura GIGA X8, Franke A800, Schaerer Coffee Soul, or Eversys Cameo. Filtered water line, daily auto-clean, weekly deep-clean by operator. PM contract includes burr-grinder calibration quarterly." },
        { label: "Luxury tier coffee", value: "La Marzocco Linea PB or Slayer espresso machine with under-counter refrigeration, ice maker, tea steeping station, and barista on-staff during peak service hours (typically 8 AM - 2 PM)." },
        { label: "Cold-beverage equipment", value: "Tier 1-2: Royal Vendors RVCD or Crane Merchant Genesis cold-beverage vending machine. Tier 3-4: True T-49 or True GDM-23 glass-door cooler stocked with curated portfolio." },
        { label: "Snack equipment", value: "Tier 1-2: AMS Sensit 3 or Crane Merchant Media snack machine. Tier 3-4: Curated counter display + vended specialty machine in back-of-house or staff area only." },
        { label: "Filtered water", value: "Elkay LZSTL8WSLP or Oasis PLF8WBQ bottle-fill station with NSF/ANSI 42, 53, 401, and P473 certified filter (PFAS reduction). Most OEMs require certified filtration." },
      ],
    },
    {
      heading: "3. CSI integration",
      paragraph:
        "Customer Service Index touchpoints related to the lounge include Service Initiation (lounge first impression), Service Facility (cleanliness and amenity quality), and Service Advisor (verbal acknowledgement of amenities). The lounge program is graded against these sub-scores.",
      items: [
        { number: 1, title: "Pre-service amenity acknowledgement", description: "Service Advisor walks customer to the lounge during write-up and acknowledges amenities. Explicit verbal mention is correlated with 0.3-0.5 CSI-point lift in published OEM research." },
        { number: 2, title: "Mid-service check-in", description: "On waits > 90 minutes, Service Advisor or porter checks on customer at the lounge. Resolves any vending or beverage issue immediately rather than letting it appear in CSI verbatim." },
        { number: 3, title: "Post-service amenity question", description: "On pick-up, Service Advisor asks about wait-comfort using CSI-style language ('Was your wait comfortable? Were the amenities adequate?'). Captures issues before the survey window." },
        { number: 4, title: "Verbatim review cycle", description: "Quarterly review of OEM-supplied CSI verbatims with operator. Recurring lounge or beverage mentions trigger planogram refresh, equipment service, or amenity upgrade." },
      ],
    },
    {
      heading: "4. Manufacturer brand alignment",
      items: [
        { check: "OEM brand-standards document (Toyota Customer Experience Standards, Ford Customer Experience Movement, BMW Brand-Experience Guidelines, etc.) reviewed before equipment install." },
        { check: "Verify any OEM-sponsored lounge or beverage program already in place (Mercedes-Benz Coffee Bar, Lexus Plus, BMW iHubs) before signing third-party operator agreement." },
        { check: "Equipment color, signage, and category mix aligned with OEM brand-experience guidelines and dealership-group identity." },
        { check: "OEM regional brand-audit photo documentation maintained; operator provides photos on request during the annual audit cycle." },
        { check: "Multi-franchise group rooftops: pick neutral group brand or align each rooftop to its OEM — pre-decision before equipment install." },
        { check: "Brand-standards refresh annually — operator updates skinning, signage, and SKU mix to match OEM brand-experience updates." },
      ],
    },
    {
      heading: "5. Lounge layout and ADA accessibility",
      paragraph:
        "Lounge layout must support both customer-experience expectations and ADA Title III accessibility requirements. Vending machine and beverage station placement intersects ADA reach-range and clear-floor-space rules.",
      items: [
        { label: "ADA reach range — operable parts", value: "Selection buttons, payment readers, and dispense flaps between 15-48 inches above finished floor per ADA Section 308. Card reader and contactless tap zone fall within this range; verify before install." },
        { label: "Clear floor space", value: "30×48 inch clear floor space in front of each machine for parallel or forward approach per ADA Section 305. Coordinate placement with lounge seating to maintain circulation." },
        { label: "Operating force", value: "≤ 5 lbf to operate selection buttons, dispense flap, and payment readers per ADA Section 309.4. No tight grasping, pinching, or twisting." },
        { label: "Pricing display and signage", value: "High-contrast pricing display, characters ≥ 5/8 inch, contrast ratio ≥ 70% per ADA Section 703. FALCPA allergen signage on each SKU plus allergen-summary card on the machine face." },
        { label: "Cold-chain compliance", value: "Refrigerated equipment maintains 35-40°F per FDA Food Code 3-501.16. Internal-temp log available to dealership on request." },
      ],
    },
    {
      heading: "6. Operator SLA aligned to CSI cycle",
      headers: ["Issue", "Standard tier SLA", "Premium tier SLA", "Luxury tier SLA"],
      rows: [
        ["Machine offline / coffee bar down", "< 8 hours operating, < 24 hours overnight", "< 4 hours operating, < 12 hours overnight", "< 2 hours during opening; barista coverage backstop"],
        ["Single-SKU stockout", "< 24 hours", "< 12 hours", "Same-day; barista restocks from inventory"],
        ["Temperature excursion", "Immediate (< 4 hours disposal per FDA Food Code 3-501.16)", "Same", "Same"],
        ["Cosmetic / signage", "< 7 days", "< 3 days", "< 24 hours; daily brand-standards inspection"],
        ["Filter PM (water + coffee)", "Quarterly", "Quarterly", "Monthly"],
        ["Planogram refresh", "Quarterly", "Monthly", "Bi-weekly curation"],
      ],
    },
    {
      heading: "7. Commercial model",
      headers: ["Tier", "Monthly amenity cost", "Funding source", "ROI metric"],
      rows: [
        ["Standard (concession)", "$0-200 dealership (commission positive)", "Commission 8-15% to dealership", "Vending revenue + CSI line-item rating"],
        ["Enhanced (hybrid)", "$300-$800 dealership", "Dealership amenity expense + some commission", "CSI sub-score + cost vs. retention"],
        ["Premium (service contract)", "$1,500-$3,500 dealership", "Customer-experience expense; OEM may co-fund $200-$500", "CSI sub-score + customer retention rate"],
        ["Luxury (full service)", "$5,000-$12,000+", "Customer-experience expense + OEM brand-experience grant (20-40% offset)", "CSI overall score + customer retention + brand-experience audit pass"],
      ],
    },
  ],
  footer:
    "This playbook is a working operational reference. Calibrate the lounge tier, equipment, and SLA to your group's brand position, OEM brand standards, and CSI program targets.",
});

console.log("wrote "+"customer-lounge-vending-for-dealerships");
