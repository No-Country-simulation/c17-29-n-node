/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react');
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.375rem',
      '2xl': '1.5rem',
      '3xl': '1.6875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        "mainTheme": {
          extend: "light",
          colors: {
            main: '#FFF3B0',
            secondary: '#2D3748',
            primary: '#3182CE',
            accent: '#63B3ED',
            danger: '#E53E3E',
            success: '#48BB78',
            warning: '#ED8936',
            background: "#FCFCFC",
          },
        }
      },
      defaultTheme: "light",
    },
    )],
};
