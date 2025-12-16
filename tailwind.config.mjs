/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary - Deep medical blue
        stone: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#0a1929',
        },
        // Accent - Warm terracotta/copper for humanity
        accent: {
          50: '#fef6f3',
          100: '#fdeae3',
          200: '#fcd5c7',
          300: '#f9b49e',
          400: '#f48b6a',
          500: '#eb6b47',
          600: '#d74f2d',
          700: '#b43d22',
          800: '#943420',
          900: '#7a2f20',
          950: '#42150c',
        },
        // Neutral warm grays
        warm: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.3' }],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '72ch',
            color: '#243b53',
            h1: { fontFamily: 'Playfair Display, serif' },
            h2: { fontFamily: 'Playfair Display, serif' },
            h3: { fontFamily: 'Playfair Display, serif' },
          },
        },
      },
    },
  },
  plugins: [],
}
