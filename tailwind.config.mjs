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
      fontFamily: {
        // brand type (source of truth: src/styles/tokens.json)
        charter: ['Charter', '"Bitstream Charter"', 'Georgia', 'serif'],
        'plex-sans': ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        'plex-mono': ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        // legacy alias still used on the (Plan #2) landing eyebrows → brand mono
        jetbrain: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      // brand color roles (values mirror src/styles/tokens.css)
      colors: {
        paper: '#E5E7E2',
        surface: '#EEF0EB',
        raised: '#F3F4F0',
        ink: '#16181D',
        muted: '#586070',
        line: 'rgba(20, 28, 40, 0.14)',
        deep: '#1C396A',
        azure: '#3976DB',
        'azure-press': '#2B5BB0',
        orange: '#CB7034',
        'orange-press': '#B15E26',
        green: '#1F9D57',
      },
    },
  },
  // Ensure we are using the official Astro integration syntax if it's installed.
  plugins: [],
}

