import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.efutraders.com',
  output: 'static',
  integrations: [sitemap()],
  vite: { build: { cssMinify: true } }
});
