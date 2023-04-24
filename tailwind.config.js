/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(#131316)",
        active: "#FF5403",
        bgActive: "#FFDDCD",
        grayish: "#4D5760",
        appBg: "#E5E5E5",
      },
    },
  },
  plugins: [],
};
