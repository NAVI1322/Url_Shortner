const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primaryPink: "#EB568E",
        primaryBlue: "#144EE3",
        Black: "0B101B",
        Grey: "181E29",
        White: "C9CED6"
      },
    },
  },
  plugins: [],
}

