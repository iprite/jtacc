# jtacc — bilingual AI-First accounting landing page

Built with **Astro 5** + **React islands** + **Tailwind CSS v4**, deployed as a
static site to **Cloudflare** (Workers Static Assets — the Worker serves the
`dist/` build directly; config in `wrangler.toml`).

## Architecture

- `src/pages/index.astro` — the only route; renders `<App client:load />` inside `Layout.astro`.
- `src/layouts/Layout.astro` — `<html>` shell: SEO meta, Open Graph, Google Fonts (Noto Sans Thai + Geist Mono), imports `src/styles/globals.css`.
- `src/App.tsx` — single React island wrapping the whole interactive tree.
- `src/components/*.tsx` — plain React components (lucide-react icons, Tailwind classes).
- `src/context/LanguageContext.tsx` — TH/EN language state (client-side: URL `?lang=`, localStorage, navigator). This is why the page is one hydrated island rather than `.astro` partials.
- `src/constants/translations.ts` — all TH/EN copy.

## Conventions

- Path alias `@/*` → `src/*`.
- Tailwind v4 is configured via the Vite plugin (`@tailwindcss/vite`) in `astro.config.mjs`; theme/animations live in `@theme` inside `globals.css` — no `tailwind.config`.
- Keep language state in React Context; all components read it via `useLanguage()`.

## Commands

- `npm run dev` — local dev server.
- `npm run build` — static build to `dist/`.
- `npm run preview` — serve the built site.
- `npm run deploy` — build + `wrangler deploy` (Workers Static Assets).
