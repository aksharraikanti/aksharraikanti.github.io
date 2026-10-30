import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        'surface-hover': 'var(--color-surface-hover)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        border: 'var(--color-border)',
        'border-hover': 'var(--color-border-hover)',
        accent: 'var(--color-accent)',
        'accent-contrast': 'var(--color-accent-contrast)',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'SF Pro Text',
          'Inter',
          'var(--font-sans)',
          'system-ui',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '72rem',
      },
      scale: {
        '98': '0.98',
        '102': '1.02',
      },
      aspectRatio: {
        portrait: '4 / 5',
      },
      fontSize: {
        xxs: ['0.6875rem', { lineHeight: '1rem' }],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
