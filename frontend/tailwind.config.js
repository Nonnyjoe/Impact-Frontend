const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'neutral-40': '#D0D5DD',
        'w3b-red': '#FA1011',
        'w3b-light-red': '#FA101117',
        'w3b-black': '#151515',
        'w3b-green': '#008000',
        'w3b-light-green': '#0080002a',
        'w3b-blue': '#0000FF',
        'w3b-light-blue': '#0000FF54',
        'w3b-gray': '#D2D5DA',
        white: '#FFFFFF',
        black: '#000000',
        'hero-bg': '#312A2A',
        'base-opacity': '#11131e45',
      },
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
      fontSize: {
        rmin: '1vw',
        rsm: '1.2vw',
        rmd: '1.6vw',
        rlg: '2.4vw',
        rxlg: '2.8vw',
        r2xlg: '3.2vw',
        r3xlg: '4.0vw',
        r4xlg: '4.8vw',
        r5xlg: '5.6vw',
      },
    },
  },
  plugins: [],
};
