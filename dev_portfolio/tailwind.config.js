/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button).js",
  ],
  theme: {
    extend: {
      padding: {
        globalWrapper: "10rem",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
