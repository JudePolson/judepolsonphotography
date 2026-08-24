// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Update this once the domain is attached in Cloudflare.
  site: 'https://judepolson.com',
  output: 'static',
  build: { format: 'directory' },
  integrations: [sitemap()],
  image: {
    // Generous widths: photography is the product. Astro emits only what's used.
    responsiveStyles: true,
  },
});
