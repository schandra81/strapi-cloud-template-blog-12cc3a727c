import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "customer-experience-vending-in-dealerships",
  assetType: "playbook",
  title: "Dealership Customer Experience Vending Playbook",
  subtitle: "CSI integration, manufacturer brand standards, hospitality framing, and lounge program design",
  intro:
    "Dealership service customers wait an average of 1.5-2.5 hours during scheduled maintenance per J.D. Power U.S. Customer Service Index Long-Term study. That wait is one of the most measurable customer-experience touchpoints in the entire ownership lifecycle, and beverage and snack availability is a recurring verbatim comment. This playbook frames vending as a hospitality investment that contributes to CSI and customer retention rather than a transactional concession.",
  sections: [
    {
      heading: "1. The CSI case for vending",
      paragraph:
        "Customer Service Index (CSI) and Customer Service Index — Long-Term (CSI-LT) studies score service-experience sub-indices including waiting-area amenities. Beverage and snack availability consistently appear in the top-10 customer verbatim themes. Empty or broken machines penalize the dealership score; well-managed programs lift it.",
      items: [
        { label: "J.D. Power CSI sub-indices touched by vending", value: "Service Initiation (lounge first-impression), Service Advisor experience (verbal acknowledgement of amenities), Service Facility (cleanliness and amenity quality), Vehicle Pick-Up (post-service experience)" },
        { label: "Verbatim signal", value: "Quarterly OEM-supplied verbatim reports flag lounge or beverage references. Operators with sub-95% uptime see negative-verbatim volume spike; operators with active planogram refresh see positive-verbatim mention rate climb 15-25% in published OEM case studies." },
        { label: "Sub-score weight", value: "Service-facility sub-score typically weighted 12-18% of overall CSI in OEM scoring models. Vending and beverage availability contribute a measurable fraction of this." },
        { label: "Score-band lift", value: "A working, well-stocked program is associated with 0.3-0.7 point lift on the 1,000-point CSI scale in published OEM case studies. Top-quartile dealers actively manage this." },
      ],
    },
    {
      heading: "2. Hospitality framing — not concession framing",
      paragraph:
        "The framing decision drives the rest of the program. A concession framing optimizes for revenue share; a hospitality framing optimizes for CSI score and retention. Most premium and luxury groups choose hospitality framing; mass-market groups split.",
      items: [
        { number: 1, title: "Concession framing", description: "Operator places equipment, dealership receives commission, customers pay for products. Optimizes for revenue-share and cost-recovery. Best fit for high-traffic mass-market dealerships where customers expect to pay for refreshments." },
        { number: 2, title: "Hybrid framing", description: "Complimentary coffee and water; paid vending for snacks and specialty beverages. Most common in premium and many mass-market groups. Optimizes for CSI line-item rating while capturing some commission." },
        { number: 3, title: "Hospitality framing", description: "All refreshments complimentary. Operator runs as a service contract paid by dealership rather than a revenue-share. Optimizes for CSI score and retention. Standard at luxury rooftops." },
        { number: 4, title: "Brand-experience framing", description: "OEM-sponsored program with branded equipment, OEM brand-standards governance, and curated portfolio. Best fit when OEM offers brand-experience grant or co-funding (Mercedes-Benz Coffee Bar, Lexus Plus)." },
      ],
    },
    {
      heading: "3. Lounge program design",
      headers: ["Element", "Standard tier", "Premium tier", "Luxury tier"],
      rows: [
        ["Coffee", "Self-serve drip pot or pod machine", "Bean-to-cup (Jura, Franke, Schaerer)", "Barista-attended espresso bar (La Marzocco, Slayer)"],
        ["Water", "Filtered dispenser (Elkay LZSTL8WSLP)", "Filtered dispenser + bottled water selection", "Premium bottled water (Voss, Fiji, Pellegrino)"],
        ["Beverages", "Vended cold-beverage machine", "RTD cooler with branded portfolio", "Curated cooler + complimentary serve"],
        ["Snacks", "Vended snack machine", "Vended snack + complimentary fruit bowl", "Curated complimentary snack (nuts, dried fruit, biscotti)"],
        ["Seating", "Standard chairs", "Premium seating + workspace", "Lounge seating + workspace + quiet area + kids area"],
        ["Connectivity", "Public Wi-Fi", "Public Wi-Fi + workspace power", "Premium Wi-Fi + segregated workspace + meeting room option"],
      ],
    },
    {
      heading: "4. Service Advisor — vending integration",
      items: [
        { label: "Pre-service walkthrough", value: "Service Advisor walks customer to the lounge during service write-up. Explicit acknowledgement of available amenities (e.g., 'Complimentary coffee and bottled water; vending for additional selections') is correlated with 0.3-0.5 CSI-point lift in OEM published research." },
        { label: "Wait-time check-in", value: "On services > 90 minutes, Service Advisor or porter checks on customer at the lounge halfway through. Confirms amenities are sufficient; refunds or replaces any vending issue immediately." },
        { label: "Post-service walkthrough", value: "On vehicle pick-up, Service Advisor checks customer-comfort during wait and uses CSI-style language ('Was your wait comfortable? Were the amenities adequate?'). Captures issues before the OEM-supplied CSI survey reaches the customer." },
        { label: "Verbatim coaching", value: "Quarterly review of CSI verbatims with service team. Recurring lounge or vending mentions trigger operator action: planogram refresh, equipment repair, or amenity upgrade." },
      ],
    },
    {
      heading: "5. Operator SLA aligned to CSI",
      paragraph:
        "Service-level agreements with the operator are calibrated to CSI cycle time. Anything that interrupts customer experience must be resolved before the OEM survey reaches the customer (typically 7-14 days post-service).",
      items: [
        { number: 1, title: "Same-day resolution targets", description: "Machine offline, payment system down, cold-chain failure — operator on-site within 4 hours during operating, 12 hours overnight. Faster resolution than standard vending SLA because CSI clock is running." },
        { number: 2, title: "Same-week stockout resolution", description: "Single-SKU stockout < 24 hours. Planogram refresh request < 7 days. Aligns with the CSI survey window so customers experience the corrected state on a subsequent visit." },
        { number: 3, title: "Cosmetic and signage", description: "< 3 days for premium/luxury, < 7 days for standard tier. Equipment that looks 'shabby' shows up in verbatim comments faster than functional issues." },
        { number: 4, title: "Cleaning and PM", description: "Weekly route clean + monthly deep clean + quarterly PM. FDA Food Code 3-501.16 cold-chain attestation maintained; documented in operator log available to dealership on request." },
      ],
    },
    {
      heading: "6. Manufacturer brand-standards integration",
      items: [
        { check: "OEM brand-standards document reviewed before equipment install. Most OEMs publish a customer-experience guide with specific lounge requirements." },
        { check: "Equipment color, signage, and category mix aligned with OEM brand-experience guidelines." },
        { check: "OEM-sponsored amenity programs (Mercedes-Benz Coffee Bar, BMW iHubs, Lexus Plus) confirmed before third-party operator agreement signed; conflicts resolved with regional rep." },
        { check: "OEM regional brand-audit photo documentation maintained; operator provides photos on request." },
        { check: "Brand-standards refresh annually — operator updates skinning, signage, and SKU mix to match OEM brand-experience updates." },
        { check: "Dealership-group brand-experience standards (group color palette, logo placement, service-lane signage) integrated with OEM brand-standards review." },
      ],
    },
    {
      heading: "7. Continuous improvement loop",
      headers: ["Cadence", "Activity", "Owner", "Output"],
      rows: [
        ["Weekly", "Operator route service + telemetry review", "Operator route manager", "Stocking log, restock visit confirmation"],
        ["Monthly", "Per-machine revenue + uptime report", "Operator account manager", "Performance scorecard"],
        ["Quarterly", "CSI verbatim review + planogram refresh + brand-standards audit", "Operator account manager + dealership Customer Experience lead", "Planogram update + service-improvement action items"],
        ["Annually", "Brand-standards refresh + equipment lifecycle review + contract renewal", "Operator owner + dealership GM", "Updated equipment plan + renewal terms"],
      ],
    },
  ],
  footer:
    "This playbook is a working operational reference. Calibrate the tier, framing, and SLA to your dealership group's brand position, OEM brand standards, and CSI program targets.",
});

console.log("wrote "+"customer-experience-vending-in-dealerships");
