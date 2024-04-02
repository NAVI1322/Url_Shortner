/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        tablerowgrey:'#181E2938',
        tableheadgrey: '#181E29'
      }
    },

    
  },
  plugins: [],
}


