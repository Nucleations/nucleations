## Plan: Update Top Banner to Maven Lightning Lesson

### Goal
Replace the current CPA Ontario webinar banner on the homepage with a Maven-promoted Lightning Lesson banner.

### Changes
1. **Add Maven logo asset**
   - Copy `maven_logo.png` from user uploads to `src/assets/maven-logo.png`.

2. **Rewrite `src/components/TopBanner.tsx`**
   - Import the Maven logo instead of the CPA Ontario logo.
   - Update the external link constant to `https://maven.com/p/137650/the-missing-method-map-your-work-before-you-build-with-ai`.
   - Update layout to show:
     - Maven logo (left)
     - Headline: "Watch our free 30-minute Lightning Lesson, The Missing Method: Map Your Work Before You Build with AI"
     - Subheading: "Selected by Maven for The AI-Powered Professional curated series."
     - CTA button: "Watch now"
   - Keep the existing primary background and responsive wrapping behavior.

3. **Verify**
   - Check the homepage preview to confirm the banner renders correctly at desktop and mobile widths.

### Files touched
- `src/components/TopBanner.tsx`
- New asset: `src/assets/maven-logo.png`