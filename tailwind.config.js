/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundOpacity: {
        //prettier-ignore
        "4": "0.04",
      },
      gridTemplateRows: {
        //prettier-ignore
        "layout": "1fr 69px",
      },
      fontFamily: {
        cursive: ['"Alex Brush"', "Arial", "sans"],
        dinCon: ['"din-condensed"', "Roboto", "Arial", "sans-serif"],
      },
      backgroundImage: {
        //prettier-ignore
        "space": "url('/img/bg-1.jpg')",
        //prettier-ignore
        "splash": "url('/img/bg-2.jpg')",
        //prettier-ignore
        "swirl": "url('/img/bg-3.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
