/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        rotaion: 'rotaion 0.3s ease-in-out 1'
      },
      container: {
        padding: {
          default: "1rem",
          sm: "1.5rem",
          md: "1.5rem",
          lg: "2rem",
          xl: "2rem",
        },
      },
      keyframes: {
        rotaion: {
          '0%': { 'transform': 'rotate(0deg)' },
          '100%':{ 'transform' : 'rotate(360deg)'}
        }
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    
  ],
};
