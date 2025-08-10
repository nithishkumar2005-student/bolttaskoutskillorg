/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 15s ease infinite',
        'float': 'float 20s linear infinite',
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-10': 'rotateY(10deg)',
        'x-10': 'rotateX(10deg)',
      },
      scale: {
        '200': '2',
      },
      spacing: {
        '15': '3.75rem',
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
};
