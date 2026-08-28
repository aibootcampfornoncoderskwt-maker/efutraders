import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.efutraders.com',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you') && !page.includes('/404')
    })
  ],
  vite: { build: { cssMinify: true } }
});
