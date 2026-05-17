import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "ai-vending-coolers-for-hotels",
  assetType: "pack",
  title: "Hotel AI Cooler Evaluation Pack",
  subtitle: "Revenue model, PMS integration checklist, brand-finish design guide, and front-desk SOP",
  intro:
    "Hotel AI coolers replace the traditional in-room minibar and lobby pantry with a 24/7 unattended grab-and-go that posts to PMS and the guest folio. This pack bundles the four working documents a hotel asset manager needs: revenue model, PMS integration checklist, brand-finish design guide, and front-desk operating procedure.",
  sections: [
    {
      heading: "1. Hotel revenue model — by property type",
      paragraph:
        "Revenue model assumes one cooler per 75-150 keys depending on layout. Adjust transaction velocity for ADR tier and average length of stay.",
      headers: ["Property type", "Keys per cooler", "Avg transactions/day", "Avg basket", "Monthly gross", "Commission to hotel (typical 8-15%)"],
      rows: [
        ["Select-service / limited (3-star)", "100-150", "20-35", "$7.50", "$4.5K-$7.9K", "$360-$1,185"],
        ["Upscale full-service (4-star)", "75-125", "35-60", "$9.50", "$10.0K-$17.1K", "$800-$2,565"],
        ["Luxury / resort (5-star)", "50-100", "50-90", "$14.00", "$21.0K-$37.8K", "$1,680-$5,670"],
        ["Extended-stay", "100-200", "40-70", "$11.00", "$13.2K-$23.1K", "$1,055-$3,465"],
      ],
    },
    {
      heading: "2. PMS integration checklist",
      paragraph:
        "AI cooler should post each transaction to the PMS within 60 seconds and reconcile nightly. Confirm operator can attest to integration with the hotel's specific PMS version.",
      items: [
        { check: "PMS family supported: Oracle Opera Cloud, Mews, Cloudbeds, Stayntouch, infor HMS, Maestro, Agilysys, RoomKeyPMS, or proprietary." },
        { check: "Integration method: OXI (Opera Exchange Interface) v2.x, Mews Connector API, HTNG charge-posting standard, or HFTP guest-folio-charge spec." },
        { check: "Posting cadence: transaction posts to folio within 60 seconds of completion; failure queue retries with operator + front-desk alert." },
        { check: "Identity binding: room number + last name verification at first purchase, or app-bound account on check-in; tokenized at cooler, no PAN at PMS." },
        { check: "Settlement: nightly reconciliation file (CSV or PMS posting report) to hotel A/R; dispute window 7 days." },
        { check: "PCI scope: cooler stays out of PMS PCI scope; AOC + SAQ-B-IP on file from operator." },
        { check: "Tax + service charge: cooler applies hotel-specific sales tax + room-service charge (if applicable) per state and city code." },
      ],
    },
    {
      heading: "3. Brand-finish + design guide",
      paragraph:
        "Hotel AI coolers should match the property brand standard. Most platforms offer custom cabinet wrap, top header, lighting tone, and digital signage on the door.",
      items: [
        { label: "Cabinet wrap", value: "3M or Avery vinyl, full-color, replaceable; hotel supplies brand-aligned art (4-5 color minimum); typical lead time 14 days." },
        { label: "Header / topper", value: "Backlit graphic 24-36 in wide; hotel logo + 'For Guests' or pantry name; LED color temperature matched to lobby (2700K-3000K typical)." },
        { label: "Door digital signage", value: "10-15 in screen displays brand reel, daily specials, weather, and current promotions; CMS controlled by operator with hotel-approved content." },
        { label: "Interior lighting", value: "Dimmable LED 4000-5000K product-presentation lighting; auto-dim during overnight hours to lobby spec." },
        { label: "Glass front + frame", value: "Brushed stainless, matte black, brass-tone, or wood-grain laminate frame options; tempered low-iron glass for accurate product color." },
        { label: "Materials + ADA", value: "Anti-fingerprint coatings, accessible operating parts 15-48 in AFF, ≤ 5 lbf operating force, accessible reach for card reader + dispense bin." },
      ],
    },
    {
      heading: "4. Planogram framework — 80 SKU hotel mix",
      items: [
        { label: "Premium beverage — 30%", value: "Sparkling water (Topo Chico, Perrier), still water (FIJI, Voss), kombucha, cold brew, premium juice, RTD wine/spirits (where licensed)." },
        { label: "Grab-and-go meal — 20%", value: "Salad bowl, sandwich, sushi, charcuterie tray, hummus + veg cup, breakfast burrito, overnight oats. Premium price tier $9-$16." },
        { label: "Snack + indulgent — 15%", value: "Premium chocolate, single-serve cookies, gourmet popcorn, cheese plate, dried fruit + nut mix." },
        { label: "Local + curated — 10%", value: "Local-bakery item, regional snack, branded hotel merchandise (mug, tee, plush)." },
        { label: "Wellness + recovery — 10%", value: "Electrolyte, protein, kombucha, melatonin, hangover-recovery shot, eye mask, earplugs." },
        { label: "Convenience + emergency — 10%", value: "Toothbrush + paste, OTC pain reliever, phone charger, contact-lens kit, condom + lubricant pack." },
        { label: "Late-night comfort — 5%", value: "Single-serve mac-and-cheese, ramen cup, instant noodles, candy bars, chips." },
      ],
    },
    {
      heading: "5. Front-desk SOP",
      items: [
        { number: 1, title: "Check-in script", description: "'There's a 24/7 pantry in the lobby/floor X. It posts to your room with a tap of your phone or key. Free first purchase with the QR card in your welcome packet.' (15 sec)" },
        { number: 2, title: "First-purchase friction handling", description: "Guest can't get cooler to open: front desk confirms room status + folio active, calls operator support, offers complimentary first item from front desk while resolved." },
        { number: 3, title: "Refund / dispute", description: "Guest disputes charge: front desk pulls cooler transaction screenshot from operator portal, removes charge from folio immediately, files dispute with operator for credit-back to hotel." },
        { number: 4, title: "Stockout report", description: "Front desk or housekeeping spots empty shelves: photo + slot ID texted to operator dispatch number; operator confirms next-visit ETA." },
        { number: 5, title: "Daily reconciliation", description: "Night audit reviews cooler posting report against PMS folio postings; flags exceptions for AM follow-up with operator." },
      ],
    },
    {
      heading: "6. Operator selection criteria",
      items: [
        { check: "Hospitality reference accounts: 3+ active hotel placements, including same brand family or comparable ADR tier." },
        { check: "PMS integration certification with hotel's specific PMS family." },
        { check: "Commission tier negotiated: 8-15% of gross revenue typical, scaled by volume; lower tier if operator funds cabinet + cabinet wrap." },
        { check: "Telemetry + uptime SLA: 98%+, ≤ 30 min offline alert, ≤ 4 hr Tier-1 response for hospitality placements." },
        { check: "Insurance: $2M GL + $1M umbrella, additional-insured to hotel + ownership + management." },
        { check: "Brand-approval process: operator commits to design-review cycle with hotel brand standards team." },
        { check: "STR/Smith Travel reporting compatibility: F&B revenue reportable to hotel asset manager under appropriate category." },
      ],
    },
    {
      heading: "7. Install + launch plan",
      items: [
        { number: 1, title: "T-45: brand-approval submission", description: "Operator submits cabinet wrap + signage to hotel brand standards; typical brand-approval cycle 14-21 days." },
        { number: 2, title: "T-30: PMS integration test", description: "Operator + PMS vendor + hotel IT run integration test in staging environment; charge-posting end-to-end test." },
        { number: 3, title: "T-14: install + commissioning", description: "Cooler delivered, installed, vision-system calibrated with 200+ training transactions per SKU, network + PMS posting validated." },
        { number: 4, title: "T-7: front-desk + housekeeping training", description: "60-min training, FAQ printed, escalation phone numbers, free-first-purchase QR cards stocked at desk." },
        { number: 5, title: "T-0: launch", description: "Lobby signage live, in-room collateral live, first-week monitoring with operator on-call." },
        { number: 6, title: "T+30: planogram review", description: "First-month velocity report; bottom-15 SKUs replaced; brand-approved new SKUs added." },
      ],
    },
    {
      heading: "8. Quarterly business review checklist",
      items: [
        { check: "Per-cooler revenue, basket, transaction count" },
        { check: "PMS posting accuracy (target ≥ 99.5%); dispute count" },
        { check: "Uptime by month; vision-system accuracy" },
        { check: "Local + curated SKU rotation by season" },
        { check: "Guest-satisfaction signal (TripAdvisor / Google review mentions, in-app feedback)" },
        { check: "Commission tier review based on volume thresholds" },
        { check: "Brand-standard compliance audit (cabinet wrap condition, lighting, signage)" },
      ],
    },
  ],
  footer:
    "This pack is informational. Hotel asset manager should confirm cooler placement is consistent with brand standards, franchise agreement, and applicable F&B licensing. Operator capability claims should be verified through reference calls with comparable properties and through written attestation before contract execution.",
});

console.log("wrote " + "ai-vending-coolers-for-hotels");
