# jtacc

Bilingual (Thai / English) AI-First accounting firm landing page.

Built with [Astro](https://astro.build), React islands, and Tailwind CSS v4.
Deployed as a static site to [Cloudflare Pages](https://pages.cloudflare.com).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Scripts

| Command           | Action                                          |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Start the local dev server                      |
| `npm run build`   | Build the static site to `dist/`                |
| `npm run preview` | Preview the production build locally            |
| `npm run deploy`  | Build and deploy to Cloudflare (wrangler)       |

## Deploy to Cloudflare

Deployed as a **Workers Static Assets** site — the Worker serves the Astro
`dist/` build directly (config in `wrangler.toml`).

**Option A — Wrangler (CLI):**

```bash
npm run deploy
```

First run will prompt `wrangler login`.

**Option B — Git integration (Workers Builds):** connect this repo in the
Cloudflare dashboard (Workers & Pages) with build command `npm run build` and
deploy command `npx wrangler deploy`.

See [AGENTS.md](AGENTS.md) for architecture notes.
