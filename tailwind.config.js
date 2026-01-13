/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-bg-primary': '#fefefe',
        'light-bg-secondary': '#f5f3f0',
        'light-text-primary': '#1a1a1a',
        'light-text-secondary': '#666666',
        'light-accent': '#cc6b49',
        'light-border': '#e0ddd8',
        'dark-bg-primary': '#1a1a1a',
        'dark-bg-secondary': '#242424',
        'dark-text-primary': '#f5f3f0',
        'dark-text-secondary': '#a8a8a8',
        'dark-accent': '#e89b7e',
        'dark-border': '#3a3a3a',
      },
      fontFamily: {
        serif: ['Crimson Pro', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

