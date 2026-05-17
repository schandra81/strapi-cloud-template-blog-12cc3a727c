import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "luxury-item-vending-at-airports",
  assetType: "pack",
  title: "Luxury Airport Vending Evaluation Packet",
  subtitle: "Gateway-traffic data, equipment vendor list, ROI model",
  intro:
    "Luxury airport vending (electronics, beauty, premium accessories) is a sub-concession product with high MAG thresholds, hardened equipment, and audit-grade reporting. This packet helps qualifying hosts and concessionaires evaluate the opportunity against the gateway-traffic data and equipment options.",
  sections: [
    {
      heading: "1. Gateway-traffic qualification",
      paragraph:
        "Luxury vending breaks even at very different traffic thresholds than snack/beverage vending. Use FAA CY enplanement and ACI-NA passenger-volume data to qualify gateway terminals.",
      headers: ["Gateway tier", "Annual enplanements (FAA)", "Luxury fit"],
      rows: [
        ["Large hub (Cat I)", "≥ 1% of US enplanements (~7M+ origin enplanements)", "Strong — multiple luxury placements per terminal"],
        ["Large hub (Cat II)", "0.25-1% (~1.8M-7M)", "Strong — terminal anchor placement"],
        ["Medium hub", "0.05-0.25% (~365K-1.8M)", "Selective — international or premium-airline concourse only"],
        ["Small hub / non-hub", "< 0.05%", "Generally not viable for luxury vending"],
      ],
    },
    {
      heading: "2. Category-specific traffic gates",
      items: [
        { label: "Consumer electronics", value: "Best at international gateways with > 8M annual passengers; OEM mix from Apple Authorized Reseller (Best Buy Express has historical precedent) or Brookstone-style." },
        { label: "Beauty (Benefit, Glamsquad)", value: "Concourse-anchor placement in terminals with > 15% international female travelers (per airport demographic survey)." },
        { label: "Premium accessories", value: "Travel pillows, premium chargers, designer eyewear — viable at large/medium hubs with > 4M passengers." },
        { label: "Watches / jewelry", value: "Highest MAG, longest sell cycle; restrict to top-10 US gateways or international premium concourses (e.g., LAX TBIT, JFK T4, MIA D-concourse)." },
      ],
    },
    {
      heading: "3. Equipment vendor list — luxury-grade",
      headers: ["Vendor / model", "Best for", "Capex range"],
      rows: [
        ["Best Buy Express (kiosk model)", "Electronics — historical airport precedent", "Operator-owned, ~$25-$50K/unit"],
        ["IntelliVend Luxury Tower", "Premium accessories, beauty", "$20-$40K/unit"],
        ["Apex Supply Chain / Selectivend Custom", "High-mix premium SKUs, RFID inventory", "$18-$35K/unit"],
        ["Brookstone-style kiosk (custom)", "Travel essentials + premium electronics", "$25-$45K/unit"],
        ["Vending Design Works custom", "Brand-immersive cabinet, jewelry / watches", "$40-$80K/unit"],
        ["AWM Smart Shelf AI cooler (premium pivot)", "Premium fresh + sushi + bottled wine", "$15-$30K/unit"],
      ],
    },
    {
      heading: "4. Hardened security + asset protection",
      items: [
        { label: "Cabinet", value: "14-gauge steel; tamper-resistant T-handle (Medeco / Abloy / Sargent Greenleaf); electronic audit-trail lock; smash-resistant glass (ANSI Z97.1 tempered laminated)." },
        { label: "Anti-theft", value: "RFID inventory tracking; tilt + motion sensors with on-machine alarm + airport-CCTV integration; auto-lockdown on tamper." },
        { label: "Anchoring", value: "Floor-anchored 3/8-inch bolts into concrete or stanchion-mounted with anti-pry brackets." },
        { label: "Insurance", value: "Operator carries product-floor insurance covering inventory value per cabinet ($25K-$200K depending on SKU mix). Airport additional insured." },
        { label: "Cash handling", value: "Predominantly cashless / EMV; cash if accepted requires armored-car pickup ≥ 2x weekly with concession-office reconciliation." },
      ],
    },
    {
      heading: "5. ROI model framework",
      paragraph:
        "Luxury vending ROI hinges on average transaction value (ATV) × conversion rate × dwell-zone traffic. Use the framework below to model a placement.",
      headers: ["Input variable", "Typical range", "Source"],
      rows: [
        ["Daily passenger throughput at zone", "5K-50K", "Airport concession map + ACI-NA stats"],
        ["Dwell-time exposure %", "10-25%", "Airport dwell-study or concessionaire data"],
        ["Conversion rate (impression → tx)", "0.05-0.30%", "Brookstone / Best Buy Express disclosed benchmarks"],
        ["Average transaction value (ATV)", "$15-$120", "SKU-mix dependent"],
        ["COGS % of revenue", "55-70%", "Premium electronics 60-70%; beauty 55-65%"],
        ["Concession fee (MAG + % rent)", "10-20% of gross", "Airport concession contract"],
        ["Operating + service overhead", "10-15% of gross", "Field service + replenishment"],
        ["Operator margin target", "5-15% of gross", "Sustainable threshold for capex amortization"],
      ],
    },
    {
      heading: "6. Concession compliance",
      items: [
        { check: "Sub-concession agreement with existing terminal concessionaire (or direct concession via airport RFP)." },
        { check: "ACDBE plan documented where airport receives FAA AIP funding (49 CFR Part 23)." },
        { check: "TSA SIDA / AOA badging for all field-service staff (49 CFR 1542); STA clearance current." },
        { check: "Airport insurance certificate ≥ $5M GL with airport additional insured." },
        { check: "Buy-local / local-brand mandate compliance where applicable (e.g., SFO, JFK, LAX)." },
        { check: "Monthly gross-sales statement + percentage-rent remittance; annual audit." },
      ],
    },
    {
      heading: "7. SKU selection framework",
      items: [
        { label: "Travel-utility electronics", value: "Phone chargers (USB-C / Lightning), portable battery packs, noise-canceling earbuds, USB hubs — high turn, low ATV ($25-$80)." },
        { label: "Premium beauty / personal care", value: "Travel-size luxury skincare, fragrance, premium cosmetics — mid turn, mid-high ATV ($25-$95)." },
        { label: "Accessories + comfort", value: "Memory-foam neck pillows, premium eye masks, designer earplugs — high turn, low-mid ATV ($20-$60)." },
        { label: "Premium F&B (capable cabinets)", value: "Half-bottle premium wine, artisan chocolate, premium tea — high turn, mid ATV ($15-$45)." },
        { label: "Watches / jewelry / sunglasses", value: "Restricted to top gateways; low turn, high ATV ($150-$500+); requires lockable secure cabinet." },
      ],
    },
    {
      heading: "8. Capability framing",
      paragraph:
        "We are equipped to identify operators and equipment vendors that can deliver luxury airport vending against the framework above. Specific terminal placement requires airport concession authority and existing-concessionaire coordination; capability framing only, no representation of pre-placed work.",
    },
  ],
  footer:
    "Traffic thresholds, ATV ranges, and concession fee shares are reference values. Confirm against the specific airport's concession office and demographic data.",
});

console.log("wrote " + "luxury-item-vending-at-airports");
