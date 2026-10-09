# Blush and Bloom website

React + TypeScript + Vite + React Router. Fonts (Cormorant Garamond, Manrope) are bundled locally via Fontsource (SIL OFL). Icons: lucide-react.

## Commands
    npm install
    npm run dev      # local dev server
    npm run build    # type-check + production build to dist/
    npm run preview  # preview the build

## Structure
- `src/data/salon.ts` — all business facts, services, gallery images, FAQs. Edit here.
- `src/pages/` — one file per route (Services.tsx holds the list and the `/services/:slug` template).
- `src/components/` — Layout (header, footer, mobile menu) and shared UI.
- `src/styles/global.css` — design tokens (CSS variables at the top) and styles.
- `public/images/` — put photographs here.

## Common edits
- Colours/fonts: `:root` in `global.css`.
- Services: add objects to `services` in `salon.ts`; each gets `/services/<slug>`.
- Photos: copy files into `public/images/`, add entries to `gallery` (`demo: true` for stock photos).
- Contact/booking: set `phone`, `email`, `address`, `hours`, `bookingUrl` in `salon.ts`. Null values stay hidden.

## Deploy (Vercel)
Push to GitHub, import the repo in Vercel (framework: Vite). `vercel.json` rewrites all paths to `index.html` so direct visits to nested routes work.

## Not connected
No backend. The contact form validates only and clearly says nothing is sent. No analytics or booking system.

## Known gaps
No photographs are bundled (see ASSET_SOURCES.md). No ESLint config. No sitemap.xml (domain unknown). Not tested in a browser.
