import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; 

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://sonbarse17.github.io',
  base: '/sushant-portfolio'
});
