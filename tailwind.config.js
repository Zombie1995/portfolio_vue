/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto Condensed', 'sans-serif'],
        Pacifico: ['Pacifico', 'cursive'],
        Russo: ['Russo One', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
