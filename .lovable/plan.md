# Fix: forms not delivering email

## Root cause

Both the main contact form (`src/components/ContactSection.tsx`) and the ARIA Early Access form (`src/pages/Aria.tsx`) use a `mailto:` link to "send" submissions. `mailto:` does not send anything itself — it only tries to open the visitor's default email app. On most modern browsers (especially mobile and Chrome/Safari users on Gmail-in-browser), nothing opens, the user sees the success toast, and the message is silently lost. That is why submissions are not arriving at vanessa@nucleations.com.

## Fix

Switch both forms to true server-side email delivery using Lovable's built-in email infrastructure. Each submission will reliably send:
1. An internal notification to **vanessa@nucleations.com** and **info@nucleations.com**
2. A branded confirmation back to the person who submitted

Sender domain: **notify.nucleations.com** (subdomain of nucleations.com).

## Steps

1. **Set up email sender domain**
   - Configure `notify.nucleations.com` as the sender domain via Lovable Cloud's email setup (one-time DNS step — you'll add a couple of NS records at your domain registrar; emails start sending automatically once verified).

2. **Set up email infrastructure** (queue, retry, suppression, logs).

3. **Create 4 email templates** (branded, matching the Nucleations look — gradient accents, current typography, white email body):
   - `contact-internal-notification` → to Vanessa + info@, contains the full submission
   - `contact-submitter-confirmation` → to the person who submitted the contact form
   - `aria-early-access-internal` → to Vanessa + info@, contains the early access submission
   - `aria-early-access-confirmation` → to the submitter ("Thanks for requesting early access to ARIA…")

4. **Wire the forms to send via the backend**
   - `ContactSection.tsx`: replace the `mailto:` block with two `supabase.functions.invoke('send-transactional-email', …)` calls (internal + confirmation) using the form data.
   - `Aria.tsx` (Early Access form, line ~184): same pattern with the ARIA templates.
   - Keep the existing success / error toasts and "Thank You" UI; just drive them from the real send result instead of `window.open`.

5. **Verify**
   - Submit each form from the live site once DNS is verified.
   - Confirm: vanessa@ and info@ receive the notification, submitter receives the confirmation, and entries appear in the email send log.

## Notes

- No database tables for storing submissions are added in this plan (current behavior doesn't store them either). If you'd like a record kept in the backend as well, say the word and I'll add a `submissions` table.
- DNS verification can take anywhere from minutes to a few hours. Code will be ready immediately; emails start flowing as soon as the domain shows verified.
- This change is frontend wiring + backend email setup only — no visual/UI changes to the forms themselves.
