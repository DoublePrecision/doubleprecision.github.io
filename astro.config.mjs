// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import solidJs from '@astrojs/solid-js';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://doubleprecision.github.io',
  integrations: [mdx(), sitemap(), solidJs()],
  vite: {
    plugins: [tailwindcss()],
  },
});