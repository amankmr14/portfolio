/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif']
      },
      // textShadow: {
      //   'outline': '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
      // }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-outline': {
            textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
            color: '#ffffff'
        }
      }
      addUtilities(newUtilities, 'responsive', 'hover')
    }
  ],
}