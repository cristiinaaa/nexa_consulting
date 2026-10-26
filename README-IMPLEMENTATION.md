# NEXA Quality Consulting — implementation package

This package contains coordinated replacement files based on the service portfolio supplied in the conversation.

## Included
- `index.html` — homepage, positioning, four service lines, engagement packages
- `services.html` — service scopes, deliverables, success measures, and ideal-client descriptions
- `process.html` — Assess → Analyze → Implement → Sustain methodology and engagement types
- `about.html` — purpose and working principles; deliberately leaves founder credentials for verified details
- `contact.html` — requested consultation form fields and service area
- `styles.css` — responsive navy/cyan styling, page layouts, mobile navigation, focus styles
- `script.js` — mobile navigation, current footer year, and honest contact-form placeholder behavior

## Important deployment notes
1. These are **replacement files**, not a line-by-line patch against the current repository. The existing HTML could not be fetched reliably for a safe minimal diff. Preview the files locally and compare the design before replacing files in the live branch.
2. The form is **not live**. GitHub Pages serves static files and does not process form submissions. Connect a form provider or backend, update the form action/JavaScript accordingly, and test a real submission before publishing. Do not advertise the form as working until verified.
3. The About page intentionally contains a prompt to add approved founder information. Replace it with verified biography and credentials before launch, or remove that section.
4. No email address, phone number, customer testimonials, certifications, or client results have been invented.
5. The canonical URLs assume the site's current custom domain is `https://nexaqualitysolutions.com/`. Confirm DNS and HTTPS are active before relying on them.
6. The hero and supporting photography use externally hosted Unsplash images. For more reliable performance and control, download appropriately licensed images into `assets/` and update the CSS paths.
7. Review the live site's current logo/assets before replacing the header. This package uses a text-and-letter mark to avoid guessing an asset filename.
8. After deployment, test each page on desktop and mobile, check all navigation links, and submit a test form only after its endpoint is configured.

## Deploy
Copy the files to the root of the repository on a working branch, review the preview, then merge to the GitHub Pages publishing branch. Keep a copy of the current site so you can roll back if needed.
