const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      regular: ["Regular", ...defaultTheme.fontFamily.sans],
      mid: ["Medium", ...defaultTheme.fontFamily.sans],
      semi: ["Semi-Bold", ...defaultTheme.fontFamily.sans],
      inter: ["Inter"]
    },
    extend: {
      colors: {
        primaryPink: "#EB568E",
        primaryBlue: "#144EE3",
        Black: "#0B101B",
        Grey: "#181E29",
        White: "#C9CED6",
        tablerowgrey: '#181E2938',
        tableheadgrey: '#181E29'
      },
    },
  },
  plugins: [],
}


