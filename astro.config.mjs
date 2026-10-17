// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: set the production domain once confirmed (enables canonical,
  // hreflang and Open Graph URLs, sitemap.xml and robots.txt Sitemap line).
  // site: 'https://www.aaronbenchimol.com',

  // Brand typefaces (diseno.md §2), downloaded at build time and served
  // from this site, so visitors' browsers never contact Google Fonts.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Playfair Display',
      cssVariable: '--font-playfair',
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Montserrat',
      cssVariable: '--font-montserrat',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Arial', 'sans-serif'],
    },
  ],
});
