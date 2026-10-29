/**
 * Purpose: Astro static output configuration for GitHub Pages deployment.
 */
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
  output: 'static',
  site: 'https://Sasanka-02.github.io',
  integrations: [tailwind({ applyBaseStyles: false }), icon()]
});
