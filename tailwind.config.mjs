/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Base colors from palette
        'midnight': '#03444A',      // Midnight green - dark text, dark backgrounds
        'sea': '#00A8A8',           // Light sea green - primary accent
        'sky': '#9AD3DA',           // Non Photo blue - light backgrounds, tags
        'tangerine': '#FF924D',     // Atomic tangerine - secondary accent, CTAs
        'spanish': '#E66414',       // Spanish orange - hover states, emphasis
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
