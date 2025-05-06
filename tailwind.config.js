/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'background': {
          DEFAULT: '#1A1A1D',  // Very Dark Grey/Near Black
          light: '#25252B',    // Dark Slate
          lighter: '#4E4E50'   // Medium Slate
        },
        'text': {
          DEFAULT: '#C5C6C7',  // Light Grey
          light: '#E0E1E2'     // Off-White
        },
        'accent': {
          DEFAULT: '#007BFF',  // Electric Blue
          hover: 'rgba(0, 123, 255, 0.1)' // Blue hover effect
        }
      },
    },
  },
  plugins: [],
};