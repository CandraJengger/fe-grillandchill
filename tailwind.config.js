module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Poppins"', 'sans-serif'],
      knewave: ['"Knewave"', 'cursive'],
    },
    extend: {
      colors: {
        primary: '#FFBE2E',
        black: '#242424',
      },
      borderRadius: {
        '4xl': '44px',
      },
      width: {
        420: '420px',
      },
      zIndex: {
        0: '-11',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
