/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        text: {
          100: "#6A6F7A",
          200: "#292D32",
          300: "#171717",
        },
      },
    },
  },
  plugins: [],
};
