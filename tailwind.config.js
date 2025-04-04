/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        serenite: {
          purple: '#d9c6db',
          pink: '#ffefef',
          blue: '#8fbed6',
          green: '#9fcf9d'
        }
      },
      fontFamily: {
        'satisfy': ['Satisfy', 'cursive'],
        'yeseva-one': ['Yeseva One', 'serif']
      }
    },
  },
  plugins: [],
};
