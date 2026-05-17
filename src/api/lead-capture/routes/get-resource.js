"use strict";

// Public endpoint: POST /api/lead-captures/get-resource
// Body: { name, email, mobile, assetSlug, assetType?, sourceUrl? }
// Response: { ok: true, downloadUrl: "/uploads/downloads/<slug>.<ext>" }

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/lead-captures/get-resource",
      handler: "lead-capture.getResource",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/lead-captures/resource-info/:slug",
      handler: "lead-capture.resourceInfo",
      config: {
        auth: false,
      },
    },
  ],
};
