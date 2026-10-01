/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0e0e10',
        foreground: '#f0ece6',
        primary: '#8b2d3a',
        muted: '#6b6660',
        'bg-deep': '#0a0a0b',
        'bg-elevated': '#141416',
        'bg-card': '#18181b',
        'bg-surface': '#1c1c20',
        accent: {
          DEFAULT: '#8b2d3a',
          dim: '#5c1e28',
          bright: '#a63545',
        },
        signal: {
          DEFAULT: '#4a7c8a',
          dim: '#2d5a66',
          bright: '#5e9aab',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Fira Code', 'monospace'],
        display: ['JetBrains Mono', 'SF Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
