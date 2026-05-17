import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-for-shared-workspaces",
  assetType: "pack",
  title: "Shared Workspace Vending Pack",
  subtitle: "Operator-neutral + tenant-management integration + multi-language + dietary inclusivity + hospitality-grade aesthetic",
  intro:
    "Shared workspaces — coworking, executive suites, business incubators, and mixed-use commercial — have requirements that traditional single-tenant office vending models cannot meet. This pack covers the five specifications that distinguish a coworking-ready vending program: operator neutrality, tenant-management-system integration, multi-language UX, dietary inclusivity for diverse populations, and hospitality-grade aesthetic.",
  sections: [
    {
      heading: "1. Operator-neutral payment + access",
      paragraph:
        "Coworking members + their guests + day-pass holders + drop-in users + tenant employees all need access without forced enrollment in a single operator's app. The program must accept any reasonable payment method.",
      items: [
        { check: "Tap-to-pay contactless (Apple Pay, Google Pay, Samsung Pay) without app enrollment" },
        { check: "Credit + debit card swipe / tap (Visa, MC, Amex, Discover)" },
        { check: "QR code Pay-with-Phone (PayPal, Venmo, CashApp via vendor like Cantaloupe Pay or Crane Pay)" },
        { check: "Building access badge tap (HID, LEGIC, Mifare) integrated with tenant-management system" },
        { check: "Member-app option (optional, never required); guest checkout always available" },
        { check: "Cash + bill acceptor on at least one machine per floor (residual demand 5-15%)" },
        { check: "Refund self-serve via QR + SMS (no app install required)" },
      ],
    },
    {
      heading: "2. Tenant-management system (TMS) integration",
      paragraph:
        "Modern coworking + flex-office operators run on Nexudus, Optix, Cobot, OfficeRnD, Andcards, or Yardi Elevate. Vending should integrate so members + tenants can pay via account credits + receive monthly invoicing.",
      headers: ["Platform", "Integration approach", "Common operator partners"],
      rows: [
        ["Nexudus", "REST + OAuth; member tap-to-pay debits credit balance", "Cantaloupe Seed, 365 Pay"],
        ["Optix", "Webhook + REST", "365 Pay, USConnect"],
        ["Cobot", "API + Zapier middleware", "365 Pay"],
        ["OfficeRnD", "REST + member-ID matching", "Cantaloupe Seed, 365 Pay"],
        ["Andcards", "REST + member badge integration", "Cantaloupe Seed"],
        ["Yardi Elevate (Kube, Wun, FlexElevate)", "REST + Yardi commerce", "Cantaloupe, USConnect"],
      ],
    },
    {
      heading: "3. Multi-language UX",
      paragraph:
        "Coworking member populations skew international + multilingual. Machine UX should support at minimum English + Spanish + simplified Chinese; add languages by membership composition.",
      items: [
        { label: "Machine UI language", value: "Touchscreen UI supports language toggle (icon-based + at least 3 languages). Crane Merchant Media + AMS Sensit III + AWM Smart Shelf support 8-12 languages." },
        { label: "Signage", value: "Photo-realistic SKU images > text labels. Where text required, dual-language (English + most-common second language at the site)." },
        { label: "Allergen + ingredient labeling", value: "Top-9 FALCPA labeling visible per SKU. Bilingual allergen card available on request." },
        { label: "Member app + push", value: "Operator app supports member-language preference; push notifications in member's preferred language." },
        { label: "Support + refund", value: "Multi-language SMS-to-refund + multilingual support phone line. Auto-translate web chat for written support." },
      ],
    },
    {
      heading: "4. Dietary inclusivity for diverse populations",
      paragraph:
        "Coworking diet diversity exceeds typical single-tenant offices. Plan planogram with 6 dietary segments visible at every machine.",
      headers: ["Dietary segment", "Target % facings", "Example SKUs"],
      rows: [
        ["Vegan", "20-30%", "GoMacro Mini, RXBAR, Skinny Pop, Bare Apple Chips, Olipop, Califia Farms"],
        ["Gluten-free", "20-30%", "RXBAR, Larabar, Chomps Jerky, KIND Healthy Grains (select)"],
        ["Low-sugar / diabetes-aware", "30-40%", "Spindrift, sparkling water, KIND Nuts & Spices, Wonderful Pistachios"],
        ["Kosher (OU, OK, Star-K)", "60-80%", "Most national brands; verify per SKU"],
        ["Halal (IFANCA, HMA)", "30-50%", "Verify per SKU; refrigerated meat snacks require explicit certification"],
        ["International / regional preference", "10-20%", "Japanese (Kasugai), Indian (Haldiram's), Mexican (Goya Healthier), Latin (Maizoro), African + Middle Eastern offerings"],
      ],
    },
    {
      heading: "5. Hospitality-grade aesthetic",
      paragraph:
        "Coworking + flex-office competes on member experience. Vending must read as hospitality + retail, not industrial.",
      items: [
        { check: "Glass-front + open-front coolers (not pushbutton legacy)" },
        { check: "LED interior lighting at color-accurate 6500 K" },
        { check: "Wood-grain or brass-trim wrap; coordinated with workspace branding" },
        { check: "Quiet operation — compressor sound level < 50 dB at 3 ft" },
        { check: "AI camera cooler (AWM Smart Shelf, 365 Pico, Cantaloupe Go Mini) where budget allows — true grab-and-go feel" },
        { check: "Integrated planters + neighboring lounge seating turn the area into a micro-pantry destination" },
        { check: "Telemetry-driven planogram refresh keeps it looking 'always-stocked, never-stale'" },
        { check: "Recyclable + compostable packaging dominant — visible sustainability matters to member retention" },
      ],
    },
    {
      heading: "6. Equipment + capacity sizing",
      headers: ["Site size", "Recommended equipment", "Capacity"],
      rows: [
        ["Small (< 50 desks)", "1 combo (snack + bev refrigerated) + 1 bean-to-cup coffee", "30 SKUs + 100+ drinks/day"],
        ["Medium (50-150 desks)", "1 ambient snack + 1 CRBV + 1 glass-front refrigerated + 1 bean-to-cup coffee", "80-100 SKUs"],
        ["Large (150-400 desks)", "Above + 1 AI camera cooler (200-300 SKUs) + 2 bean-to-cup coffee + cold-brew tap", "200-300 SKUs"],
        ["Flagship (400+ desks)", "Micro-market + barista bar + AI cooler + pantry-style open shelving + bottle-fill stations on every floor", "300-400+ SKUs"],
      ],
    },
    {
      heading: "7. Revenue + cost model",
      items: [
        { label: "Revenue share to landlord / operator", value: "Coworking + flex-office hosts typically take 10-25% commission on transactions. Some prefer flat-rate equipment fee + 100% revenue to vending operator." },
        { label: "Member-account credit", value: "Where TMS integrated, members receive monthly account credit (e.g., $20-50/month for premium membership tier). Credit redeems against vending; landlord receives invoice from operator." },
        { label: "Free-vend programming for member retention", value: "Quarterly free-coffee day, monthly featured-snack giveaway, member-appreciation week. Cost: $4-10/member/month subsidized." },
        { label: "Drop-in / day-pass surcharge", value: "Day-pass holders pay full retail (vs. members at credit-discounted rate). Differentiates membership value." },
      ],
    },
    {
      heading: "8. Operator selection — coworking-specific criteria",
      items: [
        { check: "Operator integrates with at least 2 of: Nexudus, Optix, Cobot, OfficeRnD, Andcards, Yardi Elevate" },
        { check: "Multi-language machine UX (≥ 3 languages standard)" },
        { check: "Operator-neutral payment stack (tap + card + QR + cash all accepted; no forced app)" },
        { check: "AI camera cooler experience demonstrated (or premium glass-front grab-and-go)" },
        { check: "Diverse SKU catalog with international + dietary segment coverage" },
        { check: "ENERGY STAR + R-290 equipment standard" },
        { check: "Hospitality-grade aesthetic samples on site visit" },
        { check: "References from 3+ comparable coworking + flex-office hosts (WeWork, Industrious, Convene, Mindspace, regional brands) with ≥ 18 months tenure" },
      ],
    },
    {
      heading: "9. Service SLA + cadence",
      items: [
        { number: 1, title: "Restock cadence", description: "Telemetry-driven 2-4×/week; daily for flagship. AI camera cooler refilled daily to avoid empty visual." },
        { number: 2, title: "Tier 1 SLA — offline, payment, temperature", description: "<4 hr acknowledgement, <24 hr resolution. Loaner equipment within 24 hr for any AI cooler outage." },
        { number: 3, title: "Tier 2 SLA — stockout, planogram refresh", description: "<24 hr acknowledgement, <48 hr resolution." },
        { number: 4, title: "QBR cadence", description: "Quarterly with landlord + community-manager; reviews uptime, velocity, member feedback, planogram refresh." },
      ],
    },
  ],
  footer:
    "This pack is informational and operator-neutral. LetUsVending helps coworking + flex-office + landlord teams scope hospitality-grade vending programs with operators positioned to integrate with tenant-management systems.",
});

console.log("wrote " + "vending-for-shared-workspaces");
