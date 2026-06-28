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
| `npm run deploy`  | Build and deploy to Cloudflare Pages (wrangler) |

## Deploy to Cloudflare

**Option A — Wrangler (CLI):**

```bash
npm run deploy
```

First run will prompt `wrangler login` and create the `jtacc` Pages project.

**Option B — Git integration:** connect this repo in the Cloudflare dashboard
(Workers & Pages → Pages) with build command `npm run build` and output
directory `dist`.

See [AGENTS.md](AGENTS.md) for architecture notes.
