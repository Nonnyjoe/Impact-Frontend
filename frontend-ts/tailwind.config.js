/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      'neutral-40': '#D0D5DD',
      'w3b-red': '#FA1011',
      'w3b-black': '#151515',
      white: '#FFFFFF',
      black: '#000000',
      'hero-bg': '#312A2A',
      'base-opacity': '#11131e45',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        card: '10px 10px 50px 3px #275C8D1A',
        glow: ' 0px 30px 40px 0px rgba(250, 16, 17, 0.25)',
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      },
      maxWidth: {
        '8xl': '1440px',
        '9xl': '1600px',
        '10xl': '1920px',
      },
    },
  },
  plugins: [],
};
