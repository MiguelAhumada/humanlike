/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./img/circuit-board.svg')"
      },
      width: {
        '38rem': '38rem',
      },
    },
  },
  plugins: [],
};
