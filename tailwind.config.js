/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-diagonal-orange': 'linear-gradient(45deg, #FFA500, #FF4500)',
      },
      boxShadow: {
        'glass': '0 2px 6px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};

