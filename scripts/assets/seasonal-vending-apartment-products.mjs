import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "seasonal-vending-apartment-products",
  assetType: "playbook",
  title: "Apartment Seasonal Vending Playbook",
  subtitle: "Four-season planogram, equipment specs, resident-survey template, and amenity-ROI measurement",
  intro:
    "Residential vending is a seasonal business. Summer hydration, fall comfort, winter wellness, and spring activity each shift category mix by 25-40%. This playbook codifies the four-season planogram, equipment selection, resident-survey cadence, and ROI measurement that keep apartment vending an amenity residents recommend in renewal-survey responses rather than a transactional placement.",
  sections: [
    {
      heading: "1. Equipment selection for residential placements",
      paragraph:
        "Apartment placements run lower transaction volume than commercial sites but higher repeat-purchase frequency from the same residents. Equipment must balance footprint, planogram flexibility, and quiet operation in a residential corridor.",
      headers: ["Placement context", "Equipment class", "Capacity", "Noise rating"],
      rows: [
        ["Lobby / mail area (small property)", "Single combo machine (snack + cold)", "180-260 selections", "< 55 dBA per ANSI S12.10"],
        ["Amenity / fitness area (mid-size)", "Snack tower + beverage tower", "320-440 selections", "< 55 dBA"],
        ["Pool / outdoor amenity", "Outdoor-rated beverage NEMA 3R", "120-180 selections", "< 60 dBA acceptable outdoors"],
        ["High-rise tower (each floor)", "Compact combo (Crane Merchant 4, AMS Sensit 3 compact)", "120-180 selections", "< 50 dBA"],
      ],
    },
    {
      heading: "2. Spring planogram (March-May)",
      paragraph:
        "Outdoor activity rises, hydration demand begins to climb, and protein/recovery SKUs follow gym usage. Allergens and seasonal allergies drive demand for sinus-friendly options.",
      items: [
        { label: "Hydration share", value: "20% of facings: water, electrolyte (Liquid IV, Gatorade), light flavored sparkling (Bubly, La Croix)" },
        { label: "Protein and recovery", value: "12% of facings: RXBAR, Quest, KIND Protein, Premier Protein RTD" },
        { label: "Fresh and produce-adjacent", value: "8% of facings (where refrigerated): hummus + pretzels, fruit cups, hard-boiled egg packs" },
        { label: "Comfort categories de-emphasized", value: "Reduce hot-chocolate, peanut-butter crackers, hearty soup down to 4-6% of facings" },
      ],
    },
    {
      heading: "3. Summer planogram (June-August)",
      paragraph:
        "Hydration peaks. Pool and outdoor amenity machines often run at 1.5-2× normal velocity. Refrigerated capacity becomes the constraint, not snack capacity.",
      items: [
        { label: "Hydration share", value: "30-35% of facings: bottled water in two sizes, flavored sparkling, electrolyte, sports drinks. Stock 16.9 oz and 20 oz to capture both pool-side and corridor demand." },
        { label: "Cold treats", value: "12% of facings where freezer present: ice-cream sandwiches, Popsicle brands, fruit bars. Freezer equipment IDX FRZ or Royal Vendors RVRC freezer." },
        { label: "Lighter snacks", value: "Reduce heavy chocolate (melt risk above 75°F); shift to baked chips, pretzels, nut packs, fruit snacks." },
        { label: "Restock cadence", value: "Telemetry-driven; expect 2× normal restock visits for pool and amenity machines during heat-event weeks." },
      ],
    },
    {
      heading: "4. Fall planogram (September-November)",
      paragraph:
        "Hot beverages, comfort snacks, and seasonal flavors take share. Residents returning from summer travel re-engage with amenity space. Halloween and Thanksgiving theme rotation drives novelty.",
      items: [
        { label: "Hot-beverage adjacent", value: "RTD coffee (Starbucks Frappuccino cold, Stok cold-brew), hot-soup cans where machine supports, packet cocoa and apple cider where merchandising bay exists" },
        { label: "Comfort snacks return", value: "Cheez-It, Cheetos, peanut-butter crackers, granola bars, oat-bar formats" },
        { label: "Seasonal limited-time SKUs", value: "Pumpkin-spice cookies, candy-corn formats, caramel apples (refrigerated). Limit to 4-6 facings; restock weekly until sell-through drops below 50% of category baseline." },
        { label: "Allergen labeling", value: "Seasonal SKUs often contain tree-nuts and dairy; FALCPA labeling on each facing plus allergen summary on machine face." },
      ],
    },
    {
      heading: "5. Winter planogram (December-February)",
      paragraph:
        "Indoor-only purchase pattern. Wellness, comfort, and convenience drive category mix. Cold-and-flu support categories spike during outbreak weeks.",
      items: [
        { label: "Wellness and comfort", value: "Cough drops (Halls, Ricola), Emergen-C single-serve, herbal tea bags, instant oatmeal, microwaveable mac-and-cheese cups where microwave is in lobby" },
        { label: "Comfort snacks", value: "Chocolate (now climate-safe), cookies, hot-cocoa packets, popcorn ready-to-eat" },
        { label: "Hydration steady but smaller pack", value: "16.9 oz water + sparkling steady; reduce 20 oz to free facings for comfort SKUs" },
        { label: "Holiday gift packaging", value: "Limited-time gift bundles or specialty chocolate. Avoid alcohol, scented candles, or any SKU outside the standard vending UL listing." },
      ],
    },
    {
      heading: "6. Resident-survey template and feedback cadence",
      items: [
        { number: 1, title: "Quarterly amenity-satisfaction survey", description: "Property management distributes 5-question survey to all residents covering: (1) Have you used vending in the past 90 days? (2) Were the products you wanted in stock? (3) Rate the price-to-quality of products 1-5. (4) Rate machine cleanliness 1-5. (5) What product would you like to see added? Aggregate results shared with operator within 30 days." },
        { number: 2, title: "Move-in welcome card", description: "New residents receive an amenity-welcome card with the machine location, refund process, and a $5 credit code for first purchase. Drives 60-day adoption from 30% to 55%+ at observed properties." },
        { number: 3, title: "Suggestion channel", description: "QR code on each machine links to a 3-field operator form: SKU suggestion, machine location, optional resident name. Operator responds within 14 days; sub-25% of requests are added to the planogram." },
        { number: 4, title: "Refund handling", description: "Cashless refunds auto-credited within 24 hours via operator app. Cash refunds processed at property office or by mail check (max 7 days). Refund rate > 1% triggers planogram review." },
      ],
    },
    {
      heading: "7. Amenity ROI measurement",
      paragraph:
        "Apartment vending is graded against amenity ROI, not net commission. Net Promoter Score lift on amenity-survey items, renewal intention, and revenue-share are the three metrics property managers report up to ownership.",
      headers: ["Metric", "Baseline benchmark", "Source"],
      rows: [
        ["Resident usage rate (active users / resident base)", "25-40% monthly", "Operator transaction reports + property roster"],
        ["Amenity NPS lift on vending question", "+8 to +15 points after install", "J.D. Power and SatisFacts resident-satisfaction surveys"],
        ["Renewal intention attributed to amenities", "Marginal but measurable +1-2% in NMHC studies", "NMHC + Kingsley Associates resident retention research"],
        ["Revenue share to property", "8-15% of gross", "Standard residential vending commission range"],
        ["Machine uptime", "≥ 97%", "Operator telemetry"],
      ],
    },
  ],
  footer:
    "This playbook is a working operational reference. Calibrate the seasonal planogram, equipment, and survey cadence to your property type, climate zone, and resident demographic.",
});

console.log("wrote "+"seasonal-vending-apartment-products");
