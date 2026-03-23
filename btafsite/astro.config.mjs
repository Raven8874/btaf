// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://betterthanafence.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport',
  },
  image: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'betterthanafence.com',
    }],
  },
  integrations: [sitemap()],
});
