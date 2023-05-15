/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  theme: {
    borderRadius: {
      'sleeper-border-radius': '16px',
    },
    colors: {
      'border-blue': '#3a465b',
      'sleeper-bg': '#181C28',
      'widget-bg': '#293142',
      'sleeper-alt': 'rgb(var(--color-sleeper-alt) / <alpha-value>)',
      'first-place': 'rgb(var(--color-first-place) / <alpha-value>)',
      'second-place': 'rgb(var(--color-second-place) / <alpha-value>)',
      'third-place': 'rgb(var(--color-third-place) / <alpha-value>)',
    },
    fontFamily: {
      serif: ['sans-serif', 'Poppins'],
    },
    extend: {},
  },
  plugins: [],
};
