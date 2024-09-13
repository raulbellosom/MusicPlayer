/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        pink: "#C93B76",
        "dark-blue": "#212936",
        "dark-gray": "#4D5562",
        light: "#E5E7EB",
        "light-gray": "#5f6470",
      },
    },
  },
  plugins: [],
};
