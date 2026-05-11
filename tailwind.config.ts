import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'ui-serif', 'Georgia', 'serif']
      },
      colors: {
        ink: '#263238',
        ivory: '#f6eddb',
        paper: '#fff8ea',
        terracotta: '#c35c3e',
        saffron: '#d9a441',
        harbor: '#2b91a6',
        cypress: '#56745d',
        plum: '#6b4f6f'
      },
      boxShadow: {
        atlas: '0 18px 60px rgba(67, 48, 32, 0.18)',
        pin: '0 0 0 6px rgba(211, 129, 63, 0.16), 0 8px 18px rgba(77, 47, 28, 0.2)'
      }
    }
  },
  plugins: []
};

export default config;
