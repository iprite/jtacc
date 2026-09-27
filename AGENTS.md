# jtacc — bilingual AI-First accounting landing page

Built with **Astro 7 (pure, no UI framework)** + **Tailwind CSS v4**, deployed as a
static site to **Cloudflare** (Workers Static Assets — the Worker serves the
`dist/` build directly; config in `wrangler.toml`).

> Follows the house standard in [`../_standard/docs/FRAMEWORK.md`](../_standard/docs/FRAMEWORK.md)
> (page sites = Astro 7 + TW4 + Cloudflare) and [`../_standard/docs/DESIGN.md`](../_standard/docs/DESIGN.md).

## Architecture

- **i18n = route-based** (`/th`, `/en`) via Astro's `i18n` config (`defaultLocale: "th"`,
  `prefixDefaultLocale: true`). Root `/` redirects to `/th` (`redirects` in `astro.config.mjs`).
- `src/pages/[lang]/index.astro` — single dynamic route, `getStaticPaths` emits `th` + `en`;
  passes `lang` to every section component.
- `src/layouts/Layout.astro` — `<html lang={lang}>` shell: SEO meta, Open Graph, Google Fonts
  (Noto Sans Thai + Geist Mono), imports `src/styles/globals.css`.
- `src/components/*.astro` — pure Astro section components, each takes a `lang` prop and reads
  copy from `translations[lang]`. Interactivity (navbar scroll/mobile menu, contact form,
  dashboard demo) is plain vanilla `<script>` — no React, no hydration directives.
- `src/components/Icon.astro` — inline lucide SVGs by `name` (replaces `lucide-react`).
- `src/constants/translations.ts` — all TH/EN copy (consumed server-side per route).

## Conventions

- Path alias `@/*` → `src/*`.
- Tailwind v4 via the Vite plugin (`@tailwindcss/vite`); theme/animations live in `@theme`
  inside `globals.css` — no `tailwind.config`.
- **No React.** Language comes from the route (`lang` prop), not client state. Add a new
  string to `translations.ts` (both `th` and `en`) and read it via the component's `lang` prop.
- Icons: add the path to `Icon.astro`'s map and use `<Icon name="..." />`.
- Interactive widgets: one bundled `<script>` per component that wires `[data-*]` hooks.

## Commands

- `npm run dev` — local dev server (port 3101).
- `npm run build` — static build to `dist/` (emits `/th`, `/en`, `/` redirect).
- `npm run check` — `astro check` (types).
- `npm run preview` — serve the built site.
- `npm run deploy` — build + `wrangler deploy` (Workers Static Assets).
+
## กติกา Git กลาง (บังคับใช้)

ก่อนเริ่มงานใหม่ ให้รัน `git fetch --prune`.

1. `main` เป็น branch หลักเพียง branch เดียว: ห้ามทำงานหรือ push ตรง
2. งานหนึ่งเรื่องใช้หนึ่ง branch: `codex/<งาน>` หรือ `claude/<งาน>`
3. ทุกงาน รวม hotfix ต้องเปิด PR ขนาดเล็กและจบในเรื่องเดียว
4. ตรวจแบบ risk-based: อย่างน้อย pre-push/local checks ที่เกี่ยวข้องต้องผ่าน
5. “PR ผ่าน” = ไม่มี conflict + checks ที่เกี่ยวข้องผ่าน + ผู้รับผิดชอบอนุมัติ; แล้ว merge ทันที
6. หลัง merge ต้องลบ source branch ทั้ง remote และ local ทันที
7. branch ที่ยังไม่ merge ห้ามค้างเกิน 7 วันโดยไม่มี owner และแผนชัดเจน
8. clone ที่ไม่มี Husky ต้องเปิด pre-push guard ด้วย `git config core.hooksPath .husky`

ไม่มี GitHub Actions สำหรับ CI/build/deploy ของแอป; ให้ยึด local/pre-push checks เป็นด่านคุณภาพ. GitHub Actions แบบ manual งาน VPS ไม่ใช่ CI.
