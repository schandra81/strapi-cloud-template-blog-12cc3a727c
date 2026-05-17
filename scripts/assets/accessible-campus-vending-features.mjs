import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "accessible-campus-vending-features",
  assetType: "checklist",
  title: "28-Point ADA Campus Vending Audit Checklist",
  subtitle: "ADA Title III + Section 308 + WCAG 2.1 AA audit for higher-education vending programs",
  intro:
    "Use this checklist at install and at annual recertification for every vending machine and AI cooler on a campus. Each item maps to a specific ADA Title III, 2010 ADA Standards (Section 308/309), or Section 508 / WCAG 2.1 AA requirement applicable to public-accommodation higher-education facilities.",
  sections: [
    {
      heading: "Reach range — 2010 ADA Standards Section 308",
      paragraph:
        "Operable parts include selection buttons, payment readers, dispense doors, and any touchscreen interface. Reach-range failures are the most common ADA non-conformance on US campuses.",
      items: [
        { check: "1. Highest operable part ≤ 48 inches above finished floor — unobstructed forward reach (Section 308.2.1)." },
        { check: "2. Lowest operable part ≥ 15 inches above finished floor (Section 308.2.1)." },
        { check: "3. Obstructed forward reach — obstruction depth ≤ 20 inches, highest point ≤ 48 inches (Section 308.2.2)." },
        { check: "4. Side reach — unobstructed ≤ 48 inches; obstructed (depth ≤ 10 inches) ≤ 48 inches; obstructed (depth 10-24 inches) ≤ 46 inches (Section 308.3)." },
      ],
    },
    {
      heading: "Clear floor space + circulation — Section 305",
      items: [
        { check: "5. 30 inch × 48 inch clear floor space provided for parallel or forward approach to every operable part." },
        { check: "6. Floor surface stable, firm, and slip-resistant per Section 302.1." },
        { check: "7. If carpeted, pile height ≤ ½ inch with secured edges (Section 302.2)." },
        { check: "8. Clear floor space not in a primary circulation path that conflicts with traffic flow." },
      ],
    },
    {
      heading: "Operating force — Section 309.4",
      items: [
        { check: "9. Operable parts function with one hand and require ≤ 5 lbf to operate." },
        { check: "10. No tight grasping, pinching, or twisting of the wrist required." },
        { check: "11. Dispense door opens with ≤ 5 lbf and does not require pinching." },
        { check: "12. Card reader insertion / contactless tap functional at all reach ranges in scope." },
      ],
    },
    {
      heading: "Visual + signage accessibility — Section 703 + WCAG 2.1 AA",
      items: [
        { check: "13. Pricing display contrast ratio ≥ 70% (Section 703.5.1) — independently measured, not vendor-attested." },
        { check: "14. Character height ≥ 5/8 inch where pricing is wall-posted or machine-face." },
        { check: "15. Product labels visible from the clear floor space — no glare, no obstruction." },
        { check: "16. Allergen labels per FALCPA on every SKU; allergen summary visible on machine face." },
        { check: "17. Tactile braille pricing labels where state code or campus access office requires." },
      ],
    },
    {
      heading: "Digital interface — Section 508 + WCAG 2.1 AA (touchscreens, kiosks, apps)",
      paragraph:
        "AI cooler and micro-market touchscreen kiosks must meet WCAG 2.1 Level AA. Campus access offices increasingly require a VPAT (Voluntary Product Accessibility Template) before procurement.",
      items: [
        { check: "18. Touchscreen has an audio-output mode or paired mobile app for blind / low-vision users (WCAG 1.1.1, 1.4.5)." },
        { check: "19. Touch targets ≥ 44 px × 44 px (WCAG 2.5.5 AAA — campuses often require AAA on this criterion)." },
        { check: "20. Text contrast on screen ≥ 4.5:1 for body text, ≥ 3:1 for large text (WCAG 1.4.3)." },
        { check: "21. No content relies solely on color to convey meaning (WCAG 1.4.1)." },
        { check: "22. Operator provides current VPAT on request; revision date within the last 12 months." },
      ],
    },
    {
      heading: "Payment + refund accessibility",
      items: [
        { check: "23. Cashless option available so users without coin/bill handling capability can complete transactions." },
        { check: "24. Refund flow accessible via app, SMS, or phone — not solely a wall-mounted touchscreen out of reach." },
        { check: "25. Mobile wallet (Apple Pay / Google Pay) supported as an alternative to card insertion." },
      ],
    },
    {
      heading: "Documentation + recertification",
      items: [
        { check: "26. Operator provides written ADA attestation at install and annually." },
        { check: "27. Annual site-visit verification with photographs and measurements documented; campus access office copied." },
        { check: "28. Procurement file retains documentation for the duration of the contract plus 7 years (Higher Education Act recordkeeping)." },
      ],
    },
  ],
  footer:
    "This checklist is informational and not legal advice. Coordinate with the campus ADA / Section 504 coordinator and disability resource office. State and local jurisdictions may add requirements above the federal floor.",
});

console.log("wrote "+"accessible-campus-vending-features");
