# Zameen Naplo — zameennaplo.in

Indian land area converters (Bigha, Biswa, Katha, Dhur, Marla, Kanal, Guntha, Gaj) in Hinglish and Hindi,
plus the "ज़मीन नापो" field-area calculator (`/zameen-napo/`).

## Hosting & deploy

- Hosting: **Cloudflare Pages** (project `zameennaplo`), static files from the repo root — no build step.
- DNS: Cloudflare (`frank` / `simone.ns.cloudflare.com`). Domain registrar: Hostinger.
- Deploy: push to `main` → Cloudflare Pages deploys automatically in ~1 minute.
  If a push does not deploy, use the `manual-main` Deploy Hook in Cloudflare
  (Pages → zameennaplo → Settings → Builds → Deploy Hooks).
- `www.zameennaplo.in` → 301 redirect to `zameennaplo.in` (Cloudflare Redirect Rule).
- `functions/google94616592e18327b5.html.js` serves the Google Search Console verification file
  at its exact URL (Cloudflare Pages otherwise redirects `*.html`). `_routes.json` limits Functions to that path.
- Email: ImprovMX (`contact@zameennaplo.in`) — keep the MX and SPF records in Cloudflare DNS.

## After content changes

1. Update `<lastmod>` for changed URLs in `sitemap.xml`.
2. In Google Search Console, use URL Inspection → Request Indexing for important changed pages.
