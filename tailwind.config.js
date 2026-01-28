/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0f0f0e',
          charcoal: '#252422',
          stone: '#403d39',
          gray: '#6b6560',
          silver: '#9c9690',
          smoke: '#e8e6e1',
          cream: '#f7f5f0',
          white: '#fdfcf9',
          warm: '#c4b8a8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      fontSize: {
        'display': ['clamp(2.25rem, 4.5vw, 4rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'headline': ['clamp(1.375rem, 2.25vw, 2rem)', { lineHeight: '1.25' }],
        'body': ['1rem', { lineHeight: '1.65' }],
        'caption': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.04em' }],
      },
      borderRadius: {
        'soft': '0.5rem',
        'gentle': '0.75rem',
        'pill': '9999px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
}
