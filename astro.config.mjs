// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://clystian.github.io',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
