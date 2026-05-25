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
        primary: '#635BFF',
        'primary-dark': '#4F46E5',
        'primary-light': '#7A73FF',
        dark: '#0A2540',
        accent: '#FF5996',
        'brand-green': '#00D4B1',
        'bg-light': '#FAFBFF',
        'bg-card': '#F6F9FC',
        'text-body': '#425466',
        'text-heading': '#0A2540',
        border: '#E3E8EE',
      },
    },
  },
  plugins: [],
}
export default config