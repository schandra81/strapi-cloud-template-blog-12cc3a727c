import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "interactive-vending-fan-engagement",
  assetType: "playbook",
  title: "Interactive Venue Vending Fan-Engagement Framework",
  subtitle: "Technology category combinations, sponsor activation, mobile app integration, and operator RFP template",
  intro:
    "Interactive vending at entertainment venues is a marketing surface that delivers refreshment. Touchscreen kiosks, ticket-integrated payment, sponsor-activation games, and mobile-app loyalty turn a transactional machine into a fan-engagement asset that venue marketing and sponsor sales can monetize. This framework codifies the technology stack, sponsor-activation playbook, mobile-app integration specification, and the RFP scoring criteria that select an operator partner capable of executing interactive programs.",
  sections: [
    {
      heading: "1. Technology category combinations",
      paragraph:
        "Interactive vending pulls together five technology categories. The combination determines what the venue can do — and what the operator must be able to support.",
      headers: ["Category", "Function", "Typical providers", "Sponsor-activation role"],
      rows: [
        ["Touchscreen kiosk", "Product browse + checkout + content", "Crane Merchant Media, AMS Sensit, Mashgin, AiFi, Standard Cognition", "Sponsor video, brand panel, promo content"],
        ["Telemetry + payment", "Cashless transactions + uptime + transactions log", "Cantaloupe Seed Pro, Nayax VPOS Touch, USA Technologies eSuds", "Transaction-level attribution to sponsor"],
        ["Ticketing / wallet integration", "Tap-to-pay with venue mobile wallet", "Ticketmaster Pro, AXS, SeatGeek, Tappit, Token Stadium", "Free-with-ticket promos, loyalty redemption"],
        ["Computer-vision checkout", "Walk-up grab-and-go (no scan, no tap)", "AiFi, Standard Cognition, Grabango, Trigo, Amazon Just Walk Out", "Premium activation; brand-experience flagship"],
        ["Mobile app integration", "Pre-order, loyalty, sponsor content, prize", "Venue-native app or platform (VenueNext, KORE, Oracle Simphony)", "In-app activation, push messaging, gamification"],
      ],
    },
    {
      heading: "2. Sponsor-activation playbook",
      paragraph:
        "Interactive vending becomes a sponsor inventory asset. The venue marketing or sponsor-sales team monetizes the touchscreen, the receipt, and the mobile-app touchpoint.",
      items: [
        { number: 1, title: "Sponsor inventory definition", description: "Define what is sellable as sponsor inventory: kiosk screen panels (5-15 second loops between purchase), receipt content (printed promo code), mobile-app push (post-purchase confirmation), prize-fulfillment (winner of in-app game receives free product at kiosk), category exclusivity (sole soft-drink, sole snack-brand)." },
        { number: 2, title: "Pricing model", description: "Sponsor inventory priced on impression basis (CPM $5-$25 typical), category-exclusivity basis (flat $50K-$500K/year depending on venue scale), or activation-program basis (custom). Sponsor sales team prices using venue's standard CPM rate-card." },
        { number: 3, title: "Measurement and reporting", description: "Sponsor receives quarterly report with impressions, redemptions, attributable purchases, and customer-survey lift where applicable. Telemetry-driven; not survey-driven." },
        { number: 4, title: "Sponsor approval workflow", description: "Sponsor creative reviewed against venue brand standards and OEM/league brand standards (NFL, NBA, MLB, NHL, NCAA all have brand-experience rules). 14-day review SLA typical." },
        { number: 5, title: "Activation programs", description: "Beyond static branding: gamified promos (spin-to-win at kiosk for free product or discount), loyalty-tier rewards (premium ticket holders get free first-purchase), team-performance triggers (free product when home team scores 100+), event-tied promos (sponsor product paired with event)." },
      ],
    },
    {
      heading: "3. Mobile app integration specification",
      items: [
        { label: "Pre-order with kiosk pickup", value: "Fan orders through venue mobile app during event; kiosk dispenses on arrival. Integration with venue ticketing wallet (Ticketmaster Pro, AXS, SeatGeek). API standard: REST + OAuth 2.0; transaction signed with HMAC-SHA256." },
        { label: "Loyalty integration", value: "Fan loyalty ID joined to vending transaction. Points earned per purchase; tier benefits redeemed at kiosk (e.g., 10% off for season-ticket holders). PII handling: hashed loyalty ID only in operator telemetry; reversal happens in venue CRM." },
        { label: "Push messaging", value: "Post-purchase confirmation push (transactional, not marketing); event-tied promo push during pre-event window; sponsor activation push (with explicit fan opt-in)." },
        { label: "In-app gamification", value: "Spin-to-win, trivia, prediction games tied to event. Prize redeemed at kiosk via one-time QR code. Lottery/sweepstakes compliance: state-by-state lottery law applies; venue legal counsel approves prize structure before each campaign." },
        { label: "Pre-event prediction games", value: "Hub-app pre-game predictions earn 'fan currency' redeemable for vending discounts or free product at kiosk. Drives pre-event engagement and post-purchase data." },
      ],
    },
    {
      heading: "4. Equipment specification",
      paragraph:
        "Interactive kiosk equipment must withstand high-traffic venue use, support multiple payment methods including venue wallet, and integrate with the venue network.",
      items: [
        { label: "Kiosk class", value: "Crane Merchant Media (touchscreen integrated), AMS Sensit Touch, Mashgin (computer-vision counter-top), AiFi nanostore (walk-in micromarket), Standard Cognition camera-network checkout." },
        { label: "Payment processors", value: "EMV contactless (Apple Pay, Google Pay, Samsung Pay, card tap), QR-pay (venue wallet), gift-card and stored-value (venue-native or third-party), cash optional for ADA backup. PCI DSS 4.0 certified." },
        { label: "Network", value: "Dual connectivity: wired ethernet (1 Gbps minimum) and cellular backup. Hardened firewall with venue ITS approval; no direct internet access for sponsor or wallet servers, all traffic via venue DMZ." },
        { label: "Display", value: "21-32 inch capacitive touchscreen, ≥ 1080p, ≥ 400 nit brightness for arena lighting, anti-glare coating. ADA Section 503 sound-output for visually impaired users; ADA Section 308 reach range compliance." },
        { label: "Dispensing", value: "Refrigerated and ambient SKUs in one cabinet; spiral or ferris-wheel dispenser; sensor-confirmed delivery to anti-theft drop bin with anti-pry hood." },
      ],
    },
    {
      heading: "5. Operator RFP template (interactive program scoring)",
      headers: ["Scoring category", "Weight", "Pass/fail or scored", "Documentation"],
      rows: [
        ["Interactive kiosk equipment portfolio", "15%", "Scored 1-5", "Equipment spec sheets, references, demo invite"],
        ["Telemetry stack and BI integration", "15%", "Scored 1-5", "Telemetry vendor, API documentation, BI export examples"],
        ["Mobile-app integration capability", "15%", "Scored 1-5", "Existing venue integrations, API documentation, demo invite"],
        ["Sponsor-activation experience", "10%", "Scored 1-5", "Past sponsor activations, references"],
        ["Uptime SLA", "10%", "≥ 97% required", "SLA terms, penalty schedule"],
        ["PCI DSS 4.0 + SOC 2 compliance", "10%", "Pass/fail", "Current attestation report"],
        ["Event-day route capacity", "10%", "Scored 1-5", "Route plan, surge-crew availability"],
        ["ADA compliance attestation", "5%", "Pass/fail", "Written attestation + VPAT"],
        ["Revenue share + activation revenue split", "10%", "Scored 1-5", "Commercial terms sheet"],
      ],
    },
    {
      heading: "6. Data and analytics integration",
      items: [
        { check: "Telemetry feed to venue data warehouse: nightly SFTP or hourly REST." },
        { check: "Event-tagged transactions (event ID joined from venue ticketing system)." },
        { check: "Sponsor-activation impression and redemption log feed to sponsor-sales BI." },
        { check: "Loyalty-ID hashed join key with venue CRM." },
        { check: "Quarterly per-event analytics report (per-cap, top SKUs, sponsor activation results) shared with venue marketing." },
        { check: "PCI DSS 4.0 + SOC 2 Type II annual attestation from operator and telemetry provider." },
      ],
    },
    {
      heading: "7. ROI and measurement",
      headers: ["Metric", "Baseline benchmark", "Measurement source"],
      rows: [
        ["Vending per-cap revenue", "$0.30-$1.50 by event type (per Pollstar Pro and VenuesNow tables)", "Telemetry + ticketing"],
        ["Sponsor activation revenue", "5-15% of program total (when sponsor-sales monetizes)", "Sponsor-sales contracts"],
        ["Mobile-app integration uplift", "+15-30% per-cap on machines with app integration vs. baseline", "A/B test of integrated vs. non-integrated"],
        ["Fan satisfaction (NPS or in-app rating)", "+5-10 points on venue NPS for amenity question", "Venue NPS survey"],
        ["Concession alignment (vending + concession total per-cap)", "+5-15% vs. concession-only baseline", "POS + telemetry joined"],
      ],
    },
  ],
  footer:
    "This framework is a working operational reference. Calibrate the technology stack, sponsor inventory, and RFP scoring to your venue type, sponsor strategy, and concession program targets.",
});

console.log("wrote "+"interactive-vending-fan-engagement");
