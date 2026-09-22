/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F0B08',
        foreground: '#F5F0E8',
        primary: '#C5A572',
        muted: '#8A7E72',
        'bg-deep': '#080706',
        'bg-elevated': '#16100C',
        'bg-card': '#1A1410',
        gold: {
          DEFAULT: '#C5A572',
          dim: '#8B7650',
          bright: '#D4B87A',
        },
        burgundy: {
          DEFAULT: '#6B2D3E',
          dim: '#4A1F2B',
        },
        coffee: {
          dark: '#24140D',
          DEFAULT: '#3A2115',
          light: '#5A321D',
          surface: '#6B3D22',
        },
        ceramic: {
          DEFAULT: '#C4A882',
          dark: '#8B7058',
          highlight: '#DEC9A8',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Syncopate', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
