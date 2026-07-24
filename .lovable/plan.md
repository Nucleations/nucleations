## Diagnosis (confirmed)

The featured course image on `/courses` is a CDN-hosted asset served from the `/__l5e/...` path. On `nucleations.lovable.app` it loads correctly (HTTP 200, `content-type: image/png`). On the custom domain `nucleations.ai`, that same URL returns the SPA's `index.html` (HTTP 200 but `content-type: text/html`, served by Vercel), so the browser shows a broken image.

This is the exact same root cause as the ARIA hero video issue we already fixed — the custom domain doesn't proxy `/__l5e/*` asset paths, only the Lovable subdomain does.

## Fix

Apply the same absolute-URL pattern in `src/pages/Courses.tsx` that we used in `src/pages/Aria.tsx`:

- Add `const ASSET_ORIGIN = 'https://nucleations.lovable.app';`
- Compute the featured image URL as `ASSET_ORIGIN + featuredCourseAsset.url` (when the pointer path starts with `/__l5e/`), and use that in the `<img src>`.

No other `.asset.json` references on `/courses` need changes (the other logos are Vite-bundled from `/assets/*` and already work on both domains).

## After the code change

Publish so it goes live on the custom domain.
