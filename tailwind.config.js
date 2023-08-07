/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: '375px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        clrBlack:"#f4e6e6",
        clrBlackSecond:"#262626",
        clrGrey:"#29323d",
        clrGreySecond:"#a1a8b5",
        clrWhiteFirst:"#ffffff",
        clrWhiteSecond:"#f5f5f5",
        clrWhiteThree:"#ededed",
        clrWhiteFourth:"#e3e3e3",
        clrYellow:"#f2cb31",
        clrOrange:"#fa7e70",
      }
    },
  },
  plugins: [],
}

