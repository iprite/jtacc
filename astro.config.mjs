// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.PUBLIC_SITE_URL || "https://jtacc.co.th";

// https://astro.build/config
// Static output — deployed to Cloudflare (Workers Static Assets, wrangler.toml).
// Pure Astro: bilingual via route-based i18n (/th, /en), no React.
export default defineConfig({
  site,
  i18n: {
    locales: ["th", "en"],
    defaultLocale: "th",
    routing: {
      prefixDefaultLocale: true, // both languages are prefixed: /th and /en
      redirectToDefaultLocale: false,
    },
  },
  redirects: {
    "/": "/th",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
