import { writeAsset } from "../asset-helper.mjs";

await writeAsset({
  slug: "iot-integration-in-vending",
  assetType: "matrix",
  title: "Vending IoT Integration Framework",
  subtitle: "Five-layer integration stack, capability matrix, ERP and host-system integration, and QBR scorecard",
  intro:
    "Vending IoT is not a single integration. It is five layers — device, connectivity, telemetry platform, data layer, host integration — each with its own protocol, standard, and capability requirement. The right architecture depends on what you need at the host (ERP write-back, dashboards, SKU velocity export, payment reconciliation) and what the operator can attest to in writing. This framework codifies all five layers, the capability matrix that distinguishes a true IoT operator from a cellular-telemetry-only operator, the ERP + host-system integration map, and the QBR scorecard used to verify the integration is delivering. Capability framing only.",
  sections: [
    {
      heading: "1. The five-layer IoT integration stack",
      paragraph:
        "Each layer has a different standard, a different vendor ecosystem, and a different failure mode. Operator must demonstrate capability at each layer for a true IoT program; a single-layer attestation is not an integration.",
      headers: [
        "Layer",
        "What it does",
        "Standards / protocols",
        "Vendor ecosystem examples",
        "Failure mode if absent",
      ],
      rows: [
        [
          "1. Device (cabinet + payment + sensor)",
          "Generates per-transaction + per-status data",
          "MDB (Multi-Drop Bus 4.2), DEX/UCS, EVA-DTS, NAMA NV-9",
          "Crane Merchandising, AMS, Royal Vendors, Seaga, Vendo, Fastcorp",
          "Cabinet cannot emit per-SKU telemetry; falls back to manual restock counts",
        ],
        [
          "2. Connectivity (modem + signal)",
          "Sends device data to cloud",
          "LTE Cat-M1 / NB-IoT, Wi-Fi 802.11n+, Ethernet, BLE for fob auth",
          "Sierra Wireless, Telit, MultiTech, Verizon ThingSpace, AT&T Control Center",
          "Telemetry latency > 1 hour or offline events undetected",
        ],
        [
          "3. Telemetry platform (VMS / cashless host)",
          "Aggregates device data; payment authorization; refund flow",
          "PCI-DSS 4.0; PCI-PIN; ISO 8583 to acquirer; REST API to host",
          "Cantaloupe (USAT), Nayax, 365 Retail Markets, Lightspeed VMS, AWM Smart Shelf",
          "No real-time SKU velocity; no cashless authorization; refund flow manual",
        ],
        [
          "4. Data layer (warehouse + analytics)",
          "Stores normalized data; runs analytics; serves dashboards",
          "REST API, GraphQL, webhook, S3 / GCS event stream",
          "Operator data warehouse + Looker / Tableau / Power BI / Snowflake",
          "No per-SKU velocity export; no cross-cabinet portfolio view",
        ],
        [
          "5. Host integration (ERP, FM, wellness, MMS)",
          "Pushes data to host systems for invoice, FM ticket, member account",
          "OData, SAP RFC / IDoc, REST, SFTP, EDI 810 / 850",
          "SAP, Oracle, NetSuite, Workday; ServiceNow / Maximo; Virgin Pulse; MMS (ABC, MINDBODY, Daxko)",
          "Manual reconciliation; settlement disputes; no automated FM ticketing",
        ],
      ],
    },
    {
      heading: "2. Operator capability matrix",
      paragraph:
        "A true IoT operator delivers all five layers with documented standards. A telemetry-only operator delivers layers 1-3 but not 4-5. The matrix below maps the capability gap. Require written attestation for each row.",
      headers: ["Capability", "Telemetry-only operator", "Mid-capability operator", "Full-stack IoT operator", "Verification method"],
      rows: [
        [
          "MDB 4.2 / DEX cabinet baseline",
          "Yes",
          "Yes",
          "Yes",
          "Cabinet manufacturer + serial-number list, per-cabinet protocol attestation",
        ],
        [
          "Cellular telemetry < 15 min heartbeat",
          "Yes",
          "Yes",
          "Yes",
          "Telemetry export sample; SLA in MSA",
        ],
        [
          "Cashless authorization (Apple Pay, Google Pay, EMV)",
          "Yes (legal floor)",
          "Yes",
          "Yes",
          "PCI-DSS 4.0 AOC + SAQ-B-IP",
        ],
        [
          "Per-SKU velocity API export",
          "No",
          "Yes (CSV / SFTP)",
          "Yes (REST API + webhook)",
          "API documentation, sample payload, sandbox access",
        ],
        [
          "Host portal with real-time dashboards",
          "No",
          "Yes (operator portal)",
          "Yes (operator portal + embeddable widget for host)",
          "Demo access, role-based access control",
        ],
        [
          "ERP integration (SAP / Oracle / NetSuite)",
          "No",
          "Sometimes (manual SFTP)",
          "Yes (OData / IDoc / native connector)",
          "Reference customer with same ERP; integration runbook",
        ],
        [
          "FM / ITSM ticket integration (ServiceNow / Maximo)",
          "No",
          "Sometimes",
          "Yes (auto-ticket on Tier 1 alert)",
          "Ticket workflow demo, ITIL alignment",
        ],
        [
          "Wellness / MMS integration (member charge)",
          "No",
          "Sometimes",
          "Yes (OAuth token + member-account write-back)",
          "Reference customer with same MMS",
        ],
        [
          "Data warehouse / BI write-back",
          "No",
          "Yes (CSV)",
          "Yes (Snowflake / BigQuery / Redshift native)",
          "Sample warehouse schema, data dictionary",
        ],
        [
          "PCI-DSS 4.0 attestation",
          "Yes",
          "Yes",
          "Yes",
          "AOC + SAQ-B-IP on file, refreshed annually",
        ],
        [
          "GDPR / CCPA data-handling",
          "Limited",
          "Yes",
          "Yes",
          "DPA / DPIA on file; data-subject-request workflow",
        ],
        [
          "Audit-rights clause + telemetry export",
          "Limited",
          "Yes",
          "Yes",
          "MSA clause; sample audit export",
        ],
      ],
    },
    {
      heading: "3. ERP + host-system integration map",
      paragraph:
        "Full-stack IoT requires bidirectional integration between the operator platform and the host's ERP / FM / wellness systems. The map below lists the typical integration points, the data flow direction, and the standard / protocol used. Capable operators have reference customers with each integration in production.",
      headers: ["Host system", "Integration use case", "Data flow direction", "Standard / protocol", "Cadence"],
      rows: [
        [
          "SAP S/4HANA",
          "Monthly invoice posting + GL account",
          "Operator → SAP",
          "IDoc INVOIC02 or OData",
          "Monthly",
        ],
        [
          "Oracle Fusion / NetSuite",
          "AP voucher + commission settlement",
          "Operator → Oracle",
          "REST API or SFTP CSV",
          "Monthly",
        ],
        [
          "Workday",
          "Vendor settlement + 1099 reporting",
          "Operator → Workday",
          "REST API + Workday Studio",
          "Monthly / annually",
        ],
        [
          "Coupa / Ariba",
          "PO + invoice match",
          "Operator ↔ Coupa",
          "cXML / EDI 810 / 850",
          "Monthly",
        ],
        [
          "ServiceNow ITSM",
          "Tier 1 alert auto-ticket creation",
          "Operator → ServiceNow",
          "REST API / webhook + ITIL incident schema",
          "Real-time",
        ],
        [
          "IBM Maximo",
          "FM work-order on cabinet alert",
          "Operator → Maximo",
          "REST API",
          "Real-time",
        ],
        [
          "Virgin Pulse / wellness platform",
          "Healthy SKU points / member challenge",
          "Operator → Virgin Pulse",
          "REST API + OAuth 2.0",
          "Per transaction",
        ],
        [
          "ABC Fitness Solutions MMS",
          "Member account charge / fob authentication",
          "Operator ↔ ABC",
          "REST API + OAuth 2.0",
          "Per transaction",
        ],
        [
          "CBORD / Blackboard Transact",
          "Campus card charge / one-card integration",
          "Operator ↔ CBORD",
          "REST API or vendor SDK",
          "Per transaction",
        ],
        [
          "Snowflake / BigQuery (host BI)",
          "Per-SKU velocity, refund rate, telemetry export",
          "Operator → host warehouse",
          "Native connector or SFTP + cron",
          "Daily / hourly",
        ],
      ],
    },
    {
      heading: "4. QBR scorecard — verifying the integration is delivering",
      paragraph:
        "The QBR (quarterly business review) is where the integration's value is confirmed. The scorecard below is what capable hosts run with their IoT operators every 90 days. Numbers are targets; thresholds are operator-attested baselines.",
      items: [
        {
          label: "Uptime SLA attainment",
          value:
            "Target ≥ 98% by telemetry. Reported per-cabinet and per-month over the quarter. Excursions documented with root cause and resolution timestamp.",
        },
        {
          label: "Telemetry latency",
          value:
            "Target < 15 min from event to platform. Sampled hourly during business hours. Latency > 1 hour triggers operator root-cause investigation.",
        },
        {
          label: "Payment success rate",
          value:
            "Target ≥ 99% of attempted transactions complete. Payment failures reported with reason code; recurring code triggers PCI / processor review.",
        },
        {
          label: "Cold-chain alert response",
          value:
            "Target 100% of Tier 1 cold-chain alerts acknowledged < 30 min; resolved < 4 hr per FDA Food Code 3-501.16. Excursions > 2 hr at > 41°F trigger product-loss credit.",
        },
        {
          label: "Refund rate",
          value:
            "Target < 2% of transactions. Refunds > 2% trigger planogram + cabinet quality review.",
        },
        {
          label: "ERP settlement match rate",
          value:
            "Target ≥ 99% telemetry-to-ERP match. Variance > 1% triggers reconciliation; > 3% triggers audit-rights invocation.",
        },
        {
          label: "FM ticket auto-creation rate",
          value:
            "Target 100% of Tier 1 alerts auto-create FM tickets. Manual tickets > 5% triggers integration review.",
        },
        {
          label: "Member-platform attach (where applicable)",
          value:
            "Target ≥ 25% of transactions attached to a member account at gym / corporate / hospital placements. Lower attach triggers app + signage refresh.",
        },
        {
          label: "Data export reliability",
          value:
            "Target 100% of daily warehouse exports complete on schedule. Failed exports > 1 / month triggers root cause + retry SLA.",
        },
        {
          label: "PCI-DSS + privacy posture",
          value:
            "Annual AOC + SAQ-B-IP refresh confirmed. GDPR / CCPA DSR (data-subject-request) workflow tested annually. No P1 incidents in the quarter.",
        },
        {
          label: "Action items + owner + due date",
          value:
            "Each QBR closes with action items, owner, due date. Open items roll forward; > 30 days overdue escalates to operator account leadership.",
        },
      ],
    },
  ],
  footer:
    "This framework is informational. MDB 4.2, DEX/UCS, NAMA NV-9, PCI-DSS 4.0, ISO 8583, FDA Food Code 3-501.16, GDPR, and CCPA are the cited standards. Operator capability claims should be verified through reference customer calls (3+ active integrations ≥ 12 months in production) and written attestation. Capability framing only — placement timing depends on operator capacity in your service area.",
});

console.log("wrote " + "iot-integration-in-vending");
