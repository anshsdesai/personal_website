import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // 1. Import the Tailwind integration

// You may need to run 'npm install @astrojs/tailwind' if this package is missing!

export default defineConfig({
  // 2. Add the Tailwind integration to the integrations array
  integrations: [tailwind({
    // Optional: You can pass options here, but usually the default is fine
  })],
  
  // Since you are using a GitHub link (which implies static hosting), 
  // ensuring the output is 'static' and setting the base path can be helpful.
  output: 'static',
  // base: '/', // Uncomment and adjust this if your site is hosted in a subdirectory (e.g., /personal-website/)

  // You can also add other settings here, like:
  // site: 'https://example.com',


});
