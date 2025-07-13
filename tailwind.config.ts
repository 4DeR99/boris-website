import type { Config } from 'tailwindcss'
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

export default {
  darkMode: ['class'],
  content: {
    files: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    extract,
  },
  theme: {
    extend: {
      screens,
      fontSize,
      fontFamily: {
        kanit: ['var(--font-kanit)'],
        satoshi: ['var(--font-satoshi)'],
        inter: ['var(--font-inter)'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        'light-gray': '#F0F0F0',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'open-popover': {
          from: {
            opacity: '0',
            transform: 'scale(.9) skew(3deg) rotateX(-30deg)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1) skew(0deg) rotateX(0deg)',
          },
        },
        'close-popover': {
          from: {
            opacity: '1',
            transform: 'scale(1) skew(0deg) rotateX(0deg)',
          },
          to: {
            opacity: '0',
            transform: 'scale(.9) skew(3deg) rotateX(-30deg)',
          },
        },
      },
      animation: {
        'open-popover': 'open-popover 0.4s cubic-bezier(0.59, 0, 0.06, 1)',
        'close-popover': 'close-popover 0.4s cubic-bezier(0.59, 0, 0.06, 1)',
      },
    },
  },
  plugins: [
    fluid({
      checkSC144: false,
    }),
    require('tailwindcss-animate'),
  ],
} satisfies Config
