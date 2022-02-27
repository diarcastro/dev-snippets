/* Think about these colors https://color.adobe.com/color-theme_LogoFinal-MeuMundoKidsA-color-theme-19364772/ */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#F2C9DC',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FAEAF1',
          500: '#F2C9DC',
          600: '#E79CBF',
          700: '#DC6FA1',
          800: '#D14184',
          900: '#B02A68'
        },
        coldPurple: {
          DEFAULT: '#BBADD9',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#E9E5F3',
          400: '#D2C9E6',
          500: '#BBADD9',
          600: '#9B87C7',
          700: '#7B60B5',
          800: '#604697',
          900: '#483471'
        },
        iceberg: {
          DEFAULT: '#D0EFF2',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#F0FAFB',
          500: '#D0EFF2',
          600: '#A4E0E6',
          700: '#78D1DA',
          800: '#4CC2CE',
          900: '#31A5B1'
        },
        sand: {
          DEFAULT: '#F2E088',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FEFDF6',
          300: '#FAF3D2',
          400: '#F6EAAD',
          500: '#F2E088',
          600: '#ECD355',
          700: '#E7C623',
          800: '#BDA015',
          900: '#8A760F'
        },
        manhattan: {
          DEFAULT: '#F2C288',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FEFBF6',
          300: '#FAE8D2',
          400: '#F6D5AD',
          500: '#F2C288',
          600: '#ECA855',
          700: '#E78E23',
          800: '#BD7115',
          900: '#8A530F'
        },
      },
      fontFamily: {
        sans: ['Mulish', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
