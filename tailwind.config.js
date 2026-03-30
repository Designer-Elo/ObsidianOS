/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF7135",
        surface: "#090909",
        border: "#242424",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'heading-gradient': 'radial-gradient(circle, #FFFFFF 0%, #999999 100%)',
      }
    },
  },
  plugins: [],
}
