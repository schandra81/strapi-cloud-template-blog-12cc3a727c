import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "branded-vending-machines-for-gyms",
  assetType: "playbook",
  title: "Branded Gym Vending Playbook",
  subtitle: "Wrap design, sponsor coordination, member-experience validation, and program lifecycle",
  intro:
    "Branded vending in a fitness facility is a member-experience surface and a sponsorship asset. The wrap, planogram, and signage signal what the gym brand stands for; the sponsor partner offsets equipment and commission while extending reach. This playbook codifies branding tiers, wrap fabrication, sponsor coordination, member-experience validation, and the operator agreement structures that keep branded programs aligned with the gym's identity.",
  sections: [
    {
      heading: "1. Branding tiers in gym vending",
      paragraph:
        "Gym vending branding falls into one of three or four tiers. Each maps to a specific cost, control, and member-experience profile.",
      headers: ["Tier", "Branding source", "Brand control", "Typical economics", "Best fit"],
      rows: [
        ["Tier 1 — Gym-branded", "Gym brand wrap + colors + logo", "Gym controls; operator paints/wraps", "$400-$1,200 wrap one-time", "Boutique and independent gyms wanting brand consistency"],
        ["Tier 2 — Co-branded gym + sponsor", "Gym brand + sponsor (Gatorade, Built Bar, Vitamin Water)", "Joint approval; sponsor co-funds wrap", "Sponsor covers 50-100% of wrap cost", "Mid-size clubs with sponsor relationship"],
        ["Tier 3 — Sponsor-led", "Beverage or supplement brand wrap + product exclusivity", "Sponsor controls equipment", "Free equipment + 60-90 day exclusivity", "High-traffic clubs aligned with sponsor target demographic"],
        ["Tier 4 — Unbranded operator", "Operator standard machine", "Operator brand visible", "Lowest", "Smaller clubs, budget tier, or where club lacks brand-design budget"],
      ],
    },
    {
      heading: "2. Wrap design specification",
      paragraph:
        "A wrap must survive 5-7 years of gym-environment exposure (humidity, sweat, cleaning chemicals) and remain on-brand throughout.",
      items: [
        { label: "Wrap material", value: "3M IJ180Cv3 cast-vinyl wrap with 3M 8520 overlaminate; rated 7+ year outdoor durability and high-humidity environments. UV-stable inks (Mimaki UJV or HP Latex)." },
        { label: "Cleaning compatibility", value: "Wrap withstands EPA-registered gym sanitizers (quaternary ammonium, hydrogen peroxide) and isopropyl alcohol cleaning. Verified by installer with sample wipe-down test before final design approval." },
        { label: "Color matching", value: "Pantone-matched to gym brand color. Operator provides color-proof for gym sign-off before production. Multi-club groups (Equinox, Life Time, LA Fitness, Anytime Fitness, Planet Fitness) use brand-standards document." },
        { label: "Compliance preservation", value: "FCC, UL, FDA Food Code labels and ADA Section 308 reach-range markings remain visible after wrap. Operator-name signage and refund-phone signage preserved per state vending regulation." },
        { label: "Installation", value: "Wrap applied by certified 3M Preferred Graphics Installer. Cabinet cleaned with isopropyl alcohol pre-application. Bubble-free, edge-sealed installation with 24-hour cure before machine returns to service." },
      ],
    },
    {
      heading: "3. Sponsor coordination",
      paragraph:
        "Sponsor-funded equipment changes the operator agreement and the gym's category exclusivity. Negotiate the sponsorship terms before signing the operator agreement to avoid conflicts.",
      items: [
        { number: 1, title: "Sponsor candidate categories", description: "Beverage (Coca-Cola, Pepsi, Gatorade, BodyArmor, Celsius), supplement (Quest, RXBAR, Built Bar, Optimum Nutrition, Premier Protein, KIND), wellness (Vitamin Water, Bai, Liquid IV, Pedialyte). Pick categories aligned with the gym demographic and program (e.g., HIIT clubs lean toward hydration and protein; yoga toward wellness)." },
        { number: 2, title: "Exclusivity period", description: "Typical sponsor agreement is 24-36 months with 60-90 day category exclusivity per period. Operator agreement must accommodate restricted planogram during exclusivity window." },
        { number: 3, title: "Co-funding structure", description: "Sponsor covers equipment lease + wrap cost + marketing co-fund. Operator typically continues running route service and earning a reduced commission. Gym still receives commission, often offset by the equipment-cost contribution." },
        { number: 4, title: "Sponsor approval workflow", description: "Sponsor reviews wrap creative against brand standards (14-day review SLA typical). Sponsor sends quarterly sales reports back to operator for category review." },
        { number: 5, title: "Multi-club groups", description: "Larger groups (Life Time, Equinox, LA Fitness) negotiate group-level sponsorships that span 50+ clubs. Single sponsor agreement covers wrap, product exclusivity, and co-marketing across all rooftops." },
      ],
    },
    {
      heading: "4. Member-experience validation",
      items: [
        { check: "Quarterly member survey (5-question) covers vending: usage frequency, satisfaction with selection, satisfaction with pricing, brand-perception alignment with gym, suggestion field." },
        { check: "Member NPS lift on amenity question tracked quarter-over-quarter; sponsor co-marketing is correlated with member-engagement lift in published club-industry case studies." },
        { check: "Suggestion-channel via QR code on machine; operator response within 14 days; 25%+ of qualifying requests added to planogram." },
        { check: "New-member walkthrough: front-desk team explicitly mentions vending program and any complimentary post-workout offerings. Sponsor co-marketing often includes free-product token for new members." },
        { check: "Annual member focus-group includes vending program review for boutique and premium clubs." },
        { check: "Negative-comment trigger: > 2 negative comments per quarter triggers operator planogram refresh or wrap update review." },
      ],
    },
    {
      heading: "5. Planogram alignment with gym demographic",
      paragraph:
        "Branded planogram reflects both sponsor portfolio and member demographic. The mix between sponsor-exclusive and complementary SKUs is calibrated to club traffic and program mix.",
      headers: ["Club type", "Hydration share", "Protein share", "Sweet/recovery share", "Notes"],
      rows: [
        ["Big-box (LA Fitness, 24 Hour, Crunch, Planet Fitness)", "35%", "20%", "15%", "Broad demographic; classic vending mix with hydration weighted up"],
        ["Boutique HIIT (F45, Orangetheory, Barry's, Burn Boot Camp)", "30%", "30%", "10%", "Protein and recovery emphasized; sponsor often supplement brand"],
        ["Premium full-service (Equinox, Life Time, Lifestyle clubs)", "25%", "20%", "15%", "Premium-brand SKUs; complementary curated cooler"],
        ["Yoga / wellness (CorePower, Y7, Modo)", "30%", "10%", "10%", "Wellness SKUs, low-sugar, plant-protein emphasis"],
        ["CrossFit / strength", "25%", "35%", "10%", "High-protein, high-calorie; jerky, RXBAR, Quest"],
      ],
    },
    {
      heading: "6. Operator agreement for branded programs",
      headers: ["Provision", "Unbranded baseline", "Branded variation"],
      rows: [
        ["Equipment ownership", "Operator owns", "Tier 3 (sponsor-led) — sponsor owns; operator services"],
        ["Product exclusivity", "Operator selects", "Tier 2-3 — 60-90 day sponsor exclusivity"],
        ["Brand-standards review", "Operator standard", "Tier 1-3 — gym + sponsor wrap approval before any signage change"],
        ["Term", "12-month rolling", "Tier 3 — 24-36 month sponsorship aligned with equipment depreciation"],
        ["Removal cost", "Operator at expiration", "Tier 3 — sponsor recovers branded equipment; gym not charged"],
        ["Member-data sharing", "None", "Tier 2-3 — anonymized purchase data shared with sponsor (PII held back)"],
      ],
    },
    {
      heading: "7. Program lifecycle and refresh",
      items: [
        { number: 1, title: "Year 1 — Launch", description: "Wrap install, planogram established, member-survey baseline captured. First quarter member-feedback review with operator + sponsor." },
        { number: 2, title: "Year 1-2 — Optimization", description: "Quarterly planogram refresh based on telemetry velocity. Sponsor co-marketing campaigns launched. Member NPS measured." },
        { number: 3, title: "Year 2-3 — Refresh", description: "Wrap inspection for fade or damage. Brand-standards refresh if sponsor or gym brand has updated. Planogram refresh to match member demographic evolution." },
        { number: 4, title: "Year 3-5 — Renewal or recompete", description: "Sponsor agreement renewal or recompete decision. Operator agreement renewal with updated SLA. Equipment lifecycle review (refer to vending uptime playbook)." },
        { number: 5, title: "Year 5+ — Equipment replacement", description: "Modern OEM replacement with refreshed wrap. New equipment baseline for next 5-7 year cycle." },
      ],
    },
  ],
  footer:
    "This playbook is a working operational reference. Calibrate the branding tier, sponsor partnership, and operator agreement to your gym's brand, member demographic, and program targets.",
});

console.log("wrote "+"branded-vending-machines-for-gyms");
