/**
 * Purpose: Astro static output configuration, deployed on Vercel.
 * `site` drives canonical/OG URLs, robots.txt and sitemap.xml. On Vercel it is taken
 * from the project's production domain; set SITE_URL to override (e.g. a custom domain).
 */
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:4321');

export default defineConfig({
  output: 'static',
  site,
  integrations: [tailwind({ applyBaseStyles: false }), icon()]
});
