/** @type {import('tailwindcss').Config} */
export default {
  // CRITICAL: This content array tells Tailwind CSS where to scan for utility classes.
  // It ensures that classes used in .astro, .ts, .jsx (if you had them), and .html files 
  // are included in the final generated CSS bundle.
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // You can define custom fonts, colors, or sizes here if needed later.
      // For example, if you wanted a custom color:
      // colors: {
      //   'dark-matter': '#0d1a2f',
      // },
    },
  },
  // Ensure we are using the official Astro integration syntax if it's installed.
  plugins: [],
}