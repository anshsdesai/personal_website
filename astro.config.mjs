import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Keep in sync with SITE in src/lib/structuredData.ts (used for canonical/OG/JSON-LD).
  site: 'https://anshdesai.me',
  output: 'static',
  integrations: [tailwind()],
});
