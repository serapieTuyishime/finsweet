/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      colors: {
        'primary': '#1D2130',
        'b': '#1D2130',
        'radialgradient': 'background-image: radial-gradient(farthest-corner at 0 50%, rgb(222, 242, 251), rgb(235, 255, 250), white, white, white)',
        'radial-gradient-center': 'background-image: radial-gradient(rgb(222, 242, 251), rgb(235, 255, 250), white, white, white)'
      },
      fontSize:{
        '3\.5xl':  ['2rem', {
          lineHeight: '2.4rem',
          letterSpacing: '-0.02em',
        }],
      },
    },
  },
  plugins: [],
}
