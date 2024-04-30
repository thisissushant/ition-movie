/** @type {import('tailwindcss').Config} */
const lineClampPlugin = require("@tailwindcss/line-clamp");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineClamp: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
      },
    },
  },
  plugins: [lineClampPlugin],
};
