import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // ─── Font families ───────────────────────────────────────────────────
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: [
          'var(--font-display)',
          'Tiempos Headline',
          'Cormorant Garamond',
          'Georgia',
          'serif',
        ],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },

      // ─── DESIGN.md type scale (size + lineHeight + letterSpacing) ────────
      fontSize: {
        'display-xl': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display-sm': ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'title-lg': ['1.375rem', { lineHeight: '1.3', letterSpacing: '0' }],
        'title-md': ['1.125rem', { lineHeight: '1.4', letterSpacing: '0' }],
        'title-sm': ['1rem', { lineHeight: '1.4', letterSpacing: '0' }],
        'body-md': ['1rem', { lineHeight: '1.55', letterSpacing: '0' }],
        'body-sm': ['0.875rem', { lineHeight: '1.55', letterSpacing: '0' }],
        caption: ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0' }],
        'caption-xs': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
        'nav-link': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0' }],
      },

      // ─── DESIGN.md color palette ─────────────────────────────────────────
      colors: {
        // Single accent alias — satisfies CLAUDE.md rule
        accent: '#cc785c',

        // Brand / Primary
        primary: {
          DEFAULT: '#cc785c',
          active: '#a9583e',
          disabled: '#e6dfd8',
        },

        // Surfaces
        canvas: '#faf9f5',
        'surface-soft': '#f5f0e8',
        'surface-card': '#efe9de',
        'surface-cream': '#e8e0d2',
        'surface-dark': '#181715',
        'surface-dark-elevated': '#252320',
        'surface-dark-soft': '#1f1e1b',

        // Text
        ink: '#141413',
        'body-strong': '#252523',
        'body-text': '#3d3d3a',
        muted: '#6c6a64',
        'muted-soft': '#8e8b82',

        // On-surface
        'on-primary': '#ffffff',
        'on-dark': '#faf9f5',
        'on-dark-soft': '#a09d96',

        // Borders
        hairline: '#e6dfd8',
        'hairline-soft': '#ebe6df',

        // Accents
        'accent-teal': '#5db8a6',
        'accent-amber': '#e8a55a',

        // Semantic
        success: '#5db872',
        warning: '#d4a017',
        error: '#c64545',
      },

      // ─── Shadows ─────────────────────────────────────────────────────────
      boxShadow: {
        card: '0 1px 3px rgba(20,20,19,0.08)',
        'card-md': '0 4px 12px rgba(20,20,19,0.08)',
      },
    },
  },
  plugins: [typography],
}

export default config
