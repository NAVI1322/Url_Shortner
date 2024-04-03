/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        tablerowgrey:'#0e131e',
        tableheadgrey: '#171e29',
        tabletext:'#c9ced7',
        dropIcon:'#0e131e'
      }
    },

    
  },
  plugins: [],
}


