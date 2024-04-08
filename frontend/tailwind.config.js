/** @type {import('tailwindcss').Config} */
import('tailwindcss').Config

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md-height': { 'raw': '(min-height: 450px)' },

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {
      colors: {
        "brand-tan": "#f3e6dd",
        "brand-pale": "#f8f1eb",
        "brand-olive": "#8b865c",
        "brand-scarlet": "#d87355"

      }
    },
  },

  plugins: [require("@tailwindcss/forms")],
}

