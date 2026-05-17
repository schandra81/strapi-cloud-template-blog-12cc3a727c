import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-machine-accessibility-guests",
  assetType: "checklist",
  title: "Venue Accessibility Audit Framework",
  subtitle: "Annual walk checklist, post-event encroachment walk, sensory-friendly protocol, and operator RFP language",
  intro:
    "Use this checklist at entertainment venues — theaters, stadiums, arenas, convention centers, museums, and concert halls. Public-assembly venues have higher accessibility expectations than typical commercial sites: post-event crowd encroachment can block clear floor space, and sensory-friendly accommodation increasingly appears in venue accessibility plans. Mark each item Verified at annual audit, Verified at post-event walk, or Open issue with remediation date.",
  sections: [
    {
      heading: "1. Annual accessibility walk — ADA Title III baseline",
      items: [
        { check: "ADA Section 308 reach range: highest operable part ≤ 48 in AFF (unobstructed forward), ≥ 15 in AFF lowest operable part." },
        { check: "ADA Section 305 clear floor space (30 × 48 in) for parallel or forward approach to each machine." },
        { check: "ADA Section 309.4 operating force ≤ 5 lbf, one-handed, no tight grasping / pinching / twisting." },
        { check: "ADA Section 703 signage and pricing contrast ratio ≥ 70%, character height ≥ 5/8 in." },
        { check: "ADA Section 403 travel path clear width ≥ 36 in to and from the machine." },
        { check: "Carpet pile ≤ ½ in with secured edges per ADA Section 302.2." },
      ],
    },
    {
      heading: "2. Post-event encroachment walk",
      paragraph:
        "Crowd flow, queue lines, merchandise stands, and post-event clean-up frequently encroach on clear floor space at machines during peak hours. Schedule a documented walk after major events to verify clearances were preserved.",
      items: [
        { check: "Trash bins, recycling bins, and event signage positioned outside the 30 × 48 in clear floor space at every machine." },
        { check: "Queue stanchions and crowd-control rope lines do not encroach into the travel path or clear floor space." },
        { check: "Temporary kiosks (merchandise, programs, gift bag tables) not blocking the side or front approach to vending machines." },
        { check: "Spilled product, water, or condensation cleaned within the post-event window (typical 30-minute SLA in many venue operating manuals)." },
        { check: "Post-event walk log retained for 3 years to demonstrate consistent compliance." },
      ],
    },
    {
      heading: "3. Sensory-friendly protocol",
      paragraph:
        "Sensory-friendly accommodation is increasingly expected at family theaters, museums, and entertainment venues. Vending placements can support sensory-friendly performances with reduced noise, dimmed display, and clear signage.",
      items: [
        { check: "Audible alerts and chimes muted or reduced to ≤ 50 dB at 1 m during sensory-friendly performances." },
        { check: "Display brightness reduced to a low-glare setting during sensory-friendly programming." },
        { check: "Clear signage at the machine indicates whether refunds are app-based, SMS-based, or staff-assisted — reducing wait-time anxiety." },
        { check: "Allergen icons on the machine face supplement text-only allergen lists per FALCPA." },
        { check: "Staff trained to assist guests who request help with the machine — recorded in the venue's annual accessibility training log." },
      ],
    },
    {
      heading: "4. Operator RFP language — accessibility section",
      items: [
        { check: "Bidder attests to ADA Title III + Section 308 compliance for every machine proposed, with written attestation at install and annually thereafter." },
        { check: "Bidder provides VPAT (Voluntary Product Accessibility Template) for any digital interface (card reader, kiosk, mobile app)." },
        { check: "Bidder agrees to a post-event encroachment audit jointly with venue operations after every event over 50% of capacity." },
        { check: "Bidder agrees to a sensory-friendly mode (audible alert mute, display brightness reduction) where the venue calendars sensory-friendly events." },
        { check: "Bidder maintains a facility accessibility coordinator point of contact and copies the venue's accessibility coordinator on all attestation documents." },
      ],
    },
    {
      heading: "5. Documentation and recordkeeping",
      items: [
        { check: "Annual accessibility attestation signed by operator on file with venue accessibility coordinator." },
        { check: "Post-event encroachment walk log retained 3 years minimum (longer if state code requires)." },
        { check: "Photo documentation of each machine at annual audit (front, side, dispense, payment readers) with measurements." },
        { check: "Complaint log: guest accessibility concerns recorded, root-cause analyzed, remediation owner and due date assigned." },
        { check: "VPAT and accessibility attestations retained for contract term + 5 years." },
      ],
    },
  ],
  footer:
    "This framework is informational and not legal advice. ADA Title III applies to places of public accommodation; some venues are also subject to state and local accessibility codes that exceed the federal floor. Coordinate the final review with the venue's accessibility coordinator and counsel. LetUsVending can connect you with operators equipped to attest to each item — request the venue capability matrix to compare candidates.",
});

console.log("wrote " + "vending-machine-accessibility-guests");
