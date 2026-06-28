// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
// Static output — deployed to Cloudflare Pages. The page is fully
// client-rendered (language state lives in React Context), so no SSR adapter
// is needed.
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
