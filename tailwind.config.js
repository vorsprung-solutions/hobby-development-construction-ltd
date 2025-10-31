/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js"
    
  ],

  theme: {
    extend: {},
    colors: {
      nav: "#DFF0EE",
      first: "#0055A2"
    },
  },

  plugins: [require("daisyui"), require("flowbite/plugin")],
  // plugins: [require("flowbite/plugin")],
  // plugins: [require("daisyui")],
};
