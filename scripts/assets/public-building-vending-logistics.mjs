import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "public-building-vending-logistics",
  assetType: "matrix",
  title: "Public-Building Vending Credential Matrix Template",
  subtitle: "Per-technician, per-building credential and expiration-tracking framework for government-account fleets",
  intro:
    "Public-building vending — federal, state, county, municipal, courthouse, military, K-12, and federally qualified health center — runs on credentials. A restock technician needs the right badge, the right background-check tier, and the right escort protocol for every building on the route, and every credential has a different expiration cadence. This template provides the credential matrix capable operators run for government-account fleets, the per-building requirement crosswalk, and the expiration-tracking framework used to keep a fleet of 200+ technicians compliant across thousands of placements. Capability framing only.",
  sections: [
    {
      heading: "1. Per-technician credential matrix",
      paragraph:
        "Each restock technician on a government-account route should carry a documented credential portfolio. The matrix below lists the credential, the source-of-truth issuing authority, the typical expiration cadence, and which placement types require it. Operator should maintain this as an exportable record (HRIS, Workday, BambooHR, or comparable) with audit-rights clause to the contracting agency.",
      headers: [
        "Credential",
        "Issuing authority",
        "Typical expiration",
        "Required for",
      ],
      rows: [
        [
          "Background check — Tier 1 (commercial)",
          "Operator HR / 3rd-party (Sterling, HireRight, Checkr)",
          "Every 24-36 months or per state law",
          "All placements baseline",
        ],
        [
          "Background check — Tier 2 (state criminal + sex-offender)",
          "State BCI / DOJ equivalent",
          "Every 24 months",
          "K-12, library, recreation center, family-court placement",
        ],
        [
          "Background check — Tier 3 (FBI fingerprint, IAFIS)",
          "FBI CJIS / state fingerprint bureau",
          "Every 24-36 months or per agency",
          "Courthouse, law enforcement, federal building, juvenile facility",
        ],
        [
          "PIV / CAC card (HSPD-12 / FIPS 201)",
          "Federal sponsoring agency (GSA, DoD, NASA, etc.)",
          "5 years (PIV) / 3 years (CAC)",
          "Federal-building placements requiring routine access",
        ],
        [
          "TWIC card (Transportation Worker Identification Credential)",
          "TSA (49 CFR Part 1572)",
          "5 years",
          "Port facility, maritime, regulated transport placement",
        ],
        [
          "CBP / TSA airport SIDA badge",
          "Sponsoring airport authority",
          "1-2 years per airport policy",
          "Airport secure-area placement",
        ],
        [
          "State DOC (Department of Corrections) clearance",
          "State DOC training academy",
          "1-2 years",
          "Correctional / detention facility placement",
        ],
        [
          "School district volunteer / vendor badge",
          "School district HR",
          "Annual (school year)",
          "K-12 placement",
        ],
        [
          "VA / military base access (CAC alternative)",
          "VA / DoD installation visitor center",
          "Per visit or per installation pass period",
          "VA hospital, military base placement",
        ],
        [
          "OSHA 10 / 30 (general industry)",
          "OSHA-authorized trainer",
          "Lifetime (recommended refresh 3-5 years)",
          "Industrial / federal facility with mixed-use",
        ],
        [
          "Food handler / ServSafe certification",
          "State / local health department / ANAB-accredited",
          "3 years",
          "Fresh-food micro-market placement",
        ],
        [
          "CDL (Commercial Driver License) Class A or B",
          "State DMV",
          "Per state, typically 4-8 years",
          "Box-truck restock route ≥ 26,001 GVWR",
        ],
        [
          "DOT medical certificate (49 CFR 391.41)",
          "DOT-certified medical examiner",
          "2 years (some conditions shorter)",
          "CDL-required route",
        ],
      ],
    },
    {
      heading: "2. Per-building credential requirement crosswalk",
      paragraph:
        "Different public-building categories require different credential stacks. The crosswalk below is a starting reference; operator confirms with each contracting agency's facility security officer (FSO) before route assignment.",
      headers: [
        "Building category",
        "Background-check tier",
        "Federal credential",
        "Escort required",
        "Other",
      ],
      rows: [
        [
          "Federal office (GSA-managed)",
          "Tier 3 (FBI)",
          "PIV (or escort)",
          "If no PIV",
          "FPS protocol per building",
        ],
        [
          "Federal courthouse (USMS)",
          "Tier 3 (FBI)",
          "PIV preferred",
          "Typically yes (USMS)",
          "Weapons screening; restock window often pre-dawn",
        ],
        [
          "Military installation",
          "Tier 3 (FBI) + base background",
          "CAC or installation pass",
          "Per installation",
          "Visitor center day-pass for occasional",
        ],
        [
          "Federal correctional facility (BOP)",
          "Tier 3 (FBI) + BOP clearance",
          "BOP-issued credential",
          "Required (officer escort)",
          "PREA (Prison Rape Elimination Act) training",
        ],
        [
          "VA hospital",
          "Tier 3 (FBI)",
          "VA-issued badge or PIV",
          "Limited",
          "HIPAA-aware training; fresh-food = food handler",
        ],
        [
          "State capitol / agency",
          "Tier 2 + state",
          "State badge",
          "Sometimes",
          "Per-state requirements vary",
        ],
        [
          "County / municipal (city hall, DPW)",
          "Tier 1-2",
          "Local badge",
          "Rare",
          "Standard commercial",
        ],
        [
          "Courthouse — state / county",
          "Tier 2-3",
          "State / county badge",
          "Typically yes",
          "Weapons screening; restock pre-court hours",
        ],
        [
          "K-12 school",
          "Tier 2 + state + sex-offender",
          "District badge",
          "Front-office sign-in",
          "Annual renewal per district",
        ],
        [
          "Public library",
          "Tier 1-2",
          "None typical",
          "No",
          "Standard commercial; quiet-hours scheduling",
        ],
        [
          "Recreation / parks facility",
          "Tier 2 + sex-offender",
          "None typical",
          "No",
          "Annual renewal; child-safe operator policy",
        ],
        [
          "Airport public side",
          "Tier 1-2",
          "None",
          "No",
          "Pre-security only",
        ],
        [
          "Airport SIDA (secure)",
          "Tier 3 + TSA",
          "SIDA badge",
          "No",
          "10-year FBI fingerprint; annual recurrent",
        ],
      ],
    },
    {
      heading: "3. Expiration tracking + audit framework",
      paragraph:
        "Credential expiration is the single most common compliance failure mode in government-account fleets. The framework below codifies the cadence operators use to track, renew, and audit credentials across a multi-technician, multi-building fleet.",
      items: [
        {
          label: "Source-of-truth system",
          value:
            "Operator maintains HRIS-of-record (Workday, BambooHR, Paycom, ADP, or comparable) with credential module per technician. Each credential record has issue date, expiration date, document image, and renewal-trigger date (typically T-90, T-60, T-30, T-7 cascade).",
        },
        {
          label: "Per-building requirements registry",
          value:
            "Operator maintains placement-level requirements registry (one row per building) with the credential stack required for that building. Route assignment system blocks a technician from being scheduled to a building they're not credentialed for.",
        },
        {
          label: "Renewal cadence + ownership",
          value:
            "T-90: HR notification to technician + supervisor. T-60: scheduling for renewal training / fingerprint appointment. T-30: blocked from new route assignments at affected buildings if not renewed. T-7: pulled from active route. Operator commits to written cadence in contract addendum.",
        },
        {
          label: "Audit cadence — internal",
          value:
            "Monthly: HR pulls expiration report 90 days forward, escalates to supervisors. Quarterly: random 10% sample audit of credential documents against HRIS. Annual: full fleet credential reconciliation, exportable to contracting agency on request.",
        },
        {
          label: "Audit cadence — agency-facing",
          value:
            "Annual credential attestation report to contracting agency facility security officer (FSO). Includes per-technician credential list, expiration dates, and exception list (expired / pending). Audit-rights clause in master service agreement gives agency right to spot-check on 5 business days notice.",
        },
        {
          label: "Incident protocol",
          value:
            "Expired-credential incident triggers technician pull from route within 24 hours, supervisor written incident report within 5 business days, root-cause analysis. Recurring failure rate > 2% of credentials triggers contract review with agency.",
        },
        {
          label: "Background-check refresh",
          value:
            "Tier 1: 24-36 months. Tier 2: 24 months. Tier 3 (FBI fingerprint): 24-36 months or per agency. Operator maintains refresh schedule per technician; no technician operates on Tier 3 building > 6 months past refresh window.",
        },
      ],
    },
  ],
  footer:
    "This template is informational and not legal advice. Federal placements coordinate with the contracting agency facility security officer (FSO). State and local jurisdictions add requirements above the federal floor. Operator capability claims should be verified through reference calls (3+ active government-account fleets ≥ 24 months in service) and written attestation. Capability framing only.",
});

console.log("wrote " + "public-building-vending-logistics");
