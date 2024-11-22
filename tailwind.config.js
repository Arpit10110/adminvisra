/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'below-tab': { 'max': '880px' }, // custom breakpoint for below 600px
        'hidde-nav': { 'max': '750px' }, // custom breakpoint for below 600px
        'below-sm': { 'max': '650px' },
      },
      colors: {
        "primary-blue": "rgb(39, 129, 239)", // corrected RGB syntax
      },
    },
  },
  plugins: [],
};
