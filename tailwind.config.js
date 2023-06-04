/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          100: "#E5E5E5",
          200: "#525252",
          300: "#F4F4F4"
        },
        badges: {
          100: "#8DD4CC"
        },
        primary: {
          100: "#8362F2"
        },
        border: {
          100: "#C8C8C8"
        },
        error: {
          100: "#FF0000"
        }
      }
    },
  },
  plugins: [],
}

