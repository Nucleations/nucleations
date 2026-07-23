## Plan: Rebuild the Courses page

Replace the current placeholder `/courses` page with a full course catalog while preserving the existing site design system (fonts, colors, gradient hero, card styling from `AIEducationSection`, and the `ContactSection` at the bottom untouched).

### Files touched
- `src/pages/Courses.tsx` — replace the placeholder re-export with a real page component.
- (No changes to `src/components/PlaceholderPages.tsx` — the `Courses` export there stays but is no longer imported. Leaving it avoids touching unrelated code.)
- (No new assets. All logos and the featured hero use empty placeholder containers with `bg-muted` and dashed borders, per the request, ready for manual upload later.)

### Page structure

1. `TopBanner` + `SiteHeader` (same as other pages).
2. Hero section — reuse `hero-gradient-green animate-gradient-shift` treatment:
   - Eyebrow pill "Courses"
   - H1: "AI courses and talks for what's next"
   - Short intro paragraph.
3. Featured course card (visually differentiated):
   - Full-width card, `border-2 border-primary`, `shadow-elegant`, "Featured" pill (primary background) in the top-left.
   - Two-column layout on `md+`: left = large hero image placeholder (aspect-video, `bg-muted` with dashed border and centered "Featured image" hint); right = content.
   - Content column: small Maven logo placeholder (h-10, dashed box) next to the format line, date pill, title, body copy, "What you'll learn" bullet list, promo note ("Use code OPEN50 for 50% off till Aug. 1. Limited seats.") styled like the existing promo line in `AIEducationSection`, and primary CTA button linking to the Maven URL (new tab).
4. Remaining courses grid — `grid md:grid-cols-2 gap-8`, cards use the exact same styling used by boxes in `AIEducationSection` (`bg-card/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-secondary/20 shadow-soft hover:shadow-elegant`). Ordered by date ascending:
   - Course 2 — Aug 18 — CPA BC logo placeholder
   - Course 3 — Oct 23 — CPA Alberta logo placeholder
   - Course 4 — Nov 6 — CPA Alberta logo placeholder + secondary note "This webinar is also available on-demand through GTAAFN" with GTAAFN logo placeholder and the GTAAFN link
   - Course 5 — Nov 27 — CPA Alberta logo placeholder

   Each card contains: logo placeholder row (small dashed box ~48px tall + format line text), date pill, title, body copy, "What you'll learn" / "By the end..." bullet list, CTA.
5. CTA states:
   - Active CTAs use the primary `Button` (rounded-xl), open external links in a new tab.
   - "Coming soon" CTAs render as a `Button` with `disabled` prop and label "Coming soon" (matches disabled state already used by shadcn buttons elsewhere).
6. Course 5's ARIA mention in the bullet list is rendered as an inline `Link` (or `<a>` for consistency) to `/aria`.
7. `ContactSection` at the bottom, unchanged.

### Placeholder conventions
- Small logo slot: `<div className="h-12 w-32 rounded-md border-2 border-dashed border-border bg-muted/40 flex items-center justify-center text-xs text-muted-foreground">Logo</div>` — consistent across all cards.
- Featured hero image: `<div className="aspect-video w-full rounded-xl border-2 border-dashed border-border bg-muted/40 flex items-center justify-center text-sm text-muted-foreground">Featured image</div>`.
- These give the user obvious targets to swap real assets into later.

### Out of scope
- No changes to `ContactSection`, header, banner, or any other page.
- No new routes; `/courses` already routes to `src/pages/Courses.tsx`.
- No image uploads — placeholders only, per the request.
