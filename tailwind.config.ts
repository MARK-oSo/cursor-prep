import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    borderRadius: {
      none: '0',
      sm: '6px',
      DEFAULT: '10px',
      md: '10px',
      lg: '16px',
      xl: '24px',
      full: '9999px',
    },
    extend: {
      colors: {
        'bg-base': '#0A0A0F',
        'bg-surface': '#111118',
        'bg-elevated': '#1A1A24',
        'border-subtle': '#1F1F2E',
        'border-strong': '#2A2A3D',
        'text-primary': '#F5F5FA',
        'text-secondary': '#A0A0B8',
        'text-muted': '#6B6B82',
        'accent-primary': '#7C5CFF',
        'accent-secondary': '#22D3EE',
        'accent-tertiary': '#F472B6',
        'accent-success': '#10B981',
        'accent-warning': '#F59E0B',
      },
      fontFamily: {
        display: ['Geist Variable', 'Inter Variable', 'system-ui', 'sans-serif'],
        sans: ['Inter Variable', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono Variable', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        display: ['80px', { lineHeight: '1.0', letterSpacing: '-0.04em' }],
        h1: ['60px', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        h2: ['44px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        h3: ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '4xl': '96px',
        '5xl': '128px',
        '6xl': '160px',
      },
      boxShadow: {
        'glow-violet': '0 0 60px -10px rgba(124, 92, 255, 0.5)',
        'glow-cyan': '0 0 60px -10px rgba(34, 211, 238, 0.5)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #7C5CFF 0%, #22D3EE 100%)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'blur-in': {
          '0%': { opacity: '0', filter: 'blur(12px)', transform: 'translateY(8px)' },
          '100%': { opacity: '1', filter: 'blur(0)', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px -5px rgba(124, 92, 255, 0.4)' },
          '50%': { boxShadow: '0 0 40px -5px rgba(124, 92, 255, 0.7)' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        'blur-in': 'blur-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
