const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      regular: ["Regular", ...defaultTheme.fontFamily.sans],
      mid: ["Medium", ...defaultTheme.fontFamily.sans],
      semi: ["Semi-Bold", ...defaultTheme.fontFamily.sans],
      sfBold: ["Bold", ...defaultTheme.fontFamily.sans],
      Thin: ["Thin", ...defaultTheme.fontFamily.sans],
      Light: ["Light", ...defaultTheme.fontFamily.sans],
      inter: ["Inter"]
    },
    extend: {
      colors: {
        primaryPink: "#EB568E",
        primaryBlue: "#144EE3",
        Black: "#0B101B",
        Grey: "#181E2980",
        White: "#C9CED6",
        tablerowgrey: '#181E2938',
        tableheadgrey: '#181E29',
      },
      extend: {
        colors: {
          tablerowgrey: '#0e131e',
          tableheadgrey: '#171e29',
          tabletext: '#c9ced7',
          dropIcon: '#0e131e',
          bottom: ''
        }
      },
    },
    plugins: [],
    
  }
}
