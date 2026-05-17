"use strict";

const { createCoreController } = require("@strapi/strapi").factories;
const fs = require("fs");
const path = require("path");

const ASSETS_DIR = path.join(__dirname, "..", "..", "..", "..", "public", "downloads");
const ALLOWED_EXTS = [".docx", ".html", ".pdf", ".xlsx"];

function isValidEmail(s) {
  return typeof s === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}
function sanitizeSlug(s) {
  return typeof s === "string" && /^[a-z0-9-]+$/.test(s) ? s : null;
}

function findAssetFile(slug) {
  if (!fs.existsSync(ASSETS_DIR)) return null;
  for (const ext of ALLOWED_EXTS) {
    const fp = path.join(ASSETS_DIR, slug + ext);
    if (fs.existsSync(fp)) return { ext, fileName: slug + ext };
  }
  return null;
}

module.exports = createCoreController("api::lead-capture.lead-capture", ({ strapi }) => ({
  async resourceInfo(ctx) {
    const slug = sanitizeSlug(ctx.params.slug);
    if (!slug) {
      return ctx.badRequest("Invalid slug");
    }
    const asset = findAssetFile(slug);
    if (!asset) {
      return ctx.notFound("Asset not found");
    }
    ctx.body = { ok: true, slug, extension: asset.ext.slice(1), fileName: asset.fileName };
  },

  async getResource(ctx) {
    const body = ctx.request.body || {};
    const name = String(body.name || "").trim().slice(0, 200);
    const email = String(body.email || "").trim().toLowerCase().slice(0, 200);
    const mobile = String(body.mobile || "").trim().slice(0, 40);
    const assetSlug = sanitizeSlug(body.assetSlug);
    const assetType = String(body.assetType || "").trim().slice(0, 40);
    const sourceUrl = String(body.sourceUrl || "").trim().slice(0, 500);
    // Audience selector — drives downstream segmentation (operator emails vs
    // facility-manager emails). Anything we don't recognise drops to the
    // facility-manager default so a malformed form doesn't reject the lead.
    const ALLOWED_CATEGORIES = ["facility-manager", "vending-operator"];
    const rawCategory = String(body.category || "").trim().toLowerCase();
    const category = ALLOWED_CATEGORIES.includes(rawCategory) ? rawCategory : "facility-manager";

    if (!name || name.length < 2) return ctx.badRequest("Name is required");
    if (!isValidEmail(email)) return ctx.badRequest("Valid email is required");
    if (!mobile || mobile.replace(/\D/g, "").length < 7) return ctx.badRequest("Mobile number is required");
    if (!assetSlug) return ctx.badRequest("Asset slug is required");

    const asset = findAssetFile(assetSlug);
    if (!asset) return ctx.notFound("Asset not found");

    const downloadUrl = `/downloads/${asset.fileName}`;
    const userAgent = (ctx.request.headers["user-agent"] || "").slice(0, 500);
    const ipAddress = (ctx.request.ip || "").slice(0, 64);

    try {
      await strapi.entityService.create("api::lead-capture.lead-capture", {
        data: { name, email, mobile, category, assetSlug, assetType, sourceUrl, userAgent, ipAddress, downloadUrl },
      });
    } catch (err) {
      strapi.log.error("[lead-capture] write failed: " + err.message);
      // do not block download on log failure
    }

    ctx.body = { ok: true, downloadUrl, fileName: asset.fileName, category };
  },
}));
