import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "vending-hotel-loyalty-programs",
  assetType: "playbook",
  title: "Hotel Vending Loyalty Integration Playbook",
  subtitle: "Brand SSO matrix + accrual scope + tier benefit framework + folio wiring checklist",
  intro:
    "Loyalty integration turns a vending placement into a brand-engagement touchpoint. This playbook codifies how to wire vending into the property's loyalty program — single sign-on (SSO), points accrual, elite tier benefits, and folio post — across the five major brand systems. Each section maps to a capability your operator should be equipped to attest to.",
  sections: [
    {
      heading: "1. Brand SSO + identity matrix",
      paragraph:
        "Loyalty integration starts with identity. The operator app or kiosk must recognize the guest's brand-loyalty number. Each brand has a different SSO posture.",
      headers: ["Brand", "Loyalty program", "PMS", "Integration approach"],
      rows: [
        ["Marriott", "Bonvoy", "Opera (FSPMS) / Marsha distribution", "Bonvoy member ID via property folio post; SSO via Marriott Connect API where the operator is an approved partner"],
        ["Hilton", "Honors", "OnQ", "Honors number via folio post; OnQ stay-charge integration via certified middleware"],
        ["IHG", "One Rewards", "Opera / IHG concerto", "Member ID via folio post; IHG Concerto reservation tie where supported"],
        ["Hyatt", "World of Hyatt", "Opera", "Member ID via folio post; World of Hyatt API for elite benefit lookup"],
        ["Choice / Wyndham / Best Western", "Choice Privileges / Wyndham Rewards / Best Western Rewards", "ChoiceADVANTAGE / SynXis / various", "Member ID via folio post; brand-specific certified middleware where elite benefits apply"],
      ],
    },
    {
      heading: "2. Accrual scope decision",
      paragraph:
        "Brands differ on whether ancillary spend earns base or bonus points. Operator and property must agree on accrual scope before integration.",
      items: [
        { number: 1, title: "Base-rate accrual on full ancillary spend", description: "Bonvoy: 10 points per USD on most ancillary spend at participating properties; Honors: 10 base points per USD; World of Hyatt: 5 base points per eligible USD. Confirm with brand contact at the franchise level." },
        { number: 2, title: "Elite multiplier eligibility", description: "Some brands apply elite tier multipliers (e.g., Bonvoy Platinum 50% bonus) to ancillary spend; others limit multipliers to room rate. Read the brand member terms before quoting." },
        { number: 3, title: "Promotional bonus campaigns", description: "Brand promotional campaigns (e.g., Bonvoy bonus stays) sometimes include ancillary; sometimes exclude. Operator dashboards should let property GM toggle inclusion." },
        { number: 4, title: "Non-participating purchase", description: "Sundries (toothpaste, charger cables) and alcohol are often excluded from accrual. Operator planogram tags non-accruing SKUs at the POS." },
      ],
    },
    {
      heading: "3. Elite tier benefit framework",
      paragraph:
        "Elite benefits at the vending touchpoint can be configured as one-time, daily, or per-stay. Capacity, brand standard, and folio impact must all be considered.",
      items: [
        { label: "Welcome amenity (Gold / Diamond / Globalist tier)", value: "One bottled water + one snack credit at check-in; PMS pushes credit to operator system; guest redeems at any pantry or vending touchpoint." },
        { label: "Daily complimentary water (most brand mid-tier+)", value: "Operator system recognizes member ID at pantry checkout; 1 bottled water/day comped to folio with zero charge." },
        { label: "Free breakfast tier (varies)", value: "Pantry grab-and-go counts toward breakfast benefit at some flags (Bonvoy Platinum at select brands); operator tags eligible SKUs." },
        { label: "Member-only pricing", value: "10-15% discount on full pantry menu for members; non-members see full retail." },
        { label: "Birthday / anniversary recognition", value: "Operator system reads brand-supplied lifecycle event and offers complimentary item." },
      ],
    },
    {
      heading: "4. Folio wiring checklist",
      items: [
        { check: "Brand-certified middleware identified (Hapi, Infor Cloud, Stayntouch, Mews — depending on PMS)" },
        { check: "PMS interface specification reviewed (Opera OXI / OnQ POSI / Concerto / ChoiceADVANTAGE)" },
        { check: "Test environment staged with brand IT or franchise IT contact" },
        { check: "Folio charge code mapped (typically 'sundry' or 'pantry' department; tax category set)" },
        { check: "Accrual feed mapped (brand-loyalty backend post: number + transaction amount + property ID)" },
        { check: "Comp redemption rules tested (zero-charge folio post with comp reason code)" },
        { check: "Refund flow tested end-to-end (guest-app refund → folio reversal → loyalty point reversal)" },
        { check: "Operator dashboard access for property GM + front-desk supervisor confirmed" },
        { check: "Brand IT sign-off letter on file" },
        { check: "Quarterly review cadence agreed with brand-standards liaison" },
      ],
    },
    {
      heading: "5. Data + privacy framework",
      items: [
        { number: 1, title: "Data minimization", description: "Operator receives loyalty number + transaction amount only — never the member's PII, payment card, or stay details. Brand backend handles identity resolution." },
        { number: 2, title: "PCI DSS", description: "Operator system PCI DSS Level 1 or 2 attestation on file. Card data tokenized; never traverses property network in clear text." },
        { number: 3, title: "State privacy laws (CCPA, CPRA, VCDPA, CPA, others)", description: "Operator + property privacy notices disclose vending data collection; consumer-rights request flow defined." },
        { number: 4, title: "Brand data-sharing agreement", description: "Brand reviews operator data-sharing posture before approving SSO. Annual recertification typical." },
      ],
    },
    {
      heading: "6. Service SLA — loyalty-integrated touchpoints",
      headers: ["Tier", "Examples", "Acknowledgement", "Resolution"],
      rows: [
        ["Tier 1 — loyalty / folio integration down", "SSO failure, folio post not landing, accrual feed silent", "30 minutes", "4 hours"],
        ["Tier 1 — payment / cold chain", "Standard 24/7 amenity SLA applies", "30 minutes", "4 hours"],
        ["Tier 2 — comp redemption issue", "Eligible member denied comp at machine", "Same-day", "24 hours including folio adjustment"],
        ["Tier 3 — cosmetic / signage", "Loyalty signage refresh", "5 days", "14 days"],
      ],
    },
    {
      heading: "7. Quarterly business review",
      items: [
        { check: "Loyalty-attached transaction rate (% of pantry/vending spend tied to a member ID)" },
        { check: "Elite-tier benefit redemption volume" },
        { check: "Folio post success rate (target ≥ 99.5%)" },
        { check: "Accrual feed success rate (target ≥ 99.9%)" },
        { check: "Refund + comp dispute volume" },
        { check: "Brand IT recertification status (annual)" },
        { check: "PCI DSS attestation refresh status (annual)" },
        { check: "Action items + owner + due date" },
      ],
    },
  ],
  footer:
    "This playbook is informational and not legal or brand-standard advice. Coordinate with your franchise representative, brand IT, and brand-loyalty operations contact before configuring SSO or folio post. LetUsVending is equipped to arrange operators with documented brand-certified integration capability.",
});

console.log("wrote "+"vending-hotel-loyalty-programs");
