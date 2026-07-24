## Plan: Replace /courses featured course image

### What we'll do
1. Upload the new image `Maven_Course_image.jpg` as a Lovable Asset so it is served from the CDN.
2. Create a new asset pointer file in `src/assets/` (e.g., `courses-featured-workshop.jpg.asset.json`).
3. Update `src/pages/Courses.tsx` to import the new asset pointer instead of the current `courses-featured-workshop.png.asset.json`.
4. Keep the existing `ASSET_ORIGIN` absolute-URL logic so the image loads correctly on both `nucleations.lovable.app` and the custom domain.
5. Verify the build passes.
6. Publish the site so the change is live.

### No changes to
- Page layout, copy, or other sections on `/courses`.
- Other image assets or logos.

### After publishing
- I'll check the live `/courses` page to confirm the new image appears correctly.