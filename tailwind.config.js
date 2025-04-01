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
        'pacifico': ['Pacifico', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
        'spicy-rice': ['Spicy Rice', 'cursive']
      }
    },
  },
  plugins: [],
};