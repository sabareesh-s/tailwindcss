const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  }, 
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.default-scroll-color': {
          'scrollbar-color': '#CFD8DC #90A4AE'
        }
      })
    })
  ],
}



// module.exports = {
//   theme: {
//     extend: {
//       spacing: {
//         7: "1.75rem"
//       },
//       height: {
//         128: "280px"
//       }
//     }
//   },
//   variants: {},
//   plugins: []
// };
