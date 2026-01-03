// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
    site: "https://formatiation.top",
    integrations: [mdx(), sitemap(), preact()],
    adapter: cloudflare({
        platformProxy: {
            enabled: true,
        },
    }),
});