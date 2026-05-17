import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "branding-office-micro-market",
  assetType: "playbook",
  title: "Office Micro-Market Branding Playbook",
  subtitle: "Palette, signage, kiosk skin, wall graphics, accessibility, and workplace navigation integration",
  intro:
    "A branded micro-market reads as part of the workplace — not a vendor installation. This playbook codifies palette, signage, kiosk skin, wall graphics, and accessibility decisions against ADA Title III 2010 Standards, WCAG 2.2 AA, ANSI Z535.1 safety color, and ISO 7010 wayfinding so design choices clear procurement and facilities review the first time.",
  sections: [
    {
      heading: "1. Brand-system inputs",
      paragraph:
        "Start with the corporate brand book. Pull the items below before any visual design begins so the operator's design partner is briefed correctly.",
      items: [
        { label: "Color tokens", value: "Primary, secondary, neutral, accent. Provide hex + Pantone Coated + CMYK + RAL for printed and powder-coated surfaces." },
        { label: "Typography", value: "Display + body type families with licensing notes. Provide TTF/OTF files for kiosk-screen overlay and signage." },
        { label: "Logo lockups", value: "Horizontal, stacked, mark-only. Minimum clear space and minimum size for kiosk vinyl wrap and overhead signage." },
        { label: "Tone-of-voice", value: "Copy guidance — formal/conversational, sentence case vs. title case, voice samples for shelf signage." },
        { label: "Photography style", value: "Studio-on-white vs. lifestyle, lighting temperature, do-not-use shots." },
      ],
    },
    {
      heading: "2. Color and finish for fixtures",
      headers: ["Surface", "Material", "Finish spec", "Accessibility note"],
      rows: [
        ["Cabinet exterior", "Powder-coated steel", "RAL match, matte to satin (60° gloss ≤ 30)", "Minimize glare for low-vision users (WCAG 2.2 1.4.11)"],
        ["Kiosk bezel", "Vinyl wrap (3M IJ180mC or equivalent)", "Laminate gloss ≤ 30 to limit reader glare", "Contrast ≥ 3:1 against background"],
        ["Wall graphics", "Phototex or 3M Controltac", "Removable, low-tack adhesive for tenant moves", "WCAG 2.2 1.4.3 contrast for any informational text"],
        ["Shelf signage", "Rigid PETG or acrylic", "Anti-glare, 50-70 gloss for legibility", "ANSI Z535.4 size minimums for any safety-related copy"],
        ["Floor graphics", "3M 8519 anti-slip laminate", "Slip-resistance ≥ COF 0.5 wet (ANSI A326.3)", "Avoid trip-hazard color (yellow on yellow tile)"],
      ],
    },
    {
      heading: "3. Signage hierarchy",
      items: [
        { number: 1, title: "Identity sign (overhead)", description: "Cabinet name + employer brand mark. 4-6 inch cap height for visibility from 15-30 feet. Mounted with workplace wayfinding (ISO 7010 family) so signage 'reads as the building.'" },
        { number: 2, title: "Category signage (shelf strip)", description: "Snacks / Drinks / Fresh / Coffee / Healthy-Share. 1-1.5 inch cap height, sentence case, sans-serif. Color-coded but always with text label (WCAG 2.2 1.4.1 — color not the only signal)." },
        { number: 3, title: "SKU labels (planogram)", description: "Product name, price, key allergens, calories. FALCPA-compliant allergen statement on every SKU. Calorie disclosure on chains of 20+ locations per 21 CFR 101.11." },
        { number: 4, title: "Kiosk-screen overlay", description: "Welcome screen with employer logo and tagline. WCAG 2.2 AA color contrast (4.5:1 text, 3:1 large text / UI). Skin file delivered as a single PSD/AI per operator spec." },
        { number: 5, title: "Wayfinding signage", description: "Hallway directional arrows referencing the market by its branded name; coordinate with facilities-management signage program." },
      ],
    },
    {
      heading: "4. Kiosk skin file delivery checklist",
      items: [
        { check: "Vector source (AI, EPS, or SVG) at 1:1 scale" },
        { check: "300 dpi raster fallback for photography or gradients" },
        { check: "Fonts outlined or supplied as TTF/OTF with license confirmation" },
        { check: "Pantone Coated + RAL match alongside hex" },
        { check: "Bleed 0.125 in around vinyl wrap die-line" },
        { check: "Touchscreen + reader die-lines preserved (no overlap with controls)" },
        { check: "ADA reach-range overlay layer for kiosk-button labels (Section 308)" },
        { check: "Two color treatments approved (light + dark) for daylight and night-shift legibility" },
      ],
    },
    {
      heading: "5. Accessibility-by-design checks",
      paragraph:
        "Every brand decision is checked against ADA Title III + WCAG 2.2 AA + ANSI Z535 before sign-off — this prevents costly reprints after install.",
      items: [
        { label: "Text contrast", value: "≥4.5:1 normal text, ≥3:1 large text and UI components (WCAG 2.2 1.4.3 / 1.4.11)." },
        { label: "Operable-part contrast", value: "Buttons, readers, dispense flap visually distinct from cabinet (≥3:1 against background)." },
        { label: "Font size minimums", value: "Body text ≥ 16 px equivalent on kiosk screen; ≥ 5/8 in cap height for price displays per ADA 703.5.5 where required." },
        { label: "Tactile signage", value: "Raised characters + Grade 2 Braille for any permanent room/space identification per ADA 703.2-703.4." },
        { label: "Audio + caption", value: "Any video content captioned (WCAG 2.2 1.2.2) and includes audio description option (1.2.5)." },
      ],
    },
    {
      heading: "6. Workplace-navigation integration",
      items: [
        { number: 1, title: "Floor-plan registration", description: "Market name added to building directory, suite-level wayfinding, and digital signage layer (Appspace / Korbyt / etc.). Coordinate with facilities-management lead." },
        { number: 2, title: "Floor decals", description: "Approach decals 6-10 feet from entry, color-matched to wayfinding system. Anti-slip rating ≥ COF 0.5 per ANSI A326.3." },
        { number: 3, title: "QR code + intranet entry", description: "QR on kiosk + wall sign deep-links to intranet page with hours, contact, refund instructions, allergen filter, current planogram." },
      ],
    },
    {
      heading: "7. Approval + production timeline",
      headers: ["Phase", "Duration", "Owner", "Output"],
      rows: [
        ["Brand brief intake", "1 week", "Employer marketing + LetUsVending", "Approved brand-system file pack"],
        ["Concept design (2 rounds)", "2 weeks", "Operator design partner", "Cabinet, kiosk, wall, signage mockups"],
        ["Accessibility + brand QA", "1 week", "Employer accessibility + brand reviewers", "Sign-off log"],
        ["Production", "3-4 weeks", "Operator print partner", "Vinyl, signage, decals shipped"],
        ["Install + photography", "1-2 days on-site", "Operator install crew", "Final install + photos for case study"],
      ],
    },
    {
      heading: "8. LetUsVending capability statement",
      paragraph:
        "Through the LetUsVending operator network we can route an employer to operator partners equipped to deliver a fully-branded micro-market — including vinyl wrap, kiosk skin, wall graphics, ANSI/WCAG-conformant signage, and wayfinding integration. Brand assets are produced under the operator's design + print supply chain; the employer brand owner retains final approval on every visible surface.",
    },
  ],
  footer:
    "Informational reference. Confirm accessibility-standards application with your facility accessibility coordinator. Citations current at publication; verify ADA, WCAG, ANSI, ISO version IDs before contracting.",
});

console.log("wrote "+"branding-office-micro-market");
