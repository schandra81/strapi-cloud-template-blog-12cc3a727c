import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "beverage-vending-in-dealership-waiting-areas",
  assetType: "playbook",
  title: "Dealership Service Waiting Area Beverage Vending Playbook",
  subtitle: "Premium versus standard tiers, CSI integration, equipment specs, and OEM brand-standard alignment",
  intro:
    "Service waiting area beverages are a J.D. Power Customer Service Index touchpoint. The customer experience between drop-off and vehicle pickup is graded in the OEM CSI score, and beverage availability is one of the line items customers explicitly comment on. This playbook frames the program as a CSI-quality investment rather than a transactional concession, and covers tier-by-tier equipment selection, planogram, and operator SLA.",
  sections: [
    {
      heading: "1. Tier-by-tier program design",
      paragraph:
        "Dealership groups typically run one of three beverage-program tiers depending on brand position. Each tier maps to a specific equipment class, planogram, and CSI expectation.",
      headers: ["Tier", "Brand position", "Equipment", "Pricing model", "CSI emphasis"],
      rows: [
        ["Standard", "Mass-market (Toyota, Honda, Ford, Chevy, Hyundai, Nissan)", "Cold-beverage vending machine with cashless payment, free filtered water dispenser", "Paid vending + complimentary water and coffee", "Availability and machine working state"],
        ["Premium", "Premium (Acura, Buick, Mazda, Volkswagen, Subaru, Kia EV6+)", "Bean-to-cup coffee bar + branded RTD beverage cooler + complimentary bottled water", "Complimentary coffee + RTD selection + bottled water; vended cold beverages for variety", "Quality of complimentary offerings"],
        ["Luxury", "Luxury (BMW, Mercedes, Lexus, Audi, Genesis, Cadillac, Lincoln)", "Barista-attended espresso bar + premium-brand RTD cooler + branded bottled water + tea station + light snacks", "All complimentary; no vending visible on the customer floor", "Hospitality experience, brand-aligned presentation"],
      ],
    },
    {
      heading: "2. Equipment specification by tier",
      items: [
        { label: "Standard tier — cold-beverage machine", value: "Royal Vendors RVCD or Crane Merchant Genesis cold-beverage with cashless EMV payment (Cantaloupe Seed, Nayax, USA Technologies). Capacity 12-15 selections, 30-45 bottles per selection. Internal temp 35-40°F per FDA Food Code 3-501.16." },
        { label: "Premium tier — coffee bar", value: "Bean-to-cup machine: Jura GIGA X8, Franke A800, Schaerer Coffee Soul, or Eversys Cameo. Connected to filtered water line (NSF/ANSI 53 filter cartridge, replaced quarterly per operator PM). Daily clean cycle automated; weekly deep-clean by operator." },
        { label: "Premium tier — RTD branded cooler", value: "True T-49 or True GDM-23 glass-door cooler stocked with branded RTD coffee (Stok, Starbucks Doubleshot), sparkling water (LaCroix, Bubly, Topo Chico), still water (Voss, Smartwater, Fiji), juice, tea." },
        { label: "Luxury tier — espresso bar fixtures", value: "La Marzocco Linea PB or Slayer espresso machine with under-counter refrigeration, ice maker, tea steeping station, and curated tea selection (Harney & Sons, Mighty Leaf). Barista on-staff during peak service hours (8 AM - 2 PM)." },
        { label: "Filtered water dispenser (all tiers)", value: "Elkay LZSTL8WSLP or Oasis PLF8WBQ bottle-fill station with NSF/ANSI 42, 53, 401, and P473 certified filter (PFAS reduction). Most OEMs require certified filtration." },
      ],
    },
    {
      heading: "3. CSI integration",
      paragraph:
        "Customer Satisfaction Index (CSI) and Customer Service Index (CSI-LT) studies score lounge experience under customer-comfort and service-experience sub-indices. Beverage availability is consistently in the top-5 line items customers mention in verbatim feedback.",
      items: [
        { number: 1, title: "Pre-service touchpoint", description: "Service advisor walks the customer to the lounge and explicitly points out the beverage program. Verbal acknowledgement that beverages are complimentary (where the tier supports) is correlated with +0.3 to +0.5 CSI points in published OEM studies." },
        { number: 2, title: "During-service experience", description: "Stocked machine and clean fixture. CSI penalty for an empty or broken machine is documented in customer verbatims; visible signage to operator support number prevents 'service rep didn't fix it' attribution." },
        { number: 3, title: "Post-service follow-up", description: "OEM CSI surveys typically ask about waiting-area quality. Verbatim comments mentioning beverage quality or availability are flagged in OEM dashboards and rolled up to dealership monthly CSI scorecard." },
        { number: 4, title: "Continuous-improvement loop", description: "Quarterly business review with operator includes the dealership's CSI verbatims related to lounge or beverage. Operator adjusts planogram or fixes equipment issues identified in customer comments." },
      ],
    },
    {
      heading: "4. Service SLA",
      headers: ["Issue", "Standard tier SLA", "Premium tier SLA", "Luxury tier SLA"],
      rows: [
        ["Machine offline / coffee bar down", "< 8 hours operating, < 24 hours overnight", "< 4 hours operating, < 12 hours overnight", "< 2 hours during opening, immediate barista coverage"],
        ["Single-product stockout", "< 24 hours", "< 12 hours", "Same-day; barista replaces from inventory"],
        ["Temperature excursion", "Immediate (< 4 hour disposal trigger per FDA Food Code)", "Same", "Same"],
        ["Cosmetic / signage", "< 7 days", "< 3 days", "< 24 hours; brand-standard inspection daily"],
        ["Filter replacement (water + coffee)", "Quarterly PM", "Quarterly PM", "Monthly PM"],
      ],
    },
    {
      heading: "5. Planogram by tier",
      paragraph:
        "Beverage selection reflects the customer demographic and the brand-experience target. The luxury tier eliminates the vending machine from the customer floor entirely.",
      items: [
        { label: "Standard cold-beverage planogram", value: "Bottled water (Aquafina, Dasani, Smartwater) 25%; carbonated soft drinks (Coke, Diet Coke, Sprite, Pepsi) 25%; flavored sparkling (Bubly, La Croix) 12%; iced tea (Gold Peak, Pure Leaf) 10%; juice (Naked, Suja, Tropicana) 10%; RTD coffee (Starbucks Frappuccino, Stok) 8%; energy drinks 10%." },
        { label: "Premium cooler planogram", value: "Branded sparkling (Topo Chico, La Croix, Bubly) 30%; premium bottled water (Voss, Smartwater) 25%; RTD coffee (Stok, Starbucks Doubleshot) 20%; cold-brew (Stumptown) 10%; iced tea (Pure Leaf, Harney & Sons RTD) 10%; juice (Naked Pressed, Suja Cold-Pressed) 5%." },
        { label: "Luxury beverage menu", value: "Espresso, americano, cappuccino, latte, cortado, macchiato. Tea selection: green, black, herbal, chamomile, peppermint. Sparkling water: Pellegrino, Voss, Topo Chico. Still water: Voss, Fiji, Smartwater. Curated juice. Hot chocolate (premium cocoa). Light snacks: biscotti, shortbread, dried fruit, mixed nuts." },
      ],
    },
    {
      heading: "6. OEM brand-standard alignment",
      items: [
        { check: "Confirm OEM brand-standards document for waiting-area amenities before equipment install. Most OEMs publish a customer-experience guide with specific lounge requirements." },
        { check: "Verify any OEM-sponsored beverage program (e.g., Mercedes-Benz Coffee Bar, BMW iHubs, Lexus Plus) that may pre-empt or co-fund the third-party operator agreement." },
        { check: "Equipment skinning, signage, and category mix aligned with OEM brand-experience guidelines (colors, logo placement, allowed third-party brands)." },
        { check: "Photo-documentation of lounge with vending or coffee program submitted to OEM regional during CSI audit cycles where the program requires it." },
        { check: "Annual brand-standards refresh — operator updates skinning and SKU mix to match any OEM brand-experience update." },
      ],
    },
    {
      heading: "7. Commercial model",
      paragraph:
        "Beverage program ROI is measured against CSI score, customer retention, and service-bay throughput rather than direct vending commission. Most premium and luxury dealerships absorb the program as a customer-experience cost.",
      headers: ["Tier", "Typical monthly cost", "Funding model", "ROI metric"],
      rows: [
        ["Standard (vended)", "$0-200 to dealership (commission positive)", "Commission revenue share 8-15% to dealership", "Vending revenue + CSI line-item rating"],
        ["Premium (complimentary RTD + coffee bar)", "$800-$2,500 amenity cost", "Dealership absorbs as customer-experience expense; OEM may co-fund $200-$500/month", "CSI sub-score and verbatim comment volume"],
        ["Luxury (barista bar + curated)", "$4,000-$10,000+ all-in (labor, product, fixture lease)", "Dealership absorbs; OEM brand-experience grant may offset 20-40%", "CSI overall score, customer retention rate"],
      ],
    },
  ],
  footer:
    "This playbook is a working operational reference. Calibrate the tier, equipment, and SLA to your dealership group's brand position, OEM brand standards, and CSI program targets.",
});

console.log("wrote "+"beverage-vending-in-dealership-waiting-areas");
