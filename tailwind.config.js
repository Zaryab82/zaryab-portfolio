/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b1220",        // blueprint dark background
        surface: "#111827",   // card surface
        accent: "#38bdf8",    // transit blue
        text: "#e6e6e6",
      },
    },
  },
  plugins: [],
}
