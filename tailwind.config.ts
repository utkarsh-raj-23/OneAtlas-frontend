import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6600',
        'primary-dark': '#E65C00',
        'primary-light': '#FF8533',
        dark: '#111111',
        accent: '#FF6600',
        'brand-green': '#00D4B1',
        'bg-light': '#F5F5EE',
        'bg-card': '#FFFFFF',
        'text-body': '#6B7280',
        'text-heading': '#111111',
        border: '#E5E7EB',
      },
    },
  },
  plugins: [],
}
export default config
