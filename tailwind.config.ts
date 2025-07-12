import type { Config } from 'tailwindcss'
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

export default {
  content: {
    files: ['./src/**/*.{js,ts,jsx,tsx}'],
    extract,
  },
  theme: {
    extend: {
      screens,
      fontSize,
    },
  },
  plugins: [
    fluid({
      checkSC144: false,
    }),
  ],
} satisfies Config
